"use strict";

if (process.env.NODE_ENV === "production") {
	module.exports = require("./umd/limber.grid.view.production.min.js");
}else{
	module.exports = require("./umd/limber.grid.view.development.js");
}
