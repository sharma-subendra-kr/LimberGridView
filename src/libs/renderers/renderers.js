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

import getOptions from "../../store/variables/options";
import getElements, {
	set$limberGridViewItems,
	get$limberGridViewIOBottomHelper,
} from "../../store/variables/elements";
import {
	getPositionData,
	setPositionData,
	getModifiedPositionData,
	setModifiedPositionData,
	getCallbacks,
	getRenderedItems,
	getSerializedPositionData,
	setSerializedPositionData,
} from "../../store/variables/essentials";
import { isMobile } from "../utils/utils";
import { sanitizeDimension, makeItem } from "../utils/items";

import getPrivateConstants from "../../store/constants/privateConstants";
import getPublicConstants from "../../store/constants/publicConstants";
import {
	initializeEvents,
	unInitializeEvents,
} from "../eventHandlerLib/initializers";
import { addItemAllowCheck } from "../arrange/arrangeUtils";
import { arrangeFromHeight } from "../arrange/arrange";
import { getPdBottomMax } from "./rendererUtils";
import getUndoRedo from "../../store/variables/undoRedo";

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

	for (let i = 0; i < len; i++) {
		pd[i].x1 *= WIDTH_SCALE_FACTOR;
		pd[i].x2 *= WIDTH_SCALE_FACTOR;
		pd[i].y1 *= WIDTH_SCALE_FACTOR;
		pd[i].y2 *= WIDTH_SCALE_FACTOR;

		pd[i].x = pd[i].x1;
		pd[i].y = pd[i].y1;
		pd[i].width *= WIDTH_SCALE_FACTOR;
		pd[i].height *= WIDTH_SCALE_FACTOR;

		sanitizeDimension(pd[i]);

		pd[i].mX1 = pd[i].x1 - privateConstants.MARGIN;
		pd[i].mX2 = pd[i].x2 + privateConstants.MARGIN;
		pd[i].mY1 = pd[i].y1 - privateConstants.MARGIN;
		pd[i].mY2 = pd[i].y2 + privateConstants.MARGIN;

		pd[i].mX = pd[i].x - privateConstants.MARGIN;
		pd[i].mY = pd[i].y - privateConstants.MARGIN;
		pd[i].mWidth = pd[i].width + privateConstants.MARGIN * 2;
		pd[i].mHeight = pd[i].height + privateConstants.MARGIN * 2;
	}
	getUndoRedo(context).setCurrent({ pd, margin: privateConstants.MARGIN });

	const renderedItems = getRenderedItems(context);
	const renderedItemsLen = renderedItems.length;
	const nodes = new Array(renderedItemsLen);
	const allNodes = new Array(len);
	let spd;

	if (!isMobile(context)) {
		let classList = "limber-grid-view-item";
		if (options.editable === true) {
			classList = `limber-grid-view-item limber-grid-view-item-editable ${
				publicConstants.SHOW_BOTTOM_LEFT_RESIZE_GUIDE
					? "limber-grid-view-item-editable-left-resize"
					: ""
			}`;
		}

		for (let i = 0; i < renderedItemsLen; i++) {
			const index = renderedItems[i];
			const itemEl = document.createElement("div");
			itemEl.setAttribute("class", classList);
			itemEl.setAttribute("data-index", index);
			itemEl.style.transform = `translate(${pd[index].x}px, ${pd[index].y}px)`;
			itemEl.style.width = `${pd[index].width}px`;
			itemEl.style.height = `${pd[index].height}px`;

			nodes[i] = itemEl;
			allNodes[index] = itemEl;
		}
	} else {
		const classList = "limber-grid-view-item limber-grid-view-item-mobile-view";
		spd = getSerializedPositionData(context);

		for (let i = 0; i < renderedItemsLen; i++) {
			const index = renderedItems[i];
			spd[index].width = privateConstants.WIDTH;
			spd[index].height =
				privateConstants.WIDTH / publicConstants.MOBILE_ASPECT_RATIO;

			const itemEl = document.createElement("div");
			itemEl.setAttribute("class", classList);
			itemEl.setAttribute("data-index", spd[index].index);
			itemEl.style.width = `${spd[index].width}px`;
			itemEl.style.height = `${spd[index].height}px`;

			nodes[i] = itemEl;
			allNodes[index] = itemEl;
		}

		get$limberGridViewIOBottomHelper(
			context
		).style.transform = `translate(0px, ${
			(privateConstants.WIDTH / publicConstants.MOBILE_ASPECT_RATIO) * 15 +
			privateConstants.MARGIN * 14 -
			50
		}px)`;
	}

	const itemsLen = e.$limberGridViewItems.length;
	for (let i = 0; i < itemsLen; i++) {
		if (e.$limberGridViewItems[i]) {
			e.$limberGridView.removeChild(e.$limberGridViewItems[i]);
			e.$limberGridViewItems[i] = undefined;
		}
	}

	for (let i = 0; i < renderedItemsLen; i++) {
		e.$limberGridView.appendChild(nodes[i]);
	}

	for (let i = 0; i < renderedItemsLen; i++) {
		const index = renderedItems[i];
		const itemEl = nodes[i];
		if (!isMobile(context)) {
			const renderData = callbacks.renderContent(
				index,
				pd[index].width,
				pd[index].height
			);
			renderItemContent(context, renderData, itemEl);
		} else {
			const renderData = callbacks.renderContent(
				spd[index].index,
				spd[index].width,
				spd[index].height
			);
			renderItemContent(context, renderData, itemEl);
		}
	}

	set$limberGridViewItems(context, allNodes);

	initializeEvents.call(context);

	if (callbacks.renderComplete) {
		callbacks.renderComplete();
	}
};

