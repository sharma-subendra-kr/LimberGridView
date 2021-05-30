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

import getOptions from "../../store/variables/options";
import getElements from "../../store/variables/elements";
import { isMobile } from "../utils/utils";
import { getCallbacks } from "../../store/variables/essentials";
import { getBindedFunctions } from "../../store/variables/bindedFunctions";

export const reInitializeEvents = function () {
	unInitializeEvents();
	initializeEvents();
};

export const initializeVariables = function () {};

export const initializeEvents = function () {
	const options = getOptions(this);
	const e = getElements(this);
	const callbacks = getCallbacks(this);

	const bf = getBindedFunctions(this);

	if (options.editable) {
		if (!isMobile(this)) {
			if (options.enableInteractiveAddAndCut) {
				e.$limberGridView.addEventListener("mousedown", bf.onDeskMouseDown);
				if (options.enableTouchInteraction) {
					e.$limberGridView.addEventListener("touchstart", bf.onDeskTouchStart);
				}
			}
		}

		var len = e.$limberGridViewItems.length;
		for (var i = 0; i < len; i++) {
			if (!isMobile(this) && e.$limberGridViewItems[i]) {
				e.$limberGridViewItems[i].addEventListener(
					"mousedown",
					bf.onItemMouseDown
				);
				if (options.enableTouchInteraction) {
					e.$limberGridViewItems[i].addEventListener(
						"touchstart",
						bf.onItemTouchStart
					);
				}
			}

			if (callbacks.onItemClickCallback && e.$limberGridViewItems[i]) {
				e.$limberGridViewItems[i].addEventListener("click", bf.onItemClick);
			}
		}
	}
};

export const unInitializeEvents = function () {
	const options = getOptions(this);
	const e = getElements(this);

	const bf = getBindedFunctions(this);

	if (options.editable) {
		if (e.$limberGridView) {
			e.$limberGridView.removeEventListener("mousedown", bf.onDeskMouseDown);
			e.$limberGridView.removeEventListener("touchstart", bf.onDeskTouchStart);
		}

		if (e.$limberGridViewItems) {
			const len = e.$limberGridViewItems.length;
			for (let i = 0; i < len; i++) {
				if (!e.$limberGridViewItems[i]) {
					continue;
				}
				e.$limberGridViewItems[i].removeEventListener(
					"mousedown",
					bf.onItemMouseDown
				);
				e.$limberGridViewItems[i].removeEventListener(
					"touchstart",
					bf.onItemTouchStart
				);

				e.$limberGridViewItems[i].removeEventListener("click", bf.onItemClick);
			}
		}
	}
};

export const initializeItemTouchEvents = function () {
	const e = getElements(this);

	const bf = getBindedFunctions(this);

	if (e.$limberGridViewItems) {
		const len = e.$limberGridViewItems.length;
		for (let i = 0; i < len; i++) {
			if (!e.$limberGridViewItems[i]) {
				continue;
			}
			e.$limberGridViewItems[i].addEventListener(
				"mousedown",
				bf.onItemMouseDown
			);
			e.$limberGridViewItems[i].addEventListener(
				"touchstart",
				bf.onItemTouchStart
			);
		}
	}
};

export const unInitializeItemTouchEvents = function () {
	const e = getElements(this);

	const bf = getBindedFunctions(this);

	if (e.$limberGridViewItems) {
		const len = e.$limberGridViewItems.length;
		for (let i = 0; i < len; i++) {
			if (!e.$limberGridViewItems[i]) {
				continue;
			}
			e.$limberGridViewItems[i].removeEventListener(
				"mousedown",
				bf.onItemMouseDown
			);
			e.$limberGridViewItems[i].removeEventListener(
				"touchstart",
				bf.onItemTouchStart
			);
		}
	}
};
