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

import { getOptions } from "../store/variables/options";
import {
	getPositionData,
	setPositionData,
	getModifiedPositionData,
	setModifiedPositionData,
	setPseudoContainerId,
} from "../store/variables/essentials";
import getElements, {
	set$body,
	set$pseudoContainer,
	set$limberGridViewContainer,
	set$limberGridView,
	set$pseudoContainerItem,
	set$limberGridViewPseudoItem,
	set$limberGridViewMoveGuide,
	set$limberGridViewHeightAdjustGuide,
	set$limberGridViewAddCutGuide,
	set$limberGridViewTouchHoldGuide,
} from "../store/variables/elements";
import getPrivateConstants, {
	setWidth,
	setHeight,
	setPaddingLeft,
	setPaddingRight,
	setPaddingTop,
	setPaddingBottom,
	setWidthScaleFactor,
	setMargin,
	setDefinedMinHeightAndWidth,
	setGridWidth,
	setGridHeight,
	setGridMargin,
	setMinHeightAndWidth,
} from "../store/constants/privateConstants";
import getPublicConstants, {
	setPublicConstantByName,
} from "../store/constants/publicConstants";
import { checkPositionData } from "../libs/renderers/rendererUtils";
import { getRandomString } from "../libs/utils/utils";
import { arrangeFromHeight } from "../libs/arrange/arrange";
import { DESK_INTERACTION_MODE } from "../store/flags/flagDetails";

export const init = async function (context, isResize, autoArrange) {
	const e = getElements(context);
	const privateConstants = getPrivateConstants(context);
	const pd = getPositionData(context);

	if (autoArrange === true || !checkPositionData(pd)) {
		console.warn("Auto-arranging");

		setModifiedPositionData(context, pd);
		const mpd = getModifiedPositionData(context);
		const len = pd.length;
		const arr = new Array(len);
		for (let i = 0; i < len; i++) {
			arr[i] = i;
			mpd[i].x = undefined;
			mpd[i].y = undefined;

			pd[i].x /= privateConstants.WIDTH_SCALE_FACTOR;
			pd[i].y /= privateConstants.WIDTH_SCALE_FACTOR;
			pd[i].width /= privateConstants.WIDTH_SCALE_FACTOR;
			pd[i].height /= privateConstants.WIDTH_SCALE_FACTOR;
		}

		setWidth(context, privateConstants.GRID_WIDTH);
		setHeight(context, privateConstants.GRID_HEIGHT);
		setMargin(context, privateConstants.GRID_MARGIN);
		setWidthScaleFactor(context, 1);
		setDefinedMinHeightAndWidth(context, privateConstants.MIN_HEIGHT_AND_WIDTH);

		await arrangeFromHeight(context, arr, privateConstants.MARGIN);
		setPositionData(context, mpd);
	}

	setPaddingLeft(
		context,
		parseInt(
			window
				.getComputedStyle(e.$limberGridView, null)
				.getPropertyValue("padding-left")
		)
	);
	setPaddingRight(
		context,
		parseInt(
			window
				.getComputedStyle(e.$limberGridView, null)
				.getPropertyValue("padding-right")
		)
	);
	setPaddingTop(
		context,
		parseInt(
			window
				.getComputedStyle(e.$limberGridView, null)
				.getPropertyValue("padding-top")
		)
	);
	setPaddingBottom(
		context,
		parseInt(
			window
				.getComputedStyle(e.$limberGridView, null)
				.getPropertyValue("padding-bottom")
		)
	);

	setWidth(
		context,
		e.$limberGridView.clientWidth -
			privateConstants.PADDING_LEFT -
			privateConstants.PADDING_RIGHT
	);

	setHeight(
		context,
		e.$limberGridView.clientHeight -
			privateConstants.PADDING_TOP -
			privateConstants.PADDING_BOTTOM
	);

	if (isResize) {
		// resiet item x, y, width, height; MARGIN, MIN_HEIGHT_AND_WIDTH
		const len = pd.length;
		for (let i = 0; i < len; i++) {
			pd[i].x /= privateConstants.WIDTH_SCALE_FACTOR;
			pd[i].y /= privateConstants.WIDTH_SCALE_FACTOR;
			pd[i].width /= privateConstants.WIDTH_SCALE_FACTOR;
			pd[i].height /= privateConstants.WIDTH_SCALE_FACTOR;
		}

		privateConstants.MARGIN /= privateConstants.WIDTH_SCALE_FACTOR;
		privateConstants.DEFINED_MIN_HEIGHT_AND_WIDTH /=
			privateConstants.WIDTH_SCALE_FACTOR;
	}

	setWidthScaleFactor(
		context,
		privateConstants.WIDTH / privateConstants.GRID_WIDTH
	);
	setMargin(
		context,
		privateConstants.MARGIN * privateConstants.WIDTH_SCALE_FACTOR
	);
	setDefinedMinHeightAndWidth(
		context,
		privateConstants.DEFINED_MIN_HEIGHT_AND_WIDTH *
			privateConstants.WIDTH_SCALE_FACTOR
	);
};

