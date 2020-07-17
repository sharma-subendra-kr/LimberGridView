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
import { calculateTouchPosOnLimberGridItem } from "./eventHandlerUtils";

export const getUserActionData = (event) => {
	let radius;
	let touchPosOnLimberGridItem;
	let X, Y;

	if (event.which === 1) {
		radius = Math.sqrt(
			Math.pow(0 - event.offsetX, 2) + Math.pow(0 - event.offsetY, 2)
		);
		X = event.offsetX;
		Y = event.offsetY;
	} else if (event.which === 0) {
		touchPosOnLimberGridItem = calculateTouchPosOnLimberGridItem(event);
		radius = Math.sqrt(
			Math.pow(0 - touchPosOnLimberGridItem.x, 2) +
				Math.pow(0 - touchPosOnLimberGridItem.y, 2)
		);
		X = touchPosOnLimberGridItem.x;
		Y = touchPosOnLimberGridItem.y;
	} else {
		throw "Unidentified event";
	}

	const resizeUIBox = {
		x:
			event.currentTarget.offsetWidth -
			publicConstants.RESIZE_SQUARE_GUIDE_LENGTH,
		y:
			event.currentTarget.offsetHeight -
			publicConstants.RESIZE_SQUARE_GUIDE_LENGTH,
		width:
			publicConstants.RESIZE_SQUARE_GUIDE_LENGTH +
			publicConstants.RESIZE_SQUARE_BORDER_GUIDE_WIDTH,
		height:
			publicConstants.RESIZE_SQUARE_GUIDE_LENGTH +
			publicConstants.RESIZE_SQUARE_BORDER_GUIDE_WIDTH,
	};

	if (false) {
		// call developer defined function to check if mousedown for MOVE is in a valid place
		return {
			type: "move",
			itemIndex: event.currentTarget.attributes["data-index"].value,
		};
	} else if (radius <= publicConstants.MOVE_GUIDE_RADIUS) {
		return {
			type: "move",
			itemIndex: event.currentTarget.attributes["data-index"].value,
		};
	}

	if (false) {
		// call developer defined function to check if mousedown for RESIZE is in a valid place
		return {
			type: "resize",
			itemIndex: event.currentTarget.attributes["data-index"].value,
		};
	} else if (
		X >= resizeUIBox.x &&
		X <= resizeUIBox.x + resizeUIBox.width &&
		Y >= resizeUIBox.y &&
		Y <= resizeUIBox.y + resizeUIBox.height
	) {
		return {
			type: "resize",
			itemIndex: event.currentTarget.attributes["data-index"].value,
		};
	}
};

export const loadResizingState = (userActionData) => {
	e.$limberGridViewHeightAdjustGuide[0].style.height = 0 + "px";
	e.$limberGridViewHeightAdjustGuide[0].classList.add(
		"limberGridViewHeightAdjustGuideActive"
	);

	e.$limberGridViewGridPseudoItems[userActionData.itemIndex].style.width = `${
		pd[userActionData.itemIndex].width
	}px`;
	e.$limberGridViewGridPseudoItems[userActionData.itemIndex].style.height = `${
		pd[userActionData.itemIndex].height
	}px`;
	e.$limberGridViewGridPseudoItems[
		userActionData.itemIndex
	].style.transform = `translate(${userActionData.itemX}px,${userActionData.itemY}px)`;
	e.$limberGridViewGridPseudoItems[userActionData.itemIndex].classList.add(
		"limberGridViewGridPseudoItemActive"
	);
	e.$limberGridViewGridPseudoItems[userActionData.itemIndex].classList.remove(
		"limberGridViewGridPseudoItemResizeAllow",
		"limberGridViewGridPseudoItemResizeDisallow"
	);

	e.$body[0].classList.add(
		"limberGridViewBodyTagStateElementDraggingOrResizing"
	);

	const itemsLen = e.$limberGridViewItems.length;
	for (let i = 0; i < itemsLen; i++) {
		e.$limberGridViewItems[i].classList.add("limberGridViewItemResizingState");
	}

	const pseudoItemsLen = e.$limberGridViewGridPseudoItems.length;
	for (let i = 0; i < pseudoItemsLen; i++) {
		e.$limberGridViewGridPseudoItems[i].classList.add(
			"limberGridViewGridPseudoItemResizingState"
		);
	}
};