export const renderItem = function (context, index) {
	const e = getElements(context);
	const callbacks = getCallbacks(context);
	const pd = getPositionData(context);
	const privateConstants = getPrivateConstants(context);
	const publicConstants = getPublicConstants(context);

	let renderData;
	if (!isMobile(context)) {
		renderData = callbacks.renderContent(
			index,
			pd[index].width,
			pd[index].height
		);
	} else {
		renderData = callbacks.renderContent(
			index,
			privateConstants.WIDTH,
			privateConstants.WIDTH / publicConstants.MOBILE_ASPECT_RATIO
		);
	}

	renderItemContent(context, renderData, e.$limberGridViewItems[index]);

	if (callbacks.renderComplete) {
		callbacks.renderComplete(index);
	}
};

export const unmountItems = function (context, items) {
	unInitializeEvents.call(context);

	const callbacks = getCallbacks(context);
	const e = getElements(context);

	for (const index in items) {
		const elem = e.$limberGridViewItems[index];
		if (callbacks.removePlugin) {
			callbacks.removePlugin(e.$limberGridViewItems[index]);
		}
		if (elem) {
			elem.remove();
		}
		e.$limberGridViewItems[index] = undefined;
	}
};

export const mountItems = function (context, items, prepend = false) {
	const options = getOptions(context);
	const publicConstants = getPublicConstants(context);
	const privateConstants = getPrivateConstants(context);
	const pd = getPositionData(context);
	const callbacks = getCallbacks(context);
	const e = getElements(context);
	const renderedItems = getRenderedItems(context);

	let classList = "limber-grid-view-item";
	if (options.editable === true) {
		classList = `limber-grid-view-item limber-grid-view-item-editable ${
			publicConstants.SHOW_BOTTOM_LEFT_RESIZE_GUIDE
				? "limber-grid-view-item-editable-left-resize"
				: ""
		}`;
	}

	let spd;
	const len = items.length;
	const nodes = new Array(len);

	if (!isMobile(context)) {
		for (let i = 0; i < len; i++) {
			const index = items[i];
			const itemEl = document.createElement("div");
			itemEl.setAttribute("class", classList);
			itemEl.setAttribute("data-index", index);
			itemEl.style.transform = `translate(${pd[index].x}px, ${pd[index].y}px)`;
			itemEl.style.width = `${pd[index].width}px`;
			itemEl.style.height = `${pd[index].height}px`;

			nodes[i] = itemEl;
			e.$limberGridViewItems[index] = itemEl;
		}
	} else {
		const classList = "limber-grid-view-item limber-grid-view-item-mobile-view";
		spd = getSerializedPositionData(context);

		for (let i = 0; i < len; i++) {
			const index = items[i];
			spd[index].width = privateConstants.WIDTH;
			spd[index].height =
				privateConstants.WIDTH / publicConstants.MOBILE_ASPECT_RATIO;

			const itemEl = document.createElement("div");
			itemEl.setAttribute("class", classList);
			itemEl.setAttribute("data-index", spd[index].index);
			itemEl.style.width = `${spd[index].width}px`;
			itemEl.style.height = `${spd[index].height}px`;

			nodes[i] = itemEl;
			e.$limberGridViewItems[index] = itemEl;
		}

		get$limberGridViewIOBottomHelper(
			context
		).style.transform = `translate(0px, ${
			(privateConstants.WIDTH / publicConstants.MOBILE_ASPECT_RATIO) *
				renderedItems.length +
			privateConstants.MARGIN * (renderedItems.length - 1) -
			50
		}px)`;
	}

	for (let i = 0; i < len; i++) {
		const index = items[i];
		const itemEl = nodes[i];
		if (!isMobile(context)) {
			const renderData = callbacks.renderContent(
				index,
				pd[index].width,
				pd[index].height
			);
			renderItemContent(context, renderData, itemEl);
		} else {
			const renderData = callbacks.renderContent(
				spd[index].index,
				spd[index].width,
				spd[index].height
			);
			renderItemContent(context, renderData, itemEl);
		}
	}

	let ib;
	if (items[0] !== undefined) {
		ib = e.$limberGridViewItems[items[0] + 1];
	}
	for (let i = 0; i < len; i++) {
		if (prepend) {
			e.$limberGridView.insertBefore(nodes[i], ib);
			ib = nodes[i];
		} else {
			e.$limberGridView.appendChild(nodes[i]);
		}
	}

	initializeEvents.call(context);
};

