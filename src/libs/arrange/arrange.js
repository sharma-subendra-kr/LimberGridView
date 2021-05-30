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

import { getModifiedPositionData } from "../../store/variables/essentials";
import getPrivateConstants from "../../store/constants/privateConstants";
import {
	shrinkTopBottomWS,
	sweepLineForFreeSpace,
	mergeFreeRects,
	arrange,
} from "./arrangeCore";
import {
	getMinMaxXY,
	getTopBottomWS,
	getItemsInWorkSpace,
	getItemsBelowBottomWorkSpace,
	getItemsInWorkSpaceMap,
	shiftItemsDown,
} from "./arrangeUtils";
import { sanitizeDimension } from "../utils/items";
import { sleep } from "../utils/utils";
import {
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
// import { printNodeData } from "../debug/debugUtils";

export const arrangeMove = async (
	context,
	affectedItems,
	toY,
	movedBottomY
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

	const workSpaceRect = {
		x1: 0,
		x2: privateConstants.WIDTH,
		y1: minY,
		y2: maxY,
	};

	await sleep(1000);
	printStackTopRect(context, workSpaceRect);

	const combinedWorkSpaceRect = { ...workSpaceRect };
	const { topWorkSpace, bottomWorkSpace } = getTopBottomWS(
		context,
		workSpaceRect,
		0,
		privateConstants.WIDTH
	);

	await sleep(1000);
	printStackTopRect(context, topWorkSpace);
	await sleep(1000);
	printStackTopRect(context, bottomWorkSpace);

	shrinkTopBottomWS(context, topWorkSpace, bottomWorkSpace);

	await sleep(1000);
	printStackTopRect(context, topWorkSpace);
	await sleep(1000);
	printStackTopRect(context, bottomWorkSpace);

	combinedWorkSpaceRect.y1 = topWorkSpace.y1;
	combinedWorkSpaceRect.y2 = bottomWorkSpace.y2;

	await sleep(1000);
	printStackTopRect(context, combinedWorkSpaceRect);

	let itemsInCombinedWorkSpace = getItemsInWorkSpace(
		context,
		combinedWorkSpaceRect
	);
	let itemsInCombinedWorkSpaceMap = getItemsInWorkSpace(
		context,
		combinedWorkSpaceRect,
		true
	);
	itemsInCombinedWorkSpaceMap = getItemsInWorkSpaceMap(
		itemsInCombinedWorkSpaceMap
	);

	let itemsInBottomWorkSpace = getItemsInWorkSpace(
		context,
		bottomWorkSpace,
		true,
		itemsInCombinedWorkSpaceMap
	);
	const itemsBelowBottomWorkSpace = getItemsBelowBottomWorkSpace(
		context,
		bottomWorkSpace,
		true,
		itemsInCombinedWorkSpaceMap
	);

	const shiftHeight =
		(privateConstants.DEFINED_MIN_HEIGHT_AND_WIDTH -
			privateConstants.MARGIN * 2) /
		2;

	let passCount = 0;
	let arranged = {};
	let arrangedCount = 0;
	let resized = {};
	let workSpaceResizeCount = 0;

	while (arrangedCount !== iToALen) {
		printMergedFreeRects(context, []);
		const { rt: freeRects } = await sweepLineForFreeSpace(
			context,
			combinedWorkSpaceRect,
			itemsInCombinedWorkSpace,
			idCount
		);
		await sleep(1000);
		printStackTopRect(context);

		let freeRectsArr = freeRects.getData();
		freeRectsArr = freeRectsArr.filter(
			(r) => r.x2 - r.x1 > 0.5 && r.y2 - r.y1 > 0.5
		);

		await sleep(1000);
		printUnmergedFreeRects(context, freeRectsArr);
		printMergedFreeRects(context, []);

		await sleep(3000);
		printUnmergedFreeRects(context, []);
		printMergedFreeRects(context, []);

		const { mergedRectsRt } = await mergeFreeRects(
			context,
			freeRectsArr,
			idCount
		);

		const {
			arranged: _arranged,
			itemsInBottomWorkSpace: _itemsInBottomWorkSpace,
			resized: _resized,
		} = await arrange(
			context,
			itemsToArrange.filter((id) => !arranged[id]),
			mergedRectsRt,
			topWorkSpace,
			bottomWorkSpace,
			combinedWorkSpaceRect,
			idCount
		);

		itemsInBottomWorkSpace = [
			...itemsInBottomWorkSpace,
			...Object.keys(_itemsInBottomWorkSpace),
		];

		arranged = { ...arranged, ..._arranged };
		resized = { ...resized, ..._resized };
		const _arrangedArr = Object.values(_arranged);
		itemsInCombinedWorkSpace = [...itemsInCombinedWorkSpace, ..._arrangedArr];

		arrangedCount += _arrangedArr.length;

		if (arrangedCount !== iToALen) {
			// resize workSpace and push bottom workspace down
			workSpaceResizeCount++;

			workSpaceRect.y2 += shiftHeight;
			if (bottomWorkSpace) {
				bottomWorkSpace.y1 += shiftHeight;
				bottomWorkSpace.y2 += shiftHeight;
			}
			combinedWorkSpaceRect.y2 += shiftHeight;

			shiftItemsDown(context, itemsInBottomWorkSpace, shiftHeight);
		}

		passCount++;

		if (passCount > 1000) {
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

	await sleep(1000);
	printUnmergedFreeRects(context, []);
	printMergedFreeRects(context, []);

	const p2 = performance.now();
	console.log("p1: ", p1);
	console.log("p2: ", p2);
	console.log("workSpaceResizeCount", workSpaceResizeCount);
	console.log("arrange total: ", p2 - p1);

	if (context.options.callbacks?.getArrangeTime) {
		context.options.callbacks.getArrangeTime(
			p2 - p1,
			workSpaceResizeCount,
			idCount.idCount
		);
	}

	return { arranged, resized };
};

/*
 * *************************************************************************
 * Attange From Heght
 * *************************************************************************
 */

export const arrangeFromHeight = async (context, itemsToArrange, height) => {
	const privateConstants = getPrivateConstants(context);

	const p1 = performance.now();

	const idCount = { idCount: 0 };

	const minX = 0;
	const maxX = privateConstants.WIDTH;
	const minY = height;
	const maxY = height + privateConstants.DEFINED_MIN_HEIGHT_AND_WIDTH;

	const iToALen = itemsToArrange.length;

	const workSpaceRect = {
		x1: minX,
		x2: maxX,
		y1: minY,
		y2: maxY,
	};

	const combinedWorkSpaceRect = { ...workSpaceRect };

	const { topWorkSpace } = getTopBottomWS(
		context,
		workSpaceRect,
		0,
		privateConstants.WIDTH
	);

	shrinkTopBottomWS(context, topWorkSpace);
	combinedWorkSpaceRect.y1 = topWorkSpace.y1;

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
		const { rt: freeRects } = sweepLineForFreeSpace(
			context,
			combinedWorkSpaceRect,
			itemsInCombinedWorkSpace,
			idCount
		);

		const freeRectsArr = freeRects.getData();

		const { mergedRectsRt } = await mergeFreeRects(
			context,
			freeRectsArr,
			idCount
		);

		const { arranged: _arranged } = await arrange(
			context,
			itemsToArrange.filter((id) => !arranged[id]),
			mergedRectsRt,
			topWorkSpace,
			undefined,
			combinedWorkSpaceRect,
			idCount
		);

		arranged = { ...arranged, ..._arranged };
		const _arrangedArr = Object.values(_arranged);
		itemsInCombinedWorkSpace = [...itemsInCombinedWorkSpace, ..._arrangedArr];

		arrangedCount += _arrangedArr.length;

		if (arrangedCount !== iToALen) {
			// resize workSpace and push bottom workspace down
			workSpaceResizeCount++;

			workSpaceRect.y2 += shiftHeight;
			combinedWorkSpaceRect.y2 += shiftHeight;
		}

		passCount++;

		if (passCount > 10000) {
			throw "Arrange time out";
		}
	}

	const p2 = performance.now();
	console.log("p1: ", p1);
	console.log("p2: ", p2);
	console.log("workSpaceResizeCount", workSpaceResizeCount);
	console.log("arrange total: ", p2 - p1);

	if (context.options.callbacks?.getArrangeTime) {
		context.options.callbacks.getArrangeTime(
			p2 - p1,
			workSpaceResizeCount,
			idCount.idCount
		);
	}

	return arranged;
};

export const autoArrangeGrid = async (context) => {
	const mpd = getModifiedPositionData(context);
	const privateConstants = getPrivateConstants(context);

	const width = privateConstants.MIN_HEIGHT_AND_WIDTH * 2;
	const height = width;
	const rowSize = Math.floor(privateConstants.WIDTH / width);
	const len = mpd.length;
	let iter = 0;
	for (let i = 0; i < len; i += rowSize) {
		const row = i / rowSize;
		for (let j = 0; j < rowSize && iter < len; j++) {
			mpd[iter].x1 =
				j * privateConstants.MARGIN * 2 + j * width + privateConstants.MARGIN;
			mpd[iter].x2 = mpd[iter].x1 + width;
			mpd[iter].y1 =
				row * privateConstants.MARGIN * 2 +
				row * height +
				privateConstants.MARGIN;
			mpd[iter].y2 = mpd[iter].y1 + height;

			mpd[iter].x = mpd[iter].x1;
			mpd[iter].y = mpd[iter].y1;

			sanitizeDimension(mpd[iter]);

			mpd[iter].mX1 = mpd[iter].x1 - privateConstants.MARGIN;
			mpd[iter].mX2 = mpd[iter].x2 + privateConstants.MARGIN;
			mpd[iter].mY1 = mpd[iter].y1 - privateConstants.MARGIN;
			mpd[iter].mY2 = mpd[iter].y1 + privateConstants.MARGIN;

			mpd[iter].mX = mpd[iter].mX1;
			mpd[iter].mY = mpd[iter].mY2;
			iter++;
		}
	}
};

// export const arrangeResize = async (
// 	context,
// 	affectedItems,
// 	resizedBottomY,
// 	resizedRightX
// ) => {
// 	const privateConstants = getPrivateConstants(context);

// 	const p1 = performance.now();

// 	const idCount = { idCount: 0 };

// 	const { minX, maxX, minY, maxY } = getMinMaxXY(
// 		context,
// 		affectedItems,
// 		resizedRightX,
// 		resizedBottomY,
// 		undefined,
// 		undefined
// 	);

// 	// last element is moved or resized item;
// 	let itemsToArrange = new Array(affectedItems.length - 1);
// 	let iToALen = affectedItems.length - 1;
// 	for (let i = 0; i < iToALen; i++) {
// 		itemsToArrange[i] = affectedItems[i];
// 	}

// 	const workSpaceRectCo = {
// 		tl: { x: 0, y: minY },
// 		tr: { x: privateConstants.WIDTH, y: minY },
// 		br: { x: privateConstants.WIDTH, y: maxY },
// 		bl: { x: 0, y: maxY },
// 	};

// 	const combinedWorkSpaceRectCo = {
// 		tl: { ...workSpaceRectCo.tl },
// 		tr: { ...workSpaceRectCo.tr },
// 		br: { ...workSpaceRectCo.br },
// 		bl: { ...workSpaceRectCo.bl },
// 	};

// 	const { topWorkSpaceCo, bottomWorkSpaceCo } = getTopBottomWS(
// 		context,
// 		workSpaceRectCo,
// 		0,
// 		privateConstants.WIDTH
// 	);
// 	const shrinkRes = shrinkTopBottomWS(
// 		context,
// 		topWorkSpaceCo,
// 		bottomWorkSpaceCo
// 	);

// 	if (shrinkRes.integrateTop) {
// 		combinedWorkSpaceRectCo.tl = { ...topWorkSpaceCo.tl };
// 		combinedWorkSpaceRectCo.tr = { ...topWorkSpaceCo.tr };
// 	}
// 	if (shrinkRes.integrateBottom) {
// 		combinedWorkSpaceRectCo.br = { ...bottomWorkSpaceCo.br };
// 		combinedWorkSpaceRectCo.bl = { ...bottomWorkSpaceCo.bl };
// 	}

// 	const _workSpaceRectCo = {
// 		// can safely do these operations
// 		// work space width should be greather than or equal to "DEFINED_MIN_HEIGHT_AND_WIDTH + (MARGIN * 2)"
// 		// minX - privateConstants.MARGIN
// 		// maxX + privateConstants.MARGIN
// 		// above two operations are already done in getMinMaxXY
// 		tl: { x: minX, y: minY },
// 		tr: { x: maxX, y: minY },
// 		br: { x: maxX, y: maxY },
// 		bl: { x: minX, y: maxY },
// 	};

// 	const _combinedWorkSpaceRectCo = {
// 		tl: { ..._workSpaceRectCo.tl },
// 		tr: { ..._workSpaceRectCo.tr },
// 		br: { ..._workSpaceRectCo.br },
// 		bl: { ..._workSpaceRectCo.bl },
// 	};

// 	const {
// 		topWorkSpaceCo: _topWorkSpaceCo,
// 		bottomWorkSpaceCo: _bottomWorkSpaceCo,
// 	} = getTopBottomWS(context, _workSpaceRectCo, minX, maxX);

// 	const _shrinkRes = shrinkTopBottomWS(context, _topWorkSpaceCo);

// 	if (_shrinkRes.integrateTop) {
// 		_combinedWorkSpaceRectCo.tl = { ..._topWorkSpaceCo.tl };
// 		_combinedWorkSpaceRectCo.tr = { ..._topWorkSpaceCo.tr };
// 	}
// 	if (_bottomWorkSpaceCo) {
// 		_combinedWorkSpaceRectCo.br = { ..._bottomWorkSpaceCo.br };
// 		_combinedWorkSpaceRectCo.bl = { ..._bottomWorkSpaceCo.bl };
// 	}

// 	const combinedWorkSpaceRect = getRectObjectFromCo(combinedWorkSpaceRectCo);
// 	let itemsInCombinedWorkSpace = getItemsInWorkSpace(
// 		context,
// 		combinedWorkSpaceRect
// 	);

// 	let _combinedWorkSpaceRect = getRectObjectFromCo(_combinedWorkSpaceRectCo);

// 	const incrementHeight = privateConstants.DEFINED_MIN_HEIGHT_AND_WIDTH * 2;

// 	let passCount = 0;
// 	let arranged = {};
// 	let arrangedCount = 0;
// 	let workSpaceResizeCount = 0;

// 	while (arrangedCount !== iToALen) {
// 		let freeRects;
// 		if (passCount === 0) {
// 			const { rt: _freeRects } = sweepLineForFreeSpace(
// 				context,
// 				combinedWorkSpaceRect,
// 				combinedWorkSpaceRectCo,
// 				itemsInCombinedWorkSpace,
// 				idCount
// 			);
// 			freeRects = _freeRects;
// 		} else if (passCount === 1) {
// 			const {
// 				itemsInWorkSpace: _itemsInCombinedWorkSpace,
// 				updatedItemsToArrange,
// 			} = getResizeWSItemsDetail(
// 				context,
// 				_workSpaceRectCo,
// 				_topWorkSpaceCo,
// 				_bottomWorkSpaceCo,
// 				_combinedWorkSpaceRectCo,
// 				arranged,
// 				itemsToArrange
// 			);
// 			itemsInCombinedWorkSpace = _itemsInCombinedWorkSpace;
// 			itemsToArrange = updatedItemsToArrange;
// 			iToALen = updatedItemsToArrange.length + arrangedCount;
// 			passCount++;
// 			continue;
// 		} else if (passCount >= 2) {
// 			const { rt: _freeRects } = sweepLineForFreeSpace(
// 				context,
// 				_combinedWorkSpaceRect,
// 				_combinedWorkSpaceRectCo,
// 				itemsInCombinedWorkSpace,
// 				idCount
// 			);
// 			freeRects = _freeRects;
// 		}

// 		const freeRectsArr = freeRects.getData();

// 		const { mergedRectsRt } = await mergeFreeRects(
// 			context,
// 			freeRectsArr,
// 			idCount
// 		);

// 		const { arranged: _arranged } = await arrange(
// 			context,
// 			itemsToArrange.filter((id) => !arranged[id]),
// 			mergedRectsRt,
// 			getRectObjectFromCo(topWorkSpaceCo),
// 			getRectObjectFromCo(bottomWorkSpaceCo),
// 			passCount === 0 ? combinedWorkSpaceRectCo : _combinedWorkSpaceRectCo,
// 			idCount
// 		);

// 		arranged = { ...arranged, ..._arranged };
// 		const _arrangedArr = Object.values(_arranged);
// 		itemsInCombinedWorkSpace = [...itemsInCombinedWorkSpace, ..._arrangedArr];

// 		arrangedCount += _arrangedArr.length;

// 		if (arrangedCount !== iToALen && passCount >= 2) {
// 			// resize combined workSpace
// 			workSpaceResizeCount++;

// 			_combinedWorkSpaceRectCo.br.y += incrementHeight;
// 			_combinedWorkSpaceRectCo.bl.y += incrementHeight;
// 			_combinedWorkSpaceRect = getRectObjectFromCo(_combinedWorkSpaceRectCo);
// 		}

// 		passCount++;
// 		if (passCount > 1000) {
// 			throw "Arrange time out";
// 		}
// 	}

// 	const p2 = performance.now();
// 	console.log("p1: ", p1);
// 	console.log("p2: ", p2);
// 	console.log("workSpaceResizeCount", workSpaceResizeCount);
// 	console.log("arrange total: ", p2 - p1);

// 	return arranged;
// };
