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
// import {
// 	resizePlane,
// 	resizePlaneDemo,
// 	movePlane,
// 	movePlaneDemo,
// } from "../calc/calcPosition";
import publicConstants from "../../constants/publicConstants";
import privateConstants from "../../constants/privateConstants";
import { callbacks, positionData as pd } from "../../variables/essentials";
import e from "../../variables/elements";
import {
	getUserActionData,
	getTouchUserActionData,
	calculateTouchPosOnLimberGrid,
	calculateTouchPosOnLimberGridItem,
	loadResizingState,
	unloadResizingState,
	loadMoveState,
	unloadMoveState,
	loadOnMoveState,
	unloadOnMoveState,
} from "./eventHandlerUtils.js";
import { onLimberGridTouchStart } from "./addItemAndCutSpace";
import {
	moveItem,
	moveItemDemo,
	resizeItem,
	resizeItemDemo,
} from "../interaction/itemInteraction";

let userActionData = {};
let mouseDownCancel = false;
let mouseDownTimerComplete = true;
let tapHoldCancel = false;
let tapHoldTimerComplete = false;
let longPressCheck;
let longTouchCheck;
let showResizeDemoTimeOutVariable;
let showMoveDemoTimeOutVariable;

export const onItemMouseDown = function (event) {
	if (event.which !== 1) {
		return;
	}

	if (event.target.classList.contains("limberGridViewItem")) {
		event.stopPropagation();
	} else {
		return;
	}

	userActionData = getUserActionData(event);

	if (userActionData.type === "move") {
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
	} else if (userActionData.type === "resize") {
		mouseDownCancel = false;
		mouseDownTimerComplete = true;

		e.$limberGridView[0].addEventListener("mousemove", onMouseMove);
		document.addEventListener("mouseup", onMouseUp);
		document.addEventListener("contextmenu", onContextMenu);

		userActionData.itemX = pd[userActionData.itemIndex].x;
		userActionData.itemY = pd[userActionData.itemIndex].y;

		loadResizingState(userActionData);

		event.preventDefault();
	}
};

