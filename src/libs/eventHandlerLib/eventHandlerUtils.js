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

import getElements from "../../store/variables/elements";
import { getLimberGridViewBoundingClientRect } from "../../store/variables/essentials";
import getPrivateConstants from "../../store/constants/privateConstants";
import { getDistanceSquared } from "../geometry/geometry";

export const calculateMousePosOnDesk = function (context, event) {
	const e = getElements(context);
	const privateConstants = getPrivateConstants(context);

	const limberGridViewPosition = getLimberGridViewBoundingClientRect(context);
	if (
		event.clientX >= limberGridViewPosition.left &&
		event.clientX <=
			limberGridViewPosition.left + limberGridViewPosition.width &&
		event.clientY >= limberGridViewPosition.top &&
		event.clientY <= limberGridViewPosition.top + limberGridViewPosition.height
	) {
		const scrollTop = e.$limberGridView.scrollTop;
		const scrollLeft = e.$limberGridView.scrollLeft;

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
			return;
		}
		return {
			x: mouseXOnLimberGridView,
			y: mouseYOnLimberGridView,
			offsetX: mouseXOnLimberGridView - scrollLeft,
			offsetY: mouseYOnLimberGridView - scrollTop,
		};
	}
};

export const calculateTouchPosOnDesk = function (context, event) {
	const e = getElements(context);
	const privateConstants = getPrivateConstants(context);

	const limberGridViewPosition = getLimberGridViewBoundingClientRect(context);
	let touch;

	if (event.type === "touchend") {
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
		const scrollTop = e.$limberGridView.scrollTop;
		const scrollLeft = e.$limberGridView.scrollLeft;

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
			return;
		}
		return {
			x: touchXOnLimberGridView,
			y: touchYOnLimberGridView,
			offsetX: touchXOnLimberGridView - scrollLeft,
			offsetY: touchYOnLimberGridView - scrollTop,
		};
	}
};

export const calculateTouchPosOnItem = function (context, event) {
	const e = getElements(context);

	const limberGridViewItemPosition =
		e.$limberGridViewItems[
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
	}
};

export const isTouchHoldValid = (context, event, userActionData) => {
	const touchPosOnLimberGridItem = calculateTouchPosOnItem(context, event);
	console.log("touchPosOnLimberGridItem", touchPosOnLimberGridItem);

	if (
		getDistanceSquared(
			touchPosOnLimberGridItem,
			userActionData.touchPosOnLimberGridItem
		) >
		15 * 15
	) {
		return false;
	}
	return true;
};
