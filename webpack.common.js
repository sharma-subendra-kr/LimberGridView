/*

LimberGridView, a powerful JavaScript Libary that gives you movable, resizable(any size) and auto-arranging grids.

Copyright © 2018-2020 Subendra Kumar Sharma. All Rights reserved. (jobs.sharma.subendra.kr@gmail.com)

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

const fs = require("fs");
const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const miniCssExtractPlugin = new MiniCssExtractPlugin({
	filename: "index.css",
});
const WebpackNotifierPlugin = require("webpack-notifier");
const webpackNotifierPlugin = new WebpackNotifierPlugin({
	title: "LimberGridView",
	alwaysNotify: true,
});
const Webpack = require("webpack");
const webpackBannerPlugin = new Webpack.BannerPlugin({
	banner: fs.readFileSync("./license_header", "utf8"),
	raw: true,
});
const CleanTerminalPlugin = require("clean-terminal-webpack-plugin");
const cleanTerminalPlugin = new CleanTerminalPlugin();

module.exports = {
	entry: __dirname + "/src/index.js",
	optimization: {
		minimize: process.env.MINIMIZE === "true",
	},
	output: {
		publicPath: "assets",
		library: "LimberGridView",
		libraryTarget: "umd",
	},
	devServer: {
		inline: true,
		contentBase: "./public",
		port: process.env.PORT,
		host: "0.0.0.0",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: "babel-loader",
			},
			{
				test: /\.json$/,
				exclude: /node_modules/,
				loader: "json-loader",
			},
			{
				test: /\.(sc|c)ss$/,
				exclude: /node_modules/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							hmr: process.env.NODE_ENV === "development",
							reloadAll: true,
						},
					},
					"css-loader",
					"postcss-loader",
					"sass-loader",
				],
			},
		],
	},
	plugins: [
		miniCssExtractPlugin,
		webpackNotifierPlugin,
		webpackBannerPlugin,
		cleanTerminalPlugin,
	],
	resolve: {
		alias: {
			src: path.resolve(__dirname, "src/"),
		},
	},
};
