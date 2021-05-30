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
import getPublicConstants from "../../store/constants/publicConstants";
import getElements from "../../store/variables/elements";

export const adjustHeight = function (context, yMouseOrTouchPosition) {
	const e = getElements(context);
	const publicConstants = getPublicConstants(context);

	const scrollHeight = e.$limberGridView.scrollHeight;
	if (
		scrollHeight - yMouseOrTouchPosition <
		publicConstants.AUTO_SCROLL_POINT
	) {
		e.$limberGridViewHeightAdjustGuide.style.height = `${
			scrollHeight + publicConstants.MOVE_OR_RESIZE_HEIGHT_INCREMENTS
		}px`;
	}
};

export const adjustScroll = function (context, yMouseOrTouchPositionOffset) {
	const e = getElements(context);
	const publicConstants = getPublicConstants(context);
	const privateConstants = getPrivateConstants(context);

	const scrollTop = e.$limberGridView.scrollTop;
	let programScrolled = false;

	if (
		privateConstants.HEIGHT - yMouseOrTouchPositionOffset <
		publicConstants.AUTO_SCROLL_POINT
	) {
		e.$limberGridView.scrollTop =
			scrollTop + publicConstants.AUTO_SCROLL_DISTANCE;
		programScrolled = true;
	} else if (yMouseOrTouchPositionOffset < publicConstants.AUTO_SCROLL_POINT) {
		e.$limberGridView.scrollTop =
			scrollTop - publicConstants.AUTO_SCROLL_DISTANCE;
		programScrolled = true;
	}
	return programScrolled;
};

export const adjustHeightAndScroll = function (
	context,
	yMouseOrTouchPosition,
	yMouseOrTouchPositionOffset,
	autoScroll
) {
	adjustHeight(context, yMouseOrTouchPosition);
	if (autoScroll) {
		return adjustScroll(context, yMouseOrTouchPositionOffset);
	}
};
