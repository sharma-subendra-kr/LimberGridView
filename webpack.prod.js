/*

LimberGridView, a powerful JavaScript Library using Computational Geometry to render movable, dynamically resizable, and auto-arranging grids.

Copyright © 2018-2021 Subendra Kumar Sharma. All rights reserved. (jobs.sharma.subendra.kr@gmail.com)

This file is part of LimberGridView.

LimberGridView is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

LimberGridView is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with LimberGridView.  If not, see <https://www.gnu.org/licenses/>.

Written by Subendra Kumar Sharma.

*/

const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
	mode: "production",
	devtool: "none",
	output: {
		path: __dirname + "/dist/umd/",
		filename:
			process.env.MINIMIZE === "true"
				? "limber.grid.view.production.min.js"
				: "limber.grid.view.development.js",
	},
	externals: {
		rtreejs: {
			commonjs: "rtreejs",
			commonjs2: "rtreejs",
			amd: "rtreejs",
			root: "rtreejs",
		},
		Stack: {
			commonjs: "Stack",
			commonjs2: "Stack",
			amd: "Stack",
			root: "Stack",
		},
		"undo-redo": {
			commonjs: "undo-redo",
			commonjs2: "undo-redo",
			amd: "undo-redo",
			root: "undo-redo",
		},
		"resize-observer-polyfill": {
			commonjs: "resize-observer-polyfill",
			commonjs2: "resize-observer-polyfill",
			amd: "resize-observer-polyfill",
			root: "resize-observer-polyfill",
		},
	},
});
