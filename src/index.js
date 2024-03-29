/** @license LimberGridView

LimberGridView, a powerful JavaScript Library using Computational Geometry to render movable, dynamically resizable, and auto-arranging grids.

Copyright © 2018-2022 Subendra Kumar Sharma. All rights reserved. (jobs.sharma.subendra.kr@gmail.com)

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

import { RTreeIterative } from "@sharma-subendra-kr/rtreejs";
import { ArrayStack as Stack } from "@sharma-subendra-kr/stack";
import UndoRedo from "@sharma-subendra-kr/undo-redo";

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
import { unInitializeEvents } from "./libs/eventHandlerLib/initializers";
import {
	instantiateResizeObserver,
	resizeObserverCallback,
	onItemClick,
} from "./libs/eventHandlerLib/miscellaneous";
import {
	instantiateIntersectionObserver,
	intersectionObserverCallback,
	onScroll,
	onScrollCallback,
} from "./libs/eventHandlerLib/intersectionObserver";

import {
	setPublicConstantByName,
	getPublicConstantByName,
} from "./store/constants/publicConstants";
import {
	getPrivateConstants,
	setMargin,
} from "./store/constants/privateConstants";
import { setOptions } from "./store/variables/options";
import {
	setPositionData,
	getPositionData,
	setCallbacks,
} from "./store/variables/essentials";
import getElements, {
	set$el,
	get$pseudoContainer,
	get$limberGridViewContainer,
} from "./store/variables/elements";
import getUndoRedo from "./store/variables/undoRedo";
import { getBindedFunctions } from "./store/variables/bindedFunctions";
import { DESK_INTERACTION_MODE } from "./store/flags/flagDetails";

import {
	init,
	initConstantsAndFlags,
	initRender,
} from "./initializers/initializers";
import {
	render,
	renderItem as _renderItem,
	addItem as _addItem,
	removeItem as _removeItem,
} from "./libs/renderers/renderers";
import { resetDemoUIChanges } from "./libs/interaction/itemInteractionUtils";
import {
	decreaseMargin as _decreaseMargin,
	increaseMargin as _increaseMargin,
} from "./libs/actions/marginChange/marginChange";
import {
	getItemsToRerenderOnUndoRedo,
	getRenderedItemsMap,
} from "./libs/utils/items";
import { fixTo } from "./libs/utils/utils";

// ----------------------------------------------------------------------------------------- //

// ---------------------------------- INPUT DATA FORMAT ------------------------------------ //

// ----------------------------------------------------------------------------------------- //

/*

  const options = {
    el : "#",                                                                  // id of the parent element with #
    editable : true,                                                           // true/false (optional default true)
    enableInteractiveAddAndCut : true,                                         // true/false (optional default true)
    enableTouchInteraction : true,                                             // true/false (optional default true)
    autoArrange : true,                                                        // true/false (compulsory if x and y not present else optional)
    reRenderOnResize : true,                                                   // true/false (optional default true)
    isMobileCheck: function
    pseudoElementContainer: string or element
    itemMouseDownMoveCheck: function                                           // x clicked/touched, y clicked/touched, item, index, event.target, which
    itemMouseDownResizeCheck: function                                         // x clicked/touched, y clicked/touched, item, index, event.target, which

    gridData : {
      WIDTH : 1920,                                                            // width of limberGridView
      HEIGHT : 1080,                                                           // height of limberGridView
      MARGIN : 8,                                                             // margin for items
      MIN_HEIGHT_AND_WIDTH: 150                                               // min height and width of items
    },
    positionData: [                                                            // position Data
      {x : <value>, y : <value>, width : <value>, height : <value>},
      {x : <value>, y : <value>, width : <value>, height : <value>},

      OR (if autoArrange set to true)

      {width : <value>, height : <value>},
      {width : <value>, height : <value>},
      ...,
      ...,
      ...
    ],
    margin: number,
    callbacks : {
      renderComplete : function(){},                                           // callback for completion of render function or renderItem, passes index of rendered Item if only was rendered by external program or passes index undefined if it was first render
      renderContent : function(index, width, height, type){},                  // callback to get data inside an item, type is "isAdd" on addItem and type is "isResize" on resizeItem. Update slipping "isResize" as it is not likely to be needed
      addComplete : function(index){}
      removeComplete: function(index){}
      moveComplete: function(index, toX, toY, arrangedIndices) {}
      resizeComplete: function(index, width, height, arrangedIndices){}
      cutSpaceComplete: function() {}
      renderPlugin: function (renderData, element) {}
      removePlugin: function(element){}

      onItemClickCallback : function(event){},                                 // click callback for item
      getLogMessage: function(log){},                                          // get log message for error, info, and warnings
      getArrangeTime: function() {}
      offsetMovePseudoElement: function() {}
      getDebugLog: function(log){},
    },
    publicConstants: {
      mobileAspectRatio : <value>,                                             // aspect ratio of for mobile devices

      moveGuideRadius: number,
      resizeSquareGuideLength: number
      resizeSquareGuideBorderWidth: number
      showBottomLeftResizeGuide: boolean
      autoScrollDistance: number
      autoScrollPoint: number
      moveOrResizeHeightIncrements: number
      autoScrollForMouse: boolean

      mouseDownTime: number
      touchHoldTime: number
      touchHoldTolerance: number
      demoWaitTime: number
      windowResizeWaitTime: number
      autoScrollDelay: number

      deskInteractionMode: "ADD"/"CUTSPACE"

      latchMovedItem: boolean
      animateMovedItem: boolean
      animateTime: number

      marginChangeValue: number
      crossHairWidth: number
      crossHairHeight: number

      shrinkToFit: number

      emitDebugLogs: false                                                         // true/false (optional default false)
    },
  }
  */

