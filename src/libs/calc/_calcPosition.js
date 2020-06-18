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
import privateConstants from "../../constants/privateConstants";
import { positionData, setPositionData } from "../../variables/essentials";
import e from "../../variables/elements";
import { renderItems } from "../renderers/renderers";
import { IntervalTreesIterative } from "interval-trees";

export const resizePlane = function(index, width, height) {
	if (positionData[index].x + width > privateConstants.WIDTH) {
		return false;
	}

	if (typeof width != "number" || typeof height != "number") {
		return false;
	}

	if (width < 50 || height < 50) {
		return false;
	}
};

export const resizePlaneDemo = function(index, width, height) {};

export const movePlane = function(index, toX, toY) {};

export const movePlaneDemo = function(index, toX, toY) {};
