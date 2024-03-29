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

import { getHypotenuseSquared } from "../geometry/geometry";

export const isPointInsideRect = (rect, point) => {
	if (
		point.x > rect.x1 &&
		point.x < rect.x2 &&
		point.y > rect.y1 &&
		point.y < rect.y2
	) {
		return true;
	}
};

export const isPointInsideOrTouchRect = (rect, point) => {
	if (
		point.x >= rect.x1 &&
		point.x <= rect.x2 &&
		point.y >= rect.y1 &&
		point.y <= rect.y2
	) {
		return true;
	}
};

export const doRectsOverlap = (rectA, rectB) => {
	if (
		isNaN(rectA.x1) ||
		isNaN(rectA.y1) ||
		isNaN(rectA.x2) ||
		isNaN(rectA.y2) ||
		isNaN(rectB.x1) ||
		isNaN(rectB.y1) ||
		isNaN(rectB.x2) ||
		isNaN(rectB.y2)
	) {
		return false;
	}

	if (
		rectA.x1 >= rectB.x2 ||
		rectB.x1 >= rectA.x2 ||
		rectA.y1 >= rectB.y2 ||
		rectB.y1 >= rectA.y2
	) {
		return false;
	}
	return true;
};

export const doRectsOverlapOrTouch = (rectA, rectB) => {
	if (
		isNaN(rectA.x1) ||
		isNaN(rectA.y1) ||
		isNaN(rectA.x2) ||
		isNaN(rectA.y2) ||
		isNaN(rectB.x1) ||
		isNaN(rectB.y1) ||
		isNaN(rectB.x2) ||
		isNaN(rectB.y2)
	) {
		return false;
	}

	if (
		rectA.x1 > rectB.x2 ||
		rectB.x1 > rectA.x2 ||
		rectA.y1 > rectB.y2 ||
		rectB.y1 > rectA.y2
	) {
		return false;
	}
	return true;
};

export const doRectsOnlyTouch = (rectA, rectB) => {
	if (
		isNaN(rectA.x1) ||
		isNaN(rectA.y1) ||
		isNaN(rectA.x2) ||
		isNaN(rectA.y2) ||
		isNaN(rectB.x1) ||
		isNaN(rectB.y1) ||
		isNaN(rectB.x2) ||
		isNaN(rectB.y2)
	) {
		return false;
	}

	if (
		rectA.x1 > rectB.x2 ||
		rectB.x1 > rectA.x2 ||
		rectA.y1 > rectB.y2 ||
		rectB.y1 > rectA.y2
	) {
		return false;
	}

	if (doRectsOverlap(rectA, rectB) === false) return true;
};

