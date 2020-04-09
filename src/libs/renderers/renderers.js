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

import options from "../../variables/options";
import e, {
	set$limberGridViewItems,
	set$limberGridViewBodyPseudoItems,
	set$limberGridViewGridPseudoItems,
	set$limberGridViewMoveGuide,
	set$limberGridViewHeightAdjustGuide,
	set$limberGridViewAddItemGuide,
	set$limberGridViewAddItemOnTouchHoldGuide,
} from "../../variables/elements";
import { isMobile } from "../utils/utils";
import {
	positionData,
	callbacks,
	serializedPositionData,
	setSerializedPositionData,
} from "../../variables/essentials";
import privateConstants from "../../constants/privateConstants";
import publicConstants from "../../constants/publicConstants";
import { getMarginAtPoint, getRowSequence } from "../utils/essentials";
import {
	initializeEvents,
	unInitializeEvents,
	initializeVariables,
} from "../eventHandlerLib/initializers";

export const render = function(_positionData, scale = true) {
	unInitializeEvents();

	if (_positionData === undefined || _positionData === null) {
		var _positionData = positionData;
	}
	if (scale == true) {
		var WIDTH_SCALE_FACTOR = privateConstants.WIDTH_SCALE_FACTOR;
	} else {
		var WIDTH_SCALE_FACTOR = 1;
	}

	var classList = ["limberGridViewItem"];
	if (options.editable == true) {
		classList.push("limberGridViewItemEditable");
	}
	var classListString = classList.join(" ");

	var html = [];

	// dev Code
	var t0 = performance.now();
	// dev Code END

	if (!isMobile()) {
		if (options.dataType == "string") {
			var length_0 = _positionData.length;
			for (var i = 0; i < length_0; i++) {
				_positionData[i].width *= WIDTH_SCALE_FACTOR;
				if (_positionData[i].width > privateConstants.WIDTH) {
					_positionData[i].width = privateConstants.WIDTH;
				}
				var front =
					'<div class = "' +
					classListString +
					'" data-index = "' +
					i +
					'" ';
				var style_1 =
					'style = "transform : translate(' +
					(_positionData[i].x *= WIDTH_SCALE_FACTOR) +
					"px, ";
				var style_2 =
					(_positionData[i].y *= WIDTH_SCALE_FACTOR) + "px); ";
				var style_3 = "width : " + _positionData[i].width + "px; ";
				var style_4 =
					"height : " +
					(_positionData[i].height *= WIDTH_SCALE_FACTOR) +
					"px; ";
				var style_5 = '">';

				var style = style_1 + style_2 + style_3 + style_4 + style_5;

				var bodyFront = "<div>";
				var bodyEnd = "</div>";
				var userData = callbacks.getItemRenderDataCallback(
					i,
					_positionData[i].width,
					_positionData[i].height,
					"render"
				);

				var body = bodyFront + userData + bodyEnd;
				var end = "</div>";

				var item = front + style + body + end;

				html.push(item);
			}
		} else if (options.dataType == "node") {
			e.$limberGridViewContainer[0].removeChild(e.$limberGridView[0]);

			var length_0 = _positionData.length;
			for (var i = 0; i < length_0; i++) {
				_positionData[i].width *= WIDTH_SCALE_FACTOR;
				if (_positionData[i].width > privateConstants.WIDTH) {
					_positionData[i].width = privateConstants.WIDTH;
				}
				var div = document.createElement("div");
				var attribute = document.createAttribute("data-index");
				attribute.value = i;
				div.setAttributeNode(attribute);
				if (classList.length > 0) {
					div.classList.add(classList[0]);
					div.classList.add(classList[1]);
				} else {
					div.classList.add(classList[0]);
				}
				div.style.transform =
					"translate(" +
					(_positionData[i].x *= WIDTH_SCALE_FACTOR) +
					"px, " +
					(_positionData[i].y *= WIDTH_SCALE_FACTOR) +
					"px)";
				div.style.width = _positionData[i].width + "px";
				div.style.height =
					(_positionData[i].height *= WIDTH_SCALE_FACTOR) + "px";

				var userData = callbacks.getItemRenderDataCallback(
					i,
					_positionData[i].width,
					_positionData[i].height,
					"render"
				);
				if (typeof userData == "string") {
					div.innerHTML = userData;
				} else {
					div.appendChild(userData);
				}
				e.$limberGridView[0].appendChild(div);
			}
			e.$limberGridViewContainer[0].appendChild(e.$limberGridView[0]);
		}
	} else {
		setSerializedPositionData(getRowSequence(true));
		if (options.dataType == "string") {
			var length_0 = _positionData.length;
			for (var i = 0; i < length_0; i++) {
				_positionData[i].width *= WIDTH_SCALE_FACTOR;
				_positionData[i].height *= WIDTH_SCALE_FACTOR;
				_positionData[i].x *= WIDTH_SCALE_FACTOR;
				_positionData[i].y *= WIDTH_SCALE_FACTOR;
				if (_positionData[i].width > privateConstants.WIDTH) {
					_positionData[i].width = privateConstants.WIDTH;
				}
				var front =
					'<div class = "limberGridViewItem" data-index = "' +
					i +
					'" ';
				var style_1 = 'style = "transform : translate(' + 0 + "px, ";
				var style_2 =
					(privateConstants.WIDTH /
						publicConstants.MOBILE_ASPECT_RATIO +
						getMarginAtPoint(serializedPositionData.map[i])) *
						serializedPositionData.map[i] +
					"px); ";
				var style_3 = "width : " + privateConstants.WIDTH + "px; ";
				var style_4 =
					"height : " +
					privateConstants.WIDTH /
						publicConstants.MOBILE_ASPECT_RATIO +
					"px; ";
				var style_5 = '">';

				var style = style_1 + style_2 + style_3 + style_4 + style_5;

				var bodyFront = "<div>";
				var bodyEnd = "</div>";
				var userData = callbacks.getItemRenderDataCallback(
					i,
					privateConstants.WIDTH,
					privateConstants.WIDTH /
						publicConstants.MOBILE_ASPECT_RATIO,
					"render"
				);

				var body = bodyFront + userData + bodyEnd;
				var end = "</div>";

				var item = front + style + body + end;

				html.push(item);
			}
		} else if (options.dataType == "node") {
			e.$limberGridViewContainer[0].removeChild(e.$limberGridView[0]);

			var length_0 = _positionData.length;
			for (var i = 0; i < length_0; i++) {
				_positionData[i].width *= WIDTH_SCALE_FACTOR;
				_positionData[i].height *= WIDTH_SCALE_FACTOR;
				_positionData[i].x *= WIDTH_SCALE_FACTOR;
				_positionData[i].y *= WIDTH_SCALE_FACTOR;
				if (_positionData[i].width > privateConstants.WIDTH) {
					_positionData[i].width = privateConstants.WIDTH;
				}
				var div = document.createElement("div");
				var attribute = document.createAttribute("data-index");
				attribute.value = i;
				div.setAttributeNode(attribute);
				div.classList.add("limberGridViewItem");

				div.style.transform =
					"translate(" +
					0 +
					"px, " +
					(privateConstants.WIDTH /
						publicConstants.MOBILE_ASPECT_RATIO +
						getMarginAtPoint(serializedPositionData.map[i])) *
						serializedPositionData.map[i] +
					"px)";
				div.style.width = privateConstants.WIDTH + "px";
				div.style.height =
					privateConstants.WIDTH /
						publicConstants.MOBILE_ASPECT_RATIO +
					"px";

				var userData = callbacks.getItemRenderDataCallback(
					i,
					privateConstants.WIDTH,
					privateConstants.WIDTH /
						publicConstants.MOBILE_ASPECT_RATIO,
					"render"
				);
				if (typeof userData == "string") {
					div.innerHTML = userData;
				} else {
					div.appendChild(userData);
				}
				e.$limberGridView[0].appendChild(div);
			}
			e.$limberGridViewContainer[0].appendChild(e.$limberGridView[0]);
		}
	}

	if (options.dataType == "string") {
		e.$limberGridView[0].innerHTML = html.join("");
	}

	// dev Code
	var t1 = performance.now();
	console.log(t0);
	console.log(t1);
	console.log(t1 - t0);
	// dev Code END

	set$limberGridViewItems(
		e.$limberGridView[0].querySelectorAll(".limberGridViewItem")
	);

	renderPseudoElements(_positionData);

	initializeVariables();
	initializeEvents();

	if (
		callbacks.renderComplete != undefined &&
		callbacks.renderComplete != null
	) {
		callbacks.renderComplete();
	}
};

