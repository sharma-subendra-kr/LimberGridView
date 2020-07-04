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

export const getBottomMax = () => {
	let max = 0;
	const len = pd.length;

	for (let i = 0; i < len; i++) {
		if (pd[i].y + pd[i].height > max) {
			max = pd[i].y + pd[i].height;
		}

		if (mpd[i].y + mpd[i].height > max) {
			max = mpd[i].y + mpd[i].height;
		}
	}

	return max;
};

export const getTopBottomWS = (workSpaceRectCo) => {
	let topWorkSpace, bottomWorkSpace;
	if (workSpaceRectCo.tl.y > 0) {
		topWorkSpace = {
			tl: { x: publicConstants.MARGIN, y: publicConstants.MARGIN },
			tr: {
				x: privateConstants.WIDTH - publicConstants.MARGIN,
				y: publicConstants.MARGIN,
			},
			br: {
				x: privateConstants.WIDTH - publicConstants.MARGIN,
				y: workSpaceRectCo.tr.y,
			},
			bl: { x: publicConstants.MARGIN, y: workSpaceRectCo.tl.y },
		};
	}

	const bottomMax = getBottomMax();

	if (bottomMax > workSpaceRectCo.bl.y) {
		bottomWorkSpace = {
			tl: { x: publicConstants.MARGIN, y: workSpaceRectCo.bl.y },
			tr: {
				x: privateConstants.WIDTH - publicConstants.MARGIN,
				y: workSpaceRectCo.bl.y,
			},
			br: { x: privateConstants.WIDTH - publicConstants.MARGIN, y: bottomMax },
			bl: { x: publicConstants.MARGIN, y: bottomMax },
		};
	}

	// if (topWorkSpace || bottomWorkSpace) {
	// 	if (topWorkSpace && !bottomWorkSpace) {
	// 		combinedWorkSpace = {
	// 			tl: { x: 0, y: 0 },
	// 			tr: { x: privateConstants.WIDTH, y: 0 },
	// 			br: { x: privateConstants.WIDTH, y: workSpaceRectCo.br.y },
	// 			bl: { x: 0, y: workSpaceRectCo.bl.y },
	// 		};
	// 	} else if (!topWorkSpace && bottomWorkSpace) {
	// 		combinedWorkSpace = {
	// 			tl: { x: 0, y: workSpaceRectCo.tl.y },
	// 			tr: { x: privateConstants.WIDTH, y: workSpaceRectCo.tr.y },
	// 			br: { x: privateConstants.WIDTH, y: bottomMax },
	// 			bl: { x: 0, y: bottomMax },
	// 		};
	// 	} else {
	// 		combinedWorkSpace = {
	// 			tl: { x: 0, y: 0 },
	// 			tr: { x: privateConstants.WIDTH, y: 0 },
	// 			br: { x: privateConstants.WIDTH, y: bottomMax },
	// 			bl: { x: 0, y: bottomMax },
	// 		};
	// 	}
	// } else {
	// 	combinedWorkSpace = {
	// 		tl: { ...workSpaceRectCo.tl },
	// 		tr: { ...workSpaceRectCo.tr },
	// 		br: { ...workSpaceRectCo.br },
	// 		bl: { ...workSpaceRectCo.bl },
	// 	};
	// }

	return { topWorkSpace, bottomWorkSpace };
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
		if (doRectsOverlap(workSpaceRect, getItemDimenWithMargin(mpd[i]))) {
			itemsInWorkSpace[count++] = mpd[i];
		}
	}

	const res = new Array(count);
	for (let i = 0; i < count; i++) {
		res[i] = itemsInWorkSpace[i];
	}

	return res;
};

export const getItemDimenWithMargin = (item) => {
	const _item = { ...item };
	_item.x -= publicConstants.MARGIN;
	_item.y -= publicConstants.MARGIN;
	_item.width += publicConstants.MARGIN * 2;
	_item.height += publicConstants.MARGIN * 2;

	return _item;
};

// export const getScore = (rect, maxHWSum) => {
// 	return (rect.width + rect.height) / maxHWSum;
// };

// export const assignScoreToFreeRects = (freeRects) => {
// 	const len = freeRects.length;

// 	let maxHWSum = 0;
// 	let sum = 0;
// 	for (let i = 0; i < len; i++) {
// 		sum = freeRects[i].d.rect.width + freeRects[i].d.rect.height;
// 		if (sum > maxHWSum) {
// 			maxHWSum = sum;
// 		}
// 	}

// 	let maxScore = 0;
// 	for (let i = 0; i < len; i++) {
// 		freeRects[i].d.score = getScore(freeRects[i].d.rect, maxHWSum);
// 		if (freeRects[i].d.score > maxScore) {
// 			maxScore = freeRects[i].d.score;
// 		}
// 	}
// 	return { maxScore, maxHWSum };
// };

// export const getAffectedItemsScore = (affectedItems, maxHWSum) => {
// 	const len = affectedItems.length;
// 	let item;
// 	let score;
// 	let maxHeight = 0;
// 	let maxWidth = 0;
// 	// const scoreMap = {};
// 	const scoreArr = new Array(len);
// 	for (let i = 0; i < len; i++) {
// 		item = mpd[affectedItems[i]];
// 		score = getScore(item, maxHWSum);
// 		// scoreMap[affectedItems[i]] = score;
// 		scoreArr[i] = { v: score, d: affectedItems[i] };

// 		if (item.width > maxWidth) {
// 			maxWidth = item.width;
// 		}

// 		if (item.height > maxHeight) {
// 			maxHeight = item.height;
// 		}
// 	}

// 	// return scoreMap;
// 	return scoreArr;
// };
