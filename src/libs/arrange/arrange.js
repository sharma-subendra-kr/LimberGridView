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
import publicConstants from "../../constants/publicConstants";
import {
	getMinMaxY,
	getTopBottomWS,
	fixMinYMaxY,
	getItemsInWorkSpace,
	getItemDimenWithMargin,
	getItemDimenWithRBMargin,
	getAffectedItemsScore,
	// assignScoreToFreeRects,
	cBSTRectComparator,
	cBSTLComp,
	cBSTRComp,
	getPerfectMatch,
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
	const { minY, maxY } = getMinMaxY(
		affectedItems,
		resizedBottomY,
		toY,
		movedBottomY
	);

	const idCount = { idCount: 0 };

	const workSpaceRectCo = {
		tl: { x: publicConstants.MARGIN, y: minY },
		tr: { x: privateConstants.WIDTH - publicConstants.MARGIN, y: minY },
		br: { x: privateConstants.WIDTH - publicConstants.MARGIN, y: maxY },
		bl: { x: publicConstants.MARGIN, y: maxY },
	};

	// const { arrangeTopY, arrangeBottomY } = fixMinYMaxY(workSpaceRectCo);
	// workSpaceRectCo.tl.y = arrangeTopY;
	// workSpaceRectCo.tr.y = arrangeTopY;
	// workSpaceRectCo.br.y = arrangeBottomY;
	// workSpaceRectCo.bl.y = arrangeBottomY;
	// const workSpaceRect = getRectObjectFromCo(workSpaceRectCo);
	/*
		Skipping these for simplicity for now
		* 	if a item's top has to be placed at workSpaceRect.tl.y then it should be
			adjusted to arrangeTopY without margin, resize item if necessary
		*	if a item's bottom has to be placed at workSpaceRect.bl.y then it should be
			adjusted to arrangeBottomY without margin resize item if necessary
	*/

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

	const combinedWorkSpaceRect = getRectObjectFromCo(combinedWorkSpaceRectCo);
	const itemsInCombinedWorkSpace = getItemsInWorkSpace(combinedWorkSpaceRect);

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

	const itYDataLen = freeRectsArr.length;
	// const itXData = new Array(itXDataLen);

	// let tempRect;
	for (let i = 0; i < itYDataLen; i++) {
		freeRectsArr[i].d.id = i;
		// tempRect = getCoordinates(freeRectsArr[i].d.rect);
		// itXData[i] = {
		// 	low: tempRect.tl.x,
		// 	high: tempRect.tr.x,
		// 	d: freeRectsArr[i].d,
		// };
	}

	// const freeRectsItX = new IntervalTreesIterative({ data: itXData });
	// assignAdjacentRects(freeRectsItY, freeRectsItX);

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

	const overlappedRects = findOverlapped(mergedRects);
	console.log("overlappedRects.length", overlappedRects.length);

	// DEBUG:
	printMergedFreeRects(overlappedRects.map((o) => o.d));

	if (affectedItems.length === 1) {
		// resize or move to the desired coordinates
		// this condition should be on top
		// for development it is here
		// shift to top after development
	} else if (affectedItems.length === 2 && arrangeFor === "move") {
		// try replacing first
	}

	arrange(
		affectedItems,
		overlappedRects,
		getRectObjectFromCo(topWorkSpaceCo),
		getRectObjectFromCo(bottomWorkSpaceCo),
		combinedWorkSpaceRectCo,
		idCount.idCount,
		arrangeFor
	);

	const p2 = performance.now();
	console.log("arrange total: ", p2 - p1);
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

				// DEBUG:
				// printUnmergedFreeRects(
				// 	diff.map((o) => ({
				// 		rect: getRectObjectFromCo(o),
				// 	}))
				// );

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

export const assignAdjacentRects = (rectsItY, rectsItX) => {
	const rectItYArr = rectsItY.getDataInArray();
	// const rectItXArr = rectsItX.getDataInArray();

	const len = rectItYArr.length;
	let resY, resX, lenY, lenX;

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
	const resultStack = new Stack();

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
			// printStackTopRect(top.d);

			keys = Object.keys(top.d.a);
			keyslen = keys.length;
			breakSig = false;
			for (let i = 0; i < keyslen; i++) {
				if (!top.d.a[keys[i]]) {
					continue;
				}
				adj = top.d.a[keys[i]];
				while (adj?.d?.ref) {
					adj = adj.d.ref;
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
							// printMergedTempRects(mergedObject.d);

							filterAdjacents(mergedObject);
							stack.push(mergedObject);
							// printStackRects(stack.getData().map((o) => o.d));

							delete top.d.a[keys[i]];
							delete adj.d.a[top.d.id];

							if (isRectInside(mergedRect, adj.d.rect)) {
								adj.d.ref = mergedObject;
							}

							if (isRectInside(mergedRect, top.d.rect)) {
								top.d.ref = mergedObject;
								breakSig = true;
								break;
							}
						}
					}
					if (breakSig) break;
				}
			}

			if (!breakSig) {
				resultStack.push(top);
				// printResultStackRects(resultStack.getData().map((o) => o.d));
				continue;
			}
		}
	}

	return { mergedRects: resultStack.getData(), idCount };
};

