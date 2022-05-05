/*

LimberGridView, a powerful JavaScript Library using Computational Geometry to render movable, dynamically resizable, and auto-arranging grids.

Copyright © 2018-2022 Subendra Kumar Sharma. All rights reserved. (jobs.sharma.subendra.kr@gmail.com)

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
	setRenderedItems,
	getIOTopHelperPos,
	getIOBottomHelperPos,
	setSerializedPositionData,
	getSerializedPositionData,
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
	set$limberGridViewCrossHairGuide,
	set$limberGridViewIOTopHelper,
	get$limberGridViewIOTopHelper,
	set$limberGridViewIOBottomHelper,
	get$limberGridViewIOBottomHelper,
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
import { getRandomString, isMobile } from "../libs/utils/utils";
import { autoArrangeGrid } from "../libs/arrange/arrange";
import { DESK_INTERACTION_MODE } from "../store/flags/flagDetails";
import { getItemsInWorkSpace } from "../libs/utils/items";

export const init = async function (context, isResize, autoArrange) {
	const e = getElements(context);
	const privateConstants = getPrivateConstants(context);
	const pd = getPositionData(context);

	if (autoArrange === true || !checkPositionData(pd)) {
		// * 	autoArrange will be true only during the first render
		// * 	this if block is always supposed to execute during the first render
		// 		if autoArrange is true or invalid positionData is supplied
		// *	below code is basically resetting everything to 1920*1080
		// *	everything will be scaled to new height and width in render function
		console.warn("Auto-arranging");

		setModifiedPositionData(context, pd);
		const mpd = getModifiedPositionData(context);
		const len = pd.length;
		const arr = new Array(len);
		for (let i = 0; i < len; i++) {
			arr[i] = i;

			mpd[i].x1 = 0;
			mpd[i].x2 = 0;
			mpd[i].y1 = 0;
			mpd[i].y2 = 0;

			mpd[i].x = 0;
			mpd[i].y = 0;
			mpd[i].width =
				mpd[i].width / privateConstants.WIDTH_SCALE_FACTOR ||
				privateConstants.MIN_HEIGHT_AND_WIDTH * 2;
			mpd[i].height =
				mpd[i].height / privateConstants.WIDTH_SCALE_FACTOR ||
				privateConstants.MIN_HEIGHT_AND_WIDTH * 2;

			mpd[i].mX1 = 0;
			mpd[i].mX2 = 0;
			mpd[i].mY1 = 0;
			mpd[i].mY2 = 0;

			mpd[i].mX = 0;
			mpd[i].mY = 0;
			mpd[i].mWidth = mpd[i].width + privateConstants.MARGIN * 2;
			mpd[i].mHeight = mpd[i].height + privateConstants.MARGIN * 2;

			Object.assign(pd[i], mpd[i]);
		}

		setWidth(context, privateConstants.GRID_WIDTH);
		setHeight(context, privateConstants.GRID_HEIGHT);
		setMargin(context, privateConstants.GRID_MARGIN);
		setWidthScaleFactor(context, 1);
		setDefinedMinHeightAndWidth(context, privateConstants.MIN_HEIGHT_AND_WIDTH);

		await autoArrangeGrid(context);
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
		// *	reset item x, y, width, height, x1, x2, y1, y2; MARGIN, MIN_HEIGHT_AND_WIDTH
		// *	below code is basically resetting everything to 1920*1080
		// *	everything will be scaled to new height and width in render function
		const len = pd.length;
		for (let i = 0; i < len; i++) {
			pd[i].x1 /= privateConstants.WIDTH_SCALE_FACTOR;
			pd[i].x2 /= privateConstants.WIDTH_SCALE_FACTOR;
			pd[i].y1 /= privateConstants.WIDTH_SCALE_FACTOR;
			pd[i].y2 /= privateConstants.WIDTH_SCALE_FACTOR;

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

	if (!isMobile(context)) {
		get$limberGridViewIOTopHelper(context).style.transform = `translate(0px, ${
			getIOTopHelperPos(context) * privateConstants.HEIGHT
		}px)`;
		get$limberGridViewIOBottomHelper(
			context
		).style.transform = `translate(0px, ${
			getIOBottomHelperPos(context) * privateConstants.HEIGHT
		}px)`;

		const renderSpace = {
			x1: 0,
			x2: privateConstants.WIDTH,
			y1:
				getIOTopHelperPos(context) * privateConstants.HEIGHT -
				privateConstants.HEIGHT / 2,
			y2:
				getIOBottomHelperPos(context) * privateConstants.HEIGHT +
				privateConstants.HEIGHT / 2,
		};
		setRenderedItems(context, getItemsInWorkSpace(context, renderSpace, true));
	} else {
		get$limberGridViewIOTopHelper(
			context
		).style.transform = `translate(1px, 1px)`;
		setSerializedPositionData(context, pd);
		const spd = getSerializedPositionData(context);
		const len = pd.length < 15 ? pd.length : 15;
		const arr = new Array(len).fill(0).map((o, index) => index);
		setRenderedItems(context, arr);
		for (let i = 0; i < len; i++) {
			spd[arr[i]].renderIndex = i;
		}
	}
};

export const initConstantsAndFlags = function (options) {
	// Private Constants BEGIN
	if (typeof options?.gridData?.WIDTH === "number") {
		setGridWidth(this, options.gridData.WIDTH);
	}

	if (typeof options?.gridData?.HEIGHT === "number") {
		setGridHeight(this, options.gridData.HEIGHT);
	}

	if (typeof options?.gridData?.MARGIN === "number") {
		setGridMargin(this, options.gridData.MARGIN);
	}

	if (typeof options?.gridData?.MIN_HEIGHT_AND_WIDTH === "number") {
		setMinHeightAndWidth(this.options.gridData.MIN_HEIGHT_AND_WIDTH);
	}
	// Private Constants ENDED

	// Public Constants BEGIN
	if (typeof options?.publicConstants?.mobileAspectRatio === "number") {
		setPublicConstantByName(
			this,
			"MOBILE_ASPECT_RATIO",
			options.publicConstants.mobileAspectRatio
		);
	}

	if (typeof options?.publicConstants?.moveGuideRadius === "number") {
		setPublicConstantByName(
			this,
			"MOVE_GUIDE_RADIUS",
			options.publicConstants.moveGuideRadius
		);
	}

	if (typeof options?.publicConstants?.resizeSquareGuideLength === "number") {
		setPublicConstantByName(
			this,
			"RESIZE_SQUARE_GUIDE_LENGTH",
			options.publicConstants.resizeSquareGuideLength
		);
	}

	if (
		typeof options?.publicConstants?.resizeSquareBorderGuideWidth === "number"
	) {
		setPublicConstantByName(
			this,
			"RESIZE_SQUARE_GUIDE_BORDER_WIDTH",
			options.publicConstants.resizeSquareBorderGuideWidth
		);
	}

	if (
		typeof options?.publicConstants?.showBottomLeftResizeGuide === "boolean"
	) {
		setPublicConstantByName(
			this,
			"SHOW_BOTTOM_LEFT_RESIZE_GUIDE",
			options.publicConstants.showBottomLeftResizeGuide
		);
	}

	if (typeof options?.publicConstants?.autoScrollDistance === "number") {
		setPublicConstantByName(
			this,
			"AUTO_SCROLL_DISTANCE",
			options.publicConstants.autoScrollDistance
		);
	}

	if (typeof options?.publicConstants?.autoScrollPoint === "number") {
		setPublicConstantByName(
			this,
			"AUTO_SCROLL_POINT",
			options.publicConstants.autoScrollPoint
		);
	}

	if (
		typeof options?.publicConstants?.moveOrResizeHeightIncrements === "number"
	) {
		setPublicConstantByName(
			this,
			"MOVE_OR_RESIZE_HEIGHT_INCREMENTS",
			options.publicConstants.moveOrResizeHeightIncrements
		);
	}

	if (typeof options?.publicConstants?.autoScrollForMouse === "boolean") {
		setPublicConstantByName(
			this,
			"AUTO_SCROLL_FOR_MOUSE",
			options.publicConstants.autoScrollForMouse
		);
	}

	if (typeof options?.publicConstants?.mouseDownTime === "number") {
		setPublicConstantByName(
			this,
			"MOUSE_DOWN_TIME",
			options.publicConstants.mouseDownTime
		);
	}

	if (typeof options?.publicConstants?.touchHoldTime === "number") {
		setPublicConstantByName(
			this,
			"TOUCH_HOLD_TIME",
			options.publicConstants.touchHoldTime
		);
	}

	if (typeof options?.publicConstants?.demoWaitTime === "number") {
		setPublicConstantByName(
			this,
			"DEMO_WAIT_TIME",
			options.publicConstants.demoWaitTime
		);
	}

	if (typeof options?.publicConstants?.windowResizeWaitTime === "number") {
		setPublicConstantByName(
			this,
			"WINDOW_RESIZE_WAIT_TIME",
			options.publicConstants.windowResizeWaitTime
		);
	}

	if (typeof options?.publicConstants?.autoScrollDelay === "number") {
		setPublicConstantByName(
			this,
			"AUTO_SCROLL_DELAY",
			options.publicConstants.autoScrollDelay
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

	if (typeof options?.publicConstants?.animateTime === "number") {
		setPublicConstantByName(
			this,
			"ANIMATE_TIME",
			options.publicConstants.animateTime
		);
	}

	if (typeof options?.publicConstants?.crossHairWidth === "number") {
		setPublicConstantByName(
			this,
			"CROSS_HAIR_WIDTH",
			options.publicConstants.crossHairWidth
		);
	}

	if (typeof options?.publicConstants?.crossHairHeight === "number") {
		setPublicConstantByName(
			this,
			"CROSS_HAIR_HEIGHT",
			options.publicConstants.crossHairHeight
		);
	}

	if (
		typeof options?.publicConstants?.shrinkToFit === "number" &&
		options?.publicConstants?.shrinkToFit <= 10
	) {
		setPublicConstantByName(
			this,
			"SHRINK_TO_FIT",
			options.publicConstants.shrinkToFit
		);
	}

	// Public Constants ENDED

	// Miscellaneous BEGIN

	// Miscellaneous ENDED
};

export const initRender = function () {
	const e = getElements(this);
	const options = getOptions(this);
	const publicConstants = getPublicConstants(this);

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

	e.$el.innerHTML = `<div class = "limber-grid-view-container"><div class = "limber-grid-view"></div><div class = "limber-grid-view-license"><div class = "limber-grid-view-license-icon">©</div><div class = "limber-grid-view-license-details">LimberGridView Copyright © 2018-2022 Subendra Kumar Sharma. License GPLv3+: GNU GPL version 3 or later &lthttps://www.gnu.org/licenses/&gt.</div></div></div>`;
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
	const limberGridViewCrossHairGuide = document.createElement("div");
	limberGridViewCrossHairGuide.innerHTML = `<hr></hr><hr></hr>`;
	const limberGridViewIOTopHelper = document.createElement("div");
	const limberGridViewIOBottomHelper = document.createElement("div");

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
	limberGridViewCrossHairGuide.setAttribute(
		"class",
		"limber-grid-view-cross-hair-guide"
	);
	limberGridViewCrossHairGuide.style.transform = `translate(-${
		publicConstants.CROSS_HAIR_WIDTH * 2
	}px, -${publicConstants.CROSS_HAIR_HEIGHT * 2}px)`;
	limberGridViewIOTopHelper.setAttribute(
		"class",
		"limber-grid-view-io-top-helper"
	);
	limberGridViewIOBottomHelper.setAttribute(
		"class",
		"limber-grid-view-io-bottom-helper"
	);

	e.$pseudoContainer.appendChild(pseudoContainerItem);
	e.$limberGridView.appendChild(limberGridViewPseudoItem);
	e.$limberGridView.appendChild(limberGridViewMoveGuide);
	e.$limberGridView.appendChild(limberGridViewHeightAdjustGuide);
	e.$limberGridView.appendChild(limberGridViewAddCutGuide);
	e.$limberGridView.appendChild(limberGridViewTouchHoldGuide);
	e.$limberGridView.appendChild(limberGridViewCrossHairGuide);
	e.$limberGridView.appendChild(limberGridViewIOTopHelper);
	e.$limberGridView.appendChild(limberGridViewIOBottomHelper);

	set$pseudoContainerItem(this, pseudoContainerItem);
	set$limberGridViewPseudoItem(this, limberGridViewPseudoItem);
	set$limberGridViewMoveGuide(this, limberGridViewMoveGuide);
	set$limberGridViewHeightAdjustGuide(this, limberGridViewHeightAdjustGuide);
	set$limberGridViewAddCutGuide(this, limberGridViewAddCutGuide);
	set$limberGridViewTouchHoldGuide(this, limberGridViewTouchHoldGuide);
	set$limberGridViewCrossHairGuide(this, limberGridViewCrossHairGuide);
	set$limberGridViewIOTopHelper(this, limberGridViewIOTopHelper);
	set$limberGridViewIOBottomHelper(this, limberGridViewIOBottomHelper);
};
