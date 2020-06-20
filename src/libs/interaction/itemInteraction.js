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

// import {
// 	findFreeSpaces,
// 	mergeFreeSpaces,
// 	findAffectedItemsOnMove,
// 	findAffectedItemsOnResize,
// 	fitItemsIntoFreeSpaces,
// 	findMatchingSpace,
// 	fitRemainingItems,
// 	fitRemainingItemsAboveDeepestLine,
// 	fitRemainingItemsBelowDeepestLine,
// 	getItemsFromPointDepth,
// 	shitftItemsBelow,
// 	mergePlains,
// 	subtractPlanes,
// } from "./calcUtils";
import {
	getAffectedItems,
	resizeItemInitialChecks,
	moveItemInitialChecks,
} from "./itemInteractionUtils";
import privateConstants from "../../constants/privateConstants";
import publicConstants from "../../constants/publicConstants";
import { positionData, setPositionData } from "../../variables/essentials";
import e from "../../variables/elements";
import { renderItems } from "../renderers/renderers";
import { IntervalTreesIterative } from "interval-trees";

export const resizeItem = function(index, width, height) {
	if (!resizeItemInitialChecks(index, width, height)) return false;

	const modifiedItem = {
		x: positionData[index].x,
		y: positionData[index].y,
		width: width,
		heght: height,
	};
	const affectedItems = getResizeAffectedItems(
		positionData,
		modifiedItem,
		index
	);
};

export const resizeItemDemo = function(index, width, height) {
	if (!resizeItemInitialChecks(index, width, height)) return false;

	const modifiedItem = {
		x: positionData[index].x,
		y: positionData[index].y,
		width: width,
		heght: height,
	};
	const affectedItems = getResizeAffectedItems(
		positionData,
		modifiedItem,
		index
	);
};

export const moveItem = function(index, toX, toY) {
	if (!moveItemInitialChecks(index, toX, toY)) return false;

	const modifiedItem = {
		x: toX,
		y: toY,
		width: positionData[index].width,
		heght: positionData[index].height,
	};
	const affectedItems = getMoveAffectedItems(
		positionData,
		modifiedItem,
		index
	);

	const flipDetails = isFlippingPosPossible(index, toX, toY, affectedItems);
	if (flipDetails) {
		// flip positions
		flipPositions();
	}
};

export const moveItemDemo = function(index, toX, toY) {
	if (!moveItemInitialChecks(index, toX, toY)) return false;

	const modifiedItem = {
		x: toX,
		y: toY,
		width: positionData[index].width,
		heght: positionData[index].height,
	};
	const affectedItems = getMoveAffectedItems(
		positionData,
		modifiedItem,
		index
	);
};

export const isFlippingPosPossible = (index, toX, toY, affectedItems) => {
	if (affectedItems.length === 2) {
		const diff = Math.abs(affectedItems[0].y - affectedItems[1].y);
		if (diff > privateConstants.HEIGHT) {
			// to check if both lie on th visible screen or viewport
			return false;
		}

		let overlapped, moved;
		if (positionData[index] === affectedItems[0]) {
			overlapped = affectedItems[1];
			moved = affectedItems[0];
		} else {
			overlapped = affectedItems[0];
			moved = affectedItems[1];
		}

		if (
			moved.x + overlapped.width + publicConstants.MARGIN >
			privateConstants.WIDTH
		) {
			// to make sure flipping doenst take items outside the width of the container
			return false;
		}

		const len = positionData.length;
		let overlappedIndex = -1;
		for (let i = 0; i < len; i++) {
			if (overlapped === positionData[i]) {
				overlappedIndex = i;
			}
		}

		const modifiedItem = {
			x: positionData[index].x,
			y: positionData[index].y,
			width: positionData[overlappedIndex].width,
			heght: positionData[overlappedIndex].height,
		};
		const _affectedItems = getMoveAffectedItems(
			positionData,
			modifiedItem,
			index
		);

		if (_affectedItems.length === 2) {
			return { moved, overlapped };
		}
		return false;
	}
	return false;
};

export const flipPositions = (index, toX, toY, affectedItems) => {};
