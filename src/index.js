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

import { onWindowResize } from "./libs/eventHandlerLib/miscellaneous";

import { setIsMobileFunction as setIsMobileFunc } from "./libs/utils/utils";
import publicConstants from "./constants/publicConstants";
import privateConstants from "./constants/privateConstants";
import { setOptions, getOptions } from "./variables/options";
import {
	positionData,
	initialGridData,
	setPositionData,
	setInitialPositionData,
	setInitialGridData,
	setCallbacks,
} from "./variables/essentials";

import { render, renderItems } from "./libs/renderers/renderers";
import { removeItems, addItems } from "./libs/renderers/addOrRemoveItems";
import { init } from "./initializers/initializers";

window.LimberGridView = (function () {
	LimberGridView.prototype.constructor = LimberGridView;

	// ----------------------------------------------------------------------------------------- //

	// ---------------------------------- INPUT DATA FORMAT ------------------------------------ //

	// ----------------------------------------------------------------------------------------- //

	/*

	processTypes : render, addItems, addItemInteractive, removeItems, resizeItems, onDemand(default for invoked), <custom> (for invoked)

	var options = {
		el : "#",																				// id of the parent element with #
		editable : true, 																		// true/false (optional default true)
		enableInteractiveAddAndCut : true,														// true/false (optional default true)
		enableTouchInteraction : true,															// true/false (optional default true)
		dataType : "string", 																	// string/node
		autoArrange : true,																		// true/false (compulsory if x and y not present else optional)
		reRenderOnResize : true, 																// true/false (optional default true)
		initialGridData : {
			gridHeight : 624, 																	// height of limberGridView
			gridWidth : 985,																	// width of limberGridView
			margin : 5, 																		// margin for items
			mobileAspectRatio : <value>, 														// aspect ratio of for mobile devices
			initialPositionData : [																// position Data
				{x : <value>, y : <value>, width : <value>, height : <value>},
				{x : <value>, y : <value>, width : <value>, height : <value>},

					OR (if autoArrange set to true)

				{width : <value>, height : <value>},
				{width : <value>, height : <value>},
				...,
				...,
				...
			]
		},
		callbacks : {
			getItemRenderDataCallback : function(index, width, height, processType){}, 			// callback to get string or node object to render inside the item
			onItemClickCallback : function(event){},											// click callback for item
			renderComplete : function(){}, 														// callback for completion of render function
			itemsRenderComplete : function([index, index, ...], scale, processType){}, 			// callback for completion of renderItems function
			resizeCompleteCallback : function(index, {x, y, width, height}){}, 					// callback for completion of resizing an item
			moveCompleteCallback : function(status, index, {x, y, width, height} or event){}, 					// callback for completion of moving an item
			addCompleteCallback : function([index, index, ...], width, height, processType){}, 	// callback for completion of adding an item
			removeCompleteCallback : function([index, index, ...]){}, 							// callback for completion of removing an item
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
		setCallbacks(this, options.callbacks);
		setInitialGridData(this, options.initialGridData);
		setInitialPositionData(this, options.initialGridData.initialPositionData);
		setPositionData(this, options.initialGridData.initialPositionData);

		if (
			options.initialGridData.mobileAspectRatio != undefined &&
			options.initialGridData.mobileAspectRatio != null
		) {
			if (typeof options.initialGridData.mobileAspectRatio == "number") {
				publicConstants.MOBILE_ASPECT_RATIO =
					options.initialGridData.mobileAspectRatio;
			}
		}

		if (options.editable == true) {
			if (
				options.moveGuideRadius != undefined &&
				options.moveGuideRadius != null
			) {
				if (typeof options.moveGuideRadius == "number") {
					publicConstants.MOVE_GUIDE_RADIUS = options.moveGuideRadius;
				}
			}

			if (
				options.resizeSquareGuideLength != undefined &&
				options.resizeSquareGuideLength != null
			) {
				if (typeof options.resizeSquareGuideLength == "number") {
					publicConstants.RESIZE_SQUARE_GUIDE_LENGTH =
						options.resizeSquareGuideLength;
				}
			}

			if (
				options.resizeSquareBorderGuideWidth != undefined &&
				options.resizeSquareBorderGuideWidth != null
			) {
				if (typeof options.resizeSquareBorderGuideWidth == "number") {
					publicConstants.RESIZE_SQUARE_BORDER_GUIDE_WIDTH =
						options.resizeSquareBorderGuideWidth;
				}
			}
		}

		if (options.reRenderOnResize != false) {
			window.addEventListener("resize", onWindowResize);
		}

		init(initialGridData.gridWidth, options.autoArrange);
	}

	LimberGridView.prototype.initializeStore = function () {
		this.options = undefined;
		this.store = {
			variables: {
				elements: {
					$body: undefined,
					$bodyPseudoEl: undefined,
					$limberGridViewBodyPseudoItem: undefined,
					$el: undefined,
					$limberGridView: undefined,
					$limberGridViewItems: [],
					$limberGridViewContainer: undefined,
					$limberGridViewStyle: undefined,
					$limberGridViewGridPseudoItem: undefined,
					$limberGridViewMoveGuide: undefined,
					$limberGridViewHeightAdjustGuide: undefined,
					$limberGridViewAddItemGuide: undefined,
					$limberGridViewAddItemOnTouchHoldGuide: undefined,
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
					pseudoElementId: undefined,
					positionData: [],
					modifiedPositionData: [],
					initialPositionData: [],
					initialGridData: {},
					callbacks: {},
					serializedPositionData: {},
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

					OUTPUT_WIDTH: 1080,
					OUTPUT_HEIGHT: 1920,
					OUTPUT_MARGIN: 5,
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

					MOBILE_ASPECT_RATIO: 16 / 9,

					ADD_OR_CUTSPACE_TOGGLE: "ADD",

					DEFINED_MIN_HEIGHT_AND_WIDTH: 150,
				},
			},
		};
	};

	LimberGridView.prototype.getGridData = function () {
		var gridData = {
			gridHeight: privateConstants.HEIGHT,
			gridWidth: privateConstants.WIDTH,
			margin: publicConstants.MARGIN,
			initialPositionData: JSON.parse(JSON.stringify(positionData)),
		};
		return gridData;
	};

	LimberGridView.prototype.setAddOrCutSpace = function (flag) {
		if (flag == "ADD" || flag == "CUTSPACE") {
			publicConstants.ADD_OR_CUTSPACE_TOGGLE = flag;
		}
	};

	LimberGridView.prototype.render = render;

	LimberGridView.prototype.renderItems = renderItems;

	LimberGridView.prototype.removeItems = removeItems;
	LimberGridView.prototype.addItems = addItems;

	LimberGridView.prototype.setIsMobileFunction = function (f) {
		setIsMobileFunc(f);
	};

	return LimberGridView;
})();

export default window.LimberGridView;
