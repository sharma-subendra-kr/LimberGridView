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

import { emptyObject } from "../../libs/utils/utils";

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

const setEssentialVariables = function (context, ev) {
	context.store.variables.essentials = ev;
};

const getEssentialVariables = function (context) {
	return context.store.variables.essentials;
};

const setPseudoContainerId = function (context, id) {
	context.store.variables.essentials.pseudoContainerId = id;
};

const getPseudoContainerId = function (context) {
	return context.store.variables.essentials.pseudoContainerId;
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

// const setInitialPositionData = function (context, pos) {
// 	context.store.variables.essentials.initialPositionData.length = 0;
// 	Object.assign(
// 		context.store.variables.essentials.initialPositionData,
// 		JSON.parse(JSON.stringify(pos))
// 	);
// };

// const getInitialPositionData = function (context) {
// 	return context.store.variables.essentials.initialPositionData;
// };

const setGridData = function (context, grid) {
	emptyObject(context.store.variables.essentials.gridData);
	Object.assign(
		context.store.variables.essentials.gridData,
		JSON.parse(JSON.stringify(grid))
	);
};

const getGridData = function (context) {
	return context.store.variables.essentials.gridData;
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

export default getEssentialVariables;
export {
	// setElementId,
	setEssentialVariables,
	getEssentialVariables,
	setPseudoContainerId,
	getPseudoContainerId,
	setPositionData,
	getPositionData,
	setModifiedPositionData,
	getModifiedPositionData,
	setGridData,
	getGridData,
	setCallbacks,
	getCallbacks,
	setSerializedPositionData,
	getSerializedPositionData,
};
