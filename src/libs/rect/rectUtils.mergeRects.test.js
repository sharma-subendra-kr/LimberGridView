import { mergeRects } from "./rectUtils";

describe("mergeRects", () => {
	test("left", () => {
		let rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		let rectB = { x1: 6, y1: 5, x2: 8, y2: 6 };
		let res = [{ x1: 2, y1: 5, x2: 8, y2: 6 }];
		expect(mergeRects(rectA, rectB)).toStrictEqual(res);

		rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		rectB = { x1: 6, y1: 2, x2: 8, y2: 6 };
		res = [{ x1: 2, y1: 2, x2: 8, y2: 6 }];
		expect(mergeRects(rectA, rectB)).toStrictEqual(res);

		rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		rectB = { x1: 6, y1: 1, x2: 8, y2: 6 };
		res = [{ x1: 2, y1: 2, x2: 8, y2: 6 }];
		expect(mergeRects(rectA, rectB)).toStrictEqual(res);

		rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		rectB = { x1: 6, y1: 3, x2: 8, y2: 4 };
		res = [{ x1: 2, y1: 3, x2: 8, y2: 4 }];
		expect(mergeRects(rectA, rectB)).toStrictEqual(res);

		rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		rectB = { x1: 6, y1: 2, x2: 8, y2: 4 };
		res = [{ x1: 2, y1: 2, x2: 8, y2: 4 }];
		expect(mergeRects(rectA, rectB)).toStrictEqual(res);

		rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		rectB = { x1: 6, y1: 1, x2: 8, y2: 4 };
		res = [{ x1: 2, y1: 2, x2: 8, y2: 4 }];
		expect(mergeRects(rectA, rectB)).toStrictEqual(res);
	});

	test("left above", () => {
		let rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		let rectB = { x1: 6, y1: 5, x2: 8, y2: 7 };
		let res = [{ x1: 2, y1: 5, x2: 8, y2: 6 }];
		expect(mergeRects(rectA, rectB)).toStrictEqual(res);

		rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		rectB = { x1: 6, y1: 2, x2: 8, y2: 7 };
		res = [{ x1: 2, y1: 2, x2: 8, y2: 6 }];
		expect(mergeRects(rectA, rectB)).toStrictEqual(res);

		rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		rectB = { x1: 6, y1: 1, x2: 8, y2: 7 };
		res = [{ x1: 2, y1: 2, x2: 8, y2: 6 }];
		expect(mergeRects(rectA, rectB)).toStrictEqual(res);
	});

	test("bottom", () => {
		let rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		let rectB = { x1: 2, y1: 1, x2: 3, y2: 2 };
		let res = [{ x1: 2, y1: 1, x2: 3, y2: 6 }];
		expect(mergeRects(rectA, rectB)).toStrictEqual(res);

		rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		rectB = { x1: 2, y1: 1, x2: 6, y2: 2 };
		res = [{ x1: 2, y1: 1, x2: 6, y2: 6 }];
		expect(mergeRects(rectA, rectB)).toStrictEqual(res);

		rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		rectB = { x1: 2, y1: 1, x2: 8, y2: 2 };
		res = [{ x1: 2, y1: 1, x2: 6, y2: 6 }];
		expect(mergeRects(rectA, rectB)).toStrictEqual(res);

		rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		rectB = { x1: 3, y1: 1, x2: 5, y2: 2 };
		res = [{ x1: 3, y1: 1, x2: 5, y2: 6 }];
		expect(mergeRects(rectA, rectB)).toStrictEqual(res);

		rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		rectB = { x1: 3, y1: 1, x2: 6, y2: 2 };
		res = [{ x1: 3, y1: 1, x2: 6, y2: 6 }];
		expect(mergeRects(rectA, rectB)).toStrictEqual(res);

		rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		rectB = { x1: 3, y1: 1, x2: 7, y2: 2 };
		res = [{ x1: 3, y1: 1, x2: 6, y2: 6 }];
		expect(mergeRects(rectA, rectB)).toStrictEqual(res);
	});

	test("bottom left", () => {
		let rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		let rectB = { x1: 1, y1: 1, x2: 3, y2: 2 };
		let res = [{ x1: 2, y1: 1, x2: 3, y2: 6 }];
		expect(mergeRects(rectA, rectB)).toStrictEqual(res);

		rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		rectB = { x1: 1, y1: 1, x2: 6, y2: 2 };
		res = [{ x1: 2, y1: 1, x2: 6, y2: 6 }];
		expect(mergeRects(rectA, rectB)).toStrictEqual(res);

		rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		rectB = { x1: 1, y1: 1, x2: 7, y2: 2 };
		res = [{ x1: 2, y1: 1, x2: 6, y2: 6 }];
		expect(mergeRects(rectA, rectB)).toStrictEqual(res);
	});

	test("left  overlapping", () => {
		let rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		let rectB = { x1: 5, y1: 5, x2: 8, y2: 6 };
		let res = [{ x1: 2, y1: 5, x2: 8, y2: 6 }];
		expect(mergeRects(rectA, rectB)).toStrictEqual(res);

		rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		rectB = { x1: 5, y1: 2, x2: 8, y2: 6 };
		res = [{ x1: 2, y1: 2, x2: 8, y2: 6 }];
		expect(mergeRects(rectA, rectB)).toStrictEqual(res);

		rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		rectB = { x1: 5, y1: 1, x2: 8, y2: 6 };
		res = [{ x1: 2, y1: 2, x2: 8, y2: 6 }];
		expect(mergeRects(rectA, rectB)).toStrictEqual(res);

		rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		rectB = { x1: 5, y1: 3, x2: 8, y2: 4 };
		res = [{ x1: 2, y1: 3, x2: 8, y2: 4 }];
		expect(mergeRects(rectA, rectB)).toStrictEqual(res);

		rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		rectB = { x1: 5, y1: 2, x2: 8, y2: 4 };
		res = [{ x1: 2, y1: 2, x2: 8, y2: 4 }];
		expect(mergeRects(rectA, rectB)).toStrictEqual(res);

		rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		rectB = { x1: 5, y1: 1, x2: 8, y2: 4 };
		res = [
			{ x1: 5, y1: 1, x2: 6, y2: 6 },
			{ x1: 2, y1: 2, x2: 8, y2: 4 },
		];
		expect(mergeRects(rectA, rectB)).toStrictEqual(res);
	});

	test("left above  overlapping", () => {
		let rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		let rectB = { x1: 5, y1: 5, x2: 8, y2: 7 };
		let res = [
			{ x1: 5, y1: 2, x2: 6, y2: 7 },
			{ x1: 2, y1: 5, x2: 8, y2: 6 },
		];
		expect(mergeRects(rectA, rectB)).toStrictEqual(res);

		rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		rectB = { x1: 5, y1: 2, x2: 8, y2: 7 };
		res = [{ x1: 2, y1: 2, x2: 8, y2: 6 }];
		expect(mergeRects(rectA, rectB)).toStrictEqual(res);

		rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		rectB = { x1: 5, y1: 1, x2: 8, y2: 7 };
		res = [{ x1: 2, y1: 2, x2: 8, y2: 6 }];
		expect(mergeRects(rectA, rectB)).toStrictEqual(res);
	});

	test("bottom  overlapping", () => {
		let rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		let rectB = { x1: 2, y1: 1, x2: 3, y2: 3 };
		let res = [{ x1: 2, y1: 1, x2: 3, y2: 6 }];
		expect(mergeRects(rectA, rectB)).toStrictEqual(res);

		rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		rectB = { x1: 2, y1: 1, x2: 6, y2: 3 };
		res = [{ x1: 2, y1: 1, x2: 6, y2: 6 }];
		expect(mergeRects(rectA, rectB)).toStrictEqual(res);

		rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		rectB = { x1: 2, y1: 1, x2: 8, y2: 3 };
		res = [{ x1: 2, y1: 1, x2: 6, y2: 6 }];
		expect(mergeRects(rectA, rectB)).toStrictEqual(res);

		rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		rectB = { x1: 3, y1: 1, x2: 5, y2: 3 };
		res = [{ x1: 3, y1: 1, x2: 5, y2: 6 }];
		expect(mergeRects(rectA, rectB)).toStrictEqual(res);

		rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		rectB = { x1: 3, y1: 1, x2: 6, y2: 3 };
		res = [{ x1: 3, y1: 1, x2: 6, y2: 6 }];
		expect(mergeRects(rectA, rectB)).toStrictEqual(res);

		rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		rectB = { x1: 3, y1: 1, x2: 7, y2: 3 };
		res = [
			{ x1: 3, y1: 1, x2: 6, y2: 6 },
			{ x1: 2, y1: 2, x2: 7, y2: 3 },
		];
		expect(mergeRects(rectA, rectB)).toStrictEqual(res);
	});

	test("bottom left overlapping", () => {
		let rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		let rectB = { x1: 1, y1: 1, x2: 3, y2: 3 };
		let res = [
			{ x1: 1, y1: 2, x2: 6, y2: 3 },
			{ x1: 2, y1: 1, x2: 3, y2: 6 },
		];
		expect(mergeRects(rectA, rectB)).toStrictEqual(res);

		rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		rectB = { x1: 1, y1: 1, x2: 6, y2: 3 };
		res = [{ x1: 2, y1: 1, x2: 6, y2: 6 }];
		expect(mergeRects(rectA, rectB)).toStrictEqual(res);

		rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		rectB = { x1: 1, y1: 1, x2: 7, y2: 3 };
		res = [{ x1: 2, y1: 1, x2: 6, y2: 6 }];
		expect(mergeRects(rectA, rectB)).toStrictEqual(res);
	});
});

