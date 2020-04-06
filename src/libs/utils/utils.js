/*

This is a release of LimberGridView 0.0.0, brought to you by Subendra Kumar Sharma.
This software is released under the GNU General Public License version 3, or (at your option) any later version.

LimberGridView, a powerful JavaScript Libary that gives you flexible, movable, resizable(any size) and auto-arranging grids. 

Copyright (c) 2018, Subendra Kumar Sharma. All Rights reserved. (sharma.subendra.kr@gmail.com, sharma.subendrakr@yahoo.com)

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

import publicConstants from "../../constants/publicConstants";
import privateConstants from "../../constants/privateConstants";

export const adjustHeight = function(yMouseOrTouchPosition) {
	var scrollHeight = this.$limberGridView[0].scrollHeight;
	if (
		scrollHeight - yMouseOrTouchPosition <=
		publicConstants.AUTO_SCROLL_POINT
	) {
		this.$limberGridViewHeightAdjustGuide[0].style.height =
			yMouseOrTouchPosition +
			publicConstants.MOVE_OR_RESIZE_HEIGHT_INCREMENTS +
			"px";
	}
};

export const adjustScroll = function(
	limberGridViewOnVisibleAreaY,
	limberGridViewHeightVisibleHeight
) {
	var scrollTop = this.$limberGridView[0].scrollTop;
	// var scrollLeft = this.$limberGridView[0].scrollLeft;
	var programScrolled = false;
	if (limberGridViewOnVisibleAreaY > 0) {
		if (
			limberGridViewHeightVisibleHeight - limberGridViewOnVisibleAreaY <
			publicConstants.AUTO_SCROLL_POINT
		) {
			this.$limberGridView[0].scrollTop =
				scrollTop + publicConstants.AUTO_SCROLL_DISTANCE;
			programScrolled = true;
		}
		if (
			limberGridViewOnVisibleAreaY < privateConstants.HEIGHT / 10 &&
			scrollTop != 0
		) {
			this.$limberGridView[0].scrollTop =
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

export const emptyObject = function(obj) {
	let keys = Object.keys(obj);
	let length = keys.length;
	for (let i = 0; i < length; i++) {
		delete obj[keys[i]];
	}
};
