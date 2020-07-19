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

import {
	setIsMobileFunction as setIsMobileFunc,
	getRandomString,
} from "./libs/utils/utils";
import {
	getPublicConstants,
	setPublicConstantByName,
} from "./store/constants/publicConstants";
import {
	getPrivateConstants,
	setGridWidth,
	setGridHeight,
	setGridMargin,
} from "./store/constants/privateConstants";
import { setOptions } from "./store/variables/options";

import {
	setPositionData,
	getPositionData,
	setGridData,
	setCallbacks,
	setPseudoContainerId,
	getPseudoContainerId,
} from "./store/variables/essentials";
import {
	getElements,
	set$body,
	set$el,
	set$pseudoContainer,
	set$limberGridViewContainer,
	set$limberGridViewStyle,
	set$limberGridView,
	set$pseudoContainerItem,
	set$limberGridViewPseudoItem,
	set$limberGridViewMoveGuide,
	set$limberGridViewHeightAdjustGuide,
	set$limberGridViewAddCutGuide,
	set$limberGridViewTouchHoldGuide,
} from "./store/variables/elements";
import { DESK_INTERACTION_MODE } from "./store/flags/flagDetails";
import { getBindedFunctions } from "./store/variables/bindedFunctions";

import { render, renderItem as _renderItem } from "./libs/renderers/renderers";
// import { removeItems, addItems } from "./libs/renderers/addOrRemoveItems";
import { init } from "./initializers/initializers";

LimberGridView.prototype.constructor = LimberGridView;

// ----------------------------------------------------------------------------------------- //

// ---------------------------------- INPUT DATA FORMAT ------------------------------------ //

// ----------------------------------------------------------------------------------------- //

/*

	processTypes : render, addItems, addItemInteractive, removeItems, resizeItems, onDemand(default for invoked), <custom> (for invoked)

	var options = {
		el : "#",																				// id of the parent element with #
		editable : true, 																		// true/false (optional default true)
		//enableInteractiveAddAndCut : true,														// true/false (optional default true)
		//enableTouchInteraction : true,															// true/false (optional default true)
		//dataType : "string", 																	// string/node
		autoArrange : true,																		// true/false (compulsory if x and y not present else optional)
		reRenderOnResize : true, 																// true/false (optional default true)
		mobileAspectRatio : <value>, 															// aspect ratio of for mobile devices
		gridData : {
			HEIGHT : 1080, 																	// height of limberGridView
			WIDTH : 1920,																	// width of limberGridView
			MARGIN : 8, 																		// margin for items
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
		]
		callbacks : {
			renderComplete : function(){}, 														// callback for completion of render function or renderItem, passes index of rendered Item if only was rendered by external program or passes index undefined if it was first render
			renderContent : function(index, width, height, type){},									// callback to get data inside an item, type is "isAdd" on addItem and type is "isResize" on resizeItem
			addComplete : function(index){}
			removeComplete: function(index){}
			moveComplete: function(index, toX, toY) {}
			resizeComplete: function(index, width, height){}

			//getItemRenderDataCallback : function(index, width, height, processType){}, 			// callback to get string or node object to render inside the item
			onItemClickCallback : function(event){},											// click callback for item
			//itemsRenderComplete : function([index, index, ...], scale, processType){}, 			// callback for completion of renderItems function
			//resizeCompleteCallback : function(index, {x, y, width, height}){}, 					// callback for completion of resizing an item
			//moveCompleteCallback : function(status, index, {x, y, width, height} or event){}, 					// callback for completion of moving an item
			//addCompleteCallback : function([index, index, ...], width, height, processType){}, 	// callback for completion of adding an item
			//removeCompleteCallback : function([index, index, ...]){}, 							// callback for completion of removing an item
		}
	}
	*/

// ----------------------------------------------------------------------------------------- //

// ---------------------------------- INPUT DATA FORMAT END -------------------------------- //

// ----------------------------------------------------------------------------------------- //

// ----------------------------------------------------------------------------------------- //

// ---------------------------------- CONSTANTS YOU CAN CHANGE ----------------------------- //

// ----------------------------------------------------------------------------------------- //

// LimberGridView.prototype.MOVE_GUIDE_RADIUS = 10;
// LimberGridView.prototype.RESIZE_SQUARE_GUIDE_LENGTH = 10;
// LimberGridView.prototype.RESIZE_SQUARE_BORDER_GUIDE_WIDTH = 3;
// LimberGridView.prototype.AUTO_SCROLL_DISTANCE = 50;
// LimberGridView.prototype.AUTO_SCROLL_POINT = 50;
// LimberGridView.prototype.MOVE_OR_RESIZE_HEIGHT_INCREMENTS = 50;

