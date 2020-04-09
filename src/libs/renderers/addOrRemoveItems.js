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
	positionData,
	callbacks,
	serializedPositionData,
	setSerializedPositionData,
} from "../../variables/essentials";
import { isMobile } from "../utils/utils";
import { renderItems } from "./renderers";
import e from "../../variables/elements";
import privateConstants from "../../constants/privateConstants";
import publicConstants from "../../constants/publicConstants";
import { getMarginAtPoint } from "../utils/essentials";
import { unInitializeEvents } from "../eventHandlerLib/initializers";

export const removeItems = function(itemsIndices) {
	unInitializeEvents();

	var scrollTop = e.$limberGridView[0].scrollTop;

	var itemsToRender = [];
	var length_0 = positionData.length - 1;
	for (var i = length_0; i >= 0; i--) {
		var index = i;

		itemsToRender.push(length_0 - i);
	}

	itemsIndices.sort(function(a, b) {
		return Number(a) - Number(b);
	});
	var length_0 = itemsIndices.length - 1;
	for (var i = length_0; i >= 0; i--) {
		var index = itemsIndices[i];
		positionData.splice(index, 1);

		var item = e.$limberGridViewItems[index];
		var pseudoGridItem = e.$limberGridViewGridPseudoItems[index];
		var pseudoBodyItem = e.$limberGridViewBodyPseudoItems[index];

		e.$limberGridView[0].removeChild(item);
		e.$limberGridView[0].removeChild(pseudoGridItem);
		e.$bodyPseudoEl.removeChild(pseudoBodyItem);

		e.$limberGridViewItems = e.$limberGridView[0].querySelectorAll(
			".limberGridViewItem"
		);
		e.$limberGridViewGridPseudoItems = e.$limberGridView[0].getElementsByClassName(
			"limberGridViewGridPseudoItem"
		);
		e.$limberGridViewBodyPseudoItems = e.$bodyPseudoEl.getElementsByClassName(
			"limberGridViewBodyPseudoItem"
		);
	}

	itemsToRender.splice(positionData.length);

	if (isMobile()) {
		setSerializedPositionData(getRowSequence(true));
	}

	renderItems(itemsToRender, false, "removeItems");

	if (
		callbacks.removeCompleteCallback != undefined &&
		callbacks.removeCompleteCallback != null
	) {
		e.$limberGridView[0].scrollTop = scrollTop;
		callbacks.removeCompleteCallback(itemsIndices);
	}
};

export const addItems = function(
	howMany = 1,
	itemWidth = 100,
	itemHeight = 100
) {
	if (howMany == 0) {
		return;
	}

	if (itemWidth > privateConstants.WIDTH) {
		return;
	}

	var startingY = 0;
	var length_0 = positionData.length;
	for (var i = 0; i < length_0; i++) {
		if (positionData[i].y + positionData[i].height > startingY) {
			startingY = positionData[i].y + positionData[i].height;
		}
	}
	startingY = startingY + getMarginAtPoint(startingY);

	var items = [];

	var scrollToPosition = startingY;

	var remainingItems = howMany;
	var remainingWidth = privateConstants.WIDTH;
	while (remainingItems != 0) {
		var startingX = 0;
		while (
			remainingWidth > itemWidth + getMarginAtPoint(startingX) &&
			remainingItems != 0
		) {
			var item = {
				x: getMarginAtPoint(startingX) + startingX,
				y: startingY,
				width: itemWidth,
				height: itemHeight,
			};

			remainingWidth =
				remainingWidth - itemWidth - getMarginAtPoint(startingX);
			startingX = startingX + getMarginAtPoint(startingX) + itemWidth;
			remainingItems--;
			items.push(item);
		}
		remainingWidth = privateConstants.WIDTH;
		startingY = startingY + itemHeight + publicConstants.MARGIN;
	}

	var scrollHeight = e.$limberGridView[0].scrollHeight;

	var renderDetails = addItemsAtPositions(items, false, "addItems");

	if (!isMobile()) {
		e.$limberGridView[0].scrollTop = scrollToPosition;
	} else {
		e.$limberGridView[0].scrollTop = scrollHeight;
	}

	if (
		callbacks.addCompleteCallback != undefined &&
		callbacks.addCompleteCallback != null
	) {
		callbacks.addCompleteCallback(
			renderDetails.items,
			itemWidth,
			itemHeight,
			"addItems"
		);
	}
};

export const addItemsAtPositions = function(
	items,
	scale = true,
	processType = "onDemand"
) {
	var addArray = [];
	var startingIndex = positionData.length;

	var length_0 = items.length;
	for (var i = 0; i < length_0; i++) {
		addArray.push(startingIndex + i);
		if (isMobile()) {
			serializedPositionData.list.push(startingIndex + i);
			serializedPositionData.map[startingIndex + i] =
				serializedPositionData.list.length - 1;
		}
		positionData.push(items[i]);
	}

	var renderDetails = renderItems(addArray, scale, processType);

	return renderDetails;
};
