/** @license LimberGridView

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

import { RTreeIterative } from "rtreejs";
import { ArrayStack as Stack } from "Stack";
import UndoRedo from "undo-redo";

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
import { DESK_INTERACTION_MODE } from "./store/flags/flagDetails";
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
import getUndoRedo from "./store/variables/undoRedo";

// ----------------------------------------------------------------------------------------- //

// ---------------------------------- INPUT DATA FORMAT ------------------------------------ //

// ----------------------------------------------------------------------------------------- //

/*

	const options = {
		el : "#",																																	// id of the parent element with #
		editable : true, 																													// true/false (optional default true)
		enableInteractiveAddAndCut : true,																				// true/false (optional default true)
		enableTouchInteraction : true,																						// true/false (optional default true)
		autoArrange : true,																												// true/false (compulsory if x and y not present else optional)
		reRenderOnResize : true, 																									// true/false (optional default true)
		isMobileCheck: function
		pseudoElementContainer: string or element
		itemMouseDownMoveCheck: function 																					// x clicked/touched, y clicked/touched, item, index
		itemMouseDownResizeCheck: function 																				// x clicked/touched, y clicked/touched, item, index
	
		getArrangeTime: function 																									// returns the total arrange time

		gridData : {
			WIDTH : 1920,																														// width of limberGridView
			HEIGHT : 1080, 																													// height of limberGridView
			MARGIN : 8, 																														// margin for items
			MIN_HEIGHT_AND_WIDTH: 150 																							// min height and width of items
		},
		positionData: [																														// position Data
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
			renderComplete : function(){}, 																					// callback for completion of render function or renderItem, passes index of rendered Item if only was rendered by external program or passes index undefined if it was first render
			renderContent : function(index, width, height, type){},									// callback to get data inside an item, type is "isAdd" on addItem and type is "isResize" on resizeItem. Update slipping "isResize" as it is not likely to be needed
			addComplete : function(index){}
			removeComplete: function(index){}
			moveComplete: function(index, toX, toY, arrangedIndices) {}
			resizeComplete: function(index, width, height, arrangedIndices){}
			renderPlugin: function (renderData, element) {}
			removePlugin: function(element){}

			onItemClickCallback : function(event){},																// click callback for item
		},
		publicConstants: {
			mobileAspectRatio : <value>, 																						// aspect ratio of for mobile devices

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

			shrinkToFit: number
		}
	}
	*/

// ----------------------------------------------------------------------------------------- //

// ---------------------------------- INPUT DATA FORMAT END -------------------------------- //

// ----------------------------------------------------------------------------------------- //

/**
 * @typedef {object} options Parameters to constructor function
 * @property {(string|object)} el id of the container or element object
 * @property {boolean} editable If enabled user can resize, move, cut space, interactivelu add on the desk. Default is true.
 * @property {boolean} enableInteractiveAddAndCut If enabled user can add and cut space on the desk. Default is true.
 * @property {boolean} enableTouchInteraction If enabled user can use touch interaction on items on desk and on the desk. Default is true.
 * @property {boolean} autoArrange If enabled first render is autoarranged. Autoarrange also happens when a faulty data is received during window resize.
 * @property {boolean} reRenderOnResize If enabled rerender on window resize. Passing false is dangerous. Default is true.
 * @property {isMobileCheck} callback A callback that returns a boolean which tells that the screen is or is not a mobile screen
 * @property {(string|object)} pseudoElementContainer The id of the element or the element where the pseudo elements are rendered that appear during moving.
 * @property {itemMouseDownMoveCheck} callback A callback function to tell whether the mouse down event has occured at a desired location on the item for move event.
 * @property {itemMouseDownResizeCheck} callback A callback function to tell whether the mouse down event has occured at a desired location on the item for resize event.
 * @property {object} gridData Warning: Keys here to be set only once during the application development lifecycle. Changes later on are dangerous and will result in unwanted behaviour. Output from function getGridData are scaled as per the dimensions defined here. If custom values are used then they should be passed everytime a new instance is created.
 * @property {object[]} positionData input position data of items to render.
 * @property {object} callbacks An object containing various callbacks.
 * @property {object} publicConstants Constants which you can change or set at any point of time to get the desired behaviour.
 */