export const filterAdjacents = (mergedObject, visited) => {
	const mergedRect = mergedObject.d.rect;
	const adjs = mergedObject.d.a;
	let adj;
	const adjsKeys = Object.keys(adjs);
	const adjsKeysLen = adjsKeys.length;
	for (let j = 0; j < adjsKeysLen; j++) {
		adj = adjs[adjsKeys[j]];
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

	return filteredResArr;
	// return it.getDataInArray();
};

export const arrange = (
	affectedItems,
	overlappedRects,
	topWorkSpace,
	bottomWorkSpace,
	combinedWorkSpaceRectCo,
	lastId,
	arrangeFor
) => {
	console.log("overlappedRects", overlappedRects);
	let idCount = lastId;

	shuffle(overlappedRects);

	const orLen = overlappedRects.length;
	// last element is moved or resized item;
	const aILen = affectedItems.length - 1;
	const _affectedItems = new Array(aILen);
	for (let i = 0; i < aILen; i++) {
		_affectedItems[i] = affectedItems[i];
	}

	const wCBST = new ClosestBST();

	for (let i = 0; i < orLen; i++) {
		wCBST.insert({
			v: overlappedRects[i].d.rect.width,
			d: overlappedRects[i].d,
		});
	}

	const affectedItemsStack = new Stack();
	const laterAffectedItemsStack = new Stack();

	const affectedItemsWithScore = getAffectedItemsScore(_affectedItems);
	for (let i = 0; i < aILen; i++) {
		affectedItemsStack.push(affectedItemsWithScore[i]);
	}

	let top;
	let aItem;
	let wCBSTRes;
	// let updatedItem;
	// let diff;
	// let diffLen;
	// let diffObj;
	// let diffStack;
	// let diffStackData;
	// let diffStackDataLen;
	// let it;

	// // overlapped
	// let olpd;
	// // overlapping keys
	// let oKeys;
	// let oKeysLen;
	// // indirect operlapped
	// let iolpd;
	// // indirect overlapping keys
	// let ioKeys;
	// let ioKeysLen;

	// let directOverlaps;
	// let indirectOverlaps;

	while (!affectedItemsStack.isEmpty()) {
		top = affectedItemsStack.pop();
		// directOverlaps = {};
		// indirectOverlaps = {};

		aItem = mpd[top.d];

		wCBSTRes = wCBST.findUsingComparator(
			cBSTRectComparator(getItemDimenWithMargin(aItem)),
			cBSTLComp(aItem.width),
			cBSTRComp
		);

		if (!wCBSTRes.length) {
			laterAffectedItemsStack.push(top);
			continue;
		}

		const pm = getPerfectMatch(wCBSTRes, aItem.width + aItem.height);

		if (doRectsOverlap(bottomWorkSpace, pm.d.rect)) {
			// skipped for later
			laterAffectedItemsStack.push(top);
		} else {
			aItem.x = pm.d.rect.x + publicConstants.MARGIN;
			aItem.y = pm.d.rect.y + publicConstants.MARGIN;
			const { result, lastId1 } = arrangeCleanUp(aItem, pm, wCBST, idCount);
			idCount = lastId1;

			const resLen = result.length;
			for (let i = 0; i < resLen; i++) {
				result[i].v = result[i].d.rect.width;
				wCBST.insert(result[i]);
			}
			printMergedFreeRects(wCBST.getDataInArray().map((o) => o.d));
		}

		console.log("perfect match", pm);
	}

	while (!laterAffectedItemsStack.isEmpty()) {
		top = laterAffectedItemsStack.pop();
	}
};

export const arrangeCleanUp = (aItem, pm, wCBST, idCount) => {
	// let updatedItem;
	let diff;
	let diffLen;
	let diffObj;
	// let diffStack;
	// let diffStackData;
	// let diffStackDataLen;
	// let it;

	// overlapped
	let olpd;
	// overlapping keys
	// let oKeys;
	// let oKeysLen;
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
	console.log("**mergedRects", mergedRects);
	console.log("**indirectOverlaps", indirectOverlaps);
	const _overlappedRects = findOverlapped([
		...mergedRects,
		...Object.values(indirectOverlaps),
	]);

	const _overlappedRectsLen = _overlappedRects.length;
	const overlappedRects = new Array(_overlappedRectsLen);
	let count = 0;
	for (let i = 0; i < _overlappedRectsLen; i++) {
		if (!indirectOverlaps[_overlappedRects[i].d.id]) {
			overlappedRects[count++] = _overlappedRects[i];
		}
	}

	const filteredOverlappedRects = filter(overlappedRects);

	// const indirectOverlapsKeys = Object.keys(indirectOverlaps);
	// const indirectOverlapsKeysLen = indirectOverlapsKeys.length;
	// for (let i = 0; i < indirectOverlapsKeysLen; i++) {
	// 	iolpd = indirectOverlaps[indirectOverlapsKeys[i]];
	// 	for (let j = 0; j < overlappedRects.length; j++) {
	// 		if (doRectsOverlap(overlappedRects[j].d.rect, iolpd.d.rect)) {
	// 			iolpd.d.o[]
	// 		}
	// 	}
	// }

	printMergedFreeRects(filteredOverlappedRects.map((o) => o.d));
	console.log("filteredOverlappedRects", filteredOverlappedRects);
	console.log("directOverlaps", directOverlaps);
	console.log("indirectOverlaps", indirectOverlaps);
	console.log("diffStack", diffStack.getData());

	return { result: filteredOverlappedRects, lastId1: idCount };
};
