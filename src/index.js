/** @license LimberGridView

LimberGridView, a powerful JavaScript Libary that gives you movable, resizable(any size) and auto-arranging grids.

Copyright © 2018-2020, Subendra Kumar Sharma. All Rights reserved. (jobs.sharma.subendra.kr@gmail.com)

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

import "./index.css";
import "./index.scss";

import {
	onItemMouseDown,
	onItemTouchStart,
	onItemMouseMove,
	onItemTouchMove,
	onItemMouseUp,
	onItemTouchEnd,
	onItemContextMenu,
	onItemTouchContextMenu,
	onItemTouchCancel,
} from "./libs/eventHandlerLib/itemInteraction";
import {
	onDeskMouseDown,
	onDeskTouchStart,
	onDeskMouseMove,
	onDeskTouchMove,
	onDeskMouseUp,
	onDeskTouchEnd,
	onDeskContextMenu,
	onDeskTouchContextMenu,
	onDeskTouchCancel,
} from "./libs/eventHandlerLib/deskInteraction";
import {
	onWindowResize,
	onWindowResizeTimerCallback,
} from "./libs/eventHandlerLib/miscellaneous";

import { fixTo } from "./libs/utils/utils";
import { setPublicConstantByName } from "./store/constants/publicConstants";
import { getPrivateConstants } from "./store/constants/privateConstants";
import { setOptions } from "./store/variables/options";

import {
	setPositionData,
	getPositionData,
	setCallbacks,
} from "./store/variables/essentials";
import { set$el } from "./store/variables/elements";
import {
	DESK_INTERACTION_MODE,
	LATCH_MOVED_ITEM,
} from "./store/flags/flagDetails";
import { getBindedFunctions } from "./store/variables/bindedFunctions";

import {
	render,
	renderItem as _renderItem,
	addItem as _addItem,
	removeItem as _removeItem,
} from "./libs/renderers/renderers";
import {
	init,
	initConstantsAndFlags,
	initRender,
} from "./initializers/initializers";

LimberGridView.prototype.constructor = LimberGridView;

// ----------------------------------------------------------------------------------------- //

// ---------------------------------- INPUT DATA FORMAT ------------------------------------ //

// ----------------------------------------------------------------------------------------- //

/*

	var options = {
		el : "#",																				// id of the parent element with #
		editable : true, 																		// true/false (optional default true)
		enableInteractiveAddAndCut : true,														// true/false (optional default true)
		enableTouchInteraction : true,															// true/false (optional default true)
		autoArrange : true,																		// true/false (compulsory if x and y not present else optional)
		reRenderOnResize : true, 																// true/false (optional default true)
		isMobileCheck: function
		pseudoElementContainer: string or element
		itemMouseDownMoveCheck: function 														// x clicked/touched, y clicked/touched, item, index
		itemMouseDownResizeCheck: function 														// x clicked/touched, y clicked/touched, item, index

		gridData : {
			WIDTH : 1920,																	// width of limberGridView
			HEIGHT : 1080, 																	// height of limberGridView
			MARGIN : 8, 																		// margin for items
			MIN_HEIGHT_AND_WIDTH: 150 															// min height and width of items
		},
		positionData: [																			// position Data
			{x : <value>, y : <value>, width : <value>, height : <value>},
			{x : <value>, y : <value>, width : <value>, height : <value>},

					OR (if autoArrange set to true)

				{width : <value>, height : <value>},
				{width : <value>, height : <value>},
				...,
				...,
				...
		],
		callbacks : {
			renderComplete : function(){}, 														// callback for completion of render function or renderItem, passes index of rendered Item if only was rendered by external program or passes index undefined if it was first render
			renderContent : function(index, width, height, type){},									// callback to get data inside an item, type is "isAdd" on addItem and type is "isResize" on resizeItem. Update slipping "isResize" as it is not likely to be needed
			addComplete : function(index){}
			removeComplete: function(index){}
			moveComplete: function(index, toX, toY, arrangedIndices) {}
			resizeComplete: function(index, width, height, arrangedIndices){}
			renderPlugin: function (renderData, element) {}
			removePlugin: function(element){}

			onItemClickCallback : function(event){},											// click callback for item
		},
		publicConstants: {
			mobileAspectRatio : <value>, 															// aspect ratio of for mobile devices

			moveGuideRadius: number,
			resizeSquareGuideLength: number
			resizeSquareGuideBorderWidth: number
			autoScrollDistance: number
			autoScrollPoint: number
			moveOrResizeHeightIncrements: number

			mouseDownTime: number
			touchHoldTime: number
			demoWaitTime: number
			windowResizeWaitTime: number

			deskInteractionMode: "ADD"/"CUTSPACE"

			latchMovedItem: boolean
			animateMovedItem: boolean
			animateTime: number
		}
	}
	*/

