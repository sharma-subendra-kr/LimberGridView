/*

LimberGridView, a powerful JavaScript Library using Computational Geometry to render movable, dynamically resizable, and auto-arranging grids.

Copyright © 2018-2021 Subendra Kumar Sharma. All rights reserved. (jobs.sharma.subendra.kr@gmail.com)

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

import { getBindedFunctions } from "../../store/variables/bindedFunctions";
import getElements, {
	get$limberGridView,
	get$limberGridViewIOTopHelper,
	get$limberGridViewIOBottomHelper,
} from "../../store/variables/elements";
import {
	getPositionData,
	setRenderedItems,
	getRenderedItems,
	setIOTopHelperPos,
	getIOTopHelperPos,
	setIOBottomHelperPos,
	getIOBottomHelperPos,
	setOnScrolTimeout,
	getOnScrolTimeout,
	getSerializedPositionData,
} from "../../store/variables/essentials";
import { getPrivateConstants } from "../../store/constants/privateConstants";
import { getPublicConstants } from "../../store/constants/publicConstants";
import { getItemsInWorkSpace } from "../utils/items";
import { mountItems, unmountItems } from "../renderers/renderers";
import { doRectsOverlapOrTouch } from "../rect/rectUtils";
import { fixTo, isMobile } from "../utils/utils";

export const instantiateIntersectionObserver = function () {
	this.store.observer.intersectionObserver.intersectionObserver = new IntersectionObserver(
		getBindedFunctions(this).intersectionObserverCallback,
		{
			root: get$limberGridView(this),
			// rootMargin: "0px",
			threshold: 1.0,
		}
	);

	this.store.observer.intersectionObserver.intersectionObserver.observe(
		get$limberGridViewIOTopHelper(this)
	);
	this.store.observer.intersectionObserver.intersectionObserver.observe(
		get$limberGridViewIOBottomHelper(this)
	);
};

export const intersectionObserverCallback = function (entries, observer) {
	if (entries.length !== 1 || !entries[0].isIntersecting) {
		return;
	}
	const entry = entries[0];

	if (isMobile(this)) {
		const renderedItems = getRenderedItems(this);
		const len = getPositionData(this).length;
		const spd = getSerializedPositionData(this);
		let prepend = false;

		let start;
		if (entry.target.classList.contains("limber-grid-view-io-top-helper")) {
			const prevStart = renderedItems[0];
			if (prevStart - 9 > 0) {
				start = prevStart - 9;
			} else {
				start = 0;
			}
			prepend = true;
		} else {
			const prevEnd = renderedItems[renderedItems.length - 1];
			if (prevEnd - 4 > 0) {
				start = prevEnd - 4;
			} else {
				start = 0;
			}
		}
		const end = start + 14 < len ? start + 14 : len - 1;

		if (end < 0) {
			const um = {};
			for (const item of renderedItems) {
				um[item] = true;
			}
			unmountItems(this, um);
			mountItems(this, []);
			setRenderedItems(this, []);
			return;
		}

		const newRenderedItems = [];
		const newRenderedItemsMap = {};
		const renderedItemsMap = {};
		const toUnmountItems = {};
		const toMountItems = [];
		let iter = 0;
		for (let i = start; i <= end; i++) {
			newRenderedItems.push(i);
			newRenderedItemsMap[i] = true;
			spd[i].renderIndex = iter++;
		}

		for (const item of renderedItems) {
			renderedItemsMap[item] = true;
			if (!newRenderedItemsMap[item]) {
				toUnmountItems[item] = true;
			}
		}

		for (const item of newRenderedItems) {
			if (!renderedItemsMap[item]) {
				toMountItems.push(item);
			}
		}

		setRenderedItems(this, newRenderedItems);

		if (prepend) {
			toMountItems.reverse();
		}

		unmountItems(this, toUnmountItems);
		mountItems(this, toMountItems, prepend);

		const e = getElements(this);
		const privateConstants = getPrivateConstants(this);
		const publicConstants = getPublicConstants(this);
		if (prepend && toMountItems.length) {
			e.$limberGridView.scrollTo({
				left: 0,
				top:
					(privateConstants.WIDTH / publicConstants.MOBILE_ASPECT_RATIO) *
					toMountItems.length,
				behavior: "auto",
			});
		}

		return;
	}

	if (entry.target.classList.contains("limber-grid-view-io-top-helper")) {
		setIOBottomHelperPos(this, getIOTopHelperPos(this) + 1.5);
		setIOTopHelperPos(this, getIOTopHelperPos(this) - 1);
	} else {
		setIOTopHelperPos(this, getIOBottomHelperPos(this) - 1.5);
		setIOBottomHelperPos(this, getIOBottomHelperPos(this) + 1);
	}

	adjustItems(this);
};

export const adjustItems = function (context) {
	const privateConstants = getPrivateConstants(context);

	const renderSpace = {
		x1: 0,
		x2: privateConstants.WIDTH,
		y1:
			getIOTopHelperPos(context) * privateConstants.HEIGHT -
			privateConstants.HEIGHT / 2,
		y2:
			getIOBottomHelperPos(context) * privateConstants.HEIGHT +
			privateConstants.HEIGHT / 2,
	};
	const renderedItems = getItemsInWorkSpace(context, renderSpace, true);
	const renderedItemsMap = {};
	for (const item of renderedItems) {
		renderedItemsMap[item] = true;
	}
	const prevRenderedItems = getRenderedItems(context);
	const prevRenderedItemsMap = {};
	for (const item of prevRenderedItems) {
		prevRenderedItemsMap[item] = true;
	}

	const toMountItems = {};
	for (const index of renderedItems) {
		if (!prevRenderedItemsMap[index]) {
			toMountItems[index] = true;
		}
	}
	const toUnmountItems = {};
	for (const index of prevRenderedItems) {
		if (!renderedItemsMap[index]) {
			toUnmountItems[index] = true;
		}
	}

	setRenderedItems(context, renderedItems);
	unmountItems(context, toUnmountItems);
	mountItems(context, Object.keys(toMountItems));

	get$limberGridViewIOTopHelper(context).style.transform = `translate(0px, ${
		getIOTopHelperPos(context) * privateConstants.HEIGHT
	}px)`;
	get$limberGridViewIOBottomHelper(context).style.transform = `translate(0px, ${
		getIOBottomHelperPos(context) * privateConstants.HEIGHT
	}px)`;
};

export const onScroll = function (event) {
	clearTimeout(getOnScrolTimeout(this));
	setOnScrolTimeout(
		this,
		setTimeout(getBindedFunctions(this).onScrollCallback, 1000)
	);
};

export const onScrollCallback = function (event) {
	const privateConstants = getPrivateConstants(this);
	const $limberGridView = get$limberGridView(this);

	if (!isMobile(this)) {
		const y1 = $limberGridView.scrollTop;
		const screen = {
			x1: 0,
			x2: privateConstants.WIDTH,
			y1: y1,
			y2: y1 + privateConstants.HEIGHT,
		};
		const bounds = {
			x1: 0,
			x2: privateConstants.WIDTH,
			y1: getIOTopHelperPos(this) * privateConstants.HEIGHT,
			y2: getIOBottomHelperPos(this) * privateConstants.HEIGHT,
		};

		if (!doRectsOverlapOrTouch(screen, bounds)) {
			const newBounds = { ...screen };
			newBounds.y1 = screen.y1 - privateConstants.HEIGHT * 0.75;
			let top = fixTo(newBounds.y1 / privateConstants.HEIGHT, 1);
			if (top % 1 > 0.66) {
				top = Math.ceil(top);
			} else if (top % 1 < 0.33) {
				top = Math.trunc(top);
			} else {
				top = Math.trunc(top) + 0.5;
			}
			const bottom = top + 2.5;
			setIOTopHelperPos(this, top);
			setIOBottomHelperPos(this, bottom);

			adjustItems(this);
		}
	}
};
