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

import e from "../../variables/elements";
import { positionData as pd } from "../../variables/essentials";
import privateConstants from "../../constants/privateConstants";
import publicConstants from "../../constants/publicConstants";

export const calculateMousePosOnLimberGrid = function (event) {
	const limberGridViewPosition = e.$limberGridView[0].getBoundingClientRect();
	if (
		event.clientX >= limberGridViewPosition.left &&
		event.clientX <=
			limberGridViewPosition.left + limberGridViewPosition.width &&
		event.clientY >= limberGridViewPosition.top &&
		event.clientY <= limberGridViewPosition.top + limberGridViewPosition.height
	) {
		const scrollTop = e.$limberGridView[0].scrollTop;
		const scrollLeft = e.$limberGridView[0].scrollLeft;

		const mouseXOnLimberGridView =
			event.clientX -
			limberGridViewPosition.left -
			privateConstants.PADDING_LEFT +
			scrollLeft;
		const mouseYOnLimberGridView =
			event.clientY -
			limberGridViewPosition.top -
			privateConstants.PADDING_TOP +
			scrollTop;

		if (mouseXOnLimberGridView < 0 || mouseYOnLimberGridView < 0) {
			return false;
		}
		return { x: mouseXOnLimberGridView, y: mouseYOnLimberGridView };
	} else {
		// mouse pointer NOT inside limberGridView
		return false;
	}
};

export const calculateTouchPosOnLimberGrid = function (event) {
	const limberGridViewPosition = e.$limberGridView[0].getBoundingClientRect();
	let touch;

	if (event.type == "touchend") {
		touch = {
			clientX: event.changedTouches[0].clientX,
			clientY: event.changedTouches[0].clientY,
		};
	} else {
		touch = {
			clientX: event.touches[0].clientX,
			clientY: event.touches[0].clientY,
		};
	}
	if (
		touch.clientX >= limberGridViewPosition.left &&
		touch.clientX <=
			limberGridViewPosition.left + limberGridViewPosition.width &&
		touch.clientY >= limberGridViewPosition.top &&
		touch.clientY <= limberGridViewPosition.top + limberGridViewPosition.height
	) {
		const scrollTop = e.$limberGridView[0].scrollTop;
		const scrollLeft = e.$limberGridView[0].scrollLeft;

		const touchXOnLimberGridView =
			touch.clientX -
			limberGridViewPosition.left -
			privateConstants.PADDING_LEFT +
			scrollLeft;
		const touchYOnLimberGridView =
			touch.clientY -
			limberGridViewPosition.top -
			privateConstants.PADDING_TOP +
			scrollTop;

		if (touchXOnLimberGridView < 0 || touchYOnLimberGridView < 0) {
			return false;
		}
		return { x: touchXOnLimberGridView, y: touchYOnLimberGridView };
	} else {
		// touch NOT inside limberGridView
		return false;
	}
};

export const calculateTouchPosOnLimberGridItem = function (event) {
	const limberGridViewItemPosition = e.$limberGridViewItems[
		event.currentTarget.attributes["data-index"].value
	].getBoundingClientRect();

	if (
		event.touches[0].clientX >= limberGridViewItemPosition.left &&
		event.touches[0].clientX <=
			limberGridViewItemPosition.left + limberGridViewItemPosition.width &&
		event.touches[0].clientY >= limberGridViewItemPosition.top &&
		event.touches[0].clientY <=
			limberGridViewItemPosition.top + limberGridViewItemPosition.height
	) {
		const touchXOnLimberGridView =
			event.touches[0].clientX - limberGridViewItemPosition.left;
		const touchYOnLimberGridView =
			event.touches[0].clientY - limberGridViewItemPosition.top;

		return { x: touchXOnLimberGridView, y: touchYOnLimberGridView };
	} else {
		// touch NOT inside limberGridViewItem
		return false;
	}
};
