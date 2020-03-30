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

import "./index.css";
import "./index.scss";

import {
	onWindowResize,
	onWindowResizeTimerCallback,
	onItemClick
} from "./libs/eventHandlerLib/miscellaneous";
import {
	onLimberGridMouseDown,
	onLimberGridTouchStart,
	onLimberGridMouseDownCheck,
	onLimberGridTouchStartCheck,
	onLimberGridMouseMove,
	onLimberGridTouchMove,
	onLimberGridMouseUp,
	onLimberGridTouchEnd,
	onLimberGridTouchCancel,
	onLimberGridTouchContextMenu,
	onLimberGridContextMenu,
	addItemAllowCheckTimeOut,
	addItemAllowCheck,
	cutSpaceAllowCheckTimeOut,
	cutSpaceAllowCheck,
	insertAddItemOnTouchHoldGuideStyles
} from "./libs/eventHandlerLib/addItemAndCutSpace";

import {
	onItemMouseDown,
	onItemTouchStart,
	mouseDownCheck,
	tapHoldCheck,
	onMouseMove,
	onTouchMove,
	onMouseUp,
	onTouchEnd,
	onContextMenu,
	onItemTouchContextMenu,
	onTouchCancel,
	calculateMousePosOnLimberGrid,
	calculateTouchPosOnLimberGrid,
	calculateTouchPosOnLimberGridItem,
	checkNewMoveCoordinates,
	showMoveDemo,
	showResizeDemo,
	revertShowMoveOrResizeDemo
} from "./libs/eventHandlerLib/itemInteraction";

import {
	getPlainFrom4Points,
	getCoordinates,
	getLines,
	arePlainsSame,
	arePlainsIdentical,
	isValidPlane,
	sortPlainsByArea,
	sortPlainsByHeight,
	sortPlainsByDepth,
	divideEqualNumber,
	getMarginAtPoint,
	getRowSequence
} from "./libs/utils/essentials";

