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
	shouldFilterRect,
	doOverlapHelper,
	getSizeTest,
	getDistanceForTest,
	rectSortHypotenusSquared,
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

export const mergeFreeRectsCore = (context, stack, rt, idCount) => {
	const findRect = { x1: 0, x2: 0, y1: 0, y2: 0 };
	let topFullMerged = false;
	while (!stack.isEmpty()) {
		const top = stack.pop();
		topFullMerged = false;

		findRect.x1 = top.rect.x1;
		findRect.x2 = top.rect.x2;
		findRect.y1 = top.rect.y1;
		findRect.y2 = top.rect.y2;

		const results = rt.find(findRect, false, true, undefined, true);

		const len = results?.length || 0;
		if (len > 0) {
			for (let i = 0; i < len; i++) {
				const res = results[i];

				const mergedRects = mergeRects(
					getRectObjectFromRTreeRect(res.rect),
					getRectObjectFromRTreeRect(top.rect)
				);
				if (mergedRects.length === 1) {
					const mergedRect = mergedRects[0];

					if (isRectInside(mergedRect, getRectObjectFromRTreeRect(res.rect))) {
						rt.remove(res.rect);
					}

					if (isRectInside(mergedRect, getRectObjectFromRTreeRect(top.rect))) {
						topFullMerged = true;
					}

					const mergedObject = {
						rect: getRTreeRectFromRectObject(mergedRect),
						data: {
							id: idCount.idCount++,
							// rect: mergedRect,
						},
					};

					rt.insert(mergedObject);
				}
			}
			if (topFullMerged === false) {
				// put  top in the tree
				rt.insert({ rect: top.rect, data: { id: idCount.idCount++ } });
			}
		} else {
			rt.insert({ rect: top.rect, data: { id: idCount.idCount++ } });
		}
	}
};

export const filterMergedFreeRects = (rt) => {
	const arr = rt.getData();
	const len = arr.length;
	for (let i = 0; i < len; i++) {
		const obj = arr[i];
		const result = rt.find(
			obj.rect,
			undefined,
			undefined,
			shouldFilterRect,
			false
		);

		if (result) {
			rt.remove(obj.rect);
		}
	}
};

export const mergeFreeRects = async (
	context,
	freeRects,
	idCount,
	garbageRects
) => {
	let rt;
	const stack = getStack(context, "stack");

	if (Array.isArray(freeRects)) {
		stack.setData(freeRects.sort(rectSortX));
		rt = getTree(context, "rt");
		rt.reset();
	} else {
		stack.setData(garbageRects.sort(rectSortX));
		rt = freeRects;
	}

	mergeFreeRectsCore(context, stack, rt, idCount);
	// printMergedFreeRects(context, rt.getData(true));
	filterMergedFreeRects(rt);

	const mergedArr = rt.getData();
	stack.setData(mergedArr.sort(rectSortY));
	rt.reset();
	mergeFreeRectsCore(context, stack, rt, idCount);
	filterMergedFreeRects(rt);

	return { mergedRectsRt: rt };
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
	mergedRectsRt,
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

	let overlappedRects = mergedRectsRt.getData();
	itemsToArrange.sort(rectSortHypotenusSquared(pd));

	let top;
	let aItem, oItem;

	const garbageStack = getStack(context, "garbageStack");

	let iToALen = itemsToArrange.length;
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
			const garbageRects = subtractRect(
				getRectObjectFromRTreeRect(res.rect),
				tempAItem
			);

			const gLen = garbageRects?.length || 0;
			for (let i = 0; i < gLen; i++) {
				garbageStack.push({
					rect: getRTreeRectFromRectObject(garbageRects[i]),
					data: {
						id: idCount.idCount++,
					},
				});
			}
			mergedRectsRt.remove(res.rect);
		}

		const { mergedRectsRt: _mergedRectsRt } = await mergeFreeRects(
			context,
			mergedRectsRt,
			idCount,
			garbageStack.getData()
		);
		mergedRectsRt = _mergedRectsRt;
		overlappedRects = mergedRectsRt.getData();
	}

	return {
		arranged,
		itemsInBottomWorkSpace,
	};
};