export const renderPseudoElements = function(_positionData) {
	if (e.$limberGridViewGridPseudoItems != undefined) {
		var length_0 = _positionData.length;
		for (var i = 0; i < length_0; i++) {
			e.$limberGridViewGridPseudoItems[0].parentNode.removeChild(
				e.$limberGridViewGridPseudoItems[0]
			);
		}
		e.$limberGridViewGridPseudoItems = undefined;
		set$limberGridViewBodyPseudoItems(undefined);
	}

	var gridHtml = [];
	var bodyHtml = [];

	if (!isMobile()) {
		var length_0 = _positionData.length;
		for (var i = 0; i < length_0; i++) {
			var gridFront =
				'<div class = "limberGridViewGridPseudoItem" data-index = "' +
				i +
				'" ';
			var bodyFront =
				'<div class = "limberGridViewBodyPseudoItem" data-index = "' +
				i +
				'" ';
			var style_1 =
				'style = "transform : translate(' + _positionData[i].x + "px, ";
			var style_2 = _positionData[i].y + "px); ";
			var style_3 = "width : " + _positionData[i].width + "px; ";
			var style_4 = "height : " + _positionData[i].height + "px; ";
			var style_5 = '">';

			var style = style_1 + style_2 + style_3 + style_4 + style_5;

			var end = "</div>";

			var gridItem = gridFront + style + end;
			var bodyItem = bodyFront + style + end;

			gridHtml.push(gridItem);
			bodyHtml.push(bodyItem);
		}
	} else {
		var length_0 = _positionData.length;
		for (var i = 0; i < length_0; i++) {
			var gridFront =
				'<div class = "limberGridViewGridPseudoItem" data-index = "' +
				i +
				'" ';
			var bodyFront =
				'<div class = "limberGridViewBodyPseudoItem" data-index = "' +
				i +
				'" ';
			var style_1 = 'style = "transform : translate(' + 0 + "px, ";
			var style_2 =
				(privateConstants.WIDTH / publicConstants.MOBILE_ASPECT_RATIO +
					getMarginAtPoint(serializedPositionData.map[i])) *
					serializedPositionData.map[i] +
				"px); ";
			var style_3 = "width : " + privateConstants.WIDTH + "px; ";
			var style_4 =
				"height : " +
				privateConstants.WIDTH / publicConstants.MOBILE_ASPECT_RATIO +
				"px; ";
			var style_5 = "margin : " + publicConstants.MARGIN + 'px;">';

			var style = style_1 + style_2 + style_3 + style_4 + style_5;

			var end = "</div>";

			var gridItem = gridFront + style + end;
			var bodyItem = bodyFront + style + end;

			gridHtml.push(gridItem);
			bodyHtml.push(bodyItem);
		}
	}
	var limberGridViewMoveGuide =
		'<div class = "limberGridViewMoveGuide"></div>';
	var limberGridViewHeightAdjustGuide =
		'<div class = "limberGridViewHeightAdjustGuide"></div>';
	var limberGridViewAddItemGuide =
		'<div class = "limberGridViewAddItemGuide"></div>';
	var limberGridViewAddItemOnTouchHoldGuide =
		'<div class = "limberGridViewAddItemOnTouchHoldGuide"></div>';
	gridHtml.push(limberGridViewMoveGuide);
	gridHtml.push(limberGridViewHeightAdjustGuide);
	gridHtml.push(limberGridViewAddItemGuide);
	gridHtml.push(limberGridViewAddItemOnTouchHoldGuide);

	e.$bodyPseudoEl.innerHTML = bodyHtml.join("");
	e.$limberGridView[0].insertAdjacentHTML("beforeend", gridHtml.join(""));
	set$limberGridViewGridPseudoItems(
		e.$limberGridView[0].getElementsByClassName(
			"limberGridViewGridPseudoItem"
		)
	);
	set$limberGridViewBodyPseudoItems(
		e.$bodyPseudoEl.getElementsByClassName("limberGridViewBodyPseudoItem")
	);
	set$limberGridViewMoveGuide(
		e.$limberGridView[0].getElementsByClassName("limberGridViewMoveGuide")
	);
	set$limberGridViewHeightAdjustGuide(
		e.$limberGridView[0].getElementsByClassName(
			"limberGridViewHeightAdjustGuide"
		)
	);
	set$limberGridViewAddItemGuide(
		e.$limberGridView[0].getElementsByClassName(
			"limberGridViewAddItemGuide"
		)
	);
	set$limberGridViewAddItemOnTouchHoldGuide(
		e.$limberGridView[0].getElementsByClassName(
			"limberGridViewAddItemOnTouchHoldGuide"
		)
	);
};

