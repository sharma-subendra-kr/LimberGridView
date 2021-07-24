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

import getPrivateConstants from "../../store/constants/privateConstants";
import {
	getPositionData,
	getModifiedPositionData,
} from "../../store/variables/essentials";
import getElements from "../../store/variables/elements";
import { getDistanceBetnPts } from "../geometry/geometry";
import {
	doRectsOverlapWithMargin,
	isPointInsideOrTouchRectWithMargin,
} from "../utils/items";

export const getResizeAffectedItems = (context, item, index) => {
	const pd = getPositionData(context);
	const mpd = getModifiedPositionData(context);

	const len = pd.length;
	const affectedArr = new Array(len);
	let count = 0;

	for (let i = 0; i < len; i++) {
		if (doRectsOverlapWithMargin(item, pd[i]) && i !== index) {
			affectedArr[count++] = i;
			mpd[i].x1 = undefined;
			mpd[i].y1 = undefined;
			mpd[i].x2 = undefined;
			mpd[i].y2 = undefined;
			mpd[i].mX1 = undefined;
			mpd[i].mY1 = undefined;
			mpd[i].mX2 = undefined;
			mpd[i].mY2 = undefined;
			mpd[i].x = undefined;
			mpd[i].y = undefined;
			mpd[i].mX = undefined;
			mpd[i].mY = undefined;
		}
	}

	affectedArr[count++] = index;
	affectedArr.length = count;

	return affectedArr;
};

export const getMoveAffectedItems = (context, item, index) => {
	const pd = getPositionData(context);
	const mpd = getModifiedPositionData(context);

	const len = pd.length;
	const affectedArr = new Array(len);
	let count = 0;

	for (let i = 0; i < len; i++) {
		if (doRectsOverlapWithMargin(item, pd[i]) && i !== index) {
			affectedArr[count++] = i;
			mpd[i].x1 = undefined;
			mpd[i].y1 = undefined;
			mpd[i].x2 = undefined;
			mpd[i].y2 = undefined;
			mpd[i].mX1 = undefined;
			mpd[i].mY1 = undefined;
			mpd[i].mX2 = undefined;
			mpd[i].mY2 = undefined;
			mpd[i].x = undefined;
			mpd[i].y = undefined;
			mpd[i].mX = undefined;
			mpd[i].mY = undefined;
		}
	}

	affectedArr[count++] = index;
	affectedArr.length = count;

	return affectedArr;
};

export const resizeItemInitialChecks = (
	context,
	index,
	x,
	y,
	width,
	height
) => {
	const pd = getPositionData(context);
	const privateConstants = getPrivateConstants(context);

	if (index < 0 || index >= pd.length) {
		// invalid index
		throw "Index out of bounds.";
	}

	if (typeof x !== "number" || typeof y !== "number") {
		throw "x or y is not a number.";
	}

	if (x < privateConstants.MARGIN || y < privateConstants.MARGIN) {
		// falls outside
		throw "Left edges falls outside the grid area.";
	}

	if (typeof width !== "number" || typeof height !== "number") {
		throw "Width or Height is not a number.";
	}

	if (x + width + privateConstants.MARGIN > privateConstants.WIDTH) {
		// falls outside
		throw "Right edges falls outside the grid area.";
	}

	if (
		width < privateConstants.DEFINED_MIN_HEIGHT_AND_WIDTH ||
		height < privateConstants.DEFINED_MIN_HEIGHT_AND_WIDTH
	) {
		// very small. TO DO: let the developers decide the smallest item size but can't be less than 150
		throw `Width or height less than min height or width ${privateConstants.DEFINED_MIN_HEIGHT_AND_WIDTH}.`;
	}

	if (height + privateConstants.MARGIN * 2 > privateConstants.HEIGHT) {
		throw "Height cannot be greater than height of container.";
	}

	return true;
};

export const moveItemInitialChecks = (context, index, toX, toY) => {
	const pd = getPositionData(context);
	const privateConstants = getPrivateConstants(context);

	if (index < 0 || index >= pd.length) {
		// invalid index
		throw "Index out of bounds.";
	}

	if (typeof toX !== "number" || typeof toY !== "number") {
		throw "toX or toY is not a number.";
	}

	if (toX < privateConstants.MARGIN || toY < privateConstants.MARGIN) {
		// falls outside
		throw "Left edges falls outside the grid area.";
	}

	if (
		toX + pd[index].width + privateConstants.MARGIN >
		privateConstants.WIDTH
	) {
		// falls outside
		throw "Right edges falls outside the grid area.";
	}

	return true;
};

