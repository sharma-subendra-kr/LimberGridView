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

import e, {
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
} from "../../variables/elements";
import { DEBUG_MODE } from "../../variables/essentials";

export const sleep = (ms) => {
	return new Promise((resolve, reject) => {
		setTimeout(resolve, ms);
	});
};

export const printUnmergedFreeRects = (arr) => {
	if (process.env.NODE_ENV === "development") {
		let len = e.$limberGridViewDebugUnmergedRects.length;
		for (let i = 0; i < len; i++) {
			e.$limberGridView[0].removeChild(e.$limberGridViewDebugUnmergedRects[i]);
		}
		set$limberGridViewDebugUnmergedRects([]);

		// USE it to hide items
		// e.$limberGridView[0].innerHTML = "";

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

			node.setAttribute(
				"title",
				`${arr[i].id}: ${Object.keys(arr[i]?.a || []).map(
					(o) => arr[i].a[o].d.id
				)}`
			);
			node.innerHTML = arr[i].id;
			node.style.transform = `translate(${arr[i].rect.x}px, ${arr[i].rect.y}px)`;
			node.style.width = arr[i].rect.width + "px";
			node.style.height = arr[i].rect.height + "px";
			e.$limberGridView[0].appendChild(node);
		}

		set$limberGridViewDebugUnmergedRects(
			e.$limberGridView[0].querySelectorAll(
				".limber-grid-view-debug-unmerged-rect"
			)
		);
	}
};

export const printMergedFreeRects = (arr) => {
	if (process.env.NODE_ENV === "development") {
		let len = e.$limberGridViewDebugMergedFreeRects.length;
		for (let i = 0; i < len; i++) {
			e.$limberGridView[0].removeChild(
				e.$limberGridViewDebugMergedFreeRects[i]
			);
		}
		set$limberGridViewDebugMergedFreeRects([]);

		// USE it to hide items
		// e.$limberGridView[0].innerHTML = "";

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

			node.setAttribute(
				"title",
				`${arr[i].id}: ${Object.keys(arr[i].o).map(
					(o) => arr[i].o[o]?.d?.id || ""
				)}`
			);

			node.innerHTML = arr[i].id;
			node.style.transform = `translate(${arr[i].rect.x}px, ${arr[i].rect.y}px)`;
			node.style.width = arr[i].rect.width + "px";
			node.style.height = arr[i].rect.height + "px";
			e.$limberGridView[0].appendChild(node);
		}

		set$limberGridViewDebugMergedFreeRects(
			e.$limberGridView[0].querySelectorAll(
				".limber-grid-view-debug-merged-free-rect"
			)
		);
	}
};

export const printResultStackRects = (arr) => {
	if (process.env.NODE_ENV === "development") {
		let len = e.$limberGridViewDebugResultStackRects.length;
		for (let i = 0; i < len; i++) {
			e.$limberGridView[0].removeChild(
				e.$limberGridViewDebugResultStackRects[i]
			);
		}
		set$limberGridViewDebugResultStackRects([]);

		// USE it to hide items
		// e.$limberGridView[0].innerHTML = "";

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

			node.setAttribute(
				"title",
				`${arr[i].id}: ${Object.keys(arr[i].o).map(
					(o) => arr[i].o[o]?.d?.id || ""
				)}`
			);

			node.innerHTML = arr[i].id;
			node.style.transform = `translate(${arr[i].rect.x}px, ${arr[i].rect.y}px)`;
			node.style.width = arr[i].rect.width + "px";
			node.style.height = arr[i].rect.height + "px";
			e.$limberGridView[0].appendChild(node);
		}

		set$limberGridViewDebugResultStackRects(
			e.$limberGridView[0].querySelectorAll(
				".limber-grid-view-debug-result-stack-rects"
			)
		);
	}
};

