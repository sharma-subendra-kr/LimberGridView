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

import getElements from "../../store/variables/elements";
import {
	getPositionData,
	getModifiedPositionData,
} from "../../store/variables/essentials";
import getPrivateConstants from "../../store/constants/privateConstants";
import { isRectInside, isPointInsideOrTouchRect } from "../rect/rectUtils";
import {
	doRectsOverlapSingleItemMargin,
	doRectsOverlapOrTouchSingleItemMargin,
	isRectInsideSingleItemMargin,
} from "../utils/items";
import { getHypotenuseSquared } from "../geometry/geometry";

export const getMinMaxXY = (
	context,
	affectedItems,
	resizedLeftX,
	resizedRightX,
	resizedBottomY,
	toY,
	movedBottomY
) => {
	const pd = getPositionData(context);
	const mpd = getModifiedPositionData(context);
	const privateConstants = getPrivateConstants(context);

	let minY = Number.MAX_SAFE_INTEGER;
	let maxY = 0;
	let minX = Number.MAX_SAFE_INTEGER;
	let maxX = 0;
	const len = affectedItems.length;
	for (let i = 0; i < len; i++) {
		if (pd[affectedItems[i]].y < minY) {
			minY = pd[affectedItems[i]].y;
		}
		if (pd[affectedItems[i]].y2 > maxY) {
			maxY = pd[affectedItems[i]].y2;
		}

		if (pd[affectedItems[i]].x < minX) {
			minX = pd[affectedItems[i]].x;
		}

		if (pd[affectedItems[i]].x2 > maxX) {
			maxX = pd[affectedItems[i]].x2;
		}
	}

	if (resizedBottomY > maxY) maxY = resizedBottomY;

	if (resizedRightX > maxX) maxX = resizedRightX;

	if (resizedLeftX < minX) minX = resizedLeftX;

	if (toY < minY) minY = toY;

	if (movedBottomY > maxY) maxY = movedBottomY;

	if (maxY - minY > privateConstants.HEIGHT * 1.5) {
		minY = mpd[affectedItems[len - 1]].y;
		maxY = mpd[affectedItems[len - 1]].y2;
	}

	return {
		minX: minX - privateConstants.MARGIN,
		maxX: maxX + privateConstants.MARGIN,
		minY: minY - privateConstants.MARGIN,
		maxY: maxY + privateConstants.MARGIN,
	};
};

export const getBottomMax = (context, minX, maxX) => {
	const pd = getPositionData(context);

	let max = 0;
	let item;
	const len = pd.length;

	for (let i = 0; i < len; i++) {
		item = pd[i];
		if (pd[i].y2 > max && item.mX < maxX && item.mX2 > minX) {
			max = pd[i].y2;
		}
	}

	return max;
};

export const getTopBottomWS = (context, workSpaceRect, minX, maxX) => {
	const topWorkSpace = {
		x1: minX,
		x2: maxX,
		y1: 0,
		y2: workSpaceRect.y1 < 0 ? 0 : workSpaceRect.y1,
	};

	const bottomMax = getBottomMax(context, minX, maxX);

	const bottomWorkSpace = {
		x1: minX,
		x2: maxX,
		y1: workSpaceRect.y2,
		y2: bottomMax > workSpaceRect.y2 ? bottomMax : workSpaceRect.y2,
	};

	return { topWorkSpace, bottomWorkSpace };
};

export const getItemsInWorkSpaceMap = (arr) => {
	const map = {};
	for (const index of arr) {
		map[index] = true;
	}
	return map;
};

export const getItemsInWorkSpace = (
	context,
	workSpaceRect,
	getIndices = false,
	excludeMap
) => {
	const mpd = getModifiedPositionData(context);

	const len = mpd.length;
	const itemsInWorkSpace = new Array(len);
	let count = 0;
	let item;
	for (let i = 0; i < len; i++) {
		item = mpd[i];
		if (excludeMap && excludeMap[i]) {
			continue;
		}
		if (doRectsOverlapSingleItemMargin(workSpaceRect, item)) {
			if (!getIndices) {
				itemsInWorkSpace[count++] = mpd[i];
			} else {
				itemsInWorkSpace[count++] = i;
			}
		}
	}

	itemsInWorkSpace.length = count;

	return itemsInWorkSpace;
};

export const getItemsBelowBottomWorkSpace = (
	context,
	workSpaceRect,
	getIndices = false,
	excludeMap
) => {
	const mpd = getModifiedPositionData(context);

	if (!workSpaceRect) {
		return [];
	}

	const len = mpd.length;
	const items = new Array(len);
	let count = 0;

	for (let i = 0; i < len; i++) {
		if (excludeMap && excludeMap[i]) {
			continue;
		}
		if (workSpaceRect.y2 <= mpd[i].mY1) {
			if (!getIndices) {
				items[count++] = mpd[i];
			} else {
				items[count++] = i;
			}
		}
	}

	items.length = count;

	return items;
};

