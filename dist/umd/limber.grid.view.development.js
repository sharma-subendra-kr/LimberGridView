/** @license LimberGridView
 *
 * LimberGridView, a powerful JavaScript Libary that gives you movable, resizable(any size) and auto-arranging grids.
 *
 * Copyright © 2018-2020 Subendra Kumar Sharma. All Rights reserved. (jobs.sharma.subendra.kr@gmail.com)
 *
 * This file is part of LimberGridView.
 *
 * LimberGridView is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * LimberGridView is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with LimberGridView.  If not, see <https://www.gnu.org/licenses/>.
 *
 * Written by Subendra Kumar Sharma.
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Stack"), require("rtreejs"), require("undo-redo"), require("resize-observer-polyfill"));
	else if(typeof define === 'function' && define.amd)
		define(["Stack", "rtreejs", "undo-redo", "resize-observer-polyfill"], factory);
	else if(typeof exports === 'object')
		exports["LimberGridView"] = factory(require("Stack"), require("rtreejs"), require("undo-redo"), require("resize-observer-polyfill"));
	else
		root["LimberGridView"] = factory(root["Stack"], root["rtreejs"], root["undo-redo"], root["resize-observer-polyfill"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__3__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external {"commonjs":"rtreejs","commonjs2":"rtreejs","amd":"rtreejs","root":"rtreejs"}
var external_commonjs_rtreejs_commonjs2_rtreejs_amd_rtreejs_root_rtreejs_ = __webpack_require__(1);

// EXTERNAL MODULE: external {"commonjs":"Stack","commonjs2":"Stack","amd":"Stack","root":"Stack"}
var external_commonjs_Stack_commonjs2_Stack_amd_Stack_root_Stack_ = __webpack_require__(0);

// EXTERNAL MODULE: external {"commonjs":"undo-redo","commonjs2":"undo-redo","amd":"undo-redo","root":"undo-redo"}
var external_commonjs_undo_redo_commonjs2_undo_redo_amd_undo_redo_root_undo_redo_ = __webpack_require__(2);
var external_commonjs_undo_redo_commonjs2_undo_redo_amd_undo_redo_root_undo_redo_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_undo_redo_commonjs2_undo_redo_amd_undo_redo_root_undo_redo_);

// EXTERNAL MODULE: ./src/index.css
var src = __webpack_require__(4);

// EXTERNAL MODULE: ./src/index.scss
var src_0 = __webpack_require__(5);

// CONCATENATED MODULE: ./src/store/constants/privateConstants.js
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
const setPrivateConstants = function (context, val) {
  context.store.constants.privateConstants = val;
};

const getPrivateConstants = function (context) {
  return context.store.constants.privateConstants;
};

const setPrivateConstantByName = function (context, name, value) {
  if (context.store.constants.privateConstants.hasOwnProperty(name)) {
    context.store.constants.privateConstants[name] = value;
  }
};

const getPrivateConstantByName = function (context, name) {
  return context.store.constants.privateConstants[name];
};

const setWidth = function (context, val) {
  context.store.constants.privateConstants.WIDTH = val;
};

const getWidth = function (context) {
  return context.store.constants.privateConstants.WIDTH;
};

const setHeight = function (context, val) {
  context.store.constants.privateConstants.HEIGHT = val;
};

const getHeight = function (context) {
  return context.store.constants.privateConstants.HEIGHT;
};

const setPaddingLeft = function (context, val) {
  context.store.constants.privateConstants.PADDING_LEFT = val;
};

const getPaddingLeft = function (context) {
  return context.store.constants.privateConstants.PADDING_LEFT;
};

const setPaddingRight = function (context, val) {
  context.store.constants.privateConstants.PADDING_RIGHT = val;
};

const getPaddingRight = function (context) {
  return context.store.constants.privateConstants.PADDING_RIGHT;
};

const setPaddingTop = function (context, val) {
  context.store.constants.privateConstants.PADDING_TOP = val;
};

const getPaddingTop = function (context) {
  return context.store.constants.privateConstants.PADDING_TOP;
};

const setPaddingBottom = function (context, val) {
  context.store.constants.privateConstants.PADDING_BOTTOM = val;
};

const getPaddingBottom = function (context) {
  return context.store.constants.privateConstants.PADDING_BOTTOM;
};

const setWidthScaleFactor = function (context, val) {
  context.store.constants.privateConstants.WIDTH_SCALE_FACTOR = val;
};

const getWidthScaleFactor = function (context) {
  return context.store.constants.privateConstants.WIDTH_SCALE_FACTOR;
};

const setMargin = function (context, val) {
  context.store.constants.privateConstants.MARGIN = val;
};

const getMargin = function (context) {
  return context.store.constants.privateConstants.MARGIN;
};

const setDefinedMinHeightAndWidth = function (context, val) {
  context.store.constants.privateConstants.DEFINED_MIN_HEIGHT_AND_WIDTH = val;
};

const getDefinedMinHeightAndWidth = function (context) {
  return context.store.constants.privateConstants.DEFINED_MIN_HEIGHT_AND_WIDTH;
}; //


const setGridWidth = function (context, val) {
  context.store.constants.privateConstants.GRID_WIDTH = val;
};

const getGridWidth = function (context) {
  return context.store.constants.privateConstants.GRID_WIDTH;
};

const setGridHeight = function (context, val) {
  context.store.constants.privateConstants.GRID_HEIGHT = val;
};

const getGridHeight = function (context) {
  return context.store.constants.privateConstants.GRID_HEIGHT;
};

const setGridMargin = function (context, val) {
  context.store.constants.privateConstants.GRID_MARGIN = val;
};

const getGridMargin = function (context) {
  return context.store.constants.privateConstants.GRID_MARGIN;
};

const setMinHeightAndWidth = function (context, val) {
  context.store.constants.privateConstants.MIN_HEIGHT_AND_WIDTH = val;
};

const getMinHeightAndWidth = function (context) {
  return context.store.constants.privateConstants.MIN_HEIGHT_AND_WIDTH;
};

/* harmony default export */ var constants_privateConstants = (getPrivateConstants);

// CONCATENATED MODULE: ./src/store/constants/publicConstants.js
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
const setPublicConstants = function (context, val) {
  context.store.constants.publicConstants = val;
};

const getPublicConstants = function (context) {
  return context.store.constants.publicConstants;
};

const setPublicConstantByName = function (context, name, value) {
  if (context.store.constants.publicConstants.hasOwnProperty(name)) {
    context.store.constants.publicConstants[name] = value;
  }
};

const getPublicConstantByName = function (context, name) {
  return context.store.constants.publicConstants[name];
};

/* harmony default export */ var constants_publicConstants = (getPublicConstants);

// CONCATENATED MODULE: ./src/store/variables/elements.js
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
const getElements = function (context) {
  return context.store.variables.elements;
};

const set$body = function (context, elm) {
  context.store.variables.elements.$body = elm;
};

const get$body = function (context) {
  return context.store.variables.elements.$body;
}; // outside pseudos BEGIN


const set$pseudoContainer = function (context, elm) {
  context.store.variables.elements.$pseudoContainer = elm;
};

const get$pseudoContainer = function (context) {
  return context.store.variables.elements.$pseudoContainer;
};

const set$pseudoContainerItem = function (context, elm) {
  context.store.variables.elements.$pseudoContainerItem = elm;
};

const get$pseudoContainerItem = function (context) {
  return context.store.variables.elements.$pseudoContainerItem;
}; // outside pseudos ENDED
// Grid Elements BEGIN


const set$el = function (context, elm) {
  context.store.variables.elements.$el = elm;
};

const get$el = function (context) {
  return context.store.variables.elements.$el;
};

const set$limberGridViewContainer = function (context, elm) {
  context.store.variables.elements.$limberGridViewContainer = elm;
};

const get$limberGridViewContainer = function (context) {
  return context.store.variables.elements.$limberGridViewContainer;
};

const set$limberGridView = function (context, elm) {
  context.store.variables.elements.$limberGridView = elm;
};

const get$limberGridView = function (context) {
  return context.store.variables.elements.$limberGridView;
};

const set$limberGridViewItems = function (context, elm) {
  context.store.variables.elements.$limberGridViewItems = elm;
};

const get$limberGridViewItems = function (context) {
  return context.store.variables.elements.$limberGridViewItems;
};

const set$limberGridViewPseudoItem = function (context, elm) {
  context.store.variables.elements.$limberGridViewPseudoItem = elm;
};

const get$limberGridViewPseudoItem = function (context) {
  return context.store.variables.elements.$limberGridViewPseudoItem;
};

const set$limberGridViewMoveGuide = function (context, elm) {
  context.store.variables.elements.$limberGridViewMoveGuide = elm;
};

const get$limberGridViewMoveGuide = function (context) {
  return context.store.variables.elements.$limberGridViewMoveGuide;
};

const set$limberGridViewHeightAdjustGuide = function (context, elm) {
  context.store.variables.elements.$limberGridViewHeightAdjustGuide = elm;
};

const get$limberGridViewHeightAdjustGuide = function (context) {
  return context.store.variables.elements.$limberGridViewHeightAdjustGuide;
};

const set$limberGridViewAddCutGuide = function (context, elm) {
  context.store.variables.elements.$limberGridViewAddCutGuide = elm;
};

const get$limberGridViewAddCutGuide = function (context) {
  return context.store.variables.elements.$limberGridViewAddCutGuide;
};

const set$limberGridViewTouchHoldGuide = function (context, elm) {
  context.store.variables.elements.$limberGridViewTouchHoldGuide = elm;
};

const get$limberGridViewTouchHoldGuide = function (context) {
  return context.store.variables.elements.$limberGridViewTouchHoldGuide;
};

const set$limberGridViewCrossHairGuide = function (context, elm) {
  context.store.variables.elements.$limberGridViewCrossHairGuide = elm;
};

const get$limberGridViewCrossHairGuide = function (context) {
  return context.store.variables.elements.$limberGridViewCrossHairGuide;
};

const set$limberGridViewIOTopHelper = function (context, elm) {
  context.store.variables.elements.$limberGridViewIOTopHelper = elm;
};

const get$limberGridViewIOTopHelper = function (context) {
  return context.store.variables.elements.$limberGridViewIOTopHelper;
};

const set$limberGridViewIOBottomHelper = function (context, elm) {
  context.store.variables.elements.$limberGridViewIOBottomHelper = elm;
};

const get$limberGridViewIOBottomHelper = function (context) {
  return context.store.variables.elements.$limberGridViewIOBottomHelper;
}; // Grid Elements ENDED
// DEBUG Elements


const set$limberGridViewDebugMergedTempRects = function (context, elm) {
  context.store.variables.elements.$limberGridViewDebugMergedTempRects = elm;
};

const get$limberGridViewDebugMergedTempRects = function (context) {
  return context.store.variables.elements.$limberGridViewDebugMergedTempRects;
};

const set$limberGridViewDebugStackTopRect = function (context, elm) {
  context.store.variables.elements.$limberGridViewDebugStackTopRect = elm;
};

const get$limberGridViewDebugStackTopRect = function (context) {
  return context.store.variables.elements.$limberGridViewDebugStackTopRect;
};

const set$limberGridViewDebugStackTopAdjRect = function (context, elm) {
  context.store.variables.elements.$limberGridViewDebugStackTopAdjRect = elm;
};

const get$limberGridViewDebugStackTopAdjRect = function (context) {
  return context.store.variables.elements.$limberGridViewDebugStackTopAdjRect;
};

const set$limberGridViewDebugMergedRect = function (context, elm) {
  context.store.variables.elements.$limberGridViewDebugMergedRect = elm;
};

const get$limberGridViewDebugMergedRect = function (context) {
  return context.store.variables.elements.$limberGridViewDebugMergedRect;
};

const set$limberGridViewDebugAdjRect = function (context, elm) {
  context.store.variables.elements.$limberGridViewDebugAdjRect = elm;
};

const get$limberGridViewDebugAdjRect = function (context) {
  return context.store.variables.elements.$limberGridViewDebugAdjRect;
};

const set$limberGridViewDebugStackRects = function (context, elm) {
  context.store.variables.elements.$limberGridViewDebugStackRects = elm;
};

const get$limberGridViewDebugStackRects = function (context) {
  return context.store.variables.elements.$limberGridViewDebugStackRects;
};

const set$limberGridViewDebugResultStackRects = function (context, elm) {
  context.store.variables.elements.$limberGridViewDebugResultStackRects = elm;
};

const get$limberGridViewDebugResultStackRects = function (context) {
  return context.store.variables.elements.$limberGridViewDebugResultStackRects;
};

const set$limberGridViewDebugUnmergedRects = function (context, elm) {
  context.store.variables.elements.$limberGridViewDebugUnmergedRects = elm;
};

const get$limberGridViewDebugUnmergedRects = function (context) {
  return context.store.variables.elements.$limberGridViewDebugUnmergedRects;
};

const set$limberGridViewDebugMergedFreeRects = function (context, elm) {
  context.store.variables.elements.$limberGridViewDebugMergedFreeRects = elm;
};

const get$limberGridViewDebugMergedFreeRects = function (context) {
  return context.store.variables.elements.$limberGridViewDebugMergedFreeRects;
};

/* harmony default export */ var variables_elements = (getElements);

// CONCATENATED MODULE: ./src/libs/utils/essentials.js
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



const adjustHeight = function (context, yMouseOrTouchPosition) {
  const e = variables_elements(context);
  const publicConstants = constants_publicConstants(context);
  const scrollHeight = e.$limberGridView.scrollHeight;

  if (scrollHeight - yMouseOrTouchPosition < publicConstants.AUTO_SCROLL_POINT) {
    e.$limberGridViewHeightAdjustGuide.style.height = `${scrollHeight + publicConstants.MOVE_OR_RESIZE_HEIGHT_INCREMENTS}px`;
  }
};
const adjustScroll = function (context, yMouseOrTouchPositionOffset) {
  const e = variables_elements(context);
  const publicConstants = constants_publicConstants(context);
  const privateConstants = constants_privateConstants(context);
  const scrollTop = e.$limberGridView.scrollTop;
  let programScrolled = false;

  if (privateConstants.HEIGHT - yMouseOrTouchPositionOffset < publicConstants.AUTO_SCROLL_POINT) {
    e.$limberGridView.scrollTop = scrollTop + publicConstants.AUTO_SCROLL_DISTANCE;
    programScrolled = true;
  } else if (yMouseOrTouchPositionOffset < publicConstants.AUTO_SCROLL_POINT) {
    e.$limberGridView.scrollTop = scrollTop - publicConstants.AUTO_SCROLL_DISTANCE;
    programScrolled = true;
  }

  return programScrolled;
};
const adjustHeightAndScroll = function (context, yMouseOrTouchPosition, yMouseOrTouchPositionOffset, autoScroll) {
  adjustHeight(context, yMouseOrTouchPosition);

  if (autoScroll) {
    return adjustScroll(context, yMouseOrTouchPositionOffset);
  }
};
// CONCATENATED MODULE: ./src/store/variables/essentials.js
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
const setEssentialVariables = function (context, ev) {
  context.store.variables.essentials = ev;
};

const getEssentialVariables = function (context) {
  return context.store.variables.essentials;
};

const setPseudoContainerId = function (context, id) {
  context.store.variables.essentials.pseudoContainerId = id;
};

const getPseudoContainerId = function (context) {
  return context.store.variables.essentials.pseudoContainerId;
};

const setPositionData = function (context, pd) {
  const len = pd.length;
  const arr = new Array(len);

  for (let i = 0; i < len; i++) {
    arr[i] = { ...pd[i]
    };
  }

  context.store.variables.essentials.positionData = arr;
};

const getPositionData = function (context) {
  return context.store.variables.essentials.positionData;
};

const setModifiedPositionData = function (context, pd) {
  const len = pd.length;
  const arr = new Array(len);

  for (let i = 0; i < len; i++) {
    arr[i] = { ...pd[i]
    };
  }

  context.store.variables.essentials.modifiedPositionData = arr;
};

const getModifiedPositionData = function (context) {
  return context.store.variables.essentials.modifiedPositionData;
};

const setSerializedPositionData = function (context, pd) {
  const len = pd.length;
  const arr = new Array(len);

  for (let i = 0; i < len; i++) {
    arr[i] = { ...pd[i]
    };
    arr[i].index = i;
  }

  arr.sort((a, b) => {
    if (a.y === b.y) {
      return a.x - b.x;
    }

    return a.y - b.y;
  });
  context.store.variables.essentials.serializedPositionData = arr;
};

const getSerializedPositionData = function (context) {
  return context.store.variables.essentials.serializedPositionData;
};

const setGridData = function (context, grid) {
  context.store.variables.essentials.gridData = grid;
};

const getGridData = function (context) {
  return context.store.variables.essentials.gridData;
};

const setCallbacks = function (context, cbs) {
  context.store.variables.essentials.callbacks = cbs;
};

const getCallbacks = function (context) {
  return context.store.variables.essentials.callbacks;
};

const setLimberGridViewBoundingClientRect = function (context, value) {
  context.store.variables.essentials.limberGridViewBoundingClientRect = value;
};

const getLimberGridViewBoundingClientRect = function (context) {
  return context.store.variables.essentials.limberGridViewBoundingClientRect;
};

const setRenderedItems = function (context, renderedItems) {
  context.store.variables.essentials.renderedItems = [...renderedItems];
};

const getRenderedItems = function (context) {
  return context.store.variables.essentials.renderedItems;
};

const setRenderedItemsMap = function (context, renderedItemsMap) {
  context.store.variables.essentials.renderedItemsMap = { ...renderedItemsMap
  };
};

const getRenderedItemsMap = function (context) {
  return context.store.variables.essentials.renderedItemsMap;
};

const setIOTopHelperPos = function (context, position) {
  context.store.variables.essentials.ioTopHelperPos = position;
};

const getIOTopHelperPos = function (context) {
  return context.store.variables.essentials.ioTopHelperPos;
};

const setIOBottomHelperPos = function (context, position) {
  context.store.variables.essentials.ioBottomHelperPos = position;
};

const getIOBottomHelperPos = function (context) {
  return context.store.variables.essentials.ioBottomHelperPos;
};

const setOnScrolTimeout = function (context, onScrollTimeout) {
  return context.store.variables.essentials.onScrollTimeout = onScrollTimeout;
};

const getOnScrolTimeout = function (context) {
  return context.store.variables.essentials.onScrollTimeout;
};

/* harmony default export */ var essentials = (getEssentialVariables);

// CONCATENATED MODULE: ./src/libs/eventHandlerLib/eventHandlerUtils.js
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



const calculateMousePosOnDesk = function (context, event) {
  const e = variables_elements(context);
  const privateConstants = constants_privateConstants(context);
  const limberGridViewPosition = getLimberGridViewBoundingClientRect(context);

  if (event.clientX >= limberGridViewPosition.left && event.clientX <= limberGridViewPosition.left + limberGridViewPosition.width && event.clientY >= limberGridViewPosition.top && event.clientY <= limberGridViewPosition.top + limberGridViewPosition.height) {
    const scrollTop = e.$limberGridView.scrollTop;
    const scrollLeft = e.$limberGridView.scrollLeft;
    const mouseXOnLimberGridView = event.clientX - limberGridViewPosition.left - privateConstants.PADDING_LEFT + scrollLeft;
    const mouseYOnLimberGridView = event.clientY - limberGridViewPosition.top - privateConstants.PADDING_TOP + scrollTop;

    if (mouseXOnLimberGridView < 0 || mouseYOnLimberGridView < 0) {
      return;
    }

    return {
      x: mouseXOnLimberGridView,
      y: mouseYOnLimberGridView,
      offsetX: mouseXOnLimberGridView - scrollLeft,
      offsetY: mouseYOnLimberGridView - scrollTop
    };
  }
};
const calculateTouchPosOnDesk = function (context, event) {
  const e = variables_elements(context);
  const privateConstants = constants_privateConstants(context);
  const limberGridViewPosition = getLimberGridViewBoundingClientRect(context);
  let touch;

  if (event.type === "touchend") {
    touch = {
      clientX: event.changedTouches[0].clientX,
      clientY: event.changedTouches[0].clientY
    };
  } else {
    touch = {
      clientX: event.touches[0].clientX,
      clientY: event.touches[0].clientY
    };
  }

  if (touch.clientX >= limberGridViewPosition.left && touch.clientX <= limberGridViewPosition.left + limberGridViewPosition.width && touch.clientY >= limberGridViewPosition.top && touch.clientY <= limberGridViewPosition.top + limberGridViewPosition.height) {
    const scrollTop = e.$limberGridView.scrollTop;
    const scrollLeft = e.$limberGridView.scrollLeft;
    const touchXOnLimberGridView = touch.clientX - limberGridViewPosition.left - privateConstants.PADDING_LEFT + scrollLeft;
    const touchYOnLimberGridView = touch.clientY - limberGridViewPosition.top - privateConstants.PADDING_TOP + scrollTop;

    if (touchXOnLimberGridView < 0 || touchYOnLimberGridView < 0) {
      return;
    }

    return {
      x: touchXOnLimberGridView,
      y: touchYOnLimberGridView,
      offsetX: touchXOnLimberGridView - scrollLeft,
      offsetY: touchYOnLimberGridView - scrollTop
    };
  }
};
const calculateTouchPosOnItem = function (context, event) {
  const e = variables_elements(context);
  const limberGridViewItemPosition = e.$limberGridViewItems[event.currentTarget.attributes["data-index"].value].getBoundingClientRect();

  if (event.touches[0].clientX >= limberGridViewItemPosition.left && event.touches[0].clientX <= limberGridViewItemPosition.left + limberGridViewItemPosition.width && event.touches[0].clientY >= limberGridViewItemPosition.top && event.touches[0].clientY <= limberGridViewItemPosition.top + limberGridViewItemPosition.height) {
    const touchXOnLimberGridView = event.touches[0].clientX - limberGridViewItemPosition.left;
    const touchYOnLimberGridView = event.touches[0].clientY - limberGridViewItemPosition.top;
    return {
      x: touchXOnLimberGridView,
      y: touchYOnLimberGridView
    };
  }
};
// CONCATENATED MODULE: ./src/store/variables/options.js
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
// SEE index.js for options format
const setOptions = function (context, options) {
  Object.assign(context.options, options);
};

const getOptions = function (context) {
  return context.options;
};

/* harmony default export */ var variables_options = (getOptions);

// CONCATENATED MODULE: ./src/libs/eventHandlerLib/itemInteractionUtils.js
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





const getUserActionData = (context, event) => {
  const publicConstants = constants_publicConstants(context);
  const options = variables_options(context);
  const pd = getPositionData(context);
  const itemIndex = parseInt(event.currentTarget.attributes["data-index"].value);
  let radius;
  let touchPosOnLimberGridItem;
  let X, Y;

  if (!event.touches) {
    radius = Math.sqrt(Math.pow(0 - event.offsetX, 2) + Math.pow(0 - event.offsetY, 2));
    X = event.offsetX;
    Y = event.offsetY;
  } else if (event.touches) {
    touchPosOnLimberGridItem = calculateTouchPosOnItem(context, event);

    if (!touchPosOnLimberGridItem) {
      return false;
    }

    radius = Math.sqrt(Math.pow(0 - touchPosOnLimberGridItem.x, 2) + Math.pow(0 - touchPosOnLimberGridItem.y, 2));
    X = touchPosOnLimberGridItem.x;
    Y = touchPosOnLimberGridItem.y;
  } else {
    return false;
  }

  const resizeUIBox = {
    x: event.currentTarget.offsetWidth - publicConstants.RESIZE_SQUARE_GUIDE_LENGTH,
    y: event.currentTarget.offsetHeight - publicConstants.RESIZE_SQUARE_GUIDE_LENGTH,
    width: publicConstants.RESIZE_SQUARE_GUIDE_LENGTH + publicConstants.RESIZE_SQUARE_GUIDE_BORDER_WIDTH,
    height: publicConstants.RESIZE_SQUARE_GUIDE_LENGTH + publicConstants.RESIZE_SQUARE_GUIDE_BORDER_WIDTH
  };
  const resizeUIBoxBL = {
    x: -publicConstants.RESIZE_SQUARE_GUIDE_BORDER_WIDTH,
    y: event.currentTarget.offsetHeight - publicConstants.RESIZE_SQUARE_GUIDE_LENGTH,
    width: publicConstants.RESIZE_SQUARE_GUIDE_LENGTH,
    height: publicConstants.RESIZE_SQUARE_GUIDE_LENGTH + publicConstants.RESIZE_SQUARE_GUIDE_BORDER_WIDTH
  };

  if (options.itemMouseDownMoveCheck && options.itemMouseDownMoveCheck(X, Y, { ...pd[itemIndex]
  }, itemIndex, event.target)) {
    // call developer defined function to check if mousedown for MOVE is in a valid place
    return {
      type: "move",
      itemIndex: event.currentTarget.attributes["data-index"].value
    };
  }

  if (radius <= publicConstants.MOVE_GUIDE_RADIUS && !options.itemMouseDownMoveCheck) {
    return {
      type: "move",
      itemIndex: event.currentTarget.attributes["data-index"].value
    };
  }

  if (options.itemMouseDownResizeCheck && options.itemMouseDownResizeCheck(X, Y, { ...pd[itemIndex]
  }, itemIndex, event.target, "bottomRight")) {
    // call developer defined function to check if mousedown for RESIZE is in a valid place
    return {
      type: "resize",
      itemIndex: event.currentTarget.attributes["data-index"].value
    };
  }

  if (options.itemMouseDownResizeCheck && options.itemMouseDownResizeCheck(X, Y, { ...pd[itemIndex]
  }, itemIndex, event.target, "bottomLeft")) {
    // call developer defined function to check if mousedown for RESIZE is in a valid place
    return {
      type: "resizeBottomLeft",
      itemIndex: event.currentTarget.attributes["data-index"].value
    };
  }

  if (X >= resizeUIBox.x && X <= resizeUIBox.x + resizeUIBox.width && Y >= resizeUIBox.y && Y <= resizeUIBox.y + resizeUIBox.height && !options.itemMouseDownResizeCheck) {
    return {
      type: "resize",
      itemIndex: event.currentTarget.attributes["data-index"].value
    };
  }

  if (X >= resizeUIBoxBL.x && X <= resizeUIBoxBL.width && Y >= resizeUIBoxBL.y && Y <= resizeUIBoxBL.y + resizeUIBoxBL.height && !options.itemMouseDownResizeCheck) {
    return {
      type: "resizeBottomLeft",
      itemIndex: event.currentTarget.attributes["data-index"].value
    };
  }
};
const loadResizingState = (context, userActionData) => {
  const e = variables_elements(context);
  const pd = getPositionData(context);
  const item = pd[userActionData.itemIndex];
  e.$limberGridViewHeightAdjustGuide.style.height = 0 + "px";
  e.$limberGridViewHeightAdjustGuide.classList.add("limber-grid-view-height-adjust-guide-active");
  e.$limberGridViewPseudoItem.style.width = `${item.width}px`;
  e.$limberGridViewPseudoItem.style.height = `${item.height}px`;
  e.$limberGridViewPseudoItem.setAttribute("data-after", `w: 0px, h: 0px`);
  e.$limberGridViewPseudoItem.style.transform = `translate(${userActionData.itemX}px,${userActionData.itemY}px)`;
  e.$limberGridViewPseudoItem.classList.add("limber-grid-view-pseudo-item-active");
  e.$limberGridViewPseudoItem.classList.remove("limber-grid-view-pseudo-item-resize-allow", "limber-grid-view-pseudo-item-resize-disallow");
  e.$body.classList.add("limber-grid-view-body-tag-state-editing");
  const itemsLen = e.$limberGridViewItems.length;

  for (let i = 0; i < itemsLen; i++) {
    if (!e.$limberGridViewItems[i]) {
      continue;
    }

    e.$limberGridViewItems[i].classList.add("limber-grid-view-item-resizing-state");
  }

  e.$limberGridViewPseudoItem.classList.add("limber-grid-view-pseudo-item-resizing-state");
};
const unloadResizingState = (context, userActionData) => {
  const e = variables_elements(context);
  e.$limberGridViewHeightAdjustGuide.classList.remove("limber-grid-view-height-adjust-guide-active");
  e.$limberGridViewPseudoItem.classList.remove("limber-grid-view-pseudo-item-active");
  e.$limberGridViewPseudoItem.style.transform = `translate(-1000px, -1000px)`;
  e.$body.classList.remove("limber-grid-view-body-tag-state-editing");
  const itemsLen = e.$limberGridViewItems.length;

  for (let i = 0; i < itemsLen; i++) {
    if (!e.$limberGridViewItems[i]) {
      continue;
    }

    e.$limberGridViewItems[i].classList.remove("limber-grid-view-item-resizing-state");
  }

  e.$limberGridViewPseudoItem.classList.remove("limber-grid-view-pseudo-item-resizing-state");
};
const loadMoveState = (context, userActionData, event) => {
  const e = variables_elements(context);
  const pd = getPositionData(context);
  const item = pd[userActionData.itemIndex];
  e.$limberGridViewHeightAdjustGuide.style.height = 0 + "px";
  e.$limberGridViewHeightAdjustGuide.classList.add("limber-grid-view-height-adjust-guide-active");

  if (e.$limberGridViewItems[userActionData.itemIndex]) {
    e.$limberGridViewItems[userActionData.itemIndex].classList.add("limber-grid-view-item-demo");
  }

  e.$pseudoContainerItem.classList.add("limber-grid-view-pseudo-container-item-active");
  e.$pseudoContainerItem.style.width = item.width + "px";
  e.$pseudoContainerItem.style.height = item.height + "px";

  if (!event.touches) {
    e.$pseudoContainerItem.style.transform = `translate(${event.pageX}px, ${event.pageY}px)`;
  } else if (event.touches) {
    e.$pseudoContainerItem.style.transform = `translate(${event.touches[0].pageX}px, ${event.touches[0].pageY}px)`;
  }

  e.$body.classList.add("limber-grid-view-body-tag-state-editing");
};
const unloadMoveState = (context, userActionData) => {
  const e = variables_elements(context);
  const publicConstants = constants_publicConstants(context);
  e.$limberGridViewHeightAdjustGuide.classList.remove("limber-grid-view-height-adjust-guide-active");

  if (e.$limberGridViewItems[userActionData.itemIndex]) {
    e.$limberGridViewItems[userActionData.itemIndex].classList.remove("limber-grid-view-item-demo");
  }

  e.$pseudoContainerItem.classList.remove("limber-grid-view-pseudo-container-item-active");
  e.$pseudoContainerItem.style.width = "0px";
  e.$pseudoContainerItem.style.height = "0px";
  e.$pseudoContainerItem.style.transform = `translate(-1000px, -1000px)`;
  e.$body.classList.remove("limber-grid-view-body-tag-state-editing");
  e.$limberGridViewCrossHairGuide.style.transform = `translate(-${publicConstants.CROSS_HAIR_WIDTH * 2}px, -${publicConstants.CROSS_HAIR_HEIGHT * 2}px)`;
};
const loadOnMoveState = (context, userActionData, event, type) => {
  const e = variables_elements(context);

  if (type === "move") {
    e.$limberGridViewMoveGuide.classList.remove("limber-grid-view-move-guide-active");
    e.$pseudoContainerItem.classList.remove("limber-grid-view-pseudo-container-item-move-allow", "limber-grid-view-pseudo-container-item-move-disallow");

    if (!event.touches) {
      e.$pseudoContainerItem.style.transform = `translate(${event.pageX}px, ${event.pageY}px)`;
    } else if (event.touches) {
      e.$pseudoContainerItem.style.transform = `translate(${event.touches[0].pageX}px, ${event.touches[0].pageY}px)`;
    }
  } else if (type === "resize") {
    e.$limberGridViewPseudoItem.classList.remove("limber-grid-view-pseudo-item-resize-allow", "limber-grid-view-pseudo-item-resize-disallow");
  }
};
const unloadOnMoveState = context => {
  const e = variables_elements(context);
  e.$limberGridViewMoveGuide.classList.remove("limber-grid-view-move-guide-active");
  e.$limberGridViewMoveGuide.style.transform = `translate(-1000px, -1000px)`;
};
// CONCATENATED MODULE: ./src/libs/geometry/geometry.js
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
const getDistanceBetnPts = (pt1, pt2) => {
  return Math.sqrt(Math.pow(pt2.x - pt1.x, 2) + Math.pow(pt2.y - pt1.y, 2));
};
const getHypotenuseSquared = (x1, y1, x2, y2) => {
  return (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);
};
const getMidPoint = (x1, y1, x2, y2) => {
  return {
    x: (x1 + x2) / 2,
    y: (y1 + y2) / 2
  };
};
// CONCATENATED MODULE: ./src/libs/utils/utils.js
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

