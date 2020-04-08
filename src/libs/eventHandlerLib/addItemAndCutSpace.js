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

import {
	getMarginAtPoint,
	adjustHeight,
	adjustScroll,
} from "../utils/essentials";
import {
	isPlaneBInsidePlaneA_TouchingIsInside,
	shiftItemsUp,
} from "../calc/calcUtils";
import publicConstants from "../../constants/publicConstants";
import privateConstants from "../../constants/privateConstants";
import { callbacks, positionData } from "../../variables/essentials";
import e from "../../variables/elements";
import { calculateTouchPosOnLimberGrid } from "./eventHandlerUtils.js";
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

export const onLimberGridMouseDown = function(event) {
	if (event.target.classList.contains("limberGridView")) {
		event.stopPropagation();
	} else {
		return;
	}

	if (event.which != 1) {
		return;
	}

	limberGridMouseDownCancel = false;
	limberGridMouseDownTimerComplete = false;

	clearTimeout(limberGridMouseDownCheckTimeOutVariable);
	limberGridMouseDownCheckTimeOutVariable = setTimeout(
		onLimberGridMouseDownCheck.bind(
			this,
			event,
			event.offsetX,
			event.offsetY
		),
		publicConstants.MOUSE_DOWN_TIME
	);

	e.$limberGridView[0].addEventListener("mousemove", onLimberGridMouseMove);
	document.addEventListener("mouseup", onLimberGridMouseUp);
	document.addEventListener("contextmenu", onLimberGridContextMenu);
};

export const onLimberGridTouchStart = function(event) {
	if (event.target.classList.contains("limberGridView")) {
		event.stopPropagation();
	} else {
		return;
	}

	limberGridTouchStartCancel = false;
	limberGridTouchStartTimerComplete = false;

	clearTimeout(limberGridTouchStartCheckTimeOutVariable);
	limberGridTouchStartCheckTimeOutVariable = setTimeout(
		onLimberGridTouchStartCheck.bind(this, event),
		publicConstants.TOUCH_HOLD_TIME
	);

	e.$limberGridView[0].addEventListener("touchmove", onLimberGridTouchMove);
	document.addEventListener("touchend", onLimberGridTouchEnd);
	document.addEventListener("touchcancel", onLimberGridTouchCancel);
	document.addEventListener("contextmenu", onLimberGridTouchContextMenu);
	unInitializeItemTouchEvents();

	event.stopPropagation();
};

export const onLimberGridMouseDownCheck = function(event, offsetX, offsetY) {
	if (limberGridMouseDownCancel == false) {
		limberGridMouseDownTimerComplete = true;

		e.$body[0].classList.add(
			"limberGridViewBodyTagStateElementDraggingOrResizing",
			"limberGridViewBodyTagStateElementAdding"
		);
		var length_0 = e.$limberGridViewItems.length;
		for (var i = 0; i < length_0; i++) {
			e.$limberGridViewItems[i].classList.add(
				"limberGridViewItemResizingState"
			);
		}

		var length_0 = e.$limberGridViewGridPseudoItems.length;
		for (var i = 0; i < length_0; i++) {
			e.$limberGridViewGridPseudoItems[i].classList.add(
				"limberGridViewGridPseudoItemResizingState"
			);
		}

		var scrollTop = e.$limberGridView[0].scrollTop;
		var scrollLeft = e.$limberGridView[0].scrollLeft;
		var x = offsetX + scrollLeft - privateConstants.PADDING_LEFT;
		var y = offsetY + scrollTop - privateConstants.PADDING_TOP;

		userActionData = {
			type: "add",
			addPositionX: x,
			addPositionY: y,
		};

		e.$limberGridViewAddItemGuide[0].style.height = 1 + "px";
		e.$limberGridViewAddItemGuide[0].style.width = 1 + "px";
		e.$limberGridViewAddItemGuide[0].style.transform =
			"translate(" + x + "px, " + y + "px)";

		if (publicConstants.ADD_OR_CUTSPACE_TOGGLE == "ADD") {
			e.$limberGridViewAddItemGuide[0].classList.add(
				"limberGridViewAddItemGuideActive"
			);
		} else if (publicConstants.ADD_OR_CUTSPACE_TOGGLE == "CUTSPACE") {
			e.$limberGridViewAddItemGuide[0].classList.add(
				"limberGridViewAddItemGuideActive",
				"limberGridViewAddItemGuideCutMode"
			);
		}

		e.$limberGridViewHeightAdjustGuide[0].style.height = 0 + "px";
		e.$limberGridViewHeightAdjustGuide[0].classList.add(
			"limberGridViewHeightAdjustGuideActive"
		);
	} else {
		// mouseDown cancel before TimerComplete
	}
};

