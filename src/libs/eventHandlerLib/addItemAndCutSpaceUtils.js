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

import e from "../../variables/elements";
import { positionData as pd } from "../../variables/essentials";
import privateConstants from "../../constants/privateConstants";
import publicConstants from "../../constants/publicConstants";

export const loadInitState = () => {
	e.$body[0].classList.add(
		"limberGridViewBodyTagStateElementDraggingOrResizing",
		"limberGridViewBodyTagStateElementAdding"
	);

	const len = e.$limberGridViewItems.length;
	for (let i = 0; i < len; i++) {
		e.$limberGridViewItems[i].classList.add("limberGridViewItemResizingState");
	}

	for (let i = 0; i < len; i++) {
		e.$limberGridViewGridPseudoItems[i].classList.add(
			"limberGridViewGridPseudoItemResizingState"
		);
	}

	// e.$limberGridViewAddItemGuide[0].style.height = 1 + "px";
	// e.$limberGridViewAddItemGuide[0].style.width = 1 + "px";
	// e.$limberGridViewAddItemGuide[0].style.transform =
	// 	"translate(" + x + "px, " + y + "px)";

	if (publicConstants.ADD_OR_CUTSPACE_TOGGLE == "ADD") {
		e.$limberGridViewAddItemGuide[0].classList.add(
			"limberGridViewAddItemGuideActive"
		);
	} else if (publicConstants.ADD_OR_CUTSPACE_TOGGLE == "CUTSPACE") {
		e.$limberGridViewAddItemGuide[0].classList.add(
			"limberGridViewAddItemGuideActive",
			"limberGridViewAddItemGuideCutMode"
		);
	}

	e.$limberGridViewHeightAdjustGuide[0].style.height = 0 + "px";
	e.$limberGridViewHeightAdjustGuide[0].classList.add(
		"limberGridViewHeightAdjustGuideActive"
	);
};

export const unloadInitState = () => {
	e.$body[0].classList.remove(
		"limberGridViewBodyTagStateElementDraggingOrResizing",
		"limberGridViewBodyTagStateElementAdding"
	);

	const len = e.$limberGridViewItems.length;
	for (var i = 0; i < len; i++) {
		e.$limberGridViewItems[i].classList.remove(
			"limberGridViewItemResizingState"
		);
		e.$limberGridViewGridPseudoItems[i].classList.remove(
			"limberGridViewGridPseudoItemResizingState"
		);
	}

	e.$limberGridViewAddItemGuide[0].classList.remove(
		"limberGridViewAddItemGuideActive",
		"limberGridViewAddItemGuideCutMode",
		"limberGridViewAddItemGuideAddAllow",
		"limberGridViewAddItemGuideAddDisallow"
	);

	e.$limberGridViewHeightAdjustGuide[0].style.height = 0 + "px";
	e.$limberGridViewHeightAdjustGuide[0].classList.remove(
		"limberGridViewHeightAdjustGuideActive"
	);

	e.$limberGridViewAddItemOnTouchHoldGuide[0].classList.remove(
		"limberGridViewAddItemOnTouchHoldGuideActive"
	);
};
