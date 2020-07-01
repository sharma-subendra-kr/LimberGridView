import {
	positionData as pd,
	modifiedPositionData as mpd,
} from "../../variables/essentials";
import privateConstants from "../../constants/privateConstants";
import publicConstants from "../../constants/publicConstants";
import { doRectsOverlap } from "../rect/rectUtils";

export const isFlippingPosPossible = () => {
	if (affectedItems.length === 2) {
		const diff = Math.abs(pd[affectedItems[0]].y - pd[affectedItems[1]].y);
		if (diff > privateConstants.HEIGHT) {
			// to check if both lie on th visible screen or viewport
			return false;
		}
		return true;
	}
};

export const getMinMaxY = (
	affectedItems,
	resizedBottomY,
	toY,
	movedBottomY
) => {
	let minY = Number.MAX_SAFE_INTEGER,
		maxY = 0;
	let len = affectedItems.length;
	for (let i = 0; i < len; i++) {
		if (pd[affectedItems[i]].y < minY) {
			minY = pd[affectedItems[i]].y;
		}
		if (pd[affectedItems[i]].y + pd[affectedItems[i]].height > maxY) {
			maxY = pd[affectedItems[i]].y + pd[affectedItems[i]].height;
		}
	}

	if (resizedBottomY > maxY) maxY = resizedBottomY;

	if (toY < minY) minY = toY;

	if (movedBottomY > maxY) maxY = movedBottomY;

	return { minY, maxY };
};

export const fixMinYMaxY = (rectCo) => {
	const cMinY = rectCo.tl.y,
		cMaxY = rectCo.bl.y; // current minY and maxY
	const len = pd.length;

	let itemBottomY,
		itemTopY,
		topDiff,
		bottomDiff,
		minTopDiff = publicConstants.MARGIN,
		minBottomDiff = publicConstants.MARGIN;
	for (let i = 0; i < len; i++) {
		itemTopY = pd[i].y;
		itemBottomY = pd[i].y + pd[i].height;

		if (itemBottomY <= cMinY) {
			topDiff = cMinY - itemBottomY;
			if (topDiff < minTopDiff) {
				minTopDiff = topDiff;
			}
		} else if (itemTopY >= cMaxY) {
			bottomDiff = itemTopY - cMaxY;
			if (bottomDiff < minBottomDiff) {
				minBottomDiff = bottomDiff;
			}
		}
	}

	const adjustTop = publicConstants.MARGIN - minTopDiff;
	const adjustBottom = publicConstants.MARGIN - minBottomDiff;
	let arrangeTopY = rectCo.tl.y;
	let arrangeBottomY = rectCo.br.y;

	if (adjustTop !== 0) {
		arrangeTopY = rectCo.tl.y + adjustTop;
	}

	if (adjustBottom !== 0) {
		arrangeBottomY = rectCo.br.y - adjustBottom;
	}

	return { arrangeTopY, arrangeBottomY };
};

export const getItemsInWorkSpace = (workSpaceRect, affectedItems) => {
	const len = mpd.length;
	const itemsInWorkSpace = new Array(len);
	let count = 0;
	for (let i = 0; i < len; i++) {
		if (doRectsOverlap(workSpaceRect, mpd[i])) {
			itemsInWorkSpace[count++] = mpd[i];
		}
	}

	const res = new Array(count);
	for (let i = 0; i < count; i++) {
		res[i] = itemsInWorkSpace[i];
	}

	return res;
};

export const getScore = (rect, maxHWSum) => {
	return (rect.width + rect.height) / maxHWSum;
};

export const assignScoreToFreeRects = (freeRects) => {
	const len = freeRects.length;

	let maxHWSum = 0;
	let sum = 0;
	for (let i = 0; i < len; i++) {
		sum = freeRects[i].d.rect.width + freeRects[i].d.rect.height;
		if (sum > maxHWSum) {
			maxHWSum = sum;
		}
	}

	let maxScore = 0;
	for (let i = 0; i < len; i++) {
		freeRects[i].d.score = getScore(freeRects[i].d.rect, maxHWSum);
		if (freeRects[i].d.score > maxScore) {
			maxScore = freeRects[i].d.score;
		}
	}
	return { maxScore, maxHWSum };
};

export const getAffectedItemsScore = (affectedItems, maxHWSum) => {
	debugger;
	const len = affectedItems.length;
	let item;
	let score;
	let maxHeight = 0;
	let maxWidth = 0;
	// const scoreMap = {};
	const scoreArr = new Array(len);
	for (let i = 0; i < len; i++) {
		item = mpd[affectedItems[i]];
		score = getScore(item, maxHWSum);
		// scoreMap[affectedItems[i]] = score;
		scoreArr[i] = { v: score, d: affectedItems[i] };

		if (item.width > maxWidth) {
			maxWidth = item.width;
		}

		if (item.height > maxHeight) {
			maxHeight = item.height;
		}
	}

	// return scoreMap;
	return scoreArr;
};