export const addItem = async function (context, item) {
	const options = getOptions(context);
	const e = getElements(context);
	const callbacks = getCallbacks(context);
	const privateConstants = getPrivateConstants(context);
	const publicConstants = getPublicConstants(context);

	unInitializeEvents.call(context);

	try {
		if (item.x && item.y && item.width && item.height) {
			makeItem(item);
			Object.assign(item, {
				mX: item.x - privateConstants.MARGIN,
				mY: item.y - privateConstants.MARGIN,
				mWidth: item.width + privateConstants.MARGIN * 2,
				mHeight: item.height + privateConstants.MARGIN * 2,
				mX1: item.x1 - privateConstants.MARGIN,
				mY1: item.y1 - privateConstants.MARGIN,
				mX2: item.x2 + privateConstants.MARGIN,
				mY2: item.y2 + privateConstants.MARGIN,
			});
			let allow = false;
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
				setSerializedPositionData(context, mpd);
				getUndoRedo(context).reset();
				getUndoRedo(context).push({ pd: mpd, margin: privateConstants.MARGIN });
			} else {
				return false;
			}
		} else if (item.width && item.height && !item.x && !item.y) {
			if (item.width > privateConstants.WIDTH) {
				return false;
			}
			const pd = getPositionData(context);
			setModifiedPositionData(context, pd);
			const mpd = getModifiedPositionData(context);

			const bottomY = getPdBottomMax(context);
			mpd.push({
				x: undefined,
				y: undefined,
				width: item.width,
				height: item.height,
				mX: undefined,
				mY: undefined,
				mWidth: item.width + privateConstants.MARGIN * 2,
				mHeight: item.height + privateConstants.MARGIN * 2,
				x1: undefined,
				y1: undefined,
				x2: undefined,
				y2: undefined,
				mX1: undefined,
				mY1: undefined,
				mX2: undefined,
				mY2: undefined,
			});

			await arrangeFromHeight(context, [mpd.length - 1], bottomY);
			sanitizeDimension(mpd[mpd.length - 1]);
			setPositionData(context, mpd);
			setSerializedPositionData(context, mpd);
			getUndoRedo(context).reset();
			getUndoRedo(context).push({ pd: mpd, margin: privateConstants.MARGIN });
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
				classList = `limber-grid-view-item limber-grid-view-item-editable ${
					publicConstants.SHOW_BOTTOM_LEFT_RESIZE_GUIDE
						? "limber-grid-view-item-editable-left-resize"
						: ""
				}`;
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

		if (!isMobile(context)) {
			e.$limberGridView.appendChild(itemEl);
			renderItemContent(context, renderData, itemEl);
			e.$limberGridViewItems.push(itemEl);
			getRenderedItems(context).push(index);
		}

		if (!isMobile(context)) {
			e.$limberGridView.scrollTo({
				left: 0,
				top: pd[index].y1,
				behavior: "smooth",
			});
		}

		if (callbacks.addComplete) {
			callbacks.addComplete(index);
		}
	} catch (error) {
		getCallbacks(this).getLogMessage({ type: "error", message: error });
		console.error(error);
	}

	initializeEvents.call(context);
};

