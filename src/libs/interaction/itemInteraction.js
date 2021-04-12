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

import getPrivateConstants from "../../store/constants/privateConstants";
import {
	getResizeAffectedItems,
	getMoveAffectedItems,
	resizeItemInitialChecks,
	moveItemInitialChecks,
	resetDemoUIChanges,
	movePointAdjust,
	resizeSizeAdjust,
	getMoveModifiedItem,
	getResizeModifiedItem,
	positionArranged,
} from "./itemInteractionUtils";
import { arrangeMove } from "../arrange/arrange";
import getPublicConstants from "../../store/constants/publicConstants";
import {
	getPositionData,
	getModifiedPositionData,
	setPositionData,
	setModifiedPositionData,
	getCallbacks,
} from "../../store/variables/essentials";
import getElements from "../../store/variables/elements";
import { setStatus, getStatus } from "../../store/variables/status";
import getMessage from "../../store/constants/messages";
import { isPointInsideRect } from "../rect/rectUtils";
import { renderItem } from "../renderers/renderers";
import getUndoRedo from "../../store/variables/undoRedo";

export const resizeItem = async function (index, x, y, width, height) {
	const pd = getPositionData(this);
	const e = getElements(this);
	const callbacks = getCallbacks(this);
	const publicConstants = getPublicConstants(this);
	const privateConstants = getPrivateConstants(this);

	index = parseInt(index);

	if (publicConstants.LATCH_MOVED_ITEM) {
		const adjustedSize = getStatus(this, "resizeDemo");
		x = adjustedSize?.x || x;
		y = adjustedSize?.y || y;
		height = adjustedSize?.height || height;
		width = adjustedSize?.width || width;
	}

	resizeItemInitialChecks(this, index, x, y, width, height);

	setModifiedPositionData(this, pd);
	const mpd = getModifiedPositionData(this);

	const modifiedItem = getResizeModifiedItem(
		x,
		y,
		width,
		height,
		privateConstants.MARGIN
	);
	mpd[index] = { ...modifiedItem };

	const affectedItems = getResizeAffectedItems(this, modifiedItem, index);

	let arranged, resized;
	({ arranged, resized } = await arrangeMove(this, affectedItems));

	setPositionData(this, mpd);
	getUndoRedo(this).push(mpd);

	e.$limberGridViewItems[index].style.transform = `translate(${x}px, ${x}px)`;
	e.$limberGridViewItems[index].style.width = `${mpd[index].width}px`;
	e.$limberGridViewItems[index].style.height = `${mpd[index].height}px`;

	positionArranged(this, arranged);

	if (callbacks.resizeComplete) {
		callbacks.resizeComplete(index, width, height, Object.keys(arranged));
	}

	renderItem(this, index);
	for (const key in resized) {
		renderItem(this, key);
	}
};

export const resizeItemDemo = async function (
	index,
	x,
	y,
	width,
	height,
	forBottomRight
) {
	const pd = getPositionData(this);
	const e = getElements(this);
	const publicConstants = getPublicConstants(this);
	const privateConstants = getPrivateConstants(this);

	index = parseInt(index);

	let adjustedSize;
	if (publicConstants.LATCH_MOVED_ITEM) {
		adjustedSize = resizeSizeAdjust(
			this,
			x,
			y,
			width,
			height,
			index,
			forBottomRight
		);
		setStatus(this, "resizeDemo", adjustedSize);
		x = adjustedSize.x;
		y = adjustedSize.y;
		height = adjustedSize.height;
		width = adjustedSize.width;
	}

	if (adjustedSize?.isToAdjPresent) {
		// show cross hair
		e.$limberGridViewCrossHairGuide.style.transform = `translate(${
			adjustedSize.latchPoint.x - publicConstants.CROSS_HAIR_WIDTH / 2
		}px, ${
			adjustedSize.latchPoint.y - publicConstants.CROSS_HAIR_HEIGHT / 2
		}px)`;
	} else {
		// hide cross hair
		e.$limberGridViewCrossHairGuide.style.transform = `translate(-${
			publicConstants.CROSS_HAIR_WIDTH * 2
		}px, -${publicConstants.CROSS_HAIR_HEIGHT * 2}px)`;
	}

	resizeItemInitialChecks(this, index, x, y, width, height);

	resetDemoUIChanges(this);

	setModifiedPositionData(this, pd);
	const mpd = getModifiedPositionData(this);

	const modifiedItem = getResizeModifiedItem(
		x,
		y,
		width,
		height,
		privateConstants.MARGIN
	);
	mpd[index] = { ...modifiedItem };

	const affectedItems = getResizeAffectedItems(this, modifiedItem, index);

	let arranged;
	({ arranged } = await arrangeMove(this, affectedItems));

	positionArranged(this, arranged);
};

