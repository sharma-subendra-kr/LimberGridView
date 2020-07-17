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

// import { emptyObject } from "../libs/utils/utils";

// const e = {
// 	$body: [],
// 	$bodyPseudoEl: {},
// 	$limberGridViewBodyPseudoItem: [],
// 	$el: {},
// 	$limberGridView: [],
// 	$limberGridViewItems: [],
// 	$limberGridViewDebugMergedTempRects: [],
// 	$limberGridViewDebugStackTopRect: undefined,
// 	$limberGridViewDebugStackTopAdjRect: undefined,
// 	$limberGridViewDebugMergedRect: undefined,
// 	$limberGridViewDebugAdjRect: undefined,
// 	$limberGridViewDebugResultStackRects: [],
// 	$limberGridViewDebugStackRects: [],
// 	$limberGridViewDebugUnmergedRects: [],
// 	$limberGridViewDebugMergedFreeRects: [],
// 	$limberGridViewContainer: undefined,
// 	$limberGridViewStyle: [],
// 	$limberGridViewGridPseudoItem: undefined,
// 	$limberGridViewMoveGuide: [],
// 	$limberGridViewHeightAdjustGuide: [],
// 	$limberGridViewAddItemGuide: [],
// 	$limberGridViewAddItemOnTouchHoldGuide: [],
// };

const getElements = function (context) {
	return context.store.variables.elements;
};

const set$body = function (context, elm) {
	context.store.variables.elements.$body = elm;
};

const get$body = function (context) {
	return context.store.variables.elements.$body;
};

const set$bodyPseudoEl = function (context, elm) {
	context.store.variables.elements.$bodyPseudoEl = elm;
};

const get$bodyPseudoEl = function (context) {
	return context.store.variables.elements.$bodyPseudoEl;
};

const set$limberGridViewBodyPseudoItem = function (context, elm) {
	context.store.variables.elements.$limberGridViewBodyPseudoItem = elm;
};

const get$limberGridViewBodyPseudoItem = function (context) {
	return context.store.variables.elements.$limberGridViewBodyPseudoItem;
};

const set$el = function (context, elm) {
	context.store.variables.elements.$el = elm;
};

const get$el = function (context) {
	return context.store.variables.elements.$el;
};

const set$limberGridView = function (context, elm) {
	context.store.variables.elements.$limberGridView = elm;
};

const get$limberGridView = function (context) {
	return context.store.variables.elements.$limberGridView;
};

const set$limberGridViewItems = function (context, elm) {
	context.store.variables.elements.$limberGridViewItems = elm;
};

const get$limberGridViewItems = function (context) {
	return context.store.variables.elements.$limberGridViewItems;
};

const set$limberGridViewContainer = function (context, elm) {
	context.store.variables.elements.$limberGridViewContainer = elm;
};

const get$limberGridViewContainer = function (context) {
	return context.store.variables.elements.$limberGridViewContainer;
};

const set$limberGridViewStyle = function (context, elm) {
	context.store.variables.elements.$limberGridViewStyle = elm;
};

const get$limberGridViewStyle = function (context) {
	return context.store.variables.elements.$limberGridViewStyle;
};

const set$limberGridViewGridPseudoItem = function (context, elm) {
	context.store.variables.elements.$limberGridViewGridPseudoItem = elm;
};

const get$limberGridViewGridPseudoItem = function (context) {
	return context.store.variables.elements.$limberGridViewGridPseudoItem;
};

const set$limberGridViewMoveGuide = function (context, elm) {
	context.store.variables.elements.$limberGridViewMoveGuide = elm;
};

const get$limberGridViewMoveGuide = function (context) {
	return context.store.variables.elements.$limberGridViewMoveGuide;
};

const set$limberGridViewHeightAdjustGuide = function (context, elm) {
	context.store.variables.elements.$limberGridViewHeightAdjustGuide = elm;
};

const get$limberGridViewHeightAdjustGuide = function (context) {
	return context.store.variables.elements.$limberGridViewHeightAdjustGuide;
};

const set$limberGridViewAddItemGuide = function (context, elm) {
	context.store.variables.elements.$limberGridViewAddItemGuide = elm;
};

const get$limberGridViewAddItemGuide = function (context) {
	return context.store.variables.elements.$limberGridViewAddItemGuide;
};

const set$limberGridViewAddItemOnTouchHoldGuide = function (context, elm) {
	context.store.variables.elements.$limberGridViewAddItemOnTouchHoldGuide = elm;
};

const get$limberGridViewAddItemOnTouchHoldGuide = function (context) {
	return context.store.variables.elements
		.$limberGridViewAddItemOnTouchHoldGuide;
};

