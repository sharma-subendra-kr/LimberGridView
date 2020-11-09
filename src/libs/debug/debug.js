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

import getElements, {
	set$limberGridView,
	set$limberGridViewDebugStackTopRect,
	set$limberGridViewDebugStackTopAdjRect,
	set$limberGridViewDebugMergedRect,
	set$limberGridViewDebugAdjRect,
	set$limberGridViewDebugMergedTempRects,
	set$limberGridViewDebugStackRects,
	set$limberGridViewDebugResultStackRects,
	set$limberGridViewDebugUnmergedRects,
	set$limberGridViewDebugMergedFreeRects,
} from "../../store/variables/elements";
import { DEBUG_MODE } from "../../store/variables/essentials";

export const printUnmergedFreeRects = (context, arr) => {
	if (process.env.NODE_ENV === "development") {
		const e = getElements(context);
		let len = e.$limberGridViewDebugUnmergedRects.length;
		for (let i = 0; i < len; i++) {
			e.$limberGridView.removeChild(e.$limberGridViewDebugUnmergedRects[i]);
		}
		set$limberGridViewDebugUnmergedRects(context, []);

		// USE it to hide items
		// e.$limberGridView.innerHTML = "";

		len = arr.length;
		let html;
		let node;

		for (let i = 0; i < len; i++) {
			node = document.createElement("div");
			node.setAttribute(
				"class",
				"limber-grid-view-debug-rect limber-grid-view-debug-unmerged-rect"
			);
			node.setAttribute(
				"id",
				`limber-grid-view-debug-unmerged-rect-${arr[i].id}`
			);
			node.setAttribute("tabindex", "-1");

			node.setAttribute("title", `${arr[i].id}`);
			node.innerHTML = arr[i].id;
			node.style.transform = `translate(${arr[i].rect.x}px, ${arr[i].rect.y}px)`;
			node.style.width = arr[i].rect.width + "px";
			node.style.height = arr[i].rect.height + "px";
			e.$limberGridView.appendChild(node);
		}

		set$limberGridViewDebugUnmergedRects(
			context,
			e.$limberGridView.querySelectorAll(
				".limber-grid-view-debug-unmerged-rect"
			)
		);
	}
};

export const printMergedFreeRects = (context, arr) => {
	if (process.env.NODE_ENV === "development") {
		const e = getElements(context);
		let len = e.$limberGridViewDebugMergedFreeRects.length;
		for (let i = 0; i < len; i++) {
			e.$limberGridView.removeChild(e.$limberGridViewDebugMergedFreeRects[i]);
		}
		set$limberGridViewDebugMergedFreeRects(context, []);

		// USE it to hide items
		// e.$limberGridView.innerHTML = "";

		len = arr.length;
		let html;
		let node;

		for (let i = 0; i < len; i++) {
			node = document.createElement("div");
			node.setAttribute(
				"class",
				`limber-grid-view-debug-rect limber-grid-view-debug-merged-free-rect`
			);
			node.setAttribute(
				"id",
				`limber-grid-view-debug-merged-free-rect-${arr[i].id}`
			);
			node.setAttribute("tabindex", -1);

			node.setAttribute("title", `${arr[i].id}`);

			node.innerHTML = arr[i].id;
			node.style.transform = `translate(${arr[i].rect.x}px, ${arr[i].rect.y}px)`;
			node.style.width = arr[i].rect.width + "px";
			node.style.height = arr[i].rect.height + "px";
			e.$limberGridView.appendChild(node);
		}

		set$limberGridViewDebugMergedFreeRects(
			context,
			e.$limberGridView.querySelectorAll(
				".limber-grid-view-debug-merged-free-rect"
			)
		);
	}
};

export const printResultStackRects = (context, arr) => {
	if (process.env.NODE_ENV === "development") {
		const e = getElements(context);
		let len = e.$limberGridViewDebugResultStackRects.length;
		for (let i = 0; i < len; i++) {
			e.$limberGridView.removeChild(e.$limberGridViewDebugResultStackRects[i]);
		}
		set$limberGridViewDebugResultStackRects(context, []);

		// USE it to hide items
		// e.$limberGridView.innerHTML = "";

		len = arr.length;
		let html;
		let node;

		for (let i = 0; i < len; i++) {
			node = document.createElement("div");
			node.setAttribute(
				"class",
				`limber-grid-view-debug-rect limber-grid-view-debug-result-stack-rects`
			);
			node.setAttribute(
				"id",
				`limber-grid-view-debug-result-stack-rects-${arr[i].id}`
			);
			node.setAttribute("tabindex", -1);

			node.setAttribute("title", `${arr[i].id}`);

			node.innerHTML = arr[i].id;
			node.style.transform = `translate(${arr[i].rect.x}px, ${arr[i].rect.y}px)`;
			node.style.width = arr[i].rect.width + "px";
			node.style.height = arr[i].rect.height + "px";
			e.$limberGridView.appendChild(node);
		}

		set$limberGridViewDebugResultStackRects(
			context,
			e.$limberGridView.querySelectorAll(
				".limber-grid-view-debug-result-stack-rects"
			)
		);
	}
};