// ----------------------------------------------------------------------------------------- //

// ---------------------------------- INPUT DATA FORMAT END -------------------------------- //

// ----------------------------------------------------------------------------------------- //

/**
 * @typedef {object} options Parameters to the constructor.
 * @property {(string|object)} el Id of the container or element.
 * @property {boolean} editable If enabled, users can resize, move, cut space, interactively add items on the desk. Default is true.
 * @property {boolean} enableInteractiveAddAndCut If enabled, users can add and cut space on the desk. Default is true.
 * @property {boolean} enableTouchInteraction If enabled, users can use touch to interact with items on the desk and with the desk also. Default is true.
 * @property {boolean} autoArrange If enabled, the first render is auto arranged. Auto arrange also happens when invalid data is received.
 * @property {boolean} reRenderOnResize If enabled, re-renders on window resize. Passing false is dangerous. Default is true.
 * @property {options~isMobileCheck} isMobileCheck Callback that returns true when the screen size is of a mobile device. It receives boundingClientRect of LimberGridView as an argument.
 * @property {(string|object)} pseudoElementContainer The id of the element or the element where the pseudo-elements are rendered that appear during moving.
 * @property {options~itemMouseDownMoveCheck} itemMouseDownMoveCheck Callback function to check whether the mouse down event occurred at a desired area on the item for move event.
 * @property {options~itemMouseDownResizeCheck} itemMouseDownResizeCheck Callback function to check whether the mouse down event occurred at a desired area on the item for resize event.
 * @property {gridData} gridData Actual grid height and width. Output from function getGridData is scaled as per the dimensions defined here. Warning: Keys here to be set only once during the application development lifecycle. Changes, later on, are dangerous and will result in unwanted behavior. There is no actual need to change this. Custom values, if used, must be passed every time for instantiation.
 * @property {positionData} positionData An array of Position data of items. It can be in two-point form i.e. top-left and bottom-right coordinate ({x1: 100, y1: 100, x2: 300, y2: 300}) or in dimension form with height and width ({x: 100, y: 100, width: 200, height: 200}). Position data are scaled during the runtime according to the screen size. Use the function getGridData to get position data to store for persistence which is scaled according to gridData.
 * @property {callbacks} callbacks An object containing various callbacks.
 * @property {publicConstants} publicConstants Constants that you can change or set at any point in time to get the desired behavior.
 */

/**
 * Callback that returns true when the screen size is of a mobile device. It receives boundingClientRect of LimberGridView as an argument.
 * @callback options~isMobileCheck
 * @param {object} boundingClientRect boundingClientRect of LimberGridView.
 * @returns {boolean} Returns true when the screen size is of a mobile device.
 */

