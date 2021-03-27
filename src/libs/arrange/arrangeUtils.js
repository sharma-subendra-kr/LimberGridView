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
import {
	doRectsOverlap,
	doRectsOverlapRTree,
	isRectInside,
	getRectObjectFromCo,
	getRectObjectFromRTreeRect,
	doRectsOnlyTouch,
	isPointInsideRect,
	doesPointTouchRect,
	areRectsIdentical,
	getCoordinates,
	areRectsOnSameYAxisExPath,
} from "../rect/rectUtils";
import { getDistanceBetnPts } from "../geometry/geometry";

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
	const privateConstants = getPrivateConstants(context);

	let max = 0;
	let item, mItem;
	const len = pd.length;

	for (let i = 0; i < len; i++) {
		item = getItemDimenWithMargin(privateConstants.MARGIN, pd[i]);
		mItem = getItemDimenWithMargin(privateConstants.MARGIN, mpd[i]);
		if (
			pd[i].y + pd[i].height > max &&
			item.x < maxX &&
			item.x + item.width > minX
		) {
			max = pd[i].y + pd[i].height;
		}

		if (
			mpd[i].y + mpd[i].height > max &&
			mItem.x < maxX &&
			mItem.x + mItem.width > minX
		) {
			max = mpd[i].y + mpd[i].height;
		}
	}

	return max;
};

export const getTopBottomWS = (context, workSpaceRectCo, minX, maxX) => {
	let topWorkSpaceCo, bottomWorkSpaceCo;
	if (workSpaceRectCo.tl.y > 0) {
		topWorkSpaceCo = {
			tl: { x: minX, y: 0 },
			tr: { x: maxX, y: 0 },
			br: { x: maxX, y: workSpaceRectCo.tr.y },
			bl: { x: minX, y: workSpaceRectCo.tl.y },
		};
	}

	const bottomMax = getBottomMax(context, minX, maxX);

	if (bottomMax > workSpaceRectCo.bl.y) {
		bottomWorkSpaceCo = {
			tl: { x: minX, y: workSpaceRectCo.bl.y },
			tr: { x: maxX, y: workSpaceRectCo.bl.y },
			br: { x: maxX, y: bottomMax },
			bl: { x: minX, y: bottomMax },
		};
	}

	return { topWorkSpaceCo, bottomWorkSpaceCo };
};

