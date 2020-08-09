/*

LimberGridView, a powerful JavaScript Libary that gives you movable, resizable(any size) and auto-arranging grids.

Copyright © 2018-2020 Subendra Kumar Sharma. All Rights reserved. (jobs.sharma.subendra.kr@gmail.com)

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

Written by Subendra Kumar Sharma.

*/

import { IntervalTreesIterative } from "IntervalTreeJS";
import { ClosestBST } from "ClosestBST";
import { getModifiedPositionData } from "../../store/variables/essentials";
import getPrivateConstants from "../../store/constants/privateConstants";
import {
	// getMinMaxXY,
	// getTopBottomWS,
	getItemsInWorkSpace,
	// getItemsBelowBottomWorkSpace,
	getItemDimenWithMargin,
	getItemsToArrangeScore,
	cBSTRectComparator,
	cBSTLComp,
	cBSTRComp,
	getPerfectMatch,
	// shiftItemsDown,
	// getResizeWSItemsDetail,
	rectSortX,
	rectSortY,
	isMergable,
	shouldFilterRect,
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
	sleep,
	printUnmergedFreeRects,
	printMergedFreeRects,
	printResultStackRects,
	printStackRects,
	printMergedTempRects,
	printStackTopRect,
	printStackTopAdjRect,
	printMergedRect,
	printAdjRect,
} from "../debug/debug";