const isMobile = function (context, boundingClientRect) {
  const isMobileFunction = context.options.isMobileCheck;

  if (isMobileFunction) {
    return isMobileFunction(boundingClientRect || getLimberGridViewBoundingClientRect(context));
  }

  boundingClientRect = boundingClientRect || getLimberGridViewBoundingClientRect(context);
  return boundingClientRect.width < 980 || window.innerHeight > window.innerWidth && boundingClientRect.width < 981;
};
const fixTo = (num, to = 6) => {
  return Math.trunc(num * Math.pow(10, to)) / Math.pow(10, to);
};
const getRandomString = (len = 22) => {
  const alpNum = "0123456789abcdefghijklmnopqrstuvwxyz";
  const arr = new Array(len);

  for (let i = 0; i < len; i++) {
    arr[i] = alpNum[Math.floor(Math.random() * 36)];
  }

  return arr.join("");
};
const sleep = ms => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
};
// CONCATENATED MODULE: ./src/libs/utils/items.js
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


const makeItem = item => {
  item.x1 = item.x;
  item.x2 = item.x + item.width;
  item.y1 = item.y;
  item.y2 = item.y + item.height;
};
const enhanceItemHW = item => {
  item.x = item.x1;
  item.y = item.y1;
  item.width = item.x2 - item.x1;
  item.height = item.y2 - item.y1;
};
const sanitizeNumberFloor = num => {
  const decimalPart = num % 1;
  const integerPart = Math.trunc(num);

  if (decimalPart <= 0.25) {
    return integerPart;
  } else if (decimalPart <= 0.5) {
    return integerPart + 0.25;
  } else if (decimalPart <= 0.75) {
    return integerPart + 0.5;
  } else if (decimalPart <= 0.9999999999999999) {
    return integerPart + 0.75;
  }

  return integerPart - 0.25;
};
const sanitizeNumberCeil = num => {
  const decimalPart = num % 1;
  const integerPart = Math.trunc(num);

  if (decimalPart <= 0.25) {
    return integerPart + 0.25;
  } else if (decimalPart <= 0.5) {
    return integerPart + 0.5;
  } else if (decimalPart <= 0.75) {
    return integerPart + 0.75;
  } else if (decimalPart <= 0.9999999999999999) {
    return integerPart + 1;
  }

  return integerPart + 0.25;
};
const sanitizeDimension = item => {
  item.x1 = sanitizeNumberCeil(item.x1);
  item.y1 = sanitizeNumberCeil(item.y1);
  item.x2 = sanitizeNumberFloor(item.x2);
  item.y2 = sanitizeNumberFloor(item.y2);
  item.x = sanitizeNumberCeil(item.x);
  item.y = sanitizeNumberCeil(item.y);
  item.width = sanitizeNumberFloor(item.width);
  item.height = sanitizeNumberFloor(item.height);
};
const doRectsOverlapWithMargin = (rectA, rectB) => {
  // 2nd arg is item and needs to be checked with margin
  if (rectA.mX1 >= rectB.mX2 || rectB.mX1 >= rectA.mX2 || rectA.mY1 >= rectB.mY2 || rectB.mY1 >= rectA.mY2) {
    return false;
  }

  return true;
};
const doRectsOverlapSingleItemMargin = (rectA, rectB) => {
  // 2nd arg is item and needs to be checked with margin
  if (isNaN(rectA.x1) || isNaN(rectA.x2) || isNaN(rectB.mX1) || isNaN(rectB.mX2)) {
    return false;
  }

  if (rectA.x1 >= rectB.mX2 || rectB.mX1 >= rectA.x2 || rectA.y1 >= rectB.mY2 || rectB.mY1 >= rectA.y2) {
    return false;
  }

  return true;
};
const doRectsOverlapOrTouchSingleItemMargin = (rectA, rectB) => {
  // 2nd arg is item and needs to be checked with margin
  if (isNaN(rectA.x1) || isNaN(rectA.x2) || isNaN(rectB.mX1) || isNaN(rectB.mX2)) {
    return false;
  }

  if (rectA.x1 > rectB.mX2 || rectB.mX1 > rectA.x2 || rectA.y1 > rectB.mY2 || rectB.mY1 > rectA.y2) {
    return false;
  }

  return true;
};
const isRectInsideSingleItemMargin = (rectA, rectB) => {
  // is rectB inside rectA
  if (rectA.x1 <= rectB.mX1 && rectA.x2 >= rectB.mX2 && rectA.y1 <= rectB.mY1 && rectA.y2 >= rectB.mY2) {
    return true;
  }
};
const isPointInsideOrTouchRectWithMargin = (rect, point) => {
  if (point.x >= rect.mX1 && point.x <= rect.mX2 && point.y >= rect.mY1 && point.y <= rect.mY2) {
    return true;
  }
};
const swapDimensActualAndWithMargin = rect => {
  const tempX1 = rect.x1;
  const tempX2 = rect.x2;
  const tempY1 = rect.y1;
  const tempY2 = rect.y2;
  rect.x1 = rect.mX1;
  rect.x2 = rect.mX2;
  rect.y1 = rect.mY1;
  rect.y2 = rect.mY2;
  rect.mX1 = tempX1;
  rect.mX2 = tempX2;
  rect.mY1 = tempY1;
  rect.mY2 = tempY2;
};
const isValidRect = function (rect) {
  if (isNaN(rect.x1) || isNaN(rect.x2) || isNaN(rect.y1) || isNaN(rect.y2)) {
    return false;
  }

  if (rect.x1 >= rect.x2 || rect.y1 >= rect.y2) {
    return false;
  }

  return true;
};
const isValidRectHW = function (rect) {
  if (isNaN(rect.x) || isNaN(rect.y) || isNaN(rect.width) || isNaN(rect.height)) {
    return false;
  }

  if (rect.x >= rect.x + rect.width || rect.y >= rect.y + rect.height) {
    return false;
  }

  return true;
};
const getItemsToRerenderOnUndoRedo = function (cpd, npd) {
  // cpd: current position data
  // npd: new position data
  const changed = {};

  for (const [index] of cpd.entries()) {
    if (cpd[index].x1 !== npd[index].x1 || cpd[index].x2 !== npd[index].x2 || cpd[index].y1 !== npd[index].y1 || cpd[index].y2 !== npd[index].y2) {
      changed[index] = true;
    }
  }

  return changed;
};
const getItemsInWorkSpace = (context, workSpaceRect, getIndices = false, excludeMap) => {
  const pd = getPositionData(context);
  const len = pd.length;
  const itemsInWorkSpace = new Array(len);
  let count = 0;
  let item;

  for (let i = 0; i < len; i++) {
    item = pd[i];

    if (excludeMap && excludeMap[i]) {
      continue;
    }

    if (doRectsOverlapSingleItemMargin(workSpaceRect, item)) {
      if (!getIndices) {
        itemsInWorkSpace[count++] = pd[i];
      } else {
        itemsInWorkSpace[count++] = i;
      }
    }
  }

  itemsInWorkSpace.length = count;
  return itemsInWorkSpace;
};
const items_getRenderedItemsMap = context => {
  const renderedItems = getRenderedItems(context);
  const renderedItemsMap = {};

  for (const item of renderedItems) {
    renderedItemsMap[item] = true;
  }

  return renderedItemsMap;
};
// CONCATENATED MODULE: ./src/libs/interaction/itemInteractionUtils.js
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





const getResizeAffectedItems = (context, item, index) => {
  const pd = getPositionData(context);
  const mpd = getModifiedPositionData(context);
  const len = pd.length;
  const affectedArr = new Array(len);
  let count = 0;

  for (let i = 0; i < len; i++) {
    if (doRectsOverlapWithMargin(item, pd[i]) && i !== index) {
      affectedArr[count++] = i;
      mpd[i].x1 = undefined;
      mpd[i].y1 = undefined;
      mpd[i].x2 = undefined;
      mpd[i].y2 = undefined;
      mpd[i].mX1 = undefined;
      mpd[i].mY1 = undefined;
      mpd[i].mX2 = undefined;
      mpd[i].mY2 = undefined;
      mpd[i].x = undefined;
      mpd[i].y = undefined;
      mpd[i].mX = undefined;
      mpd[i].mY = undefined;
    }
  }

  affectedArr[count++] = index;
  affectedArr.length = count;
  return affectedArr;
};
const getMoveAffectedItems = (context, item, index) => {
  const pd = getPositionData(context);
  const mpd = getModifiedPositionData(context);
  const len = pd.length;
  const affectedArr = new Array(len);
  let count = 0;

  for (let i = 0; i < len; i++) {
    if (doRectsOverlapWithMargin(item, pd[i]) && i !== index) {
      affectedArr[count++] = i;
      mpd[i].x1 = undefined;
      mpd[i].y1 = undefined;
      mpd[i].x2 = undefined;
      mpd[i].y2 = undefined;
      mpd[i].mX1 = undefined;
      mpd[i].mY1 = undefined;
      mpd[i].mX2 = undefined;
      mpd[i].mY2 = undefined;
      mpd[i].x = undefined;
      mpd[i].y = undefined;
      mpd[i].mX = undefined;
      mpd[i].mY = undefined;
    }
  }

  affectedArr[count++] = index;
  affectedArr.length = count;
  return affectedArr;
};
const resizeItemInitialChecks = (context, index, x, y, width, height) => {
  const pd = getPositionData(context);
  const privateConstants = constants_privateConstants(context);

  if (index < 0 || index >= pd.length) {
    // invalid index
    throw "Index out of bounds.";
  }

  if (typeof x !== "number" || typeof y !== "number") {
    throw "x or y is not a number.";
  }

  if (x < privateConstants.MARGIN || y < privateConstants.MARGIN) {
    // falls outside
    throw "Left edges falls outside the grid area.";
  }

  if (typeof width !== "number" || typeof height !== "number") {
    throw "Width or Height is not a number.";
  }

  if (x + width + privateConstants.MARGIN > privateConstants.WIDTH) {
    // falls outside
    throw "Right edges falls outside the grid area.";
  }

  if (width < privateConstants.DEFINED_MIN_HEIGHT_AND_WIDTH || height < privateConstants.DEFINED_MIN_HEIGHT_AND_WIDTH) {
    // very small. TO DO: let the developers decide the smallest item size but can't be less than 150
    throw `Width or height less than min height or width ${privateConstants.DEFINED_MIN_HEIGHT_AND_WIDTH}.`;
  }

  if (height + privateConstants.MARGIN * 2 > privateConstants.HEIGHT) {
    throw "Height cannot be greater than height of container.";
  }

  return true;
};
const moveItemInitialChecks = (context, index, toX, toY) => {
  const pd = getPositionData(context);
  const privateConstants = constants_privateConstants(context);

  if (index < 0 || index >= pd.length) {
    // invalid index
    throw "Index out of bounds.";
  }

  if (typeof toX !== "number" || typeof toY !== "number") {
    throw "toX or toY is not a number.";
  }

  if (toX < privateConstants.MARGIN || toY < privateConstants.MARGIN) {
    // falls outside
    throw "Left edges falls outside the grid area.";
  }

  if (toX + pd[index].width + privateConstants.MARGIN > privateConstants.WIDTH) {
    // falls outside
    throw "Right edges falls outside the grid area.";
  }

  return true;
};
const getResizeModifiedItem = (toX, toY, width, height, MARGIN) => {
  return {
    x: toX,
    y: toY,
    width: width,
    height: height,
    mX: toX - MARGIN,
    mY: toY - MARGIN,
    mWidth: width + MARGIN * 2,
    mHeight: height + MARGIN * 2,
    x1: toX,
    y1: toY,
    x2: toX + width,
    y2: toY + height,
    mX1: toX - MARGIN,
    mY1: toY - MARGIN,
    mX2: toX + width + MARGIN,
    mY2: toY + height + MARGIN
  };
};
const getMoveModifiedItem = (toX, toY, item, MARGIN) => {
  return {
    x: toX,
    y: toY,
    width: item.width,
    height: item.height,
    mX: toX - MARGIN,
    mY: toY - MARGIN,
    mWidth: item.width + MARGIN * 2,
    mHeight: item.height + MARGIN * 2,
    x1: toX,
    y1: toY,
    x2: toX + item.width,
    y2: toY + item.height,
    mX1: toX - MARGIN,
    mY1: toY - MARGIN,
    mX2: toX + item.width + MARGIN,
    mY2: toY + item.height + MARGIN
  };
};
const resetDemoUIChanges = context => {
  const pd = getPositionData(context);
  const e = variables_elements(context);
  const len = pd.length;

  for (let i = 0; i < len; i++) {
    if (e.$limberGridViewItems[i]) {
      e.$limberGridViewItems[i].style.transform = `translate(${pd[i].x1}px, ${pd[i].y1}px)`;
      e.$limberGridViewItems[i].style.width = `${pd[i].width}px`;
      e.$limberGridViewItems[i].style.height = `${pd[i].height}px`;
    }
  }
};
const movePointAdjust = (context, toX, toY, index) => {
  const pd = getPositionData(context);
  const privateConstants = constants_privateConstants(context); // const THRESHOLD = privateConstants.WIDTH / 4;

  const THRESHOLD = privateConstants.DEFINED_MIN_HEIGHT_AND_WIDTH * 1.5;
  const len = pd.length;
  const pt = {
    x: toX,
    y: toY
  };
  let inside;
  let tl, tr, bl, tld, trd, bld;
  let ldistance = Number.MAX_SAFE_INTEGER;
  let rdistance = Number.MAX_SAFE_INTEGER;
  let bdistance = Number.MAX_SAFE_INTEGER;
  let toXAdj, toYAdj;
  let isToAdjPresent = false;
  let toAdjIndex;
  let toAdjDirection;

  for (let i = 0; i < len; i++) {
    if (isPointInsideOrTouchRectWithMargin(pd[i], pt)) {
      inside = i;
      toX = pd[inside].x;
      toY = pd[inside].y; // break;
    }

    if (i === index) {
      continue;
    }

    tl = {
      x: pd[i].mX1,
      y: pd[i].mY1
    };
    tr = {
      x: pd[i].mX2,
      y: pd[i].mY1
    };
    bl = {
      x: pd[i].mX1,
      y: pd[i].mY2
    };
    tld = getDistanceBetnPts(tl, pt);
    trd = getDistanceBetnPts(tr, pt);
    bld = getDistanceBetnPts(bl, pt);

    if (tld < ldistance && tld < rdistance && tld < bdistance && pt.x < tl.x && tld <= THRESHOLD) {
      if (tl.x - privateConstants.MARGIN - pd[index].width >= privateConstants.MARGIN) {
        toXAdj = tl.x - privateConstants.MARGIN - pd[index].width;
        toYAdj = tl.y + privateConstants.MARGIN;
        ldistance = tld;
        isToAdjPresent = true;
        toAdjIndex = i;
        toAdjDirection = "left";
      }
    }

    if (trd < rdistance && trd < ldistance && trd < bdistance && pt.x > tr.x && trd <= THRESHOLD) {
      if (tr.x + privateConstants.MARGIN + pd[index].width < privateConstants.WIDTH) {
        toXAdj = tr.x + privateConstants.MARGIN;
        toYAdj = tr.y + privateConstants.MARGIN;
        rdistance = trd;
        isToAdjPresent = true;
        toAdjIndex = i;
        toAdjDirection = "right";
      }
    }

    if (bld < bdistance && bld < ldistance && bld < rdistance && pt.y >= bl.y && pt.x >= bl.x && bld <= THRESHOLD) {
      if (tl.x + privateConstants.MARGIN + pd[index].width < privateConstants.WIDTH) {
        toXAdj = tl.x + privateConstants.MARGIN;
        toYAdj = bl.y + privateConstants.MARGIN;
        bdistance = bld;
        isToAdjPresent = true;
        toAdjIndex = i;
        toAdjDirection = "bottom";
      }
    }
  }

  return {
    to: {
      toX,
      toY
    },
    toAdj: {
      toX: toXAdj,
      toY: toYAdj
    },
    overlappedItemIndex: inside,
    isToAdjPresent,
    toAdjIndex,
    toAdjDirection
  };
};
const resizeSizeAdjust = (context, x, y, width, height, index, forBottomRight) => {
  const pd = getPositionData(context);
  const privateConstants = constants_privateConstants(context); // const DISTANCE_THRESHOLD = privateConstants.WIDTH / 4;

  const DISTANCE_THRESHOLD = privateConstants.MIN_HEIGHT_AND_WIDTH / 2;
  const AXIS_DISTANCE_THRESHOLD = privateConstants.MIN_HEIGHT_AND_WIDTH / 10;
  const len = pd.length;
  const tlpt = {
    x: x,
    y: y
  };
  const trpt = {
    x: x + width,
    y: y
  };
  const brpt = {
    x: x + width,
    y: y + height
  };
  const blpt = {
    x: x,
    y: y + height
  };
  let tl, bl, br, tr, blptTobr, brptTobl, trptTobr, brptTotr, blptTotl, tlptTobl;
  let ldistance = Number.MAX_SAFE_INTEGER;
  let rdistance = Number.MAX_SAFE_INTEGER;
  let tdistance = Number.MAX_SAFE_INTEGER;
  let bdistance = Number.MAX_SAFE_INTEGER;
  let isToAdjPresent = false;
  let toAdjIndex;
  let hToAdjDirection;
  let wToAdjDirection;
  let hLatchPoint;
  let wLatchPoint;
  let latchPoint;

  for (let i = 0; i < len; i++) {
    if (i === index) {
      continue;
    }

    tl = {
      x: pd[i].x1,
      y: pd[i].y1
    };
    bl = {
      x: pd[i].x1,
      y: pd[i].y2
    };
    br = {
      x: pd[i].x2,
      y: pd[i].y2
    };
    tr = {
      x: pd[i].x2,
      y: pd[i].y1
    };
    brptTobl = getDistanceBetnPts(bl, brpt);
    blptTobr = getDistanceBetnPts(br, blpt);
    trptTobr = getDistanceBetnPts(br, trpt);
    brptTotr = getDistanceBetnPts(tr, brpt);
    blptTotl = getDistanceBetnPts(tl, blpt);
    tlptTobl = getDistanceBetnPts(bl, tlpt);

    if (brptTobl < rdistance && brptTobl < ldistance && brpt.x < bl.x && Math.abs(brpt.y - bl.y) <= AXIS_DISTANCE_THRESHOLD && brpt.x + privateConstants.MARGIN <= privateConstants.WIDTH) {
      height = bl.y - trpt.y;
      rdistance = brptTobl;
      isToAdjPresent = true;
      toAdjIndex = i;
      hToAdjDirection = "right";
      hLatchPoint = bl;
    }

    if (blptTobr < ldistance && blptTobr < rdistance && blpt.x > br.x && Math.abs(blpt.y - br.y) <= AXIS_DISTANCE_THRESHOLD && brpt.x + privateConstants.MARGIN <= privateConstants.WIDTH) {
      height = br.y - tlpt.y;
      ldistance = blptTobr;
      isToAdjPresent = true;
      toAdjIndex = i;
      hToAdjDirection = "left";
      hLatchPoint = br;
    }

    if (trptTobr < tdistance && trptTobr < bdistance && trptTobr <= DISTANCE_THRESHOLD && Math.abs(trpt.x - br.x) <= AXIS_DISTANCE_THRESHOLD && forBottomRight) {
      width = br.x - tlpt.x;
      tdistance = trptTobr;
      isToAdjPresent = true;
      toAdjIndex = i;
      wToAdjDirection = "top";
      wLatchPoint = br;
    }

    if (brptTotr < bdistance && brptTotr < tdistance && brptTotr <= DISTANCE_THRESHOLD && Math.abs(brpt.x - tr.x) <= AXIS_DISTANCE_THRESHOLD && forBottomRight) {
      width = tr.x - blpt.x;
      bdistance = brptTotr;
      isToAdjPresent = true;
      toAdjIndex = i;
      wToAdjDirection = "bottom";
      wLatchPoint = tr;
    }

    if (tlptTobl < tdistance && tlptTobl < bdistance && tlptTobl <= DISTANCE_THRESHOLD && Math.abs(tlpt.x - bl.x) <= AXIS_DISTANCE_THRESHOLD && !forBottomRight) {
      width = trpt.x - bl.x;
      x = bl.x;
      tdistance = tlptTobl;
      isToAdjPresent = true;
      toAdjIndex = i;
      wToAdjDirection = "top";
      wLatchPoint = bl;
    }

    if (blptTotl < bdistance && blptTotl < tdistance && blptTotl <= DISTANCE_THRESHOLD && Math.abs(blpt.x - tl.x) <= AXIS_DISTANCE_THRESHOLD && !forBottomRight) {
      width = brpt.x - tl.x;
      x = tl.x;
      bdistance = blptTotl;
      isToAdjPresent = true;
      toAdjIndex = i;
      wToAdjDirection = "bottom";
      wLatchPoint = tl;
    }
  }

  if (hLatchPoint && wLatchPoint) {
    latchPoint = {
      x: wLatchPoint.x,
      y: hLatchPoint.y
    };
  } else if (hLatchPoint) {
    latchPoint = hLatchPoint;
  } else if (wLatchPoint) {
    latchPoint = wLatchPoint;
  }

  return {
    x: x,
    y: y,
    height,
    width,
    isToAdjPresent,
    toAdjIndex,
    hToAdjDirection,
    wToAdjDirection,
    latchPoint
  };
};
const positionArranged = (context, arranged) => {
  const e = variables_elements(context);

  for (const key in arranged) {
    if (e.$limberGridViewItems[key]) {
      const item = arranged[key];
      e.$limberGridViewItems[key].style.transform = `translate(${item.x}px, ${item.y}px)`;
      e.$limberGridViewItems[key].style.width = `${item.width}px`;
      e.$limberGridViewItems[key].style.height = `${item.height}px`;
    }
  }
};
// CONCATENATED MODULE: ./src/libs/rect/rectUtils.js
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

