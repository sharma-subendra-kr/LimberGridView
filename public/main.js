window.onload = function() {
	main();
};

var main = function() {
	var body = document.getElementsByTagName("body");
	var $toggleModeButton = document.getElementsByClassName(
		"toggleAddOrCutSpaceButton"
	);
	var $addButtonIcon = document.getElementsByClassName("addButtonIcon");

	var onToggleModeClick = function(event) {
		console.log(event);
		if (event.currentTarget.classList.contains("activateAddMode")) {
			event.currentTarget.classList.remove(
				"toggleAddOrCutSpaceButtonActive"
			);
			event.currentTarget.parentNode.childNodes[1].classList.add(
				"toggleAddOrCutSpaceButtonActive"
			);
			window.limberGridView.setAddOrCutSpace("ADD");
		} else if (
			event.currentTarget.classList.contains("activateCutSpaceMode")
		) {
			event.currentTarget.classList.remove(
				"toggleAddOrCutSpaceButtonActive"
			);
			event.currentTarget.parentNode.childNodes[3].classList.add(
				"toggleAddOrCutSpaceButtonActive"
			);
			window.limberGridView.setAddOrCutSpace("CUTSPACE");
		}
	};

	var onAddButtonIconClick = function(event) {
		console.log(event);
		window.limberGridView.addItems(1);
	};

	$toggleModeButton[0].addEventListener("click", onToggleModeClick);
	$toggleModeButton[1].addEventListener("click", onToggleModeClick);
	$addButtonIcon[0].addEventListener("click", onAddButtonIconClick);

	var charts = [0, 1, 2, 0, 1, 2, 0, 1, 2, 0];

	var layoutHtml =
		'<div class = "itemLayout"><span>Title</span><div class = "itemDropDownButton">:::<div class = "itemDropDown"><div class = "itemDropDownItem">add</div><div class = "itemDropDownItem">remove</div></div></div></div>';

	var kpi = function(width, height) {
		var rand = Math.random();
		if (rand > 0.5) {
			var stockUpDown = "stockUp";
		} else {
			var stockUpDown = "stockDown";
		}

		var div = document.createElement("div");
		div.style.width = width + "px";
		div.style.height = height + "px";
		div.classList.add("kpi");

		var divLeft = document.createElement("div");
		divLeft.style.width = width * 0.25 + "px";
		divLeft.style.height = height + "px";
		divLeft.classList.add("kpiLeft");

		var divLeftArrow = document.createElement("div");
		divLeftArrow.classList.add(stockUpDown);

		divLeft.appendChild(divLeftArrow);
		div.appendChild(divLeft);

		var divRight = document.createElement("div");
		divRight.style.width = width * 0.75 + "px";
		divRight.style.height = height + "px";
		divRight.classList.add("kpiRight");

		var divRightTop = document.createElement("div");
		divRightTop.style.width = width * 0.75 + "px";
		divRightTop.style.height = height / 2 + "px";
		divRightTop.classList.add("kpiRightTop");
		divRightTop.innerHTML = "FAKESTOK";

		var divRightBottom = document.createElement("div");
		divRightBottom.style.width = width * 0.75 + "px";
		divRightBottom.style.height = height / 2 + "px";
		divRightBottom.classList.add("kpiRightBottom");
		divRightBottom.innerHTML = rand.toFixed(2);

		divRight.appendChild(divRightTop);
		divRight.appendChild(divRightBottom);
		div.appendChild(divRight);

		return div;
	};

	var piechart = function(width, height) {
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
			.value(function(d) {
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
			.attr(
				"transform",
				"translate(" + margin.left + "," + margin.top + ")"
			)
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
			.style("fill", function(d) {
				return color(d.data);
			});

		// g2.append("text")
		// 	.attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
		// 	.attr("dy", ".35em")
		// 	.text(function(d) { return d.data; })
		// ;

		return div;
	};

	var barchart = function(width, height) {
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

		var x = d3
			.scaleBand()
			.rangeRound([0, chartWidth])
			.paddingInner(0.1);
		var y = d3.scaleLinear().rangeRound([chartHeight, 0]);
		var z = d3.scaleOrdinal().range(["#992600", "#004d00", "#003366"]);
		x.domain(
			data.map(function(d) {
				return d.label;
			})
		);
		y.domain([
			0,
			d3.max(data, function(d) {
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
			.attr(
				"transform",
				"translate(" + margin.left + "," + margin.top + ")"
			)
			.attr("width", chartWidth)
			.attr("height", chartHeight);
		g.selectAll(".bar")
			.data(data)
			.enter()
			.append("rect")
			.attr("class", "bar")
			.attr("x", function(d) {
				return x(d.label);
			})
			.attr("width", x.bandwidth())
			.attr("y", function(d) {
				return y(d.value);
			})
			.attr("height", function(d) {
				return chartHeight - y(d.value);
			})
			.attr("fill", function(d) {
				return z(d.label);
			});

		g.append("g")
			.attr("transform", "translate(0," + chartHeight + ")")
			.call(d3.axisBottom(x));

		g.append("g").call(d3.axisLeft(y));

		return div;
	};

	function remove(event) {
		debugger;
		var index = event.currentTarget.attributes["data-index"].value;
		console.log(index);
		var indices = [index];
		indices.sort(function(a, b) {
			return Number(a) - Number(b);
		});
		var length_0 = indices.length - 1;
		for (var i = length_0; i >= 0; i--) {
			charts.splice(indices[i], 1);
		}
		window.limberGridView.removeItems(indices);
	}

	function add(event) {
		var index = event.currentTarget.attributes["data-index"].value;
		window.limberGridView.renderItems([index], false);
	}

	function getItemRenderDataCallback(index, width, height, processType) {
		console.log(index);
		console.log(width);
		console.log(height);
		console.log(processType);

		var div = document.createElement("div");
		div.style.width = width + "px";
		div.style.height = 25 + "px";
		div.classList.add("itemLayoutParent");
		div.innerHTML = layoutHtml;

		if (
			processType == "render" ||
			processType == "onDemand" ||
			processType == "removeItems" ||
			processType == "resizeItems"
		) {
			if (charts[index] == 0) {
				var chart = barchart(width, height - 25);
				div.appendChild(chart);
				// return div;
				return div.outerHTML;
			} else if (charts[index] == 1) {
				var chart = piechart(width, height - 25);
				div.appendChild(chart);
				// return div;
				return div.outerHTML;
			} else if (charts[index] == 2) {
				var chart = kpi(width, height - 25);
				div.appendChild(chart);
				// return div;
				return div.outerHTML;
			}
		} else if (
			processType == "addItems" ||
			processType == "addItemInteractive"
		) {
			if (index % 2 == 0) {
				charts.push(0);
			} else if (index % 3 == 0) {
				charts.push(2);
			} else {
				charts.push(1);
			}
			// return div;
			return div.outerHTML;
		}
	}

	var onItemClickCallback = function(event) {
		if (event.target.classList.contains("itemDropDownButton")) {
			event.target.childNodes[1].classList.toggle("itemDropDownActive");
		}

		if (event.target.classList.contains("itemDropDownItem")) {
			if (event.target.innerHTML == "add") {
				event.target.parentNode.classList.remove("itemDropDownActive");
				add(event);
			} else if (event.target.innerHTML == "remove") {
				event.target.parentNode.classList.remove("itemDropDownActive");
				remove(event);
			}
		}
	};

	var renderComplete = function() {
		console.log("renderComplete");
	};

	var itemsRenderComplete = function(indices, scale, processType) {
		console.log("itemsRenderComplete");
		console.log(event);
	};

	var resizeCompleteCallback = function(index, width, height) {
		console.log("resizeCompleteCallback");
		console.log(index);
		console.log(width);
		console.log(height);
	};

	var moveCompleteCallback = function(status, index, coordinatesOrEvent) {
		console.log("moveCompleteCallback");
		console.log(status);
		console.log(index);
		console.log(coordinatesOrEvent);
	};

	var addCompleteCallback = function(indices, width, height, processType) {
		console.log("addCompleteCallback");
		console.log(indices);
		console.log(width);
		console.log(height);
		console.log(processType);
	};

	var removeCompleteCallback = function(indices) {
		console.log("removeCompleteCallback");
		console.log(indices);
	};

	var obj = {
		el: "#limberGridViewImplement",
		editable: true,
		enableInteractiveAddAndCut: true,
		enableTouchInteraction: true,
		dataType: "string", // string or node
		autoArrange: false,
		reRenderOnResize: true,
		callbacks: {
			getItemRenderDataCallback: getItemRenderDataCallback,
			onItemClickCallback: onItemClickCallback,
			renderComplete: renderComplete,
			itemsRenderComplete: itemsRenderComplete,
			resizeCompleteCallback: resizeCompleteCallback,
			moveCompleteCallback: moveCompleteCallback,
			addCompleteCallback: addCompleteCallback,
			removeCompleteCallback: removeCompleteCallback,
		},
		// "{"gridHeight":561,"gridWidth":960,"margin":5,"initialPositionData":[{"x":519,"y":194,"height":218.1500000000001,"width":263},{"x":317,"y":6,"height":284,"width":191},{"x":0,"y":0,"height":134,"width":110},{"x":3,"y":146,"height":142,"width":306},{"x":149,"y":301,"height":194.92385786802032,"width":194.92385786802032},{"x":353,"y":300,"height":115.15000000000009,"width":110.76599999999996},{"x":2,"y":509,"height":194.92385786802032,"width":555.5329949238579},{"x":518,"y":9,"height":174,"width":159},{"x":4,"y":295,"height":112.46000000000004,"width":135},{"x":118,"y":1,"height":139,"width":149.152}]}"
		// "{"gridHeight":482,"gridWidth":999,"margin":3.830521472392638,"initialPositionData":[{"x":0,"y":0,"height":371.56058282208585,"width":506.3949386503067},{"x":512.1776649746192,"y":0,"height":202.84263959390861,"width":202.84263959390861},{"x":512.1776649746192,"y":207.91370558375635,"height":163.64677223926378,"width":199.53339570552146},{"x":720.0913705583756,"y":0,"height":374.625,"width":268.18323542944785},{"x":0,"y":383.17659057643795,"height":202.84263959390861,"width":202.84263959390861},{"x":207.91370558375635,"y":383.17659057643795,"height":202.84263959390861,"width":202.84263959390861},{"x":415.8274111675127,"y":383.17659057643795,"height":202.84263959390861,"width":578.1015228426396},{"x":0,"y":591.0902961601943,"height":608.5279187817258,"width":405.68527918781723},{"x":414.4624233128834,"y":594.4969325153374,"height":486.2310736196319,"width":552.2370874233128},{"x":0,"y":1208.197027498365,"height":438.1580291411043,"width":718.6058282208588}]}"

		initialGridData: {
			gridHeight: 482,
			gridWidth: 999,
			margin: 3.830521472392638,
			initialPositionData: [
				{
					x: 0 + 5,
					y: 0 + 5,
					height: 371.56058282208585 - 5,
					width: 506.3949386503067 - 5,
				},
				{
					x: 512.1776649746192,
					y: 0 + 5,
					height: 202.84263959390861 - 5,
					width: 202.84263959390861,
				},
				{
					x: 512.1776649746192,
					y: 207.91370558375635,
					height: 163.64677223926378,
					width: 199.53339570552146,
				},
				{
					x: 720.0913705583756,
					y: 0 + 5,
					height: 374.625 - 5,
					width: 268.18323542944785,
				},
				{
					x: 0 + 5,
					y: 383.17659057643795,
					height: 202.84263959390861,
					width: 202.84263959390861 - 5,
				},
				{
					x: 207.91370558375635,
					y: 383.17659057643795,
					height: 202.84263959390861,
					width: 202.84263959390861 + 100,
				},
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
			],
		},

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

	console.log(
		window.getComputedStyle(body[0], null).getPropertyValue("width")
	);

	window.limberGridView = new LimberGridView(obj);
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
	window.limberGridView.render();
};

// gridHeight : 624,
// gridWidth : 985,

// {x : 505, y: 0,  height : 200, width : 200},
// {x : 0, y: 0, height : 400, width : 500},
// {x : 505, y: 205,  height : 195, width : 200},
// {x : 0, y: 405,  height : 200, width : 200},
// {x : 710, y: 0,  height : 400, width : 280},
// {x : 410, y: 405,  height : 400 - 200, width : 580 - 10},
// {x : 0, y: 1215 + 150,  height : 600, width : 300},
// {x : 205, y: 405,  height : 200, width : 200},
// {x : 405, y: 810,  height : 400 + 100, width : 580},
// {x : 0, y: 610,  height : 600, width : 400},

// {height : 400, width : 500},
// {height : 200, width : 200},
// {height : 195, width : 200},
// {height : 400, width : 280},
// {height : 200, width : 200},
// {height : 200, width : 200},
// {height : 400 - 200, width : 580 - 10},
// {height : 600, width : 400},
// {height : 400 + 100, width : 580},
// {height : 600, width : 300},
