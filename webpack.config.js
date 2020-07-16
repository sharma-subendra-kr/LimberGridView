/*

This is a release of LimberGridView 0.0.0, brought to you by Subendra Kumar Sharma.
This software is released under the GNU General Public License version 3, or (at your option) any later version.

LimberGridView, a powerful JavaScript Libary that gives you flexible, movable, resizable(any size) and auto-arranging grids. 

Copyright © 2018-2020, Subendra Kumar Sharma. All Rights reserved. (sharma.subendra.kr@gmail.com, sharma.subendrakr@yahoo.com)

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

*/

var fs = require("fs");
var path = require("path");

var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var miniCssExtractPlugin = new MiniCssExtractPlugin({ filename: "limberGridView-" + process.env.VERSION  + ".css" });
var WebpackNotifierPlugin = require("webpack-notifier");
var webpackNotifierPlugin = new WebpackNotifierPlugin({
    title: "LimberGridView",
    alwaysNotify: true,
});

module.exports = {
    mode: process.env.NODE_ENV === "development" ? "development" : "production",
    devtool:
        process.env.NODE_ENV === "development"
            ? "inline-source-map"
            : "source-map",
    entry: __dirname + "/src/index.js",
    optimization: {
        minimize: process.env.MINIMIZE === "true" ? true : false
    },
    output: {
        path: process.env.NODE_ENV === "development" ? __dirname + "/public/assets" : __dirname + "/dist",
        publicPath: "assets",
        filename: "limberGridView-" + process.env.VERSION  + ".js",
        // library: "LimberGridView",
        // libraryTarget: "umd"
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
    plugins: [miniCssExtractPlugin, webpackNotifierPlugin],
    resolve: {
        alias: {
            src: path.resolve(__dirname, "src/"),
        },
    },
};
