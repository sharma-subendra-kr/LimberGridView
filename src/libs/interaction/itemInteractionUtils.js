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
	doRectsOverlap,
	doRectsOnlyTouch,
	isPointInsideRect,
	doesPointTouchRect,
} from "../rect/rectUtils";
import getPrivateConstants from "../../store/constants/privateConstants";
import {
	getPositionData,
	getModifiedPositionData,
} from "../../store/variables/essentials";
import getElements from "../../store/variables/elements";
import { getDistanceBetnPts } from "../geometry/geometry";

export const getResizeAffectedItems = (context, item, index) => {
	const pd = getPositionData(context);
	const mpd = getModifiedPositionData(context);
	const privateConstants = getPrivateConstants(context);

	const len = pd.length;
	const affectedArr = new Array(len);
	let count = 0;

	const _item = { ...item };
	_item.x -= privateConstants.MARGIN;
	_item.y -= privateConstants.MARGIN;
	_item.width += privateConstants.MARGIN * 2;
	_item.height += privateConstants.MARGIN * 2;
	const temp = { x: 0, y: 0, height: 0, width: 0 };

	for (let i = 0; i < len; i++) {
		temp.x = pd[i].x - privateConstants.MARGIN;
		temp.y = pd[i].y - privateConstants.MARGIN;
		temp.width = pd[i].width + privateConstants.MARGIN * 2;
		temp.height = pd[i].height + privateConstants.MARGIN * 2;
		if (
			(doRectsOverlap(temp, _item) || doRectsOnlyTouch(temp, _item)) &&
			i !== index
		) {
			affectedArr[count++] = i;
			mpd[i].x = undefined;
			mpd[i].y = undefined;
		}
	}

	const result = new Array(count + 1);
	for (let i = 0; i < count; i++) {
		result[i] = affectedArr[i];
	}
	result[count] = index;

	return result;
};

export const getMoveAffectedItems = (context, item, index) => {
	const pd = getPositionData(context);
	const mpd = getModifiedPositionData(context);
	const privateConstants = getPrivateConstants(context);

	const len = pd.length;
	const affectedArr = new Array(len);
	let count = 0;

	const _item = { ...item };
	_item.x -= privateConstants.MARGIN;
	_item.y -= privateConstants.MARGIN;
	_item.width += privateConstants.MARGIN * 2;
	_item.height += privateConstants.MARGIN * 2;
	const temp = { x: 0, y: 0, height: 0, width: 0 };

	for (let i = 0; i < len; i++) {
		temp.x = pd[i].x - privateConstants.MARGIN;
		temp.y = pd[i].y - privateConstants.MARGIN;
		temp.width = pd[i].width + privateConstants.MARGIN * 2;
		temp.height = pd[i].height + privateConstants.MARGIN * 2;
		if (doRectsOverlap(temp, _item) || doRectsOnlyTouch(temp, _item)) {
			if (i !== index) {
				affectedArr[count++] = i;
				mpd[i].x = undefined;
				mpd[i].y = undefined;
			}
		}
	}

	const result = new Array(count + 1);
	for (let i = 0; i < count; i++) {
		result[i] = affectedArr[i];
	}
	result[count] = index;

	return result;
};

export const resizeItemInitialChecks = (context, index, width, height) => {
	const pd = getPositionData(context);
	const privateConstants = getPrivateConstants(context);

	if (index < 0 || index >= pd.length) {
		// invalid index
		throw "Index out of bounds.";
	}

	if (typeof width !== "number" || typeof height !== "number") {
		throw "Width or Height is not a number.";
	}

	if (pd[index].x + width + privateConstants.MARGIN > privateConstants.WIDTH) {
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

export const resetDemoUIChanges = (context) => {
	const pd = getPositionData(context);
	const e = getElements(context);

	const len = pd.length;
	for (var i = 0; i < len; i++) {
		e.$limberGridViewItems[i].style.transform =
			"translate(" + pd[i].x + "px, " + pd[i].y + "px)";
		e.$limberGridViewItems[i].classList.remove("limberGridViewItemDemo");
	}
};

export const movePointAdjust = (context, toX, toY, index) => {
	const pd = getPositionData(context);
	const privateConstants = getPrivateConstants(context);

	const len = pd.length;
	const temp = { x: 0, y: 0, height: 0, width: 0 };
	let pt = { x: toX, y: toY };
	let inside;
	let tl, tr, tld, trd;
	let ldistance = Number.MAX_SAFE_INTEGER;
	let rdistance = Number.MAX_SAFE_INTEGER;
	let toXAdj, toYAdj;
	let isToAdjPresent = false;
	for (let i = 0; i < len; i++) {
		temp.x = pd[i].x - privateConstants.MARGIN;
		temp.y = pd[i].y - privateConstants.MARGIN;
		temp.width = pd[i].width + privateConstants.MARGIN * 2;
		temp.height = pd[i].height + privateConstants.MARGIN * 2;

		if (isPointInsideRect(temp, pt) || doesPointTouchRect(temp, pt)) {
			inside = i;
			toX = pd[inside].x;
			toY = pd[inside].y;
			// break;
		}

		if (i === index) {
			continue;
		}

		tl = { x: temp.x, y: temp.y };
		tr = { x: temp.x + temp.width, y: temp.y };

		tld = getDistanceBetnPts(tl, pt);
		trd = getDistanceBetnPts(tr, pt);

		if (tld < ldistance && pt.x < tl.x && tld <= privateConstants.WIDTH / 4) {
			if (
				tl.x - privateConstants.MARGIN - pd[index].width >=
				privateConstants.MARGIN
			) {
				toXAdj = tl.x - privateConstants.MARGIN - pd[index].width;
				toYAdj = tl.y + privateConstants.MARGIN;

				ldistance = tld;
				isToAdjPresent = true;
			}
		}

		if (trd < rdistance && pt.x > tr.x && trd <= privateConstants.WIDTH / 4) {
			if (
				tr.x + privateConstants.MARGIN + pd[index].width <
				privateConstants.WIDTH
			) {
				toXAdj = tr.x + privateConstants.MARGIN + pd[index].width;
				toYAdj = tr.y + privateConstants.MARGIN;

				rdistance = trd;
				isToAdjPresent = true;
			}
		}
	}

	return {
		to: { toX, toY },
		toAdj: { toX: toXAdj, toY: toYAdj },
		overlappedItemIndex: inside,
		isToAdjPresent,
	};
};
