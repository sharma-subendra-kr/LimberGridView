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

// import { IntervalTreesIterative } from "IntervalTreeJS";
// import { ClosestBST } from "ClosestBST";
import { getModifiedPositionData } from "../../store/variables/essentials";
import getPrivateConstants from "../../store/constants/privateConstants";
import {
	shrinkTopBottomWS,
	sweepLineForFreeSpace,
	assignAdjacentRects,
	mergeFreeRects,
	findOverlapped,
	arrange,
} from "./arrangeCore";
import {
	getMinMaxXY,
	getTopBottomWS,
	getItemsInWorkSpace,
	getItemsBelowBottomWorkSpace,
	// getItemDimenWithMargin,
	// getItemsToArrangeScore,
	// cBSTRectComparator,
	// cBSTLComp,
	// cBSTRComp,
	// getPerfectMatch,
	shiftItemsDown,
	getResizeWSItemsDetail,
} from "./arrangeUtils";
import {
	getRectObjectFromCo,
	// subtractRect,
	// doRectsOverlap,
	// areRectsAdjacent,
	// getCoordinates,
	// mergeRects,
	// isRectInside,
	// areRectsOnSameYAxisExPath,
	// areRectsIdentical,
} from "../rect/rectUtils";
import { shuffle } from "../array/arrayUtils";
// import { filter } from "../utils/utils";
// import Stack from "../stack/stack";
import {
	sleep,
	printUnmergedFreeRects,
	printMergedFreeRects,
	printResultStackRects,
	printStackRects,
	printMergedTempRects,
	printStackTopRect,
	printStackTopAdjRect,
	printMergedRect,
	printAdjRect,
} from "../debug/debug";

