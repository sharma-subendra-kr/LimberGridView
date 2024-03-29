/*

LimberGridView, a powerful JavaScript Library using Computational Geometry to render movable, dynamically resizable, and auto-arranging grids.

Copyright © 2018-2022 Subendra Kumar Sharma. All rights reserved. (jobs.sharma.subendra.kr@gmail.com)

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

import { getLimberGridViewBoundingClientRect } from "../../store/variables/essentials";

export const isMobile = function (context, boundingClientRect) {
	const isMobileFunction = context.options.isMobileCheck;

	if (isMobileFunction) {
		return isMobileFunction(
			boundingClientRect || getLimberGridViewBoundingClientRect(context)
		);
	}

	boundingClientRect =
		boundingClientRect || getLimberGridViewBoundingClientRect(context);

	return (
		boundingClientRect.width < 980 ||
		(window.innerHeight > window.innerWidth && boundingClientRect.width < 981)
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

export const sleep = (ms) => {
	return new Promise((resolve, reject) => {
		setTimeout(resolve, ms);
	});
};
