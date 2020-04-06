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

import { adjustHeight, adjustScroll } from "../utils/utils";
import { getMarginAtPoint } from "../utils/essentials";
import {
	isPlaneBInsidePlaneA_TouchingIsInside,
	shiftItemsUp,
} from "../calc/calcUtils";
import publicConstants from "../../constants/publicConstants";
import privateConstants from "../../constants/privateConstants";
import { callbacks, positionData } from "../../variables/essentials";

export const onLimberGridMouseDown = function(event) {
	if (event.target.classList.contains("limberGridView")) {
		event.stopPropagation();
	} else {
		return;
	}

	if (event.which != 1) {
		return;
	}

	this.limberGridMouseDownCancel = false;
	this.limberGridMouseDownTimerComplete = false;

	clearTimeout(this.limberGridMouseDownCheckTimeOutVariable);
	this.limberGridMouseDownCheckTimeOutVariable = setTimeout(
		onLimberGridMouseDownCheck.bind(
			this,
			event,
			event.offsetX,
			event.offsetY
		),
		publicConstants.MOUSE_DOWN_TIME
	);

	this.$limberGridView[0].addEventListener(
		"mousemove",
		this.onLimberGridMouseMoveBindedFunctionVariable
	);
	document.addEventListener(
		"mouseup",
		this.onLimberGridMouseUpBindedFunctionVariable
	);
	document.addEventListener(
		"contextmenu",
		this.onLimberGridContextMenuBindedFunctionVariable
	);
};

export const onLimberGridTouchStart = function(event) {
	if (event.target.classList.contains("limberGridView")) {
		event.stopPropagation();
	} else {
		return;
	}

	this.limberGridTouchStartCancel = false;
	this.limberGridTouchStartTimerComplete = false;

	clearTimeout(this.limberGridTouchStartCheckTimeOutVariable);
	this.limberGridTouchStartCheckTimeOutVariable = setTimeout(
		onLimberGridTouchStartCheck.bind(this, event),
		publicConstants.TOUCH_HOLD_TIME
	);

	this.$limberGridView[0].addEventListener(
		"touchmove",
		this.onLimberGridTouchMoveBindedFunctionVariable
	);
	document.addEventListener(
		"touchend",
		this.onLimberGridTouchEndBindedFunctionVariable
	);
	document.addEventListener(
		"touchcancel",
		this.onLimberGridTouchCancelBindedFunctionVariable
	);
	document.addEventListener(
		"contextmenu",
		this.onLimberGridTouchContextMenuBindedFunctionVariable
	);
	this.unInitializeItemTouchEvents();

	event.stopPropagation();
};

export const onLimberGridMouseDownCheck = function(event, offsetX, offsetY) {
	if (this.limberGridMouseDownCancel == false) {
		this.limberGridMouseDownTimerComplete = true;

		this.$body[0].classList.add(
			"limberGridViewBodyTagStateElementDraggingOrResizing",
			"limberGridViewBodyTagStateElementAdding"
		);
		var length_0 = this.$limberGridViewItems.length;
		for (var i = 0; i < length_0; i++) {
			this.$limberGridViewItems[i].classList.add(
				"limberGridViewItemResizingState"
			);
		}

		var length_0 = this.$limberGridViewGridPseudoItems.length;
		for (var i = 0; i < length_0; i++) {
			this.$limberGridViewGridPseudoItems[i].classList.add(
				"limberGridViewGridPseudoItemResizingState"
			);
		}

		var scrollTop = this.$limberGridView[0].scrollTop;
		var scrollLeft = this.$limberGridView[0].scrollLeft;
		var x = offsetX + scrollLeft - this.PADDING_LEFT;
		var y = offsetY + scrollTop - this.PADDING_TOP;

		this.userActionData = {
			type: "add",
			addPositionX: x,
			addPositionY: y,
		};

		this.$limberGridViewAddItemGuide[0].style.height = 1 + "px";
		this.$limberGridViewAddItemGuide[0].style.width = 1 + "px";
		this.$limberGridViewAddItemGuide[0].style.transform =
			"translate(" + x + "px, " + y + "px)";

		if (publicConstants.ADD_OR_CUTSPACE_TOGGLE == "ADD") {
			this.$limberGridViewAddItemGuide[0].classList.add(
				"limberGridViewAddItemGuideActive"
			);
		} else if (publicConstants.ADD_OR_CUTSPACE_TOGGLE == "CUTSPACE") {
			this.$limberGridViewAddItemGuide[0].classList.add(
				"limberGridViewAddItemGuideActive",
				"limberGridViewAddItemGuideCutMode"
			);
		}

		this.$limberGridViewHeightAdjustGuide[0].style.height = 0 + "px";
		this.$limberGridViewHeightAdjustGuide[0].classList.add(
			"limberGridViewHeightAdjustGuideActive"
		);
	} else {
		// mouseDown cancel before TimerComplete
	}
};

