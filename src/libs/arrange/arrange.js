/*

This is a release of LimberGridView 0.0.0, brought to you by Subendra Kumar Sharma.
This software is released under the GNU General Public License version 3, or (at your option) any later version.

LimberGridView, a powerful JavaScript Libary that gives you flexible, movable, resizable(any size) and auto-arranging grids. 

Copyright © 2018-2020, Subendra Kumar Sharma. All Rights reserved. (sharma.subendra.kr@gmail.com, sharma.subendrakr@yahoo.com)

This file is part of LimberGridView.

LimberGridView is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

LimberGridView is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with LimberGridView.  If not, see <https://www.gnu.org/licenses/>.

*/

import { IntervalTreesIterative } from "interval-trees";
import { ClosestBST } from "closest-bst";
import {
	positionData as pd,
	modifiedPositionData as mpd,
} from "../../variables/essentials";
import privateConstants from "../../constants/privateConstants";
import publicConstants, {
	getPublicConstantByName,
} from "../../constants/publicConstants";
import {
	getMinMaxY,
	getTopBottomWS,
	fixMinYMaxY,
	getItemsInWorkSpace,
	getItemsBelowBottomWorkSpace,
	getItemDimenWithMargin,
	getItemDimenWithRBMargin,
	getItemsToArrangeScore,
	// assignScoreToFreeRects,
	cBSTRectComparator,
	cBSTLComp,
	cBSTRComp,
	getPerfectMatch,
	shiftItems,
} from "./arrangeUtils";
import {
	getRectObjectFromCo,
	subtractRect,
	doRectsOverlap,
	areRectsAdjacent,
	getCoordinates,
	mergeRects,
	isRectInside,
	areRectsOnSameYAxisExPath,
	areRectsIdentical,
} from "../rect/rectUtils";
import { shuffle } from "../array/arrayUtils";
import { filter } from "../utils/utils";
import Stack from "../stack/stack";
import {
	printUnmergedFreeRects,
	printMergedFreeRects,
	printResultStackRects,
	printStackRects,
	printMergedTempRects,
	printStackTopRect,
	printStackTopAdjRect,
	printAdjRect,
} from "../debug/debug";
window.mergeRects = mergeRects;
export const arrangeAffectedItems = (
	affectedItems,
	resizedBottomY,
	toY,
	movedBottomY,
	arrangeFor
) => {
	const p1 = performance.now();

	const idCount = { idCount: 0 };

	const { minY, maxY } = getMinMaxY(
		affectedItems,
		resizedBottomY,
		toY,
		movedBottomY
	);

	// last element is moved or resized item;
	const itemsToArrange = new Array(affectedItems.length - 1);
	const iToALen = affectedItems.length - 1;
	for (let i = 0; i < iToALen; i++) {
		itemsToArrange[i] = affectedItems[i];
	}

	const workSpaceRectCo = {
		tl: { x: publicConstants.MARGIN, y: minY },
		tr: { x: privateConstants.WIDTH - publicConstants.MARGIN, y: minY },
		br: { x: privateConstants.WIDTH - publicConstants.MARGIN, y: maxY },
		bl: { x: publicConstants.MARGIN, y: maxY },
	};

	const combinedWorkSpaceRectCo = {
		tl: { ...workSpaceRectCo.tl },
		tr: { ...workSpaceRectCo.tr },
		br: { ...workSpaceRectCo.br },
		bl: { ...workSpaceRectCo.bl },
	};
	const { topWorkSpaceCo, bottomWorkSpaceCo } = getTopBottomWS(workSpaceRectCo);
	const shrinkRes = shrinkTopBottomWS(topWorkSpaceCo, bottomWorkSpaceCo);

	if (shrinkRes.integrateTop) {
		combinedWorkSpaceRectCo.tl = { ...topWorkSpaceCo.tl };
		combinedWorkSpaceRectCo.tr = { ...topWorkSpaceCo.tr };
	}
	if (shrinkRes.integrateBottom) {
		combinedWorkSpaceRectCo.br = { ...bottomWorkSpaceCo.br };
		combinedWorkSpaceRectCo.bl = { ...bottomWorkSpaceCo.bl };
	}

	let itemsInBottomWorkSpace = getItemsInWorkSpace(
		getRectObjectFromCo(bottomWorkSpaceCo),
		true
	);
	const itemsBelowBottomWorkSpace = getItemsBelowBottomWorkSpace(
		bottomWorkSpaceCo,
		true
	);

	let combinedWorkSpaceRect = getRectObjectFromCo(combinedWorkSpaceRectCo);
	let itemsInCombinedWorkSpace = getItemsInWorkSpace(combinedWorkSpaceRect);

	const shiftHeight =
		(getPublicConstantByName("MIN_HEIGHT_AND_WIDTH") -
			publicConstants.MARGIN * 2) /
		2;
	let arranged = {};
	let arrangedCount = 0;
	let workSpaceResizeCount = 0;

	let DEBUG_COUNT = 0;

	while (arrangedCount !== iToALen) {
		// sort items in workspace by lt.x  i.e horizontally
		itemsInCombinedWorkSpace.sort((a, b) => a.x - b.x);

		const { it: freeRectsItY, idCount: lastId1 } = sweepLine(
			combinedWorkSpaceRect,
			combinedWorkSpaceRectCo,
			itemsInCombinedWorkSpace,
			idCount.idCount
		);
		idCount.idCount = lastId1;

		const freeRectsArr = freeRectsItY.getDataInArray();
		shuffle(freeRectsArr);

		assignAdjacentRects(freeRectsItY);

		// DEBUG:
		printUnmergedFreeRects(freeRectsArr.map((o) => o.d));

		const { mergedRects, idCount: lastId2 } = mergeFreeRects(
			freeRectsArr,
			idCount.idCount
		);
		idCount.idCount = lastId2;

		// DEBUG:
		printMergedFreeRects(mergedRects.map((o) => o.d));

		const { overlappedRects } = findOverlapped(mergedRects);

		// DEBUG:
		printMergedFreeRects(overlappedRects.map((o) => o.d));

		const {
			arranged: _arranged,
			itemsInBottomWorkSpace: _itemsInBottomWorkSpace,
			idCount: lastId3,
		} = arrange(
			itemsToArrange.filter((id) => !arranged[id]),
			overlappedRects,
			getRectObjectFromCo(topWorkSpaceCo),
			getRectObjectFromCo(bottomWorkSpaceCo),
			combinedWorkSpaceRectCo,
			idCount.idCount,
			arrangeFor
		);
		idCount.idCount = lastId3;

		itemsInBottomWorkSpace = [
			...itemsInBottomWorkSpace,
			...Object.keys(_itemsInBottomWorkSpace),
		];

		arranged = { ...arranged, ..._arranged };
		const _arrangedArr = Object.values(_arranged);
		itemsInCombinedWorkSpace = [...itemsInCombinedWorkSpace, ..._arrangedArr];

		arrangedCount += _arrangedArr.length;

		if (arrangedCount !== iToALen) {
			// resize workSpace and push bottom workspace down
			workSpaceResizeCount++;
			console.log("workSpaceResizeCount", workSpaceResizeCount);

			workSpaceRectCo.br.y += shiftHeight;
			workSpaceRectCo.bl.y += shiftHeight;
			bottomWorkSpaceCo.tl.y += shiftHeight;
			bottomWorkSpaceCo.tr.y += shiftHeight;
			bottomWorkSpaceCo.br.y += shiftHeight;
			bottomWorkSpaceCo.bl.y += shiftHeight;
			combinedWorkSpaceRectCo.br.y += shiftHeight;
			combinedWorkSpaceRectCo.bl.y += shiftHeight;

			combinedWorkSpaceRect = getRectObjectFromCo(combinedWorkSpaceRectCo);

			shiftItems(itemsInBottomWorkSpace, shiftHeight);
		}

		DEBUG_COUNT++;
		if (DEBUG_COUNT > 50) {
			throw "Arrange time out";
		}
	}

	if (workSpaceResizeCount > 0) {
		// push items in below bottom workspace below
		shiftItems(itemsBelowBottomWorkSpace, shiftHeight * workSpaceResizeCount);

		// put items in bottom workspace and below bottom workspace in arranged map
		let len = itemsInBottomWorkSpace.length;
		for (let i = 0; i < len; i++) {
			arranged[itemsInBottomWorkSpace[i]] = mpd[itemsInBottomWorkSpace[i]];
		}

		len = itemsBelowBottomWorkSpace.length;
		for (let i = 0; i < len; i++) {
			arranged[itemsBelowBottomWorkSpace[i]] =
				mpd[itemsBelowBottomWorkSpace[i]];
		}
	}

	const p2 = performance.now();
	console.log("arrange total: ", p2 - p1);

	return arranged;
};