export const renderItems = function(
	items,
	scale = true,
	processType = "onDemand"
) {
	unInitializeEvents();
	var scrollTop = e.$limberGridView[0].scrollTop;
	if (scale == true) {
		var WIDTH_SCALE_FACTOR = privateConstants.WIDTH_SCALE_FACTOR;
	} else {
		var WIDTH_SCALE_FACTOR = 1;
	}

	var classList = ["limberGridViewItem"];
	if (options.editable == true) {
		classList.push("limberGridViewItemEditable");
	}

	var html = [];

	// dev Code
	var t0 = performance.now();
	// dev Code END
	if (!isMobile()) {
		e.$limberGridViewContainer[0].removeChild(e.$limberGridView[0]);
		var length_0 = items.length;
		for (var i = 0; i < length_0; i++) {
			positionData[items[i]].width *= WIDTH_SCALE_FACTOR;
			if (positionData[items[i]].width > privateConstants.WIDTH) {
				positionData[items[i]].width = privateConstants.WIDTH;
			}
			var div = document.createElement("div");
			var attribute = document.createAttribute("data-index");
			attribute.value = items[i];
			div.setAttributeNode(attribute);

			if (classList.length > 0) {
				div.classList.add(classList[0]);
				div.classList.add(classList[1]);
			} else {
				div.classList.add(classList[0]);
			}

			div.style.transform =
				"translate(" +
				(positionData[items[i]].x *= WIDTH_SCALE_FACTOR) +
				"px, " +
				(positionData[items[i]].y *= WIDTH_SCALE_FACTOR) +
				"px)";
			div.style.width = positionData[items[i]].width + "px";
			div.style.height =
				(positionData[items[i]].height *= WIDTH_SCALE_FACTOR) + "px";

			var userData = callbacks.getItemRenderDataCallback(
				items[i],
				positionData[items[i]].width,
				positionData[items[i]].height,
				processType
			);
			if (typeof userData == "string") {
				div.innerHTML = userData;
			} else {
				div.appendChild(userData);
			}

			if (
				e.$limberGridViewItems[items[i]] == undefined ||
				e.$limberGridViewItems[items[i]] == null
			) {
				e.$limberGridView[0].appendChild(div);
			} else {
				e.$limberGridView[0].replaceChild(
					div,
					e.$limberGridViewItems[items[i]]
				);
			}
		}
		e.$limberGridViewContainer[0].appendChild(e.$limberGridView[0]);
	} else {
		e.$limberGridViewContainer[0].removeChild(e.$limberGridView[0]);
		var length_0 = items.length;
		for (var i = 0; i < length_0; i++) {
			var div = document.createElement("div");
			var attribute = document.createAttribute("data-index");
			attribute.value = items[i];
			div.setAttributeNode(attribute);

			div.classList.add("limberGridViewItem");
			div.style.transform =
				"translate(" +
				0 +
				"px, " +
				(privateConstants.WIDTH / publicConstants.MOBILE_ASPECT_RATIO +
					getMarginAtPoint(serializedPositionData.map[items[i]])) *
					serializedPositionData.map[items[i]] +
				"px)";
			div.style.width = privateConstants.WIDTH + "px";
			div.style.height =
				privateConstants.WIDTH / publicConstants.MOBILE_ASPECT_RATIO +
				"px";

			var userData = callbacks.getItemRenderDataCallback(
				items[i],
				privateConstants.WIDTH,
				privateConstants.WIDTH / publicConstants.MOBILE_ASPECT_RATIO,
				processType
			);
			if (typeof userData == "string") {
				div.innerHTML = userData;
			} else {
				div.appendChild(userData);
			}

			if (
				e.$limberGridViewItems[items[i]] == undefined ||
				e.$limberGridViewItems[items[i]] == null
			) {
				e.$limberGridView[0].appendChild(div);
			} else {
				e.$limberGridView[0].replaceChild(
					div,
					e.$limberGridViewItems[items[i]]
				);
			}
		}
		e.$limberGridViewContainer[0].appendChild(e.$limberGridView[0]);
	}

	// dev Code
	var t1 = performance.now();
	console.log(t0);
	console.log(t1);
	console.log(t1 - t0);
	// dev Code END
	e.$limberGridViewItems = e.$limberGridView[0].querySelectorAll(
		".limberGridViewItem"
	);

	renderPseudoItems(items);

	initializeVariables();
	initializeEvents();

	var renderDetails = {
		items: JSON.parse(JSON.stringify(items)),
		scale: scale,
		processType: processType,
	};

	if (
		callbacks.itemsRenderComplete != undefined &&
		callbacks.itemsRenderComplete != null &&
		processType != "addItems" &&
		processType != "resizeItems" &&
		processType != "removeItems" &&
		processType != "addItemInteractive"
	) {
		e.$limberGridView[0].scrollTop = scrollTop;
		callbacks.itemsRenderComplete(
			renderDetails.items,
			scale,
			processType,
			scrollTop
		);
	}

	return renderDetails;
};

