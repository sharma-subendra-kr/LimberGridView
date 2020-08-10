window.onload = function () {
	main();
};

function main() {
	var tree = document.getElementById("limber-grid-view-tree");
	fetch("treeData.html")
		.then(function (response) {
			return response.text();
		})
		.then(function (text) {
			tree.innerHTML = text;
		});
}