export const onItemTouchStart = function (event) {
	if (event.which !== 0) {
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

	const touchPosOnLimberGridItem = calculateTouchPosOnLimberGridItem(event);
	if (touchPosOnLimberGridItem === false) {
		return;
	}

	userActionData = getUserActionData(event);

	if (userActionData.type === "move") {
		tapHoldCancel = false;
		tapHoldTimerComplete = false;

		e.$limberGridView[0].removeEventListener(
			"touchstart",
			onLimberGridTouchStart
		);
		document.addEventListener("touchmove", onTouchMove);
		document.addEventListener("touchend", onTouchEnd);
		document.addEventListener("touchcancel", onTouchCancel);
		document.addEventListener("contextmenu", onItemTouchContextMenu);

		longTouchCheck = setTimeout(
			tapHoldCheck.bind(this, event),
			publicConstants.TOUCH_HOLD_TIME
		);

		event.preventDefault();
	} else if (userActionData.type === "resize") {
		tapHoldCancel = false;
		tapHoldTimerComplete = true;

		e.$limberGridView[0].removeEventListener(
			"touchstart",
			onLimberGridTouchStart
		);
		e.$limberGridView[0].addEventListener("touchmove", onTouchMove);
		document.addEventListener("touchend", onTouchEnd);
		document.addEventListener("touchcancel", onTouchCancel);

		userActionData.itemX = pd[userActionData.itemIndex].x;
		userActionData.itemY = pd[userActionData.itemIndex].y;

		loadResizingState(userActionData);

		event.preventDefault();
	}

	event.stopPropagation();
};

export const mouseDownCheck = function (event) {
	if (mouseDownCancel === false) {
		mouseDownTimerComplete = true;

		loadMoveState(userActionData, event);
	}
};

export const tapHoldCheck = function (event) {
	if (tapHoldCancel === false) {
		tapHoldTimerComplete = true;

		loadMoveState(userActionData, event);
	}
};

export const onMouseMove = function (event) {
	if (mouseDownTimerComplete === true) {
		if (userActionData.type === "move") {
			loadOnMoveState(userActionData, event, "move");

			clearTimeout(showMoveDemoTimeOutVariable);

			var mousePositionOnLimberGrid = calculateMousePosOnLimberGrid(event);

			if (mousePositionOnLimberGrid !== false) {
				const yMousePosition = mousePositionOnLimberGrid.y;
				adjustHeight(yMousePosition);

				showMoveDemoTimeOutVariable = setTimeout(
					showMoveDemo.bind(
						this,
						userActionData.itemIndex,
						mousePositionOnLimberGrid
					),
					publicConstants.DEMO_WAIT_TIME
				);
			}
		} else {
			loadOnMoveState(userActionData, event, "resize");

			clearTimeout(showResizeDemoTimeOutVariable);

			const scrollTop = e.$limberGridView[0].scrollTop;
			const scrollLeft = e.$limberGridView[0].scrollLeft;

			const x = userActionData.itemX;
			const y = userActionData.itemY;

			const newWidth =
				event.offsetX - x + scrollLeft - privateConstants.PADDING_LEFT;
			const newHeight =
				event.offsetY - y + scrollTop - privateConstants.PADDING_TOP;

			userActionData.newWidth = newWidth;
			userActionData.newHeight = newHeight;

			const yMousePosition = event.offsetY + scrollTop;
			adjustHeight(yMousePosition);

			if (newWidth > 0 && newHeight > 0) {
				e.$limberGridViewGridPseudoItems[userActionData.itemIndex].style.width =
					newWidth + "px";
				e.$limberGridViewGridPseudoItems[
					userActionData.itemIndex
				].style.height = newHeight + "px";
			}

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

export const onTouchMove = function (event) {
	if (tapHoldTimerComplete === true) {
		if (userActionData.type === "move") {
			loadOnMoveState(userActionData, event, "move");

			clearTimeout(showMoveDemoTimeOutVariable);

			var touchPositionOnLimberGrid = calculateTouchPosOnLimberGrid(event);

			if (touchPositionOnLimberGrid !== false) {
				const scrollTop = e.$limberGridView[0].scrollTop;
				const scrollLeft = e.$limberGridView[0].scrollLeft;

				const limberGridViewBoundingClientRect = e.$limberGridView[0].getBoundingClientRect();
				const limberGridViewWidthVisibleWidth =
					e.$limberGridView[0].offsetWidth -
					limberGridViewBoundingClientRect.left;
				const limberGridViewHeightVisibleHeight =
					e.$limberGridView[0].offsetHeight -
					limberGridViewBoundingClientRect.top;
				const limberGridViewOnVisibleAreaX =
					touchPositionOnLimberGrid.x +
					privateConstants.PADDING_LEFT -
					scrollLeft;
				const limberGridViewOnVisibleAreaY =
					touchPositionOnLimberGrid.y +
					privateConstants.PADDING_TOP -
					scrollTop;

				const yTouchPosition = touchPositionOnLimberGrid.y;
				adjustHeight(yTouchPosition);

				const programScrolled = adjustScroll(
					limberGridViewOnVisibleAreaY,
					limberGridViewHeightVisibleHeight
				);

				if (programScrolled !== true) {
					showMoveDemoTimeOutVariable = setTimeout(
						showMoveDemo.bind(
							this,
							userActionData.itemIndex,
							touchPositionOnLimberGrid
						),
						publicConstants.DEMO_WAIT_TIME
					);
				}
			}
		} else {
			loadOnMoveState(userActionData, event, "resize");

			clearTimeout(showResizeDemoTimeOutVariable);

			const x = userActionData.itemX;
			const y = userActionData.itemY;

			const touchPositionOnLimberGrid = calculateTouchPosOnLimberGrid(event);

			const newWidth = touchPositionOnLimberGrid.x - x;
			const newHeight = touchPositionOnLimberGrid.y - y;

			if (touchPositionOnLimberGrid !== false) {
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
			}

			if (touchPositionOnLimberGrid !== false) {
				const scrollTop = e.$limberGridView[0].scrollTop;
				const scrollLeft = e.$limberGridView[0].scrollLeft;

				const limberGridViewBoundingClientRect = e.$limberGridView[0].getBoundingClientRect();
				const limberGridViewWidthVisibleWidth =
					e.$limberGridView[0].offsetWidth -
					limberGridViewBoundingClientRect.left;
				const limberGridViewHeightVisibleHeight =
					e.$limberGridView[0].offsetHeight -
					limberGridViewBoundingClientRect.top;
				const limberGridViewOnVisibleAreaX =
					touchPositionOnLimberGrid.x +
					privateConstants.PADDING_LEFT -
					scrollLeft;
				const limberGridViewOnVisibleAreaY =
					touchPositionOnLimberGrid.y +
					privateConstants.PADDING_TOP -
					scrollTop;

				const yTouchPosition = touchPositionOnLimberGrid.y;
				adjustHeight(yTouchPosition);

				const programScrolled = adjustScroll(
					limberGridViewOnVisibleAreaY,
					limberGridViewHeightVisibleHeight
				);

				if (programScrolled !== true) {
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
		e.$limberGridView[0].addEventListener("touchstart", onLimberGridTouchStart);

		// canceling taphold
	}

	event.stopPropagation();
};

export const onMouseUp = function (event) {
	clearTimeout(showMoveDemoTimeOutVariable);
	clearTimeout(showResizeDemoTimeOutVariable);
	var itemResizeFlag = false;
	var itemMoveFlag = false;
	if (mouseDownTimerComplete === true) {
		if (userActionData.type === "move") {
			unloadMoveState(userActionData);
			unloadOnMoveState();

			var mousePositionOnLimberGrid = calculateMousePosOnLimberGrid(event);
			var updatedCoordinates = {};
			try {
				if (mousePositionOnLimberGrid !== false) {
					moveItem(
						userActionData.itemIndex,
						mousePositionOnLimberGrid.x,
						mousePositionOnLimberGrid.y
					);
					updatedCoordinates.x = mousePositionOnLimberGrid.x;
					updatedCoordinates.y = mousePositionOnLimberGrid.y;
					itemMoveFlag = true;
				} else {
					throw "Mouse position outside grid area.";
				}
			} catch (error) {
				revertShowMoveOrResizeDemo();
			}
		} else {
			unloadResizingState(userActionData);
			unloadOnMoveState();

			try {
				var newWidth = userActionData.newWidth;
				var newHeight = userActionData.newHeight;

				resizeItem(userActionData.itemIndex, newWidth, newHeight);
			} catch (error) {
				revertShowMoveOrResizeDemo();
				itemResizeFlag = true;
			}
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

	event.preventDefault();
	event.stopPropagation();

	//
	if (
		callbacks.moveCompleteCallback != undefined &&
		callbacks.moveCompleteCallback != null
	) {
		if (itemMoveFlag == true) {
			updatedCoordinates.width = pd[userActionData.itemIndex].width;
			updatedCoordinates.height = pd[userActionData.itemIndex].height;
			callbacks.moveCompleteCallback(
				true,
				userActionData.itemIndex,
				updatedCoordinates
			);
		} else if (userActionData.type == "move") {
			callbacks.moveCompleteCallback(false, userActionData.itemIndex, event);
		}
	}
	if (
		callbacks.resizeCompleteCallback != undefined &&
		callbacks.resizeCompleteCallback != null
	) {
		if (itemResizeFlag == true) {
			callbacks.resizeCompleteCallback(userActionData.itemIndex, {
				x: pd[userActionData.itemIndex].x,
				y: pd[userActionData.itemIndex].y,
				height: newHeight,
				width: newWidth,
			});
		}
	}
	//

	userActionData = null;
};

export const onTouchEnd = function (event) {
	clearTimeout(showMoveDemoTimeOutVariable);
	clearTimeout(showResizeDemoTimeOutVariable);
	var itemResizeFlag = false;
	var itemMoveFlag = false;
	if (tapHoldTimerComplete === true) {
		if (userActionData.type === "move") {
			unloadMoveState(userActionData);
			unloadOnMoveState();

			var touchPositionOnLimberGrid = calculateTouchPosOnLimberGrid(event);
			if (touchPositionOnLimberGrid !== false) {
				var updatedCoordinates = {};
				moveItem(
					userActionData.itemIndex,
					touchPositionOnLimberGrid.x,
					touchPositionOnLimberGrid.y
				);
				updatedCoordinates.x = touchPositionOnLimberGrid.x;
				updatedCoordinates.y = touchPositionOnLimberGrid.y;
				itemMoveFlag = true;
			} else {
				revertShowMoveOrResizeDemo();
				throw "Touch position outside grid area.";
			}
		} else {
			unloadResizingState(userActionData);
			unloadOnMoveState();

			try {
				var newWidth = userActionData.newWidth;
				var newHeight = userActionData.newHeight;

				resizeItem(userActionData.itemIndex, newWidth, newHeight);
			} catch (error) {
				revertShowMoveOrResizeDemo();
				itemResizeFlag = true;
			}
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

	event.stopPropagation();

	//
	if (
		callbacks.moveCompleteCallback != undefined &&
		callbacks.moveCompleteCallback != null
	) {
		if (itemMoveFlag == true) {
			updatedCoordinates.width = pd[userActionData.itemIndex].width;
			updatedCoordinates.height = pd[userActionData.itemIndex].height;
			callbacks.moveCompleteCallback(
				true,
				userActionData.itemIndex,
				updatedCoordinates
			);
		} else if (userActionData.type == "move") {
			callbacks.moveCompleteCallback(false, userActionData.itemIndex, event);
		}
	}
	if (
		callbacks.resizeCompleteCallback != undefined &&
		callbacks.resizeCompleteCallback != null
	) {
		if (itemResizeFlag == true) {
			callbacks.resizeCompleteCallback(userActionData.itemIndex, {
				x: pd[userActionData.itemIndex].x,
				y: pd[userActionData.itemIndex].y,
				height: newHeight,
				width: newWidth,
			});
		}
	}
	//

	userActionData = null;
};

export const onContextMenu = function (event) {
	clearTimeout(showMoveDemoTimeOutVariable);
	clearTimeout(showResizeDemoTimeOutVariable);

	unloadResizingState();
	unloadMoveState();
	unloadOnMoveState();
	revertShowMoveOrResizeDemo();

	document.removeEventListener("mousemove", onMouseMove);
	e.$limberGridView[0].removeEventListener("mousemove", onMouseMove);
	document.removeEventListener("mouseup", onMouseUp);

	document.removeEventListener("touchmove", onTouchMove);
	e.$limberGridView[0].removeEventListener("touchmove", onTouchMove);
	document.removeEventListener("touchend", onTouchEnd);
	document.removeEventListener("contextmenu", onItemTouchContextMenu);
	document.removeEventListener("touchcancel", onTouchCancel);

	document.removeEventListener("contextmenu", onContextMenu);

	userActionData = null;

	event.preventDefault();
	event.stopPropagation();
};

export const onItemTouchContextMenu = function (event) {
	event.preventDefault();
};

export const onTouchCancel = function (event) {
	onContextMenu();
	tapHoldTimerComplete = false;
	e.$limberGridView[0].addEventListener("touchstart", onLimberGridTouchStart);
};

export const calculateMousePosOnLimberGrid = function (event) {
	var limberGridViewPosition = e.$limberGridView[0].getBoundingClientRect();
	if (
		event.clientX >= limberGridViewPosition.left &&
		event.clientX <=
			limberGridViewPosition.left + limberGridViewPosition.width &&
		event.clientY >= limberGridViewPosition.top &&
		event.clientY <= limberGridViewPosition.top + limberGridViewPosition.height
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

export const showMoveDemo = function (index, mousePosition) {
	try {
		if (mousePosition !== false) {
			moveItemDemo(index, mousePosition.x, mousePosition.y);

			e.$limberGridViewMoveGuide[0].style.transform =
				"translate(" + mousePosition.x + "px, " + mousePosition.y + "px)";
			e.$limberGridViewMoveGuide[0].classList.add(
				"limberGridViewMoveGuideActive"
			);

			e.$limberGridViewBodyPseudoItems[index].classList.remove(
				"limberGridViewBodyPseudoItemMoveDisallow"
			);
			e.$limberGridViewBodyPseudoItems[index].classList.add(
				"limberGridViewBodyPseudoItemMoveAllow"
			);
		} else {
			throw "Invalid mouse position.";
		}
	} catch (error) {
		console.error(error);
		e.$limberGridViewBodyPseudoItems[index].classList.remove(
			"limberGridViewBodyPseudoItemMoveAllow"
		);
		e.$limberGridViewBodyPseudoItems[index].classList.add(
			"limberGridViewBodyPseudoItemMoveDisallow"
		);
	}
};

export const showResizeDemo = function (index, width, height) {
	try {
		resizeItemDemo(index, width, height);
		e.$limberGridViewGridPseudoItems[userActionData.itemIndex].classList.add(
			"limberGridViewGridPseudoItemResizeAllow"
		);
	} catch (error) {
		console.error(error);
		e.$limberGridViewGridPseudoItems[userActionData.itemIndex].classList.add(
			"limberGridViewGridPseudoItemResizeDisallow"
		);
	}
};

export const revertShowMoveOrResizeDemo = function () {
	var length_0 = e.$limberGridViewItems.length;
	for (var i = 0; i < length_0; i++) {
		e.$limberGridViewItems[
			i
		].style.transform = `translate(${pd[i].x}px, ${pd[i].y}px)`;
		// e.$limberGridViewItems[i].classList.remove(
		// 	"limberGridViewItemDemo",
		// 	"limberGridViewItemResizingState"
		// );
		// e.$limberGridViewGridPseudoItems[i].classList.remove(
		// 	"limberGridViewGridPseudoItemResizingState",
		// 	"limberGridViewGridPseudoItemActive"
		// );
	}
};
