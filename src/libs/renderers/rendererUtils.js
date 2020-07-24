/*

LimberGridView, a powerful JavaScript Libary that gives you movable, resizable(any size) and auto-arranging grids.

Copyright © 2018-2020, Subendra Kumar Sharma. All Rights reserved. (jobs.sharma.subendra.kr@gmail.com)

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

import { isValidRectCoForm, getCoordinates } from "../rect/rectUtils";
import { getItemDimenWithMargin } from "../arrange/arrangeUtils";
import getPrivateConstants from "../../store/constants/privateConstants";
import { getPositionData } from "../../store/variables/essentials";

export const checkPositionData = (pd) => {
	if (Array.isArray(pd)) {
		const len = pd.length;

		for (let i = 0; i < len; i++) {
			if (
				!pd[i] ||
				isNaN(pd[i].x) ||
				pd[i].x < 0 ||
				isNaN(pd[i].y) ||
				pd[i].y < 0 ||
				isNaN(pd[i].height) ||
				pd[i].height <= 0 ||
				isNaN(pd[i].width) ||
				pd[i].width <= 0
			) {
				return false;
			}
			if (!isValidRectCoForm(getCoordinates(pd[i]))) {
				return false;
			}
		}
		return true;
	}
	return false;
};

export const getPdBottomMax = (context) => {
	const pd = getPositionData(context);
	const privateConstants = getPrivateConstants(context);

	let max = privateConstants.MARGIN;
	let item;
	const len = pd.length;

	for (let i = 0; i < len; i++) {
		item = getItemDimenWithMargin(privateConstants.MARGIN, pd[i]);
		if (item.y + item.height > max) {
			max = item.y + item.height;
		}
	}

	return max;
};
