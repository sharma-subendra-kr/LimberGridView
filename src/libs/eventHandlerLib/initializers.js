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

import getOptions from "../../store/variables/options";
import getElements from "../../store/variables/elements";
import { isMobile } from "../utils/utils";
import { getCallbacks } from "../../store/variables/essentials";
// import { onItemMouseDown, onItemTouchStart } from "./itemInteraction";
// import {
// 	onLimberGridMouseDown,
// 	onLimberGridTouchStart,
// } from "./deskInteraction";
import { getBindedFunctions } from "../../store/variables/bindedFunctions";
// import {
// 	getItemInteractionVars,
// 	getDeskInteractionVars,
// } from "../../store/variables/eventSpecific";
// import { onItemClick } from "./miscellaneous";

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

	if (options.editable === true) {
		if (!isMobile(this)) {
			if (options.enableInteractiveAddAndCut !== false) {
				e.$limberGridView.addEventListener("mousedown", bf.onDeskMouseDown);
				if (options.enableTouchInteraction !== false) {
					e.$limberGridView.addEventListener("touchstart", bf.onDeskTouchStart);
				}
			}
		}

		var len = e.$limberGridViewItems.length;
		for (var i = 0; i < len; i++) {
			if (!isMobile(this)) {
				e.$limberGridViewItems[i].addEventListener(
					"mousedown",
					bf.onItemMouseDown
				);
				if (options.enableTouchInteraction !== false) {
					e.$limberGridViewItems[i].addEventListener(
						"touchstart",
						bf.onItemTouchStart
					);
				}
			}

			if (callbacks.onItemClickCallback) {
				e.$limberGridViewItems[i].addEventListener("click", bf.onItemClick);
			}
		}
	}
};

export const unInitializeEvents = function () {
	const options = getOptions(this);
	const e = getElements(this);

	const bf = getBindedFunctions(this);

	if (options.editable === true) {
		if (e.$limberGridView !== undefined) {
			e.$limberGridView.removeEventListener("mousedown", bf.onDeskMouseDown);
			e.$limberGridView.removeEventListener("touchstart", bf.onDeskTouchStart);
		}

		if (e.$limberGridViewItems !== undefined) {
			const len = e.$limberGridViewItems.length;
			for (let i = 0; i < len; i++) {
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

	if (e.$limberGridViewItems !== undefined) {
		const len = e.$limberGridViewItems.length;
		for (let i = 0; i < len; i++) {
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

	if (e.$limberGridViewItems !== undefined) {
		const len = e.$limberGridViewItems.length;
		for (let i = 0; i < len; i++) {
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
