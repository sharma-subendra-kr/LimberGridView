window.onload = function () {
	main();

	const animatedBox = document.getElementsByClassName("animated-box")[0];
	let start;
	let pos = -50;
	const pxpms = 0.01;
	function step(timestamp) {
		if (start === undefined) {
			start = timestamp;
		}
		// eslint-disable-next-line prefer-const
		let elapsed = timestamp - start;

		animatedBox.style.transform =
			"translateX(" + (pos + pxpms * elapsed) + "px)";
		pos = pos + pxpms * elapsed;

		if (pos >= 300) {
			pos = -50;
			start = timestamp;
		}

		window.requestAnimationFrame(step);
	}

	window.requestAnimationFrame(step);
};

const main = function () {
	// const body = document.getElementsByTagName("body");
	const $toggleModeButton = document.getElementsByClassName(
		"toggle-add-or-cut-space-button"
	);
	const $addButtonIcon = document.getElementsByClassName("add-button-icon");
	const $rtreeDebugContainer = document.getElementById("rtree-debug-container");
	const $rtreeButton = document.getElementById("rtree-button");
	const $animationTime = document.getElementById("animation-time");

	const onRTreeButtonClick = function (event) {
		$rtreeDebugContainer.classList.toggle("rtree-debug-container-active");
	};

	$rtreeButton.addEventListener("click", onRTreeButtonClick);

	const onToggleModeClick = function (event) {
		// console.log(event);
		if (event.currentTarget.classList.contains("activate-add-mode")) {
			event.currentTarget.classList.remove(
				"toggle-add-or-cut-space-button-active"
			);
			event.currentTarget.parentNode.childNodes[1].classList.add(
				"toggle-add-or-cut-space-button-active"
			);
			window.limberGridView.setDeskInteractMode("ADD");
		} else if (
			event.currentTarget.classList.contains("activate-cut-space-mode")
		) {
			event.currentTarget.classList.remove(
				"toggle-add-or-cut-space-button-active"
			);
			event.currentTarget.parentNode.childNodes[3].classList.add(
				"toggle-add-or-cut-space-button-active"
			);
			window.limberGridView.setDeskInteractMode("CUTSPACE");
		}
	};

	const onAddButtonIconClick = function (event) {
		// console.log(event);
		window.limberGridView.addItem();
	};

	$toggleModeButton[0].addEventListener("click", onToggleModeClick);
	$toggleModeButton[1].addEventListener("click", onToggleModeClick);
	$addButtonIcon[0].addEventListener("click", onAddButtonIconClick);

	// const layoutHtml = `<div class = "item-layout"><span>Title</span><div class = "item-drop-down-button">:::<div class = "item-drop-down"><div class = "item-drop-down-item">add</div><div class = "item-drop-down-item">remove</div></div></div></div>`;

	function remove(event) {
		const index = event.currentTarget.attributes["data-index"].value;

		const indices = [index];
		indices.sort(function (a, b) {
			return Number(a) - Number(b);
		});

		window.limberGridView.removeItems(indices);
	}

	function add(event) {
		const index = event.currentTarget.attributes["data-index"].value;
		window.limberGridView.renderItems([index], false);
	}

	function renderContent(index, width, height, type) {
		const div = document.createElement("div");
		div.style.width = width + "px";
		div.style.height = 25 + "px";
		div.classList.add("item-layout-parent");
		const layoutHtml =
			`<div class = "item-layout"><span>Title ` +
			index +
			`</span><div class = "item-drop-down-button">:::<div class = "item-drop-down"><div class = "item-drop-down-item">add</div><div class = "item-drop-down-item">remove</div></div></div></div>`;
		div.innerHTML = layoutHtml;

		if (!type) {
			const random = Math.floor(Math.random() * 3);
			if (random === 0) {
				// eslint-disable-next-line no-undef
				const chart = barchart(width, height - 25);
				div.appendChild(chart);
				return div.outerHTML;
			} else if (random === 1) {
				// eslint-disable-next-line no-undef
				const chart = piechart(width, height - 25);
				div.appendChild(chart);
				return div.outerHTML;
			} else if (random === 2) {
				// eslint-disable-next-line no-undef
				const chart = kpi(width, height - 25);
				div.appendChild(chart);
				return div.outerHTML;
			}
		} else {
			return div.outerHTML;
		}
	}

	const onItemClickCallback = function (event) {
		if (event.target.classList.contains("item-drop-down-button")) {
			event.target.childNodes[1].classList.toggle("item-drop-down-active");
		}

		if (event.target.classList.contains("item-drop-down-item")) {
			if (event.target.innerHTML === "add") {
				event.target.parentNode.classList.remove("item-drop-down-active");
				add(event);
			} else if (event.target.innerHTML === "remove") {
				event.target.parentNode.classList.remove("item-drop-down-active");
				remove(event);
			}
		}
	};

	const renderComplete = function () {
		// console.log("renderComplete");
	};

	const resizeComplete = function (index, width, height, arrangedIndices) {
		const items =
			window.limberGridView.store.variables.elements.$limberGridViewItems;
		const len = arrangedIndices.length;

		for (let i = 0; i < len; i++) {
			items[arrangedIndices[i]].classList.add(
				"limber-grid-view-item-no-shadow"
			);
		}

		setTimeout(function () {
			for (let i = 0; i < len; i++) {
				items[arrangedIndices[i]].classList.add("limber-grid-view-item-glow");
			}
		}, 250);

		setTimeout(function () {
			for (let i = 0; i < len; i++) {
				items[arrangedIndices[i]].classList.remove(
					"limber-grid-view-item-no-shadow",
					"limber-grid-view-item-glow"
				);
			}
		}, 2000);
		// window.limberGridView.renderItem(index);
	};

	const moveComplete = function (index, toX, toY, arrangedIndices) {
		const items =
			window.limberGridView.store.variables.elements.$limberGridViewItems;

		const len = arrangedIndices.length;
		for (let i = 0; i < len; i++) {
			items[arrangedIndices[i]].classList.add(
				"limber-grid-view-item-no-shadow"
			);
		}

		setTimeout(function () {
			for (let i = 0; i < len; i++) {
				items[arrangedIndices[i]].classList.add("limber-grid-view-item-glow");
			}
		}, 250);

		setTimeout(function () {
			for (let i = 0; i < len; i++) {
				items[arrangedIndices[i]].classList.remove(
					"limber-grid-view-item-no-shadow",
					"limber-grid-view-item-glow"
				);
			}
		}, 2000);
	};

	const addComplete = function (indices, width, height, processType) {
		// console.log("addCompleteCallback");
		// console.log(indices);
		// console.log(width);
		// console.log(height);
		// console.log(processType);
	};

	const removeComplete = function (indices) {
		console.log("removeCompleteCallback");
		console.log(indices);
	};

	// eslint-disable-next-line no-unused-vars
	const itemMouseDownMoveCheck = function (x, y, item, index) {
		return true;
	};

	// eslint-disable-next-line no-unused-vars
	const itemMouseDownResizeCheck = function (x, y, item, index) {
		return true;
	};

	// eslint-disable-next-line no-unused-vars
	const isMobileCheck = function () {
		return (
			window.matchMedia(
				"only screen and (max-width: 980px) and (min-width : 1px) and (orientation: portrait)"
			).matches ||
			window.matchMedia(
				"only screen and (max-width: 979px) and (min-width : 1px) and (orientation: landscape)"
			).matches
		);
	};

	const getArrangeTime = function (time, resizeCount, count) {
		$animationTime.innerHTML = `${time}, ${resizeCount}, ${count}`;
	};

	const obj = {
		el: "limber-grid-view-implement",
		// editable: true,
		// enableInteractiveAddAndCut: true,
		// enableTouchInteraction: true,
		// dataType: "string", // string or node
		// pseudoElementContainer: "limber-grid-controls",
		// autoArrange: true,
		// reRenderOnResize: true,
		// itemMouseDownMoveCheck: itemMouseDownMoveCheck,
		// itemMouseDownResizeCheck: itemMouseDownResizeCheck,
		// isMobileCheck: isMobileCheck,

		callbacks: {
			renderContent: renderContent,
			onItemClickCallback: onItemClickCallback,
			renderComplete: renderComplete,
			resizeComplete: resizeComplete,
			moveComplete: moveComplete,
			addComplete: addComplete,
			removeComplete: removeComplete,
			getArrangeTime: getArrangeTime,
		},
		// "{"gridHeight":561,"gridWidth":960,"margin":5}"
		// "{"gridHeight":482,"gridWidth":999,"margin":3.830521472392638}"

		// gridData: {
		// 	// HEIGHT: 482,
		// 	// WIDTH: 999,
		// 	// MARGIN: 3.830521472392638,
		// },
		publicConstants: {
			useVerticalArrOnResize: false,
			showBottomLeftResizeGuide: true,
			autoScrollForMouse: true,
		},
		// eslint-disable-next-line no-undef
		positionData: positionData,

		// initialGridData : {
		// 	gridHeight : 624,
		// 	gridWidth : 985,
		// 	// gridHeight : null,
		// 	// gridWidth : null,
		// 	margin : 5,
		// 	mobileAspectRatio : 16/9,
	};

	// console.log(
	// 	window.getComputedStyle(body[0], null).getPropertyValue("width")
	// );

	// eslint-disable-next-line new-cap, no-undef
	window.limberGridView = new LimberGridView.default(obj);
	// window.limberGridView.MOVE_GUIDE_RADIUS = 20;
	// window.limberGridView.RESIZE_SQUARE_GUIDE_LENGTH = 15;
	// window.limberGridView.RESIZE_SQUARE_BORDER_GUIDE_WIDTH = 5;
	// window.limberGridView.AUTO_SCROLL_DISTANCE = 100;
	// window.limberGridView.AUTO_SCROLL_POINT = 100;
	// window.limberGridView.MOVE_OR_RESIZE_HEIGHT_INCREMENTS = 100;
	// window.limberGridView.MOBILE_ASPECT_RATIO = 16/10;

	// window.limberGridView.render(undefined, false);
	// window.limberGridView.setIsMobileFunction(function() {
	// 	return window.matchMedia(
	// 		"only screen and (max-width: 1023px) and (min-width : 1px)"
	// 	).matches;
	// });
};