export const shrinkTopBottomWS = (context, topWorkSpace, bottomWorkSpace) => {
	let topWSItems, bottomWSItems;
	const res = { integrateTop: false, integrateBottom: false };
	if (topWorkSpace) {
		topWSItems = getItemsInWorkSpace(
			context,
			getRectObjectFromCo(topWorkSpace)
		);
		const sweepRes = sweepLineTop(topWorkSpace, topWSItems);

		if (sweepRes < topWorkSpace.bl.y) {
			topWorkSpace.tl.y = sweepRes;
			topWorkSpace.tr.y = sweepRes;

			res.integrateTop = true;
		}
	}

	if (bottomWorkSpace) {
		bottomWSItems = getItemsInWorkSpace(
			context,
			getRectObjectFromCo(bottomWorkSpace)
		);
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

export const sweepLineForFreeSpace = (context, area, areaCo, items, lastId) => {
	// area: area to sweep
	// area: area to sweep Coordinate Form
	// items: items in area

	const privateConstants = getPrivateConstants(context);

	let idCount = lastId;

	const it = new IntervalTreesIterative();

	it.insert({
		low: areaCo.tl.x,
		high: areaCo.tr.x,
		d: { id: idCount.idCount++, rect: area, a: {}, o: {}, ref: null },
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
		fInterval = { low: tempItem.tl.x, high: tempItem.tr.x };
		intervals = it.findAll(fInterval);
		iLen = intervals.length;
		for (let j = 0; j < iLen; j++) {
			if (
				doRectsOverlap(
					intervals[j].d.rect,
					getItemDimenWithMargin(privateConstants.MARGIN, items[i])
				)
			) {
				diff = subtractRect(
					intervals[j].d.rect,
					getItemDimenWithMargin(privateConstants.MARGIN, items[i]),
					true
				);

				dLen = diff.length;
				for (let k = 0; k < dLen; k++) {
					it.insert({
						low: diff[k].tl.x,
						high: diff[k].tr.x,
						d: {
							id: idCount.idCount++,
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
	const rectItYArr = rectsItY.getSortedData();

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

export const mergeFreeRectsCore = (context, stack, it, idCount, on) => {
	let topFullMerged = false;
	while (!stack.isEmpty()) {
		// printStackTopRect(context);
		// printStackTopAdjRect(context);
		// printMergedRect(context);
		// debugger;
		const top = stack.pop();

		// printStackTopRect(context, top.d);
		// debugger;
		topFullMerged = false;
		const results = it.findAll(
			top.interval,
			null,
			null,
			isMergable(top.d.rect)
		);

		const len = results?.length || 0;
		if (len > 0) {
			for (let i = 0; i < len; i++) {
				const res = results[i];

				// printMergedRect(context);
				// printStackTopAdjRect(context, res.d);
				// debugger;
				const mergedRects = mergeRects(res.d.rect, top.d.rect);
				if (mergedRects.length === 1) {
					const mergedRect = mergedRects[0];

					// printMergedRect(context, {
					// 	rect: mergedRect,
					// 	id: idCount.idCount,
					// 	o: {},
					// });
					// debugger;
					if (isRectInside(mergedRect, res.d.rect)) {
						it.remove(res.interval, res.d);
					}

					if (isRectInside(mergedRect, top.d.rect)) {
						topFullMerged = true;
					}

					// const mergedObjectInterval = {
					// 	low: mergedRect.x,
					// 	high: mergedRect.x + mergedRect.width,
					// };
					const mergedObject = {
						d: {
							id: idCount.idCount++,
							rect: mergedRect,
							a: {},
							o: {},
							ref: null,
						},
					};

					// mergedObject.low = mergedObjectInterval.low;
					// mergedObject.high = mergedObjectInterval.high;
					// it.insert(mergedObject);
					isRectIdenticalOrInside(it, mergedObject, on);
				}
			}
			if (topFullMerged === false) {
				// it.insert({ ...top.interval, d: top.d });
				isRectIdenticalOrInside(it, { d: top.d }, on);
			}
		} else {
			it.insert({ ...top.interval, d: top.d });
		}
	}
};

export const filterMergedFreeRects = (mergedRectsIt) => {
	const arr = mergedRectsIt.getSortedData();
	const len = arr.length;
	for (let i = 0; i < len; i++) {
		const obj = arr[i];
		const results = mergedRectsIt.findAll(
			obj.interval,
			null,
			null,
			shouldFilterRect(obj.d.rect, obj.d)
		);

		if (results?.length) {
			mergedRectsIt.remove(obj.interval, obj.d);
		}
	}
};

export const mergeFreeRects = async (
	context,
	freeRects,
	lastId,
	garbageRects
) => {
	debugger;
	// console.log("**mergeFreeRects - DEBUG**");
	// const p1 = performance.now();

	let idCount = lastId;
	let stack, it;

	if (Array.isArray(freeRects)) {
		// console.log("freeRects.length", freeRects.length);
		shuffle(freeRects);
		stack = new Stack({
			data: freeRects.sort(rectSortX),
		});
		it = new IntervalTreesIterative();
	} else {
		shuffle(garbageRects);
		stack = new Stack({
			data: garbageRects.sort(rectSortX),
		});
		it = freeRects;
	}

	mergeFreeRectsCore(context, stack, it, idCount, "x");
	filterMergedFreeRects(it);

	const mergedArr = it.getSortedData();
	shuffle(mergedArr);
	const stackY = new Stack({
		data: mergedArr.sort(rectSortY),
	});
	const itY = new IntervalTreesIterative();
	mergeFreeRectsCore(context, stackY, itY, idCount, "y");
	filterMergedFreeRects(itY);

	const resIt = new IntervalTreesIterative();
	const arr = itY.getSortedData();
	shuffle(arr);
	const len = arr.length;
	for (let i = 0; i < len; i++) {
		resIt.insert({
			low: arr[i].d.rect.x,
			high: arr[i].d.rect.x + arr[i].d.rect.width,
			d: arr[i].d,
		});
	}

	// const p2 = performance.now();
	// console.log("mergeFreeRects: ", p2 - p1);
	// console.log("it.getSortedData().length", it.getSortedData().length);
	// return { mergedRects: it.getSortedData(), mergedRectsIt: it, idCount };
	// console.log("resIt.getSortedData().length", resIt.getSortedData().length);
	return { mergedRects: resIt.getSortedData(), mergedRectsIt: resIt, idCount };
};

// export const mergeFreeRects = async (freeRectsArr, lastId) => {
// 	const stack = new Stack();
// 	const stackIt = new IntervalTreesIterative();
// 	const resultStack = new Stack();
// 	const resultIt = new IntervalTreesIterative();

// 	let adjacents,
// 		adj,
// 		top,
// 		keys,
// 		keyslen,
// 		mergedObject,
// 		mergedRect,
// 		mergedRects,
// 		mergeRectsLen;
// 	let atLeastOneFullMerge = false;
// 	let idCount = lastId;
// 	const freeRectsLen = freeRectsArr.length;

// 	for (let k = 0; k < freeRectsLen; k++) {
// 		if (freeRectsArr[k].d.ref !== null) {
// 			continue;
// 		}

// 		stack.push(freeRectsArr[k]);
// 		while (!stack.isEmpty()) {
// 			top = stack.pop();

// 			keys = Object.keys(top.d.a);
// 			keyslen = keys.length;
// 			atLeastOneFullMerge = false;
// 			for (let i = 0; i < keyslen; i++) {
// 				if (!top.d.a[keys[i]]) {
// 					continue;
// 				}
// 				adj = top.d.a[keys[i]];

// 				while (adj?.d?.ref) {
// 					adj = adj.d.ref;
// 				}

// 				mergedRects = mergeRects(top.d.rect, adj.d.rect);
// 				mergeRectsLen = mergedRects?.length || 0;
// 				if (mergeRectsLen === 1) {
// 					mergedRect = mergedRects[0];

// 					if (mergedRect) {
// 						adjacents = { ...top.d.a, ...adj.d.a };
// 						delete adjacents[top.d.id];
// 						delete adjacents[adj.d.id];

// 						mergedObject = {
// 							d: {
// 								id: idCount++,
// 								rect: mergedRect,
// 								a: adjacents,
// 								o: {},
// 								ref: null,
// 							},
// 						};

// 						filterAdjacents(mergedObject);
// 						if (!isRectIdenticalOrInside(stackIt, mergedObject)) {
// 							stack.push(mergedObject);
// 						}

// 						if (isRectInside(mergedRect, adj.d.rect)) {
// 							adj.d.ref = mergedObject;
// 						}

// 						if (isRectInside(mergedRect, top.d.rect)) {
// 							top.d.ref = mergedObject;
// 							atLeastOneFullMerge = true;
// 						}
// 					}
// 				}
// 			}

// 			if (!atLeastOneFullMerge) {
// 				isRectIdenticalOrInside(resultIt, top);
// 			}
// 		}
// 	}

// 	return { mergedRects: resultIt.getSortedData(), idCount };
// };

export const isRectIdenticalOrInside = (it, obj, on) => {
	let axis = "x";
	let distance = "width";
	if (on === "y") {
		axis = "y";
		distance = "height";
	}
	const res = it.findAll({
		low: obj.d.rect[axis],
		high: obj.d.rect[axis] + obj.d.rect[distance],
	});

	let isIdenticalOrInside = false;
	const len = res?.length || 0;
	for (let i = 0; i < len; i++) {
		if (
			areRectsIdentical(
				getCoordinates(obj.d.rect),
				getCoordinates(res[i].d.rect)
			) ||
			isRectInside(res[i].d.rect, obj.d.rect)
		) {
			isIdenticalOrInside = true;
		}
	}

	if (!isIdenticalOrInside) {
		it.insert({
			low: obj.d.rect[axis],
			high: obj.d.rect[axis] + obj.d.rect[distance],
			d: obj.d,
		});
	}
	// console.log("isIdenticalOrInside", isIdenticalOrInside);
	return isIdenticalOrInside;
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
	const itArr = it.getSortedData();

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

				const olpds = Object.values(res[j].d.o);
				const oLen = olpds.length;
				for (let k = 0; k < oLen; k++) {
					// Hey everyone I'm done.
					const olpd = olpds[k];
					delete olpd.d.o[res[j].d.id];
				}
				res[j].d.o = {};
			} else if (doRectsOverlap(itArr[i].d.rect, res[j].d.rect)) {
				itArr[i].d.o[res[j].d.id] = res[j];
				res[j].d.o[itArr[i].d.id] = itArr[i];
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
};

/**
 * [description]
 * @param  {number[]} itemsToArrange          Array of items to arrange
 * @param  {object[]} overlappedRects         Array of overlapping rects
 * @param  {object} topWorkSpace            Top work space object in object form
 * @param  {object} bottomWorkSpace         Bottom work space object in object form
 * @param  {object} combinedWorkSpaceRectCo combined work space object in object form
 * @param  {number} lastId                  next id available
 * @return {object}                         arranged{object}: key is index in position data array, value is the object; itemsInbottomworkSpace{object}: key is index in position data array, value is also the index; idCount: next available id
 */
export const arrange = async (
	context,
	itemsToArrange,
	// overlappedRects,
	mergedRectsIt,
	topWorkSpace,
	bottomWorkSpace,
	combinedWorkSpaceRectCo,
	lastId
) => {
	// this function updates the modified position data
	// so no need to update the modified position data later
	debugger;
	const mpd = getModifiedPositionData(context);
	const privateConstants = getPrivateConstants(context);

	let idCount = lastId;
	const arranged = {};
	const itemsInBottomWorkSpace = {};

	let overlappedRects = mergedRectsIt.getSortedData();

	// construct closest bst
	// shuffle(overlappedRects);
	// const wCBST = new ClosestBST();
	// const orLen = overlappedRects.length;
	// for (let i = 0; i < orLen; i++) {
	// 	wCBST.insert({
	// 		v: overlappedRects[i].d.rect.width,
	// 		d: overlappedRects[i].d,
	// 	});
	// }

	const iToALen = itemsToArrange.length;

	const itemsToArrangeStack = new Stack();
	// const itemsToArrangeLaterStack = new Stack();

	const itemsToArrangeWithScore = getItemsToArrangeScore(
		context,
		itemsToArrange
	);
	for (let i = 0; i < iToALen; i++) {
		itemsToArrangeStack.push(itemsToArrangeWithScore[i]);
	}

	let top;
	let aItem;
	// let wCBSTRes;
	const resStack = new Stack();
	const grabageStack = new Stack();

	while (!itemsToArrangeStack.isEmpty()) {
		resStack.empty();

		top = itemsToArrangeStack.pop();

		aItem = mpd[top.d];

		let tempAItem = getItemDimenWithMargin(privateConstants.MARGIN, aItem);

		const oLen = overlappedRects.length;
		for (let i = 0; i < oLen; i++) {
			const oRect = overlappedRects[i].d.rect;
			// debugger;
			// console.log("**********");
			// console.log(
			// 	"oRect id: ",
			// 	overlappedRects[i].d.id,
			// 	" w:",
			// 	oRect.width,
			// 	"h: ",
			// 	oRect.height
			// );
			// console.log("tempAItem w: ", tempAItem.width, "h: ", tempAItem.height);
			if (oRect.width >= tempAItem.width && oRect.height >= tempAItem.height) {
				resStack.push(overlappedRects[i]);
			}
		}

		if (resStack.isEmpty()) {
			continue;
		}

		// wCBSTRes = wCBST.findUsingComparator(
		// 	cBSTRectComparator(
		// 		// getItemDimenWithMargin(privateConstants.MARGIN, aItem)
		// 		tempAItem
		// 	),
		// 	cBSTLComp(aItem.width),
		// 	cBSTRComp
		// );

		// if (!wCBSTRes.length) {
		// 	// itemsToArrangeLaterStack.push(top);
		// 	continue;
		// }

		const pm = getPerfectMatch(resStack.getData(), aItem.width + aItem.height);

		aItem.x = pm.d.rect.x + privateConstants.MARGIN;
		aItem.y = pm.d.rect.y + privateConstants.MARGIN;

		arranged[top.d] = aItem;

		if (bottomWorkSpace && isRectInside(bottomWorkSpace, pm.d.rect)) {
			// put in bottom and combined workspace
			itemsInBottomWorkSpace[top.d] = top.d;
		}
		debugger;

		grabageStack.empty();
		const result = mergedRectsIt.findAll(pm.interval);
		const resLen = result.length;
		tempAItem = getItemDimenWithMargin(privateConstants.MARGIN, aItem);
		for (let i = 0; i < resLen; i++) {
			const res = result[i];
			const _garbageRects = subtractRect(
				res.d.rect,
				// getItemDimenWithMargin(privateConstants.MARGIN, aItem)
				tempAItem
			);

			const gLen = _garbageRects?.length || 0;
			// const garbageRects = new Array(gLen);
			for (let i = 0; i < gLen; i++) {
				grabageStack.push({
					interval: {
						low: _garbageRects[i].x,
						high: _garbageRects[i].x + _garbageRects[i].width,
					},
					d: {
						id: idCount.idCount++,
						rect: _garbageRects[i],
						a: {},
						o: {},
						ref: null,
					},
				});
			}
			if (gLen) {
				mergedRectsIt.remove(res.interval, res.d);
			}
		}

		const { idCount: lastId1 } = await mergeFreeRects(
			context,
			mergedRectsIt,
			idCount,
			grabageStack.getData()
		);
		// idCount = lastId1;
		overlappedRects = mergedRectsIt.getSortedData();

		// DEBUG:
		// printMergedFreeRects(
		// 	context,
		// 	mergedRectsIt.getSortedData().map((o) => o.d)
		// );
		// debugger;

		// const { result, idCount: lastId1 } = await arrangeCleanUp(
		// 	context,
		// 	aItem,
		// 	pm,
		// 	wCBST,
		// 	idCount
		// );
		// idCount = lastId1;

		// const resLen = result.length;
		// for (let i = 0; i < resLen; i++) {
		// 	result[i].v = result[i].d.rect.width;
		// 	wCBST.insert(result[i]);
		// }
		// DEBUG:
		// printMergedFreeRects(context, wCBST.getSortedData().map((o) => o.d));
	}

	return {
		arranged,
		itemsInBottomWorkSpace,
		idCount,
	};
};

// export const arrangeCleanUp = async (context, aItem, pm, wCBST, lastId) => {
// 	const privateConstants = getPrivateConstants(context);

// 	let idCount = lastId;
// 	let diff;
// 	let diffLen;
// 	let diffObj;

// 	// overlapped
// 	let olpd;
// 	// indirect operlapped
// 	let iolpd;
// 	// indirect overlapping keys
// 	let ioKeys;
// 	let ioKeysLen;

// 	const indirectOverlaps = {};

// 	const diffStack = new Stack();

// 	const itemWithMargins = {
// 		x: aItem.x - privateConstants.MARGIN,
// 		y: aItem.y - privateConstants.MARGIN,
// 		width: aItem.width + privateConstants.MARGIN * 2,
// 		height: aItem.height + privateConstants.MARGIN * 2,
// 	};
// 	wCBST.remove(pm.v, pm.d);

// 	diff = subtractRect(pm.d.rect, itemWithMargins);
// 	diffLen = diff?.length || 0;
// 	for (let i = 0; i < diffLen; i++) {
// 		diffObj = {
// 			v: diff[i].width,
// 			d: {
// 				id: idCount++,
// 				rect: diff[i],
// 				a: {},
// 				o: {},
// 				ref: null,
// 			},
// 		};

// 		diffStack.push(diffObj);
// 	}

// 	let subtractFlag = false;
// 	const directOverlaps = { ...pm.d.o };
// 	const pmOlps = Object.values(pm.d.o);
// 	const pmOlapsLen = pmOlps.length;
// 	for (let j = 0; j < pmOlapsLen; j++) {
// 		olpd = pmOlps[j];
// 		delete olpd.d.o[pm.d.id];

// 		// if diffLen is 0, this overlapping rect will be put back later after operations
// 		wCBST.remove(olpd.d.rect.width, olpd.d);

// 		subtractFlag = false;
// 		if (doRectsOverlap(olpd.d.rect, itemWithMargins)) {
// 			subtractFlag = true;
// 			diff = subtractRect(olpd.d.rect, itemWithMargins);
// 			diffLen = diff?.length || 0;

// 			if (diffLen) {
// 				for (let k = 0; k < diffLen; k++) {
// 					diffObj = {
// 						v: diff[k].width,
// 						d: {
// 							id: idCount++,
// 							rect: diff[k],
// 							a: {},
// 							o: {},
// 							ref: null,
// 						},
// 					};

// 					diffStack.push(diffObj);
// 				}
// 			}
// 		} else {
// 			diffStack.push(olpd);
// 			olpd.d.a = {};
// 		}

// 		ioKeys = Object.keys(olpd.d.o);
// 		ioKeysLen = ioKeys.length;
// 		for (let k = 0; k < ioKeysLen; k++) {
// 			iolpd = olpd.d.o[ioKeys[k]];
// 			if (!directOverlaps[ioKeys[k]]) {
// 				indirectOverlaps[ioKeys[k]] = iolpd;
// 			}
// 			if (subtractFlag) {
// 				delete iolpd.d.o[olpd.d.id];
// 			}
// 		}
// 	}

// 	// now merge the rects in diff stack and put the merged rects in wCBST tree
// 	// printUnmergedFreeRects(context, diffStack.getData().map((o) => o.d));
// 	const diffStackData = diffStack.getData();
// 	const diffStackDataLen = diffStackData.length;
// 	const it = new IntervalTreesIterative();
// 	for (let i = 0; i < diffStackDataLen; i++) {
// 		it.insert({
// 			low: diffStackData[i].d.rect.y,
// 			high: diffStackData[i].d.rect.y + diffStackData[i].d.rect.height,
// 			d: diffStackData[i].d,
// 		});
// 	}

// 	assignAdjacentRects(it);
// 	const { mergedRects, idCount: lastId1 } = await mergeFreeRects(
// 		diffStack.getData(),
// 		idCount
// 	);

// 	const {
// 		overlappedRects: _overlappedRects,
// 		completeOverlapped,
// 	} = findOverlapped([...mergedRects, ...Object.values(indirectOverlaps)]);

// 	const completeOverlappedLen = completeOverlapped.length;
// 	for (let i = 0; i < completeOverlappedLen; i++) {
// 		wCBST.remove(completeOverlapped[i].d._rect.width, completeOverlapped[i].d);
// 	}

// 	const _overlappedRectsLen = _overlappedRects.length;
// 	const overlappedRects = new Array(_overlappedRectsLen);
// 	let count = 0;
// 	for (let i = 0; i < _overlappedRectsLen; i++) {
// 		if (!indirectOverlaps[_overlappedRects[i].d.id]) {
// 			overlappedRects[count++] = _overlappedRects[i];
// 		}
// 	}

// 	const filteredOverlappedRects = filter(overlappedRects);

// 	// printMergedFreeRects(context, filteredOverlappedRects.map((o) => o.d));

// 	return { result: filteredOverlappedRects, idCount: lastId1 };
// };