export const printStackRects = (arr) => {
	if (process.env.NODE_ENV === "development") {
		let len = e.$limberGridViewDebugStackRects.length;
		for (let i = 0; i < len; i++) {
			e.$limberGridView[0].removeChild(e.$limberGridViewDebugStackRects[i]);
		}
		set$limberGridViewDebugStackRects([]);

		// USE it to hide items
		// e.$limberGridView[0].innerHTML = "";

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

			node.setAttribute(
				"title",
				`${arr[i].id}: ${Object.keys(arr[i].o).map(
					(o) => arr[i].o[o]?.d?.id || ""
				)}`
			);

			node.innerHTML = arr[i].id;
			node.style.transform = `translate(${arr[i].rect.x}px, ${arr[i].rect.y}px)`;
			node.style.width = arr[i].rect.width + "px";
			node.style.height = arr[i].rect.height + "px";
			e.$limberGridView[0].appendChild(node);
		}

		set$limberGridViewDebugStackRects(
			e.$limberGridView[0].querySelectorAll(
				".limber-grid-view-debug-stack-rects"
			)
		);
	}
};

export const printMergedTempRects = (obj) => {
	if (process.env.NODE_ENV === "development") {
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

		node.setAttribute(
			"title",
			`${obj.id}: ${Object.keys(obj.o).map((o) => obj.o[o]?.d?.id || "")}`
		);

		node.innerHTML = obj.id;
		node.style.transform = `translate(${obj.rect.x}px, ${obj.rect.y}px)`;
		node.style.width = obj.rect.width + "px";
		node.style.height = obj.rect.height + "px";
		e.$limberGridView[0].appendChild(node);

		set$limberGridViewDebugMergedTempRects(
			e.$limberGridView[0].querySelectorAll(
				".limber-grid-view-debug-merged-temp-rects"
			)
		);
	}
};

export const printStackTopRect = (obj) => {
	if (process.env.NODE_ENV === "development") {
		if (!obj) {
			if (e.$limberGridViewDebugStackTopRect) {
				e.$limberGridView[0].removeChild(e.$limberGridViewDebugStackTopRect);
				set$limberGridViewDebugStackTopRect(undefined);
			}
			return;
		}

		if (e.$limberGridViewDebugStackTopRect) {
			e.$limberGridView[0].removeChild(e.$limberGridViewDebugStackTopRect);
		}

		const node = document.createElement("div");
		node.setAttribute(
			"class",
			`limber-grid-view-debug-rect limber-grid-view-debug-stack-top-rect`
		);
		node.setAttribute("id", `limber-grid-view-debug-stack-top-rect`);
		node.setAttribute("tabindex", -1);

		node.setAttribute(
			"title",
			`${obj.id}: ${Object.keys(obj.o).map((o) => obj.o[o]?.d?.id || "")}`
		);

		node.innerHTML = obj.id;
		node.style.transform = `translate(${obj.rect.x}px, ${obj.rect.y}px)`;
		node.style.width = obj.rect.width + "px";
		node.style.height = obj.rect.height + "px";
		e.$limberGridView[0].appendChild(node);

		set$limberGridViewDebugStackTopRect(
			e.$limberGridView[0].querySelectorAll(
				".limber-grid-view-debug-stack-top-rect"
			)[0]
		);
		// console.log(e.$limberGridViewDebugStackTopRect);
	}
};