export const shrinkTopBottomWS = (topWorkSpace, bottomWorkSpace) => {
	let topWSItems, bottomWSItems;
	let res = { integrateTop: false, integrateBottom: false };
	if (topWorkSpace) {
		topWSItems = getItemsInWorkSpace(getRectObjectFromCo(topWorkSpace));
		const sweepRes = sweepLineTop(topWorkSpace, topWSItems);

		if (sweepRes < topWorkSpace.bl.y) {
			topWorkSpace.tl.y = sweepRes;
			topWorkSpace.tr.y = sweepRes;

			res.integrateTop = true;
		}
	}

	if (bottomWorkSpace) {
		bottomWSItems = getItemsInWorkSpace(getRectObjectFromCo(bottomWorkSpace));
		const sweepRes = sweepLineBottom(bottomWorkSpace, bottomWSItems);

		if (sweepRes > bottomWorkSpace.tl.y) {
			bottomWorkSpace.bl.y = sweepRes;
			bottomWorkSpace.br.y = sweepRes;

			res.integrateBottom = true;
		}
	}

	return res;
};

export const sweepLineTop = (area, items) => {
	const len = items.length;
	const it = new IntervalTreesIterative();

	for (let i = 0; i < len; i++) {
		it.insert({
			low: items[i].y,
			high: items[i].y + items[i].height,
			d: {
				rect: items[i],
			},
		});
	}

	let resultPoint = area.bl.y;
	let res, rLen;
	let breakSig = false;

	for (let i = 0; i < len; i++) {
		res = it.findAll({ low: items[i].y + items[i].height, high: area.bl.y });
		rLen = res.length;
		breakSig = false;
		for (let j = 0; j < rLen; j++) {
			if (
				areRectsOnSameYAxisExPath(
					getCoordinates(items[i]),
					getCoordinates(res[j].d.rect)
				) &&
				!areRectsIdentical(
					getCoordinates(items[i]),
					getCoordinates(res[j].d.rect)
				)
			) {
				breakSig = true;
				break;
			}
		}
		if (!breakSig && items[i].y + items[i].height < resultPoint) {
			resultPoint = items[i].y + items[i].height;
		}
	}

	return resultPoint;
};