export const getResizeModifiedItem = (toX, toY, width, height, MARGIN) => {
	return {
		x: toX,
		y: toY,
		width: width,
		height: height,
		mX: toX - MARGIN,
		mY: toY - MARGIN,
		mWidth: width + MARGIN * 2,
		mHeight: height + MARGIN * 2,
		x1: toX,
		y1: toY,
		x2: toX + width,
		y2: toY + height,
		mX1: toX - MARGIN,
		mY1: toY - MARGIN,
		mX2: toX + width + MARGIN,
		mY2: toY + height + MARGIN,
	};
};

export const getMoveModifiedItem = (toX, toY, item, MARGIN) => {
	return {
		x: toX,
		y: toY,
		width: item.width,
		height: item.height,
		mX: toX - MARGIN,
		mY: toY - MARGIN,
		mWidth: item.width + MARGIN * 2,
		mHeight: item.height + MARGIN * 2,
		x1: toX,
		y1: toY,
		x2: toX + item.width,
		y2: toY + item.height,
		mX1: toX - MARGIN,
		mY1: toY - MARGIN,
		mX2: toX + item.width + MARGIN,
		mY2: toY + item.height + MARGIN,
	};
};

export const resetDemoUIChanges = (context) => {
	const pd = getPositionData(context);
	const e = getElements(context);

	const len = pd.length;
	for (let i = 0; i < len; i++) {
		if (e.$limberGridViewItems[i]) {
			e.$limberGridViewItems[
				i
			].style.transform = `translate(${pd[i].x1}px, ${pd[i].y1}px)`;
			e.$limberGridViewItems[i].style.width = `${pd[i].width}px`;
			e.$limberGridViewItems[i].style.height = `${pd[i].height}px`;
		}
	}
};

export const movePointAdjust = (context, toX, toY, index) => {
	const pd = getPositionData(context);
	const privateConstants = getPrivateConstants(context);

	// const THRESHOLD = privateConstants.WIDTH / 4;
	const THRESHOLD = privateConstants.DEFINED_MIN_HEIGHT_AND_WIDTH * 1.5;

	const len = pd.length;
	const pt = { x: toX, y: toY };
	let inside;
	let tl, tr, bl, tld, trd, bld;
	let ldistance = Number.MAX_SAFE_INTEGER;
	let rdistance = Number.MAX_SAFE_INTEGER;
	let bdistance = Number.MAX_SAFE_INTEGER;
	let toXAdj, toYAdj;
	let isToAdjPresent = false;
	let toAdjIndex;
	let toAdjDirection;

	for (let i = 0; i < len; i++) {
		if (isPointInsideOrTouchRectWithMargin(pd[i], pt)) {
			inside = i;
			toX = pd[inside].x;
			toY = pd[inside].y;
			// break;
		}

		if (i === index) {
			continue;
		}

		tl = { x: pd[i].mX1, y: pd[i].mY1 };
		tr = { x: pd[i].mX2, y: pd[i].mY1 };
		bl = { x: pd[i].mX1, y: pd[i].mY2 };

		tld = getDistanceBetnPts(tl, pt);
		trd = getDistanceBetnPts(tr, pt);
		bld = getDistanceBetnPts(bl, pt);

		if (
			tld < ldistance &&
			tld < rdistance &&
			tld < bdistance &&
			pt.x < tl.x &&
			tld <= THRESHOLD
		) {
			if (
				tl.x - privateConstants.MARGIN - pd[index].width >=
				privateConstants.MARGIN
			) {
				toXAdj = tl.x - privateConstants.MARGIN - pd[index].width;
				toYAdj = tl.y + privateConstants.MARGIN;

				ldistance = tld;
				isToAdjPresent = true;
				toAdjIndex = i;
				toAdjDirection = "left";
			}
		}

		if (
			trd < rdistance &&
			trd < ldistance &&
			trd < bdistance &&
			pt.x > tr.x &&
			trd <= THRESHOLD
		) {
			if (
				tr.x + privateConstants.MARGIN + pd[index].width <
				privateConstants.WIDTH
			) {
				toXAdj = tr.x + privateConstants.MARGIN;
				toYAdj = tr.y + privateConstants.MARGIN;

				rdistance = trd;
				isToAdjPresent = true;
				toAdjIndex = i;
				toAdjDirection = "right";
			}
		}

		if (
			bld < bdistance &&
			bld < ldistance &&
			bld < rdistance &&
			pt.y >= bl.y &&
			pt.x >= bl.x &&
			bld <= THRESHOLD
		) {
			if (
				tl.x + privateConstants.MARGIN + pd[index].width <
				privateConstants.WIDTH
			) {
				toXAdj = tl.x + privateConstants.MARGIN;
				toYAdj = bl.y + privateConstants.MARGIN;

				bdistance = bld;
				isToAdjPresent = true;
				toAdjIndex = i;
				toAdjDirection = "bottom";
			}
		}
	}

	return {
		to: { toX, toY },
		toAdj: { toX: toXAdj, toY: toYAdj },
		overlappedItemIndex: inside,
		isToAdjPresent,
		toAdjIndex,
		toAdjDirection,
	};
};