export const unloadResizingState = (userActionData) => {
	e.$limberGridViewHeightAdjustGuide[0].classList.remove(
		"limberGridViewHeightAdjustGuideActive"
	);

	e.$limberGridViewGridPseudoItems[userActionData.itemIndex].classList.remove(
		"limberGridViewGridPseudoItemActive"
	);
	e.$limberGridViewGridPseudoItems[
		userActionData.itemIndex
	].style.transform = `translate(0px, 0px)`;

	e.$body[0].classList.remove(
		"limberGridViewBodyTagStateElementDraggingOrResizing"
	);

	const itemsLen = e.$limberGridViewItems.length;
	for (let i = 0; i < itemsLen; i++) {
		e.$limberGridViewItems[i].classList.remove(
			"limberGridViewItemResizingState"
		);
	}
	const pseudoItemsLen = e.$limberGridViewGridPseudoItems.length;
	for (let i = 0; i < pseudoItemsLen; i++) {
		e.$limberGridViewGridPseudoItems[i].classList.remove(
			"limberGridViewGridPseudoItemResizingState"
		);
	}
};

export const loadMoveState = (userActionData, event) => {
	e.$limberGridViewHeightAdjustGuide[0].style.height = 0 + "px";
	e.$limberGridViewHeightAdjustGuide[0].classList.add(
		"limberGridViewHeightAdjustGuideActive"
	);

	e.$limberGridViewItems[userActionData.itemIndex].classList.add(
		"limberGridViewItemDemo"
	);

	e.$limberGridViewBodyPseudoItems[userActionData.itemIndex].classList.add(
		"limberGridViewBodyPseudoItemActive"
	);
	if (event.which === 1) {
		e.$limberGridViewBodyPseudoItems[
			userActionData.itemIndex
		].style.transform = `translate(${event.pageX}px, ${event.pageY}px)`;
	} else if (event.which === 0) {
		e.$limberGridViewBodyPseudoItems[
			userActionData.itemIndex
		].style.transform = `translate(${event.touches[0].pageX}px, ${event.touches[0].pageY}px)`;
	}

	e.$body[0].classList.add(
		"limberGridViewBodyTagStateElementDraggingOrResizing"
	);
};

export const unloadMoveState = (userActionData) => {
	e.$limberGridViewHeightAdjustGuide[0].classList.remove(
		"limberGridViewHeightAdjustGuideActive"
	);

	e.$limberGridViewItems[userActionData.itemIndex].classList.remove(
		"limberGridViewItemDemo"
	);

	e.$limberGridViewBodyPseudoItems[userActionData.itemIndex].classList.remove(
		"limberGridViewBodyPseudoItemActive"
	);
	e.$limberGridViewBodyPseudoItems[
		userActionData.itemIndex
	].style.transform = `translate(0px, 0px)`;

	e.$body[0].classList.remove(
		"limberGridViewBodyTagStateElementDraggingOrResizing"
	);
};

export const loadOnMoveState = (userActionData, event, type) => {
	if (type === "move") {
		e.$limberGridViewMoveGuide[0].classList.remove(
			"limberGridViewMoveGuideActive"
		);

		e.$limberGridViewBodyPseudoItems[userActionData.itemIndex].classList.remove(
			"limberGridViewBodyPseudoItemMoveAllow",
			"limberGridViewBodyPseudoItemMoveDisallow"
		);

		if (event.which === 1) {
			e.$limberGridViewBodyPseudoItems[
				userActionData.itemIndex
			].style.transform = `translate(${event.pageX}px, ${event.pageY}px)`;
		} else if (event.which === 0) {
			e.$limberGridViewBodyPseudoItems[
				userActionData.itemIndex
			].style.transform = `translate(${event.touches[0].pageX}px, ${event.touches[0].pageY}px)`;
		}
	} else if (type === "resize") {
		e.$limberGridViewGridPseudoItems[userActionData.itemIndex].classList.remove(
			"limberGridViewGridPseudoItemResizeAllow",
			"limberGridViewGridPseudoItemResizeDisallow"
		);
	}
};

export const unloadOnMoveState = () => {
	e.$limberGridViewMoveGuide[0].classList.remove(
		"limberGridViewMoveGuideActive"
	);
};