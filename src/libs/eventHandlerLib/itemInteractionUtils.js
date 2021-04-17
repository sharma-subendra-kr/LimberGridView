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

import getElements from "../../store/variables/elements";
import getOptions from "../../store/variables/options";
import { getPositionData } from "../../store/variables/essentials";
import getPublicConstants from "../../store/constants/publicConstants";
import { calculateTouchPosOnItem } from "./eventHandlerUtils";

export const getUserActionData = (context, event) => {
	const publicConstants = getPublicConstants(context);
	const options = getOptions(context);
	const pd = getPositionData(context);

	const itemIndex = parseInt(
		event.currentTarget.attributes["data-index"].value
	);
	let radius;
	let touchPosOnLimberGridItem;
	let X, Y;

	if (!event.touches) {
		radius = Math.sqrt(
			Math.pow(0 - event.offsetX, 2) + Math.pow(0 - event.offsetY, 2)
		);
		X = event.offsetX;
		Y = event.offsetY;
	} else if (event.touches) {
		touchPosOnLimberGridItem = calculateTouchPosOnItem(context, event);
		if (!touchPosOnLimberGridItem) {
			return false;
		}
		radius = Math.sqrt(
			Math.pow(0 - touchPosOnLimberGridItem.x, 2) +
				Math.pow(0 - touchPosOnLimberGridItem.y, 2)
		);
		X = touchPosOnLimberGridItem.x;
		Y = touchPosOnLimberGridItem.y;
	} else {
		return false;
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
			publicConstants.RESIZE_SQUARE_GUIDE_BORDER_WIDTH,
		height:
			publicConstants.RESIZE_SQUARE_GUIDE_LENGTH +
			publicConstants.RESIZE_SQUARE_GUIDE_BORDER_WIDTH,
	};

	const resizeUIBoxBL = {
		x: -publicConstants.RESIZE_SQUARE_GUIDE_BORDER_WIDTH,
		y:
			event.currentTarget.offsetHeight -
			publicConstants.RESIZE_SQUARE_GUIDE_LENGTH,
		width: publicConstants.RESIZE_SQUARE_GUIDE_LENGTH,
		height:
			publicConstants.RESIZE_SQUARE_GUIDE_LENGTH +
			publicConstants.RESIZE_SQUARE_GUIDE_BORDER_WIDTH,
	};

	if (
		options.itemMouseDownMoveCheck &&
		options.itemMouseDownMoveCheck(
			X,
			Y,
			{ ...pd[itemIndex] },
			itemIndex,
			event.target
		)
	) {
		// call developer defined function to check if mousedown for MOVE is in a valid place
		return {
			type: "move",
			itemIndex: event.currentTarget.attributes["data-index"].value,
		};
	}

	if (
		radius <= publicConstants.MOVE_GUIDE_RADIUS &&
		!options.itemMouseDownMoveCheck
	) {
		return {
			type: "move",
			itemIndex: event.currentTarget.attributes["data-index"].value,
		};
	}

	if (
		options.itemMouseDownResizeCheck &&
		options.itemMouseDownResizeCheck(
			X,
			Y,
			{ ...pd[itemIndex] },
			itemIndex,
			event.target,
			"bottomRight"
		)
	) {
		// call developer defined function to check if mousedown for RESIZE is in a valid place
		return {
			type: "resize",
			itemIndex: event.currentTarget.attributes["data-index"].value,
		};
	}

	if (
		options.itemMouseDownResizeCheck &&
		options.itemMouseDownResizeCheck(
			X,
			Y,
			{ ...pd[itemIndex] },
			itemIndex,
			event.target,
			"bottomLeft"
		)
	) {
		// call developer defined function to check if mousedown for RESIZE is in a valid place
		return {
			type: "resizeBottomLeft",
			itemIndex: event.currentTarget.attributes["data-index"].value,
		};
	}

	if (
		X >= resizeUIBox.x &&
		X <= resizeUIBox.x + resizeUIBox.width &&
		Y >= resizeUIBox.y &&
		Y <= resizeUIBox.y + resizeUIBox.height &&
		!options.itemMouseDownResizeCheck
	) {
		return {
			type: "resize",
			itemIndex: event.currentTarget.attributes["data-index"].value,
		};
	}

	if (
		X >= resizeUIBoxBL.x &&
		X <= resizeUIBoxBL.width &&
		Y >= resizeUIBoxBL.y &&
		Y <= resizeUIBoxBL.y + resizeUIBoxBL.height &&
		!options.itemMouseDownResizeCheck
	) {
		return {
			type: "resizeBottomLeft",
			itemIndex: event.currentTarget.attributes["data-index"].value,
		};
	}
};

