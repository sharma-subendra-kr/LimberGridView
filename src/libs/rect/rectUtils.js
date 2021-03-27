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
		return null;
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
		return null;
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
			return null;
		}

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
	} catch (e) {
		return null;
	}
};

export const doRectsOnlyTouchHard = (rectA, rectB) => {
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
			return null;
		}

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
	} catch (e) {
		return null;
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
			return null;
		}

		const tlA = { x: rectA.x, y: rectA.y };
		const trA = { x: rectA.x + rectA.width, y: rectA.y };
		const brA = { x: rectA.x + rectA.width, y: rectA.y + rectA.height };
		const blA = { x: rectA.x, y: rectA.y + rectA.height };

		const tlB = { x: rectB.x, y: rectB.y };
		const trB = { x: rectB.x + rectB.width, y: rectB.y };
		const brB = { x: rectB.x + rectB.width, y: rectB.y + rectB.height };
		const blB = { x: rectB.x, y: rectB.y + rectB.height };

		const THRESHOLD = 1;

		if (
			Math.abs(tlA.x - brB.x) < THRESHOLD &&
			(Math.abs(tlA.y - brB.y) < THRESHOLD || (tlA.y < brB.y && blA.y > trB.y))
			// Math.abs(tlA.y - trB.y) < THRESHOLD
		) {
			return true;
		}

		if (
			Math.abs(tlA.y - brB.y) < THRESHOLD &&
			(Math.abs(tlA.x - brB.x) < THRESHOLD || (tlA.x < brB.x && trA.x > blB.x))
			// Math.abs(tlA.x - blB.x) < THRESHOLD
		) {
			return true;
		}

		if (
			Math.abs(tlB.x - brA.x) < THRESHOLD &&
			(Math.abs(tlB.y - brA.y) < THRESHOLD || (tlB.y < brA.y && blB.y > trA.y))
			// Math.abs(tlB.y - trA.y) < THRESHOLD
		) {
			return true;
		}

		if (
			Math.abs(tlB.y - brA.y) < THRESHOLD &&
			(Math.abs(tlB.x - brA.x) < THRESHOLD || (tlB.x < brA.x && trB.x > blA.x))
			// Math.abs(tlA.x - blB.x) < THRESHOLD
		) {
			return true;
		}

		// if (tlA.x > brB.x || tlB.x > brA.x) {
		// 	return false;
		// }
		// if (tlA.y > brB.y || tlB.y > brA.y) {
		// 	return false;
		// }

		// if (doRectsOverlap(rectA, rectB) === false) return true;

		return false;
	} catch (e) {
		return null;
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

export const subtractRect = (rectA, rectB, oCoForm) => {
	// gives the non overlapping free spaces in rectA
	if (!doRectsOverlap(rectA, rectB)) {
		return null;
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

	const keys = Object.keys(subRects);
	for (let i = 0; i < keys.length; i++) {
		if (!isValidRectCoForm(subRects[keys[i]])) {
			delete subRects[keys[i]];
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

	tm =
		horizontalSubtract(tlNtm, tl) ||
		horizontalSubtract(tmNtr, tr) ||
		tlNtm ||
		tmNtr;
	rm =
		verticalSubtract(trNrm, tr) ||
		verticalSubtract(rmNbr, br) ||
		trNrm ||
		rmNbr;
	bm =
		horizontalSubtract(brNbm, br) ||
		horizontalSubtract(bmNbl, bl) ||
		brNbm ||
		bmNbl;
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
		rects = Object.keys(subRects).map((o) => {
			if (oCoForm) {
				return subRects[o];
			} else {
				return getRectObjectFromCo(subRects[o]);
			}
		});
	}

	return rects;
};

const horizontalSubtract = (rectA, rectB) => {
	// rectA and rectB needs to be in Coordinate form
	if (!rectA && !rectB) return null;
	if (!doRectsOverlap(getRectObjectFromCo(rectA), getRectObjectFromCo(rectB)))
		return null;

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

	let result = null;
	if (
		rectA.tl.x === rectB.tl.x ||
		Math.abs(rectA.tl.x - rectB.tl.x) < Math.abs(rectA.tr.x - rectB.tr.x)
	) {
		// Case I
		result = { tl: rectB.tr, tr: rectA.tr, br: rectA.br, bl: rectB.br };
	} else if (
		rectA.tr === rectB.tr ||
		Math.abs(rectB.tl.x - rectA.tl.x) > Math.abs(rectB.tr.x - rectA.tr.x)
	) {
		// Case II
		result = { tl: rectA.tl, tr: rectB.tl, br: rectB.bl, bl: rectA.bl };
	}

	return result;
};

const verticalSubtract = (rectA, rectB) => {
	// rectA and rectB needs to be in Coordinate form
	if (!rectA && !rectB) return null;
	if (!doRectsOverlap(getRectObjectFromCo(rectA), getRectObjectFromCo(rectB)))
		return null;

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

	let result = null;
	if (
		rectA.tl.y === rectB.tl.y ||
		Math.abs(rectA.tl.y - rectB.tl.y) < Math.abs(rectA.bl.y - rectB.bl.y)
	) {
		// Case I
		result = { tl: rectB.bl, tr: rectB.br, br: rectA.br, bl: rectA.bl };
	} else if (
		rectA.bl.y === rectB.bl.y ||
		Math.abs(rectB.tl.y - rectA.tl.y) > Math.abs(rectB.bl.y - rectA.bl.y)
	) {
		// Case II
		result = { tl: rectA.tl, tr: rectA.tr, br: rectB.tr, bl: rectB.tl };
	}

	return result;
};

export const isValidRectCoForm = function (rect) {
	try {
		let top, right, bottom, left;
		top = rect.tr.x - rect.tl.x;
		right = rect.br.y - rect.tr.y;
		bottom = rect.br.x - rect.bl.x;
		left = rect.bl.y - rect.tl.y;

		if (top <= 0 || right <= 0 || bottom <= 0 || left <= 0) {
			return false;
		}
		return true;
	} catch (e) {
		return null;
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
	if (!isValidRectCoForm(rect)) return null;
	return {
		x: rect.tl.x,
		y: rect.tl.y,
		width: rect.tr.x - rect.tl.x,
		height: rect.bl.y - rect.tl.y,
	};
};

export const areRectsAdjacent = (rectA, rectB) => {
	const rectACo = getCoordinates(rectA);
	const rectBCo = getCoordinates(rectB);

	// if (!doRectsOnlyTouch(rectA, rectB)) {
	// 	return false;
	// }

	if (
		!(
			Math.abs(rectACo.tl.x - rectBCo.tr.x) < 1 ||
			Math.abs(rectBCo.tl.x - rectACo.tr.x) < 1 ||
			Math.abs(rectACo.tl.y - rectBCo.bl.y) < 1 ||
			Math.abs(rectBCo.tl.y - rectACo.bl.y) < 1
		)
	) {
		return false;
	}

	// below filters point of intersection touch
	if (
		(rectACo.tl.y >= rectBCo.tl.y && rectACo.tl.y < rectBCo.bl.y) ||
		(rectBCo.tl.y >= rectACo.tl.y && rectBCo.tl.y < rectACo.bl.y) ||
		(rectACo.tl.x >= rectBCo.tl.x && rectACo.tl.x < rectBCo.tr.x) ||
		(rectBCo.tl.x >= rectACo.tl.x && rectBCo.tl.x < rectACo.tr.x) ||
		//
		(rectACo.bl.y <= rectBCo.bl.y && rectACo.bl.y > rectBCo.tl.y) ||
		(rectBCo.bl.y <= rectACo.bl.y && rectBCo.bl.y > rectACo.tl.y) ||
		(rectACo.tr.x <= rectBCo.tr.x && rectACo.tr.x > rectBCo.tl.x) ||
		(rectBCo.tr.x <= rectACo.tr.x && rectBCo.tr.x > rectACo.tl.x)
	) {
		return true;
	} else {
		return false;
	}
};

export const merge = (rectACo, rectBCo) => {
	// const THRESHOLD = 0.1;
	let res;
	// check tl
	if (
		rectACo.tl.x >= rectBCo.bl.x &&
		rectACo.tl.x < rectBCo.br.x &&
		rectACo.tl.y >= rectBCo.bl.y
		// Math.abs(rectACo.tl.y - rectBCo.bl.y) < THRESHOLD
	) {
		let x = rectACo.tr.x < rectBCo.tr.x ? rectACo.tr.x : rectBCo.tr.x;
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
		// Math.abs(rectACo.tl.x - rectBCo.tr.x) < THRESHOLD
	) {
		let y = rectACo.br.y < rectBCo.br.y ? rectACo.br.y : rectBCo.br.y;
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
		// Math.abs(rectACo.tr.y - rectBCo.bl.y) < THRESHOLD
	) {
		let x = rectACo.tl.x > rectBCo.tl.x ? rectACo.tl.x : rectBCo.tl.x;
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
		// Math.abs(rectACo.tr.x - rectBCo.tl.x) < THRESHOLD
	) {
		let y = rectACo.bl.y < rectBCo.bl.y ? rectACo.bl.y : rectBCo.bl.y;
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
		// Math.abs(rectACo.br.y - rectBCo.tl.y) < THRESHOLD
	) {
		let x = rectACo.tl.x > rectBCo.tl.x ? rectACo.tl.x : rectBCo.tl.x;
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
		// Math.abs(rectACo.br.x - rectBCo.tl.x) < THRESHOLD
	) {
		let y = rectACo.tl.y > rectBCo.tl.y ? rectACo.tl.y : rectBCo.tl.y;
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
		// Math.abs(rectACo.bl.y - rectBCo.tl.y) < THRESHOLD
	) {
		let x = rectACo.tr.x < rectBCo.tr.x ? rectACo.tr.x : rectBCo.tr.x;
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
		// Math.abs(rectACo.bl.x - rectBCo.tr.x) < THRESHOLD
	) {
		let y = rectACo.tl.y > rectBCo.tl.y ? rectACo.tl.y : rectBCo.tl.y;
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

	return count ? arr : null;
};

export const mergeRects = (rectA, rectB, oCoForm) => {
	// if (doRectsOverlap(rectA, rectB)) {
	// 	return false;
	// }
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
		return null;
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
		x: rect.x1,
		y: rect.y1,
		width: rect.x2 - rect.x1,
		height: rect.y2 - rect.y1,
	};
};

export const getRectObjectFromRTreeRect = (rect) => {
	return {
		x1: rect.x,
		x2: rect.x + rect.width,
		y1: rect.y,
		y2: rect.y + rect.height,
	};
};