/**
 * Callback function to check whether the mouse down event occurred at a desired area on the item for move event.
 * @callback options~itemMouseDownMoveCheck
 * @param {Number} x The distance along the x-axis of the item, the mouse-down event was triggered.
 * @param {Number} y The distance along the y-axis of the item, the mouse-down event was triggered.
 * @param {object} positionData Position data of the item.
 * @param {number} index Index of the item in the position data array.
 * @param {object} target Target element where mouse down event was triggered.
 * @returns {boolean} Returns true if the mouse down event got triggered at the desired area on the item for move event.
 */

/**
 * Callback function to check whether the mouse down event occurred at a desired area on the item for resize event.
 * @callback options~itemMouseDownResizeCheck
 * @param {Number} x The distance along the x-axis of the item, the mouse-down event was triggered.
 * @param {Number} y The distance along the y-axis of the item, the mouse-down event was triggered.
 * @param {object} positionData Position data of the item.
 * @param {number} index Index of the item in positionData array.
 * @param {object} target Target element where mouse down event was triggered.
 * @returns {boolean} Returns true if the mouse down event got triggered at the desired area on the item for resize event.
 */

/**
 * @typedef {options~gridData} gridData Actual grid height and width. Output from function getGridData is scaled as per the dimensions defined here. Warning: Keys here to be set only once during the application development lifecycle. Changes, later on, are dangerous and will result in unwanted behavior. There is no actual need to change this. Custom values, if used, must be passed every time for instantiation.
 * @property {number} WIDTH Width of the Grid. It is scaled internally as per the device screen size for visual consistency. The default value is 1920.
 * @property {number} Height of the Grid. It is scaled internally as per the device screen size for visual consistency. The default value is 1080.
 * @property {number} MARGIN The margin for the items. It is scaled internally as per the device screen size for visual consistency. The default value is 8.
 * @property {number} MIN_HEIGHT_AND_WIDTH The minimum value for height and width for any item. It is scaled internally as per the device screen size for visual consistency. The default value is 150.
 */

/**
 * @typedef {options~positionData[]} positionData An array of Position data of items. It can be in two-point form i.e. top-left and bottom-right coordinate ({x1: 100, y1: 100, x2: 300, y2: 300}) or in dimension form with height and width ({x: 100, y: 100, width: 200, height: 200}). Position data are scaled during the runtime according to the screen size. Use the function getGridData to get position data to store for persistence which is scaled according to gridData.
 * @property {number} x Distance of item along the x-axis.
 * @property {number} y Distance of item along the y-axis.
 * @property {number} width Width of the item.
 * @property {number} height Height of the item.
 * @property {number} x1 Distance of item along the x-axis for the top-left corner.
 * @property {number} y1 Distance of item along the y-axis for the top-left corner.
 * @property {number} x2 Distance of item along the x-axis for the bottom-right corner.
 * @property {number} x2 Distance of item along the y-axis for the bottom-right corner.
 */

