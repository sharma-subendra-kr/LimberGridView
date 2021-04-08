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
	rectSortX,
	rectSortY,
	shouldFilterRect,
	getSizeTest,
	getDistanceForTest,
	rectSortHypotenusSquared,
} from "./arrangeUtils";
import { subtractRect, mergeRects, isRectInside } from "../rect/rectUtils";
// import { shuffle } from "../array/arrayUtils";
import getTree from "../../store/variables/trees";
import getStack from "../../store/variables/stacks";
import {
	sanitizeDimension,
	swapDimensActualAndWithMargin,
} from "../utils/items";
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
	// const res = { integrateTop: false, integrateBottom: false };

	const rt = getTree(context, "rt");

	if (topWorkSpace) {
		topWSItems = getItemsInWorkSpace(context, topWorkSpace);
		const sweepRes = sweepLineTop(context, topWorkSpace, topWSItems, rt);

		// if (sweepRes < topWorkSpace.y2) {
		topWorkSpace.y1 = sweepRes;

		// res.integrateTop = true;
		// }
	}

	if (bottomWorkSpace) {
		bottomWSItems = getItemsInWorkSpace(context, bottomWorkSpace);
		const sweepRes = sweepLineBottom(
			context,
			bottomWorkSpace,
			bottomWSItems,
			rt
		);

		// if (sweepRes > bottomWorkSpace.y1) {
		bottomWorkSpace.y2 = sweepRes;

		// res.integrateBottom = true;
		// }
	}

	// return res;
};