export const initConstantsAndFlags = function (options) {
	// Private Constants BEGIN
	if (options?.gridData?.WIDTH && !isNaN(options.gridData.WIDTH)) {
		setGridWidth(this, options.gridData.WIDTH);
	}

	if (options?.gridData?.HEIGHT && !isNaN(options.gridData.HEIGHT)) {
		setGridHeight(this, options.gridData.HEIGHT);
	}

	if (options?.gridData?.MARGIN && !isNaN(options.gridData.MARGIN)) {
		setGridMargin(this, options.gridData.MARGIN);
	}

	if (
		options?.gridData?.MIN_HEIGHT_AND_WIDTH &&
		!isNaN(options.gridData.MIN_HEIGHT_AND_WIDTH)
	) {
		setMinHeightAndWidth(this.options.gridData.MIN_HEIGHT_AND_WIDTH);
	}
	// Private Constants ENDED

	// Public Constants BEGIN
	if (
		options?.publicConstants?.mobileAspectRatio &&
		!isNaN(options.publicConstants.mobileAspectRatio)
	) {
		setPublicConstantByName(
			this,
			"MOBILE_ASPECT_RATIO",
			options.publicConstants.mobileAspectRatio
		);
	}

	if (
		options?.publicConstants?.moveGuideRadius &&
		!isNaN(options.publicConstants.moveGuideRadius)
	) {
		setPublicConstantByName(
			this,
			"MOVE_GUIDE_RADIUS",
			options.publicConstants.moveGuideRadius
		);
	}

	if (
		options?.publicConstants?.resizeSquareGuideLength &&
		!isNaN(options.publicConstants.resizeSquareGuideLength)
	) {
		setPublicConstantByName(
			this,
			"RESIZE_SQUARE_GUIDE_LENGTH",
			options.publicConstants.resizeSquareGuideLength
		);
	}

	if (
		options?.publicConstants?.resizeSquareBorderGuideWidth &&
		!isNaN(options.publicConstants.resizeSquareBorderGuideWidth)
	) {
		setPublicConstantByName(
			this,
			"RESIZE_SQUARE_GUIDE_BORDER_WIDTH",
			options.publicConstants.resizeSquareBorderGuideWidth
		);
	}

	if (
		options?.publicConstants?.autoScrollDistance &&
		!isNaN(options.publicConstants.autoScrollDistance)
	) {
		setPublicConstantByName(
			this,
			"AUTO_SCROLL_DISTANCE",
			options.publicConstants.autoScrollDistance
		);
	}

	if (
		options?.publicConstants?.autoScrollPoint &&
		!isNaN(options.publicConstants.autoScrollPoint)
	) {
		setPublicConstantByName(
			this,
			"AUTO_SCROLL_POINT",
			options.publicConstants.autoScrollPoint
		);
	}

	if (
		options?.publicConstants?.moveOrResizeHeightIncrements &&
		!isNaN(options.publicConstants.moveOrResizeHeightIncrements)
	) {
		setPublicConstantByName(
			this,
			"MOVE_OR_RESIZE_HEIGHT_INCREMENTS",
			options.publicConstants.moveOrResizeHeightIncrements
		);
	}

	if (
		options?.publicConstants?.mouseDownTime &&
		!isNaN(options.publicConstants.mouseDownTime)
	) {
		setPublicConstantByName(
			this,
			"MOUSE_DOWN_TIME",
			options.publicConstants.mouseDownTime
		);
	}

	if (
		options?.publicConstants?.touchHoldTime &&
		!isNaN(options.publicConstants.touchHoldTime)
	) {
		setPublicConstantByName(
			this,
			"TOUCH_HOLD_TIME",
			options.publicConstants.touchHoldTime
		);
	}

	if (
		options?.publicConstants?.demoWaitTime &&
		!isNaN(options.publicConstants.demoWaitTime)
	) {
		setPublicConstantByName(
			this,
			"DEMO_WAIT_TIME",
			options.publicConstants.demoWaitTime
		);
	}

	if (
		options?.publicConstants?.windowResizeWaitTime &&
		!isNaN(options.publicConstants.windowResizeWaitTime)
	) {
		setPublicConstantByName(
			this,
			"WINDOW_RESIZE_WAIT_TIME",
			options.publicConstants.windowResizeWaitTime
		);
	}

	if (
		options?.publicConstants?.deskInteractionMode &&
		DESK_INTERACTION_MODE[options.publicConstants.deskInteractionMode]
	) {
		setPublicConstantByName(
			this,
			"DESK_INTERACTION_MODE",
			options.publicConstants.deskInteractionMode
		);
	}

	if (typeof options?.publicConstants?.latchMovedItem === "boolean") {
		setPublicConstantByName(
			this,
			"LATCH_MOVED_ITEM",
			options.publicConstants.latchMovedItem
		);
	}

	if (typeof options?.publicConstants?.animateMovedItem === "boolean") {
		setPublicConstantByName(
			this,
			"ANIMATE_MOVED_ITEM",
			options.publicConstants.animateMovedItem
		);
	}

	if (
		options?.publicConstants?.animateTime &&
		!isNaN(options.publicConstants.animateTime)
	) {
		setPublicConstantByName(
			this,
			"ANIMATE_TIME",
			options.publicConstants.animateTime
		);
	}

	// Public Constants ENDED

	// Miscellaneous BEGIN

	// Miscellaneous ENDED
};

