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

import {
	// getMarginAtPoint,
	adjustHeight,
	adjustScroll,
} from "../utils/essentials";
import { getItemDimenWithMargin } from "../utils/utils";
// import {
// 	isPlaneBInsidePlaneA_TouchingIsInside,
// 	shiftItemsUp,
// } from "../calc/calcUtils";
import { doRectsOverlap, doRectsOnlyTouch } from "../rect/rectUtils";
import getPublicConstants from "../../store/constants/publicConstants";
import getPrivateConstants from "../../store/constants/privateConstants";
import {
	getCallbacks,
	getPositionData,
} from "../../store/variables/essentials";
import getElements from "../../store/variables/elements";
import { calculateTouchPosOnDesk } from "./eventHandlerUtils.js";
import { loadInitState, unloadInitState } from "./deskInteractionUtils.js";
import {
	shiftItemsUp,
	addItemAllowCheck,
	cutSpaceAllowCheck,
} from "../arrange/arrangeUtils";
import {
	initializeItemTouchEvents,
	unInitializeItemTouchEvents,
} from "./initializers";
import { getBindedFunctions } from "../../store/variables/bindedFunctions";
import { getDeskInteractionVars } from "../../store/variables/eventSpecific";
import { addItem } from "../renderers/renderers";
// import { addItemsAtPositions } from "../renderers/addOrRemoveItems";

// let userActionData = {};
// let mouseDownCancel = false;
// // let limberGridMouseDownCancel = false;
// let mouseDownTimerComplete = false;
// // let limberGridMouseDownTimerComplete = false;
// let tapHoldCancel = false;
// // let limberGridTouchStartCancel = false;
// let tapHoldTimerComplete = false;
// // let limberGridTouchStartTimerComplete = false;
// let longPressCheck;
// // let limberGridMouseDownCheckTimeOutVariable;
// let longTouchCheck;
// // let limberGridTouchStartCheckTimeOutVariable;
// let addItemAllowCheckTimeOutVariable;
// let cutSpaceAllowCheckTimeOutVariable;

export const onDeskMouseDown = function (event) {
	const e = getElements(this);
	const publicConstants = getPublicConstants(this);

	const dkiv = getDeskInteractionVars(this);
	const bf = getBindedFunctions(this);

	if (event.target.classList.contains("limber-grid-view")) {
		event.stopPropagation();
	} else {
		return;
	}

	if (event.which !== 1) {
		return;
	}

	dkiv.mouseDownCancel = false;
	dkiv.mouseDownTimerComplete = false;

	clearTimeout(dkiv.longPressCheck);
	dkiv.longPressCheck = setTimeout(
		mouseDownCheck.bind(this, event, event.offsetX, event.offsetY),
		publicConstants.MOUSE_DOWN_TIME
	);

	e.$limberGridView.addEventListener("mousemove", bf.onDeskMouseMove);
	document.addEventListener("mouseup", bf.onDeskMouseUp);
	document.addEventListener("contextmenu", bf.onDeskContextMenu);
};

export const onDeskTouchStart = function (event) {
	const e = getElements(this);
	const publicConstants = getPublicConstants(this);

	const dkiv = getDeskInteractionVars(this);
	const bf = getBindedFunctions(this);

	if (!event.target.classList.contains("limber-grid-view")) {
		return;
	}

	if (event.touches.length !== 1) {
		// onDeskContextMenu.call(this, event);
		return;
	}

	// if (event.target.classList.contains("limber-grid-view")) {
	// 	event.stopPropagation();
	// } else {
	// 	return;
	// }

	if (event.which !== 0) {
		// onDeskContextMenu.call(this, event);
		return;
	}

	dkiv.tapHoldCancel = false;
	dkiv.tapHoldTimerComplete = false;

	e.$limberGridView.addEventListener("touchmove", bf.onDeskTouchMove);
	document.addEventListener("touchend", bf.onDeskTouchEnd);
	document.addEventListener("touchcancel", bf.onDeskTouchCancel);
	document.addEventListener("contextmenu", bf.onDeskTouchContextMenu);
	unInitializeItemTouchEvents.call(this);

	clearTimeout(dkiv.longTouchCheck);
	dkiv.longTouchCheck = setTimeout(
		tapHoldCheck.bind(this, event),
		publicConstants.TOUCH_HOLD_TIME
	);

	event.stopPropagation();
};

