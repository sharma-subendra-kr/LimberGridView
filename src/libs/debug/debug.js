import e, {
	set$limberGridView,
	set$limberGridViewDebugStackTopRect,
	set$limberGridViewDebugMergedTempRects,
	set$limberGridViewDebugStackRects,
	set$limberGridViewDebugResultStackRects,
	set$limberGridViewDebugUnmergedRects,
	set$limberGridViewDebugMergedRects,
} from "../../variables/elements";
import { DEBUG_MODE } from "../../variables/essentials";

export const printUnmergedFreeRects = (arr) => {
	if (!DEBUG_MODE) {
		return;
	}

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
			`${arr[i].id}: ${Object.keys(arr[i].a).map((o) => arr[i].a[o].d.id)}`
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
};

export const printMergedFreeRects = (arr) => {
	if (!DEBUG_MODE) {
		return;
	}

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
};

export const printResultStackRects = (arr) => {
	if (!DEBUG_MODE) {
		return;
	}

	let len = e.$limberGridViewDebugResultStackRects.length;
	for (let i = 0; i < len; i++) {
		e.$limberGridView[0].removeChild(e.$limberGridViewDebugResultStackRects[i]);
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
		node.setAttribute("id", `limberGridViewDebugResultStackRects-${arr[i].id}`);
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
};

export const printStackRects = (arr) => {
	if (!DEBUG_MODE) {
		return;
	}

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
};

export const printMergedTempRects = (obj) => {
	if (!DEBUG_MODE) {
		return;
	}

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
		e.$limberGridView[0].querySelectorAll(".limberGridViewDebugMergedTempRects")
	);
};

export const printStackTopRect = (obj) => {
	if (!DEBUG_MODE) {
		return;
	}

	if (e.$limberGridViewDebugStackTopRect) {
		e.$limberGridView[0].removeChild(e.$limberGridViewDebugStackTopRect);
	}

	const node = document.createElement("div");
	node.setAttribute(
		"class",
		`limberGridViewDebugRect limberGridViewDebugStackTopRect`
	);
	node.setAttribute("id", `limberGridViewDebugStackTopRect-${obj.id}`);
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
		e.$limberGridView[0].querySelectorAll(".limberGridViewDebugStackTopRect")[0]
	);
};
