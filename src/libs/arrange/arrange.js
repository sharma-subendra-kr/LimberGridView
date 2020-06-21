import { IntervalTreesIterative } from "interval-trees";
import { positionData as pd } from "../../variables/essentials";
import privateConstants from "../../constants/privateConstants";
import publicConstants from "../../constants/publicConstants";
import { getMinMaxY, fixMinYMaxY } from "./arrangeUtils";
import {
	getRectObjectFromCo,
	subtractRect,
	doRectsOverlap,
} from "../rect/rectUtils";
import Stack from "../stack/stack";

export const arrangeAffectedItems = (affectedItems) => {
	const { minY, maxY } = getMinMaxY(affectedItems);
	const workSpaceRectCo = {
		tl: { x: 0, y: minY },
		tr: { x: privateConstants.WIDTH, y: minY },
		br: { x: privateConstants.WIDTH, y: maxY },
		bl: { x: 0, y: maxY },
	};
	const workSpaceRect = getRectObjectFromCo(workSpaceRectCo);
	const { arrangeTopY, arrangeBottomY } = getArrangeTopYAndBottomY(
		workSpaceRectCo
	);
	// if a item's top has to be placed at workSpaceRect.tl.y then it should be adjusted to arrangeTopY without margin, resize item if necessary
	// if a item's bottom has to be placed at workSpaceRect.bl.y then it should be adjusted to arrangeBottomY without margin resize item if necessary

	const itemsInWorkSpace = getItemsInWorkSpace(workSpaceRect);
	// sort items in workspace by lt.x  i.e horizontally
	itemsInWorkSpace.sort((a, b) => a.lt.x - b.lt.x);

	sweepLine(workSpaceRect, workSpaceRectCo, itemsInWorkSpace);
};

export const sweepLine = (area, areaCo, items) => {
	// area: area to sweep
	// area: area to sweep Coordinate Form
	// items: items in area

	const it = new IntervalTreesIterative();
	const stack = new Stack();

	it.insert({ low: areaCo.tl.y, high: areaCo.bl.y, d: area });

	let fInterval = { low: 0, high: 0, d: null };
	let intervals;
	let iLen = 0;
	let diff;
	let dLen = 0;

	const len = items.len;

	for (let i = 0; i < len; i++) {
		fInterval = { low: items[i].tl.y, high: items[i].bl.y };
		intervals = it.findAll(fInterval);
		iLen = intervals.length;
		for (let j = 0; j < iLen; j++) {
			if (doRectsOverlap(intervals[j].d, items[i])) {
				diff = subtractRect(intervals[j].d, items[i]);

				for (let k = 0; k < dLen; k++) {
					it.insert({
						low: diff[k].tl.y,
						high: diff[k].bl.y,
						d: getRectObjectFromCo(diff[k]),
					});
				}

				it.remove(intervals[j].interval, intervals[j].d);
			}
		}
	}
};

export const calcFreeSpace = (affectedItems) => {};