/**
 * @typedef {options~callbacks} callbacks An object containing various callbacks.
 * @property {callbacks~mountComplete} mountComplete Callback function invoked after completion of all jobs i.e. when everything is initialized, rendered, etc. It is invoked after first time renderComplete.
 * @property {callbacks~renderComplete} renderComplete Callback function invoked after rendering contents of an item. It does not get invoked after re-rendering items whose indices are affected due to the removal of any item. It receives the index of the item as an argument. For the first time render, window resize and margin change, invocation of this callback is batched and doesn't receive any argument.
 * @property {callbacks~renderContent} renderContent Callback function called to receive the contents of the item. Also called for all the items whose indices have changed due to the removal of any item. In such cases, it is invoked after removeComplete.
 * @property {callbacks~addComplete} addComplete Callback function called when addition of an item is complete.
 * @property {callbacks~removeComplete} removeComplete Callback function called when removing of item is complete.
 * @property {callbacks~moveComplete} moveComplete Callback function called when moving of item is complete.
 * @property {callbacks~resizeComplete} resizeComplete Callback function called when resizing of item is complete.
 * @property {callbacks~cutSpaceComplete} cutSpaceComplete Callback function called when removing empty space is complete.
 * @property {callbacks~renderPlugin} renderPlugin Callback function called after renderContent and before renderComplete and addComplete but after removeComplete  for items to be rerender after a removeal of an item.
 * @property {callbacks~removePlugin} removePlugin Callback function called before the item is removed from the DOM. Also before removeComplete.
 * @property {callbacks~onItemClickCallback} onItemClickCallback Callback function called when user clicks on an item.
 * @property {callbacks~getLogMessage} getLogMessage The callback function to get logs for errors like when the user drags outside of grid view. Returns an object with keys type and message.
 * @property {callbacks~getArrangeTime} getArrangeTime The callback function to get logs for the move or resize operation. Returns time taken, resize count, and count of rectangles processed internally.
 * @property {callbacks~offsetMovePseudoElement} offsetMovePseudoElement The callback function to offset the move helper element from the top-left. Receives current cursor or touch coordinates and item dimensions in the two-point form as arguments. Use these details to offset the move helper top-left from the curser point.
 * @property {callbacks~getDebugLog} getDebugLog The callback function to get currently logged item. For developer of LimberGridView only.
 */

/**
 * Callback function invoked after completion of all jobs i.e. when everything is initialized, rendered, etc. It is invoked after first time renderComplete.
 * @callback callbacks~mountComplete
 * @returns {undefined}
 */

/**
 * Callback function invoked after rendering contents of an item. It does not get invoked after re-rendering items whose indices are affected due to the removal of any item. It receives the index of the item as an argument. For the first time render, window resize and margin change, invocation of this callback is batched and doesn't receive any argument.
 * @callback callbacks~renderComplete
 * @param {(undefined|number)} index Index of the item rendered or undefined if batched by the constructor or during resize.
 * @returns {undefined}
 */

/**
 * Callback function called to receive the contents of the item. Also called for all the items whose indices have changed due to the removal of any item. In such cases, it is invoked after removeComplete.
 * @callback callbacks~renderContent
 * @param {number} index Index of the item.
 * @param {number} width Width of the item.
 * @param {number} height Height of the item.
 * @param {(undefined|string)} type Type is undefined for all occurrences. An exception to this case is when an item is created by the user using add APIs. In this case, the type is a string, and the value is 'isAdd'.
 * @returns {(string|Element|object)} Should return a string representing DOM element or an instance of DOM element or an object. When an object is returned, renderPlugin gets triggered.
 */

/**
 * The callback function, called after the creation of an item is complete.
 * @callback callbacks~addComplete
 * @param {number} index Index of the item added.
 * @returns {undefined}
 */

/**
 * The callback function, called when the removal of an item is complete.
 * @callback callbacks~removeComplete
 * @param {number} index Index of the item removed.
 * @returns {undefined}
 */

/**
 * The callback function, called when moving an item is complete.
 * @callback callbacks~moveComplete
 * @param {number} index Index of the item moved.
 * @param {number} toX The distance along the x-axis where the user placed the item.
 * @param {number} toY The distance along the y-axis where the user placed the item.
 * @param {number[]} arrangedIndices An array of indices of the arranged items.
 * @returns {undefined}
 */

/**
 * The callback function, called when resizing of an item is complete.
 * @callback callbacks~resizeComplete
 * @param {number} index Index of the item resized.
 * @param {number} width Width of the item resized.
 * @param {number} height The height of the item resized.
 * @param {number[]} arrangedIndices An array of indices of the arranged items.
 * @returns {undefined}
 */

/**
 * The callback function, called when removing free space is complete.
 * @callback callbacks~cutSpaceComplete
 * @returns {undefined}
 */

/**
 * The callback function, called after renderContent and before renderComplete and addComplete. It is also called, after removeComplete for items whose indices are affected due to the removal of any item. In the function body of renderPlugin, you can render your React JSX using 'ReactDOM.render'.
 * @callback callbacks~renderPlugin
 * @param {object} renderData Data received from renderContent callback.
 * @param {Element} element The instance of an element inside which the content is to be rendered.
 * @returns {undefined}
 */

