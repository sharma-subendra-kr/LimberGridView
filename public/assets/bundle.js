/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "assets";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _libs_eventHandlerLib_miscellaneous__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./libs/eventHandlerLib/miscellaneous */ "./src/libs/eventHandlerLib/miscellaneous.js");
/* harmony import */ var _libs_eventHandlerLib_addItemAndCutSpace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./libs/eventHandlerLib/addItemAndCutSpace */ "./src/libs/eventHandlerLib/addItemAndCutSpace.js");
/* harmony import */ var _libs_eventHandlerLib_itemInteraction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./libs/eventHandlerLib/itemInteraction */ "./src/libs/eventHandlerLib/itemInteraction.js");
/* harmony import */ var _libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./libs/utils/essentials */ "./src/libs/utils/essentials.js");
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







window.LimberGridView = function () {
  LimberGridView.prototype.constructor = LimberGridView; // ----------------------------------------------------------------------------------------- //
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
  LimberGridView.prototype.ADD_OR_CUTSPACE_TOGGLE = "ADD"; // ----------------------------------------------------------------------------------------- //
  // ---------------------------------- CONSTANTS YOU CAN CHANGE END ------------------------- //
  // ----------------------------------------------------------------------------------------- //

  function LimberGridView(options) {
    this.options = JSON.parse(JSON.stringify(options));
    this.callbacks = options.callbacks;
    this.initialGridData = this.options.initialGridData;
    this.initialPositionData = this.options.initialGridData.initialPositionData;
    this.positionData = JSON.parse(JSON.stringify(this.initialPositionData));

    if (this.options.initialGridData.mobileAspectRatio != undefined && this.options.initialGridData.mobileAspectRatio != null) {
      if (typeof this.options.initialGridData.mobileAspectRatio == "number") {
        this.MOBILE_ASPECT_RATIO = this.options.initialGridData.mobileAspectRatio;
      }
    }

    if (this.options.editable == true) {
      this.onLimberGridMouseDownFunctionVariable = _libs_eventHandlerLib_addItemAndCutSpace__WEBPACK_IMPORTED_MODULE_3__["onLimberGridMouseDown"].bind(this);
      this.onLimberGridMouseMoveBindedFunctionVariable = _libs_eventHandlerLib_addItemAndCutSpace__WEBPACK_IMPORTED_MODULE_3__["onLimberGridMouseMove"].bind(this);
      this.onLimberGridMouseUpBindedFunctionVariable = _libs_eventHandlerLib_addItemAndCutSpace__WEBPACK_IMPORTED_MODULE_3__["onLimberGridMouseUp"].bind(this);
      this.onLimberGridContextMenuBindedFunctionVariable = _libs_eventHandlerLib_addItemAndCutSpace__WEBPACK_IMPORTED_MODULE_3__["onLimberGridContextMenu"].bind(this);
      this.onLimberGridTouchStartFunctionVariable = _libs_eventHandlerLib_addItemAndCutSpace__WEBPACK_IMPORTED_MODULE_3__["onLimberGridTouchStart"].bind(this);
      this.onLimberGridTouchMoveBindedFunctionVariable = _libs_eventHandlerLib_addItemAndCutSpace__WEBPACK_IMPORTED_MODULE_3__["onLimberGridTouchMove"].bind(this);
      this.onLimberGridTouchEndBindedFunctionVariable = _libs_eventHandlerLib_addItemAndCutSpace__WEBPACK_IMPORTED_MODULE_3__["onLimberGridTouchEnd"].bind(this);
      this.onLimberGridTouchCancelBindedFunctionVariable = _libs_eventHandlerLib_addItemAndCutSpace__WEBPACK_IMPORTED_MODULE_3__["onLimberGridTouchCancel"].bind(this);
      this.onLimberGridTouchContextMenuBindedFunctionVariable = _libs_eventHandlerLib_addItemAndCutSpace__WEBPACK_IMPORTED_MODULE_3__["onLimberGridTouchContextMenu"].bind(this);
      this.onItemMouseDownFunctionVariable = _libs_eventHandlerLib_itemInteraction__WEBPACK_IMPORTED_MODULE_4__["onItemMouseDown"].bind(this);
      this.onMouseMoveBindedFunctionVariable = _libs_eventHandlerLib_itemInteraction__WEBPACK_IMPORTED_MODULE_4__["onMouseMove"].bind(this);
      this.onMouseUpBindedFunctionVariable = _libs_eventHandlerLib_itemInteraction__WEBPACK_IMPORTED_MODULE_4__["onMouseUp"].bind(this);
      this.onContextMenuBindedFunctionVariable = _libs_eventHandlerLib_itemInteraction__WEBPACK_IMPORTED_MODULE_4__["onContextMenu"].bind(this);
      this.onItemTouchStartFunctionVariable = _libs_eventHandlerLib_itemInteraction__WEBPACK_IMPORTED_MODULE_4__["onItemTouchStart"].bind(this);
      this.onTouchMoveBindedFunctionVariable = _libs_eventHandlerLib_itemInteraction__WEBPACK_IMPORTED_MODULE_4__["onTouchMove"].bind(this);
      this.onTouchEndBindedFunctionVariable = _libs_eventHandlerLib_itemInteraction__WEBPACK_IMPORTED_MODULE_4__["onTouchEnd"].bind(this);
      this.onTouchCancelBindedFunctionVariable = _libs_eventHandlerLib_itemInteraction__WEBPACK_IMPORTED_MODULE_4__["onTouchCancel"].bind(this);
      this.onItemTouchContextMenuBindedFunctionVariable = _libs_eventHandlerLib_itemInteraction__WEBPACK_IMPORTED_MODULE_4__["onItemTouchContextMenu"].bind(this);
      this.limberGridMouseDownCheckTimeOutVariable = null;
      this.limberGridTouchStartCheckTimeOutVariable = null;

      if (this.options.moveGuideRadius != undefined && this.options.moveGuideRadius != null) {
        if (typeof this.options.moveGuideRadius == "number") {
          this.MOVE_GUIDE_RADIUS = this.options.moveGuideRadius;
        }
      }

      if (this.options.resizeSquareGuideLength != undefined && this.options.resizeSquareGuideLength != null) {
        if (typeof this.options.resizeSquareGuideLength == "number") {
          this.RESIZE_SQUARE_GUIDE_LENGTH = this.options.resizeSquareGuideLength;
        }
      }

      if (this.options.resizeSquareBorderGuideWidth != undefined && this.options.resizeSquareBorderGuideWidth != null) {
        if (typeof this.options.resizeSquareBorderGuideWidth == "number") {
          this.RESIZE_SQUARE_BORDER_GUIDE_WIDTH = this.options.resizeSquareBorderGuideWidth;
        }
      }
    }

    if (this.callbacks.onItemClickCallback != undefined && this.callbacks.onItemClickCallback != null) {
      this.onItemClickFunctionVariable = _libs_eventHandlerLib_miscellaneous__WEBPACK_IMPORTED_MODULE_2__["onItemClick"].bind(this);
    }

    if (this.options.reRenderOnResize != false) {
      this.onWindowResizeFunctionVariable = _libs_eventHandlerLib_miscellaneous__WEBPACK_IMPORTED_MODULE_2__["onWindowResize"].bind(this);
      this.onWindowResizeTimerCallbackFunctionVariable = _libs_eventHandlerLib_miscellaneous__WEBPACK_IMPORTED_MODULE_2__["onWindowResizeTimerCallback"].bind(this);
      window.addEventListener("resize", this.onWindowResizeFunctionVariable);
    }

    this.init(this.initialGridData.gridWidth, this.options.autoArrange);
  }

  LimberGridView.prototype.init = function (initialGridWidth, autoArrange) {
    if (this.options.el.indexOf("#") != 0) {
      throw "DOM Element with Id required";
    } else {
      this.$body = document.getElementsByTagName("body");
      this.elementID = this.options.el.substring(1, this.options.el.length);
      this.pseudoElementID = "limberGridViewPseudoContainer_" + this.elementID;
      this.$el = document.getElementById(this.options.el.substring(1, this.options.el.length));
      this.$body[0].insertAdjacentHTML("beforeend", '<div id = "' + this.pseudoElementID + '" class = "limberGridViewPseudoContainer"></div>');
      this.$bodyPseudoEl = document.getElementById(this.pseudoElementID);
    }

    this.$el.innerHTML = '<div class = "limberGridViewContainer"><style></style><div class = "limberGridView"></div><div class = "limberGridViewLicense"><div class = "limberGridViewLicenseIcon">i</div><div class = "limberGridViewLicenseDetails">LimberGridView Copyright (c) 2018, Subendra Kumar Sharma. License: GNU General Public License version 3, or (at your option) any later version.</div></div></div>';
    this.$limberGridViewContainer = this.$el.querySelectorAll(".limberGridViewContainer");
    this.$limberGridViewStyle = this.$el.getElementsByTagName("style");
    this.$limberGridView = this.$el.querySelectorAll(".limberGridView");
    this.PADDING_LEFT = parseInt(window.getComputedStyle(this.$limberGridView[0], null).getPropertyValue("padding-left"));
    this.PADDING_RIGHT = parseInt(window.getComputedStyle(this.$limberGridView[0], null).getPropertyValue("padding-right"));
    this.PADDING_TOP = parseInt(window.getComputedStyle(this.$limberGridView[0], null).getPropertyValue("padding-top"));
    this.PADDING_BOTTOM = parseInt(window.getComputedStyle(this.$limberGridView[0], null).getPropertyValue("padding-bottom"));
    this.WIDTH = this.$limberGridView[0].clientWidth - this.PADDING_LEFT - this.PADDING_RIGHT;
    this.HEIGHT = this.$limberGridView[0].clientHeight - this.PADDING_TOP - this.PADDING_BOTTOM;

    if ((initialGridWidth == undefined || initialGridWidth == null) && this.positionData.length == 0) {
      initialGridWidth = this.WIDTH;
    }

    this.WIDTH_SCALE_FACTOR = this.WIDTH / initialGridWidth;

    if (autoArrange == true) {
      var positionData = JSON.parse(JSON.stringify(this.positionData));
      var remainingItems = [];
      var length_0 = positionData.length;

      for (var i = 0; i < length_0; i++) {
        remainingItems.push(i);
        positionData[i].width = positionData[i].width * this.WIDTH_SCALE_FACTOR;
        positionData[i].height = positionData[i].height * this.WIDTH_SCALE_FACTOR;

        if (positionData[i].width > this.WIDTH) {
          positionData[i].width = this.WIDTH;
        }
      }

      this.positionData = this.fitRemainingItemsBelowDeepestLine(0, positionData, remainingItems, []).positionData;
    } else {
      if (this.initialGridData.margin != undefined && this.initialGridData.margin != null) {
        if (typeof this.initialGridData.margin == "number" && this.initialGridData.margin > 0) {
          this.MARGIN = this.initialGridData.margin;
          this.MARGIN = this.MARGIN * this.WIDTH_SCALE_FACTOR;
        } else {
          throw "Margin is required for rendering with position coordinates";
        }
      } else {
        throw "Margin is required for rendering with position coordinates";
      }
    }
  }; // ----------------------------------------------------------------------------------------- //
  // ---------------------------------- GETTERS AND SETTERS ---------------------------------- //
  // ----------------------------------------------------------------------------------------- //


  LimberGridView.prototype.getGridData = function () {
    var gridData = {
      gridHeight: this.HEIGHT,
      gridWidth: this.WIDTH,
      margin: this.MARGIN,
      initialPositionData: JSON.parse(JSON.stringify(this.positionData))
    };
    return gridData;
  };

  LimberGridView.prototype.setAddOrCutSpace = function (flag) {
    if (flag == "ADD" || flag == "CUTSPACE") {
      this.ADD_OR_CUTSPACE_TOGGLE = flag;
    }
  }; // ----------------------------------------------------------------------------------------- //
  // ---------------------------------- GETTERS AND SETTERS END ------------------------------ //
  // ----------------------------------------------------------------------------------------- //
  // ----------------------------------------------------------------------------------------- //
  // --------------------------------------- RENDERERS --------------------------------------- //
  // ----------------------------------------------------------------------------------------- //


  LimberGridView.prototype.render = function (positionData, scale = true) {
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
    var html = []; // dev Code

    var t0 = performance.now(); // dev Code END

    if (!this.isMobile()) {
      if (this.options.dataType == "string") {
        var length_0 = positionData.length;

        for (var i = 0; i < length_0; i++) {
          positionData[i].width *= WIDTH_SCALE_FACTOR;

          if (positionData[i].width > this.WIDTH) {
            positionData[i].width = this.WIDTH;
          }

          var front = '<div class = "' + classListString + '" data-index = "' + i + '" ';
          var style_1 = 'style = "transform : translate(' + (positionData[i].x *= WIDTH_SCALE_FACTOR) + "px, ";
          var style_2 = (positionData[i].y *= WIDTH_SCALE_FACTOR) + "px); ";
          var style_3 = "width : " + positionData[i].width + "px; ";
          var style_4 = "height : " + (positionData[i].height *= WIDTH_SCALE_FACTOR) + "px; ";
          var style_5 = '">';
          var style = style_1 + style_2 + style_3 + style_4 + style_5;
          var bodyFront = "<div>";
          var bodyEnd = "</div>";
          var userData = this.callbacks.getItemRenderDataCallback(i, positionData[i].width, positionData[i].height, "render");
          var body = bodyFront + userData + bodyEnd;
          var end = "</div>";
          var item = front + style + body + end;
          html.push(item);
        }
      } else if (this.options.dataType == "node") {
        this.$limberGridViewContainer[0].removeChild(this.$limberGridView[0]);
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

          div.style.transform = "translate(" + (positionData[i].x *= WIDTH_SCALE_FACTOR) + "px, " + (positionData[i].y *= WIDTH_SCALE_FACTOR) + "px)";
          div.style.width = positionData[i].width + "px";
          div.style.height = (positionData[i].height *= WIDTH_SCALE_FACTOR) + "px";
          var userData = this.callbacks.getItemRenderDataCallback(i, positionData[i].width, positionData[i].height, "render");

          if (typeof userData == "string") {
            div.innerHTML = userData;
          } else {
            div.appendChild(userData);
          }

          this.$limberGridView[0].appendChild(div);
        }

        this.$limberGridViewContainer[0].appendChild(this.$limberGridView[0]);
      }
    } else {
      this.serializedPositionData = _libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["getRowSequence"].call(this, true);

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

          var front = '<div class = "limberGridViewItem" data-index = "' + i + '" ';
          var style_1 = 'style = "transform : translate(' + 0 + "px, ";
          var style_2 = (this.WIDTH / this.MOBILE_ASPECT_RATIO + _libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["getMarginAtPoint"].call(this, this.serializedPositionData.map[i])) * this.serializedPositionData.map[i] + "px); ";
          var style_3 = "width : " + this.WIDTH + "px; ";
          var style_4 = "height : " + this.WIDTH / this.MOBILE_ASPECT_RATIO + "px; ";
          var style_5 = '">';
          var style = style_1 + style_2 + style_3 + style_4 + style_5;
          var bodyFront = "<div>";
          var bodyEnd = "</div>";
          var userData = this.callbacks.getItemRenderDataCallback(i, this.WIDTH, this.WIDTH / this.MOBILE_ASPECT_RATIO, "render");
          var body = bodyFront + userData + bodyEnd;
          var end = "</div>";
          var item = front + style + body + end;
          html.push(item);
        }
      } else if (this.options.dataType == "node") {
        this.$limberGridViewContainer[0].removeChild(this.$limberGridView[0]);
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
          div.style.transform = "translate(" + 0 + "px, " + (this.WIDTH / this.MOBILE_ASPECT_RATIO + _libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["getMarginAtPoint"].call(this, this.serializedPositionData.map[i])) * this.serializedPositionData.map[i] + "px)";
          div.style.width = this.WIDTH + "px";
          div.style.height = this.WIDTH / this.MOBILE_ASPECT_RATIO + "px";
          var userData = this.callbacks.getItemRenderDataCallback(i, this.WIDTH, this.WIDTH / this.MOBILE_ASPECT_RATIO, "render");

          if (typeof userData == "string") {
            div.innerHTML = userData;
          } else {
            div.appendChild(userData);
          }

          this.$limberGridView[0].appendChild(div);
        }

        this.$limberGridViewContainer[0].appendChild(this.$limberGridView[0]);
      }
    }

    if (this.options.dataType == "string") {
      this.$limberGridView[0].innerHTML = html.join("");
    } // dev Code


    var t1 = performance.now();
    console.log(t0);
    console.log(t1);
    console.log(t1 - t0); // dev Code END

    this.$limberGridViewItems = this.$limberGridView[0].querySelectorAll(".limberGridViewItem");
    this.renderPseudoElements(positionData);
    this.initializeVariables();
    this.initializeEvents();

    if (this.callbacks.renderComplete != undefined && this.callbacks.renderComplete != null) {
      this.callbacks.renderComplete();
    }
  };

  LimberGridView.prototype.renderPseudoElements = function (positionData) {
    if (this.$limberGridViewGridPseudoItems != undefined) {
      var length_0 = this.positionData.length;

      for (var i = 0; i < length_0; i++) {
        this.$limberGridViewGridPseudoItems[0].parentNode.removeChild(this.$limberGridViewGridPseudoItems[0]);
      }

      this.$limberGridViewGridPseudoItems = undefined;
      this.$limberGridViewBodyPseudoItems = undefined;
    }

    var gridHtml = [];
    var bodyHtml = [];

    if (!this.isMobile()) {
      var length_0 = positionData.length;

      for (var i = 0; i < length_0; i++) {
        var gridFront = '<div class = "limberGridViewGridPseudoItem" data-index = "' + i + '" ';
        var bodyFront = '<div class = "limberGridViewBodyPseudoItem" data-index = "' + i + '" ';
        var style_1 = 'style = "transform : translate(' + positionData[i].x + "px, ";
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
        var gridFront = '<div class = "limberGridViewGridPseudoItem" data-index = "' + i + '" ';
        var bodyFront = '<div class = "limberGridViewBodyPseudoItem" data-index = "' + i + '" ';
        var style_1 = 'style = "transform : translate(' + 0 + "px, ";
        var style_2 = (this.WIDTH / this.MOBILE_ASPECT_RATIO + _libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["getMarginAtPoint"].call(this, this.serializedPositionData.map[i])) * this.serializedPositionData.map[i] + "px); ";
        var style_3 = "width : " + this.WIDTH + "px; ";
        var style_4 = "height : " + this.WIDTH / this.MOBILE_ASPECT_RATIO + "px; ";
        var style_5 = "margin : " + this.MARGIN + 'px;">';
        var style = style_1 + style_2 + style_3 + style_4 + style_5;
        var end = "</div>";
        var gridItem = gridFront + style + end;
        var bodyItem = bodyFront + style + end;
        gridHtml.push(gridItem);
        bodyHtml.push(bodyItem);
      }
    }

    var limberGridViewMoveGuide = '<div class = "limberGridViewMoveGuide"></div>';
    var limberGridViewHeightAdjustGuide = '<div class = "limberGridViewHeightAdjustGuide"></div>';
    var limberGridViewAddItemGuide = '<div class = "limberGridViewAddItemGuide"></div>';
    var limberGridViewAddItemOnTouchHoldGuide = '<div class = "limberGridViewAddItemOnTouchHoldGuide"></div>';
    gridHtml.push(limberGridViewMoveGuide);
    gridHtml.push(limberGridViewHeightAdjustGuide);
    gridHtml.push(limberGridViewAddItemGuide);
    gridHtml.push(limberGridViewAddItemOnTouchHoldGuide);
    this.$bodyPseudoEl.innerHTML = bodyHtml.join("");
    this.$limberGridView[0].insertAdjacentHTML("beforeend", gridHtml.join(""));
    this.$limberGridViewGridPseudoItems = this.$limberGridView[0].getElementsByClassName("limberGridViewGridPseudoItem");
    this.$limberGridViewBodyPseudoItems = this.$bodyPseudoEl.getElementsByClassName("limberGridViewBodyPseudoItem");
    this.$limberGridViewMoveGuide = this.$limberGridView[0].getElementsByClassName("limberGridViewMoveGuide");
    this.$limberGridViewHeightAdjustGuide = this.$limberGridView[0].getElementsByClassName("limberGridViewHeightAdjustGuide");
    this.$limberGridViewAddItemGuide = this.$limberGridView[0].getElementsByClassName("limberGridViewAddItemGuide");
    this.$limberGridViewAddItemOnTouchHoldGuide = this.$limberGridView[0].getElementsByClassName("limberGridViewAddItemOnTouchHoldGuide");
  };

  LimberGridView.prototype.renderItems = function (items, scale = true, processType = "onDemand") {
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

    var html = []; // dev Code

    var t0 = performance.now(); // dev Code END

    if (!this.isMobile()) {
      this.$limberGridViewContainer[0].removeChild(this.$limberGridView[0]);
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

        div.style.transform = "translate(" + (this.positionData[items[i]].x *= WIDTH_SCALE_FACTOR) + "px, " + (this.positionData[items[i]].y *= WIDTH_SCALE_FACTOR) + "px)";
        div.style.width = this.positionData[items[i]].width + "px";
        div.style.height = (this.positionData[items[i]].height *= WIDTH_SCALE_FACTOR) + "px";
        var userData = this.callbacks.getItemRenderDataCallback(items[i], this.positionData[items[i]].width, this.positionData[items[i]].height, processType);

        if (typeof userData == "string") {
          div.innerHTML = userData;
        } else {
          div.appendChild(userData);
        }

        if (this.$limberGridViewItems[items[i]] == undefined || this.$limberGridViewItems[items[i]] == null) {
          this.$limberGridView[0].appendChild(div);
        } else {
          this.$limberGridView[0].replaceChild(div, this.$limberGridViewItems[items[i]]);
        }
      }

      this.$limberGridViewContainer[0].appendChild(this.$limberGridView[0]);
    } else {
      this.$limberGridViewContainer[0].removeChild(this.$limberGridView[0]);
      var length_0 = items.length;

      for (var i = 0; i < length_0; i++) {
        var div = document.createElement("div");
        var attribute = document.createAttribute("data-index");
        attribute.value = items[i];
        div.setAttributeNode(attribute);
        div.classList.add("limberGridViewItem");
        div.style.transform = "translate(" + 0 + "px, " + (this.WIDTH / this.MOBILE_ASPECT_RATIO + _libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["getMarginAtPoint"].call(this, this.serializedPositionData.map[items[i]])) * this.serializedPositionData.map[items[i]] + "px)";
        div.style.width = this.WIDTH + "px";
        div.style.height = this.WIDTH / this.MOBILE_ASPECT_RATIO + "px";
        var userData = this.callbacks.getItemRenderDataCallback(items[i], this.WIDTH, this.WIDTH / this.MOBILE_ASPECT_RATIO, processType);

        if (typeof userData == "string") {
          div.innerHTML = userData;
        } else {
          div.appendChild(userData);
        }

        if (this.$limberGridViewItems[items[i]] == undefined || this.$limberGridViewItems[items[i]] == null) {
          this.$limberGridView[0].appendChild(div);
        } else {
          this.$limberGridView[0].replaceChild(div, this.$limberGridViewItems[items[i]]);
        }
      }

      this.$limberGridViewContainer[0].appendChild(this.$limberGridView[0]);
    } // dev Code


    var t1 = performance.now();
    console.log(t0);
    console.log(t1);
    console.log(t1 - t0); // dev Code END

    this.$limberGridViewItems = this.$limberGridView[0].querySelectorAll(".limberGridViewItem");
    this.renderPseudoItems(items);
    this.initializeVariables();
    this.initializeEvents();
    var renderDetails = {
      items: JSON.parse(JSON.stringify(items)),
      scale: scale,
      processType: processType
    };

    if (this.callbacks.itemsRenderComplete != undefined && this.callbacks.itemsRenderComplete != null && processType != "addItems" && processType != "resizeItems" && processType != "removeItems" && processType != "addItemInteractive") {
      this.$limberGridView[0].scrollTop = scrollTop;
      this.callbacks.itemsRenderComplete(renderDetails.items, scale, processType, scrollTop);
    }

    return renderDetails;
  };

  LimberGridView.prototype.renderPseudoItems = function (items) {
    var gridHtml = [];
    var bodyHtml = [];

    if (!this.isMobile()) {
      this.$limberGridViewContainer[0].removeChild(this.$limberGridView[0]);
      this.$body[0].removeChild(this.$bodyPseudoEl);
      var length_0 = items.length;

      for (var i = 0; i < length_0; i++) {
        var divGrid = document.createElement("div");
        var attributeGrid = document.createAttribute("data-index");
        attributeGrid.value = items[i];
        divGrid.setAttributeNode(attributeGrid);
        divGrid.classList.add("limberGridViewGridPseudoItem");
        divGrid.style.transform = "translate(" + this.positionData[items[i]].x + "px, " + this.positionData[items[i]].y + "px)";
        divGrid.style.width = this.positionData[items[i]].width + "px";
        divGrid.style.height = this.positionData[items[i]].height + "px";
        var divBody = document.createElement("div");
        var attributeBody = document.createAttribute("data-index");
        attributeBody.value = items[i];
        divBody.setAttributeNode(attributeBody);
        divBody.classList.add("limberGridViewBodyPseudoItem");
        divBody.style.transform = "translate(" + 0 + "px, " + 0 + "px)";
        divBody.style.width = this.positionData[items[i]].width + "px";
        divBody.style.height = this.positionData[items[i]].height + "px";

        if (this.$limberGridViewGridPseudoItems[items[i]] == undefined || this.$limberGridViewGridPseudoItems[items[i]] == null) {
          this.$limberGridView[0].appendChild(divGrid);
          this.$bodyPseudoEl.appendChild(divBody);
        } else {
          this.$limberGridView[0].replaceChild(divGrid, this.$limberGridViewGridPseudoItems[items[i]]);
          this.$bodyPseudoEl.replaceChild(divBody, this.$limberGridViewBodyPseudoItems[items[i]]);
        }
      }

      this.$limberGridViewContainer[0].appendChild(this.$limberGridView[0]);
      this.$body[0].appendChild(this.$bodyPseudoEl);
    } else {
      this.$limberGridViewContainer[0].removeChild(this.$limberGridView[0]);
      this.$body[0].removeChild(this.$bodyPseudoEl);
      var length_0 = items.length;

      for (var i = 0; i < length_0; i++) {
        var divGrid = document.createElement("div");
        var attributeGrid = document.createAttribute("data-index");
        attributeGrid.value = items[i];
        divGrid.setAttributeNode(attributeGrid);
        divGrid.classList.add("limberGridViewGridPseudoItem");
        divGrid.style.transform = "translate(" + 0 + "px, " + (this.WIDTH / this.MOBILE_ASPECT_RATIO + _libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["getMarginAtPoint"].call(this, this.serializedPositionData.map[i])) * this.serializedPositionData.map[i] + "px)";
        divGrid.style.width = this.WIDTH + "px";
        divGrid.style.height = this.WIDTH / this.MOBILE_ASPECT_RATIO + "px";
        var divBody = document.createElement("div");
        var attributeBody = document.createAttribute("data-index");
        attributeBody.value = items[i];
        divBody.setAttributeNode(attributeBody);
        divBody.classList.add("limberGridViewBodyPseudoItem");
        divBody.style.transform = "translate(" + 0 + "px, " + 0 + "px)";
        divBody.style.width = this.WIDTH + "px";
        divBody.style.height = this.WIDTH / this.MOBILE_ASPECT_RATIO + "px";

        if (this.$limberGridViewGridPseudoItems[items[i]] == undefined || this.$limberGridViewGridPseudoItems[items[i]] == null) {
          this.$limberGridView[0].appendChild(divGrid);
          this.$bodyPseudoEl.appendChild(divBody);
        } else {
          this.$limberGridView[0].replaceChild(divGrid, this.$limberGridViewGridPseudoItems[items[i]]);
          this.$bodyPseudoEl.replaceChild(divBody, this.$limberGridViewBodyPseudoItems[items[i]]);
        }
      }

      this.$limberGridViewContainer[0].appendChild(this.$limberGridView[0]);
      this.$body[0].appendChild(this.$bodyPseudoEl);
    }

    this.$limberGridViewGridPseudoItems = this.$limberGridView[0].getElementsByClassName("limberGridViewGridPseudoItem");
    this.$limberGridViewBodyPseudoItems = this.$bodyPseudoEl.getElementsByClassName("limberGridViewBodyPseudoItem");
  }; // ----------------------------------------------------------------------------------------- //
  // --------------------------------------- RENDERERS END ----------------------------------- //
  // ----------------------------------------------------------------------------------------- //
  // ----------------------------------------------------------------------------------------- //
  // ------------------------------------ ADD OR REMOVE ITEMS -------------------------------- //
  // ----------------------------------------------------------------------------------------- //


  LimberGridView.prototype.removeItems = function (itemsIndices) {
    this.unInitializeEvents();
    var scrollTop = this.$limberGridView[0].scrollTop;
    var itemsToRender = [];
    var length_0 = this.positionData.length - 1;

    for (var i = length_0; i >= 0; i--) {
      var index = i;
      itemsToRender.push(length_0 - i);
    }

    itemsIndices.sort(function (a, b) {
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
      this.$limberGridViewItems = this.$limberGridView[0].querySelectorAll(".limberGridViewItem");
      this.$limberGridViewGridPseudoItems = this.$limberGridView[0].getElementsByClassName("limberGridViewGridPseudoItem");
      this.$limberGridViewBodyPseudoItems = this.$bodyPseudoEl.getElementsByClassName("limberGridViewBodyPseudoItem");
    }

    itemsToRender.splice(this.positionData.length);

    if (this.isMobile()) {
      this.serializedPositionData = _libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["getRowSequence"].call(this, true);
    }

    this.renderItems(itemsToRender, false, "removeItems");

    if (this.callbacks.removeCompleteCallback != undefined && this.callbacks.removeCompleteCallback != null) {
      this.$limberGridView[0].scrollTop = scrollTop;
      this.callbacks.removeCompleteCallback(itemsIndices);
    }
  };

  LimberGridView.prototype.addItems = function (howMany = 1, itemWidth = 100, itemHeight = 100) {
    if (howMany == 0) {
      return;
    }

    if (itemWidth > this.WIDTH) {
      return;
    }

    var startingY = 0;
    var length_0 = this.positionData.length;

    for (var i = 0; i < length_0; i++) {
      if (this.positionData[i].y + this.positionData[i].height > startingY) {
        startingY = this.positionData[i].y + this.positionData[i].height;
      }
    }

    startingY = startingY + _libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["getMarginAtPoint"].call(this, startingY);
    var items = [];
    var scrollToPosition = startingY;
    var remainingItems = howMany;
    var remainingWidth = this.WIDTH;

    while (remainingItems != 0) {
      var startingX = 0;

      while (remainingWidth > itemWidth + _libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["getMarginAtPoint"].call(this, startingX) && remainingItems != 0) {
        var item = {
          x: _libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["getMarginAtPoint"].call(this, startingX) + startingX,
          y: startingY,
          width: itemWidth,
          height: itemHeight
        };
        remainingWidth = remainingWidth - itemWidth - _libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["getMarginAtPoint"].call(this, startingX);
        startingX = startingX + _libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["getMarginAtPoint"].call(this, startingX) + itemWidth;
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

    if (this.callbacks.addCompleteCallback != undefined && this.callbacks.addCompleteCallback != null) {
      this.callbacks.addCompleteCallback(renderDetails.items, itemWidth, itemHeight, "addItems");
    }
  };

  LimberGridView.prototype.addItemsAtPositions = function (items, scale = true, processType = "onDemand") {
    var addArray = [];
    var startingIndex = this.positionData.length;
    var length_0 = items.length;

    for (var i = 0; i < length_0; i++) {
      addArray.push(startingIndex + i);

      if (this.isMobile()) {
        this.serializedPositionData.list.push(startingIndex + i);
        this.serializedPositionData.map[startingIndex + i] = this.serializedPositionData.list.length - 1;
      }

      this.positionData.push(items[i]);
    }

    var renderDetails = this.renderItems(addArray, scale, processType);
    return renderDetails;
  }; // ----------------------------------------------------------------------------------------- //
  // ------------------------------------ ADD OR REMOVE ITEMS END ---------------------------- //
  // ----------------------------------------------------------------------------------------- //
  // ----------------------------------------------------------------------------------------- //
  // --------------------------- EVENT INITIALIZERS AND UNINITIALIZERS ----------------------- //
  // ----------------------------------------------------------------------------------------- //


  LimberGridView.prototype.reInitializeEvents = function () {
    this.unInitializeEvents();
    this.initializeEvents();
  };

  LimberGridView.prototype.initializeVariables = function () {};

  LimberGridView.prototype.initializeEvents = function () {
    if (this.options.editable == true) {
      if (this.isMobile() == false) {
        if (this.options.enableInteractiveAddAndCut != false) {
          this.$limberGridView[0].addEventListener("mousedown", this.onLimberGridMouseDownFunctionVariable);

          if (this.options.enableTouchInteraction != false) {
            this.$limberGridView[0].addEventListener("touchstart", this.onLimberGridTouchStartFunctionVariable);
          }
        }
      }

      var length_0 = this.$limberGridViewItems.length;

      for (var i = 0; i < length_0; i++) {
        if (this.isMobile() == false) {
          this.$limberGridViewItems[i].addEventListener("mousedown", this.onItemMouseDownFunctionVariable);

          if (this.options.enableTouchInteraction != false) {
            this.$limberGridViewItems[i].addEventListener("touchstart", this.onItemTouchStartFunctionVariable);
          }
        }

        if (this.callbacks.onItemClickCallback != undefined && this.callbacks.onItemClickCallback != null) {
          this.$limberGridViewItems[i].addEventListener("click", this.onItemClickFunctionVariable);
        }
      }
    }
  };

  LimberGridView.prototype.unInitializeEvents = function () {
    if (this.options.editable == true) {
      if (this.$limberGridView != undefined) {
        this.$limberGridView[0].removeEventListener("mousedown", this.onLimberGridMouseDownFunctionVariable);
        this.$limberGridView[0].removeEventListener("touchstart", this.onLimberGridTouchStartFunctionVariable);
      }

      if (this.$limberGridViewItems != undefined) {
        var length_0 = this.$limberGridViewItems.length;

        for (var i = 0; i < length_0; i++) {
          this.$limberGridViewItems[i].removeEventListener("mousedown", this.onItemMouseDownFunctionVariable);
          this.$limberGridViewItems[i].removeEventListener("touchstart", this.onItemTouchStartFunctionVariable);
          this.$limberGridViewItems[i].removeEventListener("click", this.onItemClickFunctionVariable);
        }
      }
    }
  };

  LimberGridView.prototype.initializeItemTouchEvents = function () {
    if (this.$limberGridViewItems != undefined) {
      var length_0 = this.$limberGridViewItems.length;

      for (var i = 0; i < length_0; i++) {
        this.$limberGridViewItems[i].addEventListener("mousedown", this.onItemMouseDownFunctionVariable);
        this.$limberGridViewItems[i].addEventListener("touchstart", this.onItemTouchStartFunctionVariable);
      }
    }
  };

  LimberGridView.prototype.unInitializeItemTouchEvents = function () {
    if (this.$limberGridViewItems != undefined) {
      var length_0 = this.$limberGridViewItems.length;

      for (var i = 0; i < length_0; i++) {
        this.$limberGridViewItems[i].removeEventListener("mousedown", this.onItemMouseDownFunctionVariable);
        this.$limberGridViewItems[i].removeEventListener("touchstart", this.onItemTouchStartFunctionVariable);
      }
    }
  }; // ----------------------------------------------------------------------------------------- //
  // --------------------------- EVENT INITIALIZERS AND UNINITIALIZERS END ------------------- //
  // ----------------------------------------------------------------------------------------- //


  LimberGridView.prototype.isMobile = function () {
    // production
    return window.matchMedia("only screen and (max-width: 1033px) and (min-width : 1px)").matches; // production END
    // return window.matchMedia("only screen and (max-width: 900px) and (min-width : 1px)").matches;
    // return false;
    // return true;
  }; // ----------------------------------------------------------------------------------------- //
  // -------------------------------------- POSITIONING LOGIC -------------------------------- //
  // ----------------------------------------------------------------------------------------- //


  LimberGridView.prototype.resizePlane = function (index, width, height) {
    if (this.positionData[index].x + width > this.WIDTH) {
      return false;
    }

    if (typeof width != "number" || typeof height != "number") {
      return false;
    }

    if (width < 50 || height < 50) {
      return false;
    }

    var allAffectedItems = this.findAffectedItemsOnResize(index, width, height);
    var item = JSON.parse(JSON.stringify(this.positionData[index]));
    item.width = width;
    item.height = height;
    var freeSpaces = this.findFreeSpaces(item, allAffectedItems.affectedItems); // NOW MERGE FREE SPACES

    item.doNotMergeFlag = true;
    var mergedFreeSpaces = this.mergeFreeSpaces(freeSpaces, [item]);
    var affectedItemsExceptSelfObjects = [];
    var length_0 = allAffectedItems.affectedItemsExceptSelf.length;

    for (var i = 0; i < length_0; i++) {
      var ind = allAffectedItems.affectedItemsExceptSelf[i];
      affectedItemsExceptSelfObjects[i] = JSON.parse(JSON.stringify(this.positionData[allAffectedItems.affectedItemsExceptSelf[i]]));
      affectedItemsExceptSelfObjects[i].index = ind;
    }

    var fitDetails = this.fitItemsIntoFreeSpaces(affectedItemsExceptSelfObjects, JSON.parse(JSON.stringify(mergedFreeSpaces)), [item]);
    var fittedItems = fitDetails.repositionedItems;
    var positionData = JSON.parse(JSON.stringify(this.positionData));
    var length_0 = fittedItems.length;

    for (var i = 0; i < length_0; i++) {
      var ind = fittedItems[i].index;
      positionData[ind].x = fittedItems[i].x;
      positionData[ind].y = fittedItems[i].y;
    }

    positionData[index].width = width;
    positionData[index].height = height;
    var remainingItems = [];
    var length_0 = allAffectedItems.affectedItemsExceptSelf.length;
    var length_1 = fittedItems.length;

    for (var i = 0; i < length_0; i++) {
      var fittedFlag = false;

      for (var j = 0; j < length_1; j++) {
        if (allAffectedItems.affectedItemsExceptSelf[i] == fittedItems[j].index) {
          fittedFlag = true;
          break;
        }
      }

      if (fittedFlag == false) {
        remainingItems.push(allAffectedItems.affectedItemsExceptSelf[i]);
      }
    }

    var positionData = this.fitRemainingItems(positionData, remainingItems, allAffectedItems, index, JSON.parse(JSON.stringify(fitDetails)));
    var length_0 = positionData.length;

    for (var i = 0; i < length_0; i++) {
      this.$limberGridViewItems[i].style.transform = "translate(" + positionData[i].x + "px, " + positionData[i].y + "px)";
      this.$limberGridViewItems[i].classList.remove("limberGridViewItemDemo", "limberGridViewItemResizingState");
    }

    this.positionData = positionData;
    var scrollTop = this.$limberGridView[0].scrollTop;
    this.renderItems([index], false, "resizeItems");
    this.$limberGridView[0].scrollTop = scrollTop;
  };

  LimberGridView.prototype.resizePlaneDemo = function (index, width, height) {
    if (this.positionData[index].x + width > this.WIDTH) {
      return false;
    }

    if (typeof width != "number" || typeof height != "number") {
      return false;
    }

    if (width < 50 || height < 50) {
      return false;
    }

    var length_0 = this.$limberGridViewItems.length;

    for (var i = 0; i < length_0; i++) {
      this.$limberGridViewItems[i].style.transform = "translate(" + this.positionData[i].x + "px, " + this.positionData[i].y + "px)";
      this.$limberGridViewItems[i].classList.remove("limberGridViewItemDemo");
    }

    var allAffectedItems = this.findAffectedItemsOnResize(index, width, height);
    var item = JSON.parse(JSON.stringify(this.positionData[index]));
    item.width = width;
    item.height = height;
    var freeSpaces = this.findFreeSpaces(item, allAffectedItems.affectedItems); // NOW MERGE FREE SPACES

    item.doNotMergeFlag = true;
    var mergedFreeSpaces = this.mergeFreeSpaces(freeSpaces, [item]);
    var affectedItemsExceptSelfObjects = [];
    var length_0 = allAffectedItems.affectedItemsExceptSelf.length;

    for (var i = 0; i < length_0; i++) {
      var ind = allAffectedItems.affectedItemsExceptSelf[i];
      affectedItemsExceptSelfObjects[i] = JSON.parse(JSON.stringify(this.positionData[allAffectedItems.affectedItemsExceptSelf[i]]));
      affectedItemsExceptSelfObjects[i].index = ind;
    }

    var fitDetails = this.fitItemsIntoFreeSpaces(affectedItemsExceptSelfObjects, JSON.parse(JSON.stringify(mergedFreeSpaces)), [item]);
    var fittedItems = fitDetails.repositionedItems;
    var length_0 = fittedItems.length;

    for (var i = 0; i < length_0; i++) {
      var ind = fittedItems[i].index;
      this.$limberGridViewItems[ind].style.transform = "translate(" + fittedItems[i].x + "px, " + fittedItems[i].y + "px)";
    }

    this.$limberGridViewItems[index].classList.add("limberGridViewItemDemo");
    var remainingItems = [];
    var length_0 = allAffectedItems.affectedItemsExceptSelf.length;
    var length_1 = fittedItems.length;

    for (var i = 0; i < length_0; i++) {
      var fittedFlag = false;

      for (var j = 0; j < length_1; j++) {
        if (allAffectedItems.affectedItemsExceptSelf[i] == fittedItems[j].index) {
          fittedFlag = true;
          break;
        }
      }

      if (fittedFlag == false) {
        var ind = allAffectedItems.affectedItemsExceptSelf[i];
        remainingItems.push(allAffectedItems.affectedItemsExceptSelf[i]);
        this.$limberGridViewItems[ind].classList.add("limberGridViewItemDemo");
      }
    }
  };

  LimberGridView.prototype.movePlane = function (index, toX, toY) {
    var allAffectedItems = this.findAffectedItemsOnMove(index, toX, toY);
    var item = JSON.parse(JSON.stringify(this.positionData[index]));
    item.x = toX;
    item.y = toY;
    var freeSpaces = this.findFreeSpaces(item, allAffectedItems.affectedItems); // NOW MERGE FREE SPACES

    item.doNotMergeFlag = true;
    var mergedFreeSpaces = this.mergeFreeSpaces(freeSpaces, [item]);
    var affectedItemsExceptSelfObjects = [];
    var length_0 = allAffectedItems.affectedItemsExceptSelf.length;

    for (var i = 0; i < length_0; i++) {
      var ind = allAffectedItems.affectedItemsExceptSelf[i];
      affectedItemsExceptSelfObjects[i] = JSON.parse(JSON.stringify(this.positionData[allAffectedItems.affectedItemsExceptSelf[i]]));
      affectedItemsExceptSelfObjects[i].index = ind;
    }

    var fitDetails = this.fitItemsIntoFreeSpaces(affectedItemsExceptSelfObjects, JSON.parse(JSON.stringify(mergedFreeSpaces)), [item]);
    var fittedItems = fitDetails.repositionedItems;
    var positionData = JSON.parse(JSON.stringify(this.positionData));
    var length_0 = fittedItems.length;

    for (var i = 0; i < length_0; i++) {
      var ind = fittedItems[i].index;
      positionData[ind].x = fittedItems[i].x;
      positionData[ind].y = fittedItems[i].y;
    }

    positionData[index].x = toX;
    positionData[index].y = toY;
    var remainingItems = [];
    var length_0 = allAffectedItems.affectedItemsExceptSelf.length;
    var length_1 = fittedItems.length;

    for (var i = 0; i < length_0; i++) {
      var fittedFlag = false;

      for (var j = 0; j < length_1; j++) {
        if (allAffectedItems.affectedItemsExceptSelf[i] == fittedItems[j].index) {
          fittedFlag = true;
          break;
        }
      }

      if (fittedFlag == false) {
        remainingItems.push(allAffectedItems.affectedItemsExceptSelf[i]);
      }
    }

    var positionData = this.fitRemainingItems(positionData, remainingItems, allAffectedItems, index, JSON.parse(JSON.stringify(fitDetails)));
    var length_0 = positionData.length;

    for (var i = 0; i < length_0; i++) {
      this.$limberGridViewItems[i].style.transform = "translate(" + positionData[i].x + "px, " + positionData[i].y + "px)";
      this.$limberGridViewItems[i].classList.remove("limberGridViewItemDemo");
    }

    this.positionData = positionData;
  };

  LimberGridView.prototype.movePlaneDemo = function (index, toX, toY) {
    var length_0 = this.$limberGridViewItems.length;

    for (var i = 0; i < length_0; i++) {
      this.$limberGridViewItems[i].style.transform = "translate(" + this.positionData[i].x + "px, " + this.positionData[i].y + "px)";
      this.$limberGridViewItems[i].classList.remove("limberGridViewItemDemo");
    }

    var allAffectedItems = this.findAffectedItemsOnMove(index, toX, toY);
    var item = JSON.parse(JSON.stringify(this.positionData[index]));
    item.x = toX;
    item.y = toY;
    var freeSpaces = this.findFreeSpaces(item, allAffectedItems.affectedItems); // NOW MERGE FREE SPACES

    item.doNotMergeFlag = true;
    var mergedFreeSpaces = this.mergeFreeSpaces(freeSpaces, [item]);
    var affectedItemsExceptSelfObjects = [];
    var length_0 = allAffectedItems.affectedItemsExceptSelf.length;

    for (var i = 0; i < length_0; i++) {
      var ind = allAffectedItems.affectedItemsExceptSelf[i];
      affectedItemsExceptSelfObjects[i] = JSON.parse(JSON.stringify(this.positionData[allAffectedItems.affectedItemsExceptSelf[i]]));
      affectedItemsExceptSelfObjects[i].index = ind;
    }

    var fitDetails = this.fitItemsIntoFreeSpaces(affectedItemsExceptSelfObjects, JSON.parse(JSON.stringify(mergedFreeSpaces)), [item]);
    var fittedItems = fitDetails.repositionedItems;
    var length_0 = fittedItems.length;

    for (var i = 0; i < length_0; i++) {
      var ind = fittedItems[i].index;
      this.$limberGridViewItems[ind].style.transform = "translate(" + fittedItems[i].x + "px, " + fittedItems[i].y + "px)";
    }

    this.$limberGridViewItems[index].classList.add("limberGridViewItemDemo");
    var remainingItems = [];
    var length_0 = allAffectedItems.affectedItemsExceptSelf.length;
    var length_1 = fittedItems.length;

    for (var i = 0; i < length_0; i++) {
      var fittedFlag = false;

      for (var j = 0; j < length_1; j++) {
        if (allAffectedItems.affectedItemsExceptSelf[i] == fittedItems[j].index) {
          fittedFlag = true;
          break;
        }
      }

      if (fittedFlag == false) {
        var ind = allAffectedItems.affectedItemsExceptSelf[i];
        remainingItems.push(allAffectedItems.affectedItemsExceptSelf[i]);
        this.$limberGridViewItems[ind].classList.add("limberGridViewItemDemo");
      }
    }
  };

  LimberGridView.prototype.findFreeSpaces = function (item, affectedItems) {
    var freeSpaces = [];
    var length_0 = affectedItems.length;

    for (var i = 0; i < length_0; i++) {
      var result = this.isPlaneBInsidePlaneA_TouchingIsInside(item, this.positionData[affectedItems[i]], "all");

      if (result.isInside == true) {
        continue;
      } else {
        var fs = this.subtractPlanes(this.positionData[affectedItems[i]], item);
        var length_1 = fs.length;

        for (var j = 0; j < length_1; j++) {
          freeSpaces.push(fs[j]);
        }
      }
    }

    return freeSpaces;
  };

  LimberGridView.prototype.mergeFreeSpaces = function (freeSpaces, itemsNotToMerge) {
    var mergePlainsFreeSpacesAndItemsNotToMerge = freeSpaces.concat(itemsNotToMerge);

    var isPlaneInsideStack = function (stack, plane, context) {
      var flag = false;
      var length_0 = stack.length;

      for (var i = 0; i < length_0; i++) {
        if (context.arePlainsSame(stack[i], plane)) {
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
        if (!this.isPlaneBInsidePlaneA_TouchingNotInside(freeSpaces[i], freeSpaces[j])) {
          var mergedPlane = this.mergePlains(freeSpaces[i], freeSpaces[j], mergePlainsFreeSpacesAndItemsNotToMerge);

          if (mergedPlane != false) {
            if (!isPlaneInsideStack(mergedStack, mergedPlane, this)) {
              mergedStack.push(mergedPlane);
            }
          }
        }
      }
    }

    var mergeStackItemWithFreeSpaces = function (freeSpaces, mergedStack, mergePlainsFreeSpacesAndItemsNotToMerge, context) {
      var newStack = [];
      var length_0 = freeSpaces.length;
      var length_1 = mergedStack.length;

      for (var i = 0; i < length_0; i++) {
        for (var j = 0; j < length_1; j++) {
          if (!context.isPlaneBInsidePlaneA_TouchingNotInside(freeSpaces[i], mergedStack[j])) {
            var mergedPlane = context.mergePlains(freeSpaces[i], mergedStack[j], mergePlainsFreeSpacesAndItemsNotToMerge);

            if (mergedPlane != false) {
              if (!isPlaneInsideStack(mergedStack.concat(newStack), mergedPlane, context)) {
                newStack.push(mergedPlane);
              }
            }
          }
        }
      }

      return newStack;
    };

    var newStack = mergeStackItemWithFreeSpaces(freeSpaces, mergedStack, mergePlainsFreeSpacesAndItemsNotToMerge, this);

    while (newStack.length > 0) {
      mergedStack = mergedStack.concat(newStack);
      var newStack = mergeStackItemWithFreeSpaces(freeSpaces, mergedStack, mergePlainsFreeSpacesAndItemsNotToMerge, this);
    }

    mergedStack = mergedStack.concat(freeSpaces);
    var redundantPlanes = {};
    var length_0 = mergedStack.length;

    for (var i = 0; i < length_0 - 1; i++) {
      for (var j = i + 1; j < length_0; j++) {
        var result = this.isPlaneBInsidePlaneA_TouchingIsInside(mergedStack[i], mergedStack[j], "all");

        if (result.isInside) {
          redundantPlanes[j] = true;
        } else {
          var result = this.isPlaneBInsidePlaneA_TouchingIsInside(mergedStack[j], mergedStack[i], "all");

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

  LimberGridView.prototype.findAffectedItemsOnMove = function (index, toX, toY) {
    var item = JSON.parse(JSON.stringify(this.positionData[index]));
    item.x = toX;
    item.y = toY;
    var affectedItems = [];
    var affectedItemsExceptSelf = [];
    var length_0 = this.positionData.length;

    for (var i = 0; i < length_0; i++) {
      var result = this.isPlaneBInsidePlaneA_TouchingIsInside(item, this.positionData[i]);

      if (result == true) {
        affectedItems.push(i);

        if (i != index) {
          affectedItemsExceptSelf.push(i);
        }
      }
    }

    return {
      affectedItems: affectedItems,
      affectedItemsExceptSelf: affectedItemsExceptSelf
    };
  };

  LimberGridView.prototype.findAffectedItemsOnResize = function (index, width, height) {
    var item = JSON.parse(JSON.stringify(this.positionData[index]));
    item.width = width;
    item.height = height;
    var affectedItems = [];
    var affectedItemsExceptSelf = [];
    var length_0 = this.positionData.length;

    for (var i = 0; i < length_0; i++) {
      var result = this.isPlaneBInsidePlaneA_TouchingIsInside(item, this.positionData[i]);

      if (result == true) {
        affectedItems.push(i);

        if (i != index) {
          affectedItemsExceptSelf.push(i);
        }
      }
    }

    return {
      affectedItems: affectedItems,
      affectedItemsExceptSelf: affectedItemsExceptSelf
    };
  };

  LimberGridView.prototype.isPlaneBInsidePlaneA_TouchingIsInside = function (A, B, resultType) {
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
      if (BCoordinatesArr[i][0] >= ATopLeft[0] && BCoordinatesArr[i][0] <= ATopRight[0] && BCoordinatesArr[i][0] >= ABottomLeft[0] && BCoordinatesArr[i][0] <= ABottomRight[0] && BCoordinatesArr[i][1] >= ATopLeft[1] && BCoordinatesArr[i][1] <= ABottomLeft[1] && BCoordinatesArr[i][1] >= ATopRight[1] && BCoordinatesArr[i][1] <= ABottomRight[1]) {
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
      if (ACoordiantesArr[i][0] >= BTopLeft[0] && ACoordiantesArr[i][0] <= BTopRight[0] && ACoordiantesArr[i][0] >= BBottomLeft[0] && ACoordiantesArr[i][0] <= BBottomRight[0] && ACoordiantesArr[i][1] >= BTopLeft[1] && ACoordiantesArr[i][1] <= BBottomLeft[1] && ACoordiantesArr[i][1] >= BTopRight[1] && ACoordiantesArr[i][1] <= BBottomRight[1]) {
        overallResult = true;
        engulfedCheckCount++;
      }
    }

    if (engulfedCheckCount == 4) {
      engulfed = true;
    }

    if (BTopLeft[0] > ATopLeft[0] && BTopRight[0] < ATopRight[0] && BTopLeft[1] < ATopLeft[1] && BBottomLeft[1] > ABottomLeft[1] || BTopLeft[1] > ATopLeft[1] && BBottomLeft[1] < ABottomLeft[1] && BTopLeft[0] < ATopLeft[0] && BTopRight[0] > ATopRight[0]) {
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
        engulfed: engulfed
      };
    } else {
      return overallResult;
    }
  };

  LimberGridView.prototype.isPlaneBInsidePlaneA_TouchingNotInside = function (A, B, resultType) {
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
      if (BCoordinatesArr[i][0] > ATopLeft[0] && BCoordinatesArr[i][0] < ATopRight[0] && BCoordinatesArr[i][0] > ABottomLeft[0] && BCoordinatesArr[i][0] < ABottomRight[0] && BCoordinatesArr[i][1] > ATopLeft[1] && BCoordinatesArr[i][1] < ABottomLeft[1] && BCoordinatesArr[i][1] > ATopRight[1] && BCoordinatesArr[i][1] < ABottomRight[1]) {
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
      if (ACoordiantesArr[i][0] > BTopLeft[0] && ACoordiantesArr[i][0] < BTopRight[0] && ACoordiantesArr[i][0] > BBottomLeft[0] && ACoordiantesArr[i][0] < BBottomRight[0] && ACoordiantesArr[i][1] > BTopLeft[1] && ACoordiantesArr[i][1] < BBottomLeft[1] && ACoordiantesArr[i][1] > BTopRight[1] && ACoordiantesArr[i][1] < BBottomRight[1]) {
        overallResult = true;
        engulfedCheckCount++;
      }
    }

    if (engulfedCheckCount == 4) {
      engulfed = true;
    }

    if (BTopLeft[0] >= ATopLeft[0] && BTopRight[0] <= ATopRight[0] && BTopLeft[1] <= ATopLeft[1] && BBottomLeft[1] >= ABottomLeft[1] || BTopLeft[1] >= ATopLeft[1] && BBottomLeft[1] <= ABottomLeft[1] && BTopLeft[0] <= ATopLeft[0] && BTopRight[0] >= ATopRight[0]) {
      overallResult = true;
    }

    if (ATopLeft[0] >= BTopLeft[0] && ATopRight[0] <= BTopRight[0] && ATopLeft[1] <= BTopLeft[1] && ABottomLeft[1] >= BBottomLeft[1] || ATopLeft[1] >= BTopLeft[1] && ABottomLeft[1] <= BBottomLeft[1] && ATopLeft[0] <= BTopLeft[0] && ATopRight[0] >= BTopRight[0]) {
      overallResult = true;
    }

    if (BTopLeft[0] == ATopLeft[0] && BTopRight[0] == ATopRight[0] && (BTopLeft[1] >= ATopLeft[1] && BTopLeft[1] < ABottomLeft[1] || BBottomLeft[1] > ATopLeft[1] && BBottomLeft[1] <= ABottomLeft[1])) {
      overallResult = true;
    }

    if (ATopLeft[0] == BTopLeft[0] && ATopRight[0] == BTopRight[0] && (ATopLeft[1] >= BTopLeft[1] && ATopLeft[1] < BBottomLeft[1] || ABottomLeft[1] > BTopLeft[1] && ABottomLeft[1] <= BBottomLeft[1])) {
      overallResult = true;

      if (ATopLeft[1] > BTopLeft[1] && ABottomLeft[1] < BBottomLeft[1]) {
        engulfed = true;
      }
    }

    if (BTopLeft[1] == ATopLeft[1] && BBottomLeft[1] == ABottomLeft[1] && (BTopLeft[0] >= ATopLeft[0] && BTopLeft[0] < ATopRight[0] || BTopRight[0] > ATopLeft[0] && BTopRight[0] <= ATopRight[0])) {
      overallResult = true;
    }

    if (ATopLeft[1] == BTopLeft[1] && ABottomLeft[1] == BBottomLeft[1] && (ATopLeft[0] >= BTopLeft[0] && ATopLeft[0] < BTopRight[0] || ATopRight[0] > BTopLeft[0] && ATopRight[0] <= BTopRight[0])) {
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
        engulfed: engulfed
      };
    } else {
      return overallResult;
    }
  };

  LimberGridView.prototype.fitItemsIntoFreeSpaces = function (items, freeSpaces, doNotMergeItems) {
    var items = JSON.parse(JSON.stringify(items));
    var freeSpaces = JSON.parse(JSON.stringify(freeSpaces));
    var doNotMergeItems = JSON.parse(JSON.stringify(doNotMergeItems));
    Object(_libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["sortPlainsByArea"])(items);
    var repositionedItems = [];
    var match = this.findMatchingSpace(items, freeSpaces);

    while (match.matchingItemIndex != null && match.matchingFreeSpaceIndex != null) {
      var tempItem = JSON.parse(JSON.stringify(items[match.matchingItemIndex]));
      var repositionedItem = {
        x: freeSpaces[match.matchingFreeSpaceIndex].x + _libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["getMarginAtPoint"].call(this, freeSpaces[match.matchingFreeSpaceIndex].x),
        y: freeSpaces[match.matchingFreeSpaceIndex].y + _libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["getMarginAtPoint"].call(this, freeSpaces[match.matchingFreeSpaceIndex].y),
        width: tempItem.width,
        height: tempItem.height,
        index: tempItem.index
      };
      repositionedItems.push(repositionedItem);
      var occupiedSpace = {
        x: freeSpaces[match.matchingFreeSpaceIndex].x,
        y: freeSpaces[match.matchingFreeSpaceIndex].y,
        width: tempItem.width + _libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["getMarginAtPoint"].call(this, freeSpaces[match.matchingFreeSpaceIndex].x),
        height: tempItem.height + _libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["getMarginAtPoint"].call(this, freeSpaces[match.matchingFreeSpaceIndex].y),
        doNotMergeFlag: true
      };
      items.splice(match.matchingItemIndex, 1);
      var newFreeSpaces = [];
      var length_0 = freeSpaces.length;

      for (var i = 0; i < length_0; i++) {
        var planeDiff = this.subtractPlanes(freeSpaces[i], occupiedSpace);

        if (planeDiff != false) {
          newFreeSpaces = newFreeSpaces.concat(planeDiff);
        } else {
          newFreeSpaces.push(JSON.parse(JSON.stringify(freeSpaces[i])));
        }
      } // calculate new mergedFreeSpaces


      doNotMergeItems.push(occupiedSpace);
      var newMergedFreeSpaces = this.mergeFreeSpaces(newFreeSpaces, doNotMergeItems);
      freeSpaces = newMergedFreeSpaces;
      var match = this.findMatchingSpace(items, newMergedFreeSpaces);
    }

    return {
      repositionedItems: repositionedItems,
      freeSpaces: freeSpaces
    };
  };

  LimberGridView.prototype.findMatchingSpace = function (items, freeSpaces) {
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

        if (_libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["getMarginAtPoint"].call(this, freeSpaces[j].x) == this.MARGIN) {
          tempItem.width += this.MARGIN * 1;
        }

        if (_libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["getMarginAtPoint"].call(this, freeSpaces[j].y) == this.MARGIN) {
          tempItem.height += this.MARGIN * 1;
        }

        var freeSpaceWidth = freeSpaces[j].width;
        var freeSpaceHeight = freeSpaces[j].height;

        if (Object(_libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["arePlainsIdentical"])(tempItem, freeSpaces[j])) {
          matchingItemIndex = i;
          matchingFreeSpaceIndex = j;
          break;
        }

        if (Math.floor(freeSpaceWidth / tempItem.width) >= 1 && freeSpaceHeight >= tempItem.height) {
          possibilitiesWidth.push(j);
        }

        if (Math.floor(freeSpaceHeight / tempItem.height) >= 1 && freeSpaceWidth >= tempItem.width) {
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
        var flooredQuotient = Math.floor(freeSpaces[possibilitiesWidth[k]].width / tempItem.width);
        var quotient = freeSpaces[possibilitiesWidth[k]].width / tempItem.width;
        var diff = quotient - flooredQuotient;

        if (diff > greatestWidthDiff) {
          greatestWidthDiff = diff;
          greatestWidthDiffIndex = possibilitiesWidth[k];
        }

        if (freeSpaces[possibilitiesWidth[k]].y <= minYPossibilitiesWidth || minYPossibilitiesWidth == 0) {
          if (freeSpaces[possibilitiesWidth[k]].y == minYPossibilitiesWidth) {
            if (greatestWidthDiffIndex == null) {
              minYPossibilitiesWidth = freeSpaces[possibilitiesWidth[k]].y;
              minYPossibilitiesWidthIndex = possibilitiesWidth[k];
            } else {
              if (diff == greatestWidthDiff) {
                minYPossibilitiesWidth = freeSpaces[possibilitiesWidth[k]].y;
                minYPossibilitiesWidthIndex = possibilitiesWidth[k];
              }
            }
          } else {
            minYPossibilitiesWidth = freeSpaces[possibilitiesWidth[k]].y;
            minYPossibilitiesWidthIndex = possibilitiesWidth[k];
          }
        }
      }

      var length_1 = possibilitiesHeight.length;

      for (k = 0; k < length_1; k++) {
        var flooredQuotient = Math.floor(freeSpaces[possibilitiesHeight[k]].height / tempItem.height);
        var quotient = freeSpaces[possibilitiesHeight[k]].height / tempItem.height;
        var diff = quotient - flooredQuotient;

        if (diff > greatestHeightDiff) {
          greatestHeightDiff = diff;
          greatestHeightDiffIndex = possibilitiesHeight[k];
        }

        if (freeSpaces[possibilitiesHeight[k]].y <= minYPossibilitiesHeight || minYPossibilitiesHeight == 0) {
          if (freeSpaces[possibilitiesHeight[k]].y == minYPossibilitiesHeight) {
            if (greatestHeightDiffIndex == null) {
              minYPossibilitiesHeight = freeSpaces[possibilitiesHeight[k]].y;
              minYPossibilitiesHeightIndex = possibilitiesHeight[k];
            } else {
              if (diff == greatestHeightDiff) {
                minYPossibilitiesHeight = freeSpaces[possibilitiesHeight[k]].y;
                minYPossibilitiesHeightIndex = possibilitiesHeight[k];
              }
            }
          } else {
            minYPossibilitiesHeight = freeSpaces[possibilitiesHeight[k]].y;
            minYPossibilitiesHeightIndex = possibilitiesHeight[k];
          }
        }
      }

      if (minYPossibilitiesWidthIndex != null || minYPossibilitiesHeightIndex != null) {
        if (minYPossibilitiesWidth < minYPossibilitiesHeight) {
          matchingItemIndex = i;
          matchingFreeSpaceIndex = minYPossibilitiesWidthIndex;
          break;
        } else {
          matchingItemIndex = i;
          matchingFreeSpaceIndex = minYPossibilitiesHeightIndex;
          break;
        }
      } // Below if statement will never get executed, Sorry OCD


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
      matchingFreeSpaceIndex: matchingFreeSpaceIndex
    };
  };

  LimberGridView.prototype.fitRemainingItems = function (positionData, remainingItems, allAffectedItems, changedIndex, previousFitDetails) {
    if (remainingItems.length == 0) {
      return positionData;
    }

    var affectedItemsObject = [];
    var length_0 = allAffectedItems.affectedItems.length;

    for (var i = 0; i < length_0; i++) {
      affectedItemsObject.push(JSON.parse(JSON.stringify(positionData[allAffectedItems.affectedItems[i]])));
    }

    var affectedItemsObjectDepthDescOrder = Object(_libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["sortPlainsByDepth"])(affectedItemsObject);
    var greatestDepthAffectedItems = affectedItemsObjectDepthDescOrder[0].y + affectedItemsObjectDepthDescOrder[0].height;
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

      if (positionData[i].y < greatestDepthAffectedItems && (positionData[i].y + positionData[i].height <= greatestDepthAffectedItems || positionData[i].y + positionData[i].height > greatestDepthAffectedItems)) {
        if (positionData[i].y + positionData[i].height > greatestDepthAffectedItems) {
          if (recalculatedGreatestDepthAffectedItemsAndNonAffectedItemsCaseGreater < positionData[i].y + positionData[i].height || recalculatedGreatestDepthAffectedItemsAndNonAffectedItemsCaseGreater == null) {
            recalculatedGreatestDepthAffectedItemsAndNonAffectedItemsCaseGreater = positionData[i].y + positionData[i].height;
          }
        }

        if (positionData[i].y + positionData[i].height <= greatestDepthAffectedItems) {
          if (recalculatedGreatestDepthAffectedItemsAndNonAffectedItemsCaseLesser < positionData[i].y + positionData[i].height || recalculatedGreatestDepthAffectedItemsAndNonAffectedItemsCaseLesser == null) {
            recalculatedGreatestDepthAffectedItemsAndNonAffectedItemsCaseLesser = positionData[i].y + positionData[i].height;
          }
        }
      }
    }

    if (recalculatedGreatestDepthAffectedItemsAndNonAffectedItemsCaseGreater != null) {
      // fitRemainingItems Case I
      var greatestDepthOfAffectedArea = recalculatedGreatestDepthAffectedItemsAndNonAffectedItemsCaseGreater;
      var itemsToShiftData = this.getItemsFromPointDepth(greatestDepthOfAffectedArea, true, positionData);
      var itemsToShift = itemsToShiftData.itemsFromPointDepth;
      var initialFitData = this.fitRemainingItemsAboveDeepestLine(greatestDepthOfAffectedArea, positionData, remainingItems, previousFitDetails);
      positionData = initialFitData.positionData;
      remainingItems = initialFitData.remainingItems;
      var finalFitData = this.fitRemainingItemsBelowDeepestLine(greatestDepthOfAffectedArea, positionData, remainingItems, allAffectedItems);
      var finalPositionData = this.shitftItemsBelow(finalFitData.deepestY - greatestDepthOfAffectedArea + itemsToShiftData.shiftHeightToAdd, finalFitData.positionData, itemsToShift);
    } else if (recalculatedGreatestDepthAffectedItemsAndNonAffectedItemsCaseLesser != null) {
      // fitRemainingItems Case II
      var greatestDepthOfAffectedArea = recalculatedGreatestDepthAffectedItemsAndNonAffectedItemsCaseLesser;
      var itemsToShiftData = this.getItemsFromPointDepth(greatestDepthOfAffectedArea, false, positionData);
      var itemsToShift = itemsToShiftData.itemsFromPointDepth;
      var finalFitData = this.fitRemainingItemsBelowDeepestLine(greatestDepthOfAffectedArea, positionData, remainingItems, allAffectedItems);
      var finalPositionData = this.shitftItemsBelow(finalFitData.deepestY - greatestDepthOfAffectedArea, finalFitData.positionData, itemsToShift);
    }

    return finalPositionData;
  };

  LimberGridView.prototype.fitRemainingItemsAboveDeepestLine = function (deepPoint, positionData, remainingItems, previousFitDetails) {
    var linePlane = {
      x: 0,
      y: deepPoint,
      width: this.WIDTH,
      height: 1
    }; // find all the items above or on deepPoint

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

      if (positionData[i].y <= deepPoint && positionData[i].y + positionData[i].height <= deepPoint) {
        // && added recently due to a bug in algo
        var obj = JSON.parse(JSON.stringify(positionData[i]));
        obj.doNotMergeFlag = true;
        doNotMergeItems.push(obj);
      }
    }

    var remainingFreeSpaces = previousFitDetails.freeSpaces;
    remainingFreeSpaces.push(linePlane);
    var mergedFreeSpaces = this.mergeFreeSpaces(remainingFreeSpaces, doNotMergeItems);
    var length_0 = mergedFreeSpaces.length;

    for (var i = 0; i < length_0; i++) {
      if (mergedFreeSpaces[i].y + mergedFreeSpaces[i].height == deepPoint + 1) {
        mergedFreeSpaces[i].height -= 1;
      }
    }

    var remainingItemsObject = [];
    var length_0 = remainingItems.length;

    for (var i = 0; i < length_0; i++) {
      remainingItemsObject.push(JSON.parse(JSON.stringify(positionData[remainingItems[i]])));
      remainingItemsObject[i].index = remainingItems[i];
    }

    var fitDetails = this.fitItemsIntoFreeSpaces(remainingItemsObject, mergedFreeSpaces, doNotMergeItems);
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

    return {
      remainingItems: remainingItems,
      positionData: positionData
    };
  };

  LimberGridView.prototype.fitRemainingItemsBelowDeepestLine = function (startingY, positionData, remainingItems, allAffectedItems) {
    if (remainingItems.length == 0) {
      return {
        positionData: positionData,
        deepestY: startingY
      };
    }

    var remainingItemsBackup = JSON.parse(JSON.stringify(remainingItems));
    var remainingItemsObject = [];
    var length_0 = remainingItems.length;

    for (var i = 0; i < length_0; i++) {
      remainingItemsObject.push(JSON.parse(JSON.stringify(positionData[remainingItems[i]])));
      remainingItemsObject[i].index = remainingItems[i];
    }

    var remainingItemsObject = Object(_libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["sortPlainsByHeight"])(remainingItemsObject);
    var initializedPlane = {
      x: 0,
      y: startingY,
      width: this.WIDTH,
      height: remainingItemsObject[0].height + _libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["getMarginAtPoint"].call(this, startingY)
    };
    var remainingWidth = this.WIDTH;
    var deepestY = startingY;

    while (remainingItemsObject.length != 0) {
      if (remainingItemsObject.length > 0) {
        deepestY = startingY + remainingItemsObject[0].height + _libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["getMarginAtPoint"].call(this, startingY);
      }

      var freeSpacesInCurrentRow = [];
      var occupiedSpacesInCurrentRow = [];
      var fittedRemainingItems = {};
      var length_0 = remainingItemsObject.length;

      for (var i = 0; i < length_0; i++) {
        if (fittedRemainingItems.hasOwnProperty(i)) {
          continue;
        }

        if (remainingWidth >= remainingItemsObject[i].width + _libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["getMarginAtPoint"].call(this, this.WIDTH - remainingWidth)) {
          remainingItemsObject[i].x = this.WIDTH - remainingWidth + _libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["getMarginAtPoint"].call(this, this.WIDTH - remainingWidth);
          remainingItemsObject[i].y = startingY + _libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["getMarginAtPoint"].call(this, startingY);
          positionData[remainingItemsObject[i].index].x = this.WIDTH - remainingWidth + _libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["getMarginAtPoint"].call(this, this.WIDTH - remainingWidth);
          positionData[remainingItemsObject[i].index].y = startingY + _libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["getMarginAtPoint"].call(this, startingY);
          var occupiedSpace = {
            x: this.WIDTH - remainingWidth,
            y: startingY,
            width: remainingItemsObject[i].width + _libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["getMarginAtPoint"].call(this, this.WIDTH - remainingWidth),
            height: remainingItemsObject[i].height + _libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["getMarginAtPoint"].call(this, startingY),
            doNotMergeFlag: true
          };
          occupiedSpacesInCurrentRow.push(occupiedSpace);
          var freeSpace = {
            x: this.WIDTH - remainingWidth,
            y: startingY + _libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["getMarginAtPoint"].call(this, startingY) + remainingItemsObject[i].height,
            width: remainingItemsObject[i].width + _libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["getMarginAtPoint"].call(this, this.WIDTH - remainingWidth),
            height: initializedPlane.y + initializedPlane.height - (startingY + _libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["getMarginAtPoint"].call(this, startingY) + remainingItemsObject[i].height)
          };

          if (Object(_libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["isValidPlane"])(freeSpace)) {
            freeSpacesInCurrentRow.push(freeSpace);
          }

          fittedRemainingItems[i] = true;
          remainingWidth = remainingWidth - (remainingItemsObject[i].width + _libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["getMarginAtPoint"].call(this, this.WIDTH - remainingWidth));
        }
      }

      var temp = Object.keys(fittedRemainingItems);
      var length_0 = temp.length - 1;

      for (var i = length_0; i >= 0; i--) {
        remainingItemsObject.splice(temp[i], 1);
      }

      if (remainingWidth > 0) {
        var freeSpace = {
          x: this.WIDTH - remainingWidth,
          y: startingY,
          width: remainingWidth,
          height: initializedPlane.height
        };

        if (Object(_libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["isValidPlane"])(freeSpace)) {
          freeSpacesInCurrentRow.push(freeSpace);
        }
      }

      if (remainingItemsObject.length > 0) {
        var mergedFreeSpaces = this.mergeFreeSpaces(freeSpacesInCurrentRow, occupiedSpacesInCurrentRow);
        var fitDetails = this.fitItemsIntoFreeSpaces(remainingItemsObject, freeSpacesInCurrentRow, occupiedSpacesInCurrentRow);
        var fittedItems = fitDetails.repositionedItems;

        if (fittedItems.length > 0) {
          fittedRemainingItems = {};
          var length_0 = fittedItems.length;
          var length_1 = remainingItemsObject.length;

          for (var i = 0; i < length_0; i++) {
            for (var j = 0; j < length_1; j++) {
              if (fittedItems[i].index == remainingItemsObject[j].index) {
                fittedRemainingItems[j] = true;
                positionData[remainingItemsObject[j].index].x = fittedItems[i].x;
                positionData[remainingItemsObject[j].index].y = fittedItems[i].y;
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
          width: this.WIDTH,
          height: remainingItemsObject[0].height + _libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["getMarginAtPoint"].call(this, initializedPlane.y + initializedPlane.height)
        };
        var initializedPlane = nextInitializePlane;
        remainingWidth = this.WIDTH;
      }
    }

    return {
      positionData: positionData,
      deepestY: deepestY
    };
  };

  LimberGridView.prototype.getItemsFromPointDepth = function (startingY, includePlaneAboveAndBelowPointDepth = false, positionData) {
    var itemsFromPointDepth = {};
    var shiftHeightToAdd = 0;
    var length_0 = positionData.length;

    for (var i = 0; i < length_0; i++) {
      if (includePlaneAboveAndBelowPointDepth == true) {
        if (positionData[i].y < startingY && positionData[i].y + positionData[i].height > startingY) {
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
      shiftHeightToAdd: shiftHeightToAdd
    };
  };

  LimberGridView.prototype.shitftItemsBelow = function (shiftHeight, positionData, indicesToShift) {
    shiftHeight = shiftHeight + this.MARGIN;
    var length_0 = positionData.length;

    for (var i = 0; i < length_0; i++) {
      if (indicesToShift.hasOwnProperty(i)) {
        positionData[i].y += shiftHeight;
      }
    }

    return positionData;
  };

  LimberGridView.prototype.shiftItemsUp = function (y, shiftHeight) {
    var length_0 = this.positionData.length;

    for (var i = 0; i < length_0; i++) {
      if (this.positionData[i].y >= y) {
        this.positionData[i].y -= shiftHeight;
        this.$limberGridViewItems[i].style.transform = "translate(" + this.positionData[i].x + "px, " + this.positionData[i].y + "px)";
      }
    }
  };

  LimberGridView.prototype.mergePlains = function (A, B, planes = []) {
    var aLines = Object(_libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["getLines"])(A);
    var bLines = Object(_libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["getLines"])(B);
    var oppositeLines = {
      0: 2,
      1: 3,
      2: 0,
      3: 1
    };
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
      bLineId = oppositeLines[i]; // slope of line parallel to y axis and x axis is always 0;

      var m1 = 0;
      var m2 = 0; // m1 is slope of point p1 and p2

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

        if (alpha < 0 || alpha > 1) {} else if (alpha >= 0 && alpha <= 1) {
          intersectionPointsAtoB.push([x, y]);
          linePointsA.push(p3);
          distance = d;
          intersectionCount++;
        } else {
          console.warn("Should not hit this check algo");
        }
      } // m1 is slope of point p1 and p2


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

        if (alpha < 0 || alpha > 1) {} else if (alpha >= 0 && alpha <= 1) {
          intersectionPointsBtoA.push([x, y]);
          linePointsB.push(p3);
          distance = d;
          intersectionCount++;
        } else {
          console.warn("Should not hit this check algo");
        }
      }

      if (intersectionCount == 2 || intersectionCount == 3 || intersectionCount == 4) {
        if (intersectionCount == 2) {
          if (JSON.stringify(linePointsA) == JSON.stringify(intersectionPointsBtoA)) {
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
      var aOppLine = JSON.parse(JSON.stringify(aLines[oppositeLines[aLineId]]));
      var bOppLine = JSON.parse(JSON.stringify(bLines[oppositeLines[bLineId]]));
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
      var aOppLine = JSON.parse(JSON.stringify(aLines[oppositeLines[aLineId]]));
      var bOppLine = JSON.parse(JSON.stringify(bLines[oppositeLines[bLineId]]));
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

    if (distance > this.MARGIN) {
      var pointsToGetPlain = [];
      var plainToCheckIfFree = null;

      if (intersectionCount == 4) {
        pointsToGetPlain = linePointsA.concat(linePointsB);
        plainToCheckIfFree = Object(_libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["getPlainFrom4Points"])(pointsToGetPlain);
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

            if (duplicateCheck.hasOwnProperty(temp)) {} else {
              duplicateCheck[temp] = true;
              finalPointsToGetPlain.push(pointsToGetPlain[i]);
            }
          }

          plainToCheckIfFree = Object(_libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["getPlainFrom4Points"])(finalPointsToGetPlain);
        } else {
          plainToCheckIfFree = Object(_libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["getPlainFrom4Points"])(pointsToGetPlain);
        }
      }

      var plainToCheckIfFree_Lines = Object(_libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["getLines"])(plainToCheckIfFree);

      if (aLineId == 0 || aLineId == 2) {
        if (aLineId == 0) {
          var planeAOnTopOfB = false;
          var plainToCheckIfFree_DividerLine = JSON.parse(JSON.stringify(plainToCheckIfFree_Lines[2]));
        } else {
          var planeAOnTopOfB = true;
          var plainToCheckIfFree_DividerLine = JSON.parse(JSON.stringify(plainToCheckIfFree_Lines[0]));
        }
      } else {
        if (aLineId == 3) {
          var planeAOnLeftOfB = false;
          var plainToCheckIfFree_DividerLine = JSON.parse(JSON.stringify(plainToCheckIfFree_Lines[1]));
        } else {
          var planeAOnLeftOfB = true;
          var plainToCheckIfFree_DividerLine = JSON.parse(JSON.stringify(plainToCheckIfFree_Lines[3]));
        }
      }

      var freeDistance = -1;
      var indexOfIntersectingPlane = null;
      var length_0 = planes.length;

      for (var i = 0; i < length_0; i++) {
        if (this.isPlaneBInsidePlaneA_TouchingNotInside(plainToCheckIfFree, planes[i])) {
          if (planes[i].hasOwnProperty("doNotMergeFlag")) {
            freeDistance = -1;
            indexOfIntersectingPlane = -1;
            break;
          }

          var planeLine = Object(_libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["getLines"])(planes[i]);

          if (aLineId == 0 || aLineId == 2) {
            if (aLineId == 0) {
              var d = Math.abs(plainToCheckIfFree_DividerLine[0][1] - (planes[i].y + planes[i].height));
            } else {
              var d = Math.abs(plainToCheckIfFree_DividerLine[0][1] - planes[i].y);
            }
          } else {
            if (aLineId == 3) {
              var d = Math.abs(plainToCheckIfFree_DividerLine[0][0] - (planes[i].x + planes[i].width));
            } else {
              var d = Math.abs(plainToCheckIfFree_DividerLine[0][0] - planes[i].x);
            }
          }

          if (d < freeDistance || freeDistance < 0) {
            freeDistance = d;
            indexOfIntersectingPlane = i; // breaking here since the feature is not going to be implemented or needed
            // Only check is done, if some plane is inside the free space to be checked

            break; // breaking here since the feature is not going to be implemented or needed
            // Only check is done, if some plane is inside the free space to be checked END
          }
        }
      }

      if (indexOfIntersectingPlane != null) {
        if (freeDistance > this.MARGIN) {
          // making mergedPlane false since the feature is no longer implemented or needed
          var mergedPlane = false; // making mergedPlane false since the feature is no longer implemented or needed END
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
        var aOppLine = JSON.parse(JSON.stringify(aLines[oppositeLines[aLineId]]));
        var bOppLine = JSON.parse(JSON.stringify(bLines[oppositeLines[bLineId]]));
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
        var aOppLine = JSON.parse(JSON.stringify(aLines[oppositeLines[aLineId]]));
        var bOppLine = JSON.parse(JSON.stringify(bLines[oppositeLines[bLineId]]));
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
        var mergedPlane = Object(_libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["getPlainFrom4Points"])(pointsToGetMergedPlain);
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
            var temp = JSON.parse(JSON.stringify(pointsToGetMergedPlain[i]));

            if (duplicateCheck.hasOwnProperty(temp)) {} else {
              duplicateCheck[temp] = true;
              finalPointsToGetMergedPlain.push(pointsToGetMergedPlain[i]);
            }
          }

          var mergedPlane = Object(_libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["getPlainFrom4Points"])(finalPointsToGetMergedPlain);
        } else {
          var mergedPlane = Object(_libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["getPlainFrom4Points"])(pointsToGetMergedPlain);
        }
      }
    }

    if (mergedPlane != false) {
      if (Object(_libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["isValidPlane"])(mergedPlane)) {
        return mergedPlane;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  LimberGridView.prototype.subtractPlanes = function (A, B) {
    // A-B
    // result on "A" area
    var planes = [];
    var result = this.isPlaneBInsidePlaneA_TouchingIsInside(A, B, "all");

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
              height: B.y - A.y
            };

            if (Object(_libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["isValidPlane"])(plane)) {
              planes.push(plane);
            }

            if (A.y + A.height < B.y + B.height) {
              var plane = {
                x: A.x,
                y: B.y,
                width: B.x - A.x,
                height: A.y + A.height - B.y
              };

              if (Object(_libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["isValidPlane"])(plane)) {
                planes.push(plane);
              }
            } else if (A.y + A.height >= B.y + B.height) {
              var plane = {
                x: A.x,
                y: B.y,
                width: B.x - A.x,
                height: B.height
              };

              if (Object(_libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["isValidPlane"])(plane)) {
                planes.push(plane);
              }

              if (A.y + A.height > B.y + B.height) {
                var plane = {
                  x: A.x,
                  y: B.y + B.height,
                  width: A.width,
                  height: A.y + A.height - (B.y + B.height)
                };

                if (Object(_libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["isValidPlane"])(plane)) {
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
                height: A.height
              };

              if (Object(_libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["isValidPlane"])(plane)) {
                planes.push(plane);
              }
            } else {
              var plane = {
                x: A.x,
                y: A.y,
                width: B.x - A.x,
                height: B.y + B.height - A.y
              };

              if (Object(_libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["isValidPlane"])(plane)) {
                planes.push(plane);
              }
            }

            if (A.y + A.height > B.y + B.height) {
              var plane = {
                x: A.x,
                y: B.y + B.height,
                width: A.width,
                height: A.y + A.height - (B.y + B.height)
              };

              if (Object(_libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["isValidPlane"])(plane)) {
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
                height: A.y + A.height - B.y
              };

              if (Object(_libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["isValidPlane"])(plane)) {
                planes.push(plane);
              }
            } else {
              var plane = {
                x: B.x + B.width,
                y: B.y,
                width: A.x + A.width - (B.x + B.width),
                height: B.height
              };

              if (Object(_libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["isValidPlane"])(plane)) {
                planes.push(plane);
              }
            }
          } else {
            if (A.y + A.height < B.y + B.height) {
              var plane = {
                x: B.x + B.width,
                y: A.y,
                width: A.x + A.width - (B.x + B.width),
                height: A.height
              };

              if (Object(_libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["isValidPlane"])(plane)) {
                planes.push(plane);
              }
            } else {
              var plane = {
                x: B.x + B.width,
                y: A.y,
                width: A.x + A.width - (B.x + B.width),
                height: B.y + B.height - A.y
              };

              if (Object(_libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["isValidPlane"])(plane)) {
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
            height: B.y - A.y
          };

          if (Object(_libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["isValidPlane"])(plane)) {
            planes.push(plane);
          }

          if (A.y + A.height < B.y + B.height) {
            if (A.x + A.width <= B.x + B.width) {// plane inside of the other plane
            } else {
              var plane = {
                x: B.x + B.width,
                y: B.y,
                width: A.x + A.width - (B.x + B.width),
                height: A.y + A.height - B.y
              };

              if (Object(_libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["isValidPlane"])(plane)) {
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
                  height: A.y + A.height - (B.y + B.height)
                };

                if (Object(_libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["isValidPlane"])(plane)) {
                  planes.push(plane);
                }
              }
            } else {
              var plane = {
                x: B.x + B.width,
                y: B.y,
                width: A.x + A.width - (B.x + B.width),
                height: B.height
              };

              if (Object(_libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["isValidPlane"])(plane)) {
                planes.push(plane);
              }

              if (A.y + A.height > B.y + B.height) {
                var plane = {
                  x: A.x,
                  y: B.y + B.height,
                  width: A.width,
                  height: A.y + A.height - (B.y + B.height)
                };

                if (Object(_libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["isValidPlane"])(plane)) {
                  planes.push(plane);
                }
              }
            }
          }
        } else if (A.y >= B.y) {
          if (A.y + A.height < B.y + B.height) {
            if (A.x + A.width < B.x + B.width) {// plane inside of the other plane
            } else {
              var plane = {
                x: B.x + B.width,
                y: A.y,
                width: A.x + A.width - (B.x + B.width),
                height: A.height
              };

              if (Object(_libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["isValidPlane"])(plane)) {
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
                  height: A.y + A.height - (B.y + B.height)
                };

                if (Object(_libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["isValidPlane"])(plane)) {
                  planes.push(plane);
                }
              }
            } else {
              var plane = {
                x: B.x + B.width,
                y: A.y,
                width: A.x + A.width - (B.x + B.width),
                height: B.y + B.height - A.y
              };

              if (Object(_libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["isValidPlane"])(plane)) {
                planes.push(plane);
              }

              if (A.y + A.height > B.y + B.height) {
                var plane = {
                  x: A.x,
                  y: B.y + B.height,
                  width: A.width,
                  height: A.y + A.height - (B.y + B.height)
                };

                if (Object(_libs_utils_essentials__WEBPACK_IMPORTED_MODULE_5__["isValidPlane"])(plane)) {
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
  }; // ----------------------------------------------------------------------------------------- //
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
}();

/* harmony default export */ __webpack_exports__["default"] = (window.LimberGridView);

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/libs/eventHandlerLib/addItemAndCutSpace.js":
/*!********************************************************!*\
  !*** ./src/libs/eventHandlerLib/addItemAndCutSpace.js ***!
  \********************************************************/
/*! exports provided: onLimberGridMouseDown, onLimberGridTouchStart, onLimberGridMouseDownCheck, onLimberGridTouchStartCheck, onLimberGridMouseMove, onLimberGridTouchMove, onLimberGridMouseUp, onLimberGridTouchEnd, onLimberGridTouchCancel, onLimberGridTouchContextMenu, onLimberGridContextMenu, addItemAllowCheckTimeOut, addItemAllowCheck, cutSpaceAllowCheckTimeOut, cutSpaceAllowCheck, insertAddItemOnTouchHoldGuideStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLimberGridMouseDown", function() { return onLimberGridMouseDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLimberGridTouchStart", function() { return onLimberGridTouchStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLimberGridMouseDownCheck", function() { return onLimberGridMouseDownCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLimberGridTouchStartCheck", function() { return onLimberGridTouchStartCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLimberGridMouseMove", function() { return onLimberGridMouseMove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLimberGridTouchMove", function() { return onLimberGridTouchMove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLimberGridMouseUp", function() { return onLimberGridMouseUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLimberGridTouchEnd", function() { return onLimberGridTouchEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLimberGridTouchCancel", function() { return onLimberGridTouchCancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLimberGridTouchContextMenu", function() { return onLimberGridTouchContextMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLimberGridContextMenu", function() { return onLimberGridContextMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addItemAllowCheckTimeOut", function() { return addItemAllowCheckTimeOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addItemAllowCheck", function() { return addItemAllowCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cutSpaceAllowCheckTimeOut", function() { return cutSpaceAllowCheckTimeOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cutSpaceAllowCheck", function() { return cutSpaceAllowCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertAddItemOnTouchHoldGuideStyles", function() { return insertAddItemOnTouchHoldGuideStyles; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./src/libs/utils/utils.js");
/* harmony import */ var _utils_essentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/essentials */ "./src/libs/utils/essentials.js");


const onLimberGridMouseDown = function (event) {
  if (event.target.classList.contains("limberGridView")) {
    event.stopPropagation();
  } else {
    return;
  }

  if (event.which != 1) {
    return;
  }

  this.limberGridMouseDownCancel = false;
  this.limberGridMouseDownTimerComplete = false;
  clearTimeout(this.limberGridMouseDownCheckTimeOutVariable);
  this.limberGridMouseDownCheckTimeOutVariable = setTimeout(onLimberGridMouseDownCheck.bind(this, event, event.offsetX, event.offsetY), this.MOUSE_DOWN_TIME);
  this.$limberGridView[0].addEventListener("mousemove", this.onLimberGridMouseMoveBindedFunctionVariable);
  document.addEventListener("mouseup", this.onLimberGridMouseUpBindedFunctionVariable);
  document.addEventListener("contextmenu", this.onLimberGridContextMenuBindedFunctionVariable);
};
const onLimberGridTouchStart = function (event) {
  if (event.target.classList.contains("limberGridView")) {
    event.stopPropagation();
  } else {
    return;
  }

  this.limberGridTouchStartCancel = false;
  this.limberGridTouchStartTimerComplete = false;
  clearTimeout(this.limberGridTouchStartCheckTimeOutVariable);
  this.limberGridTouchStartCheckTimeOutVariable = setTimeout(onLimberGridTouchStartCheck.bind(this, event), this.TOUCH_HOLD_TIME);
  this.$limberGridView[0].addEventListener("touchmove", this.onLimberGridTouchMoveBindedFunctionVariable);
  document.addEventListener("touchend", this.onLimberGridTouchEndBindedFunctionVariable);
  document.addEventListener("touchcancel", this.onLimberGridTouchCancelBindedFunctionVariable);
  document.addEventListener("contextmenu", this.onLimberGridTouchContextMenuBindedFunctionVariable);
  this.unInitializeItemTouchEvents();
  event.stopPropagation();
};
const onLimberGridMouseDownCheck = function (event, offsetX, offsetY) {
  if (this.limberGridMouseDownCancel == false) {
    this.limberGridMouseDownTimerComplete = true;
    this.$body[0].classList.add("limberGridViewBodyTagStateElementDraggingOrResizing", "limberGridViewBodyTagStateElementAdding");
    var length_0 = this.$limberGridViewItems.length;

    for (var i = 0; i < length_0; i++) {
      this.$limberGridViewItems[i].classList.add("limberGridViewItemResizingState");
    }

    var length_0 = this.$limberGridViewGridPseudoItems.length;

    for (var i = 0; i < length_0; i++) {
      this.$limberGridViewGridPseudoItems[i].classList.add("limberGridViewGridPseudoItemResizingState");
    }

    var scrollTop = this.$limberGridView[0].scrollTop;
    var scrollLeft = this.$limberGridView[0].scrollLeft;
    var x = offsetX + scrollLeft - this.PADDING_LEFT;
    var y = offsetY + scrollTop - this.PADDING_TOP;
    this.userActionData = {
      type: "add",
      addPositionX: x,
      addPositionY: y
    };
    this.$limberGridViewAddItemGuide[0].style.height = 1 + "px";
    this.$limberGridViewAddItemGuide[0].style.width = 1 + "px";
    this.$limberGridViewAddItemGuide[0].style.transform = "translate(" + x + "px, " + y + "px)";

    if (this.ADD_OR_CUTSPACE_TOGGLE == "ADD") {
      this.$limberGridViewAddItemGuide[0].classList.add("limberGridViewAddItemGuideActive");
    } else if (this.ADD_OR_CUTSPACE_TOGGLE == "CUTSPACE") {
      this.$limberGridViewAddItemGuide[0].classList.add("limberGridViewAddItemGuideActive", "limberGridViewAddItemGuideCutMode");
    }

    this.$limberGridViewHeightAdjustGuide[0].style.height = 0 + "px";
    this.$limberGridViewHeightAdjustGuide[0].classList.add("limberGridViewHeightAdjustGuideActive");
  } else {// mouseDown cancel before TimerComplete
  }
};
const onLimberGridTouchStartCheck = function (event) {
  if (this.limberGridTouchStartCancel == false) {
    this.limberGridTouchStartTimerComplete = true;
    this.$body[0].classList.add("limberGridViewBodyTagStateElementDraggingOrResizing", "limberGridViewBodyTagStateElementAdding");
    var length_0 = this.$limberGridViewItems.length;

    for (var i = 0; i < length_0; i++) {
      this.$limberGridViewItems[i].classList.add("limberGridViewItemResizingState");
    }

    var length_0 = this.$limberGridViewGridPseudoItems.length;

    for (var i = 0; i < length_0; i++) {
      this.$limberGridViewGridPseudoItems[i].classList.add("limberGridViewGridPseudoItemResizingState");
    }

    var touchPositionOnLimberGrid = this.calculateTouchPosOnLimberGrid(event);
    var x = touchPositionOnLimberGrid.x;
    var y = touchPositionOnLimberGrid.y;
    this.userActionData = {
      type: "add",
      addPositionX: x,
      addPositionY: y
    };

    var removeAddItemOnTouchHoldGuideFunction = function () {
      this.$limberGridViewAddItemOnTouchHoldGuide[0].classList.remove("limberGridViewAddItemOnTouchHoldGuideActive");
    };

    setTimeout(removeAddItemOnTouchHoldGuideFunction.bind(this), 500);
    this.$limberGridViewAddItemGuide[0].style.height = 1 + "px";
    this.$limberGridViewAddItemGuide[0].style.width = 1 + "px";
    this.$limberGridViewAddItemGuide[0].style.transform = "translate(" + x + "px, " + y + "px)";

    if (this.ADD_OR_CUTSPACE_TOGGLE == "ADD") {
      this.$limberGridViewAddItemGuide[0].classList.add("limberGridViewAddItemGuideActive");
    } else if (this.ADD_OR_CUTSPACE_TOGGLE == "CUTSPACE") {
      this.$limberGridViewAddItemGuide[0].classList.add("limberGridViewAddItemGuideActive", "limberGridViewAddItemGuideCutMode");
    }

    this.$limberGridViewHeightAdjustGuide[0].style.height = 0 + "px";
    this.$limberGridViewHeightAdjustGuide[0].classList.add("limberGridViewHeightAdjustGuideActive");
    insertAddItemOnTouchHoldGuideStyles.call(this, x, y);
    this.$limberGridViewAddItemOnTouchHoldGuide[0].style.transform = "translate(" + x + "px, " + y + "px)";
    this.$limberGridViewAddItemOnTouchHoldGuide[0].classList.add("limberGridViewAddItemOnTouchHoldGuideActive");
    event.preventDefault();
  } else {// touchstart cancel before TimerComplete
  }
};
const onLimberGridMouseMove = function (event) {
  if (this.limberGridMouseDownTimerComplete == true) {
    if (this.$limberGridViewAddItemGuide[0].classList.contains("limberGridViewAddItemGuideAddAllow") || this.$limberGridViewAddItemGuide[0].classList.contains("limberGridViewAddItemGuideAddDisallow")) {
      this.$limberGridViewAddItemGuide[0].classList.remove("limberGridViewAddItemGuideAddAllow", "limberGridViewAddItemGuideAddDisallow");
    }

    var scrollTop = this.$limberGridView[0].scrollTop;
    var scrollLeft = this.$limberGridView[0].scrollLeft;
    var x = this.userActionData.addPositionX;
    var y = this.userActionData.addPositionY;
    var newWidth = event.offsetX - x + scrollLeft - this.PADDING_LEFT;
    var newHeight = event.offsetY - y + scrollTop - this.PADDING_TOP;
    this.userActionData.newWidth = newWidth;
    this.userActionData.newHeight = newHeight;
    var yMousePosition = event.offsetY + scrollTop;
    _utils_utils__WEBPACK_IMPORTED_MODULE_0__["adjustHeight"].call(this, yMousePosition);

    if (newWidth > 0 && newHeight > 0) {
      this.$limberGridViewAddItemGuide[0].style.width = newWidth + "px";
      this.$limberGridViewAddItemGuide[0].style.height = newHeight + "px";
    }

    if (this.ADD_OR_CUTSPACE_TOGGLE == "ADD") {
      clearTimeout(this.addItemAllowCheckTimeOutVariable);
      this.addItemAllowCheckTimeOutVariable = setTimeout(addItemAllowCheckTimeOut.bind(this, this.userActionData.addPositionX, this.userActionData.addPositionY, newWidth, newHeight), this.DEMO_WAIT_TIME);
    } else if (this.ADD_OR_CUTSPACE_TOGGLE == "CUTSPACE") {
      clearTimeout(this.cutSpaceAllowCheckTimeOutVariable);
      this.cutSpaceAllowCheckTimeOutVariable = setTimeout(cutSpaceAllowCheckTimeOut.bind(this, this.userActionData.addPositionX, this.userActionData.addPositionY, newWidth, newHeight), this.DEMO_WAIT_TIME);
    }
  } else {
    clearTimeout(this.limberGridMouseDownCheckTimeOutVariable);
    this.$limberGridView[0].removeEventListener("mousemove", this.onLimberGridMouseMoveBindedFunctionVariable);
    document.removeEventListener("mouseup", this.onLimberGridMouseUpBindedFunctionVariable);
    document.removeEventListener("contextmenu", this.onLimberGridContextMenuBindedFunctionVariable);
  }

  event.stopPropagation();
};
const onLimberGridTouchMove = function (event) {
  if (this.limberGridTouchStartTimerComplete == true) {
    console.log("limberGridTouchStartTimerComplete");

    if (this.$limberGridViewAddItemGuide[0].classList.contains("limberGridViewAddItemGuideAddAllow") || this.$limberGridViewAddItemGuide[0].classList.contains("limberGridViewAddItemGuideAddDisallow")) {
      this.$limberGridViewAddItemGuide[0].classList.remove("limberGridViewAddItemGuideAddAllow", "limberGridViewAddItemGuideAddDisallow");
    }

    var scrollTop = this.$limberGridView[0].scrollTop;
    var scrollLeft = this.$limberGridView[0].scrollLeft;
    var x = this.userActionData.addPositionX;
    var y = this.userActionData.addPositionY;
    var touchPositionOnLimberGrid = this.calculateTouchPosOnLimberGrid(event);

    if (touchPositionOnLimberGrid != false) {
      var newWidth = touchPositionOnLimberGrid.x - x;
      var newHeight = touchPositionOnLimberGrid.y - y;
      this.userActionData.newWidth = newWidth;
      this.userActionData.newHeight = newHeight;

      if (newWidth > 0 && newHeight > 0) {
        this.$limberGridViewAddItemGuide[0].style.width = newWidth + "px";
        this.$limberGridViewAddItemGuide[0].style.height = newHeight + "px";
      }
    }

    if (touchPositionOnLimberGrid != false) {
      var limberGridViewBoundingClientRect = this.$limberGridView[0].getBoundingClientRect();
      var limberGridViewWidthVisibleWidth = this.$limberGridView[0].offsetWidth - limberGridViewBoundingClientRect.left;
      var limberGridViewHeightVisibleHeight = this.$limberGridView[0].offsetHeight - limberGridViewBoundingClientRect.top;
      var limberGridViewOnVisibleAreaX = touchPositionOnLimberGrid.x + this.PADDING_LEFT - scrollLeft;
      var limberGridViewOnVisibleAreaY = touchPositionOnLimberGrid.y + this.PADDING_TOP - scrollTop;
      var yTouchPosition = touchPositionOnLimberGrid.y;
      _utils_utils__WEBPACK_IMPORTED_MODULE_0__["adjustHeight"].call(this, yTouchPosition);
      var programScrolled = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["adjustScroll"].call(this, limberGridViewOnVisibleAreaY, limberGridViewHeightVisibleHeight);
    }

    if (this.ADD_OR_CUTSPACE_TOGGLE == "ADD") {
      clearTimeout(this.addItemAllowCheckTimeOutVariable);

      if (programScrolled != true) {
        this.addItemAllowCheckTimeOutVariable = setTimeout(addItemAllowCheckTimeOut.bind(this, this.userActionData.addPositionX, this.userActionData.addPositionY, newWidth, newHeight), this.DEMO_WAIT_TIME);
      }
    } else if (this.ADD_OR_CUTSPACE_TOGGLE == "CUTSPACE") {
      clearTimeout(this.cutSpaceAllowCheckTimeOutVariable);

      if (programScrolled != true) {
        this.cutSpaceAllowCheckTimeOutVariable = setTimeout(cutSpaceAllowCheckTimeOut.bind(this, this.userActionData.addPositionX, this.userActionData.addPositionY, newWidth, newHeight), this.DEMO_WAIT_TIME);
      }
    }

    event.preventDefault();
  } else {
    clearTimeout(this.limberGridTouchStartCheckTimeOutVariable);
    this.$limberGridView[0].removeEventListener("touchmove", this.onLimberGridTouchMoveBindedFunctionVariable);
    document.removeEventListener("touchend", this.onLimberGridTouchEndBindedFunctionVariable);
    document.removeEventListener("touchcancel", this.onLimberGridTouchCancelBindedFunctionVariable);
    document.removeEventListener("contextmenu", this.onLimberGridTouchContextMenuBindedFunctionVariable);
    this.initializeItemTouchEvents();
  }

  event.stopPropagation();
};
const onLimberGridMouseUp = function (event) {
  clearTimeout(this.addItemAllowCheckTimeOutVariable);
  clearTimeout(this.limberGridMouseDownCheckTimeOutVariable);
  var itemAddedFlag = false;

  if (this.limberGridMouseDownTimerComplete == true) {
    if (this.ADD_OR_CUTSPACE_TOGGLE == "ADD") {
      if (addItemAllowCheck.call(this, this.userActionData.addPositionX, this.userActionData.addPositionY, this.userActionData.newWidth, this.userActionData.newHeight)) {
        var item = {
          x: this.userActionData.addPositionX,
          y: this.userActionData.addPositionY,
          width: this.userActionData.newWidth,
          height: this.userActionData.newHeight
        };
        var scrollTop = this.$limberGridView[0].scrollTop;
        var renderDetails = this.addItemsAtPositions([item], false, "addItemInteractive");
        itemAddedFlag = true;
        this.$limberGridView[0].scrollTop = scrollTop;
      }
    } else if (this.ADD_OR_CUTSPACE_TOGGLE == "CUTSPACE") {
      if (cutSpaceAllowCheck.call(this, this.userActionData.addPositionX, this.userActionData.addPositionY, this.userActionData.newWidth, this.userActionData.newHeight)) {
        this.shiftItemsUp(this.userActionData.addPositionY, this.userActionData.newHeight);
      }
    }
  } else {
    this.limberGridMouseDownCancel = true;
  }

  onLimberGridContextMenu.call(this);
  event.stopPropagation();

  if (this.callbacks.addCompleteCallback != undefined && this.callbacks.addCompleteCallback != null) {
    if (itemAddedFlag == true) {
      this.callbacks.addCompleteCallback(renderDetails.items, item.width, item.height, "addItemInteractive");
    }
  }
};
const onLimberGridTouchEnd = function (event) {
  clearTimeout(this.addItemAllowCheckTimeOutVariable);
  clearTimeout(this.limberGridTouchStartCheckTimeOutVariable);
  var itemAddedFlag = false;

  if (this.limberGridTouchStartTimerComplete == true) {
    if (this.ADD_OR_CUTSPACE_TOGGLE == "ADD") {
      if (addItemAllowCheck.call(this, this.userActionData.addPositionX, this.userActionData.addPositionY, this.userActionData.newWidth, this.userActionData.newHeight)) {
        var item = {
          x: this.userActionData.addPositionX,
          y: this.userActionData.addPositionY,
          width: this.userActionData.newWidth,
          height: this.userActionData.newHeight
        };
        var scrollTop = this.$limberGridView[0].scrollTop;
        var renderDetails = this.addItemsAtPositions([item], false, "addItemInteractive");
        itemAddedFlag = true;
        this.$limberGridView[0].scrollTop = scrollTop;
        this.limberGridTouchStartTimerComplete = false;
      }
    } else if (this.ADD_OR_CUTSPACE_TOGGLE == "CUTSPACE") {
      if (cutSpaceAllowCheck.call(this, this.userActionData.addPositionX, this.userActionData.addPositionY, this.userActionData.newWidth, this.userActionData.newHeight)) {
        this.shiftItemsUp(this.userActionData.addPositionY, this.userActionData.newHeight);
      }
    }
  } else {
    this.limberGridTouchStartCancel = true;
  }

  this.limberGridTouchStartTimerComplete = false;
  onLimberGridContextMenu.call(this);
  this.initializeItemTouchEvents();
  event.stopPropagation();

  if (this.callbacks.addCompleteCallback != undefined && this.callbacks.addCompleteCallback != null) {
    if (itemAddedFlag == true) {
      this.callbacks.addCompleteCallback(renderDetails.items, item.width, item.height, "addItemInteractive");
    }
  }
};
const onLimberGridTouchCancel = function (event) {
  clearTimeout(this.addItemAllowCheckTimeOutVariable);
  clearTimeout(this.limberGridTouchStartCheckTimeOutVariable);
  this.limberGridTouchStartCancel = false;
  this.limberGridTouchStartTimerComplete = false;
  onLimberGridContextMenu.call(this);
  this.initializeItemTouchEvents();
  event.stopPropagation();
};
const onLimberGridTouchContextMenu = function (event) {
  event.preventDefault();
};
const onLimberGridContextMenu = function (event) {
  if (event != undefined) {
    event.preventDefault();
    event.stopPropagation();
  }

  this.$limberGridViewAddItemGuide[0].classList.remove("limberGridViewAddItemGuideActive", "limberGridViewAddItemGuideCutMode", "limberGridViewAddItemGuideAddAllow", "limberGridViewAddItemGuideAddDisallow");
  this.$limberGridViewHeightAdjustGuide[0].classList.remove("limberGridViewHeightAdjustGuideActive");
  this.$limberGridViewHeightAdjustGuide[0].style.height = 0 + "px";
  this.$body[0].classList.remove("limberGridViewBodyTagStateElementDraggingOrResizing", "limberGridViewBodyTagStateElementAdding");
  var length_0 = this.$limberGridViewItems.length;

  for (var i = 0; i < length_0; i++) {
    this.$limberGridViewItems[i].classList.remove("limberGridViewItemResizingState");
  }

  var length_0 = this.$limberGridViewGridPseudoItems.length;

  for (var i = 0; i < length_0; i++) {
    this.$limberGridViewGridPseudoItems[i].classList.remove("limberGridViewGridPseudoItemResizingState");
  }

  this.$limberGridViewAddItemOnTouchHoldGuide[0].classList.remove("limberGridViewAddItemOnTouchHoldGuideActive");
  this.$limberGridView[0].removeEventListener("mousemove", this.onLimberGridMouseMoveBindedFunctionVariable);
  document.removeEventListener("mouseup", this.onLimberGridMouseUpBindedFunctionVariable);
  document.removeEventListener("contextmenu", this.onLimberGridContextMenuBindedFunctionVariable);
  this.$limberGridView[0].removeEventListener("touchmove", this.onLimberGridTouchMoveBindedFunctionVariable);
  document.removeEventListener("touchend", this.onLimberGridTouchEndBindedFunctionVariable);
  document.removeEventListener("touchcancel", this.onLimberGridTouchCancelBindedFunctionVariable);
  document.removeEventListener("contextmenu", this.onLimberGridTouchContextMenuBindedFunctionVariable);
};
const addItemAllowCheckTimeOut = function (x, y, width, height) {
  if (this.addItemAllowCheck.call(this, x, y, width, height) == false) {
    this.$limberGridViewAddItemGuide[0].classList.remove("limberGridViewAddItemGuideAddAllow");
    this.$limberGridViewAddItemGuide[0].classList.add("limberGridViewAddItemGuideAddDisallow");
  } else {
    this.$limberGridViewAddItemGuide[0].classList.remove("limberGridViewAddItemGuideAddDisallow");
    this.$limberGridViewAddItemGuide[0].classList.add("limberGridViewAddItemGuideAddAllow");
  }
};
const addItemAllowCheck = function (x, y, width, height) {
  var tempPlane = {
    x: x,
    y: y,
    width: width,
    height: height
  };

  if (x < 0 || y < 0) {
    return false;
  }

  if (typeof width != "number" || typeof height != "number") {
    return false;
  }

  if (x + width > this.WIDTH) {
    return false;
  }

  if (width < 50 || height < 50) {
    return false;
  }

  var length_0 = this.positionData.length;

  for (var i = 0; i < length_0; i++) {
    var iterItem = {
      x: this.positionData[i].x - _utils_essentials__WEBPACK_IMPORTED_MODULE_1__["getMarginAtPoint"].call(this, this.positionData[i].x),
      y: this.positionData[i].y - _utils_essentials__WEBPACK_IMPORTED_MODULE_1__["getMarginAtPoint"].call(this, this.positionData[i].y),
      width: this.positionData[i].width + _utils_essentials__WEBPACK_IMPORTED_MODULE_1__["getMarginAtPoint"].call(this, this.positionData[i].x) + this.MARGIN,
      height: this.positionData[i].height + _utils_essentials__WEBPACK_IMPORTED_MODULE_1__["getMarginAtPoint"].call(this, this.positionData[i].y) + this.MARGIN
    };
    var isInside = this.isPlaneBInsidePlaneA_TouchingIsInside(iterItem, tempPlane);

    if (isInside) {
      return false;
    }
  }

  return true;
};
const cutSpaceAllowCheckTimeOut = function (x, y, width, height) {
  if (cutSpaceAllowCheck.call(this, x, y, width, height) == false) {
    this.$limberGridViewAddItemGuide[0].classList.remove("limberGridViewAddItemGuideAddAllow");
    this.$limberGridViewAddItemGuide[0].classList.add("limberGridViewAddItemGuideAddDisallow");
  } else {
    this.$limberGridViewAddItemGuide[0].classList.remove("limberGridViewAddItemGuideAddDisallow");
    this.$limberGridViewAddItemGuide[0].classList.add("limberGridViewAddItemGuideAddAllow");
  }
};
const cutSpaceAllowCheck = function (x, y, width, height) {
  var tempPlane = {
    x: 0,
    y: y - this.MARGIN / 2,
    width: this.WIDTH,
    height: height + this.MARGIN / 2
  };

  if (typeof width != "number" || typeof height != "number") {
    return false;
  }

  var length_0 = this.positionData.length;

  for (var i = 0; i < length_0; i++) {
    var isInside = this.isPlaneBInsidePlaneA_TouchingIsInside(tempPlane, this.positionData[i]);

    if (isInside) {
      return false;
    }
  }

  return true;
};
const insertAddItemOnTouchHoldGuideStyles = function (x, y) {
  var ripple = [];
  ripple[0] = "@keyframes limberGridViewAddItemOnTouchHoldRipple {";
  ripple[1] = "0% {";
  ripple[2] = "transform: translate(" + (x - 5) + "px, " + (y - 5) + "px) scale(0, 0);";
  ripple[3] = "opacity: 1;";
  ripple[4] = "}";
  ripple[5] = "20% {";
  ripple[6] = "transform: translate(" + (x - 5) + "px, " + (y - 5) + "px) scale(25, 25);";
  ripple[7] = "opacity: 1;";
  ripple[8] = "}";
  ripple[9] = "100% {";
  ripple[10] = "transform: translate(" + (x - 5) + "px, " + (y - 5) + "px) scale(50, 50);";
  ripple[11] = "opacity: 0;";
  ripple[12] = "}";
  ripple[13] = "}";
  var rippleString = ripple.join("");
  this.$limberGridViewStyle[0].innerHTML = rippleString;
};

/***/ }),

/***/ "./src/libs/eventHandlerLib/itemInteraction.js":
/*!*****************************************************!*\
  !*** ./src/libs/eventHandlerLib/itemInteraction.js ***!
  \*****************************************************/
/*! exports provided: onItemMouseDown, onItemTouchStart, mouseDownCheck, tapHoldCheck, onMouseMove, onTouchMove, onMouseUp, onTouchEnd, onContextMenu, onItemTouchContextMenu, onTouchCancel, calculateMousePosOnLimberGrid, calculateTouchPosOnLimberGrid, calculateTouchPosOnLimberGridItem, checkNewMoveCoordinates, showMoveDemo, showResizeDemo, revertShowMoveOrResizeDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onItemMouseDown", function() { return onItemMouseDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onItemTouchStart", function() { return onItemTouchStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouseDownCheck", function() { return mouseDownCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tapHoldCheck", function() { return tapHoldCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onMouseMove", function() { return onMouseMove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onTouchMove", function() { return onTouchMove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onMouseUp", function() { return onMouseUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onTouchEnd", function() { return onTouchEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onContextMenu", function() { return onContextMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onItemTouchContextMenu", function() { return onItemTouchContextMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onTouchCancel", function() { return onTouchCancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateMousePosOnLimberGrid", function() { return calculateMousePosOnLimberGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateTouchPosOnLimberGrid", function() { return calculateTouchPosOnLimberGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateTouchPosOnLimberGridItem", function() { return calculateTouchPosOnLimberGridItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkNewMoveCoordinates", function() { return checkNewMoveCoordinates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showMoveDemo", function() { return showMoveDemo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showResizeDemo", function() { return showResizeDemo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "revertShowMoveOrResizeDemo", function() { return revertShowMoveOrResizeDemo; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./src/libs/utils/utils.js");
/* harmony import */ var _utils_essentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/essentials */ "./src/libs/utils/essentials.js");


const onItemMouseDown = function (event) {
  if (event.which != 1) {
    return;
  }

  if (event.target.classList.contains("limberGridViewItem")) {
    event.stopPropagation();
  } else {
    return;
  }

  var radius = Math.sqrt(Math.pow(0 - event.offsetX, 2) + Math.pow(0 - event.offsetY, 2));
  var resizeUIBox = {
    x: event.currentTarget.offsetWidth - this.RESIZE_SQUARE_GUIDE_LENGTH,
    y: event.currentTarget.offsetHeight - this.RESIZE_SQUARE_GUIDE_LENGTH,
    width: this.RESIZE_SQUARE_GUIDE_LENGTH + this.RESIZE_SQUARE_BORDER_GUIDE_WIDTH,
    height: this.RESIZE_SQUARE_GUIDE_LENGTH + this.RESIZE_SQUARE_BORDER_GUIDE_WIDTH
  };

  if (radius <= this.MOVE_GUIDE_RADIUS) {
    this.userActionData = {
      type: "move",
      itemIndex: event.currentTarget.attributes["data-index"].value
    };
    this.mouseDownCancel = false;
    this.mouseDownTimerComplete = false;
    document.addEventListener("mousemove", this.onMouseMoveBindedFunctionVariable);
    document.addEventListener("mouseup", this.onMouseUpBindedFunctionVariable);
    document.addEventListener("contextmenu", this.onContextMenuBindedFunctionVariable);
    clearTimeout(this.longPressCheck);
    this.longPressCheck = setTimeout(mouseDownCheck.bind(this, event), this.MOUSE_DOWN_TIME);
    event.preventDefault();
  } else if (event.offsetX >= resizeUIBox.x && event.offsetX <= resizeUIBox.x + resizeUIBox.width && event.offsetY >= resizeUIBox.y && event.offsetY <= resizeUIBox.y + resizeUIBox.height) {
    this.$limberGridViewHeightAdjustGuide[0].style.height = 0 + "px";
    this.$limberGridViewHeightAdjustGuide[0].classList.add("limberGridViewHeightAdjustGuideActive");
    this.userActionData = {
      type: "resize",
      itemIndex: event.currentTarget.attributes["data-index"].value
    };
    this.mouseDownCancel = false;
    this.mouseDownTimerComplete = true;
    this.$limberGridView[0].addEventListener("mousemove", this.onMouseMoveBindedFunctionVariable);
    document.addEventListener("mouseup", this.onMouseUpBindedFunctionVariable);
    document.addEventListener("contextmenu", this.onContextMenuBindedFunctionVariable);
    var transformStyle = this.$limberGridViewItems[this.userActionData.itemIndex].style.transform;
    var i1 = transformStyle.indexOf("px");
    var i2 = transformStyle.indexOf(",");
    var x = Number(transformStyle.substring(10, i1));
    var y = Number(transformStyle.substring(i2 + 2, transformStyle.length - 3));
    this.userActionData.itemPositionX = x;
    this.userActionData.itemPositionY = y;
    this.$limberGridViewGridPseudoItems[this.userActionData.itemIndex].style.width = this.positionData[this.userActionData.itemIndex].width + "px";
    this.$limberGridViewGridPseudoItems[this.userActionData.itemIndex].style.height = this.positionData[this.userActionData.itemIndex].height + "px";
    this.$limberGridViewGridPseudoItems[this.userActionData.itemIndex].style.transform = "translate(" + x + "px, " + y + "px)";
    this.$limberGridViewGridPseudoItems[this.userActionData.itemIndex].classList.add("limberGridViewGridPseudoItemActive");
    this.$body[0].classList.add("limberGridViewBodyTagStateElementDraggingOrResizing");
    var length_0 = this.$limberGridViewItems.length;

    for (var i = 0; i < length_0; i++) {
      this.$limberGridViewItems[i].classList.add("limberGridViewItemResizingState");
    }

    var length_0 = this.$limberGridViewGridPseudoItems.length;

    for (var i = 0; i < length_0; i++) {
      this.$limberGridViewGridPseudoItems[i].classList.add("limberGridViewGridPseudoItemResizingState");
    }

    this.$limberGridViewGridPseudoItems[this.userActionData.itemIndex].classList.remove("limberGridViewGridPseudoItemResizeAllow", "limberGridViewGridPseudoItemResizeDisallow");
    event.preventDefault();
  }
};
const onItemTouchStart = function (event) {
  if (event.which != 0) {
    return;
  }

  if (event.target.classList.contains("limberGridViewItem")) {
    event.stopPropagation();
  } else {
    return;
  }

  if (event.touches.length > 1) {
    return;
  }

  var touchPosOnLimberGridItem = calculateTouchPosOnLimberGridItem.call(this, event);

  if (touchPosOnLimberGridItem == false) {
    return;
  }

  var radius = Math.sqrt(Math.pow(0 - touchPosOnLimberGridItem.x, 2) + Math.pow(0 - touchPosOnLimberGridItem.y, 2));
  var resizeUIBox = {
    x: event.currentTarget.offsetWidth - this.RESIZE_SQUARE_GUIDE_LENGTH,
    y: event.currentTarget.offsetHeight - this.RESIZE_SQUARE_GUIDE_LENGTH,
    width: this.RESIZE_SQUARE_GUIDE_LENGTH + this.RESIZE_SQUARE_BORDER_GUIDE_WIDTH,
    height: this.RESIZE_SQUARE_GUIDE_LENGTH + this.RESIZE_SQUARE_BORDER_GUIDE_WIDTH
  };

  if (radius <= this.MOVE_GUIDE_RADIUS) {
    this.userActionData = {
      type: "move",
      itemIndex: event.currentTarget.attributes["data-index"].value
    };
    this.tapHoldCancel = false;
    this.tapHoldTimerComplete = false;
    document.addEventListener("touchmove", this.onTouchMoveBindedFunctionVariable);
    document.addEventListener("touchend", this.onTouchEndBindedFunctionVariable);
    this.$limberGridView[0].removeEventListener("touchstart", this.onLimberGridTouchStartFunctionVariable);
    document.addEventListener("contextmenu", this.onItemTouchContextMenuBindedFunctionVariable);
    document.addEventListener("touchcancel", this.onTouchCancelBindedFunctionVariable);
    this.longTouchCheck = setTimeout(tapHoldCheck.bind(this, event), this.TOUCH_HOLD_TIME);
    event.preventDefault();
  } else if (touchPosOnLimberGridItem.x >= resizeUIBox.x && touchPosOnLimberGridItem.x <= resizeUIBox.x + resizeUIBox.width && touchPosOnLimberGridItem.y >= resizeUIBox.y && touchPosOnLimberGridItem.y <= resizeUIBox.y + resizeUIBox.height) {
    this.$limberGridViewHeightAdjustGuide[0].style.height = 0 + "px";
    this.$limberGridViewHeightAdjustGuide[0].classList.add("limberGridViewHeightAdjustGuideActive");
    this.userActionData = {
      type: "resize",
      itemIndex: event.currentTarget.attributes["data-index"].value
    };
    this.tapHoldCancel = false;
    this.tapHoldTimerComplete = true;
    this.$limberGridView[0].addEventListener("touchmove", this.onTouchMoveBindedFunctionVariable);
    document.addEventListener("touchend", this.onTouchEndBindedFunctionVariable);
    this.$limberGridView[0].removeEventListener("touchstart", this.onLimberGridTouchStartFunctionVariable);
    document.addEventListener("touchcancel", this.onTouchCancelBindedFunctionVariable);
    var transformStyle = this.$limberGridViewItems[this.userActionData.itemIndex].style.transform;
    var i1 = transformStyle.indexOf("px");
    var i2 = transformStyle.indexOf(",");
    var x = Number(transformStyle.substring(10, i1));
    var y = Number(transformStyle.substring(i2 + 2, transformStyle.length - 3));
    this.userActionData.itemPositionX = x;
    this.userActionData.itemPositionY = y;
    this.$limberGridViewGridPseudoItems[this.userActionData.itemIndex].style.width = this.positionData[this.userActionData.itemIndex].width + "px";
    this.$limberGridViewGridPseudoItems[this.userActionData.itemIndex].style.height = this.positionData[this.userActionData.itemIndex].height + "px";
    this.$limberGridViewGridPseudoItems[this.userActionData.itemIndex].style.transform = "translate(" + x + "px, " + y + "px)";
    this.$limberGridViewGridPseudoItems[this.userActionData.itemIndex].classList.add("limberGridViewGridPseudoItemActive");
    this.$body[0].classList.add("limberGridViewBodyTagStateElementDraggingOrResizing");
    var length_0 = this.$limberGridViewItems.length;

    for (var i = 0; i < length_0; i++) {
      this.$limberGridViewItems[i].classList.add("limberGridViewItemResizingState");
    }

    var length_0 = this.$limberGridViewGridPseudoItems.length;

    for (var i = 0; i < length_0; i++) {
      this.$limberGridViewGridPseudoItems[i].classList.add("limberGridViewGridPseudoItemResizingState");
    }

    this.$limberGridViewGridPseudoItems[this.userActionData.itemIndex].classList.remove("limberGridViewGridPseudoItemResizeAllow", "limberGridViewGridPseudoItemResizeDisallow");
    event.preventDefault();
  }

  event.stopPropagation();
};
const mouseDownCheck = function (event) {
  if (this.mouseDownCancel == false) {
    this.mouseDownTimerComplete = true;
    console.log("mouseDownTimerComplete");
    this.$body[0].classList.add("limberGridViewBodyTagStateElementDraggingOrResizing");
    this.$limberGridViewItems[this.userActionData.itemIndex].classList.add("limberGridViewItemDemo");
    this.$limberGridViewBodyPseudoItems[this.userActionData.itemIndex].classList.add("limberGridViewBodyPseudoItemActive");
    this.$limberGridViewBodyPseudoItems[this.userActionData.itemIndex].style.transform = "translate(" + event.pageX
    /*+ 5*/
    + "px, " + event.pageY
    /*+ 5*/
    + "px)";
    this.$limberGridViewHeightAdjustGuide[0].style.height = 0 + "px";
    this.$limberGridViewHeightAdjustGuide[0].classList.add("limberGridViewHeightAdjustGuideActive");
  } else {
    console.log("mouseDown cancel before TimerComplete");
  }
};
const tapHoldCheck = function (event) {
  if (this.tapHoldCancel == false) {
    this.tapHoldTimerComplete = true;
    this.$body[0].classList.add("limberGridViewBodyTagStateElementDraggingOrResizing");
    this.$limberGridViewItems[this.userActionData.itemIndex].classList.add("limberGridViewItemDemo");
    this.$limberGridViewBodyPseudoItems[this.userActionData.itemIndex].classList.add("limberGridViewBodyPseudoItemActive");
    this.$limberGridViewBodyPseudoItems[this.userActionData.itemIndex].style.transform = "translate(" + event.touches[0].pageX
    /*+ 5*/
    + "px, " + event.touches[0].pageY
    /*+ 5*/
    + "px)";
    this.$limberGridViewHeightAdjustGuide[0].style.height = 0 + "px";
    this.$limberGridViewHeightAdjustGuide[0].classList.add("limberGridViewHeightAdjustGuideActive");
  } else {// tapHold cancel before TimerComplete
  }
};
const onMouseMove = function (event) {
  if (this.mouseDownTimerComplete == true) {
    if (this.userActionData.type == "move") {
      if (this.$limberGridViewMoveGuide[0].classList.contains("limberGridViewMoveGuideActive")) {
        this.$limberGridViewMoveGuide[0].classList.remove("limberGridViewMoveGuideActive");
      }

      if (this.$limberGridViewBodyPseudoItems[this.userActionData.itemIndex].classList.contains("limberGridViewBodyPseudoItemMoveAllow") || this.$limberGridViewBodyPseudoItems[this.userActionData.itemIndex].classList.contains("limberGridViewBodyPseudoItemMoveDisallow")) {
        this.$limberGridViewBodyPseudoItems[this.userActionData.itemIndex].classList.remove("limberGridViewBodyPseudoItemMoveAllow", "limberGridViewBodyPseudoItemMoveDisallow");
      }

      this.$limberGridViewBodyPseudoItems[this.userActionData.itemIndex].style.transform = "translate(" + event.pageX
      /*+ 5*/
      + "px, " + event.pageY
      /*+ 5*/
      + "px)";
      var mousePositionOnLimberGrid = calculateMousePosOnLimberGrid.call(this, event);

      if (mousePositionOnLimberGrid != false) {
        var scrollTop = this.$limberGridView[0].scrollTop;
        var scrollHeight = this.$limberGridView[0].scrollHeight;
        var yMousePosition = mousePositionOnLimberGrid.y;
        _utils_utils__WEBPACK_IMPORTED_MODULE_0__["adjustHeight"].call(this, yMousePosition);
      }

      clearTimeout(this.showMoveDemoTimeOutVariable);
      this.showMoveDemoTimeOutVariable = setTimeout(showMoveDemo.bind(this, this.userActionData.itemIndex, mousePositionOnLimberGrid), this.DEMO_WAIT_TIME);
    } else {
      var scrollTop = this.$limberGridView[0].scrollTop;
      var scrollLeft = this.$limberGridView[0].scrollLeft;
      var x = this.userActionData.itemPositionX;
      var y = this.userActionData.itemPositionY;
      var newWidth = event.offsetX - x + scrollLeft - this.PADDING_LEFT;
      var newHeight = event.offsetY - y + scrollTop - this.PADDING_TOP;
      this.userActionData.newWidth = newWidth;
      this.userActionData.newHeight = newHeight;
      var yMousePosition = event.offsetY + scrollTop;
      _utils_utils__WEBPACK_IMPORTED_MODULE_0__["adjustHeight"].call(this, yMousePosition);

      if (newWidth > 0 && newHeight > 0) {
        this.$limberGridViewGridPseudoItems[this.userActionData.itemIndex].style.width = newWidth + "px";
        this.$limberGridViewGridPseudoItems[this.userActionData.itemIndex].style.height = newHeight + "px";
      }

      if (this.$limberGridViewGridPseudoItems[this.userActionData.itemIndex].classList.contains("limberGridViewGridPseudoItemResizeAllow") || this.$limberGridViewGridPseudoItems[this.userActionData.itemIndex].classList.contains("limberGridViewGridPseudoItemResizeDisallow")) {
        this.$limberGridViewGridPseudoItems[this.userActionData.itemIndex].classList.remove("limberGridViewGridPseudoItemResizeAllow", "limberGridViewGridPseudoItemResizeDisallow");
      }

      clearTimeout(this.showResizeDemoTimeOutVariable);
      this.showResizeDemoTimeOutVariable = setTimeout(showResizeDemo.bind(this, this.userActionData.itemIndex, newWidth, newHeight), this.DEMO_WAIT_TIME);
    }
  } else {
    this.mouseDownCancel = true;
    clearTimeout(this.longPressCheck);
    document.removeEventListener("mousemove", this.onMouseMoveBindedFunctionVariable);
    this.$limberGridView[0].removeEventListener("mousemove", this.onMouseMoveBindedFunctionVariable);
    document.removeEventListener("mouseup", this.onMouseUpBindedFunctionVariable);
    document.removeEventListener("contextmenu", this.onContextMenuBindedFunctionVariable); // canceling mouseHold
  }

  event.preventDefault();
  event.stopPropagation();
};
const onTouchMove = function (event) {
  if (this.tapHoldTimerComplete == true) {
    if (this.userActionData.type == "move") {
      if (this.$limberGridViewMoveGuide[0].classList.contains("limberGridViewMoveGuideActive")) {
        this.$limberGridViewMoveGuide[0].classList.remove("limberGridViewMoveGuideActive");
      }

      if (this.$limberGridViewBodyPseudoItems[this.userActionData.itemIndex].classList.contains("limberGridViewBodyPseudoItemMoveAllow") || this.$limberGridViewBodyPseudoItems[this.userActionData.itemIndex].classList.contains("limberGridViewBodyPseudoItemMoveDisallow")) {
        this.$limberGridViewBodyPseudoItems[this.userActionData.itemIndex].classList.remove("limberGridViewBodyPseudoItemMoveAllow", "limberGridViewBodyPseudoItemMoveDisallow");
      }

      this.$limberGridViewBodyPseudoItems[this.userActionData.itemIndex].style.transform = "translate(" + event.touches[0].pageX
      /*+ 5*/
      + "px, " + event.touches[0].pageY
      /*+ 5*/
      + "px)";
      var touchPositionOnLimberGrid = calculateTouchPosOnLimberGrid.call(this, event);

      if (touchPositionOnLimberGrid != false) {
        var scrollTop = this.$limberGridView[0].scrollTop;
        var scrollLeft = this.$limberGridView[0].scrollLeft;
        var limberGridViewBoundingClientRect = this.$limberGridView[0].getBoundingClientRect();
        var limberGridViewWidthVisibleWidth = this.$limberGridView[0].offsetWidth - limberGridViewBoundingClientRect.left;
        var limberGridViewHeightVisibleHeight = this.$limberGridView[0].offsetHeight - limberGridViewBoundingClientRect.top;
        var limberGridViewOnVisibleAreaX = touchPositionOnLimberGrid.x + this.PADDING_LEFT - scrollLeft;
        var limberGridViewOnVisibleAreaY = touchPositionOnLimberGrid.y + this.PADDING_TOP - scrollTop;
        var yTouchPosition = touchPositionOnLimberGrid.y;
        _utils_utils__WEBPACK_IMPORTED_MODULE_0__["adjustHeight"].call(this, yTouchPosition);
        var programScrolled = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["adjustScroll"].call(this, limberGridViewOnVisibleAreaY, limberGridViewHeightVisibleHeight);
      }

      clearTimeout(this.showMoveDemoTimeOutVariable);

      if (programScrolled != true) {
        this.showMoveDemoTimeOutVariable = setTimeout(showMoveDemo.bind(this, this.userActionData.itemIndex, touchPositionOnLimberGrid), this.DEMO_WAIT_TIME);
      }
    } else {
      var scrollTop = this.$limberGridView[0].scrollTop;
      var scrollLeft = this.$limberGridView[0].scrollLeft;
      var x = this.userActionData.itemPositionX;
      var y = this.userActionData.itemPositionY;
      var touchPositionOnLimberGrid = calculateTouchPosOnLimberGrid.call(this, event);

      if (touchPositionOnLimberGrid != false) {
        var newWidth = touchPositionOnLimberGrid.x - x;
        var newHeight = touchPositionOnLimberGrid.y - y;
        this.userActionData.newWidth = newWidth;
        this.userActionData.newHeight = newHeight;

        if (newWidth > 0 && newHeight > 0) {
          this.$limberGridViewGridPseudoItems[this.userActionData.itemIndex].style.width = newWidth + "px";
          this.$limberGridViewGridPseudoItems[this.userActionData.itemIndex].style.height = newHeight + "px";
        }

        if (this.$limberGridViewGridPseudoItems[this.userActionData.itemIndex].classList.contains("limberGridViewGridPseudoItemResizeAllow") || this.$limberGridViewGridPseudoItems[this.userActionData.itemIndex].classList.contains("limberGridViewGridPseudoItemResizeDisallow")) {
          this.$limberGridViewGridPseudoItems[this.userActionData.itemIndex].classList.remove("limberGridViewGridPseudoItemResizeAllow", "limberGridViewGridPseudoItemResizeDisallow");
        }
      }

      if (touchPositionOnLimberGrid != false) {
        var limberGridViewBoundingClientRect = this.$limberGridView[0].getBoundingClientRect();
        var limberGridViewWidthVisibleWidth = this.$limberGridView[0].offsetWidth - limberGridViewBoundingClientRect.left;
        var limberGridViewHeightVisibleHeight = this.$limberGridView[0].offsetHeight - limberGridViewBoundingClientRect.top;
        var limberGridViewOnVisibleAreaX = touchPositionOnLimberGrid.x + this.PADDING_LEFT - scrollLeft;
        var limberGridViewOnVisibleAreaY = touchPositionOnLimberGrid.y + this.PADDING_TOP - scrollTop;
        var yTouchPosition = touchPositionOnLimberGrid.y;
        _utils_utils__WEBPACK_IMPORTED_MODULE_0__["adjustHeight"].call(this, yTouchPosition);
        var programScrolled = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["adjustScroll"].call(this, limberGridViewOnVisibleAreaY, limberGridViewHeightVisibleHeight);
      }

      clearTimeout(this.showResizeDemoTimeOutVariable);

      if (programScrolled != true) {
        this.showResizeDemoTimeOutVariable = setTimeout(showResizeDemo.bind(this, this.userActionData.itemIndex, newWidth, newHeight), this.DEMO_WAIT_TIME);
      }
    }
  } else {
    this.tapHoldCancel = true;
    clearTimeout(this.longTouchCheck);
    document.removeEventListener("touchmove", this.onTouchMoveBindedFunctionVariable);
    this.$limberGridView[0].removeEventListener("touchmove", this.onTouchMoveBindedFunctionVariable);
    document.removeEventListener("touchend", this.onTouchEndBindedFunctionVariable);
    document.removeEventListener("contextmenu", this.onContextMenuBindedFunctionVariable);
    document.removeEventListener("contextmenu", this.onItemTouchContextMenuBindedFunctionVariable);
    document.removeEventListener("touchcancel", this.onTouchCancelBindedFunctionVariable);
    this.$limberGridView[0].addEventListener("touchstart", this.onLimberGridTouchStartFunctionVariable); // canceling taphold
  }

  event.stopPropagation();
};
const onMouseUp = function (event) {
  clearTimeout(this.showMoveDemoTimeOutVariable);
  clearTimeout(this.showResizeDemoTimeOutVariable);
  var itemResizeFlag = false;
  var itemMoveFlag = false;

  if (this.mouseDownTimerComplete == true) {
    if (this.userActionData.type == "move") {
      this.$limberGridViewBodyPseudoItems[this.userActionData.itemIndex].classList.remove("limberGridViewBodyPseudoItemActive");
      this.$limberGridViewBodyPseudoItems[this.userActionData.itemIndex].style.transform = "translate(" + 0 + "px, " + 0 + "px)";
      var mousePositionOnLimberGrid = calculateMousePosOnLimberGrid.call(this, event);

      if (mousePositionOnLimberGrid != false) {
        var newMoveCoordinates = checkNewMoveCoordinates.call(this, this.userActionData.itemIndex, mousePositionOnLimberGrid);

        if (newMoveCoordinates != false) {
          var updatedCoordinates = {};

          if (newMoveCoordinates.hasOwnProperty("revisedCoordinates")) {
            this.movePlane(this.userActionData.itemIndex, newMoveCoordinates.revisedCoordinates.x, newMoveCoordinates.revisedCoordinates.y);
            updatedCoordinates.x = newMoveCoordinates.revisedCoordinates.x;
            updatedCoordinates.y = newMoveCoordinates.revisedCoordinates.y;
            itemMoveFlag = true;
          } else {
            this.movePlane(this.userActionData.itemIndex, newMoveCoordinates.x, newMoveCoordinates.y);
            updatedCoordinates.x = newMoveCoordinates.x;
            updatedCoordinates.y = newMoveCoordinates.y;
            itemMoveFlag = true;
          }
        } else {
          revertShowMoveOrResizeDemo.call(this);
        }
      } else {
        revertShowMoveOrResizeDemo.call(this);
      }
    } else {
      var scrollTop = this.$limberGridView[0].scrollTop;
      var scrollLeft = this.$limberGridView[0].scrollLeft;
      var x = this.userActionData.itemPositionX;
      var y = this.userActionData.itemPositionY;
      var newWidth = this.userActionData.newWidth;
      var newHeight = this.userActionData.newHeight;

      if (newWidth > 0 && newHeight > 0) {
        this.$limberGridViewGridPseudoItems[this.userActionData.itemIndex].style.width = newWidth + "px";
        this.$limberGridViewGridPseudoItems[this.userActionData.itemIndex].style.height = newHeight + "px";
      }

      if (this.resizePlane(this.userActionData.itemIndex, newWidth, newHeight) == false) {
        revertShowMoveOrResizeDemo.call(this);
        itemResizeFlag = true;
      }

      this.$limberGridViewGridPseudoItems[this.userActionData.itemIndex].style.transform = "translate(" + 0 + "px, " + 0 + "px)";
      this.$limberGridViewGridPseudoItems[this.userActionData.itemIndex].classList.remove("limberGridViewGridPseudoItemActive");
    }
  } else {
    this.mouseDownCancel = true;
    clearTimeout(this.longPressCheck); // canceling mouseHold
  }

  document.removeEventListener("mousemove", this.onMouseMoveBindedFunctionVariable);
  this.$limberGridView[0].removeEventListener("mousemove", this.onMouseMoveBindedFunctionVariable);
  document.removeEventListener("mouseup", this.onMouseUpBindedFunctionVariable);
  document.removeEventListener("contextmenu", this.onContextMenuBindedFunctionVariable);
  this.$body[0].classList.remove("limberGridViewBodyTagStateElementDraggingOrResizing");
  this.$limberGridViewMoveGuide[0].classList.remove("limberGridViewMoveGuideActive");
  this.$limberGridViewHeightAdjustGuide[0].classList.remove("limberGridViewHeightAdjustGuideActive");
  event.preventDefault();
  event.stopPropagation(); //

  if (this.callbacks.moveCompleteCallback != undefined && this.callbacks.moveCompleteCallback != null) {
    if (itemMoveFlag == true) {
      updatedCoordinates.width = this.positionData[this.userActionData.itemIndex].width;
      updatedCoordinates.height = this.positionData[this.userActionData.itemIndex].height;
      this.callbacks.moveCompleteCallback(true, this.userActionData.itemIndex, updatedCoordinates);
    } else if (this.userActionData.type == "move") {
      this.callbacks.moveCompleteCallback(false, this.userActionData.itemIndex, event);
    }
  }

  if (this.callbacks.resizeCompleteCallback != undefined && this.callbacks.resizeCompleteCallback != null) {
    if (itemResizeFlag == true) {
      this.callbacks.resizeCompleteCallback(this.userActionData.itemIndex, {
        x: this.positionData[this.userActionData.itemIndex].x,
        y: this.positionData[this.userActionData.itemIndex].y,
        height: newHeight,
        width: newWidth
      });
    }
  } //


  this.userActionData = null;
};
const onTouchEnd = function (event) {
  clearTimeout(this.showMoveDemoTimeOutVariable);
  clearTimeout(this.showResizeDemoTimeOutVariable);
  var itemResizeFlag = false;
  var itemMoveFlag = false;

  if (this.tapHoldTimerComplete == true) {
    if (this.userActionData.type == "move") {
      this.$limberGridViewBodyPseudoItems[this.userActionData.itemIndex].classList.remove("limberGridViewBodyPseudoItemActive");
      this.$limberGridViewBodyPseudoItems[this.userActionData.itemIndex].style.transform = "translate(" + 0 + "px, " + 0 + "px)";
      var touchPositionOnLimberGrid = calculateTouchPosOnLimberGrid.call(this, event);

      if (touchPositionOnLimberGrid != false) {
        var newMoveCoordinates = checkNewMoveCoordinates.call(this, this.userActionData.itemIndex, touchPositionOnLimberGrid);

        if (newMoveCoordinates != false) {
          var updatedCoordinates = {};

          if (newMoveCoordinates.hasOwnProperty("revisedCoordinates")) {
            this.movePlane(this.userActionData.itemIndex, newMoveCoordinates.revisedCoordinates.x, newMoveCoordinates.revisedCoordinates.y);
            updatedCoordinates.x = newMoveCoordinates.revisedCoordinates.x;
            updatedCoordinates.y = newMoveCoordinates.revisedCoordinates.y;
            itemMoveFlag = true;
          } else {
            this.movePlane(this.userActionData.itemIndex, newMoveCoordinates.x, newMoveCoordinates.y);
            updatedCoordinates.x = newMoveCoordinates.x;
            updatedCoordinates.y = newMoveCoordinates.y;
            itemMoveFlag = true;
          }
        } else {
          revertShowMoveOrResizeDemo.call(this);
        }
      } else {
        revertShowMoveOrResizeDemo.call(this);
      }
    } else {
      var scrollTop = this.$limberGridView[0].scrollTop;
      var scrollLeft = this.$limberGridView[0].scrollLeft;
      var x = this.userActionData.itemPositionX;
      var y = this.userActionData.itemPositionY;
      var newWidth = this.userActionData.newWidth;
      var newHeight = this.userActionData.newHeight;

      if (newWidth > 0 && newHeight > 0) {
        this.$limberGridViewGridPseudoItems[this.userActionData.itemIndex].style.width = newWidth + "px";
        this.$limberGridViewGridPseudoItems[this.userActionData.itemIndex].style.height = newHeight + "px";
      }

      if (this.resizePlane(this.userActionData.itemIndex, newWidth, newHeight) == false) {
        revertShowMoveOrResizeDemo.call(this);
        itemResizeFlag = true;
      }

      this.$limberGridViewGridPseudoItems[this.userActionData.itemIndex].style.transform = "translate(" + 0 + "px, " + 0 + "px)";
      this.$limberGridViewGridPseudoItems[this.userActionData.itemIndex].classList.remove("limberGridViewGridPseudoItemActive");
    }
  } else {
    this.tapHoldCancel = true;
    clearTimeout(this.longTouchCheck); // canceling taphold
  }

  document.removeEventListener("touchmove", this.onTouchMoveBindedFunctionVariable);
  this.$limberGridView[0].removeEventListener("touchmove", this.onTouchMoveBindedFunctionVariable);
  document.removeEventListener("touchend", this.onTouchEndBindedFunctionVariable);
  document.removeEventListener("contextmenu", this.onContextMenuBindedFunctionVariable);
  document.removeEventListener("contextmenu", this.onItemTouchContextMenuBindedFunctionVariable);
  document.removeEventListener("touchcancel", this.onTouchCancelBindedFunctionVariable);
  this.$limberGridView[0].addEventListener("touchstart", this.onLimberGridTouchStartFunctionVariable);
  this.$body[0].classList.remove("limberGridViewBodyTagStateElementDraggingOrResizing");
  this.$limberGridViewMoveGuide[0].classList.remove("limberGridViewMoveGuideActive");
  this.$limberGridViewHeightAdjustGuide[0].classList.remove("limberGridViewHeightAdjustGuideActive");
  event.stopPropagation(); //

  if (this.callbacks.moveCompleteCallback != undefined && this.callbacks.moveCompleteCallback != null) {
    if (itemMoveFlag == true) {
      updatedCoordinates.width = this.positionData[this.userActionData.itemIndex].width;
      updatedCoordinates.height = this.positionData[this.userActionData.itemIndex].height;
      this.callbacks.moveCompleteCallback(true, this.userActionData.itemIndex, updatedCoordinates);
    } else if (this.userActionData.type == "move") {
      this.callbacks.moveCompleteCallback(false, this.userActionData.itemIndex, event);
    }
  }

  if (this.callbacks.resizeCompleteCallback != undefined && this.callbacks.resizeCompleteCallback != null) {
    if (itemResizeFlag == true) {
      this.callbacks.resizeCompleteCallback(this.userActionData.itemIndex, {
        x: this.positionData[this.userActionData.itemIndex].x,
        y: this.positionData[this.userActionData.itemIndex].y,
        height: newHeight,
        width: newWidth
      });
    }
  } //


  this.userActionData = null;
};
const onContextMenu = function (event) {
  clearTimeout(this.showMoveDemoTimeOutVariable);
  clearTimeout(this.showResizeDemoTimeOutVariable);
  revertShowMoveOrResizeDemo.call(this);
  this.$limberGridViewGridPseudoItems[this.userActionData.itemIndex].classList.remove("limberGridViewGridPseudoItemActive");
  this.$limberGridViewBodyPseudoItems[this.userActionData.itemIndex].classList.remove("limberGridViewBodyPseudoItemActive");
  this.$limberGridViewBodyPseudoItems[this.userActionData.itemIndex].style.transform = "translate(" + 0 + "px, " + 0 + "px)";
  document.removeEventListener("mousemove", this.onMouseMoveBindedFunctionVariable);
  this.$limberGridView[0].removeEventListener("mousemove", this.onMouseMoveBindedFunctionVariable);
  document.removeEventListener("mouseup", this.onMouseUpBindedFunctionVariable);
  document.removeEventListener("touchmove", this.onTouchMoveBindedFunctionVariable);
  this.$limberGridView[0].removeEventListener("touchmove", this.onTouchMoveBindedFunctionVariable);
  document.removeEventListener("touchend", this.onTouchEndBindedFunctionVariable);
  document.removeEventListener("contextmenu", this.onItemTouchContextMenuBindedFunctionVariable);
  document.removeEventListener("touchcancel", this.onTouchCancelBindedFunctionVariable);
  document.removeEventListener("contextmenu", this.onContextMenuBindedFunctionVariable);
  this.$body[0].classList.remove("limberGridViewBodyTagStateElementDraggingOrResizing");
  this.$limberGridViewMoveGuide[0].classList.remove("limberGridViewMoveGuideActive");
  this.$limberGridViewHeightAdjustGuide[0].classList.remove("limberGridViewHeightAdjustGuideActive");
  this.userActionData = null;
  event.preventDefault();
  event.stopPropagation();
};
const onItemTouchContextMenu = function (event) {
  event.preventDefault();
};
const onTouchCancel = function (event) {
  onContextMenu.call(this);
  this.tapHoldTimerComplete = false;
  this.$limberGridView[0].addEventListener("touchstart", this.onLimberGridTouchStartFunctionVariable);
};
const calculateMousePosOnLimberGrid = function (event) {
  var limberGridViewPosition = this.$limberGridView[0].getBoundingClientRect();

  if (event.clientX >= limberGridViewPosition.left && event.clientX <= limberGridViewPosition.left + limberGridViewPosition.width && event.clientY >= limberGridViewPosition.top && event.clientY <= limberGridViewPosition.top + limberGridViewPosition.height) {
    var scrollTop = this.$limberGridView[0].scrollTop;
    var scrollLeft = this.$limberGridView[0].scrollLeft;
    var mouseXOnLimberGridView = event.clientX - limberGridViewPosition.left - this.PADDING_LEFT + scrollLeft;
    var mouseYOnLimberGridView = event.clientY - limberGridViewPosition.top - this.PADDING_TOP + scrollTop;

    if (mouseXOnLimberGridView < 0 || mouseYOnLimberGridView < 0) {
      return false;
    }

    return {
      x: mouseXOnLimberGridView,
      y: mouseYOnLimberGridView
    };
  } else {
    // mouse pointer NOT inside limberGridView
    return false;
  }
};
const calculateTouchPosOnLimberGrid = function (event) {
  var limberGridViewPosition = this.$limberGridView[0].getBoundingClientRect();

  if (event.type == "touchend") {
    var touch = {
      clientX: event.changedTouches[0].clientX,
      clientY: event.changedTouches[0].clientY
    };
  } else {
    var touch = {
      clientX: event.touches[0].clientX,
      clientY: event.touches[0].clientY
    };
  }

  if (touch.clientX >= limberGridViewPosition.left && touch.clientX <= limberGridViewPosition.left + limberGridViewPosition.width && touch.clientY >= limberGridViewPosition.top && touch.clientY <= limberGridViewPosition.top + limberGridViewPosition.height) {
    var scrollTop = this.$limberGridView[0].scrollTop;
    var scrollLeft = this.$limberGridView[0].scrollLeft;
    var touchXOnLimberGridView = touch.clientX - limberGridViewPosition.left - this.PADDING_LEFT + scrollLeft;
    var touchYOnLimberGridView = touch.clientY - limberGridViewPosition.top - this.PADDING_TOP + scrollTop;

    if (touchXOnLimberGridView < 0 || touchYOnLimberGridView < 0) {
      return false;
    }

    return {
      x: touchXOnLimberGridView,
      y: touchYOnLimberGridView
    };
  } else {
    // touch NOT inside limberGridView
    return false;
  }
};
const calculateTouchPosOnLimberGridItem = function (event) {
  var limberGridViewItemPosition = this.$limberGridViewItems[event.currentTarget.attributes["data-index"].value].getBoundingClientRect();

  if (event.touches[0].clientX >= limberGridViewItemPosition.left && event.touches[0].clientX <= limberGridViewItemPosition.left + limberGridViewItemPosition.width && event.touches[0].clientY >= limberGridViewItemPosition.top && event.touches[0].clientY <= limberGridViewItemPosition.top + limberGridViewItemPosition.height) {
    var touchXOnLimberGridView = event.touches[0].clientX - limberGridViewItemPosition.left;
    var touchYOnLimberGridView = event.touches[0].clientY - limberGridViewItemPosition.top;
    return {
      x: touchXOnLimberGridView,
      y: touchYOnLimberGridView
    };
  } else {
    // touch NOT inside limberGridViewItem
    return false;
  }
};
const checkNewMoveCoordinates = function (indexOfMovedItem, mousePositions) {
  if (mousePositions == false) {
    return false;
  }

  var x = mousePositions.x;
  var y = mousePositions.y;
  var widthOfMovedItem = this.positionData[indexOfMovedItem].width;
  var heightOfMovedItem = this.positionData[indexOfMovedItem].height;
  var isInside = false;
  var indexOfOverlappingItem = null;
  var length_0 = this.positionData.length;

  for (var i = 0; i < length_0; i++) {
    var itemTopLeft = [this.positionData[i].x, this.positionData[i].y];
    var itemTopRight = [this.positionData[i].x + this.positionData[i].width, this.positionData[i].y];
    var itemBottomLeft = [this.positionData[i].x, this.positionData[i].y + this.positionData[i].height];
    var itemBottomRight = [this.positionData[i].x + this.positionData[i].width, this.positionData[i].y + this.positionData[i].height];

    if (x >= itemTopLeft[0] && x <= itemTopRight[0] && x >= itemBottomLeft[0] && x <= itemBottomRight[0] && y >= itemTopLeft[1] && y <= itemBottomLeft[1] && y >= itemTopRight[1] && y <= itemBottomRight[1]) {
      isInside = true;
      indexOfOverlappingItem = i;
      break;
    }

    var lines = Object(_utils_essentials__WEBPACK_IMPORTED_MODULE_1__["getLines"])(this.positionData[i]);
    var topLine = lines[0];
    var rightLine = lines[1];
    var bottomLine = lines[2];
    var leftLine = lines[3]; // for TOP LEFT Corner

    if (y < topLine[0][1] && x >= topLine[0][0] - this.MARGIN && x <= topLine[1][0] + this.MARGIN) {
      var diff = topLine[0][1] - y;

      if (diff <= this.MARGIN) {
        return false;
      }
    }

    if (y > bottomLine[0][1] && x >= bottomLine[0][0] - this.MARGIN && x <= bottomLine[1][0] + this.MARGIN) {
      var diff = y - bottomLine[0][1];

      if (diff <= this.MARGIN) {
        return false;
      }
    }

    if (x > rightLine[0][0] && y >= rightLine[0][1] - this.MARGIN && y <= rightLine[1][1] + this.MARGIN) {
      var diff = x - rightLine[0][0];

      if (diff <= this.MARGIN) {
        return false;
      }
    }

    if (x < leftLine[0][0] && y >= leftLine[0][1] - this.MARGIN && y <= leftLine[1][1] + this.MARGIN) {
      var diff = leftLine[0][0] - x;

      if (diff <= this.MARGIN) {
        return false;
      }
    } // for TOP LEFT Corner END
    // for TOP RIGHT Corner


    if (y > bottomLine[0][1] && x + widthOfMovedItem >= bottomLine[0][0] - this.MARGIN && x + widthOfMovedItem <= bottomLine[1][0] + this.MARGIN) {
      var diff = y - bottomLine[0][1];

      if (diff <= this.MARGIN) {
        return false;
      }
    } // for TOP RIGHT Corner END
    // for BOTTOM LEFT Corner


    if (x > rightLine[0][0] && y + heightOfMovedItem >= rightLine[0][1] - this.MARGIN && y + heightOfMovedItem <= rightLine[1][1] + this.MARGIN) {
      var diff = x - rightLine[0][0];

      if (diff <= this.MARGIN) {
        return false;
      }
    } // for BOTTOM LEFT Corner END


    if (y > bottomLine[0][1] && bottomLine[0][0] >= x && bottomLine[0][0] <= x + widthOfMovedItem || y > bottomLine[0][1] && bottomLine[1][0] >= x && bottomLine[1][0] <= x + widthOfMovedItem) {
      var diff = y - bottomLine[0][1];

      if (diff <= this.MARGIN) {
        return false;
      }
    }

    if (x > rightLine[0][0] && rightLine[0][1] >= y && rightLine[0][1] <= y + heightOfMovedItem || x > rightLine[0][0] && rightLine[1][1] >= y && rightLine[1][1] <= y + heightOfMovedItem) {
      var diff = x - rightLine[0][0];

      if (diff <= this.MARGIN) {
        return false;
      }
    }
  }

  if (indexOfOverlappingItem == null) {
    if (x + this.positionData[indexOfMovedItem].width + _utils_essentials__WEBPACK_IMPORTED_MODULE_1__["getMarginAtPoint"].call(this, x) > this.WIDTH) {
      return false;
    } else {
      return mousePositions;
    }
  } else {
    if (this.positionData[indexOfOverlappingItem].x + this.positionData[indexOfMovedItem].width + _utils_essentials__WEBPACK_IMPORTED_MODULE_1__["getMarginAtPoint"].call(this, this.positionData[indexOfOverlappingItem].x) > this.WIDTH) {
      return false;
    } else {
      return {
        x: x,
        y: y,
        revisedCoordinates: {
          x: this.positionData[indexOfOverlappingItem].x,
          y: this.positionData[indexOfOverlappingItem].y
        }
      };
    }
  }
};
const showMoveDemo = function (index, mousePosition) {
  if (mousePosition != false) {
    var newMoveCoordinates = checkNewMoveCoordinates.call(this, index, mousePosition);

    if (newMoveCoordinates == false) {
      this.$limberGridViewBodyPseudoItems[index].classList.remove("limberGridViewBodyPseudoItemMoveAllow");
      this.$limberGridViewBodyPseudoItems[index].classList.add("limberGridViewBodyPseudoItemMoveDisallow");
    } else {
      if (newMoveCoordinates.hasOwnProperty("revisedCoordinates")) {
        this.movePlaneDemo(index, newMoveCoordinates.revisedCoordinates.x, newMoveCoordinates.revisedCoordinates.y);
        this.$limberGridViewMoveGuide[0].style.transform = "translate(" + newMoveCoordinates.revisedCoordinates.x + "px, " + newMoveCoordinates.revisedCoordinates.y + "px)";
        this.$limberGridViewMoveGuide[0].classList.add("limberGridViewMoveGuideActive");
      } else {
        this.movePlaneDemo(index, newMoveCoordinates.x, newMoveCoordinates.y);
        this.$limberGridViewMoveGuide[0].style.transform = "translate(" + newMoveCoordinates.x + "px, " + newMoveCoordinates.y + "px)";
        this.$limberGridViewMoveGuide[0].classList.add("limberGridViewMoveGuideActive");
      }

      this.$limberGridViewBodyPseudoItems[index].classList.remove("limberGridViewBodyPseudoItemMoveDisallow");
      this.$limberGridViewBodyPseudoItems[index].classList.add("limberGridViewBodyPseudoItemMoveAllow");
    }
  } else {
    this.$limberGridViewBodyPseudoItems[index].classList.remove("limberGridViewBodyPseudoItemMoveAllow");
    this.$limberGridViewBodyPseudoItems[index].classList.add("limberGridViewBodyPseudoItemMoveDisallow");
  }
};
const showResizeDemo = function (index, width, height) {
  if (this.resizePlaneDemo(index, width, height) == false) {
    this.$limberGridViewGridPseudoItems[this.userActionData.itemIndex].classList.add("limberGridViewGridPseudoItemResizeDisallow");
  } else {
    this.$limberGridViewGridPseudoItems[this.userActionData.itemIndex].classList.add("limberGridViewGridPseudoItemResizeAllow");
  }
};
const revertShowMoveOrResizeDemo = function () {
  var length_0 = this.$limberGridViewItems.length;

  for (var i = 0; i < length_0; i++) {
    this.$limberGridViewItems[i].style.transform = "translate(" + this.positionData[i].x + "px, " + this.positionData[i].y + "px)";
    this.$limberGridViewItems[i].classList.remove("limberGridViewItemDemo", "limberGridViewItemResizingState");
    this.$limberGridViewGridPseudoItems[i].classList.remove("limberGridViewGridPseudoItemResizingState", "limberGridViewGridPseudoItemActive");
  }
};

/***/ }),

/***/ "./src/libs/eventHandlerLib/miscellaneous.js":
/*!***************************************************!*\
  !*** ./src/libs/eventHandlerLib/miscellaneous.js ***!
  \***************************************************/
/*! exports provided: onWindowResize, onWindowResizeTimerCallback, onItemClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onWindowResize", function() { return onWindowResize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onWindowResizeTimerCallback", function() { return onWindowResizeTimerCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onItemClick", function() { return onItemClick; });
const onWindowResize = function (event) {
  console.log("onWindowResize CALL", this);
  setTimeout(this.onWindowResizeTimerCallbackFunctionVariable, this.WINDOW_RESIZE_WAIT_TIME);
  window.removeEventListener("resize", this.onWindowResizeFunctionVariable);
};
const onWindowResizeTimerCallback = function (event) {
  this.init(this.WIDTH, false);
  this.render();

  if (this.options.reRenderOnResize != false) {
    window.addEventListener("resize", this.onWindowResizeFunctionVariable);
  }
};
const onItemClick = function (event) {
  this.callbacks.onItemClickCallback(event);
};

/***/ }),

/***/ "./src/libs/utils/essentials.js":
/*!**************************************!*\
  !*** ./src/libs/utils/essentials.js ***!
  \**************************************/
/*! exports provided: getPlainFrom4Points, getCoordinates, getLines, arePlainsSame, arePlainsIdentical, isValidPlane, sortPlainsByArea, sortPlainsByHeight, sortPlainsByDepth, divideEqualNumber, getMarginAtPoint, getRowSequence */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlainFrom4Points", function() { return getPlainFrom4Points; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCoordinates", function() { return getCoordinates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLines", function() { return getLines; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arePlainsSame", function() { return arePlainsSame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arePlainsIdentical", function() { return arePlainsIdentical; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidPlane", function() { return isValidPlane; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortPlainsByArea", function() { return sortPlainsByArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortPlainsByHeight", function() { return sortPlainsByHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortPlainsByDepth", function() { return sortPlainsByDepth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divideEqualNumber", function() { return divideEqualNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMarginAtPoint", function() { return getMarginAtPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRowSequence", function() { return getRowSequence; });
const getPlainFrom4Points = function (pointsArray) {
  var minX = -1;
  var minY = -1;
  var maxX = -1;
  var maxY = -1;
  var length_0 = pointsArray.length;

  for (var i = 0; i < length_0; i++) {
    if (pointsArray[i][0] < minX || minX < 0) {
      minX = pointsArray[i][0];
    }

    if (pointsArray[i][0] > maxX) {
      maxX = pointsArray[i][0];
    }

    if (pointsArray[i][1] < minY || minY < 0) {
      minY = pointsArray[i][1];
    }

    if (pointsArray[i][1] > maxY) {
      maxY = pointsArray[i][1];
    }
  }

  var plane = {};
  plane.x = minX;
  plane.y = minY;
  plane.width = maxX - minX;
  plane.height = maxY - minY;
  return plane;
};
const getCoordinates = function (item) {
  var itemTopLeft = [item.x, item.y];
  var itemTopRight = [item.x + item.width, item.y];
  var itemBottomLeft = [item.x, item.y + item.height];
  var itemBottomRight = [item.x + item.width, item.y + item.height];
  var itemCoordinatesArr = [itemTopLeft, itemTopRight, itemBottomRight, itemBottomLeft];
  return itemCoordinatesArr;
};
const getLines = function (item) {
  var itemTopLeft = JSON.parse(JSON.stringify([item.x, item.y]));
  var itemTopRight = JSON.parse(JSON.stringify([item.x + item.width, item.y]));
  var itemBottomLeft = JSON.parse(JSON.stringify([item.x, item.y + item.height]));
  var itemBottomRight = JSON.parse(JSON.stringify([item.x + item.width, item.y + item.height]));
  var topLine = [itemTopLeft, itemTopRight];
  var rightLine = [itemTopRight, itemBottomRight];
  var bottomLine = [itemBottomLeft, itemBottomRight];
  var leftLine = [itemTopLeft, itemBottomLeft];
  var allLines = [topLine, rightLine, bottomLine, leftLine];
  return allLines;
};
const arePlainsSame = function (A, B) {
  if (A.x == B.x && A.y == B.y && A.width == B.width && A.height == B.height) {
    return true;
  } else {
    return false;
  }
};
const arePlainsIdentical = function (A, B) {
  if (A.width == B.width && A.height == B.height) {
    return true;
  } else {
    return false;
  }
};
const isValidPlane = function (plane) {
  if (plane.x >= 0 && plane.y >= 0 && plane.width > 0 && plane.height > 0) {
    return true;
  } else {
    return false;
  }
};
const sortPlainsByArea = function (planes, order = "dec") {
  if (order == "asc") {
    planes.sort(function (a, b) {
      return (a.x + a.width) * (a.y + a.height) - (b.x + b.width) * (b.y + b.height);
    });
  } else {
    planes.sort(function (a, b) {
      return (b.x + b.width) * (b.y + b.height) - (a.x + a.width) * (a.y + a.height);
    });
  }

  return planes;
};
const sortPlainsByHeight = function (planes, order = "dec") {
  if (order == "asc") {
    planes.sort(function (a, b) {
      return a.height - b.height;
    });
  } else {
    planes.sort(function (a, b) {
      return b.height - a.height;
    });
  }

  return planes;
};
const sortPlainsByDepth = function (planes, order = "dec") {
  if (order == "asc") {
    planes.sort(function (a, b) {
      return a.y + a.height - (b.y + b.height);
    });
  } else {
    planes.sort(function (a, b) {
      return b.y + b.height - (a.y + a.height);
    });
  }

  return planes;
};
const divideEqualNumber = function (a, DEFAULT = 0) {
  var res = a / a;

  if (res == NaN) {
    return 0;
  } else {
    return 1;
  }
};
const getMarginAtPoint = function (a) {
  if (a == 0) {
    return 0;
  } else {
    return this.MARGIN;
  }
};
const getRowSequence = function (serialize) {
  var rows = {};
  var rowsArr = [];
  var columns = {};
  var length_0 = this.positionData.length;

  for (var i = 0; i < length_0; i++) {
    if (rows.hasOwnProperty(this.positionData[i].y)) {
      rows[this.positionData[i].y].push(i);
    } else {
      rows[this.positionData[i].y] = [];
      rowsArr.push(Number(this.positionData[i].y));
      rows[this.positionData[i].y].push(i);
    }
  }

  rowsArr.sort(function (a, b) {
    return a - b;
  });
  var length_0 = rowsArr.length;

  for (var i = 0; i < length_0; i++) {
    rows[rowsArr[i]].sort(function (a, b) {
      return this.positionData[a].x - this.positionData[b].x;
    }.bind(this));
  }

  if (serialize != true) {
    return {
      rowOrder: rowsArr,
      rows: rows
    };
  } else {
    var arr = [];
    var map = {};
    var count = 0;
    var length_0 = rowsArr.length;

    for (var i = 0; i < length_0; i++) {
      var length_1 = rows[rowsArr[i]].length;

      for (var j = 0; j < length_1; j++) {
        arr.push(rows[rowsArr[i]][j]);
        map[rows[rowsArr[i]][j]] = count++;
      }
    }

    return {
      list: arr,
      map: map
    };
  }
};

/***/ }),

/***/ "./src/libs/utils/utils.js":
/*!*********************************!*\
  !*** ./src/libs/utils/utils.js ***!
  \*********************************/
/*! exports provided: adjustHeight, adjustScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjustHeight", function() { return adjustHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjustScroll", function() { return adjustScroll; });
const adjustHeight = function (yMouseOrTouchPosition) {
  var scrollHeight = this.$limberGridView[0].scrollHeight;

  if (scrollHeight - yMouseOrTouchPosition <= this.AUTO_SCROLL_POINT) {
    this.$limberGridViewHeightAdjustGuide[0].style.height = yMouseOrTouchPosition + this.MOVE_OR_RESIZE_HEIGHT_INCREMENTS + "px";
  }
};
const adjustScroll = function (limberGridViewOnVisibleAreaY, limberGridViewHeightVisibleHeight) {
  var scrollTop = this.$limberGridView[0].scrollTop; // var scrollLeft = this.$limberGridView[0].scrollLeft;

  var programScrolled = false;

  if (limberGridViewOnVisibleAreaY > 0) {
    if (limberGridViewHeightVisibleHeight - limberGridViewOnVisibleAreaY < this.AUTO_SCROLL_POINT) {
      this.$limberGridView[0].scrollTop = scrollTop + this.AUTO_SCROLL_DISTANCE;
      programScrolled = true;
    }

    if (limberGridViewOnVisibleAreaY < this.HEIGHT / 10 && scrollTop != 0) {
      this.$limberGridView[0].scrollTop = scrollTop - this.AUTO_SCROLL_DISTANCE;
      programScrolled = true;
    }
  } // if(limberGridViewOnVisibleAreaX > 0){
  // 	if((limberGridViewWidthVisibleWidth - limberGridViewOnVisibleAreaX) < (this.WIDTH/10)){
  // 		this.$limberGridView[0].scrollLeft = scrollLeft + 100;
  // 		var programScrolled = true;
  // 	}
  // 	if((limberGridViewOnVisibleAreaX) < (this.WIDTH/10) && scrollLeft != 0){
  // 		this.$limberGridView[0].scrollLeft = scrollLeft - 100;
  // 		var programScrolled = true;
  // 	}
  // }


  return programScrolled;
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmNzcz80MTQ5Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlicy9ldmVudEhhbmRsZXJMaWIvYWRkSXRlbUFuZEN1dFNwYWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9saWJzL2V2ZW50SGFuZGxlckxpYi9pdGVtSW50ZXJhY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYnMvZXZlbnRIYW5kbGVyTGliL21pc2NlbGxhbmVvdXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYnMvdXRpbHMvZXNzZW50aWFscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlicy91dGlscy91dGlscy5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJMaW1iZXJHcmlkVmlldyIsInByb3RvdHlwZSIsImNvbnN0cnVjdG9yIiwiTU9WRV9HVUlERV9SQURJVVMiLCJSRVNJWkVfU1FVQVJFX0dVSURFX0xFTkdUSCIsIlJFU0laRV9TUVVBUkVfQk9SREVSX0dVSURFX1dJRFRIIiwiQVVUT19TQ1JPTExfRElTVEFOQ0UiLCJBVVRPX1NDUk9MTF9QT0lOVCIsIk1PVkVfT1JfUkVTSVpFX0hFSUdIVF9JTkNSRU1FTlRTIiwiTU9VU0VfRE9XTl9USU1FIiwiVE9VQ0hfSE9MRF9USU1FIiwiREVNT19XQUlUX1RJTUUiLCJXSU5ET1dfUkVTSVpFX1dBSVRfVElNRSIsIk1BUkdJTiIsIk1PQklMRV9BU1BFQ1RfUkFUSU8iLCJBRERfT1JfQ1VUU1BBQ0VfVE9HR0xFIiwib3B0aW9ucyIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImNhbGxiYWNrcyIsImluaXRpYWxHcmlkRGF0YSIsImluaXRpYWxQb3NpdGlvbkRhdGEiLCJwb3NpdGlvbkRhdGEiLCJtb2JpbGVBc3BlY3RSYXRpbyIsInVuZGVmaW5lZCIsImVkaXRhYmxlIiwib25MaW1iZXJHcmlkTW91c2VEb3duRnVuY3Rpb25WYXJpYWJsZSIsIm9uTGltYmVyR3JpZE1vdXNlRG93biIsImJpbmQiLCJvbkxpbWJlckdyaWRNb3VzZU1vdmVCaW5kZWRGdW5jdGlvblZhcmlhYmxlIiwib25MaW1iZXJHcmlkTW91c2VNb3ZlIiwib25MaW1iZXJHcmlkTW91c2VVcEJpbmRlZEZ1bmN0aW9uVmFyaWFibGUiLCJvbkxpbWJlckdyaWRNb3VzZVVwIiwib25MaW1iZXJHcmlkQ29udGV4dE1lbnVCaW5kZWRGdW5jdGlvblZhcmlhYmxlIiwib25MaW1iZXJHcmlkQ29udGV4dE1lbnUiLCJvbkxpbWJlckdyaWRUb3VjaFN0YXJ0RnVuY3Rpb25WYXJpYWJsZSIsIm9uTGltYmVyR3JpZFRvdWNoU3RhcnQiLCJvbkxpbWJlckdyaWRUb3VjaE1vdmVCaW5kZWRGdW5jdGlvblZhcmlhYmxlIiwib25MaW1iZXJHcmlkVG91Y2hNb3ZlIiwib25MaW1iZXJHcmlkVG91Y2hFbmRCaW5kZWRGdW5jdGlvblZhcmlhYmxlIiwib25MaW1iZXJHcmlkVG91Y2hFbmQiLCJvbkxpbWJlckdyaWRUb3VjaENhbmNlbEJpbmRlZEZ1bmN0aW9uVmFyaWFibGUiLCJvbkxpbWJlckdyaWRUb3VjaENhbmNlbCIsIm9uTGltYmVyR3JpZFRvdWNoQ29udGV4dE1lbnVCaW5kZWRGdW5jdGlvblZhcmlhYmxlIiwib25MaW1iZXJHcmlkVG91Y2hDb250ZXh0TWVudSIsIm9uSXRlbU1vdXNlRG93bkZ1bmN0aW9uVmFyaWFibGUiLCJvbkl0ZW1Nb3VzZURvd24iLCJvbk1vdXNlTW92ZUJpbmRlZEZ1bmN0aW9uVmFyaWFibGUiLCJvbk1vdXNlTW92ZSIsIm9uTW91c2VVcEJpbmRlZEZ1bmN0aW9uVmFyaWFibGUiLCJvbk1vdXNlVXAiLCJvbkNvbnRleHRNZW51QmluZGVkRnVuY3Rpb25WYXJpYWJsZSIsIm9uQ29udGV4dE1lbnUiLCJvbkl0ZW1Ub3VjaFN0YXJ0RnVuY3Rpb25WYXJpYWJsZSIsIm9uSXRlbVRvdWNoU3RhcnQiLCJvblRvdWNoTW92ZUJpbmRlZEZ1bmN0aW9uVmFyaWFibGUiLCJvblRvdWNoTW92ZSIsIm9uVG91Y2hFbmRCaW5kZWRGdW5jdGlvblZhcmlhYmxlIiwib25Ub3VjaEVuZCIsIm9uVG91Y2hDYW5jZWxCaW5kZWRGdW5jdGlvblZhcmlhYmxlIiwib25Ub3VjaENhbmNlbCIsIm9uSXRlbVRvdWNoQ29udGV4dE1lbnVCaW5kZWRGdW5jdGlvblZhcmlhYmxlIiwib25JdGVtVG91Y2hDb250ZXh0TWVudSIsImxpbWJlckdyaWRNb3VzZURvd25DaGVja1RpbWVPdXRWYXJpYWJsZSIsImxpbWJlckdyaWRUb3VjaFN0YXJ0Q2hlY2tUaW1lT3V0VmFyaWFibGUiLCJtb3ZlR3VpZGVSYWRpdXMiLCJyZXNpemVTcXVhcmVHdWlkZUxlbmd0aCIsInJlc2l6ZVNxdWFyZUJvcmRlckd1aWRlV2lkdGgiLCJvbkl0ZW1DbGlja0NhbGxiYWNrIiwib25JdGVtQ2xpY2tGdW5jdGlvblZhcmlhYmxlIiwib25JdGVtQ2xpY2siLCJyZVJlbmRlck9uUmVzaXplIiwib25XaW5kb3dSZXNpemVGdW5jdGlvblZhcmlhYmxlIiwib25XaW5kb3dSZXNpemUiLCJvbldpbmRvd1Jlc2l6ZVRpbWVyQ2FsbGJhY2tGdW5jdGlvblZhcmlhYmxlIiwib25XaW5kb3dSZXNpemVUaW1lckNhbGxiYWNrIiwiYWRkRXZlbnRMaXN0ZW5lciIsImluaXQiLCJncmlkV2lkdGgiLCJhdXRvQXJyYW5nZSIsImluaXRpYWxHcmlkV2lkdGgiLCJlbCIsImluZGV4T2YiLCIkYm9keSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJlbGVtZW50SUQiLCJzdWJzdHJpbmciLCJsZW5ndGgiLCJwc2V1ZG9FbGVtZW50SUQiLCIkZWwiLCJnZXRFbGVtZW50QnlJZCIsImluc2VydEFkamFjZW50SFRNTCIsIiRib2R5UHNldWRvRWwiLCJpbm5lckhUTUwiLCIkbGltYmVyR3JpZFZpZXdDb250YWluZXIiLCJxdWVyeVNlbGVjdG9yQWxsIiwiJGxpbWJlckdyaWRWaWV3U3R5bGUiLCIkbGltYmVyR3JpZFZpZXciLCJQQURESU5HX0xFRlQiLCJwYXJzZUludCIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiUEFERElOR19SSUdIVCIsIlBBRERJTkdfVE9QIiwiUEFERElOR19CT1RUT00iLCJXSURUSCIsImNsaWVudFdpZHRoIiwiSEVJR0hUIiwiY2xpZW50SGVpZ2h0IiwiV0lEVEhfU0NBTEVfRkFDVE9SIiwicmVtYWluaW5nSXRlbXMiLCJsZW5ndGhfMCIsImkiLCJwdXNoIiwid2lkdGgiLCJoZWlnaHQiLCJmaXRSZW1haW5pbmdJdGVtc0JlbG93RGVlcGVzdExpbmUiLCJtYXJnaW4iLCJnZXRHcmlkRGF0YSIsImdyaWREYXRhIiwiZ3JpZEhlaWdodCIsInNldEFkZE9yQ3V0U3BhY2UiLCJmbGFnIiwicmVuZGVyIiwic2NhbGUiLCJ1bkluaXRpYWxpemVFdmVudHMiLCJjbGFzc0xpc3QiLCJjbGFzc0xpc3RTdHJpbmciLCJqb2luIiwiaHRtbCIsInQwIiwicGVyZm9ybWFuY2UiLCJub3ciLCJpc01vYmlsZSIsImRhdGFUeXBlIiwiZnJvbnQiLCJzdHlsZV8xIiwieCIsInN0eWxlXzIiLCJ5Iiwic3R5bGVfMyIsInN0eWxlXzQiLCJzdHlsZV81Iiwic3R5bGUiLCJib2R5RnJvbnQiLCJib2R5RW5kIiwidXNlckRhdGEiLCJnZXRJdGVtUmVuZGVyRGF0YUNhbGxiYWNrIiwiYm9keSIsImVuZCIsIml0ZW0iLCJyZW1vdmVDaGlsZCIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJhdHRyaWJ1dGUiLCJjcmVhdGVBdHRyaWJ1dGUiLCJ2YWx1ZSIsInNldEF0dHJpYnV0ZU5vZGUiLCJhZGQiLCJ0cmFuc2Zvcm0iLCJhcHBlbmRDaGlsZCIsInNlcmlhbGl6ZWRQb3NpdGlvbkRhdGEiLCJnZXRSb3dTZXF1ZW5jZSIsImNhbGwiLCJnZXRNYXJnaW5BdFBvaW50IiwibWFwIiwidDEiLCJjb25zb2xlIiwibG9nIiwiJGxpbWJlckdyaWRWaWV3SXRlbXMiLCJyZW5kZXJQc2V1ZG9FbGVtZW50cyIsImluaXRpYWxpemVWYXJpYWJsZXMiLCJpbml0aWFsaXplRXZlbnRzIiwicmVuZGVyQ29tcGxldGUiLCIkbGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbXMiLCJwYXJlbnROb2RlIiwiJGxpbWJlckdyaWRWaWV3Qm9keVBzZXVkb0l0ZW1zIiwiZ3JpZEh0bWwiLCJib2R5SHRtbCIsImdyaWRGcm9udCIsImdyaWRJdGVtIiwiYm9keUl0ZW0iLCJsaW1iZXJHcmlkVmlld01vdmVHdWlkZSIsImxpbWJlckdyaWRWaWV3SGVpZ2h0QWRqdXN0R3VpZGUiLCJsaW1iZXJHcmlkVmlld0FkZEl0ZW1HdWlkZSIsImxpbWJlckdyaWRWaWV3QWRkSXRlbU9uVG91Y2hIb2xkR3VpZGUiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiJGxpbWJlckdyaWRWaWV3TW92ZUd1aWRlIiwiJGxpbWJlckdyaWRWaWV3SGVpZ2h0QWRqdXN0R3VpZGUiLCIkbGltYmVyR3JpZFZpZXdBZGRJdGVtR3VpZGUiLCIkbGltYmVyR3JpZFZpZXdBZGRJdGVtT25Ub3VjaEhvbGRHdWlkZSIsInJlbmRlckl0ZW1zIiwiaXRlbXMiLCJwcm9jZXNzVHlwZSIsInNjcm9sbFRvcCIsInJlcGxhY2VDaGlsZCIsInJlbmRlclBzZXVkb0l0ZW1zIiwicmVuZGVyRGV0YWlscyIsIml0ZW1zUmVuZGVyQ29tcGxldGUiLCJkaXZHcmlkIiwiYXR0cmlidXRlR3JpZCIsImRpdkJvZHkiLCJhdHRyaWJ1dGVCb2R5IiwicmVtb3ZlSXRlbXMiLCJpdGVtc0luZGljZXMiLCJpdGVtc1RvUmVuZGVyIiwiaW5kZXgiLCJzb3J0IiwiYSIsImIiLCJOdW1iZXIiLCJzcGxpY2UiLCJwc2V1ZG9HcmlkSXRlbSIsInBzZXVkb0JvZHlJdGVtIiwicmVtb3ZlQ29tcGxldGVDYWxsYmFjayIsImFkZEl0ZW1zIiwiaG93TWFueSIsIml0ZW1XaWR0aCIsIml0ZW1IZWlnaHQiLCJzdGFydGluZ1kiLCJzY3JvbGxUb1Bvc2l0aW9uIiwicmVtYWluaW5nV2lkdGgiLCJzdGFydGluZ1giLCJzY3JvbGxIZWlnaHQiLCJhZGRJdGVtc0F0UG9zaXRpb25zIiwiYWRkQ29tcGxldGVDYWxsYmFjayIsImFkZEFycmF5Iiwic3RhcnRpbmdJbmRleCIsImxpc3QiLCJyZUluaXRpYWxpemVFdmVudHMiLCJlbmFibGVJbnRlcmFjdGl2ZUFkZEFuZEN1dCIsImVuYWJsZVRvdWNoSW50ZXJhY3Rpb24iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaW5pdGlhbGl6ZUl0ZW1Ub3VjaEV2ZW50cyIsInVuSW5pdGlhbGl6ZUl0ZW1Ub3VjaEV2ZW50cyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwicmVzaXplUGxhbmUiLCJhbGxBZmZlY3RlZEl0ZW1zIiwiZmluZEFmZmVjdGVkSXRlbXNPblJlc2l6ZSIsImZyZWVTcGFjZXMiLCJmaW5kRnJlZVNwYWNlcyIsImFmZmVjdGVkSXRlbXMiLCJkb05vdE1lcmdlRmxhZyIsIm1lcmdlZEZyZWVTcGFjZXMiLCJtZXJnZUZyZWVTcGFjZXMiLCJhZmZlY3RlZEl0ZW1zRXhjZXB0U2VsZk9iamVjdHMiLCJhZmZlY3RlZEl0ZW1zRXhjZXB0U2VsZiIsImluZCIsImZpdERldGFpbHMiLCJmaXRJdGVtc0ludG9GcmVlU3BhY2VzIiwiZml0dGVkSXRlbXMiLCJyZXBvc2l0aW9uZWRJdGVtcyIsImxlbmd0aF8xIiwiZml0dGVkRmxhZyIsImoiLCJmaXRSZW1haW5pbmdJdGVtcyIsInJlbW92ZSIsInJlc2l6ZVBsYW5lRGVtbyIsIm1vdmVQbGFuZSIsInRvWCIsInRvWSIsImZpbmRBZmZlY3RlZEl0ZW1zT25Nb3ZlIiwibW92ZVBsYW5lRGVtbyIsInJlc3VsdCIsImlzUGxhbmVCSW5zaWRlUGxhbmVBX1RvdWNoaW5nSXNJbnNpZGUiLCJpc0luc2lkZSIsImZzIiwic3VidHJhY3RQbGFuZXMiLCJpdGVtc05vdFRvTWVyZ2UiLCJtZXJnZVBsYWluc0ZyZWVTcGFjZXNBbmRJdGVtc05vdFRvTWVyZ2UiLCJjb25jYXQiLCJpc1BsYW5lSW5zaWRlU3RhY2siLCJzdGFjayIsInBsYW5lIiwiY29udGV4dCIsImFyZVBsYWluc1NhbWUiLCJtZXJnZWRTdGFjayIsImlzUGxhbmVCSW5zaWRlUGxhbmVBX1RvdWNoaW5nTm90SW5zaWRlIiwibWVyZ2VkUGxhbmUiLCJtZXJnZVBsYWlucyIsIm1lcmdlU3RhY2tJdGVtV2l0aEZyZWVTcGFjZXMiLCJuZXdTdGFjayIsInJlZHVuZGFudFBsYW5lcyIsImZpbmFsTWVyZ2VkUGxhbmVzIiwiaGFzT3duUHJvcGVydHkiLCJBIiwiQiIsInJlc3VsdFR5cGUiLCJBVG9wTGVmdCIsIkFUb3BSaWdodCIsIkFCb3R0b21MZWZ0IiwiQUJvdHRvbVJpZ2h0IiwiQUNvb3JkaWFudGVzQXJyIiwiQlRvcExlZnQiLCJCVG9wUmlnaHQiLCJCQm90dG9tTGVmdCIsIkJCb3R0b21SaWdodCIsIkJDb29yZGluYXRlc0FyciIsIkJSZXN1bHRBcnIiLCJvdmVyYWxsUmVzdWx0IiwiZW5ndWxmZWQiLCJlbmd1bGZlZENoZWNrQ291bnQiLCJvdmVyYWxsIiwiaW5kaXZpZHVhbCIsImRvTm90TWVyZ2VJdGVtcyIsInNvcnRQbGFpbnNCeUFyZWEiLCJtYXRjaCIsImZpbmRNYXRjaGluZ1NwYWNlIiwibWF0Y2hpbmdJdGVtSW5kZXgiLCJtYXRjaGluZ0ZyZWVTcGFjZUluZGV4IiwidGVtcEl0ZW0iLCJyZXBvc2l0aW9uZWRJdGVtIiwib2NjdXBpZWRTcGFjZSIsIm5ld0ZyZWVTcGFjZXMiLCJwbGFuZURpZmYiLCJuZXdNZXJnZWRGcmVlU3BhY2VzIiwicmFuZG9tUG9zc2liaWxpdGllcyIsInBvc3NpYmlsaXRpZXNXaWR0aCIsInBvc3NpYmlsaXRpZXNIZWlnaHQiLCJmcmVlU3BhY2VXaWR0aCIsImZyZWVTcGFjZUhlaWdodCIsImFyZVBsYWluc0lkZW50aWNhbCIsIk1hdGgiLCJmbG9vciIsImdyZWF0ZXN0V2lkdGhEaWZmIiwiZ3JlYXRlc3RXaWR0aERpZmZJbmRleCIsIm1pbllQb3NzaWJpbGl0aWVzV2lkdGgiLCJtaW5ZUG9zc2liaWxpdGllc1dpZHRoSW5kZXgiLCJncmVhdGVzdEhlaWdodERpZmYiLCJncmVhdGVzdEhlaWdodERpZmZJbmRleCIsIm1pbllQb3NzaWJpbGl0aWVzSGVpZ2h0IiwibWluWVBvc3NpYmlsaXRpZXNIZWlnaHRJbmRleCIsImsiLCJmbG9vcmVkUXVvdGllbnQiLCJxdW90aWVudCIsImRpZmYiLCJjaGFuZ2VkSW5kZXgiLCJwcmV2aW91c0ZpdERldGFpbHMiLCJhZmZlY3RlZEl0ZW1zT2JqZWN0IiwiYWZmZWN0ZWRJdGVtc09iamVjdERlcHRoRGVzY09yZGVyIiwic29ydFBsYWluc0J5RGVwdGgiLCJncmVhdGVzdERlcHRoQWZmZWN0ZWRJdGVtcyIsInJlbWFpbmluZ0l0ZW1zSW5kaWNlc01hcCIsIml0ZW1zQWJvdmVHcmVhdGVzdERlcHRoIiwicmVjYWxjdWxhdGVkR3JlYXRlc3REZXB0aEFmZmVjdGVkSXRlbXNBbmROb25BZmZlY3RlZEl0ZW1zQ2FzZUdyZWF0ZXIiLCJyZWNhbGN1bGF0ZWRHcmVhdGVzdERlcHRoQWZmZWN0ZWRJdGVtc0FuZE5vbkFmZmVjdGVkSXRlbXNDYXNlTGVzc2VyIiwiZ3JlYXRlc3REZXB0aE9mQWZmZWN0ZWRBcmVhIiwiaXRlbXNUb1NoaWZ0RGF0YSIsImdldEl0ZW1zRnJvbVBvaW50RGVwdGgiLCJpdGVtc1RvU2hpZnQiLCJpdGVtc0Zyb21Qb2ludERlcHRoIiwiaW5pdGlhbEZpdERhdGEiLCJmaXRSZW1haW5pbmdJdGVtc0Fib3ZlRGVlcGVzdExpbmUiLCJmaW5hbEZpdERhdGEiLCJmaW5hbFBvc2l0aW9uRGF0YSIsInNoaXRmdEl0ZW1zQmVsb3ciLCJkZWVwZXN0WSIsInNoaWZ0SGVpZ2h0VG9BZGQiLCJkZWVwUG9pbnQiLCJsaW5lUGxhbmUiLCJyZW1haW5pbmdJdGVtc01hcCIsIm9iaiIsInJlbWFpbmluZ0ZyZWVTcGFjZXMiLCJyZW1haW5pbmdJdGVtc09iamVjdCIsImZpdHRlZFJlbWFpbmluZ0l0ZW1zIiwidGVtcCIsIk9iamVjdCIsImtleXMiLCJyZW1haW5pbmdJdGVtc0JhY2t1cCIsInNvcnRQbGFpbnNCeUhlaWdodCIsImluaXRpYWxpemVkUGxhbmUiLCJmcmVlU3BhY2VzSW5DdXJyZW50Um93Iiwib2NjdXBpZWRTcGFjZXNJbkN1cnJlbnRSb3ciLCJmcmVlU3BhY2UiLCJpc1ZhbGlkUGxhbmUiLCJuZXh0SW5pdGlhbGl6ZVBsYW5lIiwiaW5jbHVkZVBsYW5lQWJvdmVBbmRCZWxvd1BvaW50RGVwdGgiLCJzaGlmdEhlaWdodCIsImluZGljZXNUb1NoaWZ0Iiwic2hpZnRJdGVtc1VwIiwicGxhbmVzIiwiYUxpbmVzIiwiZ2V0TGluZXMiLCJiTGluZXMiLCJvcHBvc2l0ZUxpbmVzIiwiaW50ZXJzZWN0aW9uQ291bnQiLCJpbnRlcnNlY3Rpb25Qb2ludHNBdG9CIiwibGluZVBvaW50c0EiLCJpbnRlcnNlY3Rpb25Qb2ludHNCdG9BIiwibGluZVBvaW50c0IiLCJkaXN0YW5jZSIsImFMaW5lSWQiLCJiTGluZUlkIiwiYUxpbmUiLCJiTGluZSIsIm0xIiwibTIiLCJwMSIsInAyIiwicDMiLCJhbHBoYSIsImQiLCJhYnMiLCJ3YXJuIiwiYU9wcExpbmUiLCJiT3BwTGluZSIsImNoYW5nZVkiLCJjaGFuZ2VYIiwicG9pbnRzVG9HZXRQbGFpbiIsInBsYWluVG9DaGVja0lmRnJlZSIsImdldFBsYWluRnJvbTRQb2ludHMiLCJkdXBsaWNhdGVDaGVjayIsImZpbmFsUG9pbnRzVG9HZXRQbGFpbiIsInBsYWluVG9DaGVja0lmRnJlZV9MaW5lcyIsInBsYW5lQU9uVG9wT2ZCIiwicGxhaW5Ub0NoZWNrSWZGcmVlX0RpdmlkZXJMaW5lIiwicGxhbmVBT25MZWZ0T2ZCIiwiZnJlZURpc3RhbmNlIiwiaW5kZXhPZkludGVyc2VjdGluZ1BsYW5lIiwicGxhbmVMaW5lIiwibWFrZUZpbmFsRnJlZVNwYWNlIiwicG9pbnRzVG9HZXRNZXJnZWRQbGFpbiIsImZpbmFsUG9pbnRzVG9HZXRNZXJnZWRQbGFpbiIsImV2ZW50IiwidGFyZ2V0IiwiY29udGFpbnMiLCJzdG9wUHJvcGFnYXRpb24iLCJ3aGljaCIsImxpbWJlckdyaWRNb3VzZURvd25DYW5jZWwiLCJsaW1iZXJHcmlkTW91c2VEb3duVGltZXJDb21wbGV0ZSIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJvbkxpbWJlckdyaWRNb3VzZURvd25DaGVjayIsIm9mZnNldFgiLCJvZmZzZXRZIiwibGltYmVyR3JpZFRvdWNoU3RhcnRDYW5jZWwiLCJsaW1iZXJHcmlkVG91Y2hTdGFydFRpbWVyQ29tcGxldGUiLCJvbkxpbWJlckdyaWRUb3VjaFN0YXJ0Q2hlY2siLCJzY3JvbGxMZWZ0IiwidXNlckFjdGlvbkRhdGEiLCJ0eXBlIiwiYWRkUG9zaXRpb25YIiwiYWRkUG9zaXRpb25ZIiwidG91Y2hQb3NpdGlvbk9uTGltYmVyR3JpZCIsImNhbGN1bGF0ZVRvdWNoUG9zT25MaW1iZXJHcmlkIiwicmVtb3ZlQWRkSXRlbU9uVG91Y2hIb2xkR3VpZGVGdW5jdGlvbiIsImluc2VydEFkZEl0ZW1PblRvdWNoSG9sZEd1aWRlU3R5bGVzIiwicHJldmVudERlZmF1bHQiLCJuZXdXaWR0aCIsIm5ld0hlaWdodCIsInlNb3VzZVBvc2l0aW9uIiwiYWRqdXN0SGVpZ2h0IiwiYWRkSXRlbUFsbG93Q2hlY2tUaW1lT3V0VmFyaWFibGUiLCJhZGRJdGVtQWxsb3dDaGVja1RpbWVPdXQiLCJjdXRTcGFjZUFsbG93Q2hlY2tUaW1lT3V0VmFyaWFibGUiLCJjdXRTcGFjZUFsbG93Q2hlY2tUaW1lT3V0IiwibGltYmVyR3JpZFZpZXdCb3VuZGluZ0NsaWVudFJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJsaW1iZXJHcmlkVmlld1dpZHRoVmlzaWJsZVdpZHRoIiwib2Zmc2V0V2lkdGgiLCJsZWZ0IiwibGltYmVyR3JpZFZpZXdIZWlnaHRWaXNpYmxlSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwidG9wIiwibGltYmVyR3JpZFZpZXdPblZpc2libGVBcmVhWCIsImxpbWJlckdyaWRWaWV3T25WaXNpYmxlQXJlYVkiLCJ5VG91Y2hQb3NpdGlvbiIsInByb2dyYW1TY3JvbGxlZCIsImFkanVzdFNjcm9sbCIsIml0ZW1BZGRlZEZsYWciLCJhZGRJdGVtQWxsb3dDaGVjayIsImN1dFNwYWNlQWxsb3dDaGVjayIsInRlbXBQbGFuZSIsIml0ZXJJdGVtIiwicmlwcGxlIiwicmlwcGxlU3RyaW5nIiwicmFkaXVzIiwic3FydCIsInBvdyIsInJlc2l6ZVVJQm94IiwiY3VycmVudFRhcmdldCIsIml0ZW1JbmRleCIsImF0dHJpYnV0ZXMiLCJtb3VzZURvd25DYW5jZWwiLCJtb3VzZURvd25UaW1lckNvbXBsZXRlIiwibG9uZ1ByZXNzQ2hlY2siLCJtb3VzZURvd25DaGVjayIsInRyYW5zZm9ybVN0eWxlIiwiaTEiLCJpMiIsIml0ZW1Qb3NpdGlvblgiLCJpdGVtUG9zaXRpb25ZIiwidG91Y2hlcyIsInRvdWNoUG9zT25MaW1iZXJHcmlkSXRlbSIsImNhbGN1bGF0ZVRvdWNoUG9zT25MaW1iZXJHcmlkSXRlbSIsInRhcEhvbGRDYW5jZWwiLCJ0YXBIb2xkVGltZXJDb21wbGV0ZSIsImxvbmdUb3VjaENoZWNrIiwidGFwSG9sZENoZWNrIiwicGFnZVgiLCJwYWdlWSIsIm1vdXNlUG9zaXRpb25PbkxpbWJlckdyaWQiLCJjYWxjdWxhdGVNb3VzZVBvc09uTGltYmVyR3JpZCIsInNob3dNb3ZlRGVtb1RpbWVPdXRWYXJpYWJsZSIsInNob3dNb3ZlRGVtbyIsInNob3dSZXNpemVEZW1vVGltZU91dFZhcmlhYmxlIiwic2hvd1Jlc2l6ZURlbW8iLCJpdGVtUmVzaXplRmxhZyIsIml0ZW1Nb3ZlRmxhZyIsIm5ld01vdmVDb29yZGluYXRlcyIsImNoZWNrTmV3TW92ZUNvb3JkaW5hdGVzIiwidXBkYXRlZENvb3JkaW5hdGVzIiwicmV2aXNlZENvb3JkaW5hdGVzIiwicmV2ZXJ0U2hvd01vdmVPclJlc2l6ZURlbW8iLCJtb3ZlQ29tcGxldGVDYWxsYmFjayIsInJlc2l6ZUNvbXBsZXRlQ2FsbGJhY2siLCJsaW1iZXJHcmlkVmlld1Bvc2l0aW9uIiwiY2xpZW50WCIsImNsaWVudFkiLCJtb3VzZVhPbkxpbWJlckdyaWRWaWV3IiwibW91c2VZT25MaW1iZXJHcmlkVmlldyIsInRvdWNoIiwiY2hhbmdlZFRvdWNoZXMiLCJ0b3VjaFhPbkxpbWJlckdyaWRWaWV3IiwidG91Y2hZT25MaW1iZXJHcmlkVmlldyIsImxpbWJlckdyaWRWaWV3SXRlbVBvc2l0aW9uIiwiaW5kZXhPZk1vdmVkSXRlbSIsIm1vdXNlUG9zaXRpb25zIiwid2lkdGhPZk1vdmVkSXRlbSIsImhlaWdodE9mTW92ZWRJdGVtIiwiaW5kZXhPZk92ZXJsYXBwaW5nSXRlbSIsIml0ZW1Ub3BMZWZ0IiwiaXRlbVRvcFJpZ2h0IiwiaXRlbUJvdHRvbUxlZnQiLCJpdGVtQm90dG9tUmlnaHQiLCJsaW5lcyIsInRvcExpbmUiLCJyaWdodExpbmUiLCJib3R0b21MaW5lIiwibGVmdExpbmUiLCJtb3VzZVBvc2l0aW9uIiwicG9pbnRzQXJyYXkiLCJtaW5YIiwibWluWSIsIm1heFgiLCJtYXhZIiwiZ2V0Q29vcmRpbmF0ZXMiLCJpdGVtQ29vcmRpbmF0ZXNBcnIiLCJhbGxMaW5lcyIsIm9yZGVyIiwiZGl2aWRlRXF1YWxOdW1iZXIiLCJERUZBVUxUIiwicmVzIiwiTmFOIiwic2VyaWFsaXplIiwicm93cyIsInJvd3NBcnIiLCJjb2x1bW5zIiwicm93T3JkZXIiLCJhcnIiLCJjb3VudCIsInlNb3VzZU9yVG91Y2hQb3NpdGlvbiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0EsT0FBTyxLQUFVLEVBQUUsa0JBS2Q7Ozs7Ozs7Ozs7Ozs7QUNOTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBCQTtBQUNBO0FBRUE7QUFLQTtBQW1CQTtBQXFCQTs7QUFlQUEsTUFBTSxDQUFDQyxjQUFQLEdBQXlCLFlBQVc7QUFDbkNBLGdCQUFjLENBQUNDLFNBQWYsQ0FBeUJDLFdBQXpCLEdBQXVDRixjQUF2QyxDQURtQyxDQUduQztBQUVBO0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBOztBQUVBQSxnQkFBYyxDQUFDQyxTQUFmLENBQXlCRSxpQkFBekIsR0FBNkMsRUFBN0M7QUFDQUgsZ0JBQWMsQ0FBQ0MsU0FBZixDQUF5QkcsMEJBQXpCLEdBQXNELEVBQXREO0FBQ0FKLGdCQUFjLENBQUNDLFNBQWYsQ0FBeUJJLGdDQUF6QixHQUE0RCxDQUE1RDtBQUNBTCxnQkFBYyxDQUFDQyxTQUFmLENBQXlCSyxvQkFBekIsR0FBZ0QsRUFBaEQ7QUFDQU4sZ0JBQWMsQ0FBQ0MsU0FBZixDQUF5Qk0saUJBQXpCLEdBQTZDLEVBQTdDO0FBQ0FQLGdCQUFjLENBQUNDLFNBQWYsQ0FBeUJPLGdDQUF6QixHQUE0RCxFQUE1RDtBQUVBUixnQkFBYyxDQUFDQyxTQUFmLENBQXlCUSxlQUF6QixHQUEyQyxHQUEzQztBQUNBVCxnQkFBYyxDQUFDQyxTQUFmLENBQXlCUyxlQUF6QixHQUEyQyxHQUEzQztBQUNBVixnQkFBYyxDQUFDQyxTQUFmLENBQXlCVSxjQUF6QixHQUEwQyxHQUExQztBQUNBWCxnQkFBYyxDQUFDQyxTQUFmLENBQXlCVyx1QkFBekIsR0FBbUQsSUFBbkQ7QUFDQVosZ0JBQWMsQ0FBQ0MsU0FBZixDQUF5QlksTUFBekIsR0FBa0MsQ0FBbEM7QUFFQWIsZ0JBQWMsQ0FBQ0MsU0FBZixDQUF5QmEsbUJBQXpCLEdBQStDLEtBQUssQ0FBcEQ7QUFFQWQsZ0JBQWMsQ0FBQ0MsU0FBZixDQUF5QmMsc0JBQXpCLEdBQWtELEtBQWxELENBL0VtQyxDQWlGbkM7QUFFQTtBQUVBOztBQUVBLFdBQVNmLGNBQVQsQ0FBd0JnQixPQUF4QixFQUFpQztBQUNoQyxTQUFLQSxPQUFMLEdBQWVDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLFNBQUwsQ0FBZUgsT0FBZixDQUFYLENBQWY7QUFDQSxTQUFLSSxTQUFMLEdBQWlCSixPQUFPLENBQUNJLFNBQXpCO0FBRUEsU0FBS0MsZUFBTCxHQUF1QixLQUFLTCxPQUFMLENBQWFLLGVBQXBDO0FBQ0EsU0FBS0MsbUJBQUwsR0FBMkIsS0FBS04sT0FBTCxDQUFhSyxlQUFiLENBQTZCQyxtQkFBeEQ7QUFDQSxTQUFLQyxZQUFMLEdBQW9CTixJQUFJLENBQUNDLEtBQUwsQ0FDbkJELElBQUksQ0FBQ0UsU0FBTCxDQUFlLEtBQUtHLG1CQUFwQixDQURtQixDQUFwQjs7QUFJQSxRQUNDLEtBQUtOLE9BQUwsQ0FBYUssZUFBYixDQUE2QkcsaUJBQTdCLElBQWtEQyxTQUFsRCxJQUNBLEtBQUtULE9BQUwsQ0FBYUssZUFBYixDQUE2QkcsaUJBQTdCLElBQWtELElBRm5ELEVBR0U7QUFDRCxVQUNDLE9BQU8sS0FBS1IsT0FBTCxDQUFhSyxlQUFiLENBQTZCRyxpQkFBcEMsSUFDQSxRQUZELEVBR0U7QUFDRCxhQUFLVixtQkFBTCxHQUEyQixLQUFLRSxPQUFMLENBQWFLLGVBQWIsQ0FBNkJHLGlCQUF4RDtBQUNBO0FBQ0Q7O0FBRUQsUUFBSSxLQUFLUixPQUFMLENBQWFVLFFBQWIsSUFBeUIsSUFBN0IsRUFBbUM7QUFDbEMsV0FBS0MscUNBQUwsR0FBNkNDLDhGQUFxQixDQUFDQyxJQUF0QixDQUM1QyxJQUQ0QyxDQUE3QztBQUdBLFdBQUtDLDJDQUFMLEdBQW1EQyw4RkFBcUIsQ0FBQ0YsSUFBdEIsQ0FDbEQsSUFEa0QsQ0FBbkQ7QUFHQSxXQUFLRyx5Q0FBTCxHQUFpREMsNEZBQW1CLENBQUNKLElBQXBCLENBQ2hELElBRGdELENBQWpEO0FBR0EsV0FBS0ssNkNBQUwsR0FBcURDLGdHQUF1QixDQUFDTixJQUF4QixDQUNwRCxJQURvRCxDQUFyRDtBQUlBLFdBQUtPLHNDQUFMLEdBQThDQywrRkFBc0IsQ0FBQ1IsSUFBdkIsQ0FDN0MsSUFENkMsQ0FBOUM7QUFHQSxXQUFLUywyQ0FBTCxHQUFtREMsOEZBQXFCLENBQUNWLElBQXRCLENBQ2xELElBRGtELENBQW5EO0FBR0EsV0FBS1csMENBQUwsR0FBa0RDLDZGQUFvQixDQUFDWixJQUFyQixDQUNqRCxJQURpRCxDQUFsRDtBQUdBLFdBQUthLDZDQUFMLEdBQXFEQyxnR0FBdUIsQ0FBQ2QsSUFBeEIsQ0FDcEQsSUFEb0QsQ0FBckQ7QUFHQSxXQUFLZSxrREFBTCxHQUEwREMscUdBQTRCLENBQUNoQixJQUE3QixDQUN6RCxJQUR5RCxDQUExRDtBQUlBLFdBQUtpQiwrQkFBTCxHQUF1Q0MscUZBQWUsQ0FBQ2xCLElBQWhCLENBQXFCLElBQXJCLENBQXZDO0FBQ0EsV0FBS21CLGlDQUFMLEdBQXlDQyxpRkFBVyxDQUFDcEIsSUFBWixDQUFpQixJQUFqQixDQUF6QztBQUNBLFdBQUtxQiwrQkFBTCxHQUF1Q0MsK0VBQVMsQ0FBQ3RCLElBQVYsQ0FBZSxJQUFmLENBQXZDO0FBQ0EsV0FBS3VCLG1DQUFMLEdBQTJDQyxtRkFBYSxDQUFDeEIsSUFBZCxDQUFtQixJQUFuQixDQUEzQztBQUVBLFdBQUt5QixnQ0FBTCxHQUF3Q0Msc0ZBQWdCLENBQUMxQixJQUFqQixDQUFzQixJQUF0QixDQUF4QztBQUNBLFdBQUsyQixpQ0FBTCxHQUF5Q0MsaUZBQVcsQ0FBQzVCLElBQVosQ0FBaUIsSUFBakIsQ0FBekM7QUFDQSxXQUFLNkIsZ0NBQUwsR0FBd0NDLGdGQUFVLENBQUM5QixJQUFYLENBQWdCLElBQWhCLENBQXhDO0FBQ0EsV0FBSytCLG1DQUFMLEdBQTJDQyxtRkFBYSxDQUFDaEMsSUFBZCxDQUFtQixJQUFuQixDQUEzQztBQUNBLFdBQUtpQyw0Q0FBTCxHQUFvREMsNEZBQXNCLENBQUNsQyxJQUF2QixDQUNuRCxJQURtRCxDQUFwRDtBQUlBLFdBQUttQyx1Q0FBTCxHQUErQyxJQUEvQztBQUNBLFdBQUtDLHdDQUFMLEdBQWdELElBQWhEOztBQUVBLFVBQ0MsS0FBS2pELE9BQUwsQ0FBYWtELGVBQWIsSUFBZ0N6QyxTQUFoQyxJQUNBLEtBQUtULE9BQUwsQ0FBYWtELGVBQWIsSUFBZ0MsSUFGakMsRUFHRTtBQUNELFlBQUksT0FBTyxLQUFLbEQsT0FBTCxDQUFha0QsZUFBcEIsSUFBdUMsUUFBM0MsRUFBcUQ7QUFDcEQsZUFBSy9ELGlCQUFMLEdBQXlCLEtBQUthLE9BQUwsQ0FBYWtELGVBQXRDO0FBQ0E7QUFDRDs7QUFFRCxVQUNDLEtBQUtsRCxPQUFMLENBQWFtRCx1QkFBYixJQUF3QzFDLFNBQXhDLElBQ0EsS0FBS1QsT0FBTCxDQUFhbUQsdUJBQWIsSUFBd0MsSUFGekMsRUFHRTtBQUNELFlBQUksT0FBTyxLQUFLbkQsT0FBTCxDQUFhbUQsdUJBQXBCLElBQStDLFFBQW5ELEVBQTZEO0FBQzVELGVBQUsvRCwwQkFBTCxHQUFrQyxLQUFLWSxPQUFMLENBQWFtRCx1QkFBL0M7QUFDQTtBQUNEOztBQUVELFVBQ0MsS0FBS25ELE9BQUwsQ0FBYW9ELDRCQUFiLElBQTZDM0MsU0FBN0MsSUFDQSxLQUFLVCxPQUFMLENBQWFvRCw0QkFBYixJQUE2QyxJQUY5QyxFQUdFO0FBQ0QsWUFDQyxPQUFPLEtBQUtwRCxPQUFMLENBQWFvRCw0QkFBcEIsSUFBb0QsUUFEckQsRUFFRTtBQUNELGVBQUsvRCxnQ0FBTCxHQUF3QyxLQUFLVyxPQUFMLENBQWFvRCw0QkFBckQ7QUFDQTtBQUNEO0FBQ0Q7O0FBRUQsUUFDQyxLQUFLaEQsU0FBTCxDQUFlaUQsbUJBQWYsSUFBc0M1QyxTQUF0QyxJQUNBLEtBQUtMLFNBQUwsQ0FBZWlELG1CQUFmLElBQXNDLElBRnZDLEVBR0U7QUFDRCxXQUFLQywyQkFBTCxHQUFtQ0MsK0VBQVcsQ0FBQzFDLElBQVosQ0FBaUIsSUFBakIsQ0FBbkM7QUFDQTs7QUFFRCxRQUFJLEtBQUtiLE9BQUwsQ0FBYXdELGdCQUFiLElBQWlDLEtBQXJDLEVBQTRDO0FBQzNDLFdBQUtDLDhCQUFMLEdBQXNDQyxrRkFBYyxDQUFDN0MsSUFBZixDQUFvQixJQUFwQixDQUF0QztBQUNBLFdBQUs4QywyQ0FBTCxHQUFtREMsK0ZBQTJCLENBQUMvQyxJQUE1QixDQUNsRCxJQURrRCxDQUFuRDtBQUdBOUIsWUFBTSxDQUFDOEUsZ0JBQVAsQ0FDQyxRQURELEVBRUMsS0FBS0osOEJBRk47QUFJQTs7QUFFRCxTQUFLSyxJQUFMLENBQVUsS0FBS3pELGVBQUwsQ0FBcUIwRCxTQUEvQixFQUEwQyxLQUFLL0QsT0FBTCxDQUFhZ0UsV0FBdkQ7QUFDQTs7QUFFRGhGLGdCQUFjLENBQUNDLFNBQWYsQ0FBeUI2RSxJQUF6QixHQUFnQyxVQUFTRyxnQkFBVCxFQUEyQkQsV0FBM0IsRUFBd0M7QUFDdkUsUUFBSSxLQUFLaEUsT0FBTCxDQUFha0UsRUFBYixDQUFnQkMsT0FBaEIsQ0FBd0IsR0FBeEIsS0FBZ0MsQ0FBcEMsRUFBdUM7QUFDdEMsWUFBTSw4QkFBTjtBQUNBLEtBRkQsTUFFTztBQUNOLFdBQUtDLEtBQUwsR0FBYUMsUUFBUSxDQUFDQyxvQkFBVCxDQUE4QixNQUE5QixDQUFiO0FBQ0EsV0FBS0MsU0FBTCxHQUFpQixLQUFLdkUsT0FBTCxDQUFha0UsRUFBYixDQUFnQk0sU0FBaEIsQ0FDaEIsQ0FEZ0IsRUFFaEIsS0FBS3hFLE9BQUwsQ0FBYWtFLEVBQWIsQ0FBZ0JPLE1BRkEsQ0FBakI7QUFJQSxXQUFLQyxlQUFMLEdBQ0MsbUNBQW1DLEtBQUtILFNBRHpDO0FBRUEsV0FBS0ksR0FBTCxHQUFXTixRQUFRLENBQUNPLGNBQVQsQ0FDVixLQUFLNUUsT0FBTCxDQUFha0UsRUFBYixDQUFnQk0sU0FBaEIsQ0FBMEIsQ0FBMUIsRUFBNkIsS0FBS3hFLE9BQUwsQ0FBYWtFLEVBQWIsQ0FBZ0JPLE1BQTdDLENBRFUsQ0FBWDtBQUdBLFdBQUtMLEtBQUwsQ0FBVyxDQUFYLEVBQWNTLGtCQUFkLENBQ0MsV0FERCxFQUVDLGdCQUNDLEtBQUtILGVBRE4sR0FFQyxrREFKRjtBQU1BLFdBQUtJLGFBQUwsR0FBcUJULFFBQVEsQ0FBQ08sY0FBVCxDQUF3QixLQUFLRixlQUE3QixDQUFyQjtBQUNBOztBQUVELFNBQUtDLEdBQUwsQ0FBU0ksU0FBVCxHQUNDLDhYQUREO0FBRUEsU0FBS0Msd0JBQUwsR0FBZ0MsS0FBS0wsR0FBTCxDQUFTTSxnQkFBVCxDQUMvQiwwQkFEK0IsQ0FBaEM7QUFHQSxTQUFLQyxvQkFBTCxHQUE0QixLQUFLUCxHQUFMLENBQVNMLG9CQUFULENBQThCLE9BQTlCLENBQTVCO0FBQ0EsU0FBS2EsZUFBTCxHQUF1QixLQUFLUixHQUFMLENBQVNNLGdCQUFULENBQTBCLGlCQUExQixDQUF2QjtBQUVBLFNBQUtHLFlBQUwsR0FBb0JDLFFBQVEsQ0FDM0J0RyxNQUFNLENBQ0p1RyxnQkFERixDQUNtQixLQUFLSCxlQUFMLENBQXFCLENBQXJCLENBRG5CLEVBQzRDLElBRDVDLEVBRUVJLGdCQUZGLENBRW1CLGNBRm5CLENBRDJCLENBQTVCO0FBS0EsU0FBS0MsYUFBTCxHQUFxQkgsUUFBUSxDQUM1QnRHLE1BQU0sQ0FDSnVHLGdCQURGLENBQ21CLEtBQUtILGVBQUwsQ0FBcUIsQ0FBckIsQ0FEbkIsRUFDNEMsSUFENUMsRUFFRUksZ0JBRkYsQ0FFbUIsZUFGbkIsQ0FENEIsQ0FBN0I7QUFLQSxTQUFLRSxXQUFMLEdBQW1CSixRQUFRLENBQzFCdEcsTUFBTSxDQUNKdUcsZ0JBREYsQ0FDbUIsS0FBS0gsZUFBTCxDQUFxQixDQUFyQixDQURuQixFQUM0QyxJQUQ1QyxFQUVFSSxnQkFGRixDQUVtQixhQUZuQixDQUQwQixDQUEzQjtBQUtBLFNBQUtHLGNBQUwsR0FBc0JMLFFBQVEsQ0FDN0J0RyxNQUFNLENBQ0p1RyxnQkFERixDQUNtQixLQUFLSCxlQUFMLENBQXFCLENBQXJCLENBRG5CLEVBQzRDLElBRDVDLEVBRUVJLGdCQUZGLENBRW1CLGdCQUZuQixDQUQ2QixDQUE5QjtBQU1BLFNBQUtJLEtBQUwsR0FDQyxLQUFLUixlQUFMLENBQXFCLENBQXJCLEVBQXdCUyxXQUF4QixHQUNBLEtBQUtSLFlBREwsR0FFQSxLQUFLSSxhQUhOO0FBSUEsU0FBS0ssTUFBTCxHQUNDLEtBQUtWLGVBQUwsQ0FBcUIsQ0FBckIsRUFBd0JXLFlBQXhCLEdBQ0EsS0FBS0wsV0FETCxHQUVBLEtBQUtDLGNBSE47O0FBS0EsUUFDQyxDQUFDekIsZ0JBQWdCLElBQUl4RCxTQUFwQixJQUFpQ3dELGdCQUFnQixJQUFJLElBQXRELEtBQ0EsS0FBSzFELFlBQUwsQ0FBa0JrRSxNQUFsQixJQUE0QixDQUY3QixFQUdFO0FBQ0RSLHNCQUFnQixHQUFHLEtBQUswQixLQUF4QjtBQUNBOztBQUVELFNBQUtJLGtCQUFMLEdBQTBCLEtBQUtKLEtBQUwsR0FBYTFCLGdCQUF2Qzs7QUFFQSxRQUFJRCxXQUFXLElBQUksSUFBbkIsRUFBeUI7QUFDeEIsVUFBSXpELFlBQVksR0FBR04sSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsU0FBTCxDQUFlLEtBQUtJLFlBQXBCLENBQVgsQ0FBbkI7QUFDQSxVQUFJeUYsY0FBYyxHQUFHLEVBQXJCO0FBQ0EsVUFBSUMsUUFBUSxHQUFHMUYsWUFBWSxDQUFDa0UsTUFBNUI7O0FBQ0EsV0FBSyxJQUFJeUIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsUUFBcEIsRUFBOEJDLENBQUMsRUFBL0IsRUFBbUM7QUFDbENGLHNCQUFjLENBQUNHLElBQWYsQ0FBb0JELENBQXBCO0FBQ0EzRixvQkFBWSxDQUFDMkYsQ0FBRCxDQUFaLENBQWdCRSxLQUFoQixHQUNDN0YsWUFBWSxDQUFDMkYsQ0FBRCxDQUFaLENBQWdCRSxLQUFoQixHQUF3QixLQUFLTCxrQkFEOUI7QUFFQXhGLG9CQUFZLENBQUMyRixDQUFELENBQVosQ0FBZ0JHLE1BQWhCLEdBQ0M5RixZQUFZLENBQUMyRixDQUFELENBQVosQ0FBZ0JHLE1BQWhCLEdBQXlCLEtBQUtOLGtCQUQvQjs7QUFFQSxZQUFJeEYsWUFBWSxDQUFDMkYsQ0FBRCxDQUFaLENBQWdCRSxLQUFoQixHQUF3QixLQUFLVCxLQUFqQyxFQUF3QztBQUN2Q3BGLHNCQUFZLENBQUMyRixDQUFELENBQVosQ0FBZ0JFLEtBQWhCLEdBQXdCLEtBQUtULEtBQTdCO0FBQ0E7QUFDRDs7QUFDRCxXQUFLcEYsWUFBTCxHQUFvQixLQUFLK0YsaUNBQUwsQ0FDbkIsQ0FEbUIsRUFFbkIvRixZQUZtQixFQUduQnlGLGNBSG1CLEVBSW5CLEVBSm1CLEVBS2xCekYsWUFMRjtBQU1BLEtBcEJELE1Bb0JPO0FBQ04sVUFDQyxLQUFLRixlQUFMLENBQXFCa0csTUFBckIsSUFBK0I5RixTQUEvQixJQUNBLEtBQUtKLGVBQUwsQ0FBcUJrRyxNQUFyQixJQUErQixJQUZoQyxFQUdFO0FBQ0QsWUFDQyxPQUFPLEtBQUtsRyxlQUFMLENBQXFCa0csTUFBNUIsSUFBc0MsUUFBdEMsSUFDQSxLQUFLbEcsZUFBTCxDQUFxQmtHLE1BQXJCLEdBQThCLENBRi9CLEVBR0U7QUFDRCxlQUFLMUcsTUFBTCxHQUFjLEtBQUtRLGVBQUwsQ0FBcUJrRyxNQUFuQztBQUNBLGVBQUsxRyxNQUFMLEdBQWMsS0FBS0EsTUFBTCxHQUFjLEtBQUtrRyxrQkFBakM7QUFDQSxTQU5ELE1BTU87QUFDTixnQkFBTSw0REFBTjtBQUNBO0FBQ0QsT0FiRCxNQWFPO0FBQ04sY0FBTSw0REFBTjtBQUNBO0FBQ0Q7QUFDRCxHQTVHRCxDQTlNbUMsQ0E0VG5DO0FBRUE7QUFFQTs7O0FBRUEvRyxnQkFBYyxDQUFDQyxTQUFmLENBQXlCdUgsV0FBekIsR0FBdUMsWUFBVztBQUNqRCxRQUFJQyxRQUFRLEdBQUc7QUFDZEMsZ0JBQVUsRUFBRSxLQUFLYixNQURIO0FBRWQ5QixlQUFTLEVBQUUsS0FBSzRCLEtBRkY7QUFHZFksWUFBTSxFQUFFLEtBQUsxRyxNQUhDO0FBSWRTLHlCQUFtQixFQUFFTCxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxTQUFMLENBQWUsS0FBS0ksWUFBcEIsQ0FBWDtBQUpQLEtBQWY7QUFNQSxXQUFPa0csUUFBUDtBQUNBLEdBUkQ7O0FBVUF6SCxnQkFBYyxDQUFDQyxTQUFmLENBQXlCMEgsZ0JBQXpCLEdBQTRDLFVBQVNDLElBQVQsRUFBZTtBQUMxRCxRQUFJQSxJQUFJLElBQUksS0FBUixJQUFpQkEsSUFBSSxJQUFJLFVBQTdCLEVBQXlDO0FBQ3hDLFdBQUs3RyxzQkFBTCxHQUE4QjZHLElBQTlCO0FBQ0E7QUFDRCxHQUpELENBNVVtQyxDQWtWbkM7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBOzs7QUFFQTVILGdCQUFjLENBQUNDLFNBQWYsQ0FBeUI0SCxNQUF6QixHQUFrQyxVQUFTdEcsWUFBVCxFQUF1QnVHLEtBQUssR0FBRyxJQUEvQixFQUFxQztBQUN0RSxTQUFLQyxrQkFBTDs7QUFFQSxRQUFJeEcsWUFBWSxLQUFLRSxTQUFqQixJQUE4QkYsWUFBWSxLQUFLLElBQW5ELEVBQXlEO0FBQ3hELFVBQUlBLFlBQVksR0FBRyxLQUFLQSxZQUF4QjtBQUNBOztBQUNELFFBQUl1RyxLQUFLLElBQUksSUFBYixFQUFtQjtBQUNsQixVQUFJZixrQkFBa0IsR0FBRyxLQUFLQSxrQkFBOUI7QUFDQSxLQUZELE1BRU87QUFDTixVQUFJQSxrQkFBa0IsR0FBRyxDQUF6QjtBQUNBOztBQUVELFFBQUlpQixTQUFTLEdBQUcsQ0FBQyxvQkFBRCxDQUFoQjs7QUFDQSxRQUFJLEtBQUtoSCxPQUFMLENBQWFVLFFBQWIsSUFBeUIsSUFBN0IsRUFBbUM7QUFDbENzRyxlQUFTLENBQUNiLElBQVYsQ0FBZSw0QkFBZjtBQUNBOztBQUNELFFBQUljLGVBQWUsR0FBR0QsU0FBUyxDQUFDRSxJQUFWLENBQWUsR0FBZixDQUF0QjtBQUVBLFFBQUlDLElBQUksR0FBRyxFQUFYLENBbEJzRSxDQW9CdEU7O0FBQ0EsUUFBSUMsRUFBRSxHQUFHQyxXQUFXLENBQUNDLEdBQVosRUFBVCxDQXJCc0UsQ0FzQnRFOztBQUVBLFFBQUksQ0FBQyxLQUFLQyxRQUFMLEVBQUwsRUFBc0I7QUFDckIsVUFBSSxLQUFLdkgsT0FBTCxDQUFhd0gsUUFBYixJQUF5QixRQUE3QixFQUF1QztBQUN0QyxZQUFJdkIsUUFBUSxHQUFHMUYsWUFBWSxDQUFDa0UsTUFBNUI7O0FBQ0EsYUFBSyxJQUFJeUIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsUUFBcEIsRUFBOEJDLENBQUMsRUFBL0IsRUFBbUM7QUFDbEMzRixzQkFBWSxDQUFDMkYsQ0FBRCxDQUFaLENBQWdCRSxLQUFoQixJQUF5Qkwsa0JBQXpCOztBQUNBLGNBQUl4RixZQUFZLENBQUMyRixDQUFELENBQVosQ0FBZ0JFLEtBQWhCLEdBQXdCLEtBQUtULEtBQWpDLEVBQXdDO0FBQ3ZDcEYsd0JBQVksQ0FBQzJGLENBQUQsQ0FBWixDQUFnQkUsS0FBaEIsR0FBd0IsS0FBS1QsS0FBN0I7QUFDQTs7QUFDRCxjQUFJOEIsS0FBSyxHQUNSLG1CQUNBUixlQURBLEdBRUEsa0JBRkEsR0FHQWYsQ0FIQSxHQUlBLElBTEQ7QUFNQSxjQUFJd0IsT0FBTyxHQUNWLHFDQUNDbkgsWUFBWSxDQUFDMkYsQ0FBRCxDQUFaLENBQWdCeUIsQ0FBaEIsSUFBcUI1QixrQkFEdEIsSUFFQSxNQUhEO0FBSUEsY0FBSTZCLE9BQU8sR0FDVixDQUFDckgsWUFBWSxDQUFDMkYsQ0FBRCxDQUFaLENBQWdCMkIsQ0FBaEIsSUFBcUI5QixrQkFBdEIsSUFBNEMsT0FEN0M7QUFFQSxjQUFJK0IsT0FBTyxHQUFHLGFBQWF2SCxZQUFZLENBQUMyRixDQUFELENBQVosQ0FBZ0JFLEtBQTdCLEdBQXFDLE1BQW5EO0FBQ0EsY0FBSTJCLE9BQU8sR0FDVixlQUNDeEgsWUFBWSxDQUFDMkYsQ0FBRCxDQUFaLENBQWdCRyxNQUFoQixJQUEwQk4sa0JBRDNCLElBRUEsTUFIRDtBQUlBLGNBQUlpQyxPQUFPLEdBQUcsSUFBZDtBQUVBLGNBQUlDLEtBQUssR0FBR1AsT0FBTyxHQUFHRSxPQUFWLEdBQW9CRSxPQUFwQixHQUE4QkMsT0FBOUIsR0FBd0NDLE9BQXBEO0FBRUEsY0FBSUUsU0FBUyxHQUFHLE9BQWhCO0FBQ0EsY0FBSUMsT0FBTyxHQUFHLFFBQWQ7QUFDQSxjQUFJQyxRQUFRLEdBQUcsS0FBS2hJLFNBQUwsQ0FBZWlJLHlCQUFmLENBQ2RuQyxDQURjLEVBRWQzRixZQUFZLENBQUMyRixDQUFELENBQVosQ0FBZ0JFLEtBRkYsRUFHZDdGLFlBQVksQ0FBQzJGLENBQUQsQ0FBWixDQUFnQkcsTUFIRixFQUlkLFFBSmMsQ0FBZjtBQU9BLGNBQUlpQyxJQUFJLEdBQUdKLFNBQVMsR0FBR0UsUUFBWixHQUF1QkQsT0FBbEM7QUFDQSxjQUFJSSxHQUFHLEdBQUcsUUFBVjtBQUVBLGNBQUlDLElBQUksR0FBR2YsS0FBSyxHQUFHUSxLQUFSLEdBQWdCSyxJQUFoQixHQUF1QkMsR0FBbEM7QUFFQXBCLGNBQUksQ0FBQ2hCLElBQUwsQ0FBVXFDLElBQVY7QUFDQTtBQUNELE9BNUNELE1BNENPLElBQUksS0FBS3hJLE9BQUwsQ0FBYXdILFFBQWIsSUFBeUIsTUFBN0IsRUFBcUM7QUFDM0MsYUFBS3hDLHdCQUFMLENBQThCLENBQTlCLEVBQWlDeUQsV0FBakMsQ0FDQyxLQUFLdEQsZUFBTCxDQUFxQixDQUFyQixDQUREO0FBSUEsWUFBSWMsUUFBUSxHQUFHMUYsWUFBWSxDQUFDa0UsTUFBNUI7O0FBQ0EsYUFBSyxJQUFJeUIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsUUFBcEIsRUFBOEJDLENBQUMsRUFBL0IsRUFBbUM7QUFDbEMzRixzQkFBWSxDQUFDMkYsQ0FBRCxDQUFaLENBQWdCRSxLQUFoQixJQUF5Qkwsa0JBQXpCOztBQUNBLGNBQUl4RixZQUFZLENBQUMyRixDQUFELENBQVosQ0FBZ0JFLEtBQWhCLEdBQXdCLEtBQUtULEtBQWpDLEVBQXdDO0FBQ3ZDcEYsd0JBQVksQ0FBQzJGLENBQUQsQ0FBWixDQUFnQkUsS0FBaEIsR0FBd0IsS0FBS1QsS0FBN0I7QUFDQTs7QUFDRCxjQUFJK0MsR0FBRyxHQUFHckUsUUFBUSxDQUFDc0UsYUFBVCxDQUF1QixLQUF2QixDQUFWO0FBQ0EsY0FBSUMsU0FBUyxHQUFHdkUsUUFBUSxDQUFDd0UsZUFBVCxDQUF5QixZQUF6QixDQUFoQjtBQUNBRCxtQkFBUyxDQUFDRSxLQUFWLEdBQWtCNUMsQ0FBbEI7QUFDQXdDLGFBQUcsQ0FBQ0ssZ0JBQUosQ0FBcUJILFNBQXJCOztBQUNBLGNBQUk1QixTQUFTLENBQUN2QyxNQUFWLEdBQW1CLENBQXZCLEVBQTBCO0FBQ3pCaUUsZUFBRyxDQUFDMUIsU0FBSixDQUFjZ0MsR0FBZCxDQUFrQmhDLFNBQVMsQ0FBQyxDQUFELENBQTNCO0FBQ0EwQixlQUFHLENBQUMxQixTQUFKLENBQWNnQyxHQUFkLENBQWtCaEMsU0FBUyxDQUFDLENBQUQsQ0FBM0I7QUFDQSxXQUhELE1BR087QUFDTjBCLGVBQUcsQ0FBQzFCLFNBQUosQ0FBY2dDLEdBQWQsQ0FBa0JoQyxTQUFTLENBQUMsQ0FBRCxDQUEzQjtBQUNBOztBQUNEMEIsYUFBRyxDQUFDVCxLQUFKLENBQVVnQixTQUFWLEdBQ0MsZ0JBQ0MxSSxZQUFZLENBQUMyRixDQUFELENBQVosQ0FBZ0J5QixDQUFoQixJQUFxQjVCLGtCQUR0QixJQUVBLE1BRkEsSUFHQ3hGLFlBQVksQ0FBQzJGLENBQUQsQ0FBWixDQUFnQjJCLENBQWhCLElBQXFCOUIsa0JBSHRCLElBSUEsS0FMRDtBQU1BMkMsYUFBRyxDQUFDVCxLQUFKLENBQVU3QixLQUFWLEdBQWtCN0YsWUFBWSxDQUFDMkYsQ0FBRCxDQUFaLENBQWdCRSxLQUFoQixHQUF3QixJQUExQztBQUNBc0MsYUFBRyxDQUFDVCxLQUFKLENBQVU1QixNQUFWLEdBQ0MsQ0FBQzlGLFlBQVksQ0FBQzJGLENBQUQsQ0FBWixDQUFnQkcsTUFBaEIsSUFBMEJOLGtCQUEzQixJQUFpRCxJQURsRDtBQUdBLGNBQUlxQyxRQUFRLEdBQUcsS0FBS2hJLFNBQUwsQ0FBZWlJLHlCQUFmLENBQ2RuQyxDQURjLEVBRWQzRixZQUFZLENBQUMyRixDQUFELENBQVosQ0FBZ0JFLEtBRkYsRUFHZDdGLFlBQVksQ0FBQzJGLENBQUQsQ0FBWixDQUFnQkcsTUFIRixFQUlkLFFBSmMsQ0FBZjs7QUFNQSxjQUFJLE9BQU8rQixRQUFQLElBQW1CLFFBQXZCLEVBQWlDO0FBQ2hDTSxlQUFHLENBQUMzRCxTQUFKLEdBQWdCcUQsUUFBaEI7QUFDQSxXQUZELE1BRU87QUFDTk0sZUFBRyxDQUFDUSxXQUFKLENBQWdCZCxRQUFoQjtBQUNBOztBQUNELGVBQUtqRCxlQUFMLENBQXFCLENBQXJCLEVBQXdCK0QsV0FBeEIsQ0FBb0NSLEdBQXBDO0FBQ0E7O0FBQ0QsYUFBSzFELHdCQUFMLENBQThCLENBQTlCLEVBQWlDa0UsV0FBakMsQ0FDQyxLQUFLL0QsZUFBTCxDQUFxQixDQUFyQixDQUREO0FBR0E7QUFDRCxLQTdGRCxNQTZGTztBQUNOLFdBQUtnRSxzQkFBTCxHQUE4QkMscUVBQWMsQ0FBQ0MsSUFBZixDQUFvQixJQUFwQixFQUEwQixJQUExQixDQUE5Qjs7QUFDQSxVQUFJLEtBQUtySixPQUFMLENBQWF3SCxRQUFiLElBQXlCLFFBQTdCLEVBQXVDO0FBQ3RDLFlBQUl2QixRQUFRLEdBQUcxRixZQUFZLENBQUNrRSxNQUE1Qjs7QUFDQSxhQUFLLElBQUl5QixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxRQUFwQixFQUE4QkMsQ0FBQyxFQUEvQixFQUFtQztBQUNsQzNGLHNCQUFZLENBQUMyRixDQUFELENBQVosQ0FBZ0JFLEtBQWhCLElBQXlCTCxrQkFBekI7QUFDQXhGLHNCQUFZLENBQUMyRixDQUFELENBQVosQ0FBZ0JHLE1BQWhCLElBQTBCTixrQkFBMUI7QUFDQXhGLHNCQUFZLENBQUMyRixDQUFELENBQVosQ0FBZ0J5QixDQUFoQixJQUFxQjVCLGtCQUFyQjtBQUNBeEYsc0JBQVksQ0FBQzJGLENBQUQsQ0FBWixDQUFnQjJCLENBQWhCLElBQXFCOUIsa0JBQXJCOztBQUNBLGNBQUl4RixZQUFZLENBQUMyRixDQUFELENBQVosQ0FBZ0JFLEtBQWhCLEdBQXdCLEtBQUtULEtBQWpDLEVBQXdDO0FBQ3ZDcEYsd0JBQVksQ0FBQzJGLENBQUQsQ0FBWixDQUFnQkUsS0FBaEIsR0FBd0IsS0FBS1QsS0FBN0I7QUFDQTs7QUFDRCxjQUFJOEIsS0FBSyxHQUNSLHFEQUNBdkIsQ0FEQSxHQUVBLElBSEQ7QUFJQSxjQUFJd0IsT0FBTyxHQUNWLG9DQUFvQyxDQUFwQyxHQUF3QyxNQUR6QztBQUVBLGNBQUlFLE9BQU8sR0FDVixDQUFDLEtBQUtqQyxLQUFMLEdBQWEsS0FBSzdGLG1CQUFsQixHQUNBd0osdUVBQWdCLENBQUNELElBQWpCLENBQ0MsSUFERCxFQUVDLEtBQUtGLHNCQUFMLENBQTRCSSxHQUE1QixDQUFnQ3JELENBQWhDLENBRkQsQ0FERCxJQUtDLEtBQUtpRCxzQkFBTCxDQUE0QkksR0FBNUIsQ0FBZ0NyRCxDQUFoQyxDQUxELEdBTUEsT0FQRDtBQVFBLGNBQUk0QixPQUFPLEdBQUcsYUFBYSxLQUFLbkMsS0FBbEIsR0FBMEIsTUFBeEM7QUFDQSxjQUFJb0MsT0FBTyxHQUNWLGNBQ0EsS0FBS3BDLEtBQUwsR0FBYSxLQUFLN0YsbUJBRGxCLEdBRUEsTUFIRDtBQUlBLGNBQUlrSSxPQUFPLEdBQUcsSUFBZDtBQUVBLGNBQUlDLEtBQUssR0FBR1AsT0FBTyxHQUFHRSxPQUFWLEdBQW9CRSxPQUFwQixHQUE4QkMsT0FBOUIsR0FBd0NDLE9BQXBEO0FBRUEsY0FBSUUsU0FBUyxHQUFHLE9BQWhCO0FBQ0EsY0FBSUMsT0FBTyxHQUFHLFFBQWQ7QUFDQSxjQUFJQyxRQUFRLEdBQUcsS0FBS2hJLFNBQUwsQ0FBZWlJLHlCQUFmLENBQ2RuQyxDQURjLEVBRWQsS0FBS1AsS0FGUyxFQUdkLEtBQUtBLEtBQUwsR0FBYSxLQUFLN0YsbUJBSEosRUFJZCxRQUpjLENBQWY7QUFPQSxjQUFJd0ksSUFBSSxHQUFHSixTQUFTLEdBQUdFLFFBQVosR0FBdUJELE9BQWxDO0FBQ0EsY0FBSUksR0FBRyxHQUFHLFFBQVY7QUFFQSxjQUFJQyxJQUFJLEdBQUdmLEtBQUssR0FBR1EsS0FBUixHQUFnQkssSUFBaEIsR0FBdUJDLEdBQWxDO0FBRUFwQixjQUFJLENBQUNoQixJQUFMLENBQVVxQyxJQUFWO0FBQ0E7QUFDRCxPQWpERCxNQWlETyxJQUFJLEtBQUt4SSxPQUFMLENBQWF3SCxRQUFiLElBQXlCLE1BQTdCLEVBQXFDO0FBQzNDLGFBQUt4Qyx3QkFBTCxDQUE4QixDQUE5QixFQUFpQ3lELFdBQWpDLENBQ0MsS0FBS3RELGVBQUwsQ0FBcUIsQ0FBckIsQ0FERDtBQUlBLFlBQUljLFFBQVEsR0FBRzFGLFlBQVksQ0FBQ2tFLE1BQTVCOztBQUNBLGFBQUssSUFBSXlCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELFFBQXBCLEVBQThCQyxDQUFDLEVBQS9CLEVBQW1DO0FBQ2xDM0Ysc0JBQVksQ0FBQzJGLENBQUQsQ0FBWixDQUFnQkUsS0FBaEIsSUFBeUJMLGtCQUF6QjtBQUNBeEYsc0JBQVksQ0FBQzJGLENBQUQsQ0FBWixDQUFnQkcsTUFBaEIsSUFBMEJOLGtCQUExQjtBQUNBeEYsc0JBQVksQ0FBQzJGLENBQUQsQ0FBWixDQUFnQnlCLENBQWhCLElBQXFCNUIsa0JBQXJCO0FBQ0F4RixzQkFBWSxDQUFDMkYsQ0FBRCxDQUFaLENBQWdCMkIsQ0FBaEIsSUFBcUI5QixrQkFBckI7O0FBQ0EsY0FBSXhGLFlBQVksQ0FBQzJGLENBQUQsQ0FBWixDQUFnQkUsS0FBaEIsR0FBd0IsS0FBS1QsS0FBakMsRUFBd0M7QUFDdkNwRix3QkFBWSxDQUFDMkYsQ0FBRCxDQUFaLENBQWdCRSxLQUFoQixHQUF3QixLQUFLVCxLQUE3QjtBQUNBOztBQUNELGNBQUkrQyxHQUFHLEdBQUdyRSxRQUFRLENBQUNzRSxhQUFULENBQXVCLEtBQXZCLENBQVY7QUFDQSxjQUFJQyxTQUFTLEdBQUd2RSxRQUFRLENBQUN3RSxlQUFULENBQXlCLFlBQXpCLENBQWhCO0FBQ0FELG1CQUFTLENBQUNFLEtBQVYsR0FBa0I1QyxDQUFsQjtBQUNBd0MsYUFBRyxDQUFDSyxnQkFBSixDQUFxQkgsU0FBckI7QUFDQUYsYUFBRyxDQUFDMUIsU0FBSixDQUFjZ0MsR0FBZCxDQUFrQixvQkFBbEI7QUFFQU4sYUFBRyxDQUFDVCxLQUFKLENBQVVnQixTQUFWLEdBQ0MsZUFDQSxDQURBLEdBRUEsTUFGQSxHQUdBLENBQUMsS0FBS3RELEtBQUwsR0FBYSxLQUFLN0YsbUJBQWxCLEdBQ0F3Six1RUFBZ0IsQ0FBQ0QsSUFBakIsQ0FDQyxJQURELEVBRUMsS0FBS0Ysc0JBQUwsQ0FBNEJJLEdBQTVCLENBQWdDckQsQ0FBaEMsQ0FGRCxDQURELElBS0MsS0FBS2lELHNCQUFMLENBQTRCSSxHQUE1QixDQUFnQ3JELENBQWhDLENBUkQsR0FTQSxLQVZEO0FBV0F3QyxhQUFHLENBQUNULEtBQUosQ0FBVTdCLEtBQVYsR0FBa0IsS0FBS1QsS0FBTCxHQUFhLElBQS9CO0FBQ0ErQyxhQUFHLENBQUNULEtBQUosQ0FBVTVCLE1BQVYsR0FDQyxLQUFLVixLQUFMLEdBQWEsS0FBSzdGLG1CQUFsQixHQUF3QyxJQUR6QztBQUdBLGNBQUlzSSxRQUFRLEdBQUcsS0FBS2hJLFNBQUwsQ0FBZWlJLHlCQUFmLENBQ2RuQyxDQURjLEVBRWQsS0FBS1AsS0FGUyxFQUdkLEtBQUtBLEtBQUwsR0FBYSxLQUFLN0YsbUJBSEosRUFJZCxRQUpjLENBQWY7O0FBTUEsY0FBSSxPQUFPc0ksUUFBUCxJQUFtQixRQUF2QixFQUFpQztBQUNoQ00sZUFBRyxDQUFDM0QsU0FBSixHQUFnQnFELFFBQWhCO0FBQ0EsV0FGRCxNQUVPO0FBQ05NLGVBQUcsQ0FBQ1EsV0FBSixDQUFnQmQsUUFBaEI7QUFDQTs7QUFDRCxlQUFLakQsZUFBTCxDQUFxQixDQUFyQixFQUF3QitELFdBQXhCLENBQW9DUixHQUFwQztBQUNBOztBQUNELGFBQUsxRCx3QkFBTCxDQUE4QixDQUE5QixFQUFpQ2tFLFdBQWpDLENBQ0MsS0FBSy9ELGVBQUwsQ0FBcUIsQ0FBckIsQ0FERDtBQUdBO0FBQ0Q7O0FBRUQsUUFBSSxLQUFLbkYsT0FBTCxDQUFhd0gsUUFBYixJQUF5QixRQUE3QixFQUF1QztBQUN0QyxXQUFLckMsZUFBTCxDQUFxQixDQUFyQixFQUF3QkosU0FBeEIsR0FBb0NvQyxJQUFJLENBQUNELElBQUwsQ0FBVSxFQUFWLENBQXBDO0FBQ0EsS0FoT3FFLENBa090RTs7O0FBQ0EsUUFBSXNDLEVBQUUsR0FBR25DLFdBQVcsQ0FBQ0MsR0FBWixFQUFUO0FBQ0FtQyxXQUFPLENBQUNDLEdBQVIsQ0FBWXRDLEVBQVo7QUFDQXFDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixFQUFaO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixFQUFFLEdBQUdwQyxFQUFqQixFQXRPc0UsQ0F1T3RFOztBQUVBLFNBQUt1QyxvQkFBTCxHQUE0QixLQUFLeEUsZUFBTCxDQUFxQixDQUFyQixFQUF3QkYsZ0JBQXhCLENBQzNCLHFCQUQyQixDQUE1QjtBQUlBLFNBQUsyRSxvQkFBTCxDQUEwQnJKLFlBQTFCO0FBRUEsU0FBS3NKLG1CQUFMO0FBQ0EsU0FBS0MsZ0JBQUw7O0FBRUEsUUFDQyxLQUFLMUosU0FBTCxDQUFlMkosY0FBZixJQUFpQ3RKLFNBQWpDLElBQ0EsS0FBS0wsU0FBTCxDQUFlMkosY0FBZixJQUFpQyxJQUZsQyxFQUdFO0FBQ0QsV0FBSzNKLFNBQUwsQ0FBZTJKLGNBQWY7QUFDQTtBQUNELEdBeFBEOztBQTBQQS9LLGdCQUFjLENBQUNDLFNBQWYsQ0FBeUIySyxvQkFBekIsR0FBZ0QsVUFBU3JKLFlBQVQsRUFBdUI7QUFDdEUsUUFBSSxLQUFLeUosOEJBQUwsSUFBdUN2SixTQUEzQyxFQUFzRDtBQUNyRCxVQUFJd0YsUUFBUSxHQUFHLEtBQUsxRixZQUFMLENBQWtCa0UsTUFBakM7O0FBQ0EsV0FBSyxJQUFJeUIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsUUFBcEIsRUFBOEJDLENBQUMsRUFBL0IsRUFBbUM7QUFDbEMsYUFBSzhELDhCQUFMLENBQW9DLENBQXBDLEVBQXVDQyxVQUF2QyxDQUFrRHhCLFdBQWxELENBQ0MsS0FBS3VCLDhCQUFMLENBQW9DLENBQXBDLENBREQ7QUFHQTs7QUFDRCxXQUFLQSw4QkFBTCxHQUFzQ3ZKLFNBQXRDO0FBQ0EsV0FBS3lKLDhCQUFMLEdBQXNDekosU0FBdEM7QUFDQTs7QUFFRCxRQUFJMEosUUFBUSxHQUFHLEVBQWY7QUFDQSxRQUFJQyxRQUFRLEdBQUcsRUFBZjs7QUFFQSxRQUFJLENBQUMsS0FBSzdDLFFBQUwsRUFBTCxFQUFzQjtBQUNyQixVQUFJdEIsUUFBUSxHQUFHMUYsWUFBWSxDQUFDa0UsTUFBNUI7O0FBQ0EsV0FBSyxJQUFJeUIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsUUFBcEIsRUFBOEJDLENBQUMsRUFBL0IsRUFBbUM7QUFDbEMsWUFBSW1FLFNBQVMsR0FDWiwrREFDQW5FLENBREEsR0FFQSxJQUhEO0FBSUEsWUFBSWdDLFNBQVMsR0FDWiwrREFDQWhDLENBREEsR0FFQSxJQUhEO0FBSUEsWUFBSXdCLE9BQU8sR0FDVixvQ0FDQW5ILFlBQVksQ0FBQzJGLENBQUQsQ0FBWixDQUFnQnlCLENBRGhCLEdBRUEsTUFIRDtBQUlBLFlBQUlDLE9BQU8sR0FBR3JILFlBQVksQ0FBQzJGLENBQUQsQ0FBWixDQUFnQjJCLENBQWhCLEdBQW9CLE9BQWxDO0FBQ0EsWUFBSUMsT0FBTyxHQUFHLGFBQWF2SCxZQUFZLENBQUMyRixDQUFELENBQVosQ0FBZ0JFLEtBQTdCLEdBQXFDLE1BQW5EO0FBQ0EsWUFBSTJCLE9BQU8sR0FBRyxjQUFjeEgsWUFBWSxDQUFDMkYsQ0FBRCxDQUFaLENBQWdCRyxNQUE5QixHQUF1QyxNQUFyRDtBQUNBLFlBQUkyQixPQUFPLEdBQUcsSUFBZDtBQUVBLFlBQUlDLEtBQUssR0FBR1AsT0FBTyxHQUFHRSxPQUFWLEdBQW9CRSxPQUFwQixHQUE4QkMsT0FBOUIsR0FBd0NDLE9BQXBEO0FBRUEsWUFBSU8sR0FBRyxHQUFHLFFBQVY7QUFFQSxZQUFJK0IsUUFBUSxHQUFHRCxTQUFTLEdBQUdwQyxLQUFaLEdBQW9CTSxHQUFuQztBQUNBLFlBQUlnQyxRQUFRLEdBQUdyQyxTQUFTLEdBQUdELEtBQVosR0FBb0JNLEdBQW5DO0FBRUE0QixnQkFBUSxDQUFDaEUsSUFBVCxDQUFjbUUsUUFBZDtBQUNBRixnQkFBUSxDQUFDakUsSUFBVCxDQUFjb0UsUUFBZDtBQUNBO0FBQ0QsS0E5QkQsTUE4Qk87QUFDTixVQUFJdEUsUUFBUSxHQUFHMUYsWUFBWSxDQUFDa0UsTUFBNUI7O0FBQ0EsV0FBSyxJQUFJeUIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsUUFBcEIsRUFBOEJDLENBQUMsRUFBL0IsRUFBbUM7QUFDbEMsWUFBSW1FLFNBQVMsR0FDWiwrREFDQW5FLENBREEsR0FFQSxJQUhEO0FBSUEsWUFBSWdDLFNBQVMsR0FDWiwrREFDQWhDLENBREEsR0FFQSxJQUhEO0FBSUEsWUFBSXdCLE9BQU8sR0FBRyxvQ0FBb0MsQ0FBcEMsR0FBd0MsTUFBdEQ7QUFDQSxZQUFJRSxPQUFPLEdBQ1YsQ0FBQyxLQUFLakMsS0FBTCxHQUFhLEtBQUs3RixtQkFBbEIsR0FDQXdKLHVFQUFnQixDQUFDRCxJQUFqQixDQUNDLElBREQsRUFFQyxLQUFLRixzQkFBTCxDQUE0QkksR0FBNUIsQ0FBZ0NyRCxDQUFoQyxDQUZELENBREQsSUFLQyxLQUFLaUQsc0JBQUwsQ0FBNEJJLEdBQTVCLENBQWdDckQsQ0FBaEMsQ0FMRCxHQU1BLE9BUEQ7QUFRQSxZQUFJNEIsT0FBTyxHQUFHLGFBQWEsS0FBS25DLEtBQWxCLEdBQTBCLE1BQXhDO0FBQ0EsWUFBSW9DLE9BQU8sR0FDVixjQUNBLEtBQUtwQyxLQUFMLEdBQWEsS0FBSzdGLG1CQURsQixHQUVBLE1BSEQ7QUFJQSxZQUFJa0ksT0FBTyxHQUFHLGNBQWMsS0FBS25JLE1BQW5CLEdBQTRCLE9BQTFDO0FBRUEsWUFBSW9JLEtBQUssR0FBR1AsT0FBTyxHQUFHRSxPQUFWLEdBQW9CRSxPQUFwQixHQUE4QkMsT0FBOUIsR0FBd0NDLE9BQXBEO0FBRUEsWUFBSU8sR0FBRyxHQUFHLFFBQVY7QUFFQSxZQUFJK0IsUUFBUSxHQUFHRCxTQUFTLEdBQUdwQyxLQUFaLEdBQW9CTSxHQUFuQztBQUNBLFlBQUlnQyxRQUFRLEdBQUdyQyxTQUFTLEdBQUdELEtBQVosR0FBb0JNLEdBQW5DO0FBRUE0QixnQkFBUSxDQUFDaEUsSUFBVCxDQUFjbUUsUUFBZDtBQUNBRixnQkFBUSxDQUFDakUsSUFBVCxDQUFjb0UsUUFBZDtBQUNBO0FBQ0Q7O0FBQ0QsUUFBSUMsdUJBQXVCLEdBQzFCLCtDQUREO0FBRUEsUUFBSUMsK0JBQStCLEdBQ2xDLHVEQUREO0FBRUEsUUFBSUMsMEJBQTBCLEdBQzdCLGtEQUREO0FBRUEsUUFBSUMscUNBQXFDLEdBQ3hDLDZEQUREO0FBRUFSLFlBQVEsQ0FBQ2hFLElBQVQsQ0FBY3FFLHVCQUFkO0FBQ0FMLFlBQVEsQ0FBQ2hFLElBQVQsQ0FBY3NFLCtCQUFkO0FBQ0FOLFlBQVEsQ0FBQ2hFLElBQVQsQ0FBY3VFLDBCQUFkO0FBQ0FQLFlBQVEsQ0FBQ2hFLElBQVQsQ0FBY3dFLHFDQUFkO0FBRUEsU0FBSzdGLGFBQUwsQ0FBbUJDLFNBQW5CLEdBQStCcUYsUUFBUSxDQUFDbEQsSUFBVCxDQUFjLEVBQWQsQ0FBL0I7QUFDQSxTQUFLL0IsZUFBTCxDQUFxQixDQUFyQixFQUF3Qk4sa0JBQXhCLENBQ0MsV0FERCxFQUVDc0YsUUFBUSxDQUFDakQsSUFBVCxDQUFjLEVBQWQsQ0FGRDtBQUlBLFNBQUs4Qyw4QkFBTCxHQUFzQyxLQUFLN0UsZUFBTCxDQUFxQixDQUFyQixFQUF3QnlGLHNCQUF4QixDQUNyQyw4QkFEcUMsQ0FBdEM7QUFHQSxTQUFLViw4QkFBTCxHQUFzQyxLQUFLcEYsYUFBTCxDQUFtQjhGLHNCQUFuQixDQUNyQyw4QkFEcUMsQ0FBdEM7QUFHQSxTQUFLQyx3QkFBTCxHQUFnQyxLQUFLMUYsZUFBTCxDQUFxQixDQUFyQixFQUF3QnlGLHNCQUF4QixDQUMvQix5QkFEK0IsQ0FBaEM7QUFHQSxTQUFLRSxnQ0FBTCxHQUF3QyxLQUFLM0YsZUFBTCxDQUFxQixDQUFyQixFQUF3QnlGLHNCQUF4QixDQUN2QyxpQ0FEdUMsQ0FBeEM7QUFHQSxTQUFLRywyQkFBTCxHQUFtQyxLQUFLNUYsZUFBTCxDQUFxQixDQUFyQixFQUF3QnlGLHNCQUF4QixDQUNsQyw0QkFEa0MsQ0FBbkM7QUFHQSxTQUFLSSxzQ0FBTCxHQUE4QyxLQUFLN0YsZUFBTCxDQUFxQixDQUFyQixFQUF3QnlGLHNCQUF4QixDQUM3Qyx1Q0FENkMsQ0FBOUM7QUFHQSxHQXZIRDs7QUF5SEE1TCxnQkFBYyxDQUFDQyxTQUFmLENBQXlCZ00sV0FBekIsR0FBdUMsVUFDdENDLEtBRHNDLEVBRXRDcEUsS0FBSyxHQUFHLElBRjhCLEVBR3RDcUUsV0FBVyxHQUFHLFVBSHdCLEVBSXJDO0FBQ0QsU0FBS3BFLGtCQUFMO0FBQ0EsUUFBSXFFLFNBQVMsR0FBRyxLQUFLakcsZUFBTCxDQUFxQixDQUFyQixFQUF3QmlHLFNBQXhDOztBQUNBLFFBQUl0RSxLQUFLLElBQUksSUFBYixFQUFtQjtBQUNsQixVQUFJZixrQkFBa0IsR0FBRyxLQUFLQSxrQkFBOUI7QUFDQSxLQUZELE1BRU87QUFDTixVQUFJQSxrQkFBa0IsR0FBRyxDQUF6QjtBQUNBOztBQUVELFFBQUlpQixTQUFTLEdBQUcsQ0FBQyxvQkFBRCxDQUFoQjs7QUFDQSxRQUFJLEtBQUtoSCxPQUFMLENBQWFVLFFBQWIsSUFBeUIsSUFBN0IsRUFBbUM7QUFDbENzRyxlQUFTLENBQUNiLElBQVYsQ0FBZSw0QkFBZjtBQUNBOztBQUVELFFBQUlnQixJQUFJLEdBQUcsRUFBWCxDQWRDLENBZ0JEOztBQUNBLFFBQUlDLEVBQUUsR0FBR0MsV0FBVyxDQUFDQyxHQUFaLEVBQVQsQ0FqQkMsQ0FrQkQ7O0FBQ0EsUUFBSSxDQUFDLEtBQUtDLFFBQUwsRUFBTCxFQUFzQjtBQUNyQixXQUFLdkMsd0JBQUwsQ0FBOEIsQ0FBOUIsRUFBaUN5RCxXQUFqQyxDQUNDLEtBQUt0RCxlQUFMLENBQXFCLENBQXJCLENBREQ7QUFHQSxVQUFJYyxRQUFRLEdBQUdpRixLQUFLLENBQUN6RyxNQUFyQjs7QUFDQSxXQUFLLElBQUl5QixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxRQUFwQixFQUE4QkMsQ0FBQyxFQUEvQixFQUFtQztBQUNsQyxhQUFLM0YsWUFBTCxDQUFrQjJLLEtBQUssQ0FBQ2hGLENBQUQsQ0FBdkIsRUFBNEJFLEtBQTVCLElBQXFDTCxrQkFBckM7O0FBQ0EsWUFBSSxLQUFLeEYsWUFBTCxDQUFrQjJLLEtBQUssQ0FBQ2hGLENBQUQsQ0FBdkIsRUFBNEJFLEtBQTVCLEdBQW9DLEtBQUtULEtBQTdDLEVBQW9EO0FBQ25ELGVBQUtwRixZQUFMLENBQWtCMkssS0FBSyxDQUFDaEYsQ0FBRCxDQUF2QixFQUE0QkUsS0FBNUIsR0FBb0MsS0FBS1QsS0FBekM7QUFDQTs7QUFDRCxZQUFJK0MsR0FBRyxHQUFHckUsUUFBUSxDQUFDc0UsYUFBVCxDQUF1QixLQUF2QixDQUFWO0FBQ0EsWUFBSUMsU0FBUyxHQUFHdkUsUUFBUSxDQUFDd0UsZUFBVCxDQUF5QixZQUF6QixDQUFoQjtBQUNBRCxpQkFBUyxDQUFDRSxLQUFWLEdBQWtCb0MsS0FBSyxDQUFDaEYsQ0FBRCxDQUF2QjtBQUNBd0MsV0FBRyxDQUFDSyxnQkFBSixDQUFxQkgsU0FBckI7O0FBRUEsWUFBSTVCLFNBQVMsQ0FBQ3ZDLE1BQVYsR0FBbUIsQ0FBdkIsRUFBMEI7QUFDekJpRSxhQUFHLENBQUMxQixTQUFKLENBQWNnQyxHQUFkLENBQWtCaEMsU0FBUyxDQUFDLENBQUQsQ0FBM0I7QUFDQTBCLGFBQUcsQ0FBQzFCLFNBQUosQ0FBY2dDLEdBQWQsQ0FBa0JoQyxTQUFTLENBQUMsQ0FBRCxDQUEzQjtBQUNBLFNBSEQsTUFHTztBQUNOMEIsYUFBRyxDQUFDMUIsU0FBSixDQUFjZ0MsR0FBZCxDQUFrQmhDLFNBQVMsQ0FBQyxDQUFELENBQTNCO0FBQ0E7O0FBRUQwQixXQUFHLENBQUNULEtBQUosQ0FBVWdCLFNBQVYsR0FDQyxnQkFDQyxLQUFLMUksWUFBTCxDQUFrQjJLLEtBQUssQ0FBQ2hGLENBQUQsQ0FBdkIsRUFBNEJ5QixDQUE1QixJQUFpQzVCLGtCQURsQyxJQUVBLE1BRkEsSUFHQyxLQUFLeEYsWUFBTCxDQUFrQjJLLEtBQUssQ0FBQ2hGLENBQUQsQ0FBdkIsRUFBNEIyQixDQUE1QixJQUFpQzlCLGtCQUhsQyxJQUlBLEtBTEQ7QUFNQTJDLFdBQUcsQ0FBQ1QsS0FBSixDQUFVN0IsS0FBVixHQUFrQixLQUFLN0YsWUFBTCxDQUFrQjJLLEtBQUssQ0FBQ2hGLENBQUQsQ0FBdkIsRUFBNEJFLEtBQTVCLEdBQW9DLElBQXREO0FBQ0FzQyxXQUFHLENBQUNULEtBQUosQ0FBVTVCLE1BQVYsR0FDQyxDQUFDLEtBQUs5RixZQUFMLENBQWtCMkssS0FBSyxDQUFDaEYsQ0FBRCxDQUF2QixFQUE0QkcsTUFBNUIsSUFBc0NOLGtCQUF2QyxJQUNBLElBRkQ7QUFJQSxZQUFJcUMsUUFBUSxHQUFHLEtBQUtoSSxTQUFMLENBQWVpSSx5QkFBZixDQUNkNkMsS0FBSyxDQUFDaEYsQ0FBRCxDQURTLEVBRWQsS0FBSzNGLFlBQUwsQ0FBa0IySyxLQUFLLENBQUNoRixDQUFELENBQXZCLEVBQTRCRSxLQUZkLEVBR2QsS0FBSzdGLFlBQUwsQ0FBa0IySyxLQUFLLENBQUNoRixDQUFELENBQXZCLEVBQTRCRyxNQUhkLEVBSWQ4RSxXQUpjLENBQWY7O0FBTUEsWUFBSSxPQUFPL0MsUUFBUCxJQUFtQixRQUF2QixFQUFpQztBQUNoQ00sYUFBRyxDQUFDM0QsU0FBSixHQUFnQnFELFFBQWhCO0FBQ0EsU0FGRCxNQUVPO0FBQ05NLGFBQUcsQ0FBQ1EsV0FBSixDQUFnQmQsUUFBaEI7QUFDQTs7QUFFRCxZQUNDLEtBQUt1QixvQkFBTCxDQUEwQnVCLEtBQUssQ0FBQ2hGLENBQUQsQ0FBL0IsS0FBdUN6RixTQUF2QyxJQUNBLEtBQUtrSixvQkFBTCxDQUEwQnVCLEtBQUssQ0FBQ2hGLENBQUQsQ0FBL0IsS0FBdUMsSUFGeEMsRUFHRTtBQUNELGVBQUtmLGVBQUwsQ0FBcUIsQ0FBckIsRUFBd0IrRCxXQUF4QixDQUFvQ1IsR0FBcEM7QUFDQSxTQUxELE1BS087QUFDTixlQUFLdkQsZUFBTCxDQUFxQixDQUFyQixFQUF3QmtHLFlBQXhCLENBQ0MzQyxHQURELEVBRUMsS0FBS2lCLG9CQUFMLENBQTBCdUIsS0FBSyxDQUFDaEYsQ0FBRCxDQUEvQixDQUZEO0FBSUE7QUFDRDs7QUFDRCxXQUFLbEIsd0JBQUwsQ0FBOEIsQ0FBOUIsRUFBaUNrRSxXQUFqQyxDQUNDLEtBQUsvRCxlQUFMLENBQXFCLENBQXJCLENBREQ7QUFHQSxLQTVERCxNQTRETztBQUNOLFdBQUtILHdCQUFMLENBQThCLENBQTlCLEVBQWlDeUQsV0FBakMsQ0FDQyxLQUFLdEQsZUFBTCxDQUFxQixDQUFyQixDQUREO0FBR0EsVUFBSWMsUUFBUSxHQUFHaUYsS0FBSyxDQUFDekcsTUFBckI7O0FBQ0EsV0FBSyxJQUFJeUIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsUUFBcEIsRUFBOEJDLENBQUMsRUFBL0IsRUFBbUM7QUFDbEMsWUFBSXdDLEdBQUcsR0FBR3JFLFFBQVEsQ0FBQ3NFLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBVjtBQUNBLFlBQUlDLFNBQVMsR0FBR3ZFLFFBQVEsQ0FBQ3dFLGVBQVQsQ0FBeUIsWUFBekIsQ0FBaEI7QUFDQUQsaUJBQVMsQ0FBQ0UsS0FBVixHQUFrQm9DLEtBQUssQ0FBQ2hGLENBQUQsQ0FBdkI7QUFDQXdDLFdBQUcsQ0FBQ0ssZ0JBQUosQ0FBcUJILFNBQXJCO0FBRUFGLFdBQUcsQ0FBQzFCLFNBQUosQ0FBY2dDLEdBQWQsQ0FBa0Isb0JBQWxCO0FBQ0FOLFdBQUcsQ0FBQ1QsS0FBSixDQUFVZ0IsU0FBVixHQUNDLGVBQ0EsQ0FEQSxHQUVBLE1BRkEsR0FHQSxDQUFDLEtBQUt0RCxLQUFMLEdBQWEsS0FBSzdGLG1CQUFsQixHQUNBd0osdUVBQWdCLENBQUNELElBQWpCLENBQ0MsSUFERCxFQUVDLEtBQUtGLHNCQUFMLENBQTRCSSxHQUE1QixDQUFnQzJCLEtBQUssQ0FBQ2hGLENBQUQsQ0FBckMsQ0FGRCxDQURELElBS0MsS0FBS2lELHNCQUFMLENBQTRCSSxHQUE1QixDQUFnQzJCLEtBQUssQ0FBQ2hGLENBQUQsQ0FBckMsQ0FSRCxHQVNBLEtBVkQ7QUFXQXdDLFdBQUcsQ0FBQ1QsS0FBSixDQUFVN0IsS0FBVixHQUFrQixLQUFLVCxLQUFMLEdBQWEsSUFBL0I7QUFDQStDLFdBQUcsQ0FBQ1QsS0FBSixDQUFVNUIsTUFBVixHQUFtQixLQUFLVixLQUFMLEdBQWEsS0FBSzdGLG1CQUFsQixHQUF3QyxJQUEzRDtBQUVBLFlBQUlzSSxRQUFRLEdBQUcsS0FBS2hJLFNBQUwsQ0FBZWlJLHlCQUFmLENBQ2Q2QyxLQUFLLENBQUNoRixDQUFELENBRFMsRUFFZCxLQUFLUCxLQUZTLEVBR2QsS0FBS0EsS0FBTCxHQUFhLEtBQUs3RixtQkFISixFQUlkcUwsV0FKYyxDQUFmOztBQU1BLFlBQUksT0FBTy9DLFFBQVAsSUFBbUIsUUFBdkIsRUFBaUM7QUFDaENNLGFBQUcsQ0FBQzNELFNBQUosR0FBZ0JxRCxRQUFoQjtBQUNBLFNBRkQsTUFFTztBQUNOTSxhQUFHLENBQUNRLFdBQUosQ0FBZ0JkLFFBQWhCO0FBQ0E7O0FBRUQsWUFDQyxLQUFLdUIsb0JBQUwsQ0FBMEJ1QixLQUFLLENBQUNoRixDQUFELENBQS9CLEtBQXVDekYsU0FBdkMsSUFDQSxLQUFLa0osb0JBQUwsQ0FBMEJ1QixLQUFLLENBQUNoRixDQUFELENBQS9CLEtBQXVDLElBRnhDLEVBR0U7QUFDRCxlQUFLZixlQUFMLENBQXFCLENBQXJCLEVBQXdCK0QsV0FBeEIsQ0FBb0NSLEdBQXBDO0FBQ0EsU0FMRCxNQUtPO0FBQ04sZUFBS3ZELGVBQUwsQ0FBcUIsQ0FBckIsRUFBd0JrRyxZQUF4QixDQUNDM0MsR0FERCxFQUVDLEtBQUtpQixvQkFBTCxDQUEwQnVCLEtBQUssQ0FBQ2hGLENBQUQsQ0FBL0IsQ0FGRDtBQUlBO0FBQ0Q7O0FBQ0QsV0FBS2xCLHdCQUFMLENBQThCLENBQTlCLEVBQWlDa0UsV0FBakMsQ0FDQyxLQUFLL0QsZUFBTCxDQUFxQixDQUFyQixDQUREO0FBR0EsS0FwSUEsQ0FzSUQ7OztBQUNBLFFBQUlxRSxFQUFFLEdBQUduQyxXQUFXLENBQUNDLEdBQVosRUFBVDtBQUNBbUMsV0FBTyxDQUFDQyxHQUFSLENBQVl0QyxFQUFaO0FBQ0FxQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsRUFBWjtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsRUFBRSxHQUFHcEMsRUFBakIsRUExSUMsQ0EySUQ7O0FBQ0EsU0FBS3VDLG9CQUFMLEdBQTRCLEtBQUt4RSxlQUFMLENBQXFCLENBQXJCLEVBQXdCRixnQkFBeEIsQ0FDM0IscUJBRDJCLENBQTVCO0FBSUEsU0FBS3FHLGlCQUFMLENBQXVCSixLQUF2QjtBQUVBLFNBQUtyQixtQkFBTDtBQUNBLFNBQUtDLGdCQUFMO0FBRUEsUUFBSXlCLGFBQWEsR0FBRztBQUNuQkwsV0FBSyxFQUFFakwsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsU0FBTCxDQUFlK0ssS0FBZixDQUFYLENBRFk7QUFFbkJwRSxXQUFLLEVBQUVBLEtBRlk7QUFHbkJxRSxpQkFBVyxFQUFFQTtBQUhNLEtBQXBCOztBQU1BLFFBQ0MsS0FBSy9LLFNBQUwsQ0FBZW9MLG1CQUFmLElBQXNDL0ssU0FBdEMsSUFDQSxLQUFLTCxTQUFMLENBQWVvTCxtQkFBZixJQUFzQyxJQUR0QyxJQUVBTCxXQUFXLElBQUksVUFGZixJQUdBQSxXQUFXLElBQUksYUFIZixJQUlBQSxXQUFXLElBQUksYUFKZixJQUtBQSxXQUFXLElBQUksb0JBTmhCLEVBT0U7QUFDRCxXQUFLaEcsZUFBTCxDQUFxQixDQUFyQixFQUF3QmlHLFNBQXhCLEdBQW9DQSxTQUFwQztBQUNBLFdBQUtoTCxTQUFMLENBQWVvTCxtQkFBZixDQUNDRCxhQUFhLENBQUNMLEtBRGYsRUFFQ3BFLEtBRkQsRUFHQ3FFLFdBSEQsRUFJQ0MsU0FKRDtBQU1BOztBQUVELFdBQU9HLGFBQVA7QUFDQSxHQWpMRDs7QUFtTEF2TSxnQkFBYyxDQUFDQyxTQUFmLENBQXlCcU0saUJBQXpCLEdBQTZDLFVBQVNKLEtBQVQsRUFBZ0I7QUFDNUQsUUFBSWYsUUFBUSxHQUFHLEVBQWY7QUFDQSxRQUFJQyxRQUFRLEdBQUcsRUFBZjs7QUFFQSxRQUFJLENBQUMsS0FBSzdDLFFBQUwsRUFBTCxFQUFzQjtBQUNyQixXQUFLdkMsd0JBQUwsQ0FBOEIsQ0FBOUIsRUFBaUN5RCxXQUFqQyxDQUNDLEtBQUt0RCxlQUFMLENBQXFCLENBQXJCLENBREQ7QUFHQSxXQUFLZixLQUFMLENBQVcsQ0FBWCxFQUFjcUUsV0FBZCxDQUEwQixLQUFLM0QsYUFBL0I7QUFDQSxVQUFJbUIsUUFBUSxHQUFHaUYsS0FBSyxDQUFDekcsTUFBckI7O0FBQ0EsV0FBSyxJQUFJeUIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsUUFBcEIsRUFBOEJDLENBQUMsRUFBL0IsRUFBbUM7QUFDbEMsWUFBSXVGLE9BQU8sR0FBR3BILFFBQVEsQ0FBQ3NFLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBZDtBQUNBLFlBQUkrQyxhQUFhLEdBQUdySCxRQUFRLENBQUN3RSxlQUFULENBQXlCLFlBQXpCLENBQXBCO0FBQ0E2QyxxQkFBYSxDQUFDNUMsS0FBZCxHQUFzQm9DLEtBQUssQ0FBQ2hGLENBQUQsQ0FBM0I7QUFDQXVGLGVBQU8sQ0FBQzFDLGdCQUFSLENBQXlCMkMsYUFBekI7QUFDQUQsZUFBTyxDQUFDekUsU0FBUixDQUFrQmdDLEdBQWxCLENBQXNCLDhCQUF0QjtBQUNBeUMsZUFBTyxDQUFDeEQsS0FBUixDQUFjZ0IsU0FBZCxHQUNDLGVBQ0EsS0FBSzFJLFlBQUwsQ0FBa0IySyxLQUFLLENBQUNoRixDQUFELENBQXZCLEVBQTRCeUIsQ0FENUIsR0FFQSxNQUZBLEdBR0EsS0FBS3BILFlBQUwsQ0FBa0IySyxLQUFLLENBQUNoRixDQUFELENBQXZCLEVBQTRCMkIsQ0FINUIsR0FJQSxLQUxEO0FBTUE0RCxlQUFPLENBQUN4RCxLQUFSLENBQWM3QixLQUFkLEdBQXNCLEtBQUs3RixZQUFMLENBQWtCMkssS0FBSyxDQUFDaEYsQ0FBRCxDQUF2QixFQUE0QkUsS0FBNUIsR0FBb0MsSUFBMUQ7QUFDQXFGLGVBQU8sQ0FBQ3hELEtBQVIsQ0FBYzVCLE1BQWQsR0FDQyxLQUFLOUYsWUFBTCxDQUFrQjJLLEtBQUssQ0FBQ2hGLENBQUQsQ0FBdkIsRUFBNEJHLE1BQTVCLEdBQXFDLElBRHRDO0FBR0EsWUFBSXNGLE9BQU8sR0FBR3RILFFBQVEsQ0FBQ3NFLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBZDtBQUNBLFlBQUlpRCxhQUFhLEdBQUd2SCxRQUFRLENBQUN3RSxlQUFULENBQXlCLFlBQXpCLENBQXBCO0FBQ0ErQyxxQkFBYSxDQUFDOUMsS0FBZCxHQUFzQm9DLEtBQUssQ0FBQ2hGLENBQUQsQ0FBM0I7QUFDQXlGLGVBQU8sQ0FBQzVDLGdCQUFSLENBQXlCNkMsYUFBekI7QUFDQUQsZUFBTyxDQUFDM0UsU0FBUixDQUFrQmdDLEdBQWxCLENBQXNCLDhCQUF0QjtBQUNBMkMsZUFBTyxDQUFDMUQsS0FBUixDQUFjZ0IsU0FBZCxHQUEwQixlQUFlLENBQWYsR0FBbUIsTUFBbkIsR0FBNEIsQ0FBNUIsR0FBZ0MsS0FBMUQ7QUFDQTBDLGVBQU8sQ0FBQzFELEtBQVIsQ0FBYzdCLEtBQWQsR0FBc0IsS0FBSzdGLFlBQUwsQ0FBa0IySyxLQUFLLENBQUNoRixDQUFELENBQXZCLEVBQTRCRSxLQUE1QixHQUFvQyxJQUExRDtBQUNBdUYsZUFBTyxDQUFDMUQsS0FBUixDQUFjNUIsTUFBZCxHQUNDLEtBQUs5RixZQUFMLENBQWtCMkssS0FBSyxDQUFDaEYsQ0FBRCxDQUF2QixFQUE0QkcsTUFBNUIsR0FBcUMsSUFEdEM7O0FBR0EsWUFDQyxLQUFLMkQsOEJBQUwsQ0FBb0NrQixLQUFLLENBQUNoRixDQUFELENBQXpDLEtBQ0N6RixTQURELElBRUEsS0FBS3VKLDhCQUFMLENBQW9Da0IsS0FBSyxDQUFDaEYsQ0FBRCxDQUF6QyxLQUFpRCxJQUhsRCxFQUlFO0FBQ0QsZUFBS2YsZUFBTCxDQUFxQixDQUFyQixFQUF3QitELFdBQXhCLENBQW9DdUMsT0FBcEM7QUFDQSxlQUFLM0csYUFBTCxDQUFtQm9FLFdBQW5CLENBQStCeUMsT0FBL0I7QUFDQSxTQVBELE1BT087QUFDTixlQUFLeEcsZUFBTCxDQUFxQixDQUFyQixFQUF3QmtHLFlBQXhCLENBQ0NJLE9BREQsRUFFQyxLQUFLekIsOEJBQUwsQ0FBb0NrQixLQUFLLENBQUNoRixDQUFELENBQXpDLENBRkQ7QUFJQSxlQUFLcEIsYUFBTCxDQUFtQnVHLFlBQW5CLENBQ0NNLE9BREQsRUFFQyxLQUFLekIsOEJBQUwsQ0FBb0NnQixLQUFLLENBQUNoRixDQUFELENBQXpDLENBRkQ7QUFJQTtBQUNEOztBQUNELFdBQUtsQix3QkFBTCxDQUE4QixDQUE5QixFQUFpQ2tFLFdBQWpDLENBQ0MsS0FBSy9ELGVBQUwsQ0FBcUIsQ0FBckIsQ0FERDtBQUdBLFdBQUtmLEtBQUwsQ0FBVyxDQUFYLEVBQWM4RSxXQUFkLENBQTBCLEtBQUtwRSxhQUEvQjtBQUNBLEtBdERELE1Bc0RPO0FBQ04sV0FBS0Usd0JBQUwsQ0FBOEIsQ0FBOUIsRUFBaUN5RCxXQUFqQyxDQUNDLEtBQUt0RCxlQUFMLENBQXFCLENBQXJCLENBREQ7QUFHQSxXQUFLZixLQUFMLENBQVcsQ0FBWCxFQUFjcUUsV0FBZCxDQUEwQixLQUFLM0QsYUFBL0I7QUFDQSxVQUFJbUIsUUFBUSxHQUFHaUYsS0FBSyxDQUFDekcsTUFBckI7O0FBQ0EsV0FBSyxJQUFJeUIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsUUFBcEIsRUFBOEJDLENBQUMsRUFBL0IsRUFBbUM7QUFDbEMsWUFBSXVGLE9BQU8sR0FBR3BILFFBQVEsQ0FBQ3NFLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBZDtBQUNBLFlBQUkrQyxhQUFhLEdBQUdySCxRQUFRLENBQUN3RSxlQUFULENBQXlCLFlBQXpCLENBQXBCO0FBQ0E2QyxxQkFBYSxDQUFDNUMsS0FBZCxHQUFzQm9DLEtBQUssQ0FBQ2hGLENBQUQsQ0FBM0I7QUFDQXVGLGVBQU8sQ0FBQzFDLGdCQUFSLENBQXlCMkMsYUFBekI7QUFDQUQsZUFBTyxDQUFDekUsU0FBUixDQUFrQmdDLEdBQWxCLENBQXNCLDhCQUF0QjtBQUNBeUMsZUFBTyxDQUFDeEQsS0FBUixDQUFjZ0IsU0FBZCxHQUNDLGVBQ0EsQ0FEQSxHQUVBLE1BRkEsR0FHQSxDQUFDLEtBQUt0RCxLQUFMLEdBQWEsS0FBSzdGLG1CQUFsQixHQUNBd0osdUVBQWdCLENBQUNELElBQWpCLENBQ0MsSUFERCxFQUVDLEtBQUtGLHNCQUFMLENBQTRCSSxHQUE1QixDQUFnQ3JELENBQWhDLENBRkQsQ0FERCxJQUtDLEtBQUtpRCxzQkFBTCxDQUE0QkksR0FBNUIsQ0FBZ0NyRCxDQUFoQyxDQVJELEdBU0EsS0FWRDtBQVdBdUYsZUFBTyxDQUFDeEQsS0FBUixDQUFjN0IsS0FBZCxHQUFzQixLQUFLVCxLQUFMLEdBQWEsSUFBbkM7QUFDQThGLGVBQU8sQ0FBQ3hELEtBQVIsQ0FBYzVCLE1BQWQsR0FDQyxLQUFLVixLQUFMLEdBQWEsS0FBSzdGLG1CQUFsQixHQUF3QyxJQUR6QztBQUdBLFlBQUk2TCxPQUFPLEdBQUd0SCxRQUFRLENBQUNzRSxhQUFULENBQXVCLEtBQXZCLENBQWQ7QUFDQSxZQUFJaUQsYUFBYSxHQUFHdkgsUUFBUSxDQUFDd0UsZUFBVCxDQUF5QixZQUF6QixDQUFwQjtBQUNBK0MscUJBQWEsQ0FBQzlDLEtBQWQsR0FBc0JvQyxLQUFLLENBQUNoRixDQUFELENBQTNCO0FBQ0F5RixlQUFPLENBQUM1QyxnQkFBUixDQUF5QjZDLGFBQXpCO0FBQ0FELGVBQU8sQ0FBQzNFLFNBQVIsQ0FBa0JnQyxHQUFsQixDQUFzQiw4QkFBdEI7QUFDQTJDLGVBQU8sQ0FBQzFELEtBQVIsQ0FBY2dCLFNBQWQsR0FBMEIsZUFBZSxDQUFmLEdBQW1CLE1BQW5CLEdBQTRCLENBQTVCLEdBQWdDLEtBQTFEO0FBQ0EwQyxlQUFPLENBQUMxRCxLQUFSLENBQWM3QixLQUFkLEdBQXNCLEtBQUtULEtBQUwsR0FBYSxJQUFuQztBQUNBZ0csZUFBTyxDQUFDMUQsS0FBUixDQUFjNUIsTUFBZCxHQUNDLEtBQUtWLEtBQUwsR0FBYSxLQUFLN0YsbUJBQWxCLEdBQXdDLElBRHpDOztBQUdBLFlBQ0MsS0FBS2tLLDhCQUFMLENBQW9Da0IsS0FBSyxDQUFDaEYsQ0FBRCxDQUF6QyxLQUNDekYsU0FERCxJQUVBLEtBQUt1Siw4QkFBTCxDQUFvQ2tCLEtBQUssQ0FBQ2hGLENBQUQsQ0FBekMsS0FBaUQsSUFIbEQsRUFJRTtBQUNELGVBQUtmLGVBQUwsQ0FBcUIsQ0FBckIsRUFBd0IrRCxXQUF4QixDQUFvQ3VDLE9BQXBDO0FBQ0EsZUFBSzNHLGFBQUwsQ0FBbUJvRSxXQUFuQixDQUErQnlDLE9BQS9CO0FBQ0EsU0FQRCxNQU9PO0FBQ04sZUFBS3hHLGVBQUwsQ0FBcUIsQ0FBckIsRUFBd0JrRyxZQUF4QixDQUNDSSxPQURELEVBRUMsS0FBS3pCLDhCQUFMLENBQW9Da0IsS0FBSyxDQUFDaEYsQ0FBRCxDQUF6QyxDQUZEO0FBSUEsZUFBS3BCLGFBQUwsQ0FBbUJ1RyxZQUFuQixDQUNDTSxPQURELEVBRUMsS0FBS3pCLDhCQUFMLENBQW9DZ0IsS0FBSyxDQUFDaEYsQ0FBRCxDQUF6QyxDQUZEO0FBSUE7QUFDRDs7QUFDRCxXQUFLbEIsd0JBQUwsQ0FBOEIsQ0FBOUIsRUFBaUNrRSxXQUFqQyxDQUNDLEtBQUsvRCxlQUFMLENBQXFCLENBQXJCLENBREQ7QUFHQSxXQUFLZixLQUFMLENBQVcsQ0FBWCxFQUFjOEUsV0FBZCxDQUEwQixLQUFLcEUsYUFBL0I7QUFDQTs7QUFFRCxTQUFLa0YsOEJBQUwsR0FBc0MsS0FBSzdFLGVBQUwsQ0FBcUIsQ0FBckIsRUFBd0J5RixzQkFBeEIsQ0FDckMsOEJBRHFDLENBQXRDO0FBR0EsU0FBS1YsOEJBQUwsR0FBc0MsS0FBS3BGLGFBQUwsQ0FBbUI4RixzQkFBbkIsQ0FDckMsOEJBRHFDLENBQXRDO0FBR0EsR0E3SEQsQ0FwNEJtQyxDQW1nQ25DO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTs7O0FBRUE1TCxnQkFBYyxDQUFDQyxTQUFmLENBQXlCNE0sV0FBekIsR0FBdUMsVUFBU0MsWUFBVCxFQUF1QjtBQUM3RCxTQUFLL0Usa0JBQUw7QUFFQSxRQUFJcUUsU0FBUyxHQUFHLEtBQUtqRyxlQUFMLENBQXFCLENBQXJCLEVBQXdCaUcsU0FBeEM7QUFFQSxRQUFJVyxhQUFhLEdBQUcsRUFBcEI7QUFDQSxRQUFJOUYsUUFBUSxHQUFHLEtBQUsxRixZQUFMLENBQWtCa0UsTUFBbEIsR0FBMkIsQ0FBMUM7O0FBQ0EsU0FBSyxJQUFJeUIsQ0FBQyxHQUFHRCxRQUFiLEVBQXVCQyxDQUFDLElBQUksQ0FBNUIsRUFBK0JBLENBQUMsRUFBaEMsRUFBb0M7QUFDbkMsVUFBSThGLEtBQUssR0FBRzlGLENBQVo7QUFFQTZGLG1CQUFhLENBQUM1RixJQUFkLENBQW1CRixRQUFRLEdBQUdDLENBQTlCO0FBQ0E7O0FBRUQ0RixnQkFBWSxDQUFDRyxJQUFiLENBQWtCLFVBQVNDLENBQVQsRUFBWUMsQ0FBWixFQUFlO0FBQ2hDLGFBQU9DLE1BQU0sQ0FBQ0YsQ0FBRCxDQUFOLEdBQVlFLE1BQU0sQ0FBQ0QsQ0FBRCxDQUF6QjtBQUNBLEtBRkQ7QUFHQSxRQUFJbEcsUUFBUSxHQUFHNkYsWUFBWSxDQUFDckgsTUFBYixHQUFzQixDQUFyQzs7QUFDQSxTQUFLLElBQUl5QixDQUFDLEdBQUdELFFBQWIsRUFBdUJDLENBQUMsSUFBSSxDQUE1QixFQUErQkEsQ0FBQyxFQUFoQyxFQUFvQztBQUNuQyxVQUFJOEYsS0FBSyxHQUFHRixZQUFZLENBQUM1RixDQUFELENBQXhCO0FBQ0EsV0FBSzNGLFlBQUwsQ0FBa0I4TCxNQUFsQixDQUF5QkwsS0FBekIsRUFBZ0MsQ0FBaEM7QUFFQSxVQUFJeEQsSUFBSSxHQUFHLEtBQUttQixvQkFBTCxDQUEwQnFDLEtBQTFCLENBQVg7QUFDQSxVQUFJTSxjQUFjLEdBQUcsS0FBS3RDLDhCQUFMLENBQW9DZ0MsS0FBcEMsQ0FBckI7QUFDQSxVQUFJTyxjQUFjLEdBQUcsS0FBS3JDLDhCQUFMLENBQW9DOEIsS0FBcEMsQ0FBckI7QUFFQSxXQUFLN0csZUFBTCxDQUFxQixDQUFyQixFQUF3QnNELFdBQXhCLENBQW9DRCxJQUFwQztBQUNBLFdBQUtyRCxlQUFMLENBQXFCLENBQXJCLEVBQXdCc0QsV0FBeEIsQ0FBb0M2RCxjQUFwQztBQUNBLFdBQUt4SCxhQUFMLENBQW1CMkQsV0FBbkIsQ0FBK0I4RCxjQUEvQjtBQUVBLFdBQUs1QyxvQkFBTCxHQUE0QixLQUFLeEUsZUFBTCxDQUFxQixDQUFyQixFQUF3QkYsZ0JBQXhCLENBQzNCLHFCQUQyQixDQUE1QjtBQUdBLFdBQUsrRSw4QkFBTCxHQUFzQyxLQUFLN0UsZUFBTCxDQUFxQixDQUFyQixFQUF3QnlGLHNCQUF4QixDQUNyQyw4QkFEcUMsQ0FBdEM7QUFHQSxXQUFLViw4QkFBTCxHQUFzQyxLQUFLcEYsYUFBTCxDQUFtQjhGLHNCQUFuQixDQUNyQyw4QkFEcUMsQ0FBdEM7QUFHQTs7QUFFRG1CLGlCQUFhLENBQUNNLE1BQWQsQ0FBcUIsS0FBSzlMLFlBQUwsQ0FBa0JrRSxNQUF2Qzs7QUFFQSxRQUFJLEtBQUs4QyxRQUFMLEVBQUosRUFBcUI7QUFDcEIsV0FBSzRCLHNCQUFMLEdBQThCQyxxRUFBYyxDQUFDQyxJQUFmLENBQW9CLElBQXBCLEVBQTBCLElBQTFCLENBQTlCO0FBQ0E7O0FBRUQsU0FBSzRCLFdBQUwsQ0FBaUJjLGFBQWpCLEVBQWdDLEtBQWhDLEVBQXVDLGFBQXZDOztBQUVBLFFBQ0MsS0FBSzNMLFNBQUwsQ0FBZW9NLHNCQUFmLElBQXlDL0wsU0FBekMsSUFDQSxLQUFLTCxTQUFMLENBQWVvTSxzQkFBZixJQUF5QyxJQUYxQyxFQUdFO0FBQ0QsV0FBS3JILGVBQUwsQ0FBcUIsQ0FBckIsRUFBd0JpRyxTQUF4QixHQUFvQ0EsU0FBcEM7QUFDQSxXQUFLaEwsU0FBTCxDQUFlb00sc0JBQWYsQ0FBc0NWLFlBQXRDO0FBQ0E7QUFDRCxHQXZERDs7QUF5REE5TSxnQkFBYyxDQUFDQyxTQUFmLENBQXlCd04sUUFBekIsR0FBb0MsVUFDbkNDLE9BQU8sR0FBRyxDQUR5QixFQUVuQ0MsU0FBUyxHQUFHLEdBRnVCLEVBR25DQyxVQUFVLEdBQUcsR0FIc0IsRUFJbEM7QUFDRCxRQUFJRixPQUFPLElBQUksQ0FBZixFQUFrQjtBQUNqQjtBQUNBOztBQUVELFFBQUlDLFNBQVMsR0FBRyxLQUFLaEgsS0FBckIsRUFBNEI7QUFDM0I7QUFDQTs7QUFFRCxRQUFJa0gsU0FBUyxHQUFHLENBQWhCO0FBQ0EsUUFBSTVHLFFBQVEsR0FBRyxLQUFLMUYsWUFBTCxDQUFrQmtFLE1BQWpDOztBQUNBLFNBQUssSUFBSXlCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELFFBQXBCLEVBQThCQyxDQUFDLEVBQS9CLEVBQW1DO0FBQ2xDLFVBQ0MsS0FBSzNGLFlBQUwsQ0FBa0IyRixDQUFsQixFQUFxQjJCLENBQXJCLEdBQXlCLEtBQUt0SCxZQUFMLENBQWtCMkYsQ0FBbEIsRUFBcUJHLE1BQTlDLEdBQ0F3RyxTQUZELEVBR0U7QUFDREEsaUJBQVMsR0FDUixLQUFLdE0sWUFBTCxDQUFrQjJGLENBQWxCLEVBQXFCMkIsQ0FBckIsR0FBeUIsS0FBS3RILFlBQUwsQ0FBa0IyRixDQUFsQixFQUFxQkcsTUFEL0M7QUFFQTtBQUNEOztBQUNEd0csYUFBUyxHQUFHQSxTQUFTLEdBQUd2RCx1RUFBZ0IsQ0FBQ0QsSUFBakIsQ0FBc0IsSUFBdEIsRUFBNEJ3RCxTQUE1QixDQUF4QjtBQUVBLFFBQUkzQixLQUFLLEdBQUcsRUFBWjtBQUVBLFFBQUk0QixnQkFBZ0IsR0FBR0QsU0FBdkI7QUFFQSxRQUFJN0csY0FBYyxHQUFHMEcsT0FBckI7QUFDQSxRQUFJSyxjQUFjLEdBQUcsS0FBS3BILEtBQTFCOztBQUNBLFdBQU9LLGNBQWMsSUFBSSxDQUF6QixFQUE0QjtBQUMzQixVQUFJZ0gsU0FBUyxHQUFHLENBQWhCOztBQUNBLGFBQ0NELGNBQWMsR0FDYkosU0FBUyxHQUFHckQsdUVBQWdCLENBQUNELElBQWpCLENBQXNCLElBQXRCLEVBQTRCMkQsU0FBNUIsQ0FEYixJQUVBaEgsY0FBYyxJQUFJLENBSG5CLEVBSUU7QUFDRCxZQUFJd0MsSUFBSSxHQUFHO0FBQ1ZiLFdBQUMsRUFBRTJCLHVFQUFnQixDQUFDRCxJQUFqQixDQUFzQixJQUF0QixFQUE0QjJELFNBQTVCLElBQXlDQSxTQURsQztBQUVWbkYsV0FBQyxFQUFFZ0YsU0FGTztBQUdWekcsZUFBSyxFQUFFdUcsU0FIRztBQUlWdEcsZ0JBQU0sRUFBRXVHO0FBSkUsU0FBWDtBQU9BRyxzQkFBYyxHQUNiQSxjQUFjLEdBQ2RKLFNBREEsR0FFQXJELHVFQUFnQixDQUFDRCxJQUFqQixDQUFzQixJQUF0QixFQUE0QjJELFNBQTVCLENBSEQ7QUFJQUEsaUJBQVMsR0FDUkEsU0FBUyxHQUNUMUQsdUVBQWdCLENBQUNELElBQWpCLENBQXNCLElBQXRCLEVBQTRCMkQsU0FBNUIsQ0FEQSxHQUVBTCxTQUhEO0FBSUEzRyxzQkFBYztBQUNka0YsYUFBSyxDQUFDL0UsSUFBTixDQUFXcUMsSUFBWDtBQUNBOztBQUNEdUUsb0JBQWMsR0FBRyxLQUFLcEgsS0FBdEI7QUFDQWtILGVBQVMsR0FBR0EsU0FBUyxHQUFHRCxVQUFaLEdBQXlCLEtBQUsvTSxNQUExQztBQUNBOztBQUVELFFBQUlvTixZQUFZLEdBQUcsS0FBSzlILGVBQUwsQ0FBcUIsQ0FBckIsRUFBd0I4SCxZQUEzQztBQUVBLFFBQUkxQixhQUFhLEdBQUcsS0FBSzJCLG1CQUFMLENBQXlCaEMsS0FBekIsRUFBZ0MsS0FBaEMsRUFBdUMsVUFBdkMsQ0FBcEI7O0FBRUEsUUFBSSxDQUFDLEtBQUszRCxRQUFMLEVBQUwsRUFBc0I7QUFDckIsV0FBS3BDLGVBQUwsQ0FBcUIsQ0FBckIsRUFBd0JpRyxTQUF4QixHQUFvQzBCLGdCQUFwQztBQUNBLEtBRkQsTUFFTztBQUNOLFdBQUszSCxlQUFMLENBQXFCLENBQXJCLEVBQXdCaUcsU0FBeEIsR0FBb0M2QixZQUFwQztBQUNBOztBQUVELFFBQ0MsS0FBSzdNLFNBQUwsQ0FBZStNLG1CQUFmLElBQXNDMU0sU0FBdEMsSUFDQSxLQUFLTCxTQUFMLENBQWUrTSxtQkFBZixJQUFzQyxJQUZ2QyxFQUdFO0FBQ0QsV0FBSy9NLFNBQUwsQ0FBZStNLG1CQUFmLENBQ0M1QixhQUFhLENBQUNMLEtBRGYsRUFFQ3lCLFNBRkQsRUFHQ0MsVUFIRCxFQUlDLFVBSkQ7QUFNQTtBQUNELEdBbEZEOztBQW9GQTVOLGdCQUFjLENBQUNDLFNBQWYsQ0FBeUJpTyxtQkFBekIsR0FBK0MsVUFDOUNoQyxLQUQ4QyxFQUU5Q3BFLEtBQUssR0FBRyxJQUZzQyxFQUc5Q3FFLFdBQVcsR0FBRyxVQUhnQyxFQUk3QztBQUNELFFBQUlpQyxRQUFRLEdBQUcsRUFBZjtBQUNBLFFBQUlDLGFBQWEsR0FBRyxLQUFLOU0sWUFBTCxDQUFrQmtFLE1BQXRDO0FBRUEsUUFBSXdCLFFBQVEsR0FBR2lGLEtBQUssQ0FBQ3pHLE1BQXJCOztBQUNBLFNBQUssSUFBSXlCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELFFBQXBCLEVBQThCQyxDQUFDLEVBQS9CLEVBQW1DO0FBQ2xDa0gsY0FBUSxDQUFDakgsSUFBVCxDQUFja0gsYUFBYSxHQUFHbkgsQ0FBOUI7O0FBQ0EsVUFBSSxLQUFLcUIsUUFBTCxFQUFKLEVBQXFCO0FBQ3BCLGFBQUs0QixzQkFBTCxDQUE0Qm1FLElBQTVCLENBQWlDbkgsSUFBakMsQ0FBc0NrSCxhQUFhLEdBQUduSCxDQUF0RDtBQUNBLGFBQUtpRCxzQkFBTCxDQUE0QkksR0FBNUIsQ0FBZ0M4RCxhQUFhLEdBQUduSCxDQUFoRCxJQUNDLEtBQUtpRCxzQkFBTCxDQUE0Qm1FLElBQTVCLENBQWlDN0ksTUFBakMsR0FBMEMsQ0FEM0M7QUFFQTs7QUFDRCxXQUFLbEUsWUFBTCxDQUFrQjRGLElBQWxCLENBQXVCK0UsS0FBSyxDQUFDaEYsQ0FBRCxDQUE1QjtBQUNBOztBQUVELFFBQUlxRixhQUFhLEdBQUcsS0FBS04sV0FBTCxDQUFpQm1DLFFBQWpCLEVBQTJCdEcsS0FBM0IsRUFBa0NxRSxXQUFsQyxDQUFwQjtBQUVBLFdBQU9JLGFBQVA7QUFDQSxHQXRCRCxDQTVwQ21DLENBb3JDbkM7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBOzs7QUFFQXZNLGdCQUFjLENBQUNDLFNBQWYsQ0FBeUJzTyxrQkFBekIsR0FBOEMsWUFBVztBQUN4RCxTQUFLeEcsa0JBQUw7QUFDQSxTQUFLK0MsZ0JBQUw7QUFDQSxHQUhEOztBQUtBOUssZ0JBQWMsQ0FBQ0MsU0FBZixDQUF5QjRLLG1CQUF6QixHQUErQyxZQUFXLENBQUUsQ0FBNUQ7O0FBRUE3SyxnQkFBYyxDQUFDQyxTQUFmLENBQXlCNkssZ0JBQXpCLEdBQTRDLFlBQVc7QUFDdEQsUUFBSSxLQUFLOUosT0FBTCxDQUFhVSxRQUFiLElBQXlCLElBQTdCLEVBQW1DO0FBQ2xDLFVBQUksS0FBSzZHLFFBQUwsTUFBbUIsS0FBdkIsRUFBOEI7QUFDN0IsWUFBSSxLQUFLdkgsT0FBTCxDQUFhd04sMEJBQWIsSUFBMkMsS0FBL0MsRUFBc0Q7QUFDckQsZUFBS3JJLGVBQUwsQ0FBcUIsQ0FBckIsRUFBd0J0QixnQkFBeEIsQ0FDQyxXQURELEVBRUMsS0FBS2xELHFDQUZOOztBQUlBLGNBQUksS0FBS1gsT0FBTCxDQUFheU4sc0JBQWIsSUFBdUMsS0FBM0MsRUFBa0Q7QUFDakQsaUJBQUt0SSxlQUFMLENBQXFCLENBQXJCLEVBQXdCdEIsZ0JBQXhCLENBQ0MsWUFERCxFQUVDLEtBQUt6QyxzQ0FGTjtBQUlBO0FBQ0Q7QUFDRDs7QUFFRCxVQUFJNkUsUUFBUSxHQUFHLEtBQUswRCxvQkFBTCxDQUEwQmxGLE1BQXpDOztBQUNBLFdBQUssSUFBSXlCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELFFBQXBCLEVBQThCQyxDQUFDLEVBQS9CLEVBQW1DO0FBQ2xDLFlBQUksS0FBS3FCLFFBQUwsTUFBbUIsS0FBdkIsRUFBOEI7QUFDN0IsZUFBS29DLG9CQUFMLENBQTBCekQsQ0FBMUIsRUFBNkJyQyxnQkFBN0IsQ0FDQyxXQURELEVBRUMsS0FBSy9CLCtCQUZOOztBQUlBLGNBQUksS0FBSzlCLE9BQUwsQ0FBYXlOLHNCQUFiLElBQXVDLEtBQTNDLEVBQWtEO0FBQ2pELGlCQUFLOUQsb0JBQUwsQ0FBMEJ6RCxDQUExQixFQUE2QnJDLGdCQUE3QixDQUNDLFlBREQsRUFFQyxLQUFLdkIsZ0NBRk47QUFJQTtBQUNEOztBQUVELFlBQ0MsS0FBS2xDLFNBQUwsQ0FBZWlELG1CQUFmLElBQXNDNUMsU0FBdEMsSUFDQSxLQUFLTCxTQUFMLENBQWVpRCxtQkFBZixJQUFzQyxJQUZ2QyxFQUdFO0FBQ0QsZUFBS3NHLG9CQUFMLENBQTBCekQsQ0FBMUIsRUFBNkJyQyxnQkFBN0IsQ0FDQyxPQURELEVBRUMsS0FBS1AsMkJBRk47QUFJQTtBQUNEO0FBQ0Q7QUFDRCxHQTNDRDs7QUE2Q0F0RSxnQkFBYyxDQUFDQyxTQUFmLENBQXlCOEgsa0JBQXpCLEdBQThDLFlBQVc7QUFDeEQsUUFBSSxLQUFLL0csT0FBTCxDQUFhVSxRQUFiLElBQXlCLElBQTdCLEVBQW1DO0FBQ2xDLFVBQUksS0FBS3lFLGVBQUwsSUFBd0IxRSxTQUE1QixFQUF1QztBQUN0QyxhQUFLMEUsZUFBTCxDQUFxQixDQUFyQixFQUF3QnVJLG1CQUF4QixDQUNDLFdBREQsRUFFQyxLQUFLL00scUNBRk47QUFJQSxhQUFLd0UsZUFBTCxDQUFxQixDQUFyQixFQUF3QnVJLG1CQUF4QixDQUNDLFlBREQsRUFFQyxLQUFLdE0sc0NBRk47QUFJQTs7QUFFRCxVQUFJLEtBQUt1SSxvQkFBTCxJQUE2QmxKLFNBQWpDLEVBQTRDO0FBQzNDLFlBQUl3RixRQUFRLEdBQUcsS0FBSzBELG9CQUFMLENBQTBCbEYsTUFBekM7O0FBQ0EsYUFBSyxJQUFJeUIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsUUFBcEIsRUFBOEJDLENBQUMsRUFBL0IsRUFBbUM7QUFDbEMsZUFBS3lELG9CQUFMLENBQTBCekQsQ0FBMUIsRUFBNkJ3SCxtQkFBN0IsQ0FDQyxXQURELEVBRUMsS0FBSzVMLCtCQUZOO0FBSUEsZUFBSzZILG9CQUFMLENBQTBCekQsQ0FBMUIsRUFBNkJ3SCxtQkFBN0IsQ0FDQyxZQURELEVBRUMsS0FBS3BMLGdDQUZOO0FBS0EsZUFBS3FILG9CQUFMLENBQTBCekQsQ0FBMUIsRUFBNkJ3SCxtQkFBN0IsQ0FDQyxPQURELEVBRUMsS0FBS3BLLDJCQUZOO0FBSUE7QUFDRDtBQUNEO0FBQ0QsR0FoQ0Q7O0FBa0NBdEUsZ0JBQWMsQ0FBQ0MsU0FBZixDQUF5QjBPLHlCQUF6QixHQUFxRCxZQUFXO0FBQy9ELFFBQUksS0FBS2hFLG9CQUFMLElBQTZCbEosU0FBakMsRUFBNEM7QUFDM0MsVUFBSXdGLFFBQVEsR0FBRyxLQUFLMEQsb0JBQUwsQ0FBMEJsRixNQUF6Qzs7QUFDQSxXQUFLLElBQUl5QixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxRQUFwQixFQUE4QkMsQ0FBQyxFQUEvQixFQUFtQztBQUNsQyxhQUFLeUQsb0JBQUwsQ0FBMEJ6RCxDQUExQixFQUE2QnJDLGdCQUE3QixDQUNDLFdBREQsRUFFQyxLQUFLL0IsK0JBRk47QUFJQSxhQUFLNkgsb0JBQUwsQ0FBMEJ6RCxDQUExQixFQUE2QnJDLGdCQUE3QixDQUNDLFlBREQsRUFFQyxLQUFLdkIsZ0NBRk47QUFJQTtBQUNEO0FBQ0QsR0FkRDs7QUFnQkF0RCxnQkFBYyxDQUFDQyxTQUFmLENBQXlCMk8sMkJBQXpCLEdBQXVELFlBQVc7QUFDakUsUUFBSSxLQUFLakUsb0JBQUwsSUFBNkJsSixTQUFqQyxFQUE0QztBQUMzQyxVQUFJd0YsUUFBUSxHQUFHLEtBQUswRCxvQkFBTCxDQUEwQmxGLE1BQXpDOztBQUNBLFdBQUssSUFBSXlCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELFFBQXBCLEVBQThCQyxDQUFDLEVBQS9CLEVBQW1DO0FBQ2xDLGFBQUt5RCxvQkFBTCxDQUEwQnpELENBQTFCLEVBQTZCd0gsbUJBQTdCLENBQ0MsV0FERCxFQUVDLEtBQUs1TCwrQkFGTjtBQUlBLGFBQUs2SCxvQkFBTCxDQUEwQnpELENBQTFCLEVBQTZCd0gsbUJBQTdCLENBQ0MsWUFERCxFQUVDLEtBQUtwTCxnQ0FGTjtBQUlBO0FBQ0Q7QUFDRCxHQWRELENBdHlDbUMsQ0FzekNuQztBQUVBO0FBRUE7OztBQUVBdEQsZ0JBQWMsQ0FBQ0MsU0FBZixDQUF5QnNJLFFBQXpCLEdBQW9DLFlBQVc7QUFDOUM7QUFDQSxXQUFPeEksTUFBTSxDQUFDOE8sVUFBUCxDQUNOLDJEQURNLEVBRUxDLE9BRkYsQ0FGOEMsQ0FLOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQVRELENBNXpDbUMsQ0F1MENuQztBQUVBO0FBRUE7OztBQUVBOU8sZ0JBQWMsQ0FBQ0MsU0FBZixDQUF5QjhPLFdBQXpCLEdBQXVDLFVBQVMvQixLQUFULEVBQWdCNUYsS0FBaEIsRUFBdUJDLE1BQXZCLEVBQStCO0FBQ3JFLFFBQUksS0FBSzlGLFlBQUwsQ0FBa0J5TCxLQUFsQixFQUF5QnJFLENBQXpCLEdBQTZCdkIsS0FBN0IsR0FBcUMsS0FBS1QsS0FBOUMsRUFBcUQ7QUFDcEQsYUFBTyxLQUFQO0FBQ0E7O0FBRUQsUUFBSSxPQUFPUyxLQUFQLElBQWdCLFFBQWhCLElBQTRCLE9BQU9DLE1BQVAsSUFBaUIsUUFBakQsRUFBMkQ7QUFDMUQsYUFBTyxLQUFQO0FBQ0E7O0FBRUQsUUFBSUQsS0FBSyxHQUFHLEVBQVIsSUFBY0MsTUFBTSxHQUFHLEVBQTNCLEVBQStCO0FBQzlCLGFBQU8sS0FBUDtBQUNBOztBQUVELFFBQUkySCxnQkFBZ0IsR0FBRyxLQUFLQyx5QkFBTCxDQUN0QmpDLEtBRHNCLEVBRXRCNUYsS0FGc0IsRUFHdEJDLE1BSHNCLENBQXZCO0FBTUEsUUFBSW1DLElBQUksR0FBR3ZJLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLFNBQUwsQ0FBZSxLQUFLSSxZQUFMLENBQWtCeUwsS0FBbEIsQ0FBZixDQUFYLENBQVg7QUFDQXhELFFBQUksQ0FBQ3BDLEtBQUwsR0FBYUEsS0FBYjtBQUNBb0MsUUFBSSxDQUFDbkMsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsUUFBSTZILFVBQVUsR0FBRyxLQUFLQyxjQUFMLENBQ2hCM0YsSUFEZ0IsRUFFaEJ3RixnQkFBZ0IsQ0FBQ0ksYUFGRCxDQUFqQixDQXRCcUUsQ0EyQnJFOztBQUNBNUYsUUFBSSxDQUFDNkYsY0FBTCxHQUFzQixJQUF0QjtBQUNBLFFBQUlDLGdCQUFnQixHQUFHLEtBQUtDLGVBQUwsQ0FBcUJMLFVBQXJCLEVBQWlDLENBQUMxRixJQUFELENBQWpDLENBQXZCO0FBRUEsUUFBSWdHLDhCQUE4QixHQUFHLEVBQXJDO0FBQ0EsUUFBSXZJLFFBQVEsR0FBRytILGdCQUFnQixDQUFDUyx1QkFBakIsQ0FBeUNoSyxNQUF4RDs7QUFDQSxTQUFLLElBQUl5QixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxRQUFwQixFQUE4QkMsQ0FBQyxFQUEvQixFQUFtQztBQUNsQyxVQUFJd0ksR0FBRyxHQUFHVixnQkFBZ0IsQ0FBQ1MsdUJBQWpCLENBQXlDdkksQ0FBekMsQ0FBVjtBQUNBc0ksb0NBQThCLENBQUN0SSxDQUFELENBQTlCLEdBQW9DakcsSUFBSSxDQUFDQyxLQUFMLENBQ25DRCxJQUFJLENBQUNFLFNBQUwsQ0FDQyxLQUFLSSxZQUFMLENBQ0N5TixnQkFBZ0IsQ0FBQ1MsdUJBQWpCLENBQXlDdkksQ0FBekMsQ0FERCxDQURELENBRG1DLENBQXBDO0FBT0FzSSxvQ0FBOEIsQ0FBQ3RJLENBQUQsQ0FBOUIsQ0FBa0M4RixLQUFsQyxHQUEwQzBDLEdBQTFDO0FBQ0E7O0FBRUQsUUFBSUMsVUFBVSxHQUFHLEtBQUtDLHNCQUFMLENBQ2hCSiw4QkFEZ0IsRUFFaEJ2TyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxTQUFMLENBQWVtTyxnQkFBZixDQUFYLENBRmdCLEVBR2hCLENBQUM5RixJQUFELENBSGdCLENBQWpCO0FBS0EsUUFBSXFHLFdBQVcsR0FBR0YsVUFBVSxDQUFDRyxpQkFBN0I7QUFFQSxRQUFJdk8sWUFBWSxHQUFHTixJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxTQUFMLENBQWUsS0FBS0ksWUFBcEIsQ0FBWCxDQUFuQjtBQUNBLFFBQUkwRixRQUFRLEdBQUc0SSxXQUFXLENBQUNwSyxNQUEzQjs7QUFDQSxTQUFLLElBQUl5QixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxRQUFwQixFQUE4QkMsQ0FBQyxFQUEvQixFQUFtQztBQUNsQyxVQUFJd0ksR0FBRyxHQUFHRyxXQUFXLENBQUMzSSxDQUFELENBQVgsQ0FBZThGLEtBQXpCO0FBQ0F6TCxrQkFBWSxDQUFDbU8sR0FBRCxDQUFaLENBQWtCL0csQ0FBbEIsR0FBc0JrSCxXQUFXLENBQUMzSSxDQUFELENBQVgsQ0FBZXlCLENBQXJDO0FBQ0FwSCxrQkFBWSxDQUFDbU8sR0FBRCxDQUFaLENBQWtCN0csQ0FBbEIsR0FBc0JnSCxXQUFXLENBQUMzSSxDQUFELENBQVgsQ0FBZTJCLENBQXJDO0FBQ0E7O0FBQ0R0SCxnQkFBWSxDQUFDeUwsS0FBRCxDQUFaLENBQW9CNUYsS0FBcEIsR0FBNEJBLEtBQTVCO0FBQ0E3RixnQkFBWSxDQUFDeUwsS0FBRCxDQUFaLENBQW9CM0YsTUFBcEIsR0FBNkJBLE1BQTdCO0FBRUEsUUFBSUwsY0FBYyxHQUFHLEVBQXJCO0FBQ0EsUUFBSUMsUUFBUSxHQUFHK0gsZ0JBQWdCLENBQUNTLHVCQUFqQixDQUF5Q2hLLE1BQXhEO0FBQ0EsUUFBSXNLLFFBQVEsR0FBR0YsV0FBVyxDQUFDcEssTUFBM0I7O0FBQ0EsU0FBSyxJQUFJeUIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsUUFBcEIsRUFBOEJDLENBQUMsRUFBL0IsRUFBbUM7QUFDbEMsVUFBSThJLFVBQVUsR0FBRyxLQUFqQjs7QUFDQSxXQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdGLFFBQXBCLEVBQThCRSxDQUFDLEVBQS9CLEVBQW1DO0FBQ2xDLFlBQ0NqQixnQkFBZ0IsQ0FBQ1MsdUJBQWpCLENBQXlDdkksQ0FBekMsS0FDQTJJLFdBQVcsQ0FBQ0ksQ0FBRCxDQUFYLENBQWVqRCxLQUZoQixFQUdFO0FBQ0RnRCxvQkFBVSxHQUFHLElBQWI7QUFDQTtBQUNBO0FBQ0Q7O0FBQ0QsVUFBSUEsVUFBVSxJQUFJLEtBQWxCLEVBQXlCO0FBQ3hCaEosc0JBQWMsQ0FBQ0csSUFBZixDQUNDNkgsZ0JBQWdCLENBQUNTLHVCQUFqQixDQUF5Q3ZJLENBQXpDLENBREQ7QUFHQTtBQUNEOztBQUVELFFBQUkzRixZQUFZLEdBQUcsS0FBSzJPLGlCQUFMLENBQ2xCM08sWUFEa0IsRUFFbEJ5RixjQUZrQixFQUdsQmdJLGdCQUhrQixFQUlsQmhDLEtBSmtCLEVBS2xCL0wsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsU0FBTCxDQUFld08sVUFBZixDQUFYLENBTGtCLENBQW5CO0FBUUEsUUFBSTFJLFFBQVEsR0FBRzFGLFlBQVksQ0FBQ2tFLE1BQTVCOztBQUNBLFNBQUssSUFBSXlCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELFFBQXBCLEVBQThCQyxDQUFDLEVBQS9CLEVBQW1DO0FBQ2xDLFdBQUt5RCxvQkFBTCxDQUEwQnpELENBQTFCLEVBQTZCK0IsS0FBN0IsQ0FBbUNnQixTQUFuQyxHQUNDLGVBQ0ExSSxZQUFZLENBQUMyRixDQUFELENBQVosQ0FBZ0J5QixDQURoQixHQUVBLE1BRkEsR0FHQXBILFlBQVksQ0FBQzJGLENBQUQsQ0FBWixDQUFnQjJCLENBSGhCLEdBSUEsS0FMRDtBQU1BLFdBQUs4QixvQkFBTCxDQUEwQnpELENBQTFCLEVBQTZCYyxTQUE3QixDQUF1Q21JLE1BQXZDLENBQ0Msd0JBREQsRUFFQyxpQ0FGRDtBQUlBOztBQUVELFNBQUs1TyxZQUFMLEdBQW9CQSxZQUFwQjtBQUVBLFFBQUk2SyxTQUFTLEdBQUcsS0FBS2pHLGVBQUwsQ0FBcUIsQ0FBckIsRUFBd0JpRyxTQUF4QztBQUNBLFNBQUtILFdBQUwsQ0FBaUIsQ0FBQ2UsS0FBRCxDQUFqQixFQUEwQixLQUExQixFQUFpQyxhQUFqQztBQUNBLFNBQUs3RyxlQUFMLENBQXFCLENBQXJCLEVBQXdCaUcsU0FBeEIsR0FBb0NBLFNBQXBDO0FBQ0EsR0E5R0Q7O0FBZ0hBcE0sZ0JBQWMsQ0FBQ0MsU0FBZixDQUF5Qm1RLGVBQXpCLEdBQTJDLFVBQVNwRCxLQUFULEVBQWdCNUYsS0FBaEIsRUFBdUJDLE1BQXZCLEVBQStCO0FBQ3pFLFFBQUksS0FBSzlGLFlBQUwsQ0FBa0J5TCxLQUFsQixFQUF5QnJFLENBQXpCLEdBQTZCdkIsS0FBN0IsR0FBcUMsS0FBS1QsS0FBOUMsRUFBcUQ7QUFDcEQsYUFBTyxLQUFQO0FBQ0E7O0FBRUQsUUFBSSxPQUFPUyxLQUFQLElBQWdCLFFBQWhCLElBQTRCLE9BQU9DLE1BQVAsSUFBaUIsUUFBakQsRUFBMkQ7QUFDMUQsYUFBTyxLQUFQO0FBQ0E7O0FBRUQsUUFBSUQsS0FBSyxHQUFHLEVBQVIsSUFBY0MsTUFBTSxHQUFHLEVBQTNCLEVBQStCO0FBQzlCLGFBQU8sS0FBUDtBQUNBOztBQUVELFFBQUlKLFFBQVEsR0FBRyxLQUFLMEQsb0JBQUwsQ0FBMEJsRixNQUF6Qzs7QUFDQSxTQUFLLElBQUl5QixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxRQUFwQixFQUE4QkMsQ0FBQyxFQUEvQixFQUFtQztBQUNsQyxXQUFLeUQsb0JBQUwsQ0FBMEJ6RCxDQUExQixFQUE2QitCLEtBQTdCLENBQW1DZ0IsU0FBbkMsR0FDQyxlQUNBLEtBQUsxSSxZQUFMLENBQWtCMkYsQ0FBbEIsRUFBcUJ5QixDQURyQixHQUVBLE1BRkEsR0FHQSxLQUFLcEgsWUFBTCxDQUFrQjJGLENBQWxCLEVBQXFCMkIsQ0FIckIsR0FJQSxLQUxEO0FBTUEsV0FBSzhCLG9CQUFMLENBQTBCekQsQ0FBMUIsRUFBNkJjLFNBQTdCLENBQXVDbUksTUFBdkMsQ0FDQyx3QkFERDtBQUdBOztBQUVELFFBQUluQixnQkFBZ0IsR0FBRyxLQUFLQyx5QkFBTCxDQUN0QmpDLEtBRHNCLEVBRXRCNUYsS0FGc0IsRUFHdEJDLE1BSHNCLENBQXZCO0FBTUEsUUFBSW1DLElBQUksR0FBR3ZJLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLFNBQUwsQ0FBZSxLQUFLSSxZQUFMLENBQWtCeUwsS0FBbEIsQ0FBZixDQUFYLENBQVg7QUFDQXhELFFBQUksQ0FBQ3BDLEtBQUwsR0FBYUEsS0FBYjtBQUNBb0MsUUFBSSxDQUFDbkMsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsUUFBSTZILFVBQVUsR0FBRyxLQUFLQyxjQUFMLENBQ2hCM0YsSUFEZ0IsRUFFaEJ3RixnQkFBZ0IsQ0FBQ0ksYUFGRCxDQUFqQixDQW5DeUUsQ0F3Q3pFOztBQUNBNUYsUUFBSSxDQUFDNkYsY0FBTCxHQUFzQixJQUF0QjtBQUNBLFFBQUlDLGdCQUFnQixHQUFHLEtBQUtDLGVBQUwsQ0FBcUJMLFVBQXJCLEVBQWlDLENBQUMxRixJQUFELENBQWpDLENBQXZCO0FBRUEsUUFBSWdHLDhCQUE4QixHQUFHLEVBQXJDO0FBQ0EsUUFBSXZJLFFBQVEsR0FBRytILGdCQUFnQixDQUFDUyx1QkFBakIsQ0FBeUNoSyxNQUF4RDs7QUFDQSxTQUFLLElBQUl5QixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxRQUFwQixFQUE4QkMsQ0FBQyxFQUEvQixFQUFtQztBQUNsQyxVQUFJd0ksR0FBRyxHQUFHVixnQkFBZ0IsQ0FBQ1MsdUJBQWpCLENBQXlDdkksQ0FBekMsQ0FBVjtBQUNBc0ksb0NBQThCLENBQUN0SSxDQUFELENBQTlCLEdBQW9DakcsSUFBSSxDQUFDQyxLQUFMLENBQ25DRCxJQUFJLENBQUNFLFNBQUwsQ0FDQyxLQUFLSSxZQUFMLENBQ0N5TixnQkFBZ0IsQ0FBQ1MsdUJBQWpCLENBQXlDdkksQ0FBekMsQ0FERCxDQURELENBRG1DLENBQXBDO0FBT0FzSSxvQ0FBOEIsQ0FBQ3RJLENBQUQsQ0FBOUIsQ0FBa0M4RixLQUFsQyxHQUEwQzBDLEdBQTFDO0FBQ0E7O0FBRUQsUUFBSUMsVUFBVSxHQUFHLEtBQUtDLHNCQUFMLENBQ2hCSiw4QkFEZ0IsRUFFaEJ2TyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxTQUFMLENBQWVtTyxnQkFBZixDQUFYLENBRmdCLEVBR2hCLENBQUM5RixJQUFELENBSGdCLENBQWpCO0FBS0EsUUFBSXFHLFdBQVcsR0FBR0YsVUFBVSxDQUFDRyxpQkFBN0I7QUFFQSxRQUFJN0ksUUFBUSxHQUFHNEksV0FBVyxDQUFDcEssTUFBM0I7O0FBQ0EsU0FBSyxJQUFJeUIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsUUFBcEIsRUFBOEJDLENBQUMsRUFBL0IsRUFBbUM7QUFDbEMsVUFBSXdJLEdBQUcsR0FBR0csV0FBVyxDQUFDM0ksQ0FBRCxDQUFYLENBQWU4RixLQUF6QjtBQUNBLFdBQUtyQyxvQkFBTCxDQUEwQitFLEdBQTFCLEVBQStCekcsS0FBL0IsQ0FBcUNnQixTQUFyQyxHQUNDLGVBQ0E0RixXQUFXLENBQUMzSSxDQUFELENBQVgsQ0FBZXlCLENBRGYsR0FFQSxNQUZBLEdBR0FrSCxXQUFXLENBQUMzSSxDQUFELENBQVgsQ0FBZTJCLENBSGYsR0FJQSxLQUxEO0FBTUE7O0FBRUQsU0FBSzhCLG9CQUFMLENBQTBCcUMsS0FBMUIsRUFBaUNoRixTQUFqQyxDQUEyQ2dDLEdBQTNDLENBQ0Msd0JBREQ7QUFJQSxRQUFJaEQsY0FBYyxHQUFHLEVBQXJCO0FBQ0EsUUFBSUMsUUFBUSxHQUFHK0gsZ0JBQWdCLENBQUNTLHVCQUFqQixDQUF5Q2hLLE1BQXhEO0FBQ0EsUUFBSXNLLFFBQVEsR0FBR0YsV0FBVyxDQUFDcEssTUFBM0I7O0FBQ0EsU0FBSyxJQUFJeUIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsUUFBcEIsRUFBOEJDLENBQUMsRUFBL0IsRUFBbUM7QUFDbEMsVUFBSThJLFVBQVUsR0FBRyxLQUFqQjs7QUFDQSxXQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdGLFFBQXBCLEVBQThCRSxDQUFDLEVBQS9CLEVBQW1DO0FBQ2xDLFlBQ0NqQixnQkFBZ0IsQ0FBQ1MsdUJBQWpCLENBQXlDdkksQ0FBekMsS0FDQTJJLFdBQVcsQ0FBQ0ksQ0FBRCxDQUFYLENBQWVqRCxLQUZoQixFQUdFO0FBQ0RnRCxvQkFBVSxHQUFHLElBQWI7QUFDQTtBQUNBO0FBQ0Q7O0FBQ0QsVUFBSUEsVUFBVSxJQUFJLEtBQWxCLEVBQXlCO0FBQ3hCLFlBQUlOLEdBQUcsR0FBR1YsZ0JBQWdCLENBQUNTLHVCQUFqQixDQUF5Q3ZJLENBQXpDLENBQVY7QUFDQUYsc0JBQWMsQ0FBQ0csSUFBZixDQUNDNkgsZ0JBQWdCLENBQUNTLHVCQUFqQixDQUF5Q3ZJLENBQXpDLENBREQ7QUFHQSxhQUFLeUQsb0JBQUwsQ0FBMEIrRSxHQUExQixFQUErQjFILFNBQS9CLENBQXlDZ0MsR0FBekMsQ0FDQyx3QkFERDtBQUdBO0FBQ0Q7QUFDRCxHQXhHRDs7QUEwR0FoSyxnQkFBYyxDQUFDQyxTQUFmLENBQXlCb1EsU0FBekIsR0FBcUMsVUFBU3JELEtBQVQsRUFBZ0JzRCxHQUFoQixFQUFxQkMsR0FBckIsRUFBMEI7QUFDOUQsUUFBSXZCLGdCQUFnQixHQUFHLEtBQUt3Qix1QkFBTCxDQUE2QnhELEtBQTdCLEVBQW9Dc0QsR0FBcEMsRUFBeUNDLEdBQXpDLENBQXZCO0FBRUEsUUFBSS9HLElBQUksR0FBR3ZJLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLFNBQUwsQ0FBZSxLQUFLSSxZQUFMLENBQWtCeUwsS0FBbEIsQ0FBZixDQUFYLENBQVg7QUFDQXhELFFBQUksQ0FBQ2IsQ0FBTCxHQUFTMkgsR0FBVDtBQUNBOUcsUUFBSSxDQUFDWCxDQUFMLEdBQVMwSCxHQUFUO0FBQ0EsUUFBSXJCLFVBQVUsR0FBRyxLQUFLQyxjQUFMLENBQ2hCM0YsSUFEZ0IsRUFFaEJ3RixnQkFBZ0IsQ0FBQ0ksYUFGRCxDQUFqQixDQU44RCxDQVc5RDs7QUFDQTVGLFFBQUksQ0FBQzZGLGNBQUwsR0FBc0IsSUFBdEI7QUFDQSxRQUFJQyxnQkFBZ0IsR0FBRyxLQUFLQyxlQUFMLENBQXFCTCxVQUFyQixFQUFpQyxDQUFDMUYsSUFBRCxDQUFqQyxDQUF2QjtBQUVBLFFBQUlnRyw4QkFBOEIsR0FBRyxFQUFyQztBQUNBLFFBQUl2SSxRQUFRLEdBQUcrSCxnQkFBZ0IsQ0FBQ1MsdUJBQWpCLENBQXlDaEssTUFBeEQ7O0FBQ0EsU0FBSyxJQUFJeUIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsUUFBcEIsRUFBOEJDLENBQUMsRUFBL0IsRUFBbUM7QUFDbEMsVUFBSXdJLEdBQUcsR0FBR1YsZ0JBQWdCLENBQUNTLHVCQUFqQixDQUF5Q3ZJLENBQXpDLENBQVY7QUFDQXNJLG9DQUE4QixDQUFDdEksQ0FBRCxDQUE5QixHQUFvQ2pHLElBQUksQ0FBQ0MsS0FBTCxDQUNuQ0QsSUFBSSxDQUFDRSxTQUFMLENBQ0MsS0FBS0ksWUFBTCxDQUNDeU4sZ0JBQWdCLENBQUNTLHVCQUFqQixDQUF5Q3ZJLENBQXpDLENBREQsQ0FERCxDQURtQyxDQUFwQztBQU9Bc0ksb0NBQThCLENBQUN0SSxDQUFELENBQTlCLENBQWtDOEYsS0FBbEMsR0FBMEMwQyxHQUExQztBQUNBOztBQUVELFFBQUlDLFVBQVUsR0FBRyxLQUFLQyxzQkFBTCxDQUNoQkosOEJBRGdCLEVBRWhCdk8sSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsU0FBTCxDQUFlbU8sZ0JBQWYsQ0FBWCxDQUZnQixFQUdoQixDQUFDOUYsSUFBRCxDQUhnQixDQUFqQjtBQUtBLFFBQUlxRyxXQUFXLEdBQUdGLFVBQVUsQ0FBQ0csaUJBQTdCO0FBRUEsUUFBSXZPLFlBQVksR0FBR04sSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsU0FBTCxDQUFlLEtBQUtJLFlBQXBCLENBQVgsQ0FBbkI7QUFDQSxRQUFJMEYsUUFBUSxHQUFHNEksV0FBVyxDQUFDcEssTUFBM0I7O0FBQ0EsU0FBSyxJQUFJeUIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsUUFBcEIsRUFBOEJDLENBQUMsRUFBL0IsRUFBbUM7QUFDbEMsVUFBSXdJLEdBQUcsR0FBR0csV0FBVyxDQUFDM0ksQ0FBRCxDQUFYLENBQWU4RixLQUF6QjtBQUNBekwsa0JBQVksQ0FBQ21PLEdBQUQsQ0FBWixDQUFrQi9HLENBQWxCLEdBQXNCa0gsV0FBVyxDQUFDM0ksQ0FBRCxDQUFYLENBQWV5QixDQUFyQztBQUNBcEgsa0JBQVksQ0FBQ21PLEdBQUQsQ0FBWixDQUFrQjdHLENBQWxCLEdBQXNCZ0gsV0FBVyxDQUFDM0ksQ0FBRCxDQUFYLENBQWUyQixDQUFyQztBQUNBOztBQUNEdEgsZ0JBQVksQ0FBQ3lMLEtBQUQsQ0FBWixDQUFvQnJFLENBQXBCLEdBQXdCMkgsR0FBeEI7QUFDQS9PLGdCQUFZLENBQUN5TCxLQUFELENBQVosQ0FBb0JuRSxDQUFwQixHQUF3QjBILEdBQXhCO0FBRUEsUUFBSXZKLGNBQWMsR0FBRyxFQUFyQjtBQUNBLFFBQUlDLFFBQVEsR0FBRytILGdCQUFnQixDQUFDUyx1QkFBakIsQ0FBeUNoSyxNQUF4RDtBQUNBLFFBQUlzSyxRQUFRLEdBQUdGLFdBQVcsQ0FBQ3BLLE1BQTNCOztBQUNBLFNBQUssSUFBSXlCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELFFBQXBCLEVBQThCQyxDQUFDLEVBQS9CLEVBQW1DO0FBQ2xDLFVBQUk4SSxVQUFVLEdBQUcsS0FBakI7O0FBQ0EsV0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRixRQUFwQixFQUE4QkUsQ0FBQyxFQUEvQixFQUFtQztBQUNsQyxZQUNDakIsZ0JBQWdCLENBQUNTLHVCQUFqQixDQUF5Q3ZJLENBQXpDLEtBQ0EySSxXQUFXLENBQUNJLENBQUQsQ0FBWCxDQUFlakQsS0FGaEIsRUFHRTtBQUNEZ0Qsb0JBQVUsR0FBRyxJQUFiO0FBQ0E7QUFDQTtBQUNEOztBQUNELFVBQUlBLFVBQVUsSUFBSSxLQUFsQixFQUF5QjtBQUN4QmhKLHNCQUFjLENBQUNHLElBQWYsQ0FDQzZILGdCQUFnQixDQUFDUyx1QkFBakIsQ0FBeUN2SSxDQUF6QyxDQUREO0FBR0E7QUFDRDs7QUFFRCxRQUFJM0YsWUFBWSxHQUFHLEtBQUsyTyxpQkFBTCxDQUNsQjNPLFlBRGtCLEVBRWxCeUYsY0FGa0IsRUFHbEJnSSxnQkFIa0IsRUFJbEJoQyxLQUprQixFQUtsQi9MLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLFNBQUwsQ0FBZXdPLFVBQWYsQ0FBWCxDQUxrQixDQUFuQjtBQVFBLFFBQUkxSSxRQUFRLEdBQUcxRixZQUFZLENBQUNrRSxNQUE1Qjs7QUFDQSxTQUFLLElBQUl5QixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxRQUFwQixFQUE4QkMsQ0FBQyxFQUEvQixFQUFtQztBQUNsQyxXQUFLeUQsb0JBQUwsQ0FBMEJ6RCxDQUExQixFQUE2QitCLEtBQTdCLENBQW1DZ0IsU0FBbkMsR0FDQyxlQUNBMUksWUFBWSxDQUFDMkYsQ0FBRCxDQUFaLENBQWdCeUIsQ0FEaEIsR0FFQSxNQUZBLEdBR0FwSCxZQUFZLENBQUMyRixDQUFELENBQVosQ0FBZ0IyQixDQUhoQixHQUlBLEtBTEQ7QUFNQSxXQUFLOEIsb0JBQUwsQ0FBMEJ6RCxDQUExQixFQUE2QmMsU0FBN0IsQ0FBdUNtSSxNQUF2QyxDQUNDLHdCQUREO0FBR0E7O0FBRUQsU0FBSzVPLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0EsR0F6RkQ7O0FBMkZBdkIsZ0JBQWMsQ0FBQ0MsU0FBZixDQUF5QndRLGFBQXpCLEdBQXlDLFVBQVN6RCxLQUFULEVBQWdCc0QsR0FBaEIsRUFBcUJDLEdBQXJCLEVBQTBCO0FBQ2xFLFFBQUl0SixRQUFRLEdBQUcsS0FBSzBELG9CQUFMLENBQTBCbEYsTUFBekM7O0FBQ0EsU0FBSyxJQUFJeUIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsUUFBcEIsRUFBOEJDLENBQUMsRUFBL0IsRUFBbUM7QUFDbEMsV0FBS3lELG9CQUFMLENBQTBCekQsQ0FBMUIsRUFBNkIrQixLQUE3QixDQUFtQ2dCLFNBQW5DLEdBQ0MsZUFDQSxLQUFLMUksWUFBTCxDQUFrQjJGLENBQWxCLEVBQXFCeUIsQ0FEckIsR0FFQSxNQUZBLEdBR0EsS0FBS3BILFlBQUwsQ0FBa0IyRixDQUFsQixFQUFxQjJCLENBSHJCLEdBSUEsS0FMRDtBQU1BLFdBQUs4QixvQkFBTCxDQUEwQnpELENBQTFCLEVBQTZCYyxTQUE3QixDQUF1Q21JLE1BQXZDLENBQ0Msd0JBREQ7QUFHQTs7QUFFRCxRQUFJbkIsZ0JBQWdCLEdBQUcsS0FBS3dCLHVCQUFMLENBQTZCeEQsS0FBN0IsRUFBb0NzRCxHQUFwQyxFQUF5Q0MsR0FBekMsQ0FBdkI7QUFFQSxRQUFJL0csSUFBSSxHQUFHdkksSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsU0FBTCxDQUFlLEtBQUtJLFlBQUwsQ0FBa0J5TCxLQUFsQixDQUFmLENBQVgsQ0FBWDtBQUNBeEQsUUFBSSxDQUFDYixDQUFMLEdBQVMySCxHQUFUO0FBQ0E5RyxRQUFJLENBQUNYLENBQUwsR0FBUzBILEdBQVQ7QUFDQSxRQUFJckIsVUFBVSxHQUFHLEtBQUtDLGNBQUwsQ0FDaEIzRixJQURnQixFQUVoQndGLGdCQUFnQixDQUFDSSxhQUZELENBQWpCLENBbkJrRSxDQXdCbEU7O0FBQ0E1RixRQUFJLENBQUM2RixjQUFMLEdBQXNCLElBQXRCO0FBQ0EsUUFBSUMsZ0JBQWdCLEdBQUcsS0FBS0MsZUFBTCxDQUFxQkwsVUFBckIsRUFBaUMsQ0FBQzFGLElBQUQsQ0FBakMsQ0FBdkI7QUFFQSxRQUFJZ0csOEJBQThCLEdBQUcsRUFBckM7QUFDQSxRQUFJdkksUUFBUSxHQUFHK0gsZ0JBQWdCLENBQUNTLHVCQUFqQixDQUF5Q2hLLE1BQXhEOztBQUNBLFNBQUssSUFBSXlCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELFFBQXBCLEVBQThCQyxDQUFDLEVBQS9CLEVBQW1DO0FBQ2xDLFVBQUl3SSxHQUFHLEdBQUdWLGdCQUFnQixDQUFDUyx1QkFBakIsQ0FBeUN2SSxDQUF6QyxDQUFWO0FBQ0FzSSxvQ0FBOEIsQ0FBQ3RJLENBQUQsQ0FBOUIsR0FBb0NqRyxJQUFJLENBQUNDLEtBQUwsQ0FDbkNELElBQUksQ0FBQ0UsU0FBTCxDQUNDLEtBQUtJLFlBQUwsQ0FDQ3lOLGdCQUFnQixDQUFDUyx1QkFBakIsQ0FBeUN2SSxDQUF6QyxDQURELENBREQsQ0FEbUMsQ0FBcEM7QUFPQXNJLG9DQUE4QixDQUFDdEksQ0FBRCxDQUE5QixDQUFrQzhGLEtBQWxDLEdBQTBDMEMsR0FBMUM7QUFDQTs7QUFFRCxRQUFJQyxVQUFVLEdBQUcsS0FBS0Msc0JBQUwsQ0FDaEJKLDhCQURnQixFQUVoQnZPLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLFNBQUwsQ0FBZW1PLGdCQUFmLENBQVgsQ0FGZ0IsRUFHaEIsQ0FBQzlGLElBQUQsQ0FIZ0IsQ0FBakI7QUFLQSxRQUFJcUcsV0FBVyxHQUFHRixVQUFVLENBQUNHLGlCQUE3QjtBQUVBLFFBQUk3SSxRQUFRLEdBQUc0SSxXQUFXLENBQUNwSyxNQUEzQjs7QUFDQSxTQUFLLElBQUl5QixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxRQUFwQixFQUE4QkMsQ0FBQyxFQUEvQixFQUFtQztBQUNsQyxVQUFJd0ksR0FBRyxHQUFHRyxXQUFXLENBQUMzSSxDQUFELENBQVgsQ0FBZThGLEtBQXpCO0FBQ0EsV0FBS3JDLG9CQUFMLENBQTBCK0UsR0FBMUIsRUFBK0J6RyxLQUEvQixDQUFxQ2dCLFNBQXJDLEdBQ0MsZUFDQTRGLFdBQVcsQ0FBQzNJLENBQUQsQ0FBWCxDQUFleUIsQ0FEZixHQUVBLE1BRkEsR0FHQWtILFdBQVcsQ0FBQzNJLENBQUQsQ0FBWCxDQUFlMkIsQ0FIZixHQUlBLEtBTEQ7QUFNQTs7QUFFRCxTQUFLOEIsb0JBQUwsQ0FBMEJxQyxLQUExQixFQUFpQ2hGLFNBQWpDLENBQTJDZ0MsR0FBM0MsQ0FDQyx3QkFERDtBQUlBLFFBQUloRCxjQUFjLEdBQUcsRUFBckI7QUFDQSxRQUFJQyxRQUFRLEdBQUcrSCxnQkFBZ0IsQ0FBQ1MsdUJBQWpCLENBQXlDaEssTUFBeEQ7QUFDQSxRQUFJc0ssUUFBUSxHQUFHRixXQUFXLENBQUNwSyxNQUEzQjs7QUFDQSxTQUFLLElBQUl5QixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxRQUFwQixFQUE4QkMsQ0FBQyxFQUEvQixFQUFtQztBQUNsQyxVQUFJOEksVUFBVSxHQUFHLEtBQWpCOztBQUNBLFdBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0YsUUFBcEIsRUFBOEJFLENBQUMsRUFBL0IsRUFBbUM7QUFDbEMsWUFDQ2pCLGdCQUFnQixDQUFDUyx1QkFBakIsQ0FBeUN2SSxDQUF6QyxLQUNBMkksV0FBVyxDQUFDSSxDQUFELENBQVgsQ0FBZWpELEtBRmhCLEVBR0U7QUFDRGdELG9CQUFVLEdBQUcsSUFBYjtBQUNBO0FBQ0E7QUFDRDs7QUFDRCxVQUFJQSxVQUFVLElBQUksS0FBbEIsRUFBeUI7QUFDeEIsWUFBSU4sR0FBRyxHQUFHVixnQkFBZ0IsQ0FBQ1MsdUJBQWpCLENBQXlDdkksQ0FBekMsQ0FBVjtBQUNBRixzQkFBYyxDQUFDRyxJQUFmLENBQ0M2SCxnQkFBZ0IsQ0FBQ1MsdUJBQWpCLENBQXlDdkksQ0FBekMsQ0FERDtBQUdBLGFBQUt5RCxvQkFBTCxDQUEwQitFLEdBQTFCLEVBQStCMUgsU0FBL0IsQ0FBeUNnQyxHQUF6QyxDQUNDLHdCQUREO0FBR0E7QUFDRDtBQUNELEdBeEZEOztBQTBGQWhLLGdCQUFjLENBQUNDLFNBQWYsQ0FBeUJrUCxjQUF6QixHQUEwQyxVQUFTM0YsSUFBVCxFQUFlNEYsYUFBZixFQUE4QjtBQUN2RSxRQUFJRixVQUFVLEdBQUcsRUFBakI7QUFDQSxRQUFJakksUUFBUSxHQUFHbUksYUFBYSxDQUFDM0osTUFBN0I7O0FBQ0EsU0FBSyxJQUFJeUIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsUUFBcEIsRUFBOEJDLENBQUMsRUFBL0IsRUFBbUM7QUFDbEMsVUFBSXdKLE1BQU0sR0FBRyxLQUFLQyxxQ0FBTCxDQUNabkgsSUFEWSxFQUVaLEtBQUtqSSxZQUFMLENBQWtCNk4sYUFBYSxDQUFDbEksQ0FBRCxDQUEvQixDQUZZLEVBR1osS0FIWSxDQUFiOztBQUtBLFVBQUl3SixNQUFNLENBQUNFLFFBQVAsSUFBbUIsSUFBdkIsRUFBNkI7QUFDNUI7QUFDQSxPQUZELE1BRU87QUFDTixZQUFJQyxFQUFFLEdBQUcsS0FBS0MsY0FBTCxDQUNSLEtBQUt2UCxZQUFMLENBQWtCNk4sYUFBYSxDQUFDbEksQ0FBRCxDQUEvQixDQURRLEVBRVJzQyxJQUZRLENBQVQ7QUFJQSxZQUFJdUcsUUFBUSxHQUFHYyxFQUFFLENBQUNwTCxNQUFsQjs7QUFDQSxhQUFLLElBQUl3SyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRixRQUFwQixFQUE4QkUsQ0FBQyxFQUEvQixFQUFtQztBQUNsQ2Ysb0JBQVUsQ0FBQy9ILElBQVgsQ0FBZ0IwSixFQUFFLENBQUNaLENBQUQsQ0FBbEI7QUFDQTtBQUNEO0FBQ0Q7O0FBQ0QsV0FBT2YsVUFBUDtBQUNBLEdBdkJEOztBQXlCQWxQLGdCQUFjLENBQUNDLFNBQWYsQ0FBeUJzUCxlQUF6QixHQUEyQyxVQUMxQ0wsVUFEMEMsRUFFMUM2QixlQUYwQyxFQUd6QztBQUNELFFBQUlDLHVDQUF1QyxHQUFHOUIsVUFBVSxDQUFDK0IsTUFBWCxDQUM3Q0YsZUFENkMsQ0FBOUM7O0FBR0EsUUFBSUcsa0JBQWtCLEdBQUcsVUFBU0MsS0FBVCxFQUFnQkMsS0FBaEIsRUFBdUJDLE9BQXZCLEVBQWdDO0FBQ3hELFVBQUl6SixJQUFJLEdBQUcsS0FBWDtBQUNBLFVBQUlYLFFBQVEsR0FBR2tLLEtBQUssQ0FBQzFMLE1BQXJCOztBQUNBLFdBQUssSUFBSXlCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELFFBQXBCLEVBQThCQyxDQUFDLEVBQS9CLEVBQW1DO0FBQ2xDLFlBQUltSyxPQUFPLENBQUNDLGFBQVIsQ0FBc0JILEtBQUssQ0FBQ2pLLENBQUQsQ0FBM0IsRUFBZ0NrSyxLQUFoQyxDQUFKLEVBQTRDO0FBQzNDeEosY0FBSSxHQUFHLElBQVA7QUFDQTtBQUNBO0FBQ0Q7O0FBQ0QsYUFBT0EsSUFBUDtBQUNBLEtBVkQ7O0FBWUEsUUFBSTJKLFdBQVcsR0FBRyxFQUFsQjtBQUNBLFFBQUl0SyxRQUFRLEdBQUdpSSxVQUFVLENBQUN6SixNQUExQjs7QUFDQSxTQUFLLElBQUl5QixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxRQUFRLEdBQUcsQ0FBL0IsRUFBa0NDLENBQUMsRUFBbkMsRUFBdUM7QUFDdEMsV0FBSyxJQUFJK0ksQ0FBQyxHQUFHL0ksQ0FBQyxHQUFHLENBQWpCLEVBQW9CK0ksQ0FBQyxHQUFHaEosUUFBeEIsRUFBa0NnSixDQUFDLEVBQW5DLEVBQXVDO0FBQ3RDLFlBQ0MsQ0FBQyxLQUFLdUIsc0NBQUwsQ0FDQXRDLFVBQVUsQ0FBQ2hJLENBQUQsQ0FEVixFQUVBZ0ksVUFBVSxDQUFDZSxDQUFELENBRlYsQ0FERixFQUtFO0FBQ0QsY0FBSXdCLFdBQVcsR0FBRyxLQUFLQyxXQUFMLENBQ2pCeEMsVUFBVSxDQUFDaEksQ0FBRCxDQURPLEVBRWpCZ0ksVUFBVSxDQUFDZSxDQUFELENBRk8sRUFHakJlLHVDQUhpQixDQUFsQjs7QUFLQSxjQUFJUyxXQUFXLElBQUksS0FBbkIsRUFBMEI7QUFDekIsZ0JBQ0MsQ0FBQ1Asa0JBQWtCLENBQUNLLFdBQUQsRUFBY0UsV0FBZCxFQUEyQixJQUEzQixDQURwQixFQUVFO0FBQ0RGLHlCQUFXLENBQUNwSyxJQUFaLENBQWlCc0ssV0FBakI7QUFDQTtBQUNEO0FBQ0Q7QUFDRDtBQUNEOztBQUVELFFBQUlFLDRCQUE0QixHQUFHLFVBQ2xDekMsVUFEa0MsRUFFbENxQyxXQUZrQyxFQUdsQ1AsdUNBSGtDLEVBSWxDSyxPQUprQyxFQUtqQztBQUNELFVBQUlPLFFBQVEsR0FBRyxFQUFmO0FBQ0EsVUFBSTNLLFFBQVEsR0FBR2lJLFVBQVUsQ0FBQ3pKLE1BQTFCO0FBQ0EsVUFBSXNLLFFBQVEsR0FBR3dCLFdBQVcsQ0FBQzlMLE1BQTNCOztBQUNBLFdBQUssSUFBSXlCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELFFBQXBCLEVBQThCQyxDQUFDLEVBQS9CLEVBQW1DO0FBQ2xDLGFBQUssSUFBSStJLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdGLFFBQXBCLEVBQThCRSxDQUFDLEVBQS9CLEVBQW1DO0FBQ2xDLGNBQ0MsQ0FBQ29CLE9BQU8sQ0FBQ0csc0NBQVIsQ0FDQXRDLFVBQVUsQ0FBQ2hJLENBQUQsQ0FEVixFQUVBcUssV0FBVyxDQUFDdEIsQ0FBRCxDQUZYLENBREYsRUFLRTtBQUNELGdCQUFJd0IsV0FBVyxHQUFHSixPQUFPLENBQUNLLFdBQVIsQ0FDakJ4QyxVQUFVLENBQUNoSSxDQUFELENBRE8sRUFFakJxSyxXQUFXLENBQUN0QixDQUFELENBRk0sRUFHakJlLHVDQUhpQixDQUFsQjs7QUFLQSxnQkFBSVMsV0FBVyxJQUFJLEtBQW5CLEVBQTBCO0FBQ3pCLGtCQUNDLENBQUNQLGtCQUFrQixDQUNsQkssV0FBVyxDQUFDTixNQUFaLENBQW1CVyxRQUFuQixDQURrQixFQUVsQkgsV0FGa0IsRUFHbEJKLE9BSGtCLENBRHBCLEVBTUU7QUFDRE8sd0JBQVEsQ0FBQ3pLLElBQVQsQ0FBY3NLLFdBQWQ7QUFDQTtBQUNEO0FBQ0Q7QUFDRDtBQUNEOztBQUNELGFBQU9HLFFBQVA7QUFDQSxLQXJDRDs7QUF1Q0EsUUFBSUEsUUFBUSxHQUFHRCw0QkFBNEIsQ0FDMUN6QyxVQUQwQyxFQUUxQ3FDLFdBRjBDLEVBRzFDUCx1Q0FIMEMsRUFJMUMsSUFKMEMsQ0FBM0M7O0FBT0EsV0FBT1ksUUFBUSxDQUFDbk0sTUFBVCxHQUFrQixDQUF6QixFQUE0QjtBQUMzQjhMLGlCQUFXLEdBQUdBLFdBQVcsQ0FBQ04sTUFBWixDQUFtQlcsUUFBbkIsQ0FBZDtBQUNBLFVBQUlBLFFBQVEsR0FBR0QsNEJBQTRCLENBQzFDekMsVUFEMEMsRUFFMUNxQyxXQUYwQyxFQUcxQ1AsdUNBSDBDLEVBSTFDLElBSjBDLENBQTNDO0FBTUE7O0FBRURPLGVBQVcsR0FBR0EsV0FBVyxDQUFDTixNQUFaLENBQW1CL0IsVUFBbkIsQ0FBZDtBQUVBLFFBQUkyQyxlQUFlLEdBQUcsRUFBdEI7QUFDQSxRQUFJNUssUUFBUSxHQUFHc0ssV0FBVyxDQUFDOUwsTUFBM0I7O0FBQ0EsU0FBSyxJQUFJeUIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsUUFBUSxHQUFHLENBQS9CLEVBQWtDQyxDQUFDLEVBQW5DLEVBQXVDO0FBQ3RDLFdBQUssSUFBSStJLENBQUMsR0FBRy9JLENBQUMsR0FBRyxDQUFqQixFQUFvQitJLENBQUMsR0FBR2hKLFFBQXhCLEVBQWtDZ0osQ0FBQyxFQUFuQyxFQUF1QztBQUN0QyxZQUFJUyxNQUFNLEdBQUcsS0FBS0MscUNBQUwsQ0FDWlksV0FBVyxDQUFDckssQ0FBRCxDQURDLEVBRVpxSyxXQUFXLENBQUN0QixDQUFELENBRkMsRUFHWixLQUhZLENBQWI7O0FBS0EsWUFBSVMsTUFBTSxDQUFDRSxRQUFYLEVBQXFCO0FBQ3BCaUIseUJBQWUsQ0FBQzVCLENBQUQsQ0FBZixHQUFxQixJQUFyQjtBQUNBLFNBRkQsTUFFTztBQUNOLGNBQUlTLE1BQU0sR0FBRyxLQUFLQyxxQ0FBTCxDQUNaWSxXQUFXLENBQUN0QixDQUFELENBREMsRUFFWnNCLFdBQVcsQ0FBQ3JLLENBQUQsQ0FGQyxFQUdaLEtBSFksQ0FBYjs7QUFLQSxjQUFJd0osTUFBTSxDQUFDRSxRQUFYLEVBQXFCO0FBQ3BCaUIsMkJBQWUsQ0FBQzNLLENBQUQsQ0FBZixHQUFxQixJQUFyQjtBQUNBO0FBQ0Q7QUFDRDtBQUNEOztBQUVELFFBQUk0SyxpQkFBaUIsR0FBRyxFQUF4QjtBQUNBLFFBQUk3SyxRQUFRLEdBQUdzSyxXQUFXLENBQUM5TCxNQUEzQjs7QUFDQSxTQUFLLElBQUl5QixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxRQUFwQixFQUE4QkMsQ0FBQyxFQUEvQixFQUFtQztBQUNsQyxVQUFJLENBQUMySyxlQUFlLENBQUNFLGNBQWhCLENBQStCN0ssQ0FBL0IsQ0FBTCxFQUF3QztBQUN2QzRLLHlCQUFpQixDQUFDM0ssSUFBbEIsQ0FBdUJvSyxXQUFXLENBQUNySyxDQUFELENBQWxDO0FBQ0E7QUFDRDs7QUFFRCxXQUFPNEssaUJBQVA7QUFDQSxHQXhJRDs7QUEwSUE5UixnQkFBYyxDQUFDQyxTQUFmLENBQXlCdVEsdUJBQXpCLEdBQW1ELFVBQ2xEeEQsS0FEa0QsRUFFbERzRCxHQUZrRCxFQUdsREMsR0FIa0QsRUFJakQ7QUFDRCxRQUFJL0csSUFBSSxHQUFHdkksSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsU0FBTCxDQUFlLEtBQUtJLFlBQUwsQ0FBa0J5TCxLQUFsQixDQUFmLENBQVgsQ0FBWDtBQUNBeEQsUUFBSSxDQUFDYixDQUFMLEdBQVMySCxHQUFUO0FBQ0E5RyxRQUFJLENBQUNYLENBQUwsR0FBUzBILEdBQVQ7QUFDQSxRQUFJbkIsYUFBYSxHQUFHLEVBQXBCO0FBQ0EsUUFBSUssdUJBQXVCLEdBQUcsRUFBOUI7QUFFQSxRQUFJeEksUUFBUSxHQUFHLEtBQUsxRixZQUFMLENBQWtCa0UsTUFBakM7O0FBQ0EsU0FBSyxJQUFJeUIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsUUFBcEIsRUFBOEJDLENBQUMsRUFBL0IsRUFBbUM7QUFDbEMsVUFBSXdKLE1BQU0sR0FBRyxLQUFLQyxxQ0FBTCxDQUNabkgsSUFEWSxFQUVaLEtBQUtqSSxZQUFMLENBQWtCMkYsQ0FBbEIsQ0FGWSxDQUFiOztBQUlBLFVBQUl3SixNQUFNLElBQUksSUFBZCxFQUFvQjtBQUNuQnRCLHFCQUFhLENBQUNqSSxJQUFkLENBQW1CRCxDQUFuQjs7QUFDQSxZQUFJQSxDQUFDLElBQUk4RixLQUFULEVBQWdCO0FBQ2Z5QyxpQ0FBdUIsQ0FBQ3RJLElBQXhCLENBQTZCRCxDQUE3QjtBQUNBO0FBQ0Q7QUFDRDs7QUFFRCxXQUFPO0FBQ05rSSxtQkFBYSxFQUFFQSxhQURUO0FBRU5LLDZCQUF1QixFQUFFQTtBQUZuQixLQUFQO0FBSUEsR0E3QkQ7O0FBK0JBelAsZ0JBQWMsQ0FBQ0MsU0FBZixDQUF5QmdQLHlCQUF6QixHQUFxRCxVQUNwRGpDLEtBRG9ELEVBRXBENUYsS0FGb0QsRUFHcERDLE1BSG9ELEVBSW5EO0FBQ0QsUUFBSW1DLElBQUksR0FBR3ZJLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLFNBQUwsQ0FBZSxLQUFLSSxZQUFMLENBQWtCeUwsS0FBbEIsQ0FBZixDQUFYLENBQVg7QUFDQXhELFFBQUksQ0FBQ3BDLEtBQUwsR0FBYUEsS0FBYjtBQUNBb0MsUUFBSSxDQUFDbkMsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsUUFBSStILGFBQWEsR0FBRyxFQUFwQjtBQUNBLFFBQUlLLHVCQUF1QixHQUFHLEVBQTlCO0FBRUEsUUFBSXhJLFFBQVEsR0FBRyxLQUFLMUYsWUFBTCxDQUFrQmtFLE1BQWpDOztBQUNBLFNBQUssSUFBSXlCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELFFBQXBCLEVBQThCQyxDQUFDLEVBQS9CLEVBQW1DO0FBQ2xDLFVBQUl3SixNQUFNLEdBQUcsS0FBS0MscUNBQUwsQ0FDWm5ILElBRFksRUFFWixLQUFLakksWUFBTCxDQUFrQjJGLENBQWxCLENBRlksQ0FBYjs7QUFJQSxVQUFJd0osTUFBTSxJQUFJLElBQWQsRUFBb0I7QUFDbkJ0QixxQkFBYSxDQUFDakksSUFBZCxDQUFtQkQsQ0FBbkI7O0FBQ0EsWUFBSUEsQ0FBQyxJQUFJOEYsS0FBVCxFQUFnQjtBQUNmeUMsaUNBQXVCLENBQUN0SSxJQUF4QixDQUE2QkQsQ0FBN0I7QUFDQTtBQUNEO0FBQ0Q7O0FBRUQsV0FBTztBQUNOa0ksbUJBQWEsRUFBRUEsYUFEVDtBQUVOSyw2QkFBdUIsRUFBRUE7QUFGbkIsS0FBUDtBQUlBLEdBN0JEOztBQStCQXpQLGdCQUFjLENBQUNDLFNBQWYsQ0FBeUIwUSxxQ0FBekIsR0FBaUUsVUFDaEVxQixDQURnRSxFQUVoRUMsQ0FGZ0UsRUFHaEVDLFVBSGdFLEVBSS9EO0FBQ0QsUUFBSUMsUUFBUSxHQUFHLENBQUNILENBQUMsQ0FBQ3JKLENBQUgsRUFBTXFKLENBQUMsQ0FBQ25KLENBQVIsQ0FBZjtBQUNBLFFBQUl1SixTQUFTLEdBQUcsQ0FBQ0osQ0FBQyxDQUFDckosQ0FBRixHQUFNcUosQ0FBQyxDQUFDNUssS0FBVCxFQUFnQjRLLENBQUMsQ0FBQ25KLENBQWxCLENBQWhCO0FBQ0EsUUFBSXdKLFdBQVcsR0FBRyxDQUFDTCxDQUFDLENBQUNySixDQUFILEVBQU1xSixDQUFDLENBQUNuSixDQUFGLEdBQU1tSixDQUFDLENBQUMzSyxNQUFkLENBQWxCO0FBQ0EsUUFBSWlMLFlBQVksR0FBRyxDQUFDTixDQUFDLENBQUNySixDQUFGLEdBQU1xSixDQUFDLENBQUM1SyxLQUFULEVBQWdCNEssQ0FBQyxDQUFDbkosQ0FBRixHQUFNbUosQ0FBQyxDQUFDM0ssTUFBeEIsQ0FBbkI7QUFFQSxRQUFJa0wsZUFBZSxHQUFHLENBQUNKLFFBQUQsRUFBV0MsU0FBWCxFQUFzQkUsWUFBdEIsRUFBb0NELFdBQXBDLENBQXRCO0FBRUEsUUFBSUcsUUFBUSxHQUFHLENBQUNQLENBQUMsQ0FBQ3RKLENBQUgsRUFBTXNKLENBQUMsQ0FBQ3BKLENBQVIsQ0FBZjtBQUNBLFFBQUk0SixTQUFTLEdBQUcsQ0FBQ1IsQ0FBQyxDQUFDdEosQ0FBRixHQUFNc0osQ0FBQyxDQUFDN0ssS0FBVCxFQUFnQjZLLENBQUMsQ0FBQ3BKLENBQWxCLENBQWhCO0FBQ0EsUUFBSTZKLFdBQVcsR0FBRyxDQUFDVCxDQUFDLENBQUN0SixDQUFILEVBQU1zSixDQUFDLENBQUNwSixDQUFGLEdBQU1vSixDQUFDLENBQUM1SyxNQUFkLENBQWxCO0FBQ0EsUUFBSXNMLFlBQVksR0FBRyxDQUFDVixDQUFDLENBQUN0SixDQUFGLEdBQU1zSixDQUFDLENBQUM3SyxLQUFULEVBQWdCNkssQ0FBQyxDQUFDcEosQ0FBRixHQUFNb0osQ0FBQyxDQUFDNUssTUFBeEIsQ0FBbkI7QUFFQSxRQUFJdUwsZUFBZSxHQUFHLENBQUNKLFFBQUQsRUFBV0MsU0FBWCxFQUFzQkUsWUFBdEIsRUFBb0NELFdBQXBDLENBQXRCO0FBQ0EsUUFBSUcsVUFBVSxHQUFHLEVBQWpCO0FBQ0EsUUFBSWpDLFFBQVEsR0FBRyxDQUFmO0FBQ0EsUUFBSWtDLGFBQWEsR0FBRyxLQUFwQjtBQUNBLFFBQUk3TCxRQUFRLEdBQUcyTCxlQUFlLENBQUNuTixNQUEvQjs7QUFDQSxTQUFLLElBQUl5QixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxRQUFwQixFQUE4QkMsQ0FBQyxFQUEvQixFQUFtQztBQUNsQyxVQUNDMEwsZUFBZSxDQUFDMUwsQ0FBRCxDQUFmLENBQW1CLENBQW5CLEtBQXlCaUwsUUFBUSxDQUFDLENBQUQsQ0FBakMsSUFDQVMsZUFBZSxDQUFDMUwsQ0FBRCxDQUFmLENBQW1CLENBQW5CLEtBQXlCa0wsU0FBUyxDQUFDLENBQUQsQ0FEbEMsSUFFQVEsZUFBZSxDQUFDMUwsQ0FBRCxDQUFmLENBQW1CLENBQW5CLEtBQXlCbUwsV0FBVyxDQUFDLENBQUQsQ0FGcEMsSUFHQU8sZUFBZSxDQUFDMUwsQ0FBRCxDQUFmLENBQW1CLENBQW5CLEtBQXlCb0wsWUFBWSxDQUFDLENBQUQsQ0FIckMsSUFJQU0sZUFBZSxDQUFDMUwsQ0FBRCxDQUFmLENBQW1CLENBQW5CLEtBQXlCaUwsUUFBUSxDQUFDLENBQUQsQ0FKakMsSUFLQVMsZUFBZSxDQUFDMUwsQ0FBRCxDQUFmLENBQW1CLENBQW5CLEtBQXlCbUwsV0FBVyxDQUFDLENBQUQsQ0FMcEMsSUFNQU8sZUFBZSxDQUFDMUwsQ0FBRCxDQUFmLENBQW1CLENBQW5CLEtBQXlCa0wsU0FBUyxDQUFDLENBQUQsQ0FObEMsSUFPQVEsZUFBZSxDQUFDMUwsQ0FBRCxDQUFmLENBQW1CLENBQW5CLEtBQXlCb0wsWUFBWSxDQUFDLENBQUQsQ0FSdEMsRUFTRTtBQUNETyxrQkFBVSxDQUFDM0wsQ0FBRCxDQUFWLEdBQWdCLElBQWhCO0FBQ0EwSixnQkFBUTtBQUNSa0MscUJBQWEsR0FBRyxJQUFoQjtBQUNBLE9BYkQsTUFhTztBQUNORCxrQkFBVSxDQUFDM0wsQ0FBRCxDQUFWLEdBQWdCLEtBQWhCO0FBQ0E7QUFDRDs7QUFDRCxRQUFJMEosUUFBUSxJQUFJLENBQWhCLEVBQW1CO0FBQ2xCQSxjQUFRLEdBQUcsSUFBWDtBQUNBLEtBRkQsTUFFTztBQUNOQSxjQUFRLEdBQUcsS0FBWDtBQUNBOztBQUVELFFBQUltQyxRQUFRLEdBQUcsS0FBZjtBQUNBLFFBQUlDLGtCQUFrQixHQUFHLENBQXpCO0FBQ0EsUUFBSS9MLFFBQVEsR0FBR3NMLGVBQWUsQ0FBQzlNLE1BQS9COztBQUNBLFNBQUssSUFBSXlCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELFFBQXBCLEVBQThCQyxDQUFDLEVBQS9CLEVBQW1DO0FBQ2xDLFVBQ0NxTCxlQUFlLENBQUNyTCxDQUFELENBQWYsQ0FBbUIsQ0FBbkIsS0FBeUJzTCxRQUFRLENBQUMsQ0FBRCxDQUFqQyxJQUNBRCxlQUFlLENBQUNyTCxDQUFELENBQWYsQ0FBbUIsQ0FBbkIsS0FBeUJ1TCxTQUFTLENBQUMsQ0FBRCxDQURsQyxJQUVBRixlQUFlLENBQUNyTCxDQUFELENBQWYsQ0FBbUIsQ0FBbkIsS0FBeUJ3TCxXQUFXLENBQUMsQ0FBRCxDQUZwQyxJQUdBSCxlQUFlLENBQUNyTCxDQUFELENBQWYsQ0FBbUIsQ0FBbkIsS0FBeUJ5TCxZQUFZLENBQUMsQ0FBRCxDQUhyQyxJQUlBSixlQUFlLENBQUNyTCxDQUFELENBQWYsQ0FBbUIsQ0FBbkIsS0FBeUJzTCxRQUFRLENBQUMsQ0FBRCxDQUpqQyxJQUtBRCxlQUFlLENBQUNyTCxDQUFELENBQWYsQ0FBbUIsQ0FBbkIsS0FBeUJ3TCxXQUFXLENBQUMsQ0FBRCxDQUxwQyxJQU1BSCxlQUFlLENBQUNyTCxDQUFELENBQWYsQ0FBbUIsQ0FBbkIsS0FBeUJ1TCxTQUFTLENBQUMsQ0FBRCxDQU5sQyxJQU9BRixlQUFlLENBQUNyTCxDQUFELENBQWYsQ0FBbUIsQ0FBbkIsS0FBeUJ5TCxZQUFZLENBQUMsQ0FBRCxDQVJ0QyxFQVNFO0FBQ0RHLHFCQUFhLEdBQUcsSUFBaEI7QUFDQUUsMEJBQWtCO0FBQ2xCO0FBQ0Q7O0FBRUQsUUFBSUEsa0JBQWtCLElBQUksQ0FBMUIsRUFBNkI7QUFDNUJELGNBQVEsR0FBRyxJQUFYO0FBQ0E7O0FBRUQsUUFDRVAsUUFBUSxDQUFDLENBQUQsQ0FBUixHQUFjTCxRQUFRLENBQUMsQ0FBRCxDQUF0QixJQUNBTSxTQUFTLENBQUMsQ0FBRCxDQUFULEdBQWVMLFNBQVMsQ0FBQyxDQUFELENBRHhCLElBRUFJLFFBQVEsQ0FBQyxDQUFELENBQVIsR0FBY0wsUUFBUSxDQUFDLENBQUQsQ0FGdEIsSUFHQU8sV0FBVyxDQUFDLENBQUQsQ0FBWCxHQUFpQkwsV0FBVyxDQUFDLENBQUQsQ0FIN0IsSUFJQ0csUUFBUSxDQUFDLENBQUQsQ0FBUixHQUFjTCxRQUFRLENBQUMsQ0FBRCxDQUF0QixJQUNBTyxXQUFXLENBQUMsQ0FBRCxDQUFYLEdBQWlCTCxXQUFXLENBQUMsQ0FBRCxDQUQ1QixJQUVBRyxRQUFRLENBQUMsQ0FBRCxDQUFSLEdBQWNMLFFBQVEsQ0FBQyxDQUFELENBRnRCLElBR0FNLFNBQVMsQ0FBQyxDQUFELENBQVQsR0FBZUwsU0FBUyxDQUFDLENBQUQsQ0FSMUIsRUFTRTtBQUNEVSxtQkFBYSxHQUFHLElBQWhCO0FBQ0E7O0FBRUQsUUFBSVosVUFBVSxJQUFJLFNBQWxCLEVBQTZCO0FBQzVCLGFBQU9ZLGFBQVA7QUFDQSxLQUZELE1BRU8sSUFBSVosVUFBVSxJQUFJLFlBQWxCLEVBQWdDO0FBQ3RDLGFBQU9XLFVBQVA7QUFDQSxLQUZNLE1BRUEsSUFBSVgsVUFBVSxJQUFJLEtBQWxCLEVBQXlCO0FBQy9CLGFBQU87QUFDTmUsZUFBTyxFQUFFSCxhQURIO0FBRU5JLGtCQUFVLEVBQUVMLFVBRk47QUFHTmpDLGdCQUFRLEVBQUVBLFFBSEo7QUFJTm1DLGdCQUFRLEVBQUVBO0FBSkosT0FBUDtBQU1BLEtBUE0sTUFPQTtBQUNOLGFBQU9ELGFBQVA7QUFDQTtBQUNELEdBaEdEOztBQWtHQTlTLGdCQUFjLENBQUNDLFNBQWYsQ0FBeUJ1UixzQ0FBekIsR0FBa0UsVUFDakVRLENBRGlFLEVBRWpFQyxDQUZpRSxFQUdqRUMsVUFIaUUsRUFJaEU7QUFDRCxRQUFJQyxRQUFRLEdBQUcsQ0FBQ0gsQ0FBQyxDQUFDckosQ0FBSCxFQUFNcUosQ0FBQyxDQUFDbkosQ0FBUixDQUFmO0FBQ0EsUUFBSXVKLFNBQVMsR0FBRyxDQUFDSixDQUFDLENBQUNySixDQUFGLEdBQU1xSixDQUFDLENBQUM1SyxLQUFULEVBQWdCNEssQ0FBQyxDQUFDbkosQ0FBbEIsQ0FBaEI7QUFDQSxRQUFJd0osV0FBVyxHQUFHLENBQUNMLENBQUMsQ0FBQ3JKLENBQUgsRUFBTXFKLENBQUMsQ0FBQ25KLENBQUYsR0FBTW1KLENBQUMsQ0FBQzNLLE1BQWQsQ0FBbEI7QUFDQSxRQUFJaUwsWUFBWSxHQUFHLENBQUNOLENBQUMsQ0FBQ3JKLENBQUYsR0FBTXFKLENBQUMsQ0FBQzVLLEtBQVQsRUFBZ0I0SyxDQUFDLENBQUNuSixDQUFGLEdBQU1tSixDQUFDLENBQUMzSyxNQUF4QixDQUFuQjtBQUVBLFFBQUlrTCxlQUFlLEdBQUcsQ0FBQ0osUUFBRCxFQUFXQyxTQUFYLEVBQXNCRSxZQUF0QixFQUFvQ0QsV0FBcEMsQ0FBdEI7QUFFQSxRQUFJRyxRQUFRLEdBQUcsQ0FBQ1AsQ0FBQyxDQUFDdEosQ0FBSCxFQUFNc0osQ0FBQyxDQUFDcEosQ0FBUixDQUFmO0FBQ0EsUUFBSTRKLFNBQVMsR0FBRyxDQUFDUixDQUFDLENBQUN0SixDQUFGLEdBQU1zSixDQUFDLENBQUM3SyxLQUFULEVBQWdCNkssQ0FBQyxDQUFDcEosQ0FBbEIsQ0FBaEI7QUFDQSxRQUFJNkosV0FBVyxHQUFHLENBQUNULENBQUMsQ0FBQ3RKLENBQUgsRUFBTXNKLENBQUMsQ0FBQ3BKLENBQUYsR0FBTW9KLENBQUMsQ0FBQzVLLE1BQWQsQ0FBbEI7QUFDQSxRQUFJc0wsWUFBWSxHQUFHLENBQUNWLENBQUMsQ0FBQ3RKLENBQUYsR0FBTXNKLENBQUMsQ0FBQzdLLEtBQVQsRUFBZ0I2SyxDQUFDLENBQUNwSixDQUFGLEdBQU1vSixDQUFDLENBQUM1SyxNQUF4QixDQUFuQjtBQUVBLFFBQUl1TCxlQUFlLEdBQUcsQ0FBQ0osUUFBRCxFQUFXQyxTQUFYLEVBQXNCRSxZQUF0QixFQUFvQ0QsV0FBcEMsQ0FBdEI7QUFDQSxRQUFJRyxVQUFVLEdBQUcsRUFBakI7QUFDQSxRQUFJakMsUUFBUSxHQUFHLENBQWY7QUFDQSxRQUFJa0MsYUFBYSxHQUFHLEtBQXBCO0FBQ0EsUUFBSTdMLFFBQVEsR0FBRzJMLGVBQWUsQ0FBQ25OLE1BQS9COztBQUNBLFNBQUssSUFBSXlCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELFFBQXBCLEVBQThCQyxDQUFDLEVBQS9CLEVBQW1DO0FBQ2xDLFVBQ0MwTCxlQUFlLENBQUMxTCxDQUFELENBQWYsQ0FBbUIsQ0FBbkIsSUFBd0JpTCxRQUFRLENBQUMsQ0FBRCxDQUFoQyxJQUNBUyxlQUFlLENBQUMxTCxDQUFELENBQWYsQ0FBbUIsQ0FBbkIsSUFBd0JrTCxTQUFTLENBQUMsQ0FBRCxDQURqQyxJQUVBUSxlQUFlLENBQUMxTCxDQUFELENBQWYsQ0FBbUIsQ0FBbkIsSUFBd0JtTCxXQUFXLENBQUMsQ0FBRCxDQUZuQyxJQUdBTyxlQUFlLENBQUMxTCxDQUFELENBQWYsQ0FBbUIsQ0FBbkIsSUFBd0JvTCxZQUFZLENBQUMsQ0FBRCxDQUhwQyxJQUlBTSxlQUFlLENBQUMxTCxDQUFELENBQWYsQ0FBbUIsQ0FBbkIsSUFBd0JpTCxRQUFRLENBQUMsQ0FBRCxDQUpoQyxJQUtBUyxlQUFlLENBQUMxTCxDQUFELENBQWYsQ0FBbUIsQ0FBbkIsSUFBd0JtTCxXQUFXLENBQUMsQ0FBRCxDQUxuQyxJQU1BTyxlQUFlLENBQUMxTCxDQUFELENBQWYsQ0FBbUIsQ0FBbkIsSUFBd0JrTCxTQUFTLENBQUMsQ0FBRCxDQU5qQyxJQU9BUSxlQUFlLENBQUMxTCxDQUFELENBQWYsQ0FBbUIsQ0FBbkIsSUFBd0JvTCxZQUFZLENBQUMsQ0FBRCxDQVJyQyxFQVNFO0FBQ0RPLGtCQUFVLENBQUMzTCxDQUFELENBQVYsR0FBZ0IsSUFBaEI7QUFDQTBKLGdCQUFRO0FBQ1JrQyxxQkFBYSxHQUFHLElBQWhCO0FBQ0EsT0FiRCxNQWFPO0FBQ05ELGtCQUFVLENBQUMzTCxDQUFELENBQVYsR0FBZ0IsS0FBaEI7QUFDQTtBQUNEOztBQUNELFFBQUkwSixRQUFRLElBQUksQ0FBaEIsRUFBbUI7QUFDbEJBLGNBQVEsR0FBRyxJQUFYO0FBQ0EsS0FGRCxNQUVPO0FBQ05BLGNBQVEsR0FBRyxLQUFYO0FBQ0E7O0FBRUQsUUFBSW1DLFFBQVEsR0FBRyxLQUFmO0FBQ0EsUUFBSUMsa0JBQWtCLEdBQUcsQ0FBekI7QUFDQSxRQUFJL0wsUUFBUSxHQUFHc0wsZUFBZSxDQUFDOU0sTUFBL0I7O0FBQ0EsU0FBSyxJQUFJeUIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsUUFBcEIsRUFBOEJDLENBQUMsRUFBL0IsRUFBbUM7QUFDbEMsVUFDQ3FMLGVBQWUsQ0FBQ3JMLENBQUQsQ0FBZixDQUFtQixDQUFuQixJQUF3QnNMLFFBQVEsQ0FBQyxDQUFELENBQWhDLElBQ0FELGVBQWUsQ0FBQ3JMLENBQUQsQ0FBZixDQUFtQixDQUFuQixJQUF3QnVMLFNBQVMsQ0FBQyxDQUFELENBRGpDLElBRUFGLGVBQWUsQ0FBQ3JMLENBQUQsQ0FBZixDQUFtQixDQUFuQixJQUF3QndMLFdBQVcsQ0FBQyxDQUFELENBRm5DLElBR0FILGVBQWUsQ0FBQ3JMLENBQUQsQ0FBZixDQUFtQixDQUFuQixJQUF3QnlMLFlBQVksQ0FBQyxDQUFELENBSHBDLElBSUFKLGVBQWUsQ0FBQ3JMLENBQUQsQ0FBZixDQUFtQixDQUFuQixJQUF3QnNMLFFBQVEsQ0FBQyxDQUFELENBSmhDLElBS0FELGVBQWUsQ0FBQ3JMLENBQUQsQ0FBZixDQUFtQixDQUFuQixJQUF3QndMLFdBQVcsQ0FBQyxDQUFELENBTG5DLElBTUFILGVBQWUsQ0FBQ3JMLENBQUQsQ0FBZixDQUFtQixDQUFuQixJQUF3QnVMLFNBQVMsQ0FBQyxDQUFELENBTmpDLElBT0FGLGVBQWUsQ0FBQ3JMLENBQUQsQ0FBZixDQUFtQixDQUFuQixJQUF3QnlMLFlBQVksQ0FBQyxDQUFELENBUnJDLEVBU0U7QUFDREcscUJBQWEsR0FBRyxJQUFoQjtBQUNBRSwwQkFBa0I7QUFDbEI7QUFDRDs7QUFFRCxRQUFJQSxrQkFBa0IsSUFBSSxDQUExQixFQUE2QjtBQUM1QkQsY0FBUSxHQUFHLElBQVg7QUFDQTs7QUFFRCxRQUNFUCxRQUFRLENBQUMsQ0FBRCxDQUFSLElBQWVMLFFBQVEsQ0FBQyxDQUFELENBQXZCLElBQ0FNLFNBQVMsQ0FBQyxDQUFELENBQVQsSUFBZ0JMLFNBQVMsQ0FBQyxDQUFELENBRHpCLElBRUFJLFFBQVEsQ0FBQyxDQUFELENBQVIsSUFBZUwsUUFBUSxDQUFDLENBQUQsQ0FGdkIsSUFHQU8sV0FBVyxDQUFDLENBQUQsQ0FBWCxJQUFrQkwsV0FBVyxDQUFDLENBQUQsQ0FIOUIsSUFJQ0csUUFBUSxDQUFDLENBQUQsQ0FBUixJQUFlTCxRQUFRLENBQUMsQ0FBRCxDQUF2QixJQUNBTyxXQUFXLENBQUMsQ0FBRCxDQUFYLElBQWtCTCxXQUFXLENBQUMsQ0FBRCxDQUQ3QixJQUVBRyxRQUFRLENBQUMsQ0FBRCxDQUFSLElBQWVMLFFBQVEsQ0FBQyxDQUFELENBRnZCLElBR0FNLFNBQVMsQ0FBQyxDQUFELENBQVQsSUFBZ0JMLFNBQVMsQ0FBQyxDQUFELENBUjNCLEVBU0U7QUFDRFUsbUJBQWEsR0FBRyxJQUFoQjtBQUNBOztBQUVELFFBQ0VYLFFBQVEsQ0FBQyxDQUFELENBQVIsSUFBZUssUUFBUSxDQUFDLENBQUQsQ0FBdkIsSUFDQUosU0FBUyxDQUFDLENBQUQsQ0FBVCxJQUFnQkssU0FBUyxDQUFDLENBQUQsQ0FEekIsSUFFQU4sUUFBUSxDQUFDLENBQUQsQ0FBUixJQUFlSyxRQUFRLENBQUMsQ0FBRCxDQUZ2QixJQUdBSCxXQUFXLENBQUMsQ0FBRCxDQUFYLElBQWtCSyxXQUFXLENBQUMsQ0FBRCxDQUg5QixJQUlDUCxRQUFRLENBQUMsQ0FBRCxDQUFSLElBQWVLLFFBQVEsQ0FBQyxDQUFELENBQXZCLElBQ0FILFdBQVcsQ0FBQyxDQUFELENBQVgsSUFBa0JLLFdBQVcsQ0FBQyxDQUFELENBRDdCLElBRUFQLFFBQVEsQ0FBQyxDQUFELENBQVIsSUFBZUssUUFBUSxDQUFDLENBQUQsQ0FGdkIsSUFHQUosU0FBUyxDQUFDLENBQUQsQ0FBVCxJQUFnQkssU0FBUyxDQUFDLENBQUQsQ0FSM0IsRUFTRTtBQUNESyxtQkFBYSxHQUFHLElBQWhCO0FBQ0E7O0FBRUQsUUFDQ04sUUFBUSxDQUFDLENBQUQsQ0FBUixJQUFlTCxRQUFRLENBQUMsQ0FBRCxDQUF2QixJQUNBTSxTQUFTLENBQUMsQ0FBRCxDQUFULElBQWdCTCxTQUFTLENBQUMsQ0FBRCxDQUR6QixLQUVFSSxRQUFRLENBQUMsQ0FBRCxDQUFSLElBQWVMLFFBQVEsQ0FBQyxDQUFELENBQXZCLElBQThCSyxRQUFRLENBQUMsQ0FBRCxDQUFSLEdBQWNILFdBQVcsQ0FBQyxDQUFELENBQXhELElBQ0NLLFdBQVcsQ0FBQyxDQUFELENBQVgsR0FBaUJQLFFBQVEsQ0FBQyxDQUFELENBQXpCLElBQ0FPLFdBQVcsQ0FBQyxDQUFELENBQVgsSUFBa0JMLFdBQVcsQ0FBQyxDQUFELENBSi9CLENBREQsRUFNRTtBQUNEUyxtQkFBYSxHQUFHLElBQWhCO0FBQ0E7O0FBRUQsUUFDQ1gsUUFBUSxDQUFDLENBQUQsQ0FBUixJQUFlSyxRQUFRLENBQUMsQ0FBRCxDQUF2QixJQUNBSixTQUFTLENBQUMsQ0FBRCxDQUFULElBQWdCSyxTQUFTLENBQUMsQ0FBRCxDQUR6QixLQUVFTixRQUFRLENBQUMsQ0FBRCxDQUFSLElBQWVLLFFBQVEsQ0FBQyxDQUFELENBQXZCLElBQThCTCxRQUFRLENBQUMsQ0FBRCxDQUFSLEdBQWNPLFdBQVcsQ0FBQyxDQUFELENBQXhELElBQ0NMLFdBQVcsQ0FBQyxDQUFELENBQVgsR0FBaUJHLFFBQVEsQ0FBQyxDQUFELENBQXpCLElBQ0FILFdBQVcsQ0FBQyxDQUFELENBQVgsSUFBa0JLLFdBQVcsQ0FBQyxDQUFELENBSi9CLENBREQsRUFNRTtBQUNESSxtQkFBYSxHQUFHLElBQWhCOztBQUNBLFVBQUlYLFFBQVEsQ0FBQyxDQUFELENBQVIsR0FBY0ssUUFBUSxDQUFDLENBQUQsQ0FBdEIsSUFBNkJILFdBQVcsQ0FBQyxDQUFELENBQVgsR0FBaUJLLFdBQVcsQ0FBQyxDQUFELENBQTdELEVBQWtFO0FBQ2pFSyxnQkFBUSxHQUFHLElBQVg7QUFDQTtBQUNEOztBQUVELFFBQ0NQLFFBQVEsQ0FBQyxDQUFELENBQVIsSUFBZUwsUUFBUSxDQUFDLENBQUQsQ0FBdkIsSUFDQU8sV0FBVyxDQUFDLENBQUQsQ0FBWCxJQUFrQkwsV0FBVyxDQUFDLENBQUQsQ0FEN0IsS0FFRUcsUUFBUSxDQUFDLENBQUQsQ0FBUixJQUFlTCxRQUFRLENBQUMsQ0FBRCxDQUF2QixJQUE4QkssUUFBUSxDQUFDLENBQUQsQ0FBUixHQUFjSixTQUFTLENBQUMsQ0FBRCxDQUF0RCxJQUNDSyxTQUFTLENBQUMsQ0FBRCxDQUFULEdBQWVOLFFBQVEsQ0FBQyxDQUFELENBQXZCLElBQThCTSxTQUFTLENBQUMsQ0FBRCxDQUFULElBQWdCTCxTQUFTLENBQUMsQ0FBRCxDQUh6RCxDQURELEVBS0U7QUFDRFUsbUJBQWEsR0FBRyxJQUFoQjtBQUNBOztBQUVELFFBQ0NYLFFBQVEsQ0FBQyxDQUFELENBQVIsSUFBZUssUUFBUSxDQUFDLENBQUQsQ0FBdkIsSUFDQUgsV0FBVyxDQUFDLENBQUQsQ0FBWCxJQUFrQkssV0FBVyxDQUFDLENBQUQsQ0FEN0IsS0FFRVAsUUFBUSxDQUFDLENBQUQsQ0FBUixJQUFlSyxRQUFRLENBQUMsQ0FBRCxDQUF2QixJQUE4QkwsUUFBUSxDQUFDLENBQUQsQ0FBUixHQUFjTSxTQUFTLENBQUMsQ0FBRCxDQUF0RCxJQUNDTCxTQUFTLENBQUMsQ0FBRCxDQUFULEdBQWVJLFFBQVEsQ0FBQyxDQUFELENBQXZCLElBQThCSixTQUFTLENBQUMsQ0FBRCxDQUFULElBQWdCSyxTQUFTLENBQUMsQ0FBRCxDQUh6RCxDQURELEVBS0U7QUFDREssbUJBQWEsR0FBRyxJQUFoQjs7QUFDQSxVQUFJWCxRQUFRLENBQUMsQ0FBRCxDQUFSLEdBQWNLLFFBQVEsQ0FBQyxDQUFELENBQXRCLElBQTZCSixTQUFTLENBQUMsQ0FBRCxDQUFULEdBQWVLLFNBQVMsQ0FBQyxDQUFELENBQXpELEVBQThEO0FBQzdETSxnQkFBUSxHQUFHLElBQVg7QUFDQTtBQUNEOztBQUVELFFBQUliLFVBQVUsSUFBSSxTQUFsQixFQUE2QjtBQUM1QixhQUFPWSxhQUFQO0FBQ0EsS0FGRCxNQUVPLElBQUlaLFVBQVUsSUFBSSxZQUFsQixFQUFnQztBQUN0QyxhQUFPVyxVQUFQO0FBQ0EsS0FGTSxNQUVBLElBQUlYLFVBQVUsSUFBSSxLQUFsQixFQUF5QjtBQUMvQixhQUFPO0FBQ05lLGVBQU8sRUFBRUgsYUFESDtBQUVOSSxrQkFBVSxFQUFFTCxVQUZOO0FBR05qQyxnQkFBUSxFQUFFQSxRQUhKO0FBSU5tQyxnQkFBUSxFQUFFQTtBQUpKLE9BQVA7QUFNQSxLQVBNLE1BT0E7QUFDTixhQUFPRCxhQUFQO0FBQ0E7QUFDRCxHQXpKRDs7QUEySkE5UyxnQkFBYyxDQUFDQyxTQUFmLENBQXlCMlAsc0JBQXpCLEdBQWtELFVBQ2pEMUQsS0FEaUQsRUFFakRnRCxVQUZpRCxFQUdqRGlFLGVBSGlELEVBSWhEO0FBQ0QsUUFBSWpILEtBQUssR0FBR2pMLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLFNBQUwsQ0FBZStLLEtBQWYsQ0FBWCxDQUFaO0FBQ0EsUUFBSWdELFVBQVUsR0FBR2pPLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLFNBQUwsQ0FBZStOLFVBQWYsQ0FBWCxDQUFqQjtBQUNBLFFBQUlpRSxlQUFlLEdBQUdsUyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxTQUFMLENBQWVnUyxlQUFmLENBQVgsQ0FBdEI7QUFFQUMsbUZBQWdCLENBQUNsSCxLQUFELENBQWhCO0FBRUEsUUFBSTRELGlCQUFpQixHQUFHLEVBQXhCO0FBQ0EsUUFBSXVELEtBQUssR0FBRyxLQUFLQyxpQkFBTCxDQUF1QnBILEtBQXZCLEVBQThCZ0QsVUFBOUIsQ0FBWjs7QUFDQSxXQUNDbUUsS0FBSyxDQUFDRSxpQkFBTixJQUEyQixJQUEzQixJQUNBRixLQUFLLENBQUNHLHNCQUFOLElBQWdDLElBRmpDLEVBR0U7QUFDRCxVQUFJQyxRQUFRLEdBQUd4UyxJQUFJLENBQUNDLEtBQUwsQ0FDZEQsSUFBSSxDQUFDRSxTQUFMLENBQWUrSyxLQUFLLENBQUNtSCxLQUFLLENBQUNFLGlCQUFQLENBQXBCLENBRGMsQ0FBZjtBQUlBLFVBQUlHLGdCQUFnQixHQUFHO0FBQ3RCL0ssU0FBQyxFQUNBdUcsVUFBVSxDQUFDbUUsS0FBSyxDQUFDRyxzQkFBUCxDQUFWLENBQXlDN0ssQ0FBekMsR0FDQTJCLHVFQUFnQixDQUFDRCxJQUFqQixDQUNDLElBREQsRUFFQzZFLFVBQVUsQ0FBQ21FLEtBQUssQ0FBQ0csc0JBQVAsQ0FBVixDQUF5QzdLLENBRjFDLENBSHFCO0FBT3RCRSxTQUFDLEVBQ0FxRyxVQUFVLENBQUNtRSxLQUFLLENBQUNHLHNCQUFQLENBQVYsQ0FBeUMzSyxDQUF6QyxHQUNBeUIsdUVBQWdCLENBQUNELElBQWpCLENBQ0MsSUFERCxFQUVDNkUsVUFBVSxDQUFDbUUsS0FBSyxDQUFDRyxzQkFBUCxDQUFWLENBQXlDM0ssQ0FGMUMsQ0FUcUI7QUFhdEJ6QixhQUFLLEVBQUVxTSxRQUFRLENBQUNyTSxLQWJNO0FBY3RCQyxjQUFNLEVBQUVvTSxRQUFRLENBQUNwTSxNQWRLO0FBZXRCMkYsYUFBSyxFQUFFeUcsUUFBUSxDQUFDekc7QUFmTSxPQUF2QjtBQWlCQThDLHVCQUFpQixDQUFDM0ksSUFBbEIsQ0FBdUJ1TSxnQkFBdkI7QUFFQSxVQUFJQyxhQUFhLEdBQUc7QUFDbkJoTCxTQUFDLEVBQUV1RyxVQUFVLENBQUNtRSxLQUFLLENBQUNHLHNCQUFQLENBQVYsQ0FBeUM3SyxDQUR6QjtBQUVuQkUsU0FBQyxFQUFFcUcsVUFBVSxDQUFDbUUsS0FBSyxDQUFDRyxzQkFBUCxDQUFWLENBQXlDM0ssQ0FGekI7QUFHbkJ6QixhQUFLLEVBQ0pxTSxRQUFRLENBQUNyTSxLQUFULEdBQ0FrRCx1RUFBZ0IsQ0FBQ0QsSUFBakIsQ0FDQyxJQURELEVBRUM2RSxVQUFVLENBQUNtRSxLQUFLLENBQUNHLHNCQUFQLENBQVYsQ0FBeUM3SyxDQUYxQyxDQUxrQjtBQVNuQnRCLGNBQU0sRUFDTG9NLFFBQVEsQ0FBQ3BNLE1BQVQsR0FDQWlELHVFQUFnQixDQUFDRCxJQUFqQixDQUNDLElBREQsRUFFQzZFLFVBQVUsQ0FBQ21FLEtBQUssQ0FBQ0csc0JBQVAsQ0FBVixDQUF5QzNLLENBRjFDLENBWGtCO0FBZW5Cd0csc0JBQWMsRUFBRTtBQWZHLE9BQXBCO0FBa0JBbkQsV0FBSyxDQUFDbUIsTUFBTixDQUFhZ0csS0FBSyxDQUFDRSxpQkFBbkIsRUFBc0MsQ0FBdEM7QUFFQSxVQUFJSyxhQUFhLEdBQUcsRUFBcEI7QUFFQSxVQUFJM00sUUFBUSxHQUFHaUksVUFBVSxDQUFDekosTUFBMUI7O0FBQ0EsV0FBSyxJQUFJeUIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsUUFBcEIsRUFBOEJDLENBQUMsRUFBL0IsRUFBbUM7QUFDbEMsWUFBSTJNLFNBQVMsR0FBRyxLQUFLL0MsY0FBTCxDQUNmNUIsVUFBVSxDQUFDaEksQ0FBRCxDQURLLEVBRWZ5TSxhQUZlLENBQWhCOztBQUlBLFlBQUlFLFNBQVMsSUFBSSxLQUFqQixFQUF3QjtBQUN2QkQsdUJBQWEsR0FBR0EsYUFBYSxDQUFDM0MsTUFBZCxDQUFxQjRDLFNBQXJCLENBQWhCO0FBQ0EsU0FGRCxNQUVPO0FBQ05ELHVCQUFhLENBQUN6TSxJQUFkLENBQ0NsRyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxTQUFMLENBQWUrTixVQUFVLENBQUNoSSxDQUFELENBQXpCLENBQVgsQ0FERDtBQUdBO0FBQ0QsT0EzREEsQ0E2REQ7OztBQUNBaU0scUJBQWUsQ0FBQ2hNLElBQWhCLENBQXFCd00sYUFBckI7QUFDQSxVQUFJRyxtQkFBbUIsR0FBRyxLQUFLdkUsZUFBTCxDQUN6QnFFLGFBRHlCLEVBRXpCVCxlQUZ5QixDQUExQjtBQUtBakUsZ0JBQVUsR0FBRzRFLG1CQUFiO0FBQ0EsVUFBSVQsS0FBSyxHQUFHLEtBQUtDLGlCQUFMLENBQXVCcEgsS0FBdkIsRUFBOEI0SCxtQkFBOUIsQ0FBWjtBQUNBOztBQUNELFdBQU87QUFBRWhFLHVCQUFpQixFQUFFQSxpQkFBckI7QUFBd0NaLGdCQUFVLEVBQUVBO0FBQXBELEtBQVA7QUFDQSxHQXhGRDs7QUEwRkFsUCxnQkFBYyxDQUFDQyxTQUFmLENBQXlCcVQsaUJBQXpCLEdBQTZDLFVBQVNwSCxLQUFULEVBQWdCZ0QsVUFBaEIsRUFBNEI7QUFDeEU7QUFDQTtBQUNBO0FBRUEsUUFBSXFFLGlCQUFpQixHQUFHLElBQXhCO0FBQ0EsUUFBSUMsc0JBQXNCLEdBQUcsSUFBN0I7QUFDQSxRQUFJdk0sUUFBUSxHQUFHaUYsS0FBSyxDQUFDekcsTUFBckI7O0FBQ0EsU0FBSyxJQUFJeUIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsUUFBcEIsRUFBOEJDLENBQUMsRUFBL0IsRUFBbUM7QUFDbEMsVUFBSTZNLG1CQUFtQixHQUFHLEVBQTFCO0FBQ0EsVUFBSUMsa0JBQWtCLEdBQUcsRUFBekI7QUFDQSxVQUFJQyxtQkFBbUIsR0FBRyxFQUExQjtBQUNBLFVBQUlsRSxRQUFRLEdBQUdiLFVBQVUsQ0FBQ3pKLE1BQTFCOztBQUNBLFdBQUssSUFBSXdLLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdGLFFBQXBCLEVBQThCRSxDQUFDLEVBQS9CLEVBQW1DO0FBQ2xDLFlBQUl3RCxRQUFRLEdBQUd4UyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxTQUFMLENBQWUrSyxLQUFLLENBQUNoRixDQUFELENBQXBCLENBQVgsQ0FBZjs7QUFDQSxZQUNDb0QsdUVBQWdCLENBQUNELElBQWpCLENBQXNCLElBQXRCLEVBQTRCNkUsVUFBVSxDQUFDZSxDQUFELENBQVYsQ0FBY3RILENBQTFDLEtBQWdELEtBQUs5SCxNQUR0RCxFQUVFO0FBQ0Q0UyxrQkFBUSxDQUFDck0sS0FBVCxJQUFrQixLQUFLdkcsTUFBTCxHQUFjLENBQWhDO0FBQ0E7O0FBQ0QsWUFDQ3lKLHVFQUFnQixDQUFDRCxJQUFqQixDQUFzQixJQUF0QixFQUE0QjZFLFVBQVUsQ0FBQ2UsQ0FBRCxDQUFWLENBQWNwSCxDQUExQyxLQUFnRCxLQUFLaEksTUFEdEQsRUFFRTtBQUNENFMsa0JBQVEsQ0FBQ3BNLE1BQVQsSUFBbUIsS0FBS3hHLE1BQUwsR0FBYyxDQUFqQztBQUNBOztBQUVELFlBQUlxVCxjQUFjLEdBQUdoRixVQUFVLENBQUNlLENBQUQsQ0FBVixDQUFjN0ksS0FBbkM7QUFDQSxZQUFJK00sZUFBZSxHQUFHakYsVUFBVSxDQUFDZSxDQUFELENBQVYsQ0FBYzVJLE1BQXBDOztBQUVBLFlBQUkrTSxpRkFBa0IsQ0FBQ1gsUUFBRCxFQUFXdkUsVUFBVSxDQUFDZSxDQUFELENBQXJCLENBQXRCLEVBQWlEO0FBQ2hEc0QsMkJBQWlCLEdBQUdyTSxDQUFwQjtBQUNBc00sZ0NBQXNCLEdBQUd2RCxDQUF6QjtBQUNBO0FBQ0E7O0FBRUQsWUFDQ29FLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixjQUFjLEdBQUdULFFBQVEsQ0FBQ3JNLEtBQXJDLEtBQStDLENBQS9DLElBQ0ErTSxlQUFlLElBQUlWLFFBQVEsQ0FBQ3BNLE1BRjdCLEVBR0U7QUFDRDJNLDRCQUFrQixDQUFDN00sSUFBbkIsQ0FBd0I4SSxDQUF4QjtBQUNBOztBQUNELFlBQ0NvRSxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsZUFBZSxHQUFHVixRQUFRLENBQUNwTSxNQUF0QyxLQUFpRCxDQUFqRCxJQUNBNk0sY0FBYyxJQUFJVCxRQUFRLENBQUNyTSxLQUY1QixFQUdFO0FBQ0Q2TSw2QkFBbUIsQ0FBQzlNLElBQXBCLENBQXlCOEksQ0FBekI7QUFDQTtBQUNEOztBQUVELFVBQUlzRSxpQkFBaUIsR0FBRyxDQUF4QjtBQUNBLFVBQUlDLHNCQUFzQixHQUFHLElBQTdCO0FBQ0EsVUFBSUMsc0JBQXNCLEdBQUcsQ0FBN0I7QUFDQSxVQUFJQywyQkFBMkIsR0FBRyxJQUFsQztBQUNBLFVBQUlDLGtCQUFrQixHQUFHLENBQXpCO0FBQ0EsVUFBSUMsdUJBQXVCLEdBQUcsSUFBOUI7QUFDQSxVQUFJQyx1QkFBdUIsR0FBRyxDQUE5QjtBQUNBLFVBQUlDLDRCQUE0QixHQUFHLElBQW5DO0FBRUEsVUFBSS9FLFFBQVEsR0FBR2lFLGtCQUFrQixDQUFDdk8sTUFBbEM7O0FBQ0EsV0FBSyxJQUFJc1AsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2hGLFFBQXBCLEVBQThCZ0YsQ0FBQyxFQUEvQixFQUFtQztBQUNsQyxZQUFJQyxlQUFlLEdBQUdYLElBQUksQ0FBQ0MsS0FBTCxDQUNyQnBGLFVBQVUsQ0FBQzhFLGtCQUFrQixDQUFDZSxDQUFELENBQW5CLENBQVYsQ0FBa0MzTixLQUFsQyxHQUEwQ3FNLFFBQVEsQ0FBQ3JNLEtBRDlCLENBQXRCO0FBR0EsWUFBSTZOLFFBQVEsR0FDWC9GLFVBQVUsQ0FBQzhFLGtCQUFrQixDQUFDZSxDQUFELENBQW5CLENBQVYsQ0FBa0MzTixLQUFsQyxHQUEwQ3FNLFFBQVEsQ0FBQ3JNLEtBRHBEO0FBRUEsWUFBSThOLElBQUksR0FBR0QsUUFBUSxHQUFHRCxlQUF0Qjs7QUFFQSxZQUFJRSxJQUFJLEdBQUdYLGlCQUFYLEVBQThCO0FBQzdCQSwyQkFBaUIsR0FBR1csSUFBcEI7QUFDQVYsZ0NBQXNCLEdBQUdSLGtCQUFrQixDQUFDZSxDQUFELENBQTNDO0FBQ0E7O0FBRUQsWUFDQzdGLFVBQVUsQ0FBQzhFLGtCQUFrQixDQUFDZSxDQUFELENBQW5CLENBQVYsQ0FBa0NsTSxDQUFsQyxJQUNDNEwsc0JBREQsSUFFQUEsc0JBQXNCLElBQUksQ0FIM0IsRUFJRTtBQUNELGNBQ0N2RixVQUFVLENBQUM4RSxrQkFBa0IsQ0FBQ2UsQ0FBRCxDQUFuQixDQUFWLENBQWtDbE0sQ0FBbEMsSUFDQTRMLHNCQUZELEVBR0U7QUFDRCxnQkFBSUQsc0JBQXNCLElBQUksSUFBOUIsRUFBb0M7QUFDbkNDLG9DQUFzQixHQUNyQnZGLFVBQVUsQ0FBQzhFLGtCQUFrQixDQUFDZSxDQUFELENBQW5CLENBQVYsQ0FBa0NsTSxDQURuQztBQUVBNkwseUNBQTJCLEdBQUdWLGtCQUFrQixDQUFDZSxDQUFELENBQWhEO0FBQ0EsYUFKRCxNQUlPO0FBQ04sa0JBQUlHLElBQUksSUFBSVgsaUJBQVosRUFBK0I7QUFDOUJFLHNDQUFzQixHQUNyQnZGLFVBQVUsQ0FBQzhFLGtCQUFrQixDQUFDZSxDQUFELENBQW5CLENBQVYsQ0FBa0NsTSxDQURuQztBQUVBNkwsMkNBQTJCLEdBQzFCVixrQkFBa0IsQ0FBQ2UsQ0FBRCxDQURuQjtBQUVBO0FBQ0Q7QUFDRCxXQWhCRCxNQWdCTztBQUNOTixrQ0FBc0IsR0FDckJ2RixVQUFVLENBQUM4RSxrQkFBa0IsQ0FBQ2UsQ0FBRCxDQUFuQixDQUFWLENBQWtDbE0sQ0FEbkM7QUFFQTZMLHVDQUEyQixHQUFHVixrQkFBa0IsQ0FBQ2UsQ0FBRCxDQUFoRDtBQUNBO0FBQ0Q7QUFDRDs7QUFFRCxVQUFJaEYsUUFBUSxHQUFHa0UsbUJBQW1CLENBQUN4TyxNQUFuQzs7QUFDQSxXQUFLc1AsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHaEYsUUFBaEIsRUFBMEJnRixDQUFDLEVBQTNCLEVBQStCO0FBQzlCLFlBQUlDLGVBQWUsR0FBR1gsSUFBSSxDQUFDQyxLQUFMLENBQ3JCcEYsVUFBVSxDQUFDK0UsbUJBQW1CLENBQUNjLENBQUQsQ0FBcEIsQ0FBVixDQUFtQzFOLE1BQW5DLEdBQTRDb00sUUFBUSxDQUFDcE0sTUFEaEMsQ0FBdEI7QUFHQSxZQUFJNE4sUUFBUSxHQUNYL0YsVUFBVSxDQUFDK0UsbUJBQW1CLENBQUNjLENBQUQsQ0FBcEIsQ0FBVixDQUFtQzFOLE1BQW5DLEdBQTRDb00sUUFBUSxDQUFDcE0sTUFEdEQ7QUFFQSxZQUFJNk4sSUFBSSxHQUFHRCxRQUFRLEdBQUdELGVBQXRCOztBQUVBLFlBQUlFLElBQUksR0FBR1Asa0JBQVgsRUFBK0I7QUFDOUJBLDRCQUFrQixHQUFHTyxJQUFyQjtBQUNBTixpQ0FBdUIsR0FBR1gsbUJBQW1CLENBQUNjLENBQUQsQ0FBN0M7QUFDQTs7QUFFRCxZQUNDN0YsVUFBVSxDQUFDK0UsbUJBQW1CLENBQUNjLENBQUQsQ0FBcEIsQ0FBVixDQUFtQ2xNLENBQW5DLElBQ0NnTSx1QkFERCxJQUVBQSx1QkFBdUIsSUFBSSxDQUg1QixFQUlFO0FBQ0QsY0FDQzNGLFVBQVUsQ0FBQytFLG1CQUFtQixDQUFDYyxDQUFELENBQXBCLENBQVYsQ0FBbUNsTSxDQUFuQyxJQUNBZ00sdUJBRkQsRUFHRTtBQUNELGdCQUFJRCx1QkFBdUIsSUFBSSxJQUEvQixFQUFxQztBQUNwQ0MscUNBQXVCLEdBQ3RCM0YsVUFBVSxDQUFDK0UsbUJBQW1CLENBQUNjLENBQUQsQ0FBcEIsQ0FBVixDQUFtQ2xNLENBRHBDO0FBRUFpTSwwQ0FBNEIsR0FDM0JiLG1CQUFtQixDQUFDYyxDQUFELENBRHBCO0FBRUEsYUFMRCxNQUtPO0FBQ04sa0JBQUlHLElBQUksSUFBSVAsa0JBQVosRUFBZ0M7QUFDL0JFLHVDQUF1QixHQUN0QjNGLFVBQVUsQ0FBQytFLG1CQUFtQixDQUFDYyxDQUFELENBQXBCLENBQVYsQ0FBbUNsTSxDQURwQztBQUVBaU0sNENBQTRCLEdBQzNCYixtQkFBbUIsQ0FBQ2MsQ0FBRCxDQURwQjtBQUVBO0FBQ0Q7QUFDRCxXQWpCRCxNQWlCTztBQUNORixtQ0FBdUIsR0FDdEIzRixVQUFVLENBQUMrRSxtQkFBbUIsQ0FBQ2MsQ0FBRCxDQUFwQixDQUFWLENBQW1DbE0sQ0FEcEM7QUFFQWlNLHdDQUE0QixHQUFHYixtQkFBbUIsQ0FBQ2MsQ0FBRCxDQUFsRDtBQUNBO0FBQ0Q7QUFDRDs7QUFFRCxVQUNDTCwyQkFBMkIsSUFBSSxJQUEvQixJQUNBSSw0QkFBNEIsSUFBSSxJQUZqQyxFQUdFO0FBQ0QsWUFBSUwsc0JBQXNCLEdBQUdJLHVCQUE3QixFQUFzRDtBQUNyRHRCLDJCQUFpQixHQUFHck0sQ0FBcEI7QUFDQXNNLGdDQUFzQixHQUFHa0IsMkJBQXpCO0FBQ0E7QUFDQSxTQUpELE1BSU87QUFDTm5CLDJCQUFpQixHQUFHck0sQ0FBcEI7QUFDQXNNLGdDQUFzQixHQUFHc0IsNEJBQXpCO0FBQ0E7QUFDQTtBQUNELE9BdEppQyxDQXdKbEM7OztBQUNBLFVBQ0NOLHNCQUFzQixJQUFJLElBQTFCLElBQ0FJLHVCQUF1QixJQUFJLElBRjVCLEVBR0U7QUFDRCxZQUFJTCxpQkFBaUIsR0FBR0ksa0JBQXhCLEVBQTRDO0FBQzNDcEIsMkJBQWlCLEdBQUdyTSxDQUFwQjtBQUNBc00sZ0NBQXNCLEdBQUdnQixzQkFBekI7QUFDQTtBQUNBLFNBSkQsTUFJTztBQUNOakIsMkJBQWlCLEdBQUdyTSxDQUFwQjtBQUNBc00sZ0NBQXNCLEdBQUdvQix1QkFBekI7QUFDQTtBQUNBO0FBQ0Q7QUFDRDs7QUFDRCxXQUFPO0FBQ05yQix1QkFBaUIsRUFBRUEsaUJBRGI7QUFFTkMsNEJBQXNCLEVBQUVBO0FBRmxCLEtBQVA7QUFJQSxHQXBMRDs7QUFzTEF4VCxnQkFBYyxDQUFDQyxTQUFmLENBQXlCaVEsaUJBQXpCLEdBQTZDLFVBQzVDM08sWUFENEMsRUFFNUN5RixjQUY0QyxFQUc1Q2dJLGdCQUg0QyxFQUk1Q21HLFlBSjRDLEVBSzVDQyxrQkFMNEMsRUFNM0M7QUFDRCxRQUFJcE8sY0FBYyxDQUFDdkIsTUFBZixJQUF5QixDQUE3QixFQUFnQztBQUMvQixhQUFPbEUsWUFBUDtBQUNBOztBQUNELFFBQUk4VCxtQkFBbUIsR0FBRyxFQUExQjtBQUNBLFFBQUlwTyxRQUFRLEdBQUcrSCxnQkFBZ0IsQ0FBQ0ksYUFBakIsQ0FBK0IzSixNQUE5Qzs7QUFDQSxTQUFLLElBQUl5QixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxRQUFwQixFQUE4QkMsQ0FBQyxFQUEvQixFQUFtQztBQUNsQ21PLHlCQUFtQixDQUFDbE8sSUFBcEIsQ0FDQ2xHLElBQUksQ0FBQ0MsS0FBTCxDQUNDRCxJQUFJLENBQUNFLFNBQUwsQ0FDQ0ksWUFBWSxDQUFDeU4sZ0JBQWdCLENBQUNJLGFBQWpCLENBQStCbEksQ0FBL0IsQ0FBRCxDQURiLENBREQsQ0FERDtBQU9BOztBQUNELFFBQUlvTyxpQ0FBaUMsR0FBR0MsZ0ZBQWlCLENBQ3hERixtQkFEd0QsQ0FBekQ7QUFHQSxRQUFJRywwQkFBMEIsR0FDN0JGLGlDQUFpQyxDQUFDLENBQUQsQ0FBakMsQ0FBcUN6TSxDQUFyQyxHQUNBeU0saUNBQWlDLENBQUMsQ0FBRCxDQUFqQyxDQUFxQ2pPLE1BRnRDO0FBSUEsUUFBSW9PLHdCQUF3QixHQUFHLEVBQS9CO0FBQ0EsUUFBSXhPLFFBQVEsR0FBR0QsY0FBYyxDQUFDdkIsTUFBOUI7O0FBQ0EsU0FBSyxJQUFJeUIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsUUFBcEIsRUFBOEJDLENBQUMsRUFBL0IsRUFBbUM7QUFDbEN1Tyw4QkFBd0IsQ0FBQ3pPLGNBQWMsQ0FBQ0UsQ0FBRCxDQUFmLENBQXhCLEdBQThDLElBQTlDO0FBQ0E7O0FBRUQsUUFBSXdPLHVCQUF1QixHQUFHLEVBQTlCO0FBQ0EsUUFBSUMsb0VBQW9FLEdBQUcsSUFBM0U7QUFDQSxRQUFJQyxtRUFBbUUsR0FBRyxJQUExRTtBQUNBLFFBQUkzTyxRQUFRLEdBQUcxRixZQUFZLENBQUNrRSxNQUE1Qjs7QUFDQSxTQUFLLElBQUl5QixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxRQUFwQixFQUE4QkMsQ0FBQyxFQUEvQixFQUFtQztBQUNsQyxVQUFJdU8sd0JBQXdCLENBQUMxRCxjQUF6QixDQUF3QzdLLENBQXhDLENBQUosRUFBZ0Q7QUFDL0M7QUFDQTs7QUFDRCxVQUNDM0YsWUFBWSxDQUFDMkYsQ0FBRCxDQUFaLENBQWdCMkIsQ0FBaEIsR0FBb0IyTSwwQkFBcEIsS0FDQ2pVLFlBQVksQ0FBQzJGLENBQUQsQ0FBWixDQUFnQjJCLENBQWhCLEdBQW9CdEgsWUFBWSxDQUFDMkYsQ0FBRCxDQUFaLENBQWdCRyxNQUFwQyxJQUNBbU8sMEJBREEsSUFFQWpVLFlBQVksQ0FBQzJGLENBQUQsQ0FBWixDQUFnQjJCLENBQWhCLEdBQW9CdEgsWUFBWSxDQUFDMkYsQ0FBRCxDQUFaLENBQWdCRyxNQUFwQyxHQUNDbU8sMEJBSkYsQ0FERCxFQU1FO0FBQ0QsWUFDQ2pVLFlBQVksQ0FBQzJGLENBQUQsQ0FBWixDQUFnQjJCLENBQWhCLEdBQW9CdEgsWUFBWSxDQUFDMkYsQ0FBRCxDQUFaLENBQWdCRyxNQUFwQyxHQUNBbU8sMEJBRkQsRUFHRTtBQUNELGNBQ0NHLG9FQUFvRSxHQUNuRXBVLFlBQVksQ0FBQzJGLENBQUQsQ0FBWixDQUFnQjJCLENBQWhCLEdBQW9CdEgsWUFBWSxDQUFDMkYsQ0FBRCxDQUFaLENBQWdCRyxNQURyQyxJQUVBc08sb0VBQW9FLElBQ25FLElBSkYsRUFLRTtBQUNEQSxnRkFBb0UsR0FDbkVwVSxZQUFZLENBQUMyRixDQUFELENBQVosQ0FBZ0IyQixDQUFoQixHQUFvQnRILFlBQVksQ0FBQzJGLENBQUQsQ0FBWixDQUFnQkcsTUFEckM7QUFFQTtBQUNEOztBQUNELFlBQ0M5RixZQUFZLENBQUMyRixDQUFELENBQVosQ0FBZ0IyQixDQUFoQixHQUFvQnRILFlBQVksQ0FBQzJGLENBQUQsQ0FBWixDQUFnQkcsTUFBcEMsSUFDQW1PLDBCQUZELEVBR0U7QUFDRCxjQUNDSSxtRUFBbUUsR0FDbEVyVSxZQUFZLENBQUMyRixDQUFELENBQVosQ0FBZ0IyQixDQUFoQixHQUFvQnRILFlBQVksQ0FBQzJGLENBQUQsQ0FBWixDQUFnQkcsTUFEckMsSUFFQXVPLG1FQUFtRSxJQUNsRSxJQUpGLEVBS0U7QUFDREEsK0VBQW1FLEdBQ2xFclUsWUFBWSxDQUFDMkYsQ0FBRCxDQUFaLENBQWdCMkIsQ0FBaEIsR0FBb0J0SCxZQUFZLENBQUMyRixDQUFELENBQVosQ0FBZ0JHLE1BRHJDO0FBRUE7QUFDRDtBQUNEO0FBQ0Q7O0FBRUQsUUFDQ3NPLG9FQUFvRSxJQUNwRSxJQUZELEVBR0U7QUFDRDtBQUNBLFVBQUlFLDJCQUEyQixHQUFHRixvRUFBbEM7QUFDQSxVQUFJRyxnQkFBZ0IsR0FBRyxLQUFLQyxzQkFBTCxDQUN0QkYsMkJBRHNCLEVBRXRCLElBRnNCLEVBR3RCdFUsWUFIc0IsQ0FBdkI7QUFLQSxVQUFJeVUsWUFBWSxHQUFHRixnQkFBZ0IsQ0FBQ0csbUJBQXBDO0FBRUEsVUFBSUMsY0FBYyxHQUFHLEtBQUtDLGlDQUFMLENBQ3BCTiwyQkFEb0IsRUFFcEJ0VSxZQUZvQixFQUdwQnlGLGNBSG9CLEVBSXBCb08sa0JBSm9CLENBQXJCO0FBTUE3VCxrQkFBWSxHQUFHMlUsY0FBYyxDQUFDM1UsWUFBOUI7QUFDQXlGLG9CQUFjLEdBQUdrUCxjQUFjLENBQUNsUCxjQUFoQztBQUVBLFVBQUlvUCxZQUFZLEdBQUcsS0FBSzlPLGlDQUFMLENBQ2xCdU8sMkJBRGtCLEVBRWxCdFUsWUFGa0IsRUFHbEJ5RixjQUhrQixFQUlsQmdJLGdCQUprQixDQUFuQjtBQU1BLFVBQUlxSCxpQkFBaUIsR0FBRyxLQUFLQyxnQkFBTCxDQUN2QkYsWUFBWSxDQUFDRyxRQUFiLEdBQ0NWLDJCQURELEdBRUNDLGdCQUFnQixDQUFDVSxnQkFISyxFQUl2QkosWUFBWSxDQUFDN1UsWUFKVSxFQUt2QnlVLFlBTHVCLENBQXhCO0FBT0EsS0FuQ0QsTUFtQ08sSUFDTkosbUVBQW1FLElBQ25FLElBRk0sRUFHTDtBQUNEO0FBQ0EsVUFBSUMsMkJBQTJCLEdBQUdELG1FQUFsQztBQUNBLFVBQUlFLGdCQUFnQixHQUFHLEtBQUtDLHNCQUFMLENBQ3RCRiwyQkFEc0IsRUFFdEIsS0FGc0IsRUFHdEJ0VSxZQUhzQixDQUF2QjtBQUtBLFVBQUl5VSxZQUFZLEdBQUdGLGdCQUFnQixDQUFDRyxtQkFBcEM7QUFFQSxVQUFJRyxZQUFZLEdBQUcsS0FBSzlPLGlDQUFMLENBQ2xCdU8sMkJBRGtCLEVBRWxCdFUsWUFGa0IsRUFHbEJ5RixjQUhrQixFQUlsQmdJLGdCQUprQixDQUFuQjtBQU1BLFVBQUlxSCxpQkFBaUIsR0FBRyxLQUFLQyxnQkFBTCxDQUN2QkYsWUFBWSxDQUFDRyxRQUFiLEdBQXdCViwyQkFERCxFQUV2Qk8sWUFBWSxDQUFDN1UsWUFGVSxFQUd2QnlVLFlBSHVCLENBQXhCO0FBS0E7O0FBRUQsV0FBT0ssaUJBQVA7QUFDQSxHQTlJRDs7QUFnSkFyVyxnQkFBYyxDQUFDQyxTQUFmLENBQXlCa1csaUNBQXpCLEdBQTZELFVBQzVETSxTQUQ0RCxFQUU1RGxWLFlBRjRELEVBRzVEeUYsY0FINEQsRUFJNURvTyxrQkFKNEQsRUFLM0Q7QUFDRCxRQUFJc0IsU0FBUyxHQUFHO0FBQ2YvTixPQUFDLEVBQUUsQ0FEWTtBQUVmRSxPQUFDLEVBQUU0TixTQUZZO0FBR2ZyUCxXQUFLLEVBQUUsS0FBS1QsS0FIRztBQUlmVSxZQUFNLEVBQUU7QUFKTyxLQUFoQixDQURDLENBUUQ7O0FBQ0EsUUFBSXNQLGlCQUFpQixHQUFHLEVBQXhCO0FBQ0EsUUFBSTFQLFFBQVEsR0FBR0QsY0FBYyxDQUFDdkIsTUFBOUI7O0FBQ0EsU0FBSyxJQUFJeUIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsUUFBcEIsRUFBOEJDLENBQUMsRUFBL0IsRUFBbUM7QUFDbEN5UCx1QkFBaUIsQ0FBQzNQLGNBQWMsQ0FBQ0UsQ0FBRCxDQUFmLENBQWpCLEdBQXVDLElBQXZDO0FBQ0E7O0FBQ0QsUUFBSWlNLGVBQWUsR0FBRyxFQUF0QjtBQUNBLFFBQUlsTSxRQUFRLEdBQUcxRixZQUFZLENBQUNrRSxNQUE1Qjs7QUFDQSxTQUFLLElBQUl5QixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxRQUFwQixFQUE4QkMsQ0FBQyxFQUEvQixFQUFtQztBQUNsQyxVQUFJeVAsaUJBQWlCLENBQUM1RSxjQUFsQixDQUFpQzdLLENBQWpDLENBQUosRUFBeUM7QUFDeEM7QUFDQTs7QUFDRCxVQUNDM0YsWUFBWSxDQUFDMkYsQ0FBRCxDQUFaLENBQWdCMkIsQ0FBaEIsSUFBcUI0TixTQUFyQixJQUNBbFYsWUFBWSxDQUFDMkYsQ0FBRCxDQUFaLENBQWdCMkIsQ0FBaEIsR0FBb0J0SCxZQUFZLENBQUMyRixDQUFELENBQVosQ0FBZ0JHLE1BQXBDLElBQThDb1AsU0FGL0MsRUFHRTtBQUNEO0FBQ0EsWUFBSUcsR0FBRyxHQUFHM1YsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsU0FBTCxDQUFlSSxZQUFZLENBQUMyRixDQUFELENBQTNCLENBQVgsQ0FBVjtBQUNBMFAsV0FBRyxDQUFDdkgsY0FBSixHQUFxQixJQUFyQjtBQUNBOEQsdUJBQWUsQ0FBQ2hNLElBQWhCLENBQXFCeVAsR0FBckI7QUFDQTtBQUNEOztBQUVELFFBQUlDLG1CQUFtQixHQUFHekIsa0JBQWtCLENBQUNsRyxVQUE3QztBQUNBMkgsdUJBQW1CLENBQUMxUCxJQUFwQixDQUF5QnVQLFNBQXpCO0FBRUEsUUFBSXBILGdCQUFnQixHQUFHLEtBQUtDLGVBQUwsQ0FDdEJzSCxtQkFEc0IsRUFFdEIxRCxlQUZzQixDQUF2QjtBQUlBLFFBQUlsTSxRQUFRLEdBQUdxSSxnQkFBZ0IsQ0FBQzdKLE1BQWhDOztBQUNBLFNBQUssSUFBSXlCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELFFBQXBCLEVBQThCQyxDQUFDLEVBQS9CLEVBQW1DO0FBQ2xDLFVBQ0NvSSxnQkFBZ0IsQ0FBQ3BJLENBQUQsQ0FBaEIsQ0FBb0IyQixDQUFwQixHQUF3QnlHLGdCQUFnQixDQUFDcEksQ0FBRCxDQUFoQixDQUFvQkcsTUFBNUMsSUFDQW9QLFNBQVMsR0FBRyxDQUZiLEVBR0U7QUFDRG5ILHdCQUFnQixDQUFDcEksQ0FBRCxDQUFoQixDQUFvQkcsTUFBcEIsSUFBOEIsQ0FBOUI7QUFDQTtBQUNEOztBQUVELFFBQUl5UCxvQkFBb0IsR0FBRyxFQUEzQjtBQUNBLFFBQUk3UCxRQUFRLEdBQUdELGNBQWMsQ0FBQ3ZCLE1BQTlCOztBQUNBLFNBQUssSUFBSXlCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELFFBQXBCLEVBQThCQyxDQUFDLEVBQS9CLEVBQW1DO0FBQ2xDNFAsMEJBQW9CLENBQUMzUCxJQUFyQixDQUNDbEcsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsU0FBTCxDQUFlSSxZQUFZLENBQUN5RixjQUFjLENBQUNFLENBQUQsQ0FBZixDQUEzQixDQUFYLENBREQ7QUFHQTRQLDBCQUFvQixDQUFDNVAsQ0FBRCxDQUFwQixDQUF3QjhGLEtBQXhCLEdBQWdDaEcsY0FBYyxDQUFDRSxDQUFELENBQTlDO0FBQ0E7O0FBQ0QsUUFBSXlJLFVBQVUsR0FBRyxLQUFLQyxzQkFBTCxDQUNoQmtILG9CQURnQixFQUVoQnhILGdCQUZnQixFQUdoQjZELGVBSGdCLENBQWpCO0FBS0EsUUFBSXRELFdBQVcsR0FBR0YsVUFBVSxDQUFDRyxpQkFBN0I7O0FBRUEsUUFBSUQsV0FBVyxDQUFDcEssTUFBWixHQUFxQixDQUF6QixFQUE0QjtBQUMzQnNSLDBCQUFvQixHQUFHLEVBQXZCO0FBQ0EsVUFBSTlQLFFBQVEsR0FBRzRJLFdBQVcsQ0FBQ3BLLE1BQTNCO0FBQ0EsVUFBSXNLLFFBQVEsR0FBRy9JLGNBQWMsQ0FBQ3ZCLE1BQTlCOztBQUNBLFdBQUssSUFBSXlCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELFFBQXBCLEVBQThCQyxDQUFDLEVBQS9CLEVBQW1DO0FBQ2xDLGFBQUssSUFBSStJLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdGLFFBQXBCLEVBQThCRSxDQUFDLEVBQS9CLEVBQW1DO0FBQ2xDLGNBQUlKLFdBQVcsQ0FBQzNJLENBQUQsQ0FBWCxDQUFlOEYsS0FBZixJQUF3QmhHLGNBQWMsQ0FBQ2lKLENBQUQsQ0FBMUMsRUFBK0M7QUFDOUM4RyxnQ0FBb0IsQ0FBQzlHLENBQUQsQ0FBcEIsR0FBMEIsSUFBMUI7QUFDQTFPLHdCQUFZLENBQUN5RixjQUFjLENBQUNpSixDQUFELENBQWYsQ0FBWixDQUFnQ3RILENBQWhDLEdBQW9Da0gsV0FBVyxDQUFDM0ksQ0FBRCxDQUFYLENBQWV5QixDQUFuRDtBQUNBcEgsd0JBQVksQ0FBQ3lGLGNBQWMsQ0FBQ2lKLENBQUQsQ0FBZixDQUFaLENBQWdDcEgsQ0FBaEMsR0FBb0NnSCxXQUFXLENBQUMzSSxDQUFELENBQVgsQ0FBZTJCLENBQW5EO0FBQ0E7QUFDRDtBQUNEOztBQUVELFVBQUltTyxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSCxvQkFBWixDQUFYO0FBQ0EsVUFBSTlQLFFBQVEsR0FBRytQLElBQUksQ0FBQ3ZSLE1BQUwsR0FBYyxDQUE3Qjs7QUFDQSxXQUFLLElBQUl5QixDQUFDLEdBQUdELFFBQWIsRUFBdUJDLENBQUMsSUFBSSxDQUE1QixFQUErQkEsQ0FBQyxFQUFoQyxFQUFvQztBQUNuQ0Ysc0JBQWMsQ0FBQ3FHLE1BQWYsQ0FBc0IySixJQUFJLENBQUM5UCxDQUFELENBQTFCLEVBQStCLENBQS9CO0FBQ0E7QUFDRDs7QUFFRCxXQUFPO0FBQUVGLG9CQUFjLEVBQUVBLGNBQWxCO0FBQWtDekYsa0JBQVksRUFBRUE7QUFBaEQsS0FBUDtBQUNBLEdBMUZEOztBQTRGQXZCLGdCQUFjLENBQUNDLFNBQWYsQ0FBeUJxSCxpQ0FBekIsR0FBNkQsVUFDNUR1RyxTQUQ0RCxFQUU1RHRNLFlBRjRELEVBRzVEeUYsY0FINEQsRUFJNURnSSxnQkFKNEQsRUFLM0Q7QUFDRCxRQUFJaEksY0FBYyxDQUFDdkIsTUFBZixJQUF5QixDQUE3QixFQUFnQztBQUMvQixhQUFPO0FBQUVsRSxvQkFBWSxFQUFFQSxZQUFoQjtBQUE4QmdWLGdCQUFRLEVBQUUxSTtBQUF4QyxPQUFQO0FBQ0E7O0FBQ0QsUUFBSXNKLG9CQUFvQixHQUFHbFcsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsU0FBTCxDQUFlNkYsY0FBZixDQUFYLENBQTNCO0FBQ0EsUUFBSThQLG9CQUFvQixHQUFHLEVBQTNCO0FBQ0EsUUFBSTdQLFFBQVEsR0FBR0QsY0FBYyxDQUFDdkIsTUFBOUI7O0FBQ0EsU0FBSyxJQUFJeUIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsUUFBcEIsRUFBOEJDLENBQUMsRUFBL0IsRUFBbUM7QUFDbEM0UCwwQkFBb0IsQ0FBQzNQLElBQXJCLENBQ0NsRyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxTQUFMLENBQWVJLFlBQVksQ0FBQ3lGLGNBQWMsQ0FBQ0UsQ0FBRCxDQUFmLENBQTNCLENBQVgsQ0FERDtBQUdBNFAsMEJBQW9CLENBQUM1UCxDQUFELENBQXBCLENBQXdCOEYsS0FBeEIsR0FBZ0NoRyxjQUFjLENBQUNFLENBQUQsQ0FBOUM7QUFDQTs7QUFDRCxRQUFJNFAsb0JBQW9CLEdBQUdNLGlGQUFrQixDQUFDTixvQkFBRCxDQUE3QztBQUVBLFFBQUlPLGdCQUFnQixHQUFHO0FBQ3RCMU8sT0FBQyxFQUFFLENBRG1CO0FBRXRCRSxPQUFDLEVBQUVnRixTQUZtQjtBQUd0QnpHLFdBQUssRUFBRSxLQUFLVCxLQUhVO0FBSXRCVSxZQUFNLEVBQ0x5UCxvQkFBb0IsQ0FBQyxDQUFELENBQXBCLENBQXdCelAsTUFBeEIsR0FDQWlELHVFQUFnQixDQUFDRCxJQUFqQixDQUFzQixJQUF0QixFQUE0QndELFNBQTVCO0FBTnFCLEtBQXZCO0FBU0EsUUFBSUUsY0FBYyxHQUFHLEtBQUtwSCxLQUExQjtBQUNBLFFBQUk0UCxRQUFRLEdBQUcxSSxTQUFmOztBQUVBLFdBQU9pSixvQkFBb0IsQ0FBQ3JSLE1BQXJCLElBQStCLENBQXRDLEVBQXlDO0FBQ3hDLFVBQUlxUixvQkFBb0IsQ0FBQ3JSLE1BQXJCLEdBQThCLENBQWxDLEVBQXFDO0FBQ3BDOFEsZ0JBQVEsR0FDUDFJLFNBQVMsR0FDVGlKLG9CQUFvQixDQUFDLENBQUQsQ0FBcEIsQ0FBd0J6UCxNQUR4QixHQUVBaUQsdUVBQWdCLENBQUNELElBQWpCLENBQXNCLElBQXRCLEVBQTRCd0QsU0FBNUIsQ0FIRDtBQUlBOztBQUVELFVBQUl5SixzQkFBc0IsR0FBRyxFQUE3QjtBQUNBLFVBQUlDLDBCQUEwQixHQUFHLEVBQWpDO0FBQ0EsVUFBSVIsb0JBQW9CLEdBQUcsRUFBM0I7QUFDQSxVQUFJOVAsUUFBUSxHQUFHNlAsb0JBQW9CLENBQUNyUixNQUFwQzs7QUFDQSxXQUFLLElBQUl5QixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxRQUFwQixFQUE4QkMsQ0FBQyxFQUEvQixFQUFtQztBQUNsQyxZQUFJNlAsb0JBQW9CLENBQUNoRixjQUFyQixDQUFvQzdLLENBQXBDLENBQUosRUFBNEM7QUFDM0M7QUFDQTs7QUFFRCxZQUNDNkcsY0FBYyxJQUNkK0ksb0JBQW9CLENBQUM1UCxDQUFELENBQXBCLENBQXdCRSxLQUF4QixHQUNDa0QsdUVBQWdCLENBQUNELElBQWpCLENBQXNCLElBQXRCLEVBQTRCLEtBQUsxRCxLQUFMLEdBQWFvSCxjQUF6QyxDQUhGLEVBSUU7QUFDRCtJLDhCQUFvQixDQUFDNVAsQ0FBRCxDQUFwQixDQUF3QnlCLENBQXhCLEdBQ0MsS0FBS2hDLEtBQUwsR0FDQW9ILGNBREEsR0FFQXpELHVFQUFnQixDQUFDRCxJQUFqQixDQUNDLElBREQsRUFFQyxLQUFLMUQsS0FBTCxHQUFhb0gsY0FGZCxDQUhEO0FBT0ErSSw4QkFBb0IsQ0FBQzVQLENBQUQsQ0FBcEIsQ0FBd0IyQixDQUF4QixHQUNDZ0YsU0FBUyxHQUFHdkQsdUVBQWdCLENBQUNELElBQWpCLENBQXNCLElBQXRCLEVBQTRCd0QsU0FBNUIsQ0FEYjtBQUVBdE0sc0JBQVksQ0FBQ3VWLG9CQUFvQixDQUFDNVAsQ0FBRCxDQUFwQixDQUF3QjhGLEtBQXpCLENBQVosQ0FBNENyRSxDQUE1QyxHQUNDLEtBQUtoQyxLQUFMLEdBQ0FvSCxjQURBLEdBRUF6RCx1RUFBZ0IsQ0FBQ0QsSUFBakIsQ0FDQyxJQURELEVBRUMsS0FBSzFELEtBQUwsR0FBYW9ILGNBRmQsQ0FIRDtBQU9BeE0sc0JBQVksQ0FBQ3VWLG9CQUFvQixDQUFDNVAsQ0FBRCxDQUFwQixDQUF3QjhGLEtBQXpCLENBQVosQ0FBNENuRSxDQUE1QyxHQUNDZ0YsU0FBUyxHQUFHdkQsdUVBQWdCLENBQUNELElBQWpCLENBQXNCLElBQXRCLEVBQTRCd0QsU0FBNUIsQ0FEYjtBQUdBLGNBQUk4RixhQUFhLEdBQUc7QUFDbkJoTCxhQUFDLEVBQUUsS0FBS2hDLEtBQUwsR0FBYW9ILGNBREc7QUFFbkJsRixhQUFDLEVBQUVnRixTQUZnQjtBQUduQnpHLGlCQUFLLEVBQ0owUCxvQkFBb0IsQ0FBQzVQLENBQUQsQ0FBcEIsQ0FBd0JFLEtBQXhCLEdBQ0FrRCx1RUFBZ0IsQ0FBQ0QsSUFBakIsQ0FDQyxJQURELEVBRUMsS0FBSzFELEtBQUwsR0FBYW9ILGNBRmQsQ0FMa0I7QUFTbkIxRyxrQkFBTSxFQUNMeVAsb0JBQW9CLENBQUM1UCxDQUFELENBQXBCLENBQXdCRyxNQUF4QixHQUNBaUQsdUVBQWdCLENBQUNELElBQWpCLENBQXNCLElBQXRCLEVBQTRCd0QsU0FBNUIsQ0FYa0I7QUFZbkJ3QiwwQkFBYyxFQUFFO0FBWkcsV0FBcEI7QUFlQWtJLG9DQUEwQixDQUFDcFEsSUFBM0IsQ0FBZ0N3TSxhQUFoQztBQUVBLGNBQUk2RCxTQUFTLEdBQUc7QUFDZjdPLGFBQUMsRUFBRSxLQUFLaEMsS0FBTCxHQUFhb0gsY0FERDtBQUVmbEYsYUFBQyxFQUNBZ0YsU0FBUyxHQUNUdkQsdUVBQWdCLENBQUNELElBQWpCLENBQXNCLElBQXRCLEVBQTRCd0QsU0FBNUIsQ0FEQSxHQUVBaUosb0JBQW9CLENBQUM1UCxDQUFELENBQXBCLENBQXdCRyxNQUxWO0FBTWZELGlCQUFLLEVBQ0owUCxvQkFBb0IsQ0FBQzVQLENBQUQsQ0FBcEIsQ0FBd0JFLEtBQXhCLEdBQ0FrRCx1RUFBZ0IsQ0FBQ0QsSUFBakIsQ0FDQyxJQURELEVBRUMsS0FBSzFELEtBQUwsR0FBYW9ILGNBRmQsQ0FSYztBQVlmMUcsa0JBQU0sRUFDTGdRLGdCQUFnQixDQUFDeE8sQ0FBakIsR0FDQXdPLGdCQUFnQixDQUFDaFEsTUFEakIsSUFFQ3dHLFNBQVMsR0FDVHZELHVFQUFnQixDQUFDRCxJQUFqQixDQUFzQixJQUF0QixFQUE0QndELFNBQTVCLENBREEsR0FFQWlKLG9CQUFvQixDQUFDNVAsQ0FBRCxDQUFwQixDQUF3QkcsTUFKekI7QUFiYyxXQUFoQjs7QUFvQkEsY0FBSW9RLDJFQUFZLENBQUNELFNBQUQsQ0FBaEIsRUFBNkI7QUFDNUJGLGtDQUFzQixDQUFDblEsSUFBdkIsQ0FBNEJxUSxTQUE1QjtBQUNBOztBQUNEVCw4QkFBb0IsQ0FBQzdQLENBQUQsQ0FBcEIsR0FBMEIsSUFBMUI7QUFFQTZHLHdCQUFjLEdBQ2JBLGNBQWMsSUFDYitJLG9CQUFvQixDQUFDNVAsQ0FBRCxDQUFwQixDQUF3QkUsS0FBeEIsR0FDQWtELHVFQUFnQixDQUFDRCxJQUFqQixDQUNDLElBREQsRUFFQyxLQUFLMUQsS0FBTCxHQUFhb0gsY0FGZCxDQUZhLENBRGY7QUFPQTtBQUNEOztBQUVELFVBQUlpSixJQUFJLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSCxvQkFBWixDQUFYO0FBQ0EsVUFBSTlQLFFBQVEsR0FBRytQLElBQUksQ0FBQ3ZSLE1BQUwsR0FBYyxDQUE3Qjs7QUFDQSxXQUFLLElBQUl5QixDQUFDLEdBQUdELFFBQWIsRUFBdUJDLENBQUMsSUFBSSxDQUE1QixFQUErQkEsQ0FBQyxFQUFoQyxFQUFvQztBQUNuQzRQLDRCQUFvQixDQUFDekosTUFBckIsQ0FBNEIySixJQUFJLENBQUM5UCxDQUFELENBQWhDLEVBQXFDLENBQXJDO0FBQ0E7O0FBRUQsVUFBSTZHLGNBQWMsR0FBRyxDQUFyQixFQUF3QjtBQUN2QixZQUFJeUosU0FBUyxHQUFHO0FBQ2Y3TyxXQUFDLEVBQUUsS0FBS2hDLEtBQUwsR0FBYW9ILGNBREQ7QUFFZmxGLFdBQUMsRUFBRWdGLFNBRlk7QUFHZnpHLGVBQUssRUFBRTJHLGNBSFE7QUFJZjFHLGdCQUFNLEVBQUVnUSxnQkFBZ0IsQ0FBQ2hRO0FBSlYsU0FBaEI7O0FBTUEsWUFBSW9RLDJFQUFZLENBQUNELFNBQUQsQ0FBaEIsRUFBNkI7QUFDNUJGLGdDQUFzQixDQUFDblEsSUFBdkIsQ0FBNEJxUSxTQUE1QjtBQUNBO0FBQ0Q7O0FBRUQsVUFBSVYsb0JBQW9CLENBQUNyUixNQUFyQixHQUE4QixDQUFsQyxFQUFxQztBQUNwQyxZQUFJNkosZ0JBQWdCLEdBQUcsS0FBS0MsZUFBTCxDQUN0QitILHNCQURzQixFQUV0QkMsMEJBRnNCLENBQXZCO0FBSUEsWUFBSTVILFVBQVUsR0FBRyxLQUFLQyxzQkFBTCxDQUNoQmtILG9CQURnQixFQUVoQlEsc0JBRmdCLEVBR2hCQywwQkFIZ0IsQ0FBakI7QUFLQSxZQUFJMUgsV0FBVyxHQUFHRixVQUFVLENBQUNHLGlCQUE3Qjs7QUFFQSxZQUFJRCxXQUFXLENBQUNwSyxNQUFaLEdBQXFCLENBQXpCLEVBQTRCO0FBQzNCc1IsOEJBQW9CLEdBQUcsRUFBdkI7QUFDQSxjQUFJOVAsUUFBUSxHQUFHNEksV0FBVyxDQUFDcEssTUFBM0I7QUFDQSxjQUFJc0ssUUFBUSxHQUFHK0csb0JBQW9CLENBQUNyUixNQUFwQzs7QUFDQSxlQUFLLElBQUl5QixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxRQUFwQixFQUE4QkMsQ0FBQyxFQUEvQixFQUFtQztBQUNsQyxpQkFBSyxJQUFJK0ksQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0YsUUFBcEIsRUFBOEJFLENBQUMsRUFBL0IsRUFBbUM7QUFDbEMsa0JBQ0NKLFdBQVcsQ0FBQzNJLENBQUQsQ0FBWCxDQUFlOEYsS0FBZixJQUNBOEosb0JBQW9CLENBQUM3RyxDQUFELENBQXBCLENBQXdCakQsS0FGekIsRUFHRTtBQUNEK0osb0NBQW9CLENBQUM5RyxDQUFELENBQXBCLEdBQTBCLElBQTFCO0FBQ0ExTyw0QkFBWSxDQUFDdVYsb0JBQW9CLENBQUM3RyxDQUFELENBQXBCLENBQXdCakQsS0FBekIsQ0FBWixDQUE0Q3JFLENBQTVDLEdBQ0NrSCxXQUFXLENBQUMzSSxDQUFELENBQVgsQ0FBZXlCLENBRGhCO0FBRUFwSCw0QkFBWSxDQUFDdVYsb0JBQW9CLENBQUM3RyxDQUFELENBQXBCLENBQXdCakQsS0FBekIsQ0FBWixDQUE0Q25FLENBQTVDLEdBQ0NnSCxXQUFXLENBQUMzSSxDQUFELENBQVgsQ0FBZTJCLENBRGhCO0FBRUE7QUFDRDtBQUNEOztBQUVELGNBQUltTyxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSCxvQkFBWixDQUFYO0FBQ0EsY0FBSTlQLFFBQVEsR0FBRytQLElBQUksQ0FBQ3ZSLE1BQUwsR0FBYyxDQUE3Qjs7QUFDQSxlQUFLLElBQUl5QixDQUFDLEdBQUdELFFBQWIsRUFBdUJDLENBQUMsSUFBSSxDQUE1QixFQUErQkEsQ0FBQyxFQUFoQyxFQUFvQztBQUNuQzRQLGdDQUFvQixDQUFDekosTUFBckIsQ0FBNEIySixJQUFJLENBQUM5UCxDQUFELENBQWhDLEVBQXFDLENBQXJDO0FBQ0E7QUFDRDtBQUNEOztBQUVELFVBQUk0UCxvQkFBb0IsQ0FBQ3JSLE1BQXJCLEdBQThCLENBQWxDLEVBQXFDO0FBQ3BDb0ksaUJBQVMsR0FBR3dKLGdCQUFnQixDQUFDeE8sQ0FBakIsR0FBcUJ3TyxnQkFBZ0IsQ0FBQ2hRLE1BQWxEO0FBQ0EsWUFBSXFRLG1CQUFtQixHQUFHO0FBQ3pCL08sV0FBQyxFQUFFLENBRHNCO0FBRXpCRSxXQUFDLEVBQUV3TyxnQkFBZ0IsQ0FBQ3hPLENBQWpCLEdBQXFCd08sZ0JBQWdCLENBQUNoUSxNQUZoQjtBQUd6QkQsZUFBSyxFQUFFLEtBQUtULEtBSGE7QUFJekJVLGdCQUFNLEVBQ0x5UCxvQkFBb0IsQ0FBQyxDQUFELENBQXBCLENBQXdCelAsTUFBeEIsR0FDQWlELHVFQUFnQixDQUFDRCxJQUFqQixDQUNDLElBREQsRUFFQ2dOLGdCQUFnQixDQUFDeE8sQ0FBakIsR0FBcUJ3TyxnQkFBZ0IsQ0FBQ2hRLE1BRnZDO0FBTndCLFNBQTFCO0FBV0EsWUFBSWdRLGdCQUFnQixHQUFHSyxtQkFBdkI7QUFDQTNKLHNCQUFjLEdBQUcsS0FBS3BILEtBQXRCO0FBQ0E7QUFDRDs7QUFFRCxXQUFPO0FBQUVwRixrQkFBWSxFQUFFQSxZQUFoQjtBQUE4QmdWLGNBQVEsRUFBRUE7QUFBeEMsS0FBUDtBQUNBLEdBek1EOztBQTJNQXZXLGdCQUFjLENBQUNDLFNBQWYsQ0FBeUI4VixzQkFBekIsR0FBa0QsVUFDakRsSSxTQURpRCxFQUVqRDhKLG1DQUFtQyxHQUFHLEtBRlcsRUFHakRwVyxZQUhpRCxFQUloRDtBQUNELFFBQUkwVSxtQkFBbUIsR0FBRyxFQUExQjtBQUNBLFFBQUlPLGdCQUFnQixHQUFHLENBQXZCO0FBQ0EsUUFBSXZQLFFBQVEsR0FBRzFGLFlBQVksQ0FBQ2tFLE1BQTVCOztBQUNBLFNBQUssSUFBSXlCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELFFBQXBCLEVBQThCQyxDQUFDLEVBQS9CLEVBQW1DO0FBQ2xDLFVBQUl5USxtQ0FBbUMsSUFBSSxJQUEzQyxFQUFpRDtBQUNoRCxZQUNDcFcsWUFBWSxDQUFDMkYsQ0FBRCxDQUFaLENBQWdCMkIsQ0FBaEIsR0FBb0JnRixTQUFwQixJQUNBdE0sWUFBWSxDQUFDMkYsQ0FBRCxDQUFaLENBQWdCMkIsQ0FBaEIsR0FBb0J0SCxZQUFZLENBQUMyRixDQUFELENBQVosQ0FBZ0JHLE1BQXBDLEdBQTZDd0csU0FGOUMsRUFHRTtBQUNEb0ksNkJBQW1CLENBQUMvTyxDQUFELENBQW5CLEdBQXlCLElBQXpCO0FBRUEsY0FBSWdPLElBQUksR0FBR3JILFNBQVMsR0FBR3RNLFlBQVksQ0FBQzJGLENBQUQsQ0FBWixDQUFnQjJCLENBQXZDOztBQUNBLGNBQUlxTSxJQUFJLEdBQUdzQixnQkFBWCxFQUE2QjtBQUM1QkEsNEJBQWdCLEdBQUd0QixJQUFuQjtBQUNBOztBQUVEO0FBQ0E7QUFDRDs7QUFDRCxVQUFJM1QsWUFBWSxDQUFDMkYsQ0FBRCxDQUFaLENBQWdCMkIsQ0FBaEIsSUFBcUJnRixTQUF6QixFQUFvQztBQUNuQ29JLDJCQUFtQixDQUFDL08sQ0FBRCxDQUFuQixHQUF5QixJQUF6QjtBQUNBO0FBQ0Q7O0FBQ0QsV0FBTztBQUNOK08seUJBQW1CLEVBQUVBLG1CQURmO0FBRU5PLHNCQUFnQixFQUFFQTtBQUZaLEtBQVA7QUFJQSxHQWhDRDs7QUFrQ0F4VyxnQkFBYyxDQUFDQyxTQUFmLENBQXlCcVcsZ0JBQXpCLEdBQTRDLFVBQzNDc0IsV0FEMkMsRUFFM0NyVyxZQUYyQyxFQUczQ3NXLGNBSDJDLEVBSTFDO0FBQ0RELGVBQVcsR0FBR0EsV0FBVyxHQUFHLEtBQUsvVyxNQUFqQztBQUNBLFFBQUlvRyxRQUFRLEdBQUcxRixZQUFZLENBQUNrRSxNQUE1Qjs7QUFDQSxTQUFLLElBQUl5QixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxRQUFwQixFQUE4QkMsQ0FBQyxFQUEvQixFQUFtQztBQUNsQyxVQUFJMlEsY0FBYyxDQUFDOUYsY0FBZixDQUE4QjdLLENBQTlCLENBQUosRUFBc0M7QUFDckMzRixvQkFBWSxDQUFDMkYsQ0FBRCxDQUFaLENBQWdCMkIsQ0FBaEIsSUFBcUIrTyxXQUFyQjtBQUNBO0FBQ0Q7O0FBQ0QsV0FBT3JXLFlBQVA7QUFDQSxHQWJEOztBQWVBdkIsZ0JBQWMsQ0FBQ0MsU0FBZixDQUF5QjZYLFlBQXpCLEdBQXdDLFVBQVNqUCxDQUFULEVBQVkrTyxXQUFaLEVBQXlCO0FBQ2hFLFFBQUkzUSxRQUFRLEdBQUcsS0FBSzFGLFlBQUwsQ0FBa0JrRSxNQUFqQzs7QUFDQSxTQUFLLElBQUl5QixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxRQUFwQixFQUE4QkMsQ0FBQyxFQUEvQixFQUFtQztBQUNsQyxVQUFJLEtBQUszRixZQUFMLENBQWtCMkYsQ0FBbEIsRUFBcUIyQixDQUFyQixJQUEwQkEsQ0FBOUIsRUFBaUM7QUFDaEMsYUFBS3RILFlBQUwsQ0FBa0IyRixDQUFsQixFQUFxQjJCLENBQXJCLElBQTBCK08sV0FBMUI7QUFDQSxhQUFLak4sb0JBQUwsQ0FBMEJ6RCxDQUExQixFQUE2QitCLEtBQTdCLENBQW1DZ0IsU0FBbkMsR0FDQyxlQUNBLEtBQUsxSSxZQUFMLENBQWtCMkYsQ0FBbEIsRUFBcUJ5QixDQURyQixHQUVBLE1BRkEsR0FHQSxLQUFLcEgsWUFBTCxDQUFrQjJGLENBQWxCLEVBQXFCMkIsQ0FIckIsR0FJQSxLQUxEO0FBTUE7QUFDRDtBQUNELEdBYkQ7O0FBZUE3SSxnQkFBYyxDQUFDQyxTQUFmLENBQXlCeVIsV0FBekIsR0FBdUMsVUFBU00sQ0FBVCxFQUFZQyxDQUFaLEVBQWU4RixNQUFNLEdBQUcsRUFBeEIsRUFBNEI7QUFDbEUsUUFBSUMsTUFBTSxHQUFHQyx1RUFBUSxDQUFDakcsQ0FBRCxDQUFyQjtBQUNBLFFBQUlrRyxNQUFNLEdBQUdELHVFQUFRLENBQUNoRyxDQUFELENBQXJCO0FBQ0EsUUFBSWtHLGFBQWEsR0FBRztBQUFFLFNBQUcsQ0FBTDtBQUFRLFNBQUcsQ0FBWDtBQUFjLFNBQUcsQ0FBakI7QUFBb0IsU0FBRztBQUF2QixLQUFwQjtBQUVBLFFBQUlDLGlCQUFpQixHQUFHLENBQXhCO0FBQ0EsUUFBSUMsc0JBQXNCLEdBQUcsRUFBN0I7QUFDQSxRQUFJQyxXQUFXLEdBQUcsRUFBbEI7QUFDQSxRQUFJQyxzQkFBc0IsR0FBRyxFQUE3QjtBQUNBLFFBQUlDLFdBQVcsR0FBRyxFQUFsQjtBQUNBLFFBQUlDLFFBQVEsR0FBRyxJQUFmO0FBRUEsUUFBSUMsT0FBTyxHQUFHLElBQWQ7QUFDQSxRQUFJQyxPQUFPLEdBQUcsSUFBZDtBQUVBLFFBQUkxUixRQUFRLEdBQUcrUSxNQUFNLENBQUN2UyxNQUF0Qjs7QUFDQSxTQUFLLElBQUl5QixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxRQUFwQixFQUE4QkMsQ0FBQyxFQUEvQixFQUFtQztBQUNsQ2tSLHVCQUFpQixHQUFHLENBQXBCO0FBQ0FDLDRCQUFzQixHQUFHLEVBQXpCO0FBQ0FDLGlCQUFXLEdBQUcsRUFBZDtBQUNBQyw0QkFBc0IsR0FBRyxFQUF6QjtBQUNBQyxpQkFBVyxHQUFHLEVBQWQ7QUFDQUMsY0FBUSxHQUFHLElBQVg7QUFFQSxVQUFJRyxLQUFLLEdBQUdaLE1BQU0sQ0FBQzlRLENBQUQsQ0FBbEI7QUFDQSxVQUFJMlIsS0FBSyxHQUFHWCxNQUFNLENBQUNDLGFBQWEsQ0FBQ2pSLENBQUQsQ0FBZCxDQUFsQjtBQUVBd1IsYUFBTyxHQUFHeFIsQ0FBVjtBQUNBeVIsYUFBTyxHQUFHUixhQUFhLENBQUNqUixDQUFELENBQXZCLENBWmtDLENBY2xDOztBQUNBLFVBQUk0UixFQUFFLEdBQUcsQ0FBVDtBQUNBLFVBQUlDLEVBQUUsR0FBRyxDQUFULENBaEJrQyxDQWtCbEM7O0FBQ0EsVUFBSUMsRUFBRSxHQUFHL1gsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsU0FBTCxDQUFlMFgsS0FBSyxDQUFDLENBQUQsQ0FBcEIsQ0FBWCxDQUFUO0FBQ0EsVUFBSUksRUFBRSxHQUFHaFksSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsU0FBTCxDQUFlMFgsS0FBSyxDQUFDLENBQUQsQ0FBcEIsQ0FBWCxDQUFUO0FBRUEsVUFBSTlJLFFBQVEsR0FBRzZJLEtBQUssQ0FBQ25ULE1BQXJCOztBQUNBLFdBQUssSUFBSXdLLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdGLFFBQXBCLEVBQThCRSxDQUFDLEVBQS9CLEVBQW1DO0FBQ2xDLFlBQUlpSixFQUFFLEdBQUdqWSxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxTQUFMLENBQWV5WCxLQUFLLENBQUMzSSxDQUFELENBQXBCLENBQVgsQ0FBVDs7QUFFQSxZQUFJL0ksQ0FBQyxJQUFJLENBQUwsSUFBVUEsQ0FBQyxJQUFJLENBQW5CLEVBQXNCO0FBQ3JCLGNBQUl5QixDQUFDLEdBQUd1USxFQUFFLENBQUMsQ0FBRCxDQUFWO0FBQ0EsY0FBSXJRLENBQUMsR0FBR21RLEVBQUUsQ0FBQyxDQUFELENBQVY7QUFDQSxjQUFJRyxLQUFLLEdBQUcsQ0FBQ0QsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRRixFQUFFLENBQUMsQ0FBRCxDQUFYLEtBQW1CQyxFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVFELEVBQUUsQ0FBQyxDQUFELENBQTdCLENBQVo7QUFDQSxjQUFJSSxDQUFDLEdBQUcvRSxJQUFJLENBQUNnRixHQUFMLENBQVNILEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUUYsRUFBRSxDQUFDLENBQUQsQ0FBbkIsQ0FBUjtBQUNBLFNBTEQsTUFLTztBQUNOLGNBQUlyUSxDQUFDLEdBQUdxUSxFQUFFLENBQUMsQ0FBRCxDQUFWO0FBQ0EsY0FBSW5RLENBQUMsR0FBR3FRLEVBQUUsQ0FBQyxDQUFELENBQVY7QUFDQSxjQUFJQyxLQUFLLEdBQUcsQ0FBQ0QsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRRixFQUFFLENBQUMsQ0FBRCxDQUFYLEtBQW1CQyxFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVFELEVBQUUsQ0FBQyxDQUFELENBQTdCLENBQVo7QUFDQSxjQUFJSSxDQUFDLEdBQUcvRSxJQUFJLENBQUNnRixHQUFMLENBQVNILEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUUYsRUFBRSxDQUFDLENBQUQsQ0FBbkIsQ0FBUjtBQUNBOztBQUNELFlBQUlHLEtBQUssR0FBRyxDQUFSLElBQWFBLEtBQUssR0FBRyxDQUF6QixFQUE0QixDQUMzQixDQURELE1BQ08sSUFBSUEsS0FBSyxJQUFJLENBQVQsSUFBY0EsS0FBSyxJQUFJLENBQTNCLEVBQThCO0FBQ3BDZCxnQ0FBc0IsQ0FBQ2xSLElBQXZCLENBQTRCLENBQUN3QixDQUFELEVBQUlFLENBQUosQ0FBNUI7QUFDQXlQLHFCQUFXLENBQUNuUixJQUFaLENBQWlCK1IsRUFBakI7QUFDQVQsa0JBQVEsR0FBR1csQ0FBWDtBQUNBaEIsMkJBQWlCO0FBQ2pCLFNBTE0sTUFLQTtBQUNOM04saUJBQU8sQ0FBQzZPLElBQVIsQ0FBYSxnQ0FBYjtBQUNBO0FBQ0QsT0E5Q2lDLENBZ0RsQzs7O0FBQ0EsVUFBSU4sRUFBRSxHQUFHL1gsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsU0FBTCxDQUFleVgsS0FBSyxDQUFDLENBQUQsQ0FBcEIsQ0FBWCxDQUFUO0FBQ0EsVUFBSUssRUFBRSxHQUFHaFksSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsU0FBTCxDQUFleVgsS0FBSyxDQUFDLENBQUQsQ0FBcEIsQ0FBWCxDQUFUO0FBRUEsVUFBSTdJLFFBQVEsR0FBRzhJLEtBQUssQ0FBQ3BULE1BQXJCOztBQUNBLFdBQUssSUFBSXNQLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdoRixRQUFwQixFQUE4QmdGLENBQUMsRUFBL0IsRUFBbUM7QUFDbEMsWUFBSW1FLEVBQUUsR0FBR2pZLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLFNBQUwsQ0FBZTBYLEtBQUssQ0FBQzlELENBQUQsQ0FBcEIsQ0FBWCxDQUFUOztBQUVBLFlBQUk3TixDQUFDLElBQUksQ0FBTCxJQUFVQSxDQUFDLElBQUksQ0FBbkIsRUFBc0I7QUFDckIsY0FBSXlCLENBQUMsR0FBR3VRLEVBQUUsQ0FBQyxDQUFELENBQVY7QUFDQSxjQUFJclEsQ0FBQyxHQUFHbVEsRUFBRSxDQUFDLENBQUQsQ0FBVjtBQUNBLGNBQUlHLEtBQUssR0FBRyxDQUFDRCxFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVFGLEVBQUUsQ0FBQyxDQUFELENBQVgsS0FBbUJDLEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUUQsRUFBRSxDQUFDLENBQUQsQ0FBN0IsQ0FBWjtBQUNBLGNBQUlJLENBQUMsR0FBRy9FLElBQUksQ0FBQ2dGLEdBQUwsQ0FBU0gsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRRixFQUFFLENBQUMsQ0FBRCxDQUFuQixDQUFSO0FBQ0EsU0FMRCxNQUtPO0FBQ04sY0FBSXJRLENBQUMsR0FBR3FRLEVBQUUsQ0FBQyxDQUFELENBQVY7QUFDQSxjQUFJblEsQ0FBQyxHQUFHcVEsRUFBRSxDQUFDLENBQUQsQ0FBVjtBQUNBLGNBQUlDLEtBQUssR0FBRyxDQUFDRCxFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVFGLEVBQUUsQ0FBQyxDQUFELENBQVgsS0FBbUJDLEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUUQsRUFBRSxDQUFDLENBQUQsQ0FBN0IsQ0FBWjtBQUNBLGNBQUlJLENBQUMsR0FBRy9FLElBQUksQ0FBQ2dGLEdBQUwsQ0FBU0gsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRRixFQUFFLENBQUMsQ0FBRCxDQUFuQixDQUFSO0FBQ0E7O0FBQ0QsWUFBSUcsS0FBSyxHQUFHLENBQVIsSUFBYUEsS0FBSyxHQUFHLENBQXpCLEVBQTRCLENBQzNCLENBREQsTUFDTyxJQUFJQSxLQUFLLElBQUksQ0FBVCxJQUFjQSxLQUFLLElBQUksQ0FBM0IsRUFBOEI7QUFDcENaLGdDQUFzQixDQUFDcFIsSUFBdkIsQ0FBNEIsQ0FBQ3dCLENBQUQsRUFBSUUsQ0FBSixDQUE1QjtBQUNBMlAscUJBQVcsQ0FBQ3JSLElBQVosQ0FBaUIrUixFQUFqQjtBQUNBVCxrQkFBUSxHQUFHVyxDQUFYO0FBQ0FoQiwyQkFBaUI7QUFDakIsU0FMTSxNQUtBO0FBQ04zTixpQkFBTyxDQUFDNk8sSUFBUixDQUFhLGdDQUFiO0FBQ0E7QUFDRDs7QUFFRCxVQUNDbEIsaUJBQWlCLElBQUksQ0FBckIsSUFDQUEsaUJBQWlCLElBQUksQ0FEckIsSUFFQUEsaUJBQWlCLElBQUksQ0FIdEIsRUFJRTtBQUNELFlBQUlBLGlCQUFpQixJQUFJLENBQXpCLEVBQTRCO0FBQzNCLGNBQ0NuWCxJQUFJLENBQUNFLFNBQUwsQ0FBZW1YLFdBQWYsS0FDQXJYLElBQUksQ0FBQ0UsU0FBTCxDQUFlb1gsc0JBQWYsQ0FGRCxFQUdFO0FBQ0Q7QUFDQTtBQUNEOztBQUNEO0FBQ0E7QUFDRDs7QUFFRCxRQUFJSCxpQkFBaUIsSUFBSSxDQUFyQixJQUEwQkEsaUJBQWlCLElBQUksQ0FBbkQsRUFBc0Q7QUFDckQsYUFBTyxLQUFQO0FBQ0E7O0FBRUQsUUFBSU0sT0FBTyxJQUFJLENBQVgsSUFBZ0JBLE9BQU8sSUFBSSxDQUEvQixFQUFrQztBQUNqQyxVQUFJYSxRQUFRLEdBQUd0WSxJQUFJLENBQUNDLEtBQUwsQ0FDZEQsSUFBSSxDQUFDRSxTQUFMLENBQWU2VyxNQUFNLENBQUNHLGFBQWEsQ0FBQ08sT0FBRCxDQUFkLENBQXJCLENBRGMsQ0FBZjtBQUdBLFVBQUljLFFBQVEsR0FBR3ZZLElBQUksQ0FBQ0MsS0FBTCxDQUNkRCxJQUFJLENBQUNFLFNBQUwsQ0FBZStXLE1BQU0sQ0FBQ0MsYUFBYSxDQUFDUSxPQUFELENBQWQsQ0FBckIsQ0FEYyxDQUFmO0FBSUEsVUFBSVMsQ0FBQyxHQUFHL0UsSUFBSSxDQUFDZ0YsR0FBTCxDQUFTRSxRQUFRLENBQUMsQ0FBRCxDQUFSLENBQVksQ0FBWixJQUFpQkMsUUFBUSxDQUFDLENBQUQsQ0FBUixDQUFZLENBQVosQ0FBMUIsQ0FBUjs7QUFDQSxVQUFJSixDQUFDLEdBQUdYLFFBQVIsRUFBa0I7QUFDakJDLGVBQU8sR0FBR1AsYUFBYSxDQUFDTyxPQUFELENBQXZCO0FBQ0FDLGVBQU8sR0FBR1IsYUFBYSxDQUFDUSxPQUFELENBQXZCO0FBQ0FGLGdCQUFRLEdBQUdXLENBQVg7QUFFQSxZQUFJSyxPQUFPLEdBQUd2QixNQUFNLENBQUNTLE9BQUQsQ0FBTixDQUFnQixDQUFoQixFQUFtQixDQUFuQixDQUFkO0FBQ0EsWUFBSTFSLFFBQVEsR0FBR29SLHNCQUFzQixDQUFDNVMsTUFBdEM7O0FBQ0EsYUFBSyxJQUFJeUIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsUUFBcEIsRUFBOEJDLENBQUMsRUFBL0IsRUFBbUM7QUFDbENtUixnQ0FBc0IsQ0FBQ25SLENBQUQsQ0FBdEIsQ0FBMEIsQ0FBMUIsSUFBK0J1UyxPQUEvQjtBQUNBbkIscUJBQVcsQ0FBQ3BSLENBQUQsQ0FBWCxDQUFlLENBQWYsSUFBb0JxUyxRQUFRLENBQUMsQ0FBRCxDQUFSLENBQVksQ0FBWixDQUFwQjtBQUNBOztBQUNELFlBQUlFLE9BQU8sR0FBR3pCLE1BQU0sQ0FBQ1UsT0FBRCxDQUFOLENBQWdCLENBQWhCLEVBQW1CLENBQW5CLENBQWQ7QUFDQSxZQUFJelIsUUFBUSxHQUFHc1Isc0JBQXNCLENBQUM5UyxNQUF0Qzs7QUFDQSxhQUFLLElBQUl5QixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxRQUFwQixFQUE4QkMsQ0FBQyxFQUEvQixFQUFtQztBQUNsQ3FSLGdDQUFzQixDQUFDclIsQ0FBRCxDQUF0QixDQUEwQixDQUExQixJQUErQnVTLE9BQS9CO0FBQ0FqQixxQkFBVyxDQUFDdFIsQ0FBRCxDQUFYLENBQWUsQ0FBZixJQUFvQnNTLFFBQVEsQ0FBQyxDQUFELENBQVIsQ0FBWSxDQUFaLENBQXBCO0FBQ0E7QUFDRDtBQUNELEtBM0JELE1BMkJPO0FBQ04sVUFBSUQsUUFBUSxHQUFHdFksSUFBSSxDQUFDQyxLQUFMLENBQ2RELElBQUksQ0FBQ0UsU0FBTCxDQUFlNlcsTUFBTSxDQUFDRyxhQUFhLENBQUNPLE9BQUQsQ0FBZCxDQUFyQixDQURjLENBQWY7QUFHQSxVQUFJYyxRQUFRLEdBQUd2WSxJQUFJLENBQUNDLEtBQUwsQ0FDZEQsSUFBSSxDQUFDRSxTQUFMLENBQWUrVyxNQUFNLENBQUNDLGFBQWEsQ0FBQ1EsT0FBRCxDQUFkLENBQXJCLENBRGMsQ0FBZjtBQUlBLFVBQUlTLENBQUMsR0FBRy9FLElBQUksQ0FBQ2dGLEdBQUwsQ0FBU0UsUUFBUSxDQUFDLENBQUQsQ0FBUixDQUFZLENBQVosSUFBaUJDLFFBQVEsQ0FBQyxDQUFELENBQVIsQ0FBWSxDQUFaLENBQTFCLENBQVI7O0FBQ0EsVUFBSUosQ0FBQyxHQUFHWCxRQUFSLEVBQWtCO0FBQ2pCQyxlQUFPLEdBQUdQLGFBQWEsQ0FBQ08sT0FBRCxDQUF2QjtBQUNBQyxlQUFPLEdBQUdSLGFBQWEsQ0FBQ1EsT0FBRCxDQUF2QjtBQUNBRixnQkFBUSxHQUFHVyxDQUFYO0FBRUEsWUFBSU0sT0FBTyxHQUFHeEIsTUFBTSxDQUFDUyxPQUFELENBQU4sQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsQ0FBZDtBQUNBLFlBQUkxUixRQUFRLEdBQUdvUixzQkFBc0IsQ0FBQzVTLE1BQXRDOztBQUNBLGFBQUssSUFBSXlCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELFFBQXBCLEVBQThCQyxDQUFDLEVBQS9CLEVBQW1DO0FBQ2xDbVIsZ0NBQXNCLENBQUNuUixDQUFELENBQXRCLENBQTBCLENBQTFCLElBQStCd1MsT0FBL0I7QUFDQXBCLHFCQUFXLENBQUNwUixDQUFELENBQVgsQ0FBZSxDQUFmLElBQW9CcVMsUUFBUSxDQUFDLENBQUQsQ0FBUixDQUFZLENBQVosQ0FBcEI7QUFDQTs7QUFDRCxZQUFJRyxPQUFPLEdBQUcxQixNQUFNLENBQUNVLE9BQUQsQ0FBTixDQUFnQixDQUFoQixFQUFtQixDQUFuQixDQUFkO0FBQ0EsWUFBSXpSLFFBQVEsR0FBR3NSLHNCQUFzQixDQUFDOVMsTUFBdEM7O0FBQ0EsYUFBSyxJQUFJeUIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsUUFBcEIsRUFBOEJDLENBQUMsRUFBL0IsRUFBbUM7QUFDbENxUixnQ0FBc0IsQ0FBQ3JSLENBQUQsQ0FBdEIsQ0FBMEIsQ0FBMUIsSUFBK0J3UyxPQUEvQjtBQUNBbEIscUJBQVcsQ0FBQ3RSLENBQUQsQ0FBWCxDQUFlLENBQWYsSUFBb0JzUyxRQUFRLENBQUMsQ0FBRCxDQUFSLENBQVksQ0FBWixDQUFwQjtBQUNBO0FBQ0Q7QUFDRDs7QUFFRCxRQUFJZixRQUFRLEdBQUcsS0FBSzVYLE1BQXBCLEVBQTRCO0FBQzNCLFVBQUk4WSxnQkFBZ0IsR0FBRyxFQUF2QjtBQUNBLFVBQUlDLGtCQUFrQixHQUFHLElBQXpCOztBQUNBLFVBQUl4QixpQkFBaUIsSUFBSSxDQUF6QixFQUE0QjtBQUMzQnVCLHdCQUFnQixHQUFHckIsV0FBVyxDQUFDckgsTUFBWixDQUFtQnVILFdBQW5CLENBQW5CO0FBQ0FvQiwwQkFBa0IsR0FBR0Msa0ZBQW1CLENBQUNGLGdCQUFELENBQXhDO0FBQ0EsT0FIRCxNQUdPO0FBQ04sWUFBSTFTLFFBQVEsR0FBR3FSLFdBQVcsQ0FBQzdTLE1BQTNCOztBQUNBLGFBQUssSUFBSXlCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELFFBQXBCLEVBQThCQyxDQUFDLEVBQS9CLEVBQW1DO0FBQ2xDeVMsMEJBQWdCLENBQUN4UyxJQUFqQixDQUFzQm1SLFdBQVcsQ0FBQ3BSLENBQUQsQ0FBakM7QUFDQXlTLDBCQUFnQixDQUFDeFMsSUFBakIsQ0FBc0JrUixzQkFBc0IsQ0FBQ25SLENBQUQsQ0FBNUM7QUFDQTs7QUFFRCxZQUFJRCxRQUFRLEdBQUd1UixXQUFXLENBQUMvUyxNQUEzQjs7QUFDQSxhQUFLLElBQUl5QixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxRQUFwQixFQUE4QkMsQ0FBQyxFQUEvQixFQUFtQztBQUNsQ3lTLDBCQUFnQixDQUFDeFMsSUFBakIsQ0FBc0JxUixXQUFXLENBQUN0UixDQUFELENBQWpDO0FBQ0F5UywwQkFBZ0IsQ0FBQ3hTLElBQWpCLENBQXNCb1Isc0JBQXNCLENBQUNyUixDQUFELENBQTVDO0FBQ0E7O0FBRUQsWUFBSXlTLGdCQUFnQixDQUFDbFUsTUFBakIsR0FBMEIsQ0FBOUIsRUFBaUM7QUFDaEMsY0FBSXFVLGNBQWMsR0FBRyxFQUFyQjtBQUNBLGNBQUlDLHFCQUFxQixHQUFHLEVBQTVCO0FBQ0EsY0FBSTlTLFFBQVEsR0FBRzBTLGdCQUFnQixDQUFDbFUsTUFBaEM7O0FBQ0EsZUFBSyxJQUFJeUIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsUUFBcEIsRUFBOEJDLENBQUMsRUFBL0IsRUFBbUM7QUFDbEMsZ0JBQUk4UCxJQUFJLEdBQUcvVixJQUFJLENBQUNDLEtBQUwsQ0FDVkQsSUFBSSxDQUFDRSxTQUFMLENBQWV3WSxnQkFBZ0IsQ0FBQ3pTLENBQUQsQ0FBL0IsQ0FEVSxDQUFYOztBQUdBLGdCQUFJNFMsY0FBYyxDQUFDL0gsY0FBZixDQUE4QmlGLElBQTlCLENBQUosRUFBeUMsQ0FDeEMsQ0FERCxNQUNPO0FBQ044Qyw0QkFBYyxDQUFDOUMsSUFBRCxDQUFkLEdBQXVCLElBQXZCO0FBQ0ErQyxtQ0FBcUIsQ0FBQzVTLElBQXRCLENBQTJCd1MsZ0JBQWdCLENBQUN6UyxDQUFELENBQTNDO0FBQ0E7QUFDRDs7QUFDRDBTLDRCQUFrQixHQUFHQyxrRkFBbUIsQ0FDdkNFLHFCQUR1QyxDQUF4QztBQUdBLFNBakJELE1BaUJPO0FBQ05ILDRCQUFrQixHQUFHQyxrRkFBbUIsQ0FBQ0YsZ0JBQUQsQ0FBeEM7QUFDQTtBQUNEOztBQUVELFVBQUlLLHdCQUF3QixHQUFHL0IsdUVBQVEsQ0FBQzJCLGtCQUFELENBQXZDOztBQUVBLFVBQUlsQixPQUFPLElBQUksQ0FBWCxJQUFnQkEsT0FBTyxJQUFJLENBQS9CLEVBQWtDO0FBQ2pDLFlBQUlBLE9BQU8sSUFBSSxDQUFmLEVBQWtCO0FBQ2pCLGNBQUl1QixjQUFjLEdBQUcsS0FBckI7QUFDQSxjQUFJQyw4QkFBOEIsR0FBR2paLElBQUksQ0FBQ0MsS0FBTCxDQUNwQ0QsSUFBSSxDQUFDRSxTQUFMLENBQWU2WSx3QkFBd0IsQ0FBQyxDQUFELENBQXZDLENBRG9DLENBQXJDO0FBR0EsU0FMRCxNQUtPO0FBQ04sY0FBSUMsY0FBYyxHQUFHLElBQXJCO0FBQ0EsY0FBSUMsOEJBQThCLEdBQUdqWixJQUFJLENBQUNDLEtBQUwsQ0FDcENELElBQUksQ0FBQ0UsU0FBTCxDQUFlNlksd0JBQXdCLENBQUMsQ0FBRCxDQUF2QyxDQURvQyxDQUFyQztBQUdBO0FBQ0QsT0FaRCxNQVlPO0FBQ04sWUFBSXRCLE9BQU8sSUFBSSxDQUFmLEVBQWtCO0FBQ2pCLGNBQUl5QixlQUFlLEdBQUcsS0FBdEI7QUFDQSxjQUFJRCw4QkFBOEIsR0FBR2paLElBQUksQ0FBQ0MsS0FBTCxDQUNwQ0QsSUFBSSxDQUFDRSxTQUFMLENBQWU2WSx3QkFBd0IsQ0FBQyxDQUFELENBQXZDLENBRG9DLENBQXJDO0FBR0EsU0FMRCxNQUtPO0FBQ04sY0FBSUcsZUFBZSxHQUFHLElBQXRCO0FBQ0EsY0FBSUQsOEJBQThCLEdBQUdqWixJQUFJLENBQUNDLEtBQUwsQ0FDcENELElBQUksQ0FBQ0UsU0FBTCxDQUFlNlksd0JBQXdCLENBQUMsQ0FBRCxDQUF2QyxDQURvQyxDQUFyQztBQUdBO0FBQ0Q7O0FBRUQsVUFBSUksWUFBWSxHQUFHLENBQUMsQ0FBcEI7QUFDQSxVQUFJQyx3QkFBd0IsR0FBRyxJQUEvQjtBQUNBLFVBQUlwVCxRQUFRLEdBQUc4USxNQUFNLENBQUN0UyxNQUF0Qjs7QUFDQSxXQUFLLElBQUl5QixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxRQUFwQixFQUE4QkMsQ0FBQyxFQUEvQixFQUFtQztBQUNsQyxZQUNDLEtBQUtzSyxzQ0FBTCxDQUNDb0ksa0JBREQsRUFFQzdCLE1BQU0sQ0FBQzdRLENBQUQsQ0FGUCxDQURELEVBS0U7QUFDRCxjQUFJNlEsTUFBTSxDQUFDN1EsQ0FBRCxDQUFOLENBQVU2SyxjQUFWLENBQXlCLGdCQUF6QixDQUFKLEVBQWdEO0FBQy9DcUksd0JBQVksR0FBRyxDQUFDLENBQWhCO0FBQ0FDLG9DQUF3QixHQUFHLENBQUMsQ0FBNUI7QUFDQTtBQUNBOztBQUNELGNBQUlDLFNBQVMsR0FBR3JDLHVFQUFRLENBQUNGLE1BQU0sQ0FBQzdRLENBQUQsQ0FBUCxDQUF4Qjs7QUFDQSxjQUFJd1IsT0FBTyxJQUFJLENBQVgsSUFBZ0JBLE9BQU8sSUFBSSxDQUEvQixFQUFrQztBQUNqQyxnQkFBSUEsT0FBTyxJQUFJLENBQWYsRUFBa0I7QUFDakIsa0JBQUlVLENBQUMsR0FBRy9FLElBQUksQ0FBQ2dGLEdBQUwsQ0FDUGEsOEJBQThCLENBQUMsQ0FBRCxDQUE5QixDQUFrQyxDQUFsQyxLQUNFbkMsTUFBTSxDQUFDN1EsQ0FBRCxDQUFOLENBQVUyQixDQUFWLEdBQWNrUCxNQUFNLENBQUM3USxDQUFELENBQU4sQ0FBVUcsTUFEMUIsQ0FETyxDQUFSO0FBSUEsYUFMRCxNQUtPO0FBQ04sa0JBQUkrUixDQUFDLEdBQUcvRSxJQUFJLENBQUNnRixHQUFMLENBQ1BhLDhCQUE4QixDQUFDLENBQUQsQ0FBOUIsQ0FBa0MsQ0FBbEMsSUFDQ25DLE1BQU0sQ0FBQzdRLENBQUQsQ0FBTixDQUFVMkIsQ0FGSixDQUFSO0FBSUE7QUFDRCxXQVpELE1BWU87QUFDTixnQkFBSTZQLE9BQU8sSUFBSSxDQUFmLEVBQWtCO0FBQ2pCLGtCQUFJVSxDQUFDLEdBQUcvRSxJQUFJLENBQUNnRixHQUFMLENBQ1BhLDhCQUE4QixDQUFDLENBQUQsQ0FBOUIsQ0FBa0MsQ0FBbEMsS0FDRW5DLE1BQU0sQ0FBQzdRLENBQUQsQ0FBTixDQUFVeUIsQ0FBVixHQUFjb1AsTUFBTSxDQUFDN1EsQ0FBRCxDQUFOLENBQVVFLEtBRDFCLENBRE8sQ0FBUjtBQUlBLGFBTEQsTUFLTztBQUNOLGtCQUFJZ1MsQ0FBQyxHQUFHL0UsSUFBSSxDQUFDZ0YsR0FBTCxDQUNQYSw4QkFBOEIsQ0FBQyxDQUFELENBQTlCLENBQWtDLENBQWxDLElBQ0NuQyxNQUFNLENBQUM3USxDQUFELENBQU4sQ0FBVXlCLENBRkosQ0FBUjtBQUlBO0FBQ0Q7O0FBQ0QsY0FBSXlRLENBQUMsR0FBR2dCLFlBQUosSUFBb0JBLFlBQVksR0FBRyxDQUF2QyxFQUEwQztBQUN6Q0Esd0JBQVksR0FBR2hCLENBQWY7QUFDQWlCLG9DQUF3QixHQUFHblQsQ0FBM0IsQ0FGeUMsQ0FHekM7QUFDQTs7QUFDQSxrQkFMeUMsQ0FNekM7QUFDQTtBQUNBO0FBQ0Q7QUFDRDs7QUFFRCxVQUFJbVQsd0JBQXdCLElBQUksSUFBaEMsRUFBc0M7QUFDckMsWUFBSUQsWUFBWSxHQUFHLEtBQUt2WixNQUF4QixFQUFnQztBQUMvQjtBQUNBLGNBQUk0USxXQUFXLEdBQUcsS0FBbEIsQ0FGK0IsQ0FHL0I7QUFDQSxTQUpELE1BSU87QUFDTjtBQUNBLGNBQUlBLFdBQVcsR0FBRyxLQUFsQjtBQUNBO0FBQ0QsT0FURCxNQVNPO0FBQ047QUFDQSxZQUFJOEksa0JBQWtCLEdBQUcsSUFBekI7QUFDQTtBQUNELEtBdklELE1BdUlPO0FBQ047QUFDQSxVQUFJQSxrQkFBa0IsR0FBRyxJQUF6QjtBQUNBOztBQUVELFFBQUlBLGtCQUFrQixJQUFJLElBQTFCLEVBQWdDO0FBQy9CLFVBQUk5SSxXQUFXLEdBQUcsRUFBbEI7O0FBQ0EsVUFBSWlILE9BQU8sSUFBSSxDQUFYLElBQWdCQSxPQUFPLElBQUksQ0FBL0IsRUFBa0M7QUFDakMsWUFBSWEsUUFBUSxHQUFHdFksSUFBSSxDQUFDQyxLQUFMLENBQ2RELElBQUksQ0FBQ0UsU0FBTCxDQUFlNlcsTUFBTSxDQUFDRyxhQUFhLENBQUNPLE9BQUQsQ0FBZCxDQUFyQixDQURjLENBQWY7QUFHQSxZQUFJYyxRQUFRLEdBQUd2WSxJQUFJLENBQUNDLEtBQUwsQ0FDZEQsSUFBSSxDQUFDRSxTQUFMLENBQWUrVyxNQUFNLENBQUNDLGFBQWEsQ0FBQ1EsT0FBRCxDQUFkLENBQXJCLENBRGMsQ0FBZjtBQUlBRCxlQUFPLEdBQUdQLGFBQWEsQ0FBQ08sT0FBRCxDQUF2QjtBQUNBQyxlQUFPLEdBQUdSLGFBQWEsQ0FBQ1EsT0FBRCxDQUF2QjtBQUVBLFlBQUljLE9BQU8sR0FBR3ZCLE1BQU0sQ0FBQ1MsT0FBRCxDQUFOLENBQWdCLENBQWhCLEVBQW1CLENBQW5CLENBQWQ7QUFDQSxZQUFJMVIsUUFBUSxHQUFHb1Isc0JBQXNCLENBQUM1UyxNQUF0Qzs7QUFDQSxhQUFLLElBQUl5QixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxRQUFwQixFQUE4QkMsQ0FBQyxFQUEvQixFQUFtQztBQUNsQ21SLGdDQUFzQixDQUFDblIsQ0FBRCxDQUF0QixDQUEwQixDQUExQixJQUErQnVTLE9BQS9CO0FBQ0FuQixxQkFBVyxDQUFDcFIsQ0FBRCxDQUFYLENBQWUsQ0FBZixJQUFvQnFTLFFBQVEsQ0FBQyxDQUFELENBQVIsQ0FBWSxDQUFaLENBQXBCO0FBQ0E7O0FBQ0QsWUFBSUUsT0FBTyxHQUFHekIsTUFBTSxDQUFDVSxPQUFELENBQU4sQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsQ0FBZDtBQUNBLFlBQUl6UixRQUFRLEdBQUdzUixzQkFBc0IsQ0FBQzlTLE1BQXRDOztBQUNBLGFBQUssSUFBSXlCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELFFBQXBCLEVBQThCQyxDQUFDLEVBQS9CLEVBQW1DO0FBQ2xDcVIsZ0NBQXNCLENBQUNyUixDQUFELENBQXRCLENBQTBCLENBQTFCLElBQStCdVMsT0FBL0I7QUFDQWpCLHFCQUFXLENBQUN0UixDQUFELENBQVgsQ0FBZSxDQUFmLElBQW9Cc1MsUUFBUSxDQUFDLENBQUQsQ0FBUixDQUFZLENBQVosQ0FBcEI7QUFDQTtBQUNELE9BdkJELE1BdUJPO0FBQ04sWUFBSUQsUUFBUSxHQUFHdFksSUFBSSxDQUFDQyxLQUFMLENBQ2RELElBQUksQ0FBQ0UsU0FBTCxDQUFlNlcsTUFBTSxDQUFDRyxhQUFhLENBQUNPLE9BQUQsQ0FBZCxDQUFyQixDQURjLENBQWY7QUFHQSxZQUFJYyxRQUFRLEdBQUd2WSxJQUFJLENBQUNDLEtBQUwsQ0FDZEQsSUFBSSxDQUFDRSxTQUFMLENBQWUrVyxNQUFNLENBQUNDLGFBQWEsQ0FBQ1EsT0FBRCxDQUFkLENBQXJCLENBRGMsQ0FBZjtBQUlBRCxlQUFPLEdBQUdQLGFBQWEsQ0FBQ08sT0FBRCxDQUF2QjtBQUNBQyxlQUFPLEdBQUdSLGFBQWEsQ0FBQ1EsT0FBRCxDQUF2QjtBQUVBLFlBQUllLE9BQU8sR0FBR3hCLE1BQU0sQ0FBQ1MsT0FBRCxDQUFOLENBQWdCLENBQWhCLEVBQW1CLENBQW5CLENBQWQ7QUFDQSxZQUFJMVIsUUFBUSxHQUFHb1Isc0JBQXNCLENBQUM1UyxNQUF0Qzs7QUFDQSxhQUFLLElBQUl5QixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxRQUFwQixFQUE4QkMsQ0FBQyxFQUEvQixFQUFtQztBQUNsQ21SLGdDQUFzQixDQUFDblIsQ0FBRCxDQUF0QixDQUEwQixDQUExQixJQUErQndTLE9BQS9CO0FBQ0FwQixxQkFBVyxDQUFDcFIsQ0FBRCxDQUFYLENBQWUsQ0FBZixJQUFvQnFTLFFBQVEsQ0FBQyxDQUFELENBQVIsQ0FBWSxDQUFaLENBQXBCO0FBQ0E7O0FBQ0QsWUFBSUcsT0FBTyxHQUFHMUIsTUFBTSxDQUFDVSxPQUFELENBQU4sQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsQ0FBZDtBQUNBLFlBQUl6UixRQUFRLEdBQUdzUixzQkFBc0IsQ0FBQzlTLE1BQXRDOztBQUNBLGFBQUssSUFBSXlCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELFFBQXBCLEVBQThCQyxDQUFDLEVBQS9CLEVBQW1DO0FBQ2xDcVIsZ0NBQXNCLENBQUNyUixDQUFELENBQXRCLENBQTBCLENBQTFCLElBQStCd1MsT0FBL0I7QUFDQWxCLHFCQUFXLENBQUN0UixDQUFELENBQVgsQ0FBZSxDQUFmLElBQW9Cc1MsUUFBUSxDQUFDLENBQUQsQ0FBUixDQUFZLENBQVosQ0FBcEI7QUFDQTtBQUNEOztBQUVELFVBQUlwQixpQkFBaUIsSUFBSSxDQUF6QixFQUE0QjtBQUMzQixZQUFJb0Msc0JBQXNCLEdBQUdsQyxXQUFXLENBQUNySCxNQUFaLENBQW1CdUgsV0FBbkIsQ0FBN0I7QUFDQSxZQUFJL0csV0FBVyxHQUFHb0ksa0ZBQW1CLENBQUNXLHNCQUFELENBQXJDO0FBQ0EsT0FIRCxNQUdPO0FBQ04sWUFBSUEsc0JBQXNCLEdBQUcsRUFBN0I7QUFDQSxZQUFJdlQsUUFBUSxHQUFHcVIsV0FBVyxDQUFDN1MsTUFBM0I7O0FBQ0EsYUFBSyxJQUFJeUIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsUUFBcEIsRUFBOEJDLENBQUMsRUFBL0IsRUFBbUM7QUFDbENzVCxnQ0FBc0IsQ0FBQ3JULElBQXZCLENBQTRCbVIsV0FBVyxDQUFDcFIsQ0FBRCxDQUF2QztBQUNBc1QsZ0NBQXNCLENBQUNyVCxJQUF2QixDQUE0QmtSLHNCQUFzQixDQUFDblIsQ0FBRCxDQUFsRDtBQUNBOztBQUVELFlBQUlELFFBQVEsR0FBR3VSLFdBQVcsQ0FBQy9TLE1BQTNCOztBQUNBLGFBQUssSUFBSXlCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELFFBQXBCLEVBQThCQyxDQUFDLEVBQS9CLEVBQW1DO0FBQ2xDc1QsZ0NBQXNCLENBQUNyVCxJQUF2QixDQUE0QnFSLFdBQVcsQ0FBQ3RSLENBQUQsQ0FBdkM7QUFDQXNULGdDQUFzQixDQUFDclQsSUFBdkIsQ0FBNEJvUixzQkFBc0IsQ0FBQ3JSLENBQUQsQ0FBbEQ7QUFDQTs7QUFFRCxZQUFJc1Qsc0JBQXNCLENBQUMvVSxNQUF2QixHQUFnQyxDQUFwQyxFQUF1QztBQUN0QyxjQUFJcVUsY0FBYyxHQUFHLEVBQXJCO0FBQ0EsY0FBSVcsMkJBQTJCLEdBQUcsRUFBbEM7QUFDQSxjQUFJeFQsUUFBUSxHQUFHdVQsc0JBQXNCLENBQUMvVSxNQUF0Qzs7QUFDQSxlQUFLLElBQUl5QixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxRQUFwQixFQUE4QkMsQ0FBQyxFQUEvQixFQUFtQztBQUNsQyxnQkFBSThQLElBQUksR0FBRy9WLElBQUksQ0FBQ0MsS0FBTCxDQUNWRCxJQUFJLENBQUNFLFNBQUwsQ0FBZXFaLHNCQUFzQixDQUFDdFQsQ0FBRCxDQUFyQyxDQURVLENBQVg7O0FBR0EsZ0JBQUk0UyxjQUFjLENBQUMvSCxjQUFmLENBQThCaUYsSUFBOUIsQ0FBSixFQUF5QyxDQUN4QyxDQURELE1BQ087QUFDTjhDLDRCQUFjLENBQUM5QyxJQUFELENBQWQsR0FBdUIsSUFBdkI7QUFDQXlELHlDQUEyQixDQUFDdFQsSUFBNUIsQ0FDQ3FULHNCQUFzQixDQUFDdFQsQ0FBRCxDQUR2QjtBQUdBO0FBQ0Q7O0FBQ0QsY0FBSXVLLFdBQVcsR0FBR29JLGtGQUFtQixDQUNwQ1ksMkJBRG9DLENBQXJDO0FBR0EsU0FuQkQsTUFtQk87QUFDTixjQUFJaEosV0FBVyxHQUFHb0ksa0ZBQW1CLENBQ3BDVyxzQkFEb0MsQ0FBckM7QUFHQTtBQUNEO0FBQ0Q7O0FBRUQsUUFBSS9JLFdBQVcsSUFBSSxLQUFuQixFQUEwQjtBQUN6QixVQUFJZ0csMkVBQVksQ0FBQ2hHLFdBQUQsQ0FBaEIsRUFBK0I7QUFDOUIsZUFBT0EsV0FBUDtBQUNBLE9BRkQsTUFFTztBQUNOLGVBQU8sS0FBUDtBQUNBO0FBQ0QsS0FORCxNQU1PO0FBQ04sYUFBTyxLQUFQO0FBQ0E7QUFDRCxHQTlaRDs7QUFnYUF6UixnQkFBYyxDQUFDQyxTQUFmLENBQXlCNlEsY0FBekIsR0FBMEMsVUFBU2tCLENBQVQsRUFBWUMsQ0FBWixFQUFlO0FBQ3hEO0FBQ0E7QUFFQSxRQUFJOEYsTUFBTSxHQUFHLEVBQWI7QUFDQSxRQUFJckgsTUFBTSxHQUFHLEtBQUtDLHFDQUFMLENBQTJDcUIsQ0FBM0MsRUFBOENDLENBQTlDLEVBQWlELEtBQWpELENBQWI7O0FBRUEsUUFBSXZCLE1BQU0sQ0FBQ3FDLFFBQVAsSUFBbUIsSUFBdkIsRUFBNkI7QUFDNUIsYUFBTyxLQUFQO0FBQ0E7O0FBQ0QsUUFBSXJDLE1BQU0sQ0FBQ3VDLE9BQVAsSUFBa0IsSUFBdEIsRUFBNEI7QUFDM0IsVUFBSWpCLENBQUMsQ0FBQ3JKLENBQUYsSUFBT3NKLENBQUMsQ0FBQ3RKLENBQWIsRUFBZ0I7QUFDZixZQUFJcUosQ0FBQyxDQUFDckosQ0FBRixHQUFNcUosQ0FBQyxDQUFDNUssS0FBUixHQUFnQjZLLENBQUMsQ0FBQ3RKLENBQXRCLEVBQXlCO0FBQ3hCO0FBQ0EsY0FBSXFKLENBQUMsQ0FBQ25KLENBQUYsR0FBTW9KLENBQUMsQ0FBQ3BKLENBQVosRUFBZTtBQUNkLGdCQUFJdUksS0FBSyxHQUFHO0FBQ1h6SSxlQUFDLEVBQUVxSixDQUFDLENBQUNySixDQURNO0FBRVhFLGVBQUMsRUFBRW1KLENBQUMsQ0FBQ25KLENBRk07QUFHWHpCLG1CQUFLLEVBQUU0SyxDQUFDLENBQUM1SyxLQUhFO0FBSVhDLG9CQUFNLEVBQUU0SyxDQUFDLENBQUNwSixDQUFGLEdBQU1tSixDQUFDLENBQUNuSjtBQUpMLGFBQVo7O0FBTUEsZ0JBQUk0TywyRUFBWSxDQUFDckcsS0FBRCxDQUFoQixFQUF5QjtBQUN4QjJHLG9CQUFNLENBQUM1USxJQUFQLENBQVlpSyxLQUFaO0FBQ0E7O0FBQ0QsZ0JBQUlZLENBQUMsQ0FBQ25KLENBQUYsR0FBTW1KLENBQUMsQ0FBQzNLLE1BQVIsR0FBaUI0SyxDQUFDLENBQUNwSixDQUFGLEdBQU1vSixDQUFDLENBQUM1SyxNQUE3QixFQUFxQztBQUNwQyxrQkFBSStKLEtBQUssR0FBRztBQUNYekksaUJBQUMsRUFBRXFKLENBQUMsQ0FBQ3JKLENBRE07QUFFWEUsaUJBQUMsRUFBRW9KLENBQUMsQ0FBQ3BKLENBRk07QUFHWHpCLHFCQUFLLEVBQUU2SyxDQUFDLENBQUN0SixDQUFGLEdBQU1xSixDQUFDLENBQUNySixDQUhKO0FBSVh0QixzQkFBTSxFQUFFMkssQ0FBQyxDQUFDbkosQ0FBRixHQUFNbUosQ0FBQyxDQUFDM0ssTUFBUixHQUFpQjRLLENBQUMsQ0FBQ3BKO0FBSmhCLGVBQVo7O0FBTUEsa0JBQUk0TywyRUFBWSxDQUFDckcsS0FBRCxDQUFoQixFQUF5QjtBQUN4QjJHLHNCQUFNLENBQUM1USxJQUFQLENBQVlpSyxLQUFaO0FBQ0E7QUFDRCxhQVZELE1BVU8sSUFBSVksQ0FBQyxDQUFDbkosQ0FBRixHQUFNbUosQ0FBQyxDQUFDM0ssTUFBUixJQUFrQjRLLENBQUMsQ0FBQ3BKLENBQUYsR0FBTW9KLENBQUMsQ0FBQzVLLE1BQTlCLEVBQXNDO0FBQzVDLGtCQUFJK0osS0FBSyxHQUFHO0FBQ1h6SSxpQkFBQyxFQUFFcUosQ0FBQyxDQUFDckosQ0FETTtBQUVYRSxpQkFBQyxFQUFFb0osQ0FBQyxDQUFDcEosQ0FGTTtBQUdYekIscUJBQUssRUFBRTZLLENBQUMsQ0FBQ3RKLENBQUYsR0FBTXFKLENBQUMsQ0FBQ3JKLENBSEo7QUFJWHRCLHNCQUFNLEVBQUU0SyxDQUFDLENBQUM1SztBQUpDLGVBQVo7O0FBTUEsa0JBQUlvUSwyRUFBWSxDQUFDckcsS0FBRCxDQUFoQixFQUF5QjtBQUN4QjJHLHNCQUFNLENBQUM1USxJQUFQLENBQVlpSyxLQUFaO0FBQ0E7O0FBQ0Qsa0JBQUlZLENBQUMsQ0FBQ25KLENBQUYsR0FBTW1KLENBQUMsQ0FBQzNLLE1BQVIsR0FBaUI0SyxDQUFDLENBQUNwSixDQUFGLEdBQU1vSixDQUFDLENBQUM1SyxNQUE3QixFQUFxQztBQUNwQyxvQkFBSStKLEtBQUssR0FBRztBQUNYekksbUJBQUMsRUFBRXFKLENBQUMsQ0FBQ3JKLENBRE07QUFFWEUsbUJBQUMsRUFBRW9KLENBQUMsQ0FBQ3BKLENBQUYsR0FBTW9KLENBQUMsQ0FBQzVLLE1BRkE7QUFHWEQsdUJBQUssRUFBRTRLLENBQUMsQ0FBQzVLLEtBSEU7QUFJWEMsd0JBQU0sRUFBRTJLLENBQUMsQ0FBQ25KLENBQUYsR0FBTW1KLENBQUMsQ0FBQzNLLE1BQVIsSUFBa0I0SyxDQUFDLENBQUNwSixDQUFGLEdBQU1vSixDQUFDLENBQUM1SyxNQUExQjtBQUpHLGlCQUFaOztBQU1BLG9CQUFJb1EsMkVBQVksQ0FBQ3JHLEtBQUQsQ0FBaEIsRUFBeUI7QUFDeEIyRyx3QkFBTSxDQUFDNVEsSUFBUCxDQUFZaUssS0FBWjtBQUNBO0FBQ0Q7QUFDRDtBQUNELFdBMUNELE1BMENPLElBQUlZLENBQUMsQ0FBQ25KLENBQUYsSUFBT29KLENBQUMsQ0FBQ3BKLENBQWIsRUFBZ0I7QUFDdEIsZ0JBQUltSixDQUFDLENBQUNuSixDQUFGLEdBQU1tSixDQUFDLENBQUMzSyxNQUFSLEdBQWlCNEssQ0FBQyxDQUFDcEosQ0FBRixHQUFNb0osQ0FBQyxDQUFDNUssTUFBN0IsRUFBcUM7QUFDcEMsa0JBQUkrSixLQUFLLEdBQUc7QUFDWHpJLGlCQUFDLEVBQUVxSixDQUFDLENBQUNySixDQURNO0FBRVhFLGlCQUFDLEVBQUVtSixDQUFDLENBQUNuSixDQUZNO0FBR1h6QixxQkFBSyxFQUFFNkssQ0FBQyxDQUFDdEosQ0FBRixHQUFNcUosQ0FBQyxDQUFDckosQ0FISjtBQUlYdEIsc0JBQU0sRUFBRTJLLENBQUMsQ0FBQzNLO0FBSkMsZUFBWjs7QUFNQSxrQkFBSW9RLDJFQUFZLENBQUNyRyxLQUFELENBQWhCLEVBQXlCO0FBQ3hCMkcsc0JBQU0sQ0FBQzVRLElBQVAsQ0FBWWlLLEtBQVo7QUFDQTtBQUNELGFBVkQsTUFVTztBQUNOLGtCQUFJQSxLQUFLLEdBQUc7QUFDWHpJLGlCQUFDLEVBQUVxSixDQUFDLENBQUNySixDQURNO0FBRVhFLGlCQUFDLEVBQUVtSixDQUFDLENBQUNuSixDQUZNO0FBR1h6QixxQkFBSyxFQUFFNkssQ0FBQyxDQUFDdEosQ0FBRixHQUFNcUosQ0FBQyxDQUFDckosQ0FISjtBQUlYdEIsc0JBQU0sRUFBRTRLLENBQUMsQ0FBQ3BKLENBQUYsR0FBTW9KLENBQUMsQ0FBQzVLLE1BQVIsR0FBaUIySyxDQUFDLENBQUNuSjtBQUpoQixlQUFaOztBQU1BLGtCQUFJNE8sMkVBQVksQ0FBQ3JHLEtBQUQsQ0FBaEIsRUFBeUI7QUFDeEIyRyxzQkFBTSxDQUFDNVEsSUFBUCxDQUFZaUssS0FBWjtBQUNBO0FBQ0Q7O0FBRUQsZ0JBQUlZLENBQUMsQ0FBQ25KLENBQUYsR0FBTW1KLENBQUMsQ0FBQzNLLE1BQVIsR0FBaUI0SyxDQUFDLENBQUNwSixDQUFGLEdBQU1vSixDQUFDLENBQUM1SyxNQUE3QixFQUFxQztBQUNwQyxrQkFBSStKLEtBQUssR0FBRztBQUNYekksaUJBQUMsRUFBRXFKLENBQUMsQ0FBQ3JKLENBRE07QUFFWEUsaUJBQUMsRUFBRW9KLENBQUMsQ0FBQ3BKLENBQUYsR0FBTW9KLENBQUMsQ0FBQzVLLE1BRkE7QUFHWEQscUJBQUssRUFBRTRLLENBQUMsQ0FBQzVLLEtBSEU7QUFJWEMsc0JBQU0sRUFBRTJLLENBQUMsQ0FBQ25KLENBQUYsR0FBTW1KLENBQUMsQ0FBQzNLLE1BQVIsSUFBa0I0SyxDQUFDLENBQUNwSixDQUFGLEdBQU1vSixDQUFDLENBQUM1SyxNQUExQjtBQUpHLGVBQVo7O0FBTUEsa0JBQUlvUSwyRUFBWSxDQUFDckcsS0FBRCxDQUFoQixFQUF5QjtBQUN4QjJHLHNCQUFNLENBQUM1USxJQUFQLENBQVlpSyxLQUFaO0FBQ0E7QUFDRDtBQUNEO0FBQ0Q7O0FBQ0QsWUFBSVksQ0FBQyxDQUFDckosQ0FBRixHQUFNcUosQ0FBQyxDQUFDNUssS0FBUixHQUFnQjZLLENBQUMsQ0FBQ3RKLENBQUYsR0FBTXNKLENBQUMsQ0FBQzdLLEtBQTVCLEVBQW1DO0FBQ2xDLGNBQUk0SyxDQUFDLENBQUNuSixDQUFGLEdBQU1vSixDQUFDLENBQUNwSixDQUFaLEVBQWU7QUFDZCxnQkFBSW1KLENBQUMsQ0FBQ25KLENBQUYsR0FBTW1KLENBQUMsQ0FBQzNLLE1BQVIsR0FBaUI0SyxDQUFDLENBQUNwSixDQUFGLEdBQU1vSixDQUFDLENBQUM1SyxNQUE3QixFQUFxQztBQUNwQyxrQkFBSStKLEtBQUssR0FBRztBQUNYekksaUJBQUMsRUFBRXNKLENBQUMsQ0FBQ3RKLENBQUYsR0FBTXNKLENBQUMsQ0FBQzdLLEtBREE7QUFFWHlCLGlCQUFDLEVBQUVvSixDQUFDLENBQUNwSixDQUZNO0FBR1h6QixxQkFBSyxFQUFFNEssQ0FBQyxDQUFDckosQ0FBRixHQUFNcUosQ0FBQyxDQUFDNUssS0FBUixJQUFpQjZLLENBQUMsQ0FBQ3RKLENBQUYsR0FBTXNKLENBQUMsQ0FBQzdLLEtBQXpCLENBSEk7QUFJWEMsc0JBQU0sRUFBRTJLLENBQUMsQ0FBQ25KLENBQUYsR0FBTW1KLENBQUMsQ0FBQzNLLE1BQVIsR0FBaUI0SyxDQUFDLENBQUNwSjtBQUpoQixlQUFaOztBQU1BLGtCQUFJNE8sMkVBQVksQ0FBQ3JHLEtBQUQsQ0FBaEIsRUFBeUI7QUFDeEIyRyxzQkFBTSxDQUFDNVEsSUFBUCxDQUFZaUssS0FBWjtBQUNBO0FBQ0QsYUFWRCxNQVVPO0FBQ04sa0JBQUlBLEtBQUssR0FBRztBQUNYekksaUJBQUMsRUFBRXNKLENBQUMsQ0FBQ3RKLENBQUYsR0FBTXNKLENBQUMsQ0FBQzdLLEtBREE7QUFFWHlCLGlCQUFDLEVBQUVvSixDQUFDLENBQUNwSixDQUZNO0FBR1h6QixxQkFBSyxFQUFFNEssQ0FBQyxDQUFDckosQ0FBRixHQUFNcUosQ0FBQyxDQUFDNUssS0FBUixJQUFpQjZLLENBQUMsQ0FBQ3RKLENBQUYsR0FBTXNKLENBQUMsQ0FBQzdLLEtBQXpCLENBSEk7QUFJWEMsc0JBQU0sRUFBRTRLLENBQUMsQ0FBQzVLO0FBSkMsZUFBWjs7QUFNQSxrQkFBSW9RLDJFQUFZLENBQUNyRyxLQUFELENBQWhCLEVBQXlCO0FBQ3hCMkcsc0JBQU0sQ0FBQzVRLElBQVAsQ0FBWWlLLEtBQVo7QUFDQTtBQUNEO0FBQ0QsV0F0QkQsTUFzQk87QUFDTixnQkFBSVksQ0FBQyxDQUFDbkosQ0FBRixHQUFNbUosQ0FBQyxDQUFDM0ssTUFBUixHQUFpQjRLLENBQUMsQ0FBQ3BKLENBQUYsR0FBTW9KLENBQUMsQ0FBQzVLLE1BQTdCLEVBQXFDO0FBQ3BDLGtCQUFJK0osS0FBSyxHQUFHO0FBQ1h6SSxpQkFBQyxFQUFFc0osQ0FBQyxDQUFDdEosQ0FBRixHQUFNc0osQ0FBQyxDQUFDN0ssS0FEQTtBQUVYeUIsaUJBQUMsRUFBRW1KLENBQUMsQ0FBQ25KLENBRk07QUFHWHpCLHFCQUFLLEVBQUU0SyxDQUFDLENBQUNySixDQUFGLEdBQU1xSixDQUFDLENBQUM1SyxLQUFSLElBQWlCNkssQ0FBQyxDQUFDdEosQ0FBRixHQUFNc0osQ0FBQyxDQUFDN0ssS0FBekIsQ0FISTtBQUlYQyxzQkFBTSxFQUFFMkssQ0FBQyxDQUFDM0s7QUFKQyxlQUFaOztBQU1BLGtCQUFJb1EsMkVBQVksQ0FBQ3JHLEtBQUQsQ0FBaEIsRUFBeUI7QUFDeEIyRyxzQkFBTSxDQUFDNVEsSUFBUCxDQUFZaUssS0FBWjtBQUNBO0FBQ0QsYUFWRCxNQVVPO0FBQ04sa0JBQUlBLEtBQUssR0FBRztBQUNYekksaUJBQUMsRUFBRXNKLENBQUMsQ0FBQ3RKLENBQUYsR0FBTXNKLENBQUMsQ0FBQzdLLEtBREE7QUFFWHlCLGlCQUFDLEVBQUVtSixDQUFDLENBQUNuSixDQUZNO0FBR1h6QixxQkFBSyxFQUFFNEssQ0FBQyxDQUFDckosQ0FBRixHQUFNcUosQ0FBQyxDQUFDNUssS0FBUixJQUFpQjZLLENBQUMsQ0FBQ3RKLENBQUYsR0FBTXNKLENBQUMsQ0FBQzdLLEtBQXpCLENBSEk7QUFJWEMsc0JBQU0sRUFBRTRLLENBQUMsQ0FBQ3BKLENBQUYsR0FBTW9KLENBQUMsQ0FBQzVLLE1BQVIsR0FBaUIySyxDQUFDLENBQUNuSjtBQUpoQixlQUFaOztBQU1BLGtCQUFJNE8sMkVBQVksQ0FBQ3JHLEtBQUQsQ0FBaEIsRUFBeUI7QUFDeEIyRyxzQkFBTSxDQUFDNVEsSUFBUCxDQUFZaUssS0FBWjtBQUNBO0FBQ0Q7QUFDRDtBQUNEO0FBQ0QsT0FoSUQsTUFnSU87QUFDTjtBQUNBLFlBQUlZLENBQUMsQ0FBQ25KLENBQUYsR0FBTW9KLENBQUMsQ0FBQ3BKLENBQVosRUFBZTtBQUNkLGNBQUl1SSxLQUFLLEdBQUc7QUFDWHpJLGFBQUMsRUFBRXFKLENBQUMsQ0FBQ3JKLENBRE07QUFFWEUsYUFBQyxFQUFFbUosQ0FBQyxDQUFDbkosQ0FGTTtBQUdYekIsaUJBQUssRUFBRTRLLENBQUMsQ0FBQzVLLEtBSEU7QUFJWEMsa0JBQU0sRUFBRTRLLENBQUMsQ0FBQ3BKLENBQUYsR0FBTW1KLENBQUMsQ0FBQ25KO0FBSkwsV0FBWjs7QUFNQSxjQUFJNE8sMkVBQVksQ0FBQ3JHLEtBQUQsQ0FBaEIsRUFBeUI7QUFDeEIyRyxrQkFBTSxDQUFDNVEsSUFBUCxDQUFZaUssS0FBWjtBQUNBOztBQUNELGNBQUlZLENBQUMsQ0FBQ25KLENBQUYsR0FBTW1KLENBQUMsQ0FBQzNLLE1BQVIsR0FBaUI0SyxDQUFDLENBQUNwSixDQUFGLEdBQU1vSixDQUFDLENBQUM1SyxNQUE3QixFQUFxQztBQUNwQyxnQkFBSTJLLENBQUMsQ0FBQ3JKLENBQUYsR0FBTXFKLENBQUMsQ0FBQzVLLEtBQVIsSUFBaUI2SyxDQUFDLENBQUN0SixDQUFGLEdBQU1zSixDQUFDLENBQUM3SyxLQUE3QixFQUFvQyxDQUNuQztBQUNBLGFBRkQsTUFFTztBQUNOLGtCQUFJZ0ssS0FBSyxHQUFHO0FBQ1h6SSxpQkFBQyxFQUFFc0osQ0FBQyxDQUFDdEosQ0FBRixHQUFNc0osQ0FBQyxDQUFDN0ssS0FEQTtBQUVYeUIsaUJBQUMsRUFBRW9KLENBQUMsQ0FBQ3BKLENBRk07QUFHWHpCLHFCQUFLLEVBQUU0SyxDQUFDLENBQUNySixDQUFGLEdBQU1xSixDQUFDLENBQUM1SyxLQUFSLElBQWlCNkssQ0FBQyxDQUFDdEosQ0FBRixHQUFNc0osQ0FBQyxDQUFDN0ssS0FBekIsQ0FISTtBQUlYQyxzQkFBTSxFQUFFMkssQ0FBQyxDQUFDbkosQ0FBRixHQUFNbUosQ0FBQyxDQUFDM0ssTUFBUixHQUFpQjRLLENBQUMsQ0FBQ3BKO0FBSmhCLGVBQVo7O0FBTUEsa0JBQUk0TywyRUFBWSxDQUFDckcsS0FBRCxDQUFoQixFQUF5QjtBQUN4QjJHLHNCQUFNLENBQUM1USxJQUFQLENBQVlpSyxLQUFaO0FBQ0E7QUFDRDtBQUNELFdBZEQsTUFjTyxJQUFJWSxDQUFDLENBQUNuSixDQUFGLEdBQU1tSixDQUFDLENBQUMzSyxNQUFSLElBQWtCNEssQ0FBQyxDQUFDcEosQ0FBRixHQUFNb0osQ0FBQyxDQUFDNUssTUFBOUIsRUFBc0M7QUFDNUMsZ0JBQUkySyxDQUFDLENBQUNySixDQUFGLEdBQU1xSixDQUFDLENBQUM1SyxLQUFSLElBQWlCNkssQ0FBQyxDQUFDdEosQ0FBRixHQUFNc0osQ0FBQyxDQUFDN0ssS0FBN0IsRUFBb0M7QUFDbkM7QUFDQSxrQkFBSTRLLENBQUMsQ0FBQ25KLENBQUYsR0FBTW1KLENBQUMsQ0FBQzNLLE1BQVIsR0FBaUI0SyxDQUFDLENBQUNwSixDQUFGLEdBQU1vSixDQUFDLENBQUM1SyxNQUE3QixFQUFxQztBQUNwQyxvQkFBSStKLEtBQUssR0FBRztBQUNYekksbUJBQUMsRUFBRXFKLENBQUMsQ0FBQ3JKLENBRE07QUFFWEUsbUJBQUMsRUFBRW9KLENBQUMsQ0FBQ3BKLENBQUYsR0FBTW9KLENBQUMsQ0FBQzVLLE1BRkE7QUFHWEQsdUJBQUssRUFBRTRLLENBQUMsQ0FBQzVLLEtBSEU7QUFJWEMsd0JBQU0sRUFBRTJLLENBQUMsQ0FBQ25KLENBQUYsR0FBTW1KLENBQUMsQ0FBQzNLLE1BQVIsSUFBa0I0SyxDQUFDLENBQUNwSixDQUFGLEdBQU1vSixDQUFDLENBQUM1SyxNQUExQjtBQUpHLGlCQUFaOztBQU1BLG9CQUFJb1EsMkVBQVksQ0FBQ3JHLEtBQUQsQ0FBaEIsRUFBeUI7QUFDeEIyRyx3QkFBTSxDQUFDNVEsSUFBUCxDQUFZaUssS0FBWjtBQUNBO0FBQ0Q7QUFDRCxhQWJELE1BYU87QUFDTixrQkFBSUEsS0FBSyxHQUFHO0FBQ1h6SSxpQkFBQyxFQUFFc0osQ0FBQyxDQUFDdEosQ0FBRixHQUFNc0osQ0FBQyxDQUFDN0ssS0FEQTtBQUVYeUIsaUJBQUMsRUFBRW9KLENBQUMsQ0FBQ3BKLENBRk07QUFHWHpCLHFCQUFLLEVBQUU0SyxDQUFDLENBQUNySixDQUFGLEdBQU1xSixDQUFDLENBQUM1SyxLQUFSLElBQWlCNkssQ0FBQyxDQUFDdEosQ0FBRixHQUFNc0osQ0FBQyxDQUFDN0ssS0FBekIsQ0FISTtBQUlYQyxzQkFBTSxFQUFFNEssQ0FBQyxDQUFDNUs7QUFKQyxlQUFaOztBQU1BLGtCQUFJb1EsMkVBQVksQ0FBQ3JHLEtBQUQsQ0FBaEIsRUFBeUI7QUFDeEIyRyxzQkFBTSxDQUFDNVEsSUFBUCxDQUFZaUssS0FBWjtBQUNBOztBQUVELGtCQUFJWSxDQUFDLENBQUNuSixDQUFGLEdBQU1tSixDQUFDLENBQUMzSyxNQUFSLEdBQWlCNEssQ0FBQyxDQUFDcEosQ0FBRixHQUFNb0osQ0FBQyxDQUFDNUssTUFBN0IsRUFBcUM7QUFDcEMsb0JBQUkrSixLQUFLLEdBQUc7QUFDWHpJLG1CQUFDLEVBQUVxSixDQUFDLENBQUNySixDQURNO0FBRVhFLG1CQUFDLEVBQUVvSixDQUFDLENBQUNwSixDQUFGLEdBQU1vSixDQUFDLENBQUM1SyxNQUZBO0FBR1hELHVCQUFLLEVBQUU0SyxDQUFDLENBQUM1SyxLQUhFO0FBSVhDLHdCQUFNLEVBQUUySyxDQUFDLENBQUNuSixDQUFGLEdBQU1tSixDQUFDLENBQUMzSyxNQUFSLElBQWtCNEssQ0FBQyxDQUFDcEosQ0FBRixHQUFNb0osQ0FBQyxDQUFDNUssTUFBMUI7QUFKRyxpQkFBWjs7QUFNQSxvQkFBSW9RLDJFQUFZLENBQUNyRyxLQUFELENBQWhCLEVBQXlCO0FBQ3hCMkcsd0JBQU0sQ0FBQzVRLElBQVAsQ0FBWWlLLEtBQVo7QUFDQTtBQUNEO0FBQ0Q7QUFDRDtBQUNELFNBOURELE1BOERPLElBQUlZLENBQUMsQ0FBQ25KLENBQUYsSUFBT29KLENBQUMsQ0FBQ3BKLENBQWIsRUFBZ0I7QUFDdEIsY0FBSW1KLENBQUMsQ0FBQ25KLENBQUYsR0FBTW1KLENBQUMsQ0FBQzNLLE1BQVIsR0FBaUI0SyxDQUFDLENBQUNwSixDQUFGLEdBQU1vSixDQUFDLENBQUM1SyxNQUE3QixFQUFxQztBQUNwQyxnQkFBSTJLLENBQUMsQ0FBQ3JKLENBQUYsR0FBTXFKLENBQUMsQ0FBQzVLLEtBQVIsR0FBZ0I2SyxDQUFDLENBQUN0SixDQUFGLEdBQU1zSixDQUFDLENBQUM3SyxLQUE1QixFQUFtQyxDQUNsQztBQUNBLGFBRkQsTUFFTztBQUNOLGtCQUFJZ0ssS0FBSyxHQUFHO0FBQ1h6SSxpQkFBQyxFQUFFc0osQ0FBQyxDQUFDdEosQ0FBRixHQUFNc0osQ0FBQyxDQUFDN0ssS0FEQTtBQUVYeUIsaUJBQUMsRUFBRW1KLENBQUMsQ0FBQ25KLENBRk07QUFHWHpCLHFCQUFLLEVBQUU0SyxDQUFDLENBQUNySixDQUFGLEdBQU1xSixDQUFDLENBQUM1SyxLQUFSLElBQWlCNkssQ0FBQyxDQUFDdEosQ0FBRixHQUFNc0osQ0FBQyxDQUFDN0ssS0FBekIsQ0FISTtBQUlYQyxzQkFBTSxFQUFFMkssQ0FBQyxDQUFDM0s7QUFKQyxlQUFaOztBQU1BLGtCQUFJb1EsMkVBQVksQ0FBQ3JHLEtBQUQsQ0FBaEIsRUFBeUI7QUFDeEIyRyxzQkFBTSxDQUFDNVEsSUFBUCxDQUFZaUssS0FBWjtBQUNBO0FBQ0Q7QUFDRCxXQWRELE1BY087QUFDTixnQkFBSVksQ0FBQyxDQUFDckosQ0FBRixHQUFNcUosQ0FBQyxDQUFDNUssS0FBUixHQUFnQjZLLENBQUMsQ0FBQ3RKLENBQUYsR0FBTXNKLENBQUMsQ0FBQzdLLEtBQTVCLEVBQW1DO0FBQ2xDO0FBQ0Esa0JBQUk0SyxDQUFDLENBQUNuSixDQUFGLEdBQU1tSixDQUFDLENBQUMzSyxNQUFSLEdBQWlCNEssQ0FBQyxDQUFDcEosQ0FBRixHQUFNb0osQ0FBQyxDQUFDNUssTUFBN0IsRUFBcUM7QUFDcEMsb0JBQUkrSixLQUFLLEdBQUc7QUFDWHpJLG1CQUFDLEVBQUVxSixDQUFDLENBQUNySixDQURNO0FBRVhFLG1CQUFDLEVBQUVvSixDQUFDLENBQUNwSixDQUFGLEdBQU1vSixDQUFDLENBQUM1SyxNQUZBO0FBR1hELHVCQUFLLEVBQUU0SyxDQUFDLENBQUM1SyxLQUhFO0FBSVhDLHdCQUFNLEVBQUUySyxDQUFDLENBQUNuSixDQUFGLEdBQU1tSixDQUFDLENBQUMzSyxNQUFSLElBQWtCNEssQ0FBQyxDQUFDcEosQ0FBRixHQUFNb0osQ0FBQyxDQUFDNUssTUFBMUI7QUFKRyxpQkFBWjs7QUFNQSxvQkFBSW9RLDJFQUFZLENBQUNyRyxLQUFELENBQWhCLEVBQXlCO0FBQ3hCMkcsd0JBQU0sQ0FBQzVRLElBQVAsQ0FBWWlLLEtBQVo7QUFDQTtBQUNEO0FBQ0QsYUFiRCxNQWFPO0FBQ04sa0JBQUlBLEtBQUssR0FBRztBQUNYekksaUJBQUMsRUFBRXNKLENBQUMsQ0FBQ3RKLENBQUYsR0FBTXNKLENBQUMsQ0FBQzdLLEtBREE7QUFFWHlCLGlCQUFDLEVBQUVtSixDQUFDLENBQUNuSixDQUZNO0FBR1h6QixxQkFBSyxFQUFFNEssQ0FBQyxDQUFDckosQ0FBRixHQUFNcUosQ0FBQyxDQUFDNUssS0FBUixJQUFpQjZLLENBQUMsQ0FBQ3RKLENBQUYsR0FBTXNKLENBQUMsQ0FBQzdLLEtBQXpCLENBSEk7QUFJWEMsc0JBQU0sRUFBRTRLLENBQUMsQ0FBQ3BKLENBQUYsR0FBTW9KLENBQUMsQ0FBQzVLLE1BQVIsR0FBaUIySyxDQUFDLENBQUNuSjtBQUpoQixlQUFaOztBQU1BLGtCQUFJNE8sMkVBQVksQ0FBQ3JHLEtBQUQsQ0FBaEIsRUFBeUI7QUFDeEIyRyxzQkFBTSxDQUFDNVEsSUFBUCxDQUFZaUssS0FBWjtBQUNBOztBQUNELGtCQUFJWSxDQUFDLENBQUNuSixDQUFGLEdBQU1tSixDQUFDLENBQUMzSyxNQUFSLEdBQWlCNEssQ0FBQyxDQUFDcEosQ0FBRixHQUFNb0osQ0FBQyxDQUFDNUssTUFBN0IsRUFBcUM7QUFDcEMsb0JBQUkrSixLQUFLLEdBQUc7QUFDWHpJLG1CQUFDLEVBQUVxSixDQUFDLENBQUNySixDQURNO0FBRVhFLG1CQUFDLEVBQUVvSixDQUFDLENBQUNwSixDQUFGLEdBQU1vSixDQUFDLENBQUM1SyxNQUZBO0FBR1hELHVCQUFLLEVBQUU0SyxDQUFDLENBQUM1SyxLQUhFO0FBSVhDLHdCQUFNLEVBQUUySyxDQUFDLENBQUNuSixDQUFGLEdBQU1tSixDQUFDLENBQUMzSyxNQUFSLElBQWtCNEssQ0FBQyxDQUFDcEosQ0FBRixHQUFNb0osQ0FBQyxDQUFDNUssTUFBMUI7QUFKRyxpQkFBWjs7QUFNQSxvQkFBSW9RLDJFQUFZLENBQUNyRyxLQUFELENBQWhCLEVBQXlCO0FBQ3hCMkcsd0JBQU0sQ0FBQzVRLElBQVAsQ0FBWWlLLEtBQVo7QUFDQTtBQUNEO0FBQ0Q7QUFDRDtBQUNEO0FBQ0Q7QUFDRCxLQXZQRCxNQXVQTztBQUNOLGFBQU8sS0FBUDtBQUNBOztBQUNELFFBQUkyRyxNQUFNLENBQUN0UyxNQUFQLEdBQWdCLENBQXBCLEVBQXVCO0FBQ3RCLGFBQU9zUyxNQUFQO0FBQ0EsS0FGRCxNQUVPO0FBQ04sYUFBTyxLQUFQO0FBQ0E7QUFDRCxHQXpRRCxDQWoyR21DLENBNG1IbkM7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFF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QUEvQyxHQUNDK2IscUJBQXFCLEdBQ3JCLEtBQUs1aUIsZ0NBREwsR0FFQSxJQUhEO0FBSUE7QUFDRCxDQVJNO0FBVUEsTUFBTStjLFlBQVksR0FBRyxVQUMzQkgsNEJBRDJCLEVBRTNCSixpQ0FGMkIsRUFHMUI7QUFDRCxNQUFJNVEsU0FBUyxHQUFHLEtBQUtqRyxlQUFMLENBQXFCLENBQXJCLEVBQXdCaUcsU0FBeEMsQ0FEQyxDQUVEOztBQUNBLE1BQUlrUixlQUFlLEdBQUcsS0FBdEI7O0FBQ0EsTUFBSUYsNEJBQTRCLEdBQUcsQ0FBbkMsRUFBc0M7QUFDckMsUUFDQ0osaUNBQWlDLEdBQUdJLDRCQUFwQyxHQUNBLEtBQUs3YyxpQkFGTixFQUdFO0FBQ0QsV0FBSzRGLGVBQUwsQ0FBcUIsQ0FBckIsRUFBd0JpRyxTQUF4QixHQUNDQSxTQUFTLEdBQUcsS0FBSzlMLG9CQURsQjtBQUVBZ2QscUJBQWUsR0FBRyxJQUFsQjtBQUNBOztBQUNELFFBQUlGLDRCQUE0QixHQUFHLEtBQUt2VyxNQUFMLEdBQWMsRUFBN0MsSUFBbUR1RixTQUFTLElBQUksQ0FBcEUsRUFBdUU7QUFDdEUsV0FBS2pHLGVBQUwsQ0FBcUIsQ0FBckIsRUFBd0JpRyxTQUF4QixHQUNDQSxTQUFTLEdBQUcsS0FBSzlMLG9CQURsQjtBQUVBZ2QscUJBQWUsR0FBRyxJQUFsQjtBQUNBO0FBQ0QsR0FsQkEsQ0FvQkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFNBQU9BLGVBQVA7QUFDQSxDQWxDTSxDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiYXNzZXRzXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTU4NTU3MDQxNTE2NlxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIvaG9tZS9hcnNlbmFsZmMvMF9zdHVmZi8wX3dvcmsvZGV2ZWxvcG1lbnQvTGltYmVyR3JpZFZpZXcvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcInJlbG9hZEFsbFwiOnRydWUsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiLCIvKlxuXG5UaGlzIGlzIGEgcmVsZWFzZSBvZiBMaW1iZXJHcmlkVmlldyAwLjAuMCwgYnJvdWdodCB0byB5b3UgYnkgU3ViZW5kcmEgS3VtYXIgU2hhcm1hLlxuVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuXG5MaW1iZXJHcmlkVmlldywgYSBwb3dlcmZ1bCBKYXZhU2NyaXB0IExpYmFyeSB0aGF0IGdpdmVzIHlvdSBmbGV4aWJsZSwgbW92YWJsZSwgcmVzaXphYmxlKGFueSBzaXplKSBhbmQgYXV0by1hcnJhbmdpbmcgZ3JpZHMuIFxuXG5Db3B5cmlnaHQgKGMpIDIwMTgsIFN1YmVuZHJhIEt1bWFyIFNoYXJtYS4gQWxsIFJpZ2h0cyByZXNlcnZlZC4gKHNoYXJtYS5zdWJlbmRyYS5rckBnbWFpbC5jb20sIHNoYXJtYS5zdWJlbmRyYWtyQHlhaG9vLmNvbSlcblxuVGhpcyBmaWxlIGlzIHBhcnQgb2YgTGltYmVyR3JpZFZpZXcuXG5cbkxpbWJlckdyaWRWaWV3IGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbml0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG50aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cblxuTGltYmVyR3JpZFZpZXcgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbmJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG5NRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG5HTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuXG5Zb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuYWxvbmcgd2l0aCBMaW1iZXJHcmlkVmlldy4gIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG5cbiovXG5cbmltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5pbXBvcnQgXCIuL2luZGV4LnNjc3NcIjtcblxuaW1wb3J0IHtcblx0b25XaW5kb3dSZXNpemUsXG5cdG9uV2luZG93UmVzaXplVGltZXJDYWxsYmFjayxcblx0b25JdGVtQ2xpY2tcbn0gZnJvbSBcIi4vbGlicy9ldmVudEhhbmRsZXJMaWIvbWlzY2VsbGFuZW91c1wiO1xuaW1wb3J0IHtcblx0b25MaW1iZXJHcmlkTW91c2VEb3duLFxuXHRvbkxpbWJlckdyaWRUb3VjaFN0YXJ0LFxuXHRvbkxpbWJlckdyaWRNb3VzZURvd25DaGVjayxcblx0b25MaW1iZXJHcmlkVG91Y2hTdGFydENoZWNrLFxuXHRvbkxpbWJlckdyaWRNb3VzZU1vdmUsXG5cdG9uTGltYmVyR3JpZFRvdWNoTW92ZSxcblx0b25MaW1iZXJHcmlkTW91c2VVcCxcblx0b25MaW1iZXJHcmlkVG91Y2hFbmQsXG5cdG9uTGltYmVyR3JpZFRvdWNoQ2FuY2VsLFxuXHRvbkxpbWJlckdyaWRUb3VjaENvbnRleHRNZW51LFxuXHRvbkxpbWJlckdyaWRDb250ZXh0TWVudSxcblx0YWRkSXRlbUFsbG93Q2hlY2tUaW1lT3V0LFxuXHRhZGRJdGVtQWxsb3dDaGVjayxcblx0Y3V0U3BhY2VBbGxvd0NoZWNrVGltZU91dCxcblx0Y3V0U3BhY2VBbGxvd0NoZWNrLFxuXHRpbnNlcnRBZGRJdGVtT25Ub3VjaEhvbGRHdWlkZVN0eWxlc1xufSBmcm9tIFwiLi9saWJzL2V2ZW50SGFuZGxlckxpYi9hZGRJdGVtQW5kQ3V0U3BhY2VcIjtcblxuaW1wb3J0IHtcblx0b25JdGVtTW91c2VEb3duLFxuXHRvbkl0ZW1Ub3VjaFN0YXJ0LFxuXHRtb3VzZURvd25DaGVjayxcblx0dGFwSG9sZENoZWNrLFxuXHRvbk1vdXNlTW92ZSxcblx0b25Ub3VjaE1vdmUsXG5cdG9uTW91c2VVcCxcblx0b25Ub3VjaEVuZCxcblx0b25Db250ZXh0TWVudSxcblx0b25JdGVtVG91Y2hDb250ZXh0TWVudSxcblx0b25Ub3VjaENhbmNlbCxcblx0Y2FsY3VsYXRlTW91c2VQb3NPbkxpbWJlckdyaWQsXG5cdGNhbGN1bGF0ZVRvdWNoUG9zT25MaW1iZXJHcmlkLFxuXHRjYWxjdWxhdGVUb3VjaFBvc09uTGltYmVyR3JpZEl0ZW0sXG5cdGNoZWNrTmV3TW92ZUNvb3JkaW5hdGVzLFxuXHRzaG93TW92ZURlbW8sXG5cdHNob3dSZXNpemVEZW1vLFxuXHRyZXZlcnRTaG93TW92ZU9yUmVzaXplRGVtb1xufSBmcm9tIFwiLi9saWJzL2V2ZW50SGFuZGxlckxpYi9pdGVtSW50ZXJhY3Rpb25cIjtcblxuaW1wb3J0IHtcblx0Z2V0UGxhaW5Gcm9tNFBvaW50cyxcblx0Z2V0Q29vcmRpbmF0ZXMsXG5cdGdldExpbmVzLFxuXHRhcmVQbGFpbnNTYW1lLFxuXHRhcmVQbGFpbnNJZGVudGljYWwsXG5cdGlzVmFsaWRQbGFuZSxcblx0c29ydFBsYWluc0J5QXJlYSxcblx0c29ydFBsYWluc0J5SGVpZ2h0LFxuXHRzb3J0UGxhaW5zQnlEZXB0aCxcblx0ZGl2aWRlRXF1YWxOdW1iZXIsXG5cdGdldE1hcmdpbkF0UG9pbnQsXG5cdGdldFJvd1NlcXVlbmNlXG59IGZyb20gXCIuL2xpYnMvdXRpbHMvZXNzZW50aWFsc1wiO1xuXG53aW5kb3cuTGltYmVyR3JpZFZpZXcgPSAoZnVuY3Rpb24oKSB7XG5cdExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IExpbWJlckdyaWRWaWV3O1xuXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBJTlBVVCBEQVRBIEZPUk1BVCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5cdC8qXG5cdFxuXHRwcm9jZXNzVHlwZXMgOiByZW5kZXIsIGFkZEl0ZW1zLCBhZGRJdGVtSW50ZXJhY3RpdmUsIHJlbW92ZUl0ZW1zLCByZXNpemVJdGVtcywgb25EZW1hbmQoZGVmYXVsdCBmb3IgaW52b2tlZCksIDxjdXN0b20+IChmb3IgaW52b2tlZClcblxuXHR2YXIgb3B0aW9ucyA9IHtcblx0XHRlbCA6IFwiI1wiLFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBpZCBvZiB0aGUgcGFyZW50IGVsZW1lbnQgd2l0aCAjXG5cdFx0ZWRpdGFibGUgOiB0cnVlLCBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyB0cnVlL2ZhbHNlIChvcHRpb25hbCBkZWZhdWx0IHRydWUpICBcblx0XHRlbmFibGVJbnRlcmFjdGl2ZUFkZEFuZEN1dCA6IHRydWUsXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIHRydWUvZmFsc2UgKG9wdGlvbmFsIGRlZmF1bHQgdHJ1ZSkgIFxuXHRcdGVuYWJsZVRvdWNoSW50ZXJhY3Rpb24gOiB0cnVlLFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIHRydWUvZmFsc2UgKG9wdGlvbmFsIGRlZmF1bHQgdHJ1ZSkgIFxuXHRcdGRhdGFUeXBlIDogXCJzdHJpbmdcIiwgXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIHN0cmluZy9ub2RlXG5cdFx0YXV0b0FycmFuZ2UgOiB0cnVlLFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIHRydWUvZmFsc2UgKGNvbXB1bHNvcnkgaWYgeCBhbmQgeSBub3QgcHJlc2VudCBlbHNlIG9wdGlvbmFsKVxuXHRcdHJlUmVuZGVyT25SZXNpemUgOiB0cnVlLCBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIHRydWUvZmFsc2UgKG9wdGlvbmFsIGRlZmF1bHQgdHJ1ZSkgIFxuXHRcdGluaXRpYWxHcmlkRGF0YSA6IHtcblx0XHRcdGdyaWRIZWlnaHQgOiA2MjQsIFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBoZWlnaHQgb2YgbGltYmVyR3JpZFZpZXdcblx0XHRcdGdyaWRXaWR0aCA6IDk4NSxcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gd2lkdGggb2YgbGltYmVyR3JpZFZpZXdcblx0XHRcdG1hcmdpbiA6IDUsIFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIG1hcmdpbiBmb3IgaXRlbXNcblx0XHRcdG1vYmlsZUFzcGVjdFJhdGlvIDogPHZhbHVlPiwgXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGFzcGVjdCByYXRpbyBvZiBmb3IgbW9iaWxlIGRldmljZXNcblx0XHRcdGluaXRpYWxQb3NpdGlvbkRhdGEgOiBbXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBwb3NpdGlvbiBEYXRhXG5cdFx0XHRcdHt4IDogPHZhbHVlPiwgeSA6IDx2YWx1ZT4sIHdpZHRoIDogPHZhbHVlPiwgaGVpZ2h0IDogPHZhbHVlPn0sXG5cdFx0XHRcdHt4IDogPHZhbHVlPiwgeSA6IDx2YWx1ZT4sIHdpZHRoIDogPHZhbHVlPiwgaGVpZ2h0IDogPHZhbHVlPn0sXG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0T1IgKGlmIGF1dG9BcnJhbmdlIHNldCB0byB0cnVlKVxuXG5cdFx0XHRcdHt3aWR0aCA6IDx2YWx1ZT4sIGhlaWdodCA6IDx2YWx1ZT59LFxuXHRcdFx0XHR7d2lkdGggOiA8dmFsdWU+LCBoZWlnaHQgOiA8dmFsdWU+fSxcblx0XHRcdFx0Li4uLFxuXHRcdFx0XHQuLi4sXG5cdFx0XHRcdC4uLlxuXHRcdFx0XVx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxuXHRcdH0sXG5cdFx0Y2FsbGJhY2tzIDoge1xuXHRcdFx0Z2V0SXRlbVJlbmRlckRhdGFDYWxsYmFjayA6IGZ1bmN0aW9uKGluZGV4LCB3aWR0aCwgaGVpZ2h0LCBwcm9jZXNzVHlwZSl7fSwgXHRcdFx0Ly8gY2FsbGJhY2sgdG8gZ2V0IHN0cmluZyBvciBub2RlIG9iamVjdCB0byByZW5kZXIgaW5zaWRlIHRoZSBpdGVtXHRcblx0XHRcdG9uSXRlbUNsaWNrQ2FsbGJhY2sgOiBmdW5jdGlvbihldmVudCl7fSxcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gY2xpY2sgY2FsbGJhY2sgZm9yIGl0ZW1cblx0XHRcdHJlbmRlckNvbXBsZXRlIDogZnVuY3Rpb24oKXt9LCBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gY2FsbGJhY2sgZm9yIGNvbXBsZXRpb24gb2YgcmVuZGVyIGZ1bmN0aW9uXG5cdFx0XHRpdGVtc1JlbmRlckNvbXBsZXRlIDogZnVuY3Rpb24oW2luZGV4LCBpbmRleCwgLi4uXSwgc2NhbGUsIHByb2Nlc3NUeXBlKXt9LCBcdFx0XHQvLyBjYWxsYmFjayBmb3IgY29tcGxldGlvbiBvZiByZW5kZXJJdGVtcyBmdW5jdGlvblxuXHRcdFx0cmVzaXplQ29tcGxldGVDYWxsYmFjayA6IGZ1bmN0aW9uKGluZGV4LCB7eCwgeSwgd2lkdGgsIGhlaWdodH0pe30sIFx0XHRcdFx0XHQvLyBjYWxsYmFjayBmb3IgY29tcGxldGlvbiBvZiByZXNpemluZyBhbiBpdGVtXG5cdFx0XHRtb3ZlQ29tcGxldGVDYWxsYmFjayA6IGZ1bmN0aW9uKHN0YXR1cywgaW5kZXgsIHt4LCB5LCB3aWR0aCwgaGVpZ2h0fSBvciBldmVudCl7fSwgXHRcdFx0XHRcdC8vIGNhbGxiYWNrIGZvciBjb21wbGV0aW9uIG9mIG1vdmluZyBhbiBpdGVtXG5cdFx0XHRhZGRDb21wbGV0ZUNhbGxiYWNrIDogZnVuY3Rpb24oW2luZGV4LCBpbmRleCwgLi4uXSwgd2lkdGgsIGhlaWdodCwgcHJvY2Vzc1R5cGUpe30sIFx0Ly8gY2FsbGJhY2sgZm9yIGNvbXBsZXRpb24gb2YgYWRkaW5nIGFuIGl0ZW1cblx0XHRcdHJlbW92ZUNvbXBsZXRlQ2FsbGJhY2sgOiBmdW5jdGlvbihbaW5kZXgsIGluZGV4LCAuLi5dKXt9LCBcdFx0XHRcdFx0XHRcdC8vIGNhbGxiYWNrIGZvciBjb21wbGV0aW9uIG9mIHJlbW92aW5nIGFuIGl0ZW1cblx0XHR9XG5cdH1cblx0Ki9cblxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gSU5QVVQgREFUQSBGT1JNQVQgRU5EIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gQ09OU1RBTlRTIFlPVSBDQU4gQ0hBTkdFIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXHRMaW1iZXJHcmlkVmlldy5wcm90b3R5cGUuTU9WRV9HVUlERV9SQURJVVMgPSAxMDtcblx0TGltYmVyR3JpZFZpZXcucHJvdG90eXBlLlJFU0laRV9TUVVBUkVfR1VJREVfTEVOR1RIID0gMTA7XG5cdExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5SRVNJWkVfU1FVQVJFX0JPUkRFUl9HVUlERV9XSURUSCA9IDM7XG5cdExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5BVVRPX1NDUk9MTF9ESVNUQU5DRSA9IDUwO1xuXHRMaW1iZXJHcmlkVmlldy5wcm90b3R5cGUuQVVUT19TQ1JPTExfUE9JTlQgPSA1MDtcblx0TGltYmVyR3JpZFZpZXcucHJvdG90eXBlLk1PVkVfT1JfUkVTSVpFX0hFSUdIVF9JTkNSRU1FTlRTID0gNTA7XG5cblx0TGltYmVyR3JpZFZpZXcucHJvdG90eXBlLk1PVVNFX0RPV05fVElNRSA9IDUwMDtcblx0TGltYmVyR3JpZFZpZXcucHJvdG90eXBlLlRPVUNIX0hPTERfVElNRSA9IDMwMDtcblx0TGltYmVyR3JpZFZpZXcucHJvdG90eXBlLkRFTU9fV0FJVF9USU1FID0gNTAwO1xuXHRMaW1iZXJHcmlkVmlldy5wcm90b3R5cGUuV0lORE9XX1JFU0laRV9XQUlUX1RJTUUgPSAxMDAwO1xuXHRMaW1iZXJHcmlkVmlldy5wcm90b3R5cGUuTUFSR0lOID0gNTtcblxuXHRMaW1iZXJHcmlkVmlldy5wcm90b3R5cGUuTU9CSUxFX0FTUEVDVF9SQVRJTyA9IDE2IC8gOTtcblxuXHRMaW1iZXJHcmlkVmlldy5wcm90b3R5cGUuQUREX09SX0NVVFNQQUNFX1RPR0dMRSA9IFwiQUREXCI7XG5cblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIENPTlNUQU5UUyBZT1UgQ0FOIENIQU5HRSBFTkQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cblx0ZnVuY3Rpb24gTGltYmVyR3JpZFZpZXcob3B0aW9ucykge1xuXHRcdHRoaXMub3B0aW9ucyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob3B0aW9ucykpO1xuXHRcdHRoaXMuY2FsbGJhY2tzID0gb3B0aW9ucy5jYWxsYmFja3M7XG5cblx0XHR0aGlzLmluaXRpYWxHcmlkRGF0YSA9IHRoaXMub3B0aW9ucy5pbml0aWFsR3JpZERhdGE7XG5cdFx0dGhpcy5pbml0aWFsUG9zaXRpb25EYXRhID0gdGhpcy5vcHRpb25zLmluaXRpYWxHcmlkRGF0YS5pbml0aWFsUG9zaXRpb25EYXRhO1xuXHRcdHRoaXMucG9zaXRpb25EYXRhID0gSlNPTi5wYXJzZShcblx0XHRcdEpTT04uc3RyaW5naWZ5KHRoaXMuaW5pdGlhbFBvc2l0aW9uRGF0YSlcblx0XHQpO1xuXG5cdFx0aWYgKFxuXHRcdFx0dGhpcy5vcHRpb25zLmluaXRpYWxHcmlkRGF0YS5tb2JpbGVBc3BlY3RSYXRpbyAhPSB1bmRlZmluZWQgJiZcblx0XHRcdHRoaXMub3B0aW9ucy5pbml0aWFsR3JpZERhdGEubW9iaWxlQXNwZWN0UmF0aW8gIT0gbnVsbFxuXHRcdCkge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHR0eXBlb2YgdGhpcy5vcHRpb25zLmluaXRpYWxHcmlkRGF0YS5tb2JpbGVBc3BlY3RSYXRpbyA9PVxuXHRcdFx0XHRcIm51bWJlclwiXG5cdFx0XHQpIHtcblx0XHRcdFx0dGhpcy5NT0JJTEVfQVNQRUNUX1JBVElPID0gdGhpcy5vcHRpb25zLmluaXRpYWxHcmlkRGF0YS5tb2JpbGVBc3BlY3RSYXRpbztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAodGhpcy5vcHRpb25zLmVkaXRhYmxlID09IHRydWUpIHtcblx0XHRcdHRoaXMub25MaW1iZXJHcmlkTW91c2VEb3duRnVuY3Rpb25WYXJpYWJsZSA9IG9uTGltYmVyR3JpZE1vdXNlRG93bi5iaW5kKFxuXHRcdFx0XHR0aGlzXG5cdFx0XHQpO1xuXHRcdFx0dGhpcy5vbkxpbWJlckdyaWRNb3VzZU1vdmVCaW5kZWRGdW5jdGlvblZhcmlhYmxlID0gb25MaW1iZXJHcmlkTW91c2VNb3ZlLmJpbmQoXG5cdFx0XHRcdHRoaXNcblx0XHRcdCk7XG5cdFx0XHR0aGlzLm9uTGltYmVyR3JpZE1vdXNlVXBCaW5kZWRGdW5jdGlvblZhcmlhYmxlID0gb25MaW1iZXJHcmlkTW91c2VVcC5iaW5kKFxuXHRcdFx0XHR0aGlzXG5cdFx0XHQpO1xuXHRcdFx0dGhpcy5vbkxpbWJlckdyaWRDb250ZXh0TWVudUJpbmRlZEZ1bmN0aW9uVmFyaWFibGUgPSBvbkxpbWJlckdyaWRDb250ZXh0TWVudS5iaW5kKFxuXHRcdFx0XHR0aGlzXG5cdFx0XHQpO1xuXG5cdFx0XHR0aGlzLm9uTGltYmVyR3JpZFRvdWNoU3RhcnRGdW5jdGlvblZhcmlhYmxlID0gb25MaW1iZXJHcmlkVG91Y2hTdGFydC5iaW5kKFxuXHRcdFx0XHR0aGlzXG5cdFx0XHQpO1xuXHRcdFx0dGhpcy5vbkxpbWJlckdyaWRUb3VjaE1vdmVCaW5kZWRGdW5jdGlvblZhcmlhYmxlID0gb25MaW1iZXJHcmlkVG91Y2hNb3ZlLmJpbmQoXG5cdFx0XHRcdHRoaXNcblx0XHRcdCk7XG5cdFx0XHR0aGlzLm9uTGltYmVyR3JpZFRvdWNoRW5kQmluZGVkRnVuY3Rpb25WYXJpYWJsZSA9IG9uTGltYmVyR3JpZFRvdWNoRW5kLmJpbmQoXG5cdFx0XHRcdHRoaXNcblx0XHRcdCk7XG5cdFx0XHR0aGlzLm9uTGltYmVyR3JpZFRvdWNoQ2FuY2VsQmluZGVkRnVuY3Rpb25WYXJpYWJsZSA9IG9uTGltYmVyR3JpZFRvdWNoQ2FuY2VsLmJpbmQoXG5cdFx0XHRcdHRoaXNcblx0XHRcdCk7XG5cdFx0XHR0aGlzLm9uTGltYmVyR3JpZFRvdWNoQ29udGV4dE1lbnVCaW5kZWRGdW5jdGlvblZhcmlhYmxlID0gb25MaW1iZXJHcmlkVG91Y2hDb250ZXh0TWVudS5iaW5kKFxuXHRcdFx0XHR0aGlzXG5cdFx0XHQpO1xuXG5cdFx0XHR0aGlzLm9uSXRlbU1vdXNlRG93bkZ1bmN0aW9uVmFyaWFibGUgPSBvbkl0ZW1Nb3VzZURvd24uYmluZCh0aGlzKTtcblx0XHRcdHRoaXMub25Nb3VzZU1vdmVCaW5kZWRGdW5jdGlvblZhcmlhYmxlID0gb25Nb3VzZU1vdmUuYmluZCh0aGlzKTtcblx0XHRcdHRoaXMub25Nb3VzZVVwQmluZGVkRnVuY3Rpb25WYXJpYWJsZSA9IG9uTW91c2VVcC5iaW5kKHRoaXMpO1xuXHRcdFx0dGhpcy5vbkNvbnRleHRNZW51QmluZGVkRnVuY3Rpb25WYXJpYWJsZSA9IG9uQ29udGV4dE1lbnUuYmluZCh0aGlzKTtcblxuXHRcdFx0dGhpcy5vbkl0ZW1Ub3VjaFN0YXJ0RnVuY3Rpb25WYXJpYWJsZSA9IG9uSXRlbVRvdWNoU3RhcnQuYmluZCh0aGlzKTtcblx0XHRcdHRoaXMub25Ub3VjaE1vdmVCaW5kZWRGdW5jdGlvblZhcmlhYmxlID0gb25Ub3VjaE1vdmUuYmluZCh0aGlzKTtcblx0XHRcdHRoaXMub25Ub3VjaEVuZEJpbmRlZEZ1bmN0aW9uVmFyaWFibGUgPSBvblRvdWNoRW5kLmJpbmQodGhpcyk7XG5cdFx0XHR0aGlzLm9uVG91Y2hDYW5jZWxCaW5kZWRGdW5jdGlvblZhcmlhYmxlID0gb25Ub3VjaENhbmNlbC5iaW5kKHRoaXMpO1xuXHRcdFx0dGhpcy5vbkl0ZW1Ub3VjaENvbnRleHRNZW51QmluZGVkRnVuY3Rpb25WYXJpYWJsZSA9IG9uSXRlbVRvdWNoQ29udGV4dE1lbnUuYmluZChcblx0XHRcdFx0dGhpc1xuXHRcdFx0KTtcblxuXHRcdFx0dGhpcy5saW1iZXJHcmlkTW91c2VEb3duQ2hlY2tUaW1lT3V0VmFyaWFibGUgPSBudWxsO1xuXHRcdFx0dGhpcy5saW1iZXJHcmlkVG91Y2hTdGFydENoZWNrVGltZU91dFZhcmlhYmxlID0gbnVsbDtcblxuXHRcdFx0aWYgKFxuXHRcdFx0XHR0aGlzLm9wdGlvbnMubW92ZUd1aWRlUmFkaXVzICE9IHVuZGVmaW5lZCAmJlxuXHRcdFx0XHR0aGlzLm9wdGlvbnMubW92ZUd1aWRlUmFkaXVzICE9IG51bGxcblx0XHRcdCkge1xuXHRcdFx0XHRpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5tb3ZlR3VpZGVSYWRpdXMgPT0gXCJudW1iZXJcIikge1xuXHRcdFx0XHRcdHRoaXMuTU9WRV9HVUlERV9SQURJVVMgPSB0aGlzLm9wdGlvbnMubW92ZUd1aWRlUmFkaXVzO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmIChcblx0XHRcdFx0dGhpcy5vcHRpb25zLnJlc2l6ZVNxdWFyZUd1aWRlTGVuZ3RoICE9IHVuZGVmaW5lZCAmJlxuXHRcdFx0XHR0aGlzLm9wdGlvbnMucmVzaXplU3F1YXJlR3VpZGVMZW5ndGggIT0gbnVsbFxuXHRcdFx0KSB7XG5cdFx0XHRcdGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLnJlc2l6ZVNxdWFyZUd1aWRlTGVuZ3RoID09IFwibnVtYmVyXCIpIHtcblx0XHRcdFx0XHR0aGlzLlJFU0laRV9TUVVBUkVfR1VJREVfTEVOR1RIID0gdGhpcy5vcHRpb25zLnJlc2l6ZVNxdWFyZUd1aWRlTGVuZ3RoO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmIChcblx0XHRcdFx0dGhpcy5vcHRpb25zLnJlc2l6ZVNxdWFyZUJvcmRlckd1aWRlV2lkdGggIT0gdW5kZWZpbmVkICYmXG5cdFx0XHRcdHRoaXMub3B0aW9ucy5yZXNpemVTcXVhcmVCb3JkZXJHdWlkZVdpZHRoICE9IG51bGxcblx0XHRcdCkge1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0dHlwZW9mIHRoaXMub3B0aW9ucy5yZXNpemVTcXVhcmVCb3JkZXJHdWlkZVdpZHRoID09IFwibnVtYmVyXCJcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0dGhpcy5SRVNJWkVfU1FVQVJFX0JPUkRFUl9HVUlERV9XSURUSCA9IHRoaXMub3B0aW9ucy5yZXNpemVTcXVhcmVCb3JkZXJHdWlkZVdpZHRoO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKFxuXHRcdFx0dGhpcy5jYWxsYmFja3Mub25JdGVtQ2xpY2tDYWxsYmFjayAhPSB1bmRlZmluZWQgJiZcblx0XHRcdHRoaXMuY2FsbGJhY2tzLm9uSXRlbUNsaWNrQ2FsbGJhY2sgIT0gbnVsbFxuXHRcdCkge1xuXHRcdFx0dGhpcy5vbkl0ZW1DbGlja0Z1bmN0aW9uVmFyaWFibGUgPSBvbkl0ZW1DbGljay5iaW5kKHRoaXMpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLm9wdGlvbnMucmVSZW5kZXJPblJlc2l6ZSAhPSBmYWxzZSkge1xuXHRcdFx0dGhpcy5vbldpbmRvd1Jlc2l6ZUZ1bmN0aW9uVmFyaWFibGUgPSBvbldpbmRvd1Jlc2l6ZS5iaW5kKHRoaXMpO1xuXHRcdFx0dGhpcy5vbldpbmRvd1Jlc2l6ZVRpbWVyQ2FsbGJhY2tGdW5jdGlvblZhcmlhYmxlID0gb25XaW5kb3dSZXNpemVUaW1lckNhbGxiYWNrLmJpbmQoXG5cdFx0XHRcdHRoaXNcblx0XHRcdCk7XG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdFx0XCJyZXNpemVcIixcblx0XHRcdFx0dGhpcy5vbldpbmRvd1Jlc2l6ZUZ1bmN0aW9uVmFyaWFibGVcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5pbml0KHRoaXMuaW5pdGlhbEdyaWREYXRhLmdyaWRXaWR0aCwgdGhpcy5vcHRpb25zLmF1dG9BcnJhbmdlKTtcblx0fVxuXG5cdExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oaW5pdGlhbEdyaWRXaWR0aCwgYXV0b0FycmFuZ2UpIHtcblx0XHRpZiAodGhpcy5vcHRpb25zLmVsLmluZGV4T2YoXCIjXCIpICE9IDApIHtcblx0XHRcdHRocm93IFwiRE9NIEVsZW1lbnQgd2l0aCBJZCByZXF1aXJlZFwiO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLiRib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpO1xuXHRcdFx0dGhpcy5lbGVtZW50SUQgPSB0aGlzLm9wdGlvbnMuZWwuc3Vic3RyaW5nKFxuXHRcdFx0XHQxLFxuXHRcdFx0XHR0aGlzLm9wdGlvbnMuZWwubGVuZ3RoXG5cdFx0XHQpO1xuXHRcdFx0dGhpcy5wc2V1ZG9FbGVtZW50SUQgPVxuXHRcdFx0XHRcImxpbWJlckdyaWRWaWV3UHNldWRvQ29udGFpbmVyX1wiICsgdGhpcy5lbGVtZW50SUQ7XG5cdFx0XHR0aGlzLiRlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuXHRcdFx0XHR0aGlzLm9wdGlvbnMuZWwuc3Vic3RyaW5nKDEsIHRoaXMub3B0aW9ucy5lbC5sZW5ndGgpXG5cdFx0XHQpO1xuXHRcdFx0dGhpcy4kYm9keVswXS5pbnNlcnRBZGphY2VudEhUTUwoXG5cdFx0XHRcdFwiYmVmb3JlZW5kXCIsXG5cdFx0XHRcdCc8ZGl2IGlkID0gXCInICtcblx0XHRcdFx0XHR0aGlzLnBzZXVkb0VsZW1lbnRJRCArXG5cdFx0XHRcdFx0J1wiIGNsYXNzID0gXCJsaW1iZXJHcmlkVmlld1BzZXVkb0NvbnRhaW5lclwiPjwvZGl2Pidcblx0XHRcdCk7XG5cdFx0XHR0aGlzLiRib2R5UHNldWRvRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnBzZXVkb0VsZW1lbnRJRCk7XG5cdFx0fVxuXG5cdFx0dGhpcy4kZWwuaW5uZXJIVE1MID1cblx0XHRcdCc8ZGl2IGNsYXNzID0gXCJsaW1iZXJHcmlkVmlld0NvbnRhaW5lclwiPjxzdHlsZT48L3N0eWxlPjxkaXYgY2xhc3MgPSBcImxpbWJlckdyaWRWaWV3XCI+PC9kaXY+PGRpdiBjbGFzcyA9IFwibGltYmVyR3JpZFZpZXdMaWNlbnNlXCI+PGRpdiBjbGFzcyA9IFwibGltYmVyR3JpZFZpZXdMaWNlbnNlSWNvblwiPmk8L2Rpdj48ZGl2IGNsYXNzID0gXCJsaW1iZXJHcmlkVmlld0xpY2Vuc2VEZXRhaWxzXCI+TGltYmVyR3JpZFZpZXcgQ29weXJpZ2h0IChjKSAyMDE4LCBTdWJlbmRyYSBLdW1hciBTaGFybWEuIExpY2Vuc2U6IEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMywgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi48L2Rpdj48L2Rpdj48L2Rpdj4nO1xuXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3Q29udGFpbmVyID0gdGhpcy4kZWwucXVlcnlTZWxlY3RvckFsbChcblx0XHRcdFwiLmxpbWJlckdyaWRWaWV3Q29udGFpbmVyXCJcblx0XHQpO1xuXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3U3R5bGUgPSB0aGlzLiRlbC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInN0eWxlXCIpO1xuXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3ID0gdGhpcy4kZWwucXVlcnlTZWxlY3RvckFsbChcIi5saW1iZXJHcmlkVmlld1wiKTtcblxuXHRcdHRoaXMuUEFERElOR19MRUZUID0gcGFyc2VJbnQoXG5cdFx0XHR3aW5kb3dcblx0XHRcdFx0LmdldENvbXB1dGVkU3R5bGUodGhpcy4kbGltYmVyR3JpZFZpZXdbMF0sIG51bGwpXG5cdFx0XHRcdC5nZXRQcm9wZXJ0eVZhbHVlKFwicGFkZGluZy1sZWZ0XCIpXG5cdFx0KTtcblx0XHR0aGlzLlBBRERJTkdfUklHSFQgPSBwYXJzZUludChcblx0XHRcdHdpbmRvd1xuXHRcdFx0XHQuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLiRsaW1iZXJHcmlkVmlld1swXSwgbnVsbClcblx0XHRcdFx0LmdldFByb3BlcnR5VmFsdWUoXCJwYWRkaW5nLXJpZ2h0XCIpXG5cdFx0KTtcblx0XHR0aGlzLlBBRERJTkdfVE9QID0gcGFyc2VJbnQoXG5cdFx0XHR3aW5kb3dcblx0XHRcdFx0LmdldENvbXB1dGVkU3R5bGUodGhpcy4kbGltYmVyR3JpZFZpZXdbMF0sIG51bGwpXG5cdFx0XHRcdC5nZXRQcm9wZXJ0eVZhbHVlKFwicGFkZGluZy10b3BcIilcblx0XHQpO1xuXHRcdHRoaXMuUEFERElOR19CT1RUT00gPSBwYXJzZUludChcblx0XHRcdHdpbmRvd1xuXHRcdFx0XHQuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLiRsaW1iZXJHcmlkVmlld1swXSwgbnVsbClcblx0XHRcdFx0LmdldFByb3BlcnR5VmFsdWUoXCJwYWRkaW5nLWJvdHRvbVwiKVxuXHRcdCk7XG5cblx0XHR0aGlzLldJRFRIID1cblx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLmNsaWVudFdpZHRoIC1cblx0XHRcdHRoaXMuUEFERElOR19MRUZUIC1cblx0XHRcdHRoaXMuUEFERElOR19SSUdIVDtcblx0XHR0aGlzLkhFSUdIVCA9XG5cdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5jbGllbnRIZWlnaHQgLVxuXHRcdFx0dGhpcy5QQURESU5HX1RPUCAtXG5cdFx0XHR0aGlzLlBBRERJTkdfQk9UVE9NO1xuXG5cdFx0aWYgKFxuXHRcdFx0KGluaXRpYWxHcmlkV2lkdGggPT0gdW5kZWZpbmVkIHx8IGluaXRpYWxHcmlkV2lkdGggPT0gbnVsbCkgJiZcblx0XHRcdHRoaXMucG9zaXRpb25EYXRhLmxlbmd0aCA9PSAwXG5cdFx0KSB7XG5cdFx0XHRpbml0aWFsR3JpZFdpZHRoID0gdGhpcy5XSURUSDtcblx0XHR9XG5cblx0XHR0aGlzLldJRFRIX1NDQUxFX0ZBQ1RPUiA9IHRoaXMuV0lEVEggLyBpbml0aWFsR3JpZFdpZHRoO1xuXG5cdFx0aWYgKGF1dG9BcnJhbmdlID09IHRydWUpIHtcblx0XHRcdHZhciBwb3NpdGlvbkRhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMucG9zaXRpb25EYXRhKSk7XG5cdFx0XHR2YXIgcmVtYWluaW5nSXRlbXMgPSBbXTtcblx0XHRcdHZhciBsZW5ndGhfMCA9IHBvc2l0aW9uRGF0YS5sZW5ndGg7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF8wOyBpKyspIHtcblx0XHRcdFx0cmVtYWluaW5nSXRlbXMucHVzaChpKTtcblx0XHRcdFx0cG9zaXRpb25EYXRhW2ldLndpZHRoID1cblx0XHRcdFx0XHRwb3NpdGlvbkRhdGFbaV0ud2lkdGggKiB0aGlzLldJRFRIX1NDQUxFX0ZBQ1RPUjtcblx0XHRcdFx0cG9zaXRpb25EYXRhW2ldLmhlaWdodCA9XG5cdFx0XHRcdFx0cG9zaXRpb25EYXRhW2ldLmhlaWdodCAqIHRoaXMuV0lEVEhfU0NBTEVfRkFDVE9SO1xuXHRcdFx0XHRpZiAocG9zaXRpb25EYXRhW2ldLndpZHRoID4gdGhpcy5XSURUSCkge1xuXHRcdFx0XHRcdHBvc2l0aW9uRGF0YVtpXS53aWR0aCA9IHRoaXMuV0lEVEg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMucG9zaXRpb25EYXRhID0gdGhpcy5maXRSZW1haW5pbmdJdGVtc0JlbG93RGVlcGVzdExpbmUoXG5cdFx0XHRcdDAsXG5cdFx0XHRcdHBvc2l0aW9uRGF0YSxcblx0XHRcdFx0cmVtYWluaW5nSXRlbXMsXG5cdFx0XHRcdFtdXG5cdFx0XHQpLnBvc2l0aW9uRGF0YTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHR0aGlzLmluaXRpYWxHcmlkRGF0YS5tYXJnaW4gIT0gdW5kZWZpbmVkICYmXG5cdFx0XHRcdHRoaXMuaW5pdGlhbEdyaWREYXRhLm1hcmdpbiAhPSBudWxsXG5cdFx0XHQpIHtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdHR5cGVvZiB0aGlzLmluaXRpYWxHcmlkRGF0YS5tYXJnaW4gPT0gXCJudW1iZXJcIiAmJlxuXHRcdFx0XHRcdHRoaXMuaW5pdGlhbEdyaWREYXRhLm1hcmdpbiA+IDBcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0dGhpcy5NQVJHSU4gPSB0aGlzLmluaXRpYWxHcmlkRGF0YS5tYXJnaW47XG5cdFx0XHRcdFx0dGhpcy5NQVJHSU4gPSB0aGlzLk1BUkdJTiAqIHRoaXMuV0lEVEhfU0NBTEVfRkFDVE9SO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRocm93IFwiTWFyZ2luIGlzIHJlcXVpcmVkIGZvciByZW5kZXJpbmcgd2l0aCBwb3NpdGlvbiBjb29yZGluYXRlc1wiO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyBcIk1hcmdpbiBpcyByZXF1aXJlZCBmb3IgcmVuZGVyaW5nIHdpdGggcG9zaXRpb24gY29vcmRpbmF0ZXNcIjtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEdFVFRFUlMgQU5EIFNFVFRFUlMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cblx0TGltYmVyR3JpZFZpZXcucHJvdG90eXBlLmdldEdyaWREYXRhID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGdyaWREYXRhID0ge1xuXHRcdFx0Z3JpZEhlaWdodDogdGhpcy5IRUlHSFQsXG5cdFx0XHRncmlkV2lkdGg6IHRoaXMuV0lEVEgsXG5cdFx0XHRtYXJnaW46IHRoaXMuTUFSR0lOLFxuXHRcdFx0aW5pdGlhbFBvc2l0aW9uRGF0YTogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnBvc2l0aW9uRGF0YSkpXG5cdFx0fTtcblx0XHRyZXR1cm4gZ3JpZERhdGE7XG5cdH07XG5cblx0TGltYmVyR3JpZFZpZXcucHJvdG90eXBlLnNldEFkZE9yQ3V0U3BhY2UgPSBmdW5jdGlvbihmbGFnKSB7XG5cdFx0aWYgKGZsYWcgPT0gXCJBRERcIiB8fCBmbGFnID09IFwiQ1VUU1BBQ0VcIikge1xuXHRcdFx0dGhpcy5BRERfT1JfQ1VUU1BBQ0VfVE9HR0xFID0gZmxhZztcblx0XHR9XG5cdH07XG5cblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEdFVFRFUlMgQU5EIFNFVFRFUlMgRU5EIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gUkVOREVSRVJTIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cblx0TGltYmVyR3JpZFZpZXcucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uKHBvc2l0aW9uRGF0YSwgc2NhbGUgPSB0cnVlKSB7XG5cdFx0dGhpcy51bkluaXRpYWxpemVFdmVudHMoKTtcblxuXHRcdGlmIChwb3NpdGlvbkRhdGEgPT09IHVuZGVmaW5lZCB8fCBwb3NpdGlvbkRhdGEgPT09IG51bGwpIHtcblx0XHRcdHZhciBwb3NpdGlvbkRhdGEgPSB0aGlzLnBvc2l0aW9uRGF0YTtcblx0XHR9XG5cdFx0aWYgKHNjYWxlID09IHRydWUpIHtcblx0XHRcdHZhciBXSURUSF9TQ0FMRV9GQUNUT1IgPSB0aGlzLldJRFRIX1NDQUxFX0ZBQ1RPUjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIFdJRFRIX1NDQUxFX0ZBQ1RPUiA9IDE7XG5cdFx0fVxuXG5cdFx0dmFyIGNsYXNzTGlzdCA9IFtcImxpbWJlckdyaWRWaWV3SXRlbVwiXTtcblx0XHRpZiAodGhpcy5vcHRpb25zLmVkaXRhYmxlID09IHRydWUpIHtcblx0XHRcdGNsYXNzTGlzdC5wdXNoKFwibGltYmVyR3JpZFZpZXdJdGVtRWRpdGFibGVcIik7XG5cdFx0fVxuXHRcdHZhciBjbGFzc0xpc3RTdHJpbmcgPSBjbGFzc0xpc3Quam9pbihcIiBcIik7XG5cblx0XHR2YXIgaHRtbCA9IFtdO1xuXG5cdFx0Ly8gZGV2IENvZGVcblx0XHR2YXIgdDAgPSBwZXJmb3JtYW5jZS5ub3coKTtcblx0XHQvLyBkZXYgQ29kZSBFTkRcblxuXHRcdGlmICghdGhpcy5pc01vYmlsZSgpKSB7XG5cdFx0XHRpZiAodGhpcy5vcHRpb25zLmRhdGFUeXBlID09IFwic3RyaW5nXCIpIHtcblx0XHRcdFx0dmFyIGxlbmd0aF8wID0gcG9zaXRpb25EYXRhLmxlbmd0aDtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHRcdFx0cG9zaXRpb25EYXRhW2ldLndpZHRoICo9IFdJRFRIX1NDQUxFX0ZBQ1RPUjtcblx0XHRcdFx0XHRpZiAocG9zaXRpb25EYXRhW2ldLndpZHRoID4gdGhpcy5XSURUSCkge1xuXHRcdFx0XHRcdFx0cG9zaXRpb25EYXRhW2ldLndpZHRoID0gdGhpcy5XSURUSDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dmFyIGZyb250ID1cblx0XHRcdFx0XHRcdCc8ZGl2IGNsYXNzID0gXCInICtcblx0XHRcdFx0XHRcdGNsYXNzTGlzdFN0cmluZyArXG5cdFx0XHRcdFx0XHQnXCIgZGF0YS1pbmRleCA9IFwiJyArXG5cdFx0XHRcdFx0XHRpICtcblx0XHRcdFx0XHRcdCdcIiAnO1xuXHRcdFx0XHRcdHZhciBzdHlsZV8xID1cblx0XHRcdFx0XHRcdCdzdHlsZSA9IFwidHJhbnNmb3JtIDogdHJhbnNsYXRlKCcgK1xuXHRcdFx0XHRcdFx0KHBvc2l0aW9uRGF0YVtpXS54ICo9IFdJRFRIX1NDQUxFX0ZBQ1RPUikgK1xuXHRcdFx0XHRcdFx0XCJweCwgXCI7XG5cdFx0XHRcdFx0dmFyIHN0eWxlXzIgPVxuXHRcdFx0XHRcdFx0KHBvc2l0aW9uRGF0YVtpXS55ICo9IFdJRFRIX1NDQUxFX0ZBQ1RPUikgKyBcInB4KTsgXCI7XG5cdFx0XHRcdFx0dmFyIHN0eWxlXzMgPSBcIndpZHRoIDogXCIgKyBwb3NpdGlvbkRhdGFbaV0ud2lkdGggKyBcInB4OyBcIjtcblx0XHRcdFx0XHR2YXIgc3R5bGVfNCA9XG5cdFx0XHRcdFx0XHRcImhlaWdodCA6IFwiICtcblx0XHRcdFx0XHRcdChwb3NpdGlvbkRhdGFbaV0uaGVpZ2h0ICo9IFdJRFRIX1NDQUxFX0ZBQ1RPUikgK1xuXHRcdFx0XHRcdFx0XCJweDsgXCI7XG5cdFx0XHRcdFx0dmFyIHN0eWxlXzUgPSAnXCI+JztcblxuXHRcdFx0XHRcdHZhciBzdHlsZSA9IHN0eWxlXzEgKyBzdHlsZV8yICsgc3R5bGVfMyArIHN0eWxlXzQgKyBzdHlsZV81O1xuXG5cdFx0XHRcdFx0dmFyIGJvZHlGcm9udCA9IFwiPGRpdj5cIjtcblx0XHRcdFx0XHR2YXIgYm9keUVuZCA9IFwiPC9kaXY+XCI7XG5cdFx0XHRcdFx0dmFyIHVzZXJEYXRhID0gdGhpcy5jYWxsYmFja3MuZ2V0SXRlbVJlbmRlckRhdGFDYWxsYmFjayhcblx0XHRcdFx0XHRcdGksXG5cdFx0XHRcdFx0XHRwb3NpdGlvbkRhdGFbaV0ud2lkdGgsXG5cdFx0XHRcdFx0XHRwb3NpdGlvbkRhdGFbaV0uaGVpZ2h0LFxuXHRcdFx0XHRcdFx0XCJyZW5kZXJcIlxuXHRcdFx0XHRcdCk7XG5cblx0XHRcdFx0XHR2YXIgYm9keSA9IGJvZHlGcm9udCArIHVzZXJEYXRhICsgYm9keUVuZDtcblx0XHRcdFx0XHR2YXIgZW5kID0gXCI8L2Rpdj5cIjtcblxuXHRcdFx0XHRcdHZhciBpdGVtID0gZnJvbnQgKyBzdHlsZSArIGJvZHkgKyBlbmQ7XG5cblx0XHRcdFx0XHRodG1sLnB1c2goaXRlbSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLmRhdGFUeXBlID09IFwibm9kZVwiKSB7XG5cdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3Q29udGFpbmVyWzBdLnJlbW92ZUNoaWxkKFxuXHRcdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdXG5cdFx0XHRcdCk7XG5cblx0XHRcdFx0dmFyIGxlbmd0aF8wID0gcG9zaXRpb25EYXRhLmxlbmd0aDtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHRcdFx0cG9zaXRpb25EYXRhW2ldLndpZHRoICo9IFdJRFRIX1NDQUxFX0ZBQ1RPUjtcblx0XHRcdFx0XHRpZiAocG9zaXRpb25EYXRhW2ldLndpZHRoID4gdGhpcy5XSURUSCkge1xuXHRcdFx0XHRcdFx0cG9zaXRpb25EYXRhW2ldLndpZHRoID0gdGhpcy5XSURUSDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRcdFx0dmFyIGF0dHJpYnV0ZSA9IGRvY3VtZW50LmNyZWF0ZUF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIik7XG5cdFx0XHRcdFx0YXR0cmlidXRlLnZhbHVlID0gaTtcblx0XHRcdFx0XHRkaXYuc2V0QXR0cmlidXRlTm9kZShhdHRyaWJ1dGUpO1xuXHRcdFx0XHRcdGlmIChjbGFzc0xpc3QubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdFx0ZGl2LmNsYXNzTGlzdC5hZGQoY2xhc3NMaXN0WzBdKTtcblx0XHRcdFx0XHRcdGRpdi5jbGFzc0xpc3QuYWRkKGNsYXNzTGlzdFsxXSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGRpdi5jbGFzc0xpc3QuYWRkKGNsYXNzTGlzdFswXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGRpdi5zdHlsZS50cmFuc2Zvcm0gPVxuXHRcdFx0XHRcdFx0XCJ0cmFuc2xhdGUoXCIgK1xuXHRcdFx0XHRcdFx0KHBvc2l0aW9uRGF0YVtpXS54ICo9IFdJRFRIX1NDQUxFX0ZBQ1RPUikgK1xuXHRcdFx0XHRcdFx0XCJweCwgXCIgK1xuXHRcdFx0XHRcdFx0KHBvc2l0aW9uRGF0YVtpXS55ICo9IFdJRFRIX1NDQUxFX0ZBQ1RPUikgK1xuXHRcdFx0XHRcdFx0XCJweClcIjtcblx0XHRcdFx0XHRkaXYuc3R5bGUud2lkdGggPSBwb3NpdGlvbkRhdGFbaV0ud2lkdGggKyBcInB4XCI7XG5cdFx0XHRcdFx0ZGl2LnN0eWxlLmhlaWdodCA9XG5cdFx0XHRcdFx0XHQocG9zaXRpb25EYXRhW2ldLmhlaWdodCAqPSBXSURUSF9TQ0FMRV9GQUNUT1IpICsgXCJweFwiO1xuXG5cdFx0XHRcdFx0dmFyIHVzZXJEYXRhID0gdGhpcy5jYWxsYmFja3MuZ2V0SXRlbVJlbmRlckRhdGFDYWxsYmFjayhcblx0XHRcdFx0XHRcdGksXG5cdFx0XHRcdFx0XHRwb3NpdGlvbkRhdGFbaV0ud2lkdGgsXG5cdFx0XHRcdFx0XHRwb3NpdGlvbkRhdGFbaV0uaGVpZ2h0LFxuXHRcdFx0XHRcdFx0XCJyZW5kZXJcIlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0aWYgKHR5cGVvZiB1c2VyRGF0YSA9PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRcdFx0XHRkaXYuaW5uZXJIVE1MID0gdXNlckRhdGE7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGRpdi5hcHBlbmRDaGlsZCh1c2VyRGF0YSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLmFwcGVuZENoaWxkKGRpdik7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdDb250YWluZXJbMF0uYXBwZW5kQ2hpbGQoXG5cdFx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdbMF1cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZXJpYWxpemVkUG9zaXRpb25EYXRhID0gZ2V0Um93U2VxdWVuY2UuY2FsbCh0aGlzLCB0cnVlKTtcblx0XHRcdGlmICh0aGlzLm9wdGlvbnMuZGF0YVR5cGUgPT0gXCJzdHJpbmdcIikge1xuXHRcdFx0XHR2YXIgbGVuZ3RoXzAgPSBwb3NpdGlvbkRhdGEubGVuZ3RoO1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF8wOyBpKyspIHtcblx0XHRcdFx0XHRwb3NpdGlvbkRhdGFbaV0ud2lkdGggKj0gV0lEVEhfU0NBTEVfRkFDVE9SO1xuXHRcdFx0XHRcdHBvc2l0aW9uRGF0YVtpXS5oZWlnaHQgKj0gV0lEVEhfU0NBTEVfRkFDVE9SO1xuXHRcdFx0XHRcdHBvc2l0aW9uRGF0YVtpXS54ICo9IFdJRFRIX1NDQUxFX0ZBQ1RPUjtcblx0XHRcdFx0XHRwb3NpdGlvbkRhdGFbaV0ueSAqPSBXSURUSF9TQ0FMRV9GQUNUT1I7XG5cdFx0XHRcdFx0aWYgKHBvc2l0aW9uRGF0YVtpXS53aWR0aCA+IHRoaXMuV0lEVEgpIHtcblx0XHRcdFx0XHRcdHBvc2l0aW9uRGF0YVtpXS53aWR0aCA9IHRoaXMuV0lEVEg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHZhciBmcm9udCA9XG5cdFx0XHRcdFx0XHQnPGRpdiBjbGFzcyA9IFwibGltYmVyR3JpZFZpZXdJdGVtXCIgZGF0YS1pbmRleCA9IFwiJyArXG5cdFx0XHRcdFx0XHRpICtcblx0XHRcdFx0XHRcdCdcIiAnO1xuXHRcdFx0XHRcdHZhciBzdHlsZV8xID1cblx0XHRcdFx0XHRcdCdzdHlsZSA9IFwidHJhbnNmb3JtIDogdHJhbnNsYXRlKCcgKyAwICsgXCJweCwgXCI7XG5cdFx0XHRcdFx0dmFyIHN0eWxlXzIgPVxuXHRcdFx0XHRcdFx0KHRoaXMuV0lEVEggLyB0aGlzLk1PQklMRV9BU1BFQ1RfUkFUSU8gK1xuXHRcdFx0XHRcdFx0XHRnZXRNYXJnaW5BdFBvaW50LmNhbGwoXG5cdFx0XHRcdFx0XHRcdFx0dGhpcyxcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnNlcmlhbGl6ZWRQb3NpdGlvbkRhdGEubWFwW2ldXG5cdFx0XHRcdFx0XHRcdCkpICpcblx0XHRcdFx0XHRcdFx0dGhpcy5zZXJpYWxpemVkUG9zaXRpb25EYXRhLm1hcFtpXSArXG5cdFx0XHRcdFx0XHRcInB4KTsgXCI7XG5cdFx0XHRcdFx0dmFyIHN0eWxlXzMgPSBcIndpZHRoIDogXCIgKyB0aGlzLldJRFRIICsgXCJweDsgXCI7XG5cdFx0XHRcdFx0dmFyIHN0eWxlXzQgPVxuXHRcdFx0XHRcdFx0XCJoZWlnaHQgOiBcIiArXG5cdFx0XHRcdFx0XHR0aGlzLldJRFRIIC8gdGhpcy5NT0JJTEVfQVNQRUNUX1JBVElPICtcblx0XHRcdFx0XHRcdFwicHg7IFwiO1xuXHRcdFx0XHRcdHZhciBzdHlsZV81ID0gJ1wiPic7XG5cblx0XHRcdFx0XHR2YXIgc3R5bGUgPSBzdHlsZV8xICsgc3R5bGVfMiArIHN0eWxlXzMgKyBzdHlsZV80ICsgc3R5bGVfNTtcblxuXHRcdFx0XHRcdHZhciBib2R5RnJvbnQgPSBcIjxkaXY+XCI7XG5cdFx0XHRcdFx0dmFyIGJvZHlFbmQgPSBcIjwvZGl2PlwiO1xuXHRcdFx0XHRcdHZhciB1c2VyRGF0YSA9IHRoaXMuY2FsbGJhY2tzLmdldEl0ZW1SZW5kZXJEYXRhQ2FsbGJhY2soXG5cdFx0XHRcdFx0XHRpLFxuXHRcdFx0XHRcdFx0dGhpcy5XSURUSCxcblx0XHRcdFx0XHRcdHRoaXMuV0lEVEggLyB0aGlzLk1PQklMRV9BU1BFQ1RfUkFUSU8sXG5cdFx0XHRcdFx0XHRcInJlbmRlclwiXG5cdFx0XHRcdFx0KTtcblxuXHRcdFx0XHRcdHZhciBib2R5ID0gYm9keUZyb250ICsgdXNlckRhdGEgKyBib2R5RW5kO1xuXHRcdFx0XHRcdHZhciBlbmQgPSBcIjwvZGl2PlwiO1xuXG5cdFx0XHRcdFx0dmFyIGl0ZW0gPSBmcm9udCArIHN0eWxlICsgYm9keSArIGVuZDtcblxuXHRcdFx0XHRcdGh0bWwucHVzaChpdGVtKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICh0aGlzLm9wdGlvbnMuZGF0YVR5cGUgPT0gXCJub2RlXCIpIHtcblx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdDb250YWluZXJbMF0ucmVtb3ZlQ2hpbGQoXG5cdFx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdbMF1cblx0XHRcdFx0KTtcblxuXHRcdFx0XHR2YXIgbGVuZ3RoXzAgPSBwb3NpdGlvbkRhdGEubGVuZ3RoO1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF8wOyBpKyspIHtcblx0XHRcdFx0XHRwb3NpdGlvbkRhdGFbaV0ud2lkdGggKj0gV0lEVEhfU0NBTEVfRkFDVE9SO1xuXHRcdFx0XHRcdHBvc2l0aW9uRGF0YVtpXS5oZWlnaHQgKj0gV0lEVEhfU0NBTEVfRkFDVE9SO1xuXHRcdFx0XHRcdHBvc2l0aW9uRGF0YVtpXS54ICo9IFdJRFRIX1NDQUxFX0ZBQ1RPUjtcblx0XHRcdFx0XHRwb3NpdGlvbkRhdGFbaV0ueSAqPSBXSURUSF9TQ0FMRV9GQUNUT1I7XG5cdFx0XHRcdFx0aWYgKHBvc2l0aW9uRGF0YVtpXS53aWR0aCA+IHRoaXMuV0lEVEgpIHtcblx0XHRcdFx0XHRcdHBvc2l0aW9uRGF0YVtpXS53aWR0aCA9IHRoaXMuV0lEVEg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0XHRcdHZhciBhdHRyaWJ1dGUgPSBkb2N1bWVudC5jcmVhdGVBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIpO1xuXHRcdFx0XHRcdGF0dHJpYnV0ZS52YWx1ZSA9IGk7XG5cdFx0XHRcdFx0ZGl2LnNldEF0dHJpYnV0ZU5vZGUoYXR0cmlidXRlKTtcblx0XHRcdFx0XHRkaXYuY2xhc3NMaXN0LmFkZChcImxpbWJlckdyaWRWaWV3SXRlbVwiKTtcblxuXHRcdFx0XHRcdGRpdi5zdHlsZS50cmFuc2Zvcm0gPVxuXHRcdFx0XHRcdFx0XCJ0cmFuc2xhdGUoXCIgK1xuXHRcdFx0XHRcdFx0MCArXG5cdFx0XHRcdFx0XHRcInB4LCBcIiArXG5cdFx0XHRcdFx0XHQodGhpcy5XSURUSCAvIHRoaXMuTU9CSUxFX0FTUEVDVF9SQVRJTyArXG5cdFx0XHRcdFx0XHRcdGdldE1hcmdpbkF0UG9pbnQuY2FsbChcblx0XHRcdFx0XHRcdFx0XHR0aGlzLFxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2VyaWFsaXplZFBvc2l0aW9uRGF0YS5tYXBbaV1cblx0XHRcdFx0XHRcdFx0KSkgKlxuXHRcdFx0XHRcdFx0XHR0aGlzLnNlcmlhbGl6ZWRQb3NpdGlvbkRhdGEubWFwW2ldICtcblx0XHRcdFx0XHRcdFwicHgpXCI7XG5cdFx0XHRcdFx0ZGl2LnN0eWxlLndpZHRoID0gdGhpcy5XSURUSCArIFwicHhcIjtcblx0XHRcdFx0XHRkaXYuc3R5bGUuaGVpZ2h0ID1cblx0XHRcdFx0XHRcdHRoaXMuV0lEVEggLyB0aGlzLk1PQklMRV9BU1BFQ1RfUkFUSU8gKyBcInB4XCI7XG5cblx0XHRcdFx0XHR2YXIgdXNlckRhdGEgPSB0aGlzLmNhbGxiYWNrcy5nZXRJdGVtUmVuZGVyRGF0YUNhbGxiYWNrKFxuXHRcdFx0XHRcdFx0aSxcblx0XHRcdFx0XHRcdHRoaXMuV0lEVEgsXG5cdFx0XHRcdFx0XHR0aGlzLldJRFRIIC8gdGhpcy5NT0JJTEVfQVNQRUNUX1JBVElPLFxuXHRcdFx0XHRcdFx0XCJyZW5kZXJcIlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0aWYgKHR5cGVvZiB1c2VyRGF0YSA9PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRcdFx0XHRkaXYuaW5uZXJIVE1MID0gdXNlckRhdGE7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGRpdi5hcHBlbmRDaGlsZCh1c2VyRGF0YSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLmFwcGVuZENoaWxkKGRpdik7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdDb250YWluZXJbMF0uYXBwZW5kQ2hpbGQoXG5cdFx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdbMF1cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAodGhpcy5vcHRpb25zLmRhdGFUeXBlID09IFwic3RyaW5nXCIpIHtcblx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLmlubmVySFRNTCA9IGh0bWwuam9pbihcIlwiKTtcblx0XHR9XG5cblx0XHQvLyBkZXYgQ29kZVxuXHRcdHZhciB0MSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuXHRcdGNvbnNvbGUubG9nKHQwKTtcblx0XHRjb25zb2xlLmxvZyh0MSk7XG5cdFx0Y29uc29sZS5sb2codDEgLSB0MCk7XG5cdFx0Ly8gZGV2IENvZGUgRU5EXG5cblx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0l0ZW1zID0gdGhpcy4kbGltYmVyR3JpZFZpZXdbMF0ucXVlcnlTZWxlY3RvckFsbChcblx0XHRcdFwiLmxpbWJlckdyaWRWaWV3SXRlbVwiXG5cdFx0KTtcblxuXHRcdHRoaXMucmVuZGVyUHNldWRvRWxlbWVudHMocG9zaXRpb25EYXRhKTtcblxuXHRcdHRoaXMuaW5pdGlhbGl6ZVZhcmlhYmxlcygpO1xuXHRcdHRoaXMuaW5pdGlhbGl6ZUV2ZW50cygpO1xuXG5cdFx0aWYgKFxuXHRcdFx0dGhpcy5jYWxsYmFja3MucmVuZGVyQ29tcGxldGUgIT0gdW5kZWZpbmVkICYmXG5cdFx0XHR0aGlzLmNhbGxiYWNrcy5yZW5kZXJDb21wbGV0ZSAhPSBudWxsXG5cdFx0KSB7XG5cdFx0XHR0aGlzLmNhbGxiYWNrcy5yZW5kZXJDb21wbGV0ZSgpO1xuXHRcdH1cblx0fTtcblxuXHRMaW1iZXJHcmlkVmlldy5wcm90b3R5cGUucmVuZGVyUHNldWRvRWxlbWVudHMgPSBmdW5jdGlvbihwb3NpdGlvbkRhdGEpIHtcblx0XHRpZiAodGhpcy4kbGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbXMgIT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR2YXIgbGVuZ3RoXzAgPSB0aGlzLnBvc2l0aW9uRGF0YS5sZW5ndGg7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF8wOyBpKyspIHtcblx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbXNbMF0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChcblx0XHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtc1swXVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbXMgPSB1bmRlZmluZWQ7XG5cdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0JvZHlQc2V1ZG9JdGVtcyA9IHVuZGVmaW5lZDtcblx0XHR9XG5cblx0XHR2YXIgZ3JpZEh0bWwgPSBbXTtcblx0XHR2YXIgYm9keUh0bWwgPSBbXTtcblxuXHRcdGlmICghdGhpcy5pc01vYmlsZSgpKSB7XG5cdFx0XHR2YXIgbGVuZ3RoXzAgPSBwb3NpdGlvbkRhdGEubGVuZ3RoO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHRcdHZhciBncmlkRnJvbnQgPVxuXHRcdFx0XHRcdCc8ZGl2IGNsYXNzID0gXCJsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtXCIgZGF0YS1pbmRleCA9IFwiJyArXG5cdFx0XHRcdFx0aSArXG5cdFx0XHRcdFx0J1wiICc7XG5cdFx0XHRcdHZhciBib2R5RnJvbnQgPVxuXHRcdFx0XHRcdCc8ZGl2IGNsYXNzID0gXCJsaW1iZXJHcmlkVmlld0JvZHlQc2V1ZG9JdGVtXCIgZGF0YS1pbmRleCA9IFwiJyArXG5cdFx0XHRcdFx0aSArXG5cdFx0XHRcdFx0J1wiICc7XG5cdFx0XHRcdHZhciBzdHlsZV8xID1cblx0XHRcdFx0XHQnc3R5bGUgPSBcInRyYW5zZm9ybSA6IHRyYW5zbGF0ZSgnICtcblx0XHRcdFx0XHRwb3NpdGlvbkRhdGFbaV0ueCArXG5cdFx0XHRcdFx0XCJweCwgXCI7XG5cdFx0XHRcdHZhciBzdHlsZV8yID0gcG9zaXRpb25EYXRhW2ldLnkgKyBcInB4KTsgXCI7XG5cdFx0XHRcdHZhciBzdHlsZV8zID0gXCJ3aWR0aCA6IFwiICsgcG9zaXRpb25EYXRhW2ldLndpZHRoICsgXCJweDsgXCI7XG5cdFx0XHRcdHZhciBzdHlsZV80ID0gXCJoZWlnaHQgOiBcIiArIHBvc2l0aW9uRGF0YVtpXS5oZWlnaHQgKyBcInB4OyBcIjtcblx0XHRcdFx0dmFyIHN0eWxlXzUgPSAnXCI+JztcblxuXHRcdFx0XHR2YXIgc3R5bGUgPSBzdHlsZV8xICsgc3R5bGVfMiArIHN0eWxlXzMgKyBzdHlsZV80ICsgc3R5bGVfNTtcblxuXHRcdFx0XHR2YXIgZW5kID0gXCI8L2Rpdj5cIjtcblxuXHRcdFx0XHR2YXIgZ3JpZEl0ZW0gPSBncmlkRnJvbnQgKyBzdHlsZSArIGVuZDtcblx0XHRcdFx0dmFyIGJvZHlJdGVtID0gYm9keUZyb250ICsgc3R5bGUgKyBlbmQ7XG5cblx0XHRcdFx0Z3JpZEh0bWwucHVzaChncmlkSXRlbSk7XG5cdFx0XHRcdGJvZHlIdG1sLnB1c2goYm9keUl0ZW0pO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgbGVuZ3RoXzAgPSBwb3NpdGlvbkRhdGEubGVuZ3RoO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHRcdHZhciBncmlkRnJvbnQgPVxuXHRcdFx0XHRcdCc8ZGl2IGNsYXNzID0gXCJsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtXCIgZGF0YS1pbmRleCA9IFwiJyArXG5cdFx0XHRcdFx0aSArXG5cdFx0XHRcdFx0J1wiICc7XG5cdFx0XHRcdHZhciBib2R5RnJvbnQgPVxuXHRcdFx0XHRcdCc8ZGl2IGNsYXNzID0gXCJsaW1iZXJHcmlkVmlld0JvZHlQc2V1ZG9JdGVtXCIgZGF0YS1pbmRleCA9IFwiJyArXG5cdFx0XHRcdFx0aSArXG5cdFx0XHRcdFx0J1wiICc7XG5cdFx0XHRcdHZhciBzdHlsZV8xID0gJ3N0eWxlID0gXCJ0cmFuc2Zvcm0gOiB0cmFuc2xhdGUoJyArIDAgKyBcInB4LCBcIjtcblx0XHRcdFx0dmFyIHN0eWxlXzIgPVxuXHRcdFx0XHRcdCh0aGlzLldJRFRIIC8gdGhpcy5NT0JJTEVfQVNQRUNUX1JBVElPICtcblx0XHRcdFx0XHRcdGdldE1hcmdpbkF0UG9pbnQuY2FsbChcblx0XHRcdFx0XHRcdFx0dGhpcyxcblx0XHRcdFx0XHRcdFx0dGhpcy5zZXJpYWxpemVkUG9zaXRpb25EYXRhLm1hcFtpXVxuXHRcdFx0XHRcdFx0KSkgKlxuXHRcdFx0XHRcdFx0dGhpcy5zZXJpYWxpemVkUG9zaXRpb25EYXRhLm1hcFtpXSArXG5cdFx0XHRcdFx0XCJweCk7IFwiO1xuXHRcdFx0XHR2YXIgc3R5bGVfMyA9IFwid2lkdGggOiBcIiArIHRoaXMuV0lEVEggKyBcInB4OyBcIjtcblx0XHRcdFx0dmFyIHN0eWxlXzQgPVxuXHRcdFx0XHRcdFwiaGVpZ2h0IDogXCIgK1xuXHRcdFx0XHRcdHRoaXMuV0lEVEggLyB0aGlzLk1PQklMRV9BU1BFQ1RfUkFUSU8gK1xuXHRcdFx0XHRcdFwicHg7IFwiO1xuXHRcdFx0XHR2YXIgc3R5bGVfNSA9IFwibWFyZ2luIDogXCIgKyB0aGlzLk1BUkdJTiArICdweDtcIj4nO1xuXG5cdFx0XHRcdHZhciBzdHlsZSA9IHN0eWxlXzEgKyBzdHlsZV8yICsgc3R5bGVfMyArIHN0eWxlXzQgKyBzdHlsZV81O1xuXG5cdFx0XHRcdHZhciBlbmQgPSBcIjwvZGl2PlwiO1xuXG5cdFx0XHRcdHZhciBncmlkSXRlbSA9IGdyaWRGcm9udCArIHN0eWxlICsgZW5kO1xuXHRcdFx0XHR2YXIgYm9keUl0ZW0gPSBib2R5RnJvbnQgKyBzdHlsZSArIGVuZDtcblxuXHRcdFx0XHRncmlkSHRtbC5wdXNoKGdyaWRJdGVtKTtcblx0XHRcdFx0Ym9keUh0bWwucHVzaChib2R5SXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHZhciBsaW1iZXJHcmlkVmlld01vdmVHdWlkZSA9XG5cdFx0XHQnPGRpdiBjbGFzcyA9IFwibGltYmVyR3JpZFZpZXdNb3ZlR3VpZGVcIj48L2Rpdj4nO1xuXHRcdHZhciBsaW1iZXJHcmlkVmlld0hlaWdodEFkanVzdEd1aWRlID1cblx0XHRcdCc8ZGl2IGNsYXNzID0gXCJsaW1iZXJHcmlkVmlld0hlaWdodEFkanVzdEd1aWRlXCI+PC9kaXY+Jztcblx0XHR2YXIgbGltYmVyR3JpZFZpZXdBZGRJdGVtR3VpZGUgPVxuXHRcdFx0JzxkaXYgY2xhc3MgPSBcImxpbWJlckdyaWRWaWV3QWRkSXRlbUd1aWRlXCI+PC9kaXY+Jztcblx0XHR2YXIgbGltYmVyR3JpZFZpZXdBZGRJdGVtT25Ub3VjaEhvbGRHdWlkZSA9XG5cdFx0XHQnPGRpdiBjbGFzcyA9IFwibGltYmVyR3JpZFZpZXdBZGRJdGVtT25Ub3VjaEhvbGRHdWlkZVwiPjwvZGl2Pic7XG5cdFx0Z3JpZEh0bWwucHVzaChsaW1iZXJHcmlkVmlld01vdmVHdWlkZSk7XG5cdFx0Z3JpZEh0bWwucHVzaChsaW1iZXJHcmlkVmlld0hlaWdodEFkanVzdEd1aWRlKTtcblx0XHRncmlkSHRtbC5wdXNoKGxpbWJlckdyaWRWaWV3QWRkSXRlbUd1aWRlKTtcblx0XHRncmlkSHRtbC5wdXNoKGxpbWJlckdyaWRWaWV3QWRkSXRlbU9uVG91Y2hIb2xkR3VpZGUpO1xuXG5cdFx0dGhpcy4kYm9keVBzZXVkb0VsLmlubmVySFRNTCA9IGJvZHlIdG1sLmpvaW4oXCJcIik7XG5cdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdbMF0uaW5zZXJ0QWRqYWNlbnRIVE1MKFxuXHRcdFx0XCJiZWZvcmVlbmRcIixcblx0XHRcdGdyaWRIdG1sLmpvaW4oXCJcIilcblx0XHQpO1xuXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1zID0gdGhpcy4kbGltYmVyR3JpZFZpZXdbMF0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcblx0XHRcdFwibGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbVwiXG5cdFx0KTtcblx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0JvZHlQc2V1ZG9JdGVtcyA9IHRoaXMuJGJvZHlQc2V1ZG9FbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxuXHRcdFx0XCJsaW1iZXJHcmlkVmlld0JvZHlQc2V1ZG9JdGVtXCJcblx0XHQpO1xuXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3TW92ZUd1aWRlID0gdGhpcy4kbGltYmVyR3JpZFZpZXdbMF0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcblx0XHRcdFwibGltYmVyR3JpZFZpZXdNb3ZlR3VpZGVcIlxuXHRcdCk7XG5cdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdIZWlnaHRBZGp1c3RHdWlkZSA9IHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG5cdFx0XHRcImxpbWJlckdyaWRWaWV3SGVpZ2h0QWRqdXN0R3VpZGVcIlxuXHRcdCk7XG5cdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdBZGRJdGVtR3VpZGUgPSB0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxuXHRcdFx0XCJsaW1iZXJHcmlkVmlld0FkZEl0ZW1HdWlkZVwiXG5cdFx0KTtcblx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0FkZEl0ZW1PblRvdWNoSG9sZEd1aWRlID0gdGhpcy4kbGltYmVyR3JpZFZpZXdbMF0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcblx0XHRcdFwibGltYmVyR3JpZFZpZXdBZGRJdGVtT25Ub3VjaEhvbGRHdWlkZVwiXG5cdFx0KTtcblx0fTtcblxuXHRMaW1iZXJHcmlkVmlldy5wcm90b3R5cGUucmVuZGVySXRlbXMgPSBmdW5jdGlvbihcblx0XHRpdGVtcyxcblx0XHRzY2FsZSA9IHRydWUsXG5cdFx0cHJvY2Vzc1R5cGUgPSBcIm9uRGVtYW5kXCJcblx0KSB7XG5cdFx0dGhpcy51bkluaXRpYWxpemVFdmVudHMoKTtcblx0XHR2YXIgc2Nyb2xsVG9wID0gdGhpcy4kbGltYmVyR3JpZFZpZXdbMF0uc2Nyb2xsVG9wO1xuXHRcdGlmIChzY2FsZSA9PSB0cnVlKSB7XG5cdFx0XHR2YXIgV0lEVEhfU0NBTEVfRkFDVE9SID0gdGhpcy5XSURUSF9TQ0FMRV9GQUNUT1I7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBXSURUSF9TQ0FMRV9GQUNUT1IgPSAxO1xuXHRcdH1cblxuXHRcdHZhciBjbGFzc0xpc3QgPSBbXCJsaW1iZXJHcmlkVmlld0l0ZW1cIl07XG5cdFx0aWYgKHRoaXMub3B0aW9ucy5lZGl0YWJsZSA9PSB0cnVlKSB7XG5cdFx0XHRjbGFzc0xpc3QucHVzaChcImxpbWJlckdyaWRWaWV3SXRlbUVkaXRhYmxlXCIpO1xuXHRcdH1cblxuXHRcdHZhciBodG1sID0gW107XG5cblx0XHQvLyBkZXYgQ29kZVxuXHRcdHZhciB0MCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuXHRcdC8vIGRldiBDb2RlIEVORFxuXHRcdGlmICghdGhpcy5pc01vYmlsZSgpKSB7XG5cdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0NvbnRhaW5lclswXS5yZW1vdmVDaGlsZChcblx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdbMF1cblx0XHRcdCk7XG5cdFx0XHR2YXIgbGVuZ3RoXzAgPSBpdGVtcy5sZW5ndGg7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF8wOyBpKyspIHtcblx0XHRcdFx0dGhpcy5wb3NpdGlvbkRhdGFbaXRlbXNbaV1dLndpZHRoICo9IFdJRFRIX1NDQUxFX0ZBQ1RPUjtcblx0XHRcdFx0aWYgKHRoaXMucG9zaXRpb25EYXRhW2l0ZW1zW2ldXS53aWR0aCA+IHRoaXMuV0lEVEgpIHtcblx0XHRcdFx0XHR0aGlzLnBvc2l0aW9uRGF0YVtpdGVtc1tpXV0ud2lkdGggPSB0aGlzLldJRFRIO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0XHR2YXIgYXR0cmlidXRlID0gZG9jdW1lbnQuY3JlYXRlQXR0cmlidXRlKFwiZGF0YS1pbmRleFwiKTtcblx0XHRcdFx0YXR0cmlidXRlLnZhbHVlID0gaXRlbXNbaV07XG5cdFx0XHRcdGRpdi5zZXRBdHRyaWJ1dGVOb2RlKGF0dHJpYnV0ZSk7XG5cblx0XHRcdFx0aWYgKGNsYXNzTGlzdC5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0ZGl2LmNsYXNzTGlzdC5hZGQoY2xhc3NMaXN0WzBdKTtcblx0XHRcdFx0XHRkaXYuY2xhc3NMaXN0LmFkZChjbGFzc0xpc3RbMV0pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGRpdi5jbGFzc0xpc3QuYWRkKGNsYXNzTGlzdFswXSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRkaXYuc3R5bGUudHJhbnNmb3JtID1cblx0XHRcdFx0XHRcInRyYW5zbGF0ZShcIiArXG5cdFx0XHRcdFx0KHRoaXMucG9zaXRpb25EYXRhW2l0ZW1zW2ldXS54ICo9IFdJRFRIX1NDQUxFX0ZBQ1RPUikgK1xuXHRcdFx0XHRcdFwicHgsIFwiICtcblx0XHRcdFx0XHQodGhpcy5wb3NpdGlvbkRhdGFbaXRlbXNbaV1dLnkgKj0gV0lEVEhfU0NBTEVfRkFDVE9SKSArXG5cdFx0XHRcdFx0XCJweClcIjtcblx0XHRcdFx0ZGl2LnN0eWxlLndpZHRoID0gdGhpcy5wb3NpdGlvbkRhdGFbaXRlbXNbaV1dLndpZHRoICsgXCJweFwiO1xuXHRcdFx0XHRkaXYuc3R5bGUuaGVpZ2h0ID1cblx0XHRcdFx0XHQodGhpcy5wb3NpdGlvbkRhdGFbaXRlbXNbaV1dLmhlaWdodCAqPSBXSURUSF9TQ0FMRV9GQUNUT1IpICtcblx0XHRcdFx0XHRcInB4XCI7XG5cblx0XHRcdFx0dmFyIHVzZXJEYXRhID0gdGhpcy5jYWxsYmFja3MuZ2V0SXRlbVJlbmRlckRhdGFDYWxsYmFjayhcblx0XHRcdFx0XHRpdGVtc1tpXSxcblx0XHRcdFx0XHR0aGlzLnBvc2l0aW9uRGF0YVtpdGVtc1tpXV0ud2lkdGgsXG5cdFx0XHRcdFx0dGhpcy5wb3NpdGlvbkRhdGFbaXRlbXNbaV1dLmhlaWdodCxcblx0XHRcdFx0XHRwcm9jZXNzVHlwZVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRpZiAodHlwZW9mIHVzZXJEYXRhID09IFwic3RyaW5nXCIpIHtcblx0XHRcdFx0XHRkaXYuaW5uZXJIVE1MID0gdXNlckRhdGE7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZGl2LmFwcGVuZENoaWxkKHVzZXJEYXRhKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0l0ZW1zW2l0ZW1zW2ldXSA9PSB1bmRlZmluZWQgfHxcblx0XHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0l0ZW1zW2l0ZW1zW2ldXSA9PSBudWxsXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLmFwcGVuZENoaWxkKGRpdik7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdbMF0ucmVwbGFjZUNoaWxkKFxuXHRcdFx0XHRcdFx0ZGl2LFxuXHRcdFx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdJdGVtc1tpdGVtc1tpXV1cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0NvbnRhaW5lclswXS5hcHBlbmRDaGlsZChcblx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdbMF1cblx0XHRcdCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3Q29udGFpbmVyWzBdLnJlbW92ZUNoaWxkKFxuXHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld1swXVxuXHRcdFx0KTtcblx0XHRcdHZhciBsZW5ndGhfMCA9IGl0ZW1zLmxlbmd0aDtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHRcdFx0XHR2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdFx0dmFyIGF0dHJpYnV0ZSA9IGRvY3VtZW50LmNyZWF0ZUF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIik7XG5cdFx0XHRcdGF0dHJpYnV0ZS52YWx1ZSA9IGl0ZW1zW2ldO1xuXHRcdFx0XHRkaXYuc2V0QXR0cmlidXRlTm9kZShhdHRyaWJ1dGUpO1xuXG5cdFx0XHRcdGRpdi5jbGFzc0xpc3QuYWRkKFwibGltYmVyR3JpZFZpZXdJdGVtXCIpO1xuXHRcdFx0XHRkaXYuc3R5bGUudHJhbnNmb3JtID1cblx0XHRcdFx0XHRcInRyYW5zbGF0ZShcIiArXG5cdFx0XHRcdFx0MCArXG5cdFx0XHRcdFx0XCJweCwgXCIgK1xuXHRcdFx0XHRcdCh0aGlzLldJRFRIIC8gdGhpcy5NT0JJTEVfQVNQRUNUX1JBVElPICtcblx0XHRcdFx0XHRcdGdldE1hcmdpbkF0UG9pbnQuY2FsbChcblx0XHRcdFx0XHRcdFx0dGhpcyxcblx0XHRcdFx0XHRcdFx0dGhpcy5zZXJpYWxpemVkUG9zaXRpb25EYXRhLm1hcFtpdGVtc1tpXV1cblx0XHRcdFx0XHRcdCkpICpcblx0XHRcdFx0XHRcdHRoaXMuc2VyaWFsaXplZFBvc2l0aW9uRGF0YS5tYXBbaXRlbXNbaV1dICtcblx0XHRcdFx0XHRcInB4KVwiO1xuXHRcdFx0XHRkaXYuc3R5bGUud2lkdGggPSB0aGlzLldJRFRIICsgXCJweFwiO1xuXHRcdFx0XHRkaXYuc3R5bGUuaGVpZ2h0ID0gdGhpcy5XSURUSCAvIHRoaXMuTU9CSUxFX0FTUEVDVF9SQVRJTyArIFwicHhcIjtcblxuXHRcdFx0XHR2YXIgdXNlckRhdGEgPSB0aGlzLmNhbGxiYWNrcy5nZXRJdGVtUmVuZGVyRGF0YUNhbGxiYWNrKFxuXHRcdFx0XHRcdGl0ZW1zW2ldLFxuXHRcdFx0XHRcdHRoaXMuV0lEVEgsXG5cdFx0XHRcdFx0dGhpcy5XSURUSCAvIHRoaXMuTU9CSUxFX0FTUEVDVF9SQVRJTyxcblx0XHRcdFx0XHRwcm9jZXNzVHlwZVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRpZiAodHlwZW9mIHVzZXJEYXRhID09IFwic3RyaW5nXCIpIHtcblx0XHRcdFx0XHRkaXYuaW5uZXJIVE1MID0gdXNlckRhdGE7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZGl2LmFwcGVuZENoaWxkKHVzZXJEYXRhKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0l0ZW1zW2l0ZW1zW2ldXSA9PSB1bmRlZmluZWQgfHxcblx0XHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0l0ZW1zW2l0ZW1zW2ldXSA9PSBudWxsXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLmFwcGVuZENoaWxkKGRpdik7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdbMF0ucmVwbGFjZUNoaWxkKFxuXHRcdFx0XHRcdFx0ZGl2LFxuXHRcdFx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdJdGVtc1tpdGVtc1tpXV1cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0NvbnRhaW5lclswXS5hcHBlbmRDaGlsZChcblx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdbMF1cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0Ly8gZGV2IENvZGVcblx0XHR2YXIgdDEgPSBwZXJmb3JtYW5jZS5ub3coKTtcblx0XHRjb25zb2xlLmxvZyh0MCk7XG5cdFx0Y29uc29sZS5sb2codDEpO1xuXHRcdGNvbnNvbGUubG9nKHQxIC0gdDApO1xuXHRcdC8vIGRldiBDb2RlIEVORFxuXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3SXRlbXMgPSB0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5xdWVyeVNlbGVjdG9yQWxsKFxuXHRcdFx0XCIubGltYmVyR3JpZFZpZXdJdGVtXCJcblx0XHQpO1xuXG5cdFx0dGhpcy5yZW5kZXJQc2V1ZG9JdGVtcyhpdGVtcyk7XG5cblx0XHR0aGlzLmluaXRpYWxpemVWYXJpYWJsZXMoKTtcblx0XHR0aGlzLmluaXRpYWxpemVFdmVudHMoKTtcblxuXHRcdHZhciByZW5kZXJEZXRhaWxzID0ge1xuXHRcdFx0aXRlbXM6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoaXRlbXMpKSxcblx0XHRcdHNjYWxlOiBzY2FsZSxcblx0XHRcdHByb2Nlc3NUeXBlOiBwcm9jZXNzVHlwZVxuXHRcdH07XG5cblx0XHRpZiAoXG5cdFx0XHR0aGlzLmNhbGxiYWNrcy5pdGVtc1JlbmRlckNvbXBsZXRlICE9IHVuZGVmaW5lZCAmJlxuXHRcdFx0dGhpcy5jYWxsYmFja3MuaXRlbXNSZW5kZXJDb21wbGV0ZSAhPSBudWxsICYmXG5cdFx0XHRwcm9jZXNzVHlwZSAhPSBcImFkZEl0ZW1zXCIgJiZcblx0XHRcdHByb2Nlc3NUeXBlICE9IFwicmVzaXplSXRlbXNcIiAmJlxuXHRcdFx0cHJvY2Vzc1R5cGUgIT0gXCJyZW1vdmVJdGVtc1wiICYmXG5cdFx0XHRwcm9jZXNzVHlwZSAhPSBcImFkZEl0ZW1JbnRlcmFjdGl2ZVwiXG5cdFx0KSB7XG5cdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5zY3JvbGxUb3AgPSBzY3JvbGxUb3A7XG5cdFx0XHR0aGlzLmNhbGxiYWNrcy5pdGVtc1JlbmRlckNvbXBsZXRlKFxuXHRcdFx0XHRyZW5kZXJEZXRhaWxzLml0ZW1zLFxuXHRcdFx0XHRzY2FsZSxcblx0XHRcdFx0cHJvY2Vzc1R5cGUsXG5cdFx0XHRcdHNjcm9sbFRvcFxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVuZGVyRGV0YWlscztcblx0fTtcblxuXHRMaW1iZXJHcmlkVmlldy5wcm90b3R5cGUucmVuZGVyUHNldWRvSXRlbXMgPSBmdW5jdGlvbihpdGVtcykge1xuXHRcdHZhciBncmlkSHRtbCA9IFtdO1xuXHRcdHZhciBib2R5SHRtbCA9IFtdO1xuXG5cdFx0aWYgKCF0aGlzLmlzTW9iaWxlKCkpIHtcblx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3Q29udGFpbmVyWzBdLnJlbW92ZUNoaWxkKFxuXHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld1swXVxuXHRcdFx0KTtcblx0XHRcdHRoaXMuJGJvZHlbMF0ucmVtb3ZlQ2hpbGQodGhpcy4kYm9keVBzZXVkb0VsKTtcblx0XHRcdHZhciBsZW5ndGhfMCA9IGl0ZW1zLmxlbmd0aDtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHRcdFx0XHR2YXIgZGl2R3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRcdHZhciBhdHRyaWJ1dGVHcmlkID0gZG9jdW1lbnQuY3JlYXRlQXR0cmlidXRlKFwiZGF0YS1pbmRleFwiKTtcblx0XHRcdFx0YXR0cmlidXRlR3JpZC52YWx1ZSA9IGl0ZW1zW2ldO1xuXHRcdFx0XHRkaXZHcmlkLnNldEF0dHJpYnV0ZU5vZGUoYXR0cmlidXRlR3JpZCk7XG5cdFx0XHRcdGRpdkdyaWQuY2xhc3NMaXN0LmFkZChcImxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1cIik7XG5cdFx0XHRcdGRpdkdyaWQuc3R5bGUudHJhbnNmb3JtID1cblx0XHRcdFx0XHRcInRyYW5zbGF0ZShcIiArXG5cdFx0XHRcdFx0dGhpcy5wb3NpdGlvbkRhdGFbaXRlbXNbaV1dLnggK1xuXHRcdFx0XHRcdFwicHgsIFwiICtcblx0XHRcdFx0XHR0aGlzLnBvc2l0aW9uRGF0YVtpdGVtc1tpXV0ueSArXG5cdFx0XHRcdFx0XCJweClcIjtcblx0XHRcdFx0ZGl2R3JpZC5zdHlsZS53aWR0aCA9IHRoaXMucG9zaXRpb25EYXRhW2l0ZW1zW2ldXS53aWR0aCArIFwicHhcIjtcblx0XHRcdFx0ZGl2R3JpZC5zdHlsZS5oZWlnaHQgPVxuXHRcdFx0XHRcdHRoaXMucG9zaXRpb25EYXRhW2l0ZW1zW2ldXS5oZWlnaHQgKyBcInB4XCI7XG5cblx0XHRcdFx0dmFyIGRpdkJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0XHR2YXIgYXR0cmlidXRlQm9keSA9IGRvY3VtZW50LmNyZWF0ZUF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIik7XG5cdFx0XHRcdGF0dHJpYnV0ZUJvZHkudmFsdWUgPSBpdGVtc1tpXTtcblx0XHRcdFx0ZGl2Qm9keS5zZXRBdHRyaWJ1dGVOb2RlKGF0dHJpYnV0ZUJvZHkpO1xuXHRcdFx0XHRkaXZCb2R5LmNsYXNzTGlzdC5hZGQoXCJsaW1iZXJHcmlkVmlld0JvZHlQc2V1ZG9JdGVtXCIpO1xuXHRcdFx0XHRkaXZCb2R5LnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlKFwiICsgMCArIFwicHgsIFwiICsgMCArIFwicHgpXCI7XG5cdFx0XHRcdGRpdkJvZHkuc3R5bGUud2lkdGggPSB0aGlzLnBvc2l0aW9uRGF0YVtpdGVtc1tpXV0ud2lkdGggKyBcInB4XCI7XG5cdFx0XHRcdGRpdkJvZHkuc3R5bGUuaGVpZ2h0ID1cblx0XHRcdFx0XHR0aGlzLnBvc2l0aW9uRGF0YVtpdGVtc1tpXV0uaGVpZ2h0ICsgXCJweFwiO1xuXG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtc1tpdGVtc1tpXV0gPT1cblx0XHRcdFx0XHRcdHVuZGVmaW5lZCB8fFxuXHRcdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1zW2l0ZW1zW2ldXSA9PSBudWxsXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLmFwcGVuZENoaWxkKGRpdkdyaWQpO1xuXHRcdFx0XHRcdHRoaXMuJGJvZHlQc2V1ZG9FbC5hcHBlbmRDaGlsZChkaXZCb2R5KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5yZXBsYWNlQ2hpbGQoXG5cdFx0XHRcdFx0XHRkaXZHcmlkLFxuXHRcdFx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbXNbaXRlbXNbaV1dXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR0aGlzLiRib2R5UHNldWRvRWwucmVwbGFjZUNoaWxkKFxuXHRcdFx0XHRcdFx0ZGl2Qm9keSxcblx0XHRcdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3Qm9keVBzZXVkb0l0ZW1zW2l0ZW1zW2ldXVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3Q29udGFpbmVyWzBdLmFwcGVuZENoaWxkKFxuXHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld1swXVxuXHRcdFx0KTtcblx0XHRcdHRoaXMuJGJvZHlbMF0uYXBwZW5kQ2hpbGQodGhpcy4kYm9keVBzZXVkb0VsKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdDb250YWluZXJbMF0ucmVtb3ZlQ2hpbGQoXG5cdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdXG5cdFx0XHQpO1xuXHRcdFx0dGhpcy4kYm9keVswXS5yZW1vdmVDaGlsZCh0aGlzLiRib2R5UHNldWRvRWwpO1xuXHRcdFx0dmFyIGxlbmd0aF8wID0gaXRlbXMubGVuZ3RoO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHRcdHZhciBkaXZHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdFx0dmFyIGF0dHJpYnV0ZUdyaWQgPSBkb2N1bWVudC5jcmVhdGVBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIpO1xuXHRcdFx0XHRhdHRyaWJ1dGVHcmlkLnZhbHVlID0gaXRlbXNbaV07XG5cdFx0XHRcdGRpdkdyaWQuc2V0QXR0cmlidXRlTm9kZShhdHRyaWJ1dGVHcmlkKTtcblx0XHRcdFx0ZGl2R3JpZC5jbGFzc0xpc3QuYWRkKFwibGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbVwiKTtcblx0XHRcdFx0ZGl2R3JpZC5zdHlsZS50cmFuc2Zvcm0gPVxuXHRcdFx0XHRcdFwidHJhbnNsYXRlKFwiICtcblx0XHRcdFx0XHQwICtcblx0XHRcdFx0XHRcInB4LCBcIiArXG5cdFx0XHRcdFx0KHRoaXMuV0lEVEggLyB0aGlzLk1PQklMRV9BU1BFQ1RfUkFUSU8gK1xuXHRcdFx0XHRcdFx0Z2V0TWFyZ2luQXRQb2ludC5jYWxsKFxuXHRcdFx0XHRcdFx0XHR0aGlzLFxuXHRcdFx0XHRcdFx0XHR0aGlzLnNlcmlhbGl6ZWRQb3NpdGlvbkRhdGEubWFwW2ldXG5cdFx0XHRcdFx0XHQpKSAqXG5cdFx0XHRcdFx0XHR0aGlzLnNlcmlhbGl6ZWRQb3NpdGlvbkRhdGEubWFwW2ldICtcblx0XHRcdFx0XHRcInB4KVwiO1xuXHRcdFx0XHRkaXZHcmlkLnN0eWxlLndpZHRoID0gdGhpcy5XSURUSCArIFwicHhcIjtcblx0XHRcdFx0ZGl2R3JpZC5zdHlsZS5oZWlnaHQgPVxuXHRcdFx0XHRcdHRoaXMuV0lEVEggLyB0aGlzLk1PQklMRV9BU1BFQ1RfUkFUSU8gKyBcInB4XCI7XG5cblx0XHRcdFx0dmFyIGRpdkJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0XHR2YXIgYXR0cmlidXRlQm9keSA9IGRvY3VtZW50LmNyZWF0ZUF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIik7XG5cdFx0XHRcdGF0dHJpYnV0ZUJvZHkudmFsdWUgPSBpdGVtc1tpXTtcblx0XHRcdFx0ZGl2Qm9keS5zZXRBdHRyaWJ1dGVOb2RlKGF0dHJpYnV0ZUJvZHkpO1xuXHRcdFx0XHRkaXZCb2R5LmNsYXNzTGlzdC5hZGQoXCJsaW1iZXJHcmlkVmlld0JvZHlQc2V1ZG9JdGVtXCIpO1xuXHRcdFx0XHRkaXZCb2R5LnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlKFwiICsgMCArIFwicHgsIFwiICsgMCArIFwicHgpXCI7XG5cdFx0XHRcdGRpdkJvZHkuc3R5bGUud2lkdGggPSB0aGlzLldJRFRIICsgXCJweFwiO1xuXHRcdFx0XHRkaXZCb2R5LnN0eWxlLmhlaWdodCA9XG5cdFx0XHRcdFx0dGhpcy5XSURUSCAvIHRoaXMuTU9CSUxFX0FTUEVDVF9SQVRJTyArIFwicHhcIjtcblxuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbXNbaXRlbXNbaV1dID09XG5cdFx0XHRcdFx0XHR1bmRlZmluZWQgfHxcblx0XHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtc1tpdGVtc1tpXV0gPT0gbnVsbFxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5hcHBlbmRDaGlsZChkaXZHcmlkKTtcblx0XHRcdFx0XHR0aGlzLiRib2R5UHNldWRvRWwuYXBwZW5kQ2hpbGQoZGl2Qm9keSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdbMF0ucmVwbGFjZUNoaWxkKFxuXHRcdFx0XHRcdFx0ZGl2R3JpZCxcblx0XHRcdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1zW2l0ZW1zW2ldXVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0dGhpcy4kYm9keVBzZXVkb0VsLnJlcGxhY2VDaGlsZChcblx0XHRcdFx0XHRcdGRpdkJvZHksXG5cdFx0XHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0JvZHlQc2V1ZG9JdGVtc1tpdGVtc1tpXV1cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0NvbnRhaW5lclswXS5hcHBlbmRDaGlsZChcblx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdbMF1cblx0XHRcdCk7XG5cdFx0XHR0aGlzLiRib2R5WzBdLmFwcGVuZENoaWxkKHRoaXMuJGJvZHlQc2V1ZG9FbCk7XG5cdFx0fVxuXG5cdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbXMgPSB0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxuXHRcdFx0XCJsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtXCJcblx0XHQpO1xuXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3Qm9keVBzZXVkb0l0ZW1zID0gdGhpcy4kYm9keVBzZXVkb0VsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG5cdFx0XHRcImxpbWJlckdyaWRWaWV3Qm9keVBzZXVkb0l0ZW1cIlxuXHRcdCk7XG5cdH07XG5cblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gUkVOREVSRVJTIEVORCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gQUREIE9SIFJFTU9WRSBJVEVNUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cblx0TGltYmVyR3JpZFZpZXcucHJvdG90eXBlLnJlbW92ZUl0ZW1zID0gZnVuY3Rpb24oaXRlbXNJbmRpY2VzKSB7XG5cdFx0dGhpcy51bkluaXRpYWxpemVFdmVudHMoKTtcblxuXHRcdHZhciBzY3JvbGxUb3AgPSB0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5zY3JvbGxUb3A7XG5cblx0XHR2YXIgaXRlbXNUb1JlbmRlciA9IFtdO1xuXHRcdHZhciBsZW5ndGhfMCA9IHRoaXMucG9zaXRpb25EYXRhLmxlbmd0aCAtIDE7XG5cdFx0Zm9yICh2YXIgaSA9IGxlbmd0aF8wOyBpID49IDA7IGktLSkge1xuXHRcdFx0dmFyIGluZGV4ID0gaTtcblxuXHRcdFx0aXRlbXNUb1JlbmRlci5wdXNoKGxlbmd0aF8wIC0gaSk7XG5cdFx0fVxuXG5cdFx0aXRlbXNJbmRpY2VzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0cmV0dXJuIE51bWJlcihhKSAtIE51bWJlcihiKTtcblx0XHR9KTtcblx0XHR2YXIgbGVuZ3RoXzAgPSBpdGVtc0luZGljZXMubGVuZ3RoIC0gMTtcblx0XHRmb3IgKHZhciBpID0gbGVuZ3RoXzA7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHR2YXIgaW5kZXggPSBpdGVtc0luZGljZXNbaV07XG5cdFx0XHR0aGlzLnBvc2l0aW9uRGF0YS5zcGxpY2UoaW5kZXgsIDEpO1xuXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXMuJGxpbWJlckdyaWRWaWV3SXRlbXNbaW5kZXhdO1xuXHRcdFx0dmFyIHBzZXVkb0dyaWRJdGVtID0gdGhpcy4kbGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbXNbaW5kZXhdO1xuXHRcdFx0dmFyIHBzZXVkb0JvZHlJdGVtID0gdGhpcy4kbGltYmVyR3JpZFZpZXdCb2R5UHNldWRvSXRlbXNbaW5kZXhdO1xuXG5cdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5yZW1vdmVDaGlsZChpdGVtKTtcblx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLnJlbW92ZUNoaWxkKHBzZXVkb0dyaWRJdGVtKTtcblx0XHRcdHRoaXMuJGJvZHlQc2V1ZG9FbC5yZW1vdmVDaGlsZChwc2V1ZG9Cb2R5SXRlbSk7XG5cblx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3SXRlbXMgPSB0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5xdWVyeVNlbGVjdG9yQWxsKFxuXHRcdFx0XHRcIi5saW1iZXJHcmlkVmlld0l0ZW1cIlxuXHRcdFx0KTtcblx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1zID0gdGhpcy4kbGltYmVyR3JpZFZpZXdbMF0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcblx0XHRcdFx0XCJsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtXCJcblx0XHRcdCk7XG5cdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0JvZHlQc2V1ZG9JdGVtcyA9IHRoaXMuJGJvZHlQc2V1ZG9FbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxuXHRcdFx0XHRcImxpbWJlckdyaWRWaWV3Qm9keVBzZXVkb0l0ZW1cIlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRpdGVtc1RvUmVuZGVyLnNwbGljZSh0aGlzLnBvc2l0aW9uRGF0YS5sZW5ndGgpO1xuXG5cdFx0aWYgKHRoaXMuaXNNb2JpbGUoKSkge1xuXHRcdFx0dGhpcy5zZXJpYWxpemVkUG9zaXRpb25EYXRhID0gZ2V0Um93U2VxdWVuY2UuY2FsbCh0aGlzLCB0cnVlKTtcblx0XHR9XG5cblx0XHR0aGlzLnJlbmRlckl0ZW1zKGl0ZW1zVG9SZW5kZXIsIGZhbHNlLCBcInJlbW92ZUl0ZW1zXCIpO1xuXG5cdFx0aWYgKFxuXHRcdFx0dGhpcy5jYWxsYmFja3MucmVtb3ZlQ29tcGxldGVDYWxsYmFjayAhPSB1bmRlZmluZWQgJiZcblx0XHRcdHRoaXMuY2FsbGJhY2tzLnJlbW92ZUNvbXBsZXRlQ2FsbGJhY2sgIT0gbnVsbFxuXHRcdCkge1xuXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdbMF0uc2Nyb2xsVG9wID0gc2Nyb2xsVG9wO1xuXHRcdFx0dGhpcy5jYWxsYmFja3MucmVtb3ZlQ29tcGxldGVDYWxsYmFjayhpdGVtc0luZGljZXMpO1xuXHRcdH1cblx0fTtcblxuXHRMaW1iZXJHcmlkVmlldy5wcm90b3R5cGUuYWRkSXRlbXMgPSBmdW5jdGlvbihcblx0XHRob3dNYW55ID0gMSxcblx0XHRpdGVtV2lkdGggPSAxMDAsXG5cdFx0aXRlbUhlaWdodCA9IDEwMFxuXHQpIHtcblx0XHRpZiAoaG93TWFueSA9PSAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKGl0ZW1XaWR0aCA+IHRoaXMuV0lEVEgpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgc3RhcnRpbmdZID0gMDtcblx0XHR2YXIgbGVuZ3RoXzAgPSB0aGlzLnBvc2l0aW9uRGF0YS5sZW5ndGg7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdHRoaXMucG9zaXRpb25EYXRhW2ldLnkgKyB0aGlzLnBvc2l0aW9uRGF0YVtpXS5oZWlnaHQgPlxuXHRcdFx0XHRzdGFydGluZ1lcblx0XHRcdCkge1xuXHRcdFx0XHRzdGFydGluZ1kgPVxuXHRcdFx0XHRcdHRoaXMucG9zaXRpb25EYXRhW2ldLnkgKyB0aGlzLnBvc2l0aW9uRGF0YVtpXS5oZWlnaHQ7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHN0YXJ0aW5nWSA9IHN0YXJ0aW5nWSArIGdldE1hcmdpbkF0UG9pbnQuY2FsbCh0aGlzLCBzdGFydGluZ1kpO1xuXG5cdFx0dmFyIGl0ZW1zID0gW107XG5cblx0XHR2YXIgc2Nyb2xsVG9Qb3NpdGlvbiA9IHN0YXJ0aW5nWTtcblxuXHRcdHZhciByZW1haW5pbmdJdGVtcyA9IGhvd01hbnk7XG5cdFx0dmFyIHJlbWFpbmluZ1dpZHRoID0gdGhpcy5XSURUSDtcblx0XHR3aGlsZSAocmVtYWluaW5nSXRlbXMgIT0gMCkge1xuXHRcdFx0dmFyIHN0YXJ0aW5nWCA9IDA7XG5cdFx0XHR3aGlsZSAoXG5cdFx0XHRcdHJlbWFpbmluZ1dpZHRoID5cblx0XHRcdFx0XHRpdGVtV2lkdGggKyBnZXRNYXJnaW5BdFBvaW50LmNhbGwodGhpcywgc3RhcnRpbmdYKSAmJlxuXHRcdFx0XHRyZW1haW5pbmdJdGVtcyAhPSAwXG5cdFx0XHQpIHtcblx0XHRcdFx0dmFyIGl0ZW0gPSB7XG5cdFx0XHRcdFx0eDogZ2V0TWFyZ2luQXRQb2ludC5jYWxsKHRoaXMsIHN0YXJ0aW5nWCkgKyBzdGFydGluZ1gsXG5cdFx0XHRcdFx0eTogc3RhcnRpbmdZLFxuXHRcdFx0XHRcdHdpZHRoOiBpdGVtV2lkdGgsXG5cdFx0XHRcdFx0aGVpZ2h0OiBpdGVtSGVpZ2h0XG5cdFx0XHRcdH07XG5cblx0XHRcdFx0cmVtYWluaW5nV2lkdGggPVxuXHRcdFx0XHRcdHJlbWFpbmluZ1dpZHRoIC1cblx0XHRcdFx0XHRpdGVtV2lkdGggLVxuXHRcdFx0XHRcdGdldE1hcmdpbkF0UG9pbnQuY2FsbCh0aGlzLCBzdGFydGluZ1gpO1xuXHRcdFx0XHRzdGFydGluZ1ggPVxuXHRcdFx0XHRcdHN0YXJ0aW5nWCArXG5cdFx0XHRcdFx0Z2V0TWFyZ2luQXRQb2ludC5jYWxsKHRoaXMsIHN0YXJ0aW5nWCkgK1xuXHRcdFx0XHRcdGl0ZW1XaWR0aDtcblx0XHRcdFx0cmVtYWluaW5nSXRlbXMtLTtcblx0XHRcdFx0aXRlbXMucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHRcdHJlbWFpbmluZ1dpZHRoID0gdGhpcy5XSURUSDtcblx0XHRcdHN0YXJ0aW5nWSA9IHN0YXJ0aW5nWSArIGl0ZW1IZWlnaHQgKyB0aGlzLk1BUkdJTjtcblx0XHR9XG5cblx0XHR2YXIgc2Nyb2xsSGVpZ2h0ID0gdGhpcy4kbGltYmVyR3JpZFZpZXdbMF0uc2Nyb2xsSGVpZ2h0O1xuXG5cdFx0dmFyIHJlbmRlckRldGFpbHMgPSB0aGlzLmFkZEl0ZW1zQXRQb3NpdGlvbnMoaXRlbXMsIGZhbHNlLCBcImFkZEl0ZW1zXCIpO1xuXG5cdFx0aWYgKCF0aGlzLmlzTW9iaWxlKCkpIHtcblx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLnNjcm9sbFRvcCA9IHNjcm9sbFRvUG9zaXRpb247XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLnNjcm9sbFRvcCA9IHNjcm9sbEhlaWdodDtcblx0XHR9XG5cblx0XHRpZiAoXG5cdFx0XHR0aGlzLmNhbGxiYWNrcy5hZGRDb21wbGV0ZUNhbGxiYWNrICE9IHVuZGVmaW5lZCAmJlxuXHRcdFx0dGhpcy5jYWxsYmFja3MuYWRkQ29tcGxldGVDYWxsYmFjayAhPSBudWxsXG5cdFx0KSB7XG5cdFx0XHR0aGlzLmNhbGxiYWNrcy5hZGRDb21wbGV0ZUNhbGxiYWNrKFxuXHRcdFx0XHRyZW5kZXJEZXRhaWxzLml0ZW1zLFxuXHRcdFx0XHRpdGVtV2lkdGgsXG5cdFx0XHRcdGl0ZW1IZWlnaHQsXG5cdFx0XHRcdFwiYWRkSXRlbXNcIlxuXHRcdFx0KTtcblx0XHR9XG5cdH07XG5cblx0TGltYmVyR3JpZFZpZXcucHJvdG90eXBlLmFkZEl0ZW1zQXRQb3NpdGlvbnMgPSBmdW5jdGlvbihcblx0XHRpdGVtcyxcblx0XHRzY2FsZSA9IHRydWUsXG5cdFx0cHJvY2Vzc1R5cGUgPSBcIm9uRGVtYW5kXCJcblx0KSB7XG5cdFx0dmFyIGFkZEFycmF5ID0gW107XG5cdFx0dmFyIHN0YXJ0aW5nSW5kZXggPSB0aGlzLnBvc2l0aW9uRGF0YS5sZW5ndGg7XG5cblx0XHR2YXIgbGVuZ3RoXzAgPSBpdGVtcy5sZW5ndGg7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHRhZGRBcnJheS5wdXNoKHN0YXJ0aW5nSW5kZXggKyBpKTtcblx0XHRcdGlmICh0aGlzLmlzTW9iaWxlKCkpIHtcblx0XHRcdFx0dGhpcy5zZXJpYWxpemVkUG9zaXRpb25EYXRhLmxpc3QucHVzaChzdGFydGluZ0luZGV4ICsgaSk7XG5cdFx0XHRcdHRoaXMuc2VyaWFsaXplZFBvc2l0aW9uRGF0YS5tYXBbc3RhcnRpbmdJbmRleCArIGldID1cblx0XHRcdFx0XHR0aGlzLnNlcmlhbGl6ZWRQb3NpdGlvbkRhdGEubGlzdC5sZW5ndGggLSAxO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5wb3NpdGlvbkRhdGEucHVzaChpdGVtc1tpXSk7XG5cdFx0fVxuXG5cdFx0dmFyIHJlbmRlckRldGFpbHMgPSB0aGlzLnJlbmRlckl0ZW1zKGFkZEFycmF5LCBzY2FsZSwgcHJvY2Vzc1R5cGUpO1xuXG5cdFx0cmV0dXJuIHJlbmRlckRldGFpbHM7XG5cdH07XG5cblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gQUREIE9SIFJFTU9WRSBJVEVNUyBFTkQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gRVZFTlQgSU5JVElBTElaRVJTIEFORCBVTklOSVRJQUxJWkVSUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cblx0TGltYmVyR3JpZFZpZXcucHJvdG90eXBlLnJlSW5pdGlhbGl6ZUV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMudW5Jbml0aWFsaXplRXZlbnRzKCk7XG5cdFx0dGhpcy5pbml0aWFsaXplRXZlbnRzKCk7XG5cdH07XG5cblx0TGltYmVyR3JpZFZpZXcucHJvdG90eXBlLmluaXRpYWxpemVWYXJpYWJsZXMgPSBmdW5jdGlvbigpIHt9O1xuXG5cdExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5pbml0aWFsaXplRXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYgKHRoaXMub3B0aW9ucy5lZGl0YWJsZSA9PSB0cnVlKSB7XG5cdFx0XHRpZiAodGhpcy5pc01vYmlsZSgpID09IGZhbHNlKSB7XG5cdFx0XHRcdGlmICh0aGlzLm9wdGlvbnMuZW5hYmxlSW50ZXJhY3RpdmVBZGRBbmRDdXQgIT0gZmFsc2UpIHtcblx0XHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFx0XHRcdFx0XCJtb3VzZWRvd25cIixcblx0XHRcdFx0XHRcdHRoaXMub25MaW1iZXJHcmlkTW91c2VEb3duRnVuY3Rpb25WYXJpYWJsZVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy5lbmFibGVUb3VjaEludGVyYWN0aW9uICE9IGZhbHNlKSB7XG5cdFx0XHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFx0XHRcdFx0XHRcInRvdWNoc3RhcnRcIixcblx0XHRcdFx0XHRcdFx0dGhpcy5vbkxpbWJlckdyaWRUb3VjaFN0YXJ0RnVuY3Rpb25WYXJpYWJsZVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dmFyIGxlbmd0aF8wID0gdGhpcy4kbGltYmVyR3JpZFZpZXdJdGVtcy5sZW5ndGg7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF8wOyBpKyspIHtcblx0XHRcdFx0aWYgKHRoaXMuaXNNb2JpbGUoKSA9PSBmYWxzZSkge1xuXHRcdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3SXRlbXNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdFx0XHRcdFwibW91c2Vkb3duXCIsXG5cdFx0XHRcdFx0XHR0aGlzLm9uSXRlbU1vdXNlRG93bkZ1bmN0aW9uVmFyaWFibGVcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGlmICh0aGlzLm9wdGlvbnMuZW5hYmxlVG91Y2hJbnRlcmFjdGlvbiAhPSBmYWxzZSkge1xuXHRcdFx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdJdGVtc1tpXS5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFx0XHRcdFx0XHRcInRvdWNoc3RhcnRcIixcblx0XHRcdFx0XHRcdFx0dGhpcy5vbkl0ZW1Ub3VjaFN0YXJ0RnVuY3Rpb25WYXJpYWJsZVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0dGhpcy5jYWxsYmFja3Mub25JdGVtQ2xpY2tDYWxsYmFjayAhPSB1bmRlZmluZWQgJiZcblx0XHRcdFx0XHR0aGlzLmNhbGxiYWNrcy5vbkl0ZW1DbGlja0NhbGxiYWNrICE9IG51bGxcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdJdGVtc1tpXS5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFx0XHRcdFx0XCJjbGlja1wiLFxuXHRcdFx0XHRcdFx0dGhpcy5vbkl0ZW1DbGlja0Z1bmN0aW9uVmFyaWFibGVcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS51bkluaXRpYWxpemVFdmVudHMgPSBmdW5jdGlvbigpIHtcblx0XHRpZiAodGhpcy5vcHRpb25zLmVkaXRhYmxlID09IHRydWUpIHtcblx0XHRcdGlmICh0aGlzLiRsaW1iZXJHcmlkVmlldyAhPSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdbMF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0XHRcdFx0XHRcIm1vdXNlZG93blwiLFxuXHRcdFx0XHRcdHRoaXMub25MaW1iZXJHcmlkTW91c2VEb3duRnVuY3Rpb25WYXJpYWJsZVxuXHRcdFx0XHQpO1xuXHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5yZW1vdmVFdmVudExpc3RlbmVyKFxuXHRcdFx0XHRcdFwidG91Y2hzdGFydFwiLFxuXHRcdFx0XHRcdHRoaXMub25MaW1iZXJHcmlkVG91Y2hTdGFydEZ1bmN0aW9uVmFyaWFibGVcblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMuJGxpbWJlckdyaWRWaWV3SXRlbXMgIT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHZhciBsZW5ndGhfMCA9IHRoaXMuJGxpbWJlckdyaWRWaWV3SXRlbXMubGVuZ3RoO1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF8wOyBpKyspIHtcblx0XHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0l0ZW1zW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcdFx0XHRcIm1vdXNlZG93blwiLFxuXHRcdFx0XHRcdFx0dGhpcy5vbkl0ZW1Nb3VzZURvd25GdW5jdGlvblZhcmlhYmxlXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0l0ZW1zW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcdFx0XHRcInRvdWNoc3RhcnRcIixcblx0XHRcdFx0XHRcdHRoaXMub25JdGVtVG91Y2hTdGFydEZ1bmN0aW9uVmFyaWFibGVcblx0XHRcdFx0XHQpO1xuXG5cdFx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdJdGVtc1tpXS5yZW1vdmVFdmVudExpc3RlbmVyKFxuXHRcdFx0XHRcdFx0XCJjbGlja1wiLFxuXHRcdFx0XHRcdFx0dGhpcy5vbkl0ZW1DbGlja0Z1bmN0aW9uVmFyaWFibGVcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5pbml0aWFsaXplSXRlbVRvdWNoRXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYgKHRoaXMuJGxpbWJlckdyaWRWaWV3SXRlbXMgIT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR2YXIgbGVuZ3RoXzAgPSB0aGlzLiRsaW1iZXJHcmlkVmlld0l0ZW1zLmxlbmd0aDtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0l0ZW1zW2ldLmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcdFx0XCJtb3VzZWRvd25cIixcblx0XHRcdFx0XHR0aGlzLm9uSXRlbU1vdXNlRG93bkZ1bmN0aW9uVmFyaWFibGVcblx0XHRcdFx0KTtcblx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdJdGVtc1tpXS5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFx0XHRcdFwidG91Y2hzdGFydFwiLFxuXHRcdFx0XHRcdHRoaXMub25JdGVtVG91Y2hTdGFydEZ1bmN0aW9uVmFyaWFibGVcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0TGltYmVyR3JpZFZpZXcucHJvdG90eXBlLnVuSW5pdGlhbGl6ZUl0ZW1Ub3VjaEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmICh0aGlzLiRsaW1iZXJHcmlkVmlld0l0ZW1zICE9IHVuZGVmaW5lZCkge1xuXHRcdFx0dmFyIGxlbmd0aF8wID0gdGhpcy4kbGltYmVyR3JpZFZpZXdJdGVtcy5sZW5ndGg7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF8wOyBpKyspIHtcblx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdJdGVtc1tpXS5yZW1vdmVFdmVudExpc3RlbmVyKFxuXHRcdFx0XHRcdFwibW91c2Vkb3duXCIsXG5cdFx0XHRcdFx0dGhpcy5vbkl0ZW1Nb3VzZURvd25GdW5jdGlvblZhcmlhYmxlXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3SXRlbXNbaV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0XHRcdFx0XHRcInRvdWNoc3RhcnRcIixcblx0XHRcdFx0XHR0aGlzLm9uSXRlbVRvdWNoU3RhcnRGdW5jdGlvblZhcmlhYmxlXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEVWRU5UIElOSVRJQUxJWkVSUyBBTkQgVU5JTklUSUFMSVpFUlMgRU5EIC0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5cdExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5pc01vYmlsZSA9IGZ1bmN0aW9uKCkge1xuXHRcdC8vIHByb2R1Y3Rpb25cblx0XHRyZXR1cm4gd2luZG93Lm1hdGNoTWVkaWEoXG5cdFx0XHRcIm9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDMzcHgpIGFuZCAobWluLXdpZHRoIDogMXB4KVwiXG5cdFx0KS5tYXRjaGVzO1xuXHRcdC8vIHByb2R1Y3Rpb24gRU5EXG5cdFx0Ly8gcmV0dXJuIHdpbmRvdy5tYXRjaE1lZGlhKFwib25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSBhbmQgKG1pbi13aWR0aCA6IDFweClcIikubWF0Y2hlcztcblx0XHQvLyByZXR1cm4gZmFsc2U7XG5cdFx0Ly8gcmV0dXJuIHRydWU7XG5cdH07XG5cblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBQT1NJVElPTklORyBMT0dJQyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cblx0TGltYmVyR3JpZFZpZXcucHJvdG90eXBlLnJlc2l6ZVBsYW5lID0gZnVuY3Rpb24oaW5kZXgsIHdpZHRoLCBoZWlnaHQpIHtcblx0XHRpZiAodGhpcy5wb3NpdGlvbkRhdGFbaW5kZXhdLnggKyB3aWR0aCA+IHRoaXMuV0lEVEgpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiAodHlwZW9mIHdpZHRoICE9IFwibnVtYmVyXCIgfHwgdHlwZW9mIGhlaWdodCAhPSBcIm51bWJlclwiKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKHdpZHRoIDwgNTAgfHwgaGVpZ2h0IDwgNTApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHR2YXIgYWxsQWZmZWN0ZWRJdGVtcyA9IHRoaXMuZmluZEFmZmVjdGVkSXRlbXNPblJlc2l6ZShcblx0XHRcdGluZGV4LFxuXHRcdFx0d2lkdGgsXG5cdFx0XHRoZWlnaHRcblx0XHQpO1xuXG5cdFx0dmFyIGl0ZW0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMucG9zaXRpb25EYXRhW2luZGV4XSkpO1xuXHRcdGl0ZW0ud2lkdGggPSB3aWR0aDtcblx0XHRpdGVtLmhlaWdodCA9IGhlaWdodDtcblx0XHR2YXIgZnJlZVNwYWNlcyA9IHRoaXMuZmluZEZyZWVTcGFjZXMoXG5cdFx0XHRpdGVtLFxuXHRcdFx0YWxsQWZmZWN0ZWRJdGVtcy5hZmZlY3RlZEl0ZW1zXG5cdFx0KTtcblxuXHRcdC8vIE5PVyBNRVJHRSBGUkVFIFNQQUNFU1xuXHRcdGl0ZW0uZG9Ob3RNZXJnZUZsYWcgPSB0cnVlO1xuXHRcdHZhciBtZXJnZWRGcmVlU3BhY2VzID0gdGhpcy5tZXJnZUZyZWVTcGFjZXMoZnJlZVNwYWNlcywgW2l0ZW1dKTtcblxuXHRcdHZhciBhZmZlY3RlZEl0ZW1zRXhjZXB0U2VsZk9iamVjdHMgPSBbXTtcblx0XHR2YXIgbGVuZ3RoXzAgPSBhbGxBZmZlY3RlZEl0ZW1zLmFmZmVjdGVkSXRlbXNFeGNlcHRTZWxmLmxlbmd0aDtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF8wOyBpKyspIHtcblx0XHRcdHZhciBpbmQgPSBhbGxBZmZlY3RlZEl0ZW1zLmFmZmVjdGVkSXRlbXNFeGNlcHRTZWxmW2ldO1xuXHRcdFx0YWZmZWN0ZWRJdGVtc0V4Y2VwdFNlbGZPYmplY3RzW2ldID0gSlNPTi5wYXJzZShcblx0XHRcdFx0SlNPTi5zdHJpbmdpZnkoXG5cdFx0XHRcdFx0dGhpcy5wb3NpdGlvbkRhdGFbXG5cdFx0XHRcdFx0XHRhbGxBZmZlY3RlZEl0ZW1zLmFmZmVjdGVkSXRlbXNFeGNlcHRTZWxmW2ldXG5cdFx0XHRcdFx0XVxuXHRcdFx0XHQpXG5cdFx0XHQpO1xuXHRcdFx0YWZmZWN0ZWRJdGVtc0V4Y2VwdFNlbGZPYmplY3RzW2ldLmluZGV4ID0gaW5kO1xuXHRcdH1cblxuXHRcdHZhciBmaXREZXRhaWxzID0gdGhpcy5maXRJdGVtc0ludG9GcmVlU3BhY2VzKFxuXHRcdFx0YWZmZWN0ZWRJdGVtc0V4Y2VwdFNlbGZPYmplY3RzLFxuXHRcdFx0SlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShtZXJnZWRGcmVlU3BhY2VzKSksXG5cdFx0XHRbaXRlbV1cblx0XHQpO1xuXHRcdHZhciBmaXR0ZWRJdGVtcyA9IGZpdERldGFpbHMucmVwb3NpdGlvbmVkSXRlbXM7XG5cblx0XHR2YXIgcG9zaXRpb25EYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnBvc2l0aW9uRGF0YSkpO1xuXHRcdHZhciBsZW5ndGhfMCA9IGZpdHRlZEl0ZW1zLmxlbmd0aDtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF8wOyBpKyspIHtcblx0XHRcdHZhciBpbmQgPSBmaXR0ZWRJdGVtc1tpXS5pbmRleDtcblx0XHRcdHBvc2l0aW9uRGF0YVtpbmRdLnggPSBmaXR0ZWRJdGVtc1tpXS54O1xuXHRcdFx0cG9zaXRpb25EYXRhW2luZF0ueSA9IGZpdHRlZEl0ZW1zW2ldLnk7XG5cdFx0fVxuXHRcdHBvc2l0aW9uRGF0YVtpbmRleF0ud2lkdGggPSB3aWR0aDtcblx0XHRwb3NpdGlvbkRhdGFbaW5kZXhdLmhlaWdodCA9IGhlaWdodDtcblxuXHRcdHZhciByZW1haW5pbmdJdGVtcyA9IFtdO1xuXHRcdHZhciBsZW5ndGhfMCA9IGFsbEFmZmVjdGVkSXRlbXMuYWZmZWN0ZWRJdGVtc0V4Y2VwdFNlbGYubGVuZ3RoO1xuXHRcdHZhciBsZW5ndGhfMSA9IGZpdHRlZEl0ZW1zLmxlbmd0aDtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF8wOyBpKyspIHtcblx0XHRcdHZhciBmaXR0ZWRGbGFnID0gZmFsc2U7XG5cdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGxlbmd0aF8xOyBqKyspIHtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdGFsbEFmZmVjdGVkSXRlbXMuYWZmZWN0ZWRJdGVtc0V4Y2VwdFNlbGZbaV0gPT1cblx0XHRcdFx0XHRmaXR0ZWRJdGVtc1tqXS5pbmRleFxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRmaXR0ZWRGbGFnID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGZpdHRlZEZsYWcgPT0gZmFsc2UpIHtcblx0XHRcdFx0cmVtYWluaW5nSXRlbXMucHVzaChcblx0XHRcdFx0XHRhbGxBZmZlY3RlZEl0ZW1zLmFmZmVjdGVkSXRlbXNFeGNlcHRTZWxmW2ldXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dmFyIHBvc2l0aW9uRGF0YSA9IHRoaXMuZml0UmVtYWluaW5nSXRlbXMoXG5cdFx0XHRwb3NpdGlvbkRhdGEsXG5cdFx0XHRyZW1haW5pbmdJdGVtcyxcblx0XHRcdGFsbEFmZmVjdGVkSXRlbXMsXG5cdFx0XHRpbmRleCxcblx0XHRcdEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZml0RGV0YWlscykpXG5cdFx0KTtcblxuXHRcdHZhciBsZW5ndGhfMCA9IHBvc2l0aW9uRGF0YS5sZW5ndGg7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0l0ZW1zW2ldLnN0eWxlLnRyYW5zZm9ybSA9XG5cdFx0XHRcdFwidHJhbnNsYXRlKFwiICtcblx0XHRcdFx0cG9zaXRpb25EYXRhW2ldLnggK1xuXHRcdFx0XHRcInB4LCBcIiArXG5cdFx0XHRcdHBvc2l0aW9uRGF0YVtpXS55ICtcblx0XHRcdFx0XCJweClcIjtcblx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3SXRlbXNbaV0uY2xhc3NMaXN0LnJlbW92ZShcblx0XHRcdFx0XCJsaW1iZXJHcmlkVmlld0l0ZW1EZW1vXCIsXG5cdFx0XHRcdFwibGltYmVyR3JpZFZpZXdJdGVtUmVzaXppbmdTdGF0ZVwiXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdHRoaXMucG9zaXRpb25EYXRhID0gcG9zaXRpb25EYXRhO1xuXG5cdFx0dmFyIHNjcm9sbFRvcCA9IHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLnNjcm9sbFRvcDtcblx0XHR0aGlzLnJlbmRlckl0ZW1zKFtpbmRleF0sIGZhbHNlLCBcInJlc2l6ZUl0ZW1zXCIpO1xuXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLnNjcm9sbFRvcCA9IHNjcm9sbFRvcDtcblx0fTtcblxuXHRMaW1iZXJHcmlkVmlldy5wcm90b3R5cGUucmVzaXplUGxhbmVEZW1vID0gZnVuY3Rpb24oaW5kZXgsIHdpZHRoLCBoZWlnaHQpIHtcblx0XHRpZiAodGhpcy5wb3NpdGlvbkRhdGFbaW5kZXhdLnggKyB3aWR0aCA+IHRoaXMuV0lEVEgpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiAodHlwZW9mIHdpZHRoICE9IFwibnVtYmVyXCIgfHwgdHlwZW9mIGhlaWdodCAhPSBcIm51bWJlclwiKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKHdpZHRoIDwgNTAgfHwgaGVpZ2h0IDwgNTApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHR2YXIgbGVuZ3RoXzAgPSB0aGlzLiRsaW1iZXJHcmlkVmlld0l0ZW1zLmxlbmd0aDtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF8wOyBpKyspIHtcblx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3SXRlbXNbaV0uc3R5bGUudHJhbnNmb3JtID1cblx0XHRcdFx0XCJ0cmFuc2xhdGUoXCIgK1xuXHRcdFx0XHR0aGlzLnBvc2l0aW9uRGF0YVtpXS54ICtcblx0XHRcdFx0XCJweCwgXCIgK1xuXHRcdFx0XHR0aGlzLnBvc2l0aW9uRGF0YVtpXS55ICtcblx0XHRcdFx0XCJweClcIjtcblx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3SXRlbXNbaV0uY2xhc3NMaXN0LnJlbW92ZShcblx0XHRcdFx0XCJsaW1iZXJHcmlkVmlld0l0ZW1EZW1vXCJcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0dmFyIGFsbEFmZmVjdGVkSXRlbXMgPSB0aGlzLmZpbmRBZmZlY3RlZEl0ZW1zT25SZXNpemUoXG5cdFx0XHRpbmRleCxcblx0XHRcdHdpZHRoLFxuXHRcdFx0aGVpZ2h0XG5cdFx0KTtcblxuXHRcdHZhciBpdGVtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnBvc2l0aW9uRGF0YVtpbmRleF0pKTtcblx0XHRpdGVtLndpZHRoID0gd2lkdGg7XG5cdFx0aXRlbS5oZWlnaHQgPSBoZWlnaHQ7XG5cdFx0dmFyIGZyZWVTcGFjZXMgPSB0aGlzLmZpbmRGcmVlU3BhY2VzKFxuXHRcdFx0aXRlbSxcblx0XHRcdGFsbEFmZmVjdGVkSXRlbXMuYWZmZWN0ZWRJdGVtc1xuXHRcdCk7XG5cblx0XHQvLyBOT1cgTUVSR0UgRlJFRSBTUEFDRVNcblx0XHRpdGVtLmRvTm90TWVyZ2VGbGFnID0gdHJ1ZTtcblx0XHR2YXIgbWVyZ2VkRnJlZVNwYWNlcyA9IHRoaXMubWVyZ2VGcmVlU3BhY2VzKGZyZWVTcGFjZXMsIFtpdGVtXSk7XG5cblx0XHR2YXIgYWZmZWN0ZWRJdGVtc0V4Y2VwdFNlbGZPYmplY3RzID0gW107XG5cdFx0dmFyIGxlbmd0aF8wID0gYWxsQWZmZWN0ZWRJdGVtcy5hZmZlY3RlZEl0ZW1zRXhjZXB0U2VsZi5sZW5ndGg7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHR2YXIgaW5kID0gYWxsQWZmZWN0ZWRJdGVtcy5hZmZlY3RlZEl0ZW1zRXhjZXB0U2VsZltpXTtcblx0XHRcdGFmZmVjdGVkSXRlbXNFeGNlcHRTZWxmT2JqZWN0c1tpXSA9IEpTT04ucGFyc2UoXG5cdFx0XHRcdEpTT04uc3RyaW5naWZ5KFxuXHRcdFx0XHRcdHRoaXMucG9zaXRpb25EYXRhW1xuXHRcdFx0XHRcdFx0YWxsQWZmZWN0ZWRJdGVtcy5hZmZlY3RlZEl0ZW1zRXhjZXB0U2VsZltpXVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0KVxuXHRcdFx0KTtcblx0XHRcdGFmZmVjdGVkSXRlbXNFeGNlcHRTZWxmT2JqZWN0c1tpXS5pbmRleCA9IGluZDtcblx0XHR9XG5cblx0XHR2YXIgZml0RGV0YWlscyA9IHRoaXMuZml0SXRlbXNJbnRvRnJlZVNwYWNlcyhcblx0XHRcdGFmZmVjdGVkSXRlbXNFeGNlcHRTZWxmT2JqZWN0cyxcblx0XHRcdEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkobWVyZ2VkRnJlZVNwYWNlcykpLFxuXHRcdFx0W2l0ZW1dXG5cdFx0KTtcblx0XHR2YXIgZml0dGVkSXRlbXMgPSBmaXREZXRhaWxzLnJlcG9zaXRpb25lZEl0ZW1zO1xuXG5cdFx0dmFyIGxlbmd0aF8wID0gZml0dGVkSXRlbXMubGVuZ3RoO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHRcdFx0dmFyIGluZCA9IGZpdHRlZEl0ZW1zW2ldLmluZGV4O1xuXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdJdGVtc1tpbmRdLnN0eWxlLnRyYW5zZm9ybSA9XG5cdFx0XHRcdFwidHJhbnNsYXRlKFwiICtcblx0XHRcdFx0Zml0dGVkSXRlbXNbaV0ueCArXG5cdFx0XHRcdFwicHgsIFwiICtcblx0XHRcdFx0Zml0dGVkSXRlbXNbaV0ueSArXG5cdFx0XHRcdFwicHgpXCI7XG5cdFx0fVxuXG5cdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdJdGVtc1tpbmRleF0uY2xhc3NMaXN0LmFkZChcblx0XHRcdFwibGltYmVyR3JpZFZpZXdJdGVtRGVtb1wiXG5cdFx0KTtcblxuXHRcdHZhciByZW1haW5pbmdJdGVtcyA9IFtdO1xuXHRcdHZhciBsZW5ndGhfMCA9IGFsbEFmZmVjdGVkSXRlbXMuYWZmZWN0ZWRJdGVtc0V4Y2VwdFNlbGYubGVuZ3RoO1xuXHRcdHZhciBsZW5ndGhfMSA9IGZpdHRlZEl0ZW1zLmxlbmd0aDtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF8wOyBpKyspIHtcblx0XHRcdHZhciBmaXR0ZWRGbGFnID0gZmFsc2U7XG5cdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGxlbmd0aF8xOyBqKyspIHtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdGFsbEFmZmVjdGVkSXRlbXMuYWZmZWN0ZWRJdGVtc0V4Y2VwdFNlbGZbaV0gPT1cblx0XHRcdFx0XHRmaXR0ZWRJdGVtc1tqXS5pbmRleFxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRmaXR0ZWRGbGFnID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGZpdHRlZEZsYWcgPT0gZmFsc2UpIHtcblx0XHRcdFx0dmFyIGluZCA9IGFsbEFmZmVjdGVkSXRlbXMuYWZmZWN0ZWRJdGVtc0V4Y2VwdFNlbGZbaV07XG5cdFx0XHRcdHJlbWFpbmluZ0l0ZW1zLnB1c2goXG5cdFx0XHRcdFx0YWxsQWZmZWN0ZWRJdGVtcy5hZmZlY3RlZEl0ZW1zRXhjZXB0U2VsZltpXVxuXHRcdFx0XHQpO1xuXHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0l0ZW1zW2luZF0uY2xhc3NMaXN0LmFkZChcblx0XHRcdFx0XHRcImxpbWJlckdyaWRWaWV3SXRlbURlbW9cIlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHRMaW1iZXJHcmlkVmlldy5wcm90b3R5cGUubW92ZVBsYW5lID0gZnVuY3Rpb24oaW5kZXgsIHRvWCwgdG9ZKSB7XG5cdFx0dmFyIGFsbEFmZmVjdGVkSXRlbXMgPSB0aGlzLmZpbmRBZmZlY3RlZEl0ZW1zT25Nb3ZlKGluZGV4LCB0b1gsIHRvWSk7XG5cblx0XHR2YXIgaXRlbSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5wb3NpdGlvbkRhdGFbaW5kZXhdKSk7XG5cdFx0aXRlbS54ID0gdG9YO1xuXHRcdGl0ZW0ueSA9IHRvWTtcblx0XHR2YXIgZnJlZVNwYWNlcyA9IHRoaXMuZmluZEZyZWVTcGFjZXMoXG5cdFx0XHRpdGVtLFxuXHRcdFx0YWxsQWZmZWN0ZWRJdGVtcy5hZmZlY3RlZEl0ZW1zXG5cdFx0KTtcblxuXHRcdC8vIE5PVyBNRVJHRSBGUkVFIFNQQUNFU1xuXHRcdGl0ZW0uZG9Ob3RNZXJnZUZsYWcgPSB0cnVlO1xuXHRcdHZhciBtZXJnZWRGcmVlU3BhY2VzID0gdGhpcy5tZXJnZUZyZWVTcGFjZXMoZnJlZVNwYWNlcywgW2l0ZW1dKTtcblxuXHRcdHZhciBhZmZlY3RlZEl0ZW1zRXhjZXB0U2VsZk9iamVjdHMgPSBbXTtcblx0XHR2YXIgbGVuZ3RoXzAgPSBhbGxBZmZlY3RlZEl0ZW1zLmFmZmVjdGVkSXRlbXNFeGNlcHRTZWxmLmxlbmd0aDtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF8wOyBpKyspIHtcblx0XHRcdHZhciBpbmQgPSBhbGxBZmZlY3RlZEl0ZW1zLmFmZmVjdGVkSXRlbXNFeGNlcHRTZWxmW2ldO1xuXHRcdFx0YWZmZWN0ZWRJdGVtc0V4Y2VwdFNlbGZPYmplY3RzW2ldID0gSlNPTi5wYXJzZShcblx0XHRcdFx0SlNPTi5zdHJpbmdpZnkoXG5cdFx0XHRcdFx0dGhpcy5wb3NpdGlvbkRhdGFbXG5cdFx0XHRcdFx0XHRhbGxBZmZlY3RlZEl0ZW1zLmFmZmVjdGVkSXRlbXNFeGNlcHRTZWxmW2ldXG5cdFx0XHRcdFx0XVxuXHRcdFx0XHQpXG5cdFx0XHQpO1xuXHRcdFx0YWZmZWN0ZWRJdGVtc0V4Y2VwdFNlbGZPYmplY3RzW2ldLmluZGV4ID0gaW5kO1xuXHRcdH1cblxuXHRcdHZhciBmaXREZXRhaWxzID0gdGhpcy5maXRJdGVtc0ludG9GcmVlU3BhY2VzKFxuXHRcdFx0YWZmZWN0ZWRJdGVtc0V4Y2VwdFNlbGZPYmplY3RzLFxuXHRcdFx0SlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShtZXJnZWRGcmVlU3BhY2VzKSksXG5cdFx0XHRbaXRlbV1cblx0XHQpO1xuXHRcdHZhciBmaXR0ZWRJdGVtcyA9IGZpdERldGFpbHMucmVwb3NpdGlvbmVkSXRlbXM7XG5cblx0XHR2YXIgcG9zaXRpb25EYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnBvc2l0aW9uRGF0YSkpO1xuXHRcdHZhciBsZW5ndGhfMCA9IGZpdHRlZEl0ZW1zLmxlbmd0aDtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF8wOyBpKyspIHtcblx0XHRcdHZhciBpbmQgPSBmaXR0ZWRJdGVtc1tpXS5pbmRleDtcblx0XHRcdHBvc2l0aW9uRGF0YVtpbmRdLnggPSBmaXR0ZWRJdGVtc1tpXS54O1xuXHRcdFx0cG9zaXRpb25EYXRhW2luZF0ueSA9IGZpdHRlZEl0ZW1zW2ldLnk7XG5cdFx0fVxuXHRcdHBvc2l0aW9uRGF0YVtpbmRleF0ueCA9IHRvWDtcblx0XHRwb3NpdGlvbkRhdGFbaW5kZXhdLnkgPSB0b1k7XG5cblx0XHR2YXIgcmVtYWluaW5nSXRlbXMgPSBbXTtcblx0XHR2YXIgbGVuZ3RoXzAgPSBhbGxBZmZlY3RlZEl0ZW1zLmFmZmVjdGVkSXRlbXNFeGNlcHRTZWxmLmxlbmd0aDtcblx0XHR2YXIgbGVuZ3RoXzEgPSBmaXR0ZWRJdGVtcy5sZW5ndGg7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHR2YXIgZml0dGVkRmxhZyA9IGZhbHNlO1xuXHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBsZW5ndGhfMTsgaisrKSB7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRhbGxBZmZlY3RlZEl0ZW1zLmFmZmVjdGVkSXRlbXNFeGNlcHRTZWxmW2ldID09XG5cdFx0XHRcdFx0Zml0dGVkSXRlbXNbal0uaW5kZXhcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0Zml0dGVkRmxhZyA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChmaXR0ZWRGbGFnID09IGZhbHNlKSB7XG5cdFx0XHRcdHJlbWFpbmluZ0l0ZW1zLnB1c2goXG5cdFx0XHRcdFx0YWxsQWZmZWN0ZWRJdGVtcy5hZmZlY3RlZEl0ZW1zRXhjZXB0U2VsZltpXVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHZhciBwb3NpdGlvbkRhdGEgPSB0aGlzLmZpdFJlbWFpbmluZ0l0ZW1zKFxuXHRcdFx0cG9zaXRpb25EYXRhLFxuXHRcdFx0cmVtYWluaW5nSXRlbXMsXG5cdFx0XHRhbGxBZmZlY3RlZEl0ZW1zLFxuXHRcdFx0aW5kZXgsXG5cdFx0XHRKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGZpdERldGFpbHMpKVxuXHRcdCk7XG5cblx0XHR2YXIgbGVuZ3RoXzAgPSBwb3NpdGlvbkRhdGEubGVuZ3RoO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdJdGVtc1tpXS5zdHlsZS50cmFuc2Zvcm0gPVxuXHRcdFx0XHRcInRyYW5zbGF0ZShcIiArXG5cdFx0XHRcdHBvc2l0aW9uRGF0YVtpXS54ICtcblx0XHRcdFx0XCJweCwgXCIgK1xuXHRcdFx0XHRwb3NpdGlvbkRhdGFbaV0ueSArXG5cdFx0XHRcdFwicHgpXCI7XG5cdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0l0ZW1zW2ldLmNsYXNzTGlzdC5yZW1vdmUoXG5cdFx0XHRcdFwibGltYmVyR3JpZFZpZXdJdGVtRGVtb1wiXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdHRoaXMucG9zaXRpb25EYXRhID0gcG9zaXRpb25EYXRhO1xuXHR9O1xuXG5cdExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5tb3ZlUGxhbmVEZW1vID0gZnVuY3Rpb24oaW5kZXgsIHRvWCwgdG9ZKSB7XG5cdFx0dmFyIGxlbmd0aF8wID0gdGhpcy4kbGltYmVyR3JpZFZpZXdJdGVtcy5sZW5ndGg7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0l0ZW1zW2ldLnN0eWxlLnRyYW5zZm9ybSA9XG5cdFx0XHRcdFwidHJhbnNsYXRlKFwiICtcblx0XHRcdFx0dGhpcy5wb3NpdGlvbkRhdGFbaV0ueCArXG5cdFx0XHRcdFwicHgsIFwiICtcblx0XHRcdFx0dGhpcy5wb3NpdGlvbkRhdGFbaV0ueSArXG5cdFx0XHRcdFwicHgpXCI7XG5cdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0l0ZW1zW2ldLmNsYXNzTGlzdC5yZW1vdmUoXG5cdFx0XHRcdFwibGltYmVyR3JpZFZpZXdJdGVtRGVtb1wiXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdHZhciBhbGxBZmZlY3RlZEl0ZW1zID0gdGhpcy5maW5kQWZmZWN0ZWRJdGVtc09uTW92ZShpbmRleCwgdG9YLCB0b1kpO1xuXG5cdFx0dmFyIGl0ZW0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMucG9zaXRpb25EYXRhW2luZGV4XSkpO1xuXHRcdGl0ZW0ueCA9IHRvWDtcblx0XHRpdGVtLnkgPSB0b1k7XG5cdFx0dmFyIGZyZWVTcGFjZXMgPSB0aGlzLmZpbmRGcmVlU3BhY2VzKFxuXHRcdFx0aXRlbSxcblx0XHRcdGFsbEFmZmVjdGVkSXRlbXMuYWZmZWN0ZWRJdGVtc1xuXHRcdCk7XG5cblx0XHQvLyBOT1cgTUVSR0UgRlJFRSBTUEFDRVNcblx0XHRpdGVtLmRvTm90TWVyZ2VGbGFnID0gdHJ1ZTtcblx0XHR2YXIgbWVyZ2VkRnJlZVNwYWNlcyA9IHRoaXMubWVyZ2VGcmVlU3BhY2VzKGZyZWVTcGFjZXMsIFtpdGVtXSk7XG5cblx0XHR2YXIgYWZmZWN0ZWRJdGVtc0V4Y2VwdFNlbGZPYmplY3RzID0gW107XG5cdFx0dmFyIGxlbmd0aF8wID0gYWxsQWZmZWN0ZWRJdGVtcy5hZmZlY3RlZEl0ZW1zRXhjZXB0U2VsZi5sZW5ndGg7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHR2YXIgaW5kID0gYWxsQWZmZWN0ZWRJdGVtcy5hZmZlY3RlZEl0ZW1zRXhjZXB0U2VsZltpXTtcblx0XHRcdGFmZmVjdGVkSXRlbXNFeGNlcHRTZWxmT2JqZWN0c1tpXSA9IEpTT04ucGFyc2UoXG5cdFx0XHRcdEpTT04uc3RyaW5naWZ5KFxuXHRcdFx0XHRcdHRoaXMucG9zaXRpb25EYXRhW1xuXHRcdFx0XHRcdFx0YWxsQWZmZWN0ZWRJdGVtcy5hZmZlY3RlZEl0ZW1zRXhjZXB0U2VsZltpXVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0KVxuXHRcdFx0KTtcblx0XHRcdGFmZmVjdGVkSXRlbXNFeGNlcHRTZWxmT2JqZWN0c1tpXS5pbmRleCA9IGluZDtcblx0XHR9XG5cblx0XHR2YXIgZml0RGV0YWlscyA9IHRoaXMuZml0SXRlbXNJbnRvRnJlZVNwYWNlcyhcblx0XHRcdGFmZmVjdGVkSXRlbXNFeGNlcHRTZWxmT2JqZWN0cyxcblx0XHRcdEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkobWVyZ2VkRnJlZVNwYWNlcykpLFxuXHRcdFx0W2l0ZW1dXG5cdFx0KTtcblx0XHR2YXIgZml0dGVkSXRlbXMgPSBmaXREZXRhaWxzLnJlcG9zaXRpb25lZEl0ZW1zO1xuXG5cdFx0dmFyIGxlbmd0aF8wID0gZml0dGVkSXRlbXMubGVuZ3RoO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHRcdFx0dmFyIGluZCA9IGZpdHRlZEl0ZW1zW2ldLmluZGV4O1xuXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdJdGVtc1tpbmRdLnN0eWxlLnRyYW5zZm9ybSA9XG5cdFx0XHRcdFwidHJhbnNsYXRlKFwiICtcblx0XHRcdFx0Zml0dGVkSXRlbXNbaV0ueCArXG5cdFx0XHRcdFwicHgsIFwiICtcblx0XHRcdFx0Zml0dGVkSXRlbXNbaV0ueSArXG5cdFx0XHRcdFwicHgpXCI7XG5cdFx0fVxuXG5cdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdJdGVtc1tpbmRleF0uY2xhc3NMaXN0LmFkZChcblx0XHRcdFwibGltYmVyR3JpZFZpZXdJdGVtRGVtb1wiXG5cdFx0KTtcblxuXHRcdHZhciByZW1haW5pbmdJdGVtcyA9IFtdO1xuXHRcdHZhciBsZW5ndGhfMCA9IGFsbEFmZmVjdGVkSXRlbXMuYWZmZWN0ZWRJdGVtc0V4Y2VwdFNlbGYubGVuZ3RoO1xuXHRcdHZhciBsZW5ndGhfMSA9IGZpdHRlZEl0ZW1zLmxlbmd0aDtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF8wOyBpKyspIHtcblx0XHRcdHZhciBmaXR0ZWRGbGFnID0gZmFsc2U7XG5cdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGxlbmd0aF8xOyBqKyspIHtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdGFsbEFmZmVjdGVkSXRlbXMuYWZmZWN0ZWRJdGVtc0V4Y2VwdFNlbGZbaV0gPT1cblx0XHRcdFx0XHRmaXR0ZWRJdGVtc1tqXS5pbmRleFxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRmaXR0ZWRGbGFnID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGZpdHRlZEZsYWcgPT0gZmFsc2UpIHtcblx0XHRcdFx0dmFyIGluZCA9IGFsbEFmZmVjdGVkSXRlbXMuYWZmZWN0ZWRJdGVtc0V4Y2VwdFNlbGZbaV07XG5cdFx0XHRcdHJlbWFpbmluZ0l0ZW1zLnB1c2goXG5cdFx0XHRcdFx0YWxsQWZmZWN0ZWRJdGVtcy5hZmZlY3RlZEl0ZW1zRXhjZXB0U2VsZltpXVxuXHRcdFx0XHQpO1xuXHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0l0ZW1zW2luZF0uY2xhc3NMaXN0LmFkZChcblx0XHRcdFx0XHRcImxpbWJlckdyaWRWaWV3SXRlbURlbW9cIlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHRMaW1iZXJHcmlkVmlldy5wcm90b3R5cGUuZmluZEZyZWVTcGFjZXMgPSBmdW5jdGlvbihpdGVtLCBhZmZlY3RlZEl0ZW1zKSB7XG5cdFx0dmFyIGZyZWVTcGFjZXMgPSBbXTtcblx0XHR2YXIgbGVuZ3RoXzAgPSBhZmZlY3RlZEl0ZW1zLmxlbmd0aDtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF8wOyBpKyspIHtcblx0XHRcdHZhciByZXN1bHQgPSB0aGlzLmlzUGxhbmVCSW5zaWRlUGxhbmVBX1RvdWNoaW5nSXNJbnNpZGUoXG5cdFx0XHRcdGl0ZW0sXG5cdFx0XHRcdHRoaXMucG9zaXRpb25EYXRhW2FmZmVjdGVkSXRlbXNbaV1dLFxuXHRcdFx0XHRcImFsbFwiXG5cdFx0XHQpO1xuXHRcdFx0aWYgKHJlc3VsdC5pc0luc2lkZSA9PSB0cnVlKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIGZzID0gdGhpcy5zdWJ0cmFjdFBsYW5lcyhcblx0XHRcdFx0XHR0aGlzLnBvc2l0aW9uRGF0YVthZmZlY3RlZEl0ZW1zW2ldXSxcblx0XHRcdFx0XHRpdGVtXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHZhciBsZW5ndGhfMSA9IGZzLmxlbmd0aDtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBsZW5ndGhfMTsgaisrKSB7XG5cdFx0XHRcdFx0ZnJlZVNwYWNlcy5wdXNoKGZzW2pdKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZnJlZVNwYWNlcztcblx0fTtcblxuXHRMaW1iZXJHcmlkVmlldy5wcm90b3R5cGUubWVyZ2VGcmVlU3BhY2VzID0gZnVuY3Rpb24oXG5cdFx0ZnJlZVNwYWNlcyxcblx0XHRpdGVtc05vdFRvTWVyZ2Vcblx0KSB7XG5cdFx0dmFyIG1lcmdlUGxhaW5zRnJlZVNwYWNlc0FuZEl0ZW1zTm90VG9NZXJnZSA9IGZyZWVTcGFjZXMuY29uY2F0KFxuXHRcdFx0aXRlbXNOb3RUb01lcmdlXG5cdFx0KTtcblx0XHR2YXIgaXNQbGFuZUluc2lkZVN0YWNrID0gZnVuY3Rpb24oc3RhY2ssIHBsYW5lLCBjb250ZXh0KSB7XG5cdFx0XHR2YXIgZmxhZyA9IGZhbHNlO1xuXHRcdFx0dmFyIGxlbmd0aF8wID0gc3RhY2subGVuZ3RoO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHRcdGlmIChjb250ZXh0LmFyZVBsYWluc1NhbWUoc3RhY2tbaV0sIHBsYW5lKSkge1xuXHRcdFx0XHRcdGZsYWcgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmxhZztcblx0XHR9O1xuXG5cdFx0dmFyIG1lcmdlZFN0YWNrID0gW107XG5cdFx0dmFyIGxlbmd0aF8wID0gZnJlZVNwYWNlcy5sZW5ndGg7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMCAtIDE7IGkrKykge1xuXHRcdFx0Zm9yICh2YXIgaiA9IGkgKyAxOyBqIDwgbGVuZ3RoXzA7IGorKykge1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0IXRoaXMuaXNQbGFuZUJJbnNpZGVQbGFuZUFfVG91Y2hpbmdOb3RJbnNpZGUoXG5cdFx0XHRcdFx0XHRmcmVlU3BhY2VzW2ldLFxuXHRcdFx0XHRcdFx0ZnJlZVNwYWNlc1tqXVxuXHRcdFx0XHRcdClcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0dmFyIG1lcmdlZFBsYW5lID0gdGhpcy5tZXJnZVBsYWlucyhcblx0XHRcdFx0XHRcdGZyZWVTcGFjZXNbaV0sXG5cdFx0XHRcdFx0XHRmcmVlU3BhY2VzW2pdLFxuXHRcdFx0XHRcdFx0bWVyZ2VQbGFpbnNGcmVlU3BhY2VzQW5kSXRlbXNOb3RUb01lcmdlXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRpZiAobWVyZ2VkUGxhbmUgIT0gZmFsc2UpIHtcblx0XHRcdFx0XHRcdGlmIChcblx0XHRcdFx0XHRcdFx0IWlzUGxhbmVJbnNpZGVTdGFjayhtZXJnZWRTdGFjaywgbWVyZ2VkUGxhbmUsIHRoaXMpXG5cdFx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdFx0bWVyZ2VkU3RhY2sucHVzaChtZXJnZWRQbGFuZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dmFyIG1lcmdlU3RhY2tJdGVtV2l0aEZyZWVTcGFjZXMgPSBmdW5jdGlvbihcblx0XHRcdGZyZWVTcGFjZXMsXG5cdFx0XHRtZXJnZWRTdGFjayxcblx0XHRcdG1lcmdlUGxhaW5zRnJlZVNwYWNlc0FuZEl0ZW1zTm90VG9NZXJnZSxcblx0XHRcdGNvbnRleHRcblx0XHQpIHtcblx0XHRcdHZhciBuZXdTdGFjayA9IFtdO1xuXHRcdFx0dmFyIGxlbmd0aF8wID0gZnJlZVNwYWNlcy5sZW5ndGg7XG5cdFx0XHR2YXIgbGVuZ3RoXzEgPSBtZXJnZWRTdGFjay5sZW5ndGg7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF8wOyBpKyspIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBsZW5ndGhfMTsgaisrKSB7XG5cdFx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdFx0IWNvbnRleHQuaXNQbGFuZUJJbnNpZGVQbGFuZUFfVG91Y2hpbmdOb3RJbnNpZGUoXG5cdFx0XHRcdFx0XHRcdGZyZWVTcGFjZXNbaV0sXG5cdFx0XHRcdFx0XHRcdG1lcmdlZFN0YWNrW2pdXG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHR2YXIgbWVyZ2VkUGxhbmUgPSBjb250ZXh0Lm1lcmdlUGxhaW5zKFxuXHRcdFx0XHRcdFx0XHRmcmVlU3BhY2VzW2ldLFxuXHRcdFx0XHRcdFx0XHRtZXJnZWRTdGFja1tqXSxcblx0XHRcdFx0XHRcdFx0bWVyZ2VQbGFpbnNGcmVlU3BhY2VzQW5kSXRlbXNOb3RUb01lcmdlXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0aWYgKG1lcmdlZFBsYW5lICE9IGZhbHNlKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChcblx0XHRcdFx0XHRcdFx0XHQhaXNQbGFuZUluc2lkZVN0YWNrKFxuXHRcdFx0XHRcdFx0XHRcdFx0bWVyZ2VkU3RhY2suY29uY2F0KG5ld1N0YWNrKSxcblx0XHRcdFx0XHRcdFx0XHRcdG1lcmdlZFBsYW5lLFxuXHRcdFx0XHRcdFx0XHRcdFx0Y29udGV4dFxuXHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRcdFx0bmV3U3RhY2sucHVzaChtZXJnZWRQbGFuZSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBuZXdTdGFjaztcblx0XHR9O1xuXG5cdFx0dmFyIG5ld1N0YWNrID0gbWVyZ2VTdGFja0l0ZW1XaXRoRnJlZVNwYWNlcyhcblx0XHRcdGZyZWVTcGFjZXMsXG5cdFx0XHRtZXJnZWRTdGFjayxcblx0XHRcdG1lcmdlUGxhaW5zRnJlZVNwYWNlc0FuZEl0ZW1zTm90VG9NZXJnZSxcblx0XHRcdHRoaXNcblx0XHQpO1xuXG5cdFx0d2hpbGUgKG5ld1N0YWNrLmxlbmd0aCA+IDApIHtcblx0XHRcdG1lcmdlZFN0YWNrID0gbWVyZ2VkU3RhY2suY29uY2F0KG5ld1N0YWNrKTtcblx0XHRcdHZhciBuZXdTdGFjayA9IG1lcmdlU3RhY2tJdGVtV2l0aEZyZWVTcGFjZXMoXG5cdFx0XHRcdGZyZWVTcGFjZXMsXG5cdFx0XHRcdG1lcmdlZFN0YWNrLFxuXHRcdFx0XHRtZXJnZVBsYWluc0ZyZWVTcGFjZXNBbmRJdGVtc05vdFRvTWVyZ2UsXG5cdFx0XHRcdHRoaXNcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0bWVyZ2VkU3RhY2sgPSBtZXJnZWRTdGFjay5jb25jYXQoZnJlZVNwYWNlcyk7XG5cblx0XHR2YXIgcmVkdW5kYW50UGxhbmVzID0ge307XG5cdFx0dmFyIGxlbmd0aF8wID0gbWVyZ2VkU3RhY2subGVuZ3RoO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzAgLSAxOyBpKyspIHtcblx0XHRcdGZvciAodmFyIGogPSBpICsgMTsgaiA8IGxlbmd0aF8wOyBqKyspIHtcblx0XHRcdFx0dmFyIHJlc3VsdCA9IHRoaXMuaXNQbGFuZUJJbnNpZGVQbGFuZUFfVG91Y2hpbmdJc0luc2lkZShcblx0XHRcdFx0XHRtZXJnZWRTdGFja1tpXSxcblx0XHRcdFx0XHRtZXJnZWRTdGFja1tqXSxcblx0XHRcdFx0XHRcImFsbFwiXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGlmIChyZXN1bHQuaXNJbnNpZGUpIHtcblx0XHRcdFx0XHRyZWR1bmRhbnRQbGFuZXNbal0gPSB0cnVlO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHZhciByZXN1bHQgPSB0aGlzLmlzUGxhbmVCSW5zaWRlUGxhbmVBX1RvdWNoaW5nSXNJbnNpZGUoXG5cdFx0XHRcdFx0XHRtZXJnZWRTdGFja1tqXSxcblx0XHRcdFx0XHRcdG1lcmdlZFN0YWNrW2ldLFxuXHRcdFx0XHRcdFx0XCJhbGxcIlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0aWYgKHJlc3VsdC5pc0luc2lkZSkge1xuXHRcdFx0XHRcdFx0cmVkdW5kYW50UGxhbmVzW2ldID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHR2YXIgZmluYWxNZXJnZWRQbGFuZXMgPSBbXTtcblx0XHR2YXIgbGVuZ3RoXzAgPSBtZXJnZWRTdGFjay5sZW5ndGg7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHRpZiAoIXJlZHVuZGFudFBsYW5lcy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuXHRcdFx0XHRmaW5hbE1lcmdlZFBsYW5lcy5wdXNoKG1lcmdlZFN0YWNrW2ldKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZmluYWxNZXJnZWRQbGFuZXM7XG5cdH07XG5cblx0TGltYmVyR3JpZFZpZXcucHJvdG90eXBlLmZpbmRBZmZlY3RlZEl0ZW1zT25Nb3ZlID0gZnVuY3Rpb24oXG5cdFx0aW5kZXgsXG5cdFx0dG9YLFxuXHRcdHRvWVxuXHQpIHtcblx0XHR2YXIgaXRlbSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5wb3NpdGlvbkRhdGFbaW5kZXhdKSk7XG5cdFx0aXRlbS54ID0gdG9YO1xuXHRcdGl0ZW0ueSA9IHRvWTtcblx0XHR2YXIgYWZmZWN0ZWRJdGVtcyA9IFtdO1xuXHRcdHZhciBhZmZlY3RlZEl0ZW1zRXhjZXB0U2VsZiA9IFtdO1xuXG5cdFx0dmFyIGxlbmd0aF8wID0gdGhpcy5wb3NpdGlvbkRhdGEubGVuZ3RoO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHRcdFx0dmFyIHJlc3VsdCA9IHRoaXMuaXNQbGFuZUJJbnNpZGVQbGFuZUFfVG91Y2hpbmdJc0luc2lkZShcblx0XHRcdFx0aXRlbSxcblx0XHRcdFx0dGhpcy5wb3NpdGlvbkRhdGFbaV1cblx0XHRcdCk7XG5cdFx0XHRpZiAocmVzdWx0ID09IHRydWUpIHtcblx0XHRcdFx0YWZmZWN0ZWRJdGVtcy5wdXNoKGkpO1xuXHRcdFx0XHRpZiAoaSAhPSBpbmRleCkge1xuXHRcdFx0XHRcdGFmZmVjdGVkSXRlbXNFeGNlcHRTZWxmLnB1c2goaSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0YWZmZWN0ZWRJdGVtczogYWZmZWN0ZWRJdGVtcyxcblx0XHRcdGFmZmVjdGVkSXRlbXNFeGNlcHRTZWxmOiBhZmZlY3RlZEl0ZW1zRXhjZXB0U2VsZlxuXHRcdH07XG5cdH07XG5cblx0TGltYmVyR3JpZFZpZXcucHJvdG90eXBlLmZpbmRBZmZlY3RlZEl0ZW1zT25SZXNpemUgPSBmdW5jdGlvbihcblx0XHRpbmRleCxcblx0XHR3aWR0aCxcblx0XHRoZWlnaHRcblx0KSB7XG5cdFx0dmFyIGl0ZW0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMucG9zaXRpb25EYXRhW2luZGV4XSkpO1xuXHRcdGl0ZW0ud2lkdGggPSB3aWR0aDtcblx0XHRpdGVtLmhlaWdodCA9IGhlaWdodDtcblx0XHR2YXIgYWZmZWN0ZWRJdGVtcyA9IFtdO1xuXHRcdHZhciBhZmZlY3RlZEl0ZW1zRXhjZXB0U2VsZiA9IFtdO1xuXG5cdFx0dmFyIGxlbmd0aF8wID0gdGhpcy5wb3NpdGlvbkRhdGEubGVuZ3RoO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHRcdFx0dmFyIHJlc3VsdCA9IHRoaXMuaXNQbGFuZUJJbnNpZGVQbGFuZUFfVG91Y2hpbmdJc0luc2lkZShcblx0XHRcdFx0aXRlbSxcblx0XHRcdFx0dGhpcy5wb3NpdGlvbkRhdGFbaV1cblx0XHRcdCk7XG5cdFx0XHRpZiAocmVzdWx0ID09IHRydWUpIHtcblx0XHRcdFx0YWZmZWN0ZWRJdGVtcy5wdXNoKGkpO1xuXHRcdFx0XHRpZiAoaSAhPSBpbmRleCkge1xuXHRcdFx0XHRcdGFmZmVjdGVkSXRlbXNFeGNlcHRTZWxmLnB1c2goaSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0YWZmZWN0ZWRJdGVtczogYWZmZWN0ZWRJdGVtcyxcblx0XHRcdGFmZmVjdGVkSXRlbXNFeGNlcHRTZWxmOiBhZmZlY3RlZEl0ZW1zRXhjZXB0U2VsZlxuXHRcdH07XG5cdH07XG5cblx0TGltYmVyR3JpZFZpZXcucHJvdG90eXBlLmlzUGxhbmVCSW5zaWRlUGxhbmVBX1RvdWNoaW5nSXNJbnNpZGUgPSBmdW5jdGlvbihcblx0XHRBLFxuXHRcdEIsXG5cdFx0cmVzdWx0VHlwZVxuXHQpIHtcblx0XHR2YXIgQVRvcExlZnQgPSBbQS54LCBBLnldO1xuXHRcdHZhciBBVG9wUmlnaHQgPSBbQS54ICsgQS53aWR0aCwgQS55XTtcblx0XHR2YXIgQUJvdHRvbUxlZnQgPSBbQS54LCBBLnkgKyBBLmhlaWdodF07XG5cdFx0dmFyIEFCb3R0b21SaWdodCA9IFtBLnggKyBBLndpZHRoLCBBLnkgKyBBLmhlaWdodF07XG5cblx0XHR2YXIgQUNvb3JkaWFudGVzQXJyID0gW0FUb3BMZWZ0LCBBVG9wUmlnaHQsIEFCb3R0b21SaWdodCwgQUJvdHRvbUxlZnRdO1xuXG5cdFx0dmFyIEJUb3BMZWZ0ID0gW0IueCwgQi55XTtcblx0XHR2YXIgQlRvcFJpZ2h0ID0gW0IueCArIEIud2lkdGgsIEIueV07XG5cdFx0dmFyIEJCb3R0b21MZWZ0ID0gW0IueCwgQi55ICsgQi5oZWlnaHRdO1xuXHRcdHZhciBCQm90dG9tUmlnaHQgPSBbQi54ICsgQi53aWR0aCwgQi55ICsgQi5oZWlnaHRdO1xuXG5cdFx0dmFyIEJDb29yZGluYXRlc0FyciA9IFtCVG9wTGVmdCwgQlRvcFJpZ2h0LCBCQm90dG9tUmlnaHQsIEJCb3R0b21MZWZ0XTtcblx0XHR2YXIgQlJlc3VsdEFyciA9IFtdO1xuXHRcdHZhciBpc0luc2lkZSA9IDA7XG5cdFx0dmFyIG92ZXJhbGxSZXN1bHQgPSBmYWxzZTtcblx0XHR2YXIgbGVuZ3RoXzAgPSBCQ29vcmRpbmF0ZXNBcnIubGVuZ3RoO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRCQ29vcmRpbmF0ZXNBcnJbaV1bMF0gPj0gQVRvcExlZnRbMF0gJiZcblx0XHRcdFx0QkNvb3JkaW5hdGVzQXJyW2ldWzBdIDw9IEFUb3BSaWdodFswXSAmJlxuXHRcdFx0XHRCQ29vcmRpbmF0ZXNBcnJbaV1bMF0gPj0gQUJvdHRvbUxlZnRbMF0gJiZcblx0XHRcdFx0QkNvb3JkaW5hdGVzQXJyW2ldWzBdIDw9IEFCb3R0b21SaWdodFswXSAmJlxuXHRcdFx0XHRCQ29vcmRpbmF0ZXNBcnJbaV1bMV0gPj0gQVRvcExlZnRbMV0gJiZcblx0XHRcdFx0QkNvb3JkaW5hdGVzQXJyW2ldWzFdIDw9IEFCb3R0b21MZWZ0WzFdICYmXG5cdFx0XHRcdEJDb29yZGluYXRlc0FycltpXVsxXSA+PSBBVG9wUmlnaHRbMV0gJiZcblx0XHRcdFx0QkNvb3JkaW5hdGVzQXJyW2ldWzFdIDw9IEFCb3R0b21SaWdodFsxXVxuXHRcdFx0KSB7XG5cdFx0XHRcdEJSZXN1bHRBcnJbaV0gPSB0cnVlO1xuXHRcdFx0XHRpc0luc2lkZSsrO1xuXHRcdFx0XHRvdmVyYWxsUmVzdWx0ID0gdHJ1ZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdEJSZXN1bHRBcnJbaV0gPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKGlzSW5zaWRlID09IDQpIHtcblx0XHRcdGlzSW5zaWRlID0gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aXNJbnNpZGUgPSBmYWxzZTtcblx0XHR9XG5cblx0XHR2YXIgZW5ndWxmZWQgPSBmYWxzZTtcblx0XHR2YXIgZW5ndWxmZWRDaGVja0NvdW50ID0gMDtcblx0XHR2YXIgbGVuZ3RoXzAgPSBBQ29vcmRpYW50ZXNBcnIubGVuZ3RoO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRBQ29vcmRpYW50ZXNBcnJbaV1bMF0gPj0gQlRvcExlZnRbMF0gJiZcblx0XHRcdFx0QUNvb3JkaWFudGVzQXJyW2ldWzBdIDw9IEJUb3BSaWdodFswXSAmJlxuXHRcdFx0XHRBQ29vcmRpYW50ZXNBcnJbaV1bMF0gPj0gQkJvdHRvbUxlZnRbMF0gJiZcblx0XHRcdFx0QUNvb3JkaWFudGVzQXJyW2ldWzBdIDw9IEJCb3R0b21SaWdodFswXSAmJlxuXHRcdFx0XHRBQ29vcmRpYW50ZXNBcnJbaV1bMV0gPj0gQlRvcExlZnRbMV0gJiZcblx0XHRcdFx0QUNvb3JkaWFudGVzQXJyW2ldWzFdIDw9IEJCb3R0b21MZWZ0WzFdICYmXG5cdFx0XHRcdEFDb29yZGlhbnRlc0FycltpXVsxXSA+PSBCVG9wUmlnaHRbMV0gJiZcblx0XHRcdFx0QUNvb3JkaWFudGVzQXJyW2ldWzFdIDw9IEJCb3R0b21SaWdodFsxXVxuXHRcdFx0KSB7XG5cdFx0XHRcdG92ZXJhbGxSZXN1bHQgPSB0cnVlO1xuXHRcdFx0XHRlbmd1bGZlZENoZWNrQ291bnQrKztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZW5ndWxmZWRDaGVja0NvdW50ID09IDQpIHtcblx0XHRcdGVuZ3VsZmVkID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZiAoXG5cdFx0XHQoQlRvcExlZnRbMF0gPiBBVG9wTGVmdFswXSAmJlxuXHRcdFx0XHRCVG9wUmlnaHRbMF0gPCBBVG9wUmlnaHRbMF0gJiZcblx0XHRcdFx0QlRvcExlZnRbMV0gPCBBVG9wTGVmdFsxXSAmJlxuXHRcdFx0XHRCQm90dG9tTGVmdFsxXSA+IEFCb3R0b21MZWZ0WzFdKSB8fFxuXHRcdFx0KEJUb3BMZWZ0WzFdID4gQVRvcExlZnRbMV0gJiZcblx0XHRcdFx0QkJvdHRvbUxlZnRbMV0gPCBBQm90dG9tTGVmdFsxXSAmJlxuXHRcdFx0XHRCVG9wTGVmdFswXSA8IEFUb3BMZWZ0WzBdICYmXG5cdFx0XHRcdEJUb3BSaWdodFswXSA+IEFUb3BSaWdodFswXSlcblx0XHQpIHtcblx0XHRcdG92ZXJhbGxSZXN1bHQgPSB0cnVlO1xuXHRcdH1cblxuXHRcdGlmIChyZXN1bHRUeXBlID09IFwib3ZlcmFsbFwiKSB7XG5cdFx0XHRyZXR1cm4gb3ZlcmFsbFJlc3VsdDtcblx0XHR9IGVsc2UgaWYgKHJlc3VsdFR5cGUgPT0gXCJpbmRpdmlkdWFsXCIpIHtcblx0XHRcdHJldHVybiBCUmVzdWx0QXJyO1xuXHRcdH0gZWxzZSBpZiAocmVzdWx0VHlwZSA9PSBcImFsbFwiKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRvdmVyYWxsOiBvdmVyYWxsUmVzdWx0LFxuXHRcdFx0XHRpbmRpdmlkdWFsOiBCUmVzdWx0QXJyLFxuXHRcdFx0XHRpc0luc2lkZTogaXNJbnNpZGUsXG5cdFx0XHRcdGVuZ3VsZmVkOiBlbmd1bGZlZFxuXHRcdFx0fTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIG92ZXJhbGxSZXN1bHQ7XG5cdFx0fVxuXHR9O1xuXG5cdExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5pc1BsYW5lQkluc2lkZVBsYW5lQV9Ub3VjaGluZ05vdEluc2lkZSA9IGZ1bmN0aW9uKFxuXHRcdEEsXG5cdFx0Qixcblx0XHRyZXN1bHRUeXBlXG5cdCkge1xuXHRcdHZhciBBVG9wTGVmdCA9IFtBLngsIEEueV07XG5cdFx0dmFyIEFUb3BSaWdodCA9IFtBLnggKyBBLndpZHRoLCBBLnldO1xuXHRcdHZhciBBQm90dG9tTGVmdCA9IFtBLngsIEEueSArIEEuaGVpZ2h0XTtcblx0XHR2YXIgQUJvdHRvbVJpZ2h0ID0gW0EueCArIEEud2lkdGgsIEEueSArIEEuaGVpZ2h0XTtcblxuXHRcdHZhciBBQ29vcmRpYW50ZXNBcnIgPSBbQVRvcExlZnQsIEFUb3BSaWdodCwgQUJvdHRvbVJpZ2h0LCBBQm90dG9tTGVmdF07XG5cblx0XHR2YXIgQlRvcExlZnQgPSBbQi54LCBCLnldO1xuXHRcdHZhciBCVG9wUmlnaHQgPSBbQi54ICsgQi53aWR0aCwgQi55XTtcblx0XHR2YXIgQkJvdHRvbUxlZnQgPSBbQi54LCBCLnkgKyBCLmhlaWdodF07XG5cdFx0dmFyIEJCb3R0b21SaWdodCA9IFtCLnggKyBCLndpZHRoLCBCLnkgKyBCLmhlaWdodF07XG5cblx0XHR2YXIgQkNvb3JkaW5hdGVzQXJyID0gW0JUb3BMZWZ0LCBCVG9wUmlnaHQsIEJCb3R0b21SaWdodCwgQkJvdHRvbUxlZnRdO1xuXHRcdHZhciBCUmVzdWx0QXJyID0gW107XG5cdFx0dmFyIGlzSW5zaWRlID0gMDtcblx0XHR2YXIgb3ZlcmFsbFJlc3VsdCA9IGZhbHNlO1xuXHRcdHZhciBsZW5ndGhfMCA9IEJDb29yZGluYXRlc0Fyci5sZW5ndGg7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdEJDb29yZGluYXRlc0FycltpXVswXSA+IEFUb3BMZWZ0WzBdICYmXG5cdFx0XHRcdEJDb29yZGluYXRlc0FycltpXVswXSA8IEFUb3BSaWdodFswXSAmJlxuXHRcdFx0XHRCQ29vcmRpbmF0ZXNBcnJbaV1bMF0gPiBBQm90dG9tTGVmdFswXSAmJlxuXHRcdFx0XHRCQ29vcmRpbmF0ZXNBcnJbaV1bMF0gPCBBQm90dG9tUmlnaHRbMF0gJiZcblx0XHRcdFx0QkNvb3JkaW5hdGVzQXJyW2ldWzFdID4gQVRvcExlZnRbMV0gJiZcblx0XHRcdFx0QkNvb3JkaW5hdGVzQXJyW2ldWzFdIDwgQUJvdHRvbUxlZnRbMV0gJiZcblx0XHRcdFx0QkNvb3JkaW5hdGVzQXJyW2ldWzFdID4gQVRvcFJpZ2h0WzFdICYmXG5cdFx0XHRcdEJDb29yZGluYXRlc0FycltpXVsxXSA8IEFCb3R0b21SaWdodFsxXVxuXHRcdFx0KSB7XG5cdFx0XHRcdEJSZXN1bHRBcnJbaV0gPSB0cnVlO1xuXHRcdFx0XHRpc0luc2lkZSsrO1xuXHRcdFx0XHRvdmVyYWxsUmVzdWx0ID0gdHJ1ZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdEJSZXN1bHRBcnJbaV0gPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKGlzSW5zaWRlID09IDQpIHtcblx0XHRcdGlzSW5zaWRlID0gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aXNJbnNpZGUgPSBmYWxzZTtcblx0XHR9XG5cblx0XHR2YXIgZW5ndWxmZWQgPSBmYWxzZTtcblx0XHR2YXIgZW5ndWxmZWRDaGVja0NvdW50ID0gMDtcblx0XHR2YXIgbGVuZ3RoXzAgPSBBQ29vcmRpYW50ZXNBcnIubGVuZ3RoO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRBQ29vcmRpYW50ZXNBcnJbaV1bMF0gPiBCVG9wTGVmdFswXSAmJlxuXHRcdFx0XHRBQ29vcmRpYW50ZXNBcnJbaV1bMF0gPCBCVG9wUmlnaHRbMF0gJiZcblx0XHRcdFx0QUNvb3JkaWFudGVzQXJyW2ldWzBdID4gQkJvdHRvbUxlZnRbMF0gJiZcblx0XHRcdFx0QUNvb3JkaWFudGVzQXJyW2ldWzBdIDwgQkJvdHRvbVJpZ2h0WzBdICYmXG5cdFx0XHRcdEFDb29yZGlhbnRlc0FycltpXVsxXSA+IEJUb3BMZWZ0WzFdICYmXG5cdFx0XHRcdEFDb29yZGlhbnRlc0FycltpXVsxXSA8IEJCb3R0b21MZWZ0WzFdICYmXG5cdFx0XHRcdEFDb29yZGlhbnRlc0FycltpXVsxXSA+IEJUb3BSaWdodFsxXSAmJlxuXHRcdFx0XHRBQ29vcmRpYW50ZXNBcnJbaV1bMV0gPCBCQm90dG9tUmlnaHRbMV1cblx0XHRcdCkge1xuXHRcdFx0XHRvdmVyYWxsUmVzdWx0ID0gdHJ1ZTtcblx0XHRcdFx0ZW5ndWxmZWRDaGVja0NvdW50Kys7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGVuZ3VsZmVkQ2hlY2tDb3VudCA9PSA0KSB7XG5cdFx0XHRlbmd1bGZlZCA9IHRydWU7XG5cdFx0fVxuXG5cdFx0aWYgKFxuXHRcdFx0KEJUb3BMZWZ0WzBdID49IEFUb3BMZWZ0WzBdICYmXG5cdFx0XHRcdEJUb3BSaWdodFswXSA8PSBBVG9wUmlnaHRbMF0gJiZcblx0XHRcdFx0QlRvcExlZnRbMV0gPD0gQVRvcExlZnRbMV0gJiZcblx0XHRcdFx0QkJvdHRvbUxlZnRbMV0gPj0gQUJvdHRvbUxlZnRbMV0pIHx8XG5cdFx0XHQoQlRvcExlZnRbMV0gPj0gQVRvcExlZnRbMV0gJiZcblx0XHRcdFx0QkJvdHRvbUxlZnRbMV0gPD0gQUJvdHRvbUxlZnRbMV0gJiZcblx0XHRcdFx0QlRvcExlZnRbMF0gPD0gQVRvcExlZnRbMF0gJiZcblx0XHRcdFx0QlRvcFJpZ2h0WzBdID49IEFUb3BSaWdodFswXSlcblx0XHQpIHtcblx0XHRcdG92ZXJhbGxSZXN1bHQgPSB0cnVlO1xuXHRcdH1cblxuXHRcdGlmIChcblx0XHRcdChBVG9wTGVmdFswXSA+PSBCVG9wTGVmdFswXSAmJlxuXHRcdFx0XHRBVG9wUmlnaHRbMF0gPD0gQlRvcFJpZ2h0WzBdICYmXG5cdFx0XHRcdEFUb3BMZWZ0WzFdIDw9IEJUb3BMZWZ0WzFdICYmXG5cdFx0XHRcdEFCb3R0b21MZWZ0WzFdID49IEJCb3R0b21MZWZ0WzFdKSB8fFxuXHRcdFx0KEFUb3BMZWZ0WzFdID49IEJUb3BMZWZ0WzFdICYmXG5cdFx0XHRcdEFCb3R0b21MZWZ0WzFdIDw9IEJCb3R0b21MZWZ0WzFdICYmXG5cdFx0XHRcdEFUb3BMZWZ0WzBdIDw9IEJUb3BMZWZ0WzBdICYmXG5cdFx0XHRcdEFUb3BSaWdodFswXSA+PSBCVG9wUmlnaHRbMF0pXG5cdFx0KSB7XG5cdFx0XHRvdmVyYWxsUmVzdWx0ID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZiAoXG5cdFx0XHRCVG9wTGVmdFswXSA9PSBBVG9wTGVmdFswXSAmJlxuXHRcdFx0QlRvcFJpZ2h0WzBdID09IEFUb3BSaWdodFswXSAmJlxuXHRcdFx0KChCVG9wTGVmdFsxXSA+PSBBVG9wTGVmdFsxXSAmJiBCVG9wTGVmdFsxXSA8IEFCb3R0b21MZWZ0WzFdKSB8fFxuXHRcdFx0XHQoQkJvdHRvbUxlZnRbMV0gPiBBVG9wTGVmdFsxXSAmJlxuXHRcdFx0XHRcdEJCb3R0b21MZWZ0WzFdIDw9IEFCb3R0b21MZWZ0WzFdKSlcblx0XHQpIHtcblx0XHRcdG92ZXJhbGxSZXN1bHQgPSB0cnVlO1xuXHRcdH1cblxuXHRcdGlmIChcblx0XHRcdEFUb3BMZWZ0WzBdID09IEJUb3BMZWZ0WzBdICYmXG5cdFx0XHRBVG9wUmlnaHRbMF0gPT0gQlRvcFJpZ2h0WzBdICYmXG5cdFx0XHQoKEFUb3BMZWZ0WzFdID49IEJUb3BMZWZ0WzFdICYmIEFUb3BMZWZ0WzFdIDwgQkJvdHRvbUxlZnRbMV0pIHx8XG5cdFx0XHRcdChBQm90dG9tTGVmdFsxXSA+IEJUb3BMZWZ0WzFdICYmXG5cdFx0XHRcdFx0QUJvdHRvbUxlZnRbMV0gPD0gQkJvdHRvbUxlZnRbMV0pKVxuXHRcdCkge1xuXHRcdFx0b3ZlcmFsbFJlc3VsdCA9IHRydWU7XG5cdFx0XHRpZiAoQVRvcExlZnRbMV0gPiBCVG9wTGVmdFsxXSAmJiBBQm90dG9tTGVmdFsxXSA8IEJCb3R0b21MZWZ0WzFdKSB7XG5cdFx0XHRcdGVuZ3VsZmVkID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoXG5cdFx0XHRCVG9wTGVmdFsxXSA9PSBBVG9wTGVmdFsxXSAmJlxuXHRcdFx0QkJvdHRvbUxlZnRbMV0gPT0gQUJvdHRvbUxlZnRbMV0gJiZcblx0XHRcdCgoQlRvcExlZnRbMF0gPj0gQVRvcExlZnRbMF0gJiYgQlRvcExlZnRbMF0gPCBBVG9wUmlnaHRbMF0pIHx8XG5cdFx0XHRcdChCVG9wUmlnaHRbMF0gPiBBVG9wTGVmdFswXSAmJiBCVG9wUmlnaHRbMF0gPD0gQVRvcFJpZ2h0WzBdKSlcblx0XHQpIHtcblx0XHRcdG92ZXJhbGxSZXN1bHQgPSB0cnVlO1xuXHRcdH1cblxuXHRcdGlmIChcblx0XHRcdEFUb3BMZWZ0WzFdID09IEJUb3BMZWZ0WzFdICYmXG5cdFx0XHRBQm90dG9tTGVmdFsxXSA9PSBCQm90dG9tTGVmdFsxXSAmJlxuXHRcdFx0KChBVG9wTGVmdFswXSA+PSBCVG9wTGVmdFswXSAmJiBBVG9wTGVmdFswXSA8IEJUb3BSaWdodFswXSkgfHxcblx0XHRcdFx0KEFUb3BSaWdodFswXSA+IEJUb3BMZWZ0WzBdICYmIEFUb3BSaWdodFswXSA8PSBCVG9wUmlnaHRbMF0pKVxuXHRcdCkge1xuXHRcdFx0b3ZlcmFsbFJlc3VsdCA9IHRydWU7XG5cdFx0XHRpZiAoQVRvcExlZnRbMF0gPiBCVG9wTGVmdFswXSAmJiBBVG9wUmlnaHRbMF0gPCBCVG9wUmlnaHRbMF0pIHtcblx0XHRcdFx0ZW5ndWxmZWQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChyZXN1bHRUeXBlID09IFwib3ZlcmFsbFwiKSB7XG5cdFx0XHRyZXR1cm4gb3ZlcmFsbFJlc3VsdDtcblx0XHR9IGVsc2UgaWYgKHJlc3VsdFR5cGUgPT0gXCJpbmRpdmlkdWFsXCIpIHtcblx0XHRcdHJldHVybiBCUmVzdWx0QXJyO1xuXHRcdH0gZWxzZSBpZiAocmVzdWx0VHlwZSA9PSBcImFsbFwiKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRvdmVyYWxsOiBvdmVyYWxsUmVzdWx0LFxuXHRcdFx0XHRpbmRpdmlkdWFsOiBCUmVzdWx0QXJyLFxuXHRcdFx0XHRpc0luc2lkZTogaXNJbnNpZGUsXG5cdFx0XHRcdGVuZ3VsZmVkOiBlbmd1bGZlZFxuXHRcdFx0fTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIG92ZXJhbGxSZXN1bHQ7XG5cdFx0fVxuXHR9O1xuXG5cdExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5maXRJdGVtc0ludG9GcmVlU3BhY2VzID0gZnVuY3Rpb24oXG5cdFx0aXRlbXMsXG5cdFx0ZnJlZVNwYWNlcyxcblx0XHRkb05vdE1lcmdlSXRlbXNcblx0KSB7XG5cdFx0dmFyIGl0ZW1zID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShpdGVtcykpO1xuXHRcdHZhciBmcmVlU3BhY2VzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShmcmVlU3BhY2VzKSk7XG5cdFx0dmFyIGRvTm90TWVyZ2VJdGVtcyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZG9Ob3RNZXJnZUl0ZW1zKSk7XG5cblx0XHRzb3J0UGxhaW5zQnlBcmVhKGl0ZW1zKTtcblxuXHRcdHZhciByZXBvc2l0aW9uZWRJdGVtcyA9IFtdO1xuXHRcdHZhciBtYXRjaCA9IHRoaXMuZmluZE1hdGNoaW5nU3BhY2UoaXRlbXMsIGZyZWVTcGFjZXMpO1xuXHRcdHdoaWxlIChcblx0XHRcdG1hdGNoLm1hdGNoaW5nSXRlbUluZGV4ICE9IG51bGwgJiZcblx0XHRcdG1hdGNoLm1hdGNoaW5nRnJlZVNwYWNlSW5kZXggIT0gbnVsbFxuXHRcdCkge1xuXHRcdFx0dmFyIHRlbXBJdGVtID0gSlNPTi5wYXJzZShcblx0XHRcdFx0SlNPTi5zdHJpbmdpZnkoaXRlbXNbbWF0Y2gubWF0Y2hpbmdJdGVtSW5kZXhdKVxuXHRcdFx0KTtcblxuXHRcdFx0dmFyIHJlcG9zaXRpb25lZEl0ZW0gPSB7XG5cdFx0XHRcdHg6XG5cdFx0XHRcdFx0ZnJlZVNwYWNlc1ttYXRjaC5tYXRjaGluZ0ZyZWVTcGFjZUluZGV4XS54ICtcblx0XHRcdFx0XHRnZXRNYXJnaW5BdFBvaW50LmNhbGwoXG5cdFx0XHRcdFx0XHR0aGlzLFxuXHRcdFx0XHRcdFx0ZnJlZVNwYWNlc1ttYXRjaC5tYXRjaGluZ0ZyZWVTcGFjZUluZGV4XS54XG5cdFx0XHRcdFx0KSxcblx0XHRcdFx0eTpcblx0XHRcdFx0XHRmcmVlU3BhY2VzW21hdGNoLm1hdGNoaW5nRnJlZVNwYWNlSW5kZXhdLnkgK1xuXHRcdFx0XHRcdGdldE1hcmdpbkF0UG9pbnQuY2FsbChcblx0XHRcdFx0XHRcdHRoaXMsXG5cdFx0XHRcdFx0XHRmcmVlU3BhY2VzW21hdGNoLm1hdGNoaW5nRnJlZVNwYWNlSW5kZXhdLnlcblx0XHRcdFx0XHQpLFxuXHRcdFx0XHR3aWR0aDogdGVtcEl0ZW0ud2lkdGgsXG5cdFx0XHRcdGhlaWdodDogdGVtcEl0ZW0uaGVpZ2h0LFxuXHRcdFx0XHRpbmRleDogdGVtcEl0ZW0uaW5kZXhcblx0XHRcdH07XG5cdFx0XHRyZXBvc2l0aW9uZWRJdGVtcy5wdXNoKHJlcG9zaXRpb25lZEl0ZW0pO1xuXG5cdFx0XHR2YXIgb2NjdXBpZWRTcGFjZSA9IHtcblx0XHRcdFx0eDogZnJlZVNwYWNlc1ttYXRjaC5tYXRjaGluZ0ZyZWVTcGFjZUluZGV4XS54LFxuXHRcdFx0XHR5OiBmcmVlU3BhY2VzW21hdGNoLm1hdGNoaW5nRnJlZVNwYWNlSW5kZXhdLnksXG5cdFx0XHRcdHdpZHRoOlxuXHRcdFx0XHRcdHRlbXBJdGVtLndpZHRoICtcblx0XHRcdFx0XHRnZXRNYXJnaW5BdFBvaW50LmNhbGwoXG5cdFx0XHRcdFx0XHR0aGlzLFxuXHRcdFx0XHRcdFx0ZnJlZVNwYWNlc1ttYXRjaC5tYXRjaGluZ0ZyZWVTcGFjZUluZGV4XS54XG5cdFx0XHRcdFx0KSxcblx0XHRcdFx0aGVpZ2h0OlxuXHRcdFx0XHRcdHRlbXBJdGVtLmhlaWdodCArXG5cdFx0XHRcdFx0Z2V0TWFyZ2luQXRQb2ludC5jYWxsKFxuXHRcdFx0XHRcdFx0dGhpcyxcblx0XHRcdFx0XHRcdGZyZWVTcGFjZXNbbWF0Y2gubWF0Y2hpbmdGcmVlU3BhY2VJbmRleF0ueVxuXHRcdFx0XHRcdCksXG5cdFx0XHRcdGRvTm90TWVyZ2VGbGFnOiB0cnVlXG5cdFx0XHR9O1xuXG5cdFx0XHRpdGVtcy5zcGxpY2UobWF0Y2gubWF0Y2hpbmdJdGVtSW5kZXgsIDEpO1xuXG5cdFx0XHR2YXIgbmV3RnJlZVNwYWNlcyA9IFtdO1xuXG5cdFx0XHR2YXIgbGVuZ3RoXzAgPSBmcmVlU3BhY2VzLmxlbmd0aDtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHRcdFx0XHR2YXIgcGxhbmVEaWZmID0gdGhpcy5zdWJ0cmFjdFBsYW5lcyhcblx0XHRcdFx0XHRmcmVlU3BhY2VzW2ldLFxuXHRcdFx0XHRcdG9jY3VwaWVkU3BhY2Vcblx0XHRcdFx0KTtcblx0XHRcdFx0aWYgKHBsYW5lRGlmZiAhPSBmYWxzZSkge1xuXHRcdFx0XHRcdG5ld0ZyZWVTcGFjZXMgPSBuZXdGcmVlU3BhY2VzLmNvbmNhdChwbGFuZURpZmYpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdG5ld0ZyZWVTcGFjZXMucHVzaChcblx0XHRcdFx0XHRcdEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZnJlZVNwYWNlc1tpXSkpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBjYWxjdWxhdGUgbmV3IG1lcmdlZEZyZWVTcGFjZXNcblx0XHRcdGRvTm90TWVyZ2VJdGVtcy5wdXNoKG9jY3VwaWVkU3BhY2UpO1xuXHRcdFx0dmFyIG5ld01lcmdlZEZyZWVTcGFjZXMgPSB0aGlzLm1lcmdlRnJlZVNwYWNlcyhcblx0XHRcdFx0bmV3RnJlZVNwYWNlcyxcblx0XHRcdFx0ZG9Ob3RNZXJnZUl0ZW1zXG5cdFx0XHQpO1xuXG5cdFx0XHRmcmVlU3BhY2VzID0gbmV3TWVyZ2VkRnJlZVNwYWNlcztcblx0XHRcdHZhciBtYXRjaCA9IHRoaXMuZmluZE1hdGNoaW5nU3BhY2UoaXRlbXMsIG5ld01lcmdlZEZyZWVTcGFjZXMpO1xuXHRcdH1cblx0XHRyZXR1cm4geyByZXBvc2l0aW9uZWRJdGVtczogcmVwb3NpdGlvbmVkSXRlbXMsIGZyZWVTcGFjZXM6IGZyZWVTcGFjZXMgfTtcblx0fTtcblxuXHRMaW1iZXJHcmlkVmlldy5wcm90b3R5cGUuZmluZE1hdGNoaW5nU3BhY2UgPSBmdW5jdGlvbihpdGVtcywgZnJlZVNwYWNlcykge1xuXHRcdC8vIElNUE9SVEFOVFxuXHRcdC8vIGl0ZW1zIG11c3Qgc29ydGVkIGluIGRlc2NlbmRpbmcgb3JkZXIgYWNjb3JkaW5nIHRvIGFyZWFcblx0XHQvLyBJTVBPUlRBTlQgRU5EXG5cblx0XHR2YXIgbWF0Y2hpbmdJdGVtSW5kZXggPSBudWxsO1xuXHRcdHZhciBtYXRjaGluZ0ZyZWVTcGFjZUluZGV4ID0gbnVsbDtcblx0XHR2YXIgbGVuZ3RoXzAgPSBpdGVtcy5sZW5ndGg7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHR2YXIgcmFuZG9tUG9zc2liaWxpdGllcyA9IFtdO1xuXHRcdFx0dmFyIHBvc3NpYmlsaXRpZXNXaWR0aCA9IFtdO1xuXHRcdFx0dmFyIHBvc3NpYmlsaXRpZXNIZWlnaHQgPSBbXTtcblx0XHRcdHZhciBsZW5ndGhfMSA9IGZyZWVTcGFjZXMubGVuZ3RoO1xuXHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBsZW5ndGhfMTsgaisrKSB7XG5cdFx0XHRcdHZhciB0ZW1wSXRlbSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoaXRlbXNbaV0pKTtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdGdldE1hcmdpbkF0UG9pbnQuY2FsbCh0aGlzLCBmcmVlU3BhY2VzW2pdLngpID09IHRoaXMuTUFSR0lOXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHRlbXBJdGVtLndpZHRoICs9IHRoaXMuTUFSR0lOICogMTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0Z2V0TWFyZ2luQXRQb2ludC5jYWxsKHRoaXMsIGZyZWVTcGFjZXNbal0ueSkgPT0gdGhpcy5NQVJHSU5cblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0dGVtcEl0ZW0uaGVpZ2h0ICs9IHRoaXMuTUFSR0lOICogMTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciBmcmVlU3BhY2VXaWR0aCA9IGZyZWVTcGFjZXNbal0ud2lkdGg7XG5cdFx0XHRcdHZhciBmcmVlU3BhY2VIZWlnaHQgPSBmcmVlU3BhY2VzW2pdLmhlaWdodDtcblxuXHRcdFx0XHRpZiAoYXJlUGxhaW5zSWRlbnRpY2FsKHRlbXBJdGVtLCBmcmVlU3BhY2VzW2pdKSkge1xuXHRcdFx0XHRcdG1hdGNoaW5nSXRlbUluZGV4ID0gaTtcblx0XHRcdFx0XHRtYXRjaGluZ0ZyZWVTcGFjZUluZGV4ID0gajtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRNYXRoLmZsb29yKGZyZWVTcGFjZVdpZHRoIC8gdGVtcEl0ZW0ud2lkdGgpID49IDEgJiZcblx0XHRcdFx0XHRmcmVlU3BhY2VIZWlnaHQgPj0gdGVtcEl0ZW0uaGVpZ2h0XG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHBvc3NpYmlsaXRpZXNXaWR0aC5wdXNoKGopO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRNYXRoLmZsb29yKGZyZWVTcGFjZUhlaWdodCAvIHRlbXBJdGVtLmhlaWdodCkgPj0gMSAmJlxuXHRcdFx0XHRcdGZyZWVTcGFjZVdpZHRoID49IHRlbXBJdGVtLndpZHRoXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHBvc3NpYmlsaXRpZXNIZWlnaHQucHVzaChqKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR2YXIgZ3JlYXRlc3RXaWR0aERpZmYgPSAwO1xuXHRcdFx0dmFyIGdyZWF0ZXN0V2lkdGhEaWZmSW5kZXggPSBudWxsO1xuXHRcdFx0dmFyIG1pbllQb3NzaWJpbGl0aWVzV2lkdGggPSAwO1xuXHRcdFx0dmFyIG1pbllQb3NzaWJpbGl0aWVzV2lkdGhJbmRleCA9IG51bGw7XG5cdFx0XHR2YXIgZ3JlYXRlc3RIZWlnaHREaWZmID0gMDtcblx0XHRcdHZhciBncmVhdGVzdEhlaWdodERpZmZJbmRleCA9IG51bGw7XG5cdFx0XHR2YXIgbWluWVBvc3NpYmlsaXRpZXNIZWlnaHQgPSAwO1xuXHRcdFx0dmFyIG1pbllQb3NzaWJpbGl0aWVzSGVpZ2h0SW5kZXggPSBudWxsO1xuXG5cdFx0XHR2YXIgbGVuZ3RoXzEgPSBwb3NzaWJpbGl0aWVzV2lkdGgubGVuZ3RoO1xuXHRcdFx0Zm9yICh2YXIgayA9IDA7IGsgPCBsZW5ndGhfMTsgaysrKSB7XG5cdFx0XHRcdHZhciBmbG9vcmVkUXVvdGllbnQgPSBNYXRoLmZsb29yKFxuXHRcdFx0XHRcdGZyZWVTcGFjZXNbcG9zc2liaWxpdGllc1dpZHRoW2tdXS53aWR0aCAvIHRlbXBJdGVtLndpZHRoXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHZhciBxdW90aWVudCA9XG5cdFx0XHRcdFx0ZnJlZVNwYWNlc1twb3NzaWJpbGl0aWVzV2lkdGhba11dLndpZHRoIC8gdGVtcEl0ZW0ud2lkdGg7XG5cdFx0XHRcdHZhciBkaWZmID0gcXVvdGllbnQgLSBmbG9vcmVkUXVvdGllbnQ7XG5cblx0XHRcdFx0aWYgKGRpZmYgPiBncmVhdGVzdFdpZHRoRGlmZikge1xuXHRcdFx0XHRcdGdyZWF0ZXN0V2lkdGhEaWZmID0gZGlmZjtcblx0XHRcdFx0XHRncmVhdGVzdFdpZHRoRGlmZkluZGV4ID0gcG9zc2liaWxpdGllc1dpZHRoW2tdO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdGZyZWVTcGFjZXNbcG9zc2liaWxpdGllc1dpZHRoW2tdXS55IDw9XG5cdFx0XHRcdFx0XHRtaW5ZUG9zc2liaWxpdGllc1dpZHRoIHx8XG5cdFx0XHRcdFx0bWluWVBvc3NpYmlsaXRpZXNXaWR0aCA9PSAwXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdGlmIChcblx0XHRcdFx0XHRcdGZyZWVTcGFjZXNbcG9zc2liaWxpdGllc1dpZHRoW2tdXS55ID09XG5cdFx0XHRcdFx0XHRtaW5ZUG9zc2liaWxpdGllc1dpZHRoXG5cdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRpZiAoZ3JlYXRlc3RXaWR0aERpZmZJbmRleCA9PSBudWxsKSB7XG5cdFx0XHRcdFx0XHRcdG1pbllQb3NzaWJpbGl0aWVzV2lkdGggPVxuXHRcdFx0XHRcdFx0XHRcdGZyZWVTcGFjZXNbcG9zc2liaWxpdGllc1dpZHRoW2tdXS55O1xuXHRcdFx0XHRcdFx0XHRtaW5ZUG9zc2liaWxpdGllc1dpZHRoSW5kZXggPSBwb3NzaWJpbGl0aWVzV2lkdGhba107XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRpZiAoZGlmZiA9PSBncmVhdGVzdFdpZHRoRGlmZikge1xuXHRcdFx0XHRcdFx0XHRcdG1pbllQb3NzaWJpbGl0aWVzV2lkdGggPVxuXHRcdFx0XHRcdFx0XHRcdFx0ZnJlZVNwYWNlc1twb3NzaWJpbGl0aWVzV2lkdGhba11dLnk7XG5cdFx0XHRcdFx0XHRcdFx0bWluWVBvc3NpYmlsaXRpZXNXaWR0aEluZGV4ID1cblx0XHRcdFx0XHRcdFx0XHRcdHBvc3NpYmlsaXRpZXNXaWR0aFtrXTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRtaW5ZUG9zc2liaWxpdGllc1dpZHRoID1cblx0XHRcdFx0XHRcdFx0ZnJlZVNwYWNlc1twb3NzaWJpbGl0aWVzV2lkdGhba11dLnk7XG5cdFx0XHRcdFx0XHRtaW5ZUG9zc2liaWxpdGllc1dpZHRoSW5kZXggPSBwb3NzaWJpbGl0aWVzV2lkdGhba107XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHZhciBsZW5ndGhfMSA9IHBvc3NpYmlsaXRpZXNIZWlnaHQubGVuZ3RoO1xuXHRcdFx0Zm9yIChrID0gMDsgayA8IGxlbmd0aF8xOyBrKyspIHtcblx0XHRcdFx0dmFyIGZsb29yZWRRdW90aWVudCA9IE1hdGguZmxvb3IoXG5cdFx0XHRcdFx0ZnJlZVNwYWNlc1twb3NzaWJpbGl0aWVzSGVpZ2h0W2tdXS5oZWlnaHQgLyB0ZW1wSXRlbS5oZWlnaHRcblx0XHRcdFx0KTtcblx0XHRcdFx0dmFyIHF1b3RpZW50ID1cblx0XHRcdFx0XHRmcmVlU3BhY2VzW3Bvc3NpYmlsaXRpZXNIZWlnaHRba11dLmhlaWdodCAvIHRlbXBJdGVtLmhlaWdodDtcblx0XHRcdFx0dmFyIGRpZmYgPSBxdW90aWVudCAtIGZsb29yZWRRdW90aWVudDtcblxuXHRcdFx0XHRpZiAoZGlmZiA+IGdyZWF0ZXN0SGVpZ2h0RGlmZikge1xuXHRcdFx0XHRcdGdyZWF0ZXN0SGVpZ2h0RGlmZiA9IGRpZmY7XG5cdFx0XHRcdFx0Z3JlYXRlc3RIZWlnaHREaWZmSW5kZXggPSBwb3NzaWJpbGl0aWVzSGVpZ2h0W2tdO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdGZyZWVTcGFjZXNbcG9zc2liaWxpdGllc0hlaWdodFtrXV0ueSA8PVxuXHRcdFx0XHRcdFx0bWluWVBvc3NpYmlsaXRpZXNIZWlnaHQgfHxcblx0XHRcdFx0XHRtaW5ZUG9zc2liaWxpdGllc0hlaWdodCA9PSAwXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdGlmIChcblx0XHRcdFx0XHRcdGZyZWVTcGFjZXNbcG9zc2liaWxpdGllc0hlaWdodFtrXV0ueSA9PVxuXHRcdFx0XHRcdFx0bWluWVBvc3NpYmlsaXRpZXNIZWlnaHRcblx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdGlmIChncmVhdGVzdEhlaWdodERpZmZJbmRleCA9PSBudWxsKSB7XG5cdFx0XHRcdFx0XHRcdG1pbllQb3NzaWJpbGl0aWVzSGVpZ2h0ID1cblx0XHRcdFx0XHRcdFx0XHRmcmVlU3BhY2VzW3Bvc3NpYmlsaXRpZXNIZWlnaHRba11dLnk7XG5cdFx0XHRcdFx0XHRcdG1pbllQb3NzaWJpbGl0aWVzSGVpZ2h0SW5kZXggPVxuXHRcdFx0XHRcdFx0XHRcdHBvc3NpYmlsaXRpZXNIZWlnaHRba107XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRpZiAoZGlmZiA9PSBncmVhdGVzdEhlaWdodERpZmYpIHtcblx0XHRcdFx0XHRcdFx0XHRtaW5ZUG9zc2liaWxpdGllc0hlaWdodCA9XG5cdFx0XHRcdFx0XHRcdFx0XHRmcmVlU3BhY2VzW3Bvc3NpYmlsaXRpZXNIZWlnaHRba11dLnk7XG5cdFx0XHRcdFx0XHRcdFx0bWluWVBvc3NpYmlsaXRpZXNIZWlnaHRJbmRleCA9XG5cdFx0XHRcdFx0XHRcdFx0XHRwb3NzaWJpbGl0aWVzSGVpZ2h0W2tdO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdG1pbllQb3NzaWJpbGl0aWVzSGVpZ2h0ID1cblx0XHRcdFx0XHRcdFx0ZnJlZVNwYWNlc1twb3NzaWJpbGl0aWVzSGVpZ2h0W2tdXS55O1xuXHRcdFx0XHRcdFx0bWluWVBvc3NpYmlsaXRpZXNIZWlnaHRJbmRleCA9IHBvc3NpYmlsaXRpZXNIZWlnaHRba107XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmIChcblx0XHRcdFx0bWluWVBvc3NpYmlsaXRpZXNXaWR0aEluZGV4ICE9IG51bGwgfHxcblx0XHRcdFx0bWluWVBvc3NpYmlsaXRpZXNIZWlnaHRJbmRleCAhPSBudWxsXG5cdFx0XHQpIHtcblx0XHRcdFx0aWYgKG1pbllQb3NzaWJpbGl0aWVzV2lkdGggPCBtaW5ZUG9zc2liaWxpdGllc0hlaWdodCkge1xuXHRcdFx0XHRcdG1hdGNoaW5nSXRlbUluZGV4ID0gaTtcblx0XHRcdFx0XHRtYXRjaGluZ0ZyZWVTcGFjZUluZGV4ID0gbWluWVBvc3NpYmlsaXRpZXNXaWR0aEluZGV4O1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdG1hdGNoaW5nSXRlbUluZGV4ID0gaTtcblx0XHRcdFx0XHRtYXRjaGluZ0ZyZWVTcGFjZUluZGV4ID0gbWluWVBvc3NpYmlsaXRpZXNIZWlnaHRJbmRleDtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBCZWxvdyBpZiBzdGF0ZW1lbnQgd2lsbCBuZXZlciBnZXQgZXhlY3V0ZWQsIFNvcnJ5IE9DRFxuXHRcdFx0aWYgKFxuXHRcdFx0XHRncmVhdGVzdFdpZHRoRGlmZkluZGV4ICE9IG51bGwgfHxcblx0XHRcdFx0Z3JlYXRlc3RIZWlnaHREaWZmSW5kZXggIT0gbnVsbFxuXHRcdFx0KSB7XG5cdFx0XHRcdGlmIChncmVhdGVzdFdpZHRoRGlmZiA+IGdyZWF0ZXN0SGVpZ2h0RGlmZikge1xuXHRcdFx0XHRcdG1hdGNoaW5nSXRlbUluZGV4ID0gaTtcblx0XHRcdFx0XHRtYXRjaGluZ0ZyZWVTcGFjZUluZGV4ID0gZ3JlYXRlc3RXaWR0aERpZmZJbmRleDtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRtYXRjaGluZ0l0ZW1JbmRleCA9IGk7XG5cdFx0XHRcdFx0bWF0Y2hpbmdGcmVlU3BhY2VJbmRleCA9IGdyZWF0ZXN0SGVpZ2h0RGlmZkluZGV4O1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB7XG5cdFx0XHRtYXRjaGluZ0l0ZW1JbmRleDogbWF0Y2hpbmdJdGVtSW5kZXgsXG5cdFx0XHRtYXRjaGluZ0ZyZWVTcGFjZUluZGV4OiBtYXRjaGluZ0ZyZWVTcGFjZUluZGV4XG5cdFx0fTtcblx0fTtcblxuXHRMaW1iZXJHcmlkVmlldy5wcm90b3R5cGUuZml0UmVtYWluaW5nSXRlbXMgPSBmdW5jdGlvbihcblx0XHRwb3NpdGlvbkRhdGEsXG5cdFx0cmVtYWluaW5nSXRlbXMsXG5cdFx0YWxsQWZmZWN0ZWRJdGVtcyxcblx0XHRjaGFuZ2VkSW5kZXgsXG5cdFx0cHJldmlvdXNGaXREZXRhaWxzXG5cdCkge1xuXHRcdGlmIChyZW1haW5pbmdJdGVtcy5sZW5ndGggPT0gMCkge1xuXHRcdFx0cmV0dXJuIHBvc2l0aW9uRGF0YTtcblx0XHR9XG5cdFx0dmFyIGFmZmVjdGVkSXRlbXNPYmplY3QgPSBbXTtcblx0XHR2YXIgbGVuZ3RoXzAgPSBhbGxBZmZlY3RlZEl0ZW1zLmFmZmVjdGVkSXRlbXMubGVuZ3RoO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHRcdFx0YWZmZWN0ZWRJdGVtc09iamVjdC5wdXNoKFxuXHRcdFx0XHRKU09OLnBhcnNlKFxuXHRcdFx0XHRcdEpTT04uc3RyaW5naWZ5KFxuXHRcdFx0XHRcdFx0cG9zaXRpb25EYXRhW2FsbEFmZmVjdGVkSXRlbXMuYWZmZWN0ZWRJdGVtc1tpXV1cblx0XHRcdFx0XHQpXG5cdFx0XHRcdClcblx0XHRcdCk7XG5cdFx0fVxuXHRcdHZhciBhZmZlY3RlZEl0ZW1zT2JqZWN0RGVwdGhEZXNjT3JkZXIgPSBzb3J0UGxhaW5zQnlEZXB0aChcblx0XHRcdGFmZmVjdGVkSXRlbXNPYmplY3Rcblx0XHQpO1xuXHRcdHZhciBncmVhdGVzdERlcHRoQWZmZWN0ZWRJdGVtcyA9XG5cdFx0XHRhZmZlY3RlZEl0ZW1zT2JqZWN0RGVwdGhEZXNjT3JkZXJbMF0ueSArXG5cdFx0XHRhZmZlY3RlZEl0ZW1zT2JqZWN0RGVwdGhEZXNjT3JkZXJbMF0uaGVpZ2h0O1xuXG5cdFx0dmFyIHJlbWFpbmluZ0l0ZW1zSW5kaWNlc01hcCA9IHt9O1xuXHRcdHZhciBsZW5ndGhfMCA9IHJlbWFpbmluZ0l0ZW1zLmxlbmd0aDtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF8wOyBpKyspIHtcblx0XHRcdHJlbWFpbmluZ0l0ZW1zSW5kaWNlc01hcFtyZW1haW5pbmdJdGVtc1tpXV0gPSB0cnVlO1xuXHRcdH1cblxuXHRcdHZhciBpdGVtc0Fib3ZlR3JlYXRlc3REZXB0aCA9IFtdO1xuXHRcdHZhciByZWNhbGN1bGF0ZWRHcmVhdGVzdERlcHRoQWZmZWN0ZWRJdGVtc0FuZE5vbkFmZmVjdGVkSXRlbXNDYXNlR3JlYXRlciA9IG51bGw7XG5cdFx0dmFyIHJlY2FsY3VsYXRlZEdyZWF0ZXN0RGVwdGhBZmZlY3RlZEl0ZW1zQW5kTm9uQWZmZWN0ZWRJdGVtc0Nhc2VMZXNzZXIgPSBudWxsO1xuXHRcdHZhciBsZW5ndGhfMCA9IHBvc2l0aW9uRGF0YS5sZW5ndGg7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHRpZiAocmVtYWluaW5nSXRlbXNJbmRpY2VzTWFwLmhhc093blByb3BlcnR5KGkpKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKFxuXHRcdFx0XHRwb3NpdGlvbkRhdGFbaV0ueSA8IGdyZWF0ZXN0RGVwdGhBZmZlY3RlZEl0ZW1zICYmXG5cdFx0XHRcdChwb3NpdGlvbkRhdGFbaV0ueSArIHBvc2l0aW9uRGF0YVtpXS5oZWlnaHQgPD1cblx0XHRcdFx0XHRncmVhdGVzdERlcHRoQWZmZWN0ZWRJdGVtcyB8fFxuXHRcdFx0XHRcdHBvc2l0aW9uRGF0YVtpXS55ICsgcG9zaXRpb25EYXRhW2ldLmhlaWdodCA+XG5cdFx0XHRcdFx0XHRncmVhdGVzdERlcHRoQWZmZWN0ZWRJdGVtcylcblx0XHRcdCkge1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0cG9zaXRpb25EYXRhW2ldLnkgKyBwb3NpdGlvbkRhdGFbaV0uaGVpZ2h0ID5cblx0XHRcdFx0XHRncmVhdGVzdERlcHRoQWZmZWN0ZWRJdGVtc1xuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0XHRyZWNhbGN1bGF0ZWRHcmVhdGVzdERlcHRoQWZmZWN0ZWRJdGVtc0FuZE5vbkFmZmVjdGVkSXRlbXNDYXNlR3JlYXRlciA8XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uRGF0YVtpXS55ICsgcG9zaXRpb25EYXRhW2ldLmhlaWdodCB8fFxuXHRcdFx0XHRcdFx0cmVjYWxjdWxhdGVkR3JlYXRlc3REZXB0aEFmZmVjdGVkSXRlbXNBbmROb25BZmZlY3RlZEl0ZW1zQ2FzZUdyZWF0ZXIgPT1cblx0XHRcdFx0XHRcdFx0bnVsbFxuXHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0cmVjYWxjdWxhdGVkR3JlYXRlc3REZXB0aEFmZmVjdGVkSXRlbXNBbmROb25BZmZlY3RlZEl0ZW1zQ2FzZUdyZWF0ZXIgPVxuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbkRhdGFbaV0ueSArIHBvc2l0aW9uRGF0YVtpXS5oZWlnaHQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRwb3NpdGlvbkRhdGFbaV0ueSArIHBvc2l0aW9uRGF0YVtpXS5oZWlnaHQgPD1cblx0XHRcdFx0XHRncmVhdGVzdERlcHRoQWZmZWN0ZWRJdGVtc1xuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0XHRyZWNhbGN1bGF0ZWRHcmVhdGVzdERlcHRoQWZmZWN0ZWRJdGVtc0FuZE5vbkFmZmVjdGVkSXRlbXNDYXNlTGVzc2VyIDxcblx0XHRcdFx0XHRcdFx0cG9zaXRpb25EYXRhW2ldLnkgKyBwb3NpdGlvbkRhdGFbaV0uaGVpZ2h0IHx8XG5cdFx0XHRcdFx0XHRyZWNhbGN1bGF0ZWRHcmVhdGVzdERlcHRoQWZmZWN0ZWRJdGVtc0FuZE5vbkFmZmVjdGVkSXRlbXNDYXNlTGVzc2VyID09XG5cdFx0XHRcdFx0XHRcdG51bGxcblx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdHJlY2FsY3VsYXRlZEdyZWF0ZXN0RGVwdGhBZmZlY3RlZEl0ZW1zQW5kTm9uQWZmZWN0ZWRJdGVtc0Nhc2VMZXNzZXIgPVxuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbkRhdGFbaV0ueSArIHBvc2l0aW9uRGF0YVtpXS5oZWlnaHQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKFxuXHRcdFx0cmVjYWxjdWxhdGVkR3JlYXRlc3REZXB0aEFmZmVjdGVkSXRlbXNBbmROb25BZmZlY3RlZEl0ZW1zQ2FzZUdyZWF0ZXIgIT1cblx0XHRcdG51bGxcblx0XHQpIHtcblx0XHRcdC8vIGZpdFJlbWFpbmluZ0l0ZW1zIENhc2UgSVxuXHRcdFx0dmFyIGdyZWF0ZXN0RGVwdGhPZkFmZmVjdGVkQXJlYSA9IHJlY2FsY3VsYXRlZEdyZWF0ZXN0RGVwdGhBZmZlY3RlZEl0ZW1zQW5kTm9uQWZmZWN0ZWRJdGVtc0Nhc2VHcmVhdGVyO1xuXHRcdFx0dmFyIGl0ZW1zVG9TaGlmdERhdGEgPSB0aGlzLmdldEl0ZW1zRnJvbVBvaW50RGVwdGgoXG5cdFx0XHRcdGdyZWF0ZXN0RGVwdGhPZkFmZmVjdGVkQXJlYSxcblx0XHRcdFx0dHJ1ZSxcblx0XHRcdFx0cG9zaXRpb25EYXRhXG5cdFx0XHQpO1xuXHRcdFx0dmFyIGl0ZW1zVG9TaGlmdCA9IGl0ZW1zVG9TaGlmdERhdGEuaXRlbXNGcm9tUG9pbnREZXB0aDtcblxuXHRcdFx0dmFyIGluaXRpYWxGaXREYXRhID0gdGhpcy5maXRSZW1haW5pbmdJdGVtc0Fib3ZlRGVlcGVzdExpbmUoXG5cdFx0XHRcdGdyZWF0ZXN0RGVwdGhPZkFmZmVjdGVkQXJlYSxcblx0XHRcdFx0cG9zaXRpb25EYXRhLFxuXHRcdFx0XHRyZW1haW5pbmdJdGVtcyxcblx0XHRcdFx0cHJldmlvdXNGaXREZXRhaWxzXG5cdFx0XHQpO1xuXHRcdFx0cG9zaXRpb25EYXRhID0gaW5pdGlhbEZpdERhdGEucG9zaXRpb25EYXRhO1xuXHRcdFx0cmVtYWluaW5nSXRlbXMgPSBpbml0aWFsRml0RGF0YS5yZW1haW5pbmdJdGVtcztcblxuXHRcdFx0dmFyIGZpbmFsRml0RGF0YSA9IHRoaXMuZml0UmVtYWluaW5nSXRlbXNCZWxvd0RlZXBlc3RMaW5lKFxuXHRcdFx0XHRncmVhdGVzdERlcHRoT2ZBZmZlY3RlZEFyZWEsXG5cdFx0XHRcdHBvc2l0aW9uRGF0YSxcblx0XHRcdFx0cmVtYWluaW5nSXRlbXMsXG5cdFx0XHRcdGFsbEFmZmVjdGVkSXRlbXNcblx0XHRcdCk7XG5cdFx0XHR2YXIgZmluYWxQb3NpdGlvbkRhdGEgPSB0aGlzLnNoaXRmdEl0ZW1zQmVsb3coXG5cdFx0XHRcdGZpbmFsRml0RGF0YS5kZWVwZXN0WSAtXG5cdFx0XHRcdFx0Z3JlYXRlc3REZXB0aE9mQWZmZWN0ZWRBcmVhICtcblx0XHRcdFx0XHRpdGVtc1RvU2hpZnREYXRhLnNoaWZ0SGVpZ2h0VG9BZGQsXG5cdFx0XHRcdGZpbmFsRml0RGF0YS5wb3NpdGlvbkRhdGEsXG5cdFx0XHRcdGl0ZW1zVG9TaGlmdFxuXHRcdFx0KTtcblx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0cmVjYWxjdWxhdGVkR3JlYXRlc3REZXB0aEFmZmVjdGVkSXRlbXNBbmROb25BZmZlY3RlZEl0ZW1zQ2FzZUxlc3NlciAhPVxuXHRcdFx0bnVsbFxuXHRcdCkge1xuXHRcdFx0Ly8gZml0UmVtYWluaW5nSXRlbXMgQ2FzZSBJSVxuXHRcdFx0dmFyIGdyZWF0ZXN0RGVwdGhPZkFmZmVjdGVkQXJlYSA9IHJlY2FsY3VsYXRlZEdyZWF0ZXN0RGVwdGhBZmZlY3RlZEl0ZW1zQW5kTm9uQWZmZWN0ZWRJdGVtc0Nhc2VMZXNzZXI7XG5cdFx0XHR2YXIgaXRlbXNUb1NoaWZ0RGF0YSA9IHRoaXMuZ2V0SXRlbXNGcm9tUG9pbnREZXB0aChcblx0XHRcdFx0Z3JlYXRlc3REZXB0aE9mQWZmZWN0ZWRBcmVhLFxuXHRcdFx0XHRmYWxzZSxcblx0XHRcdFx0cG9zaXRpb25EYXRhXG5cdFx0XHQpO1xuXHRcdFx0dmFyIGl0ZW1zVG9TaGlmdCA9IGl0ZW1zVG9TaGlmdERhdGEuaXRlbXNGcm9tUG9pbnREZXB0aDtcblxuXHRcdFx0dmFyIGZpbmFsRml0RGF0YSA9IHRoaXMuZml0UmVtYWluaW5nSXRlbXNCZWxvd0RlZXBlc3RMaW5lKFxuXHRcdFx0XHRncmVhdGVzdERlcHRoT2ZBZmZlY3RlZEFyZWEsXG5cdFx0XHRcdHBvc2l0aW9uRGF0YSxcblx0XHRcdFx0cmVtYWluaW5nSXRlbXMsXG5cdFx0XHRcdGFsbEFmZmVjdGVkSXRlbXNcblx0XHRcdCk7XG5cdFx0XHR2YXIgZmluYWxQb3NpdGlvbkRhdGEgPSB0aGlzLnNoaXRmdEl0ZW1zQmVsb3coXG5cdFx0XHRcdGZpbmFsRml0RGF0YS5kZWVwZXN0WSAtIGdyZWF0ZXN0RGVwdGhPZkFmZmVjdGVkQXJlYSxcblx0XHRcdFx0ZmluYWxGaXREYXRhLnBvc2l0aW9uRGF0YSxcblx0XHRcdFx0aXRlbXNUb1NoaWZ0XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdHJldHVybiBmaW5hbFBvc2l0aW9uRGF0YTtcblx0fTtcblxuXHRMaW1iZXJHcmlkVmlldy5wcm90b3R5cGUuZml0UmVtYWluaW5nSXRlbXNBYm92ZURlZXBlc3RMaW5lID0gZnVuY3Rpb24oXG5cdFx0ZGVlcFBvaW50LFxuXHRcdHBvc2l0aW9uRGF0YSxcblx0XHRyZW1haW5pbmdJdGVtcyxcblx0XHRwcmV2aW91c0ZpdERldGFpbHNcblx0KSB7XG5cdFx0dmFyIGxpbmVQbGFuZSA9IHtcblx0XHRcdHg6IDAsXG5cdFx0XHR5OiBkZWVwUG9pbnQsXG5cdFx0XHR3aWR0aDogdGhpcy5XSURUSCxcblx0XHRcdGhlaWdodDogMVxuXHRcdH07XG5cblx0XHQvLyBmaW5kIGFsbCB0aGUgaXRlbXMgYWJvdmUgb3Igb24gZGVlcFBvaW50XG5cdFx0dmFyIHJlbWFpbmluZ0l0ZW1zTWFwID0ge307XG5cdFx0dmFyIGxlbmd0aF8wID0gcmVtYWluaW5nSXRlbXMubGVuZ3RoO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHRcdFx0cmVtYWluaW5nSXRlbXNNYXBbcmVtYWluaW5nSXRlbXNbaV1dID0gdHJ1ZTtcblx0XHR9XG5cdFx0dmFyIGRvTm90TWVyZ2VJdGVtcyA9IFtdO1xuXHRcdHZhciBsZW5ndGhfMCA9IHBvc2l0aW9uRGF0YS5sZW5ndGg7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHRpZiAocmVtYWluaW5nSXRlbXNNYXAuaGFzT3duUHJvcGVydHkoaSkpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAoXG5cdFx0XHRcdHBvc2l0aW9uRGF0YVtpXS55IDw9IGRlZXBQb2ludCAmJlxuXHRcdFx0XHRwb3NpdGlvbkRhdGFbaV0ueSArIHBvc2l0aW9uRGF0YVtpXS5oZWlnaHQgPD0gZGVlcFBvaW50XG5cdFx0XHQpIHtcblx0XHRcdFx0Ly8gJiYgYWRkZWQgcmVjZW50bHkgZHVlIHRvIGEgYnVnIGluIGFsZ29cblx0XHRcdFx0dmFyIG9iaiA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocG9zaXRpb25EYXRhW2ldKSk7XG5cdFx0XHRcdG9iai5kb05vdE1lcmdlRmxhZyA9IHRydWU7XG5cdFx0XHRcdGRvTm90TWVyZ2VJdGVtcy5wdXNoKG9iaik7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dmFyIHJlbWFpbmluZ0ZyZWVTcGFjZXMgPSBwcmV2aW91c0ZpdERldGFpbHMuZnJlZVNwYWNlcztcblx0XHRyZW1haW5pbmdGcmVlU3BhY2VzLnB1c2gobGluZVBsYW5lKTtcblxuXHRcdHZhciBtZXJnZWRGcmVlU3BhY2VzID0gdGhpcy5tZXJnZUZyZWVTcGFjZXMoXG5cdFx0XHRyZW1haW5pbmdGcmVlU3BhY2VzLFxuXHRcdFx0ZG9Ob3RNZXJnZUl0ZW1zXG5cdFx0KTtcblx0XHR2YXIgbGVuZ3RoXzAgPSBtZXJnZWRGcmVlU3BhY2VzLmxlbmd0aDtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF8wOyBpKyspIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bWVyZ2VkRnJlZVNwYWNlc1tpXS55ICsgbWVyZ2VkRnJlZVNwYWNlc1tpXS5oZWlnaHQgPT1cblx0XHRcdFx0ZGVlcFBvaW50ICsgMVxuXHRcdFx0KSB7XG5cdFx0XHRcdG1lcmdlZEZyZWVTcGFjZXNbaV0uaGVpZ2h0IC09IDE7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dmFyIHJlbWFpbmluZ0l0ZW1zT2JqZWN0ID0gW107XG5cdFx0dmFyIGxlbmd0aF8wID0gcmVtYWluaW5nSXRlbXMubGVuZ3RoO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHRcdFx0cmVtYWluaW5nSXRlbXNPYmplY3QucHVzaChcblx0XHRcdFx0SlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShwb3NpdGlvbkRhdGFbcmVtYWluaW5nSXRlbXNbaV1dKSlcblx0XHRcdCk7XG5cdFx0XHRyZW1haW5pbmdJdGVtc09iamVjdFtpXS5pbmRleCA9IHJlbWFpbmluZ0l0ZW1zW2ldO1xuXHRcdH1cblx0XHR2YXIgZml0RGV0YWlscyA9IHRoaXMuZml0SXRlbXNJbnRvRnJlZVNwYWNlcyhcblx0XHRcdHJlbWFpbmluZ0l0ZW1zT2JqZWN0LFxuXHRcdFx0bWVyZ2VkRnJlZVNwYWNlcyxcblx0XHRcdGRvTm90TWVyZ2VJdGVtc1xuXHRcdCk7XG5cdFx0dmFyIGZpdHRlZEl0ZW1zID0gZml0RGV0YWlscy5yZXBvc2l0aW9uZWRJdGVtcztcblxuXHRcdGlmIChmaXR0ZWRJdGVtcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRmaXR0ZWRSZW1haW5pbmdJdGVtcyA9IHt9O1xuXHRcdFx0dmFyIGxlbmd0aF8wID0gZml0dGVkSXRlbXMubGVuZ3RoO1xuXHRcdFx0dmFyIGxlbmd0aF8xID0gcmVtYWluaW5nSXRlbXMubGVuZ3RoO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgbGVuZ3RoXzE7IGorKykge1xuXHRcdFx0XHRcdGlmIChmaXR0ZWRJdGVtc1tpXS5pbmRleCA9PSByZW1haW5pbmdJdGVtc1tqXSkge1xuXHRcdFx0XHRcdFx0Zml0dGVkUmVtYWluaW5nSXRlbXNbal0gPSB0cnVlO1xuXHRcdFx0XHRcdFx0cG9zaXRpb25EYXRhW3JlbWFpbmluZ0l0ZW1zW2pdXS54ID0gZml0dGVkSXRlbXNbaV0ueDtcblx0XHRcdFx0XHRcdHBvc2l0aW9uRGF0YVtyZW1haW5pbmdJdGVtc1tqXV0ueSA9IGZpdHRlZEl0ZW1zW2ldLnk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHZhciB0ZW1wID0gT2JqZWN0LmtleXMoZml0dGVkUmVtYWluaW5nSXRlbXMpO1xuXHRcdFx0dmFyIGxlbmd0aF8wID0gdGVtcC5sZW5ndGggLSAxO1xuXHRcdFx0Zm9yICh2YXIgaSA9IGxlbmd0aF8wOyBpID49IDA7IGktLSkge1xuXHRcdFx0XHRyZW1haW5pbmdJdGVtcy5zcGxpY2UodGVtcFtpXSwgMSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHsgcmVtYWluaW5nSXRlbXM6IHJlbWFpbmluZ0l0ZW1zLCBwb3NpdGlvbkRhdGE6IHBvc2l0aW9uRGF0YSB9O1xuXHR9O1xuXG5cdExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5maXRSZW1haW5pbmdJdGVtc0JlbG93RGVlcGVzdExpbmUgPSBmdW5jdGlvbihcblx0XHRzdGFydGluZ1ksXG5cdFx0cG9zaXRpb25EYXRhLFxuXHRcdHJlbWFpbmluZ0l0ZW1zLFxuXHRcdGFsbEFmZmVjdGVkSXRlbXNcblx0KSB7XG5cdFx0aWYgKHJlbWFpbmluZ0l0ZW1zLmxlbmd0aCA9PSAwKSB7XG5cdFx0XHRyZXR1cm4geyBwb3NpdGlvbkRhdGE6IHBvc2l0aW9uRGF0YSwgZGVlcGVzdFk6IHN0YXJ0aW5nWSB9O1xuXHRcdH1cblx0XHR2YXIgcmVtYWluaW5nSXRlbXNCYWNrdXAgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHJlbWFpbmluZ0l0ZW1zKSk7XG5cdFx0dmFyIHJlbWFpbmluZ0l0ZW1zT2JqZWN0ID0gW107XG5cdFx0dmFyIGxlbmd0aF8wID0gcmVtYWluaW5nSXRlbXMubGVuZ3RoO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHRcdFx0cmVtYWluaW5nSXRlbXNPYmplY3QucHVzaChcblx0XHRcdFx0SlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShwb3NpdGlvbkRhdGFbcmVtYWluaW5nSXRlbXNbaV1dKSlcblx0XHRcdCk7XG5cdFx0XHRyZW1haW5pbmdJdGVtc09iamVjdFtpXS5pbmRleCA9IHJlbWFpbmluZ0l0ZW1zW2ldO1xuXHRcdH1cblx0XHR2YXIgcmVtYWluaW5nSXRlbXNPYmplY3QgPSBzb3J0UGxhaW5zQnlIZWlnaHQocmVtYWluaW5nSXRlbXNPYmplY3QpO1xuXG5cdFx0dmFyIGluaXRpYWxpemVkUGxhbmUgPSB7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogc3RhcnRpbmdZLFxuXHRcdFx0d2lkdGg6IHRoaXMuV0lEVEgsXG5cdFx0XHRoZWlnaHQ6XG5cdFx0XHRcdHJlbWFpbmluZ0l0ZW1zT2JqZWN0WzBdLmhlaWdodCArXG5cdFx0XHRcdGdldE1hcmdpbkF0UG9pbnQuY2FsbCh0aGlzLCBzdGFydGluZ1kpXG5cdFx0fTtcblxuXHRcdHZhciByZW1haW5pbmdXaWR0aCA9IHRoaXMuV0lEVEg7XG5cdFx0dmFyIGRlZXBlc3RZID0gc3RhcnRpbmdZO1xuXG5cdFx0d2hpbGUgKHJlbWFpbmluZ0l0ZW1zT2JqZWN0Lmxlbmd0aCAhPSAwKSB7XG5cdFx0XHRpZiAocmVtYWluaW5nSXRlbXNPYmplY3QubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRkZWVwZXN0WSA9XG5cdFx0XHRcdFx0c3RhcnRpbmdZICtcblx0XHRcdFx0XHRyZW1haW5pbmdJdGVtc09iamVjdFswXS5oZWlnaHQgK1xuXHRcdFx0XHRcdGdldE1hcmdpbkF0UG9pbnQuY2FsbCh0aGlzLCBzdGFydGluZ1kpO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgZnJlZVNwYWNlc0luQ3VycmVudFJvdyA9IFtdO1xuXHRcdFx0dmFyIG9jY3VwaWVkU3BhY2VzSW5DdXJyZW50Um93ID0gW107XG5cdFx0XHR2YXIgZml0dGVkUmVtYWluaW5nSXRlbXMgPSB7fTtcblx0XHRcdHZhciBsZW5ndGhfMCA9IHJlbWFpbmluZ0l0ZW1zT2JqZWN0Lmxlbmd0aDtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHRcdFx0XHRpZiAoZml0dGVkUmVtYWluaW5nSXRlbXMuaGFzT3duUHJvcGVydHkoaSkpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRyZW1haW5pbmdXaWR0aCA+PVxuXHRcdFx0XHRcdHJlbWFpbmluZ0l0ZW1zT2JqZWN0W2ldLndpZHRoICtcblx0XHRcdFx0XHRcdGdldE1hcmdpbkF0UG9pbnQuY2FsbCh0aGlzLCB0aGlzLldJRFRIIC0gcmVtYWluaW5nV2lkdGgpXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHJlbWFpbmluZ0l0ZW1zT2JqZWN0W2ldLnggPVxuXHRcdFx0XHRcdFx0dGhpcy5XSURUSCAtXG5cdFx0XHRcdFx0XHRyZW1haW5pbmdXaWR0aCArXG5cdFx0XHRcdFx0XHRnZXRNYXJnaW5BdFBvaW50LmNhbGwoXG5cdFx0XHRcdFx0XHRcdHRoaXMsXG5cdFx0XHRcdFx0XHRcdHRoaXMuV0lEVEggLSByZW1haW5pbmdXaWR0aFxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRyZW1haW5pbmdJdGVtc09iamVjdFtpXS55ID1cblx0XHRcdFx0XHRcdHN0YXJ0aW5nWSArIGdldE1hcmdpbkF0UG9pbnQuY2FsbCh0aGlzLCBzdGFydGluZ1kpO1xuXHRcdFx0XHRcdHBvc2l0aW9uRGF0YVtyZW1haW5pbmdJdGVtc09iamVjdFtpXS5pbmRleF0ueCA9XG5cdFx0XHRcdFx0XHR0aGlzLldJRFRIIC1cblx0XHRcdFx0XHRcdHJlbWFpbmluZ1dpZHRoICtcblx0XHRcdFx0XHRcdGdldE1hcmdpbkF0UG9pbnQuY2FsbChcblx0XHRcdFx0XHRcdFx0dGhpcyxcblx0XHRcdFx0XHRcdFx0dGhpcy5XSURUSCAtIHJlbWFpbmluZ1dpZHRoXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdHBvc2l0aW9uRGF0YVtyZW1haW5pbmdJdGVtc09iamVjdFtpXS5pbmRleF0ueSA9XG5cdFx0XHRcdFx0XHRzdGFydGluZ1kgKyBnZXRNYXJnaW5BdFBvaW50LmNhbGwodGhpcywgc3RhcnRpbmdZKTtcblxuXHRcdFx0XHRcdHZhciBvY2N1cGllZFNwYWNlID0ge1xuXHRcdFx0XHRcdFx0eDogdGhpcy5XSURUSCAtIHJlbWFpbmluZ1dpZHRoLFxuXHRcdFx0XHRcdFx0eTogc3RhcnRpbmdZLFxuXHRcdFx0XHRcdFx0d2lkdGg6XG5cdFx0XHRcdFx0XHRcdHJlbWFpbmluZ0l0ZW1zT2JqZWN0W2ldLndpZHRoICtcblx0XHRcdFx0XHRcdFx0Z2V0TWFyZ2luQXRQb2ludC5jYWxsKFxuXHRcdFx0XHRcdFx0XHRcdHRoaXMsXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5XSURUSCAtIHJlbWFpbmluZ1dpZHRoXG5cdFx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHRoZWlnaHQ6XG5cdFx0XHRcdFx0XHRcdHJlbWFpbmluZ0l0ZW1zT2JqZWN0W2ldLmhlaWdodCArXG5cdFx0XHRcdFx0XHRcdGdldE1hcmdpbkF0UG9pbnQuY2FsbCh0aGlzLCBzdGFydGluZ1kpLFxuXHRcdFx0XHRcdFx0ZG9Ob3RNZXJnZUZsYWc6IHRydWVcblx0XHRcdFx0XHR9O1xuXG5cdFx0XHRcdFx0b2NjdXBpZWRTcGFjZXNJbkN1cnJlbnRSb3cucHVzaChvY2N1cGllZFNwYWNlKTtcblxuXHRcdFx0XHRcdHZhciBmcmVlU3BhY2UgPSB7XG5cdFx0XHRcdFx0XHR4OiB0aGlzLldJRFRIIC0gcmVtYWluaW5nV2lkdGgsXG5cdFx0XHRcdFx0XHR5OlxuXHRcdFx0XHRcdFx0XHRzdGFydGluZ1kgK1xuXHRcdFx0XHRcdFx0XHRnZXRNYXJnaW5BdFBvaW50LmNhbGwodGhpcywgc3RhcnRpbmdZKSArXG5cdFx0XHRcdFx0XHRcdHJlbWFpbmluZ0l0ZW1zT2JqZWN0W2ldLmhlaWdodCxcblx0XHRcdFx0XHRcdHdpZHRoOlxuXHRcdFx0XHRcdFx0XHRyZW1haW5pbmdJdGVtc09iamVjdFtpXS53aWR0aCArXG5cdFx0XHRcdFx0XHRcdGdldE1hcmdpbkF0UG9pbnQuY2FsbChcblx0XHRcdFx0XHRcdFx0XHR0aGlzLFxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuV0lEVEggLSByZW1haW5pbmdXaWR0aFxuXHRcdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0aGVpZ2h0OlxuXHRcdFx0XHRcdFx0XHRpbml0aWFsaXplZFBsYW5lLnkgK1xuXHRcdFx0XHRcdFx0XHRpbml0aWFsaXplZFBsYW5lLmhlaWdodCAtXG5cdFx0XHRcdFx0XHRcdChzdGFydGluZ1kgK1xuXHRcdFx0XHRcdFx0XHRcdGdldE1hcmdpbkF0UG9pbnQuY2FsbCh0aGlzLCBzdGFydGluZ1kpICtcblx0XHRcdFx0XHRcdFx0XHRyZW1haW5pbmdJdGVtc09iamVjdFtpXS5oZWlnaHQpXG5cdFx0XHRcdFx0fTtcblxuXHRcdFx0XHRcdGlmIChpc1ZhbGlkUGxhbmUoZnJlZVNwYWNlKSkge1xuXHRcdFx0XHRcdFx0ZnJlZVNwYWNlc0luQ3VycmVudFJvdy5wdXNoKGZyZWVTcGFjZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGZpdHRlZFJlbWFpbmluZ0l0ZW1zW2ldID0gdHJ1ZTtcblxuXHRcdFx0XHRcdHJlbWFpbmluZ1dpZHRoID1cblx0XHRcdFx0XHRcdHJlbWFpbmluZ1dpZHRoIC1cblx0XHRcdFx0XHRcdChyZW1haW5pbmdJdGVtc09iamVjdFtpXS53aWR0aCArXG5cdFx0XHRcdFx0XHRcdGdldE1hcmdpbkF0UG9pbnQuY2FsbChcblx0XHRcdFx0XHRcdFx0XHR0aGlzLFxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuV0lEVEggLSByZW1haW5pbmdXaWR0aFxuXHRcdFx0XHRcdFx0XHQpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR2YXIgdGVtcCA9IE9iamVjdC5rZXlzKGZpdHRlZFJlbWFpbmluZ0l0ZW1zKTtcblx0XHRcdHZhciBsZW5ndGhfMCA9IHRlbXAubGVuZ3RoIC0gMTtcblx0XHRcdGZvciAodmFyIGkgPSBsZW5ndGhfMDsgaSA+PSAwOyBpLS0pIHtcblx0XHRcdFx0cmVtYWluaW5nSXRlbXNPYmplY3Quc3BsaWNlKHRlbXBbaV0sIDEpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAocmVtYWluaW5nV2lkdGggPiAwKSB7XG5cdFx0XHRcdHZhciBmcmVlU3BhY2UgPSB7XG5cdFx0XHRcdFx0eDogdGhpcy5XSURUSCAtIHJlbWFpbmluZ1dpZHRoLFxuXHRcdFx0XHRcdHk6IHN0YXJ0aW5nWSxcblx0XHRcdFx0XHR3aWR0aDogcmVtYWluaW5nV2lkdGgsXG5cdFx0XHRcdFx0aGVpZ2h0OiBpbml0aWFsaXplZFBsYW5lLmhlaWdodFxuXHRcdFx0XHR9O1xuXHRcdFx0XHRpZiAoaXNWYWxpZFBsYW5lKGZyZWVTcGFjZSkpIHtcblx0XHRcdFx0XHRmcmVlU3BhY2VzSW5DdXJyZW50Um93LnB1c2goZnJlZVNwYWNlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAocmVtYWluaW5nSXRlbXNPYmplY3QubGVuZ3RoID4gMCkge1xuXHRcdFx0XHR2YXIgbWVyZ2VkRnJlZVNwYWNlcyA9IHRoaXMubWVyZ2VGcmVlU3BhY2VzKFxuXHRcdFx0XHRcdGZyZWVTcGFjZXNJbkN1cnJlbnRSb3csXG5cdFx0XHRcdFx0b2NjdXBpZWRTcGFjZXNJbkN1cnJlbnRSb3dcblx0XHRcdFx0KTtcblx0XHRcdFx0dmFyIGZpdERldGFpbHMgPSB0aGlzLmZpdEl0ZW1zSW50b0ZyZWVTcGFjZXMoXG5cdFx0XHRcdFx0cmVtYWluaW5nSXRlbXNPYmplY3QsXG5cdFx0XHRcdFx0ZnJlZVNwYWNlc0luQ3VycmVudFJvdyxcblx0XHRcdFx0XHRvY2N1cGllZFNwYWNlc0luQ3VycmVudFJvd1xuXHRcdFx0XHQpO1xuXHRcdFx0XHR2YXIgZml0dGVkSXRlbXMgPSBmaXREZXRhaWxzLnJlcG9zaXRpb25lZEl0ZW1zO1xuXG5cdFx0XHRcdGlmIChmaXR0ZWRJdGVtcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0Zml0dGVkUmVtYWluaW5nSXRlbXMgPSB7fTtcblx0XHRcdFx0XHR2YXIgbGVuZ3RoXzAgPSBmaXR0ZWRJdGVtcy5sZW5ndGg7XG5cdFx0XHRcdFx0dmFyIGxlbmd0aF8xID0gcmVtYWluaW5nSXRlbXNPYmplY3QubGVuZ3RoO1xuXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHRcdFx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBsZW5ndGhfMTsgaisrKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChcblx0XHRcdFx0XHRcdFx0XHRmaXR0ZWRJdGVtc1tpXS5pbmRleCA9PVxuXHRcdFx0XHRcdFx0XHRcdHJlbWFpbmluZ0l0ZW1zT2JqZWN0W2pdLmluZGV4XG5cdFx0XHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0XHRcdGZpdHRlZFJlbWFpbmluZ0l0ZW1zW2pdID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0XHRwb3NpdGlvbkRhdGFbcmVtYWluaW5nSXRlbXNPYmplY3Rbal0uaW5kZXhdLnggPVxuXHRcdFx0XHRcdFx0XHRcdFx0Zml0dGVkSXRlbXNbaV0ueDtcblx0XHRcdFx0XHRcdFx0XHRwb3NpdGlvbkRhdGFbcmVtYWluaW5nSXRlbXNPYmplY3Rbal0uaW5kZXhdLnkgPVxuXHRcdFx0XHRcdFx0XHRcdFx0Zml0dGVkSXRlbXNbaV0ueTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHZhciB0ZW1wID0gT2JqZWN0LmtleXMoZml0dGVkUmVtYWluaW5nSXRlbXMpO1xuXHRcdFx0XHRcdHZhciBsZW5ndGhfMCA9IHRlbXAubGVuZ3RoIC0gMTtcblx0XHRcdFx0XHRmb3IgKHZhciBpID0gbGVuZ3RoXzA7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHRcdFx0XHRyZW1haW5pbmdJdGVtc09iamVjdC5zcGxpY2UodGVtcFtpXSwgMSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmIChyZW1haW5pbmdJdGVtc09iamVjdC5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHN0YXJ0aW5nWSA9IGluaXRpYWxpemVkUGxhbmUueSArIGluaXRpYWxpemVkUGxhbmUuaGVpZ2h0O1xuXHRcdFx0XHR2YXIgbmV4dEluaXRpYWxpemVQbGFuZSA9IHtcblx0XHRcdFx0XHR4OiAwLFxuXHRcdFx0XHRcdHk6IGluaXRpYWxpemVkUGxhbmUueSArIGluaXRpYWxpemVkUGxhbmUuaGVpZ2h0LFxuXHRcdFx0XHRcdHdpZHRoOiB0aGlzLldJRFRILFxuXHRcdFx0XHRcdGhlaWdodDpcblx0XHRcdFx0XHRcdHJlbWFpbmluZ0l0ZW1zT2JqZWN0WzBdLmhlaWdodCArXG5cdFx0XHRcdFx0XHRnZXRNYXJnaW5BdFBvaW50LmNhbGwoXG5cdFx0XHRcdFx0XHRcdHRoaXMsXG5cdFx0XHRcdFx0XHRcdGluaXRpYWxpemVkUGxhbmUueSArIGluaXRpYWxpemVkUGxhbmUuaGVpZ2h0XG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdH07XG5cdFx0XHRcdHZhciBpbml0aWFsaXplZFBsYW5lID0gbmV4dEluaXRpYWxpemVQbGFuZTtcblx0XHRcdFx0cmVtYWluaW5nV2lkdGggPSB0aGlzLldJRFRIO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB7IHBvc2l0aW9uRGF0YTogcG9zaXRpb25EYXRhLCBkZWVwZXN0WTogZGVlcGVzdFkgfTtcblx0fTtcblxuXHRMaW1iZXJHcmlkVmlldy5wcm90b3R5cGUuZ2V0SXRlbXNGcm9tUG9pbnREZXB0aCA9IGZ1bmN0aW9uKFxuXHRcdHN0YXJ0aW5nWSxcblx0XHRpbmNsdWRlUGxhbmVBYm92ZUFuZEJlbG93UG9pbnREZXB0aCA9IGZhbHNlLFxuXHRcdHBvc2l0aW9uRGF0YVxuXHQpIHtcblx0XHR2YXIgaXRlbXNGcm9tUG9pbnREZXB0aCA9IHt9O1xuXHRcdHZhciBzaGlmdEhlaWdodFRvQWRkID0gMDtcblx0XHR2YXIgbGVuZ3RoXzAgPSBwb3NpdGlvbkRhdGEubGVuZ3RoO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHRcdFx0aWYgKGluY2x1ZGVQbGFuZUFib3ZlQW5kQmVsb3dQb2ludERlcHRoID09IHRydWUpIHtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdHBvc2l0aW9uRGF0YVtpXS55IDwgc3RhcnRpbmdZICYmXG5cdFx0XHRcdFx0cG9zaXRpb25EYXRhW2ldLnkgKyBwb3NpdGlvbkRhdGFbaV0uaGVpZ2h0ID4gc3RhcnRpbmdZXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdGl0ZW1zRnJvbVBvaW50RGVwdGhbaV0gPSB0cnVlO1xuXG5cdFx0XHRcdFx0dmFyIGRpZmYgPSBzdGFydGluZ1kgLSBwb3NpdGlvbkRhdGFbaV0ueTtcblx0XHRcdFx0XHRpZiAoZGlmZiA+IHNoaWZ0SGVpZ2h0VG9BZGQpIHtcblx0XHRcdFx0XHRcdHNoaWZ0SGVpZ2h0VG9BZGQgPSBkaWZmO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAocG9zaXRpb25EYXRhW2ldLnkgPj0gc3RhcnRpbmdZKSB7XG5cdFx0XHRcdGl0ZW1zRnJvbVBvaW50RGVwdGhbaV0gPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4ge1xuXHRcdFx0aXRlbXNGcm9tUG9pbnREZXB0aDogaXRlbXNGcm9tUG9pbnREZXB0aCxcblx0XHRcdHNoaWZ0SGVpZ2h0VG9BZGQ6IHNoaWZ0SGVpZ2h0VG9BZGRcblx0XHR9O1xuXHR9O1xuXG5cdExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5zaGl0ZnRJdGVtc0JlbG93ID0gZnVuY3Rpb24oXG5cdFx0c2hpZnRIZWlnaHQsXG5cdFx0cG9zaXRpb25EYXRhLFxuXHRcdGluZGljZXNUb1NoaWZ0XG5cdCkge1xuXHRcdHNoaWZ0SGVpZ2h0ID0gc2hpZnRIZWlnaHQgKyB0aGlzLk1BUkdJTjtcblx0XHR2YXIgbGVuZ3RoXzAgPSBwb3NpdGlvbkRhdGEubGVuZ3RoO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHRcdFx0aWYgKGluZGljZXNUb1NoaWZ0Lmhhc093blByb3BlcnR5KGkpKSB7XG5cdFx0XHRcdHBvc2l0aW9uRGF0YVtpXS55ICs9IHNoaWZ0SGVpZ2h0O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcG9zaXRpb25EYXRhO1xuXHR9O1xuXG5cdExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5zaGlmdEl0ZW1zVXAgPSBmdW5jdGlvbih5LCBzaGlmdEhlaWdodCkge1xuXHRcdHZhciBsZW5ndGhfMCA9IHRoaXMucG9zaXRpb25EYXRhLmxlbmd0aDtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF8wOyBpKyspIHtcblx0XHRcdGlmICh0aGlzLnBvc2l0aW9uRGF0YVtpXS55ID49IHkpIHtcblx0XHRcdFx0dGhpcy5wb3NpdGlvbkRhdGFbaV0ueSAtPSBzaGlmdEhlaWdodDtcblx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdJdGVtc1tpXS5zdHlsZS50cmFuc2Zvcm0gPVxuXHRcdFx0XHRcdFwidHJhbnNsYXRlKFwiICtcblx0XHRcdFx0XHR0aGlzLnBvc2l0aW9uRGF0YVtpXS54ICtcblx0XHRcdFx0XHRcInB4LCBcIiArXG5cdFx0XHRcdFx0dGhpcy5wb3NpdGlvbkRhdGFbaV0ueSArXG5cdFx0XHRcdFx0XCJweClcIjtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0TGltYmVyR3JpZFZpZXcucHJvdG90eXBlLm1lcmdlUGxhaW5zID0gZnVuY3Rpb24oQSwgQiwgcGxhbmVzID0gW10pIHtcblx0XHR2YXIgYUxpbmVzID0gZ2V0TGluZXMoQSk7XG5cdFx0dmFyIGJMaW5lcyA9IGdldExpbmVzKEIpO1xuXHRcdHZhciBvcHBvc2l0ZUxpbmVzID0geyAwOiAyLCAxOiAzLCAyOiAwLCAzOiAxIH07XG5cblx0XHR2YXIgaW50ZXJzZWN0aW9uQ291bnQgPSAwO1xuXHRcdHZhciBpbnRlcnNlY3Rpb25Qb2ludHNBdG9CID0gW107XG5cdFx0dmFyIGxpbmVQb2ludHNBID0gW107XG5cdFx0dmFyIGludGVyc2VjdGlvblBvaW50c0J0b0EgPSBbXTtcblx0XHR2YXIgbGluZVBvaW50c0IgPSBbXTtcblx0XHR2YXIgZGlzdGFuY2UgPSBudWxsO1xuXG5cdFx0dmFyIGFMaW5lSWQgPSBudWxsO1xuXHRcdHZhciBiTGluZUlkID0gbnVsbDtcblxuXHRcdHZhciBsZW5ndGhfMCA9IGFMaW5lcy5sZW5ndGg7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHRpbnRlcnNlY3Rpb25Db3VudCA9IDA7XG5cdFx0XHRpbnRlcnNlY3Rpb25Qb2ludHNBdG9CID0gW107XG5cdFx0XHRsaW5lUG9pbnRzQSA9IFtdO1xuXHRcdFx0aW50ZXJzZWN0aW9uUG9pbnRzQnRvQSA9IFtdO1xuXHRcdFx0bGluZVBvaW50c0IgPSBbXTtcblx0XHRcdGRpc3RhbmNlID0gbnVsbDtcblxuXHRcdFx0dmFyIGFMaW5lID0gYUxpbmVzW2ldO1xuXHRcdFx0dmFyIGJMaW5lID0gYkxpbmVzW29wcG9zaXRlTGluZXNbaV1dO1xuXG5cdFx0XHRhTGluZUlkID0gaTtcblx0XHRcdGJMaW5lSWQgPSBvcHBvc2l0ZUxpbmVzW2ldO1xuXG5cdFx0XHQvLyBzbG9wZSBvZiBsaW5lIHBhcmFsbGVsIHRvIHkgYXhpcyBhbmQgeCBheGlzIGlzIGFsd2F5cyAwO1xuXHRcdFx0dmFyIG0xID0gMDtcblx0XHRcdHZhciBtMiA9IDA7XG5cblx0XHRcdC8vIG0xIGlzIHNsb3BlIG9mIHBvaW50IHAxIGFuZCBwMlxuXHRcdFx0dmFyIHAxID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShiTGluZVswXSkpO1xuXHRcdFx0dmFyIHAyID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShiTGluZVsxXSkpO1xuXG5cdFx0XHR2YXIgbGVuZ3RoXzEgPSBhTGluZS5sZW5ndGg7XG5cdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGxlbmd0aF8xOyBqKyspIHtcblx0XHRcdFx0dmFyIHAzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShhTGluZVtqXSkpO1xuXG5cdFx0XHRcdGlmIChpID09IDAgfHwgaSA9PSAyKSB7XG5cdFx0XHRcdFx0dmFyIHggPSBwM1swXTtcblx0XHRcdFx0XHR2YXIgeSA9IHAxWzFdO1xuXHRcdFx0XHRcdHZhciBhbHBoYSA9IChwM1swXSAtIHAxWzBdKSAvIChwMlswXSAtIHAxWzBdKTtcblx0XHRcdFx0XHR2YXIgZCA9IE1hdGguYWJzKHAzWzFdIC0gcDFbMV0pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHZhciB4ID0gcDFbMF07XG5cdFx0XHRcdFx0dmFyIHkgPSBwM1sxXTtcblx0XHRcdFx0XHR2YXIgYWxwaGEgPSAocDNbMV0gLSBwMVsxXSkgLyAocDJbMV0gLSBwMVsxXSk7XG5cdFx0XHRcdFx0dmFyIGQgPSBNYXRoLmFicyhwM1swXSAtIHAxWzBdKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoYWxwaGEgPCAwIHx8IGFscGhhID4gMSkge1xuXHRcdFx0XHR9IGVsc2UgaWYgKGFscGhhID49IDAgJiYgYWxwaGEgPD0gMSkge1xuXHRcdFx0XHRcdGludGVyc2VjdGlvblBvaW50c0F0b0IucHVzaChbeCwgeV0pO1xuXHRcdFx0XHRcdGxpbmVQb2ludHNBLnB1c2gocDMpO1xuXHRcdFx0XHRcdGRpc3RhbmNlID0gZDtcblx0XHRcdFx0XHRpbnRlcnNlY3Rpb25Db3VudCsrO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNvbnNvbGUud2FybihcIlNob3VsZCBub3QgaGl0IHRoaXMgY2hlY2sgYWxnb1wiKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBtMSBpcyBzbG9wZSBvZiBwb2ludCBwMSBhbmQgcDJcblx0XHRcdHZhciBwMSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYUxpbmVbMF0pKTtcblx0XHRcdHZhciBwMiA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYUxpbmVbMV0pKTtcblxuXHRcdFx0dmFyIGxlbmd0aF8xID0gYkxpbmUubGVuZ3RoO1xuXHRcdFx0Zm9yICh2YXIgayA9IDA7IGsgPCBsZW5ndGhfMTsgaysrKSB7XG5cdFx0XHRcdHZhciBwMyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYkxpbmVba10pKTtcblxuXHRcdFx0XHRpZiAoaSA9PSAwIHx8IGkgPT0gMikge1xuXHRcdFx0XHRcdHZhciB4ID0gcDNbMF07XG5cdFx0XHRcdFx0dmFyIHkgPSBwMVsxXTtcblx0XHRcdFx0XHR2YXIgYWxwaGEgPSAocDNbMF0gLSBwMVswXSkgLyAocDJbMF0gLSBwMVswXSk7XG5cdFx0XHRcdFx0dmFyIGQgPSBNYXRoLmFicyhwM1sxXSAtIHAxWzFdKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2YXIgeCA9IHAxWzBdO1xuXHRcdFx0XHRcdHZhciB5ID0gcDNbMV07XG5cdFx0XHRcdFx0dmFyIGFscGhhID0gKHAzWzFdIC0gcDFbMV0pIC8gKHAyWzFdIC0gcDFbMV0pO1xuXHRcdFx0XHRcdHZhciBkID0gTWF0aC5hYnMocDNbMF0gLSBwMVswXSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGFscGhhIDwgMCB8fCBhbHBoYSA+IDEpIHtcblx0XHRcdFx0fSBlbHNlIGlmIChhbHBoYSA+PSAwICYmIGFscGhhIDw9IDEpIHtcblx0XHRcdFx0XHRpbnRlcnNlY3Rpb25Qb2ludHNCdG9BLnB1c2goW3gsIHldKTtcblx0XHRcdFx0XHRsaW5lUG9pbnRzQi5wdXNoKHAzKTtcblx0XHRcdFx0XHRkaXN0YW5jZSA9IGQ7XG5cdFx0XHRcdFx0aW50ZXJzZWN0aW9uQ291bnQrKztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjb25zb2xlLndhcm4oXCJTaG91bGQgbm90IGhpdCB0aGlzIGNoZWNrIGFsZ29cIik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKFxuXHRcdFx0XHRpbnRlcnNlY3Rpb25Db3VudCA9PSAyIHx8XG5cdFx0XHRcdGludGVyc2VjdGlvbkNvdW50ID09IDMgfHxcblx0XHRcdFx0aW50ZXJzZWN0aW9uQ291bnQgPT0gNFxuXHRcdFx0KSB7XG5cdFx0XHRcdGlmIChpbnRlcnNlY3Rpb25Db3VudCA9PSAyKSB7XG5cdFx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdFx0SlNPTi5zdHJpbmdpZnkobGluZVBvaW50c0EpID09XG5cdFx0XHRcdFx0XHRKU09OLnN0cmluZ2lmeShpbnRlcnNlY3Rpb25Qb2ludHNCdG9BKVxuXHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChpbnRlcnNlY3Rpb25Db3VudCA8PSAwIHx8IGludGVyc2VjdGlvbkNvdW50ID49IDUpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiAoYUxpbmVJZCA9PSAwIHx8IGFMaW5lSWQgPT0gMikge1xuXHRcdFx0dmFyIGFPcHBMaW5lID0gSlNPTi5wYXJzZShcblx0XHRcdFx0SlNPTi5zdHJpbmdpZnkoYUxpbmVzW29wcG9zaXRlTGluZXNbYUxpbmVJZF1dKVxuXHRcdFx0KTtcblx0XHRcdHZhciBiT3BwTGluZSA9IEpTT04ucGFyc2UoXG5cdFx0XHRcdEpTT04uc3RyaW5naWZ5KGJMaW5lc1tvcHBvc2l0ZUxpbmVzW2JMaW5lSWRdXSlcblx0XHRcdCk7XG5cblx0XHRcdHZhciBkID0gTWF0aC5hYnMoYU9wcExpbmVbMF1bMV0gLSBiT3BwTGluZVswXVsxXSk7XG5cdFx0XHRpZiAoZCA8IGRpc3RhbmNlKSB7XG5cdFx0XHRcdGFMaW5lSWQgPSBvcHBvc2l0ZUxpbmVzW2FMaW5lSWRdO1xuXHRcdFx0XHRiTGluZUlkID0gb3Bwb3NpdGVMaW5lc1tiTGluZUlkXTtcblx0XHRcdFx0ZGlzdGFuY2UgPSBkO1xuXG5cdFx0XHRcdHZhciBjaGFuZ2VZID0gYkxpbmVzW2JMaW5lSWRdWzBdWzFdO1xuXHRcdFx0XHR2YXIgbGVuZ3RoXzAgPSBpbnRlcnNlY3Rpb25Qb2ludHNBdG9CLmxlbmd0aDtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHRcdFx0aW50ZXJzZWN0aW9uUG9pbnRzQXRvQltpXVsxXSA9IGNoYW5nZVk7XG5cdFx0XHRcdFx0bGluZVBvaW50c0FbaV1bMV0gPSBhT3BwTGluZVswXVsxXTtcblx0XHRcdFx0fVxuXHRcdFx0XHR2YXIgY2hhbmdlWSA9IGFMaW5lc1thTGluZUlkXVswXVsxXTtcblx0XHRcdFx0dmFyIGxlbmd0aF8wID0gaW50ZXJzZWN0aW9uUG9pbnRzQnRvQS5sZW5ndGg7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHRcdFx0XHRcdGludGVyc2VjdGlvblBvaW50c0J0b0FbaV1bMV0gPSBjaGFuZ2VZO1xuXHRcdFx0XHRcdGxpbmVQb2ludHNCW2ldWzFdID0gYk9wcExpbmVbMF1bMV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIGFPcHBMaW5lID0gSlNPTi5wYXJzZShcblx0XHRcdFx0SlNPTi5zdHJpbmdpZnkoYUxpbmVzW29wcG9zaXRlTGluZXNbYUxpbmVJZF1dKVxuXHRcdFx0KTtcblx0XHRcdHZhciBiT3BwTGluZSA9IEpTT04ucGFyc2UoXG5cdFx0XHRcdEpTT04uc3RyaW5naWZ5KGJMaW5lc1tvcHBvc2l0ZUxpbmVzW2JMaW5lSWRdXSlcblx0XHRcdCk7XG5cblx0XHRcdHZhciBkID0gTWF0aC5hYnMoYU9wcExpbmVbMF1bMF0gLSBiT3BwTGluZVswXVswXSk7XG5cdFx0XHRpZiAoZCA8IGRpc3RhbmNlKSB7XG5cdFx0XHRcdGFMaW5lSWQgPSBvcHBvc2l0ZUxpbmVzW2FMaW5lSWRdO1xuXHRcdFx0XHRiTGluZUlkID0gb3Bwb3NpdGVMaW5lc1tiTGluZUlkXTtcblx0XHRcdFx0ZGlzdGFuY2UgPSBkO1xuXG5cdFx0XHRcdHZhciBjaGFuZ2VYID0gYkxpbmVzW2JMaW5lSWRdWzBdWzBdO1xuXHRcdFx0XHR2YXIgbGVuZ3RoXzAgPSBpbnRlcnNlY3Rpb25Qb2ludHNBdG9CLmxlbmd0aDtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHRcdFx0aW50ZXJzZWN0aW9uUG9pbnRzQXRvQltpXVswXSA9IGNoYW5nZVg7XG5cdFx0XHRcdFx0bGluZVBvaW50c0FbaV1bMF0gPSBhT3BwTGluZVswXVswXTtcblx0XHRcdFx0fVxuXHRcdFx0XHR2YXIgY2hhbmdlWCA9IGFMaW5lc1thTGluZUlkXVswXVswXTtcblx0XHRcdFx0dmFyIGxlbmd0aF8wID0gaW50ZXJzZWN0aW9uUG9pbnRzQnRvQS5sZW5ndGg7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHRcdFx0XHRcdGludGVyc2VjdGlvblBvaW50c0J0b0FbaV1bMF0gPSBjaGFuZ2VYO1xuXHRcdFx0XHRcdGxpbmVQb2ludHNCW2ldWzBdID0gYk9wcExpbmVbMF1bMF07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZGlzdGFuY2UgPiB0aGlzLk1BUkdJTikge1xuXHRcdFx0dmFyIHBvaW50c1RvR2V0UGxhaW4gPSBbXTtcblx0XHRcdHZhciBwbGFpblRvQ2hlY2tJZkZyZWUgPSBudWxsO1xuXHRcdFx0aWYgKGludGVyc2VjdGlvbkNvdW50ID09IDQpIHtcblx0XHRcdFx0cG9pbnRzVG9HZXRQbGFpbiA9IGxpbmVQb2ludHNBLmNvbmNhdChsaW5lUG9pbnRzQik7XG5cdFx0XHRcdHBsYWluVG9DaGVja0lmRnJlZSA9IGdldFBsYWluRnJvbTRQb2ludHMocG9pbnRzVG9HZXRQbGFpbik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgbGVuZ3RoXzAgPSBsaW5lUG9pbnRzQS5sZW5ndGg7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHRcdFx0XHRcdHBvaW50c1RvR2V0UGxhaW4ucHVzaChsaW5lUG9pbnRzQVtpXSk7XG5cdFx0XHRcdFx0cG9pbnRzVG9HZXRQbGFpbi5wdXNoKGludGVyc2VjdGlvblBvaW50c0F0b0JbaV0pO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dmFyIGxlbmd0aF8wID0gbGluZVBvaW50c0IubGVuZ3RoO1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF8wOyBpKyspIHtcblx0XHRcdFx0XHRwb2ludHNUb0dldFBsYWluLnB1c2gobGluZVBvaW50c0JbaV0pO1xuXHRcdFx0XHRcdHBvaW50c1RvR2V0UGxhaW4ucHVzaChpbnRlcnNlY3Rpb25Qb2ludHNCdG9BW2ldKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChwb2ludHNUb0dldFBsYWluLmxlbmd0aCA+IDQpIHtcblx0XHRcdFx0XHR2YXIgZHVwbGljYXRlQ2hlY2sgPSB7fTtcblx0XHRcdFx0XHR2YXIgZmluYWxQb2ludHNUb0dldFBsYWluID0gW107XG5cdFx0XHRcdFx0dmFyIGxlbmd0aF8wID0gcG9pbnRzVG9HZXRQbGFpbi5sZW5ndGg7XG5cdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHRcdFx0XHR2YXIgdGVtcCA9IEpTT04ucGFyc2UoXG5cdFx0XHRcdFx0XHRcdEpTT04uc3RyaW5naWZ5KHBvaW50c1RvR2V0UGxhaW5baV0pXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0aWYgKGR1cGxpY2F0ZUNoZWNrLmhhc093blByb3BlcnR5KHRlbXApKSB7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRkdXBsaWNhdGVDaGVja1t0ZW1wXSA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdGZpbmFsUG9pbnRzVG9HZXRQbGFpbi5wdXNoKHBvaW50c1RvR2V0UGxhaW5baV0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRwbGFpblRvQ2hlY2tJZkZyZWUgPSBnZXRQbGFpbkZyb200UG9pbnRzKFxuXHRcdFx0XHRcdFx0ZmluYWxQb2ludHNUb0dldFBsYWluXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRwbGFpblRvQ2hlY2tJZkZyZWUgPSBnZXRQbGFpbkZyb200UG9pbnRzKHBvaW50c1RvR2V0UGxhaW4pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHZhciBwbGFpblRvQ2hlY2tJZkZyZWVfTGluZXMgPSBnZXRMaW5lcyhwbGFpblRvQ2hlY2tJZkZyZWUpO1xuXG5cdFx0XHRpZiAoYUxpbmVJZCA9PSAwIHx8IGFMaW5lSWQgPT0gMikge1xuXHRcdFx0XHRpZiAoYUxpbmVJZCA9PSAwKSB7XG5cdFx0XHRcdFx0dmFyIHBsYW5lQU9uVG9wT2ZCID0gZmFsc2U7XG5cdFx0XHRcdFx0dmFyIHBsYWluVG9DaGVja0lmRnJlZV9EaXZpZGVyTGluZSA9IEpTT04ucGFyc2UoXG5cdFx0XHRcdFx0XHRKU09OLnN0cmluZ2lmeShwbGFpblRvQ2hlY2tJZkZyZWVfTGluZXNbMl0pXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2YXIgcGxhbmVBT25Ub3BPZkIgPSB0cnVlO1xuXHRcdFx0XHRcdHZhciBwbGFpblRvQ2hlY2tJZkZyZWVfRGl2aWRlckxpbmUgPSBKU09OLnBhcnNlKFxuXHRcdFx0XHRcdFx0SlNPTi5zdHJpbmdpZnkocGxhaW5Ub0NoZWNrSWZGcmVlX0xpbmVzWzBdKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmIChhTGluZUlkID09IDMpIHtcblx0XHRcdFx0XHR2YXIgcGxhbmVBT25MZWZ0T2ZCID0gZmFsc2U7XG5cdFx0XHRcdFx0dmFyIHBsYWluVG9DaGVja0lmRnJlZV9EaXZpZGVyTGluZSA9IEpTT04ucGFyc2UoXG5cdFx0XHRcdFx0XHRKU09OLnN0cmluZ2lmeShwbGFpblRvQ2hlY2tJZkZyZWVfTGluZXNbMV0pXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2YXIgcGxhbmVBT25MZWZ0T2ZCID0gdHJ1ZTtcblx0XHRcdFx0XHR2YXIgcGxhaW5Ub0NoZWNrSWZGcmVlX0RpdmlkZXJMaW5lID0gSlNPTi5wYXJzZShcblx0XHRcdFx0XHRcdEpTT04uc3RyaW5naWZ5KHBsYWluVG9DaGVja0lmRnJlZV9MaW5lc1szXSlcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHZhciBmcmVlRGlzdGFuY2UgPSAtMTtcblx0XHRcdHZhciBpbmRleE9mSW50ZXJzZWN0aW5nUGxhbmUgPSBudWxsO1xuXHRcdFx0dmFyIGxlbmd0aF8wID0gcGxhbmVzLmxlbmd0aDtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0dGhpcy5pc1BsYW5lQkluc2lkZVBsYW5lQV9Ub3VjaGluZ05vdEluc2lkZShcblx0XHRcdFx0XHRcdHBsYWluVG9DaGVja0lmRnJlZSxcblx0XHRcdFx0XHRcdHBsYW5lc1tpXVxuXHRcdFx0XHRcdClcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0aWYgKHBsYW5lc1tpXS5oYXNPd25Qcm9wZXJ0eShcImRvTm90TWVyZ2VGbGFnXCIpKSB7XG5cdFx0XHRcdFx0XHRmcmVlRGlzdGFuY2UgPSAtMTtcblx0XHRcdFx0XHRcdGluZGV4T2ZJbnRlcnNlY3RpbmdQbGFuZSA9IC0xO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHZhciBwbGFuZUxpbmUgPSBnZXRMaW5lcyhwbGFuZXNbaV0pO1xuXHRcdFx0XHRcdGlmIChhTGluZUlkID09IDAgfHwgYUxpbmVJZCA9PSAyKSB7XG5cdFx0XHRcdFx0XHRpZiAoYUxpbmVJZCA9PSAwKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBkID0gTWF0aC5hYnMoXG5cdFx0XHRcdFx0XHRcdFx0cGxhaW5Ub0NoZWNrSWZGcmVlX0RpdmlkZXJMaW5lWzBdWzFdIC1cblx0XHRcdFx0XHRcdFx0XHRcdChwbGFuZXNbaV0ueSArIHBsYW5lc1tpXS5oZWlnaHQpXG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR2YXIgZCA9IE1hdGguYWJzKFxuXHRcdFx0XHRcdFx0XHRcdHBsYWluVG9DaGVja0lmRnJlZV9EaXZpZGVyTGluZVswXVsxXSAtXG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFuZXNbaV0ueVxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRpZiAoYUxpbmVJZCA9PSAzKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBkID0gTWF0aC5hYnMoXG5cdFx0XHRcdFx0XHRcdFx0cGxhaW5Ub0NoZWNrSWZGcmVlX0RpdmlkZXJMaW5lWzBdWzBdIC1cblx0XHRcdFx0XHRcdFx0XHRcdChwbGFuZXNbaV0ueCArIHBsYW5lc1tpXS53aWR0aClcblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHZhciBkID0gTWF0aC5hYnMoXG5cdFx0XHRcdFx0XHRcdFx0cGxhaW5Ub0NoZWNrSWZGcmVlX0RpdmlkZXJMaW5lWzBdWzBdIC1cblx0XHRcdFx0XHRcdFx0XHRcdHBsYW5lc1tpXS54XG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChkIDwgZnJlZURpc3RhbmNlIHx8IGZyZWVEaXN0YW5jZSA8IDApIHtcblx0XHRcdFx0XHRcdGZyZWVEaXN0YW5jZSA9IGQ7XG5cdFx0XHRcdFx0XHRpbmRleE9mSW50ZXJzZWN0aW5nUGxhbmUgPSBpO1xuXHRcdFx0XHRcdFx0Ly8gYnJlYWtpbmcgaGVyZSBzaW5jZSB0aGUgZmVhdHVyZSBpcyBub3QgZ29pbmcgdG8gYmUgaW1wbGVtZW50ZWQgb3IgbmVlZGVkXG5cdFx0XHRcdFx0XHQvLyBPbmx5IGNoZWNrIGlzIGRvbmUsIGlmIHNvbWUgcGxhbmUgaXMgaW5zaWRlIHRoZSBmcmVlIHNwYWNlIHRvIGJlIGNoZWNrZWRcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0Ly8gYnJlYWtpbmcgaGVyZSBzaW5jZSB0aGUgZmVhdHVyZSBpcyBub3QgZ29pbmcgdG8gYmUgaW1wbGVtZW50ZWQgb3IgbmVlZGVkXG5cdFx0XHRcdFx0XHQvLyBPbmx5IGNoZWNrIGlzIGRvbmUsIGlmIHNvbWUgcGxhbmUgaXMgaW5zaWRlIHRoZSBmcmVlIHNwYWNlIHRvIGJlIGNoZWNrZWQgRU5EXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmIChpbmRleE9mSW50ZXJzZWN0aW5nUGxhbmUgIT0gbnVsbCkge1xuXHRcdFx0XHRpZiAoZnJlZURpc3RhbmNlID4gdGhpcy5NQVJHSU4pIHtcblx0XHRcdFx0XHQvLyBtYWtpbmcgbWVyZ2VkUGxhbmUgZmFsc2Ugc2luY2UgdGhlIGZlYXR1cmUgaXMgbm8gbG9uZ2VyIGltcGxlbWVudGVkIG9yIG5lZWRlZFxuXHRcdFx0XHRcdHZhciBtZXJnZWRQbGFuZSA9IGZhbHNlO1xuXHRcdFx0XHRcdC8vIG1ha2luZyBtZXJnZWRQbGFuZSBmYWxzZSBzaW5jZSB0aGUgZmVhdHVyZSBpcyBubyBsb25nZXIgaW1wbGVtZW50ZWQgb3IgbmVlZGVkIEVORFxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIG5vIGZpbmFsIHBsYWluIGFzIEEgYW5kIEIgaGF2ZSBvdGhlciBwbGFuZXMgYmV0biB0aGVuIHdoaWNoIGFyZSBvbmx5IHRoZSBzaXplIG9mIG1hcmdpbiBhcGFydCBmcm9tIGVpdGhlciBBIG9yIEJcblx0XHRcdFx0XHR2YXIgbWVyZ2VkUGxhbmUgPSBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gbWFrZSBmaW5hbCBmcmVlIHNwYWNlIGZyb20gdGhlIHdob2xlIG9mIHRoZSBmcmVlIHNwYWNlXG5cdFx0XHRcdHZhciBtYWtlRmluYWxGcmVlU3BhY2UgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBtYWtlIGZpbmFsIGZyZWUgc3BhY2UgZnJvbSB0aGUgd2hvbGUgb2YgdGhlIGZyZWUgc3BhY2Vcblx0XHRcdHZhciBtYWtlRmluYWxGcmVlU3BhY2UgPSB0cnVlO1xuXHRcdH1cblxuXHRcdGlmIChtYWtlRmluYWxGcmVlU3BhY2UgPT0gdHJ1ZSkge1xuXHRcdFx0dmFyIG1lcmdlZFBsYW5lID0ge307XG5cdFx0XHRpZiAoYUxpbmVJZCA9PSAwIHx8IGFMaW5lSWQgPT0gMikge1xuXHRcdFx0XHR2YXIgYU9wcExpbmUgPSBKU09OLnBhcnNlKFxuXHRcdFx0XHRcdEpTT04uc3RyaW5naWZ5KGFMaW5lc1tvcHBvc2l0ZUxpbmVzW2FMaW5lSWRdXSlcblx0XHRcdFx0KTtcblx0XHRcdFx0dmFyIGJPcHBMaW5lID0gSlNPTi5wYXJzZShcblx0XHRcdFx0XHRKU09OLnN0cmluZ2lmeShiTGluZXNbb3Bwb3NpdGVMaW5lc1tiTGluZUlkXV0pXG5cdFx0XHRcdCk7XG5cblx0XHRcdFx0YUxpbmVJZCA9IG9wcG9zaXRlTGluZXNbYUxpbmVJZF07XG5cdFx0XHRcdGJMaW5lSWQgPSBvcHBvc2l0ZUxpbmVzW2JMaW5lSWRdO1xuXG5cdFx0XHRcdHZhciBjaGFuZ2VZID0gYkxpbmVzW2JMaW5lSWRdWzBdWzFdO1xuXHRcdFx0XHR2YXIgbGVuZ3RoXzAgPSBpbnRlcnNlY3Rpb25Qb2ludHNBdG9CLmxlbmd0aDtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHRcdFx0aW50ZXJzZWN0aW9uUG9pbnRzQXRvQltpXVsxXSA9IGNoYW5nZVk7XG5cdFx0XHRcdFx0bGluZVBvaW50c0FbaV1bMV0gPSBhT3BwTGluZVswXVsxXTtcblx0XHRcdFx0fVxuXHRcdFx0XHR2YXIgY2hhbmdlWSA9IGFMaW5lc1thTGluZUlkXVswXVsxXTtcblx0XHRcdFx0dmFyIGxlbmd0aF8wID0gaW50ZXJzZWN0aW9uUG9pbnRzQnRvQS5sZW5ndGg7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHRcdFx0XHRcdGludGVyc2VjdGlvblBvaW50c0J0b0FbaV1bMV0gPSBjaGFuZ2VZO1xuXHRcdFx0XHRcdGxpbmVQb2ludHNCW2ldWzFdID0gYk9wcExpbmVbMF1bMV07XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBhT3BwTGluZSA9IEpTT04ucGFyc2UoXG5cdFx0XHRcdFx0SlNPTi5zdHJpbmdpZnkoYUxpbmVzW29wcG9zaXRlTGluZXNbYUxpbmVJZF1dKVxuXHRcdFx0XHQpO1xuXHRcdFx0XHR2YXIgYk9wcExpbmUgPSBKU09OLnBhcnNlKFxuXHRcdFx0XHRcdEpTT04uc3RyaW5naWZ5KGJMaW5lc1tvcHBvc2l0ZUxpbmVzW2JMaW5lSWRdXSlcblx0XHRcdFx0KTtcblxuXHRcdFx0XHRhTGluZUlkID0gb3Bwb3NpdGVMaW5lc1thTGluZUlkXTtcblx0XHRcdFx0YkxpbmVJZCA9IG9wcG9zaXRlTGluZXNbYkxpbmVJZF07XG5cblx0XHRcdFx0dmFyIGNoYW5nZVggPSBiTGluZXNbYkxpbmVJZF1bMF1bMF07XG5cdFx0XHRcdHZhciBsZW5ndGhfMCA9IGludGVyc2VjdGlvblBvaW50c0F0b0IubGVuZ3RoO1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF8wOyBpKyspIHtcblx0XHRcdFx0XHRpbnRlcnNlY3Rpb25Qb2ludHNBdG9CW2ldWzBdID0gY2hhbmdlWDtcblx0XHRcdFx0XHRsaW5lUG9pbnRzQVtpXVswXSA9IGFPcHBMaW5lWzBdWzBdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhciBjaGFuZ2VYID0gYUxpbmVzW2FMaW5lSWRdWzBdWzBdO1xuXHRcdFx0XHR2YXIgbGVuZ3RoXzAgPSBpbnRlcnNlY3Rpb25Qb2ludHNCdG9BLmxlbmd0aDtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHRcdFx0aW50ZXJzZWN0aW9uUG9pbnRzQnRvQVtpXVswXSA9IGNoYW5nZVg7XG5cdFx0XHRcdFx0bGluZVBvaW50c0JbaV1bMF0gPSBiT3BwTGluZVswXVswXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaW50ZXJzZWN0aW9uQ291bnQgPT0gNCkge1xuXHRcdFx0XHR2YXIgcG9pbnRzVG9HZXRNZXJnZWRQbGFpbiA9IGxpbmVQb2ludHNBLmNvbmNhdChsaW5lUG9pbnRzQik7XG5cdFx0XHRcdHZhciBtZXJnZWRQbGFuZSA9IGdldFBsYWluRnJvbTRQb2ludHMocG9pbnRzVG9HZXRNZXJnZWRQbGFpbik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgcG9pbnRzVG9HZXRNZXJnZWRQbGFpbiA9IFtdO1xuXHRcdFx0XHR2YXIgbGVuZ3RoXzAgPSBsaW5lUG9pbnRzQS5sZW5ndGg7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHRcdFx0XHRcdHBvaW50c1RvR2V0TWVyZ2VkUGxhaW4ucHVzaChsaW5lUG9pbnRzQVtpXSk7XG5cdFx0XHRcdFx0cG9pbnRzVG9HZXRNZXJnZWRQbGFpbi5wdXNoKGludGVyc2VjdGlvblBvaW50c0F0b0JbaV0pO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dmFyIGxlbmd0aF8wID0gbGluZVBvaW50c0IubGVuZ3RoO1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF8wOyBpKyspIHtcblx0XHRcdFx0XHRwb2ludHNUb0dldE1lcmdlZFBsYWluLnB1c2gobGluZVBvaW50c0JbaV0pO1xuXHRcdFx0XHRcdHBvaW50c1RvR2V0TWVyZ2VkUGxhaW4ucHVzaChpbnRlcnNlY3Rpb25Qb2ludHNCdG9BW2ldKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChwb2ludHNUb0dldE1lcmdlZFBsYWluLmxlbmd0aCA+IDQpIHtcblx0XHRcdFx0XHR2YXIgZHVwbGljYXRlQ2hlY2sgPSB7fTtcblx0XHRcdFx0XHR2YXIgZmluYWxQb2ludHNUb0dldE1lcmdlZFBsYWluID0gW107XG5cdFx0XHRcdFx0dmFyIGxlbmd0aF8wID0gcG9pbnRzVG9HZXRNZXJnZWRQbGFpbi5sZW5ndGg7XG5cdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHRcdFx0XHR2YXIgdGVtcCA9IEpTT04ucGFyc2UoXG5cdFx0XHRcdFx0XHRcdEpTT04uc3RyaW5naWZ5KHBvaW50c1RvR2V0TWVyZ2VkUGxhaW5baV0pXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0aWYgKGR1cGxpY2F0ZUNoZWNrLmhhc093blByb3BlcnR5KHRlbXApKSB7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRkdXBsaWNhdGVDaGVja1t0ZW1wXSA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdGZpbmFsUG9pbnRzVG9HZXRNZXJnZWRQbGFpbi5wdXNoKFxuXHRcdFx0XHRcdFx0XHRcdHBvaW50c1RvR2V0TWVyZ2VkUGxhaW5baV1cblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dmFyIG1lcmdlZFBsYW5lID0gZ2V0UGxhaW5Gcm9tNFBvaW50cyhcblx0XHRcdFx0XHRcdGZpbmFsUG9pbnRzVG9HZXRNZXJnZWRQbGFpblxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dmFyIG1lcmdlZFBsYW5lID0gZ2V0UGxhaW5Gcm9tNFBvaW50cyhcblx0XHRcdFx0XHRcdHBvaW50c1RvR2V0TWVyZ2VkUGxhaW5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKG1lcmdlZFBsYW5lICE9IGZhbHNlKSB7XG5cdFx0XHRpZiAoaXNWYWxpZFBsYW5lKG1lcmdlZFBsYW5lKSkge1xuXHRcdFx0XHRyZXR1cm4gbWVyZ2VkUGxhbmU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH07XG5cblx0TGltYmVyR3JpZFZpZXcucHJvdG90eXBlLnN1YnRyYWN0UGxhbmVzID0gZnVuY3Rpb24oQSwgQikge1xuXHRcdC8vIEEtQlxuXHRcdC8vIHJlc3VsdCBvbiBcIkFcIiBhcmVhXG5cblx0XHR2YXIgcGxhbmVzID0gW107XG5cdFx0dmFyIHJlc3VsdCA9IHRoaXMuaXNQbGFuZUJJbnNpZGVQbGFuZUFfVG91Y2hpbmdJc0luc2lkZShBLCBCLCBcImFsbFwiKTtcblxuXHRcdGlmIChyZXN1bHQuZW5ndWxmZWQgPT0gdHJ1ZSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRpZiAocmVzdWx0Lm92ZXJhbGwgPT0gdHJ1ZSkge1xuXHRcdFx0aWYgKEEueCA8PSBCLngpIHtcblx0XHRcdFx0aWYgKEEueCArIEEud2lkdGggPiBCLngpIHtcblx0XHRcdFx0XHQvLyBhYm92ZSBzdGF0ZW1lbnQgU2hvdWxkIGJlIGFsd2F5cyB0cnVlXG5cdFx0XHRcdFx0aWYgKEEueSA8IEIueSkge1xuXHRcdFx0XHRcdFx0dmFyIHBsYW5lID0ge1xuXHRcdFx0XHRcdFx0XHR4OiBBLngsXG5cdFx0XHRcdFx0XHRcdHk6IEEueSxcblx0XHRcdFx0XHRcdFx0d2lkdGg6IEEud2lkdGgsXG5cdFx0XHRcdFx0XHRcdGhlaWdodDogQi55IC0gQS55XG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0aWYgKGlzVmFsaWRQbGFuZShwbGFuZSkpIHtcblx0XHRcdFx0XHRcdFx0cGxhbmVzLnB1c2gocGxhbmUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKEEueSArIEEuaGVpZ2h0IDwgQi55ICsgQi5oZWlnaHQpIHtcblx0XHRcdFx0XHRcdFx0dmFyIHBsYW5lID0ge1xuXHRcdFx0XHRcdFx0XHRcdHg6IEEueCxcblx0XHRcdFx0XHRcdFx0XHR5OiBCLnksXG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IEIueCAtIEEueCxcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IEEueSArIEEuaGVpZ2h0IC0gQi55XG5cdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdGlmIChpc1ZhbGlkUGxhbmUocGxhbmUpKSB7XG5cdFx0XHRcdFx0XHRcdFx0cGxhbmVzLnB1c2gocGxhbmUpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKEEueSArIEEuaGVpZ2h0ID49IEIueSArIEIuaGVpZ2h0KSB7XG5cdFx0XHRcdFx0XHRcdHZhciBwbGFuZSA9IHtcblx0XHRcdFx0XHRcdFx0XHR4OiBBLngsXG5cdFx0XHRcdFx0XHRcdFx0eTogQi55LFxuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiBCLnggLSBBLngsXG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBCLmhlaWdodFxuXHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0XHRpZiAoaXNWYWxpZFBsYW5lKHBsYW5lKSkge1xuXHRcdFx0XHRcdFx0XHRcdHBsYW5lcy5wdXNoKHBsYW5lKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRpZiAoQS55ICsgQS5oZWlnaHQgPiBCLnkgKyBCLmhlaWdodCkge1xuXHRcdFx0XHRcdFx0XHRcdHZhciBwbGFuZSA9IHtcblx0XHRcdFx0XHRcdFx0XHRcdHg6IEEueCxcblx0XHRcdFx0XHRcdFx0XHRcdHk6IEIueSArIEIuaGVpZ2h0LFxuXHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IEEud2lkdGgsXG5cdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IEEueSArIEEuaGVpZ2h0IC0gKEIueSArIEIuaGVpZ2h0KVxuXHRcdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGlzVmFsaWRQbGFuZShwbGFuZSkpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHBsYW5lcy5wdXNoKHBsYW5lKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2UgaWYgKEEueSA+PSBCLnkpIHtcblx0XHRcdFx0XHRcdGlmIChBLnkgKyBBLmhlaWdodCA8IEIueSArIEIuaGVpZ2h0KSB7XG5cdFx0XHRcdFx0XHRcdHZhciBwbGFuZSA9IHtcblx0XHRcdFx0XHRcdFx0XHR4OiBBLngsXG5cdFx0XHRcdFx0XHRcdFx0eTogQS55LFxuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiBCLnggLSBBLngsXG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBBLmhlaWdodFxuXHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0XHRpZiAoaXNWYWxpZFBsYW5lKHBsYW5lKSkge1xuXHRcdFx0XHRcdFx0XHRcdHBsYW5lcy5wdXNoKHBsYW5lKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dmFyIHBsYW5lID0ge1xuXHRcdFx0XHRcdFx0XHRcdHg6IEEueCxcblx0XHRcdFx0XHRcdFx0XHR5OiBBLnksXG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IEIueCAtIEEueCxcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IEIueSArIEIuaGVpZ2h0IC0gQS55XG5cdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdGlmIChpc1ZhbGlkUGxhbmUocGxhbmUpKSB7XG5cdFx0XHRcdFx0XHRcdFx0cGxhbmVzLnB1c2gocGxhbmUpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGlmIChBLnkgKyBBLmhlaWdodCA+IEIueSArIEIuaGVpZ2h0KSB7XG5cdFx0XHRcdFx0XHRcdHZhciBwbGFuZSA9IHtcblx0XHRcdFx0XHRcdFx0XHR4OiBBLngsXG5cdFx0XHRcdFx0XHRcdFx0eTogQi55ICsgQi5oZWlnaHQsXG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IEEud2lkdGgsXG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBBLnkgKyBBLmhlaWdodCAtIChCLnkgKyBCLmhlaWdodClcblx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdFx0aWYgKGlzVmFsaWRQbGFuZShwbGFuZSkpIHtcblx0XHRcdFx0XHRcdFx0XHRwbGFuZXMucHVzaChwbGFuZSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKEEueCArIEEud2lkdGggPiBCLnggKyBCLndpZHRoKSB7XG5cdFx0XHRcdFx0aWYgKEEueSA8IEIueSkge1xuXHRcdFx0XHRcdFx0aWYgKEEueSArIEEuaGVpZ2h0IDwgQi55ICsgQi5oZWlnaHQpIHtcblx0XHRcdFx0XHRcdFx0dmFyIHBsYW5lID0ge1xuXHRcdFx0XHRcdFx0XHRcdHg6IEIueCArIEIud2lkdGgsXG5cdFx0XHRcdFx0XHRcdFx0eTogQi55LFxuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiBBLnggKyBBLndpZHRoIC0gKEIueCArIEIud2lkdGgpLFxuXHRcdFx0XHRcdFx0XHRcdGhlaWdodDogQS55ICsgQS5oZWlnaHQgLSBCLnlcblx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdFx0aWYgKGlzVmFsaWRQbGFuZShwbGFuZSkpIHtcblx0XHRcdFx0XHRcdFx0XHRwbGFuZXMucHVzaChwbGFuZSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHZhciBwbGFuZSA9IHtcblx0XHRcdFx0XHRcdFx0XHR4OiBCLnggKyBCLndpZHRoLFxuXHRcdFx0XHRcdFx0XHRcdHk6IEIueSxcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogQS54ICsgQS53aWR0aCAtIChCLnggKyBCLndpZHRoKSxcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IEIuaGVpZ2h0XG5cdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdGlmIChpc1ZhbGlkUGxhbmUocGxhbmUpKSB7XG5cdFx0XHRcdFx0XHRcdFx0cGxhbmVzLnB1c2gocGxhbmUpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGlmIChBLnkgKyBBLmhlaWdodCA8IEIueSArIEIuaGVpZ2h0KSB7XG5cdFx0XHRcdFx0XHRcdHZhciBwbGFuZSA9IHtcblx0XHRcdFx0XHRcdFx0XHR4OiBCLnggKyBCLndpZHRoLFxuXHRcdFx0XHRcdFx0XHRcdHk6IEEueSxcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogQS54ICsgQS53aWR0aCAtIChCLnggKyBCLndpZHRoKSxcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IEEuaGVpZ2h0XG5cdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdGlmIChpc1ZhbGlkUGxhbmUocGxhbmUpKSB7XG5cdFx0XHRcdFx0XHRcdFx0cGxhbmVzLnB1c2gocGxhbmUpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR2YXIgcGxhbmUgPSB7XG5cdFx0XHRcdFx0XHRcdFx0eDogQi54ICsgQi53aWR0aCxcblx0XHRcdFx0XHRcdFx0XHR5OiBBLnksXG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IEEueCArIEEud2lkdGggLSAoQi54ICsgQi53aWR0aCksXG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBCLnkgKyBCLmhlaWdodCAtIEEueVxuXHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0XHRpZiAoaXNWYWxpZFBsYW5lKHBsYW5lKSkge1xuXHRcdFx0XHRcdFx0XHRcdHBsYW5lcy5wdXNoKHBsYW5lKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gb3RoZXJcblx0XHRcdFx0aWYgKEEueSA8IEIueSkge1xuXHRcdFx0XHRcdHZhciBwbGFuZSA9IHtcblx0XHRcdFx0XHRcdHg6IEEueCxcblx0XHRcdFx0XHRcdHk6IEEueSxcblx0XHRcdFx0XHRcdHdpZHRoOiBBLndpZHRoLFxuXHRcdFx0XHRcdFx0aGVpZ2h0OiBCLnkgLSBBLnlcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdGlmIChpc1ZhbGlkUGxhbmUocGxhbmUpKSB7XG5cdFx0XHRcdFx0XHRwbGFuZXMucHVzaChwbGFuZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChBLnkgKyBBLmhlaWdodCA8IEIueSArIEIuaGVpZ2h0KSB7XG5cdFx0XHRcdFx0XHRpZiAoQS54ICsgQS53aWR0aCA8PSBCLnggKyBCLndpZHRoKSB7XG5cdFx0XHRcdFx0XHRcdC8vIHBsYW5lIGluc2lkZSBvZiB0aGUgb3RoZXIgcGxhbmVcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHZhciBwbGFuZSA9IHtcblx0XHRcdFx0XHRcdFx0XHR4OiBCLnggKyBCLndpZHRoLFxuXHRcdFx0XHRcdFx0XHRcdHk6IEIueSxcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogQS54ICsgQS53aWR0aCAtIChCLnggKyBCLndpZHRoKSxcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IEEueSArIEEuaGVpZ2h0IC0gQi55XG5cdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdGlmIChpc1ZhbGlkUGxhbmUocGxhbmUpKSB7XG5cdFx0XHRcdFx0XHRcdFx0cGxhbmVzLnB1c2gocGxhbmUpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChBLnkgKyBBLmhlaWdodCA+PSBCLnkgKyBCLmhlaWdodCkge1xuXHRcdFx0XHRcdFx0aWYgKEEueCArIEEud2lkdGggPD0gQi54ICsgQi53aWR0aCkge1xuXHRcdFx0XHRcdFx0XHQvLyBwbGFuZSBpbnNpZGUgb2YgdGhlIG90aGVyIHBsYW5lXG5cdFx0XHRcdFx0XHRcdGlmIChBLnkgKyBBLmhlaWdodCA+IEIueSArIEIuaGVpZ2h0KSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIHBsYW5lID0ge1xuXHRcdFx0XHRcdFx0XHRcdFx0eDogQS54LFxuXHRcdFx0XHRcdFx0XHRcdFx0eTogQi55ICsgQi5oZWlnaHQsXG5cdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogQS53aWR0aCxcblx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogQS55ICsgQS5oZWlnaHQgLSAoQi55ICsgQi5oZWlnaHQpXG5cdFx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdFx0XHRpZiAoaXNWYWxpZFBsYW5lKHBsYW5lKSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0cGxhbmVzLnB1c2gocGxhbmUpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dmFyIHBsYW5lID0ge1xuXHRcdFx0XHRcdFx0XHRcdHg6IEIueCArIEIud2lkdGgsXG5cdFx0XHRcdFx0XHRcdFx0eTogQi55LFxuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiBBLnggKyBBLndpZHRoIC0gKEIueCArIEIud2lkdGgpLFxuXHRcdFx0XHRcdFx0XHRcdGhlaWdodDogQi5oZWlnaHRcblx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdFx0aWYgKGlzVmFsaWRQbGFuZShwbGFuZSkpIHtcblx0XHRcdFx0XHRcdFx0XHRwbGFuZXMucHVzaChwbGFuZSk7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRpZiAoQS55ICsgQS5oZWlnaHQgPiBCLnkgKyBCLmhlaWdodCkge1xuXHRcdFx0XHRcdFx0XHRcdHZhciBwbGFuZSA9IHtcblx0XHRcdFx0XHRcdFx0XHRcdHg6IEEueCxcblx0XHRcdFx0XHRcdFx0XHRcdHk6IEIueSArIEIuaGVpZ2h0LFxuXHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IEEud2lkdGgsXG5cdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IEEueSArIEEuaGVpZ2h0IC0gKEIueSArIEIuaGVpZ2h0KVxuXHRcdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGlzVmFsaWRQbGFuZShwbGFuZSkpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHBsYW5lcy5wdXNoKHBsYW5lKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSBpZiAoQS55ID49IEIueSkge1xuXHRcdFx0XHRcdGlmIChBLnkgKyBBLmhlaWdodCA8IEIueSArIEIuaGVpZ2h0KSB7XG5cdFx0XHRcdFx0XHRpZiAoQS54ICsgQS53aWR0aCA8IEIueCArIEIud2lkdGgpIHtcblx0XHRcdFx0XHRcdFx0Ly8gcGxhbmUgaW5zaWRlIG9mIHRoZSBvdGhlciBwbGFuZVxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dmFyIHBsYW5lID0ge1xuXHRcdFx0XHRcdFx0XHRcdHg6IEIueCArIEIud2lkdGgsXG5cdFx0XHRcdFx0XHRcdFx0eTogQS55LFxuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiBBLnggKyBBLndpZHRoIC0gKEIueCArIEIud2lkdGgpLFxuXHRcdFx0XHRcdFx0XHRcdGhlaWdodDogQS5oZWlnaHRcblx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdFx0aWYgKGlzVmFsaWRQbGFuZShwbGFuZSkpIHtcblx0XHRcdFx0XHRcdFx0XHRwbGFuZXMucHVzaChwbGFuZSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0aWYgKEEueCArIEEud2lkdGggPCBCLnggKyBCLndpZHRoKSB7XG5cdFx0XHRcdFx0XHRcdC8vIHBsYW5lIGluc2lkZSBvZiB0aGUgb3RoZXIgcGxhbmVcblx0XHRcdFx0XHRcdFx0aWYgKEEueSArIEEuaGVpZ2h0ID4gQi55ICsgQi5oZWlnaHQpIHtcblx0XHRcdFx0XHRcdFx0XHR2YXIgcGxhbmUgPSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR4OiBBLngsXG5cdFx0XHRcdFx0XHRcdFx0XHR5OiBCLnkgKyBCLmhlaWdodCxcblx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiBBLndpZHRoLFxuXHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBBLnkgKyBBLmhlaWdodCAtIChCLnkgKyBCLmhlaWdodClcblx0XHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0XHRcdGlmIChpc1ZhbGlkUGxhbmUocGxhbmUpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFuZXMucHVzaChwbGFuZSk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR2YXIgcGxhbmUgPSB7XG5cdFx0XHRcdFx0XHRcdFx0eDogQi54ICsgQi53aWR0aCxcblx0XHRcdFx0XHRcdFx0XHR5OiBBLnksXG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IEEueCArIEEud2lkdGggLSAoQi54ICsgQi53aWR0aCksXG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBCLnkgKyBCLmhlaWdodCAtIEEueVxuXHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0XHRpZiAoaXNWYWxpZFBsYW5lKHBsYW5lKSkge1xuXHRcdFx0XHRcdFx0XHRcdHBsYW5lcy5wdXNoKHBsYW5lKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRpZiAoQS55ICsgQS5oZWlnaHQgPiBCLnkgKyBCLmhlaWdodCkge1xuXHRcdFx0XHRcdFx0XHRcdHZhciBwbGFuZSA9IHtcblx0XHRcdFx0XHRcdFx0XHRcdHg6IEEueCxcblx0XHRcdFx0XHRcdFx0XHRcdHk6IEIueSArIEIuaGVpZ2h0LFxuXHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IEEud2lkdGgsXG5cdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IEEueSArIEEuaGVpZ2h0IC0gKEIueSArIEIuaGVpZ2h0KVxuXHRcdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGlzVmFsaWRQbGFuZShwbGFuZSkpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHBsYW5lcy5wdXNoKHBsYW5lKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRpZiAocGxhbmVzLmxlbmd0aCA+IDApIHtcblx0XHRcdHJldHVybiBwbGFuZXM7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH07XG5cblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBQT1NJVElPTklORyBMT0dJQyBFTkQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gRVZFTlQgSEFORExFUlMgTUlTQ0VMTEFORU9VUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cblx0Ly8gTGltYmVyR3JpZFZpZXcucHJvdG90eXBlLm9uV2luZG93UmVzaXplID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0Ly8gXHRzZXRUaW1lb3V0KFxuXHQvLyBcdFx0dGhpcy5vbldpbmRvd1Jlc2l6ZVRpbWVyQ2FsbGJhY2tGdW5jdGlvblZhcmlhYmxlLFxuXHQvLyBcdFx0dGhpcy5XSU5ET1dfUkVTSVpFX1dBSVRfVElNRVxuXHQvLyBcdCk7XG5cdC8vIFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG5cdC8vIFx0XHRcInJlc2l6ZVwiLFxuXHQvLyBcdFx0dGhpcy5vbldpbmRvd1Jlc2l6ZUZ1bmN0aW9uVmFyaWFibGVcblx0Ly8gXHQpO1xuXHQvLyB9O1xuXG5cdC8vIExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5vbldpbmRvd1Jlc2l6ZVRpbWVyQ2FsbGJhY2sgPSBmdW5jdGlvbihldmVudCkge1xuXHQvLyBcdHRoaXMuaW5pdCh0aGlzLldJRFRILCBmYWxzZSk7XG5cdC8vIFx0dGhpcy5yZW5kZXIoKTtcblxuXHQvLyBcdGlmICh0aGlzLm9wdGlvbnMucmVSZW5kZXJPblJlc2l6ZSAhPSBmYWxzZSkge1xuXHQvLyBcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG5cdC8vIFx0XHRcdFwicmVzaXplXCIsXG5cdC8vIFx0XHRcdHRoaXMub25XaW5kb3dSZXNpemVGdW5jdGlvblZhcmlhYmxlXG5cdC8vIFx0XHQpO1xuXHQvLyBcdH1cblx0Ly8gfTtcblxuXHQvLyBMaW1iZXJHcmlkVmlldy5wcm90b3R5cGUub25JdGVtQ2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xuXHQvLyBcdHRoaXMuY2FsbGJhY2tzLm9uSXRlbUNsaWNrQ2FsbGJhY2soZXZlbnQpO1xuXHQvLyB9O1xuXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEVWRU5UIEhBTkRMRVJTIE1JU0NFTExBTkVPVVMgRU5EIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0gRVZFTlQgSEFORExFUlMgRk9SIEFERElORyBBTkQgQ1VUVElORyBTUEFDRSBJVEVNIC0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5cdC8vIExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5vbkxpbWJlckdyaWRNb3VzZURvd24gPSBmdW5jdGlvbihldmVudCkge1xuXHQvLyBcdGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibGltYmVyR3JpZFZpZXdcIikpIHtcblx0Ly8gXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHQvLyBcdH0gZWxzZSB7XG5cdC8vIFx0XHRyZXR1cm47XG5cdC8vIFx0fVxuXG5cdC8vIFx0aWYgKGV2ZW50LndoaWNoICE9IDEpIHtcblx0Ly8gXHRcdHJldHVybjtcblx0Ly8gXHR9XG5cblx0Ly8gXHR0aGlzLmxpbWJlckdyaWRNb3VzZURvd25DYW5jZWwgPSBmYWxzZTtcblx0Ly8gXHR0aGlzLmxpbWJlckdyaWRNb3VzZURvd25UaW1lckNvbXBsZXRlID0gZmFsc2U7XG5cblx0Ly8gXHRjbGVhclRpbWVvdXQodGhpcy5saW1iZXJHcmlkTW91c2VEb3duQ2hlY2tUaW1lT3V0VmFyaWFibGUpO1xuXHQvLyBcdHRoaXMubGltYmVyR3JpZE1vdXNlRG93bkNoZWNrVGltZU91dFZhcmlhYmxlID0gc2V0VGltZW91dChcblx0Ly8gXHRcdHRoaXMub25MaW1iZXJHcmlkTW91c2VEb3duQ2hlY2suYmluZChcblx0Ly8gXHRcdFx0dGhpcyxcblx0Ly8gXHRcdFx0ZXZlbnQsXG5cdC8vIFx0XHRcdGV2ZW50Lm9mZnNldFgsXG5cdC8vIFx0XHRcdGV2ZW50Lm9mZnNldFlcblx0Ly8gXHRcdCksXG5cdC8vIFx0XHR0aGlzLk1PVVNFX0RPV05fVElNRVxuXHQvLyBcdCk7XG5cblx0Ly8gXHR0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5hZGRFdmVudExpc3RlbmVyKFxuXHQvLyBcdFx0XCJtb3VzZW1vdmVcIixcblx0Ly8gXHRcdHRoaXMub25MaW1iZXJHcmlkTW91c2VNb3ZlQmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHQvLyBcdCk7XG5cdC8vIFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcblx0Ly8gXHRcdFwibW91c2V1cFwiLFxuXHQvLyBcdFx0dGhpcy5vbkxpbWJlckdyaWRNb3VzZVVwQmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHQvLyBcdCk7XG5cdC8vIFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcblx0Ly8gXHRcdFwiY29udGV4dG1lbnVcIixcblx0Ly8gXHRcdHRoaXMub25MaW1iZXJHcmlkQ29udGV4dE1lbnVCaW5kZWRGdW5jdGlvblZhcmlhYmxlXG5cdC8vIFx0KTtcblx0Ly8gfTtcblxuXHQvLyBMaW1iZXJHcmlkVmlldy5wcm90b3R5cGUub25MaW1iZXJHcmlkVG91Y2hTdGFydCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdC8vIFx0aWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJsaW1iZXJHcmlkVmlld1wiKSkge1xuXHQvLyBcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdC8vIFx0fSBlbHNlIHtcblx0Ly8gXHRcdHJldHVybjtcblx0Ly8gXHR9XG5cblx0Ly8gXHR0aGlzLmxpbWJlckdyaWRUb3VjaFN0YXJ0Q2FuY2VsID0gZmFsc2U7XG5cdC8vIFx0dGhpcy5saW1iZXJHcmlkVG91Y2hTdGFydFRpbWVyQ29tcGxldGUgPSBmYWxzZTtcblxuXHQvLyBcdGNsZWFyVGltZW91dCh0aGlzLmxpbWJlckdyaWRUb3VjaFN0YXJ0Q2hlY2tUaW1lT3V0VmFyaWFibGUpO1xuXHQvLyBcdHRoaXMubGltYmVyR3JpZFRvdWNoU3RhcnRDaGVja1RpbWVPdXRWYXJpYWJsZSA9IHNldFRpbWVvdXQoXG5cdC8vIFx0XHR0aGlzLm9uTGltYmVyR3JpZFRvdWNoU3RhcnRDaGVjay5iaW5kKHRoaXMsIGV2ZW50KSxcblx0Ly8gXHRcdHRoaXMuVE9VQ0hfSE9MRF9USU1FXG5cdC8vIFx0KTtcblxuXHQvLyBcdHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLmFkZEV2ZW50TGlzdGVuZXIoXG5cdC8vIFx0XHRcInRvdWNobW92ZVwiLFxuXHQvLyBcdFx0dGhpcy5vbkxpbWJlckdyaWRUb3VjaE1vdmVCaW5kZWRGdW5jdGlvblZhcmlhYmxlXG5cdC8vIFx0KTtcblx0Ly8gXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuXHQvLyBcdFx0XCJ0b3VjaGVuZFwiLFxuXHQvLyBcdFx0dGhpcy5vbkxpbWJlckdyaWRUb3VjaEVuZEJpbmRlZEZ1bmN0aW9uVmFyaWFibGVcblx0Ly8gXHQpO1xuXHQvLyBcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG5cdC8vIFx0XHRcInRvdWNoY2FuY2VsXCIsXG5cdC8vIFx0XHR0aGlzLm9uTGltYmVyR3JpZFRvdWNoQ2FuY2VsQmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHQvLyBcdCk7XG5cdC8vIFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcblx0Ly8gXHRcdFwiY29udGV4dG1lbnVcIixcblx0Ly8gXHRcdHRoaXMub25MaW1iZXJHcmlkVG91Y2hDb250ZXh0TWVudUJpbmRlZEZ1bmN0aW9uVmFyaWFibGVcblx0Ly8gXHQpO1xuXHQvLyBcdHRoaXMudW5Jbml0aWFsaXplSXRlbVRvdWNoRXZlbnRzKCk7XG5cblx0Ly8gXHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0Ly8gfTtcblxuXHQvLyBMaW1iZXJHcmlkVmlldy5wcm90b3R5cGUub25MaW1iZXJHcmlkTW91c2VEb3duQ2hlY2sgPSBmdW5jdGlvbihcblx0Ly8gXHRldmVudCxcblx0Ly8gXHRvZmZzZXRYLFxuXHQvLyBcdG9mZnNldFlcblx0Ly8gKSB7XG5cdC8vIFx0aWYgKHRoaXMubGltYmVyR3JpZE1vdXNlRG93bkNhbmNlbCA9PSBmYWxzZSkge1xuXHQvLyBcdFx0dGhpcy5saW1iZXJHcmlkTW91c2VEb3duVGltZXJDb21wbGV0ZSA9IHRydWU7XG5cblx0Ly8gXHRcdHRoaXMuJGJvZHlbMF0uY2xhc3NMaXN0LmFkZChcblx0Ly8gXHRcdFx0XCJsaW1iZXJHcmlkVmlld0JvZHlUYWdTdGF0ZUVsZW1lbnREcmFnZ2luZ09yUmVzaXppbmdcIixcblx0Ly8gXHRcdFx0XCJsaW1iZXJHcmlkVmlld0JvZHlUYWdTdGF0ZUVsZW1lbnRBZGRpbmdcIlxuXHQvLyBcdFx0KTtcblx0Ly8gXHRcdHZhciBsZW5ndGhfMCA9IHRoaXMuJGxpbWJlckdyaWRWaWV3SXRlbXMubGVuZ3RoO1xuXHQvLyBcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdC8vIFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3SXRlbXNbaV0uY2xhc3NMaXN0LmFkZChcblx0Ly8gXHRcdFx0XHRcImxpbWJlckdyaWRWaWV3SXRlbVJlc2l6aW5nU3RhdGVcIlxuXHQvLyBcdFx0XHQpO1xuXHQvLyBcdFx0fVxuXG5cdC8vIFx0XHR2YXIgbGVuZ3RoXzAgPSB0aGlzLiRsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtcy5sZW5ndGg7XG5cdC8vIFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF8wOyBpKyspIHtcblx0Ly8gXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbXNbaV0uY2xhc3NMaXN0LmFkZChcblx0Ly8gXHRcdFx0XHRcImxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1SZXNpemluZ1N0YXRlXCJcblx0Ly8gXHRcdFx0KTtcblx0Ly8gXHRcdH1cblxuXHQvLyBcdFx0dmFyIHNjcm9sbFRvcCA9IHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLnNjcm9sbFRvcDtcblx0Ly8gXHRcdHZhciBzY3JvbGxMZWZ0ID0gdGhpcy4kbGltYmVyR3JpZFZpZXdbMF0uc2Nyb2xsTGVmdDtcblx0Ly8gXHRcdHZhciB4ID0gb2Zmc2V0WCArIHNjcm9sbExlZnQgLSB0aGlzLlBBRERJTkdfTEVGVDtcblx0Ly8gXHRcdHZhciB5ID0gb2Zmc2V0WSArIHNjcm9sbFRvcCAtIHRoaXMuUEFERElOR19UT1A7XG5cblx0Ly8gXHRcdHRoaXMudXNlckFjdGlvbkRhdGEgPSB7XG5cdC8vIFx0XHRcdHR5cGU6IFwiYWRkXCIsXG5cdC8vIFx0XHRcdGFkZFBvc2l0aW9uWDogeCxcblx0Ly8gXHRcdFx0YWRkUG9zaXRpb25ZOiB5XG5cdC8vIFx0XHR9O1xuXG5cdC8vIFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0FkZEl0ZW1HdWlkZVswXS5zdHlsZS5oZWlnaHQgPSAxICsgXCJweFwiO1xuXHQvLyBcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdBZGRJdGVtR3VpZGVbMF0uc3R5bGUud2lkdGggPSAxICsgXCJweFwiO1xuXHQvLyBcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdBZGRJdGVtR3VpZGVbMF0uc3R5bGUudHJhbnNmb3JtID1cblx0Ly8gXHRcdFx0XCJ0cmFuc2xhdGUoXCIgKyB4ICsgXCJweCwgXCIgKyB5ICsgXCJweClcIjtcblxuXHQvLyBcdFx0aWYgKHRoaXMuQUREX09SX0NVVFNQQUNFX1RPR0dMRSA9PSBcIkFERFwiKSB7XG5cdC8vIFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3QWRkSXRlbUd1aWRlWzBdLmNsYXNzTGlzdC5hZGQoXG5cdC8vIFx0XHRcdFx0XCJsaW1iZXJHcmlkVmlld0FkZEl0ZW1HdWlkZUFjdGl2ZVwiXG5cdC8vIFx0XHRcdCk7XG5cdC8vIFx0XHR9IGVsc2UgaWYgKHRoaXMuQUREX09SX0NVVFNQQUNFX1RPR0dMRSA9PSBcIkNVVFNQQUNFXCIpIHtcblx0Ly8gXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdBZGRJdGVtR3VpZGVbMF0uY2xhc3NMaXN0LmFkZChcblx0Ly8gXHRcdFx0XHRcImxpbWJlckdyaWRWaWV3QWRkSXRlbUd1aWRlQWN0aXZlXCIsXG5cdC8vIFx0XHRcdFx0XCJsaW1iZXJHcmlkVmlld0FkZEl0ZW1HdWlkZUN1dE1vZGVcIlxuXHQvLyBcdFx0XHQpO1xuXHQvLyBcdFx0fVxuXG5cdC8vIFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0hlaWdodEFkanVzdEd1aWRlWzBdLnN0eWxlLmhlaWdodCA9IDAgKyBcInB4XCI7XG5cdC8vIFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0hlaWdodEFkanVzdEd1aWRlWzBdLmNsYXNzTGlzdC5hZGQoXG5cdC8vIFx0XHRcdFwibGltYmVyR3JpZFZpZXdIZWlnaHRBZGp1c3RHdWlkZUFjdGl2ZVwiXG5cdC8vIFx0XHQpO1xuXHQvLyBcdH0gZWxzZSB7XG5cdC8vIFx0XHQvLyBtb3VzZURvd24gY2FuY2VsIGJlZm9yZSBUaW1lckNvbXBsZXRlXG5cdC8vIFx0fVxuXHQvLyB9O1xuXG5cdC8vIExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5vbkxpbWJlckdyaWRUb3VjaFN0YXJ0Q2hlY2sgPSBmdW5jdGlvbihldmVudCkge1xuXHQvLyBcdGlmICh0aGlzLmxpbWJlckdyaWRUb3VjaFN0YXJ0Q2FuY2VsID09IGZhbHNlKSB7XG5cdC8vIFx0XHR0aGlzLmxpbWJlckdyaWRUb3VjaFN0YXJ0VGltZXJDb21wbGV0ZSA9IHRydWU7XG5cblx0Ly8gXHRcdHRoaXMuJGJvZHlbMF0uY2xhc3NMaXN0LmFkZChcblx0Ly8gXHRcdFx0XCJsaW1iZXJHcmlkVmlld0JvZHlUYWdTdGF0ZUVsZW1lbnREcmFnZ2luZ09yUmVzaXppbmdcIixcblx0Ly8gXHRcdFx0XCJsaW1iZXJHcmlkVmlld0JvZHlUYWdTdGF0ZUVsZW1lbnRBZGRpbmdcIlxuXHQvLyBcdFx0KTtcblx0Ly8gXHRcdHZhciBsZW5ndGhfMCA9IHRoaXMuJGxpbWJlckdyaWRWaWV3SXRlbXMubGVuZ3RoO1xuXHQvLyBcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdC8vIFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3SXRlbXNbaV0uY2xhc3NMaXN0LmFkZChcblx0Ly8gXHRcdFx0XHRcImxpbWJlckdyaWRWaWV3SXRlbVJlc2l6aW5nU3RhdGVcIlxuXHQvLyBcdFx0XHQpO1xuXHQvLyBcdFx0fVxuXG5cdC8vIFx0XHR2YXIgbGVuZ3RoXzAgPSB0aGlzLiRsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtcy5sZW5ndGg7XG5cdC8vIFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF8wOyBpKyspIHtcblx0Ly8gXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbXNbaV0uY2xhc3NMaXN0LmFkZChcblx0Ly8gXHRcdFx0XHRcImxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1SZXNpemluZ1N0YXRlXCJcblx0Ly8gXHRcdFx0KTtcblx0Ly8gXHRcdH1cblxuXHQvLyBcdFx0dmFyIHRvdWNoUG9zaXRpb25PbkxpbWJlckdyaWQgPSB0aGlzLmNhbGN1bGF0ZVRvdWNoUG9zT25MaW1iZXJHcmlkKFxuXHQvLyBcdFx0XHRldmVudFxuXHQvLyBcdFx0KTtcblxuXHQvLyBcdFx0dmFyIHggPSB0b3VjaFBvc2l0aW9uT25MaW1iZXJHcmlkLng7XG5cdC8vIFx0XHR2YXIgeSA9IHRvdWNoUG9zaXRpb25PbkxpbWJlckdyaWQueTtcblxuXHQvLyBcdFx0dGhpcy51c2VyQWN0aW9uRGF0YSA9IHtcblx0Ly8gXHRcdFx0dHlwZTogXCJhZGRcIixcblx0Ly8gXHRcdFx0YWRkUG9zaXRpb25YOiB4LFxuXHQvLyBcdFx0XHRhZGRQb3NpdGlvblk6IHlcblx0Ly8gXHRcdH07XG5cblx0Ly8gXHRcdHZhciByZW1vdmVBZGRJdGVtT25Ub3VjaEhvbGRHdWlkZUZ1bmN0aW9uID0gZnVuY3Rpb24oKSB7XG5cdC8vIFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3QWRkSXRlbU9uVG91Y2hIb2xkR3VpZGVbMF0uY2xhc3NMaXN0LnJlbW92ZShcblx0Ly8gXHRcdFx0XHRcImxpbWJlckdyaWRWaWV3QWRkSXRlbU9uVG91Y2hIb2xkR3VpZGVBY3RpdmVcIlxuXHQvLyBcdFx0XHQpO1xuXHQvLyBcdFx0fTtcblx0Ly8gXHRcdHNldFRpbWVvdXQocmVtb3ZlQWRkSXRlbU9uVG91Y2hIb2xkR3VpZGVGdW5jdGlvbi5iaW5kKHRoaXMpLCA1MDApO1xuXG5cdC8vIFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0FkZEl0ZW1HdWlkZVswXS5zdHlsZS5oZWlnaHQgPSAxICsgXCJweFwiO1xuXHQvLyBcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdBZGRJdGVtR3VpZGVbMF0uc3R5bGUud2lkdGggPSAxICsgXCJweFwiO1xuXHQvLyBcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdBZGRJdGVtR3VpZGVbMF0uc3R5bGUudHJhbnNmb3JtID1cblx0Ly8gXHRcdFx0XCJ0cmFuc2xhdGUoXCIgKyB4ICsgXCJweCwgXCIgKyB5ICsgXCJweClcIjtcblxuXHQvLyBcdFx0aWYgKHRoaXMuQUREX09SX0NVVFNQQUNFX1RPR0dMRSA9PSBcIkFERFwiKSB7XG5cdC8vIFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3QWRkSXRlbUd1aWRlWzBdLmNsYXNzTGlzdC5hZGQoXG5cdC8vIFx0XHRcdFx0XCJsaW1iZXJHcmlkVmlld0FkZEl0ZW1HdWlkZUFjdGl2ZVwiXG5cdC8vIFx0XHRcdCk7XG5cdC8vIFx0XHR9IGVsc2UgaWYgKHRoaXMuQUREX09SX0NVVFNQQUNFX1RPR0dMRSA9PSBcIkNVVFNQQUNFXCIpIHtcblx0Ly8gXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdBZGRJdGVtR3VpZGVbMF0uY2xhc3NMaXN0LmFkZChcblx0Ly8gXHRcdFx0XHRcImxpbWJlckdyaWRWaWV3QWRkSXRlbUd1aWRlQWN0aXZlXCIsXG5cdC8vIFx0XHRcdFx0XCJsaW1iZXJHcmlkVmlld0FkZEl0ZW1HdWlkZUN1dE1vZGVcIlxuXHQvLyBcdFx0XHQpO1xuXHQvLyBcdFx0fVxuXG5cdC8vIFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0hlaWdodEFkanVzdEd1aWRlWzBdLnN0eWxlLmhlaWdodCA9IDAgKyBcInB4XCI7XG5cdC8vIFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0hlaWdodEFkanVzdEd1aWRlWzBdLmNsYXNzTGlzdC5hZGQoXG5cdC8vIFx0XHRcdFwibGltYmVyR3JpZFZpZXdIZWlnaHRBZGp1c3RHdWlkZUFjdGl2ZVwiXG5cdC8vIFx0XHQpO1xuXG5cdC8vIFx0XHR0aGlzLmluc2VydEFkZEl0ZW1PblRvdWNoSG9sZEd1aWRlU3R5bGVzKHgsIHkpO1xuXHQvLyBcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdBZGRJdGVtT25Ub3VjaEhvbGRHdWlkZVswXS5zdHlsZS50cmFuc2Zvcm0gPVxuXHQvLyBcdFx0XHRcInRyYW5zbGF0ZShcIiArIHggKyBcInB4LCBcIiArIHkgKyBcInB4KVwiO1xuXHQvLyBcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdBZGRJdGVtT25Ub3VjaEhvbGRHdWlkZVswXS5jbGFzc0xpc3QuYWRkKFxuXHQvLyBcdFx0XHRcImxpbWJlckdyaWRWaWV3QWRkSXRlbU9uVG91Y2hIb2xkR3VpZGVBY3RpdmVcIlxuXHQvLyBcdFx0KTtcblxuXHQvLyBcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0Ly8gXHR9IGVsc2Uge1xuXHQvLyBcdFx0Ly8gdG91Y2hzdGFydCBjYW5jZWwgYmVmb3JlIFRpbWVyQ29tcGxldGVcblx0Ly8gXHR9XG5cdC8vIH07XG5cblx0Ly8gTGltYmVyR3JpZFZpZXcucHJvdG90eXBlLm9uTGltYmVyR3JpZE1vdXNlTW92ZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdC8vIFx0aWYgKHRoaXMubGltYmVyR3JpZE1vdXNlRG93blRpbWVyQ29tcGxldGUgPT0gdHJ1ZSkge1xuXHQvLyBcdFx0aWYgKFxuXHQvLyBcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0FkZEl0ZW1HdWlkZVswXS5jbGFzc0xpc3QuY29udGFpbnMoXG5cdC8vIFx0XHRcdFx0XCJsaW1iZXJHcmlkVmlld0FkZEl0ZW1HdWlkZUFkZEFsbG93XCJcblx0Ly8gXHRcdFx0KSB8fFxuXHQvLyBcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0FkZEl0ZW1HdWlkZVswXS5jbGFzc0xpc3QuY29udGFpbnMoXG5cdC8vIFx0XHRcdFx0XCJsaW1iZXJHcmlkVmlld0FkZEl0ZW1HdWlkZUFkZERpc2FsbG93XCJcblx0Ly8gXHRcdFx0KVxuXHQvLyBcdFx0KSB7XG5cdC8vIFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3QWRkSXRlbUd1aWRlWzBdLmNsYXNzTGlzdC5yZW1vdmUoXG5cdC8vIFx0XHRcdFx0XCJsaW1iZXJHcmlkVmlld0FkZEl0ZW1HdWlkZUFkZEFsbG93XCIsXG5cdC8vIFx0XHRcdFx0XCJsaW1iZXJHcmlkVmlld0FkZEl0ZW1HdWlkZUFkZERpc2FsbG93XCJcblx0Ly8gXHRcdFx0KTtcblx0Ly8gXHRcdH1cblxuXHQvLyBcdFx0dmFyIHNjcm9sbFRvcCA9IHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLnNjcm9sbFRvcDtcblx0Ly8gXHRcdHZhciBzY3JvbGxMZWZ0ID0gdGhpcy4kbGltYmVyR3JpZFZpZXdbMF0uc2Nyb2xsTGVmdDtcblxuXHQvLyBcdFx0dmFyIHggPSB0aGlzLnVzZXJBY3Rpb25EYXRhLmFkZFBvc2l0aW9uWDtcblx0Ly8gXHRcdHZhciB5ID0gdGhpcy51c2VyQWN0aW9uRGF0YS5hZGRQb3NpdGlvblk7XG5cblx0Ly8gXHRcdHZhciBuZXdXaWR0aCA9IGV2ZW50Lm9mZnNldFggLSB4ICsgc2Nyb2xsTGVmdCAtIHRoaXMuUEFERElOR19MRUZUO1xuXHQvLyBcdFx0dmFyIG5ld0hlaWdodCA9IGV2ZW50Lm9mZnNldFkgLSB5ICsgc2Nyb2xsVG9wIC0gdGhpcy5QQURESU5HX1RPUDtcblxuXHQvLyBcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5uZXdXaWR0aCA9IG5ld1dpZHRoO1xuXHQvLyBcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5uZXdIZWlnaHQgPSBuZXdIZWlnaHQ7XG5cblx0Ly8gXHRcdHZhciB5TW91c2VQb3NpdGlvbiA9IGV2ZW50Lm9mZnNldFkgKyBzY3JvbGxUb3A7XG5cdC8vIFx0XHR0aGlzLmFkanVzdEhlaWdodCh5TW91c2VQb3NpdGlvbik7XG5cblx0Ly8gXHRcdGlmIChuZXdXaWR0aCA+IDAgJiYgbmV3SGVpZ2h0ID4gMCkge1xuXHQvLyBcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0FkZEl0ZW1HdWlkZVswXS5zdHlsZS53aWR0aCA9XG5cdC8vIFx0XHRcdFx0bmV3V2lkdGggKyBcInB4XCI7XG5cdC8vIFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3QWRkSXRlbUd1aWRlWzBdLnN0eWxlLmhlaWdodCA9XG5cdC8vIFx0XHRcdFx0bmV3SGVpZ2h0ICsgXCJweFwiO1xuXHQvLyBcdFx0fVxuXG5cdC8vIFx0XHRpZiAodGhpcy5BRERfT1JfQ1VUU1BBQ0VfVE9HR0xFID09IFwiQUREXCIpIHtcblx0Ly8gXHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMuYWRkSXRlbUFsbG93Q2hlY2tUaW1lT3V0VmFyaWFibGUpO1xuXHQvLyBcdFx0XHR0aGlzLmFkZEl0ZW1BbGxvd0NoZWNrVGltZU91dFZhcmlhYmxlID0gc2V0VGltZW91dChcblx0Ly8gXHRcdFx0XHR0aGlzLmFkZEl0ZW1BbGxvd0NoZWNrVGltZU91dC5iaW5kKFxuXHQvLyBcdFx0XHRcdFx0dGhpcyxcblx0Ly8gXHRcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuYWRkUG9zaXRpb25YLFxuXHQvLyBcdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5hZGRQb3NpdGlvblksXG5cdC8vIFx0XHRcdFx0XHRuZXdXaWR0aCxcblx0Ly8gXHRcdFx0XHRcdG5ld0hlaWdodFxuXHQvLyBcdFx0XHRcdCksXG5cdC8vIFx0XHRcdFx0dGhpcy5ERU1PX1dBSVRfVElNRVxuXHQvLyBcdFx0XHQpO1xuXHQvLyBcdFx0fSBlbHNlIGlmICh0aGlzLkFERF9PUl9DVVRTUEFDRV9UT0dHTEUgPT0gXCJDVVRTUEFDRVwiKSB7XG5cdC8vIFx0XHRcdGNsZWFyVGltZW91dCh0aGlzLmN1dFNwYWNlQWxsb3dDaGVja1RpbWVPdXRWYXJpYWJsZSk7XG5cdC8vIFx0XHRcdHRoaXMuY3V0U3BhY2VBbGxvd0NoZWNrVGltZU91dFZhcmlhYmxlID0gc2V0VGltZW91dChcblx0Ly8gXHRcdFx0XHR0aGlzLmN1dFNwYWNlQWxsb3dDaGVja1RpbWVPdXQuYmluZChcblx0Ly8gXHRcdFx0XHRcdHRoaXMsXG5cdC8vIFx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLmFkZFBvc2l0aW9uWCxcblx0Ly8gXHRcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuYWRkUG9zaXRpb25ZLFxuXHQvLyBcdFx0XHRcdFx0bmV3V2lkdGgsXG5cdC8vIFx0XHRcdFx0XHRuZXdIZWlnaHRcblx0Ly8gXHRcdFx0XHQpLFxuXHQvLyBcdFx0XHRcdHRoaXMuREVNT19XQUlUX1RJTUVcblx0Ly8gXHRcdFx0KTtcblx0Ly8gXHRcdH1cblx0Ly8gXHR9IGVsc2Uge1xuXHQvLyBcdFx0Y2xlYXJUaW1lb3V0KHRoaXMubGltYmVyR3JpZE1vdXNlRG93bkNoZWNrVGltZU91dFZhcmlhYmxlKTtcblx0Ly8gXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoXG5cdC8vIFx0XHRcdFwibW91c2Vtb3ZlXCIsXG5cdC8vIFx0XHRcdHRoaXMub25MaW1iZXJHcmlkTW91c2VNb3ZlQmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHQvLyBcdFx0KTtcblx0Ly8gXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG5cdC8vIFx0XHRcdFwibW91c2V1cFwiLFxuXHQvLyBcdFx0XHR0aGlzLm9uTGltYmVyR3JpZE1vdXNlVXBCaW5kZWRGdW5jdGlvblZhcmlhYmxlXG5cdC8vIFx0XHQpO1xuXHQvLyBcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0Ly8gXHRcdFx0XCJjb250ZXh0bWVudVwiLFxuXHQvLyBcdFx0XHR0aGlzLm9uTGltYmVyR3JpZENvbnRleHRNZW51QmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHQvLyBcdFx0KTtcblx0Ly8gXHR9XG5cdC8vIFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdC8vIH07XG5cblx0Ly8gTGltYmVyR3JpZFZpZXcucHJvdG90eXBlLm9uTGltYmVyR3JpZFRvdWNoTW92ZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdC8vIFx0aWYgKHRoaXMubGltYmVyR3JpZFRvdWNoU3RhcnRUaW1lckNvbXBsZXRlID09IHRydWUpIHtcblx0Ly8gXHRcdGNvbnNvbGUubG9nKFwibGltYmVyR3JpZFRvdWNoU3RhcnRUaW1lckNvbXBsZXRlXCIpO1xuXHQvLyBcdFx0aWYgKFxuXHQvLyBcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0FkZEl0ZW1HdWlkZVswXS5jbGFzc0xpc3QuY29udGFpbnMoXG5cdC8vIFx0XHRcdFx0XCJsaW1iZXJHcmlkVmlld0FkZEl0ZW1HdWlkZUFkZEFsbG93XCJcblx0Ly8gXHRcdFx0KSB8fFxuXHQvLyBcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0FkZEl0ZW1HdWlkZVswXS5jbGFzc0xpc3QuY29udGFpbnMoXG5cdC8vIFx0XHRcdFx0XCJsaW1iZXJHcmlkVmlld0FkZEl0ZW1HdWlkZUFkZERpc2FsbG93XCJcblx0Ly8gXHRcdFx0KVxuXHQvLyBcdFx0KSB7XG5cdC8vIFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3QWRkSXRlbUd1aWRlWzBdLmNsYXNzTGlzdC5yZW1vdmUoXG5cdC8vIFx0XHRcdFx0XCJsaW1iZXJHcmlkVmlld0FkZEl0ZW1HdWlkZUFkZEFsbG93XCIsXG5cdC8vIFx0XHRcdFx0XCJsaW1iZXJHcmlkVmlld0FkZEl0ZW1HdWlkZUFkZERpc2FsbG93XCJcblx0Ly8gXHRcdFx0KTtcblx0Ly8gXHRcdH1cblxuXHQvLyBcdFx0dmFyIHNjcm9sbFRvcCA9IHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLnNjcm9sbFRvcDtcblx0Ly8gXHRcdHZhciBzY3JvbGxMZWZ0ID0gdGhpcy4kbGltYmVyR3JpZFZpZXdbMF0uc2Nyb2xsTGVmdDtcblxuXHQvLyBcdFx0dmFyIHggPSB0aGlzLnVzZXJBY3Rpb25EYXRhLmFkZFBvc2l0aW9uWDtcblx0Ly8gXHRcdHZhciB5ID0gdGhpcy51c2VyQWN0aW9uRGF0YS5hZGRQb3NpdGlvblk7XG5cblx0Ly8gXHRcdHZhciB0b3VjaFBvc2l0aW9uT25MaW1iZXJHcmlkID0gdGhpcy5jYWxjdWxhdGVUb3VjaFBvc09uTGltYmVyR3JpZChcblx0Ly8gXHRcdFx0ZXZlbnRcblx0Ly8gXHRcdCk7XG5cblx0Ly8gXHRcdGlmICh0b3VjaFBvc2l0aW9uT25MaW1iZXJHcmlkICE9IGZhbHNlKSB7XG5cdC8vIFx0XHRcdHZhciBuZXdXaWR0aCA9IHRvdWNoUG9zaXRpb25PbkxpbWJlckdyaWQueCAtIHg7XG5cdC8vIFx0XHRcdHZhciBuZXdIZWlnaHQgPSB0b3VjaFBvc2l0aW9uT25MaW1iZXJHcmlkLnkgLSB5O1xuXG5cdC8vIFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEubmV3V2lkdGggPSBuZXdXaWR0aDtcblx0Ly8gXHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5uZXdIZWlnaHQgPSBuZXdIZWlnaHQ7XG5cblx0Ly8gXHRcdFx0aWYgKG5ld1dpZHRoID4gMCAmJiBuZXdIZWlnaHQgPiAwKSB7XG5cdC8vIFx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdBZGRJdGVtR3VpZGVbMF0uc3R5bGUud2lkdGggPVxuXHQvLyBcdFx0XHRcdFx0bmV3V2lkdGggKyBcInB4XCI7XG5cdC8vIFx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdBZGRJdGVtR3VpZGVbMF0uc3R5bGUuaGVpZ2h0ID1cblx0Ly8gXHRcdFx0XHRcdG5ld0hlaWdodCArIFwicHhcIjtcblx0Ly8gXHRcdFx0fVxuXHQvLyBcdFx0fVxuXG5cdC8vIFx0XHRpZiAodG91Y2hQb3NpdGlvbk9uTGltYmVyR3JpZCAhPSBmYWxzZSkge1xuXHQvLyBcdFx0XHR2YXIgbGltYmVyR3JpZFZpZXdCb3VuZGluZ0NsaWVudFJlY3QgPSB0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0Ly8gXHRcdFx0dmFyIGxpbWJlckdyaWRWaWV3V2lkdGhWaXNpYmxlV2lkdGggPVxuXHQvLyBcdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLm9mZnNldFdpZHRoIC1cblx0Ly8gXHRcdFx0XHRsaW1iZXJHcmlkVmlld0JvdW5kaW5nQ2xpZW50UmVjdC5sZWZ0O1xuXHQvLyBcdFx0XHR2YXIgbGltYmVyR3JpZFZpZXdIZWlnaHRWaXNpYmxlSGVpZ2h0ID1cblx0Ly8gXHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5vZmZzZXRIZWlnaHQgLVxuXHQvLyBcdFx0XHRcdGxpbWJlckdyaWRWaWV3Qm91bmRpbmdDbGllbnRSZWN0LnRvcDtcblx0Ly8gXHRcdFx0dmFyIGxpbWJlckdyaWRWaWV3T25WaXNpYmxlQXJlYVggPVxuXHQvLyBcdFx0XHRcdHRvdWNoUG9zaXRpb25PbkxpbWJlckdyaWQueCArXG5cdC8vIFx0XHRcdFx0dGhpcy5QQURESU5HX0xFRlQgLVxuXHQvLyBcdFx0XHRcdHNjcm9sbExlZnQ7XG5cdC8vIFx0XHRcdHZhciBsaW1iZXJHcmlkVmlld09uVmlzaWJsZUFyZWFZID1cblx0Ly8gXHRcdFx0XHR0b3VjaFBvc2l0aW9uT25MaW1iZXJHcmlkLnkgKyB0aGlzLlBBRERJTkdfVE9QIC0gc2Nyb2xsVG9wO1xuXG5cdC8vIFx0XHRcdHZhciB5VG91Y2hQb3NpdGlvbiA9IHRvdWNoUG9zaXRpb25PbkxpbWJlckdyaWQueTtcblx0Ly8gXHRcdFx0dGhpcy5hZGp1c3RIZWlnaHQoeVRvdWNoUG9zaXRpb24pO1xuXG5cdC8vIFx0XHRcdHZhciBwcm9ncmFtU2Nyb2xsZWQgPSB0aGlzLmFkanVzdFNjcm9sbChcblx0Ly8gXHRcdFx0XHRsaW1iZXJHcmlkVmlld09uVmlzaWJsZUFyZWFZLFxuXHQvLyBcdFx0XHRcdGxpbWJlckdyaWRWaWV3SGVpZ2h0VmlzaWJsZUhlaWdodFxuXHQvLyBcdFx0XHQpO1xuXHQvLyBcdFx0fVxuXG5cdC8vIFx0XHRpZiAodGhpcy5BRERfT1JfQ1VUU1BBQ0VfVE9HR0xFID09IFwiQUREXCIpIHtcblx0Ly8gXHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMuYWRkSXRlbUFsbG93Q2hlY2tUaW1lT3V0VmFyaWFibGUpO1xuXHQvLyBcdFx0XHRpZiAocHJvZ3JhbVNjcm9sbGVkICE9IHRydWUpIHtcblx0Ly8gXHRcdFx0XHR0aGlzLmFkZEl0ZW1BbGxvd0NoZWNrVGltZU91dFZhcmlhYmxlID0gc2V0VGltZW91dChcblx0Ly8gXHRcdFx0XHRcdHRoaXMuYWRkSXRlbUFsbG93Q2hlY2tUaW1lT3V0LmJpbmQoXG5cdC8vIFx0XHRcdFx0XHRcdHRoaXMsXG5cdC8vIFx0XHRcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuYWRkUG9zaXRpb25YLFxuXHQvLyBcdFx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLmFkZFBvc2l0aW9uWSxcblx0Ly8gXHRcdFx0XHRcdFx0bmV3V2lkdGgsXG5cdC8vIFx0XHRcdFx0XHRcdG5ld0hlaWdodFxuXHQvLyBcdFx0XHRcdFx0KSxcblx0Ly8gXHRcdFx0XHRcdHRoaXMuREVNT19XQUlUX1RJTUVcblx0Ly8gXHRcdFx0XHQpO1xuXHQvLyBcdFx0XHR9XG5cdC8vIFx0XHR9IGVsc2UgaWYgKHRoaXMuQUREX09SX0NVVFNQQUNFX1RPR0dMRSA9PSBcIkNVVFNQQUNFXCIpIHtcblx0Ly8gXHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMuY3V0U3BhY2VBbGxvd0NoZWNrVGltZU91dFZhcmlhYmxlKTtcblx0Ly8gXHRcdFx0aWYgKHByb2dyYW1TY3JvbGxlZCAhPSB0cnVlKSB7XG5cdC8vIFx0XHRcdFx0dGhpcy5jdXRTcGFjZUFsbG93Q2hlY2tUaW1lT3V0VmFyaWFibGUgPSBzZXRUaW1lb3V0KFxuXHQvLyBcdFx0XHRcdFx0dGhpcy5jdXRTcGFjZUFsbG93Q2hlY2tUaW1lT3V0LmJpbmQoXG5cdC8vIFx0XHRcdFx0XHRcdHRoaXMsXG5cdC8vIFx0XHRcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuYWRkUG9zaXRpb25YLFxuXHQvLyBcdFx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLmFkZFBvc2l0aW9uWSxcblx0Ly8gXHRcdFx0XHRcdFx0bmV3V2lkdGgsXG5cdC8vIFx0XHRcdFx0XHRcdG5ld0hlaWdodFxuXHQvLyBcdFx0XHRcdFx0KSxcblx0Ly8gXHRcdFx0XHRcdHRoaXMuREVNT19XQUlUX1RJTUVcblx0Ly8gXHRcdFx0XHQpO1xuXHQvLyBcdFx0XHR9XG5cdC8vIFx0XHR9XG5cdC8vIFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHQvLyBcdH0gZWxzZSB7XG5cdC8vIFx0XHRjbGVhclRpbWVvdXQodGhpcy5saW1iZXJHcmlkVG91Y2hTdGFydENoZWNrVGltZU91dFZhcmlhYmxlKTtcblx0Ly8gXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoXG5cdC8vIFx0XHRcdFwidG91Y2htb3ZlXCIsXG5cdC8vIFx0XHRcdHRoaXMub25MaW1iZXJHcmlkVG91Y2hNb3ZlQmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHQvLyBcdFx0KTtcblx0Ly8gXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG5cdC8vIFx0XHRcdFwidG91Y2hlbmRcIixcblx0Ly8gXHRcdFx0dGhpcy5vbkxpbWJlckdyaWRUb3VjaEVuZEJpbmRlZEZ1bmN0aW9uVmFyaWFibGVcblx0Ly8gXHRcdCk7XG5cdC8vIFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuXHQvLyBcdFx0XHRcInRvdWNoY2FuY2VsXCIsXG5cdC8vIFx0XHRcdHRoaXMub25MaW1iZXJHcmlkVG91Y2hDYW5jZWxCaW5kZWRGdW5jdGlvblZhcmlhYmxlXG5cdC8vIFx0XHQpO1xuXHQvLyBcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0Ly8gXHRcdFx0XCJjb250ZXh0bWVudVwiLFxuXHQvLyBcdFx0XHR0aGlzLm9uTGltYmVyR3JpZFRvdWNoQ29udGV4dE1lbnVCaW5kZWRGdW5jdGlvblZhcmlhYmxlXG5cdC8vIFx0XHQpO1xuXHQvLyBcdFx0dGhpcy5pbml0aWFsaXplSXRlbVRvdWNoRXZlbnRzKCk7XG5cdC8vIFx0fVxuXG5cdC8vIFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdC8vIH07XG5cblx0Ly8gTGltYmVyR3JpZFZpZXcucHJvdG90eXBlLm9uTGltYmVyR3JpZE1vdXNlVXAgPSBmdW5jdGlvbihldmVudCkge1xuXHQvLyBcdGNsZWFyVGltZW91dCh0aGlzLmFkZEl0ZW1BbGxvd0NoZWNrVGltZU91dFZhcmlhYmxlKTtcblx0Ly8gXHRjbGVhclRpbWVvdXQodGhpcy5saW1iZXJHcmlkTW91c2VEb3duQ2hlY2tUaW1lT3V0VmFyaWFibGUpO1xuXHQvLyBcdHZhciBpdGVtQWRkZWRGbGFnID0gZmFsc2U7XG5cdC8vIFx0aWYgKHRoaXMubGltYmVyR3JpZE1vdXNlRG93blRpbWVyQ29tcGxldGUgPT0gdHJ1ZSkge1xuXHQvLyBcdFx0aWYgKHRoaXMuQUREX09SX0NVVFNQQUNFX1RPR0dMRSA9PSBcIkFERFwiKSB7XG5cdC8vIFx0XHRcdGlmIChcblx0Ly8gXHRcdFx0XHR0aGlzLmFkZEl0ZW1BbGxvd0NoZWNrKFxuXHQvLyBcdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5hZGRQb3NpdGlvblgsXG5cdC8vIFx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLmFkZFBvc2l0aW9uWSxcblx0Ly8gXHRcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEubmV3V2lkdGgsXG5cdC8vIFx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLm5ld0hlaWdodFxuXHQvLyBcdFx0XHRcdClcblx0Ly8gXHRcdFx0KSB7XG5cdC8vIFx0XHRcdFx0dmFyIGl0ZW0gPSB7XG5cdC8vIFx0XHRcdFx0XHR4OiB0aGlzLnVzZXJBY3Rpb25EYXRhLmFkZFBvc2l0aW9uWCxcblx0Ly8gXHRcdFx0XHRcdHk6IHRoaXMudXNlckFjdGlvbkRhdGEuYWRkUG9zaXRpb25ZLFxuXHQvLyBcdFx0XHRcdFx0d2lkdGg6IHRoaXMudXNlckFjdGlvbkRhdGEubmV3V2lkdGgsXG5cdC8vIFx0XHRcdFx0XHRoZWlnaHQ6IHRoaXMudXNlckFjdGlvbkRhdGEubmV3SGVpZ2h0XG5cdC8vIFx0XHRcdFx0fTtcblxuXHQvLyBcdFx0XHRcdHZhciBzY3JvbGxUb3AgPSB0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5zY3JvbGxUb3A7XG5cblx0Ly8gXHRcdFx0XHR2YXIgcmVuZGVyRGV0YWlscyA9IHRoaXMuYWRkSXRlbXNBdFBvc2l0aW9ucyhcblx0Ly8gXHRcdFx0XHRcdFtpdGVtXSxcblx0Ly8gXHRcdFx0XHRcdGZhbHNlLFxuXHQvLyBcdFx0XHRcdFx0XCJhZGRJdGVtSW50ZXJhY3RpdmVcIlxuXHQvLyBcdFx0XHRcdCk7XG5cdC8vIFx0XHRcdFx0aXRlbUFkZGVkRmxhZyA9IHRydWU7XG5cblx0Ly8gXHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5zY3JvbGxUb3AgPSBzY3JvbGxUb3A7XG5cdC8vIFx0XHRcdH1cblx0Ly8gXHRcdH0gZWxzZSBpZiAodGhpcy5BRERfT1JfQ1VUU1BBQ0VfVE9HR0xFID09IFwiQ1VUU1BBQ0VcIikge1xuXHQvLyBcdFx0XHRpZiAoXG5cdC8vIFx0XHRcdFx0dGhpcy5jdXRTcGFjZUFsbG93Q2hlY2soXG5cdC8vIFx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLmFkZFBvc2l0aW9uWCxcblx0Ly8gXHRcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuYWRkUG9zaXRpb25ZLFxuXHQvLyBcdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5uZXdXaWR0aCxcblx0Ly8gXHRcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEubmV3SGVpZ2h0XG5cdC8vIFx0XHRcdFx0KVxuXHQvLyBcdFx0XHQpIHtcblx0Ly8gXHRcdFx0XHR0aGlzLnNoaWZ0SXRlbXNVcChcblx0Ly8gXHRcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuYWRkUG9zaXRpb25ZLFxuXHQvLyBcdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5uZXdIZWlnaHRcblx0Ly8gXHRcdFx0XHQpO1xuXHQvLyBcdFx0XHR9XG5cdC8vIFx0XHR9XG5cdC8vIFx0fSBlbHNlIHtcblx0Ly8gXHRcdHRoaXMubGltYmVyR3JpZE1vdXNlRG93bkNhbmNlbCA9IHRydWU7XG5cdC8vIFx0fVxuXHQvLyBcdHRoaXMub25MaW1iZXJHcmlkQ29udGV4dE1lbnUoKTtcblx0Ly8gXHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHQvLyBcdGlmIChcblx0Ly8gXHRcdHRoaXMuY2FsbGJhY2tzLmFkZENvbXBsZXRlQ2FsbGJhY2sgIT0gdW5kZWZpbmVkICYmXG5cdC8vIFx0XHR0aGlzLmNhbGxiYWNrcy5hZGRDb21wbGV0ZUNhbGxiYWNrICE9IG51bGxcblx0Ly8gXHQpIHtcblx0Ly8gXHRcdGlmIChpdGVtQWRkZWRGbGFnID09IHRydWUpIHtcblx0Ly8gXHRcdFx0dGhpcy5jYWxsYmFja3MuYWRkQ29tcGxldGVDYWxsYmFjayhcblx0Ly8gXHRcdFx0XHRyZW5kZXJEZXRhaWxzLml0ZW1zLFxuXHQvLyBcdFx0XHRcdGl0ZW0ud2lkdGgsXG5cdC8vIFx0XHRcdFx0aXRlbS5oZWlnaHQsXG5cdC8vIFx0XHRcdFx0XCJhZGRJdGVtSW50ZXJhY3RpdmVcIlxuXHQvLyBcdFx0XHQpO1xuXHQvLyBcdFx0fVxuXHQvLyBcdH1cblx0Ly8gfTtcblxuXHQvLyBMaW1iZXJHcmlkVmlldy5wcm90b3R5cGUub25MaW1iZXJHcmlkVG91Y2hFbmQgPSBmdW5jdGlvbihldmVudCkge1xuXHQvLyBcdGNsZWFyVGltZW91dCh0aGlzLmFkZEl0ZW1BbGxvd0NoZWNrVGltZU91dFZhcmlhYmxlKTtcblx0Ly8gXHRjbGVhclRpbWVvdXQodGhpcy5saW1iZXJHcmlkVG91Y2hTdGFydENoZWNrVGltZU91dFZhcmlhYmxlKTtcblx0Ly8gXHR2YXIgaXRlbUFkZGVkRmxhZyA9IGZhbHNlO1xuXHQvLyBcdGlmICh0aGlzLmxpbWJlckdyaWRUb3VjaFN0YXJ0VGltZXJDb21wbGV0ZSA9PSB0cnVlKSB7XG5cdC8vIFx0XHRpZiAodGhpcy5BRERfT1JfQ1VUU1BBQ0VfVE9HR0xFID09IFwiQUREXCIpIHtcblx0Ly8gXHRcdFx0aWYgKFxuXHQvLyBcdFx0XHRcdHRoaXMuYWRkSXRlbUFsbG93Q2hlY2soXG5cdC8vIFx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLmFkZFBvc2l0aW9uWCxcblx0Ly8gXHRcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuYWRkUG9zaXRpb25ZLFxuXHQvLyBcdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5uZXdXaWR0aCxcblx0Ly8gXHRcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEubmV3SGVpZ2h0XG5cdC8vIFx0XHRcdFx0KVxuXHQvLyBcdFx0XHQpIHtcblx0Ly8gXHRcdFx0XHR2YXIgaXRlbSA9IHtcblx0Ly8gXHRcdFx0XHRcdHg6IHRoaXMudXNlckFjdGlvbkRhdGEuYWRkUG9zaXRpb25YLFxuXHQvLyBcdFx0XHRcdFx0eTogdGhpcy51c2VyQWN0aW9uRGF0YS5hZGRQb3NpdGlvblksXG5cdC8vIFx0XHRcdFx0XHR3aWR0aDogdGhpcy51c2VyQWN0aW9uRGF0YS5uZXdXaWR0aCxcblx0Ly8gXHRcdFx0XHRcdGhlaWdodDogdGhpcy51c2VyQWN0aW9uRGF0YS5uZXdIZWlnaHRcblx0Ly8gXHRcdFx0XHR9O1xuXG5cdC8vIFx0XHRcdFx0dmFyIHNjcm9sbFRvcCA9IHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLnNjcm9sbFRvcDtcblxuXHQvLyBcdFx0XHRcdHZhciByZW5kZXJEZXRhaWxzID0gdGhpcy5hZGRJdGVtc0F0UG9zaXRpb25zKFxuXHQvLyBcdFx0XHRcdFx0W2l0ZW1dLFxuXHQvLyBcdFx0XHRcdFx0ZmFsc2UsXG5cdC8vIFx0XHRcdFx0XHRcImFkZEl0ZW1JbnRlcmFjdGl2ZVwiXG5cdC8vIFx0XHRcdFx0KTtcblx0Ly8gXHRcdFx0XHRpdGVtQWRkZWRGbGFnID0gdHJ1ZTtcblxuXHQvLyBcdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLnNjcm9sbFRvcCA9IHNjcm9sbFRvcDtcblxuXHQvLyBcdFx0XHRcdHRoaXMubGltYmVyR3JpZFRvdWNoU3RhcnRUaW1lckNvbXBsZXRlID0gZmFsc2U7XG5cdC8vIFx0XHRcdH1cblx0Ly8gXHRcdH0gZWxzZSBpZiAodGhpcy5BRERfT1JfQ1VUU1BBQ0VfVE9HR0xFID09IFwiQ1VUU1BBQ0VcIikge1xuXHQvLyBcdFx0XHRpZiAoXG5cdC8vIFx0XHRcdFx0dGhpcy5jdXRTcGFjZUFsbG93Q2hlY2soXG5cdC8vIFx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLmFkZFBvc2l0aW9uWCxcblx0Ly8gXHRcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuYWRkUG9zaXRpb25ZLFxuXHQvLyBcdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5uZXdXaWR0aCxcblx0Ly8gXHRcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEubmV3SGVpZ2h0XG5cdC8vIFx0XHRcdFx0KVxuXHQvLyBcdFx0XHQpIHtcblx0Ly8gXHRcdFx0XHR0aGlzLnNoaWZ0SXRlbXNVcChcblx0Ly8gXHRcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuYWRkUG9zaXRpb25ZLFxuXHQvLyBcdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5uZXdIZWlnaHRcblx0Ly8gXHRcdFx0XHQpO1xuXHQvLyBcdFx0XHR9XG5cdC8vIFx0XHR9XG5cdC8vIFx0fSBlbHNlIHtcblx0Ly8gXHRcdHRoaXMubGltYmVyR3JpZFRvdWNoU3RhcnRDYW5jZWwgPSB0cnVlO1xuXHQvLyBcdH1cblx0Ly8gXHR0aGlzLmxpbWJlckdyaWRUb3VjaFN0YXJ0VGltZXJDb21wbGV0ZSA9IGZhbHNlO1xuXHQvLyBcdHRoaXMub25MaW1iZXJHcmlkQ29udGV4dE1lbnUoKTtcblx0Ly8gXHR0aGlzLmluaXRpYWxpemVJdGVtVG91Y2hFdmVudHMoKTtcblxuXHQvLyBcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdC8vIFx0aWYgKFxuXHQvLyBcdFx0dGhpcy5jYWxsYmFja3MuYWRkQ29tcGxldGVDYWxsYmFjayAhPSB1bmRlZmluZWQgJiZcblx0Ly8gXHRcdHRoaXMuY2FsbGJhY2tzLmFkZENvbXBsZXRlQ2FsbGJhY2sgIT0gbnVsbFxuXHQvLyBcdCkge1xuXHQvLyBcdFx0aWYgKGl0ZW1BZGRlZEZsYWcgPT0gdHJ1ZSkge1xuXHQvLyBcdFx0XHR0aGlzLmNhbGxiYWNrcy5hZGRDb21wbGV0ZUNhbGxiYWNrKFxuXHQvLyBcdFx0XHRcdHJlbmRlckRldGFpbHMuaXRlbXMsXG5cdC8vIFx0XHRcdFx0aXRlbS53aWR0aCxcblx0Ly8gXHRcdFx0XHRpdGVtLmhlaWdodCxcblx0Ly8gXHRcdFx0XHRcImFkZEl0ZW1JbnRlcmFjdGl2ZVwiXG5cdC8vIFx0XHRcdCk7XG5cdC8vIFx0XHR9XG5cdC8vIFx0fVxuXHQvLyB9O1xuXG5cdC8vIExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5vbkxpbWJlckdyaWRUb3VjaENhbmNlbCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdC8vIFx0Y2xlYXJUaW1lb3V0KHRoaXMuYWRkSXRlbUFsbG93Q2hlY2tUaW1lT3V0VmFyaWFibGUpO1xuXHQvLyBcdGNsZWFyVGltZW91dCh0aGlzLmxpbWJlckdyaWRUb3VjaFN0YXJ0Q2hlY2tUaW1lT3V0VmFyaWFibGUpO1xuXHQvLyBcdHRoaXMubGltYmVyR3JpZFRvdWNoU3RhcnRDYW5jZWwgPSBmYWxzZTtcblx0Ly8gXHR0aGlzLmxpbWJlckdyaWRUb3VjaFN0YXJ0VGltZXJDb21wbGV0ZSA9IGZhbHNlO1xuXHQvLyBcdHRoaXMub25MaW1iZXJHcmlkQ29udGV4dE1lbnUoKTtcblx0Ly8gXHR0aGlzLmluaXRpYWxpemVJdGVtVG91Y2hFdmVudHMoKTtcblxuXHQvLyBcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHQvLyB9O1xuXG5cdC8vIExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5vbkxpbWJlckdyaWRUb3VjaENvbnRleHRNZW51ID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0Ly8gXHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHQvLyB9O1xuXG5cdC8vIExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5vbkxpbWJlckdyaWRDb250ZXh0TWVudSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdC8vIFx0aWYgKGV2ZW50ICE9IHVuZGVmaW5lZCkge1xuXHQvLyBcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0Ly8gXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHQvLyBcdH1cblxuXHQvLyBcdHRoaXMuJGxpbWJlckdyaWRWaWV3QWRkSXRlbUd1aWRlWzBdLmNsYXNzTGlzdC5yZW1vdmUoXG5cdC8vIFx0XHRcImxpbWJlckdyaWRWaWV3QWRkSXRlbUd1aWRlQWN0aXZlXCIsXG5cdC8vIFx0XHRcImxpbWJlckdyaWRWaWV3QWRkSXRlbUd1aWRlQ3V0TW9kZVwiLFxuXHQvLyBcdFx0XCJsaW1iZXJHcmlkVmlld0FkZEl0ZW1HdWlkZUFkZEFsbG93XCIsXG5cdC8vIFx0XHRcImxpbWJlckdyaWRWaWV3QWRkSXRlbUd1aWRlQWRkRGlzYWxsb3dcIlxuXHQvLyBcdCk7XG5cdC8vIFx0dGhpcy4kbGltYmVyR3JpZFZpZXdIZWlnaHRBZGp1c3RHdWlkZVswXS5jbGFzc0xpc3QucmVtb3ZlKFxuXHQvLyBcdFx0XCJsaW1iZXJHcmlkVmlld0hlaWdodEFkanVzdEd1aWRlQWN0aXZlXCJcblx0Ly8gXHQpO1xuXHQvLyBcdHRoaXMuJGxpbWJlckdyaWRWaWV3SGVpZ2h0QWRqdXN0R3VpZGVbMF0uc3R5bGUuaGVpZ2h0ID0gMCArIFwicHhcIjtcblxuXHQvLyBcdHRoaXMuJGJvZHlbMF0uY2xhc3NMaXN0LnJlbW92ZShcblx0Ly8gXHRcdFwibGltYmVyR3JpZFZpZXdCb2R5VGFnU3RhdGVFbGVtZW50RHJhZ2dpbmdPclJlc2l6aW5nXCIsXG5cdC8vIFx0XHRcImxpbWJlckdyaWRWaWV3Qm9keVRhZ1N0YXRlRWxlbWVudEFkZGluZ1wiXG5cdC8vIFx0KTtcblx0Ly8gXHR2YXIgbGVuZ3RoXzAgPSB0aGlzLiRsaW1iZXJHcmlkVmlld0l0ZW1zLmxlbmd0aDtcblx0Ly8gXHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF8wOyBpKyspIHtcblx0Ly8gXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3SXRlbXNbaV0uY2xhc3NMaXN0LnJlbW92ZShcblx0Ly8gXHRcdFx0XCJsaW1iZXJHcmlkVmlld0l0ZW1SZXNpemluZ1N0YXRlXCJcblx0Ly8gXHRcdCk7XG5cdC8vIFx0fVxuXG5cdC8vIFx0dmFyIGxlbmd0aF8wID0gdGhpcy4kbGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbXMubGVuZ3RoO1xuXHQvLyBcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHQvLyBcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbXNbaV0uY2xhc3NMaXN0LnJlbW92ZShcblx0Ly8gXHRcdFx0XCJsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtUmVzaXppbmdTdGF0ZVwiXG5cdC8vIFx0XHQpO1xuXHQvLyBcdH1cblxuXHQvLyBcdHRoaXMuJGxpbWJlckdyaWRWaWV3QWRkSXRlbU9uVG91Y2hIb2xkR3VpZGVbMF0uY2xhc3NMaXN0LnJlbW92ZShcblx0Ly8gXHRcdFwibGltYmVyR3JpZFZpZXdBZGRJdGVtT25Ub3VjaEhvbGRHdWlkZUFjdGl2ZVwiXG5cdC8vIFx0KTtcblxuXHQvLyBcdHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoXG5cdC8vIFx0XHRcIm1vdXNlbW92ZVwiLFxuXHQvLyBcdFx0dGhpcy5vbkxpbWJlckdyaWRNb3VzZU1vdmVCaW5kZWRGdW5jdGlvblZhcmlhYmxlXG5cdC8vIFx0KTtcblx0Ly8gXHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuXHQvLyBcdFx0XCJtb3VzZXVwXCIsXG5cdC8vIFx0XHR0aGlzLm9uTGltYmVyR3JpZE1vdXNlVXBCaW5kZWRGdW5jdGlvblZhcmlhYmxlXG5cdC8vIFx0KTtcblx0Ly8gXHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuXHQvLyBcdFx0XCJjb250ZXh0bWVudVwiLFxuXHQvLyBcdFx0dGhpcy5vbkxpbWJlckdyaWRDb250ZXh0TWVudUJpbmRlZEZ1bmN0aW9uVmFyaWFibGVcblx0Ly8gXHQpO1xuXG5cdC8vIFx0dGhpcy4kbGltYmVyR3JpZFZpZXdbMF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0Ly8gXHRcdFwidG91Y2htb3ZlXCIsXG5cdC8vIFx0XHR0aGlzLm9uTGltYmVyR3JpZFRvdWNoTW92ZUJpbmRlZEZ1bmN0aW9uVmFyaWFibGVcblx0Ly8gXHQpO1xuXHQvLyBcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG5cdC8vIFx0XHRcInRvdWNoZW5kXCIsXG5cdC8vIFx0XHR0aGlzLm9uTGltYmVyR3JpZFRvdWNoRW5kQmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHQvLyBcdCk7XG5cdC8vIFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0Ly8gXHRcdFwidG91Y2hjYW5jZWxcIixcblx0Ly8gXHRcdHRoaXMub25MaW1iZXJHcmlkVG91Y2hDYW5jZWxCaW5kZWRGdW5jdGlvblZhcmlhYmxlXG5cdC8vIFx0KTtcblx0Ly8gXHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuXHQvLyBcdFx0XCJjb250ZXh0bWVudVwiLFxuXHQvLyBcdFx0dGhpcy5vbkxpbWJlckdyaWRUb3VjaENvbnRleHRNZW51QmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHQvLyBcdCk7XG5cdC8vIH07XG5cblx0Ly8gTGltYmVyR3JpZFZpZXcucHJvdG90eXBlLmFkZEl0ZW1BbGxvd0NoZWNrVGltZU91dCA9IGZ1bmN0aW9uKFxuXHQvLyBcdHgsXG5cdC8vIFx0eSxcblx0Ly8gXHR3aWR0aCxcblx0Ly8gXHRoZWlnaHRcblx0Ly8gKSB7XG5cdC8vIFx0aWYgKHRoaXMuYWRkSXRlbUFsbG93Q2hlY2soeCwgeSwgd2lkdGgsIGhlaWdodCkgPT0gZmFsc2UpIHtcblx0Ly8gXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3QWRkSXRlbUd1aWRlWzBdLmNsYXNzTGlzdC5yZW1vdmUoXG5cdC8vIFx0XHRcdFwibGltYmVyR3JpZFZpZXdBZGRJdGVtR3VpZGVBZGRBbGxvd1wiXG5cdC8vIFx0XHQpO1xuXHQvLyBcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdBZGRJdGVtR3VpZGVbMF0uY2xhc3NMaXN0LmFkZChcblx0Ly8gXHRcdFx0XCJsaW1iZXJHcmlkVmlld0FkZEl0ZW1HdWlkZUFkZERpc2FsbG93XCJcblx0Ly8gXHRcdCk7XG5cdC8vIFx0fSBlbHNlIHtcblx0Ly8gXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3QWRkSXRlbUd1aWRlWzBdLmNsYXNzTGlzdC5yZW1vdmUoXG5cdC8vIFx0XHRcdFwibGltYmVyR3JpZFZpZXdBZGRJdGVtR3VpZGVBZGREaXNhbGxvd1wiXG5cdC8vIFx0XHQpO1xuXHQvLyBcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdBZGRJdGVtR3VpZGVbMF0uY2xhc3NMaXN0LmFkZChcblx0Ly8gXHRcdFx0XCJsaW1iZXJHcmlkVmlld0FkZEl0ZW1HdWlkZUFkZEFsbG93XCJcblx0Ly8gXHRcdCk7XG5cdC8vIFx0fVxuXHQvLyB9O1xuXG5cdC8vIExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5hZGRJdGVtQWxsb3dDaGVjayA9IGZ1bmN0aW9uKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcblx0Ly8gXHR2YXIgdGVtcFBsYW5lID0ge1xuXHQvLyBcdFx0eDogeCxcblx0Ly8gXHRcdHk6IHksXG5cdC8vIFx0XHR3aWR0aDogd2lkdGgsXG5cdC8vIFx0XHRoZWlnaHQ6IGhlaWdodFxuXHQvLyBcdH07XG5cblx0Ly8gXHRpZiAoeCA8IDAgfHwgeSA8IDApIHtcblx0Ly8gXHRcdHJldHVybiBmYWxzZTtcblx0Ly8gXHR9XG5cblx0Ly8gXHRpZiAodHlwZW9mIHdpZHRoICE9IFwibnVtYmVyXCIgfHwgdHlwZW9mIGhlaWdodCAhPSBcIm51bWJlclwiKSB7XG5cdC8vIFx0XHRyZXR1cm4gZmFsc2U7XG5cdC8vIFx0fVxuXG5cdC8vIFx0aWYgKHggKyB3aWR0aCA+IHRoaXMuV0lEVEgpIHtcblx0Ly8gXHRcdHJldHVybiBmYWxzZTtcblx0Ly8gXHR9XG5cblx0Ly8gXHRpZiAod2lkdGggPCA1MCB8fCBoZWlnaHQgPCA1MCkge1xuXHQvLyBcdFx0cmV0dXJuIGZhbHNlO1xuXHQvLyBcdH1cblxuXHQvLyBcdHZhciBsZW5ndGhfMCA9IHRoaXMucG9zaXRpb25EYXRhLmxlbmd0aDtcblx0Ly8gXHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF8wOyBpKyspIHtcblx0Ly8gXHRcdHZhciBpdGVySXRlbSA9IHtcblx0Ly8gXHRcdFx0eDpcblx0Ly8gXHRcdFx0XHR0aGlzLnBvc2l0aW9uRGF0YVtpXS54IC1cblx0Ly8gXHRcdFx0XHR0aGlzLmdldE1hcmdpbkF0UG9pbnQodGhpcy5wb3NpdGlvbkRhdGFbaV0ueCksXG5cdC8vIFx0XHRcdHk6XG5cdC8vIFx0XHRcdFx0dGhpcy5wb3NpdGlvbkRhdGFbaV0ueSAtXG5cdC8vIFx0XHRcdFx0dGhpcy5nZXRNYXJnaW5BdFBvaW50KHRoaXMucG9zaXRpb25EYXRhW2ldLnkpLFxuXHQvLyBcdFx0XHR3aWR0aDpcblx0Ly8gXHRcdFx0XHR0aGlzLnBvc2l0aW9uRGF0YVtpXS53aWR0aCArXG5cdC8vIFx0XHRcdFx0dGhpcy5nZXRNYXJnaW5BdFBvaW50KHRoaXMucG9zaXRpb25EYXRhW2ldLngpICtcblx0Ly8gXHRcdFx0XHR0aGlzLk1BUkdJTixcblx0Ly8gXHRcdFx0aGVpZ2h0OlxuXHQvLyBcdFx0XHRcdHRoaXMucG9zaXRpb25EYXRhW2ldLmhlaWdodCArXG5cdC8vIFx0XHRcdFx0dGhpcy5nZXRNYXJnaW5BdFBvaW50KHRoaXMucG9zaXRpb25EYXRhW2ldLnkpICtcblx0Ly8gXHRcdFx0XHR0aGlzLk1BUkdJTlxuXHQvLyBcdFx0fTtcblx0Ly8gXHRcdHZhciBpc0luc2lkZSA9IHRoaXMuaXNQbGFuZUJJbnNpZGVQbGFuZUFfVG91Y2hpbmdJc0luc2lkZShcblx0Ly8gXHRcdFx0aXRlckl0ZW0sXG5cdC8vIFx0XHRcdHRlbXBQbGFuZVxuXHQvLyBcdFx0KTtcblxuXHQvLyBcdFx0aWYgKGlzSW5zaWRlKSB7XG5cdC8vIFx0XHRcdHJldHVybiBmYWxzZTtcblx0Ly8gXHRcdH1cblx0Ly8gXHR9XG5cdC8vIFx0cmV0dXJuIHRydWU7XG5cdC8vIH07XG5cblx0Ly8gTGltYmVyR3JpZFZpZXcucHJvdG90eXBlLmN1dFNwYWNlQWxsb3dDaGVja1RpbWVPdXQgPSBmdW5jdGlvbihcblx0Ly8gXHR4LFxuXHQvLyBcdHksXG5cdC8vIFx0d2lkdGgsXG5cdC8vIFx0aGVpZ2h0XG5cdC8vICkge1xuXHQvLyBcdGlmICh0aGlzLmN1dFNwYWNlQWxsb3dDaGVjayh4LCB5LCB3aWR0aCwgaGVpZ2h0KSA9PSBmYWxzZSkge1xuXHQvLyBcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdBZGRJdGVtR3VpZGVbMF0uY2xhc3NMaXN0LnJlbW92ZShcblx0Ly8gXHRcdFx0XCJsaW1iZXJHcmlkVmlld0FkZEl0ZW1HdWlkZUFkZEFsbG93XCJcblx0Ly8gXHRcdCk7XG5cdC8vIFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0FkZEl0ZW1HdWlkZVswXS5jbGFzc0xpc3QuYWRkKFxuXHQvLyBcdFx0XHRcImxpbWJlckdyaWRWaWV3QWRkSXRlbUd1aWRlQWRkRGlzYWxsb3dcIlxuXHQvLyBcdFx0KTtcblx0Ly8gXHR9IGVsc2Uge1xuXHQvLyBcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdBZGRJdGVtR3VpZGVbMF0uY2xhc3NMaXN0LnJlbW92ZShcblx0Ly8gXHRcdFx0XCJsaW1iZXJHcmlkVmlld0FkZEl0ZW1HdWlkZUFkZERpc2FsbG93XCJcblx0Ly8gXHRcdCk7XG5cdC8vIFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0FkZEl0ZW1HdWlkZVswXS5jbGFzc0xpc3QuYWRkKFxuXHQvLyBcdFx0XHRcImxpbWJlckdyaWRWaWV3QWRkSXRlbUd1aWRlQWRkQWxsb3dcIlxuXHQvLyBcdFx0KTtcblx0Ly8gXHR9XG5cdC8vIH07XG5cblx0Ly8gTGltYmVyR3JpZFZpZXcucHJvdG90eXBlLmN1dFNwYWNlQWxsb3dDaGVjayA9IGZ1bmN0aW9uKFxuXHQvLyBcdHgsXG5cdC8vIFx0eSxcblx0Ly8gXHR3aWR0aCxcblx0Ly8gXHRoZWlnaHRcblx0Ly8gKSB7XG5cdC8vIFx0dmFyIHRlbXBQbGFuZSA9IHtcblx0Ly8gXHRcdHg6IDAsXG5cdC8vIFx0XHR5OiB5IC0gdGhpcy5NQVJHSU4gLyAyLFxuXHQvLyBcdFx0d2lkdGg6IHRoaXMuV0lEVEgsXG5cdC8vIFx0XHRoZWlnaHQ6IGhlaWdodCArIHRoaXMuTUFSR0lOIC8gMlxuXHQvLyBcdH07XG5cblx0Ly8gXHRpZiAodHlwZW9mIHdpZHRoICE9IFwibnVtYmVyXCIgfHwgdHlwZW9mIGhlaWdodCAhPSBcIm51bWJlclwiKSB7XG5cdC8vIFx0XHRyZXR1cm4gZmFsc2U7XG5cdC8vIFx0fVxuXG5cdC8vIFx0dmFyIGxlbmd0aF8wID0gdGhpcy5wb3NpdGlvbkRhdGEubGVuZ3RoO1xuXHQvLyBcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHQvLyBcdFx0dmFyIGlzSW5zaWRlID0gdGhpcy5pc1BsYW5lQkluc2lkZVBsYW5lQV9Ub3VjaGluZ0lzSW5zaWRlKFxuXHQvLyBcdFx0XHR0ZW1wUGxhbmUsXG5cdC8vIFx0XHRcdHRoaXMucG9zaXRpb25EYXRhW2ldXG5cdC8vIFx0XHQpO1xuXG5cdC8vIFx0XHRpZiAoaXNJbnNpZGUpIHtcblx0Ly8gXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHQvLyBcdFx0fVxuXHQvLyBcdH1cblx0Ly8gXHRyZXR1cm4gdHJ1ZTtcblx0Ly8gfTtcblxuXHQvLyBMaW1iZXJHcmlkVmlldy5wcm90b3R5cGUuaW5zZXJ0QWRkSXRlbU9uVG91Y2hIb2xkR3VpZGVTdHlsZXMgPSBmdW5jdGlvbihcblx0Ly8gXHR4LFxuXHQvLyBcdHlcblx0Ly8gKSB7XG5cdC8vIFx0dmFyIHJpcHBsZSA9IFtdO1xuXHQvLyBcdHJpcHBsZVswXSA9IFwiQGtleWZyYW1lcyBsaW1iZXJHcmlkVmlld0FkZEl0ZW1PblRvdWNoSG9sZFJpcHBsZSB7XCI7XG5cdC8vIFx0cmlwcGxlWzFdID0gXCIwJSB7XCI7XG5cdC8vIFx0cmlwcGxlWzJdID1cblx0Ly8gXHRcdFwidHJhbnNmb3JtOiB0cmFuc2xhdGUoXCIgK1xuXHQvLyBcdFx0KHggLSA1KSArXG5cdC8vIFx0XHRcInB4LCBcIiArXG5cdC8vIFx0XHQoeSAtIDUpICtcblx0Ly8gXHRcdFwicHgpIHNjYWxlKDAsIDApO1wiO1xuXHQvLyBcdHJpcHBsZVszXSA9IFwib3BhY2l0eTogMTtcIjtcblx0Ly8gXHRyaXBwbGVbNF0gPSBcIn1cIjtcblx0Ly8gXHRyaXBwbGVbNV0gPSBcIjIwJSB7XCI7XG5cdC8vIFx0cmlwcGxlWzZdID1cblx0Ly8gXHRcdFwidHJhbnNmb3JtOiB0cmFuc2xhdGUoXCIgK1xuXHQvLyBcdFx0KHggLSA1KSArXG5cdC8vIFx0XHRcInB4LCBcIiArXG5cdC8vIFx0XHQoeSAtIDUpICtcblx0Ly8gXHRcdFwicHgpIHNjYWxlKDI1LCAyNSk7XCI7XG5cdC8vIFx0cmlwcGxlWzddID0gXCJvcGFjaXR5OiAxO1wiO1xuXHQvLyBcdHJpcHBsZVs4XSA9IFwifVwiO1xuXHQvLyBcdHJpcHBsZVs5XSA9IFwiMTAwJSB7XCI7XG5cdC8vIFx0cmlwcGxlWzEwXSA9XG5cdC8vIFx0XHRcInRyYW5zZm9ybTogdHJhbnNsYXRlKFwiICtcblx0Ly8gXHRcdCh4IC0gNSkgK1xuXHQvLyBcdFx0XCJweCwgXCIgK1xuXHQvLyBcdFx0KHkgLSA1KSArXG5cdC8vIFx0XHRcInB4KSBzY2FsZSg1MCwgNTApO1wiO1xuXHQvLyBcdHJpcHBsZVsxMV0gPSBcIm9wYWNpdHk6IDA7XCI7XG5cdC8vIFx0cmlwcGxlWzEyXSA9IFwifVwiO1xuXHQvLyBcdHJpcHBsZVsxM10gPSBcIn1cIjtcblx0Ly8gXHR2YXIgcmlwcGxlU3RyaW5nID0gcmlwcGxlLmpvaW4oXCJcIik7XG5cdC8vIFx0dGhpcy4kbGltYmVyR3JpZFZpZXdTdHlsZVswXS5pbm5lckhUTUwgPSByaXBwbGVTdHJpbmc7XG5cdC8vIH07XG5cblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tIEVWRU5UIEhBTkRMRVJTIEZPUiBBRERJTkcgQU5EIENVVFRJTkcgU1BBQ0UgSVRFTSBFTkQgLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gRVZFTlQgSEFORExFUlMgQU5EIENPREUgRk9SIElURU0gSU5URVJBQ1RJT04gLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cblx0Ly8gTGltYmVyR3JpZFZpZXcucHJvdG90eXBlLm9uSXRlbU1vdXNlRG93biA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdC8vIFx0aWYgKGV2ZW50LndoaWNoICE9IDEpIHtcblx0Ly8gXHRcdHJldHVybjtcblx0Ly8gXHR9XG5cblx0Ly8gXHRpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImxpbWJlckdyaWRWaWV3SXRlbVwiKSkge1xuXHQvLyBcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdC8vIFx0fSBlbHNlIHtcblx0Ly8gXHRcdHJldHVybjtcblx0Ly8gXHR9XG5cblx0Ly8gXHR2YXIgcmFkaXVzID0gTWF0aC5zcXJ0KFxuXHQvLyBcdFx0TWF0aC5wb3coMCAtIGV2ZW50Lm9mZnNldFgsIDIpICsgTWF0aC5wb3coMCAtIGV2ZW50Lm9mZnNldFksIDIpXG5cdC8vIFx0KTtcblx0Ly8gXHR2YXIgcmVzaXplVUlCb3ggPSB7XG5cdC8vIFx0XHR4OlxuXHQvLyBcdFx0XHRldmVudC5jdXJyZW50VGFyZ2V0Lm9mZnNldFdpZHRoIC1cblx0Ly8gXHRcdFx0dGhpcy5SRVNJWkVfU1FVQVJFX0dVSURFX0xFTkdUSCxcblx0Ly8gXHRcdHk6XG5cdC8vIFx0XHRcdGV2ZW50LmN1cnJlbnRUYXJnZXQub2Zmc2V0SGVpZ2h0IC1cblx0Ly8gXHRcdFx0dGhpcy5SRVNJWkVfU1FVQVJFX0dVSURFX0xFTkdUSCxcblx0Ly8gXHRcdHdpZHRoOlxuXHQvLyBcdFx0XHR0aGlzLlJFU0laRV9TUVVBUkVfR1VJREVfTEVOR1RIICtcblx0Ly8gXHRcdFx0dGhpcy5SRVNJWkVfU1FVQVJFX0JPUkRFUl9HVUlERV9XSURUSCxcblx0Ly8gXHRcdGhlaWdodDpcblx0Ly8gXHRcdFx0dGhpcy5SRVNJWkVfU1FVQVJFX0dVSURFX0xFTkdUSCArXG5cdC8vIFx0XHRcdHRoaXMuUkVTSVpFX1NRVUFSRV9CT1JERVJfR1VJREVfV0lEVEhcblx0Ly8gXHR9O1xuXG5cdC8vIFx0aWYgKHJhZGl1cyA8PSB0aGlzLk1PVkVfR1VJREVfUkFESVVTKSB7XG5cdC8vIFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhID0ge1xuXHQvLyBcdFx0XHR0eXBlOiBcIm1vdmVcIixcblx0Ly8gXHRcdFx0aXRlbUluZGV4OiBldmVudC5jdXJyZW50VGFyZ2V0LmF0dHJpYnV0ZXNbXCJkYXRhLWluZGV4XCJdLnZhbHVlXG5cdC8vIFx0XHR9O1xuXHQvLyBcdFx0dGhpcy5tb3VzZURvd25DYW5jZWwgPSBmYWxzZTtcblx0Ly8gXHRcdHRoaXMubW91c2VEb3duVGltZXJDb21wbGV0ZSA9IGZhbHNlO1xuXG5cdC8vIFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuXHQvLyBcdFx0XHRcIm1vdXNlbW92ZVwiLFxuXHQvLyBcdFx0XHR0aGlzLm9uTW91c2VNb3ZlQmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHQvLyBcdFx0KTtcblx0Ly8gXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG5cdC8vIFx0XHRcdFwibW91c2V1cFwiLFxuXHQvLyBcdFx0XHR0aGlzLm9uTW91c2VVcEJpbmRlZEZ1bmN0aW9uVmFyaWFibGVcblx0Ly8gXHRcdCk7XG5cdC8vIFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuXHQvLyBcdFx0XHRcImNvbnRleHRtZW51XCIsXG5cdC8vIFx0XHRcdHRoaXMub25Db250ZXh0TWVudUJpbmRlZEZ1bmN0aW9uVmFyaWFibGVcblx0Ly8gXHRcdCk7XG5cdC8vIFx0XHRjbGVhclRpbWVvdXQodGhpcy5sb25nUHJlc3NDaGVjayk7XG5cdC8vIFx0XHR0aGlzLmxvbmdQcmVzc0NoZWNrID0gc2V0VGltZW91dChcblx0Ly8gXHRcdFx0dGhpcy5tb3VzZURvd25DaGVjay5iaW5kKHRoaXMsIGV2ZW50KSxcblx0Ly8gXHRcdFx0dGhpcy5NT1VTRV9ET1dOX1RJTUVcblx0Ly8gXHRcdCk7XG5cblx0Ly8gXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdC8vIFx0fSBlbHNlIGlmIChcblx0Ly8gXHRcdGV2ZW50Lm9mZnNldFggPj0gcmVzaXplVUlCb3gueCAmJlxuXHQvLyBcdFx0ZXZlbnQub2Zmc2V0WCA8PSByZXNpemVVSUJveC54ICsgcmVzaXplVUlCb3gud2lkdGggJiZcblx0Ly8gXHRcdGV2ZW50Lm9mZnNldFkgPj0gcmVzaXplVUlCb3gueSAmJlxuXHQvLyBcdFx0ZXZlbnQub2Zmc2V0WSA8PSByZXNpemVVSUJveC55ICsgcmVzaXplVUlCb3guaGVpZ2h0XG5cdC8vIFx0KSB7XG5cdC8vIFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0hlaWdodEFkanVzdEd1aWRlWzBdLnN0eWxlLmhlaWdodCA9IDAgKyBcInB4XCI7XG5cdC8vIFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0hlaWdodEFkanVzdEd1aWRlWzBdLmNsYXNzTGlzdC5hZGQoXG5cdC8vIFx0XHRcdFwibGltYmVyR3JpZFZpZXdIZWlnaHRBZGp1c3RHdWlkZUFjdGl2ZVwiXG5cdC8vIFx0XHQpO1xuXG5cdC8vIFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhID0ge1xuXHQvLyBcdFx0XHR0eXBlOiBcInJlc2l6ZVwiLFxuXHQvLyBcdFx0XHRpdGVtSW5kZXg6IGV2ZW50LmN1cnJlbnRUYXJnZXQuYXR0cmlidXRlc1tcImRhdGEtaW5kZXhcIl0udmFsdWVcblx0Ly8gXHRcdH07XG5cdC8vIFx0XHR0aGlzLm1vdXNlRG93bkNhbmNlbCA9IGZhbHNlO1xuXHQvLyBcdFx0dGhpcy5tb3VzZURvd25UaW1lckNvbXBsZXRlID0gdHJ1ZTtcblxuXHQvLyBcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdbMF0uYWRkRXZlbnRMaXN0ZW5lcihcblx0Ly8gXHRcdFx0XCJtb3VzZW1vdmVcIixcblx0Ly8gXHRcdFx0dGhpcy5vbk1vdXNlTW92ZUJpbmRlZEZ1bmN0aW9uVmFyaWFibGVcblx0Ly8gXHRcdCk7XG5cdC8vIFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuXHQvLyBcdFx0XHRcIm1vdXNldXBcIixcblx0Ly8gXHRcdFx0dGhpcy5vbk1vdXNlVXBCaW5kZWRGdW5jdGlvblZhcmlhYmxlXG5cdC8vIFx0XHQpO1xuXHQvLyBcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcblx0Ly8gXHRcdFx0XCJjb250ZXh0bWVudVwiLFxuXHQvLyBcdFx0XHR0aGlzLm9uQ29udGV4dE1lbnVCaW5kZWRGdW5jdGlvblZhcmlhYmxlXG5cdC8vIFx0XHQpO1xuXG5cdC8vIFx0XHR2YXIgdHJhbnNmb3JtU3R5bGUgPSB0aGlzLiRsaW1iZXJHcmlkVmlld0l0ZW1zW1xuXHQvLyBcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleFxuXHQvLyBcdFx0XS5zdHlsZS50cmFuc2Zvcm07XG5cdC8vIFx0XHR2YXIgaTEgPSB0cmFuc2Zvcm1TdHlsZS5pbmRleE9mKFwicHhcIik7XG5cdC8vIFx0XHR2YXIgaTIgPSB0cmFuc2Zvcm1TdHlsZS5pbmRleE9mKFwiLFwiKTtcblx0Ly8gXHRcdHZhciB4ID0gTnVtYmVyKHRyYW5zZm9ybVN0eWxlLnN1YnN0cmluZygxMCwgaTEpKTtcblx0Ly8gXHRcdHZhciB5ID0gTnVtYmVyKFxuXHQvLyBcdFx0XHR0cmFuc2Zvcm1TdHlsZS5zdWJzdHJpbmcoaTIgKyAyLCB0cmFuc2Zvcm1TdHlsZS5sZW5ndGggLSAzKVxuXHQvLyBcdFx0KTtcblxuXHQvLyBcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtUG9zaXRpb25YID0geDtcblx0Ly8gXHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbVBvc2l0aW9uWSA9IHk7XG5cblx0Ly8gXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1zW1xuXHQvLyBcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleFxuXHQvLyBcdFx0XS5zdHlsZS53aWR0aCA9XG5cdC8vIFx0XHRcdHRoaXMucG9zaXRpb25EYXRhW3RoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4XS53aWR0aCArIFwicHhcIjtcblx0Ly8gXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1zW1xuXHQvLyBcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleFxuXHQvLyBcdFx0XS5zdHlsZS5oZWlnaHQgPVxuXHQvLyBcdFx0XHR0aGlzLnBvc2l0aW9uRGF0YVt0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleF0uaGVpZ2h0ICsgXCJweFwiO1xuXG5cdC8vIFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtc1tcblx0Ly8gXHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhcblx0Ly8gXHRcdF0uc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUoXCIgKyB4ICsgXCJweCwgXCIgKyB5ICsgXCJweClcIjtcblx0Ly8gXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1zW1xuXHQvLyBcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleFxuXHQvLyBcdFx0XS5jbGFzc0xpc3QuYWRkKFwibGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbUFjdGl2ZVwiKTtcblxuXHQvLyBcdFx0dGhpcy4kYm9keVswXS5jbGFzc0xpc3QuYWRkKFxuXHQvLyBcdFx0XHRcImxpbWJlckdyaWRWaWV3Qm9keVRhZ1N0YXRlRWxlbWVudERyYWdnaW5nT3JSZXNpemluZ1wiXG5cdC8vIFx0XHQpO1xuXHQvLyBcdFx0dmFyIGxlbmd0aF8wID0gdGhpcy4kbGltYmVyR3JpZFZpZXdJdGVtcy5sZW5ndGg7XG5cdC8vIFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF8wOyBpKyspIHtcblx0Ly8gXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdJdGVtc1tpXS5jbGFzc0xpc3QuYWRkKFxuXHQvLyBcdFx0XHRcdFwibGltYmVyR3JpZFZpZXdJdGVtUmVzaXppbmdTdGF0ZVwiXG5cdC8vIFx0XHRcdCk7XG5cdC8vIFx0XHR9XG5cblx0Ly8gXHRcdHZhciBsZW5ndGhfMCA9IHRoaXMuJGxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1zLmxlbmd0aDtcblx0Ly8gXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHQvLyBcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtc1tpXS5jbGFzc0xpc3QuYWRkKFxuXHQvLyBcdFx0XHRcdFwibGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbVJlc2l6aW5nU3RhdGVcIlxuXHQvLyBcdFx0XHQpO1xuXHQvLyBcdFx0fVxuXG5cdC8vIFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtc1tcblx0Ly8gXHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhcblx0Ly8gXHRcdF0uY2xhc3NMaXN0LnJlbW92ZShcblx0Ly8gXHRcdFx0XCJsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtUmVzaXplQWxsb3dcIixcblx0Ly8gXHRcdFx0XCJsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtUmVzaXplRGlzYWxsb3dcIlxuXHQvLyBcdFx0KTtcblxuXHQvLyBcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0Ly8gXHR9XG5cdC8vIH07XG5cblx0Ly8gTGltYmVyR3JpZFZpZXcucHJvdG90eXBlLm9uSXRlbVRvdWNoU3RhcnQgPSBmdW5jdGlvbihldmVudCkge1xuXHQvLyBcdGlmIChldmVudC53aGljaCAhPSAwKSB7XG5cdC8vIFx0XHRyZXR1cm47XG5cdC8vIFx0fVxuXG5cdC8vIFx0aWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJsaW1iZXJHcmlkVmlld0l0ZW1cIikpIHtcblx0Ly8gXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHQvLyBcdH0gZWxzZSB7XG5cdC8vIFx0XHRyZXR1cm47XG5cdC8vIFx0fVxuXG5cdC8vIFx0aWYgKGV2ZW50LnRvdWNoZXMubGVuZ3RoID4gMSkge1xuXHQvLyBcdFx0cmV0dXJuO1xuXHQvLyBcdH1cblxuXHQvLyBcdHZhciB0b3VjaFBvc09uTGltYmVyR3JpZEl0ZW0gPSB0aGlzLmNhbGN1bGF0ZVRvdWNoUG9zT25MaW1iZXJHcmlkSXRlbShcblx0Ly8gXHRcdGV2ZW50XG5cdC8vIFx0KTtcblx0Ly8gXHRpZiAodG91Y2hQb3NPbkxpbWJlckdyaWRJdGVtID09IGZhbHNlKSB7XG5cdC8vIFx0XHRyZXR1cm47XG5cdC8vIFx0fVxuXHQvLyBcdHZhciByYWRpdXMgPSBNYXRoLnNxcnQoXG5cdC8vIFx0XHRNYXRoLnBvdygwIC0gdG91Y2hQb3NPbkxpbWJlckdyaWRJdGVtLngsIDIpICtcblx0Ly8gXHRcdFx0TWF0aC5wb3coMCAtIHRvdWNoUG9zT25MaW1iZXJHcmlkSXRlbS55LCAyKVxuXHQvLyBcdCk7XG5cdC8vIFx0dmFyIHJlc2l6ZVVJQm94ID0ge1xuXHQvLyBcdFx0eDpcblx0Ly8gXHRcdFx0ZXZlbnQuY3VycmVudFRhcmdldC5vZmZzZXRXaWR0aCAtXG5cdC8vIFx0XHRcdHRoaXMuUkVTSVpFX1NRVUFSRV9HVUlERV9MRU5HVEgsXG5cdC8vIFx0XHR5OlxuXHQvLyBcdFx0XHRldmVudC5jdXJyZW50VGFyZ2V0Lm9mZnNldEhlaWdodCAtXG5cdC8vIFx0XHRcdHRoaXMuUkVTSVpFX1NRVUFSRV9HVUlERV9MRU5HVEgsXG5cdC8vIFx0XHR3aWR0aDpcblx0Ly8gXHRcdFx0dGhpcy5SRVNJWkVfU1FVQVJFX0dVSURFX0xFTkdUSCArXG5cdC8vIFx0XHRcdHRoaXMuUkVTSVpFX1NRVUFSRV9CT1JERVJfR1VJREVfV0lEVEgsXG5cdC8vIFx0XHRoZWlnaHQ6XG5cdC8vIFx0XHRcdHRoaXMuUkVTSVpFX1NRVUFSRV9HVUlERV9MRU5HVEggK1xuXHQvLyBcdFx0XHR0aGlzLlJFU0laRV9TUVVBUkVfQk9SREVSX0dVSURFX1dJRFRIXG5cdC8vIFx0fTtcblxuXHQvLyBcdGlmIChyYWRpdXMgPD0gdGhpcy5NT1ZFX0dVSURFX1JBRElVUykge1xuXHQvLyBcdFx0dGhpcy51c2VyQWN0aW9uRGF0YSA9IHtcblx0Ly8gXHRcdFx0dHlwZTogXCJtb3ZlXCIsXG5cdC8vIFx0XHRcdGl0ZW1JbmRleDogZXZlbnQuY3VycmVudFRhcmdldC5hdHRyaWJ1dGVzW1wiZGF0YS1pbmRleFwiXS52YWx1ZVxuXHQvLyBcdFx0fTtcblx0Ly8gXHRcdHRoaXMudGFwSG9sZENhbmNlbCA9IGZhbHNlO1xuXHQvLyBcdFx0dGhpcy50YXBIb2xkVGltZXJDb21wbGV0ZSA9IGZhbHNlO1xuXG5cdC8vIFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuXHQvLyBcdFx0XHRcInRvdWNobW92ZVwiLFxuXHQvLyBcdFx0XHR0aGlzLm9uVG91Y2hNb3ZlQmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHQvLyBcdFx0KTtcblx0Ly8gXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG5cdC8vIFx0XHRcdFwidG91Y2hlbmRcIixcblx0Ly8gXHRcdFx0dGhpcy5vblRvdWNoRW5kQmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHQvLyBcdFx0KTtcblx0Ly8gXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoXG5cdC8vIFx0XHRcdFwidG91Y2hzdGFydFwiLFxuXHQvLyBcdFx0XHR0aGlzLm9uTGltYmVyR3JpZFRvdWNoU3RhcnRGdW5jdGlvblZhcmlhYmxlXG5cdC8vIFx0XHQpO1xuXG5cdC8vIFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuXHQvLyBcdFx0XHRcImNvbnRleHRtZW51XCIsXG5cdC8vIFx0XHRcdHRoaXMub25JdGVtVG91Y2hDb250ZXh0TWVudUJpbmRlZEZ1bmN0aW9uVmFyaWFibGVcblx0Ly8gXHRcdCk7XG5cdC8vIFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuXHQvLyBcdFx0XHRcInRvdWNoY2FuY2VsXCIsXG5cdC8vIFx0XHRcdHRoaXMub25Ub3VjaENhbmNlbEJpbmRlZEZ1bmN0aW9uVmFyaWFibGVcblx0Ly8gXHRcdCk7XG5cblx0Ly8gXHRcdHRoaXMubG9uZ1RvdWNoQ2hlY2sgPSBzZXRUaW1lb3V0KFxuXHQvLyBcdFx0XHR0aGlzLnRhcEhvbGRDaGVjay5iaW5kKHRoaXMsIGV2ZW50KSxcblx0Ly8gXHRcdFx0dGhpcy5UT1VDSF9IT0xEX1RJTUVcblx0Ly8gXHRcdCk7XG5cblx0Ly8gXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdC8vIFx0fSBlbHNlIGlmIChcblx0Ly8gXHRcdHRvdWNoUG9zT25MaW1iZXJHcmlkSXRlbS54ID49IHJlc2l6ZVVJQm94LnggJiZcblx0Ly8gXHRcdHRvdWNoUG9zT25MaW1iZXJHcmlkSXRlbS54IDw9IHJlc2l6ZVVJQm94LnggKyByZXNpemVVSUJveC53aWR0aCAmJlxuXHQvLyBcdFx0dG91Y2hQb3NPbkxpbWJlckdyaWRJdGVtLnkgPj0gcmVzaXplVUlCb3gueSAmJlxuXHQvLyBcdFx0dG91Y2hQb3NPbkxpbWJlckdyaWRJdGVtLnkgPD0gcmVzaXplVUlCb3gueSArIHJlc2l6ZVVJQm94LmhlaWdodFxuXHQvLyBcdCkge1xuXHQvLyBcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdIZWlnaHRBZGp1c3RHdWlkZVswXS5zdHlsZS5oZWlnaHQgPSAwICsgXCJweFwiO1xuXHQvLyBcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdIZWlnaHRBZGp1c3RHdWlkZVswXS5jbGFzc0xpc3QuYWRkKFxuXHQvLyBcdFx0XHRcImxpbWJlckdyaWRWaWV3SGVpZ2h0QWRqdXN0R3VpZGVBY3RpdmVcIlxuXHQvLyBcdFx0KTtcblxuXHQvLyBcdFx0dGhpcy51c2VyQWN0aW9uRGF0YSA9IHtcblx0Ly8gXHRcdFx0dHlwZTogXCJyZXNpemVcIixcblx0Ly8gXHRcdFx0aXRlbUluZGV4OiBldmVudC5jdXJyZW50VGFyZ2V0LmF0dHJpYnV0ZXNbXCJkYXRhLWluZGV4XCJdLnZhbHVlXG5cdC8vIFx0XHR9O1xuXHQvLyBcdFx0dGhpcy50YXBIb2xkQ2FuY2VsID0gZmFsc2U7XG5cdC8vIFx0XHR0aGlzLnRhcEhvbGRUaW1lckNvbXBsZXRlID0gdHJ1ZTtcblxuXHQvLyBcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdbMF0uYWRkRXZlbnRMaXN0ZW5lcihcblx0Ly8gXHRcdFx0XCJ0b3VjaG1vdmVcIixcblx0Ly8gXHRcdFx0dGhpcy5vblRvdWNoTW92ZUJpbmRlZEZ1bmN0aW9uVmFyaWFibGVcblx0Ly8gXHRcdCk7XG5cdC8vIFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuXHQvLyBcdFx0XHRcInRvdWNoZW5kXCIsXG5cdC8vIFx0XHRcdHRoaXMub25Ub3VjaEVuZEJpbmRlZEZ1bmN0aW9uVmFyaWFibGVcblx0Ly8gXHRcdCk7XG5cdC8vIFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5yZW1vdmVFdmVudExpc3RlbmVyKFxuXHQvLyBcdFx0XHRcInRvdWNoc3RhcnRcIixcblx0Ly8gXHRcdFx0dGhpcy5vbkxpbWJlckdyaWRUb3VjaFN0YXJ0RnVuY3Rpb25WYXJpYWJsZVxuXHQvLyBcdFx0KTtcblxuXHQvLyBcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcblx0Ly8gXHRcdFx0XCJ0b3VjaGNhbmNlbFwiLFxuXHQvLyBcdFx0XHR0aGlzLm9uVG91Y2hDYW5jZWxCaW5kZWRGdW5jdGlvblZhcmlhYmxlXG5cdC8vIFx0XHQpO1xuXG5cdC8vIFx0XHR2YXIgdHJhbnNmb3JtU3R5bGUgPSB0aGlzLiRsaW1iZXJHcmlkVmlld0l0ZW1zW1xuXHQvLyBcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleFxuXHQvLyBcdFx0XS5zdHlsZS50cmFuc2Zvcm07XG5cdC8vIFx0XHR2YXIgaTEgPSB0cmFuc2Zvcm1TdHlsZS5pbmRleE9mKFwicHhcIik7XG5cdC8vIFx0XHR2YXIgaTIgPSB0cmFuc2Zvcm1TdHlsZS5pbmRleE9mKFwiLFwiKTtcblx0Ly8gXHRcdHZhciB4ID0gTnVtYmVyKHRyYW5zZm9ybVN0eWxlLnN1YnN0cmluZygxMCwgaTEpKTtcblx0Ly8gXHRcdHZhciB5ID0gTnVtYmVyKFxuXHQvLyBcdFx0XHR0cmFuc2Zvcm1TdHlsZS5zdWJzdHJpbmcoaTIgKyAyLCB0cmFuc2Zvcm1TdHlsZS5sZW5ndGggLSAzKVxuXHQvLyBcdFx0KTtcblxuXHQvLyBcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtUG9zaXRpb25YID0geDtcblx0Ly8gXHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbVBvc2l0aW9uWSA9IHk7XG5cblx0Ly8gXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1zW1xuXHQvLyBcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleFxuXHQvLyBcdFx0XS5zdHlsZS53aWR0aCA9XG5cdC8vIFx0XHRcdHRoaXMucG9zaXRpb25EYXRhW3RoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4XS53aWR0aCArIFwicHhcIjtcblx0Ly8gXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1zW1xuXHQvLyBcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleFxuXHQvLyBcdFx0XS5zdHlsZS5oZWlnaHQgPVxuXHQvLyBcdFx0XHR0aGlzLnBvc2l0aW9uRGF0YVt0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleF0uaGVpZ2h0ICsgXCJweFwiO1xuXG5cdC8vIFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtc1tcblx0Ly8gXHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhcblx0Ly8gXHRcdF0uc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUoXCIgKyB4ICsgXCJweCwgXCIgKyB5ICsgXCJweClcIjtcblx0Ly8gXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1zW1xuXHQvLyBcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleFxuXHQvLyBcdFx0XS5jbGFzc0xpc3QuYWRkKFwibGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbUFjdGl2ZVwiKTtcblxuXHQvLyBcdFx0dGhpcy4kYm9keVswXS5jbGFzc0xpc3QuYWRkKFxuXHQvLyBcdFx0XHRcImxpbWJlckdyaWRWaWV3Qm9keVRhZ1N0YXRlRWxlbWVudERyYWdnaW5nT3JSZXNpemluZ1wiXG5cdC8vIFx0XHQpO1xuXHQvLyBcdFx0dmFyIGxlbmd0aF8wID0gdGhpcy4kbGltYmVyR3JpZFZpZXdJdGVtcy5sZW5ndGg7XG5cdC8vIFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF8wOyBpKyspIHtcblx0Ly8gXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdJdGVtc1tpXS5jbGFzc0xpc3QuYWRkKFxuXHQvLyBcdFx0XHRcdFwibGltYmVyR3JpZFZpZXdJdGVtUmVzaXppbmdTdGF0ZVwiXG5cdC8vIFx0XHRcdCk7XG5cdC8vIFx0XHR9XG5cblx0Ly8gXHRcdHZhciBsZW5ndGhfMCA9IHRoaXMuJGxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1zLmxlbmd0aDtcblx0Ly8gXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHQvLyBcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtc1tpXS5jbGFzc0xpc3QuYWRkKFxuXHQvLyBcdFx0XHRcdFwibGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbVJlc2l6aW5nU3RhdGVcIlxuXHQvLyBcdFx0XHQpO1xuXHQvLyBcdFx0fVxuXG5cdC8vIFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtc1tcblx0Ly8gXHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhcblx0Ly8gXHRcdF0uY2xhc3NMaXN0LnJlbW92ZShcblx0Ly8gXHRcdFx0XCJsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtUmVzaXplQWxsb3dcIixcblx0Ly8gXHRcdFx0XCJsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtUmVzaXplRGlzYWxsb3dcIlxuXHQvLyBcdFx0KTtcblxuXHQvLyBcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0Ly8gXHR9XG5cblx0Ly8gXHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0Ly8gfTtcblxuXHQvLyBMaW1iZXJHcmlkVmlldy5wcm90b3R5cGUubW91c2VEb3duQ2hlY2sgPSBmdW5jdGlvbihldmVudCkge1xuXHQvLyBcdGlmICh0aGlzLm1vdXNlRG93bkNhbmNlbCA9PSBmYWxzZSkge1xuXHQvLyBcdFx0dGhpcy5tb3VzZURvd25UaW1lckNvbXBsZXRlID0gdHJ1ZTtcblx0Ly8gXHRcdGNvbnNvbGUubG9nKFwibW91c2VEb3duVGltZXJDb21wbGV0ZVwiKTtcblx0Ly8gXHRcdHRoaXMuJGJvZHlbMF0uY2xhc3NMaXN0LmFkZChcblx0Ly8gXHRcdFx0XCJsaW1iZXJHcmlkVmlld0JvZHlUYWdTdGF0ZUVsZW1lbnREcmFnZ2luZ09yUmVzaXppbmdcIlxuXHQvLyBcdFx0KTtcblx0Ly8gXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3SXRlbXNbXG5cdC8vIFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4XG5cdC8vIFx0XHRdLmNsYXNzTGlzdC5hZGQoXCJsaW1iZXJHcmlkVmlld0l0ZW1EZW1vXCIpO1xuXHQvLyBcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdCb2R5UHNldWRvSXRlbXNbXG5cdC8vIFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4XG5cdC8vIFx0XHRdLmNsYXNzTGlzdC5hZGQoXCJsaW1iZXJHcmlkVmlld0JvZHlQc2V1ZG9JdGVtQWN0aXZlXCIpO1xuXHQvLyBcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdCb2R5UHNldWRvSXRlbXNbXG5cdC8vIFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4XG5cdC8vIFx0XHRdLnN0eWxlLnRyYW5zZm9ybSA9XG5cdC8vIFx0XHRcdFwidHJhbnNsYXRlKFwiICtcblx0Ly8gXHRcdFx0ZXZlbnQucGFnZVggLyorIDUqLyArXG5cdC8vIFx0XHRcdFwicHgsIFwiICtcblx0Ly8gXHRcdFx0ZXZlbnQucGFnZVkgLyorIDUqLyArXG5cdC8vIFx0XHRcdFwicHgpXCI7XG5cblx0Ly8gXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3SGVpZ2h0QWRqdXN0R3VpZGVbMF0uc3R5bGUuaGVpZ2h0ID0gMCArIFwicHhcIjtcblx0Ly8gXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3SGVpZ2h0QWRqdXN0R3VpZGVbMF0uY2xhc3NMaXN0LmFkZChcblx0Ly8gXHRcdFx0XCJsaW1iZXJHcmlkVmlld0hlaWdodEFkanVzdEd1aWRlQWN0aXZlXCJcblx0Ly8gXHRcdCk7XG5cdC8vIFx0fSBlbHNlIHtcblx0Ly8gXHRcdGNvbnNvbGUubG9nKFwibW91c2VEb3duIGNhbmNlbCBiZWZvcmUgVGltZXJDb21wbGV0ZVwiKTtcblx0Ly8gXHR9XG5cdC8vIH07XG5cblx0Ly8gTGltYmVyR3JpZFZpZXcucHJvdG90eXBlLnRhcEhvbGRDaGVjayA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdC8vIFx0aWYgKHRoaXMudGFwSG9sZENhbmNlbCA9PSBmYWxzZSkge1xuXHQvLyBcdFx0dGhpcy50YXBIb2xkVGltZXJDb21wbGV0ZSA9IHRydWU7XG5cblx0Ly8gXHRcdHRoaXMuJGJvZHlbMF0uY2xhc3NMaXN0LmFkZChcblx0Ly8gXHRcdFx0XCJsaW1iZXJHcmlkVmlld0JvZHlUYWdTdGF0ZUVsZW1lbnREcmFnZ2luZ09yUmVzaXppbmdcIlxuXHQvLyBcdFx0KTtcblx0Ly8gXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3SXRlbXNbXG5cdC8vIFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4XG5cdC8vIFx0XHRdLmNsYXNzTGlzdC5hZGQoXCJsaW1iZXJHcmlkVmlld0l0ZW1EZW1vXCIpO1xuXHQvLyBcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdCb2R5UHNldWRvSXRlbXNbXG5cdC8vIFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4XG5cdC8vIFx0XHRdLmNsYXNzTGlzdC5hZGQoXCJsaW1iZXJHcmlkVmlld0JvZHlQc2V1ZG9JdGVtQWN0aXZlXCIpO1xuXHQvLyBcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdCb2R5UHNldWRvSXRlbXNbXG5cdC8vIFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4XG5cdC8vIFx0XHRdLnN0eWxlLnRyYW5zZm9ybSA9XG5cdC8vIFx0XHRcdFwidHJhbnNsYXRlKFwiICtcblx0Ly8gXHRcdFx0ZXZlbnQudG91Y2hlc1swXS5wYWdlWCAvKisgNSovICtcblx0Ly8gXHRcdFx0XCJweCwgXCIgK1xuXHQvLyBcdFx0XHRldmVudC50b3VjaGVzWzBdLnBhZ2VZIC8qKyA1Ki8gK1xuXHQvLyBcdFx0XHRcInB4KVwiO1xuXG5cdC8vIFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0hlaWdodEFkanVzdEd1aWRlWzBdLnN0eWxlLmhlaWdodCA9IDAgKyBcInB4XCI7XG5cdC8vIFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0hlaWdodEFkanVzdEd1aWRlWzBdLmNsYXNzTGlzdC5hZGQoXG5cdC8vIFx0XHRcdFwibGltYmVyR3JpZFZpZXdIZWlnaHRBZGp1c3RHdWlkZUFjdGl2ZVwiXG5cdC8vIFx0XHQpO1xuXHQvLyBcdH0gZWxzZSB7XG5cdC8vIFx0XHQvLyB0YXBIb2xkIGNhbmNlbCBiZWZvcmUgVGltZXJDb21wbGV0ZVxuXHQvLyBcdH1cblx0Ly8gfTtcblxuXHQvLyBMaW1iZXJHcmlkVmlldy5wcm90b3R5cGUub25Nb3VzZU1vdmUgPSBmdW5jdGlvbihldmVudCkge1xuXHQvLyBcdGlmICh0aGlzLm1vdXNlRG93blRpbWVyQ29tcGxldGUgPT0gdHJ1ZSkge1xuXHQvLyBcdFx0aWYgKHRoaXMudXNlckFjdGlvbkRhdGEudHlwZSA9PSBcIm1vdmVcIikge1xuXHQvLyBcdFx0XHRpZiAoXG5cdC8vIFx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdNb3ZlR3VpZGVbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKFxuXHQvLyBcdFx0XHRcdFx0XCJsaW1iZXJHcmlkVmlld01vdmVHdWlkZUFjdGl2ZVwiXG5cdC8vIFx0XHRcdFx0KVxuXHQvLyBcdFx0XHQpIHtcblx0Ly8gXHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld01vdmVHdWlkZVswXS5jbGFzc0xpc3QucmVtb3ZlKFxuXHQvLyBcdFx0XHRcdFx0XCJsaW1iZXJHcmlkVmlld01vdmVHdWlkZUFjdGl2ZVwiXG5cdC8vIFx0XHRcdFx0KTtcblx0Ly8gXHRcdFx0fVxuXG5cdC8vIFx0XHRcdGlmIChcblx0Ly8gXHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0JvZHlQc2V1ZG9JdGVtc1tcblx0Ly8gXHRcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4XG5cdC8vIFx0XHRcdFx0XS5jbGFzc0xpc3QuY29udGFpbnMoXG5cdC8vIFx0XHRcdFx0XHRcImxpbWJlckdyaWRWaWV3Qm9keVBzZXVkb0l0ZW1Nb3ZlQWxsb3dcIlxuXHQvLyBcdFx0XHRcdCkgfHxcblx0Ly8gXHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0JvZHlQc2V1ZG9JdGVtc1tcblx0Ly8gXHRcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4XG5cdC8vIFx0XHRcdFx0XS5jbGFzc0xpc3QuY29udGFpbnMoXG5cdC8vIFx0XHRcdFx0XHRcImxpbWJlckdyaWRWaWV3Qm9keVBzZXVkb0l0ZW1Nb3ZlRGlzYWxsb3dcIlxuXHQvLyBcdFx0XHRcdClcblx0Ly8gXHRcdFx0KSB7XG5cdC8vIFx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdCb2R5UHNldWRvSXRlbXNbXG5cdC8vIFx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleFxuXHQvLyBcdFx0XHRcdF0uY2xhc3NMaXN0LnJlbW92ZShcblx0Ly8gXHRcdFx0XHRcdFwibGltYmVyR3JpZFZpZXdCb2R5UHNldWRvSXRlbU1vdmVBbGxvd1wiLFxuXHQvLyBcdFx0XHRcdFx0XCJsaW1iZXJHcmlkVmlld0JvZHlQc2V1ZG9JdGVtTW92ZURpc2FsbG93XCJcblx0Ly8gXHRcdFx0XHQpO1xuXHQvLyBcdFx0XHR9XG5cblx0Ly8gXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdCb2R5UHNldWRvSXRlbXNbXG5cdC8vIFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhcblx0Ly8gXHRcdFx0XS5zdHlsZS50cmFuc2Zvcm0gPVxuXHQvLyBcdFx0XHRcdFwidHJhbnNsYXRlKFwiICtcblx0Ly8gXHRcdFx0XHRldmVudC5wYWdlWCAvKisgNSovICtcblx0Ly8gXHRcdFx0XHRcInB4LCBcIiArXG5cdC8vIFx0XHRcdFx0ZXZlbnQucGFnZVkgLyorIDUqLyArXG5cdC8vIFx0XHRcdFx0XCJweClcIjtcblx0Ly8gXHRcdFx0dmFyIG1vdXNlUG9zaXRpb25PbkxpbWJlckdyaWQgPSB0aGlzLmNhbGN1bGF0ZU1vdXNlUG9zT25MaW1iZXJHcmlkKFxuXHQvLyBcdFx0XHRcdGV2ZW50XG5cdC8vIFx0XHRcdCk7XG5cblx0Ly8gXHRcdFx0aWYgKG1vdXNlUG9zaXRpb25PbkxpbWJlckdyaWQgIT0gZmFsc2UpIHtcblx0Ly8gXHRcdFx0XHR2YXIgc2Nyb2xsVG9wID0gdGhpcy4kbGltYmVyR3JpZFZpZXdbMF0uc2Nyb2xsVG9wO1xuXHQvLyBcdFx0XHRcdHZhciBzY3JvbGxIZWlnaHQgPSB0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5zY3JvbGxIZWlnaHQ7XG5cblx0Ly8gXHRcdFx0XHR2YXIgeU1vdXNlUG9zaXRpb24gPSBtb3VzZVBvc2l0aW9uT25MaW1iZXJHcmlkLnk7XG5cdC8vIFx0XHRcdFx0dGhpcy5hZGp1c3RIZWlnaHQoeU1vdXNlUG9zaXRpb24pO1xuXHQvLyBcdFx0XHR9XG5cblx0Ly8gXHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMuc2hvd01vdmVEZW1vVGltZU91dFZhcmlhYmxlKTtcblx0Ly8gXHRcdFx0dGhpcy5zaG93TW92ZURlbW9UaW1lT3V0VmFyaWFibGUgPSBzZXRUaW1lb3V0KFxuXHQvLyBcdFx0XHRcdHRoaXMuc2hvd01vdmVEZW1vLmJpbmQoXG5cdC8vIFx0XHRcdFx0XHR0aGlzLFxuXHQvLyBcdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXgsXG5cdC8vIFx0XHRcdFx0XHRtb3VzZVBvc2l0aW9uT25MaW1iZXJHcmlkXG5cdC8vIFx0XHRcdFx0KSxcblx0Ly8gXHRcdFx0XHR0aGlzLkRFTU9fV0FJVF9USU1FXG5cdC8vIFx0XHRcdCk7XG5cdC8vIFx0XHR9IGVsc2Uge1xuXHQvLyBcdFx0XHR2YXIgc2Nyb2xsVG9wID0gdGhpcy4kbGltYmVyR3JpZFZpZXdbMF0uc2Nyb2xsVG9wO1xuXHQvLyBcdFx0XHR2YXIgc2Nyb2xsTGVmdCA9IHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLnNjcm9sbExlZnQ7XG5cblx0Ly8gXHRcdFx0dmFyIHggPSB0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1Qb3NpdGlvblg7XG5cdC8vIFx0XHRcdHZhciB5ID0gdGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtUG9zaXRpb25ZO1xuXG5cdC8vIFx0XHRcdHZhciBuZXdXaWR0aCA9XG5cdC8vIFx0XHRcdFx0ZXZlbnQub2Zmc2V0WCAtIHggKyBzY3JvbGxMZWZ0IC0gdGhpcy5QQURESU5HX0xFRlQ7XG5cdC8vIFx0XHRcdHZhciBuZXdIZWlnaHQgPVxuXHQvLyBcdFx0XHRcdGV2ZW50Lm9mZnNldFkgLSB5ICsgc2Nyb2xsVG9wIC0gdGhpcy5QQURESU5HX1RPUDtcblxuXHQvLyBcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLm5ld1dpZHRoID0gbmV3V2lkdGg7XG5cdC8vIFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEubmV3SGVpZ2h0ID0gbmV3SGVpZ2h0O1xuXG5cdC8vIFx0XHRcdHZhciB5TW91c2VQb3NpdGlvbiA9IGV2ZW50Lm9mZnNldFkgKyBzY3JvbGxUb3A7XG5cdC8vIFx0XHRcdHRoaXMuYWRqdXN0SGVpZ2h0KHlNb3VzZVBvc2l0aW9uKTtcblxuXHQvLyBcdFx0XHRpZiAobmV3V2lkdGggPiAwICYmIG5ld0hlaWdodCA+IDApIHtcblx0Ly8gXHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtc1tcblx0Ly8gXHRcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4XG5cdC8vIFx0XHRcdFx0XS5zdHlsZS53aWR0aCA9IG5ld1dpZHRoICsgXCJweFwiO1xuXHQvLyBcdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1zW1xuXHQvLyBcdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhcblx0Ly8gXHRcdFx0XHRdLnN0eWxlLmhlaWdodCA9IG5ld0hlaWdodCArIFwicHhcIjtcblx0Ly8gXHRcdFx0fVxuXG5cdC8vIFx0XHRcdGlmIChcblx0Ly8gXHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtc1tcblx0Ly8gXHRcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4XG5cdC8vIFx0XHRcdFx0XS5jbGFzc0xpc3QuY29udGFpbnMoXG5cdC8vIFx0XHRcdFx0XHRcImxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1SZXNpemVBbGxvd1wiXG5cdC8vIFx0XHRcdFx0KSB8fFxuXHQvLyBcdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1zW1xuXHQvLyBcdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhcblx0Ly8gXHRcdFx0XHRdLmNsYXNzTGlzdC5jb250YWlucyhcblx0Ly8gXHRcdFx0XHRcdFwibGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbVJlc2l6ZURpc2FsbG93XCJcblx0Ly8gXHRcdFx0XHQpXG5cdC8vIFx0XHRcdCkge1xuXHQvLyBcdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1zW1xuXHQvLyBcdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhcblx0Ly8gXHRcdFx0XHRdLmNsYXNzTGlzdC5yZW1vdmUoXG5cdC8vIFx0XHRcdFx0XHRcImxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1SZXNpemVBbGxvd1wiLFxuXHQvLyBcdFx0XHRcdFx0XCJsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtUmVzaXplRGlzYWxsb3dcIlxuXHQvLyBcdFx0XHRcdCk7XG5cdC8vIFx0XHRcdH1cblxuXHQvLyBcdFx0XHRjbGVhclRpbWVvdXQodGhpcy5zaG93UmVzaXplRGVtb1RpbWVPdXRWYXJpYWJsZSk7XG5cdC8vIFx0XHRcdHRoaXMuc2hvd1Jlc2l6ZURlbW9UaW1lT3V0VmFyaWFibGUgPSBzZXRUaW1lb3V0KFxuXHQvLyBcdFx0XHRcdHRoaXMuc2hvd1Jlc2l6ZURlbW8uYmluZChcblx0Ly8gXHRcdFx0XHRcdHRoaXMsXG5cdC8vIFx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleCxcblx0Ly8gXHRcdFx0XHRcdG5ld1dpZHRoLFxuXHQvLyBcdFx0XHRcdFx0bmV3SGVpZ2h0XG5cdC8vIFx0XHRcdFx0KSxcblx0Ly8gXHRcdFx0XHR0aGlzLkRFTU9fV0FJVF9USU1FXG5cdC8vIFx0XHRcdCk7XG5cdC8vIFx0XHR9XG5cdC8vIFx0fSBlbHNlIHtcblx0Ly8gXHRcdHRoaXMubW91c2VEb3duQ2FuY2VsID0gdHJ1ZTtcblx0Ly8gXHRcdGNsZWFyVGltZW91dCh0aGlzLmxvbmdQcmVzc0NoZWNrKTtcblx0Ly8gXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG5cdC8vIFx0XHRcdFwibW91c2Vtb3ZlXCIsXG5cdC8vIFx0XHRcdHRoaXMub25Nb3VzZU1vdmVCaW5kZWRGdW5jdGlvblZhcmlhYmxlXG5cdC8vIFx0XHQpO1xuXHQvLyBcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdbMF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0Ly8gXHRcdFx0XCJtb3VzZW1vdmVcIixcblx0Ly8gXHRcdFx0dGhpcy5vbk1vdXNlTW92ZUJpbmRlZEZ1bmN0aW9uVmFyaWFibGVcblx0Ly8gXHRcdCk7XG5cdC8vIFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuXHQvLyBcdFx0XHRcIm1vdXNldXBcIixcblx0Ly8gXHRcdFx0dGhpcy5vbk1vdXNlVXBCaW5kZWRGdW5jdGlvblZhcmlhYmxlXG5cdC8vIFx0XHQpO1xuXHQvLyBcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0Ly8gXHRcdFx0XCJjb250ZXh0bWVudVwiLFxuXHQvLyBcdFx0XHR0aGlzLm9uQ29udGV4dE1lbnVCaW5kZWRGdW5jdGlvblZhcmlhYmxlXG5cdC8vIFx0XHQpO1xuXG5cdC8vIFx0XHQvLyBjYW5jZWxpbmcgbW91c2VIb2xkXG5cdC8vIFx0fVxuXHQvLyBcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdC8vIFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdC8vIH07XG5cblx0Ly8gTGltYmVyR3JpZFZpZXcucHJvdG90eXBlLm9uVG91Y2hNb3ZlID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0Ly8gXHRpZiAodGhpcy50YXBIb2xkVGltZXJDb21wbGV0ZSA9PSB0cnVlKSB7XG5cdC8vIFx0XHRpZiAodGhpcy51c2VyQWN0aW9uRGF0YS50eXBlID09IFwibW92ZVwiKSB7XG5cdC8vIFx0XHRcdGlmIChcblx0Ly8gXHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld01vdmVHdWlkZVswXS5jbGFzc0xpc3QuY29udGFpbnMoXG5cdC8vIFx0XHRcdFx0XHRcImxpbWJlckdyaWRWaWV3TW92ZUd1aWRlQWN0aXZlXCJcblx0Ly8gXHRcdFx0XHQpXG5cdC8vIFx0XHRcdCkge1xuXHQvLyBcdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3TW92ZUd1aWRlWzBdLmNsYXNzTGlzdC5yZW1vdmUoXG5cdC8vIFx0XHRcdFx0XHRcImxpbWJlckdyaWRWaWV3TW92ZUd1aWRlQWN0aXZlXCJcblx0Ly8gXHRcdFx0XHQpO1xuXHQvLyBcdFx0XHR9XG5cblx0Ly8gXHRcdFx0aWYgKFxuXHQvLyBcdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3Qm9keVBzZXVkb0l0ZW1zW1xuXHQvLyBcdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhcblx0Ly8gXHRcdFx0XHRdLmNsYXNzTGlzdC5jb250YWlucyhcblx0Ly8gXHRcdFx0XHRcdFwibGltYmVyR3JpZFZpZXdCb2R5UHNldWRvSXRlbU1vdmVBbGxvd1wiXG5cdC8vIFx0XHRcdFx0KSB8fFxuXHQvLyBcdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3Qm9keVBzZXVkb0l0ZW1zW1xuXHQvLyBcdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhcblx0Ly8gXHRcdFx0XHRdLmNsYXNzTGlzdC5jb250YWlucyhcblx0Ly8gXHRcdFx0XHRcdFwibGltYmVyR3JpZFZpZXdCb2R5UHNldWRvSXRlbU1vdmVEaXNhbGxvd1wiXG5cdC8vIFx0XHRcdFx0KVxuXHQvLyBcdFx0XHQpIHtcblx0Ly8gXHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0JvZHlQc2V1ZG9JdGVtc1tcblx0Ly8gXHRcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4XG5cdC8vIFx0XHRcdFx0XS5jbGFzc0xpc3QucmVtb3ZlKFxuXHQvLyBcdFx0XHRcdFx0XCJsaW1iZXJHcmlkVmlld0JvZHlQc2V1ZG9JdGVtTW92ZUFsbG93XCIsXG5cdC8vIFx0XHRcdFx0XHRcImxpbWJlckdyaWRWaWV3Qm9keVBzZXVkb0l0ZW1Nb3ZlRGlzYWxsb3dcIlxuXHQvLyBcdFx0XHRcdCk7XG5cdC8vIFx0XHRcdH1cblxuXHQvLyBcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0JvZHlQc2V1ZG9JdGVtc1tcblx0Ly8gXHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleFxuXHQvLyBcdFx0XHRdLnN0eWxlLnRyYW5zZm9ybSA9XG5cdC8vIFx0XHRcdFx0XCJ0cmFuc2xhdGUoXCIgK1xuXHQvLyBcdFx0XHRcdGV2ZW50LnRvdWNoZXNbMF0ucGFnZVggLyorIDUqLyArXG5cdC8vIFx0XHRcdFx0XCJweCwgXCIgK1xuXHQvLyBcdFx0XHRcdGV2ZW50LnRvdWNoZXNbMF0ucGFnZVkgLyorIDUqLyArXG5cdC8vIFx0XHRcdFx0XCJweClcIjtcblx0Ly8gXHRcdFx0dmFyIHRvdWNoUG9zaXRpb25PbkxpbWJlckdyaWQgPSB0aGlzLmNhbGN1bGF0ZVRvdWNoUG9zT25MaW1iZXJHcmlkKFxuXHQvLyBcdFx0XHRcdGV2ZW50XG5cdC8vIFx0XHRcdCk7XG5cblx0Ly8gXHRcdFx0aWYgKHRvdWNoUG9zaXRpb25PbkxpbWJlckdyaWQgIT0gZmFsc2UpIHtcblx0Ly8gXHRcdFx0XHR2YXIgc2Nyb2xsVG9wID0gdGhpcy4kbGltYmVyR3JpZFZpZXdbMF0uc2Nyb2xsVG9wO1xuXHQvLyBcdFx0XHRcdHZhciBzY3JvbGxMZWZ0ID0gdGhpcy4kbGltYmVyR3JpZFZpZXdbMF0uc2Nyb2xsTGVmdDtcblxuXHQvLyBcdFx0XHRcdHZhciBsaW1iZXJHcmlkVmlld0JvdW5kaW5nQ2xpZW50UmVjdCA9IHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHQvLyBcdFx0XHRcdHZhciBsaW1iZXJHcmlkVmlld1dpZHRoVmlzaWJsZVdpZHRoID1cblx0Ly8gXHRcdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLm9mZnNldFdpZHRoIC1cblx0Ly8gXHRcdFx0XHRcdGxpbWJlckdyaWRWaWV3Qm91bmRpbmdDbGllbnRSZWN0LmxlZnQ7XG5cdC8vIFx0XHRcdFx0dmFyIGxpbWJlckdyaWRWaWV3SGVpZ2h0VmlzaWJsZUhlaWdodCA9XG5cdC8vIFx0XHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5vZmZzZXRIZWlnaHQgLVxuXHQvLyBcdFx0XHRcdFx0bGltYmVyR3JpZFZpZXdCb3VuZGluZ0NsaWVudFJlY3QudG9wO1xuXHQvLyBcdFx0XHRcdHZhciBsaW1iZXJHcmlkVmlld09uVmlzaWJsZUFyZWFYID1cblx0Ly8gXHRcdFx0XHRcdHRvdWNoUG9zaXRpb25PbkxpbWJlckdyaWQueCArXG5cdC8vIFx0XHRcdFx0XHR0aGlzLlBBRERJTkdfTEVGVCAtXG5cdC8vIFx0XHRcdFx0XHRzY3JvbGxMZWZ0O1xuXHQvLyBcdFx0XHRcdHZhciBsaW1iZXJHcmlkVmlld09uVmlzaWJsZUFyZWFZID1cblx0Ly8gXHRcdFx0XHRcdHRvdWNoUG9zaXRpb25PbkxpbWJlckdyaWQueSArXG5cdC8vIFx0XHRcdFx0XHR0aGlzLlBBRERJTkdfVE9QIC1cblx0Ly8gXHRcdFx0XHRcdHNjcm9sbFRvcDtcblxuXHQvLyBcdFx0XHRcdHZhciB5VG91Y2hQb3NpdGlvbiA9IHRvdWNoUG9zaXRpb25PbkxpbWJlckdyaWQueTtcblx0Ly8gXHRcdFx0XHR0aGlzLmFkanVzdEhlaWdodCh5VG91Y2hQb3NpdGlvbik7XG5cblx0Ly8gXHRcdFx0XHR2YXIgcHJvZ3JhbVNjcm9sbGVkID0gdGhpcy5hZGp1c3RTY3JvbGwoXG5cdC8vIFx0XHRcdFx0XHRsaW1iZXJHcmlkVmlld09uVmlzaWJsZUFyZWFZLFxuXHQvLyBcdFx0XHRcdFx0bGltYmVyR3JpZFZpZXdIZWlnaHRWaXNpYmxlSGVpZ2h0XG5cdC8vIFx0XHRcdFx0KTtcblx0Ly8gXHRcdFx0fVxuXG5cdC8vIFx0XHRcdGNsZWFyVGltZW91dCh0aGlzLnNob3dNb3ZlRGVtb1RpbWVPdXRWYXJpYWJsZSk7XG5cdC8vIFx0XHRcdGlmIChwcm9ncmFtU2Nyb2xsZWQgIT0gdHJ1ZSkge1xuXHQvLyBcdFx0XHRcdHRoaXMuc2hvd01vdmVEZW1vVGltZU91dFZhcmlhYmxlID0gc2V0VGltZW91dChcblx0Ly8gXHRcdFx0XHRcdHRoaXMuc2hvd01vdmVEZW1vLmJpbmQoXG5cdC8vIFx0XHRcdFx0XHRcdHRoaXMsXG5cdC8vIFx0XHRcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4LFxuXHQvLyBcdFx0XHRcdFx0XHR0b3VjaFBvc2l0aW9uT25MaW1iZXJHcmlkXG5cdC8vIFx0XHRcdFx0XHQpLFxuXHQvLyBcdFx0XHRcdFx0dGhpcy5ERU1PX1dBSVRfVElNRVxuXHQvLyBcdFx0XHRcdCk7XG5cdC8vIFx0XHRcdH1cblx0Ly8gXHRcdH0gZWxzZSB7XG5cdC8vIFx0XHRcdHZhciBzY3JvbGxUb3AgPSB0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5zY3JvbGxUb3A7XG5cdC8vIFx0XHRcdHZhciBzY3JvbGxMZWZ0ID0gdGhpcy4kbGltYmVyR3JpZFZpZXdbMF0uc2Nyb2xsTGVmdDtcblxuXHQvLyBcdFx0XHR2YXIgeCA9IHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbVBvc2l0aW9uWDtcblx0Ly8gXHRcdFx0dmFyIHkgPSB0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1Qb3NpdGlvblk7XG5cblx0Ly8gXHRcdFx0dmFyIHRvdWNoUG9zaXRpb25PbkxpbWJlckdyaWQgPSB0aGlzLmNhbGN1bGF0ZVRvdWNoUG9zT25MaW1iZXJHcmlkKFxuXHQvLyBcdFx0XHRcdGV2ZW50XG5cdC8vIFx0XHRcdCk7XG5cblx0Ly8gXHRcdFx0aWYgKHRvdWNoUG9zaXRpb25PbkxpbWJlckdyaWQgIT0gZmFsc2UpIHtcblx0Ly8gXHRcdFx0XHR2YXIgbmV3V2lkdGggPSB0b3VjaFBvc2l0aW9uT25MaW1iZXJHcmlkLnggLSB4O1xuXHQvLyBcdFx0XHRcdHZhciBuZXdIZWlnaHQgPSB0b3VjaFBvc2l0aW9uT25MaW1iZXJHcmlkLnkgLSB5O1xuXG5cdC8vIFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5uZXdXaWR0aCA9IG5ld1dpZHRoO1xuXHQvLyBcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEubmV3SGVpZ2h0ID0gbmV3SGVpZ2h0O1xuXG5cdC8vIFx0XHRcdFx0aWYgKG5ld1dpZHRoID4gMCAmJiBuZXdIZWlnaHQgPiAwKSB7XG5cdC8vIFx0XHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtc1tcblx0Ly8gXHRcdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhcblx0Ly8gXHRcdFx0XHRcdF0uc3R5bGUud2lkdGggPSBuZXdXaWR0aCArIFwicHhcIjtcblx0Ly8gXHRcdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1zW1xuXHQvLyBcdFx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleFxuXHQvLyBcdFx0XHRcdFx0XS5zdHlsZS5oZWlnaHQgPSBuZXdIZWlnaHQgKyBcInB4XCI7XG5cdC8vIFx0XHRcdFx0fVxuXG5cdC8vIFx0XHRcdFx0aWYgKFxuXHQvLyBcdFx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbXNbXG5cdC8vIFx0XHRcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4XG5cdC8vIFx0XHRcdFx0XHRdLmNsYXNzTGlzdC5jb250YWlucyhcblx0Ly8gXHRcdFx0XHRcdFx0XCJsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtUmVzaXplQWxsb3dcIlxuXHQvLyBcdFx0XHRcdFx0KSB8fFxuXHQvLyBcdFx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbXNbXG5cdC8vIFx0XHRcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4XG5cdC8vIFx0XHRcdFx0XHRdLmNsYXNzTGlzdC5jb250YWlucyhcblx0Ly8gXHRcdFx0XHRcdFx0XCJsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtUmVzaXplRGlzYWxsb3dcIlxuXHQvLyBcdFx0XHRcdFx0KVxuXHQvLyBcdFx0XHRcdCkge1xuXHQvLyBcdFx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbXNbXG5cdC8vIFx0XHRcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4XG5cdC8vIFx0XHRcdFx0XHRdLmNsYXNzTGlzdC5yZW1vdmUoXG5cdC8vIFx0XHRcdFx0XHRcdFwibGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbVJlc2l6ZUFsbG93XCIsXG5cdC8vIFx0XHRcdFx0XHRcdFwibGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbVJlc2l6ZURpc2FsbG93XCJcblx0Ly8gXHRcdFx0XHRcdCk7XG5cdC8vIFx0XHRcdFx0fVxuXHQvLyBcdFx0XHR9XG5cblx0Ly8gXHRcdFx0aWYgKHRvdWNoUG9zaXRpb25PbkxpbWJlckdyaWQgIT0gZmFsc2UpIHtcblx0Ly8gXHRcdFx0XHR2YXIgbGltYmVyR3JpZFZpZXdCb3VuZGluZ0NsaWVudFJlY3QgPSB0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0Ly8gXHRcdFx0XHR2YXIgbGltYmVyR3JpZFZpZXdXaWR0aFZpc2libGVXaWR0aCA9XG5cdC8vIFx0XHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5vZmZzZXRXaWR0aCAtXG5cdC8vIFx0XHRcdFx0XHRsaW1iZXJHcmlkVmlld0JvdW5kaW5nQ2xpZW50UmVjdC5sZWZ0O1xuXHQvLyBcdFx0XHRcdHZhciBsaW1iZXJHcmlkVmlld0hlaWdodFZpc2libGVIZWlnaHQgPVxuXHQvLyBcdFx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdbMF0ub2Zmc2V0SGVpZ2h0IC1cblx0Ly8gXHRcdFx0XHRcdGxpbWJlckdyaWRWaWV3Qm91bmRpbmdDbGllbnRSZWN0LnRvcDtcblx0Ly8gXHRcdFx0XHR2YXIgbGltYmVyR3JpZFZpZXdPblZpc2libGVBcmVhWCA9XG5cdC8vIFx0XHRcdFx0XHR0b3VjaFBvc2l0aW9uT25MaW1iZXJHcmlkLnggK1xuXHQvLyBcdFx0XHRcdFx0dGhpcy5QQURESU5HX0xFRlQgLVxuXHQvLyBcdFx0XHRcdFx0c2Nyb2xsTGVmdDtcblx0Ly8gXHRcdFx0XHR2YXIgbGltYmVyR3JpZFZpZXdPblZpc2libGVBcmVhWSA9XG5cdC8vIFx0XHRcdFx0XHR0b3VjaFBvc2l0aW9uT25MaW1iZXJHcmlkLnkgK1xuXHQvLyBcdFx0XHRcdFx0dGhpcy5QQURESU5HX1RPUCAtXG5cdC8vIFx0XHRcdFx0XHRzY3JvbGxUb3A7XG5cblx0Ly8gXHRcdFx0XHR2YXIgeVRvdWNoUG9zaXRpb24gPSB0b3VjaFBvc2l0aW9uT25MaW1iZXJHcmlkLnk7XG5cdC8vIFx0XHRcdFx0dGhpcy5hZGp1c3RIZWlnaHQoeVRvdWNoUG9zaXRpb24pO1xuXG5cdC8vIFx0XHRcdFx0dmFyIHByb2dyYW1TY3JvbGxlZCA9IHRoaXMuYWRqdXN0U2Nyb2xsKFxuXHQvLyBcdFx0XHRcdFx0bGltYmVyR3JpZFZpZXdPblZpc2libGVBcmVhWSxcblx0Ly8gXHRcdFx0XHRcdGxpbWJlckdyaWRWaWV3SGVpZ2h0VmlzaWJsZUhlaWdodFxuXHQvLyBcdFx0XHRcdCk7XG5cdC8vIFx0XHRcdH1cblxuXHQvLyBcdFx0XHRjbGVhclRpbWVvdXQodGhpcy5zaG93UmVzaXplRGVtb1RpbWVPdXRWYXJpYWJsZSk7XG5cdC8vIFx0XHRcdGlmIChwcm9ncmFtU2Nyb2xsZWQgIT0gdHJ1ZSkge1xuXHQvLyBcdFx0XHRcdHRoaXMuc2hvd1Jlc2l6ZURlbW9UaW1lT3V0VmFyaWFibGUgPSBzZXRUaW1lb3V0KFxuXHQvLyBcdFx0XHRcdFx0dGhpcy5zaG93UmVzaXplRGVtby5iaW5kKFxuXHQvLyBcdFx0XHRcdFx0XHR0aGlzLFxuXHQvLyBcdFx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleCxcblx0Ly8gXHRcdFx0XHRcdFx0bmV3V2lkdGgsXG5cdC8vIFx0XHRcdFx0XHRcdG5ld0hlaWdodFxuXHQvLyBcdFx0XHRcdFx0KSxcblx0Ly8gXHRcdFx0XHRcdHRoaXMuREVNT19XQUlUX1RJTUVcblx0Ly8gXHRcdFx0XHQpO1xuXHQvLyBcdFx0XHR9XG5cdC8vIFx0XHR9XG5cdC8vIFx0fSBlbHNlIHtcblx0Ly8gXHRcdHRoaXMudGFwSG9sZENhbmNlbCA9IHRydWU7XG5cdC8vIFx0XHRjbGVhclRpbWVvdXQodGhpcy5sb25nVG91Y2hDaGVjayk7XG5cdC8vIFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuXHQvLyBcdFx0XHRcInRvdWNobW92ZVwiLFxuXHQvLyBcdFx0XHR0aGlzLm9uVG91Y2hNb3ZlQmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHQvLyBcdFx0KTtcblx0Ly8gXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoXG5cdC8vIFx0XHRcdFwidG91Y2htb3ZlXCIsXG5cdC8vIFx0XHRcdHRoaXMub25Ub3VjaE1vdmVCaW5kZWRGdW5jdGlvblZhcmlhYmxlXG5cdC8vIFx0XHQpO1xuXHQvLyBcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0Ly8gXHRcdFx0XCJ0b3VjaGVuZFwiLFxuXHQvLyBcdFx0XHR0aGlzLm9uVG91Y2hFbmRCaW5kZWRGdW5jdGlvblZhcmlhYmxlXG5cdC8vIFx0XHQpO1xuXHQvLyBcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0Ly8gXHRcdFx0XCJjb250ZXh0bWVudVwiLFxuXHQvLyBcdFx0XHR0aGlzLm9uQ29udGV4dE1lbnVCaW5kZWRGdW5jdGlvblZhcmlhYmxlXG5cdC8vIFx0XHQpO1xuXHQvLyBcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0Ly8gXHRcdFx0XCJjb250ZXh0bWVudVwiLFxuXHQvLyBcdFx0XHR0aGlzLm9uSXRlbVRvdWNoQ29udGV4dE1lbnVCaW5kZWRGdW5jdGlvblZhcmlhYmxlXG5cdC8vIFx0XHQpO1xuXHQvLyBcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0Ly8gXHRcdFx0XCJ0b3VjaGNhbmNlbFwiLFxuXHQvLyBcdFx0XHR0aGlzLm9uVG91Y2hDYW5jZWxCaW5kZWRGdW5jdGlvblZhcmlhYmxlXG5cdC8vIFx0XHQpO1xuXHQvLyBcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdbMF0uYWRkRXZlbnRMaXN0ZW5lcihcblx0Ly8gXHRcdFx0XCJ0b3VjaHN0YXJ0XCIsXG5cdC8vIFx0XHRcdHRoaXMub25MaW1iZXJHcmlkVG91Y2hTdGFydEZ1bmN0aW9uVmFyaWFibGVcblx0Ly8gXHRcdCk7XG5cblx0Ly8gXHRcdC8vIGNhbmNlbGluZyB0YXBob2xkXG5cdC8vIFx0fVxuXG5cdC8vIFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdC8vIH07XG5cblx0Ly8gTGltYmVyR3JpZFZpZXcucHJvdG90eXBlLm9uTW91c2VVcCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdC8vIFx0Y2xlYXJUaW1lb3V0KHRoaXMuc2hvd01vdmVEZW1vVGltZU91dFZhcmlhYmxlKTtcblx0Ly8gXHRjbGVhclRpbWVvdXQodGhpcy5zaG93UmVzaXplRGVtb1RpbWVPdXRWYXJpYWJsZSk7XG5cdC8vIFx0dmFyIGl0ZW1SZXNpemVGbGFnID0gZmFsc2U7XG5cdC8vIFx0dmFyIGl0ZW1Nb3ZlRmxhZyA9IGZhbHNlO1xuXHQvLyBcdGlmICh0aGlzLm1vdXNlRG93blRpbWVyQ29tcGxldGUgPT0gdHJ1ZSkge1xuXHQvLyBcdFx0aWYgKHRoaXMudXNlckFjdGlvbkRhdGEudHlwZSA9PSBcIm1vdmVcIikge1xuXHQvLyBcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0JvZHlQc2V1ZG9JdGVtc1tcblx0Ly8gXHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleFxuXHQvLyBcdFx0XHRdLmNsYXNzTGlzdC5yZW1vdmUoXCJsaW1iZXJHcmlkVmlld0JvZHlQc2V1ZG9JdGVtQWN0aXZlXCIpO1xuXHQvLyBcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0JvZHlQc2V1ZG9JdGVtc1tcblx0Ly8gXHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleFxuXHQvLyBcdFx0XHRdLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlKFwiICsgMCArIFwicHgsIFwiICsgMCArIFwicHgpXCI7XG5cdC8vIFx0XHRcdHZhciBtb3VzZVBvc2l0aW9uT25MaW1iZXJHcmlkID0gdGhpcy5jYWxjdWxhdGVNb3VzZVBvc09uTGltYmVyR3JpZChcblx0Ly8gXHRcdFx0XHRldmVudFxuXHQvLyBcdFx0XHQpO1xuXHQvLyBcdFx0XHRpZiAobW91c2VQb3NpdGlvbk9uTGltYmVyR3JpZCAhPSBmYWxzZSkge1xuXHQvLyBcdFx0XHRcdHZhciBuZXdNb3ZlQ29vcmRpbmF0ZXMgPSB0aGlzLmNoZWNrTmV3TW92ZUNvb3JkaW5hdGVzKFxuXHQvLyBcdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXgsXG5cdC8vIFx0XHRcdFx0XHRtb3VzZVBvc2l0aW9uT25MaW1iZXJHcmlkXG5cdC8vIFx0XHRcdFx0KTtcblx0Ly8gXHRcdFx0XHRpZiAobmV3TW92ZUNvb3JkaW5hdGVzICE9IGZhbHNlKSB7XG5cdC8vIFx0XHRcdFx0XHR2YXIgdXBkYXRlZENvb3JkaW5hdGVzID0ge307XG5cdC8vIFx0XHRcdFx0XHRpZiAoXG5cdC8vIFx0XHRcdFx0XHRcdG5ld01vdmVDb29yZGluYXRlcy5oYXNPd25Qcm9wZXJ0eShcblx0Ly8gXHRcdFx0XHRcdFx0XHRcInJldmlzZWRDb29yZGluYXRlc1wiXG5cdC8vIFx0XHRcdFx0XHRcdClcblx0Ly8gXHRcdFx0XHRcdCkge1xuXHQvLyBcdFx0XHRcdFx0XHR0aGlzLm1vdmVQbGFuZShcblx0Ly8gXHRcdFx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleCxcblx0Ly8gXHRcdFx0XHRcdFx0XHRuZXdNb3ZlQ29vcmRpbmF0ZXMucmV2aXNlZENvb3JkaW5hdGVzLngsXG5cdC8vIFx0XHRcdFx0XHRcdFx0bmV3TW92ZUNvb3JkaW5hdGVzLnJldmlzZWRDb29yZGluYXRlcy55XG5cdC8vIFx0XHRcdFx0XHRcdCk7XG5cdC8vIFx0XHRcdFx0XHRcdHVwZGF0ZWRDb29yZGluYXRlcy54ID1cblx0Ly8gXHRcdFx0XHRcdFx0XHRuZXdNb3ZlQ29vcmRpbmF0ZXMucmV2aXNlZENvb3JkaW5hdGVzLng7XG5cdC8vIFx0XHRcdFx0XHRcdHVwZGF0ZWRDb29yZGluYXRlcy55ID1cblx0Ly8gXHRcdFx0XHRcdFx0XHRuZXdNb3ZlQ29vcmRpbmF0ZXMucmV2aXNlZENvb3JkaW5hdGVzLnk7XG5cdC8vIFx0XHRcdFx0XHRcdGl0ZW1Nb3ZlRmxhZyA9IHRydWU7XG5cdC8vIFx0XHRcdFx0XHR9IGVsc2Uge1xuXHQvLyBcdFx0XHRcdFx0XHR0aGlzLm1vdmVQbGFuZShcblx0Ly8gXHRcdFx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleCxcblx0Ly8gXHRcdFx0XHRcdFx0XHRuZXdNb3ZlQ29vcmRpbmF0ZXMueCxcblx0Ly8gXHRcdFx0XHRcdFx0XHRuZXdNb3ZlQ29vcmRpbmF0ZXMueVxuXHQvLyBcdFx0XHRcdFx0XHQpO1xuXHQvLyBcdFx0XHRcdFx0XHR1cGRhdGVkQ29vcmRpbmF0ZXMueCA9IG5ld01vdmVDb29yZGluYXRlcy54O1xuXHQvLyBcdFx0XHRcdFx0XHR1cGRhdGVkQ29vcmRpbmF0ZXMueSA9IG5ld01vdmVDb29yZGluYXRlcy55O1xuXHQvLyBcdFx0XHRcdFx0XHRpdGVtTW92ZUZsYWcgPSB0cnVlO1xuXHQvLyBcdFx0XHRcdFx0fVxuXHQvLyBcdFx0XHRcdH0gZWxzZSB7XG5cdC8vIFx0XHRcdFx0XHR0aGlzLnJldmVydFNob3dNb3ZlT3JSZXNpemVEZW1vKCk7XG5cdC8vIFx0XHRcdFx0fVxuXHQvLyBcdFx0XHR9IGVsc2Uge1xuXHQvLyBcdFx0XHRcdHRoaXMucmV2ZXJ0U2hvd01vdmVPclJlc2l6ZURlbW8oKTtcblx0Ly8gXHRcdFx0fVxuXHQvLyBcdFx0fSBlbHNlIHtcblx0Ly8gXHRcdFx0dmFyIHNjcm9sbFRvcCA9IHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLnNjcm9sbFRvcDtcblx0Ly8gXHRcdFx0dmFyIHNjcm9sbExlZnQgPSB0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5zY3JvbGxMZWZ0O1xuXG5cdC8vIFx0XHRcdHZhciB4ID0gdGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtUG9zaXRpb25YO1xuXHQvLyBcdFx0XHR2YXIgeSA9IHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbVBvc2l0aW9uWTtcblxuXHQvLyBcdFx0XHR2YXIgbmV3V2lkdGggPSB0aGlzLnVzZXJBY3Rpb25EYXRhLm5ld1dpZHRoO1xuXHQvLyBcdFx0XHR2YXIgbmV3SGVpZ2h0ID0gdGhpcy51c2VyQWN0aW9uRGF0YS5uZXdIZWlnaHQ7XG5cblx0Ly8gXHRcdFx0aWYgKG5ld1dpZHRoID4gMCAmJiBuZXdIZWlnaHQgPiAwKSB7XG5cdC8vIFx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbXNbXG5cdC8vIFx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleFxuXHQvLyBcdFx0XHRcdF0uc3R5bGUud2lkdGggPSBuZXdXaWR0aCArIFwicHhcIjtcblx0Ly8gXHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtc1tcblx0Ly8gXHRcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4XG5cdC8vIFx0XHRcdFx0XS5zdHlsZS5oZWlnaHQgPSBuZXdIZWlnaHQgKyBcInB4XCI7XG5cdC8vIFx0XHRcdH1cblxuXHQvLyBcdFx0XHRpZiAoXG5cdC8vIFx0XHRcdFx0dGhpcy5yZXNpemVQbGFuZShcblx0Ly8gXHRcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4LFxuXHQvLyBcdFx0XHRcdFx0bmV3V2lkdGgsXG5cdC8vIFx0XHRcdFx0XHRuZXdIZWlnaHRcblx0Ly8gXHRcdFx0XHQpID09IGZhbHNlXG5cdC8vIFx0XHRcdCkge1xuXHQvLyBcdFx0XHRcdHRoaXMucmV2ZXJ0U2hvd01vdmVPclJlc2l6ZURlbW8oKTtcblx0Ly8gXHRcdFx0XHRpdGVtUmVzaXplRmxhZyA9IHRydWU7XG5cdC8vIFx0XHRcdH1cblxuXHQvLyBcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtc1tcblx0Ly8gXHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleFxuXHQvLyBcdFx0XHRdLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlKFwiICsgMCArIFwicHgsIFwiICsgMCArIFwicHgpXCI7XG5cdC8vIFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1zW1xuXHQvLyBcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4XG5cdC8vIFx0XHRcdF0uY2xhc3NMaXN0LnJlbW92ZShcImxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1BY3RpdmVcIik7XG5cdC8vIFx0XHR9XG5cdC8vIFx0fSBlbHNlIHtcblx0Ly8gXHRcdHRoaXMubW91c2VEb3duQ2FuY2VsID0gdHJ1ZTtcblx0Ly8gXHRcdGNsZWFyVGltZW91dCh0aGlzLmxvbmdQcmVzc0NoZWNrKTtcblx0Ly8gXHRcdC8vIGNhbmNlbGluZyBtb3VzZUhvbGRcblx0Ly8gXHR9XG5cdC8vIFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0Ly8gXHRcdFwibW91c2Vtb3ZlXCIsXG5cdC8vIFx0XHR0aGlzLm9uTW91c2VNb3ZlQmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHQvLyBcdCk7XG5cdC8vIFx0dGhpcy4kbGltYmVyR3JpZFZpZXdbMF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0Ly8gXHRcdFwibW91c2Vtb3ZlXCIsXG5cdC8vIFx0XHR0aGlzLm9uTW91c2VNb3ZlQmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHQvLyBcdCk7XG5cdC8vIFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0Ly8gXHRcdFwibW91c2V1cFwiLFxuXHQvLyBcdFx0dGhpcy5vbk1vdXNlVXBCaW5kZWRGdW5jdGlvblZhcmlhYmxlXG5cdC8vIFx0KTtcblx0Ly8gXHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuXHQvLyBcdFx0XCJjb250ZXh0bWVudVwiLFxuXHQvLyBcdFx0dGhpcy5vbkNvbnRleHRNZW51QmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHQvLyBcdCk7XG5cblx0Ly8gXHR0aGlzLiRib2R5WzBdLmNsYXNzTGlzdC5yZW1vdmUoXG5cdC8vIFx0XHRcImxpbWJlckdyaWRWaWV3Qm9keVRhZ1N0YXRlRWxlbWVudERyYWdnaW5nT3JSZXNpemluZ1wiXG5cdC8vIFx0KTtcblx0Ly8gXHR0aGlzLiRsaW1iZXJHcmlkVmlld01vdmVHdWlkZVswXS5jbGFzc0xpc3QucmVtb3ZlKFxuXHQvLyBcdFx0XCJsaW1iZXJHcmlkVmlld01vdmVHdWlkZUFjdGl2ZVwiXG5cdC8vIFx0KTtcblxuXHQvLyBcdHRoaXMuJGxpbWJlckdyaWRWaWV3SGVpZ2h0QWRqdXN0R3VpZGVbMF0uY2xhc3NMaXN0LnJlbW92ZShcblx0Ly8gXHRcdFwibGltYmVyR3JpZFZpZXdIZWlnaHRBZGp1c3RHdWlkZUFjdGl2ZVwiXG5cdC8vIFx0KTtcblxuXHQvLyBcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdC8vIFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0Ly8gXHQvL1xuXHQvLyBcdGlmIChcblx0Ly8gXHRcdHRoaXMuY2FsbGJhY2tzLm1vdmVDb21wbGV0ZUNhbGxiYWNrICE9IHVuZGVmaW5lZCAmJlxuXHQvLyBcdFx0dGhpcy5jYWxsYmFja3MubW92ZUNvbXBsZXRlQ2FsbGJhY2sgIT0gbnVsbFxuXHQvLyBcdCkge1xuXHQvLyBcdFx0aWYgKGl0ZW1Nb3ZlRmxhZyA9PSB0cnVlKSB7XG5cdC8vIFx0XHRcdHVwZGF0ZWRDb29yZGluYXRlcy53aWR0aCA9IHRoaXMucG9zaXRpb25EYXRhW1xuXHQvLyBcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4XG5cdC8vIFx0XHRcdF0ud2lkdGg7XG5cdC8vIFx0XHRcdHVwZGF0ZWRDb29yZGluYXRlcy5oZWlnaHQgPSB0aGlzLnBvc2l0aW9uRGF0YVtcblx0Ly8gXHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleFxuXHQvLyBcdFx0XHRdLmhlaWdodDtcblx0Ly8gXHRcdFx0dGhpcy5jYWxsYmFja3MubW92ZUNvbXBsZXRlQ2FsbGJhY2soXG5cdC8vIFx0XHRcdFx0dHJ1ZSxcblx0Ly8gXHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleCxcblx0Ly8gXHRcdFx0XHR1cGRhdGVkQ29vcmRpbmF0ZXNcblx0Ly8gXHRcdFx0KTtcblx0Ly8gXHRcdH0gZWxzZSBpZiAodGhpcy51c2VyQWN0aW9uRGF0YS50eXBlID09IFwibW92ZVwiKSB7XG5cdC8vIFx0XHRcdHRoaXMuY2FsbGJhY2tzLm1vdmVDb21wbGV0ZUNhbGxiYWNrKFxuXHQvLyBcdFx0XHRcdGZhbHNlLFxuXHQvLyBcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4LFxuXHQvLyBcdFx0XHRcdGV2ZW50XG5cdC8vIFx0XHRcdCk7XG5cdC8vIFx0XHR9XG5cdC8vIFx0fVxuXHQvLyBcdGlmIChcblx0Ly8gXHRcdHRoaXMuY2FsbGJhY2tzLnJlc2l6ZUNvbXBsZXRlQ2FsbGJhY2sgIT0gdW5kZWZpbmVkICYmXG5cdC8vIFx0XHR0aGlzLmNhbGxiYWNrcy5yZXNpemVDb21wbGV0ZUNhbGxiYWNrICE9IG51bGxcblx0Ly8gXHQpIHtcblx0Ly8gXHRcdGlmIChpdGVtUmVzaXplRmxhZyA9PSB0cnVlKSB7XG5cdC8vIFx0XHRcdHRoaXMuY2FsbGJhY2tzLnJlc2l6ZUNvbXBsZXRlQ2FsbGJhY2soXG5cdC8vIFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXgsXG5cdC8vIFx0XHRcdFx0e1xuXHQvLyBcdFx0XHRcdFx0eDogdGhpcy5wb3NpdGlvbkRhdGFbdGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhdLngsXG5cdC8vIFx0XHRcdFx0XHR5OiB0aGlzLnBvc2l0aW9uRGF0YVt0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleF0ueSxcblx0Ly8gXHRcdFx0XHRcdGhlaWdodDogbmV3SGVpZ2h0LFxuXHQvLyBcdFx0XHRcdFx0d2lkdGg6IG5ld1dpZHRoXG5cdC8vIFx0XHRcdFx0fVxuXHQvLyBcdFx0XHQpO1xuXHQvLyBcdFx0fVxuXHQvLyBcdH1cblx0Ly8gXHQvL1xuXG5cdC8vIFx0dGhpcy51c2VyQWN0aW9uRGF0YSA9IG51bGw7XG5cdC8vIH07XG5cblx0Ly8gTGltYmVyR3JpZFZpZXcucHJvdG90eXBlLm9uVG91Y2hFbmQgPSBmdW5jdGlvbihldmVudCkge1xuXHQvLyBcdGNsZWFyVGltZW91dCh0aGlzLnNob3dNb3ZlRGVtb1RpbWVPdXRWYXJpYWJsZSk7XG5cdC8vIFx0Y2xlYXJUaW1lb3V0KHRoaXMuc2hvd1Jlc2l6ZURlbW9UaW1lT3V0VmFyaWFibGUpO1xuXHQvLyBcdHZhciBpdGVtUmVzaXplRmxhZyA9IGZhbHNlO1xuXHQvLyBcdHZhciBpdGVtTW92ZUZsYWcgPSBmYWxzZTtcblx0Ly8gXHRpZiAodGhpcy50YXBIb2xkVGltZXJDb21wbGV0ZSA9PSB0cnVlKSB7XG5cdC8vIFx0XHRpZiAodGhpcy51c2VyQWN0aW9uRGF0YS50eXBlID09IFwibW92ZVwiKSB7XG5cdC8vIFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3Qm9keVBzZXVkb0l0ZW1zW1xuXHQvLyBcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4XG5cdC8vIFx0XHRcdF0uY2xhc3NMaXN0LnJlbW92ZShcImxpbWJlckdyaWRWaWV3Qm9keVBzZXVkb0l0ZW1BY3RpdmVcIik7XG5cdC8vIFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3Qm9keVBzZXVkb0l0ZW1zW1xuXHQvLyBcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4XG5cdC8vIFx0XHRcdF0uc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUoXCIgKyAwICsgXCJweCwgXCIgKyAwICsgXCJweClcIjtcblx0Ly8gXHRcdFx0dmFyIHRvdWNoUG9zaXRpb25PbkxpbWJlckdyaWQgPSB0aGlzLmNhbGN1bGF0ZVRvdWNoUG9zT25MaW1iZXJHcmlkKFxuXHQvLyBcdFx0XHRcdGV2ZW50XG5cdC8vIFx0XHRcdCk7XG5cdC8vIFx0XHRcdGlmICh0b3VjaFBvc2l0aW9uT25MaW1iZXJHcmlkICE9IGZhbHNlKSB7XG5cdC8vIFx0XHRcdFx0dmFyIG5ld01vdmVDb29yZGluYXRlcyA9IHRoaXMuY2hlY2tOZXdNb3ZlQ29vcmRpbmF0ZXMoXG5cdC8vIFx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleCxcblx0Ly8gXHRcdFx0XHRcdHRvdWNoUG9zaXRpb25PbkxpbWJlckdyaWRcblx0Ly8gXHRcdFx0XHQpO1xuXHQvLyBcdFx0XHRcdGlmIChuZXdNb3ZlQ29vcmRpbmF0ZXMgIT0gZmFsc2UpIHtcblx0Ly8gXHRcdFx0XHRcdHZhciB1cGRhdGVkQ29vcmRpbmF0ZXMgPSB7fTtcblx0Ly8gXHRcdFx0XHRcdGlmIChcblx0Ly8gXHRcdFx0XHRcdFx0bmV3TW92ZUNvb3JkaW5hdGVzLmhhc093blByb3BlcnR5KFxuXHQvLyBcdFx0XHRcdFx0XHRcdFwicmV2aXNlZENvb3JkaW5hdGVzXCJcblx0Ly8gXHRcdFx0XHRcdFx0KVxuXHQvLyBcdFx0XHRcdFx0KSB7XG5cdC8vIFx0XHRcdFx0XHRcdHRoaXMubW92ZVBsYW5lKFxuXHQvLyBcdFx0XHRcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4LFxuXHQvLyBcdFx0XHRcdFx0XHRcdG5ld01vdmVDb29yZGluYXRlcy5yZXZpc2VkQ29vcmRpbmF0ZXMueCxcblx0Ly8gXHRcdFx0XHRcdFx0XHRuZXdNb3ZlQ29vcmRpbmF0ZXMucmV2aXNlZENvb3JkaW5hdGVzLnlcblx0Ly8gXHRcdFx0XHRcdFx0KTtcblx0Ly8gXHRcdFx0XHRcdFx0dXBkYXRlZENvb3JkaW5hdGVzLnggPVxuXHQvLyBcdFx0XHRcdFx0XHRcdG5ld01vdmVDb29yZGluYXRlcy5yZXZpc2VkQ29vcmRpbmF0ZXMueDtcblx0Ly8gXHRcdFx0XHRcdFx0dXBkYXRlZENvb3JkaW5hdGVzLnkgPVxuXHQvLyBcdFx0XHRcdFx0XHRcdG5ld01vdmVDb29yZGluYXRlcy5yZXZpc2VkQ29vcmRpbmF0ZXMueTtcblx0Ly8gXHRcdFx0XHRcdFx0aXRlbU1vdmVGbGFnID0gdHJ1ZTtcblx0Ly8gXHRcdFx0XHRcdH0gZWxzZSB7XG5cdC8vIFx0XHRcdFx0XHRcdHRoaXMubW92ZVBsYW5lKFxuXHQvLyBcdFx0XHRcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4LFxuXHQvLyBcdFx0XHRcdFx0XHRcdG5ld01vdmVDb29yZGluYXRlcy54LFxuXHQvLyBcdFx0XHRcdFx0XHRcdG5ld01vdmVDb29yZGluYXRlcy55XG5cdC8vIFx0XHRcdFx0XHRcdCk7XG5cdC8vIFx0XHRcdFx0XHRcdHVwZGF0ZWRDb29yZGluYXRlcy54ID0gbmV3TW92ZUNvb3JkaW5hdGVzLng7XG5cdC8vIFx0XHRcdFx0XHRcdHVwZGF0ZWRDb29yZGluYXRlcy55ID0gbmV3TW92ZUNvb3JkaW5hdGVzLnk7XG5cdC8vIFx0XHRcdFx0XHRcdGl0ZW1Nb3ZlRmxhZyA9IHRydWU7XG5cdC8vIFx0XHRcdFx0XHR9XG5cdC8vIFx0XHRcdFx0fSBlbHNlIHtcblx0Ly8gXHRcdFx0XHRcdHRoaXMucmV2ZXJ0U2hvd01vdmVPclJlc2l6ZURlbW8oKTtcblx0Ly8gXHRcdFx0XHR9XG5cdC8vIFx0XHRcdH0gZWxzZSB7XG5cdC8vIFx0XHRcdFx0dGhpcy5yZXZlcnRTaG93TW92ZU9yUmVzaXplRGVtbygpO1xuXHQvLyBcdFx0XHR9XG5cdC8vIFx0XHR9IGVsc2Uge1xuXHQvLyBcdFx0XHR2YXIgc2Nyb2xsVG9wID0gdGhpcy4kbGltYmVyR3JpZFZpZXdbMF0uc2Nyb2xsVG9wO1xuXHQvLyBcdFx0XHR2YXIgc2Nyb2xsTGVmdCA9IHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLnNjcm9sbExlZnQ7XG5cblx0Ly8gXHRcdFx0dmFyIHggPSB0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1Qb3NpdGlvblg7XG5cdC8vIFx0XHRcdHZhciB5ID0gdGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtUG9zaXRpb25ZO1xuXG5cdC8vIFx0XHRcdHZhciBuZXdXaWR0aCA9IHRoaXMudXNlckFjdGlvbkRhdGEubmV3V2lkdGg7XG5cdC8vIFx0XHRcdHZhciBuZXdIZWlnaHQgPSB0aGlzLnVzZXJBY3Rpb25EYXRhLm5ld0hlaWdodDtcblxuXHQvLyBcdFx0XHRpZiAobmV3V2lkdGggPiAwICYmIG5ld0hlaWdodCA+IDApIHtcblx0Ly8gXHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtc1tcblx0Ly8gXHRcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4XG5cdC8vIFx0XHRcdFx0XS5zdHlsZS53aWR0aCA9IG5ld1dpZHRoICsgXCJweFwiO1xuXHQvLyBcdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1zW1xuXHQvLyBcdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhcblx0Ly8gXHRcdFx0XHRdLnN0eWxlLmhlaWdodCA9IG5ld0hlaWdodCArIFwicHhcIjtcblx0Ly8gXHRcdFx0fVxuXG5cdC8vIFx0XHRcdGlmIChcblx0Ly8gXHRcdFx0XHR0aGlzLnJlc2l6ZVBsYW5lKFxuXHQvLyBcdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXgsXG5cdC8vIFx0XHRcdFx0XHRuZXdXaWR0aCxcblx0Ly8gXHRcdFx0XHRcdG5ld0hlaWdodFxuXHQvLyBcdFx0XHRcdCkgPT0gZmFsc2Vcblx0Ly8gXHRcdFx0KSB7XG5cdC8vIFx0XHRcdFx0dGhpcy5yZXZlcnRTaG93TW92ZU9yUmVzaXplRGVtbygpO1xuXHQvLyBcdFx0XHRcdGl0ZW1SZXNpemVGbGFnID0gdHJ1ZTtcblx0Ly8gXHRcdFx0fVxuXG5cdC8vIFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1zW1xuXHQvLyBcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4XG5cdC8vIFx0XHRcdF0uc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUoXCIgKyAwICsgXCJweCwgXCIgKyAwICsgXCJweClcIjtcblx0Ly8gXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbXNbXG5cdC8vIFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhcblx0Ly8gXHRcdFx0XS5jbGFzc0xpc3QucmVtb3ZlKFwibGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbUFjdGl2ZVwiKTtcblx0Ly8gXHRcdH1cblx0Ly8gXHR9IGVsc2Uge1xuXHQvLyBcdFx0dGhpcy50YXBIb2xkQ2FuY2VsID0gdHJ1ZTtcblx0Ly8gXHRcdGNsZWFyVGltZW91dCh0aGlzLmxvbmdUb3VjaENoZWNrKTtcblxuXHQvLyBcdFx0Ly8gY2FuY2VsaW5nIHRhcGhvbGRcblx0Ly8gXHR9XG5cblx0Ly8gXHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuXHQvLyBcdFx0XCJ0b3VjaG1vdmVcIixcblx0Ly8gXHRcdHRoaXMub25Ub3VjaE1vdmVCaW5kZWRGdW5jdGlvblZhcmlhYmxlXG5cdC8vIFx0KTtcblx0Ly8gXHR0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5yZW1vdmVFdmVudExpc3RlbmVyKFxuXHQvLyBcdFx0XCJ0b3VjaG1vdmVcIixcblx0Ly8gXHRcdHRoaXMub25Ub3VjaE1vdmVCaW5kZWRGdW5jdGlvblZhcmlhYmxlXG5cdC8vIFx0KTtcblx0Ly8gXHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuXHQvLyBcdFx0XCJ0b3VjaGVuZFwiLFxuXHQvLyBcdFx0dGhpcy5vblRvdWNoRW5kQmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHQvLyBcdCk7XG5cdC8vIFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0Ly8gXHRcdFwiY29udGV4dG1lbnVcIixcblx0Ly8gXHRcdHRoaXMub25Db250ZXh0TWVudUJpbmRlZEZ1bmN0aW9uVmFyaWFibGVcblx0Ly8gXHQpO1xuXHQvLyBcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG5cdC8vIFx0XHRcImNvbnRleHRtZW51XCIsXG5cdC8vIFx0XHR0aGlzLm9uSXRlbVRvdWNoQ29udGV4dE1lbnVCaW5kZWRGdW5jdGlvblZhcmlhYmxlXG5cdC8vIFx0KTtcblx0Ly8gXHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuXHQvLyBcdFx0XCJ0b3VjaGNhbmNlbFwiLFxuXHQvLyBcdFx0dGhpcy5vblRvdWNoQ2FuY2VsQmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHQvLyBcdCk7XG5cdC8vIFx0dGhpcy4kbGltYmVyR3JpZFZpZXdbMF0uYWRkRXZlbnRMaXN0ZW5lcihcblx0Ly8gXHRcdFwidG91Y2hzdGFydFwiLFxuXHQvLyBcdFx0dGhpcy5vbkxpbWJlckdyaWRUb3VjaFN0YXJ0RnVuY3Rpb25WYXJpYWJsZVxuXHQvLyBcdCk7XG5cblx0Ly8gXHR0aGlzLiRib2R5WzBdLmNsYXNzTGlzdC5yZW1vdmUoXG5cdC8vIFx0XHRcImxpbWJlckdyaWRWaWV3Qm9keVRhZ1N0YXRlRWxlbWVudERyYWdnaW5nT3JSZXNpemluZ1wiXG5cdC8vIFx0KTtcblx0Ly8gXHR0aGlzLiRsaW1iZXJHcmlkVmlld01vdmVHdWlkZVswXS5jbGFzc0xpc3QucmVtb3ZlKFxuXHQvLyBcdFx0XCJsaW1iZXJHcmlkVmlld01vdmVHdWlkZUFjdGl2ZVwiXG5cdC8vIFx0KTtcblxuXHQvLyBcdHRoaXMuJGxpbWJlckdyaWRWaWV3SGVpZ2h0QWRqdXN0R3VpZGVbMF0uY2xhc3NMaXN0LnJlbW92ZShcblx0Ly8gXHRcdFwibGltYmVyR3JpZFZpZXdIZWlnaHRBZGp1c3RHdWlkZUFjdGl2ZVwiXG5cdC8vIFx0KTtcblxuXHQvLyBcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdC8vIFx0Ly9cblx0Ly8gXHRpZiAoXG5cdC8vIFx0XHR0aGlzLmNhbGxiYWNrcy5tb3ZlQ29tcGxldGVDYWxsYmFjayAhPSB1bmRlZmluZWQgJiZcblx0Ly8gXHRcdHRoaXMuY2FsbGJhY2tzLm1vdmVDb21wbGV0ZUNhbGxiYWNrICE9IG51bGxcblx0Ly8gXHQpIHtcblx0Ly8gXHRcdGlmIChpdGVtTW92ZUZsYWcgPT0gdHJ1ZSkge1xuXHQvLyBcdFx0XHR1cGRhdGVkQ29vcmRpbmF0ZXMud2lkdGggPSB0aGlzLnBvc2l0aW9uRGF0YVtcblx0Ly8gXHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleFxuXHQvLyBcdFx0XHRdLndpZHRoO1xuXHQvLyBcdFx0XHR1cGRhdGVkQ29vcmRpbmF0ZXMuaGVpZ2h0ID0gdGhpcy5wb3NpdGlvbkRhdGFbXG5cdC8vIFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhcblx0Ly8gXHRcdFx0XS5oZWlnaHQ7XG5cdC8vIFx0XHRcdHRoaXMuY2FsbGJhY2tzLm1vdmVDb21wbGV0ZUNhbGxiYWNrKFxuXHQvLyBcdFx0XHRcdHRydWUsXG5cdC8vIFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXgsXG5cdC8vIFx0XHRcdFx0dXBkYXRlZENvb3JkaW5hdGVzXG5cdC8vIFx0XHRcdCk7XG5cdC8vIFx0XHR9IGVsc2UgaWYgKHRoaXMudXNlckFjdGlvbkRhdGEudHlwZSA9PSBcIm1vdmVcIikge1xuXHQvLyBcdFx0XHR0aGlzLmNhbGxiYWNrcy5tb3ZlQ29tcGxldGVDYWxsYmFjayhcblx0Ly8gXHRcdFx0XHRmYWxzZSxcblx0Ly8gXHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleCxcblx0Ly8gXHRcdFx0XHRldmVudFxuXHQvLyBcdFx0XHQpO1xuXHQvLyBcdFx0fVxuXHQvLyBcdH1cblx0Ly8gXHRpZiAoXG5cdC8vIFx0XHR0aGlzLmNhbGxiYWNrcy5yZXNpemVDb21wbGV0ZUNhbGxiYWNrICE9IHVuZGVmaW5lZCAmJlxuXHQvLyBcdFx0dGhpcy5jYWxsYmFja3MucmVzaXplQ29tcGxldGVDYWxsYmFjayAhPSBudWxsXG5cdC8vIFx0KSB7XG5cdC8vIFx0XHRpZiAoaXRlbVJlc2l6ZUZsYWcgPT0gdHJ1ZSkge1xuXHQvLyBcdFx0XHR0aGlzLmNhbGxiYWNrcy5yZXNpemVDb21wbGV0ZUNhbGxiYWNrKFxuXHQvLyBcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4LFxuXHQvLyBcdFx0XHRcdHtcblx0Ly8gXHRcdFx0XHRcdHg6IHRoaXMucG9zaXRpb25EYXRhW3RoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4XS54LFxuXHQvLyBcdFx0XHRcdFx0eTogdGhpcy5wb3NpdGlvbkRhdGFbdGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhdLnksXG5cdC8vIFx0XHRcdFx0XHRoZWlnaHQ6IG5ld0hlaWdodCxcblx0Ly8gXHRcdFx0XHRcdHdpZHRoOiBuZXdXaWR0aFxuXHQvLyBcdFx0XHRcdH1cblx0Ly8gXHRcdFx0KTtcblx0Ly8gXHRcdH1cblx0Ly8gXHR9XG5cdC8vIFx0Ly9cblxuXHQvLyBcdHRoaXMudXNlckFjdGlvbkRhdGEgPSBudWxsO1xuXHQvLyB9O1xuXG5cdC8vIExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5vbkNvbnRleHRNZW51ID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0Ly8gXHRjbGVhclRpbWVvdXQodGhpcy5zaG93TW92ZURlbW9UaW1lT3V0VmFyaWFibGUpO1xuXHQvLyBcdGNsZWFyVGltZW91dCh0aGlzLnNob3dSZXNpemVEZW1vVGltZU91dFZhcmlhYmxlKTtcblxuXHQvLyBcdHRoaXMucmV2ZXJ0U2hvd01vdmVPclJlc2l6ZURlbW8oKTtcblxuXHQvLyBcdHRoaXMuJGxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1zW1xuXHQvLyBcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhcblx0Ly8gXHRdLmNsYXNzTGlzdC5yZW1vdmUoXCJsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtQWN0aXZlXCIpO1xuXG5cdC8vIFx0dGhpcy4kbGltYmVyR3JpZFZpZXdCb2R5UHNldWRvSXRlbXNbXG5cdC8vIFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleFxuXHQvLyBcdF0uY2xhc3NMaXN0LnJlbW92ZShcImxpbWJlckdyaWRWaWV3Qm9keVBzZXVkb0l0ZW1BY3RpdmVcIik7XG5cdC8vIFx0dGhpcy4kbGltYmVyR3JpZFZpZXdCb2R5UHNldWRvSXRlbXNbXG5cdC8vIFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleFxuXHQvLyBcdF0uc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUoXCIgKyAwICsgXCJweCwgXCIgKyAwICsgXCJweClcIjtcblxuXHQvLyBcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG5cdC8vIFx0XHRcIm1vdXNlbW92ZVwiLFxuXHQvLyBcdFx0dGhpcy5vbk1vdXNlTW92ZUJpbmRlZEZ1bmN0aW9uVmFyaWFibGVcblx0Ly8gXHQpO1xuXHQvLyBcdHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoXG5cdC8vIFx0XHRcIm1vdXNlbW92ZVwiLFxuXHQvLyBcdFx0dGhpcy5vbk1vdXNlTW92ZUJpbmRlZEZ1bmN0aW9uVmFyaWFibGVcblx0Ly8gXHQpO1xuXHQvLyBcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG5cdC8vIFx0XHRcIm1vdXNldXBcIixcblx0Ly8gXHRcdHRoaXMub25Nb3VzZVVwQmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHQvLyBcdCk7XG5cblx0Ly8gXHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuXHQvLyBcdFx0XCJ0b3VjaG1vdmVcIixcblx0Ly8gXHRcdHRoaXMub25Ub3VjaE1vdmVCaW5kZWRGdW5jdGlvblZhcmlhYmxlXG5cdC8vIFx0KTtcblx0Ly8gXHR0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5yZW1vdmVFdmVudExpc3RlbmVyKFxuXHQvLyBcdFx0XCJ0b3VjaG1vdmVcIixcblx0Ly8gXHRcdHRoaXMub25Ub3VjaE1vdmVCaW5kZWRGdW5jdGlvblZhcmlhYmxlXG5cdC8vIFx0KTtcblx0Ly8gXHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuXHQvLyBcdFx0XCJ0b3VjaGVuZFwiLFxuXHQvLyBcdFx0dGhpcy5vblRvdWNoRW5kQmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHQvLyBcdCk7XG5cdC8vIFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0Ly8gXHRcdFwiY29udGV4dG1lbnVcIixcblx0Ly8gXHRcdHRoaXMub25JdGVtVG91Y2hDb250ZXh0TWVudUJpbmRlZEZ1bmN0aW9uVmFyaWFibGVcblx0Ly8gXHQpO1xuXHQvLyBcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG5cdC8vIFx0XHRcInRvdWNoY2FuY2VsXCIsXG5cdC8vIFx0XHR0aGlzLm9uVG91Y2hDYW5jZWxCaW5kZWRGdW5jdGlvblZhcmlhYmxlXG5cdC8vIFx0KTtcblxuXHQvLyBcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG5cdC8vIFx0XHRcImNvbnRleHRtZW51XCIsXG5cdC8vIFx0XHR0aGlzLm9uQ29udGV4dE1lbnVCaW5kZWRGdW5jdGlvblZhcmlhYmxlXG5cdC8vIFx0KTtcblxuXHQvLyBcdHRoaXMuJGJvZHlbMF0uY2xhc3NMaXN0LnJlbW92ZShcblx0Ly8gXHRcdFwibGltYmVyR3JpZFZpZXdCb2R5VGFnU3RhdGVFbGVtZW50RHJhZ2dpbmdPclJlc2l6aW5nXCJcblx0Ly8gXHQpO1xuXHQvLyBcdHRoaXMuJGxpbWJlckdyaWRWaWV3TW92ZUd1aWRlWzBdLmNsYXNzTGlzdC5yZW1vdmUoXG5cdC8vIFx0XHRcImxpbWJlckdyaWRWaWV3TW92ZUd1aWRlQWN0aXZlXCJcblx0Ly8gXHQpO1xuXG5cdC8vIFx0dGhpcy4kbGltYmVyR3JpZFZpZXdIZWlnaHRBZGp1c3RHdWlkZVswXS5jbGFzc0xpc3QucmVtb3ZlKFxuXHQvLyBcdFx0XCJsaW1iZXJHcmlkVmlld0hlaWdodEFkanVzdEd1aWRlQWN0aXZlXCJcblx0Ly8gXHQpO1xuXG5cdC8vIFx0dGhpcy51c2VyQWN0aW9uRGF0YSA9IG51bGw7XG5cblx0Ly8gXHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHQvLyBcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHQvLyB9O1xuXG5cdC8vIExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5vbkl0ZW1Ub3VjaENvbnRleHRNZW51ID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0Ly8gXHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHQvLyB9O1xuXG5cdC8vIExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5vblRvdWNoQ2FuY2VsID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0Ly8gXHR0aGlzLm9uQ29udGV4dE1lbnUoKTtcblx0Ly8gXHR0aGlzLnRhcEhvbGRUaW1lckNvbXBsZXRlID0gZmFsc2U7XG5cdC8vIFx0dGhpcy4kbGltYmVyR3JpZFZpZXdbMF0uYWRkRXZlbnRMaXN0ZW5lcihcblx0Ly8gXHRcdFwidG91Y2hzdGFydFwiLFxuXHQvLyBcdFx0dGhpcy5vbkxpbWJlckdyaWRUb3VjaFN0YXJ0RnVuY3Rpb25WYXJpYWJsZVxuXHQvLyBcdCk7XG5cdC8vIH07XG5cblx0Ly8gTGltYmVyR3JpZFZpZXcucHJvdG90eXBlLmNhbGN1bGF0ZU1vdXNlUG9zT25MaW1iZXJHcmlkID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0Ly8gXHR2YXIgbGltYmVyR3JpZFZpZXdQb3NpdGlvbiA9IHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHQvLyBcdGlmIChcblx0Ly8gXHRcdGV2ZW50LmNsaWVudFggPj0gbGltYmVyR3JpZFZpZXdQb3NpdGlvbi5sZWZ0ICYmXG5cdC8vIFx0XHRldmVudC5jbGllbnRYIDw9XG5cdC8vIFx0XHRcdGxpbWJlckdyaWRWaWV3UG9zaXRpb24ubGVmdCArIGxpbWJlckdyaWRWaWV3UG9zaXRpb24ud2lkdGggJiZcblx0Ly8gXHRcdChldmVudC5jbGllbnRZID49IGxpbWJlckdyaWRWaWV3UG9zaXRpb24udG9wICYmXG5cdC8vIFx0XHRcdGV2ZW50LmNsaWVudFkgPD1cblx0Ly8gXHRcdFx0XHRsaW1iZXJHcmlkVmlld1Bvc2l0aW9uLnRvcCArIGxpbWJlckdyaWRWaWV3UG9zaXRpb24uaGVpZ2h0KVxuXHQvLyBcdCkge1xuXHQvLyBcdFx0dmFyIHNjcm9sbFRvcCA9IHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLnNjcm9sbFRvcDtcblx0Ly8gXHRcdHZhciBzY3JvbGxMZWZ0ID0gdGhpcy4kbGltYmVyR3JpZFZpZXdbMF0uc2Nyb2xsTGVmdDtcblxuXHQvLyBcdFx0dmFyIG1vdXNlWE9uTGltYmVyR3JpZFZpZXcgPVxuXHQvLyBcdFx0XHRldmVudC5jbGllbnRYIC1cblx0Ly8gXHRcdFx0bGltYmVyR3JpZFZpZXdQb3NpdGlvbi5sZWZ0IC1cblx0Ly8gXHRcdFx0dGhpcy5QQURESU5HX0xFRlQgK1xuXHQvLyBcdFx0XHRzY3JvbGxMZWZ0O1xuXHQvLyBcdFx0dmFyIG1vdXNlWU9uTGltYmVyR3JpZFZpZXcgPVxuXHQvLyBcdFx0XHRldmVudC5jbGllbnRZIC1cblx0Ly8gXHRcdFx0bGltYmVyR3JpZFZpZXdQb3NpdGlvbi50b3AgLVxuXHQvLyBcdFx0XHR0aGlzLlBBRERJTkdfVE9QICtcblx0Ly8gXHRcdFx0c2Nyb2xsVG9wO1xuXG5cdC8vIFx0XHRpZiAobW91c2VYT25MaW1iZXJHcmlkVmlldyA8IDAgfHwgbW91c2VZT25MaW1iZXJHcmlkVmlldyA8IDApIHtcblx0Ly8gXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHQvLyBcdFx0fVxuXHQvLyBcdFx0cmV0dXJuIHsgeDogbW91c2VYT25MaW1iZXJHcmlkVmlldywgeTogbW91c2VZT25MaW1iZXJHcmlkVmlldyB9O1xuXHQvLyBcdH0gZWxzZSB7XG5cdC8vIFx0XHQvLyBtb3VzZSBwb2ludGVyIE5PVCBpbnNpZGUgbGltYmVyR3JpZFZpZXdcblx0Ly8gXHRcdHJldHVybiBmYWxzZTtcblx0Ly8gXHR9XG5cdC8vIH07XG5cblx0Ly8gTGltYmVyR3JpZFZpZXcucHJvdG90eXBlLmNhbGN1bGF0ZVRvdWNoUG9zT25MaW1iZXJHcmlkID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0Ly8gXHR2YXIgbGltYmVyR3JpZFZpZXdQb3NpdGlvbiA9IHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG5cdC8vIFx0aWYgKGV2ZW50LnR5cGUgPT0gXCJ0b3VjaGVuZFwiKSB7XG5cdC8vIFx0XHR2YXIgdG91Y2ggPSB7XG5cdC8vIFx0XHRcdGNsaWVudFg6IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgsXG5cdC8vIFx0XHRcdGNsaWVudFk6IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFlcblx0Ly8gXHRcdH07XG5cdC8vIFx0fSBlbHNlIHtcblx0Ly8gXHRcdHZhciB0b3VjaCA9IHtcblx0Ly8gXHRcdFx0Y2xpZW50WDogZXZlbnQudG91Y2hlc1swXS5jbGllbnRYLFxuXHQvLyBcdFx0XHRjbGllbnRZOiBldmVudC50b3VjaGVzWzBdLmNsaWVudFlcblx0Ly8gXHRcdH07XG5cdC8vIFx0fVxuXHQvLyBcdGlmIChcblx0Ly8gXHRcdHRvdWNoLmNsaWVudFggPj0gbGltYmVyR3JpZFZpZXdQb3NpdGlvbi5sZWZ0ICYmXG5cdC8vIFx0XHR0b3VjaC5jbGllbnRYIDw9XG5cdC8vIFx0XHRcdGxpbWJlckdyaWRWaWV3UG9zaXRpb24ubGVmdCArIGxpbWJlckdyaWRWaWV3UG9zaXRpb24ud2lkdGggJiZcblx0Ly8gXHRcdCh0b3VjaC5jbGllbnRZID49IGxpbWJlckdyaWRWaWV3UG9zaXRpb24udG9wICYmXG5cdC8vIFx0XHRcdHRvdWNoLmNsaWVudFkgPD1cblx0Ly8gXHRcdFx0XHRsaW1iZXJHcmlkVmlld1Bvc2l0aW9uLnRvcCArIGxpbWJlckdyaWRWaWV3UG9zaXRpb24uaGVpZ2h0KVxuXHQvLyBcdCkge1xuXHQvLyBcdFx0dmFyIHNjcm9sbFRvcCA9IHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLnNjcm9sbFRvcDtcblx0Ly8gXHRcdHZhciBzY3JvbGxMZWZ0ID0gdGhpcy4kbGltYmVyR3JpZFZpZXdbMF0uc2Nyb2xsTGVmdDtcblxuXHQvLyBcdFx0dmFyIHRvdWNoWE9uTGltYmVyR3JpZFZpZXcgPVxuXHQvLyBcdFx0XHR0b3VjaC5jbGllbnRYIC1cblx0Ly8gXHRcdFx0bGltYmVyR3JpZFZpZXdQb3NpdGlvbi5sZWZ0IC1cblx0Ly8gXHRcdFx0dGhpcy5QQURESU5HX0xFRlQgK1xuXHQvLyBcdFx0XHRzY3JvbGxMZWZ0O1xuXHQvLyBcdFx0dmFyIHRvdWNoWU9uTGltYmVyR3JpZFZpZXcgPVxuXHQvLyBcdFx0XHR0b3VjaC5jbGllbnRZIC1cblx0Ly8gXHRcdFx0bGltYmVyR3JpZFZpZXdQb3NpdGlvbi50b3AgLVxuXHQvLyBcdFx0XHR0aGlzLlBBRERJTkdfVE9QICtcblx0Ly8gXHRcdFx0c2Nyb2xsVG9wO1xuXG5cdC8vIFx0XHRpZiAodG91Y2hYT25MaW1iZXJHcmlkVmlldyA8IDAgfHwgdG91Y2hZT25MaW1iZXJHcmlkVmlldyA8IDApIHtcblx0Ly8gXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHQvLyBcdFx0fVxuXHQvLyBcdFx0cmV0dXJuIHsgeDogdG91Y2hYT25MaW1iZXJHcmlkVmlldywgeTogdG91Y2hZT25MaW1iZXJHcmlkVmlldyB9O1xuXHQvLyBcdH0gZWxzZSB7XG5cdC8vIFx0XHQvLyB0b3VjaCBOT1QgaW5zaWRlIGxpbWJlckdyaWRWaWV3XG5cdC8vIFx0XHRyZXR1cm4gZmFsc2U7XG5cdC8vIFx0fVxuXHQvLyB9O1xuXG5cdC8vIExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5jYWxjdWxhdGVUb3VjaFBvc09uTGltYmVyR3JpZEl0ZW0gPSBmdW5jdGlvbihcblx0Ly8gXHRldmVudFxuXHQvLyApIHtcblx0Ly8gXHR2YXIgbGltYmVyR3JpZFZpZXdJdGVtUG9zaXRpb24gPSB0aGlzLiRsaW1iZXJHcmlkVmlld0l0ZW1zW1xuXHQvLyBcdFx0ZXZlbnQuY3VycmVudFRhcmdldC5hdHRyaWJ1dGVzW1wiZGF0YS1pbmRleFwiXS52YWx1ZVxuXHQvLyBcdF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cblx0Ly8gXHRpZiAoXG5cdC8vIFx0XHRldmVudC50b3VjaGVzWzBdLmNsaWVudFggPj0gbGltYmVyR3JpZFZpZXdJdGVtUG9zaXRpb24ubGVmdCAmJlxuXHQvLyBcdFx0ZXZlbnQudG91Y2hlc1swXS5jbGllbnRYIDw9XG5cdC8vIFx0XHRcdGxpbWJlckdyaWRWaWV3SXRlbVBvc2l0aW9uLmxlZnQgK1xuXHQvLyBcdFx0XHRcdGxpbWJlckdyaWRWaWV3SXRlbVBvc2l0aW9uLndpZHRoICYmXG5cdC8vIFx0XHQoZXZlbnQudG91Y2hlc1swXS5jbGllbnRZID49IGxpbWJlckdyaWRWaWV3SXRlbVBvc2l0aW9uLnRvcCAmJlxuXHQvLyBcdFx0XHRldmVudC50b3VjaGVzWzBdLmNsaWVudFkgPD1cblx0Ly8gXHRcdFx0XHRsaW1iZXJHcmlkVmlld0l0ZW1Qb3NpdGlvbi50b3AgK1xuXHQvLyBcdFx0XHRcdFx0bGltYmVyR3JpZFZpZXdJdGVtUG9zaXRpb24uaGVpZ2h0KVxuXHQvLyBcdCkge1xuXHQvLyBcdFx0dmFyIHRvdWNoWE9uTGltYmVyR3JpZFZpZXcgPVxuXHQvLyBcdFx0XHRldmVudC50b3VjaGVzWzBdLmNsaWVudFggLSBsaW1iZXJHcmlkVmlld0l0ZW1Qb3NpdGlvbi5sZWZ0O1xuXHQvLyBcdFx0dmFyIHRvdWNoWU9uTGltYmVyR3JpZFZpZXcgPVxuXHQvLyBcdFx0XHRldmVudC50b3VjaGVzWzBdLmNsaWVudFkgLSBsaW1iZXJHcmlkVmlld0l0ZW1Qb3NpdGlvbi50b3A7XG5cblx0Ly8gXHRcdHJldHVybiB7IHg6IHRvdWNoWE9uTGltYmVyR3JpZFZpZXcsIHk6IHRvdWNoWU9uTGltYmVyR3JpZFZpZXcgfTtcblx0Ly8gXHR9IGVsc2Uge1xuXHQvLyBcdFx0Ly8gdG91Y2ggTk9UIGluc2lkZSBsaW1iZXJHcmlkVmlld0l0ZW1cblx0Ly8gXHRcdHJldHVybiBmYWxzZTtcblx0Ly8gXHR9XG5cdC8vIH07XG5cblx0Ly8gTGltYmVyR3JpZFZpZXcucHJvdG90eXBlLmNoZWNrTmV3TW92ZUNvb3JkaW5hdGVzID0gZnVuY3Rpb24oXG5cdC8vIFx0aW5kZXhPZk1vdmVkSXRlbSxcblx0Ly8gXHRtb3VzZVBvc2l0aW9uc1xuXHQvLyApIHtcblx0Ly8gXHRpZiAobW91c2VQb3NpdGlvbnMgPT0gZmFsc2UpIHtcblx0Ly8gXHRcdHJldHVybiBmYWxzZTtcblx0Ly8gXHR9XG5cblx0Ly8gXHR2YXIgeCA9IG1vdXNlUG9zaXRpb25zLng7XG5cdC8vIFx0dmFyIHkgPSBtb3VzZVBvc2l0aW9ucy55O1xuXHQvLyBcdHZhciB3aWR0aE9mTW92ZWRJdGVtID0gdGhpcy5wb3NpdGlvbkRhdGFbaW5kZXhPZk1vdmVkSXRlbV0ud2lkdGg7XG5cdC8vIFx0dmFyIGhlaWdodE9mTW92ZWRJdGVtID0gdGhpcy5wb3NpdGlvbkRhdGFbaW5kZXhPZk1vdmVkSXRlbV0uaGVpZ2h0O1xuXG5cdC8vIFx0dmFyIGlzSW5zaWRlID0gZmFsc2U7XG5cdC8vIFx0dmFyIGluZGV4T2ZPdmVybGFwcGluZ0l0ZW0gPSBudWxsO1xuXHQvLyBcdHZhciBsZW5ndGhfMCA9IHRoaXMucG9zaXRpb25EYXRhLmxlbmd0aDtcblx0Ly8gXHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF8wOyBpKyspIHtcblx0Ly8gXHRcdHZhciBpdGVtVG9wTGVmdCA9IFt0aGlzLnBvc2l0aW9uRGF0YVtpXS54LCB0aGlzLnBvc2l0aW9uRGF0YVtpXS55XTtcblx0Ly8gXHRcdHZhciBpdGVtVG9wUmlnaHQgPSBbXG5cdC8vIFx0XHRcdHRoaXMucG9zaXRpb25EYXRhW2ldLnggKyB0aGlzLnBvc2l0aW9uRGF0YVtpXS53aWR0aCxcblx0Ly8gXHRcdFx0dGhpcy5wb3NpdGlvbkRhdGFbaV0ueVxuXHQvLyBcdFx0XTtcblx0Ly8gXHRcdHZhciBpdGVtQm90dG9tTGVmdCA9IFtcblx0Ly8gXHRcdFx0dGhpcy5wb3NpdGlvbkRhdGFbaV0ueCxcblx0Ly8gXHRcdFx0dGhpcy5wb3NpdGlvbkRhdGFbaV0ueSArIHRoaXMucG9zaXRpb25EYXRhW2ldLmhlaWdodFxuXHQvLyBcdFx0XTtcblx0Ly8gXHRcdHZhciBpdGVtQm90dG9tUmlnaHQgPSBbXG5cdC8vIFx0XHRcdHRoaXMucG9zaXRpb25EYXRhW2ldLnggKyB0aGlzLnBvc2l0aW9uRGF0YVtpXS53aWR0aCxcblx0Ly8gXHRcdFx0dGhpcy5wb3NpdGlvbkRhdGFbaV0ueSArIHRoaXMucG9zaXRpb25EYXRhW2ldLmhlaWdodFxuXHQvLyBcdFx0XTtcblxuXHQvLyBcdFx0aWYgKFxuXHQvLyBcdFx0XHR4ID49IGl0ZW1Ub3BMZWZ0WzBdICYmXG5cdC8vIFx0XHRcdHggPD0gaXRlbVRvcFJpZ2h0WzBdICYmXG5cdC8vIFx0XHRcdHggPj0gaXRlbUJvdHRvbUxlZnRbMF0gJiZcblx0Ly8gXHRcdFx0eCA8PSBpdGVtQm90dG9tUmlnaHRbMF0gJiZcblx0Ly8gXHRcdFx0eSA+PSBpdGVtVG9wTGVmdFsxXSAmJlxuXHQvLyBcdFx0XHR5IDw9IGl0ZW1Cb3R0b21MZWZ0WzFdICYmXG5cdC8vIFx0XHRcdHkgPj0gaXRlbVRvcFJpZ2h0WzFdICYmXG5cdC8vIFx0XHRcdHkgPD0gaXRlbUJvdHRvbVJpZ2h0WzFdXG5cdC8vIFx0XHQpIHtcblx0Ly8gXHRcdFx0aXNJbnNpZGUgPSB0cnVlO1xuXHQvLyBcdFx0XHRpbmRleE9mT3ZlcmxhcHBpbmdJdGVtID0gaTtcblx0Ly8gXHRcdFx0YnJlYWs7XG5cdC8vIFx0XHR9XG5cblx0Ly8gXHRcdHZhciBsaW5lcyA9IHRoaXMuZ2V0TGluZXModGhpcy5wb3NpdGlvbkRhdGFbaV0pO1xuXG5cdC8vIFx0XHR2YXIgdG9wTGluZSA9IGxpbmVzWzBdO1xuXHQvLyBcdFx0dmFyIHJpZ2h0TGluZSA9IGxpbmVzWzFdO1xuXHQvLyBcdFx0dmFyIGJvdHRvbUxpbmUgPSBsaW5lc1syXTtcblx0Ly8gXHRcdHZhciBsZWZ0TGluZSA9IGxpbmVzWzNdO1xuXG5cdC8vIFx0XHQvLyBmb3IgVE9QIExFRlQgQ29ybmVyXG5cdC8vIFx0XHRpZiAoXG5cdC8vIFx0XHRcdHkgPCB0b3BMaW5lWzBdWzFdICYmXG5cdC8vIFx0XHRcdHggPj0gdG9wTGluZVswXVswXSAtIHRoaXMuTUFSR0lOICYmXG5cdC8vIFx0XHRcdHggPD0gdG9wTGluZVsxXVswXSArIHRoaXMuTUFSR0lOXG5cdC8vIFx0XHQpIHtcblx0Ly8gXHRcdFx0dmFyIGRpZmYgPSB0b3BMaW5lWzBdWzFdIC0geTtcblx0Ly8gXHRcdFx0aWYgKGRpZmYgPD0gdGhpcy5NQVJHSU4pIHtcblx0Ly8gXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdC8vIFx0XHRcdH1cblx0Ly8gXHRcdH1cblxuXHQvLyBcdFx0aWYgKFxuXHQvLyBcdFx0XHR5ID4gYm90dG9tTGluZVswXVsxXSAmJlxuXHQvLyBcdFx0XHR4ID49IGJvdHRvbUxpbmVbMF1bMF0gLSB0aGlzLk1BUkdJTiAmJlxuXHQvLyBcdFx0XHR4IDw9IGJvdHRvbUxpbmVbMV1bMF0gKyB0aGlzLk1BUkdJTlxuXHQvLyBcdFx0KSB7XG5cdC8vIFx0XHRcdHZhciBkaWZmID0geSAtIGJvdHRvbUxpbmVbMF1bMV07XG5cdC8vIFx0XHRcdGlmIChkaWZmIDw9IHRoaXMuTUFSR0lOKSB7XG5cdC8vIFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHQvLyBcdFx0XHR9XG5cdC8vIFx0XHR9XG5cblx0Ly8gXHRcdGlmIChcblx0Ly8gXHRcdFx0eCA+IHJpZ2h0TGluZVswXVswXSAmJlxuXHQvLyBcdFx0XHR5ID49IHJpZ2h0TGluZVswXVsxXSAtIHRoaXMuTUFSR0lOICYmXG5cdC8vIFx0XHRcdHkgPD0gcmlnaHRMaW5lWzFdWzFdICsgdGhpcy5NQVJHSU5cblx0Ly8gXHRcdCkge1xuXHQvLyBcdFx0XHR2YXIgZGlmZiA9IHggLSByaWdodExpbmVbMF1bMF07XG5cdC8vIFx0XHRcdGlmIChkaWZmIDw9IHRoaXMuTUFSR0lOKSB7XG5cdC8vIFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHQvLyBcdFx0XHR9XG5cdC8vIFx0XHR9XG5cblx0Ly8gXHRcdGlmIChcblx0Ly8gXHRcdFx0eCA8IGxlZnRMaW5lWzBdWzBdICYmXG5cdC8vIFx0XHRcdHkgPj0gbGVmdExpbmVbMF1bMV0gLSB0aGlzLk1BUkdJTiAmJlxuXHQvLyBcdFx0XHR5IDw9IGxlZnRMaW5lWzFdWzFdICsgdGhpcy5NQVJHSU5cblx0Ly8gXHRcdCkge1xuXHQvLyBcdFx0XHR2YXIgZGlmZiA9IGxlZnRMaW5lWzBdWzBdIC0geDtcblx0Ly8gXHRcdFx0aWYgKGRpZmYgPD0gdGhpcy5NQVJHSU4pIHtcblx0Ly8gXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdC8vIFx0XHRcdH1cblx0Ly8gXHRcdH1cblx0Ly8gXHRcdC8vIGZvciBUT1AgTEVGVCBDb3JuZXIgRU5EXG5cblx0Ly8gXHRcdC8vIGZvciBUT1AgUklHSFQgQ29ybmVyXG5cdC8vIFx0XHRpZiAoXG5cdC8vIFx0XHRcdHkgPiBib3R0b21MaW5lWzBdWzFdICYmXG5cdC8vIFx0XHRcdHggKyB3aWR0aE9mTW92ZWRJdGVtID49IGJvdHRvbUxpbmVbMF1bMF0gLSB0aGlzLk1BUkdJTiAmJlxuXHQvLyBcdFx0XHR4ICsgd2lkdGhPZk1vdmVkSXRlbSA8PSBib3R0b21MaW5lWzFdWzBdICsgdGhpcy5NQVJHSU5cblx0Ly8gXHRcdCkge1xuXHQvLyBcdFx0XHR2YXIgZGlmZiA9IHkgLSBib3R0b21MaW5lWzBdWzFdO1xuXHQvLyBcdFx0XHRpZiAoZGlmZiA8PSB0aGlzLk1BUkdJTikge1xuXHQvLyBcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0Ly8gXHRcdFx0fVxuXHQvLyBcdFx0fVxuXHQvLyBcdFx0Ly8gZm9yIFRPUCBSSUdIVCBDb3JuZXIgRU5EXG5cblx0Ly8gXHRcdC8vIGZvciBCT1RUT00gTEVGVCBDb3JuZXJcblx0Ly8gXHRcdGlmIChcblx0Ly8gXHRcdFx0eCA+IHJpZ2h0TGluZVswXVswXSAmJlxuXHQvLyBcdFx0XHR5ICsgaGVpZ2h0T2ZNb3ZlZEl0ZW0gPj0gcmlnaHRMaW5lWzBdWzFdIC0gdGhpcy5NQVJHSU4gJiZcblx0Ly8gXHRcdFx0eSArIGhlaWdodE9mTW92ZWRJdGVtIDw9IHJpZ2h0TGluZVsxXVsxXSArIHRoaXMuTUFSR0lOXG5cdC8vIFx0XHQpIHtcblx0Ly8gXHRcdFx0dmFyIGRpZmYgPSB4IC0gcmlnaHRMaW5lWzBdWzBdO1xuXHQvLyBcdFx0XHRpZiAoZGlmZiA8PSB0aGlzLk1BUkdJTikge1xuXHQvLyBcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0Ly8gXHRcdFx0fVxuXHQvLyBcdFx0fVxuXHQvLyBcdFx0Ly8gZm9yIEJPVFRPTSBMRUZUIENvcm5lciBFTkRcblxuXHQvLyBcdFx0aWYgKFxuXHQvLyBcdFx0XHQoeSA+IGJvdHRvbUxpbmVbMF1bMV0gJiZcblx0Ly8gXHRcdFx0XHRib3R0b21MaW5lWzBdWzBdID49IHggJiZcblx0Ly8gXHRcdFx0XHRib3R0b21MaW5lWzBdWzBdIDw9IHggKyB3aWR0aE9mTW92ZWRJdGVtKSB8fFxuXHQvLyBcdFx0XHQoeSA+IGJvdHRvbUxpbmVbMF1bMV0gJiZcblx0Ly8gXHRcdFx0XHRib3R0b21MaW5lWzFdWzBdID49IHggJiZcblx0Ly8gXHRcdFx0XHRib3R0b21MaW5lWzFdWzBdIDw9IHggKyB3aWR0aE9mTW92ZWRJdGVtKVxuXHQvLyBcdFx0KSB7XG5cdC8vIFx0XHRcdHZhciBkaWZmID0geSAtIGJvdHRvbUxpbmVbMF1bMV07XG5cdC8vIFx0XHRcdGlmIChkaWZmIDw9IHRoaXMuTUFSR0lOKSB7XG5cdC8vIFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHQvLyBcdFx0XHR9XG5cdC8vIFx0XHR9XG5cblx0Ly8gXHRcdGlmIChcblx0Ly8gXHRcdFx0KHggPiByaWdodExpbmVbMF1bMF0gJiZcblx0Ly8gXHRcdFx0XHRyaWdodExpbmVbMF1bMV0gPj0geSAmJlxuXHQvLyBcdFx0XHRcdHJpZ2h0TGluZVswXVsxXSA8PSB5ICsgaGVpZ2h0T2ZNb3ZlZEl0ZW0pIHx8XG5cdC8vIFx0XHRcdCh4ID4gcmlnaHRMaW5lWzBdWzBdICYmXG5cdC8vIFx0XHRcdFx0cmlnaHRMaW5lWzFdWzFdID49IHkgJiZcblx0Ly8gXHRcdFx0XHRyaWdodExpbmVbMV1bMV0gPD0geSArIGhlaWdodE9mTW92ZWRJdGVtKVxuXHQvLyBcdFx0KSB7XG5cdC8vIFx0XHRcdHZhciBkaWZmID0geCAtIHJpZ2h0TGluZVswXVswXTtcblx0Ly8gXHRcdFx0aWYgKGRpZmYgPD0gdGhpcy5NQVJHSU4pIHtcblx0Ly8gXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdC8vIFx0XHRcdH1cblx0Ly8gXHRcdH1cblx0Ly8gXHR9XG5cblx0Ly8gXHRpZiAoaW5kZXhPZk92ZXJsYXBwaW5nSXRlbSA9PSBudWxsKSB7XG5cdC8vIFx0XHRpZiAoXG5cdC8vIFx0XHRcdHggK1xuXHQvLyBcdFx0XHRcdHRoaXMucG9zaXRpb25EYXRhW2luZGV4T2ZNb3ZlZEl0ZW1dLndpZHRoICtcblx0Ly8gXHRcdFx0XHR0aGlzLmdldE1hcmdpbkF0UG9pbnQoeCkgPlxuXHQvLyBcdFx0XHR0aGlzLldJRFRIXG5cdC8vIFx0XHQpIHtcblx0Ly8gXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHQvLyBcdFx0fSBlbHNlIHtcblx0Ly8gXHRcdFx0cmV0dXJuIG1vdXNlUG9zaXRpb25zO1xuXHQvLyBcdFx0fVxuXHQvLyBcdH0gZWxzZSB7XG5cdC8vIFx0XHRpZiAoXG5cdC8vIFx0XHRcdHRoaXMucG9zaXRpb25EYXRhW2luZGV4T2ZPdmVybGFwcGluZ0l0ZW1dLnggK1xuXHQvLyBcdFx0XHRcdHRoaXMucG9zaXRpb25EYXRhW2luZGV4T2ZNb3ZlZEl0ZW1dLndpZHRoICtcblx0Ly8gXHRcdFx0XHR0aGlzLmdldE1hcmdpbkF0UG9pbnQoXG5cdC8vIFx0XHRcdFx0XHR0aGlzLnBvc2l0aW9uRGF0YVtpbmRleE9mT3ZlcmxhcHBpbmdJdGVtXS54XG5cdC8vIFx0XHRcdFx0KSA+XG5cdC8vIFx0XHRcdHRoaXMuV0lEVEhcblx0Ly8gXHRcdCkge1xuXHQvLyBcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdC8vIFx0XHR9IGVsc2Uge1xuXHQvLyBcdFx0XHRyZXR1cm4ge1xuXHQvLyBcdFx0XHRcdHg6IHgsXG5cdC8vIFx0XHRcdFx0eTogeSxcblx0Ly8gXHRcdFx0XHRyZXZpc2VkQ29vcmRpbmF0ZXM6IHtcblx0Ly8gXHRcdFx0XHRcdHg6IHRoaXMucG9zaXRpb25EYXRhW2luZGV4T2ZPdmVybGFwcGluZ0l0ZW1dLngsXG5cdC8vIFx0XHRcdFx0XHR5OiB0aGlzLnBvc2l0aW9uRGF0YVtpbmRleE9mT3ZlcmxhcHBpbmdJdGVtXS55XG5cdC8vIFx0XHRcdFx0fVxuXHQvLyBcdFx0XHR9O1xuXHQvLyBcdFx0fVxuXHQvLyBcdH1cblx0Ly8gfTtcblxuXHQvLyBMaW1iZXJHcmlkVmlldy5wcm90b3R5cGUuc2hvd01vdmVEZW1vID0gZnVuY3Rpb24oaW5kZXgsIG1vdXNlUG9zaXRpb24pIHtcblx0Ly8gXHRpZiAobW91c2VQb3NpdGlvbiAhPSBmYWxzZSkge1xuXHQvLyBcdFx0dmFyIG5ld01vdmVDb29yZGluYXRlcyA9IHRoaXMuY2hlY2tOZXdNb3ZlQ29vcmRpbmF0ZXMoXG5cdC8vIFx0XHRcdGluZGV4LFxuXHQvLyBcdFx0XHRtb3VzZVBvc2l0aW9uXG5cdC8vIFx0XHQpO1xuXHQvLyBcdFx0aWYgKG5ld01vdmVDb29yZGluYXRlcyA9PSBmYWxzZSkge1xuXHQvLyBcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0JvZHlQc2V1ZG9JdGVtc1tpbmRleF0uY2xhc3NMaXN0LnJlbW92ZShcblx0Ly8gXHRcdFx0XHRcImxpbWJlckdyaWRWaWV3Qm9keVBzZXVkb0l0ZW1Nb3ZlQWxsb3dcIlxuXHQvLyBcdFx0XHQpO1xuXHQvLyBcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0JvZHlQc2V1ZG9JdGVtc1tpbmRleF0uY2xhc3NMaXN0LmFkZChcblx0Ly8gXHRcdFx0XHRcImxpbWJlckdyaWRWaWV3Qm9keVBzZXVkb0l0ZW1Nb3ZlRGlzYWxsb3dcIlxuXHQvLyBcdFx0XHQpO1xuXHQvLyBcdFx0fSBlbHNlIHtcblx0Ly8gXHRcdFx0aWYgKG5ld01vdmVDb29yZGluYXRlcy5oYXNPd25Qcm9wZXJ0eShcInJldmlzZWRDb29yZGluYXRlc1wiKSkge1xuXHQvLyBcdFx0XHRcdHRoaXMubW92ZVBsYW5lRGVtbyhcblx0Ly8gXHRcdFx0XHRcdGluZGV4LFxuXHQvLyBcdFx0XHRcdFx0bmV3TW92ZUNvb3JkaW5hdGVzLnJldmlzZWRDb29yZGluYXRlcy54LFxuXHQvLyBcdFx0XHRcdFx0bmV3TW92ZUNvb3JkaW5hdGVzLnJldmlzZWRDb29yZGluYXRlcy55XG5cdC8vIFx0XHRcdFx0KTtcblx0Ly8gXHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld01vdmVHdWlkZVswXS5zdHlsZS50cmFuc2Zvcm0gPVxuXHQvLyBcdFx0XHRcdFx0XCJ0cmFuc2xhdGUoXCIgK1xuXHQvLyBcdFx0XHRcdFx0bmV3TW92ZUNvb3JkaW5hdGVzLnJldmlzZWRDb29yZGluYXRlcy54ICtcblx0Ly8gXHRcdFx0XHRcdFwicHgsIFwiICtcblx0Ly8gXHRcdFx0XHRcdG5ld01vdmVDb29yZGluYXRlcy5yZXZpc2VkQ29vcmRpbmF0ZXMueSArXG5cdC8vIFx0XHRcdFx0XHRcInB4KVwiO1xuXHQvLyBcdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3TW92ZUd1aWRlWzBdLmNsYXNzTGlzdC5hZGQoXG5cdC8vIFx0XHRcdFx0XHRcImxpbWJlckdyaWRWaWV3TW92ZUd1aWRlQWN0aXZlXCJcblx0Ly8gXHRcdFx0XHQpO1xuXHQvLyBcdFx0XHR9IGVsc2Uge1xuXHQvLyBcdFx0XHRcdHRoaXMubW92ZVBsYW5lRGVtbyhcblx0Ly8gXHRcdFx0XHRcdGluZGV4LFxuXHQvLyBcdFx0XHRcdFx0bmV3TW92ZUNvb3JkaW5hdGVzLngsXG5cdC8vIFx0XHRcdFx0XHRuZXdNb3ZlQ29vcmRpbmF0ZXMueVxuXHQvLyBcdFx0XHRcdCk7XG5cdC8vIFx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdNb3ZlR3VpZGVbMF0uc3R5bGUudHJhbnNmb3JtID1cblx0Ly8gXHRcdFx0XHRcdFwidHJhbnNsYXRlKFwiICtcblx0Ly8gXHRcdFx0XHRcdG5ld01vdmVDb29yZGluYXRlcy54ICtcblx0Ly8gXHRcdFx0XHRcdFwicHgsIFwiICtcblx0Ly8gXHRcdFx0XHRcdG5ld01vdmVDb29yZGluYXRlcy55ICtcblx0Ly8gXHRcdFx0XHRcdFwicHgpXCI7XG5cdC8vIFx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdNb3ZlR3VpZGVbMF0uY2xhc3NMaXN0LmFkZChcblx0Ly8gXHRcdFx0XHRcdFwibGltYmVyR3JpZFZpZXdNb3ZlR3VpZGVBY3RpdmVcIlxuXHQvLyBcdFx0XHRcdCk7XG5cdC8vIFx0XHRcdH1cblx0Ly8gXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdCb2R5UHNldWRvSXRlbXNbaW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoXG5cdC8vIFx0XHRcdFx0XCJsaW1iZXJHcmlkVmlld0JvZHlQc2V1ZG9JdGVtTW92ZURpc2FsbG93XCJcblx0Ly8gXHRcdFx0KTtcblx0Ly8gXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdCb2R5UHNldWRvSXRlbXNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoXG5cdC8vIFx0XHRcdFx0XCJsaW1iZXJHcmlkVmlld0JvZHlQc2V1ZG9JdGVtTW92ZUFsbG93XCJcblx0Ly8gXHRcdFx0KTtcblx0Ly8gXHRcdH1cblx0Ly8gXHR9IGVsc2Uge1xuXHQvLyBcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdCb2R5UHNldWRvSXRlbXNbaW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoXG5cdC8vIFx0XHRcdFwibGltYmVyR3JpZFZpZXdCb2R5UHNldWRvSXRlbU1vdmVBbGxvd1wiXG5cdC8vIFx0XHQpO1xuXHQvLyBcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdCb2R5UHNldWRvSXRlbXNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoXG5cdC8vIFx0XHRcdFwibGltYmVyR3JpZFZpZXdCb2R5UHNldWRvSXRlbU1vdmVEaXNhbGxvd1wiXG5cdC8vIFx0XHQpO1xuXHQvLyBcdH1cblx0Ly8gfTtcblxuXHQvLyBMaW1iZXJHcmlkVmlldy5wcm90b3R5cGUuc2hvd1Jlc2l6ZURlbW8gPSBmdW5jdGlvbihpbmRleCwgd2lkdGgsIGhlaWdodCkge1xuXHQvLyBcdGlmICh0aGlzLnJlc2l6ZVBsYW5lRGVtbyhpbmRleCwgd2lkdGgsIGhlaWdodCkgPT0gZmFsc2UpIHtcblx0Ly8gXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1zW1xuXHQvLyBcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleFxuXHQvLyBcdFx0XS5jbGFzc0xpc3QuYWRkKFwibGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbVJlc2l6ZURpc2FsbG93XCIpO1xuXHQvLyBcdH0gZWxzZSB7XG5cdC8vIFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtc1tcblx0Ly8gXHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhcblx0Ly8gXHRcdF0uY2xhc3NMaXN0LmFkZChcImxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1SZXNpemVBbGxvd1wiKTtcblx0Ly8gXHR9XG5cdC8vIH07XG5cblx0Ly8gTGltYmVyR3JpZFZpZXcucHJvdG90eXBlLnJldmVydFNob3dNb3ZlT3JSZXNpemVEZW1vID0gZnVuY3Rpb24oKSB7XG5cdC8vIFx0dmFyIGxlbmd0aF8wID0gdGhpcy4kbGltYmVyR3JpZFZpZXdJdGVtcy5sZW5ndGg7XG5cdC8vIFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdC8vIFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0l0ZW1zW2ldLnN0eWxlLnRyYW5zZm9ybSA9XG5cdC8vIFx0XHRcdFwidHJhbnNsYXRlKFwiICtcblx0Ly8gXHRcdFx0dGhpcy5wb3NpdGlvbkRhdGFbaV0ueCArXG5cdC8vIFx0XHRcdFwicHgsIFwiICtcblx0Ly8gXHRcdFx0dGhpcy5wb3NpdGlvbkRhdGFbaV0ueSArXG5cdC8vIFx0XHRcdFwicHgpXCI7XG5cdC8vIFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0l0ZW1zW2ldLmNsYXNzTGlzdC5yZW1vdmUoXG5cdC8vIFx0XHRcdFwibGltYmVyR3JpZFZpZXdJdGVtRGVtb1wiLFxuXHQvLyBcdFx0XHRcImxpbWJlckdyaWRWaWV3SXRlbVJlc2l6aW5nU3RhdGVcIlxuXHQvLyBcdFx0KTtcblx0Ly8gXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1zW2ldLmNsYXNzTGlzdC5yZW1vdmUoXG5cdC8vIFx0XHRcdFwibGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbVJlc2l6aW5nU3RhdGVcIixcblx0Ly8gXHRcdFx0XCJsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtQWN0aXZlXCJcblx0Ly8gXHRcdCk7XG5cdC8vIFx0fVxuXHQvLyB9O1xuXG5cdC8vIExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5hZGp1c3RIZWlnaHQgPSBmdW5jdGlvbih5TW91c2VPclRvdWNoUG9zaXRpb24pIHtcblx0Ly8gXHR2YXIgc2Nyb2xsSGVpZ2h0ID0gdGhpcy4kbGltYmVyR3JpZFZpZXdbMF0uc2Nyb2xsSGVpZ2h0O1xuXHQvLyBcdGlmIChzY3JvbGxIZWlnaHQgLSB5TW91c2VPclRvdWNoUG9zaXRpb24gPD0gdGhpcy5BVVRPX1NDUk9MTF9QT0lOVCkge1xuXHQvLyBcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdIZWlnaHRBZGp1c3RHdWlkZVswXS5zdHlsZS5oZWlnaHQgPVxuXHQvLyBcdFx0XHR5TW91c2VPclRvdWNoUG9zaXRpb24gK1xuXHQvLyBcdFx0XHR0aGlzLk1PVkVfT1JfUkVTSVpFX0hFSUdIVF9JTkNSRU1FTlRTICtcblx0Ly8gXHRcdFx0XCJweFwiO1xuXHQvLyBcdH1cblx0Ly8gfTtcblxuXHQvLyBMaW1iZXJHcmlkVmlldy5wcm90b3R5cGUuYWRqdXN0U2Nyb2xsID0gZnVuY3Rpb24oXG5cdC8vIFx0bGltYmVyR3JpZFZpZXdPblZpc2libGVBcmVhWSxcblx0Ly8gXHRsaW1iZXJHcmlkVmlld0hlaWdodFZpc2libGVIZWlnaHRcblx0Ly8gKSB7XG5cdC8vIFx0dmFyIHNjcm9sbFRvcCA9IHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLnNjcm9sbFRvcDtcblx0Ly8gXHQvLyB2YXIgc2Nyb2xsTGVmdCA9IHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLnNjcm9sbExlZnQ7XG5cdC8vIFx0dmFyIHByb2dyYW1TY3JvbGxlZCA9IGZhbHNlO1xuXHQvLyBcdGlmIChsaW1iZXJHcmlkVmlld09uVmlzaWJsZUFyZWFZID4gMCkge1xuXHQvLyBcdFx0aWYgKFxuXHQvLyBcdFx0XHRsaW1iZXJHcmlkVmlld0hlaWdodFZpc2libGVIZWlnaHQgLVxuXHQvLyBcdFx0XHRcdGxpbWJlckdyaWRWaWV3T25WaXNpYmxlQXJlYVkgPFxuXHQvLyBcdFx0XHR0aGlzLkFVVE9fU0NST0xMX1BPSU5UXG5cdC8vIFx0XHQpIHtcblx0Ly8gXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdbMF0uc2Nyb2xsVG9wID1cblx0Ly8gXHRcdFx0XHRzY3JvbGxUb3AgKyB0aGlzLkFVVE9fU0NST0xMX0RJU1RBTkNFO1xuXHQvLyBcdFx0XHRwcm9ncmFtU2Nyb2xsZWQgPSB0cnVlO1xuXHQvLyBcdFx0fVxuXHQvLyBcdFx0aWYgKFxuXHQvLyBcdFx0XHRsaW1iZXJHcmlkVmlld09uVmlzaWJsZUFyZWFZIDwgdGhpcy5IRUlHSFQgLyAxMCAmJlxuXHQvLyBcdFx0XHRzY3JvbGxUb3AgIT0gMFxuXHQvLyBcdFx0KSB7XG5cdC8vIFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLnNjcm9sbFRvcCA9XG5cdC8vIFx0XHRcdFx0c2Nyb2xsVG9wIC0gdGhpcy5BVVRPX1NDUk9MTF9ESVNUQU5DRTtcblx0Ly8gXHRcdFx0cHJvZ3JhbVNjcm9sbGVkID0gdHJ1ZTtcblx0Ly8gXHRcdH1cblx0Ly8gXHR9XG5cblx0Ly8gXHQvLyBpZihsaW1iZXJHcmlkVmlld09uVmlzaWJsZUFyZWFYID4gMCl7XG5cdC8vIFx0Ly8gXHRpZigobGltYmVyR3JpZFZpZXdXaWR0aFZpc2libGVXaWR0aCAtIGxpbWJlckdyaWRWaWV3T25WaXNpYmxlQXJlYVgpIDwgKHRoaXMuV0lEVEgvMTApKXtcblx0Ly8gXHQvLyBcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdbMF0uc2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQgKyAxMDA7XG5cdC8vIFx0Ly8gXHRcdHZhciBwcm9ncmFtU2Nyb2xsZWQgPSB0cnVlO1xuXHQvLyBcdC8vIFx0fVxuXHQvLyBcdC8vIFx0aWYoKGxpbWJlckdyaWRWaWV3T25WaXNpYmxlQXJlYVgpIDwgKHRoaXMuV0lEVEgvMTApICYmIHNjcm9sbExlZnQgIT0gMCl7XG5cdC8vIFx0Ly8gXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLnNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0IC0gMTAwO1xuXHQvLyBcdC8vIFx0XHR2YXIgcHJvZ3JhbVNjcm9sbGVkID0gdHJ1ZTtcblx0Ly8gXHQvLyBcdH1cblx0Ly8gXHQvLyB9XG5cdC8vIFx0cmV0dXJuIHByb2dyYW1TY3JvbGxlZDtcblx0Ly8gfTtcblxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBFVkVOVCBIQU5ETEVSUyBBTkQgQ09ERSBGT1IgSVRFTSBJTlRFUkFDVElPTiBFTkQgLS0tLS0tLS0tLS0tLS0tIC8vXG5cblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gRVNTRU5USUFMUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXHQvLyBMaW1iZXJHcmlkVmlldy5wcm90b3R5cGUuZ2V0UGxhaW5Gcm9tNFBvaW50cyA9IGZ1bmN0aW9uKHBvaW50c0FycmF5KSB7XG5cdC8vIFx0dmFyIG1pblggPSAtMTtcblx0Ly8gXHR2YXIgbWluWSA9IC0xO1xuXHQvLyBcdHZhciBtYXhYID0gLTE7XG5cdC8vIFx0dmFyIG1heFkgPSAtMTtcblx0Ly8gXHR2YXIgbGVuZ3RoXzAgPSBwb2ludHNBcnJheS5sZW5ndGg7XG5cdC8vIFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdC8vIFx0XHRpZiAocG9pbnRzQXJyYXlbaV1bMF0gPCBtaW5YIHx8IG1pblggPCAwKSB7XG5cdC8vIFx0XHRcdG1pblggPSBwb2ludHNBcnJheVtpXVswXTtcblx0Ly8gXHRcdH1cblx0Ly8gXHRcdGlmIChwb2ludHNBcnJheVtpXVswXSA+IG1heFgpIHtcblx0Ly8gXHRcdFx0bWF4WCA9IHBvaW50c0FycmF5W2ldWzBdO1xuXHQvLyBcdFx0fVxuXHQvLyBcdFx0aWYgKHBvaW50c0FycmF5W2ldWzFdIDwgbWluWSB8fCBtaW5ZIDwgMCkge1xuXHQvLyBcdFx0XHRtaW5ZID0gcG9pbnRzQXJyYXlbaV1bMV07XG5cdC8vIFx0XHR9XG5cdC8vIFx0XHRpZiAocG9pbnRzQXJyYXlbaV1bMV0gPiBtYXhZKSB7XG5cdC8vIFx0XHRcdG1heFkgPSBwb2ludHNBcnJheVtpXVsxXTtcblx0Ly8gXHRcdH1cblx0Ly8gXHR9XG5cblx0Ly8gXHR2YXIgcGxhbmUgPSB7fTtcblx0Ly8gXHRwbGFuZS54ID0gbWluWDtcblx0Ly8gXHRwbGFuZS55ID0gbWluWTtcblx0Ly8gXHRwbGFuZS53aWR0aCA9IG1heFggLSBtaW5YO1xuXHQvLyBcdHBsYW5lLmhlaWdodCA9IG1heFkgLSBtaW5ZO1xuXG5cdC8vIFx0cmV0dXJuIHBsYW5lO1xuXHQvLyB9O1xuXG5cdC8vIExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5nZXRDb29yZGluYXRlcyA9IGZ1bmN0aW9uKGl0ZW0pIHtcblx0Ly8gXHR2YXIgaXRlbVRvcExlZnQgPSBbaXRlbS54LCBpdGVtLnldO1xuXHQvLyBcdHZhciBpdGVtVG9wUmlnaHQgPSBbaXRlbS54ICsgaXRlbS53aWR0aCwgaXRlbS55XTtcblx0Ly8gXHR2YXIgaXRlbUJvdHRvbUxlZnQgPSBbaXRlbS54LCBpdGVtLnkgKyBpdGVtLmhlaWdodF07XG5cdC8vIFx0dmFyIGl0ZW1Cb3R0b21SaWdodCA9IFtpdGVtLnggKyBpdGVtLndpZHRoLCBpdGVtLnkgKyBpdGVtLmhlaWdodF07XG5cblx0Ly8gXHR2YXIgaXRlbUNvb3JkaW5hdGVzQXJyID0gW1xuXHQvLyBcdFx0aXRlbVRvcExlZnQsXG5cdC8vIFx0XHRpdGVtVG9wUmlnaHQsXG5cdC8vIFx0XHRpdGVtQm90dG9tUmlnaHQsXG5cdC8vIFx0XHRpdGVtQm90dG9tTGVmdFxuXHQvLyBcdF07XG5cblx0Ly8gXHRyZXR1cm4gaXRlbUNvb3JkaW5hdGVzQXJyO1xuXHQvLyB9O1xuXG5cdC8vIExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5nZXRMaW5lcyA9IGZ1bmN0aW9uKGl0ZW0pIHtcblx0Ly8gXHR2YXIgaXRlbVRvcExlZnQgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KFtpdGVtLngsIGl0ZW0ueV0pKTtcblx0Ly8gXHR2YXIgaXRlbVRvcFJpZ2h0ID0gSlNPTi5wYXJzZShcblx0Ly8gXHRcdEpTT04uc3RyaW5naWZ5KFtpdGVtLnggKyBpdGVtLndpZHRoLCBpdGVtLnldKVxuXHQvLyBcdCk7XG5cdC8vIFx0dmFyIGl0ZW1Cb3R0b21MZWZ0ID0gSlNPTi5wYXJzZShcblx0Ly8gXHRcdEpTT04uc3RyaW5naWZ5KFtpdGVtLngsIGl0ZW0ueSArIGl0ZW0uaGVpZ2h0XSlcblx0Ly8gXHQpO1xuXHQvLyBcdHZhciBpdGVtQm90dG9tUmlnaHQgPSBKU09OLnBhcnNlKFxuXHQvLyBcdFx0SlNPTi5zdHJpbmdpZnkoW2l0ZW0ueCArIGl0ZW0ud2lkdGgsIGl0ZW0ueSArIGl0ZW0uaGVpZ2h0XSlcblx0Ly8gXHQpO1xuXG5cdC8vIFx0dmFyIHRvcExpbmUgPSBbaXRlbVRvcExlZnQsIGl0ZW1Ub3BSaWdodF07XG5cdC8vIFx0dmFyIHJpZ2h0TGluZSA9IFtpdGVtVG9wUmlnaHQsIGl0ZW1Cb3R0b21SaWdodF07XG5cdC8vIFx0dmFyIGJvdHRvbUxpbmUgPSBbaXRlbUJvdHRvbUxlZnQsIGl0ZW1Cb3R0b21SaWdodF07XG5cdC8vIFx0dmFyIGxlZnRMaW5lID0gW2l0ZW1Ub3BMZWZ0LCBpdGVtQm90dG9tTGVmdF07XG5cblx0Ly8gXHR2YXIgYWxsTGluZXMgPSBbdG9wTGluZSwgcmlnaHRMaW5lLCBib3R0b21MaW5lLCBsZWZ0TGluZV07XG5cblx0Ly8gXHRyZXR1cm4gYWxsTGluZXM7XG5cdC8vIH07XG5cblx0Ly8gTGltYmVyR3JpZFZpZXcucHJvdG90eXBlLmFyZVBsYWluc1NhbWUgPSBmdW5jdGlvbihBLCBCKSB7XG5cdC8vIFx0aWYgKFxuXHQvLyBcdFx0QS54ID09IEIueCAmJlxuXHQvLyBcdFx0QS55ID09IEIueSAmJlxuXHQvLyBcdFx0QS53aWR0aCA9PSBCLndpZHRoICYmXG5cdC8vIFx0XHRBLmhlaWdodCA9PSBCLmhlaWdodFxuXHQvLyBcdCkge1xuXHQvLyBcdFx0cmV0dXJuIHRydWU7XG5cdC8vIFx0fSBlbHNlIHtcblx0Ly8gXHRcdHJldHVybiBmYWxzZTtcblx0Ly8gXHR9XG5cdC8vIH07XG5cblx0Ly8gTGltYmVyR3JpZFZpZXcucHJvdG90eXBlLmFyZVBsYWluc0lkZW50aWNhbCA9IGZ1bmN0aW9uKEEsIEIpIHtcblx0Ly8gXHRpZiAoQS53aWR0aCA9PSBCLndpZHRoICYmIEEuaGVpZ2h0ID09IEIuaGVpZ2h0KSB7XG5cdC8vIFx0XHRyZXR1cm4gdHJ1ZTtcblx0Ly8gXHR9IGVsc2Uge1xuXHQvLyBcdFx0cmV0dXJuIGZhbHNlO1xuXHQvLyBcdH1cblx0Ly8gfTtcblxuXHQvLyBMaW1iZXJHcmlkVmlldy5wcm90b3R5cGUuaXNWYWxpZFBsYW5lID0gZnVuY3Rpb24ocGxhbmUpIHtcblx0Ly8gXHRpZiAoXG5cdC8vIFx0XHRwbGFuZS54ID49IDAgJiZcblx0Ly8gXHRcdHBsYW5lLnkgPj0gMCAmJlxuXHQvLyBcdFx0cGxhbmUud2lkdGggPiAwICYmXG5cdC8vIFx0XHRwbGFuZS5oZWlnaHQgPiAwXG5cdC8vIFx0KSB7XG5cdC8vIFx0XHRyZXR1cm4gdHJ1ZTtcblx0Ly8gXHR9IGVsc2Uge1xuXHQvLyBcdFx0cmV0dXJuIGZhbHNlO1xuXHQvLyBcdH1cblx0Ly8gfTtcblxuXHQvLyBMaW1iZXJHcmlkVmlldy5wcm90b3R5cGUuc29ydFBsYWluc0J5QXJlYSA9IGZ1bmN0aW9uKFxuXHQvLyBcdHBsYW5lcyxcblx0Ly8gXHRvcmRlciA9IFwiZGVjXCJcblx0Ly8gKSB7XG5cdC8vIFx0aWYgKG9yZGVyID09IFwiYXNjXCIpIHtcblx0Ly8gXHRcdHBsYW5lcy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcblx0Ly8gXHRcdFx0cmV0dXJuIChcblx0Ly8gXHRcdFx0XHQoYS54ICsgYS53aWR0aCkgKiAoYS55ICsgYS5oZWlnaHQpIC1cblx0Ly8gXHRcdFx0XHQoYi54ICsgYi53aWR0aCkgKiAoYi55ICsgYi5oZWlnaHQpXG5cdC8vIFx0XHRcdCk7XG5cdC8vIFx0XHR9KTtcblx0Ly8gXHR9IGVsc2Uge1xuXHQvLyBcdFx0cGxhbmVzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuXHQvLyBcdFx0XHRyZXR1cm4gKFxuXHQvLyBcdFx0XHRcdChiLnggKyBiLndpZHRoKSAqIChiLnkgKyBiLmhlaWdodCkgLVxuXHQvLyBcdFx0XHRcdChhLnggKyBhLndpZHRoKSAqIChhLnkgKyBhLmhlaWdodClcblx0Ly8gXHRcdFx0KTtcblx0Ly8gXHRcdH0pO1xuXHQvLyBcdH1cblxuXHQvLyBcdHJldHVybiBwbGFuZXM7XG5cdC8vIH07XG5cblx0Ly8gTGltYmVyR3JpZFZpZXcucHJvdG90eXBlLnNvcnRQbGFpbnNCeUhlaWdodCA9IGZ1bmN0aW9uKFxuXHQvLyBcdHBsYW5lcyxcblx0Ly8gXHRvcmRlciA9IFwiZGVjXCJcblx0Ly8gKSB7XG5cdC8vIFx0aWYgKG9yZGVyID09IFwiYXNjXCIpIHtcblx0Ly8gXHRcdHBsYW5lcy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcblx0Ly8gXHRcdFx0cmV0dXJuIGEuaGVpZ2h0IC0gYi5oZWlnaHQ7XG5cdC8vIFx0XHR9KTtcblx0Ly8gXHR9IGVsc2Uge1xuXHQvLyBcdFx0cGxhbmVzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuXHQvLyBcdFx0XHRyZXR1cm4gYi5oZWlnaHQgLSBhLmhlaWdodDtcblx0Ly8gXHRcdH0pO1xuXHQvLyBcdH1cblxuXHQvLyBcdHJldHVybiBwbGFuZXM7XG5cdC8vIH07XG5cblx0Ly8gTGltYmVyR3JpZFZpZXcucHJvdG90eXBlLnNvcnRQbGFpbnNCeURlcHRoID0gZnVuY3Rpb24oXG5cdC8vIFx0cGxhbmVzLFxuXHQvLyBcdG9yZGVyID0gXCJkZWNcIlxuXHQvLyApIHtcblx0Ly8gXHRpZiAob3JkZXIgPT0gXCJhc2NcIikge1xuXHQvLyBcdFx0cGxhbmVzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuXHQvLyBcdFx0XHRyZXR1cm4gYS55ICsgYS5oZWlnaHQgLSAoYi55ICsgYi5oZWlnaHQpO1xuXHQvLyBcdFx0fSk7XG5cdC8vIFx0fSBlbHNlIHtcblx0Ly8gXHRcdHBsYW5lcy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcblx0Ly8gXHRcdFx0cmV0dXJuIGIueSArIGIuaGVpZ2h0IC0gKGEueSArIGEuaGVpZ2h0KTtcblx0Ly8gXHRcdH0pO1xuXHQvLyBcdH1cblxuXHQvLyBcdHJldHVybiBwbGFuZXM7XG5cdC8vIH07XG5cblx0Ly8gTGltYmVyR3JpZFZpZXcucHJvdG90eXBlLmRpdmlkZUVxdWFsTnVtYmVyID0gZnVuY3Rpb24oYSwgREVGQVVMVCA9IDApIHtcblx0Ly8gXHR2YXIgcmVzID0gYSAvIGE7XG5cdC8vIFx0aWYgKHJlcyA9PSBOYU4pIHtcblx0Ly8gXHRcdHJldHVybiAwO1xuXHQvLyBcdH0gZWxzZSB7XG5cdC8vIFx0XHRyZXR1cm4gMTtcblx0Ly8gXHR9XG5cdC8vIH07XG5cblx0Ly8gTGltYmVyR3JpZFZpZXcucHJvdG90eXBlLmdldE1hcmdpbkF0UG9pbnQgPSBmdW5jdGlvbihhKSB7XG5cdC8vIFx0aWYgKGEgPT0gMCkge1xuXHQvLyBcdFx0cmV0dXJuIDA7XG5cdC8vIFx0fSBlbHNlIHtcblx0Ly8gXHRcdHJldHVybiB0aGlzLk1BUkdJTjtcblx0Ly8gXHR9XG5cdC8vIH07XG5cblx0Ly8gTGltYmVyR3JpZFZpZXcucHJvdG90eXBlLmdldFJvd1NlcXVlbmNlID0gZnVuY3Rpb24oc2VyaWFsaXplKSB7XG5cdC8vIFx0dmFyIHJvd3MgPSB7fTtcblx0Ly8gXHR2YXIgcm93c0FyciA9IFtdO1xuXHQvLyBcdHZhciBjb2x1bW5zID0ge307XG5cblx0Ly8gXHR2YXIgbGVuZ3RoXzAgPSB0aGlzLnBvc2l0aW9uRGF0YS5sZW5ndGg7XG5cblx0Ly8gXHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF8wOyBpKyspIHtcblx0Ly8gXHRcdGlmIChyb3dzLmhhc093blByb3BlcnR5KHRoaXMucG9zaXRpb25EYXRhW2ldLnkpKSB7XG5cdC8vIFx0XHRcdHJvd3NbdGhpcy5wb3NpdGlvbkRhdGFbaV0ueV0ucHVzaChpKTtcblx0Ly8gXHRcdH0gZWxzZSB7XG5cdC8vIFx0XHRcdHJvd3NbdGhpcy5wb3NpdGlvbkRhdGFbaV0ueV0gPSBbXTtcblx0Ly8gXHRcdFx0cm93c0Fyci5wdXNoKE51bWJlcih0aGlzLnBvc2l0aW9uRGF0YVtpXS55KSk7XG5cdC8vIFx0XHRcdHJvd3NbdGhpcy5wb3NpdGlvbkRhdGFbaV0ueV0ucHVzaChpKTtcblx0Ly8gXHRcdH1cblx0Ly8gXHR9XG5cblx0Ly8gXHRyb3dzQXJyLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuXHQvLyBcdFx0cmV0dXJuIGEgLSBiO1xuXHQvLyBcdH0pO1xuXG5cdC8vIFx0dmFyIGxlbmd0aF8wID0gcm93c0Fyci5sZW5ndGg7XG5cdC8vIFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdC8vIFx0XHRyb3dzW3Jvd3NBcnJbaV1dLnNvcnQoXG5cdC8vIFx0XHRcdGZ1bmN0aW9uKGEsIGIpIHtcblx0Ly8gXHRcdFx0XHRyZXR1cm4gdGhpcy5wb3NpdGlvbkRhdGFbYV0ueCAtIHRoaXMucG9zaXRpb25EYXRhW2JdLng7XG5cdC8vIFx0XHRcdH0uYmluZCh0aGlzKVxuXHQvLyBcdFx0KTtcblx0Ly8gXHR9XG5cblx0Ly8gXHRpZiAoc2VyaWFsaXplICE9IHRydWUpIHtcblx0Ly8gXHRcdHJldHVybiB7IHJvd09yZGVyOiByb3dzQXJyLCByb3dzOiByb3dzIH07XG5cdC8vIFx0fSBlbHNlIHtcblx0Ly8gXHRcdHZhciBhcnIgPSBbXTtcblx0Ly8gXHRcdHZhciBtYXAgPSB7fTtcblx0Ly8gXHRcdHZhciBjb3VudCA9IDA7XG5cblx0Ly8gXHRcdHZhciBsZW5ndGhfMCA9IHJvd3NBcnIubGVuZ3RoO1xuXHQvLyBcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdC8vIFx0XHRcdHZhciBsZW5ndGhfMSA9IHJvd3Nbcm93c0FycltpXV0ubGVuZ3RoO1xuXHQvLyBcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGxlbmd0aF8xOyBqKyspIHtcblx0Ly8gXHRcdFx0XHRhcnIucHVzaChyb3dzW3Jvd3NBcnJbaV1dW2pdKTtcblx0Ly8gXHRcdFx0XHRtYXBbcm93c1tyb3dzQXJyW2ldXVtqXV0gPSBjb3VudCsrO1xuXHQvLyBcdFx0XHR9XG5cdC8vIFx0XHR9XG5cblx0Ly8gXHRcdHJldHVybiB7IGxpc3Q6IGFyciwgbWFwOiBtYXAgfTtcblx0Ly8gXHR9XG5cdC8vIH07XG5cblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEVTU0VOVElBTFMgRU5EIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cblx0Ly8gVU5VU0VEIENPREVcblxuXHQvLyBVTlVTRUQgQ09ERSBFTkRcblxuXHRyZXR1cm4gTGltYmVyR3JpZFZpZXc7XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCB3aW5kb3cuTGltYmVyR3JpZFZpZXc7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTg1NTcwNDE1MTczXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi9ob21lL2Fyc2VuYWxmYy8wX3N0dWZmLzBfd29yay9kZXZlbG9wbWVudC9MaW1iZXJHcmlkVmlldy9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJobXJcIjp0cnVlLFwicmVsb2FkQWxsXCI6dHJ1ZSxcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICIsImltcG9ydCB7IGFkanVzdEhlaWdodCwgYWRqdXN0U2Nyb2xsIH0gZnJvbSBcIi4uL3V0aWxzL3V0aWxzXCI7XG5pbXBvcnQgeyBnZXRNYXJnaW5BdFBvaW50IH0gZnJvbSBcIi4uL3V0aWxzL2Vzc2VudGlhbHNcIjtcblxuZXhwb3J0IGNvbnN0IG9uTGltYmVyR3JpZE1vdXNlRG93biA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibGltYmVyR3JpZFZpZXdcIikpIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoZXZlbnQud2hpY2ggIT0gMSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHRoaXMubGltYmVyR3JpZE1vdXNlRG93bkNhbmNlbCA9IGZhbHNlO1xuXHR0aGlzLmxpbWJlckdyaWRNb3VzZURvd25UaW1lckNvbXBsZXRlID0gZmFsc2U7XG5cblx0Y2xlYXJUaW1lb3V0KHRoaXMubGltYmVyR3JpZE1vdXNlRG93bkNoZWNrVGltZU91dFZhcmlhYmxlKTtcblx0dGhpcy5saW1iZXJHcmlkTW91c2VEb3duQ2hlY2tUaW1lT3V0VmFyaWFibGUgPSBzZXRUaW1lb3V0KFxuXHRcdG9uTGltYmVyR3JpZE1vdXNlRG93bkNoZWNrLmJpbmQoXG5cdFx0XHR0aGlzLFxuXHRcdFx0ZXZlbnQsXG5cdFx0XHRldmVudC5vZmZzZXRYLFxuXHRcdFx0ZXZlbnQub2Zmc2V0WVxuXHRcdCksXG5cdFx0dGhpcy5NT1VTRV9ET1dOX1RJTUVcblx0KTtcblxuXHR0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFwibW91c2Vtb3ZlXCIsXG5cdFx0dGhpcy5vbkxpbWJlckdyaWRNb3VzZU1vdmVCaW5kZWRGdW5jdGlvblZhcmlhYmxlXG5cdCk7XG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0XCJtb3VzZXVwXCIsXG5cdFx0dGhpcy5vbkxpbWJlckdyaWRNb3VzZVVwQmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHQpO1xuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFwiY29udGV4dG1lbnVcIixcblx0XHR0aGlzLm9uTGltYmVyR3JpZENvbnRleHRNZW51QmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHQpO1xufTtcblxuZXhwb3J0IGNvbnN0IG9uTGltYmVyR3JpZFRvdWNoU3RhcnQgPSBmdW5jdGlvbihldmVudCkge1xuXHRpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImxpbWJlckdyaWRWaWV3XCIpKSB7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dGhpcy5saW1iZXJHcmlkVG91Y2hTdGFydENhbmNlbCA9IGZhbHNlO1xuXHR0aGlzLmxpbWJlckdyaWRUb3VjaFN0YXJ0VGltZXJDb21wbGV0ZSA9IGZhbHNlO1xuXG5cdGNsZWFyVGltZW91dCh0aGlzLmxpbWJlckdyaWRUb3VjaFN0YXJ0Q2hlY2tUaW1lT3V0VmFyaWFibGUpO1xuXHR0aGlzLmxpbWJlckdyaWRUb3VjaFN0YXJ0Q2hlY2tUaW1lT3V0VmFyaWFibGUgPSBzZXRUaW1lb3V0KFxuXHRcdG9uTGltYmVyR3JpZFRvdWNoU3RhcnRDaGVjay5iaW5kKHRoaXMsIGV2ZW50KSxcblx0XHR0aGlzLlRPVUNIX0hPTERfVElNRVxuXHQpO1xuXG5cdHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0XCJ0b3VjaG1vdmVcIixcblx0XHR0aGlzLm9uTGltYmVyR3JpZFRvdWNoTW92ZUJpbmRlZEZ1bmN0aW9uVmFyaWFibGVcblx0KTtcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcInRvdWNoZW5kXCIsXG5cdFx0dGhpcy5vbkxpbWJlckdyaWRUb3VjaEVuZEJpbmRlZEZ1bmN0aW9uVmFyaWFibGVcblx0KTtcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcInRvdWNoY2FuY2VsXCIsXG5cdFx0dGhpcy5vbkxpbWJlckdyaWRUb3VjaENhbmNlbEJpbmRlZEZ1bmN0aW9uVmFyaWFibGVcblx0KTtcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcImNvbnRleHRtZW51XCIsXG5cdFx0dGhpcy5vbkxpbWJlckdyaWRUb3VjaENvbnRleHRNZW51QmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHQpO1xuXHR0aGlzLnVuSW5pdGlhbGl6ZUl0ZW1Ub3VjaEV2ZW50cygpO1xuXG5cdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xufTtcblxuZXhwb3J0IGNvbnN0IG9uTGltYmVyR3JpZE1vdXNlRG93bkNoZWNrID0gZnVuY3Rpb24oZXZlbnQsIG9mZnNldFgsIG9mZnNldFkpIHtcblx0aWYgKHRoaXMubGltYmVyR3JpZE1vdXNlRG93bkNhbmNlbCA9PSBmYWxzZSkge1xuXHRcdHRoaXMubGltYmVyR3JpZE1vdXNlRG93blRpbWVyQ29tcGxldGUgPSB0cnVlO1xuXG5cdFx0dGhpcy4kYm9keVswXS5jbGFzc0xpc3QuYWRkKFxuXHRcdFx0XCJsaW1iZXJHcmlkVmlld0JvZHlUYWdTdGF0ZUVsZW1lbnREcmFnZ2luZ09yUmVzaXppbmdcIixcblx0XHRcdFwibGltYmVyR3JpZFZpZXdCb2R5VGFnU3RhdGVFbGVtZW50QWRkaW5nXCJcblx0XHQpO1xuXHRcdHZhciBsZW5ndGhfMCA9IHRoaXMuJGxpbWJlckdyaWRWaWV3SXRlbXMubGVuZ3RoO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdJdGVtc1tpXS5jbGFzc0xpc3QuYWRkKFxuXHRcdFx0XHRcImxpbWJlckdyaWRWaWV3SXRlbVJlc2l6aW5nU3RhdGVcIlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHR2YXIgbGVuZ3RoXzAgPSB0aGlzLiRsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtcy5sZW5ndGg7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtc1tpXS5jbGFzc0xpc3QuYWRkKFxuXHRcdFx0XHRcImxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1SZXNpemluZ1N0YXRlXCJcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0dmFyIHNjcm9sbFRvcCA9IHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLnNjcm9sbFRvcDtcblx0XHR2YXIgc2Nyb2xsTGVmdCA9IHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLnNjcm9sbExlZnQ7XG5cdFx0dmFyIHggPSBvZmZzZXRYICsgc2Nyb2xsTGVmdCAtIHRoaXMuUEFERElOR19MRUZUO1xuXHRcdHZhciB5ID0gb2Zmc2V0WSArIHNjcm9sbFRvcCAtIHRoaXMuUEFERElOR19UT1A7XG5cblx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhID0ge1xuXHRcdFx0dHlwZTogXCJhZGRcIixcblx0XHRcdGFkZFBvc2l0aW9uWDogeCxcblx0XHRcdGFkZFBvc2l0aW9uWTogeVxuXHRcdH07XG5cblx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0FkZEl0ZW1HdWlkZVswXS5zdHlsZS5oZWlnaHQgPSAxICsgXCJweFwiO1xuXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3QWRkSXRlbUd1aWRlWzBdLnN0eWxlLndpZHRoID0gMSArIFwicHhcIjtcblx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0FkZEl0ZW1HdWlkZVswXS5zdHlsZS50cmFuc2Zvcm0gPVxuXHRcdFx0XCJ0cmFuc2xhdGUoXCIgKyB4ICsgXCJweCwgXCIgKyB5ICsgXCJweClcIjtcblxuXHRcdGlmICh0aGlzLkFERF9PUl9DVVRTUEFDRV9UT0dHTEUgPT0gXCJBRERcIikge1xuXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdBZGRJdGVtR3VpZGVbMF0uY2xhc3NMaXN0LmFkZChcblx0XHRcdFx0XCJsaW1iZXJHcmlkVmlld0FkZEl0ZW1HdWlkZUFjdGl2ZVwiXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5BRERfT1JfQ1VUU1BBQ0VfVE9HR0xFID09IFwiQ1VUU1BBQ0VcIikge1xuXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdBZGRJdGVtR3VpZGVbMF0uY2xhc3NMaXN0LmFkZChcblx0XHRcdFx0XCJsaW1iZXJHcmlkVmlld0FkZEl0ZW1HdWlkZUFjdGl2ZVwiLFxuXHRcdFx0XHRcImxpbWJlckdyaWRWaWV3QWRkSXRlbUd1aWRlQ3V0TW9kZVwiXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3SGVpZ2h0QWRqdXN0R3VpZGVbMF0uc3R5bGUuaGVpZ2h0ID0gMCArIFwicHhcIjtcblx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0hlaWdodEFkanVzdEd1aWRlWzBdLmNsYXNzTGlzdC5hZGQoXG5cdFx0XHRcImxpbWJlckdyaWRWaWV3SGVpZ2h0QWRqdXN0R3VpZGVBY3RpdmVcIlxuXHRcdCk7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gbW91c2VEb3duIGNhbmNlbCBiZWZvcmUgVGltZXJDb21wbGV0ZVxuXHR9XG59O1xuXG5leHBvcnQgY29uc3Qgb25MaW1iZXJHcmlkVG91Y2hTdGFydENoZWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0aWYgKHRoaXMubGltYmVyR3JpZFRvdWNoU3RhcnRDYW5jZWwgPT0gZmFsc2UpIHtcblx0XHR0aGlzLmxpbWJlckdyaWRUb3VjaFN0YXJ0VGltZXJDb21wbGV0ZSA9IHRydWU7XG5cblx0XHR0aGlzLiRib2R5WzBdLmNsYXNzTGlzdC5hZGQoXG5cdFx0XHRcImxpbWJlckdyaWRWaWV3Qm9keVRhZ1N0YXRlRWxlbWVudERyYWdnaW5nT3JSZXNpemluZ1wiLFxuXHRcdFx0XCJsaW1iZXJHcmlkVmlld0JvZHlUYWdTdGF0ZUVsZW1lbnRBZGRpbmdcIlxuXHRcdCk7XG5cdFx0dmFyIGxlbmd0aF8wID0gdGhpcy4kbGltYmVyR3JpZFZpZXdJdGVtcy5sZW5ndGg7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0l0ZW1zW2ldLmNsYXNzTGlzdC5hZGQoXG5cdFx0XHRcdFwibGltYmVyR3JpZFZpZXdJdGVtUmVzaXppbmdTdGF0ZVwiXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdHZhciBsZW5ndGhfMCA9IHRoaXMuJGxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1zLmxlbmd0aDtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF8wOyBpKyspIHtcblx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1zW2ldLmNsYXNzTGlzdC5hZGQoXG5cdFx0XHRcdFwibGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbVJlc2l6aW5nU3RhdGVcIlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHR2YXIgdG91Y2hQb3NpdGlvbk9uTGltYmVyR3JpZCA9IHRoaXMuY2FsY3VsYXRlVG91Y2hQb3NPbkxpbWJlckdyaWQoXG5cdFx0XHRldmVudFxuXHRcdCk7XG5cblx0XHR2YXIgeCA9IHRvdWNoUG9zaXRpb25PbkxpbWJlckdyaWQueDtcblx0XHR2YXIgeSA9IHRvdWNoUG9zaXRpb25PbkxpbWJlckdyaWQueTtcblxuXHRcdHRoaXMudXNlckFjdGlvbkRhdGEgPSB7XG5cdFx0XHR0eXBlOiBcImFkZFwiLFxuXHRcdFx0YWRkUG9zaXRpb25YOiB4LFxuXHRcdFx0YWRkUG9zaXRpb25ZOiB5XG5cdFx0fTtcblxuXHRcdHZhciByZW1vdmVBZGRJdGVtT25Ub3VjaEhvbGRHdWlkZUZ1bmN0aW9uID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0FkZEl0ZW1PblRvdWNoSG9sZEd1aWRlWzBdLmNsYXNzTGlzdC5yZW1vdmUoXG5cdFx0XHRcdFwibGltYmVyR3JpZFZpZXdBZGRJdGVtT25Ub3VjaEhvbGRHdWlkZUFjdGl2ZVwiXG5cdFx0XHQpO1xuXHRcdH07XG5cdFx0c2V0VGltZW91dChyZW1vdmVBZGRJdGVtT25Ub3VjaEhvbGRHdWlkZUZ1bmN0aW9uLmJpbmQodGhpcyksIDUwMCk7XG5cblx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0FkZEl0ZW1HdWlkZVswXS5zdHlsZS5oZWlnaHQgPSAxICsgXCJweFwiO1xuXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3QWRkSXRlbUd1aWRlWzBdLnN0eWxlLndpZHRoID0gMSArIFwicHhcIjtcblx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0FkZEl0ZW1HdWlkZVswXS5zdHlsZS50cmFuc2Zvcm0gPVxuXHRcdFx0XCJ0cmFuc2xhdGUoXCIgKyB4ICsgXCJweCwgXCIgKyB5ICsgXCJweClcIjtcblxuXHRcdGlmICh0aGlzLkFERF9PUl9DVVRTUEFDRV9UT0dHTEUgPT0gXCJBRERcIikge1xuXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdBZGRJdGVtR3VpZGVbMF0uY2xhc3NMaXN0LmFkZChcblx0XHRcdFx0XCJsaW1iZXJHcmlkVmlld0FkZEl0ZW1HdWlkZUFjdGl2ZVwiXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5BRERfT1JfQ1VUU1BBQ0VfVE9HR0xFID09IFwiQ1VUU1BBQ0VcIikge1xuXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdBZGRJdGVtR3VpZGVbMF0uY2xhc3NMaXN0LmFkZChcblx0XHRcdFx0XCJsaW1iZXJHcmlkVmlld0FkZEl0ZW1HdWlkZUFjdGl2ZVwiLFxuXHRcdFx0XHRcImxpbWJlckdyaWRWaWV3QWRkSXRlbUd1aWRlQ3V0TW9kZVwiXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3SGVpZ2h0QWRqdXN0R3VpZGVbMF0uc3R5bGUuaGVpZ2h0ID0gMCArIFwicHhcIjtcblx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0hlaWdodEFkanVzdEd1aWRlWzBdLmNsYXNzTGlzdC5hZGQoXG5cdFx0XHRcImxpbWJlckdyaWRWaWV3SGVpZ2h0QWRqdXN0R3VpZGVBY3RpdmVcIlxuXHRcdCk7XG5cblx0XHRpbnNlcnRBZGRJdGVtT25Ub3VjaEhvbGRHdWlkZVN0eWxlcy5jYWxsKHRoaXMsIHgsIHkpO1xuXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3QWRkSXRlbU9uVG91Y2hIb2xkR3VpZGVbMF0uc3R5bGUudHJhbnNmb3JtID1cblx0XHRcdFwidHJhbnNsYXRlKFwiICsgeCArIFwicHgsIFwiICsgeSArIFwicHgpXCI7XG5cdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdBZGRJdGVtT25Ub3VjaEhvbGRHdWlkZVswXS5jbGFzc0xpc3QuYWRkKFxuXHRcdFx0XCJsaW1iZXJHcmlkVmlld0FkZEl0ZW1PblRvdWNoSG9sZEd1aWRlQWN0aXZlXCJcblx0XHQpO1xuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0fSBlbHNlIHtcblx0XHQvLyB0b3VjaHN0YXJ0IGNhbmNlbCBiZWZvcmUgVGltZXJDb21wbGV0ZVxuXHR9XG59O1xuXG5leHBvcnQgY29uc3Qgb25MaW1iZXJHcmlkTW91c2VNb3ZlID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0aWYgKHRoaXMubGltYmVyR3JpZE1vdXNlRG93blRpbWVyQ29tcGxldGUgPT0gdHJ1ZSkge1xuXHRcdGlmIChcblx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3QWRkSXRlbUd1aWRlWzBdLmNsYXNzTGlzdC5jb250YWlucyhcblx0XHRcdFx0XCJsaW1iZXJHcmlkVmlld0FkZEl0ZW1HdWlkZUFkZEFsbG93XCJcblx0XHRcdCkgfHxcblx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3QWRkSXRlbUd1aWRlWzBdLmNsYXNzTGlzdC5jb250YWlucyhcblx0XHRcdFx0XCJsaW1iZXJHcmlkVmlld0FkZEl0ZW1HdWlkZUFkZERpc2FsbG93XCJcblx0XHRcdClcblx0XHQpIHtcblx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3QWRkSXRlbUd1aWRlWzBdLmNsYXNzTGlzdC5yZW1vdmUoXG5cdFx0XHRcdFwibGltYmVyR3JpZFZpZXdBZGRJdGVtR3VpZGVBZGRBbGxvd1wiLFxuXHRcdFx0XHRcImxpbWJlckdyaWRWaWV3QWRkSXRlbUd1aWRlQWRkRGlzYWxsb3dcIlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHR2YXIgc2Nyb2xsVG9wID0gdGhpcy4kbGltYmVyR3JpZFZpZXdbMF0uc2Nyb2xsVG9wO1xuXHRcdHZhciBzY3JvbGxMZWZ0ID0gdGhpcy4kbGltYmVyR3JpZFZpZXdbMF0uc2Nyb2xsTGVmdDtcblxuXHRcdHZhciB4ID0gdGhpcy51c2VyQWN0aW9uRGF0YS5hZGRQb3NpdGlvblg7XG5cdFx0dmFyIHkgPSB0aGlzLnVzZXJBY3Rpb25EYXRhLmFkZFBvc2l0aW9uWTtcblxuXHRcdHZhciBuZXdXaWR0aCA9IGV2ZW50Lm9mZnNldFggLSB4ICsgc2Nyb2xsTGVmdCAtIHRoaXMuUEFERElOR19MRUZUO1xuXHRcdHZhciBuZXdIZWlnaHQgPSBldmVudC5vZmZzZXRZIC0geSArIHNjcm9sbFRvcCAtIHRoaXMuUEFERElOR19UT1A7XG5cblx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLm5ld1dpZHRoID0gbmV3V2lkdGg7XG5cdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5uZXdIZWlnaHQgPSBuZXdIZWlnaHQ7XG5cblx0XHR2YXIgeU1vdXNlUG9zaXRpb24gPSBldmVudC5vZmZzZXRZICsgc2Nyb2xsVG9wO1xuXHRcdGFkanVzdEhlaWdodC5jYWxsKHRoaXMsIHlNb3VzZVBvc2l0aW9uKTtcblxuXHRcdGlmIChuZXdXaWR0aCA+IDAgJiYgbmV3SGVpZ2h0ID4gMCkge1xuXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdBZGRJdGVtR3VpZGVbMF0uc3R5bGUud2lkdGggPSBuZXdXaWR0aCArIFwicHhcIjtcblx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3QWRkSXRlbUd1aWRlWzBdLnN0eWxlLmhlaWdodCA9IG5ld0hlaWdodCArIFwicHhcIjtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5BRERfT1JfQ1VUU1BBQ0VfVE9HR0xFID09IFwiQUREXCIpIHtcblx0XHRcdGNsZWFyVGltZW91dCh0aGlzLmFkZEl0ZW1BbGxvd0NoZWNrVGltZU91dFZhcmlhYmxlKTtcblx0XHRcdHRoaXMuYWRkSXRlbUFsbG93Q2hlY2tUaW1lT3V0VmFyaWFibGUgPSBzZXRUaW1lb3V0KFxuXHRcdFx0XHRhZGRJdGVtQWxsb3dDaGVja1RpbWVPdXQuYmluZChcblx0XHRcdFx0XHR0aGlzLFxuXHRcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuYWRkUG9zaXRpb25YLFxuXHRcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuYWRkUG9zaXRpb25ZLFxuXHRcdFx0XHRcdG5ld1dpZHRoLFxuXHRcdFx0XHRcdG5ld0hlaWdodFxuXHRcdFx0XHQpLFxuXHRcdFx0XHR0aGlzLkRFTU9fV0FJVF9USU1FXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5BRERfT1JfQ1VUU1BBQ0VfVE9HR0xFID09IFwiQ1VUU1BBQ0VcIikge1xuXHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMuY3V0U3BhY2VBbGxvd0NoZWNrVGltZU91dFZhcmlhYmxlKTtcblx0XHRcdHRoaXMuY3V0U3BhY2VBbGxvd0NoZWNrVGltZU91dFZhcmlhYmxlID0gc2V0VGltZW91dChcblx0XHRcdFx0Y3V0U3BhY2VBbGxvd0NoZWNrVGltZU91dC5iaW5kKFxuXHRcdFx0XHRcdHRoaXMsXG5cdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5hZGRQb3NpdGlvblgsXG5cdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5hZGRQb3NpdGlvblksXG5cdFx0XHRcdFx0bmV3V2lkdGgsXG5cdFx0XHRcdFx0bmV3SGVpZ2h0XG5cdFx0XHRcdCksXG5cdFx0XHRcdHRoaXMuREVNT19XQUlUX1RJTUVcblx0XHRcdCk7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGNsZWFyVGltZW91dCh0aGlzLmxpbWJlckdyaWRNb3VzZURvd25DaGVja1RpbWVPdXRWYXJpYWJsZSk7XG5cdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdbMF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0XHRcdFwibW91c2Vtb3ZlXCIsXG5cdFx0XHR0aGlzLm9uTGltYmVyR3JpZE1vdXNlTW92ZUJpbmRlZEZ1bmN0aW9uVmFyaWFibGVcblx0XHQpO1xuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcIm1vdXNldXBcIixcblx0XHRcdHRoaXMub25MaW1iZXJHcmlkTW91c2VVcEJpbmRlZEZ1bmN0aW9uVmFyaWFibGVcblx0XHQpO1xuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcImNvbnRleHRtZW51XCIsXG5cdFx0XHR0aGlzLm9uTGltYmVyR3JpZENvbnRleHRNZW51QmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHRcdCk7XG5cdH1cblx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG59O1xuXG5leHBvcnQgY29uc3Qgb25MaW1iZXJHcmlkVG91Y2hNb3ZlID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0aWYgKHRoaXMubGltYmVyR3JpZFRvdWNoU3RhcnRUaW1lckNvbXBsZXRlID09IHRydWUpIHtcblx0XHRjb25zb2xlLmxvZyhcImxpbWJlckdyaWRUb3VjaFN0YXJ0VGltZXJDb21wbGV0ZVwiKTtcblx0XHRpZiAoXG5cdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0FkZEl0ZW1HdWlkZVswXS5jbGFzc0xpc3QuY29udGFpbnMoXG5cdFx0XHRcdFwibGltYmVyR3JpZFZpZXdBZGRJdGVtR3VpZGVBZGRBbGxvd1wiXG5cdFx0XHQpIHx8XG5cdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0FkZEl0ZW1HdWlkZVswXS5jbGFzc0xpc3QuY29udGFpbnMoXG5cdFx0XHRcdFwibGltYmVyR3JpZFZpZXdBZGRJdGVtR3VpZGVBZGREaXNhbGxvd1wiXG5cdFx0XHQpXG5cdFx0KSB7XG5cdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0FkZEl0ZW1HdWlkZVswXS5jbGFzc0xpc3QucmVtb3ZlKFxuXHRcdFx0XHRcImxpbWJlckdyaWRWaWV3QWRkSXRlbUd1aWRlQWRkQWxsb3dcIixcblx0XHRcdFx0XCJsaW1iZXJHcmlkVmlld0FkZEl0ZW1HdWlkZUFkZERpc2FsbG93XCJcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0dmFyIHNjcm9sbFRvcCA9IHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLnNjcm9sbFRvcDtcblx0XHR2YXIgc2Nyb2xsTGVmdCA9IHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLnNjcm9sbExlZnQ7XG5cblx0XHR2YXIgeCA9IHRoaXMudXNlckFjdGlvbkRhdGEuYWRkUG9zaXRpb25YO1xuXHRcdHZhciB5ID0gdGhpcy51c2VyQWN0aW9uRGF0YS5hZGRQb3NpdGlvblk7XG5cblx0XHR2YXIgdG91Y2hQb3NpdGlvbk9uTGltYmVyR3JpZCA9IHRoaXMuY2FsY3VsYXRlVG91Y2hQb3NPbkxpbWJlckdyaWQoXG5cdFx0XHRldmVudFxuXHRcdCk7XG5cblx0XHRpZiAodG91Y2hQb3NpdGlvbk9uTGltYmVyR3JpZCAhPSBmYWxzZSkge1xuXHRcdFx0dmFyIG5ld1dpZHRoID0gdG91Y2hQb3NpdGlvbk9uTGltYmVyR3JpZC54IC0geDtcblx0XHRcdHZhciBuZXdIZWlnaHQgPSB0b3VjaFBvc2l0aW9uT25MaW1iZXJHcmlkLnkgLSB5O1xuXG5cdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLm5ld1dpZHRoID0gbmV3V2lkdGg7XG5cdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLm5ld0hlaWdodCA9IG5ld0hlaWdodDtcblxuXHRcdFx0aWYgKG5ld1dpZHRoID4gMCAmJiBuZXdIZWlnaHQgPiAwKSB7XG5cdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3QWRkSXRlbUd1aWRlWzBdLnN0eWxlLndpZHRoID1cblx0XHRcdFx0XHRuZXdXaWR0aCArIFwicHhcIjtcblx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdBZGRJdGVtR3VpZGVbMF0uc3R5bGUuaGVpZ2h0ID1cblx0XHRcdFx0XHRuZXdIZWlnaHQgKyBcInB4XCI7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHRvdWNoUG9zaXRpb25PbkxpbWJlckdyaWQgIT0gZmFsc2UpIHtcblx0XHRcdHZhciBsaW1iZXJHcmlkVmlld0JvdW5kaW5nQ2xpZW50UmVjdCA9IHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0dmFyIGxpbWJlckdyaWRWaWV3V2lkdGhWaXNpYmxlV2lkdGggPVxuXHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5vZmZzZXRXaWR0aCAtXG5cdFx0XHRcdGxpbWJlckdyaWRWaWV3Qm91bmRpbmdDbGllbnRSZWN0LmxlZnQ7XG5cdFx0XHR2YXIgbGltYmVyR3JpZFZpZXdIZWlnaHRWaXNpYmxlSGVpZ2h0ID1cblx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdbMF0ub2Zmc2V0SGVpZ2h0IC1cblx0XHRcdFx0bGltYmVyR3JpZFZpZXdCb3VuZGluZ0NsaWVudFJlY3QudG9wO1xuXHRcdFx0dmFyIGxpbWJlckdyaWRWaWV3T25WaXNpYmxlQXJlYVggPVxuXHRcdFx0XHR0b3VjaFBvc2l0aW9uT25MaW1iZXJHcmlkLnggKyB0aGlzLlBBRERJTkdfTEVGVCAtIHNjcm9sbExlZnQ7XG5cdFx0XHR2YXIgbGltYmVyR3JpZFZpZXdPblZpc2libGVBcmVhWSA9XG5cdFx0XHRcdHRvdWNoUG9zaXRpb25PbkxpbWJlckdyaWQueSArIHRoaXMuUEFERElOR19UT1AgLSBzY3JvbGxUb3A7XG5cblx0XHRcdHZhciB5VG91Y2hQb3NpdGlvbiA9IHRvdWNoUG9zaXRpb25PbkxpbWJlckdyaWQueTtcblx0XHRcdGFkanVzdEhlaWdodC5jYWxsKHRoaXMsIHlUb3VjaFBvc2l0aW9uKTtcblxuXHRcdFx0dmFyIHByb2dyYW1TY3JvbGxlZCA9IGFkanVzdFNjcm9sbC5jYWxsKFxuXHRcdFx0XHR0aGlzLFxuXHRcdFx0XHRsaW1iZXJHcmlkVmlld09uVmlzaWJsZUFyZWFZLFxuXHRcdFx0XHRsaW1iZXJHcmlkVmlld0hlaWdodFZpc2libGVIZWlnaHRcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuQUREX09SX0NVVFNQQUNFX1RPR0dMRSA9PSBcIkFERFwiKSB7XG5cdFx0XHRjbGVhclRpbWVvdXQodGhpcy5hZGRJdGVtQWxsb3dDaGVja1RpbWVPdXRWYXJpYWJsZSk7XG5cdFx0XHRpZiAocHJvZ3JhbVNjcm9sbGVkICE9IHRydWUpIHtcblx0XHRcdFx0dGhpcy5hZGRJdGVtQWxsb3dDaGVja1RpbWVPdXRWYXJpYWJsZSA9IHNldFRpbWVvdXQoXG5cdFx0XHRcdFx0YWRkSXRlbUFsbG93Q2hlY2tUaW1lT3V0LmJpbmQoXG5cdFx0XHRcdFx0XHR0aGlzLFxuXHRcdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5hZGRQb3NpdGlvblgsXG5cdFx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLmFkZFBvc2l0aW9uWSxcblx0XHRcdFx0XHRcdG5ld1dpZHRoLFxuXHRcdFx0XHRcdFx0bmV3SGVpZ2h0XG5cdFx0XHRcdFx0KSxcblx0XHRcdFx0XHR0aGlzLkRFTU9fV0FJVF9USU1FXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmICh0aGlzLkFERF9PUl9DVVRTUEFDRV9UT0dHTEUgPT0gXCJDVVRTUEFDRVwiKSB7XG5cdFx0XHRjbGVhclRpbWVvdXQodGhpcy5jdXRTcGFjZUFsbG93Q2hlY2tUaW1lT3V0VmFyaWFibGUpO1xuXHRcdFx0aWYgKHByb2dyYW1TY3JvbGxlZCAhPSB0cnVlKSB7XG5cdFx0XHRcdHRoaXMuY3V0U3BhY2VBbGxvd0NoZWNrVGltZU91dFZhcmlhYmxlID0gc2V0VGltZW91dChcblx0XHRcdFx0XHRjdXRTcGFjZUFsbG93Q2hlY2tUaW1lT3V0LmJpbmQoXG5cdFx0XHRcdFx0XHR0aGlzLFxuXHRcdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5hZGRQb3NpdGlvblgsXG5cdFx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLmFkZFBvc2l0aW9uWSxcblx0XHRcdFx0XHRcdG5ld1dpZHRoLFxuXHRcdFx0XHRcdFx0bmV3SGVpZ2h0XG5cdFx0XHRcdFx0KSxcblx0XHRcdFx0XHR0aGlzLkRFTU9fV0FJVF9USU1FXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdH0gZWxzZSB7XG5cdFx0Y2xlYXJUaW1lb3V0KHRoaXMubGltYmVyR3JpZFRvdWNoU3RhcnRDaGVja1RpbWVPdXRWYXJpYWJsZSk7XG5cdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdbMF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0XHRcdFwidG91Y2htb3ZlXCIsXG5cdFx0XHR0aGlzLm9uTGltYmVyR3JpZFRvdWNoTW92ZUJpbmRlZEZ1bmN0aW9uVmFyaWFibGVcblx0XHQpO1xuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcInRvdWNoZW5kXCIsXG5cdFx0XHR0aGlzLm9uTGltYmVyR3JpZFRvdWNoRW5kQmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHRcdCk7XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0XHRcdFwidG91Y2hjYW5jZWxcIixcblx0XHRcdHRoaXMub25MaW1iZXJHcmlkVG91Y2hDYW5jZWxCaW5kZWRGdW5jdGlvblZhcmlhYmxlXG5cdFx0KTtcblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuXHRcdFx0XCJjb250ZXh0bWVudVwiLFxuXHRcdFx0dGhpcy5vbkxpbWJlckdyaWRUb3VjaENvbnRleHRNZW51QmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHRcdCk7XG5cdFx0dGhpcy5pbml0aWFsaXplSXRlbVRvdWNoRXZlbnRzKCk7XG5cdH1cblxuXHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbn07XG5cbmV4cG9ydCBjb25zdCBvbkxpbWJlckdyaWRNb3VzZVVwID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0Y2xlYXJUaW1lb3V0KHRoaXMuYWRkSXRlbUFsbG93Q2hlY2tUaW1lT3V0VmFyaWFibGUpO1xuXHRjbGVhclRpbWVvdXQodGhpcy5saW1iZXJHcmlkTW91c2VEb3duQ2hlY2tUaW1lT3V0VmFyaWFibGUpO1xuXHR2YXIgaXRlbUFkZGVkRmxhZyA9IGZhbHNlO1xuXHRpZiAodGhpcy5saW1iZXJHcmlkTW91c2VEb3duVGltZXJDb21wbGV0ZSA9PSB0cnVlKSB7XG5cdFx0aWYgKHRoaXMuQUREX09SX0NVVFNQQUNFX1RPR0dMRSA9PSBcIkFERFwiKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdGFkZEl0ZW1BbGxvd0NoZWNrLmNhbGwoXG5cdFx0XHRcdFx0dGhpcyxcblx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLmFkZFBvc2l0aW9uWCxcblx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLmFkZFBvc2l0aW9uWSxcblx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLm5ld1dpZHRoLFxuXHRcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEubmV3SGVpZ2h0XG5cdFx0XHRcdClcblx0XHRcdCkge1xuXHRcdFx0XHR2YXIgaXRlbSA9IHtcblx0XHRcdFx0XHR4OiB0aGlzLnVzZXJBY3Rpb25EYXRhLmFkZFBvc2l0aW9uWCxcblx0XHRcdFx0XHR5OiB0aGlzLnVzZXJBY3Rpb25EYXRhLmFkZFBvc2l0aW9uWSxcblx0XHRcdFx0XHR3aWR0aDogdGhpcy51c2VyQWN0aW9uRGF0YS5uZXdXaWR0aCxcblx0XHRcdFx0XHRoZWlnaHQ6IHRoaXMudXNlckFjdGlvbkRhdGEubmV3SGVpZ2h0XG5cdFx0XHRcdH07XG5cblx0XHRcdFx0dmFyIHNjcm9sbFRvcCA9IHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLnNjcm9sbFRvcDtcblxuXHRcdFx0XHR2YXIgcmVuZGVyRGV0YWlscyA9IHRoaXMuYWRkSXRlbXNBdFBvc2l0aW9ucyhcblx0XHRcdFx0XHRbaXRlbV0sXG5cdFx0XHRcdFx0ZmFsc2UsXG5cdFx0XHRcdFx0XCJhZGRJdGVtSW50ZXJhY3RpdmVcIlxuXHRcdFx0XHQpO1xuXHRcdFx0XHRpdGVtQWRkZWRGbGFnID0gdHJ1ZTtcblxuXHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5zY3JvbGxUb3AgPSBzY3JvbGxUb3A7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmICh0aGlzLkFERF9PUl9DVVRTUEFDRV9UT0dHTEUgPT0gXCJDVVRTUEFDRVwiKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdGN1dFNwYWNlQWxsb3dDaGVjay5jYWxsKFxuXHRcdFx0XHRcdHRoaXMsXG5cdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5hZGRQb3NpdGlvblgsXG5cdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5hZGRQb3NpdGlvblksXG5cdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5uZXdXaWR0aCxcblx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLm5ld0hlaWdodFxuXHRcdFx0XHQpXG5cdFx0XHQpIHtcblx0XHRcdFx0dGhpcy5zaGlmdEl0ZW1zVXAoXG5cdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5hZGRQb3NpdGlvblksXG5cdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5uZXdIZWlnaHRcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0dGhpcy5saW1iZXJHcmlkTW91c2VEb3duQ2FuY2VsID0gdHJ1ZTtcblx0fVxuXHRvbkxpbWJlckdyaWRDb250ZXh0TWVudS5jYWxsKHRoaXMpO1xuXHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRpZiAoXG5cdFx0dGhpcy5jYWxsYmFja3MuYWRkQ29tcGxldGVDYWxsYmFjayAhPSB1bmRlZmluZWQgJiZcblx0XHR0aGlzLmNhbGxiYWNrcy5hZGRDb21wbGV0ZUNhbGxiYWNrICE9IG51bGxcblx0KSB7XG5cdFx0aWYgKGl0ZW1BZGRlZEZsYWcgPT0gdHJ1ZSkge1xuXHRcdFx0dGhpcy5jYWxsYmFja3MuYWRkQ29tcGxldGVDYWxsYmFjayhcblx0XHRcdFx0cmVuZGVyRGV0YWlscy5pdGVtcyxcblx0XHRcdFx0aXRlbS53aWR0aCxcblx0XHRcdFx0aXRlbS5oZWlnaHQsXG5cdFx0XHRcdFwiYWRkSXRlbUludGVyYWN0aXZlXCJcblx0XHRcdCk7XG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQgY29uc3Qgb25MaW1iZXJHcmlkVG91Y2hFbmQgPSBmdW5jdGlvbihldmVudCkge1xuXHRjbGVhclRpbWVvdXQodGhpcy5hZGRJdGVtQWxsb3dDaGVja1RpbWVPdXRWYXJpYWJsZSk7XG5cdGNsZWFyVGltZW91dCh0aGlzLmxpbWJlckdyaWRUb3VjaFN0YXJ0Q2hlY2tUaW1lT3V0VmFyaWFibGUpO1xuXHR2YXIgaXRlbUFkZGVkRmxhZyA9IGZhbHNlO1xuXHRpZiAodGhpcy5saW1iZXJHcmlkVG91Y2hTdGFydFRpbWVyQ29tcGxldGUgPT0gdHJ1ZSkge1xuXHRcdGlmICh0aGlzLkFERF9PUl9DVVRTUEFDRV9UT0dHTEUgPT0gXCJBRERcIikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRhZGRJdGVtQWxsb3dDaGVjay5jYWxsKFxuXHRcdFx0XHRcdHRoaXMsXG5cdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5hZGRQb3NpdGlvblgsXG5cdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5hZGRQb3NpdGlvblksXG5cdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5uZXdXaWR0aCxcblx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLm5ld0hlaWdodFxuXHRcdFx0XHQpXG5cdFx0XHQpIHtcblx0XHRcdFx0dmFyIGl0ZW0gPSB7XG5cdFx0XHRcdFx0eDogdGhpcy51c2VyQWN0aW9uRGF0YS5hZGRQb3NpdGlvblgsXG5cdFx0XHRcdFx0eTogdGhpcy51c2VyQWN0aW9uRGF0YS5hZGRQb3NpdGlvblksXG5cdFx0XHRcdFx0d2lkdGg6IHRoaXMudXNlckFjdGlvbkRhdGEubmV3V2lkdGgsXG5cdFx0XHRcdFx0aGVpZ2h0OiB0aGlzLnVzZXJBY3Rpb25EYXRhLm5ld0hlaWdodFxuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdHZhciBzY3JvbGxUb3AgPSB0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5zY3JvbGxUb3A7XG5cblx0XHRcdFx0dmFyIHJlbmRlckRldGFpbHMgPSB0aGlzLmFkZEl0ZW1zQXRQb3NpdGlvbnMoXG5cdFx0XHRcdFx0W2l0ZW1dLFxuXHRcdFx0XHRcdGZhbHNlLFxuXHRcdFx0XHRcdFwiYWRkSXRlbUludGVyYWN0aXZlXCJcblx0XHRcdFx0KTtcblx0XHRcdFx0aXRlbUFkZGVkRmxhZyA9IHRydWU7XG5cblx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdbMF0uc2Nyb2xsVG9wID0gc2Nyb2xsVG9wO1xuXG5cdFx0XHRcdHRoaXMubGltYmVyR3JpZFRvdWNoU3RhcnRUaW1lckNvbXBsZXRlID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmICh0aGlzLkFERF9PUl9DVVRTUEFDRV9UT0dHTEUgPT0gXCJDVVRTUEFDRVwiKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdGN1dFNwYWNlQWxsb3dDaGVjay5jYWxsKFxuXHRcdFx0XHRcdHRoaXMsXG5cdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5hZGRQb3NpdGlvblgsXG5cdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5hZGRQb3NpdGlvblksXG5cdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5uZXdXaWR0aCxcblx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLm5ld0hlaWdodFxuXHRcdFx0XHQpXG5cdFx0XHQpIHtcblx0XHRcdFx0dGhpcy5zaGlmdEl0ZW1zVXAoXG5cdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5hZGRQb3NpdGlvblksXG5cdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5uZXdIZWlnaHRcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0dGhpcy5saW1iZXJHcmlkVG91Y2hTdGFydENhbmNlbCA9IHRydWU7XG5cdH1cblx0dGhpcy5saW1iZXJHcmlkVG91Y2hTdGFydFRpbWVyQ29tcGxldGUgPSBmYWxzZTtcblx0b25MaW1iZXJHcmlkQ29udGV4dE1lbnUuY2FsbCh0aGlzKTtcblx0dGhpcy5pbml0aWFsaXplSXRlbVRvdWNoRXZlbnRzKCk7XG5cblx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0aWYgKFxuXHRcdHRoaXMuY2FsbGJhY2tzLmFkZENvbXBsZXRlQ2FsbGJhY2sgIT0gdW5kZWZpbmVkICYmXG5cdFx0dGhpcy5jYWxsYmFja3MuYWRkQ29tcGxldGVDYWxsYmFjayAhPSBudWxsXG5cdCkge1xuXHRcdGlmIChpdGVtQWRkZWRGbGFnID09IHRydWUpIHtcblx0XHRcdHRoaXMuY2FsbGJhY2tzLmFkZENvbXBsZXRlQ2FsbGJhY2soXG5cdFx0XHRcdHJlbmRlckRldGFpbHMuaXRlbXMsXG5cdFx0XHRcdGl0ZW0ud2lkdGgsXG5cdFx0XHRcdGl0ZW0uaGVpZ2h0LFxuXHRcdFx0XHRcImFkZEl0ZW1JbnRlcmFjdGl2ZVwiXG5cdFx0XHQpO1xuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IGNvbnN0IG9uTGltYmVyR3JpZFRvdWNoQ2FuY2VsID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0Y2xlYXJUaW1lb3V0KHRoaXMuYWRkSXRlbUFsbG93Q2hlY2tUaW1lT3V0VmFyaWFibGUpO1xuXHRjbGVhclRpbWVvdXQodGhpcy5saW1iZXJHcmlkVG91Y2hTdGFydENoZWNrVGltZU91dFZhcmlhYmxlKTtcblx0dGhpcy5saW1iZXJHcmlkVG91Y2hTdGFydENhbmNlbCA9IGZhbHNlO1xuXHR0aGlzLmxpbWJlckdyaWRUb3VjaFN0YXJ0VGltZXJDb21wbGV0ZSA9IGZhbHNlO1xuXHRvbkxpbWJlckdyaWRDb250ZXh0TWVudS5jYWxsKHRoaXMpO1xuXHR0aGlzLmluaXRpYWxpemVJdGVtVG91Y2hFdmVudHMoKTtcblxuXHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbn07XG5cbmV4cG9ydCBjb25zdCBvbkxpbWJlckdyaWRUb3VjaENvbnRleHRNZW51ID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBvbkxpbWJlckdyaWRDb250ZXh0TWVudSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdGlmIChldmVudCAhPSB1bmRlZmluZWQpIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHR9XG5cblx0dGhpcy4kbGltYmVyR3JpZFZpZXdBZGRJdGVtR3VpZGVbMF0uY2xhc3NMaXN0LnJlbW92ZShcblx0XHRcImxpbWJlckdyaWRWaWV3QWRkSXRlbUd1aWRlQWN0aXZlXCIsXG5cdFx0XCJsaW1iZXJHcmlkVmlld0FkZEl0ZW1HdWlkZUN1dE1vZGVcIixcblx0XHRcImxpbWJlckdyaWRWaWV3QWRkSXRlbUd1aWRlQWRkQWxsb3dcIixcblx0XHRcImxpbWJlckdyaWRWaWV3QWRkSXRlbUd1aWRlQWRkRGlzYWxsb3dcIlxuXHQpO1xuXHR0aGlzLiRsaW1iZXJHcmlkVmlld0hlaWdodEFkanVzdEd1aWRlWzBdLmNsYXNzTGlzdC5yZW1vdmUoXG5cdFx0XCJsaW1iZXJHcmlkVmlld0hlaWdodEFkanVzdEd1aWRlQWN0aXZlXCJcblx0KTtcblx0dGhpcy4kbGltYmVyR3JpZFZpZXdIZWlnaHRBZGp1c3RHdWlkZVswXS5zdHlsZS5oZWlnaHQgPSAwICsgXCJweFwiO1xuXG5cdHRoaXMuJGJvZHlbMF0uY2xhc3NMaXN0LnJlbW92ZShcblx0XHRcImxpbWJlckdyaWRWaWV3Qm9keVRhZ1N0YXRlRWxlbWVudERyYWdnaW5nT3JSZXNpemluZ1wiLFxuXHRcdFwibGltYmVyR3JpZFZpZXdCb2R5VGFnU3RhdGVFbGVtZW50QWRkaW5nXCJcblx0KTtcblx0dmFyIGxlbmd0aF8wID0gdGhpcy4kbGltYmVyR3JpZFZpZXdJdGVtcy5sZW5ndGg7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3SXRlbXNbaV0uY2xhc3NMaXN0LnJlbW92ZShcblx0XHRcdFwibGltYmVyR3JpZFZpZXdJdGVtUmVzaXppbmdTdGF0ZVwiXG5cdFx0KTtcblx0fVxuXG5cdHZhciBsZW5ndGhfMCA9IHRoaXMuJGxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1zLmxlbmd0aDtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbXNbaV0uY2xhc3NMaXN0LnJlbW92ZShcblx0XHRcdFwibGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbVJlc2l6aW5nU3RhdGVcIlxuXHRcdCk7XG5cdH1cblxuXHR0aGlzLiRsaW1iZXJHcmlkVmlld0FkZEl0ZW1PblRvdWNoSG9sZEd1aWRlWzBdLmNsYXNzTGlzdC5yZW1vdmUoXG5cdFx0XCJsaW1iZXJHcmlkVmlld0FkZEl0ZW1PblRvdWNoSG9sZEd1aWRlQWN0aXZlXCJcblx0KTtcblxuXHR0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5yZW1vdmVFdmVudExpc3RlbmVyKFxuXHRcdFwibW91c2Vtb3ZlXCIsXG5cdFx0dGhpcy5vbkxpbWJlckdyaWRNb3VzZU1vdmVCaW5kZWRGdW5jdGlvblZhcmlhYmxlXG5cdCk7XG5cdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG5cdFx0XCJtb3VzZXVwXCIsXG5cdFx0dGhpcy5vbkxpbWJlckdyaWRNb3VzZVVwQmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHQpO1xuXHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuXHRcdFwiY29udGV4dG1lbnVcIixcblx0XHR0aGlzLm9uTGltYmVyR3JpZENvbnRleHRNZW51QmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHQpO1xuXG5cdHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoXG5cdFx0XCJ0b3VjaG1vdmVcIixcblx0XHR0aGlzLm9uTGltYmVyR3JpZFRvdWNoTW92ZUJpbmRlZEZ1bmN0aW9uVmFyaWFibGVcblx0KTtcblx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0XHRcInRvdWNoZW5kXCIsXG5cdFx0dGhpcy5vbkxpbWJlckdyaWRUb3VjaEVuZEJpbmRlZEZ1bmN0aW9uVmFyaWFibGVcblx0KTtcblx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0XHRcInRvdWNoY2FuY2VsXCIsXG5cdFx0dGhpcy5vbkxpbWJlckdyaWRUb3VjaENhbmNlbEJpbmRlZEZ1bmN0aW9uVmFyaWFibGVcblx0KTtcblx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0XHRcImNvbnRleHRtZW51XCIsXG5cdFx0dGhpcy5vbkxpbWJlckdyaWRUb3VjaENvbnRleHRNZW51QmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHQpO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZEl0ZW1BbGxvd0NoZWNrVGltZU91dCA9IGZ1bmN0aW9uKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcblx0aWYgKHRoaXMuYWRkSXRlbUFsbG93Q2hlY2suY2FsbCh0aGlzLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KSA9PSBmYWxzZSkge1xuXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3QWRkSXRlbUd1aWRlWzBdLmNsYXNzTGlzdC5yZW1vdmUoXG5cdFx0XHRcImxpbWJlckdyaWRWaWV3QWRkSXRlbUd1aWRlQWRkQWxsb3dcIlxuXHRcdCk7XG5cdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdBZGRJdGVtR3VpZGVbMF0uY2xhc3NMaXN0LmFkZChcblx0XHRcdFwibGltYmVyR3JpZFZpZXdBZGRJdGVtR3VpZGVBZGREaXNhbGxvd1wiXG5cdFx0KTtcblx0fSBlbHNlIHtcblx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0FkZEl0ZW1HdWlkZVswXS5jbGFzc0xpc3QucmVtb3ZlKFxuXHRcdFx0XCJsaW1iZXJHcmlkVmlld0FkZEl0ZW1HdWlkZUFkZERpc2FsbG93XCJcblx0XHQpO1xuXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3QWRkSXRlbUd1aWRlWzBdLmNsYXNzTGlzdC5hZGQoXG5cdFx0XHRcImxpbWJlckdyaWRWaWV3QWRkSXRlbUd1aWRlQWRkQWxsb3dcIlxuXHRcdCk7XG5cdH1cbn07XG5cbmV4cG9ydCBjb25zdCBhZGRJdGVtQWxsb3dDaGVjayA9IGZ1bmN0aW9uKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcblx0dmFyIHRlbXBQbGFuZSA9IHtcblx0XHR4OiB4LFxuXHRcdHk6IHksXG5cdFx0d2lkdGg6IHdpZHRoLFxuXHRcdGhlaWdodDogaGVpZ2h0XG5cdH07XG5cblx0aWYgKHggPCAwIHx8IHkgPCAwKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0aWYgKHR5cGVvZiB3aWR0aCAhPSBcIm51bWJlclwiIHx8IHR5cGVvZiBoZWlnaHQgIT0gXCJudW1iZXJcIikge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGlmICh4ICsgd2lkdGggPiB0aGlzLldJRFRIKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0aWYgKHdpZHRoIDwgNTAgfHwgaGVpZ2h0IDwgNTApIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHR2YXIgbGVuZ3RoXzAgPSB0aGlzLnBvc2l0aW9uRGF0YS5sZW5ndGg7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHRcdHZhciBpdGVySXRlbSA9IHtcblx0XHRcdHg6XG5cdFx0XHRcdHRoaXMucG9zaXRpb25EYXRhW2ldLnggLVxuXHRcdFx0XHRnZXRNYXJnaW5BdFBvaW50LmNhbGwodGhpcywgdGhpcy5wb3NpdGlvbkRhdGFbaV0ueCksXG5cdFx0XHR5OlxuXHRcdFx0XHR0aGlzLnBvc2l0aW9uRGF0YVtpXS55IC1cblx0XHRcdFx0Z2V0TWFyZ2luQXRQb2ludC5jYWxsKHRoaXMsIHRoaXMucG9zaXRpb25EYXRhW2ldLnkpLFxuXHRcdFx0d2lkdGg6XG5cdFx0XHRcdHRoaXMucG9zaXRpb25EYXRhW2ldLndpZHRoICtcblx0XHRcdFx0Z2V0TWFyZ2luQXRQb2ludC5jYWxsKHRoaXMsIHRoaXMucG9zaXRpb25EYXRhW2ldLngpICtcblx0XHRcdFx0dGhpcy5NQVJHSU4sXG5cdFx0XHRoZWlnaHQ6XG5cdFx0XHRcdHRoaXMucG9zaXRpb25EYXRhW2ldLmhlaWdodCArXG5cdFx0XHRcdGdldE1hcmdpbkF0UG9pbnQuY2FsbCh0aGlzLCB0aGlzLnBvc2l0aW9uRGF0YVtpXS55KSArXG5cdFx0XHRcdHRoaXMuTUFSR0lOXG5cdFx0fTtcblx0XHR2YXIgaXNJbnNpZGUgPSB0aGlzLmlzUGxhbmVCSW5zaWRlUGxhbmVBX1RvdWNoaW5nSXNJbnNpZGUoXG5cdFx0XHRpdGVySXRlbSxcblx0XHRcdHRlbXBQbGFuZVxuXHRcdCk7XG5cblx0XHRpZiAoaXNJbnNpZGUpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHRydWU7XG59O1xuXG5leHBvcnQgY29uc3QgY3V0U3BhY2VBbGxvd0NoZWNrVGltZU91dCA9IGZ1bmN0aW9uKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcblx0aWYgKGN1dFNwYWNlQWxsb3dDaGVjay5jYWxsKHRoaXMsIHgsIHksIHdpZHRoLCBoZWlnaHQpID09IGZhbHNlKSB7XG5cdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdBZGRJdGVtR3VpZGVbMF0uY2xhc3NMaXN0LnJlbW92ZShcblx0XHRcdFwibGltYmVyR3JpZFZpZXdBZGRJdGVtR3VpZGVBZGRBbGxvd1wiXG5cdFx0KTtcblx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0FkZEl0ZW1HdWlkZVswXS5jbGFzc0xpc3QuYWRkKFxuXHRcdFx0XCJsaW1iZXJHcmlkVmlld0FkZEl0ZW1HdWlkZUFkZERpc2FsbG93XCJcblx0XHQpO1xuXHR9IGVsc2Uge1xuXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3QWRkSXRlbUd1aWRlWzBdLmNsYXNzTGlzdC5yZW1vdmUoXG5cdFx0XHRcImxpbWJlckdyaWRWaWV3QWRkSXRlbUd1aWRlQWRkRGlzYWxsb3dcIlxuXHRcdCk7XG5cdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdBZGRJdGVtR3VpZGVbMF0uY2xhc3NMaXN0LmFkZChcblx0XHRcdFwibGltYmVyR3JpZFZpZXdBZGRJdGVtR3VpZGVBZGRBbGxvd1wiXG5cdFx0KTtcblx0fVxufTtcblxuZXhwb3J0IGNvbnN0IGN1dFNwYWNlQWxsb3dDaGVjayA9IGZ1bmN0aW9uKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcblx0dmFyIHRlbXBQbGFuZSA9IHtcblx0XHR4OiAwLFxuXHRcdHk6IHkgLSB0aGlzLk1BUkdJTiAvIDIsXG5cdFx0d2lkdGg6IHRoaXMuV0lEVEgsXG5cdFx0aGVpZ2h0OiBoZWlnaHQgKyB0aGlzLk1BUkdJTiAvIDJcblx0fTtcblxuXHRpZiAodHlwZW9mIHdpZHRoICE9IFwibnVtYmVyXCIgfHwgdHlwZW9mIGhlaWdodCAhPSBcIm51bWJlclwiKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0dmFyIGxlbmd0aF8wID0gdGhpcy5wb3NpdGlvbkRhdGEubGVuZ3RoO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF8wOyBpKyspIHtcblx0XHR2YXIgaXNJbnNpZGUgPSB0aGlzLmlzUGxhbmVCSW5zaWRlUGxhbmVBX1RvdWNoaW5nSXNJbnNpZGUoXG5cdFx0XHR0ZW1wUGxhbmUsXG5cdFx0XHR0aGlzLnBvc2l0aW9uRGF0YVtpXVxuXHRcdCk7XG5cblx0XHRpZiAoaXNJbnNpZGUpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHRydWU7XG59O1xuXG5leHBvcnQgY29uc3QgaW5zZXJ0QWRkSXRlbU9uVG91Y2hIb2xkR3VpZGVTdHlsZXMgPSBmdW5jdGlvbih4LCB5KSB7XG5cdHZhciByaXBwbGUgPSBbXTtcblx0cmlwcGxlWzBdID0gXCJAa2V5ZnJhbWVzIGxpbWJlckdyaWRWaWV3QWRkSXRlbU9uVG91Y2hIb2xkUmlwcGxlIHtcIjtcblx0cmlwcGxlWzFdID0gXCIwJSB7XCI7XG5cdHJpcHBsZVsyXSA9XG5cdFx0XCJ0cmFuc2Zvcm06IHRyYW5zbGF0ZShcIiArXG5cdFx0KHggLSA1KSArXG5cdFx0XCJweCwgXCIgK1xuXHRcdCh5IC0gNSkgK1xuXHRcdFwicHgpIHNjYWxlKDAsIDApO1wiO1xuXHRyaXBwbGVbM10gPSBcIm9wYWNpdHk6IDE7XCI7XG5cdHJpcHBsZVs0XSA9IFwifVwiO1xuXHRyaXBwbGVbNV0gPSBcIjIwJSB7XCI7XG5cdHJpcHBsZVs2XSA9XG5cdFx0XCJ0cmFuc2Zvcm06IHRyYW5zbGF0ZShcIiArXG5cdFx0KHggLSA1KSArXG5cdFx0XCJweCwgXCIgK1xuXHRcdCh5IC0gNSkgK1xuXHRcdFwicHgpIHNjYWxlKDI1LCAyNSk7XCI7XG5cdHJpcHBsZVs3XSA9IFwib3BhY2l0eTogMTtcIjtcblx0cmlwcGxlWzhdID0gXCJ9XCI7XG5cdHJpcHBsZVs5XSA9IFwiMTAwJSB7XCI7XG5cdHJpcHBsZVsxMF0gPVxuXHRcdFwidHJhbnNmb3JtOiB0cmFuc2xhdGUoXCIgK1xuXHRcdCh4IC0gNSkgK1xuXHRcdFwicHgsIFwiICtcblx0XHQoeSAtIDUpICtcblx0XHRcInB4KSBzY2FsZSg1MCwgNTApO1wiO1xuXHRyaXBwbGVbMTFdID0gXCJvcGFjaXR5OiAwO1wiO1xuXHRyaXBwbGVbMTJdID0gXCJ9XCI7XG5cdHJpcHBsZVsxM10gPSBcIn1cIjtcblx0dmFyIHJpcHBsZVN0cmluZyA9IHJpcHBsZS5qb2luKFwiXCIpO1xuXHR0aGlzLiRsaW1iZXJHcmlkVmlld1N0eWxlWzBdLmlubmVySFRNTCA9IHJpcHBsZVN0cmluZztcbn07XG4iLCJpbXBvcnQgeyBhZGp1c3RIZWlnaHQsIGFkanVzdFNjcm9sbCB9IGZyb20gXCIuLi91dGlscy91dGlsc1wiO1xuaW1wb3J0IHsgZ2V0TGluZXMsIGdldE1hcmdpbkF0UG9pbnQgfSBmcm9tIFwiLi4vdXRpbHMvZXNzZW50aWFsc1wiO1xuXG5leHBvcnQgY29uc3Qgb25JdGVtTW91c2VEb3duID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0aWYgKGV2ZW50LndoaWNoICE9IDEpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImxpbWJlckdyaWRWaWV3SXRlbVwiKSkge1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHZhciByYWRpdXMgPSBNYXRoLnNxcnQoXG5cdFx0TWF0aC5wb3coMCAtIGV2ZW50Lm9mZnNldFgsIDIpICsgTWF0aC5wb3coMCAtIGV2ZW50Lm9mZnNldFksIDIpXG5cdCk7XG5cdHZhciByZXNpemVVSUJveCA9IHtcblx0XHR4OiBldmVudC5jdXJyZW50VGFyZ2V0Lm9mZnNldFdpZHRoIC0gdGhpcy5SRVNJWkVfU1FVQVJFX0dVSURFX0xFTkdUSCxcblx0XHR5OiBldmVudC5jdXJyZW50VGFyZ2V0Lm9mZnNldEhlaWdodCAtIHRoaXMuUkVTSVpFX1NRVUFSRV9HVUlERV9MRU5HVEgsXG5cdFx0d2lkdGg6XG5cdFx0XHR0aGlzLlJFU0laRV9TUVVBUkVfR1VJREVfTEVOR1RIICtcblx0XHRcdHRoaXMuUkVTSVpFX1NRVUFSRV9CT1JERVJfR1VJREVfV0lEVEgsXG5cdFx0aGVpZ2h0OlxuXHRcdFx0dGhpcy5SRVNJWkVfU1FVQVJFX0dVSURFX0xFTkdUSCArXG5cdFx0XHR0aGlzLlJFU0laRV9TUVVBUkVfQk9SREVSX0dVSURFX1dJRFRIXG5cdH07XG5cblx0aWYgKHJhZGl1cyA8PSB0aGlzLk1PVkVfR1VJREVfUkFESVVTKSB7XG5cdFx0dGhpcy51c2VyQWN0aW9uRGF0YSA9IHtcblx0XHRcdHR5cGU6IFwibW92ZVwiLFxuXHRcdFx0aXRlbUluZGV4OiBldmVudC5jdXJyZW50VGFyZ2V0LmF0dHJpYnV0ZXNbXCJkYXRhLWluZGV4XCJdLnZhbHVlXG5cdFx0fTtcblx0XHR0aGlzLm1vdXNlRG93bkNhbmNlbCA9IGZhbHNlO1xuXHRcdHRoaXMubW91c2VEb3duVGltZXJDb21wbGV0ZSA9IGZhbHNlO1xuXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdFwibW91c2Vtb3ZlXCIsXG5cdFx0XHR0aGlzLm9uTW91c2VNb3ZlQmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHRcdCk7XG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdFwibW91c2V1cFwiLFxuXHRcdFx0dGhpcy5vbk1vdXNlVXBCaW5kZWRGdW5jdGlvblZhcmlhYmxlXG5cdFx0KTtcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFx0XCJjb250ZXh0bWVudVwiLFxuXHRcdFx0dGhpcy5vbkNvbnRleHRNZW51QmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHRcdCk7XG5cdFx0Y2xlYXJUaW1lb3V0KHRoaXMubG9uZ1ByZXNzQ2hlY2spO1xuXHRcdHRoaXMubG9uZ1ByZXNzQ2hlY2sgPSBzZXRUaW1lb3V0KFxuXHRcdFx0bW91c2VEb3duQ2hlY2suYmluZCh0aGlzLCBldmVudCksXG5cdFx0XHR0aGlzLk1PVVNFX0RPV05fVElNRVxuXHRcdCk7XG5cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHR9IGVsc2UgaWYgKFxuXHRcdGV2ZW50Lm9mZnNldFggPj0gcmVzaXplVUlCb3gueCAmJlxuXHRcdGV2ZW50Lm9mZnNldFggPD0gcmVzaXplVUlCb3gueCArIHJlc2l6ZVVJQm94LndpZHRoICYmXG5cdFx0ZXZlbnQub2Zmc2V0WSA+PSByZXNpemVVSUJveC55ICYmXG5cdFx0ZXZlbnQub2Zmc2V0WSA8PSByZXNpemVVSUJveC55ICsgcmVzaXplVUlCb3guaGVpZ2h0XG5cdCkge1xuXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3SGVpZ2h0QWRqdXN0R3VpZGVbMF0uc3R5bGUuaGVpZ2h0ID0gMCArIFwicHhcIjtcblx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0hlaWdodEFkanVzdEd1aWRlWzBdLmNsYXNzTGlzdC5hZGQoXG5cdFx0XHRcImxpbWJlckdyaWRWaWV3SGVpZ2h0QWRqdXN0R3VpZGVBY3RpdmVcIlxuXHRcdCk7XG5cblx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhID0ge1xuXHRcdFx0dHlwZTogXCJyZXNpemVcIixcblx0XHRcdGl0ZW1JbmRleDogZXZlbnQuY3VycmVudFRhcmdldC5hdHRyaWJ1dGVzW1wiZGF0YS1pbmRleFwiXS52YWx1ZVxuXHRcdH07XG5cdFx0dGhpcy5tb3VzZURvd25DYW5jZWwgPSBmYWxzZTtcblx0XHR0aGlzLm1vdXNlRG93blRpbWVyQ29tcGxldGUgPSB0cnVlO1xuXG5cdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdbMF0uYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdFwibW91c2Vtb3ZlXCIsXG5cdFx0XHR0aGlzLm9uTW91c2VNb3ZlQmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHRcdCk7XG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdFwibW91c2V1cFwiLFxuXHRcdFx0dGhpcy5vbk1vdXNlVXBCaW5kZWRGdW5jdGlvblZhcmlhYmxlXG5cdFx0KTtcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFx0XCJjb250ZXh0bWVudVwiLFxuXHRcdFx0dGhpcy5vbkNvbnRleHRNZW51QmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHRcdCk7XG5cblx0XHR2YXIgdHJhbnNmb3JtU3R5bGUgPSB0aGlzLiRsaW1iZXJHcmlkVmlld0l0ZW1zW1xuXHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhcblx0XHRdLnN0eWxlLnRyYW5zZm9ybTtcblx0XHR2YXIgaTEgPSB0cmFuc2Zvcm1TdHlsZS5pbmRleE9mKFwicHhcIik7XG5cdFx0dmFyIGkyID0gdHJhbnNmb3JtU3R5bGUuaW5kZXhPZihcIixcIik7XG5cdFx0dmFyIHggPSBOdW1iZXIodHJhbnNmb3JtU3R5bGUuc3Vic3RyaW5nKDEwLCBpMSkpO1xuXHRcdHZhciB5ID0gTnVtYmVyKFxuXHRcdFx0dHJhbnNmb3JtU3R5bGUuc3Vic3RyaW5nKGkyICsgMiwgdHJhbnNmb3JtU3R5bGUubGVuZ3RoIC0gMylcblx0XHQpO1xuXG5cdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtUG9zaXRpb25YID0geDtcblx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1Qb3NpdGlvblkgPSB5O1xuXG5cdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbXNbXG5cdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleFxuXHRcdF0uc3R5bGUud2lkdGggPVxuXHRcdFx0dGhpcy5wb3NpdGlvbkRhdGFbdGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhdLndpZHRoICsgXCJweFwiO1xuXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1zW1xuXHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhcblx0XHRdLnN0eWxlLmhlaWdodCA9XG5cdFx0XHR0aGlzLnBvc2l0aW9uRGF0YVt0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleF0uaGVpZ2h0ICsgXCJweFwiO1xuXG5cdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbXNbXG5cdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleFxuXHRcdF0uc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUoXCIgKyB4ICsgXCJweCwgXCIgKyB5ICsgXCJweClcIjtcblx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtc1tcblx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4XG5cdFx0XS5jbGFzc0xpc3QuYWRkKFwibGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbUFjdGl2ZVwiKTtcblxuXHRcdHRoaXMuJGJvZHlbMF0uY2xhc3NMaXN0LmFkZChcblx0XHRcdFwibGltYmVyR3JpZFZpZXdCb2R5VGFnU3RhdGVFbGVtZW50RHJhZ2dpbmdPclJlc2l6aW5nXCJcblx0XHQpO1xuXHRcdHZhciBsZW5ndGhfMCA9IHRoaXMuJGxpbWJlckdyaWRWaWV3SXRlbXMubGVuZ3RoO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdJdGVtc1tpXS5jbGFzc0xpc3QuYWRkKFxuXHRcdFx0XHRcImxpbWJlckdyaWRWaWV3SXRlbVJlc2l6aW5nU3RhdGVcIlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHR2YXIgbGVuZ3RoXzAgPSB0aGlzLiRsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtcy5sZW5ndGg7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtc1tpXS5jbGFzc0xpc3QuYWRkKFxuXHRcdFx0XHRcImxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1SZXNpemluZ1N0YXRlXCJcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbXNbXG5cdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleFxuXHRcdF0uY2xhc3NMaXN0LnJlbW92ZShcblx0XHRcdFwibGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbVJlc2l6ZUFsbG93XCIsXG5cdFx0XHRcImxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1SZXNpemVEaXNhbGxvd1wiXG5cdFx0KTtcblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdH1cbn07XG5cbmV4cG9ydCBjb25zdCBvbkl0ZW1Ub3VjaFN0YXJ0ID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0aWYgKGV2ZW50LndoaWNoICE9IDApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImxpbWJlckdyaWRWaWV3SXRlbVwiKSkge1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmIChldmVudC50b3VjaGVzLmxlbmd0aCA+IDEpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR2YXIgdG91Y2hQb3NPbkxpbWJlckdyaWRJdGVtID0gY2FsY3VsYXRlVG91Y2hQb3NPbkxpbWJlckdyaWRJdGVtLmNhbGwoXG5cdFx0dGhpcyxcblx0XHRldmVudFxuXHQpO1xuXHRpZiAodG91Y2hQb3NPbkxpbWJlckdyaWRJdGVtID09IGZhbHNlKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciByYWRpdXMgPSBNYXRoLnNxcnQoXG5cdFx0TWF0aC5wb3coMCAtIHRvdWNoUG9zT25MaW1iZXJHcmlkSXRlbS54LCAyKSArXG5cdFx0XHRNYXRoLnBvdygwIC0gdG91Y2hQb3NPbkxpbWJlckdyaWRJdGVtLnksIDIpXG5cdCk7XG5cdHZhciByZXNpemVVSUJveCA9IHtcblx0XHR4OiBldmVudC5jdXJyZW50VGFyZ2V0Lm9mZnNldFdpZHRoIC0gdGhpcy5SRVNJWkVfU1FVQVJFX0dVSURFX0xFTkdUSCxcblx0XHR5OiBldmVudC5jdXJyZW50VGFyZ2V0Lm9mZnNldEhlaWdodCAtIHRoaXMuUkVTSVpFX1NRVUFSRV9HVUlERV9MRU5HVEgsXG5cdFx0d2lkdGg6XG5cdFx0XHR0aGlzLlJFU0laRV9TUVVBUkVfR1VJREVfTEVOR1RIICtcblx0XHRcdHRoaXMuUkVTSVpFX1NRVUFSRV9CT1JERVJfR1VJREVfV0lEVEgsXG5cdFx0aGVpZ2h0OlxuXHRcdFx0dGhpcy5SRVNJWkVfU1FVQVJFX0dVSURFX0xFTkdUSCArXG5cdFx0XHR0aGlzLlJFU0laRV9TUVVBUkVfQk9SREVSX0dVSURFX1dJRFRIXG5cdH07XG5cblx0aWYgKHJhZGl1cyA8PSB0aGlzLk1PVkVfR1VJREVfUkFESVVTKSB7XG5cdFx0dGhpcy51c2VyQWN0aW9uRGF0YSA9IHtcblx0XHRcdHR5cGU6IFwibW92ZVwiLFxuXHRcdFx0aXRlbUluZGV4OiBldmVudC5jdXJyZW50VGFyZ2V0LmF0dHJpYnV0ZXNbXCJkYXRhLWluZGV4XCJdLnZhbHVlXG5cdFx0fTtcblx0XHR0aGlzLnRhcEhvbGRDYW5jZWwgPSBmYWxzZTtcblx0XHR0aGlzLnRhcEhvbGRUaW1lckNvbXBsZXRlID0gZmFsc2U7XG5cblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFx0XCJ0b3VjaG1vdmVcIixcblx0XHRcdHRoaXMub25Ub3VjaE1vdmVCaW5kZWRGdW5jdGlvblZhcmlhYmxlXG5cdFx0KTtcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFx0XCJ0b3VjaGVuZFwiLFxuXHRcdFx0dGhpcy5vblRvdWNoRW5kQmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHRcdCk7XG5cdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdbMF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0XHRcdFwidG91Y2hzdGFydFwiLFxuXHRcdFx0dGhpcy5vbkxpbWJlckdyaWRUb3VjaFN0YXJ0RnVuY3Rpb25WYXJpYWJsZVxuXHRcdCk7XG5cblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFx0XCJjb250ZXh0bWVudVwiLFxuXHRcdFx0dGhpcy5vbkl0ZW1Ub3VjaENvbnRleHRNZW51QmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHRcdCk7XG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdFwidG91Y2hjYW5jZWxcIixcblx0XHRcdHRoaXMub25Ub3VjaENhbmNlbEJpbmRlZEZ1bmN0aW9uVmFyaWFibGVcblx0XHQpO1xuXG5cdFx0dGhpcy5sb25nVG91Y2hDaGVjayA9IHNldFRpbWVvdXQoXG5cdFx0XHR0YXBIb2xkQ2hlY2suYmluZCh0aGlzLCBldmVudCksXG5cdFx0XHR0aGlzLlRPVUNIX0hPTERfVElNRVxuXHRcdCk7XG5cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHR9IGVsc2UgaWYgKFxuXHRcdHRvdWNoUG9zT25MaW1iZXJHcmlkSXRlbS54ID49IHJlc2l6ZVVJQm94LnggJiZcblx0XHR0b3VjaFBvc09uTGltYmVyR3JpZEl0ZW0ueCA8PSByZXNpemVVSUJveC54ICsgcmVzaXplVUlCb3gud2lkdGggJiZcblx0XHR0b3VjaFBvc09uTGltYmVyR3JpZEl0ZW0ueSA+PSByZXNpemVVSUJveC55ICYmXG5cdFx0dG91Y2hQb3NPbkxpbWJlckdyaWRJdGVtLnkgPD0gcmVzaXplVUlCb3gueSArIHJlc2l6ZVVJQm94LmhlaWdodFxuXHQpIHtcblx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0hlaWdodEFkanVzdEd1aWRlWzBdLnN0eWxlLmhlaWdodCA9IDAgKyBcInB4XCI7XG5cdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdIZWlnaHRBZGp1c3RHdWlkZVswXS5jbGFzc0xpc3QuYWRkKFxuXHRcdFx0XCJsaW1iZXJHcmlkVmlld0hlaWdodEFkanVzdEd1aWRlQWN0aXZlXCJcblx0XHQpO1xuXG5cdFx0dGhpcy51c2VyQWN0aW9uRGF0YSA9IHtcblx0XHRcdHR5cGU6IFwicmVzaXplXCIsXG5cdFx0XHRpdGVtSW5kZXg6IGV2ZW50LmN1cnJlbnRUYXJnZXQuYXR0cmlidXRlc1tcImRhdGEtaW5kZXhcIl0udmFsdWVcblx0XHR9O1xuXHRcdHRoaXMudGFwSG9sZENhbmNlbCA9IGZhbHNlO1xuXHRcdHRoaXMudGFwSG9sZFRpbWVyQ29tcGxldGUgPSB0cnVlO1xuXG5cdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdbMF0uYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdFwidG91Y2htb3ZlXCIsXG5cdFx0XHR0aGlzLm9uVG91Y2hNb3ZlQmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHRcdCk7XG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdFwidG91Y2hlbmRcIixcblx0XHRcdHRoaXMub25Ub3VjaEVuZEJpbmRlZEZ1bmN0aW9uVmFyaWFibGVcblx0XHQpO1xuXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcInRvdWNoc3RhcnRcIixcblx0XHRcdHRoaXMub25MaW1iZXJHcmlkVG91Y2hTdGFydEZ1bmN0aW9uVmFyaWFibGVcblx0XHQpO1xuXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdFwidG91Y2hjYW5jZWxcIixcblx0XHRcdHRoaXMub25Ub3VjaENhbmNlbEJpbmRlZEZ1bmN0aW9uVmFyaWFibGVcblx0XHQpO1xuXG5cdFx0dmFyIHRyYW5zZm9ybVN0eWxlID0gdGhpcy4kbGltYmVyR3JpZFZpZXdJdGVtc1tcblx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4XG5cdFx0XS5zdHlsZS50cmFuc2Zvcm07XG5cdFx0dmFyIGkxID0gdHJhbnNmb3JtU3R5bGUuaW5kZXhPZihcInB4XCIpO1xuXHRcdHZhciBpMiA9IHRyYW5zZm9ybVN0eWxlLmluZGV4T2YoXCIsXCIpO1xuXHRcdHZhciB4ID0gTnVtYmVyKHRyYW5zZm9ybVN0eWxlLnN1YnN0cmluZygxMCwgaTEpKTtcblx0XHR2YXIgeSA9IE51bWJlcihcblx0XHRcdHRyYW5zZm9ybVN0eWxlLnN1YnN0cmluZyhpMiArIDIsIHRyYW5zZm9ybVN0eWxlLmxlbmd0aCAtIDMpXG5cdFx0KTtcblxuXHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbVBvc2l0aW9uWCA9IHg7XG5cdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtUG9zaXRpb25ZID0geTtcblxuXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1zW1xuXHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhcblx0XHRdLnN0eWxlLndpZHRoID1cblx0XHRcdHRoaXMucG9zaXRpb25EYXRhW3RoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4XS53aWR0aCArIFwicHhcIjtcblx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtc1tcblx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4XG5cdFx0XS5zdHlsZS5oZWlnaHQgPVxuXHRcdFx0dGhpcy5wb3NpdGlvbkRhdGFbdGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhdLmhlaWdodCArIFwicHhcIjtcblxuXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1zW1xuXHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhcblx0XHRdLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlKFwiICsgeCArIFwicHgsIFwiICsgeSArIFwicHgpXCI7XG5cdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbXNbXG5cdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleFxuXHRcdF0uY2xhc3NMaXN0LmFkZChcImxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1BY3RpdmVcIik7XG5cblx0XHR0aGlzLiRib2R5WzBdLmNsYXNzTGlzdC5hZGQoXG5cdFx0XHRcImxpbWJlckdyaWRWaWV3Qm9keVRhZ1N0YXRlRWxlbWVudERyYWdnaW5nT3JSZXNpemluZ1wiXG5cdFx0KTtcblx0XHR2YXIgbGVuZ3RoXzAgPSB0aGlzLiRsaW1iZXJHcmlkVmlld0l0ZW1zLmxlbmd0aDtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF8wOyBpKyspIHtcblx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3SXRlbXNbaV0uY2xhc3NMaXN0LmFkZChcblx0XHRcdFx0XCJsaW1iZXJHcmlkVmlld0l0ZW1SZXNpemluZ1N0YXRlXCJcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0dmFyIGxlbmd0aF8wID0gdGhpcy4kbGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbXMubGVuZ3RoO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbXNbaV0uY2xhc3NMaXN0LmFkZChcblx0XHRcdFx0XCJsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtUmVzaXppbmdTdGF0ZVwiXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1zW1xuXHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhcblx0XHRdLmNsYXNzTGlzdC5yZW1vdmUoXG5cdFx0XHRcImxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1SZXNpemVBbGxvd1wiLFxuXHRcdFx0XCJsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtUmVzaXplRGlzYWxsb3dcIlxuXHRcdCk7XG5cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHR9XG5cblx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG59O1xuXG5leHBvcnQgY29uc3QgbW91c2VEb3duQ2hlY2sgPSBmdW5jdGlvbihldmVudCkge1xuXHRpZiAodGhpcy5tb3VzZURvd25DYW5jZWwgPT0gZmFsc2UpIHtcblx0XHR0aGlzLm1vdXNlRG93blRpbWVyQ29tcGxldGUgPSB0cnVlO1xuXHRcdGNvbnNvbGUubG9nKFwibW91c2VEb3duVGltZXJDb21wbGV0ZVwiKTtcblx0XHR0aGlzLiRib2R5WzBdLmNsYXNzTGlzdC5hZGQoXG5cdFx0XHRcImxpbWJlckdyaWRWaWV3Qm9keVRhZ1N0YXRlRWxlbWVudERyYWdnaW5nT3JSZXNpemluZ1wiXG5cdFx0KTtcblx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0l0ZW1zW3RoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4XS5jbGFzc0xpc3QuYWRkKFxuXHRcdFx0XCJsaW1iZXJHcmlkVmlld0l0ZW1EZW1vXCJcblx0XHQpO1xuXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3Qm9keVBzZXVkb0l0ZW1zW1xuXHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhcblx0XHRdLmNsYXNzTGlzdC5hZGQoXCJsaW1iZXJHcmlkVmlld0JvZHlQc2V1ZG9JdGVtQWN0aXZlXCIpO1xuXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3Qm9keVBzZXVkb0l0ZW1zW1xuXHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhcblx0XHRdLnN0eWxlLnRyYW5zZm9ybSA9XG5cdFx0XHRcInRyYW5zbGF0ZShcIiArXG5cdFx0XHRldmVudC5wYWdlWCAvKisgNSovICtcblx0XHRcdFwicHgsIFwiICtcblx0XHRcdGV2ZW50LnBhZ2VZIC8qKyA1Ki8gK1xuXHRcdFx0XCJweClcIjtcblxuXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3SGVpZ2h0QWRqdXN0R3VpZGVbMF0uc3R5bGUuaGVpZ2h0ID0gMCArIFwicHhcIjtcblx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0hlaWdodEFkanVzdEd1aWRlWzBdLmNsYXNzTGlzdC5hZGQoXG5cdFx0XHRcImxpbWJlckdyaWRWaWV3SGVpZ2h0QWRqdXN0R3VpZGVBY3RpdmVcIlxuXHRcdCk7XG5cdH0gZWxzZSB7XG5cdFx0Y29uc29sZS5sb2coXCJtb3VzZURvd24gY2FuY2VsIGJlZm9yZSBUaW1lckNvbXBsZXRlXCIpO1xuXHR9XG59O1xuXG5leHBvcnQgY29uc3QgdGFwSG9sZENoZWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0aWYgKHRoaXMudGFwSG9sZENhbmNlbCA9PSBmYWxzZSkge1xuXHRcdHRoaXMudGFwSG9sZFRpbWVyQ29tcGxldGUgPSB0cnVlO1xuXG5cdFx0dGhpcy4kYm9keVswXS5jbGFzc0xpc3QuYWRkKFxuXHRcdFx0XCJsaW1iZXJHcmlkVmlld0JvZHlUYWdTdGF0ZUVsZW1lbnREcmFnZ2luZ09yUmVzaXppbmdcIlxuXHRcdCk7XG5cdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdJdGVtc1t0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleF0uY2xhc3NMaXN0LmFkZChcblx0XHRcdFwibGltYmVyR3JpZFZpZXdJdGVtRGVtb1wiXG5cdFx0KTtcblx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0JvZHlQc2V1ZG9JdGVtc1tcblx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4XG5cdFx0XS5jbGFzc0xpc3QuYWRkKFwibGltYmVyR3JpZFZpZXdCb2R5UHNldWRvSXRlbUFjdGl2ZVwiKTtcblx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0JvZHlQc2V1ZG9JdGVtc1tcblx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4XG5cdFx0XS5zdHlsZS50cmFuc2Zvcm0gPVxuXHRcdFx0XCJ0cmFuc2xhdGUoXCIgK1xuXHRcdFx0ZXZlbnQudG91Y2hlc1swXS5wYWdlWCAvKisgNSovICtcblx0XHRcdFwicHgsIFwiICtcblx0XHRcdGV2ZW50LnRvdWNoZXNbMF0ucGFnZVkgLyorIDUqLyArXG5cdFx0XHRcInB4KVwiO1xuXG5cdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdIZWlnaHRBZGp1c3RHdWlkZVswXS5zdHlsZS5oZWlnaHQgPSAwICsgXCJweFwiO1xuXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3SGVpZ2h0QWRqdXN0R3VpZGVbMF0uY2xhc3NMaXN0LmFkZChcblx0XHRcdFwibGltYmVyR3JpZFZpZXdIZWlnaHRBZGp1c3RHdWlkZUFjdGl2ZVwiXG5cdFx0KTtcblx0fSBlbHNlIHtcblx0XHQvLyB0YXBIb2xkIGNhbmNlbCBiZWZvcmUgVGltZXJDb21wbGV0ZVxuXHR9XG59O1xuXG5leHBvcnQgY29uc3Qgb25Nb3VzZU1vdmUgPSBmdW5jdGlvbihldmVudCkge1xuXHRpZiAodGhpcy5tb3VzZURvd25UaW1lckNvbXBsZXRlID09IHRydWUpIHtcblx0XHRpZiAodGhpcy51c2VyQWN0aW9uRGF0YS50eXBlID09IFwibW92ZVwiKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3TW92ZUd1aWRlWzBdLmNsYXNzTGlzdC5jb250YWlucyhcblx0XHRcdFx0XHRcImxpbWJlckdyaWRWaWV3TW92ZUd1aWRlQWN0aXZlXCJcblx0XHRcdFx0KVxuXHRcdFx0KSB7XG5cdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3TW92ZUd1aWRlWzBdLmNsYXNzTGlzdC5yZW1vdmUoXG5cdFx0XHRcdFx0XCJsaW1iZXJHcmlkVmlld01vdmVHdWlkZUFjdGl2ZVwiXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChcblx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdCb2R5UHNldWRvSXRlbXNbXG5cdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhcblx0XHRcdFx0XS5jbGFzc0xpc3QuY29udGFpbnMoXCJsaW1iZXJHcmlkVmlld0JvZHlQc2V1ZG9JdGVtTW92ZUFsbG93XCIpIHx8XG5cdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3Qm9keVBzZXVkb0l0ZW1zW1xuXHRcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4XG5cdFx0XHRcdF0uY2xhc3NMaXN0LmNvbnRhaW5zKFwibGltYmVyR3JpZFZpZXdCb2R5UHNldWRvSXRlbU1vdmVEaXNhbGxvd1wiKVxuXHRcdFx0KSB7XG5cdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3Qm9keVBzZXVkb0l0ZW1zW1xuXHRcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4XG5cdFx0XHRcdF0uY2xhc3NMaXN0LnJlbW92ZShcblx0XHRcdFx0XHRcImxpbWJlckdyaWRWaWV3Qm9keVBzZXVkb0l0ZW1Nb3ZlQWxsb3dcIixcblx0XHRcdFx0XHRcImxpbWJlckdyaWRWaWV3Qm9keVBzZXVkb0l0ZW1Nb3ZlRGlzYWxsb3dcIlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0JvZHlQc2V1ZG9JdGVtc1tcblx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhcblx0XHRcdF0uc3R5bGUudHJhbnNmb3JtID1cblx0XHRcdFx0XCJ0cmFuc2xhdGUoXCIgK1xuXHRcdFx0XHRldmVudC5wYWdlWCAvKisgNSovICtcblx0XHRcdFx0XCJweCwgXCIgK1xuXHRcdFx0XHRldmVudC5wYWdlWSAvKisgNSovICtcblx0XHRcdFx0XCJweClcIjtcblx0XHRcdHZhciBtb3VzZVBvc2l0aW9uT25MaW1iZXJHcmlkID0gY2FsY3VsYXRlTW91c2VQb3NPbkxpbWJlckdyaWQuY2FsbChcblx0XHRcdFx0dGhpcyxcblx0XHRcdFx0ZXZlbnRcblx0XHRcdCk7XG5cblx0XHRcdGlmIChtb3VzZVBvc2l0aW9uT25MaW1iZXJHcmlkICE9IGZhbHNlKSB7XG5cdFx0XHRcdHZhciBzY3JvbGxUb3AgPSB0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5zY3JvbGxUb3A7XG5cdFx0XHRcdHZhciBzY3JvbGxIZWlnaHQgPSB0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5zY3JvbGxIZWlnaHQ7XG5cblx0XHRcdFx0dmFyIHlNb3VzZVBvc2l0aW9uID0gbW91c2VQb3NpdGlvbk9uTGltYmVyR3JpZC55O1xuXHRcdFx0XHRhZGp1c3RIZWlnaHQuY2FsbCh0aGlzLCB5TW91c2VQb3NpdGlvbik7XG5cdFx0XHR9XG5cblx0XHRcdGNsZWFyVGltZW91dCh0aGlzLnNob3dNb3ZlRGVtb1RpbWVPdXRWYXJpYWJsZSk7XG5cdFx0XHR0aGlzLnNob3dNb3ZlRGVtb1RpbWVPdXRWYXJpYWJsZSA9IHNldFRpbWVvdXQoXG5cdFx0XHRcdHNob3dNb3ZlRGVtby5iaW5kKFxuXHRcdFx0XHRcdHRoaXMsXG5cdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXgsXG5cdFx0XHRcdFx0bW91c2VQb3NpdGlvbk9uTGltYmVyR3JpZFxuXHRcdFx0XHQpLFxuXHRcdFx0XHR0aGlzLkRFTU9fV0FJVF9USU1FXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgc2Nyb2xsVG9wID0gdGhpcy4kbGltYmVyR3JpZFZpZXdbMF0uc2Nyb2xsVG9wO1xuXHRcdFx0dmFyIHNjcm9sbExlZnQgPSB0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5zY3JvbGxMZWZ0O1xuXG5cdFx0XHR2YXIgeCA9IHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbVBvc2l0aW9uWDtcblx0XHRcdHZhciB5ID0gdGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtUG9zaXRpb25ZO1xuXG5cdFx0XHR2YXIgbmV3V2lkdGggPSBldmVudC5vZmZzZXRYIC0geCArIHNjcm9sbExlZnQgLSB0aGlzLlBBRERJTkdfTEVGVDtcblx0XHRcdHZhciBuZXdIZWlnaHQgPSBldmVudC5vZmZzZXRZIC0geSArIHNjcm9sbFRvcCAtIHRoaXMuUEFERElOR19UT1A7XG5cblx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEubmV3V2lkdGggPSBuZXdXaWR0aDtcblx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEubmV3SGVpZ2h0ID0gbmV3SGVpZ2h0O1xuXG5cdFx0XHR2YXIgeU1vdXNlUG9zaXRpb24gPSBldmVudC5vZmZzZXRZICsgc2Nyb2xsVG9wO1xuXHRcdFx0YWRqdXN0SGVpZ2h0LmNhbGwodGhpcywgeU1vdXNlUG9zaXRpb24pO1xuXG5cdFx0XHRpZiAobmV3V2lkdGggPiAwICYmIG5ld0hlaWdodCA+IDApIHtcblx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbXNbXG5cdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhcblx0XHRcdFx0XS5zdHlsZS53aWR0aCA9IG5ld1dpZHRoICsgXCJweFwiO1xuXHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtc1tcblx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleFxuXHRcdFx0XHRdLnN0eWxlLmhlaWdodCA9IG5ld0hlaWdodCArIFwicHhcIjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKFxuXHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtc1tcblx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleFxuXHRcdFx0XHRdLmNsYXNzTGlzdC5jb250YWlucyhcblx0XHRcdFx0XHRcImxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1SZXNpemVBbGxvd1wiXG5cdFx0XHRcdCkgfHxcblx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbXNbXG5cdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhcblx0XHRcdFx0XS5jbGFzc0xpc3QuY29udGFpbnMoXG5cdFx0XHRcdFx0XCJsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtUmVzaXplRGlzYWxsb3dcIlxuXHRcdFx0XHQpXG5cdFx0XHQpIHtcblx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbXNbXG5cdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhcblx0XHRcdFx0XS5jbGFzc0xpc3QucmVtb3ZlKFxuXHRcdFx0XHRcdFwibGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbVJlc2l6ZUFsbG93XCIsXG5cdFx0XHRcdFx0XCJsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtUmVzaXplRGlzYWxsb3dcIlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXG5cdFx0XHRjbGVhclRpbWVvdXQodGhpcy5zaG93UmVzaXplRGVtb1RpbWVPdXRWYXJpYWJsZSk7XG5cdFx0XHR0aGlzLnNob3dSZXNpemVEZW1vVGltZU91dFZhcmlhYmxlID0gc2V0VGltZW91dChcblx0XHRcdFx0c2hvd1Jlc2l6ZURlbW8uYmluZChcblx0XHRcdFx0XHR0aGlzLFxuXHRcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4LFxuXHRcdFx0XHRcdG5ld1dpZHRoLFxuXHRcdFx0XHRcdG5ld0hlaWdodFxuXHRcdFx0XHQpLFxuXHRcdFx0XHR0aGlzLkRFTU9fV0FJVF9USU1FXG5cdFx0XHQpO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHR0aGlzLm1vdXNlRG93bkNhbmNlbCA9IHRydWU7XG5cdFx0Y2xlYXJUaW1lb3V0KHRoaXMubG9uZ1ByZXNzQ2hlY2spO1xuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcIm1vdXNlbW92ZVwiLFxuXHRcdFx0dGhpcy5vbk1vdXNlTW92ZUJpbmRlZEZ1bmN0aW9uVmFyaWFibGVcblx0XHQpO1xuXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcIm1vdXNlbW92ZVwiLFxuXHRcdFx0dGhpcy5vbk1vdXNlTW92ZUJpbmRlZEZ1bmN0aW9uVmFyaWFibGVcblx0XHQpO1xuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcIm1vdXNldXBcIixcblx0XHRcdHRoaXMub25Nb3VzZVVwQmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHRcdCk7XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0XHRcdFwiY29udGV4dG1lbnVcIixcblx0XHRcdHRoaXMub25Db250ZXh0TWVudUJpbmRlZEZ1bmN0aW9uVmFyaWFibGVcblx0XHQpO1xuXG5cdFx0Ly8gY2FuY2VsaW5nIG1vdXNlSG9sZFxuXHR9XG5cdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xufTtcblxuZXhwb3J0IGNvbnN0IG9uVG91Y2hNb3ZlID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0aWYgKHRoaXMudGFwSG9sZFRpbWVyQ29tcGxldGUgPT0gdHJ1ZSkge1xuXHRcdGlmICh0aGlzLnVzZXJBY3Rpb25EYXRhLnR5cGUgPT0gXCJtb3ZlXCIpIHtcblx0XHRcdGlmIChcblx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdNb3ZlR3VpZGVbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKFxuXHRcdFx0XHRcdFwibGltYmVyR3JpZFZpZXdNb3ZlR3VpZGVBY3RpdmVcIlxuXHRcdFx0XHQpXG5cdFx0XHQpIHtcblx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdNb3ZlR3VpZGVbMF0uY2xhc3NMaXN0LnJlbW92ZShcblx0XHRcdFx0XHRcImxpbWJlckdyaWRWaWV3TW92ZUd1aWRlQWN0aXZlXCJcblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKFxuXHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0JvZHlQc2V1ZG9JdGVtc1tcblx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleFxuXHRcdFx0XHRdLmNsYXNzTGlzdC5jb250YWlucyhcImxpbWJlckdyaWRWaWV3Qm9keVBzZXVkb0l0ZW1Nb3ZlQWxsb3dcIikgfHxcblx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdCb2R5UHNldWRvSXRlbXNbXG5cdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhcblx0XHRcdFx0XS5jbGFzc0xpc3QuY29udGFpbnMoXCJsaW1iZXJHcmlkVmlld0JvZHlQc2V1ZG9JdGVtTW92ZURpc2FsbG93XCIpXG5cdFx0XHQpIHtcblx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdCb2R5UHNldWRvSXRlbXNbXG5cdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhcblx0XHRcdFx0XS5jbGFzc0xpc3QucmVtb3ZlKFxuXHRcdFx0XHRcdFwibGltYmVyR3JpZFZpZXdCb2R5UHNldWRvSXRlbU1vdmVBbGxvd1wiLFxuXHRcdFx0XHRcdFwibGltYmVyR3JpZFZpZXdCb2R5UHNldWRvSXRlbU1vdmVEaXNhbGxvd1wiXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3Qm9keVBzZXVkb0l0ZW1zW1xuXHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleFxuXHRcdFx0XS5zdHlsZS50cmFuc2Zvcm0gPVxuXHRcdFx0XHRcInRyYW5zbGF0ZShcIiArXG5cdFx0XHRcdGV2ZW50LnRvdWNoZXNbMF0ucGFnZVggLyorIDUqLyArXG5cdFx0XHRcdFwicHgsIFwiICtcblx0XHRcdFx0ZXZlbnQudG91Y2hlc1swXS5wYWdlWSAvKisgNSovICtcblx0XHRcdFx0XCJweClcIjtcblx0XHRcdHZhciB0b3VjaFBvc2l0aW9uT25MaW1iZXJHcmlkID0gY2FsY3VsYXRlVG91Y2hQb3NPbkxpbWJlckdyaWQuY2FsbChcblx0XHRcdFx0dGhpcyxcblx0XHRcdFx0ZXZlbnRcblx0XHRcdCk7XG5cblx0XHRcdGlmICh0b3VjaFBvc2l0aW9uT25MaW1iZXJHcmlkICE9IGZhbHNlKSB7XG5cdFx0XHRcdHZhciBzY3JvbGxUb3AgPSB0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5zY3JvbGxUb3A7XG5cdFx0XHRcdHZhciBzY3JvbGxMZWZ0ID0gdGhpcy4kbGltYmVyR3JpZFZpZXdbMF0uc2Nyb2xsTGVmdDtcblxuXHRcdFx0XHR2YXIgbGltYmVyR3JpZFZpZXdCb3VuZGluZ0NsaWVudFJlY3QgPSB0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdFx0dmFyIGxpbWJlckdyaWRWaWV3V2lkdGhWaXNpYmxlV2lkdGggPVxuXHRcdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLm9mZnNldFdpZHRoIC1cblx0XHRcdFx0XHRsaW1iZXJHcmlkVmlld0JvdW5kaW5nQ2xpZW50UmVjdC5sZWZ0O1xuXHRcdFx0XHR2YXIgbGltYmVyR3JpZFZpZXdIZWlnaHRWaXNpYmxlSGVpZ2h0ID1cblx0XHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5vZmZzZXRIZWlnaHQgLVxuXHRcdFx0XHRcdGxpbWJlckdyaWRWaWV3Qm91bmRpbmdDbGllbnRSZWN0LnRvcDtcblx0XHRcdFx0dmFyIGxpbWJlckdyaWRWaWV3T25WaXNpYmxlQXJlYVggPVxuXHRcdFx0XHRcdHRvdWNoUG9zaXRpb25PbkxpbWJlckdyaWQueCArXG5cdFx0XHRcdFx0dGhpcy5QQURESU5HX0xFRlQgLVxuXHRcdFx0XHRcdHNjcm9sbExlZnQ7XG5cdFx0XHRcdHZhciBsaW1iZXJHcmlkVmlld09uVmlzaWJsZUFyZWFZID1cblx0XHRcdFx0XHR0b3VjaFBvc2l0aW9uT25MaW1iZXJHcmlkLnkgKyB0aGlzLlBBRERJTkdfVE9QIC0gc2Nyb2xsVG9wO1xuXG5cdFx0XHRcdHZhciB5VG91Y2hQb3NpdGlvbiA9IHRvdWNoUG9zaXRpb25PbkxpbWJlckdyaWQueTtcblx0XHRcdFx0YWRqdXN0SGVpZ2h0LmNhbGwodGhpcywgeVRvdWNoUG9zaXRpb24pO1xuXG5cdFx0XHRcdHZhciBwcm9ncmFtU2Nyb2xsZWQgPSBhZGp1c3RTY3JvbGwuY2FsbChcblx0XHRcdFx0XHR0aGlzLFxuXHRcdFx0XHRcdGxpbWJlckdyaWRWaWV3T25WaXNpYmxlQXJlYVksXG5cdFx0XHRcdFx0bGltYmVyR3JpZFZpZXdIZWlnaHRWaXNpYmxlSGVpZ2h0XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdGNsZWFyVGltZW91dCh0aGlzLnNob3dNb3ZlRGVtb1RpbWVPdXRWYXJpYWJsZSk7XG5cdFx0XHRpZiAocHJvZ3JhbVNjcm9sbGVkICE9IHRydWUpIHtcblx0XHRcdFx0dGhpcy5zaG93TW92ZURlbW9UaW1lT3V0VmFyaWFibGUgPSBzZXRUaW1lb3V0KFxuXHRcdFx0XHRcdHNob3dNb3ZlRGVtby5iaW5kKFxuXHRcdFx0XHRcdFx0dGhpcyxcblx0XHRcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4LFxuXHRcdFx0XHRcdFx0dG91Y2hQb3NpdGlvbk9uTGltYmVyR3JpZFxuXHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0dGhpcy5ERU1PX1dBSVRfVElNRVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgc2Nyb2xsVG9wID0gdGhpcy4kbGltYmVyR3JpZFZpZXdbMF0uc2Nyb2xsVG9wO1xuXHRcdFx0dmFyIHNjcm9sbExlZnQgPSB0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5zY3JvbGxMZWZ0O1xuXG5cdFx0XHR2YXIgeCA9IHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbVBvc2l0aW9uWDtcblx0XHRcdHZhciB5ID0gdGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtUG9zaXRpb25ZO1xuXG5cdFx0XHR2YXIgdG91Y2hQb3NpdGlvbk9uTGltYmVyR3JpZCA9IGNhbGN1bGF0ZVRvdWNoUG9zT25MaW1iZXJHcmlkLmNhbGwoXG5cdFx0XHRcdHRoaXMsXG5cdFx0XHRcdGV2ZW50XG5cdFx0XHQpO1xuXG5cdFx0XHRpZiAodG91Y2hQb3NpdGlvbk9uTGltYmVyR3JpZCAhPSBmYWxzZSkge1xuXHRcdFx0XHR2YXIgbmV3V2lkdGggPSB0b3VjaFBvc2l0aW9uT25MaW1iZXJHcmlkLnggLSB4O1xuXHRcdFx0XHR2YXIgbmV3SGVpZ2h0ID0gdG91Y2hQb3NpdGlvbk9uTGltYmVyR3JpZC55IC0geTtcblxuXHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLm5ld1dpZHRoID0gbmV3V2lkdGg7XG5cdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEubmV3SGVpZ2h0ID0gbmV3SGVpZ2h0O1xuXG5cdFx0XHRcdGlmIChuZXdXaWR0aCA+IDAgJiYgbmV3SGVpZ2h0ID4gMCkge1xuXHRcdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1zW1xuXHRcdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhcblx0XHRcdFx0XHRdLnN0eWxlLndpZHRoID0gbmV3V2lkdGggKyBcInB4XCI7XG5cdFx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbXNbXG5cdFx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleFxuXHRcdFx0XHRcdF0uc3R5bGUuaGVpZ2h0ID0gbmV3SGVpZ2h0ICsgXCJweFwiO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1zW1xuXHRcdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhcblx0XHRcdFx0XHRdLmNsYXNzTGlzdC5jb250YWlucyhcblx0XHRcdFx0XHRcdFwibGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbVJlc2l6ZUFsbG93XCJcblx0XHRcdFx0XHQpIHx8XG5cdFx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbXNbXG5cdFx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleFxuXHRcdFx0XHRcdF0uY2xhc3NMaXN0LmNvbnRhaW5zKFxuXHRcdFx0XHRcdFx0XCJsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtUmVzaXplRGlzYWxsb3dcIlxuXHRcdFx0XHRcdClcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbXNbXG5cdFx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleFxuXHRcdFx0XHRcdF0uY2xhc3NMaXN0LnJlbW92ZShcblx0XHRcdFx0XHRcdFwibGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbVJlc2l6ZUFsbG93XCIsXG5cdFx0XHRcdFx0XHRcImxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1SZXNpemVEaXNhbGxvd1wiXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAodG91Y2hQb3NpdGlvbk9uTGltYmVyR3JpZCAhPSBmYWxzZSkge1xuXHRcdFx0XHR2YXIgbGltYmVyR3JpZFZpZXdCb3VuZGluZ0NsaWVudFJlY3QgPSB0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdFx0dmFyIGxpbWJlckdyaWRWaWV3V2lkdGhWaXNpYmxlV2lkdGggPVxuXHRcdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLm9mZnNldFdpZHRoIC1cblx0XHRcdFx0XHRsaW1iZXJHcmlkVmlld0JvdW5kaW5nQ2xpZW50UmVjdC5sZWZ0O1xuXHRcdFx0XHR2YXIgbGltYmVyR3JpZFZpZXdIZWlnaHRWaXNpYmxlSGVpZ2h0ID1cblx0XHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5vZmZzZXRIZWlnaHQgLVxuXHRcdFx0XHRcdGxpbWJlckdyaWRWaWV3Qm91bmRpbmdDbGllbnRSZWN0LnRvcDtcblx0XHRcdFx0dmFyIGxpbWJlckdyaWRWaWV3T25WaXNpYmxlQXJlYVggPVxuXHRcdFx0XHRcdHRvdWNoUG9zaXRpb25PbkxpbWJlckdyaWQueCArXG5cdFx0XHRcdFx0dGhpcy5QQURESU5HX0xFRlQgLVxuXHRcdFx0XHRcdHNjcm9sbExlZnQ7XG5cdFx0XHRcdHZhciBsaW1iZXJHcmlkVmlld09uVmlzaWJsZUFyZWFZID1cblx0XHRcdFx0XHR0b3VjaFBvc2l0aW9uT25MaW1iZXJHcmlkLnkgKyB0aGlzLlBBRERJTkdfVE9QIC0gc2Nyb2xsVG9wO1xuXG5cdFx0XHRcdHZhciB5VG91Y2hQb3NpdGlvbiA9IHRvdWNoUG9zaXRpb25PbkxpbWJlckdyaWQueTtcblx0XHRcdFx0YWRqdXN0SGVpZ2h0LmNhbGwodGhpcywgeVRvdWNoUG9zaXRpb24pO1xuXG5cdFx0XHRcdHZhciBwcm9ncmFtU2Nyb2xsZWQgPSBhZGp1c3RTY3JvbGwuY2FsbChcblx0XHRcdFx0XHR0aGlzLFxuXHRcdFx0XHRcdGxpbWJlckdyaWRWaWV3T25WaXNpYmxlQXJlYVksXG5cdFx0XHRcdFx0bGltYmVyR3JpZFZpZXdIZWlnaHRWaXNpYmxlSGVpZ2h0XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdGNsZWFyVGltZW91dCh0aGlzLnNob3dSZXNpemVEZW1vVGltZU91dFZhcmlhYmxlKTtcblx0XHRcdGlmIChwcm9ncmFtU2Nyb2xsZWQgIT0gdHJ1ZSkge1xuXHRcdFx0XHR0aGlzLnNob3dSZXNpemVEZW1vVGltZU91dFZhcmlhYmxlID0gc2V0VGltZW91dChcblx0XHRcdFx0XHRzaG93UmVzaXplRGVtby5iaW5kKFxuXHRcdFx0XHRcdFx0dGhpcyxcblx0XHRcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4LFxuXHRcdFx0XHRcdFx0bmV3V2lkdGgsXG5cdFx0XHRcdFx0XHRuZXdIZWlnaHRcblx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdHRoaXMuREVNT19XQUlUX1RJTUVcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0dGhpcy50YXBIb2xkQ2FuY2VsID0gdHJ1ZTtcblx0XHRjbGVhclRpbWVvdXQodGhpcy5sb25nVG91Y2hDaGVjayk7XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0XHRcdFwidG91Y2htb3ZlXCIsXG5cdFx0XHR0aGlzLm9uVG91Y2hNb3ZlQmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHRcdCk7XG5cdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdbMF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0XHRcdFwidG91Y2htb3ZlXCIsXG5cdFx0XHR0aGlzLm9uVG91Y2hNb3ZlQmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHRcdCk7XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0XHRcdFwidG91Y2hlbmRcIixcblx0XHRcdHRoaXMub25Ub3VjaEVuZEJpbmRlZEZ1bmN0aW9uVmFyaWFibGVcblx0XHQpO1xuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcImNvbnRleHRtZW51XCIsXG5cdFx0XHR0aGlzLm9uQ29udGV4dE1lbnVCaW5kZWRGdW5jdGlvblZhcmlhYmxlXG5cdFx0KTtcblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuXHRcdFx0XCJjb250ZXh0bWVudVwiLFxuXHRcdFx0dGhpcy5vbkl0ZW1Ub3VjaENvbnRleHRNZW51QmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHRcdCk7XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0XHRcdFwidG91Y2hjYW5jZWxcIixcblx0XHRcdHRoaXMub25Ub3VjaENhbmNlbEJpbmRlZEZ1bmN0aW9uVmFyaWFibGVcblx0XHQpO1xuXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcInRvdWNoc3RhcnRcIixcblx0XHRcdHRoaXMub25MaW1iZXJHcmlkVG91Y2hTdGFydEZ1bmN0aW9uVmFyaWFibGVcblx0XHQpO1xuXG5cdFx0Ly8gY2FuY2VsaW5nIHRhcGhvbGRcblx0fVxuXG5cdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xufTtcblxuZXhwb3J0IGNvbnN0IG9uTW91c2VVcCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdGNsZWFyVGltZW91dCh0aGlzLnNob3dNb3ZlRGVtb1RpbWVPdXRWYXJpYWJsZSk7XG5cdGNsZWFyVGltZW91dCh0aGlzLnNob3dSZXNpemVEZW1vVGltZU91dFZhcmlhYmxlKTtcblx0dmFyIGl0ZW1SZXNpemVGbGFnID0gZmFsc2U7XG5cdHZhciBpdGVtTW92ZUZsYWcgPSBmYWxzZTtcblx0aWYgKHRoaXMubW91c2VEb3duVGltZXJDb21wbGV0ZSA9PSB0cnVlKSB7XG5cdFx0aWYgKHRoaXMudXNlckFjdGlvbkRhdGEudHlwZSA9PSBcIm1vdmVcIikge1xuXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdCb2R5UHNldWRvSXRlbXNbXG5cdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4XG5cdFx0XHRdLmNsYXNzTGlzdC5yZW1vdmUoXCJsaW1iZXJHcmlkVmlld0JvZHlQc2V1ZG9JdGVtQWN0aXZlXCIpO1xuXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdCb2R5UHNldWRvSXRlbXNbXG5cdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4XG5cdFx0XHRdLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlKFwiICsgMCArIFwicHgsIFwiICsgMCArIFwicHgpXCI7XG5cdFx0XHR2YXIgbW91c2VQb3NpdGlvbk9uTGltYmVyR3JpZCA9IGNhbGN1bGF0ZU1vdXNlUG9zT25MaW1iZXJHcmlkLmNhbGwoXG5cdFx0XHRcdHRoaXMsXG5cdFx0XHRcdGV2ZW50XG5cdFx0XHQpO1xuXHRcdFx0aWYgKG1vdXNlUG9zaXRpb25PbkxpbWJlckdyaWQgIT0gZmFsc2UpIHtcblx0XHRcdFx0dmFyIG5ld01vdmVDb29yZGluYXRlcyA9IGNoZWNrTmV3TW92ZUNvb3JkaW5hdGVzLmNhbGwoXG5cdFx0XHRcdFx0dGhpcyxcblx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleCxcblx0XHRcdFx0XHRtb3VzZVBvc2l0aW9uT25MaW1iZXJHcmlkXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGlmIChuZXdNb3ZlQ29vcmRpbmF0ZXMgIT0gZmFsc2UpIHtcblx0XHRcdFx0XHR2YXIgdXBkYXRlZENvb3JkaW5hdGVzID0ge307XG5cdFx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdFx0bmV3TW92ZUNvb3JkaW5hdGVzLmhhc093blByb3BlcnR5KFwicmV2aXNlZENvb3JkaW5hdGVzXCIpXG5cdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHR0aGlzLm1vdmVQbGFuZShcblx0XHRcdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXgsXG5cdFx0XHRcdFx0XHRcdG5ld01vdmVDb29yZGluYXRlcy5yZXZpc2VkQ29vcmRpbmF0ZXMueCxcblx0XHRcdFx0XHRcdFx0bmV3TW92ZUNvb3JkaW5hdGVzLnJldmlzZWRDb29yZGluYXRlcy55XG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0dXBkYXRlZENvb3JkaW5hdGVzLnggPVxuXHRcdFx0XHRcdFx0XHRuZXdNb3ZlQ29vcmRpbmF0ZXMucmV2aXNlZENvb3JkaW5hdGVzLng7XG5cdFx0XHRcdFx0XHR1cGRhdGVkQ29vcmRpbmF0ZXMueSA9XG5cdFx0XHRcdFx0XHRcdG5ld01vdmVDb29yZGluYXRlcy5yZXZpc2VkQ29vcmRpbmF0ZXMueTtcblx0XHRcdFx0XHRcdGl0ZW1Nb3ZlRmxhZyA9IHRydWU7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMubW92ZVBsYW5lKFxuXHRcdFx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleCxcblx0XHRcdFx0XHRcdFx0bmV3TW92ZUNvb3JkaW5hdGVzLngsXG5cdFx0XHRcdFx0XHRcdG5ld01vdmVDb29yZGluYXRlcy55XG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0dXBkYXRlZENvb3JkaW5hdGVzLnggPSBuZXdNb3ZlQ29vcmRpbmF0ZXMueDtcblx0XHRcdFx0XHRcdHVwZGF0ZWRDb29yZGluYXRlcy55ID0gbmV3TW92ZUNvb3JkaW5hdGVzLnk7XG5cdFx0XHRcdFx0XHRpdGVtTW92ZUZsYWcgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXZlcnRTaG93TW92ZU9yUmVzaXplRGVtby5jYWxsKHRoaXMpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXZlcnRTaG93TW92ZU9yUmVzaXplRGVtby5jYWxsKHRoaXMpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgc2Nyb2xsVG9wID0gdGhpcy4kbGltYmVyR3JpZFZpZXdbMF0uc2Nyb2xsVG9wO1xuXHRcdFx0dmFyIHNjcm9sbExlZnQgPSB0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5zY3JvbGxMZWZ0O1xuXG5cdFx0XHR2YXIgeCA9IHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbVBvc2l0aW9uWDtcblx0XHRcdHZhciB5ID0gdGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtUG9zaXRpb25ZO1xuXG5cdFx0XHR2YXIgbmV3V2lkdGggPSB0aGlzLnVzZXJBY3Rpb25EYXRhLm5ld1dpZHRoO1xuXHRcdFx0dmFyIG5ld0hlaWdodCA9IHRoaXMudXNlckFjdGlvbkRhdGEubmV3SGVpZ2h0O1xuXG5cdFx0XHRpZiAobmV3V2lkdGggPiAwICYmIG5ld0hlaWdodCA+IDApIHtcblx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbXNbXG5cdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhcblx0XHRcdFx0XS5zdHlsZS53aWR0aCA9IG5ld1dpZHRoICsgXCJweFwiO1xuXHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtc1tcblx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleFxuXHRcdFx0XHRdLnN0eWxlLmhlaWdodCA9IG5ld0hlaWdodCArIFwicHhcIjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKFxuXHRcdFx0XHR0aGlzLnJlc2l6ZVBsYW5lKFxuXHRcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4LFxuXHRcdFx0XHRcdG5ld1dpZHRoLFxuXHRcdFx0XHRcdG5ld0hlaWdodFxuXHRcdFx0XHQpID09IGZhbHNlXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV2ZXJ0U2hvd01vdmVPclJlc2l6ZURlbW8uY2FsbCh0aGlzKTtcblx0XHRcdFx0aXRlbVJlc2l6ZUZsYWcgPSB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtc1tcblx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhcblx0XHRcdF0uc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUoXCIgKyAwICsgXCJweCwgXCIgKyAwICsgXCJweClcIjtcblx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1zW1xuXHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleFxuXHRcdFx0XS5jbGFzc0xpc3QucmVtb3ZlKFwibGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbUFjdGl2ZVwiKTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0dGhpcy5tb3VzZURvd25DYW5jZWwgPSB0cnVlO1xuXHRcdGNsZWFyVGltZW91dCh0aGlzLmxvbmdQcmVzc0NoZWNrKTtcblx0XHQvLyBjYW5jZWxpbmcgbW91c2VIb2xkXG5cdH1cblx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0XHRcIm1vdXNlbW92ZVwiLFxuXHRcdHRoaXMub25Nb3VzZU1vdmVCaW5kZWRGdW5jdGlvblZhcmlhYmxlXG5cdCk7XG5cdHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoXG5cdFx0XCJtb3VzZW1vdmVcIixcblx0XHR0aGlzLm9uTW91c2VNb3ZlQmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHQpO1xuXHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuXHRcdFwibW91c2V1cFwiLFxuXHRcdHRoaXMub25Nb3VzZVVwQmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHQpO1xuXHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuXHRcdFwiY29udGV4dG1lbnVcIixcblx0XHR0aGlzLm9uQ29udGV4dE1lbnVCaW5kZWRGdW5jdGlvblZhcmlhYmxlXG5cdCk7XG5cblx0dGhpcy4kYm9keVswXS5jbGFzc0xpc3QucmVtb3ZlKFxuXHRcdFwibGltYmVyR3JpZFZpZXdCb2R5VGFnU3RhdGVFbGVtZW50RHJhZ2dpbmdPclJlc2l6aW5nXCJcblx0KTtcblx0dGhpcy4kbGltYmVyR3JpZFZpZXdNb3ZlR3VpZGVbMF0uY2xhc3NMaXN0LnJlbW92ZShcblx0XHRcImxpbWJlckdyaWRWaWV3TW92ZUd1aWRlQWN0aXZlXCJcblx0KTtcblxuXHR0aGlzLiRsaW1iZXJHcmlkVmlld0hlaWdodEFkanVzdEd1aWRlWzBdLmNsYXNzTGlzdC5yZW1vdmUoXG5cdFx0XCJsaW1iZXJHcmlkVmlld0hlaWdodEFkanVzdEd1aWRlQWN0aXZlXCJcblx0KTtcblxuXHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHQvL1xuXHRpZiAoXG5cdFx0dGhpcy5jYWxsYmFja3MubW92ZUNvbXBsZXRlQ2FsbGJhY2sgIT0gdW5kZWZpbmVkICYmXG5cdFx0dGhpcy5jYWxsYmFja3MubW92ZUNvbXBsZXRlQ2FsbGJhY2sgIT0gbnVsbFxuXHQpIHtcblx0XHRpZiAoaXRlbU1vdmVGbGFnID09IHRydWUpIHtcblx0XHRcdHVwZGF0ZWRDb29yZGluYXRlcy53aWR0aCA9IHRoaXMucG9zaXRpb25EYXRhW1xuXHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleFxuXHRcdFx0XS53aWR0aDtcblx0XHRcdHVwZGF0ZWRDb29yZGluYXRlcy5oZWlnaHQgPSB0aGlzLnBvc2l0aW9uRGF0YVtcblx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhcblx0XHRcdF0uaGVpZ2h0O1xuXHRcdFx0dGhpcy5jYWxsYmFja3MubW92ZUNvbXBsZXRlQ2FsbGJhY2soXG5cdFx0XHRcdHRydWUsXG5cdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4LFxuXHRcdFx0XHR1cGRhdGVkQ29vcmRpbmF0ZXNcblx0XHRcdCk7XG5cdFx0fSBlbHNlIGlmICh0aGlzLnVzZXJBY3Rpb25EYXRhLnR5cGUgPT0gXCJtb3ZlXCIpIHtcblx0XHRcdHRoaXMuY2FsbGJhY2tzLm1vdmVDb21wbGV0ZUNhbGxiYWNrKFxuXHRcdFx0XHRmYWxzZSxcblx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXgsXG5cdFx0XHRcdGV2ZW50XG5cdFx0XHQpO1xuXHRcdH1cblx0fVxuXHRpZiAoXG5cdFx0dGhpcy5jYWxsYmFja3MucmVzaXplQ29tcGxldGVDYWxsYmFjayAhPSB1bmRlZmluZWQgJiZcblx0XHR0aGlzLmNhbGxiYWNrcy5yZXNpemVDb21wbGV0ZUNhbGxiYWNrICE9IG51bGxcblx0KSB7XG5cdFx0aWYgKGl0ZW1SZXNpemVGbGFnID09IHRydWUpIHtcblx0XHRcdHRoaXMuY2FsbGJhY2tzLnJlc2l6ZUNvbXBsZXRlQ2FsbGJhY2soXG5cdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0eDogdGhpcy5wb3NpdGlvbkRhdGFbdGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhdLngsXG5cdFx0XHRcdFx0eTogdGhpcy5wb3NpdGlvbkRhdGFbdGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhdLnksXG5cdFx0XHRcdFx0aGVpZ2h0OiBuZXdIZWlnaHQsXG5cdFx0XHRcdFx0d2lkdGg6IG5ld1dpZHRoXG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0fVxuXHR9XG5cdC8vXG5cblx0dGhpcy51c2VyQWN0aW9uRGF0YSA9IG51bGw7XG59O1xuXG5leHBvcnQgY29uc3Qgb25Ub3VjaEVuZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdGNsZWFyVGltZW91dCh0aGlzLnNob3dNb3ZlRGVtb1RpbWVPdXRWYXJpYWJsZSk7XG5cdGNsZWFyVGltZW91dCh0aGlzLnNob3dSZXNpemVEZW1vVGltZU91dFZhcmlhYmxlKTtcblx0dmFyIGl0ZW1SZXNpemVGbGFnID0gZmFsc2U7XG5cdHZhciBpdGVtTW92ZUZsYWcgPSBmYWxzZTtcblx0aWYgKHRoaXMudGFwSG9sZFRpbWVyQ29tcGxldGUgPT0gdHJ1ZSkge1xuXHRcdGlmICh0aGlzLnVzZXJBY3Rpb25EYXRhLnR5cGUgPT0gXCJtb3ZlXCIpIHtcblx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3Qm9keVBzZXVkb0l0ZW1zW1xuXHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleFxuXHRcdFx0XS5jbGFzc0xpc3QucmVtb3ZlKFwibGltYmVyR3JpZFZpZXdCb2R5UHNldWRvSXRlbUFjdGl2ZVwiKTtcblx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3Qm9keVBzZXVkb0l0ZW1zW1xuXHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleFxuXHRcdFx0XS5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZShcIiArIDAgKyBcInB4LCBcIiArIDAgKyBcInB4KVwiO1xuXHRcdFx0dmFyIHRvdWNoUG9zaXRpb25PbkxpbWJlckdyaWQgPSBjYWxjdWxhdGVUb3VjaFBvc09uTGltYmVyR3JpZC5jYWxsKFxuXHRcdFx0XHR0aGlzLFxuXHRcdFx0XHRldmVudFxuXHRcdFx0KTtcblx0XHRcdGlmICh0b3VjaFBvc2l0aW9uT25MaW1iZXJHcmlkICE9IGZhbHNlKSB7XG5cdFx0XHRcdHZhciBuZXdNb3ZlQ29vcmRpbmF0ZXMgPSBjaGVja05ld01vdmVDb29yZGluYXRlcy5jYWxsKFxuXHRcdFx0XHRcdHRoaXMsXG5cdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXgsXG5cdFx0XHRcdFx0dG91Y2hQb3NpdGlvbk9uTGltYmVyR3JpZFxuXHRcdFx0XHQpO1xuXHRcdFx0XHRpZiAobmV3TW92ZUNvb3JkaW5hdGVzICE9IGZhbHNlKSB7XG5cdFx0XHRcdFx0dmFyIHVwZGF0ZWRDb29yZGluYXRlcyA9IHt9O1xuXHRcdFx0XHRcdGlmIChcblx0XHRcdFx0XHRcdG5ld01vdmVDb29yZGluYXRlcy5oYXNPd25Qcm9wZXJ0eShcInJldmlzZWRDb29yZGluYXRlc1wiKVxuXHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0dGhpcy5tb3ZlUGxhbmUoXG5cdFx0XHRcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4LFxuXHRcdFx0XHRcdFx0XHRuZXdNb3ZlQ29vcmRpbmF0ZXMucmV2aXNlZENvb3JkaW5hdGVzLngsXG5cdFx0XHRcdFx0XHRcdG5ld01vdmVDb29yZGluYXRlcy5yZXZpc2VkQ29vcmRpbmF0ZXMueVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdHVwZGF0ZWRDb29yZGluYXRlcy54ID1cblx0XHRcdFx0XHRcdFx0bmV3TW92ZUNvb3JkaW5hdGVzLnJldmlzZWRDb29yZGluYXRlcy54O1xuXHRcdFx0XHRcdFx0dXBkYXRlZENvb3JkaW5hdGVzLnkgPVxuXHRcdFx0XHRcdFx0XHRuZXdNb3ZlQ29vcmRpbmF0ZXMucmV2aXNlZENvb3JkaW5hdGVzLnk7XG5cdFx0XHRcdFx0XHRpdGVtTW92ZUZsYWcgPSB0cnVlO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLm1vdmVQbGFuZShcblx0XHRcdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXgsXG5cdFx0XHRcdFx0XHRcdG5ld01vdmVDb29yZGluYXRlcy54LFxuXHRcdFx0XHRcdFx0XHRuZXdNb3ZlQ29vcmRpbmF0ZXMueVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdHVwZGF0ZWRDb29yZGluYXRlcy54ID0gbmV3TW92ZUNvb3JkaW5hdGVzLng7XG5cdFx0XHRcdFx0XHR1cGRhdGVkQ29vcmRpbmF0ZXMueSA9IG5ld01vdmVDb29yZGluYXRlcy55O1xuXHRcdFx0XHRcdFx0aXRlbU1vdmVGbGFnID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV2ZXJ0U2hvd01vdmVPclJlc2l6ZURlbW8uY2FsbCh0aGlzKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV2ZXJ0U2hvd01vdmVPclJlc2l6ZURlbW8uY2FsbCh0aGlzKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHNjcm9sbFRvcCA9IHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLnNjcm9sbFRvcDtcblx0XHRcdHZhciBzY3JvbGxMZWZ0ID0gdGhpcy4kbGltYmVyR3JpZFZpZXdbMF0uc2Nyb2xsTGVmdDtcblxuXHRcdFx0dmFyIHggPSB0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1Qb3NpdGlvblg7XG5cdFx0XHR2YXIgeSA9IHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbVBvc2l0aW9uWTtcblxuXHRcdFx0dmFyIG5ld1dpZHRoID0gdGhpcy51c2VyQWN0aW9uRGF0YS5uZXdXaWR0aDtcblx0XHRcdHZhciBuZXdIZWlnaHQgPSB0aGlzLnVzZXJBY3Rpb25EYXRhLm5ld0hlaWdodDtcblxuXHRcdFx0aWYgKG5ld1dpZHRoID4gMCAmJiBuZXdIZWlnaHQgPiAwKSB7XG5cdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1zW1xuXHRcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4XG5cdFx0XHRcdF0uc3R5bGUud2lkdGggPSBuZXdXaWR0aCArIFwicHhcIjtcblx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbXNbXG5cdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhcblx0XHRcdFx0XS5zdHlsZS5oZWlnaHQgPSBuZXdIZWlnaHQgKyBcInB4XCI7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChcblx0XHRcdFx0dGhpcy5yZXNpemVQbGFuZShcblx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleCxcblx0XHRcdFx0XHRuZXdXaWR0aCxcblx0XHRcdFx0XHRuZXdIZWlnaHRcblx0XHRcdFx0KSA9PSBmYWxzZVxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldmVydFNob3dNb3ZlT3JSZXNpemVEZW1vLmNhbGwodGhpcyk7XG5cdFx0XHRcdGl0ZW1SZXNpemVGbGFnID0gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbXNbXG5cdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4XG5cdFx0XHRdLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlKFwiICsgMCArIFwicHgsIFwiICsgMCArIFwicHgpXCI7XG5cdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtc1tcblx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhcblx0XHRcdF0uY2xhc3NMaXN0LnJlbW92ZShcImxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1BY3RpdmVcIik7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHRoaXMudGFwSG9sZENhbmNlbCA9IHRydWU7XG5cdFx0Y2xlYXJUaW1lb3V0KHRoaXMubG9uZ1RvdWNoQ2hlY2spO1xuXG5cdFx0Ly8gY2FuY2VsaW5nIHRhcGhvbGRcblx0fVxuXG5cdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG5cdFx0XCJ0b3VjaG1vdmVcIixcblx0XHR0aGlzLm9uVG91Y2hNb3ZlQmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHQpO1xuXHR0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5yZW1vdmVFdmVudExpc3RlbmVyKFxuXHRcdFwidG91Y2htb3ZlXCIsXG5cdFx0dGhpcy5vblRvdWNoTW92ZUJpbmRlZEZ1bmN0aW9uVmFyaWFibGVcblx0KTtcblx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0XHRcInRvdWNoZW5kXCIsXG5cdFx0dGhpcy5vblRvdWNoRW5kQmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHQpO1xuXHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuXHRcdFwiY29udGV4dG1lbnVcIixcblx0XHR0aGlzLm9uQ29udGV4dE1lbnVCaW5kZWRGdW5jdGlvblZhcmlhYmxlXG5cdCk7XG5cdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG5cdFx0XCJjb250ZXh0bWVudVwiLFxuXHRcdHRoaXMub25JdGVtVG91Y2hDb250ZXh0TWVudUJpbmRlZEZ1bmN0aW9uVmFyaWFibGVcblx0KTtcblx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0XHRcInRvdWNoY2FuY2VsXCIsXG5cdFx0dGhpcy5vblRvdWNoQ2FuY2VsQmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHQpO1xuXHR0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFwidG91Y2hzdGFydFwiLFxuXHRcdHRoaXMub25MaW1iZXJHcmlkVG91Y2hTdGFydEZ1bmN0aW9uVmFyaWFibGVcblx0KTtcblxuXHR0aGlzLiRib2R5WzBdLmNsYXNzTGlzdC5yZW1vdmUoXG5cdFx0XCJsaW1iZXJHcmlkVmlld0JvZHlUYWdTdGF0ZUVsZW1lbnREcmFnZ2luZ09yUmVzaXppbmdcIlxuXHQpO1xuXHR0aGlzLiRsaW1iZXJHcmlkVmlld01vdmVHdWlkZVswXS5jbGFzc0xpc3QucmVtb3ZlKFxuXHRcdFwibGltYmVyR3JpZFZpZXdNb3ZlR3VpZGVBY3RpdmVcIlxuXHQpO1xuXG5cdHRoaXMuJGxpbWJlckdyaWRWaWV3SGVpZ2h0QWRqdXN0R3VpZGVbMF0uY2xhc3NMaXN0LnJlbW92ZShcblx0XHRcImxpbWJlckdyaWRWaWV3SGVpZ2h0QWRqdXN0R3VpZGVBY3RpdmVcIlxuXHQpO1xuXG5cdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdC8vXG5cdGlmIChcblx0XHR0aGlzLmNhbGxiYWNrcy5tb3ZlQ29tcGxldGVDYWxsYmFjayAhPSB1bmRlZmluZWQgJiZcblx0XHR0aGlzLmNhbGxiYWNrcy5tb3ZlQ29tcGxldGVDYWxsYmFjayAhPSBudWxsXG5cdCkge1xuXHRcdGlmIChpdGVtTW92ZUZsYWcgPT0gdHJ1ZSkge1xuXHRcdFx0dXBkYXRlZENvb3JkaW5hdGVzLndpZHRoID0gdGhpcy5wb3NpdGlvbkRhdGFbXG5cdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4XG5cdFx0XHRdLndpZHRoO1xuXHRcdFx0dXBkYXRlZENvb3JkaW5hdGVzLmhlaWdodCA9IHRoaXMucG9zaXRpb25EYXRhW1xuXHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleFxuXHRcdFx0XS5oZWlnaHQ7XG5cdFx0XHR0aGlzLmNhbGxiYWNrcy5tb3ZlQ29tcGxldGVDYWxsYmFjayhcblx0XHRcdFx0dHJ1ZSxcblx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXgsXG5cdFx0XHRcdHVwZGF0ZWRDb29yZGluYXRlc1xuXHRcdFx0KTtcblx0XHR9IGVsc2UgaWYgKHRoaXMudXNlckFjdGlvbkRhdGEudHlwZSA9PSBcIm1vdmVcIikge1xuXHRcdFx0dGhpcy5jYWxsYmFja3MubW92ZUNvbXBsZXRlQ2FsbGJhY2soXG5cdFx0XHRcdGZhbHNlLFxuXHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleCxcblx0XHRcdFx0ZXZlbnRcblx0XHRcdCk7XG5cdFx0fVxuXHR9XG5cdGlmIChcblx0XHR0aGlzLmNhbGxiYWNrcy5yZXNpemVDb21wbGV0ZUNhbGxiYWNrICE9IHVuZGVmaW5lZCAmJlxuXHRcdHRoaXMuY2FsbGJhY2tzLnJlc2l6ZUNvbXBsZXRlQ2FsbGJhY2sgIT0gbnVsbFxuXHQpIHtcblx0XHRpZiAoaXRlbVJlc2l6ZUZsYWcgPT0gdHJ1ZSkge1xuXHRcdFx0dGhpcy5jYWxsYmFja3MucmVzaXplQ29tcGxldGVDYWxsYmFjayhcblx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXgsXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR4OiB0aGlzLnBvc2l0aW9uRGF0YVt0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleF0ueCxcblx0XHRcdFx0XHR5OiB0aGlzLnBvc2l0aW9uRGF0YVt0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleF0ueSxcblx0XHRcdFx0XHRoZWlnaHQ6IG5ld0hlaWdodCxcblx0XHRcdFx0XHR3aWR0aDogbmV3V2lkdGhcblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHR9XG5cdH1cblx0Ly9cblxuXHR0aGlzLnVzZXJBY3Rpb25EYXRhID0gbnVsbDtcbn07XG5cbmV4cG9ydCBjb25zdCBvbkNvbnRleHRNZW51ID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0Y2xlYXJUaW1lb3V0KHRoaXMuc2hvd01vdmVEZW1vVGltZU91dFZhcmlhYmxlKTtcblx0Y2xlYXJUaW1lb3V0KHRoaXMuc2hvd1Jlc2l6ZURlbW9UaW1lT3V0VmFyaWFibGUpO1xuXG5cdHJldmVydFNob3dNb3ZlT3JSZXNpemVEZW1vLmNhbGwodGhpcyk7XG5cblx0dGhpcy4kbGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbXNbXG5cdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhcblx0XS5jbGFzc0xpc3QucmVtb3ZlKFwibGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbUFjdGl2ZVwiKTtcblxuXHR0aGlzLiRsaW1iZXJHcmlkVmlld0JvZHlQc2V1ZG9JdGVtc1tcblx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleFxuXHRdLmNsYXNzTGlzdC5yZW1vdmUoXCJsaW1iZXJHcmlkVmlld0JvZHlQc2V1ZG9JdGVtQWN0aXZlXCIpO1xuXHR0aGlzLiRsaW1iZXJHcmlkVmlld0JvZHlQc2V1ZG9JdGVtc1tcblx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleFxuXHRdLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlKFwiICsgMCArIFwicHgsIFwiICsgMCArIFwicHgpXCI7XG5cblx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0XHRcIm1vdXNlbW92ZVwiLFxuXHRcdHRoaXMub25Nb3VzZU1vdmVCaW5kZWRGdW5jdGlvblZhcmlhYmxlXG5cdCk7XG5cdHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoXG5cdFx0XCJtb3VzZW1vdmVcIixcblx0XHR0aGlzLm9uTW91c2VNb3ZlQmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHQpO1xuXHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuXHRcdFwibW91c2V1cFwiLFxuXHRcdHRoaXMub25Nb3VzZVVwQmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHQpO1xuXG5cdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG5cdFx0XCJ0b3VjaG1vdmVcIixcblx0XHR0aGlzLm9uVG91Y2hNb3ZlQmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHQpO1xuXHR0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5yZW1vdmVFdmVudExpc3RlbmVyKFxuXHRcdFwidG91Y2htb3ZlXCIsXG5cdFx0dGhpcy5vblRvdWNoTW92ZUJpbmRlZEZ1bmN0aW9uVmFyaWFibGVcblx0KTtcblx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0XHRcInRvdWNoZW5kXCIsXG5cdFx0dGhpcy5vblRvdWNoRW5kQmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHQpO1xuXHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuXHRcdFwiY29udGV4dG1lbnVcIixcblx0XHR0aGlzLm9uSXRlbVRvdWNoQ29udGV4dE1lbnVCaW5kZWRGdW5jdGlvblZhcmlhYmxlXG5cdCk7XG5cdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG5cdFx0XCJ0b3VjaGNhbmNlbFwiLFxuXHRcdHRoaXMub25Ub3VjaENhbmNlbEJpbmRlZEZ1bmN0aW9uVmFyaWFibGVcblx0KTtcblxuXHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuXHRcdFwiY29udGV4dG1lbnVcIixcblx0XHR0aGlzLm9uQ29udGV4dE1lbnVCaW5kZWRGdW5jdGlvblZhcmlhYmxlXG5cdCk7XG5cblx0dGhpcy4kYm9keVswXS5jbGFzc0xpc3QucmVtb3ZlKFxuXHRcdFwibGltYmVyR3JpZFZpZXdCb2R5VGFnU3RhdGVFbGVtZW50RHJhZ2dpbmdPclJlc2l6aW5nXCJcblx0KTtcblx0dGhpcy4kbGltYmVyR3JpZFZpZXdNb3ZlR3VpZGVbMF0uY2xhc3NMaXN0LnJlbW92ZShcblx0XHRcImxpbWJlckdyaWRWaWV3TW92ZUd1aWRlQWN0aXZlXCJcblx0KTtcblxuXHR0aGlzLiRsaW1iZXJHcmlkVmlld0hlaWdodEFkanVzdEd1aWRlWzBdLmNsYXNzTGlzdC5yZW1vdmUoXG5cdFx0XCJsaW1iZXJHcmlkVmlld0hlaWdodEFkanVzdEd1aWRlQWN0aXZlXCJcblx0KTtcblxuXHR0aGlzLnVzZXJBY3Rpb25EYXRhID0gbnVsbDtcblxuXHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbn07XG5cbmV4cG9ydCBjb25zdCBvbkl0ZW1Ub3VjaENvbnRleHRNZW51ID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBvblRvdWNoQ2FuY2VsID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0b25Db250ZXh0TWVudS5jYWxsKHRoaXMpO1xuXHR0aGlzLnRhcEhvbGRUaW1lckNvbXBsZXRlID0gZmFsc2U7XG5cdHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0XCJ0b3VjaHN0YXJ0XCIsXG5cdFx0dGhpcy5vbkxpbWJlckdyaWRUb3VjaFN0YXJ0RnVuY3Rpb25WYXJpYWJsZVxuXHQpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNhbGN1bGF0ZU1vdXNlUG9zT25MaW1iZXJHcmlkID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0dmFyIGxpbWJlckdyaWRWaWV3UG9zaXRpb24gPSB0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0aWYgKFxuXHRcdGV2ZW50LmNsaWVudFggPj0gbGltYmVyR3JpZFZpZXdQb3NpdGlvbi5sZWZ0ICYmXG5cdFx0ZXZlbnQuY2xpZW50WCA8PVxuXHRcdFx0bGltYmVyR3JpZFZpZXdQb3NpdGlvbi5sZWZ0ICsgbGltYmVyR3JpZFZpZXdQb3NpdGlvbi53aWR0aCAmJlxuXHRcdChldmVudC5jbGllbnRZID49IGxpbWJlckdyaWRWaWV3UG9zaXRpb24udG9wICYmXG5cdFx0XHRldmVudC5jbGllbnRZIDw9XG5cdFx0XHRcdGxpbWJlckdyaWRWaWV3UG9zaXRpb24udG9wICsgbGltYmVyR3JpZFZpZXdQb3NpdGlvbi5oZWlnaHQpXG5cdCkge1xuXHRcdHZhciBzY3JvbGxUb3AgPSB0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5zY3JvbGxUb3A7XG5cdFx0dmFyIHNjcm9sbExlZnQgPSB0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5zY3JvbGxMZWZ0O1xuXG5cdFx0dmFyIG1vdXNlWE9uTGltYmVyR3JpZFZpZXcgPVxuXHRcdFx0ZXZlbnQuY2xpZW50WCAtXG5cdFx0XHRsaW1iZXJHcmlkVmlld1Bvc2l0aW9uLmxlZnQgLVxuXHRcdFx0dGhpcy5QQURESU5HX0xFRlQgK1xuXHRcdFx0c2Nyb2xsTGVmdDtcblx0XHR2YXIgbW91c2VZT25MaW1iZXJHcmlkVmlldyA9XG5cdFx0XHRldmVudC5jbGllbnRZIC1cblx0XHRcdGxpbWJlckdyaWRWaWV3UG9zaXRpb24udG9wIC1cblx0XHRcdHRoaXMuUEFERElOR19UT1AgK1xuXHRcdFx0c2Nyb2xsVG9wO1xuXG5cdFx0aWYgKG1vdXNlWE9uTGltYmVyR3JpZFZpZXcgPCAwIHx8IG1vdXNlWU9uTGltYmVyR3JpZFZpZXcgPCAwKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiB7IHg6IG1vdXNlWE9uTGltYmVyR3JpZFZpZXcsIHk6IG1vdXNlWU9uTGltYmVyR3JpZFZpZXcgfTtcblx0fSBlbHNlIHtcblx0XHQvLyBtb3VzZSBwb2ludGVyIE5PVCBpbnNpZGUgbGltYmVyR3JpZFZpZXdcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG5cbmV4cG9ydCBjb25zdCBjYWxjdWxhdGVUb3VjaFBvc09uTGltYmVyR3JpZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdHZhciBsaW1iZXJHcmlkVmlld1Bvc2l0aW9uID0gdGhpcy4kbGltYmVyR3JpZFZpZXdbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cblx0aWYgKGV2ZW50LnR5cGUgPT0gXCJ0b3VjaGVuZFwiKSB7XG5cdFx0dmFyIHRvdWNoID0ge1xuXHRcdFx0Y2xpZW50WDogZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCxcblx0XHRcdGNsaWVudFk6IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFlcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHZhciB0b3VjaCA9IHtcblx0XHRcdGNsaWVudFg6IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCxcblx0XHRcdGNsaWVudFk6IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WVxuXHRcdH07XG5cdH1cblx0aWYgKFxuXHRcdHRvdWNoLmNsaWVudFggPj0gbGltYmVyR3JpZFZpZXdQb3NpdGlvbi5sZWZ0ICYmXG5cdFx0dG91Y2guY2xpZW50WCA8PVxuXHRcdFx0bGltYmVyR3JpZFZpZXdQb3NpdGlvbi5sZWZ0ICsgbGltYmVyR3JpZFZpZXdQb3NpdGlvbi53aWR0aCAmJlxuXHRcdCh0b3VjaC5jbGllbnRZID49IGxpbWJlckdyaWRWaWV3UG9zaXRpb24udG9wICYmXG5cdFx0XHR0b3VjaC5jbGllbnRZIDw9XG5cdFx0XHRcdGxpbWJlckdyaWRWaWV3UG9zaXRpb24udG9wICsgbGltYmVyR3JpZFZpZXdQb3NpdGlvbi5oZWlnaHQpXG5cdCkge1xuXHRcdHZhciBzY3JvbGxUb3AgPSB0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5zY3JvbGxUb3A7XG5cdFx0dmFyIHNjcm9sbExlZnQgPSB0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5zY3JvbGxMZWZ0O1xuXG5cdFx0dmFyIHRvdWNoWE9uTGltYmVyR3JpZFZpZXcgPVxuXHRcdFx0dG91Y2guY2xpZW50WCAtXG5cdFx0XHRsaW1iZXJHcmlkVmlld1Bvc2l0aW9uLmxlZnQgLVxuXHRcdFx0dGhpcy5QQURESU5HX0xFRlQgK1xuXHRcdFx0c2Nyb2xsTGVmdDtcblx0XHR2YXIgdG91Y2hZT25MaW1iZXJHcmlkVmlldyA9XG5cdFx0XHR0b3VjaC5jbGllbnRZIC1cblx0XHRcdGxpbWJlckdyaWRWaWV3UG9zaXRpb24udG9wIC1cblx0XHRcdHRoaXMuUEFERElOR19UT1AgK1xuXHRcdFx0c2Nyb2xsVG9wO1xuXG5cdFx0aWYgKHRvdWNoWE9uTGltYmVyR3JpZFZpZXcgPCAwIHx8IHRvdWNoWU9uTGltYmVyR3JpZFZpZXcgPCAwKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiB7IHg6IHRvdWNoWE9uTGltYmVyR3JpZFZpZXcsIHk6IHRvdWNoWU9uTGltYmVyR3JpZFZpZXcgfTtcblx0fSBlbHNlIHtcblx0XHQvLyB0b3VjaCBOT1QgaW5zaWRlIGxpbWJlckdyaWRWaWV3XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xuXG5leHBvcnQgY29uc3QgY2FsY3VsYXRlVG91Y2hQb3NPbkxpbWJlckdyaWRJdGVtID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0dmFyIGxpbWJlckdyaWRWaWV3SXRlbVBvc2l0aW9uID0gdGhpcy4kbGltYmVyR3JpZFZpZXdJdGVtc1tcblx0XHRldmVudC5jdXJyZW50VGFyZ2V0LmF0dHJpYnV0ZXNbXCJkYXRhLWluZGV4XCJdLnZhbHVlXG5cdF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cblx0aWYgKFxuXHRcdGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCA+PSBsaW1iZXJHcmlkVmlld0l0ZW1Qb3NpdGlvbi5sZWZ0ICYmXG5cdFx0ZXZlbnQudG91Y2hlc1swXS5jbGllbnRYIDw9XG5cdFx0XHRsaW1iZXJHcmlkVmlld0l0ZW1Qb3NpdGlvbi5sZWZ0ICtcblx0XHRcdFx0bGltYmVyR3JpZFZpZXdJdGVtUG9zaXRpb24ud2lkdGggJiZcblx0XHQoZXZlbnQudG91Y2hlc1swXS5jbGllbnRZID49IGxpbWJlckdyaWRWaWV3SXRlbVBvc2l0aW9uLnRvcCAmJlxuXHRcdFx0ZXZlbnQudG91Y2hlc1swXS5jbGllbnRZIDw9XG5cdFx0XHRcdGxpbWJlckdyaWRWaWV3SXRlbVBvc2l0aW9uLnRvcCArXG5cdFx0XHRcdFx0bGltYmVyR3JpZFZpZXdJdGVtUG9zaXRpb24uaGVpZ2h0KVxuXHQpIHtcblx0XHR2YXIgdG91Y2hYT25MaW1iZXJHcmlkVmlldyA9XG5cdFx0XHRldmVudC50b3VjaGVzWzBdLmNsaWVudFggLSBsaW1iZXJHcmlkVmlld0l0ZW1Qb3NpdGlvbi5sZWZ0O1xuXHRcdHZhciB0b3VjaFlPbkxpbWJlckdyaWRWaWV3ID1cblx0XHRcdGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSAtIGxpbWJlckdyaWRWaWV3SXRlbVBvc2l0aW9uLnRvcDtcblxuXHRcdHJldHVybiB7IHg6IHRvdWNoWE9uTGltYmVyR3JpZFZpZXcsIHk6IHRvdWNoWU9uTGltYmVyR3JpZFZpZXcgfTtcblx0fSBlbHNlIHtcblx0XHQvLyB0b3VjaCBOT1QgaW5zaWRlIGxpbWJlckdyaWRWaWV3SXRlbVxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcblxuZXhwb3J0IGNvbnN0IGNoZWNrTmV3TW92ZUNvb3JkaW5hdGVzID0gZnVuY3Rpb24oXG5cdGluZGV4T2ZNb3ZlZEl0ZW0sXG5cdG1vdXNlUG9zaXRpb25zXG4pIHtcblx0aWYgKG1vdXNlUG9zaXRpb25zID09IGZhbHNlKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0dmFyIHggPSBtb3VzZVBvc2l0aW9ucy54O1xuXHR2YXIgeSA9IG1vdXNlUG9zaXRpb25zLnk7XG5cdHZhciB3aWR0aE9mTW92ZWRJdGVtID0gdGhpcy5wb3NpdGlvbkRhdGFbaW5kZXhPZk1vdmVkSXRlbV0ud2lkdGg7XG5cdHZhciBoZWlnaHRPZk1vdmVkSXRlbSA9IHRoaXMucG9zaXRpb25EYXRhW2luZGV4T2ZNb3ZlZEl0ZW1dLmhlaWdodDtcblxuXHR2YXIgaXNJbnNpZGUgPSBmYWxzZTtcblx0dmFyIGluZGV4T2ZPdmVybGFwcGluZ0l0ZW0gPSBudWxsO1xuXHR2YXIgbGVuZ3RoXzAgPSB0aGlzLnBvc2l0aW9uRGF0YS5sZW5ndGg7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHRcdHZhciBpdGVtVG9wTGVmdCA9IFt0aGlzLnBvc2l0aW9uRGF0YVtpXS54LCB0aGlzLnBvc2l0aW9uRGF0YVtpXS55XTtcblx0XHR2YXIgaXRlbVRvcFJpZ2h0ID0gW1xuXHRcdFx0dGhpcy5wb3NpdGlvbkRhdGFbaV0ueCArIHRoaXMucG9zaXRpb25EYXRhW2ldLndpZHRoLFxuXHRcdFx0dGhpcy5wb3NpdGlvbkRhdGFbaV0ueVxuXHRcdF07XG5cdFx0dmFyIGl0ZW1Cb3R0b21MZWZ0ID0gW1xuXHRcdFx0dGhpcy5wb3NpdGlvbkRhdGFbaV0ueCxcblx0XHRcdHRoaXMucG9zaXRpb25EYXRhW2ldLnkgKyB0aGlzLnBvc2l0aW9uRGF0YVtpXS5oZWlnaHRcblx0XHRdO1xuXHRcdHZhciBpdGVtQm90dG9tUmlnaHQgPSBbXG5cdFx0XHR0aGlzLnBvc2l0aW9uRGF0YVtpXS54ICsgdGhpcy5wb3NpdGlvbkRhdGFbaV0ud2lkdGgsXG5cdFx0XHR0aGlzLnBvc2l0aW9uRGF0YVtpXS55ICsgdGhpcy5wb3NpdGlvbkRhdGFbaV0uaGVpZ2h0XG5cdFx0XTtcblxuXHRcdGlmIChcblx0XHRcdHggPj0gaXRlbVRvcExlZnRbMF0gJiZcblx0XHRcdHggPD0gaXRlbVRvcFJpZ2h0WzBdICYmXG5cdFx0XHR4ID49IGl0ZW1Cb3R0b21MZWZ0WzBdICYmXG5cdFx0XHR4IDw9IGl0ZW1Cb3R0b21SaWdodFswXSAmJlxuXHRcdFx0eSA+PSBpdGVtVG9wTGVmdFsxXSAmJlxuXHRcdFx0eSA8PSBpdGVtQm90dG9tTGVmdFsxXSAmJlxuXHRcdFx0eSA+PSBpdGVtVG9wUmlnaHRbMV0gJiZcblx0XHRcdHkgPD0gaXRlbUJvdHRvbVJpZ2h0WzFdXG5cdFx0KSB7XG5cdFx0XHRpc0luc2lkZSA9IHRydWU7XG5cdFx0XHRpbmRleE9mT3ZlcmxhcHBpbmdJdGVtID0gaTtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdHZhciBsaW5lcyA9IGdldExpbmVzKHRoaXMucG9zaXRpb25EYXRhW2ldKTtcblxuXHRcdHZhciB0b3BMaW5lID0gbGluZXNbMF07XG5cdFx0dmFyIHJpZ2h0TGluZSA9IGxpbmVzWzFdO1xuXHRcdHZhciBib3R0b21MaW5lID0gbGluZXNbMl07XG5cdFx0dmFyIGxlZnRMaW5lID0gbGluZXNbM107XG5cblx0XHQvLyBmb3IgVE9QIExFRlQgQ29ybmVyXG5cdFx0aWYgKFxuXHRcdFx0eSA8IHRvcExpbmVbMF1bMV0gJiZcblx0XHRcdHggPj0gdG9wTGluZVswXVswXSAtIHRoaXMuTUFSR0lOICYmXG5cdFx0XHR4IDw9IHRvcExpbmVbMV1bMF0gKyB0aGlzLk1BUkdJTlxuXHRcdCkge1xuXHRcdFx0dmFyIGRpZmYgPSB0b3BMaW5lWzBdWzFdIC0geTtcblx0XHRcdGlmIChkaWZmIDw9IHRoaXMuTUFSR0lOKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoXG5cdFx0XHR5ID4gYm90dG9tTGluZVswXVsxXSAmJlxuXHRcdFx0eCA+PSBib3R0b21MaW5lWzBdWzBdIC0gdGhpcy5NQVJHSU4gJiZcblx0XHRcdHggPD0gYm90dG9tTGluZVsxXVswXSArIHRoaXMuTUFSR0lOXG5cdFx0KSB7XG5cdFx0XHR2YXIgZGlmZiA9IHkgLSBib3R0b21MaW5lWzBdWzFdO1xuXHRcdFx0aWYgKGRpZmYgPD0gdGhpcy5NQVJHSU4pIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChcblx0XHRcdHggPiByaWdodExpbmVbMF1bMF0gJiZcblx0XHRcdHkgPj0gcmlnaHRMaW5lWzBdWzFdIC0gdGhpcy5NQVJHSU4gJiZcblx0XHRcdHkgPD0gcmlnaHRMaW5lWzFdWzFdICsgdGhpcy5NQVJHSU5cblx0XHQpIHtcblx0XHRcdHZhciBkaWZmID0geCAtIHJpZ2h0TGluZVswXVswXTtcblx0XHRcdGlmIChkaWZmIDw9IHRoaXMuTUFSR0lOKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoXG5cdFx0XHR4IDwgbGVmdExpbmVbMF1bMF0gJiZcblx0XHRcdHkgPj0gbGVmdExpbmVbMF1bMV0gLSB0aGlzLk1BUkdJTiAmJlxuXHRcdFx0eSA8PSBsZWZ0TGluZVsxXVsxXSArIHRoaXMuTUFSR0lOXG5cdFx0KSB7XG5cdFx0XHR2YXIgZGlmZiA9IGxlZnRMaW5lWzBdWzBdIC0geDtcblx0XHRcdGlmIChkaWZmIDw9IHRoaXMuTUFSR0lOKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gZm9yIFRPUCBMRUZUIENvcm5lciBFTkRcblxuXHRcdC8vIGZvciBUT1AgUklHSFQgQ29ybmVyXG5cdFx0aWYgKFxuXHRcdFx0eSA+IGJvdHRvbUxpbmVbMF1bMV0gJiZcblx0XHRcdHggKyB3aWR0aE9mTW92ZWRJdGVtID49IGJvdHRvbUxpbmVbMF1bMF0gLSB0aGlzLk1BUkdJTiAmJlxuXHRcdFx0eCArIHdpZHRoT2ZNb3ZlZEl0ZW0gPD0gYm90dG9tTGluZVsxXVswXSArIHRoaXMuTUFSR0lOXG5cdFx0KSB7XG5cdFx0XHR2YXIgZGlmZiA9IHkgLSBib3R0b21MaW5lWzBdWzFdO1xuXHRcdFx0aWYgKGRpZmYgPD0gdGhpcy5NQVJHSU4pIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBmb3IgVE9QIFJJR0hUIENvcm5lciBFTkRcblxuXHRcdC8vIGZvciBCT1RUT00gTEVGVCBDb3JuZXJcblx0XHRpZiAoXG5cdFx0XHR4ID4gcmlnaHRMaW5lWzBdWzBdICYmXG5cdFx0XHR5ICsgaGVpZ2h0T2ZNb3ZlZEl0ZW0gPj0gcmlnaHRMaW5lWzBdWzFdIC0gdGhpcy5NQVJHSU4gJiZcblx0XHRcdHkgKyBoZWlnaHRPZk1vdmVkSXRlbSA8PSByaWdodExpbmVbMV1bMV0gKyB0aGlzLk1BUkdJTlxuXHRcdCkge1xuXHRcdFx0dmFyIGRpZmYgPSB4IC0gcmlnaHRMaW5lWzBdWzBdO1xuXHRcdFx0aWYgKGRpZmYgPD0gdGhpcy5NQVJHSU4pIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBmb3IgQk9UVE9NIExFRlQgQ29ybmVyIEVORFxuXG5cdFx0aWYgKFxuXHRcdFx0KHkgPiBib3R0b21MaW5lWzBdWzFdICYmXG5cdFx0XHRcdGJvdHRvbUxpbmVbMF1bMF0gPj0geCAmJlxuXHRcdFx0XHRib3R0b21MaW5lWzBdWzBdIDw9IHggKyB3aWR0aE9mTW92ZWRJdGVtKSB8fFxuXHRcdFx0KHkgPiBib3R0b21MaW5lWzBdWzFdICYmXG5cdFx0XHRcdGJvdHRvbUxpbmVbMV1bMF0gPj0geCAmJlxuXHRcdFx0XHRib3R0b21MaW5lWzFdWzBdIDw9IHggKyB3aWR0aE9mTW92ZWRJdGVtKVxuXHRcdCkge1xuXHRcdFx0dmFyIGRpZmYgPSB5IC0gYm90dG9tTGluZVswXVsxXTtcblx0XHRcdGlmIChkaWZmIDw9IHRoaXMuTUFSR0lOKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoXG5cdFx0XHQoeCA+IHJpZ2h0TGluZVswXVswXSAmJlxuXHRcdFx0XHRyaWdodExpbmVbMF1bMV0gPj0geSAmJlxuXHRcdFx0XHRyaWdodExpbmVbMF1bMV0gPD0geSArIGhlaWdodE9mTW92ZWRJdGVtKSB8fFxuXHRcdFx0KHggPiByaWdodExpbmVbMF1bMF0gJiZcblx0XHRcdFx0cmlnaHRMaW5lWzFdWzFdID49IHkgJiZcblx0XHRcdFx0cmlnaHRMaW5lWzFdWzFdIDw9IHkgKyBoZWlnaHRPZk1vdmVkSXRlbSlcblx0XHQpIHtcblx0XHRcdHZhciBkaWZmID0geCAtIHJpZ2h0TGluZVswXVswXTtcblx0XHRcdGlmIChkaWZmIDw9IHRoaXMuTUFSR0lOKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRpZiAoaW5kZXhPZk92ZXJsYXBwaW5nSXRlbSA9PSBudWxsKSB7XG5cdFx0aWYgKFxuXHRcdFx0eCArXG5cdFx0XHRcdHRoaXMucG9zaXRpb25EYXRhW2luZGV4T2ZNb3ZlZEl0ZW1dLndpZHRoICtcblx0XHRcdFx0Z2V0TWFyZ2luQXRQb2ludC5jYWxsKHRoaXMsIHgpID5cblx0XHRcdHRoaXMuV0lEVEhcblx0XHQpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIG1vdXNlUG9zaXRpb25zO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRpZiAoXG5cdFx0XHR0aGlzLnBvc2l0aW9uRGF0YVtpbmRleE9mT3ZlcmxhcHBpbmdJdGVtXS54ICtcblx0XHRcdFx0dGhpcy5wb3NpdGlvbkRhdGFbaW5kZXhPZk1vdmVkSXRlbV0ud2lkdGggK1xuXHRcdFx0XHRnZXRNYXJnaW5BdFBvaW50LmNhbGwoXG5cdFx0XHRcdFx0dGhpcyxcblx0XHRcdFx0XHR0aGlzLnBvc2l0aW9uRGF0YVtpbmRleE9mT3ZlcmxhcHBpbmdJdGVtXS54XG5cdFx0XHRcdCkgPlxuXHRcdFx0dGhpcy5XSURUSFxuXHRcdCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR4OiB4LFxuXHRcdFx0XHR5OiB5LFxuXHRcdFx0XHRyZXZpc2VkQ29vcmRpbmF0ZXM6IHtcblx0XHRcdFx0XHR4OiB0aGlzLnBvc2l0aW9uRGF0YVtpbmRleE9mT3ZlcmxhcHBpbmdJdGVtXS54LFxuXHRcdFx0XHRcdHk6IHRoaXMucG9zaXRpb25EYXRhW2luZGV4T2ZPdmVybGFwcGluZ0l0ZW1dLnlcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCBjb25zdCBzaG93TW92ZURlbW8gPSBmdW5jdGlvbihpbmRleCwgbW91c2VQb3NpdGlvbikge1xuXHRpZiAobW91c2VQb3NpdGlvbiAhPSBmYWxzZSkge1xuXHRcdHZhciBuZXdNb3ZlQ29vcmRpbmF0ZXMgPSBjaGVja05ld01vdmVDb29yZGluYXRlcy5jYWxsKFxuXHRcdFx0dGhpcyxcblx0XHRcdGluZGV4LFxuXHRcdFx0bW91c2VQb3NpdGlvblxuXHRcdCk7XG5cdFx0aWYgKG5ld01vdmVDb29yZGluYXRlcyA9PSBmYWxzZSkge1xuXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdCb2R5UHNldWRvSXRlbXNbaW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoXG5cdFx0XHRcdFwibGltYmVyR3JpZFZpZXdCb2R5UHNldWRvSXRlbU1vdmVBbGxvd1wiXG5cdFx0XHQpO1xuXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdCb2R5UHNldWRvSXRlbXNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoXG5cdFx0XHRcdFwibGltYmVyR3JpZFZpZXdCb2R5UHNldWRvSXRlbU1vdmVEaXNhbGxvd1wiXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAobmV3TW92ZUNvb3JkaW5hdGVzLmhhc093blByb3BlcnR5KFwicmV2aXNlZENvb3JkaW5hdGVzXCIpKSB7XG5cdFx0XHRcdHRoaXMubW92ZVBsYW5lRGVtbyhcblx0XHRcdFx0XHRpbmRleCxcblx0XHRcdFx0XHRuZXdNb3ZlQ29vcmRpbmF0ZXMucmV2aXNlZENvb3JkaW5hdGVzLngsXG5cdFx0XHRcdFx0bmV3TW92ZUNvb3JkaW5hdGVzLnJldmlzZWRDb29yZGluYXRlcy55XG5cdFx0XHRcdCk7XG5cdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3TW92ZUd1aWRlWzBdLnN0eWxlLnRyYW5zZm9ybSA9XG5cdFx0XHRcdFx0XCJ0cmFuc2xhdGUoXCIgK1xuXHRcdFx0XHRcdG5ld01vdmVDb29yZGluYXRlcy5yZXZpc2VkQ29vcmRpbmF0ZXMueCArXG5cdFx0XHRcdFx0XCJweCwgXCIgK1xuXHRcdFx0XHRcdG5ld01vdmVDb29yZGluYXRlcy5yZXZpc2VkQ29vcmRpbmF0ZXMueSArXG5cdFx0XHRcdFx0XCJweClcIjtcblx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdNb3ZlR3VpZGVbMF0uY2xhc3NMaXN0LmFkZChcblx0XHRcdFx0XHRcImxpbWJlckdyaWRWaWV3TW92ZUd1aWRlQWN0aXZlXCJcblx0XHRcdFx0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMubW92ZVBsYW5lRGVtbyhcblx0XHRcdFx0XHRpbmRleCxcblx0XHRcdFx0XHRuZXdNb3ZlQ29vcmRpbmF0ZXMueCxcblx0XHRcdFx0XHRuZXdNb3ZlQ29vcmRpbmF0ZXMueVxuXHRcdFx0XHQpO1xuXHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld01vdmVHdWlkZVswXS5zdHlsZS50cmFuc2Zvcm0gPVxuXHRcdFx0XHRcdFwidHJhbnNsYXRlKFwiICtcblx0XHRcdFx0XHRuZXdNb3ZlQ29vcmRpbmF0ZXMueCArXG5cdFx0XHRcdFx0XCJweCwgXCIgK1xuXHRcdFx0XHRcdG5ld01vdmVDb29yZGluYXRlcy55ICtcblx0XHRcdFx0XHRcInB4KVwiO1xuXHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld01vdmVHdWlkZVswXS5jbGFzc0xpc3QuYWRkKFxuXHRcdFx0XHRcdFwibGltYmVyR3JpZFZpZXdNb3ZlR3VpZGVBY3RpdmVcIlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdCb2R5UHNldWRvSXRlbXNbaW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoXG5cdFx0XHRcdFwibGltYmVyR3JpZFZpZXdCb2R5UHNldWRvSXRlbU1vdmVEaXNhbGxvd1wiXG5cdFx0XHQpO1xuXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdCb2R5UHNldWRvSXRlbXNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoXG5cdFx0XHRcdFwibGltYmVyR3JpZFZpZXdCb2R5UHNldWRvSXRlbU1vdmVBbGxvd1wiXG5cdFx0XHQpO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0JvZHlQc2V1ZG9JdGVtc1tpbmRleF0uY2xhc3NMaXN0LnJlbW92ZShcblx0XHRcdFwibGltYmVyR3JpZFZpZXdCb2R5UHNldWRvSXRlbU1vdmVBbGxvd1wiXG5cdFx0KTtcblx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0JvZHlQc2V1ZG9JdGVtc1tpbmRleF0uY2xhc3NMaXN0LmFkZChcblx0XHRcdFwibGltYmVyR3JpZFZpZXdCb2R5UHNldWRvSXRlbU1vdmVEaXNhbGxvd1wiXG5cdFx0KTtcblx0fVxufTtcblxuZXhwb3J0IGNvbnN0IHNob3dSZXNpemVEZW1vID0gZnVuY3Rpb24oaW5kZXgsIHdpZHRoLCBoZWlnaHQpIHtcblx0aWYgKHRoaXMucmVzaXplUGxhbmVEZW1vKGluZGV4LCB3aWR0aCwgaGVpZ2h0KSA9PSBmYWxzZSkge1xuXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1zW1xuXHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhcblx0XHRdLmNsYXNzTGlzdC5hZGQoXCJsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtUmVzaXplRGlzYWxsb3dcIik7XG5cdH0gZWxzZSB7XG5cdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbXNbXG5cdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleFxuXHRcdF0uY2xhc3NMaXN0LmFkZChcImxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1SZXNpemVBbGxvd1wiKTtcblx0fVxufTtcblxuZXhwb3J0IGNvbnN0IHJldmVydFNob3dNb3ZlT3JSZXNpemVEZW1vID0gZnVuY3Rpb24oKSB7XG5cdHZhciBsZW5ndGhfMCA9IHRoaXMuJGxpbWJlckdyaWRWaWV3SXRlbXMubGVuZ3RoO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF8wOyBpKyspIHtcblx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0l0ZW1zW2ldLnN0eWxlLnRyYW5zZm9ybSA9XG5cdFx0XHRcInRyYW5zbGF0ZShcIiArXG5cdFx0XHR0aGlzLnBvc2l0aW9uRGF0YVtpXS54ICtcblx0XHRcdFwicHgsIFwiICtcblx0XHRcdHRoaXMucG9zaXRpb25EYXRhW2ldLnkgK1xuXHRcdFx0XCJweClcIjtcblx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0l0ZW1zW2ldLmNsYXNzTGlzdC5yZW1vdmUoXG5cdFx0XHRcImxpbWJlckdyaWRWaWV3SXRlbURlbW9cIixcblx0XHRcdFwibGltYmVyR3JpZFZpZXdJdGVtUmVzaXppbmdTdGF0ZVwiXG5cdFx0KTtcblx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtc1tpXS5jbGFzc0xpc3QucmVtb3ZlKFxuXHRcdFx0XCJsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtUmVzaXppbmdTdGF0ZVwiLFxuXHRcdFx0XCJsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtQWN0aXZlXCJcblx0XHQpO1xuXHR9XG59O1xuIiwiZXhwb3J0IGNvbnN0IG9uV2luZG93UmVzaXplID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0Y29uc29sZS5sb2coXCJvbldpbmRvd1Jlc2l6ZSBDQUxMXCIsIHRoaXMpO1xuXHRzZXRUaW1lb3V0KFxuXHRcdHRoaXMub25XaW5kb3dSZXNpemVUaW1lckNhbGxiYWNrRnVuY3Rpb25WYXJpYWJsZSxcblx0XHR0aGlzLldJTkRPV19SRVNJWkVfV0FJVF9USU1FXG5cdCk7XG5cdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMub25XaW5kb3dSZXNpemVGdW5jdGlvblZhcmlhYmxlKTtcbn07XG5cbmV4cG9ydCBjb25zdCBvbldpbmRvd1Jlc2l6ZVRpbWVyQ2FsbGJhY2sgPSBmdW5jdGlvbihldmVudCkge1xuXHR0aGlzLmluaXQodGhpcy5XSURUSCwgZmFsc2UpO1xuXHR0aGlzLnJlbmRlcigpO1xuXG5cdGlmICh0aGlzLm9wdGlvbnMucmVSZW5kZXJPblJlc2l6ZSAhPSBmYWxzZSkge1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMub25XaW5kb3dSZXNpemVGdW5jdGlvblZhcmlhYmxlKTtcblx0fVxufTtcblxuZXhwb3J0IGNvbnN0IG9uSXRlbUNsaWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0dGhpcy5jYWxsYmFja3Mub25JdGVtQ2xpY2tDYWxsYmFjayhldmVudCk7XG59O1xuIiwiZXhwb3J0IGNvbnN0IGdldFBsYWluRnJvbTRQb2ludHMgPSBmdW5jdGlvbihwb2ludHNBcnJheSkge1xuXHR2YXIgbWluWCA9IC0xO1xuXHR2YXIgbWluWSA9IC0xO1xuXHR2YXIgbWF4WCA9IC0xO1xuXHR2YXIgbWF4WSA9IC0xO1xuXHR2YXIgbGVuZ3RoXzAgPSBwb2ludHNBcnJheS5sZW5ndGg7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHRcdGlmIChwb2ludHNBcnJheVtpXVswXSA8IG1pblggfHwgbWluWCA8IDApIHtcblx0XHRcdG1pblggPSBwb2ludHNBcnJheVtpXVswXTtcblx0XHR9XG5cdFx0aWYgKHBvaW50c0FycmF5W2ldWzBdID4gbWF4WCkge1xuXHRcdFx0bWF4WCA9IHBvaW50c0FycmF5W2ldWzBdO1xuXHRcdH1cblx0XHRpZiAocG9pbnRzQXJyYXlbaV1bMV0gPCBtaW5ZIHx8IG1pblkgPCAwKSB7XG5cdFx0XHRtaW5ZID0gcG9pbnRzQXJyYXlbaV1bMV07XG5cdFx0fVxuXHRcdGlmIChwb2ludHNBcnJheVtpXVsxXSA+IG1heFkpIHtcblx0XHRcdG1heFkgPSBwb2ludHNBcnJheVtpXVsxXTtcblx0XHR9XG5cdH1cblxuXHR2YXIgcGxhbmUgPSB7fTtcblx0cGxhbmUueCA9IG1pblg7XG5cdHBsYW5lLnkgPSBtaW5ZO1xuXHRwbGFuZS53aWR0aCA9IG1heFggLSBtaW5YO1xuXHRwbGFuZS5oZWlnaHQgPSBtYXhZIC0gbWluWTtcblxuXHRyZXR1cm4gcGxhbmU7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0Q29vcmRpbmF0ZXMgPSBmdW5jdGlvbihpdGVtKSB7XG5cdHZhciBpdGVtVG9wTGVmdCA9IFtpdGVtLngsIGl0ZW0ueV07XG5cdHZhciBpdGVtVG9wUmlnaHQgPSBbaXRlbS54ICsgaXRlbS53aWR0aCwgaXRlbS55XTtcblx0dmFyIGl0ZW1Cb3R0b21MZWZ0ID0gW2l0ZW0ueCwgaXRlbS55ICsgaXRlbS5oZWlnaHRdO1xuXHR2YXIgaXRlbUJvdHRvbVJpZ2h0ID0gW2l0ZW0ueCArIGl0ZW0ud2lkdGgsIGl0ZW0ueSArIGl0ZW0uaGVpZ2h0XTtcblxuXHR2YXIgaXRlbUNvb3JkaW5hdGVzQXJyID0gW1xuXHRcdGl0ZW1Ub3BMZWZ0LFxuXHRcdGl0ZW1Ub3BSaWdodCxcblx0XHRpdGVtQm90dG9tUmlnaHQsXG5cdFx0aXRlbUJvdHRvbUxlZnRcblx0XTtcblxuXHRyZXR1cm4gaXRlbUNvb3JkaW5hdGVzQXJyO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldExpbmVzID0gZnVuY3Rpb24oaXRlbSkge1xuXHR2YXIgaXRlbVRvcExlZnQgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KFtpdGVtLngsIGl0ZW0ueV0pKTtcblx0dmFyIGl0ZW1Ub3BSaWdodCA9IEpTT04ucGFyc2UoXG5cdFx0SlNPTi5zdHJpbmdpZnkoW2l0ZW0ueCArIGl0ZW0ud2lkdGgsIGl0ZW0ueV0pXG5cdCk7XG5cdHZhciBpdGVtQm90dG9tTGVmdCA9IEpTT04ucGFyc2UoXG5cdFx0SlNPTi5zdHJpbmdpZnkoW2l0ZW0ueCwgaXRlbS55ICsgaXRlbS5oZWlnaHRdKVxuXHQpO1xuXHR2YXIgaXRlbUJvdHRvbVJpZ2h0ID0gSlNPTi5wYXJzZShcblx0XHRKU09OLnN0cmluZ2lmeShbaXRlbS54ICsgaXRlbS53aWR0aCwgaXRlbS55ICsgaXRlbS5oZWlnaHRdKVxuXHQpO1xuXG5cdHZhciB0b3BMaW5lID0gW2l0ZW1Ub3BMZWZ0LCBpdGVtVG9wUmlnaHRdO1xuXHR2YXIgcmlnaHRMaW5lID0gW2l0ZW1Ub3BSaWdodCwgaXRlbUJvdHRvbVJpZ2h0XTtcblx0dmFyIGJvdHRvbUxpbmUgPSBbaXRlbUJvdHRvbUxlZnQsIGl0ZW1Cb3R0b21SaWdodF07XG5cdHZhciBsZWZ0TGluZSA9IFtpdGVtVG9wTGVmdCwgaXRlbUJvdHRvbUxlZnRdO1xuXG5cdHZhciBhbGxMaW5lcyA9IFt0b3BMaW5lLCByaWdodExpbmUsIGJvdHRvbUxpbmUsIGxlZnRMaW5lXTtcblxuXHRyZXR1cm4gYWxsTGluZXM7XG59O1xuXG5leHBvcnQgY29uc3QgYXJlUGxhaW5zU2FtZSA9IGZ1bmN0aW9uKEEsIEIpIHtcblx0aWYgKFxuXHRcdEEueCA9PSBCLnggJiZcblx0XHRBLnkgPT0gQi55ICYmXG5cdFx0QS53aWR0aCA9PSBCLndpZHRoICYmXG5cdFx0QS5oZWlnaHQgPT0gQi5oZWlnaHRcblx0KSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xuXG5leHBvcnQgY29uc3QgYXJlUGxhaW5zSWRlbnRpY2FsID0gZnVuY3Rpb24oQSwgQikge1xuXHRpZiAoQS53aWR0aCA9PSBCLndpZHRoICYmIEEuaGVpZ2h0ID09IEIuaGVpZ2h0KSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xuXG5leHBvcnQgY29uc3QgaXNWYWxpZFBsYW5lID0gZnVuY3Rpb24ocGxhbmUpIHtcblx0aWYgKHBsYW5lLnggPj0gMCAmJiBwbGFuZS55ID49IDAgJiYgcGxhbmUud2lkdGggPiAwICYmIHBsYW5lLmhlaWdodCA+IDApIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG5cbmV4cG9ydCBjb25zdCBzb3J0UGxhaW5zQnlBcmVhID0gZnVuY3Rpb24ocGxhbmVzLCBvcmRlciA9IFwiZGVjXCIpIHtcblx0aWYgKG9yZGVyID09IFwiYXNjXCIpIHtcblx0XHRwbGFuZXMuc29ydChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQoYS54ICsgYS53aWR0aCkgKiAoYS55ICsgYS5oZWlnaHQpIC1cblx0XHRcdFx0KGIueCArIGIud2lkdGgpICogKGIueSArIGIuaGVpZ2h0KVxuXHRcdFx0KTtcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHRwbGFuZXMuc29ydChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQoYi54ICsgYi53aWR0aCkgKiAoYi55ICsgYi5oZWlnaHQpIC1cblx0XHRcdFx0KGEueCArIGEud2lkdGgpICogKGEueSArIGEuaGVpZ2h0KVxuXHRcdFx0KTtcblx0XHR9KTtcblx0fVxuXG5cdHJldHVybiBwbGFuZXM7XG59O1xuXG5leHBvcnQgY29uc3Qgc29ydFBsYWluc0J5SGVpZ2h0ID0gZnVuY3Rpb24ocGxhbmVzLCBvcmRlciA9IFwiZGVjXCIpIHtcblx0aWYgKG9yZGVyID09IFwiYXNjXCIpIHtcblx0XHRwbGFuZXMuc29ydChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHRyZXR1cm4gYS5oZWlnaHQgLSBiLmhlaWdodDtcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHRwbGFuZXMuc29ydChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHRyZXR1cm4gYi5oZWlnaHQgLSBhLmhlaWdodDtcblx0XHR9KTtcblx0fVxuXG5cdHJldHVybiBwbGFuZXM7XG59O1xuXG5leHBvcnQgY29uc3Qgc29ydFBsYWluc0J5RGVwdGggPSBmdW5jdGlvbihwbGFuZXMsIG9yZGVyID0gXCJkZWNcIikge1xuXHRpZiAob3JkZXIgPT0gXCJhc2NcIikge1xuXHRcdHBsYW5lcy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHJldHVybiBhLnkgKyBhLmhlaWdodCAtIChiLnkgKyBiLmhlaWdodCk7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0cGxhbmVzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0cmV0dXJuIGIueSArIGIuaGVpZ2h0IC0gKGEueSArIGEuaGVpZ2h0KTtcblx0XHR9KTtcblx0fVxuXG5cdHJldHVybiBwbGFuZXM7XG59O1xuXG5leHBvcnQgY29uc3QgZGl2aWRlRXF1YWxOdW1iZXIgPSBmdW5jdGlvbihhLCBERUZBVUxUID0gMCkge1xuXHR2YXIgcmVzID0gYSAvIGE7XG5cdGlmIChyZXMgPT0gTmFOKSB7XG5cdFx0cmV0dXJuIDA7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIDE7XG5cdH1cbn07XG5cbmV4cG9ydCBjb25zdCBnZXRNYXJnaW5BdFBvaW50ID0gZnVuY3Rpb24oYSkge1xuXHRpZiAoYSA9PSAwKSB7XG5cdFx0cmV0dXJuIDA7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIHRoaXMuTUFSR0lOO1xuXHR9XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0Um93U2VxdWVuY2UgPSBmdW5jdGlvbihzZXJpYWxpemUpIHtcblx0dmFyIHJvd3MgPSB7fTtcblx0dmFyIHJvd3NBcnIgPSBbXTtcblx0dmFyIGNvbHVtbnMgPSB7fTtcblxuXHR2YXIgbGVuZ3RoXzAgPSB0aGlzLnBvc2l0aW9uRGF0YS5sZW5ndGg7XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0aWYgKHJvd3MuaGFzT3duUHJvcGVydHkodGhpcy5wb3NpdGlvbkRhdGFbaV0ueSkpIHtcblx0XHRcdHJvd3NbdGhpcy5wb3NpdGlvbkRhdGFbaV0ueV0ucHVzaChpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cm93c1t0aGlzLnBvc2l0aW9uRGF0YVtpXS55XSA9IFtdO1xuXHRcdFx0cm93c0Fyci5wdXNoKE51bWJlcih0aGlzLnBvc2l0aW9uRGF0YVtpXS55KSk7XG5cdFx0XHRyb3dzW3RoaXMucG9zaXRpb25EYXRhW2ldLnldLnB1c2goaSk7XG5cdFx0fVxuXHR9XG5cblx0cm93c0Fyci5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRyZXR1cm4gYSAtIGI7XG5cdH0pO1xuXG5cdHZhciBsZW5ndGhfMCA9IHJvd3NBcnIubGVuZ3RoO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF8wOyBpKyspIHtcblx0XHRyb3dzW3Jvd3NBcnJbaV1dLnNvcnQoXG5cdFx0XHRmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLnBvc2l0aW9uRGF0YVthXS54IC0gdGhpcy5wb3NpdGlvbkRhdGFbYl0ueDtcblx0XHRcdH0uYmluZCh0aGlzKVxuXHRcdCk7XG5cdH1cblxuXHRpZiAoc2VyaWFsaXplICE9IHRydWUpIHtcblx0XHRyZXR1cm4geyByb3dPcmRlcjogcm93c0Fyciwgcm93czogcm93cyB9O1xuXHR9IGVsc2Uge1xuXHRcdHZhciBhcnIgPSBbXTtcblx0XHR2YXIgbWFwID0ge307XG5cdFx0dmFyIGNvdW50ID0gMDtcblxuXHRcdHZhciBsZW5ndGhfMCA9IHJvd3NBcnIubGVuZ3RoO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHRcdFx0dmFyIGxlbmd0aF8xID0gcm93c1tyb3dzQXJyW2ldXS5sZW5ndGg7XG5cdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGxlbmd0aF8xOyBqKyspIHtcblx0XHRcdFx0YXJyLnB1c2gocm93c1tyb3dzQXJyW2ldXVtqXSk7XG5cdFx0XHRcdG1hcFtyb3dzW3Jvd3NBcnJbaV1dW2pdXSA9IGNvdW50Kys7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHsgbGlzdDogYXJyLCBtYXA6IG1hcCB9O1xuXHR9XG59O1xuIiwiZXhwb3J0IGNvbnN0IGFkanVzdEhlaWdodCA9IGZ1bmN0aW9uKHlNb3VzZU9yVG91Y2hQb3NpdGlvbikge1xuXHR2YXIgc2Nyb2xsSGVpZ2h0ID0gdGhpcy4kbGltYmVyR3JpZFZpZXdbMF0uc2Nyb2xsSGVpZ2h0O1xuXHRpZiAoc2Nyb2xsSGVpZ2h0IC0geU1vdXNlT3JUb3VjaFBvc2l0aW9uIDw9IHRoaXMuQVVUT19TQ1JPTExfUE9JTlQpIHtcblx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0hlaWdodEFkanVzdEd1aWRlWzBdLnN0eWxlLmhlaWdodCA9XG5cdFx0XHR5TW91c2VPclRvdWNoUG9zaXRpb24gK1xuXHRcdFx0dGhpcy5NT1ZFX09SX1JFU0laRV9IRUlHSFRfSU5DUkVNRU5UUyArXG5cdFx0XHRcInB4XCI7XG5cdH1cbn07XG5cbmV4cG9ydCBjb25zdCBhZGp1c3RTY3JvbGwgPSBmdW5jdGlvbihcblx0bGltYmVyR3JpZFZpZXdPblZpc2libGVBcmVhWSxcblx0bGltYmVyR3JpZFZpZXdIZWlnaHRWaXNpYmxlSGVpZ2h0XG4pIHtcblx0dmFyIHNjcm9sbFRvcCA9IHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLnNjcm9sbFRvcDtcblx0Ly8gdmFyIHNjcm9sbExlZnQgPSB0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5zY3JvbGxMZWZ0O1xuXHR2YXIgcHJvZ3JhbVNjcm9sbGVkID0gZmFsc2U7XG5cdGlmIChsaW1iZXJHcmlkVmlld09uVmlzaWJsZUFyZWFZID4gMCkge1xuXHRcdGlmIChcblx0XHRcdGxpbWJlckdyaWRWaWV3SGVpZ2h0VmlzaWJsZUhlaWdodCAtIGxpbWJlckdyaWRWaWV3T25WaXNpYmxlQXJlYVkgPFxuXHRcdFx0dGhpcy5BVVRPX1NDUk9MTF9QT0lOVFxuXHRcdCkge1xuXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdbMF0uc2Nyb2xsVG9wID1cblx0XHRcdFx0c2Nyb2xsVG9wICsgdGhpcy5BVVRPX1NDUk9MTF9ESVNUQU5DRTtcblx0XHRcdHByb2dyYW1TY3JvbGxlZCA9IHRydWU7XG5cdFx0fVxuXHRcdGlmIChsaW1iZXJHcmlkVmlld09uVmlzaWJsZUFyZWFZIDwgdGhpcy5IRUlHSFQgLyAxMCAmJiBzY3JvbGxUb3AgIT0gMCkge1xuXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdbMF0uc2Nyb2xsVG9wID1cblx0XHRcdFx0c2Nyb2xsVG9wIC0gdGhpcy5BVVRPX1NDUk9MTF9ESVNUQU5DRTtcblx0XHRcdHByb2dyYW1TY3JvbGxlZCA9IHRydWU7XG5cdFx0fVxuXHR9XG5cblx0Ly8gaWYobGltYmVyR3JpZFZpZXdPblZpc2libGVBcmVhWCA+IDApe1xuXHQvLyBcdGlmKChsaW1iZXJHcmlkVmlld1dpZHRoVmlzaWJsZVdpZHRoIC0gbGltYmVyR3JpZFZpZXdPblZpc2libGVBcmVhWCkgPCAodGhpcy5XSURUSC8xMCkpe1xuXHQvLyBcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdbMF0uc2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQgKyAxMDA7XG5cdC8vIFx0XHR2YXIgcHJvZ3JhbVNjcm9sbGVkID0gdHJ1ZTtcblx0Ly8gXHR9XG5cdC8vIFx0aWYoKGxpbWJlckdyaWRWaWV3T25WaXNpYmxlQXJlYVgpIDwgKHRoaXMuV0lEVEgvMTApICYmIHNjcm9sbExlZnQgIT0gMCl7XG5cdC8vIFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5zY3JvbGxMZWZ0ID0gc2Nyb2xsTGVmdCAtIDEwMDtcblx0Ly8gXHRcdHZhciBwcm9ncmFtU2Nyb2xsZWQgPSB0cnVlO1xuXHQvLyBcdH1cblx0Ly8gfVxuXHRyZXR1cm4gcHJvZ3JhbVNjcm9sbGVkO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=