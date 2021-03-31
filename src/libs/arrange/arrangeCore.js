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

import {
	getModifiedPositionData,
	getPositionData,
} from "../../store/variables/essentials";
import getPrivateConstants, {
	getWidth,
	getDefinedMinHeightAndWidth,
} from "../../store/constants/privateConstants";
import {
	getItemsInWorkSpace,
	getItemDimenWithMargin,
	getItemsToArrangeScore,
	getPerfectMatch,
	rectSortX,
	rectSortY,
	rectSortX2,
	rectSortY2,
	shouldFilterRect,
	shouldFilterRectII,
	doOverlapHelper,
	getSizeTest,
	getDistanceForTest,
	// identicalOrInsideHelper,
	// sweepTopBottomHelper,
} from "./arrangeUtils";
import {
	getRTreeRectFromRectObject,
	getRectObjectFromRTreeRect,
	getRectObjectFromCo,
	subtractRect,
	mergeRects,
	isRectInside,
	isRectLarger,
	doRectsOverlapOrTouch,
} from "../rect/rectUtils";
import { getMidPoint, getHypotenuseSquared } from "../geometry/geometry";
// import { shuffle } from "../array/arrayUtils";
import getTree from "../../store/variables/trees";
import getStack from "../../store/variables/stacks";
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
// import { printNodeData } from "../debug/debugUtils";

export const shrinkTopBottomWS = (context, topWorkSpace, bottomWorkSpace) => {
	let topWSItems, bottomWSItems;
	const res = { integrateTop: false, integrateBottom: false };

	const rt = getTree(context, "rt");

	if (topWorkSpace) {
		topWSItems = getItemsInWorkSpace(
			context,
			getRectObjectFromCo(topWorkSpace)
		);
		const sweepRes = sweepLineTop(context, topWorkSpace, topWSItems, rt);

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
		const sweepRes = sweepLineBottom(
			context,
			bottomWorkSpace,
			bottomWSItems,
			rt
		);

		if (sweepRes > bottomWorkSpace.tl.y) {
			bottomWorkSpace.bl.y = sweepRes;
			bottomWorkSpace.br.y = sweepRes;

			res.integrateBottom = true;
		}
	}

	return res;
};

export const sweepLineTop = (context, area, items, rt) => {
	rt.reset();

	const len = items.length;

	for (let i = 0; i < len; i++) {
		rt.insert({
			rect: getRTreeRectFromRectObject(items[i]),
			data: {
				id: -1,
				// rect: items[i],
			},
		});
	}

	let resultPoint = area.bl.y;

	const WIDTH = getWidth(context);
	const DEFINED_MIN_HEIGHT_AND_WIDTH = getDefinedMinHeightAndWidth(context);
	let w = 0;
	const suspect = { x1: 0, x2: 0, y1: area.tl.y, y2: area.bl.y };
	let res;
	while (w < WIDTH) {
		suspect.x1 = w;
		suspect.x2 = w + DEFINED_MIN_HEIGHT_AND_WIDTH;

		res = rt.find(suspect, false, true, undefined, false);

		const len = res.length;
		let max = 0;
		for (let i = 0; i < len; i++) {
			if (res[i].rect.y2 > max) {
				max = res[i].rect.y2;
			}
		}

		if (max < resultPoint) {
			resultPoint = max;
		}

		w = suspect.x2;
	}

	return resultPoint;
};

export const sweepLineBottom = (context, area, items, rt) => {
	rt.reset();

	const len = items.length;

	for (let i = 0; i < len; i++) {
		rt.insert({
			rect: getRTreeRectFromRectObject(items[i]),
			data: {
				id: -1,
				// rect: items[i],
			},
		});
	}

	let resultPoint = area.tl.y;

	const WIDTH = getWidth(context);
	const DEFINED_MIN_HEIGHT_AND_WIDTH = getDefinedMinHeightAndWidth(context);
	let w = 0;
	const suspect = { x1: 0, x2: 0, y1: area.tl.y, y2: area.bl.y };
	let res;
	while (w < WIDTH) {
		suspect.x1 = w;
		suspect.x2 = w + DEFINED_MIN_HEIGHT_AND_WIDTH;

		res = rt.find(suspect, false, true, undefined, false);

		const len = res.length;
		let min = Number.MAX_SAFE_INTEGER;
		for (let i = 0; i < len; i++) {
			if (res[i].rect.y1 < min) {
				min = res[i].rect.y1;
			}
		}

		if (min > resultPoint) {
			resultPoint = min;
		}

		w = suspect.x2;
	}

	return resultPoint;
};

