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
	getMarginAtPoint,
	adjustHeight,
	adjustScroll,
} from "../utils/essentials";
import {
	isPlaneBInsidePlaneA_TouchingIsInside,
	shiftItemsUp,
} from "../calc/calcUtils";
import getPublicConstants from "../../store/constants/publicConstants";
import getPrivateConstants from "../../store/constants/privateConstants";
import {
	getCallbacks,
	getPositionData,
} from "../../store/variables/essentials";
import getElements from "../../store/variables/elements";
import { calculateTouchPosOnLimberGrid } from "./eventHandlerUtils.js";
import { loadInitState, unloadInitState } from "./addItemAndCutSpaceUtils.js";
import {
	initializeItemTouchEvents,
	unInitializeItemTouchEvents,
} from "./initializers";
import { addItemsAtPositions } from "../renderers/addOrRemoveItems";

let userActionData = {};
let limberGridMouseDownCancel = false;
let limberGridMouseDownTimerComplete = false;
let limberGridTouchStartCancel = false;
let limberGridTouchStartTimerComplete = false;
let limberGridMouseDownCheckTimeOutVariable;
let limberGridTouchStartCheckTimeOutVariable;
let addItemAllowCheckTimeOutVariable;
let cutSpaceAllowCheckTimeOutVariable;

export const onLimberGridMouseDown = function (event) {
	const e = getElements(this);
	const publicConstants = getPublicConstants(this);

	if (event.target.classList.contains("limber-grid-view")) {
		event.stopPropagation();
	} else {
		return;
	}

	if (event.which !== 1) {
		return;
	}

	limberGridMouseDownCancel = false;
	limberGridMouseDownTimerComplete = false;

	clearTimeout(limberGridMouseDownCheckTimeOutVariable);
	limberGridMouseDownCheckTimeOutVariable = setTimeout(
		onLimberGridMouseDownCheck.bind(this, event, event.offsetX, event.offsetY),
		publicConstants.MOUSE_DOWN_TIME
	);

	e.$limberGridView.addEventListener("mousemove", onLimberGridMouseMove);
	document.addEventListener("mouseup", onLimberGridMouseUp);
	document.addEventListener("contextmenu", onLimberGridContextMenu);
};

export const onLimberGridTouchStart = function (event) {
	const e = getElements(this);
	const publicConstants = getPublicConstants(this);

	if (event.target.classList.contains("limber-grid-view")) {
		event.stopPropagation();
	} else {
		return;
	}

	if (event.which !== 0) {
		return;
	}

	limberGridTouchStartCancel = false;
	limberGridTouchStartTimerComplete = false;

	clearTimeout(limberGridTouchStartCheckTimeOutVariable);
	limberGridTouchStartCheckTimeOutVariable = setTimeout(
		onLimberGridTouchStartCheck.bind(this, event),
		publicConstants.TOUCH_HOLD_TIME
	);

	e.$limberGridView.addEventListener("touchmove", onLimberGridTouchMove);
	document.addEventListener("touchend", onLimberGridTouchEnd);
	document.addEventListener("touchcancel", onLimberGridTouchCancel);
	document.addEventListener("contextmenu", onLimberGridTouchContextMenu);
	unInitializeItemTouchEvents();

	event.stopPropagation();
};

export const onLimberGridMouseDownCheck = function (event, offsetX, offsetY) {
	const e = getElements(this);
	const privateConstants = getPrivateConstants(this);

	if (limberGridMouseDownCancel === false) {
		limberGridMouseDownTimerComplete = true;

		var scrollTop = e.$limberGridView.scrollTop;
		var scrollLeft = e.$limberGridView.scrollLeft;
		var x = offsetX + scrollLeft - privateConstants.PADDING_LEFT;
		var y = offsetY + scrollTop - privateConstants.PADDING_TOP;

		userActionData = {
			type: "add",
			addPositionX: x,
			addPositionY: y,
		};

		e.$limberGridViewAddCutGuide.style.height = 1 + "px";
		e.$limberGridViewAddCutGuide.style.width = 1 + "px";
		e.$limberGridViewAddCutGuide.style.transform = `translate(${x}px, ${y}px)`;

		loadInitState();
	} else {
		// mouseDown cancel before TimerComplete
	}
};

