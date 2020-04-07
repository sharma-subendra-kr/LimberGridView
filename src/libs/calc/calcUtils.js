/*

This is a release of LimberGridView 0.0.0, brought to you by Subendra Kumar Sharma.
This software is released under the GNU General Public License version 3, or (at your option) any later version.

LimberGridView, a powerful JavaScript Libary that gives you flexible, movable, resizable(any size) and auto-arranging grids. 

Copyright (c) 2018, Subendra Kumar Sharma. All Rights reserved. (sharma.subendra.kr@gmail.com, sharma.subendrakr@yahoo.com)

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

import {
	getPlainFrom4Points,
	isValidPlane,
	getLines,
	getMarginAtPoint,
	arePlainsIdentical,
	sortPlainsByArea,
	sortPlainsByDepth,
	sortPlainsByHeight,
	arePlainsSame,
} from "../utils/essentials";
import publicConstants from "../../constants/publicConstants";
import privateConstants from "../../constants/privateConstants";
import { positionData } from "../../variables/essentials";
import e from "../../variables/elements";

export const findFreeSpaces = function(item, affectedItems) {
	var freeSpaces = [];
	var length_0 = affectedItems.length;
	for (var i = 0; i < length_0; i++) {
		var result = isPlaneBInsidePlaneA_TouchingIsInside(
			item,
			positionData[affectedItems[i]],
			"all"
		);
		if (result.isInside == true) {
			continue;
		} else {
			var fs = subtractPlanes(positionData[affectedItems[i]], item);
			var length_1 = fs.length;
			for (var j = 0; j < length_1; j++) {
				freeSpaces.push(fs[j]);
			}
		}
	}
	return freeSpaces;
};

export const mergeFreeSpaces = function(freeSpaces, itemsNotToMerge) {
	var mergePlainsFreeSpacesAndItemsNotToMerge = freeSpaces.concat(
		itemsNotToMerge
	);
	var isPlaneInsideStack = function(stack, plane, context) {
		var flag = false;
		var length_0 = stack.length;
		for (var i = 0; i < length_0; i++) {
			if (arePlainsSame(stack[i], plane)) {
				flag = true;
				break;
			}
		}
		return flag;
	};

	var mergedStack = [];
	var length_0 = freeSpaces.length;
	for (var i = 0; i < length_0 - 1; i++) {
		for (var j = i + 1; j < length_0; j++) {
			if (
				!isPlaneBInsidePlaneA_TouchingNotInside(
					freeSpaces[i],
					freeSpaces[j]
				)
			) {
				var mergedPlane = mergePlains.call(
					this,
					freeSpaces[i],
					freeSpaces[j],
					mergePlainsFreeSpacesAndItemsNotToMerge
				);
				if (mergedPlane != false) {
					if (!isPlaneInsideStack(mergedStack, mergedPlane, this)) {
						mergedStack.push(mergedPlane);
					}
				}
			}
		}
	}

	var mergeStackItemWithFreeSpaces = function(
		freeSpaces,
		mergedStack,
		mergePlainsFreeSpacesAndItemsNotToMerge,
		context
	) {
		var newStack = [];
		var length_0 = freeSpaces.length;
		var length_1 = mergedStack.length;
		for (var i = 0; i < length_0; i++) {
			for (var j = 0; j < length_1; j++) {
				if (
					!isPlaneBInsidePlaneA_TouchingNotInside(
						freeSpaces[i],
						mergedStack[j]
					)
				) {
					var mergedPlane = mergePlains.call(
						context,
						freeSpaces[i],
						mergedStack[j],
						mergePlainsFreeSpacesAndItemsNotToMerge
					);
					if (mergedPlane != false) {
						if (
							!isPlaneInsideStack(
								mergedStack.concat(newStack),
								mergedPlane,
								context
							)
						) {
							newStack.push(mergedPlane);
						}
					}
				}
			}
		}
		return newStack;
	};

	var newStack = mergeStackItemWithFreeSpaces(
		freeSpaces,
		mergedStack,
		mergePlainsFreeSpacesAndItemsNotToMerge,
		this
	);

	while (newStack.length > 0) {
		mergedStack = mergedStack.concat(newStack);
		var newStack = mergeStackItemWithFreeSpaces(
			freeSpaces,
			mergedStack,
			mergePlainsFreeSpacesAndItemsNotToMerge,
			this
		);
	}

	mergedStack = mergedStack.concat(freeSpaces);

	var redundantPlanes = {};
	var length_0 = mergedStack.length;
	for (var i = 0; i < length_0 - 1; i++) {
		for (var j = i + 1; j < length_0; j++) {
			var result = isPlaneBInsidePlaneA_TouchingIsInside(
				mergedStack[i],
				mergedStack[j],
				"all"
			);
			if (result.isInside) {
				redundantPlanes[j] = true;
			} else {
				var result = isPlaneBInsidePlaneA_TouchingIsInside(
					mergedStack[j],
					mergedStack[i],
					"all"
				);
				if (result.isInside) {
					redundantPlanes[i] = true;
				}
			}
		}
	}

	var finalMergedPlanes = [];
	var length_0 = mergedStack.length;
	for (var i = 0; i < length_0; i++) {
		if (!redundantPlanes.hasOwnProperty(i)) {
			finalMergedPlanes.push(mergedStack[i]);
		}
	}

	return finalMergedPlanes;
};

export const findAffectedItemsOnMove = function(index, toX, toY) {
	var item = JSON.parse(JSON.stringify(positionData[index]));
	item.x = toX;
	item.y = toY;
	var affectedItems = [];
	var affectedItemsExceptSelf = [];

	var length_0 = positionData.length;
	for (var i = 0; i < length_0; i++) {
		var result = isPlaneBInsidePlaneA_TouchingIsInside(
			item,
			positionData[i]
		);
		if (result == true) {
			affectedItems.push(i);
			if (i != index) {
				affectedItemsExceptSelf.push(i);
			}
		}
	}

	return {
		affectedItems: affectedItems,
		affectedItemsExceptSelf: affectedItemsExceptSelf,
	};
};

export const findAffectedItemsOnResize = function(index, width, height) {
	var item = JSON.parse(JSON.stringify(positionData[index]));
	item.width = width;
	item.height = height;
	var affectedItems = [];
	var affectedItemsExceptSelf = [];

	var length_0 = positionData.length;
	for (var i = 0; i < length_0; i++) {
		var result = isPlaneBInsidePlaneA_TouchingIsInside(
			item,
			positionData[i]
		);
		if (result == true) {
			affectedItems.push(i);
			if (i != index) {
				affectedItemsExceptSelf.push(i);
			}
		}
	}

	return {
		affectedItems: affectedItems,
		affectedItemsExceptSelf: affectedItemsExceptSelf,
	};
};

export const isPlaneBInsidePlaneA_TouchingIsInside = function(
	A,
	B,
	resultType
) {
	var ATopLeft = [A.x, A.y];
	var ATopRight = [A.x + A.width, A.y];
	var ABottomLeft = [A.x, A.y + A.height];
	var ABottomRight = [A.x + A.width, A.y + A.height];

	var ACoordiantesArr = [ATopLeft, ATopRight, ABottomRight, ABottomLeft];

	var BTopLeft = [B.x, B.y];
	var BTopRight = [B.x + B.width, B.y];
	var BBottomLeft = [B.x, B.y + B.height];
	var BBottomRight = [B.x + B.width, B.y + B.height];

	var BCoordinatesArr = [BTopLeft, BTopRight, BBottomRight, BBottomLeft];
	var BResultArr = [];
	var isInside = 0;
	var overallResult = false;
	var length_0 = BCoordinatesArr.length;
	for (var i = 0; i < length_0; i++) {
		if (
			BCoordinatesArr[i][0] >= ATopLeft[0] &&
			BCoordinatesArr[i][0] <= ATopRight[0] &&
			BCoordinatesArr[i][0] >= ABottomLeft[0] &&
			BCoordinatesArr[i][0] <= ABottomRight[0] &&
			BCoordinatesArr[i][1] >= ATopLeft[1] &&
			BCoordinatesArr[i][1] <= ABottomLeft[1] &&
			BCoordinatesArr[i][1] >= ATopRight[1] &&
			BCoordinatesArr[i][1] <= ABottomRight[1]
		) {
			BResultArr[i] = true;
			isInside++;
			overallResult = true;
		} else {
			BResultArr[i] = false;
		}
	}
	if (isInside == 4) {
		isInside = true;
	} else {
		isInside = false;
	}

	var engulfed = false;
	var engulfedCheckCount = 0;
	var length_0 = ACoordiantesArr.length;
	for (var i = 0; i < length_0; i++) {
		if (
			ACoordiantesArr[i][0] >= BTopLeft[0] &&
			ACoordiantesArr[i][0] <= BTopRight[0] &&
			ACoordiantesArr[i][0] >= BBottomLeft[0] &&
			ACoordiantesArr[i][0] <= BBottomRight[0] &&
			ACoordiantesArr[i][1] >= BTopLeft[1] &&
			ACoordiantesArr[i][1] <= BBottomLeft[1] &&
			ACoordiantesArr[i][1] >= BTopRight[1] &&
			ACoordiantesArr[i][1] <= BBottomRight[1]
		) {
			overallResult = true;
			engulfedCheckCount++;
		}
	}

	if (engulfedCheckCount == 4) {
		engulfed = true;
	}

	if (
		(BTopLeft[0] > ATopLeft[0] &&
			BTopRight[0] < ATopRight[0] &&
			BTopLeft[1] < ATopLeft[1] &&
			BBottomLeft[1] > ABottomLeft[1]) ||
		(BTopLeft[1] > ATopLeft[1] &&
			BBottomLeft[1] < ABottomLeft[1] &&
			BTopLeft[0] < ATopLeft[0] &&
			BTopRight[0] > ATopRight[0])
	) {
		overallResult = true;
	}

	if (resultType == "overall") {
		return overallResult;
	} else if (resultType == "individual") {
		return BResultArr;
	} else if (resultType == "all") {
		return {
			overall: overallResult,
			individual: BResultArr,
			isInside: isInside,
			engulfed: engulfed,
		};
	} else {
		return overallResult;
	}
};

export const isPlaneBInsidePlaneA_TouchingNotInside = function(
	A,
	B,
	resultType
) {
	var ATopLeft = [A.x, A.y];
	var ATopRight = [A.x + A.width, A.y];
	var ABottomLeft = [A.x, A.y + A.height];
	var ABottomRight = [A.x + A.width, A.y + A.height];

	var ACoordiantesArr = [ATopLeft, ATopRight, ABottomRight, ABottomLeft];

	var BTopLeft = [B.x, B.y];
	var BTopRight = [B.x + B.width, B.y];
	var BBottomLeft = [B.x, B.y + B.height];
	var BBottomRight = [B.x + B.width, B.y + B.height];

	var BCoordinatesArr = [BTopLeft, BTopRight, BBottomRight, BBottomLeft];
	var BResultArr = [];
	var isInside = 0;
	var overallResult = false;
	var length_0 = BCoordinatesArr.length;
	for (var i = 0; i < length_0; i++) {
		if (
			BCoordinatesArr[i][0] > ATopLeft[0] &&
			BCoordinatesArr[i][0] < ATopRight[0] &&
			BCoordinatesArr[i][0] > ABottomLeft[0] &&
			BCoordinatesArr[i][0] < ABottomRight[0] &&
			BCoordinatesArr[i][1] > ATopLeft[1] &&
			BCoordinatesArr[i][1] < ABottomLeft[1] &&
			BCoordinatesArr[i][1] > ATopRight[1] &&
			BCoordinatesArr[i][1] < ABottomRight[1]
		) {
			BResultArr[i] = true;
			isInside++;
			overallResult = true;
		} else {
			BResultArr[i] = false;
		}
	}
	if (isInside == 4) {
		isInside = true;
	} else {
		isInside = false;
	}

	var engulfed = false;
	var engulfedCheckCount = 0;
	var length_0 = ACoordiantesArr.length;
	for (var i = 0; i < length_0; i++) {
		if (
			ACoordiantesArr[i][0] > BTopLeft[0] &&
			ACoordiantesArr[i][0] < BTopRight[0] &&
			ACoordiantesArr[i][0] > BBottomLeft[0] &&
			ACoordiantesArr[i][0] < BBottomRight[0] &&
			ACoordiantesArr[i][1] > BTopLeft[1] &&
			ACoordiantesArr[i][1] < BBottomLeft[1] &&
			ACoordiantesArr[i][1] > BTopRight[1] &&
			ACoordiantesArr[i][1] < BBottomRight[1]
		) {
			overallResult = true;
			engulfedCheckCount++;
		}
	}

	if (engulfedCheckCount == 4) {
		engulfed = true;
	}

	if (
		(BTopLeft[0] >= ATopLeft[0] &&
			BTopRight[0] <= ATopRight[0] &&
			BTopLeft[1] <= ATopLeft[1] &&
			BBottomLeft[1] >= ABottomLeft[1]) ||
		(BTopLeft[1] >= ATopLeft[1] &&
			BBottomLeft[1] <= ABottomLeft[1] &&
			BTopLeft[0] <= ATopLeft[0] &&
			BTopRight[0] >= ATopRight[0])
	) {
		overallResult = true;
	}

	if (
		(ATopLeft[0] >= BTopLeft[0] &&
			ATopRight[0] <= BTopRight[0] &&
			ATopLeft[1] <= BTopLeft[1] &&
			ABottomLeft[1] >= BBottomLeft[1]) ||
		(ATopLeft[1] >= BTopLeft[1] &&
			ABottomLeft[1] <= BBottomLeft[1] &&
			ATopLeft[0] <= BTopLeft[0] &&
			ATopRight[0] >= BTopRight[0])
	) {
		overallResult = true;
	}

	if (
		BTopLeft[0] == ATopLeft[0] &&
		BTopRight[0] == ATopRight[0] &&
		((BTopLeft[1] >= ATopLeft[1] && BTopLeft[1] < ABottomLeft[1]) ||
			(BBottomLeft[1] > ATopLeft[1] && BBottomLeft[1] <= ABottomLeft[1]))
	) {
		overallResult = true;
	}

	if (
		ATopLeft[0] == BTopLeft[0] &&
		ATopRight[0] == BTopRight[0] &&
		((ATopLeft[1] >= BTopLeft[1] && ATopLeft[1] < BBottomLeft[1]) ||
			(ABottomLeft[1] > BTopLeft[1] && ABottomLeft[1] <= BBottomLeft[1]))
	) {
		overallResult = true;
		if (ATopLeft[1] > BTopLeft[1] && ABottomLeft[1] < BBottomLeft[1]) {
			engulfed = true;
		}
	}

	if (
		BTopLeft[1] == ATopLeft[1] &&
		BBottomLeft[1] == ABottomLeft[1] &&
		((BTopLeft[0] >= ATopLeft[0] && BTopLeft[0] < ATopRight[0]) ||
			(BTopRight[0] > ATopLeft[0] && BTopRight[0] <= ATopRight[0]))
	) {
		overallResult = true;
	}

	if (
		ATopLeft[1] == BTopLeft[1] &&
		ABottomLeft[1] == BBottomLeft[1] &&
		((ATopLeft[0] >= BTopLeft[0] && ATopLeft[0] < BTopRight[0]) ||
			(ATopRight[0] > BTopLeft[0] && ATopRight[0] <= BTopRight[0]))
	) {
		overallResult = true;
		if (ATopLeft[0] > BTopLeft[0] && ATopRight[0] < BTopRight[0]) {
			engulfed = true;
		}
	}

	if (resultType == "overall") {
		return overallResult;
	} else if (resultType == "individual") {
		return BResultArr;
	} else if (resultType == "all") {
		return {
			overall: overallResult,
			individual: BResultArr,
			isInside: isInside,
			engulfed: engulfed,
		};
	} else {
		return overallResult;
	}
};

export const fitItemsIntoFreeSpaces = function(
	items,
	freeSpaces,
	doNotMergeItems
) {
	var items = JSON.parse(JSON.stringify(items));
	var freeSpaces = JSON.parse(JSON.stringify(freeSpaces));
	var doNotMergeItems = JSON.parse(JSON.stringify(doNotMergeItems));

	sortPlainsByArea(items);

	var repositionedItems = [];
	var match = findMatchingSpace.call(this, items, freeSpaces);
	while (
		match.matchingItemIndex != null &&
		match.matchingFreeSpaceIndex != null
	) {
		var tempItem = JSON.parse(
			JSON.stringify(items[match.matchingItemIndex])
		);

		var repositionedItem = {
			x:
				freeSpaces[match.matchingFreeSpaceIndex].x +
				getMarginAtPoint.call(
					this,
					freeSpaces[match.matchingFreeSpaceIndex].x
				),
			y:
				freeSpaces[match.matchingFreeSpaceIndex].y +
				getMarginAtPoint.call(
					this,
					freeSpaces[match.matchingFreeSpaceIndex].y
				),
			width: tempItem.width,
			height: tempItem.height,
			index: tempItem.index,
		};
		repositionedItems.push(repositionedItem);

		var occupiedSpace = {
			x: freeSpaces[match.matchingFreeSpaceIndex].x,
			y: freeSpaces[match.matchingFreeSpaceIndex].y,
			width:
				tempItem.width +
				getMarginAtPoint.call(
					this,
					freeSpaces[match.matchingFreeSpaceIndex].x
				),
			height:
				tempItem.height +
				getMarginAtPoint.call(
					this,
					freeSpaces[match.matchingFreeSpaceIndex].y
				),
			doNotMergeFlag: true,
		};

		items.splice(match.matchingItemIndex, 1);

		var newFreeSpaces = [];

		var length_0 = freeSpaces.length;
		for (var i = 0; i < length_0; i++) {
			var planeDiff = subtractPlanes(freeSpaces[i], occupiedSpace);
			if (planeDiff != false) {
				newFreeSpaces = newFreeSpaces.concat(planeDiff);
			} else {
				newFreeSpaces.push(JSON.parse(JSON.stringify(freeSpaces[i])));
			}
		}

		// calculate new mergedFreeSpaces
		doNotMergeItems.push(occupiedSpace);
		var newMergedFreeSpaces = mergeFreeSpaces.call(
			this,
			newFreeSpaces,
			doNotMergeItems
		);

		freeSpaces = newMergedFreeSpaces;
		var match = findMatchingSpace.call(this, items, newMergedFreeSpaces);
	}
	return { repositionedItems: repositionedItems, freeSpaces: freeSpaces };
};

export const findMatchingSpace = function(items, freeSpaces) {
	// IMPORTANT
	// items must sorted in descending order according to area
	// IMPORTANT END

	var matchingItemIndex = null;
	var matchingFreeSpaceIndex = null;
	var length_0 = items.length;
	for (var i = 0; i < length_0; i++) {
		var randomPossibilities = [];
		var possibilitiesWidth = [];
		var possibilitiesHeight = [];
		var length_1 = freeSpaces.length;
		for (var j = 0; j < length_1; j++) {
			var tempItem = JSON.parse(JSON.stringify(items[i]));
			if (
				getMarginAtPoint.call(this, freeSpaces[j].x) ==
				publicConstants.MARGIN
			) {
				tempItem.width += publicConstants.MARGIN * 1;
			}
			if (
				getMarginAtPoint.call(this, freeSpaces[j].y) ==
				publicConstants.MARGIN
			) {
				tempItem.height += publicConstants.MARGIN * 1;
			}

			var freeSpaceWidth = freeSpaces[j].width;
			var freeSpaceHeight = freeSpaces[j].height;

			if (arePlainsIdentical(tempItem, freeSpaces[j])) {
				matchingItemIndex = i;
				matchingFreeSpaceIndex = j;
				break;
			}

			if (
				Math.floor(freeSpaceWidth / tempItem.width) >= 1 &&
				freeSpaceHeight >= tempItem.height
			) {
				possibilitiesWidth.push(j);
			}
			if (
				Math.floor(freeSpaceHeight / tempItem.height) >= 1 &&
				freeSpaceWidth >= tempItem.width
			) {
				possibilitiesHeight.push(j);
			}
		}

		var greatestWidthDiff = 0;
		var greatestWidthDiffIndex = null;
		var minYPossibilitiesWidth = 0;
		var minYPossibilitiesWidthIndex = null;
		var greatestHeightDiff = 0;
		var greatestHeightDiffIndex = null;
		var minYPossibilitiesHeight = 0;
		var minYPossibilitiesHeightIndex = null;

		var length_1 = possibilitiesWidth.length;
		for (var k = 0; k < length_1; k++) {
			var flooredQuotient = Math.floor(
				freeSpaces[possibilitiesWidth[k]].width / tempItem.width
			);
			var quotient =
				freeSpaces[possibilitiesWidth[k]].width / tempItem.width;
			var diff = quotient - flooredQuotient;

			if (diff > greatestWidthDiff) {
				greatestWidthDiff = diff;
				greatestWidthDiffIndex = possibilitiesWidth[k];
			}

			if (
				freeSpaces[possibilitiesWidth[k]].y <= minYPossibilitiesWidth ||
				minYPossibilitiesWidth == 0
			) {
				if (
					freeSpaces[possibilitiesWidth[k]].y ==
					minYPossibilitiesWidth
				) {
					if (greatestWidthDiffIndex == null) {
						minYPossibilitiesWidth =
							freeSpaces[possibilitiesWidth[k]].y;
						minYPossibilitiesWidthIndex = possibilitiesWidth[k];
					} else {
						if (diff == greatestWidthDiff) {
							minYPossibilitiesWidth =
								freeSpaces[possibilitiesWidth[k]].y;
							minYPossibilitiesWidthIndex = possibilitiesWidth[k];
						}
					}
				} else {
					minYPossibilitiesWidth =
						freeSpaces[possibilitiesWidth[k]].y;
					minYPossibilitiesWidthIndex = possibilitiesWidth[k];
				}
			}
		}

		var length_1 = possibilitiesHeight.length;
		for (k = 0; k < length_1; k++) {
			var flooredQuotient = Math.floor(
				freeSpaces[possibilitiesHeight[k]].height / tempItem.height
			);
			var quotient =
				freeSpaces[possibilitiesHeight[k]].height / tempItem.height;
			var diff = quotient - flooredQuotient;

			if (diff > greatestHeightDiff) {
				greatestHeightDiff = diff;
				greatestHeightDiffIndex = possibilitiesHeight[k];
			}

			if (
				freeSpaces[possibilitiesHeight[k]].y <=
					minYPossibilitiesHeight ||
				minYPossibilitiesHeight == 0
			) {
				if (
					freeSpaces[possibilitiesHeight[k]].y ==
					minYPossibilitiesHeight
				) {
					if (greatestHeightDiffIndex == null) {
						minYPossibilitiesHeight =
							freeSpaces[possibilitiesHeight[k]].y;
						minYPossibilitiesHeightIndex = possibilitiesHeight[k];
					} else {
						if (diff == greatestHeightDiff) {
							minYPossibilitiesHeight =
								freeSpaces[possibilitiesHeight[k]].y;
							minYPossibilitiesHeightIndex =
								possibilitiesHeight[k];
						}
					}
				} else {
					minYPossibilitiesHeight =
						freeSpaces[possibilitiesHeight[k]].y;
					minYPossibilitiesHeightIndex = possibilitiesHeight[k];
				}
			}
		}

		if (
			minYPossibilitiesWidthIndex != null ||
			minYPossibilitiesHeightIndex != null
		) {
			if (minYPossibilitiesWidth < minYPossibilitiesHeight) {
				matchingItemIndex = i;
				matchingFreeSpaceIndex = minYPossibilitiesWidthIndex;
				break;
			} else {
				matchingItemIndex = i;
				matchingFreeSpaceIndex = minYPossibilitiesHeightIndex;
				break;
			}
		}

		// Below if statement will never get executed, Sorry OCD
		if (greatestWidthDiffIndex != null || greatestHeightDiffIndex != null) {
			if (greatestWidthDiff > greatestHeightDiff) {
				matchingItemIndex = i;
				matchingFreeSpaceIndex = greatestWidthDiffIndex;
				break;
			} else {
				matchingItemIndex = i;
				matchingFreeSpaceIndex = greatestHeightDiffIndex;
				break;
			}
		}
	}
	return {
		matchingItemIndex: matchingItemIndex,
		matchingFreeSpaceIndex: matchingFreeSpaceIndex,
	};
};

export const fitRemainingItems = function(
	positionData,
	remainingItems,
	allAffectedItems,
	changedIndex,
	previousFitDetails
) {
	if (remainingItems.length == 0) {
		return positionData;
	}
	var affectedItemsObject = [];
	var length_0 = allAffectedItems.affectedItems.length;
	for (var i = 0; i < length_0; i++) {
		affectedItemsObject.push(
			JSON.parse(
				JSON.stringify(positionData[allAffectedItems.affectedItems[i]])
			)
		);
	}
	var affectedItemsObjectDepthDescOrder = sortPlainsByDepth(
		affectedItemsObject
	);
	var greatestDepthAffectedItems =
		affectedItemsObjectDepthDescOrder[0].y +
		affectedItemsObjectDepthDescOrder[0].height;

	var remainingItemsIndicesMap = {};
	var length_0 = remainingItems.length;
	for (var i = 0; i < length_0; i++) {
		remainingItemsIndicesMap[remainingItems[i]] = true;
	}

	var itemsAboveGreatestDepth = [];
	var recalculatedGreatestDepthAffectedItemsAndNonAffectedItemsCaseGreater = null;
	var recalculatedGreatestDepthAffectedItemsAndNonAffectedItemsCaseLesser = null;
	var length_0 = positionData.length;
	for (var i = 0; i < length_0; i++) {
		if (remainingItemsIndicesMap.hasOwnProperty(i)) {
			continue;
		}
		if (
			positionData[i].y < greatestDepthAffectedItems &&
			(positionData[i].y + positionData[i].height <=
				greatestDepthAffectedItems ||
				positionData[i].y + positionData[i].height >
					greatestDepthAffectedItems)
		) {
			if (
				positionData[i].y + positionData[i].height >
				greatestDepthAffectedItems
			) {
				if (
					recalculatedGreatestDepthAffectedItemsAndNonAffectedItemsCaseGreater <
						positionData[i].y + positionData[i].height ||
					recalculatedGreatestDepthAffectedItemsAndNonAffectedItemsCaseGreater ==
						null
				) {
					recalculatedGreatestDepthAffectedItemsAndNonAffectedItemsCaseGreater =
						positionData[i].y + positionData[i].height;
				}
			}
			if (
				positionData[i].y + positionData[i].height <=
				greatestDepthAffectedItems
			) {
				if (
					recalculatedGreatestDepthAffectedItemsAndNonAffectedItemsCaseLesser <
						positionData[i].y + positionData[i].height ||
					recalculatedGreatestDepthAffectedItemsAndNonAffectedItemsCaseLesser ==
						null
				) {
					recalculatedGreatestDepthAffectedItemsAndNonAffectedItemsCaseLesser =
						positionData[i].y + positionData[i].height;
				}
			}
		}
	}

	if (
		recalculatedGreatestDepthAffectedItemsAndNonAffectedItemsCaseGreater !=
		null
	) {
		// fitRemainingItems Case I
		var greatestDepthOfAffectedArea = recalculatedGreatestDepthAffectedItemsAndNonAffectedItemsCaseGreater;
		var itemsToShiftData = getItemsFromPointDepth.call(
			this,
			greatestDepthOfAffectedArea,
			true,
			positionData
		);
		var itemsToShift = itemsToShiftData.itemsFromPointDepth;

		var initialFitData = fitRemainingItemsAboveDeepestLine.call(
			this,
			greatestDepthOfAffectedArea,
			positionData,
			remainingItems,
			previousFitDetails
		);
		positionData = initialFitData.positionData;
		remainingItems = initialFitData.remainingItems;

		var finalFitData = fitRemainingItemsBelowDeepestLine.call(
			this,
			greatestDepthOfAffectedArea,
			positionData,
			remainingItems,
			allAffectedItems
		);
		var finalPositionData = shitftItemsBelow.call(
			this,
			finalFitData.deepestY -
				greatestDepthOfAffectedArea +
				itemsToShiftData.shiftHeightToAdd,
			finalFitData.positionData,
			itemsToShift
		);
	} else if (
		recalculatedGreatestDepthAffectedItemsAndNonAffectedItemsCaseLesser !=
		null
	) {
		// fitRemainingItems Case II
		var greatestDepthOfAffectedArea = recalculatedGreatestDepthAffectedItemsAndNonAffectedItemsCaseLesser;
		var itemsToShiftData = getItemsFromPointDepth.call(
			this,
			greatestDepthOfAffectedArea,
			false,
			positionData
		);
		var itemsToShift = itemsToShiftData.itemsFromPointDepth;

		var finalFitData = fitRemainingItemsBelowDeepestLine.call(
			this,
			greatestDepthOfAffectedArea,
			positionData,
			remainingItems,
			allAffectedItems
		);
		var finalPositionData = shitftItemsBelow.call(
			this,
			finalFitData.deepestY - greatestDepthOfAffectedArea,
			finalFitData.positionData,
			itemsToShift
		);
	}

	return finalPositionData;
};

export const fitRemainingItemsAboveDeepestLine = function(
	deepPoint,
	positionData,
	remainingItems,
	previousFitDetails
) {
	var linePlane = {
		x: 0,
		y: deepPoint,
		width: privateConstants.WIDTH,
		height: 1,
	};

	// find all the items above or on deepPoint
	var remainingItemsMap = {};
	var length_0 = remainingItems.length;
	for (var i = 0; i < length_0; i++) {
		remainingItemsMap[remainingItems[i]] = true;
	}
	var doNotMergeItems = [];
	var length_0 = positionData.length;
	for (var i = 0; i < length_0; i++) {
		if (remainingItemsMap.hasOwnProperty(i)) {
			continue;
		}
		if (
			positionData[i].y <= deepPoint &&
			positionData[i].y + positionData[i].height <= deepPoint
		) {
			// && added recently due to a bug in algo
			var obj = JSON.parse(JSON.stringify(positionData[i]));
			obj.doNotMergeFlag = true;
			doNotMergeItems.push(obj);
		}
	}

	var remainingFreeSpaces = previousFitDetails.freeSpaces;
	remainingFreeSpaces.push(linePlane);

	var mergedFreeSpaces = mergeFreeSpaces.call(
		this,
		remainingFreeSpaces,
		doNotMergeItems
	);
	var length_0 = mergedFreeSpaces.length;
	for (var i = 0; i < length_0; i++) {
		if (
			mergedFreeSpaces[i].y + mergedFreeSpaces[i].height ==
			deepPoint + 1
		) {
			mergedFreeSpaces[i].height -= 1;
		}
	}

	var remainingItemsObject = [];
	var length_0 = remainingItems.length;
	for (var i = 0; i < length_0; i++) {
		remainingItemsObject.push(
			JSON.parse(JSON.stringify(positionData[remainingItems[i]]))
		);
		remainingItemsObject[i].index = remainingItems[i];
	}
	var fitDetails = fitItemsIntoFreeSpaces.call(
		this,
		remainingItemsObject,
		mergedFreeSpaces,
		doNotMergeItems
	);
	var fittedItems = fitDetails.repositionedItems;

	if (fittedItems.length > 0) {
		fittedRemainingItems = {};
		var length_0 = fittedItems.length;
		var length_1 = remainingItems.length;
		for (var i = 0; i < length_0; i++) {
			for (var j = 0; j < length_1; j++) {
				if (fittedItems[i].index == remainingItems[j]) {
					fittedRemainingItems[j] = true;
					positionData[remainingItems[j]].x = fittedItems[i].x;
					positionData[remainingItems[j]].y = fittedItems[i].y;
				}
			}
		}

		var temp = Object.keys(fittedRemainingItems);
		var length_0 = temp.length - 1;
		for (var i = length_0; i >= 0; i--) {
			remainingItems.splice(temp[i], 1);
		}
	}

	return { remainingItems: remainingItems, positionData: positionData };
};

export const fitRemainingItemsBelowDeepestLine = function(
	startingY,
	positionData,
	remainingItems,
	allAffectedItems
) {
	if (remainingItems.length == 0) {
		return { positionData: positionData, deepestY: startingY };
	}
	var remainingItemsBackup = JSON.parse(JSON.stringify(remainingItems));
	var remainingItemsObject = [];
	var length_0 = remainingItems.length;
	for (var i = 0; i < length_0; i++) {
		remainingItemsObject.push(
			JSON.parse(JSON.stringify(positionData[remainingItems[i]]))
		);
		remainingItemsObject[i].index = remainingItems[i];
	}
	var remainingItemsObject = sortPlainsByHeight(remainingItemsObject);

	var initializedPlane = {
		x: 0,
		y: startingY,
		width: privateConstants.WIDTH,
		height:
			remainingItemsObject[0].height +
			getMarginAtPoint.call(this, startingY),
	};

	var remainingWidth = privateConstants.WIDTH;
	var deepestY = startingY;

	while (remainingItemsObject.length != 0) {
		if (remainingItemsObject.length > 0) {
			deepestY =
				startingY +
				remainingItemsObject[0].height +
				getMarginAtPoint.call(this, startingY);
		}

		var freeSpacesInCurrentRow = [];
		var occupiedSpacesInCurrentRow = [];
		var fittedRemainingItems = {};
		var length_0 = remainingItemsObject.length;
		for (var i = 0; i < length_0; i++) {
			if (fittedRemainingItems.hasOwnProperty(i)) {
				continue;
			}

			if (
				remainingWidth >=
				remainingItemsObject[i].width +
					getMarginAtPoint.call(
						this,
						privateConstants.WIDTH - remainingWidth
					)
			) {
				remainingItemsObject[i].x =
					privateConstants.WIDTH -
					remainingWidth +
					getMarginAtPoint.call(
						this,
						privateConstants.WIDTH - remainingWidth
					);
				remainingItemsObject[i].y =
					startingY + getMarginAtPoint.call(this, startingY);
				positionData[remainingItemsObject[i].index].x =
					privateConstants.WIDTH -
					remainingWidth +
					getMarginAtPoint.call(
						this,
						privateConstants.WIDTH - remainingWidth
					);
				positionData[remainingItemsObject[i].index].y =
					startingY + getMarginAtPoint.call(this, startingY);

				var occupiedSpace = {
					x: privateConstants.WIDTH - remainingWidth,
					y: startingY,
					width:
						remainingItemsObject[i].width +
						getMarginAtPoint.call(
							this,
							privateConstants.WIDTH - remainingWidth
						),
					height:
						remainingItemsObject[i].height +
						getMarginAtPoint.call(this, startingY),
					doNotMergeFlag: true,
				};

				occupiedSpacesInCurrentRow.push(occupiedSpace);

				var freeSpace = {
					x: privateConstants.WIDTH - remainingWidth,
					y:
						startingY +
						getMarginAtPoint.call(this, startingY) +
						remainingItemsObject[i].height,
					width:
						remainingItemsObject[i].width +
						getMarginAtPoint.call(
							this,
							privateConstants.WIDTH - remainingWidth
						),
					height:
						initializedPlane.y +
						initializedPlane.height -
						(startingY +
							getMarginAtPoint.call(this, startingY) +
							remainingItemsObject[i].height),
				};

				if (isValidPlane(freeSpace)) {
					freeSpacesInCurrentRow.push(freeSpace);
				}
				fittedRemainingItems[i] = true;

				remainingWidth =
					remainingWidth -
					(remainingItemsObject[i].width +
						getMarginAtPoint.call(
							this,
							privateConstants.WIDTH - remainingWidth
						));
			}
		}

		var temp = Object.keys(fittedRemainingItems);
		var length_0 = temp.length - 1;
		for (var i = length_0; i >= 0; i--) {
			remainingItemsObject.splice(temp[i], 1);
		}

		if (remainingWidth > 0) {
			var freeSpace = {
				x: privateConstants.WIDTH - remainingWidth,
				y: startingY,
				width: remainingWidth,
				height: initializedPlane.height,
			};
			if (isValidPlane(freeSpace)) {
				freeSpacesInCurrentRow.push(freeSpace);
			}
		}

		if (remainingItemsObject.length > 0) {
			var mergedFreeSpaces = mergeFreeSpaces.call(
				this,
				freeSpacesInCurrentRow,
				occupiedSpacesInCurrentRow
			);
			var fitDetails = fitItemsIntoFreeSpaces.call(
				this,
				remainingItemsObject,
				freeSpacesInCurrentRow,
				occupiedSpacesInCurrentRow
			);
			var fittedItems = fitDetails.repositionedItems;

			if (fittedItems.length > 0) {
				fittedRemainingItems = {};
				var length_0 = fittedItems.length;
				var length_1 = remainingItemsObject.length;
				for (var i = 0; i < length_0; i++) {
					for (var j = 0; j < length_1; j++) {
						if (
							fittedItems[i].index ==
							remainingItemsObject[j].index
						) {
							fittedRemainingItems[j] = true;
							positionData[remainingItemsObject[j].index].x =
								fittedItems[i].x;
							positionData[remainingItemsObject[j].index].y =
								fittedItems[i].y;
						}
					}
				}

				var temp = Object.keys(fittedRemainingItems);
				var length_0 = temp.length - 1;
				for (var i = length_0; i >= 0; i--) {
					remainingItemsObject.splice(temp[i], 1);
				}
			}
		}

		if (remainingItemsObject.length > 0) {
			startingY = initializedPlane.y + initializedPlane.height;
			var nextInitializePlane = {
				x: 0,
				y: initializedPlane.y + initializedPlane.height,
				width: privateConstants.WIDTH,
				height:
					remainingItemsObject[0].height +
					getMarginAtPoint.call(
						this,
						initializedPlane.y + initializedPlane.height
					),
			};
			var initializedPlane = nextInitializePlane;
			remainingWidth = privateConstants.WIDTH;
		}
	}

	return { positionData: positionData, deepestY: deepestY };
};

export const getItemsFromPointDepth = function(
	startingY,
	includePlaneAboveAndBelowPointDepth = false,
	positionData
) {
	var itemsFromPointDepth = {};
	var shiftHeightToAdd = 0;
	var length_0 = positionData.length;
	for (var i = 0; i < length_0; i++) {
		if (includePlaneAboveAndBelowPointDepth == true) {
			if (
				positionData[i].y < startingY &&
				positionData[i].y + positionData[i].height > startingY
			) {
				itemsFromPointDepth[i] = true;

				var diff = startingY - positionData[i].y;
				if (diff > shiftHeightToAdd) {
					shiftHeightToAdd = diff;
				}

				continue;
			}
		}
		if (positionData[i].y >= startingY) {
			itemsFromPointDepth[i] = true;
		}
	}
	return {
		itemsFromPointDepth: itemsFromPointDepth,
		shiftHeightToAdd: shiftHeightToAdd,
	};
};

export const shitftItemsBelow = function(
	shiftHeight,
	positionData,
	indicesToShift
) {
	shiftHeight = shiftHeight + publicConstants.MARGIN;
	var length_0 = positionData.length;
	for (var i = 0; i < length_0; i++) {
		if (indicesToShift.hasOwnProperty(i)) {
			positionData[i].y += shiftHeight;
		}
	}
	return positionData;
};

export const shiftItemsUp = function(y, shiftHeight) {
	var length_0 = positionData.length;
	for (var i = 0; i < length_0; i++) {
		if (positionData[i].y >= y) {
			positionData[i].y -= shiftHeight;
			e.$limberGridViewItems[i].style.transform =
				"translate(" +
				positionData[i].x +
				"px, " +
				positionData[i].y +
				"px)";
		}
	}
};

export const mergePlains = function(A, B, planes = []) {
	var aLines = getLines(A);
	var bLines = getLines(B);
	var oppositeLines = { 0: 2, 1: 3, 2: 0, 3: 1 };

	var intersectionCount = 0;
	var intersectionPointsAtoB = [];
	var linePointsA = [];
	var intersectionPointsBtoA = [];
	var linePointsB = [];
	var distance = null;

	var aLineId = null;
	var bLineId = null;

	var length_0 = aLines.length;
	for (var i = 0; i < length_0; i++) {
		intersectionCount = 0;
		intersectionPointsAtoB = [];
		linePointsA = [];
		intersectionPointsBtoA = [];
		linePointsB = [];
		distance = null;

		var aLine = aLines[i];
		var bLine = bLines[oppositeLines[i]];

		aLineId = i;
		bLineId = oppositeLines[i];

		// slope of line parallel to y axis and x axis is always 0;
		var m1 = 0;
		var m2 = 0;

		// m1 is slope of point p1 and p2
		var p1 = JSON.parse(JSON.stringify(bLine[0]));
		var p2 = JSON.parse(JSON.stringify(bLine[1]));

		var length_1 = aLine.length;
		for (var j = 0; j < length_1; j++) {
			var p3 = JSON.parse(JSON.stringify(aLine[j]));

			if (i == 0 || i == 2) {
				var x = p3[0];
				var y = p1[1];
				var alpha = (p3[0] - p1[0]) / (p2[0] - p1[0]);
				var d = Math.abs(p3[1] - p1[1]);
			} else {
				var x = p1[0];
				var y = p3[1];
				var alpha = (p3[1] - p1[1]) / (p2[1] - p1[1]);
				var d = Math.abs(p3[0] - p1[0]);
			}
			if (alpha < 0 || alpha > 1) {
			} else if (alpha >= 0 && alpha <= 1) {
				intersectionPointsAtoB.push([x, y]);
				linePointsA.push(p3);
				distance = d;
				intersectionCount++;
			} else {
				console.warn("Should not hit this check algo");
			}
		}

		// m1 is slope of point p1 and p2
		var p1 = JSON.parse(JSON.stringify(aLine[0]));
		var p2 = JSON.parse(JSON.stringify(aLine[1]));

		var length_1 = bLine.length;
		for (var k = 0; k < length_1; k++) {
			var p3 = JSON.parse(JSON.stringify(bLine[k]));

			if (i == 0 || i == 2) {
				var x = p3[0];
				var y = p1[1];
				var alpha = (p3[0] - p1[0]) / (p2[0] - p1[0]);
				var d = Math.abs(p3[1] - p1[1]);
			} else {
				var x = p1[0];
				var y = p3[1];
				var alpha = (p3[1] - p1[1]) / (p2[1] - p1[1]);
				var d = Math.abs(p3[0] - p1[0]);
			}
			if (alpha < 0 || alpha > 1) {
			} else if (alpha >= 0 && alpha <= 1) {
				intersectionPointsBtoA.push([x, y]);
				linePointsB.push(p3);
				distance = d;
				intersectionCount++;
			} else {
				console.warn("Should not hit this check algo");
			}
		}

		if (
			intersectionCount == 2 ||
			intersectionCount == 3 ||
			intersectionCount == 4
		) {
			if (intersectionCount == 2) {
				if (
					JSON.stringify(linePointsA) ==
					JSON.stringify(intersectionPointsBtoA)
				) {
					continue;
				}
			}
			break;
		}
	}

	if (intersectionCount <= 0 || intersectionCount >= 5) {
		return false;
	}

	if (aLineId == 0 || aLineId == 2) {
		var aOppLine = JSON.parse(
			JSON.stringify(aLines[oppositeLines[aLineId]])
		);
		var bOppLine = JSON.parse(
			JSON.stringify(bLines[oppositeLines[bLineId]])
		);

		var d = Math.abs(aOppLine[0][1] - bOppLine[0][1]);
		if (d < distance) {
			aLineId = oppositeLines[aLineId];
			bLineId = oppositeLines[bLineId];
			distance = d;

			var changeY = bLines[bLineId][0][1];
			var length_0 = intersectionPointsAtoB.length;
			for (var i = 0; i < length_0; i++) {
				intersectionPointsAtoB[i][1] = changeY;
				linePointsA[i][1] = aOppLine[0][1];
			}
			var changeY = aLines[aLineId][0][1];
			var length_0 = intersectionPointsBtoA.length;
			for (var i = 0; i < length_0; i++) {
				intersectionPointsBtoA[i][1] = changeY;
				linePointsB[i][1] = bOppLine[0][1];
			}
		}
	} else {
		var aOppLine = JSON.parse(
			JSON.stringify(aLines[oppositeLines[aLineId]])
		);
		var bOppLine = JSON.parse(
			JSON.stringify(bLines[oppositeLines[bLineId]])
		);

		var d = Math.abs(aOppLine[0][0] - bOppLine[0][0]);
		if (d < distance) {
			aLineId = oppositeLines[aLineId];
			bLineId = oppositeLines[bLineId];
			distance = d;

			var changeX = bLines[bLineId][0][0];
			var length_0 = intersectionPointsAtoB.length;
			for (var i = 0; i < length_0; i++) {
				intersectionPointsAtoB[i][0] = changeX;
				linePointsA[i][0] = aOppLine[0][0];
			}
			var changeX = aLines[aLineId][0][0];
			var length_0 = intersectionPointsBtoA.length;
			for (var i = 0; i < length_0; i++) {
				intersectionPointsBtoA[i][0] = changeX;
				linePointsB[i][0] = bOppLine[0][0];
			}
		}
	}

	if (distance > publicConstants.MARGIN) {
		var pointsToGetPlain = [];
		var plainToCheckIfFree = null;
		if (intersectionCount == 4) {
			pointsToGetPlain = linePointsA.concat(linePointsB);
			plainToCheckIfFree = getPlainFrom4Points(pointsToGetPlain);
		} else {
			var length_0 = linePointsA.length;
			for (var i = 0; i < length_0; i++) {
				pointsToGetPlain.push(linePointsA[i]);
				pointsToGetPlain.push(intersectionPointsAtoB[i]);
			}

			var length_0 = linePointsB.length;
			for (var i = 0; i < length_0; i++) {
				pointsToGetPlain.push(linePointsB[i]);
				pointsToGetPlain.push(intersectionPointsBtoA[i]);
			}

			if (pointsToGetPlain.length > 4) {
				var duplicateCheck = {};
				var finalPointsToGetPlain = [];
				var length_0 = pointsToGetPlain.length;
				for (var i = 0; i < length_0; i++) {
					var temp = JSON.parse(JSON.stringify(pointsToGetPlain[i]));
					if (duplicateCheck.hasOwnProperty(temp)) {
					} else {
						duplicateCheck[temp] = true;
						finalPointsToGetPlain.push(pointsToGetPlain[i]);
					}
				}
				plainToCheckIfFree = getPlainFrom4Points(finalPointsToGetPlain);
			} else {
				plainToCheckIfFree = getPlainFrom4Points(pointsToGetPlain);
			}
		}

		var plainToCheckIfFree_Lines = getLines(plainToCheckIfFree);

		if (aLineId == 0 || aLineId == 2) {
			if (aLineId == 0) {
				var planeAOnTopOfB = false;
				var plainToCheckIfFree_DividerLine = JSON.parse(
					JSON.stringify(plainToCheckIfFree_Lines[2])
				);
			} else {
				var planeAOnTopOfB = true;
				var plainToCheckIfFree_DividerLine = JSON.parse(
					JSON.stringify(plainToCheckIfFree_Lines[0])
				);
			}
		} else {
			if (aLineId == 3) {
				var planeAOnLeftOfB = false;
				var plainToCheckIfFree_DividerLine = JSON.parse(
					JSON.stringify(plainToCheckIfFree_Lines[1])
				);
			} else {
				var planeAOnLeftOfB = true;
				var plainToCheckIfFree_DividerLine = JSON.parse(
					JSON.stringify(plainToCheckIfFree_Lines[3])
				);
			}
		}

		var freeDistance = -1;
		var indexOfIntersectingPlane = null;
		var length_0 = planes.length;
		for (var i = 0; i < length_0; i++) {
			if (
				isPlaneBInsidePlaneA_TouchingNotInside(
					plainToCheckIfFree,
					planes[i]
				)
			) {
				if (planes[i].hasOwnProperty("doNotMergeFlag")) {
					freeDistance = -1;
					indexOfIntersectingPlane = -1;
					break;
				}
				var planeLine = getLines(planes[i]);
				if (aLineId == 0 || aLineId == 2) {
					if (aLineId == 0) {
						var d = Math.abs(
							plainToCheckIfFree_DividerLine[0][1] -
								(planes[i].y + planes[i].height)
						);
					} else {
						var d = Math.abs(
							plainToCheckIfFree_DividerLine[0][1] - planes[i].y
						);
					}
				} else {
					if (aLineId == 3) {
						var d = Math.abs(
							plainToCheckIfFree_DividerLine[0][0] -
								(planes[i].x + planes[i].width)
						);
					} else {
						var d = Math.abs(
							plainToCheckIfFree_DividerLine[0][0] - planes[i].x
						);
					}
				}
				if (d < freeDistance || freeDistance < 0) {
					freeDistance = d;
					indexOfIntersectingPlane = i;
					// breaking here since the feature is not going to be implemented or needed
					// Only check is done, if some plane is inside the free space to be checked
					break;
					// breaking here since the feature is not going to be implemented or needed
					// Only check is done, if some plane is inside the free space to be checked END
				}
			}
		}

		if (indexOfIntersectingPlane != null) {
			if (freeDistance > publicConstants.MARGIN) {
				// making mergedPlane false since the feature is no longer implemented or needed
				var mergedPlane = false;
				// making mergedPlane false since the feature is no longer implemented or needed END
			} else {
				// no final plain as A and B have other planes betn then which are only the size of margin apart from either A or B
				var mergedPlane = false;
			}
		} else {
			// make final free space from the whole of the free space
			var makeFinalFreeSpace = true;
		}
	} else {
		// make final free space from the whole of the free space
		var makeFinalFreeSpace = true;
	}

	if (makeFinalFreeSpace == true) {
		var mergedPlane = {};
		if (aLineId == 0 || aLineId == 2) {
			var aOppLine = JSON.parse(
				JSON.stringify(aLines[oppositeLines[aLineId]])
			);
			var bOppLine = JSON.parse(
				JSON.stringify(bLines[oppositeLines[bLineId]])
			);

			aLineId = oppositeLines[aLineId];
			bLineId = oppositeLines[bLineId];

			var changeY = bLines[bLineId][0][1];
			var length_0 = intersectionPointsAtoB.length;
			for (var i = 0; i < length_0; i++) {
				intersectionPointsAtoB[i][1] = changeY;
				linePointsA[i][1] = aOppLine[0][1];
			}
			var changeY = aLines[aLineId][0][1];
			var length_0 = intersectionPointsBtoA.length;
			for (var i = 0; i < length_0; i++) {
				intersectionPointsBtoA[i][1] = changeY;
				linePointsB[i][1] = bOppLine[0][1];
			}
		} else {
			var aOppLine = JSON.parse(
				JSON.stringify(aLines[oppositeLines[aLineId]])
			);
			var bOppLine = JSON.parse(
				JSON.stringify(bLines[oppositeLines[bLineId]])
			);

			aLineId = oppositeLines[aLineId];
			bLineId = oppositeLines[bLineId];

			var changeX = bLines[bLineId][0][0];
			var length_0 = intersectionPointsAtoB.length;
			for (var i = 0; i < length_0; i++) {
				intersectionPointsAtoB[i][0] = changeX;
				linePointsA[i][0] = aOppLine[0][0];
			}
			var changeX = aLines[aLineId][0][0];
			var length_0 = intersectionPointsBtoA.length;
			for (var i = 0; i < length_0; i++) {
				intersectionPointsBtoA[i][0] = changeX;
				linePointsB[i][0] = bOppLine[0][0];
			}
		}

		if (intersectionCount == 4) {
			var pointsToGetMergedPlain = linePointsA.concat(linePointsB);
			var mergedPlane = getPlainFrom4Points(pointsToGetMergedPlain);
		} else {
			var pointsToGetMergedPlain = [];
			var length_0 = linePointsA.length;
			for (var i = 0; i < length_0; i++) {
				pointsToGetMergedPlain.push(linePointsA[i]);
				pointsToGetMergedPlain.push(intersectionPointsAtoB[i]);
			}

			var length_0 = linePointsB.length;
			for (var i = 0; i < length_0; i++) {
				pointsToGetMergedPlain.push(linePointsB[i]);
				pointsToGetMergedPlain.push(intersectionPointsBtoA[i]);
			}

			if (pointsToGetMergedPlain.length > 4) {
				var duplicateCheck = {};
				var finalPointsToGetMergedPlain = [];
				var length_0 = pointsToGetMergedPlain.length;
				for (var i = 0; i < length_0; i++) {
					var temp = JSON.parse(
						JSON.stringify(pointsToGetMergedPlain[i])
					);
					if (duplicateCheck.hasOwnProperty(temp)) {
					} else {
						duplicateCheck[temp] = true;
						finalPointsToGetMergedPlain.push(
							pointsToGetMergedPlain[i]
						);
					}
				}
				var mergedPlane = getPlainFrom4Points(
					finalPointsToGetMergedPlain
				);
			} else {
				var mergedPlane = getPlainFrom4Points(pointsToGetMergedPlain);
			}
		}
	}

	if (mergedPlane != false) {
		if (isValidPlane(mergedPlane)) {
			return mergedPlane;
		} else {
			return false;
		}
	} else {
		return false;
	}
};

export const subtractPlanes = function(A, B) {
	// A-B
	// result on "A" area

	var planes = [];
	var result = isPlaneBInsidePlaneA_TouchingIsInside(A, B, "all");

	if (result.engulfed == true) {
		return false;
	}
	if (result.overall == true) {
		if (A.x <= B.x) {
			if (A.x + A.width > B.x) {
				// above statement Should be always true
				if (A.y < B.y) {
					var plane = {
						x: A.x,
						y: A.y,
						width: A.width,
						height: B.y - A.y,
					};
					if (isValidPlane(plane)) {
						planes.push(plane);
					}
					if (A.y + A.height < B.y + B.height) {
						var plane = {
							x: A.x,
							y: B.y,
							width: B.x - A.x,
							height: A.y + A.height - B.y,
						};
						if (isValidPlane(plane)) {
							planes.push(plane);
						}
					} else if (A.y + A.height >= B.y + B.height) {
						var plane = {
							x: A.x,
							y: B.y,
							width: B.x - A.x,
							height: B.height,
						};
						if (isValidPlane(plane)) {
							planes.push(plane);
						}
						if (A.y + A.height > B.y + B.height) {
							var plane = {
								x: A.x,
								y: B.y + B.height,
								width: A.width,
								height: A.y + A.height - (B.y + B.height),
							};
							if (isValidPlane(plane)) {
								planes.push(plane);
							}
						}
					}
				} else if (A.y >= B.y) {
					if (A.y + A.height < B.y + B.height) {
						var plane = {
							x: A.x,
							y: A.y,
							width: B.x - A.x,
							height: A.height,
						};
						if (isValidPlane(plane)) {
							planes.push(plane);
						}
					} else {
						var plane = {
							x: A.x,
							y: A.y,
							width: B.x - A.x,
							height: B.y + B.height - A.y,
						};
						if (isValidPlane(plane)) {
							planes.push(plane);
						}
					}

					if (A.y + A.height > B.y + B.height) {
						var plane = {
							x: A.x,
							y: B.y + B.height,
							width: A.width,
							height: A.y + A.height - (B.y + B.height),
						};
						if (isValidPlane(plane)) {
							planes.push(plane);
						}
					}
				}
			}
			if (A.x + A.width > B.x + B.width) {
				if (A.y < B.y) {
					if (A.y + A.height < B.y + B.height) {
						var plane = {
							x: B.x + B.width,
							y: B.y,
							width: A.x + A.width - (B.x + B.width),
							height: A.y + A.height - B.y,
						};
						if (isValidPlane(plane)) {
							planes.push(plane);
						}
					} else {
						var plane = {
							x: B.x + B.width,
							y: B.y,
							width: A.x + A.width - (B.x + B.width),
							height: B.height,
						};
						if (isValidPlane(plane)) {
							planes.push(plane);
						}
					}
				} else {
					if (A.y + A.height < B.y + B.height) {
						var plane = {
							x: B.x + B.width,
							y: A.y,
							width: A.x + A.width - (B.x + B.width),
							height: A.height,
						};
						if (isValidPlane(plane)) {
							planes.push(plane);
						}
					} else {
						var plane = {
							x: B.x + B.width,
							y: A.y,
							width: A.x + A.width - (B.x + B.width),
							height: B.y + B.height - A.y,
						};
						if (isValidPlane(plane)) {
							planes.push(plane);
						}
					}
				}
			}
		} else {
			// other
			if (A.y < B.y) {
				var plane = {
					x: A.x,
					y: A.y,
					width: A.width,
					height: B.y - A.y,
				};
				if (isValidPlane(plane)) {
					planes.push(plane);
				}
				if (A.y + A.height < B.y + B.height) {
					if (A.x + A.width <= B.x + B.width) {
						// plane inside of the other plane
					} else {
						var plane = {
							x: B.x + B.width,
							y: B.y,
							width: A.x + A.width - (B.x + B.width),
							height: A.y + A.height - B.y,
						};
						if (isValidPlane(plane)) {
							planes.push(plane);
						}
					}
				} else if (A.y + A.height >= B.y + B.height) {
					if (A.x + A.width <= B.x + B.width) {
						// plane inside of the other plane
						if (A.y + A.height > B.y + B.height) {
							var plane = {
								x: A.x,
								y: B.y + B.height,
								width: A.width,
								height: A.y + A.height - (B.y + B.height),
							};
							if (isValidPlane(plane)) {
								planes.push(plane);
							}
						}
					} else {
						var plane = {
							x: B.x + B.width,
							y: B.y,
							width: A.x + A.width - (B.x + B.width),
							height: B.height,
						};
						if (isValidPlane(plane)) {
							planes.push(plane);
						}

						if (A.y + A.height > B.y + B.height) {
							var plane = {
								x: A.x,
								y: B.y + B.height,
								width: A.width,
								height: A.y + A.height - (B.y + B.height),
							};
							if (isValidPlane(plane)) {
								planes.push(plane);
							}
						}
					}
				}
			} else if (A.y >= B.y) {
				if (A.y + A.height < B.y + B.height) {
					if (A.x + A.width < B.x + B.width) {
						// plane inside of the other plane
					} else {
						var plane = {
							x: B.x + B.width,
							y: A.y,
							width: A.x + A.width - (B.x + B.width),
							height: A.height,
						};
						if (isValidPlane(plane)) {
							planes.push(plane);
						}
					}
				} else {
					if (A.x + A.width < B.x + B.width) {
						// plane inside of the other plane
						if (A.y + A.height > B.y + B.height) {
							var plane = {
								x: A.x,
								y: B.y + B.height,
								width: A.width,
								height: A.y + A.height - (B.y + B.height),
							};
							if (isValidPlane(plane)) {
								planes.push(plane);
							}
						}
					} else {
						var plane = {
							x: B.x + B.width,
							y: A.y,
							width: A.x + A.width - (B.x + B.width),
							height: B.y + B.height - A.y,
						};
						if (isValidPlane(plane)) {
							planes.push(plane);
						}
						if (A.y + A.height > B.y + B.height) {
							var plane = {
								x: A.x,
								y: B.y + B.height,
								width: A.width,
								height: A.y + A.height - (B.y + B.height),
							};
							if (isValidPlane(plane)) {
								planes.push(plane);
							}
						}
					}
				}
			}
		}
	} else {
		return false;
	}
	if (planes.length > 0) {
		return planes;
	} else {
		return false;
	}
};
