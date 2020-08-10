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

import { IntervalTreesIterative } from "IntervalTreeJS";
import { getModifiedPositionData } from "../../store/variables/essentials";
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
import { printNodeData } from "../debug/debugUtils";

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

export const sweepLineForFreeSpace = (context, area, areaCo, items, lastId) => {
	// area: area to sweep
	// area: area to sweep Coordinate Form
	// items: items in area

	const privateConstants = getPrivateConstants(context);

	let idCount = lastId;

	const it = new IntervalTreesIterative();

	it.insert({
		low: areaCo.tl.x,
		high: areaCo.tr.x,
		d: { id: idCount.idCount++, rect: area, a: {}, o: {}, ref: null },
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
		fInterval = { low: tempItem.tl.x, high: tempItem.tr.x };
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
						low: diff[k].tl.x,
						high: diff[k].tr.x,
						d: {
							id: idCount.idCount++,
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
	const rectItYArr = rectsItY.getSortedData();

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
							a: {},
							o: {},
							ref: null,
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
	lastId,
	garbageRects
) => {
	let idCount = lastId;
	let stack, it;

	if (Array.isArray(freeRects)) {
		shuffle(freeRects);
		stack = new Stack({
			data: freeRects.sort(rectSortX),
		});
		it = new IntervalTreesIterative();
	} else {
		shuffle(garbageRects);
		stack = new Stack({
			data: garbageRects.sort(rectSortX),
		});
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
	const stackY = new Stack({
		data: mergedArr.sort(rectSortY),
	});
	const itY = new IntervalTreesIterative();
	mergeFreeRectsCore(context, stackY, itY, idCount, "y");
	filterMergedFreeRects(itY);

	const resIt = new IntervalTreesIterative();
	const arr = itY.getSortedData();
	shuffle(arr);
	const len = arr.length;
	for (let i = 0; i < len; i++) {
		resIt.insert({
			low: arr[i].d.rect.x,
			high: arr[i].d.rect.x + arr[i].d.rect.width,
			d: arr[i].d,
		});
	}

	return { mergedRects: resIt.getSortedData(), mergedRectsIt: resIt, idCount };
};

export const isRectIdenticalOrInside = (it, obj, on) => {
	let axis = "x";
	let distance = "width";
	if (on === "y") {
		axis = "y";
		distance = "height";
	}
	const res = it.findAll({
		low: obj.d.rect[axis],
		high: obj.d.rect[axis] + obj.d.rect[distance],
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
			low: obj.d.rect[axis],
			high: obj.d.rect[axis] + obj.d.rect[distance],
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
	const itArr = it.getSortedData();

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
	// overlappedRects,
	mergedRectsIt,
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

	let overlappedRects = mergedRectsIt.getSortedData();

	const iToALen = itemsToArrange.length;

	const itemsToArrangeStack = new Stack();

	const itemsToArrangeWithScore = getItemsToArrangeScore(
		context,
		itemsToArrange
	);
	for (let i = 0; i < iToALen; i++) {
		itemsToArrangeStack.push(itemsToArrangeWithScore[i]);
	}

	let top;
	let aItem;

	const resStack = new Stack();
	const grabageStack = new Stack();

	while (!itemsToArrangeStack.isEmpty()) {
		resStack.empty();

		top = itemsToArrangeStack.pop();

		aItem = mpd[top.d];

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

		const pm = getPerfectMatch(resStack.getData(), aItem.width + aItem.height);

		aItem.x = pm.d.rect.x + privateConstants.MARGIN;
		aItem.y = pm.d.rect.y + privateConstants.MARGIN;

		arranged[top.d] = aItem;

		if (bottomWorkSpace && isRectInside(bottomWorkSpace, pm.d.rect)) {
			// put in bottom and combined workspace
			itemsInBottomWorkSpace[top.d] = top.d;
		}

		grabageStack.empty();
		const result = mergedRectsIt.findAll(pm.interval);
		const resLen = result.length;
		tempAItem = getItemDimenWithMargin(privateConstants.MARGIN, aItem);
		for (let i = 0; i < resLen; i++) {
			const res = result[i];
			const _garbageRects = subtractRect(res.d.rect, tempAItem);

			const gLen = _garbageRects?.length || 0;
			for (let i = 0; i < gLen; i++) {
				grabageStack.push({
					interval: {
						low: _garbageRects[i].x,
						high: _garbageRects[i].x + _garbageRects[i].width,
					},
					d: {
						id: idCount.idCount++,
						rect: _garbageRects[i],
						a: {},
						o: {},
						ref: null,
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
			grabageStack.getData()
		);
		mergedRectsIt = _mergedRectsIt;
		overlappedRects = mergedRectsIt.getSortedData();
	}

	return {
		arranged,
		itemsInBottomWorkSpace,
		idCount,
	};
};
