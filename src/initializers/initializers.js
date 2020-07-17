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

import options from "../variables/options";
import {
	ev,
	setElementId,
	setPseudoElementId,
	getPseudoElementId,
	initialGridData,
} from "../variables/essentials";
import e, {
	set$body,
	set$el,
	set$bodyPseudoEl,
	set$limberGridViewContainer,
	set$limberGridViewStyle,
	set$limberGridView,
} from "../variables/elements";
import privateConstants, {
	setPaddingLeft,
	setPaddingRight,
	setPaddingTop,
	setPaddingBottom,
	setWidthScaleFactor,
} from "../constants/privateConstants";
import publicConstants from "../constants/publicConstants";
import { getRandomString } from "../libs/utils/utils";

export const init = function (initialGridWidth, autoArrange) {
	if (typeof options.el === "string") {
		const el = document.getElementById(options.el);
		if (!el) {
			throw `No for element found for id ${options.el}`;
		}
		set$el(el);
	} else if (options.el instanceof Element) {
		set$el(options.el);
	} else {
		throw "Valid DOM Element or Id required";
	}

	set$body(document.getElementsByTagName("body")[0]);
	setPseudoElementId(
		this,
		"limber-grid-view-pseudo-container-" + getRandomString()
	);
	e.$body[0].insertAdjacentHTML(
		"beforeend",
		`<div id = ${getPseudoElementId(
			this
		)} class = "limber-grid-view-pseudo-container"></div>`
	);
	set$bodyPseudoEl(document.getElementById(getPseudoElementId(this)));

	e.$el.innerHTML = `<div class = "limber-grid-view-container"><style></style><div class = "limber-grid-view"></div><div class = "limber-grid-view-license"><div class = "limber-grid-view-license-icon">©</div><div class = "limber-grid-view-license-details">LimberGridView Copyright © 2018-2020, Subendra Kumar Sharma. License: GNU General Public License version 3, or (at your option) any later version.</div></div></div>`;
	set$limberGridViewContainer(
		e.$el.querySelectorAll(".limber-grid-view-container")[0]
	);
	set$limberGridViewStyle(e.$el.getElementsByTagName("style")[0]);
	set$limberGridView(e.$el.querySelectorAll(".limber-grid-view")[0]);

	setPaddingLeft(
		parseInt(
			window
				.getComputedStyle(e.$limberGridView, null)
				.getPropertyValue("padding-left")
		)
	);
	setPaddingRight(
		parseInt(
			window
				.getComputedStyle(e.$limberGridView, null)
				.getPropertyValue("padding-right")
		)
	);
	setPaddingTop(
		parseInt(
			window
				.getComputedStyle(e.$limberGridView, null)
				.getPropertyValue("padding-top")
		)
	);
	setPaddingBottom(
		parseInt(
			window
				.getComputedStyle(e.$limberGridView, null)
				.getPropertyValue("padding-bottom")
		)
	);

	privateConstants.WIDTH =
		e.$limberGridView.clientWidth -
		privateConstants.PADDING_LEFT -
		privateConstants.PADDING_RIGHT;
	privateConstants.HEIGHT =
		e.$limberGridView.clientHeight -
		privateConstants.PADDING_TOP -
		privateConstants.PADDING_BOTTOM;

	if (
		(initialGridWidth == undefined || initialGridWidth == null) &&
		positionData.length == 0
	) {
		initialGridWidth = privateConstants.WIDTH;
	}

	setWidthScaleFactor(privateConstants.WIDTH / initialGridWidth);

	if (autoArrange == true) {
		var _positionData = JSON.parse(JSON.stringify(positionData));
		var remainingItems = [];
		var length_0 = _positionData.length;
		for (var i = 0; i < length_0; i++) {
			remainingItems.push(i);
			_positionData[i].width =
				_positionData[i].width * privateConstants.WIDTH_SCALE_FACTOR;
			_positionData[i].height =
				_positionData[i].height * privateConstants.WIDTH_SCALE_FACTOR;
			if (_positionData[i].width > privateConstants.WIDTH) {
				_positionData[i].width = privateConstants.WIDTH;
			}
		}
		setPositionData(
			fitRemainingItemsBelowDeepestLine(0, _positionData, remainingItems, [])
				.positionData
		);
	} else {
		if (initialGridData.margin != undefined && initialGridData.margin != null) {
			if (
				typeof initialGridData.margin == "number" &&
				initialGridData.margin > 0
			) {
				publicConstants.MARGIN = initialGridData.margin;
				publicConstants.MARGIN =
					publicConstants.MARGIN * privateConstants.WIDTH_SCALE_FACTOR;
			} else {
				throw "Margin is required for rendering with position coordinates";
			}
		} else {
			throw "Margin is required for rendering with position coordinates";
		}
	}
};
