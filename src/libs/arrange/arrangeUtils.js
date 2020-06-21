import { positionData as pd } from "../../variables/essentials";
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

export const getMinMaxY = (affectedItems) => {
	let minY = Number.MAX_SAFE_INTEGER,
		maxY = 0;
	let len = affectedItems.length;
	for (let i = 0; i < len; i++) {
		if (pd[affectedItems[i]].y < minY) {
			minY = pd[affectedItems[i]].y;
		}
		if (pd[affectedItems[i]].y > maxY) {
			maxY = pd[affectedItems[i]].y;
		}
	}

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

export const getItemsInWorkSpace = (workSpaceRect) => {
	const len = pd.length;
	const itemsInWorkSpace = new Array(len);
	let count = 0;
	for (let i = 0; i < len; i++) {
		if (doRectsOverlap(workSpaceRect, pd[i])) {
			itemsInWorkSpace[count++] = pd[i];
		}
	}

	const res = new Array(count);
	for (let i = 0; i < count; i++) {
		res[i] = itemsInWorkSpacep[i];
	}

	return res;
};

export const buildTreeData = () => {};