export const sweepLineForFreeSpace = (
	context,
	area,
	areaCo,
	items,
	idCount
) => {
	// area: area to sweep
	// area: area to sweep Coordinate Form
	// items: items in area

	const privateConstants = getPrivateConstants(context);

	const rt = getTree(context, "rt");
	rt.reset();

	rt.insert({
		rect: getRTreeRectFromRectObject(area),
		data: {
			id: idCount.idCount++,
			// rect: area,
		},
	});

	let tempItem;
	let tempItemWithMargin;
	let tempItemWithMarginRTree;
	const fRect = { x1: 0, x2: 0, y1: 0, y2: 0 };
	let resRects;
	let rLen = 0;
	let diff;
	let dLen = 0;

	const len = items.length;
	for (let i = 0; i < len; i++) {
		tempItem = items[i];
		tempItemWithMargin = getItemDimenWithMargin(
			privateConstants.MARGIN,
			items[i]
		);
		tempItemWithMarginRTree = getRTreeRectFromRectObject(tempItemWithMargin);

		fRect.x1 = tempItem.x;
		fRect.x2 = tempItem.x + tempItem.width;
		fRect.y1 = tempItem.y;
		fRect.y2 = tempItem.y + tempItem.height;

		resRects = rt.find(
			fRect,
			false,
			true,
			doOverlapHelper(tempItemWithMarginRTree),
			false
		);

		rLen = resRects.length;
		for (let j = 0; j < rLen; j++) {
			diff = subtractRect(
				getRectObjectFromRTreeRect(resRects[j].rect),
				tempItemWithMargin
			);

			rt.remove(resRects[j].rect);

			dLen = diff.length;
			for (let k = 0; k < dLen; k++) {
				rt.insert({
					rect: getRTreeRectFromRectObject(diff[k]),
					data: {
						id: idCount.idCount++,
						// rect: diff[k],
					},
				});
			}
		}
	}

	return { rt };
};

// export const mergeFreeRectsCore = (context, stack, rt, idCount, direction) => {
// 	const resStack = getStack(context, "resStack");

// 	const dummy = { x1: 0, x2: 0, y1: 0, y2: 0 };
// 	const findRect = { x1: 0, x2: 0, y1: 0, y2: 0 };
// 	let topFullMerged;
// 	while (!stack.isEmpty()) {
// 		const top = stack.pop();
// 		topFullMerged = undefined;

// 		findRect.x1 = top.rect.x1;
// 		findRect.x2 = top.rect.x2;
// 		findRect.y1 = top.rect.y1;
// 		findRect.y2 = top.rect.y2;

// 		if (direction === 1) {
// 			// x
// 			// findRect.y2 += 1;
// 		} else {
// 			// y
// 			// findRect.x2 += 1;
// 		}

// 		const results = rt.find(findRect, false, true, undefined, true);

// 		const len = results?.length || 0;
// 		if (len > 0) {
// 			for (let i = 0; i < len; i++) {
// 				const res = results[i];

// 				const mergedRects = mergeRects(
// 					getRectObjectFromRTreeRect(res.rect),
// 					getRectObjectFromRTreeRect(top.rect)
// 				);
// 				if (mergedRects.length === 1) {
// 					const mergedRect = mergedRects[0];
// 					const mergedRectRTreeFormat = getRTreeRectFromRectObject(mergedRect);

// 					const mergedObject = {
// 						rect: mergedRectRTreeFormat,
// 						data: {
// 							id: idCount.idCount++,
// 						},
// 					};

// 					if (isRectInside(mergedRect, getRectObjectFromRTreeRect(res.rect))) {
// 						rt.remove(res.rect);
// 					}