export const sweepLineBottom = (area, items) => {
	const len = items.length;
	const it = new IntervalTreesIterative();

	for (let i = 0; i < len; i++) {
		it.insert({
			low: items[i].y,
			high: items[i].y + items[i].height,
			d: {
				rect: items[i],
			},
		});
	}

	let resultPoint = area.tl.y;
	let res, rLen;
	let breakSig = false;
	for (let i = 0; i < len; i++) {
		res = it.findAll({ low: area.tl.y, high: items[i].y });
		rLen = res.length;
		breakSig = false;
		for (let j = 0; j < rLen; j++) {
			if (
				areRectsOnSameYAxisExPath(
					getCoordinates(items[i]),
					getCoordinates(res[j].d.rect)
				) &&
				!areRectsIdentical(
					getCoordinates(items[i]),
					getCoordinates(res[j].d.rect)
				)
			) {
				breakSig = true;
				break;
			}
		}
		if (!breakSig && items[i].y > resultPoint) {
			resultPoint = items[i].y;
		}
	}

	return resultPoint;
};

export const sweepLine = (area, areaCo, items, lastId) => {
	// area: area to sweep
	// area: area to sweep Coordinate Form
	// items: items in area

	let idCount = lastId;

	const it = new IntervalTreesIterative();

	it.insert({
		low: areaCo.tl.y,
		high: areaCo.bl.y,
		d: { id: idCount++, rect: area, a: {}, o: {}, ref: null },
	});

	let tempItem;
	let fInterval = { low: 0, high: 0, d: null };
	let intervals;
	let iLen = 0;
	let diff;
	let dLen = 0;

	const len = items.length;
	for (let i = 0; i < len; i++) {
		tempItem = getCoordinates(items[i]);
		fInterval = { low: tempItem.tl.y, high: tempItem.bl.y };
		intervals = it.findAll(fInterval);
		iLen = intervals.length;
		for (let j = 0; j < iLen; j++) {
			if (
				doRectsOverlap(intervals[j].d.rect, getItemDimenWithMargin(items[i]))
			) {
				diff = subtractRect(
					intervals[j].d.rect,
					getItemDimenWithMargin(items[i]),
					true
				);

				dLen = diff.length;
				for (let k = 0; k < dLen; k++) {
					it.insert({
						low: diff[k].tl.y,
						high: diff[k].bl.y,
						d: {
							id: idCount++,
							rect: getRectObjectFromCo(diff[k]),
							a: {},
							o: {},
							ref: null,
						},
					});
				}

				it.remove(intervals[j].interval, intervals[j].d);
			}
		}
	}

	return { it, idCount };
};

