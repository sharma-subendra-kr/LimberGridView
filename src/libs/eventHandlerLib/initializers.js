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

import options from "../../store/variables/options";
import e from "../../store/variables/elements";
import { isMobile } from "../utils/utils";
import { callbacks } from "../../store/variables/essentials";
import { onItemMouseDown, onItemTouchStart } from "./itemInteraction";
import {
	onLimberGridMouseDown,
	onLimberGridTouchStart,
} from "./addItemAndCutSpace";
import { onItemClick } from "./miscellaneous";

export const reInitializeEvents = function () {
	unInitializeEvents();
	initializeEvents();
};

export const initializeVariables = function () {};

export const initializeEvents = function () {
	if (options.editable == true) {
		if (isMobile() == false) {
			if (options.enableInteractiveAddAndCut != false) {
				e.$limberGridView[0].addEventListener(
					"mousedown",
					onLimberGridMouseDown
				);
				if (options.enableTouchInteraction != false) {
					e.$limberGridView[0].addEventListener(
						"touchstart",
						onLimberGridTouchStart
					);
				}
			}
		}

		var length_0 = e.$limberGridViewItems.length;
		for (var i = 0; i < length_0; i++) {
			if (isMobile() == false) {
				e.$limberGridViewItems[i].addEventListener(
					"mousedown",
					onItemMouseDown
				);
				if (options.enableTouchInteraction != false) {
					e.$limberGridViewItems[i].addEventListener(
						"touchstart",
						onItemTouchStart
					);
				}
			}

			if (
				callbacks.onItemClickCallback != undefined &&
				callbacks.onItemClickCallback != null
			) {
				e.$limberGridViewItems[i].addEventListener("click", onItemClick);
			}
		}
	}
};

export const unInitializeEvents = function () {
	if (options.editable === true) {
		if (e.$limberGridView !== undefined) {
			e.$limberGridView.removeEventListener("mousedown", onLimberGridMouseDown);
			e.$limberGridView.removeEventListener(
				"touchstart",
				onLimberGridTouchStart
			);
		}

		if (e.$limberGridViewItems != undefined) {
			var length_0 = e.$limberGridViewItems.length;
			for (var i = 0; i < length_0; i++) {
				e.$limberGridViewItems[i].removeEventListener(
					"mousedown",
					onItemMouseDown
				);
				e.$limberGridViewItems[i].removeEventListener(
					"touchstart",
					onItemTouchStart
				);

				e.$limberGridViewItems[i].removeEventListener("click", onItemClick);
			}
		}
	}
};

export const initializeItemTouchEvents = function () {
	if (e.$limberGridViewItems != undefined) {
		var length_0 = e.$limberGridViewItems.length;
		for (var i = 0; i < length_0; i++) {
			e.$limberGridViewItems[i].addEventListener("mousedown", onItemMouseDown);
			e.$limberGridViewItems[i].addEventListener(
				"touchstart",
				onItemTouchStart
			);
		}
	}
};

export const unInitializeItemTouchEvents = function () {
	if (e.$limberGridViewItems != undefined) {
		var length_0 = e.$limberGridViewItems.length;
		for (var i = 0; i < length_0; i++) {
			e.$limberGridViewItems[i].removeEventListener(
				"mousedown",
				onItemMouseDown
			);
			e.$limberGridViewItems[i].removeEventListener(
				"touchstart",
				onItemTouchStart
			);
		}
	}
};