// 					if (
// 						isRectInside(mergedRect, getRectObjectFromRTreeRect(top.rect)) &&
// 						isRectLarger(mergedRectRTreeFormat, topFullMerged?.rect || dummy)
// 					) {
// 						topFullMerged = mergedObject;
// 					}

// 					// rt.insert(mergedObject);
// 					resStack.push(mergedObject);
// 				}
// 			}
// 			if (!topFullMerged) {
// 				// put  top in the tree
// 				rt.insert({ rect: top.rect, data: { id: idCount.idCount++ } });

// 				while (!resStack.isEmpty()) {
// 					const stackTop = resStack.pop();
// 					rt.insert(stackTop);
// 				}
// 			} else {
// 				rt.insert(topFullMerged);
// 			}
// 		} else {
// 			rt.insert({ rect: top.rect, data: { id: idCount.idCount++ } });
// 		}
// 	}
// };

// export const filterMergedFreeRects = (rt) => {
// 	// const removeMap = {};
// 	const arr = rt.getData();
// 	const len = arr.length;
// 	for (let i = 0; i < len; i++) {
// 		const obj = arr[i];
// 		const result = rt.find(
// 			obj.rect,
// 			undefined,
// 			undefined,
// 			shouldFilterRect,
// 			false
// 		);

// 		if (result) {
// 			// removeMap[i] = true;
// 			rt.remove(obj.rect);
// 		}
// 	}

// 	// return arr.filter((o, index) => removeMap[index]);
// };

// export const mergeFreeRects = async (
// 	context,
// 	freeRects,
// 	idCount,
// 	garbageRects
// ) => {
// 	let rt;
// 	const stack = getStack(context, "stack");

// 	if (Array.isArray(freeRects)) {
// 		// printUnmergedFreeRects(context, freeRects);
// 		stack.setData(freeRects.sort(rectSortX));
// 		rt = getTree(context, "rt");
// 		rt.reset();
// 	} else {
// 		stack.setData(garbageRects.sort(rectSortX));
// 		rt = freeRects;
// 	}

// 	mergeFreeRectsCore(context, stack, rt, idCount, 1);
// 	filterMergedFreeRects(rt);

// 	const mergedArr = rt.getData();
// 	stack.setData(mergedArr.sort(rectSortY));
// 	rt.reset();
// 	mergeFreeRectsCore(context, stack, rt, idCount, 2);
// 	filterMergedFreeRects(rt);

// 	// printMergedFreeRects(context, rt.getData());
// 	// throw "";

// 	return { mergedRectsRt: rt };
// };

export const mergeFreeRectsCore = async (
	context,
	arr,
	mergeCount,
	idCount,
	pt
) => {
	// debugger;
	const stack = getStack(context, "stack");

	stack.empty();
	stack.push(arr[0]);
	const len = arr.length;
	for (let i = 1; i < len; i++) {
		// printMergedRect(context);
		// printStackTopRect(context);
		// printAdjRect(context);
		// printMergedFreeRects(context, stack.getData());
		// printUnmergedFreeRects(context, arr);

		const item = arr[i];
		const top = stack.peak();
		// printStackTopRect(context, top);
		// printAdjRect(context, item);

		const itemR = getRectObjectFromRTreeRect(item.rect);
		const topR = getRectObjectFromRTreeRect(top.rect);

		const mergedRects = mergeRects(itemR, topR);
		if (doRectsOverlapOrTouch(itemR, topR) && mergedRects.length === 1) {
			mergeCount.mergeCount++;
			const mergedRect = mergedRects[0];
			if (isRectInside(mergedRect, topR)) {
				stack.pop();
			}

			if (!isRectInside(mergedRect, itemR)) {
				stack.push(item);
			}

			stack.push({
				rect: getRTreeRectFromRectObject(mergedRect),
				data: {
					id: idCount.idCount++,
				},
			});
			// printMergedRect(context, stack.peak());
		} else {
			let ptr = stack.ptr - 1;
			let ptrItem = stack.stack[ptr];
			const belowTopItem = ptrItem;
			let isInside = false;
			let mergedRectObj;

			while (ptr >= 0 && belowTopItem.rect[pt] === ptrItem.rect[pt]) {
				// printStackTopRect(context, ptrItem);
				const ptrR = getRectObjectFromRTreeRect(ptrItem.rect);

				const mergedRects = mergeRects(itemR, ptrR);
				if (doRectsOverlapOrTouch(itemR, ptrR) && mergedRects.length === 1) {
					mergeCount.mergeCount++;
					const mergedRect = mergedRects[0];
					if (isRectInside(mergedRect, ptrR)) {
						ptrItem.rect.x1 = 0;
						ptrItem.rect.y1 = 0;
						ptrItem.rect.x2 = 0;
						ptrItem.rect.y2 = 0;
					}

					if (isRectInside(mergedRect, itemR)) {
						isInside = true;
					}

					mergedRectObj = {
						rect: getRTreeRectFromRectObject(mergedRect),
						data: {
							id: idCount.idCount++,
						},
					};
					break;
				}
				ptr--;
				ptrItem = stack.stack[ptr];
			}
			if (!isInside) {
				stack.push(item);
			}
			if (mergedRectObj) {
				stack.push(mergedRectObj);
				// printMergedRect(context, stack.peak());
			}
		}
	}
};

