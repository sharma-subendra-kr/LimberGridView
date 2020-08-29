window.onload = function () {
	main();
};

var main = function () {
	var body = document.getElementsByTagName("body");
	var $toggleModeButton = document.getElementsByClassName(
		"toggle-add-or-cut-space-button"
	);
	var $addButtonIcon = document.getElementsByClassName("add-button-icon");

	var onToggleModeClick = function (event) {
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

	var onAddButtonIconClick = function (event) {
		// console.log(event);
		window.limberGridView.addItem();
	};

	$toggleModeButton[0].addEventListener("click", onToggleModeClick);
	$toggleModeButton[1].addEventListener("click", onToggleModeClick);
	$addButtonIcon[0].addEventListener("click", onAddButtonIconClick);

	var layoutHtml =
		'<div class = "item-layout"><span>Title</span><div class = "item-drop-down-button">:::<div class = "item-drop-down"><div class = "item-drop-down-item">add</div><div class = "item-drop-down-item">remove</div></div></div></div>';

	var kpi = function (width, height) {
		var rand = Math.random();
		if (rand > 0.5) {
			var stockUpDown = "stock-up";
		} else {
			var stockUpDown = "stock-down";
		}

		var div = document.createElement("div");
		div.style.width = width + "px";
		div.style.height = height + "px";
		div.classList.add("kpi");

		var divLeft = document.createElement("div");
		divLeft.style.width = width * 0.25 + "px";
		divLeft.style.height = height + "px";
		divLeft.classList.add("kpi-left");

		var divLeftArrow = document.createElement("div");
		divLeftArrow.classList.add(stockUpDown);

		divLeft.appendChild(divLeftArrow);
		div.appendChild(divLeft);

		var divRight = document.createElement("div");
		divRight.style.width = width * 0.75 + "px";
		divRight.style.height = height + "px";
		divRight.classList.add("kpi-right");

		var divRightTop = document.createElement("div");
		divRightTop.style.width = width * 0.75 + "px";
		divRightTop.style.height = height / 2 + "px";
		divRightTop.classList.add("kpi-right-top");
		divRightTop.innerHTML = "FAKESTOK";

		var divRightBottom = document.createElement("div");
		divRightBottom.style.width = width * 0.75 + "px";
		divRightBottom.style.height = height / 2 + "px";
		divRightBottom.classList.add("kpi-right-bottom");
		divRightBottom.innerHTML = rand.toFixed(2);

		divRight.appendChild(divRightTop);
		divRight.appendChild(divRightBottom);
		div.appendChild(divRight);

		return div;
	};

	var piechart = function (width, height) {
		var data = [10, 20, 100];

		var margin = { top: 20, right: 20, bottom: 30, left: 40 };
		var chartWidth = width - margin.left - margin.right;
		var chartHeight = height - margin.top - margin.bottom;

		var radius = Math.min(chartWidth, chartHeight) / 2;

		var color = d3.scaleOrdinal().range(["#ff6600", "#ffbf00", "#009933"]);

		var arc = d3
			.arc()
			.outerRadius(radius - 10)
			.innerRadius(0);

		var labelArc = d3
			.arc()
			.outerRadius(radius - 40)
			.innerRadius(radius - 40);

		var pie = d3
			.pie()
			.sort(null)
			.value(function (d) {
				return d;
			});

		var div = document.createElement("div");
		div.style.width = width + "px";
		div.style.height = height + "px";

		var svg = d3
			.select(div)
			.append("svg")
			.attr("width", width)
			.attr("height", height);
		var gForMargin = svg
			.append("g")
			.attr("transform", "translate(" + margin.left + "," + margin.top + ")")
			.attr("width", chartWidth)
			.attr("height", chartHeight);
		var g = gForMargin
			.append("g")
			.attr(
				"transform",
				"translate(" + chartWidth / 2 + "," + chartHeight / 2 + ")"
			);
		var g2 = g
			.selectAll(".arc")
			.data(pie(data))
			.enter()
			.append("g")
			.attr("class", "arc");
		g2.append("path")
			.attr("d", arc)
			.style("fill", function (d) {
				return color(d.data);
			});

		// g2.append("text")
		// 	.attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
		// 	.attr("dy", ".35em")
		// 	.text(function(d) { return d.data; })
		// ;

		return div;
	};

	var barchart = function (width, height) {
		var data = [
			{ label: "A", value: 10 },
			{ label: "B", value: 5 },
			{ label: "C", value: 10 },
			{ label: "D", value: 20 },
			{ label: "E", value: 10 },
			{ label: "F", value: 5 },
			{ label: "G", value: 20 },
			{ label: "H", value: 7 },
			{ label: "I", value: 3 },
			{ label: "J", value: 10 },
		];

		var margin = { top: 20, right: 20, bottom: 30, left: 40 };
		var chartWidth = width - margin.left - margin.right;
		var chartHeight = height - margin.top - margin.bottom;

		var x = d3.scaleBand().rangeRound([0, chartWidth]).paddingInner(0.1);
		var y = d3.scaleLinear().rangeRound([chartHeight, 0]);
		var z = d3.scaleOrdinal().range(["#992600", "#004d00", "#003366"]);
		x.domain(
			data.map(function (d) {
				return d.label;
			})
		);
		y.domain([
			0,
			d3.max(data, function (d) {
				return d.value;
			}),
		]);

		var div = document.createElement("div");
		div.style.width = width + "px";
		div.style.height = height + "px";

		var svg = d3
			.select(div)
			.append("svg")
			.attr("width", width)
			.attr("height", height);
		var g = svg
			.append("g")
			.attr("transform", "translate(" + margin.left + "," + margin.top + ")")
			.attr("width", chartWidth)
			.attr("height", chartHeight);
		g.selectAll(".bar")
			.data(data)
			.enter()
			.append("rect")
			.attr("class", "bar")
			.attr("x", function (d) {
				return x(d.label);
			})
			.attr("width", x.bandwidth())
			.attr("y", function (d) {
				return y(d.value);
			})
			.attr("height", function (d) {
				return chartHeight - y(d.value);
			})
			.attr("fill", function (d) {
				return z(d.label);
			});

		g.append("g")
			.attr("transform", "translate(0," + chartHeight + ")")
			.call(d3.axisBottom(x));

		g.append("g").call(d3.axisLeft(y));

		return div;
	};

	function remove(event) {
		var index = event.currentTarget.attributes["data-index"].value;

		var indices = [index];
		indices.sort(function (a, b) {
			return Number(a) - Number(b);
		});

		window.limberGridView.removeItems(indices);
	}

	function add(event) {
		var index = event.currentTarget.attributes["data-index"].value;
		window.limberGridView.renderItems([index], false);
	}

	function renderContent(index, width, height, type) {
		// console.log("renderContent", index, width, height, type);
		// console.log(width);
		// console.log(height);
		// console.log(processType);

		var div = document.createElement("div");
		div.style.width = width + "px";
		div.style.height = 25 + "px";
		div.classList.add("item-layout-parent");
		var layoutHtml =
			`<div class = "item-layout"><span>Title ` +
			index +
			`</span><div class = "item-drop-down-button">:::<div class = "item-drop-down"><div class = "item-drop-down-item">add</div><div class = "item-drop-down-item">remove</div></div></div></div>`;
		div.innerHTML = layoutHtml;

		if (!type) {
			var random = Math.floor(Math.random() * 3);
			if (random === 0) {
				var chart = barchart(width, height - 25);
				div.appendChild(chart);
				// return div;
				return div.outerHTML;
			} else if (random === 1) {
				var chart = piechart(width, height - 25);
				div.appendChild(chart);
				// return div;
				return div.outerHTML;
			} else if (random === 2) {
				var chart = kpi(width, height - 25);
				div.appendChild(chart);
				// return div;
				return div.outerHTML;
			}
		} else {
			var random = Math.floor(Math.random() * 3);
			return div.outerHTML;
		}
	}

	var onItemClickCallback = function (event) {
		if (event.target.classList.contains("item-drop-down-button")) {
			event.target.childNodes[1].classList.toggle("item-drop-down-active");
		}

		if (event.target.classList.contains("item-drop-down-item")) {
			if (event.target.innerHTML == "add") {
				event.target.parentNode.classList.remove("item-drop-down-active");
				add(event);
			} else if (event.target.innerHTML == "remove") {
				event.target.parentNode.classList.remove("item-drop-down-active");
				remove(event);
			}
		}
	};

	var renderComplete = function () {
		// console.log("renderComplete");
	};

	var renderComplete = function (indices, scale, processType) {
		// console.log("itemsRenderComplete");
		// console.log(event);
	};

	var resizeComplete = function (index, width, height, arrangedIndices) {
		var items =
			window.limberGridView.store.variables.elements.$limberGridViewItems;
		var len = arrangedIndices.length;

		for (var i = 0; i < len; i++) {
			items[arrangedIndices[i]].classList.add(
				"limber-grid-view-item-no-shadow"
			);
		}

		setTimeout(function () {
			for (var i = 0; i < len; i++) {
				items[arrangedIndices[i]].classList.add("limber-grid-view-item-glow");
			}
		}, 250);

		setTimeout(function () {
			for (var i = 0; i < len; i++) {
				items[arrangedIndices[i]].classList.remove(
					"limber-grid-view-item-no-shadow",
					"limber-grid-view-item-glow"
				);
			}
		}, 2000);
		window.limberGridView.renderItem(index);
	};

	var moveComplete = function (index, toX, toY, arrangedIndices) {
		var items =
			window.limberGridView.store.variables.elements.$limberGridViewItems;
		var len = arrangedIndices.length;

		for (var i = 0; i < len; i++) {
			items[arrangedIndices[i]].classList.add(
				"limber-grid-view-item-no-shadow"
			);
		}

		setTimeout(function () {
			for (var i = 0; i < len; i++) {
				items[arrangedIndices[i]].classList.add("limber-grid-view-item-glow");
			}
		}, 250);

		setTimeout(function () {
			for (var i = 0; i < len; i++) {
				items[arrangedIndices[i]].classList.remove(
					"limber-grid-view-item-no-shadow",
					"limber-grid-view-item-glow"
				);
			}
		}, 2000);
	};

	var addComplete = function (indices, width, height, processType) {
		// console.log("addCompleteCallback");
		// console.log(indices);
		// console.log(width);
		// console.log(height);
		// console.log(processType);
	};

	var removeComplete = function (indices) {
		console.log("removeCompleteCallback");
		console.log(indices);
	};

	var itemMouseDownMoveCheck = function (x, y, item, index) {
		return true;
	};

	var itemMouseDownResizeCheck = function (x, y, item, index) {
		return true;
	};

	var isMobileCheck = function () {
		return (
			window.matchMedia(
				"only screen and (max-width: 980px) and (min-width : 1px) and (orientation: portrait)"
			).matches ||
			window.matchMedia(
				"only screen and (max-width: 979px) and (min-width : 1px) and (orientation: landscape)"
			).matches
		);
	};

	var obj = {
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
		},
		// "{"gridHeight":561,"gridWidth":960,"margin":5,"initialPositionData":[{"x":519,"y":194,"height":218.1500000000001,"width":263},{"x":317,"y":6,"height":284,"width":191},{"x":0,"y":0,"height":134,"width":110},{"x":3,"y":146,"height":142,"width":306},{"x":149,"y":301,"height":194.92385786802032,"width":194.92385786802032},{"x":353,"y":300,"height":115.15000000000009,"width":110.76599999999996},{"x":2,"y":509,"height":194.92385786802032,"width":555.5329949238579},{"x":518,"y":9,"height":174,"width":159},{"x":4,"y":295,"height":112.46000000000004,"width":135},{"x":118,"y":1,"height":139,"width":149.152}]}"
		// "{"gridHeight":482,"gridWidth":999,"margin":3.830521472392638,"initialPositionData":[{"x":0,"y":0,"height":371.56058282208585,"width":506.3949386503067},{"x":512.1776649746192,"y":0,"height":202.84263959390861,"width":202.84263959390861},{"x":512.1776649746192,"y":207.91370558375635,"height":163.64677223926378,"width":199.53339570552146},{"x":720.0913705583756,"y":0,"height":374.625,"width":268.18323542944785},{"x":0,"y":383.17659057643795,"height":202.84263959390861,"width":202.84263959390861},{"x":207.91370558375635,"y":383.17659057643795,"height":202.84263959390861,"width":202.84263959390861},{"x":415.8274111675127,"y":383.17659057643795,"height":202.84263959390861,"width":578.1015228426396},{"x":0,"y":591.0902961601943,"height":608.5279187817258,"width":405.68527918781723},{"x":414.4624233128834,"y":594.4969325153374,"height":486.2310736196319,"width":552.2370874233128},{"x":0,"y":1208.197027498365,"height":438.1580291411043,"width":718.6058282208588}]}"

		// gridData: {
		// 	// HEIGHT: 482,
		// 	// WIDTH: 999,
		// 	// MARGIN: 3.830521472392638,
		// },
		positionData: [
			// set 1
			// {
			// 	x: 50,
			// 	y: 100,
			// 	width: 200,
			// 	height: 200,
			// },
			// {
			// 	x: 270,
			// 	y: 100,
			// 	width: 200,
			// 	height: 200,
			// },
			// {
			// 	x: 590,
			// 	y: 100,
			// 	width: 200,
			// 	height: 200,
			// },
			// set 2
			// {
			// 	x: 0 + 5,
			// 	y: 0 + 5,
			// 	height: 371.56058282208585 - 5,
			// 	width: 506.3949386503067 - 5,
			// },
			// {
			// 	x: 512.1776649746192,
			// 	y: 0 + 5,
			// 	height: 202.84263959390861 - 5,
			// 	width: 202.84263959390861,
			// },
			// {
			// 	x: 512.1776649746192,
			// 	y: 207.91370558375635,
			// 	height: 163.64677223926378,
			// 	width: 199.53339570552146,
			// },
			// {
			// 	x: 720.0913705583756,
			// 	y: 0 + 5,
			// 	height: 374.625 - 5,
			// 	width: 268.18323542944785,
			// },
			// {
			// 	x: 0 + 5,
			// 	y: 383.17659057643795,
			// 	height: 202.84263959390861,
			// 	width: 202.84263959390861 - 5,
			// },
			// {
			// 	x: 207.91370558375635,
			// 	y: 383.17659057643795,
			// 	height: 202.84263959390861,
			// 	width: 202.84263959390861,
			// },
			// {
			// 	x: 415.8274111675127,
			// 	y: 383.17659057643795,
			// 	height: 202.84263959390861,
			// 	width: 578.1015228426396,
			// },
			// {
			// 	x: 0 + 5,
			// 	y: 591.0902961601943,
			// 	height: 608.5279187817258,
			// 	width: 405.68527918781723 - 5,
			// },
			// {
			// 	x: 414.4624233128834,
			// 	y: 594.4969325153374,
			// 	height: 486.2310736196319,
			// 	width: 552.2370874233128,
			// },
			// {
			// 	x: 0 + 5,
			// 	y: 1208.197027498365,
			// 	height: 438.1580291411043,
			// 	width: 718.6058282208588 - 5,
			// },
			// set 3
			// {
			// 	x: 5,
			// 	y: 5,
			// 	width: 195,
			// 	height: 195,
			// },
			// {
			// 	x: 215,
			// 	y: 5,
			// 	width: 200,
			// 	height: 295,
			// },
			// {
			// 	x: 430,
			// 	y: 5,
			// 	width: 200,
			// 	height: 395,
			// },
			// {
			// 	x: 650,
			// 	y: 5,
			// 	width: 200,
			// 	height: 195,
			// },
			// {
			// 	x: 865,
			// 	y: 5,
			// 	width: 130,
			// 	height: 195,
			// },
			// {
			// 	x: 5,
			// 	y: 210,
			// 	width: 195,
			// 	height: 200,
			// },
			/**/
			// {
			// 	x: 215,
			// 	y: 310,
			// 	width: 200,
			// 	height: 200,
			// },
			/**/
			// {
			// 	x: 430,
			// 	y: 420,
			// 	width: 200,
			// 	height: 200,
			// },
			// {
			// 	x: 650,
			// 	y: 210,
			// 	width: 200,
			// 	height: 400,
			// },
			// {
			// 	x: 865,
			// 	y: 210,
			// 	width: 130,
			// 	height: 300,
			// },
			// {
			// 	x: 5,
			// 	y: 420,
			// 	width: 195,
			// 	height: 300,
			// },
			// {
			// 	x: 215,
			// 	y: 520,
			// 	width: 200,
			// 	height: 300,
			// },
			// {
			// 	x: 430,
			// 	y: 630,
			// 	width: 200,
			// 	height: 250,
			// },
			// {
			// 	x: 650,
			// 	y: 620,
			// 	width: 200,
			// 	height: 300,
			// },
			// {
			// 	x: 865,
			// 	y: 520,
			// 	width: 130,
			// 	height: 200,
			// },
			// {
			// 	x: 5,
			// 	y: 730,
			// 	width: 195,
			// 	height: 200,
			// },
			// {
			// 	x: 215,
			// 	y: 830,
			// 	width: 200,
			// 	height: 300,
			// },
			/**/
			// {
			// 	x: 430,
			// 	y: 890,
			// 	width: 200,
			// 	height: 200,
			// },
			/**/
			// {
			// 	x: 650,
			// 	y: 950,
			// 	width: 200,
			// 	height: 200,
			// },
			// {
			// 	x: 865,
			// 	y: 820,
			// 	width: 130,
			// 	height: 300,
			// },
			// {
			// 	x: 5,
			// 	y: 960,
			// 	width: 195,
			// 	height: 200,
			// },
			// {
			// 	x: 215,
			// 	y: 1140,
			// 	width: 200,
			// 	height: 200,
			// },
			// {
			// 	x: 430,
			// 	y: 1100,
			// 	width: 200,
			// 	height: 200,
			// },
			// {
			// 	x: 650,
			// 	y: 1160,
			// 	width: 200,
			// 	height: 200,
			// },
			// {
			// 	x: 865,
			// 	y: 1130,
			// 	width: 130,
			// 	height: 200,
			// },
			//
			// Set 4
			{
				x: 8,
				y: 56.513207,
				width: 455.003772,
				height: 257.932075,
			},
			{
				x: 925.947169,
				y: 65.207547,
				width: 310.037735,
				height: 242.686792,
			},
			{
				x: 479.003772,
				y: 56.513207,
				width: 428.920754,
				height: 237.645283,
			},
			{
				x: 1260.368098,
				y: 70.674846,
				// width: 374.969325,
				width: 384.785276,
				height: 282.699386,
			},
			{
				x: 1656.932515,
				y: 74.601226,
				width: 253.251533,
				height: 638.036809,
			},
			{
				x: 15.705521,
				y: 335.705521,
				width: 565.398773,
				height: 361.226993,
			},
			{
				x: 596.809815,
				y: 343.558282,
				width: 331.779141,
				height: 359.263803,
			},
			{
				x: 944.294478,
				y: 351.411042,
				width: 304.294478,
				height: 353.374233,
			},
			{
				x: 1264.294478,
				y: 371.042944,
				width: 374.969325,
				height: 343.558282,
			},
			{
				x: 29.447852,
				y: 714.601226,
				width: 486.871165,
				height: 343.558282,
			},
			{
				x: 530.061349,
				y: 716.564417,
				width: 447.607361,
				height: 331.779141,
			},
			{
				x: 993.374233,
				y: 724.417177,
				width: 241.472392,
				height: 213.98773,
			},
			{
				x: 997.300613,
				y: 961.96319,
				width: 251.288343,
				height: 212.024539,
			},
			{
				x: 1272.147239,
				y: 732.269938,
				width: 598.773006,
				height: 426.012269,
			},
			{
				x: 41.226993,
				y: 1085.644171,
				width: 932.515337,
				height: 457.423312,
			},
			{
				x: 987.484662,
				y: 1193.619631,
				width: 402.453987,
				height: 347.484662,
			},
			{
				x: 1405.644171,
				y: 1197.546012,
				width: 471.165644,
				height: 347.484662,
			},
			{
				x: 54.969325,
				y: 1570.552147,
				width: 386.748466,
				height: 374.969325,
			},
			{
				x: 467.239263,
				y: 1574.478527,
				width: 671.411042,
				height: 371.042944,
			},
			{
				x: 1152.392638,
				y: 1580.368098,
				width: 718.527607,
				height: 365.153374,
			},
			{
				x: 8,
				y: 1961.521472,
				width: 394.453987,
				height: 614.184049,
			},
			{
				x: 416.196319,
				y: 1971.042944,
				width: 612.515337,
				height: 302.331288,
			},
			{
				x: 418.159509,
				y: 2291.042944,
				width: 612.515337,
				height: 282.699386,
			},
			{
				x: 1038.527607,
				y: 1973.006134,
				width: 369.079754,
				height: 302.331288,
			},
			{
				x: 1427.239263,
				y: 1973.006134,
				width: 386.748466,
				height: 304.294478,
			},
			{
				x: 1048.343558,
				y: 2296.932515,
				width: 353.374233,
				height: 278.773006,
			},
			{
				x: 1429.202453,
				y: 2306.748466,
				width: 376.932515,
				height: 266.993865,
			},
		],

		// initialGridData : {
		// 	gridHeight : 624,
		// 	gridWidth : 985,
		// 	// gridHeight : null,
		// 	// gridWidth : null,
		// 	margin : 5,
		// 	mobileAspectRatio : 16/9,
		// 	initialPositionData : [
		// 		{x : 505, y: 0,  height : 200, width : 200},
		// 		{x : 0, y: 0, height : 400, width : 500},
		// 		{x : 505, y: 205,  height : 195, width : 200},
		// 		{x : 0, y: 405,  height : 200, width : 200},
		// 		{x : 710, y: 0,  height : 400, width : 280},
		// 		{x : 410, y: 405,  height : 400 - 200, width : 580 - 10},
		// 		{x : 0, y: 1215 + 150,  height : 600, width : 300},
		// 		{x : 205, y: 405,  height : 200, width : 200},
		// 		{x : 405, y: 810,  height : 400 + 100, width : 580},
		// 		{x : 0, y: 610,  height : 600, width : 400},

		// 		// {height : 400, width : 500},
		// 		// {height : 200, width : 200},
		// 		// {height : 195, width : 200},
		// 		// {height : 400, width : 280},
		// 		// {height : 200, width : 200},
		// 		// {height : 200, width : 200},
		// 		// {height : 400 - 200, width : 580 - 10},
		// 		// {height : 600, width : 400},
		// 		// {height : 400 + 100, width : 580},
		// 		// {height : 600, width : 300},
		// 	]
		// },
	};

	// console.log(
	// 	window.getComputedStyle(body[0], null).getPropertyValue("width")
	// );
	// console.log("LimberGridView", LimberGridView);
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
		return document.getElementById(
			"limber-grid-view-debug-unmerged-rect-" + id
		);
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
};
