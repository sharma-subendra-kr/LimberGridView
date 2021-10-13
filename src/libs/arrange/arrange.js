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

// import {
// 	printUnmergedFreeRects,
// 	printMergedFreeRects,
// 	printResultStackRects,
// 	printStackRects,
// 	printMergedTempRects,
// 	printStackTopRect,
// 	printStackTopAdjRect,
// 	printMergedRect,
// 	printAdjRect,
// } from "../debug/debug";
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

	// printStackTopRect(context, workSpaceRect);
	// debugger;

	const combinedWorkSpaceRect = { ...workSpaceRect };
	const { topWorkSpace, bottomWorkSpace } = getTopBottomWS(
		context,
		workSpaceRect,
		0,
		privateConstants.WIDTH
	);

	// printStackTopRect(context, topWorkSpace);
	// debugger;
	// printStackTopRect(context, bottomWorkSpace);
	// debugger;

	// const shrinkRes = shrinkTopBottomWS(context, topWorkSpace, bottomWorkSpace);
	shrinkTopBottomWS(context, topWorkSpace, bottomWorkSpace);

	// printStackTopRect(context, topWorkSpace);
	// debugger;
	// printStackTopRect(context, bottomWorkSpace);
	// debugger;

	combinedWorkSpaceRect.y1 = topWorkSpace.y1;
	combinedWorkSpaceRect.y2 = bottomWorkSpace.y2;

	// printStackTopRect(context, combinedWorkSpaceRect);
	// debugger;

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
	let resized = {};
	let workSpaceResizeCount = 0;

	while (arrangedCount !== iToALen) {
		const { rt: freeRects } = sweepLineForFreeSpace(
			context,
			combinedWorkSpaceRect,
			itemsInCombinedWorkSpace,
			idCount
		);

		let freeRectsArr = freeRects.getData();
		freeRectsArr = freeRectsArr.filter(
			(r) => r.x2 - r.x1 > 0.5 && r.y2 - r.y1 > 0.5
		);

		const { mergedRectsRt } = await mergeFreeRects(
			context,
			freeRectsArr,
			idCount
		);
		// debugger;
		// printMergedFreeRects(context, mergedRectsRt.getData());

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

	const p2 = performance.now();
	console.log("p1: ", p1);
	console.log("p2: ", p2);
	console.log("workSpaceResizeCount", workSpaceResizeCount);
	console.log("itemsToArrange", iToALen);
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
