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

import getElements from "../../store/variables/elements";
import getPublicConstants from "../../store/constants/publicConstants";

export const loadInitState = (context) => {
	const e = getElements(context);
	const publicConstants = getPublicConstants(context);

	e.$body.classList.add(
		"limber-grid-view-body-tag-state-editing",
		"limber-grid-view-body-tag-state-editing-adding-cutting"
	);

	const len = e.$limberGridViewItems.length;
	for (let i = 0; i < len; i++) {
		e.$limberGridViewItems[i].classList.add(
			"limber-grid-view-item-resizing-state"
		);
	}

	e.$limberGridViewPseudoItem.classList.add(
		"limber-grid-view-pseudo-item-resizing-state"
	);

	if (publicConstants.DESK_INTERACTION_MODE === "ADD") {
		e.$limberGridViewAddCutGuide.classList.add(
			"limber-grid-view-add-cut-guide-active"
		);
	} else if (publicConstants.DESK_INTERACTION_MODE === "CUTSPACE") {
		e.$limberGridViewAddCutGuide.classList.add(
			"limber-grid-view-add-cut-guide-active",
			"limber-grid-view-add-cut-guide-cut-mode"
		);
	}

	e.$limberGridViewHeightAdjustGuide.style.height = 0 + "px";
	e.$limberGridViewHeightAdjustGuide.classList.add(
		"limber-grid-view-height-adjust-guide-active"
	);
};

export const unloadInitState = (context) => {
	const e = getElements(context);

	e.$body.classList.remove(
		"limber-grid-view-body-tag-state-editing",
		"limber-grid-view-body-tag-state-editing-adding-cutting"
	);

	const len = e.$limberGridViewItems.length;
	for (var i = 0; i < len; i++) {
		e.$limberGridViewItems[i].classList.remove(
			"limber-grid-view-item-resizing-state"
		);
	}

	e.$limberGridViewPseudoItem.classList.remove(
		"limber-grid-view-pseudo-item-resizing-state"
	);

	e.$limberGridViewAddCutGuide.classList.remove(
		"limber-grid-view-add-cut-guide-active",
		"limber-grid-view-add-cut-guide-cut-mode",
		"limber-grid-view-add-cut-guide-add-allow",
		"limber-grid-view-add-cut-guide-add-disallow"
	);
	e.$limberGridViewAddCutGuide.style.transform = `translate(-1000px, -1000px)`;

	e.$limberGridViewHeightAdjustGuide.style.height = 0 + "px";
	e.$limberGridViewHeightAdjustGuide.classList.remove(
		"limber-grid-view-height-adjust-guide-active"
	);

	e.$limberGridViewTouchHoldGuide.classList.remove(
		"limber-grid-view-touch-hold-guide-active"
	);
	e.$limberGridViewTouchHoldGuide.style.transform = `translate(-1000px, -1000px)`;
};