// ----------------------------------------------------------------------------------------- //

// ---------------------------------- INPUT DATA FORMAT END -------------------------------- //

// ----------------------------------------------------------------------------------------- //

function LimberGridView(options) {
	this.initializeStore();
	setOptions(this, options);
	setPositionData(this, options.positionData);
	setCallbacks(this, options.callbacks);

	if (typeof options.el === "string") {
		const el = document.getElementById(options.el);
		if (!el) {
			throw `No for element found for id ${options.el}`;
		}
		set$el(this, el);
	} else if (options.el instanceof Element) {
		set$el(this, options.el);
	} else {
		throw "Valid DOM Element or Id required";
	}

	initConstantsAndFlags.call(this, options);
	initRender.call(this);

	if (this.options.reRenderOnResize === true) {
		window.addEventListener("resize", getBindedFunctions(this).onWindowResize);
	}

	setTimeout(
		async function () {
			await init(this, false, options.autoArrange);
			render(this, true);
		}.bind(this)
	);
}

LimberGridView.prototype.initializeStore = function () {
	this.options = {
		editable: true,
		reRenderOnResize: true,
		enableInteractiveAddAndCut: true,
		enableTouchInteraction: true,
	};
	this.store = {
		variables: {
			elements: {
				$body: undefined,
				$pseudoContainer: undefined,
				$pseudoContainerItem: undefined,
				$el: undefined,
				$limberGridViewContainer: undefined,
				$limberGridView: undefined,
				$limberGridViewItems: [],
				$limberGridViewPseudoItem: undefined,
				$limberGridViewMoveGuide: undefined,
				$limberGridViewHeightAdjustGuide: undefined,
				$limberGridViewAddCutGuide: undefined,
				$limberGridViewTouchHoldGuide: undefined,
				//  DEBUG elements:
				$limberGridViewDebugMergedTempRects: [],
				$limberGridViewDebugStackTopRect: undefined,
				$limberGridViewDebugStackTopAdjRect: undefined,
				$limberGridViewDebugMergedRect: undefined,
				$limberGridViewDebugAdjRect: undefined,
				$limberGridViewDebugResultStackRects: [],
				$limberGridViewDebugStackRects: [],
				$limberGridViewDebugUnmergedRects: [],
				$limberGridViewDebugMergedFreeRects: [],
			},
			essentials: {
				pseudoContainerId: undefined,
				positionData: [],
				modifiedPositionData: [],
				gridData: {},
				callbacks: {},
			},
			bindedFunctions: {
				onItemMouseDown: onItemMouseDown.bind(this),
				onItemTouchStart: onItemTouchStart.bind(this),
				onItemMouseMove: onItemMouseMove.bind(this),
				onItemTouchMove: onItemTouchMove.bind(this),
				onItemMouseUp: onItemMouseUp.bind(this),
				onItemTouchEnd: onItemTouchEnd.bind(this),
				onItemContextMenu: onItemContextMenu.bind(this),
				onItemTouchContextMenu: onItemTouchContextMenu.bind(this),
				onItemTouchCancel: onItemTouchCancel.bind(this),
				// Desk
				onDeskMouseDown: onDeskMouseDown.bind(this),
				onDeskTouchStart: onDeskTouchStart.bind(this),
				onDeskMouseMove: onDeskMouseMove.bind(this),
				onDeskTouchMove: onDeskTouchMove.bind(this),
				onDeskMouseUp: onDeskMouseUp.bind(this),
				onDeskTouchEnd: onDeskTouchEnd.bind(this),
				onDeskTouchCancel: onDeskTouchCancel.bind(this),
				onDeskTouchContextMenu: onDeskTouchContextMenu.bind(this),
				onDeskContextMenu: onDeskContextMenu.bind(this),

				//
				onWindowResize: onWindowResize.bind(this),
				onWindowResizeTimerCallback: onWindowResizeTimerCallback.bind(this),
			},
			eventSpecific: {
				itemInteraction: {
					userActionData: {},
					mouseDownCancel: false,
					mouseDownTimerComplete: true,
					touchHoldCancel: false,
					touchHoldTimerComplete: false,
					longPressCheck: undefined,
					longTouchCheck: undefined,
					showResizeDemoTimeOutVariable: undefined,
					showMoveDemoTimeOutVariable: undefined,
				},
				deskInteraction: {
					userActionData: {},
					mouseDownCancel: false,
					mouseDownTimerComplete: false,
					tapHoldCancel: false,
					tapHoldTimerComplete: false,
					longPressCheck: undefined,
					longTouchCheck: undefined,
					addItemAllowCheckTimeOutVariable: undefined,
					cutSpaceAllowCheckTimeOutVariable: undefined,
				},
			},
		},
		constants: {
			privateConstants: {
				// reinitialized in init i.e. first render and window resize BEGIN
				WIDTH: 0,
				HEIGHT: 0,

				PADDING_LEFT: 0,
				PADDING_RIGHT: 0,
				PADDING_TOP: 0,
				PADDING_BOTTOM: 0,

				WIDTH_SCALE_FACTOR: 1,

				MARGIN: 8,
				DEFINED_MIN_HEIGHT_AND_WIDTH: 150,
				// reinitialized in init i.e. first render and window resize ENDED

				// These should be decided and set only once for app development, if custom values are used then it should be passed everytime
				GRID_WIDTH: 1920,
				GRID_HEIGHT: 1080,
				GRID_MARGIN: 8,
				MIN_HEIGHT_AND_WIDTH: 150,
			},
			publicConstants: {
				MOBILE_ASPECT_RATIO: 5 / 4,

				MOVE_GUIDE_RADIUS: 10,
				RESIZE_SQUARE_GUIDE_LENGTH: 10,
				RESIZE_SQUARE_GUIDE_BORDER_WIDTH: 3,
				AUTO_SCROLL_DISTANCE: 50,
				AUTO_SCROLL_POINT: 50,
				MOVE_OR_RESIZE_HEIGHT_INCREMENTS: 50,

				MOUSE_DOWN_TIME: 500,
				TOUCH_HOLD_TIME: 300,
				DEMO_WAIT_TIME: 500,
				WINDOW_RESIZE_WAIT_TIME: 1000,

				DESK_INTERACTION_MODE: "ADD",

				LATCH_MOVED_ITEM: true,

				ANIMATE_MOVED_ITEM: false,
				ANIMATE_TIME: 250,
			},
		},
	};
};

