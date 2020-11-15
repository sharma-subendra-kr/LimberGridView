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

const getElements = function (context) {
	return context.store.variables.elements;
};

const set$body = function (context, elm) {
	context.store.variables.elements.$body = elm;
};

const get$body = function (context) {
	return context.store.variables.elements.$body;
};

// outside pseudos BEGIN
const set$pseudoContainer = function (context, elm) {
	context.store.variables.elements.$pseudoContainer = elm;
};

const get$pseudoContainer = function (context) {
	return context.store.variables.elements.$pseudoContainer;
};

const set$pseudoContainerItem = function (context, elm) {
	context.store.variables.elements.$pseudoContainerItem = elm;
};

const get$pseudoContainerItem = function (context) {
	return context.store.variables.elements.$pseudoContainerItem;
};
// outside pseudos ENDED

// Grid Elements BEGIN
const set$el = function (context, elm) {
	context.store.variables.elements.$el = elm;
};

const get$el = function (context) {
	return context.store.variables.elements.$el;
};

const set$limberGridViewContainer = function (context, elm) {
	context.store.variables.elements.$limberGridViewContainer = elm;
};

const get$limberGridViewContainer = function (context) {
	return context.store.variables.elements.$limberGridViewContainer;
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

const set$limberGridViewPseudoItem = function (context, elm) {
	context.store.variables.elements.$limberGridViewPseudoItem = elm;
};

const get$limberGridViewPseudoItem = function (context) {
	return context.store.variables.elements.$limberGridViewPseudoItem;
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

const set$limberGridViewAddCutGuide = function (context, elm) {
	context.store.variables.elements.$limberGridViewAddCutGuide = elm;
};

const get$limberGridViewAddCutGuide = function (context) {
	return context.store.variables.elements.$limberGridViewAddCutGuide;
};

const set$limberGridViewTouchHoldGuide = function (context, elm) {
	context.store.variables.elements.$limberGridViewTouchHoldGuide = elm;
};

const get$limberGridViewTouchHoldGuide = function (context) {
	return context.store.variables.elements.$limberGridViewTouchHoldGuide;
};

const set$limberGridViewCrossHairGuide = function (context, elm) {
	context.store.variables.elements.$limberGridViewCrossHairGuide = elm;
};

const get$limberGridViewCrossHairGuide = function (context) {
	return context.store.variables.elements.$limberGridViewCrossHairGuide;
};

// Grid Elements ENDED

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

export default getElements;
export {
	getElements,
	set$body,
	get$body,
	// outside pseudo
	set$pseudoContainer,
	get$pseudoContainer,
	set$pseudoContainerItem,
	get$pseudoContainerItem,
	// Grid Elements
	set$el,
	get$el,
	set$limberGridView,
	get$limberGridView,
	set$limberGridViewItems,
	get$limberGridViewItems,
	set$limberGridViewContainer,
	get$limberGridViewContainer,
	set$limberGridViewPseudoItem,
	get$limberGridViewPseudoItem,
	set$limberGridViewMoveGuide,
	get$limberGridViewMoveGuide,
	set$limberGridViewHeightAdjustGuide,
	get$limberGridViewHeightAdjustGuide,
	set$limberGridViewAddCutGuide,
	get$limberGridViewAddCutGuide,
	set$limberGridViewTouchHoldGuide,
	get$limberGridViewTouchHoldGuide,
	set$limberGridViewCrossHairGuide,
	get$limberGridViewCrossHairGuide,
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
