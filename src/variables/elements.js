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

import { emptyObject } from "../libs/utils/utils";

const e = {
	$body: [],
	$bodyPseudoEl: {},
	$limberGridViewBodyPseudoItems: [],
	$el: {},
	$limberGridView: [],
	$limberGridViewItems: [],
	$limberGridViewDebugMergedTempRects: [],
	$limberGridViewDebugStackTopRect: undefined,
	$limberGridViewDebugStackTopAdjRect: undefined,
	$limberGridViewDebugMergedRect: undefined,
	$limberGridViewDebugAdjRect: undefined,
	$limberGridViewDebugResultStackRects: [],
	$limberGridViewDebugStackRects: [],
	$limberGridViewDebugUnmergedRects: [],
	$limberGridViewDebugMergedFreeRects: [],
	$limberGridViewContainer: [],
	$limberGridViewStyle: [],
	$limberGridViewGridPseudoItems: undefined,
	$limberGridViewMoveGuide: [],
	$limberGridViewHeightAdjustGuide: [],
	$limberGridViewAddItemGuide: [],
	$limberGridViewAddItemOnTouchHoldGuide: [],
};

const set$body = function (elm) {
	e.$body = elm;
};

const set$bodyPseudoEl = function (elm) {
	e.$bodyPseudoEl = elm;
};

const set$limberGridViewBodyPseudoItems = function (elm) {
	e.$limberGridViewBodyPseudoItems = elm;
};

const set$el = function (elm) {
	e.$el = elm;
};

const set$limberGridView = function (elm) {
	e.$limberGridView = elm;
};

const set$limberGridViewItems = function (elm) {
	e.$limberGridViewItems = elm;
};

const set$limberGridViewDebugMergedTempRects = function (elm) {
	e.$limberGridViewDebugMergedTempRects = elm;
};

const set$limberGridViewDebugStackTopRect = function (elm) {
	e.$limberGridViewDebugStackTopRect = elm;
};

const set$limberGridViewDebugStackTopAdjRect = function (elm) {
	e.$limberGridViewDebugStackTopAdjRect = elm;
};

const set$limberGridViewDebugMergedRect = function (elm) {
	e.$limberGridViewDebugMergedRect = elm;
};

const set$limberGridViewDebugAdjRect = function (elm) {
	e.$limberGridViewDebugAdjRect = elm;
};

const set$limberGridViewDebugStackRects = function (elm) {
	e.$limberGridViewDebugStackRects = elm;
};

const set$limberGridViewDebugResultStackRects = function (elm) {
	e.$limberGridViewDebugResultStackRects = elm;
};

const set$limberGridViewDebugUnmergedRects = function (elm) {
	e.$limberGridViewDebugUnmergedRects = elm;
};

const set$limberGridViewDebugMergedFreeRects = function (elm) {
	e.$limberGridViewDebugMergedFreeRects = elm;
};

const set$limberGridViewContainer = function (elm) {
	e.$limberGridViewContainer = elm;
};

const set$limberGridViewStyle = function (elm) {
	e.$limberGridViewStyle = elm;
};

const set$limberGridViewGridPseudoItems = function (elm) {
	e.$limberGridViewGridPseudoItems = elm;
};

const set$limberGridViewMoveGuide = function (elm) {
	e.$limberGridViewMoveGuide = elm;
};

const set$limberGridViewHeightAdjustGuide = function (elm) {
	e.$limberGridViewHeightAdjustGuide = elm;
};

const set$limberGridViewAddItemGuide = function (elm) {
	e.$limberGridViewAddItemGuide = elm;
};

const set$limberGridViewAddItemOnTouchHoldGuide = function (elm) {
	e.$limberGridViewAddItemOnTouchHoldGuide = elm;
};

export default e;
export {
	set$body,
	set$bodyPseudoEl,
	set$limberGridViewBodyPseudoItems,
	set$el,
	set$limberGridView,
	set$limberGridViewItems,
	set$limberGridViewDebugMergedTempRects,
	set$limberGridViewDebugStackTopRect,
	set$limberGridViewDebugStackTopAdjRect,
	set$limberGridViewDebugMergedRect,
	set$limberGridViewDebugAdjRect,
	set$limberGridViewDebugStackRects,
	set$limberGridViewDebugResultStackRects,
	set$limberGridViewDebugUnmergedRects,
	set$limberGridViewDebugMergedFreeRects,
	set$limberGridViewContainer,
	set$limberGridViewStyle,
	set$limberGridViewGridPseudoItems,
	set$limberGridViewMoveGuide,
	set$limberGridViewHeightAdjustGuide,
	set$limberGridViewAddItemGuide,
	set$limberGridViewAddItemOnTouchHoldGuide,
};
