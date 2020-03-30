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
import { getLines, getMarginAtPoint } from "../utils/essentials";
import {
	resizePlane,
	resizePlaneDemo,
	movePlane,
	movePlaneDemo
} from "../calc/calcPosition";

export const onItemMouseDown = function(event) {
	if (event.which != 1) {
		return;
	}

	if (event.target.classList.contains("limberGridViewItem")) {
		event.stopPropagation();
	} else {
		return;
	}

	var radius = Math.sqrt(
		Math.pow(0 - event.offsetX, 2) + Math.pow(0 - event.offsetY, 2)
	);
	var resizeUIBox = {
		x: event.currentTarget.offsetWidth - this.RESIZE_SQUARE_GUIDE_LENGTH,
		y: event.currentTarget.offsetHeight - this.RESIZE_SQUARE_GUIDE_LENGTH,
		width:
			this.RESIZE_SQUARE_GUIDE_LENGTH +
			this.RESIZE_SQUARE_BORDER_GUIDE_WIDTH,
		height:
			this.RESIZE_SQUARE_GUIDE_LENGTH +
			this.RESIZE_SQUARE_BORDER_GUIDE_WIDTH
	};

	if (radius <= this.MOVE_GUIDE_RADIUS) {
		this.userActionData = {
			type: "move",
			itemIndex: event.currentTarget.attributes["data-index"].value
		};
		this.mouseDownCancel = false;
		this.mouseDownTimerComplete = false;

		document.addEventListener(
			"mousemove",
			this.onMouseMoveBindedFunctionVariable
		);
		document.addEventListener(
			"mouseup",
			this.onMouseUpBindedFunctionVariable
		);
		document.addEventListener(
			"contextmenu",
			this.onContextMenuBindedFunctionVariable
		);
		clearTimeout(this.longPressCheck);
		this.longPressCheck = setTimeout(
			mouseDownCheck.bind(this, event),
			this.MOUSE_DOWN_TIME
		);

		event.preventDefault();
	} else if (
		event.offsetX >= resizeUIBox.x &&
		event.offsetX <= resizeUIBox.x + resizeUIBox.width &&
		event.offsetY >= resizeUIBox.y &&
		event.offsetY <= resizeUIBox.y + resizeUIBox.height
	) {
		this.$limberGridViewHeightAdjustGuide[0].style.height = 0 + "px";
		this.$limberGridViewHeightAdjustGuide[0].classList.add(
			"limberGridViewHeightAdjustGuideActive"
		);

		this.userActionData = {
			type: "resize",
			itemIndex: event.currentTarget.attributes["data-index"].value
		};
		this.mouseDownCancel = false;
		this.mouseDownTimerComplete = true;

		this.$limberGridView[0].addEventListener(
			"mousemove",
			this.onMouseMoveBindedFunctionVariable
		);
		document.addEventListener(
			"mouseup",
			this.onMouseUpBindedFunctionVariable
		);
		document.addEventListener(
			"contextmenu",
			this.onContextMenuBindedFunctionVariable
		);

		var transformStyle = this.$limberGridViewItems[
			this.userActionData.itemIndex
		].style.transform;
		var i1 = transformStyle.indexOf("px");
		var i2 = transformStyle.indexOf(",");
		var x = Number(transformStyle.substring(10, i1));
		var y = Number(
			transformStyle.substring(i2 + 2, transformStyle.length - 3)
		);

		this.userActionData.itemPositionX = x;
		this.userActionData.itemPositionY = y;

		this.$limberGridViewGridPseudoItems[
			this.userActionData.itemIndex
		].style.width =
			this.positionData[this.userActionData.itemIndex].width + "px";
		this.$limberGridViewGridPseudoItems[
			this.userActionData.itemIndex
		].style.height =
			this.positionData[this.userActionData.itemIndex].height + "px";

		this.$limberGridViewGridPseudoItems[
			this.userActionData.itemIndex
		].style.transform = "translate(" + x + "px, " + y + "px)";
		this.$limberGridViewGridPseudoItems[
			this.userActionData.itemIndex
		].classList.add("limberGridViewGridPseudoItemActive");

		this.$body[0].classList.add(
			"limberGridViewBodyTagStateElementDraggingOrResizing"
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

		this.$limberGridViewGridPseudoItems[
			this.userActionData.itemIndex
		].classList.remove(
			"limberGridViewGridPseudoItemResizeAllow",
			"limberGridViewGridPseudoItemResizeDisallow"
		);

		event.preventDefault();
	}
};

export const onItemTouchStart = function(event) {
	if (event.which != 0) {
		return;
	}

	if (event.target.classList.contains("limberGridViewItem")) {
		event.stopPropagation();
	} else {
		return;
	}

	if (event.touches.length > 1) {
		return;
	}

	var touchPosOnLimberGridItem = calculateTouchPosOnLimberGridItem.call(
		this,
		event
	);
	if (touchPosOnLimberGridItem == false) {
		return;
	}
	var radius = Math.sqrt(
		Math.pow(0 - touchPosOnLimberGridItem.x, 2) +
			Math.pow(0 - touchPosOnLimberGridItem.y, 2)
	);
	var resizeUIBox = {
		x: event.currentTarget.offsetWidth - this.RESIZE_SQUARE_GUIDE_LENGTH,
		y: event.currentTarget.offsetHeight - this.RESIZE_SQUARE_GUIDE_LENGTH,
		width:
			this.RESIZE_SQUARE_GUIDE_LENGTH +
			this.RESIZE_SQUARE_BORDER_GUIDE_WIDTH,
		height:
			this.RESIZE_SQUARE_GUIDE_LENGTH +
			this.RESIZE_SQUARE_BORDER_GUIDE_WIDTH
	};

	if (radius <= this.MOVE_GUIDE_RADIUS) {
		this.userActionData = {
			type: "move",
			itemIndex: event.currentTarget.attributes["data-index"].value
		};
		this.tapHoldCancel = false;
		this.tapHoldTimerComplete = false;

		document.addEventListener(
			"touchmove",
			this.onTouchMoveBindedFunctionVariable
		);
		document.addEventListener(
			"touchend",
			this.onTouchEndBindedFunctionVariable
		);
		this.$limberGridView[0].removeEventListener(
			"touchstart",
			this.onLimberGridTouchStartFunctionVariable
		);

		document.addEventListener(
			"contextmenu",
			this.onItemTouchContextMenuBindedFunctionVariable
		);
		document.addEventListener(
			"touchcancel",
			this.onTouchCancelBindedFunctionVariable
		);

		this.longTouchCheck = setTimeout(
			tapHoldCheck.bind(this, event),
			this.TOUCH_HOLD_TIME
		);

		event.preventDefault();
	} else if (
		touchPosOnLimberGridItem.x >= resizeUIBox.x &&
		touchPosOnLimberGridItem.x <= resizeUIBox.x + resizeUIBox.width &&
		touchPosOnLimberGridItem.y >= resizeUIBox.y &&
		touchPosOnLimberGridItem.y <= resizeUIBox.y + resizeUIBox.height
	) {
		this.$limberGridViewHeightAdjustGuide[0].style.height = 0 + "px";
		this.$limberGridViewHeightAdjustGuide[0].classList.add(
			"limberGridViewHeightAdjustGuideActive"
		);

		this.userActionData = {
			type: "resize",
			itemIndex: event.currentTarget.attributes["data-index"].value
		};
		this.tapHoldCancel = false;
		this.tapHoldTimerComplete = true;

		this.$limberGridView[0].addEventListener(
			"touchmove",
			this.onTouchMoveBindedFunctionVariable
		);
		document.addEventListener(
			"touchend",
			this.onTouchEndBindedFunctionVariable
		);
		this.$limberGridView[0].removeEventListener(
			"touchstart",
			this.onLimberGridTouchStartFunctionVariable
		);

		document.addEventListener(
			"touchcancel",
			this.onTouchCancelBindedFunctionVariable
		);

		var transformStyle = this.$limberGridViewItems[
			this.userActionData.itemIndex
		].style.transform;
		var i1 = transformStyle.indexOf("px");
		var i2 = transformStyle.indexOf(",");
		var x = Number(transformStyle.substring(10, i1));
		var y = Number(
			transformStyle.substring(i2 + 2, transformStyle.length - 3)
		);

		this.userActionData.itemPositionX = x;
		this.userActionData.itemPositionY = y;

		this.$limberGridViewGridPseudoItems[
			this.userActionData.itemIndex
		].style.width =
			this.positionData[this.userActionData.itemIndex].width + "px";
		this.$limberGridViewGridPseudoItems[
			this.userActionData.itemIndex
		].style.height =
			this.positionData[this.userActionData.itemIndex].height + "px";

		this.$limberGridViewGridPseudoItems[
			this.userActionData.itemIndex
		].style.transform = "translate(" + x + "px, " + y + "px)";
		this.$limberGridViewGridPseudoItems[
			this.userActionData.itemIndex
		].classList.add("limberGridViewGridPseudoItemActive");

		this.$body[0].classList.add(
			"limberGridViewBodyTagStateElementDraggingOrResizing"
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

		this.$limberGridViewGridPseudoItems[
			this.userActionData.itemIndex
		].classList.remove(
			"limberGridViewGridPseudoItemResizeAllow",
			"limberGridViewGridPseudoItemResizeDisallow"
		);

		event.preventDefault();
	}

	event.stopPropagation();
};

export const mouseDownCheck = function(event) {
	if (this.mouseDownCancel == false) {
		this.mouseDownTimerComplete = true;
		console.log("mouseDownTimerComplete");
		this.$body[0].classList.add(
			"limberGridViewBodyTagStateElementDraggingOrResizing"
		);
		this.$limberGridViewItems[this.userActionData.itemIndex].classList.add(
			"limberGridViewItemDemo"
		);
		this.$limberGridViewBodyPseudoItems[
			this.userActionData.itemIndex
		].classList.add("limberGridViewBodyPseudoItemActive");
		this.$limberGridViewBodyPseudoItems[
			this.userActionData.itemIndex
		].style.transform =
			"translate(" +
			event.pageX /*+ 5*/ +
			"px, " +
			event.pageY /*+ 5*/ +
			"px)";

		this.$limberGridViewHeightAdjustGuide[0].style.height = 0 + "px";
		this.$limberGridViewHeightAdjustGuide[0].classList.add(
			"limberGridViewHeightAdjustGuideActive"
		);
	} else {
		console.log("mouseDown cancel before TimerComplete");
	}
};

export const tapHoldCheck = function(event) {
	if (this.tapHoldCancel == false) {
		this.tapHoldTimerComplete = true;

		this.$body[0].classList.add(
			"limberGridViewBodyTagStateElementDraggingOrResizing"
		);
		this.$limberGridViewItems[this.userActionData.itemIndex].classList.add(
			"limberGridViewItemDemo"
		);
		this.$limberGridViewBodyPseudoItems[
			this.userActionData.itemIndex
		].classList.add("limberGridViewBodyPseudoItemActive");
		this.$limberGridViewBodyPseudoItems[
			this.userActionData.itemIndex
		].style.transform =
			"translate(" +
			event.touches[0].pageX /*+ 5*/ +
			"px, " +
			event.touches[0].pageY /*+ 5*/ +
			"px)";

		this.$limberGridViewHeightAdjustGuide[0].style.height = 0 + "px";
		this.$limberGridViewHeightAdjustGuide[0].classList.add(
			"limberGridViewHeightAdjustGuideActive"
		);
	} else {
		// tapHold cancel before TimerComplete
	}
};

export const onMouseMove = function(event) {
	if (this.mouseDownTimerComplete == true) {
		if (this.userActionData.type == "move") {
			if (
				this.$limberGridViewMoveGuide[0].classList.contains(
					"limberGridViewMoveGuideActive"
				)
			) {
				this.$limberGridViewMoveGuide[0].classList.remove(
					"limberGridViewMoveGuideActive"
				);
			}

			if (
				this.$limberGridViewBodyPseudoItems[
					this.userActionData.itemIndex
				].classList.contains("limberGridViewBodyPseudoItemMoveAllow") ||
				this.$limberGridViewBodyPseudoItems[
					this.userActionData.itemIndex
				].classList.contains("limberGridViewBodyPseudoItemMoveDisallow")
			) {
				this.$limberGridViewBodyPseudoItems[
					this.userActionData.itemIndex
				].classList.remove(
					"limberGridViewBodyPseudoItemMoveAllow",
					"limberGridViewBodyPseudoItemMoveDisallow"
				);
			}

			this.$limberGridViewBodyPseudoItems[
				this.userActionData.itemIndex
			].style.transform =
				"translate(" +
				event.pageX /*+ 5*/ +
				"px, " +
				event.pageY /*+ 5*/ +
				"px)";
			var mousePositionOnLimberGrid = calculateMousePosOnLimberGrid.call(
				this,
				event
			);

			if (mousePositionOnLimberGrid != false) {
				var scrollTop = this.$limberGridView[0].scrollTop;
				var scrollHeight = this.$limberGridView[0].scrollHeight;

				var yMousePosition = mousePositionOnLimberGrid.y;
				adjustHeight.call(this, yMousePosition);
			}

			clearTimeout(this.showMoveDemoTimeOutVariable);
			this.showMoveDemoTimeOutVariable = setTimeout(
				showMoveDemo.bind(
					this,
					this.userActionData.itemIndex,
					mousePositionOnLimberGrid
				),
				this.DEMO_WAIT_TIME
			);
		} else {
			var scrollTop = this.$limberGridView[0].scrollTop;
			var scrollLeft = this.$limberGridView[0].scrollLeft;

			var x = this.userActionData.itemPositionX;
			var y = this.userActionData.itemPositionY;

			var newWidth = event.offsetX - x + scrollLeft - this.PADDING_LEFT;
			var newHeight = event.offsetY - y + scrollTop - this.PADDING_TOP;

			this.userActionData.newWidth = newWidth;
			this.userActionData.newHeight = newHeight;

			var yMousePosition = event.offsetY + scrollTop;
			adjustHeight.call(this, yMousePosition);

			if (newWidth > 0 && newHeight > 0) {
				this.$limberGridViewGridPseudoItems[
					this.userActionData.itemIndex
				].style.width = newWidth + "px";
				this.$limberGridViewGridPseudoItems[
					this.userActionData.itemIndex
				].style.height = newHeight + "px";
			}

			if (
				this.$limberGridViewGridPseudoItems[
					this.userActionData.itemIndex
				].classList.contains(
					"limberGridViewGridPseudoItemResizeAllow"
				) ||
				this.$limberGridViewGridPseudoItems[
					this.userActionData.itemIndex
				].classList.contains(
					"limberGridViewGridPseudoItemResizeDisallow"
				)
			) {
				this.$limberGridViewGridPseudoItems[
					this.userActionData.itemIndex
				].classList.remove(
					"limberGridViewGridPseudoItemResizeAllow",
					"limberGridViewGridPseudoItemResizeDisallow"
				);
			}

			clearTimeout(this.showResizeDemoTimeOutVariable);
			this.showResizeDemoTimeOutVariable = setTimeout(
				showResizeDemo.bind(
					this,
					this.userActionData.itemIndex,
					newWidth,
					newHeight
				),
				this.DEMO_WAIT_TIME
			);
		}
	} else {
		this.mouseDownCancel = true;
		clearTimeout(this.longPressCheck);
		document.removeEventListener(
			"mousemove",
			this.onMouseMoveBindedFunctionVariable
		);
		this.$limberGridView[0].removeEventListener(
			"mousemove",
			this.onMouseMoveBindedFunctionVariable
		);
		document.removeEventListener(
			"mouseup",
			this.onMouseUpBindedFunctionVariable
		);
		document.removeEventListener(
			"contextmenu",
			this.onContextMenuBindedFunctionVariable
		);

		// canceling mouseHold
	}
	event.preventDefault();
	event.stopPropagation();
};

export const onTouchMove = function(event) {
	if (this.tapHoldTimerComplete == true) {
		if (this.userActionData.type == "move") {
			if (
				this.$limberGridViewMoveGuide[0].classList.contains(
					"limberGridViewMoveGuideActive"
				)
			) {
				this.$limberGridViewMoveGuide[0].classList.remove(
					"limberGridViewMoveGuideActive"
				);
			}

			if (
				this.$limberGridViewBodyPseudoItems[
					this.userActionData.itemIndex
				].classList.contains("limberGridViewBodyPseudoItemMoveAllow") ||
				this.$limberGridViewBodyPseudoItems[
					this.userActionData.itemIndex
				].classList.contains("limberGridViewBodyPseudoItemMoveDisallow")
			) {
				this.$limberGridViewBodyPseudoItems[
					this.userActionData.itemIndex
				].classList.remove(
					"limberGridViewBodyPseudoItemMoveAllow",
					"limberGridViewBodyPseudoItemMoveDisallow"
				);
			}

			this.$limberGridViewBodyPseudoItems[
				this.userActionData.itemIndex
			].style.transform =
				"translate(" +
				event.touches[0].pageX /*+ 5*/ +
				"px, " +
				event.touches[0].pageY /*+ 5*/ +
				"px)";
			var touchPositionOnLimberGrid = calculateTouchPosOnLimberGrid.call(
				this,
				event
			);

			if (touchPositionOnLimberGrid != false) {
				var scrollTop = this.$limberGridView[0].scrollTop;
				var scrollLeft = this.$limberGridView[0].scrollLeft;

				var limberGridViewBoundingClientRect = this.$limberGridView[0].getBoundingClientRect();
				var limberGridViewWidthVisibleWidth =
					this.$limberGridView[0].offsetWidth -
					limberGridViewBoundingClientRect.left;
				var limberGridViewHeightVisibleHeight =
					this.$limberGridView[0].offsetHeight -
					limberGridViewBoundingClientRect.top;
				var limberGridViewOnVisibleAreaX =
					touchPositionOnLimberGrid.x +
					this.PADDING_LEFT -
					scrollLeft;
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

			clearTimeout(this.showMoveDemoTimeOutVariable);
			if (programScrolled != true) {
				this.showMoveDemoTimeOutVariable = setTimeout(
					showMoveDemo.bind(
						this,
						this.userActionData.itemIndex,
						touchPositionOnLimberGrid
					),
					this.DEMO_WAIT_TIME
				);
			}
		} else {
			var scrollTop = this.$limberGridView[0].scrollTop;
			var scrollLeft = this.$limberGridView[0].scrollLeft;

			var x = this.userActionData.itemPositionX;
			var y = this.userActionData.itemPositionY;

			var touchPositionOnLimberGrid = calculateTouchPosOnLimberGrid.call(
				this,
				event
			);

			if (touchPositionOnLimberGrid != false) {
				var newWidth = touchPositionOnLimberGrid.x - x;
				var newHeight = touchPositionOnLimberGrid.y - y;

				this.userActionData.newWidth = newWidth;
				this.userActionData.newHeight = newHeight;

				if (newWidth > 0 && newHeight > 0) {
					this.$limberGridViewGridPseudoItems[
						this.userActionData.itemIndex
					].style.width = newWidth + "px";
					this.$limberGridViewGridPseudoItems[
						this.userActionData.itemIndex
					].style.height = newHeight + "px";
				}

				if (
					this.$limberGridViewGridPseudoItems[
						this.userActionData.itemIndex
					].classList.contains(
						"limberGridViewGridPseudoItemResizeAllow"
					) ||
					this.$limberGridViewGridPseudoItems[
						this.userActionData.itemIndex
					].classList.contains(
						"limberGridViewGridPseudoItemResizeDisallow"
					)
				) {
					this.$limberGridViewGridPseudoItems[
						this.userActionData.itemIndex
					].classList.remove(
						"limberGridViewGridPseudoItemResizeAllow",
						"limberGridViewGridPseudoItemResizeDisallow"
					);
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
					touchPositionOnLimberGrid.x +
					this.PADDING_LEFT -
					scrollLeft;
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

			clearTimeout(this.showResizeDemoTimeOutVariable);
			if (programScrolled != true) {
				this.showResizeDemoTimeOutVariable = setTimeout(
					showResizeDemo.bind(
						this,
						this.userActionData.itemIndex,
						newWidth,
						newHeight
					),
					this.DEMO_WAIT_TIME
				);
			}
		}
	} else {
		this.tapHoldCancel = true;
		clearTimeout(this.longTouchCheck);
		document.removeEventListener(
			"touchmove",
			this.onTouchMoveBindedFunctionVariable
		);
		this.$limberGridView[0].removeEventListener(
			"touchmove",
			this.onTouchMoveBindedFunctionVariable
		);
		document.removeEventListener(
			"touchend",
			this.onTouchEndBindedFunctionVariable
		);
		document.removeEventListener(
			"contextmenu",
			this.onContextMenuBindedFunctionVariable
		);
		document.removeEventListener(
			"contextmenu",
			this.onItemTouchContextMenuBindedFunctionVariable
		);
		document.removeEventListener(
			"touchcancel",
			this.onTouchCancelBindedFunctionVariable
		);
		this.$limberGridView[0].addEventListener(
			"touchstart",
			this.onLimberGridTouchStartFunctionVariable
		);

		// canceling taphold
	}

	event.stopPropagation();
};

export const onMouseUp = function(event) {
	clearTimeout(this.showMoveDemoTimeOutVariable);
	clearTimeout(this.showResizeDemoTimeOutVariable);
	var itemResizeFlag = false;
	var itemMoveFlag = false;
	if (this.mouseDownTimerComplete == true) {
		if (this.userActionData.type == "move") {
			this.$limberGridViewBodyPseudoItems[
				this.userActionData.itemIndex
			].classList.remove("limberGridViewBodyPseudoItemActive");
			this.$limberGridViewBodyPseudoItems[
				this.userActionData.itemIndex
			].style.transform = "translate(" + 0 + "px, " + 0 + "px)";
			var mousePositionOnLimberGrid = calculateMousePosOnLimberGrid.call(
				this,
				event
			);
			if (mousePositionOnLimberGrid != false) {
				var newMoveCoordinates = checkNewMoveCoordinates.call(
					this,
					this.userActionData.itemIndex,
					mousePositionOnLimberGrid
				);
				if (newMoveCoordinates != false) {
					var updatedCoordinates = {};
					if (
						newMoveCoordinates.hasOwnProperty("revisedCoordinates")
					) {
						movePlane.call(
							this,
							this.userActionData.itemIndex,
							newMoveCoordinates.revisedCoordinates.x,
							newMoveCoordinates.revisedCoordinates.y
						);
						updatedCoordinates.x =
							newMoveCoordinates.revisedCoordinates.x;
						updatedCoordinates.y =
							newMoveCoordinates.revisedCoordinates.y;
						itemMoveFlag = true;
					} else {
						movePlane.call(
							this,
							this.userActionData.itemIndex,
							newMoveCoordinates.x,
							newMoveCoordinates.y
						);
						updatedCoordinates.x = newMoveCoordinates.x;
						updatedCoordinates.y = newMoveCoordinates.y;
						itemMoveFlag = true;
					}
				} else {
					revertShowMoveOrResizeDemo.call(this);
				}
			} else {
				revertShowMoveOrResizeDemo.call(this);
			}
		} else {
			var scrollTop = this.$limberGridView[0].scrollTop;
			var scrollLeft = this.$limberGridView[0].scrollLeft;

			var x = this.userActionData.itemPositionX;
			var y = this.userActionData.itemPositionY;

			var newWidth = this.userActionData.newWidth;
			var newHeight = this.userActionData.newHeight;

			if (newWidth > 0 && newHeight > 0) {
				this.$limberGridViewGridPseudoItems[
					this.userActionData.itemIndex
				].style.width = newWidth + "px";
				this.$limberGridViewGridPseudoItems[
					this.userActionData.itemIndex
				].style.height = newHeight + "px";
			}

			if (
				resizePlane.call(
					this,
					this.userActionData.itemIndex,
					newWidth,
					newHeight
				) == false
			) {
				revertShowMoveOrResizeDemo.call(this);
				itemResizeFlag = true;
			}

			this.$limberGridViewGridPseudoItems[
				this.userActionData.itemIndex
			].style.transform = "translate(" + 0 + "px, " + 0 + "px)";
			this.$limberGridViewGridPseudoItems[
				this.userActionData.itemIndex
			].classList.remove("limberGridViewGridPseudoItemActive");
		}
	} else {
		this.mouseDownCancel = true;
		clearTimeout(this.longPressCheck);
		// canceling mouseHold
	}
	document.removeEventListener(
		"mousemove",
		this.onMouseMoveBindedFunctionVariable
	);
	this.$limberGridView[0].removeEventListener(
		"mousemove",
		this.onMouseMoveBindedFunctionVariable
	);
	document.removeEventListener(
		"mouseup",
		this.onMouseUpBindedFunctionVariable
	);
	document.removeEventListener(
		"contextmenu",
		this.onContextMenuBindedFunctionVariable
	);

	this.$body[0].classList.remove(
		"limberGridViewBodyTagStateElementDraggingOrResizing"
	);
	this.$limberGridViewMoveGuide[0].classList.remove(
		"limberGridViewMoveGuideActive"
	);

	this.$limberGridViewHeightAdjustGuide[0].classList.remove(
		"limberGridViewHeightAdjustGuideActive"
	);

	event.preventDefault();
	event.stopPropagation();

	//
	if (
		this.callbacks.moveCompleteCallback != undefined &&
		this.callbacks.moveCompleteCallback != null
	) {
		if (itemMoveFlag == true) {
			updatedCoordinates.width = this.positionData[
				this.userActionData.itemIndex
			].width;
			updatedCoordinates.height = this.positionData[
				this.userActionData.itemIndex
			].height;
			this.callbacks.moveCompleteCallback(
				true,
				this.userActionData.itemIndex,
				updatedCoordinates
			);
		} else if (this.userActionData.type == "move") {
			this.callbacks.moveCompleteCallback(
				false,
				this.userActionData.itemIndex,
				event
			);
		}
	}
	if (
		this.callbacks.resizeCompleteCallback != undefined &&
		this.callbacks.resizeCompleteCallback != null
	) {
		if (itemResizeFlag == true) {
			this.callbacks.resizeCompleteCallback(
				this.userActionData.itemIndex,
				{
					x: this.positionData[this.userActionData.itemIndex].x,
					y: this.positionData[this.userActionData.itemIndex].y,
					height: newHeight,
					width: newWidth
				}
			);
		}
	}
	//

	this.userActionData = null;
};

export const onTouchEnd = function(event) {
	clearTimeout(this.showMoveDemoTimeOutVariable);
	clearTimeout(this.showResizeDemoTimeOutVariable);
	var itemResizeFlag = false;
	var itemMoveFlag = false;
	if (this.tapHoldTimerComplete == true) {
		if (this.userActionData.type == "move") {
			this.$limberGridViewBodyPseudoItems[
				this.userActionData.itemIndex
			].classList.remove("limberGridViewBodyPseudoItemActive");
			this.$limberGridViewBodyPseudoItems[
				this.userActionData.itemIndex
			].style.transform = "translate(" + 0 + "px, " + 0 + "px)";
			var touchPositionOnLimberGrid = calculateTouchPosOnLimberGrid.call(
				this,
				event
			);
			if (touchPositionOnLimberGrid != false) {
				var newMoveCoordinates = checkNewMoveCoordinates.call(
					this,
					this.userActionData.itemIndex,
					touchPositionOnLimberGrid
				);
				if (newMoveCoordinates != false) {
					var updatedCoordinates = {};
					if (
						newMoveCoordinates.hasOwnProperty("revisedCoordinates")
					) {
						movePlane.call(
							this,
							this.userActionData.itemIndex,
							newMoveCoordinates.revisedCoordinates.x,
							newMoveCoordinates.revisedCoordinates.y
						);
						updatedCoordinates.x =
							newMoveCoordinates.revisedCoordinates.x;
						updatedCoordinates.y =
							newMoveCoordinates.revisedCoordinates.y;
						itemMoveFlag = true;
					} else {
						movePlane.call(
							this,
							this.userActionData.itemIndex,
							newMoveCoordinates.x,
							newMoveCoordinates.y
						);
						updatedCoordinates.x = newMoveCoordinates.x;
						updatedCoordinates.y = newMoveCoordinates.y;
						itemMoveFlag = true;
					}
				} else {
					revertShowMoveOrResizeDemo.call(this);
				}
			} else {
				revertShowMoveOrResizeDemo.call(this);
			}
		} else {
			var scrollTop = this.$limberGridView[0].scrollTop;
			var scrollLeft = this.$limberGridView[0].scrollLeft;

			var x = this.userActionData.itemPositionX;
			var y = this.userActionData.itemPositionY;

			var newWidth = this.userActionData.newWidth;
			var newHeight = this.userActionData.newHeight;

			if (newWidth > 0 && newHeight > 0) {
				this.$limberGridViewGridPseudoItems[
					this.userActionData.itemIndex
				].style.width = newWidth + "px";
				this.$limberGridViewGridPseudoItems[
					this.userActionData.itemIndex
				].style.height = newHeight + "px";
			}

			if (
				resizePlane.call(
					this,
					this.userActionData.itemIndex,
					newWidth,
					newHeight
				) == false
			) {
				revertShowMoveOrResizeDemo.call(this);
				itemResizeFlag = true;
			}

			this.$limberGridViewGridPseudoItems[
				this.userActionData.itemIndex
			].style.transform = "translate(" + 0 + "px, " + 0 + "px)";
			this.$limberGridViewGridPseudoItems[
				this.userActionData.itemIndex
			].classList.remove("limberGridViewGridPseudoItemActive");
		}
	} else {
		this.tapHoldCancel = true;
		clearTimeout(this.longTouchCheck);

		// canceling taphold
	}

	document.removeEventListener(
		"touchmove",
		this.onTouchMoveBindedFunctionVariable
	);
	this.$limberGridView[0].removeEventListener(
		"touchmove",
		this.onTouchMoveBindedFunctionVariable
	);
	document.removeEventListener(
		"touchend",
		this.onTouchEndBindedFunctionVariable
	);
	document.removeEventListener(
		"contextmenu",
		this.onContextMenuBindedFunctionVariable
	);
	document.removeEventListener(
		"contextmenu",
		this.onItemTouchContextMenuBindedFunctionVariable
	);
	document.removeEventListener(
		"touchcancel",
		this.onTouchCancelBindedFunctionVariable
	);
	this.$limberGridView[0].addEventListener(
		"touchstart",
		this.onLimberGridTouchStartFunctionVariable
	);

	this.$body[0].classList.remove(
		"limberGridViewBodyTagStateElementDraggingOrResizing"
	);
	this.$limberGridViewMoveGuide[0].classList.remove(
		"limberGridViewMoveGuideActive"
	);

	this.$limberGridViewHeightAdjustGuide[0].classList.remove(
		"limberGridViewHeightAdjustGuideActive"
	);

	event.stopPropagation();

	//
	if (
		this.callbacks.moveCompleteCallback != undefined &&
		this.callbacks.moveCompleteCallback != null
	) {
		if (itemMoveFlag == true) {
			updatedCoordinates.width = this.positionData[
				this.userActionData.itemIndex
			].width;
			updatedCoordinates.height = this.positionData[
				this.userActionData.itemIndex
			].height;
			this.callbacks.moveCompleteCallback(
				true,
				this.userActionData.itemIndex,
				updatedCoordinates
			);
		} else if (this.userActionData.type == "move") {
			this.callbacks.moveCompleteCallback(
				false,
				this.userActionData.itemIndex,
				event
			);
		}
	}
	if (
		this.callbacks.resizeCompleteCallback != undefined &&
		this.callbacks.resizeCompleteCallback != null
	) {
		if (itemResizeFlag == true) {
			this.callbacks.resizeCompleteCallback(
				this.userActionData.itemIndex,
				{
					x: this.positionData[this.userActionData.itemIndex].x,
					y: this.positionData[this.userActionData.itemIndex].y,
					height: newHeight,
					width: newWidth
				}
			);
		}
	}
	//

	this.userActionData = null;
};

export const onContextMenu = function(event) {
	clearTimeout(this.showMoveDemoTimeOutVariable);
	clearTimeout(this.showResizeDemoTimeOutVariable);

	revertShowMoveOrResizeDemo.call(this);

	this.$limberGridViewGridPseudoItems[
		this.userActionData.itemIndex
	].classList.remove("limberGridViewGridPseudoItemActive");

	this.$limberGridViewBodyPseudoItems[
		this.userActionData.itemIndex
	].classList.remove("limberGridViewBodyPseudoItemActive");
	this.$limberGridViewBodyPseudoItems[
		this.userActionData.itemIndex
	].style.transform = "translate(" + 0 + "px, " + 0 + "px)";

	document.removeEventListener(
		"mousemove",
		this.onMouseMoveBindedFunctionVariable
	);
	this.$limberGridView[0].removeEventListener(
		"mousemove",
		this.onMouseMoveBindedFunctionVariable
	);
	document.removeEventListener(
		"mouseup",
		this.onMouseUpBindedFunctionVariable
	);

	document.removeEventListener(
		"touchmove",
		this.onTouchMoveBindedFunctionVariable
	);
	this.$limberGridView[0].removeEventListener(
		"touchmove",
		this.onTouchMoveBindedFunctionVariable
	);
	document.removeEventListener(
		"touchend",
		this.onTouchEndBindedFunctionVariable
	);
	document.removeEventListener(
		"contextmenu",
		this.onItemTouchContextMenuBindedFunctionVariable
	);
	document.removeEventListener(
		"touchcancel",
		this.onTouchCancelBindedFunctionVariable
	);

	document.removeEventListener(
		"contextmenu",
		this.onContextMenuBindedFunctionVariable
	);

	this.$body[0].classList.remove(
		"limberGridViewBodyTagStateElementDraggingOrResizing"
	);
	this.$limberGridViewMoveGuide[0].classList.remove(
		"limberGridViewMoveGuideActive"
	);

	this.$limberGridViewHeightAdjustGuide[0].classList.remove(
		"limberGridViewHeightAdjustGuideActive"
	);

	this.userActionData = null;

	event.preventDefault();
	event.stopPropagation();
};

export const onItemTouchContextMenu = function(event) {
	event.preventDefault();
};

export const onTouchCancel = function(event) {
	onContextMenu.call(this);
	this.tapHoldTimerComplete = false;
	this.$limberGridView[0].addEventListener(
		"touchstart",
		this.onLimberGridTouchStartFunctionVariable
	);
};

export const calculateMousePosOnLimberGrid = function(event) {
	var limberGridViewPosition = this.$limberGridView[0].getBoundingClientRect();
	if (
		event.clientX >= limberGridViewPosition.left &&
		event.clientX <=
			limberGridViewPosition.left + limberGridViewPosition.width &&
		(event.clientY >= limberGridViewPosition.top &&
			event.clientY <=
				limberGridViewPosition.top + limberGridViewPosition.height)
	) {
		var scrollTop = this.$limberGridView[0].scrollTop;
		var scrollLeft = this.$limberGridView[0].scrollLeft;

		var mouseXOnLimberGridView =
			event.clientX -
			limberGridViewPosition.left -
			this.PADDING_LEFT +
			scrollLeft;
		var mouseYOnLimberGridView =
			event.clientY -
			limberGridViewPosition.top -
			this.PADDING_TOP +
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

export const calculateTouchPosOnLimberGrid = function(event) {
	var limberGridViewPosition = this.$limberGridView[0].getBoundingClientRect();

	if (event.type == "touchend") {
		var touch = {
			clientX: event.changedTouches[0].clientX,
			clientY: event.changedTouches[0].clientY
		};
	} else {
		var touch = {
			clientX: event.touches[0].clientX,
			clientY: event.touches[0].clientY
		};
	}
	if (
		touch.clientX >= limberGridViewPosition.left &&
		touch.clientX <=
			limberGridViewPosition.left + limberGridViewPosition.width &&
		(touch.clientY >= limberGridViewPosition.top &&
			touch.clientY <=
				limberGridViewPosition.top + limberGridViewPosition.height)
	) {
		var scrollTop = this.$limberGridView[0].scrollTop;
		var scrollLeft = this.$limberGridView[0].scrollLeft;

		var touchXOnLimberGridView =
			touch.clientX -
			limberGridViewPosition.left -
			this.PADDING_LEFT +
			scrollLeft;
		var touchYOnLimberGridView =
			touch.clientY -
			limberGridViewPosition.top -
			this.PADDING_TOP +
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

export const calculateTouchPosOnLimberGridItem = function(event) {
	var limberGridViewItemPosition = this.$limberGridViewItems[
		event.currentTarget.attributes["data-index"].value
	].getBoundingClientRect();

	if (
		event.touches[0].clientX >= limberGridViewItemPosition.left &&
		event.touches[0].clientX <=
			limberGridViewItemPosition.left +
				limberGridViewItemPosition.width &&
		(event.touches[0].clientY >= limberGridViewItemPosition.top &&
			event.touches[0].clientY <=
				limberGridViewItemPosition.top +
					limberGridViewItemPosition.height)
	) {
		var touchXOnLimberGridView =
			event.touches[0].clientX - limberGridViewItemPosition.left;
		var touchYOnLimberGridView =
			event.touches[0].clientY - limberGridViewItemPosition.top;

		return { x: touchXOnLimberGridView, y: touchYOnLimberGridView };
	} else {
		// touch NOT inside limberGridViewItem
		return false;
	}
};

export const checkNewMoveCoordinates = function(
	indexOfMovedItem,
	mousePositions
) {
	if (mousePositions == false) {
		return false;
	}

	var x = mousePositions.x;
	var y = mousePositions.y;
	var widthOfMovedItem = this.positionData[indexOfMovedItem].width;
	var heightOfMovedItem = this.positionData[indexOfMovedItem].height;

	var isInside = false;
	var indexOfOverlappingItem = null;
	var length_0 = this.positionData.length;
	for (var i = 0; i < length_0; i++) {
		var itemTopLeft = [this.positionData[i].x, this.positionData[i].y];
		var itemTopRight = [
			this.positionData[i].x + this.positionData[i].width,
			this.positionData[i].y
		];
		var itemBottomLeft = [
			this.positionData[i].x,
			this.positionData[i].y + this.positionData[i].height
		];
		var itemBottomRight = [
			this.positionData[i].x + this.positionData[i].width,
			this.positionData[i].y + this.positionData[i].height
		];

		if (
			x >= itemTopLeft[0] &&
			x <= itemTopRight[0] &&
			x >= itemBottomLeft[0] &&
			x <= itemBottomRight[0] &&
			y >= itemTopLeft[1] &&
			y <= itemBottomLeft[1] &&
			y >= itemTopRight[1] &&
			y <= itemBottomRight[1]
		) {
			isInside = true;
			indexOfOverlappingItem = i;
			break;
		}

		var lines = getLines(this.positionData[i]);

		var topLine = lines[0];
		var rightLine = lines[1];
		var bottomLine = lines[2];
		var leftLine = lines[3];

		// for TOP LEFT Corner
		if (
			y < topLine[0][1] &&
			x >= topLine[0][0] - this.MARGIN &&
			x <= topLine[1][0] + this.MARGIN
		) {
			var diff = topLine[0][1] - y;
			if (diff <= this.MARGIN) {
				return false;
			}
		}

		if (
			y > bottomLine[0][1] &&
			x >= bottomLine[0][0] - this.MARGIN &&
			x <= bottomLine[1][0] + this.MARGIN
		) {
			var diff = y - bottomLine[0][1];
			if (diff <= this.MARGIN) {
				return false;
			}
		}

		if (
			x > rightLine[0][0] &&
			y >= rightLine[0][1] - this.MARGIN &&
			y <= rightLine[1][1] + this.MARGIN
		) {
			var diff = x - rightLine[0][0];
			if (diff <= this.MARGIN) {
				return false;
			}
		}

		if (
			x < leftLine[0][0] &&
			y >= leftLine[0][1] - this.MARGIN &&
			y <= leftLine[1][1] + this.MARGIN
		) {
			var diff = leftLine[0][0] - x;
			if (diff <= this.MARGIN) {
				return false;
			}
		}
		// for TOP LEFT Corner END

		// for TOP RIGHT Corner
		if (
			y > bottomLine[0][1] &&
			x + widthOfMovedItem >= bottomLine[0][0] - this.MARGIN &&
			x + widthOfMovedItem <= bottomLine[1][0] + this.MARGIN
		) {
			var diff = y - bottomLine[0][1];
			if (diff <= this.MARGIN) {
				return false;
			}
		}
		// for TOP RIGHT Corner END

		// for BOTTOM LEFT Corner
		if (
			x > rightLine[0][0] &&
			y + heightOfMovedItem >= rightLine[0][1] - this.MARGIN &&
			y + heightOfMovedItem <= rightLine[1][1] + this.MARGIN
		) {
			var diff = x - rightLine[0][0];
			if (diff <= this.MARGIN) {
				return false;
			}
		}
		// for BOTTOM LEFT Corner END

		if (
			(y > bottomLine[0][1] &&
				bottomLine[0][0] >= x &&
				bottomLine[0][0] <= x + widthOfMovedItem) ||
			(y > bottomLine[0][1] &&
				bottomLine[1][0] >= x &&
				bottomLine[1][0] <= x + widthOfMovedItem)
		) {
			var diff = y - bottomLine[0][1];
			if (diff <= this.MARGIN) {
				return false;
			}
		}

		if (
			(x > rightLine[0][0] &&
				rightLine[0][1] >= y &&
				rightLine[0][1] <= y + heightOfMovedItem) ||
			(x > rightLine[0][0] &&
				rightLine[1][1] >= y &&
				rightLine[1][1] <= y + heightOfMovedItem)
		) {
			var diff = x - rightLine[0][0];
			if (diff <= this.MARGIN) {
				return false;
			}
		}
	}

	if (indexOfOverlappingItem == null) {
		if (
			x +
				this.positionData[indexOfMovedItem].width +
				getMarginAtPoint.call(this, x) >
			this.WIDTH
		) {
			return false;
		} else {
			return mousePositions;
		}
	} else {
		if (
			this.positionData[indexOfOverlappingItem].x +
				this.positionData[indexOfMovedItem].width +
				getMarginAtPoint.call(
					this,
					this.positionData[indexOfOverlappingItem].x
				) >
			this.WIDTH
		) {
			return false;
		} else {
			return {
				x: x,
				y: y,
				revisedCoordinates: {
					x: this.positionData[indexOfOverlappingItem].x,
					y: this.positionData[indexOfOverlappingItem].y
				}
			};
		}
	}
};

export const showMoveDemo = function(index, mousePosition) {
	if (mousePosition != false) {
		var newMoveCoordinates = checkNewMoveCoordinates.call(
			this,
			index,
			mousePosition
		);
		if (newMoveCoordinates == false) {
			this.$limberGridViewBodyPseudoItems[index].classList.remove(
				"limberGridViewBodyPseudoItemMoveAllow"
			);
			this.$limberGridViewBodyPseudoItems[index].classList.add(
				"limberGridViewBodyPseudoItemMoveDisallow"
			);
		} else {
			if (newMoveCoordinates.hasOwnProperty("revisedCoordinates")) {
				movePlaneDemo.call(
					this,
					index,
					newMoveCoordinates.revisedCoordinates.x,
					newMoveCoordinates.revisedCoordinates.y
				);
				this.$limberGridViewMoveGuide[0].style.transform =
					"translate(" +
					newMoveCoordinates.revisedCoordinates.x +
					"px, " +
					newMoveCoordinates.revisedCoordinates.y +
					"px)";
				this.$limberGridViewMoveGuide[0].classList.add(
					"limberGridViewMoveGuideActive"
				);
			} else {
				movePlaneDemo.call(
					this,
					index,
					newMoveCoordinates.x,
					newMoveCoordinates.y
				);
				this.$limberGridViewMoveGuide[0].style.transform =
					"translate(" +
					newMoveCoordinates.x +
					"px, " +
					newMoveCoordinates.y +
					"px)";
				this.$limberGridViewMoveGuide[0].classList.add(
					"limberGridViewMoveGuideActive"
				);
			}
			this.$limberGridViewBodyPseudoItems[index].classList.remove(
				"limberGridViewBodyPseudoItemMoveDisallow"
			);
			this.$limberGridViewBodyPseudoItems[index].classList.add(
				"limberGridViewBodyPseudoItemMoveAllow"
			);
		}
	} else {
		this.$limberGridViewBodyPseudoItems[index].classList.remove(
			"limberGridViewBodyPseudoItemMoveAllow"
		);
		this.$limberGridViewBodyPseudoItems[index].classList.add(
			"limberGridViewBodyPseudoItemMoveDisallow"
		);
	}
};

export const showResizeDemo = function(index, width, height) {
	if (resizePlaneDemo.call(this, index, width, height) == false) {
		this.$limberGridViewGridPseudoItems[
			this.userActionData.itemIndex
		].classList.add("limberGridViewGridPseudoItemResizeDisallow");
	} else {
		this.$limberGridViewGridPseudoItems[
			this.userActionData.itemIndex
		].classList.add("limberGridViewGridPseudoItemResizeAllow");
	}
};

export const revertShowMoveOrResizeDemo = function() {
	var length_0 = this.$limberGridViewItems.length;
	for (var i = 0; i < length_0; i++) {
		this.$limberGridViewItems[i].style.transform =
			"translate(" +
			this.positionData[i].x +
			"px, " +
			this.positionData[i].y +
			"px)";
		this.$limberGridViewItems[i].classList.remove(
			"limberGridViewItemDemo",
			"limberGridViewItemResizingState"
		);
		this.$limberGridViewGridPseudoItems[i].classList.remove(
			"limberGridViewGridPseudoItemResizingState",
			"limberGridViewGridPseudoItemActive"
		);
	}
};