/**
 * The callback function, called just before the item is removed from the DOM and before removeComplete. In the function body of removePlugin, necessary clean-up can be performed by frameworks like react (e.g. calling 'ReactDOM.unmountComponentAtNode').
 * @callback callbacks~removePlugin
 * @param {Element} element The instance of an element which is going to be removed from the DOM.
 * @returns {undefined}
 */

/**
 * The callback function, called when user clicks on an item.
 * @callback callbacks~onItemClickCallback
 * @param {event} event The event object.
 * @returns {undefined}
 */

/**
 * The callback function to get logs for errors like when the user drags outside of grid view. Returns an object with keys type and message.
 * @callback callbacks~getLogMessage
 * @param {object} log Returns an object with keys type and message.
 * @returns {undefined}
 */

/**
 * The callback function to get logs for the move or resize operation. Returns time taken, resize count, and count of rectangles processed internally.
 * @callback callbacks~getArrangeTime
 * @param {number} time The time taken for all arrangement jobs to complete.
 * @param {number} resizeCount The number of items resized.
 * @param {number} count The number of rectangles processed internally.
 * @returns {undefined}
 */

/**
 * The callback function to offset the move helper element from the top-left. Receives current cursor or touch coordinates and item dimensions in the two-point form as arguments. Use these details to offset the move helper top-left from the curser point.
 * @callback callbacks~offsetMovePseudoElement
 * @param {number} x The distance along the x-axis where the user placed the cursor or touched the surface.
 * @param {number} y The distance along the y-axis where the user placed the cursor or touched the surface.
 * @param {object} item An item object in the two-point form.
 * @returns {object} An object with keys x and y. It represents the translated top-left point of the move pseudo-element.
 */

/**
 * The callback function to get log messages. For use only for developer of LimberGridView.
 * @callback callbacks~getDebugLog
 * @param {number}
 */

/**
 * @typedef {options~publicConstants} publicConstants Constants that you can change or set at any point in time to get the desired behavior.
 * @property {number} mobileAspectRatio The floating-point number representing the aspect ratio of items for mobile view (e.g. 5:4). The default value is 5/4.
 * @property {number} moveGuideRadius The radius of the default move guide. Move guide is a pseudo-element at the top-left corner of every item. You can remove the move guide for a customized look and feel. The default value is 10.
 * @property {number} resizeSquareGuideLength The length of the square rendered at the bottom-right corner of every item as a pseudo-element. The default value is 10.
 * @property {number} resizeSquareGuideBorderWidth The width of the border of the square rendered at the bottom-right corner of the item as a pseudo-element. The default value is 3.
 * @property {boolean} showBottomLeftResizeGuide When this flag is true, resize guide is activated on the bottom-left corner also. Enabling this flag will cause the default move guide to be disabled and custom move behavior has to be defined.
 * @property {number} autoScrollDistance The number by which the desk is scrolled automatically on resize events and move events when auto-scroll is enabled. Auto-scroll is enabled by default for touch events. The default value is 50.
 * @property {number} autoScrollPoint The distance above the bottom or below the top at which scroll happens when auto-scroll is enabled. The default value is 50.
 * @property {number} moveOrResizeHeightIncrements A number by which the height of the grid view is increased while moving, resizing, adding, or cutting space when you reach the bottom when auto-scroll is enabled. The default value is 50.
 * @property {boolean} autoScrollForMouse Setting this to true will enable auto-scroll for the move, resize, add, and cut-space events for mouse-based operations.
 * @property {number} mouseDownTime The time to wait before initiating the move, resize, add, or cut-space routines after the mouse down event. The default value is 0ms.
 * @property {number} touchHoldTime The time to wait before initiating the move, resize, add, or cut-space routines after the tap-hold event. The default value is 300ms.
 * @property {number} touchHoldTolerance The radius from the center or original point of contact on the screen. It's usage is vital in ignoring minute changes when user tries to touch hold at a point on the screen. When this is set to a very low number close to zero, a touch hold event will be interpreted as a touch move event on some devices. The default value is 15.
 * @property {number} demoWaitTime The time to wait before a demo for the resize or move event is initiated. Warning, a very low demo wait time will cause unwanted behavior as the algorithm needs some time for calculations. The default is 500ms.
 * @property {number} windowResizeWaitTime The time to wait before initiating window resize routines. The default value is 1000ms.
 * @property {number} autoScrollDelay The time to wait before the next scroll during a move, resize, add, or cut-space operation.
 * @property {string} deskInteractionMode The flag tells whether the user wants to add an item or cut space by mouse or touch interaction. Values can be ADD or CUTSPACE. The default value is ADD.
 * @property {boolean} latchMovedItem To enable or disable latch mode. The default value is true.
 * @property {boolean} animateMovedItem The flag tells whether to animate or not to animate the moved item. The default value is false.
 * @property {number} animateTime Time to wait before re-activating animate to the moved item. It can be the actual animate time set through CSS. LimberGridView temporarily disables animation for the moved item when the animateMovedItem flag is set to false through inline CSS. The default value is 250ms.
 * @property {number} marginChangeValue Value by which margin is increased or decreased. Default value is 0.5.
 * @property {number} crossHairWidth Width of move/resise helper cross hair. Default value is 500.
 * @property {number} crossHairHeight Height of move/resise helper cross hair. Default value is 500.
 * @property {number} shrinkToFit LimberGridView will shrink items by the percentage value specified while trying to arrange affected items.
 * @property {number} emitDebugLogs Flag to specify whether or not logger will emit logs. For developer of LimberGridView only. Default value is false.
 */

