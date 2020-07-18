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

import {
	findFreeSpaces,
	mergeFreeSpaces,
	findAffectedItemsOnMove,
	findAffectedItemsOnResize,
	fitItemsIntoFreeSpaces,
	findMatchingSpace,
	fitRemainingItems,
	fitRemainingItemsAboveDeepestLine,
	fitRemainingItemsBelowDeepestLine,
	getItemsFromPointDepth,
	shitftItemsBelow,
	mergePlains,
	subtractPlanes,
} from "./calcUtils";
import privateConstants from "../../store/constants/privateConstants";
import {
	positionData,
	setPositionData,
} from "../../store/variables/essentials";
import e from "../../store/variables/elements";
import { renderItems } from "../renderers/renderers";

export const resizePlane = function (index, width, height) {
	let _positionData;

	if (positionData[index].x + width > privateConstants.WIDTH) {
		return false;
	}

	if (typeof width != "number" || typeof height != "number") {
		return false;
	}

	if (width < 50 || height < 50) {
		return false;
	}

	var allAffectedItems = findAffectedItemsOnResize(index, width, height);

	var item = JSON.parse(JSON.stringify(positionData[index]));
	item.width = width;
	item.height = height;
	var freeSpaces = findFreeSpaces(item, allAffectedItems.affectedItems);

	// NOW MERGE FREE SPACES
	item.doNotMergeFlag = true;
	var mergedFreeSpaces = mergeFreeSpaces(freeSpaces, [item]);

	var affectedItemsExceptSelfObjects = [];
	var length_0 = allAffectedItems.affectedItemsExceptSelf.length;
	for (var i = 0; i < length_0; i++) {
		var ind = allAffectedItems.affectedItemsExceptSelf[i];
		affectedItemsExceptSelfObjects[i] = JSON.parse(
			JSON.stringify(positionData[allAffectedItems.affectedItemsExceptSelf[i]])
		);
		affectedItemsExceptSelfObjects[i].index = ind;
	}

	var fitDetails = fitItemsIntoFreeSpaces(
		affectedItemsExceptSelfObjects,
		JSON.parse(JSON.stringify(mergedFreeSpaces)),
		[item]
	);
	var fittedItems = fitDetails.repositionedItems;

	_positionData = JSON.parse(JSON.stringify(positionData));
	var length_0 = fittedItems.length;
	for (var i = 0; i < length_0; i++) {
		var ind = fittedItems[i].index;
		_positionData[ind].x = fittedItems[i].x;
		_positionData[ind].y = fittedItems[i].y;
	}
	_positionData[index].width = width;
	_positionData[index].height = height;

	var remainingItems = [];
	var length_0 = allAffectedItems.affectedItemsExceptSelf.length;
	var length_1 = fittedItems.length;
	for (var i = 0; i < length_0; i++) {
		var fittedFlag = false;
		for (var j = 0; j < length_1; j++) {
			if (allAffectedItems.affectedItemsExceptSelf[i] == fittedItems[j].index) {
				fittedFlag = true;
				break;
			}
		}
		if (fittedFlag == false) {
			remainingItems.push(allAffectedItems.affectedItemsExceptSelf[i]);
		}
	}

	_positionData = fitRemainingItems(
		_positionData,
		remainingItems,
		allAffectedItems,
		index,
		JSON.parse(JSON.stringify(fitDetails))
	);

	var length_0 = _positionData.length;
	for (var i = 0; i < length_0; i++) {
		e.$limberGridViewItems[i].style.transform =
			"translate(" + _positionData[i].x + "px, " + _positionData[i].y + "px)";
		e.$limberGridViewItems[i].classList.remove(
			"limberGridViewItemDemo",
			"limberGridViewItemResizingState"
		);
	}

	setPositionData(_positionData);

	var scrollTop = e.$limberGridView[0].scrollTop;
	renderItems([index], false, "resizeItems");
	e.$limberGridView[0].scrollTop = scrollTop;
};