export const onLimberGridTouchStartCheck = function (event) {
	const e = getElements(this);

	if (limberGridTouchStartCancel === false) {
		limberGridTouchStartTimerComplete = true;

		var touchPositionOnLimberGrid = calculateTouchPosOnLimberGrid(event);

		var x = touchPositionOnLimberGrid.x;
		var y = touchPositionOnLimberGrid.y;

		userActionData = {
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

		loadInitState();

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

export const onLimberGridMouseMove = function (event) {
	const e = getElements(this);
	const privateConstants = getPrivateConstants(this);
	const publicConstants = getPublicConstants(this);

	if (limberGridMouseDownTimerComplete === true) {
		e.$limberGridViewAddCutGuide.classList.remove(
			"limber-grid-view-add-cut-guide-allow",
			"limber-grid-view-add-cut-guide-disallow"
		);

		const scrollTop = e.$limberGridView.scrollTop;
		const scrollLeft = e.$limberGridView.scrollLeft;

		const x = userActionData.addPositionX;
		const y = userActionData.addPositionY;

		const newWidth =
			event.offsetX - x + scrollLeft - privateConstants.PADDING_LEFT;
		const newHeight =
			event.offsetY - y + scrollTop - privateConstants.PADDING_TOP;

		userActionData.newWidth = newWidth;
		userActionData.newHeight = newHeight;

		const yMousePosition = event.offsetY + scrollTop;
		adjustHeight(yMousePosition);

		if (newWidth > 0 && newHeight > 0) {
			e.$limberGridViewAddCutGuide.style.width = newWidth + "px";
			e.$limberGridViewAddCutGuide.style.height = newHeight + "px";
		}

		if (publicConstants.ADD_OR_CUTSPACE_TOGGLE === "ADD") {
			clearTimeout(addItemAllowCheckTimeOutVariable);
			addItemAllowCheckTimeOutVariable = setTimeout(
				addItemAllowCheckTimeOut.bind(
					this,
					userActionData.addPositionX,
					userActionData.addPositionY,
					newWidth,
					newHeight
				),
				publicConstants.DEMO_WAIT_TIME
			);
		} else if (publicConstants.ADD_OR_CUTSPACE_TOGGLE === "CUTSPACE") {
			clearTimeout(cutSpaceAllowCheckTimeOutVariable);
			cutSpaceAllowCheckTimeOutVariable = setTimeout(
				cutSpaceAllowCheckTimeOut.bind(
					this,
					userActionData.addPositionX,
					userActionData.addPositionY,
					newWidth,
					newHeight
				),
				publicConstants.DEMO_WAIT_TIME
			);
		}
	} else {
		clearTimeout(limberGridMouseDownCheckTimeOutVariable);

		e.$limberGridView.removeEventListener("mousemove", onLimberGridMouseMove);
		document.removeEventListener("mouseup", onLimberGridMouseUp);
		document.removeEventListener("contextmenu", onLimberGridContextMenu);
	}
	event.stopPropagation();
};

export const onLimberGridTouchMove = function (event) {
	const e = getElements(this);
	const privateConstants = getPrivateConstants(this);
	const publicConstants = getPublicConstants(this);

	if (limberGridTouchStartTimerComplete === true) {
		e.$limberGridViewAddCutGuide.classList.remove(
			"limber-grid-view-add-cut-guide-allow",
			"limber-grid-view-add-cut-guide-disallow"
		);

		const scrollTop = e.$limberGridView.scrollTop;
		const scrollLeft = e.$limberGridView.scrollLeft;

		const x = userActionData.addPositionX;
		const y = userActionData.addPositionY;

		const touchPositionOnLimberGrid = calculateTouchPosOnLimberGrid(event);

		const newWidth = touchPositionOnLimberGrid.x - x;
		const newHeight = touchPositionOnLimberGrid.y - y;

		if (touchPositionOnLimberGrid !== false) {
			userActionData.newWidth = newWidth;
			userActionData.newHeight = newHeight;

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
			adjustHeight(yTouchPosition);

			const programScrolled = adjustScroll(
				limberGridViewOnVisibleAreaY,
				limberGridViewHeightVisibleHeight
			);

			if (publicConstants.ADD_OR_CUTSPACE_TOGGLE === "ADD") {
				clearTimeout(addItemAllowCheckTimeOutVariable);
				if (programScrolled !== true) {
					addItemAllowCheckTimeOutVariable = setTimeout(
						addItemAllowCheckTimeOut.bind(
							this,
							userActionData.addPositionX,
							userActionData.addPositionY,
							newWidth,
							newHeight
						),
						publicConstants.DEMO_WAIT_TIME
					);
				}
			} else if (publicConstants.ADD_OR_CUTSPACE_TOGGLE === "CUTSPACE") {
				clearTimeout(cutSpaceAllowCheckTimeOutVariable);
				if (programScrolled !== true) {
					cutSpaceAllowCheckTimeOutVariable = setTimeout(
						cutSpaceAllowCheckTimeOut.bind(
							this,
							userActionData.addPositionX,
							userActionData.addPositionY,
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
		clearTimeout(limberGridTouchStartCheckTimeOutVariable);

		e.$limberGridView.removeEventListener("touchmove", onLimberGridTouchMove);
		document.removeEventListener("touchend", onLimberGridTouchEnd);
		document.removeEventListener("touchcancel", onLimberGridTouchCancel);
		document.removeEventListener("contextmenu", onLimberGridTouchContextMenu);
		initializeItemTouchEvents();
	}

	event.stopPropagation();
};

export const onLimberGridMouseUp = function (event) {
	const e = getElements(this);
	const publicConstants = getPublicConstants(this);
	const callbacks = getCallbacks(this);

	clearTimeout(addItemAllowCheckTimeOutVariable);
	clearTimeout(limberGridMouseDownCheckTimeOutVariable);
	var itemAddedFlag = false;
	if (limberGridMouseDownTimerComplete === true) {
		if (publicConstants.ADD_OR_CUTSPACE_TOGGLE === "ADD") {
			if (
				addItemAllowCheck(
					this,
					userActionData.addPositionX,
					userActionData.addPositionY,
					userActionData.newWidth,
					userActionData.newHeight
				)
			) {
				var item = {
					x: userActionData.addPositionX,
					y: userActionData.addPositionY,
					width: userActionData.newWidth,
					height: userActionData.newHeight,
				};

				var scrollTop = e.$limberGridView.scrollTop;

				var renderDetails = addItemsAtPositions(
					[item],
					false,
					"addItemInteractive"
				);
				itemAddedFlag = true;

				e.$limberGridView.scrollTop = scrollTop;
			}
		} else if (publicConstants.ADD_OR_CUTSPACE_TOGGLE === "CUTSPACE") {
			if (
				cutSpaceAllowCheck(
					this,
					userActionData.addPositionX,
					userActionData.addPositionY,
					userActionData.newWidth,
					userActionData.newHeight
				)
			) {
				shiftItemsUp(userActionData.addPositionY, userActionData.newHeight);
			}
		}
	} else {
		limberGridMouseDownCancel = true;
	}
	onLimberGridContextMenu();
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

export const onLimberGridTouchEnd = function (event) {
	const e = getElements(this);
	const publicConstants = getPublicConstants(this);
	const callbacks = getCallbacks(this);

	clearTimeout(addItemAllowCheckTimeOutVariable);
	clearTimeout(limberGridTouchStartCheckTimeOutVariable);
	var itemAddedFlag = false;
	if (limberGridTouchStartTimerComplete === true) {
		if (publicConstants.ADD_OR_CUTSPACE_TOGGLE === "ADD") {
			if (
				addItemAllowCheck(
					this,
					userActionData.addPositionX,
					userActionData.addPositionY,
					userActionData.newWidth,
					userActionData.newHeight
				)
			) {
				var item = {
					x: userActionData.addPositionX,
					y: userActionData.addPositionY,
					width: userActionData.newWidth,
					height: userActionData.newHeight,
				};

				var scrollTop = e.$limberGridView.scrollTop;

				var renderDetails = addItemsAtPositions(
					[item],
					false,
					"addItemInteractive"
				);
				itemAddedFlag = true;

				e.$limberGridView.scrollTop = scrollTop;
			}
		} else if (publicConstants.ADD_OR_CUTSPACE_TOGGLE === "CUTSPACE") {
			if (
				cutSpaceAllowCheck(
					this,
					userActionData.addPositionX,
					userActionData.addPositionY,
					userActionData.newWidth,
					userActionData.newHeight
				)
			) {
				shiftItemsUp(userActionData.addPositionY, userActionData.newHeight);
			}
		}
	} else {
		limberGridTouchStartCancel = true;
	}
	limberGridTouchStartTimerComplete = false;
	onLimberGridContextMenu();
	initializeItemTouchEvents();

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

export const onLimberGridTouchCancel = function (event) {
	clearTimeout(addItemAllowCheckTimeOutVariable);
	clearTimeout(limberGridTouchStartCheckTimeOutVariable);
	limberGridTouchStartCancel = false;
	limberGridTouchStartTimerComplete = false;
	onLimberGridContextMenu();
	initializeItemTouchEvents();

	event.stopPropagation();
};

export const onLimberGridTouchContextMenu = function (event) {
	event.preventDefault();
};

export const onLimberGridContextMenu = function (event) {
	const e = getElements(this);

	if (event) {
		event.preventDefault();
		event.stopPropagation();
	}

	unloadInitState();

	e.$limberGridView.removeEventListener("mousemove", onLimberGridMouseMove);
	document.removeEventListener("mouseup", onLimberGridMouseUp);
	document.removeEventListener("contextmenu", onLimberGridContextMenu);

	e.$limberGridView.removeEventListener("touchmove", onLimberGridTouchMove);
	document.removeEventListener("touchend", onLimberGridTouchEnd);
	document.removeEventListener("touchcancel", onLimberGridTouchCancel);
	document.removeEventListener("contextmenu", onLimberGridTouchContextMenu);
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
	const privateConstants = getPrivateConstants(this);
	const publicConstants = getPublicConstants(this);
	const pd = getPositionData(this);

	var tempPlane = {
		x: x,
		y: y,
		width: width,
		height: height,
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

	const len = pd.length;
	for (var i = 0; i < len; i++) {
		var iterItem = {
			x: pd[i].x - getMarginAtPoint(pd[i].x),
			y: pd[i].y - getMarginAtPoint(pd[i].y),
			width: pd[i].width + getMarginAtPoint(pd[i].x) + publicConstants.MARGIN,
			height: pd[i].height + getMarginAtPoint(pd[i].y) + publicConstants.MARGIN,
		};
		var isInside = isPlaneBInsidePlaneA_TouchingIsInside(iterItem, tempPlane);

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
	const publicConstants = getPublicConstants(context);

	var tempPlane = {
		x: 0,
		y: y - publicConstants.MARGIN / 2,
		width: privateConstants.WIDTH,
		height: height + publicConstants.MARGIN / 2,
	};

	if (typeof width !== "number" || typeof height !== "number") {
		return false;
	}

	const len = pd.length;
	for (var i = 0; i < len; i++) {
		var isInside = isPlaneBInsidePlaneA_TouchingIsInside(tempPlane, pd[i]);

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
