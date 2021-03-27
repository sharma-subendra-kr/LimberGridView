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

		if (x1A >= x2B || x1B.x >= x2A.x || y1A >= y2B || y1B >= y2A) {
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

		if (x1A > x2B || x1B.x > x2A.x || y1A > y2B || y1B > y2A) {
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

// export const subRectKeys = ["subRectT", "subRectR", "subRectB", "subRectL"];

export const subtractRect = (rectA, rectB, oCoForm) => {
	// gives the non overlapping free spaces in rectA
	if (!doRectsOverlap(rectA, rectB)) {
		return false;
	}

	const rectACo = getCoordinates(rectA);
	const rectBCo = getCoordinates(rectB);

	/*
    ____|_______________|___
    |   |               |   |
____|___|_______________|___|____
    |   |               |   |
    |   |               |   |
    |   |               |   |
    |   |               |   |
____|___|_______________|___|___
    |   |               |   |
    |___|_______________|___|
        |               |
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

	// for (let i = 0; i < 4; i++) {
	// 	if (!isValidRectCoForm(subRects[subRectKeys[i]])) {
	// 		delete subRects[subRectKeys[i]];
	// 	}
	// }
	for (const key in subRects) {
		if (!isValidRectCoForm(subRects[key])) {
			delete subRects[key];
		}
	}

	let tl, tm, tr, rm, br, bm, bl, lm;
	let tlNtm, tmNtr, trNrm, rmNbr, brNbm, bmNbl, blNlm, lmNtl;
	if (subRects.subRectT && subRects.subRectR) {
		tlNtm = {
			tl: subRects.subRectT.tl,
			tr: subRects.subRectR.tl,
			br: { x: subRects.subRectR.tl.x, y: subRects.subRectT.bl.y },
			bl: subRects.subRectT.bl,
		};
		tr = {
			tl: subRects.subRectR.tl,
			tr: subRects.subRectR.tr,
			br: subRects.subRectT.br,
			bl: { x: subRects.subRectR.tl.x, y: subRects.subRectT.bl.y },
		};
		rmNbr = {
			tl: { x: subRects.subRectR.tl.x, y: subRects.subRectT.bl.y },
			tr: subRects.subRectT.br,
			br: subRects.subRectR.br,
			bl: subRects.subRectR.bl,
		};
	}

	if (subRects.subRectR && subRects.subRectB) {
		trNrm = {
			tl: subRects.subRectR.tl,
			tr: subRects.subRectR.tr,
			br: subRects.subRectB.tr,
			bl: { x: subRects.subRectR.bl.x, y: subRects.subRectB.tl.y },
		};
		br = {
			tl: { x: subRects.subRectR.bl.x, y: subRects.subRectB.tl.y },
			tr: subRects.subRectB.tr,
			br: subRects.subRectB.br,
			bl: subRects.subRectR.bl,
		};
		bmNbl = {
			tl: subRects.subRectB.tl,
			tr: { x: subRects.subRectR.bl.x, y: subRects.subRectB.tl.y },
			br: subRects.subRectR.bl,
			bl: subRects.subRectB.bl,
		};
	}

	if (subRects.subRectB && subRects.subRectL) {
		lmNtl = {
			tl: subRects.subRectL.tl,
			tr: subRects.subRectL.tr,
			br: { x: subRects.subRectL.tr.x, y: subRects.subRectB.tr.y },
			bl: subRects.subRectB.tl,
		};
		bl = {
			tl: subRects.subRectB.tl,
			tr: { x: subRects.subRectL.tr.x, y: subRects.subRectB.tr.y },
			br: subRects.subRectL.br,
			bl: subRects.subRectB.bl,
		};
		brNbm = {
			tl: { x: subRects.subRectL.tr.x, y: subRects.subRectB.tr.y },
			tr: subRects.subRectB.tr,
			br: subRects.subRectB.br,
			bl: subRects.subRectL.br,
		};
	}

	if (subRects.subRectL && subRects.subRectT) {
		blNlm = {
			tl: subRects.subRectT.bl,
			tr: { x: subRects.subRectL.tr.x, y: subRects.subRectT.bl.y },
			br: subRects.subRectL.br,
			bl: subRects.subRectL.bl,
		};
		tl = {
			tl: subRects.subRectT.tl,
			tr: subRects.subRectL.tr,
			br: { x: subRects.subRectL.tr.x, y: subRects.subRectT.bl.y },
			bl: subRects.subRectT.bl,
		};
		tmNtr = {
			tl: subRects.subRectL.tr,
			tr: subRects.subRectT.tr,
			br: subRects.subRectT.br,
			bl: { x: subRects.subRectL.tr.x, y: subRects.subRectT.bl.y },
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

	let rects;
	if (oCoForm) {
		rects = [tl, tm, tr, rm, br, bm, bl, lm];
	} else {
		rects = [
			getRectObjectFromCo(tl),
			getRectObjectFromCo(tm),
			getRectObjectFromCo(tr),
			getRectObjectFromCo(rm),
			getRectObjectFromCo(br),
			getRectObjectFromCo(bm),
			getRectObjectFromCo(bl),
			getRectObjectFromCo(lm),
		];
	}

	rects = rects.filter((o) => o);

	if (rects.length === 0) {
		// rects = Object.keys(subRects).map((o) => {
		// 	if (oCoForm) {
		// 		return subRects[o];
		// 	} else {
		// 		return getRectObjectFromCo(subRects[o]);
		// 	}
		// });
		for (const key in subRects) {
			if (oCoForm) {
				rects.push(subRects[key]);
			} else {
				rects.push(getRectObjectFromCo(subRects[key]));
			}
		}
	}

	return rects;
};

const horizontalSubtract = (rectA, rectB) => {
	// rectA and rectB needs to be in Coordinate form
	if (!rectA || !rectB) return undefined;

	/*
		Case I
		____________________
		| ____              |
		||____|             |
		|___________________|

		Case II
		____________________
		|              ____ |
		|             |____||
		|___________________|
	*/

	let result;
	if (rectA.tl.x === rectB.tl.x) {
		// Case I
		result = { tl: rectB.tr, tr: rectA.tr, br: rectA.br, bl: rectB.br };
	} else if (rectA.tr === rectB.tr) {
		// Case II
		result = { tl: rectA.tl, tr: rectB.tl, br: rectB.bl, bl: rectA.bl };
	}

	return result;
};

const verticalSubtract = (rectA, rectB) => {
	// rectA and rectB needs to be in Coordinate form
	if (!rectA || !rectB) return undefined;

	/*
    Case I        Case II
    _______       ________
    | ____ |      |       |
    | |   ||      |       |
    | |___||      |       |
    |      |      |  ____ |
    |      |      |  |   ||	
    |      |      |  |___||	
    |______|      |_______|
	*/

	let result;
	if (rectA.tl.y === rectB.tl.y) {
		// Case I
		result = { tl: rectB.bl, tr: rectB.br, br: rectA.br, bl: rectA.bl };
	} else if (rectA.bl.y === rectB.bl.y) {
		// Case II
		result = { tl: rectA.tl, tr: rectA.tr, br: rectB.tr, bl: rectB.tl };
	}

	return result;
};

export const isValidRectCoForm = function (rect) {
	try {
		const top = rect.tr.x - rect.tl.x;
		const right = rect.br.y - rect.tr.y;
		const bottom = rect.br.x - rect.bl.x;
		const left = rect.bl.y - rect.tl.y;

		if (top <= 0 || right <= 0 || bottom <= 0 || left <= 0) {
			return false;
		}
		return true;
	} catch (e) {
		return false;
	}
};

export const getCoordinates = function (rect) {
	const tl = { x: rect.x, y: rect.y };
	const tr = { x: rect.x + rect.width, y: rect.y };
	const br = { x: rect.x + rect.width, y: rect.y + rect.height };
	const bl = { x: rect.x, y: rect.y + rect.height };

	return { tl, tr, br, bl };
};

export const getRectObjectFromCo = function (rect) {
	if (!isValidRectCoForm(rect)) return undefined;
	return {
		x: rect.tl.x,
		y: rect.tl.y,
		width: rect.tr.x - rect.tl.x,
		height: rect.bl.y - rect.tl.y,
	};
};

export const merge = (rectACo, rectBCo) => {
	let res;
	// check tl
	if (
		rectACo.tl.x >= rectBCo.bl.x &&
		rectACo.tl.x < rectBCo.br.x &&
		rectACo.tl.y >= rectBCo.bl.y
	) {
		const x = rectACo.tr.x < rectBCo.tr.x ? rectACo.tr.x : rectBCo.tr.x;
		res = {
			tl: { x: rectACo.tl.x, y: rectBCo.tl.y },
			tr: { x: x, y: rectBCo.tl.y },
			br: { x: x, y: rectACo.bl.y },
			bl: { x: rectACo.bl.x, y: rectACo.bl.y },
		};
	}

	if (
		rectACo.tl.y >= rectBCo.tr.y &&
		rectACo.tl.y < rectBCo.br.y &&
		rectACo.tl.x >= rectBCo.tr.x
	) {
		const y = rectACo.br.y < rectBCo.br.y ? rectACo.br.y : rectBCo.br.y;
		res = {
			tl: { x: rectBCo.tl.x, y: rectACo.tl.y },
			tr: { x: rectACo.tr.x, y: rectACo.tr.y },
			br: { x: rectACo.br.x, y: y },
			bl: { x: rectBCo.bl.x, y: y },
		};
	}

	// check tr
	if (
		rectACo.tr.x <= rectBCo.br.x &&
		rectACo.tr.x > rectBCo.bl.x &&
		rectACo.tr.y >= rectBCo.bl.y
	) {
		const x = rectACo.tl.x > rectBCo.tl.x ? rectACo.tl.x : rectBCo.tl.x;
		res = {
			tl: { x: x, y: rectBCo.tl.y },
			tr: { x: rectACo.tr.x, y: rectBCo.tr.y },
			br: { x: rectACo.br.x, y: rectACo.br.y },
			bl: { x: x, y: rectACo.bl.y },
		};
	}

	if (
		rectACo.tr.y >= rectBCo.tl.y &&
		rectACo.tr.y < rectBCo.bl.y &&
		rectACo.tr.x <= rectBCo.tl.x
	) {
		const y = rectACo.bl.y < rectBCo.bl.y ? rectACo.bl.y : rectBCo.bl.y;
		res = {
			tl: { x: rectACo.tl.x, y: rectACo.tl.y },
			tr: { x: rectBCo.tr.x, y: rectACo.tl.y },
			br: { x: rectBCo.br.x, y: y },
			bl: { x: rectACo.bl.x, y: y },
		};
	}

	// check br
	if (
		rectACo.br.x <= rectBCo.tr.x &&
		rectACo.br.x > rectBCo.tl.x &&
		rectACo.br.y <= rectBCo.tl.y
	) {
		const x = rectACo.tl.x > rectBCo.tl.x ? rectACo.tl.x : rectBCo.tl.x;
		res = {
			tl: { x: x, y: rectACo.tl.y },
			tr: { x: rectACo.tr.x, y: rectACo.tr.y },
			br: { x: rectACo.tr.x, y: rectBCo.br.y },
			bl: { x: x, y: rectBCo.bl.y },
		};
	}

	if (
		rectACo.br.y <= rectBCo.bl.y &&
		rectACo.br.y > rectBCo.tl.y &&
		rectACo.br.x <= rectBCo.tl.x
	) {
		const y = rectACo.tl.y > rectBCo.tl.y ? rectACo.tl.y : rectBCo.tl.y;
		res = {
			tl: { x: rectACo.tl.x, y: y },
			tr: { x: rectBCo.tr.x, y: y },
			br: { x: rectBCo.br.x, y: rectACo.br.y },
			bl: { x: rectACo.bl.x, y: rectACo.bl.y },
		};
	}

	// check bl
	if (
		rectACo.bl.x >= rectBCo.tl.x &&
		rectACo.bl.x < rectBCo.tr.x &&
		rectACo.bl.y <= rectBCo.tl.y
	) {
		const x = rectACo.tr.x < rectBCo.tr.x ? rectACo.tr.x : rectBCo.tr.x;
		res = {
			tl: { x: rectACo.tl.x, y: rectACo.tl.y },
			tr: { x: x, y: rectACo.tr.y },
			br: { x: x, y: rectBCo.br.y },
			bl: { x: rectACo.bl.x, y: rectBCo.bl.y },
		};
	}

	if (
		rectACo.bl.y <= rectBCo.br.y &&
		rectACo.bl.y > rectBCo.tr.y &&
		rectACo.bl.x >= rectBCo.tr.x
	) {
		const y = rectACo.tl.y > rectBCo.tl.y ? rectACo.tl.y : rectBCo.tl.y;
		res = {
			tl: { x: rectBCo.tl.x, y: y },
			tr: { x: rectACo.tr.x, y: y },
			br: { x: rectACo.br.x, y: rectACo.br.y },
			bl: { x: rectBCo.bl.x, y: rectACo.bl.y },
		};
	}

	return res;
};

export const mergeOverlapping = (rectA, rectB, rectBCo) => {
	const diff = subtractRect(rectA, rectB, true);

	const arr = new Array(diff?.length || 0);
	let m;
	let count = 0;
	const len = arr.length;

	for (let i = 0; i < len; i++) {
		m = merge(diff[i], rectBCo);
		if (m && !isRectInside(rectA, getRectObjectFromCo(m))) {
			arr[count++] = m;
		}
	}

	arr.length = count;

	return count ? arr : undefined;
};

export const mergeRects = (rectA, rectB, oCoForm) => {
	const rectACo = getCoordinates(rectA);
	const rectBCo = getCoordinates(rectB);

	let result;

	result = merge(rectACo, rectBCo);
	if (!result) result = merge(rectBCo, rectACo);
	if (result) result = [result];
	if (!result && !isRectInside(rectA, rectB) && !isRectInside(rectB, rectA)) {
		result = mergeOverlapping(rectA, rectB, rectBCo);
	}

	if (result) {
		if (oCoForm) {
			return result;
		} else {
			return result.map((o) => getRectObjectFromCo(o));
		}
	}

	return false;
};

export const isRectInside = (rectA, rectB) => {
	// is rectB inside rectA
	const rectACo = getCoordinates(rectA);
	const rectBCo = getCoordinates(rectB);

	if (
		rectACo.tl.x <= rectBCo.tl.x &&
		rectACo.tr.x >= rectBCo.tr.x &&
		rectACo.tl.y <= rectBCo.tl.y &&
		rectACo.bl.y >= rectBCo.bl.y
	) {
		return true;
	}

	return false;
};

export const areRectsOnSameYAxisExPath = (rectA, rectB) => {
	// ExPath: Exclusive Path (in Exclusive and Inclusive)
	if (!(rectA?.tl?.x && rectA?.tr?.x && rectB?.tl?.x && rectA?.tr?.x)) {
		return false;
	}

	if (rectA.tl.x >= rectB.tr.x || rectB.tl.x >= rectA.tr.x) {
		return false;
	}
	return true;
};

export const areRectsIdentical = (rectA, rectB) => {
	if (
		rectA.tl.x === rectB.tl.x &&
		rectA.tl.y === rectB.tl.y &&
		rectA.tr.x === rectB.tr.x &&
		rectA.tr.y === rectB.tr.y &&
		rectA.br.x === rectB.br.x &&
		rectA.br.y === rectB.br.y &&
		rectA.bl.x === rectB.bl.x &&
		rectA.bl.y === rectB.bl.y
	) {
		return true;
	}
	return false;
};

export const getRTreeRectFromRectObject = (rect) => {
	return {
		x1: rect.x,
		x2: rect.x + rect.width,
		y1: rect.y,
		y2: rect.y + rect.height,
	};
};

export const getRectObjectFromRTreeRect = (rect) => {
	return {
		x: rect.x1,
		y: rect.y1,
		width: rect.x2 - rect.x1,
		height: rect.y2 - rect.y1,
	};
};