export const onLimberGridTouchStartCheck = function(event) {
	if (limberGridTouchStartCancel == false) {
		limberGridTouchStartTimerComplete = true;

		e.$body[0].classList.add(
			"limberGridViewBodyTagStateElementDraggingOrResizing",
			"limberGridViewBodyTagStateElementAdding"
		);
		var length_0 = e.$limberGridViewItems.length;
		for (var i = 0; i < length_0; i++) {
			e.$limberGridViewItems[i].classList.add(
				"limberGridViewItemResizingState"
			);
		}

		var length_0 = e.$limberGridViewGridPseudoItems.length;
		for (var i = 0; i < length_0; i++) {
			e.$limberGridViewGridPseudoItems[i].classList.add(
				"limberGridViewGridPseudoItemResizingState"
			);
		}

		var touchPositionOnLimberGrid = calculateTouchPosOnLimberGrid(event);

		var x = touchPositionOnLimberGrid.x;
		var y = touchPositionOnLimberGrid.y;

		userActionData = {
			type: "add",
			addPositionX: x,
			addPositionY: y,
		};

		var removeAddItemOnTouchHoldGuideFunction = function() {
			e.$limberGridViewAddItemOnTouchHoldGuide[0].classList.remove(
				"limberGridViewAddItemOnTouchHoldGuideActive"
			);
		};
		setTimeout(removeAddItemOnTouchHoldGuideFunction.bind(this), 500);

		e.$limberGridViewAddItemGuide[0].style.height = 1 + "px";
		e.$limberGridViewAddItemGuide[0].style.width = 1 + "px";
		e.$limberGridViewAddItemGuide[0].style.transform =
			"translate(" + x + "px, " + y + "px)";

		if (publicConstants.ADD_OR_CUTSPACE_TOGGLE == "ADD") {
			e.$limberGridViewAddItemGuide[0].classList.add(
				"limberGridViewAddItemGuideActive"
			);
		} else if (publicConstants.ADD_OR_CUTSPACE_TOGGLE == "CUTSPACE") {
			e.$limberGridViewAddItemGuide[0].classList.add(
				"limberGridViewAddItemGuideActive",
				"limberGridViewAddItemGuideCutMode"
			);
		}

		e.$limberGridViewHeightAdjustGuide[0].style.height = 0 + "px";
		e.$limberGridViewHeightAdjustGuide[0].classList.add(
			"limberGridViewHeightAdjustGuideActive"
		);

		insertAddItemOnTouchHoldGuideStyles.call(this, x, y);
		e.$limberGridViewAddItemOnTouchHoldGuide[0].style.transform =
			"translate(" + x + "px, " + y + "px)";
		e.$limberGridViewAddItemOnTouchHoldGuide[0].classList.add(
			"limberGridViewAddItemOnTouchHoldGuideActive"
		);

		event.preventDefault();
	} else {
		// touchstart cancel before TimerComplete
	}
};

