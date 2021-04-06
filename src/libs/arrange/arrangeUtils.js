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
import {
	// getDistanceBetnPts,
	getHypotenuseSquared,
	getMidPoint,
} from "../geometry/geometry";

export const getMinMaxXY = (
	context,
	affectedItems,
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
		if (pd[affectedItems[i]].y + pd[affectedItems[i]].height > maxY) {
			maxY = pd[affectedItems[i]].y + pd[affectedItems[i]].height;
		}

		if (pd[affectedItems[i]].x < minX) {
			minX = pd[affectedItems[i]].x;
		}

		if (pd[affectedItems[i]].x + pd[affectedItems[i]].width > maxX) {
			maxX = pd[affectedItems[i]].x + pd[affectedItems[i]].width;
		}
	}

	if (resizedBottomY > maxY) maxY = resizedBottomY;

	if (resizedRightX > maxX) maxX = resizedRightX;

	if (toY < minY) minY = toY;

	if (movedBottomY > maxY) maxY = movedBottomY;

	if (maxY - minY > privateConstants.HEIGHT * 1.5) {
		minY = mpd[affectedItems[len - 1]].y;
		maxY = mpd[affectedItems[len - 1]].y + mpd[affectedItems[len - 1]].height;
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
	const mpd = getModifiedPositionData(context);

	let max = 0;
	let item, mItem;
	const len = pd.length;

	for (let i = 0; i < len; i++) {
		item = pd[i];
		mItem = mpd[i];
		if (pd[i].y2 > max && item.mX < maxX && item.mX2 > minX) {
			max = pd[i].y2;
		}

		if (mpd[i].y2 > max && mItem.mX < maxX && mItem.mX2 > minX) {
			max = mpd[i].y2;
		}
	}

	return max;
};

export const getTopBottomWS = (context, workSpaceRect, minX, maxX) => {
	let topWorkSpace, bottomWorkSpace;
	if (workSpaceRect.y1 > 0) {
		topWorkSpace = {
			x1: minX,
			x2: maxX,
			y1: 0,
			y2: workSpaceRect.y1,
		};
	}

	const bottomMax = getBottomMax(context, minX, maxX);

	if (bottomMax > workSpaceRect.y2) {
		bottomWorkSpace = {
			x1: minX,
			x2: maxX,
			y1: workSpaceRect.y2,
			y2: bottomMax,
		};
	}

	return { topWorkSpace, bottomWorkSpace };
};

export const getItemsInWorkSpace = (
	context,
	workSpaceRect,
	getIndices = false
) => {
	const mpd = getModifiedPositionData(context);

	const len = mpd.length;
	const itemsInWorkSpace = new Array(len);
	let count = 0;
	let item;
	for (let i = 0; i < len; i++) {
		item = mpd[i];
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
	getIndices = false
) => {
	const mpd = getModifiedPositionData(context);

	if (!workSpaceRect) {
		return [];
	}

	const len = mpd.length;
	const items = new Array(len);
	let count = 0;

	for (let i = 0; i < len; i++) {
		if (workSpaceRect.y2 <= mpd[i].y1) {
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

// export const doOverlapHelper = function (suspect, rect) {
// 	if (doRectsOverlapWithMargin(suspect, rect)) {
// 		return true;
// 	}
// };

export const shouldFilterRect = function (suspect, rect) {
	if (isRectInside(suspect, rect) && suspect !== rect) {
		return true;
	}
};

export const getSizeTest = (suspect, rect, threshold = 70) => {
	const h1 = getHypotenuseSquared(
		rect.mX,
		rect.mY,
		rect.mX + rect.mWidth,
		rect.mY + rect.mHeight
	);
	const h2 = getHypotenuseSquared(
		suspect.x1,
		suspect.y1,
		suspect.x2,
		suspect.y2
	);
	if (h1 < h2 && (h1 / h2) * 100 >= threshold) {
		return true;
	}
};

export const getDistanceForTest = (suspect, rect) => {
	const p1 = getMidPoint(suspect.x1, suspect.y1, suspect.x2, suspect.y2);
	const p2 = getMidPoint(
		rect.mX,
		rect.mY,
		rect.mX + rect.mWidth,
		rect.mY + rect.mHeight
	);
	return getHypotenuseSquared(p1.x, p1.y, p2.x, p2.y);
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
			e.$limberGridViewItems[i].style.transform =
				"translate(" + pd[i].x + "px, " + pd[i].y + "px)";
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

	let minY = y + height;
	let maxY = y;

	let atLeastOneOverlapping = false;
	let isOverlapping;
	const len = pd.length;
	for (let i = 0; i < len; i++) {
		if (isRectInsideSingleItemMargin(tempPlane, pd[i])) {
			return false;
		}

		isOverlapping = doRectsOverlapOrTouchSingleItemMargin(tempPlane, pd[i]);

		if (isOverlapping) {
			atLeastOneOverlapping = true;
			const topPoint = {
				x: pd[i].x,
				y: pd[i].y - privateConstants.MARGIN,
			};
			const bottomPoint = {
				x: pd[i].x,
				y: pd[i].y + pd[i].height + privateConstants.MARGIN,
			};
			if (
				pd[i].y - privateConstants.MARGIN < minY &&
				isPointInsideOrTouchRect(tempPlane, topPoint)
			) {
				minY = pd[i].y - privateConstants.MARGIN;
			}

			if (
				pd[i].y + pd[i].height + privateConstants.MARGIN > maxY &&
				isPointInsideOrTouchRect(tempPlane, bottomPoint)
			) {
				maxY = pd[i].y + pd[i].height + privateConstants.MARGIN;
			}
		}
	}

	if (atLeastOneOverlapping) {
		if (minY - maxY > 0) {
			return { y: maxY, shiftHeight: minY - maxY };
		} else {
			return false;
		}
	}

	return { y: y, shiftHeight: height };
};
