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
	set$limberGridViewDebugMergedRects,
} from "../../variables/elements";
import { DEBUG_MODE } from "../../variables/essentials";

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
				"limberGridViewDebugRect limberGridViewDebugUnmergedRect"
			);
			node.setAttribute("id", `limberGridViewDebugUnmergedRect-${arr[i].id}`);
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
			e.$limberGridView[0].querySelectorAll(".limberGridViewDebugUnmergedRect")
		);
	}
};

export const printMergedFreeRects = (arr) => {
	if (process.env.NODE_ENV === "development") {
		let len = e.$limberGridViewDebugMergedRects.length;
		for (let i = 0; i < len; i++) {
			e.$limberGridView[0].removeChild(e.$limberGridViewDebugMergedRects[i]);
		}
		set$limberGridViewDebugMergedRects([]);

		// USE it to hide items
		// e.$limberGridView[0].innerHTML = "";

		len = arr.length;
		let html;
		let node;

		for (let i = 0; i < len; i++) {
			node = document.createElement("div");
			node.setAttribute(
				"class",
				`limberGridViewDebugRect limberGridViewDebugMergedRect`
			);
			node.setAttribute("id", `limberGridViewDebugMergedRect-${arr[i].id}`);
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

		set$limberGridViewDebugMergedRects(
			e.$limberGridView[0].querySelectorAll(".limberGridViewDebugMergedRect")
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
				`limberGridViewDebugRect limberGridViewDebugResultStackRects`
			);
			node.setAttribute(
				"id",
				`limberGridViewDebugResultStackRects-${arr[i].id}`
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
				".limberGridViewDebugResultStackRects"
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
				`limberGridViewDebugRect limberGridViewDebugStackRects`
			);
			node.setAttribute("id", `limberGridViewDebugStackRects-${arr[i].id}`);
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
			e.$limberGridView[0].querySelectorAll(".limberGridViewDebugStackRects")
		);
	}
};

export const printMergedTempRects = (obj) => {
	if (process.env.NODE_ENV === "development") {
		const node = document.createElement("div");
		node.setAttribute(
			"class",
			`limberGridViewDebugRect limberGridViewDebugMergedTempRects`
		);
		node.setAttribute("id", `limberGridViewDebugMergedTempRects-${obj.id}`);
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
				".limberGridViewDebugMergedTempRects"
			)
		);
	}
};

export const printStackTopRect = (obj) => {
	if (process.env.NODE_ENV === "development") {
		if (e.$limberGridViewDebugStackTopRect) {
			e.$limberGridView[0].removeChild(e.$limberGridViewDebugStackTopRect);
		}

		const node = document.createElement("div");
		node.setAttribute(
			"class",
			`limberGridViewDebugRect limberGridViewDebugStackTopRect`
		);
		node.setAttribute("id", `limberGridViewDebugStackTopRect`);
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
				".limberGridViewDebugStackTopRect"
			)[0]
		);
		console.log(e.$limberGridViewDebugStackTopRect);
	}
};

export const printStackTopAdjRect = (obj) => {
	if (process.env.NODE_ENV === "development") {
		if (e.$limberGridViewDebugStackTopAdjRect) {
			e.$limberGridView[0].removeChild(e.$limberGridViewDebugStackTopAdjRect);
		}

		const node = document.createElement("div");
		node.setAttribute(
			"class",
			`limberGridViewDebugRect limberGridViewDebugStackTopAdjRect`
		);
		node.setAttribute("id", `limberGridViewDebugStackTopAdjRect`);
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
				".limberGridViewDebugStackTopAdjRect"
			)[0]
		);
		console.log(e.$limberGridViewDebugStackTopAdjRect);
	}
};

export const printMergedRect = (obj) => {
	if (process.env.NODE_ENV === "development") {
		if (e.$limberGridViewDebugMergedRect) {
			e.$limberGridView[0].removeChild(e.$limberGridViewDebugMergedRect);
		}

		const node = document.createElement("div");
		node.setAttribute(
			"class",
			`limberGridViewDebugRect limberGridViewDebugMergedRect limberGridViewDebugMergedRect-thick`
		);
		node.setAttribute("id", `limberGridViewDebugMergedRect`);
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
			e.$limberGridView[0].querySelectorAll(".limberGridViewDebugMergedRect")[0]
		);
		console.log(e.$limberGridViewDebugMergedRect);
	}
};

export const printAdjRect = (obj) => {
	if (process.env.NODE_ENV === "development") {
		if (e.$limberGridViewDebugAdjRect) {
			e.$limberGridView[0].removeChild(e.$limberGridViewDebugAdjRect);
		}

		const node = document.createElement("div");
		node.setAttribute(
			"class",
			`limberGridViewDebugRect limberGridViewDebugAdjRect`
		);
		node.setAttribute("id", `limberGridViewDebugAdjRect`);
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
			e.$limberGridView[0].querySelectorAll(".limberGridViewDebugAdjRect")[0]
		);
		console.log(e.$limberGridViewDebugAdjRect);
	}
};