window.LimberGridView = (function() {
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

	LimberGridView.prototype.MOVE_GUIDE_RADIUS = 10;
	LimberGridView.prototype.RESIZE_SQUARE_GUIDE_LENGTH = 10;
	LimberGridView.prototype.RESIZE_SQUARE_BORDER_GUIDE_WIDTH = 3;
	LimberGridView.prototype.AUTO_SCROLL_DISTANCE = 50;
	LimberGridView.prototype.AUTO_SCROLL_POINT = 50;
	LimberGridView.prototype.MOVE_OR_RESIZE_HEIGHT_INCREMENTS = 50;

	LimberGridView.prototype.MOUSE_DOWN_TIME = 500;
	LimberGridView.prototype.TOUCH_HOLD_TIME = 300;
	LimberGridView.prototype.DEMO_WAIT_TIME = 500;
	LimberGridView.prototype.WINDOW_RESIZE_WAIT_TIME = 1000;
	LimberGridView.prototype.MARGIN = 5;

	LimberGridView.prototype.MOBILE_ASPECT_RATIO = 16 / 9;

	LimberGridView.prototype.ADD_OR_CUTSPACE_TOGGLE = "ADD";

	// ----------------------------------------------------------------------------------------- //

	// ---------------------------------- CONSTANTS YOU CAN CHANGE END ------------------------- //

	// ----------------------------------------------------------------------------------------- //

	function LimberGridView(options) {
		this.options = JSON.parse(JSON.stringify(options));
		this.callbacks = options.callbacks;

		this.initialGridData = this.options.initialGridData;
		this.initialPositionData = this.options.initialGridData.initialPositionData;
		this.positionData = JSON.parse(
			JSON.stringify(this.initialPositionData)
		);

		if (
			this.options.initialGridData.mobileAspectRatio != undefined &&
			this.options.initialGridData.mobileAspectRatio != null
		) {
			if (
				typeof this.options.initialGridData.mobileAspectRatio ==
				"number"
			) {
				this.MOBILE_ASPECT_RATIO = this.options.initialGridData.mobileAspectRatio;
			}
		}

		if (this.options.editable == true) {
			this.onLimberGridMouseDownFunctionVariable = onLimberGridMouseDown.bind(
				this
			);
			this.onLimberGridMouseMoveBindedFunctionVariable = onLimberGridMouseMove.bind(
				this
			);
			this.onLimberGridMouseUpBindedFunctionVariable = onLimberGridMouseUp.bind(
				this
			);
			this.onLimberGridContextMenuBindedFunctionVariable = onLimberGridContextMenu.bind(
				this
			);

			this.onLimberGridTouchStartFunctionVariable = onLimberGridTouchStart.bind(
				this
			);
			this.onLimberGridTouchMoveBindedFunctionVariable = onLimberGridTouchMove.bind(
				this
			);
			this.onLimberGridTouchEndBindedFunctionVariable = onLimberGridTouchEnd.bind(
				this
			);
			this.onLimberGridTouchCancelBindedFunctionVariable = onLimberGridTouchCancel.bind(
				this
			);
			this.onLimberGridTouchContextMenuBindedFunctionVariable = onLimberGridTouchContextMenu.bind(
				this
			);

			this.onItemMouseDownFunctionVariable = onItemMouseDown.bind(this);
			this.onMouseMoveBindedFunctionVariable = onMouseMove.bind(this);
			this.onMouseUpBindedFunctionVariable = onMouseUp.bind(this);
			this.onContextMenuBindedFunctionVariable = onContextMenu.bind(this);

			this.onItemTouchStartFunctionVariable = onItemTouchStart.bind(this);
			this.onTouchMoveBindedFunctionVariable = onTouchMove.bind(this);
			this.onTouchEndBindedFunctionVariable = onTouchEnd.bind(this);
			this.onTouchCancelBindedFunctionVariable = onTouchCancel.bind(this);
			this.onItemTouchContextMenuBindedFunctionVariable = onItemTouchContextMenu.bind(
				this
			);

			this.limberGridMouseDownCheckTimeOutVariable = null;
			this.limberGridTouchStartCheckTimeOutVariable = null;

			if (
				this.options.moveGuideRadius != undefined &&
				this.options.moveGuideRadius != null
			) {
				if (typeof this.options.moveGuideRadius == "number") {
					this.MOVE_GUIDE_RADIUS = this.options.moveGuideRadius;
				}
			}

			if (
				this.options.resizeSquareGuideLength != undefined &&
				this.options.resizeSquareGuideLength != null
			) {
				if (typeof this.options.resizeSquareGuideLength == "number") {
					this.RESIZE_SQUARE_GUIDE_LENGTH = this.options.resizeSquareGuideLength;
				}
			}

			if (
				this.options.resizeSquareBorderGuideWidth != undefined &&
				this.options.resizeSquareBorderGuideWidth != null
			) {
				if (
					typeof this.options.resizeSquareBorderGuideWidth == "number"
				) {
					this.RESIZE_SQUARE_BORDER_GUIDE_WIDTH = this.options.resizeSquareBorderGuideWidth;
				}
			}
		}

		if (
			this.callbacks.onItemClickCallback != undefined &&
			this.callbacks.onItemClickCallback != null
		) {
			this.onItemClickFunctionVariable = onItemClick.bind(this);
		}

		if (this.options.reRenderOnResize != false) {
			this.onWindowResizeFunctionVariable = onWindowResize.bind(this);
			this.onWindowResizeTimerCallbackFunctionVariable = onWindowResizeTimerCallback.bind(
				this
			);
			window.addEventListener(
				"resize",
				this.onWindowResizeFunctionVariable
			);
		}

		this.init(this.initialGridData.gridWidth, this.options.autoArrange);
	}

	LimberGridView.prototype.init = function(initialGridWidth, autoArrange) {
		if (this.options.el.indexOf("#") != 0) {
			throw "DOM Element with Id required";
		} else {
			this.$body = document.getElementsByTagName("body");
			this.elementID = this.options.el.substring(
				1,
				this.options.el.length
			);
			this.pseudoElementID =
				"limberGridViewPseudoContainer_" + this.elementID;
			this.$el = document.getElementById(
				this.options.el.substring(1, this.options.el.length)
			);
			this.$body[0].insertAdjacentHTML(
				"beforeend",
				'<div id = "' +
					this.pseudoElementID +
					'" class = "limberGridViewPseudoContainer"></div>'
			);
			this.$bodyPseudoEl = document.getElementById(this.pseudoElementID);
		}

		this.$el.innerHTML =
			'<div class = "limberGridViewContainer"><style></style><div class = "limberGridView"></div><div class = "limberGridViewLicense"><div class = "limberGridViewLicenseIcon">i</div><div class = "limberGridViewLicenseDetails">LimberGridView Copyright (c) 2018, Subendra Kumar Sharma. License: GNU General Public License version 3, or (at your option) any later version.</div></div></div>';
		this.$limberGridViewContainer = this.$el.querySelectorAll(
			".limberGridViewContainer"
		);
		this.$limberGridViewStyle = this.$el.getElementsByTagName("style");
		this.$limberGridView = this.$el.querySelectorAll(".limberGridView");

		this.PADDING_LEFT = parseInt(
			window
				.getComputedStyle(this.$limberGridView[0], null)
				.getPropertyValue("padding-left")
		);
		this.PADDING_RIGHT = parseInt(
			window
				.getComputedStyle(this.$limberGridView[0], null)
				.getPropertyValue("padding-right")
		);
		this.PADDING_TOP = parseInt(
			window
				.getComputedStyle(this.$limberGridView[0], null)
				.getPropertyValue("padding-top")
		);
		this.PADDING_BOTTOM = parseInt(
			window
				.getComputedStyle(this.$limberGridView[0], null)
				.getPropertyValue("padding-bottom")
		);

		this.WIDTH =
			this.$limberGridView[0].clientWidth -
			this.PADDING_LEFT -
			this.PADDING_RIGHT;
		this.HEIGHT =
			this.$limberGridView[0].clientHeight -
			this.PADDING_TOP -
			this.PADDING_BOTTOM;

		if (
			(initialGridWidth == undefined || initialGridWidth == null) &&
			this.positionData.length == 0
		) {
			initialGridWidth = this.WIDTH;
		}

		this.WIDTH_SCALE_FACTOR = this.WIDTH / initialGridWidth;

		if (autoArrange == true) {
			var positionData = JSON.parse(JSON.stringify(this.positionData));
			var remainingItems = [];
			var length_0 = positionData.length;
			for (var i = 0; i < length_0; i++) {
				remainingItems.push(i);
				positionData[i].width =
					positionData[i].width * this.WIDTH_SCALE_FACTOR;
				positionData[i].height =
					positionData[i].height * this.WIDTH_SCALE_FACTOR;
				if (positionData[i].width > this.WIDTH) {
					positionData[i].width = this.WIDTH;
				}
			}
			this.positionData = this.fitRemainingItemsBelowDeepestLine(
				0,
				positionData,
				remainingItems,
				[]
			).positionData;
		} else {
			if (
				this.initialGridData.margin != undefined &&
				this.initialGridData.margin != null
			) {
				if (
					typeof this.initialGridData.margin == "number" &&
					this.initialGridData.margin > 0
				) {
					this.MARGIN = this.initialGridData.margin;
					this.MARGIN = this.MARGIN * this.WIDTH_SCALE_FACTOR;
				} else {
					throw "Margin is required for rendering with position coordinates";
				}
			} else {
				throw "Margin is required for rendering with position coordinates";
			}
		}
	};

	// ----------------------------------------------------------------------------------------- //

	// ---------------------------------- GETTERS AND SETTERS ---------------------------------- //

	// ----------------------------------------------------------------------------------------- //

	LimberGridView.prototype.getGridData = function() {
		var gridData = {
			gridHeight: this.HEIGHT,
			gridWidth: this.WIDTH,
			margin: this.MARGIN,
			initialPositionData: JSON.parse(JSON.stringify(this.positionData))
		};
		return gridData;
	};

	LimberGridView.prototype.setAddOrCutSpace = function(flag) {
		if (flag == "ADD" || flag == "CUTSPACE") {
			this.ADD_OR_CUTSPACE_TOGGLE = flag;
		}
	};

	// ----------------------------------------------------------------------------------------- //

	// ---------------------------------- GETTERS AND SETTERS END ------------------------------ //

	// ----------------------------------------------------------------------------------------- //

	// ----------------------------------------------------------------------------------------- //

	// --------------------------------------- RENDERERS --------------------------------------- //

	// ----------------------------------------------------------------------------------------- //

	LimberGridView.prototype.render = function(positionData, scale = true) {
		this.unInitializeEvents();

		if (positionData === undefined || positionData === null) {
			var positionData = this.positionData;
		}
		if (scale == true) {
			var WIDTH_SCALE_FACTOR = this.WIDTH_SCALE_FACTOR;
		} else {
			var WIDTH_SCALE_FACTOR = 1;
		}

		var classList = ["limberGridViewItem"];
		if (this.options.editable == true) {
			classList.push("limberGridViewItemEditable");
		}
		var classListString = classList.join(" ");

		var html = [];

		// dev Code
		var t0 = performance.now();
		// dev Code END

		if (!this.isMobile()) {
			if (this.options.dataType == "string") {
				var length_0 = positionData.length;
				for (var i = 0; i < length_0; i++) {
					positionData[i].width *= WIDTH_SCALE_FACTOR;
					if (positionData[i].width > this.WIDTH) {
						positionData[i].width = this.WIDTH;
					}
					var front =
						'<div class = "' +
						classListString +
						'" data-index = "' +
						i +
						'" ';
					var style_1 =
						'style = "transform : translate(' +
						(positionData[i].x *= WIDTH_SCALE_FACTOR) +
						"px, ";
					var style_2 =
						(positionData[i].y *= WIDTH_SCALE_FACTOR) + "px); ";
					var style_3 = "width : " + positionData[i].width + "px; ";
					var style_4 =
						"height : " +
						(positionData[i].height *= WIDTH_SCALE_FACTOR) +
						"px; ";
					var style_5 = '">';

					var style = style_1 + style_2 + style_3 + style_4 + style_5;

					var bodyFront = "<div>";
					var bodyEnd = "</div>";
					var userData = this.callbacks.getItemRenderDataCallback(
						i,
						positionData[i].width,
						positionData[i].height,
						"render"
					);

					var body = bodyFront + userData + bodyEnd;
					var end = "</div>";

					var item = front + style + body + end;

					html.push(item);
				}
			} else if (this.options.dataType == "node") {
				this.$limberGridViewContainer[0].removeChild(
					this.$limberGridView[0]
				);

				var length_0 = positionData.length;
				for (var i = 0; i < length_0; i++) {
					positionData[i].width *= WIDTH_SCALE_FACTOR;
					if (positionData[i].width > this.WIDTH) {
						positionData[i].width = this.WIDTH;
					}
					var div = document.createElement("div");
					var attribute = document.createAttribute("data-index");
					attribute.value = i;
					div.setAttributeNode(attribute);
					if (classList.length > 0) {
						div.classList.add(classList[0]);
						div.classList.add(classList[1]);
					} else {
						div.classList.add(classList[0]);
					}
					div.style.transform =
						"translate(" +
						(positionData[i].x *= WIDTH_SCALE_FACTOR) +
						"px, " +
						(positionData[i].y *= WIDTH_SCALE_FACTOR) +
						"px)";
					div.style.width = positionData[i].width + "px";
					div.style.height =
						(positionData[i].height *= WIDTH_SCALE_FACTOR) + "px";

					var userData = this.callbacks.getItemRenderDataCallback(
						i,
						positionData[i].width,
						positionData[i].height,
						"render"
					);
					if (typeof userData == "string") {
						div.innerHTML = userData;
					} else {
						div.appendChild(userData);
					}
					this.$limberGridView[0].appendChild(div);
				}
				this.$limberGridViewContainer[0].appendChild(
					this.$limberGridView[0]
				);
			}
		} else {
			this.serializedPositionData = getRowSequence.call(this, true);
			if (this.options.dataType == "string") {
				var length_0 = positionData.length;
				for (var i = 0; i < length_0; i++) {
					positionData[i].width *= WIDTH_SCALE_FACTOR;
					positionData[i].height *= WIDTH_SCALE_FACTOR;
					positionData[i].x *= WIDTH_SCALE_FACTOR;
					positionData[i].y *= WIDTH_SCALE_FACTOR;
					if (positionData[i].width > this.WIDTH) {
						positionData[i].width = this.WIDTH;
					}
					var front =
						'<div class = "limberGridViewItem" data-index = "' +
						i +
						'" ';
					var style_1 =
						'style = "transform : translate(' + 0 + "px, ";
					var style_2 =
						(this.WIDTH / this.MOBILE_ASPECT_RATIO +
							getMarginAtPoint.call(
								this,
								this.serializedPositionData.map[i]
							)) *
							this.serializedPositionData.map[i] +
						"px); ";
					var style_3 = "width : " + this.WIDTH + "px; ";
					var style_4 =
						"height : " +
						this.WIDTH / this.MOBILE_ASPECT_RATIO +
						"px; ";
					var style_5 = '">';

					var style = style_1 + style_2 + style_3 + style_4 + style_5;

					var bodyFront = "<div>";
					var bodyEnd = "</div>";
					var userData = this.callbacks.getItemRenderDataCallback(
						i,
						this.WIDTH,
						this.WIDTH / this.MOBILE_ASPECT_RATIO,
						"render"
					);

					var body = bodyFront + userData + bodyEnd;
					var end = "</div>";

					var item = front + style + body + end;

					html.push(item);
				}
			} else if (this.options.dataType == "node") {
				this.$limberGridViewContainer[0].removeChild(
					this.$limberGridView[0]
				);

				var length_0 = positionData.length;
				for (var i = 0; i < length_0; i++) {
					positionData[i].width *= WIDTH_SCALE_FACTOR;
					positionData[i].height *= WIDTH_SCALE_FACTOR;
					positionData[i].x *= WIDTH_SCALE_FACTOR;
					positionData[i].y *= WIDTH_SCALE_FACTOR;
					if (positionData[i].width > this.WIDTH) {
						positionData[i].width = this.WIDTH;
					}
					var div = document.createElement("div");
					var attribute = document.createAttribute("data-index");
					attribute.value = i;
					div.setAttributeNode(attribute);
					div.classList.add("limberGridViewItem");

					div.style.transform =
						"translate(" +
						0 +
						"px, " +
						(this.WIDTH / this.MOBILE_ASPECT_RATIO +
							getMarginAtPoint.call(
								this,
								this.serializedPositionData.map[i]
							)) *
							this.serializedPositionData.map[i] +
						"px)";
					div.style.width = this.WIDTH + "px";
					div.style.height =
						this.WIDTH / this.MOBILE_ASPECT_RATIO + "px";

					var userData = this.callbacks.getItemRenderDataCallback(
						i,
						this.WIDTH,
						this.WIDTH / this.MOBILE_ASPECT_RATIO,
						"render"
					);
					if (typeof userData == "string") {
						div.innerHTML = userData;
					} else {
						div.appendChild(userData);
					}
					this.$limberGridView[0].appendChild(div);
				}
				this.$limberGridViewContainer[0].appendChild(
					this.$limberGridView[0]
				);
			}
		}

		if (this.options.dataType == "string") {
			this.$limberGridView[0].innerHTML = html.join("");
		}

		// dev Code
		var t1 = performance.now();
		console.log(t0);
		console.log(t1);
		console.log(t1 - t0);
		// dev Code END

		this.$limberGridViewItems = this.$limberGridView[0].querySelectorAll(
			".limberGridViewItem"
		);

		this.renderPseudoElements(positionData);

		this.initializeVariables();
		this.initializeEvents();

		if (
			this.callbacks.renderComplete != undefined &&
			this.callbacks.renderComplete != null
		) {
			this.callbacks.renderComplete();
		}
	};

	LimberGridView.prototype.renderPseudoElements = function(positionData) {
		if (this.$limberGridViewGridPseudoItems != undefined) {
			var length_0 = this.positionData.length;
			for (var i = 0; i < length_0; i++) {
				this.$limberGridViewGridPseudoItems[0].parentNode.removeChild(
					this.$limberGridViewGridPseudoItems[0]
				);
			}
			this.$limberGridViewGridPseudoItems = undefined;
			this.$limberGridViewBodyPseudoItems = undefined;
		}

		var gridHtml = [];
		var bodyHtml = [];

		if (!this.isMobile()) {
			var length_0 = positionData.length;
			for (var i = 0; i < length_0; i++) {
				var gridFront =
					'<div class = "limberGridViewGridPseudoItem" data-index = "' +
					i +
					'" ';
				var bodyFront =
					'<div class = "limberGridViewBodyPseudoItem" data-index = "' +
					i +
					'" ';
				var style_1 =
					'style = "transform : translate(' +
					positionData[i].x +
					"px, ";
				var style_2 = positionData[i].y + "px); ";
				var style_3 = "width : " + positionData[i].width + "px; ";
				var style_4 = "height : " + positionData[i].height + "px; ";
				var style_5 = '">';

				var style = style_1 + style_2 + style_3 + style_4 + style_5;

				var end = "</div>";

				var gridItem = gridFront + style + end;
				var bodyItem = bodyFront + style + end;

				gridHtml.push(gridItem);
				bodyHtml.push(bodyItem);
			}
		} else {
			var length_0 = positionData.length;
			for (var i = 0; i < length_0; i++) {
				var gridFront =
					'<div class = "limberGridViewGridPseudoItem" data-index = "' +
					i +
					'" ';
				var bodyFront =
					'<div class = "limberGridViewBodyPseudoItem" data-index = "' +
					i +
					'" ';
				var style_1 = 'style = "transform : translate(' + 0 + "px, ";
				var style_2 =
					(this.WIDTH / this.MOBILE_ASPECT_RATIO +
						getMarginAtPoint.call(
							this,
							this.serializedPositionData.map[i]
						)) *
						this.serializedPositionData.map[i] +
					"px); ";
				var style_3 = "width : " + this.WIDTH + "px; ";
				var style_4 =
					"height : " +
					this.WIDTH / this.MOBILE_ASPECT_RATIO +
					"px; ";
				var style_5 = "margin : " + this.MARGIN + 'px;">';

				var style = style_1 + style_2 + style_3 + style_4 + style_5;

				var end = "</div>";

				var gridItem = gridFront + style + end;
				var bodyItem = bodyFront + style + end;

				gridHtml.push(gridItem);
				bodyHtml.push(bodyItem);
			}
		}
		var limberGridViewMoveGuide =
			'<div class = "limberGridViewMoveGuide"></div>';
		var limberGridViewHeightAdjustGuide =
			'<div class = "limberGridViewHeightAdjustGuide"></div>';
		var limberGridViewAddItemGuide =
			'<div class = "limberGridViewAddItemGuide"></div>';
		var limberGridViewAddItemOnTouchHoldGuide =
			'<div class = "limberGridViewAddItemOnTouchHoldGuide"></div>';
		gridHtml.push(limberGridViewMoveGuide);
		gridHtml.push(limberGridViewHeightAdjustGuide);
		gridHtml.push(limberGridViewAddItemGuide);
		gridHtml.push(limberGridViewAddItemOnTouchHoldGuide);

		this.$bodyPseudoEl.innerHTML = bodyHtml.join("");
		this.$limberGridView[0].insertAdjacentHTML(
			"beforeend",
			gridHtml.join("")
		);
		this.$limberGridViewGridPseudoItems = this.$limberGridView[0].getElementsByClassName(
			"limberGridViewGridPseudoItem"
		);
		this.$limberGridViewBodyPseudoItems = this.$bodyPseudoEl.getElementsByClassName(
			"limberGridViewBodyPseudoItem"
		);
		this.$limberGridViewMoveGuide = this.$limberGridView[0].getElementsByClassName(
			"limberGridViewMoveGuide"
		);
		this.$limberGridViewHeightAdjustGuide = this.$limberGridView[0].getElementsByClassName(
			"limberGridViewHeightAdjustGuide"
		);
		this.$limberGridViewAddItemGuide = this.$limberGridView[0].getElementsByClassName(
			"limberGridViewAddItemGuide"
		);
		this.$limberGridViewAddItemOnTouchHoldGuide = this.$limberGridView[0].getElementsByClassName(
			"limberGridViewAddItemOnTouchHoldGuide"
		);
	};

	LimberGridView.prototype.renderItems = function(
		items,
		scale = true,
		processType = "onDemand"
	) {
		this.unInitializeEvents();
		var scrollTop = this.$limberGridView[0].scrollTop;
		if (scale == true) {
			var WIDTH_SCALE_FACTOR = this.WIDTH_SCALE_FACTOR;
		} else {
			var WIDTH_SCALE_FACTOR = 1;
		}

		var classList = ["limberGridViewItem"];
		if (this.options.editable == true) {
			classList.push("limberGridViewItemEditable");
		}

		var html = [];

		// dev Code
		var t0 = performance.now();
		// dev Code END
		if (!this.isMobile()) {
			this.$limberGridViewContainer[0].removeChild(
				this.$limberGridView[0]
			);
			var length_0 = items.length;
			for (var i = 0; i < length_0; i++) {
				this.positionData[items[i]].width *= WIDTH_SCALE_FACTOR;
				if (this.positionData[items[i]].width > this.WIDTH) {
					this.positionData[items[i]].width = this.WIDTH;
				}
				var div = document.createElement("div");
				var attribute = document.createAttribute("data-index");
				attribute.value = items[i];
				div.setAttributeNode(attribute);

				if (classList.length > 0) {
					div.classList.add(classList[0]);
					div.classList.add(classList[1]);
				} else {
					div.classList.add(classList[0]);
				}

				div.style.transform =
					"translate(" +
					(this.positionData[items[i]].x *= WIDTH_SCALE_FACTOR) +
					"px, " +
					(this.positionData[items[i]].y *= WIDTH_SCALE_FACTOR) +
					"px)";
				div.style.width = this.positionData[items[i]].width + "px";
				div.style.height =
					(this.positionData[items[i]].height *= WIDTH_SCALE_FACTOR) +
					"px";

				var userData = this.callbacks.getItemRenderDataCallback(
					items[i],
					this.positionData[items[i]].width,
					this.positionData[items[i]].height,
					processType
				);
				if (typeof userData == "string") {
					div.innerHTML = userData;
				} else {
					div.appendChild(userData);
				}

				if (
					this.$limberGridViewItems[items[i]] == undefined ||
					this.$limberGridViewItems[items[i]] == null
				) {
					this.$limberGridView[0].appendChild(div);
				} else {
					this.$limberGridView[0].replaceChild(
						div,
						this.$limberGridViewItems[items[i]]
					);
				}
			}
			this.$limberGridViewContainer[0].appendChild(
				this.$limberGridView[0]
			);
		} else {
			this.$limberGridViewContainer[0].removeChild(
				this.$limberGridView[0]
			);
			var length_0 = items.length;
			for (var i = 0; i < length_0; i++) {
				var div = document.createElement("div");
				var attribute = document.createAttribute("data-index");
				attribute.value = items[i];
				div.setAttributeNode(attribute);

				div.classList.add("limberGridViewItem");
				div.style.transform =
					"translate(" +
					0 +
					"px, " +
					(this.WIDTH / this.MOBILE_ASPECT_RATIO +
						getMarginAtPoint.call(
							this,
							this.serializedPositionData.map[items[i]]
						)) *
						this.serializedPositionData.map[items[i]] +
					"px)";
				div.style.width = this.WIDTH + "px";
				div.style.height = this.WIDTH / this.MOBILE_ASPECT_RATIO + "px";

				var userData = this.callbacks.getItemRenderDataCallback(
					items[i],
					this.WIDTH,
					this.WIDTH / this.MOBILE_ASPECT_RATIO,
					processType
				);
				if (typeof userData == "string") {
					div.innerHTML = userData;
				} else {
					div.appendChild(userData);
				}

				if (
					this.$limberGridViewItems[items[i]] == undefined ||
					this.$limberGridViewItems[items[i]] == null
				) {
					this.$limberGridView[0].appendChild(div);
				} else {
					this.$limberGridView[0].replaceChild(
						div,
						this.$limberGridViewItems[items[i]]
					);
				}
			}
			this.$limberGridViewContainer[0].appendChild(
				this.$limberGridView[0]
			);
		}

		// dev Code
		var t1 = performance.now();
		console.log(t0);
		console.log(t1);
		console.log(t1 - t0);
		// dev Code END
		this.$limberGridViewItems = this.$limberGridView[0].querySelectorAll(
			".limberGridViewItem"
		);

		this.renderPseudoItems(items);

		this.initializeVariables();
		this.initializeEvents();

		var renderDetails = {
			items: JSON.parse(JSON.stringify(items)),
			scale: scale,
			processType: processType
		};

		if (
			this.callbacks.itemsRenderComplete != undefined &&
			this.callbacks.itemsRenderComplete != null &&
			processType != "addItems" &&
			processType != "resizeItems" &&
			processType != "removeItems" &&
			processType != "addItemInteractive"
		) {
			this.$limberGridView[0].scrollTop = scrollTop;
			this.callbacks.itemsRenderComplete(
				renderDetails.items,
				scale,
				processType,
				scrollTop
			);
		}

		return renderDetails;
	};

	LimberGridView.prototype.renderPseudoItems = function(items) {
		var gridHtml = [];
		var bodyHtml = [];

		if (!this.isMobile()) {
			this.$limberGridViewContainer[0].removeChild(
				this.$limberGridView[0]
			);
			this.$body[0].removeChild(this.$bodyPseudoEl);
			var length_0 = items.length;
			for (var i = 0; i < length_0; i++) {
				var divGrid = document.createElement("div");
				var attributeGrid = document.createAttribute("data-index");
				attributeGrid.value = items[i];
				divGrid.setAttributeNode(attributeGrid);
				divGrid.classList.add("limberGridViewGridPseudoItem");
				divGrid.style.transform =
					"translate(" +
					this.positionData[items[i]].x +
					"px, " +
					this.positionData[items[i]].y +
					"px)";
				divGrid.style.width = this.positionData[items[i]].width + "px";
				divGrid.style.height =
					this.positionData[items[i]].height + "px";

				var divBody = document.createElement("div");
				var attributeBody = document.createAttribute("data-index");
				attributeBody.value = items[i];
				divBody.setAttributeNode(attributeBody);
				divBody.classList.add("limberGridViewBodyPseudoItem");
				divBody.style.transform = "translate(" + 0 + "px, " + 0 + "px)";
				divBody.style.width = this.positionData[items[i]].width + "px";
				divBody.style.height =
					this.positionData[items[i]].height + "px";

				if (
					this.$limberGridViewGridPseudoItems[items[i]] ==
						undefined ||
					this.$limberGridViewGridPseudoItems[items[i]] == null
				) {
					this.$limberGridView[0].appendChild(divGrid);
					this.$bodyPseudoEl.appendChild(divBody);
				} else {
					this.$limberGridView[0].replaceChild(
						divGrid,
						this.$limberGridViewGridPseudoItems[items[i]]
					);
					this.$bodyPseudoEl.replaceChild(
						divBody,
						this.$limberGridViewBodyPseudoItems[items[i]]
					);
				}
			}
			this.$limberGridViewContainer[0].appendChild(
				this.$limberGridView[0]
			);
			this.$body[0].appendChild(this.$bodyPseudoEl);
		} else {
			this.$limberGridViewContainer[0].removeChild(
				this.$limberGridView[0]
			);
			this.$body[0].removeChild(this.$bodyPseudoEl);
			var length_0 = items.length;
			for (var i = 0; i < length_0; i++) {
				var divGrid = document.createElement("div");
				var attributeGrid = document.createAttribute("data-index");
				attributeGrid.value = items[i];
				divGrid.setAttributeNode(attributeGrid);
				divGrid.classList.add("limberGridViewGridPseudoItem");
				divGrid.style.transform =
					"translate(" +
					0 +
					"px, " +
					(this.WIDTH / this.MOBILE_ASPECT_RATIO +
						getMarginAtPoint.call(
							this,
							this.serializedPositionData.map[i]
						)) *
						this.serializedPositionData.map[i] +
					"px)";
				divGrid.style.width = this.WIDTH + "px";
				divGrid.style.height =
					this.WIDTH / this.MOBILE_ASPECT_RATIO + "px";

				var divBody = document.createElement("div");
				var attributeBody = document.createAttribute("data-index");
				attributeBody.value = items[i];
				divBody.setAttributeNode(attributeBody);
				divBody.classList.add("limberGridViewBodyPseudoItem");
				divBody.style.transform = "translate(" + 0 + "px, " + 0 + "px)";
				divBody.style.width = this.WIDTH + "px";
				divBody.style.height =
					this.WIDTH / this.MOBILE_ASPECT_RATIO + "px";

				if (
					this.$limberGridViewGridPseudoItems[items[i]] ==
						undefined ||
					this.$limberGridViewGridPseudoItems[items[i]] == null
				) {
					this.$limberGridView[0].appendChild(divGrid);
					this.$bodyPseudoEl.appendChild(divBody);
				} else {
					this.$limberGridView[0].replaceChild(
						divGrid,
						this.$limberGridViewGridPseudoItems[items[i]]
					);
					this.$bodyPseudoEl.replaceChild(
						divBody,
						this.$limberGridViewBodyPseudoItems[items[i]]
					);
				}
			}
			this.$limberGridViewContainer[0].appendChild(
				this.$limberGridView[0]
			);
			this.$body[0].appendChild(this.$bodyPseudoEl);
		}

		this.$limberGridViewGridPseudoItems = this.$limberGridView[0].getElementsByClassName(
			"limberGridViewGridPseudoItem"
		);
		this.$limberGridViewBodyPseudoItems = this.$bodyPseudoEl.getElementsByClassName(
			"limberGridViewBodyPseudoItem"
		);
	};

	// ----------------------------------------------------------------------------------------- //

	// --------------------------------------- RENDERERS END ----------------------------------- //

	// ----------------------------------------------------------------------------------------- //

	// ----------------------------------------------------------------------------------------- //

	// ------------------------------------ ADD OR REMOVE ITEMS -------------------------------- //

	// ----------------------------------------------------------------------------------------- //

	LimberGridView.prototype.removeItems = function(itemsIndices) {
		this.unInitializeEvents();

		var scrollTop = this.$limberGridView[0].scrollTop;

		var itemsToRender = [];
		var length_0 = this.positionData.length - 1;
		for (var i = length_0; i >= 0; i--) {
			var index = i;

			itemsToRender.push(length_0 - i);
		}

		itemsIndices.sort(function(a, b) {
			return Number(a) - Number(b);
		});
		var length_0 = itemsIndices.length - 1;
		for (var i = length_0; i >= 0; i--) {
			var index = itemsIndices[i];
			this.positionData.splice(index, 1);

			var item = this.$limberGridViewItems[index];
			var pseudoGridItem = this.$limberGridViewGridPseudoItems[index];
			var pseudoBodyItem = this.$limberGridViewBodyPseudoItems[index];

			this.$limberGridView[0].removeChild(item);
			this.$limberGridView[0].removeChild(pseudoGridItem);
			this.$bodyPseudoEl.removeChild(pseudoBodyItem);

			this.$limberGridViewItems = this.$limberGridView[0].querySelectorAll(
				".limberGridViewItem"
			);
			this.$limberGridViewGridPseudoItems = this.$limberGridView[0].getElementsByClassName(
				"limberGridViewGridPseudoItem"
			);
			this.$limberGridViewBodyPseudoItems = this.$bodyPseudoEl.getElementsByClassName(
				"limberGridViewBodyPseudoItem"
			);
		}

		itemsToRender.splice(this.positionData.length);

		if (this.isMobile()) {
			this.serializedPositionData = getRowSequence.call(this, true);
		}

		this.renderItems(itemsToRender, false, "removeItems");

		if (
			this.callbacks.removeCompleteCallback != undefined &&
			this.callbacks.removeCompleteCallback != null
		) {
			this.$limberGridView[0].scrollTop = scrollTop;
			this.callbacks.removeCompleteCallback(itemsIndices);
		}
	};

	LimberGridView.prototype.addItems = function(
		howMany = 1,
		itemWidth = 100,
		itemHeight = 100
	) {
		if (howMany == 0) {
			return;
		}

		if (itemWidth > this.WIDTH) {
			return;
		}

		var startingY = 0;
		var length_0 = this.positionData.length;
		for (var i = 0; i < length_0; i++) {
			if (
				this.positionData[i].y + this.positionData[i].height >
				startingY
			) {
				startingY =
					this.positionData[i].y + this.positionData[i].height;
			}
		}
		startingY = startingY + getMarginAtPoint.call(this, startingY);

		var items = [];

		var scrollToPosition = startingY;

		var remainingItems = howMany;
		var remainingWidth = this.WIDTH;
		while (remainingItems != 0) {
			var startingX = 0;
			while (
				remainingWidth >
					itemWidth + getMarginAtPoint.call(this, startingX) &&
				remainingItems != 0
			) {
				var item = {
					x: getMarginAtPoint.call(this, startingX) + startingX,
					y: startingY,
					width: itemWidth,
					height: itemHeight
				};

				remainingWidth =
					remainingWidth -
					itemWidth -
					getMarginAtPoint.call(this, startingX);
				startingX =
					startingX +
					getMarginAtPoint.call(this, startingX) +
					itemWidth;
				remainingItems--;
				items.push(item);
			}
			remainingWidth = this.WIDTH;
			startingY = startingY + itemHeight + this.MARGIN;
		}

		var scrollHeight = this.$limberGridView[0].scrollHeight;

		var renderDetails = this.addItemsAtPositions(items, false, "addItems");

		if (!this.isMobile()) {
			this.$limberGridView[0].scrollTop = scrollToPosition;
		} else {
			this.$limberGridView[0].scrollTop = scrollHeight;
		}

		if (
			this.callbacks.addCompleteCallback != undefined &&
			this.callbacks.addCompleteCallback != null
		) {
			this.callbacks.addCompleteCallback(
				renderDetails.items,
				itemWidth,
				itemHeight,
				"addItems"
			);
		}
	};

	LimberGridView.prototype.addItemsAtPositions = function(
		items,
		scale = true,
		processType = "onDemand"
	) {
		var addArray = [];
		var startingIndex = this.positionData.length;

		var length_0 = items.length;
		for (var i = 0; i < length_0; i++) {
			addArray.push(startingIndex + i);
			if (this.isMobile()) {
				this.serializedPositionData.list.push(startingIndex + i);
				this.serializedPositionData.map[startingIndex + i] =
					this.serializedPositionData.list.length - 1;
			}
			this.positionData.push(items[i]);
		}

		var renderDetails = this.renderItems(addArray, scale, processType);

		return renderDetails;
	};

	// ----------------------------------------------------------------------------------------- //

	// ------------------------------------ ADD OR REMOVE ITEMS END ---------------------------- //

	// ----------------------------------------------------------------------------------------- //

	// ----------------------------------------------------------------------------------------- //

	// --------------------------- EVENT INITIALIZERS AND UNINITIALIZERS ----------------------- //

	// ----------------------------------------------------------------------------------------- //

	LimberGridView.prototype.reInitializeEvents = function() {
		this.unInitializeEvents();
		this.initializeEvents();
	};

	LimberGridView.prototype.initializeVariables = function() {};

	LimberGridView.prototype.initializeEvents = function() {
		if (this.options.editable == true) {
			if (this.isMobile() == false) {
				if (this.options.enableInteractiveAddAndCut != false) {
					this.$limberGridView[0].addEventListener(
						"mousedown",
						this.onLimberGridMouseDownFunctionVariable
					);
					if (this.options.enableTouchInteraction != false) {
						this.$limberGridView[0].addEventListener(
							"touchstart",
							this.onLimberGridTouchStartFunctionVariable
						);
					}
				}
			}

			var length_0 = this.$limberGridViewItems.length;
			for (var i = 0; i < length_0; i++) {
				if (this.isMobile() == false) {
					this.$limberGridViewItems[i].addEventListener(
						"mousedown",
						this.onItemMouseDownFunctionVariable
					);
					if (this.options.enableTouchInteraction != false) {
						this.$limberGridViewItems[i].addEventListener(
							"touchstart",
							this.onItemTouchStartFunctionVariable
						);
					}
				}

				if (
					this.callbacks.onItemClickCallback != undefined &&
					this.callbacks.onItemClickCallback != null
				) {
					this.$limberGridViewItems[i].addEventListener(
						"click",
						this.onItemClickFunctionVariable
					);
				}
			}
		}
	};

	LimberGridView.prototype.unInitializeEvents = function() {
		if (this.options.editable == true) {
			if (this.$limberGridView != undefined) {
				this.$limberGridView[0].removeEventListener(
					"mousedown",
					this.onLimberGridMouseDownFunctionVariable
				);
				this.$limberGridView[0].removeEventListener(
					"touchstart",
					this.onLimberGridTouchStartFunctionVariable
				);
			}

			if (this.$limberGridViewItems != undefined) {
				var length_0 = this.$limberGridViewItems.length;
				for (var i = 0; i < length_0; i++) {
					this.$limberGridViewItems[i].removeEventListener(
						"mousedown",
						this.onItemMouseDownFunctionVariable
					);
					this.$limberGridViewItems[i].removeEventListener(
						"touchstart",
						this.onItemTouchStartFunctionVariable
					);

					this.$limberGridViewItems[i].removeEventListener(
						"click",
						this.onItemClickFunctionVariable
					);
				}
			}
		}
	};

	LimberGridView.prototype.initializeItemTouchEvents = function() {
		if (this.$limberGridViewItems != undefined) {
			var length_0 = this.$limberGridViewItems.length;
			for (var i = 0; i < length_0; i++) {
				this.$limberGridViewItems[i].addEventListener(
					"mousedown",
					this.onItemMouseDownFunctionVariable
				);
				this.$limberGridViewItems[i].addEventListener(
					"touchstart",
					this.onItemTouchStartFunctionVariable
				);
			}
		}
	};

	LimberGridView.prototype.unInitializeItemTouchEvents = function() {
		if (this.$limberGridViewItems != undefined) {
			var length_0 = this.$limberGridViewItems.length;
			for (var i = 0; i < length_0; i++) {
				this.$limberGridViewItems[i].removeEventListener(
					"mousedown",
					this.onItemMouseDownFunctionVariable
				);
				this.$limberGridViewItems[i].removeEventListener(
					"touchstart",
					this.onItemTouchStartFunctionVariable
				);
			}
		}
	};

	// ----------------------------------------------------------------------------------------- //

	// --------------------------- EVENT INITIALIZERS AND UNINITIALIZERS END ------------------- //

	// ----------------------------------------------------------------------------------------- //

	LimberGridView.prototype.isMobile = function() {
		// production
		return window.matchMedia(
			"only screen and (max-width: 1033px) and (min-width : 1px)"
		).matches;
		// production END
		// return window.matchMedia("only screen and (max-width: 900px) and (min-width : 1px)").matches;
		// return false;
		// return true;
	};

	// ----------------------------------------------------------------------------------------- //

	// -------------------------------------- POSITIONING LOGIC -------------------------------- //

	// ----------------------------------------------------------------------------------------- //

	// LimberGridView.prototype.resizePlane = function(index, width, height) {
	// 	if (this.positionData[index].x + width > this.WIDTH) {
	// 		return false;
	// 	}

	// 	if (typeof width != "number" || typeof height != "number") {
	// 		return false;
	// 	}

	// 	if (width < 50 || height < 50) {
	// 		return false;
	// 	}

	// 	var allAffectedItems = this.findAffectedItemsOnResize(
	// 		index,
	// 		width,
	// 		height
	// 	);

	// 	var item = JSON.parse(JSON.stringify(this.positionData[index]));
	// 	item.width = width;
	// 	item.height = height;
	// 	var freeSpaces = this.findFreeSpaces(
	// 		item,
	// 		allAffectedItems.affectedItems
	// 	);

	// 	// NOW MERGE FREE SPACES
	// 	item.doNotMergeFlag = true;
	// 	var mergedFreeSpaces = this.mergeFreeSpaces(freeSpaces, [item]);

	// 	var affectedItemsExceptSelfObjects = [];
	// 	var length_0 = allAffectedItems.affectedItemsExceptSelf.length;
	// 	for (var i = 0; i < length_0; i++) {
	// 		var ind = allAffectedItems.affectedItemsExceptSelf[i];
	// 		affectedItemsExceptSelfObjects[i] = JSON.parse(
	// 			JSON.stringify(
	// 				this.positionData[
	// 					allAffectedItems.affectedItemsExceptSelf[i]
	// 				]
	// 			)
	// 		);
	// 		affectedItemsExceptSelfObjects[i].index = ind;
	// 	}

	// 	var fitDetails = this.fitItemsIntoFreeSpaces(
	// 		affectedItemsExceptSelfObjects,
	// 		JSON.parse(JSON.stringify(mergedFreeSpaces)),
	// 		[item]
	// 	);
	// 	var fittedItems = fitDetails.repositionedItems;

	// 	var positionData = JSON.parse(JSON.stringify(this.positionData));
	// 	var length_0 = fittedItems.length;
	// 	for (var i = 0; i < length_0; i++) {
	// 		var ind = fittedItems[i].index;
	// 		positionData[ind].x = fittedItems[i].x;
	// 		positionData[ind].y = fittedItems[i].y;
	// 	}
	// 	positionData[index].width = width;
	// 	positionData[index].height = height;

	// 	var remainingItems = [];
	// 	var length_0 = allAffectedItems.affectedItemsExceptSelf.length;
	// 	var length_1 = fittedItems.length;
	// 	for (var i = 0; i < length_0; i++) {
	// 		var fittedFlag = false;
	// 		for (var j = 0; j < length_1; j++) {
	// 			if (
	// 				allAffectedItems.affectedItemsExceptSelf[i] ==
	// 				fittedItems[j].index
	// 			) {
	// 				fittedFlag = true;
	// 				break;
	// 			}
	// 		}
	// 		if (fittedFlag == false) {
	// 			remainingItems.push(
	// 				allAffectedItems.affectedItemsExceptSelf[i]
	// 			);
	// 		}
	// 	}

	// 	var positionData = this.fitRemainingItems(
	// 		positionData,
	// 		remainingItems,
	// 		allAffectedItems,
	// 		index,
	// 		JSON.parse(JSON.stringify(fitDetails))
	// 	);

	// 	var length_0 = positionData.length;
	// 	for (var i = 0; i < length_0; i++) {
	// 		this.$limberGridViewItems[i].style.transform =
	// 			"translate(" +
	// 			positionData[i].x +
	// 			"px, " +
	// 			positionData[i].y +
	// 			"px)";
	// 		this.$limberGridViewItems[i].classList.remove(
	// 			"limberGridViewItemDemo",
	// 			"limberGridViewItemResizingState"
	// 		);
	// 	}

	// 	this.positionData = positionData;

	// 	var scrollTop = this.$limberGridView[0].scrollTop;
	// 	this.renderItems([index], false, "resizeItems");
	// 	this.$limberGridView[0].scrollTop = scrollTop;
	// };

	// LimberGridView.prototype.resizePlaneDemo = function(index, width, height) {
	// 	if (this.positionData[index].x + width > this.WIDTH) {
	// 		return false;
	// 	}

	// 	if (typeof width != "number" || typeof height != "number") {
	// 		return false;
	// 	}

	// 	if (width < 50 || height < 50) {
	// 		return false;
	// 	}

	// 	var length_0 = this.$limberGridViewItems.length;
	// 	for (var i = 0; i < length_0; i++) {
	// 		this.$limberGridViewItems[i].style.transform =
	// 			"translate(" +
	// 			this.positionData[i].x +
	// 			"px, " +
	// 			this.positionData[i].y +
	// 			"px)";
	// 		this.$limberGridViewItems[i].classList.remove(
	// 			"limberGridViewItemDemo"
	// 		);
	// 	}

	// 	var allAffectedItems = this.findAffectedItemsOnResize(
	// 		index,
	// 		width,
	// 		height
	// 	);

	// 	var item = JSON.parse(JSON.stringify(this.positionData[index]));
	// 	item.width = width;
	// 	item.height = height;
	// 	var freeSpaces = this.findFreeSpaces(
	// 		item,
	// 		allAffectedItems.affectedItems
	// 	);

	// 	// NOW MERGE FREE SPACES
	// 	item.doNotMergeFlag = true;
	// 	var mergedFreeSpaces = this.mergeFreeSpaces(freeSpaces, [item]);

	// 	var affectedItemsExceptSelfObjects = [];
	// 	var length_0 = allAffectedItems.affectedItemsExceptSelf.length;
	// 	for (var i = 0; i < length_0; i++) {
	// 		var ind = allAffectedItems.affectedItemsExceptSelf[i];
	// 		affectedItemsExceptSelfObjects[i] = JSON.parse(
	// 			JSON.stringify(
	// 				this.positionData[
	// 					allAffectedItems.affectedItemsExceptSelf[i]
	// 				]
	// 			)
	// 		);
	// 		affectedItemsExceptSelfObjects[i].index = ind;
	// 	}

	// 	var fitDetails = this.fitItemsIntoFreeSpaces(
	// 		affectedItemsExceptSelfObjects,
	// 		JSON.parse(JSON.stringify(mergedFreeSpaces)),
	// 		[item]
	// 	);
	// 	var fittedItems = fitDetails.repositionedItems;

	// 	var length_0 = fittedItems.length;
	// 	for (var i = 0; i < length_0; i++) {
	// 		var ind = fittedItems[i].index;
	// 		this.$limberGridViewItems[ind].style.transform =
	// 			"translate(" +
	// 			fittedItems[i].x +
	// 			"px, " +
	// 			fittedItems[i].y +
	// 			"px)";
	// 	}

	// 	this.$limberGridViewItems[index].classList.add(
	// 		"limberGridViewItemDemo"
	// 	);

	// 	var remainingItems = [];
	// 	var length_0 = allAffectedItems.affectedItemsExceptSelf.length;
	// 	var length_1 = fittedItems.length;
	// 	for (var i = 0; i < length_0; i++) {
	// 		var fittedFlag = false;
	// 		for (var j = 0; j < length_1; j++) {
	// 			if (
	// 				allAffectedItems.affectedItemsExceptSelf[i] ==
	// 				fittedItems[j].index
	// 			) {
	// 				fittedFlag = true;
	// 				break;
	// 			}
	// 		}
	// 		if (fittedFlag == false) {
	// 			var ind = allAffectedItems.affectedItemsExceptSelf[i];
	// 			remainingItems.push(
	// 				allAffectedItems.affectedItemsExceptSelf[i]
	// 			);
	// 			this.$limberGridViewItems[ind].classList.add(
	// 				"limberGridViewItemDemo"
	// 			);
	// 		}
	// 	}
	// };

	// LimberGridView.prototype.movePlane = function(index, toX, toY) {
	// 	var allAffectedItems = this.findAffectedItemsOnMove(index, toX, toY);

	// 	var item = JSON.parse(JSON.stringify(this.positionData[index]));
	// 	item.x = toX;
	// 	item.y = toY;
	// 	var freeSpaces = this.findFreeSpaces(
	// 		item,
	// 		allAffectedItems.affectedItems
	// 	);

	// 	// NOW MERGE FREE SPACES
	// 	item.doNotMergeFlag = true;
	// 	var mergedFreeSpaces = this.mergeFreeSpaces(freeSpaces, [item]);

	// 	var affectedItemsExceptSelfObjects = [];
	// 	var length_0 = allAffectedItems.affectedItemsExceptSelf.length;
	// 	for (var i = 0; i < length_0; i++) {
	// 		var ind = allAffectedItems.affectedItemsExceptSelf[i];
	// 		affectedItemsExceptSelfObjects[i] = JSON.parse(
	// 			JSON.stringify(
	// 				this.positionData[
	// 					allAffectedItems.affectedItemsExceptSelf[i]
	// 				]
	// 			)
	// 		);
	// 		affectedItemsExceptSelfObjects[i].index = ind;
	// 	}

	// 	var fitDetails = this.fitItemsIntoFreeSpaces(
	// 		affectedItemsExceptSelfObjects,
	// 		JSON.parse(JSON.stringify(mergedFreeSpaces)),
	// 		[item]
	// 	);
	// 	var fittedItems = fitDetails.repositionedItems;

	// 	var positionData = JSON.parse(JSON.stringify(this.positionData));
	// 	var length_0 = fittedItems.length;
	// 	for (var i = 0; i < length_0; i++) {
	// 		var ind = fittedItems[i].index;
	// 		positionData[ind].x = fittedItems[i].x;
	// 		positionData[ind].y = fittedItems[i].y;
	// 	}
	// 	positionData[index].x = toX;
	// 	positionData[index].y = toY;

	// 	var remainingItems = [];
	// 	var length_0 = allAffectedItems.affectedItemsExceptSelf.length;
	// 	var length_1 = fittedItems.length;
	// 	for (var i = 0; i < length_0; i++) {
	// 		var fittedFlag = false;
	// 		for (var j = 0; j < length_1; j++) {
	// 			if (
	// 				allAffectedItems.affectedItemsExceptSelf[i] ==
	// 				fittedItems[j].index
	// 			) {
	// 				fittedFlag = true;
	// 				break;
	// 			}
	// 		}
	// 		if (fittedFlag == false) {
	// 			remainingItems.push(
	// 				allAffectedItems.affectedItemsExceptSelf[i]
	// 			);
	// 		}
	// 	}

	// 	var positionData = this.fitRemainingItems(
	// 		positionData,
	// 		remainingItems,
	// 		allAffectedItems,
	// 		index,
	// 		JSON.parse(JSON.stringify(fitDetails))
	// 	);

	// 	var length_0 = positionData.length;
	// 	for (var i = 0; i < length_0; i++) {
	// 		this.$limberGridViewItems[i].style.transform =
	// 			"translate(" +
	// 			positionData[i].x +
	// 			"px, " +
	// 			positionData[i].y +
	// 			"px)";
	// 		this.$limberGridViewItems[i].classList.remove(
	// 			"limberGridViewItemDemo"
	// 		);
	// 	}

	// 	this.positionData = positionData;
	// };

	// LimberGridView.prototype.movePlaneDemo = function(index, toX, toY) {
	// 	var length_0 = this.$limberGridViewItems.length;
	// 	for (var i = 0; i < length_0; i++) {
	// 		this.$limberGridViewItems[i].style.transform =
	// 			"translate(" +
	// 			this.positionData[i].x +
	// 			"px, " +
	// 			this.positionData[i].y +
	// 			"px)";
	// 		this.$limberGridViewItems[i].classList.remove(
	// 			"limberGridViewItemDemo"
	// 		);
	// 	}

	// 	var allAffectedItems = this.findAffectedItemsOnMove(index, toX, toY);

	// 	var item = JSON.parse(JSON.stringify(this.positionData[index]));
	// 	item.x = toX;
	// 	item.y = toY;
	// 	var freeSpaces = this.findFreeSpaces(
	// 		item,
	// 		allAffectedItems.affectedItems
	// 	);

	// 	// NOW MERGE FREE SPACES
	// 	item.doNotMergeFlag = true;
	// 	var mergedFreeSpaces = this.mergeFreeSpaces(freeSpaces, [item]);

	// 	var affectedItemsExceptSelfObjects = [];
	// 	var length_0 = allAffectedItems.affectedItemsExceptSelf.length;
	// 	for (var i = 0; i < length_0; i++) {
	// 		var ind = allAffectedItems.affectedItemsExceptSelf[i];
	// 		affectedItemsExceptSelfObjects[i] = JSON.parse(
	// 			JSON.stringify(
	// 				this.positionData[
	// 					allAffectedItems.affectedItemsExceptSelf[i]
	// 				]
	// 			)
	// 		);
	// 		affectedItemsExceptSelfObjects[i].index = ind;
	// 	}

	// 	var fitDetails = this.fitItemsIntoFreeSpaces(
	// 		affectedItemsExceptSelfObjects,
	// 		JSON.parse(JSON.stringify(mergedFreeSpaces)),
	// 		[item]
	// 	);
	// 	var fittedItems = fitDetails.repositionedItems;

	// 	var length_0 = fittedItems.length;
	// 	for (var i = 0; i < length_0; i++) {
	// 		var ind = fittedItems[i].index;
	// 		this.$limberGridViewItems[ind].style.transform =
	// 			"translate(" +
	// 			fittedItems[i].x +
	// 			"px, " +
	// 			fittedItems[i].y +
	// 			"px)";
	// 	}

	// 	this.$limberGridViewItems[index].classList.add(
	// 		"limberGridViewItemDemo"
	// 	);

	// 	var remainingItems = [];
	// 	var length_0 = allAffectedItems.affectedItemsExceptSelf.length;
	// 	var length_1 = fittedItems.length;
	// 	for (var i = 0; i < length_0; i++) {
	// 		var fittedFlag = false;
	// 		for (var j = 0; j < length_1; j++) {
	// 			if (
	// 				allAffectedItems.affectedItemsExceptSelf[i] ==
	// 				fittedItems[j].index
	// 			) {
	// 				fittedFlag = true;
	// 				break;
	// 			}
	// 		}
	// 		if (fittedFlag == false) {
	// 			var ind = allAffectedItems.affectedItemsExceptSelf[i];
	// 			remainingItems.push(
	// 				allAffectedItems.affectedItemsExceptSelf[i]
	// 			);
	// 			this.$limberGridViewItems[ind].classList.add(
	// 				"limberGridViewItemDemo"
	// 			);
	// 		}
	// 	}
	// };

	// LimberGridView.prototype.findFreeSpaces = function(item, affectedItems) {
	// 	var freeSpaces = [];
	// 	var length_0 = affectedItems.length;
	// 	for (var i = 0; i < length_0; i++) {
	// 		var result = this.isPlaneBInsidePlaneA_TouchingIsInside(
	// 			item,
	// 			this.positionData[affectedItems[i]],
	// 			"all"
	// 		);
	// 		if (result.isInside == true) {
	// 			continue;
	// 		} else {
	// 			var fs = this.subtractPlanes(
	// 				this.positionData[affectedItems[i]],
	// 				item
	// 			);
	// 			var length_1 = fs.length;
	// 			for (var j = 0; j < length_1; j++) {
	// 				freeSpaces.push(fs[j]);
	// 			}
	// 		}
	// 	}
	// 	return freeSpaces;
	// };

	// LimberGridView.prototype.mergeFreeSpaces = function(
	// 	freeSpaces,
	// 	itemsNotToMerge
	// ) {
	// 	var mergePlainsFreeSpacesAndItemsNotToMerge = freeSpaces.concat(
	// 		itemsNotToMerge
	// 	);
	// 	var isPlaneInsideStack = function(stack, plane, context) {
	// 		var flag = false;
	// 		var length_0 = stack.length;
	// 		for (var i = 0; i < length_0; i++) {
	// 			if (arePlainsSame(stack[i], plane)) {
	// 				flag = true;
	// 				break;
	// 			}
	// 		}
	// 		return flag;
	// 	};

	// 	var mergedStack = [];
	// 	var length_0 = freeSpaces.length;
	// 	for (var i = 0; i < length_0 - 1; i++) {
	// 		for (var j = i + 1; j < length_0; j++) {
	// 			if (
	// 				!this.isPlaneBInsidePlaneA_TouchingNotInside(
	// 					freeSpaces[i],
	// 					freeSpaces[j]
	// 				)
	// 			) {
	// 				var mergedPlane = this.mergePlains(
	// 					freeSpaces[i],
	// 					freeSpaces[j],
	// 					mergePlainsFreeSpacesAndItemsNotToMerge
	// 				);
	// 				if (mergedPlane != false) {
	// 					if (
	// 						!isPlaneInsideStack(mergedStack, mergedPlane, this)
	// 					) {
	// 						mergedStack.push(mergedPlane);
	// 					}
	// 				}
	// 			}
	// 		}
	// 	}

	// 	var mergeStackItemWithFreeSpaces = function(
	// 		freeSpaces,
	// 		mergedStack,
	// 		mergePlainsFreeSpacesAndItemsNotToMerge,
	// 		context
	// 	) {
	// 		var newStack = [];
	// 		var length_0 = freeSpaces.length;
	// 		var length_1 = mergedStack.length;
	// 		for (var i = 0; i < length_0; i++) {
	// 			for (var j = 0; j < length_1; j++) {
	// 				if (
	// 					!context.isPlaneBInsidePlaneA_TouchingNotInside(
	// 						freeSpaces[i],
	// 						mergedStack[j]
	// 					)
	// 				) {
	// 					var mergedPlane = context.mergePlains(
	// 						freeSpaces[i],
	// 						mergedStack[j],
	// 						mergePlainsFreeSpacesAndItemsNotToMerge
	// 					);
	// 					if (mergedPlane != false) {
	// 						if (
	// 							!isPlaneInsideStack(
	// 								mergedStack.concat(newStack),
	// 								mergedPlane,
	// 								context
	// 							)
	// 						) {
	// 							newStack.push(mergedPlane);
	// 						}
	// 					}
	// 				}
	// 			}
	// 		}
	// 		return newStack;
	// 	};

	// 	var newStack = mergeStackItemWithFreeSpaces(
	// 		freeSpaces,
	// 		mergedStack,
	// 		mergePlainsFreeSpacesAndItemsNotToMerge,
	// 		this
	// 	);

	// 	while (newStack.length > 0) {
	// 		mergedStack = mergedStack.concat(newStack);
	// 		var newStack = mergeStackItemWithFreeSpaces(
	// 			freeSpaces,
	// 			mergedStack,
	// 			mergePlainsFreeSpacesAndItemsNotToMerge,
	// 			this
	// 		);
	// 	}

	// 	mergedStack = mergedStack.concat(freeSpaces);

	// 	var redundantPlanes = {};
	// 	var length_0 = mergedStack.length;
	// 	for (var i = 0; i < length_0 - 1; i++) {
	// 		for (var j = i + 1; j < length_0; j++) {
	// 			var result = this.isPlaneBInsidePlaneA_TouchingIsInside(
	// 				mergedStack[i],
	// 				mergedStack[j],
	// 				"all"
	// 			);
	// 			if (result.isInside) {
	// 				redundantPlanes[j] = true;
	// 			} else {
	// 				var result = this.isPlaneBInsidePlaneA_TouchingIsInside(
	// 					mergedStack[j],
	// 					mergedStack[i],
	// 					"all"
	// 				);
	// 				if (result.isInside) {
	// 					redundantPlanes[i] = true;
	// 				}
	// 			}
	// 		}
	// 	}

	// 	var finalMergedPlanes = [];
	// 	var length_0 = mergedStack.length;
	// 	for (var i = 0; i < length_0; i++) {
	// 		if (!redundantPlanes.hasOwnProperty(i)) {
	// 			finalMergedPlanes.push(mergedStack[i]);
	// 		}
	// 	}

	// 	return finalMergedPlanes;
	// };

	// LimberGridView.prototype.findAffectedItemsOnMove = function(
	// 	index,
	// 	toX,
	// 	toY
	// ) {
	// 	var item = JSON.parse(JSON.stringify(this.positionData[index]));
	// 	item.x = toX;
	// 	item.y = toY;
	// 	var affectedItems = [];
	// 	var affectedItemsExceptSelf = [];

	// 	var length_0 = this.positionData.length;
	// 	for (var i = 0; i < length_0; i++) {
	// 		var result = this.isPlaneBInsidePlaneA_TouchingIsInside(
	// 			item,
	// 			this.positionData[i]
	// 		);
	// 		if (result == true) {
	// 			affectedItems.push(i);
	// 			if (i != index) {
	// 				affectedItemsExceptSelf.push(i);
	// 			}
	// 		}
	// 	}

	// 	return {
	// 		affectedItems: affectedItems,
	// 		affectedItemsExceptSelf: affectedItemsExceptSelf
	// 	};
	// };

	// LimberGridView.prototype.findAffectedItemsOnResize = function(
	// 	index,
	// 	width,
	// 	height
	// ) {
	// 	var item = JSON.parse(JSON.stringify(this.positionData[index]));
	// 	item.width = width;
	// 	item.height = height;
	// 	var affectedItems = [];
	// 	var affectedItemsExceptSelf = [];

	// 	var length_0 = this.positionData.length;
	// 	for (var i = 0; i < length_0; i++) {
	// 		var result = this.isPlaneBInsidePlaneA_TouchingIsInside(
	// 			item,
	// 			this.positionData[i]
	// 		);
	// 		if (result == true) {
	// 			affectedItems.push(i);
	// 			if (i != index) {
	// 				affectedItemsExceptSelf.push(i);
	// 			}
	// 		}
	// 	}

	// 	return {
	// 		affectedItems: affectedItems,
	// 		affectedItemsExceptSelf: affectedItemsExceptSelf
	// 	};
	// };

	// LimberGridView.prototype.isPlaneBInsidePlaneA_TouchingIsInside = function(
	// 	A,
	// 	B,
	// 	resultType
	// ) {
	// 	var ATopLeft = [A.x, A.y];
	// 	var ATopRight = [A.x + A.width, A.y];
	// 	var ABottomLeft = [A.x, A.y + A.height];
	// 	var ABottomRight = [A.x + A.width, A.y + A.height];

	// 	var ACoordiantesArr = [ATopLeft, ATopRight, ABottomRight, ABottomLeft];

	// 	var BTopLeft = [B.x, B.y];
	// 	var BTopRight = [B.x + B.width, B.y];
	// 	var BBottomLeft = [B.x, B.y + B.height];
	// 	var BBottomRight = [B.x + B.width, B.y + B.height];

	// 	var BCoordinatesArr = [BTopLeft, BTopRight, BBottomRight, BBottomLeft];
	// 	var BResultArr = [];
	// 	var isInside = 0;
	// 	var overallResult = false;
	// 	var length_0 = BCoordinatesArr.length;
	// 	for (var i = 0; i < length_0; i++) {
	// 		if (
	// 			BCoordinatesArr[i][0] >= ATopLeft[0] &&
	// 			BCoordinatesArr[i][0] <= ATopRight[0] &&
	// 			BCoordinatesArr[i][0] >= ABottomLeft[0] &&
	// 			BCoordinatesArr[i][0] <= ABottomRight[0] &&
	// 			BCoordinatesArr[i][1] >= ATopLeft[1] &&
	// 			BCoordinatesArr[i][1] <= ABottomLeft[1] &&
	// 			BCoordinatesArr[i][1] >= ATopRight[1] &&
	// 			BCoordinatesArr[i][1] <= ABottomRight[1]
	// 		) {
	// 			BResultArr[i] = true;
	// 			isInside++;
	// 			overallResult = true;
	// 		} else {
	// 			BResultArr[i] = false;
	// 		}
	// 	}
	// 	if (isInside == 4) {
	// 		isInside = true;
	// 	} else {
	// 		isInside = false;
	// 	}

	// 	var engulfed = false;
	// 	var engulfedCheckCount = 0;
	// 	var length_0 = ACoordiantesArr.length;
	// 	for (var i = 0; i < length_0; i++) {
	// 		if (
	// 			ACoordiantesArr[i][0] >= BTopLeft[0] &&
	// 			ACoordiantesArr[i][0] <= BTopRight[0] &&
	// 			ACoordiantesArr[i][0] >= BBottomLeft[0] &&
	// 			ACoordiantesArr[i][0] <= BBottomRight[0] &&
	// 			ACoordiantesArr[i][1] >= BTopLeft[1] &&
	// 			ACoordiantesArr[i][1] <= BBottomLeft[1] &&
	// 			ACoordiantesArr[i][1] >= BTopRight[1] &&
	// 			ACoordiantesArr[i][1] <= BBottomRight[1]
	// 		) {
	// 			overallResult = true;
	// 			engulfedCheckCount++;
	// 		}
	// 	}

	// 	if (engulfedCheckCount == 4) {
	// 		engulfed = true;
	// 	}

	// 	if (
	// 		(BTopLeft[0] > ATopLeft[0] &&
	// 			BTopRight[0] < ATopRight[0] &&
	// 			BTopLeft[1] < ATopLeft[1] &&
	// 			BBottomLeft[1] > ABottomLeft[1]) ||
	// 		(BTopLeft[1] > ATopLeft[1] &&
	// 			BBottomLeft[1] < ABottomLeft[1] &&
	// 			BTopLeft[0] < ATopLeft[0] &&
	// 			BTopRight[0] > ATopRight[0])
	// 	) {
	// 		overallResult = true;
	// 	}

	// 	if (resultType == "overall") {
	// 		return overallResult;
	// 	} else if (resultType == "individual") {
	// 		return BResultArr;
	// 	} else if (resultType == "all") {
	// 		return {
	// 			overall: overallResult,
	// 			individual: BResultArr,
	// 			isInside: isInside,
	// 			engulfed: engulfed
	// 		};
	// 	} else {
	// 		return overallResult;
	// 	}
	// };

	// LimberGridView.prototype.isPlaneBInsidePlaneA_TouchingNotInside = function(
	// 	A,
	// 	B,
	// 	resultType
	// ) {
	// 	var ATopLeft = [A.x, A.y];
	// 	var ATopRight = [A.x + A.width, A.y];
	// 	var ABottomLeft = [A.x, A.y + A.height];
	// 	var ABottomRight = [A.x + A.width, A.y + A.height];

	// 	var ACoordiantesArr = [ATopLeft, ATopRight, ABottomRight, ABottomLeft];

	// 	var BTopLeft = [B.x, B.y];
	// 	var BTopRight = [B.x + B.width, B.y];
	// 	var BBottomLeft = [B.x, B.y + B.height];
	// 	var BBottomRight = [B.x + B.width, B.y + B.height];

	// 	var BCoordinatesArr = [BTopLeft, BTopRight, BBottomRight, BBottomLeft];
	// 	var BResultArr = [];
	// 	var isInside = 0;
	// 	var overallResult = false;
	// 	var length_0 = BCoordinatesArr.length;
	// 	for (var i = 0; i < length_0; i++) {
	// 		if (
	// 			BCoordinatesArr[i][0] > ATopLeft[0] &&
	// 			BCoordinatesArr[i][0] < ATopRight[0] &&
	// 			BCoordinatesArr[i][0] > ABottomLeft[0] &&
	// 			BCoordinatesArr[i][0] < ABottomRight[0] &&
	// 			BCoordinatesArr[i][1] > ATopLeft[1] &&
	// 			BCoordinatesArr[i][1] < ABottomLeft[1] &&
	// 			BCoordinatesArr[i][1] > ATopRight[1] &&
	// 			BCoordinatesArr[i][1] < ABottomRight[1]
	// 		) {
	// 			BResultArr[i] = true;
	// 			isInside++;
	// 			overallResult = true;
	// 		} else {
	// 			BResultArr[i] = false;
	// 		}
	// 	}
	// 	if (isInside == 4) {
	// 		isInside = true;
	// 	} else {
	// 		isInside = false;
	// 	}

	// 	var engulfed = false;
	// 	var engulfedCheckCount = 0;
	// 	var length_0 = ACoordiantesArr.length;
	// 	for (var i = 0; i < length_0; i++) {
	// 		if (
	// 			ACoordiantesArr[i][0] > BTopLeft[0] &&
	// 			ACoordiantesArr[i][0] < BTopRight[0] &&
	// 			ACoordiantesArr[i][0] > BBottomLeft[0] &&
	// 			ACoordiantesArr[i][0] < BBottomRight[0] &&
	// 			ACoordiantesArr[i][1] > BTopLeft[1] &&
	// 			ACoordiantesArr[i][1] < BBottomLeft[1] &&
	// 			ACoordiantesArr[i][1] > BTopRight[1] &&
	// 			ACoordiantesArr[i][1] < BBottomRight[1]
	// 		) {
	// 			overallResult = true;
	// 			engulfedCheckCount++;
	// 		}
	// 	}

	// 	if (engulfedCheckCount == 4) {
	// 		engulfed = true;
	// 	}

	// 	if (
	// 		(BTopLeft[0] >= ATopLeft[0] &&
	// 			BTopRight[0] <= ATopRight[0] &&
	// 			BTopLeft[1] <= ATopLeft[1] &&
	// 			BBottomLeft[1] >= ABottomLeft[1]) ||
	// 		(BTopLeft[1] >= ATopLeft[1] &&
	// 			BBottomLeft[1] <= ABottomLeft[1] &&
	// 			BTopLeft[0] <= ATopLeft[0] &&
	// 			BTopRight[0] >= ATopRight[0])
	// 	) {
	// 		overallResult = true;
	// 	}

	// 	if (
	// 		(ATopLeft[0] >= BTopLeft[0] &&
	// 			ATopRight[0] <= BTopRight[0] &&
	// 			ATopLeft[1] <= BTopLeft[1] &&
	// 			ABottomLeft[1] >= BBottomLeft[1]) ||
	// 		(ATopLeft[1] >= BTopLeft[1] &&
	// 			ABottomLeft[1] <= BBottomLeft[1] &&
	// 			ATopLeft[0] <= BTopLeft[0] &&
	// 			ATopRight[0] >= BTopRight[0])
	// 	) {
	// 		overallResult = true;
	// 	}

	// 	if (
	// 		BTopLeft[0] == ATopLeft[0] &&
	// 		BTopRight[0] == ATopRight[0] &&
	// 		((BTopLeft[1] >= ATopLeft[1] && BTopLeft[1] < ABottomLeft[1]) ||
	// 			(BBottomLeft[1] > ATopLeft[1] &&
	// 				BBottomLeft[1] <= ABottomLeft[1]))
	// 	) {
	// 		overallResult = true;
	// 	}

	// 	if (
	// 		ATopLeft[0] == BTopLeft[0] &&
	// 		ATopRight[0] == BTopRight[0] &&
	// 		((ATopLeft[1] >= BTopLeft[1] && ATopLeft[1] < BBottomLeft[1]) ||
	// 			(ABottomLeft[1] > BTopLeft[1] &&
	// 				ABottomLeft[1] <= BBottomLeft[1]))
	// 	) {
	// 		overallResult = true;
	// 		if (ATopLeft[1] > BTopLeft[1] && ABottomLeft[1] < BBottomLeft[1]) {
	// 			engulfed = true;
	// 		}
	// 	}

	// 	if (
	// 		BTopLeft[1] == ATopLeft[1] &&
	// 		BBottomLeft[1] == ABottomLeft[1] &&
	// 		((BTopLeft[0] >= ATopLeft[0] && BTopLeft[0] < ATopRight[0]) ||
	// 			(BTopRight[0] > ATopLeft[0] && BTopRight[0] <= ATopRight[0]))
	// 	) {
	// 		overallResult = true;
	// 	}

	// 	if (
	// 		ATopLeft[1] == BTopLeft[1] &&
	// 		ABottomLeft[1] == BBottomLeft[1] &&
	// 		((ATopLeft[0] >= BTopLeft[0] && ATopLeft[0] < BTopRight[0]) ||
	// 			(ATopRight[0] > BTopLeft[0] && ATopRight[0] <= BTopRight[0]))
	// 	) {
	// 		overallResult = true;
	// 		if (ATopLeft[0] > BTopLeft[0] && ATopRight[0] < BTopRight[0]) {
	// 			engulfed = true;
	// 		}
	// 	}

	// 	if (resultType == "overall") {
	// 		return overallResult;
	// 	} else if (resultType == "individual") {
	// 		return BResultArr;
	// 	} else if (resultType == "all") {
	// 		return {
	// 			overall: overallResult,
	// 			individual: BResultArr,
	// 			isInside: isInside,
	// 			engulfed: engulfed
	// 		};
	// 	} else {
	// 		return overallResult;
	// 	}
	// };

	// LimberGridView.prototype.fitItemsIntoFreeSpaces = function(
	// 	items,
	// 	freeSpaces,
	// 	doNotMergeItems
	// ) {
	// 	var items = JSON.parse(JSON.stringify(items));
	// 	var freeSpaces = JSON.parse(JSON.stringify(freeSpaces));
	// 	var doNotMergeItems = JSON.parse(JSON.stringify(doNotMergeItems));

	// 	sortPlainsByArea(items);

	// 	var repositionedItems = [];
	// 	var match = this.findMatchingSpace(items, freeSpaces);
	// 	while (
	// 		match.matchingItemIndex != null &&
	// 		match.matchingFreeSpaceIndex != null
	// 	) {
	// 		var tempItem = JSON.parse(
	// 			JSON.stringify(items[match.matchingItemIndex])
	// 		);

	// 		var repositionedItem = {
	// 			x:
	// 				freeSpaces[match.matchingFreeSpaceIndex].x +
	// 				getMarginAtPoint.call(
	// 					this,
	// 					freeSpaces[match.matchingFreeSpaceIndex].x
	// 				),
	// 			y:
	// 				freeSpaces[match.matchingFreeSpaceIndex].y +
	// 				getMarginAtPoint.call(
	// 					this,
	// 					freeSpaces[match.matchingFreeSpaceIndex].y
	// 				),
	// 			width: tempItem.width,
	// 			height: tempItem.height,
	// 			index: tempItem.index
	// 		};
	// 		repositionedItems.push(repositionedItem);

	// 		var occupiedSpace = {
	// 			x: freeSpaces[match.matchingFreeSpaceIndex].x,
	// 			y: freeSpaces[match.matchingFreeSpaceIndex].y,
	// 			width:
	// 				tempItem.width +
	// 				getMarginAtPoint.call(
	// 					this,
	// 					freeSpaces[match.matchingFreeSpaceIndex].x
	// 				),
	// 			height:
	// 				tempItem.height +
	// 				getMarginAtPoint.call(
	// 					this,
	// 					freeSpaces[match.matchingFreeSpaceIndex].y
	// 				),
	// 			doNotMergeFlag: true
	// 		};

	// 		items.splice(match.matchingItemIndex, 1);

	// 		var newFreeSpaces = [];

	// 		var length_0 = freeSpaces.length;
	// 		for (var i = 0; i < length_0; i++) {
	// 			var planeDiff = this.subtractPlanes(
	// 				freeSpaces[i],
	// 				occupiedSpace
	// 			);
	// 			if (planeDiff != false) {
	// 				newFreeSpaces = newFreeSpaces.concat(planeDiff);
	// 			} else {
	// 				newFreeSpaces.push(
	// 					JSON.parse(JSON.stringify(freeSpaces[i]))
	// 				);
	// 			}
	// 		}

	// 		// calculate new mergedFreeSpaces
	// 		doNotMergeItems.push(occupiedSpace);
	// 		var newMergedFreeSpaces = this.mergeFreeSpaces(
	// 			newFreeSpaces,
	// 			doNotMergeItems
	// 		);

	// 		freeSpaces = newMergedFreeSpaces;
	// 		var match = this.findMatchingSpace(items, newMergedFreeSpaces);
	// 	}
	// 	return { repositionedItems: repositionedItems, freeSpaces: freeSpaces };
	// };

	// LimberGridView.prototype.findMatchingSpace = function(items, freeSpaces) {
	// 	// IMPORTANT
	// 	// items must sorted in descending order according to area
	// 	// IMPORTANT END

	// 	var matchingItemIndex = null;
	// 	var matchingFreeSpaceIndex = null;
	// 	var length_0 = items.length;
	// 	for (var i = 0; i < length_0; i++) {
	// 		var randomPossibilities = [];
	// 		var possibilitiesWidth = [];
	// 		var possibilitiesHeight = [];
	// 		var length_1 = freeSpaces.length;
	// 		for (var j = 0; j < length_1; j++) {
	// 			var tempItem = JSON.parse(JSON.stringify(items[i]));
	// 			if (
	// 				getMarginAtPoint.call(this, freeSpaces[j].x) == this.MARGIN
	// 			) {
	// 				tempItem.width += this.MARGIN * 1;
	// 			}
	// 			if (
	// 				getMarginAtPoint.call(this, freeSpaces[j].y) == this.MARGIN
	// 			) {
	// 				tempItem.height += this.MARGIN * 1;
	// 			}

	// 			var freeSpaceWidth = freeSpaces[j].width;
	// 			var freeSpaceHeight = freeSpaces[j].height;

	// 			if (arePlainsIdentical(tempItem, freeSpaces[j])) {
	// 				matchingItemIndex = i;
	// 				matchingFreeSpaceIndex = j;
	// 				break;
	// 			}

	// 			if (
	// 				Math.floor(freeSpaceWidth / tempItem.width) >= 1 &&
	// 				freeSpaceHeight >= tempItem.height
	// 			) {
	// 				possibilitiesWidth.push(j);
	// 			}
	// 			if (
	// 				Math.floor(freeSpaceHeight / tempItem.height) >= 1 &&
	// 				freeSpaceWidth >= tempItem.width
	// 			) {
	// 				possibilitiesHeight.push(j);
	// 			}
	// 		}

	// 		var greatestWidthDiff = 0;
	// 		var greatestWidthDiffIndex = null;
	// 		var minYPossibilitiesWidth = 0;
	// 		var minYPossibilitiesWidthIndex = null;
	// 		var greatestHeightDiff = 0;
	// 		var greatestHeightDiffIndex = null;
	// 		var minYPossibilitiesHeight = 0;
	// 		var minYPossibilitiesHeightIndex = null;

	// 		var length_1 = possibilitiesWidth.length;
	// 		for (var k = 0; k < length_1; k++) {
	// 			var flooredQuotient = Math.floor(
	// 				freeSpaces[possibilitiesWidth[k]].width / tempItem.width
	// 			);
	// 			var quotient =
	// 				freeSpaces[possibilitiesWidth[k]].width / tempItem.width;
	// 			var diff = quotient - flooredQuotient;

	// 			if (diff > greatestWidthDiff) {
	// 				greatestWidthDiff = diff;
	// 				greatestWidthDiffIndex = possibilitiesWidth[k];
	// 			}

	// 			if (
	// 				freeSpaces[possibilitiesWidth[k]].y <=
	// 					minYPossibilitiesWidth ||
	// 				minYPossibilitiesWidth == 0
	// 			) {
	// 				if (
	// 					freeSpaces[possibilitiesWidth[k]].y ==
	// 					minYPossibilitiesWidth
	// 				) {
	// 					if (greatestWidthDiffIndex == null) {
	// 						minYPossibilitiesWidth =
	// 							freeSpaces[possibilitiesWidth[k]].y;
	// 						minYPossibilitiesWidthIndex = possibilitiesWidth[k];
	// 					} else {
	// 						if (diff == greatestWidthDiff) {
	// 							minYPossibilitiesWidth =
	// 								freeSpaces[possibilitiesWidth[k]].y;
	// 							minYPossibilitiesWidthIndex =
	// 								possibilitiesWidth[k];
	// 						}
	// 					}
	// 				} else {
	// 					minYPossibilitiesWidth =
	// 						freeSpaces[possibilitiesWidth[k]].y;
	// 					minYPossibilitiesWidthIndex = possibilitiesWidth[k];
	// 				}
	// 			}
	// 		}

	// 		var length_1 = possibilitiesHeight.length;
	// 		for (k = 0; k < length_1; k++) {
	// 			var flooredQuotient = Math.floor(
	// 				freeSpaces[possibilitiesHeight[k]].height / tempItem.height
	// 			);
	// 			var quotient =
	// 				freeSpaces[possibilitiesHeight[k]].height / tempItem.height;
	// 			var diff = quotient - flooredQuotient;

	// 			if (diff > greatestHeightDiff) {
	// 				greatestHeightDiff = diff;
	// 				greatestHeightDiffIndex = possibilitiesHeight[k];
	// 			}

	// 			if (
	// 				freeSpaces[possibilitiesHeight[k]].y <=
	// 					minYPossibilitiesHeight ||
	// 				minYPossibilitiesHeight == 0
	// 			) {
	// 				if (
	// 					freeSpaces[possibilitiesHeight[k]].y ==
	// 					minYPossibilitiesHeight
	// 				) {
	// 					if (greatestHeightDiffIndex == null) {
	// 						minYPossibilitiesHeight =
	// 							freeSpaces[possibilitiesHeight[k]].y;
	// 						minYPossibilitiesHeightIndex =
	// 							possibilitiesHeight[k];
	// 					} else {
	// 						if (diff == greatestHeightDiff) {
	// 							minYPossibilitiesHeight =
	// 								freeSpaces[possibilitiesHeight[k]].y;
	// 							minYPossibilitiesHeightIndex =
	// 								possibilitiesHeight[k];
	// 						}
	// 					}
	// 				} else {
	// 					minYPossibilitiesHeight =
	// 						freeSpaces[possibilitiesHeight[k]].y;
	// 					minYPossibilitiesHeightIndex = possibilitiesHeight[k];
	// 				}
	// 			}
	// 		}

	// 		if (
	// 			minYPossibilitiesWidthIndex != null ||
	// 			minYPossibilitiesHeightIndex != null
	// 		) {
	// 			if (minYPossibilitiesWidth < minYPossibilitiesHeight) {
	// 				matchingItemIndex = i;
	// 				matchingFreeSpaceIndex = minYPossibilitiesWidthIndex;
	// 				break;
	// 			} else {
	// 				matchingItemIndex = i;
	// 				matchingFreeSpaceIndex = minYPossibilitiesHeightIndex;
	// 				break;
	// 			}
	// 		}

	// 		// Below if statement will never get executed, Sorry OCD
	// 		if (
	// 			greatestWidthDiffIndex != null ||
	// 			greatestHeightDiffIndex != null
	// 		) {
	// 			if (greatestWidthDiff > greatestHeightDiff) {
	// 				matchingItemIndex = i;
	// 				matchingFreeSpaceIndex = greatestWidthDiffIndex;
	// 				break;
	// 			} else {
	// 				matchingItemIndex = i;
	// 				matchingFreeSpaceIndex = greatestHeightDiffIndex;
	// 				break;
	// 			}
	// 		}
	// 	}
	// 	return {
	// 		matchingItemIndex: matchingItemIndex,
	// 		matchingFreeSpaceIndex: matchingFreeSpaceIndex
	// 	};
	// };

	// LimberGridView.prototype.fitRemainingItems = function(
	// 	positionData,
	// 	remainingItems,
	// 	allAffectedItems,
	// 	changedIndex,
	// 	previousFitDetails
	// ) {
	// 	if (remainingItems.length == 0) {
	// 		return positionData;
	// 	}
	// 	var affectedItemsObject = [];
	// 	var length_0 = allAffectedItems.affectedItems.length;
	// 	for (var i = 0; i < length_0; i++) {
	// 		affectedItemsObject.push(
	// 			JSON.parse(
	// 				JSON.stringify(
	// 					positionData[allAffectedItems.affectedItems[i]]
	// 				)
	// 			)
	// 		);
	// 	}
	// 	var affectedItemsObjectDepthDescOrder = sortPlainsByDepth(
	// 		affectedItemsObject
	// 	);
	// 	var greatestDepthAffectedItems =
	// 		affectedItemsObjectDepthDescOrder[0].y +
	// 		affectedItemsObjectDepthDescOrder[0].height;

	// 	var remainingItemsIndicesMap = {};
	// 	var length_0 = remainingItems.length;
	// 	for (var i = 0; i < length_0; i++) {
	// 		remainingItemsIndicesMap[remainingItems[i]] = true;
	// 	}

	// 	var itemsAboveGreatestDepth = [];
	// 	var recalculatedGreatestDepthAffectedItemsAndNonAffectedItemsCaseGreater = null;
	// 	var recalculatedGreatestDepthAffectedItemsAndNonAffectedItemsCaseLesser = null;
	// 	var length_0 = positionData.length;
	// 	for (var i = 0; i < length_0; i++) {
	// 		if (remainingItemsIndicesMap.hasOwnProperty(i)) {
	// 			continue;
	// 		}
	// 		if (
	// 			positionData[i].y < greatestDepthAffectedItems &&
	// 			(positionData[i].y + positionData[i].height <=
	// 				greatestDepthAffectedItems ||
	// 				positionData[i].y + positionData[i].height >
	// 					greatestDepthAffectedItems)
	// 		) {
	// 			if (
	// 				positionData[i].y + positionData[i].height >
	// 				greatestDepthAffectedItems
	// 			) {
	// 				if (
	// 					recalculatedGreatestDepthAffectedItemsAndNonAffectedItemsCaseGreater <
	// 						positionData[i].y + positionData[i].height ||
	// 					recalculatedGreatestDepthAffectedItemsAndNonAffectedItemsCaseGreater ==
	// 						null
	// 				) {
	// 					recalculatedGreatestDepthAffectedItemsAndNonAffectedItemsCaseGreater =
	// 						positionData[i].y + positionData[i].height;
	// 				}
	// 			}
	// 			if (
	// 				positionData[i].y + positionData[i].height <=
	// 				greatestDepthAffectedItems
	// 			) {
	// 				if (
	// 					recalculatedGreatestDepthAffectedItemsAndNonAffectedItemsCaseLesser <
	// 						positionData[i].y + positionData[i].height ||
	// 					recalculatedGreatestDepthAffectedItemsAndNonAffectedItemsCaseLesser ==
	// 						null
	// 				) {
	// 					recalculatedGreatestDepthAffectedItemsAndNonAffectedItemsCaseLesser =
	// 						positionData[i].y + positionData[i].height;
	// 				}
	// 			}
	// 		}
	// 	}

	// 	if (
	// 		recalculatedGreatestDepthAffectedItemsAndNonAffectedItemsCaseGreater !=
	// 		null
	// 	) {
	// 		// fitRemainingItems Case I
	// 		var greatestDepthOfAffectedArea = recalculatedGreatestDepthAffectedItemsAndNonAffectedItemsCaseGreater;
	// 		var itemsToShiftData = this.getItemsFromPointDepth(
	// 			greatestDepthOfAffectedArea,
	// 			true,
	// 			positionData
	// 		);
	// 		var itemsToShift = itemsToShiftData.itemsFromPointDepth;

	// 		var initialFitData = this.fitRemainingItemsAboveDeepestLine(
	// 			greatestDepthOfAffectedArea,
	// 			positionData,
	// 			remainingItems,
	// 			previousFitDetails
	// 		);
	// 		positionData = initialFitData.positionData;
	// 		remainingItems = initialFitData.remainingItems;

	// 		var finalFitData = this.fitRemainingItemsBelowDeepestLine(
	// 			greatestDepthOfAffectedArea,
	// 			positionData,
	// 			remainingItems,
	// 			allAffectedItems
	// 		);
	// 		var finalPositionData = this.shitftItemsBelow(
	// 			finalFitData.deepestY -
	// 				greatestDepthOfAffectedArea +
	// 				itemsToShiftData.shiftHeightToAdd,
	// 			finalFitData.positionData,
	// 			itemsToShift
	// 		);
	// 	} else if (
	// 		recalculatedGreatestDepthAffectedItemsAndNonAffectedItemsCaseLesser !=
	// 		null
	// 	) {
	// 		// fitRemainingItems Case II
	// 		var greatestDepthOfAffectedArea = recalculatedGreatestDepthAffectedItemsAndNonAffectedItemsCaseLesser;
	// 		var itemsToShiftData = this.getItemsFromPointDepth(
	// 			greatestDepthOfAffectedArea,
	// 			false,
	// 			positionData
	// 		);
	// 		var itemsToShift = itemsToShiftData.itemsFromPointDepth;

	// 		var finalFitData = this.fitRemainingItemsBelowDeepestLine(
	// 			greatestDepthOfAffectedArea,
	// 			positionData,
	// 			remainingItems,
	// 			allAffectedItems
	// 		);
	// 		var finalPositionData = this.shitftItemsBelow(
	// 			finalFitData.deepestY - greatestDepthOfAffectedArea,
	// 			finalFitData.positionData,
	// 			itemsToShift
	// 		);
	// 	}

	// 	return finalPositionData;
	// };

	// LimberGridView.prototype.fitRemainingItemsAboveDeepestLine = function(
	// 	deepPoint,
	// 	positionData,
	// 	remainingItems,
	// 	previousFitDetails
	// ) {
	// 	var linePlane = {
	// 		x: 0,
	// 		y: deepPoint,
	// 		width: this.WIDTH,
	// 		height: 1
	// 	};

	// 	// find all the items above or on deepPoint
	// 	var remainingItemsMap = {};
	// 	var length_0 = remainingItems.length;
	// 	for (var i = 0; i < length_0; i++) {
	// 		remainingItemsMap[remainingItems[i]] = true;
	// 	}
	// 	var doNotMergeItems = [];
	// 	var length_0 = positionData.length;
	// 	for (var i = 0; i < length_0; i++) {
	// 		if (remainingItemsMap.hasOwnProperty(i)) {
	// 			continue;
	// 		}
	// 		if (
	// 			positionData[i].y <= deepPoint &&
	// 			positionData[i].y + positionData[i].height <= deepPoint
	// 		) {
	// 			// && added recently due to a bug in algo
	// 			var obj = JSON.parse(JSON.stringify(positionData[i]));
	// 			obj.doNotMergeFlag = true;
	// 			doNotMergeItems.push(obj);
	// 		}
	// 	}

	// 	var remainingFreeSpaces = previousFitDetails.freeSpaces;
	// 	remainingFreeSpaces.push(linePlane);

	// 	var mergedFreeSpaces = this.mergeFreeSpaces(
	// 		remainingFreeSpaces,
	// 		doNotMergeItems
	// 	);
	// 	var length_0 = mergedFreeSpaces.length;
	// 	for (var i = 0; i < length_0; i++) {
	// 		if (
	// 			mergedFreeSpaces[i].y + mergedFreeSpaces[i].height ==
	// 			deepPoint + 1
	// 		) {
	// 			mergedFreeSpaces[i].height -= 1;
	// 		}
	// 	}

	// 	var remainingItemsObject = [];
	// 	var length_0 = remainingItems.length;
	// 	for (var i = 0; i < length_0; i++) {
	// 		remainingItemsObject.push(
	// 			JSON.parse(JSON.stringify(positionData[remainingItems[i]]))
	// 		);
	// 		remainingItemsObject[i].index = remainingItems[i];
	// 	}
	// 	var fitDetails = this.fitItemsIntoFreeSpaces(
	// 		remainingItemsObject,
	// 		mergedFreeSpaces,
	// 		doNotMergeItems
	// 	);
	// 	var fittedItems = fitDetails.repositionedItems;

	// 	if (fittedItems.length > 0) {
	// 		fittedRemainingItems = {};
	// 		var length_0 = fittedItems.length;
	// 		var length_1 = remainingItems.length;
	// 		for (var i = 0; i < length_0; i++) {
	// 			for (var j = 0; j < length_1; j++) {
	// 				if (fittedItems[i].index == remainingItems[j]) {
	// 					fittedRemainingItems[j] = true;
	// 					positionData[remainingItems[j]].x = fittedItems[i].x;
	// 					positionData[remainingItems[j]].y = fittedItems[i].y;
	// 				}
	// 			}
	// 		}

	// 		var temp = Object.keys(fittedRemainingItems);
	// 		var length_0 = temp.length - 1;
	// 		for (var i = length_0; i >= 0; i--) {
	// 			remainingItems.splice(temp[i], 1);
	// 		}
	// 	}

	// 	return { remainingItems: remainingItems, positionData: positionData };
	// };

	// LimberGridView.prototype.fitRemainingItemsBelowDeepestLine = function(
	// 	startingY,
	// 	positionData,
	// 	remainingItems,
	// 	allAffectedItems
	// ) {
	// 	if (remainingItems.length == 0) {
	// 		return { positionData: positionData, deepestY: startingY };
	// 	}
	// 	var remainingItemsBackup = JSON.parse(JSON.stringify(remainingItems));
	// 	var remainingItemsObject = [];
	// 	var length_0 = remainingItems.length;
	// 	for (var i = 0; i < length_0; i++) {
	// 		remainingItemsObject.push(
	// 			JSON.parse(JSON.stringify(positionData[remainingItems[i]]))
	// 		);
	// 		remainingItemsObject[i].index = remainingItems[i];
	// 	}
	// 	var remainingItemsObject = sortPlainsByHeight(remainingItemsObject);

	// 	var initializedPlane = {
	// 		x: 0,
	// 		y: startingY,
	// 		width: this.WIDTH,
	// 		height:
	// 			remainingItemsObject[0].height +
	// 			getMarginAtPoint.call(this, startingY)
	// 	};

	// 	var remainingWidth = this.WIDTH;
	// 	var deepestY = startingY;

	// 	while (remainingItemsObject.length != 0) {
	// 		if (remainingItemsObject.length > 0) {
	// 			deepestY =
	// 				startingY +
	// 				remainingItemsObject[0].height +
	// 				getMarginAtPoint.call(this, startingY);
	// 		}

	// 		var freeSpacesInCurrentRow = [];
	// 		var occupiedSpacesInCurrentRow = [];
	// 		var fittedRemainingItems = {};
	// 		var length_0 = remainingItemsObject.length;
	// 		for (var i = 0; i < length_0; i++) {
	// 			if (fittedRemainingItems.hasOwnProperty(i)) {
	// 				continue;
	// 			}

	// 			if (
	// 				remainingWidth >=
	// 				remainingItemsObject[i].width +
	// 					getMarginAtPoint.call(this, this.WIDTH - remainingWidth)
	// 			) {
	// 				remainingItemsObject[i].x =
	// 					this.WIDTH -
	// 					remainingWidth +
	// 					getMarginAtPoint.call(
	// 						this,
	// 						this.WIDTH - remainingWidth
	// 					);
	// 				remainingItemsObject[i].y =
	// 					startingY + getMarginAtPoint.call(this, startingY);
	// 				positionData[remainingItemsObject[i].index].x =
	// 					this.WIDTH -
	// 					remainingWidth +
	// 					getMarginAtPoint.call(
	// 						this,
	// 						this.WIDTH - remainingWidth
	// 					);
	// 				positionData[remainingItemsObject[i].index].y =
	// 					startingY + getMarginAtPoint.call(this, startingY);

	// 				var occupiedSpace = {
	// 					x: this.WIDTH - remainingWidth,
	// 					y: startingY,
	// 					width:
	// 						remainingItemsObject[i].width +
	// 						getMarginAtPoint.call(
	// 							this,
	// 							this.WIDTH - remainingWidth
	// 						),
	// 					height:
	// 						remainingItemsObject[i].height +
	// 						getMarginAtPoint.call(this, startingY),
	// 					doNotMergeFlag: true
	// 				};

	// 				occupiedSpacesInCurrentRow.push(occupiedSpace);

	// 				var freeSpace = {
	// 					x: this.WIDTH - remainingWidth,
	// 					y:
	// 						startingY +
	// 						getMarginAtPoint.call(this, startingY) +
	// 						remainingItemsObject[i].height,
	// 					width:
	// 						remainingItemsObject[i].width +
	// 						getMarginAtPoint.call(
	// 							this,
	// 							this.WIDTH - remainingWidth
	// 						),
	// 					height:
	// 						initializedPlane.y +
	// 						initializedPlane.height -
	// 						(startingY +
	// 							getMarginAtPoint.call(this, startingY) +
	// 							remainingItemsObject[i].height)
	// 				};

	// 				if (isValidPlane(freeSpace)) {
	// 					freeSpacesInCurrentRow.push(freeSpace);
	// 				}
	// 				fittedRemainingItems[i] = true;

	// 				remainingWidth =
	// 					remainingWidth -
	// 					(remainingItemsObject[i].width +
	// 						getMarginAtPoint.call(
	// 							this,
	// 							this.WIDTH - remainingWidth
	// 						));
	// 			}
	// 		}

	// 		var temp = Object.keys(fittedRemainingItems);
	// 		var length_0 = temp.length - 1;
	// 		for (var i = length_0; i >= 0; i--) {
	// 			remainingItemsObject.splice(temp[i], 1);
	// 		}

	// 		if (remainingWidth > 0) {
	// 			var freeSpace = {
	// 				x: this.WIDTH - remainingWidth,
	// 				y: startingY,
	// 				width: remainingWidth,
	// 				height: initializedPlane.height
	// 			};
	// 			if (isValidPlane(freeSpace)) {
	// 				freeSpacesInCurrentRow.push(freeSpace);
	// 			}
	// 		}

	// 		if (remainingItemsObject.length > 0) {
	// 			var mergedFreeSpaces = this.mergeFreeSpaces(
	// 				freeSpacesInCurrentRow,
	// 				occupiedSpacesInCurrentRow
	// 			);
	// 			var fitDetails = this.fitItemsIntoFreeSpaces(
	// 				remainingItemsObject,
	// 				freeSpacesInCurrentRow,
	// 				occupiedSpacesInCurrentRow
	// 			);
	// 			var fittedItems = fitDetails.repositionedItems;

	// 			if (fittedItems.length > 0) {
	// 				fittedRemainingItems = {};
	// 				var length_0 = fittedItems.length;
	// 				var length_1 = remainingItemsObject.length;
	// 				for (var i = 0; i < length_0; i++) {
	// 					for (var j = 0; j < length_1; j++) {
	// 						if (
	// 							fittedItems[i].index ==
	// 							remainingItemsObject[j].index
	// 						) {
	// 							fittedRemainingItems[j] = true;
	// 							positionData[remainingItemsObject[j].index].x =
	// 								fittedItems[i].x;
	// 							positionData[remainingItemsObject[j].index].y =
	// 								fittedItems[i].y;
	// 						}
	// 					}
	// 				}

	// 				var temp = Object.keys(fittedRemainingItems);
	// 				var length_0 = temp.length - 1;
	// 				for (var i = length_0; i >= 0; i--) {
	// 					remainingItemsObject.splice(temp[i], 1);
	// 				}
	// 			}
	// 		}

	// 		if (remainingItemsObject.length > 0) {
	// 			startingY = initializedPlane.y + initializedPlane.height;
	// 			var nextInitializePlane = {
	// 				x: 0,
	// 				y: initializedPlane.y + initializedPlane.height,
	// 				width: this.WIDTH,
	// 				height:
	// 					remainingItemsObject[0].height +
	// 					getMarginAtPoint.call(
	// 						this,
	// 						initializedPlane.y + initializedPlane.height
	// 					)
	// 			};
	// 			var initializedPlane = nextInitializePlane;
	// 			remainingWidth = this.WIDTH;
	// 		}
	// 	}

	// 	return { positionData: positionData, deepestY: deepestY };
	// };

	// LimberGridView.prototype.getItemsFromPointDepth = function(
	// 	startingY,
	// 	includePlaneAboveAndBelowPointDepth = false,
	// 	positionData
	// ) {
	// 	var itemsFromPointDepth = {};
	// 	var shiftHeightToAdd = 0;
	// 	var length_0 = positionData.length;
	// 	for (var i = 0; i < length_0; i++) {
	// 		if (includePlaneAboveAndBelowPointDepth == true) {
	// 			if (
	// 				positionData[i].y < startingY &&
	// 				positionData[i].y + positionData[i].height > startingY
	// 			) {
	// 				itemsFromPointDepth[i] = true;

	// 				var diff = startingY - positionData[i].y;
	// 				if (diff > shiftHeightToAdd) {
	// 					shiftHeightToAdd = diff;
	// 				}

	// 				continue;
	// 			}
	// 		}
	// 		if (positionData[i].y >= startingY) {
	// 			itemsFromPointDepth[i] = true;
	// 		}
	// 	}
	// 	return {
	// 		itemsFromPointDepth: itemsFromPointDepth,
	// 		shiftHeightToAdd: shiftHeightToAdd
	// 	};
	// };

	// LimberGridView.prototype.shitftItemsBelow = function(
	// 	shiftHeight,
	// 	positionData,
	// 	indicesToShift
	// ) {
	// 	shiftHeight = shiftHeight + this.MARGIN;
	// 	var length_0 = positionData.length;
	// 	for (var i = 0; i < length_0; i++) {
	// 		if (indicesToShift.hasOwnProperty(i)) {
	// 			positionData[i].y += shiftHeight;
	// 		}
	// 	}
	// 	return positionData;
	// };

	// LimberGridView.prototype.shiftItemsUp = function(y, shiftHeight) {
	// 	var length_0 = this.positionData.length;
	// 	for (var i = 0; i < length_0; i++) {
	// 		if (this.positionData[i].y >= y) {
	// 			this.positionData[i].y -= shiftHeight;
	// 			this.$limberGridViewItems[i].style.transform =
	// 				"translate(" +
	// 				this.positionData[i].x +
	// 				"px, " +
	// 				this.positionData[i].y +
	// 				"px)";
	// 		}
	// 	}
	// };

	// LimberGridView.prototype.mergePlains = function(A, B, planes = []) {
	// 	var aLines = getLines(A);
	// 	var bLines = getLines(B);
	// 	var oppositeLines = { 0: 2, 1: 3, 2: 0, 3: 1 };

	// 	var intersectionCount = 0;
	// 	var intersectionPointsAtoB = [];
	// 	var linePointsA = [];
	// 	var intersectionPointsBtoA = [];
	// 	var linePointsB = [];
	// 	var distance = null;

	// 	var aLineId = null;
	// 	var bLineId = null;

	// 	var length_0 = aLines.length;
	// 	for (var i = 0; i < length_0; i++) {
	// 		intersectionCount = 0;
	// 		intersectionPointsAtoB = [];
	// 		linePointsA = [];
	// 		intersectionPointsBtoA = [];
	// 		linePointsB = [];
	// 		distance = null;

	// 		var aLine = aLines[i];
	// 		var bLine = bLines[oppositeLines[i]];

	// 		aLineId = i;
	// 		bLineId = oppositeLines[i];

	// 		// slope of line parallel to y axis and x axis is always 0;
	// 		var m1 = 0;
	// 		var m2 = 0;

	// 		// m1 is slope of point p1 and p2
	// 		var p1 = JSON.parse(JSON.stringify(bLine[0]));
	// 		var p2 = JSON.parse(JSON.stringify(bLine[1]));

	// 		var length_1 = aLine.length;
	// 		for (var j = 0; j < length_1; j++) {
	// 			var p3 = JSON.parse(JSON.stringify(aLine[j]));

	// 			if (i == 0 || i == 2) {
	// 				var x = p3[0];
	// 				var y = p1[1];
	// 				var alpha = (p3[0] - p1[0]) / (p2[0] - p1[0]);
	// 				var d = Math.abs(p3[1] - p1[1]);
	// 			} else {
	// 				var x = p1[0];
	// 				var y = p3[1];
	// 				var alpha = (p3[1] - p1[1]) / (p2[1] - p1[1]);
	// 				var d = Math.abs(p3[0] - p1[0]);
	// 			}
	// 			if (alpha < 0 || alpha > 1) {
	// 			} else if (alpha >= 0 && alpha <= 1) {
	// 				intersectionPointsAtoB.push([x, y]);
	// 				linePointsA.push(p3);
	// 				distance = d;
	// 				intersectionCount++;
	// 			} else {
	// 				console.warn("Should not hit this check algo");
	// 			}
	// 		}

	// 		// m1 is slope of point p1 and p2
	// 		var p1 = JSON.parse(JSON.stringify(aLine[0]));
	// 		var p2 = JSON.parse(JSON.stringify(aLine[1]));

	// 		var length_1 = bLine.length;
	// 		for (var k = 0; k < length_1; k++) {
	// 			var p3 = JSON.parse(JSON.stringify(bLine[k]));

	// 			if (i == 0 || i == 2) {
	// 				var x = p3[0];
	// 				var y = p1[1];
	// 				var alpha = (p3[0] - p1[0]) / (p2[0] - p1[0]);
	// 				var d = Math.abs(p3[1] - p1[1]);
	// 			} else {
	// 				var x = p1[0];
	// 				var y = p3[1];
	// 				var alpha = (p3[1] - p1[1]) / (p2[1] - p1[1]);
	// 				var d = Math.abs(p3[0] - p1[0]);
	// 			}
	// 			if (alpha < 0 || alpha > 1) {
	// 			} else if (alpha >= 0 && alpha <= 1) {
	// 				intersectionPointsBtoA.push([x, y]);
	// 				linePointsB.push(p3);
	// 				distance = d;
	// 				intersectionCount++;
	// 			} else {
	// 				console.warn("Should not hit this check algo");
	// 			}
	// 		}

	// 		if (
	// 			intersectionCount == 2 ||
	// 			intersectionCount == 3 ||
	// 			intersectionCount == 4
	// 		) {
	// 			if (intersectionCount == 2) {
	// 				if (
	// 					JSON.stringify(linePointsA) ==
	// 					JSON.stringify(intersectionPointsBtoA)
	// 				) {
	// 					continue;
	// 				}
	// 			}
	// 			break;
	// 		}
	// 	}

	// 	if (intersectionCount <= 0 || intersectionCount >= 5) {
	// 		return false;
	// 	}

	// 	if (aLineId == 0 || aLineId == 2) {
	// 		var aOppLine = JSON.parse(
	// 			JSON.stringify(aLines[oppositeLines[aLineId]])
	// 		);
	// 		var bOppLine = JSON.parse(
	// 			JSON.stringify(bLines[oppositeLines[bLineId]])
	// 		);

	// 		var d = Math.abs(aOppLine[0][1] - bOppLine[0][1]);
	// 		if (d < distance) {
	// 			aLineId = oppositeLines[aLineId];
	// 			bLineId = oppositeLines[bLineId];
	// 			distance = d;

	// 			var changeY = bLines[bLineId][0][1];
	// 			var length_0 = intersectionPointsAtoB.length;
	// 			for (var i = 0; i < length_0; i++) {
	// 				intersectionPointsAtoB[i][1] = changeY;
	// 				linePointsA[i][1] = aOppLine[0][1];
	// 			}
	// 			var changeY = aLines[aLineId][0][1];
	// 			var length_0 = intersectionPointsBtoA.length;
	// 			for (var i = 0; i < length_0; i++) {
	// 				intersectionPointsBtoA[i][1] = changeY;
	// 				linePointsB[i][1] = bOppLine[0][1];
	// 			}
	// 		}
	// 	} else {
	// 		var aOppLine = JSON.parse(
	// 			JSON.stringify(aLines[oppositeLines[aLineId]])
	// 		);
	// 		var bOppLine = JSON.parse(
	// 			JSON.stringify(bLines[oppositeLines[bLineId]])
	// 		);

	// 		var d = Math.abs(aOppLine[0][0] - bOppLine[0][0]);
	// 		if (d < distance) {
	// 			aLineId = oppositeLines[aLineId];
	// 			bLineId = oppositeLines[bLineId];
	// 			distance = d;

	// 			var changeX = bLines[bLineId][0][0];
	// 			var length_0 = intersectionPointsAtoB.length;
	// 			for (var i = 0; i < length_0; i++) {
	// 				intersectionPointsAtoB[i][0] = changeX;
	// 				linePointsA[i][0] = aOppLine[0][0];
	// 			}
	// 			var changeX = aLines[aLineId][0][0];
	// 			var length_0 = intersectionPointsBtoA.length;
	// 			for (var i = 0; i < length_0; i++) {
	// 				intersectionPointsBtoA[i][0] = changeX;
	// 				linePointsB[i][0] = bOppLine[0][0];
	// 			}
	// 		}
	// 	}

	// 	if (distance > this.MARGIN) {
	// 		var pointsToGetPlain = [];
	// 		var plainToCheckIfFree = null;
	// 		if (intersectionCount == 4) {
	// 			pointsToGetPlain = linePointsA.concat(linePointsB);
	// 			plainToCheckIfFree = getPlainFrom4Points(pointsToGetPlain);
	// 		} else {
	// 			var length_0 = linePointsA.length;
	// 			for (var i = 0; i < length_0; i++) {
	// 				pointsToGetPlain.push(linePointsA[i]);
	// 				pointsToGetPlain.push(intersectionPointsAtoB[i]);
	// 			}

	// 			var length_0 = linePointsB.length;
	// 			for (var i = 0; i < length_0; i++) {
	// 				pointsToGetPlain.push(linePointsB[i]);
	// 				pointsToGetPlain.push(intersectionPointsBtoA[i]);
	// 			}

	// 			if (pointsToGetPlain.length > 4) {
	// 				var duplicateCheck = {};
	// 				var finalPointsToGetPlain = [];
	// 				var length_0 = pointsToGetPlain.length;
	// 				for (var i = 0; i < length_0; i++) {
	// 					var temp = JSON.parse(
	// 						JSON.stringify(pointsToGetPlain[i])
	// 					);
	// 					if (duplicateCheck.hasOwnProperty(temp)) {
	// 					} else {
	// 						duplicateCheck[temp] = true;
	// 						finalPointsToGetPlain.push(pointsToGetPlain[i]);
	// 					}
	// 				}
	// 				plainToCheckIfFree = getPlainFrom4Points(
	// 					finalPointsToGetPlain
	// 				);
	// 			} else {
	// 				plainToCheckIfFree = getPlainFrom4Points(pointsToGetPlain);
	// 			}
	// 		}

	// 		var plainToCheckIfFree_Lines = getLines(plainToCheckIfFree);

	// 		if (aLineId == 0 || aLineId == 2) {
	// 			if (aLineId == 0) {
	// 				var planeAOnTopOfB = false;
	// 				var plainToCheckIfFree_DividerLine = JSON.parse(
	// 					JSON.stringify(plainToCheckIfFree_Lines[2])
	// 				);
	// 			} else {
	// 				var planeAOnTopOfB = true;
	// 				var plainToCheckIfFree_DividerLine = JSON.parse(
	// 					JSON.stringify(plainToCheckIfFree_Lines[0])
	// 				);
	// 			}
	// 		} else {
	// 			if (aLineId == 3) {
	// 				var planeAOnLeftOfB = false;
	// 				var plainToCheckIfFree_DividerLine = JSON.parse(
	// 					JSON.stringify(plainToCheckIfFree_Lines[1])
	// 				);
	// 			} else {
	// 				var planeAOnLeftOfB = true;
	// 				var plainToCheckIfFree_DividerLine = JSON.parse(
	// 					JSON.stringify(plainToCheckIfFree_Lines[3])
	// 				);
	// 			}
	// 		}

	// 		var freeDistance = -1;
	// 		var indexOfIntersectingPlane = null;
	// 		var length_0 = planes.length;
	// 		for (var i = 0; i < length_0; i++) {
	// 			if (
	// 				this.isPlaneBInsidePlaneA_TouchingNotInside(
	// 					plainToCheckIfFree,
	// 					planes[i]
	// 				)
	// 			) {
	// 				if (planes[i].hasOwnProperty("doNotMergeFlag")) {
	// 					freeDistance = -1;
	// 					indexOfIntersectingPlane = -1;
	// 					break;
	// 				}
	// 				var planeLine = getLines(planes[i]);
	// 				if (aLineId == 0 || aLineId == 2) {
	// 					if (aLineId == 0) {
	// 						var d = Math.abs(
	// 							plainToCheckIfFree_DividerLine[0][1] -
	// 								(planes[i].y + planes[i].height)
	// 						);
	// 					} else {
	// 						var d = Math.abs(
	// 							plainToCheckIfFree_DividerLine[0][1] -
	// 								planes[i].y
	// 						);
	// 					}
	// 				} else {
	// 					if (aLineId == 3) {
	// 						var d = Math.abs(
	// 							plainToCheckIfFree_DividerLine[0][0] -
	// 								(planes[i].x + planes[i].width)
	// 						);
	// 					} else {
	// 						var d = Math.abs(
	// 							plainToCheckIfFree_DividerLine[0][0] -
	// 								planes[i].x
	// 						);
	// 					}
	// 				}
	// 				if (d < freeDistance || freeDistance < 0) {
	// 					freeDistance = d;
	// 					indexOfIntersectingPlane = i;
	// 					// breaking here since the feature is not going to be implemented or needed
	// 					// Only check is done, if some plane is inside the free space to be checked
	// 					break;
	// 					// breaking here since the feature is not going to be implemented or needed
	// 					// Only check is done, if some plane is inside the free space to be checked END
	// 				}
	// 			}
	// 		}

	// 		if (indexOfIntersectingPlane != null) {
	// 			if (freeDistance > this.MARGIN) {
	// 				// making mergedPlane false since the feature is no longer implemented or needed
	// 				var mergedPlane = false;
	// 				// making mergedPlane false since the feature is no longer implemented or needed END
	// 			} else {
	// 				// no final plain as A and B have other planes betn then which are only the size of margin apart from either A or B
	// 				var mergedPlane = false;
	// 			}
	// 		} else {
	// 			// make final free space from the whole of the free space
	// 			var makeFinalFreeSpace = true;
	// 		}
	// 	} else {
	// 		// make final free space from the whole of the free space
	// 		var makeFinalFreeSpace = true;
	// 	}

	// 	if (makeFinalFreeSpace == true) {
	// 		var mergedPlane = {};
	// 		if (aLineId == 0 || aLineId == 2) {
	// 			var aOppLine = JSON.parse(
	// 				JSON.stringify(aLines[oppositeLines[aLineId]])
	// 			);
	// 			var bOppLine = JSON.parse(
	// 				JSON.stringify(bLines[oppositeLines[bLineId]])
	// 			);

	// 			aLineId = oppositeLines[aLineId];
	// 			bLineId = oppositeLines[bLineId];

	// 			var changeY = bLines[bLineId][0][1];
	// 			var length_0 = intersectionPointsAtoB.length;
	// 			for (var i = 0; i < length_0; i++) {
	// 				intersectionPointsAtoB[i][1] = changeY;
	// 				linePointsA[i][1] = aOppLine[0][1];
	// 			}
	// 			var changeY = aLines[aLineId][0][1];
	// 			var length_0 = intersectionPointsBtoA.length;
	// 			for (var i = 0; i < length_0; i++) {
	// 				intersectionPointsBtoA[i][1] = changeY;
	// 				linePointsB[i][1] = bOppLine[0][1];
	// 			}
	// 		} else {
	// 			var aOppLine = JSON.parse(
	// 				JSON.stringify(aLines[oppositeLines[aLineId]])
	// 			);
	// 			var bOppLine = JSON.parse(
	// 				JSON.stringify(bLines[oppositeLines[bLineId]])
	// 			);

	// 			aLineId = oppositeLines[aLineId];
	// 			bLineId = oppositeLines[bLineId];

	// 			var changeX = bLines[bLineId][0][0];
	// 			var length_0 = intersectionPointsAtoB.length;
	// 			for (var i = 0; i < length_0; i++) {
	// 				intersectionPointsAtoB[i][0] = changeX;
	// 				linePointsA[i][0] = aOppLine[0][0];
	// 			}
	// 			var changeX = aLines[aLineId][0][0];
	// 			var length_0 = intersectionPointsBtoA.length;
	// 			for (var i = 0; i < length_0; i++) {
	// 				intersectionPointsBtoA[i][0] = changeX;
	// 				linePointsB[i][0] = bOppLine[0][0];
	// 			}
	// 		}

	// 		if (intersectionCount == 4) {
	// 			var pointsToGetMergedPlain = linePointsA.concat(linePointsB);
	// 			var mergedPlane = getPlainFrom4Points(pointsToGetMergedPlain);
	// 		} else {
	// 			var pointsToGetMergedPlain = [];
	// 			var length_0 = linePointsA.length;
	// 			for (var i = 0; i < length_0; i++) {
	// 				pointsToGetMergedPlain.push(linePointsA[i]);
	// 				pointsToGetMergedPlain.push(intersectionPointsAtoB[i]);
	// 			}

	// 			var length_0 = linePointsB.length;
	// 			for (var i = 0; i < length_0; i++) {
	// 				pointsToGetMergedPlain.push(linePointsB[i]);
	// 				pointsToGetMergedPlain.push(intersectionPointsBtoA[i]);
	// 			}

	// 			if (pointsToGetMergedPlain.length > 4) {
	// 				var duplicateCheck = {};
	// 				var finalPointsToGetMergedPlain = [];
	// 				var length_0 = pointsToGetMergedPlain.length;
	// 				for (var i = 0; i < length_0; i++) {
	// 					var temp = JSON.parse(
	// 						JSON.stringify(pointsToGetMergedPlain[i])
	// 					);
	// 					if (duplicateCheck.hasOwnProperty(temp)) {
	// 					} else {
	// 						duplicateCheck[temp] = true;
	// 						finalPointsToGetMergedPlain.push(
	// 							pointsToGetMergedPlain[i]
	// 						);
	// 					}
	// 				}
	// 				var mergedPlane = getPlainFrom4Points(
	// 					finalPointsToGetMergedPlain
	// 				);
	// 			} else {
	// 				var mergedPlane = getPlainFrom4Points(
	// 					pointsToGetMergedPlain
	// 				);
	// 			}
	// 		}
	// 	}

	// 	if (mergedPlane != false) {
	// 		if (isValidPlane(mergedPlane)) {
	// 			return mergedPlane;
	// 		} else {
	// 			return false;
	// 		}
	// 	} else {
	// 		return false;
	// 	}
	// };

	// LimberGridView.prototype.subtractPlanes = function(A, B) {
	// 	// A-B
	// 	// result on "A" area

	// 	var planes = [];
	// 	var result = this.isPlaneBInsidePlaneA_TouchingIsInside(A, B, "all");

	// 	if (result.engulfed == true) {
	// 		return false;
	// 	}
	// 	if (result.overall == true) {
	// 		if (A.x <= B.x) {
	// 			if (A.x + A.width > B.x) {
	// 				// above statement Should be always true
	// 				if (A.y < B.y) {
	// 					var plane = {
	// 						x: A.x,
	// 						y: A.y,
	// 						width: A.width,
	// 						height: B.y - A.y
	// 					};
	// 					if (isValidPlane(plane)) {
	// 						planes.push(plane);
	// 					}
	// 					if (A.y + A.height < B.y + B.height) {
	// 						var plane = {
	// 							x: A.x,
	// 							y: B.y,
	// 							width: B.x - A.x,
	// 							height: A.y + A.height - B.y
	// 						};
	// 						if (isValidPlane(plane)) {
	// 							planes.push(plane);
	// 						}
	// 					} else if (A.y + A.height >= B.y + B.height) {
	// 						var plane = {
	// 							x: A.x,
	// 							y: B.y,
	// 							width: B.x - A.x,
	// 							height: B.height
	// 						};
	// 						if (isValidPlane(plane)) {
	// 							planes.push(plane);
	// 						}
	// 						if (A.y + A.height > B.y + B.height) {
	// 							var plane = {
	// 								x: A.x,
	// 								y: B.y + B.height,
	// 								width: A.width,
	// 								height: A.y + A.height - (B.y + B.height)
	// 							};
	// 							if (isValidPlane(plane)) {
	// 								planes.push(plane);
	// 							}
	// 						}
	// 					}
	// 				} else if (A.y >= B.y) {
	// 					if (A.y + A.height < B.y + B.height) {
	// 						var plane = {
	// 							x: A.x,
	// 							y: A.y,
	// 							width: B.x - A.x,
	// 							height: A.height
	// 						};
	// 						if (isValidPlane(plane)) {
	// 							planes.push(plane);
	// 						}
	// 					} else {
	// 						var plane = {
	// 							x: A.x,
	// 							y: A.y,
	// 							width: B.x - A.x,
	// 							height: B.y + B.height - A.y
	// 						};
	// 						if (isValidPlane(plane)) {
	// 							planes.push(plane);
	// 						}
	// 					}

	// 					if (A.y + A.height > B.y + B.height) {
	// 						var plane = {
	// 							x: A.x,
	// 							y: B.y + B.height,
	// 							width: A.width,
	// 							height: A.y + A.height - (B.y + B.height)
	// 						};
	// 						if (isValidPlane(plane)) {
	// 							planes.push(plane);
	// 						}
	// 					}
	// 				}
	// 			}
	// 			if (A.x + A.width > B.x + B.width) {
	// 				if (A.y < B.y) {
	// 					if (A.y + A.height < B.y + B.height) {
	// 						var plane = {
	// 							x: B.x + B.width,
	// 							y: B.y,
	// 							width: A.x + A.width - (B.x + B.width),
	// 							height: A.y + A.height - B.y
	// 						};
	// 						if (isValidPlane(plane)) {
	// 							planes.push(plane);
	// 						}
	// 					} else {
	// 						var plane = {
	// 							x: B.x + B.width,
	// 							y: B.y,
	// 							width: A.x + A.width - (B.x + B.width),
	// 							height: B.height
	// 						};
	// 						if (isValidPlane(plane)) {
	// 							planes.push(plane);
	// 						}
	// 					}
	// 				} else {
	// 					if (A.y + A.height < B.y + B.height) {
	// 						var plane = {
	// 							x: B.x + B.width,
	// 							y: A.y,
	// 							width: A.x + A.width - (B.x + B.width),
	// 							height: A.height
	// 						};
	// 						if (isValidPlane(plane)) {
	// 							planes.push(plane);
	// 						}
	// 					} else {
	// 						var plane = {
	// 							x: B.x + B.width,
	// 							y: A.y,
	// 							width: A.x + A.width - (B.x + B.width),
	// 							height: B.y + B.height - A.y
	// 						};
	// 						if (isValidPlane(plane)) {
	// 							planes.push(plane);
	// 						}
	// 					}
	// 				}
	// 			}
	// 		} else {
	// 			// other
	// 			if (A.y < B.y) {
	// 				var plane = {
	// 					x: A.x,
	// 					y: A.y,
	// 					width: A.width,
	// 					height: B.y - A.y
	// 				};
	// 				if (isValidPlane(plane)) {
	// 					planes.push(plane);
	// 				}
	// 				if (A.y + A.height < B.y + B.height) {
	// 					if (A.x + A.width <= B.x + B.width) {
	// 						// plane inside of the other plane
	// 					} else {
	// 						var plane = {
	// 							x: B.x + B.width,
	// 							y: B.y,
	// 							width: A.x + A.width - (B.x + B.width),
	// 							height: A.y + A.height - B.y
	// 						};
	// 						if (isValidPlane(plane)) {
	// 							planes.push(plane);
	// 						}
	// 					}
	// 				} else if (A.y + A.height >= B.y + B.height) {
	// 					if (A.x + A.width <= B.x + B.width) {
	// 						// plane inside of the other plane
	// 						if (A.y + A.height > B.y + B.height) {
	// 							var plane = {
	// 								x: A.x,
	// 								y: B.y + B.height,
	// 								width: A.width,
	// 								height: A.y + A.height - (B.y + B.height)
	// 							};
	// 							if (isValidPlane(plane)) {
	// 								planes.push(plane);
	// 							}
	// 						}
	// 					} else {
	// 						var plane = {
	// 							x: B.x + B.width,
	// 							y: B.y,
	// 							width: A.x + A.width - (B.x + B.width),
	// 							height: B.height
	// 						};
	// 						if (isValidPlane(plane)) {
	// 							planes.push(plane);
	// 						}

	// 						if (A.y + A.height > B.y + B.height) {
	// 							var plane = {
	// 								x: A.x,
	// 								y: B.y + B.height,
	// 								width: A.width,
	// 								height: A.y + A.height - (B.y + B.height)
	// 							};
	// 							if (isValidPlane(plane)) {
	// 								planes.push(plane);
	// 							}
	// 						}
	// 					}
	// 				}
	// 			} else if (A.y >= B.y) {
	// 				if (A.y + A.height < B.y + B.height) {
	// 					if (A.x + A.width < B.x + B.width) {
	// 						// plane inside of the other plane
	// 					} else {
	// 						var plane = {
	// 							x: B.x + B.width,
	// 							y: A.y,
	// 							width: A.x + A.width - (B.x + B.width),
	// 							height: A.height
	// 						};
	// 						if (isValidPlane(plane)) {
	// 							planes.push(plane);
	// 						}
	// 					}
	// 				} else {
	// 					if (A.x + A.width < B.x + B.width) {
	// 						// plane inside of the other plane
	// 						if (A.y + A.height > B.y + B.height) {
	// 							var plane = {
	// 								x: A.x,
	// 								y: B.y + B.height,
	// 								width: A.width,
	// 								height: A.y + A.height - (B.y + B.height)
	// 							};
	// 							if (isValidPlane(plane)) {
	// 								planes.push(plane);
	// 							}
	// 						}
	// 					} else {
	// 						var plane = {
	// 							x: B.x + B.width,
	// 							y: A.y,
	// 							width: A.x + A.width - (B.x + B.width),
	// 							height: B.y + B.height - A.y
	// 						};
	// 						if (isValidPlane(plane)) {
	// 							planes.push(plane);
	// 						}
	// 						if (A.y + A.height > B.y + B.height) {
	// 							var plane = {
	// 								x: A.x,
	// 								y: B.y + B.height,
	// 								width: A.width,
	// 								height: A.y + A.height - (B.y + B.height)
	// 							};
	// 							if (isValidPlane(plane)) {
	// 								planes.push(plane);
	// 							}
	// 						}
	// 					}
	// 				}
	// 			}
	// 		}
	// 	} else {
	// 		return false;
	// 	}
	// 	if (planes.length > 0) {
	// 		return planes;
	// 	} else {
	// 		return false;
	// 	}
	// };

	// ----------------------------------------------------------------------------------------- //

	// -------------------------------------- POSITIONING LOGIC END ---------------------------- //

	// ----------------------------------------------------------------------------------------- //

	// ----------------------------------------------------------------------------------------- //

	// ------------------------------ EVENT HANDLERS MISCELLANEOUS ----------------------------- //

	// ----------------------------------------------------------------------------------------- //

	// LimberGridView.prototype.onWindowResize = function(event) {
	// 	setTimeout(
	// 		this.onWindowResizeTimerCallbackFunctionVariable,
	// 		this.WINDOW_RESIZE_WAIT_TIME
	// 	);
	// 	window.removeEventListener(
	// 		"resize",
	// 		this.onWindowResizeFunctionVariable
	// 	);
	// };

	// LimberGridView.prototype.onWindowResizeTimerCallback = function(event) {
	// 	this.init(this.WIDTH, false);
	// 	this.render();

	// 	if (this.options.reRenderOnResize != false) {
	// 		window.addEventListener(
	// 			"resize",
	// 			this.onWindowResizeFunctionVariable
	// 		);
	// 	}
	// };

	// LimberGridView.prototype.onItemClick = function(event) {
	// 	this.callbacks.onItemClickCallback(event);
	// };

	// ----------------------------------------------------------------------------------------- //

	// ------------------------------ EVENT HANDLERS MISCELLANEOUS END ------------------------- //

	// ----------------------------------------------------------------------------------------- //

	// ----------------------------------------------------------------------------------------- //

	// -------------------- EVENT HANDLERS FOR ADDING AND CUTTING SPACE ITEM ------------------- //

	// ----------------------------------------------------------------------------------------- //

	// LimberGridView.prototype.onLimberGridMouseDown = function(event) {
	// 	if (event.target.classList.contains("limberGridView")) {
	// 		event.stopPropagation();
	// 	} else {
	// 		return;
	// 	}

	// 	if (event.which != 1) {
	// 		return;
	// 	}

	// 	this.limberGridMouseDownCancel = false;
	// 	this.limberGridMouseDownTimerComplete = false;

	// 	clearTimeout(this.limberGridMouseDownCheckTimeOutVariable);
	// 	this.limberGridMouseDownCheckTimeOutVariable = setTimeout(
	// 		this.onLimberGridMouseDownCheck.bind(
	// 			this,
	// 			event,
	// 			event.offsetX,
	// 			event.offsetY
	// 		),
	// 		this.MOUSE_DOWN_TIME
	// 	);

	// 	this.$limberGridView[0].addEventListener(
	// 		"mousemove",
	// 		this.onLimberGridMouseMoveBindedFunctionVariable
	// 	);
	// 	document.addEventListener(
	// 		"mouseup",
	// 		this.onLimberGridMouseUpBindedFunctionVariable
	// 	);
	// 	document.addEventListener(
	// 		"contextmenu",
	// 		this.onLimberGridContextMenuBindedFunctionVariable
	// 	);
	// };

	// LimberGridView.prototype.onLimberGridTouchStart = function(event) {
	// 	if (event.target.classList.contains("limberGridView")) {
	// 		event.stopPropagation();
	// 	} else {
	// 		return;
	// 	}

	// 	this.limberGridTouchStartCancel = false;
	// 	this.limberGridTouchStartTimerComplete = false;

	// 	clearTimeout(this.limberGridTouchStartCheckTimeOutVariable);
	// 	this.limberGridTouchStartCheckTimeOutVariable = setTimeout(
	// 		this.onLimberGridTouchStartCheck.bind(this, event),
	// 		this.TOUCH_HOLD_TIME
	// 	);

	// 	this.$limberGridView[0].addEventListener(
	// 		"touchmove",
	// 		this.onLimberGridTouchMoveBindedFunctionVariable
	// 	);
	// 	document.addEventListener(
	// 		"touchend",
	// 		this.onLimberGridTouchEndBindedFunctionVariable
	// 	);
	// 	document.addEventListener(
	// 		"touchcancel",
	// 		this.onLimberGridTouchCancelBindedFunctionVariable
	// 	);
	// 	document.addEventListener(
	// 		"contextmenu",
	// 		this.onLimberGridTouchContextMenuBindedFunctionVariable
	// 	);
	// 	this.unInitializeItemTouchEvents();

	// 	event.stopPropagation();
	// };

	// LimberGridView.prototype.onLimberGridMouseDownCheck = function(
	// 	event,
	// 	offsetX,
	// 	offsetY
	// ) {
	// 	if (this.limberGridMouseDownCancel == false) {
	// 		this.limberGridMouseDownTimerComplete = true;

	// 		this.$body[0].classList.add(
	// 			"limberGridViewBodyTagStateElementDraggingOrResizing",
	// 			"limberGridViewBodyTagStateElementAdding"
	// 		);
	// 		var length_0 = this.$limberGridViewItems.length;
	// 		for (var i = 0; i < length_0; i++) {
	// 			this.$limberGridViewItems[i].classList.add(
	// 				"limberGridViewItemResizingState"
	// 			);
	// 		}

	// 		var length_0 = this.$limberGridViewGridPseudoItems.length;
	// 		for (var i = 0; i < length_0; i++) {
	// 			this.$limberGridViewGridPseudoItems[i].classList.add(
	// 				"limberGridViewGridPseudoItemResizingState"
	// 			);
	// 		}

	// 		var scrollTop = this.$limberGridView[0].scrollTop;
	// 		var scrollLeft = this.$limberGridView[0].scrollLeft;
	// 		var x = offsetX + scrollLeft - this.PADDING_LEFT;
	// 		var y = offsetY + scrollTop - this.PADDING_TOP;

	// 		this.userActionData = {
	// 			type: "add",
	// 			addPositionX: x,
	// 			addPositionY: y
	// 		};

	// 		this.$limberGridViewAddItemGuide[0].style.height = 1 + "px";
	// 		this.$limberGridViewAddItemGuide[0].style.width = 1 + "px";
	// 		this.$limberGridViewAddItemGuide[0].style.transform =
	// 			"translate(" + x + "px, " + y + "px)";

	// 		if (this.ADD_OR_CUTSPACE_TOGGLE == "ADD") {
	// 			this.$limberGridViewAddItemGuide[0].classList.add(
	// 				"limberGridViewAddItemGuideActive"
	// 			);
	// 		} else if (this.ADD_OR_CUTSPACE_TOGGLE == "CUTSPACE") {
	// 			this.$limberGridViewAddItemGuide[0].classList.add(
	// 				"limberGridViewAddItemGuideActive",
	// 				"limberGridViewAddItemGuideCutMode"
	// 			);
	// 		}

	// 		this.$limberGridViewHeightAdjustGuide[0].style.height = 0 + "px";
	// 		this.$limberGridViewHeightAdjustGuide[0].classList.add(
	// 			"limberGridViewHeightAdjustGuideActive"
	// 		);
	// 	} else {
	// 		// mouseDown cancel before TimerComplete
	// 	}
	// };

	// LimberGridView.prototype.onLimberGridTouchStartCheck = function(event) {
	// 	if (this.limberGridTouchStartCancel == false) {
	// 		this.limberGridTouchStartTimerComplete = true;

	// 		this.$body[0].classList.add(
	// 			"limberGridViewBodyTagStateElementDraggingOrResizing",
	// 			"limberGridViewBodyTagStateElementAdding"
	// 		);
	// 		var length_0 = this.$limberGridViewItems.length;
	// 		for (var i = 0; i < length_0; i++) {
	// 			this.$limberGridViewItems[i].classList.add(
	// 				"limberGridViewItemResizingState"
	// 			);
	// 		}

	// 		var length_0 = this.$limberGridViewGridPseudoItems.length;
	// 		for (var i = 0; i < length_0; i++) {
	// 			this.$limberGridViewGridPseudoItems[i].classList.add(
	// 				"limberGridViewGridPseudoItemResizingState"
	// 			);
	// 		}

	// 		var touchPositionOnLimberGrid = this.calculateTouchPosOnLimberGrid(
	// 			event
	// 		);

	// 		var x = touchPositionOnLimberGrid.x;
	// 		var y = touchPositionOnLimberGrid.y;

	// 		this.userActionData = {
	// 			type: "add",
	// 			addPositionX: x,
	// 			addPositionY: y
	// 		};

	// 		var removeAddItemOnTouchHoldGuideFunction = function() {
	// 			this.$limberGridViewAddItemOnTouchHoldGuide[0].classList.remove(
	// 				"limberGridViewAddItemOnTouchHoldGuideActive"
	// 			);
	// 		};
	// 		setTimeout(removeAddItemOnTouchHoldGuideFunction.bind(this), 500);

	// 		this.$limberGridViewAddItemGuide[0].style.height = 1 + "px";
	// 		this.$limberGridViewAddItemGuide[0].style.width = 1 + "px";
	// 		this.$limberGridViewAddItemGuide[0].style.transform =
	// 			"translate(" + x + "px, " + y + "px)";

	// 		if (this.ADD_OR_CUTSPACE_TOGGLE == "ADD") {
	// 			this.$limberGridViewAddItemGuide[0].classList.add(
	// 				"limberGridViewAddItemGuideActive"
	// 			);
	// 		} else if (this.ADD_OR_CUTSPACE_TOGGLE == "CUTSPACE") {
	// 			this.$limberGridViewAddItemGuide[0].classList.add(
	// 				"limberGridViewAddItemGuideActive",
	// 				"limberGridViewAddItemGuideCutMode"
	// 			);
	// 		}

	// 		this.$limberGridViewHeightAdjustGuide[0].style.height = 0 + "px";
	// 		this.$limberGridViewHeightAdjustGuide[0].classList.add(
	// 			"limberGridViewHeightAdjustGuideActive"
	// 		);

	// 		this.insertAddItemOnTouchHoldGuideStyles(x, y);
	// 		this.$limberGridViewAddItemOnTouchHoldGuide[0].style.transform =
	// 			"translate(" + x + "px, " + y + "px)";
	// 		this.$limberGridViewAddItemOnTouchHoldGuide[0].classList.add(
	// 			"limberGridViewAddItemOnTouchHoldGuideActive"
	// 		);

	// 		event.preventDefault();
	// 	} else {
	// 		// touchstart cancel before TimerComplete
	// 	}
	// };

	// LimberGridView.prototype.onLimberGridMouseMove = function(event) {
	// 	if (this.limberGridMouseDownTimerComplete == true) {
	// 		if (
	// 			this.$limberGridViewAddItemGuide[0].classList.contains(
	// 				"limberGridViewAddItemGuideAddAllow"
	// 			) ||
	// 			this.$limberGridViewAddItemGuide[0].classList.contains(
	// 				"limberGridViewAddItemGuideAddDisallow"
	// 			)
	// 		) {
	// 			this.$limberGridViewAddItemGuide[0].classList.remove(
	// 				"limberGridViewAddItemGuideAddAllow",
	// 				"limberGridViewAddItemGuideAddDisallow"
	// 			);
	// 		}

	// 		var scrollTop = this.$limberGridView[0].scrollTop;
	// 		var scrollLeft = this.$limberGridView[0].scrollLeft;

	// 		var x = this.userActionData.addPositionX;
	// 		var y = this.userActionData.addPositionY;

	// 		var newWidth = event.offsetX - x + scrollLeft - this.PADDING_LEFT;
	// 		var newHeight = event.offsetY - y + scrollTop - this.PADDING_TOP;

	// 		this.userActionData.newWidth = newWidth;
	// 		this.userActionData.newHeight = newHeight;

	// 		var yMousePosition = event.offsetY + scrollTop;
	// 		this.adjustHeight(yMousePosition);

	// 		if (newWidth > 0 && newHeight > 0) {
	// 			this.$limberGridViewAddItemGuide[0].style.width =
	// 				newWidth + "px";
	// 			this.$limberGridViewAddItemGuide[0].style.height =
	// 				newHeight + "px";
	// 		}

	// 		if (this.ADD_OR_CUTSPACE_TOGGLE == "ADD") {
	// 			clearTimeout(this.addItemAllowCheckTimeOutVariable);
	// 			this.addItemAllowCheckTimeOutVariable = setTimeout(
	// 				this.addItemAllowCheckTimeOut.bind(
	// 					this,
	// 					this.userActionData.addPositionX,
	// 					this.userActionData.addPositionY,
	// 					newWidth,
	// 					newHeight
	// 				),
	// 				this.DEMO_WAIT_TIME
	// 			);
	// 		} else if (this.ADD_OR_CUTSPACE_TOGGLE == "CUTSPACE") {
	// 			clearTimeout(this.cutSpaceAllowCheckTimeOutVariable);
	// 			this.cutSpaceAllowCheckTimeOutVariable = setTimeout(
	// 				this.cutSpaceAllowCheckTimeOut.bind(
	// 					this,
	// 					this.userActionData.addPositionX,
	// 					this.userActionData.addPositionY,
	// 					newWidth,
	// 					newHeight
	// 				),
	// 				this.DEMO_WAIT_TIME
	// 			);
	// 		}
	// 	} else {
	// 		clearTimeout(this.limberGridMouseDownCheckTimeOutVariable);
	// 		this.$limberGridView[0].removeEventListener(
	// 			"mousemove",
	// 			this.onLimberGridMouseMoveBindedFunctionVariable
	// 		);
	// 		document.removeEventListener(
	// 			"mouseup",
	// 			this.onLimberGridMouseUpBindedFunctionVariable
	// 		);
	// 		document.removeEventListener(
	// 			"contextmenu",
	// 			this.onLimberGridContextMenuBindedFunctionVariable
	// 		);
	// 	}
	// 	event.stopPropagation();
	// };

	// LimberGridView.prototype.onLimberGridTouchMove = function(event) {
	// 	if (this.limberGridTouchStartTimerComplete == true) {
	// 		console.log("limberGridTouchStartTimerComplete");
	// 		if (
	// 			this.$limberGridViewAddItemGuide[0].classList.contains(
	// 				"limberGridViewAddItemGuideAddAllow"
	// 			) ||
	// 			this.$limberGridViewAddItemGuide[0].classList.contains(
	// 				"limberGridViewAddItemGuideAddDisallow"
	// 			)
	// 		) {
	// 			this.$limberGridViewAddItemGuide[0].classList.remove(
	// 				"limberGridViewAddItemGuideAddAllow",
	// 				"limberGridViewAddItemGuideAddDisallow"
	// 			);
	// 		}

	// 		var scrollTop = this.$limberGridView[0].scrollTop;
	// 		var scrollLeft = this.$limberGridView[0].scrollLeft;

	// 		var x = this.userActionData.addPositionX;
	// 		var y = this.userActionData.addPositionY;

	// 		var touchPositionOnLimberGrid = this.calculateTouchPosOnLimberGrid(
	// 			event
	// 		);

	// 		if (touchPositionOnLimberGrid != false) {
	// 			var newWidth = touchPositionOnLimberGrid.x - x;
	// 			var newHeight = touchPositionOnLimberGrid.y - y;

	// 			this.userActionData.newWidth = newWidth;
	// 			this.userActionData.newHeight = newHeight;

	// 			if (newWidth > 0 && newHeight > 0) {
	// 				this.$limberGridViewAddItemGuide[0].style.width =
	// 					newWidth + "px";
	// 				this.$limberGridViewAddItemGuide[0].style.height =
	// 					newHeight + "px";
	// 			}
	// 		}

	// 		if (touchPositionOnLimberGrid != false) {
	// 			var limberGridViewBoundingClientRect = this.$limberGridView[0].getBoundingClientRect();
	// 			var limberGridViewWidthVisibleWidth =
	// 				this.$limberGridView[0].offsetWidth -
	// 				limberGridViewBoundingClientRect.left;
	// 			var limberGridViewHeightVisibleHeight =
	// 				this.$limberGridView[0].offsetHeight -
	// 				limberGridViewBoundingClientRect.top;
	// 			var limberGridViewOnVisibleAreaX =
	// 				touchPositionOnLimberGrid.x +
	// 				this.PADDING_LEFT -
	// 				scrollLeft;
	// 			var limberGridViewOnVisibleAreaY =
	// 				touchPositionOnLimberGrid.y + this.PADDING_TOP - scrollTop;

	// 			var yTouchPosition = touchPositionOnLimberGrid.y;
	// 			this.adjustHeight(yTouchPosition);

	// 			var programScrolled = this.adjustScroll(
	// 				limberGridViewOnVisibleAreaY,
	// 				limberGridViewHeightVisibleHeight
	// 			);
	// 		}

	// 		if (this.ADD_OR_CUTSPACE_TOGGLE == "ADD") {
	// 			clearTimeout(this.addItemAllowCheckTimeOutVariable);
	// 			if (programScrolled != true) {
	// 				this.addItemAllowCheckTimeOutVariable = setTimeout(
	// 					this.addItemAllowCheckTimeOut.bind(
	// 						this,
	// 						this.userActionData.addPositionX,
	// 						this.userActionData.addPositionY,
	// 						newWidth,
	// 						newHeight
	// 					),
	// 					this.DEMO_WAIT_TIME
	// 				);
	// 			}
	// 		} else if (this.ADD_OR_CUTSPACE_TOGGLE == "CUTSPACE") {
	// 			clearTimeout(this.cutSpaceAllowCheckTimeOutVariable);
	// 			if (programScrolled != true) {
	// 				this.cutSpaceAllowCheckTimeOutVariable = setTimeout(
	// 					this.cutSpaceAllowCheckTimeOut.bind(
	// 						this,
	// 						this.userActionData.addPositionX,
	// 						this.userActionData.addPositionY,
	// 						newWidth,
	// 						newHeight
	// 					),
	// 					this.DEMO_WAIT_TIME
	// 				);
	// 			}
	// 		}
	// 		event.preventDefault();
	// 	} else {
	// 		clearTimeout(this.limberGridTouchStartCheckTimeOutVariable);
	// 		this.$limberGridView[0].removeEventListener(
	// 			"touchmove",
	// 			this.onLimberGridTouchMoveBindedFunctionVariable
	// 		);
	// 		document.removeEventListener(
	// 			"touchend",
	// 			this.onLimberGridTouchEndBindedFunctionVariable
	// 		);
	// 		document.removeEventListener(
	// 			"touchcancel",
	// 			this.onLimberGridTouchCancelBindedFunctionVariable
	// 		);
	// 		document.removeEventListener(
	// 			"contextmenu",
	// 			this.onLimberGridTouchContextMenuBindedFunctionVariable
	// 		);
	// 		this.initializeItemTouchEvents();
	// 	}

	// 	event.stopPropagation();
	// };

	// LimberGridView.prototype.onLimberGridMouseUp = function(event) {
	// 	clearTimeout(this.addItemAllowCheckTimeOutVariable);
	// 	clearTimeout(this.limberGridMouseDownCheckTimeOutVariable);
	// 	var itemAddedFlag = false;
	// 	if (this.limberGridMouseDownTimerComplete == true) {
	// 		if (this.ADD_OR_CUTSPACE_TOGGLE == "ADD") {
	// 			if (
	// 				this.addItemAllowCheck(
	// 					this.userActionData.addPositionX,
	// 					this.userActionData.addPositionY,
	// 					this.userActionData.newWidth,
	// 					this.userActionData.newHeight
	// 				)
	// 			) {
	// 				var item = {
	// 					x: this.userActionData.addPositionX,
	// 					y: this.userActionData.addPositionY,
	// 					width: this.userActionData.newWidth,
	// 					height: this.userActionData.newHeight
	// 				};

	// 				var scrollTop = this.$limberGridView[0].scrollTop;

	// 				var renderDetails = this.addItemsAtPositions(
	// 					[item],
	// 					false,
	// 					"addItemInteractive"
	// 				);
	// 				itemAddedFlag = true;

	// 				this.$limberGridView[0].scrollTop = scrollTop;
	// 			}
	// 		} else if (this.ADD_OR_CUTSPACE_TOGGLE == "CUTSPACE") {
	// 			if (
	// 				this.cutSpaceAllowCheck(
	// 					this.userActionData.addPositionX,
	// 					this.userActionData.addPositionY,
	// 					this.userActionData.newWidth,
	// 					this.userActionData.newHeight
	// 				)
	// 			) {
	// 				this.shiftItemsUp(
	// 					this.userActionData.addPositionY,
	// 					this.userActionData.newHeight
	// 				);
	// 			}
	// 		}
	// 	} else {
	// 		this.limberGridMouseDownCancel = true;
	// 	}
	// 	this.onLimberGridContextMenu();
	// 	event.stopPropagation();

	// 	if (
	// 		this.callbacks.addCompleteCallback != undefined &&
	// 		this.callbacks.addCompleteCallback != null
	// 	) {
	// 		if (itemAddedFlag == true) {
	// 			this.callbacks.addCompleteCallback(
	// 				renderDetails.items,
	// 				item.width,
	// 				item.height,
	// 				"addItemInteractive"
	// 			);
	// 		}
	// 	}
	// };

	// LimberGridView.prototype.onLimberGridTouchEnd = function(event) {
	// 	clearTimeout(this.addItemAllowCheckTimeOutVariable);
	// 	clearTimeout(this.limberGridTouchStartCheckTimeOutVariable);
	// 	var itemAddedFlag = false;
	// 	if (this.limberGridTouchStartTimerComplete == true) {
	// 		if (this.ADD_OR_CUTSPACE_TOGGLE == "ADD") {
	// 			if (
	// 				this.addItemAllowCheck(
	// 					this.userActionData.addPositionX,
	// 					this.userActionData.addPositionY,
	// 					this.userActionData.newWidth,
	// 					this.userActionData.newHeight
	// 				)
	// 			) {
	// 				var item = {
	// 					x: this.userActionData.addPositionX,
	// 					y: this.userActionData.addPositionY,
	// 					width: this.userActionData.newWidth,
	// 					height: this.userActionData.newHeight
	// 				};

	// 				var scrollTop = this.$limberGridView[0].scrollTop;

	// 				var renderDetails = this.addItemsAtPositions(
	// 					[item],
	// 					false,
	// 					"addItemInteractive"
	// 				);
	// 				itemAddedFlag = true;

	// 				this.$limberGridView[0].scrollTop = scrollTop;

	// 				this.limberGridTouchStartTimerComplete = false;
	// 			}
	// 		} else if (this.ADD_OR_CUTSPACE_TOGGLE == "CUTSPACE") {
	// 			if (
	// 				this.cutSpaceAllowCheck(
	// 					this.userActionData.addPositionX,
	// 					this.userActionData.addPositionY,
	// 					this.userActionData.newWidth,
	// 					this.userActionData.newHeight
	// 				)
	// 			) {
	// 				this.shiftItemsUp(
	// 					this.userActionData.addPositionY,
	// 					this.userActionData.newHeight
	// 				);
	// 			}
	// 		}
	// 	} else {
	// 		this.limberGridTouchStartCancel = true;
	// 	}
	// 	this.limberGridTouchStartTimerComplete = false;
	// 	this.onLimberGridContextMenu();
	// 	this.initializeItemTouchEvents();

	// 	event.stopPropagation();

	// 	if (
	// 		this.callbacks.addCompleteCallback != undefined &&
	// 		this.callbacks.addCompleteCallback != null
	// 	) {
	// 		if (itemAddedFlag == true) {
	// 			this.callbacks.addCompleteCallback(
	// 				renderDetails.items,
	// 				item.width,
	// 				item.height,
	// 				"addItemInteractive"
	// 			);
	// 		}
	// 	}
	// };

	// LimberGridView.prototype.onLimberGridTouchCancel = function(event) {
	// 	clearTimeout(this.addItemAllowCheckTimeOutVariable);
	// 	clearTimeout(this.limberGridTouchStartCheckTimeOutVariable);
	// 	this.limberGridTouchStartCancel = false;
	// 	this.limberGridTouchStartTimerComplete = false;
	// 	this.onLimberGridContextMenu();
	// 	this.initializeItemTouchEvents();

	// 	event.stopPropagation();
	// };

	// LimberGridView.prototype.onLimberGridTouchContextMenu = function(event) {
	// 	event.preventDefault();
	// };

	// LimberGridView.prototype.onLimberGridContextMenu = function(event) {
	// 	if (event != undefined) {
	// 		event.preventDefault();
	// 		event.stopPropagation();
	// 	}

	// 	this.$limberGridViewAddItemGuide[0].classList.remove(
	// 		"limberGridViewAddItemGuideActive",
	// 		"limberGridViewAddItemGuideCutMode",
	// 		"limberGridViewAddItemGuideAddAllow",
	// 		"limberGridViewAddItemGuideAddDisallow"
	// 	);
	// 	this.$limberGridViewHeightAdjustGuide[0].classList.remove(
	// 		"limberGridViewHeightAdjustGuideActive"
	// 	);
	// 	this.$limberGridViewHeightAdjustGuide[0].style.height = 0 + "px";

	// 	this.$body[0].classList.remove(
	// 		"limberGridViewBodyTagStateElementDraggingOrResizing",
	// 		"limberGridViewBodyTagStateElementAdding"
	// 	);
	// 	var length_0 = this.$limberGridViewItems.length;
	// 	for (var i = 0; i < length_0; i++) {
	// 		this.$limberGridViewItems[i].classList.remove(
	// 			"limberGridViewItemResizingState"
	// 		);
	// 	}

	// 	var length_0 = this.$limberGridViewGridPseudoItems.length;
	// 	for (var i = 0; i < length_0; i++) {
	// 		this.$limberGridViewGridPseudoItems[i].classList.remove(
	// 			"limberGridViewGridPseudoItemResizingState"
	// 		);
	// 	}

	// 	this.$limberGridViewAddItemOnTouchHoldGuide[0].classList.remove(
	// 		"limberGridViewAddItemOnTouchHoldGuideActive"
	// 	);

	// 	this.$limberGridView[0].removeEventListener(
	// 		"mousemove",
	// 		this.onLimberGridMouseMoveBindedFunctionVariable
	// 	);
	// 	document.removeEventListener(
	// 		"mouseup",
	// 		this.onLimberGridMouseUpBindedFunctionVariable
	// 	);
	// 	document.removeEventListener(
	// 		"contextmenu",
	// 		this.onLimberGridContextMenuBindedFunctionVariable
	// 	);

	// 	this.$limberGridView[0].removeEventListener(
	// 		"touchmove",
	// 		this.onLimberGridTouchMoveBindedFunctionVariable
	// 	);
	// 	document.removeEventListener(
	// 		"touchend",
	// 		this.onLimberGridTouchEndBindedFunctionVariable
	// 	);
	// 	document.removeEventListener(
	// 		"touchcancel",
	// 		this.onLimberGridTouchCancelBindedFunctionVariable
	// 	);
	// 	document.removeEventListener(
	// 		"contextmenu",
	// 		this.onLimberGridTouchContextMenuBindedFunctionVariable
	// 	);
	// };

	// LimberGridView.prototype.addItemAllowCheckTimeOut = function(
	// 	x,
	// 	y,
	// 	width,
	// 	height
	// ) {
	// 	if (this.addItemAllowCheck(x, y, width, height) == false) {
	// 		this.$limberGridViewAddItemGuide[0].classList.remove(
	// 			"limberGridViewAddItemGuideAddAllow"
	// 		);
	// 		this.$limberGridViewAddItemGuide[0].classList.add(
	// 			"limberGridViewAddItemGuideAddDisallow"
	// 		);
	// 	} else {
	// 		this.$limberGridViewAddItemGuide[0].classList.remove(
	// 			"limberGridViewAddItemGuideAddDisallow"
	// 		);
	// 		this.$limberGridViewAddItemGuide[0].classList.add(
	// 			"limberGridViewAddItemGuideAddAllow"
	// 		);
	// 	}
	// };

	// LimberGridView.prototype.addItemAllowCheck = function(x, y, width, height) {
	// 	var tempPlane = {
	// 		x: x,
	// 		y: y,
	// 		width: width,
	// 		height: height
	// 	};

	// 	if (x < 0 || y < 0) {
	// 		return false;
	// 	}

	// 	if (typeof width != "number" || typeof height != "number") {
	// 		return false;
	// 	}

	// 	if (x + width > this.WIDTH) {
	// 		return false;
	// 	}

	// 	if (width < 50 || height < 50) {
	// 		return false;
	// 	}

	// 	var length_0 = this.positionData.length;
	// 	for (var i = 0; i < length_0; i++) {
	// 		var iterItem = {
	// 			x:
	// 				this.positionData[i].x -
	// 				this.getMarginAtPoint(this.positionData[i].x),
	// 			y:
	// 				this.positionData[i].y -
	// 				this.getMarginAtPoint(this.positionData[i].y),
	// 			width:
	// 				this.positionData[i].width +
	// 				this.getMarginAtPoint(this.positionData[i].x) +
	// 				this.MARGIN,
	// 			height:
	// 				this.positionData[i].height +
	// 				this.getMarginAtPoint(this.positionData[i].y) +
	// 				this.MARGIN
	// 		};
	// 		var isInside = this.isPlaneBInsidePlaneA_TouchingIsInside(
	// 			iterItem,
	// 			tempPlane
	// 		);

	// 		if (isInside) {
	// 			return false;
	// 		}
	// 	}
	// 	return true;
	// };

	// LimberGridView.prototype.cutSpaceAllowCheckTimeOut = function(
	// 	x,
	// 	y,
	// 	width,
	// 	height
	// ) {
	// 	if (this.cutSpaceAllowCheck(x, y, width, height) == false) {
	// 		this.$limberGridViewAddItemGuide[0].classList.remove(
	// 			"limberGridViewAddItemGuideAddAllow"
	// 		);
	// 		this.$limberGridViewAddItemGuide[0].classList.add(
	// 			"limberGridViewAddItemGuideAddDisallow"
	// 		);
	// 	} else {
	// 		this.$limberGridViewAddItemGuide[0].classList.remove(
	// 			"limberGridViewAddItemGuideAddDisallow"
	// 		);
	// 		this.$limberGridViewAddItemGuide[0].classList.add(
	// 			"limberGridViewAddItemGuideAddAllow"
	// 		);
	// 	}
	// };

	// LimberGridView.prototype.cutSpaceAllowCheck = function(
	// 	x,
	// 	y,
	// 	width,
	// 	height
	// ) {
	// 	var tempPlane = {
	// 		x: 0,
	// 		y: y - this.MARGIN / 2,
	// 		width: this.WIDTH,
	// 		height: height + this.MARGIN / 2
	// 	};

	// 	if (typeof width != "number" || typeof height != "number") {
	// 		return false;
	// 	}

	// 	var length_0 = this.positionData.length;
	// 	for (var i = 0; i < length_0; i++) {
	// 		var isInside = this.isPlaneBInsidePlaneA_TouchingIsInside(
	// 			tempPlane,
	// 			this.positionData[i]
	// 		);

	// 		if (isInside) {
	// 			return false;
	// 		}
	// 	}
	// 	return true;
	// };

	// LimberGridView.prototype.insertAddItemOnTouchHoldGuideStyles = function(
	// 	x,
	// 	y
	// ) {
	// 	var ripple = [];
	// 	ripple[0] = "@keyframes limberGridViewAddItemOnTouchHoldRipple {";
	// 	ripple[1] = "0% {";
	// 	ripple[2] =
	// 		"transform: translate(" +
	// 		(x - 5) +
	// 		"px, " +
	// 		(y - 5) +
	// 		"px) scale(0, 0);";
	// 	ripple[3] = "opacity: 1;";
	// 	ripple[4] = "}";
	// 	ripple[5] = "20% {";
	// 	ripple[6] =
	// 		"transform: translate(" +
	// 		(x - 5) +
	// 		"px, " +
	// 		(y - 5) +
	// 		"px) scale(25, 25);";
	// 	ripple[7] = "opacity: 1;";
	// 	ripple[8] = "}";
	// 	ripple[9] = "100% {";
	// 	ripple[10] =
	// 		"transform: translate(" +
	// 		(x - 5) +
	// 		"px, " +
	// 		(y - 5) +
	// 		"px) scale(50, 50);";
	// 	ripple[11] = "opacity: 0;";
	// 	ripple[12] = "}";
	// 	ripple[13] = "}";
	// 	var rippleString = ripple.join("");
	// 	this.$limberGridViewStyle[0].innerHTML = rippleString;
	// };

	// ----------------------------------------------------------------------------------------- //

	// ------------------- EVENT HANDLERS FOR ADDING AND CUTTING SPACE ITEM END ---------------- //

	// ----------------------------------------------------------------------------------------- //

	// ----------------------------------------------------------------------------------------- //

	// ------------------------ EVENT HANDLERS AND CODE FOR ITEM INTERACTION ------------------- //

	// ----------------------------------------------------------------------------------------- //

	// LimberGridView.prototype.onItemMouseDown = function(event) {
	// 	if (event.which != 1) {
	// 		return;
	// 	}

	// 	if (event.target.classList.contains("limberGridViewItem")) {
	// 		event.stopPropagation();
	// 	} else {
	// 		return;
	// 	}

	// 	var radius = Math.sqrt(
	// 		Math.pow(0 - event.offsetX, 2) + Math.pow(0 - event.offsetY, 2)
	// 	);
	// 	var resizeUIBox = {
	// 		x:
	// 			event.currentTarget.offsetWidth -
	// 			this.RESIZE_SQUARE_GUIDE_LENGTH,
	// 		y:
	// 			event.currentTarget.offsetHeight -
	// 			this.RESIZE_SQUARE_GUIDE_LENGTH,
	// 		width:
	// 			this.RESIZE_SQUARE_GUIDE_LENGTH +
	// 			this.RESIZE_SQUARE_BORDER_GUIDE_WIDTH,
	// 		height:
	// 			this.RESIZE_SQUARE_GUIDE_LENGTH +
	// 			this.RESIZE_SQUARE_BORDER_GUIDE_WIDTH
	// 	};

	// 	if (radius <= this.MOVE_GUIDE_RADIUS) {
	// 		this.userActionData = {
	// 			type: "move",
	// 			itemIndex: event.currentTarget.attributes["data-index"].value
	// 		};
	// 		this.mouseDownCancel = false;
	// 		this.mouseDownTimerComplete = false;

	// 		document.addEventListener(
	// 			"mousemove",
	// 			this.onMouseMoveBindedFunctionVariable
	// 		);
	// 		document.addEventListener(
	// 			"mouseup",
	// 			this.onMouseUpBindedFunctionVariable
	// 		);
	// 		document.addEventListener(
	// 			"contextmenu",
	// 			this.onContextMenuBindedFunctionVariable
	// 		);
	// 		clearTimeout(this.longPressCheck);
	// 		this.longPressCheck = setTimeout(
	// 			this.mouseDownCheck.bind(this, event),
	// 			this.MOUSE_DOWN_TIME
	// 		);

	// 		event.preventDefault();
	// 	} else if (
	// 		event.offsetX >= resizeUIBox.x &&
	// 		event.offsetX <= resizeUIBox.x + resizeUIBox.width &&
	// 		event.offsetY >= resizeUIBox.y &&
	// 		event.offsetY <= resizeUIBox.y + resizeUIBox.height
	// 	) {
	// 		this.$limberGridViewHeightAdjustGuide[0].style.height = 0 + "px";
	// 		this.$limberGridViewHeightAdjustGuide[0].classList.add(
	// 			"limberGridViewHeightAdjustGuideActive"
	// 		);

	// 		this.userActionData = {
	// 			type: "resize",
	// 			itemIndex: event.currentTarget.attributes["data-index"].value
	// 		};
	// 		this.mouseDownCancel = false;
	// 		this.mouseDownTimerComplete = true;

	// 		this.$limberGridView[0].addEventListener(
	// 			"mousemove",
	// 			this.onMouseMoveBindedFunctionVariable
	// 		);
	// 		document.addEventListener(
	// 			"mouseup",
	// 			this.onMouseUpBindedFunctionVariable
	// 		);
	// 		document.addEventListener(
	// 			"contextmenu",
	// 			this.onContextMenuBindedFunctionVariable
	// 		);

	// 		var transformStyle = this.$limberGridViewItems[
	// 			this.userActionData.itemIndex
	// 		].style.transform;
	// 		var i1 = transformStyle.indexOf("px");
	// 		var i2 = transformStyle.indexOf(",");
	// 		var x = Number(transformStyle.substring(10, i1));
	// 		var y = Number(
	// 			transformStyle.substring(i2 + 2, transformStyle.length - 3)
	// 		);

	// 		this.userActionData.itemPositionX = x;
	// 		this.userActionData.itemPositionY = y;

	// 		this.$limberGridViewGridPseudoItems[
	// 			this.userActionData.itemIndex
	// 		].style.width =
	// 			this.positionData[this.userActionData.itemIndex].width + "px";
	// 		this.$limberGridViewGridPseudoItems[
	// 			this.userActionData.itemIndex
	// 		].style.height =
	// 			this.positionData[this.userActionData.itemIndex].height + "px";

	// 		this.$limberGridViewGridPseudoItems[
	// 			this.userActionData.itemIndex
	// 		].style.transform = "translate(" + x + "px, " + y + "px)";
	// 		this.$limberGridViewGridPseudoItems[
	// 			this.userActionData.itemIndex
	// 		].classList.add("limberGridViewGridPseudoItemActive");

	// 		this.$body[0].classList.add(
	// 			"limberGridViewBodyTagStateElementDraggingOrResizing"
	// 		);
	// 		var length_0 = this.$limberGridViewItems.length;
	// 		for (var i = 0; i < length_0; i++) {
	// 			this.$limberGridViewItems[i].classList.add(
	// 				"limberGridViewItemResizingState"
	// 			);
	// 		}

	// 		var length_0 = this.$limberGridViewGridPseudoItems.length;
	// 		for (var i = 0; i < length_0; i++) {
	// 			this.$limberGridViewGridPseudoItems[i].classList.add(
	// 				"limberGridViewGridPseudoItemResizingState"
	// 			);
	// 		}

	// 		this.$limberGridViewGridPseudoItems[
	// 			this.userActionData.itemIndex
	// 		].classList.remove(
	// 			"limberGridViewGridPseudoItemResizeAllow",
	// 			"limberGridViewGridPseudoItemResizeDisallow"
	// 		);

	// 		event.preventDefault();
	// 	}
	// };

	// LimberGridView.prototype.onItemTouchStart = function(event) {
	// 	if (event.which != 0) {
	// 		return;
	// 	}

	// 	if (event.target.classList.contains("limberGridViewItem")) {
	// 		event.stopPropagation();
	// 	} else {
	// 		return;
	// 	}

	// 	if (event.touches.length > 1) {
	// 		return;
	// 	}

	// 	var touchPosOnLimberGridItem = this.calculateTouchPosOnLimberGridItem(
	// 		event
	// 	);
	// 	if (touchPosOnLimberGridItem == false) {
	// 		return;
	// 	}
	// 	var radius = Math.sqrt(
	// 		Math.pow(0 - touchPosOnLimberGridItem.x, 2) +
	// 			Math.pow(0 - touchPosOnLimberGridItem.y, 2)
	// 	);
	// 	var resizeUIBox = {
	// 		x:
	// 			event.currentTarget.offsetWidth -
	// 			this.RESIZE_SQUARE_GUIDE_LENGTH,
	// 		y:
	// 			event.currentTarget.offsetHeight -
	// 			this.RESIZE_SQUARE_GUIDE_LENGTH,
	// 		width:
	// 			this.RESIZE_SQUARE_GUIDE_LENGTH +
	// 			this.RESIZE_SQUARE_BORDER_GUIDE_WIDTH,
	// 		height:
	// 			this.RESIZE_SQUARE_GUIDE_LENGTH +
	// 			this.RESIZE_SQUARE_BORDER_GUIDE_WIDTH
	// 	};

	// 	if (radius <= this.MOVE_GUIDE_RADIUS) {
	// 		this.userActionData = {
	// 			type: "move",
	// 			itemIndex: event.currentTarget.attributes["data-index"].value
	// 		};
	// 		this.tapHoldCancel = false;
	// 		this.tapHoldTimerComplete = false;

	// 		document.addEventListener(
	// 			"touchmove",
	// 			this.onTouchMoveBindedFunctionVariable
	// 		);
	// 		document.addEventListener(
	// 			"touchend",
	// 			this.onTouchEndBindedFunctionVariable
	// 		);
	// 		this.$limberGridView[0].removeEventListener(
	// 			"touchstart",
	// 			this.onLimberGridTouchStartFunctionVariable
	// 		);

	// 		document.addEventListener(
	// 			"contextmenu",
	// 			this.onItemTouchContextMenuBindedFunctionVariable
	// 		);
	// 		document.addEventListener(
	// 			"touchcancel",
	// 			this.onTouchCancelBindedFunctionVariable
	// 		);

	// 		this.longTouchCheck = setTimeout(
	// 			this.tapHoldCheck.bind(this, event),
	// 			this.TOUCH_HOLD_TIME
	// 		);

	// 		event.preventDefault();
	// 	} else if (
	// 		touchPosOnLimberGridItem.x >= resizeUIBox.x &&
	// 		touchPosOnLimberGridItem.x <= resizeUIBox.x + resizeUIBox.width &&
	// 		touchPosOnLimberGridItem.y >= resizeUIBox.y &&
	// 		touchPosOnLimberGridItem.y <= resizeUIBox.y + resizeUIBox.height
	// 	) {
	// 		this.$limberGridViewHeightAdjustGuide[0].style.height = 0 + "px";
	// 		this.$limberGridViewHeightAdjustGuide[0].classList.add(
	// 			"limberGridViewHeightAdjustGuideActive"
	// 		);

	// 		this.userActionData = {
	// 			type: "resize",
	// 			itemIndex: event.currentTarget.attributes["data-index"].value
	// 		};
	// 		this.tapHoldCancel = false;
	// 		this.tapHoldTimerComplete = true;

	// 		this.$limberGridView[0].addEventListener(
	// 			"touchmove",
	// 			this.onTouchMoveBindedFunctionVariable
	// 		);
	// 		document.addEventListener(
	// 			"touchend",
	// 			this.onTouchEndBindedFunctionVariable
	// 		);
	// 		this.$limberGridView[0].removeEventListener(
	// 			"touchstart",
	// 			this.onLimberGridTouchStartFunctionVariable
	// 		);

	// 		document.addEventListener(
	// 			"touchcancel",
	// 			this.onTouchCancelBindedFunctionVariable
	// 		);

	// 		var transformStyle = this.$limberGridViewItems[
	// 			this.userActionData.itemIndex
	// 		].style.transform;
	// 		var i1 = transformStyle.indexOf("px");
	// 		var i2 = transformStyle.indexOf(",");
	// 		var x = Number(transformStyle.substring(10, i1));
	// 		var y = Number(
	// 			transformStyle.substring(i2 + 2, transformStyle.length - 3)
	// 		);

	// 		this.userActionData.itemPositionX = x;
	// 		this.userActionData.itemPositionY = y;

	// 		this.$limberGridViewGridPseudoItems[
	// 			this.userActionData.itemIndex
	// 		].style.width =
	// 			this.positionData[this.userActionData.itemIndex].width + "px";
	// 		this.$limberGridViewGridPseudoItems[
	// 			this.userActionData.itemIndex
	// 		].style.height =
	// 			this.positionData[this.userActionData.itemIndex].height + "px";

	// 		this.$limberGridViewGridPseudoItems[
	// 			this.userActionData.itemIndex
	// 		].style.transform = "translate(" + x + "px, " + y + "px)";
	// 		this.$limberGridViewGridPseudoItems[
	// 			this.userActionData.itemIndex
	// 		].classList.add("limberGridViewGridPseudoItemActive");

	// 		this.$body[0].classList.add(
	// 			"limberGridViewBodyTagStateElementDraggingOrResizing"
	// 		);
	// 		var length_0 = this.$limberGridViewItems.length;
	// 		for (var i = 0; i < length_0; i++) {
	// 			this.$limberGridViewItems[i].classList.add(
	// 				"limberGridViewItemResizingState"
	// 			);
	// 		}

	// 		var length_0 = this.$limberGridViewGridPseudoItems.length;
	// 		for (var i = 0; i < length_0; i++) {
	// 			this.$limberGridViewGridPseudoItems[i].classList.add(
	// 				"limberGridViewGridPseudoItemResizingState"
	// 			);
	// 		}

	// 		this.$limberGridViewGridPseudoItems[
	// 			this.userActionData.itemIndex
	// 		].classList.remove(
	// 			"limberGridViewGridPseudoItemResizeAllow",
	// 			"limberGridViewGridPseudoItemResizeDisallow"
	// 		);

	// 		event.preventDefault();
	// 	}

	// 	event.stopPropagation();
	// };

	// LimberGridView.prototype.mouseDownCheck = function(event) {
	// 	if (this.mouseDownCancel == false) {
	// 		this.mouseDownTimerComplete = true;
	// 		console.log("mouseDownTimerComplete");
	// 		this.$body[0].classList.add(
	// 			"limberGridViewBodyTagStateElementDraggingOrResizing"
	// 		);
	// 		this.$limberGridViewItems[
	// 			this.userActionData.itemIndex
	// 		].classList.add("limberGridViewItemDemo");
	// 		this.$limberGridViewBodyPseudoItems[
	// 			this.userActionData.itemIndex
	// 		].classList.add("limberGridViewBodyPseudoItemActive");
	// 		this.$limberGridViewBodyPseudoItems[
	// 			this.userActionData.itemIndex
	// 		].style.transform =
	// 			"translate(" +
	// 			event.pageX /*+ 5*/ +
	// 			"px, " +
	// 			event.pageY /*+ 5*/ +
	// 			"px)";

	// 		this.$limberGridViewHeightAdjustGuide[0].style.height = 0 + "px";
	// 		this.$limberGridViewHeightAdjustGuide[0].classList.add(
	// 			"limberGridViewHeightAdjustGuideActive"
	// 		);
	// 	} else {
	// 		console.log("mouseDown cancel before TimerComplete");
	// 	}
	// };

	// LimberGridView.prototype.tapHoldCheck = function(event) {
	// 	if (this.tapHoldCancel == false) {
	// 		this.tapHoldTimerComplete = true;

	// 		this.$body[0].classList.add(
	// 			"limberGridViewBodyTagStateElementDraggingOrResizing"
	// 		);
	// 		this.$limberGridViewItems[
	// 			this.userActionData.itemIndex
	// 		].classList.add("limberGridViewItemDemo");
	// 		this.$limberGridViewBodyPseudoItems[
	// 			this.userActionData.itemIndex
	// 		].classList.add("limberGridViewBodyPseudoItemActive");
	// 		this.$limberGridViewBodyPseudoItems[
	// 			this.userActionData.itemIndex
	// 		].style.transform =
	// 			"translate(" +
	// 			event.touches[0].pageX /*+ 5*/ +
	// 			"px, " +
	// 			event.touches[0].pageY /*+ 5*/ +
	// 			"px)";

	// 		this.$limberGridViewHeightAdjustGuide[0].style.height = 0 + "px";
	// 		this.$limberGridViewHeightAdjustGuide[0].classList.add(
	// 			"limberGridViewHeightAdjustGuideActive"
	// 		);
	// 	} else {
	// 		// tapHold cancel before TimerComplete
	// 	}
	// };

	// LimberGridView.prototype.onMouseMove = function(event) {
	// 	if (this.mouseDownTimerComplete == true) {
	// 		if (this.userActionData.type == "move") {
	// 			if (
	// 				this.$limberGridViewMoveGuide[0].classList.contains(
	// 					"limberGridViewMoveGuideActive"
	// 				)
	// 			) {
	// 				this.$limberGridViewMoveGuide[0].classList.remove(
	// 					"limberGridViewMoveGuideActive"
	// 				);
	// 			}

	// 			if (
	// 				this.$limberGridViewBodyPseudoItems[
	// 					this.userActionData.itemIndex
	// 				].classList.contains(
	// 					"limberGridViewBodyPseudoItemMoveAllow"
	// 				) ||
	// 				this.$limberGridViewBodyPseudoItems[
	// 					this.userActionData.itemIndex
	// 				].classList.contains(
	// 					"limberGridViewBodyPseudoItemMoveDisallow"
	// 				)
	// 			) {
	// 				this.$limberGridViewBodyPseudoItems[
	// 					this.userActionData.itemIndex
	// 				].classList.remove(
	// 					"limberGridViewBodyPseudoItemMoveAllow",
	// 					"limberGridViewBodyPseudoItemMoveDisallow"
	// 				);
	// 			}

	// 			this.$limberGridViewBodyPseudoItems[
	// 				this.userActionData.itemIndex
	// 			].style.transform =
	// 				"translate(" +
	// 				event.pageX /*+ 5*/ +
	// 				"px, " +
	// 				event.pageY /*+ 5*/ +
	// 				"px)";
	// 			var mousePositionOnLimberGrid = this.calculateMousePosOnLimberGrid(
	// 				event
	// 			);

	// 			if (mousePositionOnLimberGrid != false) {
	// 				var scrollTop = this.$limberGridView[0].scrollTop;
	// 				var scrollHeight = this.$limberGridView[0].scrollHeight;

	// 				var yMousePosition = mousePositionOnLimberGrid.y;
	// 				this.adjustHeight(yMousePosition);
	// 			}

	// 			clearTimeout(this.showMoveDemoTimeOutVariable);
	// 			this.showMoveDemoTimeOutVariable = setTimeout(
	// 				this.showMoveDemo.bind(
	// 					this,
	// 					this.userActionData.itemIndex,
	// 					mousePositionOnLimberGrid
	// 				),
	// 				this.DEMO_WAIT_TIME
	// 			);
	// 		} else {
	// 			var scrollTop = this.$limberGridView[0].scrollTop;
	// 			var scrollLeft = this.$limberGridView[0].scrollLeft;

	// 			var x = this.userActionData.itemPositionX;
	// 			var y = this.userActionData.itemPositionY;

	// 			var newWidth =
	// 				event.offsetX - x + scrollLeft - this.PADDING_LEFT;
	// 			var newHeight =
	// 				event.offsetY - y + scrollTop - this.PADDING_TOP;

	// 			this.userActionData.newWidth = newWidth;
	// 			this.userActionData.newHeight = newHeight;

	// 			var yMousePosition = event.offsetY + scrollTop;
	// 			this.adjustHeight(yMousePosition);

	// 			if (newWidth > 0 && newHeight > 0) {
	// 				this.$limberGridViewGridPseudoItems[
	// 					this.userActionData.itemIndex
	// 				].style.width = newWidth + "px";
	// 				this.$limberGridViewGridPseudoItems[
	// 					this.userActionData.itemIndex
	// 				].style.height = newHeight + "px";
	// 			}

	// 			if (
	// 				this.$limberGridViewGridPseudoItems[
	// 					this.userActionData.itemIndex
	// 				].classList.contains(
	// 					"limberGridViewGridPseudoItemResizeAllow"
	// 				) ||
	// 				this.$limberGridViewGridPseudoItems[
	// 					this.userActionData.itemIndex
	// 				].classList.contains(
	// 					"limberGridViewGridPseudoItemResizeDisallow"
	// 				)
	// 			) {
	// 				this.$limberGridViewGridPseudoItems[
	// 					this.userActionData.itemIndex
	// 				].classList.remove(
	// 					"limberGridViewGridPseudoItemResizeAllow",
	// 					"limberGridViewGridPseudoItemResizeDisallow"
	// 				);
	// 			}

	// 			clearTimeout(this.showResizeDemoTimeOutVariable);
	// 			this.showResizeDemoTimeOutVariable = setTimeout(
	// 				this.showResizeDemo.bind(
	// 					this,
	// 					this.userActionData.itemIndex,
	// 					newWidth,
	// 					newHeight
	// 				),
	// 				this.DEMO_WAIT_TIME
	// 			);
	// 		}
	// 	} else {
	// 		this.mouseDownCancel = true;
	// 		clearTimeout(this.longPressCheck);
	// 		document.removeEventListener(
	// 			"mousemove",
	// 			this.onMouseMoveBindedFunctionVariable
	// 		);
	// 		this.$limberGridView[0].removeEventListener(
	// 			"mousemove",
	// 			this.onMouseMoveBindedFunctionVariable
	// 		);
	// 		document.removeEventListener(
	// 			"mouseup",
	// 			this.onMouseUpBindedFunctionVariable
	// 		);
	// 		document.removeEventListener(
	// 			"contextmenu",
	// 			this.onContextMenuBindedFunctionVariable
	// 		);

	// 		// canceling mouseHold
	// 	}
	// 	event.preventDefault();
	// 	event.stopPropagation();
	// };

	// LimberGridView.prototype.onTouchMove = function(event) {
	// 	if (this.tapHoldTimerComplete == true) {
	// 		if (this.userActionData.type == "move") {
	// 			if (
	// 				this.$limberGridViewMoveGuide[0].classList.contains(
	// 					"limberGridViewMoveGuideActive"
	// 				)
	// 			) {
	// 				this.$limberGridViewMoveGuide[0].classList.remove(
	// 					"limberGridViewMoveGuideActive"
	// 				);
	// 			}

	// 			if (
	// 				this.$limberGridViewBodyPseudoItems[
	// 					this.userActionData.itemIndex
	// 				].classList.contains(
	// 					"limberGridViewBodyPseudoItemMoveAllow"
	// 				) ||
	// 				this.$limberGridViewBodyPseudoItems[
	// 					this.userActionData.itemIndex
	// 				].classList.contains(
	// 					"limberGridViewBodyPseudoItemMoveDisallow"
	// 				)
	// 			) {
	// 				this.$limberGridViewBodyPseudoItems[
	// 					this.userActionData.itemIndex
	// 				].classList.remove(
	// 					"limberGridViewBodyPseudoItemMoveAllow",
	// 					"limberGridViewBodyPseudoItemMoveDisallow"
	// 				);
	// 			}

	// 			this.$limberGridViewBodyPseudoItems[
	// 				this.userActionData.itemIndex
	// 			].style.transform =
	// 				"translate(" +
	// 				event.touches[0].pageX /*+ 5*/ +
	// 				"px, " +
	// 				event.touches[0].pageY /*+ 5*/ +
	// 				"px)";
	// 			var touchPositionOnLimberGrid = this.calculateTouchPosOnLimberGrid(
	// 				event
	// 			);

	// 			if (touchPositionOnLimberGrid != false) {
	// 				var scrollTop = this.$limberGridView[0].scrollTop;
	// 				var scrollLeft = this.$limberGridView[0].scrollLeft;

	// 				var limberGridViewBoundingClientRect = this.$limberGridView[0].getBoundingClientRect();
	// 				var limberGridViewWidthVisibleWidth =
	// 					this.$limberGridView[0].offsetWidth -
	// 					limberGridViewBoundingClientRect.left;
	// 				var limberGridViewHeightVisibleHeight =
	// 					this.$limberGridView[0].offsetHeight -
	// 					limberGridViewBoundingClientRect.top;
	// 				var limberGridViewOnVisibleAreaX =
	// 					touchPositionOnLimberGrid.x +
	// 					this.PADDING_LEFT -
	// 					scrollLeft;
	// 				var limberGridViewOnVisibleAreaY =
	// 					touchPositionOnLimberGrid.y +
	// 					this.PADDING_TOP -
	// 					scrollTop;

	// 				var yTouchPosition = touchPositionOnLimberGrid.y;
	// 				this.adjustHeight(yTouchPosition);

	// 				var programScrolled = this.adjustScroll(
	// 					limberGridViewOnVisibleAreaY,
	// 					limberGridViewHeightVisibleHeight
	// 				);
	// 			}

	// 			clearTimeout(this.showMoveDemoTimeOutVariable);
	// 			if (programScrolled != true) {
	// 				this.showMoveDemoTimeOutVariable = setTimeout(
	// 					this.showMoveDemo.bind(
	// 						this,
	// 						this.userActionData.itemIndex,
	// 						touchPositionOnLimberGrid
	// 					),
	// 					this.DEMO_WAIT_TIME
	// 				);
	// 			}
	// 		} else {
	// 			var scrollTop = this.$limberGridView[0].scrollTop;
	// 			var scrollLeft = this.$limberGridView[0].scrollLeft;

	// 			var x = this.userActionData.itemPositionX;
	// 			var y = this.userActionData.itemPositionY;

	// 			var touchPositionOnLimberGrid = this.calculateTouchPosOnLimberGrid(
	// 				event
	// 			);

	// 			if (touchPositionOnLimberGrid != false) {
	// 				var newWidth = touchPositionOnLimberGrid.x - x;
	// 				var newHeight = touchPositionOnLimberGrid.y - y;

	// 				this.userActionData.newWidth = newWidth;
	// 				this.userActionData.newHeight = newHeight;

	// 				if (newWidth > 0 && newHeight > 0) {
	// 					this.$limberGridViewGridPseudoItems[
	// 						this.userActionData.itemIndex
	// 					].style.width = newWidth + "px";
	// 					this.$limberGridViewGridPseudoItems[
	// 						this.userActionData.itemIndex
	// 					].style.height = newHeight + "px";
	// 				}

	// 				if (
	// 					this.$limberGridViewGridPseudoItems[
	// 						this.userActionData.itemIndex
	// 					].classList.contains(
	// 						"limberGridViewGridPseudoItemResizeAllow"
	// 					) ||
	// 					this.$limberGridViewGridPseudoItems[
	// 						this.userActionData.itemIndex
	// 					].classList.contains(
	// 						"limberGridViewGridPseudoItemResizeDisallow"
	// 					)
	// 				) {
	// 					this.$limberGridViewGridPseudoItems[
	// 						this.userActionData.itemIndex
	// 					].classList.remove(
	// 						"limberGridViewGridPseudoItemResizeAllow",
	// 						"limberGridViewGridPseudoItemResizeDisallow"
	// 					);
	// 				}
	// 			}

	// 			if (touchPositionOnLimberGrid != false) {
	// 				var limberGridViewBoundingClientRect = this.$limberGridView[0].getBoundingClientRect();
	// 				var limberGridViewWidthVisibleWidth =
	// 					this.$limberGridView[0].offsetWidth -
	// 					limberGridViewBoundingClientRect.left;
	// 				var limberGridViewHeightVisibleHeight =
	// 					this.$limberGridView[0].offsetHeight -
	// 					limberGridViewBoundingClientRect.top;
	// 				var limberGridViewOnVisibleAreaX =
	// 					touchPositionOnLimberGrid.x +
	// 					this.PADDING_LEFT -
	// 					scrollLeft;
	// 				var limberGridViewOnVisibleAreaY =
	// 					touchPositionOnLimberGrid.y +
	// 					this.PADDING_TOP -
	// 					scrollTop;

	// 				var yTouchPosition = touchPositionOnLimberGrid.y;
	// 				this.adjustHeight(yTouchPosition);

	// 				var programScrolled = this.adjustScroll(
	// 					limberGridViewOnVisibleAreaY,
	// 					limberGridViewHeightVisibleHeight
	// 				);
	// 			}

	// 			clearTimeout(this.showResizeDemoTimeOutVariable);
	// 			if (programScrolled != true) {
	// 				this.showResizeDemoTimeOutVariable = setTimeout(
	// 					this.showResizeDemo.bind(
	// 						this,
	// 						this.userActionData.itemIndex,
	// 						newWidth,
	// 						newHeight
	// 					),
	// 					this.DEMO_WAIT_TIME
	// 				);
	// 			}
	// 		}
	// 	} else {
	// 		this.tapHoldCancel = true;
	// 		clearTimeout(this.longTouchCheck);
	// 		document.removeEventListener(
	// 			"touchmove",
	// 			this.onTouchMoveBindedFunctionVariable
	// 		);
	// 		this.$limberGridView[0].removeEventListener(
	// 			"touchmove",
	// 			this.onTouchMoveBindedFunctionVariable
	// 		);
	// 		document.removeEventListener(
	// 			"touchend",
	// 			this.onTouchEndBindedFunctionVariable
	// 		);
	// 		document.removeEventListener(
	// 			"contextmenu",
	// 			this.onContextMenuBindedFunctionVariable
	// 		);
	// 		document.removeEventListener(
	// 			"contextmenu",
	// 			this.onItemTouchContextMenuBindedFunctionVariable
	// 		);
	// 		document.removeEventListener(
	// 			"touchcancel",
	// 			this.onTouchCancelBindedFunctionVariable
	// 		);
	// 		this.$limberGridView[0].addEventListener(
	// 			"touchstart",
	// 			this.onLimberGridTouchStartFunctionVariable
	// 		);

	// 		// canceling taphold
	// 	}

	// 	event.stopPropagation();
	// };

	// LimberGridView.prototype.onMouseUp = function(event) {
	// 	clearTimeout(this.showMoveDemoTimeOutVariable);
	// 	clearTimeout(this.showResizeDemoTimeOutVariable);
	// 	var itemResizeFlag = false;
	// 	var itemMoveFlag = false;
	// 	if (this.mouseDownTimerComplete == true) {
	// 		if (this.userActionData.type == "move") {
	// 			this.$limberGridViewBodyPseudoItems[
	// 				this.userActionData.itemIndex
	// 			].classList.remove("limberGridViewBodyPseudoItemActive");
	// 			this.$limberGridViewBodyPseudoItems[
	// 				this.userActionData.itemIndex
	// 			].style.transform = "translate(" + 0 + "px, " + 0 + "px)";
	// 			var mousePositionOnLimberGrid = this.calculateMousePosOnLimberGrid(
	// 				event
	// 			);
	// 			if (mousePositionOnLimberGrid != false) {
	// 				var newMoveCoordinates = this.checkNewMoveCoordinates(
	// 					this.userActionData.itemIndex,
	// 					mousePositionOnLimberGrid
	// 				);
	// 				if (newMoveCoordinates != false) {
	// 					var updatedCoordinates = {};
	// 					if (
	// 						newMoveCoordinates.hasOwnProperty(
	// 							"revisedCoordinates"
	// 						)
	// 					) {
	// 						this.movePlane(
	// 							this.userActionData.itemIndex,
	// 							newMoveCoordinates.revisedCoordinates.x,
	// 							newMoveCoordinates.revisedCoordinates.y
	// 						);
	// 						updatedCoordinates.x =
	// 							newMoveCoordinates.revisedCoordinates.x;
	// 						updatedCoordinates.y =
	// 							newMoveCoordinates.revisedCoordinates.y;
	// 						itemMoveFlag = true;
	// 					} else {
	// 						this.movePlane(
	// 							this.userActionData.itemIndex,
	// 							newMoveCoordinates.x,
	// 							newMoveCoordinates.y
	// 						);
	// 						updatedCoordinates.x = newMoveCoordinates.x;
	// 						updatedCoordinates.y = newMoveCoordinates.y;
	// 						itemMoveFlag = true;
	// 					}
	// 				} else {
	// 					this.revertShowMoveOrResizeDemo();
	// 				}
	// 			} else {
	// 				this.revertShowMoveOrResizeDemo();
	// 			}
	// 		} else {
	// 			var scrollTop = this.$limberGridView[0].scrollTop;
	// 			var scrollLeft = this.$limberGridView[0].scrollLeft;

	// 			var x = this.userActionData.itemPositionX;
	// 			var y = this.userActionData.itemPositionY;

	// 			var newWidth = this.userActionData.newWidth;
	// 			var newHeight = this.userActionData.newHeight;

	// 			if (newWidth > 0 && newHeight > 0) {
	// 				this.$limberGridViewGridPseudoItems[
	// 					this.userActionData.itemIndex
	// 				].style.width = newWidth + "px";
	// 				this.$limberGridViewGridPseudoItems[
	// 					this.userActionData.itemIndex
	// 				].style.height = newHeight + "px";
	// 			}

	// 			if (
	// 				this.resizePlane(
	// 					this.userActionData.itemIndex,
	// 					newWidth,
	// 					newHeight
	// 				) == false
	// 			) {
	// 				this.revertShowMoveOrResizeDemo();
	// 				itemResizeFlag = true;
	// 			}

	// 			this.$limberGridViewGridPseudoItems[
	// 				this.userActionData.itemIndex
	// 			].style.transform = "translate(" + 0 + "px, " + 0 + "px)";
	// 			this.$limberGridViewGridPseudoItems[
	// 				this.userActionData.itemIndex
	// 			].classList.remove("limberGridViewGridPseudoItemActive");
	// 		}
	// 	} else {
	// 		this.mouseDownCancel = true;
	// 		clearTimeout(this.longPressCheck);
	// 		// canceling mouseHold
	// 	}
	// 	document.removeEventListener(
	// 		"mousemove",
	// 		this.onMouseMoveBindedFunctionVariable
	// 	);
	// 	this.$limberGridView[0].removeEventListener(
	// 		"mousemove",
	// 		this.onMouseMoveBindedFunctionVariable
	// 	);
	// 	document.removeEventListener(
	// 		"mouseup",
	// 		this.onMouseUpBindedFunctionVariable
	// 	);
	// 	document.removeEventListener(
	// 		"contextmenu",
	// 		this.onContextMenuBindedFunctionVariable
	// 	);

	// 	this.$body[0].classList.remove(
	// 		"limberGridViewBodyTagStateElementDraggingOrResizing"
	// 	);
	// 	this.$limberGridViewMoveGuide[0].classList.remove(
	// 		"limberGridViewMoveGuideActive"
	// 	);

	// 	this.$limberGridViewHeightAdjustGuide[0].classList.remove(
	// 		"limberGridViewHeightAdjustGuideActive"
	// 	);

	// 	event.preventDefault();
	// 	event.stopPropagation();

	// 	//
	// 	if (
	// 		this.callbacks.moveCompleteCallback != undefined &&
	// 		this.callbacks.moveCompleteCallback != null
	// 	) {
	// 		if (itemMoveFlag == true) {
	// 			updatedCoordinates.width = this.positionData[
	// 				this.userActionData.itemIndex
	// 			].width;
	// 			updatedCoordinates.height = this.positionData[
	// 				this.userActionData.itemIndex
	// 			].height;
	// 			this.callbacks.moveCompleteCallback(
	// 				true,
	// 				this.userActionData.itemIndex,
	// 				updatedCoordinates
	// 			);
	// 		} else if (this.userActionData.type == "move") {
	// 			this.callbacks.moveCompleteCallback(
	// 				false,
	// 				this.userActionData.itemIndex,
	// 				event
	// 			);
	// 		}
	// 	}
	// 	if (
	// 		this.callbacks.resizeCompleteCallback != undefined &&
	// 		this.callbacks.resizeCompleteCallback != null
	// 	) {
	// 		if (itemResizeFlag == true) {
	// 			this.callbacks.resizeCompleteCallback(
	// 				this.userActionData.itemIndex,
	// 				{
	// 					x: this.positionData[this.userActionData.itemIndex].x,
	// 					y: this.positionData[this.userActionData.itemIndex].y,
	// 					height: newHeight,
	// 					width: newWidth
	// 				}
	// 			);
	// 		}
	// 	}
	// 	//

	// 	this.userActionData = null;
	// };

	// LimberGridView.prototype.onTouchEnd = function(event) {
	// 	clearTimeout(this.showMoveDemoTimeOutVariable);
	// 	clearTimeout(this.showResizeDemoTimeOutVariable);
	// 	var itemResizeFlag = false;
	// 	var itemMoveFlag = false;
	// 	if (this.tapHoldTimerComplete == true) {
	// 		if (this.userActionData.type == "move") {
	// 			this.$limberGridViewBodyPseudoItems[
	// 				this.userActionData.itemIndex
	// 			].classList.remove("limberGridViewBodyPseudoItemActive");
	// 			this.$limberGridViewBodyPseudoItems[
	// 				this.userActionData.itemIndex
	// 			].style.transform = "translate(" + 0 + "px, " + 0 + "px)";
	// 			var touchPositionOnLimberGrid = this.calculateTouchPosOnLimberGrid(
	// 				event
	// 			);
	// 			if (touchPositionOnLimberGrid != false) {
	// 				var newMoveCoordinates = this.checkNewMoveCoordinates(
	// 					this.userActionData.itemIndex,
	// 					touchPositionOnLimberGrid
	// 				);
	// 				if (newMoveCoordinates != false) {
	// 					var updatedCoordinates = {};
	// 					if (
	// 						newMoveCoordinates.hasOwnProperty(
	// 							"revisedCoordinates"
	// 						)
	// 					) {
	// 						this.movePlane(
	// 							this.userActionData.itemIndex,
	// 							newMoveCoordinates.revisedCoordinates.x,
	// 							newMoveCoordinates.revisedCoordinates.y
	// 						);
	// 						updatedCoordinates.x =
	// 							newMoveCoordinates.revisedCoordinates.x;
	// 						updatedCoordinates.y =
	// 							newMoveCoordinates.revisedCoordinates.y;
	// 						itemMoveFlag = true;
	// 					} else {
	// 						this.movePlane(
	// 							this.userActionData.itemIndex,
	// 							newMoveCoordinates.x,
	// 							newMoveCoordinates.y
	// 						);
	// 						updatedCoordinates.x = newMoveCoordinates.x;
	// 						updatedCoordinates.y = newMoveCoordinates.y;
	// 						itemMoveFlag = true;
	// 					}
	// 				} else {
	// 					this.revertShowMoveOrResizeDemo();
	// 				}
	// 			} else {
	// 				this.revertShowMoveOrResizeDemo();
	// 			}
	// 		} else {
	// 			var scrollTop = this.$limberGridView[0].scrollTop;
	// 			var scrollLeft = this.$limberGridView[0].scrollLeft;

	// 			var x = this.userActionData.itemPositionX;
	// 			var y = this.userActionData.itemPositionY;

	// 			var newWidth = this.userActionData.newWidth;
	// 			var newHeight = this.userActionData.newHeight;

	// 			if (newWidth > 0 && newHeight > 0) {
	// 				this.$limberGridViewGridPseudoItems[
	// 					this.userActionData.itemIndex
	// 				].style.width = newWidth + "px";
	// 				this.$limberGridViewGridPseudoItems[
	// 					this.userActionData.itemIndex
	// 				].style.height = newHeight + "px";
	// 			}

	// 			if (
	// 				this.resizePlane(
	// 					this.userActionData.itemIndex,
	// 					newWidth,
	// 					newHeight
	// 				) == false
	// 			) {
	// 				this.revertShowMoveOrResizeDemo();
	// 				itemResizeFlag = true;
	// 			}

	// 			this.$limberGridViewGridPseudoItems[
	// 				this.userActionData.itemIndex
	// 			].style.transform = "translate(" + 0 + "px, " + 0 + "px)";
	// 			this.$limberGridViewGridPseudoItems[
	// 				this.userActionData.itemIndex
	// 			].classList.remove("limberGridViewGridPseudoItemActive");
	// 		}
	// 	} else {
	// 		this.tapHoldCancel = true;
	// 		clearTimeout(this.longTouchCheck);

	// 		// canceling taphold
	// 	}

	// 	document.removeEventListener(
	// 		"touchmove",
	// 		this.onTouchMoveBindedFunctionVariable
	// 	);
	// 	this.$limberGridView[0].removeEventListener(
	// 		"touchmove",
	// 		this.onTouchMoveBindedFunctionVariable
	// 	);
	// 	document.removeEventListener(
	// 		"touchend",
	// 		this.onTouchEndBindedFunctionVariable
	// 	);
	// 	document.removeEventListener(
	// 		"contextmenu",
	// 		this.onContextMenuBindedFunctionVariable
	// 	);
	// 	document.removeEventListener(
	// 		"contextmenu",
	// 		this.onItemTouchContextMenuBindedFunctionVariable
	// 	);
	// 	document.removeEventListener(
	// 		"touchcancel",
	// 		this.onTouchCancelBindedFunctionVariable
	// 	);
	// 	this.$limberGridView[0].addEventListener(
	// 		"touchstart",
	// 		this.onLimberGridTouchStartFunctionVariable
	// 	);

	// 	this.$body[0].classList.remove(
	// 		"limberGridViewBodyTagStateElementDraggingOrResizing"
	// 	);
	// 	this.$limberGridViewMoveGuide[0].classList.remove(
	// 		"limberGridViewMoveGuideActive"
	// 	);

	// 	this.$limberGridViewHeightAdjustGuide[0].classList.remove(
	// 		"limberGridViewHeightAdjustGuideActive"
	// 	);

	// 	event.stopPropagation();

	// 	//
	// 	if (
	// 		this.callbacks.moveCompleteCallback != undefined &&
	// 		this.callbacks.moveCompleteCallback != null
	// 	) {
	// 		if (itemMoveFlag == true) {
	// 			updatedCoordinates.width = this.positionData[
	// 				this.userActionData.itemIndex
	// 			].width;
	// 			updatedCoordinates.height = this.positionData[
	// 				this.userActionData.itemIndex
	// 			].height;
	// 			this.callbacks.moveCompleteCallback(
	// 				true,
	// 				this.userActionData.itemIndex,
	// 				updatedCoordinates
	// 			);
	// 		} else if (this.userActionData.type == "move") {
	// 			this.callbacks.moveCompleteCallback(
	// 				false,
	// 				this.userActionData.itemIndex,
	// 				event
	// 			);
	// 		}
	// 	}
	// 	if (
	// 		this.callbacks.resizeCompleteCallback != undefined &&
	// 		this.callbacks.resizeCompleteCallback != null
	// 	) {
	// 		if (itemResizeFlag == true) {
	// 			this.callbacks.resizeCompleteCallback(
	// 				this.userActionData.itemIndex,
	// 				{
	// 					x: this.positionData[this.userActionData.itemIndex].x,
	// 					y: this.positionData[this.userActionData.itemIndex].y,
	// 					height: newHeight,
	// 					width: newWidth
	// 				}
	// 			);
	// 		}
	// 	}
	// 	//

	// 	this.userActionData = null;
	// };

	// LimberGridView.prototype.onContextMenu = function(event) {
	// 	clearTimeout(this.showMoveDemoTimeOutVariable);
	// 	clearTimeout(this.showResizeDemoTimeOutVariable);

	// 	this.revertShowMoveOrResizeDemo();

	// 	this.$limberGridViewGridPseudoItems[
	// 		this.userActionData.itemIndex
	// 	].classList.remove("limberGridViewGridPseudoItemActive");

	// 	this.$limberGridViewBodyPseudoItems[
	// 		this.userActionData.itemIndex
	// 	].classList.remove("limberGridViewBodyPseudoItemActive");
	// 	this.$limberGridViewBodyPseudoItems[
	// 		this.userActionData.itemIndex
	// 	].style.transform = "translate(" + 0 + "px, " + 0 + "px)";

	// 	document.removeEventListener(
	// 		"mousemove",
	// 		this.onMouseMoveBindedFunctionVariable
	// 	);
	// 	this.$limberGridView[0].removeEventListener(
	// 		"mousemove",
	// 		this.onMouseMoveBindedFunctionVariable
	// 	);
	// 	document.removeEventListener(
	// 		"mouseup",
	// 		this.onMouseUpBindedFunctionVariable
	// 	);

	// 	document.removeEventListener(
	// 		"touchmove",
	// 		this.onTouchMoveBindedFunctionVariable
	// 	);
	// 	this.$limberGridView[0].removeEventListener(
	// 		"touchmove",
	// 		this.onTouchMoveBindedFunctionVariable
	// 	);
	// 	document.removeEventListener(
	// 		"touchend",
	// 		this.onTouchEndBindedFunctionVariable
	// 	);
	// 	document.removeEventListener(
	// 		"contextmenu",
	// 		this.onItemTouchContextMenuBindedFunctionVariable
	// 	);
	// 	document.removeEventListener(
	// 		"touchcancel",
	// 		this.onTouchCancelBindedFunctionVariable
	// 	);

	// 	document.removeEventListener(
	// 		"contextmenu",
	// 		this.onContextMenuBindedFunctionVariable
	// 	);

	// 	this.$body[0].classList.remove(
	// 		"limberGridViewBodyTagStateElementDraggingOrResizing"
	// 	);
	// 	this.$limberGridViewMoveGuide[0].classList.remove(
	// 		"limberGridViewMoveGuideActive"
	// 	);

	// 	this.$limberGridViewHeightAdjustGuide[0].classList.remove(
	// 		"limberGridViewHeightAdjustGuideActive"
	// 	);

	// 	this.userActionData = null;

	// 	event.preventDefault();
	// 	event.stopPropagation();
	// };

	// LimberGridView.prototype.onItemTouchContextMenu = function(event) {
	// 	event.preventDefault();
	// };

	// LimberGridView.prototype.onTouchCancel = function(event) {
	// 	this.onContextMenu();
	// 	this.tapHoldTimerComplete = false;
	// 	this.$limberGridView[0].addEventListener(
	// 		"touchstart",
	// 		this.onLimberGridTouchStartFunctionVariable
	// 	);
	// };

	// LimberGridView.prototype.calculateMousePosOnLimberGrid = function(event) {
	// 	var limberGridViewPosition = this.$limberGridView[0].getBoundingClientRect();
	// 	if (
	// 		event.clientX >= limberGridViewPosition.left &&
	// 		event.clientX <=
	// 			limberGridViewPosition.left + limberGridViewPosition.width &&
	// 		(event.clientY >= limberGridViewPosition.top &&
	// 			event.clientY <=
	// 				limberGridViewPosition.top + limberGridViewPosition.height)
	// 	) {
	// 		var scrollTop = this.$limberGridView[0].scrollTop;
	// 		var scrollLeft = this.$limberGridView[0].scrollLeft;

	// 		var mouseXOnLimberGridView =
	// 			event.clientX -
	// 			limberGridViewPosition.left -
	// 			this.PADDING_LEFT +
	// 			scrollLeft;
	// 		var mouseYOnLimberGridView =
	// 			event.clientY -
	// 			limberGridViewPosition.top -
	// 			this.PADDING_TOP +
	// 			scrollTop;

	// 		if (mouseXOnLimberGridView < 0 || mouseYOnLimberGridView < 0) {
	// 			return false;
	// 		}
	// 		return { x: mouseXOnLimberGridView, y: mouseYOnLimberGridView };
	// 	} else {
	// 		// mouse pointer NOT inside limberGridView
	// 		return false;
	// 	}
	// };

	// LimberGridView.prototype.calculateTouchPosOnLimberGrid = function(event) {
	// 	var limberGridViewPosition = this.$limberGridView[0].getBoundingClientRect();

	// 	if (event.type == "touchend") {
	// 		var touch = {
	// 			clientX: event.changedTouches[0].clientX,
	// 			clientY: event.changedTouches[0].clientY
	// 		};
	// 	} else {
	// 		var touch = {
	// 			clientX: event.touches[0].clientX,
	// 			clientY: event.touches[0].clientY
	// 		};
	// 	}
	// 	if (
	// 		touch.clientX >= limberGridViewPosition.left &&
	// 		touch.clientX <=
	// 			limberGridViewPosition.left + limberGridViewPosition.width &&
	// 		(touch.clientY >= limberGridViewPosition.top &&
	// 			touch.clientY <=
	// 				limberGridViewPosition.top + limberGridViewPosition.height)
	// 	) {
	// 		var scrollTop = this.$limberGridView[0].scrollTop;
	// 		var scrollLeft = this.$limberGridView[0].scrollLeft;

	// 		var touchXOnLimberGridView =
	// 			touch.clientX -
	// 			limberGridViewPosition.left -
	// 			this.PADDING_LEFT +
	// 			scrollLeft;
	// 		var touchYOnLimberGridView =
	// 			touch.clientY -
	// 			limberGridViewPosition.top -
	// 			this.PADDING_TOP +
	// 			scrollTop;

	// 		if (touchXOnLimberGridView < 0 || touchYOnLimberGridView < 0) {
	// 			return false;
	// 		}
	// 		return { x: touchXOnLimberGridView, y: touchYOnLimberGridView };
	// 	} else {
	// 		// touch NOT inside limberGridView
	// 		return false;
	// 	}
	// };

	// LimberGridView.prototype.calculateTouchPosOnLimberGridItem = function(
	// 	event
	// ) {
	// 	var limberGridViewItemPosition = this.$limberGridViewItems[
	// 		event.currentTarget.attributes["data-index"].value
	// 	].getBoundingClientRect();

	// 	if (
	// 		event.touches[0].clientX >= limberGridViewItemPosition.left &&
	// 		event.touches[0].clientX <=
	// 			limberGridViewItemPosition.left +
	// 				limberGridViewItemPosition.width &&
	// 		(event.touches[0].clientY >= limberGridViewItemPosition.top &&
	// 			event.touches[0].clientY <=
	// 				limberGridViewItemPosition.top +
	// 					limberGridViewItemPosition.height)
	// 	) {
	// 		var touchXOnLimberGridView =
	// 			event.touches[0].clientX - limberGridViewItemPosition.left;
	// 		var touchYOnLimberGridView =
	// 			event.touches[0].clientY - limberGridViewItemPosition.top;

	// 		return { x: touchXOnLimberGridView, y: touchYOnLimberGridView };
	// 	} else {
	// 		// touch NOT inside limberGridViewItem
	// 		return false;
	// 	}
	// };

	// LimberGridView.prototype.checkNewMoveCoordinates = function(
	// 	indexOfMovedItem,
	// 	mousePositions
	// ) {
	// 	if (mousePositions == false) {
	// 		return false;
	// 	}

	// 	var x = mousePositions.x;
	// 	var y = mousePositions.y;
	// 	var widthOfMovedItem = this.positionData[indexOfMovedItem].width;
	// 	var heightOfMovedItem = this.positionData[indexOfMovedItem].height;

	// 	var isInside = false;
	// 	var indexOfOverlappingItem = null;
	// 	var length_0 = this.positionData.length;
	// 	for (var i = 0; i < length_0; i++) {
	// 		var itemTopLeft = [this.positionData[i].x, this.positionData[i].y];
	// 		var itemTopRight = [
	// 			this.positionData[i].x + this.positionData[i].width,
	// 			this.positionData[i].y
	// 		];
	// 		var itemBottomLeft = [
	// 			this.positionData[i].x,
	// 			this.positionData[i].y + this.positionData[i].height
	// 		];
	// 		var itemBottomRight = [
	// 			this.positionData[i].x + this.positionData[i].width,
	// 			this.positionData[i].y + this.positionData[i].height
	// 		];

	// 		if (
	// 			x >= itemTopLeft[0] &&
	// 			x <= itemTopRight[0] &&
	// 			x >= itemBottomLeft[0] &&
	// 			x <= itemBottomRight[0] &&
	// 			y >= itemTopLeft[1] &&
	// 			y <= itemBottomLeft[1] &&
	// 			y >= itemTopRight[1] &&
	// 			y <= itemBottomRight[1]
	// 		) {
	// 			isInside = true;
	// 			indexOfOverlappingItem = i;
	// 			break;
	// 		}

	// 		var lines = this.getLines(this.positionData[i]);

	// 		var topLine = lines[0];
	// 		var rightLine = lines[1];
	// 		var bottomLine = lines[2];
	// 		var leftLine = lines[3];

	// 		// for TOP LEFT Corner
	// 		if (
	// 			y < topLine[0][1] &&
	// 			x >= topLine[0][0] - this.MARGIN &&
	// 			x <= topLine[1][0] + this.MARGIN
	// 		) {
	// 			var diff = topLine[0][1] - y;
	// 			if (diff <= this.MARGIN) {
	// 				return false;
	// 			}
	// 		}

	// 		if (
	// 			y > bottomLine[0][1] &&
	// 			x >= bottomLine[0][0] - this.MARGIN &&
	// 			x <= bottomLine[1][0] + this.MARGIN
	// 		) {
	// 			var diff = y - bottomLine[0][1];
	// 			if (diff <= this.MARGIN) {
	// 				return false;
	// 			}
	// 		}

	// 		if (
	// 			x > rightLine[0][0] &&
	// 			y >= rightLine[0][1] - this.MARGIN &&
	// 			y <= rightLine[1][1] + this.MARGIN
	// 		) {
	// 			var diff = x - rightLine[0][0];
	// 			if (diff <= this.MARGIN) {
	// 				return false;
	// 			}
	// 		}

	// 		if (
	// 			x < leftLine[0][0] &&
	// 			y >= leftLine[0][1] - this.MARGIN &&
	// 			y <= leftLine[1][1] + this.MARGIN
	// 		) {
	// 			var diff = leftLine[0][0] - x;
	// 			if (diff <= this.MARGIN) {
	// 				return false;
	// 			}
	// 		}
	// 		// for TOP LEFT Corner END

	// 		// for TOP RIGHT Corner
	// 		if (
	// 			y > bottomLine[0][1] &&
	// 			x + widthOfMovedItem >= bottomLine[0][0] - this.MARGIN &&
	// 			x + widthOfMovedItem <= bottomLine[1][0] + this.MARGIN
	// 		) {
	// 			var diff = y - bottomLine[0][1];
	// 			if (diff <= this.MARGIN) {
	// 				return false;
	// 			}
	// 		}
	// 		// for TOP RIGHT Corner END

	// 		// for BOTTOM LEFT Corner
	// 		if (
	// 			x > rightLine[0][0] &&
	// 			y + heightOfMovedItem >= rightLine[0][1] - this.MARGIN &&
	// 			y + heightOfMovedItem <= rightLine[1][1] + this.MARGIN
	// 		) {
	// 			var diff = x - rightLine[0][0];
	// 			if (diff <= this.MARGIN) {
	// 				return false;
	// 			}
	// 		}
	// 		// for BOTTOM LEFT Corner END

	// 		if (
	// 			(y > bottomLine[0][1] &&
	// 				bottomLine[0][0] >= x &&
	// 				bottomLine[0][0] <= x + widthOfMovedItem) ||
	// 			(y > bottomLine[0][1] &&
	// 				bottomLine[1][0] >= x &&
	// 				bottomLine[1][0] <= x + widthOfMovedItem)
	// 		) {
	// 			var diff = y - bottomLine[0][1];
	// 			if (diff <= this.MARGIN) {
	// 				return false;
	// 			}
	// 		}

	// 		if (
	// 			(x > rightLine[0][0] &&
	// 				rightLine[0][1] >= y &&
	// 				rightLine[0][1] <= y + heightOfMovedItem) ||
	// 			(x > rightLine[0][0] &&
	// 				rightLine[1][1] >= y &&
	// 				rightLine[1][1] <= y + heightOfMovedItem)
	// 		) {
	// 			var diff = x - rightLine[0][0];
	// 			if (diff <= this.MARGIN) {
	// 				return false;
	// 			}
	// 		}
	// 	}

	// 	if (indexOfOverlappingItem == null) {
	// 		if (
	// 			x +
	// 				this.positionData[indexOfMovedItem].width +
	// 				this.getMarginAtPoint(x) >
	// 			this.WIDTH
	// 		) {
	// 			return false;
	// 		} else {
	// 			return mousePositions;
	// 		}
	// 	} else {
	// 		if (
	// 			this.positionData[indexOfOverlappingItem].x +
	// 				this.positionData[indexOfMovedItem].width +
	// 				this.getMarginAtPoint(
	// 					this.positionData[indexOfOverlappingItem].x
	// 				) >
	// 			this.WIDTH
	// 		) {
	// 			return false;
	// 		} else {
	// 			return {
	// 				x: x,
	// 				y: y,
	// 				revisedCoordinates: {
	// 					x: this.positionData[indexOfOverlappingItem].x,
	// 					y: this.positionData[indexOfOverlappingItem].y
	// 				}
	// 			};
	// 		}
	// 	}
	// };

	// LimberGridView.prototype.showMoveDemo = function(index, mousePosition) {
	// 	if (mousePosition != false) {
	// 		var newMoveCoordinates = this.checkNewMoveCoordinates(
	// 			index,
	// 			mousePosition
	// 		);
	// 		if (newMoveCoordinates == false) {
	// 			this.$limberGridViewBodyPseudoItems[index].classList.remove(
	// 				"limberGridViewBodyPseudoItemMoveAllow"
	// 			);
	// 			this.$limberGridViewBodyPseudoItems[index].classList.add(
	// 				"limberGridViewBodyPseudoItemMoveDisallow"
	// 			);
	// 		} else {
	// 			if (newMoveCoordinates.hasOwnProperty("revisedCoordinates")) {
	// 				this.movePlaneDemo(
	// 					index,
	// 					newMoveCoordinates.revisedCoordinates.x,
	// 					newMoveCoordinates.revisedCoordinates.y
	// 				);
	// 				this.$limberGridViewMoveGuide[0].style.transform =
	// 					"translate(" +
	// 					newMoveCoordinates.revisedCoordinates.x +
	// 					"px, " +
	// 					newMoveCoordinates.revisedCoordinates.y +
	// 					"px)";
	// 				this.$limberGridViewMoveGuide[0].classList.add(
	// 					"limberGridViewMoveGuideActive"
	// 				);
	// 			} else {
	// 				this.movePlaneDemo(
	// 					index,
	// 					newMoveCoordinates.x,
	// 					newMoveCoordinates.y
	// 				);
	// 				this.$limberGridViewMoveGuide[0].style.transform =
	// 					"translate(" +
	// 					newMoveCoordinates.x +
	// 					"px, " +
	// 					newMoveCoordinates.y +
	// 					"px)";
	// 				this.$limberGridViewMoveGuide[0].classList.add(
	// 					"limberGridViewMoveGuideActive"
	// 				);
	// 			}
	// 			this.$limberGridViewBodyPseudoItems[index].classList.remove(
	// 				"limberGridViewBodyPseudoItemMoveDisallow"
	// 			);
	// 			this.$limberGridViewBodyPseudoItems[index].classList.add(
	// 				"limberGridViewBodyPseudoItemMoveAllow"
	// 			);
	// 		}
	// 	} else {
	// 		this.$limberGridViewBodyPseudoItems[index].classList.remove(
	// 			"limberGridViewBodyPseudoItemMoveAllow"
	// 		);
	// 		this.$limberGridViewBodyPseudoItems[index].classList.add(
	// 			"limberGridViewBodyPseudoItemMoveDisallow"
	// 		);
	// 	}
	// };

	// LimberGridView.prototype.showResizeDemo = function(index, width, height) {
	// 	if (this.resizePlaneDemo(index, width, height) == false) {
	// 		this.$limberGridViewGridPseudoItems[
	// 			this.userActionData.itemIndex
	// 		].classList.add("limberGridViewGridPseudoItemResizeDisallow");
	// 	} else {
	// 		this.$limberGridViewGridPseudoItems[
	// 			this.userActionData.itemIndex
	// 		].classList.add("limberGridViewGridPseudoItemResizeAllow");
	// 	}
	// };

	// LimberGridView.prototype.revertShowMoveOrResizeDemo = function() {
	// 	var length_0 = this.$limberGridViewItems.length;
	// 	for (var i = 0; i < length_0; i++) {
	// 		this.$limberGridViewItems[i].style.transform =
	// 			"translate(" +
	// 			this.positionData[i].x +
	// 			"px, " +
	// 			this.positionData[i].y +
	// 			"px)";
	// 		this.$limberGridViewItems[i].classList.remove(
	// 			"limberGridViewItemDemo",
	// 			"limberGridViewItemResizingState"
	// 		);
	// 		this.$limberGridViewGridPseudoItems[i].classList.remove(
	// 			"limberGridViewGridPseudoItemResizingState",
	// 			"limberGridViewGridPseudoItemActive"
	// 		);
	// 	}
	// };

	// LimberGridView.prototype.adjustHeight = function(yMouseOrTouchPosition) {
	// 	var scrollHeight = this.$limberGridView[0].scrollHeight;
	// 	if (scrollHeight - yMouseOrTouchPosition <= this.AUTO_SCROLL_POINT) {
	// 		this.$limberGridViewHeightAdjustGuide[0].style.height =
	// 			yMouseOrTouchPosition +
	// 			this.MOVE_OR_RESIZE_HEIGHT_INCREMENTS +
	// 			"px";
	// 	}
	// };

	// LimberGridView.prototype.adjustScroll = function(
	// 	limberGridViewOnVisibleAreaY,
	// 	limberGridViewHeightVisibleHeight
	// ) {
	// 	var scrollTop = this.$limberGridView[0].scrollTop;
	// 	// var scrollLeft = this.$limberGridView[0].scrollLeft;
	// 	var programScrolled = false;
	// 	if (limberGridViewOnVisibleAreaY > 0) {
	// 		if (
	// 			limberGridViewHeightVisibleHeight -
	// 				limberGridViewOnVisibleAreaY <
	// 			this.AUTO_SCROLL_POINT
	// 		) {
	// 			this.$limberGridView[0].scrollTop =
	// 				scrollTop + this.AUTO_SCROLL_DISTANCE;
	// 			programScrolled = true;
	// 		}
	// 		if (
	// 			limberGridViewOnVisibleAreaY < this.HEIGHT / 10 &&
	// 			scrollTop != 0
	// 		) {
	// 			this.$limberGridView[0].scrollTop =
	// 				scrollTop - this.AUTO_SCROLL_DISTANCE;
	// 			programScrolled = true;
	// 		}
	// 	}

	// 	// if(limberGridViewOnVisibleAreaX > 0){
	// 	// 	if((limberGridViewWidthVisibleWidth - limberGridViewOnVisibleAreaX) < (this.WIDTH/10)){
	// 	// 		this.$limberGridView[0].scrollLeft = scrollLeft + 100;
	// 	// 		var programScrolled = true;
	// 	// 	}
	// 	// 	if((limberGridViewOnVisibleAreaX) < (this.WIDTH/10) && scrollLeft != 0){
	// 	// 		this.$limberGridView[0].scrollLeft = scrollLeft - 100;
	// 	// 		var programScrolled = true;
	// 	// 	}
	// 	// }
	// 	return programScrolled;
	// };

	// ----------------------------------------------------------------------------------------- //

	// ------------------------ EVENT HANDLERS AND CODE FOR ITEM INTERACTION END --------------- //

	// ----------------------------------------------------------------------------------------- //

	// ----------------------------------------------------------------------------------------- //

	// ---------------------------------------- ESSENTIALS ------------------------------------- //

	// ----------------------------------------------------------------------------------------- //

	// LimberGridView.prototype.getPlainFrom4Points = function(pointsArray) {
	// 	var minX = -1;
	// 	var minY = -1;
	// 	var maxX = -1;
	// 	var maxY = -1;
	// 	var length_0 = pointsArray.length;
	// 	for (var i = 0; i < length_0; i++) {
	// 		if (pointsArray[i][0] < minX || minX < 0) {
	// 			minX = pointsArray[i][0];
	// 		}
	// 		if (pointsArray[i][0] > maxX) {
	// 			maxX = pointsArray[i][0];
	// 		}
	// 		if (pointsArray[i][1] < minY || minY < 0) {
	// 			minY = pointsArray[i][1];
	// 		}
	// 		if (pointsArray[i][1] > maxY) {
	// 			maxY = pointsArray[i][1];
	// 		}
	// 	}

	// 	var plane = {};
	// 	plane.x = minX;
	// 	plane.y = minY;
	// 	plane.width = maxX - minX;
	// 	plane.height = maxY - minY;

	// 	return plane;
	// };

	// LimberGridView.prototype.getCoordinates = function(item) {
	// 	var itemTopLeft = [item.x, item.y];
	// 	var itemTopRight = [item.x + item.width, item.y];
	// 	var itemBottomLeft = [item.x, item.y + item.height];
	// 	var itemBottomRight = [item.x + item.width, item.y + item.height];

	// 	var itemCoordinatesArr = [
	// 		itemTopLeft,
	// 		itemTopRight,
	// 		itemBottomRight,
	// 		itemBottomLeft
	// 	];

	// 	return itemCoordinatesArr;
	// };

	// LimberGridView.prototype.getLines = function(item) {
	// 	var itemTopLeft = JSON.parse(JSON.stringify([item.x, item.y]));
	// 	var itemTopRight = JSON.parse(
	// 		JSON.stringify([item.x + item.width, item.y])
	// 	);
	// 	var itemBottomLeft = JSON.parse(
	// 		JSON.stringify([item.x, item.y + item.height])
	// 	);
	// 	var itemBottomRight = JSON.parse(
	// 		JSON.stringify([item.x + item.width, item.y + item.height])
	// 	);

	// 	var topLine = [itemTopLeft, itemTopRight];
	// 	var rightLine = [itemTopRight, itemBottomRight];
	// 	var bottomLine = [itemBottomLeft, itemBottomRight];
	// 	var leftLine = [itemTopLeft, itemBottomLeft];

	// 	var allLines = [topLine, rightLine, bottomLine, leftLine];

	// 	return allLines;
	// };

	// LimberGridView.prototype.arePlainsSame = function(A, B) {
	// 	if (
	// 		A.x == B.x &&
	// 		A.y == B.y &&
	// 		A.width == B.width &&
	// 		A.height == B.height
	// 	) {
	// 		return true;
	// 	} else {
	// 		return false;
	// 	}
	// };

	// LimberGridView.prototype.arePlainsIdentical = function(A, B) {
	// 	if (A.width == B.width && A.height == B.height) {
	// 		return true;
	// 	} else {
	// 		return false;
	// 	}
	// };

	// LimberGridView.prototype.isValidPlane = function(plane) {
	// 	if (
	// 		plane.x >= 0 &&
	// 		plane.y >= 0 &&
	// 		plane.width > 0 &&
	// 		plane.height > 0
	// 	) {
	// 		return true;
	// 	} else {
	// 		return false;
	// 	}
	// };

	// LimberGridView.prototype.sortPlainsByArea = function(
	// 	planes,
	// 	order = "dec"
	// ) {
	// 	if (order == "asc") {
	// 		planes.sort(function(a, b) {
	// 			return (
	// 				(a.x + a.width) * (a.y + a.height) -
	// 				(b.x + b.width) * (b.y + b.height)
	// 			);
	// 		});
	// 	} else {
	// 		planes.sort(function(a, b) {
	// 			return (
	// 				(b.x + b.width) * (b.y + b.height) -
	// 				(a.x + a.width) * (a.y + a.height)
	// 			);
	// 		});
	// 	}

	// 	return planes;
	// };

	// LimberGridView.prototype.sortPlainsByHeight = function(
	// 	planes,
	// 	order = "dec"
	// ) {
	// 	if (order == "asc") {
	// 		planes.sort(function(a, b) {
	// 			return a.height - b.height;
	// 		});
	// 	} else {
	// 		planes.sort(function(a, b) {
	// 			return b.height - a.height;
	// 		});
	// 	}

	// 	return planes;
	// };

	// LimberGridView.prototype.sortPlainsByDepth = function(
	// 	planes,
	// 	order = "dec"
	// ) {
	// 	if (order == "asc") {
	// 		planes.sort(function(a, b) {
	// 			return a.y + a.height - (b.y + b.height);
	// 		});
	// 	} else {
	// 		planes.sort(function(a, b) {
	// 			return b.y + b.height - (a.y + a.height);
	// 		});
	// 	}

	// 	return planes;
	// };

	// LimberGridView.prototype.divideEqualNumber = function(a, DEFAULT = 0) {
	// 	var res = a / a;
	// 	if (res == NaN) {
	// 		return 0;
	// 	} else {
	// 		return 1;
	// 	}
	// };

	// LimberGridView.prototype.getMarginAtPoint = function(a) {
	// 	if (a == 0) {
	// 		return 0;
	// 	} else {
	// 		return this.MARGIN;
	// 	}
	// };

	// LimberGridView.prototype.getRowSequence = function(serialize) {
	// 	var rows = {};
	// 	var rowsArr = [];
	// 	var columns = {};

	// 	var length_0 = this.positionData.length;

	// 	for (var i = 0; i < length_0; i++) {
	// 		if (rows.hasOwnProperty(this.positionData[i].y)) {
	// 			rows[this.positionData[i].y].push(i);
	// 		} else {
	// 			rows[this.positionData[i].y] = [];
	// 			rowsArr.push(Number(this.positionData[i].y));
	// 			rows[this.positionData[i].y].push(i);
	// 		}
	// 	}

	// 	rowsArr.sort(function(a, b) {
	// 		return a - b;
	// 	});

	// 	var length_0 = rowsArr.length;
	// 	for (var i = 0; i < length_0; i++) {
	// 		rows[rowsArr[i]].sort(
	// 			function(a, b) {
	// 				return this.positionData[a].x - this.positionData[b].x;
	// 			}.bind(this)
	// 		);
	// 	}

	// 	if (serialize != true) {
	// 		return { rowOrder: rowsArr, rows: rows };
	// 	} else {
	// 		var arr = [];
	// 		var map = {};
	// 		var count = 0;

	// 		var length_0 = rowsArr.length;
	// 		for (var i = 0; i < length_0; i++) {
	// 			var length_1 = rows[rowsArr[i]].length;
	// 			for (var j = 0; j < length_1; j++) {
	// 				arr.push(rows[rowsArr[i]][j]);
	// 				map[rows[rowsArr[i]][j]] = count++;
	// 			}
	// 		}

	// 		return { list: arr, map: map };
	// 	}
	// };

	// ----------------------------------------------------------------------------------------- //

	// ---------------------------------------- ESSENTIALS END --------------------------------- //

	// ----------------------------------------------------------------------------------------- //

	// UNUSED CODE

	// UNUSED CODE END

	return LimberGridView;
})();

export default window.LimberGridView;
