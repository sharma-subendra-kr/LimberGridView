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

import publicConstants from "../../constants/publicConstants";
import privateConstants from "../../constants/privateConstants";

let isMobileFunction;

export const emptyObject = function (obj) {
	let keys = Object.keys(obj);
	let length = keys.length;
	for (let i = 0; i < length; i++) {
		delete obj[keys[i]];
	}
};

export let isMobile = function () {
	if (isMobileFunction) {
		return isMobileFunction();
	}

	// production
	return window.matchMedia(
		"only screen and (max-width: 1033px) and (min-width : 1px)"
	).matches;
	// production END
	// return window.matchMedia("only screen and (max-width: 900px) and (min-width : 1px)").matches;
	// return false;
	// return true;
};

export const setIsMobileFunction = function (f) {
	isMobileFunction = f;
};

export const fixTo = (num, to = 6) => {
	return Math.trunc(num * Math.pow(10, to)) / Math.pow(10, to);
};