const isPointInsideRect = (rect, point) => {
  if (point.x > rect.x1 && point.x < rect.x2 && point.y > rect.y1 && point.y < rect.y2) {
    return true;
  }
};
const isPointInsideOrTouchRect = (rect, point) => {
  if (point.x >= rect.x1 && point.x <= rect.x2 && point.y >= rect.y1 && point.y <= rect.y2) {
    return true;
  }
};
const doRectsOverlap = (rectA, rectB) => {
  if (isNaN(rectA.x1) || isNaN(rectA.y1) || isNaN(rectA.x2) || isNaN(rectA.y2) || isNaN(rectB.x1) || isNaN(rectB.y1) || isNaN(rectB.x2) || isNaN(rectB.y2)) {
    return false;
  }

  if (rectA.x1 >= rectB.x2 || rectB.x1 >= rectA.x2 || rectA.y1 >= rectB.y2 || rectB.y1 >= rectA.y2) {
    return false;
  }

  return true;
};
const doRectsOverlapOrTouch = (rectA, rectB) => {
  if (isNaN(rectA.x1) || isNaN(rectA.y1) || isNaN(rectA.x2) || isNaN(rectA.y2) || isNaN(rectB.x1) || isNaN(rectB.y1) || isNaN(rectB.x2) || isNaN(rectB.y2)) {
    return false;
  }

  if (rectA.x1 > rectB.x2 || rectB.x1 > rectA.x2 || rectA.y1 > rectB.y2 || rectB.y1 > rectA.y2) {
    return false;
  }

  return true;
};
const doRectsOnlyTouch = (rectA, rectB) => {
  if (isNaN(rectA.x1) || isNaN(rectA.y1) || isNaN(rectA.x2) || isNaN(rectA.y2) || isNaN(rectB.x1) || isNaN(rectB.y1) || isNaN(rectB.x2) || isNaN(rectB.y2)) {
    return false;
  }

  if (rectA.x1 > rectB.x2 || rectB.x1 > rectA.x2 || rectA.y1 > rectB.y2 || rectB.y1 > rectA.y2) {
    return false;
  }

  if (doRectsOverlap(rectA, rectB) === false) return true;
};
const subtractRect = (rectA, rectB) => {
  // gives the non overlapping free spaces in rectA
  if (!doRectsOverlap(rectA, rectB)) {
    return [];
  }
  /*
  	       tl        tm         tr
         ____|_______________|___
         |   |               |   |
     ____|___|_______________|___|____
         |   |               |   |
         |   |               |   |
  lm      |   |               |   |      rm
         |   |               |   |
     ____|___|_______________|___|___
         |   |               |   |
         |___|_______________|___|
             |               |
          bl        bm         br
  	*/


  const subRects = {
    subRectT: {
      x1: rectA.x1,
      x2: rectA.x2,
      y1: rectA.y1,
      y2: rectB.y1
    },
    subRectR: {
      x1: rectB.x2,
      x2: rectA.x2,
      y1: rectA.y1,
      y2: rectA.y2
    },
    subRectB: {
      x1: rectA.x1,
      x2: rectA.x2,
      y1: rectB.y2,
      y2: rectA.y2
    },
    subRectL: {
      x1: rectA.x1,
      x2: rectB.x1,
      y1: rectA.y1,
      y2: rectA.y2
    }
  };

  for (const key in subRects) {
    if (!rectUtils_isValidRect(subRects[key])) {
      subRects[key] = undefined;
    }
  }

  let tl, tm, tr, rm, br, bm, bl, lm;
  let tlNtm, tmNtr, trNrm, rmNbr, brNbm, bmNbl, blNlm, lmNtl;

  if (subRects.subRectT && subRects.subRectR) {
    tlNtm = {
      x1: subRects.subRectT.x1,
      x2: subRects.subRectR.x1,
      y1: subRects.subRectT.y1,
      y2: subRects.subRectT.y2
    };
    tr = {
      x1: subRects.subRectR.x1,
      x2: subRects.subRectR.x2,
      y1: subRects.subRectR.y1,
      y2: subRects.subRectT.y2
    };
    rmNbr = {
      x1: subRects.subRectR.x1,
      x2: subRects.subRectR.x2,
      y1: subRects.subRectT.y2,
      y2: subRects.subRectR.y2
    };
  }

  if (subRects.subRectR && subRects.subRectB) {
    trNrm = {
      x1: subRects.subRectR.x1,
      x2: subRects.subRectR.x2,
      y1: subRects.subRectR.y1,
      y2: subRects.subRectB.y1
    };
    br = {
      x1: subRects.subRectR.x1,
      x2: subRects.subRectR.x2,
      y1: subRects.subRectB.y1,
      y2: subRects.subRectR.y2
    };
    bmNbl = {
      x1: subRects.subRectB.x1,
      x2: subRects.subRectR.x1,
      y1: subRects.subRectB.y1,
      y2: subRects.subRectR.y2
    };
  }

  if (subRects.subRectB && subRects.subRectL) {
    lmNtl = {
      x1: subRects.subRectL.x1,
      x2: subRects.subRectL.x2,
      y1: subRects.subRectL.y1,
      y2: subRects.subRectB.y1
    };
    bl = {
      x1: subRects.subRectB.x1,
      x2: subRects.subRectL.x2,
      y1: subRects.subRectB.y1,
      y2: subRects.subRectL.y2
    };
    brNbm = {
      x1: subRects.subRectL.x2,
      x2: subRects.subRectB.x2,
      y1: subRects.subRectB.y1,
      y2: subRects.subRectB.y2
    };
  }

  if (subRects.subRectL && subRects.subRectT) {
    blNlm = {
      x1: subRects.subRectL.x1,
      x2: subRects.subRectL.x2,
      y1: subRects.subRectT.y2,
      y2: subRects.subRectL.y2
    };
    tl = {
      x1: subRects.subRectL.x1,
      x2: subRects.subRectL.x2,
      y1: subRects.subRectL.y1,
      y2: subRects.subRectT.y2
    };
    tmNtr = {
      x1: subRects.subRectL.x2,
      x2: subRects.subRectT.x2,
      y1: subRects.subRectT.y1,
      y2: subRects.subRectT.y2
    };
  } // eslint-disable-next-line prefer-const


  tm = horizontalSubtract(tlNtm, tl) || horizontalSubtract(tmNtr, tr) || tlNtm || tmNtr; // eslint-disable-next-line prefer-const

  rm = verticalSubtract(trNrm, tr) || verticalSubtract(rmNbr, br) || trNrm || rmNbr; // eslint-disable-next-line prefer-const

  bm = horizontalSubtract(brNbm, br) || horizontalSubtract(bmNbl, bl) || brNbm || bmNbl; // eslint-disable-next-line prefer-const

  lm = verticalSubtract(blNlm, bl) || verticalSubtract(lmNtl, tl) || blNlm || lmNtl;
  let rects = [tl, tm, tr, rm, br, bm, bl, lm];
  rects = rects.filter(o => o);

  if (rects.length === 0) {
    for (const key in subRects) {
      if (subRects[key]) {
        rects.push(subRects[key]);
      }
    }
  } // for (const rect of rects) {
  // 	rect.x = rect.x1;
  // 	rect.y = rect.y1;
  // 	rect.width = rect.x2 - rect.x1;
  // 	rect.height = rect.y2 - rect.y1;
  // }


  return rects;
};

const horizontalSubtract = (rectA, rectB) => {
  if (!rectA || !rectB) return undefined;
  /*
  	Case I   
  	____________________
  	| A___              |
  	||_B__|             |
  	|___________________|
  		Case II
  	____________________
  	| A            ____ |
  	|             |_B__||
  	|___________________|
  */

  let result;

  if (rectA.x1 === rectB.x1) {
    // Case I
    result = {
      x1: rectB.x2,
      x2: rectA.x2,
      y1: rectA.y1,
      y2: rectA.y2
    };
  } else if (rectA.x2 === rectB.x2) {
    // Case II
    result = {
      x1: rectA.x1,
      x2: rectB.x1,
      y1: rectA.y1,
      y2: rectA.y2
    };
  }

  return result;
};

const verticalSubtract = (rectA, rectB) => {
  if (!rectA || !rectB) return undefined;
  /*
     Case I        Case II
     _______       ________
     |A____ |      | A     |
     | |B  ||      |       |
     | |___||      |       |
     |      |      |  ____ |
     |      |      |  |B  ||	
     |      |      |  |___||	
     |______|      |_______|
  */

  let result;

  if (rectA.y1 === rectB.y1) {
    // Case I
    // result = { tl: rectB.bl, tr: rectB.br, br: rectA.br, bl: rectA.bl };
    result = {
      x1: rectA.x1,
      x2: rectA.x2,
      y1: rectB.y2,
      y2: rectA.y2
    };
  } else if (rectA.y2 === rectB.y2) {
    // Case II
    result = {
      x1: rectA.x1,
      x2: rectA.x2,
      y1: rectA.y1,
      y2: rectB.y1
    };
  }

  return result;
};

const rectUtils_isValidRect = function (rect) {
  if (rect.x1 >= rect.x2 || rect.y1 >= rect.y2) {
    return false;
  }

  return true;
};
const rectUtils_isValidRectHW = function (rect) {
  if (rect.x >= rect.x + rect.width || rect.y >= rect.y + rect.height) {
    return false;
  }

  return true;
};
const mergeRects = (rectA, rectB) => {
  const result = new Array(2);
  let count = 0;
  const leftX1 = rectA.x1 < rectB.x1 ? rectA : rectB;
  const rightX2 = rectA.x2 > rectB.x2 ? rectA : rectB;
  const higherY1 = rectA.y1 > rectB.y1 ? rectA : rectB;
  const lowerY2 = rectA.y2 < rectB.y2 ? rectA : rectB;
  const horizotal = {
    x1: leftX1.x1,
    x2: rightX2.x2,
    y1: higherY1.y1,
    y2: lowerY2.y2
  };
  const higherX1 = rectA.x1 > rectB.x1 ? rectA : rectB;
  const lowerX2 = rectA.x2 < rectB.x2 ? rectA : rectB;
  const upperY1 = rectA.y1 < rectB.y1 ? rectA : rectB;
  const bottomY2 = rectA.y2 > rectB.y2 ? rectA : rectB;
  const vertical = {
    x1: higherX1.x1,
    x2: lowerX2.x2,
    y1: upperY1.y1,
    y2: bottomY2.y2
  };

  if (rectUtils_isValidRect(horizotal) && !isRectInside(rectA, horizotal) && !isRectInside(rectB, horizotal)) {
    result[count++] = horizotal;
  }

  if (rectUtils_isValidRect(vertical) && !isRectInside(rectA, vertical) && !isRectInside(rectB, vertical)) {
    result[count++] = vertical;
  }

  result.length = count; // for (const rect of result) {
  // 	rect.x = rect.x1;
  // 	rect.y = rect.y1;
  // 	rect.width = rect.x2 - rect.x1;
  // 	rect.height = rect.y2 - rect.y1;
  // }

  return result;
};
const isRectInside = (rectA, rectB) => {
  // is rectB inside rectA
  if (rectA.x1 <= rectB.x1 && rectA.x2 >= rectB.x2 && rectA.y1 <= rectB.y1 && rectA.y2 >= rectB.y2) {
    return true;
  }
};
const areRectsIdentical = (rectA, rectB) => {
  if (rectA.x1 === rectB.x1 && rectA.x2 === rectB.x2 && rectA.y1 === rectB.y1 && rectA.y2 === rectB.y2) {
    return true;
  }

  return false;
};
const isRectLarger = (rectA, rectB) => {
  const ah = getHypotenuseSquared(rectA.x1, rectA.y1, rectA.x2, rectA.y2);
  const bh = getHypotenuseSquared(rectB.x1, rectB.y1, rectB.x2, rectB.y2);

  if (ah > bh) {
    return true;
  }
};
// CONCATENATED MODULE: ./src/libs/arrange/arrangeUtils.js
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






const getMinMaxXY = (context, affectedItems, resizedLeftX, resizedRightX, resizedBottomY, toY, movedBottomY) => {
  const pd = getPositionData(context);
  const mpd = getModifiedPositionData(context);
  const privateConstants = constants_privateConstants(context);
  let minY = Number.MAX_SAFE_INTEGER;
  let maxY = 0;
  let minX = Number.MAX_SAFE_INTEGER;
  let maxX = 0;
  const len = affectedItems.length;

  for (let i = 0; i < len; i++) {
    if (pd[affectedItems[i]].y < minY) {
      minY = pd[affectedItems[i]].y;
    }

    if (pd[affectedItems[i]].y2 > maxY) {
      maxY = pd[affectedItems[i]].y2;
    }

    if (pd[affectedItems[i]].x < minX) {
      minX = pd[affectedItems[i]].x;
    }

    if (pd[affectedItems[i]].x2 > maxX) {
      maxX = pd[affectedItems[i]].x2;
    }
  }

  if (resizedBottomY > maxY) maxY = resizedBottomY;
  if (resizedRightX > maxX) maxX = resizedRightX;
  if (resizedLeftX < minX) minX = resizedLeftX;
  if (toY < minY) minY = toY;
  if (movedBottomY > maxY) maxY = movedBottomY;

  if (maxY - minY > privateConstants.HEIGHT * 1.5) {
    minY = mpd[affectedItems[len - 1]].y;
    maxY = mpd[affectedItems[len - 1]].y2;
  }

  return {
    minX: minX - privateConstants.MARGIN,
    maxX: maxX + privateConstants.MARGIN,
    minY: minY - privateConstants.MARGIN,
    maxY: maxY + privateConstants.MARGIN
  };
};
const getBottomMax = (context, minX, maxX) => {
  const pd = getPositionData(context);
  let max = 0;
  let item;
  const len = pd.length;

  for (let i = 0; i < len; i++) {
    item = pd[i];

    if (pd[i].y2 > max && item.mX < maxX && item.mX2 > minX) {
      max = pd[i].y2;
    }
  }

  return max;
};
const getTopBottomWS = (context, workSpaceRect, minX, maxX) => {
  const topWorkSpace = {
    x1: minX,
    x2: maxX,
    y1: 0,
    y2: workSpaceRect.y1 < 0 ? 0 : workSpaceRect.y1
  };
  const bottomMax = getBottomMax(context, minX, maxX);
  const bottomWorkSpace = {
    x1: minX,
    x2: maxX,
    y1: workSpaceRect.y2,
    y2: bottomMax > workSpaceRect.y2 ? bottomMax : workSpaceRect.y2
  };
  return {
    topWorkSpace,
    bottomWorkSpace
  };
};
const getItemsInWorkSpaceMap = arr => {
  const map = {};

  for (const index of arr) {
    map[index] = true;
  }

  return map;
};
const arrangeUtils_getItemsInWorkSpace = (context, workSpaceRect, getIndices = false, excludeMap) => {
  const mpd = getModifiedPositionData(context);
  const len = mpd.length;
  const itemsInWorkSpace = new Array(len);
  let count = 0;
  let item;

  for (let i = 0; i < len; i++) {
    item = mpd[i];

    if (excludeMap && excludeMap[i]) {
      continue;
    }

    if (doRectsOverlapSingleItemMargin(workSpaceRect, item)) {
      if (!getIndices) {
        itemsInWorkSpace[count++] = mpd[i];
      } else {
        itemsInWorkSpace[count++] = i;
      }
    }
  }

  itemsInWorkSpace.length = count;
  return itemsInWorkSpace;
};
const getItemsBelowBottomWorkSpace = (context, workSpaceRect, getIndices = false, excludeMap) => {
  const mpd = getModifiedPositionData(context);

  if (!workSpaceRect) {
    return [];
  }

  const len = mpd.length;
  const items = new Array(len);
  let count = 0;

  for (let i = 0; i < len; i++) {
    if (excludeMap && excludeMap[i]) {
      continue;
    }

    if (workSpaceRect.y2 <= mpd[i].mY1) {
      if (!getIndices) {
        items[count++] = mpd[i];
      } else {
        items[count++] = i;
      }
    }
  }

  items.length = count;
  return items;
};
const getResizeWSItemsDetail = (context, ws, topWs, bottomWs, cWs, arranged, itemsToArrange, getIndices = false) => {
  const mpd = getModifiedPositionData(context);
  const wsPlusTopWs = {
    x1: ws.x1,
    x2: ws.x2,
    y1: topWs ? topWs.y1 : ws.y1,
    y2: ws.y2
  };
  const filteredItemsToArrange = itemsToArrange.filter(o => !arranged[o]);
  const len = mpd.length;
  const updatedItemsToArrange = new Array(len);
  let uCount = 0;
  const itemsInWorkSpace = new Array(len);
  let iCount = 0;

  for (let i = 0; i < len; i++) {
    const _item = mpd[i];

    if (doRectsOverlapSingleItemMargin(cWs, _item)) {
      if (arranged[i]) {
        if (!getIndices) {
          itemsInWorkSpace[iCount++] = mpd[i];
        } else {
          itemsInWorkSpace[iCount++] = i;
        }
      } else if (doRectsOverlapSingleItemMargin(wsPlusTopWs, _item)) {
        if (!getIndices) {
          itemsInWorkSpace[iCount++] = mpd[i];
        } else {
          itemsInWorkSpace[iCount++] = i;
        }
      } else if (doRectsOverlapSingleItemMargin(bottomWs, _item) && !isRectInside(bottomWs, _item)) {
        if (!getIndices) {
          itemsInWorkSpace[iCount++] = mpd[i];
        } else {
          itemsInWorkSpace[iCount++] = i;
        }
      } else if (doRectsOverlapSingleItemMargin(bottomWs, _item) && isRectInside(bottomWs, _item) && !arranged[i]) {
        updatedItemsToArrange[uCount++] = i;
        mpd[i].x = undefined;
        mpd[i].y = undefined;
      }
    }
  }

  itemsInWorkSpace.length = iCount;
  updatedItemsToArrange.length = uCount;
  return {
    updatedItemsToArrange: [...filteredItemsToArrange, ...updatedItemsToArrange],
    itemsInWorkSpace: itemsInWorkSpace
  };
};
const sweepLineSortX = (a, b) => {
  if (a.x === b.x) {
    return a.y - b.y;
  } else {
    return a.x - b.x;
  }
};
const rectSortX = (a, b) => {
  if (a.x1 === b.x1) {
    return a.y1 - b.y1;
  } else {
    return a.x1 - b.x1;
  }
};
const rectSortY = (a, b) => {
  if (a.y1 === b.y1) {
    return a.x1 - b.x1;
  } else {
    return a.y1 - b.y1;
  }
};
const rectSortHypotenusSquared = pd => {
  return (a, b) => getHypotenuseSquared(pd[a].x, pd[a].y, pd[a].x + pd[a].width, pd[a].y + pd[a].height) - getHypotenuseSquared(pd[b].x, pd[b].y, pd[b].x + pd[b].width, pd[b].y + pd[b].height);
};
const shouldFilterRect = function (suspect, rect) {
  if (isRectInside(suspect, rect) && suspect !== rect) {
    return true;
  }
};
const getSizeTest = (suspect, rect, MARGIN, DEFINED_MIN_HEIGHT_AND_WIDTH, SHRINK_TO_FIT) => {
  const h1 = rect.mWidth * rect.mWidth + rect.mHeight * rect.mHeight;
  const h2 = getHypotenuseSquared(suspect.x1, suspect.y1, suspect.x2, suspect.y2);

  if (h1 < h2 && suspect.x2 - suspect.x1 >= rect.mWidth && suspect.y2 - suspect.y1 >= rect.mHeight) {
    return true;
  }

  if (!SHRINK_TO_FIT) {
    return;
  }

  const THRESHOLD = SHRINK_TO_FIT;
  let match1 = {
    width: 0,
    height: 0
  };
  let match2 = {
    width: 0,
    height: 0
  };
  const aw = rect.mWidth;
  const bw = suspect.x2 - suspect.x1;
  const xw = (100 * aw - 100 * bw) / aw;

  if (xw <= THRESHOLD) {
    const factor = (suspect.x2 - suspect.x1) / rect.mWidth;
    const h = rect.mHeight * factor;

    if (h <= suspect.y2 - suspect.y1) {
      match1 = {
        width: suspect.x2 - suspect.x1 - MARGIN * 2,
        height: h - MARGIN * 2
      };
    }
  }

  const ah = rect.mHeight;
  const bh = suspect.y2 - suspect.y1;
  const xh = (100 * ah - 100 * bh) / ah;

  if (xh <= THRESHOLD) {
    const factor = (suspect.y2 - suspect.y1) / rect.mHeight;
    const w = factor * rect.mWidth;

    if (w <= suspect.x2 - suspect.x1) {
      match2 = {
        width: w - MARGIN * 2,
        height: suspect.y2 - suspect.y1 - MARGIN * 2
      };
    }
  }

  if (match1.width < DEFINED_MIN_HEIGHT_AND_WIDTH || match1.height < DEFINED_MIN_HEIGHT_AND_WIDTH) {
    match1.width = 0;
    match1.height = 0;
  }

  if (match2.width < DEFINED_MIN_HEIGHT_AND_WIDTH || match2.height < DEFINED_MIN_HEIGHT_AND_WIDTH) {
    match2.width = 0;
    match2.height = 0;
  }

  const m1Hypo = match1.width * match1.width + match1.height * match1.height;
  const m2Hypo = match2.width * match2.width + match2.height * match2.height;

  if (m1Hypo < m2Hypo && match1.width !== 0) {
    return match1.width > 0 ? match1 : undefined;
  } else {
    return match2.width > 0 ? match2 : undefined;
  }
};
const getDistanceForTest = (suspect, rect) => {
  return getHypotenuseSquared(suspect.x1, suspect.y1, rect.mX1, rect.mY1);
};
const shiftItemsDown = (context, items, height) => {
  const mpd = getModifiedPositionData(context);
  const len = items.length;

  for (let i = 0; i < len; i++) {
    mpd[items[i]].y += height;
    mpd[items[i]].mY += height;
    mpd[items[i]].y1 += height;
    mpd[items[i]].y2 += height;
    mpd[items[i]].mY1 += height;
    mpd[items[i]].mY2 += height;
  }
};
const shiftItemsUp = function (context, y, shiftHeight) {
  const pd = getPositionData(context);
  const e = variables_elements(context);
  const len = pd.length;

  for (let i = 0; i < len; i++) {
    if (pd[i].y >= y) {
      pd[i].y -= shiftHeight;
      pd[i].mY -= shiftHeight;
      pd[i].y1 -= shiftHeight;
      pd[i].y2 -= shiftHeight;
      pd[i].mY1 -= shiftHeight;
      pd[i].mY2 -= shiftHeight;

      if (e.$limberGridViewItems[i]) {
        e.$limberGridViewItems[i].style.transform = "translate(" + pd[i].x1 + "px, " + pd[i].y1 + "px)";
      }
    }
  }
};
const addItemAllowCheck = function (context, x, y, width, height) {
  const privateConstants = constants_privateConstants(context);
  const pd = getPositionData(context);
  var tempPlane = {
    x1: x - privateConstants.MARGIN,
    y1: y - privateConstants.MARGIN,
    x2: x + width + privateConstants.MARGIN,
    y2: y + height + privateConstants.MARGIN
  };

  if (x < 0 || y < 0) {
    return false;
  }

  if (typeof width !== "number" || typeof height !== "number") {
    return false;
  }

  if (x + width > privateConstants.WIDTH) {
    return false;
  }

  if (width < 50 || height < 50) {
    return false;
  }

  let isInside;
  const len = pd.length;

  for (let i = 0; i < len; i++) {
    isInside = doRectsOverlapOrTouchSingleItemMargin(tempPlane, pd[i]);

    if (isInside) {
      return false;
    }
  }

  return true;
};
const cutSpaceAllowCheck = function (context, x, y, width, height) {
  const privateConstants = constants_privateConstants(context);
  const pd = getPositionData(context);
  const tempPlane = {
    x1: 0,
    y1: y,
    x2: privateConstants.WIDTH,
    y2: y + height
  };

  if (typeof width !== "number" || typeof height !== "number") {
    return false;
  }

  let minY = tempPlane.y2;
  let maxY = tempPlane.y1;
  const len = pd.length;

  for (let i = 0; i < len; i++) {
    if (isRectInsideSingleItemMargin(tempPlane, pd[i]) || pd[i].mY1 < tempPlane.y1 && pd[i].mY2 > tempPlane.y2) {
      return false;
    }

    if (!doRectsOverlapOrTouchSingleItemMargin(tempPlane, pd[i])) {
      continue;
    }

    const topPoint = {
      x: pd[i].mX1,
      y: pd[i].mY1
    };
    const bottomPoint = {
      x: pd[i].mX2,
      y: pd[i].mY2
    };

    if (pd[i].mY1 < minY && isPointInsideOrTouchRect(tempPlane, topPoint)) {
      minY = pd[i].mY1;
    }

    if (pd[i].mY2 > maxY && isPointInsideOrTouchRect(tempPlane, bottomPoint)) {
      maxY = pd[i].mY2;
    }
  }

  if (minY - maxY > 0) {
    return {
      y: maxY,
      shiftHeight: minY - maxY
    };
  }

  return false;
};
// CONCATENATED MODULE: ./src/store/variables/trees.js
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
const setTree = function (context, key, value) {
  context.store.variables.trees[key] = value;
};

const getTree = function (context, key) {
  return context.store.variables.trees[key];
};


/* harmony default export */ var trees = (getTree);
// CONCATENATED MODULE: ./src/store/variables/stacks.js
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
const setStack = function (context, key, value) {
  context.store.variables.stacks[key] = value;
};

const getStack = function (context, key) {
  return context.store.variables.stacks[key];
};


/* harmony default export */ var stacks = (getStack);
// CONCATENATED MODULE: ./src/libs/debug/debug.js
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


const printUnmergedFreeRects = (context, arr) => {
  const e = variables_elements(context);
  let len = e.$limberGridViewDebugUnmergedRects.length;

  for (let i = 0; i < len; i++) {
    e.$limberGridView.removeChild(e.$limberGridViewDebugUnmergedRects[i]);
  }

  set$limberGridViewDebugUnmergedRects(context, []); // USE it to hide items
  // e.$limberGridView.innerHTML = "";

  len = arr.length;
  let html;
  let node;

  for (let i = 0; i < len; i++) {
    node = document.createElement("div");
    node.setAttribute("class", "limber-grid-view-debug-rect limber-grid-view-debug-unmerged-rect");
    node.setAttribute("id", `limber-grid-view-debug-unmerged-rect-${arr[i].id}`);
    node.setAttribute("tabindex", "-1");
    node.setAttribute("title", `${arr[i].id}`);
    node.innerHTML = arr[i].id;
    node.style.transform = `translate(${arr[i].x1}px, ${arr[i].y1}px)`;
    node.style.width = arr[i].x2 - arr[i].x1 + "px";
    node.style.height = arr[i].y2 - arr[i].y1 + "px";
    e.$limberGridView.appendChild(node);
  }

  set$limberGridViewDebugUnmergedRects(context, e.$limberGridView.querySelectorAll(".limber-grid-view-debug-unmerged-rect"));
};
const printMergedFreeRects = (context, arr) => {
  const e = variables_elements(context);
  let len = e.$limberGridViewDebugMergedFreeRects.length;

  for (let i = 0; i < len; i++) {
    e.$limberGridView.removeChild(e.$limberGridViewDebugMergedFreeRects[i]);
  }

  set$limberGridViewDebugMergedFreeRects(context, []); // USE it to hide items
  // e.$limberGridView.innerHTML = "";

  len = arr.length;
  let html;
  let node;

  for (let i = 0; i < len; i++) {
    node = document.createElement("div");
    node.setAttribute("class", `limber-grid-view-debug-rect limber-grid-view-debug-merged-free-rect`);
    node.setAttribute("id", `limber-grid-view-debug-merged-free-rect-${arr[i].id}`);
    node.setAttribute("tabindex", -1);
    node.setAttribute("title", `${arr[i].id}`);
    node.innerHTML = arr[i].id;
    node.style.transform = `translate(${arr[i].x1}px, ${arr[i].y1}px)`;
    node.style.width = arr[i].x2 - arr[i].x1 + "px";
    node.style.height = arr[i].y2 - arr[i].y1 + "px";
    e.$limberGridView.appendChild(node);
  }

  set$limberGridViewDebugMergedFreeRects(context, e.$limberGridView.querySelectorAll(".limber-grid-view-debug-merged-free-rect"));
};
const printResultStackRects = (context, arr) => {
  const e = variables_elements(context);
  let len = e.$limberGridViewDebugResultStackRects.length;

  for (let i = 0; i < len; i++) {
    e.$limberGridView.removeChild(e.$limberGridViewDebugResultStackRects[i]);
  }

  set$limberGridViewDebugResultStackRects(context, []); // USE it to hide items
  // e.$limberGridView.innerHTML = "";

  len = arr.length;
  let html;
  let node;

  for (let i = 0; i < len; i++) {
    node = document.createElement("div");
    node.setAttribute("class", `limber-grid-view-debug-rect limber-grid-view-debug-result-stack-rects`);
    node.setAttribute("id", `limber-grid-view-debug-result-stack-rects-${arr[i].id}`);
    node.setAttribute("tabindex", -1);
    node.setAttribute("title", `${arr[i].id}`);
    node.innerHTML = arr[i].id;
    node.style.transform = `translate(${arr[i].x1}px, ${arr[i].y1}px)`;
    node.style.width = arr[i].x2 - arr[i].x1 + "px";
    node.style.height = arr[i].y2 - arr[i].y1 + "px";
    e.$limberGridView.appendChild(node);
  }

  set$limberGridViewDebugResultStackRects(context, e.$limberGridView.querySelectorAll(".limber-grid-view-debug-result-stack-rects"));
};
const printStackRects = (context, arr) => {
  const e = variables_elements(context);
  let len = e.$limberGridViewDebugStackRects.length;

  for (let i = 0; i < len; i++) {
    e.$limberGridView.removeChild(e.$limberGridViewDebugStackRects[i]);
  }

  set$limberGridViewDebugStackRects(context, []); // USE it to hide items
  // e.$limberGridView.innerHTML = "";

  len = arr.length;
  let html;
  let node;

  for (let i = 0; i < len; i++) {
    node = document.createElement("div");
    node.setAttribute("class", `limber-grid-view-debug-rect limber-grid-view-debug-stack-rects`);
    node.setAttribute("id", `limber-grid-view-debug-stack-rects-${arr[i].id}`);
    node.setAttribute("tabindex", -1);
    node.setAttribute("title", `${arr[i].id}`);
    node.innerHTML = arr[i].id;
    node.style.transform = `translate(${arr[i].x1}px, ${arr[i].y1}px)`;
    node.style.width = arr[i].x2 - arr[i].x1 + "px";
    node.style.height = arr[i].y2 - arr[i].y1 + "px";
    e.$limberGridView.appendChild(node);
  }

  set$limberGridViewDebugStackRects(context, e.$limberGridView.querySelectorAll(".limber-grid-view-debug-stack-rects"));
};
const printMergedTempRects = (context, obj) => {
  const e = variables_elements(context);
  const node = document.createElement("div");
  node.setAttribute("class", `limber-grid-view-debug-rect limber-grid-view-debug-merged-temp-rects`);
  node.setAttribute("id", `limber-grid-view-debug-merged-temp-rects-${obj.id}`);
  node.setAttribute("tabindex", -1);
  node.setAttribute("title", `${obj.id}`);
  node.innerHTML = obj.id;
  node.style.transform = `translate(${obj.x1}px, ${obj.y1}px)`;
  node.style.width = obj.x2 - obj.x1 + "px";
  node.style.height = obj.y2 - obj.y1 + "px";
  e.$limberGridView.appendChild(node);
  set$limberGridViewDebugMergedTempRects(context, e.$limberGridView.querySelectorAll(".limber-grid-view-debug-merged-temp-rects"));
};
const printStackTopRect = (context, obj) => {
  const e = variables_elements(context);

  if (!obj) {
    if (e.$limberGridViewDebugStackTopRect) {
      e.$limberGridView.removeChild(e.$limberGridViewDebugStackTopRect);
      set$limberGridViewDebugStackTopRect(context, undefined);
    }

    return;
  }

  if (e.$limberGridViewDebugStackTopRect) {
    e.$limberGridView.removeChild(e.$limberGridViewDebugStackTopRect);
  }

  const node = document.createElement("div");
  node.setAttribute("class", `limber-grid-view-debug-rect limber-grid-view-debug-stack-top-rect`);
  node.setAttribute("id", `limber-grid-view-debug-stack-top-rect`);
  node.setAttribute("tabindex", -1);
  node.setAttribute("title", `${obj.id}`);
  node.innerHTML = obj.id;
  node.style.transform = `translate(${obj.x1}px, ${obj.y1}px)`;
  node.style.width = obj.x2 - obj.x1 + "px";
  node.style.height = obj.y2 - obj.y1 + "px";
  e.$limberGridView.appendChild(node);
  set$limberGridViewDebugStackTopRect(context, e.$limberGridView.querySelectorAll(".limber-grid-view-debug-stack-top-rect")[0]); // console.log(e.$limberGridViewDebugStackTopRect);
};
const printStackTopAdjRect = (context, obj) => {
  const e = variables_elements(context);

  if (!obj) {
    if (e.$limberGridViewDebugStackTopAdjRect) {
      e.$limberGridView.removeChild(e.$limberGridViewDebugStackTopAdjRect);
      set$limberGridViewDebugStackTopAdjRect(context, undefined);
    }

    return;
  }

  if (e.$limberGridViewDebugStackTopAdjRect) {
    e.$limberGridView.removeChild(e.$limberGridViewDebugStackTopAdjRect);
  }

  const node = document.createElement("div");
  node.setAttribute("class", `limber-grid-view-debug-rect limber-grid-view-debug-stack-top-adj-rect`);
  node.setAttribute("id", `limber-grid-view-debug-stack-top-adj-rect`);
  node.setAttribute("tabindex", -1);
  node.setAttribute("title", `${obj.id}`);
  node.innerHTML = obj.id;
  node.style.transform = `translate(${obj.x1}px, ${obj.y1}px)`;
  node.style.width = obj.x2 - obj.x1 + "px";
  node.style.height = obj.y2 - obj.y1 + "px";
  e.$limberGridView.appendChild(node);
  set$limberGridViewDebugStackTopAdjRect(context, e.$limberGridView.querySelectorAll(".limber-grid-view-debug-stack-top-adj-rect")[0]); // console.log(e.$limberGridViewDebugStackTopAdjRect);
};
const printMergedRect = (context, obj) => {
  const e = variables_elements(context);

  if (!obj) {
    if (e.$limberGridViewDebugMergedRect) {
      e.$limberGridView.removeChild(e.$limberGridViewDebugMergedRect);
      set$limberGridViewDebugMergedRect(context, undefined);
    }

    return;
  }

  if (e.$limberGridViewDebugMergedRect) {
    e.$limberGridView.removeChild(e.$limberGridViewDebugMergedRect);
  }

  const node = document.createElement("div");
  node.setAttribute("class", `limber-grid-view-debug-rect limber-grid-view-debug-merged-rect limber-grid-view-debug-merged-rect-thick`);
  node.setAttribute("id", `limber-grid-view-debug-merged-rect`);
  node.setAttribute("tabindex", -1);
  node.setAttribute("title", `${obj.id}`);
  node.innerHTML = obj.id;
  node.style.transform = `translate(${obj.x1}px, ${obj.y1}px)`;
  node.style.width = obj.x2 - obj.x1 + "px";
  node.style.height = obj.y2 - obj.y1 + "px";
  e.$limberGridView.appendChild(node);
  set$limberGridViewDebugMergedRect(context, e.$limberGridView.querySelectorAll(".limber-grid-view-debug-merged-rect")[0]); // console.log(e.$limberGridViewDebugMergedRect);
};
const printAdjRect = (context, obj) => {
  const e = variables_elements(context);

  if (!obj) {
    if (e.$limberGridViewDebugAdjRect) {
      e.$limberGridView.removeChild(e.$limberGridViewDebugAdjRect);
      set$limberGridViewDebugAdjRect(context, undefined);
    }

    return;
  }

  if (e.$limberGridViewDebugAdjRect) {
    e.$limberGridView.removeChild(e.$limberGridViewDebugAdjRect);
  }

  const node = document.createElement("div");
  node.setAttribute("class", `limber-grid-view-debug-rect limber-grid-view-debug-adj-rect`);
  node.setAttribute("id", `limber-grid-view-debug-adj-rect`);
  node.setAttribute("tabindex", -1);
  node.setAttribute("title", `${obj.id}`);
  node.innerHTML = obj.id;
  node.style.transform = `translate(${obj.x1}px, ${obj.y1}px)`;
  node.style.width = obj.x2 - obj.x1 + "px";
  node.style.height = obj.y2 - obj.y1 + "px";
  e.$limberGridView.appendChild(node);
  set$limberGridViewDebugAdjRect(context, e.$limberGridView.querySelectorAll(".limber-grid-view-debug-adj-rect")[0]); // console.log(e.$limberGridViewDebugAdjRect);
};
// CONCATENATED MODULE: ./src/libs/arrange/arrangeCore.js
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




 // import { shuffle } from "../array/arrayUtils";




 // import { printNodeData } from "../debug/debugUtils";

