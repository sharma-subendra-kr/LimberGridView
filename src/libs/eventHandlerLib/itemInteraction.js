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
import getPublicConstants from "../../store/constants/publicConstants";
import getPrivateConstants from "../../store/constants/privateConstants";
import {
	getCallbacks,
	getPositionData,
} from "../../store/variables/essentials";
import getElements from "../../store/variables/elements";
import {
	calculateMousePosOnLimberGrid,
	calculateTouchPosOnLimberGrid,
	calculateTouchPosOnLimberGridItem,
} from "./eventHandlerUtils.js";
import {
	getUserActionData,
	loadResizingState,
	unloadResizingState,
	loadMoveState,
	unloadMoveState,
	loadOnMoveState,
	unloadOnMoveState,
} from "./itemInteractionUtils.js";
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
	const e = getElements(this);
	const publicConstants = getPublicConstants(this);
	const pd = getPositionData(this);

	if (event.which !== 1) {
		return;
	}

	if (event.target.classList.contains("limber-grid-view-item")) {
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

		e.$limberGridView.addEventListener("mousemove", onMouseMove);
		document.addEventListener("mouseup", onMouseUp);
		document.addEventListener("contextmenu", onContextMenu);

		userActionData.itemX = pd[userActionData.itemIndex].x;
		userActionData.itemY = pd[userActionData.itemIndex].y;

		loadResizingState(userActionData);

		event.preventDefault();
	}
};

