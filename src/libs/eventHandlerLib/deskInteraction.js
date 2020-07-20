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
import { shiftItemsUp } from "../arrange/arrange";
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

	if (event.target.classList.contains("limber-grid-view")) {
		event.stopPropagation();
	} else {
		return;
	}

	if (event.which !== 0) {
		return;
	}

	dkiv.tapHoldCancel = false;
	dkiv.tapHoldTimerComplete = false;

	clearTimeout(dkiv.longTouchCheck);
	dkiv.longTouchCheck = setTimeout(
		tapHoldCheck.bind(this, event),
		publicConstants.TOUCH_HOLD_TIME
	);

	e.$limberGridView.addEventListener("touchmove", bf.onDeskTouchMove);
	document.addEventListener("touchend", bf.onDeskTouchEnd);
	document.addEventListener("touchcancel", bf.onDeskTouchCancel);
	document.addEventListener("contextmenu", bf.onDeskTouchContextMenu);
	unInitializeItemTouchEvents.call(this);

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

		loadInitState(this);

		insertAddItemOnTouchHoldGuideStyles(x, y);
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
		clearTimeout(dkiv.longPressCheck);

		e.$limberGridView.removeEventListener("mousemove", bf.onDeskMouseMove);
		document.removeEventListener("mouseup", bf.onDeskMouseUp);
		document.removeEventListener("contextmenu", bf.onDeskContextMenu);
	}
	event.stopPropagation();
};

export const onDeskTouchMove = function (event) {
	const e = getElements(this);
	const privateConstants = getPrivateConstants(this);
	const publicConstants = getPublicConstants(this);

	const dkiv = getDeskInteractionVars(this);
	const bf = getBindedFunctions(this);

	if (dkiv.tapHoldTimerComplete === true) {
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
		clearTimeout(dkiv.longTouchCheck);

		e.$limberGridView.removeEventListener("touchmove", bf.onDeskTouchMove);
		document.removeEventListener("touchend", bf.onDeskTouchEnd);
		document.removeEventListener("touchcancel", bf.onDeskTouchCancel);
		document.removeEventListener("contextmenu", bf.onDeskTouchContextMenu);
		initializeItemTouchEvents.call(this);
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
			if (
				cutSpaceAllowCheck(
					this,
					dkiv.userActionData.addPositionX,
					dkiv.userActionData.addPositionY,
					dkiv.userActionData.newWidth,
					dkiv.userActionData.newHeight
				)
			) {
				shiftItemsUp(
					this,
					dkiv.userActionData.addPositionY,
					dkiv.userActionData.newHeight
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
	if (dkiv.tapHoldTimerComplete === true) {
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
			if (
				cutSpaceAllowCheck(
					this,
					dkiv.userActionData.addPositionX,
					dkiv.userActionData.addPositionY,
					dkiv.userActionData.newWidth,
					dkiv.userActionData.newHeight
				)
			) {
				shiftItemsUp(
					this,
					dkiv.userActionData.addPositionY,
					dkiv.userActionData.newHeight
				);
			}
		}
	} else {
		dkiv.tapHoldCancel = true;
	}
	dkiv.tapHoldTimerComplete = false;
	onDeskContextMenu.call(this);
	initializeItemTouchEvents.call(this);

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
	const dkiv = getDeskInteractionVars(this);

	clearTimeout(dkiv.addItemAllowCheckTimeOutVariable);
	clearTimeout(dkiv.longTouchCheck);
	dkiv.tapHoldCancel = false;
	dkiv.tapHoldTimerComplete = false;
	onDeskContextMenu.call(this);
	initializeItemTouchEvents.call(this);

	event.stopPropagation();
};

export const onDeskTouchContextMenu = function (event) {
	event.preventDefault();
};

export const onDeskContextMenu = function (event) {
	const e = getElements(this);

	const bf = getBindedFunctions(this);

	if (event) {
		event.preventDefault();
		event.stopPropagation();
	}

	unloadInitState(this);

	e.$limberGridView.removeEventListener("mousemove", bf.onDeskMouseMove);
	document.removeEventListener("mouseup", bf.onDeskMouseUp);
	document.removeEventListener("contextmenu", bf.onDeskContextMenu);

	e.$limberGridView.removeEventListener("touchmove", bf.onDeskTouchMove);
	document.removeEventListener("touchend", bf.onDeskTouchEnd);
	document.removeEventListener("touchcancel", bf.onDeskTouchCancel);
	document.removeEventListener("contextmenu", bf.onDeskTouchContextMenu);
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

export const addItemAllowCheck = function (context, x, y, width, height) {
	const privateConstants = getPrivateConstants(context);
	const publicConstants = getPublicConstants(context);
	const pd = getPositionData(context);

	var tempPlane = {
		x: x - privateConstants.MARGIN,
		y: y - privateConstants.MARGIN,
		width: width + publicConstants.MARGIN * 2,
		height: height + publicConstants.MARGIN * 2,
	};

	if (x < 0 || y < 0) {
		return false;
	}

	if (typeof width !== "number" || typeof height !== "number") {
		return false;
	}

	if (x + width > privateConstants.WIDTH) {
		return false;
	}

	if (width < 50 || height < 50) {
		return false;
	}

	let isInside;
	const len = pd.length;
	for (let i = 0; i < len; i++) {
		isInside =
			doRectsOverlap(
				getItemDimenWithMargin(privateConstants.MARGIN, pd[i]),
				tempPlane
			) ||
			doRectsOnlyTouch(
				getItemDimenWithMargin(privateConstants.MARGIN, pd[i]),
				tempPlane
			);

		if (isInside) {
			return false;
		}
	}
	return true;
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

export const cutSpaceAllowCheck = function (context, x, y, width, height) {
	const privateConstants = getPrivateConstants(context);
	const pd = getPositionData(context);

	const tempPlane = {
		x: 0,
		y: y,
		width: privateConstants.WIDTH,
		height: height,
	};

	if (typeof width !== "number" || typeof height !== "number") {
		return false;
	}

	let isInside;
	const len = pd.length;
	for (let i = 0; i < len; i++) {
		isInside =
			doRectsOverlap(
				tempPlane,
				getItemDimenWithMargin(privateConstants.MARGIN, pd[i])
			) ||
			doRectsOnlyTouch(
				tempPlane,
				getItemDimenWithMargin(privateConstants.MARGIN, pd[i])
			);

		if (isInside) {
			return false;
		}
	}
	return true;
};

export const insertAddItemOnTouchHoldGuideStyles = function (x, y) {
	var ripple = [];
	ripple[0] = "@keyframes limberGridViewAddItemOnTouchHoldRipple {";
	ripple[1] = "0% {";
	ripple[2] =
		"transform: translate(" + (x - 5) + "px, " + (y - 5) + "px) scale(0, 0);";
	ripple[3] = "opacity: 1;";
	ripple[4] = "}";
	ripple[5] = "20% {";
	ripple[6] =
		"transform: translate(" + (x - 5) + "px, " + (y - 5) + "px) scale(25, 25);";
	ripple[7] = "opacity: 1;";
	ripple[8] = "}";
	ripple[9] = "100% {";
	ripple[10] =
		"transform: translate(" + (x - 5) + "px, " + (y - 5) + "px) scale(50, 50);";
	ripple[11] = "opacity: 0;";
	ripple[12] = "}";
	ripple[13] = "}";
	var rippleString = ripple.join("");
	e.$limberGridViewStyle[0].innerHTML = rippleString;
};