export const assignAdjacentRects = (rectsItY) => {
	const rectItYArr = rectsItY.getDataInArray();

	const len = rectItYArr.length;
	let resY, lenY;

	for (let i = 0; i < len; i++) {
		resY = rectsItY.findAll(rectItYArr[i].interval);
		lenY = resY.length;
		for (let j = 0; j < lenY; j++) {
			if (areRectsAdjacent(rectItYArr[i].d.rect, resY[j].d.rect)) {
				rectItYArr[i].d.a[resY[j].d.id] = resY[j];
			}
		}
	}
};

export const mergeFreeRects = (freeRectsArr, lastId) => {
	const stack = new Stack();
	let tempStack;
	const resultIt = new IntervalTreesIterative();

	let adjacents,
		adj,
		top,
		keys,
		keyslen,
		mergedObject,
		mergedRect,
		mergedRects,
		mergeRectsLen;
	let breakSig = false;
	let idCount = lastId;
	const freeRectsLen = freeRectsArr.length;

	for (let k = 0; k < freeRectsLen; k++) {
		if (freeRectsArr[k].d.ref !== null) {
			continue;
		}

		stack.push(freeRectsArr[k]);
		while (!stack.isEmpty()) {
			top = stack.pop();
			tempStack = new Stack();
			// printStackTopRect(top.d);

			keys = Object.keys(top.d.a);
			keyslen = keys.length;
			breakSig = false;
			for (let i = 0; i < keyslen; i++) {
				if (!top.d.a[keys[i]]) {
					continue;
				}
				adj = top.d.a[keys[i]];
				// printStackTopAdjRect(adj.d);
				while (adj?.d?.ref) {
					adj = adj.d.ref;
					// printStackTopAdjRect(adj.d);
				}

				mergedRects = mergeRects(top.d.rect, adj.d.rect);
				mergeRectsLen = mergedRects?.length || 0;
				if (mergeRectsLen) {
					for (let j = 0; j < mergeRectsLen; j++) {
						mergedRect = mergedRects[j];

						if (mergedRect) {
							adjacents = { ...top.d.a, ...adj.d.a };
							delete adjacents[top.d.id];
							delete adjacents[adj.d.id];

							mergedObject = {
								d: {
									id: idCount++,
									rect: mergedRect,
									a: adjacents,
									o: {},
									ref: null,
								},
							};

							filterAdjacents(mergedObject);
							tempStack.push(mergedObject);

							if (isRectInside(mergedRect, adj.d.rect)) {
								adj.d.ref = mergedObject;
							}

							if (isRectInside(mergedRect, top.d.rect)) {
								top.d.ref = mergedObject;
								stack.push(mergedObject);
								breakSig = true;
								break;
							}
						}
					}
					if (breakSig) break;
				} else if (isRectInside(adj.d.rect, top.d.rect)) {
					breakSig = true;
					break;
				}
			}

			if (!breakSig) {
				while (!tempStack.isEmpty()) {
					stack.push(tempStack.pop());
				}

				const res = resultIt.findAll(
					{
						low: top.d.rect.y,
						high: top.d.rect.y + top.d.rect.height,
					},
					undefined,
					true
				);
				let isIdentical = false;
				const len = res?.length || 0;
				for (let i = 0; i < len; i++) {
					if (
						areRectsIdentical(
							getCoordinates(top.d.rect),
							getCoordinates(res[i].d.rect)
						)
					) {
						isIdentical = true;
					}
				}
				if (!isIdentical) {
					resultIt.insert({
						low: top.d.rect.y,
						high: top.d.rect.y + top.d.rect.height,
						d: top.d,
					});
				}
			}
		}
	}

	return { mergedRects: resultIt.getDataInArray(), idCount };
};