export const onItemTouchStart = function (event) {
	const e = getElements(this);
	const publicConstants = getPublicConstants(this);
	const pd = getPositionData(this);

	if (event.which !== 0) {
		return;
	}

	if (event.target.classList.contains("limber-grid-view-item")) {
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

		e.$limberGridView.removeEventListener("touchstart", onLimberGridTouchStart);
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

		e.$limberGridView.removeEventListener("touchstart", onLimberGridTouchStart);
		e.$limberGridView.addEventListener("touchmove", onTouchMove);
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
	const e = getElements(this);
	const privateConstants = getPrivateConstants(this);
	const publicConstants = getPublicConstants(this);

	if (mouseDownTimerComplete === true) {
		if (userActionData.type === "move") {
			loadOnMoveState(userActionData, event, "move");

			clearTimeout(showMoveDemoTimeOutVariable);

			const mousePositionOnLimberGrid = calculateMousePosOnLimberGrid(event);

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

			const scrollTop = e.$limberGridView.scrollTop;
			const scrollLeft = e.$limberGridView.scrollLeft;

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
				e.$limberGridViewPseudoItem[userActionData.itemIndex].style.width =
					newWidth + "px";
				e.$limberGridViewPseudoItem[userActionData.itemIndex].style.height =
					newHeight + "px";
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
		e.$limberGridView.removeEventListener("mousemove", onMouseMove);
		document.removeEventListener("mouseup", onMouseUp);
		document.removeEventListener("contextmenu", onContextMenu);

		// canceling mouseHold
	}
	event.preventDefault();
	event.stopPropagation();
};

export const onTouchMove = function (event) {
	const e = getElements(this);
	const privateConstants = getPrivateConstants(this);
	const publicConstants = getPublicConstants(this);

	if (tapHoldTimerComplete === true) {
		if (userActionData.type === "move") {
			loadOnMoveState(userActionData, event, "move");

			clearTimeout(showMoveDemoTimeOutVariable);

			const touchPositionOnLimberGrid = calculateTouchPosOnLimberGrid(event);

			if (touchPositionOnLimberGrid !== false) {
				const scrollTop = e.$limberGridView.scrollTop;
				const scrollLeft = e.$limberGridView.scrollLeft;

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
					e.$limberGridViewPseudoItem[userActionData.itemIndex].style.width =
						newWidth + "px";
					e.$limberGridViewPseudoItem[userActionData.itemIndex].style.height =
						newHeight + "px";
				}
			}

			if (touchPositionOnLimberGrid !== false) {
				const scrollTop = e.$limberGridView.scrollTop;
				const scrollLeft = e.$limberGridView.scrollLeft;

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
		e.$limberGridView.removeEventListener("touchmove", onTouchMove);
		document.removeEventListener("touchend", onTouchEnd);
		document.removeEventListener("contextmenu", onContextMenu);
		document.removeEventListener("contextmenu", onItemTouchContextMenu);
		document.removeEventListener("touchcancel", onTouchCancel);
		e.$limberGridView.addEventListener("touchstart", onLimberGridTouchStart);

		// canceling taphold
	}

	event.stopPropagation();
};

export const onMouseUp = async function (event) {
	const e = getElements(this);
	const callbacks = getCallbacks(this);
	const pd = getPositionData(this);

	clearTimeout(showMoveDemoTimeOutVariable);
	clearTimeout(showResizeDemoTimeOutVariable);
	var itemResizeFlag = false;
	var itemMoveFlag = false;
	if (mouseDownTimerComplete === true) {
		if (userActionData.type === "move") {
			unloadMoveState(userActionData);
			unloadOnMoveState();

			const mousePositionOnLimberGrid = calculateMousePosOnLimberGrid(event);
			var updatedCoordinates = {};
			try {
				if (mousePositionOnLimberGrid !== false) {
					await moveItem(
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
				console.error(error);
				revertShowMoveOrResizeDemo(this);
			}
		} else {
			unloadResizingState(userActionData);
			unloadOnMoveState();

			try {
				var newWidth = userActionData.newWidth;
				var newHeight = userActionData.newHeight;

				resizeItem(userActionData.itemIndex, newWidth, newHeight);
			} catch (error) {
				revertShowMoveOrResizeDemo(this);
				itemResizeFlag = true;
			}
		}
	} else {
		mouseDownCancel = true;
		clearTimeout(longPressCheck);
		// canceling mouseHold
	}

	document.removeEventListener("mousemove", onMouseMove);
	e.$limberGridView.removeEventListener("mousemove", onMouseMove);
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

export const onTouchEnd = async function (event) {
	const e = getElements(this);
	const callbacks = getCallbacks(this);
	const pd = getPositionData(this);

	clearTimeout(showMoveDemoTimeOutVariable);
	clearTimeout(showResizeDemoTimeOutVariable);
	var itemResizeFlag = false;
	var itemMoveFlag = false;
	if (tapHoldTimerComplete === true) {
		if (userActionData.type === "move") {
			unloadMoveState(userActionData);
			unloadOnMoveState();

			const touchPositionOnLimberGrid = calculateTouchPosOnLimberGrid(event);
			var updatedCoordinates = {};
			try {
				if (touchPositionOnLimberGrid !== false) {
					await moveItem(
						userActionData.itemIndex,
						touchPositionOnLimberGrid.x,
						touchPositionOnLimberGrid.y
					);
					updatedCoordinates.x = touchPositionOnLimberGrid.x;
					updatedCoordinates.y = touchPositionOnLimberGrid.y;
					itemMoveFlag = true;
				} else {
					throw "Touch position outside grid area.";
				}
			} catch (error) {
				console.error(error);
				revertShowMoveOrResizeDemo(this);
			}
		} else {
			unloadResizingState(userActionData);
			unloadOnMoveState();

			try {
				var newWidth = userActionData.newWidth;
				var newHeight = userActionData.newHeight;

				resizeItem(userActionData.itemIndex, newWidth, newHeight);
			} catch (error) {
				revertShowMoveOrResizeDemo(this);
				itemResizeFlag = true;
			}
		}
	} else {
		tapHoldCancel = true;
		clearTimeout(longTouchCheck);
		// canceling taphold
	}

	document.removeEventListener("touchmove", onTouchMove);
	e.$limberGridView.removeEventListener("touchmove", onTouchMove);
	document.removeEventListener("touchend", onTouchEnd);
	document.removeEventListener("contextmenu", onContextMenu);
	document.removeEventListener("contextmenu", onItemTouchContextMenu);
	document.removeEventListener("touchcancel", onTouchCancel);
	e.$limberGridView.addEventListener("touchstart", onLimberGridTouchStart);

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
	const e = getElements(this);

	clearTimeout(showMoveDemoTimeOutVariable);
	clearTimeout(showResizeDemoTimeOutVariable);

	unloadResizingState();
	unloadMoveState();
	unloadOnMoveState();
	revertShowMoveOrResizeDemo(this);

	document.removeEventListener("mousemove", onMouseMove);
	e.$limberGridView.removeEventListener("mousemove", onMouseMove);
	document.removeEventListener("mouseup", onMouseUp);

	document.removeEventListener("touchmove", onTouchMove);
	e.$limberGridView.removeEventListener("touchmove", onTouchMove);
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
	const e = getElements(this);

	onContextMenu();
	tapHoldTimerComplete = false;
	e.$limberGridView.addEventListener("touchstart", onLimberGridTouchStart);
};

export const showMoveDemo = async function (index, mousePosition) {
	const e = getElements(this);

	try {
		if (mousePosition !== false) {
			await moveItemDemo(index, mousePosition.x, mousePosition.y);

			e.$limberGridViewMoveGuide.style.transform =
				"translate(" + mousePosition.x + "px, " + mousePosition.y + "px)";
			e.$limberGridViewMoveGuide.classList.add(
				"limber-grid-view-move-guide-active"
			);

			e.$pseudoContainerItem.classList.remove(
				"limber-grid-view-pseudo-container-item-move-disallow"
			);
			e.$pseudoContainerItem.classList.add(
				"limber-grid-view-pseudo-container-item-move-allow"
			);
		} else {
			throw "Invalid mouse position.";
		}
	} catch (error) {
		console.error(error);
		e.$pseudoContainerItem.classList.remove(
			"limber-grid-view-pseudo-container-item-move-allow"
		);
		e.$pseudoContainerItem.classList.add(
			"limber-grid-view-pseudo-container-item-move-disallow"
		);
	}
};

export const showResizeDemo = function (index, width, height) {
	const e = getElements(this);

	try {
		resizeItemDemo(index, width, height);
		e.$limberGridViewPseudoItem.classList.add(
			"limber-grid-view-pseudo-item-resize-allow"
		);
	} catch (error) {
		console.error(error);
		e.$limberGridViewPseudoItem.classList.add(
			"limber-grid-view-pseudo-item-resize-disallow"
		);
	}
};

export const revertShowMoveOrResizeDemo = function () {
	const e = getElements(this);
	const pd = getPositionData(this);

	const len = e.$limberGridViewItems.length;
	for (let i = 0; i < len; i++) {
		e.$limberGridViewItems[
			i
		].style.transform = `translate(${pd[i].x}px, ${pd[i].y}px)`;
	}
};
