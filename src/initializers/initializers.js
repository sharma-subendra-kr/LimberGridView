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

import { getOptions } from "../store/variables/options";
import {
	getPositionData,
	setPseudoContainerId,
	getPseudoContainerId,
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
	getDefinedMinHeightAndWidth,
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

export const init = function (context, isResize, autoArrange) {
	// if (typeof options.el === "string") {
	// 	const el = document.getElementById(options.el);
	// 	if (!el) {
	// 		throw `No for element found for id ${options.el}`;
	// 	}
	// 	set$el(el);
	// } else if (options.el instanceof Element) {
	// 	set$el(options.el);
	// } else {
	// 	throw "Valid DOM Element or Id required";
	// }

	// set$body(context, document.getElementsByTagName("body")[0]);
	// setPseudoElementId(
	// 	context,
	// 	"limber-grid-view-pseudo-container-" + getRandomString()
	// );
	// e.$body[0].insertAdjacentHTML(
	// 	"beforeend",
	// 	`<div id = ${getPseudoElementId(
	// 		context
	// 	)} class = "limber-grid-view-pseudo-container"></div>`
	// );
	// set$bodyPseudoEl(
	// 	context,
	// 	document.getElementById(getPseudoElementId(context))
	// );

	// e.$el.innerHTML = `<div class = "limber-grid-view-container"><style></style><div class = "limber-grid-view"></div><div class = "limber-grid-view-license"><div class = "limber-grid-view-license-icon">©</div><div class = "limber-grid-view-license-details">LimberGridView Copyright © 2018-2020, Subendra Kumar Sharma. License: GNU General Public License version 3, or (at your option) any later version.</div></div></div>`;
	// set$limberGridViewContainer(
	// 	context,
	// 	e.$el.querySelectorAll(".limber-grid-view-container")[0]
	// );
	// set$limberGridViewStyle(context, e.$el.getElementsByTagName("style")[0]);
	// set$limberGridView(context, e.$el.querySelectorAll(".limber-grid-view")[0]);

	const e = getElements(context);
	const privateConstants = getPrivateConstants(context);
	const publicConstants = getPublicConstants(context);
	const pd = getPositionData(context);

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

	// privateConstants.WIDTH =
	// 	e.$limberGridView.clientWidth -
	// 	privateConstants.PADDING_LEFT -
	// 	privateConstants.PADDING_RIGHT;
	// privateConstants.HEIGHT =
	// 	e.$limberGridView.clientHeight -
	// 	privateConstants.PADDING_TOP -
	// 	privateConstants.PADDING_BOTTOM;

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

	if (autoArrange === true || !checkPositionData(pd)) {
		// var _positionData = JSON.parse(JSON.stringify(positionData));
		// var remainingItems = [];
		// var length_0 = _positionData.length;
		// for (var i = 0; i < length_0; i++) {
		// 	remainingItems.push(i);
		// 	_positionData[i].width =
		// 		_positionData[i].width * privateConstants.WIDTH_SCALE_FACTOR;
		// 	_positionData[i].height =
		// 		_positionData[i].height * privateConstants.WIDTH_SCALE_FACTOR;
		// 	if (_positionData[i].width > privateConstants.WIDTH) {
		// 		_positionData[i].width = privateConstants.WIDTH;
		// 	}
		// }
		// setPositionData(
		// 	this,
		// 	fitRemainingItemsBelowDeepestLine(0, _positionData, remainingItems, [])
		// 		.positionData
		// );
	}
};

export const initConstantsAndFlags = function (options) {
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

	if (!isNaN(options?.publicConstants?.mobileAspectRatio)) {
		setPublicConstantByName(
			this,
			"MOBILE_ASPECT_RATIO",
			options.publicConstants.mobileAspectRatio
		);
	}

	if (!isNaN(options?.publicConstants?.moveGuideRadius)) {
		setPublicConstantByName(
			this,
			"MOVE_GUIDE_RADIUS",
			options.publicConstants.moveGuideRadius
		);
	}

	if (!isNaN(options?.publicConstants?.resizeSquareGuideLength)) {
		setPublicConstantByName(
			this,
			"RESIZE_SQUARE_GUIDE_LENGTH",
			options.publicConstants.resizeSquareGuideLength
		);
	}

	if (!isNaN(options?.publicConstants?.resizeSquareBorderGuideWidth)) {
		setPublicConstantByName(
			this,
			"RESIZE_SQUARE_GUIDE_BORDER_WIDTH",
			options?.publicConstants?.resizeSquareBorderGuideWidth
		);
	}

	if (!isNaN(options?.publicConstants?.autoScrollDistance)) {
		setPublicConstantByName(
			this,
			"AUTO_SCROLL_DISTANCE",
			options?.publicConstants?.autoScrollDistance
		);
	}

	if (!isNaN(options?.publicConstants?.autoScrollPoint)) {
		setPublicConstantByName(
			this,
			"AUTO_SCROLL_POINT",
			options?.publicConstants?.autoScrollPoint
		);
	}

	if (!isNaN(options?.publicConstants?.moveOrResizeHeightIncrements)) {
		setPublicConstantByName(
			this,
			"MOVE_OR_RESIZE_HEIGHT_INCREMENTS",
			options?.publicConstants?.moveOrResizeHeightIncrements
		);
	}

	if (!isNaN(options?.publicConstants?.mouseDownTime)) {
		setPublicConstantByName(
			this,
			"MOUSE_DOWN_TIME",
			options?.publicConstants?.mouseDownTime
		);
	}

	if (!isNaN(options?.publicConstants?.touchHoldTime)) {
		setPublicConstantByName(
			this,
			"TOUCH_HOLD_TIME",
			options?.publicConstants?.touchHoldTime
		);
	}

	if (!isNaN(options?.publicConstants?.demoWaitTime)) {
		setPublicConstantByName(
			this,
			"DEMO_WAIT_TIME",
			options?.publicConstants?.demoWaitTime
		);
	}

	if (!isNaN(options?.publicConstants?.windowResizeWaitTime)) {
		setPublicConstantByName(
			this,
			"WINDOW_RESIZE_WAIT_TIME",
			options?.publicConstants?.windowResizeWaitTime
		);
	}

	if (!isNaN(options?.publicConstants?.deskInteractionMode)) {
		setPublicConstantByName(
			this,
			"DESK_INTERACTION_MODE",
			options?.publicConstants?.deskInteractionMode
		);
	}
};

export const initRender = function () {
	const e = getElements(this);

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
	e.$body.appendChild(pseudoContainer);

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
