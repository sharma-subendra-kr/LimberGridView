/*

This is a release of LimberGridView 0.0.0, brought to you by Subendra Kumar Sharma.
This software is released under the GNU General Public License version 3, or (at your option) any later version.

LimberGridView, a powerful JavaScript Libary that gives you flexible, movable, resizable(any size) and auto-arranging grids. 

Copyright © 2018-2020, Subendra Kumar Sharma. All Rights reserved. (sharma.subendra.kr@gmail.com, sharma.subendrakr@yahoo.com)

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

// import {
// 	findFreeSpaces,
// 	mergeFreeSpaces,
// 	findAffectedItemsOnMove,
// 	findAffectedItemsOnResize,
// 	fitItemsIntoFreeSpaces,
// 	findMatchingSpace,
// 	fitRemainingItems,
// 	fitRemainingItemsAboveDeepestLine,
// 	fitRemainingItemsBelowDeepestLine,
// 	getItemsFromPointDepth,
// 	shitftItemsBelow,
// 	mergePlains,
// 	subtractPlanes,
// } from "./calcUtils";
import {
	getResizeAffectedItems,
	getMoveAffectedItems,
	resizeItemInitialChecks,
	moveItemInitialChecks,
	resetDemoUIChanges,
	movePointAdjust,
} from "./itemInteractionUtils";
import { arrangeMove, arrangeResize } from "../arrange/arrange";
import getPrivateConstants from "../../store/constants/privateConstants";
import getPublicConstants from "../../store/constants/publicConstants";
import {
	getPositionData,
	getModifiedPositionData,
	setPositionData,
	setModifiedPositionData,
} from "../../store/variables/essentials";
import getElements from "../../store/variables/elements";

// import { renderItems } from "../renderers/renderers";

export const resizeItem = async function (index, width, height) {
	const pd = getPositionData(this);
	const e = getElements(this);

	index = parseInt(index);
	resizeItemInitialChecks(this, index, width, height);

	resetDemoUIChanges(this);

	setModifiedPositionData(this, pd);
	const mpd = getModifiedPositionData(this);
	mpd[index].width = width;
	mpd[index].height = height;

	const modifiedItem = {
		x: pd[index].x,
		y: pd[index].y,
		width: width,
		height: height,
	};
	const affectedItems = getResizeAffectedItems(this, modifiedItem, index);

	const arranged = await arrangeResize(
		this,
		affectedItems,
		modifiedItem.y + modifiedItem.height,
		modifiedItem.x + modifiedItem.width
	);

	setPositionData(this, mpd);

	e.$limberGridViewItems[index].style.width = mpd[index].width;
	e.$limberGridViewItems[index].style.height = mpd[index].height;

	const arrangedArr = Object.keys(arranged);
	const len = arrangedArr.length;
	for (let i = 0; i < len; i++) {
		const key = arrangedArr[i];
		const item = arranged[key];
		e.$limberGridViewItems[
			key
		].style.transform = `translate(${item.x}px, ${item.y}px)`;
	}
};

export const resizeItemDemo = async function (index, width, height) {
	const pd = getPositionData(this);
	const e = getElements(this);

	index = parseInt(index);
	resizeItemInitialChecks(this, index, width, height);

	resetDemoUIChanges(this);

	setModifiedPositionData(this, pd);
	const mpd = getModifiedPositionData(this);
	mpd[index].width = width;
	mpd[index].height = height;

	const modifiedItem = {
		x: pd[index].x,
		y: pd[index].y,
		width: width,
		height: height,
	};
	const affectedItems = getResizeAffectedItems(this, modifiedItem, index);

	const arranged = await arrangeResize(
		this,
		affectedItems,
		modifiedItem.y + modifiedItem.height,
		modifiedItem.x + modifiedItem.width,
		true
	);

	const arrangedArr = Object.keys(arranged);
	const len = arrangedArr.length;
	for (let i = 0; i < len; i++) {
		const key = arrangedArr[i];
		const item = arranged[key];
		e.$limberGridViewItems[
			key
		].style.transform = `translate(${item.x}px, ${item.y}px)`;
	}
};

export const moveItem = async function (index, toX, toY) {
	const pd = getPositionData(this);
	const e = getElements(this);

	index = parseInt(index);
	let adjustedPt = {};
	if (true) {
		// change toX & toY to top left of the overlapping item
		// provide a flag for developers to switch it on or off any time from UI by the user
		// maybe "LATCH_MOVED_ITEM"
		const adjustedPt = movePointAdjust(this, toX, toY);
		toX = adjustedPt.toX;
		toY = adjustedPt.toY;
	}

	moveItemInitialChecks(this, index, toX, toY);

	resetDemoUIChanges(this);

	setModifiedPositionData(this, pd);
	const mpd = getModifiedPositionData(this);
	mpd[index].x = toX;
	mpd[index].y = toY;

	const modifiedItem = {
		x: toX,
		y: toY,
		width: pd[index].width,
		height: pd[index].height,
	};
	const affectedItems = getMoveAffectedItems(this, modifiedItem, index);

	const arranged = await arrangeMove(
		this,
		affectedItems,
		toY,
		toY + pd[index].height
	);

	setPositionData(this, mpd);

	e.$limberGridViewItems[index].classList.remove("limberGridViewItemDemo");
	e.$limberGridViewItems[
		index
	].style.transform = `translate(${mpd[index].x}px, ${mpd[index].y}px)`;
	if (true) {
		// below two statements needs its own flag maybe "ANIMATE_MOVED_ITEM"
		e.$limberGridViewItems[index].style.transition = "none";
		setTimeout(() => {
			e.$limberGridViewItems[index].style.transition = "";
		}, 500);
	}

	const arrangedArr = Object.keys(arranged);
	const len = arrangedArr.length;
	for (let i = 0; i < len; i++) {
		const key = arrangedArr[i];
		const item = arranged[key];
		e.$limberGridViewItems[
			key
		].style.transform = `translate(${item.x}px, ${item.y}px)`;
	}
};

export const moveItemDemo = async function (index, toX, toY) {
	const pd = getPositionData(this);
	const e = getElements(this);

	index = parseInt(index);
	let adjustedPt = {};
	if (true) {
		debugger;
		// change toX & toY to top left of the overlapping item
		// provide a flag for developers to switch it on or off any time from UI by the user
		adjustedPt = movePointAdjust(this, toX, toY);
		toX = adjustedPt.toX;
		toY = adjustedPt.toY;
		console.log("adjustedPt", adjustedPt);

		if (!isNaN(adjustedPt.overlappedItemIndex)) {
			e.$limberGridViewMoveGuide.style.transform =
				"translate(" + toX + "px, " + toY + "px)";
			e.$limberGridViewMoveGuide.classList.add(
				"limber-grid-view-move-guide-active"
			);
		}
	}

	moveItemInitialChecks(this, index, toX, toY);

	resetDemoUIChanges(this);

	setModifiedPositionData(this, pd);
	const mpd = getModifiedPositionData(this);
	mpd[index].x = toX;
	mpd[index].y = toY;

	const modifiedItem = {
		x: toX,
		y: toY,
		width: pd[index].width,
		height: pd[index].height,
	};
	const affectedItems = getMoveAffectedItems(this, modifiedItem, index);

	const arranged = await arrangeMove(
		this,
		affectedItems,
		toY,
		toY + pd[index].height,
		true
	);

	e.$limberGridViewItems[index].classList.add("limberGridViewItemDemo");

	const arrangedArr = Object.keys(arranged);
	const len = arrangedArr.length;
	for (let i = 0; i < len; i++) {
		const key = arrangedArr[i];
		const item = arranged[key];
		e.$limberGridViewItems[
			key
		].style.transform = `translate(${item.x}px, ${item.y}px)`;
	}
};