/**
 * @class
 * @name LimberGridView
 * @description Constructor
 * @param {options} options
 */
function LimberGridView(options) {
	this.initializeStore();
	setOptions(this, options);
	setPositionData(this, options.positionData);
	setCallbacks(this, options.callbacks);

	getUndoRedo(this).push({ pd: getPositionData(this), margin: options.margin });

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
	instantiateResizeObserver.call(this);
	instantiateIntersectionObserver.call(this);

	const e = getElements(this);
	e.$limberGridView.addEventListener(
		"scroll",
		getBindedFunctions(this).onScroll
	);

	setTimeout(
		async function () {
			await init(this, true, options.autoArrange, false);
			render(this, true);
			if (options?.callbacks?.mountComplete) {
				options.callbacks.mountComplete();
			}
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
				renderedItems: [],
				ioTopHelperPos: -1,
				ioBottomHelperPos: 1.5,
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
				onItemClick: onItemClick.bind(this),
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
				resizeObserverCallback: resizeObserverCallback.bind(this),
				intersectionObserverCallback: intersectionObserverCallback.bind(this),
				onScroll: onScroll.bind(this),
				onScrollCallback: onScrollCallback.bind(this),
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
				stack: new Stack({ constructReverse: true }),
				garbageStack: new Stack({ constructReverse: true }),
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
				SHOW_BOTTOM_LEFT_RESIZE_GUIDE: false,
				AUTO_SCROLL_DISTANCE: 50,
				AUTO_SCROLL_POINT: 50,
				MOVE_OR_RESIZE_HEIGHT_INCREMENTS: 50,
				AUTO_SCROLL_FOR_MOUSE: false,

				MOUSE_DOWN_TIME: 0,
				TOUCH_HOLD_TIME: 300,
				TOUCH_HOLD_TOLERANCE: 15,
				DEMO_WAIT_TIME: 500,
				WINDOW_RESIZE_WAIT_TIME: 1000,
				AUTO_SCROLL_DELAY: 100,

				DESK_INTERACTION_MODE: "CUTSPACE",

				LATCH_MOVED_ITEM: true,

				ANIMATE_MOVED_ITEM: false,
				ANIMATE_TIME: 250,

				MARGIN_CHANGE_VALUE: 0.5,

				// cross hair
				CROSS_HAIR_WIDTH: 500,
				CROSS_HAIR_HEIGHT: 500,

				// Algorithm
				SHRINK_TO_FIT: 10,

				// Debug
				EMIT_DEBUG_LOGS: false,
			},
			messages: {
				latchedMoveDemo1:
					"Move curser close to an adjacent item over this box to latch next to that item.",
				latchedMoveDemo2: "Move curser over this box to latch on to this item.",
			},
		},
		observer: {
			resizeObserver: {
				resizeObserver: undefined,
				isResizeObserving: false,
			},
			intersectionObserver: {
				intersectionObserver: undefined,
			},
		},
	};
};