/**
 * @callback isMobileCheck
 * @returns {boolean} Returns true if the screen matches media queries for a mobile screen.
 */

/**
 * @callback itemMouseDownMoveCheck
 * @param {Number} x point along the x axis axis where the mouse down happened on the item
 * @param {Number} y point along the y axis axis where the mouse down happened on the item
 * @param {object} positionData object for the item.
 * @param {number} index Index of the item in positionData array.
 * @param {object} target target element where the mouse down happened.
 * @returns {boolean} Returns true if the mouse down happened at a desired location on the item for move event.
 */

/**
 * @callback itemMouseDownResizeCheck
 * @param {Number} x point along the x axis axis where the mouse down happened on the item
 * @param {Number} y point along the y axis axis where the mouse down happened on the item
 * @param {object} positionData object for the item.
 * @param {number} index Index of the item in positionData array.
 * @param {object} target target element where the mouse down happened.
 * @returns {boolean} Returns true if the mouse down happened at a desired location on the item for resize event.
 */

/**
 * @typedef {object} gridData Warning: Keys here to be set only once during the application development lifecycle. Changes later on are dangerous and will result in unwanted behaviour. Output from function getGridData are scaled as per the dimensions defined here. If custom values are used then they should be passed everytime a new instance is created.
 * @property {number} WIDTH Width of the Grid. It is scaled internally as per the device size for visual consistency. Default value is 1920.
 * @property {number} HEIGHT Height of the Grid. It is scaled internally as per the device size for visual consistency. Default value is 1080.
 * @property {number} MARGIN Margin or the items maintained by Arrange Engine. It is scaled internally as per the device size for visual consistency. Default value is 8.
 * @property {number} MIN_HEIGHT_AND_WIDTH Min height and width of the items. It is scaled internally as per the device size for visual consistency. A lower number affects the performance of the arrange algorithm. Default value is 150.
 */

/**
 * @typedef {object[]} positionData Array of Position Data of the items on grid. These are scaled during the runtime. Use getGridData function to get data to store on the database which is scaled accorging to gridData.
 * @property {number} x positon of item along the x axis.
 * @property {number} y positon of item along the y axis.
 * @property {number} width Width of the item.
 * @property {number} height Height of the item.
 */

/**
 * @typedef {object} callbacks Object containing all the callbacks
 * @property {renderComplete} callback Callback function called after rendering of all the items or a single item are complete. This is not called after re-rendering of items whose indices are affected due to removal of any item.
 * @property {renderContent} callback Callback function called to get the contents to attach to the item as children.
 * @property {addComplete} callback Callback function called when addition of an item is complete.
 * @property {removeComplete} callback Callback function called when removing of item is complete.
 * @property {moveComplete} callback Callback function called when moving of item is complete.
 * @property {resizeComplete} callback Callback function called when resizing of item is complete.
 * @property {renderPlugin} callback Callback function called after renderContent and before renderComplete and addComplete but after removeComplete  for items to be rerender after a removeal of an item.
 * @property {removePlugin} callback Callback function called before the item is removed from the DOM. Also before removeComplete.
 */

/**
 * @callback renderComplete Callback function called after rendering of all the items or a single item are complete. This is not called after re-rendering of items whose indices are affected due to removal of any item.
 * @param {(undefined|number)} index Index is the index of the item rendered or undefined if the item was rendered by the constructor or on resize.
 */

/**
 * @callback renderContent Callback function called to get the contents to attach to the item as children. This also called for all the items whose indices are affected due to removal of any item. In such a case it is called after removeComplete.
 * @param {number} index Index of the item.
 * @param {number} width Width of the item.
 * @param {number} height Height of the item.
 * @param {(undefined|string)} type Type is undefined for all occurances except when item is freshly added.
 * @returns {(string|Element|object)} String representing DOM elements. Instance of an Element. Any object.
 */

/**
 * @callback addComplete Callback function called when addition of an item is complete.
 * @param {number} index Index of the item added.
 */

/**
 * @callback removeComplete Callback function called when removing of item is complete.
 * @param {number} index Index of the item removed.
 */

/**
 * @callback moveComplete Callback function called when moving of item is complete.
 * @param {number} index Index of the item moved.
 * @param {number} toX Position along the x axis where the item is moved.
 * @param {number} toY Position along the y axis where the item is moved.
 * @param {number[]} arrangedIndices Indices of the arranged items.
 */

