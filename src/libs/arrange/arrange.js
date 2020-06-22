import { IntervalTreesIterative } from "interval-trees";
import { positionData as pd, DEBUG_MODE } from "../../variables/essentials";
import privateConstants from "../../constants/privateConstants";
import publicConstants from "../../constants/publicConstants";
import { getMinMaxY, fixMinYMaxY, getItemsInWorkSpace } from "./arrangeUtils";
import {
	getRectObjectFromCo,
	subtractRect,
	doRectsOverlap,
	areRectsAdjacent,
	getCoordinates,
} from "../rect/rectUtils";
import { shuffle } from "../array/arrayUtils";
import { printUnmergedFreeRects, printMergedFreeRects } from "../debug/debug";

export const arrangeAffectedItems = (
	affectedItems,
	resizedBottomY,
	toY,
	movedBottomY
) => {
	const { minY, maxY } = getMinMaxY(
		affectedItems,
		resizedBottomY,
		toY,
		movedBottomY
	);

	const workSpaceRectCo = {
		tl: { x: publicConstants.MARGIN, y: minY },
		tr: { x: privateConstants.WIDTH, y: minY },
		br: { x: privateConstants.WIDTH, y: maxY },
		bl: { x: publicConstants.MARGIN, y: maxY },
	};
	const workSpaceRect = getRectObjectFromCo(workSpaceRectCo);
	const { arrangeTopY, arrangeBottomY } = fixMinYMaxY(workSpaceRectCo);
	/*
		* 	if a item's top has to be placed at workSpaceRect.tl.y then it should be 
			adjusted to arrangeTopY without margin, resize item if necessary
		*	if a item's bottom has to be placed at workSpaceRect.bl.y then it should be 
			adjusted to arrangeBottomY without margin resize item if necessary
	*/

	const itemsInWorkSpace = getItemsInWorkSpace(workSpaceRect);

	// sort items in workspace by lt.x  i.e horizontally
	itemsInWorkSpace.sort((a, b) => a.x - b.x);

	const freeRectsItY = sweepLine(
		workSpaceRect,
		workSpaceRectCo,
		itemsInWorkSpace
	);

	const freeRectsArr = freeRectsItY.getDataInArray();
	shuffle(freeRectsArr);

	const itXDataLen = freeRectsArr.length;
	const itXData = new Array(itXDataLen);

	let tempRect;
	for (let i = 0; i < itXDataLen; i++) {
		tempRect = getCoordinates(freeRectsArr[i].d.rect);
		itXData[i] = {
			low: tempRect.tl.x,
			high: tempRect.tr.x,
			d: freeRectsArr[i].d,
		};
	}

	const freeRectsItX = new IntervalTreesIterative({ data: itXData });
	assignAdjacentRects(freeRectsItY, freeRectsItX);

	if (DEBUG_MODE) {
		printUnmergedFreeRects(freeRectsArr);
	}

	// mergeRects(freeRectsArr, freeRectsItY, freeRectsItX);
};

export const sweepLine = (area, areaCo, items) => {
	// area: area to sweep
	// area: area to sweep Coordinate Form
	// items: items in area

	const it = new IntervalTreesIterative();

	it.insert({
		low: areaCo.tl.y,
		high: areaCo.bl.y,
		d: { rect: area, a: {} },
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
			if (doRectsOverlap(intervals[j].d.rect, items[i])) {
				diff = subtractRect(intervals[j].d.rect, items[i], true);
				dLen = diff.length;
				for (let k = 0; k < dLen; k++) {
					it.insert({
						low: diff[k].tl.y,
						high: diff[k].bl.y,
						d: { rect: getRectObjectFromCo(diff[k]), a: {} },
					});
				}

				it.remove(intervals[j].interval, intervals[j].d);
			}
		}
	}

	return it;
};

export const assignAdjacentRects = (rectsItY, rectsItX) => {
	let idCount = 0;
	const rectItYArr = rectsItY.getDataInArray();
	const rectItXArr = rectsItX.getDataInArray();

	let len = rectItYArr.length;
	let resY, resX, lenY, lenX;

	for (let i = 0; i < len; i++) {
		resY = rectsItY.findAll(rectItYArr[i].interval, rectItYArr[i].d);
		lenY = resY.length;
		for (let j = 0; j < lenY; j++) {
			if (areRectsAdjacent(rectItYArr[i].d.rect, resY[j])) {
				rectItYArr[i].d.a[idCount++] = resY[j];
			}
		}

		resX = rectsItX.findAll(rectItXArr[i].interval, rectItXArr[i].d);
		lenX = resX.length;
		for (let j = 0; j < lenX; j++) {
			if (areRectsAdjacent(rectItXArr[i].d.rect, resX[j])) {
				rectItXArr[i].d.a[idCount++] = resX[j];
			}
		}
	}
};

export const mergeRects = (freeRectsArr, freeRectsItY, freeRectsItX) => {};