export const printStackRects = (context, arr) => {
	if (process.env.NODE_ENV === "development") {
		const e = getElements(context);
		let len = e.$limberGridViewDebugStackRects.length;
		for (let i = 0; i < len; i++) {
			e.$limberGridView.removeChild(e.$limberGridViewDebugStackRects[i]);
		}
		set$limberGridViewDebugStackRects(context, []);

		// USE it to hide items
		// e.$limberGridView.innerHTML = "";

		len = arr.length;
		let html;
		let node;

		for (let i = 0; i < len; i++) {
			node = document.createElement("div");
			node.setAttribute(
				"class",
				`limber-grid-view-debug-rect limber-grid-view-debug-stack-rects`
			);
			node.setAttribute(
				"id",
				`limber-grid-view-debug-stack-rects-${arr[i].id}`
			);
			node.setAttribute("tabindex", -1);

			node.setAttribute("title", `${arr[i].id}`);

			node.innerHTML = arr[i].id;
			node.style.transform = `translate(${arr[i].rect.x}px, ${arr[i].rect.y}px)`;
			node.style.width = arr[i].rect.width + "px";
			node.style.height = arr[i].rect.height + "px";
			e.$limberGridView.appendChild(node);
		}

		set$limberGridViewDebugStackRects(
			context,
			e.$limberGridView.querySelectorAll(".limber-grid-view-debug-stack-rects")
		);
	}
};

export const printMergedTempRects = (context, obj) => {
	if (process.env.NODE_ENV === "development") {
		const e = getElements(context);
		const node = document.createElement("div");
		node.setAttribute(
			"class",
			`limber-grid-view-debug-rect limber-grid-view-debug-merged-temp-rects`
		);
		node.setAttribute(
			"id",
			`limber-grid-view-debug-merged-temp-rects-${obj.id}`
		);
		node.setAttribute("tabindex", -1);

		node.setAttribute("title", `${obj.id}`);

		node.innerHTML = obj.id;
		node.style.transform = `translate(${obj.rect.x}px, ${obj.rect.y}px)`;
		node.style.width = obj.rect.width + "px";
		node.style.height = obj.rect.height + "px";
		e.$limberGridView.appendChild(node);

		set$limberGridViewDebugMergedTempRects(
			context,
			e.$limberGridView.querySelectorAll(
				".limber-grid-view-debug-merged-temp-rects"
			)
		);
	}
};

export const printStackTopRect = (context, obj) => {
	if (process.env.NODE_ENV === "development") {
		const e = getElements(context);
		if (!obj) {
			if (e.$limberGridViewDebugStackTopRect) {
				e.$limberGridView.removeChild(e.$limberGridViewDebugStackTopRect);
				set$limberGridViewDebugStackTopRect(context, undefined);
			}
			return;
		}

		if (e.$limberGridViewDebugStackTopRect) {
			e.$limberGridView.removeChild(e.$limberGridViewDebugStackTopRect);
		}

		const node = document.createElement("div");
		node.setAttribute(
			"class",
			`limber-grid-view-debug-rect limber-grid-view-debug-stack-top-rect`
		);
		node.setAttribute("id", `limber-grid-view-debug-stack-top-rect`);
		node.setAttribute("tabindex", -1);

		node.setAttribute("title", `${obj.id}`);

		node.innerHTML = obj.id;
		node.style.transform = `translate(${obj.rect.x}px, ${obj.rect.y}px)`;
		node.style.width = obj.rect.width + "px";
		node.style.height = obj.rect.height + "px";
		e.$limberGridView.appendChild(node);

		set$limberGridViewDebugStackTopRect(
			context,
			e.$limberGridView.querySelectorAll(
				".limber-grid-view-debug-stack-top-rect"
			)[0]
		);
		// console.log(e.$limberGridViewDebugStackTopRect);
	}
};