/**
 * @callback resizeComplete Callback function called when resizing of item is complete.
 * @param {number} index Index of the resized item.
 * @param {number} width Width of the item resized.
 * @param {number} height Height of the item resized.
 * @param {number[]} arrangedIndices Indices of the arranged items.
 */

/**
 * @callback renderPlugin Callback function called after renderContent and before renderComplete and addComplete. Also after removeComplete for items whose indices are affected due to removeal of any item. On this callback you can render React JSX.
 * @param {object} renderData Data received from renderContent callback.
 * @param {Element} element Element object of the item that is being rendered.
 */

/**
 * @callback removePlugin Callback function called just before the item is removed from the DOM. Also before removeComplete. This is called so that necessary clean up can be performed by frameworks like react.
 * @param {Element} element Element which is going to be removed.
 */

/**
 * @typedef {object} publicConstants Constants which you can change or set at any point of time to get the desired behaviour.
 * @property {number} mobileAspectRatio A nummber denoting the aspect ratio of each item for mobile view e.g. 5:4. Default value is 5/4.
 * @property {number} moveGuideRadius Radius of the Move guide radius a pseudo element at the top left corner of the item. You can remove move guide for a customized look and feel. Default value is 10.
 * @property {number} resizeSquareGuideLength Length of the square that is rendered at the bottom right corner of the item as a pseudo element. Default value is 10.
 * @property {number} resizeSquareGuideBorderWidth Width of the border of the square that is rendered at the bottom right corner of the item as a pseudo element. Default value is 3.
 * @property {number} autoScrollDistance A number by which the grid or desk is scrolled automatically on height increments for touch mode. Default value is 50.
 * @property {number} autoScrollPoint A height above the bottom at which scroll happens automatically for touch mode. Default value is 50.
 * @property {number} moveOrResizeHeightIncrements A number by which the height of the grid view is increased while resizing, adding or cuttting space when you reach the bottom for touch mode. Default value is 50.
 * @property {number} mouseDownTime Time to wait before initiating move, add or resize routines for mouse interaction. Default value is 500ms.
 * @property {number} touchHoldTime Time to wait before initiating move, add or resize routines for touch mode. Default value is 300ms.
 * @property {number} demoWaitTime TIme to wait before a demo of resize or move is initiated. Waring a very low demo wait time will cause unwanted behaviour as the algorithm needs some time to calculate next positions. Default is 500ms.
 * @property {number} windowResizeTimeTime Time to wait before initiating resize routines. Default value is 1000ms.
 * @property {string} deskInteraction Flag which tells whether the user wants to add an item or cut space by mouse or touch interaction. Default value is ADD.
 * @property {boolean} latchMovedItem To latch or not to latch on to other items when overlapped while dragging to move an item. Default value is true.
 * @property {boolean} animateMovedItem Wether to animate or not to animate the moved item. Default value is false.
 * @property {numer} animateTime Time to wait before re-activating animate to the moved item. Re-activating means the moved item should animate if other items are moved resized later. This flag might have some more features later on. Default value is 250ms.
 */

/**
 * @class
 * @name LimberGridView
 */
function LimberGridView(options) {
	this.initializeStore();
	setOptions(this, options);
	setPositionData(this, options.positionData);
	setCallbacks(this, options.callbacks);

	getUndoRedo(this).push(getPositionData(this));

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
			status: {},
			trees: {
				rt: new RTreeIterative({
					M: 4,
					// splitNode: "linear",
				}),
			},
			stacks: {
				stack: new Stack(),
				garbageStack: new Stack(),
				// resStack: new Stack(),
				// itemsToArrangeStack: new Stack(),
			},
			undoRedo: new UndoRedo(),
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

				MOUSE_DOWN_TIME: 300,
				TOUCH_HOLD_TIME: 300,
				DEMO_WAIT_TIME: 500,
				WINDOW_RESIZE_WAIT_TIME: 1000,

				DESK_INTERACTION_MODE: "CUTSPACE",

				LATCH_MOVED_ITEM: true,

				ANIMATE_MOVED_ITEM: false,
				ANIMATE_TIME: 250,

				// cross hair
				CROSS_HAIR_WIDTH: 500,
				CROSS_HAIR_HEIGHT: 500,

				// Algorithm
				SHRINK_TO_FIT: 10,
			},
			messages: {
				latchedMoveDemo1:
					"Move curser close to an adjacent item over this box to latch next to that item.",
				latchedMoveDemo2: "Move curser over this box to latch on to this item.",
			},
		},
	};
};