const shrinkTopBottomWS = (context, topWorkSpace, bottomWorkSpace) => {
  let topWSItems, bottomWSItems;
  const rt = trees(context, "rt");

  if (topWorkSpace) {
    topWSItems = arrangeUtils_getItemsInWorkSpace(context, topWorkSpace);
    const sweepRes = sweepLineTop(context, topWorkSpace, topWSItems, rt);
    topWorkSpace.y1 = sweepRes;
  }

  if (bottomWorkSpace) {
    bottomWSItems = arrangeUtils_getItemsInWorkSpace(context, bottomWorkSpace);
    const sweepRes = sweepLineBottom(context, bottomWorkSpace, bottomWSItems, rt);
    bottomWorkSpace.y2 = sweepRes;
  }
};
const sweepLineTop = (context, area, items, rt) => {
  rt.reset();
  const len = items.length;

  for (let i = 0; i < len; i++) {
    rt.insert(items[i]);
  }

  let resultPoint = area.y2;
  const WIDTH = getWidth(context);
  const DEFINED_MIN_HEIGHT_AND_WIDTH = getDefinedMinHeightAndWidth(context);
  let w = 0;
  const suspect = {
    x1: 0,
    x2: 0,
    y1: area.y1,
    y2: area.y2
  };
  let res;

  while (w < WIDTH) {
    suspect.x1 = w;
    suspect.x2 = w + DEFINED_MIN_HEIGHT_AND_WIDTH;
    res = rt.find(suspect, false, true, undefined, false);
    const len = res.length;
    let max = -1;

    for (let i = 0; i < len; i++) {
      if (res[i].mY2 > max) {
        max = res[i].mY2;
      }
    }

    if (max !== -1 && max < resultPoint) {
      resultPoint = max;
    }

    w = suspect.x2;
  }

  return resultPoint;
};
const sweepLineBottom = (context, area, items, rt) => {
  rt.reset();
  const len = items.length;

  for (let i = 0; i < len; i++) {
    rt.insert(items[i]);
  }

  let resultPoint = area.y1;
  const WIDTH = getWidth(context);
  const DEFINED_MIN_HEIGHT_AND_WIDTH = getDefinedMinHeightAndWidth(context);
  let w = 0;
  const suspect = {
    x1: 0,
    x2: 0,
    y1: area.y1,
    y2: area.y2
  };
  let res;

  while (w < WIDTH) {
    suspect.x1 = w;
    suspect.x2 = w + DEFINED_MIN_HEIGHT_AND_WIDTH;
    res = rt.find(suspect, false, true, undefined, false);
    const len = res.length;
    let min = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < len; i++) {
      if (res[i].mY1 < min) {
        min = res[i].mY1;
      }
    }

    if (min !== Number.MAX_SAFE_INTEGER && min > resultPoint) {
      resultPoint = min;
    }

    w = suspect.x2;
  }

  return resultPoint;
};
const sweepLineForFreeSpace = (context, area, items, idCount) => {
  // area: area to sweep
  // area: area to sweep Coordinate Form
  // items: items in area
  const rt = trees(context, "rt");
  rt.reset();
  area.id = idCount.idCount++;
  rt.insert(area);
  let item;
  let resRects;
  let rLen = 0;
  let diff;
  let dLen = 0;
  const len = items.length;

  for (let i = 0; i < len; i++) {
    item = items[i];
    resRects = rt.find(item, false, true, undefined, false);
    rLen = resRects.length;

    for (let j = 0; j < rLen; j++) {
      swapDimensActualAndWithMargin(item);
      diff = subtractRect(resRects[j], item);
      swapDimensActualAndWithMargin(item);
      rt.remove(resRects[j]);
      dLen = diff.length;

      for (let k = 0; k < dLen; k++) {
        diff[k].id = idCount.idCount++;
        rt.insert(diff[k]);
      }
    }
  } // printUnmergedFreeRects(context, rt.getData());
  // debugger;


  return {
    rt
  };
};
const mergeFreeRectsCore = (context, stack, rt, idCount) => {
  let topFullMerged = false;

  while (!stack.isEmpty()) {
    const top = stack.pop();
    topFullMerged = false;
    const _top = {
      x1: top.x1 - 0.5 >= 0 ? top.x1 - 0.5 : 0,
      x2: top.x2 + 0.5,
      y1: top.y1 - 0.5 >= 0 ? top.y1 - 0.5 : 0,
      y2: top.y2 + 0.5
    };
    const results = rt.find(_top, false, true, undefined, true);
    const len = (results === null || results === void 0 ? void 0 : results.length) || 0;

    if (len > 0) {
      for (let i = 0; i < len; i++) {
        const res = results[i];
        const mergedRects = mergeRects(res, top);

        if (mergedRects.length === 1) {
          const mergedRect = mergedRects[0];
          mergedRect.id = idCount.idCount++;

          if (isRectInside(mergedRect, res)) {
            rt.remove(res);
          }

          if (isRectInside(mergedRect, top)) {
            topFullMerged = true;
          }

          rt.insert(mergedRect);
        }
      }

      if (topFullMerged === false) {
        // put  top in the tree
        top.id = idCount.idCount++;
        rt.insert(top);
      }
    } else {
      top.id = idCount.idCount++;
      rt.insert(top);
    }
  }
};
const filterMergedFreeRects = rt => {
  const arr = rt.getData();
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    const obj = arr[i];
    const result = rt.find(obj, undefined, undefined, shouldFilterRect, false);

    if (result) {
      rt.remove(obj);
    }
  }
};
const mergeFreeRects = async (context, freeRects, idCount, garbageRects) => {
  let rt;
  const stack = stacks(context, "stack");

  if (Array.isArray(freeRects)) {
    stack.setData(freeRects.sort(rectSortX));
    rt = trees(context, "rt");
    rt.reset();
  } else {
    stack.setData(garbageRects.sort(rectSortX));
    rt = freeRects;
  }

  mergeFreeRectsCore(context, stack, rt, idCount);
  filterMergedFreeRects(rt);
  const mergedArr = rt.getData();
  stack.setData(mergedArr.sort(rectSortY));
  rt.reset();
  mergeFreeRectsCore(context, stack, rt, idCount);
  filterMergedFreeRects(rt); // printMergedFreeRects(context, rt.getData());
  // debugger;

  return {
    mergedRectsRt: rt
  };
};
/**
 * [description]
 * @param  {number[]} itemsToArrange          Array of items to arrange
 * @param  {object} mergedRectsIt         Interval Tree of merged rectangles
 * @param  {object} topWorkSpace            Top work space object in object form
 * @param  {object} bottomWorkSpace         Bottom work space object in object form
 * @param  {object} combinedWorkSpaceRectCo combined work space object in object form
 * @param  {number} idCount                  next id available
 * @return {object}                         arranged{object}: key is index in position data array, value is the object; itemsInbottomworkSpace{object}: key is index in position data array, value is also the index; idCount: next available id
 */

const arrange = async (context, itemsToArrange, mergedRectsRt, topWorkSpace, bottomWorkSpace, combinedWorkSpaceRectCo, idCount) => {
  // this function updates the modified position data
  // so no need to update the modified position data later
  const mpd = getModifiedPositionData(context);
  const pd = getPositionData(context);
  const privateConstants = constants_privateConstants(context);
  const publicConstants = constants_publicConstants(context);
  const arranged = {};
  const itemsInBottomWorkSpace = {};
  const resized = {};
  let overlappedRects = mergedRectsRt.getData();
  itemsToArrange.sort(rectSortHypotenusSquared(pd));
  let top;
  let aItem, oItem;
  const garbageStack = stacks(context, "garbageStack");
  let iToALen = itemsToArrange.length;

  while (iToALen > 0) {
    top = itemsToArrange[--iToALen];
    aItem = mpd[top]; // modified arrange Temp Item

    oItem = pd[top]; // original Item

    let pm;
    let MIN_CLOSEST = Number.MAX_SAFE_INTEGER;
    let match;
    let tempAItem = aItem;
    const tempOItem = oItem || {
      mX1: 0,
      mY1: 0,
      mX2: 0,
      mY2: 0
    };
    const oLen = overlappedRects.length;

    for (let i = 0; i < oLen; i++) {
      const oRect = overlappedRects[i];
      const d1 = getDistanceForTest(oRect, tempOItem);
      const sizeTest1 = getSizeTest(oRect, tempAItem, privateConstants.MARGIN, privateConstants.DEFINED_MIN_HEIGHT_AND_WIDTH, publicConstants.SHRINK_TO_FIT);

      if (sizeTest1 && d1 < MIN_CLOSEST) {
        MIN_CLOSEST = d1;
        pm = overlappedRects[i];
        match = typeof sizeTest1 === "object" ? sizeTest1 : undefined;
      }
    }

    if (!pm) {
      continue;
    }

    if (match) {
      aItem.width = match.width;
      aItem.height = match.height;
      resized[top] = true;
    }

    aItem.x = pm.x1 + privateConstants.MARGIN;
    aItem.y = pm.y1 + privateConstants.MARGIN;
    aItem.x1 = aItem.x;
    aItem.y1 = aItem.y;
    aItem.x2 = aItem.x + aItem.width;
    aItem.y2 = aItem.y + aItem.height;
    sanitizeDimension(aItem);
    aItem.mX = aItem.x - privateConstants.MARGIN;
    aItem.mY = aItem.y - privateConstants.MARGIN;
    aItem.mWidth = aItem.width + privateConstants.MARGIN * 2;
    aItem.mHeight = aItem.height + privateConstants.MARGIN * 2;
    aItem.mX1 = aItem.x1 - privateConstants.MARGIN;
    aItem.mY1 = aItem.y1 - privateConstants.MARGIN;
    aItem.mX2 = aItem.x2 + privateConstants.MARGIN;
    aItem.mY2 = aItem.y2 + privateConstants.MARGIN;
    arranged[top] = aItem;

    if (bottomWorkSpace && isRectInside(bottomWorkSpace, pm)) {
      // put in bottom and combined workspace
      itemsInBottomWorkSpace[top] = top;
    }

    garbageStack.empty();
    const result = mergedRectsRt.find(pm, false, true, undefined, false);
    const resLen = result.length;
    tempAItem = { ...aItem
    };
    tempAItem.x1 -= privateConstants.MARGIN;
    tempAItem.x2 += privateConstants.MARGIN;
    tempAItem.y1 -= privateConstants.MARGIN;
    tempAItem.y2 += privateConstants.MARGIN;

    for (let i = 0; i < resLen; i++) {
      const res = result[i];
      const garbageRects = subtractRect(res, tempAItem);
      const gLen = (garbageRects === null || garbageRects === void 0 ? void 0 : garbageRects.length) || 0;

      for (let i = 0; i < gLen; i++) {
        garbageRects[i].idCount = idCount.idCount++;
        garbageStack.push(garbageRects[i]);
      }

      mergedRectsRt.remove(res);
    }

    const {
      mergedRectsRt: _mergedRectsRt
    } = await mergeFreeRects(context, mergedRectsRt, idCount, garbageStack.getData());
    mergedRectsRt = _mergedRectsRt;
    overlappedRects = mergedRectsRt.getData();
  }

  return {
    arranged,
    itemsInBottomWorkSpace,
    resized
  };
};
// CONCATENATED MODULE: ./src/libs/arrange/arrange.js
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




 // import {
// printUnmergedFreeRects,
// printMergedFreeRects,
// printResultStackRects,
// printStackRects,
// printMergedTempRects,
// printStackTopRect,
// printStackTopAdjRect,
// printMergedRect,
// printAdjRect,
// } from "../debug/debug";
// import { printNodeData } from "../debug/debugUtils";

const arrangeMove = async (context, affectedItems, toY, movedBottomY) => {
  var _context$options$call;

  const privateConstants = constants_privateConstants(context);
  const mpd = getModifiedPositionData(context);
  const p1 = performance.now();
  const idCount = {
    idCount: 0
  };
  const {
    minY,
    maxY
  } = getMinMaxXY(context, affectedItems, undefined, undefined, undefined, toY, movedBottomY); // last element is moved or resized item;

  const itemsToArrange = new Array(affectedItems.length - 1);
  const iToALen = affectedItems.length - 1;

  for (let i = 0; i < iToALen; i++) {
    itemsToArrange[i] = affectedItems[i];
  }

  const workSpaceRect = {
    x1: 0,
    x2: privateConstants.WIDTH,
    y1: minY,
    y2: maxY
  }; // printStackTopRect(context, workSpaceRect);
  // debugger;

  const combinedWorkSpaceRect = { ...workSpaceRect
  };
  const {
    topWorkSpace,
    bottomWorkSpace
  } = getTopBottomWS(context, workSpaceRect, 0, privateConstants.WIDTH); // printStackTopRect(context, topWorkSpace);
  // debugger;
  // printStackTopRect(context, bottomWorkSpace);
  // debugger;
  // const shrinkRes = shrinkTopBottomWS(context, topWorkSpace, bottomWorkSpace);

  shrinkTopBottomWS(context, topWorkSpace, bottomWorkSpace); // printStackTopRect(context, topWorkSpace);
  // debugger;
  // printStackTopRect(context, bottomWorkSpace);
  // debugger;

  combinedWorkSpaceRect.y1 = topWorkSpace.y1;
  combinedWorkSpaceRect.y2 = bottomWorkSpace.y2; // printStackTopRect(context, combinedWorkSpaceRect);
  // debugger;

  let itemsInCombinedWorkSpace = arrangeUtils_getItemsInWorkSpace(context, combinedWorkSpaceRect);
  let itemsInCombinedWorkSpaceMap = arrangeUtils_getItemsInWorkSpace(context, combinedWorkSpaceRect, true);
  itemsInCombinedWorkSpaceMap = getItemsInWorkSpaceMap(itemsInCombinedWorkSpaceMap);
  let itemsInBottomWorkSpace = arrangeUtils_getItemsInWorkSpace(context, bottomWorkSpace, true, itemsInCombinedWorkSpaceMap);
  const itemsBelowBottomWorkSpace = getItemsBelowBottomWorkSpace(context, bottomWorkSpace, true, itemsInCombinedWorkSpaceMap); // const shiftHeight =
  // 	privateConstants.DEFINED_MIN_HEIGHT_AND_WIDTH -
  // 	privateConstants.MARGIN * 2 -
  // 	10;

  const shiftHeight = (privateConstants.DEFINED_MIN_HEIGHT_AND_WIDTH - privateConstants.MARGIN * 2) / 2;
  let passCount = 0;
  let arranged = {};
  let arrangedCount = 0;
  let resized = {};
  let workSpaceResizeCount = 0;

  while (arrangedCount !== iToALen) {
    const {
      rt: freeRects
    } = sweepLineForFreeSpace(context, combinedWorkSpaceRect, itemsInCombinedWorkSpace, idCount);
    let freeRectsArr = freeRects.getData();
    freeRectsArr = freeRectsArr.filter(r => r.x2 - r.x1 > 0.5 && r.y2 - r.y1 > 0.5);
    const {
      mergedRectsRt
    } = await mergeFreeRects(context, freeRectsArr, idCount);
    const {
      arranged: _arranged,
      itemsInBottomWorkSpace: _itemsInBottomWorkSpace,
      resized: _resized
    } = await arrange(context, itemsToArrange.filter(id => !arranged[id]), mergedRectsRt, topWorkSpace, bottomWorkSpace, combinedWorkSpaceRect, idCount);
    itemsInBottomWorkSpace = [...itemsInBottomWorkSpace, ...Object.keys(_itemsInBottomWorkSpace)];
    arranged = { ...arranged,
      ..._arranged
    };
    resized = { ...resized,
      ..._resized
    };

    const _arrangedArr = Object.values(_arranged);

    itemsInCombinedWorkSpace = [...itemsInCombinedWorkSpace, ..._arrangedArr];
    arrangedCount += _arrangedArr.length;

    if (arrangedCount !== iToALen) {
      // resize workSpace and push bottom workspace down
      workSpaceResizeCount++;
      workSpaceRect.y2 += shiftHeight;

      if (bottomWorkSpace) {
        bottomWorkSpace.y1 += shiftHeight;
        bottomWorkSpace.y2 += shiftHeight;
      }

      combinedWorkSpaceRect.y2 += shiftHeight;
      shiftItemsDown(context, itemsInBottomWorkSpace, shiftHeight);
    }

    passCount++;

    if (passCount > 1000) {
      throw "Arrange time out";
    }
  }

  if (workSpaceResizeCount > 0) {
    // push items in below bottom workspace below
    shiftItemsDown(context, itemsBelowBottomWorkSpace, shiftHeight * workSpaceResizeCount); // put items in bottom workspace and below bottom workspace in arranged map

    let len = itemsInBottomWorkSpace.length;

    for (let i = 0; i < len; i++) {
      arranged[itemsInBottomWorkSpace[i]] = mpd[itemsInBottomWorkSpace[i]];
    }

    len = itemsBelowBottomWorkSpace.length;

    for (let i = 0; i < len; i++) {
      arranged[itemsBelowBottomWorkSpace[i]] = mpd[itemsBelowBottomWorkSpace[i]];
    }
  }

  const p2 = performance.now();
  console.log("p1: ", p1);
  console.log("p2: ", p2);
  console.log("workSpaceResizeCount", workSpaceResizeCount);
  console.log("arrange total: ", p2 - p1);

  if ((_context$options$call = context.options.callbacks) !== null && _context$options$call !== void 0 && _context$options$call.getArrangeTime) {
    context.options.callbacks.getArrangeTime(p2 - p1, workSpaceResizeCount, idCount.idCount);
  }

  return {
    arranged,
    resized
  };
};
/*
 * *************************************************************************
 * Attange From Heght
 * *************************************************************************
 */