export const subtractRect = (rectA, rectB) => {
	// gives the non overlapping free spaces in rectA
	if (!doRectsOverlap(rectA, rectB)) {
		return [];
	}

	/*

	       tl        tm         tr
        ____|_______________|___
        |   |               |   |
    ____|___|_______________|___|____
        |   |               |   |
        |   |               |   |
lm      |   |               |   |      rm
        |   |               |   |
    ____|___|_______________|___|___
        |   |               |   |
        |___|_______________|___|
            |               |
         bl        bm         br

	*/
	const subRects = {
		subRectT: {
			x1: rectA.x1,
			x2: rectA.x2,
			y1: rectA.y1,
			y2: rectB.y1,
		},
		subRectR: {
			x1: rectB.x2,
			x2: rectA.x2,
			y1: rectA.y1,
			y2: rectA.y2,
		},
		subRectB: {
			x1: rectA.x1,
			x2: rectA.x2,
			y1: rectB.y2,
			y2: rectA.y2,
		},
		subRectL: {
			x1: rectA.x1,
			x2: rectB.x1,
			y1: rectA.y1,
			y2: rectA.y2,
		},
	};

	for (const key in subRects) {
		if (!isValidRect(subRects[key])) {
			subRects[key] = undefined;
		}
	}

	let tl, tm, tr, rm, br, bm, bl, lm;
	let tlNtm, tmNtr, trNrm, rmNbr, brNbm, bmNbl, blNlm, lmNtl;
	if (subRects.subRectT && subRects.subRectR) {
		tlNtm = {
			x1: subRects.subRectT.x1,
			x2: subRects.subRectR.x1,
			y1: subRects.subRectT.y1,
			y2: subRects.subRectT.y2,
		};
		tr = {
			x1: subRects.subRectR.x1,
			x2: subRects.subRectR.x2,
			y1: subRects.subRectR.y1,
			y2: subRects.subRectT.y2,
		};
		rmNbr = {
			x1: subRects.subRectR.x1,
			x2: subRects.subRectR.x2,
			y1: subRects.subRectT.y2,
			y2: subRects.subRectR.y2,
		};
	}

	if (subRects.subRectR && subRects.subRectB) {
		trNrm = {
			x1: subRects.subRectR.x1,
			x2: subRects.subRectR.x2,
			y1: subRects.subRectR.y1,
			y2: subRects.subRectB.y1,
		};
		br = {
			x1: subRects.subRectR.x1,
			x2: subRects.subRectR.x2,
			y1: subRects.subRectB.y1,
			y2: subRects.subRectR.y2,
		};
		bmNbl = {
			x1: subRects.subRectB.x1,
			x2: subRects.subRectR.x1,
			y1: subRects.subRectB.y1,
			y2: subRects.subRectR.y2,
		};
	}

	if (subRects.subRectB && subRects.subRectL) {
		lmNtl = {
			x1: subRects.subRectL.x1,
			x2: subRects.subRectL.x2,
			y1: subRects.subRectL.y1,
			y2: subRects.subRectB.y1,
		};
		bl = {
			x1: subRects.subRectB.x1,
			x2: subRects.subRectL.x2,
			y1: subRects.subRectB.y1,
			y2: subRects.subRectL.y2,
		};
		brNbm = {
			x1: subRects.subRectL.x2,
			x2: subRects.subRectB.x2,
			y1: subRects.subRectB.y1,
			y2: subRects.subRectB.y2,
		};
	}

	if (subRects.subRectL && subRects.subRectT) {
		blNlm = {
			x1: subRects.subRectL.x1,
			x2: subRects.subRectL.x2,
			y1: subRects.subRectT.y2,
			y2: subRects.subRectL.y2,
		};
		tl = {
			x1: subRects.subRectL.x1,
			x2: subRects.subRectL.x2,
			y1: subRects.subRectL.y1,
			y2: subRects.subRectT.y2,
		};
		tmNtr = {
			x1: subRects.subRectL.x2,
			x2: subRects.subRectT.x2,
			y1: subRects.subRectT.y1,
			y2: subRects.subRectT.y2,
		};
	}

	// eslint-disable-next-line prefer-const
	tm =
		horizontalSubtract(tlNtm, tl) ||
		horizontalSubtract(tmNtr, tr) ||
		tlNtm ||
		tmNtr;
	// eslint-disable-next-line prefer-const
	rm =
		verticalSubtract(trNrm, tr) ||
		verticalSubtract(rmNbr, br) ||
		trNrm ||
		rmNbr;
	// eslint-disable-next-line prefer-const
	bm =
		horizontalSubtract(brNbm, br) ||
		horizontalSubtract(bmNbl, bl) ||
		brNbm ||
		bmNbl;
	// eslint-disable-next-line prefer-const
	lm =
		verticalSubtract(blNlm, bl) ||
		verticalSubtract(lmNtl, tl) ||
		blNlm ||
		lmNtl;

	let rects = [tl, tm, tr, rm, br, bm, bl, lm];
	rects = rects.filter((o) => o);

	if (rects.length === 0) {
		for (const key in subRects) {
			if (subRects[key]) {
				rects.push(subRects[key]);
			}
		}
	}

	return rects;
};

