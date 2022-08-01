/*

LimberGridView, a powerful JavaScript Library using Computational Geometry to render movable, dynamically resizable, and auto-arranging grids.

Copyright © 2018-2022 Subendra Kumar Sharma. All rights reserved. (jobs.sharma.subendra.kr@gmail.com)

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

import { getPublicConstants } from "../../../store/constants/publicConstants";
import {
	getPrivateConstants,
	setPrivateConstants,
	setPrivateConstantByName,
} from "../../../store/constants/privateConstants";
import {
	getPositionData,
	setModifiedPositionData,
	getModifiedPositionData,
} from "../../../store/variables/essentials";

export const checkDecreaseMargin = (context) => {
	const publicConstants = getPublicConstants(context);
	const privateConstants = getPrivateConstants(context);
	let CURRENT_MARGIN_CHANGE_VALUE = publicConstants.MARGIN_CHANGE_VALUE;
	if (privateConstants.MARGIN <= 0) {
		// less than condition for floating point errors
		throw "Margin is already 0!";
	} else if (
		privateConstants.MARGIN > 0 &&
		privateConstants.MARGIN < publicConstants.MARGIN_CHANGE_VALUE
	) {
		CURRENT_MARGIN_CHANGE_VALUE = privateConstants.MARGIN;
	}
	const pd = getPositionData(context);
	setModifiedPositionData(context, pd);
	const mpd = getModifiedPositionData(context);

	let isValid = true;
	const len = mpd.length;
	for (let i = 0; i < len; i++) {
		const item = mpd[i];
		reduceMargin(item, CURRENT_MARGIN_CHANGE_VALUE);
		if (!isMarginDecreaseValid(item)) {
			isValid = false;
			break;
		}
	}

	if (isValid) {
		setPrivateConstantByName(context, "MARGIN", CURRENT_MARGIN_CHANGE_VALUE);
		return true;
	}

	return false;
};

export const checkIncreaseMargin = (context) => {
	const publicConstants = getPublicConstants(context);
	const privateConstants = getPrivateConstants(context);
	const pd = getPositionData(context);
	setModifiedPositionData(context, pd);
	const mpd = getModifiedPositionData(context);
	const len = mpd.length;

	let CURRENT_MARGIN_CHANGE_VALUE = publicConstants.MARGIN_CHANGE_VALUE;
	let minDimension = Number.MAX_SAFE_INTEGER;
	for (let i = 0; i < len; i++) {
		if (mpd[i].width < minDimension) {
			minDimension = mpd[i].width;
		} else if (mpd[i].height < minDimension) {
			minDimension = mpd[i].height;
		}
	}
	if (
		minDimension - publicConstants.DEFINED_MIN_HEIGHT_AND_WIDTH <
		privateConstants.MARGIN * 2
	) {
		CURRENT_MARGIN_CHANGE_VALUE =
			(minDimension - publicConstants.DEFINED_MIN_HEIGHT_AND_WIDTH) / 2;
	} else if (minDimension - publicConstants.DEFINED_MIN_HEIGHT_AND_WIDTH <= 0) {
		throw "One or more items have reached their smallest possible height or width!";
	}

	let isValid = true;
	for (let i = 0; i < len; i++) {
		const item = mpd[i];
		growMargin(item, CURRENT_MARGIN_CHANGE_VALUE);
		if (!isMarginIncreaseValid(item)) {
			isValid = false;
			break;
		}
	}

	if (isValid) {
		setPrivateConstantByName(context, "MARGIN", CURRENT_MARGIN_CHANGE_VALUE);
		return true;
	}

	return false;
};

export const reduceMargin = (item, value) => {
	item.x1 -= value;
	item.y1 -= value;
	item.x2 += value;
	item.y2 += value;
	item.x -= value;
	item.y -= value;
	item.width += value;
	item.height += value;

	item.mX1 -= value;
	item.mY1 -= value;
	item.mX2 += value;
	item.mY2 += value;
	item.mX -= value;
	item.mY -= value;
	item.mWidth += value;
	item.mHeight += value;
};

export const growMargin = (item, value) => {
	item.x1 += value;
	item.y1 += value;
	item.x2 -= value;
	item.y2 -= value;
	item.x += value;
	item.y += value;
	item.width -= value;
	item.height -= value;

	item.mX1 += value;
	item.mY1 += value;
	item.mX2 -= value;
	item.mY2 -= value;
	item.mX += value;
	item.mY += value;
	item.mWidth -= value;
	item.mHeight -= value;
};

export const isMarginDecreaseValid = (item) => {};

export const isMarginIncreaseValid = (item) => {};