export const sweepLineTop = (context, area, items, rt) => {
	rt.reset();

	const len = items.length;

	for (let i = 0; i < len; i++) {
		rt.insert(items[i]);
	}

	let resultPoint = area.y2;

	const WIDTH = getWidth(context);
	const DEFINED_MIN_HEIGHT_AND_WIDTH = getDefinedMinHeightAndWidth(context);
	let w = 0;
	const suspect = { x1: 0, x2: 0, y1: area.y1, y2: area.y2 };
	let res;
	while (w < WIDTH) {
		suspect.x1 = w;
		suspect.x2 = w + DEFINED_MIN_HEIGHT_AND_WIDTH;

		res = rt.find(suspect, false, true, undefined, false);

		const len = res.length;
		let max = -1;
		for (let i = 0; i < len; i++) {
			if (res[i].mY2 > max) {
				max = res[i].mY2;
			}
		}

		if (max !== -1 && max < resultPoint) {
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
		rt.insert(items[i]);
	}

	let resultPoint = area.y1;

	const WIDTH = getWidth(context);
	const DEFINED_MIN_HEIGHT_AND_WIDTH = getDefinedMinHeightAndWidth(context);
	let w = 0;
	const suspect = { x1: 0, x2: 0, y1: area.y1, y2: area.y2 };
	let res;
	while (w < WIDTH) {
		suspect.x1 = w;
		suspect.x2 = w + DEFINED_MIN_HEIGHT_AND_WIDTH;

		res = rt.find(suspect, false, true, undefined, false);

		const len = res.length;
		let min = Number.MAX_SAFE_INTEGER;
		for (let i = 0; i < len; i++) {
			if (res[i].mY1 < min) {
				min = res[i].mY1;
			}
		}

		if (min !== Number.MAX_SAFE_INTEGER && min > resultPoint) {
			resultPoint = min;
		}

		w = suspect.x2;
	}

	return resultPoint;
};

export const sweepLineForFreeSpace = (context, area, items, idCount) => {
	// area: area to sweep
	// area: area to sweep Coordinate Form
	// items: items in area

	const rt = getTree(context, "rt");
	rt.reset();

	area.id = idCount.idCount++;
	rt.insert(area);

	let item;
	let resRects;
	let rLen = 0;
	let diff;
	let dLen = 0;

	const len = items.length;
	for (let i = 0; i < len; i++) {
		item = items[i];

		resRects = rt.find(item, false, true, undefined, false);

		rLen = resRects.length;
		for (let j = 0; j < rLen; j++) {
			swapDimensActualAndWithMargin(item);
			diff = subtractRect(resRects[j], item);
			swapDimensActualAndWithMargin(item);

			rt.remove(resRects[j]);

			dLen = diff.length;
			for (let k = 0; k < dLen; k++) {
				diff[k].id = idCount.idCount++;
				rt.insert(diff[k]);
			}
		}
	}

	// printUnmergedFreeRects(context, rt.getData());
	// debugger;

	return { rt };
};

export const mergeFreeRectsCore = (context, stack, rt, idCount) => {
	let topFullMerged = false;
	while (!stack.isEmpty()) {
		const top = stack.pop();
		topFullMerged = false;

		const results = rt.find(top, false, true, undefined, true);

		const len = results?.length || 0;
		if (len > 0) {
			for (let i = 0; i < len; i++) {
				const res = results[i];

				const mergedRects = mergeRects(res, top);
				if (mergedRects.length === 1) {
					const mergedRect = mergedRects[0];
					mergedRect.id = idCount.idCount++;

					if (isRectInside(mergedRect, res)) {
						rt.remove(res);
					}

					if (isRectInside(mergedRect, top)) {
						topFullMerged = true;
					}

					rt.insert(mergedRect);
				}
			}
			if (topFullMerged === false) {
				// put  top in the tree
				top.id = idCount.idCount++;
				rt.insert(top);
			}
		} else {
			top.id = idCount.idCount++;
			rt.insert(top);
		}
	}
};

export const filterMergedFreeRects = (rt) => {
	const arr = rt.getData();
	const len = arr.length;
	for (let i = 0; i < len; i++) {
		const obj = arr[i];
		const result = rt.find(obj, undefined, undefined, shouldFilterRect, false);

		if (result) {
			rt.remove(obj);
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
	filterMergedFreeRects(rt);

	const mergedArr = rt.getData();
	stack.setData(mergedArr.sort(rectSortY));
	rt.reset();
	mergeFreeRectsCore(context, stack, rt, idCount);
	filterMergedFreeRects(rt);

	// printMergedFreeRects(context, rt.getData());
	// debugger;

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
		let tempAItem = aItem;
		const tempOItem = oItem || { mX1: 0, mY1: 0, mX2: 0, mY2: 0 };

		const oLen = overlappedRects.length;
		for (let i = 0; i < oLen; i++) {
			const oRect = overlappedRects[i];
			const d1 = getDistanceForTest(oRect, tempOItem);
			const sizeTest1 = getSizeTest(oRect, tempOItem, 0);
			if (
				oRect.x2 - oRect.x1 >= tempAItem.mWidth &&
				oRect.y2 - oRect.y1 >= tempAItem.mHeight &&
				sizeTest1 &&
				d1 < MIN_CLOSEST
			) {
				MIN_CLOSEST = d1;
				pm = overlappedRects[i];
			}

			const d = getDistanceForTest(oRect, tempOItem);
			const sizeTest = getSizeTest(oRect, tempOItem);
			if (
				oRect.x2 - oRect.x1 >= tempAItem.mWidth &&
				oRect.y2 - oRect.y1 >= tempAItem.mHeight &&
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

		aItem.x = pm.x1 + privateConstants.MARGIN;
		aItem.y = pm.y1 + privateConstants.MARGIN;
		aItem.x1 = aItem.x;
		aItem.y1 = aItem.y;
		aItem.x2 = aItem.x + aItem.width;
		aItem.y2 = aItem.y + aItem.height;
		sanitizeDimension(aItem);
		aItem.mX = aItem.x - privateConstants.MARGIN;
		aItem.mY = aItem.y - privateConstants.MARGIN;
		aItem.mWidth = aItem.width + privateConstants.MARGIN * 2;
		aItem.mHeight = aItem.height + privateConstants.MARGIN * 2;
		aItem.mX1 = aItem.x1 - privateConstants.MARGIN;
		aItem.mY1 = aItem.y1 - privateConstants.MARGIN;
		aItem.mX2 = aItem.x2 + privateConstants.MARGIN;
		aItem.mY2 = aItem.y2 + privateConstants.MARGIN;

		arranged[top] = aItem;

		if (bottomWorkSpace && isRectInside(bottomWorkSpace, pm)) {
			// put in bottom and combined workspace
			itemsInBottomWorkSpace[top] = top;
		}

		garbageStack.empty();
		const result = mergedRectsRt.find(pm, false, true, undefined, false);
		const resLen = result.length;
		tempAItem = { ...aItem };
		tempAItem.x1 -= privateConstants.MARGIN;
		tempAItem.x2 += privateConstants.MARGIN;
		tempAItem.y1 -= privateConstants.MARGIN;
		tempAItem.y2 += privateConstants.MARGIN;
		for (let i = 0; i < resLen; i++) {
			const res = result[i];
			const garbageRects = subtractRect(res, tempAItem);

			const gLen = garbageRects?.length || 0;
			for (let i = 0; i < gLen; i++) {
				garbageRects[i].idCount = idCount.idCount++;
				garbageStack.push(garbageRects[i]);
			}
			mergedRectsRt.remove(res);
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
