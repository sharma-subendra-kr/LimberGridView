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

const ev = {
	elementID: "",
	pseudoElementID: "",
};
const positionData = [];
const modifiedPositionData = [];
const initialPositionData = [];
const initialGridData = {};
let callbacks = {};
const serializedPositionData = {};
let DEBUG_MODE = true;

const setElementId = function(id) {
	ev.elementID = id;
};

const setPseudoElementID = function(id) {
	ev.pseudoElementID = id;
};

const setPositionData = function(pos) {
	positionData.length = 0;
	Object.assign(positionData, JSON.parse(JSON.stringify(pos)));
};

const setModifiedPositionData = function(pos) {
	modifiedPositionData.length = 0;
	Object.assign(modifiedPositionData, JSON.parse(JSON.stringify(pos)));
};

const setInitialPositionData = function(pos) {
	initialPositionData.length = 0;
	Object.assign(initialPositionData, JSON.parse(JSON.stringify(pos)));
};

const setInitialGridData = function(grid) {
	emptyObject(initialGridData);
	Object.assign(initialGridData, JSON.parse(JSON.stringify(grid)));
};

const setCallbacks = function(cbs) {
	emptyObject(callbacks);
	Object.assign(callbacks, cbs);
};

const setSerializedPositionData = function(serPos) {
	emptyObject(serializedPositionData);
	Object.assign(serializedPositionData, serPos);
};

const setDebugMode = function(flag) {
	DEBUG_MODE = flag;
};

export {
	ev,
	positionData,
	modifiedPositionData,
	initialPositionData,
	initialGridData,
	callbacks,
	serializedPositionData,
	DEBUG_MODE,
};
export {
	setElementId,
	setPseudoElementID,
	setPositionData,
	setModifiedPositionData,
	setInitialPositionData,
	setInitialGridData,
	setCallbacks,
	setSerializedPositionData,
	setDebugMode,
};
