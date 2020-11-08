import { subtractRect } from "./rectUtils";

test("subtractRect", () => {
	let rectA = { x: 2, y: 2, width: 4, height: 4 };
	let rectB = { x: 4, y: 3, width: 4, height: 2 };
	let res = [
		{ x: 2, y: 2, width: 2, height: 1 },
		{ x: 4, y: 2, width: 2, height: 1 },
		{ x: 4, y: 5, width: 2, height: 1 },
		{ x: 2, y: 5, width: 2, height: 1 },
		{ x: 2, y: 3, width: 2, height: 2 },
	];

	expect(subtractRect(rectA, rectB)).toStrictEqual(res);

	rectA = { x: 2, y: 2, width: 4, height: 4 };
	rectB = { x: 4, y: 4, width: 4, height: 2 };
	res = [
		{ x: 2, y: 2, width: 2, height: 2 },
		{ x: 4, y: 2, width: 2, height: 2 },
		{ x: 2, y: 4, width: 2, height: 2 },
	];
	expect(subtractRect(rectA, rectB)).toStrictEqual(res);
});