export const onLimberGridTouchStartCheck = function(event) {
	if (this.limberGridTouchStartCancel == false) {
		this.limberGridTouchStartTimerComplete = true;

		this.$body[0].classList.add(
			"limberGridViewBodyTagStateElementDraggingOrResizing",
			"limberGridViewBodyTagStateElementAdding"
		);
		var length_0 = this.$limberGridViewItems.length;
		for (var i = 0; i < length_0; i++) {
			this.$limberGridViewItems[i].classList.add(
				"limberGridViewItemResizingState"
			);
		}

		var length_0 = this.$limberGridViewGridPseudoItems.length;
		for (var i = 0; i < length_0; i++) {
			this.$limberGridViewGridPseudoItems[i].classList.add(
				"limberGridViewGridPseudoItemResizingState"
			);
		}

		var touchPositionOnLimberGrid = this.calculateTouchPosOnLimberGrid(
			event
		);

		var x = touchPositionOnLimberGrid.x;
		var y = touchPositionOnLimberGrid.y;

		this.userActionData = {
			type: "add",
			addPositionX: x,
			addPositionY: y,
		};

		var removeAddItemOnTouchHoldGuideFunction = function() {
			this.$limberGridViewAddItemOnTouchHoldGuide[0].classList.remove(
				"limberGridViewAddItemOnTouchHoldGuideActive"
			);
		};
		setTimeout(removeAddItemOnTouchHoldGuideFunction.bind(this), 500);

		this.$limberGridViewAddItemGuide[0].style.height = 1 + "px";
		this.$limberGridViewAddItemGuide[0].style.width = 1 + "px";
		this.$limberGridViewAddItemGuide[0].style.transform =
			"translate(" + x + "px, " + y + "px)";

		if (publicConstants.ADD_OR_CUTSPACE_TOGGLE == "ADD") {
			this.$limberGridViewAddItemGuide[0].classList.add(
				"limberGridViewAddItemGuideActive"
			);
		} else if (publicConstants.ADD_OR_CUTSPACE_TOGGLE == "CUTSPACE") {
			this.$limberGridViewAddItemGuide[0].classList.add(
				"limberGridViewAddItemGuideActive",
				"limberGridViewAddItemGuideCutMode"
			);
		}

		this.$limberGridViewHeightAdjustGuide[0].style.height = 0 + "px";
		this.$limberGridViewHeightAdjustGuide[0].classList.add(
			"limberGridViewHeightAdjustGuideActive"
		);

		insertAddItemOnTouchHoldGuideStyles.call(this, x, y);
		this.$limberGridViewAddItemOnTouchHoldGuide[0].style.transform =
			"translate(" + x + "px, " + y + "px)";
		this.$limberGridViewAddItemOnTouchHoldGuide[0].classList.add(
			"limberGridViewAddItemOnTouchHoldGuideActive"
		);

		event.preventDefault();
	} else {
		// touchstart cancel before TimerComplete
	}
};

