/*

LimberGridView, a powerful JavaScript Library using Computational Geometry to render movable, dynamically resizable, and auto-arranging grids.

Copyright © 2018-2021 Subendra Kumar Sharma. All rights reserved. (jobs.sharma.subendra.kr@gmail.com)

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
	getPositionData,
	getRenderedItems,
	getSerializedPositionData,
} from "../../store/variables/essentials";
import { isMobile } from "./utils";

export const makeItem = (item) => {
	item.x1 = item.x;
	item.x2 = item.x + item.width;
	item.y1 = item.y;
	item.y2 = item.y + item.height;
};

export const enhanceItemHW = (item) => {
	item.x = item.x1;
	item.y = item.y1;
	item.width = item.x2 - item.x1;
	item.height = item.y2 - item.y1;
};

export const sanitizeNumberFloor = (num) => {
	const decimalPart = num % 1;
	const integerPart = Math.trunc(num);
	if (decimalPart <= 0.25) {
		return integerPart;
	} else if (decimalPart <= 0.5) {
		return integerPart + 0.25;
	} else if (decimalPart <= 0.75) {
		return integerPart + 0.5;
	} else if (decimalPart <= 0.9999999999999999) {
		return integerPart + 0.75;
	}
	return integerPart - 0.25;
};

export const sanitizeNumberCeil = (num) => {
	const decimalPart = num % 1;
	const integerPart = Math.trunc(num);
	if (decimalPart <= 0.25) {
		return integerPart + 0.25;
	} else if (decimalPart <= 0.5) {
		return integerPart + 0.5;
	} else if (decimalPart <= 0.75) {
		return integerPart + 0.75;
	} else if (decimalPart <= 0.9999999999999999) {
		return integerPart + 1;
	}
	return integerPart + 0.25;
};

export const sanitizeDimension = (item) => {
	item.x1 = sanitizeNumberCeil(item.x1);
	item.y1 = sanitizeNumberCeil(item.y1);
	item.x2 = sanitizeNumberFloor(item.x2);
	item.y2 = sanitizeNumberFloor(item.y2);

	item.x = sanitizeNumberCeil(item.x);
	item.y = sanitizeNumberCeil(item.y);
	item.width = sanitizeNumberFloor(item.width);
	item.height = sanitizeNumberFloor(item.height);
};

export const doRectsOverlapWithMargin = (rectA, rectB) => {
	// 2nd arg is item and needs to be checked with margin
	if (
		rectA.mX1 >= rectB.mX2 ||
		rectB.mX1 >= rectA.mX2 ||
		rectA.mY1 >= rectB.mY2 ||
		rectB.mY1 >= rectA.mY2
	) {
		return false;
	}
	return true;
};

export const doRectsOverlapSingleItemMargin = (rectA, rectB) => {
	// 2nd arg is item and needs to be checked with margin
	if (
		isNaN(rectA.x1) ||
		isNaN(rectA.x2) ||
		isNaN(rectB.mX1) ||
		isNaN(rectB.mX2)
	) {
		return false;
	}

	if (
		rectA.x1 >= rectB.mX2 ||
		rectB.mX1 >= rectA.x2 ||
		rectA.y1 >= rectB.mY2 ||
		rectB.mY1 >= rectA.y2
	) {
		return false;
	}
	return true;
};

export const doRectsOverlapOrTouchSingleItemMargin = (rectA, rectB) => {
	// 2nd arg is item and needs to be checked with margin
	if (
		isNaN(rectA.x1) ||
		isNaN(rectA.x2) ||
		isNaN(rectB.mX1) ||
		isNaN(rectB.mX2)
	) {
		return false;
	}

	if (
		rectA.x1 > rectB.mX2 ||
		rectB.mX1 > rectA.x2 ||
		rectA.y1 > rectB.mY2 ||
		rectB.mY1 > rectA.y2
	) {
		return false;
	}
	return true;
};

export const isRectInsideSingleItemMargin = (rectA, rectB) => {
	// is rectB inside rectA
	if (
		rectA.x1 <= rectB.mX1 &&
		rectA.x2 >= rectB.mX2 &&
		rectA.y1 <= rectB.mY1 &&
		rectA.y2 >= rectB.mY2
	) {
		return true;
	}
};

export const isPointInsideOrTouchRectWithMargin = (rect, point) => {
	if (
		point.x >= rect.mX1 &&
		point.x <= rect.mX2 &&
		point.y >= rect.mY1 &&
		point.y <= rect.mY2
	) {
		return true;
	}
};

export const swapDimensActualAndWithMargin = (rect) => {
	const tempX1 = rect.x1;
	const tempX2 = rect.x2;
	const tempY1 = rect.y1;
	const tempY2 = rect.y2;

	rect.x1 = rect.mX1;
	rect.x2 = rect.mX2;
	rect.y1 = rect.mY1;
	rect.y2 = rect.mY2;

	rect.mX1 = tempX1;
	rect.mX2 = tempX2;
	rect.mY1 = tempY1;
	rect.mY2 = tempY2;
};

export const isValidRect = function (rect) {
	if (isNaN(rect.x1) || isNaN(rect.x2) || isNaN(rect.y1) || isNaN(rect.y2)) {
		return false;
	}

	if (rect.x1 >= rect.x2 || rect.y1 >= rect.y2) {
		return false;
	}
	return true;
};

export const isValidRectHW = function (rect) {
	if (
		isNaN(rect.x) ||
		isNaN(rect.y) ||
		isNaN(rect.width) ||
		isNaN(rect.height)
	) {
		return false;
	}

	if (rect.x >= rect.x + rect.width || rect.y >= rect.y + rect.height) {
		return false;
	}
	return true;
};

export const getItemsToRerenderOnUndoRedo = function (cpd, npd) {
	// cpd: current position data
	// npd: new position data

	const changed = {};
	for (const [index] of cpd.entries()) {
		if (
			cpd[index].x1 !== npd[index].x1 ||
			cpd[index].x2 !== npd[index].x2 ||
			cpd[index].y1 !== npd[index].y1 ||
			cpd[index].y2 !== npd[index].y2
		) {
			changed[index] = true;
		}
	}

	return changed;
};

export const getItemsInWorkSpace = (
	context,
	workSpaceRect,
	getIndices = false,
	excludeMap
) => {
	const pd = getPositionData(context);

	const len = pd.length;
	const itemsInWorkSpace = new Array(len);
	let count = 0;
	let item;
	for (let i = 0; i < len; i++) {
		item = pd[i];
		if (excludeMap && excludeMap[i]) {
			continue;
		}
		if (doRectsOverlapSingleItemMargin(workSpaceRect, item)) {
			if (!getIndices) {
				itemsInWorkSpace[count++] = pd[i];
			} else {
				itemsInWorkSpace[count++] = i;
			}
		}
	}

	itemsInWorkSpace.length = count;

	return itemsInWorkSpace;
};

export const getRenderedItemsMap = (context) => {
	const renderedItems = getRenderedItems(context);
	const renderedItemsMap = {};
	for (const item of renderedItems) {
		renderedItemsMap[item] = true;
	}
	return renderedItemsMap;
};