// onLimberGridMouseDownCheck
export const mouseDownCheck = function (event, offsetX, offsetY) {
	const e = getElements(this);
	const privateConstants = getPrivateConstants(this);

	const dkiv = getDeskInteractionVars(this);

	if (dkiv.mouseDownCancel === false) {
		dkiv.mouseDownTimerComplete = true;

		var scrollTop = e.$limberGridView.scrollTop;
		var scrollLeft = e.$limberGridView.scrollLeft;
		var x = offsetX + scrollLeft - privateConstants.PADDING_LEFT;
		var y = offsetY + scrollTop - privateConstants.PADDING_TOP;

		dkiv.userActionData = {
			type: "add",
			addPositionX: x,
			addPositionY: y,
		};

		e.$limberGridViewAddCutGuide.style.height = 1 + "px";
		e.$limberGridViewAddCutGuide.style.width = 1 + "px";
		e.$limberGridViewAddCutGuide.style.transform = `translate(${x}px, ${y}px)`;
		e.$limberGridViewAddCutGuide.setAttribute("data-after", `w: 0px, h: 0px`);

		loadInitState(this);
	} else {
		// mouseDown cancel before TimerComplete
	}
};

// onLimberGridTouchStartCheck
export const tapHoldCheck = function (event) {
	const e = getElements(this);

	const dkiv = getDeskInteractionVars(this);

	if (dkiv.tapHoldCancel === false) {
		dkiv.tapHoldTimerComplete = true;

		var touchPositionOnLimberGrid = calculateTouchPosOnDesk(this, event);

		var x = touchPositionOnLimberGrid.x;
		var y = touchPositionOnLimberGrid.y;

		dkiv.userActionData = {
			type: "add",
			addPositionX: x,
			addPositionY: y,
		};

		var removeAddItemOnTouchHoldGuideFunction = function () {
			e.$limberGridViewTouchHoldGuide.classList.remove(
				"limber-grid-view-touch-hold-guide-active"
			);
		};
		setTimeout(removeAddItemOnTouchHoldGuideFunction.bind(this), 500);

		e.$limberGridViewAddCutGuide.style.height = 1 + "px";
		e.$limberGridViewAddCutGuide.style.width = 1 + "px";
		e.$limberGridViewAddCutGuide.style.transform = `translate(${x}px, ${y}px)`;
		e.$limberGridViewAddCutGuide.setAttribute("data-after", `w: 0px, h: 0px`);

		loadInitState(this);

		e.$limberGridViewTouchHoldGuide.style.transform = `translate(${x}px, ${y}px)`;
		e.$limberGridViewTouchHoldGuide.classList.add(
			"limber-grid-view-touch-hold-guide-active"
		);

		event.preventDefault();
	} else {
		// touchstart cancel before TimerComplete
	}
};

export const onDeskMouseMove = function (event) {
	const e = getElements(this);
	const privateConstants = getPrivateConstants(this);
	const publicConstants = getPublicConstants(this);

	const dkiv = getDeskInteractionVars(this);
	const bf = getBindedFunctions(this);

	if (dkiv.mouseDownTimerComplete === true) {
		e.$limberGridViewAddCutGuide.classList.remove(
			"limber-grid-view-add-cut-guide-allow",
			"limber-grid-view-add-cut-guide-disallow"
		);

		const scrollTop = e.$limberGridView.scrollTop;
		const scrollLeft = e.$limberGridView.scrollLeft;

		const x = dkiv.userActionData.addPositionX;
		const y = dkiv.userActionData.addPositionY;

		const newWidth =
			event.offsetX - x + scrollLeft - privateConstants.PADDING_LEFT;
		const newHeight =
			event.offsetY - y + scrollTop - privateConstants.PADDING_TOP;

		dkiv.userActionData.newWidth = newWidth;
		dkiv.userActionData.newHeight = newHeight;

		const yMousePosition = event.offsetY + scrollTop;
		adjustHeight(this, yMousePosition);

		if (newWidth > 0 && newHeight > 0) {
			e.$limberGridViewAddCutGuide.style.width = newWidth + "px";
			e.$limberGridViewAddCutGuide.style.height = newHeight + "px";
			e.$limberGridViewAddCutGuide.setAttribute(
				"data-after",
				`w: ${parseInt(newWidth)}px, h: ${parseInt(newHeight)}px`
			);
		}

		if (publicConstants.DESK_INTERACTION_MODE === "ADD") {
			clearTimeout(dkiv.addItemAllowCheckTimeOutVariable);
			dkiv.addItemAllowCheckTimeOutVariable = setTimeout(
				addItemAllowCheckTimeOut.bind(
					this,
					dkiv.userActionData.addPositionX,
					dkiv.userActionData.addPositionY,
					newWidth,
					newHeight
				),
				publicConstants.DEMO_WAIT_TIME
			);
		} else if (publicConstants.DESK_INTERACTION_MODE === "CUTSPACE") {
			clearTimeout(dkiv.cutSpaceAllowCheckTimeOutVariable);
			dkiv.cutSpaceAllowCheckTimeOutVariable = setTimeout(
				cutSpaceAllowCheckTimeOut.bind(
					this,
					dkiv.userActionData.addPositionX,
					dkiv.userActionData.addPositionY,
					newWidth,
					newHeight
				),
				publicConstants.DEMO_WAIT_TIME
			);
		}
	} else {
		onDeskContextMenu.call(this, event);

		// clearTimeout(dkiv.longPressCheck);

		// e.$limberGridView.removeEventListener("mousemove", bf.onDeskMouseMove);
		// document.removeEventListener("mouseup", bf.onDeskMouseUp);
		// document.removeEventListener("contextmenu", bf.onDeskContextMenu);
	}
	event.stopPropagation();
};