const horizontalSubtract = (rectA, rectB) => {
	if (!rectA || !rectB) return undefined;

	/*
		Case I   
		____________________
		| A___              |
		||_B__|             |
		|___________________|

		Case II
		____________________
		| A            ____ |
		|             |_B__||
		|___________________|
	*/

	let result;
	if (rectA.x1 === rectB.x1) {
		// Case I
		result = { x1: rectB.x2, x2: rectA.x2, y1: rectA.y1, y2: rectA.y2 };
	} else if (rectA.x2 === rectB.x2) {
		// Case II
		result = { x1: rectA.x1, x2: rectB.x1, y1: rectA.y1, y2: rectA.y2 };
	}

	return result;
};

const verticalSubtract = (rectA, rectB) => {
	if (!rectA || !rectB) return undefined;

	/*
    Case I        Case II
    _______       ________
    |A____ |      | A     |
    | |B  ||      |       |
    | |___||      |       |
    |      |      |  ____ |
    |      |      |  |B  ||	
    |      |      |  |___||	
    |______|      |_______|
	*/

	let result;
	if (rectA.y1 === rectB.y1) {
		// Case I
		result = { x1: rectA.x1, x2: rectA.x2, y1: rectB.y2, y2: rectA.y2 };
	} else if (rectA.y2 === rectB.y2) {
		// Case II
		result = { x1: rectA.x1, x2: rectA.x2, y1: rectA.y1, y2: rectB.y1 };
	}

	return result;
};

export const isValidRect = function (rect) {
	if (rect.x1 >= rect.x2 || rect.y1 >= rect.y2) {
		return false;
	}
	return true;
};

export const isValidRectHW = function (rect) {
	if (rect.x >= rect.x + rect.width || rect.y >= rect.y + rect.height) {
		return false;
	}
	return true;
};

export const mergeRects = (rectA, rectB) => {
	const result = new Array(2);
	let count = 0;

	const leftX1 = rectA.x1 < rectB.x1 ? rectA : rectB;
	const rightX2 = rectA.x2 > rectB.x2 ? rectA : rectB;
	const higherY1 = rectA.y1 > rectB.y1 ? rectA : rectB;
	const lowerY2 = rectA.y2 < rectB.y2 ? rectA : rectB;

	const horizotal = {
		x1: leftX1.x1,
		x2: rightX2.x2,
		y1: higherY1.y1,
		y2: lowerY2.y2,
	};

	const higherX1 = rectA.x1 > rectB.x1 ? rectA : rectB;
	const lowerX2 = rectA.x2 < rectB.x2 ? rectA : rectB;
	const upperY1 = rectA.y1 < rectB.y1 ? rectA : rectB;
	const bottomY2 = rectA.y2 > rectB.y2 ? rectA : rectB;

	const vertical = {
		x1: higherX1.x1,
		x2: lowerX2.x2,
		y1: upperY1.y1,
		y2: bottomY2.y2,
	};

	if (
		isValidRect(horizotal) &&
		!isRectInside(rectA, horizotal) &&
		!isRectInside(rectB, horizotal)
	) {
		result[count++] = horizotal;
	}

	if (
		isValidRect(vertical) &&
		!isRectInside(rectA, vertical) &&
		!isRectInside(rectB, vertical)
	) {
		result[count++] = vertical;
	}

	result.length = count;

	return result;
};

export const isRectInside = (rectA, rectB) => {
	// is rectB inside rectA
	if (
		rectA.x1 <= rectB.x1 &&
		rectA.x2 >= rectB.x2 &&
		rectA.y1 <= rectB.y1 &&
		rectA.y2 >= rectB.y2
	) {
		return true;
	}
};

export const areRectsIdentical = (rectA, rectB) => {
	if (
		rectA.x1 === rectB.x1 &&
		rectA.x2 === rectB.x2 &&
		rectA.y1 === rectB.y1 &&
		rectA.y2 === rectB.y2
	) {
		return true;
	}
	return false;
};

export const isRectLarger = (rectA, rectB) => {
	const ah = getHypotenuseSquared(rectA.x1, rectA.y1, rectA.x2, rectA.y2);
	const bh = getHypotenuseSquared(rectB.x1, rectB.y1, rectB.x2, rectB.y2);

	if (ah > bh) {
		return true;
	}
};
