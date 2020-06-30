import e, {
	set$limberGridView,
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
		e.$limberGridView[0].removeChild(
			e.$limberGridViewDebugUnmergedRects[i]
		);
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

		node.setAttribute(
			"title",
			`${arr[i].id}: ${Object.keys(arr[i].a).map(
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
			".limberGridViewDebugUnmergedRect"
		)
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