export const moveItem = async function (index, toX, toY) {
	const pd = getPositionData(this);
	const e = getElements(this);
	const callbacks = getCallbacks(this);
	const publicConstants = getPublicConstants(this);
	const privateConstants = getPrivateConstants(this);

	index = parseInt(index);
	if (publicConstants.LATCH_MOVED_ITEM) {
		// change toX & toY to top left of the overlapping item

		const moveDemo = getStatus(this, "moveDemo");
		if (moveDemo?.latchingAdjacent) {
			toX = moveDemo.adjustedPt.toAdj.toX;
			toY = moveDemo.adjustedPt.toAdj.toY;
		} else if (moveDemo) {
			toX = moveDemo.adjustedPt.to.toX;
			toY = moveDemo.adjustedPt.to.toY;
		} else {
			const adjustedPt = movePointAdjust(this, toX, toY, index);
			toX = adjustedPt.to.toX;
			toY = adjustedPt.to.toY;
		}
	}

	moveItemInitialChecks(this, index, toX, toY);

	setModifiedPositionData(this, pd);
	const mpd = getModifiedPositionData(this);

	const modifiedItem = getMoveModifiedItem(
		toX,
		toY,
		pd[index],
		privateConstants.MARGIN
	);
	mpd[index] = { ...modifiedItem };

	const affectedItems = getMoveAffectedItems(this, modifiedItem, index);

	const { arranged, resized } = await arrangeMove(
		this,
		affectedItems,
		toY,
		toY + pd[index].height
	);

	setPositionData(this, mpd);
	getUndoRedo(this).push(mpd);

	e.$limberGridViewItems[
		index
	].style.transform = `translate(${mpd[index].x}px, ${mpd[index].y}px)`;
	if (!publicConstants.ANIMATE_MOVED_ITEM) {
		// below two statements needs its own flag maybe "ANIMATE_MOVED_ITEM"
		e.$limberGridViewItems[index].style.transition = "none";
		setTimeout(() => {
			e.$limberGridViewItems[index].style.transition = "";
		}, publicConstants.ANIMATE_TIME);
	}

	positionArranged(this, arranged);

	if (callbacks.resizeComplete) {
		callbacks.moveComplete(index, toX, toY, Object.keys(arranged));
	}

	for (const key in resized) {
		renderItem(this, key);
	}
};

export const moveItemDemo = async function (index, toX, toY) {
	const pd = getPositionData(this);
	const e = getElements(this);
	const publicConstants = getPublicConstants(this);
	const privateConstants = getPrivateConstants(this);

	index = parseInt(index);

	//
	if (publicConstants.LATCH_MOVED_ITEM) {
		const adjustedPt = movePointAdjust(this, toX, toY, index);
		let moveDemo = getStatus(this, "moveDemo");
		// let adjustedPt;
		if (
			!isNaN(moveDemo?.adjustedPt?.overlappedItemIndex) &&
			isPointInsideRect(pd[moveDemo.adjustedPt.overlappedItemIndex], {
				x: toX,
				y: toY,
			})
		) {
			moveDemo = {
				...moveDemo,
				adjustedPt,
			};
			let latchingAdjacent = false;

			if (!moveDemo.latchingAdjacent && moveDemo.adjustedPt.isToAdjPresent) {
				toX = moveDemo.adjustedPt.toAdj.toX;
				toY = moveDemo.adjustedPt.toAdj.toY;
				latchingAdjacent = true;
			} else {
				toX = moveDemo.adjustedPt.to.toX;
				toY = moveDemo.adjustedPt.to.toY;
			}

			setStatus(this, "moveDemo", {
				...moveDemo,
				latchingAdjacent,
			});
		} else {
			let latchingAdjacent = false;
			if (
				!isNaN(adjustedPt.overlappedItemIndex) ||
				!adjustedPt.isToAdjPresent
			) {
				toX = adjustedPt.to.toX;
				toY = adjustedPt.to.toY;
			} else {
				toX = adjustedPt.toAdj.toX;
				toY = adjustedPt.toAdj.toY;
				latchingAdjacent = true;
			}

			setStatus(this, "moveDemo", {
				adjustedPt: adjustedPt,
				latchingAdjacent,
			});
		}

		moveDemo = getStatus(this, "moveDemo");

		if (!isNaN(moveDemo?.adjustedPt?.overlappedItemIndex)) {
			e.$limberGridViewMoveGuide.style.transform =
				"translate(" +
				pd[moveDemo.adjustedPt.overlappedItemIndex].x +
				"px, " +
				pd[moveDemo.adjustedPt.overlappedItemIndex].y +
				"px)";
			e.$limberGridViewMoveGuide.style.width =
				pd[moveDemo.adjustedPt.overlappedItemIndex].width + "px";
			e.$limberGridViewMoveGuide.style.height =
				pd[moveDemo.adjustedPt.overlappedItemIndex].height + "px";
			e.$limberGridViewMoveGuide.classList.add(
				"limber-grid-view-move-guide-active"
			);

			if (moveDemo.latchingAdjacent) {
				// show text

				e.$limberGridViewMoveGuide.innerHTML = getMessage(
					this,
					"latchedMoveDemo2"
				);
			} else {
				// show text
				e.$limberGridViewMoveGuide.innerHTML = getMessage(
					this,
					"latchedMoveDemo1"
				);
			}
		}

		if (moveDemo.latchingAdjacent) {
			// show cross hair
			e.$limberGridViewCrossHairGuide.style.transform = `translate(${
				toX - publicConstants.CROSS_HAIR_WIDTH / 2
			}px, ${toY - publicConstants.CROSS_HAIR_HEIGHT / 2}px)`;
		} else {
			// hide cross hair
			e.$limberGridViewCrossHairGuide.style.transform = `translate(-${
				publicConstants.CROSS_HAIR_WIDTH * 2
			}px, -${publicConstants.CROSS_HAIR_HEIGHT * 2}px)`;
		}
	}
	//

	moveItemInitialChecks(this, index, toX, toY);

	resetDemoUIChanges(this);

	setModifiedPositionData(this, pd);
	const mpd = getModifiedPositionData(this);

	const modifiedItem = getMoveModifiedItem(
		toX,
		toY,
		pd[index],
		privateConstants.MARGIN
	);
	mpd[index] = { ...modifiedItem };

	const affectedItems = getMoveAffectedItems(this, modifiedItem, index);

	const { arranged } = await arrangeMove(
		this,
		affectedItems,
		toY,
		toY + pd[index].height,
		true
	);

	positionArranged(this, arranged);
};
