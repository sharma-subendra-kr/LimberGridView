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
	mergeRects,
	isRectInside,
} from "../rect/rectUtils";
import { shuffle } from "../array/arrayUtils";
import Stack from "../stack/stack";
import { printUnmergedFreeRects, printMergedFreeRects } from "../debug/debug";
window.mergeRects = mergeRects;
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
		freeRectsArr[i].d.id = i;
		tempRect = getCoordinates(freeRectsArr[i].d.rect);
		itXData[i] = {
			low: tempRect.tl.x,
			high: tempRect.tr.x,
			d: freeRectsArr[i].d,
		};
	}

	const freeRectsItX = new IntervalTreesIterative({ data: itXData });

	assignAdjacentRects(freeRectsItY, freeRectsItX);

	if (DEBUG_MODE) printUnmergedFreeRects(freeRectsArr.map((o) => o.d));

	const mergedRects = mergeFreeRects(freeRectsArr);

	if (DEBUG_MODE) printMergedFreeRects(mergedRects.map((o) => o.d));
};

export const sweepLine = (area, areaCo, items) => {
	// area: area to sweep
	// area: area to sweep Coordinate Form
	// items: items in area

	const it = new IntervalTreesIterative();

	it.insert({
		low: areaCo.tl.y,
		high: areaCo.bl.y,
		d: { rect: area, a: {}, o: {} },
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

				// DEBUG:
				// printUnmergedFreeRects(
				// 	diff.map((o) => ({
				// 		rect: getRectObjectFromCo(o),
				// 	}))
				// );

				dLen = diff.length;
				for (let k = 0; k < dLen; k++) {
					it.insert({
						low: diff[k].tl.y,
						high: diff[k].bl.y,
						d: { rect: getRectObjectFromCo(diff[k]), a: {}, o: {} },
					});
				}

				it.remove(intervals[j].interval, intervals[j].d);
			}
		}
	}

	return it;
};

export const assignAdjacentRects = (rectsItY, rectsItX) => {
	const rectItYArr = rectsItY.getDataInArray();
	const rectItXArr = rectsItX.getDataInArray();

	let len = rectItYArr.length;
	let resY, resX, lenY, lenX;

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

export const mergeFreeRects = (freeRectsArr) => {
	const stack = new Stack();
	const resultStack = new Stack();

	const visited = {};
	let adjacents,
		adj,
		// adjacentsKeys,
		// adjacentsKeysLen,
		top,
		keys,
		keyslen,
		mergedObject,
		mergedRect;
	let idCount = freeRectsArr.length;
	const freeRectsLen = idCount;

	for (let k = 0; k < freeRectsLen; k++) {
		debugger;
		if (visited[freeRectsArr[k].d.id]) {
			continue;
		}
		stack.push(freeRectsArr[k]);
		while (!stack.isEmpty()) {
			top = stack.pop();

			keys = Object.keys(top.d.a);
			keyslen = keys.length;
			if (!keyslen && !visited[top.d.id]) {
				visited[top.d.id] = true;
				resultStack.push(top);

				// if (DEBUG_MODE)
				// printMergedFreeRects(resultStack.getData().map((o) => o.d));

				continue;
			}

			for (let i = 0; i < keyslen; i++) {
				if (!visited[keys[i]]) {
					adj = top.d.a[keys[i]];
					mergedRect = mergeRects(top.d.rect, adj.d.rect);

					if (mergedRect) {
						// adjacents = { ...top.d.a, ...top.d.o };
						// adjacents = { ...adjacents, ...adj.d.a, ...adj.d.o };
						adjacents = { ...top.d.a };
						adjacents = { ...adjacents, ...adj.d.a };
						delete adjacents[top.d.id];
						delete adjacents[adj.d.id];

						mergedObject = {
							d: {
								id: idCount++,
								rect: mergedRect,
								a: adjacents,
								o: { ...top.d.o, ...adj.d.o },
							},
						};

						filterAdjacents(mergedObject, visited);
						filterOverlapped(mergedObject, visited);

						stack.push(mergedObject);

						if (isRectInside(mergedRect, top.d.rect)) {
							visited[top.d.id] = true;
						} else {
							mergedObject.d.o[top.d.id] = top;
							top.d.o[mergedObject.d.id] = mergedObject;
							delete top.d.a[keys[i]];
							stack.push(top);
						}

						if (isRectInside(mergedRect, adj.d.rect)) {
							visited[adj.d.id] = true;
						} else {
							mergedObject.d.o[adj.d.id] = adj;
							adj.d.o[mergedObject.d.id] = mergedObject;
							delete adj.d.a[top.d.id];
						}

						// if (DEBUG_MODE)
						// 	printMergedFreeRects(
						// 		stack.getData().map((o) => o.d)
						// 	);

						break;
					}
				}
			}
		}
	}

	return resultStack.getData();
};

export const filterAdjacents = (mergedObject, visited) => {
	debugger;
	const mergedRect = mergedObject.d.rect;
	const adjs = mergedObject.d.a;
	let adj;
	const adjsKeys = Object.keys(adjs);
	const adjsKeysLen = adjsKeys.length;
	for (let j = 0; j < adjsKeysLen; j++) {
		adj = adjs[adjsKeys[j]];
		console.log(
			"areRectsAdjacent",
			areRectsAdjacent(mergedRect, adj.d.rect)
		);
		if (!areRectsAdjacent(mergedRect, adj.d.rect) || visited[adj.d.id]) {
			delete adjs[adjsKeys[j]];
		} else {
			// Hey! you guys! Hey! you guys! I'm your neighbour!
			adj.d.a[mergedObject.d.id] = mergedObject;
		}
	}
};

export const filterOverlapped = (mergedObject, visited) => {
	debugger;
	const mergedRect = mergedObject.d.rect;
	const olpds = mergedObject.d.o;
	let olpd;
	const olpdsKeys = Object.keys(olpds);
	const olpdsKeysLen = olpdsKeys.length;
	for (let j = 0; j < olpdsKeysLen; j++) {
		olpd = olpds[olpdsKeys[j]];
		console.log("doRectsOverlap", doRectsOverlap(mergedRect, olpd.d.rect));
		if (!doRectsOverlap(mergedRect, olpd.d.rect)) {
			delete olpds[olpdsKeys[j]];
		} else {
			// Hey! you guys! Hey! you guys! I'm your neighbour!
			olpd.d.o[mergedObject.d.id] = mergedObject;
		}
	}
};