// DEBUG Elements
const set$limberGridViewDebugMergedTempRects = function (context, elm) {
	context.store.variables.elements.$limberGridViewDebugMergedTempRects = elm;
};

const get$limberGridViewDebugMergedTempRects = function (context) {
	return context.store.variables.elements.$limberGridViewDebugMergedTempRects;
};

const set$limberGridViewDebugStackTopRect = function (context, elm) {
	context.store.variables.elements.$limberGridViewDebugStackTopRect = elm;
};

const get$limberGridViewDebugStackTopRect = function (context) {
	return context.store.variables.elements.$limberGridViewDebugStackTopRect;
};

const set$limberGridViewDebugStackTopAdjRect = function (context, elm) {
	context.store.variables.elements.$limberGridViewDebugStackTopAdjRect = elm;
};

const get$limberGridViewDebugStackTopAdjRect = function (context) {
	return context.store.variables.elements.$limberGridViewDebugStackTopAdjRect;
};

const set$limberGridViewDebugMergedRect = function (context, elm) {
	context.store.variables.elements.$limberGridViewDebugMergedRect = elm;
};

const get$limberGridViewDebugMergedRect = function (context) {
	return context.store.variables.elements.$limberGridViewDebugMergedRect;
};

const set$limberGridViewDebugAdjRect = function (context, elm) {
	context.store.variables.elements.$limberGridViewDebugAdjRect = elm;
};

const get$limberGridViewDebugAdjRect = function (context) {
	return context.store.variables.elements.$limberGridViewDebugAdjRect;
};

const set$limberGridViewDebugStackRects = function (context, elm) {
	context.store.variables.elements.$limberGridViewDebugStackRects = elm;
};

const get$limberGridViewDebugStackRects = function (context) {
	return context.store.variables.elements.$limberGridViewDebugStackRects;
};

const set$limberGridViewDebugResultStackRects = function (context, elm) {
	context.store.variables.elements.$limberGridViewDebugResultStackRects = elm;
};

const get$limberGridViewDebugResultStackRects = function (context) {
	return context.store.variables.elements.$limberGridViewDebugResultStackRects;
};

const set$limberGridViewDebugUnmergedRects = function (context, elm) {
	context.store.variables.elements.$limberGridViewDebugUnmergedRects = elm;
};

const get$limberGridViewDebugUnmergedRects = function (context) {
	return context.store.variables.elements.$limberGridViewDebugUnmergedRects;
};

const set$limberGridViewDebugMergedFreeRects = function (context, elm) {
	context.store.variables.elements.$limberGridViewDebugMergedFreeRects = elm;
};

const get$limberGridViewDebugMergedFreeRects = function (context) {
	return context.store.variables.elements.$limberGridViewDebugMergedFreeRects;
};

export {
	getElements,
	set$body,
	get$body,
	set$bodyPseudoEl,
	get$bodyPseudoEl,
	set$limberGridViewBodyPseudoItem,
	get$limberGridViewBodyPseudoItem,
	set$el,
	get$el,
	set$limberGridView,
	get$limberGridView,
	set$limberGridViewItems,
	get$limberGridViewItems,
	set$limberGridViewContainer,
	get$limberGridViewContainer,
	set$limberGridViewStyle,
	get$limberGridViewStyle,
	set$limberGridViewGridPseudoItem,
	get$limberGridViewGridPseudoItem,
	set$limberGridViewMoveGuide,
	get$limberGridViewMoveGuide,
	set$limberGridViewHeightAdjustGuide,
	get$limberGridViewHeightAdjustGuide,
	set$limberGridViewAddItemGuide,
	get$limberGridViewAddItemGuide,
	set$limberGridViewAddItemOnTouchHoldGuide,
	get$limberGridViewAddItemOnTouchHoldGuide,
	// DEBUG Elements
	set$limberGridViewDebugMergedTempRects,
	get$limberGridViewDebugMergedTempRects,
	set$limberGridViewDebugStackTopRect,
	get$limberGridViewDebugStackTopRect,
	set$limberGridViewDebugStackTopAdjRect,
	get$limberGridViewDebugStackTopAdjRect,
	set$limberGridViewDebugMergedRect,
	get$limberGridViewDebugMergedRect,
	set$limberGridViewDebugAdjRect,
	get$limberGridViewDebugAdjRect,
	set$limberGridViewDebugStackRects,
	get$limberGridViewDebugStackRects,
	set$limberGridViewDebugResultStackRects,
	get$limberGridViewDebugResultStackRects,
	set$limberGridViewDebugUnmergedRects,
	get$limberGridViewDebugUnmergedRects,
	set$limberGridViewDebugMergedFreeRects,
	get$limberGridViewDebugMergedFreeRects,
};