/**
 * @method
 * @name LimberGridView#renderItem
 * @description Call this function to forcefully re-render the contents of the item.
 * @param  {number} index Index of the item to force re-render.
 * @returns {undefined}
 */
LimberGridView.prototype.renderItem = function (index) {
	_renderItem(this, index);
};

/**
 * @method
 * @name LimberGridView#getGridData
 * @description Call this function to get positionData scaled according to gridData.
 * @return {object} Returns an object containing gridData and positionData.
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
		margin: fixTo(
			privateConstants.MARGIN / privateConstants.WIDTH_SCALE_FACTOR
		),
	};
};

/**
 * @method
 * @name LimberGridView#setDeskInteractMode
 * @description Call this function to change the publicConstant, deskInteractionMode during runtime.
 * @param {string} flag A string with the value "ADD" or "CUTSPACE".
 * @returns {undefined}
 */
LimberGridView.prototype.setDeskInteractMode = function (flag) {
	if (DESK_INTERACTION_MODE[flag]) {
		setPublicConstantByName(this, "DESK_INTERACTION_MODE", flag);
	}
};

/**
 * @method
 * @name LimberGridView#setLatchMovedItem
 * @description Call this function to change the publicConstant, latchMovedItem during runtime.
 * @param {boolean} flag A boolean flag.
 * @returns {undefined}
 */
LimberGridView.prototype.setLatchMovedItem = function (flag) {
	if (typeof flag === "boolean") {
		setPublicConstantByName(this, "LATCH_MOVED_ITEM", flag);
	}
};

/**
 * @method
 * @name LimberGridView#setShrinkToFit
 * @description Call this function to change the publicConstant, shrinkToFit during runtime.
 * @param {number} value Specifies the percentage value up to which items might be shrunk while arranging. Specify 0 not to shrink.
 * @returns {undefined}
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
 * @param {object} item An object with mandatory properties 'height' and 'width' and optional properties x and y.
 * @returns {undefined}
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
 * @description Call this function to remove an item.
 * @param  {number} index The index of the item to be removed.
 * @returns {undefined}
 */
LimberGridView.prototype.removeItem = function (index) {
	if (Number.isInteger(parseInt(index))) {
		_removeItem(this, index);
	}
};

/**
 * @method
 * @name LimberGridView#setIsMobileCheck
 * @description Call this function to set isMobileCheck callback during runtime.
 * @param {isMobileCheck} func func is isMobileCheck callback to check if the screen is of a mobile device.
 * @returns {undefined}
 */
LimberGridView.prototype.setIsMobileCheck = function (f) {
	this.options.isMobileCheck = f;
};

/**
 * @method
 * @name LimberGridView#undo
 * @description Undo the previous move or resize. Undo data is lost after add or remove operation.
 * @returns {undefined}
 */
LimberGridView.prototype.undo = function () {
	const { pd, margin } = getUndoRedo(this).undo() || {};
	if (pd) {
		const rerenderItems = getItemsToRerenderOnUndoRedo(
			getPositionData(this),
			pd
		);
		setPositionData(this, pd);
		setMargin(this, margin);
		resetDemoUIChanges(this);

		const renderedItemsMap = getRenderedItemsMap(this);
		const _rerenderItems = { ...rerenderItems };
		for (const item in rerenderItems) {
			if (!renderedItemsMap[item]) {
				delete _rerenderItems[item];
			}
		}
		for (const item in _rerenderItems) {
			this.renderItem(item);
		}
	}
};

/**
 * @method
 * @name LimberGridView#redo
 * @description Redo the next move or resize. Redo data is lost after add or remove operation.
 * @returns {undefined}
 */
LimberGridView.prototype.redo = function () {
	const { pd, margin } = getUndoRedo(this).redo() || {};
	if (pd) {
		const rerenderItems = getItemsToRerenderOnUndoRedo(
			getPositionData(this),
			pd
		);
		setPositionData(this, pd);
		setMargin(this, margin);
		resetDemoUIChanges(this);

		const renderedItemsMap = getRenderedItemsMap(this);
		const _rerenderItems = { ...rerenderItems };
		for (const item in rerenderItems) {
			if (!renderedItemsMap[item]) {
				delete _rerenderItems[item];
			}
		}
		for (const item in _rerenderItems) {
			this.renderItem(item);
		}
	}
};

