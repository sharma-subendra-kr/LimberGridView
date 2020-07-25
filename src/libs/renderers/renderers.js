/*

LimberGridView, a powerful JavaScript Libary that gives you movable, resizable(any size) and auto-arranging grids.

Copyright © 2018-2020, Subendra Kumar Sharma. All Rights reserved. (jobs.sharma.subendra.kr@gmail.com)

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

import getOptions from "../../store/variables/options";
import getElements, {
	set$limberGridViewItems,
} from "../../store/variables/elements";
import {
	getPositionData,
	setPositionData,
	getModifiedPositionData,
	setModifiedPositionData,
	getCallbacks,
} from "../../store/variables/essentials";
import { isMobile } from "../utils/utils";

import getPrivateConstants from "../../store/constants/privateConstants";
import getPublicConstants from "../../store/constants/publicConstants";
import {
	initializeEvents,
	unInitializeEvents,
	initializeVariables,
} from "../eventHandlerLib/initializers";
import { addItemAllowCheck } from "../arrange/arrangeUtils";
import { arrangeFromHeight } from "../arrange/arrange";
import { getPdBottomMax } from "./rendererUtils";

export const render = function (context, scale = true) {
	const options = getOptions(context);
	const pd = getPositionData(context);
	const privateConstants = getPrivateConstants(context);
	const publicConstants = getPublicConstants(context);
	const e = getElements(context);
	const callbacks = getCallbacks(context);

	unInitializeEvents.call(context);

	const len = pd.length;

	let WIDTH_SCALE_FACTOR = 1;
	if (scale) {
		WIDTH_SCALE_FACTOR = privateConstants.WIDTH_SCALE_FACTOR;
	}

	const nodes = new Array(len);
	let spd;

	if (!isMobile(context)) {
		let classList = "limber-grid-view-item";
		if (options.editable === true) {
			classList = "limber-grid-view-item limber-grid-view-item-editable";
		}

		for (let i = 0; i < len; i++) {
			pd[i].x *= WIDTH_SCALE_FACTOR;
			pd[i].y *= WIDTH_SCALE_FACTOR;
			pd[i].width *= WIDTH_SCALE_FACTOR;
			pd[i].height *= WIDTH_SCALE_FACTOR;

			const itemEl = document.createElement("div");
			itemEl.setAttribute("class", classList);
			itemEl.setAttribute("data-index", i);
			itemEl.style.transform = `translate(${pd[i].x}px, ${pd[i].y}px)`;
			itemEl.style.width = `${pd[i].width}px`;
			itemEl.style.height = `${pd[i].height}px`;

			// const renderData = callbacks.renderContent(i, pd[i].width, pd[i].height);
			// renderItemContent(context, renderData, itemEl);

			nodes[i] = itemEl;
		}
	} else {
		const classList = "limber-grid-view-item limber-grid-view-item-mobile-view";
		spd = getSerializedPositionData(pd);

		for (let i = 0; i < len; i++) {
			pd[i].x *= WIDTH_SCALE_FACTOR;
			pd[i].y *= WIDTH_SCALE_FACTOR;
			pd[i].width *= WIDTH_SCALE_FACTOR;
			pd[i].height *= WIDTH_SCALE_FACTOR;

			spd[i].width = privateConstants.WIDTH;
			spd[i].height =
				privateConstants.WIDTH / publicConstants.MOBILE_ASPECT_RATIO;

			const itemEl = document.createElement("div");
			itemEl.setAttribute("class", classList);
			itemEl.setAttribute("data-index", spd[i].index);
			itemEl.style.width = `${spd[i].width}px`;
			itemEl.style.height = `${spd[i].height}px`;

			// const renderData = callbacks.renderContent(
			// 	i,
			// 	spd[i].width,
			// 	spd[i].height
			// );
			// renderItemContent(context, renderData, itemEl);

			nodes[i] = itemEl;
		}
	}

	// e.$limberGridView.innerHTML = "";
	const itemsLen = e.$limberGridViewItems.length;
	for (let i = 0; i < itemsLen; i++) {
		e.$limberGridView.removeChild(e.$limberGridViewItems[i]);
	}

	for (let i = 0; i < len; i++) {
		e.$limberGridView.appendChild(nodes[i]);
	}

	for (let i = 0; i < len; i++) {
		const itemEl = nodes[i];
		if (!isMobile(context)) {
			const renderData = callbacks.renderContent(i, pd[i].width, pd[i].height);
			renderItemContent(context, renderData, itemEl);
		} else {
			const renderData = callbacks.renderContent(
				i,
				spd[i].width,
				spd[i].height
			);
			renderItemContent(context, renderData, itemEl);
		}
	}

	set$limberGridViewItems(context, [
		...e.$limberGridView.getElementsByClassName("limber-grid-view-item"),
	]);

	// initializeVariables();
	initializeEvents.call(context);

	if (callbacks.renderComplete) {
		callbacks.renderComplete();
	}
};

export const renderItem = function (context, index) {
	const e = getElements(context);
	const callbacks = getCallbacks(context);
	const pd = getPositionData(context);

	const renderData = callbacks.renderContent(
		index,
		pd[index].width,
		pd[index].height
	);
	// e.$limberGridViewItems[index].innerHTML = "";
	renderItemContent(context, renderData, e.$limberGridViewItems[index]);

	if (callbacks.renderComplete) {
		callbacks.renderComplete(index);
	}
};

export const addItem = async function (context, item) {
	const options = getOptions(context);
	const e = getElements(context);
	const callbacks = getCallbacks(context);
	const privateConstants = getPrivateConstants(context);
	const publicConstants = getPublicConstants(context);

	unInitializeEvents.call(context);

	try {
		let allow = false;
		if (item.x && item.y && item.width && item.height) {
			allow = addItemAllowCheck(
				context,
				item.x,
				item.y,
				item.width,
				item.height
			);
			if (allow) {
				const pd = getPositionData(context);
				setModifiedPositionData(context, pd);
				const mpd = getModifiedPositionData(context);
				mpd.push(item);
				setPositionData(context, mpd);
			}
		} else if (item.width && item.height && !item.x && !item.y) {
			const pd = getPositionData(context);
			setModifiedPositionData(context, pd);
			const mpd = getModifiedPositionData(context);

			const bottomY = getPdBottomMax(context);
			mpd.push({
				x: undefined,
				y: undefined,
				width: item.width,
				height: item.height,
			});
			const arranged = await arrangeFromHeight(
				context,
				[mpd.length - 1],
				bottomY
			);
			setPositionData(context, mpd);
		} else {
			return false;
		}

		const pd = getPositionData(context);
		const len = pd.length;
		const index = len - 1;
		let renderData;

		const itemEl = document.createElement("div");
		if (!isMobile(context)) {
			let classList = "limber-grid-view-item";
			if (options.editable === true) {
				classList = "limber-grid-view-item limber-grid-view-item-editable";
			}

			itemEl.setAttribute("class", classList);
			itemEl.setAttribute("data-index", index);
			itemEl.style.transform = `translate(${pd[index].x}px, ${pd[index].y}px)`;
			itemEl.style.width = `${pd[index].width}px`;
			itemEl.style.height = `${pd[index].height}px`;

			renderData = callbacks.renderContent(
				index,
				pd[index].width,
				pd[index].height,
				"isAdd"
			);
		} else {
			const classList =
				"limber-grid-view-item limber-grid-view-item-mobile-view";

			itemEl.setAttribute("class", classList);
			itemEl.setAttribute("data-index", index);
			itemEl.style.width = `${privateConstants.WIDTH}px`;
			itemEl.style.height = `${
				privateConstants.WIDTH / publicConstants.MOBILE_ASPECT_RATIO
			}px`;

			renderData = callbacks.renderContent(
				index,
				privateConstants.WIDTH,
				privateConstants.WIDTH / publicConstants.MOBILE_ASPECT_RATIO,
				"isAdd"
			);
		}

		e.$limberGridView.appendChild(itemEl);

		renderItemContent(context, renderData, itemEl);

		set$limberGridViewItems(context, [
			...e.$limberGridView.getElementsByClassName("limber-grid-view-item"),
		]);

		if (callbacks.addComplete) {
			callbacks.addComplete(index);
		}
	} catch (error) {
		console.error(error);
	}

	initializeEvents.call(context);
};

export const removeItem = function (context, index) {
	const e = getElements(context);
	const callbacks = getCallbacks(context);
	const pd = getPositionData(context);

	unInitializeEvents.call(context);

	pd.splice(index, 1);

	if (callbacks.removePlugin) {
		callbacks.removePlugin(e.$limberGridViewItems[index]);
	}

	e.$limberGridView.removeChild(e.$limberGridViewItems[index]);
	set$limberGridViewItems(context, [
		...e.$limberGridView.getElementsByClassName("limber-grid-view-item"),
	]);

	const len = pd.length;
	for (let i = 0; i < len; i++) {
		e.$limberGridViewItems[i].setAttribute("data-index", i);
	}

	if (callbacks.removeComplete) {
		callbacks.removeComplete(index, e.$limberGridViewItems[index]);
	}

	// initializeVariables();
	initializeEvents.call(context);
};

export const getSerializedPositionData = (pd) => {
	const len = pd.length;
	const arr = new Array(len);
	for (let i = 0; i < len; i++) {
		arr[i] = { ...pd[i] };
		arr[i].index = i;
	}

	return arr.sort((a, b) => {
		if (a.y === b.y) {
			return a.x - b.x;
		}
		return a.y - b.y;
	});
};

export const renderItemContent = (context, renderData, itemEl) => {
	const callbacks = getCallbacks(context);
	if (typeof renderData === "string") {
		itemEl.innerHTML = renderData;
	} else if (renderData instanceof Element) {
		itemEl.innerHTML = "";
		itemEl.appendChild(renderData);
	} else if (callbacks.renderPlugin) {
		callbacks.renderPlugin(renderData, itemEl);
	}
};

// export const renderPseudoElements = function (_positionData) {
// 	if (e.$limberGridViewGridPseudoItems != undefined) {
// 		var length_0 = _positionData.length;
// 		for (var i = 0; i < length_0; i++) {
// 			e.$limberGridViewGridPseudoItems[0].parentNode.removeChild(
// 				e.$limberGridViewGridPseudoItems[0]
// 			);
// 		}
// 		e.$limberGridViewGridPseudoItems = undefined;
// 		set$limberGridViewBodyPseudoItems(undefined);
// 	}

// 	var gridHtml = [];
// 	var bodyHtml = [];

// 	if (!isMobile()) {
// 		var length_0 = _positionData.length;
// 		for (var i = 0; i < length_0; i++) {
// 			var gridFront =
// 				'<div class = "limberGridViewGridPseudoItem" data-index = "' + i + '" ';
// 			var bodyFront =
// 				'<div class = "limberGridViewBodyPseudoItem" data-index = "' + i + '" ';
// 			var style_1 =
// 				'style = "transform : translate(' + _positionData[i].x + "px, ";
// 			var style_2 = _positionData[i].y + "px); ";
// 			var style_3 = "width : " + _positionData[i].width + "px; ";
// 			var style_4 = "height : " + _positionData[i].height + "px; ";
// 			var style_5 = '">';

// 			var style = style_1 + style_2 + style_3 + style_4 + style_5;

// 			var end = "</div>";

// 			var gridItem = gridFront + style + end;
// 			var bodyItem = bodyFront + style + end;

// 			gridHtml.push(gridItem);
// 			bodyHtml.push(bodyItem);
// 		}
// 	} else {
// 		var length_0 = _positionData.length;
// 		for (var i = 0; i < length_0; i++) {
// 			var gridFront =
// 				'<div class = "limberGridViewGridPseudoItem" data-index = "' + i + '" ';
// 			var bodyFront =
// 				'<div class = "limberGridViewBodyPseudoItem" data-index = "' + i + '" ';
// 			var style_1 = 'style = "transform : translate(' + 0 + "px, ";
// 			var style_2 =
// 				(privateConstants.WIDTH / publicConstants.MOBILE_ASPECT_RATIO +
// 					getMarginAtPoint(serializedPositionData.map[i])) *
// 					serializedPositionData.map[i] +
// 				"px); ";
// 			var style_3 = "width : " + privateConstants.WIDTH + "px; ";
// 			var style_4 =
// 				"height : " +
// 				privateConstants.WIDTH / publicConstants.MOBILE_ASPECT_RATIO +
// 				"px; ";
// 			var style_5 = "margin : " + publicConstants.MARGIN + 'px;">';

// 			var style = style_1 + style_2 + style_3 + style_4 + style_5;

// 			var end = "</div>";

// 			var gridItem = gridFront + style + end;
// 			var bodyItem = bodyFront + style + end;

// 			gridHtml.push(gridItem);
// 			bodyHtml.push(bodyItem);
// 		}
// 	}
// 	var limberGridViewMoveGuide = '<div class = "limberGridViewMoveGuide"></div>';
// 	var limberGridViewHeightAdjustGuide =
// 		'<div class = "limberGridViewHeightAdjustGuide"></div>';
// 	var limberGridViewAddItemGuide =
// 		'<div class = "limberGridViewAddItemGuide"></div>';
// 	var limberGridViewAddItemOnTouchHoldGuide =
// 		'<div class = "limberGridViewAddItemOnTouchHoldGuide"></div>';
// 	gridHtml.push(limberGridViewMoveGuide);
// 	gridHtml.push(limberGridViewHeightAdjustGuide);
// 	gridHtml.push(limberGridViewAddItemGuide);
// 	gridHtml.push(limberGridViewAddItemOnTouchHoldGuide);

// 	e.$bodyPseudoEl.innerHTML = bodyHtml.join("");
// 	e.$limberGridView[0].insertAdjacentHTML("beforeend", gridHtml.join(""));
// 	set$limberGridViewGridPseudoItems(
// 		e.$limberGridView[0].getElementsByClassName("limberGridViewGridPseudoItem")
// 	);
// 	set$limberGridViewBodyPseudoItems(
// 		e.$bodyPseudoEl.getElementsByClassName("limberGridViewBodyPseudoItem")
// 	);
// 	set$limberGridViewMoveGuide(
// 		e.$limberGridView[0].getElementsByClassName("limberGridViewMoveGuide")
// 	);
// 	set$limberGridViewHeightAdjustGuide(
// 		e.$limberGridView[0].getElementsByClassName(
// 			"limberGridViewHeightAdjustGuide"
// 		)
// 	);
// 	set$limberGridViewAddItemGuide(
// 		e.$limberGridView[0].getElementsByClassName("limberGridViewAddItemGuide")
// 	);
// 	set$limberGridViewAddItemOnTouchHoldGuide(
// 		e.$limberGridView[0].getElementsByClassName(
// 			"limberGridViewAddItemOnTouchHoldGuide"
// 		)
// 	);
// };

// export const renderItems = function (
// 	items,
// 	scale = true,
// 	processType = "onDemand"
// ) {
// 	unInitializeEvents();
// 	var scrollTop = e.$limberGridView[0].scrollTop;
// 	if (scale == true) {
// 		var WIDTH_SCALE_FACTOR = privateConstants.WIDTH_SCALE_FACTOR;
// 	} else {
// 		var WIDTH_SCALE_FACTOR = 1;
// 	}

// 	var classList = ["limberGridViewItem"];
// 	if (options.editable == true) {
// 		classList.push("limberGridViewItemEditable");
// 	}

// 	var html = [];

// 	// dev Code
// 	var t0 = performance.now();
// 	// dev Code END
// 	if (!isMobile()) {
// 		e.$limberGridViewContainer[0].removeChild(e.$limberGridView[0]);
// 		var length_0 = items.length;
// 		for (var i = 0; i < length_0; i++) {
// 			positionData[items[i]].width *= WIDTH_SCALE_FACTOR;
// 			if (positionData[items[i]].width > privateConstants.WIDTH) {
// 				positionData[items[i]].width = privateConstants.WIDTH;
// 			}
// 			var div = document.createElement("div");
// 			var attribute = document.createAttribute("data-index");
// 			attribute.value = items[i];
// 			div.setAttributeNode(attribute);

// 			if (classList.length > 0) {
// 				div.classList.add(classList[0]);
// 				div.classList.add(classList[1]);
// 			} else {
// 				div.classList.add(classList[0]);
// 			}

// 			div.style.transform =
// 				"translate(" +
// 				(positionData[items[i]].x *= WIDTH_SCALE_FACTOR) +
// 				"px, " +
// 				(positionData[items[i]].y *= WIDTH_SCALE_FACTOR) +
// 				"px)";
// 			div.style.width = positionData[items[i]].width + "px";
// 			div.style.height =
// 				(positionData[items[i]].height *= WIDTH_SCALE_FACTOR) + "px";

// 			var userData = callbacks.getItemRenderDataCallback(
// 				items[i],
// 				positionData[items[i]].width,
// 				positionData[items[i]].height,
// 				processType
// 			);
// 			if (typeof userData == "string") {
// 				div.innerHTML = userData;
// 			} else {
// 				div.appendChild(userData);
// 			}

// 			if (
// 				e.$limberGridViewItems[items[i]] == undefined ||
// 				e.$limberGridViewItems[items[i]] == null
// 			) {
// 				e.$limberGridView[0].appendChild(div);
// 			} else {
// 				e.$limberGridView[0].replaceChild(
// 					div,
// 					e.$limberGridViewItems[items[i]]
// 				);
// 			}
// 		}
// 		e.$limberGridViewContainer[0].appendChild(e.$limberGridView[0]);
// 	} else {
// 		e.$limberGridViewContainer[0].removeChild(e.$limberGridView[0]);
// 		var length_0 = items.length;
// 		for (var i = 0; i < length_0; i++) {
// 			var div = document.createElement("div");
// 			var attribute = document.createAttribute("data-index");
// 			attribute.value = items[i];
// 			div.setAttributeNode(attribute);

// 			div.classList.add("limberGridViewItem");
// 			div.style.transform =
// 				"translate(" +
// 				0 +
// 				"px, " +
// 				(privateConstants.WIDTH / publicConstants.MOBILE_ASPECT_RATIO +
// 					getMarginAtPoint(serializedPositionData.map[items[i]])) *
// 					serializedPositionData.map[items[i]] +
// 				"px)";
// 			div.style.width = privateConstants.WIDTH + "px";
// 			div.style.height =
// 				privateConstants.WIDTH / publicConstants.MOBILE_ASPECT_RATIO + "px";

// 			var userData = callbacks.getItemRenderDataCallback(
// 				items[i],
// 				privateConstants.WIDTH,
// 				privateConstants.WIDTH / publicConstants.MOBILE_ASPECT_RATIO,
// 				processType
// 			);
// 			if (typeof userData == "string") {
// 				div.innerHTML = userData;
// 			} else {
// 				div.appendChild(userData);
// 			}

// 			if (
// 				e.$limberGridViewItems[items[i]] == undefined ||
// 				e.$limberGridViewItems[items[i]] == null
// 			) {
// 				e.$limberGridView[0].appendChild(div);
// 			} else {
// 				e.$limberGridView[0].replaceChild(
// 					div,
// 					e.$limberGridViewItems[items[i]]
// 				);
// 			}
// 		}
// 		e.$limberGridViewContainer[0].appendChild(e.$limberGridView[0]);
// 	}

// 	// dev Code
// 	var t1 = performance.now();
// 	console.log(t0);
// 	console.log(t1);
// 	console.log(t1 - t0);
// 	// dev Code END
// 	e.$limberGridViewItems = e.$limberGridView[0].querySelectorAll(
// 		".limberGridViewItem"
// 	);

// 	renderPseudoItems(items);

// 	initializeVariables();
// 	initializeEvents();

// 	var renderDetails = {
// 		items: JSON.parse(JSON.stringify(items)),
// 		scale: scale,
// 		processType: processType,
// 	};

// 	if (
// 		callbacks.itemsRenderComplete != undefined &&
// 		callbacks.itemsRenderComplete != null &&
// 		processType != "addItems" &&
// 		processType != "resizeItems" &&
// 		processType != "removeItems" &&
// 		processType != "addItemInteractive"
// 	) {
// 		e.$limberGridView[0].scrollTop = scrollTop;
// 		callbacks.itemsRenderComplete(
// 			renderDetails.items,
// 			scale,
// 			processType,
// 			scrollTop
// 		);
// 	}

// 	return renderDetails;
// };

// export const renderPseudoItems = function (items) {
// 	var gridHtml = [];
// 	var bodyHtml = [];

// 	if (!isMobile()) {
// 		e.$limberGridViewContainer[0].removeChild(e.$limberGridView[0]);
// 		e.$body[0].removeChild(e.$bodyPseudoEl);
// 		var length_0 = items.length;
// 		for (var i = 0; i < length_0; i++) {
// 			var divGrid = document.createElement("div");
// 			var attributeGrid = document.createAttribute("data-index");
// 			attributeGrid.value = items[i];
// 			divGrid.setAttributeNode(attributeGrid);
// 			divGrid.classList.add("limberGridViewGridPseudoItem");
// 			divGrid.style.transform =
// 				"translate(" +
// 				positionData[items[i]].x +
// 				"px, " +
// 				positionData[items[i]].y +
// 				"px)";
// 			divGrid.style.width = positionData[items[i]].width + "px";
// 			divGrid.style.height = positionData[items[i]].height + "px";

// 			var divBody = document.createElement("div");
// 			var attributeBody = document.createAttribute("data-index");
// 			attributeBody.value = items[i];
// 			divBody.setAttributeNode(attributeBody);
// 			divBody.classList.add("limberGridViewBodyPseudoItem");
// 			divBody.style.transform = "translate(" + 0 + "px, " + 0 + "px)";
// 			divBody.style.width = positionData[items[i]].width + "px";
// 			divBody.style.height = positionData[items[i]].height + "px";

// 			if (
// 				e.$limberGridViewGridPseudoItems[items[i]] == undefined ||
// 				e.$limberGridViewGridPseudoItems[items[i]] == null
// 			) {
// 				e.$limberGridView[0].appendChild(divGrid);
// 				e.$bodyPseudoEl.appendChild(divBody);
// 			} else {
// 				e.$limberGridView[0].replaceChild(
// 					divGrid,
// 					e.$limberGridViewGridPseudoItems[items[i]]
// 				);
// 				e.$bodyPseudoEl.replaceChild(
// 					divBody,
// 					e.$limberGridViewBodyPseudoItems[items[i]]
// 				);
// 			}
// 		}
// 		e.$limberGridViewContainer[0].appendChild(e.$limberGridView[0]);
// 		e.$body[0].appendChild(e.$bodyPseudoEl);
// 	} else {
// 		e.$limberGridViewContainer[0].removeChild(e.$limberGridView[0]);
// 		e.$body[0].removeChild(e.$bodyPseudoEl);
// 		var length_0 = items.length;
// 		for (var i = 0; i < length_0; i++) {
// 			var divGrid = document.createElement("div");
// 			var attributeGrid = document.createAttribute("data-index");
// 			attributeGrid.value = items[i];
// 			divGrid.setAttributeNode(attributeGrid);
// 			divGrid.classList.add("limberGridViewGridPseudoItem");
// 			divGrid.style.transform =
// 				"translate(" +
// 				0 +
// 				"px, " +
// 				(privateConstants.WIDTH / publicConstants.MOBILE_ASPECT_RATIO +
// 					getMarginAtPoint(serializedPositionData.map[i])) *
// 					serializedPositionData.map[i] +
// 				"px)";
// 			divGrid.style.width = privateConstants.WIDTH + "px";
// 			divGrid.style.height =
// 				privateConstants.WIDTH / publicConstants.MOBILE_ASPECT_RATIO + "px";

// 			var divBody = document.createElement("div");
// 			var attributeBody = document.createAttribute("data-index");
// 			attributeBody.value = items[i];
// 			divBody.setAttributeNode(attributeBody);
// 			divBody.classList.add("limberGridViewBodyPseudoItem");
// 			divBody.style.transform = "translate(" + 0 + "px, " + 0 + "px)";
// 			divBody.style.width = privateConstants.WIDTH + "px";
// 			divBody.style.height =
// 				privateConstants.WIDTH / publicConstants.MOBILE_ASPECT_RATIO + "px";

// 			if (
// 				e.$limberGridViewGridPseudoItems[items[i]] == undefined ||
// 				e.$limberGridViewGridPseudoItems[items[i]] == null
// 			) {
// 				e.$limberGridView[0].appendChild(divGrid);
// 				e.$bodyPseudoEl.appendChild(divBody);
// 			} else {
// 				e.$limberGridView[0].replaceChild(
// 					divGrid,
// 					e.$limberGridViewGridPseudoItems[items[i]]
// 				);
// 				e.$bodyPseudoEl.replaceChild(
// 					divBody,
// 					e.$limberGridViewBodyPseudoItems[items[i]]
// 				);
// 			}
// 		}
// 		e.$limberGridViewContainer[0].appendChild(e.$limberGridView[0]);
// 		e.$body[0].appendChild(e.$bodyPseudoEl);
// 	}

// 	set$limberGridViewGridPseudoItems(
// 		e.$limberGridView[0].getElementsByClassName("limberGridViewGridPseudoItem")
// 	);
// 	e.$limberGridViewBodyPseudoItems = e.$bodyPseudoEl.getElementsByClassName(
// 		"limberGridViewBodyPseudoItem"
// 	);
// };
