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

import getPrivateConstants from "../../store/constants/privateConstants";
import getPublicConstants from "../../store/constants/publicConstants";
import getElements from "../../store/variables/elements";

export const adjustHeight = function (context, yMouseOrTouchPosition) {
	const e = getElements(context);
	const publicConstants = getPublicConstants(context);

	const scrollHeight = e.$limberGridView.scrollHeight;
	if (
		scrollHeight - yMouseOrTouchPosition <=
		publicConstants.AUTO_SCROLL_POINT
	) {
		e.$limberGridViewHeightAdjustGuide.style.height =
			yMouseOrTouchPosition +
			publicConstants.MOVE_OR_RESIZE_HEIGHT_INCREMENTS +
			"px";
	}
};

export const adjustScroll = function (
	context,
	limberGridViewOnVisibleAreaY,
	limberGridViewHeightVisibleHeight
) {
	const e = getElements(context);
	const publicConstants = getPublicConstants(context);
	const privateConstants = getPrivateConstants(context);

	const scrollTop = e.$limberGridView.scrollTop;
	// var scrollLeft = this.$limberGridView[0].scrollLeft;
	let programScrolled = false;
	if (limberGridViewOnVisibleAreaY > 0) {
		if (
			limberGridViewHeightVisibleHeight - limberGridViewOnVisibleAreaY <
			publicConstants.AUTO_SCROLL_POINT
		) {
			e.$limberGridView.scrollTop =
				scrollTop + publicConstants.AUTO_SCROLL_DISTANCE;
			programScrolled = true;
		}
		if (
			limberGridViewOnVisibleAreaY < privateConstants.HEIGHT / 10 &&
			scrollTop !== 0
		) {
			e.$limberGridView.scrollTop =
				scrollTop - publicConstants.AUTO_SCROLL_DISTANCE;
			programScrolled = true;
		}
	}

	// if(limberGridViewOnVisibleAreaX > 0){
	// 	if((limberGridViewWidthVisibleWidth - limberGridViewOnVisibleAreaX) < (this.WIDTH/10)){
	// 		this.$limberGridView[0].scrollLeft = scrollLeft + 100;
	// 		var programScrolled = true;
	// 	}
	// 	if((limberGridViewOnVisibleAreaX) < (this.WIDTH/10) && scrollLeft != 0){
	// 		this.$limberGridView[0].scrollLeft = scrollLeft - 100;
	// 		var programScrolled = true;
	// 	}
	// }
	return programScrolled;
};
