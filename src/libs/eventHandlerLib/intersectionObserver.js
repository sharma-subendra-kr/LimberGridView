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

import { getBindedFunctions } from "../../store/variables/bindedFunctions";
import {
	get$limberGridView,
	get$limberGridViewIOTopHelper,
	get$limberGridViewIOBottomHelper,
} from "../../store/variables/elements";

export const instantiateIntersectionObserver = function () {
	this.store.observer.intersectionObserver.intersectionObserver = new IntersectionObserver(
		getBindedFunctions(this).intersectionObserverCallback,
		{
			root: get$limberGridView,
			// rootMargin: "0px",
			threshold: 1.0,
		}
	);

	this.store.observer.intersectionObserver.intersectionObserver.observe(
		get$limberGridViewIOTopHelper(this)
	);
	this.store.observer.intersectionObserver.intersectionObserver.observe(
		get$limberGridViewIOBottomHelper(this)
	);
};

export const intersectionObserverCallback = function (entries, observer) {};