export const printStackTopAdjRect = (obj) => {
	if (process.env.NODE_ENV === "development") {
		if (!obj) {
			if (e.$limberGridViewDebugStackTopAdjRect) {
				e.$limberGridView[0].removeChild(e.$limberGridViewDebugStackTopAdjRect);
				set$limberGridViewDebugStackTopAdjRect(undefined);
			}
			return;
		}

		if (e.$limberGridViewDebugStackTopAdjRect) {
			e.$limberGridView[0].removeChild(e.$limberGridViewDebugStackTopAdjRect);
		}

		const node = document.createElement("div");
		node.setAttribute(
			"class",
			`limber-grid-view-debug-rect limber-grid-view-debug-stack-top-adj-rect`
		);
		node.setAttribute("id", `limber-grid-view-debug-stack-top-adj-rect`);
		node.setAttribute("tabindex", -1);

		node.setAttribute(
			"title",
			`${obj.id}: ${Object.keys(obj.o).map((o) => obj.o[o]?.d?.id || "")}`
		);

		node.innerHTML = obj.id;
		node.style.transform = `translate(${obj.rect.x}px, ${obj.rect.y}px)`;
		node.style.width = obj.rect.width + "px";
		node.style.height = obj.rect.height + "px";
		e.$limberGridView[0].appendChild(node);

		set$limberGridViewDebugStackTopAdjRect(
			e.$limberGridView[0].querySelectorAll(
				".limber-grid-view-debug-stack-top-adj-rect"
			)[0]
		);
		// console.log(e.$limberGridViewDebugStackTopAdjRect);
	}
};

export const printMergedRect = (obj) => {
	if (process.env.NODE_ENV === "development") {
		if (!obj) {
			if (e.$limberGridViewDebugMergedRect) {
				e.$limberGridView[0].removeChild(e.$limberGridViewDebugMergedRect);
				set$limberGridViewDebugMergedRect(undefined);
			}
			return;
		}

		if (e.$limberGridViewDebugMergedRect) {
			e.$limberGridView[0].removeChild(e.$limberGridViewDebugMergedRect);
		}

		const node = document.createElement("div");
		node.setAttribute(
			"class",
			`limber-grid-view-debug-rect limber-grid-view-debug-merged-rect limber-grid-view-debug-merged-rect-thick`
		);
		node.setAttribute("id", `limber-grid-view-debug-merged-rect`);
		node.setAttribute("tabindex", -1);

		node.setAttribute(
			"title",
			`${obj.id}: ${Object.keys(obj.o).map((o) => obj.o[o]?.d?.id || "")}`
		);

		node.innerHTML = obj.id;
		node.style.transform = `translate(${obj.rect.x}px, ${obj.rect.y}px)`;
		node.style.width = obj.rect.width + "px";
		node.style.height = obj.rect.height + "px";
		e.$limberGridView[0].appendChild(node);

		set$limberGridViewDebugMergedRect(
			e.$limberGridView[0].querySelectorAll(
				".limber-grid-view-debug-merged-rect"
			)[0]
		);
		// console.log(e.$limberGridViewDebugMergedRect);
	}
};

export const printAdjRect = (obj) => {
	if (process.env.NODE_ENV === "development") {
		if (!obj) {
			if (e.$limberGridViewDebugAdjRect) {
				e.$limberGridView[0].removeChild(e.$limberGridViewDebugAdjRect);
				set$limberGridViewDebugAdjRect(undefined);
			}
			return;
		}

		if (e.$limberGridViewDebugAdjRect) {
			e.$limberGridView[0].removeChild(e.$limberGridViewDebugAdjRect);
		}

		const node = document.createElement("div");
		node.setAttribute(
			"class",
			`limber-grid-view-debug-rect limber-grid-view-debug-adj-rect`
		);
		node.setAttribute("id", `limber-grid-view-debug-adj-rect`);
		node.setAttribute("tabindex", -1);

		node.setAttribute(
			"title",
			`${obj.id}: ${Object.keys(obj.o).map((o) => obj.o[o]?.d?.id || "")}`
		);

		node.innerHTML = obj.id;
		node.style.transform = `translate(${obj.rect.x}px, ${obj.rect.y}px)`;
		node.style.width = obj.rect.width + "px";
		node.style.height = obj.rect.height + "px";
		e.$limberGridView[0].appendChild(node);

		set$limberGridViewDebugAdjRect(
			e.$limberGridView[0].querySelectorAll(
				".limber-grid-view-debug-adj-rect"
			)[0]
		);
		// console.log(e.$limberGridViewDebugAdjRect);
	}
};
