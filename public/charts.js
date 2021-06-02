// eslint-disable-next-line no-unused-vars
const kpi = function (width, height) {
	const rand = Math.random();
	let stockUpDown;
	if (rand > 0.5) {
		stockUpDown = "stock-up";
	} else {
		stockUpDown = "stock-down";
	}

	const div = document.createElement("div");
	div.style.width = width + "px";
	div.style.height = height + "px";
	div.classList.add("kpi");

	const divLeft = document.createElement("div");
	divLeft.style.width = width * 0.25 + "px";
	divLeft.style.height = height + "px";
	divLeft.classList.add("kpi-left");

	const divLeftArrow = document.createElement("div");
	divLeftArrow.classList.add(stockUpDown);

	divLeft.appendChild(divLeftArrow);
	div.appendChild(divLeft);

	const divRight = document.createElement("div");
	divRight.style.width = width * 0.75 + "px";
	divRight.style.height = height + "px";
	divRight.classList.add("kpi-right");

	const divRightTop = document.createElement("div");
	divRightTop.style.width = width * 0.75 + "px";
	divRightTop.style.height = height / 2 + "px";
	divRightTop.classList.add("kpi-right-top");
	divRightTop.innerHTML = "FAKESTOK";

	const divRightBottom = document.createElement("div");
	divRightBottom.style.width = width * 0.75 + "px";
	divRightBottom.style.height = height / 2 + "px";
	divRightBottom.classList.add("kpi-right-bottom");
	divRightBottom.innerHTML = rand.toFixed(2);

	divRight.appendChild(divRightTop);
	divRight.appendChild(divRightBottom);
	div.appendChild(divRight);

	return div;
};

// eslint-disable-next-line no-unused-vars
const piechart = function (width, height) {
	const data = [10, 20, 100];

	const margin = { top: 20, right: 20, bottom: 30, left: 40 };
	const chartWidth = width - margin.left - margin.right;
	const chartHeight = height - margin.top - margin.bottom;

	const radius = Math.min(chartWidth, chartHeight) / 2;

	// eslint-disable-next-line no-undef
	const color = d3.scaleOrdinal().range(["#ff6600", "#ffbf00", "#009933"]);

	// eslint-disable-next-line no-undef
	const arc = d3
		.arc()
		.outerRadius(radius - 10)
		.innerRadius(0);

	// eslint-disable-next-line no-undef
	// const labelArc = d3
	// 	.arc()
	// 	.outerRadius(radius - 40)
	// 	.innerRadius(radius - 40);

	// eslint-disable-next-line no-undef
	const pie = d3
		.pie()
		.sort(null)
		.value(function (d) {
			return d;
		});

	const div = document.createElement("div");
	div.style.width = width + "px";
	div.style.height = height + "px";

	// eslint-disable-next-line no-undef
	const svg = d3
		.select(div)
		.append("svg")
		.attr("width", width)
		.attr("height", height);
	const gForMargin = svg
		.append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")")
		.attr("width", chartWidth)
		.attr("height", chartHeight);
	const g = gForMargin
		.append("g")
		.attr(
			"transform",
			"translate(" + chartWidth / 2 + "," + chartHeight / 2 + ")"
		);
	const g2 = g
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

// eslint-disable-next-line no-undef, no-unused-vars
const barchart = function (width, height) {
	const data = [
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

	const margin = { top: 20, right: 20, bottom: 30, left: 40 };
	const chartWidth = width - margin.left - margin.right;
	const chartHeight = height - margin.top - margin.bottom;

	// eslint-disable-next-line no-undef
	const x = d3.scaleBand().rangeRound([0, chartWidth]).paddingInner(0.1);
	// eslint-disable-next-line no-undef
	const y = d3.scaleLinear().rangeRound([chartHeight, 0]);
	// eslint-disable-next-line no-undef
	const z = d3.scaleOrdinal().range(["#992600", "#004d00", "#003366"]);
	x.domain(
		data.map(function (d) {
			return d.label;
		})
	);
	y.domain([
		0,
		// eslint-disable-next-line no-undef
		d3.max(data, function (d) {
			return d.value;
		}),
	]);

	const div = document.createElement("div");
	div.style.width = width + "px";
	div.style.height = height + "px";

	// eslint-disable-next-line no-undef
	const svg = d3
		.select(div)
		.append("svg")
		.attr("width", width)
		.attr("height", height);
	const g = svg
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
		// eslint-disable-next-line no-undef
		.call(d3.axisBottom(x));

	// eslint-disable-next-line no-undef
	g.append("g").call(d3.axisLeft(y));

	return div;
};