const arrangeFromHeight = async (context, itemsToArrange, height) => {
  var _context$options$call2;

  const privateConstants = constants_privateConstants(context);
  const p1 = performance.now();
  const idCount = {
    idCount: 0
  };
  const minX = 0;
  const maxX = privateConstants.WIDTH;
  const minY = height;
  const maxY = height + privateConstants.DEFINED_MIN_HEIGHT_AND_WIDTH;
  const iToALen = itemsToArrange.length;
  const workSpaceRect = {
    x1: minX,
    x2: maxX,
    y1: minY,
    y2: maxY
  };
  const combinedWorkSpaceRect = { ...workSpaceRect
  };
  const {
    topWorkSpace
  } = getTopBottomWS(context, workSpaceRect, 0, privateConstants.WIDTH);
  shrinkTopBottomWS(context, topWorkSpace);
  combinedWorkSpaceRect.y1 = topWorkSpace.y1;
  let itemsInCombinedWorkSpace = arrangeUtils_getItemsInWorkSpace(context, combinedWorkSpaceRect);
  const shiftHeight = privateConstants.DEFINED_MIN_HEIGHT_AND_WIDTH - privateConstants.MARGIN * 2 - 10;
  let passCount = 0;
  let arranged = {};
  let arrangedCount = 0;
  let workSpaceResizeCount = 0;

  while (arrangedCount !== iToALen) {
    const {
      rt: freeRects
    } = sweepLineForFreeSpace(context, combinedWorkSpaceRect, itemsInCombinedWorkSpace, idCount);
    const freeRectsArr = freeRects.getData();
    const {
      mergedRectsRt
    } = await mergeFreeRects(context, freeRectsArr, idCount);
    const {
      arranged: _arranged
    } = await arrange(context, itemsToArrange.filter(id => !arranged[id]), mergedRectsRt, topWorkSpace, undefined, combinedWorkSpaceRect, idCount);
    arranged = { ...arranged,
      ..._arranged
    };

    const _arrangedArr = Object.values(_arranged);

    itemsInCombinedWorkSpace = [...itemsInCombinedWorkSpace, ..._arrangedArr];
    arrangedCount += _arrangedArr.length;

    if (arrangedCount !== iToALen) {
      // resize workSpace and push bottom workspace down
      workSpaceResizeCount++;
      workSpaceRect.y2 += shiftHeight;
      combinedWorkSpaceRect.y2 += shiftHeight;
    }

    passCount++;

    if (passCount > 10000) {
      throw "Arrange time out";
    }
  }

  const p2 = performance.now();
  console.log("p1: ", p1);
  console.log("p2: ", p2);
  console.log("workSpaceResizeCount", workSpaceResizeCount);
  console.log("arrange total: ", p2 - p1);

  if ((_context$options$call2 = context.options.callbacks) !== null && _context$options$call2 !== void 0 && _context$options$call2.getArrangeTime) {
    context.options.callbacks.getArrangeTime(p2 - p1, workSpaceResizeCount, idCount.idCount);
  }

  return arranged;
};
const autoArrangeGrid = async context => {
  const mpd = getModifiedPositionData(context);
  const privateConstants = constants_privateConstants(context);
  const width = privateConstants.MIN_HEIGHT_AND_WIDTH * 2;
  const height = width;
  const rowSize = Math.floor(privateConstants.WIDTH / width);
  const len = mpd.length;
  let iter = 0;

  for (let i = 0; i < len; i += rowSize) {
    const row = i / rowSize;

    for (let j = 0; j < rowSize && iter < len; j++) {
      mpd[iter].x1 = j * privateConstants.MARGIN * 2 + j * width + privateConstants.MARGIN;
      mpd[iter].x2 = mpd[iter].x1 + width;
      mpd[iter].y1 = row * privateConstants.MARGIN * 2 + row * height + privateConstants.MARGIN;
      mpd[iter].y2 = mpd[iter].y1 + height;
      mpd[iter].x = mpd[iter].x1;
      mpd[iter].y = mpd[iter].y1;
      sanitizeDimension(mpd[iter]);
      mpd[iter].mX1 = mpd[iter].x1 - privateConstants.MARGIN;
      mpd[iter].mX2 = mpd[iter].x2 + privateConstants.MARGIN;
      mpd[iter].mY1 = mpd[iter].y1 - privateConstants.MARGIN;
      mpd[iter].mY2 = mpd[iter].y1 + privateConstants.MARGIN;
      mpd[iter].mX = mpd[iter].mX1;
      mpd[iter].mY = mpd[iter].mY2;
      iter++;
    }
  }
}; // export const arrangeResize = async (
// 	context,
// 	affectedItems,
// 	resizedBottomY,
// 	resizedRightX
// ) => {
// 	const privateConstants = getPrivateConstants(context);
// 	const p1 = performance.now();
// 	const idCount = { idCount: 0 };
// 	const { minX, maxX, minY, maxY } = getMinMaxXY(
// 		context,
// 		affectedItems,
// 		resizedRightX,
// 		resizedBottomY,
// 		undefined,
// 		undefined
// 	);
// 	// last element is moved or resized item;
// 	let itemsToArrange = new Array(affectedItems.length - 1);
// 	let iToALen = affectedItems.length - 1;
// 	for (let i = 0; i < iToALen; i++) {
// 		itemsToArrange[i] = affectedItems[i];
// 	}
// 	const workSpaceRectCo = {
// 		tl: { x: 0, y: minY },
// 		tr: { x: privateConstants.WIDTH, y: minY },
// 		br: { x: privateConstants.WIDTH, y: maxY },
// 		bl: { x: 0, y: maxY },
// 	};
// 	const combinedWorkSpaceRectCo = {
// 		tl: { ...workSpaceRectCo.tl },
// 		tr: { ...workSpaceRectCo.tr },
// 		br: { ...workSpaceRectCo.br },
// 		bl: { ...workSpaceRectCo.bl },
// 	};
// 	const { topWorkSpaceCo, bottomWorkSpaceCo } = getTopBottomWS(
// 		context,
// 		workSpaceRectCo,
// 		0,
// 		privateConstants.WIDTH
// 	);
// 	const shrinkRes = shrinkTopBottomWS(
// 		context,
// 		topWorkSpaceCo,
// 		bottomWorkSpaceCo
// 	);
// 	if (shrinkRes.integrateTop) {
// 		combinedWorkSpaceRectCo.tl = { ...topWorkSpaceCo.tl };
// 		combinedWorkSpaceRectCo.tr = { ...topWorkSpaceCo.tr };
// 	}
// 	if (shrinkRes.integrateBottom) {
// 		combinedWorkSpaceRectCo.br = { ...bottomWorkSpaceCo.br };
// 		combinedWorkSpaceRectCo.bl = { ...bottomWorkSpaceCo.bl };
// 	}
// 	const _workSpaceRectCo = {
// 		// can safely do these operations
// 		// work space width should be greather than or equal to "DEFINED_MIN_HEIGHT_AND_WIDTH + (MARGIN * 2)"
// 		// minX - privateConstants.MARGIN
// 		// maxX + privateConstants.MARGIN
// 		// above two operations are already done in getMinMaxXY
// 		tl: { x: minX, y: minY },
// 		tr: { x: maxX, y: minY },
// 		br: { x: maxX, y: maxY },
// 		bl: { x: minX, y: maxY },
// 	};
// 	const _combinedWorkSpaceRectCo = {
// 		tl: { ..._workSpaceRectCo.tl },
// 		tr: { ..._workSpaceRectCo.tr },
// 		br: { ..._workSpaceRectCo.br },
// 		bl: { ..._workSpaceRectCo.bl },
// 	};
// 	const {
// 		topWorkSpaceCo: _topWorkSpaceCo,
// 		bottomWorkSpaceCo: _bottomWorkSpaceCo,
// 	} = getTopBottomWS(context, _workSpaceRectCo, minX, maxX);
// 	const _shrinkRes = shrinkTopBottomWS(context, _topWorkSpaceCo);
// 	if (_shrinkRes.integrateTop) {
// 		_combinedWorkSpaceRectCo.tl = { ..._topWorkSpaceCo.tl };
// 		_combinedWorkSpaceRectCo.tr = { ..._topWorkSpaceCo.tr };
// 	}
// 	if (_bottomWorkSpaceCo) {
// 		_combinedWorkSpaceRectCo.br = { ..._bottomWorkSpaceCo.br };
// 		_combinedWorkSpaceRectCo.bl = { ..._bottomWorkSpaceCo.bl };
// 	}
// 	const combinedWorkSpaceRect = getRectObjectFromCo(combinedWorkSpaceRectCo);
// 	let itemsInCombinedWorkSpace = getItemsInWorkSpace(
// 		context,
// 		combinedWorkSpaceRect
// 	);
// 	let _combinedWorkSpaceRect = getRectObjectFromCo(_combinedWorkSpaceRectCo);
// 	const incrementHeight = privateConstants.DEFINED_MIN_HEIGHT_AND_WIDTH * 2;
// 	let passCount = 0;
// 	let arranged = {};
// 	let arrangedCount = 0;
// 	let workSpaceResizeCount = 0;
// 	while (arrangedCount !== iToALen) {
// 		let freeRects;
// 		if (passCount === 0) {
// 			const { rt: _freeRects } = sweepLineForFreeSpace(
// 				context,
// 				combinedWorkSpaceRect,
// 				combinedWorkSpaceRectCo,
// 				itemsInCombinedWorkSpace,
// 				idCount
// 			);
// 			freeRects = _freeRects;
// 		} else if (passCount === 1) {
// 			const {
// 				itemsInWorkSpace: _itemsInCombinedWorkSpace,
// 				updatedItemsToArrange,
// 			} = getResizeWSItemsDetail(
// 				context,
// 				_workSpaceRectCo,
// 				_topWorkSpaceCo,
// 				_bottomWorkSpaceCo,
// 				_combinedWorkSpaceRectCo,
// 				arranged,
// 				itemsToArrange
// 			);
// 			itemsInCombinedWorkSpace = _itemsInCombinedWorkSpace;
// 			itemsToArrange = updatedItemsToArrange;
// 			iToALen = updatedItemsToArrange.length + arrangedCount;
// 			passCount++;
// 			continue;
// 		} else if (passCount >= 2) {
// 			const { rt: _freeRects } = sweepLineForFreeSpace(
// 				context,
// 				_combinedWorkSpaceRect,
// 				_combinedWorkSpaceRectCo,
// 				itemsInCombinedWorkSpace,
// 				idCount
// 			);
// 			freeRects = _freeRects;
// 		}
// 		const freeRectsArr = freeRects.getData();
// 		const { mergedRectsRt } = await mergeFreeRects(
// 			context,
// 			freeRectsArr,
// 			idCount
// 		);
// 		const { arranged: _arranged } = await arrange(
// 			context,
// 			itemsToArrange.filter((id) => !arranged[id]),
// 			mergedRectsRt,
// 			getRectObjectFromCo(topWorkSpaceCo),
// 			getRectObjectFromCo(bottomWorkSpaceCo),
// 			passCount === 0 ? combinedWorkSpaceRectCo : _combinedWorkSpaceRectCo,
// 			idCount
// 		);
// 		arranged = { ...arranged, ..._arranged };
// 		const _arrangedArr = Object.values(_arranged);
// 		itemsInCombinedWorkSpace = [...itemsInCombinedWorkSpace, ..._arrangedArr];
// 		arrangedCount += _arrangedArr.length;
// 		if (arrangedCount !== iToALen && passCount >= 2) {
// 			// resize combined workSpace
// 			workSpaceResizeCount++;
// 			_combinedWorkSpaceRectCo.br.y += incrementHeight;
// 			_combinedWorkSpaceRectCo.bl.y += incrementHeight;
// 			_combinedWorkSpaceRect = getRectObjectFromCo(_combinedWorkSpaceRectCo);
// 		}
// 		passCount++;
// 		if (passCount > 1000) {
// 			throw "Arrange time out";
// 		}
// 	}
// 	const p2 = performance.now();
// 	console.log("p1: ", p1);
// 	console.log("p2: ", p2);
// 	console.log("workSpaceResizeCount", workSpaceResizeCount);
// 	console.log("arrange total: ", p2 - p1);
// 	return arranged;
// };
// CONCATENATED MODULE: ./src/store/variables/status.js
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
const setStatus = function (context, key, value) {
  context.store.variables.status[key] = value;
};

const getStatus = function (context, key) {
  return context.store.variables.status[key];
};


/* harmony default export */ var variables_status = (getStatus);
// CONCATENATED MODULE: ./src/store/constants/messages.js
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
const setMessage = function (context, key, value) {
  context.store.constants.messages[key] = value;
};

const getMessage = function (context, key) {
  return context.store.constants.messages[key];
};


/* harmony default export */ var messages = (getMessage);
// CONCATENATED MODULE: ./src/store/variables/bindedFunctions.js
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
const getBindedFunctions = context => {
  return context.store.variables.bindedFunctions;
};
// CONCATENATED MODULE: ./src/libs/eventHandlerLib/initializers.js
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





const reInitializeEvents = function () {
  unInitializeEvents();
  initializeEvents();
};
const initializeVariables = function () {};
const initializeEvents = function () {
  const options = variables_options(this);
  const e = variables_elements(this);
  const callbacks = getCallbacks(this);
  const bf = getBindedFunctions(this);

  if (options.editable) {
    if (!isMobile(this)) {
      if (options.enableInteractiveAddAndCut) {
        e.$limberGridView.addEventListener("mousedown", bf.onDeskMouseDown);

        if (options.enableTouchInteraction) {
          e.$limberGridView.addEventListener("touchstart", bf.onDeskTouchStart);
        }
      }
    }

    var len = e.$limberGridViewItems.length;

    for (var i = 0; i < len; i++) {
      if (!isMobile(this) && e.$limberGridViewItems[i]) {
        e.$limberGridViewItems[i].addEventListener("mousedown", bf.onItemMouseDown);

        if (options.enableTouchInteraction) {
          e.$limberGridViewItems[i].addEventListener("touchstart", bf.onItemTouchStart);
        }
      }

      if (callbacks.onItemClickCallback && e.$limberGridViewItems[i]) {
        e.$limberGridViewItems[i].addEventListener("click", bf.onItemClick);
      }
    }
  }
};
const unInitializeEvents = function () {
  const options = variables_options(this);
  const e = variables_elements(this);
  const bf = getBindedFunctions(this);

  if (options.editable) {
    if (e.$limberGridView) {
      e.$limberGridView.removeEventListener("mousedown", bf.onDeskMouseDown);
      e.$limberGridView.removeEventListener("touchstart", bf.onDeskTouchStart);
    }

    if (e.$limberGridViewItems) {
      const len = e.$limberGridViewItems.length;

      for (let i = 0; i < len; i++) {
        if (!e.$limberGridViewItems[i]) {
          continue;
        }

        e.$limberGridViewItems[i].removeEventListener("mousedown", bf.onItemMouseDown);
        e.$limberGridViewItems[i].removeEventListener("touchstart", bf.onItemTouchStart);
        e.$limberGridViewItems[i].removeEventListener("click", bf.onItemClick);
      }
    }
  }
};
const initializeItemTouchEvents = function () {
  const e = variables_elements(this);
  const bf = getBindedFunctions(this);

  if (e.$limberGridViewItems) {
    const len = e.$limberGridViewItems.length;

    for (let i = 0; i < len; i++) {
      if (!e.$limberGridViewItems[i]) {
        continue;
      }

      e.$limberGridViewItems[i].addEventListener("mousedown", bf.onItemMouseDown);
      e.$limberGridViewItems[i].addEventListener("touchstart", bf.onItemTouchStart);
    }
  }
};
const unInitializeItemTouchEvents = function () {
  const e = variables_elements(this);
  const bf = getBindedFunctions(this);

  if (e.$limberGridViewItems) {
    const len = e.$limberGridViewItems.length;

    for (let i = 0; i < len; i++) {
      if (!e.$limberGridViewItems[i]) {
        continue;
      }

      e.$limberGridViewItems[i].removeEventListener("mousedown", bf.onItemMouseDown);
      e.$limberGridViewItems[i].removeEventListener("touchstart", bf.onItemTouchStart);
    }
  }
};
// CONCATENATED MODULE: ./src/libs/renderers/rendererUtils.js
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



const checkPositionData = pd => {
  if (Array.isArray(pd)) {
    const len = pd.length;

    for (let i = 0; i < len; i++) {
      if (isValidRect(pd[i])) {
        enhanceItemHW(pd[i]);
      } else if (isValidRectHW(pd[i])) {
        makeItem(pd[i]);
      } else {
        return false;
      }
    }

    return true;
  }

  return false;
};
const getPdBottomMax = context => {
  const pd = getPositionData(context);
  const privateConstants = constants_privateConstants(context);
  let max = privateConstants.MARGIN;
  const len = pd.length;

  for (let i = 0; i < len; i++) {
    if (pd[i].mY2 > max) {
      max = pd[i].mY2;
    }
  }

  return max;
};
// CONCATENATED MODULE: ./src/store/variables/undoRedo.js
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
const getUndoRedo = function (context) {
  return context.store.variables.undoRedo;
};

/* harmony default export */ var undoRedo = (getUndoRedo);
// CONCATENATED MODULE: ./src/libs/renderers/renderers.js
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












const render = function (context, scale = true) {
  const options = variables_options(context);
  const pd = getPositionData(context);
  const privateConstants = constants_privateConstants(context);
  const publicConstants = constants_publicConstants(context);
  const e = variables_elements(context);
  const callbacks = getCallbacks(context);
  unInitializeEvents.call(context);
  const len = pd.length;
  let WIDTH_SCALE_FACTOR = 1;

  if (scale) {
    WIDTH_SCALE_FACTOR = privateConstants.WIDTH_SCALE_FACTOR;
  }

  for (let i = 0; i < len; i++) {
    pd[i].x1 *= WIDTH_SCALE_FACTOR;
    pd[i].x2 *= WIDTH_SCALE_FACTOR;
    pd[i].y1 *= WIDTH_SCALE_FACTOR;
    pd[i].y2 *= WIDTH_SCALE_FACTOR;
    pd[i].x = pd[i].x1;
    pd[i].y = pd[i].y1;
    pd[i].width *= WIDTH_SCALE_FACTOR;
    pd[i].height *= WIDTH_SCALE_FACTOR;
    sanitizeDimension(pd[i]);
    pd[i].mX1 = pd[i].x1 - privateConstants.MARGIN;
    pd[i].mX2 = pd[i].x2 + privateConstants.MARGIN;
    pd[i].mY1 = pd[i].y1 - privateConstants.MARGIN;
    pd[i].mY2 = pd[i].y2 + privateConstants.MARGIN;
    pd[i].mX = pd[i].x - privateConstants.MARGIN;
    pd[i].mY = pd[i].y - privateConstants.MARGIN;
    pd[i].mWidth = pd[i].width + privateConstants.MARGIN * 2;
    pd[i].mHeight = pd[i].height + privateConstants.MARGIN * 2;
  }

  undoRedo(context).setCurrent(pd);
  const renderedItems = getRenderedItems(context);
  const renderedItemsLen = renderedItems.length;
  const nodes = new Array(renderedItemsLen);
  const allNodes = new Array(len);
  let spd;

  if (!isMobile(context)) {
    let classList = "limber-grid-view-item";

    if (options.editable === true) {
      classList = `limber-grid-view-item limber-grid-view-item-editable ${publicConstants.SHOW_BOTTOM_LEFT_RESIZE_GUIDE ? "limber-grid-view-item-editable-left-resize" : ""}`;
    }

    for (let i = 0; i < renderedItemsLen; i++) {
      const index = renderedItems[i];
      const itemEl = document.createElement("div");
      itemEl.setAttribute("class", classList);
      itemEl.setAttribute("data-index", index);
      itemEl.style.transform = `translate(${pd[index].x}px, ${pd[index].y}px)`;
      itemEl.style.width = `${pd[index].width}px`;
      itemEl.style.height = `${pd[index].height}px`;
      nodes[i] = itemEl;
      allNodes[index] = itemEl;
    }
  } else {
    const classList = "limber-grid-view-item limber-grid-view-item-mobile-view";
    spd = getSerializedPositionData(context);

    for (let i = 0; i < renderedItemsLen; i++) {
      const index = renderedItems[i];
      spd[index].width = privateConstants.WIDTH;
      spd[index].height = privateConstants.WIDTH / publicConstants.MOBILE_ASPECT_RATIO;
      const itemEl = document.createElement("div");
      itemEl.setAttribute("class", classList);
      itemEl.setAttribute("data-index", spd[index].index);
      itemEl.style.width = `${spd[index].width}px`;
      itemEl.style.height = `${spd[index].height}px`;
      nodes[i] = itemEl;
      allNodes[index] = itemEl;
    }

    get$limberGridViewIOBottomHelper(context).style.transform = `translate(0px, ${privateConstants.WIDTH / publicConstants.MOBILE_ASPECT_RATIO * 15 + privateConstants.MARGIN * 14 - 50}px)`;
  }

  const itemsLen = e.$limberGridViewItems.length;

  for (let i = 0; i < itemsLen; i++) {
    if (e.$limberGridViewItems[i]) {
      e.$limberGridView.removeChild(e.$limberGridViewItems[i]);
      e.$limberGridViewItems[i] = undefined;
    }
  }

  for (let i = 0; i < renderedItemsLen; i++) {
    e.$limberGridView.appendChild(nodes[i]);
  }

  for (let i = 0; i < renderedItemsLen; i++) {
    const index = renderedItems[i];
    const itemEl = nodes[i];

    if (!isMobile(context)) {
      const renderData = callbacks.renderContent(index, pd[index].width, pd[index].height);
      renderItemContent(context, renderData, itemEl);
    } else {
      const renderData = callbacks.renderContent(spd[index].index, spd[index].width, spd[index].height);
      renderItemContent(context, renderData, itemEl);
    }
  }

  set$limberGridViewItems(context, allNodes);
  initializeEvents.call(context);

  if (callbacks.renderComplete) {
    callbacks.renderComplete();
  }
};
const renderItem = function (context, index) {
  const e = variables_elements(context);
  const callbacks = getCallbacks(context);
  const pd = getPositionData(context);
  const privateConstants = constants_privateConstants(context);
  const publicConstants = constants_publicConstants(context);
  let renderData;

  if (!isMobile(context)) {
    renderData = callbacks.renderContent(index, pd[index].width, pd[index].height);
  } else {
    renderData = callbacks.renderContent(index, privateConstants.WIDTH, privateConstants.WIDTH / publicConstants.MOBILE_ASPECT_RATIO);
  }

  renderItemContent(context, renderData, e.$limberGridViewItems[index]);

  if (callbacks.renderComplete) {
    callbacks.renderComplete(index);
  }
};
const unmountItems = function (context, items) {
  unInitializeEvents.call(context);
  const callbacks = getCallbacks(context);
  const e = variables_elements(context);

  for (const index in items) {
    const elem = e.$limberGridViewItems[index];

    if (callbacks.removePlugin) {
      callbacks.removePlugin(e.$limberGridViewItems[index]);
    }

    if (elem) {
      elem.remove();
    }

    e.$limberGridViewItems[index] = undefined;
  }
};
const mountItems = function (context, items, prepend = false) {
  const options = variables_options(context);
  const publicConstants = constants_publicConstants(context);
  const privateConstants = constants_privateConstants(context);
  const pd = getPositionData(context);
  const callbacks = getCallbacks(context);
  const e = variables_elements(context);
  const renderedItems = getRenderedItems(context);
  let classList = "limber-grid-view-item";

  if (options.editable === true) {
    classList = `limber-grid-view-item limber-grid-view-item-editable ${publicConstants.SHOW_BOTTOM_LEFT_RESIZE_GUIDE ? "limber-grid-view-item-editable-left-resize" : ""}`;
  }

  let spd;
  const len = items.length;
  const nodes = new Array(len);

  if (!isMobile(context)) {
    for (let i = 0; i < len; i++) {
      const index = items[i];
      const itemEl = document.createElement("div");
      itemEl.setAttribute("class", classList);
      itemEl.setAttribute("data-index", index);
      itemEl.style.transform = `translate(${pd[index].x}px, ${pd[index].y}px)`;
      itemEl.style.width = `${pd[index].width}px`;
      itemEl.style.height = `${pd[index].height}px`;
      nodes[i] = itemEl;
      e.$limberGridViewItems[index] = itemEl;
    }
  } else {
    const classList = "limber-grid-view-item limber-grid-view-item-mobile-view";
    spd = getSerializedPositionData(context);

    for (let i = 0; i < len; i++) {
      const index = items[i];
      spd[index].width = privateConstants.WIDTH;
      spd[index].height = privateConstants.WIDTH / publicConstants.MOBILE_ASPECT_RATIO;
      const itemEl = document.createElement("div");
      itemEl.setAttribute("class", classList);
      itemEl.setAttribute("data-index", spd[index].index);
      itemEl.style.width = `${spd[index].width}px`;
      itemEl.style.height = `${spd[index].height}px`;
      nodes[i] = itemEl;
      e.$limberGridViewItems[index] = itemEl;
    }

    get$limberGridViewIOBottomHelper(context).style.transform = `translate(0px, ${privateConstants.WIDTH / publicConstants.MOBILE_ASPECT_RATIO * renderedItems.length + privateConstants.MARGIN * (renderedItems.length - 1) - 50}px)`;
  }

  for (let i = 0; i < len; i++) {
    const index = items[i];
    const itemEl = nodes[i];

    if (!isMobile(context)) {
      const renderData = callbacks.renderContent(index, pd[index].width, pd[index].height);
      renderItemContent(context, renderData, itemEl);
    } else {
      const renderData = callbacks.renderContent(spd[index].index, spd[index].width, spd[index].height);
      renderItemContent(context, renderData, itemEl);
    }
  }

  let ib;

  if (items[0] !== undefined) {
    ib = e.$limberGridViewItems[items[0] + 1];
  }

  for (let i = 0; i < len; i++) {
    if (prepend) {
      e.$limberGridView.insertBefore(nodes[i], ib);
      ib = nodes[i];
    } else {
      e.$limberGridView.appendChild(nodes[i]);
    }
  }

  initializeEvents.call(context);
};
const addItem = async function (context, item) {
  const options = variables_options(context);
  const e = variables_elements(context);
  const callbacks = getCallbacks(context);
  const privateConstants = constants_privateConstants(context);
  const publicConstants = constants_publicConstants(context);
  unInitializeEvents.call(context);

  try {
    if (item.x && item.y && item.width && item.height) {
      let allow = false;
      allow = addItemAllowCheck(context, item.x, item.y, item.width, item.height);

      if (allow) {
        const pd = getPositionData(context);
        setModifiedPositionData(context, pd);
        const mpd = getModifiedPositionData(context);
        mpd.push(item);
        setPositionData(context, mpd);
        setSerializedPositionData(context, mpd);
        undoRedo(context).reset();
        undoRedo(context).push(mpd);
      } else {
        return false;
      }
    } else if (item.width && item.height && !item.x && !item.y) {
      if (item.width > privateConstants.WIDTH) {
        return false;
      }

      const pd = getPositionData(context);
      setModifiedPositionData(context, pd);
      const mpd = getModifiedPositionData(context);
      const bottomY = getPdBottomMax(context);
      mpd.push({
        x: undefined,
        y: undefined,
        width: item.width,
        height: item.height,
        mX: undefined,
        mY: undefined,
        mWidth: item.width + privateConstants.MARGIN * 2,
        mHeight: item.height + privateConstants.MARGIN * 2,
        x1: undefined,
        y1: undefined,
        x2: undefined,
        y2: undefined,
        mX1: undefined,
        mY1: undefined,
        mX2: undefined,
        mY2: undefined
      });
      await arrangeFromHeight(context, [mpd.length - 1], bottomY);
      sanitizeDimension(mpd[mpd.length - 1]);
      setPositionData(context, mpd);
      setSerializedPositionData(context, mpd);
      undoRedo(context).reset();
      undoRedo(context).push(mpd);
    } else {
      return false;
    }

    const pd = getPositionData(context);
    const len = pd.length;
    const index = len - 1;
    let renderData;
    const itemEl = document.createElement("div");

    if (!isMobile(context)) {
      let classList = "limber-grid-view-item";

      if (options.editable === true) {
        classList = `limber-grid-view-item limber-grid-view-item-editable ${publicConstants.SHOW_BOTTOM_LEFT_RESIZE_GUIDE ? "limber-grid-view-item-editable-left-resize" : ""}`;
      }

      itemEl.setAttribute("class", classList);
      itemEl.setAttribute("data-index", index);
      itemEl.style.transform = `translate(${pd[index].x}px, ${pd[index].y}px)`;
      itemEl.style.width = `${pd[index].width}px`;
      itemEl.style.height = `${pd[index].height}px`;
      renderData = callbacks.renderContent(index, pd[index].width, pd[index].height, "isAdd");
    } else {
      const classList = "limber-grid-view-item limber-grid-view-item-mobile-view";
      itemEl.setAttribute("class", classList);
      itemEl.setAttribute("data-index", index);
      itemEl.style.width = `${privateConstants.WIDTH}px`;
      itemEl.style.height = `${privateConstants.WIDTH / publicConstants.MOBILE_ASPECT_RATIO}px`;
      renderData = callbacks.renderContent(index, privateConstants.WIDTH, privateConstants.WIDTH / publicConstants.MOBILE_ASPECT_RATIO, "isAdd");
    }

    if (!isMobile(context)) {
      e.$limberGridView.appendChild(itemEl);
      renderItemContent(context, renderData, itemEl);
      e.$limberGridViewItems.push(itemEl);
      getRenderedItems(context).push(index);
    }

    if (!isMobile(context)) {
      e.$limberGridView.scrollTo({
        left: 0,
        top: pd[index].y1,
        behavior: "smooth"
      });
    }

    if (callbacks.addComplete) {
      callbacks.addComplete(index);
    }
  } catch (error) {
    getCallbacks(this).getLogMessage({
      type: "error",
      message: error
    });
    console.error(error);
  }

  initializeEvents.call(context);
};
const removeItem = function (context, index) {
  index = parseInt(index);
  const e = variables_elements(context);
  const callbacks = getCallbacks(context);
  const pd = getPositionData(context);
  const spd = getSerializedPositionData(context);
  const privateConstants = constants_privateConstants(context);
  const publicConstants = constants_publicConstants(context);
  const renderedItems = getRenderedItems(context);
  let idx;

  if (!isMobile(context)) {
    idx = index;
  } else {
    idx = spd.findIndex(o => o.index === index);
  }

  const rmIdx = renderedItems.findIndex(o => o === idx);

  if (rmIdx < 0) {
    return;
  }

  unInitializeEvents.call(context);
  const len = pd.length;

  if (!isMobile(context)) {
    // * data-index update logic
    // * this same logic cannot be applied when mobile version is rendered
    for (let i = index + 1; i < len; i++) {
      if (e.$limberGridViewItems[i]) {
        e.$limberGridViewItems[i].setAttribute("data-index", i - 1);
      }
    }
  } else if (isMobile(context)) {
    // * data-index update logic
    // * first create a map to translate pd index to spd index
    const map = {};

    for (let i = 0; i < len; i++) {
      map[spd[i].index] = i;
    }

    for (let i = index + 1; i < len; i++) {
      const mobileIndex = map[i];

      if (e.$limberGridViewItems[mobileIndex]) {
        e.$limberGridViewItems[mobileIndex].setAttribute("data-index", i - 1);
      }
    }
  }

  const riLen = renderedItems.length;

  for (let i = 0; i < riLen; i++) {
    if (renderedItems[i] > idx) {
      renderedItems[i]--;
    }
  }

  if (isMobile(context)) {
    for (let i = 0; i < len; i++) {
      if (spd[i].index > index) {
        spd[i].index--;
      }
    }
  } // * splice begin


  const elem = e.$limberGridViewItems[idx];
  e.$limberGridViewItems.splice(idx, 1);
  renderedItems.splice(rmIdx, 1);
  if (isMobile(context)) spd.splice(idx, 1);
  pd.splice(index, 1);
  undoRedo(context).reset();
  undoRedo(context).push(pd); // * splice end
  // * call callbacks begin

  if (callbacks.removePlugin) {
    callbacks.removePlugin(elem);
  }

  e.$limberGridView.removeChild(elem);

  if (callbacks.removeComplete) {
    callbacks.removeComplete(index, elem);
  } // * call callbacks end


  for (let i = 0; i < renderedItems.length; i++) {
    let currIdx = renderedItems[i];
    let width = pd[currIdx].width;
    let height = pd[currIdx].height;

    if (isMobile(context)) {
      width = spd[currIdx].width;
      height = spd[currIdx].height;
      currIdx = spd[currIdx].index;
    }

    if (currIdx < index) {
      continue;
    }

    let renderData;

    if (!isMobile(context)) {
      renderData = callbacks.renderContent(currIdx, width, height);
    } else {
      renderData = callbacks.renderContent(currIdx, width, height);
    }

    renderItemContent(context, renderData, e.$limberGridViewItems[renderedItems[i]]);
  }

  if (isMobile(context)) {
    get$limberGridViewIOBottomHelper(context).style.transform = `translate(0px, ${privateConstants.WIDTH / publicConstants.MOBILE_ASPECT_RATIO * renderedItems.length + privateConstants.MARGIN * (renderedItems.length - 1) - 50}px)`;
  }

  initializeEvents.call(context);
}; // export const getSerializedPositionData = (pd) => {
// 	const len = pd.length;
// 	const arr = new Array(len);
// 	for (let i = 0; i < len; i++) {
// 		arr[i] = { ...pd[i] };
// 		arr[i].index = i;
// 	}
// 	return arr.sort((a, b) => {
// 		if (a.y === b.y) {
// 			return a.x - b.x;
// 		}
// 		return a.y - b.y;
// 	});
// };

const renderItemContent = (context, renderData, itemEl) => {
  const callbacks = getCallbacks(context);

  if (typeof renderData === "string") {
    itemEl.innerHTML = renderData;
  } else if (renderData instanceof Element) {
    itemEl.innerHTML = "";
    itemEl.appendChild(renderData);
  } else if (callbacks.renderPlugin) {
    callbacks.renderPlugin(renderData, itemEl);
  }
};
// CONCATENATED MODULE: ./src/libs/interaction/itemInteraction.js
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