export const resizePlaneDemo = function (index, width, height) {
	if (positionData[index].x + width > privateConstants.WIDTH) {
		return false;
	}

	if (typeof width != "number" || typeof height != "number") {
		return false;
	}

	if (width < 50 || height < 50) {
		return false;
	}

	var length_0 = e.$limberGridViewItems.length;
	for (var i = 0; i < length_0; i++) {
		e.$limberGridViewItems[i].style.transform =
			"translate(" + positionData[i].x + "px, " + positionData[i].y + "px)";
		e.$limberGridViewItems[i].classList.remove("limberGridViewItemDemo");
	}

	var allAffectedItems = findAffectedItemsOnResize(index, width, height);

	var item = JSON.parse(JSON.stringify(positionData[index]));
	item.width = width;
	item.height = height;
	var freeSpaces = findFreeSpaces(item, allAffectedItems.affectedItems);

	// NOW MERGE FREE SPACES
	item.doNotMergeFlag = true;
	var mergedFreeSpaces = mergeFreeSpaces(freeSpaces, [item]);

	var affectedItemsExceptSelfObjects = [];
	var length_0 = allAffectedItems.affectedItemsExceptSelf.length;
	for (var i = 0; i < length_0; i++) {
		var ind = allAffectedItems.affectedItemsExceptSelf[i];
		affectedItemsExceptSelfObjects[i] = JSON.parse(
			JSON.stringify(positionData[allAffectedItems.affectedItemsExceptSelf[i]])
		);
		affectedItemsExceptSelfObjects[i].index = ind;
	}

	var fitDetails = fitItemsIntoFreeSpaces(
		affectedItemsExceptSelfObjects,
		JSON.parse(JSON.stringify(mergedFreeSpaces)),
		[item]
	);
	var fittedItems = fitDetails.repositionedItems;

	var length_0 = fittedItems.length;
	for (var i = 0; i < length_0; i++) {
		var ind = fittedItems[i].index;
		e.$limberGridViewItems[ind].style.transform =
			"translate(" + fittedItems[i].x + "px, " + fittedItems[i].y + "px)";
	}

	e.$limberGridViewItems[index].classList.add("limberGridViewItemDemo");

	var remainingItems = [];
	var length_0 = allAffectedItems.affectedItemsExceptSelf.length;
	var length_1 = fittedItems.length;
	for (var i = 0; i < length_0; i++) {
		var fittedFlag = false;
		for (var j = 0; j < length_1; j++) {
			if (allAffectedItems.affectedItemsExceptSelf[i] == fittedItems[j].index) {
				fittedFlag = true;
				break;
			}
		}
		if (fittedFlag == false) {
			var ind = allAffectedItems.affectedItemsExceptSelf[i];
			remainingItems.push(allAffectedItems.affectedItemsExceptSelf[i]);
			e.$limberGridViewItems[ind].classList.add("limberGridViewItemDemo");
		}
	}
};