/**
 * @method
 * @name LimberGridView#isUndoAvailable
 * @description Returns true when undo operation is possible.
 * @returns {boolean}
 */
LimberGridView.prototype.isUndoAvailable = function () {
	return getUndoRedo(this).isUndoAvailable();
};

/**
 * @method
 * @name LimberGridView#isRedoAvailable
 * @description Returns true when a redo operation is possible.
 * @returns {boolean}
 */
LimberGridView.prototype.isRedoAvailable = function () {
	return getUndoRedo(this).isRedoAvailable();
};

/**
 * @method
 * @name LimberGridView#setAutoScrollDelay
 * @description Call this function to change the publicConstant, autoScrollDelay during runtime.
 * @param {number} value Delay in milliseconds.
 * @returns {undefined}
 */
LimberGridView.prototype.setAutoScrollDelay = function (value) {
	if (typeof value === "number") {
		setPublicConstantByName(this, "AUTO_SCROLL_DELAY", value);
	}
};

/**
 * @method
 * @name LimberGridView#setAutoScrollForMouse
 * @description Call this function to change the publicConstant, autoScrollForMouse during runtime.
 * @param {boolean} flag A boolean flag.
 * @returns {undefined}
 */
LimberGridView.prototype.setAutoScrollForMouse = function (value) {
	if (typeof value === "boolean") {
		setPublicConstantByName(this, "AUTO_SCROLL_FOR_MOUSE", value);
	}
};

// /**
//  * @method
//  * @name LimberGridView#decreaseMargin
//  * @description Decreases the margin by the specified value asynchrousnoly.
//  * @returns {boolean}
//  * @throws {string}
//  */
// LimberGridView.prototype.decreaseMargin = function () {
// 	_decreaseMargin(this);
// };

// /**
//  * @method
//  * @name LimberGridView#increaseMargin
//  * @description Increases the margin by the specified value asynchrousnoly.
//  * @returns {boolean}
//  * @throws {string}
//  */
// LimberGridView.prototype.increaseMargin = function () {
// 	_increaseMargin(this);
// };

// /**
//  * @method
//  * @name LimberGridView#setMarginChangeValue
//  * @description Sets the value by which margin is to increased or decreased.
//  * @returns {boolean}
//  */
// LimberGridView.prototype.setMarginChangeValue = function (value) {
// 	if (typeof value === "number" && value >= 0) {
// 		setPublicConstantByName(this, "MARGIN_CHANGE_VALUE", value);
// 	}
// };

// /**
//  * @method
//  * @name LimberGridView#getMarginChangeValue
//  * @description Get the value by which margin is to increased or decreased.
//  * @returns {boolean}
//  */
// LimberGridView.prototype.getMarginChangeValue = function (value) {
// 	return getPublicConstantByName(this, "MARGIN_CHANGE_VALUE");
// };

// /**
//  * @method
//  * @name LimberGridView#getCurrentMargin
//  * @description Get current margin scaled according to gridData. Pass true as first argument to get currently scaled margin.
//  * @return {number}
//  */
// LimberGridView.prototype.getCurrentMargin = function (flag) {
// 	const privateConstants = getPrivateConstants(this);
// 	if (flag) {
// 		return privateConstants.MARGIN;
// 	}
// 	return fixTo(privateConstants.MARGIN / privateConstants.WIDTH_SCALE_FACTOR);
// };

/**
 * @method
 * @name LimberGridView#destroy
 * @description Free event listeners and all other resources like DOM elements.
 * @returns {undefined}
 */
LimberGridView.prototype.destroy = function (value) {
	unInitializeEvents.call(this);
	const $pseudoContainer = get$pseudoContainer(this);
	const $limberGridViewContainer = get$limberGridViewContainer(this);
	$pseudoContainer.remove();
	$limberGridViewContainer.remove();
};

export default LimberGridView;