export const mergeFreeRects = async (
	context,
	freeRects,
	idCount,
	garbageRects
) => {
	// let rt;
	const stack = getStack(context, "stack");

	if (Array.isArray(freeRects)) {
		// printUnmergedFreeRects(context, freeRects);
		// stack.setData(freeRects.sort(rectSortX));
		// rt = getTree(context, "rt");
		// rt.reset();
	} else {
		// stack.setData(garbageRects.sort(rectSortX));
		// rt = freeRects;
	}

	// printUnmergedFreeRects(context, freeRects);
	// throw "";
	debugger;
	const mergeCount = { mergeCount: 0 };
	let arr = freeRects;
	let count = 0;
	do {
		debugger;
		count++;
		mergeCount.mergeCount = 0;

		arr.sort(rectSortX);
		mergeFreeRectsCore(context, arr, mergeCount, idCount, "x1");
		// printUnmergedFreeRects(context, stack.getData());
		// debugger;

		arr = stack.getData();
		arr = arr.filter((o) => o.rect.x1 || o.rect.x2 || o.rect.y1 || o.rect.y2);
		arr.sort(rectSortY);
		mergeFreeRectsCore(context, arr, mergeCount, idCount, "y1");
		// printUnmergedFreeRects(context, stack.getData());
		// debugger;

		arr = stack.getData();
		arr = arr.filter((o) => o.rect.x1 || o.rect.x2 || o.rect.y1 || o.rect.y2);
		arr.sort(rectSortX2);
		mergeFreeRectsCore(context, arr, mergeCount, idCount, "x2");
		// printUnmergedFreeRects(context, stack.getData());
		// debugger;

		arr = stack.getData();
		arr = arr.filter((o) => o.rect.x1 || o.rect.x2 || o.rect.y1 || o.rect.y2);
		arr.sort(rectSortY2);
		mergeFreeRectsCore(context, arr, mergeCount, idCount, "y2");
		// printUnmergedFreeRects(context, stack.getData());

		arr = stack.getData();
		arr = arr.filter((o) => o.rect.x1 || o.rect.x2 || o.rect.y1 || o.rect.y2);
		// debugger;
	} while (mergeCount.mergeCount > 0);

	// printMergedFreeRects(context, arr);

	// throw "";
	// console.log("count", count);
	return arr;
};

/**
 * [description]
 * @param  {number[]} itemsToArrange          Array of items to arrange
 * @param  {object} mergedRectsIt         Interval Tree of merged rectangles
 * @param  {object} topWorkSpace            Top work space object in object form
 * @param  {object} bottomWorkSpace         Bottom work space object in object form
 * @param  {object} combinedWorkSpaceRectCo combined work space object in object form
 * @param  {number} idCount                  next id available
 * @return {object}                         arranged{object}: key is index in position data array, value is the object; itemsInbottomworkSpace{object}: key is index in position data array, value is also the index; idCount: next available id
 */
