import e, {
	set$limberGridView,
	set$limberGridViewDebugUnmergedRects,
	set$limberGridViewDebugMergedRects,
} from "../../variables/elements";

export const printUnmergedFreeRects = (arr) => {
	let len = e.$limberGridViewDebugUnmergedRects.length;
	for (let i = 0; i < len; i++) {
		e.$limberGridView[0].removeChild(
			e.$limberGridViewDebugUnmergedRects[i]
		);
	}
	set$limberGridViewDebugUnmergedRects([]);

	len = arr.length;
	let html;
	let node;

	for (let i = 0; i < len; i++) {
		node = document.createElement("div");
		node.setAttribute(
			"class",
			"limberGridViewDebugRect limberGridViewDebugUnmergedRect"
		);
		node.style.transform = `translate(${arr[i].d.rect.x}px, ${
			arr[i].d.rect.y
		}px)`;
		node.style.width = arr[i].d.rect.width + "px";
		node.style.height = arr[i].d.rect.height + "px";
		e.$limberGridView[0].appendChild(node);
	}

	set$limberGridViewDebugUnmergedRects(
		e.$limberGridView[0].querySelectorAll(
			".limberGridViewDebugUnmergedRect"
		)
	);
};

export const printMergedFreeRects = (arr) => {};
