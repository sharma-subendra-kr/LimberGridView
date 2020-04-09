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
	getLines,
	getMarginAtPoint,
	adjustHeight,
	adjustScroll,
} from "../utils/essentials";
import {
	resizePlane,
	resizePlaneDemo,
	movePlane,
	movePlaneDemo,
} from "../calc/calcPosition";
import publicConstants from "../../constants/publicConstants";
import privateConstants from "../../constants/privateConstants";
import { callbacks, positionData } from "../../variables/essentials";
import e from "../../variables/elements";
import {
	calculateTouchPosOnLimberGrid,
	calculateTouchPosOnLimberGridItem,
} from "./eventHandlerUtils.js";
import { onLimberGridTouchStart } from "./addItemAndCutSpace";

let userActionData = {};
let mouseDownCancel = false;
let mouseDownTimerComplete = true;
let tapHoldCancel = false;
let tapHoldTimerComplete = false;
let longPressCheck;
let longTouchCheck;
let showResizeDemoTimeOutVariable;
let showMoveDemoTimeOutVariable;

export const onItemMouseDown = function(event) {
	console.log("onItemMouseDown positionData", positionData);
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

	if (radius <= publicConstants.MOVE_GUIDE_RADIUS) {
		userActionData = {
			type: "move",
			itemIndex: event.currentTarget.attributes["data-index"].value,
		};
		mouseDownCancel = false;
		mouseDownTimerComplete = false;

		document.addEventListener("mousemove", onMouseMove);
		document.addEventListener("mouseup", onMouseUp);
		document.addEventListener("contextmenu", onContextMenu);
		clearTimeout(longPressCheck);
		longPressCheck = setTimeout(
			mouseDownCheck.bind(this, event),
			publicConstants.MOUSE_DOWN_TIME
		);

		event.preventDefault();
	} else if (
		event.offsetX >= resizeUIBox.x &&
		event.offsetX <= resizeUIBox.x + resizeUIBox.width &&
		event.offsetY >= resizeUIBox.y &&
		event.offsetY <= resizeUIBox.y + resizeUIBox.height
	) {
		e.$limberGridViewHeightAdjustGuide[0].style.height = 0 + "px";
		e.$limberGridViewHeightAdjustGuide[0].classList.add(
			"limberGridViewHeightAdjustGuideActive"
		);

		userActionData = {
			type: "resize",
			itemIndex: event.currentTarget.attributes["data-index"].value,
		};
		mouseDownCancel = false;
		mouseDownTimerComplete = true;

		e.$limberGridView[0].addEventListener("mousemove", onMouseMove);
		document.addEventListener("mouseup", onMouseUp);
		document.addEventListener("contextmenu", onContextMenu);

		var transformStyle =
			e.$limberGridViewItems[userActionData.itemIndex].style.transform;
		var i1 = transformStyle.indexOf("px");
		var i2 = transformStyle.indexOf(",");
		var x = Number(transformStyle.substring(10, i1));
		var y = Number(
			transformStyle.substring(i2 + 2, transformStyle.length - 3)
		);

		userActionData.itemPositionX = x;
		userActionData.itemPositionY = y;

		e.$limberGridViewGridPseudoItems[userActionData.itemIndex].style.width =
			positionData[userActionData.itemIndex].width + "px";
		e.$limberGridViewGridPseudoItems[
			userActionData.itemIndex
		].style.height = positionData[userActionData.itemIndex].height + "px";

		e.$limberGridViewGridPseudoItems[
			userActionData.itemIndex
		].style.transform = "translate(" + x + "px, " + y + "px)";
		e.$limberGridViewGridPseudoItems[
			userActionData.itemIndex
		].classList.add("limberGridViewGridPseudoItemActive");

		e.$body[0].classList.add(
			"limberGridViewBodyTagStateElementDraggingOrResizing"
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

		e.$limberGridViewGridPseudoItems[
			userActionData.itemIndex
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

	var touchPosOnLimberGridItem = calculateTouchPosOnLimberGridItem(event);
	if (touchPosOnLimberGridItem == false) {
		return;
	}
	var radius = Math.sqrt(
		Math.pow(0 - touchPosOnLimberGridItem.x, 2) +
			Math.pow(0 - touchPosOnLimberGridItem.y, 2)
	);
	var resizeUIBox = {
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

	if (radius <= publicConstants.MOVE_GUIDE_RADIUS) {
		userActionData = {
			type: "move",
			itemIndex: event.currentTarget.attributes["data-index"].value,
		};
		tapHoldCancel = false;
		tapHoldTimerComplete = false;

		document.addEventListener("touchmove", onTouchMove);
		document.addEventListener("touchend", onTouchEnd);
		e.$limberGridView[0].removeEventListener(
			"touchstart",
			onLimberGridTouchStart
		);

		document.addEventListener("contextmenu", onItemTouchContextMenu);
		document.addEventListener("touchcancel", onTouchCancel);

		longTouchCheck = setTimeout(
			tapHoldCheck.bind(this, event),
			publicConstants.TOUCH_HOLD_TIME
		);

		event.preventDefault();
	} else if (
		touchPosOnLimberGridItem.x >= resizeUIBox.x &&
		touchPosOnLimberGridItem.x <= resizeUIBox.x + resizeUIBox.width &&
		touchPosOnLimberGridItem.y >= resizeUIBox.y &&
		touchPosOnLimberGridItem.y <= resizeUIBox.y + resizeUIBox.height
	) {
		e.$limberGridViewHeightAdjustGuide[0].style.height = 0 + "px";
		e.$limberGridViewHeightAdjustGuide[0].classList.add(
			"limberGridViewHeightAdjustGuideActive"
		);

		userActionData = {
			type: "resize",
			itemIndex: event.currentTarget.attributes["data-index"].value,
		};
		tapHoldCancel = false;
		tapHoldTimerComplete = true;

		e.$limberGridView[0].addEventListener("touchmove", onTouchMove);
		document.addEventListener("touchend", onTouchEnd);
		e.$limberGridView[0].removeEventListener(
			"touchstart",
			onLimberGridTouchStart
		);

		document.addEventListener("touchcancel", onTouchCancel);

		var transformStyle =
			e.$limberGridViewItems[userActionData.itemIndex].style.transform;
		var i1 = transformStyle.indexOf("px");
		var i2 = transformStyle.indexOf(",");
		var x = Number(transformStyle.substring(10, i1));
		var y = Number(
			transformStyle.substring(i2 + 2, transformStyle.length - 3)
		);

		userActionData.itemPositionX = x;
		userActionData.itemPositionY = y;

		e.$limberGridViewGridPseudoItems[userActionData.itemIndex].style.width =
			positionData[userActionData.itemIndex].width + "px";
		e.$limberGridViewGridPseudoItems[
			userActionData.itemIndex
		].style.height = positionData[userActionData.itemIndex].height + "px";

		e.$limberGridViewGridPseudoItems[
			userActionData.itemIndex
		].style.transform = "translate(" + x + "px, " + y + "px)";
		e.$limberGridViewGridPseudoItems[
			userActionData.itemIndex
		].classList.add("limberGridViewGridPseudoItemActive");

		e.$body[0].classList.add(
			"limberGridViewBodyTagStateElementDraggingOrResizing"
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

		e.$limberGridViewGridPseudoItems[
			userActionData.itemIndex
		].classList.remove(
			"limberGridViewGridPseudoItemResizeAllow",
			"limberGridViewGridPseudoItemResizeDisallow"
		);

		event.preventDefault();
	}

	event.stopPropagation();
};

export const mouseDownCheck = function(event) {
	if (mouseDownCancel == false) {
		mouseDownTimerComplete = true;
		console.log("mouseDownTimerComplete");
		e.$body[0].classList.add(
			"limberGridViewBodyTagStateElementDraggingOrResizing"
		);
		e.$limberGridViewItems[userActionData.itemIndex].classList.add(
			"limberGridViewItemDemo"
		);
		e.$limberGridViewBodyPseudoItems[
			userActionData.itemIndex
		].classList.add("limberGridViewBodyPseudoItemActive");
		e.$limberGridViewBodyPseudoItems[
			userActionData.itemIndex
		].style.transform =
			"translate(" +
			event.pageX /*+ 5*/ +
			"px, " +
			event.pageY /*+ 5*/ +
			"px)";

		e.$limberGridViewHeightAdjustGuide[0].style.height = 0 + "px";
		e.$limberGridViewHeightAdjustGuide[0].classList.add(
			"limberGridViewHeightAdjustGuideActive"
		);
	} else {
		console.log("mouseDown cancel before TimerComplete");
	}
};

export const tapHoldCheck = function(event) {
	if (tapHoldCancel == false) {
		tapHoldTimerComplete = true;

		e.$body[0].classList.add(
			"limberGridViewBodyTagStateElementDraggingOrResizing"
		);
		e.$limberGridViewItems[userActionData.itemIndex].classList.add(
			"limberGridViewItemDemo"
		);
		e.$limberGridViewBodyPseudoItems[
			userActionData.itemIndex
		].classList.add("limberGridViewBodyPseudoItemActive");
		e.$limberGridViewBodyPseudoItems[
			userActionData.itemIndex
		].style.transform =
			"translate(" +
			event.touches[0].pageX /*+ 5*/ +
			"px, " +
			event.touches[0].pageY /*+ 5*/ +
			"px)";

		e.$limberGridViewHeightAdjustGuide[0].style.height = 0 + "px";
		e.$limberGridViewHeightAdjustGuide[0].classList.add(
			"limberGridViewHeightAdjustGuideActive"
		);
	} else {
		// tapHold cancel before TimerComplete
	}
};

export const onMouseMove = function(event) {
	if (mouseDownTimerComplete == true) {
		if (userActionData.type == "move") {
			if (
				e.$limberGridViewMoveGuide[0].classList.contains(
					"limberGridViewMoveGuideActive"
				)
			) {
				e.$limberGridViewMoveGuide[0].classList.remove(
					"limberGridViewMoveGuideActive"
				);
			}

			if (
				e.$limberGridViewBodyPseudoItems[
					userActionData.itemIndex
				].classList.contains("limberGridViewBodyPseudoItemMoveAllow") ||
				e.$limberGridViewBodyPseudoItems[
					userActionData.itemIndex
				].classList.contains("limberGridViewBodyPseudoItemMoveDisallow")
			) {
				e.$limberGridViewBodyPseudoItems[
					userActionData.itemIndex
				].classList.remove(
					"limberGridViewBodyPseudoItemMoveAllow",
					"limberGridViewBodyPseudoItemMoveDisallow"
				);
			}

			e.$limberGridViewBodyPseudoItems[
				userActionData.itemIndex
			].style.transform =
				"translate(" +
				event.pageX /*+ 5*/ +
				"px, " +
				event.pageY /*+ 5*/ +
				"px)";
			var mousePositionOnLimberGrid = calculateMousePosOnLimberGrid(
				event
			);

			if (mousePositionOnLimberGrid != false) {
				var scrollTop = e.$limberGridView[0].scrollTop;
				var scrollHeight = e.$limberGridView[0].scrollHeight;

				var yMousePosition = mousePositionOnLimberGrid.y;
				adjustHeight(yMousePosition);
			}

			clearTimeout(showMoveDemoTimeOutVariable);
			showMoveDemoTimeOutVariable = setTimeout(
				showMoveDemo.bind(
					this,
					userActionData.itemIndex,
					mousePositionOnLimberGrid
				),
				publicConstants.DEMO_WAIT_TIME
			);
		} else {
			var scrollTop = e.$limberGridView[0].scrollTop;
			var scrollLeft = e.$limberGridView[0].scrollLeft;

			var x = userActionData.itemPositionX;
			var y = userActionData.itemPositionY;

			var newWidth =
				event.offsetX - x + scrollLeft - privateConstants.PADDING_LEFT;
			var newHeight =
				event.offsetY - y + scrollTop - privateConstants.PADDING_TOP;

			userActionData.newWidth = newWidth;
			userActionData.newHeight = newHeight;

			var yMousePosition = event.offsetY + scrollTop;
			adjustHeight(yMousePosition);

			if (newWidth > 0 && newHeight > 0) {
				e.$limberGridViewGridPseudoItems[
					userActionData.itemIndex
				].style.width = newWidth + "px";
				e.$limberGridViewGridPseudoItems[
					userActionData.itemIndex
				].style.height = newHeight + "px";
			}

			if (
				e.$limberGridViewGridPseudoItems[
					userActionData.itemIndex
				].classList.contains(
					"limberGridViewGridPseudoItemResizeAllow"
				) ||
				e.$limberGridViewGridPseudoItems[
					userActionData.itemIndex
				].classList.contains(
					"limberGridViewGridPseudoItemResizeDisallow"
				)
			) {
				e.$limberGridViewGridPseudoItems[
					userActionData.itemIndex
				].classList.remove(
					"limberGridViewGridPseudoItemResizeAllow",
					"limberGridViewGridPseudoItemResizeDisallow"
				);
			}

			clearTimeout(showResizeDemoTimeOutVariable);
			showResizeDemoTimeOutVariable = setTimeout(
				showResizeDemo.bind(
					this,
					userActionData.itemIndex,
					newWidth,
					newHeight
				),
				publicConstants.DEMO_WAIT_TIME
			);
		}
	} else {
		mouseDownCancel = true;
		clearTimeout(longPressCheck);
		document.removeEventListener("mousemove", onMouseMove);
		e.$limberGridView[0].removeEventListener("mousemove", onMouseMove);
		document.removeEventListener("mouseup", onMouseUp);
		document.removeEventListener("contextmenu", onContextMenu);

		// canceling mouseHold
	}
	event.preventDefault();
	event.stopPropagation();
};

export const onTouchMove = function(event) {
	if (tapHoldTimerComplete == true) {
		if (userActionData.type == "move") {
			if (
				e.$limberGridViewMoveGuide[0].classList.contains(
					"limberGridViewMoveGuideActive"
				)
			) {
				e.$limberGridViewMoveGuide[0].classList.remove(
					"limberGridViewMoveGuideActive"
				);
			}

			if (
				e.$limberGridViewBodyPseudoItems[
					userActionData.itemIndex
				].classList.contains("limberGridViewBodyPseudoItemMoveAllow") ||
				e.$limberGridViewBodyPseudoItems[
					userActionData.itemIndex
				].classList.contains("limberGridViewBodyPseudoItemMoveDisallow")
			) {
				e.$limberGridViewBodyPseudoItems[
					userActionData.itemIndex
				].classList.remove(
					"limberGridViewBodyPseudoItemMoveAllow",
					"limberGridViewBodyPseudoItemMoveDisallow"
				);
			}

			e.$limberGridViewBodyPseudoItems[
				userActionData.itemIndex
			].style.transform =
				"translate(" +
				event.touches[0].pageX /*+ 5*/ +
				"px, " +
				event.touches[0].pageY /*+ 5*/ +
				"px)";
			var touchPositionOnLimberGrid = calculateTouchPosOnLimberGrid(
				event
			);

			if (touchPositionOnLimberGrid != false) {
				var scrollTop = e.$limberGridView[0].scrollTop;
				var scrollLeft = e.$limberGridView[0].scrollLeft;

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
				adjustHeight(yTouchPosition);

				var programScrolled = adjustScroll(
					limberGridViewOnVisibleAreaY,
					limberGridViewHeightVisibleHeight
				);
			}

			clearTimeout(showMoveDemoTimeOutVariable);
			if (programScrolled != true) {
				showMoveDemoTimeOutVariable = setTimeout(
					showMoveDemo.bind(
						this,
						userActionData.itemIndex,
						touchPositionOnLimberGrid
					),
					publicConstants.DEMO_WAIT_TIME
				);
			}
		} else {
			var scrollTop = e.$limberGridView[0].scrollTop;
			var scrollLeft = e.$limberGridView[0].scrollLeft;

			var x = userActionData.itemPositionX;
			var y = userActionData.itemPositionY;

			var touchPositionOnLimberGrid = calculateTouchPosOnLimberGrid(
				event
			);

			if (touchPositionOnLimberGrid != false) {
				var newWidth = touchPositionOnLimberGrid.x - x;
				var newHeight = touchPositionOnLimberGrid.y - y;

				userActionData.newWidth = newWidth;
				userActionData.newHeight = newHeight;

				if (newWidth > 0 && newHeight > 0) {
					e.$limberGridViewGridPseudoItems[
						userActionData.itemIndex
					].style.width = newWidth + "px";
					e.$limberGridViewGridPseudoItems[
						userActionData.itemIndex
					].style.height = newHeight + "px";
				}

				if (
					e.$limberGridViewGridPseudoItems[
						userActionData.itemIndex
					].classList.contains(
						"limberGridViewGridPseudoItemResizeAllow"
					) ||
					e.$limberGridViewGridPseudoItems[
						userActionData.itemIndex
					].classList.contains(
						"limberGridViewGridPseudoItemResizeDisallow"
					)
				) {
					e.$limberGridViewGridPseudoItems[
						userActionData.itemIndex
					].classList.remove(
						"limberGridViewGridPseudoItemResizeAllow",
						"limberGridViewGridPseudoItemResizeDisallow"
					);
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
				adjustHeight(yTouchPosition);

				var programScrolled = adjustScroll(
					limberGridViewOnVisibleAreaY,
					limberGridViewHeightVisibleHeight
				);
			}

			clearTimeout(showResizeDemoTimeOutVariable);
			if (programScrolled != true) {
				showResizeDemoTimeOutVariable = setTimeout(
					showResizeDemo.bind(
						this,
						userActionData.itemIndex,
						newWidth,
						newHeight
					),
					publicConstants.DEMO_WAIT_TIME
				);
			}
		}
	} else {
		tapHoldCancel = true;
		clearTimeout(longTouchCheck);
		document.removeEventListener("touchmove", onTouchMove);
		e.$limberGridView[0].removeEventListener("touchmove", onTouchMove);
		document.removeEventListener("touchend", onTouchEnd);
		document.removeEventListener("contextmenu", onContextMenu);
		document.removeEventListener("contextmenu", onItemTouchContextMenu);
		document.removeEventListener("touchcancel", onTouchCancel);
		e.$limberGridView[0].addEventListener(
			"touchstart",
			onLimberGridTouchStart
		);

		// canceling taphold
	}

	event.stopPropagation();
};

export const onMouseUp = function(event) {
	clearTimeout(showMoveDemoTimeOutVariable);
	clearTimeout(showResizeDemoTimeOutVariable);
	var itemResizeFlag = false;
	var itemMoveFlag = false;
	if (mouseDownTimerComplete == true) {
		if (userActionData.type == "move") {
			e.$limberGridViewBodyPseudoItems[
				userActionData.itemIndex
			].classList.remove("limberGridViewBodyPseudoItemActive");
			e.$limberGridViewBodyPseudoItems[
				userActionData.itemIndex
			].style.transform = "translate(" + 0 + "px, " + 0 + "px)";
			var mousePositionOnLimberGrid = calculateMousePosOnLimberGrid(
				event
			);
			if (mousePositionOnLimberGrid != false) {
				var newMoveCoordinates = checkNewMoveCoordinates(
					userActionData.itemIndex,
					mousePositionOnLimberGrid
				);
				if (newMoveCoordinates != false) {
					var updatedCoordinates = {};
					if (
						newMoveCoordinates.hasOwnProperty("revisedCoordinates")
					) {
						movePlane(
							userActionData.itemIndex,
							newMoveCoordinates.revisedCoordinates.x,
							newMoveCoordinates.revisedCoordinates.y
						);
						updatedCoordinates.x =
							newMoveCoordinates.revisedCoordinates.x;
						updatedCoordinates.y =
							newMoveCoordinates.revisedCoordinates.y;
						itemMoveFlag = true;
					} else {
						movePlane(
							userActionData.itemIndex,
							newMoveCoordinates.x,
							newMoveCoordinates.y
						);
						updatedCoordinates.x = newMoveCoordinates.x;
						updatedCoordinates.y = newMoveCoordinates.y;
						itemMoveFlag = true;
					}
				} else {
					revertShowMoveOrResizeDemo();
				}
			} else {
				revertShowMoveOrResizeDemo();
			}
		} else {
			var scrollTop = e.$limberGridView[0].scrollTop;
			var scrollLeft = e.$limberGridView[0].scrollLeft;

			var x = userActionData.itemPositionX;
			var y = userActionData.itemPositionY;

			var newWidth = userActionData.newWidth;
			var newHeight = userActionData.newHeight;

			if (newWidth > 0 && newHeight > 0) {
				e.$limberGridViewGridPseudoItems[
					userActionData.itemIndex
				].style.width = newWidth + "px";
				e.$limberGridViewGridPseudoItems[
					userActionData.itemIndex
				].style.height = newHeight + "px";
			}

			if (
				resizePlane(userActionData.itemIndex, newWidth, newHeight) ==
				false
			) {
				revertShowMoveOrResizeDemo();
				itemResizeFlag = true;
			}

			e.$limberGridViewGridPseudoItems[
				userActionData.itemIndex
			].style.transform = "translate(" + 0 + "px, " + 0 + "px)";
			e.$limberGridViewGridPseudoItems[
				userActionData.itemIndex
			].classList.remove("limberGridViewGridPseudoItemActive");
		}
	} else {
		mouseDownCancel = true;
		clearTimeout(longPressCheck);
		// canceling mouseHold
	}
	document.removeEventListener("mousemove", onMouseMove);
	e.$limberGridView[0].removeEventListener("mousemove", onMouseMove);
	document.removeEventListener("mouseup", onMouseUp);
	document.removeEventListener("contextmenu", onContextMenu);

	e.$body[0].classList.remove(
		"limberGridViewBodyTagStateElementDraggingOrResizing"
	);
	e.$limberGridViewMoveGuide[0].classList.remove(
		"limberGridViewMoveGuideActive"
	);

	e.$limberGridViewHeightAdjustGuide[0].classList.remove(
		"limberGridViewHeightAdjustGuideActive"
	);

	event.preventDefault();
	event.stopPropagation();

	//
	if (
		callbacks.moveCompleteCallback != undefined &&
		callbacks.moveCompleteCallback != null
	) {
		if (itemMoveFlag == true) {
			updatedCoordinates.width =
				positionData[userActionData.itemIndex].width;
			updatedCoordinates.height =
				positionData[userActionData.itemIndex].height;
			callbacks.moveCompleteCallback(
				true,
				userActionData.itemIndex,
				updatedCoordinates
			);
		} else if (userActionData.type == "move") {
			callbacks.moveCompleteCallback(
				false,
				userActionData.itemIndex,
				event
			);
		}
	}
	if (
		callbacks.resizeCompleteCallback != undefined &&
		callbacks.resizeCompleteCallback != null
	) {
		if (itemResizeFlag == true) {
			callbacks.resizeCompleteCallback(userActionData.itemIndex, {
				x: positionData[userActionData.itemIndex].x,
				y: positionData[userActionData.itemIndex].y,
				height: newHeight,
				width: newWidth,
			});
		}
	}
	//

	userActionData = null;
};

export const onTouchEnd = function(event) {
	clearTimeout(showMoveDemoTimeOutVariable);
	clearTimeout(showResizeDemoTimeOutVariable);
	var itemResizeFlag = false;
	var itemMoveFlag = false;
	if (tapHoldTimerComplete == true) {
		if (userActionData.type == "move") {
			e.$limberGridViewBodyPseudoItems[
				userActionData.itemIndex
			].classList.remove("limberGridViewBodyPseudoItemActive");
			e.$limberGridViewBodyPseudoItems[
				userActionData.itemIndex
			].style.transform = "translate(" + 0 + "px, " + 0 + "px)";
			var touchPositionOnLimberGrid = calculateTouchPosOnLimberGrid(
				event
			);
			if (touchPositionOnLimberGrid != false) {
				var newMoveCoordinates = checkNewMoveCoordinates(
					userActionData.itemIndex,
					touchPositionOnLimberGrid
				);
				if (newMoveCoordinates != false) {
					var updatedCoordinates = {};
					if (
						newMoveCoordinates.hasOwnProperty("revisedCoordinates")
					) {
						movePlane(
							userActionData.itemIndex,
							newMoveCoordinates.revisedCoordinates.x,
							newMoveCoordinates.revisedCoordinates.y
						);
						updatedCoordinates.x =
							newMoveCoordinates.revisedCoordinates.x;
						updatedCoordinates.y =
							newMoveCoordinates.revisedCoordinates.y;
						itemMoveFlag = true;
					} else {
						movePlane(
							userActionData.itemIndex,
							newMoveCoordinates.x,
							newMoveCoordinates.y
						);
						updatedCoordinates.x = newMoveCoordinates.x;
						updatedCoordinates.y = newMoveCoordinates.y;
						itemMoveFlag = true;
					}
				} else {
					revertShowMoveOrResizeDemo();
				}
			} else {
				revertShowMoveOrResizeDemo();
			}
		} else {
			var scrollTop = e.$limberGridView[0].scrollTop;
			var scrollLeft = e.$limberGridView[0].scrollLeft;

			var x = userActionData.itemPositionX;
			var y = userActionData.itemPositionY;

			var newWidth = userActionData.newWidth;
			var newHeight = userActionData.newHeight;

			if (newWidth > 0 && newHeight > 0) {
				e.$limberGridViewGridPseudoItems[
					userActionData.itemIndex
				].style.width = newWidth + "px";
				e.$limberGridViewGridPseudoItems[
					userActionData.itemIndex
				].style.height = newHeight + "px";
			}

			if (
				resizePlane(userActionData.itemIndex, newWidth, newHeight) ==
				false
			) {
				revertShowMoveOrResizeDemo();
				itemResizeFlag = true;
			}

			e.$limberGridViewGridPseudoItems[
				userActionData.itemIndex
			].style.transform = "translate(" + 0 + "px, " + 0 + "px)";
			e.$limberGridViewGridPseudoItems[
				userActionData.itemIndex
			].classList.remove("limberGridViewGridPseudoItemActive");
		}
	} else {
		tapHoldCancel = true;
		clearTimeout(longTouchCheck);

		// canceling taphold
	}

	document.removeEventListener("touchmove", onTouchMove);
	e.$limberGridView[0].removeEventListener("touchmove", onTouchMove);
	document.removeEventListener("touchend", onTouchEnd);
	document.removeEventListener("contextmenu", onContextMenu);
	document.removeEventListener("contextmenu", onItemTouchContextMenu);
	document.removeEventListener("touchcancel", onTouchCancel);
	e.$limberGridView[0].addEventListener("touchstart", onLimberGridTouchStart);

	e.$body[0].classList.remove(
		"limberGridViewBodyTagStateElementDraggingOrResizing"
	);
	e.$limberGridViewMoveGuide[0].classList.remove(
		"limberGridViewMoveGuideActive"
	);

	e.$limberGridViewHeightAdjustGuide[0].classList.remove(
		"limberGridViewHeightAdjustGuideActive"
	);

	event.stopPropagation();

	//
	if (
		callbacks.moveCompleteCallback != undefined &&
		callbacks.moveCompleteCallback != null
	) {
		if (itemMoveFlag == true) {
			updatedCoordinates.width =
				positionData[userActionData.itemIndex].width;
			updatedCoordinates.height =
				positionData[userActionData.itemIndex].height;
			callbacks.moveCompleteCallback(
				true,
				userActionData.itemIndex,
				updatedCoordinates
			);
		} else if (userActionData.type == "move") {
			callbacks.moveCompleteCallback(
				false,
				userActionData.itemIndex,
				event
			);
		}
	}
	if (
		callbacks.resizeCompleteCallback != undefined &&
		callbacks.resizeCompleteCallback != null
	) {
		if (itemResizeFlag == true) {
			callbacks.resizeCompleteCallback(userActionData.itemIndex, {
				x: positionData[userActionData.itemIndex].x,
				y: positionData[userActionData.itemIndex].y,
				height: newHeight,
				width: newWidth,
			});
		}
	}
	//

	userActionData = null;
};

export const onContextMenu = function(event) {
	clearTimeout(showMoveDemoTimeOutVariable);
	clearTimeout(showResizeDemoTimeOutVariable);

	revertShowMoveOrResizeDemo();

	e.$limberGridViewGridPseudoItems[userActionData.itemIndex].classList.remove(
		"limberGridViewGridPseudoItemActive"
	);

	e.$limberGridViewBodyPseudoItems[userActionData.itemIndex].classList.remove(
		"limberGridViewBodyPseudoItemActive"
	);
	e.$limberGridViewBodyPseudoItems[userActionData.itemIndex].style.transform =
		"translate(" + 0 + "px, " + 0 + "px)";

	document.removeEventListener("mousemove", onMouseMove);
	e.$limberGridView[0].removeEventListener("mousemove", onMouseMove);
	document.removeEventListener("mouseup", onMouseUp);

	document.removeEventListener("touchmove", onTouchMove);
	e.$limberGridView[0].removeEventListener("touchmove", onTouchMove);
	document.removeEventListener("touchend", onTouchEnd);
	document.removeEventListener("contextmenu", onItemTouchContextMenu);
	document.removeEventListener("touchcancel", onTouchCancel);

	document.removeEventListener("contextmenu", onContextMenu);

	e.$body[0].classList.remove(
		"limberGridViewBodyTagStateElementDraggingOrResizing"
	);
	e.$limberGridViewMoveGuide[0].classList.remove(
		"limberGridViewMoveGuideActive"
	);

	e.$limberGridViewHeightAdjustGuide[0].classList.remove(
		"limberGridViewHeightAdjustGuideActive"
	);

	userActionData = null;

	event.preventDefault();
	event.stopPropagation();
};

export const onItemTouchContextMenu = function(event) {
	event.preventDefault();
};

export const onTouchCancel = function(event) {
	onContextMenu();
	tapHoldTimerComplete = false;
	e.$limberGridView[0].addEventListener("touchstart", onLimberGridTouchStart);
};

export const calculateMousePosOnLimberGrid = function(event) {
	var limberGridViewPosition = e.$limberGridView[0].getBoundingClientRect();
	if (
		event.clientX >= limberGridViewPosition.left &&
		event.clientX <=
			limberGridViewPosition.left + limberGridViewPosition.width &&
		(event.clientY >= limberGridViewPosition.top &&
			event.clientY <=
				limberGridViewPosition.top + limberGridViewPosition.height)
	) {
		var scrollTop = e.$limberGridView[0].scrollTop;
		var scrollLeft = e.$limberGridView[0].scrollLeft;

		var mouseXOnLimberGridView =
			event.clientX -
			limberGridViewPosition.left -
			privateConstants.PADDING_LEFT +
			scrollLeft;
		var mouseYOnLimberGridView =
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

export const checkNewMoveCoordinates = function(
	indexOfMovedItem,
	mousePositions
) {
	if (mousePositions == false) {
		return false;
	}

	var x = mousePositions.x;
	var y = mousePositions.y;
	var widthOfMovedItem = positionData[indexOfMovedItem].width;
	var heightOfMovedItem = positionData[indexOfMovedItem].height;

	var isInside = false;
	var indexOfOverlappingItem = null;
	var length_0 = positionData.length;
	for (var i = 0; i < length_0; i++) {
		var itemTopLeft = [positionData[i].x, positionData[i].y];
		var itemTopRight = [
			positionData[i].x + positionData[i].width,
			positionData[i].y,
		];
		var itemBottomLeft = [
			positionData[i].x,
			positionData[i].y + positionData[i].height,
		];
		var itemBottomRight = [
			positionData[i].x + positionData[i].width,
			positionData[i].y + positionData[i].height,
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

		var lines = getLines(positionData[i]);

		var topLine = lines[0];
		var rightLine = lines[1];
		var bottomLine = lines[2];
		var leftLine = lines[3];

		// for TOP LEFT Corner
		if (
			y < topLine[0][1] &&
			x >= topLine[0][0] - publicConstants.MARGIN &&
			x <= topLine[1][0] + publicConstants.MARGIN
		) {
			var diff = topLine[0][1] - y;
			if (diff <= publicConstants.MARGIN) {
				return false;
			}
		}

		if (
			y > bottomLine[0][1] &&
			x >= bottomLine[0][0] - publicConstants.MARGIN &&
			x <= bottomLine[1][0] + publicConstants.MARGIN
		) {
			var diff = y - bottomLine[0][1];
			if (diff <= publicConstants.MARGIN) {
				return false;
			}
		}

		if (
			x > rightLine[0][0] &&
			y >= rightLine[0][1] - publicConstants.MARGIN &&
			y <= rightLine[1][1] + publicConstants.MARGIN
		) {
			var diff = x - rightLine[0][0];
			if (diff <= publicConstants.MARGIN) {
				return false;
			}
		}

		if (
			x < leftLine[0][0] &&
			y >= leftLine[0][1] - publicConstants.MARGIN &&
			y <= leftLine[1][1] + publicConstants.MARGIN
		) {
			var diff = leftLine[0][0] - x;
			if (diff <= publicConstants.MARGIN) {
				return false;
			}
		}
		// for TOP LEFT Corner END

		// for TOP RIGHT Corner
		if (
			y > bottomLine[0][1] &&
			x + widthOfMovedItem >= bottomLine[0][0] - publicConstants.MARGIN &&
			x + widthOfMovedItem <= bottomLine[1][0] + publicConstants.MARGIN
		) {
			var diff = y - bottomLine[0][1];
			if (diff <= publicConstants.MARGIN) {
				return false;
			}
		}
		// for TOP RIGHT Corner END

		// for BOTTOM LEFT Corner
		if (
			x > rightLine[0][0] &&
			y + heightOfMovedItem >= rightLine[0][1] - publicConstants.MARGIN &&
			y + heightOfMovedItem <= rightLine[1][1] + publicConstants.MARGIN
		) {
			var diff = x - rightLine[0][0];
			if (diff <= publicConstants.MARGIN) {
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
			if (diff <= publicConstants.MARGIN) {
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
			if (diff <= publicConstants.MARGIN) {
				return false;
			}
		}
	}

	if (indexOfOverlappingItem == null) {
		if (
			x + positionData[indexOfMovedItem].width + getMarginAtPoint(x) >
			privateConstants.WIDTH
		) {
			return false;
		} else {
			return mousePositions;
		}
	} else {
		if (
			positionData[indexOfOverlappingItem].x +
				positionData[indexOfMovedItem].width +
				getMarginAtPoint(positionData[indexOfOverlappingItem].x) >
			privateConstants.WIDTH
		) {
			return false;
		} else {
			return {
				x: x,
				y: y,
				revisedCoordinates: {
					x: positionData[indexOfOverlappingItem].x,
					y: positionData[indexOfOverlappingItem].y,
				},
			};
		}
	}
};

export const showMoveDemo = function(index, mousePosition) {
	if (mousePosition != false) {
		var newMoveCoordinates = checkNewMoveCoordinates(index, mousePosition);
		if (newMoveCoordinates == false) {
			e.$limberGridViewBodyPseudoItems[index].classList.remove(
				"limberGridViewBodyPseudoItemMoveAllow"
			);
			e.$limberGridViewBodyPseudoItems[index].classList.add(
				"limberGridViewBodyPseudoItemMoveDisallow"
			);
		} else {
			if (newMoveCoordinates.hasOwnProperty("revisedCoordinates")) {
				movePlaneDemo(
					index,
					newMoveCoordinates.revisedCoordinates.x,
					newMoveCoordinates.revisedCoordinates.y
				);
				e.$limberGridViewMoveGuide[0].style.transform =
					"translate(" +
					newMoveCoordinates.revisedCoordinates.x +
					"px, " +
					newMoveCoordinates.revisedCoordinates.y +
					"px)";
				e.$limberGridViewMoveGuide[0].classList.add(
					"limberGridViewMoveGuideActive"
				);
			} else {
				movePlaneDemo(
					index,
					newMoveCoordinates.x,
					newMoveCoordinates.y
				);
				e.$limberGridViewMoveGuide[0].style.transform =
					"translate(" +
					newMoveCoordinates.x +
					"px, " +
					newMoveCoordinates.y +
					"px)";
				e.$limberGridViewMoveGuide[0].classList.add(
					"limberGridViewMoveGuideActive"
				);
			}
			e.$limberGridViewBodyPseudoItems[index].classList.remove(
				"limberGridViewBodyPseudoItemMoveDisallow"
			);
			e.$limberGridViewBodyPseudoItems[index].classList.add(
				"limberGridViewBodyPseudoItemMoveAllow"
			);
		}
	} else {
		e.$limberGridViewBodyPseudoItems[index].classList.remove(
			"limberGridViewBodyPseudoItemMoveAllow"
		);
		e.$limberGridViewBodyPseudoItems[index].classList.add(
			"limberGridViewBodyPseudoItemMoveDisallow"
		);
	}
};

export const showResizeDemo = function(index, width, height) {
	if (resizePlaneDemo(index, width, height) == false) {
		e.$limberGridViewGridPseudoItems[
			userActionData.itemIndex
		].classList.add("limberGridViewGridPseudoItemResizeDisallow");
	} else {
		e.$limberGridViewGridPseudoItems[
			userActionData.itemIndex
		].classList.add("limberGridViewGridPseudoItemResizeAllow");
	}
};

export const revertShowMoveOrResizeDemo = function() {
	var length_0 = e.$limberGridViewItems.length;
	for (var i = 0; i < length_0; i++) {
		e.$limberGridViewItems[i].style.transform =
			"translate(" +
			positionData[i].x +
			"px, " +
			positionData[i].y +
			"px)";
		e.$limberGridViewItems[i].classList.remove(
			"limberGridViewItemDemo",
			"limberGridViewItemResizingState"
		);
		e.$limberGridViewGridPseudoItems[i].classList.remove(
			"limberGridViewGridPseudoItemResizingState",
			"limberGridViewGridPseudoItemActive"
		);
	}
};
