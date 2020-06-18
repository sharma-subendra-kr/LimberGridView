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

import {
	getPlainFrom4Points,
	isValidPlane,
	getLines,
	getMarginAtPoint,
	arePlainsIdentical,
	sortPlainsByArea,
	sortPlainsByDepth,
	sortPlainsByHeight,
	arePlainsSame,
} from "../utils/essentials";
import publicConstants from "../../constants/publicConstants";
import privateConstants from "../../constants/privateConstants";
import { positionData } from "../../variables/essentials";
import e from "../../variables/elements";

export const doRectsOverlap = (rectA, rectB) => {
	// lt: left top
	// rt: right top
	const tlA = { x: rectA.x, y: rectA.y };
	const brA = { x: rectA.x + rectA.width, y: rectA.y + rectA.height };
	const tlB = { x: rectB.x, y: rectB.y };
	const brB = { x: rectB.x + rectB.width, y: rectB.y + rectB.height };

	if (tlA.x >= brB.x || tlB.x >= brA.x) {
		return false;
	}

	if (tlA.y >= brB.y || tlB.y >= brA.y) {
		return false;
	}

	return true;
};

export const doRectsTouch = (rectA, rectB) => {
	// lt: left top
	// rt: right top
	const tlA = { x: rectA.x, y: rectA.y };
	const brA = { x: rectA.x + rectA.width, y: rectA.y + rectA.height };
	const tlB = { x: rectB.x, y: rectB.y };
	const brB = { x: rectB.x + rectB.width, y: rectB.y + rectB.height };

	if (tlA.x > brB.x || tlB.x > brA.x) {
		return false;
	}

	if (tlA.y > brB.y || tlB.y > brA.y) {
		return false;
	}

	if (doRectsOverlap(rectA, rectB) === false) return true;

	return false;
};