export const getResizeWSItemsDetail = (
	context,
	ws,
	topWs,
	bottomWs,
	cWs,
	arranged,
	itemsToArrange,
	getIndices = false
) => {
	const mpd = getModifiedPositionData(context);

	const wsPlusTopWs = {
		x1: ws.x1,
		x2: ws.x2,
		y1: topWs ? topWs.y1 : ws.y1,
		y2: ws.y2,
	};

	const filteredItemsToArrange = itemsToArrange.filter((o) => !arranged[o]);

	const len = mpd.length;
	const updatedItemsToArrange = new Array(len);
	let uCount = 0;
	const itemsInWorkSpace = new Array(len);
	let iCount = 0;

	for (let i = 0; i < len; i++) {
		const _item = mpd[i];
		if (doRectsOverlapSingleItemMargin(cWs, _item)) {
			if (arranged[i]) {
				if (!getIndices) {
					itemsInWorkSpace[iCount++] = mpd[i];
				} else {
					itemsInWorkSpace[iCount++] = i;
				}
			} else if (doRectsOverlapSingleItemMargin(wsPlusTopWs, _item)) {
				if (!getIndices) {
					itemsInWorkSpace[iCount++] = mpd[i];
				} else {
					itemsInWorkSpace[iCount++] = i;
				}
			} else if (
				doRectsOverlapSingleItemMargin(bottomWs, _item) &&
				!isRectInside(bottomWs, _item)
			) {
				if (!getIndices) {
					itemsInWorkSpace[iCount++] = mpd[i];
				} else {
					itemsInWorkSpace[iCount++] = i;
				}
			} else if (
				doRectsOverlapSingleItemMargin(bottomWs, _item) &&
				isRectInside(bottomWs, _item) &&
				!arranged[i]
			) {
				updatedItemsToArrange[uCount++] = i;
				mpd[i].x = undefined;
				mpd[i].y = undefined;
			}
		}
	}

	itemsInWorkSpace.length = iCount;
	updatedItemsToArrange.length = uCount;

	return {
		updatedItemsToArrange: [
			...filteredItemsToArrange,
			...updatedItemsToArrange,
		],
		itemsInWorkSpace: itemsInWorkSpace,
	};
};

export const sweepLineSortX = (a, b) => {
	if (a.x === b.x) {
		return a.y - b.y;
	} else {
		return a.x - b.x;
	}
};

export const rectSortX = (a, b) => {
	if (a.x1 === b.x1) {
		return a.y1 - b.y1;
	} else {
		return a.x1 - b.x1;
	}
};

export const rectSortY = (a, b) => {
	if (a.y1 === b.y1) {
		return a.x1 - b.x1;
	} else {
		return a.y1 - b.y1;
	}
};

export const rectSortHypotenusSquared = (pd) => {
	return (a, b) =>
		getHypotenuseSquared(
			pd[a].x,
			pd[a].y,
			pd[a].x + pd[a].width,
			pd[a].y + pd[a].height
		) -
		getHypotenuseSquared(
			pd[b].x,
			pd[b].y,
			pd[b].x + pd[b].width,
			pd[b].y + pd[b].height
		);
};

export const shouldFilterRect = function (suspect, rect) {
	if (isRectInside(suspect, rect) && suspect !== rect) {
		return true;
	}
};

export const getSizeTest = (
	suspect,
	rect,
	MARGIN,
	DEFINED_MIN_HEIGHT_AND_WIDTH,
	SHRINK_TO_FIT
) => {
	const h1 = rect.mWidth * rect.mWidth + rect.mHeight * rect.mHeight;
	const h2 = getHypotenuseSquared(
		suspect.x1,
		suspect.y1,
		suspect.x2,
		suspect.y2
	);

	if (
		h1 < h2 &&
		suspect.x2 - suspect.x1 >= rect.mWidth &&
		suspect.y2 - suspect.y1 >= rect.mHeight
	) {
		return true;
	}

	if (!SHRINK_TO_FIT) {
		return;
	}

	const THRESHOLD = SHRINK_TO_FIT;

	let match1 = { width: 0, height: 0 };
	let match2 = { width: 0, height: 0 };

	const aw = rect.mWidth;
	const bw = suspect.x2 - suspect.x1;
	const xw = (100 * aw - 100 * bw) / aw;
	if (xw <= THRESHOLD) {
		const factor = (suspect.x2 - suspect.x1) / rect.mWidth;
		const h = rect.mHeight * factor;
		if (h <= suspect.y2 - suspect.y1) {
			match1 = {
				width: suspect.x2 - suspect.x1 - MARGIN * 2,
				height: h - MARGIN * 2,
			};
		}
	}

	const ah = rect.mHeight;
	const bh = suspect.y2 - suspect.y1;
	const xh = (100 * ah - 100 * bh) / ah;
	if (xh <= THRESHOLD) {
		const factor = (suspect.y2 - suspect.y1) / rect.mHeight;
		const w = factor * rect.mWidth;
		if (w <= suspect.x2 - suspect.x1) {
			match2 = {
				width: w - MARGIN * 2,
				height: suspect.y2 - suspect.y1 - MARGIN * 2,
			};
		}
	}

	if (
		match1.width < DEFINED_MIN_HEIGHT_AND_WIDTH ||
		match1.height < DEFINED_MIN_HEIGHT_AND_WIDTH
	) {
		match1.width = 0;
		match1.height = 0;
	}

	if (
		match2.width < DEFINED_MIN_HEIGHT_AND_WIDTH ||
		match2.height < DEFINED_MIN_HEIGHT_AND_WIDTH
	) {
		match2.width = 0;
		match2.height = 0;
	}

	const m1Hypo = match1.width * match1.width + match1.height * match1.height;
	const m2Hypo = match2.width * match2.width + match2.height * match2.height;

	if ((m1Hypo < m2Hypo || m2Hypo === 0) && match1.width > 0) {
		return match1;
	} else if (match2.width > 0) {
		return match2;
	}
	return undefined;
};