export const resizeSizeAdjust = (
	context,
	x,
	y,
	width,
	height,
	index,
	forBottomRight
) => {
	const pd = getPositionData(context);
	const privateConstants = getPrivateConstants(context);

	// const DISTANCE_THRESHOLD = privateConstants.WIDTH / 4;
	const DISTANCE_THRESHOLD = privateConstants.DEFINED_MIN_HEIGHT_AND_WIDTH / 2;
	const AXIS_DISTANCE_THRESHOLD =
		privateConstants.DEFINED_MIN_HEIGHT_AND_WIDTH / 10;

	const len = pd.length;
	const tlpt = { x: x, y: y };
	const trpt = { x: x + width, y: y };
	const brpt = { x: x + width, y: y + height };
	const blpt = { x: x, y: y + height };

	let tl,
		bl,
		br,
		tr,
		blptTobr,
		brptTobl,
		trptTobr,
		brptTotr,
		blptTotl,
		tlptTobl;
	let ldistance = Number.MAX_SAFE_INTEGER;
	let rdistance = Number.MAX_SAFE_INTEGER;
	let tdistance = Number.MAX_SAFE_INTEGER;
	let bdistance = Number.MAX_SAFE_INTEGER;
	let isToAdjPresent = false;
	let toAdjIndex;
	let hToAdjDirection;
	let wToAdjDirection;
	let hLatchPoint;
	let wLatchPoint;
	let latchPoint;

	for (let i = 0; i < len; i++) {
		if (i === index) {
			continue;
		}

		tl = { x: pd[i].x1, y: pd[i].y1 };
		bl = { x: pd[i].x1, y: pd[i].y2 };
		br = { x: pd[i].x2, y: pd[i].y2 };
		tr = { x: pd[i].x2, y: pd[i].y1 };

		brptTobl = getDistanceBetnPts(bl, brpt);
		blptTobr = getDistanceBetnPts(br, blpt);

		trptTobr = getDistanceBetnPts(br, trpt);
		brptTotr = getDistanceBetnPts(tr, brpt);

		blptTotl = getDistanceBetnPts(tl, blpt);
		tlptTobl = getDistanceBetnPts(bl, tlpt);

		// affected bottom to adjacent bottom
		if (
			brptTobl < rdistance &&
			brptTobl < ldistance &&
			brpt.x < bl.x &&
			Math.abs(brpt.y - bl.y) <= AXIS_DISTANCE_THRESHOLD &&
			brpt.x + privateConstants.MARGIN <= privateConstants.WIDTH
		) {
			height = bl.y - trpt.y;

			if (forBottomRight && bl.x - brpt.x <= AXIS_DISTANCE_THRESHOLD) {
				width = bl.x - privateConstants.MARGIN * 2 - blpt.x;
			}

			rdistance = brptTobl;
			isToAdjPresent = true;
			toAdjIndex = i;
			hToAdjDirection = "right";
			hLatchPoint = bl;
		}

		if (
			blptTobr < ldistance &&
			blptTobr < rdistance &&
			blpt.x > br.x &&
			Math.abs(blpt.y - br.y) <= AXIS_DISTANCE_THRESHOLD &&
			brpt.x + privateConstants.MARGIN <= privateConstants.WIDTH
		) {
			height = br.y - tlpt.y;

			if (!forBottomRight && blpt.x - br.x <= AXIS_DISTANCE_THRESHOLD) {
				x = br.x + privateConstants.MARGIN * 2;
				width = brpt.x - x;
			}

			ldistance = blptTobr;
			isToAdjPresent = true;
			toAdjIndex = i;
			hToAdjDirection = "left";
			hLatchPoint = br;
		}

		// affected top to adjacent bottom
		if (
			trptTobr < tdistance &&
			trptTobr < bdistance &&
			trptTobr <= DISTANCE_THRESHOLD &&
			Math.abs(trpt.x - br.x) <= AXIS_DISTANCE_THRESHOLD &&
			forBottomRight
		) {
			width = br.x - tlpt.x;

			tdistance = trptTobr;
			isToAdjPresent = true;
			toAdjIndex = i;
			wToAdjDirection = "top";
			wLatchPoint = br;
		}

		if (
			tlptTobl < tdistance &&
			tlptTobl < bdistance &&
			tlptTobl <= DISTANCE_THRESHOLD &&
			Math.abs(tlpt.x - bl.x) <= AXIS_DISTANCE_THRESHOLD &&
			!forBottomRight
		) {
			width = trpt.x - bl.x;
			x = bl.x;

			tdistance = tlptTobl;
			isToAdjPresent = true;
			toAdjIndex = i;
			wToAdjDirection = "top";
			wLatchPoint = bl;
		}

		// affected bottom to adjacent top
		if (
			brptTotr < bdistance &&
			brptTotr < tdistance &&
			brptTotr <= DISTANCE_THRESHOLD &&
			Math.abs(brpt.x - tr.x) <= AXIS_DISTANCE_THRESHOLD &&
			forBottomRight
		) {
			width = tr.x - blpt.x;

			if (
				forBottomRight &&
				tr.y > brpt.y &&
				tr.y - brpt.y <= AXIS_DISTANCE_THRESHOLD
			) {
				height = tr.y - privateConstants.MARGIN * 2 - trpt.y;
			}

			bdistance = brptTotr;
			isToAdjPresent = true;
			toAdjIndex = i;
			wToAdjDirection = "bottom";
			wLatchPoint = tr;
		}

		if (
			blptTotl < bdistance &&
			blptTotl < tdistance &&
			blptTotl <= DISTANCE_THRESHOLD &&
			Math.abs(blpt.x - tl.x) <= AXIS_DISTANCE_THRESHOLD &&
			!forBottomRight
		) {
			width = brpt.x - tl.x;
			x = tl.x;

			if (
				!forBottomRight &&
				tl.y > blpt.y &&
				tl.y - blpt.y <= AXIS_DISTANCE_THRESHOLD
			) {
				height = tl.y - privateConstants.MARGIN * 2 - tlpt.y;
			}

			bdistance = blptTotl;
			isToAdjPresent = true;
			toAdjIndex = i;
			wToAdjDirection = "bottom";
			wLatchPoint = tl;
		}
	}

	if (hLatchPoint && wLatchPoint) {
		latchPoint = {
			x: wLatchPoint.x,
			y: hLatchPoint.y,
		};
	} else if (hLatchPoint) {
		latchPoint = hLatchPoint;
	} else if (wLatchPoint) {
		latchPoint = wLatchPoint;
	}

	return {
		x: x,
		y: y,
		height,
		width,
		isToAdjPresent,
		toAdjIndex,
		hToAdjDirection,
		wToAdjDirection,
		latchPoint,
	};
};

export const positionArranged = (context, arranged) => {
	const e = getElements(context);

	for (const key in arranged) {
		if (e.$limberGridViewItems[key]) {
			const item = arranged[key];
			e.$limberGridViewItems[
				key
			].style.transform = `translate(${item.x}px, ${item.y}px)`;

			e.$limberGridViewItems[key].style.width = `${item.width}px`;
			e.$limberGridViewItems[key].style.height = `${item.height}px`;
		}
	}
};
