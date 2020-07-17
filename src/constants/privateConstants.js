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

// const constants = {
// 	WIDTH: 0,
// 	HEIGHT: 0,

// 	PADDING_LEFT: 0,
// 	PADDING_RIGHT: 0,
// 	PADDING_TOP: 0,
// 	PADDING_BOTTOM: 0,

// 	WIDTH_SCALE_FACTOR: 0,

// 	OUTPUT_WIDTH: 1080,
// 	OUTPUT_HEIGHT: 1920,
// 	OUTPUT_MARGIN: 5,
// 	MARGIN: 5,

// 	MIN_HEIGHT_AND_WIDTH: 150,
// };

const setPrivateConstants = function (context, val) {
	context.store.constants.privateConstants = val;
};

const getPrivateConstants = function (context) {
	return context.store.constants.privateConstants;
};

const setPrivateConstantByName = function (context, name, value) {
	if (context.store.constants.privateConstants[name]) {
		context.store.constants.privateConstants[name] = value;
	}
};

const getPrivateConstantByName = function (context, name) {
	return context.store.constants.privateConstants[name];
};

const setPaddingLeft = function (context, val) {
	context.store.constants.privateConstants.PADDING_LEFT = val;
};

const getPaddingLeft = function (context) {
	return context.store.constants.privateConstants.PADDING_LEFT;
};

const setPaddingRight = function (context, val) {
	context.store.constants.privateConstants.PADDING_RIGHT = val;
};

const getPaddingRight = function (context) {
	return context.store.constants.privateConstants.PADDING_RIGHT;
};

const setPaddingTop = function (context, val) {
	context.store.constants.privateConstants.PADDING_TOP = val;
};

const getPaddingTop = function (context) {
	return context.store.constants.privateConstants.PADDING_TOP;
};

const setPaddingBottom = function (context, val) {
	context.store.constants.privateConstants.PADDING_BOTTOM = val;
};

const getPaddingBottom = function (context) {
	return context.store.constants.privateConstants.PADDING_BOTTOM;
};

const setWidthScaleFactor = function (context, val) {
	context.store.constants.privateConstants.WIDTH_SCALE_FACTOR = val;
};

const getWidthScaleFactor = function (context) {
	return context.store.constants.privateConstants.WIDTH_SCALE_FACTOR;
};

//
const setOutputWidth = function (context, val) {
	context.store.constants.privateConstants.OUTPUT_WIDTH = val;
};

const getOutputWidth = function (context) {
	return context.store.constants.privateConstants.OUTPUT_WIDTH;
};

const setOutputHeight = function (context, val) {
	context.store.constants.privateConstants.OUTPUT_HEIGHT = val;
};

const getOutputHeight = function (context) {
	return context.store.constants.privateConstants.OUTPUT_HEIGHT;
};

const setOutputMargin = function (context, val) {
	context.store.constants.privateConstants.OUTPUT_MARGIN = val;
};

const getOutputMargin = function (context) {
	return context.store.constants.privateConstants.OUTPUT_MARGIN;
};

const setMargin = function (context, val) {
	context.store.constants.privateConstants.MARGIN = val;
};

const getMargin = function (context) {
	return context.store.constants.privateConstants.MARGIN;
};

const setMinHeightAndWidth = function (context, val) {
	context.store.constants.privateConstants.MIN_HEIGHT_AND_WIDTH = val;
};

const getMinHeightAndWidth = function (context) {
	return context.store.constants.privateConstants.MIN_HEIGHT_AND_WIDTH;
};

export {
	setPrivateConstants,
	getPrivateConstants,
	setPrivateConstantByName,
	getPrivateConstantByName,
	setPaddingLeft,
	getPaddingLeft,
	setPaddingRight,
	getPaddingRight,
	setPaddingTop,
	getPaddingTop,
	setPaddingBottom,
	getPaddingBottom,
	setWidthScaleFactor,
	getWidthScaleFactor,
	setOutputWidth,
	getOutputWidth,
	setOutputHeight,
	getOutputHeight,
	setOutputMargin,
	getOutputMargin,
	setMargin,
	getMargin,
	setMinHeightAndWidth,
	getMinHeightAndWidth,
};