export const arrangeMove = async (
	context,
	affectedItems,
	toY,
	movedBottomY,
	isDemo = false
) => {
	const privateConstants = getPrivateConstants(context);
	const mpd = getModifiedPositionData(context);

	const p1 = performance.now();

	const idCount = { idCount: 0 };

	const { minY, maxY } = getMinMaxXY(
		context,
		affectedItems,
		undefined,
		undefined,
		toY,
		movedBottomY
	);

	// last element is moved or resized item;
	const itemsToArrange = new Array(affectedItems.length - 1);
	const iToALen = affectedItems.length - 1;
	for (let i = 0; i < iToALen; i++) {
		itemsToArrange[i] = affectedItems[i];
	}

	const workSpaceRectCo = {
		tl: { x: 0, y: minY },
		tr: { x: privateConstants.WIDTH, y: minY },
		br: { x: privateConstants.WIDTH, y: maxY },
		bl: { x: 0, y: maxY },
	};

	const combinedWorkSpaceRectCo = {
		tl: { ...workSpaceRectCo.tl },
		tr: { ...workSpaceRectCo.tr },
		br: { ...workSpaceRectCo.br },
		bl: { ...workSpaceRectCo.bl },
	};
	const { topWorkSpaceCo, bottomWorkSpaceCo } = getTopBottomWS(
		context,
		workSpaceRectCo,
		0,
		privateConstants.WIDTH
	);
	const shrinkRes = shrinkTopBottomWS(
		context,
		topWorkSpaceCo,
		bottomWorkSpaceCo
	);

	if (shrinkRes.integrateTop) {
		combinedWorkSpaceRectCo.tl = { ...topWorkSpaceCo.tl };
		combinedWorkSpaceRectCo.tr = { ...topWorkSpaceCo.tr };
	}
	if (shrinkRes.integrateBottom) {
		combinedWorkSpaceRectCo.br = { ...bottomWorkSpaceCo.br };
		combinedWorkSpaceRectCo.bl = { ...bottomWorkSpaceCo.bl };
	}

	let itemsInBottomWorkSpace = getItemsInWorkSpace(
		context,
		getRectObjectFromCo(bottomWorkSpaceCo),
		true
	);
	const itemsBelowBottomWorkSpace = getItemsBelowBottomWorkSpace(
		context,
		bottomWorkSpaceCo,
		true
	);

	let combinedWorkSpaceRect = getRectObjectFromCo(combinedWorkSpaceRectCo);
	let itemsInCombinedWorkSpace = getItemsInWorkSpace(
		context,
		combinedWorkSpaceRect
	);

	// const shiftHeight =
	// 	privateConstants.DEFINED_MIN_HEIGHT_AND_WIDTH -
	// 	privateConstants.MARGIN * 2 -
	// 	10;
	const shiftHeight =
		(privateConstants.DEFINED_MIN_HEIGHT_AND_WIDTH -
			privateConstants.MARGIN * 2) /
		2;

	let passCount = 0;
	let arranged = {};
	let arrangedCount = 0;
	let workSpaceResizeCount = 0;

	while (arrangedCount !== iToALen) {
		// sort items in workspace by lt.x  i.e horizontally
		// itemsInCombinedWorkSpace.sort((a, b) => a.x - b.x);

		const { it: freeRectsItY, idCount: lastId1 } = sweepLineForFreeSpace(
			context,
			combinedWorkSpaceRect,
			combinedWorkSpaceRectCo,
			itemsInCombinedWorkSpace,
			idCount.idCount
		);
		idCount.idCount = lastId1;

		// assignAdjacentRects(freeRectsItY);
		const freeRectsArr = freeRectsItY.getSortedData();
		// shuffle(freeRectsArr);

		// DEBUG:
		// printUnmergedFreeRects(
		// 	context,
		// 	freeRectsArr.map((o) => o.d)
		// );
		debugger;

		const {
			mergedRects,
			mergedRectsIt,
			idCount: lastId2,
		} = await mergeFreeRects(context, freeRectsArr, idCount.idCount);
		idCount.idCount = lastId2;

		// DEBUG:
		// printMergedFreeRects(
		// 	context,
		// 	mergedRects.map((o) => o.d)
		// );
		debugger;
		// const { overlappedRects } = findOverlapped(mergedRects);

		// DEBUG:
		// printMergedFreeRects(context, overlappedRects.map((o) => o.d));

		const {
			arranged: _arranged,
			itemsInBottomWorkSpace: _itemsInBottomWorkSpace,
			idCount: lastId3,
		} = await arrange(
			context,
			itemsToArrange.filter((id) => !arranged[id]),
			// overlappedRects,
			mergedRectsIt,
			getRectObjectFromCo(topWorkSpaceCo),
			getRectObjectFromCo(bottomWorkSpaceCo),
			combinedWorkSpaceRectCo,
			idCount.idCount
		);
		idCount.idCount = lastId3;

		itemsInBottomWorkSpace = [
			...itemsInBottomWorkSpace,
			...Object.keys(_itemsInBottomWorkSpace),
		];

		arranged = { ...arranged, ..._arranged };
		const _arrangedArr = Object.values(_arranged);
		itemsInCombinedWorkSpace = [...itemsInCombinedWorkSpace, ..._arrangedArr];

		arrangedCount += _arrangedArr.length;

		if (arrangedCount !== iToALen) {
			// resize workSpace and push bottom workspace down
			workSpaceResizeCount++;
			console.log("workSpaceResizeCount", workSpaceResizeCount);

			workSpaceRectCo.br.y += shiftHeight;
			workSpaceRectCo.bl.y += shiftHeight;
			if (bottomWorkSpaceCo) {
				bottomWorkSpaceCo.tl.y += shiftHeight;
				bottomWorkSpaceCo.tr.y += shiftHeight;
				bottomWorkSpaceCo.br.y += shiftHeight;
				bottomWorkSpaceCo.bl.y += shiftHeight;
			}
			combinedWorkSpaceRectCo.br.y += shiftHeight;
			combinedWorkSpaceRectCo.bl.y += shiftHeight;

			combinedWorkSpaceRect = getRectObjectFromCo(combinedWorkSpaceRectCo);

			shiftItemsDown(context, itemsInBottomWorkSpace, shiftHeight);
		}

		passCount++;

		if (passCount > 100) {
			throw "Arrange time out";
		}
	}

	if (workSpaceResizeCount > 0) {
		// push items in below bottom workspace below
		shiftItemsDown(
			context,
			itemsBelowBottomWorkSpace,
			shiftHeight * workSpaceResizeCount
		);

		// put items in bottom workspace and below bottom workspace in arranged map
		let len = itemsInBottomWorkSpace.length;
		for (let i = 0; i < len; i++) {
			arranged[itemsInBottomWorkSpace[i]] = mpd[itemsInBottomWorkSpace[i]];
		}

		len = itemsBelowBottomWorkSpace.length;
		for (let i = 0; i < len; i++) {
			arranged[itemsBelowBottomWorkSpace[i]] =
				mpd[itemsBelowBottomWorkSpace[i]];
		}
	}

	const p2 = performance.now();
	console.log("p1: ", p1);
	console.log("p2: ", p2);
	console.log("arrange total: ", p2 - p1);

	return arranged;
};

