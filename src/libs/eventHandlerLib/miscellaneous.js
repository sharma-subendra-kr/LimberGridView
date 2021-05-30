/*

LimberGridView, a powerful JavaScript Library using Computational Geometry to render movable, dynamically resizable, and auto-arranging grids.

Copyright © 2018-2021 Subendra Kumar Sharma. All rights reserved. (jobs.sharma.subendra.kr@gmail.com)

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

import ResizeObserverPolyfill from "resize-observer-polyfill";
import getPublicConstants from "../../store/constants/publicConstants";
import {
	getCallbacks,
	setLimberGridViewBoundingClientRect,
	getLimberGridViewBoundingClientRect,
	setIOTopHelperPos,
	setIOBottomHelperPos,
	setRenderedItems,
} from "../../store/variables/essentials";
import { getBindedFunctions } from "../../store/variables/bindedFunctions";
import { init } from "../../initializers/initializers";
import { render } from "../renderers/renderers";
import getElements, {
	get$limberGridView,
} from "../../store/variables/elements";
import {
	setIsResizeObserving,
	getIsResizeObserving,
} from "../../store/observer/resizeObserver";
import { isMobile } from "../utils/utils";

export const onItemClick = function (event) {
	const callbacks = getCallbacks(this);

	callbacks.onItemClickCallback(event);
};

export const instantiateResizeObserver = function () {
	setLimberGridViewBoundingClientRect(
		this,
		getAllBoundingClientRectKeys(
			get$limberGridView(this).getBoundingClientRect()
		)
	);

	const ResizeObserver = window.ResizeObserver
		? window.ResizeObserver
		: ResizeObserverPolyfill;

	this.store.observer.resizeObserver.resizeObserver = new ResizeObserver(
		getBindedFunctions(this).resizeObserverCallback
	);
	this.store.observer.resizeObserver.resizeObserver.observe(
		get$limberGridView(this)
	);
};

export const resizeObserverCallback = function () {
	const publicConstants = getPublicConstants(this);
	if (!getIsResizeObserving(this)) {
		setIsResizeObserving(this, true);

		setTimeout(async () => {
			const prevBoundingClientRect = getLimberGridViewBoundingClientRect(this);
			setLimberGridViewBoundingClientRect(
				this,
				getAllBoundingClientRectKeys(
					get$limberGridView(this).getBoundingClientRect()
				)
			);

			if (!isMobile(this) && isMobile(this, prevBoundingClientRect)) {
				// switched to desktop view
				setIOTopHelperPos(this, -1);
				setIOBottomHelperPos(this, 1.5);
				setRenderedItems(this, []);

				// const e = getElements(this);
				// const len = e.$limberGridViewItems.length;
				// for (let i = 0; i < len; i++) {
				// 	if (e.$limberGridViewItems[i]) {
				// 		e.$limberGridViewItems[i].remove();
				// 		e.$limberGridViewItems[i] = undefined;
				// 	}
				// }
			}

			await init(this, true, false);
			render(this);
			setIsResizeObserving(this, false);
		}, publicConstants.WINDOW_RESIZE_WAIT_TIME);
	}
};

export const getAllBoundingClientRectKeys = function (rect) {
	return {
		x: rect.x,
		y: rect.y,
		width: rect.width,
		height: rect.height,
		top: rect.top,
		right: rect.right,
		bottom: rect.bottom,
		left: rect.left,
	};
};