const resizeItem = async function (index, x, y, width, height) {
  const pd = getPositionData(this);
  const e = variables_elements(this);
  const callbacks = getCallbacks(this);
  const publicConstants = constants_publicConstants(this);
  const privateConstants = constants_privateConstants(this);
  index = parseInt(index);

  if (publicConstants.LATCH_MOVED_ITEM) {
    const adjustedSize = getStatus(this, "resizeDemo");
    x = (adjustedSize === null || adjustedSize === void 0 ? void 0 : adjustedSize.x) || x;
    y = (adjustedSize === null || adjustedSize === void 0 ? void 0 : adjustedSize.y) || y;
    height = (adjustedSize === null || adjustedSize === void 0 ? void 0 : adjustedSize.height) || height;
    width = (adjustedSize === null || adjustedSize === void 0 ? void 0 : adjustedSize.width) || width;
  }

  resizeItemInitialChecks(this, index, x, y, width, height);
  setModifiedPositionData(this, pd);
  const mpd = getModifiedPositionData(this);
  const modifiedItem = getResizeModifiedItem(x, y, width, height, privateConstants.MARGIN);
  mpd[index] = { ...modifiedItem
  };
  const affectedItems = getResizeAffectedItems(this, modifiedItem, index);
  let arranged, resized;
  ({
    arranged,
    resized
  } = await arrangeMove(this, affectedItems, y, y + height));
  setPositionData(this, mpd);
  undoRedo(this).push(mpd);

  if (e.$limberGridViewItems[index]) {
    e.$limberGridViewItems[index].style.transform = `translate(${x}px, ${x}px)`;
    e.$limberGridViewItems[index].style.width = `${mpd[index].width}px`;
    e.$limberGridViewItems[index].style.height = `${mpd[index].height}px`;
  }

  positionArranged(this, arranged);

  if (callbacks.resizeComplete) {
    callbacks.resizeComplete(index, width, height, Object.keys(arranged));
  }

  renderItem(this, index);

  for (const key in resized) {
    renderItem(this, key);
  }
};
const resizeItemDemo = async function (index, x, y, width, height, forBottomRight) {
  var _adjustedSize;

  const pd = getPositionData(this);
  const e = variables_elements(this);
  const publicConstants = constants_publicConstants(this);
  const privateConstants = constants_privateConstants(this);
  index = parseInt(index);
  let adjustedSize;

  if (publicConstants.LATCH_MOVED_ITEM) {
    adjustedSize = resizeSizeAdjust(this, x, y, width, height, index, forBottomRight);
    setStatus(this, "resizeDemo", adjustedSize);
    x = adjustedSize.x;
    y = adjustedSize.y;
    height = adjustedSize.height;
    width = adjustedSize.width;
  }

  if ((_adjustedSize = adjustedSize) !== null && _adjustedSize !== void 0 && _adjustedSize.isToAdjPresent) {
    // show cross hair
    e.$limberGridViewCrossHairGuide.style.transform = `translate(${adjustedSize.latchPoint.x - publicConstants.CROSS_HAIR_WIDTH / 2}px, ${adjustedSize.latchPoint.y - publicConstants.CROSS_HAIR_HEIGHT / 2}px)`;
  } else {
    // hide cross hair
    e.$limberGridViewCrossHairGuide.style.transform = `translate(-${publicConstants.CROSS_HAIR_WIDTH * 2}px, -${publicConstants.CROSS_HAIR_HEIGHT * 2}px)`;
  }

  resizeItemInitialChecks(this, index, x, y, width, height);
  resetDemoUIChanges(this);
  setModifiedPositionData(this, pd);
  const mpd = getModifiedPositionData(this);
  const modifiedItem = getResizeModifiedItem(x, y, width, height, privateConstants.MARGIN);
  mpd[index] = { ...modifiedItem
  };
  const affectedItems = getResizeAffectedItems(this, modifiedItem, index);
  let arranged;
  ({
    arranged
  } = await arrangeMove(this, affectedItems, y, y + height));
  positionArranged(this, arranged);
};
const moveItem = async function (index, toX, toY) {
  const pd = getPositionData(this);
  const e = variables_elements(this);
  const callbacks = getCallbacks(this);
  const publicConstants = constants_publicConstants(this);
  const privateConstants = constants_privateConstants(this);
  index = parseInt(index);

  if (publicConstants.LATCH_MOVED_ITEM) {
    // change toX & toY to top left of the overlapping item
    const moveDemo = getStatus(this, "moveDemo");

    if (moveDemo !== null && moveDemo !== void 0 && moveDemo.latchingAdjacent) {
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
  const modifiedItem = getMoveModifiedItem(toX, toY, pd[index], privateConstants.MARGIN);
  mpd[index] = { ...modifiedItem
  };
  const affectedItems = getMoveAffectedItems(this, modifiedItem, index);
  const {
    arranged,
    resized
  } = await arrangeMove(this, affectedItems, toY, toY + pd[index].height);
  setPositionData(this, mpd);
  undoRedo(this).push(mpd);

  if (e.$limberGridViewItems[index]) {
    e.$limberGridViewItems[index].style.transform = `translate(${mpd[index].x}px, ${mpd[index].y}px)`;

    if (!publicConstants.ANIMATE_MOVED_ITEM) {
      // below two statements needs its own flag maybe "ANIMATE_MOVED_ITEM"
      e.$limberGridViewItems[index].style.transition = "none";
      setTimeout(() => {
        e.$limberGridViewItems[index].style.transition = "";
      }, publicConstants.ANIMATE_TIME);
    }
  } else {
    // render the moved item
    mountItems(this, [index]);
  }

  positionArranged(this, arranged);

  if (callbacks.resizeComplete) {
    callbacks.moveComplete(index, toX, toY, Object.keys(arranged));
  }

  for (const key in resized) {
    renderItem(this, key);
  }
};
const moveItemDemo = async function (index, toX, toY) {
  const pd = getPositionData(this);
  const e = variables_elements(this);
  const publicConstants = constants_publicConstants(this);
  const privateConstants = constants_privateConstants(this);
  index = parseInt(index); //

  if (publicConstants.LATCH_MOVED_ITEM) {
    var _moveDemo, _moveDemo$adjustedPt, _moveDemo2, _moveDemo2$adjustedPt;

    const adjustedPt = movePointAdjust(this, toX, toY, index);
    let moveDemo = getStatus(this, "moveDemo"); // let adjustedPt;

    if (!isNaN((_moveDemo = moveDemo) === null || _moveDemo === void 0 ? void 0 : (_moveDemo$adjustedPt = _moveDemo.adjustedPt) === null || _moveDemo$adjustedPt === void 0 ? void 0 : _moveDemo$adjustedPt.overlappedItemIndex) && isPointInsideRect(pd[moveDemo.adjustedPt.overlappedItemIndex], {
      x: toX,
      y: toY
    })) {
      moveDemo = { ...moveDemo,
        adjustedPt
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

      setStatus(this, "moveDemo", { ...moveDemo,
        latchingAdjacent
      });
    } else {
      let latchingAdjacent = false;

      if (!isNaN(adjustedPt.overlappedItemIndex) || !adjustedPt.isToAdjPresent) {
        toX = adjustedPt.to.toX;
        toY = adjustedPt.to.toY;
      } else {
        toX = adjustedPt.toAdj.toX;
        toY = adjustedPt.toAdj.toY;
        latchingAdjacent = true;
      }

      setStatus(this, "moveDemo", {
        adjustedPt: adjustedPt,
        latchingAdjacent
      });
    }

    moveDemo = getStatus(this, "moveDemo");

    if (!isNaN((_moveDemo2 = moveDemo) === null || _moveDemo2 === void 0 ? void 0 : (_moveDemo2$adjustedPt = _moveDemo2.adjustedPt) === null || _moveDemo2$adjustedPt === void 0 ? void 0 : _moveDemo2$adjustedPt.overlappedItemIndex)) {
      e.$limberGridViewMoveGuide.style.transform = "translate(" + pd[moveDemo.adjustedPt.overlappedItemIndex].x + "px, " + pd[moveDemo.adjustedPt.overlappedItemIndex].y + "px)";
      e.$limberGridViewMoveGuide.style.width = pd[moveDemo.adjustedPt.overlappedItemIndex].width + "px";
      e.$limberGridViewMoveGuide.style.height = pd[moveDemo.adjustedPt.overlappedItemIndex].height + "px";
      e.$limberGridViewMoveGuide.classList.add("limber-grid-view-move-guide-active");

      if (moveDemo.latchingAdjacent) {
        // show text
        e.$limberGridViewMoveGuide.innerHTML = messages(this, "latchedMoveDemo2");
      } else {
        // show text
        e.$limberGridViewMoveGuide.innerHTML = messages(this, "latchedMoveDemo1");
      }
    }

    if (moveDemo.latchingAdjacent) {
      // show cross hair
      e.$limberGridViewCrossHairGuide.style.transform = `translate(${toX - publicConstants.CROSS_HAIR_WIDTH / 2}px, ${toY - publicConstants.CROSS_HAIR_HEIGHT / 2}px)`;
    } else {
      // hide cross hair
      e.$limberGridViewCrossHairGuide.style.transform = `translate(-${publicConstants.CROSS_HAIR_WIDTH * 2}px, -${publicConstants.CROSS_HAIR_HEIGHT * 2}px)`;
    }
  } //


  moveItemInitialChecks(this, index, toX, toY);
  resetDemoUIChanges(this);
  setModifiedPositionData(this, pd);
  const mpd = getModifiedPositionData(this);
  const modifiedItem = getMoveModifiedItem(toX, toY, pd[index], privateConstants.MARGIN);
  mpd[index] = { ...modifiedItem
  };
  const affectedItems = getMoveAffectedItems(this, modifiedItem, index);
  const {
    arranged
  } = await arrangeMove(this, affectedItems, toY, toY + pd[index].height);
  positionArranged(this, arranged);
};
// CONCATENATED MODULE: ./src/store/variables/eventSpecific.js
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
const getItemInteractionVars = function (context) {
  return context.store.variables.eventSpecific.itemInteraction;
};
const setItemInteractionVarsByName = function (context, name, value) {
  context.store.variables.eventSpecific.itemInteraction[name] = value;
};
const getDeskInteractionVars = function (context) {
  return context.store.variables.eventSpecific.deskInteraction;
};
const setDeskInteractionVarsByName = function (context, name, value) {
  context.store.variables.eventSpecific.deskInteraction[name] = value;
};
// CONCATENATED MODULE: ./src/libs/eventHandlerLib/itemInteraction.js
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













const onItemMouseDown = function (event) {
  const e = variables_elements(this);
  const publicConstants = constants_publicConstants(this);
  const pd = getPositionData(this);
  const iiv = getItemInteractionVars(this);
  const bf = getBindedFunctions(this);

  const _userActionData = getUserActionData(this, event);

  if (!_userActionData) {
    return;
  }

  Object.assign(iiv.userActionData, _userActionData);

  if (iiv.userActionData.type === "move") {
    iiv.mouseDownCancel = false;
    iiv.mouseDownTimerComplete = false;
    document.addEventListener("mousemove", bf.onItemMouseMove);
    document.addEventListener("mouseup", bf.onItemMouseUp);
    document.addEventListener("contextmenu", bf.onItemContextMenu);
    clearTimeout(iiv.longPressCheck);
    iiv.longPressCheck = setTimeout(mouseDownCheck.bind(this, event), publicConstants.MOUSE_DOWN_TIME);
    event.preventDefault();
  } else if (iiv.userActionData.type === "resize" || iiv.userActionData.type === "resizeBottomLeft") {
    iiv.mouseDownCancel = false;
    iiv.mouseDownTimerComplete = true;
    e.$limberGridView.addEventListener("mousemove", bf.onItemMouseMove);
    document.addEventListener("mouseup", bf.onItemMouseUp);
    document.addEventListener("contextmenu", bf.onItemContextMenu);
    iiv.userActionData.itemX = pd[iiv.userActionData.itemIndex].x;
    iiv.userActionData.itemY = pd[iiv.userActionData.itemIndex].y;
    iiv.userActionData.itemX2 = pd[iiv.userActionData.itemIndex].x2;
    iiv.userActionData.itemY2 = pd[iiv.userActionData.itemIndex].y2;
    loadResizingState(this, iiv.userActionData);
    event.preventDefault();
  }

  event.stopPropagation();
};
const onItemTouchStart = function (event) {
  const e = variables_elements(this);
  const publicConstants = constants_publicConstants(this);
  const pd = getPositionData(this);
  const iiv = getItemInteractionVars(this);
  const bf = getBindedFunctions(this);

  if (event.touches.length !== 1) {
    onItemTouchContextMenu.call(this, event);
    return;
  }

  const touchPosOnLimberGridItem = calculateTouchPosOnItem(this, event);

  if (!touchPosOnLimberGridItem) {
    return;
  }

  const _userActionData = getUserActionData(this, event);

  if (!_userActionData) {
    return;
  }

  Object.assign(iiv.userActionData, _userActionData);

  if (iiv.userActionData.type === "move") {
    iiv.touchHoldCancel = false;
    iiv.touchHoldTimerComplete = false;
    document.addEventListener("touchmove", bf.onItemTouchMove);
    document.addEventListener("touchend", bf.onItemTouchEnd);
    document.addEventListener("touchcancel", bf.onItemTouchCancel);
    document.addEventListener("contextmenu", bf.onItemTouchContextMenu);
    iiv.longTouchCheck = setTimeout(tapHoldCheck.bind(this, event), publicConstants.TOUCH_HOLD_TIME);
    event.preventDefault();
  } else if (iiv.userActionData.type === "resize" || iiv.userActionData.type === "resizeBottomLeft") {
    iiv.touchHoldCancel = false;
    iiv.touchHoldTimerComplete = true;
    e.$limberGridView.addEventListener("touchmove", bf.onItemTouchMove);
    document.addEventListener("touchend", bf.onItemTouchEnd);
    document.addEventListener("touchcancel", bf.onItemTouchCancel);
    document.addEventListener("contextmenu", bf.onItemTouchContextMenu);
    iiv.userActionData.itemX = pd[iiv.userActionData.itemIndex].x;
    iiv.userActionData.itemY = pd[iiv.userActionData.itemIndex].y;
    iiv.userActionData.itemX2 = pd[iiv.userActionData.itemIndex].x2;
    iiv.userActionData.itemY2 = pd[iiv.userActionData.itemIndex].y2;
    loadResizingState(this, iiv.userActionData);
    event.preventDefault();
  }

  event.stopPropagation();
};
const mouseDownCheck = function (event) {
  const iiv = getItemInteractionVars(this);

  if (iiv.mouseDownCancel === false) {
    iiv.mouseDownTimerComplete = true;
    loadMoveState(this, iiv.userActionData, event);
  }
};
const tapHoldCheck = function (event) {
  const iiv = getItemInteractionVars(this);

  if (iiv.touchHoldCancel === false) {
    iiv.touchHoldTimerComplete = true;
    loadMoveState(this, iiv.userActionData, event);
  }
};
const onItemMouseMove = function (event) {
  const e = variables_elements(this);
  const privateConstants = constants_privateConstants(this);
  const publicConstants = constants_publicConstants(this);
  const iiv = getItemInteractionVars(this);

  if (iiv.mouseDownTimerComplete === true) {
    if (iiv.userActionData.type === "move") {
      loadOnMoveState(this, iiv.userActionData, event, "move");
      clearTimeout(iiv.showMoveDemoTimeOutVariable);
      const mousePositionOnLimberGrid = calculateMousePosOnDesk(this, event);

      if (mousePositionOnLimberGrid) {
        const yMousePosition = mousePositionOnLimberGrid.y;

        if (!iiv.isScrolling) {
          iiv.isScrolling = true;
          setTimeout(() => {
            adjustHeightAndScroll(this, yMousePosition, mousePositionOnLimberGrid.offsetY, publicConstants.AUTO_SCROLL_FOR_MOUSE);
            iiv.isScrolling = false;
          }, publicConstants.AUTO_SCROLL_DELAY);
        }

        iiv.showMoveDemoTimeOutVariable = setTimeout(showMoveDemo.bind(this, iiv.userActionData.itemIndex, mousePositionOnLimberGrid), publicConstants.DEMO_WAIT_TIME);
      }
    } else {
      loadOnMoveState(this, iiv.userActionData, event, "resize");
      clearTimeout(iiv.showResizeDemoTimeOutVariable);
      const scrollTop = e.$limberGridView.scrollTop;
      const scrollLeft = e.$limberGridView.scrollLeft;
      const x = iiv.userActionData.itemX;
      const y = iiv.userActionData.itemY;
      let newX1, newY1, newWidth, newHeight;

      if (iiv.userActionData.type === "resize") {
        newX1 = x;
        newY1 = y;
        newWidth = event.offsetX - x + scrollLeft - privateConstants.PADDING_LEFT;
        newHeight = event.offsetY - y + scrollTop - privateConstants.PADDING_TOP;
      } else {
        // resizeBottomLeft
        newX1 = event.offsetX + scrollLeft - privateConstants.PADDING_LEFT;
        newY1 = y;
        newWidth = iiv.userActionData.itemX2 - newX1;
        newHeight = event.offsetY + scrollTop - privateConstants.PADDING_TOP - newY1;
      }

      iiv.userActionData.newX1 = newX1;
      iiv.userActionData.newY1 = newY1;
      iiv.userActionData.newWidth = newWidth;
      iiv.userActionData.newHeight = newHeight;
      const offsetY = event.offsetY;
      const yMousePosition = event.offsetY + scrollTop;

      if (!iiv.isScrolling) {
        iiv.isScrolling = true;
        setTimeout(() => {
          adjustHeightAndScroll(this, yMousePosition, offsetY, publicConstants.AUTO_SCROLL_FOR_MOUSE);
          iiv.isScrolling = false;
        }, publicConstants.AUTO_SCROLL_DELAY);
      }

      if (newWidth > 0 && newHeight > 0) {
        e.$limberGridViewPseudoItem.style.transform = `translate(${newX1}px, ${newY1}px)`;
        e.$limberGridViewPseudoItem.style.width = newWidth + "px";
        e.$limberGridViewPseudoItem.style.height = newHeight + "px";
        e.$limberGridViewPseudoItem.setAttribute("data-after", `w: ${parseInt(newWidth)}px, h: ${parseInt(newHeight)}px`);
      }

      iiv.showResizeDemoTimeOutVariable = setTimeout(showResizeDemo.bind(this, iiv.userActionData.itemIndex, newX1, newY1, newWidth, newHeight, iiv.userActionData.type === "resize"), publicConstants.DEMO_WAIT_TIME);
    }
  } else {
    iiv.mouseDownCancel = true;
    onItemContextMenu.call(this, event); // canceling mouseHold
  }

  event.preventDefault();
  event.stopPropagation();
};
const onItemTouchMove = function (event) {
  const e = variables_elements(this); // const privateConstants = getPrivateConstants(this);

  const publicConstants = constants_publicConstants(this);
  const iiv = getItemInteractionVars(this);

  if (iiv.touchHoldTimerComplete === true && event.touches.length === 1) {
    if (iiv.userActionData.type === "move") {
      loadOnMoveState(this, iiv.userActionData, event, "move");
      clearTimeout(iiv.showMoveDemoTimeOutVariable);
      const touchPositionOnLimberGrid = calculateTouchPosOnDesk(this, event);

      if (touchPositionOnLimberGrid) {
        const yTouchPosition = touchPositionOnLimberGrid.y;
        let programScrolled;

        if (!iiv.isScrolling) {
          iiv.isScrolling = true;
          setTimeout(() => {
            programScrolled = adjustHeightAndScroll(this, yTouchPosition, touchPositionOnLimberGrid.offsetY, true);
            iiv.isScrolling = false;
          }, publicConstants.AUTO_SCROLL_DELAY);
        }

        if (programScrolled !== true) {
          iiv.showMoveDemoTimeOutVariable = setTimeout(showMoveDemo.bind(this, iiv.userActionData.itemIndex, touchPositionOnLimberGrid), publicConstants.DEMO_WAIT_TIME);
        }
      }
    } else {
      loadOnMoveState(this, iiv.userActionData, event, "resize");
      clearTimeout(iiv.showResizeDemoTimeOutVariable);
      const x = iiv.userActionData.itemX;
      const y = iiv.userActionData.itemY;
      const touchPositionOnLimberGrid = calculateTouchPosOnDesk(this, event);
      let newX1, newY1, newWidth, newHeight;

      if (iiv.userActionData.type === "resize" && touchPositionOnLimberGrid) {
        newX1 = x;
        newY1 = y;
        newWidth = touchPositionOnLimberGrid.x - x;
        newHeight = touchPositionOnLimberGrid.y - y;
      } else if (touchPositionOnLimberGrid) {
        // resizeBottomLeft
        newX1 = touchPositionOnLimberGrid.x;
        newY1 = y;
        newWidth = iiv.userActionData.itemX2 - touchPositionOnLimberGrid.x;
        newHeight = touchPositionOnLimberGrid.y - y;
      }

      if (touchPositionOnLimberGrid) {
        iiv.userActionData.newX1 = newX1;
        iiv.userActionData.newY1 = newY1;
        iiv.userActionData.newWidth = newWidth;
        iiv.userActionData.newHeight = newHeight;

        if (newWidth > 0 && newHeight > 0) {
          e.$limberGridViewPseudoItem.style.transform = `translate(${newX1}px, ${newY1}px)`;
          e.$limberGridViewPseudoItem.style.width = newWidth + "px";
          e.$limberGridViewPseudoItem.style.height = newHeight + "px";
          e.$limberGridViewPseudoItem.setAttribute("data-after", `w: ${parseInt(newWidth)}px, h: ${parseInt(newHeight)}px`);
        }
      }

      if (touchPositionOnLimberGrid) {
        const yTouchPosition = touchPositionOnLimberGrid.y;
        let programScrolled;

        if (!iiv.isScrolling) {
          iiv.isScrolling = true;
          setTimeout(() => {
            programScrolled = adjustHeightAndScroll(this, yTouchPosition, touchPositionOnLimberGrid.offsetY, true);
            iiv.isScrolling = false;
          }, publicConstants.AUTO_SCROLL_DELAY);
        }

        if (programScrolled !== true) {
          iiv.showResizeDemoTimeOutVariable = setTimeout(showResizeDemo.bind(this, iiv.userActionData.itemIndex, newX1, newY1, newWidth, newHeight, iiv.userActionData.type === "resize"), publicConstants.DEMO_WAIT_TIME);
        }
      }
    }
  } else {
    iiv.touchHoldCancel = true;
    onItemTouchContextMenu.call(this, event); // canceling taphold
  }

  event.stopPropagation();
};
const onItemMouseUp = async function (event) {
  const iiv = getItemInteractionVars(this);
  clearTimeout(iiv.showMoveDemoTimeOutVariable);
  clearTimeout(iiv.showResizeDemoTimeOutVariable);

  if (iiv.mouseDownTimerComplete === true) {
    if (iiv.userActionData.type === "move") {
      const mousePositionOnLimberGrid = calculateMousePosOnDesk(this, event);
      var updatedCoordinates = {};

      try {
        if (mousePositionOnLimberGrid) {
          await moveItem.call(this, iiv.userActionData.itemIndex, mousePositionOnLimberGrid.x, mousePositionOnLimberGrid.y);
          updatedCoordinates.x = mousePositionOnLimberGrid.x;
          updatedCoordinates.y = mousePositionOnLimberGrid.y;
        } else {
          throw "Mouse position outside grid area.";
        }
      } catch (error) {
        console.error(error);
        getCallbacks(this).getLogMessage({
          type: "error",
          message: error
        });
        revertShowMoveOrResizeDemo(this);
      }
    } else {
      try {
        const newX1 = iiv.userActionData.newX1;
        const newY1 = iiv.userActionData.newY1;
        const newWidth = iiv.userActionData.newWidth;
        const newHeight = iiv.userActionData.newHeight;
        await resizeItem.call(this, iiv.userActionData.itemIndex, newX1, newY1, newWidth, newHeight, iiv.userActionData.type === "resize");
      } catch (error) {
        console.error(error);
        getCallbacks(this).getLogMessage({
          type: "error",
          message: error
        });
        revertShowMoveOrResizeDemo(this);
      }
    }
  } else {
    iiv.mouseDownCancel = true;
  }

  onItemContextMenu.call(this, event);
  iiv.userActionData = {};
};
const onItemTouchEnd = async function (event) {
  const iiv = getItemInteractionVars(this);
  clearTimeout(iiv.showMoveDemoTimeOutVariable);
  clearTimeout(iiv.showResizeDemoTimeOutVariable);

  if (iiv.touchHoldTimerComplete === true && event.touches.length === 0) {
    if (iiv.userActionData.type === "move") {
      const touchPositionOnLimberGrid = calculateTouchPosOnDesk(this, event);
      var updatedCoordinates = {};

      try {
        if (touchPositionOnLimberGrid) {
          await moveItem.call(this, iiv.userActionData.itemIndex, touchPositionOnLimberGrid.x, touchPositionOnLimberGrid.y);
          updatedCoordinates.x = touchPositionOnLimberGrid.x;
          updatedCoordinates.y = touchPositionOnLimberGrid.y;
        } else {
          throw "Touch position outside grid area.";
        }
      } catch (error) {
        console.error(error);
        getCallbacks(this).getLogMessage({
          type: "error",
          message: error
        });
        revertShowMoveOrResizeDemo(this);
      }
    } else {
      try {
        const newX1 = iiv.userActionData.newX1;
        const newY1 = iiv.userActionData.newY1;
        const newWidth = iiv.userActionData.newWidth;
        const newHeight = iiv.userActionData.newHeight;
        await resizeItem.call(this, iiv.userActionData.itemIndex, newX1, newY1, newWidth, newHeight, iiv.userActionData.type === "resize");
      } catch (error) {
        console.error(error);
        getCallbacks(this).getLogMessage({
          type: "error",
          message: error
        });
        revertShowMoveOrResizeDemo(this);
      }
    }
  } else {
    iiv.touchHoldCancel = true;
  }

  onItemTouchContextMenu.call(this, event);
  event.stopPropagation();
  iiv.userActionData = {};
};
const onItemContextMenu = function (event) {
  const e = variables_elements(this);
  const iiv = getItemInteractionVars(this);
  const bf = getBindedFunctions(this);
  clearTimeout(iiv.showMoveDemoTimeOutVariable);
  clearTimeout(iiv.showResizeDemoTimeOutVariable);
  clearTimeout(iiv.longPressCheck);
  clearTimeout(iiv.longTouchCheck);
  unloadResizingState(this, iiv.userActionData);
  unloadMoveState(this, iiv.userActionData);
  unloadOnMoveState(this);
  revertShowMoveOrResizeDemo(this);
  document.removeEventListener("mousemove", bf.onItemMouseMove);
  e.$limberGridView.removeEventListener("mousemove", bf.onItemMouseMove);
  document.removeEventListener("mouseup", bf.onItemMouseUp);
  document.removeEventListener("contextmenu", bf.onItemContextMenu);
  document.removeEventListener("touchmove", bf.onItemTouchMove);
  e.$limberGridView.removeEventListener("touchmove", bf.onItemTouchMove);
  document.removeEventListener("touchend", bf.onItemTouchEnd);
  document.removeEventListener("contextmenu", bf.onItemTouchContextMenu);
  document.removeEventListener("touchcancel", bf.onItemTouchCancel);
  iiv.userActionData = {};
  setStatus(this, "moveDemo", undefined);
  setStatus(this, "resizeDemo", undefined);
  const rt = trees(this, "rt");
  rt.emptyTree();
  event.preventDefault();
  event.stopPropagation();
};
const onItemTouchContextMenu = function (event) {
  onItemContextMenu.call(this, event);
};
const onItemTouchCancel = function (event) {
  onItemContextMenu.call(this, event);
};
const showMoveDemo = async function (index, mousePosition) {
  const e = variables_elements(this);

  try {
    if (mousePosition !== false) {
      await moveItemDemo.call(this, index, mousePosition.x, mousePosition.y);
      e.$pseudoContainerItem.classList.remove("limber-grid-view-pseudo-container-item-move-disallow");
      e.$pseudoContainerItem.classList.add("limber-grid-view-pseudo-container-item-move-allow");
    } else {
      throw "Invalid mouse position.";
    }
  } catch (error) {
    console.error(error);
    getCallbacks(this).getLogMessage({
      type: "error",
      message: error
    });
    e.$pseudoContainerItem.classList.remove("limber-grid-view-pseudo-container-item-move-allow");
    e.$pseudoContainerItem.classList.add("limber-grid-view-pseudo-container-item-move-disallow");
  }
};
const showResizeDemo = async function (index, x, y, width, height, forBottomRight) {
  const e = variables_elements(this);

  try {
    await resizeItemDemo.call(this, index, x, y, width, height, forBottomRight);
    e.$limberGridViewPseudoItem.classList.add("limber-grid-view-pseudo-item-resize-allow");
  } catch (error) {
    console.error(error);
    getCallbacks(this).getLogMessage({
      type: "error",
      message: error
    });
    e.$limberGridViewPseudoItem.classList.add("limber-grid-view-pseudo-item-resize-disallow");
  }
};
const revertShowMoveOrResizeDemo = resetDemoUIChanges;
// CONCATENATED MODULE: ./src/libs/eventHandlerLib/deskInteractionUtils.js
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


const loadInitState = context => {
  const e = variables_elements(context);
  const publicConstants = constants_publicConstants(context);
  e.$body.classList.add("limber-grid-view-body-tag-state-editing", "limber-grid-view-body-tag-state-editing-adding-cutting");
  const len = e.$limberGridViewItems.length;

  for (let i = 0; i < len; i++) {
    if (e.$limberGridViewItems[i]) {
      e.$limberGridViewItems[i].classList.add("limber-grid-view-item-resizing-state");
    }
  }

  e.$limberGridViewPseudoItem.classList.add("limber-grid-view-pseudo-item-resizing-state");

  if (publicConstants.DESK_INTERACTION_MODE === "ADD") {
    e.$limberGridViewAddCutGuide.classList.add("limber-grid-view-add-cut-guide-active");
  } else if (publicConstants.DESK_INTERACTION_MODE === "CUTSPACE") {
    e.$limberGridViewAddCutGuide.classList.add("limber-grid-view-add-cut-guide-active", "limber-grid-view-add-cut-guide-cut-mode");
  }

  e.$limberGridViewHeightAdjustGuide.style.height = 0 + "px";
  e.$limberGridViewHeightAdjustGuide.classList.add("limber-grid-view-height-adjust-guide-active");
};
const unloadInitState = context => {
  const e = variables_elements(context);
  e.$body.classList.remove("limber-grid-view-body-tag-state-editing", "limber-grid-view-body-tag-state-editing-adding-cutting");
  const len = e.$limberGridViewItems.length;

  for (var i = 0; i < len; i++) {
    if (e.$limberGridViewItems[i]) {
      e.$limberGridViewItems[i].classList.remove("limber-grid-view-item-resizing-state");
    }
  }

  e.$limberGridViewPseudoItem.classList.remove("limber-grid-view-pseudo-item-resizing-state");
  e.$limberGridViewAddCutGuide.classList.remove("limber-grid-view-add-cut-guide-active", "limber-grid-view-add-cut-guide-cut-mode", "limber-grid-view-add-cut-guide-add-allow", "limber-grid-view-add-cut-guide-add-disallow");
  e.$limberGridViewAddCutGuide.style.transform = `translate(-1000px, -1000px)`;
  e.$limberGridViewHeightAdjustGuide.style.height = 0 + "px";
  e.$limberGridViewHeightAdjustGuide.classList.remove("limber-grid-view-height-adjust-guide-active");
  e.$limberGridViewTouchHoldGuide.classList.remove("limber-grid-view-touch-hold-guide-active");
  e.$limberGridViewTouchHoldGuide.style.transform = `translate(-1000px, -1000px)`;
};
// CONCATENATED MODULE: ./src/libs/eventHandlerLib/deskInteraction.js
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












const onDeskMouseDown = function (event) {
  const e = variables_elements(this);
  const publicConstants = constants_publicConstants(this);
  const dkiv = getDeskInteractionVars(this);
  const bf = getBindedFunctions(this);

  if (event.target.classList.contains("limber-grid-view")) {
    event.stopPropagation();
  } else {
    return;
  }

  dkiv.mouseDownCancel = false;
  dkiv.mouseDownTimerComplete = false;
  clearTimeout(dkiv.longPressCheck);
  dkiv.longPressCheck = setTimeout(deskInteraction_mouseDownCheck.bind(this, event, event.offsetX, event.offsetY), publicConstants.MOUSE_DOWN_TIME);
  e.$limberGridView.addEventListener("mousemove", bf.onDeskMouseMove);
  document.addEventListener("mouseup", bf.onDeskMouseUp);
  document.addEventListener("contextmenu", bf.onDeskContextMenu);
};
const onDeskTouchStart = function (event) {
  const e = variables_elements(this);
  const publicConstants = constants_publicConstants(this);
  const dkiv = getDeskInteractionVars(this);
  const bf = getBindedFunctions(this);

  if (!event.target.classList.contains("limber-grid-view")) {
    return;
  }

  if (event.touches.length !== 1) {
    return;
  }

  dkiv.tapHoldCancel = false;
  dkiv.tapHoldTimerComplete = false;
  e.$limberGridView.addEventListener("touchmove", bf.onDeskTouchMove);
  document.addEventListener("touchend", bf.onDeskTouchEnd);
  document.addEventListener("touchcancel", bf.onDeskTouchCancel);
  document.addEventListener("contextmenu", bf.onDeskTouchContextMenu);
  unInitializeItemTouchEvents.call(this);
  clearTimeout(dkiv.longTouchCheck);
  dkiv.longTouchCheck = setTimeout(deskInteraction_tapHoldCheck.bind(this, event), publicConstants.TOUCH_HOLD_TIME);
  event.stopPropagation();
};
const deskInteraction_mouseDownCheck = function (event, offsetX, offsetY) {
  const e = variables_elements(this);
  const privateConstants = constants_privateConstants(this);
  const dkiv = getDeskInteractionVars(this);

  if (dkiv.mouseDownCancel === false) {
    dkiv.mouseDownTimerComplete = true;
    var scrollTop = e.$limberGridView.scrollTop;
    var scrollLeft = e.$limberGridView.scrollLeft;
    var x = offsetX + scrollLeft - privateConstants.PADDING_LEFT;
    var y = offsetY + scrollTop - privateConstants.PADDING_TOP;
    dkiv.userActionData = {
      type: "add",
      addPositionX: x,
      addPositionY: y
    };
    e.$limberGridViewAddCutGuide.style.height = 1 + "px";
    e.$limberGridViewAddCutGuide.style.width = 1 + "px";
    e.$limberGridViewAddCutGuide.style.transform = `translate(${x}px, ${y}px)`;
    e.$limberGridViewAddCutGuide.setAttribute("data-after", `w: 0px, h: 0px`);
    loadInitState(this);
  }
};
const deskInteraction_tapHoldCheck = function (event) {
  const e = variables_elements(this);
  const dkiv = getDeskInteractionVars(this);

  if (dkiv.tapHoldCancel === false) {
    dkiv.tapHoldTimerComplete = true;
    const touchPositionOnLimberGrid = calculateTouchPosOnDesk(this, event);
    const x = touchPositionOnLimberGrid.x;
    const y = touchPositionOnLimberGrid.y;
    dkiv.userActionData = {
      type: "add",
      addPositionX: x,
      addPositionY: y
    };

    const removeAddItemOnTouchHoldGuideFunction = function () {
      e.$limberGridViewTouchHoldGuide.classList.remove("limber-grid-view-touch-hold-guide-active");
      e.$limberGridViewTouchHoldGuide.style.transform = `translate(-1000px, -1000px)`;
    };

    setTimeout(removeAddItemOnTouchHoldGuideFunction.bind(this), 500);
    e.$limberGridViewAddCutGuide.style.height = 1 + "px";
    e.$limberGridViewAddCutGuide.style.width = 1 + "px";
    e.$limberGridViewAddCutGuide.style.transform = `translate(${x}px, ${y}px)`;
    e.$limberGridViewAddCutGuide.setAttribute("data-after", `w: 0px, h: 0px`);
    loadInitState(this);
    e.$limberGridViewTouchHoldGuide.style.transform = `translate(${x}px, ${y}px)`;
    e.$limberGridViewTouchHoldGuide.classList.add("limber-grid-view-touch-hold-guide-active");
    event.preventDefault();
  }
};
const onDeskMouseMove = function (event) {
  const e = variables_elements(this);
  const privateConstants = constants_privateConstants(this);
  const publicConstants = constants_publicConstants(this);
  const dkiv = getDeskInteractionVars(this);

  if (dkiv.mouseDownTimerComplete === true) {
    e.$limberGridViewAddCutGuide.classList.remove("limber-grid-view-add-cut-guide-allow", "limber-grid-view-add-cut-guide-disallow");
    const scrollTop = e.$limberGridView.scrollTop;
    const scrollLeft = e.$limberGridView.scrollLeft;
    const x = dkiv.userActionData.addPositionX;
    const y = dkiv.userActionData.addPositionY;
    const newWidth = event.offsetX - x + scrollLeft - privateConstants.PADDING_LEFT;
    const newHeight = event.offsetY - y + scrollTop - privateConstants.PADDING_TOP;
    dkiv.userActionData.newWidth = newWidth;
    dkiv.userActionData.newHeight = newHeight;
    const offsetY = event.offsetY;
    const yMousePosition = event.offsetY + scrollTop;

    if (!dkiv.isScrolling) {
      dkiv.isScrolling = true;
      setTimeout(() => {
        adjustHeightAndScroll(this, yMousePosition, offsetY, publicConstants.AUTO_SCROLL_FOR_MOUSE);
        dkiv.isScrolling = false;
      }, publicConstants.AUTO_SCROLL_DELAY);
    }

    if (newWidth > 0 && newHeight > 0) {
      e.$limberGridViewAddCutGuide.style.width = newWidth + "px";
      e.$limberGridViewAddCutGuide.style.height = newHeight + "px";
      e.$limberGridViewAddCutGuide.setAttribute("data-after", `w: ${parseInt(newWidth)}px, h: ${parseInt(newHeight)}px`);
    }

    if (publicConstants.DESK_INTERACTION_MODE === "ADD") {
      clearTimeout(dkiv.addItemAllowCheckTimeOutVariable);
      dkiv.addItemAllowCheckTimeOutVariable = setTimeout(addItemAllowCheckTimeOut.bind(this, dkiv.userActionData.addPositionX, dkiv.userActionData.addPositionY, newWidth, newHeight), publicConstants.DEMO_WAIT_TIME);
    } else if (publicConstants.DESK_INTERACTION_MODE === "CUTSPACE") {
      clearTimeout(dkiv.cutSpaceAllowCheckTimeOutVariable);
      dkiv.cutSpaceAllowCheckTimeOutVariable = setTimeout(cutSpaceAllowCheckTimeOut.bind(this, dkiv.userActionData.addPositionX, dkiv.userActionData.addPositionY, newWidth, newHeight), publicConstants.DEMO_WAIT_TIME);
    }
  } else {
    onDeskContextMenu.call(this, event);
  }

  event.stopPropagation();
};
const onDeskTouchMove = function (event) {
  const e = variables_elements(this); // const privateConstants = getPrivateConstants(this);

  const publicConstants = constants_publicConstants(this);
  const dkiv = getDeskInteractionVars(this);

  if (dkiv.tapHoldTimerComplete === true && event.touches.length === 1) {
    e.$limberGridViewAddCutGuide.classList.remove("limber-grid-view-add-cut-guide-allow", "limber-grid-view-add-cut-guide-disallow");
    const x = dkiv.userActionData.addPositionX;
    const y = dkiv.userActionData.addPositionY;
    const touchPositionOnLimberGrid = calculateTouchPosOnDesk(this, event);
    const newWidth = (touchPositionOnLimberGrid === null || touchPositionOnLimberGrid === void 0 ? void 0 : touchPositionOnLimberGrid.x) - x;
    const newHeight = (touchPositionOnLimberGrid === null || touchPositionOnLimberGrid === void 0 ? void 0 : touchPositionOnLimberGrid.y) - y;

    if (touchPositionOnLimberGrid) {
      dkiv.userActionData.newWidth = newWidth;
      dkiv.userActionData.newHeight = newHeight;

      if (newWidth > 0 && newHeight > 0) {
        e.$limberGridViewAddCutGuide.style.width = newWidth + "px";
        e.$limberGridViewAddCutGuide.style.height = newHeight + "px";
        e.$limberGridViewAddCutGuide.setAttribute("data-after", `w: ${parseInt(newWidth)}px, h: ${parseInt(newHeight)}px`);
      }
    }

    if (touchPositionOnLimberGrid) {
      const yTouchPosition = touchPositionOnLimberGrid.y;
      let programScrolled;

      if (!dkiv.isScrolling) {
        dkiv.isScrolling = true;
        setTimeout(() => {
          programScrolled = adjustHeightAndScroll(this, yTouchPosition, touchPositionOnLimberGrid.offsetY, true);
          dkiv.isScrolling = false;
        }, publicConstants.AUTO_SCROLL_DELAY);
      }

      if (publicConstants.DESK_INTERACTION_MODE === "ADD") {
        clearTimeout(dkiv.addItemAllowCheckTimeOutVariable);

        if (programScrolled !== true) {
          dkiv.addItemAllowCheckTimeOutVariable = setTimeout(addItemAllowCheckTimeOut.bind(this, dkiv.userActionData.addPositionX, dkiv.userActionData.addPositionY, newWidth, newHeight), publicConstants.DEMO_WAIT_TIME);
        }
      } else if (publicConstants.DESK_INTERACTION_MODE === "CUTSPACE") {
        clearTimeout(dkiv.cutSpaceAllowCheckTimeOutVariable);

        if (programScrolled !== true) {
          dkiv.cutSpaceAllowCheckTimeOutVariable = setTimeout(cutSpaceAllowCheckTimeOut.bind(this, dkiv.userActionData.addPositionX, dkiv.userActionData.addPositionY, newWidth, newHeight), publicConstants.DEMO_WAIT_TIME);
        }
      }
    }

    event.preventDefault();
  } else {
    onDeskContextMenu.call(this);
  }

  event.stopPropagation();
};
const onDeskMouseUp = function (event) {
  const e = variables_elements(this);
  const publicConstants = constants_publicConstants(this);
  const callbacks = getCallbacks(this);
  const dkiv = getDeskInteractionVars(this);
  clearTimeout(dkiv.addItemAllowCheckTimeOutVariable);
  clearTimeout(dkiv.longPressCheck);

  if (dkiv.mouseDownTimerComplete === true) {
    if (publicConstants.DESK_INTERACTION_MODE === "ADD") {
      if (addItemAllowCheck(this, dkiv.userActionData.addPositionX, dkiv.userActionData.addPositionY, dkiv.userActionData.newWidth, dkiv.userActionData.newHeight)) {
        var item = {
          x: dkiv.userActionData.addPositionX,
          y: dkiv.userActionData.addPositionY,
          width: dkiv.userActionData.newWidth,
          height: dkiv.userActionData.newHeight
        };
        var scrollTop = e.$limberGridView.scrollTop;
        addItem(this, item, false, "addItemInteractive");
        e.$limberGridView.scrollTop = scrollTop;
      }
    } else if (publicConstants.DESK_INTERACTION_MODE === "CUTSPACE") {
      const cutDetails = cutSpaceAllowCheck(this, dkiv.userActionData.addPositionX, dkiv.userActionData.addPositionY, dkiv.userActionData.newWidth, dkiv.userActionData.newHeight);

      if (cutDetails) {
        shiftItemsUp(this, cutDetails.y, cutDetails.shiftHeight);

        if (callbacks.cutSpaceComplete) {
          callbacks.cutSpaceComplete();
        }
      }
    }
  } else {
    dkiv.mouseDownCancel = true;
  }

  onDeskContextMenu.call(this);
  event.stopPropagation();
};
const onDeskTouchEnd = function (event) {
  const e = variables_elements(this);
  const publicConstants = constants_publicConstants(this);
  const callbacks = getCallbacks(this);
  const dkiv = getDeskInteractionVars(this);
  clearTimeout(dkiv.addItemAllowCheckTimeOutVariable);
  clearTimeout(dkiv.longTouchCheck);

  if (dkiv.tapHoldTimerComplete === true && event.touches.length === 0) {
    if (publicConstants.DESK_INTERACTION_MODE === "ADD") {
      if (addItemAllowCheck(this, dkiv.userActionData.addPositionX, dkiv.userActionData.addPositionY, dkiv.userActionData.newWidth, dkiv.userActionData.newHeight)) {
        const item = {
          x: dkiv.userActionData.addPositionX,
          y: dkiv.userActionData.addPositionY,
          width: dkiv.userActionData.newWidth,
          height: dkiv.userActionData.newHeight
        };
        const scrollTop = e.$limberGridView.scrollTop;
        addItem(this, item, false, "addItemInteractive");
        e.$limberGridView.scrollTop = scrollTop;
      }
    } else if (publicConstants.DESK_INTERACTION_MODE === "CUTSPACE") {
      const cutDetails = cutSpaceAllowCheck(this, dkiv.userActionData.addPositionX, dkiv.userActionData.addPositionY, dkiv.userActionData.newWidth, dkiv.userActionData.newHeight);

      if (cutDetails) {
        shiftItemsUp(this, cutDetails.y, cutDetails.shiftHeight);

        if (callbacks.cutSpaceComplete) {
          callbacks.cutSpaceComplete();
        }
      }
    }
  } else {
    dkiv.tapHoldCancel = true;
  }

  onDeskContextMenu.call(this);
  event.stopPropagation();
};
const onDeskTouchCancel = function (event) {
  onDeskContextMenu.call(this);
};
const onDeskTouchContextMenu = function (event) {
  event.preventDefault();
};
const onDeskContextMenu = function (event) {
  const e = variables_elements(this);
  const dkiv = getDeskInteractionVars(this);
  const bf = getBindedFunctions(this);
  clearTimeout(dkiv.addItemAllowCheckTimeOutVariable);
  clearTimeout(dkiv.cutSpaceAllowCheckTimeOutVariable);
  clearTimeout(dkiv.longPressCheck);
  clearTimeout(dkiv.longTouchCheck);
  unloadInitState(this);
  e.$limberGridView.removeEventListener("mousemove", bf.onDeskMouseMove);
  document.removeEventListener("mouseup", bf.onDeskMouseUp);
  document.removeEventListener("contextmenu", bf.onDeskContextMenu);
  e.$limberGridView.removeEventListener("touchmove", bf.onDeskTouchMove);
  document.removeEventListener("touchend", bf.onDeskTouchEnd);
  document.removeEventListener("touchcancel", bf.onDeskTouchCancel);
  document.removeEventListener("contextmenu", bf.onDeskTouchContextMenu);
  initializeItemTouchEvents.call(this);
  dkiv.userActionData = {};

  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
};
const addItemAllowCheckTimeOut = function (x, y, width, height) {
  const e = variables_elements(this);

  if (addItemAllowCheck(this, x, y, width, height) === false) {
    e.$limberGridViewAddCutGuide.classList.remove("limber-grid-view-add-cut-guide-allow");
    e.$limberGridViewAddCutGuide.classList.add("limber-grid-view-add-cut-guide-disallow");
  } else {
    e.$limberGridViewAddCutGuide.classList.remove("limber-grid-view-add-cut-guide-disallow");
    e.$limberGridViewAddCutGuide.classList.add("limber-grid-view-add-cut-guide-allow");
  }
};
const cutSpaceAllowCheckTimeOut = function (x, y, width, height) {
  const e = variables_elements(this);

  if (cutSpaceAllowCheck(this, x, y, width, height) === false) {
    e.$limberGridViewAddCutGuide.classList.remove("limber-grid-view-add-cut-guide-allow");
    e.$limberGridViewAddCutGuide.classList.add("limber-grid-view-add-cut-guide-disallow");
  } else {
    e.$limberGridViewAddCutGuide.classList.remove("limber-grid-view-add-cut-guide-disallow");
    e.$limberGridViewAddCutGuide.classList.add("limber-grid-view-add-cut-guide-allow");
  }
};
// EXTERNAL MODULE: external {"commonjs":"resize-observer-polyfill","commonjs2":"resize-observer-polyfill","amd":"resize-observer-polyfill","root":"resize-observer-polyfill"}
var external_commonjs_resize_observer_polyfill_commonjs2_resize_observer_polyfill_amd_resize_observer_polyfill_root_resize_observer_polyfill_ = __webpack_require__(3);
var external_commonjs_resize_observer_polyfill_commonjs2_resize_observer_polyfill_amd_resize_observer_polyfill_root_resize_observer_polyfill_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_resize_observer_polyfill_commonjs2_resize_observer_polyfill_amd_resize_observer_polyfill_root_resize_observer_polyfill_);

// CONCATENATED MODULE: ./src/store/flags/flagDetails.js
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
const DESK_INTERACTION_MODE = {
  ADD: true,
  CUTSPACE: true
};
// CONCATENATED MODULE: ./src/initializers/initializers.js
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










const init = async function (context, isResize, autoArrange) {
  const e = variables_elements(context);
  const privateConstants = constants_privateConstants(context);
  const pd = getPositionData(context);

  if (autoArrange === true || !checkPositionData(pd)) {
    // * 	autoArrange will be true only during the first render
    // * 	this if block is always supposed to execute during the first render
    // 		if autoArrange is true or invalid positionData is supplied
    // *	below code is basically resetting everything to 1920*1080
    // *	everything will be scaled to new height and width in render function
    console.warn("Auto-arranging");
    setModifiedPositionData(context, pd);
    const mpd = getModifiedPositionData(context);
    const len = pd.length;
    const arr = new Array(len);

    for (let i = 0; i < len; i++) {
      arr[i] = i;
      mpd[i].x1 = 0;
      mpd[i].x2 = 0;
      mpd[i].y1 = 0;
      mpd[i].y2 = 0;
      mpd[i].x = 0;
      mpd[i].y = 0;
      mpd[i].width = mpd[i].width / privateConstants.WIDTH_SCALE_FACTOR || privateConstants.MIN_HEIGHT_AND_WIDTH * 2;
      mpd[i].height = mpd[i].height / privateConstants.WIDTH_SCALE_FACTOR || privateConstants.MIN_HEIGHT_AND_WIDTH * 2;
      mpd[i].mX1 = 0;
      mpd[i].mX2 = 0;
      mpd[i].mY1 = 0;
      mpd[i].mY2 = 0;
      mpd[i].mX = 0;
      mpd[i].mY = 0;
      mpd[i].mWidth = mpd[i].width + privateConstants.MARGIN * 2;
      mpd[i].mHeight = mpd[i].height + privateConstants.MARGIN * 2;
      Object.assign(pd[i], mpd[i]);
    }

    setWidth(context, privateConstants.GRID_WIDTH);
    setHeight(context, privateConstants.GRID_HEIGHT);
    setMargin(context, privateConstants.GRID_MARGIN);
    setWidthScaleFactor(context, 1);
    setDefinedMinHeightAndWidth(context, privateConstants.MIN_HEIGHT_AND_WIDTH);
    await autoArrangeGrid(context);
    setPositionData(context, mpd);
  }

  setPaddingLeft(context, parseInt(window.getComputedStyle(e.$limberGridView, null).getPropertyValue("padding-left")));
  setPaddingRight(context, parseInt(window.getComputedStyle(e.$limberGridView, null).getPropertyValue("padding-right")));
  setPaddingTop(context, parseInt(window.getComputedStyle(e.$limberGridView, null).getPropertyValue("padding-top")));
  setPaddingBottom(context, parseInt(window.getComputedStyle(e.$limberGridView, null).getPropertyValue("padding-bottom")));
  setWidth(context, e.$limberGridView.clientWidth - privateConstants.PADDING_LEFT - privateConstants.PADDING_RIGHT);
  setHeight(context, e.$limberGridView.clientHeight - privateConstants.PADDING_TOP - privateConstants.PADDING_BOTTOM);

  if (isResize) {
    // *	reset item x, y, width, height, x1, x2, y1, y2; MARGIN, MIN_HEIGHT_AND_WIDTH
    // *	below code is basically resetting everything to 1920*1080
    // *	everything will be scaled to new height and width in render function
    const len = pd.length;

    for (let i = 0; i < len; i++) {
      pd[i].x1 /= privateConstants.WIDTH_SCALE_FACTOR;
      pd[i].x2 /= privateConstants.WIDTH_SCALE_FACTOR;
      pd[i].y1 /= privateConstants.WIDTH_SCALE_FACTOR;
      pd[i].y2 /= privateConstants.WIDTH_SCALE_FACTOR;
      pd[i].x /= privateConstants.WIDTH_SCALE_FACTOR;
      pd[i].y /= privateConstants.WIDTH_SCALE_FACTOR;
      pd[i].width /= privateConstants.WIDTH_SCALE_FACTOR;
      pd[i].height /= privateConstants.WIDTH_SCALE_FACTOR;
    }

    privateConstants.MARGIN /= privateConstants.WIDTH_SCALE_FACTOR;
    privateConstants.DEFINED_MIN_HEIGHT_AND_WIDTH /= privateConstants.WIDTH_SCALE_FACTOR;
  }

  setWidthScaleFactor(context, privateConstants.WIDTH / privateConstants.GRID_WIDTH);
  setMargin(context, privateConstants.MARGIN * privateConstants.WIDTH_SCALE_FACTOR);
  setDefinedMinHeightAndWidth(context, privateConstants.DEFINED_MIN_HEIGHT_AND_WIDTH * privateConstants.WIDTH_SCALE_FACTOR);

  if (!isMobile(context)) {
    get$limberGridViewIOTopHelper(context).style.transform = `translate(0px, ${getIOTopHelperPos(context) * privateConstants.HEIGHT}px)`;
    get$limberGridViewIOBottomHelper(context).style.transform = `translate(0px, ${getIOBottomHelperPos(context) * privateConstants.HEIGHT}px)`;
    const renderSpace = {
      x1: 0,
      x2: privateConstants.WIDTH,
      y1: getIOTopHelperPos(context) * privateConstants.HEIGHT - privateConstants.HEIGHT / 2,
      y2: getIOBottomHelperPos(context) * privateConstants.HEIGHT + privateConstants.HEIGHT / 2
    };
    setRenderedItems(context, getItemsInWorkSpace(context, renderSpace, true));
  } else {
    get$limberGridViewIOTopHelper(context).style.transform = `translate(1px, 1px)`;
    setSerializedPositionData(context, pd);
    const spd = getSerializedPositionData(context);
    const len = pd.length < 15 ? pd.length : 15;
    const arr = new Array(len).fill(0).map((o, index) => index);
    setRenderedItems(context, arr);

    for (let i = 0; i < len; i++) {
      spd[arr[i]].renderIndex = i;
    }
  }
};
const initConstantsAndFlags = function (options) {
  var _options$gridData, _options$gridData2, _options$gridData3, _options$gridData4, _options$publicConsta, _options$publicConsta2, _options$publicConsta3, _options$publicConsta4, _options$publicConsta5, _options$publicConsta6, _options$publicConsta7, _options$publicConsta8, _options$publicConsta9, _options$publicConsta10, _options$publicConsta11, _options$publicConsta12, _options$publicConsta13, _options$publicConsta14, _options$publicConsta15, _options$publicConsta16, _options$publicConsta17, _options$publicConsta18, _options$publicConsta19, _options$publicConsta20, _options$publicConsta21, _options$publicConsta22;

  // Private Constants BEGIN
  if (typeof (options === null || options === void 0 ? void 0 : (_options$gridData = options.gridData) === null || _options$gridData === void 0 ? void 0 : _options$gridData.WIDTH) === "number") {
    setGridWidth(this, options.gridData.WIDTH);
  }

  if (typeof (options === null || options === void 0 ? void 0 : (_options$gridData2 = options.gridData) === null || _options$gridData2 === void 0 ? void 0 : _options$gridData2.HEIGHT) === "number") {
    setGridHeight(this, options.gridData.HEIGHT);
  }

  if (typeof (options === null || options === void 0 ? void 0 : (_options$gridData3 = options.gridData) === null || _options$gridData3 === void 0 ? void 0 : _options$gridData3.MARGIN) === "number") {
    setGridMargin(this, options.gridData.MARGIN);
  }

  if (typeof (options === null || options === void 0 ? void 0 : (_options$gridData4 = options.gridData) === null || _options$gridData4 === void 0 ? void 0 : _options$gridData4.MIN_HEIGHT_AND_WIDTH) === "number") {
    setMinHeightAndWidth(this.options.gridData.MIN_HEIGHT_AND_WIDTH);
  } // Private Constants ENDED
  // Public Constants BEGIN


  if (typeof (options === null || options === void 0 ? void 0 : (_options$publicConsta = options.publicConstants) === null || _options$publicConsta === void 0 ? void 0 : _options$publicConsta.mobileAspectRatio) === "number") {
    setPublicConstantByName(this, "MOBILE_ASPECT_RATIO", options.publicConstants.mobileAspectRatio);
  }

  if (typeof (options === null || options === void 0 ? void 0 : (_options$publicConsta2 = options.publicConstants) === null || _options$publicConsta2 === void 0 ? void 0 : _options$publicConsta2.moveGuideRadius) === "number") {
    setPublicConstantByName(this, "MOVE_GUIDE_RADIUS", options.publicConstants.moveGuideRadius);
  }

  if (typeof (options === null || options === void 0 ? void 0 : (_options$publicConsta3 = options.publicConstants) === null || _options$publicConsta3 === void 0 ? void 0 : _options$publicConsta3.resizeSquareGuideLength) === "number") {
    setPublicConstantByName(this, "RESIZE_SQUARE_GUIDE_LENGTH", options.publicConstants.resizeSquareGuideLength);
  }

  if (typeof (options === null || options === void 0 ? void 0 : (_options$publicConsta4 = options.publicConstants) === null || _options$publicConsta4 === void 0 ? void 0 : _options$publicConsta4.resizeSquareBorderGuideWidth) === "number") {
    setPublicConstantByName(this, "RESIZE_SQUARE_GUIDE_BORDER_WIDTH", options.publicConstants.resizeSquareBorderGuideWidth);
  }

  if (typeof (options === null || options === void 0 ? void 0 : (_options$publicConsta5 = options.publicConstants) === null || _options$publicConsta5 === void 0 ? void 0 : _options$publicConsta5.showBottomLeftResizeGuide) === "boolean") {
    setPublicConstantByName(this, "SHOW_BOTTOM_LEFT_RESIZE_GUIDE", options.publicConstants.showBottomLeftResizeGuide);
  }

  if (typeof (options === null || options === void 0 ? void 0 : (_options$publicConsta6 = options.publicConstants) === null || _options$publicConsta6 === void 0 ? void 0 : _options$publicConsta6.autoScrollDistance) === "number") {
    setPublicConstantByName(this, "AUTO_SCROLL_DISTANCE", options.publicConstants.autoScrollDistance);
  }

  if (typeof (options === null || options === void 0 ? void 0 : (_options$publicConsta7 = options.publicConstants) === null || _options$publicConsta7 === void 0 ? void 0 : _options$publicConsta7.autoScrollPoint) === "number") {
    setPublicConstantByName(this, "AUTO_SCROLL_POINT", options.publicConstants.autoScrollPoint);
  }

  if (typeof (options === null || options === void 0 ? void 0 : (_options$publicConsta8 = options.publicConstants) === null || _options$publicConsta8 === void 0 ? void 0 : _options$publicConsta8.moveOrResizeHeightIncrements) === "number") {
    setPublicConstantByName(this, "MOVE_OR_RESIZE_HEIGHT_INCREMENTS", options.publicConstants.moveOrResizeHeightIncrements);
  }

  if (typeof (options === null || options === void 0 ? void 0 : (_options$publicConsta9 = options.publicConstants) === null || _options$publicConsta9 === void 0 ? void 0 : _options$publicConsta9.autoScrollForMouse) === "boolean") {
    setPublicConstantByName(this, "AUTO_SCROLL_FOR_MOUSE", options.publicConstants.autoScrollForMouse);
  }

  if (typeof (options === null || options === void 0 ? void 0 : (_options$publicConsta10 = options.publicConstants) === null || _options$publicConsta10 === void 0 ? void 0 : _options$publicConsta10.mouseDownTime) === "number") {
    setPublicConstantByName(this, "MOUSE_DOWN_TIME", options.publicConstants.mouseDownTime);
  }

  if (typeof (options === null || options === void 0 ? void 0 : (_options$publicConsta11 = options.publicConstants) === null || _options$publicConsta11 === void 0 ? void 0 : _options$publicConsta11.touchHoldTime) === "number") {
    setPublicConstantByName(this, "TOUCH_HOLD_TIME", options.publicConstants.touchHoldTime);
  }

  if (typeof (options === null || options === void 0 ? void 0 : (_options$publicConsta12 = options.publicConstants) === null || _options$publicConsta12 === void 0 ? void 0 : _options$publicConsta12.demoWaitTime) === "number") {
    setPublicConstantByName(this, "DEMO_WAIT_TIME", options.publicConstants.demoWaitTime);
  }

  if (typeof (options === null || options === void 0 ? void 0 : (_options$publicConsta13 = options.publicConstants) === null || _options$publicConsta13 === void 0 ? void 0 : _options$publicConsta13.windowResizeWaitTime) === "number") {
    setPublicConstantByName(this, "WINDOW_RESIZE_WAIT_TIME", options.publicConstants.windowResizeWaitTime);
  }

  if (typeof (options === null || options === void 0 ? void 0 : (_options$publicConsta14 = options.publicConstants) === null || _options$publicConsta14 === void 0 ? void 0 : _options$publicConsta14.autoScrollDelay) === "number") {
    setPublicConstantByName(this, "AUTO_SCROLL_DELAY", options.publicConstants.autoScrollDelay);
  }

  if (options !== null && options !== void 0 && (_options$publicConsta15 = options.publicConstants) !== null && _options$publicConsta15 !== void 0 && _options$publicConsta15.deskInteractionMode && DESK_INTERACTION_MODE[options.publicConstants.deskInteractionMode]) {
    setPublicConstantByName(this, "DESK_INTERACTION_MODE", options.publicConstants.deskInteractionMode);
  }

  if (typeof (options === null || options === void 0 ? void 0 : (_options$publicConsta16 = options.publicConstants) === null || _options$publicConsta16 === void 0 ? void 0 : _options$publicConsta16.latchMovedItem) === "boolean") {
    setPublicConstantByName(this, "LATCH_MOVED_ITEM", options.publicConstants.latchMovedItem);
  }

  if (typeof (options === null || options === void 0 ? void 0 : (_options$publicConsta17 = options.publicConstants) === null || _options$publicConsta17 === void 0 ? void 0 : _options$publicConsta17.animateMovedItem) === "boolean") {
    setPublicConstantByName(this, "ANIMATE_MOVED_ITEM", options.publicConstants.animateMovedItem);
  }

  if (typeof (options === null || options === void 0 ? void 0 : (_options$publicConsta18 = options.publicConstants) === null || _options$publicConsta18 === void 0 ? void 0 : _options$publicConsta18.animateTime) === "number") {
    setPublicConstantByName(this, "ANIMATE_TIME", options.publicConstants.animateTime);
  }

  if (typeof (options === null || options === void 0 ? void 0 : (_options$publicConsta19 = options.publicConstants) === null || _options$publicConsta19 === void 0 ? void 0 : _options$publicConsta19.crossHairWidth) === "number") {
    setPublicConstantByName(this, "CROSS_HAIR_WIDTH", options.publicConstants.crossHairWidth);
  }

  if (typeof (options === null || options === void 0 ? void 0 : (_options$publicConsta20 = options.publicConstants) === null || _options$publicConsta20 === void 0 ? void 0 : _options$publicConsta20.crossHairHeight) === "number") {
    setPublicConstantByName(this, "CROSS_HAIR_HEIGHT", options.publicConstants.crossHairHeight);
  }

  if (typeof (options === null || options === void 0 ? void 0 : (_options$publicConsta21 = options.publicConstants) === null || _options$publicConsta21 === void 0 ? void 0 : _options$publicConsta21.shrinkToFit) === "number" && (options === null || options === void 0 ? void 0 : (_options$publicConsta22 = options.publicConstants) === null || _options$publicConsta22 === void 0 ? void 0 : _options$publicConsta22.shrinkToFit) <= 10) {
    setPublicConstantByName(this, "SHRINK_TO_FIT", options.publicConstants.shrinkToFit);
  } // Public Constants ENDED
  // Miscellaneous BEGIN
  // Miscellaneous ENDED

};
const initRender = function () {
  const e = variables_elements(this);
  const options = getOptions(this);
  const publicConstants = constants_publicConstants(this);
  set$body(this, document.getElementsByTagName("body")[0]);
  let pseudoContainerId;

  do {
    pseudoContainerId = "limber-grid-view-pseudo-container-" + getRandomString();
  } while (document.getElementById(pseudoContainerId) !== null);

  setPseudoContainerId(this, pseudoContainerId);
  const pseudoContainer = document.createElement("div");
  pseudoContainer.setAttribute("class", "limber-grid-view-pseudo-container");
  pseudoContainer.setAttribute("id", pseudoContainerId);
  set$pseudoContainer(this, pseudoContainer); // pseudo container should be kept in defined container, if not defined then body

  if (options.pseudoElementContainer) {
    let $pseudoElementContainer;

    if (typeof options.pseudoElementContainer === "string") {
      $pseudoElementContainer = document.getElementById(options.pseudoElementContainer);
    } else if (options.pseudoElementContainer instanceof Element) {
      $pseudoElementContainer = options.pseudoElementContainer;
    }

    $pseudoElementContainer.appendChild(pseudoContainer);
  } else {
    e.$body.appendChild(pseudoContainer);
  }

  e.$el.innerHTML = `<div class = "limber-grid-view-container"><div class = "limber-grid-view"></div><div class = "limber-grid-view-license"><div class = "limber-grid-view-license-icon">©</div><div class = "limber-grid-view-license-details">LimberGridView Copyright © 2018-2020 Subendra Kumar Sharma. License GPLv3+: GNU GPL version 3 or later &lthttps://www.gnu.org/licenses/&gt.</div></div></div>`;
  set$limberGridViewContainer(this, e.$el.getElementsByClassName("limber-grid-view-container")[0]);
  set$limberGridView(this, e.$el.getElementsByClassName("limber-grid-view")[0]);
  const pseudoContainerItem = document.createElement("div");
  const limberGridViewPseudoItem = document.createElement("div");
  const limberGridViewMoveGuide = document.createElement("div"); // thing that shows to if there is a latch on item available on move

  const limberGridViewHeightAdjustGuide = document.createElement("div");
  const limberGridViewAddCutGuide = document.createElement("div"); // desk interaction rect

  const limberGridViewTouchHoldGuide = document.createElement("div"); // touch hold animation

  limberGridViewTouchHoldGuide.innerHTML = "<div></div>";
  const limberGridViewCrossHairGuide = document.createElement("div");
  limberGridViewCrossHairGuide.innerHTML = `<hr></hr><hr></hr>`;
  const limberGridViewIOTopHelper = document.createElement("div");
  const limberGridViewIOBottomHelper = document.createElement("div");
  pseudoContainerItem.setAttribute("class", "limber-grid-view-pseudo-container-item");
  limberGridViewPseudoItem.setAttribute("class", "limber-grid-view-pseudo-item");
  limberGridViewMoveGuide.setAttribute("class", "limber-grid-view-move-guide");
  limberGridViewHeightAdjustGuide.setAttribute("class", "limber-grid-view-height-adjust-guide");
  limberGridViewAddCutGuide.setAttribute("class", "limber-grid-view-add-cut-guide");
  limberGridViewTouchHoldGuide.setAttribute("class", "limber-grid-view-touch-hold-guide");
  limberGridViewCrossHairGuide.setAttribute("class", "limber-grid-view-cross-hair-guide");
  limberGridViewCrossHairGuide.style.transform = `translate(-${publicConstants.CROSS_HAIR_WIDTH * 2}px, -${publicConstants.CROSS_HAIR_HEIGHT * 2}px)`;
  limberGridViewIOTopHelper.setAttribute("class", "limber-grid-view-io-top-helper");
  limberGridViewIOBottomHelper.setAttribute("class", "limber-grid-view-io-bottom-helper");
  e.$pseudoContainer.appendChild(pseudoContainerItem);
  e.$limberGridView.appendChild(limberGridViewPseudoItem);
  e.$limberGridView.appendChild(limberGridViewMoveGuide);
  e.$limberGridView.appendChild(limberGridViewHeightAdjustGuide);
  e.$limberGridView.appendChild(limberGridViewAddCutGuide);
  e.$limberGridView.appendChild(limberGridViewTouchHoldGuide);
  e.$limberGridView.appendChild(limberGridViewCrossHairGuide);
  e.$limberGridView.appendChild(limberGridViewIOTopHelper);
  e.$limberGridView.appendChild(limberGridViewIOBottomHelper);
  set$pseudoContainerItem(this, pseudoContainerItem);
  set$limberGridViewPseudoItem(this, limberGridViewPseudoItem);
  set$limberGridViewMoveGuide(this, limberGridViewMoveGuide);
  set$limberGridViewHeightAdjustGuide(this, limberGridViewHeightAdjustGuide);
  set$limberGridViewAddCutGuide(this, limberGridViewAddCutGuide);
  set$limberGridViewTouchHoldGuide(this, limberGridViewTouchHoldGuide);
  set$limberGridViewCrossHairGuide(this, limberGridViewCrossHairGuide);
  set$limberGridViewIOTopHelper(this, limberGridViewIOTopHelper);
  set$limberGridViewIOBottomHelper(this, limberGridViewIOBottomHelper);
};
// CONCATENATED MODULE: ./src/store/observer/resizeObserver.js
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
const setIsResizeObserving = function (context, value) {
  context.store.observer.resizeObserver.isResizeObserving = value;
};
const getIsResizeObserving = function (context) {
  return context.store.observer.resizeObserver.isResizeObserving;
};
// CONCATENATED MODULE: ./src/libs/eventHandlerLib/miscellaneous.js
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









const onItemClick = function (event) {
  const callbacks = getCallbacks(this);
  callbacks.onItemClickCallback(event);
};
const instantiateResizeObserver = function () {
  setLimberGridViewBoundingClientRect(this, getAllBoundingClientRectKeys(get$limberGridView(this).getBoundingClientRect()));
  const ResizeObserver = window.ResizeObserver ? window.ResizeObserver : external_commonjs_resize_observer_polyfill_commonjs2_resize_observer_polyfill_amd_resize_observer_polyfill_root_resize_observer_polyfill_default.a;
  this.store.observer.resizeObserver.resizeObserver = new ResizeObserver(getBindedFunctions(this).resizeObserverCallback);
  this.store.observer.resizeObserver.resizeObserver.observe(get$limberGridView(this));
};
const resizeObserverCallback = function () {
  const publicConstants = constants_publicConstants(this);

  if (!getIsResizeObserving(this)) {
    setIsResizeObserving(this, true);
    setTimeout(async () => {
      const prevBoundingClientRect = getLimberGridViewBoundingClientRect(this);
      setLimberGridViewBoundingClientRect(this, getAllBoundingClientRectKeys(get$limberGridView(this).getBoundingClientRect()));

      if (!isMobile(this) && isMobile(this, prevBoundingClientRect)) {
        // switched to desktop view
        setIOTopHelperPos(this, -1);
        setIOBottomHelperPos(this, 1.5);
        setRenderedItems(this, []); // const e = getElements(this);
        // const len = e.$limberGridViewItems.length;
        // for (let i = 0; i < len; i++) {
        // 	if (e.$limberGridViewItems[i]) {
        // 		e.$limberGridViewItems[i].remove();
        // 		e.$limberGridViewItems[i] = undefined;
        // 	}
        // }
      }

      await init(this, true, false);
      render(this);
      setIsResizeObserving(this, false);
    }, publicConstants.WINDOW_RESIZE_WAIT_TIME);
  }
};
const getAllBoundingClientRectKeys = function (rect) {
  return {
    x: rect.x,
    y: rect.y,
    width: rect.width,
    height: rect.height,
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left
  };
};
// CONCATENATED MODULE: ./src/libs/eventHandlerLib/intersectionObserver.js
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









const instantiateIntersectionObserver = function () {
  this.store.observer.intersectionObserver.intersectionObserver = new IntersectionObserver(getBindedFunctions(this).intersectionObserverCallback, {
    root: get$limberGridView(this),
    // rootMargin: "0px",
    threshold: 1.0
  });
  this.store.observer.intersectionObserver.intersectionObserver.observe(get$limberGridViewIOTopHelper(this));
  this.store.observer.intersectionObserver.intersectionObserver.observe(get$limberGridViewIOBottomHelper(this));
};
const intersectionObserverCallback = function (entries, observer) {
  if (entries.length !== 1 || !entries[0].isIntersecting) {
    return;
  }

  const entry = entries[0];

  if (isMobile(this)) {
    const renderedItems = getRenderedItems(this);
    const len = getPositionData(this).length;
    const spd = getSerializedPositionData(this);
    let prepend = false;
    let start;

    if (entry.target.classList.contains("limber-grid-view-io-top-helper")) {
      const prevStart = renderedItems[0];

      if (prevStart - 9 > 0) {
        start = prevStart - 9;
      } else {
        start = 0;
      }

      prepend = true;
    } else {
      const prevEnd = renderedItems[renderedItems.length - 1];

      if (prevEnd - 4 > 0) {
        start = prevEnd - 4;
      } else {
        start = 0;
      }
    }

    const end = start + 14 < len ? start + 14 : len - 1;

    if (end < 0) {
      const um = {};

      for (const item of renderedItems) {
        um[item] = true;
      }

      unmountItems(this, um);
      mountItems(this, []);
      setRenderedItems(this, []);
      return;
    }

    const newRenderedItems = [];
    const newRenderedItemsMap = {};
    const renderedItemsMap = {};
    const toUnmountItems = {};
    const toMountItems = [];
    let iter = 0;

    for (let i = start; i <= end; i++) {
      newRenderedItems.push(i);
      newRenderedItemsMap[i] = true;
      spd[i].renderIndex = iter++;
    }

    for (const item of renderedItems) {
      renderedItemsMap[item] = true;

      if (!newRenderedItemsMap[item]) {
        toUnmountItems[item] = true;
      }
    }

    for (const item of newRenderedItems) {
      if (!renderedItemsMap[item]) {
        toMountItems.push(item);
      }
    }

    setRenderedItems(this, newRenderedItems);

    if (prepend) {
      toMountItems.reverse();
    }

    unmountItems(this, toUnmountItems);
    mountItems(this, toMountItems, prepend);
    const e = variables_elements(this);
    const privateConstants = getPrivateConstants(this);
    const publicConstants = getPublicConstants(this);

    if (prepend && toMountItems.length) {
      e.$limberGridView.scrollTo({
        left: 0,
        top: privateConstants.WIDTH / publicConstants.MOBILE_ASPECT_RATIO * toMountItems.length,
        behavior: "auto"
      });
    }

    return;
  }

  if (entry.target.classList.contains("limber-grid-view-io-top-helper")) {
    setIOBottomHelperPos(this, getIOTopHelperPos(this) + 1.5);
    setIOTopHelperPos(this, getIOTopHelperPos(this) - 1);
  } else {
    setIOTopHelperPos(this, getIOBottomHelperPos(this) - 1.5);
    setIOBottomHelperPos(this, getIOBottomHelperPos(this) + 1);
  }

  adjustItems(this);
};
const adjustItems = function (context) {
  const privateConstants = getPrivateConstants(context);
  const renderSpace = {
    x1: 0,
    x2: privateConstants.WIDTH,
    y1: getIOTopHelperPos(context) * privateConstants.HEIGHT - privateConstants.HEIGHT / 2,
    y2: getIOBottomHelperPos(context) * privateConstants.HEIGHT + privateConstants.HEIGHT / 2
  };
  const renderedItems = getItemsInWorkSpace(context, renderSpace, true);
  const renderedItemsMap = {};

  for (const item of renderedItems) {
    renderedItemsMap[item] = true;
  }

  const prevRenderedItems = getRenderedItems(context);
  const prevRenderedItemsMap = {};

  for (const item of prevRenderedItems) {
    prevRenderedItemsMap[item] = true;
  }

  const toMountItems = {};

  for (const index of renderedItems) {
    if (!prevRenderedItemsMap[index]) {
      toMountItems[index] = true;
    }
  }

  const toUnmountItems = {};

  for (const index of prevRenderedItems) {
    if (!renderedItemsMap[index]) {
      toUnmountItems[index] = true;
    }
  }

  setRenderedItems(context, renderedItems);
  unmountItems(context, toUnmountItems);
  mountItems(context, Object.keys(toMountItems));
  get$limberGridViewIOTopHelper(context).style.transform = `translate(0px, ${getIOTopHelperPos(context) * privateConstants.HEIGHT}px)`;
  get$limberGridViewIOBottomHelper(context).style.transform = `translate(0px, ${getIOBottomHelperPos(context) * privateConstants.HEIGHT}px)`;
};
const onScroll = function (event) {
  clearTimeout(getOnScrolTimeout(this));
  setOnScrolTimeout(this, setTimeout(getBindedFunctions(this).onScrollCallback, 1000));
};
const onScrollCallback = function (event) {
  const privateConstants = getPrivateConstants(this);
  const $limberGridView = get$limberGridView(this);

  if (!isMobile(this)) {
    const y1 = $limberGridView.scrollTop;
    const screen = {
      x1: 0,
      x2: privateConstants.WIDTH,
      y1: y1,
      y2: y1 + privateConstants.HEIGHT
    };
    const bounds = {
      x1: 0,
      x2: privateConstants.WIDTH,
      y1: getIOTopHelperPos(this) * privateConstants.HEIGHT,
      y2: getIOBottomHelperPos(this) * privateConstants.HEIGHT
    };

    if (!doRectsOverlapOrTouch(screen, bounds)) {
      const newBounds = { ...screen
      };
      newBounds.y1 = screen.y1 - privateConstants.HEIGHT * 0.75;
      let top = fixTo(newBounds.y1 / privateConstants.HEIGHT, 1);

      if (top % 1 > 0.66) {
        top = Math.ceil(top);
      } else if (top % 1 < 0.33) {
        top = Math.trunc(top);
      } else {
        top = Math.trunc(top) + 0.5;
      }

      const bottom = top + 2.5;
      setIOTopHelperPos(this, top);
      setIOBottomHelperPos(this, bottom);
      adjustItems(this);
    }
  }
};
// CONCATENATED MODULE: ./src/index.js
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
		itemMouseDownMoveCheck: function 																					// x clicked/touched, y clicked/touched, item, index, event.target, which
		itemMouseDownResizeCheck: function 																				// x clicked/touched, y clicked/touched, item, index, event.target, which
	
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
			cutSpaceComplete: function() {}
			renderPlugin: function (renderData, element) {}
			removePlugin: function(element){}

			onItemClickCallback : function(event){},																// click callback for item
			getLogMessage: function(log){},																					// get log message for error, info, and warnings
		},
		publicConstants: {
			mobileAspectRatio : <value>, 																						// aspect ratio of for mobile devices

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
			demoWaitTime: number
			windowResizeWaitTime: number
			autoScrollDelay: number

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
  undoRedo(this).push(getPositionData(this));

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
  const e = variables_elements(this);
  e.$limberGridView.addEventListener("scroll", getBindedFunctions(this).onScroll);
  setTimeout(async function () {
    await init(this, false, options.autoArrange);
    render(this, true);
  }.bind(this));
}

LimberGridView.prototype.initializeStore = function () {
  this.options = {
    editable: true,
    reRenderOnResize: true,
    enableInteractiveAddAndCut: true,
    enableTouchInteraction: true
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
        $limberGridViewDebugMergedFreeRects: []
      },
      essentials: {
        pseudoContainerId: undefined,
        positionData: [],
        modifiedPositionData: [],
        renderedItems: [],
        ioTopHelperPos: -1,
        ioBottomHelperPos: 1.5,
        gridData: {},
        callbacks: {}
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
        onScrollCallback: onScrollCallback.bind(this)
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
          showMoveDemoTimeOutVariable: undefined
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
          cutSpaceAllowCheckTimeOutVariable: undefined
        }
      },
      status: {},
      trees: {
        rt: new external_commonjs_rtreejs_commonjs2_rtreejs_amd_rtreejs_root_rtreejs_["RTreeIterative"]({
          M: 4 // splitNode: "linear",

        })
      },
      stacks: {
        stack: new external_commonjs_Stack_commonjs2_Stack_amd_Stack_root_Stack_["ArrayStack"]({
          constructReverse: true
        }),
        garbageStack: new external_commonjs_Stack_commonjs2_Stack_amd_Stack_root_Stack_["ArrayStack"]({
          constructReverse: true
        })
      },
      undoRedo: new external_commonjs_undo_redo_commonjs2_undo_redo_amd_undo_redo_root_undo_redo_default.a()
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
        MIN_HEIGHT_AND_WIDTH: 150
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
        MOUSE_DOWN_TIME: 300,
        TOUCH_HOLD_TIME: 300,
        DEMO_WAIT_TIME: 500,
        WINDOW_RESIZE_WAIT_TIME: 1000,
        AUTO_SCROLL_DELAY: 100,
        DESK_INTERACTION_MODE: "CUTSPACE",
        LATCH_MOVED_ITEM: true,
        ANIMATE_MOVED_ITEM: false,
        ANIMATE_TIME: 250,
        // cross hair
        CROSS_HAIR_WIDTH: 500,
        CROSS_HAIR_HEIGHT: 500,
        // Algorithm
        SHRINK_TO_FIT: 10
      },
      messages: {
        latchedMoveDemo1: "Move curser close to an adjacent item over this box to latch next to that item.",
        latchedMoveDemo2: "Move curser over this box to latch on to this item."
      }
    },
    observer: {
      resizeObserver: {
        resizeObserver: undefined,
        isResizeObserving: false
      },
      intersectionObserver: {
        intersectionObserver: undefined
      }
    }
  };
};
/**
 * @method
 * @name LimberGridView#renderItem
 * @description Call this function to forcefully re-render the contents of the item. Internally calls renderContent. Must be called inside resizeComplete
 * @param  {number} index Index of item to force re-render.
 */