export const removeItem = function (context, index) {
	index = parseInt(index);
	const e = getElements(context);
	const callbacks = getCallbacks(context);
	const pd = getPositionData(context);
	const spd = getSerializedPositionData(context);
	const privateConstants = getPrivateConstants(context);
	const publicConstants = getPublicConstants(context);
	const renderedItems = getRenderedItems(context);

	let idx;
	if (!isMobile(context)) {
		idx = index;
	} else {
		idx = spd.findIndex((o) => o.index === index);
	}
	const rmIdx = renderedItems.findIndex((o) => o === idx);

	if (rmIdx < 0) {
		return;
	}

	unInitializeEvents.call(context);

	const len = pd.length;
	if (!isMobile(context)) {
		// * data-index update logic
		// * this same logic cannot be applied when mobile version is rendered
		for (let i = index + 1; i < len; i++) {
			if (e.$limberGridViewItems[i]) {
				e.$limberGridViewItems[i].setAttribute("data-index", i - 1);
			}
		}
	} else if (isMobile(context)) {
		// * data-index update logic
		// * first create a map to translate pd index to spd index
		const map = {};
		for (let i = 0; i < len; i++) {
			map[spd[i].index] = i;
		}
		for (let i = index + 1; i < len; i++) {
			const mobileIndex = map[i];
			if (e.$limberGridViewItems[mobileIndex]) {
				e.$limberGridViewItems[mobileIndex].setAttribute("data-index", i - 1);
			}
		}
	}

	const riLen = renderedItems.length;
	for (let i = 0; i < riLen; i++) {
		if (renderedItems[i] > idx) {
			renderedItems[i]--;
		}
	}

	if (isMobile(context)) {
		for (let i = 0; i < len; i++) {
			if (spd[i].index > index) {
				spd[i].index--;
			}
		}
	}

	// * splice begin
	const elem = e.$limberGridViewItems[idx];
	e.$limberGridViewItems.splice(idx, 1);
	renderedItems.splice(rmIdx, 1);
	if (isMobile(context)) spd.splice(idx, 1);
	pd.splice(index, 1);
	getUndoRedo(context).reset();
	getUndoRedo(context).push({ pd, margin: privateConstants.MARGIN });
	// * splice end

	// * call callbacks begin
	if (callbacks.removePlugin) {
		callbacks.removePlugin(elem);
	}
	e.$limberGridView.removeChild(elem);
	if (callbacks.removeComplete) {
		callbacks.removeComplete(index, elem);
	}
	// * call callbacks end

	for (let i = 0; i < renderedItems.length; i++) {
		let currIdx = renderedItems[i];
		let width = pd[currIdx].width;
		let height = pd[currIdx].height;
		if (isMobile(context)) {
			width = spd[currIdx].width;
			height = spd[currIdx].height;
			currIdx = spd[currIdx].index;
		}
		if (currIdx < index) {
			continue;
		}
		let renderData;
		if (!isMobile(context)) {
			renderData = callbacks.renderContent(currIdx, width, height);
		} else {
			renderData = callbacks.renderContent(currIdx, width, height);
		}
		renderItemContent(
			context,
			renderData,
			e.$limberGridViewItems[renderedItems[i]]
		);
	}

	if (isMobile(context)) {
		get$limberGridViewIOBottomHelper(
			context
		).style.transform = `translate(0px, ${
			(privateConstants.WIDTH / publicConstants.MOBILE_ASPECT_RATIO) *
				renderedItems.length +
			privateConstants.MARGIN * (renderedItems.length - 1) -
			50
		}px)`;
	}

	initializeEvents.call(context);
};

// export const getSerializedPositionData = (pd) => {
// 	const len = pd.length;
// 	const arr = new Array(len);
// 	for (let i = 0; i < len; i++) {
// 		arr[i] = { ...pd[i] };
// 		arr[i].index = i;
// 	}

// 	return arr.sort((a, b) => {
// 		if (a.y === b.y) {
// 			return a.x - b.x;
// 		}
// 		return a.y - b.y;
// 	});
// };

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
