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

import { doRectsOverlap, doRectsOnlyTouch } from "../calc/rectUtils";
import publicConstants from "../../constants/publicConstants";

export const getResizeAffectedItems = (positionData, item, index) => {
	const len = positionData.length;
	const affectedArr = new Array(len);
	let count = 0;

	const _item = { ...item };
	_item.x -= publicConstants.MARGIN;
	_item.y -= publicConstants.MARGIN;
	_item.width += publicConstants.MARGIN;
	_item.height += publicConstants.MARGIN;
	let temp;

	for (let i = 0; i < len; i++) {
		temp = { ...positionData[i] };
		temp.x -= publicConstants.MARGIN;
		temp.y -= publicConstants.MARGIN;
		temp.width += publicConstants.MARGIN;
		temp.height += publicConstants.MARGIN;
		if (
			doRectsOverlap(temp, _item) &&
			doRectsOnlyTouch(temp, _item) &&
			i !== index
		) {
			affectedArr[count++] = positionData[i];
		}
	}

	const result = new Array(count);
	for (let i = 0; i < count; i++) {
		result[i] = affectedArr[i];
	}

	return result;
};

export const getMoveAffectedItems = (positionData, item, index) => {
	const len = positionData.length;
	const affectedArr = new Array(len);
	let count = 0;
	let includesIndex = false;

	const _item = { ...item };
	_item.x -= publicConstants.MARGIN;
	_item.y -= publicConstants.MARGIN;
	_item.width += publicConstants.MARGIN;
	_item.height += publicConstants.MARGIN;
	let temp;

	for (let i = 0; i < len; i++) {
		temp = { ...positionData[i] };
		temp.x -= publicConstants.MARGIN;
		temp.y -= publicConstants.MARGIN;
		temp.width += publicConstants.MARGIN;
		temp.height += publicConstants.MARGIN;
		if (doRectsOverlap(temp, _item) && doRectsOnlyTouch(temp, _item)) {
			affectedArr[count++] = positionData[i];

			if (i === index) {
				includesIndex = true;
			}
		}
	}

	const result = new Array(includesIndex ? count : count + 1);
	for (let i = 0; i < count; i++) {
		result[i] = affectedArr[i];
	}

	if (!includesIndex) {
		result[count] = positionData[index];
	}

	return result;
};

export const resizeItemInitialChecks = (index, width, height) => {
	if (
		positionData[index].x + width + publicConstants.MARGIN >
		privateConstants.WIDTH
	) {
		// falls outside
		return false;
	}

	if (typeof width != "number" || typeof height != "number") {
		return false;
	}

	if (width < 50 || height < 50) {
		// very small. TO DO: let the developers decide the smallest item size but can tbe less than 50
		return false;
	}

	return true;
};

export const moveItemInitialChecks = (index, toX, toY) => {
	if (index < 0 || index >= positionData.length) {
		// invalid index
		return false;
	}

	if (toX < publicConstants.MARGIN || toY < publicConstants.MARGIN) {
		// falls outside
		return false;
	}

	if (
		toX + positionData[index].width + publicConstants.MARGIN >
		privateConstants.WIDTH
	) {
		// falls outside
		return false;
	}

	return true;
};
