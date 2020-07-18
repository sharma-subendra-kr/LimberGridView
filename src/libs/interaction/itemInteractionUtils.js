/*

This is a release of LimberGridView 0.0.0, brought to you by Subendra Kumar Sharma.
This software is released under the GNU General Public License version 3, or (at your option) any later version.

LimberGridView, a powerful JavaScript Libary that gives you flexible, movable, resizable(any size) and auto-arranging grids. 

Copyright © 2018-2020, Subendra Kumar Sharma. All Rights reserved. (sharma.subendra.kr@gmail.com, sharma.subendrakr@yahoo.com)

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

*/

import {
	doRectsOverlap,
	doRectsOnlyTouch,
	isPointInsideRect,
	doesPointTouchRect,
} from "../rect/rectUtils";
import getPublicConstants, {
	getPublicConstantByName,
} from "../../store/constants/publicConstants";
import getPrivateConstants from "../../store/constants/privateConstants";
import {
	getPositionData,
	getModifiedPositionData,
	setModifiedPositionData,
} from "../../store/variables/essentials";
import getElements from "../../store/variables/elements";

export const getResizeAffectedItems = (context, item, index) => {
	const pd = getPositionData(context);
	const mpd = getModifiedPositionData(context);
	const publicConstants = getPublicConstants(context);
	const privateConstants = getPrivateConstants(context);

	const len = pd.length;
	const affectedArr = new Array(len);
	let count = 0;

	const _item = { ...item };
	_item.x -= publicConstants.MARGIN;
	_item.y -= publicConstants.MARGIN;
	_item.width += publicConstants.MARGIN;
	_item.height += publicConstants.MARGIN;
	let temp = { x: 0, y: 0, height: 0, width: 0 };

	for (let i = 0; i < len; i++) {
		temp.x = pd[i].x - publicConstants.MARGIN;
		temp.y = pd[i].y - publicConstants.MARGIN;
		temp.width = pd[i].width + publicConstants.MARGIN;
		temp.height = pd[i].height + publicConstants.MARGIN;
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
	const publicConstants = getPublicConstants(context);
	const privateConstants = getPrivateConstants(context);

	const len = pd.length;
	const affectedArr = new Array(len);
	let count = 0;

	const _item = { ...item };
	_item.x -= publicConstants.MARGIN;
	_item.y -= publicConstants.MARGIN;
	_item.width += publicConstants.MARGIN;
	_item.height += publicConstants.MARGIN;
	let temp = { x: 0, y: 0, height: 0, width: 0 };

	for (let i = 0; i < len; i++) {
		temp.x = pd[i].x - publicConstants.MARGIN;
		temp.y = pd[i].y - publicConstants.MARGIN;
		temp.width = pd[i].width + publicConstants.MARGIN;
		temp.height = pd[i].height + publicConstants.MARGIN;
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
	const publicConstants = getPublicConstants(context);
	const privateConstants = getPrivateConstants(context);

	if (index < 0 || index >= pd.length) {
		// invalid index
		throw "Index out of bounds.";
	}

	if (typeof width !== "number" || typeof height !== "number") {
		throw "Width or Height is not a number.";
	}

	if (pd[index].x + width + publicConstants.MARGIN > privateConstants.WIDTH) {
		// falls outside
		throw "Right edges falls outside the grid area.";
	}

	if (
		width < getPublicConstantByName("DEFINED_MIN_HEIGHT_AND_WIDTH") ||
		height < getPublicConstantByName("DEFINED_MIN_HEIGHT_AND_WIDTH")
	) {
		// very small. TO DO: let the developers decide the smallest item size but can't be less than 150
		throw `Width or height less than min height or width ${getPublicConstantByName(
			"DEFINED_MIN_HEIGHT_AND_WIDTH"
		)}.`;
	}

	return true;
};

export const moveItemInitialChecks = (context, index, toX, toY) => {
	const pd = getPositionData(context);
	const publicConstants = getPublicConstants(context);
	const privateConstants = getPrivateConstants(context);

	if (index < 0 || index >= pd.length) {
		// invalid index
		throw "Index out of bounds.";
	}

	if (typeof toX !== "number" || typeof toY !== "number") {
		throw "toX or toY is not a number.";
	}

	if (toX < publicConstants.MARGIN || toY < publicConstants.MARGIN) {
		// falls outside
		throw "Left edges falls outside the grid area.";
	}

	if (toX + pd[index].width + publicConstants.MARGIN > privateConstants.WIDTH) {
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

export const movePointAdjust = (context, toX, toY) => {
	const pd = getPositionData(context);
	const publicConstants = getPublicConstants(context);
	const privateConstants = getPrivateConstants(context);

	let overlapped;
	let len = pd.length;
	let temp = { x: 0, y: 0, height: 0, width: 0 };
	const pt = { x: toX, y: toY };
	let inside = null;
	for (let i = 0; i < len; i++) {
		temp.x = pd[i].x - publicConstants.MARGIN;
		temp.y = pd[i].y - publicConstants.MARGIN;
		temp.width = pd[i].width + publicConstants.MARGIN;
		temp.height = pd[i].height + publicConstants.MARGIN;
		if (isPointInsideRect(temp, pt) || doesPointTouchRect(temp, pt)) {
			inside = i;
			break;
		}
	}
	if (inside != null) {
		toX = pd[inside].x;
		toY = pd[inside].y;
	}
	return { toX, toY, overlappedItemIndex: inside };
};
