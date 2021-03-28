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

export const emptyObject = function (obj) {
	const keys = Object.keys(obj);
	const length = keys.length;
	for (let i = 0; i < length; i++) {
		delete obj[keys[i]];
	}
};

export const isMobile = function (context) {
	const isMobileFunction = context.options.isMobileCheck;

	if (isMobileFunction) {
		return isMobileFunction();
	}

	return (
		window.matchMedia(
			"only screen and (max-width: 980px) and (min-width : 1px) and (orientation: portrait)"
		).matches ||
		window.matchMedia(
			"only screen and (max-width: 979px) and (min-width : 1px) and (orientation: landscape)"
		).matches
	);
};

export const fixTo = (num, to = 6) => {
	return Math.trunc(num * Math.pow(10, to)) / Math.pow(10, to);
};

export const getRandomString = (len = 22) => {
	const alpNum = "0123456789abcdefghijklmnopqrstuvwxyz";

	const arr = new Array(len);
	for (let i = 0; i < len; i++) {
		arr[i] = alpNum[Math.floor(Math.random() * 36)];
	}
	return arr.join("");
};

export const getItemDimenWithMargin = (MARGIN, item) => {
	return {
		x: item.x - MARGIN,
		y: item.y - MARGIN,
		width: item.width + MARGIN * 2,
		height: item.height + MARGIN * 2,
	};
};

export const sleep = (ms) => {
	return new Promise((resolve, reject) => {
		setTimeout(resolve, ms);
	});
};

export const sanitizeNumberFloor = (num) => {
	const decimalPart = num % 1;
	const integerPart = Math.trunc(num);
	if (decimalPart <= 0.25) {
		return integerPart;
	} else if (decimalPart <= 0.5) {
		return integerPart + 0.25;
	} else if (decimalPart <= 0.75) {
		return integerPart + 0.5;
	} else if (decimalPart <= 0.99) {
		return integerPart + 0.75;
	}
	return integerPart - 0.25;
};

export const sanitizeNumberCeil = (num) => {
	const decimalPart = num % 1;
	const integerPart = Math.trunc(num);
	if (decimalPart <= 0.25) {
		return integerPart + 0.25;
	} else if (decimalPart <= 0.5) {
		return integerPart + 0.5;
	} else if (decimalPart <= 0.75) {
		return integerPart + 0.75;
	} else if (decimalPart <= 0.99) {
		return integerPart + 1;
	}
	return integerPart + 0.25;
};

export const sanitizeDimension = (item) => {
	item.x = sanitizeNumberCeil(item.x);
	item.y = sanitizeNumberCeil(item.y);
	item.width = sanitizeNumberFloor(item.width);
	item.height = sanitizeNumberFloor(item.height);
};