// LimberGridView.prototype.MOUSE_DOWN_TIME = 500;
// LimberGridView.prototype.TOUCH_HOLD_TIME = 300;
// LimberGridView.prototype.DEMO_WAIT_TIME = 500;
// LimberGridView.prototype.WINDOW_RESIZE_WAIT_TIME = 1000;
// LimberGridView.prototype.MARGIN = 5;

// LimberGridView.prototype.MOBILE_ASPECT_RATIO = 16 / 9;

// LimberGridView.prototype.ADD_OR_CUTSPACE_TOGGLE = "ADD";

// ----------------------------------------------------------------------------------------- //

// ---------------------------------- CONSTANTS YOU CAN CHANGE END ------------------------- //

// ----------------------------------------------------------------------------------------- //

function LimberGridView(options) {
	this.initializeStore();
	setOptions(this, options);
	setGridData(this, options.gridData);
	setPositionData(this, options.positionData);
	setCallbacks(this, options.callbacks);
	// setInitialPositionData(this, options.gridData.initialPositionData);

	// INITIALIZATION BEGIN
	// const e = getElements(this);
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

	this.initRender();

	setGridWidth(this, options.gridData.WIDTH);
	setGridHeight(this, options.gridData.HEIGHT);
	setGridMargin(this, options.gridData.MARGIN);

	// INITIALIZATION ENDED

	if (!isNaN(options.gridData.mobileAspectRatio)) {
		setPublicConstantByName(
			this,
			"MOBILE_ASPECT_RATIO",
			options.gridData.mobileAspectRatio
		);
		// publicConstants.MOBILE_ASPECT_RATIO =
		// 	options.gridData.mobileAspectRatio;
	}

	if (options.editable === true) {
		if (!isNaN(options.moveGuideRadius)) {
			setPublicConstantByName(
				this,
				"MOVE_GUIDE_RADIUS",
				options.moveGuideRadius
			);
			// publicConstants.MOVE_GUIDE_RADIUS = options.moveGuideRadius;
		}

		if (!isNaN(options.resizeSquareGuideLength)) {
			setPublicConstantByName(
				this,
				"RESIZE_SQUARE_GUIDE_LENGTH",
				options.resizeSquareGuideLength
			);
			// publicConstants.RESIZE_SQUARE_GUIDE_LENGTH =
			// 	options.resizeSquareGuideLength;
		}

		if (!isNaN(options.resizeSquareBorderGuideWidth)) {
			setPublicConstantByName(
				this,
				"RESIZE_SQUARE_BORDER_GUIDE_WIDTH",
				options.resizeSquareBorderGuideWidth
			);
			// publicConstants.RESIZE_SQUARE_BORDER_GUIDE_WIDTH =
			// 	options.resizeSquareBorderGuideWidth;
		}
	}

	if (options.reRenderOnResize === true) {
		window.addEventListener("resize", getBindedFunctions(this).onWindowResize);
	}

	init(this, options.autoArrange);
	render(this, true);
}

LimberGridView.prototype.initializeStore = function () {
	this.options = undefined;
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
				$limberGridViewStyle: undefined,
				$limberGridViewPseudoItem: undefined,
				$limberGridViewMoveGuide: undefined,
				$limberGridViewHeightAdjustGuide: undefined,
				$limberGridViewAddCutGuide: undefined, // limberGridViewAddItemGuide
				$limberGridViewTouchHoldGuide: undefined, // limberGridViewAddItemOnTouchHoldGuide
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
				// initialPositionData: [],
				gridData: {},
				callbacks: {},
				// serializedPositionData: [],
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
				WIDTH: 0,
				HEIGHT: 0,

				PADDING_LEFT: 0,
				PADDING_RIGHT: 0,
				PADDING_TOP: 0,
				PADDING_BOTTOM: 0,

				WIDTH_SCALE_FACTOR: 0,

				GRID_WIDTH: 1080,
				GRID_HEIGHT: 1920,
				GRID_MARGIN: 5,
				MARGIN: 5,

				MIN_HEIGHT_AND_WIDTH: 150,
			},
			publicConstants: {
				MOVE_GUIDE_RADIUS: 10,
				RESIZE_SQUARE_GUIDE_LENGTH: 10,
				RESIZE_SQUARE_BORDER_GUIDE_WIDTH: 3,
				AUTO_SCROLL_DISTANCE: 50,
				AUTO_SCROLL_POINT: 50,
				MOVE_OR_RESIZE_HEIGHT_INCREMENTS: 50,

				MOUSE_DOWN_TIME: 500,
				TOUCH_HOLD_TIME: 300,
				DEMO_WAIT_TIME: 500,
				WINDOW_RESIZE_WAIT_TIME: 1000,
				MARGIN: 5,

				MOBILE_ASPECT_RATIO: 16 / 10,

				DESK_INTERACTION_MODE: "ADD",

				DEFINED_MIN_HEIGHT_AND_WIDTH: 150,
			},
		},
	};
};