export const arrangeResize = async (
	context,
	affectedItems,
	resizedBottomY,
	resizedRightX,
	isDemo = false
) => {
	const privateConstants = getPrivateConstants(context);

	const p1 = performance.now();

	const idCount = { idCount: 0 };

	const { minX, maxX, minY, maxY } = getMinMaxXY(
		context,
		affectedItems,
		resizedRightX,
		resizedBottomY,
		undefined,
		undefined
	);

	// last element is moved or resized item;
	let itemsToArrange = new Array(affectedItems.length - 1);
	let iToALen = affectedItems.length - 1;
	for (let i = 0; i < iToALen; i++) {
		itemsToArrange[i] = affectedItems[i];
	}

	const workSpaceRectCo = {
		tl: { x: 0, y: minY },
		tr: { x: privateConstants.WIDTH, y: minY },
		br: { x: privateConstants.WIDTH, y: maxY },
		bl: { x: 0, y: maxY },
	};

	const combinedWorkSpaceRectCo = {
		tl: { ...workSpaceRectCo.tl },
		tr: { ...workSpaceRectCo.tr },
		br: { ...workSpaceRectCo.br },
		bl: { ...workSpaceRectCo.bl },
	};

	const { topWorkSpaceCo, bottomWorkSpaceCo } = getTopBottomWS(
		context,
		workSpaceRectCo,
		0,
		privateConstants.WIDTH
	);
	const shrinkRes = shrinkTopBottomWS(
		context,
		topWorkSpaceCo,
		bottomWorkSpaceCo
	);

	if (shrinkRes.integrateTop) {
		combinedWorkSpaceRectCo.tl = { ...topWorkSpaceCo.tl };
		combinedWorkSpaceRectCo.tr = { ...topWorkSpaceCo.tr };
	}
	if (shrinkRes.integrateBottom) {
		combinedWorkSpaceRectCo.br = { ...bottomWorkSpaceCo.br };
		combinedWorkSpaceRectCo.bl = { ...bottomWorkSpaceCo.bl };
	}

	const _workSpaceRectCo = {
		// can safely do these operations
		// work space width should be greather than or equal to "DEFINED_MIN_HEIGHT_AND_WIDTH + (MARGIN * 2)"
		// minX - privateConstants.MARGIN
		// maxX + privateConstants.MARGIN
		// above two operations are already done in getMinMaxXY
		tl: { x: minX, y: minY },
		tr: { x: maxX, y: minY },
		br: { x: maxX, y: maxY },
		bl: { x: minX, y: maxY },
	};

	const _combinedWorkSpaceRectCo = {
		tl: { ..._workSpaceRectCo.tl },
		tr: { ..._workSpaceRectCo.tr },
		br: { ..._workSpaceRectCo.br },
		bl: { ..._workSpaceRectCo.bl },
	};

	const {
		topWorkSpaceCo: _topWorkSpaceCo,
		bottomWorkSpaceCo: _bottomWorkSpaceCo,
	} = getTopBottomWS(
		context,
		_workSpaceRectCo,
		minX - privateConstants.MARGIN,
		maxX + privateConstants.MARGIN
	);

	const _shrinkRes = shrinkTopBottomWS(context, _topWorkSpaceCo);

	if (_shrinkRes.integrateTop) {
		_combinedWorkSpaceRectCo.tl = { ..._topWorkSpaceCo.tl };
		_combinedWorkSpaceRectCo.tr = { ..._topWorkSpaceCo.tr };
	}
	if (_bottomWorkSpaceCo) {
		_combinedWorkSpaceRectCo.br = { ..._bottomWorkSpaceCo.br };
		_combinedWorkSpaceRectCo.bl = { ..._bottomWorkSpaceCo.bl };
	}

	const combinedWorkSpaceRect = getRectObjectFromCo(combinedWorkSpaceRectCo);
	let itemsInCombinedWorkSpace = getItemsInWorkSpace(
		context,
		combinedWorkSpaceRect
	);

	let _combinedWorkSpaceRect = getRectObjectFromCo(_combinedWorkSpaceRectCo);

	const incrementHeight = privateConstants.DEFINED_MIN_HEIGHT_AND_WIDTH * 2;

	let passCount = 0;
	let arranged = {};
	let arrangedCount = 0;
	let workSpaceResizeCount = 0;

	while (arrangedCount !== iToALen) {
		let freeRectsItY;
		if (passCount === 0) {
			// sort items in workspace by lt.x  i.e horizontally
			// itemsInCombinedWorkSpace.sort((a, b) => a.x - b.x);

			const { it: _freeRectsItY, idCount: lastId1 } = sweepLineForFreeSpace(
				context,
				combinedWorkSpaceRect,
				combinedWorkSpaceRectCo,
				itemsInCombinedWorkSpace,
				idCount.idCount
			);
			freeRectsItY = _freeRectsItY;
			idCount.idCount = lastId1;
		} else if (passCount === 1) {
			const {
				itemsInWorkSpace: _itemsInCombinedWorkSpace,
				updatedItemsToArrange,
			} = getResizeWSItemsDetail(
				context,
				_workSpaceRectCo,
				_topWorkSpaceCo,
				_bottomWorkSpaceCo,
				_combinedWorkSpaceRectCo,
				arranged,
				itemsToArrange
			);
			itemsInCombinedWorkSpace = _itemsInCombinedWorkSpace;
			itemsToArrange = updatedItemsToArrange;
			iToALen = updatedItemsToArrange.length + arrangedCount;
			passCount++;
			continue;
		} else if (passCount >= 2) {
			// sort items in workspace by lt.x  i.e horizontally
			// itemsInCombinedWorkSpace.sort((a, b) => a.x - b.x);

			const { it: _freeRectsItY, idCount: lastId1 } = sweepLineForFreeSpace(
				context,
				_combinedWorkSpaceRect,
				_combinedWorkSpaceRectCo,
				itemsInCombinedWorkSpace,
				idCount.idCount
			);
			freeRectsItY = _freeRectsItY;
			idCount.idCount = lastId1;
		}

		// assignAdjacentRects(freeRectsItY);
		const freeRectsArr = freeRectsItY.getSortedData();
		// shuffle(freeRectsArr);

		// DEBUG:
		// printUnmergedFreeRects(
		// 	context,
		// 	freeRectsArr.map((o) => o.d)
		// );

		const {
			mergedRects,
			mergedRectsIt,
			idCount: lastId2,
		} = await mergeFreeRects(context, freeRectsArr, idCount.idCount);
		idCount.idCount = lastId2;

		// DEBUG:
		// printMergedFreeRects(
		// 	context,
		// 	mergedRects.map((o) => o.d)
		// );

		// const { overlappedRects } = findOverlapped(mergedRects);

		// DEBUG:
		// printMergedFreeRects(
		// 	context,
		// 	overlappedRects.map((o) => o.d)
		// );

		const { arranged: _arranged, idCount: lastId3 } = await arrange(
			context,
			itemsToArrange.filter((id) => !arranged[id]),
			// overlappedRects,
			mergedRectsIt,
			getRectObjectFromCo(topWorkSpaceCo),
			getRectObjectFromCo(bottomWorkSpaceCo),
			passCount === 0 ? combinedWorkSpaceRectCo : _combinedWorkSpaceRectCo,
			idCount.idCount
		);
		idCount.idCount = lastId3;

		arranged = { ...arranged, ..._arranged };
		const _arrangedArr = Object.values(_arranged);
		itemsInCombinedWorkSpace = [...itemsInCombinedWorkSpace, ..._arrangedArr];

		arrangedCount += _arrangedArr.length;

		if (arrangedCount !== iToALen && passCount >= 2) {
			// resize combined workSpace
			workSpaceResizeCount++;
			console.log("workSpaceResizeCount", workSpaceResizeCount);

			_combinedWorkSpaceRectCo.br.y += incrementHeight;
			_combinedWorkSpaceRectCo.bl.y += incrementHeight;
			_combinedWorkSpaceRect = getRectObjectFromCo(_combinedWorkSpaceRectCo);
		}

		passCount++;

		if (passCount > 1000) {
			throw "Arrange time out";
		}
	}

	const p2 = performance.now();
	console.log("p1: ", p1);
	console.log("p2: ", p2);
	console.log("arrange total: ", p2 - p1);

	return arranged;
};