LimberGridView.prototype.renderItem = function (index) {
  renderItem(this, index);
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
      height: fixTo(pd[i].height / privateConstants.WIDTH_SCALE_FACTOR)
    };
  }

  return {
    gridData: {
      height: privateConstants.GRID_HEIGHT,
      width: privateConstants.GRID_WIDTH,
      margin: privateConstants.GRID_MARGIN,
      MIN_HEIGHT_AND_WIDTH: privateConstants.MIN_HEIGHT_AND_WIDTH
    },
    positionData: arr
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
      height: privateConstants.DEFINED_MIN_HEIGHT_AND_WIDTH
    };
  }

  addItem(this, item);
};
/**
 * @method
 * @name LimberGridView#removeItem
 * @description Call this function to remove an item with the index.
 * @param  {number} index Index of the item to be removed.
 */


LimberGridView.prototype.removeItem = function (index) {
  if (Number.isInteger(parseInt(index))) {
    removeItem(this, index);
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
  const pd = undoRedo(this).undo();

  if (pd) {
    const rerenderItems = getItemsToRerenderOnUndoRedo(getPositionData(this), pd);
    setPositionData(this, pd);
    resetDemoUIChanges(this);

    for (const item in rerenderItems) {
      this.renderItem(item);
    }
  }
};
/**
 * @method
 * @name LimberGridView#redo
 * @description redo move or drag
 */


LimberGridView.prototype.redo = function () {
  const pd = undoRedo(this).redo();

  if (pd) {
    const rerenderItems = getItemsToRerenderOnUndoRedo(getPositionData(this), pd);
    setPositionData(this, pd);
    resetDemoUIChanges(this);

    for (const item in rerenderItems) {
      this.renderItem(item);
    }
  }
};
/**
 * @method
 * @name LimberGridView#isUndoAvailable
 * @description returns true if undo is possible
 */


LimberGridView.prototype.isUndoAvailable = function () {
  return undoRedo(this).isUndoAvailable();
};
/**
 * @method
 * @name LimberGridView#isRedoAvailable
 * @description returns true if redo is possible
 */


LimberGridView.prototype.isRedoAvailable = function () {
  return undoRedo(this).isRedoAvailable();
};
/**
 * @method
 * @name LimberGridView#setAutoScrollDelay
 * @description set auto scroll delay for resize, move, add, cut in milliseconds
 */


LimberGridView.prototype.setAutoScrollDelay = function (value) {
  if (typeof value === "number") {
    setPublicConstantByName(this, "AUTO_SCROLL_DELAY", value);
  }
};
/**
 * @method
 * @name LimberGridView#setAutoScrollForMouse
 * @description set auto scroll for resize, move, add, cut
 */


LimberGridView.prototype.setAutoScrollForMouse = function (value) {
  if (typeof value === "boolean") {
    setPublicConstantByName(this, "AUTO_SCROLL_FOR_MOUSE", value);
  }
};
/**
 * @method
 * @name LimberGridView#destroy
 * @description free event listeners and all other resources
 */


LimberGridView.prototype.destroy = function (value) {
  unInitializeEvents.call(this);
  const $pseudoContainer = get$pseudoContainer(this);
  const $limberGridViewContainer = get$limberGridViewContainer(this);
  $pseudoContainer.remove();
  $limberGridViewContainer.remove();
};

/* harmony default export */ var src_1 = __webpack_exports__["default"] = (LimberGridView);

/***/ })
/******/ ]);
});