export const onDeskTouchMove = function (event) {
	const e = getElements(this);
	const privateConstants = getPrivateConstants(this);
	const publicConstants = getPublicConstants(this);

	const dkiv = getDeskInteractionVars(this);
	const bf = getBindedFunctions(this);

	if (dkiv.tapHoldTimerComplete === true && event.touches.length === 1) {
		e.$limberGridViewAddCutGuide.classList.remove(
			"limber-grid-view-add-cut-guide-allow",
			"limber-grid-view-add-cut-guide-disallow"
		);

		const scrollTop = e.$limberGridView.scrollTop;
		const scrollLeft = e.$limberGridView.scrollLeft;

		const x = dkiv.userActionData.addPositionX;
		const y = dkiv.userActionData.addPositionY;

		const touchPositionOnLimberGrid = calculateTouchPosOnDesk(this, event);

		const newWidth = touchPositionOnLimberGrid.x - x;
		const newHeight = touchPositionOnLimberGrid.y - y;

		if (touchPositionOnLimberGrid !== false) {
			dkiv.userActionData.newWidth = newWidth;
			dkiv.userActionData.newHeight = newHeight;

			if (newWidth > 0 && newHeight > 0) {
				e.$limberGridViewAddCutGuide.style.width = newWidth + "px";
				e.$limberGridViewAddCutGuide.style.height = newHeight + "px";
				e.$limberGridViewAddCutGuide.setAttribute(
					"data-after",
					`w: ${parseInt(newWidth)}px, h: ${parseInt(newHeight)}px`
				);
			}
		}

		if (touchPositionOnLimberGrid !== false) {
			const limberGridViewBoundingClientRect = e.$limberGridView.getBoundingClientRect();
			const limberGridViewWidthVisibleWidth =
				e.$limberGridView.offsetWidth - limberGridViewBoundingClientRect.left;
			const limberGridViewHeightVisibleHeight =
				e.$limberGridView.offsetHeight - limberGridViewBoundingClientRect.top;
			const limberGridViewOnVisibleAreaX =
				touchPositionOnLimberGrid.x +
				privateConstants.PADDING_LEFT -
				scrollLeft;
			const limberGridViewOnVisibleAreaY =
				touchPositionOnLimberGrid.y + privateConstants.PADDING_TOP - scrollTop;

			const yTouchPosition = touchPositionOnLimberGrid.y;
			adjustHeight(this, yTouchPosition);

			const programScrolled = adjustScroll(
				this,
				limberGridViewOnVisibleAreaY,
				limberGridViewHeightVisibleHeight
			);

			if (publicConstants.DESK_INTERACTION_MODE === "ADD") {
				clearTimeout(dkiv.addItemAllowCheckTimeOutVariable);
				if (programScrolled !== true) {
					dkiv.addItemAllowCheckTimeOutVariable = setTimeout(
						addItemAllowCheckTimeOut.bind(
							this,
							dkiv.userActionData.addPositionX,
							dkiv.userActionData.addPositionY,
							newWidth,
							newHeight
						),
						publicConstants.DEMO_WAIT_TIME
					);
				}
			} else if (publicConstants.DESK_INTERACTION_MODE === "CUTSPACE") {
				clearTimeout(dkiv.cutSpaceAllowCheckTimeOutVariable);
				if (programScrolled !== true) {
					dkiv.cutSpaceAllowCheckTimeOutVariable = setTimeout(
						cutSpaceAllowCheckTimeOut.bind(
							this,
							dkiv.userActionData.addPositionX,
							dkiv.userActionData.addPositionY,
							newWidth,
							newHeight
						),
						publicConstants.DEMO_WAIT_TIME
					);
				}
			}
		}
		event.preventDefault();
	} else {
		onDeskContextMenu.call(this);
		// clearTimeout(dkiv.longTouchCheck);

		// e.$limberGridView.removeEventListener("touchmove", bf.onDeskTouchMove);
		// document.removeEventListener("touchend", bf.onDeskTouchEnd);
		// document.removeEventListener("touchcancel", bf.onDeskTouchCancel);
		// document.removeEventListener("contextmenu", bf.onDeskTouchContextMenu);
		// initializeItemTouchEvents.call(this);
	}

	event.stopPropagation();
};

