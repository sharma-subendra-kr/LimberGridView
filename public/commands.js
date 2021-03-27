window.toggleMerged = function () {
	const els = document.getElementsByClassName(
		"limber-grid-view-debug-merged-free-rect"
	);

	let state = "";
	if (window.toggleMerged.display === "") {
		window.toggleMerged.display = "none";
		state = "none";
	} else {
		window.toggleMerged.display = "";
		state = "";
	}

	for (let i = 0; i < els.length; i++) {
		const el = els[i];
		el.style.display = state;
	}
};
window.toggleMerged.display = "";

window.toggleMergedById = function (id) {
	const el = document.getElementById(
		"limber-grid-view-debug-merged-free-rect-" + id
	);

	if (el) {
		if (el.style.display === "") {
			el.style.display = "none";
		} else {
			el.style.display = "";
		}
	}
};

window.getMergedElementById = function (id) {
	return document.getElementById(
		"limber-grid-view-debug-merged-free-rect-" + id
	);
};

window.toggleUnmerged = function () {
	const els = document.getElementsByClassName(
		"limber-grid-view-debug-unmerged-rect"
	);

	let state = "";
	if (window.toggleUnmerged.display === "") {
		window.toggleUnmerged.display = "none";
		state = "none";
	} else {
		window.toggleUnmerged.display = "";
		state = "";
	}

	for (let i = 0; i < els.length; i++) {
		const el = els[i];
		el.style.display = state;
	}
};
window.toggleUnmerged.display = "";

window.toggleUnmergedById = function (id) {
	const el = document.getElementById(
		"limber-grid-view-debug-unmerged-rect-" + id
	);

	if (el) {
		if (el.style.display === "") {
			el.style.display = "none";
		} else {
			el.style.display = "";
		}
	}
};

window.getUnmergedElementById = function (id) {
	return document.getElementById("limber-grid-view-debug-unmerged-rect-" + id);
};

window.getStackTopRect = function (id) {
	return document.getElementById("limber-grid-view-debug-stack-top-rect");
};

window.getStackTopAdjRect = function (id) {
	return document.getElementById("limber-grid-view-debug-stack-top-adj-rect");
};

window.getMergedRect = function (id) {
	return document.getElementById("limber-grid-view-debug-merged-rect");
};

window.getAdjRect = function (id) {
	return document.getElementById("limber-grid-view-debug-adj-rect");
};

window.scrollUp = function () {
	const el = document.getElementsByClassName("limber-grid-view")[0];
	el.scrollTop -= 100;
};

window.scrollDown = function () {
	const el = document.getElementsByClassName("limber-grid-view")[0];
	el.scrollTop += 100;
};