export const filterAdjacents = (mergedObject, visited) => {
	const mergedRect = mergedObject.d.rect;
	const adjs = mergedObject.d.a;
	let adj;
	const adjsKeys = Object.keys(adjs);
	const adjsKeysLen = adjsKeys.length;
	for (let j = 0; j < adjsKeysLen; j++) {
		adj = adjs[adjsKeys[j]];
		// printAdjRect(adj.d);

		if (!areRectsAdjacent(mergedRect, adj.d.rect)) {
			delete adjs[adjsKeys[j]];
		} else {
			// Hey! you guys! Hey! you guys! I'm your neighbour!
			adj.d.a[mergedObject.d.id] = mergedObject;
		}
	}
};

export const findOverlapped = (mergedRects) => {
	const it = new IntervalTreesIterative();

	const len = mergedRects.length;
	for (let i = 0; i < len; i++) {
		mergedRects[i].low = mergedRects[i].d.rect.y;
		mergedRects[i].high =
			mergedRects[i].d.rect.y + mergedRects[i].d.rect.height;
		it.insert(mergedRects[i]);
	}

	const completeOverlapped = {};
	const itArr = it.getDataInArray();

	let res, rlen;

	for (let i = 0; i < len; i++) {
		res = it.findAll(itArr[i].interval);
		rlen = res.length;
		for (let j = 0; j < rlen; j++) {
			if (
				itArr[i].d.rect &&
				res[j].d.rect &&
				isRectInside(itArr[i].d.rect, res[j].d.rect) &&
				itArr[i].d.id !== res[j].d.id
			) {
				completeOverlapped[res[j].d.id] = res[j];
				res[j].d._rect = res[j].d.rect;
				res[j].d.rect = null;
				delete itArr[i].d.o[res[j].d.id];
			}
		}
	}

	for (let i = 0; i < len; i++) {
		res = it.findAll(itArr[i].interval);
		rlen = res.length;
		for (let j = 0; j < rlen; j++) {
			if (
				itArr[i].d.rect &&
				res[j].d.rect &&
				doRectsOverlap(itArr[i].d.rect, res[j].d.rect) &&
				itArr[i].d.id !== res[j].d.id
			) {
				itArr[i].d.o[res[j].d.id] = res[j];
			}
		}
	}

	const resArr = new Array(len);
	let count = 0;
	for (let i = 0; i < len; i++) {
		if (itArr[i].d.rect) {
			resArr[count++] = itArr[i];
		}
	}

	const filteredResArr = new Array(count);
	for (let i = 0; i < count; i++) {
		filteredResArr[i] = resArr[i];
	}

	return {
		overlappedRects: filteredResArr,
		completeOverlapped: Object.values(completeOverlapped),
	};
	// return it.getDataInArray();
};