export const getItemsInWorkSpace = (
	context,
	workSpaceRect,
	getIndices = false
) => {
	const mpd = getModifiedPositionData(context);
	const privateConstants = getPrivateConstants(context);

	const len = mpd.length;
	const itemsInWorkSpace = new Array(len);
	let count = 0;
	let item;
	for (let i = 0; i < len; i++) {
		item = getItemDimenWithMargin(privateConstants.MARGIN, mpd[i]);
		if (
			doRectsOverlap(workSpaceRect, item) &&
			!doRectsOnlyTouch(workSpaceRect, item)
		) {
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
	const privateConstants = getPrivateConstants(context);

	if (!workSpaceRect) {
		return [];
	}

	const len = mpd.length;
	const items = new Array(len);
	let count = 0;
	let item;

	for (let i = 0; i < len; i++) {
		item = getItemDimenWithMargin(privateConstants.MARGIN, mpd[i]);

		if (
			workSpaceRect.bl.y <= item.y ||
			Math.abs(workSpaceRect.bl.y - item.y) < 0.1
		) {
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
	wsCo,
	topWsCo,
	bottomWsCo,
	cWsCo,
	arranged,
	itemsToArrange,
	getIndices = false
) => {
	const mpd = getModifiedPositionData(context);
	const privateConstants = getPrivateConstants(context);

	const wsPlusTopWsCo = {
		tl: { ...(topWsCo?.tl ? topWsCo.tl : wsCo.tl) },
		tr: { ...(topWsCo?.tr ? topWsCo.tr : wsCo.tr) },
		br: { ...wsCo.br },
		bl: { ...wsCo.bl },
	};
	const wsPlusTopWs = getRectObjectFromCo(wsPlusTopWsCo);
	const bottomWs = getRectObjectFromCo(bottomWsCo);
	const cWs = getRectObjectFromCo(cWsCo);

	const filteredItemsToArrange = itemsToArrange.filter((o) => !arranged[o]);

	const len = mpd.length;
	const updatedItemsToArrange = new Array(len);
	let uCount = 0;
	const itemsInWorkSpace = new Array(len);
	let iCount = 0;

	for (let i = 0; i < len; i++) {
		const _item = getItemDimenWithMargin(privateConstants.MARGIN, mpd[i]);
		if (doRectsOverlap(cWs, _item)) {
			if (arranged[i]) {
				if (!getIndices) {
					itemsInWorkSpace[iCount++] = mpd[i];
				} else {
					itemsInWorkSpace[iCount++] = i;
				}
			} else if (doRectsOverlap(wsPlusTopWs, _item)) {
				if (!getIndices) {
					itemsInWorkSpace[iCount++] = mpd[i];
				} else {
					itemsInWorkSpace[iCount++] = i;
				}
			} else if (
				doRectsOverlap(bottomWs, _item) &&
				!isRectInside(bottomWs, _item)
			) {
				if (!getIndices) {
					itemsInWorkSpace[iCount++] = mpd[i];
				} else {
					itemsInWorkSpace[iCount++] = i;
				}
			} else if (
				doRectsOverlap(bottomWs, _item) &&
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

export const getItemDimenWithMargin = (MARGIN, item) => {
	const _item = { ...item };
	_item.x -= MARGIN;
	_item.y -= MARGIN;
	_item.width += MARGIN * 2;
	_item.height += MARGIN * 2;

	return _item;
};

export const rectSortX = (a, b) => {
	if (a.d.rect.x === b.d.rect.x) {
		return a.d.rect.y - b.d.rect.y;
	} else {
		return a.d.rect.x - b.d.rect.x;
	}
};

export const rectSortY = (a, b) => {
	if (a.d.rect.y === b.d.rect.y) {
		return a.d.rect.x - b.d.rect.x;
	} else {
		return a.d.rect.y - b.d.rect.y;
	}
};

export const sweepTopBottomHelper = function (rect) {
	return (node, interval, d) => {
		if (
			areRectsOnSameYAxisExPath(
				getCoordinates(rect),
				getCoordinates(node.d.rect)
			) &&
			!areRectsIdentical(getCoordinates(rect), getCoordinates(node.d.rect))
		) {
			return true;
		}
	};
};

export const doOverlapHelper = function (rect) {
	return (rectData) => {
		if (doRectsOverlapRTree(rectData.rect, rect)) {
			return true;
		}
	};
};

export const identicalOrInsideHelper = function (rect) {
	return (node, interval, d) => {
		if (
			areRectsIdentical(getCoordinates(rect), getCoordinates(node.d.rect)) ||
			isRectInside(node.d.rect, rect)
		) {
			return true;
		}
	};
};

export const shouldFilterRect = function (rectData, rect) {
	if (
		isRectInside(getRectObjectFromRTreeRect(rectData.rect), rect) &&
		rectData.rect !== rect
	) {
		return true;
	}
};

export const getScore = (rect, maxHWSum) => {
	return (rect.width + rect.height) / maxHWSum;
};

export const getItemsToArrangeScore = (context, affectedItems) => {
	const mpd = getModifiedPositionData(context);

	const len = affectedItems.length;
	let item;
	let maxHeight = 0;
	let maxWidth = 0;
	let maxHWSum = 0;

	let score;

	for (let i = 0; i < len; i++) {
		item = mpd[affectedItems[i]];

		if (item.width > maxWidth) {
			maxWidth = item.width;
		}

		if (item.height > maxHeight) {
			maxHeight = item.height;
		}
	}

	maxHWSum = maxWidth + maxHeight;

	const scoreArr = new Array(len);
	for (let i = 0; i < len; i++) {
		item = mpd[affectedItems[i]];

		score = getScore(item, maxHWSum);
		scoreArr[i] = { score, d: affectedItems[i] };
	}

	scoreArr.sort((a, b) => a.score - b.score);

	return scoreArr;
};

export const getPerfectMatch = (arr, hwSum, item) => {
	if (item === undefined) {
		// add item
		return arr[0];
	}
	const len = arr.length;
	let min = Number.MAX_SAFE_INTEGER;
	let d;
	const p1 = { x: item.x, y: item.y };
	const p2 = { x: 0, y: 0 };
	let pm;
	for (let i = 0; i < len; i++) {
		p2.x = arr[i].rect.x1;
		p2.y = arr[i].rect.y1;
		d = getDistanceBetnPts(p1, p2);
		if (d < min) {
			pm = arr[i];
			min = d;
		}
	}
	return pm || arr[0];
};

export const shiftItemsDown = (context, items, height) => {
	const mpd = getModifiedPositionData(context);

	const len = items.length;

	for (let i = 0; i < len; i++) {
		mpd[items[i]].y += height;
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
		x: x - privateConstants.MARGIN,
		y: y - privateConstants.MARGIN,
		width: width + privateConstants.MARGIN * 2,
		height: height + privateConstants.MARGIN * 2,
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
		isInside =
			doRectsOverlap(
				getItemDimenWithMargin(privateConstants.MARGIN, pd[i]),
				tempPlane
			) ||
			doRectsOnlyTouch(
				getItemDimenWithMargin(privateConstants.MARGIN, pd[i]),
				tempPlane
			);

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
		x: 0,
		y: y,
		width: privateConstants.WIDTH,
		height: height,
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
		if (
			isRectInside(
				tempPlane,
				getItemDimenWithMargin(privateConstants.MARGIN, pd[i])
			)
		) {
			return false;
		}

		isOverlapping =
			doRectsOverlap(
				tempPlane,
				getItemDimenWithMargin(privateConstants.MARGIN, pd[i])
			) ||
			doRectsOnlyTouch(
				tempPlane,
				getItemDimenWithMargin(privateConstants.MARGIN, pd[i])
			);

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
				(isPointInsideRect(tempPlane, topPoint) ||
					doesPointTouchRect(tempPlane, topPoint))
			) {
				minY = pd[i].y - privateConstants.MARGIN;
			}

			if (
				pd[i].y + pd[i].height + privateConstants.MARGIN > maxY &&
				(isPointInsideRect(tempPlane, bottomPoint) ||
					doesPointTouchRect(tempPlane, bottomPoint))
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