export const printStackTopAdjRect = (context, obj) => {
	if (process.env.NODE_ENV === "development") {
		const e = getElements(context);
		if (!obj) {
			if (e.$limberGridViewDebugStackTopAdjRect) {
				e.$limberGridView.removeChild(e.$limberGridViewDebugStackTopAdjRect);
				set$limberGridViewDebugStackTopAdjRect(context, undefined);
			}
			return;
		}

		if (e.$limberGridViewDebugStackTopAdjRect) {
			e.$limberGridView.removeChild(e.$limberGridViewDebugStackTopAdjRect);
		}

		const node = document.createElement("div");
		node.setAttribute(
			"class",
			`limber-grid-view-debug-rect limber-grid-view-debug-stack-top-adj-rect`
		);
		node.setAttribute("id", `limber-grid-view-debug-stack-top-adj-rect`);
		node.setAttribute("tabindex", -1);

		node.setAttribute("title", `${obj.id}`);

		node.innerHTML = obj.id;
		node.style.transform = `translate(${obj.rect.x}px, ${obj.rect.y}px)`;
		node.style.width = obj.rect.width + "px";
		node.style.height = obj.rect.height + "px";
		e.$limberGridView.appendChild(node);

		set$limberGridViewDebugStackTopAdjRect(
			context,
			e.$limberGridView.querySelectorAll(
				".limber-grid-view-debug-stack-top-adj-rect"
			)[0]
		);
		// console.log(e.$limberGridViewDebugStackTopAdjRect);
	}
};

export const printMergedRect = (context, obj) => {
	if (process.env.NODE_ENV === "development") {
		const e = getElements(context);
		if (!obj) {
			if (e.$limberGridViewDebugMergedRect) {
				e.$limberGridView.removeChild(e.$limberGridViewDebugMergedRect);
				set$limberGridViewDebugMergedRect(context, undefined);
			}
			return;
		}

		if (e.$limberGridViewDebugMergedRect) {
			e.$limberGridView.removeChild(e.$limberGridViewDebugMergedRect);
		}

		const node = document.createElement("div");
		node.setAttribute(
			"class",
			`limber-grid-view-debug-rect limber-grid-view-debug-merged-rect limber-grid-view-debug-merged-rect-thick`
		);
		node.setAttribute("id", `limber-grid-view-debug-merged-rect`);
		node.setAttribute("tabindex", -1);

		node.setAttribute("title", `${obj.id}`);

		node.innerHTML = obj.id;
		node.style.transform = `translate(${obj.rect.x}px, ${obj.rect.y}px)`;
		node.style.width = obj.rect.width + "px";
		node.style.height = obj.rect.height + "px";
		e.$limberGridView.appendChild(node);

		set$limberGridViewDebugMergedRect(
			context,
			e.$limberGridView.querySelectorAll(
				".limber-grid-view-debug-merged-rect"
			)[0]
		);
		// console.log(e.$limberGridViewDebugMergedRect);
	}
};

export const printAdjRect = (context, obj) => {
	if (process.env.NODE_ENV === "development") {
		const e = getElements(context);
		if (!obj) {
			if (e.$limberGridViewDebugAdjRect) {
				e.$limberGridView.removeChild(e.$limberGridViewDebugAdjRect);
				set$limberGridViewDebugAdjRect(context, undefined);
			}
			return;
		}

		if (e.$limberGridViewDebugAdjRect) {
			e.$limberGridView.removeChild(e.$limberGridViewDebugAdjRect);
		}

		const node = document.createElement("div");
		node.setAttribute(
			"class",
			`limber-grid-view-debug-rect limber-grid-view-debug-adj-rect`
		);
		node.setAttribute("id", `limber-grid-view-debug-adj-rect`);
		node.setAttribute("tabindex", -1);

		node.setAttribute("title", `${obj.id}`);

		node.innerHTML = obj.id;
		node.style.transform = `translate(${obj.rect.x}px, ${obj.rect.y}px)`;
		node.style.width = obj.rect.width + "px";
		node.style.height = obj.rect.height + "px";
		e.$limberGridView.appendChild(node);

		set$limberGridViewDebugAdjRect(
			context,
			e.$limberGridView.querySelectorAll(".limber-grid-view-debug-adj-rect")[0]
		);
		// console.log(e.$limberGridViewDebugAdjRect);
	}
};