export const arrange = (
	itemsToArrange,
	overlappedRects,
	topWorkSpace,
	bottomWorkSpace,
	combinedWorkSpaceRectCo,
	lastId,
	arrangeFor
) => {
	let idCount = lastId;
	const arranged = {};
	const itemsInBottomWorkSpace = {};

	// construct closest bst
	shuffle(overlappedRects);
	const wCBST = new ClosestBST();
	const orLen = overlappedRects.length;
	for (let i = 0; i < orLen; i++) {
		wCBST.insert({
			v: overlappedRects[i].d.rect.width,
			d: overlappedRects[i].d,
		});
	}

	const iToALen = itemsToArrange.length;

	const itemsToArrangeStack = new Stack();
	const itemsToArrangeLaterStack = new Stack();
	const laterResult = new Stack();

	const itemsToArrangeWithScore = getItemsToArrangeScore(itemsToArrange);
	for (let i = 0; i < iToALen; i++) {
		itemsToArrangeStack.push(itemsToArrangeWithScore[i]);
	}

	let top;
	let aItem;
	let wCBSTRes;

	while (!itemsToArrangeStack.isEmpty()) {
		top = itemsToArrangeStack.pop();

		aItem = mpd[top.d];

		wCBSTRes = wCBST.findUsingComparator(
			cBSTRectComparator(getItemDimenWithMargin(aItem)),
			cBSTLComp(aItem.width),
			cBSTRComp
		);

		if (!wCBSTRes.length) {
			itemsToArrangeLaterStack.push(top);
			continue;
		}

		const pm = getPerfectMatch(wCBSTRes, aItem.width + aItem.height);

		// if (doRectsOverlap(bottomWorkSpace, pm.d.rect)) {
		// 	// skipped for later
		// 	itemsToArrangeLaterStack.push(top);
		// 	continue;
		// } else {
		aItem.x = pm.d.rect.x + publicConstants.MARGIN;
		aItem.y = pm.d.rect.y + publicConstants.MARGIN;

		arranged[top.d] = aItem;

		if (isRectInside(bottomWorkSpace, pm.d.rect)) {
			// put in bottom and combined workspace
			itemsInBottomWorkSpace[top.d] = top.d;
			console.log("item arranged in bottom WS", top.d);
		}

		const { result, idCount: lastId1 } = arrangeCleanUp(
			aItem,
			pm,
			wCBST,
			idCount
		);
		idCount = lastId1;

		const resLen = result.length;
		for (let i = 0; i < resLen; i++) {
			result[i].v = result[i].d.rect.width;
			wCBST.insert(result[i]);
		}
		printMergedFreeRects(wCBST.getDataInArray().map((o) => o.d));
		// }
	}

	// let breakSig = false;

	// while (!itemsToArrangeLaterStack.isEmpty()) {
	// 	top = itemsToArrangeLaterStack.pop();

	// 	aItem = mpd[top.d];

	// 	wCBSTRes = wCBST.findUsingComparator(
	// 		cBSTRectComparator(getItemDimenWithMargin(aItem)),
	// 		cBSTLComp(aItem.width),
	// 		cBSTRComp
	// 	);

	// 	if (!wCBSTRes.length) {
	// 		// increase workspace height
	// 		breakSig = true;
	// 		break;
	// 	}

	// 	const pm = getPerfectMatch(wCBSTRes, aItem.width + aItem.height);

	// 	if (doRectsOverlap(bottomWorkSpace, pm.d.rect)) {
	// 		// increase workspace height
	// 		breakSig = true;
	// 		break;
	// 	} else {
	// 		const tempItem = {
	// 			...aItem,
	// 			x: pm.d.rect.x + publicConstants.MARGIN,
	// 			y: pm.d.rect.y + publicConstants.MARGIN,
	// 		};
	// 		laterResult.push({
	// 			i: top.d,
	// 			d: tempItem,
	// 		});

	// 		const { result, idCount: lastId1 } = arrangeCleanUp(
	// 			tempItem,
	// 			pm,
	// 			wCBST,
	// 			idCount
	// 		);
	// 		idCount = lastId1;

	// 		const resLen = result.length;
	// 		for (let i = 0; i < resLen; i++) {
	// 			result[i].v = result[i].d.rect.width;
	// 			wCBST.insert(result[i]);
	// 		}
	// 		printMergedFreeRects(wCBST.getDataInArray().map((o) => o.d));
	// 	}
	// }

	// if (breakSig === false) {
	// 	while (!laterResult.isEmpty()) {
	// 		top = laterResult.pop();
	// 		mpd[top.i].x = mpd[top.i].d.x;
	// 		mpd[top.i].y = mpd[top.i].d.y;

	// 		arranged[top.i] = mpd[top.i];
	// 	}
	// }

	return {
		arranged,
		itemsInBottomWorkSpace,
		idCount,
	};
};