export const arrangeFromHeight = async (context, itemsToArrange, height) => {
	const privateConstants = getPrivateConstants(context);

	const p1 = performance.now();

	const idCount = { idCount: 0 };

	const minX = 0;
	const maxX = privateConstants.WIDTH;
	const minY = height;
	const maxY = height + privateConstants.DEFINED_MIN_HEIGHT_AND_WIDTH;

	const iToALen = itemsToArrange.length;

	const workSpaceRectCo = {
		tl: { x: minX, y: minY },
		tr: { x: maxX, y: minY },
		br: { x: maxX, y: maxY },
		bl: { x: minX, y: maxY },
	};

	const combinedWorkSpaceRectCo = {
		tl: { ...workSpaceRectCo.tl },
		tr: { ...workSpaceRectCo.tr },
		br: { ...workSpaceRectCo.br },
		bl: { ...workSpaceRectCo.bl },
	};

	const { topWorkSpaceCo } = getTopBottomWS(
		context,
		workSpaceRectCo,
		0,
		privateConstants.WIDTH
	);
	const shrinkRes = shrinkTopBottomWS(context, topWorkSpaceCo);

	if (shrinkRes.integrateTop) {
		combinedWorkSpaceRectCo.tl = { ...topWorkSpaceCo.tl };
		combinedWorkSpaceRectCo.tr = { ...topWorkSpaceCo.tr };
	}

	let combinedWorkSpaceRect = getRectObjectFromCo(combinedWorkSpaceRectCo);
	let itemsInCombinedWorkSpace = getItemsInWorkSpace(
		context,
		combinedWorkSpaceRect
	);

	const shiftHeight =
		privateConstants.DEFINED_MIN_HEIGHT_AND_WIDTH -
		privateConstants.MARGIN * 2 -
		10;

	let passCount = 0;
	let arranged = {};
	let arrangedCount = 0;
	let workSpaceResizeCount = 0;

	while (arrangedCount !== iToALen) {
		// sort items in workspace by lt.x  i.e horizontally
		// itemsInCombinedWorkSpace.sort((a, b) => a.x - b.x);

		const { it: freeRectsItY, idCount: lastId1 } = sweepLineForFreeSpace(
			context,
			combinedWorkSpaceRect,
			combinedWorkSpaceRectCo,
			itemsInCombinedWorkSpace,
			idCount.idCount
		);
		idCount.idCount = lastId1;

		// assignAdjacentRects(freeRectsItY);
		const freeRectsArr = freeRectsItY.getSortedData();
		// shuffle(freeRectsArr);

		// DEBUG:
		// printUnmergedFreeRects(context, freeRectsArr.map((o) => o.d));

		const {
			mergedRects,
			mergedRectsIt,
			idCount: lastId2,
		} = await mergeFreeRects(context, freeRectsArr, idCount.idCount);
		idCount.idCount = lastId2;

		// DEBUG:
		// printMergedFreeRects(context, mergedRects.map((o) => o.d));

		// const { overlappedRects } = findOverlapped(mergedRects);

		// DEBUG:
		// printMergedFreeRects(context, overlappedRects.map((o) => o.d));

		const { arranged: _arranged, idCount: lastId3 } = await arrange(
			context,
			itemsToArrange.filter((id) => !arranged[id]),
			// overlappedRects,
			mergedRectsIt,
			getRectObjectFromCo(topWorkSpaceCo),
			undefined,
			combinedWorkSpaceRectCo,
			idCount.idCount
		);
		idCount.idCount = lastId3;

		arranged = { ...arranged, ..._arranged };
		const _arrangedArr = Object.values(_arranged);
		itemsInCombinedWorkSpace = [...itemsInCombinedWorkSpace, ..._arrangedArr];

		arrangedCount += _arrangedArr.length;

		if (arrangedCount !== iToALen) {
			// resize workSpace and push bottom workspace down
			workSpaceResizeCount++;
			console.log("workSpaceResizeCount", workSpaceResizeCount);

			workSpaceRectCo.br.y += shiftHeight;
			workSpaceRectCo.bl.y += shiftHeight;
			combinedWorkSpaceRectCo.br.y += shiftHeight;
			combinedWorkSpaceRectCo.bl.y += shiftHeight;

			combinedWorkSpaceRect = getRectObjectFromCo(combinedWorkSpaceRectCo);
		}

		passCount++;

		if (passCount > 10000) {
			throw "Arrange time out";
		}
	}

	const p2 = performance.now();
	console.log("p1: ", p1);
	console.log("p2: ", p2);
	console.log("arrange total: ", p2 - p1);

	return arranged;
};