export const initRender = function () {
	const e = getElements(this);
	const options = getOptions(this);

	set$body(this, document.getElementsByTagName("body")[0]);

	let pseudoContainerId;
	do {
		pseudoContainerId =
			"limber-grid-view-pseudo-container-" + getRandomString();
	} while (document.getElementById(pseudoContainerId) !== null);
	setPseudoContainerId(this, pseudoContainerId);

	const pseudoContainer = document.createElement("div");
	pseudoContainer.setAttribute("class", "limber-grid-view-pseudo-container");
	pseudoContainer.setAttribute("id", pseudoContainerId);
	set$pseudoContainer(this, pseudoContainer);

	// pseudo container should be kept in defined container, if not defined then body
	if (options.pseudoElementContainer) {
		let $pseudoElementContainer;
		if (typeof options.pseudoElementContainer === "string") {
			$pseudoElementContainer = document.getElementById(
				options.pseudoElementContainer
			);
		} else if (options.pseudoElementContainer instanceof Element) {
			$pseudoElementContainer = options.pseudoElementContainer;
		}
		$pseudoElementContainer.appendChild(pseudoContainer);
	} else {
		e.$body.appendChild(pseudoContainer);
	}

	e.$el.innerHTML = `<div class = "limber-grid-view-container"><div class = "limber-grid-view"></div><div class = "limber-grid-view-license"><div class = "limber-grid-view-license-icon">©</div><div class = "limber-grid-view-license-details">LimberGridView Copyright © 2018-2020, Subendra Kumar Sharma. License: GNU General Public License version 3, or (at your option) any later version.</div></div></div>`;
	set$limberGridViewContainer(
		this,
		e.$el.getElementsByClassName("limber-grid-view-container")[0]
	);
	set$limberGridView(this, e.$el.getElementsByClassName("limber-grid-view")[0]);

	const pseudoContainerItem = document.createElement("div");
	const limberGridViewPseudoItem = document.createElement("div");
	const limberGridViewMoveGuide = document.createElement("div"); // thing that shows to if there is a latch on item available on move
	const limberGridViewHeightAdjustGuide = document.createElement("div");
	const limberGridViewAddCutGuide = document.createElement("div"); // desk interaction rect
	const limberGridViewTouchHoldGuide = document.createElement("div"); // touch hold animation
	limberGridViewTouchHoldGuide.innerHTML = "<div></div>";

	pseudoContainerItem.setAttribute(
		"class",
		"limber-grid-view-pseudo-container-item"
	);
	limberGridViewPseudoItem.setAttribute(
		"class",
		"limber-grid-view-pseudo-item"
	);
	limberGridViewMoveGuide.setAttribute("class", "limber-grid-view-move-guide");
	limberGridViewHeightAdjustGuide.setAttribute(
		"class",
		"limber-grid-view-height-adjust-guide"
	);
	limberGridViewAddCutGuide.setAttribute(
		"class",
		"limber-grid-view-add-cut-guide"
	);
	limberGridViewTouchHoldGuide.setAttribute(
		"class",
		"limber-grid-view-touch-hold-guide"
	);

	e.$pseudoContainer.appendChild(pseudoContainerItem);
	e.$limberGridView.appendChild(limberGridViewPseudoItem);
	e.$limberGridView.appendChild(limberGridViewMoveGuide);
	e.$limberGridView.appendChild(limberGridViewHeightAdjustGuide);
	e.$limberGridView.appendChild(limberGridViewAddCutGuide);
	e.$limberGridView.appendChild(limberGridViewTouchHoldGuide);

	set$pseudoContainerItem(this, pseudoContainerItem);
	set$limberGridViewPseudoItem(this, limberGridViewPseudoItem);
	set$limberGridViewMoveGuide(this, limberGridViewMoveGuide);
	set$limberGridViewHeightAdjustGuide(this, limberGridViewHeightAdjustGuide);
	set$limberGridViewAddCutGuide(this, limberGridViewAddCutGuide);
	set$limberGridViewTouchHoldGuide(this, limberGridViewTouchHoldGuide);
};
