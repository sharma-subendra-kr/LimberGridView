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

import getPublicConstants from "../../store/constants/publicConstants";
import getOptions from "../../store/variables/options";
import { getCallbacks } from "../../store/variables/essentials";
import { getBindedFunctions } from "../../store/variables/bindedFunctions";
import { init } from "../../initializers/initializers";
import { render } from "../renderers/renderers";

export const onWindowResize = function (event) {
	const publicConstants = getPublicConstants(this);

	setTimeout(
		getBindedFunctions(this).onWindowResizeTimerCallback,
		publicConstants.WINDOW_RESIZE_WAIT_TIME
	);
	window.removeEventListener("resize", getBindedFunctions(this).onWindowResize);
};

export const onWindowResizeTimerCallback = async function (event) {
	await init(this, true, false);
	render(this);

	const options = getOptions(this);

	if (options.reRenderOnResize !== false) {
		window.addEventListener("resize", getBindedFunctions(this).onWindowResize);
	}
};

export const onItemClick = function (event) {
	const callbacks = getCallbacks(this);

	callbacks.onItemClickCallback(event);
};
