/*

LimberGridView, a powerful JavaScript Libary that gives you movable, resizable(any size) and auto-arranging grids.

Copyright © 2018-2020 Subendra Kumar Sharma. All Rights reserved. (jobs.sharma.subendra.kr@gmail.com)

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

			nodes[i] = itemEl;
		}
	}

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

export const addItem = async function (context, item) {
	const options = getOptions(context);
	const e = getElements(context);
	const callbacks = getCallbacks(context);
	const privateConstants = getPrivateConstants(context);
	const publicConstants = getPublicConstants(context);

	unInitializeEvents.call(context);

	try {
		if (item.x && item.y && item.width && item.height) {
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
	const privateConstants = getPrivateConstants(context);
	const publicConstants = getPublicConstants(context);

	unInitializeEvents.call(context);

	pd.splice(index, 1);

	if (callbacks.removePlugin) {
		callbacks.removePlugin(e.$limberGridViewItems[index]);
	}

	e.$limberGridView.removeChild(e.$limberGridViewItems[index]);

	if (callbacks.removeComplete) {
		callbacks.removeComplete(index, e.$limberGridViewItems[index]);
	}

	set$limberGridViewItems(context, [
		...e.$limberGridView.getElementsByClassName("limber-grid-view-item"),
	]);

	const len = pd.length;
	for (let i = index; i < len; i++) {
		e.$limberGridViewItems[i].setAttribute("data-index", i);
	}

	for (let i = index; i < len; i++) {
		let renderData;
		if (!isMobile(context)) {
			renderData = callbacks.renderContent(i, pd[i].width, pd[i].height);
		} else {
			renderData = callbacks.renderContent(
				i,
				privateConstants.WIDTH,
				privateConstants.WIDTH / publicConstants.MOBILE_ASPECT_RATIO
			);
		}
		renderItemContent(context, renderData, e.$limberGridViewItems[i]);
	}

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
