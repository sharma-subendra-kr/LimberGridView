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

import privateConstants from "./privateConstants";

const constants = {
	MOVE_GUIDE_RADIUS: 10,
	RESIZE_SQUARE_GUIDE_LENGTH: 10,
	RESIZE_SQUARE_BORDER_GUIDE_WIDTH: 3,
	AUTO_SCROLL_DISTANCE: 50,
	AUTO_SCROLL_POINT: 50,
	MOVE_OR_RESIZE_HEIGHT_INCREMENTS: 50,

	MOUSE_DOWN_TIME: 500,
	TOUCH_HOLD_TIME: 300,
	DEMO_WAIT_TIME: 500,
	WINDOW_RESIZE_WAIT_TIME: 1000,
	MARGIN: 5,

	MOBILE_ASPECT_RATIO: 16 / 9,

	ADD_OR_CUTSPACE_TOGGLE: "ADD",

	DEFINED_MIN_HEIGHT_AND_WIDTH: 150,
};

const setPublicConstantByName = function (name, value) {
	if (
		name === "DEFINED_MIN_HEIGHT_AND_WIDTH" &&
		value < privateConstants.MIN_HEIGHT_AND_WIDTH
	) {
		throw "DEFINED_MIN_HEIGHT_AND_WIDTH can't be less than MIN_HEIGHT_AND_WIDTH";
	}

	if (constants[name]) {
		constants[name] = value;
	}
};

const getPublicConstantByName = function (name) {
	return constants[name];
};

export default constants;
export { setPublicConstantByName, getPublicConstantByName };
