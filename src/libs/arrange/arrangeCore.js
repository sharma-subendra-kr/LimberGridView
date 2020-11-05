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

import {
	getModifiedPositionData,
	getPositionData,
} from "../../store/variables/essentials";
import getPrivateConstants from "../../store/constants/privateConstants";
import {
	getItemsInWorkSpace,
	getItemDimenWithMargin,
	getItemsToArrangeScore,
	getPerfectMatch,
	rectSortX,
	rectSortY,
	isMergable,
	shouldFilterRect,
	doOverlapHelper,
	identicalOrInsideHelper,
	sweepTopBottomHelper,
} from "./arrangeUtils";
import {
	getRectObjectFromCo,
	subtractRect,
	doRectsOverlap,
	getCoordinates,
	mergeRects,
	isRectInside,
	areRectsOnSameYAxisExPath,
	areRectsIdentical,
} from "../rect/rectUtils";
import { shuffle } from "../array/arrayUtils";
import getTree from "../../store/variables/trees";
import getStack from "../../store/variables/stacks";
// import {
// 	sleep,
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

export const shrinkTopBottomWS = (context, topWorkSpace, bottomWorkSpace) => {
	let topWSItems, bottomWSItems;
	const res = { integrateTop: false, integrateBottom: false };

	const it = getTree(context, "it");

	if (topWorkSpace) {
		topWSItems = getItemsInWorkSpace(
			context,
			getRectObjectFromCo(topWorkSpace)
		);
		const sweepRes = sweepLineTop(topWorkSpace, topWSItems, it);

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
		const sweepRes = sweepLineBottom(bottomWorkSpace, bottomWSItems, it);

		if (sweepRes > bottomWorkSpace.tl.y) {
			bottomWorkSpace.bl.y = sweepRes;
			bottomWorkSpace.br.y = sweepRes;

			res.integrateBottom = true;
		}
	}

	return res;
};

export const sweepLineTop = (area, items, it) => {
	it.emptyTree();

	const len = items.length;

	for (let i = 0; i < len; i++) {
		it.insert({
			low: items[i].y,
			high: items[i].y + items[i].height,
			d: {
				id: -1,
				rect: items[i],
			},
		});
	}

	let resultPoint = area.bl.y;
	let res;

	for (let i = 0; i < len; i++) {
		res = it.findAll(
			{ low: items[i].y + items[i].height, high: area.bl.y },
			null,
			null,
			sweepTopBottomHelper(items[i])
		);

		if (!res.length && items[i].y + items[i].height < resultPoint) {
			resultPoint = items[i].y + items[i].height;
		}
	}

	return resultPoint;
};

export const sweepLineBottom = (area, items, it) => {
	it.emptyTree();

	const len = items.length;

	for (let i = 0; i < len; i++) {
		it.insert({
			low: items[i].y,
			high: items[i].y + items[i].height,
			d: {
				id: -1,
				rect: items[i],
			},
		});
	}

	let resultPoint = area.tl.y;
	let res;
	for (let i = 0; i < len; i++) {
		res = it.findAll(
			{ low: area.tl.y, high: items[i].y },
			null,
			null,
			sweepTopBottomHelper(items[i])
		);

		if (!res.length && items[i].y > resultPoint) {
			resultPoint = items[i].y;
		}
	}

	return resultPoint;
};

export const sweepLineForFreeSpace = (
	context,
	area,
	areaCo,
	items,
	idCount
) => {
	// area: area to sweep
	// area: area to sweep Coordinate Form
	// items: items in area

	const privateConstants = getPrivateConstants(context);

	const it = getTree(context, "it");
	it.emptyTree();

	it.insert({
		low: areaCo.tl.x,
		high: areaCo.tr.x,
		d: { id: idCount.idCount++, rect: area },
	});

	let tempItem;
	let tempItemWithMargin;
	const fInterval = { low: 0, high: 0 };
	let intervals;
	let iLen = 0;
	let diff;
	let dLen = 0;

	const len = items.length;
	for (let i = 0; i < len; i++) {
		tempItem = getCoordinates(items[i]);
		tempItemWithMargin = getItemDimenWithMargin(
			privateConstants.MARGIN,
			items[i]
		);
		fInterval.low = tempItem.tl.x;
		fInterval.high = tempItem.tr.x;
		intervals = it.findAll(
			fInterval,
			null,
			null,
			doOverlapHelper(tempItemWithMargin)
		);

		iLen = intervals.length;
		for (let j = 0; j < iLen; j++) {
			diff = subtractRect(intervals[j].d.rect, tempItemWithMargin, true);
			it.remove(intervals[j].interval, intervals[j].d);

			dLen = diff.length;
			for (let k = 0; k < dLen; k++) {
				it.insert({
					low: diff[k].tl.x,
					high: diff[k].tr.x,
					d: {
						id: idCount.idCount++,
						rect: getRectObjectFromCo(diff[k]),
					},
				});
			}
			//
		}
	}

	return { it };
};