LimberGridView.prototype.getGridData = function () {
	const privateConstants = getPrivateConstants(this);
	const publicConstants = getPublicConstants(this);

	// TO DO: have to scale positionData to GRID_HEIGHT, GRID_WIDTH and GRID_MARGIN
	// Have to send a copy since it will be scaled to output specifications
	return {
		gridData: {
			height: privateConstants.GRID_HEIGHT,
			width: privateConstants.GRID_WIDTH,
			margin: publicConstants.GRID_MARGIN,
		},
		positionData: JSON.parse(JSON.stringify(getPositionData(this))),
	};
};

LimberGridView.prototype.setDeskInteractMode = function (flag) {
	if (DESK_INTERACTION_MODE[flag]) {
		setPublicConstantByName(this, "DESK_INTERACTION_MODE", flag);
	}
};

LimberGridView.prototype.initRender = function () {
	const e = getElements(this);

	set$body(this, document.getElementsByTagName("body")[0]);

	let pseudoContainerId;
	do {
		pseudoContainerId =
			"limber-grid-view-pseudo-container-" + getRandomString();
	} while (document.getElementById(pseudoContainerId) !== null);
	setPseudoContainerId(this, pseudoContainerId);

	e.$body.insertAdjacentHTML(
		"beforeend",
		`<div id = ${getPseudoContainerId(
			this
		)} class = "limber-grid-view-pseudo-container"></div>`
	);
	set$pseudoContainer(
		this,
		document.getElementById(getPseudoContainerId(this))
	);

	e.$el.innerHTML = `<div class = "limber-grid-view-container"><style></style><div class = "limber-grid-view"></div><div class = "limber-grid-view-license"><div class = "limber-grid-view-license-icon">©</div><div class = "limber-grid-view-license-details">LimberGridView Copyright © 2018-2020, Subendra Kumar Sharma. License: GNU General Public License version 3, or (at your option) any later version.</div></div></div>`;
	set$limberGridViewContainer(
		this,
		e.$el.getElementsByClassName("limber-grid-view-container")[0]
	);
	set$limberGridViewStyle(this, e.$el.getElementsByTagName("style")[0]);
	set$limberGridView(this, e.$el.getElementsByClassName("limber-grid-view")[0]);

	const pseudoContainerItem = document.createElement("div");
	const limberGridViewPseudoItem = document.createElement("div");
	const limberGridViewMoveGuide = document.createElement("div"); // thing that shows to if there is a latch on item available on move
	const limberGridViewHeightAdjustGuide = document.createElement("div");
	const limberGridViewAddCutGuide = document.createElement("div"); // desk interaction rect
	const limberGridViewTouchHoldGuide = document.createElement("div"); // touch hold animation

	pseudoContainerItem.setAttribute(
		"class",
		"limber-grid-view-pseudo-container-item"
	);
	limberGridViewPseudoItem.setAttribute(
		"class",
		"limber-grid-view-pseudo-item"
	);
	limberGridViewMoveGuide.setAttribute("class", "limber-grid-view-move-guide");
	limberGridViewHeightAdjustGuide.setAttribute(
		"class",
		"limber-grid-view-height-adjust-guide"
	);
	limberGridViewAddCutGuide.setAttribute(
		"class",
		"limber-grid-view-add-cut-guide"
	);
	limberGridViewTouchHoldGuide.setAttribute(
		"class",
		"limber-grid-view-touch-hold-guide"
	);

	e.$pseudoContainer.appendChild(pseudoContainerItem);
	e.$limberGridView.appendChild(limberGridViewPseudoItem);
	e.$limberGridView.appendChild(limberGridViewMoveGuide);
	e.$limberGridView.appendChild(limberGridViewHeightAdjustGuide);
	e.$limberGridView.appendChild(limberGridViewAddCutGuide);
	e.$limberGridView.appendChild(limberGridViewTouchHoldGuide);

	set$pseudoContainerItem(this, pseudoContainerItem);
	set$limberGridViewPseudoItem(this, limberGridViewPseudoItem);
	set$limberGridViewMoveGuide(this, limberGridViewMoveGuide);
	set$limberGridViewHeightAdjustGuide(this, limberGridViewHeightAdjustGuide);
	set$limberGridViewAddCutGuide(this, limberGridViewAddCutGuide);
	set$limberGridViewTouchHoldGuide(this, limberGridViewTouchHoldGuide);
};

// LimberGridView.prototype.render = render;

LimberGridView.prototype.renderItem = function (index) {
	_renderItem(this, index);
};

// LimberGridView.prototype.removeItems = removeItems;

// LimberGridView.prototype.addItems = addItems;

LimberGridView.prototype.setIsMobileFunction = function (f) {
	setIsMobileFunc(f);
};

export default LimberGridView;