export const onLimberGridMouseMove = function(event) {
	if (this.limberGridMouseDownTimerComplete == true) {
		if (
			this.$limberGridViewAddItemGuide[0].classList.contains(
				"limberGridViewAddItemGuideAddAllow"
			) ||
			this.$limberGridViewAddItemGuide[0].classList.contains(
				"limberGridViewAddItemGuideAddDisallow"
			)
		) {
			this.$limberGridViewAddItemGuide[0].classList.remove(
				"limberGridViewAddItemGuideAddAllow",
				"limberGridViewAddItemGuideAddDisallow"
			);
		}

		var scrollTop = this.$limberGridView[0].scrollTop;
		var scrollLeft = this.$limberGridView[0].scrollLeft;

		var x = this.userActionData.addPositionX;
		var y = this.userActionData.addPositionY;

		var newWidth = event.offsetX - x + scrollLeft - this.PADDING_LEFT;
		var newHeight = event.offsetY - y + scrollTop - this.PADDING_TOP;

		this.userActionData.newWidth = newWidth;
		this.userActionData.newHeight = newHeight;

		var yMousePosition = event.offsetY + scrollTop;
		adjustHeight.call(this, yMousePosition);

		if (newWidth > 0 && newHeight > 0) {
			this.$limberGridViewAddItemGuide[0].style.width = newWidth + "px";
			this.$limberGridViewAddItemGuide[0].style.height = newHeight + "px";
		}

		if (publicConstants.ADD_OR_CUTSPACE_TOGGLE == "ADD") {
			clearTimeout(this.addItemAllowCheckTimeOutVariable);
			this.addItemAllowCheckTimeOutVariable = setTimeout(
				addItemAllowCheckTimeOut.bind(
					this,
					this.userActionData.addPositionX,
					this.userActionData.addPositionY,
					newWidth,
					newHeight
				),
				publicConstants.DEMO_WAIT_TIME
			);
		} else if (publicConstants.ADD_OR_CUTSPACE_TOGGLE == "CUTSPACE") {
			clearTimeout(this.cutSpaceAllowCheckTimeOutVariable);
			this.cutSpaceAllowCheckTimeOutVariable = setTimeout(
				cutSpaceAllowCheckTimeOut.bind(
					this,
					this.userActionData.addPositionX,
					this.userActionData.addPositionY,
					newWidth,
					newHeight
				),
				publicConstants.DEMO_WAIT_TIME
			);
		}
	} else {
		clearTimeout(this.limberGridMouseDownCheckTimeOutVariable);
		this.$limberGridView[0].removeEventListener(
			"mousemove",
			this.onLimberGridMouseMoveBindedFunctionVariable
		);
		document.removeEventListener(
			"mouseup",
			this.onLimberGridMouseUpBindedFunctionVariable
		);
		document.removeEventListener(
			"contextmenu",
			this.onLimberGridContextMenuBindedFunctionVariable
		);
	}
	event.stopPropagation();
};

export const onLimberGridTouchMove = function(event) {
	if (this.limberGridTouchStartTimerComplete == true) {
		console.log("limberGridTouchStartTimerComplete");
		if (
			this.$limberGridViewAddItemGuide[0].classList.contains(
				"limberGridViewAddItemGuideAddAllow"
			) ||
			this.$limberGridViewAddItemGuide[0].classList.contains(
				"limberGridViewAddItemGuideAddDisallow"
			)
		) {
			this.$limberGridViewAddItemGuide[0].classList.remove(
				"limberGridViewAddItemGuideAddAllow",
				"limberGridViewAddItemGuideAddDisallow"
			);
		}

		var scrollTop = this.$limberGridView[0].scrollTop;
		var scrollLeft = this.$limberGridView[0].scrollLeft;

		var x = this.userActionData.addPositionX;
		var y = this.userActionData.addPositionY;

		var touchPositionOnLimberGrid = this.calculateTouchPosOnLimberGrid(
			event
		);

		if (touchPositionOnLimberGrid != false) {
			var newWidth = touchPositionOnLimberGrid.x - x;
			var newHeight = touchPositionOnLimberGrid.y - y;

			this.userActionData.newWidth = newWidth;
			this.userActionData.newHeight = newHeight;

			if (newWidth > 0 && newHeight > 0) {
				this.$limberGridViewAddItemGuide[0].style.width =
					newWidth + "px";
				this.$limberGridViewAddItemGuide[0].style.height =
					newHeight + "px";
			}
		}

		if (touchPositionOnLimberGrid != false) {
			var limberGridViewBoundingClientRect = this.$limberGridView[0].getBoundingClientRect();
			var limberGridViewWidthVisibleWidth =
				this.$limberGridView[0].offsetWidth -
				limberGridViewBoundingClientRect.left;
			var limberGridViewHeightVisibleHeight =
				this.$limberGridView[0].offsetHeight -
				limberGridViewBoundingClientRect.top;
			var limberGridViewOnVisibleAreaX =
				touchPositionOnLimberGrid.x + this.PADDING_LEFT - scrollLeft;
			var limberGridViewOnVisibleAreaY =
				touchPositionOnLimberGrid.y + this.PADDING_TOP - scrollTop;

			var yTouchPosition = touchPositionOnLimberGrid.y;
			adjustHeight.call(this, yTouchPosition);

			var programScrolled = adjustScroll.call(
				this,
				limberGridViewOnVisibleAreaY,
				limberGridViewHeightVisibleHeight
			);
		}

		if (publicConstants.ADD_OR_CUTSPACE_TOGGLE == "ADD") {
			clearTimeout(this.addItemAllowCheckTimeOutVariable);
			if (programScrolled != true) {
				this.addItemAllowCheckTimeOutVariable = setTimeout(
					addItemAllowCheckTimeOut.bind(
						this,
						this.userActionData.addPositionX,
						this.userActionData.addPositionY,
						newWidth,
						newHeight
					),
					publicConstants.DEMO_WAIT_TIME
				);
			}
		} else if (publicConstants.ADD_OR_CUTSPACE_TOGGLE == "CUTSPACE") {
			clearTimeout(this.cutSpaceAllowCheckTimeOutVariable);
			if (programScrolled != true) {
				this.cutSpaceAllowCheckTimeOutVariable = setTimeout(
					cutSpaceAllowCheckTimeOut.bind(
						this,
						this.userActionData.addPositionX,
						this.userActionData.addPositionY,
						newWidth,
						newHeight
					),
					publicConstants.DEMO_WAIT_TIME
				);
			}
		}
		event.preventDefault();
	} else {
		clearTimeout(this.limberGridTouchStartCheckTimeOutVariable);
		this.$limberGridView[0].removeEventListener(
			"touchmove",
			this.onLimberGridTouchMoveBindedFunctionVariable
		);
		document.removeEventListener(
			"touchend",
			this.onLimberGridTouchEndBindedFunctionVariable
		);
		document.removeEventListener(
			"touchcancel",
			this.onLimberGridTouchCancelBindedFunctionVariable
		);
		document.removeEventListener(
			"contextmenu",
			this.onLimberGridTouchContextMenuBindedFunctionVariable
		);
		this.initializeItemTouchEvents();
	}

	event.stopPropagation();
};

