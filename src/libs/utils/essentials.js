/*

This is a release of LimberGridView 0.0.0, brought to you by Subendra Kumar Sharma.
This software is released under the GNU General Public License version 3, or (at your option) any later version.

LimberGridView, a powerful JavaScript Libary that gives you flexible, movable, resizable(any size) and auto-arranging grids. 

Copyright (c) 2018, Subendra Kumar Sharma. All Rights reserved. (sharma.subendra.kr@gmail.com, sharma.subendrakr@yahoo.com)

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

import publicConstants from "../../constants/publicConstants";
import { positionData } from "../../variables/essentials";

export const getPlainFrom4Points = function(pointsArray) {
	var minX = -1;
	var minY = -1;
	var maxX = -1;
	var maxY = -1;
	var length_0 = pointsArray.length;
	for (var i = 0; i < length_0; i++) {
		if (pointsArray[i][0] < minX || minX < 0) {
			minX = pointsArray[i][0];
		}
		if (pointsArray[i][0] > maxX) {
			maxX = pointsArray[i][0];
		}
		if (pointsArray[i][1] < minY || minY < 0) {
			minY = pointsArray[i][1];
		}
		if (pointsArray[i][1] > maxY) {
			maxY = pointsArray[i][1];
		}
	}

	var plane = {};
	plane.x = minX;
	plane.y = minY;
	plane.width = maxX - minX;
	plane.height = maxY - minY;

	return plane;
};

export const getCoordinates = function(item) {
	var itemTopLeft = [item.x, item.y];
	var itemTopRight = [item.x + item.width, item.y];
	var itemBottomLeft = [item.x, item.y + item.height];
	var itemBottomRight = [item.x + item.width, item.y + item.height];

	var itemCoordinatesArr = [
		itemTopLeft,
		itemTopRight,
		itemBottomRight,
		itemBottomLeft,
	];

	return itemCoordinatesArr;
};

export const getLines = function(item) {
	var itemTopLeft = JSON.parse(JSON.stringify([item.x, item.y]));
	var itemTopRight = JSON.parse(
		JSON.stringify([item.x + item.width, item.y])
	);
	var itemBottomLeft = JSON.parse(
		JSON.stringify([item.x, item.y + item.height])
	);
	var itemBottomRight = JSON.parse(
		JSON.stringify([item.x + item.width, item.y + item.height])
	);

	var topLine = [itemTopLeft, itemTopRight];
	var rightLine = [itemTopRight, itemBottomRight];
	var bottomLine = [itemBottomLeft, itemBottomRight];
	var leftLine = [itemTopLeft, itemBottomLeft];

	var allLines = [topLine, rightLine, bottomLine, leftLine];

	return allLines;
};

export const arePlainsSame = function(A, B) {
	if (
		A.x == B.x &&
		A.y == B.y &&
		A.width == B.width &&
		A.height == B.height
	) {
		return true;
	} else {
		return false;
	}
};

export const arePlainsIdentical = function(A, B) {
	if (A.width == B.width && A.height == B.height) {
		return true;
	} else {
		return false;
	}
};

export const isValidPlane = function(plane) {
	if (plane.x >= 0 && plane.y >= 0 && plane.width > 0 && plane.height > 0) {
		return true;
	} else {
		return false;
	}
};

export const sortPlainsByArea = function(planes, order = "dec") {
	if (order == "asc") {
		planes.sort(function(a, b) {
			return (
				(a.x + a.width) * (a.y + a.height) -
				(b.x + b.width) * (b.y + b.height)
			);
		});
	} else {
		planes.sort(function(a, b) {
			return (
				(b.x + b.width) * (b.y + b.height) -
				(a.x + a.width) * (a.y + a.height)
			);
		});
	}

	return planes;
};

export const sortPlainsByHeight = function(planes, order = "dec") {
	if (order == "asc") {
		planes.sort(function(a, b) {
			return a.height - b.height;
		});
	} else {
		planes.sort(function(a, b) {
			return b.height - a.height;
		});
	}

	return planes;
};

export const sortPlainsByDepth = function(planes, order = "dec") {
	if (order == "asc") {
		planes.sort(function(a, b) {
			return a.y + a.height - (b.y + b.height);
		});
	} else {
		planes.sort(function(a, b) {
			return b.y + b.height - (a.y + a.height);
		});
	}

	return planes;
};

export const divideEqualNumber = function(a, DEFAULT = 0) {
	var res = a / a;
	if (res == NaN) {
		return 0;
	} else {
		return 1;
	}
};

export const getMarginAtPoint = function(a) {
	if (a == 0) {
		return 0;
	} else {
		return publicConstants.MARGIN;
	}
};

export const getRowSequence = function(serialize) {
	var rows = {};
	var rowsArr = [];
	var columns = {};

	var length_0 = positionData.length;

	for (var i = 0; i < length_0; i++) {
		if (rows.hasOwnProperty(positionData[i].y)) {
			rows[positionData[i].y].push(i);
		} else {
			rows[positionData[i].y] = [];
			rowsArr.push(Number(positionData[i].y));
			rows[positionData[i].y].push(i);
		}
	}

	rowsArr.sort(function(a, b) {
		return a - b;
	});

	var length_0 = rowsArr.length;
	for (var i = 0; i < length_0; i++) {
		rows[rowsArr[i]].sort(
			function(a, b) {
				return positionData[a].x - positionData[b].x;
			}.bind(this)
		);
	}

	if (serialize != true) {
		return { rowOrder: rowsArr, rows: rows };
	} else {
		var arr = [];
		var map = {};
		var count = 0;

		var length_0 = rowsArr.length;
		for (var i = 0; i < length_0; i++) {
			var length_1 = rows[rowsArr[i]].length;
			for (var j = 0; j < length_1; j++) {
				arr.push(rows[rowsArr[i]][j]);
				map[rows[rowsArr[i]][j]] = count++;
			}
		}

		return { list: arr, map: map };
	}
};