export const loadResizingState = (context, userActionData) => {
	const e = getElements(context);
	const pd = getPositionData(context);

	const item = pd[userActionData.itemIndex];

	e.$limberGridViewHeightAdjustGuide.style.height = 0 + "px";
	e.$limberGridViewHeightAdjustGuide.classList.add(
		"limber-grid-view-height-adjust-guide-active"
	);

	e.$limberGridViewPseudoItem.style.width = `${item.width}px`;
	e.$limberGridViewPseudoItem.style.height = `${item.height}px`;
	e.$limberGridViewPseudoItem.setAttribute("data-after", `w: 0px, h: 0px`);
	e.$limberGridViewPseudoItem.style.transform = `translate(${userActionData.itemX}px,${userActionData.itemY}px)`;
	e.$limberGridViewPseudoItem.classList.add(
		"limber-grid-view-pseudo-item-active"
	);
	e.$limberGridViewPseudoItem.classList.remove(
		"limber-grid-view-pseudo-item-resize-allow",
		"limber-grid-view-pseudo-item-resize-disallow"
	);

	e.$body.classList.add("limber-grid-view-body-tag-state-editing");

	const itemsLen = e.$limberGridViewItems.length;
	for (let i = 0; i < itemsLen; i++) {
		if (!e.$limberGridViewItems[i]) {
			continue;
		}
		e.$limberGridViewItems[i].classList.add(
			"limber-grid-view-item-resizing-state"
		);
	}

	e.$limberGridViewPseudoItem.classList.add(
		"limber-grid-view-pseudo-item-resizing-state"
	);
};

export const unloadResizingState = (context, userActionData) => {
	const e = getElements(context);

	e.$limberGridViewHeightAdjustGuide.classList.remove(
		"limber-grid-view-height-adjust-guide-active"
	);

	e.$limberGridViewPseudoItem.classList.remove(
		"limber-grid-view-pseudo-item-active"
	);
	e.$limberGridViewPseudoItem.style.transform = `translate(-1000px, -1000px)`;

	e.$body.classList.remove("limber-grid-view-body-tag-state-editing");

	const itemsLen = e.$limberGridViewItems.length;
	for (let i = 0; i < itemsLen; i++) {
		if (!e.$limberGridViewItems[i]) {
			continue;
		}
		e.$limberGridViewItems[i].classList.remove(
			"limber-grid-view-item-resizing-state"
		);
	}

	e.$limberGridViewPseudoItem.classList.remove(
		"limber-grid-view-pseudo-item-resizing-state"
	);
};

export const loadMoveState = (context, userActionData, event) => {
	const e = getElements(context);
	const pd = getPositionData(context);

	const item = pd[userActionData.itemIndex];

	e.$limberGridViewHeightAdjustGuide.style.height = 0 + "px";
	e.$limberGridViewHeightAdjustGuide.classList.add(
		"limber-grid-view-height-adjust-guide-active"
	);

	if (e.$limberGridViewItems[userActionData.itemIndex]) {
		e.$limberGridViewItems[userActionData.itemIndex].classList.add(
			"limber-grid-view-item-demo"
		);
	}

	e.$pseudoContainerItem.classList.add(
		"limber-grid-view-pseudo-container-item-active"
	);

	e.$pseudoContainerItem.style.width = item.width + "px";
	e.$pseudoContainerItem.style.height = item.height + "px";

	if (!event.touches) {
		e.$pseudoContainerItem.style.transform = `translate(${event.pageX}px, ${event.pageY}px)`;
	} else if (event.touches) {
		e.$pseudoContainerItem.style.transform = `translate(${event.touches[0].pageX}px, ${event.touches[0].pageY}px)`;
	}

	e.$body.classList.add("limber-grid-view-body-tag-state-editing");
};

export const unloadMoveState = (context, userActionData) => {
	const e = getElements(context);
	const publicConstants = getPublicConstants(context);

	e.$limberGridViewHeightAdjustGuide.classList.remove(
		"limber-grid-view-height-adjust-guide-active"
	);

	if (e.$limberGridViewItems[userActionData.itemIndex]) {
		e.$limberGridViewItems[userActionData.itemIndex].classList.remove(
			"limber-grid-view-item-demo"
		);
	}

	e.$pseudoContainerItem.classList.remove(
		"limber-grid-view-pseudo-container-item-active"
	);

	e.$pseudoContainerItem.style.width = "0px";
	e.$pseudoContainerItem.style.height = "0px";

	e.$pseudoContainerItem.style.transform = `translate(-1000px, -1000px)`;

	e.$body.classList.remove("limber-grid-view-body-tag-state-editing");

	e.$limberGridViewCrossHairGuide.style.transform = `translate(-${
		publicConstants.CROSS_HAIR_WIDTH * 2
	}px, -${publicConstants.CROSS_HAIR_HEIGHT * 2}px)`;
};

export const loadOnMoveState = (context, userActionData, event, type) => {
	const e = getElements(context);

	if (type === "move") {
		e.$limberGridViewMoveGuide.classList.remove(
			"limber-grid-view-move-guide-active"
		);

		e.$pseudoContainerItem.classList.remove(
			"limber-grid-view-pseudo-container-item-move-allow",
			"limber-grid-view-pseudo-container-item-move-disallow"
		);

		if (!event.touches) {
			e.$pseudoContainerItem.style.transform = `translate(${event.pageX}px, ${event.pageY}px)`;
		} else if (event.touches) {
			e.$pseudoContainerItem.style.transform = `translate(${event.touches[0].pageX}px, ${event.touches[0].pageY}px)`;
		}
	} else if (type === "resize") {
		e.$limberGridViewPseudoItem.classList.remove(
			"limber-grid-view-pseudo-item-resize-allow",
			"limber-grid-view-pseudo-item-resize-disallow"
		);
	}
};

export const unloadOnMoveState = (context) => {
	const e = getElements(context);

	e.$limberGridViewMoveGuide.classList.remove(
		"limber-grid-view-move-guide-active"
	);
	e.$limberGridViewMoveGuide.style.transform = `translate(-1000px, -1000px)`;
};
