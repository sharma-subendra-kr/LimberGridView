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

// const ev = {
// 	// elementID: "",
// 	pseudoElementId: "",
// };
// const positionData = [];
// const modifiedPositionData = [];
// const initialPositionData = [];
// const initialGridData = {};
// let callbacks = {};
// const serializedPositionData = {};

// const setElementId = function (id) {
// 	ev.elementID = id;
// };

const setPseudoElementId = function (context, id) {
	context.store.variables.essentials.pseudoElementId = id;
};

const getPseudoElementId = function (context) {
	return context.store.variables.essentials.pseudoElementId;
};

const setPositionData = function (context, pos) {
	context.store.variables.essentials.positionData.length = 0;
	Object.assign(context.store.variables.essentials.positionData, pos);
};

const getPositionData = function (context) {
	return context.store.variables.essentials.positionData;
};

const setModifiedPositionData = function (context, pos) {
	context.store.variables.essentials.modifiedPositionData.length = 0;
	Object.assign(context.store.variables.essentials.modifiedPositionData, pos);
};

const getModifiedPositionData = function (context) {
	return context.store.variables.essentials.modifiedPositionData;
};

const setInitialPositionData = function (context, pos) {
	context.store.variables.essentials.initialPositionData.length = 0;
	Object.assign(
		context.store.variables.essentials.initialPositionData,
		JSON.parse(JSON.stringify(pos))
	);
};

const getInitialPositionData = function (context) {
	return context.store.variables.essentials.initialPositionData;
};

const setInitialGridData = function (context, grid) {
	emptyObject(context.store.variables.essentials.initialGridData);
	Object.assign(
		context.store.variables.essentials.initialGridData,
		JSON.parse(JSON.stringify(grid))
	);
};

const getInitialGridData = function (context) {
	return context.store.variables.essentials.initialGridData;
};

const setCallbacks = function (context, cbs) {
	emptyObject(context.store.variables.essentials.callbacks);
	Object.assign(context.store.variables.essentials.callbacks, cbs);
};

const getCallbacks = function (context) {
	return context.store.variables.essentials.callbacks;
};

const setSerializedPositionData = function (context, serPos) {
	emptyObject(context.store.variables.essentials.serializedPositionData);
	Object.assign(
		context.store.variables.essentials.serializedPositionData,
		serPos
	);
};

const getSerializedPositionData = function (context) {
	return context.store.variables.essentials.serializedPositionData;
};

export {
	// setElementId,
	setPseudoElementId,
	getPseudoElementId,
	setPositionData,
	getPositionData,
	setModifiedPositionData,
	getModifiedPositionData,
	setInitialPositionData,
	getInitialPositionData,
	setInitialGridData,
	getInitialGridData,
	setCallbacks,
	getCallbacks,
	setSerializedPositionData,
	getSerializedPositionData,
};