export const onDeskMouseUp = function (event) {
	const e = getElements(this);
	const publicConstants = getPublicConstants(this);
	const callbacks = getCallbacks(this);

	const dkiv = getDeskInteractionVars(this);

	clearTimeout(dkiv.addItemAllowCheckTimeOutVariable);
	clearTimeout(dkiv.longPressCheck);
	var itemAddedFlag = false;
	if (dkiv.mouseDownTimerComplete === true) {
		if (publicConstants.DESK_INTERACTION_MODE === "ADD") {
			if (
				addItemAllowCheck(
					this,
					dkiv.userActionData.addPositionX,
					dkiv.userActionData.addPositionY,
					dkiv.userActionData.newWidth,
					dkiv.userActionData.newHeight
				)
			) {
				var item = {
					x: dkiv.userActionData.addPositionX,
					y: dkiv.userActionData.addPositionY,
					width: dkiv.userActionData.newWidth,
					height: dkiv.userActionData.newHeight,
				};

				var scrollTop = e.$limberGridView.scrollTop;

				var renderDetails = addItem(this, item, false, "addItemInteractive");
				itemAddedFlag = true;

				e.$limberGridView.scrollTop = scrollTop;
			}
		} else if (publicConstants.DESK_INTERACTION_MODE === "CUTSPACE") {
			const cutDetails = cutSpaceAllowCheck(
				this,
				dkiv.userActionData.addPositionX,
				dkiv.userActionData.addPositionY,
				dkiv.userActionData.newWidth,
				dkiv.userActionData.newHeight
			);
			if (cutDetails) {
				shiftItemsUp(
					this,
					cutDetails.y,
					cutDetails.shiftHeight
					// dkiv.userActionData.addPositionY,
					// dkiv.userActionData.newHeight
				);
			}
		}
	} else {
		dkiv.mouseDownCancel = true;
	}
	onDeskContextMenu.call(this);
	event.stopPropagation();

	if (
		callbacks.addCompleteCallback != undefined &&
		callbacks.addCompleteCallback != null
	) {
		if (itemAddedFlag == true) {
			callbacks.addCompleteCallback(
				renderDetails.items,
				item.width,
				item.height,
				"addItemInteractive"
			);
		}
	}
};