export const onLimberGridMouseUp = function(event) {
	clearTimeout(this.addItemAllowCheckTimeOutVariable);
	clearTimeout(this.limberGridMouseDownCheckTimeOutVariable);
	var itemAddedFlag = false;
	if (this.limberGridMouseDownTimerComplete == true) {
		if (publicConstants.ADD_OR_CUTSPACE_TOGGLE == "ADD") {
			if (
				addItemAllowCheck.call(
					this,
					this.userActionData.addPositionX,
					this.userActionData.addPositionY,
					this.userActionData.newWidth,
					this.userActionData.newHeight
				)
			) {
				var item = {
					x: this.userActionData.addPositionX,
					y: this.userActionData.addPositionY,
					width: this.userActionData.newWidth,
					height: this.userActionData.newHeight,
				};

				var scrollTop = this.$limberGridView[0].scrollTop;

				var renderDetails = this.addItemsAtPositions(
					[item],
					false,
					"addItemInteractive"
				);
				itemAddedFlag = true;

				this.$limberGridView[0].scrollTop = scrollTop;
			}
		} else if (publicConstants.ADD_OR_CUTSPACE_TOGGLE == "CUTSPACE") {
			if (
				cutSpaceAllowCheck.call(
					this,
					this.userActionData.addPositionX,
					this.userActionData.addPositionY,
					this.userActionData.newWidth,
					this.userActionData.newHeight
				)
			) {
				shiftItemsUp.call(
					this,
					this.userActionData.addPositionY,
					this.userActionData.newHeight
				);
			}
		}
	} else {
		this.limberGridMouseDownCancel = true;
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
	clearTimeout(this.addItemAllowCheckTimeOutVariable);
	clearTimeout(this.limberGridTouchStartCheckTimeOutVariable);
	var itemAddedFlag = false;
	if (this.limberGridTouchStartTimerComplete == true) {
		if (publicConstants.ADD_OR_CUTSPACE_TOGGLE == "ADD") {
			if (
				addItemAllowCheck.call(
					this,
					this.userActionData.addPositionX,
					this.userActionData.addPositionY,
					this.userActionData.newWidth,
					this.userActionData.newHeight
				)
			) {
				var item = {
					x: this.userActionData.addPositionX,
					y: this.userActionData.addPositionY,
					width: this.userActionData.newWidth,
					height: this.userActionData.newHeight,
				};

				var scrollTop = this.$limberGridView[0].scrollTop;

				var renderDetails = this.addItemsAtPositions(
					[item],
					false,
					"addItemInteractive"
				);
				itemAddedFlag = true;

				this.$limberGridView[0].scrollTop = scrollTop;

				this.limberGridTouchStartTimerComplete = false;
			}
		} else if (publicConstants.ADD_OR_CUTSPACE_TOGGLE == "CUTSPACE") {
			if (
				cutSpaceAllowCheck.call(
					this,
					this.userActionData.addPositionX,
					this.userActionData.addPositionY,
					this.userActionData.newWidth,
					this.userActionData.newHeight
				)
			) {
				shiftItemsUp.call(
					this,
					this.userActionData.addPositionY,
					this.userActionData.newHeight
				);
			}
		}
	} else {
		this.limberGridTouchStartCancel = true;
	}
	this.limberGridTouchStartTimerComplete = false;
	onLimberGridContextMenu.call(this);
	this.initializeItemTouchEvents();

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
	clearTimeout(this.addItemAllowCheckTimeOutVariable);
	clearTimeout(this.limberGridTouchStartCheckTimeOutVariable);
	this.limberGridTouchStartCancel = false;
	this.limberGridTouchStartTimerComplete = false;
	onLimberGridContextMenu.call(this);
	this.initializeItemTouchEvents();

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

	this.$limberGridViewAddItemGuide[0].classList.remove(
		"limberGridViewAddItemGuideActive",
		"limberGridViewAddItemGuideCutMode",
		"limberGridViewAddItemGuideAddAllow",
		"limberGridViewAddItemGuideAddDisallow"
	);
	this.$limberGridViewHeightAdjustGuide[0].classList.remove(
		"limberGridViewHeightAdjustGuideActive"
	);
	this.$limberGridViewHeightAdjustGuide[0].style.height = 0 + "px";

	this.$body[0].classList.remove(
		"limberGridViewBodyTagStateElementDraggingOrResizing",
		"limberGridViewBodyTagStateElementAdding"
	);
	var length_0 = this.$limberGridViewItems.length;
	for (var i = 0; i < length_0; i++) {
		this.$limberGridViewItems[i].classList.remove(
			"limberGridViewItemResizingState"
		);
	}

	var length_0 = this.$limberGridViewGridPseudoItems.length;
	for (var i = 0; i < length_0; i++) {
		this.$limberGridViewGridPseudoItems[i].classList.remove(
			"limberGridViewGridPseudoItemResizingState"
		);
	}

	this.$limberGridViewAddItemOnTouchHoldGuide[0].classList.remove(
		"limberGridViewAddItemOnTouchHoldGuideActive"
	);

	this.$limberGridView[0].removeEventListener(
		"mousemove",
		this.onLimberGridMouseMoveBindedFunctionVariable
	);
	document.removeEventListener(
		"mouseup",
		this.onLimberGridMouseUpBindedFunctionVariable
	);
	document.removeEventListener(
		"contextmenu",
		this.onLimberGridContextMenuBindedFunctionVariable
	);

	this.$limberGridView[0].removeEventListener(
		"touchmove",
		this.onLimberGridTouchMoveBindedFunctionVariable
	);
	document.removeEventListener(
		"touchend",
		this.onLimberGridTouchEndBindedFunctionVariable
	);
	document.removeEventListener(
		"touchcancel",
		this.onLimberGridTouchCancelBindedFunctionVariable
	);
	document.removeEventListener(
		"contextmenu",
		this.onLimberGridTouchContextMenuBindedFunctionVariable
	);
};

export const addItemAllowCheckTimeOut = function(x, y, width, height) {
	if (addItemAllowCheck.call(this, x, y, width, height) == false) {
		this.$limberGridViewAddItemGuide[0].classList.remove(
			"limberGridViewAddItemGuideAddAllow"
		);
		this.$limberGridViewAddItemGuide[0].classList.add(
			"limberGridViewAddItemGuideAddDisallow"
		);
	} else {
		this.$limberGridViewAddItemGuide[0].classList.remove(
			"limberGridViewAddItemGuideAddDisallow"
		);
		this.$limberGridViewAddItemGuide[0].classList.add(
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
		this.$limberGridViewAddItemGuide[0].classList.remove(
			"limberGridViewAddItemGuideAddAllow"
		);
		this.$limberGridViewAddItemGuide[0].classList.add(
			"limberGridViewAddItemGuideAddDisallow"
		);
	} else {
		this.$limberGridViewAddItemGuide[0].classList.remove(
			"limberGridViewAddItemGuideAddDisallow"
		);
		this.$limberGridViewAddItemGuide[0].classList.add(
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
	this.$limberGridViewStyle[0].innerHTML = rippleString;
};