export const isRectIdenticalOrInside = (it, obj, on) => {
	let axis = "x";
	let distance = "width";
	if (on === "y") {
		axis = "y";
		distance = "height";
	}
	const res = it.findAll(
		{
			low: obj.d.rect[axis],
			high: obj.d.rect[axis] + obj.d.rect[distance],
		},
		null,
		null,
		identicalOrInsideHelper(obj.d.rect)
	);
	const len = res?.length || 0;

	if (!len) {
		it.insert({
			low: obj.d.rect[axis],
			high: obj.d.rect[axis] + obj.d.rect[distance],
			d: obj.d,
		});
	}

	return !!len;
};

export const mergeFreeRectsCore = (context, stack, it, idCount, on) => {
	let topFullMerged = false;
	while (!stack.isEmpty()) {
		const top = stack.pop();
		topFullMerged = false;

		const results = it.findAll(
			top.interval,
			null,
			null,
			isMergable(top.d.rect)
		);

		const len = results?.length || 0;
		if (len > 0) {
			for (let i = 0; i < len; i++) {
				const res = results[i];

				const mergedRects = mergeRects(res.d.rect, top.d.rect);
				if (mergedRects.length === 1) {
					const mergedRect = mergedRects[0];

					if (isRectInside(mergedRect, res.d.rect)) {
						it.remove(res.interval, res.d);
					}

					if (isRectInside(mergedRect, top.d.rect)) {
						topFullMerged = true;
					}

					const mergedObject = {
						d: {
							id: idCount.idCount++,
							rect: mergedRect,
						},
					};

					isRectIdenticalOrInside(it, mergedObject, on);
				}
			}
			if (topFullMerged === false) {
				isRectIdenticalOrInside(it, { d: top.d }, on);
			}
		} else {
			it.insert({ ...top.interval, d: top.d });
		}
	}
};

export const filterMergedFreeRects = (mergedRectsIt) => {
	const arr = mergedRectsIt.getSortedData();
	const len = arr.length;
	for (let i = 0; i < len; i++) {
		const obj = arr[i];
		const results = mergedRectsIt.findAll(
			obj.interval,
			null,
			null,
			shouldFilterRect(obj.d.rect, obj.d)
		);

		if (results?.length) {
			mergedRectsIt.remove(obj.interval, obj.d);
		}
	}
};

export const mergeFreeRects = async (
	context,
	freeRects,
	idCount,
	garbageRects
) => {
	let it;

	const stack = getStack(context, "stack");

	if (Array.isArray(freeRects)) {
		shuffle(freeRects);
		stack.setData(freeRects.sort(rectSortX));
		it = getTree(context, "it");
		it.emptyTree();
	} else {
		shuffle(garbageRects);
		stack.setData(garbageRects.sort(rectSortX));
		it = freeRects;
	}

	mergeFreeRectsCore(context, stack, it, idCount, "x");
	filterMergedFreeRects(it);

	const mergedArr = it.getSortedData();
	shuffle(mergedArr);
	const mLen = mergedArr.length;
	for (let i = 0; i < mLen; i++) {
		mergedArr[i].interval.low = mergedArr[i].d.rect.y;
		mergedArr[i].interval.high =
			mergedArr[i].d.rect.y + mergedArr[i].d.rect.height;
	}
	stack.setData(mergedArr.sort(rectSortY));
	it.emptyTree();
	mergeFreeRectsCore(context, stack, it, idCount, "y");
	filterMergedFreeRects(it);

	const arr = it.getSortedData();
	it.emptyTree();
	shuffle(arr);
	const len = arr.length;
	for (let i = 0; i < len; i++) {
		it.insert({
			low: arr[i].d.rect.x,
			high: arr[i].d.rect.x + arr[i].d.rect.width,
			d: arr[i].d,
		});
	}

	return { mergedRectsIt: it };
};

