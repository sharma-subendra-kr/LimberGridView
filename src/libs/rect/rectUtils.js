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

import { getHypotenuseSquared } from "../geometry/geometry";

export const isPointInsideRect = (rect, point) => {
	const rectCo = getCoordinates(rect);
	try {
		if (
			point.x > rectCo.tl.x &&
			point.x < rectCo.tr.x &&
			point.y > rectCo.tl.y &&
			point.y < rectCo.bl.y
		) {
			return true;
		}
		return false;
	} catch (e) {
		return false;
	}
};

export const doesPointTouchRect = (rect, point) => {
	const rectCo = getCoordinates(rect);
	try {
		if (
			point.x >= rectCo.tl.x &&
			point.x <= rectCo.tr.x &&
			point.y >= rectCo.tl.y &&
			point.y <= rectCo.bl.y &&
			!isPointInsideRect(rect, point)
		) {
			return true;
		}
		return false;
	} catch (e) {
		return false;
	}
};

export const doRectsOverlap = (rectA, rectB) => {
	try {
		if (
			isNaN(rectA.x) ||
			isNaN(rectA.y) ||
			isNaN(rectA.width) ||
			isNaN(rectA.height) ||
			isNaN(rectB.x) ||
			isNaN(rectB.y) ||
			isNaN(rectB.width) ||
			isNaN(rectB.height)
		) {
			return false;
		}

		const x1A = rectA.x;
		const y1A = rectA.y;
		const x2A = rectA.x + rectA.width;
		const y2A = rectA.y + rectA.height;

		const x1B = rectB.x;
		const y1B = rectB.y;
		const x2B = rectB.x + rectB.width;
		const y2B = rectB.y + rectB.height;

		if (x1A >= x2B || x1B >= x2A || y1A >= y2B || y1B >= y2A) {
			return false;
		}

		return true;
	} catch (e) {
		return false;
	}
};

export const doRectsOverlapOrTouch = (rectA, rectB) => {
	try {
		if (
			isNaN(rectA.x) ||
			isNaN(rectA.y) ||
			isNaN(rectA.width) ||
			isNaN(rectA.height) ||
			isNaN(rectB.x) ||
			isNaN(rectB.y) ||
			isNaN(rectB.width) ||
			isNaN(rectB.height)
		) {
			return false;
		}

		const x1A = rectA.x;
		const y1A = rectA.y;
		const x2A = rectA.x + rectA.width;
		const y2A = rectA.y + rectA.height;

		const x1B = rectB.x;
		const y1B = rectB.y;
		const x2B = rectB.x + rectB.width;
		const y2B = rectB.y + rectB.height;

		if (x1A > x2B || x1B > x2A || y1A > y2B || y1B > y2A) {
			return false;
		}

		return true;
	} catch (e) {
		return false;
	}
};

export const doRectsOnlyTouch = (rectA, rectB) => {
	try {
		if (
			isNaN(rectA.x) ||
			isNaN(rectA.y) ||
			isNaN(rectA.width) ||
			isNaN(rectA.height) ||
			isNaN(rectB.x) ||
			isNaN(rectB.y) ||
			isNaN(rectB.width) ||
			isNaN(rectB.height)
		) {
			return false;
		}

		const x1A = rectA.x;
		const y1A = rectA.y;
		const x2A = rectA.x + rectA.width;
		const y2A = rectA.y + rectA.height;

		const x1B = rectB.x;
		const y1B = rectB.y;
		const x2B = rectB.x + rectB.width;
		const y2B = rectB.y + rectB.height;

		if (x1A > x2B || x1B > x2A || y1A > y2B || y1B > y2A) {
			return false;
		}

		if (doRectsOverlap(rectA, rectB) === false) return true;

		return false;
	} catch (e) {
		return false;
	}
};

export const doRectsOverlapRTree = (rectA, rectB) => {
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

export const doRectsOverlapOrTouchRTree = (rectA, rectB) => {
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

export const subtractRect = (rectA, rectB) => {
	// gives the non overlapping free spaces in rectA
	if (!doRectsOverlap(rectA, rectB)) {
		return false;
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
			if (key) {
				rects.push(subRects[key]);
			}
		}
	}

	for (const rect of rects) {
		rect.x = rect.x1;
		rect.y = rect.y1;
		rect.width = rect.x2 - rect.x1;
		rect.height = rect.y2 - rect.y1;
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
		// result = { tl: rectB.bl, tr: rectB.br, br: rectA.br, bl: rectA.bl };
		result = { x1: rectA.x1, x2: rectA.x2, y1: rectB.y2, y2: rectA.y2 };
	} else if (rectA.bl.y === rectB.bl.y) {
		// Case II
		result = { x1: rectA.x1, x2: rectA.x2, y1: rectA.y1, y2: rectB.y1 };
	}

	return result;
};

export const isValidRect = function (rect) {
	if (rect.x1 > rect.x2 || rect.y1 > rect.y2) {
		return false;
	}
	return true;
};

export const merge = (rectA, rectB) => {
	let res;

	// 3
	if (rectA.x1 >= rectB.x1 && rectA.x1 < rectB.x2 && rectA.y1 >= rectB.y2) {
		const x = rectA.x2 < rectB.x2 ? rectA.x2 : rectB.x2;
		res = {
			x1: rectA.x1,
			x2: x,
			y1: rectB.y1,
			y2: rectA.y2,
		};
	}

	// 1
	if (rectA.y1 >= rectB.y1 && rectA.y1 < rectB.y2 && rectA.x1 >= rectB.x2) {
		const y = rectA.y2 < rectB.y2 ? rectA.y2 : rectB.y2;
		res = {
			x1: rectB.x1,
			x2: rectA.x2,
			y1: rectA.y1,
			y2: y,
		};
	}

	// 4
	if (rectA.x2 <= rectB.x2 && rectA.x2 > rectB.x1 && rectA.y1 >= rectB.y2) {
		const x = rectA.x1 > rectB.x1 ? rectA.x1 : rectB.x1;
		res = {
			x1: x,
			x2: rectA.x2,
			y1: rectB.y1,
			y2: rectA.y2,
		};
	}

	// 2
	if (rectA.y2 <= rectB.y2 && rectA.y2 > rectB.y1 && rectA.x1 >= rectB.x2) {
		const y = rectA.y1 > rectB.y1 ? rectA.y1 : rectB.y1;
		res = {
			x1: rectB.x1,
			x2: rectA.x2,
			y1: y,
			y2: rectA.y2,
		};
	}

	return res;
};

export const mergeOverlapping = (rectA, rectB) => {
	const diff = subtractRect(rectA, rectB);

	const arr = new Array(diff?.length || 0);
	let m;
	let count = 0;
	const len = arr.length;

	for (let i = 0; i < len; i++) {
		m = merge(diff[i], rectB);
		if (m && !isRectInside(rectA, m)) {
			arr[count++] = m;
		}
	}

	arr.length = count;

	return count ? arr : undefined;
};

export const mergeRects = (rectA, rectB) => {
	let result;

	result = merge(rectA, rectB);
	if (!result) result = merge(rectB, rectA);
	if (result) result = [result];
	if (!result && !isRectInside(rectA, rectB) && !isRectInside(rectB, rectA)) {
		result = mergeOverlapping(rectA, rectB);
	}

	if (result) {
		for (const rect of result) {
			rect.x = rect.x1;
			rect.y = rect.y1;
			rect.width = rect.x2 - rect.x1;
			rect.height = rect.y2 - rect.y1;
		}
	}

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

window.subtractRect = subtractRect;