export const onDeskTouchEnd = function (event) {
	const e = getElements(this);
	const publicConstants = getPublicConstants(this);
	const callbacks = getCallbacks(this);

	const dkiv = getDeskInteractionVars(this);

	clearTimeout(dkiv.addItemAllowCheckTimeOutVariable);
	clearTimeout(dkiv.longTouchCheck);
	var itemAddedFlag = false;
	if (dkiv.tapHoldTimerComplete === true && event.touches.length === 0) {
		if (publicConstants.DESK_INTERACTION_MODE === "ADD") {
			if (
				addItemAllowCheck(
					this,
					dkiv.userActionData.addPositionX,
					dkiv.userActionData.addPositionY,
					dkiv.userActionData.newWidth,
					dkiv.userActionData.newHeight
				)
			) {
				var item = {
					x: dkiv.userActionData.addPositionX,
					y: dkiv.userActionData.addPositionY,
					width: dkiv.userActionData.newWidth,
					height: dkiv.userActionData.newHeight,
				};

				var scrollTop = e.$limberGridView.scrollTop;

				var renderDetails = addItem(this, item, false, "addItemInteractive");
				itemAddedFlag = true;

				e.$limberGridView.scrollTop = scrollTop;
			}
		} else if (publicConstants.DESK_INTERACTION_MODE === "CUTSPACE") {
			const cutDetails = cutSpaceAllowCheck(
				this,
				dkiv.userActionData.addPositionX,
				dkiv.userActionData.addPositionY,
				dkiv.userActionData.newWidth,
				dkiv.userActionData.newHeight
			);
			if (cutDetails) {
				shiftItemsUp(
					this,
					cutDetails.y,
					cutDetails.shiftHeight
					// dkiv.userActionData.addPositionY,
					// dkiv.userActionData.newHeight
				);
			}
		}
	} else {
		dkiv.tapHoldCancel = true;
	}
	// dkiv.tapHoldTimerComplete = false;
	onDeskContextMenu.call(this);
	// initializeItemTouchEvents.call(this);

	event.stopPropagation();

	if (
		callbacks.addCompleteCallback != undefined &&
		callbacks.addCompleteCallback != null
	) {
		if (itemAddedFlag == true) {
			callbacks.addCompleteCallback(
				renderDetails.items,
				item.width,
				item.height,
				"addItemInteractive"
			);
		}
	}
};

export const onDeskTouchCancel = function (event) {
	// const dkiv = getDeskInteractionVars(this);

	// dkiv.tapHoldCancel = false;
	// dkiv.tapHoldTimerComplete = false;
	onDeskContextMenu.call(this);
	// initializeItemTouchEvents.call(this);

	// event.stopPropagation();
};

export const onDeskTouchContextMenu = function (event) {
	event.preventDefault();
	// onDeskContextMenu.call(this, event);
};

export const onDeskContextMenu = function (event) {
	const e = getElements(this);

	const dkiv = getDeskInteractionVars(this);
	const bf = getBindedFunctions(this);

	clearTimeout(dkiv.addItemAllowCheckTimeOutVariable);
	clearTimeout(dkiv.cutSpaceAllowCheckTimeOutVariable);
	clearTimeout(dkiv.longPressCheck);
	clearTimeout(dkiv.longTouchCheck);
	unloadInitState(this);

	e.$limberGridView.removeEventListener("mousemove", bf.onDeskMouseMove);
	document.removeEventListener("mouseup", bf.onDeskMouseUp);
	document.removeEventListener("contextmenu", bf.onDeskContextMenu);

	e.$limberGridView.removeEventListener("touchmove", bf.onDeskTouchMove);
	document.removeEventListener("touchend", bf.onDeskTouchEnd);
	document.removeEventListener("touchcancel", bf.onDeskTouchCancel);
	document.removeEventListener("contextmenu", bf.onDeskTouchContextMenu);

	initializeItemTouchEvents.call(this);

	dkiv.userActionData = {};

	if (event) {
		event.preventDefault();
		event.stopPropagation();
	}
};

export const addItemAllowCheckTimeOut = function (x, y, width, height) {
	const e = getElements(this);

	if (addItemAllowCheck(this, x, y, width, height) === false) {
		e.$limberGridViewAddCutGuide.classList.remove(
			"limber-grid-view-add-cut-guide-allow"
		);
		e.$limberGridViewAddCutGuide.classList.add(
			"limber-grid-view-add-cut-guide-disallow"
		);
	} else {
		e.$limberGridViewAddCutGuide.classList.remove(
			"limber-grid-view-add-cut-guide-disallow"
		);
		e.$limberGridViewAddCutGuide.classList.add(
			"limber-grid-view-add-cut-guide-allow"
		);
	}
};

export const cutSpaceAllowCheckTimeOut = function (x, y, width, height) {
	const e = getElements(this);

	if (cutSpaceAllowCheck(this, x, y, width, height) === false) {
		e.$limberGridViewAddCutGuide.classList.remove(
			"limber-grid-view-add-cut-guide-allow"
		);
		e.$limberGridViewAddCutGuide.classList.add(
			"limber-grid-view-add-cut-guide-disallow"
		);
	} else {
		e.$limberGridViewAddCutGuide.classList.remove(
			"limber-grid-view-add-cut-guide-disallow"
		);
		e.$limberGridViewAddCutGuide.classList.add(
			"limber-grid-view-add-cut-guide-allow"
		);
	}
};