LimberGridView.prototype.renderItem = function (index) {
	_renderItem(this, index);
};

LimberGridView.prototype.getGridData = function () {
	const privateConstants = getPrivateConstants(this);
	const pd = getPositionData(this);

	const len = pd.length;
	const arr = new Array(len);
	for (let i = 0; i < len; i++) {
		arr[i] = {
			x: fixTo(pd[i].x / privateConstants.WIDTH_SCALE_FACTOR),
			y: fixTo(pd[i].y / privateConstants.WIDTH_SCALE_FACTOR),
			width: fixTo(pd[i].width / privateConstants.WIDTH_SCALE_FACTOR),
			height: fixTo(pd[i].height / privateConstants.WIDTH_SCALE_FACTOR),
		};
	}

	return {
		gridData: {
			height: privateConstants.GRID_HEIGHT,
			width: privateConstants.GRID_WIDTH,
			margin: privateConstants.GRID_MARGIN,
			MIN_HEIGHT_AND_WIDTH: privateConstants.MIN_HEIGHT_AND_WIDTH,
		},
		positionData: arr,
	};
};

LimberGridView.prototype.setDeskInteractMode = function (flag) {
	if (DESK_INTERACTION_MODE[flag]) {
		setPublicConstantByName(this, "DESK_INTERACTION_MODE", flag);
	}
};

LimberGridView.prototype.setLatchMovedItem = function (flag) {
	if (LATCH_MOVED_ITEM[flag]) {
		setPublicConstantByName(this, "LATCH_MOVED_ITEM", flag);
	}
};

LimberGridView.prototype.addItem = function (item) {
	if (!item) {
		const privateConstants = getPrivateConstants(this);
		item = {
			width: privateConstants.DEFINED_MIN_HEIGHT_AND_WIDTH,
			height: privateConstants.DEFINED_MIN_HEIGHT_AND_WIDTH,
		};
	}

	_addItem(this, item);
};

LimberGridView.prototype.removeItem = function (index) {
	if (Number.isInteger(index)) {
		_removeItem(this, index);
	}
};

LimberGridView.prototype.setIsMobileCheck = function (f) {
	this.options.isMobileCheck = f;
};

export default LimberGridView;
