/*

LimberGridView, a powerful JavaScript Library using Computational Geometry to render movable, dynamically resizable, and auto-arranging grids.

Copyright © 2018-2022 Subendra Kumar Sharma. All rights reserved. (jobs.sharma.subendra.kr@gmail.com)

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

const setPositionData = function (context, pd) {
	const len = pd.length;
	const arr = new Array(len);
	for (let i = 0; i < len; i++) {
		arr[i] = { ...pd[i] };
	}

	context.store.variables.essentials.positionData = arr;
};

const getPositionData = function (context) {
	return context.store.variables.essentials.positionData;
};

const setModifiedPositionData = function (context, pd) {
	const len = pd.length;
	const arr = new Array(len);
	for (let i = 0; i < len; i++) {
		arr[i] = { ...pd[i] };
	}

	context.store.variables.essentials.modifiedPositionData = arr;
};

const getModifiedPositionData = function (context) {
	return context.store.variables.essentials.modifiedPositionData;
};

const setSerializedPositionData = function (context, pd) {
	const len = pd.length;
	const arr = new Array(len);
	for (let i = 0; i < len; i++) {
		arr[i] = { ...pd[i] };
		arr[i].index = i;
	}

	arr.sort((a, b) => {
		if (a.y === b.y) {
			return a.x - b.x;
		}
		return a.y - b.y;
	});

	context.store.variables.essentials.serializedPositionData = arr;
};

const getSerializedPositionData = function (context) {
	return context.store.variables.essentials.serializedPositionData;
};

const setGridData = function (context, grid) {
	context.store.variables.essentials.gridData = grid;
};

const getGridData = function (context) {
	return context.store.variables.essentials.gridData;
};

const setCallbacks = function (context, cbs) {
	context.store.variables.essentials.callbacks = cbs;
};

const getCallbacks = function (context) {
	return context.store.variables.essentials.callbacks;
};

const setLimberGridViewBoundingClientRect = function (context, value) {
	context.store.variables.essentials.limberGridViewBoundingClientRect = value;
};

const getLimberGridViewBoundingClientRect = function (context) {
	return context.store.variables.essentials.limberGridViewBoundingClientRect;
};

const setRenderedItems = function (context, renderedItems) {
	context.store.variables.essentials.renderedItems = [...renderedItems];
};

const getRenderedItems = function (context) {
	return context.store.variables.essentials.renderedItems;
};

const setIOTopHelperPos = function (context, position) {
	context.store.variables.essentials.ioTopHelperPos = position;
};

const getIOTopHelperPos = function (context) {
	return context.store.variables.essentials.ioTopHelperPos;
};

const setIOBottomHelperPos = function (context, position) {
	context.store.variables.essentials.ioBottomHelperPos = position;
};

const getIOBottomHelperPos = function (context) {
	return context.store.variables.essentials.ioBottomHelperPos;
};

const setOnScrolTimeout = function (context, onScrollTimeout) {
	return (context.store.variables.essentials.onScrollTimeout = onScrollTimeout);
};

const getOnScrolTimeout = function (context) {
	return context.store.variables.essentials.onScrollTimeout;
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
	setSerializedPositionData,
	getSerializedPositionData,
	setGridData,
	getGridData,
	setCallbacks,
	getCallbacks,
	setLimberGridViewBoundingClientRect,
	getLimberGridViewBoundingClientRect,
	setRenderedItems,
	getRenderedItems,
	setIOTopHelperPos,
	getIOTopHelperPos,
	setIOBottomHelperPos,
	getIOBottomHelperPos,
	setOnScrolTimeout,
	getOnScrolTimeout,
};
