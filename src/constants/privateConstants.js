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

const constants = {
	WIDTH: 0,
	HEIGHT: 0,
	PADDING_LEFT: 0,
	PADDING_RIGHT: 0,
	PADDING_TOP: 0,
	PADDING_BOTTOM: 0,
	WIDTH_SCALE_FACTOR: 0,

	MIN_HEIGHT_AND_WIDTH: 150,
};

const setPrivateConstantByName = function (name, value) {
	if (constants[name]) {
		constants[name] = value;
	}
};

const getPrivateConstantByName = function (name) {
	return constants[name];
};

const setPaddingLeft = function (val) {
	constants.PADDING_LEFT = val;
};

const setPaddingRight = function (val) {
	constants.PADDING_RIGHT = val;
};

const setPaddingTop = function (val) {
	constants.PADDING_TOP = val;
};

const setPaddingBottom = function (val) {
	constants.PADDING_BOTTOM = val;
};

const setWidthScaleFactor = function (val) {
	constants.WIDTH_SCALE_FACTOR = val;
};

export default constants;
export {
	setPrivateConstantByName,
	getPrivateConstantByName,
	setPaddingLeft,
	setPaddingRight,
	setPaddingTop,
	setPaddingBottom,
	setWidthScaleFactor,
};
