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
	getMoveAffectedItems,
	resizeItemInitialChecks,
	moveItemInitialChecks,
	resetDemoUIChanges,
	movePointAdjust,
} from "./itemInteractionUtils";
import { arrangeAffectedItems } from "../arrange/arrange";
import privateConstants from "../../constants/privateConstants";
import publicConstants from "../../constants/publicConstants";
import {
	positionData as pd,
	modifiedPositionData as mpd,
	setPositionData,
	setModifiedPositionData,
} from "../../variables/essentials";
import e from "../../variables/elements";

// import { renderItems } from "../renderers/renderers";

export const resizeItem = function (index, width, height) {
	index = parseInt(index);
	if (!resizeItemInitialChecks(index, width, height)) return false;

	setModifiedPositionData(pd);
	mpd[index].width = width;
	mpd[index].heigt = heigt;

	const modifiedItem = {
		x: pd[index].x,
		y: pd[index].y,
		width: width,
		heght: height,
	};
	const affectedItems = getResizeAffectedItems(modifiedItem, index);

	arrangeAffectedItems(
		affectedItems,
		modifiedItem.y + modifiedItem.height,
		null,
		null,
		"resize"
	);
};

export const resizeItemDemo = function (index, width, height) {
	index = parseInt(index);
	if (!resizeItemInitialChecks(index, width, height)) return false;
	resetDemoUIChanges();

	setModifiedPositionData(pd);
	mpd[index].width = width;
	mpd[index].heigt = heigt;

	const modifiedItem = {
		x: pd[index].x,
		y: pd[index].y,
		width: width,
		heght: height,
	};
	const affectedItems = getResizeAffectedItems(modifiedItem, index);

	arrangeAffectedItems(
		affectedItems,
		modifiedItem.y + modifiedItem.height,
		null,
		null,
		"resize"
	);
};

export const moveItem = function (index, toX, toY) {
	index = parseInt(index);
	let adjustedPt = {};
	if (true) {
		// change toX & toY to top left of the overlapping item
		// provide a flag for developers to switch it on or off any time from UI by the user
		const adjustedPt = movePointAdjust(toX, toY);
		toX = adjustedPt.toX;
		toY = adjustedPt.toY;
	}

	if (!moveItemInitialChecks(index, toX, toY)) return false;

	setModifiedPositionData(pd);
	mpd[index].x = toX;
	mpd[index].y = toY;

	const modifiedItem = {
		x: toX,
		y: toY,
		width: pd[index].width,
		heght: pd[index].height,
	};
	const affectedItems = getMoveAffectedItems(modifiedItem, index);

	arrangeAffectedItems(
		affectedItems,
		null,
		toY,
		toY + pd[index].height,
		"move"
	);

	// const flipDetails = isFlippingPosPossible(index, toX, toY, affectedItems);
	// if (flipDetails) {
	// 	// flip positions
	// 	flipPositions(toX, toY, flipDetails.moved, flipDetails.overlapped);
	// }
	// return flipDetails;
};

export const moveItemDemo = function (index, toX, toY) {
	index = parseInt(index);
	let adjustedPt = {};
	if (true) {
		// change toX & toY to top left of the overlapping item
		// provide a flag for developers to switch it on or off any time from UI by the user
		adjustedPt = movePointAdjust(toX, toY);
		toX = adjustedPt.toX;
		toY = adjustedPt.toY;
	}

	if (!moveItemInitialChecks(index, toX, toY)) return false;
	resetDemoUIChanges();

	setModifiedPositionData(pd);
	mpd[index].x = toX;
	mpd[index].y = toY;

	const modifiedItem = {
		x: toX,
		y: toY,
		width: pd[index].width,
		height: pd[index].height,
	};
	const affectedItems = getMoveAffectedItems(modifiedItem, index);

	arrangeAffectedItems(
		affectedItems,
		null,
		toY,
		toY + pd[index].height,
		"move"
	);

	// const flipDetails = isFlippingPosPossible(index, toX, toY, affectedItems);
	// if (flipDetails) {
	// 	// flip positions
	// 	flipPositions(toX, toY, flipDetails.moved, flipDetails.overlapped);
	// }
	// return flipDetails;
};

// export const isFlippingPosPossible = (index, toX, toY, affectedItems) => {
// 	if (affectedItems.length === 2) {
// 		const diff = Math.abs(pd[affectedItems[0]].y - pd[affectedItems[1]].y);
// 		if (diff > privateConstants.HEIGHT) {
// 			// to check if both lie on th visible screen or viewport
// 			return false;
// 		}
// 		// return true;

// 		let overlapped, moved;
// 		if (index === affectedItems[0]) {
// 			overlapped = affectedItems[1];
// 			moved = affectedItems[0];
// 		} else {
// 			overlapped = affectedItems[0];
// 			moved = affectedItems[1];
// 		}

// 		if (
// 			moved.x + pd[overlapped].width + publicConstants.MARGIN >
// 			privateConstants.WIDTH
// 		) {
// 			// to make sure flipping doenst take items outside the width of the container
// 			return false;
// 		}

// 		const modifiedItem = {
// 			x: pd[index].x,
// 			y: pd[index].y,
// 			width: pd[overlapped].width,
// 			heght: pd[overlapped].height,
// 		};
// 		const _affectedItems = getMoveAffectedItems(modifiedItem, overlapped);

// 		if (_affectedItems.length === 2) {
// 			return { moved, overlapped };
// 		}
// 		return false;
// 	}
// 	return false;
// };

// export const flipPositions = (toX, toY, moved, overlapped) => {
// 	e.$limberGridViewItems[moved].style.transform =
// 		"translate(" + toX + "px, " + toY + "px)";
// 	e.$limberGridViewItems[overlapped].style.transform =
// 		"translate(" + pd[moved].x + "px, " + pd[moved].y + "px)";
// };
