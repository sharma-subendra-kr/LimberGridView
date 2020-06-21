import { IntervalTreesIterative } from "interval-trees";
import { positionData as pd } from "../../variables/essentials";
import privateConstants from "../../constants/privateConstants";
import publicConstants from "../../constants/publicConstants";
import { getMinMaxY, fixMinYMaxY } from "./arrangeUtils";
import { getRectObjectFromCo } from "../rect/rectUtils";

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
};

export const calcFreeSpace = (affectedItems) => {};