export const subtractRect = (rectA, rectB) => {
	// gives the non overlaping free spaces in rectA

	if (!doRectsOverlap(rectA, rectB)) {
		return null;
	}

	const rectACo = getCoordinates(rectA);
	const rectBCo = getCoordinates(rectB);

	/*
		____|_______________|___
		|	|				|	|
	____|___|_______________|___|____
		|	|				|	|
		|	|				|	|
		|	|				|	|
		|	|				|	|
	____|___|_______________|___|___
		|	|				|	|
		|___|_______________|___|
			|				|
		
	*/
	const subRects = {
		subRectT: {
			tl: rectACo.tl,
			tr: rectACo.tr,
			br: { x: rectACo.tr.x, y: rectBCo.tr.y },
			bl: { x: rectACo.tl.x, y: rectBCo.tl.y },
		},
		subRectR: {
			tl: { x: rectBCo.tr.x, y: rectACo.tr.y },
			tr: rectACo.tr,
			br: rectACo.br,
			bl: { x: rectBCo.br.x, y: rectACo.br.y },
		},
		subRectB: {
			tl: { x: rectACo.bl.x, y: rectBCo.bl.y },
			tr: { x: rectACo.br.x, y: rectBCo.br.y },
			br: rectACo.br,
			bl: rectACo.bl,
		},
		subRectL: {
			tl: rectACo.tl,
			tr: { x: rectBCo.tl.x, y: rectACo.tl.y },
			br: { x: rectBCo.bl.x, y: rectACo.bl.y },
			bl: rectACo.bl,
		},
	};

	const keys = Object.keys(subRects);
	for (let i = 0; i < keys.length; i++) {
		if (!isValidSubRectangle(subRects[keys[i]])) {
			delete subRects[keys[i]];
		}
	}

	const rects = {};
	let r1, r2, r3;
	if (subRects.subRectT && subRects.subRectR) {
		r1 = {
			tl: subRects.subRectT.tl,
			tr: subRects.subRectR.tl,
			br: { x: subRects.subRectR.tl.x, y: subRects.subRectT.bl.y },
			bl: subRects.subRectT.bl,
		};
		r2 = {
			tl: subRects.subRectR.tl,
			tr: subRects.subRectR.tr,
			br: subRects.subRectT.br,
			bl: { x: subRects.subRectR.tl.x, y: subRects.subRectT.bl.y },
		};
		r3 = {
			tl: { x: subRects.subRectR.tl.x, y: subRects.subRectT.bl.y },
			tr: subRects.subRectT.br,
			br: subRects.subRectR.br,
			bl: subRects.subRectR.bl,
		};
		rects[`${r1.tl}${r1.tr}${r1.br}${r1.bl}`] = r1;
		rects[`${r2.tl}${r2.tr}${r2.br}${r2.bl}`] = r2;
		rects[`${r3.tl}${r3.tr}${r3.br}${r3.bl}`] = r3;
	}

	if (subRects.subRectR && subRects.subRectB) {
		r1 = {
			tl: subRects.subRectR.tl,
			tr: subRects.subRectR.tr,
			br: subRects.subRectB.tr,
			bl: { x: subRects.subRectR.bl.x, y: subRects.subRectB.tl.y },
		};
		r2 = {
			tl: { x: subRects.subRectR.bl.x, y: subRects.subRectB.tl.y },
			tr: subRects.subRectB.tr,
			br: subRects.subRectB.br,
			bl: subRects.subRectR.bl,
		};
		r3 = {
			tl: subRects.subRectB.tl,
			tr: { x: subRects.subRectR.tl.x, y: subRects.subRectT.bl.y },
			br: subRects.subRectR.bl,
			bl: subRects.subRectB.bl,
		};
		rects[`${r1.tl}${r1.tr}${r1.br}${r1.bl}`] = r1;
		rects[`${r2.tl}${r2.tr}${r2.br}${r2.bl}`] = r2;
		rects[`${r3.tl}${r3.tr}${r3.br}${r3.bl}`] = r3;
	}

	if (subRects.subRectB && subRects.subRectL) {
		r1 = {
			tl: subRects.subRectL.tl,
			tr: subRects.subRectL.tr,
			br: { x: subRects.subRectL.tr.x, y: subRects.subRectB.tr.y },
			bl: subRects.subRectB.tl,
		};
		r2 = {
			tl: subRects.subRectB.tl,
			tr: { x: subRects.subRectL.tr.x, y: subRects.subRectB.tr.y },
			br: subRects.subRectL.br,
			bl: subRects.subRectB.bl,
		};
		r3 = {
			tl: { x: subRects.subRectL.tr.x, y: subRects.subRectB.tr.y },
			tr: subRects.subRectB.tr,
			br: subRects.subRectB.br,
			bl: subRects.subRectL.br,
		};
		rects[`${r1.tl}${r1.tr}${r1.br}${r1.bl}`] = r1;
		rects[`${r2.tl}${r2.tr}${r2.br}${r2.bl}`] = r2;
		rects[`${r3.tl}${r3.tr}${r3.br}${r3.bl}`] = r3;
	}

	if (subRects.subRectL && subRects.subRectT) {
		r1 = {
			tl: subRects.subRectT.bl,
			tr: { x: subRects.subRectL.tr.x, y: subRects.subRectT.bl.y },
			br: subRects.subRectL.bl,
			bl: subRects.subRectL.br,
		};
		r2 = {
			tl: subRects.subRectT.tl,
			tr: subRects.subRectL.tr,
			br: { x: subRects.subRectL.tr.x, y: subRects.subRectT.bl.y },
			bl: subRects.subRectT.bl,
		};
		r3 = {
			tl: subRects.subRectL.tr,
			tr: subRects.subRectT.tr,
			br: subRects.subRectT.br,
			bl: { x: subRects.subRectL.tr.x, y: subRects.subRectT.bl.y },
		};
		rects[`${r1.tl}${r1.tr}${r1.br}${r1.bl}`] = r1;
		rects[`${r2.tl}${r2.tr}${r2.br}${r2.bl}`] = r2;
		rects[`${r3.tl}${r3.tr}${r3.br}${r3.bl}`] = r3;
	}

	return Object.values(rects);
};

export const isValidSubRectangle = function(rect) {
	let top, right, bottom, left;
	top = rect.tr.x - rect.tl.x;
	right = rect.br.y - rect.tr.y;
	bottom = rect.br.x - rect.bl.x;
	left = rect.bl.y - rect.tl.y;

	if (top <= 0 || right <= 0 || bottom <= 0 || left <= 0) {
		return false;
	}
	return true;
};

export const getCoordinates = function(rect) {
	const tl = { x: rect.x, y: rect.y };
	const tr = { x: rect.x + rect.width, y: rect.y };
	const br = { x: rect.x + rect.width, y: rect.y + rect.height };
	const bl = { x: rect.x, y: rect.y + rect.height };

	return { tl, tr, br, bl };
};
