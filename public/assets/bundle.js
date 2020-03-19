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
      this.onLimberGridMouseDownFunctionVariable = this.onLimberGridMouseDown.bind(this);
      this.onLimberGridMouseMoveBindedFunctionVariable = this.onLimberGridMouseMove.bind(this);
      this.onLimberGridMouseUpBindedFunctionVariable = this.onLimberGridMouseUp.bind(this);
      this.onLimberGridContextMenuBindedFunctionVariable = this.onLimberGridContextMenu.bind(this);
      this.onLimberGridTouchStartFunctionVariable = this.onLimberGridTouchStart.bind(this);
      this.onLimberGridTouchMoveBindedFunctionVariable = this.onLimberGridTouchMove.bind(this);
      this.onLimberGridTouchEndBindedFunctionVariable = this.onLimberGridTouchEnd.bind(this);
      this.onLimberGridTouchCancelBindedFunctionVariable = this.onLimberGridTouchCancel.bind(this);
      this.onLimberGridTouchContextMenuBindedFunctionVariable = this.onLimberGridTouchContextMenu.bind(this);
      this.onItemMouseDownFunctionVariable = this.onItemMouseDown.bind(this);
      this.onMouseMoveBindedFunctionVariable = this.onMouseMove.bind(this);
      this.onMouseUpBindedFunctionVariable = this.onMouseUp.bind(this);
      this.onContextMenuBindedFunctionVariable = this.onContextMenu.bind(this);
      this.onItemTouchStartFunctionVariable = this.onItemTouchStart.bind(this);
      this.onTouchMoveBindedFunctionVariable = this.onTouchMove.bind(this);
      this.onTouchEndBindedFunctionVariable = this.onTouchEnd.bind(this);
      this.onTouchCancelBindedFunctionVariable = this.onTouchCancel.bind(this);
      this.onItemTouchContextMenuBindedFunctionVariable = this.onItemTouchContextMenu.bind(this);
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
      this.onItemClickFunctionVariable = this.onItemClick.bind(this);
    }

    if (this.options.reRenderOnResize != false) {
      this.onWindowResizeFunctionVariable = this.onWindowResize.bind(this);
      this.onWindowResizeTimerCallbackFunctionVariable = this.onWindowResizeTimerCallback.bind(this);
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
      this.serializedPositionData = this.getRowSequence(true);

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
          var style_2 = (this.WIDTH / this.MOBILE_ASPECT_RATIO + this.getMarginAtPoint(this.serializedPositionData.map[i])) * this.serializedPositionData.map[i] + "px); ";
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
          div.style.transform = "translate(" + 0 + "px, " + (this.WIDTH / this.MOBILE_ASPECT_RATIO + this.getMarginAtPoint(this.serializedPositionData.map[i])) * this.serializedPositionData.map[i] + "px)";
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
        var style_2 = (this.WIDTH / this.MOBILE_ASPECT_RATIO + this.getMarginAtPoint(this.serializedPositionData.map[i])) * this.serializedPositionData.map[i] + "px); ";
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
        div.style.transform = "translate(" + 0 + "px, " + (this.WIDTH / this.MOBILE_ASPECT_RATIO + this.getMarginAtPoint(this.serializedPositionData.map[items[i]])) * this.serializedPositionData.map[items[i]] + "px)";
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
        divGrid.style.transform = "translate(" + 0 + "px, " + (this.WIDTH / this.MOBILE_ASPECT_RATIO + this.getMarginAtPoint(this.serializedPositionData.map[i])) * this.serializedPositionData.map[i] + "px)";
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
      this.serializedPositionData = this.getRowSequence(true);
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

    startingY = startingY + this.getMarginAtPoint(startingY);
    var items = [];
    var scrollToPosition = startingY;
    var remainingItems = howMany;
    var remainingWidth = this.WIDTH;

    while (remainingItems != 0) {
      var startingX = 0;

      while (remainingWidth > itemWidth + this.getMarginAtPoint(startingX) && remainingItems != 0) {
        var item = {
          x: this.getMarginAtPoint(startingX) + startingX,
          y: startingY,
          width: itemWidth,
          height: itemHeight
        };
        remainingWidth = remainingWidth - itemWidth - this.getMarginAtPoint(startingX);
        startingX = startingX + this.getMarginAtPoint(startingX) + itemWidth;
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
  // --------------------------- EVENT INITIALIZERS AND UNINITIALIZERS END ------------------- //
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
    this.sortPlainsByArea(items);
    var repositionedItems = [];
    var match = this.findMatchingSpace(items, freeSpaces);

    while (match.matchingItemIndex != null && match.matchingFreeSpaceIndex != null) {
      var tempItem = JSON.parse(JSON.stringify(items[match.matchingItemIndex]));
      var repositionedItem = {
        x: freeSpaces[match.matchingFreeSpaceIndex].x + this.getMarginAtPoint(freeSpaces[match.matchingFreeSpaceIndex].x),
        y: freeSpaces[match.matchingFreeSpaceIndex].y + this.getMarginAtPoint(freeSpaces[match.matchingFreeSpaceIndex].y),
        width: tempItem.width,
        height: tempItem.height,
        index: tempItem.index
      };
      repositionedItems.push(repositionedItem);
      var occupiedSpace = {
        x: freeSpaces[match.matchingFreeSpaceIndex].x,
        y: freeSpaces[match.matchingFreeSpaceIndex].y,
        width: tempItem.width + this.getMarginAtPoint(freeSpaces[match.matchingFreeSpaceIndex].x),
        height: tempItem.height + this.getMarginAtPoint(freeSpaces[match.matchingFreeSpaceIndex].y),
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

        if (this.getMarginAtPoint(freeSpaces[j].x) == this.MARGIN) {
          tempItem.width += this.MARGIN * 1;
        }

        if (this.getMarginAtPoint(freeSpaces[j].y) == this.MARGIN) {
          tempItem.height += this.MARGIN * 1;
        }

        var freeSpaceWidth = freeSpaces[j].width;
        var freeSpaceHeight = freeSpaces[j].height;

        if (this.arePlainsIdentical(tempItem, freeSpaces[j])) {
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

      for (k = 0; k < length_1; k++) {
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

    var affectedItemsObjectDepthDescOrder = this.sortPlainsByDepth(affectedItemsObject);
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

    var remainingItemsObject = this.sortPlainsByHeight(remainingItemsObject);
    var initializedPlane = {
      x: 0,
      y: startingY,
      width: this.WIDTH,
      height: remainingItemsObject[0].height + this.getMarginAtPoint(startingY)
    };
    var remainingWidth = this.WIDTH;
    var deepestY = startingY;

    while (remainingItemsObject.length != 0) {
      if (remainingItemsObject.length > 0) {
        deepestY = startingY + remainingItemsObject[0].height + this.getMarginAtPoint(startingY);
      }

      var freeSpacesInCurrentRow = [];
      var occupiedSpacesInCurrentRow = [];
      var fittedRemainingItems = {};
      var length_0 = remainingItemsObject.length;

      for (var i = 0; i < length_0; i++) {
        if (fittedRemainingItems.hasOwnProperty(i)) {
          continue;
        }

        if (remainingWidth >= remainingItemsObject[i].width + this.getMarginAtPoint(this.WIDTH - remainingWidth)) {
          remainingItemsObject[i].x = this.WIDTH - remainingWidth + this.getMarginAtPoint(this.WIDTH - remainingWidth);
          remainingItemsObject[i].y = startingY + this.getMarginAtPoint(startingY);
          positionData[remainingItemsObject[i].index].x = this.WIDTH - remainingWidth + this.getMarginAtPoint(this.WIDTH - remainingWidth);
          positionData[remainingItemsObject[i].index].y = startingY + this.getMarginAtPoint(startingY);
          var occupiedSpace = {
            x: this.WIDTH - remainingWidth,
            y: startingY,
            width: remainingItemsObject[i].width + this.getMarginAtPoint(this.WIDTH - remainingWidth),
            height: remainingItemsObject[i].height + this.getMarginAtPoint(startingY),
            doNotMergeFlag: true
          };
          occupiedSpacesInCurrentRow.push(occupiedSpace);
          var freeSpace = {
            x: this.WIDTH - remainingWidth,
            y: startingY + this.getMarginAtPoint(startingY) + remainingItemsObject[i].height,
            width: remainingItemsObject[i].width + this.getMarginAtPoint(this.WIDTH - remainingWidth),
            height: initializedPlane.y + initializedPlane.height - (startingY + this.getMarginAtPoint(startingY) + remainingItemsObject[i].height)
          };

          if (this.isValidPlane(freeSpace)) {
            freeSpacesInCurrentRow.push(freeSpace);
          }

          fittedRemainingItems[i] = true;
          remainingWidth = remainingWidth - (remainingItemsObject[i].width + this.getMarginAtPoint(this.WIDTH - remainingWidth));
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

        if (this.isValidPlane(freeSpace)) {
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
          height: remainingItemsObject[0].height + this.getMarginAtPoint(initializedPlane.y + initializedPlane.height)
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
    var aLines = this.getLines(A);
    var bLines = this.getLines(B);
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
        plainToCheckIfFree = this.getPlainFrom4Points(pointsToGetPlain);
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

          plainToCheckIfFree = this.getPlainFrom4Points(finalPointsToGetPlain);
        } else {
          plainToCheckIfFree = this.getPlainFrom4Points(pointsToGetPlain);
        }
      }

      var plainToCheckIfFree_Lines = this.getLines(plainToCheckIfFree);

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

          var planeLine = this.getLines(planes[i]);

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
        var mergedPlane = this.getPlainFrom4Points(pointsToGetMergedPlain);
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

          var mergedPlane = this.getPlainFrom4Points(finalPointsToGetMergedPlain);
        } else {
          var mergedPlane = this.getPlainFrom4Points(pointsToGetMergedPlain);
        }
      }
    }

    if (mergedPlane != false) {
      if (this.isValidPlane(mergedPlane)) {
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

            if (this.isValidPlane(plane)) {
              planes.push(plane);
            }

            if (A.y + A.height < B.y + B.height) {
              var plane = {
                x: A.x,
                y: B.y,
                width: B.x - A.x,
                height: A.y + A.height - B.y
              };

              if (this.isValidPlane(plane)) {
                planes.push(plane);
              }
            } else if (A.y + A.height >= B.y + B.height) {
              var plane = {
                x: A.x,
                y: B.y,
                width: B.x - A.x,
                height: B.height
              };

              if (this.isValidPlane(plane)) {
                planes.push(plane);
              }

              if (A.y + A.height > B.y + B.height) {
                var plane = {
                  x: A.x,
                  y: B.y + B.height,
                  width: A.width,
                  height: A.y + A.height - (B.y + B.height)
                };

                if (this.isValidPlane(plane)) {
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

              if (this.isValidPlane(plane)) {
                planes.push(plane);
              }
            } else {
              var plane = {
                x: A.x,
                y: A.y,
                width: B.x - A.x,
                height: B.y + B.height - A.y
              };

              if (this.isValidPlane(plane)) {
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

              if (this.isValidPlane(plane)) {
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

              if (this.isValidPlane(plane)) {
                planes.push(plane);
              }
            } else {
              var plane = {
                x: B.x + B.width,
                y: B.y,
                width: A.x + A.width - (B.x + B.width),
                height: B.height
              };

              if (this.isValidPlane(plane)) {
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

              if (this.isValidPlane(plane)) {
                planes.push(plane);
              }
            } else {
              var plane = {
                x: B.x + B.width,
                y: A.y,
                width: A.x + A.width - (B.x + B.width),
                height: B.y + B.height - A.y
              };

              if (this.isValidPlane(plane)) {
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

          if (this.isValidPlane(plane)) {
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

              if (this.isValidPlane(plane)) {
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

                if (this.isValidPlane(plane)) {
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

              if (this.isValidPlane(plane)) {
                planes.push(plane);
              }

              if (A.y + A.height > B.y + B.height) {
                var plane = {
                  x: A.x,
                  y: B.y + B.height,
                  width: A.width,
                  height: A.y + A.height - (B.y + B.height)
                };

                if (this.isValidPlane(plane)) {
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

              if (this.isValidPlane(plane)) {
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

                if (this.isValidPlane(plane)) {
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

              if (this.isValidPlane(plane)) {
                planes.push(plane);
              }

              if (A.y + A.height > B.y + B.height) {
                var plane = {
                  x: A.x,
                  y: B.y + B.height,
                  width: A.width,
                  height: A.y + A.height - (B.y + B.height)
                };

                if (this.isValidPlane(plane)) {
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


  LimberGridView.prototype.onWindowResize = function (event) {
    setTimeout(this.onWindowResizeTimerCallbackFunctionVariable, this.WINDOW_RESIZE_WAIT_TIME);
    window.removeEventListener("resize", this.onWindowResizeFunctionVariable);
  };

  LimberGridView.prototype.onWindowResizeTimerCallback = function (event) {
    this.init(this.WIDTH, false);
    this.render();

    if (this.options.reRenderOnResize != false) {
      window.addEventListener("resize", this.onWindowResizeFunctionVariable);
    }
  };

  LimberGridView.prototype.onItemClick = function (event) {
    this.callbacks.onItemClickCallback(event);
  }; // ----------------------------------------------------------------------------------------- //
  // ------------------------------ EVENT HANDLERS MISCELLANEOUS END ------------------------- //
  // ----------------------------------------------------------------------------------------- //
  // ----------------------------------------------------------------------------------------- //
  // -------------------- EVENT HANDLERS FOR ADDING AND CUTTING SPACE ITEM ------------------- //
  // ----------------------------------------------------------------------------------------- //


  LimberGridView.prototype.onLimberGridMouseDown = function (event) {
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
    this.limberGridMouseDownCheckTimeOutVariable = setTimeout(this.onLimberGridMouseDownCheck.bind(this, event, event.offsetX, event.offsetY), this.MOUSE_DOWN_TIME);
    this.$limberGridView[0].addEventListener("mousemove", this.onLimberGridMouseMoveBindedFunctionVariable);
    document.addEventListener("mouseup", this.onLimberGridMouseUpBindedFunctionVariable);
    document.addEventListener("contextmenu", this.onLimberGridContextMenuBindedFunctionVariable);
  };

  LimberGridView.prototype.onLimberGridTouchStart = function (event) {
    if (event.target.classList.contains("limberGridView")) {
      event.stopPropagation();
    } else {
      return;
    }

    this.limberGridTouchStartCancel = false;
    this.limberGridTouchStartTimerComplete = false;
    clearTimeout(this.limberGridTouchStartCheckTimeOutVariable);
    this.limberGridTouchStartCheckTimeOutVariable = setTimeout(this.onLimberGridTouchStartCheck.bind(this, event), this.TOUCH_HOLD_TIME);
    this.$limberGridView[0].addEventListener("touchmove", this.onLimberGridTouchMoveBindedFunctionVariable);
    document.addEventListener("touchend", this.onLimberGridTouchEndBindedFunctionVariable);
    document.addEventListener("touchcancel", this.onLimberGridTouchCancelBindedFunctionVariable);
    document.addEventListener("contextmenu", this.onLimberGridTouchContextMenuBindedFunctionVariable);
    this.unInitializeItemTouchEvents();
    event.stopPropagation();
  };

  LimberGridView.prototype.onLimberGridMouseDownCheck = function (event, offsetX, offsetY) {
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

  LimberGridView.prototype.onLimberGridTouchStartCheck = function (event) {
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
      this.insertAddItemOnTouchHoldGuideStyles(x, y);
      this.$limberGridViewAddItemOnTouchHoldGuide[0].style.transform = "translate(" + x + "px, " + y + "px)";
      this.$limberGridViewAddItemOnTouchHoldGuide[0].classList.add("limberGridViewAddItemOnTouchHoldGuideActive");
      event.preventDefault();
    } else {// touchstart cancel before TimerComplete
    }
  };

  LimberGridView.prototype.onLimberGridMouseMove = function (event) {
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
      this.adjustHeight(yMousePosition);

      if (newWidth > 0 && newHeight > 0) {
        this.$limberGridViewAddItemGuide[0].style.width = newWidth + "px";
        this.$limberGridViewAddItemGuide[0].style.height = newHeight + "px";
      }

      if (this.ADD_OR_CUTSPACE_TOGGLE == "ADD") {
        clearTimeout(this.addItemAllowCheckTimeOutVariable);
        this.addItemAllowCheckTimeOutVariable = setTimeout(this.addItemAllowCheckTimeOut.bind(this, this.userActionData.addPositionX, this.userActionData.addPositionY, newWidth, newHeight), this.DEMO_WAIT_TIME);
      } else if (this.ADD_OR_CUTSPACE_TOGGLE == "CUTSPACE") {
        clearTimeout(this.cutSpaceAllowCheckTimeOutVariable);
        this.cutSpaceAllowCheckTimeOutVariable = setTimeout(this.cutSpaceAllowCheckTimeOut.bind(this, this.userActionData.addPositionX, this.userActionData.addPositionY, newWidth, newHeight), this.DEMO_WAIT_TIME);
      }
    } else {
      clearTimeout(this.limberGridMouseDownCheckTimeOutVariable);
      this.$limberGridView[0].removeEventListener("mousemove", this.onLimberGridMouseMoveBindedFunctionVariable);
      document.removeEventListener("mouseup", this.onLimberGridMouseUpBindedFunctionVariable);
      document.removeEventListener("contextmenu", this.onLimberGridContextMenuBindedFunctionVariable);
    }

    event.stopPropagation();
  };

  LimberGridView.prototype.onLimberGridTouchMove = function (event) {
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
        this.adjustHeight(yTouchPosition);
        var programScrolled = this.adjustScroll(limberGridViewOnVisibleAreaY, limberGridViewHeightVisibleHeight);
      }

      if (this.ADD_OR_CUTSPACE_TOGGLE == "ADD") {
        clearTimeout(this.addItemAllowCheckTimeOutVariable);

        if (programScrolled != true) {
          this.addItemAllowCheckTimeOutVariable = setTimeout(this.addItemAllowCheckTimeOut.bind(this, this.userActionData.addPositionX, this.userActionData.addPositionY, newWidth, newHeight), this.DEMO_WAIT_TIME);
        }
      } else if (this.ADD_OR_CUTSPACE_TOGGLE == "CUTSPACE") {
        clearTimeout(this.cutSpaceAllowCheckTimeOutVariable);

        if (programScrolled != true) {
          this.cutSpaceAllowCheckTimeOutVariable = setTimeout(this.cutSpaceAllowCheckTimeOut.bind(this, this.userActionData.addPositionX, this.userActionData.addPositionY, newWidth, newHeight), this.DEMO_WAIT_TIME);
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

  LimberGridView.prototype.onLimberGridMouseUp = function (event) {
    clearTimeout(this.addItemAllowCheckTimeOutVariable);
    clearTimeout(this.limberGridMouseDownCheckTimeOutVariable);
    var itemAddedFlag = false;

    if (this.limberGridMouseDownTimerComplete == true) {
      if (this.ADD_OR_CUTSPACE_TOGGLE == "ADD") {
        if (this.addItemAllowCheck(this.userActionData.addPositionX, this.userActionData.addPositionY, this.userActionData.newWidth, this.userActionData.newHeight)) {
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
        if (this.cutSpaceAllowCheck(this.userActionData.addPositionX, this.userActionData.addPositionY, this.userActionData.newWidth, this.userActionData.newHeight)) {
          this.shiftItemsUp(this.userActionData.addPositionY, this.userActionData.newHeight);
        }
      }
    } else {
      this.limberGridMouseDownCancel = true;
    }

    this.onLimberGridContextMenu();
    event.stopPropagation();

    if (this.callbacks.addCompleteCallback != undefined && this.callbacks.addCompleteCallback != null) {
      if (itemAddedFlag == true) {
        this.callbacks.addCompleteCallback(renderDetails.items, item.width, item.height, "addItemInteractive");
      }
    }
  };

  LimberGridView.prototype.onLimberGridTouchEnd = function (event) {
    clearTimeout(this.addItemAllowCheckTimeOutVariable);
    clearTimeout(this.limberGridTouchStartCheckTimeOutVariable);
    var itemAddedFlag = false;

    if (this.limberGridTouchStartTimerComplete == true) {
      if (this.ADD_OR_CUTSPACE_TOGGLE == "ADD") {
        if (this.addItemAllowCheck(this.userActionData.addPositionX, this.userActionData.addPositionY, this.userActionData.newWidth, this.userActionData.newHeight)) {
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
        if (this.cutSpaceAllowCheck(this.userActionData.addPositionX, this.userActionData.addPositionY, this.userActionData.newWidth, this.userActionData.newHeight)) {
          this.shiftItemsUp(this.userActionData.addPositionY, this.userActionData.newHeight);
        }
      }
    } else {
      this.limberGridTouchStartCancel = true;
    }

    this.limberGridTouchStartTimerComplete = false;
    this.onLimberGridContextMenu();
    this.initializeItemTouchEvents();
    event.stopPropagation();

    if (this.callbacks.addCompleteCallback != undefined && this.callbacks.addCompleteCallback != null) {
      if (itemAddedFlag == true) {
        this.callbacks.addCompleteCallback(renderDetails.items, item.width, item.height, "addItemInteractive");
      }
    }
  };

  LimberGridView.prototype.onLimberGridTouchCancel = function (event) {
    clearTimeout(this.addItemAllowCheckTimeOutVariable);
    clearTimeout(this.limberGridTouchStartCheckTimeOutVariable);
    this.limberGridTouchStartCancel = false;
    this.limberGridTouchStartTimerComplete = false;
    this.onLimberGridContextMenu();
    this.initializeItemTouchEvents();
    event.stopPropagation();
  };

  LimberGridView.prototype.onLimberGridTouchContextMenu = function (event) {
    event.preventDefault();
  };

  LimberGridView.prototype.onLimberGridContextMenu = function (event) {
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

  LimberGridView.prototype.addItemAllowCheckTimeOut = function (x, y, width, height) {
    if (this.addItemAllowCheck(x, y, width, height) == false) {
      this.$limberGridViewAddItemGuide[0].classList.remove("limberGridViewAddItemGuideAddAllow");
      this.$limberGridViewAddItemGuide[0].classList.add("limberGridViewAddItemGuideAddDisallow");
    } else {
      this.$limberGridViewAddItemGuide[0].classList.remove("limberGridViewAddItemGuideAddDisallow");
      this.$limberGridViewAddItemGuide[0].classList.add("limberGridViewAddItemGuideAddAllow");
    }
  };

  LimberGridView.prototype.addItemAllowCheck = function (x, y, width, height) {
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
        x: this.positionData[i].x - this.getMarginAtPoint(this.positionData[i].x),
        y: this.positionData[i].y - this.getMarginAtPoint(this.positionData[i].y),
        width: this.positionData[i].width + this.getMarginAtPoint(this.positionData[i].x) + this.MARGIN,
        height: this.positionData[i].height + this.getMarginAtPoint(this.positionData[i].y) + this.MARGIN
      };
      var isInside = this.isPlaneBInsidePlaneA_TouchingIsInside(iterItem, tempPlane);

      if (isInside) {
        return false;
      }
    }

    return true;
  };

  LimberGridView.prototype.cutSpaceAllowCheckTimeOut = function (x, y, width, height) {
    if (this.cutSpaceAllowCheck(x, y, width, height) == false) {
      this.$limberGridViewAddItemGuide[0].classList.remove("limberGridViewAddItemGuideAddAllow");
      this.$limberGridViewAddItemGuide[0].classList.add("limberGridViewAddItemGuideAddDisallow");
    } else {
      this.$limberGridViewAddItemGuide[0].classList.remove("limberGridViewAddItemGuideAddDisallow");
      this.$limberGridViewAddItemGuide[0].classList.add("limberGridViewAddItemGuideAddAllow");
    }
  };

  LimberGridView.prototype.cutSpaceAllowCheck = function (x, y, width, height) {
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

  LimberGridView.prototype.insertAddItemOnTouchHoldGuideStyles = function (x, y) {
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
  }; // ----------------------------------------------------------------------------------------- //
  // ------------------- EVENT HANDLERS FOR ADDING AND CUTTING SPACE ITEM END ---------------- //
  // ----------------------------------------------------------------------------------------- //
  // ----------------------------------------------------------------------------------------- //
  // ------------------------ EVENT HANDLERS AND CODE FOR ITEM INTERACTION ------------------- //
  // ----------------------------------------------------------------------------------------- //


  LimberGridView.prototype.onItemMouseDown = function (event) {
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
      this.longPressCheck = setTimeout(this.mouseDownCheck.bind(this, event), this.MOUSE_DOWN_TIME);
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

  LimberGridView.prototype.onItemTouchStart = function (event) {
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

    var touchPosOnLimberGridItem = this.calculateTouchPosOnLimberGridItem(event);

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
      this.longTouchCheck = setTimeout(this.tapHoldCheck.bind(this, event), this.TOUCH_HOLD_TIME);
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

  LimberGridView.prototype.mouseDownCheck = function (event) {
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

  LimberGridView.prototype.tapHoldCheck = function (event) {
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

  LimberGridView.prototype.onMouseMove = function (event) {
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
        var mousePositionOnLimberGrid = this.calculateMousePosOnLimberGrid(event);

        if (mousePositionOnLimberGrid != false) {
          var scrollTop = this.$limberGridView[0].scrollTop;
          var scrollHeight = this.$limberGridView[0].scrollHeight;
          var yMousePosition = mousePositionOnLimberGrid.y;
          this.adjustHeight(yMousePosition);
        }

        clearTimeout(this.showMoveDemoTimeOutVariable);
        this.showMoveDemoTimeOutVariable = setTimeout(this.showMoveDemo.bind(this, this.userActionData.itemIndex, mousePositionOnLimberGrid), this.DEMO_WAIT_TIME);
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
        this.adjustHeight(yMousePosition);

        if (newWidth > 0 && newHeight > 0) {
          this.$limberGridViewGridPseudoItems[this.userActionData.itemIndex].style.width = newWidth + "px";
          this.$limberGridViewGridPseudoItems[this.userActionData.itemIndex].style.height = newHeight + "px";
        }

        if (this.$limberGridViewGridPseudoItems[this.userActionData.itemIndex].classList.contains("limberGridViewGridPseudoItemResizeAllow") || this.$limberGridViewGridPseudoItems[this.userActionData.itemIndex].classList.contains("limberGridViewGridPseudoItemResizeDisallow")) {
          this.$limberGridViewGridPseudoItems[this.userActionData.itemIndex].classList.remove("limberGridViewGridPseudoItemResizeAllow", "limberGridViewGridPseudoItemResizeDisallow");
        }

        clearTimeout(this.showResizeDemoTimeOutVariable);
        this.showResizeDemoTimeOutVariable = setTimeout(this.showResizeDemo.bind(this, this.userActionData.itemIndex, newWidth, newHeight), this.DEMO_WAIT_TIME);
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

  LimberGridView.prototype.onTouchMove = function (event) {
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
        var touchPositionOnLimberGrid = this.calculateTouchPosOnLimberGrid(event);

        if (touchPositionOnLimberGrid != false) {
          var scrollTop = this.$limberGridView[0].scrollTop;
          var scrollLeft = this.$limberGridView[0].scrollLeft;
          var limberGridViewBoundingClientRect = this.$limberGridView[0].getBoundingClientRect();
          var limberGridViewWidthVisibleWidth = this.$limberGridView[0].offsetWidth - limberGridViewBoundingClientRect.left;
          var limberGridViewHeightVisibleHeight = this.$limberGridView[0].offsetHeight - limberGridViewBoundingClientRect.top;
          var limberGridViewOnVisibleAreaX = touchPositionOnLimberGrid.x + this.PADDING_LEFT - scrollLeft;
          var limberGridViewOnVisibleAreaY = touchPositionOnLimberGrid.y + this.PADDING_TOP - scrollTop;
          var yTouchPosition = touchPositionOnLimberGrid.y;
          this.adjustHeight(yTouchPosition);
          var programScrolled = this.adjustScroll(limberGridViewOnVisibleAreaY, limberGridViewHeightVisibleHeight);
        }

        clearTimeout(this.showMoveDemoTimeOutVariable);

        if (programScrolled != true) {
          this.showMoveDemoTimeOutVariable = setTimeout(this.showMoveDemo.bind(this, this.userActionData.itemIndex, touchPositionOnLimberGrid), this.DEMO_WAIT_TIME);
        }
      } else {
        var scrollTop = this.$limberGridView[0].scrollTop;
        var scrollLeft = this.$limberGridView[0].scrollLeft;
        var x = this.userActionData.itemPositionX;
        var y = this.userActionData.itemPositionY;
        var touchPositionOnLimberGrid = this.calculateTouchPosOnLimberGrid(event);

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
          this.adjustHeight(yTouchPosition);
          var programScrolled = this.adjustScroll(limberGridViewOnVisibleAreaY, limberGridViewHeightVisibleHeight);
        }

        clearTimeout(this.showResizeDemoTimeOutVariable);

        if (programScrolled != true) {
          this.showResizeDemoTimeOutVariable = setTimeout(this.showResizeDemo.bind(this, this.userActionData.itemIndex, newWidth, newHeight), this.DEMO_WAIT_TIME);
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

  LimberGridView.prototype.onMouseUp = function (event) {
    clearTimeout(this.showMoveDemoTimeOutVariable);
    clearTimeout(this.showResizeDemoTimeOutVariable);
    var itemResizeFlag = false;
    var itemMoveFlag = false;

    if (this.mouseDownTimerComplete == true) {
      if (this.userActionData.type == "move") {
        this.$limberGridViewBodyPseudoItems[this.userActionData.itemIndex].classList.remove("limberGridViewBodyPseudoItemActive");
        this.$limberGridViewBodyPseudoItems[this.userActionData.itemIndex].style.transform = "translate(" + 0 + "px, " + 0 + "px)";
        var mousePositionOnLimberGrid = this.calculateMousePosOnLimberGrid(event);

        if (mousePositionOnLimberGrid != false) {
          var newMoveCoordinates = this.checkNewMoveCoordinates(this.userActionData.itemIndex, mousePositionOnLimberGrid);

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
            this.revertShowMoveOrResizeDemo();
          }
        } else {
          this.revertShowMoveOrResizeDemo();
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
          this.revertShowMoveOrResizeDemo();
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

  LimberGridView.prototype.onTouchEnd = function (event) {
    clearTimeout(this.showMoveDemoTimeOutVariable);
    clearTimeout(this.showResizeDemoTimeOutVariable);
    var itemResizeFlag = false;
    var itemMoveFlag = false;

    if (this.tapHoldTimerComplete == true) {
      if (this.userActionData.type == "move") {
        this.$limberGridViewBodyPseudoItems[this.userActionData.itemIndex].classList.remove("limberGridViewBodyPseudoItemActive");
        this.$limberGridViewBodyPseudoItems[this.userActionData.itemIndex].style.transform = "translate(" + 0 + "px, " + 0 + "px)";
        var touchPositionOnLimberGrid = this.calculateTouchPosOnLimberGrid(event);

        if (touchPositionOnLimberGrid != false) {
          var newMoveCoordinates = this.checkNewMoveCoordinates(this.userActionData.itemIndex, touchPositionOnLimberGrid);

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
            this.revertShowMoveOrResizeDemo();
          }
        } else {
          this.revertShowMoveOrResizeDemo();
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
          this.revertShowMoveOrResizeDemo();
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

  LimberGridView.prototype.onContextMenu = function (event) {
    clearTimeout(this.showMoveDemoTimeOutVariable);
    clearTimeout(this.showResizeDemoTimeOutVariable);
    this.revertShowMoveOrResizeDemo();
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

  LimberGridView.prototype.onItemTouchContextMenu = function (event) {
    event.preventDefault();
  };

  LimberGridView.prototype.onTouchCancel = function (event) {
    this.onContextMenu();
    this.tapHoldTimerComplete = false;
    this.$limberGridView[0].addEventListener("touchstart", this.onLimberGridTouchStartFunctionVariable);
  };

  LimberGridView.prototype.calculateMousePosOnLimberGrid = function (event) {
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

  LimberGridView.prototype.calculateTouchPosOnLimberGrid = function (event) {
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

  LimberGridView.prototype.calculateTouchPosOnLimberGridItem = function (event) {
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

  LimberGridView.prototype.checkNewMoveCoordinates = function (indexOfMovedItem, mousePositions) {
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

      var lines = this.getLines(this.positionData[i]);
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
      if (x + this.positionData[indexOfMovedItem].width + this.getMarginAtPoint(x) > this.WIDTH) {
        return false;
      } else {
        return mousePositions;
      }
    } else {
      if (this.positionData[indexOfOverlappingItem].x + this.positionData[indexOfMovedItem].width + this.getMarginAtPoint(this.positionData[indexOfOverlappingItem].x) > this.WIDTH) {
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

  LimberGridView.prototype.showMoveDemo = function (index, mousePosition) {
    if (mousePosition != false) {
      var newMoveCoordinates = this.checkNewMoveCoordinates(index, mousePosition);

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

  LimberGridView.prototype.showResizeDemo = function (index, width, height) {
    if (this.resizePlaneDemo(index, width, height) == false) {
      this.$limberGridViewGridPseudoItems[this.userActionData.itemIndex].classList.add("limberGridViewGridPseudoItemResizeDisallow");
    } else {
      this.$limberGridViewGridPseudoItems[this.userActionData.itemIndex].classList.add("limberGridViewGridPseudoItemResizeAllow");
    }
  };

  LimberGridView.prototype.revertShowMoveOrResizeDemo = function () {
    var length_0 = this.$limberGridViewItems.length;

    for (var i = 0; i < length_0; i++) {
      this.$limberGridViewItems[i].style.transform = "translate(" + this.positionData[i].x + "px, " + this.positionData[i].y + "px)";
      this.$limberGridViewItems[i].classList.remove("limberGridViewItemDemo", "limberGridViewItemResizingState");
      this.$limberGridViewGridPseudoItems[i].classList.remove("limberGridViewGridPseudoItemResizingState", "limberGridViewGridPseudoItemActive");
    }
  };

  LimberGridView.prototype.adjustHeight = function (yMouseOrTouchPosition) {
    var scrollHeight = this.$limberGridView[0].scrollHeight;

    if (scrollHeight - yMouseOrTouchPosition <= this.AUTO_SCROLL_POINT) {
      this.$limberGridViewHeightAdjustGuide[0].style.height = yMouseOrTouchPosition + this.MOVE_OR_RESIZE_HEIGHT_INCREMENTS + "px";
    }
  };

  LimberGridView.prototype.adjustScroll = function (limberGridViewOnVisibleAreaY, limberGridViewHeightVisibleHeight) {
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
  }; // ----------------------------------------------------------------------------------------- //
  // ------------------------ EVENT HANDLERS AND CODE FOR ITEM INTERACTION END --------------- //
  // ----------------------------------------------------------------------------------------- //
  // ----------------------------------------------------------------------------------------- //
  // ---------------------------------------- ESSENTIALS ------------------------------------- //
  // ----------------------------------------------------------------------------------------- //


  LimberGridView.prototype.getPlainFrom4Points = function (pointsArray) {
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

  LimberGridView.prototype.getCoordinates = function (item) {
    var itemTopLeft = [item.x, item.y];
    var itemTopRight = [item.x + item.width, item.y];
    var itemBottomLeft = [item.x, item.y + item.height];
    var itemBottomRight = [item.x + item.width, item.y + item.height];
    var itemCoordinatesArr = [itemTopLeft, itemTopRight, itemBottomRight, itemBottomLeft];
    return itemCoordinatesArr;
  };

  LimberGridView.prototype.getLines = function (item) {
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

  LimberGridView.prototype.arePlainsSame = function (A, B) {
    if (A.x == B.x && A.y == B.y && A.width == B.width && A.height == B.height) {
      return true;
    } else {
      return false;
    }
  };

  LimberGridView.prototype.arePlainsIdentical = function (A, B) {
    if (A.width == B.width && A.height == B.height) {
      return true;
    } else {
      return false;
    }
  };

  LimberGridView.prototype.isValidPlane = function (plane) {
    if (plane.x >= 0 && plane.y >= 0 && plane.width > 0 && plane.height > 0) {
      return true;
    } else {
      return false;
    }
  };

  LimberGridView.prototype.sortPlainsByArea = function (planes, order = "dec") {
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

  LimberGridView.prototype.sortPlainsByHeight = function (planes, order = "dec") {
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

  LimberGridView.prototype.sortPlainsByDepth = function (planes, order = "dec") {
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

  LimberGridView.prototype.divideEqualNumber = function (a, DEFAULT = 0) {
    var res = a / a;

    if (res == NaN) {
      return 0;
    } else {
      return 1;
    }
  };

  LimberGridView.prototype.getMarginAtPoint = function (a) {
    if (a == 0) {
      return 0;
    } else {
      return this.MARGIN;
    }
  };

  LimberGridView.prototype.getRowSequence = function (serialize) {
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
  }; // ----------------------------------------------------------------------------------------- //
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
  

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmNzcz80MTQ5Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJMaW1iZXJHcmlkVmlldyIsInByb3RvdHlwZSIsImNvbnN0cnVjdG9yIiwiTU9WRV9HVUlERV9SQURJVVMiLCJSRVNJWkVfU1FVQVJFX0dVSURFX0xFTkdUSCIsIlJFU0laRV9TUVVBUkVfQk9SREVSX0dVSURFX1dJRFRIIiwiQVVUT19TQ1JPTExfRElTVEFOQ0UiLCJBVVRPX1NDUk9MTF9QT0lOVCIsIk1PVkVfT1JfUkVTSVpFX0hFSUdIVF9JTkNSRU1FTlRTIiwiTU9VU0VfRE9XTl9USU1FIiwiVE9VQ0hfSE9MRF9USU1FIiwiREVNT19XQUlUX1RJTUUiLCJXSU5ET1dfUkVTSVpFX1dBSVRfVElNRSIsIk1BUkdJTiIsIk1PQklMRV9BU1BFQ1RfUkFUSU8iLCJBRERfT1JfQ1VUU1BBQ0VfVE9HR0xFIiwib3B0aW9ucyIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImNhbGxiYWNrcyIsImluaXRpYWxHcmlkRGF0YSIsImluaXRpYWxQb3NpdGlvbkRhdGEiLCJwb3NpdGlvbkRhdGEiLCJtb2JpbGVBc3BlY3RSYXRpbyIsInVuZGVmaW5lZCIsImVkaXRhYmxlIiwib25MaW1iZXJHcmlkTW91c2VEb3duRnVuY3Rpb25WYXJpYWJsZSIsIm9uTGltYmVyR3JpZE1vdXNlRG93biIsImJpbmQiLCJvbkxpbWJlckdyaWRNb3VzZU1vdmVCaW5kZWRGdW5jdGlvblZhcmlhYmxlIiwib25MaW1iZXJHcmlkTW91c2VNb3ZlIiwib25MaW1iZXJHcmlkTW91c2VVcEJpbmRlZEZ1bmN0aW9uVmFyaWFibGUiLCJvbkxpbWJlckdyaWRNb3VzZVVwIiwib25MaW1iZXJHcmlkQ29udGV4dE1lbnVCaW5kZWRGdW5jdGlvblZhcmlhYmxlIiwib25MaW1iZXJHcmlkQ29udGV4dE1lbnUiLCJvbkxpbWJlckdyaWRUb3VjaFN0YXJ0RnVuY3Rpb25WYXJpYWJsZSIsIm9uTGltYmVyR3JpZFRvdWNoU3RhcnQiLCJvbkxpbWJlckdyaWRUb3VjaE1vdmVCaW5kZWRGdW5jdGlvblZhcmlhYmxlIiwib25MaW1iZXJHcmlkVG91Y2hNb3ZlIiwib25MaW1iZXJHcmlkVG91Y2hFbmRCaW5kZWRGdW5jdGlvblZhcmlhYmxlIiwib25MaW1iZXJHcmlkVG91Y2hFbmQiLCJvbkxpbWJlckdyaWRUb3VjaENhbmNlbEJpbmRlZEZ1bmN0aW9uVmFyaWFibGUiLCJvbkxpbWJlckdyaWRUb3VjaENhbmNlbCIsIm9uTGltYmVyR3JpZFRvdWNoQ29udGV4dE1lbnVCaW5kZWRGdW5jdGlvblZhcmlhYmxlIiwib25MaW1iZXJHcmlkVG91Y2hDb250ZXh0TWVudSIsIm9uSXRlbU1vdXNlRG93bkZ1bmN0aW9uVmFyaWFibGUiLCJvbkl0ZW1Nb3VzZURvd24iLCJvbk1vdXNlTW92ZUJpbmRlZEZ1bmN0aW9uVmFyaWFibGUiLCJvbk1vdXNlTW92ZSIsIm9uTW91c2VVcEJpbmRlZEZ1bmN0aW9uVmFyaWFibGUiLCJvbk1vdXNlVXAiLCJvbkNvbnRleHRNZW51QmluZGVkRnVuY3Rpb25WYXJpYWJsZSIsIm9uQ29udGV4dE1lbnUiLCJvbkl0ZW1Ub3VjaFN0YXJ0RnVuY3Rpb25WYXJpYWJsZSIsIm9uSXRlbVRvdWNoU3RhcnQiLCJvblRvdWNoTW92ZUJpbmRlZEZ1bmN0aW9uVmFyaWFibGUiLCJvblRvdWNoTW92ZSIsIm9uVG91Y2hFbmRCaW5kZWRGdW5jdGlvblZhcmlhYmxlIiwib25Ub3VjaEVuZCIsIm9uVG91Y2hDYW5jZWxCaW5kZWRGdW5jdGlvblZhcmlhYmxlIiwib25Ub3VjaENhbmNlbCIsIm9uSXRlbVRvdWNoQ29udGV4dE1lbnVCaW5kZWRGdW5jdGlvblZhcmlhYmxlIiwib25JdGVtVG91Y2hDb250ZXh0TWVudSIsImxpbWJlckdyaWRNb3VzZURvd25DaGVja1RpbWVPdXRWYXJpYWJsZSIsImxpbWJlckdyaWRUb3VjaFN0YXJ0Q2hlY2tUaW1lT3V0VmFyaWFibGUiLCJtb3ZlR3VpZGVSYWRpdXMiLCJyZXNpemVTcXVhcmVHdWlkZUxlbmd0aCIsInJlc2l6ZVNxdWFyZUJvcmRlckd1aWRlV2lkdGgiLCJvbkl0ZW1DbGlja0NhbGxiYWNrIiwib25JdGVtQ2xpY2tGdW5jdGlvblZhcmlhYmxlIiwib25JdGVtQ2xpY2siLCJyZVJlbmRlck9uUmVzaXplIiwib25XaW5kb3dSZXNpemVGdW5jdGlvblZhcmlhYmxlIiwib25XaW5kb3dSZXNpemUiLCJvbldpbmRvd1Jlc2l6ZVRpbWVyQ2FsbGJhY2tGdW5jdGlvblZhcmlhYmxlIiwib25XaW5kb3dSZXNpemVUaW1lckNhbGxiYWNrIiwiYWRkRXZlbnRMaXN0ZW5lciIsImluaXQiLCJncmlkV2lkdGgiLCJhdXRvQXJyYW5nZSIsImluaXRpYWxHcmlkV2lkdGgiLCJlbCIsImluZGV4T2YiLCIkYm9keSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJlbGVtZW50SUQiLCJzdWJzdHJpbmciLCJsZW5ndGgiLCJwc2V1ZG9FbGVtZW50SUQiLCIkZWwiLCJnZXRFbGVtZW50QnlJZCIsImluc2VydEFkamFjZW50SFRNTCIsIiRib2R5UHNldWRvRWwiLCJpbm5lckhUTUwiLCIkbGltYmVyR3JpZFZpZXdDb250YWluZXIiLCJxdWVyeVNlbGVjdG9yQWxsIiwiJGxpbWJlckdyaWRWaWV3U3R5bGUiLCIkbGltYmVyR3JpZFZpZXciLCJQQURESU5HX0xFRlQiLCJwYXJzZUludCIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiUEFERElOR19SSUdIVCIsIlBBRERJTkdfVE9QIiwiUEFERElOR19CT1RUT00iLCJXSURUSCIsImNsaWVudFdpZHRoIiwiSEVJR0hUIiwiY2xpZW50SGVpZ2h0IiwiV0lEVEhfU0NBTEVfRkFDVE9SIiwicmVtYWluaW5nSXRlbXMiLCJsZW5ndGhfMCIsImkiLCJwdXNoIiwid2lkdGgiLCJoZWlnaHQiLCJmaXRSZW1haW5pbmdJdGVtc0JlbG93RGVlcGVzdExpbmUiLCJtYXJnaW4iLCJnZXRHcmlkRGF0YSIsImdyaWREYXRhIiwiZ3JpZEhlaWdodCIsInNldEFkZE9yQ3V0U3BhY2UiLCJmbGFnIiwicmVuZGVyIiwic2NhbGUiLCJ1bkluaXRpYWxpemVFdmVudHMiLCJjbGFzc0xpc3QiLCJjbGFzc0xpc3RTdHJpbmciLCJqb2luIiwiaHRtbCIsInQwIiwicGVyZm9ybWFuY2UiLCJub3ciLCJpc01vYmlsZSIsImRhdGFUeXBlIiwiZnJvbnQiLCJzdHlsZV8xIiwieCIsInN0eWxlXzIiLCJ5Iiwic3R5bGVfMyIsInN0eWxlXzQiLCJzdHlsZV81Iiwic3R5bGUiLCJib2R5RnJvbnQiLCJib2R5RW5kIiwidXNlckRhdGEiLCJnZXRJdGVtUmVuZGVyRGF0YUNhbGxiYWNrIiwiYm9keSIsImVuZCIsIml0ZW0iLCJyZW1vdmVDaGlsZCIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJhdHRyaWJ1dGUiLCJjcmVhdGVBdHRyaWJ1dGUiLCJ2YWx1ZSIsInNldEF0dHJpYnV0ZU5vZGUiLCJhZGQiLCJ0cmFuc2Zvcm0iLCJhcHBlbmRDaGlsZCIsInNlcmlhbGl6ZWRQb3NpdGlvbkRhdGEiLCJnZXRSb3dTZXF1ZW5jZSIsImdldE1hcmdpbkF0UG9pbnQiLCJtYXAiLCJ0MSIsImNvbnNvbGUiLCJsb2ciLCIkbGltYmVyR3JpZFZpZXdJdGVtcyIsInJlbmRlclBzZXVkb0VsZW1lbnRzIiwiaW5pdGlhbGl6ZVZhcmlhYmxlcyIsImluaXRpYWxpemVFdmVudHMiLCJyZW5kZXJDb21wbGV0ZSIsIiRsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtcyIsInBhcmVudE5vZGUiLCIkbGltYmVyR3JpZFZpZXdCb2R5UHNldWRvSXRlbXMiLCJncmlkSHRtbCIsImJvZHlIdG1sIiwiZ3JpZEZyb250IiwiZ3JpZEl0ZW0iLCJib2R5SXRlbSIsImxpbWJlckdyaWRWaWV3TW92ZUd1aWRlIiwibGltYmVyR3JpZFZpZXdIZWlnaHRBZGp1c3RHdWlkZSIsImxpbWJlckdyaWRWaWV3QWRkSXRlbUd1aWRlIiwibGltYmVyR3JpZFZpZXdBZGRJdGVtT25Ub3VjaEhvbGRHdWlkZSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCIkbGltYmVyR3JpZFZpZXdNb3ZlR3VpZGUiLCIkbGltYmVyR3JpZFZpZXdIZWlnaHRBZGp1c3RHdWlkZSIsIiRsaW1iZXJHcmlkVmlld0FkZEl0ZW1HdWlkZSIsIiRsaW1iZXJHcmlkVmlld0FkZEl0ZW1PblRvdWNoSG9sZEd1aWRlIiwicmVuZGVySXRlbXMiLCJpdGVtcyIsInByb2Nlc3NUeXBlIiwic2Nyb2xsVG9wIiwicmVwbGFjZUNoaWxkIiwicmVuZGVyUHNldWRvSXRlbXMiLCJyZW5kZXJEZXRhaWxzIiwiaXRlbXNSZW5kZXJDb21wbGV0ZSIsImRpdkdyaWQiLCJhdHRyaWJ1dGVHcmlkIiwiZGl2Qm9keSIsImF0dHJpYnV0ZUJvZHkiLCJyZW1vdmVJdGVtcyIsIml0ZW1zSW5kaWNlcyIsIml0ZW1zVG9SZW5kZXIiLCJpbmRleCIsInNvcnQiLCJhIiwiYiIsIk51bWJlciIsInNwbGljZSIsInBzZXVkb0dyaWRJdGVtIiwicHNldWRvQm9keUl0ZW0iLCJyZW1vdmVDb21wbGV0ZUNhbGxiYWNrIiwiYWRkSXRlbXMiLCJob3dNYW55IiwiaXRlbVdpZHRoIiwiaXRlbUhlaWdodCIsInN0YXJ0aW5nWSIsInNjcm9sbFRvUG9zaXRpb24iLCJyZW1haW5pbmdXaWR0aCIsInN0YXJ0aW5nWCIsInNjcm9sbEhlaWdodCIsImFkZEl0ZW1zQXRQb3NpdGlvbnMiLCJhZGRDb21wbGV0ZUNhbGxiYWNrIiwiYWRkQXJyYXkiLCJzdGFydGluZ0luZGV4IiwibGlzdCIsInJlSW5pdGlhbGl6ZUV2ZW50cyIsImVuYWJsZUludGVyYWN0aXZlQWRkQW5kQ3V0IiwiZW5hYmxlVG91Y2hJbnRlcmFjdGlvbiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpbml0aWFsaXplSXRlbVRvdWNoRXZlbnRzIiwidW5Jbml0aWFsaXplSXRlbVRvdWNoRXZlbnRzIiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJyZXNpemVQbGFuZSIsImFsbEFmZmVjdGVkSXRlbXMiLCJmaW5kQWZmZWN0ZWRJdGVtc09uUmVzaXplIiwiZnJlZVNwYWNlcyIsImZpbmRGcmVlU3BhY2VzIiwiYWZmZWN0ZWRJdGVtcyIsImRvTm90TWVyZ2VGbGFnIiwibWVyZ2VkRnJlZVNwYWNlcyIsIm1lcmdlRnJlZVNwYWNlcyIsImFmZmVjdGVkSXRlbXNFeGNlcHRTZWxmT2JqZWN0cyIsImFmZmVjdGVkSXRlbXNFeGNlcHRTZWxmIiwiaW5kIiwiZml0RGV0YWlscyIsImZpdEl0ZW1zSW50b0ZyZWVTcGFjZXMiLCJmaXR0ZWRJdGVtcyIsInJlcG9zaXRpb25lZEl0ZW1zIiwibGVuZ3RoXzEiLCJmaXR0ZWRGbGFnIiwiaiIsImZpdFJlbWFpbmluZ0l0ZW1zIiwicmVtb3ZlIiwicmVzaXplUGxhbmVEZW1vIiwibW92ZVBsYW5lIiwidG9YIiwidG9ZIiwiZmluZEFmZmVjdGVkSXRlbXNPbk1vdmUiLCJtb3ZlUGxhbmVEZW1vIiwicmVzdWx0IiwiaXNQbGFuZUJJbnNpZGVQbGFuZUFfVG91Y2hpbmdJc0luc2lkZSIsImlzSW5zaWRlIiwiZnMiLCJzdWJ0cmFjdFBsYW5lcyIsIml0ZW1zTm90VG9NZXJnZSIsIm1lcmdlUGxhaW5zRnJlZVNwYWNlc0FuZEl0ZW1zTm90VG9NZXJnZSIsImNvbmNhdCIsImlzUGxhbmVJbnNpZGVTdGFjayIsInN0YWNrIiwicGxhbmUiLCJjb250ZXh0IiwiYXJlUGxhaW5zU2FtZSIsIm1lcmdlZFN0YWNrIiwiaXNQbGFuZUJJbnNpZGVQbGFuZUFfVG91Y2hpbmdOb3RJbnNpZGUiLCJtZXJnZWRQbGFuZSIsIm1lcmdlUGxhaW5zIiwibWVyZ2VTdGFja0l0ZW1XaXRoRnJlZVNwYWNlcyIsIm5ld1N0YWNrIiwicmVkdW5kYW50UGxhbmVzIiwiZmluYWxNZXJnZWRQbGFuZXMiLCJoYXNPd25Qcm9wZXJ0eSIsIkEiLCJCIiwicmVzdWx0VHlwZSIsIkFUb3BMZWZ0IiwiQVRvcFJpZ2h0IiwiQUJvdHRvbUxlZnQiLCJBQm90dG9tUmlnaHQiLCJBQ29vcmRpYW50ZXNBcnIiLCJCVG9wTGVmdCIsIkJUb3BSaWdodCIsIkJCb3R0b21MZWZ0IiwiQkJvdHRvbVJpZ2h0IiwiQkNvb3JkaW5hdGVzQXJyIiwiQlJlc3VsdEFyciIsIm92ZXJhbGxSZXN1bHQiLCJlbmd1bGZlZCIsImVuZ3VsZmVkQ2hlY2tDb3VudCIsIm92ZXJhbGwiLCJpbmRpdmlkdWFsIiwiZG9Ob3RNZXJnZUl0ZW1zIiwic29ydFBsYWluc0J5QXJlYSIsIm1hdGNoIiwiZmluZE1hdGNoaW5nU3BhY2UiLCJtYXRjaGluZ0l0ZW1JbmRleCIsIm1hdGNoaW5nRnJlZVNwYWNlSW5kZXgiLCJ0ZW1wSXRlbSIsInJlcG9zaXRpb25lZEl0ZW0iLCJvY2N1cGllZFNwYWNlIiwibmV3RnJlZVNwYWNlcyIsInBsYW5lRGlmZiIsIm5ld01lcmdlZEZyZWVTcGFjZXMiLCJyYW5kb21Qb3NzaWJpbGl0aWVzIiwicG9zc2liaWxpdGllc1dpZHRoIiwicG9zc2liaWxpdGllc0hlaWdodCIsImZyZWVTcGFjZVdpZHRoIiwiZnJlZVNwYWNlSGVpZ2h0IiwiYXJlUGxhaW5zSWRlbnRpY2FsIiwiTWF0aCIsImZsb29yIiwiZ3JlYXRlc3RXaWR0aERpZmYiLCJncmVhdGVzdFdpZHRoRGlmZkluZGV4IiwibWluWVBvc3NpYmlsaXRpZXNXaWR0aCIsIm1pbllQb3NzaWJpbGl0aWVzV2lkdGhJbmRleCIsImdyZWF0ZXN0SGVpZ2h0RGlmZiIsImdyZWF0ZXN0SGVpZ2h0RGlmZkluZGV4IiwibWluWVBvc3NpYmlsaXRpZXNIZWlnaHQiLCJtaW5ZUG9zc2liaWxpdGllc0hlaWdodEluZGV4IiwiayIsImZsb29yZWRRdW90aWVudCIsInF1b3RpZW50IiwiZGlmZiIsImNoYW5nZWRJbmRleCIsInByZXZpb3VzRml0RGV0YWlscyIsImFmZmVjdGVkSXRlbXNPYmplY3QiLCJhZmZlY3RlZEl0ZW1zT2JqZWN0RGVwdGhEZXNjT3JkZXIiLCJzb3J0UGxhaW5zQnlEZXB0aCIsImdyZWF0ZXN0RGVwdGhBZmZlY3RlZEl0ZW1zIiwicmVtYWluaW5nSXRlbXNJbmRpY2VzTWFwIiwiaXRlbXNBYm92ZUdyZWF0ZXN0RGVwdGgiLCJyZWNhbGN1bGF0ZWRHcmVhdGVzdERlcHRoQWZmZWN0ZWRJdGVtc0FuZE5vbkFmZmVjdGVkSXRlbXNDYXNlR3JlYXRlciIsInJlY2FsY3VsYXRlZEdyZWF0ZXN0RGVwdGhBZmZlY3RlZEl0ZW1zQW5kTm9uQWZmZWN0ZWRJdGVtc0Nhc2VMZXNzZXIiLCJncmVhdGVzdERlcHRoT2ZBZmZlY3RlZEFyZWEiLCJpdGVtc1RvU2hpZnREYXRhIiwiZ2V0SXRlbXNGcm9tUG9pbnREZXB0aCIsIml0ZW1zVG9TaGlmdCIsIml0ZW1zRnJvbVBvaW50RGVwdGgiLCJpbml0aWFsRml0RGF0YSIsImZpdFJlbWFpbmluZ0l0ZW1zQWJvdmVEZWVwZXN0TGluZSIsImZpbmFsRml0RGF0YSIsImZpbmFsUG9zaXRpb25EYXRhIiwic2hpdGZ0SXRlbXNCZWxvdyIsImRlZXBlc3RZIiwic2hpZnRIZWlnaHRUb0FkZCIsImRlZXBQb2ludCIsImxpbmVQbGFuZSIsInJlbWFpbmluZ0l0ZW1zTWFwIiwib2JqIiwicmVtYWluaW5nRnJlZVNwYWNlcyIsInJlbWFpbmluZ0l0ZW1zT2JqZWN0IiwiZml0dGVkUmVtYWluaW5nSXRlbXMiLCJ0ZW1wIiwiT2JqZWN0Iiwia2V5cyIsInJlbWFpbmluZ0l0ZW1zQmFja3VwIiwic29ydFBsYWluc0J5SGVpZ2h0IiwiaW5pdGlhbGl6ZWRQbGFuZSIsImZyZWVTcGFjZXNJbkN1cnJlbnRSb3ciLCJvY2N1cGllZFNwYWNlc0luQ3VycmVudFJvdyIsImZyZWVTcGFjZSIsImlzVmFsaWRQbGFuZSIsIm5leHRJbml0aWFsaXplUGxhbmUiLCJpbmNsdWRlUGxhbmVBYm92ZUFuZEJlbG93UG9pbnREZXB0aCIsInNoaWZ0SGVpZ2h0IiwiaW5kaWNlc1RvU2hpZnQiLCJzaGlmdEl0ZW1zVXAiLCJwbGFuZXMiLCJhTGluZXMiLCJnZXRMaW5lcyIsImJMaW5lcyIsIm9wcG9zaXRlTGluZXMiLCJpbnRlcnNlY3Rpb25Db3VudCIsImludGVyc2VjdGlvblBvaW50c0F0b0IiLCJsaW5lUG9pbnRzQSIsImludGVyc2VjdGlvblBvaW50c0J0b0EiLCJsaW5lUG9pbnRzQiIsImRpc3RhbmNlIiwiYUxpbmVJZCIsImJMaW5lSWQiLCJhTGluZSIsImJMaW5lIiwibTEiLCJtMiIsInAxIiwicDIiLCJwMyIsImFscGhhIiwiZCIsImFicyIsIndhcm4iLCJhT3BwTGluZSIsImJPcHBMaW5lIiwiY2hhbmdlWSIsImNoYW5nZVgiLCJwb2ludHNUb0dldFBsYWluIiwicGxhaW5Ub0NoZWNrSWZGcmVlIiwiZ2V0UGxhaW5Gcm9tNFBvaW50cyIsImR1cGxpY2F0ZUNoZWNrIiwiZmluYWxQb2ludHNUb0dldFBsYWluIiwicGxhaW5Ub0NoZWNrSWZGcmVlX0xpbmVzIiwicGxhbmVBT25Ub3BPZkIiLCJwbGFpblRvQ2hlY2tJZkZyZWVfRGl2aWRlckxpbmUiLCJwbGFuZUFPbkxlZnRPZkIiLCJmcmVlRGlzdGFuY2UiLCJpbmRleE9mSW50ZXJzZWN0aW5nUGxhbmUiLCJwbGFuZUxpbmUiLCJtYWtlRmluYWxGcmVlU3BhY2UiLCJwb2ludHNUb0dldE1lcmdlZFBsYWluIiwiZmluYWxQb2ludHNUb0dldE1lcmdlZFBsYWluIiwiZXZlbnQiLCJzZXRUaW1lb3V0IiwidGFyZ2V0IiwiY29udGFpbnMiLCJzdG9wUHJvcGFnYXRpb24iLCJ3aGljaCIsImxpbWJlckdyaWRNb3VzZURvd25DYW5jZWwiLCJsaW1iZXJHcmlkTW91c2VEb3duVGltZXJDb21wbGV0ZSIsImNsZWFyVGltZW91dCIsIm9uTGltYmVyR3JpZE1vdXNlRG93bkNoZWNrIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJsaW1iZXJHcmlkVG91Y2hTdGFydENhbmNlbCIsImxpbWJlckdyaWRUb3VjaFN0YXJ0VGltZXJDb21wbGV0ZSIsIm9uTGltYmVyR3JpZFRvdWNoU3RhcnRDaGVjayIsInNjcm9sbExlZnQiLCJ1c2VyQWN0aW9uRGF0YSIsInR5cGUiLCJhZGRQb3NpdGlvblgiLCJhZGRQb3NpdGlvblkiLCJ0b3VjaFBvc2l0aW9uT25MaW1iZXJHcmlkIiwiY2FsY3VsYXRlVG91Y2hQb3NPbkxpbWJlckdyaWQiLCJyZW1vdmVBZGRJdGVtT25Ub3VjaEhvbGRHdWlkZUZ1bmN0aW9uIiwiaW5zZXJ0QWRkSXRlbU9uVG91Y2hIb2xkR3VpZGVTdHlsZXMiLCJwcmV2ZW50RGVmYXVsdCIsIm5ld1dpZHRoIiwibmV3SGVpZ2h0IiwieU1vdXNlUG9zaXRpb24iLCJhZGp1c3RIZWlnaHQiLCJhZGRJdGVtQWxsb3dDaGVja1RpbWVPdXRWYXJpYWJsZSIsImFkZEl0ZW1BbGxvd0NoZWNrVGltZU91dCIsImN1dFNwYWNlQWxsb3dDaGVja1RpbWVPdXRWYXJpYWJsZSIsImN1dFNwYWNlQWxsb3dDaGVja1RpbWVPdXQiLCJsaW1iZXJHcmlkVmlld0JvdW5kaW5nQ2xpZW50UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxpbWJlckdyaWRWaWV3V2lkdGhWaXNpYmxlV2lkdGgiLCJvZmZzZXRXaWR0aCIsImxlZnQiLCJsaW1iZXJHcmlkVmlld0hlaWdodFZpc2libGVIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJ0b3AiLCJsaW1iZXJHcmlkVmlld09uVmlzaWJsZUFyZWFYIiwibGltYmVyR3JpZFZpZXdPblZpc2libGVBcmVhWSIsInlUb3VjaFBvc2l0aW9uIiwicHJvZ3JhbVNjcm9sbGVkIiwiYWRqdXN0U2Nyb2xsIiwiaXRlbUFkZGVkRmxhZyIsImFkZEl0ZW1BbGxvd0NoZWNrIiwiY3V0U3BhY2VBbGxvd0NoZWNrIiwidGVtcFBsYW5lIiwiaXRlckl0ZW0iLCJyaXBwbGUiLCJyaXBwbGVTdHJpbmciLCJyYWRpdXMiLCJzcXJ0IiwicG93IiwicmVzaXplVUlCb3giLCJjdXJyZW50VGFyZ2V0IiwiaXRlbUluZGV4IiwiYXR0cmlidXRlcyIsIm1vdXNlRG93bkNhbmNlbCIsIm1vdXNlRG93blRpbWVyQ29tcGxldGUiLCJsb25nUHJlc3NDaGVjayIsIm1vdXNlRG93bkNoZWNrIiwidHJhbnNmb3JtU3R5bGUiLCJpMSIsImkyIiwiaXRlbVBvc2l0aW9uWCIsIml0ZW1Qb3NpdGlvblkiLCJ0b3VjaGVzIiwidG91Y2hQb3NPbkxpbWJlckdyaWRJdGVtIiwiY2FsY3VsYXRlVG91Y2hQb3NPbkxpbWJlckdyaWRJdGVtIiwidGFwSG9sZENhbmNlbCIsInRhcEhvbGRUaW1lckNvbXBsZXRlIiwibG9uZ1RvdWNoQ2hlY2siLCJ0YXBIb2xkQ2hlY2siLCJwYWdlWCIsInBhZ2VZIiwibW91c2VQb3NpdGlvbk9uTGltYmVyR3JpZCIsImNhbGN1bGF0ZU1vdXNlUG9zT25MaW1iZXJHcmlkIiwic2hvd01vdmVEZW1vVGltZU91dFZhcmlhYmxlIiwic2hvd01vdmVEZW1vIiwic2hvd1Jlc2l6ZURlbW9UaW1lT3V0VmFyaWFibGUiLCJzaG93UmVzaXplRGVtbyIsIml0ZW1SZXNpemVGbGFnIiwiaXRlbU1vdmVGbGFnIiwibmV3TW92ZUNvb3JkaW5hdGVzIiwiY2hlY2tOZXdNb3ZlQ29vcmRpbmF0ZXMiLCJ1cGRhdGVkQ29vcmRpbmF0ZXMiLCJyZXZpc2VkQ29vcmRpbmF0ZXMiLCJyZXZlcnRTaG93TW92ZU9yUmVzaXplRGVtbyIsIm1vdmVDb21wbGV0ZUNhbGxiYWNrIiwicmVzaXplQ29tcGxldGVDYWxsYmFjayIsImxpbWJlckdyaWRWaWV3UG9zaXRpb24iLCJjbGllbnRYIiwiY2xpZW50WSIsIm1vdXNlWE9uTGltYmVyR3JpZFZpZXciLCJtb3VzZVlPbkxpbWJlckdyaWRWaWV3IiwidG91Y2giLCJjaGFuZ2VkVG91Y2hlcyIsInRvdWNoWE9uTGltYmVyR3JpZFZpZXciLCJ0b3VjaFlPbkxpbWJlckdyaWRWaWV3IiwibGltYmVyR3JpZFZpZXdJdGVtUG9zaXRpb24iLCJpbmRleE9mTW92ZWRJdGVtIiwibW91c2VQb3NpdGlvbnMiLCJ3aWR0aE9mTW92ZWRJdGVtIiwiaGVpZ2h0T2ZNb3ZlZEl0ZW0iLCJpbmRleE9mT3ZlcmxhcHBpbmdJdGVtIiwiaXRlbVRvcExlZnQiLCJpdGVtVG9wUmlnaHQiLCJpdGVtQm90dG9tTGVmdCIsIml0ZW1Cb3R0b21SaWdodCIsImxpbmVzIiwidG9wTGluZSIsInJpZ2h0TGluZSIsImJvdHRvbUxpbmUiLCJsZWZ0TGluZSIsIm1vdXNlUG9zaXRpb24iLCJ5TW91c2VPclRvdWNoUG9zaXRpb24iLCJwb2ludHNBcnJheSIsIm1pblgiLCJtaW5ZIiwibWF4WCIsIm1heFkiLCJnZXRDb29yZGluYXRlcyIsIml0ZW1Db29yZGluYXRlc0FyciIsImFsbExpbmVzIiwib3JkZXIiLCJkaXZpZGVFcXVhbE51bWJlciIsIkRFRkFVTFQiLCJyZXMiLCJOYU4iLCJzZXJpYWxpemUiLCJyb3dzIiwicm93c0FyciIsImNvbHVtbnMiLCJyb3dPcmRlciIsImFyciIsImNvdW50Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQSxPQUFPLEtBQVUsRUFBRSxr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QU8sQ0FBQzdiLENBQUQsQ0FBUixDQUFKLENBQWlCekIsTUFBaEM7O0FBQ0EsYUFBSyxJQUFJdUssQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0YsUUFBcEIsRUFBOEJFLENBQUMsRUFBL0IsRUFBbUM7QUFDbENrVCxhQUFHLENBQUMvYixJQUFKLENBQVMyYixJQUFJLENBQUNDLE9BQU8sQ0FBQzdiLENBQUQsQ0FBUixDQUFKLENBQWlCOEksQ0FBakIsQ0FBVDtBQUNBMUYsYUFBRyxDQUFDd1ksSUFBSSxDQUFDQyxPQUFPLENBQUM3YixDQUFELENBQVIsQ0FBSixDQUFpQjhJLENBQWpCLENBQUQsQ0FBSCxHQUEyQm1ULEtBQUssRUFBaEM7QUFDQTtBQUNEOztBQUVELGFBQU87QUFBRTlVLFlBQUksRUFBRTZVLEdBQVI7QUFBYTVZLFdBQUcsRUFBRUE7QUFBbEIsT0FBUDtBQUNBO0FBQ0QsR0FoREQsQ0F4dE1tQyxDQTB3TW5DO0FBRUE7QUFFQTtBQUVBO0FBRUE7OztBQUVBLFNBQU90SyxjQUFQO0FBQ0EsQ0FyeE11QixFQUF4Qjs7QUF1eE1lRCxxRUFBTSxDQUFDQyxjQUF0QixFOzs7Ozs7Ozs7OztBQ3B6TUE7QUFDQSxPQUFPLEtBQVUsRUFBRSxrQkFLZCIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcImFzc2V0c1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE1ODQ2NDA0NjgyNjlcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiL2hvbWUvYXJzZW5hbGZjLzBfc3R1ZmYvMF93b3JrL2RldmVsb3BtZW50L0xpbWJlckdyaWRWaWV3L25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImhtclwiOnRydWUsXCJyZWxvYWRBbGxcIjp0cnVlLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIiwiLypcblxuVGhpcyBpcyBhIHJlbGVhc2Ugb2YgTGltYmVyR3JpZFZpZXcgMC4wLjAsIGJyb3VnaHQgdG8geW91IGJ5IFN1YmVuZHJhIEt1bWFyIFNoYXJtYS5cblRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMywgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cblxuTGltYmVyR3JpZFZpZXcsIGEgcG93ZXJmdWwgSmF2YVNjcmlwdCBMaWJhcnkgdGhhdCBnaXZlcyB5b3UgZmxleGlibGUsIG1vdmFibGUsIHJlc2l6YWJsZShhbnkgc2l6ZSkgYW5kIGF1dG8tYXJyYW5naW5nIGdyaWRzLiBcblxuQ29weXJpZ2h0IChjKSAyMDE4LCBTdWJlbmRyYSBLdW1hciBTaGFybWEuIEFsbCBSaWdodHMgcmVzZXJ2ZWQuIChzaGFybWEuc3ViZW5kcmEua3JAZ21haWwuY29tLCBzaGFybWEuc3ViZW5kcmFrckB5YWhvby5jb20pXG5cblRoaXMgZmlsZSBpcyBwYXJ0IG9mIExpbWJlckdyaWRWaWV3LlxuXG5MaW1iZXJHcmlkVmlldyBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG5pdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxudGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbihhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG5cbkxpbWJlckdyaWRWaWV3IGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG5idXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cblxuWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbmFsb25nIHdpdGggTGltYmVyR3JpZFZpZXcuICBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuXG4qL1xuXG5pbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuaW1wb3J0IFwiLi9pbmRleC5zY3NzXCI7XG5cbndpbmRvdy5MaW1iZXJHcmlkVmlldyA9IChmdW5jdGlvbigpIHtcblx0TGltYmVyR3JpZFZpZXcucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTGltYmVyR3JpZFZpZXc7XG5cblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIElOUFVUIERBVEEgRk9STUFUIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cblx0Lypcblx0XG5cdHByb2Nlc3NUeXBlcyA6IHJlbmRlciwgYWRkSXRlbXMsIGFkZEl0ZW1JbnRlcmFjdGl2ZSwgcmVtb3ZlSXRlbXMsIHJlc2l6ZUl0ZW1zLCBvbkRlbWFuZChkZWZhdWx0IGZvciBpbnZva2VkKSwgPGN1c3RvbT4gKGZvciBpbnZva2VkKVxuXG5cdHZhciBvcHRpb25zID0ge1xuXHRcdGVsIDogXCIjXCIsXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGlkIG9mIHRoZSBwYXJlbnQgZWxlbWVudCB3aXRoICNcblx0XHRlZGl0YWJsZSA6IHRydWUsIFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIHRydWUvZmFsc2UgKG9wdGlvbmFsIGRlZmF1bHQgdHJ1ZSkgIFxuXHRcdGVuYWJsZUludGVyYWN0aXZlQWRkQW5kQ3V0IDogdHJ1ZSxcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gdHJ1ZS9mYWxzZSAob3B0aW9uYWwgZGVmYXVsdCB0cnVlKSAgXG5cdFx0ZW5hYmxlVG91Y2hJbnRlcmFjdGlvbiA6IHRydWUsXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gdHJ1ZS9mYWxzZSAob3B0aW9uYWwgZGVmYXVsdCB0cnVlKSAgXG5cdFx0ZGF0YVR5cGUgOiBcInN0cmluZ1wiLCBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gc3RyaW5nL25vZGVcblx0XHRhdXRvQXJyYW5nZSA6IHRydWUsXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gdHJ1ZS9mYWxzZSAoY29tcHVsc29yeSBpZiB4IGFuZCB5IG5vdCBwcmVzZW50IGVsc2Ugb3B0aW9uYWwpXG5cdFx0cmVSZW5kZXJPblJlc2l6ZSA6IHRydWUsIFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gdHJ1ZS9mYWxzZSAob3B0aW9uYWwgZGVmYXVsdCB0cnVlKSAgXG5cdFx0aW5pdGlhbEdyaWREYXRhIDoge1xuXHRcdFx0Z3JpZEhlaWdodCA6IDYyNCwgXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGhlaWdodCBvZiBsaW1iZXJHcmlkVmlld1xuXHRcdFx0Z3JpZFdpZHRoIDogOTg1LFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyB3aWR0aCBvZiBsaW1iZXJHcmlkVmlld1xuXHRcdFx0bWFyZ2luIDogNSwgXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gbWFyZ2luIGZvciBpdGVtc1xuXHRcdFx0bW9iaWxlQXNwZWN0UmF0aW8gOiA8dmFsdWU+LCBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gYXNwZWN0IHJhdGlvIG9mIGZvciBtb2JpbGUgZGV2aWNlc1xuXHRcdFx0aW5pdGlhbFBvc2l0aW9uRGF0YSA6IFtcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIHBvc2l0aW9uIERhdGFcblx0XHRcdFx0e3ggOiA8dmFsdWU+LCB5IDogPHZhbHVlPiwgd2lkdGggOiA8dmFsdWU+LCBoZWlnaHQgOiA8dmFsdWU+fSxcblx0XHRcdFx0e3ggOiA8dmFsdWU+LCB5IDogPHZhbHVlPiwgd2lkdGggOiA8dmFsdWU+LCBoZWlnaHQgOiA8dmFsdWU+fSxcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRPUiAoaWYgYXV0b0FycmFuZ2Ugc2V0IHRvIHRydWUpXG5cblx0XHRcdFx0e3dpZHRoIDogPHZhbHVlPiwgaGVpZ2h0IDogPHZhbHVlPn0sXG5cdFx0XHRcdHt3aWR0aCA6IDx2YWx1ZT4sIGhlaWdodCA6IDx2YWx1ZT59LFxuXHRcdFx0XHQuLi4sXG5cdFx0XHRcdC4uLixcblx0XHRcdFx0Li4uXG5cdFx0XHRdXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XG5cdFx0fSxcblx0XHRjYWxsYmFja3MgOiB7XG5cdFx0XHRnZXRJdGVtUmVuZGVyRGF0YUNhbGxiYWNrIDogZnVuY3Rpb24oaW5kZXgsIHdpZHRoLCBoZWlnaHQsIHByb2Nlc3NUeXBlKXt9LCBcdFx0XHQvLyBjYWxsYmFjayB0byBnZXQgc3RyaW5nIG9yIG5vZGUgb2JqZWN0IHRvIHJlbmRlciBpbnNpZGUgdGhlIGl0ZW1cdFxuXHRcdFx0b25JdGVtQ2xpY2tDYWxsYmFjayA6IGZ1bmN0aW9uKGV2ZW50KXt9LFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBjbGljayBjYWxsYmFjayBmb3IgaXRlbVxuXHRcdFx0cmVuZGVyQ29tcGxldGUgOiBmdW5jdGlvbigpe30sIFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBjYWxsYmFjayBmb3IgY29tcGxldGlvbiBvZiByZW5kZXIgZnVuY3Rpb25cblx0XHRcdGl0ZW1zUmVuZGVyQ29tcGxldGUgOiBmdW5jdGlvbihbaW5kZXgsIGluZGV4LCAuLi5dLCBzY2FsZSwgcHJvY2Vzc1R5cGUpe30sIFx0XHRcdC8vIGNhbGxiYWNrIGZvciBjb21wbGV0aW9uIG9mIHJlbmRlckl0ZW1zIGZ1bmN0aW9uXG5cdFx0XHRyZXNpemVDb21wbGV0ZUNhbGxiYWNrIDogZnVuY3Rpb24oaW5kZXgsIHt4LCB5LCB3aWR0aCwgaGVpZ2h0fSl7fSwgXHRcdFx0XHRcdC8vIGNhbGxiYWNrIGZvciBjb21wbGV0aW9uIG9mIHJlc2l6aW5nIGFuIGl0ZW1cblx0XHRcdG1vdmVDb21wbGV0ZUNhbGxiYWNrIDogZnVuY3Rpb24oc3RhdHVzLCBpbmRleCwge3gsIHksIHdpZHRoLCBoZWlnaHR9IG9yIGV2ZW50KXt9LCBcdFx0XHRcdFx0Ly8gY2FsbGJhY2sgZm9yIGNvbXBsZXRpb24gb2YgbW92aW5nIGFuIGl0ZW1cblx0XHRcdGFkZENvbXBsZXRlQ2FsbGJhY2sgOiBmdW5jdGlvbihbaW5kZXgsIGluZGV4LCAuLi5dLCB3aWR0aCwgaGVpZ2h0LCBwcm9jZXNzVHlwZSl7fSwgXHQvLyBjYWxsYmFjayBmb3IgY29tcGxldGlvbiBvZiBhZGRpbmcgYW4gaXRlbVxuXHRcdFx0cmVtb3ZlQ29tcGxldGVDYWxsYmFjayA6IGZ1bmN0aW9uKFtpbmRleCwgaW5kZXgsIC4uLl0pe30sIFx0XHRcdFx0XHRcdFx0Ly8gY2FsbGJhY2sgZm9yIGNvbXBsZXRpb24gb2YgcmVtb3ZpbmcgYW4gaXRlbVxuXHRcdH1cblx0fVxuXHQqL1xuXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBJTlBVVCBEQVRBIEZPUk1BVCBFTkQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBDT05TVEFOVFMgWU9VIENBTiBDSEFOR0UgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5cdExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5NT1ZFX0dVSURFX1JBRElVUyA9IDEwO1xuXHRMaW1iZXJHcmlkVmlldy5wcm90b3R5cGUuUkVTSVpFX1NRVUFSRV9HVUlERV9MRU5HVEggPSAxMDtcblx0TGltYmVyR3JpZFZpZXcucHJvdG90eXBlLlJFU0laRV9TUVVBUkVfQk9SREVSX0dVSURFX1dJRFRIID0gMztcblx0TGltYmVyR3JpZFZpZXcucHJvdG90eXBlLkFVVE9fU0NST0xMX0RJU1RBTkNFID0gNTA7XG5cdExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5BVVRPX1NDUk9MTF9QT0lOVCA9IDUwO1xuXHRMaW1iZXJHcmlkVmlldy5wcm90b3R5cGUuTU9WRV9PUl9SRVNJWkVfSEVJR0hUX0lOQ1JFTUVOVFMgPSA1MDtcblxuXHRMaW1iZXJHcmlkVmlldy5wcm90b3R5cGUuTU9VU0VfRE9XTl9USU1FID0gNTAwO1xuXHRMaW1iZXJHcmlkVmlldy5wcm90b3R5cGUuVE9VQ0hfSE9MRF9USU1FID0gMzAwO1xuXHRMaW1iZXJHcmlkVmlldy5wcm90b3R5cGUuREVNT19XQUlUX1RJTUUgPSA1MDA7XG5cdExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5XSU5ET1dfUkVTSVpFX1dBSVRfVElNRSA9IDEwMDA7XG5cdExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5NQVJHSU4gPSA1O1xuXG5cdExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5NT0JJTEVfQVNQRUNUX1JBVElPID0gMTYgLyA5O1xuXG5cdExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5BRERfT1JfQ1VUU1BBQ0VfVE9HR0xFID0gXCJBRERcIjtcblxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gQ09OU1RBTlRTIFlPVSBDQU4gQ0hBTkdFIEVORCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXHRmdW5jdGlvbiBMaW1iZXJHcmlkVmlldyhvcHRpb25zKSB7XG5cdFx0dGhpcy5vcHRpb25zID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvcHRpb25zKSk7XG5cdFx0dGhpcy5jYWxsYmFja3MgPSBvcHRpb25zLmNhbGxiYWNrcztcblxuXHRcdHRoaXMuaW5pdGlhbEdyaWREYXRhID0gdGhpcy5vcHRpb25zLmluaXRpYWxHcmlkRGF0YTtcblx0XHR0aGlzLmluaXRpYWxQb3NpdGlvbkRhdGEgPSB0aGlzLm9wdGlvbnMuaW5pdGlhbEdyaWREYXRhLmluaXRpYWxQb3NpdGlvbkRhdGE7XG5cdFx0dGhpcy5wb3NpdGlvbkRhdGEgPSBKU09OLnBhcnNlKFxuXHRcdFx0SlNPTi5zdHJpbmdpZnkodGhpcy5pbml0aWFsUG9zaXRpb25EYXRhKVxuXHRcdCk7XG5cblx0XHRpZiAoXG5cdFx0XHR0aGlzLm9wdGlvbnMuaW5pdGlhbEdyaWREYXRhLm1vYmlsZUFzcGVjdFJhdGlvICE9IHVuZGVmaW5lZCAmJlxuXHRcdFx0dGhpcy5vcHRpb25zLmluaXRpYWxHcmlkRGF0YS5tb2JpbGVBc3BlY3RSYXRpbyAhPSBudWxsXG5cdFx0KSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdHR5cGVvZiB0aGlzLm9wdGlvbnMuaW5pdGlhbEdyaWREYXRhLm1vYmlsZUFzcGVjdFJhdGlvID09XG5cdFx0XHRcdFwibnVtYmVyXCJcblx0XHRcdCkge1xuXHRcdFx0XHR0aGlzLk1PQklMRV9BU1BFQ1RfUkFUSU8gPSB0aGlzLm9wdGlvbnMuaW5pdGlhbEdyaWREYXRhLm1vYmlsZUFzcGVjdFJhdGlvO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICh0aGlzLm9wdGlvbnMuZWRpdGFibGUgPT0gdHJ1ZSkge1xuXHRcdFx0dGhpcy5vbkxpbWJlckdyaWRNb3VzZURvd25GdW5jdGlvblZhcmlhYmxlID0gdGhpcy5vbkxpbWJlckdyaWRNb3VzZURvd24uYmluZChcblx0XHRcdFx0dGhpc1xuXHRcdFx0KTtcblx0XHRcdHRoaXMub25MaW1iZXJHcmlkTW91c2VNb3ZlQmluZGVkRnVuY3Rpb25WYXJpYWJsZSA9IHRoaXMub25MaW1iZXJHcmlkTW91c2VNb3ZlLmJpbmQoXG5cdFx0XHRcdHRoaXNcblx0XHRcdCk7XG5cdFx0XHR0aGlzLm9uTGltYmVyR3JpZE1vdXNlVXBCaW5kZWRGdW5jdGlvblZhcmlhYmxlID0gdGhpcy5vbkxpbWJlckdyaWRNb3VzZVVwLmJpbmQoXG5cdFx0XHRcdHRoaXNcblx0XHRcdCk7XG5cdFx0XHR0aGlzLm9uTGltYmVyR3JpZENvbnRleHRNZW51QmluZGVkRnVuY3Rpb25WYXJpYWJsZSA9IHRoaXMub25MaW1iZXJHcmlkQ29udGV4dE1lbnUuYmluZChcblx0XHRcdFx0dGhpc1xuXHRcdFx0KTtcblxuXHRcdFx0dGhpcy5vbkxpbWJlckdyaWRUb3VjaFN0YXJ0RnVuY3Rpb25WYXJpYWJsZSA9IHRoaXMub25MaW1iZXJHcmlkVG91Y2hTdGFydC5iaW5kKFxuXHRcdFx0XHR0aGlzXG5cdFx0XHQpO1xuXHRcdFx0dGhpcy5vbkxpbWJlckdyaWRUb3VjaE1vdmVCaW5kZWRGdW5jdGlvblZhcmlhYmxlID0gdGhpcy5vbkxpbWJlckdyaWRUb3VjaE1vdmUuYmluZChcblx0XHRcdFx0dGhpc1xuXHRcdFx0KTtcblx0XHRcdHRoaXMub25MaW1iZXJHcmlkVG91Y2hFbmRCaW5kZWRGdW5jdGlvblZhcmlhYmxlID0gdGhpcy5vbkxpbWJlckdyaWRUb3VjaEVuZC5iaW5kKFxuXHRcdFx0XHR0aGlzXG5cdFx0XHQpO1xuXHRcdFx0dGhpcy5vbkxpbWJlckdyaWRUb3VjaENhbmNlbEJpbmRlZEZ1bmN0aW9uVmFyaWFibGUgPSB0aGlzLm9uTGltYmVyR3JpZFRvdWNoQ2FuY2VsLmJpbmQoXG5cdFx0XHRcdHRoaXNcblx0XHRcdCk7XG5cdFx0XHR0aGlzLm9uTGltYmVyR3JpZFRvdWNoQ29udGV4dE1lbnVCaW5kZWRGdW5jdGlvblZhcmlhYmxlID0gdGhpcy5vbkxpbWJlckdyaWRUb3VjaENvbnRleHRNZW51LmJpbmQoXG5cdFx0XHRcdHRoaXNcblx0XHRcdCk7XG5cblx0XHRcdHRoaXMub25JdGVtTW91c2VEb3duRnVuY3Rpb25WYXJpYWJsZSA9IHRoaXMub25JdGVtTW91c2VEb3duLmJpbmQoXG5cdFx0XHRcdHRoaXNcblx0XHRcdCk7XG5cdFx0XHR0aGlzLm9uTW91c2VNb3ZlQmluZGVkRnVuY3Rpb25WYXJpYWJsZSA9IHRoaXMub25Nb3VzZU1vdmUuYmluZChcblx0XHRcdFx0dGhpc1xuXHRcdFx0KTtcblx0XHRcdHRoaXMub25Nb3VzZVVwQmluZGVkRnVuY3Rpb25WYXJpYWJsZSA9IHRoaXMub25Nb3VzZVVwLmJpbmQodGhpcyk7XG5cdFx0XHR0aGlzLm9uQ29udGV4dE1lbnVCaW5kZWRGdW5jdGlvblZhcmlhYmxlID0gdGhpcy5vbkNvbnRleHRNZW51LmJpbmQoXG5cdFx0XHRcdHRoaXNcblx0XHRcdCk7XG5cblx0XHRcdHRoaXMub25JdGVtVG91Y2hTdGFydEZ1bmN0aW9uVmFyaWFibGUgPSB0aGlzLm9uSXRlbVRvdWNoU3RhcnQuYmluZChcblx0XHRcdFx0dGhpc1xuXHRcdFx0KTtcblx0XHRcdHRoaXMub25Ub3VjaE1vdmVCaW5kZWRGdW5jdGlvblZhcmlhYmxlID0gdGhpcy5vblRvdWNoTW92ZS5iaW5kKFxuXHRcdFx0XHR0aGlzXG5cdFx0XHQpO1xuXHRcdFx0dGhpcy5vblRvdWNoRW5kQmluZGVkRnVuY3Rpb25WYXJpYWJsZSA9IHRoaXMub25Ub3VjaEVuZC5iaW5kKHRoaXMpO1xuXHRcdFx0dGhpcy5vblRvdWNoQ2FuY2VsQmluZGVkRnVuY3Rpb25WYXJpYWJsZSA9IHRoaXMub25Ub3VjaENhbmNlbC5iaW5kKFxuXHRcdFx0XHR0aGlzXG5cdFx0XHQpO1xuXHRcdFx0dGhpcy5vbkl0ZW1Ub3VjaENvbnRleHRNZW51QmluZGVkRnVuY3Rpb25WYXJpYWJsZSA9IHRoaXMub25JdGVtVG91Y2hDb250ZXh0TWVudS5iaW5kKFxuXHRcdFx0XHR0aGlzXG5cdFx0XHQpO1xuXG5cdFx0XHR0aGlzLmxpbWJlckdyaWRNb3VzZURvd25DaGVja1RpbWVPdXRWYXJpYWJsZSA9IG51bGw7XG5cdFx0XHR0aGlzLmxpbWJlckdyaWRUb3VjaFN0YXJ0Q2hlY2tUaW1lT3V0VmFyaWFibGUgPSBudWxsO1xuXG5cdFx0XHRpZiAoXG5cdFx0XHRcdHRoaXMub3B0aW9ucy5tb3ZlR3VpZGVSYWRpdXMgIT0gdW5kZWZpbmVkICYmXG5cdFx0XHRcdHRoaXMub3B0aW9ucy5tb3ZlR3VpZGVSYWRpdXMgIT0gbnVsbFxuXHRcdFx0KSB7XG5cdFx0XHRcdGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLm1vdmVHdWlkZVJhZGl1cyA9PSBcIm51bWJlclwiKSB7XG5cdFx0XHRcdFx0dGhpcy5NT1ZFX0dVSURFX1JBRElVUyA9IHRoaXMub3B0aW9ucy5tb3ZlR3VpZGVSYWRpdXM7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKFxuXHRcdFx0XHR0aGlzLm9wdGlvbnMucmVzaXplU3F1YXJlR3VpZGVMZW5ndGggIT0gdW5kZWZpbmVkICYmXG5cdFx0XHRcdHRoaXMub3B0aW9ucy5yZXNpemVTcXVhcmVHdWlkZUxlbmd0aCAhPSBudWxsXG5cdFx0XHQpIHtcblx0XHRcdFx0aWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMucmVzaXplU3F1YXJlR3VpZGVMZW5ndGggPT0gXCJudW1iZXJcIikge1xuXHRcdFx0XHRcdHRoaXMuUkVTSVpFX1NRVUFSRV9HVUlERV9MRU5HVEggPSB0aGlzLm9wdGlvbnMucmVzaXplU3F1YXJlR3VpZGVMZW5ndGg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKFxuXHRcdFx0XHR0aGlzLm9wdGlvbnMucmVzaXplU3F1YXJlQm9yZGVyR3VpZGVXaWR0aCAhPSB1bmRlZmluZWQgJiZcblx0XHRcdFx0dGhpcy5vcHRpb25zLnJlc2l6ZVNxdWFyZUJvcmRlckd1aWRlV2lkdGggIT0gbnVsbFxuXHRcdFx0KSB7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHR0eXBlb2YgdGhpcy5vcHRpb25zLnJlc2l6ZVNxdWFyZUJvcmRlckd1aWRlV2lkdGggPT0gXCJudW1iZXJcIlxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHR0aGlzLlJFU0laRV9TUVVBUkVfQk9SREVSX0dVSURFX1dJRFRIID0gdGhpcy5vcHRpb25zLnJlc2l6ZVNxdWFyZUJvcmRlckd1aWRlV2lkdGg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoXG5cdFx0XHR0aGlzLmNhbGxiYWNrcy5vbkl0ZW1DbGlja0NhbGxiYWNrICE9IHVuZGVmaW5lZCAmJlxuXHRcdFx0dGhpcy5jYWxsYmFja3Mub25JdGVtQ2xpY2tDYWxsYmFjayAhPSBudWxsXG5cdFx0KSB7XG5cdFx0XHR0aGlzLm9uSXRlbUNsaWNrRnVuY3Rpb25WYXJpYWJsZSA9IHRoaXMub25JdGVtQ2xpY2suYmluZCh0aGlzKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5vcHRpb25zLnJlUmVuZGVyT25SZXNpemUgIT0gZmFsc2UpIHtcblx0XHRcdHRoaXMub25XaW5kb3dSZXNpemVGdW5jdGlvblZhcmlhYmxlID0gdGhpcy5vbldpbmRvd1Jlc2l6ZS5iaW5kKFxuXHRcdFx0XHR0aGlzXG5cdFx0XHQpO1xuXHRcdFx0dGhpcy5vbldpbmRvd1Jlc2l6ZVRpbWVyQ2FsbGJhY2tGdW5jdGlvblZhcmlhYmxlID0gdGhpcy5vbldpbmRvd1Jlc2l6ZVRpbWVyQ2FsbGJhY2suYmluZChcblx0XHRcdFx0dGhpc1xuXHRcdFx0KTtcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFx0XHRcInJlc2l6ZVwiLFxuXHRcdFx0XHR0aGlzLm9uV2luZG93UmVzaXplRnVuY3Rpb25WYXJpYWJsZVxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHR0aGlzLmluaXQodGhpcy5pbml0aWFsR3JpZERhdGEuZ3JpZFdpZHRoLCB0aGlzLm9wdGlvbnMuYXV0b0FycmFuZ2UpO1xuXHR9XG5cblx0TGltYmVyR3JpZFZpZXcucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbihpbml0aWFsR3JpZFdpZHRoLCBhdXRvQXJyYW5nZSkge1xuXHRcdGlmICh0aGlzLm9wdGlvbnMuZWwuaW5kZXhPZihcIiNcIikgIT0gMCkge1xuXHRcdFx0dGhyb3cgXCJET00gRWxlbWVudCB3aXRoIElkIHJlcXVpcmVkXCI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuJGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIik7XG5cdFx0XHR0aGlzLmVsZW1lbnRJRCA9IHRoaXMub3B0aW9ucy5lbC5zdWJzdHJpbmcoXG5cdFx0XHRcdDEsXG5cdFx0XHRcdHRoaXMub3B0aW9ucy5lbC5sZW5ndGhcblx0XHRcdCk7XG5cdFx0XHR0aGlzLnBzZXVkb0VsZW1lbnRJRCA9XG5cdFx0XHRcdFwibGltYmVyR3JpZFZpZXdQc2V1ZG9Db250YWluZXJfXCIgKyB0aGlzLmVsZW1lbnRJRDtcblx0XHRcdHRoaXMuJGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG5cdFx0XHRcdHRoaXMub3B0aW9ucy5lbC5zdWJzdHJpbmcoMSwgdGhpcy5vcHRpb25zLmVsLmxlbmd0aClcblx0XHRcdCk7XG5cdFx0XHR0aGlzLiRib2R5WzBdLmluc2VydEFkamFjZW50SFRNTChcblx0XHRcdFx0XCJiZWZvcmVlbmRcIixcblx0XHRcdFx0JzxkaXYgaWQgPSBcIicgK1xuXHRcdFx0XHRcdHRoaXMucHNldWRvRWxlbWVudElEICtcblx0XHRcdFx0XHQnXCIgY2xhc3MgPSBcImxpbWJlckdyaWRWaWV3UHNldWRvQ29udGFpbmVyXCI+PC9kaXY+J1xuXHRcdFx0KTtcblx0XHRcdHRoaXMuJGJvZHlQc2V1ZG9FbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMucHNldWRvRWxlbWVudElEKTtcblx0XHR9XG5cblx0XHR0aGlzLiRlbC5pbm5lckhUTUwgPVxuXHRcdFx0JzxkaXYgY2xhc3MgPSBcImxpbWJlckdyaWRWaWV3Q29udGFpbmVyXCI+PHN0eWxlPjwvc3R5bGU+PGRpdiBjbGFzcyA9IFwibGltYmVyR3JpZFZpZXdcIj48L2Rpdj48ZGl2IGNsYXNzID0gXCJsaW1iZXJHcmlkVmlld0xpY2Vuc2VcIj48ZGl2IGNsYXNzID0gXCJsaW1iZXJHcmlkVmlld0xpY2Vuc2VJY29uXCI+aTwvZGl2PjxkaXYgY2xhc3MgPSBcImxpbWJlckdyaWRWaWV3TGljZW5zZURldGFpbHNcIj5MaW1iZXJHcmlkVmlldyBDb3B5cmlnaHQgKGMpIDIwMTgsIFN1YmVuZHJhIEt1bWFyIFNoYXJtYS4gTGljZW5zZTogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzLCBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLjwvZGl2PjwvZGl2PjwvZGl2Pic7XG5cdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdDb250YWluZXIgPSB0aGlzLiRlbC5xdWVyeVNlbGVjdG9yQWxsKFxuXHRcdFx0XCIubGltYmVyR3JpZFZpZXdDb250YWluZXJcIlxuXHRcdCk7XG5cdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdTdHlsZSA9IHRoaXMuJGVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic3R5bGVcIik7XG5cdFx0dGhpcy4kbGltYmVyR3JpZFZpZXcgPSB0aGlzLiRlbC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpbWJlckdyaWRWaWV3XCIpO1xuXG5cdFx0dGhpcy5QQURESU5HX0xFRlQgPSBwYXJzZUludChcblx0XHRcdHdpbmRvd1xuXHRcdFx0XHQuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLiRsaW1iZXJHcmlkVmlld1swXSwgbnVsbClcblx0XHRcdFx0LmdldFByb3BlcnR5VmFsdWUoXCJwYWRkaW5nLWxlZnRcIilcblx0XHQpO1xuXHRcdHRoaXMuUEFERElOR19SSUdIVCA9IHBhcnNlSW50KFxuXHRcdFx0d2luZG93XG5cdFx0XHRcdC5nZXRDb21wdXRlZFN0eWxlKHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLCBudWxsKVxuXHRcdFx0XHQuZ2V0UHJvcGVydHlWYWx1ZShcInBhZGRpbmctcmlnaHRcIilcblx0XHQpO1xuXHRcdHRoaXMuUEFERElOR19UT1AgPSBwYXJzZUludChcblx0XHRcdHdpbmRvd1xuXHRcdFx0XHQuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLiRsaW1iZXJHcmlkVmlld1swXSwgbnVsbClcblx0XHRcdFx0LmdldFByb3BlcnR5VmFsdWUoXCJwYWRkaW5nLXRvcFwiKVxuXHRcdCk7XG5cdFx0dGhpcy5QQURESU5HX0JPVFRPTSA9IHBhcnNlSW50KFxuXHRcdFx0d2luZG93XG5cdFx0XHRcdC5nZXRDb21wdXRlZFN0eWxlKHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLCBudWxsKVxuXHRcdFx0XHQuZ2V0UHJvcGVydHlWYWx1ZShcInBhZGRpbmctYm90dG9tXCIpXG5cdFx0KTtcblxuXHRcdHRoaXMuV0lEVEggPVxuXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdbMF0uY2xpZW50V2lkdGggLVxuXHRcdFx0dGhpcy5QQURESU5HX0xFRlQgLVxuXHRcdFx0dGhpcy5QQURESU5HX1JJR0hUO1xuXHRcdHRoaXMuSEVJR0hUID1cblx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLmNsaWVudEhlaWdodCAtXG5cdFx0XHR0aGlzLlBBRERJTkdfVE9QIC1cblx0XHRcdHRoaXMuUEFERElOR19CT1RUT007XG5cblx0XHRpZiAoXG5cdFx0XHQoaW5pdGlhbEdyaWRXaWR0aCA9PSB1bmRlZmluZWQgfHwgaW5pdGlhbEdyaWRXaWR0aCA9PSBudWxsKSAmJlxuXHRcdFx0dGhpcy5wb3NpdGlvbkRhdGEubGVuZ3RoID09IDBcblx0XHQpIHtcblx0XHRcdGluaXRpYWxHcmlkV2lkdGggPSB0aGlzLldJRFRIO1xuXHRcdH1cblxuXHRcdHRoaXMuV0lEVEhfU0NBTEVfRkFDVE9SID0gdGhpcy5XSURUSCAvIGluaXRpYWxHcmlkV2lkdGg7XG5cblx0XHRpZiAoYXV0b0FycmFuZ2UgPT0gdHJ1ZSkge1xuXHRcdFx0dmFyIHBvc2l0aW9uRGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5wb3NpdGlvbkRhdGEpKTtcblx0XHRcdHZhciByZW1haW5pbmdJdGVtcyA9IFtdO1xuXHRcdFx0dmFyIGxlbmd0aF8wID0gcG9zaXRpb25EYXRhLmxlbmd0aDtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHRcdFx0XHRyZW1haW5pbmdJdGVtcy5wdXNoKGkpO1xuXHRcdFx0XHRwb3NpdGlvbkRhdGFbaV0ud2lkdGggPVxuXHRcdFx0XHRcdHBvc2l0aW9uRGF0YVtpXS53aWR0aCAqIHRoaXMuV0lEVEhfU0NBTEVfRkFDVE9SO1xuXHRcdFx0XHRwb3NpdGlvbkRhdGFbaV0uaGVpZ2h0ID1cblx0XHRcdFx0XHRwb3NpdGlvbkRhdGFbaV0uaGVpZ2h0ICogdGhpcy5XSURUSF9TQ0FMRV9GQUNUT1I7XG5cdFx0XHRcdGlmIChwb3NpdGlvbkRhdGFbaV0ud2lkdGggPiB0aGlzLldJRFRIKSB7XG5cdFx0XHRcdFx0cG9zaXRpb25EYXRhW2ldLndpZHRoID0gdGhpcy5XSURUSDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5wb3NpdGlvbkRhdGEgPSB0aGlzLmZpdFJlbWFpbmluZ0l0ZW1zQmVsb3dEZWVwZXN0TGluZShcblx0XHRcdFx0MCxcblx0XHRcdFx0cG9zaXRpb25EYXRhLFxuXHRcdFx0XHRyZW1haW5pbmdJdGVtcyxcblx0XHRcdFx0W11cblx0XHRcdCkucG9zaXRpb25EYXRhO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdHRoaXMuaW5pdGlhbEdyaWREYXRhLm1hcmdpbiAhPSB1bmRlZmluZWQgJiZcblx0XHRcdFx0dGhpcy5pbml0aWFsR3JpZERhdGEubWFyZ2luICE9IG51bGxcblx0XHRcdCkge1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0dHlwZW9mIHRoaXMuaW5pdGlhbEdyaWREYXRhLm1hcmdpbiA9PSBcIm51bWJlclwiICYmXG5cdFx0XHRcdFx0dGhpcy5pbml0aWFsR3JpZERhdGEubWFyZ2luID4gMFxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHR0aGlzLk1BUkdJTiA9IHRoaXMuaW5pdGlhbEdyaWREYXRhLm1hcmdpbjtcblx0XHRcdFx0XHR0aGlzLk1BUkdJTiA9IHRoaXMuTUFSR0lOICogdGhpcy5XSURUSF9TQ0FMRV9GQUNUT1I7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhyb3cgXCJNYXJnaW4gaXMgcmVxdWlyZWQgZm9yIHJlbmRlcmluZyB3aXRoIHBvc2l0aW9uIGNvb3JkaW5hdGVzXCI7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IFwiTWFyZ2luIGlzIHJlcXVpcmVkIGZvciByZW5kZXJpbmcgd2l0aCBwb3NpdGlvbiBjb29yZGluYXRlc1wiO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gR0VUVEVSUyBBTkQgU0VUVEVSUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXHRMaW1iZXJHcmlkVmlldy5wcm90b3R5cGUuZ2V0R3JpZERhdGEgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgZ3JpZERhdGEgPSB7XG5cdFx0XHRncmlkSGVpZ2h0OiB0aGlzLkhFSUdIVCxcblx0XHRcdGdyaWRXaWR0aDogdGhpcy5XSURUSCxcblx0XHRcdG1hcmdpbjogdGhpcy5NQVJHSU4sXG5cdFx0XHRpbml0aWFsUG9zaXRpb25EYXRhOiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMucG9zaXRpb25EYXRhKSlcblx0XHR9O1xuXHRcdHJldHVybiBncmlkRGF0YTtcblx0fTtcblxuXHRMaW1iZXJHcmlkVmlldy5wcm90b3R5cGUuc2V0QWRkT3JDdXRTcGFjZSA9IGZ1bmN0aW9uKGZsYWcpIHtcblx0XHRpZiAoZmxhZyA9PSBcIkFERFwiIHx8IGZsYWcgPT0gXCJDVVRTUEFDRVwiKSB7XG5cdFx0XHR0aGlzLkFERF9PUl9DVVRTUEFDRV9UT0dHTEUgPSBmbGFnO1xuXHRcdH1cblx0fTtcblxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gR0VUVEVSUyBBTkQgU0VUVEVSUyBFTkQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBSRU5ERVJFUlMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXHRMaW1iZXJHcmlkVmlldy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24ocG9zaXRpb25EYXRhLCBzY2FsZSA9IHRydWUpIHtcblx0XHR0aGlzLnVuSW5pdGlhbGl6ZUV2ZW50cygpO1xuXG5cdFx0aWYgKHBvc2l0aW9uRGF0YSA9PT0gdW5kZWZpbmVkIHx8IHBvc2l0aW9uRGF0YSA9PT0gbnVsbCkge1xuXHRcdFx0dmFyIHBvc2l0aW9uRGF0YSA9IHRoaXMucG9zaXRpb25EYXRhO1xuXHRcdH1cblx0XHRpZiAoc2NhbGUgPT0gdHJ1ZSkge1xuXHRcdFx0dmFyIFdJRFRIX1NDQUxFX0ZBQ1RPUiA9IHRoaXMuV0lEVEhfU0NBTEVfRkFDVE9SO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgV0lEVEhfU0NBTEVfRkFDVE9SID0gMTtcblx0XHR9XG5cblx0XHR2YXIgY2xhc3NMaXN0ID0gW1wibGltYmVyR3JpZFZpZXdJdGVtXCJdO1xuXHRcdGlmICh0aGlzLm9wdGlvbnMuZWRpdGFibGUgPT0gdHJ1ZSkge1xuXHRcdFx0Y2xhc3NMaXN0LnB1c2goXCJsaW1iZXJHcmlkVmlld0l0ZW1FZGl0YWJsZVwiKTtcblx0XHR9XG5cdFx0dmFyIGNsYXNzTGlzdFN0cmluZyA9IGNsYXNzTGlzdC5qb2luKFwiIFwiKTtcblxuXHRcdHZhciBodG1sID0gW107XG5cblx0XHQvLyBkZXYgQ29kZVxuXHRcdHZhciB0MCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuXHRcdC8vIGRldiBDb2RlIEVORFxuXG5cdFx0aWYgKCF0aGlzLmlzTW9iaWxlKCkpIHtcblx0XHRcdGlmICh0aGlzLm9wdGlvbnMuZGF0YVR5cGUgPT0gXCJzdHJpbmdcIikge1xuXHRcdFx0XHR2YXIgbGVuZ3RoXzAgPSBwb3NpdGlvbkRhdGEubGVuZ3RoO1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF8wOyBpKyspIHtcblx0XHRcdFx0XHRwb3NpdGlvbkRhdGFbaV0ud2lkdGggKj0gV0lEVEhfU0NBTEVfRkFDVE9SO1xuXHRcdFx0XHRcdGlmIChwb3NpdGlvbkRhdGFbaV0ud2lkdGggPiB0aGlzLldJRFRIKSB7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbkRhdGFbaV0ud2lkdGggPSB0aGlzLldJRFRIO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR2YXIgZnJvbnQgPVxuXHRcdFx0XHRcdFx0JzxkaXYgY2xhc3MgPSBcIicgK1xuXHRcdFx0XHRcdFx0Y2xhc3NMaXN0U3RyaW5nICtcblx0XHRcdFx0XHRcdCdcIiBkYXRhLWluZGV4ID0gXCInICtcblx0XHRcdFx0XHRcdGkgK1xuXHRcdFx0XHRcdFx0J1wiICc7XG5cdFx0XHRcdFx0dmFyIHN0eWxlXzEgPVxuXHRcdFx0XHRcdFx0J3N0eWxlID0gXCJ0cmFuc2Zvcm0gOiB0cmFuc2xhdGUoJyArXG5cdFx0XHRcdFx0XHQocG9zaXRpb25EYXRhW2ldLnggKj0gV0lEVEhfU0NBTEVfRkFDVE9SKSArXG5cdFx0XHRcdFx0XHRcInB4LCBcIjtcblx0XHRcdFx0XHR2YXIgc3R5bGVfMiA9XG5cdFx0XHRcdFx0XHQocG9zaXRpb25EYXRhW2ldLnkgKj0gV0lEVEhfU0NBTEVfRkFDVE9SKSArIFwicHgpOyBcIjtcblx0XHRcdFx0XHR2YXIgc3R5bGVfMyA9IFwid2lkdGggOiBcIiArIHBvc2l0aW9uRGF0YVtpXS53aWR0aCArIFwicHg7IFwiO1xuXHRcdFx0XHRcdHZhciBzdHlsZV80ID1cblx0XHRcdFx0XHRcdFwiaGVpZ2h0IDogXCIgK1xuXHRcdFx0XHRcdFx0KHBvc2l0aW9uRGF0YVtpXS5oZWlnaHQgKj0gV0lEVEhfU0NBTEVfRkFDVE9SKSArXG5cdFx0XHRcdFx0XHRcInB4OyBcIjtcblx0XHRcdFx0XHR2YXIgc3R5bGVfNSA9ICdcIj4nO1xuXG5cdFx0XHRcdFx0dmFyIHN0eWxlID0gc3R5bGVfMSArIHN0eWxlXzIgKyBzdHlsZV8zICsgc3R5bGVfNCArIHN0eWxlXzU7XG5cblx0XHRcdFx0XHR2YXIgYm9keUZyb250ID0gXCI8ZGl2PlwiO1xuXHRcdFx0XHRcdHZhciBib2R5RW5kID0gXCI8L2Rpdj5cIjtcblx0XHRcdFx0XHR2YXIgdXNlckRhdGEgPSB0aGlzLmNhbGxiYWNrcy5nZXRJdGVtUmVuZGVyRGF0YUNhbGxiYWNrKFxuXHRcdFx0XHRcdFx0aSxcblx0XHRcdFx0XHRcdHBvc2l0aW9uRGF0YVtpXS53aWR0aCxcblx0XHRcdFx0XHRcdHBvc2l0aW9uRGF0YVtpXS5oZWlnaHQsXG5cdFx0XHRcdFx0XHRcInJlbmRlclwiXG5cdFx0XHRcdFx0KTtcblxuXHRcdFx0XHRcdHZhciBib2R5ID0gYm9keUZyb250ICsgdXNlckRhdGEgKyBib2R5RW5kO1xuXHRcdFx0XHRcdHZhciBlbmQgPSBcIjwvZGl2PlwiO1xuXG5cdFx0XHRcdFx0dmFyIGl0ZW0gPSBmcm9udCArIHN0eWxlICsgYm9keSArIGVuZDtcblxuXHRcdFx0XHRcdGh0bWwucHVzaChpdGVtKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICh0aGlzLm9wdGlvbnMuZGF0YVR5cGUgPT0gXCJub2RlXCIpIHtcblx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdDb250YWluZXJbMF0ucmVtb3ZlQ2hpbGQoXG5cdFx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdbMF1cblx0XHRcdFx0KTtcblxuXHRcdFx0XHR2YXIgbGVuZ3RoXzAgPSBwb3NpdGlvbkRhdGEubGVuZ3RoO1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF8wOyBpKyspIHtcblx0XHRcdFx0XHRwb3NpdGlvbkRhdGFbaV0ud2lkdGggKj0gV0lEVEhfU0NBTEVfRkFDVE9SO1xuXHRcdFx0XHRcdGlmIChwb3NpdGlvbkRhdGFbaV0ud2lkdGggPiB0aGlzLldJRFRIKSB7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbkRhdGFbaV0ud2lkdGggPSB0aGlzLldJRFRIO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdFx0XHR2YXIgYXR0cmlidXRlID0gZG9jdW1lbnQuY3JlYXRlQXR0cmlidXRlKFwiZGF0YS1pbmRleFwiKTtcblx0XHRcdFx0XHRhdHRyaWJ1dGUudmFsdWUgPSBpO1xuXHRcdFx0XHRcdGRpdi5zZXRBdHRyaWJ1dGVOb2RlKGF0dHJpYnV0ZSk7XG5cdFx0XHRcdFx0aWYgKGNsYXNzTGlzdC5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHRkaXYuY2xhc3NMaXN0LmFkZChjbGFzc0xpc3RbMF0pO1xuXHRcdFx0XHRcdFx0ZGl2LmNsYXNzTGlzdC5hZGQoY2xhc3NMaXN0WzFdKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0ZGl2LmNsYXNzTGlzdC5hZGQoY2xhc3NMaXN0WzBdKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZGl2LnN0eWxlLnRyYW5zZm9ybSA9XG5cdFx0XHRcdFx0XHRcInRyYW5zbGF0ZShcIiArXG5cdFx0XHRcdFx0XHQocG9zaXRpb25EYXRhW2ldLnggKj0gV0lEVEhfU0NBTEVfRkFDVE9SKSArXG5cdFx0XHRcdFx0XHRcInB4LCBcIiArXG5cdFx0XHRcdFx0XHQocG9zaXRpb25EYXRhW2ldLnkgKj0gV0lEVEhfU0NBTEVfRkFDVE9SKSArXG5cdFx0XHRcdFx0XHRcInB4KVwiO1xuXHRcdFx0XHRcdGRpdi5zdHlsZS53aWR0aCA9IHBvc2l0aW9uRGF0YVtpXS53aWR0aCArIFwicHhcIjtcblx0XHRcdFx0XHRkaXYuc3R5bGUuaGVpZ2h0ID1cblx0XHRcdFx0XHRcdChwb3NpdGlvbkRhdGFbaV0uaGVpZ2h0ICo9IFdJRFRIX1NDQUxFX0ZBQ1RPUikgKyBcInB4XCI7XG5cblx0XHRcdFx0XHR2YXIgdXNlckRhdGEgPSB0aGlzLmNhbGxiYWNrcy5nZXRJdGVtUmVuZGVyRGF0YUNhbGxiYWNrKFxuXHRcdFx0XHRcdFx0aSxcblx0XHRcdFx0XHRcdHBvc2l0aW9uRGF0YVtpXS53aWR0aCxcblx0XHRcdFx0XHRcdHBvc2l0aW9uRGF0YVtpXS5oZWlnaHQsXG5cdFx0XHRcdFx0XHRcInJlbmRlclwiXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRpZiAodHlwZW9mIHVzZXJEYXRhID09IFwic3RyaW5nXCIpIHtcblx0XHRcdFx0XHRcdGRpdi5pbm5lckhUTUwgPSB1c2VyRGF0YTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0ZGl2LmFwcGVuZENoaWxkKHVzZXJEYXRhKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdbMF0uYXBwZW5kQ2hpbGQoZGl2KTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0NvbnRhaW5lclswXS5hcHBlbmRDaGlsZChcblx0XHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld1swXVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNlcmlhbGl6ZWRQb3NpdGlvbkRhdGEgPSB0aGlzLmdldFJvd1NlcXVlbmNlKHRydWUpO1xuXHRcdFx0aWYgKHRoaXMub3B0aW9ucy5kYXRhVHlwZSA9PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRcdHZhciBsZW5ndGhfMCA9IHBvc2l0aW9uRGF0YS5sZW5ndGg7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHRcdFx0XHRcdHBvc2l0aW9uRGF0YVtpXS53aWR0aCAqPSBXSURUSF9TQ0FMRV9GQUNUT1I7XG5cdFx0XHRcdFx0cG9zaXRpb25EYXRhW2ldLmhlaWdodCAqPSBXSURUSF9TQ0FMRV9GQUNUT1I7XG5cdFx0XHRcdFx0cG9zaXRpb25EYXRhW2ldLnggKj0gV0lEVEhfU0NBTEVfRkFDVE9SO1xuXHRcdFx0XHRcdHBvc2l0aW9uRGF0YVtpXS55ICo9IFdJRFRIX1NDQUxFX0ZBQ1RPUjtcblx0XHRcdFx0XHRpZiAocG9zaXRpb25EYXRhW2ldLndpZHRoID4gdGhpcy5XSURUSCkge1xuXHRcdFx0XHRcdFx0cG9zaXRpb25EYXRhW2ldLndpZHRoID0gdGhpcy5XSURUSDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dmFyIGZyb250ID1cblx0XHRcdFx0XHRcdCc8ZGl2IGNsYXNzID0gXCJsaW1iZXJHcmlkVmlld0l0ZW1cIiBkYXRhLWluZGV4ID0gXCInICtcblx0XHRcdFx0XHRcdGkgK1xuXHRcdFx0XHRcdFx0J1wiICc7XG5cdFx0XHRcdFx0dmFyIHN0eWxlXzEgPVxuXHRcdFx0XHRcdFx0J3N0eWxlID0gXCJ0cmFuc2Zvcm0gOiB0cmFuc2xhdGUoJyArIDAgKyBcInB4LCBcIjtcblx0XHRcdFx0XHR2YXIgc3R5bGVfMiA9XG5cdFx0XHRcdFx0XHQodGhpcy5XSURUSCAvIHRoaXMuTU9CSUxFX0FTUEVDVF9SQVRJTyArXG5cdFx0XHRcdFx0XHRcdHRoaXMuZ2V0TWFyZ2luQXRQb2ludChcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnNlcmlhbGl6ZWRQb3NpdGlvbkRhdGEubWFwW2ldXG5cdFx0XHRcdFx0XHRcdCkpICpcblx0XHRcdFx0XHRcdFx0dGhpcy5zZXJpYWxpemVkUG9zaXRpb25EYXRhLm1hcFtpXSArXG5cdFx0XHRcdFx0XHRcInB4KTsgXCI7XG5cdFx0XHRcdFx0dmFyIHN0eWxlXzMgPSBcIndpZHRoIDogXCIgKyB0aGlzLldJRFRIICsgXCJweDsgXCI7XG5cdFx0XHRcdFx0dmFyIHN0eWxlXzQgPVxuXHRcdFx0XHRcdFx0XCJoZWlnaHQgOiBcIiArXG5cdFx0XHRcdFx0XHR0aGlzLldJRFRIIC8gdGhpcy5NT0JJTEVfQVNQRUNUX1JBVElPICtcblx0XHRcdFx0XHRcdFwicHg7IFwiO1xuXHRcdFx0XHRcdHZhciBzdHlsZV81ID0gJ1wiPic7XG5cblx0XHRcdFx0XHR2YXIgc3R5bGUgPSBzdHlsZV8xICsgc3R5bGVfMiArIHN0eWxlXzMgKyBzdHlsZV80ICsgc3R5bGVfNTtcblxuXHRcdFx0XHRcdHZhciBib2R5RnJvbnQgPSBcIjxkaXY+XCI7XG5cdFx0XHRcdFx0dmFyIGJvZHlFbmQgPSBcIjwvZGl2PlwiO1xuXHRcdFx0XHRcdHZhciB1c2VyRGF0YSA9IHRoaXMuY2FsbGJhY2tzLmdldEl0ZW1SZW5kZXJEYXRhQ2FsbGJhY2soXG5cdFx0XHRcdFx0XHRpLFxuXHRcdFx0XHRcdFx0dGhpcy5XSURUSCxcblx0XHRcdFx0XHRcdHRoaXMuV0lEVEggLyB0aGlzLk1PQklMRV9BU1BFQ1RfUkFUSU8sXG5cdFx0XHRcdFx0XHRcInJlbmRlclwiXG5cdFx0XHRcdFx0KTtcblxuXHRcdFx0XHRcdHZhciBib2R5ID0gYm9keUZyb250ICsgdXNlckRhdGEgKyBib2R5RW5kO1xuXHRcdFx0XHRcdHZhciBlbmQgPSBcIjwvZGl2PlwiO1xuXG5cdFx0XHRcdFx0dmFyIGl0ZW0gPSBmcm9udCArIHN0eWxlICsgYm9keSArIGVuZDtcblxuXHRcdFx0XHRcdGh0bWwucHVzaChpdGVtKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICh0aGlzLm9wdGlvbnMuZGF0YVR5cGUgPT0gXCJub2RlXCIpIHtcblx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdDb250YWluZXJbMF0ucmVtb3ZlQ2hpbGQoXG5cdFx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdbMF1cblx0XHRcdFx0KTtcblxuXHRcdFx0XHR2YXIgbGVuZ3RoXzAgPSBwb3NpdGlvbkRhdGEubGVuZ3RoO1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF8wOyBpKyspIHtcblx0XHRcdFx0XHRwb3NpdGlvbkRhdGFbaV0ud2lkdGggKj0gV0lEVEhfU0NBTEVfRkFDVE9SO1xuXHRcdFx0XHRcdHBvc2l0aW9uRGF0YVtpXS5oZWlnaHQgKj0gV0lEVEhfU0NBTEVfRkFDVE9SO1xuXHRcdFx0XHRcdHBvc2l0aW9uRGF0YVtpXS54ICo9IFdJRFRIX1NDQUxFX0ZBQ1RPUjtcblx0XHRcdFx0XHRwb3NpdGlvbkRhdGFbaV0ueSAqPSBXSURUSF9TQ0FMRV9GQUNUT1I7XG5cdFx0XHRcdFx0aWYgKHBvc2l0aW9uRGF0YVtpXS53aWR0aCA+IHRoaXMuV0lEVEgpIHtcblx0XHRcdFx0XHRcdHBvc2l0aW9uRGF0YVtpXS53aWR0aCA9IHRoaXMuV0lEVEg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0XHRcdHZhciBhdHRyaWJ1dGUgPSBkb2N1bWVudC5jcmVhdGVBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIpO1xuXHRcdFx0XHRcdGF0dHJpYnV0ZS52YWx1ZSA9IGk7XG5cdFx0XHRcdFx0ZGl2LnNldEF0dHJpYnV0ZU5vZGUoYXR0cmlidXRlKTtcblx0XHRcdFx0XHRkaXYuY2xhc3NMaXN0LmFkZChcImxpbWJlckdyaWRWaWV3SXRlbVwiKTtcblxuXHRcdFx0XHRcdGRpdi5zdHlsZS50cmFuc2Zvcm0gPVxuXHRcdFx0XHRcdFx0XCJ0cmFuc2xhdGUoXCIgK1xuXHRcdFx0XHRcdFx0MCArXG5cdFx0XHRcdFx0XHRcInB4LCBcIiArXG5cdFx0XHRcdFx0XHQodGhpcy5XSURUSCAvIHRoaXMuTU9CSUxFX0FTUEVDVF9SQVRJTyArXG5cdFx0XHRcdFx0XHRcdHRoaXMuZ2V0TWFyZ2luQXRQb2ludChcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnNlcmlhbGl6ZWRQb3NpdGlvbkRhdGEubWFwW2ldXG5cdFx0XHRcdFx0XHRcdCkpICpcblx0XHRcdFx0XHRcdFx0dGhpcy5zZXJpYWxpemVkUG9zaXRpb25EYXRhLm1hcFtpXSArXG5cdFx0XHRcdFx0XHRcInB4KVwiO1xuXHRcdFx0XHRcdGRpdi5zdHlsZS53aWR0aCA9IHRoaXMuV0lEVEggKyBcInB4XCI7XG5cdFx0XHRcdFx0ZGl2LnN0eWxlLmhlaWdodCA9XG5cdFx0XHRcdFx0XHR0aGlzLldJRFRIIC8gdGhpcy5NT0JJTEVfQVNQRUNUX1JBVElPICsgXCJweFwiO1xuXG5cdFx0XHRcdFx0dmFyIHVzZXJEYXRhID0gdGhpcy5jYWxsYmFja3MuZ2V0SXRlbVJlbmRlckRhdGFDYWxsYmFjayhcblx0XHRcdFx0XHRcdGksXG5cdFx0XHRcdFx0XHR0aGlzLldJRFRILFxuXHRcdFx0XHRcdFx0dGhpcy5XSURUSCAvIHRoaXMuTU9CSUxFX0FTUEVDVF9SQVRJTyxcblx0XHRcdFx0XHRcdFwicmVuZGVyXCJcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGlmICh0eXBlb2YgdXNlckRhdGEgPT0gXCJzdHJpbmdcIikge1xuXHRcdFx0XHRcdFx0ZGl2LmlubmVySFRNTCA9IHVzZXJEYXRhO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRkaXYuYXBwZW5kQ2hpbGQodXNlckRhdGEpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5hcHBlbmRDaGlsZChkaXYpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3Q29udGFpbmVyWzBdLmFwcGVuZENoaWxkKFxuXHRcdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMub3B0aW9ucy5kYXRhVHlwZSA9PSBcInN0cmluZ1wiKSB7XG5cdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5pbm5lckhUTUwgPSBodG1sLmpvaW4oXCJcIik7XG5cdFx0fVxuXG5cdFx0Ly8gZGV2IENvZGVcblx0XHR2YXIgdDEgPSBwZXJmb3JtYW5jZS5ub3coKTtcblx0XHRjb25zb2xlLmxvZyh0MCk7XG5cdFx0Y29uc29sZS5sb2codDEpO1xuXHRcdGNvbnNvbGUubG9nKHQxIC0gdDApO1xuXHRcdC8vIGRldiBDb2RlIEVORFxuXG5cdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdJdGVtcyA9IHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLnF1ZXJ5U2VsZWN0b3JBbGwoXG5cdFx0XHRcIi5saW1iZXJHcmlkVmlld0l0ZW1cIlxuXHRcdCk7XG5cblx0XHR0aGlzLnJlbmRlclBzZXVkb0VsZW1lbnRzKHBvc2l0aW9uRGF0YSk7XG5cblx0XHR0aGlzLmluaXRpYWxpemVWYXJpYWJsZXMoKTtcblx0XHR0aGlzLmluaXRpYWxpemVFdmVudHMoKTtcblxuXHRcdGlmIChcblx0XHRcdHRoaXMuY2FsbGJhY2tzLnJlbmRlckNvbXBsZXRlICE9IHVuZGVmaW5lZCAmJlxuXHRcdFx0dGhpcy5jYWxsYmFja3MucmVuZGVyQ29tcGxldGUgIT0gbnVsbFxuXHRcdCkge1xuXHRcdFx0dGhpcy5jYWxsYmFja3MucmVuZGVyQ29tcGxldGUoKTtcblx0XHR9XG5cdH07XG5cblx0TGltYmVyR3JpZFZpZXcucHJvdG90eXBlLnJlbmRlclBzZXVkb0VsZW1lbnRzID0gZnVuY3Rpb24ocG9zaXRpb25EYXRhKSB7XG5cdFx0aWYgKHRoaXMuJGxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1zICE9IHVuZGVmaW5lZCkge1xuXHRcdFx0dmFyIGxlbmd0aF8wID0gdGhpcy5wb3NpdGlvbkRhdGEubGVuZ3RoO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1zWzBdLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoXG5cdFx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbXNbMF1cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1zID0gdW5kZWZpbmVkO1xuXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdCb2R5UHNldWRvSXRlbXMgPSB1bmRlZmluZWQ7XG5cdFx0fVxuXG5cdFx0dmFyIGdyaWRIdG1sID0gW107XG5cdFx0dmFyIGJvZHlIdG1sID0gW107XG5cblx0XHRpZiAoIXRoaXMuaXNNb2JpbGUoKSkge1xuXHRcdFx0dmFyIGxlbmd0aF8wID0gcG9zaXRpb25EYXRhLmxlbmd0aDtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHRcdFx0XHR2YXIgZ3JpZEZyb250ID1cblx0XHRcdFx0XHQnPGRpdiBjbGFzcyA9IFwibGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbVwiIGRhdGEtaW5kZXggPSBcIicgK1xuXHRcdFx0XHRcdGkgK1xuXHRcdFx0XHRcdCdcIiAnO1xuXHRcdFx0XHR2YXIgYm9keUZyb250ID1cblx0XHRcdFx0XHQnPGRpdiBjbGFzcyA9IFwibGltYmVyR3JpZFZpZXdCb2R5UHNldWRvSXRlbVwiIGRhdGEtaW5kZXggPSBcIicgK1xuXHRcdFx0XHRcdGkgK1xuXHRcdFx0XHRcdCdcIiAnO1xuXHRcdFx0XHR2YXIgc3R5bGVfMSA9XG5cdFx0XHRcdFx0J3N0eWxlID0gXCJ0cmFuc2Zvcm0gOiB0cmFuc2xhdGUoJyArXG5cdFx0XHRcdFx0cG9zaXRpb25EYXRhW2ldLnggK1xuXHRcdFx0XHRcdFwicHgsIFwiO1xuXHRcdFx0XHR2YXIgc3R5bGVfMiA9IHBvc2l0aW9uRGF0YVtpXS55ICsgXCJweCk7IFwiO1xuXHRcdFx0XHR2YXIgc3R5bGVfMyA9IFwid2lkdGggOiBcIiArIHBvc2l0aW9uRGF0YVtpXS53aWR0aCArIFwicHg7IFwiO1xuXHRcdFx0XHR2YXIgc3R5bGVfNCA9IFwiaGVpZ2h0IDogXCIgKyBwb3NpdGlvbkRhdGFbaV0uaGVpZ2h0ICsgXCJweDsgXCI7XG5cdFx0XHRcdHZhciBzdHlsZV81ID0gJ1wiPic7XG5cblx0XHRcdFx0dmFyIHN0eWxlID0gc3R5bGVfMSArIHN0eWxlXzIgKyBzdHlsZV8zICsgc3R5bGVfNCArIHN0eWxlXzU7XG5cblx0XHRcdFx0dmFyIGVuZCA9IFwiPC9kaXY+XCI7XG5cblx0XHRcdFx0dmFyIGdyaWRJdGVtID0gZ3JpZEZyb250ICsgc3R5bGUgKyBlbmQ7XG5cdFx0XHRcdHZhciBib2R5SXRlbSA9IGJvZHlGcm9udCArIHN0eWxlICsgZW5kO1xuXG5cdFx0XHRcdGdyaWRIdG1sLnB1c2goZ3JpZEl0ZW0pO1xuXHRcdFx0XHRib2R5SHRtbC5wdXNoKGJvZHlJdGVtKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIGxlbmd0aF8wID0gcG9zaXRpb25EYXRhLmxlbmd0aDtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHRcdFx0XHR2YXIgZ3JpZEZyb250ID1cblx0XHRcdFx0XHQnPGRpdiBjbGFzcyA9IFwibGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbVwiIGRhdGEtaW5kZXggPSBcIicgK1xuXHRcdFx0XHRcdGkgK1xuXHRcdFx0XHRcdCdcIiAnO1xuXHRcdFx0XHR2YXIgYm9keUZyb250ID1cblx0XHRcdFx0XHQnPGRpdiBjbGFzcyA9IFwibGltYmVyR3JpZFZpZXdCb2R5UHNldWRvSXRlbVwiIGRhdGEtaW5kZXggPSBcIicgK1xuXHRcdFx0XHRcdGkgK1xuXHRcdFx0XHRcdCdcIiAnO1xuXHRcdFx0XHR2YXIgc3R5bGVfMSA9ICdzdHlsZSA9IFwidHJhbnNmb3JtIDogdHJhbnNsYXRlKCcgKyAwICsgXCJweCwgXCI7XG5cdFx0XHRcdHZhciBzdHlsZV8yID1cblx0XHRcdFx0XHQodGhpcy5XSURUSCAvIHRoaXMuTU9CSUxFX0FTUEVDVF9SQVRJTyArXG5cdFx0XHRcdFx0XHR0aGlzLmdldE1hcmdpbkF0UG9pbnQoXG5cdFx0XHRcdFx0XHRcdHRoaXMuc2VyaWFsaXplZFBvc2l0aW9uRGF0YS5tYXBbaV1cblx0XHRcdFx0XHRcdCkpICpcblx0XHRcdFx0XHRcdHRoaXMuc2VyaWFsaXplZFBvc2l0aW9uRGF0YS5tYXBbaV0gK1xuXHRcdFx0XHRcdFwicHgpOyBcIjtcblx0XHRcdFx0dmFyIHN0eWxlXzMgPSBcIndpZHRoIDogXCIgKyB0aGlzLldJRFRIICsgXCJweDsgXCI7XG5cdFx0XHRcdHZhciBzdHlsZV80ID1cblx0XHRcdFx0XHRcImhlaWdodCA6IFwiICtcblx0XHRcdFx0XHR0aGlzLldJRFRIIC8gdGhpcy5NT0JJTEVfQVNQRUNUX1JBVElPICtcblx0XHRcdFx0XHRcInB4OyBcIjtcblx0XHRcdFx0dmFyIHN0eWxlXzUgPSBcIm1hcmdpbiA6IFwiICsgdGhpcy5NQVJHSU4gKyAncHg7XCI+JztcblxuXHRcdFx0XHR2YXIgc3R5bGUgPSBzdHlsZV8xICsgc3R5bGVfMiArIHN0eWxlXzMgKyBzdHlsZV80ICsgc3R5bGVfNTtcblxuXHRcdFx0XHR2YXIgZW5kID0gXCI8L2Rpdj5cIjtcblxuXHRcdFx0XHR2YXIgZ3JpZEl0ZW0gPSBncmlkRnJvbnQgKyBzdHlsZSArIGVuZDtcblx0XHRcdFx0dmFyIGJvZHlJdGVtID0gYm9keUZyb250ICsgc3R5bGUgKyBlbmQ7XG5cblx0XHRcdFx0Z3JpZEh0bWwucHVzaChncmlkSXRlbSk7XG5cdFx0XHRcdGJvZHlIdG1sLnB1c2goYm9keUl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0XHR2YXIgbGltYmVyR3JpZFZpZXdNb3ZlR3VpZGUgPVxuXHRcdFx0JzxkaXYgY2xhc3MgPSBcImxpbWJlckdyaWRWaWV3TW92ZUd1aWRlXCI+PC9kaXY+Jztcblx0XHR2YXIgbGltYmVyR3JpZFZpZXdIZWlnaHRBZGp1c3RHdWlkZSA9XG5cdFx0XHQnPGRpdiBjbGFzcyA9IFwibGltYmVyR3JpZFZpZXdIZWlnaHRBZGp1c3RHdWlkZVwiPjwvZGl2Pic7XG5cdFx0dmFyIGxpbWJlckdyaWRWaWV3QWRkSXRlbUd1aWRlID1cblx0XHRcdCc8ZGl2IGNsYXNzID0gXCJsaW1iZXJHcmlkVmlld0FkZEl0ZW1HdWlkZVwiPjwvZGl2Pic7XG5cdFx0dmFyIGxpbWJlckdyaWRWaWV3QWRkSXRlbU9uVG91Y2hIb2xkR3VpZGUgPVxuXHRcdFx0JzxkaXYgY2xhc3MgPSBcImxpbWJlckdyaWRWaWV3QWRkSXRlbU9uVG91Y2hIb2xkR3VpZGVcIj48L2Rpdj4nO1xuXHRcdGdyaWRIdG1sLnB1c2gobGltYmVyR3JpZFZpZXdNb3ZlR3VpZGUpO1xuXHRcdGdyaWRIdG1sLnB1c2gobGltYmVyR3JpZFZpZXdIZWlnaHRBZGp1c3RHdWlkZSk7XG5cdFx0Z3JpZEh0bWwucHVzaChsaW1iZXJHcmlkVmlld0FkZEl0ZW1HdWlkZSk7XG5cdFx0Z3JpZEh0bWwucHVzaChsaW1iZXJHcmlkVmlld0FkZEl0ZW1PblRvdWNoSG9sZEd1aWRlKTtcblxuXHRcdHRoaXMuJGJvZHlQc2V1ZG9FbC5pbm5lckhUTUwgPSBib2R5SHRtbC5qb2luKFwiXCIpO1xuXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLmluc2VydEFkamFjZW50SFRNTChcblx0XHRcdFwiYmVmb3JlZW5kXCIsXG5cdFx0XHRncmlkSHRtbC5qb2luKFwiXCIpXG5cdFx0KTtcblx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtcyA9IHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG5cdFx0XHRcImxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1cIlxuXHRcdCk7XG5cdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdCb2R5UHNldWRvSXRlbXMgPSB0aGlzLiRib2R5UHNldWRvRWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcblx0XHRcdFwibGltYmVyR3JpZFZpZXdCb2R5UHNldWRvSXRlbVwiXG5cdFx0KTtcblx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld01vdmVHdWlkZSA9IHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG5cdFx0XHRcImxpbWJlckdyaWRWaWV3TW92ZUd1aWRlXCJcblx0XHQpO1xuXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3SGVpZ2h0QWRqdXN0R3VpZGUgPSB0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxuXHRcdFx0XCJsaW1iZXJHcmlkVmlld0hlaWdodEFkanVzdEd1aWRlXCJcblx0XHQpO1xuXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3QWRkSXRlbUd1aWRlID0gdGhpcy4kbGltYmVyR3JpZFZpZXdbMF0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcblx0XHRcdFwibGltYmVyR3JpZFZpZXdBZGRJdGVtR3VpZGVcIlxuXHRcdCk7XG5cdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdBZGRJdGVtT25Ub3VjaEhvbGRHdWlkZSA9IHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG5cdFx0XHRcImxpbWJlckdyaWRWaWV3QWRkSXRlbU9uVG91Y2hIb2xkR3VpZGVcIlxuXHRcdCk7XG5cdH07XG5cblx0TGltYmVyR3JpZFZpZXcucHJvdG90eXBlLnJlbmRlckl0ZW1zID0gZnVuY3Rpb24oXG5cdFx0aXRlbXMsXG5cdFx0c2NhbGUgPSB0cnVlLFxuXHRcdHByb2Nlc3NUeXBlID0gXCJvbkRlbWFuZFwiXG5cdCkge1xuXHRcdHRoaXMudW5Jbml0aWFsaXplRXZlbnRzKCk7XG5cdFx0dmFyIHNjcm9sbFRvcCA9IHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLnNjcm9sbFRvcDtcblx0XHRpZiAoc2NhbGUgPT0gdHJ1ZSkge1xuXHRcdFx0dmFyIFdJRFRIX1NDQUxFX0ZBQ1RPUiA9IHRoaXMuV0lEVEhfU0NBTEVfRkFDVE9SO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgV0lEVEhfU0NBTEVfRkFDVE9SID0gMTtcblx0XHR9XG5cblx0XHR2YXIgY2xhc3NMaXN0ID0gW1wibGltYmVyR3JpZFZpZXdJdGVtXCJdO1xuXHRcdGlmICh0aGlzLm9wdGlvbnMuZWRpdGFibGUgPT0gdHJ1ZSkge1xuXHRcdFx0Y2xhc3NMaXN0LnB1c2goXCJsaW1iZXJHcmlkVmlld0l0ZW1FZGl0YWJsZVwiKTtcblx0XHR9XG5cblx0XHR2YXIgaHRtbCA9IFtdO1xuXG5cdFx0Ly8gZGV2IENvZGVcblx0XHR2YXIgdDAgPSBwZXJmb3JtYW5jZS5ub3coKTtcblx0XHQvLyBkZXYgQ29kZSBFTkRcblx0XHRpZiAoIXRoaXMuaXNNb2JpbGUoKSkge1xuXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdDb250YWluZXJbMF0ucmVtb3ZlQ2hpbGQoXG5cdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdXG5cdFx0XHQpO1xuXHRcdFx0dmFyIGxlbmd0aF8wID0gaXRlbXMubGVuZ3RoO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHRcdHRoaXMucG9zaXRpb25EYXRhW2l0ZW1zW2ldXS53aWR0aCAqPSBXSURUSF9TQ0FMRV9GQUNUT1I7XG5cdFx0XHRcdGlmICh0aGlzLnBvc2l0aW9uRGF0YVtpdGVtc1tpXV0ud2lkdGggPiB0aGlzLldJRFRIKSB7XG5cdFx0XHRcdFx0dGhpcy5wb3NpdGlvbkRhdGFbaXRlbXNbaV1dLndpZHRoID0gdGhpcy5XSURUSDtcblx0XHRcdFx0fVxuXHRcdFx0XHR2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdFx0dmFyIGF0dHJpYnV0ZSA9IGRvY3VtZW50LmNyZWF0ZUF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIik7XG5cdFx0XHRcdGF0dHJpYnV0ZS52YWx1ZSA9IGl0ZW1zW2ldO1xuXHRcdFx0XHRkaXYuc2V0QXR0cmlidXRlTm9kZShhdHRyaWJ1dGUpO1xuXG5cdFx0XHRcdGlmIChjbGFzc0xpc3QubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdGRpdi5jbGFzc0xpc3QuYWRkKGNsYXNzTGlzdFswXSk7XG5cdFx0XHRcdFx0ZGl2LmNsYXNzTGlzdC5hZGQoY2xhc3NMaXN0WzFdKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRkaXYuY2xhc3NMaXN0LmFkZChjbGFzc0xpc3RbMF0pO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0ZGl2LnN0eWxlLnRyYW5zZm9ybSA9XG5cdFx0XHRcdFx0XCJ0cmFuc2xhdGUoXCIgK1xuXHRcdFx0XHRcdCh0aGlzLnBvc2l0aW9uRGF0YVtpdGVtc1tpXV0ueCAqPSBXSURUSF9TQ0FMRV9GQUNUT1IpICtcblx0XHRcdFx0XHRcInB4LCBcIiArXG5cdFx0XHRcdFx0KHRoaXMucG9zaXRpb25EYXRhW2l0ZW1zW2ldXS55ICo9IFdJRFRIX1NDQUxFX0ZBQ1RPUikgK1xuXHRcdFx0XHRcdFwicHgpXCI7XG5cdFx0XHRcdGRpdi5zdHlsZS53aWR0aCA9IHRoaXMucG9zaXRpb25EYXRhW2l0ZW1zW2ldXS53aWR0aCArIFwicHhcIjtcblx0XHRcdFx0ZGl2LnN0eWxlLmhlaWdodCA9XG5cdFx0XHRcdFx0KHRoaXMucG9zaXRpb25EYXRhW2l0ZW1zW2ldXS5oZWlnaHQgKj0gV0lEVEhfU0NBTEVfRkFDVE9SKSArXG5cdFx0XHRcdFx0XCJweFwiO1xuXG5cdFx0XHRcdHZhciB1c2VyRGF0YSA9IHRoaXMuY2FsbGJhY2tzLmdldEl0ZW1SZW5kZXJEYXRhQ2FsbGJhY2soXG5cdFx0XHRcdFx0aXRlbXNbaV0sXG5cdFx0XHRcdFx0dGhpcy5wb3NpdGlvbkRhdGFbaXRlbXNbaV1dLndpZHRoLFxuXHRcdFx0XHRcdHRoaXMucG9zaXRpb25EYXRhW2l0ZW1zW2ldXS5oZWlnaHQsXG5cdFx0XHRcdFx0cHJvY2Vzc1R5cGVcblx0XHRcdFx0KTtcblx0XHRcdFx0aWYgKHR5cGVvZiB1c2VyRGF0YSA9PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRcdFx0ZGl2LmlubmVySFRNTCA9IHVzZXJEYXRhO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGRpdi5hcHBlbmRDaGlsZCh1c2VyRGF0YSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdJdGVtc1tpdGVtc1tpXV0gPT0gdW5kZWZpbmVkIHx8XG5cdFx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdJdGVtc1tpdGVtc1tpXV0gPT0gbnVsbFxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5hcHBlbmRDaGlsZChkaXYpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLnJlcGxhY2VDaGlsZChcblx0XHRcdFx0XHRcdGRpdixcblx0XHRcdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3SXRlbXNbaXRlbXNbaV1dXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdDb250YWluZXJbMF0uYXBwZW5kQ2hpbGQoXG5cdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0NvbnRhaW5lclswXS5yZW1vdmVDaGlsZChcblx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdbMF1cblx0XHRcdCk7XG5cdFx0XHR2YXIgbGVuZ3RoXzAgPSBpdGVtcy5sZW5ndGg7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF8wOyBpKyspIHtcblx0XHRcdFx0dmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRcdHZhciBhdHRyaWJ1dGUgPSBkb2N1bWVudC5jcmVhdGVBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIpO1xuXHRcdFx0XHRhdHRyaWJ1dGUudmFsdWUgPSBpdGVtc1tpXTtcblx0XHRcdFx0ZGl2LnNldEF0dHJpYnV0ZU5vZGUoYXR0cmlidXRlKTtcblxuXHRcdFx0XHRkaXYuY2xhc3NMaXN0LmFkZChcImxpbWJlckdyaWRWaWV3SXRlbVwiKTtcblx0XHRcdFx0ZGl2LnN0eWxlLnRyYW5zZm9ybSA9XG5cdFx0XHRcdFx0XCJ0cmFuc2xhdGUoXCIgK1xuXHRcdFx0XHRcdDAgK1xuXHRcdFx0XHRcdFwicHgsIFwiICtcblx0XHRcdFx0XHQodGhpcy5XSURUSCAvIHRoaXMuTU9CSUxFX0FTUEVDVF9SQVRJTyArXG5cdFx0XHRcdFx0XHR0aGlzLmdldE1hcmdpbkF0UG9pbnQoXG5cdFx0XHRcdFx0XHRcdHRoaXMuc2VyaWFsaXplZFBvc2l0aW9uRGF0YS5tYXBbaXRlbXNbaV1dXG5cdFx0XHRcdFx0XHQpKSAqXG5cdFx0XHRcdFx0XHR0aGlzLnNlcmlhbGl6ZWRQb3NpdGlvbkRhdGEubWFwW2l0ZW1zW2ldXSArXG5cdFx0XHRcdFx0XCJweClcIjtcblx0XHRcdFx0ZGl2LnN0eWxlLndpZHRoID0gdGhpcy5XSURUSCArIFwicHhcIjtcblx0XHRcdFx0ZGl2LnN0eWxlLmhlaWdodCA9IHRoaXMuV0lEVEggLyB0aGlzLk1PQklMRV9BU1BFQ1RfUkFUSU8gKyBcInB4XCI7XG5cblx0XHRcdFx0dmFyIHVzZXJEYXRhID0gdGhpcy5jYWxsYmFja3MuZ2V0SXRlbVJlbmRlckRhdGFDYWxsYmFjayhcblx0XHRcdFx0XHRpdGVtc1tpXSxcblx0XHRcdFx0XHR0aGlzLldJRFRILFxuXHRcdFx0XHRcdHRoaXMuV0lEVEggLyB0aGlzLk1PQklMRV9BU1BFQ1RfUkFUSU8sXG5cdFx0XHRcdFx0cHJvY2Vzc1R5cGVcblx0XHRcdFx0KTtcblx0XHRcdFx0aWYgKHR5cGVvZiB1c2VyRGF0YSA9PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRcdFx0ZGl2LmlubmVySFRNTCA9IHVzZXJEYXRhO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGRpdi5hcHBlbmRDaGlsZCh1c2VyRGF0YSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdJdGVtc1tpdGVtc1tpXV0gPT0gdW5kZWZpbmVkIHx8XG5cdFx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdJdGVtc1tpdGVtc1tpXV0gPT0gbnVsbFxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5hcHBlbmRDaGlsZChkaXYpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLnJlcGxhY2VDaGlsZChcblx0XHRcdFx0XHRcdGRpdixcblx0XHRcdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3SXRlbXNbaXRlbXNbaV1dXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdDb250YWluZXJbMF0uYXBwZW5kQ2hpbGQoXG5cdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdC8vIGRldiBDb2RlXG5cdFx0dmFyIHQxID0gcGVyZm9ybWFuY2Uubm93KCk7XG5cdFx0Y29uc29sZS5sb2codDApO1xuXHRcdGNvbnNvbGUubG9nKHQxKTtcblx0XHRjb25zb2xlLmxvZyh0MSAtIHQwKTtcblx0XHQvLyBkZXYgQ29kZSBFTkRcblx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0l0ZW1zID0gdGhpcy4kbGltYmVyR3JpZFZpZXdbMF0ucXVlcnlTZWxlY3RvckFsbChcblx0XHRcdFwiLmxpbWJlckdyaWRWaWV3SXRlbVwiXG5cdFx0KTtcblxuXHRcdHRoaXMucmVuZGVyUHNldWRvSXRlbXMoaXRlbXMpO1xuXG5cdFx0dGhpcy5pbml0aWFsaXplVmFyaWFibGVzKCk7XG5cdFx0dGhpcy5pbml0aWFsaXplRXZlbnRzKCk7XG5cblx0XHR2YXIgcmVuZGVyRGV0YWlscyA9IHtcblx0XHRcdGl0ZW1zOiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGl0ZW1zKSksXG5cdFx0XHRzY2FsZTogc2NhbGUsXG5cdFx0XHRwcm9jZXNzVHlwZTogcHJvY2Vzc1R5cGVcblx0XHR9O1xuXG5cdFx0aWYgKFxuXHRcdFx0dGhpcy5jYWxsYmFja3MuaXRlbXNSZW5kZXJDb21wbGV0ZSAhPSB1bmRlZmluZWQgJiZcblx0XHRcdHRoaXMuY2FsbGJhY2tzLml0ZW1zUmVuZGVyQ29tcGxldGUgIT0gbnVsbCAmJlxuXHRcdFx0cHJvY2Vzc1R5cGUgIT0gXCJhZGRJdGVtc1wiICYmXG5cdFx0XHRwcm9jZXNzVHlwZSAhPSBcInJlc2l6ZUl0ZW1zXCIgJiZcblx0XHRcdHByb2Nlc3NUeXBlICE9IFwicmVtb3ZlSXRlbXNcIiAmJlxuXHRcdFx0cHJvY2Vzc1R5cGUgIT0gXCJhZGRJdGVtSW50ZXJhY3RpdmVcIlxuXHRcdCkge1xuXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdbMF0uc2Nyb2xsVG9wID0gc2Nyb2xsVG9wO1xuXHRcdFx0dGhpcy5jYWxsYmFja3MuaXRlbXNSZW5kZXJDb21wbGV0ZShcblx0XHRcdFx0cmVuZGVyRGV0YWlscy5pdGVtcyxcblx0XHRcdFx0c2NhbGUsXG5cdFx0XHRcdHByb2Nlc3NUeXBlLFxuXHRcdFx0XHRzY3JvbGxUb3Bcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlbmRlckRldGFpbHM7XG5cdH07XG5cblx0TGltYmVyR3JpZFZpZXcucHJvdG90eXBlLnJlbmRlclBzZXVkb0l0ZW1zID0gZnVuY3Rpb24oaXRlbXMpIHtcblx0XHR2YXIgZ3JpZEh0bWwgPSBbXTtcblx0XHR2YXIgYm9keUh0bWwgPSBbXTtcblxuXHRcdGlmICghdGhpcy5pc01vYmlsZSgpKSB7XG5cdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0NvbnRhaW5lclswXS5yZW1vdmVDaGlsZChcblx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdbMF1cblx0XHRcdCk7XG5cdFx0XHR0aGlzLiRib2R5WzBdLnJlbW92ZUNoaWxkKHRoaXMuJGJvZHlQc2V1ZG9FbCk7XG5cdFx0XHR2YXIgbGVuZ3RoXzAgPSBpdGVtcy5sZW5ndGg7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF8wOyBpKyspIHtcblx0XHRcdFx0dmFyIGRpdkdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0XHR2YXIgYXR0cmlidXRlR3JpZCA9IGRvY3VtZW50LmNyZWF0ZUF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIik7XG5cdFx0XHRcdGF0dHJpYnV0ZUdyaWQudmFsdWUgPSBpdGVtc1tpXTtcblx0XHRcdFx0ZGl2R3JpZC5zZXRBdHRyaWJ1dGVOb2RlKGF0dHJpYnV0ZUdyaWQpO1xuXHRcdFx0XHRkaXZHcmlkLmNsYXNzTGlzdC5hZGQoXCJsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtXCIpO1xuXHRcdFx0XHRkaXZHcmlkLnN0eWxlLnRyYW5zZm9ybSA9XG5cdFx0XHRcdFx0XCJ0cmFuc2xhdGUoXCIgK1xuXHRcdFx0XHRcdHRoaXMucG9zaXRpb25EYXRhW2l0ZW1zW2ldXS54ICtcblx0XHRcdFx0XHRcInB4LCBcIiArXG5cdFx0XHRcdFx0dGhpcy5wb3NpdGlvbkRhdGFbaXRlbXNbaV1dLnkgK1xuXHRcdFx0XHRcdFwicHgpXCI7XG5cdFx0XHRcdGRpdkdyaWQuc3R5bGUud2lkdGggPSB0aGlzLnBvc2l0aW9uRGF0YVtpdGVtc1tpXV0ud2lkdGggKyBcInB4XCI7XG5cdFx0XHRcdGRpdkdyaWQuc3R5bGUuaGVpZ2h0ID1cblx0XHRcdFx0XHR0aGlzLnBvc2l0aW9uRGF0YVtpdGVtc1tpXV0uaGVpZ2h0ICsgXCJweFwiO1xuXG5cdFx0XHRcdHZhciBkaXZCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdFx0dmFyIGF0dHJpYnV0ZUJvZHkgPSBkb2N1bWVudC5jcmVhdGVBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIpO1xuXHRcdFx0XHRhdHRyaWJ1dGVCb2R5LnZhbHVlID0gaXRlbXNbaV07XG5cdFx0XHRcdGRpdkJvZHkuc2V0QXR0cmlidXRlTm9kZShhdHRyaWJ1dGVCb2R5KTtcblx0XHRcdFx0ZGl2Qm9keS5jbGFzc0xpc3QuYWRkKFwibGltYmVyR3JpZFZpZXdCb2R5UHNldWRvSXRlbVwiKTtcblx0XHRcdFx0ZGl2Qm9keS5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZShcIiArIDAgKyBcInB4LCBcIiArIDAgKyBcInB4KVwiO1xuXHRcdFx0XHRkaXZCb2R5LnN0eWxlLndpZHRoID0gdGhpcy5wb3NpdGlvbkRhdGFbaXRlbXNbaV1dLndpZHRoICsgXCJweFwiO1xuXHRcdFx0XHRkaXZCb2R5LnN0eWxlLmhlaWdodCA9XG5cdFx0XHRcdFx0dGhpcy5wb3NpdGlvbkRhdGFbaXRlbXNbaV1dLmhlaWdodCArIFwicHhcIjtcblxuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbXNbaXRlbXNbaV1dID09XG5cdFx0XHRcdFx0XHR1bmRlZmluZWQgfHxcblx0XHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtc1tpdGVtc1tpXV0gPT0gbnVsbFxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5hcHBlbmRDaGlsZChkaXZHcmlkKTtcblx0XHRcdFx0XHR0aGlzLiRib2R5UHNldWRvRWwuYXBwZW5kQ2hpbGQoZGl2Qm9keSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdbMF0ucmVwbGFjZUNoaWxkKFxuXHRcdFx0XHRcdFx0ZGl2R3JpZCxcblx0XHRcdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1zW2l0ZW1zW2ldXVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0dGhpcy4kYm9keVBzZXVkb0VsLnJlcGxhY2VDaGlsZChcblx0XHRcdFx0XHRcdGRpdkJvZHksXG5cdFx0XHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0JvZHlQc2V1ZG9JdGVtc1tpdGVtc1tpXV1cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0NvbnRhaW5lclswXS5hcHBlbmRDaGlsZChcblx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdbMF1cblx0XHRcdCk7XG5cdFx0XHR0aGlzLiRib2R5WzBdLmFwcGVuZENoaWxkKHRoaXMuJGJvZHlQc2V1ZG9FbCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3Q29udGFpbmVyWzBdLnJlbW92ZUNoaWxkKFxuXHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld1swXVxuXHRcdFx0KTtcblx0XHRcdHRoaXMuJGJvZHlbMF0ucmVtb3ZlQ2hpbGQodGhpcy4kYm9keVBzZXVkb0VsKTtcblx0XHRcdHZhciBsZW5ndGhfMCA9IGl0ZW1zLmxlbmd0aDtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHRcdFx0XHR2YXIgZGl2R3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRcdHZhciBhdHRyaWJ1dGVHcmlkID0gZG9jdW1lbnQuY3JlYXRlQXR0cmlidXRlKFwiZGF0YS1pbmRleFwiKTtcblx0XHRcdFx0YXR0cmlidXRlR3JpZC52YWx1ZSA9IGl0ZW1zW2ldO1xuXHRcdFx0XHRkaXZHcmlkLnNldEF0dHJpYnV0ZU5vZGUoYXR0cmlidXRlR3JpZCk7XG5cdFx0XHRcdGRpdkdyaWQuY2xhc3NMaXN0LmFkZChcImxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1cIik7XG5cdFx0XHRcdGRpdkdyaWQuc3R5bGUudHJhbnNmb3JtID1cblx0XHRcdFx0XHRcInRyYW5zbGF0ZShcIiArXG5cdFx0XHRcdFx0MCArXG5cdFx0XHRcdFx0XCJweCwgXCIgK1xuXHRcdFx0XHRcdCh0aGlzLldJRFRIIC8gdGhpcy5NT0JJTEVfQVNQRUNUX1JBVElPICtcblx0XHRcdFx0XHRcdHRoaXMuZ2V0TWFyZ2luQXRQb2ludChcblx0XHRcdFx0XHRcdFx0dGhpcy5zZXJpYWxpemVkUG9zaXRpb25EYXRhLm1hcFtpXVxuXHRcdFx0XHRcdFx0KSkgKlxuXHRcdFx0XHRcdFx0dGhpcy5zZXJpYWxpemVkUG9zaXRpb25EYXRhLm1hcFtpXSArXG5cdFx0XHRcdFx0XCJweClcIjtcblx0XHRcdFx0ZGl2R3JpZC5zdHlsZS53aWR0aCA9IHRoaXMuV0lEVEggKyBcInB4XCI7XG5cdFx0XHRcdGRpdkdyaWQuc3R5bGUuaGVpZ2h0ID1cblx0XHRcdFx0XHR0aGlzLldJRFRIIC8gdGhpcy5NT0JJTEVfQVNQRUNUX1JBVElPICsgXCJweFwiO1xuXG5cdFx0XHRcdHZhciBkaXZCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdFx0dmFyIGF0dHJpYnV0ZUJvZHkgPSBkb2N1bWVudC5jcmVhdGVBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIpO1xuXHRcdFx0XHRhdHRyaWJ1dGVCb2R5LnZhbHVlID0gaXRlbXNbaV07XG5cdFx0XHRcdGRpdkJvZHkuc2V0QXR0cmlidXRlTm9kZShhdHRyaWJ1dGVCb2R5KTtcblx0XHRcdFx0ZGl2Qm9keS5jbGFzc0xpc3QuYWRkKFwibGltYmVyR3JpZFZpZXdCb2R5UHNldWRvSXRlbVwiKTtcblx0XHRcdFx0ZGl2Qm9keS5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZShcIiArIDAgKyBcInB4LCBcIiArIDAgKyBcInB4KVwiO1xuXHRcdFx0XHRkaXZCb2R5LnN0eWxlLndpZHRoID0gdGhpcy5XSURUSCArIFwicHhcIjtcblx0XHRcdFx0ZGl2Qm9keS5zdHlsZS5oZWlnaHQgPVxuXHRcdFx0XHRcdHRoaXMuV0lEVEggLyB0aGlzLk1PQklMRV9BU1BFQ1RfUkFUSU8gKyBcInB4XCI7XG5cblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1zW2l0ZW1zW2ldXSA9PVxuXHRcdFx0XHRcdFx0dW5kZWZpbmVkIHx8XG5cdFx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbXNbaXRlbXNbaV1dID09IG51bGxcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdbMF0uYXBwZW5kQ2hpbGQoZGl2R3JpZCk7XG5cdFx0XHRcdFx0dGhpcy4kYm9keVBzZXVkb0VsLmFwcGVuZENoaWxkKGRpdkJvZHkpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLnJlcGxhY2VDaGlsZChcblx0XHRcdFx0XHRcdGRpdkdyaWQsXG5cdFx0XHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtc1tpdGVtc1tpXV1cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdHRoaXMuJGJvZHlQc2V1ZG9FbC5yZXBsYWNlQ2hpbGQoXG5cdFx0XHRcdFx0XHRkaXZCb2R5LFxuXHRcdFx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdCb2R5UHNldWRvSXRlbXNbaXRlbXNbaV1dXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdDb250YWluZXJbMF0uYXBwZW5kQ2hpbGQoXG5cdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdXG5cdFx0XHQpO1xuXHRcdFx0dGhpcy4kYm9keVswXS5hcHBlbmRDaGlsZCh0aGlzLiRib2R5UHNldWRvRWwpO1xuXHRcdH1cblxuXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1zID0gdGhpcy4kbGltYmVyR3JpZFZpZXdbMF0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcblx0XHRcdFwibGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbVwiXG5cdFx0KTtcblx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0JvZHlQc2V1ZG9JdGVtcyA9IHRoaXMuJGJvZHlQc2V1ZG9FbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxuXHRcdFx0XCJsaW1iZXJHcmlkVmlld0JvZHlQc2V1ZG9JdGVtXCJcblx0XHQpO1xuXHR9O1xuXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFJFTkRFUkVSUyBFTkQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEFERCBPUiBSRU1PVkUgSVRFTVMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5cdExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5yZW1vdmVJdGVtcyA9IGZ1bmN0aW9uKGl0ZW1zSW5kaWNlcykge1xuXHRcdHRoaXMudW5Jbml0aWFsaXplRXZlbnRzKCk7XG5cblx0XHR2YXIgc2Nyb2xsVG9wID0gdGhpcy4kbGltYmVyR3JpZFZpZXdbMF0uc2Nyb2xsVG9wO1xuXG5cdFx0dmFyIGl0ZW1zVG9SZW5kZXIgPSBbXTtcblx0XHR2YXIgbGVuZ3RoXzAgPSB0aGlzLnBvc2l0aW9uRGF0YS5sZW5ndGggLSAxO1xuXHRcdGZvciAodmFyIGkgPSBsZW5ndGhfMDsgaSA+PSAwOyBpLS0pIHtcblx0XHRcdHZhciBpbmRleCA9IGk7XG5cblx0XHRcdGl0ZW1zVG9SZW5kZXIucHVzaChsZW5ndGhfMCAtIGkpO1xuXHRcdH1cblxuXHRcdGl0ZW1zSW5kaWNlcy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHJldHVybiBOdW1iZXIoYSkgLSBOdW1iZXIoYik7XG5cdFx0fSk7XG5cdFx0dmFyIGxlbmd0aF8wID0gaXRlbXNJbmRpY2VzLmxlbmd0aCAtIDE7XG5cdFx0Zm9yICh2YXIgaSA9IGxlbmd0aF8wOyBpID49IDA7IGktLSkge1xuXHRcdFx0dmFyIGluZGV4ID0gaXRlbXNJbmRpY2VzW2ldO1xuXHRcdFx0dGhpcy5wb3NpdGlvbkRhdGEuc3BsaWNlKGluZGV4LCAxKTtcblxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzLiRsaW1iZXJHcmlkVmlld0l0ZW1zW2luZGV4XTtcblx0XHRcdHZhciBwc2V1ZG9HcmlkSXRlbSA9IHRoaXMuJGxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1zW2luZGV4XTtcblx0XHRcdHZhciBwc2V1ZG9Cb2R5SXRlbSA9IHRoaXMuJGxpbWJlckdyaWRWaWV3Qm9keVBzZXVkb0l0ZW1zW2luZGV4XTtcblxuXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdbMF0ucmVtb3ZlQ2hpbGQoaXRlbSk7XG5cdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5yZW1vdmVDaGlsZChwc2V1ZG9HcmlkSXRlbSk7XG5cdFx0XHR0aGlzLiRib2R5UHNldWRvRWwucmVtb3ZlQ2hpbGQocHNldWRvQm9keUl0ZW0pO1xuXG5cdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0l0ZW1zID0gdGhpcy4kbGltYmVyR3JpZFZpZXdbMF0ucXVlcnlTZWxlY3RvckFsbChcblx0XHRcdFx0XCIubGltYmVyR3JpZFZpZXdJdGVtXCJcblx0XHRcdCk7XG5cdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtcyA9IHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG5cdFx0XHRcdFwibGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbVwiXG5cdFx0XHQpO1xuXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdCb2R5UHNldWRvSXRlbXMgPSB0aGlzLiRib2R5UHNldWRvRWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcblx0XHRcdFx0XCJsaW1iZXJHcmlkVmlld0JvZHlQc2V1ZG9JdGVtXCJcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0aXRlbXNUb1JlbmRlci5zcGxpY2UodGhpcy5wb3NpdGlvbkRhdGEubGVuZ3RoKTtcblxuXHRcdGlmICh0aGlzLmlzTW9iaWxlKCkpIHtcblx0XHRcdHRoaXMuc2VyaWFsaXplZFBvc2l0aW9uRGF0YSA9IHRoaXMuZ2V0Um93U2VxdWVuY2UodHJ1ZSk7XG5cdFx0fVxuXG5cdFx0dGhpcy5yZW5kZXJJdGVtcyhpdGVtc1RvUmVuZGVyLCBmYWxzZSwgXCJyZW1vdmVJdGVtc1wiKTtcblxuXHRcdGlmIChcblx0XHRcdHRoaXMuY2FsbGJhY2tzLnJlbW92ZUNvbXBsZXRlQ2FsbGJhY2sgIT0gdW5kZWZpbmVkICYmXG5cdFx0XHR0aGlzLmNhbGxiYWNrcy5yZW1vdmVDb21wbGV0ZUNhbGxiYWNrICE9IG51bGxcblx0XHQpIHtcblx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLnNjcm9sbFRvcCA9IHNjcm9sbFRvcDtcblx0XHRcdHRoaXMuY2FsbGJhY2tzLnJlbW92ZUNvbXBsZXRlQ2FsbGJhY2soaXRlbXNJbmRpY2VzKTtcblx0XHR9XG5cdH07XG5cblx0TGltYmVyR3JpZFZpZXcucHJvdG90eXBlLmFkZEl0ZW1zID0gZnVuY3Rpb24oXG5cdFx0aG93TWFueSA9IDEsXG5cdFx0aXRlbVdpZHRoID0gMTAwLFxuXHRcdGl0ZW1IZWlnaHQgPSAxMDBcblx0KSB7XG5cdFx0aWYgKGhvd01hbnkgPT0gMCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmIChpdGVtV2lkdGggPiB0aGlzLldJRFRIKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dmFyIHN0YXJ0aW5nWSA9IDA7XG5cdFx0dmFyIGxlbmd0aF8wID0gdGhpcy5wb3NpdGlvbkRhdGEubGVuZ3RoO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHR0aGlzLnBvc2l0aW9uRGF0YVtpXS55ICsgdGhpcy5wb3NpdGlvbkRhdGFbaV0uaGVpZ2h0ID5cblx0XHRcdFx0c3RhcnRpbmdZXG5cdFx0XHQpIHtcblx0XHRcdFx0c3RhcnRpbmdZID1cblx0XHRcdFx0XHR0aGlzLnBvc2l0aW9uRGF0YVtpXS55ICsgdGhpcy5wb3NpdGlvbkRhdGFbaV0uaGVpZ2h0O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRzdGFydGluZ1kgPSBzdGFydGluZ1kgKyB0aGlzLmdldE1hcmdpbkF0UG9pbnQoc3RhcnRpbmdZKTtcblxuXHRcdHZhciBpdGVtcyA9IFtdO1xuXG5cdFx0dmFyIHNjcm9sbFRvUG9zaXRpb24gPSBzdGFydGluZ1k7XG5cblx0XHR2YXIgcmVtYWluaW5nSXRlbXMgPSBob3dNYW55O1xuXHRcdHZhciByZW1haW5pbmdXaWR0aCA9IHRoaXMuV0lEVEg7XG5cdFx0d2hpbGUgKHJlbWFpbmluZ0l0ZW1zICE9IDApIHtcblx0XHRcdHZhciBzdGFydGluZ1ggPSAwO1xuXHRcdFx0d2hpbGUgKFxuXHRcdFx0XHRyZW1haW5pbmdXaWR0aCA+IGl0ZW1XaWR0aCArIHRoaXMuZ2V0TWFyZ2luQXRQb2ludChzdGFydGluZ1gpICYmXG5cdFx0XHRcdHJlbWFpbmluZ0l0ZW1zICE9IDBcblx0XHRcdCkge1xuXHRcdFx0XHR2YXIgaXRlbSA9IHtcblx0XHRcdFx0XHR4OiB0aGlzLmdldE1hcmdpbkF0UG9pbnQoc3RhcnRpbmdYKSArIHN0YXJ0aW5nWCxcblx0XHRcdFx0XHR5OiBzdGFydGluZ1ksXG5cdFx0XHRcdFx0d2lkdGg6IGl0ZW1XaWR0aCxcblx0XHRcdFx0XHRoZWlnaHQ6IGl0ZW1IZWlnaHRcblx0XHRcdFx0fTtcblxuXHRcdFx0XHRyZW1haW5pbmdXaWR0aCA9XG5cdFx0XHRcdFx0cmVtYWluaW5nV2lkdGggLVxuXHRcdFx0XHRcdGl0ZW1XaWR0aCAtXG5cdFx0XHRcdFx0dGhpcy5nZXRNYXJnaW5BdFBvaW50KHN0YXJ0aW5nWCk7XG5cdFx0XHRcdHN0YXJ0aW5nWCA9XG5cdFx0XHRcdFx0c3RhcnRpbmdYICsgdGhpcy5nZXRNYXJnaW5BdFBvaW50KHN0YXJ0aW5nWCkgKyBpdGVtV2lkdGg7XG5cdFx0XHRcdHJlbWFpbmluZ0l0ZW1zLS07XG5cdFx0XHRcdGl0ZW1zLnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0XHRyZW1haW5pbmdXaWR0aCA9IHRoaXMuV0lEVEg7XG5cdFx0XHRzdGFydGluZ1kgPSBzdGFydGluZ1kgKyBpdGVtSGVpZ2h0ICsgdGhpcy5NQVJHSU47XG5cdFx0fVxuXG5cdFx0dmFyIHNjcm9sbEhlaWdodCA9IHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLnNjcm9sbEhlaWdodDtcblxuXHRcdHZhciByZW5kZXJEZXRhaWxzID0gdGhpcy5hZGRJdGVtc0F0UG9zaXRpb25zKGl0ZW1zLCBmYWxzZSwgXCJhZGRJdGVtc1wiKTtcblxuXHRcdGlmICghdGhpcy5pc01vYmlsZSgpKSB7XG5cdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5zY3JvbGxUb3AgPSBzY3JvbGxUb1Bvc2l0aW9uO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5zY3JvbGxUb3AgPSBzY3JvbGxIZWlnaHQ7XG5cdFx0fVxuXG5cdFx0aWYgKFxuXHRcdFx0dGhpcy5jYWxsYmFja3MuYWRkQ29tcGxldGVDYWxsYmFjayAhPSB1bmRlZmluZWQgJiZcblx0XHRcdHRoaXMuY2FsbGJhY2tzLmFkZENvbXBsZXRlQ2FsbGJhY2sgIT0gbnVsbFxuXHRcdCkge1xuXHRcdFx0dGhpcy5jYWxsYmFja3MuYWRkQ29tcGxldGVDYWxsYmFjayhcblx0XHRcdFx0cmVuZGVyRGV0YWlscy5pdGVtcyxcblx0XHRcdFx0aXRlbVdpZHRoLFxuXHRcdFx0XHRpdGVtSGVpZ2h0LFxuXHRcdFx0XHRcImFkZEl0ZW1zXCJcblx0XHRcdCk7XG5cdFx0fVxuXHR9O1xuXG5cdExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5hZGRJdGVtc0F0UG9zaXRpb25zID0gZnVuY3Rpb24oXG5cdFx0aXRlbXMsXG5cdFx0c2NhbGUgPSB0cnVlLFxuXHRcdHByb2Nlc3NUeXBlID0gXCJvbkRlbWFuZFwiXG5cdCkge1xuXHRcdHZhciBhZGRBcnJheSA9IFtdO1xuXHRcdHZhciBzdGFydGluZ0luZGV4ID0gdGhpcy5wb3NpdGlvbkRhdGEubGVuZ3RoO1xuXG5cdFx0dmFyIGxlbmd0aF8wID0gaXRlbXMubGVuZ3RoO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHRcdFx0YWRkQXJyYXkucHVzaChzdGFydGluZ0luZGV4ICsgaSk7XG5cdFx0XHRpZiAodGhpcy5pc01vYmlsZSgpKSB7XG5cdFx0XHRcdHRoaXMuc2VyaWFsaXplZFBvc2l0aW9uRGF0YS5saXN0LnB1c2goc3RhcnRpbmdJbmRleCArIGkpO1xuXHRcdFx0XHR0aGlzLnNlcmlhbGl6ZWRQb3NpdGlvbkRhdGEubWFwW3N0YXJ0aW5nSW5kZXggKyBpXSA9XG5cdFx0XHRcdFx0dGhpcy5zZXJpYWxpemVkUG9zaXRpb25EYXRhLmxpc3QubGVuZ3RoIC0gMTtcblx0XHRcdH1cblx0XHRcdHRoaXMucG9zaXRpb25EYXRhLnB1c2goaXRlbXNbaV0pO1xuXHRcdH1cblxuXHRcdHZhciByZW5kZXJEZXRhaWxzID0gdGhpcy5yZW5kZXJJdGVtcyhhZGRBcnJheSwgc2NhbGUsIHByb2Nlc3NUeXBlKTtcblxuXHRcdHJldHVybiByZW5kZXJEZXRhaWxzO1xuXHR9O1xuXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEFERCBPUiBSRU1PVkUgSVRFTVMgRU5EIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEVWRU5UIElOSVRJQUxJWkVSUyBBTkQgVU5JTklUSUFMSVpFUlMgRU5EIC0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5cdExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5yZUluaXRpYWxpemVFdmVudHMgPSBmdW5jdGlvbigpIHtcblx0XHR0aGlzLnVuSW5pdGlhbGl6ZUV2ZW50cygpO1xuXHRcdHRoaXMuaW5pdGlhbGl6ZUV2ZW50cygpO1xuXHR9O1xuXG5cdExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5pbml0aWFsaXplVmFyaWFibGVzID0gZnVuY3Rpb24oKSB7fTtcblxuXHRMaW1iZXJHcmlkVmlldy5wcm90b3R5cGUuaW5pdGlhbGl6ZUV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmICh0aGlzLm9wdGlvbnMuZWRpdGFibGUgPT0gdHJ1ZSkge1xuXHRcdFx0aWYgKHRoaXMuaXNNb2JpbGUoKSA9PSBmYWxzZSkge1xuXHRcdFx0XHRpZiAodGhpcy5vcHRpb25zLmVuYWJsZUludGVyYWN0aXZlQWRkQW5kQ3V0ICE9IGZhbHNlKSB7XG5cdFx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdbMF0uYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdFx0XHRcdFwibW91c2Vkb3duXCIsXG5cdFx0XHRcdFx0XHR0aGlzLm9uTGltYmVyR3JpZE1vdXNlRG93bkZ1bmN0aW9uVmFyaWFibGVcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGlmICh0aGlzLm9wdGlvbnMuZW5hYmxlVG91Y2hJbnRlcmFjdGlvbiAhPSBmYWxzZSkge1xuXHRcdFx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdbMF0uYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdFx0XHRcdFx0XCJ0b3VjaHN0YXJ0XCIsXG5cdFx0XHRcdFx0XHRcdHRoaXMub25MaW1iZXJHcmlkVG91Y2hTdGFydEZ1bmN0aW9uVmFyaWFibGVcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHZhciBsZW5ndGhfMCA9IHRoaXMuJGxpbWJlckdyaWRWaWV3SXRlbXMubGVuZ3RoO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHRcdGlmICh0aGlzLmlzTW9iaWxlKCkgPT0gZmFsc2UpIHtcblx0XHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0l0ZW1zW2ldLmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcdFx0XHRcIm1vdXNlZG93blwiLFxuXHRcdFx0XHRcdFx0dGhpcy5vbkl0ZW1Nb3VzZURvd25GdW5jdGlvblZhcmlhYmxlXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRpZiAodGhpcy5vcHRpb25zLmVuYWJsZVRvdWNoSW50ZXJhY3Rpb24gIT0gZmFsc2UpIHtcblx0XHRcdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3SXRlbXNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdFx0XHRcdFx0XCJ0b3VjaHN0YXJ0XCIsXG5cdFx0XHRcdFx0XHRcdHRoaXMub25JdGVtVG91Y2hTdGFydEZ1bmN0aW9uVmFyaWFibGVcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdHRoaXMuY2FsbGJhY2tzLm9uSXRlbUNsaWNrQ2FsbGJhY2sgIT0gdW5kZWZpbmVkICYmXG5cdFx0XHRcdFx0dGhpcy5jYWxsYmFja3Mub25JdGVtQ2xpY2tDYWxsYmFjayAhPSBudWxsXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3SXRlbXNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdFx0XHRcdFwiY2xpY2tcIixcblx0XHRcdFx0XHRcdHRoaXMub25JdGVtQ2xpY2tGdW5jdGlvblZhcmlhYmxlXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHRMaW1iZXJHcmlkVmlldy5wcm90b3R5cGUudW5Jbml0aWFsaXplRXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYgKHRoaXMub3B0aW9ucy5lZGl0YWJsZSA9PSB0cnVlKSB7XG5cdFx0XHRpZiAodGhpcy4kbGltYmVyR3JpZFZpZXcgIT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcdFx0XCJtb3VzZWRvd25cIixcblx0XHRcdFx0XHR0aGlzLm9uTGltYmVyR3JpZE1vdXNlRG93bkZ1bmN0aW9uVmFyaWFibGVcblx0XHRcdFx0KTtcblx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdbMF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0XHRcdFx0XHRcInRvdWNoc3RhcnRcIixcblx0XHRcdFx0XHR0aGlzLm9uTGltYmVyR3JpZFRvdWNoU3RhcnRGdW5jdGlvblZhcmlhYmxlXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLiRsaW1iZXJHcmlkVmlld0l0ZW1zICE9IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR2YXIgbGVuZ3RoXzAgPSB0aGlzLiRsaW1iZXJHcmlkVmlld0l0ZW1zLmxlbmd0aDtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdJdGVtc1tpXS5yZW1vdmVFdmVudExpc3RlbmVyKFxuXHRcdFx0XHRcdFx0XCJtb3VzZWRvd25cIixcblx0XHRcdFx0XHRcdHRoaXMub25JdGVtTW91c2VEb3duRnVuY3Rpb25WYXJpYWJsZVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdJdGVtc1tpXS5yZW1vdmVFdmVudExpc3RlbmVyKFxuXHRcdFx0XHRcdFx0XCJ0b3VjaHN0YXJ0XCIsXG5cdFx0XHRcdFx0XHR0aGlzLm9uSXRlbVRvdWNoU3RhcnRGdW5jdGlvblZhcmlhYmxlXG5cdFx0XHRcdFx0KTtcblxuXHRcdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3SXRlbXNbaV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0XHRcdFx0XHRcdFwiY2xpY2tcIixcblx0XHRcdFx0XHRcdHRoaXMub25JdGVtQ2xpY2tGdW5jdGlvblZhcmlhYmxlXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHRMaW1iZXJHcmlkVmlldy5wcm90b3R5cGUuaW5pdGlhbGl6ZUl0ZW1Ub3VjaEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmICh0aGlzLiRsaW1iZXJHcmlkVmlld0l0ZW1zICE9IHVuZGVmaW5lZCkge1xuXHRcdFx0dmFyIGxlbmd0aF8wID0gdGhpcy4kbGltYmVyR3JpZFZpZXdJdGVtcy5sZW5ndGg7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF8wOyBpKyspIHtcblx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdJdGVtc1tpXS5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFx0XHRcdFwibW91c2Vkb3duXCIsXG5cdFx0XHRcdFx0dGhpcy5vbkl0ZW1Nb3VzZURvd25GdW5jdGlvblZhcmlhYmxlXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3SXRlbXNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdFx0XHRcInRvdWNoc3RhcnRcIixcblx0XHRcdFx0XHR0aGlzLm9uSXRlbVRvdWNoU3RhcnRGdW5jdGlvblZhcmlhYmxlXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS51bkluaXRpYWxpemVJdGVtVG91Y2hFdmVudHMgPSBmdW5jdGlvbigpIHtcblx0XHRpZiAodGhpcy4kbGltYmVyR3JpZFZpZXdJdGVtcyAhPSB1bmRlZmluZWQpIHtcblx0XHRcdHZhciBsZW5ndGhfMCA9IHRoaXMuJGxpbWJlckdyaWRWaWV3SXRlbXMubGVuZ3RoO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3SXRlbXNbaV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0XHRcdFx0XHRcIm1vdXNlZG93blwiLFxuXHRcdFx0XHRcdHRoaXMub25JdGVtTW91c2VEb3duRnVuY3Rpb25WYXJpYWJsZVxuXHRcdFx0XHQpO1xuXHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0l0ZW1zW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcdFx0XCJ0b3VjaHN0YXJ0XCIsXG5cdFx0XHRcdFx0dGhpcy5vbkl0ZW1Ub3VjaFN0YXJ0RnVuY3Rpb25WYXJpYWJsZVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBFVkVOVCBJTklUSUFMSVpFUlMgQU5EIFVOSU5JVElBTElaRVJTIEVORCAtLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXHRMaW1iZXJHcmlkVmlldy5wcm90b3R5cGUuaXNNb2JpbGUgPSBmdW5jdGlvbigpIHtcblx0XHQvLyBwcm9kdWN0aW9uXG5cdFx0cmV0dXJuIHdpbmRvdy5tYXRjaE1lZGlhKFxuXHRcdFx0XCJvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAzM3B4KSBhbmQgKG1pbi13aWR0aCA6IDFweClcIlxuXHRcdCkubWF0Y2hlcztcblx0XHQvLyBwcm9kdWN0aW9uIEVORFxuXHRcdC8vIHJldHVybiB3aW5kb3cubWF0Y2hNZWRpYShcIm9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkgYW5kIChtaW4td2lkdGggOiAxcHgpXCIpLm1hdGNoZXM7XG5cdFx0Ly8gcmV0dXJuIGZhbHNlO1xuXHRcdC8vIHJldHVybiB0cnVlO1xuXHR9O1xuXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gUE9TSVRJT05JTkcgTE9HSUMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5cdExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5yZXNpemVQbGFuZSA9IGZ1bmN0aW9uKGluZGV4LCB3aWR0aCwgaGVpZ2h0KSB7XG5cdFx0aWYgKHRoaXMucG9zaXRpb25EYXRhW2luZGV4XS54ICsgd2lkdGggPiB0aGlzLldJRFRIKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKHR5cGVvZiB3aWR0aCAhPSBcIm51bWJlclwiIHx8IHR5cGVvZiBoZWlnaHQgIT0gXCJudW1iZXJcIikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmICh3aWR0aCA8IDUwIHx8IGhlaWdodCA8IDUwKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0dmFyIGFsbEFmZmVjdGVkSXRlbXMgPSB0aGlzLmZpbmRBZmZlY3RlZEl0ZW1zT25SZXNpemUoXG5cdFx0XHRpbmRleCxcblx0XHRcdHdpZHRoLFxuXHRcdFx0aGVpZ2h0XG5cdFx0KTtcblxuXHRcdHZhciBpdGVtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnBvc2l0aW9uRGF0YVtpbmRleF0pKTtcblx0XHRpdGVtLndpZHRoID0gd2lkdGg7XG5cdFx0aXRlbS5oZWlnaHQgPSBoZWlnaHQ7XG5cdFx0dmFyIGZyZWVTcGFjZXMgPSB0aGlzLmZpbmRGcmVlU3BhY2VzKFxuXHRcdFx0aXRlbSxcblx0XHRcdGFsbEFmZmVjdGVkSXRlbXMuYWZmZWN0ZWRJdGVtc1xuXHRcdCk7XG5cblx0XHQvLyBOT1cgTUVSR0UgRlJFRSBTUEFDRVNcblx0XHRpdGVtLmRvTm90TWVyZ2VGbGFnID0gdHJ1ZTtcblx0XHR2YXIgbWVyZ2VkRnJlZVNwYWNlcyA9IHRoaXMubWVyZ2VGcmVlU3BhY2VzKGZyZWVTcGFjZXMsIFtpdGVtXSk7XG5cblx0XHR2YXIgYWZmZWN0ZWRJdGVtc0V4Y2VwdFNlbGZPYmplY3RzID0gW107XG5cdFx0dmFyIGxlbmd0aF8wID0gYWxsQWZmZWN0ZWRJdGVtcy5hZmZlY3RlZEl0ZW1zRXhjZXB0U2VsZi5sZW5ndGg7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHR2YXIgaW5kID0gYWxsQWZmZWN0ZWRJdGVtcy5hZmZlY3RlZEl0ZW1zRXhjZXB0U2VsZltpXTtcblx0XHRcdGFmZmVjdGVkSXRlbXNFeGNlcHRTZWxmT2JqZWN0c1tpXSA9IEpTT04ucGFyc2UoXG5cdFx0XHRcdEpTT04uc3RyaW5naWZ5KFxuXHRcdFx0XHRcdHRoaXMucG9zaXRpb25EYXRhW1xuXHRcdFx0XHRcdFx0YWxsQWZmZWN0ZWRJdGVtcy5hZmZlY3RlZEl0ZW1zRXhjZXB0U2VsZltpXVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0KVxuXHRcdFx0KTtcblx0XHRcdGFmZmVjdGVkSXRlbXNFeGNlcHRTZWxmT2JqZWN0c1tpXS5pbmRleCA9IGluZDtcblx0XHR9XG5cblx0XHR2YXIgZml0RGV0YWlscyA9IHRoaXMuZml0SXRlbXNJbnRvRnJlZVNwYWNlcyhcblx0XHRcdGFmZmVjdGVkSXRlbXNFeGNlcHRTZWxmT2JqZWN0cyxcblx0XHRcdEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkobWVyZ2VkRnJlZVNwYWNlcykpLFxuXHRcdFx0W2l0ZW1dXG5cdFx0KTtcblx0XHR2YXIgZml0dGVkSXRlbXMgPSBmaXREZXRhaWxzLnJlcG9zaXRpb25lZEl0ZW1zO1xuXG5cdFx0dmFyIHBvc2l0aW9uRGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5wb3NpdGlvbkRhdGEpKTtcblx0XHR2YXIgbGVuZ3RoXzAgPSBmaXR0ZWRJdGVtcy5sZW5ndGg7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHR2YXIgaW5kID0gZml0dGVkSXRlbXNbaV0uaW5kZXg7XG5cdFx0XHRwb3NpdGlvbkRhdGFbaW5kXS54ID0gZml0dGVkSXRlbXNbaV0ueDtcblx0XHRcdHBvc2l0aW9uRGF0YVtpbmRdLnkgPSBmaXR0ZWRJdGVtc1tpXS55O1xuXHRcdH1cblx0XHRwb3NpdGlvbkRhdGFbaW5kZXhdLndpZHRoID0gd2lkdGg7XG5cdFx0cG9zaXRpb25EYXRhW2luZGV4XS5oZWlnaHQgPSBoZWlnaHQ7XG5cblx0XHR2YXIgcmVtYWluaW5nSXRlbXMgPSBbXTtcblx0XHR2YXIgbGVuZ3RoXzAgPSBhbGxBZmZlY3RlZEl0ZW1zLmFmZmVjdGVkSXRlbXNFeGNlcHRTZWxmLmxlbmd0aDtcblx0XHR2YXIgbGVuZ3RoXzEgPSBmaXR0ZWRJdGVtcy5sZW5ndGg7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHR2YXIgZml0dGVkRmxhZyA9IGZhbHNlO1xuXHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBsZW5ndGhfMTsgaisrKSB7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRhbGxBZmZlY3RlZEl0ZW1zLmFmZmVjdGVkSXRlbXNFeGNlcHRTZWxmW2ldID09XG5cdFx0XHRcdFx0Zml0dGVkSXRlbXNbal0uaW5kZXhcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0Zml0dGVkRmxhZyA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChmaXR0ZWRGbGFnID09IGZhbHNlKSB7XG5cdFx0XHRcdHJlbWFpbmluZ0l0ZW1zLnB1c2goXG5cdFx0XHRcdFx0YWxsQWZmZWN0ZWRJdGVtcy5hZmZlY3RlZEl0ZW1zRXhjZXB0U2VsZltpXVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHZhciBwb3NpdGlvbkRhdGEgPSB0aGlzLmZpdFJlbWFpbmluZ0l0ZW1zKFxuXHRcdFx0cG9zaXRpb25EYXRhLFxuXHRcdFx0cmVtYWluaW5nSXRlbXMsXG5cdFx0XHRhbGxBZmZlY3RlZEl0ZW1zLFxuXHRcdFx0aW5kZXgsXG5cdFx0XHRKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGZpdERldGFpbHMpKVxuXHRcdCk7XG5cblx0XHR2YXIgbGVuZ3RoXzAgPSBwb3NpdGlvbkRhdGEubGVuZ3RoO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdJdGVtc1tpXS5zdHlsZS50cmFuc2Zvcm0gPVxuXHRcdFx0XHRcInRyYW5zbGF0ZShcIiArXG5cdFx0XHRcdHBvc2l0aW9uRGF0YVtpXS54ICtcblx0XHRcdFx0XCJweCwgXCIgK1xuXHRcdFx0XHRwb3NpdGlvbkRhdGFbaV0ueSArXG5cdFx0XHRcdFwicHgpXCI7XG5cdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0l0ZW1zW2ldLmNsYXNzTGlzdC5yZW1vdmUoXG5cdFx0XHRcdFwibGltYmVyR3JpZFZpZXdJdGVtRGVtb1wiLFxuXHRcdFx0XHRcImxpbWJlckdyaWRWaWV3SXRlbVJlc2l6aW5nU3RhdGVcIlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHR0aGlzLnBvc2l0aW9uRGF0YSA9IHBvc2l0aW9uRGF0YTtcblxuXHRcdHZhciBzY3JvbGxUb3AgPSB0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5zY3JvbGxUb3A7XG5cdFx0dGhpcy5yZW5kZXJJdGVtcyhbaW5kZXhdLCBmYWxzZSwgXCJyZXNpemVJdGVtc1wiKTtcblx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5zY3JvbGxUb3AgPSBzY3JvbGxUb3A7XG5cdH07XG5cblx0TGltYmVyR3JpZFZpZXcucHJvdG90eXBlLnJlc2l6ZVBsYW5lRGVtbyA9IGZ1bmN0aW9uKGluZGV4LCB3aWR0aCwgaGVpZ2h0KSB7XG5cdFx0aWYgKHRoaXMucG9zaXRpb25EYXRhW2luZGV4XS54ICsgd2lkdGggPiB0aGlzLldJRFRIKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKHR5cGVvZiB3aWR0aCAhPSBcIm51bWJlclwiIHx8IHR5cGVvZiBoZWlnaHQgIT0gXCJudW1iZXJcIikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmICh3aWR0aCA8IDUwIHx8IGhlaWdodCA8IDUwKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0dmFyIGxlbmd0aF8wID0gdGhpcy4kbGltYmVyR3JpZFZpZXdJdGVtcy5sZW5ndGg7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0l0ZW1zW2ldLnN0eWxlLnRyYW5zZm9ybSA9XG5cdFx0XHRcdFwidHJhbnNsYXRlKFwiICtcblx0XHRcdFx0dGhpcy5wb3NpdGlvbkRhdGFbaV0ueCArXG5cdFx0XHRcdFwicHgsIFwiICtcblx0XHRcdFx0dGhpcy5wb3NpdGlvbkRhdGFbaV0ueSArXG5cdFx0XHRcdFwicHgpXCI7XG5cdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0l0ZW1zW2ldLmNsYXNzTGlzdC5yZW1vdmUoXG5cdFx0XHRcdFwibGltYmVyR3JpZFZpZXdJdGVtRGVtb1wiXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdHZhciBhbGxBZmZlY3RlZEl0ZW1zID0gdGhpcy5maW5kQWZmZWN0ZWRJdGVtc09uUmVzaXplKFxuXHRcdFx0aW5kZXgsXG5cdFx0XHR3aWR0aCxcblx0XHRcdGhlaWdodFxuXHRcdCk7XG5cblx0XHR2YXIgaXRlbSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5wb3NpdGlvbkRhdGFbaW5kZXhdKSk7XG5cdFx0aXRlbS53aWR0aCA9IHdpZHRoO1xuXHRcdGl0ZW0uaGVpZ2h0ID0gaGVpZ2h0O1xuXHRcdHZhciBmcmVlU3BhY2VzID0gdGhpcy5maW5kRnJlZVNwYWNlcyhcblx0XHRcdGl0ZW0sXG5cdFx0XHRhbGxBZmZlY3RlZEl0ZW1zLmFmZmVjdGVkSXRlbXNcblx0XHQpO1xuXG5cdFx0Ly8gTk9XIE1FUkdFIEZSRUUgU1BBQ0VTXG5cdFx0aXRlbS5kb05vdE1lcmdlRmxhZyA9IHRydWU7XG5cdFx0dmFyIG1lcmdlZEZyZWVTcGFjZXMgPSB0aGlzLm1lcmdlRnJlZVNwYWNlcyhmcmVlU3BhY2VzLCBbaXRlbV0pO1xuXG5cdFx0dmFyIGFmZmVjdGVkSXRlbXNFeGNlcHRTZWxmT2JqZWN0cyA9IFtdO1xuXHRcdHZhciBsZW5ndGhfMCA9IGFsbEFmZmVjdGVkSXRlbXMuYWZmZWN0ZWRJdGVtc0V4Y2VwdFNlbGYubGVuZ3RoO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHRcdFx0dmFyIGluZCA9IGFsbEFmZmVjdGVkSXRlbXMuYWZmZWN0ZWRJdGVtc0V4Y2VwdFNlbGZbaV07XG5cdFx0XHRhZmZlY3RlZEl0ZW1zRXhjZXB0U2VsZk9iamVjdHNbaV0gPSBKU09OLnBhcnNlKFxuXHRcdFx0XHRKU09OLnN0cmluZ2lmeShcblx0XHRcdFx0XHR0aGlzLnBvc2l0aW9uRGF0YVtcblx0XHRcdFx0XHRcdGFsbEFmZmVjdGVkSXRlbXMuYWZmZWN0ZWRJdGVtc0V4Y2VwdFNlbGZbaV1cblx0XHRcdFx0XHRdXG5cdFx0XHRcdClcblx0XHRcdCk7XG5cdFx0XHRhZmZlY3RlZEl0ZW1zRXhjZXB0U2VsZk9iamVjdHNbaV0uaW5kZXggPSBpbmQ7XG5cdFx0fVxuXG5cdFx0dmFyIGZpdERldGFpbHMgPSB0aGlzLmZpdEl0ZW1zSW50b0ZyZWVTcGFjZXMoXG5cdFx0XHRhZmZlY3RlZEl0ZW1zRXhjZXB0U2VsZk9iamVjdHMsXG5cdFx0XHRKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG1lcmdlZEZyZWVTcGFjZXMpKSxcblx0XHRcdFtpdGVtXVxuXHRcdCk7XG5cdFx0dmFyIGZpdHRlZEl0ZW1zID0gZml0RGV0YWlscy5yZXBvc2l0aW9uZWRJdGVtcztcblxuXHRcdHZhciBsZW5ndGhfMCA9IGZpdHRlZEl0ZW1zLmxlbmd0aDtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF8wOyBpKyspIHtcblx0XHRcdHZhciBpbmQgPSBmaXR0ZWRJdGVtc1tpXS5pbmRleDtcblx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3SXRlbXNbaW5kXS5zdHlsZS50cmFuc2Zvcm0gPVxuXHRcdFx0XHRcInRyYW5zbGF0ZShcIiArXG5cdFx0XHRcdGZpdHRlZEl0ZW1zW2ldLnggK1xuXHRcdFx0XHRcInB4LCBcIiArXG5cdFx0XHRcdGZpdHRlZEl0ZW1zW2ldLnkgK1xuXHRcdFx0XHRcInB4KVwiO1xuXHRcdH1cblxuXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3SXRlbXNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoXG5cdFx0XHRcImxpbWJlckdyaWRWaWV3SXRlbURlbW9cIlxuXHRcdCk7XG5cblx0XHR2YXIgcmVtYWluaW5nSXRlbXMgPSBbXTtcblx0XHR2YXIgbGVuZ3RoXzAgPSBhbGxBZmZlY3RlZEl0ZW1zLmFmZmVjdGVkSXRlbXNFeGNlcHRTZWxmLmxlbmd0aDtcblx0XHR2YXIgbGVuZ3RoXzEgPSBmaXR0ZWRJdGVtcy5sZW5ndGg7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHR2YXIgZml0dGVkRmxhZyA9IGZhbHNlO1xuXHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBsZW5ndGhfMTsgaisrKSB7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRhbGxBZmZlY3RlZEl0ZW1zLmFmZmVjdGVkSXRlbXNFeGNlcHRTZWxmW2ldID09XG5cdFx0XHRcdFx0Zml0dGVkSXRlbXNbal0uaW5kZXhcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0Zml0dGVkRmxhZyA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChmaXR0ZWRGbGFnID09IGZhbHNlKSB7XG5cdFx0XHRcdHZhciBpbmQgPSBhbGxBZmZlY3RlZEl0ZW1zLmFmZmVjdGVkSXRlbXNFeGNlcHRTZWxmW2ldO1xuXHRcdFx0XHRyZW1haW5pbmdJdGVtcy5wdXNoKFxuXHRcdFx0XHRcdGFsbEFmZmVjdGVkSXRlbXMuYWZmZWN0ZWRJdGVtc0V4Y2VwdFNlbGZbaV1cblx0XHRcdFx0KTtcblx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdJdGVtc1tpbmRdLmNsYXNzTGlzdC5hZGQoXG5cdFx0XHRcdFx0XCJsaW1iZXJHcmlkVmlld0l0ZW1EZW1vXCJcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0TGltYmVyR3JpZFZpZXcucHJvdG90eXBlLm1vdmVQbGFuZSA9IGZ1bmN0aW9uKGluZGV4LCB0b1gsIHRvWSkge1xuXHRcdHZhciBhbGxBZmZlY3RlZEl0ZW1zID0gdGhpcy5maW5kQWZmZWN0ZWRJdGVtc09uTW92ZShpbmRleCwgdG9YLCB0b1kpO1xuXG5cdFx0dmFyIGl0ZW0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMucG9zaXRpb25EYXRhW2luZGV4XSkpO1xuXHRcdGl0ZW0ueCA9IHRvWDtcblx0XHRpdGVtLnkgPSB0b1k7XG5cdFx0dmFyIGZyZWVTcGFjZXMgPSB0aGlzLmZpbmRGcmVlU3BhY2VzKFxuXHRcdFx0aXRlbSxcblx0XHRcdGFsbEFmZmVjdGVkSXRlbXMuYWZmZWN0ZWRJdGVtc1xuXHRcdCk7XG5cblx0XHQvLyBOT1cgTUVSR0UgRlJFRSBTUEFDRVNcblx0XHRpdGVtLmRvTm90TWVyZ2VGbGFnID0gdHJ1ZTtcblx0XHR2YXIgbWVyZ2VkRnJlZVNwYWNlcyA9IHRoaXMubWVyZ2VGcmVlU3BhY2VzKGZyZWVTcGFjZXMsIFtpdGVtXSk7XG5cblx0XHR2YXIgYWZmZWN0ZWRJdGVtc0V4Y2VwdFNlbGZPYmplY3RzID0gW107XG5cdFx0dmFyIGxlbmd0aF8wID0gYWxsQWZmZWN0ZWRJdGVtcy5hZmZlY3RlZEl0ZW1zRXhjZXB0U2VsZi5sZW5ndGg7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHR2YXIgaW5kID0gYWxsQWZmZWN0ZWRJdGVtcy5hZmZlY3RlZEl0ZW1zRXhjZXB0U2VsZltpXTtcblx0XHRcdGFmZmVjdGVkSXRlbXNFeGNlcHRTZWxmT2JqZWN0c1tpXSA9IEpTT04ucGFyc2UoXG5cdFx0XHRcdEpTT04uc3RyaW5naWZ5KFxuXHRcdFx0XHRcdHRoaXMucG9zaXRpb25EYXRhW1xuXHRcdFx0XHRcdFx0YWxsQWZmZWN0ZWRJdGVtcy5hZmZlY3RlZEl0ZW1zRXhjZXB0U2VsZltpXVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0KVxuXHRcdFx0KTtcblx0XHRcdGFmZmVjdGVkSXRlbXNFeGNlcHRTZWxmT2JqZWN0c1tpXS5pbmRleCA9IGluZDtcblx0XHR9XG5cblx0XHR2YXIgZml0RGV0YWlscyA9IHRoaXMuZml0SXRlbXNJbnRvRnJlZVNwYWNlcyhcblx0XHRcdGFmZmVjdGVkSXRlbXNFeGNlcHRTZWxmT2JqZWN0cyxcblx0XHRcdEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkobWVyZ2VkRnJlZVNwYWNlcykpLFxuXHRcdFx0W2l0ZW1dXG5cdFx0KTtcblx0XHR2YXIgZml0dGVkSXRlbXMgPSBmaXREZXRhaWxzLnJlcG9zaXRpb25lZEl0ZW1zO1xuXG5cdFx0dmFyIHBvc2l0aW9uRGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5wb3NpdGlvbkRhdGEpKTtcblx0XHR2YXIgbGVuZ3RoXzAgPSBmaXR0ZWRJdGVtcy5sZW5ndGg7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHR2YXIgaW5kID0gZml0dGVkSXRlbXNbaV0uaW5kZXg7XG5cdFx0XHRwb3NpdGlvbkRhdGFbaW5kXS54ID0gZml0dGVkSXRlbXNbaV0ueDtcblx0XHRcdHBvc2l0aW9uRGF0YVtpbmRdLnkgPSBmaXR0ZWRJdGVtc1tpXS55O1xuXHRcdH1cblx0XHRwb3NpdGlvbkRhdGFbaW5kZXhdLnggPSB0b1g7XG5cdFx0cG9zaXRpb25EYXRhW2luZGV4XS55ID0gdG9ZO1xuXG5cdFx0dmFyIHJlbWFpbmluZ0l0ZW1zID0gW107XG5cdFx0dmFyIGxlbmd0aF8wID0gYWxsQWZmZWN0ZWRJdGVtcy5hZmZlY3RlZEl0ZW1zRXhjZXB0U2VsZi5sZW5ndGg7XG5cdFx0dmFyIGxlbmd0aF8xID0gZml0dGVkSXRlbXMubGVuZ3RoO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHRcdFx0dmFyIGZpdHRlZEZsYWcgPSBmYWxzZTtcblx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgbGVuZ3RoXzE7IGorKykge1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0YWxsQWZmZWN0ZWRJdGVtcy5hZmZlY3RlZEl0ZW1zRXhjZXB0U2VsZltpXSA9PVxuXHRcdFx0XHRcdGZpdHRlZEl0ZW1zW2pdLmluZGV4XG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdGZpdHRlZEZsYWcgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoZml0dGVkRmxhZyA9PSBmYWxzZSkge1xuXHRcdFx0XHRyZW1haW5pbmdJdGVtcy5wdXNoKFxuXHRcdFx0XHRcdGFsbEFmZmVjdGVkSXRlbXMuYWZmZWN0ZWRJdGVtc0V4Y2VwdFNlbGZbaV1cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR2YXIgcG9zaXRpb25EYXRhID0gdGhpcy5maXRSZW1haW5pbmdJdGVtcyhcblx0XHRcdHBvc2l0aW9uRGF0YSxcblx0XHRcdHJlbWFpbmluZ0l0ZW1zLFxuXHRcdFx0YWxsQWZmZWN0ZWRJdGVtcyxcblx0XHRcdGluZGV4LFxuXHRcdFx0SlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShmaXREZXRhaWxzKSlcblx0XHQpO1xuXG5cdFx0dmFyIGxlbmd0aF8wID0gcG9zaXRpb25EYXRhLmxlbmd0aDtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF8wOyBpKyspIHtcblx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3SXRlbXNbaV0uc3R5bGUudHJhbnNmb3JtID1cblx0XHRcdFx0XCJ0cmFuc2xhdGUoXCIgK1xuXHRcdFx0XHRwb3NpdGlvbkRhdGFbaV0ueCArXG5cdFx0XHRcdFwicHgsIFwiICtcblx0XHRcdFx0cG9zaXRpb25EYXRhW2ldLnkgK1xuXHRcdFx0XHRcInB4KVwiO1xuXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdJdGVtc1tpXS5jbGFzc0xpc3QucmVtb3ZlKFxuXHRcdFx0XHRcImxpbWJlckdyaWRWaWV3SXRlbURlbW9cIlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHR0aGlzLnBvc2l0aW9uRGF0YSA9IHBvc2l0aW9uRGF0YTtcblx0fTtcblxuXHRMaW1iZXJHcmlkVmlldy5wcm90b3R5cGUubW92ZVBsYW5lRGVtbyA9IGZ1bmN0aW9uKGluZGV4LCB0b1gsIHRvWSkge1xuXHRcdHZhciBsZW5ndGhfMCA9IHRoaXMuJGxpbWJlckdyaWRWaWV3SXRlbXMubGVuZ3RoO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdJdGVtc1tpXS5zdHlsZS50cmFuc2Zvcm0gPVxuXHRcdFx0XHRcInRyYW5zbGF0ZShcIiArXG5cdFx0XHRcdHRoaXMucG9zaXRpb25EYXRhW2ldLnggK1xuXHRcdFx0XHRcInB4LCBcIiArXG5cdFx0XHRcdHRoaXMucG9zaXRpb25EYXRhW2ldLnkgK1xuXHRcdFx0XHRcInB4KVwiO1xuXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdJdGVtc1tpXS5jbGFzc0xpc3QucmVtb3ZlKFxuXHRcdFx0XHRcImxpbWJlckdyaWRWaWV3SXRlbURlbW9cIlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHR2YXIgYWxsQWZmZWN0ZWRJdGVtcyA9IHRoaXMuZmluZEFmZmVjdGVkSXRlbXNPbk1vdmUoaW5kZXgsIHRvWCwgdG9ZKTtcblxuXHRcdHZhciBpdGVtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnBvc2l0aW9uRGF0YVtpbmRleF0pKTtcblx0XHRpdGVtLnggPSB0b1g7XG5cdFx0aXRlbS55ID0gdG9ZO1xuXHRcdHZhciBmcmVlU3BhY2VzID0gdGhpcy5maW5kRnJlZVNwYWNlcyhcblx0XHRcdGl0ZW0sXG5cdFx0XHRhbGxBZmZlY3RlZEl0ZW1zLmFmZmVjdGVkSXRlbXNcblx0XHQpO1xuXG5cdFx0Ly8gTk9XIE1FUkdFIEZSRUUgU1BBQ0VTXG5cdFx0aXRlbS5kb05vdE1lcmdlRmxhZyA9IHRydWU7XG5cdFx0dmFyIG1lcmdlZEZyZWVTcGFjZXMgPSB0aGlzLm1lcmdlRnJlZVNwYWNlcyhmcmVlU3BhY2VzLCBbaXRlbV0pO1xuXG5cdFx0dmFyIGFmZmVjdGVkSXRlbXNFeGNlcHRTZWxmT2JqZWN0cyA9IFtdO1xuXHRcdHZhciBsZW5ndGhfMCA9IGFsbEFmZmVjdGVkSXRlbXMuYWZmZWN0ZWRJdGVtc0V4Y2VwdFNlbGYubGVuZ3RoO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHRcdFx0dmFyIGluZCA9IGFsbEFmZmVjdGVkSXRlbXMuYWZmZWN0ZWRJdGVtc0V4Y2VwdFNlbGZbaV07XG5cdFx0XHRhZmZlY3RlZEl0ZW1zRXhjZXB0U2VsZk9iamVjdHNbaV0gPSBKU09OLnBhcnNlKFxuXHRcdFx0XHRKU09OLnN0cmluZ2lmeShcblx0XHRcdFx0XHR0aGlzLnBvc2l0aW9uRGF0YVtcblx0XHRcdFx0XHRcdGFsbEFmZmVjdGVkSXRlbXMuYWZmZWN0ZWRJdGVtc0V4Y2VwdFNlbGZbaV1cblx0XHRcdFx0XHRdXG5cdFx0XHRcdClcblx0XHRcdCk7XG5cdFx0XHRhZmZlY3RlZEl0ZW1zRXhjZXB0U2VsZk9iamVjdHNbaV0uaW5kZXggPSBpbmQ7XG5cdFx0fVxuXG5cdFx0dmFyIGZpdERldGFpbHMgPSB0aGlzLmZpdEl0ZW1zSW50b0ZyZWVTcGFjZXMoXG5cdFx0XHRhZmZlY3RlZEl0ZW1zRXhjZXB0U2VsZk9iamVjdHMsXG5cdFx0XHRKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG1lcmdlZEZyZWVTcGFjZXMpKSxcblx0XHRcdFtpdGVtXVxuXHRcdCk7XG5cdFx0dmFyIGZpdHRlZEl0ZW1zID0gZml0RGV0YWlscy5yZXBvc2l0aW9uZWRJdGVtcztcblxuXHRcdHZhciBsZW5ndGhfMCA9IGZpdHRlZEl0ZW1zLmxlbmd0aDtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF8wOyBpKyspIHtcblx0XHRcdHZhciBpbmQgPSBmaXR0ZWRJdGVtc1tpXS5pbmRleDtcblx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3SXRlbXNbaW5kXS5zdHlsZS50cmFuc2Zvcm0gPVxuXHRcdFx0XHRcInRyYW5zbGF0ZShcIiArXG5cdFx0XHRcdGZpdHRlZEl0ZW1zW2ldLnggK1xuXHRcdFx0XHRcInB4LCBcIiArXG5cdFx0XHRcdGZpdHRlZEl0ZW1zW2ldLnkgK1xuXHRcdFx0XHRcInB4KVwiO1xuXHRcdH1cblxuXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3SXRlbXNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoXG5cdFx0XHRcImxpbWJlckdyaWRWaWV3SXRlbURlbW9cIlxuXHRcdCk7XG5cblx0XHR2YXIgcmVtYWluaW5nSXRlbXMgPSBbXTtcblx0XHR2YXIgbGVuZ3RoXzAgPSBhbGxBZmZlY3RlZEl0ZW1zLmFmZmVjdGVkSXRlbXNFeGNlcHRTZWxmLmxlbmd0aDtcblx0XHR2YXIgbGVuZ3RoXzEgPSBmaXR0ZWRJdGVtcy5sZW5ndGg7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHR2YXIgZml0dGVkRmxhZyA9IGZhbHNlO1xuXHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBsZW5ndGhfMTsgaisrKSB7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRhbGxBZmZlY3RlZEl0ZW1zLmFmZmVjdGVkSXRlbXNFeGNlcHRTZWxmW2ldID09XG5cdFx0XHRcdFx0Zml0dGVkSXRlbXNbal0uaW5kZXhcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0Zml0dGVkRmxhZyA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChmaXR0ZWRGbGFnID09IGZhbHNlKSB7XG5cdFx0XHRcdHZhciBpbmQgPSBhbGxBZmZlY3RlZEl0ZW1zLmFmZmVjdGVkSXRlbXNFeGNlcHRTZWxmW2ldO1xuXHRcdFx0XHRyZW1haW5pbmdJdGVtcy5wdXNoKFxuXHRcdFx0XHRcdGFsbEFmZmVjdGVkSXRlbXMuYWZmZWN0ZWRJdGVtc0V4Y2VwdFNlbGZbaV1cblx0XHRcdFx0KTtcblx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdJdGVtc1tpbmRdLmNsYXNzTGlzdC5hZGQoXG5cdFx0XHRcdFx0XCJsaW1iZXJHcmlkVmlld0l0ZW1EZW1vXCJcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0TGltYmVyR3JpZFZpZXcucHJvdG90eXBlLmZpbmRGcmVlU3BhY2VzID0gZnVuY3Rpb24oaXRlbSwgYWZmZWN0ZWRJdGVtcykge1xuXHRcdHZhciBmcmVlU3BhY2VzID0gW107XG5cdFx0dmFyIGxlbmd0aF8wID0gYWZmZWN0ZWRJdGVtcy5sZW5ndGg7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHR2YXIgcmVzdWx0ID0gdGhpcy5pc1BsYW5lQkluc2lkZVBsYW5lQV9Ub3VjaGluZ0lzSW5zaWRlKFxuXHRcdFx0XHRpdGVtLFxuXHRcdFx0XHR0aGlzLnBvc2l0aW9uRGF0YVthZmZlY3RlZEl0ZW1zW2ldXSxcblx0XHRcdFx0XCJhbGxcIlxuXHRcdFx0KTtcblx0XHRcdGlmIChyZXN1bHQuaXNJbnNpZGUgPT0gdHJ1ZSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBmcyA9IHRoaXMuc3VidHJhY3RQbGFuZXMoXG5cdFx0XHRcdFx0dGhpcy5wb3NpdGlvbkRhdGFbYWZmZWN0ZWRJdGVtc1tpXV0sXG5cdFx0XHRcdFx0aXRlbVxuXHRcdFx0XHQpO1xuXHRcdFx0XHR2YXIgbGVuZ3RoXzEgPSBmcy5sZW5ndGg7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgbGVuZ3RoXzE7IGorKykge1xuXHRcdFx0XHRcdGZyZWVTcGFjZXMucHVzaChmc1tqXSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGZyZWVTcGFjZXM7XG5cdH07XG5cblx0TGltYmVyR3JpZFZpZXcucHJvdG90eXBlLm1lcmdlRnJlZVNwYWNlcyA9IGZ1bmN0aW9uKFxuXHRcdGZyZWVTcGFjZXMsXG5cdFx0aXRlbXNOb3RUb01lcmdlXG5cdCkge1xuXHRcdHZhciBtZXJnZVBsYWluc0ZyZWVTcGFjZXNBbmRJdGVtc05vdFRvTWVyZ2UgPSBmcmVlU3BhY2VzLmNvbmNhdChcblx0XHRcdGl0ZW1zTm90VG9NZXJnZVxuXHRcdCk7XG5cdFx0dmFyIGlzUGxhbmVJbnNpZGVTdGFjayA9IGZ1bmN0aW9uKHN0YWNrLCBwbGFuZSwgY29udGV4dCkge1xuXHRcdFx0dmFyIGZsYWcgPSBmYWxzZTtcblx0XHRcdHZhciBsZW5ndGhfMCA9IHN0YWNrLmxlbmd0aDtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHRcdFx0XHRpZiAoY29udGV4dC5hcmVQbGFpbnNTYW1lKHN0YWNrW2ldLCBwbGFuZSkpIHtcblx0XHRcdFx0XHRmbGFnID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZsYWc7XG5cdFx0fTtcblxuXHRcdHZhciBtZXJnZWRTdGFjayA9IFtdO1xuXHRcdHZhciBsZW5ndGhfMCA9IGZyZWVTcGFjZXMubGVuZ3RoO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzAgLSAxOyBpKyspIHtcblx0XHRcdGZvciAodmFyIGogPSBpICsgMTsgaiA8IGxlbmd0aF8wOyBqKyspIHtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdCF0aGlzLmlzUGxhbmVCSW5zaWRlUGxhbmVBX1RvdWNoaW5nTm90SW5zaWRlKFxuXHRcdFx0XHRcdFx0ZnJlZVNwYWNlc1tpXSxcblx0XHRcdFx0XHRcdGZyZWVTcGFjZXNbal1cblx0XHRcdFx0XHQpXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHZhciBtZXJnZWRQbGFuZSA9IHRoaXMubWVyZ2VQbGFpbnMoXG5cdFx0XHRcdFx0XHRmcmVlU3BhY2VzW2ldLFxuXHRcdFx0XHRcdFx0ZnJlZVNwYWNlc1tqXSxcblx0XHRcdFx0XHRcdG1lcmdlUGxhaW5zRnJlZVNwYWNlc0FuZEl0ZW1zTm90VG9NZXJnZVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0aWYgKG1lcmdlZFBsYW5lICE9IGZhbHNlKSB7XG5cdFx0XHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0XHRcdCFpc1BsYW5lSW5zaWRlU3RhY2sobWVyZ2VkU3RhY2ssIG1lcmdlZFBsYW5lLCB0aGlzKVxuXHRcdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRcdG1lcmdlZFN0YWNrLnB1c2gobWVyZ2VkUGxhbmUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHZhciBtZXJnZVN0YWNrSXRlbVdpdGhGcmVlU3BhY2VzID0gZnVuY3Rpb24oXG5cdFx0XHRmcmVlU3BhY2VzLFxuXHRcdFx0bWVyZ2VkU3RhY2ssXG5cdFx0XHRtZXJnZVBsYWluc0ZyZWVTcGFjZXNBbmRJdGVtc05vdFRvTWVyZ2UsXG5cdFx0XHRjb250ZXh0XG5cdFx0KSB7XG5cdFx0XHR2YXIgbmV3U3RhY2sgPSBbXTtcblx0XHRcdHZhciBsZW5ndGhfMCA9IGZyZWVTcGFjZXMubGVuZ3RoO1xuXHRcdFx0dmFyIGxlbmd0aF8xID0gbWVyZ2VkU3RhY2subGVuZ3RoO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgbGVuZ3RoXzE7IGorKykge1xuXHRcdFx0XHRcdGlmIChcblx0XHRcdFx0XHRcdCFjb250ZXh0LmlzUGxhbmVCSW5zaWRlUGxhbmVBX1RvdWNoaW5nTm90SW5zaWRlKFxuXHRcdFx0XHRcdFx0XHRmcmVlU3BhY2VzW2ldLFxuXHRcdFx0XHRcdFx0XHRtZXJnZWRTdGFja1tqXVxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0dmFyIG1lcmdlZFBsYW5lID0gY29udGV4dC5tZXJnZVBsYWlucyhcblx0XHRcdFx0XHRcdFx0ZnJlZVNwYWNlc1tpXSxcblx0XHRcdFx0XHRcdFx0bWVyZ2VkU3RhY2tbal0sXG5cdFx0XHRcdFx0XHRcdG1lcmdlUGxhaW5zRnJlZVNwYWNlc0FuZEl0ZW1zTm90VG9NZXJnZVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdGlmIChtZXJnZWRQbGFuZSAhPSBmYWxzZSkge1xuXHRcdFx0XHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0XHRcdFx0IWlzUGxhbmVJbnNpZGVTdGFjayhcblx0XHRcdFx0XHRcdFx0XHRcdG1lcmdlZFN0YWNrLmNvbmNhdChuZXdTdGFjayksXG5cdFx0XHRcdFx0XHRcdFx0XHRtZXJnZWRQbGFuZSxcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRleHRcblx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0XHRcdG5ld1N0YWNrLnB1c2gobWVyZ2VkUGxhbmUpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbmV3U3RhY2s7XG5cdFx0fTtcblxuXHRcdHZhciBuZXdTdGFjayA9IG1lcmdlU3RhY2tJdGVtV2l0aEZyZWVTcGFjZXMoXG5cdFx0XHRmcmVlU3BhY2VzLFxuXHRcdFx0bWVyZ2VkU3RhY2ssXG5cdFx0XHRtZXJnZVBsYWluc0ZyZWVTcGFjZXNBbmRJdGVtc05vdFRvTWVyZ2UsXG5cdFx0XHR0aGlzXG5cdFx0KTtcblxuXHRcdHdoaWxlIChuZXdTdGFjay5sZW5ndGggPiAwKSB7XG5cdFx0XHRtZXJnZWRTdGFjayA9IG1lcmdlZFN0YWNrLmNvbmNhdChuZXdTdGFjayk7XG5cdFx0XHR2YXIgbmV3U3RhY2sgPSBtZXJnZVN0YWNrSXRlbVdpdGhGcmVlU3BhY2VzKFxuXHRcdFx0XHRmcmVlU3BhY2VzLFxuXHRcdFx0XHRtZXJnZWRTdGFjayxcblx0XHRcdFx0bWVyZ2VQbGFpbnNGcmVlU3BhY2VzQW5kSXRlbXNOb3RUb01lcmdlLFxuXHRcdFx0XHR0aGlzXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdG1lcmdlZFN0YWNrID0gbWVyZ2VkU3RhY2suY29uY2F0KGZyZWVTcGFjZXMpO1xuXG5cdFx0dmFyIHJlZHVuZGFudFBsYW5lcyA9IHt9O1xuXHRcdHZhciBsZW5ndGhfMCA9IG1lcmdlZFN0YWNrLmxlbmd0aDtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF8wIC0gMTsgaSsrKSB7XG5cdFx0XHRmb3IgKHZhciBqID0gaSArIDE7IGogPCBsZW5ndGhfMDsgaisrKSB7XG5cdFx0XHRcdHZhciByZXN1bHQgPSB0aGlzLmlzUGxhbmVCSW5zaWRlUGxhbmVBX1RvdWNoaW5nSXNJbnNpZGUoXG5cdFx0XHRcdFx0bWVyZ2VkU3RhY2tbaV0sXG5cdFx0XHRcdFx0bWVyZ2VkU3RhY2tbal0sXG5cdFx0XHRcdFx0XCJhbGxcIlxuXHRcdFx0XHQpO1xuXHRcdFx0XHRpZiAocmVzdWx0LmlzSW5zaWRlKSB7XG5cdFx0XHRcdFx0cmVkdW5kYW50UGxhbmVzW2pdID0gdHJ1ZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2YXIgcmVzdWx0ID0gdGhpcy5pc1BsYW5lQkluc2lkZVBsYW5lQV9Ub3VjaGluZ0lzSW5zaWRlKFxuXHRcdFx0XHRcdFx0bWVyZ2VkU3RhY2tbal0sXG5cdFx0XHRcdFx0XHRtZXJnZWRTdGFja1tpXSxcblx0XHRcdFx0XHRcdFwiYWxsXCJcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGlmIChyZXN1bHQuaXNJbnNpZGUpIHtcblx0XHRcdFx0XHRcdHJlZHVuZGFudFBsYW5lc1tpXSA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dmFyIGZpbmFsTWVyZ2VkUGxhbmVzID0gW107XG5cdFx0dmFyIGxlbmd0aF8wID0gbWVyZ2VkU3RhY2subGVuZ3RoO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHRcdFx0aWYgKCFyZWR1bmRhbnRQbGFuZXMuaGFzT3duUHJvcGVydHkoaSkpIHtcblx0XHRcdFx0ZmluYWxNZXJnZWRQbGFuZXMucHVzaChtZXJnZWRTdGFja1tpXSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZpbmFsTWVyZ2VkUGxhbmVzO1xuXHR9O1xuXG5cdExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5maW5kQWZmZWN0ZWRJdGVtc09uTW92ZSA9IGZ1bmN0aW9uKFxuXHRcdGluZGV4LFxuXHRcdHRvWCxcblx0XHR0b1lcblx0KSB7XG5cdFx0dmFyIGl0ZW0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMucG9zaXRpb25EYXRhW2luZGV4XSkpO1xuXHRcdGl0ZW0ueCA9IHRvWDtcblx0XHRpdGVtLnkgPSB0b1k7XG5cdFx0dmFyIGFmZmVjdGVkSXRlbXMgPSBbXTtcblx0XHR2YXIgYWZmZWN0ZWRJdGVtc0V4Y2VwdFNlbGYgPSBbXTtcblxuXHRcdHZhciBsZW5ndGhfMCA9IHRoaXMucG9zaXRpb25EYXRhLmxlbmd0aDtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF8wOyBpKyspIHtcblx0XHRcdHZhciByZXN1bHQgPSB0aGlzLmlzUGxhbmVCSW5zaWRlUGxhbmVBX1RvdWNoaW5nSXNJbnNpZGUoXG5cdFx0XHRcdGl0ZW0sXG5cdFx0XHRcdHRoaXMucG9zaXRpb25EYXRhW2ldXG5cdFx0XHQpO1xuXHRcdFx0aWYgKHJlc3VsdCA9PSB0cnVlKSB7XG5cdFx0XHRcdGFmZmVjdGVkSXRlbXMucHVzaChpKTtcblx0XHRcdFx0aWYgKGkgIT0gaW5kZXgpIHtcblx0XHRcdFx0XHRhZmZlY3RlZEl0ZW1zRXhjZXB0U2VsZi5wdXNoKGkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGFmZmVjdGVkSXRlbXM6IGFmZmVjdGVkSXRlbXMsXG5cdFx0XHRhZmZlY3RlZEl0ZW1zRXhjZXB0U2VsZjogYWZmZWN0ZWRJdGVtc0V4Y2VwdFNlbGZcblx0XHR9O1xuXHR9O1xuXG5cdExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5maW5kQWZmZWN0ZWRJdGVtc09uUmVzaXplID0gZnVuY3Rpb24oXG5cdFx0aW5kZXgsXG5cdFx0d2lkdGgsXG5cdFx0aGVpZ2h0XG5cdCkge1xuXHRcdHZhciBpdGVtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnBvc2l0aW9uRGF0YVtpbmRleF0pKTtcblx0XHRpdGVtLndpZHRoID0gd2lkdGg7XG5cdFx0aXRlbS5oZWlnaHQgPSBoZWlnaHQ7XG5cdFx0dmFyIGFmZmVjdGVkSXRlbXMgPSBbXTtcblx0XHR2YXIgYWZmZWN0ZWRJdGVtc0V4Y2VwdFNlbGYgPSBbXTtcblxuXHRcdHZhciBsZW5ndGhfMCA9IHRoaXMucG9zaXRpb25EYXRhLmxlbmd0aDtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF8wOyBpKyspIHtcblx0XHRcdHZhciByZXN1bHQgPSB0aGlzLmlzUGxhbmVCSW5zaWRlUGxhbmVBX1RvdWNoaW5nSXNJbnNpZGUoXG5cdFx0XHRcdGl0ZW0sXG5cdFx0XHRcdHRoaXMucG9zaXRpb25EYXRhW2ldXG5cdFx0XHQpO1xuXHRcdFx0aWYgKHJlc3VsdCA9PSB0cnVlKSB7XG5cdFx0XHRcdGFmZmVjdGVkSXRlbXMucHVzaChpKTtcblx0XHRcdFx0aWYgKGkgIT0gaW5kZXgpIHtcblx0XHRcdFx0XHRhZmZlY3RlZEl0ZW1zRXhjZXB0U2VsZi5wdXNoKGkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGFmZmVjdGVkSXRlbXM6IGFmZmVjdGVkSXRlbXMsXG5cdFx0XHRhZmZlY3RlZEl0ZW1zRXhjZXB0U2VsZjogYWZmZWN0ZWRJdGVtc0V4Y2VwdFNlbGZcblx0XHR9O1xuXHR9O1xuXG5cdExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5pc1BsYW5lQkluc2lkZVBsYW5lQV9Ub3VjaGluZ0lzSW5zaWRlID0gZnVuY3Rpb24oXG5cdFx0QSxcblx0XHRCLFxuXHRcdHJlc3VsdFR5cGVcblx0KSB7XG5cdFx0dmFyIEFUb3BMZWZ0ID0gW0EueCwgQS55XTtcblx0XHR2YXIgQVRvcFJpZ2h0ID0gW0EueCArIEEud2lkdGgsIEEueV07XG5cdFx0dmFyIEFCb3R0b21MZWZ0ID0gW0EueCwgQS55ICsgQS5oZWlnaHRdO1xuXHRcdHZhciBBQm90dG9tUmlnaHQgPSBbQS54ICsgQS53aWR0aCwgQS55ICsgQS5oZWlnaHRdO1xuXG5cdFx0dmFyIEFDb29yZGlhbnRlc0FyciA9IFtBVG9wTGVmdCwgQVRvcFJpZ2h0LCBBQm90dG9tUmlnaHQsIEFCb3R0b21MZWZ0XTtcblxuXHRcdHZhciBCVG9wTGVmdCA9IFtCLngsIEIueV07XG5cdFx0dmFyIEJUb3BSaWdodCA9IFtCLnggKyBCLndpZHRoLCBCLnldO1xuXHRcdHZhciBCQm90dG9tTGVmdCA9IFtCLngsIEIueSArIEIuaGVpZ2h0XTtcblx0XHR2YXIgQkJvdHRvbVJpZ2h0ID0gW0IueCArIEIud2lkdGgsIEIueSArIEIuaGVpZ2h0XTtcblxuXHRcdHZhciBCQ29vcmRpbmF0ZXNBcnIgPSBbQlRvcExlZnQsIEJUb3BSaWdodCwgQkJvdHRvbVJpZ2h0LCBCQm90dG9tTGVmdF07XG5cdFx0dmFyIEJSZXN1bHRBcnIgPSBbXTtcblx0XHR2YXIgaXNJbnNpZGUgPSAwO1xuXHRcdHZhciBvdmVyYWxsUmVzdWx0ID0gZmFsc2U7XG5cdFx0dmFyIGxlbmd0aF8wID0gQkNvb3JkaW5hdGVzQXJyLmxlbmd0aDtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF8wOyBpKyspIHtcblx0XHRcdGlmIChcblx0XHRcdFx0QkNvb3JkaW5hdGVzQXJyW2ldWzBdID49IEFUb3BMZWZ0WzBdICYmXG5cdFx0XHRcdEJDb29yZGluYXRlc0FycltpXVswXSA8PSBBVG9wUmlnaHRbMF0gJiZcblx0XHRcdFx0QkNvb3JkaW5hdGVzQXJyW2ldWzBdID49IEFCb3R0b21MZWZ0WzBdICYmXG5cdFx0XHRcdEJDb29yZGluYXRlc0FycltpXVswXSA8PSBBQm90dG9tUmlnaHRbMF0gJiZcblx0XHRcdFx0QkNvb3JkaW5hdGVzQXJyW2ldWzFdID49IEFUb3BMZWZ0WzFdICYmXG5cdFx0XHRcdEJDb29yZGluYXRlc0FycltpXVsxXSA8PSBBQm90dG9tTGVmdFsxXSAmJlxuXHRcdFx0XHRCQ29vcmRpbmF0ZXNBcnJbaV1bMV0gPj0gQVRvcFJpZ2h0WzFdICYmXG5cdFx0XHRcdEJDb29yZGluYXRlc0FycltpXVsxXSA8PSBBQm90dG9tUmlnaHRbMV1cblx0XHRcdCkge1xuXHRcdFx0XHRCUmVzdWx0QXJyW2ldID0gdHJ1ZTtcblx0XHRcdFx0aXNJbnNpZGUrKztcblx0XHRcdFx0b3ZlcmFsbFJlc3VsdCA9IHRydWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRCUmVzdWx0QXJyW2ldID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChpc0luc2lkZSA9PSA0KSB7XG5cdFx0XHRpc0luc2lkZSA9IHRydWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlzSW5zaWRlID0gZmFsc2U7XG5cdFx0fVxuXG5cdFx0dmFyIGVuZ3VsZmVkID0gZmFsc2U7XG5cdFx0dmFyIGVuZ3VsZmVkQ2hlY2tDb3VudCA9IDA7XG5cdFx0dmFyIGxlbmd0aF8wID0gQUNvb3JkaWFudGVzQXJyLmxlbmd0aDtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF8wOyBpKyspIHtcblx0XHRcdGlmIChcblx0XHRcdFx0QUNvb3JkaWFudGVzQXJyW2ldWzBdID49IEJUb3BMZWZ0WzBdICYmXG5cdFx0XHRcdEFDb29yZGlhbnRlc0FycltpXVswXSA8PSBCVG9wUmlnaHRbMF0gJiZcblx0XHRcdFx0QUNvb3JkaWFudGVzQXJyW2ldWzBdID49IEJCb3R0b21MZWZ0WzBdICYmXG5cdFx0XHRcdEFDb29yZGlhbnRlc0FycltpXVswXSA8PSBCQm90dG9tUmlnaHRbMF0gJiZcblx0XHRcdFx0QUNvb3JkaWFudGVzQXJyW2ldWzFdID49IEJUb3BMZWZ0WzFdICYmXG5cdFx0XHRcdEFDb29yZGlhbnRlc0FycltpXVsxXSA8PSBCQm90dG9tTGVmdFsxXSAmJlxuXHRcdFx0XHRBQ29vcmRpYW50ZXNBcnJbaV1bMV0gPj0gQlRvcFJpZ2h0WzFdICYmXG5cdFx0XHRcdEFDb29yZGlhbnRlc0FycltpXVsxXSA8PSBCQm90dG9tUmlnaHRbMV1cblx0XHRcdCkge1xuXHRcdFx0XHRvdmVyYWxsUmVzdWx0ID0gdHJ1ZTtcblx0XHRcdFx0ZW5ndWxmZWRDaGVja0NvdW50Kys7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGVuZ3VsZmVkQ2hlY2tDb3VudCA9PSA0KSB7XG5cdFx0XHRlbmd1bGZlZCA9IHRydWU7XG5cdFx0fVxuXG5cdFx0aWYgKFxuXHRcdFx0KEJUb3BMZWZ0WzBdID4gQVRvcExlZnRbMF0gJiZcblx0XHRcdFx0QlRvcFJpZ2h0WzBdIDwgQVRvcFJpZ2h0WzBdICYmXG5cdFx0XHRcdEJUb3BMZWZ0WzFdIDwgQVRvcExlZnRbMV0gJiZcblx0XHRcdFx0QkJvdHRvbUxlZnRbMV0gPiBBQm90dG9tTGVmdFsxXSkgfHxcblx0XHRcdChCVG9wTGVmdFsxXSA+IEFUb3BMZWZ0WzFdICYmXG5cdFx0XHRcdEJCb3R0b21MZWZ0WzFdIDwgQUJvdHRvbUxlZnRbMV0gJiZcblx0XHRcdFx0QlRvcExlZnRbMF0gPCBBVG9wTGVmdFswXSAmJlxuXHRcdFx0XHRCVG9wUmlnaHRbMF0gPiBBVG9wUmlnaHRbMF0pXG5cdFx0KSB7XG5cdFx0XHRvdmVyYWxsUmVzdWx0ID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZiAocmVzdWx0VHlwZSA9PSBcIm92ZXJhbGxcIikge1xuXHRcdFx0cmV0dXJuIG92ZXJhbGxSZXN1bHQ7XG5cdFx0fSBlbHNlIGlmIChyZXN1bHRUeXBlID09IFwiaW5kaXZpZHVhbFwiKSB7XG5cdFx0XHRyZXR1cm4gQlJlc3VsdEFycjtcblx0XHR9IGVsc2UgaWYgKHJlc3VsdFR5cGUgPT0gXCJhbGxcIikge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0b3ZlcmFsbDogb3ZlcmFsbFJlc3VsdCxcblx0XHRcdFx0aW5kaXZpZHVhbDogQlJlc3VsdEFycixcblx0XHRcdFx0aXNJbnNpZGU6IGlzSW5zaWRlLFxuXHRcdFx0XHRlbmd1bGZlZDogZW5ndWxmZWRcblx0XHRcdH07XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBvdmVyYWxsUmVzdWx0O1xuXHRcdH1cblx0fTtcblxuXHRMaW1iZXJHcmlkVmlldy5wcm90b3R5cGUuaXNQbGFuZUJJbnNpZGVQbGFuZUFfVG91Y2hpbmdOb3RJbnNpZGUgPSBmdW5jdGlvbihcblx0XHRBLFxuXHRcdEIsXG5cdFx0cmVzdWx0VHlwZVxuXHQpIHtcblx0XHR2YXIgQVRvcExlZnQgPSBbQS54LCBBLnldO1xuXHRcdHZhciBBVG9wUmlnaHQgPSBbQS54ICsgQS53aWR0aCwgQS55XTtcblx0XHR2YXIgQUJvdHRvbUxlZnQgPSBbQS54LCBBLnkgKyBBLmhlaWdodF07XG5cdFx0dmFyIEFCb3R0b21SaWdodCA9IFtBLnggKyBBLndpZHRoLCBBLnkgKyBBLmhlaWdodF07XG5cblx0XHR2YXIgQUNvb3JkaWFudGVzQXJyID0gW0FUb3BMZWZ0LCBBVG9wUmlnaHQsIEFCb3R0b21SaWdodCwgQUJvdHRvbUxlZnRdO1xuXG5cdFx0dmFyIEJUb3BMZWZ0ID0gW0IueCwgQi55XTtcblx0XHR2YXIgQlRvcFJpZ2h0ID0gW0IueCArIEIud2lkdGgsIEIueV07XG5cdFx0dmFyIEJCb3R0b21MZWZ0ID0gW0IueCwgQi55ICsgQi5oZWlnaHRdO1xuXHRcdHZhciBCQm90dG9tUmlnaHQgPSBbQi54ICsgQi53aWR0aCwgQi55ICsgQi5oZWlnaHRdO1xuXG5cdFx0dmFyIEJDb29yZGluYXRlc0FyciA9IFtCVG9wTGVmdCwgQlRvcFJpZ2h0LCBCQm90dG9tUmlnaHQsIEJCb3R0b21MZWZ0XTtcblx0XHR2YXIgQlJlc3VsdEFyciA9IFtdO1xuXHRcdHZhciBpc0luc2lkZSA9IDA7XG5cdFx0dmFyIG92ZXJhbGxSZXN1bHQgPSBmYWxzZTtcblx0XHR2YXIgbGVuZ3RoXzAgPSBCQ29vcmRpbmF0ZXNBcnIubGVuZ3RoO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRCQ29vcmRpbmF0ZXNBcnJbaV1bMF0gPiBBVG9wTGVmdFswXSAmJlxuXHRcdFx0XHRCQ29vcmRpbmF0ZXNBcnJbaV1bMF0gPCBBVG9wUmlnaHRbMF0gJiZcblx0XHRcdFx0QkNvb3JkaW5hdGVzQXJyW2ldWzBdID4gQUJvdHRvbUxlZnRbMF0gJiZcblx0XHRcdFx0QkNvb3JkaW5hdGVzQXJyW2ldWzBdIDwgQUJvdHRvbVJpZ2h0WzBdICYmXG5cdFx0XHRcdEJDb29yZGluYXRlc0FycltpXVsxXSA+IEFUb3BMZWZ0WzFdICYmXG5cdFx0XHRcdEJDb29yZGluYXRlc0FycltpXVsxXSA8IEFCb3R0b21MZWZ0WzFdICYmXG5cdFx0XHRcdEJDb29yZGluYXRlc0FycltpXVsxXSA+IEFUb3BSaWdodFsxXSAmJlxuXHRcdFx0XHRCQ29vcmRpbmF0ZXNBcnJbaV1bMV0gPCBBQm90dG9tUmlnaHRbMV1cblx0XHRcdCkge1xuXHRcdFx0XHRCUmVzdWx0QXJyW2ldID0gdHJ1ZTtcblx0XHRcdFx0aXNJbnNpZGUrKztcblx0XHRcdFx0b3ZlcmFsbFJlc3VsdCA9IHRydWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRCUmVzdWx0QXJyW2ldID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChpc0luc2lkZSA9PSA0KSB7XG5cdFx0XHRpc0luc2lkZSA9IHRydWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlzSW5zaWRlID0gZmFsc2U7XG5cdFx0fVxuXG5cdFx0dmFyIGVuZ3VsZmVkID0gZmFsc2U7XG5cdFx0dmFyIGVuZ3VsZmVkQ2hlY2tDb3VudCA9IDA7XG5cdFx0dmFyIGxlbmd0aF8wID0gQUNvb3JkaWFudGVzQXJyLmxlbmd0aDtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF8wOyBpKyspIHtcblx0XHRcdGlmIChcblx0XHRcdFx0QUNvb3JkaWFudGVzQXJyW2ldWzBdID4gQlRvcExlZnRbMF0gJiZcblx0XHRcdFx0QUNvb3JkaWFudGVzQXJyW2ldWzBdIDwgQlRvcFJpZ2h0WzBdICYmXG5cdFx0XHRcdEFDb29yZGlhbnRlc0FycltpXVswXSA+IEJCb3R0b21MZWZ0WzBdICYmXG5cdFx0XHRcdEFDb29yZGlhbnRlc0FycltpXVswXSA8IEJCb3R0b21SaWdodFswXSAmJlxuXHRcdFx0XHRBQ29vcmRpYW50ZXNBcnJbaV1bMV0gPiBCVG9wTGVmdFsxXSAmJlxuXHRcdFx0XHRBQ29vcmRpYW50ZXNBcnJbaV1bMV0gPCBCQm90dG9tTGVmdFsxXSAmJlxuXHRcdFx0XHRBQ29vcmRpYW50ZXNBcnJbaV1bMV0gPiBCVG9wUmlnaHRbMV0gJiZcblx0XHRcdFx0QUNvb3JkaWFudGVzQXJyW2ldWzFdIDwgQkJvdHRvbVJpZ2h0WzFdXG5cdFx0XHQpIHtcblx0XHRcdFx0b3ZlcmFsbFJlc3VsdCA9IHRydWU7XG5cdFx0XHRcdGVuZ3VsZmVkQ2hlY2tDb3VudCsrO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChlbmd1bGZlZENoZWNrQ291bnQgPT0gNCkge1xuXHRcdFx0ZW5ndWxmZWQgPSB0cnVlO1xuXHRcdH1cblxuXHRcdGlmIChcblx0XHRcdChCVG9wTGVmdFswXSA+PSBBVG9wTGVmdFswXSAmJlxuXHRcdFx0XHRCVG9wUmlnaHRbMF0gPD0gQVRvcFJpZ2h0WzBdICYmXG5cdFx0XHRcdEJUb3BMZWZ0WzFdIDw9IEFUb3BMZWZ0WzFdICYmXG5cdFx0XHRcdEJCb3R0b21MZWZ0WzFdID49IEFCb3R0b21MZWZ0WzFdKSB8fFxuXHRcdFx0KEJUb3BMZWZ0WzFdID49IEFUb3BMZWZ0WzFdICYmXG5cdFx0XHRcdEJCb3R0b21MZWZ0WzFdIDw9IEFCb3R0b21MZWZ0WzFdICYmXG5cdFx0XHRcdEJUb3BMZWZ0WzBdIDw9IEFUb3BMZWZ0WzBdICYmXG5cdFx0XHRcdEJUb3BSaWdodFswXSA+PSBBVG9wUmlnaHRbMF0pXG5cdFx0KSB7XG5cdFx0XHRvdmVyYWxsUmVzdWx0ID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZiAoXG5cdFx0XHQoQVRvcExlZnRbMF0gPj0gQlRvcExlZnRbMF0gJiZcblx0XHRcdFx0QVRvcFJpZ2h0WzBdIDw9IEJUb3BSaWdodFswXSAmJlxuXHRcdFx0XHRBVG9wTGVmdFsxXSA8PSBCVG9wTGVmdFsxXSAmJlxuXHRcdFx0XHRBQm90dG9tTGVmdFsxXSA+PSBCQm90dG9tTGVmdFsxXSkgfHxcblx0XHRcdChBVG9wTGVmdFsxXSA+PSBCVG9wTGVmdFsxXSAmJlxuXHRcdFx0XHRBQm90dG9tTGVmdFsxXSA8PSBCQm90dG9tTGVmdFsxXSAmJlxuXHRcdFx0XHRBVG9wTGVmdFswXSA8PSBCVG9wTGVmdFswXSAmJlxuXHRcdFx0XHRBVG9wUmlnaHRbMF0gPj0gQlRvcFJpZ2h0WzBdKVxuXHRcdCkge1xuXHRcdFx0b3ZlcmFsbFJlc3VsdCA9IHRydWU7XG5cdFx0fVxuXG5cdFx0aWYgKFxuXHRcdFx0QlRvcExlZnRbMF0gPT0gQVRvcExlZnRbMF0gJiZcblx0XHRcdEJUb3BSaWdodFswXSA9PSBBVG9wUmlnaHRbMF0gJiZcblx0XHRcdCgoQlRvcExlZnRbMV0gPj0gQVRvcExlZnRbMV0gJiYgQlRvcExlZnRbMV0gPCBBQm90dG9tTGVmdFsxXSkgfHxcblx0XHRcdFx0KEJCb3R0b21MZWZ0WzFdID4gQVRvcExlZnRbMV0gJiZcblx0XHRcdFx0XHRCQm90dG9tTGVmdFsxXSA8PSBBQm90dG9tTGVmdFsxXSkpXG5cdFx0KSB7XG5cdFx0XHRvdmVyYWxsUmVzdWx0ID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZiAoXG5cdFx0XHRBVG9wTGVmdFswXSA9PSBCVG9wTGVmdFswXSAmJlxuXHRcdFx0QVRvcFJpZ2h0WzBdID09IEJUb3BSaWdodFswXSAmJlxuXHRcdFx0KChBVG9wTGVmdFsxXSA+PSBCVG9wTGVmdFsxXSAmJiBBVG9wTGVmdFsxXSA8IEJCb3R0b21MZWZ0WzFdKSB8fFxuXHRcdFx0XHQoQUJvdHRvbUxlZnRbMV0gPiBCVG9wTGVmdFsxXSAmJlxuXHRcdFx0XHRcdEFCb3R0b21MZWZ0WzFdIDw9IEJCb3R0b21MZWZ0WzFdKSlcblx0XHQpIHtcblx0XHRcdG92ZXJhbGxSZXN1bHQgPSB0cnVlO1xuXHRcdFx0aWYgKEFUb3BMZWZ0WzFdID4gQlRvcExlZnRbMV0gJiYgQUJvdHRvbUxlZnRbMV0gPCBCQm90dG9tTGVmdFsxXSkge1xuXHRcdFx0XHRlbmd1bGZlZCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKFxuXHRcdFx0QlRvcExlZnRbMV0gPT0gQVRvcExlZnRbMV0gJiZcblx0XHRcdEJCb3R0b21MZWZ0WzFdID09IEFCb3R0b21MZWZ0WzFdICYmXG5cdFx0XHQoKEJUb3BMZWZ0WzBdID49IEFUb3BMZWZ0WzBdICYmIEJUb3BMZWZ0WzBdIDwgQVRvcFJpZ2h0WzBdKSB8fFxuXHRcdFx0XHQoQlRvcFJpZ2h0WzBdID4gQVRvcExlZnRbMF0gJiYgQlRvcFJpZ2h0WzBdIDw9IEFUb3BSaWdodFswXSkpXG5cdFx0KSB7XG5cdFx0XHRvdmVyYWxsUmVzdWx0ID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZiAoXG5cdFx0XHRBVG9wTGVmdFsxXSA9PSBCVG9wTGVmdFsxXSAmJlxuXHRcdFx0QUJvdHRvbUxlZnRbMV0gPT0gQkJvdHRvbUxlZnRbMV0gJiZcblx0XHRcdCgoQVRvcExlZnRbMF0gPj0gQlRvcExlZnRbMF0gJiYgQVRvcExlZnRbMF0gPCBCVG9wUmlnaHRbMF0pIHx8XG5cdFx0XHRcdChBVG9wUmlnaHRbMF0gPiBCVG9wTGVmdFswXSAmJiBBVG9wUmlnaHRbMF0gPD0gQlRvcFJpZ2h0WzBdKSlcblx0XHQpIHtcblx0XHRcdG92ZXJhbGxSZXN1bHQgPSB0cnVlO1xuXHRcdFx0aWYgKEFUb3BMZWZ0WzBdID4gQlRvcExlZnRbMF0gJiYgQVRvcFJpZ2h0WzBdIDwgQlRvcFJpZ2h0WzBdKSB7XG5cdFx0XHRcdGVuZ3VsZmVkID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAocmVzdWx0VHlwZSA9PSBcIm92ZXJhbGxcIikge1xuXHRcdFx0cmV0dXJuIG92ZXJhbGxSZXN1bHQ7XG5cdFx0fSBlbHNlIGlmIChyZXN1bHRUeXBlID09IFwiaW5kaXZpZHVhbFwiKSB7XG5cdFx0XHRyZXR1cm4gQlJlc3VsdEFycjtcblx0XHR9IGVsc2UgaWYgKHJlc3VsdFR5cGUgPT0gXCJhbGxcIikge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0b3ZlcmFsbDogb3ZlcmFsbFJlc3VsdCxcblx0XHRcdFx0aW5kaXZpZHVhbDogQlJlc3VsdEFycixcblx0XHRcdFx0aXNJbnNpZGU6IGlzSW5zaWRlLFxuXHRcdFx0XHRlbmd1bGZlZDogZW5ndWxmZWRcblx0XHRcdH07XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBvdmVyYWxsUmVzdWx0O1xuXHRcdH1cblx0fTtcblxuXHRMaW1iZXJHcmlkVmlldy5wcm90b3R5cGUuZml0SXRlbXNJbnRvRnJlZVNwYWNlcyA9IGZ1bmN0aW9uKFxuXHRcdGl0ZW1zLFxuXHRcdGZyZWVTcGFjZXMsXG5cdFx0ZG9Ob3RNZXJnZUl0ZW1zXG5cdCkge1xuXHRcdHZhciBpdGVtcyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoaXRlbXMpKTtcblx0XHR2YXIgZnJlZVNwYWNlcyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZnJlZVNwYWNlcykpO1xuXHRcdHZhciBkb05vdE1lcmdlSXRlbXMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRvTm90TWVyZ2VJdGVtcykpO1xuXG5cdFx0dGhpcy5zb3J0UGxhaW5zQnlBcmVhKGl0ZW1zKTtcblxuXHRcdHZhciByZXBvc2l0aW9uZWRJdGVtcyA9IFtdO1xuXHRcdHZhciBtYXRjaCA9IHRoaXMuZmluZE1hdGNoaW5nU3BhY2UoaXRlbXMsIGZyZWVTcGFjZXMpO1xuXHRcdHdoaWxlIChcblx0XHRcdG1hdGNoLm1hdGNoaW5nSXRlbUluZGV4ICE9IG51bGwgJiZcblx0XHRcdG1hdGNoLm1hdGNoaW5nRnJlZVNwYWNlSW5kZXggIT0gbnVsbFxuXHRcdCkge1xuXHRcdFx0dmFyIHRlbXBJdGVtID0gSlNPTi5wYXJzZShcblx0XHRcdFx0SlNPTi5zdHJpbmdpZnkoaXRlbXNbbWF0Y2gubWF0Y2hpbmdJdGVtSW5kZXhdKVxuXHRcdFx0KTtcblxuXHRcdFx0dmFyIHJlcG9zaXRpb25lZEl0ZW0gPSB7XG5cdFx0XHRcdHg6XG5cdFx0XHRcdFx0ZnJlZVNwYWNlc1ttYXRjaC5tYXRjaGluZ0ZyZWVTcGFjZUluZGV4XS54ICtcblx0XHRcdFx0XHR0aGlzLmdldE1hcmdpbkF0UG9pbnQoXG5cdFx0XHRcdFx0XHRmcmVlU3BhY2VzW21hdGNoLm1hdGNoaW5nRnJlZVNwYWNlSW5kZXhdLnhcblx0XHRcdFx0XHQpLFxuXHRcdFx0XHR5OlxuXHRcdFx0XHRcdGZyZWVTcGFjZXNbbWF0Y2gubWF0Y2hpbmdGcmVlU3BhY2VJbmRleF0ueSArXG5cdFx0XHRcdFx0dGhpcy5nZXRNYXJnaW5BdFBvaW50KFxuXHRcdFx0XHRcdFx0ZnJlZVNwYWNlc1ttYXRjaC5tYXRjaGluZ0ZyZWVTcGFjZUluZGV4XS55XG5cdFx0XHRcdFx0KSxcblx0XHRcdFx0d2lkdGg6IHRlbXBJdGVtLndpZHRoLFxuXHRcdFx0XHRoZWlnaHQ6IHRlbXBJdGVtLmhlaWdodCxcblx0XHRcdFx0aW5kZXg6IHRlbXBJdGVtLmluZGV4XG5cdFx0XHR9O1xuXHRcdFx0cmVwb3NpdGlvbmVkSXRlbXMucHVzaChyZXBvc2l0aW9uZWRJdGVtKTtcblxuXHRcdFx0dmFyIG9jY3VwaWVkU3BhY2UgPSB7XG5cdFx0XHRcdHg6IGZyZWVTcGFjZXNbbWF0Y2gubWF0Y2hpbmdGcmVlU3BhY2VJbmRleF0ueCxcblx0XHRcdFx0eTogZnJlZVNwYWNlc1ttYXRjaC5tYXRjaGluZ0ZyZWVTcGFjZUluZGV4XS55LFxuXHRcdFx0XHR3aWR0aDpcblx0XHRcdFx0XHR0ZW1wSXRlbS53aWR0aCArXG5cdFx0XHRcdFx0dGhpcy5nZXRNYXJnaW5BdFBvaW50KFxuXHRcdFx0XHRcdFx0ZnJlZVNwYWNlc1ttYXRjaC5tYXRjaGluZ0ZyZWVTcGFjZUluZGV4XS54XG5cdFx0XHRcdFx0KSxcblx0XHRcdFx0aGVpZ2h0OlxuXHRcdFx0XHRcdHRlbXBJdGVtLmhlaWdodCArXG5cdFx0XHRcdFx0dGhpcy5nZXRNYXJnaW5BdFBvaW50KFxuXHRcdFx0XHRcdFx0ZnJlZVNwYWNlc1ttYXRjaC5tYXRjaGluZ0ZyZWVTcGFjZUluZGV4XS55XG5cdFx0XHRcdFx0KSxcblx0XHRcdFx0ZG9Ob3RNZXJnZUZsYWc6IHRydWVcblx0XHRcdH07XG5cblx0XHRcdGl0ZW1zLnNwbGljZShtYXRjaC5tYXRjaGluZ0l0ZW1JbmRleCwgMSk7XG5cblx0XHRcdHZhciBuZXdGcmVlU3BhY2VzID0gW107XG5cblx0XHRcdHZhciBsZW5ndGhfMCA9IGZyZWVTcGFjZXMubGVuZ3RoO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHRcdHZhciBwbGFuZURpZmYgPSB0aGlzLnN1YnRyYWN0UGxhbmVzKFxuXHRcdFx0XHRcdGZyZWVTcGFjZXNbaV0sXG5cdFx0XHRcdFx0b2NjdXBpZWRTcGFjZVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRpZiAocGxhbmVEaWZmICE9IGZhbHNlKSB7XG5cdFx0XHRcdFx0bmV3RnJlZVNwYWNlcyA9IG5ld0ZyZWVTcGFjZXMuY29uY2F0KHBsYW5lRGlmZik7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bmV3RnJlZVNwYWNlcy5wdXNoKFxuXHRcdFx0XHRcdFx0SlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShmcmVlU3BhY2VzW2ldKSlcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIGNhbGN1bGF0ZSBuZXcgbWVyZ2VkRnJlZVNwYWNlc1xuXHRcdFx0ZG9Ob3RNZXJnZUl0ZW1zLnB1c2gob2NjdXBpZWRTcGFjZSk7XG5cdFx0XHR2YXIgbmV3TWVyZ2VkRnJlZVNwYWNlcyA9IHRoaXMubWVyZ2VGcmVlU3BhY2VzKFxuXHRcdFx0XHRuZXdGcmVlU3BhY2VzLFxuXHRcdFx0XHRkb05vdE1lcmdlSXRlbXNcblx0XHRcdCk7XG5cblx0XHRcdGZyZWVTcGFjZXMgPSBuZXdNZXJnZWRGcmVlU3BhY2VzO1xuXHRcdFx0dmFyIG1hdGNoID0gdGhpcy5maW5kTWF0Y2hpbmdTcGFjZShpdGVtcywgbmV3TWVyZ2VkRnJlZVNwYWNlcyk7XG5cdFx0fVxuXHRcdHJldHVybiB7IHJlcG9zaXRpb25lZEl0ZW1zOiByZXBvc2l0aW9uZWRJdGVtcywgZnJlZVNwYWNlczogZnJlZVNwYWNlcyB9O1xuXHR9O1xuXG5cdExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5maW5kTWF0Y2hpbmdTcGFjZSA9IGZ1bmN0aW9uKGl0ZW1zLCBmcmVlU3BhY2VzKSB7XG5cdFx0Ly8gSU1QT1JUQU5UXG5cdFx0Ly8gaXRlbXMgbXVzdCBzb3J0ZWQgaW4gZGVzY2VuZGluZyBvcmRlciBhY2NvcmRpbmcgdG8gYXJlYVxuXHRcdC8vIElNUE9SVEFOVCBFTkRcblxuXHRcdHZhciBtYXRjaGluZ0l0ZW1JbmRleCA9IG51bGw7XG5cdFx0dmFyIG1hdGNoaW5nRnJlZVNwYWNlSW5kZXggPSBudWxsO1xuXHRcdHZhciBsZW5ndGhfMCA9IGl0ZW1zLmxlbmd0aDtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF8wOyBpKyspIHtcblx0XHRcdHZhciByYW5kb21Qb3NzaWJpbGl0aWVzID0gW107XG5cdFx0XHR2YXIgcG9zc2liaWxpdGllc1dpZHRoID0gW107XG5cdFx0XHR2YXIgcG9zc2liaWxpdGllc0hlaWdodCA9IFtdO1xuXHRcdFx0dmFyIGxlbmd0aF8xID0gZnJlZVNwYWNlcy5sZW5ndGg7XG5cdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGxlbmd0aF8xOyBqKyspIHtcblx0XHRcdFx0dmFyIHRlbXBJdGVtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShpdGVtc1tpXSkpO1xuXHRcdFx0XHRpZiAodGhpcy5nZXRNYXJnaW5BdFBvaW50KGZyZWVTcGFjZXNbal0ueCkgPT0gdGhpcy5NQVJHSU4pIHtcblx0XHRcdFx0XHR0ZW1wSXRlbS53aWR0aCArPSB0aGlzLk1BUkdJTiAqIDE7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRoaXMuZ2V0TWFyZ2luQXRQb2ludChmcmVlU3BhY2VzW2pdLnkpID09IHRoaXMuTUFSR0lOKSB7XG5cdFx0XHRcdFx0dGVtcEl0ZW0uaGVpZ2h0ICs9IHRoaXMuTUFSR0lOICogMTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciBmcmVlU3BhY2VXaWR0aCA9IGZyZWVTcGFjZXNbal0ud2lkdGg7XG5cdFx0XHRcdHZhciBmcmVlU3BhY2VIZWlnaHQgPSBmcmVlU3BhY2VzW2pdLmhlaWdodDtcblxuXHRcdFx0XHRpZiAodGhpcy5hcmVQbGFpbnNJZGVudGljYWwodGVtcEl0ZW0sIGZyZWVTcGFjZXNbal0pKSB7XG5cdFx0XHRcdFx0bWF0Y2hpbmdJdGVtSW5kZXggPSBpO1xuXHRcdFx0XHRcdG1hdGNoaW5nRnJlZVNwYWNlSW5kZXggPSBqO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdE1hdGguZmxvb3IoZnJlZVNwYWNlV2lkdGggLyB0ZW1wSXRlbS53aWR0aCkgPj0gMSAmJlxuXHRcdFx0XHRcdGZyZWVTcGFjZUhlaWdodCA+PSB0ZW1wSXRlbS5oZWlnaHRcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0cG9zc2liaWxpdGllc1dpZHRoLnB1c2goaik7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdE1hdGguZmxvb3IoZnJlZVNwYWNlSGVpZ2h0IC8gdGVtcEl0ZW0uaGVpZ2h0KSA+PSAxICYmXG5cdFx0XHRcdFx0ZnJlZVNwYWNlV2lkdGggPj0gdGVtcEl0ZW0ud2lkdGhcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0cG9zc2liaWxpdGllc0hlaWdodC5wdXNoKGopO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHZhciBncmVhdGVzdFdpZHRoRGlmZiA9IDA7XG5cdFx0XHR2YXIgZ3JlYXRlc3RXaWR0aERpZmZJbmRleCA9IG51bGw7XG5cdFx0XHR2YXIgbWluWVBvc3NpYmlsaXRpZXNXaWR0aCA9IDA7XG5cdFx0XHR2YXIgbWluWVBvc3NpYmlsaXRpZXNXaWR0aEluZGV4ID0gbnVsbDtcblx0XHRcdHZhciBncmVhdGVzdEhlaWdodERpZmYgPSAwO1xuXHRcdFx0dmFyIGdyZWF0ZXN0SGVpZ2h0RGlmZkluZGV4ID0gbnVsbDtcblx0XHRcdHZhciBtaW5ZUG9zc2liaWxpdGllc0hlaWdodCA9IDA7XG5cdFx0XHR2YXIgbWluWVBvc3NpYmlsaXRpZXNIZWlnaHRJbmRleCA9IG51bGw7XG5cblx0XHRcdHZhciBsZW5ndGhfMSA9IHBvc3NpYmlsaXRpZXNXaWR0aC5sZW5ndGg7XG5cdFx0XHRmb3IgKGsgPSAwOyBrIDwgbGVuZ3RoXzE7IGsrKykge1xuXHRcdFx0XHR2YXIgZmxvb3JlZFF1b3RpZW50ID0gTWF0aC5mbG9vcihcblx0XHRcdFx0XHRmcmVlU3BhY2VzW3Bvc3NpYmlsaXRpZXNXaWR0aFtrXV0ud2lkdGggLyB0ZW1wSXRlbS53aWR0aFxuXHRcdFx0XHQpO1xuXHRcdFx0XHR2YXIgcXVvdGllbnQgPVxuXHRcdFx0XHRcdGZyZWVTcGFjZXNbcG9zc2liaWxpdGllc1dpZHRoW2tdXS53aWR0aCAvIHRlbXBJdGVtLndpZHRoO1xuXHRcdFx0XHR2YXIgZGlmZiA9IHF1b3RpZW50IC0gZmxvb3JlZFF1b3RpZW50O1xuXG5cdFx0XHRcdGlmIChkaWZmID4gZ3JlYXRlc3RXaWR0aERpZmYpIHtcblx0XHRcdFx0XHRncmVhdGVzdFdpZHRoRGlmZiA9IGRpZmY7XG5cdFx0XHRcdFx0Z3JlYXRlc3RXaWR0aERpZmZJbmRleCA9IHBvc3NpYmlsaXRpZXNXaWR0aFtrXTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRmcmVlU3BhY2VzW3Bvc3NpYmlsaXRpZXNXaWR0aFtrXV0ueSA8PVxuXHRcdFx0XHRcdFx0bWluWVBvc3NpYmlsaXRpZXNXaWR0aCB8fFxuXHRcdFx0XHRcdG1pbllQb3NzaWJpbGl0aWVzV2lkdGggPT0gMFxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0XHRmcmVlU3BhY2VzW3Bvc3NpYmlsaXRpZXNXaWR0aFtrXV0ueSA9PVxuXHRcdFx0XHRcdFx0bWluWVBvc3NpYmlsaXRpZXNXaWR0aFxuXHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0aWYgKGdyZWF0ZXN0V2lkdGhEaWZmSW5kZXggPT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0XHRtaW5ZUG9zc2liaWxpdGllc1dpZHRoID1cblx0XHRcdFx0XHRcdFx0XHRmcmVlU3BhY2VzW3Bvc3NpYmlsaXRpZXNXaWR0aFtrXV0ueTtcblx0XHRcdFx0XHRcdFx0bWluWVBvc3NpYmlsaXRpZXNXaWR0aEluZGV4ID0gcG9zc2liaWxpdGllc1dpZHRoW2tdO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0aWYgKGRpZmYgPT0gZ3JlYXRlc3RXaWR0aERpZmYpIHtcblx0XHRcdFx0XHRcdFx0XHRtaW5ZUG9zc2liaWxpdGllc1dpZHRoID1cblx0XHRcdFx0XHRcdFx0XHRcdGZyZWVTcGFjZXNbcG9zc2liaWxpdGllc1dpZHRoW2tdXS55O1xuXHRcdFx0XHRcdFx0XHRcdG1pbllQb3NzaWJpbGl0aWVzV2lkdGhJbmRleCA9XG5cdFx0XHRcdFx0XHRcdFx0XHRwb3NzaWJpbGl0aWVzV2lkdGhba107XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0bWluWVBvc3NpYmlsaXRpZXNXaWR0aCA9XG5cdFx0XHRcdFx0XHRcdGZyZWVTcGFjZXNbcG9zc2liaWxpdGllc1dpZHRoW2tdXS55O1xuXHRcdFx0XHRcdFx0bWluWVBvc3NpYmlsaXRpZXNXaWR0aEluZGV4ID0gcG9zc2liaWxpdGllc1dpZHRoW2tdO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR2YXIgbGVuZ3RoXzEgPSBwb3NzaWJpbGl0aWVzSGVpZ2h0Lmxlbmd0aDtcblx0XHRcdGZvciAoayA9IDA7IGsgPCBsZW5ndGhfMTsgaysrKSB7XG5cdFx0XHRcdHZhciBmbG9vcmVkUXVvdGllbnQgPSBNYXRoLmZsb29yKFxuXHRcdFx0XHRcdGZyZWVTcGFjZXNbcG9zc2liaWxpdGllc0hlaWdodFtrXV0uaGVpZ2h0IC8gdGVtcEl0ZW0uaGVpZ2h0XG5cdFx0XHRcdCk7XG5cdFx0XHRcdHZhciBxdW90aWVudCA9XG5cdFx0XHRcdFx0ZnJlZVNwYWNlc1twb3NzaWJpbGl0aWVzSGVpZ2h0W2tdXS5oZWlnaHQgLyB0ZW1wSXRlbS5oZWlnaHQ7XG5cdFx0XHRcdHZhciBkaWZmID0gcXVvdGllbnQgLSBmbG9vcmVkUXVvdGllbnQ7XG5cblx0XHRcdFx0aWYgKGRpZmYgPiBncmVhdGVzdEhlaWdodERpZmYpIHtcblx0XHRcdFx0XHRncmVhdGVzdEhlaWdodERpZmYgPSBkaWZmO1xuXHRcdFx0XHRcdGdyZWF0ZXN0SGVpZ2h0RGlmZkluZGV4ID0gcG9zc2liaWxpdGllc0hlaWdodFtrXTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRmcmVlU3BhY2VzW3Bvc3NpYmlsaXRpZXNIZWlnaHRba11dLnkgPD1cblx0XHRcdFx0XHRcdG1pbllQb3NzaWJpbGl0aWVzSGVpZ2h0IHx8XG5cdFx0XHRcdFx0bWluWVBvc3NpYmlsaXRpZXNIZWlnaHQgPT0gMFxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0XHRmcmVlU3BhY2VzW3Bvc3NpYmlsaXRpZXNIZWlnaHRba11dLnkgPT1cblx0XHRcdFx0XHRcdG1pbllQb3NzaWJpbGl0aWVzSGVpZ2h0XG5cdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRpZiAoZ3JlYXRlc3RIZWlnaHREaWZmSW5kZXggPT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0XHRtaW5ZUG9zc2liaWxpdGllc0hlaWdodCA9XG5cdFx0XHRcdFx0XHRcdFx0ZnJlZVNwYWNlc1twb3NzaWJpbGl0aWVzSGVpZ2h0W2tdXS55O1xuXHRcdFx0XHRcdFx0XHRtaW5ZUG9zc2liaWxpdGllc0hlaWdodEluZGV4ID1cblx0XHRcdFx0XHRcdFx0XHRwb3NzaWJpbGl0aWVzSGVpZ2h0W2tdO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0aWYgKGRpZmYgPT0gZ3JlYXRlc3RIZWlnaHREaWZmKSB7XG5cdFx0XHRcdFx0XHRcdFx0bWluWVBvc3NpYmlsaXRpZXNIZWlnaHQgPVxuXHRcdFx0XHRcdFx0XHRcdFx0ZnJlZVNwYWNlc1twb3NzaWJpbGl0aWVzSGVpZ2h0W2tdXS55O1xuXHRcdFx0XHRcdFx0XHRcdG1pbllQb3NzaWJpbGl0aWVzSGVpZ2h0SW5kZXggPVxuXHRcdFx0XHRcdFx0XHRcdFx0cG9zc2liaWxpdGllc0hlaWdodFtrXTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRtaW5ZUG9zc2liaWxpdGllc0hlaWdodCA9XG5cdFx0XHRcdFx0XHRcdGZyZWVTcGFjZXNbcG9zc2liaWxpdGllc0hlaWdodFtrXV0ueTtcblx0XHRcdFx0XHRcdG1pbllQb3NzaWJpbGl0aWVzSGVpZ2h0SW5kZXggPSBwb3NzaWJpbGl0aWVzSGVpZ2h0W2tdO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoXG5cdFx0XHRcdG1pbllQb3NzaWJpbGl0aWVzV2lkdGhJbmRleCAhPSBudWxsIHx8XG5cdFx0XHRcdG1pbllQb3NzaWJpbGl0aWVzSGVpZ2h0SW5kZXggIT0gbnVsbFxuXHRcdFx0KSB7XG5cdFx0XHRcdGlmIChtaW5ZUG9zc2liaWxpdGllc1dpZHRoIDwgbWluWVBvc3NpYmlsaXRpZXNIZWlnaHQpIHtcblx0XHRcdFx0XHRtYXRjaGluZ0l0ZW1JbmRleCA9IGk7XG5cdFx0XHRcdFx0bWF0Y2hpbmdGcmVlU3BhY2VJbmRleCA9IG1pbllQb3NzaWJpbGl0aWVzV2lkdGhJbmRleDtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRtYXRjaGluZ0l0ZW1JbmRleCA9IGk7XG5cdFx0XHRcdFx0bWF0Y2hpbmdGcmVlU3BhY2VJbmRleCA9IG1pbllQb3NzaWJpbGl0aWVzSGVpZ2h0SW5kZXg7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gQmVsb3cgaWYgc3RhdGVtZW50IHdpbGwgbmV2ZXIgZ2V0IGV4ZWN1dGVkLCBTb3JyeSBPQ0Rcblx0XHRcdGlmIChcblx0XHRcdFx0Z3JlYXRlc3RXaWR0aERpZmZJbmRleCAhPSBudWxsIHx8XG5cdFx0XHRcdGdyZWF0ZXN0SGVpZ2h0RGlmZkluZGV4ICE9IG51bGxcblx0XHRcdCkge1xuXHRcdFx0XHRpZiAoZ3JlYXRlc3RXaWR0aERpZmYgPiBncmVhdGVzdEhlaWdodERpZmYpIHtcblx0XHRcdFx0XHRtYXRjaGluZ0l0ZW1JbmRleCA9IGk7XG5cdFx0XHRcdFx0bWF0Y2hpbmdGcmVlU3BhY2VJbmRleCA9IGdyZWF0ZXN0V2lkdGhEaWZmSW5kZXg7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bWF0Y2hpbmdJdGVtSW5kZXggPSBpO1xuXHRcdFx0XHRcdG1hdGNoaW5nRnJlZVNwYWNlSW5kZXggPSBncmVhdGVzdEhlaWdodERpZmZJbmRleDtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4ge1xuXHRcdFx0bWF0Y2hpbmdJdGVtSW5kZXg6IG1hdGNoaW5nSXRlbUluZGV4LFxuXHRcdFx0bWF0Y2hpbmdGcmVlU3BhY2VJbmRleDogbWF0Y2hpbmdGcmVlU3BhY2VJbmRleFxuXHRcdH07XG5cdH07XG5cblx0TGltYmVyR3JpZFZpZXcucHJvdG90eXBlLmZpdFJlbWFpbmluZ0l0ZW1zID0gZnVuY3Rpb24oXG5cdFx0cG9zaXRpb25EYXRhLFxuXHRcdHJlbWFpbmluZ0l0ZW1zLFxuXHRcdGFsbEFmZmVjdGVkSXRlbXMsXG5cdFx0Y2hhbmdlZEluZGV4LFxuXHRcdHByZXZpb3VzRml0RGV0YWlsc1xuXHQpIHtcblx0XHRpZiAocmVtYWluaW5nSXRlbXMubGVuZ3RoID09IDApIHtcblx0XHRcdHJldHVybiBwb3NpdGlvbkRhdGE7XG5cdFx0fVxuXHRcdHZhciBhZmZlY3RlZEl0ZW1zT2JqZWN0ID0gW107XG5cdFx0dmFyIGxlbmd0aF8wID0gYWxsQWZmZWN0ZWRJdGVtcy5hZmZlY3RlZEl0ZW1zLmxlbmd0aDtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF8wOyBpKyspIHtcblx0XHRcdGFmZmVjdGVkSXRlbXNPYmplY3QucHVzaChcblx0XHRcdFx0SlNPTi5wYXJzZShcblx0XHRcdFx0XHRKU09OLnN0cmluZ2lmeShcblx0XHRcdFx0XHRcdHBvc2l0aW9uRGF0YVthbGxBZmZlY3RlZEl0ZW1zLmFmZmVjdGVkSXRlbXNbaV1dXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHQpXG5cdFx0XHQpO1xuXHRcdH1cblx0XHR2YXIgYWZmZWN0ZWRJdGVtc09iamVjdERlcHRoRGVzY09yZGVyID0gdGhpcy5zb3J0UGxhaW5zQnlEZXB0aChcblx0XHRcdGFmZmVjdGVkSXRlbXNPYmplY3Rcblx0XHQpO1xuXHRcdHZhciBncmVhdGVzdERlcHRoQWZmZWN0ZWRJdGVtcyA9XG5cdFx0XHRhZmZlY3RlZEl0ZW1zT2JqZWN0RGVwdGhEZXNjT3JkZXJbMF0ueSArXG5cdFx0XHRhZmZlY3RlZEl0ZW1zT2JqZWN0RGVwdGhEZXNjT3JkZXJbMF0uaGVpZ2h0O1xuXG5cdFx0dmFyIHJlbWFpbmluZ0l0ZW1zSW5kaWNlc01hcCA9IHt9O1xuXHRcdHZhciBsZW5ndGhfMCA9IHJlbWFpbmluZ0l0ZW1zLmxlbmd0aDtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF8wOyBpKyspIHtcblx0XHRcdHJlbWFpbmluZ0l0ZW1zSW5kaWNlc01hcFtyZW1haW5pbmdJdGVtc1tpXV0gPSB0cnVlO1xuXHRcdH1cblxuXHRcdHZhciBpdGVtc0Fib3ZlR3JlYXRlc3REZXB0aCA9IFtdO1xuXHRcdHZhciByZWNhbGN1bGF0ZWRHcmVhdGVzdERlcHRoQWZmZWN0ZWRJdGVtc0FuZE5vbkFmZmVjdGVkSXRlbXNDYXNlR3JlYXRlciA9IG51bGw7XG5cdFx0dmFyIHJlY2FsY3VsYXRlZEdyZWF0ZXN0RGVwdGhBZmZlY3RlZEl0ZW1zQW5kTm9uQWZmZWN0ZWRJdGVtc0Nhc2VMZXNzZXIgPSBudWxsO1xuXHRcdHZhciBsZW5ndGhfMCA9IHBvc2l0aW9uRGF0YS5sZW5ndGg7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHRpZiAocmVtYWluaW5nSXRlbXNJbmRpY2VzTWFwLmhhc093blByb3BlcnR5KGkpKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKFxuXHRcdFx0XHRwb3NpdGlvbkRhdGFbaV0ueSA8IGdyZWF0ZXN0RGVwdGhBZmZlY3RlZEl0ZW1zICYmXG5cdFx0XHRcdChwb3NpdGlvbkRhdGFbaV0ueSArIHBvc2l0aW9uRGF0YVtpXS5oZWlnaHQgPD1cblx0XHRcdFx0XHRncmVhdGVzdERlcHRoQWZmZWN0ZWRJdGVtcyB8fFxuXHRcdFx0XHRcdHBvc2l0aW9uRGF0YVtpXS55ICsgcG9zaXRpb25EYXRhW2ldLmhlaWdodCA+XG5cdFx0XHRcdFx0XHRncmVhdGVzdERlcHRoQWZmZWN0ZWRJdGVtcylcblx0XHRcdCkge1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0cG9zaXRpb25EYXRhW2ldLnkgKyBwb3NpdGlvbkRhdGFbaV0uaGVpZ2h0ID5cblx0XHRcdFx0XHRncmVhdGVzdERlcHRoQWZmZWN0ZWRJdGVtc1xuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0XHRyZWNhbGN1bGF0ZWRHcmVhdGVzdERlcHRoQWZmZWN0ZWRJdGVtc0FuZE5vbkFmZmVjdGVkSXRlbXNDYXNlR3JlYXRlciA8XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uRGF0YVtpXS55ICsgcG9zaXRpb25EYXRhW2ldLmhlaWdodCB8fFxuXHRcdFx0XHRcdFx0cmVjYWxjdWxhdGVkR3JlYXRlc3REZXB0aEFmZmVjdGVkSXRlbXNBbmROb25BZmZlY3RlZEl0ZW1zQ2FzZUdyZWF0ZXIgPT1cblx0XHRcdFx0XHRcdFx0bnVsbFxuXHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0cmVjYWxjdWxhdGVkR3JlYXRlc3REZXB0aEFmZmVjdGVkSXRlbXNBbmROb25BZmZlY3RlZEl0ZW1zQ2FzZUdyZWF0ZXIgPVxuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbkRhdGFbaV0ueSArIHBvc2l0aW9uRGF0YVtpXS5oZWlnaHQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRwb3NpdGlvbkRhdGFbaV0ueSArIHBvc2l0aW9uRGF0YVtpXS5oZWlnaHQgPD1cblx0XHRcdFx0XHRncmVhdGVzdERlcHRoQWZmZWN0ZWRJdGVtc1xuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0XHRyZWNhbGN1bGF0ZWRHcmVhdGVzdERlcHRoQWZmZWN0ZWRJdGVtc0FuZE5vbkFmZmVjdGVkSXRlbXNDYXNlTGVzc2VyIDxcblx0XHRcdFx0XHRcdFx0cG9zaXRpb25EYXRhW2ldLnkgKyBwb3NpdGlvbkRhdGFbaV0uaGVpZ2h0IHx8XG5cdFx0XHRcdFx0XHRyZWNhbGN1bGF0ZWRHcmVhdGVzdERlcHRoQWZmZWN0ZWRJdGVtc0FuZE5vbkFmZmVjdGVkSXRlbXNDYXNlTGVzc2VyID09XG5cdFx0XHRcdFx0XHRcdG51bGxcblx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdHJlY2FsY3VsYXRlZEdyZWF0ZXN0RGVwdGhBZmZlY3RlZEl0ZW1zQW5kTm9uQWZmZWN0ZWRJdGVtc0Nhc2VMZXNzZXIgPVxuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbkRhdGFbaV0ueSArIHBvc2l0aW9uRGF0YVtpXS5oZWlnaHQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKFxuXHRcdFx0cmVjYWxjdWxhdGVkR3JlYXRlc3REZXB0aEFmZmVjdGVkSXRlbXNBbmROb25BZmZlY3RlZEl0ZW1zQ2FzZUdyZWF0ZXIgIT1cblx0XHRcdG51bGxcblx0XHQpIHtcblx0XHRcdC8vIGZpdFJlbWFpbmluZ0l0ZW1zIENhc2UgSVxuXHRcdFx0dmFyIGdyZWF0ZXN0RGVwdGhPZkFmZmVjdGVkQXJlYSA9IHJlY2FsY3VsYXRlZEdyZWF0ZXN0RGVwdGhBZmZlY3RlZEl0ZW1zQW5kTm9uQWZmZWN0ZWRJdGVtc0Nhc2VHcmVhdGVyO1xuXHRcdFx0dmFyIGl0ZW1zVG9TaGlmdERhdGEgPSB0aGlzLmdldEl0ZW1zRnJvbVBvaW50RGVwdGgoXG5cdFx0XHRcdGdyZWF0ZXN0RGVwdGhPZkFmZmVjdGVkQXJlYSxcblx0XHRcdFx0dHJ1ZSxcblx0XHRcdFx0cG9zaXRpb25EYXRhXG5cdFx0XHQpO1xuXHRcdFx0dmFyIGl0ZW1zVG9TaGlmdCA9IGl0ZW1zVG9TaGlmdERhdGEuaXRlbXNGcm9tUG9pbnREZXB0aDtcblxuXHRcdFx0dmFyIGluaXRpYWxGaXREYXRhID0gdGhpcy5maXRSZW1haW5pbmdJdGVtc0Fib3ZlRGVlcGVzdExpbmUoXG5cdFx0XHRcdGdyZWF0ZXN0RGVwdGhPZkFmZmVjdGVkQXJlYSxcblx0XHRcdFx0cG9zaXRpb25EYXRhLFxuXHRcdFx0XHRyZW1haW5pbmdJdGVtcyxcblx0XHRcdFx0cHJldmlvdXNGaXREZXRhaWxzXG5cdFx0XHQpO1xuXHRcdFx0cG9zaXRpb25EYXRhID0gaW5pdGlhbEZpdERhdGEucG9zaXRpb25EYXRhO1xuXHRcdFx0cmVtYWluaW5nSXRlbXMgPSBpbml0aWFsRml0RGF0YS5yZW1haW5pbmdJdGVtcztcblxuXHRcdFx0dmFyIGZpbmFsRml0RGF0YSA9IHRoaXMuZml0UmVtYWluaW5nSXRlbXNCZWxvd0RlZXBlc3RMaW5lKFxuXHRcdFx0XHRncmVhdGVzdERlcHRoT2ZBZmZlY3RlZEFyZWEsXG5cdFx0XHRcdHBvc2l0aW9uRGF0YSxcblx0XHRcdFx0cmVtYWluaW5nSXRlbXMsXG5cdFx0XHRcdGFsbEFmZmVjdGVkSXRlbXNcblx0XHRcdCk7XG5cdFx0XHR2YXIgZmluYWxQb3NpdGlvbkRhdGEgPSB0aGlzLnNoaXRmdEl0ZW1zQmVsb3coXG5cdFx0XHRcdGZpbmFsRml0RGF0YS5kZWVwZXN0WSAtXG5cdFx0XHRcdFx0Z3JlYXRlc3REZXB0aE9mQWZmZWN0ZWRBcmVhICtcblx0XHRcdFx0XHRpdGVtc1RvU2hpZnREYXRhLnNoaWZ0SGVpZ2h0VG9BZGQsXG5cdFx0XHRcdGZpbmFsRml0RGF0YS5wb3NpdGlvbkRhdGEsXG5cdFx0XHRcdGl0ZW1zVG9TaGlmdFxuXHRcdFx0KTtcblx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0cmVjYWxjdWxhdGVkR3JlYXRlc3REZXB0aEFmZmVjdGVkSXRlbXNBbmROb25BZmZlY3RlZEl0ZW1zQ2FzZUxlc3NlciAhPVxuXHRcdFx0bnVsbFxuXHRcdCkge1xuXHRcdFx0Ly8gZml0UmVtYWluaW5nSXRlbXMgQ2FzZSBJSVxuXHRcdFx0dmFyIGdyZWF0ZXN0RGVwdGhPZkFmZmVjdGVkQXJlYSA9IHJlY2FsY3VsYXRlZEdyZWF0ZXN0RGVwdGhBZmZlY3RlZEl0ZW1zQW5kTm9uQWZmZWN0ZWRJdGVtc0Nhc2VMZXNzZXI7XG5cdFx0XHR2YXIgaXRlbXNUb1NoaWZ0RGF0YSA9IHRoaXMuZ2V0SXRlbXNGcm9tUG9pbnREZXB0aChcblx0XHRcdFx0Z3JlYXRlc3REZXB0aE9mQWZmZWN0ZWRBcmVhLFxuXHRcdFx0XHRmYWxzZSxcblx0XHRcdFx0cG9zaXRpb25EYXRhXG5cdFx0XHQpO1xuXHRcdFx0dmFyIGl0ZW1zVG9TaGlmdCA9IGl0ZW1zVG9TaGlmdERhdGEuaXRlbXNGcm9tUG9pbnREZXB0aDtcblxuXHRcdFx0dmFyIGZpbmFsRml0RGF0YSA9IHRoaXMuZml0UmVtYWluaW5nSXRlbXNCZWxvd0RlZXBlc3RMaW5lKFxuXHRcdFx0XHRncmVhdGVzdERlcHRoT2ZBZmZlY3RlZEFyZWEsXG5cdFx0XHRcdHBvc2l0aW9uRGF0YSxcblx0XHRcdFx0cmVtYWluaW5nSXRlbXMsXG5cdFx0XHRcdGFsbEFmZmVjdGVkSXRlbXNcblx0XHRcdCk7XG5cdFx0XHR2YXIgZmluYWxQb3NpdGlvbkRhdGEgPSB0aGlzLnNoaXRmdEl0ZW1zQmVsb3coXG5cdFx0XHRcdGZpbmFsRml0RGF0YS5kZWVwZXN0WSAtIGdyZWF0ZXN0RGVwdGhPZkFmZmVjdGVkQXJlYSxcblx0XHRcdFx0ZmluYWxGaXREYXRhLnBvc2l0aW9uRGF0YSxcblx0XHRcdFx0aXRlbXNUb1NoaWZ0XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdHJldHVybiBmaW5hbFBvc2l0aW9uRGF0YTtcblx0fTtcblxuXHRMaW1iZXJHcmlkVmlldy5wcm90b3R5cGUuZml0UmVtYWluaW5nSXRlbXNBYm92ZURlZXBlc3RMaW5lID0gZnVuY3Rpb24oXG5cdFx0ZGVlcFBvaW50LFxuXHRcdHBvc2l0aW9uRGF0YSxcblx0XHRyZW1haW5pbmdJdGVtcyxcblx0XHRwcmV2aW91c0ZpdERldGFpbHNcblx0KSB7XG5cdFx0dmFyIGxpbmVQbGFuZSA9IHtcblx0XHRcdHg6IDAsXG5cdFx0XHR5OiBkZWVwUG9pbnQsXG5cdFx0XHR3aWR0aDogdGhpcy5XSURUSCxcblx0XHRcdGhlaWdodDogMVxuXHRcdH07XG5cblx0XHQvLyBmaW5kIGFsbCB0aGUgaXRlbXMgYWJvdmUgb3Igb24gZGVlcFBvaW50XG5cdFx0dmFyIHJlbWFpbmluZ0l0ZW1zTWFwID0ge307XG5cdFx0dmFyIGxlbmd0aF8wID0gcmVtYWluaW5nSXRlbXMubGVuZ3RoO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHRcdFx0cmVtYWluaW5nSXRlbXNNYXBbcmVtYWluaW5nSXRlbXNbaV1dID0gdHJ1ZTtcblx0XHR9XG5cdFx0dmFyIGRvTm90TWVyZ2VJdGVtcyA9IFtdO1xuXHRcdHZhciBsZW5ndGhfMCA9IHBvc2l0aW9uRGF0YS5sZW5ndGg7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHRpZiAocmVtYWluaW5nSXRlbXNNYXAuaGFzT3duUHJvcGVydHkoaSkpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAoXG5cdFx0XHRcdHBvc2l0aW9uRGF0YVtpXS55IDw9IGRlZXBQb2ludCAmJlxuXHRcdFx0XHRwb3NpdGlvbkRhdGFbaV0ueSArIHBvc2l0aW9uRGF0YVtpXS5oZWlnaHQgPD0gZGVlcFBvaW50XG5cdFx0XHQpIHtcblx0XHRcdFx0Ly8gJiYgYWRkZWQgcmVjZW50bHkgZHVlIHRvIGEgYnVnIGluIGFsZ29cblx0XHRcdFx0dmFyIG9iaiA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocG9zaXRpb25EYXRhW2ldKSk7XG5cdFx0XHRcdG9iai5kb05vdE1lcmdlRmxhZyA9IHRydWU7XG5cdFx0XHRcdGRvTm90TWVyZ2VJdGVtcy5wdXNoKG9iaik7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dmFyIHJlbWFpbmluZ0ZyZWVTcGFjZXMgPSBwcmV2aW91c0ZpdERldGFpbHMuZnJlZVNwYWNlcztcblx0XHRyZW1haW5pbmdGcmVlU3BhY2VzLnB1c2gobGluZVBsYW5lKTtcblxuXHRcdHZhciBtZXJnZWRGcmVlU3BhY2VzID0gdGhpcy5tZXJnZUZyZWVTcGFjZXMoXG5cdFx0XHRyZW1haW5pbmdGcmVlU3BhY2VzLFxuXHRcdFx0ZG9Ob3RNZXJnZUl0ZW1zXG5cdFx0KTtcblx0XHR2YXIgbGVuZ3RoXzAgPSBtZXJnZWRGcmVlU3BhY2VzLmxlbmd0aDtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF8wOyBpKyspIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bWVyZ2VkRnJlZVNwYWNlc1tpXS55ICsgbWVyZ2VkRnJlZVNwYWNlc1tpXS5oZWlnaHQgPT1cblx0XHRcdFx0ZGVlcFBvaW50ICsgMVxuXHRcdFx0KSB7XG5cdFx0XHRcdG1lcmdlZEZyZWVTcGFjZXNbaV0uaGVpZ2h0IC09IDE7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dmFyIHJlbWFpbmluZ0l0ZW1zT2JqZWN0ID0gW107XG5cdFx0dmFyIGxlbmd0aF8wID0gcmVtYWluaW5nSXRlbXMubGVuZ3RoO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHRcdFx0cmVtYWluaW5nSXRlbXNPYmplY3QucHVzaChcblx0XHRcdFx0SlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShwb3NpdGlvbkRhdGFbcmVtYWluaW5nSXRlbXNbaV1dKSlcblx0XHRcdCk7XG5cdFx0XHRyZW1haW5pbmdJdGVtc09iamVjdFtpXS5pbmRleCA9IHJlbWFpbmluZ0l0ZW1zW2ldO1xuXHRcdH1cblx0XHR2YXIgZml0RGV0YWlscyA9IHRoaXMuZml0SXRlbXNJbnRvRnJlZVNwYWNlcyhcblx0XHRcdHJlbWFpbmluZ0l0ZW1zT2JqZWN0LFxuXHRcdFx0bWVyZ2VkRnJlZVNwYWNlcyxcblx0XHRcdGRvTm90TWVyZ2VJdGVtc1xuXHRcdCk7XG5cdFx0dmFyIGZpdHRlZEl0ZW1zID0gZml0RGV0YWlscy5yZXBvc2l0aW9uZWRJdGVtcztcblxuXHRcdGlmIChmaXR0ZWRJdGVtcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRmaXR0ZWRSZW1haW5pbmdJdGVtcyA9IHt9O1xuXHRcdFx0dmFyIGxlbmd0aF8wID0gZml0dGVkSXRlbXMubGVuZ3RoO1xuXHRcdFx0dmFyIGxlbmd0aF8xID0gcmVtYWluaW5nSXRlbXMubGVuZ3RoO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgbGVuZ3RoXzE7IGorKykge1xuXHRcdFx0XHRcdGlmIChmaXR0ZWRJdGVtc1tpXS5pbmRleCA9PSByZW1haW5pbmdJdGVtc1tqXSkge1xuXHRcdFx0XHRcdFx0Zml0dGVkUmVtYWluaW5nSXRlbXNbal0gPSB0cnVlO1xuXHRcdFx0XHRcdFx0cG9zaXRpb25EYXRhW3JlbWFpbmluZ0l0ZW1zW2pdXS54ID0gZml0dGVkSXRlbXNbaV0ueDtcblx0XHRcdFx0XHRcdHBvc2l0aW9uRGF0YVtyZW1haW5pbmdJdGVtc1tqXV0ueSA9IGZpdHRlZEl0ZW1zW2ldLnk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHZhciB0ZW1wID0gT2JqZWN0LmtleXMoZml0dGVkUmVtYWluaW5nSXRlbXMpO1xuXHRcdFx0dmFyIGxlbmd0aF8wID0gdGVtcC5sZW5ndGggLSAxO1xuXHRcdFx0Zm9yICh2YXIgaSA9IGxlbmd0aF8wOyBpID49IDA7IGktLSkge1xuXHRcdFx0XHRyZW1haW5pbmdJdGVtcy5zcGxpY2UodGVtcFtpXSwgMSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHsgcmVtYWluaW5nSXRlbXM6IHJlbWFpbmluZ0l0ZW1zLCBwb3NpdGlvbkRhdGE6IHBvc2l0aW9uRGF0YSB9O1xuXHR9O1xuXG5cdExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5maXRSZW1haW5pbmdJdGVtc0JlbG93RGVlcGVzdExpbmUgPSBmdW5jdGlvbihcblx0XHRzdGFydGluZ1ksXG5cdFx0cG9zaXRpb25EYXRhLFxuXHRcdHJlbWFpbmluZ0l0ZW1zLFxuXHRcdGFsbEFmZmVjdGVkSXRlbXNcblx0KSB7XG5cdFx0aWYgKHJlbWFpbmluZ0l0ZW1zLmxlbmd0aCA9PSAwKSB7XG5cdFx0XHRyZXR1cm4geyBwb3NpdGlvbkRhdGE6IHBvc2l0aW9uRGF0YSwgZGVlcGVzdFk6IHN0YXJ0aW5nWSB9O1xuXHRcdH1cblx0XHR2YXIgcmVtYWluaW5nSXRlbXNCYWNrdXAgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHJlbWFpbmluZ0l0ZW1zKSk7XG5cdFx0dmFyIHJlbWFpbmluZ0l0ZW1zT2JqZWN0ID0gW107XG5cdFx0dmFyIGxlbmd0aF8wID0gcmVtYWluaW5nSXRlbXMubGVuZ3RoO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHRcdFx0cmVtYWluaW5nSXRlbXNPYmplY3QucHVzaChcblx0XHRcdFx0SlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShwb3NpdGlvbkRhdGFbcmVtYWluaW5nSXRlbXNbaV1dKSlcblx0XHRcdCk7XG5cdFx0XHRyZW1haW5pbmdJdGVtc09iamVjdFtpXS5pbmRleCA9IHJlbWFpbmluZ0l0ZW1zW2ldO1xuXHRcdH1cblx0XHR2YXIgcmVtYWluaW5nSXRlbXNPYmplY3QgPSB0aGlzLnNvcnRQbGFpbnNCeUhlaWdodChcblx0XHRcdHJlbWFpbmluZ0l0ZW1zT2JqZWN0XG5cdFx0KTtcblxuXHRcdHZhciBpbml0aWFsaXplZFBsYW5lID0ge1xuXHRcdFx0eDogMCxcblx0XHRcdHk6IHN0YXJ0aW5nWSxcblx0XHRcdHdpZHRoOiB0aGlzLldJRFRILFxuXHRcdFx0aGVpZ2h0OlxuXHRcdFx0XHRyZW1haW5pbmdJdGVtc09iamVjdFswXS5oZWlnaHQgK1xuXHRcdFx0XHR0aGlzLmdldE1hcmdpbkF0UG9pbnQoc3RhcnRpbmdZKVxuXHRcdH07XG5cblx0XHR2YXIgcmVtYWluaW5nV2lkdGggPSB0aGlzLldJRFRIO1xuXHRcdHZhciBkZWVwZXN0WSA9IHN0YXJ0aW5nWTtcblxuXHRcdHdoaWxlIChyZW1haW5pbmdJdGVtc09iamVjdC5sZW5ndGggIT0gMCkge1xuXHRcdFx0aWYgKHJlbWFpbmluZ0l0ZW1zT2JqZWN0Lmxlbmd0aCA+IDApIHtcblx0XHRcdFx0ZGVlcGVzdFkgPVxuXHRcdFx0XHRcdHN0YXJ0aW5nWSArXG5cdFx0XHRcdFx0cmVtYWluaW5nSXRlbXNPYmplY3RbMF0uaGVpZ2h0ICtcblx0XHRcdFx0XHR0aGlzLmdldE1hcmdpbkF0UG9pbnQoc3RhcnRpbmdZKTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGZyZWVTcGFjZXNJbkN1cnJlbnRSb3cgPSBbXTtcblx0XHRcdHZhciBvY2N1cGllZFNwYWNlc0luQ3VycmVudFJvdyA9IFtdO1xuXHRcdFx0dmFyIGZpdHRlZFJlbWFpbmluZ0l0ZW1zID0ge307XG5cdFx0XHR2YXIgbGVuZ3RoXzAgPSByZW1haW5pbmdJdGVtc09iamVjdC5sZW5ndGg7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF8wOyBpKyspIHtcblx0XHRcdFx0aWYgKGZpdHRlZFJlbWFpbmluZ0l0ZW1zLmhhc093blByb3BlcnR5KGkpKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0cmVtYWluaW5nV2lkdGggPj1cblx0XHRcdFx0XHRyZW1haW5pbmdJdGVtc09iamVjdFtpXS53aWR0aCArXG5cdFx0XHRcdFx0XHR0aGlzLmdldE1hcmdpbkF0UG9pbnQodGhpcy5XSURUSCAtIHJlbWFpbmluZ1dpZHRoKVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRyZW1haW5pbmdJdGVtc09iamVjdFtpXS54ID1cblx0XHRcdFx0XHRcdHRoaXMuV0lEVEggLVxuXHRcdFx0XHRcdFx0cmVtYWluaW5nV2lkdGggK1xuXHRcdFx0XHRcdFx0dGhpcy5nZXRNYXJnaW5BdFBvaW50KHRoaXMuV0lEVEggLSByZW1haW5pbmdXaWR0aCk7XG5cdFx0XHRcdFx0cmVtYWluaW5nSXRlbXNPYmplY3RbaV0ueSA9XG5cdFx0XHRcdFx0XHRzdGFydGluZ1kgKyB0aGlzLmdldE1hcmdpbkF0UG9pbnQoc3RhcnRpbmdZKTtcblx0XHRcdFx0XHRwb3NpdGlvbkRhdGFbcmVtYWluaW5nSXRlbXNPYmplY3RbaV0uaW5kZXhdLnggPVxuXHRcdFx0XHRcdFx0dGhpcy5XSURUSCAtXG5cdFx0XHRcdFx0XHRyZW1haW5pbmdXaWR0aCArXG5cdFx0XHRcdFx0XHR0aGlzLmdldE1hcmdpbkF0UG9pbnQodGhpcy5XSURUSCAtIHJlbWFpbmluZ1dpZHRoKTtcblx0XHRcdFx0XHRwb3NpdGlvbkRhdGFbcmVtYWluaW5nSXRlbXNPYmplY3RbaV0uaW5kZXhdLnkgPVxuXHRcdFx0XHRcdFx0c3RhcnRpbmdZICsgdGhpcy5nZXRNYXJnaW5BdFBvaW50KHN0YXJ0aW5nWSk7XG5cblx0XHRcdFx0XHR2YXIgb2NjdXBpZWRTcGFjZSA9IHtcblx0XHRcdFx0XHRcdHg6IHRoaXMuV0lEVEggLSByZW1haW5pbmdXaWR0aCxcblx0XHRcdFx0XHRcdHk6IHN0YXJ0aW5nWSxcblx0XHRcdFx0XHRcdHdpZHRoOlxuXHRcdFx0XHRcdFx0XHRyZW1haW5pbmdJdGVtc09iamVjdFtpXS53aWR0aCArXG5cdFx0XHRcdFx0XHRcdHRoaXMuZ2V0TWFyZ2luQXRQb2ludCh0aGlzLldJRFRIIC0gcmVtYWluaW5nV2lkdGgpLFxuXHRcdFx0XHRcdFx0aGVpZ2h0OlxuXHRcdFx0XHRcdFx0XHRyZW1haW5pbmdJdGVtc09iamVjdFtpXS5oZWlnaHQgK1xuXHRcdFx0XHRcdFx0XHR0aGlzLmdldE1hcmdpbkF0UG9pbnQoc3RhcnRpbmdZKSxcblx0XHRcdFx0XHRcdGRvTm90TWVyZ2VGbGFnOiB0cnVlXG5cdFx0XHRcdFx0fTtcblxuXHRcdFx0XHRcdG9jY3VwaWVkU3BhY2VzSW5DdXJyZW50Um93LnB1c2gob2NjdXBpZWRTcGFjZSk7XG5cblx0XHRcdFx0XHR2YXIgZnJlZVNwYWNlID0ge1xuXHRcdFx0XHRcdFx0eDogdGhpcy5XSURUSCAtIHJlbWFpbmluZ1dpZHRoLFxuXHRcdFx0XHRcdFx0eTpcblx0XHRcdFx0XHRcdFx0c3RhcnRpbmdZICtcblx0XHRcdFx0XHRcdFx0dGhpcy5nZXRNYXJnaW5BdFBvaW50KHN0YXJ0aW5nWSkgK1xuXHRcdFx0XHRcdFx0XHRyZW1haW5pbmdJdGVtc09iamVjdFtpXS5oZWlnaHQsXG5cdFx0XHRcdFx0XHR3aWR0aDpcblx0XHRcdFx0XHRcdFx0cmVtYWluaW5nSXRlbXNPYmplY3RbaV0ud2lkdGggK1xuXHRcdFx0XHRcdFx0XHR0aGlzLmdldE1hcmdpbkF0UG9pbnQodGhpcy5XSURUSCAtIHJlbWFpbmluZ1dpZHRoKSxcblx0XHRcdFx0XHRcdGhlaWdodDpcblx0XHRcdFx0XHRcdFx0aW5pdGlhbGl6ZWRQbGFuZS55ICtcblx0XHRcdFx0XHRcdFx0aW5pdGlhbGl6ZWRQbGFuZS5oZWlnaHQgLVxuXHRcdFx0XHRcdFx0XHQoc3RhcnRpbmdZICtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmdldE1hcmdpbkF0UG9pbnQoc3RhcnRpbmdZKSArXG5cdFx0XHRcdFx0XHRcdFx0cmVtYWluaW5nSXRlbXNPYmplY3RbaV0uaGVpZ2h0KVxuXHRcdFx0XHRcdH07XG5cblx0XHRcdFx0XHRpZiAodGhpcy5pc1ZhbGlkUGxhbmUoZnJlZVNwYWNlKSkge1xuXHRcdFx0XHRcdFx0ZnJlZVNwYWNlc0luQ3VycmVudFJvdy5wdXNoKGZyZWVTcGFjZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGZpdHRlZFJlbWFpbmluZ0l0ZW1zW2ldID0gdHJ1ZTtcblxuXHRcdFx0XHRcdHJlbWFpbmluZ1dpZHRoID1cblx0XHRcdFx0XHRcdHJlbWFpbmluZ1dpZHRoIC1cblx0XHRcdFx0XHRcdChyZW1haW5pbmdJdGVtc09iamVjdFtpXS53aWR0aCArXG5cdFx0XHRcdFx0XHRcdHRoaXMuZ2V0TWFyZ2luQXRQb2ludCh0aGlzLldJRFRIIC0gcmVtYWluaW5nV2lkdGgpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR2YXIgdGVtcCA9IE9iamVjdC5rZXlzKGZpdHRlZFJlbWFpbmluZ0l0ZW1zKTtcblx0XHRcdHZhciBsZW5ndGhfMCA9IHRlbXAubGVuZ3RoIC0gMTtcblx0XHRcdGZvciAodmFyIGkgPSBsZW5ndGhfMDsgaSA+PSAwOyBpLS0pIHtcblx0XHRcdFx0cmVtYWluaW5nSXRlbXNPYmplY3Quc3BsaWNlKHRlbXBbaV0sIDEpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAocmVtYWluaW5nV2lkdGggPiAwKSB7XG5cdFx0XHRcdHZhciBmcmVlU3BhY2UgPSB7XG5cdFx0XHRcdFx0eDogdGhpcy5XSURUSCAtIHJlbWFpbmluZ1dpZHRoLFxuXHRcdFx0XHRcdHk6IHN0YXJ0aW5nWSxcblx0XHRcdFx0XHR3aWR0aDogcmVtYWluaW5nV2lkdGgsXG5cdFx0XHRcdFx0aGVpZ2h0OiBpbml0aWFsaXplZFBsYW5lLmhlaWdodFxuXHRcdFx0XHR9O1xuXHRcdFx0XHRpZiAodGhpcy5pc1ZhbGlkUGxhbmUoZnJlZVNwYWNlKSkge1xuXHRcdFx0XHRcdGZyZWVTcGFjZXNJbkN1cnJlbnRSb3cucHVzaChmcmVlU3BhY2UpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmIChyZW1haW5pbmdJdGVtc09iamVjdC5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHZhciBtZXJnZWRGcmVlU3BhY2VzID0gdGhpcy5tZXJnZUZyZWVTcGFjZXMoXG5cdFx0XHRcdFx0ZnJlZVNwYWNlc0luQ3VycmVudFJvdyxcblx0XHRcdFx0XHRvY2N1cGllZFNwYWNlc0luQ3VycmVudFJvd1xuXHRcdFx0XHQpO1xuXHRcdFx0XHR2YXIgZml0RGV0YWlscyA9IHRoaXMuZml0SXRlbXNJbnRvRnJlZVNwYWNlcyhcblx0XHRcdFx0XHRyZW1haW5pbmdJdGVtc09iamVjdCxcblx0XHRcdFx0XHRmcmVlU3BhY2VzSW5DdXJyZW50Um93LFxuXHRcdFx0XHRcdG9jY3VwaWVkU3BhY2VzSW5DdXJyZW50Um93XG5cdFx0XHRcdCk7XG5cdFx0XHRcdHZhciBmaXR0ZWRJdGVtcyA9IGZpdERldGFpbHMucmVwb3NpdGlvbmVkSXRlbXM7XG5cblx0XHRcdFx0aWYgKGZpdHRlZEl0ZW1zLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRmaXR0ZWRSZW1haW5pbmdJdGVtcyA9IHt9O1xuXHRcdFx0XHRcdHZhciBsZW5ndGhfMCA9IGZpdHRlZEl0ZW1zLmxlbmd0aDtcblx0XHRcdFx0XHR2YXIgbGVuZ3RoXzEgPSByZW1haW5pbmdJdGVtc09iamVjdC5sZW5ndGg7XG5cdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGxlbmd0aF8xOyBqKyspIHtcblx0XHRcdFx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdFx0XHRcdGZpdHRlZEl0ZW1zW2ldLmluZGV4ID09XG5cdFx0XHRcdFx0XHRcdFx0cmVtYWluaW5nSXRlbXNPYmplY3Rbal0uaW5kZXhcblx0XHRcdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRcdFx0Zml0dGVkUmVtYWluaW5nSXRlbXNbal0gPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uRGF0YVtyZW1haW5pbmdJdGVtc09iamVjdFtqXS5pbmRleF0ueCA9XG5cdFx0XHRcdFx0XHRcdFx0XHRmaXR0ZWRJdGVtc1tpXS54O1xuXHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uRGF0YVtyZW1haW5pbmdJdGVtc09iamVjdFtqXS5pbmRleF0ueSA9XG5cdFx0XHRcdFx0XHRcdFx0XHRmaXR0ZWRJdGVtc1tpXS55O1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dmFyIHRlbXAgPSBPYmplY3Qua2V5cyhmaXR0ZWRSZW1haW5pbmdJdGVtcyk7XG5cdFx0XHRcdFx0dmFyIGxlbmd0aF8wID0gdGVtcC5sZW5ndGggLSAxO1xuXHRcdFx0XHRcdGZvciAodmFyIGkgPSBsZW5ndGhfMDsgaSA+PSAwOyBpLS0pIHtcblx0XHRcdFx0XHRcdHJlbWFpbmluZ0l0ZW1zT2JqZWN0LnNwbGljZSh0ZW1wW2ldLCAxKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKHJlbWFpbmluZ0l0ZW1zT2JqZWN0Lmxlbmd0aCA+IDApIHtcblx0XHRcdFx0c3RhcnRpbmdZID0gaW5pdGlhbGl6ZWRQbGFuZS55ICsgaW5pdGlhbGl6ZWRQbGFuZS5oZWlnaHQ7XG5cdFx0XHRcdHZhciBuZXh0SW5pdGlhbGl6ZVBsYW5lID0ge1xuXHRcdFx0XHRcdHg6IDAsXG5cdFx0XHRcdFx0eTogaW5pdGlhbGl6ZWRQbGFuZS55ICsgaW5pdGlhbGl6ZWRQbGFuZS5oZWlnaHQsXG5cdFx0XHRcdFx0d2lkdGg6IHRoaXMuV0lEVEgsXG5cdFx0XHRcdFx0aGVpZ2h0OlxuXHRcdFx0XHRcdFx0cmVtYWluaW5nSXRlbXNPYmplY3RbMF0uaGVpZ2h0ICtcblx0XHRcdFx0XHRcdHRoaXMuZ2V0TWFyZ2luQXRQb2ludChcblx0XHRcdFx0XHRcdFx0aW5pdGlhbGl6ZWRQbGFuZS55ICsgaW5pdGlhbGl6ZWRQbGFuZS5oZWlnaHRcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0fTtcblx0XHRcdFx0dmFyIGluaXRpYWxpemVkUGxhbmUgPSBuZXh0SW5pdGlhbGl6ZVBsYW5lO1xuXHRcdFx0XHRyZW1haW5pbmdXaWR0aCA9IHRoaXMuV0lEVEg7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHsgcG9zaXRpb25EYXRhOiBwb3NpdGlvbkRhdGEsIGRlZXBlc3RZOiBkZWVwZXN0WSB9O1xuXHR9O1xuXG5cdExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5nZXRJdGVtc0Zyb21Qb2ludERlcHRoID0gZnVuY3Rpb24oXG5cdFx0c3RhcnRpbmdZLFxuXHRcdGluY2x1ZGVQbGFuZUFib3ZlQW5kQmVsb3dQb2ludERlcHRoID0gZmFsc2UsXG5cdFx0cG9zaXRpb25EYXRhXG5cdCkge1xuXHRcdHZhciBpdGVtc0Zyb21Qb2ludERlcHRoID0ge307XG5cdFx0dmFyIHNoaWZ0SGVpZ2h0VG9BZGQgPSAwO1xuXHRcdHZhciBsZW5ndGhfMCA9IHBvc2l0aW9uRGF0YS5sZW5ndGg7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHRpZiAoaW5jbHVkZVBsYW5lQWJvdmVBbmRCZWxvd1BvaW50RGVwdGggPT0gdHJ1ZSkge1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0cG9zaXRpb25EYXRhW2ldLnkgPCBzdGFydGluZ1kgJiZcblx0XHRcdFx0XHRwb3NpdGlvbkRhdGFbaV0ueSArIHBvc2l0aW9uRGF0YVtpXS5oZWlnaHQgPiBzdGFydGluZ1lcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0aXRlbXNGcm9tUG9pbnREZXB0aFtpXSA9IHRydWU7XG5cblx0XHRcdFx0XHR2YXIgZGlmZiA9IHN0YXJ0aW5nWSAtIHBvc2l0aW9uRGF0YVtpXS55O1xuXHRcdFx0XHRcdGlmIChkaWZmID4gc2hpZnRIZWlnaHRUb0FkZCkge1xuXHRcdFx0XHRcdFx0c2hpZnRIZWlnaHRUb0FkZCA9IGRpZmY7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChwb3NpdGlvbkRhdGFbaV0ueSA+PSBzdGFydGluZ1kpIHtcblx0XHRcdFx0aXRlbXNGcm9tUG9pbnREZXB0aFtpXSA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB7XG5cdFx0XHRpdGVtc0Zyb21Qb2ludERlcHRoOiBpdGVtc0Zyb21Qb2ludERlcHRoLFxuXHRcdFx0c2hpZnRIZWlnaHRUb0FkZDogc2hpZnRIZWlnaHRUb0FkZFxuXHRcdH07XG5cdH07XG5cblx0TGltYmVyR3JpZFZpZXcucHJvdG90eXBlLnNoaXRmdEl0ZW1zQmVsb3cgPSBmdW5jdGlvbihcblx0XHRzaGlmdEhlaWdodCxcblx0XHRwb3NpdGlvbkRhdGEsXG5cdFx0aW5kaWNlc1RvU2hpZnRcblx0KSB7XG5cdFx0c2hpZnRIZWlnaHQgPSBzaGlmdEhlaWdodCArIHRoaXMuTUFSR0lOO1xuXHRcdHZhciBsZW5ndGhfMCA9IHBvc2l0aW9uRGF0YS5sZW5ndGg7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHRpZiAoaW5kaWNlc1RvU2hpZnQuaGFzT3duUHJvcGVydHkoaSkpIHtcblx0XHRcdFx0cG9zaXRpb25EYXRhW2ldLnkgKz0gc2hpZnRIZWlnaHQ7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBwb3NpdGlvbkRhdGE7XG5cdH07XG5cblx0TGltYmVyR3JpZFZpZXcucHJvdG90eXBlLnNoaWZ0SXRlbXNVcCA9IGZ1bmN0aW9uKHksIHNoaWZ0SGVpZ2h0KSB7XG5cdFx0dmFyIGxlbmd0aF8wID0gdGhpcy5wb3NpdGlvbkRhdGEubGVuZ3RoO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHRcdFx0aWYgKHRoaXMucG9zaXRpb25EYXRhW2ldLnkgPj0geSkge1xuXHRcdFx0XHR0aGlzLnBvc2l0aW9uRGF0YVtpXS55IC09IHNoaWZ0SGVpZ2h0O1xuXHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0l0ZW1zW2ldLnN0eWxlLnRyYW5zZm9ybSA9XG5cdFx0XHRcdFx0XCJ0cmFuc2xhdGUoXCIgK1xuXHRcdFx0XHRcdHRoaXMucG9zaXRpb25EYXRhW2ldLnggK1xuXHRcdFx0XHRcdFwicHgsIFwiICtcblx0XHRcdFx0XHR0aGlzLnBvc2l0aW9uRGF0YVtpXS55ICtcblx0XHRcdFx0XHRcInB4KVwiO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHRMaW1iZXJHcmlkVmlldy5wcm90b3R5cGUubWVyZ2VQbGFpbnMgPSBmdW5jdGlvbihBLCBCLCBwbGFuZXMgPSBbXSkge1xuXHRcdHZhciBhTGluZXMgPSB0aGlzLmdldExpbmVzKEEpO1xuXHRcdHZhciBiTGluZXMgPSB0aGlzLmdldExpbmVzKEIpO1xuXHRcdHZhciBvcHBvc2l0ZUxpbmVzID0geyAwOiAyLCAxOiAzLCAyOiAwLCAzOiAxIH07XG5cblx0XHR2YXIgaW50ZXJzZWN0aW9uQ291bnQgPSAwO1xuXHRcdHZhciBpbnRlcnNlY3Rpb25Qb2ludHNBdG9CID0gW107XG5cdFx0dmFyIGxpbmVQb2ludHNBID0gW107XG5cdFx0dmFyIGludGVyc2VjdGlvblBvaW50c0J0b0EgPSBbXTtcblx0XHR2YXIgbGluZVBvaW50c0IgPSBbXTtcblx0XHR2YXIgZGlzdGFuY2UgPSBudWxsO1xuXG5cdFx0dmFyIGFMaW5lSWQgPSBudWxsO1xuXHRcdHZhciBiTGluZUlkID0gbnVsbDtcblxuXHRcdHZhciBsZW5ndGhfMCA9IGFMaW5lcy5sZW5ndGg7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHRpbnRlcnNlY3Rpb25Db3VudCA9IDA7XG5cdFx0XHRpbnRlcnNlY3Rpb25Qb2ludHNBdG9CID0gW107XG5cdFx0XHRsaW5lUG9pbnRzQSA9IFtdO1xuXHRcdFx0aW50ZXJzZWN0aW9uUG9pbnRzQnRvQSA9IFtdO1xuXHRcdFx0bGluZVBvaW50c0IgPSBbXTtcblx0XHRcdGRpc3RhbmNlID0gbnVsbDtcblxuXHRcdFx0dmFyIGFMaW5lID0gYUxpbmVzW2ldO1xuXHRcdFx0dmFyIGJMaW5lID0gYkxpbmVzW29wcG9zaXRlTGluZXNbaV1dO1xuXG5cdFx0XHRhTGluZUlkID0gaTtcblx0XHRcdGJMaW5lSWQgPSBvcHBvc2l0ZUxpbmVzW2ldO1xuXG5cdFx0XHQvLyBzbG9wZSBvZiBsaW5lIHBhcmFsbGVsIHRvIHkgYXhpcyBhbmQgeCBheGlzIGlzIGFsd2F5cyAwO1xuXHRcdFx0dmFyIG0xID0gMDtcblx0XHRcdHZhciBtMiA9IDA7XG5cblx0XHRcdC8vIG0xIGlzIHNsb3BlIG9mIHBvaW50IHAxIGFuZCBwMlxuXHRcdFx0dmFyIHAxID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShiTGluZVswXSkpO1xuXHRcdFx0dmFyIHAyID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShiTGluZVsxXSkpO1xuXG5cdFx0XHR2YXIgbGVuZ3RoXzEgPSBhTGluZS5sZW5ndGg7XG5cdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGxlbmd0aF8xOyBqKyspIHtcblx0XHRcdFx0dmFyIHAzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShhTGluZVtqXSkpO1xuXG5cdFx0XHRcdGlmIChpID09IDAgfHwgaSA9PSAyKSB7XG5cdFx0XHRcdFx0dmFyIHggPSBwM1swXTtcblx0XHRcdFx0XHR2YXIgeSA9IHAxWzFdO1xuXHRcdFx0XHRcdHZhciBhbHBoYSA9IChwM1swXSAtIHAxWzBdKSAvIChwMlswXSAtIHAxWzBdKTtcblx0XHRcdFx0XHR2YXIgZCA9IE1hdGguYWJzKHAzWzFdIC0gcDFbMV0pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHZhciB4ID0gcDFbMF07XG5cdFx0XHRcdFx0dmFyIHkgPSBwM1sxXTtcblx0XHRcdFx0XHR2YXIgYWxwaGEgPSAocDNbMV0gLSBwMVsxXSkgLyAocDJbMV0gLSBwMVsxXSk7XG5cdFx0XHRcdFx0dmFyIGQgPSBNYXRoLmFicyhwM1swXSAtIHAxWzBdKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoYWxwaGEgPCAwIHx8IGFscGhhID4gMSkge1xuXHRcdFx0XHR9IGVsc2UgaWYgKGFscGhhID49IDAgJiYgYWxwaGEgPD0gMSkge1xuXHRcdFx0XHRcdGludGVyc2VjdGlvblBvaW50c0F0b0IucHVzaChbeCwgeV0pO1xuXHRcdFx0XHRcdGxpbmVQb2ludHNBLnB1c2gocDMpO1xuXHRcdFx0XHRcdGRpc3RhbmNlID0gZDtcblx0XHRcdFx0XHRpbnRlcnNlY3Rpb25Db3VudCsrO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNvbnNvbGUud2FybihcIlNob3VsZCBub3QgaGl0IHRoaXMgY2hlY2sgYWxnb1wiKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBtMSBpcyBzbG9wZSBvZiBwb2ludCBwMSBhbmQgcDJcblx0XHRcdHZhciBwMSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYUxpbmVbMF0pKTtcblx0XHRcdHZhciBwMiA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYUxpbmVbMV0pKTtcblxuXHRcdFx0dmFyIGxlbmd0aF8xID0gYkxpbmUubGVuZ3RoO1xuXHRcdFx0Zm9yICh2YXIgayA9IDA7IGsgPCBsZW5ndGhfMTsgaysrKSB7XG5cdFx0XHRcdHZhciBwMyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYkxpbmVba10pKTtcblxuXHRcdFx0XHRpZiAoaSA9PSAwIHx8IGkgPT0gMikge1xuXHRcdFx0XHRcdHZhciB4ID0gcDNbMF07XG5cdFx0XHRcdFx0dmFyIHkgPSBwMVsxXTtcblx0XHRcdFx0XHR2YXIgYWxwaGEgPSAocDNbMF0gLSBwMVswXSkgLyAocDJbMF0gLSBwMVswXSk7XG5cdFx0XHRcdFx0dmFyIGQgPSBNYXRoLmFicyhwM1sxXSAtIHAxWzFdKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2YXIgeCA9IHAxWzBdO1xuXHRcdFx0XHRcdHZhciB5ID0gcDNbMV07XG5cdFx0XHRcdFx0dmFyIGFscGhhID0gKHAzWzFdIC0gcDFbMV0pIC8gKHAyWzFdIC0gcDFbMV0pO1xuXHRcdFx0XHRcdHZhciBkID0gTWF0aC5hYnMocDNbMF0gLSBwMVswXSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGFscGhhIDwgMCB8fCBhbHBoYSA+IDEpIHtcblx0XHRcdFx0fSBlbHNlIGlmIChhbHBoYSA+PSAwICYmIGFscGhhIDw9IDEpIHtcblx0XHRcdFx0XHRpbnRlcnNlY3Rpb25Qb2ludHNCdG9BLnB1c2goW3gsIHldKTtcblx0XHRcdFx0XHRsaW5lUG9pbnRzQi5wdXNoKHAzKTtcblx0XHRcdFx0XHRkaXN0YW5jZSA9IGQ7XG5cdFx0XHRcdFx0aW50ZXJzZWN0aW9uQ291bnQrKztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjb25zb2xlLndhcm4oXCJTaG91bGQgbm90IGhpdCB0aGlzIGNoZWNrIGFsZ29cIik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKFxuXHRcdFx0XHRpbnRlcnNlY3Rpb25Db3VudCA9PSAyIHx8XG5cdFx0XHRcdGludGVyc2VjdGlvbkNvdW50ID09IDMgfHxcblx0XHRcdFx0aW50ZXJzZWN0aW9uQ291bnQgPT0gNFxuXHRcdFx0KSB7XG5cdFx0XHRcdGlmIChpbnRlcnNlY3Rpb25Db3VudCA9PSAyKSB7XG5cdFx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdFx0SlNPTi5zdHJpbmdpZnkobGluZVBvaW50c0EpID09XG5cdFx0XHRcdFx0XHRKU09OLnN0cmluZ2lmeShpbnRlcnNlY3Rpb25Qb2ludHNCdG9BKVxuXHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChpbnRlcnNlY3Rpb25Db3VudCA8PSAwIHx8IGludGVyc2VjdGlvbkNvdW50ID49IDUpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiAoYUxpbmVJZCA9PSAwIHx8IGFMaW5lSWQgPT0gMikge1xuXHRcdFx0dmFyIGFPcHBMaW5lID0gSlNPTi5wYXJzZShcblx0XHRcdFx0SlNPTi5zdHJpbmdpZnkoYUxpbmVzW29wcG9zaXRlTGluZXNbYUxpbmVJZF1dKVxuXHRcdFx0KTtcblx0XHRcdHZhciBiT3BwTGluZSA9IEpTT04ucGFyc2UoXG5cdFx0XHRcdEpTT04uc3RyaW5naWZ5KGJMaW5lc1tvcHBvc2l0ZUxpbmVzW2JMaW5lSWRdXSlcblx0XHRcdCk7XG5cblx0XHRcdHZhciBkID0gTWF0aC5hYnMoYU9wcExpbmVbMF1bMV0gLSBiT3BwTGluZVswXVsxXSk7XG5cdFx0XHRpZiAoZCA8IGRpc3RhbmNlKSB7XG5cdFx0XHRcdGFMaW5lSWQgPSBvcHBvc2l0ZUxpbmVzW2FMaW5lSWRdO1xuXHRcdFx0XHRiTGluZUlkID0gb3Bwb3NpdGVMaW5lc1tiTGluZUlkXTtcblx0XHRcdFx0ZGlzdGFuY2UgPSBkO1xuXG5cdFx0XHRcdHZhciBjaGFuZ2VZID0gYkxpbmVzW2JMaW5lSWRdWzBdWzFdO1xuXHRcdFx0XHR2YXIgbGVuZ3RoXzAgPSBpbnRlcnNlY3Rpb25Qb2ludHNBdG9CLmxlbmd0aDtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHRcdFx0aW50ZXJzZWN0aW9uUG9pbnRzQXRvQltpXVsxXSA9IGNoYW5nZVk7XG5cdFx0XHRcdFx0bGluZVBvaW50c0FbaV1bMV0gPSBhT3BwTGluZVswXVsxXTtcblx0XHRcdFx0fVxuXHRcdFx0XHR2YXIgY2hhbmdlWSA9IGFMaW5lc1thTGluZUlkXVswXVsxXTtcblx0XHRcdFx0dmFyIGxlbmd0aF8wID0gaW50ZXJzZWN0aW9uUG9pbnRzQnRvQS5sZW5ndGg7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHRcdFx0XHRcdGludGVyc2VjdGlvblBvaW50c0J0b0FbaV1bMV0gPSBjaGFuZ2VZO1xuXHRcdFx0XHRcdGxpbmVQb2ludHNCW2ldWzFdID0gYk9wcExpbmVbMF1bMV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIGFPcHBMaW5lID0gSlNPTi5wYXJzZShcblx0XHRcdFx0SlNPTi5zdHJpbmdpZnkoYUxpbmVzW29wcG9zaXRlTGluZXNbYUxpbmVJZF1dKVxuXHRcdFx0KTtcblx0XHRcdHZhciBiT3BwTGluZSA9IEpTT04ucGFyc2UoXG5cdFx0XHRcdEpTT04uc3RyaW5naWZ5KGJMaW5lc1tvcHBvc2l0ZUxpbmVzW2JMaW5lSWRdXSlcblx0XHRcdCk7XG5cblx0XHRcdHZhciBkID0gTWF0aC5hYnMoYU9wcExpbmVbMF1bMF0gLSBiT3BwTGluZVswXVswXSk7XG5cdFx0XHRpZiAoZCA8IGRpc3RhbmNlKSB7XG5cdFx0XHRcdGFMaW5lSWQgPSBvcHBvc2l0ZUxpbmVzW2FMaW5lSWRdO1xuXHRcdFx0XHRiTGluZUlkID0gb3Bwb3NpdGVMaW5lc1tiTGluZUlkXTtcblx0XHRcdFx0ZGlzdGFuY2UgPSBkO1xuXG5cdFx0XHRcdHZhciBjaGFuZ2VYID0gYkxpbmVzW2JMaW5lSWRdWzBdWzBdO1xuXHRcdFx0XHR2YXIgbGVuZ3RoXzAgPSBpbnRlcnNlY3Rpb25Qb2ludHNBdG9CLmxlbmd0aDtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHRcdFx0aW50ZXJzZWN0aW9uUG9pbnRzQXRvQltpXVswXSA9IGNoYW5nZVg7XG5cdFx0XHRcdFx0bGluZVBvaW50c0FbaV1bMF0gPSBhT3BwTGluZVswXVswXTtcblx0XHRcdFx0fVxuXHRcdFx0XHR2YXIgY2hhbmdlWCA9IGFMaW5lc1thTGluZUlkXVswXVswXTtcblx0XHRcdFx0dmFyIGxlbmd0aF8wID0gaW50ZXJzZWN0aW9uUG9pbnRzQnRvQS5sZW5ndGg7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHRcdFx0XHRcdGludGVyc2VjdGlvblBvaW50c0J0b0FbaV1bMF0gPSBjaGFuZ2VYO1xuXHRcdFx0XHRcdGxpbmVQb2ludHNCW2ldWzBdID0gYk9wcExpbmVbMF1bMF07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZGlzdGFuY2UgPiB0aGlzLk1BUkdJTikge1xuXHRcdFx0dmFyIHBvaW50c1RvR2V0UGxhaW4gPSBbXTtcblx0XHRcdHZhciBwbGFpblRvQ2hlY2tJZkZyZWUgPSBudWxsO1xuXHRcdFx0aWYgKGludGVyc2VjdGlvbkNvdW50ID09IDQpIHtcblx0XHRcdFx0cG9pbnRzVG9HZXRQbGFpbiA9IGxpbmVQb2ludHNBLmNvbmNhdChsaW5lUG9pbnRzQik7XG5cdFx0XHRcdHBsYWluVG9DaGVja0lmRnJlZSA9IHRoaXMuZ2V0UGxhaW5Gcm9tNFBvaW50cyhwb2ludHNUb0dldFBsYWluKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBsZW5ndGhfMCA9IGxpbmVQb2ludHNBLmxlbmd0aDtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHRcdFx0cG9pbnRzVG9HZXRQbGFpbi5wdXNoKGxpbmVQb2ludHNBW2ldKTtcblx0XHRcdFx0XHRwb2ludHNUb0dldFBsYWluLnB1c2goaW50ZXJzZWN0aW9uUG9pbnRzQXRvQltpXSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR2YXIgbGVuZ3RoXzAgPSBsaW5lUG9pbnRzQi5sZW5ndGg7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHRcdFx0XHRcdHBvaW50c1RvR2V0UGxhaW4ucHVzaChsaW5lUG9pbnRzQltpXSk7XG5cdFx0XHRcdFx0cG9pbnRzVG9HZXRQbGFpbi5wdXNoKGludGVyc2VjdGlvblBvaW50c0J0b0FbaV0pO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHBvaW50c1RvR2V0UGxhaW4ubGVuZ3RoID4gNCkge1xuXHRcdFx0XHRcdHZhciBkdXBsaWNhdGVDaGVjayA9IHt9O1xuXHRcdFx0XHRcdHZhciBmaW5hbFBvaW50c1RvR2V0UGxhaW4gPSBbXTtcblx0XHRcdFx0XHR2YXIgbGVuZ3RoXzAgPSBwb2ludHNUb0dldFBsYWluLmxlbmd0aDtcblx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF8wOyBpKyspIHtcblx0XHRcdFx0XHRcdHZhciB0ZW1wID0gSlNPTi5wYXJzZShcblx0XHRcdFx0XHRcdFx0SlNPTi5zdHJpbmdpZnkocG9pbnRzVG9HZXRQbGFpbltpXSlcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRpZiAoZHVwbGljYXRlQ2hlY2suaGFzT3duUHJvcGVydHkodGVtcCkpIHtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGR1cGxpY2F0ZUNoZWNrW3RlbXBdID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0ZmluYWxQb2ludHNUb0dldFBsYWluLnB1c2gocG9pbnRzVG9HZXRQbGFpbltpXSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHBsYWluVG9DaGVja0lmRnJlZSA9IHRoaXMuZ2V0UGxhaW5Gcm9tNFBvaW50cyhcblx0XHRcdFx0XHRcdGZpbmFsUG9pbnRzVG9HZXRQbGFpblxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cGxhaW5Ub0NoZWNrSWZGcmVlID0gdGhpcy5nZXRQbGFpbkZyb200UG9pbnRzKFxuXHRcdFx0XHRcdFx0cG9pbnRzVG9HZXRQbGFpblxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dmFyIHBsYWluVG9DaGVja0lmRnJlZV9MaW5lcyA9IHRoaXMuZ2V0TGluZXMocGxhaW5Ub0NoZWNrSWZGcmVlKTtcblxuXHRcdFx0aWYgKGFMaW5lSWQgPT0gMCB8fCBhTGluZUlkID09IDIpIHtcblx0XHRcdFx0aWYgKGFMaW5lSWQgPT0gMCkge1xuXHRcdFx0XHRcdHZhciBwbGFuZUFPblRvcE9mQiA9IGZhbHNlO1xuXHRcdFx0XHRcdHZhciBwbGFpblRvQ2hlY2tJZkZyZWVfRGl2aWRlckxpbmUgPSBKU09OLnBhcnNlKFxuXHRcdFx0XHRcdFx0SlNPTi5zdHJpbmdpZnkocGxhaW5Ub0NoZWNrSWZGcmVlX0xpbmVzWzJdKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dmFyIHBsYW5lQU9uVG9wT2ZCID0gdHJ1ZTtcblx0XHRcdFx0XHR2YXIgcGxhaW5Ub0NoZWNrSWZGcmVlX0RpdmlkZXJMaW5lID0gSlNPTi5wYXJzZShcblx0XHRcdFx0XHRcdEpTT04uc3RyaW5naWZ5KHBsYWluVG9DaGVja0lmRnJlZV9MaW5lc1swXSlcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAoYUxpbmVJZCA9PSAzKSB7XG5cdFx0XHRcdFx0dmFyIHBsYW5lQU9uTGVmdE9mQiA9IGZhbHNlO1xuXHRcdFx0XHRcdHZhciBwbGFpblRvQ2hlY2tJZkZyZWVfRGl2aWRlckxpbmUgPSBKU09OLnBhcnNlKFxuXHRcdFx0XHRcdFx0SlNPTi5zdHJpbmdpZnkocGxhaW5Ub0NoZWNrSWZGcmVlX0xpbmVzWzFdKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dmFyIHBsYW5lQU9uTGVmdE9mQiA9IHRydWU7XG5cdFx0XHRcdFx0dmFyIHBsYWluVG9DaGVja0lmRnJlZV9EaXZpZGVyTGluZSA9IEpTT04ucGFyc2UoXG5cdFx0XHRcdFx0XHRKU09OLnN0cmluZ2lmeShwbGFpblRvQ2hlY2tJZkZyZWVfTGluZXNbM10pXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR2YXIgZnJlZURpc3RhbmNlID0gLTE7XG5cdFx0XHR2YXIgaW5kZXhPZkludGVyc2VjdGluZ1BsYW5lID0gbnVsbDtcblx0XHRcdHZhciBsZW5ndGhfMCA9IHBsYW5lcy5sZW5ndGg7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF8wOyBpKyspIHtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdHRoaXMuaXNQbGFuZUJJbnNpZGVQbGFuZUFfVG91Y2hpbmdOb3RJbnNpZGUoXG5cdFx0XHRcdFx0XHRwbGFpblRvQ2hlY2tJZkZyZWUsXG5cdFx0XHRcdFx0XHRwbGFuZXNbaV1cblx0XHRcdFx0XHQpXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdGlmIChwbGFuZXNbaV0uaGFzT3duUHJvcGVydHkoXCJkb05vdE1lcmdlRmxhZ1wiKSkge1xuXHRcdFx0XHRcdFx0ZnJlZURpc3RhbmNlID0gLTE7XG5cdFx0XHRcdFx0XHRpbmRleE9mSW50ZXJzZWN0aW5nUGxhbmUgPSAtMTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR2YXIgcGxhbmVMaW5lID0gdGhpcy5nZXRMaW5lcyhwbGFuZXNbaV0pO1xuXHRcdFx0XHRcdGlmIChhTGluZUlkID09IDAgfHwgYUxpbmVJZCA9PSAyKSB7XG5cdFx0XHRcdFx0XHRpZiAoYUxpbmVJZCA9PSAwKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBkID0gTWF0aC5hYnMoXG5cdFx0XHRcdFx0XHRcdFx0cGxhaW5Ub0NoZWNrSWZGcmVlX0RpdmlkZXJMaW5lWzBdWzFdIC1cblx0XHRcdFx0XHRcdFx0XHRcdChwbGFuZXNbaV0ueSArIHBsYW5lc1tpXS5oZWlnaHQpXG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR2YXIgZCA9IE1hdGguYWJzKFxuXHRcdFx0XHRcdFx0XHRcdHBsYWluVG9DaGVja0lmRnJlZV9EaXZpZGVyTGluZVswXVsxXSAtXG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFuZXNbaV0ueVxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRpZiAoYUxpbmVJZCA9PSAzKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBkID0gTWF0aC5hYnMoXG5cdFx0XHRcdFx0XHRcdFx0cGxhaW5Ub0NoZWNrSWZGcmVlX0RpdmlkZXJMaW5lWzBdWzBdIC1cblx0XHRcdFx0XHRcdFx0XHRcdChwbGFuZXNbaV0ueCArIHBsYW5lc1tpXS53aWR0aClcblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHZhciBkID0gTWF0aC5hYnMoXG5cdFx0XHRcdFx0XHRcdFx0cGxhaW5Ub0NoZWNrSWZGcmVlX0RpdmlkZXJMaW5lWzBdWzBdIC1cblx0XHRcdFx0XHRcdFx0XHRcdHBsYW5lc1tpXS54XG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChkIDwgZnJlZURpc3RhbmNlIHx8IGZyZWVEaXN0YW5jZSA8IDApIHtcblx0XHRcdFx0XHRcdGZyZWVEaXN0YW5jZSA9IGQ7XG5cdFx0XHRcdFx0XHRpbmRleE9mSW50ZXJzZWN0aW5nUGxhbmUgPSBpO1xuXHRcdFx0XHRcdFx0Ly8gYnJlYWtpbmcgaGVyZSBzaW5jZSB0aGUgZmVhdHVyZSBpcyBub3QgZ29pbmcgdG8gYmUgaW1wbGVtZW50ZWQgb3IgbmVlZGVkXG5cdFx0XHRcdFx0XHQvLyBPbmx5IGNoZWNrIGlzIGRvbmUsIGlmIHNvbWUgcGxhbmUgaXMgaW5zaWRlIHRoZSBmcmVlIHNwYWNlIHRvIGJlIGNoZWNrZWRcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0Ly8gYnJlYWtpbmcgaGVyZSBzaW5jZSB0aGUgZmVhdHVyZSBpcyBub3QgZ29pbmcgdG8gYmUgaW1wbGVtZW50ZWQgb3IgbmVlZGVkXG5cdFx0XHRcdFx0XHQvLyBPbmx5IGNoZWNrIGlzIGRvbmUsIGlmIHNvbWUgcGxhbmUgaXMgaW5zaWRlIHRoZSBmcmVlIHNwYWNlIHRvIGJlIGNoZWNrZWQgRU5EXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmIChpbmRleE9mSW50ZXJzZWN0aW5nUGxhbmUgIT0gbnVsbCkge1xuXHRcdFx0XHRpZiAoZnJlZURpc3RhbmNlID4gdGhpcy5NQVJHSU4pIHtcblx0XHRcdFx0XHQvLyBtYWtpbmcgbWVyZ2VkUGxhbmUgZmFsc2Ugc2luY2UgdGhlIGZlYXR1cmUgaXMgbm8gbG9uZ2VyIGltcGxlbWVudGVkIG9yIG5lZWRlZFxuXHRcdFx0XHRcdHZhciBtZXJnZWRQbGFuZSA9IGZhbHNlO1xuXHRcdFx0XHRcdC8vIG1ha2luZyBtZXJnZWRQbGFuZSBmYWxzZSBzaW5jZSB0aGUgZmVhdHVyZSBpcyBubyBsb25nZXIgaW1wbGVtZW50ZWQgb3IgbmVlZGVkIEVORFxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIG5vIGZpbmFsIHBsYWluIGFzIEEgYW5kIEIgaGF2ZSBvdGhlciBwbGFuZXMgYmV0biB0aGVuIHdoaWNoIGFyZSBvbmx5IHRoZSBzaXplIG9mIG1hcmdpbiBhcGFydCBmcm9tIGVpdGhlciBBIG9yIEJcblx0XHRcdFx0XHR2YXIgbWVyZ2VkUGxhbmUgPSBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gbWFrZSBmaW5hbCBmcmVlIHNwYWNlIGZyb20gdGhlIHdob2xlIG9mIHRoZSBmcmVlIHNwYWNlXG5cdFx0XHRcdHZhciBtYWtlRmluYWxGcmVlU3BhY2UgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBtYWtlIGZpbmFsIGZyZWUgc3BhY2UgZnJvbSB0aGUgd2hvbGUgb2YgdGhlIGZyZWUgc3BhY2Vcblx0XHRcdHZhciBtYWtlRmluYWxGcmVlU3BhY2UgPSB0cnVlO1xuXHRcdH1cblxuXHRcdGlmIChtYWtlRmluYWxGcmVlU3BhY2UgPT0gdHJ1ZSkge1xuXHRcdFx0dmFyIG1lcmdlZFBsYW5lID0ge307XG5cdFx0XHRpZiAoYUxpbmVJZCA9PSAwIHx8IGFMaW5lSWQgPT0gMikge1xuXHRcdFx0XHR2YXIgYU9wcExpbmUgPSBKU09OLnBhcnNlKFxuXHRcdFx0XHRcdEpTT04uc3RyaW5naWZ5KGFMaW5lc1tvcHBvc2l0ZUxpbmVzW2FMaW5lSWRdXSlcblx0XHRcdFx0KTtcblx0XHRcdFx0dmFyIGJPcHBMaW5lID0gSlNPTi5wYXJzZShcblx0XHRcdFx0XHRKU09OLnN0cmluZ2lmeShiTGluZXNbb3Bwb3NpdGVMaW5lc1tiTGluZUlkXV0pXG5cdFx0XHRcdCk7XG5cblx0XHRcdFx0YUxpbmVJZCA9IG9wcG9zaXRlTGluZXNbYUxpbmVJZF07XG5cdFx0XHRcdGJMaW5lSWQgPSBvcHBvc2l0ZUxpbmVzW2JMaW5lSWRdO1xuXG5cdFx0XHRcdHZhciBjaGFuZ2VZID0gYkxpbmVzW2JMaW5lSWRdWzBdWzFdO1xuXHRcdFx0XHR2YXIgbGVuZ3RoXzAgPSBpbnRlcnNlY3Rpb25Qb2ludHNBdG9CLmxlbmd0aDtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHRcdFx0aW50ZXJzZWN0aW9uUG9pbnRzQXRvQltpXVsxXSA9IGNoYW5nZVk7XG5cdFx0XHRcdFx0bGluZVBvaW50c0FbaV1bMV0gPSBhT3BwTGluZVswXVsxXTtcblx0XHRcdFx0fVxuXHRcdFx0XHR2YXIgY2hhbmdlWSA9IGFMaW5lc1thTGluZUlkXVswXVsxXTtcblx0XHRcdFx0dmFyIGxlbmd0aF8wID0gaW50ZXJzZWN0aW9uUG9pbnRzQnRvQS5sZW5ndGg7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHRcdFx0XHRcdGludGVyc2VjdGlvblBvaW50c0J0b0FbaV1bMV0gPSBjaGFuZ2VZO1xuXHRcdFx0XHRcdGxpbmVQb2ludHNCW2ldWzFdID0gYk9wcExpbmVbMF1bMV07XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBhT3BwTGluZSA9IEpTT04ucGFyc2UoXG5cdFx0XHRcdFx0SlNPTi5zdHJpbmdpZnkoYUxpbmVzW29wcG9zaXRlTGluZXNbYUxpbmVJZF1dKVxuXHRcdFx0XHQpO1xuXHRcdFx0XHR2YXIgYk9wcExpbmUgPSBKU09OLnBhcnNlKFxuXHRcdFx0XHRcdEpTT04uc3RyaW5naWZ5KGJMaW5lc1tvcHBvc2l0ZUxpbmVzW2JMaW5lSWRdXSlcblx0XHRcdFx0KTtcblxuXHRcdFx0XHRhTGluZUlkID0gb3Bwb3NpdGVMaW5lc1thTGluZUlkXTtcblx0XHRcdFx0YkxpbmVJZCA9IG9wcG9zaXRlTGluZXNbYkxpbmVJZF07XG5cblx0XHRcdFx0dmFyIGNoYW5nZVggPSBiTGluZXNbYkxpbmVJZF1bMF1bMF07XG5cdFx0XHRcdHZhciBsZW5ndGhfMCA9IGludGVyc2VjdGlvblBvaW50c0F0b0IubGVuZ3RoO1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF8wOyBpKyspIHtcblx0XHRcdFx0XHRpbnRlcnNlY3Rpb25Qb2ludHNBdG9CW2ldWzBdID0gY2hhbmdlWDtcblx0XHRcdFx0XHRsaW5lUG9pbnRzQVtpXVswXSA9IGFPcHBMaW5lWzBdWzBdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhciBjaGFuZ2VYID0gYUxpbmVzW2FMaW5lSWRdWzBdWzBdO1xuXHRcdFx0XHR2YXIgbGVuZ3RoXzAgPSBpbnRlcnNlY3Rpb25Qb2ludHNCdG9BLmxlbmd0aDtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHRcdFx0aW50ZXJzZWN0aW9uUG9pbnRzQnRvQVtpXVswXSA9IGNoYW5nZVg7XG5cdFx0XHRcdFx0bGluZVBvaW50c0JbaV1bMF0gPSBiT3BwTGluZVswXVswXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaW50ZXJzZWN0aW9uQ291bnQgPT0gNCkge1xuXHRcdFx0XHR2YXIgcG9pbnRzVG9HZXRNZXJnZWRQbGFpbiA9IGxpbmVQb2ludHNBLmNvbmNhdChsaW5lUG9pbnRzQik7XG5cdFx0XHRcdHZhciBtZXJnZWRQbGFuZSA9IHRoaXMuZ2V0UGxhaW5Gcm9tNFBvaW50cyhcblx0XHRcdFx0XHRwb2ludHNUb0dldE1lcmdlZFBsYWluXG5cdFx0XHRcdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgcG9pbnRzVG9HZXRNZXJnZWRQbGFpbiA9IFtdO1xuXHRcdFx0XHR2YXIgbGVuZ3RoXzAgPSBsaW5lUG9pbnRzQS5sZW5ndGg7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHRcdFx0XHRcdHBvaW50c1RvR2V0TWVyZ2VkUGxhaW4ucHVzaChsaW5lUG9pbnRzQVtpXSk7XG5cdFx0XHRcdFx0cG9pbnRzVG9HZXRNZXJnZWRQbGFpbi5wdXNoKGludGVyc2VjdGlvblBvaW50c0F0b0JbaV0pO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dmFyIGxlbmd0aF8wID0gbGluZVBvaW50c0IubGVuZ3RoO1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF8wOyBpKyspIHtcblx0XHRcdFx0XHRwb2ludHNUb0dldE1lcmdlZFBsYWluLnB1c2gobGluZVBvaW50c0JbaV0pO1xuXHRcdFx0XHRcdHBvaW50c1RvR2V0TWVyZ2VkUGxhaW4ucHVzaChpbnRlcnNlY3Rpb25Qb2ludHNCdG9BW2ldKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChwb2ludHNUb0dldE1lcmdlZFBsYWluLmxlbmd0aCA+IDQpIHtcblx0XHRcdFx0XHR2YXIgZHVwbGljYXRlQ2hlY2sgPSB7fTtcblx0XHRcdFx0XHR2YXIgZmluYWxQb2ludHNUb0dldE1lcmdlZFBsYWluID0gW107XG5cdFx0XHRcdFx0dmFyIGxlbmd0aF8wID0gcG9pbnRzVG9HZXRNZXJnZWRQbGFpbi5sZW5ndGg7XG5cdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHRcdFx0XHR2YXIgdGVtcCA9IEpTT04ucGFyc2UoXG5cdFx0XHRcdFx0XHRcdEpTT04uc3RyaW5naWZ5KHBvaW50c1RvR2V0TWVyZ2VkUGxhaW5baV0pXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0aWYgKGR1cGxpY2F0ZUNoZWNrLmhhc093blByb3BlcnR5KHRlbXApKSB7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRkdXBsaWNhdGVDaGVja1t0ZW1wXSA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdGZpbmFsUG9pbnRzVG9HZXRNZXJnZWRQbGFpbi5wdXNoKFxuXHRcdFx0XHRcdFx0XHRcdHBvaW50c1RvR2V0TWVyZ2VkUGxhaW5baV1cblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dmFyIG1lcmdlZFBsYW5lID0gdGhpcy5nZXRQbGFpbkZyb200UG9pbnRzKFxuXHRcdFx0XHRcdFx0ZmluYWxQb2ludHNUb0dldE1lcmdlZFBsYWluXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2YXIgbWVyZ2VkUGxhbmUgPSB0aGlzLmdldFBsYWluRnJvbTRQb2ludHMoXG5cdFx0XHRcdFx0XHRwb2ludHNUb0dldE1lcmdlZFBsYWluXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChtZXJnZWRQbGFuZSAhPSBmYWxzZSkge1xuXHRcdFx0aWYgKHRoaXMuaXNWYWxpZFBsYW5lKG1lcmdlZFBsYW5lKSkge1xuXHRcdFx0XHRyZXR1cm4gbWVyZ2VkUGxhbmU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH07XG5cblx0TGltYmVyR3JpZFZpZXcucHJvdG90eXBlLnN1YnRyYWN0UGxhbmVzID0gZnVuY3Rpb24oQSwgQikge1xuXHRcdC8vIEEtQlxuXHRcdC8vIHJlc3VsdCBvbiBcIkFcIiBhcmVhXG5cblx0XHR2YXIgcGxhbmVzID0gW107XG5cdFx0dmFyIHJlc3VsdCA9IHRoaXMuaXNQbGFuZUJJbnNpZGVQbGFuZUFfVG91Y2hpbmdJc0luc2lkZShBLCBCLCBcImFsbFwiKTtcblxuXHRcdGlmIChyZXN1bHQuZW5ndWxmZWQgPT0gdHJ1ZSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRpZiAocmVzdWx0Lm92ZXJhbGwgPT0gdHJ1ZSkge1xuXHRcdFx0aWYgKEEueCA8PSBCLngpIHtcblx0XHRcdFx0aWYgKEEueCArIEEud2lkdGggPiBCLngpIHtcblx0XHRcdFx0XHQvLyBhYm92ZSBzdGF0ZW1lbnQgU2hvdWxkIGJlIGFsd2F5cyB0cnVlXG5cdFx0XHRcdFx0aWYgKEEueSA8IEIueSkge1xuXHRcdFx0XHRcdFx0dmFyIHBsYW5lID0ge1xuXHRcdFx0XHRcdFx0XHR4OiBBLngsXG5cdFx0XHRcdFx0XHRcdHk6IEEueSxcblx0XHRcdFx0XHRcdFx0d2lkdGg6IEEud2lkdGgsXG5cdFx0XHRcdFx0XHRcdGhlaWdodDogQi55IC0gQS55XG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMuaXNWYWxpZFBsYW5lKHBsYW5lKSkge1xuXHRcdFx0XHRcdFx0XHRwbGFuZXMucHVzaChwbGFuZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAoQS55ICsgQS5oZWlnaHQgPCBCLnkgKyBCLmhlaWdodCkge1xuXHRcdFx0XHRcdFx0XHR2YXIgcGxhbmUgPSB7XG5cdFx0XHRcdFx0XHRcdFx0eDogQS54LFxuXHRcdFx0XHRcdFx0XHRcdHk6IEIueSxcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogQi54IC0gQS54LFxuXHRcdFx0XHRcdFx0XHRcdGhlaWdodDogQS55ICsgQS5oZWlnaHQgLSBCLnlcblx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuaXNWYWxpZFBsYW5lKHBsYW5lKSkge1xuXHRcdFx0XHRcdFx0XHRcdHBsYW5lcy5wdXNoKHBsYW5lKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChBLnkgKyBBLmhlaWdodCA+PSBCLnkgKyBCLmhlaWdodCkge1xuXHRcdFx0XHRcdFx0XHR2YXIgcGxhbmUgPSB7XG5cdFx0XHRcdFx0XHRcdFx0eDogQS54LFxuXHRcdFx0XHRcdFx0XHRcdHk6IEIueSxcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogQi54IC0gQS54LFxuXHRcdFx0XHRcdFx0XHRcdGhlaWdodDogQi5oZWlnaHRcblx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuaXNWYWxpZFBsYW5lKHBsYW5lKSkge1xuXHRcdFx0XHRcdFx0XHRcdHBsYW5lcy5wdXNoKHBsYW5lKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRpZiAoQS55ICsgQS5oZWlnaHQgPiBCLnkgKyBCLmhlaWdodCkge1xuXHRcdFx0XHRcdFx0XHRcdHZhciBwbGFuZSA9IHtcblx0XHRcdFx0XHRcdFx0XHRcdHg6IEEueCxcblx0XHRcdFx0XHRcdFx0XHRcdHk6IEIueSArIEIuaGVpZ2h0LFxuXHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IEEud2lkdGgsXG5cdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IEEueSArIEEuaGVpZ2h0IC0gKEIueSArIEIuaGVpZ2h0KVxuXHRcdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuaXNWYWxpZFBsYW5lKHBsYW5lKSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0cGxhbmVzLnB1c2gocGxhbmUpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoQS55ID49IEIueSkge1xuXHRcdFx0XHRcdFx0aWYgKEEueSArIEEuaGVpZ2h0IDwgQi55ICsgQi5oZWlnaHQpIHtcblx0XHRcdFx0XHRcdFx0dmFyIHBsYW5lID0ge1xuXHRcdFx0XHRcdFx0XHRcdHg6IEEueCxcblx0XHRcdFx0XHRcdFx0XHR5OiBBLnksXG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IEIueCAtIEEueCxcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IEEuaGVpZ2h0XG5cdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLmlzVmFsaWRQbGFuZShwbGFuZSkpIHtcblx0XHRcdFx0XHRcdFx0XHRwbGFuZXMucHVzaChwbGFuZSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHZhciBwbGFuZSA9IHtcblx0XHRcdFx0XHRcdFx0XHR4OiBBLngsXG5cdFx0XHRcdFx0XHRcdFx0eTogQS55LFxuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiBCLnggLSBBLngsXG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBCLnkgKyBCLmhlaWdodCAtIEEueVxuXHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5pc1ZhbGlkUGxhbmUocGxhbmUpKSB7XG5cdFx0XHRcdFx0XHRcdFx0cGxhbmVzLnB1c2gocGxhbmUpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGlmIChBLnkgKyBBLmhlaWdodCA+IEIueSArIEIuaGVpZ2h0KSB7XG5cdFx0XHRcdFx0XHRcdHZhciBwbGFuZSA9IHtcblx0XHRcdFx0XHRcdFx0XHR4OiBBLngsXG5cdFx0XHRcdFx0XHRcdFx0eTogQi55ICsgQi5oZWlnaHQsXG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IEEud2lkdGgsXG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBBLnkgKyBBLmhlaWdodCAtIChCLnkgKyBCLmhlaWdodClcblx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuaXNWYWxpZFBsYW5lKHBsYW5lKSkge1xuXHRcdFx0XHRcdFx0XHRcdHBsYW5lcy5wdXNoKHBsYW5lKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoQS54ICsgQS53aWR0aCA+IEIueCArIEIud2lkdGgpIHtcblx0XHRcdFx0XHRpZiAoQS55IDwgQi55KSB7XG5cdFx0XHRcdFx0XHRpZiAoQS55ICsgQS5oZWlnaHQgPCBCLnkgKyBCLmhlaWdodCkge1xuXHRcdFx0XHRcdFx0XHR2YXIgcGxhbmUgPSB7XG5cdFx0XHRcdFx0XHRcdFx0eDogQi54ICsgQi53aWR0aCxcblx0XHRcdFx0XHRcdFx0XHR5OiBCLnksXG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IEEueCArIEEud2lkdGggLSAoQi54ICsgQi53aWR0aCksXG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBBLnkgKyBBLmhlaWdodCAtIEIueVxuXHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5pc1ZhbGlkUGxhbmUocGxhbmUpKSB7XG5cdFx0XHRcdFx0XHRcdFx0cGxhbmVzLnB1c2gocGxhbmUpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR2YXIgcGxhbmUgPSB7XG5cdFx0XHRcdFx0XHRcdFx0eDogQi54ICsgQi53aWR0aCxcblx0XHRcdFx0XHRcdFx0XHR5OiBCLnksXG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IEEueCArIEEud2lkdGggLSAoQi54ICsgQi53aWR0aCksXG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBCLmhlaWdodFxuXHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5pc1ZhbGlkUGxhbmUocGxhbmUpKSB7XG5cdFx0XHRcdFx0XHRcdFx0cGxhbmVzLnB1c2gocGxhbmUpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGlmIChBLnkgKyBBLmhlaWdodCA8IEIueSArIEIuaGVpZ2h0KSB7XG5cdFx0XHRcdFx0XHRcdHZhciBwbGFuZSA9IHtcblx0XHRcdFx0XHRcdFx0XHR4OiBCLnggKyBCLndpZHRoLFxuXHRcdFx0XHRcdFx0XHRcdHk6IEEueSxcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogQS54ICsgQS53aWR0aCAtIChCLnggKyBCLndpZHRoKSxcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IEEuaGVpZ2h0XG5cdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLmlzVmFsaWRQbGFuZShwbGFuZSkpIHtcblx0XHRcdFx0XHRcdFx0XHRwbGFuZXMucHVzaChwbGFuZSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHZhciBwbGFuZSA9IHtcblx0XHRcdFx0XHRcdFx0XHR4OiBCLnggKyBCLndpZHRoLFxuXHRcdFx0XHRcdFx0XHRcdHk6IEEueSxcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogQS54ICsgQS53aWR0aCAtIChCLnggKyBCLndpZHRoKSxcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IEIueSArIEIuaGVpZ2h0IC0gQS55XG5cdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLmlzVmFsaWRQbGFuZShwbGFuZSkpIHtcblx0XHRcdFx0XHRcdFx0XHRwbGFuZXMucHVzaChwbGFuZSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIG90aGVyXG5cdFx0XHRcdGlmIChBLnkgPCBCLnkpIHtcblx0XHRcdFx0XHR2YXIgcGxhbmUgPSB7XG5cdFx0XHRcdFx0XHR4OiBBLngsXG5cdFx0XHRcdFx0XHR5OiBBLnksXG5cdFx0XHRcdFx0XHR3aWR0aDogQS53aWR0aCxcblx0XHRcdFx0XHRcdGhlaWdodDogQi55IC0gQS55XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRpZiAodGhpcy5pc1ZhbGlkUGxhbmUocGxhbmUpKSB7XG5cdFx0XHRcdFx0XHRwbGFuZXMucHVzaChwbGFuZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChBLnkgKyBBLmhlaWdodCA8IEIueSArIEIuaGVpZ2h0KSB7XG5cdFx0XHRcdFx0XHRpZiAoQS54ICsgQS53aWR0aCA8PSBCLnggKyBCLndpZHRoKSB7XG5cdFx0XHRcdFx0XHRcdC8vIHBsYW5lIGluc2lkZSBvZiB0aGUgb3RoZXIgcGxhbmVcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHZhciBwbGFuZSA9IHtcblx0XHRcdFx0XHRcdFx0XHR4OiBCLnggKyBCLndpZHRoLFxuXHRcdFx0XHRcdFx0XHRcdHk6IEIueSxcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogQS54ICsgQS53aWR0aCAtIChCLnggKyBCLndpZHRoKSxcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IEEueSArIEEuaGVpZ2h0IC0gQi55XG5cdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLmlzVmFsaWRQbGFuZShwbGFuZSkpIHtcblx0XHRcdFx0XHRcdFx0XHRwbGFuZXMucHVzaChwbGFuZSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2UgaWYgKEEueSArIEEuaGVpZ2h0ID49IEIueSArIEIuaGVpZ2h0KSB7XG5cdFx0XHRcdFx0XHRpZiAoQS54ICsgQS53aWR0aCA8PSBCLnggKyBCLndpZHRoKSB7XG5cdFx0XHRcdFx0XHRcdC8vIHBsYW5lIGluc2lkZSBvZiB0aGUgb3RoZXIgcGxhbmVcblx0XHRcdFx0XHRcdFx0aWYgKEEueSArIEEuaGVpZ2h0ID4gQi55ICsgQi5oZWlnaHQpIHtcblx0XHRcdFx0XHRcdFx0XHR2YXIgcGxhbmUgPSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR4OiBBLngsXG5cdFx0XHRcdFx0XHRcdFx0XHR5OiBCLnkgKyBCLmhlaWdodCxcblx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiBBLndpZHRoLFxuXHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBBLnkgKyBBLmhlaWdodCAtIChCLnkgKyBCLmhlaWdodClcblx0XHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0XHRcdGlmICh0aGlzLmlzVmFsaWRQbGFuZShwbGFuZSkpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHBsYW5lcy5wdXNoKHBsYW5lKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHZhciBwbGFuZSA9IHtcblx0XHRcdFx0XHRcdFx0XHR4OiBCLnggKyBCLndpZHRoLFxuXHRcdFx0XHRcdFx0XHRcdHk6IEIueSxcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogQS54ICsgQS53aWR0aCAtIChCLnggKyBCLndpZHRoKSxcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IEIuaGVpZ2h0XG5cdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLmlzVmFsaWRQbGFuZShwbGFuZSkpIHtcblx0XHRcdFx0XHRcdFx0XHRwbGFuZXMucHVzaChwbGFuZSk7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRpZiAoQS55ICsgQS5oZWlnaHQgPiBCLnkgKyBCLmhlaWdodCkge1xuXHRcdFx0XHRcdFx0XHRcdHZhciBwbGFuZSA9IHtcblx0XHRcdFx0XHRcdFx0XHRcdHg6IEEueCxcblx0XHRcdFx0XHRcdFx0XHRcdHk6IEIueSArIEIuaGVpZ2h0LFxuXHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IEEud2lkdGgsXG5cdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IEEueSArIEEuaGVpZ2h0IC0gKEIueSArIEIuaGVpZ2h0KVxuXHRcdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuaXNWYWxpZFBsYW5lKHBsYW5lKSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0cGxhbmVzLnB1c2gocGxhbmUpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIGlmIChBLnkgPj0gQi55KSB7XG5cdFx0XHRcdFx0aWYgKEEueSArIEEuaGVpZ2h0IDwgQi55ICsgQi5oZWlnaHQpIHtcblx0XHRcdFx0XHRcdGlmIChBLnggKyBBLndpZHRoIDwgQi54ICsgQi53aWR0aCkge1xuXHRcdFx0XHRcdFx0XHQvLyBwbGFuZSBpbnNpZGUgb2YgdGhlIG90aGVyIHBsYW5lXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR2YXIgcGxhbmUgPSB7XG5cdFx0XHRcdFx0XHRcdFx0eDogQi54ICsgQi53aWR0aCxcblx0XHRcdFx0XHRcdFx0XHR5OiBBLnksXG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IEEueCArIEEud2lkdGggLSAoQi54ICsgQi53aWR0aCksXG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBBLmhlaWdodFxuXHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5pc1ZhbGlkUGxhbmUocGxhbmUpKSB7XG5cdFx0XHRcdFx0XHRcdFx0cGxhbmVzLnB1c2gocGxhbmUpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGlmIChBLnggKyBBLndpZHRoIDwgQi54ICsgQi53aWR0aCkge1xuXHRcdFx0XHRcdFx0XHQvLyBwbGFuZSBpbnNpZGUgb2YgdGhlIG90aGVyIHBsYW5lXG5cdFx0XHRcdFx0XHRcdGlmIChBLnkgKyBBLmhlaWdodCA+IEIueSArIEIuaGVpZ2h0KSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIHBsYW5lID0ge1xuXHRcdFx0XHRcdFx0XHRcdFx0eDogQS54LFxuXHRcdFx0XHRcdFx0XHRcdFx0eTogQi55ICsgQi5oZWlnaHQsXG5cdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogQS53aWR0aCxcblx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogQS55ICsgQS5oZWlnaHQgLSAoQi55ICsgQi5oZWlnaHQpXG5cdFx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdFx0XHRpZiAodGhpcy5pc1ZhbGlkUGxhbmUocGxhbmUpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFuZXMucHVzaChwbGFuZSk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR2YXIgcGxhbmUgPSB7XG5cdFx0XHRcdFx0XHRcdFx0eDogQi54ICsgQi53aWR0aCxcblx0XHRcdFx0XHRcdFx0XHR5OiBBLnksXG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IEEueCArIEEud2lkdGggLSAoQi54ICsgQi53aWR0aCksXG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBCLnkgKyBCLmhlaWdodCAtIEEueVxuXHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5pc1ZhbGlkUGxhbmUocGxhbmUpKSB7XG5cdFx0XHRcdFx0XHRcdFx0cGxhbmVzLnB1c2gocGxhbmUpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGlmIChBLnkgKyBBLmhlaWdodCA+IEIueSArIEIuaGVpZ2h0KSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIHBsYW5lID0ge1xuXHRcdFx0XHRcdFx0XHRcdFx0eDogQS54LFxuXHRcdFx0XHRcdFx0XHRcdFx0eTogQi55ICsgQi5oZWlnaHQsXG5cdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogQS53aWR0aCxcblx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogQS55ICsgQS5oZWlnaHQgLSAoQi55ICsgQi5oZWlnaHQpXG5cdFx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdFx0XHRpZiAodGhpcy5pc1ZhbGlkUGxhbmUocGxhbmUpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFuZXMucHVzaChwbGFuZSk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKHBsYW5lcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRyZXR1cm4gcGxhbmVzO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9O1xuXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gUE9TSVRJT05JTkcgTE9HSUMgRU5EIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEVWRU5UIEhBTkRMRVJTIE1JU0NFTExBTkVPVVMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5cdExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5vbldpbmRvd1Jlc2l6ZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0c2V0VGltZW91dChcblx0XHRcdHRoaXMub25XaW5kb3dSZXNpemVUaW1lckNhbGxiYWNrRnVuY3Rpb25WYXJpYWJsZSxcblx0XHRcdHRoaXMuV0lORE9XX1JFU0laRV9XQUlUX1RJTUVcblx0XHQpO1xuXHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFxuXHRcdFx0XCJyZXNpemVcIixcblx0XHRcdHRoaXMub25XaW5kb3dSZXNpemVGdW5jdGlvblZhcmlhYmxlXG5cdFx0KTtcblx0fTtcblxuXHRMaW1iZXJHcmlkVmlldy5wcm90b3R5cGUub25XaW5kb3dSZXNpemVUaW1lckNhbGxiYWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHR0aGlzLmluaXQodGhpcy5XSURUSCwgZmFsc2UpO1xuXHRcdHRoaXMucmVuZGVyKCk7XG5cblx0XHRpZiAodGhpcy5vcHRpb25zLnJlUmVuZGVyT25SZXNpemUgIT0gZmFsc2UpIHtcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFx0XHRcInJlc2l6ZVwiLFxuXHRcdFx0XHR0aGlzLm9uV2luZG93UmVzaXplRnVuY3Rpb25WYXJpYWJsZVxuXHRcdFx0KTtcblx0XHR9XG5cdH07XG5cblx0TGltYmVyR3JpZFZpZXcucHJvdG90eXBlLm9uSXRlbUNsaWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHR0aGlzLmNhbGxiYWNrcy5vbkl0ZW1DbGlja0NhbGxiYWNrKGV2ZW50KTtcblx0fTtcblxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBFVkVOVCBIQU5ETEVSUyBNSVNDRUxMQU5FT1VTIEVORCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tIEVWRU5UIEhBTkRMRVJTIEZPUiBBRERJTkcgQU5EIENVVFRJTkcgU1BBQ0UgSVRFTSAtLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXHRMaW1iZXJHcmlkVmlldy5wcm90b3R5cGUub25MaW1iZXJHcmlkTW91c2VEb3duID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImxpbWJlckdyaWRWaWV3XCIpKSB7XG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmIChldmVudC53aGljaCAhPSAxKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5saW1iZXJHcmlkTW91c2VEb3duQ2FuY2VsID0gZmFsc2U7XG5cdFx0dGhpcy5saW1iZXJHcmlkTW91c2VEb3duVGltZXJDb21wbGV0ZSA9IGZhbHNlO1xuXG5cdFx0Y2xlYXJUaW1lb3V0KHRoaXMubGltYmVyR3JpZE1vdXNlRG93bkNoZWNrVGltZU91dFZhcmlhYmxlKTtcblx0XHR0aGlzLmxpbWJlckdyaWRNb3VzZURvd25DaGVja1RpbWVPdXRWYXJpYWJsZSA9IHNldFRpbWVvdXQoXG5cdFx0XHR0aGlzLm9uTGltYmVyR3JpZE1vdXNlRG93bkNoZWNrLmJpbmQoXG5cdFx0XHRcdHRoaXMsXG5cdFx0XHRcdGV2ZW50LFxuXHRcdFx0XHRldmVudC5vZmZzZXRYLFxuXHRcdFx0XHRldmVudC5vZmZzZXRZXG5cdFx0XHQpLFxuXHRcdFx0dGhpcy5NT1VTRV9ET1dOX1RJTUVcblx0XHQpO1xuXG5cdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdbMF0uYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdFwibW91c2Vtb3ZlXCIsXG5cdFx0XHR0aGlzLm9uTGltYmVyR3JpZE1vdXNlTW92ZUJpbmRlZEZ1bmN0aW9uVmFyaWFibGVcblx0XHQpO1xuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcIm1vdXNldXBcIixcblx0XHRcdHRoaXMub25MaW1iZXJHcmlkTW91c2VVcEJpbmRlZEZ1bmN0aW9uVmFyaWFibGVcblx0XHQpO1xuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcImNvbnRleHRtZW51XCIsXG5cdFx0XHR0aGlzLm9uTGltYmVyR3JpZENvbnRleHRNZW51QmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHRcdCk7XG5cdH07XG5cblx0TGltYmVyR3JpZFZpZXcucHJvdG90eXBlLm9uTGltYmVyR3JpZFRvdWNoU3RhcnQgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibGltYmVyR3JpZFZpZXdcIikpIHtcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5saW1iZXJHcmlkVG91Y2hTdGFydENhbmNlbCA9IGZhbHNlO1xuXHRcdHRoaXMubGltYmVyR3JpZFRvdWNoU3RhcnRUaW1lckNvbXBsZXRlID0gZmFsc2U7XG5cblx0XHRjbGVhclRpbWVvdXQodGhpcy5saW1iZXJHcmlkVG91Y2hTdGFydENoZWNrVGltZU91dFZhcmlhYmxlKTtcblx0XHR0aGlzLmxpbWJlckdyaWRUb3VjaFN0YXJ0Q2hlY2tUaW1lT3V0VmFyaWFibGUgPSBzZXRUaW1lb3V0KFxuXHRcdFx0dGhpcy5vbkxpbWJlckdyaWRUb3VjaFN0YXJ0Q2hlY2suYmluZCh0aGlzLCBldmVudCksXG5cdFx0XHR0aGlzLlRPVUNIX0hPTERfVElNRVxuXHRcdCk7XG5cblx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFx0XCJ0b3VjaG1vdmVcIixcblx0XHRcdHRoaXMub25MaW1iZXJHcmlkVG91Y2hNb3ZlQmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHRcdCk7XG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdFwidG91Y2hlbmRcIixcblx0XHRcdHRoaXMub25MaW1iZXJHcmlkVG91Y2hFbmRCaW5kZWRGdW5jdGlvblZhcmlhYmxlXG5cdFx0KTtcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFx0XCJ0b3VjaGNhbmNlbFwiLFxuXHRcdFx0dGhpcy5vbkxpbWJlckdyaWRUb3VjaENhbmNlbEJpbmRlZEZ1bmN0aW9uVmFyaWFibGVcblx0XHQpO1xuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcImNvbnRleHRtZW51XCIsXG5cdFx0XHR0aGlzLm9uTGltYmVyR3JpZFRvdWNoQ29udGV4dE1lbnVCaW5kZWRGdW5jdGlvblZhcmlhYmxlXG5cdFx0KTtcblx0XHR0aGlzLnVuSW5pdGlhbGl6ZUl0ZW1Ub3VjaEV2ZW50cygpO1xuXG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdH07XG5cblx0TGltYmVyR3JpZFZpZXcucHJvdG90eXBlLm9uTGltYmVyR3JpZE1vdXNlRG93bkNoZWNrID0gZnVuY3Rpb24oXG5cdFx0ZXZlbnQsXG5cdFx0b2Zmc2V0WCxcblx0XHRvZmZzZXRZXG5cdCkge1xuXHRcdGlmICh0aGlzLmxpbWJlckdyaWRNb3VzZURvd25DYW5jZWwgPT0gZmFsc2UpIHtcblx0XHRcdHRoaXMubGltYmVyR3JpZE1vdXNlRG93blRpbWVyQ29tcGxldGUgPSB0cnVlO1xuXG5cdFx0XHR0aGlzLiRib2R5WzBdLmNsYXNzTGlzdC5hZGQoXG5cdFx0XHRcdFwibGltYmVyR3JpZFZpZXdCb2R5VGFnU3RhdGVFbGVtZW50RHJhZ2dpbmdPclJlc2l6aW5nXCIsXG5cdFx0XHRcdFwibGltYmVyR3JpZFZpZXdCb2R5VGFnU3RhdGVFbGVtZW50QWRkaW5nXCJcblx0XHRcdCk7XG5cdFx0XHR2YXIgbGVuZ3RoXzAgPSB0aGlzLiRsaW1iZXJHcmlkVmlld0l0ZW1zLmxlbmd0aDtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0l0ZW1zW2ldLmNsYXNzTGlzdC5hZGQoXG5cdFx0XHRcdFx0XCJsaW1iZXJHcmlkVmlld0l0ZW1SZXNpemluZ1N0YXRlXCJcblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGxlbmd0aF8wID0gdGhpcy4kbGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbXMubGVuZ3RoO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1zW2ldLmNsYXNzTGlzdC5hZGQoXG5cdFx0XHRcdFx0XCJsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtUmVzaXppbmdTdGF0ZVwiXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBzY3JvbGxUb3AgPSB0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5zY3JvbGxUb3A7XG5cdFx0XHR2YXIgc2Nyb2xsTGVmdCA9IHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLnNjcm9sbExlZnQ7XG5cdFx0XHR2YXIgeCA9IG9mZnNldFggKyBzY3JvbGxMZWZ0IC0gdGhpcy5QQURESU5HX0xFRlQ7XG5cdFx0XHR2YXIgeSA9IG9mZnNldFkgKyBzY3JvbGxUb3AgLSB0aGlzLlBBRERJTkdfVE9QO1xuXG5cdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhID0ge1xuXHRcdFx0XHR0eXBlOiBcImFkZFwiLFxuXHRcdFx0XHRhZGRQb3NpdGlvblg6IHgsXG5cdFx0XHRcdGFkZFBvc2l0aW9uWTogeVxuXHRcdFx0fTtcblxuXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdBZGRJdGVtR3VpZGVbMF0uc3R5bGUuaGVpZ2h0ID0gMSArIFwicHhcIjtcblx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3QWRkSXRlbUd1aWRlWzBdLnN0eWxlLndpZHRoID0gMSArIFwicHhcIjtcblx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3QWRkSXRlbUd1aWRlWzBdLnN0eWxlLnRyYW5zZm9ybSA9XG5cdFx0XHRcdFwidHJhbnNsYXRlKFwiICsgeCArIFwicHgsIFwiICsgeSArIFwicHgpXCI7XG5cblx0XHRcdGlmICh0aGlzLkFERF9PUl9DVVRTUEFDRV9UT0dHTEUgPT0gXCJBRERcIikge1xuXHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0FkZEl0ZW1HdWlkZVswXS5jbGFzc0xpc3QuYWRkKFxuXHRcdFx0XHRcdFwibGltYmVyR3JpZFZpZXdBZGRJdGVtR3VpZGVBY3RpdmVcIlxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIGlmICh0aGlzLkFERF9PUl9DVVRTUEFDRV9UT0dHTEUgPT0gXCJDVVRTUEFDRVwiKSB7XG5cdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3QWRkSXRlbUd1aWRlWzBdLmNsYXNzTGlzdC5hZGQoXG5cdFx0XHRcdFx0XCJsaW1iZXJHcmlkVmlld0FkZEl0ZW1HdWlkZUFjdGl2ZVwiLFxuXHRcdFx0XHRcdFwibGltYmVyR3JpZFZpZXdBZGRJdGVtR3VpZGVDdXRNb2RlXCJcblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdIZWlnaHRBZGp1c3RHdWlkZVswXS5zdHlsZS5oZWlnaHQgPSAwICsgXCJweFwiO1xuXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdIZWlnaHRBZGp1c3RHdWlkZVswXS5jbGFzc0xpc3QuYWRkKFxuXHRcdFx0XHRcImxpbWJlckdyaWRWaWV3SGVpZ2h0QWRqdXN0R3VpZGVBY3RpdmVcIlxuXHRcdFx0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gbW91c2VEb3duIGNhbmNlbCBiZWZvcmUgVGltZXJDb21wbGV0ZVxuXHRcdH1cblx0fTtcblxuXHRMaW1iZXJHcmlkVmlldy5wcm90b3R5cGUub25MaW1iZXJHcmlkVG91Y2hTdGFydENoZWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRpZiAodGhpcy5saW1iZXJHcmlkVG91Y2hTdGFydENhbmNlbCA9PSBmYWxzZSkge1xuXHRcdFx0dGhpcy5saW1iZXJHcmlkVG91Y2hTdGFydFRpbWVyQ29tcGxldGUgPSB0cnVlO1xuXG5cdFx0XHR0aGlzLiRib2R5WzBdLmNsYXNzTGlzdC5hZGQoXG5cdFx0XHRcdFwibGltYmVyR3JpZFZpZXdCb2R5VGFnU3RhdGVFbGVtZW50RHJhZ2dpbmdPclJlc2l6aW5nXCIsXG5cdFx0XHRcdFwibGltYmVyR3JpZFZpZXdCb2R5VGFnU3RhdGVFbGVtZW50QWRkaW5nXCJcblx0XHRcdCk7XG5cdFx0XHR2YXIgbGVuZ3RoXzAgPSB0aGlzLiRsaW1iZXJHcmlkVmlld0l0ZW1zLmxlbmd0aDtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0l0ZW1zW2ldLmNsYXNzTGlzdC5hZGQoXG5cdFx0XHRcdFx0XCJsaW1iZXJHcmlkVmlld0l0ZW1SZXNpemluZ1N0YXRlXCJcblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGxlbmd0aF8wID0gdGhpcy4kbGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbXMubGVuZ3RoO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1zW2ldLmNsYXNzTGlzdC5hZGQoXG5cdFx0XHRcdFx0XCJsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtUmVzaXppbmdTdGF0ZVwiXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdHZhciB0b3VjaFBvc2l0aW9uT25MaW1iZXJHcmlkID0gdGhpcy5jYWxjdWxhdGVUb3VjaFBvc09uTGltYmVyR3JpZChcblx0XHRcdFx0ZXZlbnRcblx0XHRcdCk7XG5cblx0XHRcdHZhciB4ID0gdG91Y2hQb3NpdGlvbk9uTGltYmVyR3JpZC54O1xuXHRcdFx0dmFyIHkgPSB0b3VjaFBvc2l0aW9uT25MaW1iZXJHcmlkLnk7XG5cblx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEgPSB7XG5cdFx0XHRcdHR5cGU6IFwiYWRkXCIsXG5cdFx0XHRcdGFkZFBvc2l0aW9uWDogeCxcblx0XHRcdFx0YWRkUG9zaXRpb25ZOiB5XG5cdFx0XHR9O1xuXG5cdFx0XHR2YXIgcmVtb3ZlQWRkSXRlbU9uVG91Y2hIb2xkR3VpZGVGdW5jdGlvbiA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0FkZEl0ZW1PblRvdWNoSG9sZEd1aWRlWzBdLmNsYXNzTGlzdC5yZW1vdmUoXG5cdFx0XHRcdFx0XCJsaW1iZXJHcmlkVmlld0FkZEl0ZW1PblRvdWNoSG9sZEd1aWRlQWN0aXZlXCJcblx0XHRcdFx0KTtcblx0XHRcdH07XG5cdFx0XHRzZXRUaW1lb3V0KHJlbW92ZUFkZEl0ZW1PblRvdWNoSG9sZEd1aWRlRnVuY3Rpb24uYmluZCh0aGlzKSwgNTAwKTtcblxuXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdBZGRJdGVtR3VpZGVbMF0uc3R5bGUuaGVpZ2h0ID0gMSArIFwicHhcIjtcblx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3QWRkSXRlbUd1aWRlWzBdLnN0eWxlLndpZHRoID0gMSArIFwicHhcIjtcblx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3QWRkSXRlbUd1aWRlWzBdLnN0eWxlLnRyYW5zZm9ybSA9XG5cdFx0XHRcdFwidHJhbnNsYXRlKFwiICsgeCArIFwicHgsIFwiICsgeSArIFwicHgpXCI7XG5cblx0XHRcdGlmICh0aGlzLkFERF9PUl9DVVRTUEFDRV9UT0dHTEUgPT0gXCJBRERcIikge1xuXHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0FkZEl0ZW1HdWlkZVswXS5jbGFzc0xpc3QuYWRkKFxuXHRcdFx0XHRcdFwibGltYmVyR3JpZFZpZXdBZGRJdGVtR3VpZGVBY3RpdmVcIlxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIGlmICh0aGlzLkFERF9PUl9DVVRTUEFDRV9UT0dHTEUgPT0gXCJDVVRTUEFDRVwiKSB7XG5cdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3QWRkSXRlbUd1aWRlWzBdLmNsYXNzTGlzdC5hZGQoXG5cdFx0XHRcdFx0XCJsaW1iZXJHcmlkVmlld0FkZEl0ZW1HdWlkZUFjdGl2ZVwiLFxuXHRcdFx0XHRcdFwibGltYmVyR3JpZFZpZXdBZGRJdGVtR3VpZGVDdXRNb2RlXCJcblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdIZWlnaHRBZGp1c3RHdWlkZVswXS5zdHlsZS5oZWlnaHQgPSAwICsgXCJweFwiO1xuXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdIZWlnaHRBZGp1c3RHdWlkZVswXS5jbGFzc0xpc3QuYWRkKFxuXHRcdFx0XHRcImxpbWJlckdyaWRWaWV3SGVpZ2h0QWRqdXN0R3VpZGVBY3RpdmVcIlxuXHRcdFx0KTtcblxuXHRcdFx0dGhpcy5pbnNlcnRBZGRJdGVtT25Ub3VjaEhvbGRHdWlkZVN0eWxlcyh4LCB5KTtcblx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3QWRkSXRlbU9uVG91Y2hIb2xkR3VpZGVbMF0uc3R5bGUudHJhbnNmb3JtID1cblx0XHRcdFx0XCJ0cmFuc2xhdGUoXCIgKyB4ICsgXCJweCwgXCIgKyB5ICsgXCJweClcIjtcblx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3QWRkSXRlbU9uVG91Y2hIb2xkR3VpZGVbMF0uY2xhc3NMaXN0LmFkZChcblx0XHRcdFx0XCJsaW1iZXJHcmlkVmlld0FkZEl0ZW1PblRvdWNoSG9sZEd1aWRlQWN0aXZlXCJcblx0XHRcdCk7XG5cblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHRvdWNoc3RhcnQgY2FuY2VsIGJlZm9yZSBUaW1lckNvbXBsZXRlXG5cdFx0fVxuXHR9O1xuXG5cdExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5vbkxpbWJlckdyaWRNb3VzZU1vdmUgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdGlmICh0aGlzLmxpbWJlckdyaWRNb3VzZURvd25UaW1lckNvbXBsZXRlID09IHRydWUpIHtcblx0XHRcdGlmIChcblx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdBZGRJdGVtR3VpZGVbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKFxuXHRcdFx0XHRcdFwibGltYmVyR3JpZFZpZXdBZGRJdGVtR3VpZGVBZGRBbGxvd1wiXG5cdFx0XHRcdCkgfHxcblx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdBZGRJdGVtR3VpZGVbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKFxuXHRcdFx0XHRcdFwibGltYmVyR3JpZFZpZXdBZGRJdGVtR3VpZGVBZGREaXNhbGxvd1wiXG5cdFx0XHRcdClcblx0XHRcdCkge1xuXHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0FkZEl0ZW1HdWlkZVswXS5jbGFzc0xpc3QucmVtb3ZlKFxuXHRcdFx0XHRcdFwibGltYmVyR3JpZFZpZXdBZGRJdGVtR3VpZGVBZGRBbGxvd1wiLFxuXHRcdFx0XHRcdFwibGltYmVyR3JpZFZpZXdBZGRJdGVtR3VpZGVBZGREaXNhbGxvd1wiXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBzY3JvbGxUb3AgPSB0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5zY3JvbGxUb3A7XG5cdFx0XHR2YXIgc2Nyb2xsTGVmdCA9IHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLnNjcm9sbExlZnQ7XG5cblx0XHRcdHZhciB4ID0gdGhpcy51c2VyQWN0aW9uRGF0YS5hZGRQb3NpdGlvblg7XG5cdFx0XHR2YXIgeSA9IHRoaXMudXNlckFjdGlvbkRhdGEuYWRkUG9zaXRpb25ZO1xuXG5cdFx0XHR2YXIgbmV3V2lkdGggPSBldmVudC5vZmZzZXRYIC0geCArIHNjcm9sbExlZnQgLSB0aGlzLlBBRERJTkdfTEVGVDtcblx0XHRcdHZhciBuZXdIZWlnaHQgPSBldmVudC5vZmZzZXRZIC0geSArIHNjcm9sbFRvcCAtIHRoaXMuUEFERElOR19UT1A7XG5cblx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEubmV3V2lkdGggPSBuZXdXaWR0aDtcblx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEubmV3SGVpZ2h0ID0gbmV3SGVpZ2h0O1xuXG5cdFx0XHR2YXIgeU1vdXNlUG9zaXRpb24gPSBldmVudC5vZmZzZXRZICsgc2Nyb2xsVG9wO1xuXHRcdFx0dGhpcy5hZGp1c3RIZWlnaHQoeU1vdXNlUG9zaXRpb24pO1xuXG5cdFx0XHRpZiAobmV3V2lkdGggPiAwICYmIG5ld0hlaWdodCA+IDApIHtcblx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdBZGRJdGVtR3VpZGVbMF0uc3R5bGUud2lkdGggPVxuXHRcdFx0XHRcdG5ld1dpZHRoICsgXCJweFwiO1xuXHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0FkZEl0ZW1HdWlkZVswXS5zdHlsZS5oZWlnaHQgPVxuXHRcdFx0XHRcdG5ld0hlaWdodCArIFwicHhcIjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMuQUREX09SX0NVVFNQQUNFX1RPR0dMRSA9PSBcIkFERFwiKSB7XG5cdFx0XHRcdGNsZWFyVGltZW91dCh0aGlzLmFkZEl0ZW1BbGxvd0NoZWNrVGltZU91dFZhcmlhYmxlKTtcblx0XHRcdFx0dGhpcy5hZGRJdGVtQWxsb3dDaGVja1RpbWVPdXRWYXJpYWJsZSA9IHNldFRpbWVvdXQoXG5cdFx0XHRcdFx0dGhpcy5hZGRJdGVtQWxsb3dDaGVja1RpbWVPdXQuYmluZChcblx0XHRcdFx0XHRcdHRoaXMsXG5cdFx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLmFkZFBvc2l0aW9uWCxcblx0XHRcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuYWRkUG9zaXRpb25ZLFxuXHRcdFx0XHRcdFx0bmV3V2lkdGgsXG5cdFx0XHRcdFx0XHRuZXdIZWlnaHRcblx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdHRoaXMuREVNT19XQUlUX1RJTUVcblx0XHRcdFx0KTtcblx0XHRcdH0gZWxzZSBpZiAodGhpcy5BRERfT1JfQ1VUU1BBQ0VfVE9HR0xFID09IFwiQ1VUU1BBQ0VcIikge1xuXHRcdFx0XHRjbGVhclRpbWVvdXQodGhpcy5jdXRTcGFjZUFsbG93Q2hlY2tUaW1lT3V0VmFyaWFibGUpO1xuXHRcdFx0XHR0aGlzLmN1dFNwYWNlQWxsb3dDaGVja1RpbWVPdXRWYXJpYWJsZSA9IHNldFRpbWVvdXQoXG5cdFx0XHRcdFx0dGhpcy5jdXRTcGFjZUFsbG93Q2hlY2tUaW1lT3V0LmJpbmQoXG5cdFx0XHRcdFx0XHR0aGlzLFxuXHRcdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5hZGRQb3NpdGlvblgsXG5cdFx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLmFkZFBvc2l0aW9uWSxcblx0XHRcdFx0XHRcdG5ld1dpZHRoLFxuXHRcdFx0XHRcdFx0bmV3SGVpZ2h0XG5cdFx0XHRcdFx0KSxcblx0XHRcdFx0XHR0aGlzLkRFTU9fV0FJVF9USU1FXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNsZWFyVGltZW91dCh0aGlzLmxpbWJlckdyaWRNb3VzZURvd25DaGVja1RpbWVPdXRWYXJpYWJsZSk7XG5cdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5yZW1vdmVFdmVudExpc3RlbmVyKFxuXHRcdFx0XHRcIm1vdXNlbW92ZVwiLFxuXHRcdFx0XHR0aGlzLm9uTGltYmVyR3JpZE1vdXNlTW92ZUJpbmRlZEZ1bmN0aW9uVmFyaWFibGVcblx0XHRcdCk7XG5cdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuXHRcdFx0XHRcIm1vdXNldXBcIixcblx0XHRcdFx0dGhpcy5vbkxpbWJlckdyaWRNb3VzZVVwQmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHRcdFx0KTtcblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcdFwiY29udGV4dG1lbnVcIixcblx0XHRcdFx0dGhpcy5vbkxpbWJlckdyaWRDb250ZXh0TWVudUJpbmRlZEZ1bmN0aW9uVmFyaWFibGVcblx0XHRcdCk7XG5cdFx0fVxuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHR9O1xuXG5cdExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5vbkxpbWJlckdyaWRUb3VjaE1vdmUgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdGlmICh0aGlzLmxpbWJlckdyaWRUb3VjaFN0YXJ0VGltZXJDb21wbGV0ZSA9PSB0cnVlKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcImxpbWJlckdyaWRUb3VjaFN0YXJ0VGltZXJDb21wbGV0ZVwiKTtcblx0XHRcdGlmIChcblx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdBZGRJdGVtR3VpZGVbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKFxuXHRcdFx0XHRcdFwibGltYmVyR3JpZFZpZXdBZGRJdGVtR3VpZGVBZGRBbGxvd1wiXG5cdFx0XHRcdCkgfHxcblx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdBZGRJdGVtR3VpZGVbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKFxuXHRcdFx0XHRcdFwibGltYmVyR3JpZFZpZXdBZGRJdGVtR3VpZGVBZGREaXNhbGxvd1wiXG5cdFx0XHRcdClcblx0XHRcdCkge1xuXHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0FkZEl0ZW1HdWlkZVswXS5jbGFzc0xpc3QucmVtb3ZlKFxuXHRcdFx0XHRcdFwibGltYmVyR3JpZFZpZXdBZGRJdGVtR3VpZGVBZGRBbGxvd1wiLFxuXHRcdFx0XHRcdFwibGltYmVyR3JpZFZpZXdBZGRJdGVtR3VpZGVBZGREaXNhbGxvd1wiXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBzY3JvbGxUb3AgPSB0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5zY3JvbGxUb3A7XG5cdFx0XHR2YXIgc2Nyb2xsTGVmdCA9IHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLnNjcm9sbExlZnQ7XG5cblx0XHRcdHZhciB4ID0gdGhpcy51c2VyQWN0aW9uRGF0YS5hZGRQb3NpdGlvblg7XG5cdFx0XHR2YXIgeSA9IHRoaXMudXNlckFjdGlvbkRhdGEuYWRkUG9zaXRpb25ZO1xuXG5cdFx0XHR2YXIgdG91Y2hQb3NpdGlvbk9uTGltYmVyR3JpZCA9IHRoaXMuY2FsY3VsYXRlVG91Y2hQb3NPbkxpbWJlckdyaWQoXG5cdFx0XHRcdGV2ZW50XG5cdFx0XHQpO1xuXG5cdFx0XHRpZiAodG91Y2hQb3NpdGlvbk9uTGltYmVyR3JpZCAhPSBmYWxzZSkge1xuXHRcdFx0XHR2YXIgbmV3V2lkdGggPSB0b3VjaFBvc2l0aW9uT25MaW1iZXJHcmlkLnggLSB4O1xuXHRcdFx0XHR2YXIgbmV3SGVpZ2h0ID0gdG91Y2hQb3NpdGlvbk9uTGltYmVyR3JpZC55IC0geTtcblxuXHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLm5ld1dpZHRoID0gbmV3V2lkdGg7XG5cdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEubmV3SGVpZ2h0ID0gbmV3SGVpZ2h0O1xuXG5cdFx0XHRcdGlmIChuZXdXaWR0aCA+IDAgJiYgbmV3SGVpZ2h0ID4gMCkge1xuXHRcdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3QWRkSXRlbUd1aWRlWzBdLnN0eWxlLndpZHRoID1cblx0XHRcdFx0XHRcdG5ld1dpZHRoICsgXCJweFwiO1xuXHRcdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3QWRkSXRlbUd1aWRlWzBdLnN0eWxlLmhlaWdodCA9XG5cdFx0XHRcdFx0XHRuZXdIZWlnaHQgKyBcInB4XCI7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKHRvdWNoUG9zaXRpb25PbkxpbWJlckdyaWQgIT0gZmFsc2UpIHtcblx0XHRcdFx0dmFyIGxpbWJlckdyaWRWaWV3Qm91bmRpbmdDbGllbnRSZWN0ID0gdGhpcy4kbGltYmVyR3JpZFZpZXdbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRcdHZhciBsaW1iZXJHcmlkVmlld1dpZHRoVmlzaWJsZVdpZHRoID1cblx0XHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5vZmZzZXRXaWR0aCAtXG5cdFx0XHRcdFx0bGltYmVyR3JpZFZpZXdCb3VuZGluZ0NsaWVudFJlY3QubGVmdDtcblx0XHRcdFx0dmFyIGxpbWJlckdyaWRWaWV3SGVpZ2h0VmlzaWJsZUhlaWdodCA9XG5cdFx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdbMF0ub2Zmc2V0SGVpZ2h0IC1cblx0XHRcdFx0XHRsaW1iZXJHcmlkVmlld0JvdW5kaW5nQ2xpZW50UmVjdC50b3A7XG5cdFx0XHRcdHZhciBsaW1iZXJHcmlkVmlld09uVmlzaWJsZUFyZWFYID1cblx0XHRcdFx0XHR0b3VjaFBvc2l0aW9uT25MaW1iZXJHcmlkLnggK1xuXHRcdFx0XHRcdHRoaXMuUEFERElOR19MRUZUIC1cblx0XHRcdFx0XHRzY3JvbGxMZWZ0O1xuXHRcdFx0XHR2YXIgbGltYmVyR3JpZFZpZXdPblZpc2libGVBcmVhWSA9XG5cdFx0XHRcdFx0dG91Y2hQb3NpdGlvbk9uTGltYmVyR3JpZC55ICsgdGhpcy5QQURESU5HX1RPUCAtIHNjcm9sbFRvcDtcblxuXHRcdFx0XHR2YXIgeVRvdWNoUG9zaXRpb24gPSB0b3VjaFBvc2l0aW9uT25MaW1iZXJHcmlkLnk7XG5cdFx0XHRcdHRoaXMuYWRqdXN0SGVpZ2h0KHlUb3VjaFBvc2l0aW9uKTtcblxuXHRcdFx0XHR2YXIgcHJvZ3JhbVNjcm9sbGVkID0gdGhpcy5hZGp1c3RTY3JvbGwoXG5cdFx0XHRcdFx0bGltYmVyR3JpZFZpZXdPblZpc2libGVBcmVhWSxcblx0XHRcdFx0XHRsaW1iZXJHcmlkVmlld0hlaWdodFZpc2libGVIZWlnaHRcblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMuQUREX09SX0NVVFNQQUNFX1RPR0dMRSA9PSBcIkFERFwiKSB7XG5cdFx0XHRcdGNsZWFyVGltZW91dCh0aGlzLmFkZEl0ZW1BbGxvd0NoZWNrVGltZU91dFZhcmlhYmxlKTtcblx0XHRcdFx0aWYgKHByb2dyYW1TY3JvbGxlZCAhPSB0cnVlKSB7XG5cdFx0XHRcdFx0dGhpcy5hZGRJdGVtQWxsb3dDaGVja1RpbWVPdXRWYXJpYWJsZSA9IHNldFRpbWVvdXQoXG5cdFx0XHRcdFx0XHR0aGlzLmFkZEl0ZW1BbGxvd0NoZWNrVGltZU91dC5iaW5kKFxuXHRcdFx0XHRcdFx0XHR0aGlzLFxuXHRcdFx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLmFkZFBvc2l0aW9uWCxcblx0XHRcdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5hZGRQb3NpdGlvblksXG5cdFx0XHRcdFx0XHRcdG5ld1dpZHRoLFxuXHRcdFx0XHRcdFx0XHRuZXdIZWlnaHRcblx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHR0aGlzLkRFTU9fV0FJVF9USU1FXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICh0aGlzLkFERF9PUl9DVVRTUEFDRV9UT0dHTEUgPT0gXCJDVVRTUEFDRVwiKSB7XG5cdFx0XHRcdGNsZWFyVGltZW91dCh0aGlzLmN1dFNwYWNlQWxsb3dDaGVja1RpbWVPdXRWYXJpYWJsZSk7XG5cdFx0XHRcdGlmIChwcm9ncmFtU2Nyb2xsZWQgIT0gdHJ1ZSkge1xuXHRcdFx0XHRcdHRoaXMuY3V0U3BhY2VBbGxvd0NoZWNrVGltZU91dFZhcmlhYmxlID0gc2V0VGltZW91dChcblx0XHRcdFx0XHRcdHRoaXMuY3V0U3BhY2VBbGxvd0NoZWNrVGltZU91dC5iaW5kKFxuXHRcdFx0XHRcdFx0XHR0aGlzLFxuXHRcdFx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLmFkZFBvc2l0aW9uWCxcblx0XHRcdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5hZGRQb3NpdGlvblksXG5cdFx0XHRcdFx0XHRcdG5ld1dpZHRoLFxuXHRcdFx0XHRcdFx0XHRuZXdIZWlnaHRcblx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHR0aGlzLkRFTU9fV0FJVF9USU1FXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMubGltYmVyR3JpZFRvdWNoU3RhcnRDaGVja1RpbWVPdXRWYXJpYWJsZSk7XG5cdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5yZW1vdmVFdmVudExpc3RlbmVyKFxuXHRcdFx0XHRcInRvdWNobW92ZVwiLFxuXHRcdFx0XHR0aGlzLm9uTGltYmVyR3JpZFRvdWNoTW92ZUJpbmRlZEZ1bmN0aW9uVmFyaWFibGVcblx0XHRcdCk7XG5cdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuXHRcdFx0XHRcInRvdWNoZW5kXCIsXG5cdFx0XHRcdHRoaXMub25MaW1iZXJHcmlkVG91Y2hFbmRCaW5kZWRGdW5jdGlvblZhcmlhYmxlXG5cdFx0XHQpO1xuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0XHRcdFx0XCJ0b3VjaGNhbmNlbFwiLFxuXHRcdFx0XHR0aGlzLm9uTGltYmVyR3JpZFRvdWNoQ2FuY2VsQmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHRcdFx0KTtcblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcdFwiY29udGV4dG1lbnVcIixcblx0XHRcdFx0dGhpcy5vbkxpbWJlckdyaWRUb3VjaENvbnRleHRNZW51QmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHRcdFx0KTtcblx0XHRcdHRoaXMuaW5pdGlhbGl6ZUl0ZW1Ub3VjaEV2ZW50cygpO1xuXHRcdH1cblxuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHR9O1xuXG5cdExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5vbkxpbWJlckdyaWRNb3VzZVVwID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRjbGVhclRpbWVvdXQodGhpcy5hZGRJdGVtQWxsb3dDaGVja1RpbWVPdXRWYXJpYWJsZSk7XG5cdFx0Y2xlYXJUaW1lb3V0KHRoaXMubGltYmVyR3JpZE1vdXNlRG93bkNoZWNrVGltZU91dFZhcmlhYmxlKTtcblx0XHR2YXIgaXRlbUFkZGVkRmxhZyA9IGZhbHNlO1xuXHRcdGlmICh0aGlzLmxpbWJlckdyaWRNb3VzZURvd25UaW1lckNvbXBsZXRlID09IHRydWUpIHtcblx0XHRcdGlmICh0aGlzLkFERF9PUl9DVVRTUEFDRV9UT0dHTEUgPT0gXCJBRERcIikge1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0dGhpcy5hZGRJdGVtQWxsb3dDaGVjayhcblx0XHRcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuYWRkUG9zaXRpb25YLFxuXHRcdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5hZGRQb3NpdGlvblksXG5cdFx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLm5ld1dpZHRoLFxuXHRcdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5uZXdIZWlnaHRcblx0XHRcdFx0XHQpXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHZhciBpdGVtID0ge1xuXHRcdFx0XHRcdFx0eDogdGhpcy51c2VyQWN0aW9uRGF0YS5hZGRQb3NpdGlvblgsXG5cdFx0XHRcdFx0XHR5OiB0aGlzLnVzZXJBY3Rpb25EYXRhLmFkZFBvc2l0aW9uWSxcblx0XHRcdFx0XHRcdHdpZHRoOiB0aGlzLnVzZXJBY3Rpb25EYXRhLm5ld1dpZHRoLFxuXHRcdFx0XHRcdFx0aGVpZ2h0OiB0aGlzLnVzZXJBY3Rpb25EYXRhLm5ld0hlaWdodFxuXHRcdFx0XHRcdH07XG5cblx0XHRcdFx0XHR2YXIgc2Nyb2xsVG9wID0gdGhpcy4kbGltYmVyR3JpZFZpZXdbMF0uc2Nyb2xsVG9wO1xuXG5cdFx0XHRcdFx0dmFyIHJlbmRlckRldGFpbHMgPSB0aGlzLmFkZEl0ZW1zQXRQb3NpdGlvbnMoXG5cdFx0XHRcdFx0XHRbaXRlbV0sXG5cdFx0XHRcdFx0XHRmYWxzZSxcblx0XHRcdFx0XHRcdFwiYWRkSXRlbUludGVyYWN0aXZlXCJcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGl0ZW1BZGRlZEZsYWcgPSB0cnVlO1xuXG5cdFx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdbMF0uc2Nyb2xsVG9wID0gc2Nyb2xsVG9wO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMuQUREX09SX0NVVFNQQUNFX1RPR0dMRSA9PSBcIkNVVFNQQUNFXCIpIHtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdHRoaXMuY3V0U3BhY2VBbGxvd0NoZWNrKFxuXHRcdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5hZGRQb3NpdGlvblgsXG5cdFx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLmFkZFBvc2l0aW9uWSxcblx0XHRcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEubmV3V2lkdGgsXG5cdFx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLm5ld0hlaWdodFxuXHRcdFx0XHRcdClcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0dGhpcy5zaGlmdEl0ZW1zVXAoXG5cdFx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLmFkZFBvc2l0aW9uWSxcblx0XHRcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEubmV3SGVpZ2h0XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmxpbWJlckdyaWRNb3VzZURvd25DYW5jZWwgPSB0cnVlO1xuXHRcdH1cblx0XHR0aGlzLm9uTGltYmVyR3JpZENvbnRleHRNZW51KCk7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRpZiAoXG5cdFx0XHR0aGlzLmNhbGxiYWNrcy5hZGRDb21wbGV0ZUNhbGxiYWNrICE9IHVuZGVmaW5lZCAmJlxuXHRcdFx0dGhpcy5jYWxsYmFja3MuYWRkQ29tcGxldGVDYWxsYmFjayAhPSBudWxsXG5cdFx0KSB7XG5cdFx0XHRpZiAoaXRlbUFkZGVkRmxhZyA9PSB0cnVlKSB7XG5cdFx0XHRcdHRoaXMuY2FsbGJhY2tzLmFkZENvbXBsZXRlQ2FsbGJhY2soXG5cdFx0XHRcdFx0cmVuZGVyRGV0YWlscy5pdGVtcyxcblx0XHRcdFx0XHRpdGVtLndpZHRoLFxuXHRcdFx0XHRcdGl0ZW0uaGVpZ2h0LFxuXHRcdFx0XHRcdFwiYWRkSXRlbUludGVyYWN0aXZlXCJcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0TGltYmVyR3JpZFZpZXcucHJvdG90eXBlLm9uTGltYmVyR3JpZFRvdWNoRW5kID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRjbGVhclRpbWVvdXQodGhpcy5hZGRJdGVtQWxsb3dDaGVja1RpbWVPdXRWYXJpYWJsZSk7XG5cdFx0Y2xlYXJUaW1lb3V0KHRoaXMubGltYmVyR3JpZFRvdWNoU3RhcnRDaGVja1RpbWVPdXRWYXJpYWJsZSk7XG5cdFx0dmFyIGl0ZW1BZGRlZEZsYWcgPSBmYWxzZTtcblx0XHRpZiAodGhpcy5saW1iZXJHcmlkVG91Y2hTdGFydFRpbWVyQ29tcGxldGUgPT0gdHJ1ZSkge1xuXHRcdFx0aWYgKHRoaXMuQUREX09SX0NVVFNQQUNFX1RPR0dMRSA9PSBcIkFERFwiKSB7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHR0aGlzLmFkZEl0ZW1BbGxvd0NoZWNrKFxuXHRcdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5hZGRQb3NpdGlvblgsXG5cdFx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLmFkZFBvc2l0aW9uWSxcblx0XHRcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEubmV3V2lkdGgsXG5cdFx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLm5ld0hlaWdodFxuXHRcdFx0XHRcdClcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0dmFyIGl0ZW0gPSB7XG5cdFx0XHRcdFx0XHR4OiB0aGlzLnVzZXJBY3Rpb25EYXRhLmFkZFBvc2l0aW9uWCxcblx0XHRcdFx0XHRcdHk6IHRoaXMudXNlckFjdGlvbkRhdGEuYWRkUG9zaXRpb25ZLFxuXHRcdFx0XHRcdFx0d2lkdGg6IHRoaXMudXNlckFjdGlvbkRhdGEubmV3V2lkdGgsXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IHRoaXMudXNlckFjdGlvbkRhdGEubmV3SGVpZ2h0XG5cdFx0XHRcdFx0fTtcblxuXHRcdFx0XHRcdHZhciBzY3JvbGxUb3AgPSB0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5zY3JvbGxUb3A7XG5cblx0XHRcdFx0XHR2YXIgcmVuZGVyRGV0YWlscyA9IHRoaXMuYWRkSXRlbXNBdFBvc2l0aW9ucyhcblx0XHRcdFx0XHRcdFtpdGVtXSxcblx0XHRcdFx0XHRcdGZhbHNlLFxuXHRcdFx0XHRcdFx0XCJhZGRJdGVtSW50ZXJhY3RpdmVcIlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0aXRlbUFkZGVkRmxhZyA9IHRydWU7XG5cblx0XHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5zY3JvbGxUb3AgPSBzY3JvbGxUb3A7XG5cblx0XHRcdFx0XHR0aGlzLmxpbWJlckdyaWRUb3VjaFN0YXJ0VGltZXJDb21wbGV0ZSA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMuQUREX09SX0NVVFNQQUNFX1RPR0dMRSA9PSBcIkNVVFNQQUNFXCIpIHtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdHRoaXMuY3V0U3BhY2VBbGxvd0NoZWNrKFxuXHRcdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5hZGRQb3NpdGlvblgsXG5cdFx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLmFkZFBvc2l0aW9uWSxcblx0XHRcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEubmV3V2lkdGgsXG5cdFx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLm5ld0hlaWdodFxuXHRcdFx0XHRcdClcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0dGhpcy5zaGlmdEl0ZW1zVXAoXG5cdFx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLmFkZFBvc2l0aW9uWSxcblx0XHRcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEubmV3SGVpZ2h0XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmxpbWJlckdyaWRUb3VjaFN0YXJ0Q2FuY2VsID0gdHJ1ZTtcblx0XHR9XG5cdFx0dGhpcy5saW1iZXJHcmlkVG91Y2hTdGFydFRpbWVyQ29tcGxldGUgPSBmYWxzZTtcblx0XHR0aGlzLm9uTGltYmVyR3JpZENvbnRleHRNZW51KCk7XG5cdFx0dGhpcy5pbml0aWFsaXplSXRlbVRvdWNoRXZlbnRzKCk7XG5cblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdGlmIChcblx0XHRcdHRoaXMuY2FsbGJhY2tzLmFkZENvbXBsZXRlQ2FsbGJhY2sgIT0gdW5kZWZpbmVkICYmXG5cdFx0XHR0aGlzLmNhbGxiYWNrcy5hZGRDb21wbGV0ZUNhbGxiYWNrICE9IG51bGxcblx0XHQpIHtcblx0XHRcdGlmIChpdGVtQWRkZWRGbGFnID09IHRydWUpIHtcblx0XHRcdFx0dGhpcy5jYWxsYmFja3MuYWRkQ29tcGxldGVDYWxsYmFjayhcblx0XHRcdFx0XHRyZW5kZXJEZXRhaWxzLml0ZW1zLFxuXHRcdFx0XHRcdGl0ZW0ud2lkdGgsXG5cdFx0XHRcdFx0aXRlbS5oZWlnaHQsXG5cdFx0XHRcdFx0XCJhZGRJdGVtSW50ZXJhY3RpdmVcIlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHRMaW1iZXJHcmlkVmlldy5wcm90b3R5cGUub25MaW1iZXJHcmlkVG91Y2hDYW5jZWwgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdGNsZWFyVGltZW91dCh0aGlzLmFkZEl0ZW1BbGxvd0NoZWNrVGltZU91dFZhcmlhYmxlKTtcblx0XHRjbGVhclRpbWVvdXQodGhpcy5saW1iZXJHcmlkVG91Y2hTdGFydENoZWNrVGltZU91dFZhcmlhYmxlKTtcblx0XHR0aGlzLmxpbWJlckdyaWRUb3VjaFN0YXJ0Q2FuY2VsID0gZmFsc2U7XG5cdFx0dGhpcy5saW1iZXJHcmlkVG91Y2hTdGFydFRpbWVyQ29tcGxldGUgPSBmYWxzZTtcblx0XHR0aGlzLm9uTGltYmVyR3JpZENvbnRleHRNZW51KCk7XG5cdFx0dGhpcy5pbml0aWFsaXplSXRlbVRvdWNoRXZlbnRzKCk7XG5cblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0fTtcblxuXHRMaW1iZXJHcmlkVmlldy5wcm90b3R5cGUub25MaW1iZXJHcmlkVG91Y2hDb250ZXh0TWVudSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0fTtcblxuXHRMaW1iZXJHcmlkVmlldy5wcm90b3R5cGUub25MaW1iZXJHcmlkQ29udGV4dE1lbnUgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdGlmIChldmVudCAhPSB1bmRlZmluZWQpIHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR9XG5cblx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0FkZEl0ZW1HdWlkZVswXS5jbGFzc0xpc3QucmVtb3ZlKFxuXHRcdFx0XCJsaW1iZXJHcmlkVmlld0FkZEl0ZW1HdWlkZUFjdGl2ZVwiLFxuXHRcdFx0XCJsaW1iZXJHcmlkVmlld0FkZEl0ZW1HdWlkZUN1dE1vZGVcIixcblx0XHRcdFwibGltYmVyR3JpZFZpZXdBZGRJdGVtR3VpZGVBZGRBbGxvd1wiLFxuXHRcdFx0XCJsaW1iZXJHcmlkVmlld0FkZEl0ZW1HdWlkZUFkZERpc2FsbG93XCJcblx0XHQpO1xuXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3SGVpZ2h0QWRqdXN0R3VpZGVbMF0uY2xhc3NMaXN0LnJlbW92ZShcblx0XHRcdFwibGltYmVyR3JpZFZpZXdIZWlnaHRBZGp1c3RHdWlkZUFjdGl2ZVwiXG5cdFx0KTtcblx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0hlaWdodEFkanVzdEd1aWRlWzBdLnN0eWxlLmhlaWdodCA9IDAgKyBcInB4XCI7XG5cblx0XHR0aGlzLiRib2R5WzBdLmNsYXNzTGlzdC5yZW1vdmUoXG5cdFx0XHRcImxpbWJlckdyaWRWaWV3Qm9keVRhZ1N0YXRlRWxlbWVudERyYWdnaW5nT3JSZXNpemluZ1wiLFxuXHRcdFx0XCJsaW1iZXJHcmlkVmlld0JvZHlUYWdTdGF0ZUVsZW1lbnRBZGRpbmdcIlxuXHRcdCk7XG5cdFx0dmFyIGxlbmd0aF8wID0gdGhpcy4kbGltYmVyR3JpZFZpZXdJdGVtcy5sZW5ndGg7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0l0ZW1zW2ldLmNsYXNzTGlzdC5yZW1vdmUoXG5cdFx0XHRcdFwibGltYmVyR3JpZFZpZXdJdGVtUmVzaXppbmdTdGF0ZVwiXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdHZhciBsZW5ndGhfMCA9IHRoaXMuJGxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1zLmxlbmd0aDtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF8wOyBpKyspIHtcblx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1zW2ldLmNsYXNzTGlzdC5yZW1vdmUoXG5cdFx0XHRcdFwibGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbVJlc2l6aW5nU3RhdGVcIlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0FkZEl0ZW1PblRvdWNoSG9sZEd1aWRlWzBdLmNsYXNzTGlzdC5yZW1vdmUoXG5cdFx0XHRcImxpbWJlckdyaWRWaWV3QWRkSXRlbU9uVG91Y2hIb2xkR3VpZGVBY3RpdmVcIlxuXHRcdCk7XG5cblx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5yZW1vdmVFdmVudExpc3RlbmVyKFxuXHRcdFx0XCJtb3VzZW1vdmVcIixcblx0XHRcdHRoaXMub25MaW1iZXJHcmlkTW91c2VNb3ZlQmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHRcdCk7XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0XHRcdFwibW91c2V1cFwiLFxuXHRcdFx0dGhpcy5vbkxpbWJlckdyaWRNb3VzZVVwQmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHRcdCk7XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0XHRcdFwiY29udGV4dG1lbnVcIixcblx0XHRcdHRoaXMub25MaW1iZXJHcmlkQ29udGV4dE1lbnVCaW5kZWRGdW5jdGlvblZhcmlhYmxlXG5cdFx0KTtcblxuXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcInRvdWNobW92ZVwiLFxuXHRcdFx0dGhpcy5vbkxpbWJlckdyaWRUb3VjaE1vdmVCaW5kZWRGdW5jdGlvblZhcmlhYmxlXG5cdFx0KTtcblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuXHRcdFx0XCJ0b3VjaGVuZFwiLFxuXHRcdFx0dGhpcy5vbkxpbWJlckdyaWRUb3VjaEVuZEJpbmRlZEZ1bmN0aW9uVmFyaWFibGVcblx0XHQpO1xuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcInRvdWNoY2FuY2VsXCIsXG5cdFx0XHR0aGlzLm9uTGltYmVyR3JpZFRvdWNoQ2FuY2VsQmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHRcdCk7XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0XHRcdFwiY29udGV4dG1lbnVcIixcblx0XHRcdHRoaXMub25MaW1iZXJHcmlkVG91Y2hDb250ZXh0TWVudUJpbmRlZEZ1bmN0aW9uVmFyaWFibGVcblx0XHQpO1xuXHR9O1xuXG5cdExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5hZGRJdGVtQWxsb3dDaGVja1RpbWVPdXQgPSBmdW5jdGlvbihcblx0XHR4LFxuXHRcdHksXG5cdFx0d2lkdGgsXG5cdFx0aGVpZ2h0XG5cdCkge1xuXHRcdGlmICh0aGlzLmFkZEl0ZW1BbGxvd0NoZWNrKHgsIHksIHdpZHRoLCBoZWlnaHQpID09IGZhbHNlKSB7XG5cdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0FkZEl0ZW1HdWlkZVswXS5jbGFzc0xpc3QucmVtb3ZlKFxuXHRcdFx0XHRcImxpbWJlckdyaWRWaWV3QWRkSXRlbUd1aWRlQWRkQWxsb3dcIlxuXHRcdFx0KTtcblx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3QWRkSXRlbUd1aWRlWzBdLmNsYXNzTGlzdC5hZGQoXG5cdFx0XHRcdFwibGltYmVyR3JpZFZpZXdBZGRJdGVtR3VpZGVBZGREaXNhbGxvd1wiXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0FkZEl0ZW1HdWlkZVswXS5jbGFzc0xpc3QucmVtb3ZlKFxuXHRcdFx0XHRcImxpbWJlckdyaWRWaWV3QWRkSXRlbUd1aWRlQWRkRGlzYWxsb3dcIlxuXHRcdFx0KTtcblx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3QWRkSXRlbUd1aWRlWzBdLmNsYXNzTGlzdC5hZGQoXG5cdFx0XHRcdFwibGltYmVyR3JpZFZpZXdBZGRJdGVtR3VpZGVBZGRBbGxvd1wiXG5cdFx0XHQpO1xuXHRcdH1cblx0fTtcblxuXHRMaW1iZXJHcmlkVmlldy5wcm90b3R5cGUuYWRkSXRlbUFsbG93Q2hlY2sgPSBmdW5jdGlvbih4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG5cdFx0dmFyIHRlbXBQbGFuZSA9IHtcblx0XHRcdHg6IHgsXG5cdFx0XHR5OiB5LFxuXHRcdFx0d2lkdGg6IHdpZHRoLFxuXHRcdFx0aGVpZ2h0OiBoZWlnaHRcblx0XHR9O1xuXG5cdFx0aWYgKHggPCAwIHx8IHkgPCAwKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKHR5cGVvZiB3aWR0aCAhPSBcIm51bWJlclwiIHx8IHR5cGVvZiBoZWlnaHQgIT0gXCJudW1iZXJcIikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmICh4ICsgd2lkdGggPiB0aGlzLldJRFRIKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKHdpZHRoIDwgNTAgfHwgaGVpZ2h0IDwgNTApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHR2YXIgbGVuZ3RoXzAgPSB0aGlzLnBvc2l0aW9uRGF0YS5sZW5ndGg7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlckl0ZW0gPSB7XG5cdFx0XHRcdHg6XG5cdFx0XHRcdFx0dGhpcy5wb3NpdGlvbkRhdGFbaV0ueCAtXG5cdFx0XHRcdFx0dGhpcy5nZXRNYXJnaW5BdFBvaW50KHRoaXMucG9zaXRpb25EYXRhW2ldLngpLFxuXHRcdFx0XHR5OlxuXHRcdFx0XHRcdHRoaXMucG9zaXRpb25EYXRhW2ldLnkgLVxuXHRcdFx0XHRcdHRoaXMuZ2V0TWFyZ2luQXRQb2ludCh0aGlzLnBvc2l0aW9uRGF0YVtpXS55KSxcblx0XHRcdFx0d2lkdGg6XG5cdFx0XHRcdFx0dGhpcy5wb3NpdGlvbkRhdGFbaV0ud2lkdGggK1xuXHRcdFx0XHRcdHRoaXMuZ2V0TWFyZ2luQXRQb2ludCh0aGlzLnBvc2l0aW9uRGF0YVtpXS54KSArXG5cdFx0XHRcdFx0dGhpcy5NQVJHSU4sXG5cdFx0XHRcdGhlaWdodDpcblx0XHRcdFx0XHR0aGlzLnBvc2l0aW9uRGF0YVtpXS5oZWlnaHQgK1xuXHRcdFx0XHRcdHRoaXMuZ2V0TWFyZ2luQXRQb2ludCh0aGlzLnBvc2l0aW9uRGF0YVtpXS55KSArXG5cdFx0XHRcdFx0dGhpcy5NQVJHSU5cblx0XHRcdH07XG5cdFx0XHR2YXIgaXNJbnNpZGUgPSB0aGlzLmlzUGxhbmVCSW5zaWRlUGxhbmVBX1RvdWNoaW5nSXNJbnNpZGUoXG5cdFx0XHRcdGl0ZXJJdGVtLFxuXHRcdFx0XHR0ZW1wUGxhbmVcblx0XHRcdCk7XG5cblx0XHRcdGlmIChpc0luc2lkZSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9O1xuXG5cdExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5jdXRTcGFjZUFsbG93Q2hlY2tUaW1lT3V0ID0gZnVuY3Rpb24oXG5cdFx0eCxcblx0XHR5LFxuXHRcdHdpZHRoLFxuXHRcdGhlaWdodFxuXHQpIHtcblx0XHRpZiAodGhpcy5jdXRTcGFjZUFsbG93Q2hlY2soeCwgeSwgd2lkdGgsIGhlaWdodCkgPT0gZmFsc2UpIHtcblx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3QWRkSXRlbUd1aWRlWzBdLmNsYXNzTGlzdC5yZW1vdmUoXG5cdFx0XHRcdFwibGltYmVyR3JpZFZpZXdBZGRJdGVtR3VpZGVBZGRBbGxvd1wiXG5cdFx0XHQpO1xuXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdBZGRJdGVtR3VpZGVbMF0uY2xhc3NMaXN0LmFkZChcblx0XHRcdFx0XCJsaW1iZXJHcmlkVmlld0FkZEl0ZW1HdWlkZUFkZERpc2FsbG93XCJcblx0XHRcdCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3QWRkSXRlbUd1aWRlWzBdLmNsYXNzTGlzdC5yZW1vdmUoXG5cdFx0XHRcdFwibGltYmVyR3JpZFZpZXdBZGRJdGVtR3VpZGVBZGREaXNhbGxvd1wiXG5cdFx0XHQpO1xuXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdBZGRJdGVtR3VpZGVbMF0uY2xhc3NMaXN0LmFkZChcblx0XHRcdFx0XCJsaW1iZXJHcmlkVmlld0FkZEl0ZW1HdWlkZUFkZEFsbG93XCJcblx0XHRcdCk7XG5cdFx0fVxuXHR9O1xuXG5cdExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5jdXRTcGFjZUFsbG93Q2hlY2sgPSBmdW5jdGlvbihcblx0XHR4LFxuXHRcdHksXG5cdFx0d2lkdGgsXG5cdFx0aGVpZ2h0XG5cdCkge1xuXHRcdHZhciB0ZW1wUGxhbmUgPSB7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogeSAtIHRoaXMuTUFSR0lOIC8gMixcblx0XHRcdHdpZHRoOiB0aGlzLldJRFRILFxuXHRcdFx0aGVpZ2h0OiBoZWlnaHQgKyB0aGlzLk1BUkdJTiAvIDJcblx0XHR9O1xuXG5cdFx0aWYgKHR5cGVvZiB3aWR0aCAhPSBcIm51bWJlclwiIHx8IHR5cGVvZiBoZWlnaHQgIT0gXCJudW1iZXJcIikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHZhciBsZW5ndGhfMCA9IHRoaXMucG9zaXRpb25EYXRhLmxlbmd0aDtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF8wOyBpKyspIHtcblx0XHRcdHZhciBpc0luc2lkZSA9IHRoaXMuaXNQbGFuZUJJbnNpZGVQbGFuZUFfVG91Y2hpbmdJc0luc2lkZShcblx0XHRcdFx0dGVtcFBsYW5lLFxuXHRcdFx0XHR0aGlzLnBvc2l0aW9uRGF0YVtpXVxuXHRcdFx0KTtcblxuXHRcdFx0aWYgKGlzSW5zaWRlKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH07XG5cblx0TGltYmVyR3JpZFZpZXcucHJvdG90eXBlLmluc2VydEFkZEl0ZW1PblRvdWNoSG9sZEd1aWRlU3R5bGVzID0gZnVuY3Rpb24oXG5cdFx0eCxcblx0XHR5XG5cdCkge1xuXHRcdHZhciByaXBwbGUgPSBbXTtcblx0XHRyaXBwbGVbMF0gPSBcIkBrZXlmcmFtZXMgbGltYmVyR3JpZFZpZXdBZGRJdGVtT25Ub3VjaEhvbGRSaXBwbGUge1wiO1xuXHRcdHJpcHBsZVsxXSA9IFwiMCUge1wiO1xuXHRcdHJpcHBsZVsyXSA9XG5cdFx0XHRcInRyYW5zZm9ybTogdHJhbnNsYXRlKFwiICtcblx0XHRcdCh4IC0gNSkgK1xuXHRcdFx0XCJweCwgXCIgK1xuXHRcdFx0KHkgLSA1KSArXG5cdFx0XHRcInB4KSBzY2FsZSgwLCAwKTtcIjtcblx0XHRyaXBwbGVbM10gPSBcIm9wYWNpdHk6IDE7XCI7XG5cdFx0cmlwcGxlWzRdID0gXCJ9XCI7XG5cdFx0cmlwcGxlWzVdID0gXCIyMCUge1wiO1xuXHRcdHJpcHBsZVs2XSA9XG5cdFx0XHRcInRyYW5zZm9ybTogdHJhbnNsYXRlKFwiICtcblx0XHRcdCh4IC0gNSkgK1xuXHRcdFx0XCJweCwgXCIgK1xuXHRcdFx0KHkgLSA1KSArXG5cdFx0XHRcInB4KSBzY2FsZSgyNSwgMjUpO1wiO1xuXHRcdHJpcHBsZVs3XSA9IFwib3BhY2l0eTogMTtcIjtcblx0XHRyaXBwbGVbOF0gPSBcIn1cIjtcblx0XHRyaXBwbGVbOV0gPSBcIjEwMCUge1wiO1xuXHRcdHJpcHBsZVsxMF0gPVxuXHRcdFx0XCJ0cmFuc2Zvcm06IHRyYW5zbGF0ZShcIiArXG5cdFx0XHQoeCAtIDUpICtcblx0XHRcdFwicHgsIFwiICtcblx0XHRcdCh5IC0gNSkgK1xuXHRcdFx0XCJweCkgc2NhbGUoNTAsIDUwKTtcIjtcblx0XHRyaXBwbGVbMTFdID0gXCJvcGFjaXR5OiAwO1wiO1xuXHRcdHJpcHBsZVsxMl0gPSBcIn1cIjtcblx0XHRyaXBwbGVbMTNdID0gXCJ9XCI7XG5cdFx0dmFyIHJpcHBsZVN0cmluZyA9IHJpcHBsZS5qb2luKFwiXCIpO1xuXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3U3R5bGVbMF0uaW5uZXJIVE1MID0gcmlwcGxlU3RyaW5nO1xuXHR9O1xuXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLSBFVkVOVCBIQU5ETEVSUyBGT1IgQURESU5HIEFORCBDVVRUSU5HIFNQQUNFIElURU0gRU5EIC0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEVWRU5UIEhBTkRMRVJTIEFORCBDT0RFIEZPUiBJVEVNIElOVEVSQUNUSU9OIC0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5cdExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5vbkl0ZW1Nb3VzZURvd24gPSBmdW5jdGlvbihldmVudCkge1xuXHRcdGlmIChldmVudC53aGljaCAhPSAxKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJsaW1iZXJHcmlkVmlld0l0ZW1cIikpIHtcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dmFyIHJhZGl1cyA9IE1hdGguc3FydChcblx0XHRcdE1hdGgucG93KDAgLSBldmVudC5vZmZzZXRYLCAyKSArIE1hdGgucG93KDAgLSBldmVudC5vZmZzZXRZLCAyKVxuXHRcdCk7XG5cdFx0dmFyIHJlc2l6ZVVJQm94ID0ge1xuXHRcdFx0eDpcblx0XHRcdFx0ZXZlbnQuY3VycmVudFRhcmdldC5vZmZzZXRXaWR0aCAtXG5cdFx0XHRcdHRoaXMuUkVTSVpFX1NRVUFSRV9HVUlERV9MRU5HVEgsXG5cdFx0XHR5OlxuXHRcdFx0XHRldmVudC5jdXJyZW50VGFyZ2V0Lm9mZnNldEhlaWdodCAtXG5cdFx0XHRcdHRoaXMuUkVTSVpFX1NRVUFSRV9HVUlERV9MRU5HVEgsXG5cdFx0XHR3aWR0aDpcblx0XHRcdFx0dGhpcy5SRVNJWkVfU1FVQVJFX0dVSURFX0xFTkdUSCArXG5cdFx0XHRcdHRoaXMuUkVTSVpFX1NRVUFSRV9CT1JERVJfR1VJREVfV0lEVEgsXG5cdFx0XHRoZWlnaHQ6XG5cdFx0XHRcdHRoaXMuUkVTSVpFX1NRVUFSRV9HVUlERV9MRU5HVEggK1xuXHRcdFx0XHR0aGlzLlJFU0laRV9TUVVBUkVfQk9SREVSX0dVSURFX1dJRFRIXG5cdFx0fTtcblxuXHRcdGlmIChyYWRpdXMgPD0gdGhpcy5NT1ZFX0dVSURFX1JBRElVUykge1xuXHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YSA9IHtcblx0XHRcdFx0dHlwZTogXCJtb3ZlXCIsXG5cdFx0XHRcdGl0ZW1JbmRleDogZXZlbnQuY3VycmVudFRhcmdldC5hdHRyaWJ1dGVzW1wiZGF0YS1pbmRleFwiXS52YWx1ZVxuXHRcdFx0fTtcblx0XHRcdHRoaXMubW91c2VEb3duQ2FuY2VsID0gZmFsc2U7XG5cdFx0XHR0aGlzLm1vdXNlRG93blRpbWVyQ29tcGxldGUgPSBmYWxzZTtcblxuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdFx0XCJtb3VzZW1vdmVcIixcblx0XHRcdFx0dGhpcy5vbk1vdXNlTW92ZUJpbmRlZEZ1bmN0aW9uVmFyaWFibGVcblx0XHRcdCk7XG5cdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFx0XHRcIm1vdXNldXBcIixcblx0XHRcdFx0dGhpcy5vbk1vdXNlVXBCaW5kZWRGdW5jdGlvblZhcmlhYmxlXG5cdFx0XHQpO1xuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdFx0XCJjb250ZXh0bWVudVwiLFxuXHRcdFx0XHR0aGlzLm9uQ29udGV4dE1lbnVCaW5kZWRGdW5jdGlvblZhcmlhYmxlXG5cdFx0XHQpO1xuXHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMubG9uZ1ByZXNzQ2hlY2spO1xuXHRcdFx0dGhpcy5sb25nUHJlc3NDaGVjayA9IHNldFRpbWVvdXQoXG5cdFx0XHRcdHRoaXMubW91c2VEb3duQ2hlY2suYmluZCh0aGlzLCBldmVudCksXG5cdFx0XHRcdHRoaXMuTU9VU0VfRE9XTl9USU1FXG5cdFx0XHQpO1xuXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdH0gZWxzZSBpZiAoXG5cdFx0XHRldmVudC5vZmZzZXRYID49IHJlc2l6ZVVJQm94LnggJiZcblx0XHRcdGV2ZW50Lm9mZnNldFggPD0gcmVzaXplVUlCb3gueCArIHJlc2l6ZVVJQm94LndpZHRoICYmXG5cdFx0XHRldmVudC5vZmZzZXRZID49IHJlc2l6ZVVJQm94LnkgJiZcblx0XHRcdGV2ZW50Lm9mZnNldFkgPD0gcmVzaXplVUlCb3gueSArIHJlc2l6ZVVJQm94LmhlaWdodFxuXHRcdCkge1xuXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdIZWlnaHRBZGp1c3RHdWlkZVswXS5zdHlsZS5oZWlnaHQgPSAwICsgXCJweFwiO1xuXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdIZWlnaHRBZGp1c3RHdWlkZVswXS5jbGFzc0xpc3QuYWRkKFxuXHRcdFx0XHRcImxpbWJlckdyaWRWaWV3SGVpZ2h0QWRqdXN0R3VpZGVBY3RpdmVcIlxuXHRcdFx0KTtcblxuXHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YSA9IHtcblx0XHRcdFx0dHlwZTogXCJyZXNpemVcIixcblx0XHRcdFx0aXRlbUluZGV4OiBldmVudC5jdXJyZW50VGFyZ2V0LmF0dHJpYnV0ZXNbXCJkYXRhLWluZGV4XCJdLnZhbHVlXG5cdFx0XHR9O1xuXHRcdFx0dGhpcy5tb3VzZURvd25DYW5jZWwgPSBmYWxzZTtcblx0XHRcdHRoaXMubW91c2VEb3duVGltZXJDb21wbGV0ZSA9IHRydWU7XG5cblx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcdFwibW91c2Vtb3ZlXCIsXG5cdFx0XHRcdHRoaXMub25Nb3VzZU1vdmVCaW5kZWRGdW5jdGlvblZhcmlhYmxlXG5cdFx0XHQpO1xuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdFx0XCJtb3VzZXVwXCIsXG5cdFx0XHRcdHRoaXMub25Nb3VzZVVwQmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHRcdFx0KTtcblx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcdFwiY29udGV4dG1lbnVcIixcblx0XHRcdFx0dGhpcy5vbkNvbnRleHRNZW51QmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHRcdFx0KTtcblxuXHRcdFx0dmFyIHRyYW5zZm9ybVN0eWxlID0gdGhpcy4kbGltYmVyR3JpZFZpZXdJdGVtc1tcblx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhcblx0XHRcdF0uc3R5bGUudHJhbnNmb3JtO1xuXHRcdFx0dmFyIGkxID0gdHJhbnNmb3JtU3R5bGUuaW5kZXhPZihcInB4XCIpO1xuXHRcdFx0dmFyIGkyID0gdHJhbnNmb3JtU3R5bGUuaW5kZXhPZihcIixcIik7XG5cdFx0XHR2YXIgeCA9IE51bWJlcih0cmFuc2Zvcm1TdHlsZS5zdWJzdHJpbmcoMTAsIGkxKSk7XG5cdFx0XHR2YXIgeSA9IE51bWJlcihcblx0XHRcdFx0dHJhbnNmb3JtU3R5bGUuc3Vic3RyaW5nKGkyICsgMiwgdHJhbnNmb3JtU3R5bGUubGVuZ3RoIC0gMylcblx0XHRcdCk7XG5cblx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbVBvc2l0aW9uWCA9IHg7XG5cdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1Qb3NpdGlvblkgPSB5O1xuXG5cdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtc1tcblx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhcblx0XHRcdF0uc3R5bGUud2lkdGggPVxuXHRcdFx0XHR0aGlzLnBvc2l0aW9uRGF0YVt0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleF0ud2lkdGggKyBcInB4XCI7XG5cdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtc1tcblx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhcblx0XHRcdF0uc3R5bGUuaGVpZ2h0ID1cblx0XHRcdFx0dGhpcy5wb3NpdGlvbkRhdGFbdGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhdLmhlaWdodCArIFwicHhcIjtcblxuXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbXNbXG5cdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4XG5cdFx0XHRdLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlKFwiICsgeCArIFwicHgsIFwiICsgeSArIFwicHgpXCI7XG5cdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtc1tcblx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhcblx0XHRcdF0uY2xhc3NMaXN0LmFkZChcImxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1BY3RpdmVcIik7XG5cblx0XHRcdHRoaXMuJGJvZHlbMF0uY2xhc3NMaXN0LmFkZChcblx0XHRcdFx0XCJsaW1iZXJHcmlkVmlld0JvZHlUYWdTdGF0ZUVsZW1lbnREcmFnZ2luZ09yUmVzaXppbmdcIlxuXHRcdFx0KTtcblx0XHRcdHZhciBsZW5ndGhfMCA9IHRoaXMuJGxpbWJlckdyaWRWaWV3SXRlbXMubGVuZ3RoO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3SXRlbXNbaV0uY2xhc3NMaXN0LmFkZChcblx0XHRcdFx0XHRcImxpbWJlckdyaWRWaWV3SXRlbVJlc2l6aW5nU3RhdGVcIlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgbGVuZ3RoXzAgPSB0aGlzLiRsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtcy5sZW5ndGg7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF8wOyBpKyspIHtcblx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbXNbaV0uY2xhc3NMaXN0LmFkZChcblx0XHRcdFx0XHRcImxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1SZXNpemluZ1N0YXRlXCJcblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbXNbXG5cdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4XG5cdFx0XHRdLmNsYXNzTGlzdC5yZW1vdmUoXG5cdFx0XHRcdFwibGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbVJlc2l6ZUFsbG93XCIsXG5cdFx0XHRcdFwibGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbVJlc2l6ZURpc2FsbG93XCJcblx0XHRcdCk7XG5cblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fVxuXHR9O1xuXG5cdExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5vbkl0ZW1Ub3VjaFN0YXJ0ID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRpZiAoZXZlbnQud2hpY2ggIT0gMCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibGltYmVyR3JpZFZpZXdJdGVtXCIpKSB7XG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmIChldmVudC50b3VjaGVzLmxlbmd0aCA+IDEpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgdG91Y2hQb3NPbkxpbWJlckdyaWRJdGVtID0gdGhpcy5jYWxjdWxhdGVUb3VjaFBvc09uTGltYmVyR3JpZEl0ZW0oXG5cdFx0XHRldmVudFxuXHRcdCk7XG5cdFx0aWYgKHRvdWNoUG9zT25MaW1iZXJHcmlkSXRlbSA9PSBmYWxzZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR2YXIgcmFkaXVzID0gTWF0aC5zcXJ0KFxuXHRcdFx0TWF0aC5wb3coMCAtIHRvdWNoUG9zT25MaW1iZXJHcmlkSXRlbS54LCAyKSArXG5cdFx0XHRcdE1hdGgucG93KDAgLSB0b3VjaFBvc09uTGltYmVyR3JpZEl0ZW0ueSwgMilcblx0XHQpO1xuXHRcdHZhciByZXNpemVVSUJveCA9IHtcblx0XHRcdHg6XG5cdFx0XHRcdGV2ZW50LmN1cnJlbnRUYXJnZXQub2Zmc2V0V2lkdGggLVxuXHRcdFx0XHR0aGlzLlJFU0laRV9TUVVBUkVfR1VJREVfTEVOR1RILFxuXHRcdFx0eTpcblx0XHRcdFx0ZXZlbnQuY3VycmVudFRhcmdldC5vZmZzZXRIZWlnaHQgLVxuXHRcdFx0XHR0aGlzLlJFU0laRV9TUVVBUkVfR1VJREVfTEVOR1RILFxuXHRcdFx0d2lkdGg6XG5cdFx0XHRcdHRoaXMuUkVTSVpFX1NRVUFSRV9HVUlERV9MRU5HVEggK1xuXHRcdFx0XHR0aGlzLlJFU0laRV9TUVVBUkVfQk9SREVSX0dVSURFX1dJRFRILFxuXHRcdFx0aGVpZ2h0OlxuXHRcdFx0XHR0aGlzLlJFU0laRV9TUVVBUkVfR1VJREVfTEVOR1RIICtcblx0XHRcdFx0dGhpcy5SRVNJWkVfU1FVQVJFX0JPUkRFUl9HVUlERV9XSURUSFxuXHRcdH07XG5cblx0XHRpZiAocmFkaXVzIDw9IHRoaXMuTU9WRV9HVUlERV9SQURJVVMpIHtcblx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEgPSB7XG5cdFx0XHRcdHR5cGU6IFwibW92ZVwiLFxuXHRcdFx0XHRpdGVtSW5kZXg6IGV2ZW50LmN1cnJlbnRUYXJnZXQuYXR0cmlidXRlc1tcImRhdGEtaW5kZXhcIl0udmFsdWVcblx0XHRcdH07XG5cdFx0XHR0aGlzLnRhcEhvbGRDYW5jZWwgPSBmYWxzZTtcblx0XHRcdHRoaXMudGFwSG9sZFRpbWVyQ29tcGxldGUgPSBmYWxzZTtcblxuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdFx0XCJ0b3VjaG1vdmVcIixcblx0XHRcdFx0dGhpcy5vblRvdWNoTW92ZUJpbmRlZEZ1bmN0aW9uVmFyaWFibGVcblx0XHRcdCk7XG5cdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFx0XHRcInRvdWNoZW5kXCIsXG5cdFx0XHRcdHRoaXMub25Ub3VjaEVuZEJpbmRlZEZ1bmN0aW9uVmFyaWFibGVcblx0XHRcdCk7XG5cdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5yZW1vdmVFdmVudExpc3RlbmVyKFxuXHRcdFx0XHRcInRvdWNoc3RhcnRcIixcblx0XHRcdFx0dGhpcy5vbkxpbWJlckdyaWRUb3VjaFN0YXJ0RnVuY3Rpb25WYXJpYWJsZVxuXHRcdFx0KTtcblxuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdFx0XCJjb250ZXh0bWVudVwiLFxuXHRcdFx0XHR0aGlzLm9uSXRlbVRvdWNoQ29udGV4dE1lbnVCaW5kZWRGdW5jdGlvblZhcmlhYmxlXG5cdFx0XHQpO1xuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdFx0XCJ0b3VjaGNhbmNlbFwiLFxuXHRcdFx0XHR0aGlzLm9uVG91Y2hDYW5jZWxCaW5kZWRGdW5jdGlvblZhcmlhYmxlXG5cdFx0XHQpO1xuXG5cdFx0XHR0aGlzLmxvbmdUb3VjaENoZWNrID0gc2V0VGltZW91dChcblx0XHRcdFx0dGhpcy50YXBIb2xkQ2hlY2suYmluZCh0aGlzLCBldmVudCksXG5cdFx0XHRcdHRoaXMuVE9VQ0hfSE9MRF9USU1FXG5cdFx0XHQpO1xuXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdH0gZWxzZSBpZiAoXG5cdFx0XHR0b3VjaFBvc09uTGltYmVyR3JpZEl0ZW0ueCA+PSByZXNpemVVSUJveC54ICYmXG5cdFx0XHR0b3VjaFBvc09uTGltYmVyR3JpZEl0ZW0ueCA8PSByZXNpemVVSUJveC54ICsgcmVzaXplVUlCb3gud2lkdGggJiZcblx0XHRcdHRvdWNoUG9zT25MaW1iZXJHcmlkSXRlbS55ID49IHJlc2l6ZVVJQm94LnkgJiZcblx0XHRcdHRvdWNoUG9zT25MaW1iZXJHcmlkSXRlbS55IDw9IHJlc2l6ZVVJQm94LnkgKyByZXNpemVVSUJveC5oZWlnaHRcblx0XHQpIHtcblx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3SGVpZ2h0QWRqdXN0R3VpZGVbMF0uc3R5bGUuaGVpZ2h0ID0gMCArIFwicHhcIjtcblx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3SGVpZ2h0QWRqdXN0R3VpZGVbMF0uY2xhc3NMaXN0LmFkZChcblx0XHRcdFx0XCJsaW1iZXJHcmlkVmlld0hlaWdodEFkanVzdEd1aWRlQWN0aXZlXCJcblx0XHRcdCk7XG5cblx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEgPSB7XG5cdFx0XHRcdHR5cGU6IFwicmVzaXplXCIsXG5cdFx0XHRcdGl0ZW1JbmRleDogZXZlbnQuY3VycmVudFRhcmdldC5hdHRyaWJ1dGVzW1wiZGF0YS1pbmRleFwiXS52YWx1ZVxuXHRcdFx0fTtcblx0XHRcdHRoaXMudGFwSG9sZENhbmNlbCA9IGZhbHNlO1xuXHRcdFx0dGhpcy50YXBIb2xkVGltZXJDb21wbGV0ZSA9IHRydWU7XG5cblx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcdFwidG91Y2htb3ZlXCIsXG5cdFx0XHRcdHRoaXMub25Ub3VjaE1vdmVCaW5kZWRGdW5jdGlvblZhcmlhYmxlXG5cdFx0XHQpO1xuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdFx0XCJ0b3VjaGVuZFwiLFxuXHRcdFx0XHR0aGlzLm9uVG91Y2hFbmRCaW5kZWRGdW5jdGlvblZhcmlhYmxlXG5cdFx0XHQpO1xuXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdbMF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0XHRcdFx0XCJ0b3VjaHN0YXJ0XCIsXG5cdFx0XHRcdHRoaXMub25MaW1iZXJHcmlkVG91Y2hTdGFydEZ1bmN0aW9uVmFyaWFibGVcblx0XHRcdCk7XG5cblx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcdFwidG91Y2hjYW5jZWxcIixcblx0XHRcdFx0dGhpcy5vblRvdWNoQ2FuY2VsQmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHRcdFx0KTtcblxuXHRcdFx0dmFyIHRyYW5zZm9ybVN0eWxlID0gdGhpcy4kbGltYmVyR3JpZFZpZXdJdGVtc1tcblx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhcblx0XHRcdF0uc3R5bGUudHJhbnNmb3JtO1xuXHRcdFx0dmFyIGkxID0gdHJhbnNmb3JtU3R5bGUuaW5kZXhPZihcInB4XCIpO1xuXHRcdFx0dmFyIGkyID0gdHJhbnNmb3JtU3R5bGUuaW5kZXhPZihcIixcIik7XG5cdFx0XHR2YXIgeCA9IE51bWJlcih0cmFuc2Zvcm1TdHlsZS5zdWJzdHJpbmcoMTAsIGkxKSk7XG5cdFx0XHR2YXIgeSA9IE51bWJlcihcblx0XHRcdFx0dHJhbnNmb3JtU3R5bGUuc3Vic3RyaW5nKGkyICsgMiwgdHJhbnNmb3JtU3R5bGUubGVuZ3RoIC0gMylcblx0XHRcdCk7XG5cblx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbVBvc2l0aW9uWCA9IHg7XG5cdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1Qb3NpdGlvblkgPSB5O1xuXG5cdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtc1tcblx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhcblx0XHRcdF0uc3R5bGUud2lkdGggPVxuXHRcdFx0XHR0aGlzLnBvc2l0aW9uRGF0YVt0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleF0ud2lkdGggKyBcInB4XCI7XG5cdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtc1tcblx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhcblx0XHRcdF0uc3R5bGUuaGVpZ2h0ID1cblx0XHRcdFx0dGhpcy5wb3NpdGlvbkRhdGFbdGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhdLmhlaWdodCArIFwicHhcIjtcblxuXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbXNbXG5cdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4XG5cdFx0XHRdLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlKFwiICsgeCArIFwicHgsIFwiICsgeSArIFwicHgpXCI7XG5cdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtc1tcblx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhcblx0XHRcdF0uY2xhc3NMaXN0LmFkZChcImxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1BY3RpdmVcIik7XG5cblx0XHRcdHRoaXMuJGJvZHlbMF0uY2xhc3NMaXN0LmFkZChcblx0XHRcdFx0XCJsaW1iZXJHcmlkVmlld0JvZHlUYWdTdGF0ZUVsZW1lbnREcmFnZ2luZ09yUmVzaXppbmdcIlxuXHRcdFx0KTtcblx0XHRcdHZhciBsZW5ndGhfMCA9IHRoaXMuJGxpbWJlckdyaWRWaWV3SXRlbXMubGVuZ3RoO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3SXRlbXNbaV0uY2xhc3NMaXN0LmFkZChcblx0XHRcdFx0XHRcImxpbWJlckdyaWRWaWV3SXRlbVJlc2l6aW5nU3RhdGVcIlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgbGVuZ3RoXzAgPSB0aGlzLiRsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtcy5sZW5ndGg7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aF8wOyBpKyspIHtcblx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbXNbaV0uY2xhc3NMaXN0LmFkZChcblx0XHRcdFx0XHRcImxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1SZXNpemluZ1N0YXRlXCJcblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbXNbXG5cdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4XG5cdFx0XHRdLmNsYXNzTGlzdC5yZW1vdmUoXG5cdFx0XHRcdFwibGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbVJlc2l6ZUFsbG93XCIsXG5cdFx0XHRcdFwibGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbVJlc2l6ZURpc2FsbG93XCJcblx0XHRcdCk7XG5cblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fVxuXG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdH07XG5cblx0TGltYmVyR3JpZFZpZXcucHJvdG90eXBlLm1vdXNlRG93bkNoZWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRpZiAodGhpcy5tb3VzZURvd25DYW5jZWwgPT0gZmFsc2UpIHtcblx0XHRcdHRoaXMubW91c2VEb3duVGltZXJDb21wbGV0ZSA9IHRydWU7XG5cdFx0XHRjb25zb2xlLmxvZyhcIm1vdXNlRG93blRpbWVyQ29tcGxldGVcIik7XG5cdFx0XHR0aGlzLiRib2R5WzBdLmNsYXNzTGlzdC5hZGQoXG5cdFx0XHRcdFwibGltYmVyR3JpZFZpZXdCb2R5VGFnU3RhdGVFbGVtZW50RHJhZ2dpbmdPclJlc2l6aW5nXCJcblx0XHRcdCk7XG5cdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0l0ZW1zW1xuXHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleFxuXHRcdFx0XS5jbGFzc0xpc3QuYWRkKFwibGltYmVyR3JpZFZpZXdJdGVtRGVtb1wiKTtcblx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3Qm9keVBzZXVkb0l0ZW1zW1xuXHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleFxuXHRcdFx0XS5jbGFzc0xpc3QuYWRkKFwibGltYmVyR3JpZFZpZXdCb2R5UHNldWRvSXRlbUFjdGl2ZVwiKTtcblx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3Qm9keVBzZXVkb0l0ZW1zW1xuXHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleFxuXHRcdFx0XS5zdHlsZS50cmFuc2Zvcm0gPVxuXHRcdFx0XHRcInRyYW5zbGF0ZShcIiArXG5cdFx0XHRcdGV2ZW50LnBhZ2VYIC8qKyA1Ki8gK1xuXHRcdFx0XHRcInB4LCBcIiArXG5cdFx0XHRcdGV2ZW50LnBhZ2VZIC8qKyA1Ki8gK1xuXHRcdFx0XHRcInB4KVwiO1xuXG5cdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0hlaWdodEFkanVzdEd1aWRlWzBdLnN0eWxlLmhlaWdodCA9IDAgKyBcInB4XCI7XG5cdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0hlaWdodEFkanVzdEd1aWRlWzBdLmNsYXNzTGlzdC5hZGQoXG5cdFx0XHRcdFwibGltYmVyR3JpZFZpZXdIZWlnaHRBZGp1c3RHdWlkZUFjdGl2ZVwiXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcIm1vdXNlRG93biBjYW5jZWwgYmVmb3JlIFRpbWVyQ29tcGxldGVcIik7XG5cdFx0fVxuXHR9O1xuXG5cdExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS50YXBIb2xkQ2hlY2sgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdGlmICh0aGlzLnRhcEhvbGRDYW5jZWwgPT0gZmFsc2UpIHtcblx0XHRcdHRoaXMudGFwSG9sZFRpbWVyQ29tcGxldGUgPSB0cnVlO1xuXG5cdFx0XHR0aGlzLiRib2R5WzBdLmNsYXNzTGlzdC5hZGQoXG5cdFx0XHRcdFwibGltYmVyR3JpZFZpZXdCb2R5VGFnU3RhdGVFbGVtZW50RHJhZ2dpbmdPclJlc2l6aW5nXCJcblx0XHRcdCk7XG5cdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0l0ZW1zW1xuXHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleFxuXHRcdFx0XS5jbGFzc0xpc3QuYWRkKFwibGltYmVyR3JpZFZpZXdJdGVtRGVtb1wiKTtcblx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3Qm9keVBzZXVkb0l0ZW1zW1xuXHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleFxuXHRcdFx0XS5jbGFzc0xpc3QuYWRkKFwibGltYmVyR3JpZFZpZXdCb2R5UHNldWRvSXRlbUFjdGl2ZVwiKTtcblx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3Qm9keVBzZXVkb0l0ZW1zW1xuXHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleFxuXHRcdFx0XS5zdHlsZS50cmFuc2Zvcm0gPVxuXHRcdFx0XHRcInRyYW5zbGF0ZShcIiArXG5cdFx0XHRcdGV2ZW50LnRvdWNoZXNbMF0ucGFnZVggLyorIDUqLyArXG5cdFx0XHRcdFwicHgsIFwiICtcblx0XHRcdFx0ZXZlbnQudG91Y2hlc1swXS5wYWdlWSAvKisgNSovICtcblx0XHRcdFx0XCJweClcIjtcblxuXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdIZWlnaHRBZGp1c3RHdWlkZVswXS5zdHlsZS5oZWlnaHQgPSAwICsgXCJweFwiO1xuXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdIZWlnaHRBZGp1c3RHdWlkZVswXS5jbGFzc0xpc3QuYWRkKFxuXHRcdFx0XHRcImxpbWJlckdyaWRWaWV3SGVpZ2h0QWRqdXN0R3VpZGVBY3RpdmVcIlxuXHRcdFx0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gdGFwSG9sZCBjYW5jZWwgYmVmb3JlIFRpbWVyQ29tcGxldGVcblx0XHR9XG5cdH07XG5cblx0TGltYmVyR3JpZFZpZXcucHJvdG90eXBlLm9uTW91c2VNb3ZlID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRpZiAodGhpcy5tb3VzZURvd25UaW1lckNvbXBsZXRlID09IHRydWUpIHtcblx0XHRcdGlmICh0aGlzLnVzZXJBY3Rpb25EYXRhLnR5cGUgPT0gXCJtb3ZlXCIpIHtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3TW92ZUd1aWRlWzBdLmNsYXNzTGlzdC5jb250YWlucyhcblx0XHRcdFx0XHRcdFwibGltYmVyR3JpZFZpZXdNb3ZlR3VpZGVBY3RpdmVcIlxuXHRcdFx0XHRcdClcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdNb3ZlR3VpZGVbMF0uY2xhc3NMaXN0LnJlbW92ZShcblx0XHRcdFx0XHRcdFwibGltYmVyR3JpZFZpZXdNb3ZlR3VpZGVBY3RpdmVcIlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdCb2R5UHNldWRvSXRlbXNbXG5cdFx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleFxuXHRcdFx0XHRcdF0uY2xhc3NMaXN0LmNvbnRhaW5zKFxuXHRcdFx0XHRcdFx0XCJsaW1iZXJHcmlkVmlld0JvZHlQc2V1ZG9JdGVtTW92ZUFsbG93XCJcblx0XHRcdFx0XHQpIHx8XG5cdFx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdCb2R5UHNldWRvSXRlbXNbXG5cdFx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleFxuXHRcdFx0XHRcdF0uY2xhc3NMaXN0LmNvbnRhaW5zKFxuXHRcdFx0XHRcdFx0XCJsaW1iZXJHcmlkVmlld0JvZHlQc2V1ZG9JdGVtTW92ZURpc2FsbG93XCJcblx0XHRcdFx0XHQpXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3Qm9keVBzZXVkb0l0ZW1zW1xuXHRcdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhcblx0XHRcdFx0XHRdLmNsYXNzTGlzdC5yZW1vdmUoXG5cdFx0XHRcdFx0XHRcImxpbWJlckdyaWRWaWV3Qm9keVBzZXVkb0l0ZW1Nb3ZlQWxsb3dcIixcblx0XHRcdFx0XHRcdFwibGltYmVyR3JpZFZpZXdCb2R5UHNldWRvSXRlbU1vdmVEaXNhbGxvd1wiXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3Qm9keVBzZXVkb0l0ZW1zW1xuXHRcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4XG5cdFx0XHRcdF0uc3R5bGUudHJhbnNmb3JtID1cblx0XHRcdFx0XHRcInRyYW5zbGF0ZShcIiArXG5cdFx0XHRcdFx0ZXZlbnQucGFnZVggLyorIDUqLyArXG5cdFx0XHRcdFx0XCJweCwgXCIgK1xuXHRcdFx0XHRcdGV2ZW50LnBhZ2VZIC8qKyA1Ki8gK1xuXHRcdFx0XHRcdFwicHgpXCI7XG5cdFx0XHRcdHZhciBtb3VzZVBvc2l0aW9uT25MaW1iZXJHcmlkID0gdGhpcy5jYWxjdWxhdGVNb3VzZVBvc09uTGltYmVyR3JpZChcblx0XHRcdFx0XHRldmVudFxuXHRcdFx0XHQpO1xuXG5cdFx0XHRcdGlmIChtb3VzZVBvc2l0aW9uT25MaW1iZXJHcmlkICE9IGZhbHNlKSB7XG5cdFx0XHRcdFx0dmFyIHNjcm9sbFRvcCA9IHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLnNjcm9sbFRvcDtcblx0XHRcdFx0XHR2YXIgc2Nyb2xsSGVpZ2h0ID0gdGhpcy4kbGltYmVyR3JpZFZpZXdbMF0uc2Nyb2xsSGVpZ2h0O1xuXG5cdFx0XHRcdFx0dmFyIHlNb3VzZVBvc2l0aW9uID0gbW91c2VQb3NpdGlvbk9uTGltYmVyR3JpZC55O1xuXHRcdFx0XHRcdHRoaXMuYWRqdXN0SGVpZ2h0KHlNb3VzZVBvc2l0aW9uKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNsZWFyVGltZW91dCh0aGlzLnNob3dNb3ZlRGVtb1RpbWVPdXRWYXJpYWJsZSk7XG5cdFx0XHRcdHRoaXMuc2hvd01vdmVEZW1vVGltZU91dFZhcmlhYmxlID0gc2V0VGltZW91dChcblx0XHRcdFx0XHR0aGlzLnNob3dNb3ZlRGVtby5iaW5kKFxuXHRcdFx0XHRcdFx0dGhpcyxcblx0XHRcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4LFxuXHRcdFx0XHRcdFx0bW91c2VQb3NpdGlvbk9uTGltYmVyR3JpZFxuXHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0dGhpcy5ERU1PX1dBSVRfVElNRVxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIHNjcm9sbFRvcCA9IHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLnNjcm9sbFRvcDtcblx0XHRcdFx0dmFyIHNjcm9sbExlZnQgPSB0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5zY3JvbGxMZWZ0O1xuXG5cdFx0XHRcdHZhciB4ID0gdGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtUG9zaXRpb25YO1xuXHRcdFx0XHR2YXIgeSA9IHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbVBvc2l0aW9uWTtcblxuXHRcdFx0XHR2YXIgbmV3V2lkdGggPVxuXHRcdFx0XHRcdGV2ZW50Lm9mZnNldFggLSB4ICsgc2Nyb2xsTGVmdCAtIHRoaXMuUEFERElOR19MRUZUO1xuXHRcdFx0XHR2YXIgbmV3SGVpZ2h0ID1cblx0XHRcdFx0XHRldmVudC5vZmZzZXRZIC0geSArIHNjcm9sbFRvcCAtIHRoaXMuUEFERElOR19UT1A7XG5cblx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5uZXdXaWR0aCA9IG5ld1dpZHRoO1xuXHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLm5ld0hlaWdodCA9IG5ld0hlaWdodDtcblxuXHRcdFx0XHR2YXIgeU1vdXNlUG9zaXRpb24gPSBldmVudC5vZmZzZXRZICsgc2Nyb2xsVG9wO1xuXHRcdFx0XHR0aGlzLmFkanVzdEhlaWdodCh5TW91c2VQb3NpdGlvbik7XG5cblx0XHRcdFx0aWYgKG5ld1dpZHRoID4gMCAmJiBuZXdIZWlnaHQgPiAwKSB7XG5cdFx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbXNbXG5cdFx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleFxuXHRcdFx0XHRcdF0uc3R5bGUud2lkdGggPSBuZXdXaWR0aCArIFwicHhcIjtcblx0XHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtc1tcblx0XHRcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4XG5cdFx0XHRcdFx0XS5zdHlsZS5oZWlnaHQgPSBuZXdIZWlnaHQgKyBcInB4XCI7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbXNbXG5cdFx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleFxuXHRcdFx0XHRcdF0uY2xhc3NMaXN0LmNvbnRhaW5zKFxuXHRcdFx0XHRcdFx0XCJsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtUmVzaXplQWxsb3dcIlxuXHRcdFx0XHRcdCkgfHxcblx0XHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtc1tcblx0XHRcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4XG5cdFx0XHRcdFx0XS5jbGFzc0xpc3QuY29udGFpbnMoXG5cdFx0XHRcdFx0XHRcImxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1SZXNpemVEaXNhbGxvd1wiXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtc1tcblx0XHRcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4XG5cdFx0XHRcdFx0XS5jbGFzc0xpc3QucmVtb3ZlKFxuXHRcdFx0XHRcdFx0XCJsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtUmVzaXplQWxsb3dcIixcblx0XHRcdFx0XHRcdFwibGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbVJlc2l6ZURpc2FsbG93XCJcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMuc2hvd1Jlc2l6ZURlbW9UaW1lT3V0VmFyaWFibGUpO1xuXHRcdFx0XHR0aGlzLnNob3dSZXNpemVEZW1vVGltZU91dFZhcmlhYmxlID0gc2V0VGltZW91dChcblx0XHRcdFx0XHR0aGlzLnNob3dSZXNpemVEZW1vLmJpbmQoXG5cdFx0XHRcdFx0XHR0aGlzLFxuXHRcdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXgsXG5cdFx0XHRcdFx0XHRuZXdXaWR0aCxcblx0XHRcdFx0XHRcdG5ld0hlaWdodFxuXHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0dGhpcy5ERU1PX1dBSVRfVElNRVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLm1vdXNlRG93bkNhbmNlbCA9IHRydWU7XG5cdFx0XHRjbGVhclRpbWVvdXQodGhpcy5sb25nUHJlc3NDaGVjayk7XG5cdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuXHRcdFx0XHRcIm1vdXNlbW92ZVwiLFxuXHRcdFx0XHR0aGlzLm9uTW91c2VNb3ZlQmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHRcdFx0KTtcblx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcdFwibW91c2Vtb3ZlXCIsXG5cdFx0XHRcdHRoaXMub25Nb3VzZU1vdmVCaW5kZWRGdW5jdGlvblZhcmlhYmxlXG5cdFx0XHQpO1xuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0XHRcdFx0XCJtb3VzZXVwXCIsXG5cdFx0XHRcdHRoaXMub25Nb3VzZVVwQmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHRcdFx0KTtcblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcdFwiY29udGV4dG1lbnVcIixcblx0XHRcdFx0dGhpcy5vbkNvbnRleHRNZW51QmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHRcdFx0KTtcblxuXHRcdFx0Ly8gY2FuY2VsaW5nIG1vdXNlSG9sZFxuXHRcdH1cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHR9O1xuXG5cdExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5vblRvdWNoTW92ZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0aWYgKHRoaXMudGFwSG9sZFRpbWVyQ29tcGxldGUgPT0gdHJ1ZSkge1xuXHRcdFx0aWYgKHRoaXMudXNlckFjdGlvbkRhdGEudHlwZSA9PSBcIm1vdmVcIikge1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdNb3ZlR3VpZGVbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKFxuXHRcdFx0XHRcdFx0XCJsaW1iZXJHcmlkVmlld01vdmVHdWlkZUFjdGl2ZVwiXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld01vdmVHdWlkZVswXS5jbGFzc0xpc3QucmVtb3ZlKFxuXHRcdFx0XHRcdFx0XCJsaW1iZXJHcmlkVmlld01vdmVHdWlkZUFjdGl2ZVwiXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0JvZHlQc2V1ZG9JdGVtc1tcblx0XHRcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4XG5cdFx0XHRcdFx0XS5jbGFzc0xpc3QuY29udGFpbnMoXG5cdFx0XHRcdFx0XHRcImxpbWJlckdyaWRWaWV3Qm9keVBzZXVkb0l0ZW1Nb3ZlQWxsb3dcIlxuXHRcdFx0XHRcdCkgfHxcblx0XHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0JvZHlQc2V1ZG9JdGVtc1tcblx0XHRcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4XG5cdFx0XHRcdFx0XS5jbGFzc0xpc3QuY29udGFpbnMoXG5cdFx0XHRcdFx0XHRcImxpbWJlckdyaWRWaWV3Qm9keVBzZXVkb0l0ZW1Nb3ZlRGlzYWxsb3dcIlxuXHRcdFx0XHRcdClcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdCb2R5UHNldWRvSXRlbXNbXG5cdFx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleFxuXHRcdFx0XHRcdF0uY2xhc3NMaXN0LnJlbW92ZShcblx0XHRcdFx0XHRcdFwibGltYmVyR3JpZFZpZXdCb2R5UHNldWRvSXRlbU1vdmVBbGxvd1wiLFxuXHRcdFx0XHRcdFx0XCJsaW1iZXJHcmlkVmlld0JvZHlQc2V1ZG9JdGVtTW92ZURpc2FsbG93XCJcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdCb2R5UHNldWRvSXRlbXNbXG5cdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhcblx0XHRcdFx0XS5zdHlsZS50cmFuc2Zvcm0gPVxuXHRcdFx0XHRcdFwidHJhbnNsYXRlKFwiICtcblx0XHRcdFx0XHRldmVudC50b3VjaGVzWzBdLnBhZ2VYIC8qKyA1Ki8gK1xuXHRcdFx0XHRcdFwicHgsIFwiICtcblx0XHRcdFx0XHRldmVudC50b3VjaGVzWzBdLnBhZ2VZIC8qKyA1Ki8gK1xuXHRcdFx0XHRcdFwicHgpXCI7XG5cdFx0XHRcdHZhciB0b3VjaFBvc2l0aW9uT25MaW1iZXJHcmlkID0gdGhpcy5jYWxjdWxhdGVUb3VjaFBvc09uTGltYmVyR3JpZChcblx0XHRcdFx0XHRldmVudFxuXHRcdFx0XHQpO1xuXG5cdFx0XHRcdGlmICh0b3VjaFBvc2l0aW9uT25MaW1iZXJHcmlkICE9IGZhbHNlKSB7XG5cdFx0XHRcdFx0dmFyIHNjcm9sbFRvcCA9IHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLnNjcm9sbFRvcDtcblx0XHRcdFx0XHR2YXIgc2Nyb2xsTGVmdCA9IHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLnNjcm9sbExlZnQ7XG5cblx0XHRcdFx0XHR2YXIgbGltYmVyR3JpZFZpZXdCb3VuZGluZ0NsaWVudFJlY3QgPSB0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdFx0XHR2YXIgbGltYmVyR3JpZFZpZXdXaWR0aFZpc2libGVXaWR0aCA9XG5cdFx0XHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5vZmZzZXRXaWR0aCAtXG5cdFx0XHRcdFx0XHRsaW1iZXJHcmlkVmlld0JvdW5kaW5nQ2xpZW50UmVjdC5sZWZ0O1xuXHRcdFx0XHRcdHZhciBsaW1iZXJHcmlkVmlld0hlaWdodFZpc2libGVIZWlnaHQgPVxuXHRcdFx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdbMF0ub2Zmc2V0SGVpZ2h0IC1cblx0XHRcdFx0XHRcdGxpbWJlckdyaWRWaWV3Qm91bmRpbmdDbGllbnRSZWN0LnRvcDtcblx0XHRcdFx0XHR2YXIgbGltYmVyR3JpZFZpZXdPblZpc2libGVBcmVhWCA9XG5cdFx0XHRcdFx0XHR0b3VjaFBvc2l0aW9uT25MaW1iZXJHcmlkLnggK1xuXHRcdFx0XHRcdFx0dGhpcy5QQURESU5HX0xFRlQgLVxuXHRcdFx0XHRcdFx0c2Nyb2xsTGVmdDtcblx0XHRcdFx0XHR2YXIgbGltYmVyR3JpZFZpZXdPblZpc2libGVBcmVhWSA9XG5cdFx0XHRcdFx0XHR0b3VjaFBvc2l0aW9uT25MaW1iZXJHcmlkLnkgK1xuXHRcdFx0XHRcdFx0dGhpcy5QQURESU5HX1RPUCAtXG5cdFx0XHRcdFx0XHRzY3JvbGxUb3A7XG5cblx0XHRcdFx0XHR2YXIgeVRvdWNoUG9zaXRpb24gPSB0b3VjaFBvc2l0aW9uT25MaW1iZXJHcmlkLnk7XG5cdFx0XHRcdFx0dGhpcy5hZGp1c3RIZWlnaHQoeVRvdWNoUG9zaXRpb24pO1xuXG5cdFx0XHRcdFx0dmFyIHByb2dyYW1TY3JvbGxlZCA9IHRoaXMuYWRqdXN0U2Nyb2xsKFxuXHRcdFx0XHRcdFx0bGltYmVyR3JpZFZpZXdPblZpc2libGVBcmVhWSxcblx0XHRcdFx0XHRcdGxpbWJlckdyaWRWaWV3SGVpZ2h0VmlzaWJsZUhlaWdodFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjbGVhclRpbWVvdXQodGhpcy5zaG93TW92ZURlbW9UaW1lT3V0VmFyaWFibGUpO1xuXHRcdFx0XHRpZiAocHJvZ3JhbVNjcm9sbGVkICE9IHRydWUpIHtcblx0XHRcdFx0XHR0aGlzLnNob3dNb3ZlRGVtb1RpbWVPdXRWYXJpYWJsZSA9IHNldFRpbWVvdXQoXG5cdFx0XHRcdFx0XHR0aGlzLnNob3dNb3ZlRGVtby5iaW5kKFxuXHRcdFx0XHRcdFx0XHR0aGlzLFxuXHRcdFx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleCxcblx0XHRcdFx0XHRcdFx0dG91Y2hQb3NpdGlvbk9uTGltYmVyR3JpZFxuXHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdHRoaXMuREVNT19XQUlUX1RJTUVcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgc2Nyb2xsVG9wID0gdGhpcy4kbGltYmVyR3JpZFZpZXdbMF0uc2Nyb2xsVG9wO1xuXHRcdFx0XHR2YXIgc2Nyb2xsTGVmdCA9IHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLnNjcm9sbExlZnQ7XG5cblx0XHRcdFx0dmFyIHggPSB0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1Qb3NpdGlvblg7XG5cdFx0XHRcdHZhciB5ID0gdGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtUG9zaXRpb25ZO1xuXG5cdFx0XHRcdHZhciB0b3VjaFBvc2l0aW9uT25MaW1iZXJHcmlkID0gdGhpcy5jYWxjdWxhdGVUb3VjaFBvc09uTGltYmVyR3JpZChcblx0XHRcdFx0XHRldmVudFxuXHRcdFx0XHQpO1xuXG5cdFx0XHRcdGlmICh0b3VjaFBvc2l0aW9uT25MaW1iZXJHcmlkICE9IGZhbHNlKSB7XG5cdFx0XHRcdFx0dmFyIG5ld1dpZHRoID0gdG91Y2hQb3NpdGlvbk9uTGltYmVyR3JpZC54IC0geDtcblx0XHRcdFx0XHR2YXIgbmV3SGVpZ2h0ID0gdG91Y2hQb3NpdGlvbk9uTGltYmVyR3JpZC55IC0geTtcblxuXHRcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEubmV3V2lkdGggPSBuZXdXaWR0aDtcblx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLm5ld0hlaWdodCA9IG5ld0hlaWdodDtcblxuXHRcdFx0XHRcdGlmIChuZXdXaWR0aCA+IDAgJiYgbmV3SGVpZ2h0ID4gMCkge1xuXHRcdFx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbXNbXG5cdFx0XHRcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4XG5cdFx0XHRcdFx0XHRdLnN0eWxlLndpZHRoID0gbmV3V2lkdGggKyBcInB4XCI7XG5cdFx0XHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtc1tcblx0XHRcdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhcblx0XHRcdFx0XHRcdF0uc3R5bGUuaGVpZ2h0ID0gbmV3SGVpZ2h0ICsgXCJweFwiO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChcblx0XHRcdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1zW1xuXHRcdFx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleFxuXHRcdFx0XHRcdFx0XS5jbGFzc0xpc3QuY29udGFpbnMoXG5cdFx0XHRcdFx0XHRcdFwibGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbVJlc2l6ZUFsbG93XCJcblx0XHRcdFx0XHRcdCkgfHxcblx0XHRcdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1zW1xuXHRcdFx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleFxuXHRcdFx0XHRcdFx0XS5jbGFzc0xpc3QuY29udGFpbnMoXG5cdFx0XHRcdFx0XHRcdFwibGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbVJlc2l6ZURpc2FsbG93XCJcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1zW1xuXHRcdFx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleFxuXHRcdFx0XHRcdFx0XS5jbGFzc0xpc3QucmVtb3ZlKFxuXHRcdFx0XHRcdFx0XHRcImxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1SZXNpemVBbGxvd1wiLFxuXHRcdFx0XHRcdFx0XHRcImxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1SZXNpemVEaXNhbGxvd1wiXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICh0b3VjaFBvc2l0aW9uT25MaW1iZXJHcmlkICE9IGZhbHNlKSB7XG5cdFx0XHRcdFx0dmFyIGxpbWJlckdyaWRWaWV3Qm91bmRpbmdDbGllbnRSZWN0ID0gdGhpcy4kbGltYmVyR3JpZFZpZXdbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRcdFx0dmFyIGxpbWJlckdyaWRWaWV3V2lkdGhWaXNpYmxlV2lkdGggPVxuXHRcdFx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdbMF0ub2Zmc2V0V2lkdGggLVxuXHRcdFx0XHRcdFx0bGltYmVyR3JpZFZpZXdCb3VuZGluZ0NsaWVudFJlY3QubGVmdDtcblx0XHRcdFx0XHR2YXIgbGltYmVyR3JpZFZpZXdIZWlnaHRWaXNpYmxlSGVpZ2h0ID1cblx0XHRcdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLm9mZnNldEhlaWdodCAtXG5cdFx0XHRcdFx0XHRsaW1iZXJHcmlkVmlld0JvdW5kaW5nQ2xpZW50UmVjdC50b3A7XG5cdFx0XHRcdFx0dmFyIGxpbWJlckdyaWRWaWV3T25WaXNpYmxlQXJlYVggPVxuXHRcdFx0XHRcdFx0dG91Y2hQb3NpdGlvbk9uTGltYmVyR3JpZC54ICtcblx0XHRcdFx0XHRcdHRoaXMuUEFERElOR19MRUZUIC1cblx0XHRcdFx0XHRcdHNjcm9sbExlZnQ7XG5cdFx0XHRcdFx0dmFyIGxpbWJlckdyaWRWaWV3T25WaXNpYmxlQXJlYVkgPVxuXHRcdFx0XHRcdFx0dG91Y2hQb3NpdGlvbk9uTGltYmVyR3JpZC55ICtcblx0XHRcdFx0XHRcdHRoaXMuUEFERElOR19UT1AgLVxuXHRcdFx0XHRcdFx0c2Nyb2xsVG9wO1xuXG5cdFx0XHRcdFx0dmFyIHlUb3VjaFBvc2l0aW9uID0gdG91Y2hQb3NpdGlvbk9uTGltYmVyR3JpZC55O1xuXHRcdFx0XHRcdHRoaXMuYWRqdXN0SGVpZ2h0KHlUb3VjaFBvc2l0aW9uKTtcblxuXHRcdFx0XHRcdHZhciBwcm9ncmFtU2Nyb2xsZWQgPSB0aGlzLmFkanVzdFNjcm9sbChcblx0XHRcdFx0XHRcdGxpbWJlckdyaWRWaWV3T25WaXNpYmxlQXJlYVksXG5cdFx0XHRcdFx0XHRsaW1iZXJHcmlkVmlld0hlaWdodFZpc2libGVIZWlnaHRcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMuc2hvd1Jlc2l6ZURlbW9UaW1lT3V0VmFyaWFibGUpO1xuXHRcdFx0XHRpZiAocHJvZ3JhbVNjcm9sbGVkICE9IHRydWUpIHtcblx0XHRcdFx0XHR0aGlzLnNob3dSZXNpemVEZW1vVGltZU91dFZhcmlhYmxlID0gc2V0VGltZW91dChcblx0XHRcdFx0XHRcdHRoaXMuc2hvd1Jlc2l6ZURlbW8uYmluZChcblx0XHRcdFx0XHRcdFx0dGhpcyxcblx0XHRcdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXgsXG5cdFx0XHRcdFx0XHRcdG5ld1dpZHRoLFxuXHRcdFx0XHRcdFx0XHRuZXdIZWlnaHRcblx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHR0aGlzLkRFTU9fV0FJVF9USU1FXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnRhcEhvbGRDYW5jZWwgPSB0cnVlO1xuXHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMubG9uZ1RvdWNoQ2hlY2spO1xuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0XHRcdFx0XCJ0b3VjaG1vdmVcIixcblx0XHRcdFx0dGhpcy5vblRvdWNoTW92ZUJpbmRlZEZ1bmN0aW9uVmFyaWFibGVcblx0XHRcdCk7XG5cdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5yZW1vdmVFdmVudExpc3RlbmVyKFxuXHRcdFx0XHRcInRvdWNobW92ZVwiLFxuXHRcdFx0XHR0aGlzLm9uVG91Y2hNb3ZlQmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHRcdFx0KTtcblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcdFwidG91Y2hlbmRcIixcblx0XHRcdFx0dGhpcy5vblRvdWNoRW5kQmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHRcdFx0KTtcblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcdFwiY29udGV4dG1lbnVcIixcblx0XHRcdFx0dGhpcy5vbkNvbnRleHRNZW51QmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHRcdFx0KTtcblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcdFwiY29udGV4dG1lbnVcIixcblx0XHRcdFx0dGhpcy5vbkl0ZW1Ub3VjaENvbnRleHRNZW51QmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHRcdFx0KTtcblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcdFwidG91Y2hjYW5jZWxcIixcblx0XHRcdFx0dGhpcy5vblRvdWNoQ2FuY2VsQmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHRcdFx0KTtcblx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcdFwidG91Y2hzdGFydFwiLFxuXHRcdFx0XHR0aGlzLm9uTGltYmVyR3JpZFRvdWNoU3RhcnRGdW5jdGlvblZhcmlhYmxlXG5cdFx0XHQpO1xuXG5cdFx0XHQvLyBjYW5jZWxpbmcgdGFwaG9sZFxuXHRcdH1cblxuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHR9O1xuXG5cdExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5vbk1vdXNlVXAgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdGNsZWFyVGltZW91dCh0aGlzLnNob3dNb3ZlRGVtb1RpbWVPdXRWYXJpYWJsZSk7XG5cdFx0Y2xlYXJUaW1lb3V0KHRoaXMuc2hvd1Jlc2l6ZURlbW9UaW1lT3V0VmFyaWFibGUpO1xuXHRcdHZhciBpdGVtUmVzaXplRmxhZyA9IGZhbHNlO1xuXHRcdHZhciBpdGVtTW92ZUZsYWcgPSBmYWxzZTtcblx0XHRpZiAodGhpcy5tb3VzZURvd25UaW1lckNvbXBsZXRlID09IHRydWUpIHtcblx0XHRcdGlmICh0aGlzLnVzZXJBY3Rpb25EYXRhLnR5cGUgPT0gXCJtb3ZlXCIpIHtcblx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdCb2R5UHNldWRvSXRlbXNbXG5cdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhcblx0XHRcdFx0XS5jbGFzc0xpc3QucmVtb3ZlKFwibGltYmVyR3JpZFZpZXdCb2R5UHNldWRvSXRlbUFjdGl2ZVwiKTtcblx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdCb2R5UHNldWRvSXRlbXNbXG5cdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhcblx0XHRcdFx0XS5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZShcIiArIDAgKyBcInB4LCBcIiArIDAgKyBcInB4KVwiO1xuXHRcdFx0XHR2YXIgbW91c2VQb3NpdGlvbk9uTGltYmVyR3JpZCA9IHRoaXMuY2FsY3VsYXRlTW91c2VQb3NPbkxpbWJlckdyaWQoXG5cdFx0XHRcdFx0ZXZlbnRcblx0XHRcdFx0KTtcblx0XHRcdFx0aWYgKG1vdXNlUG9zaXRpb25PbkxpbWJlckdyaWQgIT0gZmFsc2UpIHtcblx0XHRcdFx0XHR2YXIgbmV3TW92ZUNvb3JkaW5hdGVzID0gdGhpcy5jaGVja05ld01vdmVDb29yZGluYXRlcyhcblx0XHRcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4LFxuXHRcdFx0XHRcdFx0bW91c2VQb3NpdGlvbk9uTGltYmVyR3JpZFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0aWYgKG5ld01vdmVDb29yZGluYXRlcyAhPSBmYWxzZSkge1xuXHRcdFx0XHRcdFx0dmFyIHVwZGF0ZWRDb29yZGluYXRlcyA9IHt9O1xuXHRcdFx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdFx0XHRuZXdNb3ZlQ29vcmRpbmF0ZXMuaGFzT3duUHJvcGVydHkoXG5cdFx0XHRcdFx0XHRcdFx0XCJyZXZpc2VkQ29vcmRpbmF0ZXNcIlxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5tb3ZlUGxhbmUoXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXgsXG5cdFx0XHRcdFx0XHRcdFx0bmV3TW92ZUNvb3JkaW5hdGVzLnJldmlzZWRDb29yZGluYXRlcy54LFxuXHRcdFx0XHRcdFx0XHRcdG5ld01vdmVDb29yZGluYXRlcy5yZXZpc2VkQ29vcmRpbmF0ZXMueVxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHR1cGRhdGVkQ29vcmRpbmF0ZXMueCA9XG5cdFx0XHRcdFx0XHRcdFx0bmV3TW92ZUNvb3JkaW5hdGVzLnJldmlzZWRDb29yZGluYXRlcy54O1xuXHRcdFx0XHRcdFx0XHR1cGRhdGVkQ29vcmRpbmF0ZXMueSA9XG5cdFx0XHRcdFx0XHRcdFx0bmV3TW92ZUNvb3JkaW5hdGVzLnJldmlzZWRDb29yZGluYXRlcy55O1xuXHRcdFx0XHRcdFx0XHRpdGVtTW92ZUZsYWcgPSB0cnVlO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5tb3ZlUGxhbmUoXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXgsXG5cdFx0XHRcdFx0XHRcdFx0bmV3TW92ZUNvb3JkaW5hdGVzLngsXG5cdFx0XHRcdFx0XHRcdFx0bmV3TW92ZUNvb3JkaW5hdGVzLnlcblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0dXBkYXRlZENvb3JkaW5hdGVzLnggPSBuZXdNb3ZlQ29vcmRpbmF0ZXMueDtcblx0XHRcdFx0XHRcdFx0dXBkYXRlZENvb3JkaW5hdGVzLnkgPSBuZXdNb3ZlQ29vcmRpbmF0ZXMueTtcblx0XHRcdFx0XHRcdFx0aXRlbU1vdmVGbGFnID0gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy5yZXZlcnRTaG93TW92ZU9yUmVzaXplRGVtbygpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnJldmVydFNob3dNb3ZlT3JSZXNpemVEZW1vKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBzY3JvbGxUb3AgPSB0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5zY3JvbGxUb3A7XG5cdFx0XHRcdHZhciBzY3JvbGxMZWZ0ID0gdGhpcy4kbGltYmVyR3JpZFZpZXdbMF0uc2Nyb2xsTGVmdDtcblxuXHRcdFx0XHR2YXIgeCA9IHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbVBvc2l0aW9uWDtcblx0XHRcdFx0dmFyIHkgPSB0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1Qb3NpdGlvblk7XG5cblx0XHRcdFx0dmFyIG5ld1dpZHRoID0gdGhpcy51c2VyQWN0aW9uRGF0YS5uZXdXaWR0aDtcblx0XHRcdFx0dmFyIG5ld0hlaWdodCA9IHRoaXMudXNlckFjdGlvbkRhdGEubmV3SGVpZ2h0O1xuXG5cdFx0XHRcdGlmIChuZXdXaWR0aCA+IDAgJiYgbmV3SGVpZ2h0ID4gMCkge1xuXHRcdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1zW1xuXHRcdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhcblx0XHRcdFx0XHRdLnN0eWxlLndpZHRoID0gbmV3V2lkdGggKyBcInB4XCI7XG5cdFx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbXNbXG5cdFx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleFxuXHRcdFx0XHRcdF0uc3R5bGUuaGVpZ2h0ID0gbmV3SGVpZ2h0ICsgXCJweFwiO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdHRoaXMucmVzaXplUGxhbmUoXG5cdFx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleCxcblx0XHRcdFx0XHRcdG5ld1dpZHRoLFxuXHRcdFx0XHRcdFx0bmV3SGVpZ2h0XG5cdFx0XHRcdFx0KSA9PSBmYWxzZVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHR0aGlzLnJldmVydFNob3dNb3ZlT3JSZXNpemVEZW1vKCk7XG5cdFx0XHRcdFx0aXRlbVJlc2l6ZUZsYWcgPSB0cnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbXNbXG5cdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhcblx0XHRcdFx0XS5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZShcIiArIDAgKyBcInB4LCBcIiArIDAgKyBcInB4KVwiO1xuXHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtc1tcblx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleFxuXHRcdFx0XHRdLmNsYXNzTGlzdC5yZW1vdmUoXCJsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtQWN0aXZlXCIpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLm1vdXNlRG93bkNhbmNlbCA9IHRydWU7XG5cdFx0XHRjbGVhclRpbWVvdXQodGhpcy5sb25nUHJlc3NDaGVjayk7XG5cdFx0XHQvLyBjYW5jZWxpbmcgbW91c2VIb2xkXG5cdFx0fVxuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcIm1vdXNlbW92ZVwiLFxuXHRcdFx0dGhpcy5vbk1vdXNlTW92ZUJpbmRlZEZ1bmN0aW9uVmFyaWFibGVcblx0XHQpO1xuXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcIm1vdXNlbW92ZVwiLFxuXHRcdFx0dGhpcy5vbk1vdXNlTW92ZUJpbmRlZEZ1bmN0aW9uVmFyaWFibGVcblx0XHQpO1xuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcIm1vdXNldXBcIixcblx0XHRcdHRoaXMub25Nb3VzZVVwQmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHRcdCk7XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0XHRcdFwiY29udGV4dG1lbnVcIixcblx0XHRcdHRoaXMub25Db250ZXh0TWVudUJpbmRlZEZ1bmN0aW9uVmFyaWFibGVcblx0XHQpO1xuXG5cdFx0dGhpcy4kYm9keVswXS5jbGFzc0xpc3QucmVtb3ZlKFxuXHRcdFx0XCJsaW1iZXJHcmlkVmlld0JvZHlUYWdTdGF0ZUVsZW1lbnREcmFnZ2luZ09yUmVzaXppbmdcIlxuXHRcdCk7XG5cdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdNb3ZlR3VpZGVbMF0uY2xhc3NMaXN0LnJlbW92ZShcblx0XHRcdFwibGltYmVyR3JpZFZpZXdNb3ZlR3VpZGVBY3RpdmVcIlxuXHRcdCk7XG5cblx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0hlaWdodEFkanVzdEd1aWRlWzBdLmNsYXNzTGlzdC5yZW1vdmUoXG5cdFx0XHRcImxpbWJlckdyaWRWaWV3SGVpZ2h0QWRqdXN0R3VpZGVBY3RpdmVcIlxuXHRcdCk7XG5cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0Ly9cblx0XHRpZiAoXG5cdFx0XHR0aGlzLmNhbGxiYWNrcy5tb3ZlQ29tcGxldGVDYWxsYmFjayAhPSB1bmRlZmluZWQgJiZcblx0XHRcdHRoaXMuY2FsbGJhY2tzLm1vdmVDb21wbGV0ZUNhbGxiYWNrICE9IG51bGxcblx0XHQpIHtcblx0XHRcdGlmIChpdGVtTW92ZUZsYWcgPT0gdHJ1ZSkge1xuXHRcdFx0XHR1cGRhdGVkQ29vcmRpbmF0ZXMud2lkdGggPSB0aGlzLnBvc2l0aW9uRGF0YVtcblx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleFxuXHRcdFx0XHRdLndpZHRoO1xuXHRcdFx0XHR1cGRhdGVkQ29vcmRpbmF0ZXMuaGVpZ2h0ID0gdGhpcy5wb3NpdGlvbkRhdGFbXG5cdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhcblx0XHRcdFx0XS5oZWlnaHQ7XG5cdFx0XHRcdHRoaXMuY2FsbGJhY2tzLm1vdmVDb21wbGV0ZUNhbGxiYWNrKFxuXHRcdFx0XHRcdHRydWUsXG5cdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXgsXG5cdFx0XHRcdFx0dXBkYXRlZENvb3JkaW5hdGVzXG5cdFx0XHRcdCk7XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMudXNlckFjdGlvbkRhdGEudHlwZSA9PSBcIm1vdmVcIikge1xuXHRcdFx0XHR0aGlzLmNhbGxiYWNrcy5tb3ZlQ29tcGxldGVDYWxsYmFjayhcblx0XHRcdFx0XHRmYWxzZSxcblx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleCxcblx0XHRcdFx0XHRldmVudFxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoXG5cdFx0XHR0aGlzLmNhbGxiYWNrcy5yZXNpemVDb21wbGV0ZUNhbGxiYWNrICE9IHVuZGVmaW5lZCAmJlxuXHRcdFx0dGhpcy5jYWxsYmFja3MucmVzaXplQ29tcGxldGVDYWxsYmFjayAhPSBudWxsXG5cdFx0KSB7XG5cdFx0XHRpZiAoaXRlbVJlc2l6ZUZsYWcgPT0gdHJ1ZSkge1xuXHRcdFx0XHR0aGlzLmNhbGxiYWNrcy5yZXNpemVDb21wbGV0ZUNhbGxiYWNrKFxuXHRcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHg6IHRoaXMucG9zaXRpb25EYXRhW3RoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4XS54LFxuXHRcdFx0XHRcdFx0eTogdGhpcy5wb3NpdGlvbkRhdGFbdGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhdLnksXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IG5ld0hlaWdodCxcblx0XHRcdFx0XHRcdHdpZHRoOiBuZXdXaWR0aFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly9cblxuXHRcdHRoaXMudXNlckFjdGlvbkRhdGEgPSBudWxsO1xuXHR9O1xuXG5cdExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5vblRvdWNoRW5kID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRjbGVhclRpbWVvdXQodGhpcy5zaG93TW92ZURlbW9UaW1lT3V0VmFyaWFibGUpO1xuXHRcdGNsZWFyVGltZW91dCh0aGlzLnNob3dSZXNpemVEZW1vVGltZU91dFZhcmlhYmxlKTtcblx0XHR2YXIgaXRlbVJlc2l6ZUZsYWcgPSBmYWxzZTtcblx0XHR2YXIgaXRlbU1vdmVGbGFnID0gZmFsc2U7XG5cdFx0aWYgKHRoaXMudGFwSG9sZFRpbWVyQ29tcGxldGUgPT0gdHJ1ZSkge1xuXHRcdFx0aWYgKHRoaXMudXNlckFjdGlvbkRhdGEudHlwZSA9PSBcIm1vdmVcIikge1xuXHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0JvZHlQc2V1ZG9JdGVtc1tcblx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleFxuXHRcdFx0XHRdLmNsYXNzTGlzdC5yZW1vdmUoXCJsaW1iZXJHcmlkVmlld0JvZHlQc2V1ZG9JdGVtQWN0aXZlXCIpO1xuXHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0JvZHlQc2V1ZG9JdGVtc1tcblx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleFxuXHRcdFx0XHRdLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlKFwiICsgMCArIFwicHgsIFwiICsgMCArIFwicHgpXCI7XG5cdFx0XHRcdHZhciB0b3VjaFBvc2l0aW9uT25MaW1iZXJHcmlkID0gdGhpcy5jYWxjdWxhdGVUb3VjaFBvc09uTGltYmVyR3JpZChcblx0XHRcdFx0XHRldmVudFxuXHRcdFx0XHQpO1xuXHRcdFx0XHRpZiAodG91Y2hQb3NpdGlvbk9uTGltYmVyR3JpZCAhPSBmYWxzZSkge1xuXHRcdFx0XHRcdHZhciBuZXdNb3ZlQ29vcmRpbmF0ZXMgPSB0aGlzLmNoZWNrTmV3TW92ZUNvb3JkaW5hdGVzKFxuXHRcdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXgsXG5cdFx0XHRcdFx0XHR0b3VjaFBvc2l0aW9uT25MaW1iZXJHcmlkXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRpZiAobmV3TW92ZUNvb3JkaW5hdGVzICE9IGZhbHNlKSB7XG5cdFx0XHRcdFx0XHR2YXIgdXBkYXRlZENvb3JkaW5hdGVzID0ge307XG5cdFx0XHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0XHRcdG5ld01vdmVDb29yZGluYXRlcy5oYXNPd25Qcm9wZXJ0eShcblx0XHRcdFx0XHRcdFx0XHRcInJldmlzZWRDb29yZGluYXRlc1wiXG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0XHR0aGlzLm1vdmVQbGFuZShcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleCxcblx0XHRcdFx0XHRcdFx0XHRuZXdNb3ZlQ29vcmRpbmF0ZXMucmV2aXNlZENvb3JkaW5hdGVzLngsXG5cdFx0XHRcdFx0XHRcdFx0bmV3TW92ZUNvb3JkaW5hdGVzLnJldmlzZWRDb29yZGluYXRlcy55XG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdHVwZGF0ZWRDb29yZGluYXRlcy54ID1cblx0XHRcdFx0XHRcdFx0XHRuZXdNb3ZlQ29vcmRpbmF0ZXMucmV2aXNlZENvb3JkaW5hdGVzLng7XG5cdFx0XHRcdFx0XHRcdHVwZGF0ZWRDb29yZGluYXRlcy55ID1cblx0XHRcdFx0XHRcdFx0XHRuZXdNb3ZlQ29vcmRpbmF0ZXMucmV2aXNlZENvb3JkaW5hdGVzLnk7XG5cdFx0XHRcdFx0XHRcdGl0ZW1Nb3ZlRmxhZyA9IHRydWU7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR0aGlzLm1vdmVQbGFuZShcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleCxcblx0XHRcdFx0XHRcdFx0XHRuZXdNb3ZlQ29vcmRpbmF0ZXMueCxcblx0XHRcdFx0XHRcdFx0XHRuZXdNb3ZlQ29vcmRpbmF0ZXMueVxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHR1cGRhdGVkQ29vcmRpbmF0ZXMueCA9IG5ld01vdmVDb29yZGluYXRlcy54O1xuXHRcdFx0XHRcdFx0XHR1cGRhdGVkQ29vcmRpbmF0ZXMueSA9IG5ld01vdmVDb29yZGluYXRlcy55O1xuXHRcdFx0XHRcdFx0XHRpdGVtTW92ZUZsYWcgPSB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLnJldmVydFNob3dNb3ZlT3JSZXNpemVEZW1vKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMucmV2ZXJ0U2hvd01vdmVPclJlc2l6ZURlbW8oKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIHNjcm9sbFRvcCA9IHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLnNjcm9sbFRvcDtcblx0XHRcdFx0dmFyIHNjcm9sbExlZnQgPSB0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5zY3JvbGxMZWZ0O1xuXG5cdFx0XHRcdHZhciB4ID0gdGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtUG9zaXRpb25YO1xuXHRcdFx0XHR2YXIgeSA9IHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbVBvc2l0aW9uWTtcblxuXHRcdFx0XHR2YXIgbmV3V2lkdGggPSB0aGlzLnVzZXJBY3Rpb25EYXRhLm5ld1dpZHRoO1xuXHRcdFx0XHR2YXIgbmV3SGVpZ2h0ID0gdGhpcy51c2VyQWN0aW9uRGF0YS5uZXdIZWlnaHQ7XG5cblx0XHRcdFx0aWYgKG5ld1dpZHRoID4gMCAmJiBuZXdIZWlnaHQgPiAwKSB7XG5cdFx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbXNbXG5cdFx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleFxuXHRcdFx0XHRcdF0uc3R5bGUud2lkdGggPSBuZXdXaWR0aCArIFwicHhcIjtcblx0XHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtc1tcblx0XHRcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4XG5cdFx0XHRcdFx0XS5zdHlsZS5oZWlnaHQgPSBuZXdIZWlnaHQgKyBcInB4XCI7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0dGhpcy5yZXNpemVQbGFuZShcblx0XHRcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4LFxuXHRcdFx0XHRcdFx0bmV3V2lkdGgsXG5cdFx0XHRcdFx0XHRuZXdIZWlnaHRcblx0XHRcdFx0XHQpID09IGZhbHNlXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHRoaXMucmV2ZXJ0U2hvd01vdmVPclJlc2l6ZURlbW8oKTtcblx0XHRcdFx0XHRpdGVtUmVzaXplRmxhZyA9IHRydWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtc1tcblx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleFxuXHRcdFx0XHRdLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlKFwiICsgMCArIFwicHgsIFwiICsgMCArIFwicHgpXCI7XG5cdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1zW1xuXHRcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4XG5cdFx0XHRcdF0uY2xhc3NMaXN0LnJlbW92ZShcImxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1BY3RpdmVcIik7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMudGFwSG9sZENhbmNlbCA9IHRydWU7XG5cdFx0XHRjbGVhclRpbWVvdXQodGhpcy5sb25nVG91Y2hDaGVjayk7XG5cblx0XHRcdC8vIGNhbmNlbGluZyB0YXBob2xkXG5cdFx0fVxuXG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0XHRcdFwidG91Y2htb3ZlXCIsXG5cdFx0XHR0aGlzLm9uVG91Y2hNb3ZlQmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHRcdCk7XG5cdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdbMF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0XHRcdFwidG91Y2htb3ZlXCIsXG5cdFx0XHR0aGlzLm9uVG91Y2hNb3ZlQmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHRcdCk7XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0XHRcdFwidG91Y2hlbmRcIixcblx0XHRcdHRoaXMub25Ub3VjaEVuZEJpbmRlZEZ1bmN0aW9uVmFyaWFibGVcblx0XHQpO1xuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcImNvbnRleHRtZW51XCIsXG5cdFx0XHR0aGlzLm9uQ29udGV4dE1lbnVCaW5kZWRGdW5jdGlvblZhcmlhYmxlXG5cdFx0KTtcblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuXHRcdFx0XCJjb250ZXh0bWVudVwiLFxuXHRcdFx0dGhpcy5vbkl0ZW1Ub3VjaENvbnRleHRNZW51QmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHRcdCk7XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0XHRcdFwidG91Y2hjYW5jZWxcIixcblx0XHRcdHRoaXMub25Ub3VjaENhbmNlbEJpbmRlZEZ1bmN0aW9uVmFyaWFibGVcblx0XHQpO1xuXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcInRvdWNoc3RhcnRcIixcblx0XHRcdHRoaXMub25MaW1iZXJHcmlkVG91Y2hTdGFydEZ1bmN0aW9uVmFyaWFibGVcblx0XHQpO1xuXG5cdFx0dGhpcy4kYm9keVswXS5jbGFzc0xpc3QucmVtb3ZlKFxuXHRcdFx0XCJsaW1iZXJHcmlkVmlld0JvZHlUYWdTdGF0ZUVsZW1lbnREcmFnZ2luZ09yUmVzaXppbmdcIlxuXHRcdCk7XG5cdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdNb3ZlR3VpZGVbMF0uY2xhc3NMaXN0LnJlbW92ZShcblx0XHRcdFwibGltYmVyR3JpZFZpZXdNb3ZlR3VpZGVBY3RpdmVcIlxuXHRcdCk7XG5cblx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0hlaWdodEFkanVzdEd1aWRlWzBdLmNsYXNzTGlzdC5yZW1vdmUoXG5cdFx0XHRcImxpbWJlckdyaWRWaWV3SGVpZ2h0QWRqdXN0R3VpZGVBY3RpdmVcIlxuXHRcdCk7XG5cblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdC8vXG5cdFx0aWYgKFxuXHRcdFx0dGhpcy5jYWxsYmFja3MubW92ZUNvbXBsZXRlQ2FsbGJhY2sgIT0gdW5kZWZpbmVkICYmXG5cdFx0XHR0aGlzLmNhbGxiYWNrcy5tb3ZlQ29tcGxldGVDYWxsYmFjayAhPSBudWxsXG5cdFx0KSB7XG5cdFx0XHRpZiAoaXRlbU1vdmVGbGFnID09IHRydWUpIHtcblx0XHRcdFx0dXBkYXRlZENvb3JkaW5hdGVzLndpZHRoID0gdGhpcy5wb3NpdGlvbkRhdGFbXG5cdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhcblx0XHRcdFx0XS53aWR0aDtcblx0XHRcdFx0dXBkYXRlZENvb3JkaW5hdGVzLmhlaWdodCA9IHRoaXMucG9zaXRpb25EYXRhW1xuXHRcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4XG5cdFx0XHRcdF0uaGVpZ2h0O1xuXHRcdFx0XHR0aGlzLmNhbGxiYWNrcy5tb3ZlQ29tcGxldGVDYWxsYmFjayhcblx0XHRcdFx0XHR0cnVlLFxuXHRcdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4LFxuXHRcdFx0XHRcdHVwZGF0ZWRDb29yZGluYXRlc1xuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIGlmICh0aGlzLnVzZXJBY3Rpb25EYXRhLnR5cGUgPT0gXCJtb3ZlXCIpIHtcblx0XHRcdFx0dGhpcy5jYWxsYmFja3MubW92ZUNvbXBsZXRlQ2FsbGJhY2soXG5cdFx0XHRcdFx0ZmFsc2UsXG5cdFx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXgsXG5cdFx0XHRcdFx0ZXZlbnRcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKFxuXHRcdFx0dGhpcy5jYWxsYmFja3MucmVzaXplQ29tcGxldGVDYWxsYmFjayAhPSB1bmRlZmluZWQgJiZcblx0XHRcdHRoaXMuY2FsbGJhY2tzLnJlc2l6ZUNvbXBsZXRlQ2FsbGJhY2sgIT0gbnVsbFxuXHRcdCkge1xuXHRcdFx0aWYgKGl0ZW1SZXNpemVGbGFnID09IHRydWUpIHtcblx0XHRcdFx0dGhpcy5jYWxsYmFja3MucmVzaXplQ29tcGxldGVDYWxsYmFjayhcblx0XHRcdFx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleCxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR4OiB0aGlzLnBvc2l0aW9uRGF0YVt0aGlzLnVzZXJBY3Rpb25EYXRhLml0ZW1JbmRleF0ueCxcblx0XHRcdFx0XHRcdHk6IHRoaXMucG9zaXRpb25EYXRhW3RoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4XS55LFxuXHRcdFx0XHRcdFx0aGVpZ2h0OiBuZXdIZWlnaHQsXG5cdFx0XHRcdFx0XHR3aWR0aDogbmV3V2lkdGhcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vXG5cblx0XHR0aGlzLnVzZXJBY3Rpb25EYXRhID0gbnVsbDtcblx0fTtcblxuXHRMaW1iZXJHcmlkVmlldy5wcm90b3R5cGUub25Db250ZXh0TWVudSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0Y2xlYXJUaW1lb3V0KHRoaXMuc2hvd01vdmVEZW1vVGltZU91dFZhcmlhYmxlKTtcblx0XHRjbGVhclRpbWVvdXQodGhpcy5zaG93UmVzaXplRGVtb1RpbWVPdXRWYXJpYWJsZSk7XG5cblx0XHR0aGlzLnJldmVydFNob3dNb3ZlT3JSZXNpemVEZW1vKCk7XG5cblx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtc1tcblx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4XG5cdFx0XS5jbGFzc0xpc3QucmVtb3ZlKFwibGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbUFjdGl2ZVwiKTtcblxuXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3Qm9keVBzZXVkb0l0ZW1zW1xuXHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhcblx0XHRdLmNsYXNzTGlzdC5yZW1vdmUoXCJsaW1iZXJHcmlkVmlld0JvZHlQc2V1ZG9JdGVtQWN0aXZlXCIpO1xuXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3Qm9keVBzZXVkb0l0ZW1zW1xuXHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhcblx0XHRdLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlKFwiICsgMCArIFwicHgsIFwiICsgMCArIFwicHgpXCI7XG5cblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuXHRcdFx0XCJtb3VzZW1vdmVcIixcblx0XHRcdHRoaXMub25Nb3VzZU1vdmVCaW5kZWRGdW5jdGlvblZhcmlhYmxlXG5cdFx0KTtcblx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5yZW1vdmVFdmVudExpc3RlbmVyKFxuXHRcdFx0XCJtb3VzZW1vdmVcIixcblx0XHRcdHRoaXMub25Nb3VzZU1vdmVCaW5kZWRGdW5jdGlvblZhcmlhYmxlXG5cdFx0KTtcblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuXHRcdFx0XCJtb3VzZXVwXCIsXG5cdFx0XHR0aGlzLm9uTW91c2VVcEJpbmRlZEZ1bmN0aW9uVmFyaWFibGVcblx0XHQpO1xuXG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0XHRcdFwidG91Y2htb3ZlXCIsXG5cdFx0XHR0aGlzLm9uVG91Y2hNb3ZlQmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHRcdCk7XG5cdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdbMF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0XHRcdFwidG91Y2htb3ZlXCIsXG5cdFx0XHR0aGlzLm9uVG91Y2hNb3ZlQmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHRcdCk7XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0XHRcdFwidG91Y2hlbmRcIixcblx0XHRcdHRoaXMub25Ub3VjaEVuZEJpbmRlZEZ1bmN0aW9uVmFyaWFibGVcblx0XHQpO1xuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcImNvbnRleHRtZW51XCIsXG5cdFx0XHR0aGlzLm9uSXRlbVRvdWNoQ29udGV4dE1lbnVCaW5kZWRGdW5jdGlvblZhcmlhYmxlXG5cdFx0KTtcblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuXHRcdFx0XCJ0b3VjaGNhbmNlbFwiLFxuXHRcdFx0dGhpcy5vblRvdWNoQ2FuY2VsQmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHRcdCk7XG5cblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuXHRcdFx0XCJjb250ZXh0bWVudVwiLFxuXHRcdFx0dGhpcy5vbkNvbnRleHRNZW51QmluZGVkRnVuY3Rpb25WYXJpYWJsZVxuXHRcdCk7XG5cblx0XHR0aGlzLiRib2R5WzBdLmNsYXNzTGlzdC5yZW1vdmUoXG5cdFx0XHRcImxpbWJlckdyaWRWaWV3Qm9keVRhZ1N0YXRlRWxlbWVudERyYWdnaW5nT3JSZXNpemluZ1wiXG5cdFx0KTtcblx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld01vdmVHdWlkZVswXS5jbGFzc0xpc3QucmVtb3ZlKFxuXHRcdFx0XCJsaW1iZXJHcmlkVmlld01vdmVHdWlkZUFjdGl2ZVwiXG5cdFx0KTtcblxuXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3SGVpZ2h0QWRqdXN0R3VpZGVbMF0uY2xhc3NMaXN0LnJlbW92ZShcblx0XHRcdFwibGltYmVyR3JpZFZpZXdIZWlnaHRBZGp1c3RHdWlkZUFjdGl2ZVwiXG5cdFx0KTtcblxuXHRcdHRoaXMudXNlckFjdGlvbkRhdGEgPSBudWxsO1xuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0fTtcblxuXHRMaW1iZXJHcmlkVmlldy5wcm90b3R5cGUub25JdGVtVG91Y2hDb250ZXh0TWVudSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0fTtcblxuXHRMaW1iZXJHcmlkVmlldy5wcm90b3R5cGUub25Ub3VjaENhbmNlbCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0dGhpcy5vbkNvbnRleHRNZW51KCk7XG5cdFx0dGhpcy50YXBIb2xkVGltZXJDb21wbGV0ZSA9IGZhbHNlO1xuXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcInRvdWNoc3RhcnRcIixcblx0XHRcdHRoaXMub25MaW1iZXJHcmlkVG91Y2hTdGFydEZ1bmN0aW9uVmFyaWFibGVcblx0XHQpO1xuXHR9O1xuXG5cdExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5jYWxjdWxhdGVNb3VzZVBvc09uTGltYmVyR3JpZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0dmFyIGxpbWJlckdyaWRWaWV3UG9zaXRpb24gPSB0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRpZiAoXG5cdFx0XHRldmVudC5jbGllbnRYID49IGxpbWJlckdyaWRWaWV3UG9zaXRpb24ubGVmdCAmJlxuXHRcdFx0ZXZlbnQuY2xpZW50WCA8PVxuXHRcdFx0XHRsaW1iZXJHcmlkVmlld1Bvc2l0aW9uLmxlZnQgKyBsaW1iZXJHcmlkVmlld1Bvc2l0aW9uLndpZHRoICYmXG5cdFx0XHQoZXZlbnQuY2xpZW50WSA+PSBsaW1iZXJHcmlkVmlld1Bvc2l0aW9uLnRvcCAmJlxuXHRcdFx0XHRldmVudC5jbGllbnRZIDw9XG5cdFx0XHRcdFx0bGltYmVyR3JpZFZpZXdQb3NpdGlvbi50b3AgKyBsaW1iZXJHcmlkVmlld1Bvc2l0aW9uLmhlaWdodClcblx0XHQpIHtcblx0XHRcdHZhciBzY3JvbGxUb3AgPSB0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5zY3JvbGxUb3A7XG5cdFx0XHR2YXIgc2Nyb2xsTGVmdCA9IHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLnNjcm9sbExlZnQ7XG5cblx0XHRcdHZhciBtb3VzZVhPbkxpbWJlckdyaWRWaWV3ID1cblx0XHRcdFx0ZXZlbnQuY2xpZW50WCAtXG5cdFx0XHRcdGxpbWJlckdyaWRWaWV3UG9zaXRpb24ubGVmdCAtXG5cdFx0XHRcdHRoaXMuUEFERElOR19MRUZUICtcblx0XHRcdFx0c2Nyb2xsTGVmdDtcblx0XHRcdHZhciBtb3VzZVlPbkxpbWJlckdyaWRWaWV3ID1cblx0XHRcdFx0ZXZlbnQuY2xpZW50WSAtXG5cdFx0XHRcdGxpbWJlckdyaWRWaWV3UG9zaXRpb24udG9wIC1cblx0XHRcdFx0dGhpcy5QQURESU5HX1RPUCArXG5cdFx0XHRcdHNjcm9sbFRvcDtcblxuXHRcdFx0aWYgKG1vdXNlWE9uTGltYmVyR3JpZFZpZXcgPCAwIHx8IG1vdXNlWU9uTGltYmVyR3JpZFZpZXcgPCAwKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB7IHg6IG1vdXNlWE9uTGltYmVyR3JpZFZpZXcsIHk6IG1vdXNlWU9uTGltYmVyR3JpZFZpZXcgfTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gbW91c2UgcG9pbnRlciBOT1QgaW5zaWRlIGxpbWJlckdyaWRWaWV3XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9O1xuXG5cdExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5jYWxjdWxhdGVUb3VjaFBvc09uTGltYmVyR3JpZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0dmFyIGxpbWJlckdyaWRWaWV3UG9zaXRpb24gPSB0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuXHRcdGlmIChldmVudC50eXBlID09IFwidG91Y2hlbmRcIikge1xuXHRcdFx0dmFyIHRvdWNoID0ge1xuXHRcdFx0XHRjbGllbnRYOiBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYLFxuXHRcdFx0XHRjbGllbnRZOiBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZXG5cdFx0XHR9O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgdG91Y2ggPSB7XG5cdFx0XHRcdGNsaWVudFg6IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCxcblx0XHRcdFx0Y2xpZW50WTogZXZlbnQudG91Y2hlc1swXS5jbGllbnRZXG5cdFx0XHR9O1xuXHRcdH1cblx0XHRpZiAoXG5cdFx0XHR0b3VjaC5jbGllbnRYID49IGxpbWJlckdyaWRWaWV3UG9zaXRpb24ubGVmdCAmJlxuXHRcdFx0dG91Y2guY2xpZW50WCA8PVxuXHRcdFx0XHRsaW1iZXJHcmlkVmlld1Bvc2l0aW9uLmxlZnQgKyBsaW1iZXJHcmlkVmlld1Bvc2l0aW9uLndpZHRoICYmXG5cdFx0XHQodG91Y2guY2xpZW50WSA+PSBsaW1iZXJHcmlkVmlld1Bvc2l0aW9uLnRvcCAmJlxuXHRcdFx0XHR0b3VjaC5jbGllbnRZIDw9XG5cdFx0XHRcdFx0bGltYmVyR3JpZFZpZXdQb3NpdGlvbi50b3AgKyBsaW1iZXJHcmlkVmlld1Bvc2l0aW9uLmhlaWdodClcblx0XHQpIHtcblx0XHRcdHZhciBzY3JvbGxUb3AgPSB0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5zY3JvbGxUb3A7XG5cdFx0XHR2YXIgc2Nyb2xsTGVmdCA9IHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLnNjcm9sbExlZnQ7XG5cblx0XHRcdHZhciB0b3VjaFhPbkxpbWJlckdyaWRWaWV3ID1cblx0XHRcdFx0dG91Y2guY2xpZW50WCAtXG5cdFx0XHRcdGxpbWJlckdyaWRWaWV3UG9zaXRpb24ubGVmdCAtXG5cdFx0XHRcdHRoaXMuUEFERElOR19MRUZUICtcblx0XHRcdFx0c2Nyb2xsTGVmdDtcblx0XHRcdHZhciB0b3VjaFlPbkxpbWJlckdyaWRWaWV3ID1cblx0XHRcdFx0dG91Y2guY2xpZW50WSAtXG5cdFx0XHRcdGxpbWJlckdyaWRWaWV3UG9zaXRpb24udG9wIC1cblx0XHRcdFx0dGhpcy5QQURESU5HX1RPUCArXG5cdFx0XHRcdHNjcm9sbFRvcDtcblxuXHRcdFx0aWYgKHRvdWNoWE9uTGltYmVyR3JpZFZpZXcgPCAwIHx8IHRvdWNoWU9uTGltYmVyR3JpZFZpZXcgPCAwKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB7IHg6IHRvdWNoWE9uTGltYmVyR3JpZFZpZXcsIHk6IHRvdWNoWU9uTGltYmVyR3JpZFZpZXcgfTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gdG91Y2ggTk9UIGluc2lkZSBsaW1iZXJHcmlkVmlld1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fTtcblxuXHRMaW1iZXJHcmlkVmlldy5wcm90b3R5cGUuY2FsY3VsYXRlVG91Y2hQb3NPbkxpbWJlckdyaWRJdGVtID0gZnVuY3Rpb24oXG5cdFx0ZXZlbnRcblx0KSB7XG5cdFx0dmFyIGxpbWJlckdyaWRWaWV3SXRlbVBvc2l0aW9uID0gdGhpcy4kbGltYmVyR3JpZFZpZXdJdGVtc1tcblx0XHRcdGV2ZW50LmN1cnJlbnRUYXJnZXQuYXR0cmlidXRlc1tcImRhdGEtaW5kZXhcIl0udmFsdWVcblx0XHRdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG5cdFx0aWYgKFxuXHRcdFx0ZXZlbnQudG91Y2hlc1swXS5jbGllbnRYID49IGxpbWJlckdyaWRWaWV3SXRlbVBvc2l0aW9uLmxlZnQgJiZcblx0XHRcdGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCA8PVxuXHRcdFx0XHRsaW1iZXJHcmlkVmlld0l0ZW1Qb3NpdGlvbi5sZWZ0ICtcblx0XHRcdFx0XHRsaW1iZXJHcmlkVmlld0l0ZW1Qb3NpdGlvbi53aWR0aCAmJlxuXHRcdFx0KGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSA+PSBsaW1iZXJHcmlkVmlld0l0ZW1Qb3NpdGlvbi50b3AgJiZcblx0XHRcdFx0ZXZlbnQudG91Y2hlc1swXS5jbGllbnRZIDw9XG5cdFx0XHRcdFx0bGltYmVyR3JpZFZpZXdJdGVtUG9zaXRpb24udG9wICtcblx0XHRcdFx0XHRcdGxpbWJlckdyaWRWaWV3SXRlbVBvc2l0aW9uLmhlaWdodClcblx0XHQpIHtcblx0XHRcdHZhciB0b3VjaFhPbkxpbWJlckdyaWRWaWV3ID1cblx0XHRcdFx0ZXZlbnQudG91Y2hlc1swXS5jbGllbnRYIC0gbGltYmVyR3JpZFZpZXdJdGVtUG9zaXRpb24ubGVmdDtcblx0XHRcdHZhciB0b3VjaFlPbkxpbWJlckdyaWRWaWV3ID1cblx0XHRcdFx0ZXZlbnQudG91Y2hlc1swXS5jbGllbnRZIC0gbGltYmVyR3JpZFZpZXdJdGVtUG9zaXRpb24udG9wO1xuXG5cdFx0XHRyZXR1cm4geyB4OiB0b3VjaFhPbkxpbWJlckdyaWRWaWV3LCB5OiB0b3VjaFlPbkxpbWJlckdyaWRWaWV3IH07XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHRvdWNoIE5PVCBpbnNpZGUgbGltYmVyR3JpZFZpZXdJdGVtXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9O1xuXG5cdExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5jaGVja05ld01vdmVDb29yZGluYXRlcyA9IGZ1bmN0aW9uKFxuXHRcdGluZGV4T2ZNb3ZlZEl0ZW0sXG5cdFx0bW91c2VQb3NpdGlvbnNcblx0KSB7XG5cdFx0aWYgKG1vdXNlUG9zaXRpb25zID09IGZhbHNlKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0dmFyIHggPSBtb3VzZVBvc2l0aW9ucy54O1xuXHRcdHZhciB5ID0gbW91c2VQb3NpdGlvbnMueTtcblx0XHR2YXIgd2lkdGhPZk1vdmVkSXRlbSA9IHRoaXMucG9zaXRpb25EYXRhW2luZGV4T2ZNb3ZlZEl0ZW1dLndpZHRoO1xuXHRcdHZhciBoZWlnaHRPZk1vdmVkSXRlbSA9IHRoaXMucG9zaXRpb25EYXRhW2luZGV4T2ZNb3ZlZEl0ZW1dLmhlaWdodDtcblxuXHRcdHZhciBpc0luc2lkZSA9IGZhbHNlO1xuXHRcdHZhciBpbmRleE9mT3ZlcmxhcHBpbmdJdGVtID0gbnVsbDtcblx0XHR2YXIgbGVuZ3RoXzAgPSB0aGlzLnBvc2l0aW9uRGF0YS5sZW5ndGg7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbVRvcExlZnQgPSBbdGhpcy5wb3NpdGlvbkRhdGFbaV0ueCwgdGhpcy5wb3NpdGlvbkRhdGFbaV0ueV07XG5cdFx0XHR2YXIgaXRlbVRvcFJpZ2h0ID0gW1xuXHRcdFx0XHR0aGlzLnBvc2l0aW9uRGF0YVtpXS54ICsgdGhpcy5wb3NpdGlvbkRhdGFbaV0ud2lkdGgsXG5cdFx0XHRcdHRoaXMucG9zaXRpb25EYXRhW2ldLnlcblx0XHRcdF07XG5cdFx0XHR2YXIgaXRlbUJvdHRvbUxlZnQgPSBbXG5cdFx0XHRcdHRoaXMucG9zaXRpb25EYXRhW2ldLngsXG5cdFx0XHRcdHRoaXMucG9zaXRpb25EYXRhW2ldLnkgKyB0aGlzLnBvc2l0aW9uRGF0YVtpXS5oZWlnaHRcblx0XHRcdF07XG5cdFx0XHR2YXIgaXRlbUJvdHRvbVJpZ2h0ID0gW1xuXHRcdFx0XHR0aGlzLnBvc2l0aW9uRGF0YVtpXS54ICsgdGhpcy5wb3NpdGlvbkRhdGFbaV0ud2lkdGgsXG5cdFx0XHRcdHRoaXMucG9zaXRpb25EYXRhW2ldLnkgKyB0aGlzLnBvc2l0aW9uRGF0YVtpXS5oZWlnaHRcblx0XHRcdF07XG5cblx0XHRcdGlmIChcblx0XHRcdFx0eCA+PSBpdGVtVG9wTGVmdFswXSAmJlxuXHRcdFx0XHR4IDw9IGl0ZW1Ub3BSaWdodFswXSAmJlxuXHRcdFx0XHR4ID49IGl0ZW1Cb3R0b21MZWZ0WzBdICYmXG5cdFx0XHRcdHggPD0gaXRlbUJvdHRvbVJpZ2h0WzBdICYmXG5cdFx0XHRcdHkgPj0gaXRlbVRvcExlZnRbMV0gJiZcblx0XHRcdFx0eSA8PSBpdGVtQm90dG9tTGVmdFsxXSAmJlxuXHRcdFx0XHR5ID49IGl0ZW1Ub3BSaWdodFsxXSAmJlxuXHRcdFx0XHR5IDw9IGl0ZW1Cb3R0b21SaWdodFsxXVxuXHRcdFx0KSB7XG5cdFx0XHRcdGlzSW5zaWRlID0gdHJ1ZTtcblx0XHRcdFx0aW5kZXhPZk92ZXJsYXBwaW5nSXRlbSA9IGk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgbGluZXMgPSB0aGlzLmdldExpbmVzKHRoaXMucG9zaXRpb25EYXRhW2ldKTtcblxuXHRcdFx0dmFyIHRvcExpbmUgPSBsaW5lc1swXTtcblx0XHRcdHZhciByaWdodExpbmUgPSBsaW5lc1sxXTtcblx0XHRcdHZhciBib3R0b21MaW5lID0gbGluZXNbMl07XG5cdFx0XHR2YXIgbGVmdExpbmUgPSBsaW5lc1szXTtcblxuXHRcdFx0Ly8gZm9yIFRPUCBMRUZUIENvcm5lclxuXHRcdFx0aWYgKFxuXHRcdFx0XHR5IDwgdG9wTGluZVswXVsxXSAmJlxuXHRcdFx0XHR4ID49IHRvcExpbmVbMF1bMF0gLSB0aGlzLk1BUkdJTiAmJlxuXHRcdFx0XHR4IDw9IHRvcExpbmVbMV1bMF0gKyB0aGlzLk1BUkdJTlxuXHRcdFx0KSB7XG5cdFx0XHRcdHZhciBkaWZmID0gdG9wTGluZVswXVsxXSAtIHk7XG5cdFx0XHRcdGlmIChkaWZmIDw9IHRoaXMuTUFSR0lOKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmIChcblx0XHRcdFx0eSA+IGJvdHRvbUxpbmVbMF1bMV0gJiZcblx0XHRcdFx0eCA+PSBib3R0b21MaW5lWzBdWzBdIC0gdGhpcy5NQVJHSU4gJiZcblx0XHRcdFx0eCA8PSBib3R0b21MaW5lWzFdWzBdICsgdGhpcy5NQVJHSU5cblx0XHRcdCkge1xuXHRcdFx0XHR2YXIgZGlmZiA9IHkgLSBib3R0b21MaW5lWzBdWzFdO1xuXHRcdFx0XHRpZiAoZGlmZiA8PSB0aGlzLk1BUkdJTikge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoXG5cdFx0XHRcdHggPiByaWdodExpbmVbMF1bMF0gJiZcblx0XHRcdFx0eSA+PSByaWdodExpbmVbMF1bMV0gLSB0aGlzLk1BUkdJTiAmJlxuXHRcdFx0XHR5IDw9IHJpZ2h0TGluZVsxXVsxXSArIHRoaXMuTUFSR0lOXG5cdFx0XHQpIHtcblx0XHRcdFx0dmFyIGRpZmYgPSB4IC0gcmlnaHRMaW5lWzBdWzBdO1xuXHRcdFx0XHRpZiAoZGlmZiA8PSB0aGlzLk1BUkdJTikge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoXG5cdFx0XHRcdHggPCBsZWZ0TGluZVswXVswXSAmJlxuXHRcdFx0XHR5ID49IGxlZnRMaW5lWzBdWzFdIC0gdGhpcy5NQVJHSU4gJiZcblx0XHRcdFx0eSA8PSBsZWZ0TGluZVsxXVsxXSArIHRoaXMuTUFSR0lOXG5cdFx0XHQpIHtcblx0XHRcdFx0dmFyIGRpZmYgPSBsZWZ0TGluZVswXVswXSAtIHg7XG5cdFx0XHRcdGlmIChkaWZmIDw9IHRoaXMuTUFSR0lOKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyBmb3IgVE9QIExFRlQgQ29ybmVyIEVORFxuXG5cdFx0XHQvLyBmb3IgVE9QIFJJR0hUIENvcm5lclxuXHRcdFx0aWYgKFxuXHRcdFx0XHR5ID4gYm90dG9tTGluZVswXVsxXSAmJlxuXHRcdFx0XHR4ICsgd2lkdGhPZk1vdmVkSXRlbSA+PSBib3R0b21MaW5lWzBdWzBdIC0gdGhpcy5NQVJHSU4gJiZcblx0XHRcdFx0eCArIHdpZHRoT2ZNb3ZlZEl0ZW0gPD0gYm90dG9tTGluZVsxXVswXSArIHRoaXMuTUFSR0lOXG5cdFx0XHQpIHtcblx0XHRcdFx0dmFyIGRpZmYgPSB5IC0gYm90dG9tTGluZVswXVsxXTtcblx0XHRcdFx0aWYgKGRpZmYgPD0gdGhpcy5NQVJHSU4pIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vIGZvciBUT1AgUklHSFQgQ29ybmVyIEVORFxuXG5cdFx0XHQvLyBmb3IgQk9UVE9NIExFRlQgQ29ybmVyXG5cdFx0XHRpZiAoXG5cdFx0XHRcdHggPiByaWdodExpbmVbMF1bMF0gJiZcblx0XHRcdFx0eSArIGhlaWdodE9mTW92ZWRJdGVtID49IHJpZ2h0TGluZVswXVsxXSAtIHRoaXMuTUFSR0lOICYmXG5cdFx0XHRcdHkgKyBoZWlnaHRPZk1vdmVkSXRlbSA8PSByaWdodExpbmVbMV1bMV0gKyB0aGlzLk1BUkdJTlxuXHRcdFx0KSB7XG5cdFx0XHRcdHZhciBkaWZmID0geCAtIHJpZ2h0TGluZVswXVswXTtcblx0XHRcdFx0aWYgKGRpZmYgPD0gdGhpcy5NQVJHSU4pIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vIGZvciBCT1RUT00gTEVGVCBDb3JuZXIgRU5EXG5cblx0XHRcdGlmIChcblx0XHRcdFx0KHkgPiBib3R0b21MaW5lWzBdWzFdICYmXG5cdFx0XHRcdFx0Ym90dG9tTGluZVswXVswXSA+PSB4ICYmXG5cdFx0XHRcdFx0Ym90dG9tTGluZVswXVswXSA8PSB4ICsgd2lkdGhPZk1vdmVkSXRlbSkgfHxcblx0XHRcdFx0KHkgPiBib3R0b21MaW5lWzBdWzFdICYmXG5cdFx0XHRcdFx0Ym90dG9tTGluZVsxXVswXSA+PSB4ICYmXG5cdFx0XHRcdFx0Ym90dG9tTGluZVsxXVswXSA8PSB4ICsgd2lkdGhPZk1vdmVkSXRlbSlcblx0XHRcdCkge1xuXHRcdFx0XHR2YXIgZGlmZiA9IHkgLSBib3R0b21MaW5lWzBdWzFdO1xuXHRcdFx0XHRpZiAoZGlmZiA8PSB0aGlzLk1BUkdJTikge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoXG5cdFx0XHRcdCh4ID4gcmlnaHRMaW5lWzBdWzBdICYmXG5cdFx0XHRcdFx0cmlnaHRMaW5lWzBdWzFdID49IHkgJiZcblx0XHRcdFx0XHRyaWdodExpbmVbMF1bMV0gPD0geSArIGhlaWdodE9mTW92ZWRJdGVtKSB8fFxuXHRcdFx0XHQoeCA+IHJpZ2h0TGluZVswXVswXSAmJlxuXHRcdFx0XHRcdHJpZ2h0TGluZVsxXVsxXSA+PSB5ICYmXG5cdFx0XHRcdFx0cmlnaHRMaW5lWzFdWzFdIDw9IHkgKyBoZWlnaHRPZk1vdmVkSXRlbSlcblx0XHRcdCkge1xuXHRcdFx0XHR2YXIgZGlmZiA9IHggLSByaWdodExpbmVbMF1bMF07XG5cdFx0XHRcdGlmIChkaWZmIDw9IHRoaXMuTUFSR0lOKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGluZGV4T2ZPdmVybGFwcGluZ0l0ZW0gPT0gbnVsbCkge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHR4ICtcblx0XHRcdFx0XHR0aGlzLnBvc2l0aW9uRGF0YVtpbmRleE9mTW92ZWRJdGVtXS53aWR0aCArXG5cdFx0XHRcdFx0dGhpcy5nZXRNYXJnaW5BdFBvaW50KHgpID5cblx0XHRcdFx0dGhpcy5XSURUSFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBtb3VzZVBvc2l0aW9ucztcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHR0aGlzLnBvc2l0aW9uRGF0YVtpbmRleE9mT3ZlcmxhcHBpbmdJdGVtXS54ICtcblx0XHRcdFx0XHR0aGlzLnBvc2l0aW9uRGF0YVtpbmRleE9mTW92ZWRJdGVtXS53aWR0aCArXG5cdFx0XHRcdFx0dGhpcy5nZXRNYXJnaW5BdFBvaW50KFxuXHRcdFx0XHRcdFx0dGhpcy5wb3NpdGlvbkRhdGFbaW5kZXhPZk92ZXJsYXBwaW5nSXRlbV0ueFxuXHRcdFx0XHRcdCkgPlxuXHRcdFx0XHR0aGlzLldJRFRIXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR4OiB4LFxuXHRcdFx0XHRcdHk6IHksXG5cdFx0XHRcdFx0cmV2aXNlZENvb3JkaW5hdGVzOiB7XG5cdFx0XHRcdFx0XHR4OiB0aGlzLnBvc2l0aW9uRGF0YVtpbmRleE9mT3ZlcmxhcHBpbmdJdGVtXS54LFxuXHRcdFx0XHRcdFx0eTogdGhpcy5wb3NpdGlvbkRhdGFbaW5kZXhPZk92ZXJsYXBwaW5nSXRlbV0ueVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0TGltYmVyR3JpZFZpZXcucHJvdG90eXBlLnNob3dNb3ZlRGVtbyA9IGZ1bmN0aW9uKGluZGV4LCBtb3VzZVBvc2l0aW9uKSB7XG5cdFx0aWYgKG1vdXNlUG9zaXRpb24gIT0gZmFsc2UpIHtcblx0XHRcdHZhciBuZXdNb3ZlQ29vcmRpbmF0ZXMgPSB0aGlzLmNoZWNrTmV3TW92ZUNvb3JkaW5hdGVzKFxuXHRcdFx0XHRpbmRleCxcblx0XHRcdFx0bW91c2VQb3NpdGlvblxuXHRcdFx0KTtcblx0XHRcdGlmIChuZXdNb3ZlQ29vcmRpbmF0ZXMgPT0gZmFsc2UpIHtcblx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdCb2R5UHNldWRvSXRlbXNbaW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoXG5cdFx0XHRcdFx0XCJsaW1iZXJHcmlkVmlld0JvZHlQc2V1ZG9JdGVtTW92ZUFsbG93XCJcblx0XHRcdFx0KTtcblx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdCb2R5UHNldWRvSXRlbXNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoXG5cdFx0XHRcdFx0XCJsaW1iZXJHcmlkVmlld0JvZHlQc2V1ZG9JdGVtTW92ZURpc2FsbG93XCJcblx0XHRcdFx0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmIChuZXdNb3ZlQ29vcmRpbmF0ZXMuaGFzT3duUHJvcGVydHkoXCJyZXZpc2VkQ29vcmRpbmF0ZXNcIikpIHtcblx0XHRcdFx0XHR0aGlzLm1vdmVQbGFuZURlbW8oXG5cdFx0XHRcdFx0XHRpbmRleCxcblx0XHRcdFx0XHRcdG5ld01vdmVDb29yZGluYXRlcy5yZXZpc2VkQ29vcmRpbmF0ZXMueCxcblx0XHRcdFx0XHRcdG5ld01vdmVDb29yZGluYXRlcy5yZXZpc2VkQ29vcmRpbmF0ZXMueVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdNb3ZlR3VpZGVbMF0uc3R5bGUudHJhbnNmb3JtID1cblx0XHRcdFx0XHRcdFwidHJhbnNsYXRlKFwiICtcblx0XHRcdFx0XHRcdG5ld01vdmVDb29yZGluYXRlcy5yZXZpc2VkQ29vcmRpbmF0ZXMueCArXG5cdFx0XHRcdFx0XHRcInB4LCBcIiArXG5cdFx0XHRcdFx0XHRuZXdNb3ZlQ29vcmRpbmF0ZXMucmV2aXNlZENvb3JkaW5hdGVzLnkgK1xuXHRcdFx0XHRcdFx0XCJweClcIjtcblx0XHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld01vdmVHdWlkZVswXS5jbGFzc0xpc3QuYWRkKFxuXHRcdFx0XHRcdFx0XCJsaW1iZXJHcmlkVmlld01vdmVHdWlkZUFjdGl2ZVwiXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLm1vdmVQbGFuZURlbW8oXG5cdFx0XHRcdFx0XHRpbmRleCxcblx0XHRcdFx0XHRcdG5ld01vdmVDb29yZGluYXRlcy54LFxuXHRcdFx0XHRcdFx0bmV3TW92ZUNvb3JkaW5hdGVzLnlcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3TW92ZUd1aWRlWzBdLnN0eWxlLnRyYW5zZm9ybSA9XG5cdFx0XHRcdFx0XHRcInRyYW5zbGF0ZShcIiArXG5cdFx0XHRcdFx0XHRuZXdNb3ZlQ29vcmRpbmF0ZXMueCArXG5cdFx0XHRcdFx0XHRcInB4LCBcIiArXG5cdFx0XHRcdFx0XHRuZXdNb3ZlQ29vcmRpbmF0ZXMueSArXG5cdFx0XHRcdFx0XHRcInB4KVwiO1xuXHRcdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3TW92ZUd1aWRlWzBdLmNsYXNzTGlzdC5hZGQoXG5cdFx0XHRcdFx0XHRcImxpbWJlckdyaWRWaWV3TW92ZUd1aWRlQWN0aXZlXCJcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3Qm9keVBzZXVkb0l0ZW1zW2luZGV4XS5jbGFzc0xpc3QucmVtb3ZlKFxuXHRcdFx0XHRcdFwibGltYmVyR3JpZFZpZXdCb2R5UHNldWRvSXRlbU1vdmVEaXNhbGxvd1wiXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3Qm9keVBzZXVkb0l0ZW1zW2luZGV4XS5jbGFzc0xpc3QuYWRkKFxuXHRcdFx0XHRcdFwibGltYmVyR3JpZFZpZXdCb2R5UHNldWRvSXRlbU1vdmVBbGxvd1wiXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3Qm9keVBzZXVkb0l0ZW1zW2luZGV4XS5jbGFzc0xpc3QucmVtb3ZlKFxuXHRcdFx0XHRcImxpbWJlckdyaWRWaWV3Qm9keVBzZXVkb0l0ZW1Nb3ZlQWxsb3dcIlxuXHRcdFx0KTtcblx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3Qm9keVBzZXVkb0l0ZW1zW2luZGV4XS5jbGFzc0xpc3QuYWRkKFxuXHRcdFx0XHRcImxpbWJlckdyaWRWaWV3Qm9keVBzZXVkb0l0ZW1Nb3ZlRGlzYWxsb3dcIlxuXHRcdFx0KTtcblx0XHR9XG5cdH07XG5cblx0TGltYmVyR3JpZFZpZXcucHJvdG90eXBlLnNob3dSZXNpemVEZW1vID0gZnVuY3Rpb24oaW5kZXgsIHdpZHRoLCBoZWlnaHQpIHtcblx0XHRpZiAodGhpcy5yZXNpemVQbGFuZURlbW8oaW5kZXgsIHdpZHRoLCBoZWlnaHQpID09IGZhbHNlKSB7XG5cdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtc1tcblx0XHRcdFx0dGhpcy51c2VyQWN0aW9uRGF0YS5pdGVtSW5kZXhcblx0XHRcdF0uY2xhc3NMaXN0LmFkZChcImxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1SZXNpemVEaXNhbGxvd1wiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbXNbXG5cdFx0XHRcdHRoaXMudXNlckFjdGlvbkRhdGEuaXRlbUluZGV4XG5cdFx0XHRdLmNsYXNzTGlzdC5hZGQoXCJsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtUmVzaXplQWxsb3dcIik7XG5cdFx0fVxuXHR9O1xuXG5cdExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5yZXZlcnRTaG93TW92ZU9yUmVzaXplRGVtbyA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBsZW5ndGhfMCA9IHRoaXMuJGxpbWJlckdyaWRWaWV3SXRlbXMubGVuZ3RoO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdJdGVtc1tpXS5zdHlsZS50cmFuc2Zvcm0gPVxuXHRcdFx0XHRcInRyYW5zbGF0ZShcIiArXG5cdFx0XHRcdHRoaXMucG9zaXRpb25EYXRhW2ldLnggK1xuXHRcdFx0XHRcInB4LCBcIiArXG5cdFx0XHRcdHRoaXMucG9zaXRpb25EYXRhW2ldLnkgK1xuXHRcdFx0XHRcInB4KVwiO1xuXHRcdFx0dGhpcy4kbGltYmVyR3JpZFZpZXdJdGVtc1tpXS5jbGFzc0xpc3QucmVtb3ZlKFxuXHRcdFx0XHRcImxpbWJlckdyaWRWaWV3SXRlbURlbW9cIixcblx0XHRcdFx0XCJsaW1iZXJHcmlkVmlld0l0ZW1SZXNpemluZ1N0YXRlXCJcblx0XHRcdCk7XG5cdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld0dyaWRQc2V1ZG9JdGVtc1tpXS5jbGFzc0xpc3QucmVtb3ZlKFxuXHRcdFx0XHRcImxpbWJlckdyaWRWaWV3R3JpZFBzZXVkb0l0ZW1SZXNpemluZ1N0YXRlXCIsXG5cdFx0XHRcdFwibGltYmVyR3JpZFZpZXdHcmlkUHNldWRvSXRlbUFjdGl2ZVwiXG5cdFx0XHQpO1xuXHRcdH1cblx0fTtcblxuXHRMaW1iZXJHcmlkVmlldy5wcm90b3R5cGUuYWRqdXN0SGVpZ2h0ID0gZnVuY3Rpb24oeU1vdXNlT3JUb3VjaFBvc2l0aW9uKSB7XG5cdFx0dmFyIHNjcm9sbEhlaWdodCA9IHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLnNjcm9sbEhlaWdodDtcblx0XHRpZiAoc2Nyb2xsSGVpZ2h0IC0geU1vdXNlT3JUb3VjaFBvc2l0aW9uIDw9IHRoaXMuQVVUT19TQ1JPTExfUE9JTlQpIHtcblx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3SGVpZ2h0QWRqdXN0R3VpZGVbMF0uc3R5bGUuaGVpZ2h0ID1cblx0XHRcdFx0eU1vdXNlT3JUb3VjaFBvc2l0aW9uICtcblx0XHRcdFx0dGhpcy5NT1ZFX09SX1JFU0laRV9IRUlHSFRfSU5DUkVNRU5UUyArXG5cdFx0XHRcdFwicHhcIjtcblx0XHR9XG5cdH07XG5cblx0TGltYmVyR3JpZFZpZXcucHJvdG90eXBlLmFkanVzdFNjcm9sbCA9IGZ1bmN0aW9uKFxuXHRcdGxpbWJlckdyaWRWaWV3T25WaXNpYmxlQXJlYVksXG5cdFx0bGltYmVyR3JpZFZpZXdIZWlnaHRWaXNpYmxlSGVpZ2h0XG5cdCkge1xuXHRcdHZhciBzY3JvbGxUb3AgPSB0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5zY3JvbGxUb3A7XG5cdFx0Ly8gdmFyIHNjcm9sbExlZnQgPSB0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5zY3JvbGxMZWZ0O1xuXHRcdHZhciBwcm9ncmFtU2Nyb2xsZWQgPSBmYWxzZTtcblx0XHRpZiAobGltYmVyR3JpZFZpZXdPblZpc2libGVBcmVhWSA+IDApIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bGltYmVyR3JpZFZpZXdIZWlnaHRWaXNpYmxlSGVpZ2h0IC1cblx0XHRcdFx0XHRsaW1iZXJHcmlkVmlld09uVmlzaWJsZUFyZWFZIDxcblx0XHRcdFx0dGhpcy5BVVRPX1NDUk9MTF9QT0lOVFxuXHRcdFx0KSB7XG5cdFx0XHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLnNjcm9sbFRvcCA9XG5cdFx0XHRcdFx0c2Nyb2xsVG9wICsgdGhpcy5BVVRPX1NDUk9MTF9ESVNUQU5DRTtcblx0XHRcdFx0cHJvZ3JhbVNjcm9sbGVkID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGlmIChcblx0XHRcdFx0bGltYmVyR3JpZFZpZXdPblZpc2libGVBcmVhWSA8IHRoaXMuSEVJR0hUIC8gMTAgJiZcblx0XHRcdFx0c2Nyb2xsVG9wICE9IDBcblx0XHRcdCkge1xuXHRcdFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5zY3JvbGxUb3AgPVxuXHRcdFx0XHRcdHNjcm9sbFRvcCAtIHRoaXMuQVVUT19TQ1JPTExfRElTVEFOQ0U7XG5cdFx0XHRcdHByb2dyYW1TY3JvbGxlZCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gaWYobGltYmVyR3JpZFZpZXdPblZpc2libGVBcmVhWCA+IDApe1xuXHRcdC8vIFx0aWYoKGxpbWJlckdyaWRWaWV3V2lkdGhWaXNpYmxlV2lkdGggLSBsaW1iZXJHcmlkVmlld09uVmlzaWJsZUFyZWFYKSA8ICh0aGlzLldJRFRILzEwKSl7XG5cdFx0Ly8gXHRcdHRoaXMuJGxpbWJlckdyaWRWaWV3WzBdLnNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0ICsgMTAwO1xuXHRcdC8vIFx0XHR2YXIgcHJvZ3JhbVNjcm9sbGVkID0gdHJ1ZTtcblx0XHQvLyBcdH1cblx0XHQvLyBcdGlmKChsaW1iZXJHcmlkVmlld09uVmlzaWJsZUFyZWFYKSA8ICh0aGlzLldJRFRILzEwKSAmJiBzY3JvbGxMZWZ0ICE9IDApe1xuXHRcdC8vIFx0XHR0aGlzLiRsaW1iZXJHcmlkVmlld1swXS5zY3JvbGxMZWZ0ID0gc2Nyb2xsTGVmdCAtIDEwMDtcblx0XHQvLyBcdFx0dmFyIHByb2dyYW1TY3JvbGxlZCA9IHRydWU7XG5cdFx0Ly8gXHR9XG5cdFx0Ly8gfVxuXHRcdHJldHVybiBwcm9ncmFtU2Nyb2xsZWQ7XG5cdH07XG5cblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gRVZFTlQgSEFORExFUlMgQU5EIENPREUgRk9SIElURU0gSU5URVJBQ1RJT04gRU5EIC0tLS0tLS0tLS0tLS0tLSAvL1xuXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEVTU0VOVElBTFMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cblx0TGltYmVyR3JpZFZpZXcucHJvdG90eXBlLmdldFBsYWluRnJvbTRQb2ludHMgPSBmdW5jdGlvbihwb2ludHNBcnJheSkge1xuXHRcdHZhciBtaW5YID0gLTE7XG5cdFx0dmFyIG1pblkgPSAtMTtcblx0XHR2YXIgbWF4WCA9IC0xO1xuXHRcdHZhciBtYXhZID0gLTE7XG5cdFx0dmFyIGxlbmd0aF8wID0gcG9pbnRzQXJyYXkubGVuZ3RoO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHRcdFx0aWYgKHBvaW50c0FycmF5W2ldWzBdIDwgbWluWCB8fCBtaW5YIDwgMCkge1xuXHRcdFx0XHRtaW5YID0gcG9pbnRzQXJyYXlbaV1bMF07XG5cdFx0XHR9XG5cdFx0XHRpZiAocG9pbnRzQXJyYXlbaV1bMF0gPiBtYXhYKSB7XG5cdFx0XHRcdG1heFggPSBwb2ludHNBcnJheVtpXVswXTtcblx0XHRcdH1cblx0XHRcdGlmIChwb2ludHNBcnJheVtpXVsxXSA8IG1pblkgfHwgbWluWSA8IDApIHtcblx0XHRcdFx0bWluWSA9IHBvaW50c0FycmF5W2ldWzFdO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHBvaW50c0FycmF5W2ldWzFdID4gbWF4WSkge1xuXHRcdFx0XHRtYXhZID0gcG9pbnRzQXJyYXlbaV1bMV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dmFyIHBsYW5lID0ge307XG5cdFx0cGxhbmUueCA9IG1pblg7XG5cdFx0cGxhbmUueSA9IG1pblk7XG5cdFx0cGxhbmUud2lkdGggPSBtYXhYIC0gbWluWDtcblx0XHRwbGFuZS5oZWlnaHQgPSBtYXhZIC0gbWluWTtcblxuXHRcdHJldHVybiBwbGFuZTtcblx0fTtcblxuXHRMaW1iZXJHcmlkVmlldy5wcm90b3R5cGUuZ2V0Q29vcmRpbmF0ZXMgPSBmdW5jdGlvbihpdGVtKSB7XG5cdFx0dmFyIGl0ZW1Ub3BMZWZ0ID0gW2l0ZW0ueCwgaXRlbS55XTtcblx0XHR2YXIgaXRlbVRvcFJpZ2h0ID0gW2l0ZW0ueCArIGl0ZW0ud2lkdGgsIGl0ZW0ueV07XG5cdFx0dmFyIGl0ZW1Cb3R0b21MZWZ0ID0gW2l0ZW0ueCwgaXRlbS55ICsgaXRlbS5oZWlnaHRdO1xuXHRcdHZhciBpdGVtQm90dG9tUmlnaHQgPSBbaXRlbS54ICsgaXRlbS53aWR0aCwgaXRlbS55ICsgaXRlbS5oZWlnaHRdO1xuXG5cdFx0dmFyIGl0ZW1Db29yZGluYXRlc0FyciA9IFtcblx0XHRcdGl0ZW1Ub3BMZWZ0LFxuXHRcdFx0aXRlbVRvcFJpZ2h0LFxuXHRcdFx0aXRlbUJvdHRvbVJpZ2h0LFxuXHRcdFx0aXRlbUJvdHRvbUxlZnRcblx0XHRdO1xuXG5cdFx0cmV0dXJuIGl0ZW1Db29yZGluYXRlc0Fycjtcblx0fTtcblxuXHRMaW1iZXJHcmlkVmlldy5wcm90b3R5cGUuZ2V0TGluZXMgPSBmdW5jdGlvbihpdGVtKSB7XG5cdFx0dmFyIGl0ZW1Ub3BMZWZ0ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShbaXRlbS54LCBpdGVtLnldKSk7XG5cdFx0dmFyIGl0ZW1Ub3BSaWdodCA9IEpTT04ucGFyc2UoXG5cdFx0XHRKU09OLnN0cmluZ2lmeShbaXRlbS54ICsgaXRlbS53aWR0aCwgaXRlbS55XSlcblx0XHQpO1xuXHRcdHZhciBpdGVtQm90dG9tTGVmdCA9IEpTT04ucGFyc2UoXG5cdFx0XHRKU09OLnN0cmluZ2lmeShbaXRlbS54LCBpdGVtLnkgKyBpdGVtLmhlaWdodF0pXG5cdFx0KTtcblx0XHR2YXIgaXRlbUJvdHRvbVJpZ2h0ID0gSlNPTi5wYXJzZShcblx0XHRcdEpTT04uc3RyaW5naWZ5KFtpdGVtLnggKyBpdGVtLndpZHRoLCBpdGVtLnkgKyBpdGVtLmhlaWdodF0pXG5cdFx0KTtcblxuXHRcdHZhciB0b3BMaW5lID0gW2l0ZW1Ub3BMZWZ0LCBpdGVtVG9wUmlnaHRdO1xuXHRcdHZhciByaWdodExpbmUgPSBbaXRlbVRvcFJpZ2h0LCBpdGVtQm90dG9tUmlnaHRdO1xuXHRcdHZhciBib3R0b21MaW5lID0gW2l0ZW1Cb3R0b21MZWZ0LCBpdGVtQm90dG9tUmlnaHRdO1xuXHRcdHZhciBsZWZ0TGluZSA9IFtpdGVtVG9wTGVmdCwgaXRlbUJvdHRvbUxlZnRdO1xuXG5cdFx0dmFyIGFsbExpbmVzID0gW3RvcExpbmUsIHJpZ2h0TGluZSwgYm90dG9tTGluZSwgbGVmdExpbmVdO1xuXG5cdFx0cmV0dXJuIGFsbExpbmVzO1xuXHR9O1xuXG5cdExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5hcmVQbGFpbnNTYW1lID0gZnVuY3Rpb24oQSwgQikge1xuXHRcdGlmIChcblx0XHRcdEEueCA9PSBCLnggJiZcblx0XHRcdEEueSA9PSBCLnkgJiZcblx0XHRcdEEud2lkdGggPT0gQi53aWR0aCAmJlxuXHRcdFx0QS5oZWlnaHQgPT0gQi5oZWlnaHRcblx0XHQpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9O1xuXG5cdExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5hcmVQbGFpbnNJZGVudGljYWwgPSBmdW5jdGlvbihBLCBCKSB7XG5cdFx0aWYgKEEud2lkdGggPT0gQi53aWR0aCAmJiBBLmhlaWdodCA9PSBCLmhlaWdodCkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH07XG5cblx0TGltYmVyR3JpZFZpZXcucHJvdG90eXBlLmlzVmFsaWRQbGFuZSA9IGZ1bmN0aW9uKHBsYW5lKSB7XG5cdFx0aWYgKFxuXHRcdFx0cGxhbmUueCA+PSAwICYmXG5cdFx0XHRwbGFuZS55ID49IDAgJiZcblx0XHRcdHBsYW5lLndpZHRoID4gMCAmJlxuXHRcdFx0cGxhbmUuaGVpZ2h0ID4gMFxuXHRcdCkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH07XG5cblx0TGltYmVyR3JpZFZpZXcucHJvdG90eXBlLnNvcnRQbGFpbnNCeUFyZWEgPSBmdW5jdGlvbihcblx0XHRwbGFuZXMsXG5cdFx0b3JkZXIgPSBcImRlY1wiXG5cdCkge1xuXHRcdGlmIChvcmRlciA9PSBcImFzY1wiKSB7XG5cdFx0XHRwbGFuZXMuc29ydChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0KGEueCArIGEud2lkdGgpICogKGEueSArIGEuaGVpZ2h0KSAtXG5cdFx0XHRcdFx0KGIueCArIGIud2lkdGgpICogKGIueSArIGIuaGVpZ2h0KVxuXHRcdFx0XHQpO1xuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHBsYW5lcy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQoYi54ICsgYi53aWR0aCkgKiAoYi55ICsgYi5oZWlnaHQpIC1cblx0XHRcdFx0XHQoYS54ICsgYS53aWR0aCkgKiAoYS55ICsgYS5oZWlnaHQpXG5cdFx0XHRcdCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcGxhbmVzO1xuXHR9O1xuXG5cdExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5zb3J0UGxhaW5zQnlIZWlnaHQgPSBmdW5jdGlvbihcblx0XHRwbGFuZXMsXG5cdFx0b3JkZXIgPSBcImRlY1wiXG5cdCkge1xuXHRcdGlmIChvcmRlciA9PSBcImFzY1wiKSB7XG5cdFx0XHRwbGFuZXMuc29ydChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHRcdHJldHVybiBhLmhlaWdodCAtIGIuaGVpZ2h0O1xuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHBsYW5lcy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdFx0cmV0dXJuIGIuaGVpZ2h0IC0gYS5oZWlnaHQ7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcGxhbmVzO1xuXHR9O1xuXG5cdExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5zb3J0UGxhaW5zQnlEZXB0aCA9IGZ1bmN0aW9uKFxuXHRcdHBsYW5lcyxcblx0XHRvcmRlciA9IFwiZGVjXCJcblx0KSB7XG5cdFx0aWYgKG9yZGVyID09IFwiYXNjXCIpIHtcblx0XHRcdHBsYW5lcy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdFx0cmV0dXJuIGEueSArIGEuaGVpZ2h0IC0gKGIueSArIGIuaGVpZ2h0KTtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRwbGFuZXMuc29ydChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHRcdHJldHVybiBiLnkgKyBiLmhlaWdodCAtIChhLnkgKyBhLmhlaWdodCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcGxhbmVzO1xuXHR9O1xuXG5cdExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5kaXZpZGVFcXVhbE51bWJlciA9IGZ1bmN0aW9uKGEsIERFRkFVTFQgPSAwKSB7XG5cdFx0dmFyIHJlcyA9IGEgLyBhO1xuXHRcdGlmIChyZXMgPT0gTmFOKSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIDE7XG5cdFx0fVxuXHR9O1xuXG5cdExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5nZXRNYXJnaW5BdFBvaW50ID0gZnVuY3Rpb24oYSkge1xuXHRcdGlmIChhID09IDApIHtcblx0XHRcdHJldHVybiAwO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5NQVJHSU47XG5cdFx0fVxuXHR9O1xuXG5cdExpbWJlckdyaWRWaWV3LnByb3RvdHlwZS5nZXRSb3dTZXF1ZW5jZSA9IGZ1bmN0aW9uKHNlcmlhbGl6ZSkge1xuXHRcdHZhciByb3dzID0ge307XG5cdFx0dmFyIHJvd3NBcnIgPSBbXTtcblx0XHR2YXIgY29sdW1ucyA9IHt9O1xuXG5cdFx0dmFyIGxlbmd0aF8wID0gdGhpcy5wb3NpdGlvbkRhdGEubGVuZ3RoO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGhfMDsgaSsrKSB7XG5cdFx0XHRpZiAocm93cy5oYXNPd25Qcm9wZXJ0eSh0aGlzLnBvc2l0aW9uRGF0YVtpXS55KSkge1xuXHRcdFx0XHRyb3dzW3RoaXMucG9zaXRpb25EYXRhW2ldLnldLnB1c2goaSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyb3dzW3RoaXMucG9zaXRpb25EYXRhW2ldLnldID0gW107XG5cdFx0XHRcdHJvd3NBcnIucHVzaChOdW1iZXIodGhpcy5wb3NpdGlvbkRhdGFbaV0ueSkpO1xuXHRcdFx0XHRyb3dzW3RoaXMucG9zaXRpb25EYXRhW2ldLnldLnB1c2goaSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cm93c0Fyci5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHJldHVybiBhIC0gYjtcblx0XHR9KTtcblxuXHRcdHZhciBsZW5ndGhfMCA9IHJvd3NBcnIubGVuZ3RoO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHRcdFx0cm93c1tyb3dzQXJyW2ldXS5zb3J0KFxuXHRcdFx0XHRmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMucG9zaXRpb25EYXRhW2FdLnggLSB0aGlzLnBvc2l0aW9uRGF0YVtiXS54O1xuXHRcdFx0XHR9LmJpbmQodGhpcylcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0aWYgKHNlcmlhbGl6ZSAhPSB0cnVlKSB7XG5cdFx0XHRyZXR1cm4geyByb3dPcmRlcjogcm93c0Fyciwgcm93czogcm93cyB9O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgYXJyID0gW107XG5cdFx0XHR2YXIgbWFwID0ge307XG5cdFx0XHR2YXIgY291bnQgPSAwO1xuXG5cdFx0XHR2YXIgbGVuZ3RoXzAgPSByb3dzQXJyLmxlbmd0aDtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoXzA7IGkrKykge1xuXHRcdFx0XHR2YXIgbGVuZ3RoXzEgPSByb3dzW3Jvd3NBcnJbaV1dLmxlbmd0aDtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBsZW5ndGhfMTsgaisrKSB7XG5cdFx0XHRcdFx0YXJyLnB1c2gocm93c1tyb3dzQXJyW2ldXVtqXSk7XG5cdFx0XHRcdFx0bWFwW3Jvd3Nbcm93c0FycltpXV1bal1dID0gY291bnQrKztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4geyBsaXN0OiBhcnIsIG1hcDogbWFwIH07XG5cdFx0fVxuXHR9O1xuXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBFU1NFTlRJQUxTIEVORCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5cdC8vIFVOVVNFRCBDT0RFXG5cblx0Ly8gVU5VU0VEIENPREUgRU5EXG5cblx0cmV0dXJuIExpbWJlckdyaWRWaWV3O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgd2luZG93LkxpbWJlckdyaWRWaWV3O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTU4NDY0MDQ2ODI1MVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIvaG9tZS9hcnNlbmFsZmMvMF9zdHVmZi8wX3dvcmsvZGV2ZWxvcG1lbnQvTGltYmVyR3JpZFZpZXcvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcInJlbG9hZEFsbFwiOnRydWUsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9