/**
 * @method
 * @name LimberGridView#renderItem
 * @description Call this function to forcefully re-render the contents of the item. Internally calls renderContent. Must be called inside resizeComplete
 * @param  {number} index Index of item to force re-render.
 */
LimberGridView.prototype.renderItem = function (index) {
	_renderItem(this, index);
};

/**
 * @method
 * @name LimberGridView#getGridData
 * @description Call this function to get positionData scaled according to gridData.
 * @return {object} Object containing gridData and positionData.
 */
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

/**
 * @method
 * @name LimberGridView#setDeskInteractMode
 * @description Call this function to change DESK_INTERACTION_MODE during runtime.
 * @param {string} flag String "ADD" or "CUTSPACE"
 */
LimberGridView.prototype.setDeskInteractMode = function (flag) {
	if (DESK_INTERACTION_MODE[flag]) {
		setPublicConstantByName(this, "DESK_INTERACTION_MODE", flag);
	}
};

/**
 * @method
 * @name LimberGridView#setLatchMovedItem
 * @description Call this function to change LATCH_MOVED_ITEM during runtime.
 * @param {boolean} flag Boolean true or false. To latch or not to latch.
 */
LimberGridView.prototype.setLatchMovedItem = function (flag) {
	if (typeof flag === "boolean") {
		setPublicConstantByName(this, "LATCH_MOVED_ITEM", flag);
	}
};

/**
 * @method
 * @name LimberGridView#setShrinkToFit
 * @description Call this function to change SHRINK_TO_FIT during runtime.
 * @param {number} Value indicates up to a certain percentage an item can be shrinked. Specify 0 if no shrink is desired.
 */
LimberGridView.prototype.setShrinkToFit = function (value) {
	if (typeof value === "number" && value <= 10) {
		setPublicConstantByName(this, "SHRINK_TO_FIT", value);
	}
};

/**
 * @method
 * @name LimberGridView#addItem
 * @description Call this function to add an item.
 * @param {object} item Object with optional properties width and height.
 */
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

/**
 * @method
 * @name LimberGridView#removeItem
 * @description Call this function to remove an item with the index.
 * @param  {number} index Index of the item to be removed.
 */
LimberGridView.prototype.removeItem = function (index) {
	if (Number.isInteger(index)) {
		_removeItem(this, index);
	}
};

/**
 * @method
 * @name LimberGridView#setIsMobileCheck
 * @description Set isMobileCheck callback function during runtime
 * @param {isMobileCheck} f isMobileCheck callback to check if the screen is a mobile device screen.
 */
LimberGridView.prototype.setIsMobileCheck = function (f) {
	this.options.isMobileCheck = f;
};

/**
 * @method
 * @name LimberGridView#undo
 * @description undo previous move or drag
 */
LimberGridView.prototype.undo = function () {
	const pd = getUndoRedo(this).undo();
	if (pd) {
		setPositionData(this, pd);
		setTimeout(
			async function () {
				await init(this, false, false);
				render(this, false);
			}.bind(this)
		);
	}
};

/**
 * @method
 * @name LimberGridView#redo
 * @description redo move or drag
 */
LimberGridView.prototype.redo = function () {
	const pd = getUndoRedo(this).redo();
	if (pd) {
		setPositionData(this, pd);
		setTimeout(
			async function () {
				await init(this, false, false);
				render(this, false);
			}.bind(this)
		);
	}
};

/**
 * @method
 * @name LimberGridView#isUndoAvailable
 * @description returns true if undo is possible
 */
LimberGridView.prototype.isUndoAvailable = function () {
	return getUndoRedo(this).isUndoAvailable();
};

/**
 * @method
 * @name LimberGridView#isRedoAvailable
 * @description returns true if redo is possible
 */
LimberGridView.prototype.isRedoAvailable = function () {
	return getUndoRedo(this).isRedoAvailable();
};

export default LimberGridView;