export const arrange = async (
	context,
	itemsToArrange,
	// mergedRectsRt,
	overlappedRects,
	topWorkSpace,
	bottomWorkSpace,
	combinedWorkSpaceRectCo,
	idCount
) => {
	// this function updates the modified position data
	// so no need to update the modified position data later

	const mpd = getModifiedPositionData(context);
	const pd = getPositionData(context);
	const privateConstants = getPrivateConstants(context);

	const arranged = {};
	const itemsInBottomWorkSpace = {};

	// let overlappedRects = mergedRectsRt.getData();
	const mergedRectsRt = getTree(context, "rt");
	mergedRectsRt.constructTree(overlappedRects);

	let iToALen = itemsToArrange.length;

	let top;
	let aItem, oItem;

	const garbageStack = getStack(context, "garbageStack");

	while (iToALen > 0) {
		top = itemsToArrange[--iToALen];

		aItem = mpd[top]; // modified arrange Temp Item
		oItem = pd[top]; // original Item

		let pm;
		let MIN_CLOSEST = Number.MAX_SAFE_INTEGER;
		// let MIN_Y = Number.MAX_SAFE_INTEGER;
		let tempAItem = getItemDimenWithMargin(privateConstants.MARGIN, aItem);
		const tempOItem = getItemDimenWithMargin(privateConstants.MARGIN, oItem);
		const oLen = overlappedRects.length;
		for (let i = 0; i < oLen; i++) {
			const oRect = overlappedRects[i].rect;
			// if (
			// 	oRect.x2 - oRect.x1 >= tempAItem.width &&
			// 	oRect.y2 - oRect.y1 >= tempAItem.height &&
			// 	oRect.y1 < MIN_Y
			// ) {
			// 	MIN_Y = oRect.y1;
			// 	pm = overlappedRects[i];
			// }
			const d1 = getDistanceForTest(oRect, tempOItem);
			const sizeTest1 = getSizeTest(oRect, tempOItem, 0);
			if (
				oRect.x2 - oRect.x1 >= tempAItem.width &&
				oRect.y2 - oRect.y1 >= tempAItem.height &&
				sizeTest1 &&
				d1 < MIN_CLOSEST
			) {
				MIN_CLOSEST = d1;
				pm = overlappedRects[i];
			}

			const d = getDistanceForTest(oRect, tempOItem);
			const sizeTest = getSizeTest(oRect, tempOItem);
			if (
				oRect.x2 - oRect.x1 >= tempAItem.width &&
				oRect.y2 - oRect.y1 >= tempAItem.height &&
				sizeTest &&
				d < MIN_CLOSEST
			) {
				MIN_CLOSEST = d;
				pm = overlappedRects[i];
			}
		}

		if (!pm) {
			continue;
		}

		aItem.x = pm.rect.x1 + privateConstants.MARGIN;
		aItem.y = pm.rect.y1 + privateConstants.MARGIN;

		arranged[top] = aItem;

		if (
			bottomWorkSpace &&
			isRectInside(bottomWorkSpace, getRectObjectFromRTreeRect(pm.rect))
		) {
			// put in bottom and combined workspace
			itemsInBottomWorkSpace[top] = top;
		}

		garbageStack.empty();
		const result = mergedRectsRt.find(pm.rect, false, true, undefined, false);
		const resLen = result.length;
		tempAItem = getItemDimenWithMargin(privateConstants.MARGIN, aItem);
		for (let i = 0; i < resLen; i++) {
			const res = result[i];
			const _garbageRects = subtractRect(
				getRectObjectFromRTreeRect(res.rect),
				tempAItem
			);

			const gLen = _garbageRects?.length || 0;
			for (let i = 0; i < gLen; i++) {
				garbageStack.push({
					rect: getRTreeRectFromRectObject(_garbageRects[i]),
					data: {
						id: idCount.idCount++,
						rect: _garbageRects[i],
					},
				});
			}
			if (gLen) {
				mergedRectsRt.remove(res.rect);
			}
		}

		overlappedRects = await mergeFreeRects(
			context,
			// mergedRectsRt,
			mergedRectsRt.getData(),
			idCount,
			garbageStack.getData()
		);
		// mergedRectsRt = _mergedRectsRt;
		// overlappedRects = mergedRectsRt.getData();
	}

	return {
		arranged,
		itemsInBottomWorkSpace,
	};
};