export const arrangeCleanUp = (aItem, pm, wCBST, lastId) => {
	let idCount = lastId;
	let diff;
	let diffLen;
	let diffObj;

	// overlapped
	let olpd;
	// indirect operlapped
	let iolpd;
	// indirect overlapping keys
	let ioKeys;
	let ioKeysLen;

	// let directOverlaps;
	const indirectOverlaps = {};

	const diffStack = new Stack();

	const itemWithMargins = {
		x: aItem.x - publicConstants.MARGIN,
		y: aItem.y - publicConstants.MARGIN,
		width: aItem.width + publicConstants.MARGIN * 2,
		height: aItem.height + publicConstants.MARGIN * 2,
	};
	wCBST.remove(pm.v, pm.d);

	diff = subtractRect(pm.d.rect, itemWithMargins);
	diffLen = diff?.length || 0;
	for (let i = 0; i < diffLen; i++) {
		diffObj = {
			v: diff[i].width,
			d: {
				id: idCount++,
				rect: diff[i],
				a: {},
				o: {},
				ref: null,
			},
		};

		diffStack.push(diffObj);
	}

	const directOverlaps = { ...pm.d.o };
	const oKeys = Object.keys(pm.d.o);
	const oKeysLen = oKeys.length;
	for (let j = 0; j < oKeysLen; j++) {
		olpd = pm.d.o[oKeys[j]];
		delete olpd.d.o[pm.d.id];

		// if diffLen is 0, this overlapping rect will be put back later after operations
		wCBST.remove(olpd.d.rect.width, olpd.d);

		if (doRectsOverlap(olpd.d.rect, itemWithMargins)) {
			diff = subtractRect(olpd.d.rect, itemWithMargins);
			diffLen = diff?.length || 0;

			if (diffLen) {
				for (let k = 0; k < diffLen; k++) {
					diffObj = {
						v: diff[k].width,
						d: {
							id: idCount++,
							rect: diff[k],
							a: {},
							o: {},
							ref: null,
						},
					};

					diffStack.push(diffObj);
				}
			}
		} else {
			diffStack.push(olpd);
			olpd.d.a = {};
		}

		ioKeys = Object.keys(olpd.d.o);
		ioKeysLen = ioKeys.length;
		for (let k = 0; k < ioKeysLen; k++) {
			iolpd = olpd.d.o[ioKeys[k]];
			if (!directOverlaps[ioKeys[k]]) {
				indirectOverlaps[ioKeys[k]] = iolpd;
			}
		}
	}

	// now merge the rects in diff stack and put the merged rects in wCBST tree
	printUnmergedFreeRects(diffStack.getData().map((o) => o.d));
	const diffStackData = diffStack.getData();
	const diffStackDataLen = diffStackData.length;
	const it = new IntervalTreesIterative();
	for (let i = 0; i < diffStackDataLen; i++) {
		it.insert({
			low: diffStackData[i].d.rect.y,
			high: diffStackData[i].d.rect.y + diffStackData[i].d.rect.height,
			d: diffStackData[i].d,
		});
	}

	assignAdjacentRects(it);
	const { mergedRects, idCount: lastId1 } = mergeFreeRects(
		diffStack.getData(),
		idCount
	);

	const {
		overlappedRects: _overlappedRects,
		completeOverlapped,
	} = findOverlapped([...mergedRects, ...Object.values(indirectOverlaps)]);

	const completeOverlappedLen = completeOverlapped.length;
	for (let i = 0; i < completeOverlappedLen; i++) {
		wCBST.remove(completeOverlapped[i].d._rect.width, completeOverlapped[i].d);
	}

	const _overlappedRectsLen = _overlappedRects.length;
	const overlappedRects = new Array(_overlappedRectsLen);
	let count = 0;
	for (let i = 0; i < _overlappedRectsLen; i++) {
		if (!indirectOverlaps[_overlappedRects[i].d.id]) {
			overlappedRects[count++] = _overlappedRects[i];
		}
	}

	const filteredOverlappedRects = filter(overlappedRects);

	printMergedFreeRects(filteredOverlappedRects.map((o) => o.d));

	return { result: filteredOverlappedRects, idCount: lastId1 };
};