/**
 * [description]
 * @param  {number[]} itemsToArrange          Array of items to arrange
 * @param  {object} mergedRectsIt         Interval Tree of merged rectangles
 * @param  {object} topWorkSpace            Top work space object in object form
 * @param  {object} bottomWorkSpace         Bottom work space object in object form
 * @param  {object} combinedWorkSpaceRectCo combined work space object in object form
 * @param  {number} idCount                  next id available
 * @return {object}                         arranged{object}: key is index in position data array, value is the object; itemsInbottomworkSpace{object}: key is index in position data array, value is also the index; idCount: next available id
 */
export const arrange = async (
	context,
	itemsToArrange,
	mergedRectsIt,
	topWorkSpace,
	bottomWorkSpace,
	combinedWorkSpaceRectCo,
	idCount
) => {
	// this function updates the modified position data
	// so no need to update the modified position data later

	const mpd = getModifiedPositionData(context);
	const pd = getPositionData(context);
	const privateConstants = getPrivateConstants(context);

	const arranged = {};
	const itemsInBottomWorkSpace = {};

	let overlappedRects = mergedRectsIt.getSortedData();

	const iToALen = itemsToArrange.length;

	const itemsToArrangeStack = getStack(context, "itemsToArrangeStack");
	itemsToArrangeStack.empty();

	const itemsToArrangeWithScore = getItemsToArrangeScore(
		context,
		itemsToArrange
	);
	for (let i = 0; i < iToALen; i++) {
		itemsToArrangeStack.push(itemsToArrangeWithScore[i]);
	}

	let top;
	let aItem, oItem;

	const resStack = getStack(context, "resStack");
	const garbageStack = getStack(context, "garbageStack");

	while (!itemsToArrangeStack.isEmpty()) {
		resStack.empty();

		top = itemsToArrangeStack.pop();

		aItem = mpd[top.d];
		oItem = pd[top.d];

		let tempAItem = getItemDimenWithMargin(privateConstants.MARGIN, aItem);

		const oLen = overlappedRects.length;
		for (let i = 0; i < oLen; i++) {
			const oRect = overlappedRects[i].d.rect;
			if (oRect.width >= tempAItem.width && oRect.height >= tempAItem.height) {
				resStack.push(overlappedRects[i]);
			}
		}

		if (resStack.isEmpty()) {
			continue;
		}

		const pm = getPerfectMatch(
			resStack.getData(),
			aItem.width + aItem.height,
			oItem
		);

		aItem.x = pm.d.rect.x + privateConstants.MARGIN;
		aItem.y = pm.d.rect.y + privateConstants.MARGIN;

		arranged[top.d] = aItem;

		if (bottomWorkSpace && isRectInside(bottomWorkSpace, pm.d.rect)) {
			// put in bottom and combined workspace
			itemsInBottomWorkSpace[top.d] = top.d;
		}

		garbageStack.empty();
		const result = mergedRectsIt.findAll(pm.interval);
		const resLen = result.length;
		tempAItem = getItemDimenWithMargin(privateConstants.MARGIN, aItem);
		for (let i = 0; i < resLen; i++) {
			const res = result[i];
			const _garbageRects = subtractRect(res.d.rect, tempAItem);

			const gLen = _garbageRects?.length || 0;
			for (let i = 0; i < gLen; i++) {
				garbageStack.push({
					interval: {
						low: _garbageRects[i].x,
						high: _garbageRects[i].x + _garbageRects[i].width,
					},
					d: {
						id: idCount.idCount++,
						rect: _garbageRects[i],
					},
				});
			}
			if (gLen) {
				mergedRectsIt.remove(res.interval, res.d);
			}
		}

		const { mergedRectsIt: _mergedRectsIt } = await mergeFreeRects(
			context,
			mergedRectsIt,
			idCount,
			garbageStack.getData()
		);
		mergedRectsIt = _mergedRectsIt;
		overlappedRects = mergedRectsIt.getSortedData();
	}

	return {
		arranged,
		itemsInBottomWorkSpace,
	};
};
