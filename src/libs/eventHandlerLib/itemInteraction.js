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

import { adjustHeight, adjustScroll } from "../utils/essentials";
import getPublicConstants from "../../store/constants/publicConstants";
import getPrivateConstants from "../../store/constants/privateConstants";
import { getPositionData } from "../../store/variables/essentials";
import getElements from "../../store/variables/elements";
import {
	calculateMousePosOnDesk,
	calculateTouchPosOnDesk,
	calculateTouchPosOnItem,
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
import {
	moveItem,
	moveItemDemo,
	resizeItem,
	resizeItemDemo,
} from "../interaction/itemInteraction";
import { getBindedFunctions } from "../../store/variables/bindedFunctions";
import { getItemInteractionVars } from "../../store/variables/eventSpecific";
import { setStatus } from "../../store/variables/status";
import getTree from "../../store/variables/trees";

export const onItemMouseDown = function (event) {
	const e = getElements(this);
	const publicConstants = getPublicConstants(this);
	const pd = getPositionData(this);

	const iiv = getItemInteractionVars(this);
	const bf = getBindedFunctions(this);

	const _userActionData = getUserActionData(this, event);

	if (!_userActionData) {
		return;
	}

	Object.assign(iiv.userActionData, _userActionData);

	if (iiv.userActionData.type === "move") {
		iiv.mouseDownCancel = false;
		iiv.mouseDownTimerComplete = false;

		document.addEventListener("mousemove", bf.onItemMouseMove);
		document.addEventListener("mouseup", bf.onItemMouseUp);
		document.addEventListener("contextmenu", bf.onItemContextMenu);

		clearTimeout(iiv.longPressCheck);
		iiv.longPressCheck = setTimeout(
			mouseDownCheck.bind(this, event),
			publicConstants.MOUSE_DOWN_TIME
		);

		event.preventDefault();
	} else if (iiv.userActionData.type === "resize") {
		iiv.mouseDownCancel = false;
		iiv.mouseDownTimerComplete = true;

		e.$limberGridView.addEventListener("mousemove", bf.onItemMouseMove);
		document.addEventListener("mouseup", bf.onItemMouseUp);
		document.addEventListener("contextmenu", bf.onItemContextMenu);

		iiv.userActionData.itemX = pd[iiv.userActionData.itemIndex].x;
		iiv.userActionData.itemY = pd[iiv.userActionData.itemIndex].y;

		loadResizingState(this, iiv.userActionData);

		event.preventDefault();
	}

	event.stopPropagation();
};

export const onItemTouchStart = function (event) {
	const e = getElements(this);
	const publicConstants = getPublicConstants(this);
	const pd = getPositionData(this);

	const iiv = getItemInteractionVars(this);
	const bf = getBindedFunctions(this);

	if (event.touches.length !== 1) {
		onItemTouchContextMenu.call(this, event);
		return;
	}

	const touchPosOnLimberGridItem = calculateTouchPosOnItem(this, event);
	if (touchPosOnLimberGridItem === false) {
		return;
	}

	const _userActionData = getUserActionData(this, event);
	if (!_userActionData) {
		return;
	}

	Object.assign(iiv.userActionData, _userActionData);

	if (iiv.userActionData.type === "move") {
		iiv.touchHoldCancel = false;
		iiv.touchHoldTimerComplete = false;

		document.addEventListener("touchmove", bf.onItemTouchMove);
		document.addEventListener("touchend", bf.onItemTouchEnd);
		document.addEventListener("touchcancel", bf.onItemTouchCancel);
		document.addEventListener("contextmenu", bf.onItemTouchContextMenu);

		iiv.longTouchCheck = setTimeout(
			tapHoldCheck.bind(this, event),
			publicConstants.TOUCH_HOLD_TIME
		);

		event.preventDefault();
	} else if (iiv.userActionData.type === "resize") {
		iiv.touchHoldCancel = false;
		iiv.touchHoldTimerComplete = true;

		e.$limberGridView.addEventListener("touchmove", bf.onItemTouchMove);
		document.addEventListener("touchend", bf.onItemTouchEnd);
		document.addEventListener("touchcancel", bf.onItemTouchCancel);
		document.addEventListener("contextmenu", bf.onItemTouchContextMenu);

		iiv.userActionData.itemX = pd[iiv.userActionData.itemIndex].x;
		iiv.userActionData.itemY = pd[iiv.userActionData.itemIndex].y;

		loadResizingState(this, iiv.userActionData);

		event.preventDefault();
	}

	event.stopPropagation();
};

export const mouseDownCheck = function (event) {
	const iiv = getItemInteractionVars(this);

	if (iiv.mouseDownCancel === false) {
		iiv.mouseDownTimerComplete = true;

		loadMoveState(this, iiv.userActionData, event);
	}
};

export const tapHoldCheck = function (event) {
	const iiv = getItemInteractionVars(this);

	if (iiv.touchHoldCancel === false) {
		iiv.touchHoldTimerComplete = true;

		loadMoveState(this, iiv.userActionData, event);
	}
};

export const onItemMouseMove = function (event) {
	const e = getElements(this);
	const privateConstants = getPrivateConstants(this);
	const publicConstants = getPublicConstants(this);

	const iiv = getItemInteractionVars(this);

	if (iiv.mouseDownTimerComplete === true) {
		if (iiv.userActionData.type === "move") {
			loadOnMoveState(this, iiv.userActionData, event, "move");

			clearTimeout(iiv.showMoveDemoTimeOutVariable);

			const mousePositionOnLimberGrid = calculateMousePosOnDesk(this, event);

			if (mousePositionOnLimberGrid !== false) {
				const yMousePosition = mousePositionOnLimberGrid.y;
				adjustHeight(this, yMousePosition);

				iiv.showMoveDemoTimeOutVariable = setTimeout(
					showMoveDemo.bind(
						this,
						iiv.userActionData.itemIndex,
						mousePositionOnLimberGrid
					),
					publicConstants.DEMO_WAIT_TIME
				);
			}
		} else {
			loadOnMoveState(this, iiv.userActionData, event, "resize");

			clearTimeout(iiv.showResizeDemoTimeOutVariable);

			const scrollTop = e.$limberGridView.scrollTop;
			const scrollLeft = e.$limberGridView.scrollLeft;

			const x = iiv.userActionData.itemX;
			const y = iiv.userActionData.itemY;

			const newWidth =
				event.offsetX - x + scrollLeft - privateConstants.PADDING_LEFT;
			const newHeight =
				event.offsetY - y + scrollTop - privateConstants.PADDING_TOP;

			iiv.userActionData.newWidth = newWidth;
			iiv.userActionData.newHeight = newHeight;

			const yMousePosition = event.offsetY + scrollTop;
			adjustHeight(this, yMousePosition);

			if (newWidth > 0 && newHeight > 0) {
				e.$limberGridViewPseudoItem.style.width = newWidth + "px";
				e.$limberGridViewPseudoItem.style.height = newHeight + "px";
				e.$limberGridViewPseudoItem.setAttribute(
					"data-after",
					`w: ${parseInt(newWidth)}px, h: ${parseInt(newHeight)}px`
				);
			}

			iiv.showResizeDemoTimeOutVariable = setTimeout(
				showResizeDemo.bind(
					this,
					iiv.userActionData.itemIndex,
					newWidth,
					newHeight
				),
				publicConstants.DEMO_WAIT_TIME
			);
		}
	} else {
		iiv.mouseDownCancel = true;

		onItemContextMenu.call(this, event);

		// canceling mouseHold
	}
	event.preventDefault();
	event.stopPropagation();
};

export const onItemTouchMove = function (event) {
	const e = getElements(this);
	const privateConstants = getPrivateConstants(this);
	const publicConstants = getPublicConstants(this);

	const iiv = getItemInteractionVars(this);

	if (iiv.touchHoldTimerComplete === true && event.touches.length === 1) {
		if (iiv.userActionData.type === "move") {
			loadOnMoveState(this, iiv.userActionData, event, "move");

			clearTimeout(iiv.showMoveDemoTimeOutVariable);

			const touchPositionOnLimberGrid = calculateTouchPosOnDesk(this, event);

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
				adjustHeight(this, yTouchPosition);

				const programScrolled = adjustScroll(
					this,
					limberGridViewOnVisibleAreaY,
					limberGridViewHeightVisibleHeight
				);

				if (programScrolled !== true) {
					iiv.showMoveDemoTimeOutVariable = setTimeout(
						showMoveDemo.bind(
							this,
							iiv.userActionData.itemIndex,
							touchPositionOnLimberGrid
						),
						publicConstants.DEMO_WAIT_TIME
					);
				}
			}
		} else {
			loadOnMoveState(this, iiv.userActionData, event, "resize");

			clearTimeout(iiv.showResizeDemoTimeOutVariable);

			const x = iiv.userActionData.itemX;
			const y = iiv.userActionData.itemY;

			const touchPositionOnLimberGrid = calculateTouchPosOnDesk(this, event);

			const newWidth = touchPositionOnLimberGrid.x - x;
			const newHeight = touchPositionOnLimberGrid.y - y;

			if (touchPositionOnLimberGrid !== false) {
				iiv.userActionData.newWidth = newWidth;
				iiv.userActionData.newHeight = newHeight;

				if (newWidth > 0 && newHeight > 0) {
					e.$limberGridViewPseudoItem.style.width = newWidth + "px";
					e.$limberGridViewPseudoItem.style.height = newHeight + "px";
					e.$limberGridViewPseudoItem.setAttribute(
						"data-after",
						`w: ${parseInt(newWidth)}px, h: ${parseInt(newHeight)}px`
					);
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
				adjustHeight(this, yTouchPosition);

				const programScrolled = adjustScroll(
					this,
					limberGridViewOnVisibleAreaY,
					limberGridViewHeightVisibleHeight
				);

				if (programScrolled !== true) {
					iiv.showResizeDemoTimeOutVariable = setTimeout(
						showResizeDemo.bind(
							this,
							iiv.userActionData.itemIndex,
							newWidth,
							newHeight
						),
						publicConstants.DEMO_WAIT_TIME
					);
				}
			}
		}
	} else {
		iiv.touchHoldCancel = true;

		onItemTouchContextMenu.call(this, event);

		// canceling taphold
	}

	event.stopPropagation();
};

export const onItemMouseUp = async function (event) {
	const iiv = getItemInteractionVars(this);

	clearTimeout(iiv.showMoveDemoTimeOutVariable);
	clearTimeout(iiv.showResizeDemoTimeOutVariable);

	if (iiv.mouseDownTimerComplete === true) {
		if (iiv.userActionData.type === "move") {
			const mousePositionOnLimberGrid = calculateMousePosOnDesk(this, event);
			var updatedCoordinates = {};
			try {
				if (mousePositionOnLimberGrid !== false) {
					await moveItem.call(
						this,
						iiv.userActionData.itemIndex,
						mousePositionOnLimberGrid.x,
						mousePositionOnLimberGrid.y
					);
					updatedCoordinates.x = mousePositionOnLimberGrid.x;
					updatedCoordinates.y = mousePositionOnLimberGrid.y;
				} else {
					throw "Mouse position outside grid area.";
				}
			} catch (error) {
				console.error(error);
				revertShowMoveOrResizeDemo(this);
			}
		} else {
			try {
				var newWidth = iiv.userActionData.newWidth;
				var newHeight = iiv.userActionData.newHeight;

				await resizeItem.call(
					this,
					iiv.userActionData.itemIndex,
					newWidth,
					newHeight
				);
			} catch (error) {
				revertShowMoveOrResizeDemo(this);
			}
		}
	} else {
		iiv.mouseDownCancel = true;
	}

	onItemContextMenu.call(this, event);

	iiv.userActionData = {};
};

export const onItemTouchEnd = async function (event) {
	const iiv = getItemInteractionVars(this);

	clearTimeout(iiv.showMoveDemoTimeOutVariable);
	clearTimeout(iiv.showResizeDemoTimeOutVariable);

	if (iiv.touchHoldTimerComplete === true && event.touches.length === 0) {
		if (iiv.userActionData.type === "move") {
			const touchPositionOnLimberGrid = calculateTouchPosOnDesk(this, event);
			var updatedCoordinates = {};
			try {
				if (touchPositionOnLimberGrid !== false) {
					await moveItem.call(
						this,
						iiv.userActionData.itemIndex,
						touchPositionOnLimberGrid.x,
						touchPositionOnLimberGrid.y
					);
					updatedCoordinates.x = touchPositionOnLimberGrid.x;
					updatedCoordinates.y = touchPositionOnLimberGrid.y;
				} else {
					throw "Touch position outside grid area.";
				}
			} catch (error) {
				console.error(error);
				revertShowMoveOrResizeDemo(this);
			}
		} else {
			try {
				var newWidth = iiv.userActionData.newWidth;
				var newHeight = iiv.userActionData.newHeight;

				await resizeItem.call(
					this,
					iiv.userActionData.itemIndex,
					newWidth,
					newHeight
				);
			} catch (error) {
				revertShowMoveOrResizeDemo(this);
			}
		}
	} else {
		iiv.touchHoldCancel = true;
	}

	onItemTouchContextMenu.call(this, event);

	event.stopPropagation();

	iiv.userActionData = {};
};

export const onItemContextMenu = function (event) {
	const e = getElements(this);

	const iiv = getItemInteractionVars(this);
	const bf = getBindedFunctions(this);

	clearTimeout(iiv.showMoveDemoTimeOutVariable);
	clearTimeout(iiv.showResizeDemoTimeOutVariable);
	clearTimeout(iiv.longPressCheck);
	clearTimeout(iiv.longTouchCheck);

	unloadResizingState(this, iiv.userActionData);
	unloadMoveState(this, iiv.userActionData);
	unloadOnMoveState(this);
	revertShowMoveOrResizeDemo(this);

	document.removeEventListener("mousemove", bf.onItemMouseMove);
	e.$limberGridView.removeEventListener("mousemove", bf.onItemMouseMove);
	document.removeEventListener("mouseup", bf.onItemMouseUp);
	document.removeEventListener("contextmenu", bf.onItemContextMenu);

	document.removeEventListener("touchmove", bf.onItemTouchMove);
	e.$limberGridView.removeEventListener("touchmove", bf.onItemTouchMove);
	document.removeEventListener("touchend", bf.onItemTouchEnd);
	document.removeEventListener("contextmenu", bf.onItemTouchContextMenu);
	document.removeEventListener("touchcancel", bf.onItemTouchCancel);

	iiv.userActionData = {};

	setStatus(this, "moveDemo", undefined);
	setStatus(this, "resizeDemo", undefined);

	const it = getTree(this, "it");
	it.emptyTree();

	event.preventDefault();
	event.stopPropagation();
};

export const onItemTouchContextMenu = function (event) {
	onItemContextMenu.call(this, event);
};

export const onItemTouchCancel = function (event) {
	onItemContextMenu.call(this, event);
};

export const showMoveDemo = async function (index, mousePosition) {
	const e = getElements(this);

	try {
		if (mousePosition !== false) {
			await moveItemDemo.call(this, index, mousePosition.x, mousePosition.y);

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

export const showResizeDemo = async function (index, width, height) {
	const e = getElements(this);

	try {
		await resizeItemDemo.call(this, index, width, height);
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

export const revertShowMoveOrResizeDemo = function (context) {
	const e = getElements(context);
	const pd = getPositionData(context);

	const len = e.$limberGridViewItems.length;
	for (let i = 0; i < len; i++) {
		e.$limberGridViewItems[
			i
		].style.transform = `translate(${pd[i].x}px, ${pd[i].y}px)`;
	}
};
