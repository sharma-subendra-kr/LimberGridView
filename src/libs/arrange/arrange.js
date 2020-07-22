/*

This is a release of LimberGridView 0.0.0, brought to you by Subendra Kumar Sharma.
This software is released under the GNU General Public License version 3, or (at your option) any later version.

LimberGridView, a powerful JavaScript Libary that gives you flexible, movable, resizable(any size) and auto-arranging grids. 

Copyright © 2018-2020, Subendra Kumar Sharma. All Rights reserved. (sharma.subendra.kr@gmail.com, sharma.subendrakr@yahoo.com)

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

*/

import { IntervalTreesIterative } from "interval-trees";
import { ClosestBST } from "closest-bst";
import {
	getPositionData,
	getModifiedPositionData,
} from "../../store/variables/essentials";
import getElements from "../../store/variables/elements";
import getPrivateConstants, {
	getPrivateConstantByName,
} from "../../store/constants/privateConstants";
import getPublicConstants, {
	getPublicConstantByName,
} from "../../store/constants/publicConstants";
import {
	getMinMaxXY,
	getTopBottomWS,
	getItemsInWorkSpace,
	getItemsBelowBottomWorkSpace,
	getItemDimenWithMargin,
	getItemsToArrangeScore,
	// assignScoreToFreeRects,
	cBSTRectComparator,
	cBSTLComp,
	cBSTRComp,
	getPerfectMatch,
	shiftItemsDown,
	getResizeWSItemsDetail,
} from "./arrangeUtils";
import {
	getRectObjectFromCo,
	subtractRect,
	doRectsOverlap,
	areRectsAdjacent,
	getCoordinates,
	mergeRects,
	isRectInside,
	areRectsOnSameYAxisExPath,
	areRectsIdentical,
} from "../rect/rectUtils";
import { shuffle } from "../array/arrayUtils";
import { filter } from "../utils/utils";
import Stack from "../stack/stack";
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
	const publicConstants = getPublicConstants(context);
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

	const shiftHeight =
		(privateConstants.DEFINED_MIN_HEIGHT_AND_WIDTH -
			privateConstants.MARGIN * 2) /
		2;

	let passCount = 0;
	let arranged = {};
	let arrangedCount = 0;
	let workSpaceResizeCount = 0;

	let DEBUG_COUNT = 0;

	while (arrangedCount !== iToALen) {
		// sort items in workspace by lt.x  i.e horizontally
		itemsInCombinedWorkSpace.sort((a, b) => a.x - b.x);

		const { it: freeRectsItY, idCount: lastId1 } = sweepLine(
			context,
			combinedWorkSpaceRect,
			combinedWorkSpaceRectCo,
			itemsInCombinedWorkSpace,
			idCount.idCount
		);
		idCount.idCount = lastId1;

		const freeRectsArr = freeRectsItY.getDataInArray();
		shuffle(freeRectsArr);

		assignAdjacentRects(freeRectsItY);

		// DEBUG:
		// printUnmergedFreeRects(context, freeRectsArr.map((o) => o.d));

		const { mergedRects, idCount: lastId2 } = await mergeFreeRects(
			freeRectsArr,
			idCount.idCount
		);
		idCount.idCount = lastId2;

		// DEBUG:
		// printMergedFreeRects(context, mergedRects.map((o) => o.d));

		const { overlappedRects } = findOverlapped(mergedRects);

		// DEBUG:
		// printMergedFreeRects(context, overlappedRects.map((o) => o.d));

		const {
			arranged: _arranged,
			itemsInBottomWorkSpace: _itemsInBottomWorkSpace,
			idCount: lastId3,
		} = await arrange(
			context,
			itemsToArrange.filter((id) => !arranged[id]),
			overlappedRects,
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

		DEBUG_COUNT++;
		if (DEBUG_COUNT > 50) {
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
	const publicConstants = getPublicConstants(context);

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
			itemsInCombinedWorkSpace.sort((a, b) => a.x - b.x);

			const { it: _freeRectsItY, idCount: lastId1 } = sweepLine(
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
			itemsInCombinedWorkSpace.sort((a, b) => a.x - b.x);

			const { it: _freeRectsItY, idCount: lastId1 } = sweepLine(
				context,
				_combinedWorkSpaceRect,
				_combinedWorkSpaceRectCo,
				itemsInCombinedWorkSpace,
				idCount.idCount
			);
			freeRectsItY = _freeRectsItY;
			idCount.idCount = lastId1;
		}

		const freeRectsArr = freeRectsItY.getDataInArray();
		shuffle(freeRectsArr);

		assignAdjacentRects(freeRectsItY);

		// DEBUG:
		// printUnmergedFreeRects(
		// 	context,
		// 	freeRectsArr.map((o) => o.d)
		// );

		const { mergedRects, idCount: lastId2 } = await mergeFreeRects(
			freeRectsArr,
			idCount.idCount
		);
		idCount.idCount = lastId2;

		// DEBUG:
		// printMergedFreeRects(
		// 	context,
		// 	mergedRects.map((o) => o.d)
		// );

		const { overlappedRects } = findOverlapped(mergedRects);

		// DEBUG:
		// printMergedFreeRects(
		// 	context,
		// 	overlappedRects.map((o) => o.d)
		// );

		const { arranged: _arranged, idCount: lastId3 } = await arrange(
			context,
			itemsToArrange.filter((id) => !arranged[id]),
			overlappedRects,
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

		if (passCount > 50) {
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
	const publicConstants = getPublicConstants(context);

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
		itemsInCombinedWorkSpace.sort((a, b) => a.x - b.x);

		const { it: freeRectsItY, idCount: lastId1 } = sweepLine(
			context,
			combinedWorkSpaceRect,
			combinedWorkSpaceRectCo,
			itemsInCombinedWorkSpace,
			idCount.idCount
		);
		idCount.idCount = lastId1;

		const freeRectsArr = freeRectsItY.getDataInArray();
		shuffle(freeRectsArr);

		assignAdjacentRects(freeRectsItY);

		// DEBUG:
		// printUnmergedFreeRects(context, freeRectsArr.map((o) => o.d));

		const { mergedRects, idCount: lastId2 } = await mergeFreeRects(
			freeRectsArr,
			idCount.idCount
		);
		idCount.idCount = lastId2;

		// DEBUG:
		// printMergedFreeRects(context, mergedRects.map((o) => o.d));

		const { overlappedRects } = findOverlapped(mergedRects);

		// DEBUG:
		// printMergedFreeRects(context, overlappedRects.map((o) => o.d));

		const { arranged: _arranged, idCount: lastId3 } = await arrange(
			context,
			itemsToArrange.filter((id) => !arranged[id]),
			overlappedRects,
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

export const shrinkTopBottomWS = (context, topWorkSpace, bottomWorkSpace) => {
	let topWSItems, bottomWSItems;
	const res = { integrateTop: false, integrateBottom: false };
	if (topWorkSpace) {
		topWSItems = getItemsInWorkSpace(
			context,
			getRectObjectFromCo(topWorkSpace)
		);
		const sweepRes = sweepLineTop(topWorkSpace, topWSItems);

		if (sweepRes < topWorkSpace.bl.y) {
			topWorkSpace.tl.y = sweepRes;
			topWorkSpace.tr.y = sweepRes;

			res.integrateTop = true;
		}
	}

	if (bottomWorkSpace) {
		bottomWSItems = getItemsInWorkSpace(
			context,
			getRectObjectFromCo(bottomWorkSpace)
		);
		const sweepRes = sweepLineBottom(bottomWorkSpace, bottomWSItems);

		if (sweepRes > bottomWorkSpace.tl.y) {
			bottomWorkSpace.bl.y = sweepRes;
			bottomWorkSpace.br.y = sweepRes;

			res.integrateBottom = true;
		}
	}

	return res;
};

export const sweepLineTop = (area, items) => {
	const len = items.length;
	const it = new IntervalTreesIterative();

	for (let i = 0; i < len; i++) {
		it.insert({
			low: items[i].y,
			high: items[i].y + items[i].height,
			d: {
				rect: items[i],
			},
		});
	}

	let resultPoint = area.bl.y;
	let res, rLen;
	let breakSig = false;

	for (let i = 0; i < len; i++) {
		res = it.findAll({ low: items[i].y + items[i].height, high: area.bl.y });
		rLen = res.length;
		breakSig = false;
		for (let j = 0; j < rLen; j++) {
			if (
				areRectsOnSameYAxisExPath(
					getCoordinates(items[i]),
					getCoordinates(res[j].d.rect)
				) &&
				!areRectsIdentical(
					getCoordinates(items[i]),
					getCoordinates(res[j].d.rect)
				)
			) {
				breakSig = true;
				break;
			}
		}
		if (!breakSig && items[i].y + items[i].height < resultPoint) {
			resultPoint = items[i].y + items[i].height;
		}
	}

	return resultPoint;
};

export const sweepLineBottom = (area, items) => {
	const len = items.length;
	const it = new IntervalTreesIterative();

	for (let i = 0; i < len; i++) {
		it.insert({
			low: items[i].y,
			high: items[i].y + items[i].height,
			d: {
				rect: items[i],
			},
		});
	}

	let resultPoint = area.tl.y;
	let res, rLen;
	let breakSig = false;
	for (let i = 0; i < len; i++) {
		res = it.findAll({ low: area.tl.y, high: items[i].y });
		rLen = res.length;
		breakSig = false;
		for (let j = 0; j < rLen; j++) {
			if (
				areRectsOnSameYAxisExPath(
					getCoordinates(items[i]),
					getCoordinates(res[j].d.rect)
				) &&
				!areRectsIdentical(
					getCoordinates(items[i]),
					getCoordinates(res[j].d.rect)
				)
			) {
				breakSig = true;
				break;
			}
		}
		if (!breakSig && items[i].y > resultPoint) {
			resultPoint = items[i].y;
		}
	}

	return resultPoint;
};

export const sweepLine = (context, area, areaCo, items, lastId) => {
	// area: area to sweep
	// area: area to sweep Coordinate Form
	// items: items in area

	const privateConstants = getPrivateConstants(context);

	let idCount = lastId;

	const it = new IntervalTreesIterative();

	it.insert({
		low: areaCo.tl.y,
		high: areaCo.bl.y,
		d: { id: idCount++, rect: area, a: {}, o: {}, ref: null },
	});

	let tempItem;
	let fInterval = { low: 0, high: 0, d: null };
	let intervals;
	let iLen = 0;
	let diff;
	let dLen = 0;

	const len = items.length;
	for (let i = 0; i < len; i++) {
		tempItem = getCoordinates(items[i]);
		fInterval = { low: tempItem.tl.y, high: tempItem.bl.y };
		intervals = it.findAll(fInterval);
		iLen = intervals.length;
		for (let j = 0; j < iLen; j++) {
			if (
				doRectsOverlap(
					intervals[j].d.rect,
					getItemDimenWithMargin(privateConstants.MARGIN, items[i])
				)
			) {
				diff = subtractRect(
					intervals[j].d.rect,
					getItemDimenWithMargin(privateConstants.MARGIN, items[i]),
					true
				);

				dLen = diff.length;
				for (let k = 0; k < dLen; k++) {
					it.insert({
						low: diff[k].tl.y,
						high: diff[k].bl.y,
						d: {
							id: idCount++,
							rect: getRectObjectFromCo(diff[k]),
							a: {},
							o: {},
							ref: null,
						},
					});
				}

				it.remove(intervals[j].interval, intervals[j].d);
			}
		}
	}

	return { it, idCount };
};

export const assignAdjacentRects = (rectsItY) => {
	const rectItYArr = rectsItY.getDataInArray();

	const len = rectItYArr.length;
	let resY, lenY;

	for (let i = 0; i < len; i++) {
		resY = rectsItY.findAll(rectItYArr[i].interval);
		lenY = resY.length;
		for (let j = 0; j < lenY; j++) {
			if (areRectsAdjacent(rectItYArr[i].d.rect, resY[j].d.rect)) {
				rectItYArr[i].d.a[resY[j].d.id] = resY[j];
			}
		}
	}
};

export const mergeFreeRects = async (freeRectsArr, lastId) => {
	const stack = new Stack();
	const stackIt = new IntervalTreesIterative();
	const resultStack = new Stack();
	const resultIt = new IntervalTreesIterative();

	let adjacents,
		adj,
		top,
		keys,
		keyslen,
		mergedObject,
		mergedRect,
		mergedRects,
		mergeRectsLen;
	let atLeastOneFullMerge = false;
	let idCount = lastId;
	const freeRectsLen = freeRectsArr.length;

	for (let k = 0; k < freeRectsLen; k++) {
		if (freeRectsArr[k].d.ref !== null) {
			continue;
		}

		stack.push(freeRectsArr[k]);
		while (!stack.isEmpty()) {
			top = stack.pop();

			keys = Object.keys(top.d.a);
			keyslen = keys.length;
			atLeastOneFullMerge = false;
			for (let i = 0; i < keyslen; i++) {
				if (!top.d.a[keys[i]]) {
					continue;
				}
				adj = top.d.a[keys[i]];

				while (adj?.d?.ref) {
					adj = adj.d.ref;
				}

				mergedRects = mergeRects(top.d.rect, adj.d.rect);
				mergeRectsLen = mergedRects?.length || 0;
				if (mergeRectsLen === 1) {
					mergedRect = mergedRects[0];

					if (mergedRect) {
						adjacents = { ...top.d.a, ...adj.d.a };
						delete adjacents[top.d.id];
						delete adjacents[adj.d.id];

						mergedObject = {
							d: {
								id: idCount++,
								rect: mergedRect,
								a: adjacents,
								o: {},
								ref: null,
							},
						};

						filterAdjacents(mergedObject);
						if (!isRectIdenticalOrInside(stackIt, mergedObject)) {
							stack.push(mergedObject);
						}

						if (isRectInside(mergedRect, adj.d.rect)) {
							adj.d.ref = mergedObject;
						}

						if (isRectInside(mergedRect, top.d.rect)) {
							top.d.ref = mergedObject;
							atLeastOneFullMerge = true;
						}
					}
				}
			}

			if (!atLeastOneFullMerge) {
				isRectIdenticalOrInside(resultIt, top);
			}
		}
	}

	return { mergedRects: resultIt.getDataInArray(), idCount };
};

export const isRectIdenticalOrInside = (it, obj) => {
	const res = it.findAll({
		low: obj.d.rect.y,
		high: obj.d.rect.y + obj.d.rect.height,
	});

	let isIdenticalOrInside = false;
	const len = res?.length || 0;
	for (let i = 0; i < len; i++) {
		if (
			areRectsIdentical(
				getCoordinates(obj.d.rect),
				getCoordinates(res[i].d.rect)
			) ||
			isRectInside(res[i].d.rect, obj.d.rect)
		) {
			isIdenticalOrInside = true;
		}
	}

	if (!isIdenticalOrInside) {
		it.insert({
			low: obj.d.rect.y,
			high: obj.d.rect.y + obj.d.rect.height,
			d: obj.d,
		});
	}

	return isIdenticalOrInside;
};

export const filterAdjacents = (mergedObject, visited) => {
	const mergedRect = mergedObject.d.rect;
	const adjs = mergedObject.d.a;
	let adj;
	const adjsKeys = Object.keys(adjs);
	const adjsKeysLen = adjsKeys.length;
	for (let j = 0; j < adjsKeysLen; j++) {
		adj = adjs[adjsKeys[j]];

		if (!areRectsAdjacent(mergedRect, adj.d.rect)) {
			delete adjs[adjsKeys[j]];
		}
	}
};

export const findOverlapped = (mergedRects) => {
	const it = new IntervalTreesIterative();

	const len = mergedRects.length;
	for (let i = 0; i < len; i++) {
		mergedRects[i].low = mergedRects[i].d.rect.y;
		mergedRects[i].high =
			mergedRects[i].d.rect.y + mergedRects[i].d.rect.height;
		it.insert(mergedRects[i]);
	}

	const completeOverlapped = {};
	const itArr = it.getDataInArray();

	let res, rlen;

	for (let i = 0; i < len; i++) {
		res = it.findAll(itArr[i].interval);
		rlen = res.length;
		for (let j = 0; j < rlen; j++) {
			if (
				itArr[i].d.rect &&
				res[j].d.rect &&
				isRectInside(itArr[i].d.rect, res[j].d.rect) &&
				itArr[i].d.id !== res[j].d.id
			) {
				completeOverlapped[res[j].d.id] = res[j];
				res[j].d._rect = res[j].d.rect;
				res[j].d.rect = null;

				const olpds = Object.values(res[j].d.o);
				const oLen = olpds.length;
				for (let k = 0; k < oLen; k++) {
					// Hey everyone I'm done.
					const olpd = olpds[k];
					delete olpd.d.o[res[j].d.id];
				}
				res[j].d.o = {};
			} else if (doRectsOverlap(itArr[i].d.rect, res[j].d.rect)) {
				itArr[i].d.o[res[j].d.id] = res[j];
				res[j].d.o[itArr[i].d.id] = itArr[i];
			}
		}
	}

	const resArr = new Array(len);
	let count = 0;
	for (let i = 0; i < len; i++) {
		if (itArr[i].d.rect) {
			resArr[count++] = itArr[i];
		}
	}

	const filteredResArr = new Array(count);
	for (let i = 0; i < count; i++) {
		filteredResArr[i] = resArr[i];
	}

	return {
		overlappedRects: filteredResArr,
		completeOverlapped: Object.values(completeOverlapped),
	};
};

/**
 * [description]
 * @param  {number[]} itemsToArrange          Array of items to arrange
 * @param  {object[]} overlappedRects         Array of overlapping rects
 * @param  {object} topWorkSpace            Top work space object in object form
 * @param  {object} bottomWorkSpace         Bottom work space object in object form
 * @param  {object} combinedWorkSpaceRectCo combined work space object in object form
 * @param  {number} lastId                  next id available
 * @return {object}                         arranged{object}: key is index in position data array, value is the object; itemsInbottomworkSpace{object}: key is index in position data array, value is also the index; idCount: next available id
 */
export const arrange = async (
	context,
	itemsToArrange,
	overlappedRects,
	topWorkSpace,
	bottomWorkSpace,
	combinedWorkSpaceRectCo,
	lastId
) => {
	// this function updates the modified position data
	// so no need to update the modified position data later

	const mpd = getModifiedPositionData(context);
	const privateConstants = getPrivateConstants(context);

	let idCount = lastId;
	const arranged = {};
	const itemsInBottomWorkSpace = {};

	// construct closest bst
	shuffle(overlappedRects);
	const wCBST = new ClosestBST();
	const orLen = overlappedRects.length;
	for (let i = 0; i < orLen; i++) {
		wCBST.insert({
			v: overlappedRects[i].d.rect.width,
			d: overlappedRects[i].d,
		});
	}

	const iToALen = itemsToArrange.length;

	const itemsToArrangeStack = new Stack();
	const itemsToArrangeLaterStack = new Stack();

	const itemsToArrangeWithScore = getItemsToArrangeScore(
		context,
		itemsToArrange
	);
	for (let i = 0; i < iToALen; i++) {
		itemsToArrangeStack.push(itemsToArrangeWithScore[i]);
	}

	let top;
	let aItem;
	let wCBSTRes;

	while (!itemsToArrangeStack.isEmpty()) {
		top = itemsToArrangeStack.pop();

		aItem = mpd[top.d];

		wCBSTRes = wCBST.findUsingComparator(
			cBSTRectComparator(
				getItemDimenWithMargin(privateConstants.MARGIN, aItem)
			),
			cBSTLComp(aItem.width),
			cBSTRComp
		);

		if (!wCBSTRes.length) {
			itemsToArrangeLaterStack.push(top);
			continue;
		}

		const pm = getPerfectMatch(wCBSTRes, aItem.width + aItem.height);

		aItem.x = pm.d.rect.x + privateConstants.MARGIN;
		aItem.y = pm.d.rect.y + privateConstants.MARGIN;

		arranged[top.d] = aItem;

		if (bottomWorkSpace && isRectInside(bottomWorkSpace, pm.d.rect)) {
			// put in bottom and combined workspace
			itemsInBottomWorkSpace[top.d] = top.d;
		}

		// DEBUG:
		// printMergedFreeRects(context, wCBST.getDataInArray().map((o) => o.d));

		const { result, idCount: lastId1 } = await arrangeCleanUp(
			context,
			aItem,
			pm,
			wCBST,
			idCount
		);
		idCount = lastId1;

		const resLen = result.length;
		for (let i = 0; i < resLen; i++) {
			result[i].v = result[i].d.rect.width;
			wCBST.insert(result[i]);
		}
		// DEBUG:
		// printMergedFreeRects(context, wCBST.getDataInArray().map((o) => o.d));
	}

	return {
		arranged,
		itemsInBottomWorkSpace,
		idCount,
	};
};

export const arrangeCleanUp = async (context, aItem, pm, wCBST, lastId) => {
	const privateConstants = getPrivateConstants(context);

	let idCount = lastId;
	let diff;
	let diffLen;
	let diffObj;

	// overlapped
	let olpd;
	// indirect operlapped
	let iolpd;
	// indirect overlapping keys
	let ioKeys;
	let ioKeysLen;

	const indirectOverlaps = {};

	const diffStack = new Stack();

	const itemWithMargins = {
		x: aItem.x - privateConstants.MARGIN,
		y: aItem.y - privateConstants.MARGIN,
		width: aItem.width + privateConstants.MARGIN * 2,
		height: aItem.height + privateConstants.MARGIN * 2,
	};
	wCBST.remove(pm.v, pm.d);

	diff = subtractRect(pm.d.rect, itemWithMargins);
	diffLen = diff?.length || 0;
	for (let i = 0; i < diffLen; i++) {
		diffObj = {
			v: diff[i].width,
			d: {
				id: idCount++,
				rect: diff[i],
				a: {},
				o: {},
				ref: null,
			},
		};

		diffStack.push(diffObj);
	}

	let subtractFlag = false;
	const directOverlaps = { ...pm.d.o };
	const pmOlps = Object.values(pm.d.o);
	const pmOlapsLen = pmOlps.length;
	for (let j = 0; j < pmOlapsLen; j++) {
		olpd = pmOlps[j];
		delete olpd.d.o[pm.d.id];

		// if diffLen is 0, this overlapping rect will be put back later after operations
		wCBST.remove(olpd.d.rect.width, olpd.d);

		subtractFlag = false;
		if (doRectsOverlap(olpd.d.rect, itemWithMargins)) {
			subtractFlag = true;
			diff = subtractRect(olpd.d.rect, itemWithMargins);
			diffLen = diff?.length || 0;

			if (diffLen) {
				for (let k = 0; k < diffLen; k++) {
					diffObj = {
						v: diff[k].width,
						d: {
							id: idCount++,
							rect: diff[k],
							a: {},
							o: {},
							ref: null,
						},
					};

					diffStack.push(diffObj);
				}
			}
		} else {
			diffStack.push(olpd);
			olpd.d.a = {};
		}

		ioKeys = Object.keys(olpd.d.o);
		ioKeysLen = ioKeys.length;
		for (let k = 0; k < ioKeysLen; k++) {
			iolpd = olpd.d.o[ioKeys[k]];
			if (!directOverlaps[ioKeys[k]]) {
				indirectOverlaps[ioKeys[k]] = iolpd;
			}
			if (subtractFlag) {
				delete iolpd.d.o[olpd.d.id];
			}
		}
	}

	// now merge the rects in diff stack and put the merged rects in wCBST tree
	// printUnmergedFreeRects(context, diffStack.getData().map((o) => o.d));
	const diffStackData = diffStack.getData();
	const diffStackDataLen = diffStackData.length;
	const it = new IntervalTreesIterative();
	for (let i = 0; i < diffStackDataLen; i++) {
		it.insert({
			low: diffStackData[i].d.rect.y,
			high: diffStackData[i].d.rect.y + diffStackData[i].d.rect.height,
			d: diffStackData[i].d,
		});
	}

	assignAdjacentRects(it);
	const { mergedRects, idCount: lastId1 } = await mergeFreeRects(
		diffStack.getData(),
		idCount
	);

	const {
		overlappedRects: _overlappedRects,
		completeOverlapped,
	} = findOverlapped([...mergedRects, ...Object.values(indirectOverlaps)]);

	const completeOverlappedLen = completeOverlapped.length;
	for (let i = 0; i < completeOverlappedLen; i++) {
		wCBST.remove(completeOverlapped[i].d._rect.width, completeOverlapped[i].d);
	}

	const _overlappedRectsLen = _overlappedRects.length;
	const overlappedRects = new Array(_overlappedRectsLen);
	let count = 0;
	for (let i = 0; i < _overlappedRectsLen; i++) {
		if (!indirectOverlaps[_overlappedRects[i].d.id]) {
			overlappedRects[count++] = _overlappedRects[i];
		}
	}

	const filteredOverlappedRects = filter(overlappedRects);

	// printMergedFreeRects(context, filteredOverlappedRects.map((o) => o.d));

	return { result: filteredOverlappedRects, idCount: lastId1 };
};