describe("mergeRects reverse", () => {
	test("right", () => {
		let rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		let rectB = { x1: 0, y1: 5, x2: 2, y2: 6 };
		let res = [{ x1: 0, y1: 5, x2: 6, y2: 6 }];
		expect(mergeRects(rectA, rectB)).toStrictEqual(res);

		rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		rectB = { x1: 0, y1: 2, x2: 2, y2: 6 };
		res = [{ x1: 0, y1: 2, x2: 6, y2: 6 }];
		expect(mergeRects(rectA, rectB)).toStrictEqual(res);

		rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		rectB = { x1: 0, y1: 1, x2: 2, y2: 6 };
		res = [{ x1: 0, y1: 2, x2: 6, y2: 6 }];
		expect(mergeRects(rectA, rectB)).toStrictEqual(res);

		rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		rectB = { x1: 0, y1: 3, x2: 2, y2: 4 };
		res = [{ x1: 0, y1: 3, x2: 6, y2: 4 }];
		expect(mergeRects(rectA, rectB)).toStrictEqual(res);

		rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		rectB = { x1: 0, y1: 2, x2: 2, y2: 4 };
		res = [{ x1: 0, y1: 2, x2: 6, y2: 4 }];
		expect(mergeRects(rectA, rectB)).toStrictEqual(res);

		rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		rectB = { x1: 0, y1: 1, x2: 2, y2: 4 };
		res = [{ x1: 0, y1: 2, x2: 6, y2: 4 }];
		expect(mergeRects(rectA, rectB)).toStrictEqual(res);
	});

	test("right above", () => {
		let rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		let rectB = { x1: 0, y1: 5, x2: 2, y2: 7 };
		let res = [{ x1: 0, y1: 5, x2: 6, y2: 6 }];
		expect(mergeRects(rectA, rectB)).toStrictEqual(res);

		rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		rectB = { x1: 0, y1: 2, x2: 2, y2: 7 };
		res = [{ x1: 0, y1: 2, x2: 6, y2: 6 }];
		expect(mergeRects(rectA, rectB)).toStrictEqual(res);

		rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		rectB = { x1: 0, y1: 1, x2: 2, y2: 7 };
		res = [{ x1: 0, y1: 2, x2: 6, y2: 6 }];
		expect(mergeRects(rectA, rectB)).toStrictEqual(res);
	});

	test("top", () => {
		let rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		let rectB = { x1: 2, y1: 6, x2: 3, y2: 7 };
		let res = [{ x1: 2, y1: 2, x2: 3, y2: 7 }];
		expect(mergeRects(rectA, rectB)).toStrictEqual(res);

		rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		rectB = { x1: 2, y1: 6, x2: 6, y2: 7 };
		res = [{ x1: 2, y1: 2, x2: 6, y2: 7 }];
		expect(mergeRects(rectA, rectB)).toStrictEqual(res);

		rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		rectB = { x1: 2, y1: 6, x2: 7, y2: 7 };
		res = [{ x1: 2, y1: 2, x2: 6, y2: 7 }];
		expect(mergeRects(rectA, rectB)).toStrictEqual(res);

		rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		rectB = { x1: 3, y1: 6, x2: 5, y2: 7 };
		res = [{ x1: 3, y1: 2, x2: 5, y2: 7 }];
		expect(mergeRects(rectA, rectB)).toStrictEqual(res);

		rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		rectB = { x1: 3, y1: 6, x2: 6, y2: 7 };
		res = [{ x1: 3, y1: 2, x2: 6, y2: 7 }];
		expect(mergeRects(rectA, rectB)).toStrictEqual(res);

		rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		rectB = { x1: 3, y1: 6, x2: 7, y2: 7 };
		res = [{ x1: 3, y1: 2, x2: 6, y2: 7 }];
		expect(mergeRects(rectA, rectB)).toStrictEqual(res);
	});

	test("top left", () => {
		let rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		let rectB = { x1: 0, y1: 6, x2: 3, y2: 7 };
		let res = [{ x1: 2, y1: 2, x2: 3, y2: 7 }];
		expect(mergeRects(rectA, rectB)).toStrictEqual(res);

		rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		rectB = { x1: 0, y1: 6, x2: 6, y2: 7 };
		res = [{ x1: 2, y1: 2, x2: 6, y2: 7 }];
		expect(mergeRects(rectA, rectB)).toStrictEqual(res);

		rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		rectB = { x1: 0, y1: 6, x2: 7, y2: 7 };
		res = [{ x1: 2, y1: 2, x2: 6, y2: 7 }];
		expect(mergeRects(rectA, rectB)).toStrictEqual(res);
	});

	test("right  overlapping", () => {
		// let rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		// let rectB = { x1: 5, y1: 5, x2: 8, y2: 6 };
		// let res = [{ x1: 2, y1: 5, x2: 8, y2: 6 }];
		// expect(mergeRects(rectA, rectB)).toStrictEqual(res);
		// rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		// rectB = { x1: 5, y1: 2, x2: 8, y2: 6 };
		// res = [{ x1: 2, y1: 2, x2: 8, y2: 6 }];
		// expect(mergeRects(rectA, rectB)).toStrictEqual(res);
		// rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		// rectB = { x1: 5, y1: 1, x2: 8, y2: 6 };
		// res = [{ x1: 2, y1: 2, x2: 8, y2: 6 }];
		// expect(mergeRects(rectA, rectB)).toStrictEqual(res);
		// rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		// rectB = { x1: 5, y1: 3, x2: 8, y2: 4 };
		// res = [{ x1: 2, y1: 3, x2: 8, y2: 4 }];
		// expect(mergeRects(rectA, rectB)).toStrictEqual(res);
		// rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		// rectB = { x1: 5, y1: 2, x2: 8, y2: 4 };
		// res = [{ x1: 2, y1: 2, x2: 8, y2: 4 }];
		// expect(mergeRects(rectA, rectB)).toStrictEqual(res);
		// rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		// rectB = { x1: 5, y1: 1, x2: 8, y2: 4 };
		// res = [
		// 	{ x1: 5, y1: 1, x2: 6, y2: 6 },
		// 	{ x1: 2, y1: 2, x2: 8, y2: 4 },
		// ];
		// expect(mergeRects(rectA, rectB)).toStrictEqual(res);
	});

	test("right above  overlapping", () => {
		// let rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		// let rectB = { x1: 5, y1: 5, x2: 8, y2: 7 };
		// let res = [
		// 	{ x1: 5, y1: 2, x2: 6, y2: 7 },
		// 	{ x1: 2, y1: 5, x2: 8, y2: 6 },
		// ];
		// expect(mergeRects(rectA, rectB)).toStrictEqual(res);
		// rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		// rectB = { x1: 5, y1: 2, x2: 8, y2: 7 };
		// res = [{ x1: 2, y1: 2, x2: 8, y2: 6 }];
		// expect(mergeRects(rectA, rectB)).toStrictEqual(res);
		// rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		// rectB = { x1: 5, y1: 1, x2: 8, y2: 7 };
		// res = [{ x1: 2, y1: 2, x2: 8, y2: 6 }];
		// expect(mergeRects(rectA, rectB)).toStrictEqual(res);
	});

	test("top  overlapping", () => {
		// let rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		// let rectB = { x1: 2, y1: 1, x2: 3, y2: 3 };
		// let res = [{ x1: 2, y1: 1, x2: 3, y2: 6 }];
		// expect(mergeRects(rectA, rectB)).toStrictEqual(res);
		// rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		// rectB = { x1: 2, y1: 1, x2: 6, y2: 3 };
		// res = [{ x1: 2, y1: 1, x2: 6, y2: 6 }];
		// expect(mergeRects(rectA, rectB)).toStrictEqual(res);
		// rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		// rectB = { x1: 2, y1: 1, x2: 8, y2: 3 };
		// res = [{ x1: 2, y1: 1, x2: 6, y2: 6 }];
		// expect(mergeRects(rectA, rectB)).toStrictEqual(res);
		// rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		// rectB = { x1: 3, y1: 1, x2: 5, y2: 3 };
		// res = [{ x1: 3, y1: 1, x2: 5, y2: 6 }];
		// expect(mergeRects(rectA, rectB)).toStrictEqual(res);
		// rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		// rectB = { x1: 3, y1: 1, x2: 6, y2: 3 };
		// res = [{ x1: 3, y1: 1, x2: 6, y2: 6 }];
		// expect(mergeRects(rectA, rectB)).toStrictEqual(res);
		// rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		// rectB = { x1: 3, y1: 1, x2: 7, y2: 3 };
		// res = [
		// 	{ x1: 3, y1: 1, x2: 6, y2: 6 },
		// 	{ x1: 2, y1: 2, x2: 7, y2: 3 },
		// ];
		// expect(mergeRects(rectA, rectB)).toStrictEqual(res);
	});

	test("top left overlapping", () => {
		// let rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		// let rectB = { x1: 1, y1: 1, x2: 3, y2: 3 };
		// let res = [
		// 	{ x1: 1, y1: 2, x2: 6, y2: 3 },
		// 	{ x1: 2, y1: 1, x2: 3, y2: 6 },
		// ];
		// expect(mergeRects(rectA, rectB)).toStrictEqual(res);
		// rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		// rectB = { x1: 1, y1: 1, x2: 6, y2: 3 };
		// res = [{ x1: 2, y1: 1, x2: 6, y2: 6 }];
		// expect(mergeRects(rectA, rectB)).toStrictEqual(res);
		// rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		// rectB = { x1: 1, y1: 1, x2: 7, y2: 3 };
		// res = [{ x1: 2, y1: 1, x2: 6, y2: 6 }];
		// expect(mergeRects(rectA, rectB)).toStrictEqual(res);
	});
});
