import { subtractRect } from "./rectUtils";

describe("subtractRect", () => {
	test("subtractRect", () => {
		let rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		let rectB = { x1: 3, y1: 3, x2: 5, y2: 5 };
		let res = [
			{ x1: 2, y1: 2, x2: 3, y2: 3 },
			{ x1: 3, y1: 2, x2: 5, y2: 3 },
			{ x1: 5, y1: 2, x2: 6, y2: 3 },
			{ x1: 5, y1: 3, x2: 6, y2: 5 },
			{ x1: 5, y1: 5, x2: 6, y2: 6 },
			{ x1: 3, y1: 5, x2: 5, y2: 6 },
			{ x1: 2, y1: 5, x2: 3, y2: 6 },
			{ x1: 2, y1: 3, x2: 3, y2: 5 },
		];

		expect(subtractRect(rectA, rectB)).toStrictEqual(res);

		rectA = { x1: 3, y1: 3, x2: 5, y2: 5 };
		rectB = { x1: 2, y1: 2, x2: 6, y2: 6 };
		res = [];

		expect(subtractRect(rectA, rectB)).toStrictEqual(res);

		rectA = { x1: 2, y1: 2, x2: 6, y2: 6 };
		rectB = { x1: 2, y1: 2, x2: 6, y2: 6 };
		res = [];

		expect(subtractRect(rectA, rectB)).toStrictEqual(res);
	});
});