export const getDistanceForTest = (suspect, rect) => {
	return getHypotenuseSquared(suspect.x1, suspect.y1, rect.mX1, rect.mY1);
};

export const shiftItemsDown = (context, items, height) => {
	const mpd = getModifiedPositionData(context);

	const len = items.length;

	for (let i = 0; i < len; i++) {
		mpd[items[i]].y += height;
		mpd[items[i]].mY += height;
		mpd[items[i]].y1 += height;
		mpd[items[i]].y2 += height;
		mpd[items[i]].mY1 += height;
		mpd[items[i]].mY2 += height;
	}
};

export const shiftItemsUp = function (context, y, shiftHeight) {
	const pd = getPositionData(context);
	const e = getElements(context);

	const len = pd.length;
	for (let i = 0; i < len; i++) {
		if (pd[i].y >= y) {
			pd[i].y -= shiftHeight;
			pd[i].mY -= shiftHeight;
			pd[i].y1 -= shiftHeight;
			pd[i].y2 -= shiftHeight;
			pd[i].mY1 -= shiftHeight;
			pd[i].mY2 -= shiftHeight;

			if (e.$limberGridViewItems[i]) {
				e.$limberGridViewItems[i].style.transform =
					"translate(" + pd[i].x1 + "px, " + pd[i].y1 + "px)";
			}
		}
	}
};

export const addItemAllowCheck = function (context, x, y, width, height) {
	const privateConstants = getPrivateConstants(context);
	const pd = getPositionData(context);

	var tempPlane = {
		x1: x - privateConstants.MARGIN,
		y1: y - privateConstants.MARGIN,
		x2: x + width + privateConstants.MARGIN,
		y2: y + height + privateConstants.MARGIN,
	};

	if (x < 0 || y < 0) {
		return false;
	}

	if (typeof width !== "number" || typeof height !== "number") {
		return false;
	}

	if (x + width > privateConstants.WIDTH) {
		return false;
	}

	if (width < 50 || height < 50) {
		return false;
	}

	let isInside;
	const len = pd.length;
	for (let i = 0; i < len; i++) {
		isInside = doRectsOverlapOrTouchSingleItemMargin(tempPlane, pd[i]);

		if (isInside) {
			return false;
		}
	}
	return true;
};

export const cutSpaceAllowCheck = function (context, x, y, width, height) {
	const privateConstants = getPrivateConstants(context);
	const pd = getPositionData(context);

	const tempPlane = {
		x1: 0,
		y1: y,
		x2: privateConstants.WIDTH,
		y2: y + height,
	};

	if (typeof width !== "number" || typeof height !== "number") {
		return false;
	}

	let minY = tempPlane.y2;
	let maxY = tempPlane.y1;
	const len = pd.length;
	for (let i = 0; i < len; i++) {
		if (
			isRectInsideSingleItemMargin(tempPlane, pd[i]) ||
			(pd[i].mY1 < tempPlane.y1 && pd[i].mY2 > tempPlane.y2)
		) {
			return false;
		}

		if (!doRectsOverlapOrTouchSingleItemMargin(tempPlane, pd[i])) {
			continue;
		}

		const topPoint = {
			x: pd[i].mX1,
			y: pd[i].mY1,
		};
		const bottomPoint = {
			x: pd[i].mX2,
			y: pd[i].mY2,
		};
		if (pd[i].mY1 < minY && isPointInsideOrTouchRect(tempPlane, topPoint)) {
			minY = pd[i].mY1;
		}

		if (pd[i].mY2 > maxY && isPointInsideOrTouchRect(tempPlane, bottomPoint)) {
			maxY = pd[i].mY2;
		}
	}

	if (minY - maxY > 0) {
		return { y: maxY, shiftHeight: minY - maxY };
	}
	return false;
};