export const renderPseudoItems = function(items) {
	var gridHtml = [];
	var bodyHtml = [];

	if (!isMobile()) {
		e.$limberGridViewContainer[0].removeChild(e.$limberGridView[0]);
		e.$body[0].removeChild(e.$bodyPseudoEl);
		var length_0 = items.length;
		for (var i = 0; i < length_0; i++) {
			var divGrid = document.createElement("div");
			var attributeGrid = document.createAttribute("data-index");
			attributeGrid.value = items[i];
			divGrid.setAttributeNode(attributeGrid);
			divGrid.classList.add("limberGridViewGridPseudoItem");
			divGrid.style.transform =
				"translate(" +
				positionData[items[i]].x +
				"px, " +
				positionData[items[i]].y +
				"px)";
			divGrid.style.width = positionData[items[i]].width + "px";
			divGrid.style.height = positionData[items[i]].height + "px";

			var divBody = document.createElement("div");
			var attributeBody = document.createAttribute("data-index");
			attributeBody.value = items[i];
			divBody.setAttributeNode(attributeBody);
			divBody.classList.add("limberGridViewBodyPseudoItem");
			divBody.style.transform = "translate(" + 0 + "px, " + 0 + "px)";
			divBody.style.width = positionData[items[i]].width + "px";
			divBody.style.height = positionData[items[i]].height + "px";

			if (
				e.$limberGridViewGridPseudoItems[items[i]] == undefined ||
				e.$limberGridViewGridPseudoItems[items[i]] == null
			) {
				e.$limberGridView[0].appendChild(divGrid);
				e.$bodyPseudoEl.appendChild(divBody);
			} else {
				e.$limberGridView[0].replaceChild(
					divGrid,
					e.$limberGridViewGridPseudoItems[items[i]]
				);
				e.$bodyPseudoEl.replaceChild(
					divBody,
					e.$limberGridViewBodyPseudoItems[items[i]]
				);
			}
		}
		e.$limberGridViewContainer[0].appendChild(e.$limberGridView[0]);
		e.$body[0].appendChild(e.$bodyPseudoEl);
	} else {
		e.$limberGridViewContainer[0].removeChild(e.$limberGridView[0]);
		e.$body[0].removeChild(e.$bodyPseudoEl);
		var length_0 = items.length;
		for (var i = 0; i < length_0; i++) {
			var divGrid = document.createElement("div");
			var attributeGrid = document.createAttribute("data-index");
			attributeGrid.value = items[i];
			divGrid.setAttributeNode(attributeGrid);
			divGrid.classList.add("limberGridViewGridPseudoItem");
			divGrid.style.transform =
				"translate(" +
				0 +
				"px, " +
				(privateConstants.WIDTH / publicConstants.MOBILE_ASPECT_RATIO +
					getMarginAtPoint(serializedPositionData.map[i])) *
					serializedPositionData.map[i] +
				"px)";
			divGrid.style.width = privateConstants.WIDTH + "px";
			divGrid.style.height =
				privateConstants.WIDTH / publicConstants.MOBILE_ASPECT_RATIO +
				"px";

			var divBody = document.createElement("div");
			var attributeBody = document.createAttribute("data-index");
			attributeBody.value = items[i];
			divBody.setAttributeNode(attributeBody);
			divBody.classList.add("limberGridViewBodyPseudoItem");
			divBody.style.transform = "translate(" + 0 + "px, " + 0 + "px)";
			divBody.style.width = privateConstants.WIDTH + "px";
			divBody.style.height =
				privateConstants.WIDTH / publicConstants.MOBILE_ASPECT_RATIO +
				"px";

			if (
				e.$limberGridViewGridPseudoItems[items[i]] == undefined ||
				e.$limberGridViewGridPseudoItems[items[i]] == null
			) {
				e.$limberGridView[0].appendChild(divGrid);
				e.$bodyPseudoEl.appendChild(divBody);
			} else {
				e.$limberGridView[0].replaceChild(
					divGrid,
					e.$limberGridViewGridPseudoItems[items[i]]
				);
				e.$bodyPseudoEl.replaceChild(
					divBody,
					e.$limberGridViewBodyPseudoItems[items[i]]
				);
			}
		}
		e.$limberGridViewContainer[0].appendChild(e.$limberGridView[0]);
		e.$body[0].appendChild(e.$bodyPseudoEl);
	}

	set$limberGridViewGridPseudoItems(
		e.$limberGridView[0].getElementsByClassName(
			"limberGridViewGridPseudoItem"
		)
	);
	e.$limberGridViewBodyPseudoItems = e.$bodyPseudoEl.getElementsByClassName(
		"limberGridViewBodyPseudoItem"
	);
};