export const onLimberGridMouseMove = function(event) {
	if (limberGridMouseDownTimerComplete == true) {
		if (
			e.$limberGridViewAddItemGuide[0].classList.contains(
				"limberGridViewAddItemGuideAddAllow"
			) ||
			e.$limberGridViewAddItemGuide[0].classList.contains(
				"limberGridViewAddItemGuideAddDisallow"
			)
		) {
			e.$limberGridViewAddItemGuide[0].classList.remove(
				"limberGridViewAddItemGuideAddAllow",
				"limberGridViewAddItemGuideAddDisallow"
			);
		}

		var scrollTop = e.$limberGridView[0].scrollTop;
		var scrollLeft = e.$limberGridView[0].scrollLeft;

		var x = userActionData.addPositionX;
		var y = userActionData.addPositionY;

		var newWidth =
			event.offsetX - x + scrollLeft - privateConstants.PADDING_LEFT;
		var newHeight =
			event.offsetY - y + scrollTop - privateConstants.PADDING_TOP;

		userActionData.newWidth = newWidth;
		userActionData.newHeight = newHeight;

		var yMousePosition = event.offsetY + scrollTop;
		adjustHeight.call(this, yMousePosition);

		if (newWidth > 0 && newHeight > 0) {
			e.$limberGridViewAddItemGuide[0].style.width = newWidth + "px";
			e.$limberGridViewAddItemGuide[0].style.height = newHeight + "px";
		}

		if (publicConstants.ADD_OR_CUTSPACE_TOGGLE == "ADD") {
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
		} else if (publicConstants.ADD_OR_CUTSPACE_TOGGLE == "CUTSPACE") {
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
		e.$limberGridView[0].removeEventListener(
			"mousemove",
			onLimberGridMouseMove
		);
		document.removeEventListener("mouseup", onLimberGridMouseUp);
		document.removeEventListener("contextmenu", onLimberGridContextMenu);
	}
	event.stopPropagation();
};

export const onLimberGridTouchMove = function(event) {
	if (limberGridTouchStartTimerComplete == true) {
		console.log("limberGridTouchStartTimerComplete");
		if (
			e.$limberGridViewAddItemGuide[0].classList.contains(
				"limberGridViewAddItemGuideAddAllow"
			) ||
			e.$limberGridViewAddItemGuide[0].classList.contains(
				"limberGridViewAddItemGuideAddDisallow"
			)
		) {
			e.$limberGridViewAddItemGuide[0].classList.remove(
				"limberGridViewAddItemGuideAddAllow",
				"limberGridViewAddItemGuideAddDisallow"
			);
		}

		var scrollTop = e.$limberGridView[0].scrollTop;
		var scrollLeft = e.$limberGridView[0].scrollLeft;

		var x = userActionData.addPositionX;
		var y = userActionData.addPositionY;

		var touchPositionOnLimberGrid = calculateTouchPosOnLimberGrid(event);

		if (touchPositionOnLimberGrid != false) {
			var newWidth = touchPositionOnLimberGrid.x - x;
			var newHeight = touchPositionOnLimberGrid.y - y;

			userActionData.newWidth = newWidth;
			userActionData.newHeight = newHeight;

			if (newWidth > 0 && newHeight > 0) {
				e.$limberGridViewAddItemGuide[0].style.width = newWidth + "px";
				e.$limberGridViewAddItemGuide[0].style.height =
					newHeight + "px";
			}
		}

		if (touchPositionOnLimberGrid != false) {
			var limberGridViewBoundingClientRect = e.$limberGridView[0].getBoundingClientRect();
			var limberGridViewWidthVisibleWidth =
				e.$limberGridView[0].offsetWidth -
				limberGridViewBoundingClientRect.left;
			var limberGridViewHeightVisibleHeight =
				e.$limberGridView[0].offsetHeight -
				limberGridViewBoundingClientRect.top;
			var limberGridViewOnVisibleAreaX =
				touchPositionOnLimberGrid.x +
				privateConstants.PADDING_LEFT -
				scrollLeft;
			var limberGridViewOnVisibleAreaY =
				touchPositionOnLimberGrid.y +
				privateConstants.PADDING_TOP -
				scrollTop;

			var yTouchPosition = touchPositionOnLimberGrid.y;
			adjustHeight.call(this, yTouchPosition);

			var programScrolled = adjustScroll.call(
				this,
				limberGridViewOnVisibleAreaY,
				limberGridViewHeightVisibleHeight
			);
		}

		if (publicConstants.ADD_OR_CUTSPACE_TOGGLE == "ADD") {
			clearTimeout(addItemAllowCheckTimeOutVariable);
			if (programScrolled != true) {
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
		} else if (publicConstants.ADD_OR_CUTSPACE_TOGGLE == "CUTSPACE") {
			clearTimeout(cutSpaceAllowCheckTimeOutVariable);
			if (programScrolled != true) {
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
		event.preventDefault();
	} else {
		clearTimeout(limberGridTouchStartCheckTimeOutVariable);
		e.$limberGridView[0].removeEventListener(
			"touchmove",
			onLimberGridTouchMove
		);
		document.removeEventListener("touchend", onLimberGridTouchEnd);
		document.removeEventListener("touchcancel", onLimberGridTouchCancel);
		document.removeEventListener(
			"contextmenu",
			onLimberGridTouchContextMenu
		);
		initializeItemTouchEvents();
	}

	event.stopPropagation();
};

export const onLimberGridMouseUp = function(event) {
	clearTimeout(addItemAllowCheckTimeOutVariable);
	clearTimeout(limberGridMouseDownCheckTimeOutVariable);
	var itemAddedFlag = false;
	if (limberGridMouseDownTimerComplete == true) {
		if (publicConstants.ADD_OR_CUTSPACE_TOGGLE == "ADD") {
			if (
				addItemAllowCheck.call(
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

				var scrollTop = e.$limberGridView[0].scrollTop;

				var renderDetails = addItemsAtPositions(
					[item],
					false,
					"addItemInteractive"
				);
				itemAddedFlag = true;

				e.$limberGridView[0].scrollTop = scrollTop;
			}
		} else if (publicConstants.ADD_OR_CUTSPACE_TOGGLE == "CUTSPACE") {
			if (
				cutSpaceAllowCheck.call(
					this,
					userActionData.addPositionX,
					userActionData.addPositionY,
					userActionData.newWidth,
					userActionData.newHeight
				)
			) {
				shiftItemsUp.call(
					this,
					userActionData.addPositionY,
					userActionData.newHeight
				);
			}
		}
	} else {
		limberGridMouseDownCancel = true;
	}
	onLimberGridContextMenu.call(this);
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

export const onLimberGridTouchEnd = function(event) {
	clearTimeout(addItemAllowCheckTimeOutVariable);
	clearTimeout(limberGridTouchStartCheckTimeOutVariable);
	var itemAddedFlag = false;
	if (limberGridTouchStartTimerComplete == true) {
		if (publicConstants.ADD_OR_CUTSPACE_TOGGLE == "ADD") {
			if (
				addItemAllowCheck.call(
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

				var scrollTop = e.$limberGridView[0].scrollTop;

				var renderDetails = addItemsAtPositions(
					[item],
					false,
					"addItemInteractive"
				);
				itemAddedFlag = true;

				e.$limberGridView[0].scrollTop = scrollTop;

				limberGridTouchStartTimerComplete = false;
			}
		} else if (publicConstants.ADD_OR_CUTSPACE_TOGGLE == "CUTSPACE") {
			if (
				cutSpaceAllowCheck.call(
					this,
					userActionData.addPositionX,
					userActionData.addPositionY,
					userActionData.newWidth,
					userActionData.newHeight
				)
			) {
				shiftItemsUp.call(
					this,
					userActionData.addPositionY,
					userActionData.newHeight
				);
			}
		}
	} else {
		limberGridTouchStartCancel = true;
	}
	limberGridTouchStartTimerComplete = false;
	onLimberGridContextMenu.call(this);
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

export const onLimberGridTouchCancel = function(event) {
	clearTimeout(addItemAllowCheckTimeOutVariable);
	clearTimeout(limberGridTouchStartCheckTimeOutVariable);
	limberGridTouchStartCancel = false;
	limberGridTouchStartTimerComplete = false;
	onLimberGridContextMenu.call(this);
	initializeItemTouchEvents();

	event.stopPropagation();
};

export const onLimberGridTouchContextMenu = function(event) {
	event.preventDefault();
};

export const onLimberGridContextMenu = function(event) {
	if (event != undefined) {
		event.preventDefault();
		event.stopPropagation();
	}

	e.$limberGridViewAddItemGuide[0].classList.remove(
		"limberGridViewAddItemGuideActive",
		"limberGridViewAddItemGuideCutMode",
		"limberGridViewAddItemGuideAddAllow",
		"limberGridViewAddItemGuideAddDisallow"
	);
	e.$limberGridViewHeightAdjustGuide[0].classList.remove(
		"limberGridViewHeightAdjustGuideActive"
	);
	e.$limberGridViewHeightAdjustGuide[0].style.height = 0 + "px";

	e.$body[0].classList.remove(
		"limberGridViewBodyTagStateElementDraggingOrResizing",
		"limberGridViewBodyTagStateElementAdding"
	);
	var length_0 = e.$limberGridViewItems.length;
	for (var i = 0; i < length_0; i++) {
		e.$limberGridViewItems[i].classList.remove(
			"limberGridViewItemResizingState"
		);
	}

	var length_0 = e.$limberGridViewGridPseudoItems.length;
	for (var i = 0; i < length_0; i++) {
		e.$limberGridViewGridPseudoItems[i].classList.remove(
			"limberGridViewGridPseudoItemResizingState"
		);
	}

	e.$limberGridViewAddItemOnTouchHoldGuide[0].classList.remove(
		"limberGridViewAddItemOnTouchHoldGuideActive"
	);

	e.$limberGridView[0].removeEventListener(
		"mousemove",
		onLimberGridMouseMove
	);
	document.removeEventListener("mouseup", onLimberGridMouseUp);
	document.removeEventListener("contextmenu", onLimberGridContextMenu);

	e.$limberGridView[0].removeEventListener(
		"touchmove",
		onLimberGridTouchMove
	);
	document.removeEventListener("touchend", onLimberGridTouchEnd);
	document.removeEventListener("touchcancel", onLimberGridTouchCancel);
	document.removeEventListener("contextmenu", onLimberGridTouchContextMenu);
};

export const addItemAllowCheckTimeOut = function(x, y, width, height) {
	if (addItemAllowCheck.call(this, x, y, width, height) == false) {
		e.$limberGridViewAddItemGuide[0].classList.remove(
			"limberGridViewAddItemGuideAddAllow"
		);
		e.$limberGridViewAddItemGuide[0].classList.add(
			"limberGridViewAddItemGuideAddDisallow"
		);
	} else {
		e.$limberGridViewAddItemGuide[0].classList.remove(
			"limberGridViewAddItemGuideAddDisallow"
		);
		e.$limberGridViewAddItemGuide[0].classList.add(
			"limberGridViewAddItemGuideAddAllow"
		);
	}
};

export const addItemAllowCheck = function(x, y, width, height) {
	var tempPlane = {
		x: x,
		y: y,
		width: width,
		height: height,
	};

	if (x < 0 || y < 0) {
		return false;
	}

	if (typeof width != "number" || typeof height != "number") {
		return false;
	}

	if (x + width > privateConstants.WIDTH) {
		return false;
	}

	if (width < 50 || height < 50) {
		return false;
	}

	var length_0 = positionData.length;
	for (var i = 0; i < length_0; i++) {
		var iterItem = {
			x:
				positionData[i].x -
				getMarginAtPoint.call(this, positionData[i].x),
			y:
				positionData[i].y -
				getMarginAtPoint.call(this, positionData[i].y),
			width:
				positionData[i].width +
				getMarginAtPoint.call(this, positionData[i].x) +
				publicConstants.MARGIN,
			height:
				positionData[i].height +
				getMarginAtPoint.call(this, positionData[i].y) +
				publicConstants.MARGIN,
		};
		var isInside = isPlaneBInsidePlaneA_TouchingIsInside(
			iterItem,
			tempPlane
		);

		if (isInside) {
			return false;
		}
	}
	return true;
};

export const cutSpaceAllowCheckTimeOut = function(x, y, width, height) {
	if (cutSpaceAllowCheck.call(this, x, y, width, height) == false) {
		e.$limberGridViewAddItemGuide[0].classList.remove(
			"limberGridViewAddItemGuideAddAllow"
		);
		e.$limberGridViewAddItemGuide[0].classList.add(
			"limberGridViewAddItemGuideAddDisallow"
		);
	} else {
		e.$limberGridViewAddItemGuide[0].classList.remove(
			"limberGridViewAddItemGuideAddDisallow"
		);
		e.$limberGridViewAddItemGuide[0].classList.add(
			"limberGridViewAddItemGuideAddAllow"
		);
	}
};

export const cutSpaceAllowCheck = function(x, y, width, height) {
	var tempPlane = {
		x: 0,
		y: y - publicConstants.MARGIN / 2,
		width: privateConstants.WIDTH,
		height: height + publicConstants.MARGIN / 2,
	};

	if (typeof width != "number" || typeof height != "number") {
		return false;
	}

	var length_0 = positionData.length;
	for (var i = 0; i < length_0; i++) {
		var isInside = isPlaneBInsidePlaneA_TouchingIsInside(
			tempPlane,
			positionData[i]
		);

		if (isInside) {
			return false;
		}
	}
	return true;
};

export const insertAddItemOnTouchHoldGuideStyles = function(x, y) {
	var ripple = [];
	ripple[0] = "@keyframes limberGridViewAddItemOnTouchHoldRipple {";
	ripple[1] = "0% {";
	ripple[2] =
		"transform: translate(" +
		(x - 5) +
		"px, " +
		(y - 5) +
		"px) scale(0, 0);";
	ripple[3] = "opacity: 1;";
	ripple[4] = "}";
	ripple[5] = "20% {";
	ripple[6] =
		"transform: translate(" +
		(x - 5) +
		"px, " +
		(y - 5) +
		"px) scale(25, 25);";
	ripple[7] = "opacity: 1;";
	ripple[8] = "}";
	ripple[9] = "100% {";
	ripple[10] =
		"transform: translate(" +
		(x - 5) +
		"px, " +
		(y - 5) +
		"px) scale(50, 50);";
	ripple[11] = "opacity: 0;";
	ripple[12] = "}";
	ripple[13] = "}";
	var rippleString = ripple.join("");
	e.$limberGridViewStyle[0].innerHTML = rippleString;
};