export const movePlane = function (index, toX, toY) {
	let _positionData;
	var allAffectedItems = findAffectedItemsOnMove(index, toX, toY);

	var item = JSON.parse(JSON.stringify(positionData[index]));
	item.x = toX;
	item.y = toY;
	var freeSpaces = findFreeSpaces(item, allAffectedItems.affectedItems);

	// NOW MERGE FREE SPACES
	item.doNotMergeFlag = true;
	var mergedFreeSpaces = mergeFreeSpaces(freeSpaces, [item]);

	var affectedItemsExceptSelfObjects = [];
	var length_0 = allAffectedItems.affectedItemsExceptSelf.length;
	for (var i = 0; i < length_0; i++) {
		var ind = allAffectedItems.affectedItemsExceptSelf[i];
		affectedItemsExceptSelfObjects[i] = JSON.parse(
			JSON.stringify(positionData[allAffectedItems.affectedItemsExceptSelf[i]])
		);
		affectedItemsExceptSelfObjects[i].index = ind;
	}

	var fitDetails = fitItemsIntoFreeSpaces(
		affectedItemsExceptSelfObjects,
		JSON.parse(JSON.stringify(mergedFreeSpaces)),
		[item]
	);
	var fittedItems = fitDetails.repositionedItems;

	_positionData = JSON.parse(JSON.stringify(positionData));
	var length_0 = fittedItems.length;
	for (var i = 0; i < length_0; i++) {
		var ind = fittedItems[i].index;
		_positionData[ind].x = fittedItems[i].x;
		_positionData[ind].y = fittedItems[i].y;
	}
	_positionData[index].x = toX;
	_positionData[index].y = toY;

	var remainingItems = [];
	var length_0 = allAffectedItems.affectedItemsExceptSelf.length;
	var length_1 = fittedItems.length;
	for (var i = 0; i < length_0; i++) {
		var fittedFlag = false;
		for (var j = 0; j < length_1; j++) {
			if (allAffectedItems.affectedItemsExceptSelf[i] == fittedItems[j].index) {
				fittedFlag = true;
				break;
			}
		}
		if (fittedFlag == false) {
			remainingItems.push(allAffectedItems.affectedItemsExceptSelf[i]);
		}
	}

	_positionData = fitRemainingItems(
		_positionData,
		remainingItems,
		allAffectedItems,
		index,
		JSON.parse(JSON.stringify(fitDetails))
	);

	var length_0 = _positionData.length;
	for (var i = 0; i < length_0; i++) {
		e.$limberGridViewItems[i].style.transform =
			"translate(" + _positionData[i].x + "px, " + _positionData[i].y + "px)";
		e.$limberGridViewItems[i].classList.remove("limberGridViewItemDemo");
	}

	setPositionData(_positionData);
};

export const movePlaneDemo = function (index, toX, toY) {
	var length_0 = e.$limberGridViewItems.length;
	for (var i = 0; i < length_0; i++) {
		e.$limberGridViewItems[i].style.transform =
			"translate(" + positionData[i].x + "px, " + positionData[i].y + "px)";
		e.$limberGridViewItems[i].classList.remove("limberGridViewItemDemo");
	}

	var allAffectedItems = findAffectedItemsOnMove(index, toX, toY);

	var item = JSON.parse(JSON.stringify(positionData[index]));
	item.x = toX;
	item.y = toY;
	var freeSpaces = findFreeSpaces(item, allAffectedItems.affectedItems);

	// NOW MERGE FREE SPACES
	item.doNotMergeFlag = true;
	var mergedFreeSpaces = mergeFreeSpaces(freeSpaces, [item]);

	var affectedItemsExceptSelfObjects = [];
	var length_0 = allAffectedItems.affectedItemsExceptSelf.length;
	for (var i = 0; i < length_0; i++) {
		var ind = allAffectedItems.affectedItemsExceptSelf[i];
		affectedItemsExceptSelfObjects[i] = JSON.parse(
			JSON.stringify(positionData[allAffectedItems.affectedItemsExceptSelf[i]])
		);
		affectedItemsExceptSelfObjects[i].index = ind;
	}

	var fitDetails = fitItemsIntoFreeSpaces(
		affectedItemsExceptSelfObjects,
		JSON.parse(JSON.stringify(mergedFreeSpaces)),
		[item]
	);
	var fittedItems = fitDetails.repositionedItems;

	var length_0 = fittedItems.length;
	for (var i = 0; i < length_0; i++) {
		var ind = fittedItems[i].index;
		e.$limberGridViewItems[ind].style.transform =
			"translate(" + fittedItems[i].x + "px, " + fittedItems[i].y + "px)";
	}

	e.$limberGridViewItems[index].classList.add("limberGridViewItemDemo");

	var remainingItems = [];
	var length_0 = allAffectedItems.affectedItemsExceptSelf.length;
	var length_1 = fittedItems.length;
	for (var i = 0; i < length_0; i++) {
		var fittedFlag = false;
		for (var j = 0; j < length_1; j++) {
			if (allAffectedItems.affectedItemsExceptSelf[i] == fittedItems[j].index) {
				fittedFlag = true;
				break;
			}
		}
		if (fittedFlag == false) {
			var ind = allAffectedItems.affectedItemsExceptSelf[i];
			remainingItems.push(allAffectedItems.affectedItemsExceptSelf[i]);
			e.$limberGridViewItems[ind].classList.add("limberGridViewItemDemo");
		}
	}
};
