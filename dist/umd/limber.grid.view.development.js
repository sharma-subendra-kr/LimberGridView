/** @license LimberGridView
 *
 * LimberGridView, a powerful JavaScript Libary that gives you movable, resizable(any size) and auto-arranging grids.
 *
 * Copyright © 2018-2020, Subendra Kumar Sharma. All Rights reserved. (jobs.sharma.subendra.kr@gmail.com)
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
		module.exports = factory(require("IntervalTreeJS"), require("ClosestBST"));
	else if(typeof define === 'function' && define.amd)
		define(["IntervalTreeJS", "ClosestBST"], factory);
	else if(typeof exports === 'object')
		exports["LimberGridView"] = factory(require("IntervalTreeJS"), require("ClosestBST"));
	else
		root["LimberGridView"] = factory(root["IntervalTreeJS"], root["ClosestBST"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/index.css
var src = __webpack_require__(2);

// EXTERNAL MODULE: ./src/index.scss
var src_0 = __webpack_require__(3);

// CONCATENATED MODULE: ./src/store/constants/privateConstants.js
/*

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



const adjustHeight = function (context, yMouseOrTouchPosition) {
  const e = variables_elements(context);
  const publicConstants = constants_publicConstants(context);
  const scrollHeight = e.$limberGridView.scrollHeight;

  if (scrollHeight - yMouseOrTouchPosition <= publicConstants.AUTO_SCROLL_POINT) {
    e.$limberGridViewHeightAdjustGuide.style.height = yMouseOrTouchPosition + publicConstants.MOVE_OR_RESIZE_HEIGHT_INCREMENTS + "px";
  }
};
const adjustScroll = function (context, limberGridViewOnVisibleAreaY, limberGridViewHeightVisibleHeight) {
  const e = variables_elements(context);
  const publicConstants = constants_publicConstants(context);
  const privateConstants = constants_privateConstants(context);
  const scrollTop = e.$limberGridView.scrollTop; // var scrollLeft = this.$limberGridView[0].scrollLeft;

  let programScrolled = false;

  if (limberGridViewOnVisibleAreaY > 0) {
    if (limberGridViewHeightVisibleHeight - limberGridViewOnVisibleAreaY < publicConstants.AUTO_SCROLL_POINT) {
      e.$limberGridView.scrollTop = scrollTop + publicConstants.AUTO_SCROLL_DISTANCE;
      programScrolled = true;
    }

    if (limberGridViewOnVisibleAreaY < privateConstants.HEIGHT / 10 && scrollTop !== 0) {
      e.$limberGridView.scrollTop = scrollTop - publicConstants.AUTO_SCROLL_DISTANCE;
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
// CONCATENATED MODULE: ./src/store/variables/essentials.js
/*

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

/* harmony default export */ var essentials = (getEssentialVariables);

// CONCATENATED MODULE: ./src/libs/eventHandlerLib/eventHandlerUtils.js
/*

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


const calculateMousePosOnDesk = function (context, event) {
  const e = variables_elements(context);
  const privateConstants = constants_privateConstants(context);
  const limberGridViewPosition = e.$limberGridView.getBoundingClientRect();

  if (event.clientX >= limberGridViewPosition.left && event.clientX <= limberGridViewPosition.left + limberGridViewPosition.width && event.clientY >= limberGridViewPosition.top && event.clientY <= limberGridViewPosition.top + limberGridViewPosition.height) {
    const scrollTop = e.$limberGridView.scrollTop;
    const scrollLeft = e.$limberGridView.scrollLeft;
    const mouseXOnLimberGridView = event.clientX - limberGridViewPosition.left - privateConstants.PADDING_LEFT + scrollLeft;
    const mouseYOnLimberGridView = event.clientY - limberGridViewPosition.top - privateConstants.PADDING_TOP + scrollTop;

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
const calculateTouchPosOnDesk = function (context, event) {
  const e = variables_elements(context);
  const privateConstants = constants_privateConstants(context);
  const limberGridViewPosition = e.$limberGridView.getBoundingClientRect();
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
  } else {
    // touch NOT inside limberGridViewItem
    return false;
  }
};
// CONCATENATED MODULE: ./src/store/variables/options.js
/*

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





const getUserActionData = (context, event) => {
  const publicConstants = constants_publicConstants(context);
  const options = variables_options(context);
  const pd = getPositionData(context);
  const itemIndex = parseInt(event.currentTarget.attributes["data-index"].value);
  let radius;
  let touchPosOnLimberGridItem;
  let X, Y;

  if (event.which === 1) {
    radius = Math.sqrt(Math.pow(0 - event.offsetX, 2) + Math.pow(0 - event.offsetY, 2));
    X = event.offsetX;
    Y = event.offsetY;
  } else if (event.which === 0) {
    touchPosOnLimberGridItem = calculateTouchPosOnItem(context, event);
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
  }, itemIndex, event.target)) {
    // call developer defined function to check if mousedown for RESIZE is in a valid place
    return {
      type: "resize",
      itemIndex: event.currentTarget.attributes["data-index"].value
    };
  }

  if (X >= resizeUIBox.x && X <= resizeUIBox.x + resizeUIBox.width && Y >= resizeUIBox.y && Y <= resizeUIBox.y + resizeUIBox.height && !options.itemMouseDownResizeCheck) {
    return {
      type: "resize",
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
    e.$limberGridViewItems[i].classList.add("limber-grid-view-item-resizing-state");
  }

  e.$limberGridViewPseudoItem.classList.add("limber-grid-view-pseudo-item-resizing-state");
};
const unloadResizingState = (context, userActionData) => {
  const e = variables_elements(context);
  e.$limberGridViewHeightAdjustGuide.classList.remove("limber-grid-view-height-adjust-guide-active");
  e.$limberGridViewPseudoItem.classList.remove("limber-grid-view-pseudo-item-active");
  e.$limberGridViewPseudoItem.style.transform = `translate(0px, 0px)`;
  e.$body.classList.remove("limber-grid-view-body-tag-state-editing");
  const itemsLen = e.$limberGridViewItems.length;

  for (let i = 0; i < itemsLen; i++) {
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
  e.$limberGridViewItems[userActionData.itemIndex].classList.add("limber-grid-view-item-demo");
  e.$pseudoContainerItem.classList.add("limber-grid-view-pseudo-container-item-active");
  e.$pseudoContainerItem.style.width = item.width + "px";
  e.$pseudoContainerItem.style.height = item.height + "px";

  if (event.which === 1) {
    e.$pseudoContainerItem.style.transform = `translate(${event.pageX}px, ${event.pageY}px)`;
  } else if (event.which === 0) {
    e.$pseudoContainerItem.style.transform = `translate(${event.touches[0].pageX}px, ${event.touches[0].pageY}px)`;
  }

  e.$body.classList.add("limber-grid-view-body-tag-state-editing");
};
const unloadMoveState = (context, userActionData) => {
  const e = variables_elements(context);
  e.$limberGridViewHeightAdjustGuide.classList.remove("limber-grid-view-height-adjust-guide-active");
  e.$limberGridViewItems[userActionData.itemIndex].classList.remove("limber-grid-view-item-demo");
  e.$pseudoContainerItem.classList.remove("limber-grid-view-pseudo-container-item-active");
  e.$pseudoContainerItem.style.width = "0px";
  e.$pseudoContainerItem.style.height = "0px";
  e.$pseudoContainerItem.style.transform = `translate(0px, 0px)`;
  e.$body.classList.remove("limber-grid-view-body-tag-state-editing");
};
const loadOnMoveState = (context, userActionData, event, type) => {
  const e = variables_elements(context);

  if (type === "move") {
    e.$limberGridViewMoveGuide.classList.remove("limber-grid-view-move-guide-active");
    e.$pseudoContainerItem.classList.remove("limber-grid-view-pseudo-container-item-move-allow", "limber-grid-view-pseudo-container-item-move-disallow");

    if (event.which === 1) {
      e.$pseudoContainerItem.style.transform = `translate(${event.pageX}px, ${event.pageY}px)`;
    } else if (event.which === 0) {
      e.$pseudoContainerItem.style.transform = `translate(${event.touches[0].pageX}px, ${event.touches[0].pageY}px)`;
    }
  } else if (type === "resize") {
    e.$limberGridViewPseudoItem.classList.remove("limber-grid-view-pseudo-item-resize-allow", "limber-grid-view-pseudo-item-resize-disallow");
  }
};
const unloadOnMoveState = context => {
  const e = variables_elements(context);
  e.$limberGridViewMoveGuide.classList.remove("limber-grid-view-move-guide-active");
};
// CONCATENATED MODULE: ./src/libs/rect/rectUtils.js
/*

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
const isPointInsideRect = (rect, point) => {
  const rectCo = getCoordinates(rect);

  try {
    if (point.x > rectCo.tl.x && point.x < rectCo.tr.x && point.y > rectCo.tl.y && point.y < rectCo.bl.y) {
      return true;
    }

    return false;
  } catch (e) {
    return null;
  }
};
const doesPointTouchRect = (rect, point) => {
  const rectCo = getCoordinates(rect);

  try {
    if (point.x >= rectCo.tl.x && point.x <= rectCo.tr.x && point.y >= rectCo.tl.y && point.y <= rectCo.bl.y && !isPointInsideRect(rect, point)) {
      return true;
    }

    return false;
  } catch (e) {
    return null;
  }
};
const doRectsOverlap = (rectA, rectB) => {
  try {
    if (isNaN(rectA.x) || isNaN(rectA.y) || isNaN(rectA.width) || isNaN(rectA.height) || isNaN(rectB.x) || isNaN(rectB.y) || isNaN(rectB.width) || isNaN(rectB.height)) {
      return null;
    }

    const tlA = {
      x: rectA.x,
      y: rectA.y
    };
    const brA = {
      x: rectA.x + rectA.width,
      y: rectA.y + rectA.height
    };
    const tlB = {
      x: rectB.x,
      y: rectB.y
    };
    const brB = {
      x: rectB.x + rectB.width,
      y: rectB.y + rectB.height
    };

    if (tlA.x >= brB.x || tlB.x >= brA.x) {
      return false;
    }

    if (tlA.y >= brB.y || tlB.y >= brA.y) {
      return false;
    }

    return true;
  } catch (e) {
    return null;
  }
};
const doRectsOnlyTouch = (rectA, rectB) => {
  try {
    if (isNaN(rectA.x) || isNaN(rectA.y) || isNaN(rectA.width) || isNaN(rectA.height) || isNaN(rectB.x) || isNaN(rectB.y) || isNaN(rectB.width) || isNaN(rectB.height)) {
      return null;
    }

    const tlA = {
      x: rectA.x,
      y: rectA.y
    };
    const brA = {
      x: rectA.x + rectA.width,
      y: rectA.y + rectA.height
    };
    const tlB = {
      x: rectB.x,
      y: rectB.y
    };
    const brB = {
      x: rectB.x + rectB.width,
      y: rectB.y + rectB.height
    };

    if (tlA.x > brB.x || tlB.x > brA.x) {
      return false;
    }

    if (tlA.y > brB.y || tlB.y > brA.y) {
      return false;
    }

    if (doRectsOverlap(rectA, rectB) === false) return true;
    return false;
  } catch (e) {
    return null;
  }
};
const subtractRect = (rectA, rectB, oCoForm) => {
  // gives the non overlapping free spaces in rectA
  if (!doRectsOverlap(rectA, rectB)) {
    return null;
  }

  const rectACo = getCoordinates(rectA);
  const rectBCo = getCoordinates(rectB);
  /*
  	____|_______________|___
  	|	|				|	|
  ____|___|_______________|___|____
  	|	|				|	|
  	|	|				|	|
  	|	|				|	|
  	|	|				|	|
  ____|___|_______________|___|___
  	|	|				|	|
  	|___|_______________|___|
  		|				|
  	
  */

  const subRects = {
    subRectT: {
      tl: rectACo.tl,
      tr: rectACo.tr,
      br: {
        x: rectACo.tr.x,
        y: rectBCo.tr.y
      },
      bl: {
        x: rectACo.tl.x,
        y: rectBCo.tl.y
      }
    },
    subRectR: {
      tl: {
        x: rectBCo.tr.x,
        y: rectACo.tr.y
      },
      tr: rectACo.tr,
      br: rectACo.br,
      bl: {
        x: rectBCo.br.x,
        y: rectACo.br.y
      }
    },
    subRectB: {
      tl: {
        x: rectACo.bl.x,
        y: rectBCo.bl.y
      },
      tr: {
        x: rectACo.br.x,
        y: rectBCo.br.y
      },
      br: rectACo.br,
      bl: rectACo.bl
    },
    subRectL: {
      tl: rectACo.tl,
      tr: {
        x: rectBCo.tl.x,
        y: rectACo.tl.y
      },
      br: {
        x: rectBCo.bl.x,
        y: rectACo.bl.y
      },
      bl: rectACo.bl
    }
  };
  const keys = Object.keys(subRects);

  for (let i = 0; i < keys.length; i++) {
    if (!isValidRectCoForm(subRects[keys[i]])) {
      delete subRects[keys[i]];
    }
  }

  let tl, tm, tr, rm, br, bm, bl, lm;
  let tlNtm, tmNtr, trNrm, rmNbr, brNbm, bmNbl, blNlm, lmNtl;

  if (subRects.subRectT && subRects.subRectR) {
    tlNtm = {
      tl: subRects.subRectT.tl,
      tr: subRects.subRectR.tl,
      br: {
        x: subRects.subRectR.tl.x,
        y: subRects.subRectT.bl.y
      },
      bl: subRects.subRectT.bl
    };
    tr = {
      tl: subRects.subRectR.tl,
      tr: subRects.subRectR.tr,
      br: subRects.subRectT.br,
      bl: {
        x: subRects.subRectR.tl.x,
        y: subRects.subRectT.bl.y
      }
    };
    rmNbr = {
      tl: {
        x: subRects.subRectR.tl.x,
        y: subRects.subRectT.bl.y
      },
      tr: subRects.subRectT.br,
      br: subRects.subRectR.br,
      bl: subRects.subRectR.bl
    };
  }

  if (subRects.subRectR && subRects.subRectB) {
    trNrm = {
      tl: subRects.subRectR.tl,
      tr: subRects.subRectR.tr,
      br: subRects.subRectB.tr,
      bl: {
        x: subRects.subRectR.bl.x,
        y: subRects.subRectB.tl.y
      }
    };
    br = {
      tl: {
        x: subRects.subRectR.bl.x,
        y: subRects.subRectB.tl.y
      },
      tr: subRects.subRectB.tr,
      br: subRects.subRectB.br,
      bl: subRects.subRectR.bl
    };
    bmNbl = {
      tl: subRects.subRectB.tl,
      tr: {
        x: subRects.subRectR.bl.x,
        y: subRects.subRectB.tl.y
      },
      br: subRects.subRectR.bl,
      bl: subRects.subRectB.bl
    };
  }

  if (subRects.subRectB && subRects.subRectL) {
    lmNtl = {
      tl: subRects.subRectL.tl,
      tr: subRects.subRectL.tr,
      br: {
        x: subRects.subRectL.tr.x,
        y: subRects.subRectB.tr.y
      },
      bl: subRects.subRectB.tl
    };
    bl = {
      tl: subRects.subRectB.tl,
      tr: {
        x: subRects.subRectL.tr.x,
        y: subRects.subRectB.tr.y
      },
      br: subRects.subRectL.br,
      bl: subRects.subRectB.bl
    };
    brNbm = {
      tl: {
        x: subRects.subRectL.tr.x,
        y: subRects.subRectB.tr.y
      },
      tr: subRects.subRectB.tr,
      br: subRects.subRectB.br,
      bl: subRects.subRectL.br
    };
  }

  if (subRects.subRectL && subRects.subRectT) {
    blNlm = {
      tl: subRects.subRectT.bl,
      tr: {
        x: subRects.subRectL.tr.x,
        y: subRects.subRectT.bl.y
      },
      br: subRects.subRectL.br,
      bl: subRects.subRectL.bl
    };
    tl = {
      tl: subRects.subRectT.tl,
      tr: subRects.subRectL.tr,
      br: {
        x: subRects.subRectL.tr.x,
        y: subRects.subRectT.bl.y
      },
      bl: subRects.subRectT.bl
    };
    tmNtr = {
      tl: subRects.subRectL.tr,
      tr: subRects.subRectT.tr,
      br: subRects.subRectT.br,
      bl: {
        x: subRects.subRectL.tr.x,
        y: subRects.subRectT.bl.y
      }
    };
  }

  tm = horizontalSubtract(tlNtm, tl) || horizontalSubtract(tmNtr, tr) || tlNtm || tmNtr;
  rm = verticalSubtract(trNrm, tr) || verticalSubtract(rmNbr, br) || trNrm || rmNbr;
  bm = horizontalSubtract(brNbm, br) || horizontalSubtract(bmNbl, bl) || brNbm || bmNbl;
  lm = verticalSubtract(blNlm, bl) || verticalSubtract(lmNtl, tl) || blNlm || lmNtl;
  let rects;

  if (oCoForm) {
    rects = [tl, tm, tr, rm, br, bm, bl, lm];
  } else {
    rects = [getRectObjectFromCo(tl), getRectObjectFromCo(tm), getRectObjectFromCo(tr), getRectObjectFromCo(rm), getRectObjectFromCo(br), getRectObjectFromCo(bm), getRectObjectFromCo(bl), getRectObjectFromCo(lm)];
  }

  rects = rects.filter(o => o);

  if (rects.length === 0) {
    rects = Object.keys(subRects).map(o => {
      if (oCoForm) {
        return subRects[o];
      } else {
        return getRectObjectFromCo(subRects[o]);
      }
    });
  }

  return rects;
};

const horizontalSubtract = (rectA, rectB) => {
  // rectA and rectB needs to be in Coordinate form
  if (!rectA && !rectB) return null;
  if (!doRectsOverlap(getRectObjectFromCo(rectA), getRectObjectFromCo(rectB))) return null;
  /*
  	Case I
  	____________________
  	| ____ 				|
  	||____|				|
  	|___________________|
  
  	Case II
  	____________________
  	| 	 		  _____	|
  	|			  |____||
  	|___________________|
  */

  let result = null;

  if (rectA.tl.x === rectB.tl.x || Math.abs(rectA.tl.x - rectB.tl.x) < Math.abs(rectA.tr.x - rectB.tr.x)) {
    // Case I
    result = {
      tl: rectB.tr,
      tr: rectA.tr,
      br: rectA.br,
      bl: rectB.br
    };
  } else if (rectA.tr === rectB.tr || Math.abs(rectB.tl.x - rectA.tl.x) > Math.abs(rectB.tr.x - rectA.tr.x)) {
    // Case II
    result = {
      tl: rectA.tl,
      tr: rectB.tl,
      br: rectB.bl,
      bl: rectA.bl
    };
  }

  return result;
};

const verticalSubtract = (rectA, rectB) => {
  // rectA and rectB needs to be in Coordinate form
  if (!rectA && !rectB) return null;
  if (!doRectsOverlap(getRectObjectFromCo(rectA), getRectObjectFromCo(rectB))) return null;
  /*
  	Case I 				Case II
  	_______ 			________
  	| ____ | 			|		|
  	| |   || 			|		|
  	| |___|| 			|		|
  	|  	   | 			|  ____ |
  	|      | 			|  |   ||	
  	|      | 			|  |___||	
  	|______| 			|_______|
  */

  let result = null;

  if (rectA.tl.y === rectB.tl.y || Math.abs(rectA.tl.y - rectB.tl.y) < Math.abs(rectA.bl.y - rectB.bl.y)) {
    // Case I
    result = {
      tl: rectB.bl,
      tr: rectB.br,
      br: rectA.br,
      bl: rectA.bl
    };
  } else if (rectA.bl.y === rectB.bl.y || Math.abs(rectB.tl.y - rectA.tl.y) > Math.abs(rectB.bl.y - rectA.bl.y)) {
    // Case II
    result = {
      tl: rectA.tl,
      tr: rectA.tr,
      br: rectB.tr,
      bl: rectB.tl
    };
  }

  return result;
};

const isValidRectCoForm = function (rect) {
  try {
    let top, right, bottom, left;
    top = rect.tr.x - rect.tl.x;
    right = rect.br.y - rect.tr.y;
    bottom = rect.br.x - rect.bl.x;
    left = rect.bl.y - rect.tl.y;

    if (top <= 0 || right <= 0 || bottom <= 0 || left <= 0) {
      return false;
    }

    return true;
  } catch (e) {
    return null;
  }
};
const getCoordinates = function (rect) {
  const tl = {
    x: rect.x,
    y: rect.y
  };
  const tr = {
    x: rect.x + rect.width,
    y: rect.y
  };
  const br = {
    x: rect.x + rect.width,
    y: rect.y + rect.height
  };
  const bl = {
    x: rect.x,
    y: rect.y + rect.height
  };
  return {
    tl,
    tr,
    br,
    bl
  };
};
const getRectObjectFromCo = function (rect) {
  if (!isValidRectCoForm(rect)) return null;
  return {
    x: rect.tl.x,
    y: rect.tl.y,
    width: rect.tr.x - rect.tl.x,
    height: rect.bl.y - rect.tl.y
  };
};
const areRectsAdjacent = (rectA, rectB) => {
  const rectACo = getCoordinates(rectA);
  const rectBCo = getCoordinates(rectB); // if (!doRectsOnlyTouch(rectA, rectB)) {
  // 	return false;
  // }

  if (!(Math.abs(rectACo.tl.x - rectBCo.tr.x) < 1 || Math.abs(rectBCo.tl.x - rectACo.tr.x) < 1 || Math.abs(rectACo.tl.y - rectBCo.bl.y) < 1 || Math.abs(rectBCo.tl.y - rectACo.bl.y) < 1)) {
    return false;
  } // below filters point of intersection touch


  if (rectACo.tl.y >= rectBCo.tl.y && rectACo.tl.y < rectBCo.bl.y || rectBCo.tl.y >= rectACo.tl.y && rectBCo.tl.y < rectACo.bl.y || rectACo.tl.x >= rectBCo.tl.x && rectACo.tl.x < rectBCo.tr.x || rectBCo.tl.x >= rectACo.tl.x && rectBCo.tl.x < rectACo.tr.x || //
  rectACo.bl.y <= rectBCo.bl.y && rectACo.bl.y > rectBCo.tl.y || rectBCo.bl.y <= rectACo.bl.y && rectBCo.bl.y > rectACo.tl.y || rectACo.tr.x <= rectBCo.tr.x && rectACo.tr.x > rectBCo.tl.x || rectBCo.tr.x <= rectACo.tr.x && rectBCo.tr.x > rectACo.tl.x) {
    return true;
  } else {
    return false;
  }
};
const mergeRects = (rectA, rectB, oCoForm) => {
  // if (doRectsOverlap(rectA, rectB)) {
  // 	return false;
  // }
  const rectACo = getCoordinates(rectA);
  const rectBCo = getCoordinates(rectB);
  let result;

  const merge = (rectACo, rectBCo) => {
    let res; // check tl

    if (rectACo.tl.x >= rectBCo.bl.x && rectACo.tl.x < rectBCo.br.x && rectACo.tl.y >= rectBCo.bl.y) {
      let x = rectACo.tr.x < rectBCo.tr.x ? rectACo.tr.x : rectBCo.tr.x;
      res = {
        tl: {
          x: rectACo.tl.x,
          y: rectBCo.tl.y
        },
        tr: {
          x: x,
          y: rectBCo.tl.y
        },
        br: {
          x: x,
          y: rectACo.bl.y
        },
        bl: {
          x: rectACo.bl.x,
          y: rectACo.bl.y
        }
      };
    }

    if (rectACo.tl.y >= rectBCo.tr.y && rectACo.tl.y < rectBCo.br.y && rectACo.tl.x >= rectBCo.tr.x) {
      let y = rectACo.br.y < rectBCo.br.y ? rectACo.br.y : rectBCo.br.y;
      res = {
        tl: {
          x: rectBCo.tl.x,
          y: rectACo.tl.y
        },
        tr: {
          x: rectACo.tr.x,
          y: rectACo.tr.y
        },
        br: {
          x: rectACo.br.x,
          y: y
        },
        bl: {
          x: rectBCo.bl.x,
          y: y
        }
      };
    } // check tr


    if (rectACo.tr.x <= rectBCo.br.x && rectACo.tr.x > rectBCo.bl.x && rectACo.tr.y >= rectBCo.bl.y) {
      let x = rectACo.tl.x > rectBCo.tl.x ? rectACo.tl.x : rectBCo.tl.x;
      res = {
        tl: {
          x: x,
          y: rectBCo.tl.y
        },
        tr: {
          x: rectACo.tr.x,
          y: rectBCo.tr.y
        },
        br: {
          x: rectACo.br.x,
          y: rectACo.br.y
        },
        bl: {
          x: x,
          y: rectACo.bl.y
        }
      };
    }

    if (rectACo.tr.y >= rectBCo.tl.y && rectACo.tr.y < rectBCo.bl.y && rectACo.tr.x <= rectBCo.tl.x) {
      let y = rectACo.bl.y < rectBCo.bl.y ? rectACo.bl.y : rectBCo.bl.y;
      res = {
        tl: {
          x: rectACo.tl.x,
          y: rectACo.tl.y
        },
        tr: {
          x: rectBCo.tr.x,
          y: rectACo.tl.y
        },
        br: {
          x: rectBCo.br.x,
          y: y
        },
        bl: {
          x: rectACo.bl.x,
          y: y
        }
      };
    } // check br


    if (rectACo.br.x <= rectBCo.tr.x && rectACo.br.x > rectBCo.tl.x && rectACo.br.y <= rectBCo.tl.y) {
      let x = rectACo.tl.x > rectBCo.tl.x ? rectACo.tl.x : rectBCo.tl.x;
      res = {
        tl: {
          x: x,
          y: rectACo.tl.y
        },
        tr: {
          x: rectACo.tr.x,
          y: rectACo.tr.y
        },
        br: {
          x: rectACo.tr.x,
          y: rectBCo.br.y
        },
        bl: {
          x: x,
          y: rectBCo.bl.y
        }
      };
    }

    if (rectACo.br.y <= rectBCo.bl.y && rectACo.br.y > rectBCo.tl.y && rectACo.br.x <= rectBCo.tl.x) {
      let y = rectACo.tl.y > rectBCo.tl.y ? rectACo.tl.y : rectBCo.tl.y;
      res = {
        tl: {
          x: rectACo.tl.x,
          y: y
        },
        tr: {
          x: rectBCo.tr.x,
          y: y
        },
        br: {
          x: rectBCo.br.x,
          y: rectACo.br.y
        },
        bl: {
          x: rectACo.bl.x,
          y: rectACo.bl.y
        }
      };
    } // check bl


    if (rectACo.bl.x >= rectBCo.tl.x && rectACo.bl.x < rectBCo.tr.x && rectACo.bl.y <= rectBCo.tl.y) {
      let x = rectACo.tr.x < rectBCo.tr.x ? rectACo.tr.x : rectBCo.tr.x;
      res = {
        tl: {
          x: rectACo.tl.x,
          y: rectACo.tl.y
        },
        tr: {
          x: x,
          y: rectACo.tr.y
        },
        br: {
          x: x,
          y: rectBCo.br.y
        },
        bl: {
          x: rectACo.bl.x,
          y: rectBCo.bl.y
        }
      };
    }

    if (rectACo.bl.y <= rectBCo.br.y && rectACo.bl.y > rectBCo.tr.y && rectACo.bl.x >= rectBCo.tr.x) {
      let y = rectACo.tl.y > rectBCo.tl.y ? rectACo.tl.y : rectBCo.tl.y;
      res = {
        tl: {
          x: rectBCo.tl.x,
          y: y
        },
        tr: {
          x: rectACo.tr.x,
          y: y
        },
        br: {
          x: rectACo.br.x,
          y: rectACo.br.y
        },
        bl: {
          x: rectBCo.bl.x,
          y: rectACo.bl.y
        }
      };
    }

    return res;
  };

  const mergeOverlapping = () => {
    const diff = subtractRect(rectA, rectB, true);
    const arr = new Array((diff === null || diff === void 0 ? void 0 : diff.length) || 0);
    let m;
    let count = 0;
    const len = arr.length; // for (const d of diff) {

    for (let i = 0; i < len; i++) {
      m = merge(diff[i], rectBCo);

      if (m && !isRectInside(rectA, getRectObjectFromCo(m))) {
        arr[count++] = m;
      }
    }

    const res = new Array(count);

    for (let i = 0; i < count; i++) {
      res[i] = arr[i];
    }

    return res.length ? res : null;
  };

  result = merge(rectACo, rectBCo);
  if (!result) result = merge(rectBCo, rectACo);
  if (result) result = [result];

  if (!result && !isRectInside(rectA, rectB) && !isRectInside(rectB, rectA)) {
    result = mergeOverlapping();
  }

  if (result) {
    if (oCoForm) {
      return result;
    } else {
      return result.map(o => getRectObjectFromCo(o));
    }
  }

  return false;
};
const isRectInside = (rectA, rectB) => {
  // is rectB inside rectA
  const rectACo = getCoordinates(rectA);
  const rectBCo = getCoordinates(rectB);

  if (rectACo.tl.x <= rectBCo.tl.x && rectACo.tr.x >= rectBCo.tr.x && rectACo.tl.y <= rectBCo.tl.y && rectACo.bl.y >= rectBCo.bl.y) {
    return true;
  }

  return false;
};
const areRectsOnSameYAxisExPath = (rectA, rectB) => {
  var _rectA$tl, _rectA$tr, _rectB$tl, _rectA$tr2;

  // ExPath: Exclusive Path (in Exclusive and Inclusive)
  if (!((rectA === null || rectA === void 0 ? void 0 : (_rectA$tl = rectA.tl) === null || _rectA$tl === void 0 ? void 0 : _rectA$tl.x) && (rectA === null || rectA === void 0 ? void 0 : (_rectA$tr = rectA.tr) === null || _rectA$tr === void 0 ? void 0 : _rectA$tr.x) && (rectB === null || rectB === void 0 ? void 0 : (_rectB$tl = rectB.tl) === null || _rectB$tl === void 0 ? void 0 : _rectB$tl.x) && (rectA === null || rectA === void 0 ? void 0 : (_rectA$tr2 = rectA.tr) === null || _rectA$tr2 === void 0 ? void 0 : _rectA$tr2.x))) {
    return null;
  }

  if (rectA.tl.x >= rectB.tr.x || rectB.tl.x >= rectA.tr.x) {
    return false;
  }

  return true;
};
const areRectsIdentical = (rectA, rectB) => {
  if (rectA.tl.x === rectB.tl.x && rectA.tl.y === rectB.tl.y && rectA.tr.x === rectB.tr.x && rectA.tr.y === rectB.tr.y && rectA.br.x === rectB.br.x && rectA.br.y === rectB.br.y && rectA.bl.x === rectB.bl.x && rectA.bl.y === rectB.bl.y) {
    return true;
  }

  return false;
};
// CONCATENATED MODULE: ./src/libs/interaction/itemInteractionUtils.js
/*

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




const getResizeAffectedItems = (context, item, index) => {
  const pd = getPositionData(context);
  const mpd = getModifiedPositionData(context);
  const privateConstants = constants_privateConstants(context);
  const len = pd.length;
  const affectedArr = new Array(len);
  let count = 0;
  const _item = { ...item
  };
  _item.x -= privateConstants.MARGIN;
  _item.y -= privateConstants.MARGIN;
  _item.width += privateConstants.MARGIN;
  _item.height += privateConstants.MARGIN;
  const temp = {
    x: 0,
    y: 0,
    height: 0,
    width: 0
  };

  for (let i = 0; i < len; i++) {
    temp.x = pd[i].x - privateConstants.MARGIN;
    temp.y = pd[i].y - privateConstants.MARGIN;
    temp.width = pd[i].width + privateConstants.MARGIN;
    temp.height = pd[i].height + privateConstants.MARGIN;

    if ((doRectsOverlap(temp, _item) || doRectsOnlyTouch(temp, _item)) && i !== index) {
      affectedArr[count++] = i;
      mpd[i].x = undefined;
      mpd[i].y = undefined;
    }
  }

  const result = new Array(count + 1);

  for (let i = 0; i < count; i++) {
    result[i] = affectedArr[i];
  }

  result[count] = index;
  return result;
};
const getMoveAffectedItems = (context, item, index) => {
  const pd = getPositionData(context);
  const mpd = getModifiedPositionData(context);
  const privateConstants = constants_privateConstants(context);
  const len = pd.length;
  const affectedArr = new Array(len);
  let count = 0;
  const _item = { ...item
  };
  _item.x -= privateConstants.MARGIN;
  _item.y -= privateConstants.MARGIN;
  _item.width += privateConstants.MARGIN;
  _item.height += privateConstants.MARGIN;
  const temp = {
    x: 0,
    y: 0,
    height: 0,
    width: 0
  };

  for (let i = 0; i < len; i++) {
    temp.x = pd[i].x - privateConstants.MARGIN;
    temp.y = pd[i].y - privateConstants.MARGIN;
    temp.width = pd[i].width + privateConstants.MARGIN;
    temp.height = pd[i].height + privateConstants.MARGIN;

    if (doRectsOverlap(temp, _item) || doRectsOnlyTouch(temp, _item)) {
      if (i !== index) {
        affectedArr[count++] = i;
        mpd[i].x = undefined;
        mpd[i].y = undefined;
      }
    }
  }

  const result = new Array(count + 1);

  for (let i = 0; i < count; i++) {
    result[i] = affectedArr[i];
  }

  result[count] = index;
  return result;
};
const resizeItemInitialChecks = (context, index, width, height) => {
  const pd = getPositionData(context);
  const privateConstants = constants_privateConstants(context);

  if (index < 0 || index >= pd.length) {
    // invalid index
    throw "Index out of bounds.";
  }

  if (typeof width !== "number" || typeof height !== "number") {
    throw "Width or Height is not a number.";
  }

  if (pd[index].x + width + privateConstants.MARGIN > privateConstants.WIDTH) {
    // falls outside
    throw "Right edges falls outside the grid area.";
  }

  if (width < privateConstants.DEFINED_MIN_HEIGHT_AND_WIDTH || height < privateConstants.DEFINED_MIN_HEIGHT_AND_WIDTH) {
    // very small. TO DO: let the developers decide the smallest item size but can't be less than 150
    throw `Width or height less than min height or width ${privateConstants.DEFINED_MIN_HEIGHT_AND_WIDTH}.`;
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
const resetDemoUIChanges = context => {
  const pd = getPositionData(context);
  const e = variables_elements(context);
  const len = pd.length;

  for (var i = 0; i < len; i++) {
    e.$limberGridViewItems[i].style.transform = "translate(" + pd[i].x + "px, " + pd[i].y + "px)";
    e.$limberGridViewItems[i].classList.remove("limberGridViewItemDemo");
  }
};
const movePointAdjust = (context, toX, toY) => {
  const pd = getPositionData(context);
  const privateConstants = constants_privateConstants(context);
  const len = pd.length;
  const temp = {
    x: 0,
    y: 0,
    height: 0,
    width: 0
  };
  const pt = {
    x: toX,
    y: toY
  };
  let inside;

  for (let i = 0; i < len; i++) {
    temp.x = pd[i].x - privateConstants.MARGIN;
    temp.y = pd[i].y - privateConstants.MARGIN;
    temp.width = pd[i].width + privateConstants.MARGIN * 2;
    temp.height = pd[i].height + privateConstants.MARGIN * 2;

    if (isPointInsideRect(temp, pt) || doesPointTouchRect(temp, pt)) {
      inside = i;
      break;
    }
  }

  if (inside !== undefined) {
    toX = pd[inside].x;
    toY = pd[inside].y;
  }

  return {
    toX,
    toY,
    overlappedItemIndex: inside
  };
};
// EXTERNAL MODULE: external {"commonjs":"IntervalTreeJS","commonjs2":"IntervalTreeJS","amd":"IntervalTreeJS","root":"IntervalTreeJS"}
var external_commonjs_IntervalTreeJS_commonjs2_IntervalTreeJS_amd_IntervalTreeJS_root_IntervalTreeJS_ = __webpack_require__(0);

// EXTERNAL MODULE: external {"commonjs":"ClosestBST","commonjs2":"ClosestBST","amd":"ClosestBST","root":"ClosestBST"}
var external_commonjs_ClosestBST_commonjs2_ClosestBST_amd_ClosestBST_root_ClosestBST_ = __webpack_require__(1);

// CONCATENATED MODULE: ./src/libs/utils/utils.js
/*

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
const emptyObject = function (obj) {
  const keys = Object.keys(obj);
  const length = keys.length;

  for (let i = 0; i < length; i++) {
    delete obj[keys[i]];
  }
};
const isMobile = function (context) {
  const isMobileFunction = context.options.isMobileCheck;

  if (isMobileFunction) {
    return isMobileFunction();
  }

  return window.matchMedia("only screen and (max-width: 979px) and (min-width : 1px)").matches;
};
const fixTo = (num, to = 6) => {
  return Math.trunc(num * Math.pow(10, to)) / Math.pow(10, to);
};
const filter = arr => {
  const len = arr.length;
  const temp = new Array(len);
  let count = 0;

  for (let i = 0; i < len; i++) {
    if (arr[i] !== null && arr[i] !== undefined) {
      temp[count++] = arr[i];
    }
  }

  const res = new Array(count);

  for (let i = 0; i < count; i++) {
    res[i] = temp[i];
  }

  return res;
};
const getRandomString = (len = 22) => {
  const alpNum = "0123456789abcdefghijklmnopqrstuvwxyz";
  const arr = new Array(len);

  for (let i = 0; i < len; i++) {
    arr[i] = alpNum[Math.floor(Math.random() * 36)];
  }

  return arr.join("");
};
const getItemDimenWithMargin = (MARGIN, item) => {
  return {
    x: item.x - MARGIN,
    y: item.y - MARGIN,
    width: item.width + MARGIN * 2,
    height: item.height + MARGIN * 2
  };
};
// CONCATENATED MODULE: ./src/libs/arrange/arrangeUtils.js
/*

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






const getMinMaxXY = (context, affectedItems, resizedRightX, resizedBottomY, toY, movedBottomY) => {
  const pd = getPositionData(context);
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

    if (pd[affectedItems[i]].y + pd[affectedItems[i]].height > maxY) {
      maxY = pd[affectedItems[i]].y + pd[affectedItems[i]].height;
    }

    if (pd[affectedItems[i]].x < minX) {
      minX = pd[affectedItems[i]].x;
    }

    if (pd[affectedItems[i]].x + pd[affectedItems[i]].width > maxX) {
      maxX = pd[affectedItems[i]].x + pd[affectedItems[i]].width;
    }
  }

  if (resizedBottomY > maxY) maxY = resizedBottomY;
  if (resizedRightX > maxX) maxX = resizedRightX;
  if (toY < minY) minY = toY;
  if (movedBottomY > maxY) maxY = movedBottomY;
  return {
    minX: minX - privateConstants.MARGIN,
    maxX: maxX + privateConstants.MARGIN,
    minY: minY - privateConstants.MARGIN,
    maxY: maxY + privateConstants.MARGIN
  };
};
const filterToArrange = (context, toArrangeItems, arranged) => {
  const len = toArrangeItems.length;
  const result = new Array(len);

  for (let i = 0; i < len; i++) {
    if (!arranged[toArrangeItems[i]]) {
      result[i] = toArrangeItems[i];
    }
  }

  return filter(result);
};
const getBottomMax = (context, minX, maxX) => {
  const pd = getPositionData(context);
  const mpd = getModifiedPositionData(context);
  const privateConstants = constants_privateConstants(context);
  let max = 0;
  let item, mItem;
  const len = pd.length;

  for (let i = 0; i < len; i++) {
    item = arrangeUtils_getItemDimenWithMargin(privateConstants.MARGIN, pd[i]);
    mItem = arrangeUtils_getItemDimenWithMargin(privateConstants.MARGIN, mpd[i]);

    if (pd[i].y + pd[i].height > max && item.x < maxX && item.x + item.width > minX) {
      max = pd[i].y + pd[i].height;
    }

    if (mpd[i].y + mpd[i].height > max && mItem.x < maxX && mItem.x + mItem.width > minX) {
      max = mpd[i].y + mpd[i].height;
    }
  }

  return max;
};
const getTopBottomWS = (context, workSpaceRectCo, minX, maxX) => {
  let topWorkSpaceCo, bottomWorkSpaceCo;

  if (workSpaceRectCo.tl.y > 0) {
    topWorkSpaceCo = {
      tl: {
        x: minX,
        y: 0
      },
      tr: {
        x: maxX,
        y: 0
      },
      br: {
        x: maxX,
        y: workSpaceRectCo.tr.y
      },
      bl: {
        x: minX,
        y: workSpaceRectCo.tl.y
      }
    };
  }

  const bottomMax = getBottomMax(context, minX, maxX);

  if (bottomMax > workSpaceRectCo.bl.y) {
    bottomWorkSpaceCo = {
      tl: {
        x: minX,
        y: workSpaceRectCo.bl.y
      },
      tr: {
        x: maxX,
        y: workSpaceRectCo.bl.y
      },
      br: {
        x: maxX,
        y: bottomMax
      },
      bl: {
        x: minX,
        y: bottomMax
      }
    };
  }

  return {
    topWorkSpaceCo,
    bottomWorkSpaceCo
  };
};
const getItemsInWorkSpace = (context, workSpaceRect, getIndices = false) => {
  const mpd = getModifiedPositionData(context);
  const privateConstants = constants_privateConstants(context);
  const len = mpd.length;
  const itemsInWorkSpace = new Array(len);
  let count = 0;

  for (let i = 0; i < len; i++) {
    if (doRectsOverlap(workSpaceRect, arrangeUtils_getItemDimenWithMargin(privateConstants.MARGIN, mpd[i]))) {
      if (!getIndices) {
        itemsInWorkSpace[count++] = mpd[i];
      } else {
        itemsInWorkSpace[count++] = i;
      }
    }
  }

  const res = new Array(count);

  for (let i = 0; i < count; i++) {
    res[i] = itemsInWorkSpace[i];
  }

  return res;
};
const getItemsBelowBottomWorkSpace = (context, workSpaceRect, getIndices = false) => {
  const mpd = getModifiedPositionData(context);
  const privateConstants = constants_privateConstants(context);

  if (!workSpaceRect) {
    return [];
  }

  const len = mpd.length;
  const items = new Array(len);
  let count = 0;

  for (let i = 0; i < len; i++) {
    if (workSpaceRect.bl.y <= arrangeUtils_getItemDimenWithMargin(privateConstants.MARGIN, mpd[i]).y) {
      if (!getIndices) {
        items[count++] = mpd[i];
      } else {
        items[count++] = i;
      }
    }
  }

  const res = new Array(count);

  for (let i = 0; i < count; i++) {
    res[i] = items[i];
  }

  return res;
};
const getResizeWSItemsDetail = (context, wsCo, topWsCo, bottomWsCo, cWsCo, arranged, itemsToArrange, getIndices = false) => {
  const mpd = getModifiedPositionData(context);
  const privateConstants = constants_privateConstants(context);
  const wsPlusTopWsCo = {
    tl: { ...((topWsCo === null || topWsCo === void 0 ? void 0 : topWsCo.tl) ? topWsCo.tl : wsCo.tl)
    },
    tr: { ...((topWsCo === null || topWsCo === void 0 ? void 0 : topWsCo.tr) ? topWsCo.tr : wsCo.tr)
    },
    br: { ...wsCo.br
    },
    bl: { ...wsCo.bl
    }
  };
  const wsPlusTopWs = getRectObjectFromCo(wsPlusTopWsCo);
  const bottomWs = getRectObjectFromCo(bottomWsCo);
  const cWs = getRectObjectFromCo(cWsCo);
  let count = 0;
  const iToALen = itemsToArrange.length;

  const _itemsToArrange = new Array(iToALen);

  for (let i = 0; i < iToALen; i++) {
    if (!arranged[itemsToArrange[i]]) {
      _itemsToArrange[count++] = itemsToArrange[i];
    }
  }

  const filteredItemsToArrange = filter(_itemsToArrange);
  const len = mpd.length;
  const updatedItemsToArrange = new Array(len);
  let uCount = 0;
  const itemsInWorkSpace = new Array(len);
  let iCount = 0;

  for (let i = 0; i < len; i++) {
    const _item = arrangeUtils_getItemDimenWithMargin(privateConstants.MARGIN, mpd[i]);

    if (doRectsOverlap(cWs, _item)) {
      if (arranged[i]) {
        if (!getIndices) {
          itemsInWorkSpace[iCount++] = mpd[i];
        } else {
          itemsInWorkSpace[iCount++] = i;
        }
      } else if (doRectsOverlap(wsPlusTopWs, _item)) {
        if (!getIndices) {
          itemsInWorkSpace[iCount++] = mpd[i];
        } else {
          itemsInWorkSpace[iCount++] = i;
        }
      } else if (doRectsOverlap(bottomWs, _item) && !isRectInside(bottomWs, _item)) {
        if (!getIndices) {
          itemsInWorkSpace[iCount++] = mpd[i];
        } else {
          itemsInWorkSpace[iCount++] = i;
        }
      } else if (doRectsOverlap(bottomWs, _item) && isRectInside(bottomWs, _item) && !arranged[i]) {
        updatedItemsToArrange[uCount++] = i;
        mpd[i].x = undefined;
        mpd[i].y = undefined;
      }
    }
  }

  return {
    updatedItemsToArrange: filter([...filteredItemsToArrange, ...updatedItemsToArrange]),
    itemsInWorkSpace: filter(itemsInWorkSpace)
  };
};
const arrangeUtils_getItemDimenWithMargin = (MARGIN, item) => {
  const _item = { ...item
  };
  _item.x -= MARGIN;
  _item.y -= MARGIN;
  _item.width += MARGIN * 2;
  _item.height += MARGIN * 2;
  return _item;
};
const cBSTRectComparator = function (item) {
  return (node, v, d) => {
    if (node.d.rect.width >= item.width && node.d.rect.height >= item.height) {
      return true;
    }

    return false;
  };
};
const cBSTLComp = function (v) {
  return node => {
    if (node.v > v) {
      return true;
    }

    return false;
  };
};
const cBSTRComp = function () {
  return true;
};
const getScore = (rect, maxHWSum) => {
  return (rect.width + rect.height) / maxHWSum;
};
const getItemsToArrangeScore = (context, affectedItems) => {
  const mpd = getModifiedPositionData(context);
  const len = affectedItems.length;
  let item;
  let maxHeight = 0;
  let maxWidth = 0;
  let maxHWSum = 0;
  let score;

  for (let i = 0; i < len; i++) {
    item = mpd[affectedItems[i]];

    if (item.width > maxWidth) {
      maxWidth = item.width;
    }

    if (item.height > maxHeight) {
      maxHeight = item.height;
    }
  }

  maxHWSum = maxWidth + maxHeight;
  const scoreArr = new Array(len);

  for (let i = 0; i < len; i++) {
    item = mpd[affectedItems[i]];
    score = getScore(item, maxHWSum);
    scoreArr[i] = {
      score,
      d: affectedItems[i]
    };
  }

  scoreArr.sort((a, b) => a.score - b.score);
  return scoreArr;
};
const getPerfectMatch = (arr, hwSum) => {
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    arr[i].d.score = getScore(arr[i].d.rect, hwSum);
  }

  arr.sort((a, b) => a.d.score - b.d.score);
  return arr[0];
};
const shiftItemsDown = (context, items, height) => {
  const mpd = getModifiedPositionData(context);
  const len = items.length;

  for (let i = 0; i < len; i++) {
    mpd[items[i]].y += height;
  }
};
const shiftItemsUp = function (context, y, shiftHeight) {
  const pd = getPositionData(context);
  const e = variables_elements(context);
  const len = pd.length;

  for (let i = 0; i < len; i++) {
    if (pd[i].y >= y) {
      pd[i].y -= shiftHeight;
      e.$limberGridViewItems[i].style.transform = "translate(" + pd[i].x + "px, " + pd[i].y + "px)";
    }
  }
};
const addItemAllowCheck = function (context, x, y, width, height) {
  const privateConstants = constants_privateConstants(context);
  const publicConstants = constants_publicConstants(context);
  const pd = getPositionData(context);
  var tempPlane = {
    x: x - privateConstants.MARGIN,
    y: y - privateConstants.MARGIN,
    width: width + publicConstants.MARGIN * 2,
    height: height + publicConstants.MARGIN * 2
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
    isInside = doRectsOverlap(arrangeUtils_getItemDimenWithMargin(privateConstants.MARGIN, pd[i]), tempPlane) || doRectsOnlyTouch(arrangeUtils_getItemDimenWithMargin(privateConstants.MARGIN, pd[i]), tempPlane);

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
    x: 0,
    y: y,
    width: privateConstants.WIDTH,
    height: height
  };

  if (typeof width !== "number" || typeof height !== "number") {
    return false;
  }

  let minY = Number.MAX_SAFE_INTEGER;
  let maxY = 0;
  let atLeastOneOverlapping = false;
  let isOverlapping;
  const len = pd.length;

  for (let i = 0; i < len; i++) {
    if (isRectInside(tempPlane, arrangeUtils_getItemDimenWithMargin(privateConstants.MARGIN, pd[i]))) {
      return false;
    }

    isOverlapping = doRectsOverlap(tempPlane, arrangeUtils_getItemDimenWithMargin(privateConstants.MARGIN, pd[i])) || doRectsOnlyTouch(tempPlane, arrangeUtils_getItemDimenWithMargin(privateConstants.MARGIN, pd[i]));

    if (isOverlapping) {
      atLeastOneOverlapping = true;
      const topPoint = {
        x: pd[i].x,
        y: pd[i].y - privateConstants.MARGIN
      };
      const bottomPoint = {
        x: pd[i].x,
        y: pd[i].y + pd[i].height + privateConstants.MARGIN
      };

      if (pd[i].y - privateConstants.MARGIN < minY && (isPointInsideRect(tempPlane, topPoint) || doesPointTouchRect(tempPlane, topPoint))) {
        minY = pd[i].y - privateConstants.MARGIN;
      }

      if (pd[i].y + pd[i].height + privateConstants.MARGIN > maxY && (isPointInsideRect(tempPlane, bottomPoint) || doesPointTouchRect(tempPlane, bottomPoint))) {
        maxY = pd[i].y + pd[i].height + privateConstants.MARGIN;
      }
    }
  }

  if (atLeastOneOverlapping) {
    if (minY === Number.MAX_SAFE_INTEGER) {
      minY = y;
    }

    if (maxY === 0) {
      maxY = y + height;
    }

    if (minY - maxY > 0) {
      return {
        y: maxY,
        shiftHeight: minY - maxY
      };
    } else {
      return false;
    }
  }

  return {
    y: y,
    shiftHeight: height
  };
};
// CONCATENATED MODULE: ./src/libs/array/arrayUtils.js
/*

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
const shuffle = arr => {
  let temp, j;
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  return arr;
};
// CONCATENATED MODULE: ./src/libs/stack/stack.js
/*

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

/*
		
	LIFO(Last In First Out) Stack Data Structure


*/
const Stack = function () {
  this.length = 100;
  this.stack = new Array(this.length);
  this.ptr = -1;
};

Stack.prototype.constructor = Stack;

Stack.prototype.push = function (data) {
  if (data === null || data === undefined) {
    return false;
  }

  if (this.ptr < this.length - 1) {
    this.stack[++this.ptr] = data;
  } else {
    this.resize();
    this.stack[++this.ptr] = data;
  }

  return true;
};

Stack.prototype.pop = function () {
  if (this.ptr >= 0) {
    const top = this.stack[this.ptr];
    this.ptr--;
    return top;
  }
};

Stack.prototype.wipePop = function () {
  if (this.ptr >= 0) {
    const top = this.stack[this.ptr];
    this.stack[this.ptr] = undefined;
    this.ptr--;
    return top;
  }
};

Stack.prototype.resize = function () {
  const oldlen = this.length;
  const oldStack = this.stack;
  this.length += 100;
  this.stack = new Array(this.length);

  for (let i = 0; i < oldlen; i++) {
    this.stack[i] = oldStack[i];
  }
};

Stack.prototype.getTop = function () {
  if (this.ptr >= 0) {
    return this.stack[this.ptr];
  }

  return null;
};

Stack.prototype.isEmpty = function () {
  if (this.ptr < 0) {
    return true;
  }

  return false;
};

Stack.prototype.getData = function () {
  const arr = new Array(this.ptr + 1);

  for (let i = 0; i <= this.ptr; i++) {
    arr[i] = this.stack[i];
  }

  return arr;
};

Stack.prototype.getAllData = function () {
  const arr = new Array(this.length);

  for (let i = 0; i < this.length; i++) {
    arr[i] = this.stack[i];
  }

  return arr;
};

Stack.prototype.getSize = function () {
  return this.ptr + 1;
};

Stack.prototype.empty = function () {
  this.ptr = -1;
};

Stack.prototype.wipe = function () {
  this.length = 100;
  this.stack = new Array(this.length);
  this.ptr = -1;
};

/* harmony default export */ var stack_stack = (Stack);
// CONCATENATED MODULE: ./src/libs/debug/debug.js
/*

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


const sleep = ms => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
};
const printUnmergedFreeRects = (context, arr) => {
  if (false) { var _arr$i; }
};
const printMergedFreeRects = (context, arr) => {
  if (false) {}
};
const printResultStackRects = (context, arr) => {
  if (false) {}
};
const printStackRects = (context, arr) => {
  if (false) {}
};
const printMergedTempRects = (context, obj) => {
  if (false) {}
};
const printStackTopRect = (context, obj) => {
  if (false) {}
};
const printStackTopAdjRect = (context, obj) => {
  if (false) {}
};
const printMergedRect = (context, obj) => {
  if (false) {}
};
const printAdjRect = (context, obj) => {
  if (false) {}
};
// CONCATENATED MODULE: ./src/libs/arrange/arrange.js
/*

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










const arrangeMove = async (context, affectedItems, toY, movedBottomY, isDemo = false) => {
  const privateConstants = constants_privateConstants(context);
  const mpd = getModifiedPositionData(context);
  const p1 = performance.now();
  const idCount = {
    idCount: 0
  };
  const {
    minY,
    maxY
  } = getMinMaxXY(context, affectedItems, undefined, undefined, toY, movedBottomY); // last element is moved or resized item;

  const itemsToArrange = new Array(affectedItems.length - 1);
  const iToALen = affectedItems.length - 1;

  for (let i = 0; i < iToALen; i++) {
    itemsToArrange[i] = affectedItems[i];
  }

  const workSpaceRectCo = {
    tl: {
      x: 0,
      y: minY
    },
    tr: {
      x: privateConstants.WIDTH,
      y: minY
    },
    br: {
      x: privateConstants.WIDTH,
      y: maxY
    },
    bl: {
      x: 0,
      y: maxY
    }
  };
  const combinedWorkSpaceRectCo = {
    tl: { ...workSpaceRectCo.tl
    },
    tr: { ...workSpaceRectCo.tr
    },
    br: { ...workSpaceRectCo.br
    },
    bl: { ...workSpaceRectCo.bl
    }
  };
  const {
    topWorkSpaceCo,
    bottomWorkSpaceCo
  } = getTopBottomWS(context, workSpaceRectCo, 0, privateConstants.WIDTH);
  const shrinkRes = shrinkTopBottomWS(context, topWorkSpaceCo, bottomWorkSpaceCo);

  if (shrinkRes.integrateTop) {
    combinedWorkSpaceRectCo.tl = { ...topWorkSpaceCo.tl
    };
    combinedWorkSpaceRectCo.tr = { ...topWorkSpaceCo.tr
    };
  }

  if (shrinkRes.integrateBottom) {
    combinedWorkSpaceRectCo.br = { ...bottomWorkSpaceCo.br
    };
    combinedWorkSpaceRectCo.bl = { ...bottomWorkSpaceCo.bl
    };
  }

  let itemsInBottomWorkSpace = getItemsInWorkSpace(context, getRectObjectFromCo(bottomWorkSpaceCo), true);
  const itemsBelowBottomWorkSpace = getItemsBelowBottomWorkSpace(context, bottomWorkSpaceCo, true);
  let combinedWorkSpaceRect = getRectObjectFromCo(combinedWorkSpaceRectCo);
  let itemsInCombinedWorkSpace = getItemsInWorkSpace(context, combinedWorkSpaceRect);
  const shiftHeight = (privateConstants.DEFINED_MIN_HEIGHT_AND_WIDTH - privateConstants.MARGIN * 2) / 2;
  let passCount = 0;
  let arranged = {};
  let arrangedCount = 0;
  let workSpaceResizeCount = 0;
  let DEBUG_COUNT = 0;

  while (arrangedCount !== iToALen) {
    // sort items in workspace by lt.x  i.e horizontally
    itemsInCombinedWorkSpace.sort((a, b) => a.x - b.x);
    const {
      it: freeRectsItY,
      idCount: lastId1
    } = sweepLine(context, combinedWorkSpaceRect, combinedWorkSpaceRectCo, itemsInCombinedWorkSpace, idCount.idCount);
    idCount.idCount = lastId1;
    const freeRectsArr = freeRectsItY.getSortedData();
    shuffle(freeRectsArr);
    assignAdjacentRects(freeRectsItY); // DEBUG:
    // printUnmergedFreeRects(context, freeRectsArr.map((o) => o.d));

    const {
      mergedRects,
      idCount: lastId2
    } = await mergeFreeRects(freeRectsArr, idCount.idCount);
    idCount.idCount = lastId2; // DEBUG:
    // printMergedFreeRects(context, mergedRects.map((o) => o.d));

    const {
      overlappedRects
    } = findOverlapped(mergedRects); // DEBUG:
    // printMergedFreeRects(context, overlappedRects.map((o) => o.d));

    const {
      arranged: _arranged,
      itemsInBottomWorkSpace: _itemsInBottomWorkSpace,
      idCount: lastId3
    } = await arrange(context, itemsToArrange.filter(id => !arranged[id]), overlappedRects, getRectObjectFromCo(topWorkSpaceCo), getRectObjectFromCo(bottomWorkSpaceCo), combinedWorkSpaceRectCo, idCount.idCount);
    idCount.idCount = lastId3;
    itemsInBottomWorkSpace = [...itemsInBottomWorkSpace, ...Object.keys(_itemsInBottomWorkSpace)];
    arranged = { ...arranged,
      ..._arranged
    };

    const _arrangedArr = Object.values(_arranged);

    itemsInCombinedWorkSpace = [...itemsInCombinedWorkSpace, ..._arrangedArr];
    arrangedCount += _arrangedArr.length;

    if (arrangedCount !== iToALen) {
      // resize workSpace and push bottom workspace down
      workSpaceResizeCount++;
      console.log("workSpaceResizeCount", workSpaceResizeCount);
      workSpaceRectCo.br.y += shiftHeight;
      workSpaceRectCo.bl.y += shiftHeight;

      if (bottomWorkSpaceCo) {
        bottomWorkSpaceCo.tl.y += shiftHeight;
        bottomWorkSpaceCo.tr.y += shiftHeight;
        bottomWorkSpaceCo.br.y += shiftHeight;
        bottomWorkSpaceCo.bl.y += shiftHeight;
      }

      combinedWorkSpaceRectCo.br.y += shiftHeight;
      combinedWorkSpaceRectCo.bl.y += shiftHeight;
      combinedWorkSpaceRect = getRectObjectFromCo(combinedWorkSpaceRectCo);
      shiftItemsDown(context, itemsInBottomWorkSpace, shiftHeight);
    }

    passCount++;
    DEBUG_COUNT++;

    if (DEBUG_COUNT > 50) {
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
  console.log("arrange total: ", p2 - p1);
  return arranged;
};
const arrangeResize = async (context, affectedItems, resizedBottomY, resizedRightX, isDemo = false) => {
  const privateConstants = constants_privateConstants(context);
  const p1 = performance.now();
  const idCount = {
    idCount: 0
  };
  const {
    minX,
    maxX,
    minY,
    maxY
  } = getMinMaxXY(context, affectedItems, resizedRightX, resizedBottomY, undefined, undefined); // last element is moved or resized item;

  let itemsToArrange = new Array(affectedItems.length - 1);
  let iToALen = affectedItems.length - 1;

  for (let i = 0; i < iToALen; i++) {
    itemsToArrange[i] = affectedItems[i];
  }

  const workSpaceRectCo = {
    tl: {
      x: 0,
      y: minY
    },
    tr: {
      x: privateConstants.WIDTH,
      y: minY
    },
    br: {
      x: privateConstants.WIDTH,
      y: maxY
    },
    bl: {
      x: 0,
      y: maxY
    }
  };
  const combinedWorkSpaceRectCo = {
    tl: { ...workSpaceRectCo.tl
    },
    tr: { ...workSpaceRectCo.tr
    },
    br: { ...workSpaceRectCo.br
    },
    bl: { ...workSpaceRectCo.bl
    }
  };
  const {
    topWorkSpaceCo,
    bottomWorkSpaceCo
  } = getTopBottomWS(context, workSpaceRectCo, 0, privateConstants.WIDTH);
  const shrinkRes = shrinkTopBottomWS(context, topWorkSpaceCo, bottomWorkSpaceCo);

  if (shrinkRes.integrateTop) {
    combinedWorkSpaceRectCo.tl = { ...topWorkSpaceCo.tl
    };
    combinedWorkSpaceRectCo.tr = { ...topWorkSpaceCo.tr
    };
  }

  if (shrinkRes.integrateBottom) {
    combinedWorkSpaceRectCo.br = { ...bottomWorkSpaceCo.br
    };
    combinedWorkSpaceRectCo.bl = { ...bottomWorkSpaceCo.bl
    };
  }

  const _workSpaceRectCo = {
    // can safely do these operations
    // work space width should be greather than or equal to "DEFINED_MIN_HEIGHT_AND_WIDTH + (MARGIN * 2)"
    // minX - privateConstants.MARGIN
    // maxX + privateConstants.MARGIN
    // above two operations are already done in getMinMaxXY
    tl: {
      x: minX,
      y: minY
    },
    tr: {
      x: maxX,
      y: minY
    },
    br: {
      x: maxX,
      y: maxY
    },
    bl: {
      x: minX,
      y: maxY
    }
  };
  const _combinedWorkSpaceRectCo = {
    tl: { ..._workSpaceRectCo.tl
    },
    tr: { ..._workSpaceRectCo.tr
    },
    br: { ..._workSpaceRectCo.br
    },
    bl: { ..._workSpaceRectCo.bl
    }
  };
  const {
    topWorkSpaceCo: _topWorkSpaceCo,
    bottomWorkSpaceCo: _bottomWorkSpaceCo
  } = getTopBottomWS(context, _workSpaceRectCo, minX - privateConstants.MARGIN, maxX + privateConstants.MARGIN);

  const _shrinkRes = shrinkTopBottomWS(context, _topWorkSpaceCo);

  if (_shrinkRes.integrateTop) {
    _combinedWorkSpaceRectCo.tl = { ..._topWorkSpaceCo.tl
    };
    _combinedWorkSpaceRectCo.tr = { ..._topWorkSpaceCo.tr
    };
  }

  if (_bottomWorkSpaceCo) {
    _combinedWorkSpaceRectCo.br = { ..._bottomWorkSpaceCo.br
    };
    _combinedWorkSpaceRectCo.bl = { ..._bottomWorkSpaceCo.bl
    };
  }

  const combinedWorkSpaceRect = getRectObjectFromCo(combinedWorkSpaceRectCo);
  let itemsInCombinedWorkSpace = getItemsInWorkSpace(context, combinedWorkSpaceRect);

  let _combinedWorkSpaceRect = getRectObjectFromCo(_combinedWorkSpaceRectCo);

  const incrementHeight = privateConstants.DEFINED_MIN_HEIGHT_AND_WIDTH * 2;
  let passCount = 0;
  let arranged = {};
  let arrangedCount = 0;
  let workSpaceResizeCount = 0;

  while (arrangedCount !== iToALen) {
    let freeRectsItY;

    if (passCount === 0) {
      // sort items in workspace by lt.x  i.e horizontally
      itemsInCombinedWorkSpace.sort((a, b) => a.x - b.x);
      const {
        it: _freeRectsItY,
        idCount: lastId1
      } = sweepLine(context, combinedWorkSpaceRect, combinedWorkSpaceRectCo, itemsInCombinedWorkSpace, idCount.idCount);
      freeRectsItY = _freeRectsItY;
      idCount.idCount = lastId1;
    } else if (passCount === 1) {
      const {
        itemsInWorkSpace: _itemsInCombinedWorkSpace,
        updatedItemsToArrange
      } = getResizeWSItemsDetail(context, _workSpaceRectCo, _topWorkSpaceCo, _bottomWorkSpaceCo, _combinedWorkSpaceRectCo, arranged, itemsToArrange);
      itemsInCombinedWorkSpace = _itemsInCombinedWorkSpace;
      itemsToArrange = updatedItemsToArrange;
      iToALen = updatedItemsToArrange.length + arrangedCount;
      passCount++;
      continue;
    } else if (passCount >= 2) {
      // sort items in workspace by lt.x  i.e horizontally
      itemsInCombinedWorkSpace.sort((a, b) => a.x - b.x);
      const {
        it: _freeRectsItY,
        idCount: lastId1
      } = sweepLine(context, _combinedWorkSpaceRect, _combinedWorkSpaceRectCo, itemsInCombinedWorkSpace, idCount.idCount);
      freeRectsItY = _freeRectsItY;
      idCount.idCount = lastId1;
    }

    const freeRectsArr = freeRectsItY.getSortedData();
    shuffle(freeRectsArr);
    assignAdjacentRects(freeRectsItY); // DEBUG:
    // printUnmergedFreeRects(
    // 	context,
    // 	freeRectsArr.map((o) => o.d)
    // );

    const {
      mergedRects,
      idCount: lastId2
    } = await mergeFreeRects(freeRectsArr, idCount.idCount);
    idCount.idCount = lastId2; // DEBUG:
    // printMergedFreeRects(
    // 	context,
    // 	mergedRects.map((o) => o.d)
    // );

    const {
      overlappedRects
    } = findOverlapped(mergedRects); // DEBUG:
    // printMergedFreeRects(
    // 	context,
    // 	overlappedRects.map((o) => o.d)
    // );

    const {
      arranged: _arranged,
      idCount: lastId3
    } = await arrange(context, itemsToArrange.filter(id => !arranged[id]), overlappedRects, getRectObjectFromCo(topWorkSpaceCo), getRectObjectFromCo(bottomWorkSpaceCo), passCount === 0 ? combinedWorkSpaceRectCo : _combinedWorkSpaceRectCo, idCount.idCount);
    idCount.idCount = lastId3;
    arranged = { ...arranged,
      ..._arranged
    };

    const _arrangedArr = Object.values(_arranged);

    itemsInCombinedWorkSpace = [...itemsInCombinedWorkSpace, ..._arrangedArr];
    arrangedCount += _arrangedArr.length;

    if (arrangedCount !== iToALen && passCount >= 2) {
      // resize combined workSpace
      workSpaceResizeCount++;
      console.log("workSpaceResizeCount", workSpaceResizeCount);
      _combinedWorkSpaceRectCo.br.y += incrementHeight;
      _combinedWorkSpaceRectCo.bl.y += incrementHeight;
      _combinedWorkSpaceRect = getRectObjectFromCo(_combinedWorkSpaceRectCo);
    }

    passCount++;

    if (passCount > 50) {
      throw "Arrange time out";
    }
  }

  const p2 = performance.now();
  console.log("p1: ", p1);
  console.log("p2: ", p2);
  console.log("arrange total: ", p2 - p1);
  return arranged;
};
const arrangeFromHeight = async (context, itemsToArrange, height) => {
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
  const workSpaceRectCo = {
    tl: {
      x: minX,
      y: minY
    },
    tr: {
      x: maxX,
      y: minY
    },
    br: {
      x: maxX,
      y: maxY
    },
    bl: {
      x: minX,
      y: maxY
    }
  };
  const combinedWorkSpaceRectCo = {
    tl: { ...workSpaceRectCo.tl
    },
    tr: { ...workSpaceRectCo.tr
    },
    br: { ...workSpaceRectCo.br
    },
    bl: { ...workSpaceRectCo.bl
    }
  };
  const {
    topWorkSpaceCo
  } = getTopBottomWS(context, workSpaceRectCo, 0, privateConstants.WIDTH);
  const shrinkRes = shrinkTopBottomWS(context, topWorkSpaceCo);

  if (shrinkRes.integrateTop) {
    combinedWorkSpaceRectCo.tl = { ...topWorkSpaceCo.tl
    };
    combinedWorkSpaceRectCo.tr = { ...topWorkSpaceCo.tr
    };
  }

  let combinedWorkSpaceRect = getRectObjectFromCo(combinedWorkSpaceRectCo);
  let itemsInCombinedWorkSpace = getItemsInWorkSpace(context, combinedWorkSpaceRect);
  const shiftHeight = privateConstants.DEFINED_MIN_HEIGHT_AND_WIDTH - privateConstants.MARGIN * 2 - 10;
  let passCount = 0;
  let arranged = {};
  let arrangedCount = 0;
  let workSpaceResizeCount = 0;

  while (arrangedCount !== iToALen) {
    // sort items in workspace by lt.x  i.e horizontally
    itemsInCombinedWorkSpace.sort((a, b) => a.x - b.x);
    const {
      it: freeRectsItY,
      idCount: lastId1
    } = sweepLine(context, combinedWorkSpaceRect, combinedWorkSpaceRectCo, itemsInCombinedWorkSpace, idCount.idCount);
    idCount.idCount = lastId1;
    const freeRectsArr = freeRectsItY.getSortedData();
    shuffle(freeRectsArr);
    assignAdjacentRects(freeRectsItY); // DEBUG:
    // printUnmergedFreeRects(context, freeRectsArr.map((o) => o.d));

    const {
      mergedRects,
      idCount: lastId2
    } = await mergeFreeRects(freeRectsArr, idCount.idCount);
    idCount.idCount = lastId2; // DEBUG:
    // printMergedFreeRects(context, mergedRects.map((o) => o.d));

    const {
      overlappedRects
    } = findOverlapped(mergedRects); // DEBUG:
    // printMergedFreeRects(context, overlappedRects.map((o) => o.d));

    const {
      arranged: _arranged,
      idCount: lastId3
    } = await arrange(context, itemsToArrange.filter(id => !arranged[id]), overlappedRects, getRectObjectFromCo(topWorkSpaceCo), undefined, combinedWorkSpaceRectCo, idCount.idCount);
    idCount.idCount = lastId3;
    arranged = { ...arranged,
      ..._arranged
    };

    const _arrangedArr = Object.values(_arranged);

    itemsInCombinedWorkSpace = [...itemsInCombinedWorkSpace, ..._arrangedArr];
    arrangedCount += _arrangedArr.length;

    if (arrangedCount !== iToALen) {
      // resize workSpace and push bottom workspace down
      workSpaceResizeCount++;
      console.log("workSpaceResizeCount", workSpaceResizeCount);
      workSpaceRectCo.br.y += shiftHeight;
      workSpaceRectCo.bl.y += shiftHeight;
      combinedWorkSpaceRectCo.br.y += shiftHeight;
      combinedWorkSpaceRectCo.bl.y += shiftHeight;
      combinedWorkSpaceRect = getRectObjectFromCo(combinedWorkSpaceRectCo);
    }

    passCount++;
    passCount++;

    if (passCount > 10000) {
      throw "Arrange time out";
    }
  }

  const p2 = performance.now();
  console.log("p1: ", p1);
  console.log("p2: ", p2);
  console.log("arrange total: ", p2 - p1);
  return arranged;
};
const shrinkTopBottomWS = (context, topWorkSpace, bottomWorkSpace) => {
  let topWSItems, bottomWSItems;
  const res = {
    integrateTop: false,
    integrateBottom: false
  };

  if (topWorkSpace) {
    topWSItems = getItemsInWorkSpace(context, getRectObjectFromCo(topWorkSpace));
    const sweepRes = sweepLineTop(topWorkSpace, topWSItems);

    if (sweepRes < topWorkSpace.bl.y) {
      topWorkSpace.tl.y = sweepRes;
      topWorkSpace.tr.y = sweepRes;
      res.integrateTop = true;
    }
  }

  if (bottomWorkSpace) {
    bottomWSItems = getItemsInWorkSpace(context, getRectObjectFromCo(bottomWorkSpace));
    const sweepRes = sweepLineBottom(bottomWorkSpace, bottomWSItems);

    if (sweepRes > bottomWorkSpace.tl.y) {
      bottomWorkSpace.bl.y = sweepRes;
      bottomWorkSpace.br.y = sweepRes;
      res.integrateBottom = true;
    }
  }

  return res;
};
const sweepLineTop = (area, items) => {
  const len = items.length;
  const it = new external_commonjs_IntervalTreeJS_commonjs2_IntervalTreeJS_amd_IntervalTreeJS_root_IntervalTreeJS_["IntervalTreesIterative"]();

  for (let i = 0; i < len; i++) {
    it.insert({
      low: items[i].y,
      high: items[i].y + items[i].height,
      d: {
        rect: items[i]
      }
    });
  }

  let resultPoint = area.bl.y;
  let res, rLen;
  let breakSig = false;

  for (let i = 0; i < len; i++) {
    res = it.findAll({
      low: items[i].y + items[i].height,
      high: area.bl.y
    });
    rLen = res.length;
    breakSig = false;

    for (let j = 0; j < rLen; j++) {
      if (areRectsOnSameYAxisExPath(getCoordinates(items[i]), getCoordinates(res[j].d.rect)) && !areRectsIdentical(getCoordinates(items[i]), getCoordinates(res[j].d.rect))) {
        breakSig = true;
        break;
      }
    }

    if (!breakSig && items[i].y + items[i].height < resultPoint) {
      resultPoint = items[i].y + items[i].height;
    }
  }

  return resultPoint;
};
const sweepLineBottom = (area, items) => {
  const len = items.length;
  const it = new external_commonjs_IntervalTreeJS_commonjs2_IntervalTreeJS_amd_IntervalTreeJS_root_IntervalTreeJS_["IntervalTreesIterative"]();

  for (let i = 0; i < len; i++) {
    it.insert({
      low: items[i].y,
      high: items[i].y + items[i].height,
      d: {
        rect: items[i]
      }
    });
  }

  let resultPoint = area.tl.y;
  let res, rLen;
  let breakSig = false;

  for (let i = 0; i < len; i++) {
    res = it.findAll({
      low: area.tl.y,
      high: items[i].y
    });
    rLen = res.length;
    breakSig = false;

    for (let j = 0; j < rLen; j++) {
      if (areRectsOnSameYAxisExPath(getCoordinates(items[i]), getCoordinates(res[j].d.rect)) && !areRectsIdentical(getCoordinates(items[i]), getCoordinates(res[j].d.rect))) {
        breakSig = true;
        break;
      }
    }

    if (!breakSig && items[i].y > resultPoint) {
      resultPoint = items[i].y;
    }
  }

  return resultPoint;
};
const sweepLine = (context, area, areaCo, items, lastId) => {
  // area: area to sweep
  // area: area to sweep Coordinate Form
  // items: items in area
  const privateConstants = constants_privateConstants(context);
  let idCount = lastId;
  const it = new external_commonjs_IntervalTreeJS_commonjs2_IntervalTreeJS_amd_IntervalTreeJS_root_IntervalTreeJS_["IntervalTreesIterative"]();
  it.insert({
    low: areaCo.tl.y,
    high: areaCo.bl.y,
    d: {
      id: idCount++,
      rect: area,
      a: {},
      o: {},
      ref: null
    }
  });
  let tempItem;
  let fInterval = {
    low: 0,
    high: 0,
    d: null
  };
  let intervals;
  let iLen = 0;
  let diff;
  let dLen = 0;
  const len = items.length;

  for (let i = 0; i < len; i++) {
    tempItem = getCoordinates(items[i]);
    fInterval = {
      low: tempItem.tl.y,
      high: tempItem.bl.y
    };
    intervals = it.findAll(fInterval);
    iLen = intervals.length;

    for (let j = 0; j < iLen; j++) {
      if (doRectsOverlap(intervals[j].d.rect, arrangeUtils_getItemDimenWithMargin(privateConstants.MARGIN, items[i]))) {
        diff = subtractRect(intervals[j].d.rect, arrangeUtils_getItemDimenWithMargin(privateConstants.MARGIN, items[i]), true);
        dLen = diff.length;

        for (let k = 0; k < dLen; k++) {
          it.insert({
            low: diff[k].tl.y,
            high: diff[k].bl.y,
            d: {
              id: idCount++,
              rect: getRectObjectFromCo(diff[k]),
              a: {},
              o: {},
              ref: null
            }
          });
        }

        it.remove(intervals[j].interval, intervals[j].d);
      }
    }
  }

  return {
    it,
    idCount
  };
};
const assignAdjacentRects = rectsItY => {
  const rectItYArr = rectsItY.getSortedData();
  const len = rectItYArr.length;
  let resY, lenY;

  for (let i = 0; i < len; i++) {
    resY = rectsItY.findAll(rectItYArr[i].interval);
    lenY = resY.length;

    for (let j = 0; j < lenY; j++) {
      if (areRectsAdjacent(rectItYArr[i].d.rect, resY[j].d.rect)) {
        rectItYArr[i].d.a[resY[j].d.id] = resY[j];
      }
    }
  }
};
const mergeFreeRects = async (freeRectsArr, lastId) => {
  const stack = new stack_stack();
  const stackIt = new external_commonjs_IntervalTreeJS_commonjs2_IntervalTreeJS_amd_IntervalTreeJS_root_IntervalTreeJS_["IntervalTreesIterative"]();
  const resultStack = new stack_stack();
  const resultIt = new external_commonjs_IntervalTreeJS_commonjs2_IntervalTreeJS_amd_IntervalTreeJS_root_IntervalTreeJS_["IntervalTreesIterative"]();
  let adjacents, adj, top, keys, keyslen, mergedObject, mergedRect, mergedRects, mergeRectsLen;
  let atLeastOneFullMerge = false;
  let idCount = lastId;
  const freeRectsLen = freeRectsArr.length;

  for (let k = 0; k < freeRectsLen; k++) {
    if (freeRectsArr[k].d.ref !== null) {
      continue;
    }

    stack.push(freeRectsArr[k]);

    while (!stack.isEmpty()) {
      top = stack.pop();
      keys = Object.keys(top.d.a);
      keyslen = keys.length;
      atLeastOneFullMerge = false;

      for (let i = 0; i < keyslen; i++) {
        var _mergedRects;

        if (!top.d.a[keys[i]]) {
          continue;
        }

        adj = top.d.a[keys[i]];

        while ((_adj = adj) === null || _adj === void 0 ? void 0 : (_adj$d = _adj.d) === null || _adj$d === void 0 ? void 0 : _adj$d.ref) {
          var _adj, _adj$d;

          adj = adj.d.ref;
        }

        mergedRects = mergeRects(top.d.rect, adj.d.rect);
        mergeRectsLen = ((_mergedRects = mergedRects) === null || _mergedRects === void 0 ? void 0 : _mergedRects.length) || 0;

        if (mergeRectsLen === 1) {
          mergedRect = mergedRects[0];

          if (mergedRect) {
            adjacents = { ...top.d.a,
              ...adj.d.a
            };
            delete adjacents[top.d.id];
            delete adjacents[adj.d.id];
            mergedObject = {
              d: {
                id: idCount++,
                rect: mergedRect,
                a: adjacents,
                o: {},
                ref: null
              }
            };
            filterAdjacents(mergedObject);

            if (!isRectIdenticalOrInside(stackIt, mergedObject)) {
              stack.push(mergedObject);
            }

            if (isRectInside(mergedRect, adj.d.rect)) {
              adj.d.ref = mergedObject;
            }

            if (isRectInside(mergedRect, top.d.rect)) {
              top.d.ref = mergedObject;
              atLeastOneFullMerge = true;
            }
          }
        }
      }

      if (!atLeastOneFullMerge) {
        isRectIdenticalOrInside(resultIt, top);
      }
    }
  }

  return {
    mergedRects: resultIt.getSortedData(),
    idCount
  };
};
const isRectIdenticalOrInside = (it, obj) => {
  const res = it.findAll({
    low: obj.d.rect.y,
    high: obj.d.rect.y + obj.d.rect.height
  });
  let isIdenticalOrInside = false;
  const len = (res === null || res === void 0 ? void 0 : res.length) || 0;

  for (let i = 0; i < len; i++) {
    if (areRectsIdentical(getCoordinates(obj.d.rect), getCoordinates(res[i].d.rect)) || isRectInside(res[i].d.rect, obj.d.rect)) {
      isIdenticalOrInside = true;
    }
  }

  if (!isIdenticalOrInside) {
    it.insert({
      low: obj.d.rect.y,
      high: obj.d.rect.y + obj.d.rect.height,
      d: obj.d
    });
  }

  return isIdenticalOrInside;
};
const filterAdjacents = (mergedObject, visited) => {
  const mergedRect = mergedObject.d.rect;
  const adjs = mergedObject.d.a;
  let adj;
  const adjsKeys = Object.keys(adjs);
  const adjsKeysLen = adjsKeys.length;

  for (let j = 0; j < adjsKeysLen; j++) {
    adj = adjs[adjsKeys[j]];

    if (!areRectsAdjacent(mergedRect, adj.d.rect)) {
      delete adjs[adjsKeys[j]];
    }
  }
};
const findOverlapped = mergedRects => {
  const it = new external_commonjs_IntervalTreeJS_commonjs2_IntervalTreeJS_amd_IntervalTreeJS_root_IntervalTreeJS_["IntervalTreesIterative"]();
  const len = mergedRects.length;

  for (let i = 0; i < len; i++) {
    mergedRects[i].low = mergedRects[i].d.rect.y;
    mergedRects[i].high = mergedRects[i].d.rect.y + mergedRects[i].d.rect.height;
    it.insert(mergedRects[i]);
  }

  const completeOverlapped = {};
  const itArr = it.getSortedData();
  let res, rlen;

  for (let i = 0; i < len; i++) {
    res = it.findAll(itArr[i].interval);
    rlen = res.length;

    for (let j = 0; j < rlen; j++) {
      if (itArr[i].d.rect && res[j].d.rect && isRectInside(itArr[i].d.rect, res[j].d.rect) && itArr[i].d.id !== res[j].d.id) {
        completeOverlapped[res[j].d.id] = res[j];
        res[j].d._rect = res[j].d.rect;
        res[j].d.rect = null;
        const olpds = Object.values(res[j].d.o);
        const oLen = olpds.length;

        for (let k = 0; k < oLen; k++) {
          // Hey everyone I'm done.
          const olpd = olpds[k];
          delete olpd.d.o[res[j].d.id];
        }

        res[j].d.o = {};
      } else if (doRectsOverlap(itArr[i].d.rect, res[j].d.rect)) {
        itArr[i].d.o[res[j].d.id] = res[j];
        res[j].d.o[itArr[i].d.id] = itArr[i];
      }
    }
  }

  const resArr = new Array(len);
  let count = 0;

  for (let i = 0; i < len; i++) {
    if (itArr[i].d.rect) {
      resArr[count++] = itArr[i];
    }
  }

  const filteredResArr = new Array(count);

  for (let i = 0; i < count; i++) {
    filteredResArr[i] = resArr[i];
  }

  return {
    overlappedRects: filteredResArr,
    completeOverlapped: Object.values(completeOverlapped)
  };
};
/**
 * [description]
 * @param  {number[]} itemsToArrange          Array of items to arrange
 * @param  {object[]} overlappedRects         Array of overlapping rects
 * @param  {object} topWorkSpace            Top work space object in object form
 * @param  {object} bottomWorkSpace         Bottom work space object in object form
 * @param  {object} combinedWorkSpaceRectCo combined work space object in object form
 * @param  {number} lastId                  next id available
 * @return {object}                         arranged{object}: key is index in position data array, value is the object; itemsInbottomworkSpace{object}: key is index in position data array, value is also the index; idCount: next available id
 */

const arrange = async (context, itemsToArrange, overlappedRects, topWorkSpace, bottomWorkSpace, combinedWorkSpaceRectCo, lastId) => {
  // this function updates the modified position data
  // so no need to update the modified position data later
  const mpd = getModifiedPositionData(context);
  const privateConstants = constants_privateConstants(context);
  let idCount = lastId;
  const arranged = {};
  const itemsInBottomWorkSpace = {}; // construct closest bst

  shuffle(overlappedRects);
  const wCBST = new external_commonjs_ClosestBST_commonjs2_ClosestBST_amd_ClosestBST_root_ClosestBST_["ClosestBST"]();
  const orLen = overlappedRects.length;

  for (let i = 0; i < orLen; i++) {
    wCBST.insert({
      v: overlappedRects[i].d.rect.width,
      d: overlappedRects[i].d
    });
  }

  const iToALen = itemsToArrange.length;
  const itemsToArrangeStack = new stack_stack();
  const itemsToArrangeLaterStack = new stack_stack();
  const itemsToArrangeWithScore = getItemsToArrangeScore(context, itemsToArrange);

  for (let i = 0; i < iToALen; i++) {
    itemsToArrangeStack.push(itemsToArrangeWithScore[i]);
  }

  let top;
  let aItem;
  let wCBSTRes;

  while (!itemsToArrangeStack.isEmpty()) {
    top = itemsToArrangeStack.pop();
    aItem = mpd[top.d];
    wCBSTRes = wCBST.findUsingComparator(cBSTRectComparator(arrangeUtils_getItemDimenWithMargin(privateConstants.MARGIN, aItem)), cBSTLComp(aItem.width), cBSTRComp);

    if (!wCBSTRes.length) {
      itemsToArrangeLaterStack.push(top);
      continue;
    }

    const pm = getPerfectMatch(wCBSTRes, aItem.width + aItem.height);
    aItem.x = pm.d.rect.x + privateConstants.MARGIN;
    aItem.y = pm.d.rect.y + privateConstants.MARGIN;
    arranged[top.d] = aItem;

    if (bottomWorkSpace && isRectInside(bottomWorkSpace, pm.d.rect)) {
      // put in bottom and combined workspace
      itemsInBottomWorkSpace[top.d] = top.d;
    } // DEBUG:
    // printMergedFreeRects(context, wCBST.getSortedData().map((o) => o.d));


    const {
      result,
      idCount: lastId1
    } = await arrangeCleanUp(context, aItem, pm, wCBST, idCount);
    idCount = lastId1;
    const resLen = result.length;

    for (let i = 0; i < resLen; i++) {
      result[i].v = result[i].d.rect.width;
      wCBST.insert(result[i]);
    } // DEBUG:
    // printMergedFreeRects(context, wCBST.getSortedData().map((o) => o.d));

  }

  return {
    arranged,
    itemsInBottomWorkSpace,
    idCount
  };
};
const arrangeCleanUp = async (context, aItem, pm, wCBST, lastId) => {
  var _diff;

  const privateConstants = constants_privateConstants(context);
  let idCount = lastId;
  let diff;
  let diffLen;
  let diffObj; // overlapped

  let olpd; // indirect operlapped

  let iolpd; // indirect overlapping keys

  let ioKeys;
  let ioKeysLen;
  const indirectOverlaps = {};
  const diffStack = new stack_stack();
  const itemWithMargins = {
    x: aItem.x - privateConstants.MARGIN,
    y: aItem.y - privateConstants.MARGIN,
    width: aItem.width + privateConstants.MARGIN * 2,
    height: aItem.height + privateConstants.MARGIN * 2
  };
  wCBST.remove(pm.v, pm.d);
  diff = subtractRect(pm.d.rect, itemWithMargins);
  diffLen = ((_diff = diff) === null || _diff === void 0 ? void 0 : _diff.length) || 0;

  for (let i = 0; i < diffLen; i++) {
    diffObj = {
      v: diff[i].width,
      d: {
        id: idCount++,
        rect: diff[i],
        a: {},
        o: {},
        ref: null
      }
    };
    diffStack.push(diffObj);
  }

  let subtractFlag = false;
  const directOverlaps = { ...pm.d.o
  };
  const pmOlps = Object.values(pm.d.o);
  const pmOlapsLen = pmOlps.length;

  for (let j = 0; j < pmOlapsLen; j++) {
    olpd = pmOlps[j];
    delete olpd.d.o[pm.d.id]; // if diffLen is 0, this overlapping rect will be put back later after operations

    wCBST.remove(olpd.d.rect.width, olpd.d);
    subtractFlag = false;

    if (doRectsOverlap(olpd.d.rect, itemWithMargins)) {
      var _diff2;

      subtractFlag = true;
      diff = subtractRect(olpd.d.rect, itemWithMargins);
      diffLen = ((_diff2 = diff) === null || _diff2 === void 0 ? void 0 : _diff2.length) || 0;

      if (diffLen) {
        for (let k = 0; k < diffLen; k++) {
          diffObj = {
            v: diff[k].width,
            d: {
              id: idCount++,
              rect: diff[k],
              a: {},
              o: {},
              ref: null
            }
          };
          diffStack.push(diffObj);
        }
      }
    } else {
      diffStack.push(olpd);
      olpd.d.a = {};
    }

    ioKeys = Object.keys(olpd.d.o);
    ioKeysLen = ioKeys.length;

    for (let k = 0; k < ioKeysLen; k++) {
      iolpd = olpd.d.o[ioKeys[k]];

      if (!directOverlaps[ioKeys[k]]) {
        indirectOverlaps[ioKeys[k]] = iolpd;
      }

      if (subtractFlag) {
        delete iolpd.d.o[olpd.d.id];
      }
    }
  } // now merge the rects in diff stack and put the merged rects in wCBST tree
  // printUnmergedFreeRects(context, diffStack.getData().map((o) => o.d));


  const diffStackData = diffStack.getData();
  const diffStackDataLen = diffStackData.length;
  const it = new external_commonjs_IntervalTreeJS_commonjs2_IntervalTreeJS_amd_IntervalTreeJS_root_IntervalTreeJS_["IntervalTreesIterative"]();

  for (let i = 0; i < diffStackDataLen; i++) {
    it.insert({
      low: diffStackData[i].d.rect.y,
      high: diffStackData[i].d.rect.y + diffStackData[i].d.rect.height,
      d: diffStackData[i].d
    });
  }

  assignAdjacentRects(it);
  const {
    mergedRects,
    idCount: lastId1
  } = await mergeFreeRects(diffStack.getData(), idCount);
  const {
    overlappedRects: _overlappedRects,
    completeOverlapped
  } = findOverlapped([...mergedRects, ...Object.values(indirectOverlaps)]);
  const completeOverlappedLen = completeOverlapped.length;

  for (let i = 0; i < completeOverlappedLen; i++) {
    wCBST.remove(completeOverlapped[i].d._rect.width, completeOverlapped[i].d);
  }

  const _overlappedRectsLen = _overlappedRects.length;
  const overlappedRects = new Array(_overlappedRectsLen);
  let count = 0;

  for (let i = 0; i < _overlappedRectsLen; i++) {
    if (!indirectOverlaps[_overlappedRects[i].d.id]) {
      overlappedRects[count++] = _overlappedRects[i];
    }
  }

  const filteredOverlappedRects = filter(overlappedRects); // printMergedFreeRects(context, filteredOverlappedRects.map((o) => o.d));

  return {
    result: filteredOverlappedRects,
    idCount: lastId1
  };
};
// CONCATENATED MODULE: ./src/libs/interaction/itemInteraction.js
/*

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





const resizeItem = async function (index, width, height) {
  const pd = getPositionData(this);
  const e = variables_elements(this);
  const callbacks = getCallbacks(this);
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
    height: height
  };
  const affectedItems = getResizeAffectedItems(this, modifiedItem, index);
  const arranged = await arrangeResize(this, affectedItems, modifiedItem.y + modifiedItem.height, modifiedItem.x + modifiedItem.width);
  setPositionData(this, mpd);
  e.$limberGridViewItems[index].style.width = `${mpd[index].width}px`;
  e.$limberGridViewItems[index].style.height = `${mpd[index].height}px`;
  const arrangedArr = Object.keys(arranged);
  const len = arrangedArr.length;

  for (let i = 0; i < len; i++) {
    const key = arrangedArr[i];
    const item = arranged[key];
    e.$limberGridViewItems[key].style.transform = `translate(${item.x}px, ${item.y}px)`;
  }

  if (callbacks.resizeComplete) {
    callbacks.resizeComplete(index, width, height, arrangedArr);
  }
};
const resizeItemDemo = async function (index, width, height) {
  const pd = getPositionData(this);
  const e = variables_elements(this);
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
    height: height
  };
  const affectedItems = getResizeAffectedItems(this, modifiedItem, index);
  const arranged = await arrangeResize(this, affectedItems, modifiedItem.y + modifiedItem.height, modifiedItem.x + modifiedItem.width, true);
  const arrangedArr = Object.keys(arranged);
  const len = arrangedArr.length;

  for (let i = 0; i < len; i++) {
    const key = arrangedArr[i];
    const item = arranged[key];
    e.$limberGridViewItems[key].style.transform = `translate(${item.x}px, ${item.y}px)`;
  }
};
const moveItem = async function (index, toX, toY) {
  const pd = getPositionData(this);
  const e = variables_elements(this);
  const callbacks = getCallbacks(this);
  const publicConstants = constants_publicConstants(this);
  index = parseInt(index);

  if (publicConstants.LATCH_MOVED_ITEM) {
    // change toX & toY to top left of the overlapping item
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
    height: pd[index].height
  };
  const affectedItems = getMoveAffectedItems(this, modifiedItem, index);
  const arranged = await arrangeMove(this, affectedItems, toY, toY + pd[index].height);
  setPositionData(this, mpd);
  e.$limberGridViewItems[index].classList.remove("limberGridViewItemDemo");
  e.$limberGridViewItems[index].style.transform = `translate(${mpd[index].x}px, ${mpd[index].y}px)`;

  if (!publicConstants.ANIMATE_MOVED_ITEM) {
    // below two statements needs its own flag maybe "ANIMATE_MOVED_ITEM"
    e.$limberGridViewItems[index].style.transition = "none";
    setTimeout(() => {
      e.$limberGridViewItems[index].style.transition = "";
    }, publicConstants.ANIMATE_TIME);
  }

  const arrangedArr = Object.keys(arranged);
  const len = arrangedArr.length;

  for (let i = 0; i < len; i++) {
    const key = arrangedArr[i];
    const item = arranged[key];
    e.$limberGridViewItems[key].style.transform = `translate(${item.x}px, ${item.y}px)`;
  }

  if (callbacks.resizeComplete) {
    callbacks.moveComplete(index, toX, toY, arrangedArr);
  }
};
const moveItemDemo = async function (index, toX, toY) {
  const pd = getPositionData(this);
  const e = variables_elements(this);
  const publicConstants = constants_publicConstants(this);
  index = parseInt(index);

  if (publicConstants.LATCH_MOVED_ITEM) {
    // change toX & toY to top left of the overlapping item
    const adjustedPt = movePointAdjust(this, toX, toY);
    toX = adjustedPt.toX;
    toY = adjustedPt.toY;

    if (!isNaN(adjustedPt.overlappedItemIndex)) {
      e.$limberGridViewMoveGuide.style.transform = "translate(" + toX + "px, " + toY + "px)";
      e.$limberGridViewMoveGuide.classList.add("limber-grid-view-move-guide-active");
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
    height: pd[index].height
  };
  const affectedItems = getMoveAffectedItems(this, modifiedItem, index);
  const arranged = await arrangeMove(this, affectedItems, toY, toY + pd[index].height, true);
  e.$limberGridViewItems[index].classList.add("limberGridViewItemDemo");
  const arrangedArr = Object.keys(arranged);
  const len = arrangedArr.length;

  for (let i = 0; i < len; i++) {
    const key = arrangedArr[i];
    const item = arranged[key];
    e.$limberGridViewItems[key].style.transform = `translate(${item.x}px, ${item.y}px)`;
  }
};
// CONCATENATED MODULE: ./src/store/variables/bindedFunctions.js
/*

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
const getBindedFunctions = context => {
  return context.store.variables.bindedFunctions;
};
// CONCATENATED MODULE: ./src/store/variables/eventSpecific.js
/*

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










const onItemMouseDown = function (event) {
  const e = variables_elements(this);
  const publicConstants = constants_publicConstants(this);
  const pd = getPositionData(this);
  const iiv = getItemInteractionVars(this);
  const bf = getBindedFunctions(this);

  if (event.which !== 1) {
    return;
  }

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
  } else if (iiv.userActionData.type === "resize") {
    iiv.mouseDownCancel = false;
    iiv.mouseDownTimerComplete = true;
    e.$limberGridView.addEventListener("mousemove", bf.onItemMouseMove);
    document.addEventListener("mouseup", bf.onItemMouseUp);
    document.addEventListener("contextmenu", bf.onItemContextMenu);
    iiv.userActionData.itemX = pd[iiv.userActionData.itemIndex].x;
    iiv.userActionData.itemY = pd[iiv.userActionData.itemIndex].y;
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

  if (event.which !== 0) {
    onItemTouchContextMenu.call(this, event);
    return;
  }

  const touchPosOnLimberGridItem = calculateTouchPosOnItem(this, event);

  if (touchPosOnLimberGridItem === false) {
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
  } else if (iiv.userActionData.type === "resize") {
    iiv.touchHoldCancel = false;
    iiv.touchHoldTimerComplete = true;
    e.$limberGridView.addEventListener("touchmove", bf.onItemTouchMove);
    document.addEventListener("touchend", bf.onItemTouchEnd);
    document.addEventListener("touchcancel", bf.onItemTouchCancel);
    document.addEventListener("contextmenu", bf.onItemTouchContextMenu);
    iiv.userActionData.itemX = pd[iiv.userActionData.itemIndex].x;
    iiv.userActionData.itemY = pd[iiv.userActionData.itemIndex].y;
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

      if (mousePositionOnLimberGrid !== false) {
        const yMousePosition = mousePositionOnLimberGrid.y;
        adjustHeight(this, yMousePosition);
        iiv.showMoveDemoTimeOutVariable = setTimeout(showMoveDemo.bind(this, iiv.userActionData.itemIndex, mousePositionOnLimberGrid), publicConstants.DEMO_WAIT_TIME);
      }
    } else {
      loadOnMoveState(this, iiv.userActionData, event, "resize");
      clearTimeout(iiv.showResizeDemoTimeOutVariable);
      const scrollTop = e.$limberGridView.scrollTop;
      const scrollLeft = e.$limberGridView.scrollLeft;
      const x = iiv.userActionData.itemX;
      const y = iiv.userActionData.itemY;
      const newWidth = event.offsetX - x + scrollLeft - privateConstants.PADDING_LEFT;
      const newHeight = event.offsetY - y + scrollTop - privateConstants.PADDING_TOP;
      iiv.userActionData.newWidth = newWidth;
      iiv.userActionData.newHeight = newHeight;
      const yMousePosition = event.offsetY + scrollTop;
      adjustHeight(this, yMousePosition);

      if (newWidth > 0 && newHeight > 0) {
        e.$limberGridViewPseudoItem.style.width = newWidth + "px";
        e.$limberGridViewPseudoItem.style.height = newHeight + "px";
        e.$limberGridViewPseudoItem.setAttribute("data-after", `w: ${parseInt(newWidth)}px, h: ${parseInt(newHeight)}px`);
      }

      iiv.showResizeDemoTimeOutVariable = setTimeout(showResizeDemo.bind(this, iiv.userActionData.itemIndex, newWidth, newHeight), publicConstants.DEMO_WAIT_TIME);
    }
  } else {
    iiv.mouseDownCancel = true;
    onItemContextMenu.call(this, event); // canceling mouseHold
  }

  event.preventDefault();
  event.stopPropagation();
};
const onItemTouchMove = function (event) {
  const e = variables_elements(this);
  const privateConstants = constants_privateConstants(this);
  const publicConstants = constants_publicConstants(this);
  const iiv = getItemInteractionVars(this);

  if (iiv.touchHoldTimerComplete === true && event.touches.length === 1) {
    if (iiv.userActionData.type === "move") {
      loadOnMoveState(this, iiv.userActionData, event, "move");
      clearTimeout(iiv.showMoveDemoTimeOutVariable);
      const touchPositionOnLimberGrid = calculateTouchPosOnDesk(this, event);

      if (touchPositionOnLimberGrid !== false) {
        const scrollTop = e.$limberGridView.scrollTop;
        const scrollLeft = e.$limberGridView.scrollLeft;
        const limberGridViewBoundingClientRect = e.$limberGridView.getBoundingClientRect();
        const limberGridViewWidthVisibleWidth = e.$limberGridView.offsetWidth - limberGridViewBoundingClientRect.left;
        const limberGridViewHeightVisibleHeight = e.$limberGridView.offsetHeight - limberGridViewBoundingClientRect.top;
        const limberGridViewOnVisibleAreaX = touchPositionOnLimberGrid.x + privateConstants.PADDING_LEFT - scrollLeft;
        const limberGridViewOnVisibleAreaY = touchPositionOnLimberGrid.y + privateConstants.PADDING_TOP - scrollTop;
        const yTouchPosition = touchPositionOnLimberGrid.y;
        adjustHeight(this, yTouchPosition);
        const programScrolled = adjustScroll(this, limberGridViewOnVisibleAreaY, limberGridViewHeightVisibleHeight);

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
      const newWidth = touchPositionOnLimberGrid.x - x;
      const newHeight = touchPositionOnLimberGrid.y - y;

      if (touchPositionOnLimberGrid !== false) {
        iiv.userActionData.newWidth = newWidth;
        iiv.userActionData.newHeight = newHeight;

        if (newWidth > 0 && newHeight > 0) {
          e.$limberGridViewPseudoItem.style.width = newWidth + "px";
          e.$limberGridViewPseudoItem.style.height = newHeight + "px";
          e.$limberGridViewPseudoItem.setAttribute("data-after", `w: ${parseInt(newWidth)}px, h: ${parseInt(newHeight)}px`);
        }
      }

      if (touchPositionOnLimberGrid !== false) {
        const scrollTop = e.$limberGridView.scrollTop;
        const scrollLeft = e.$limberGridView.scrollLeft;
        const limberGridViewBoundingClientRect = e.$limberGridView.getBoundingClientRect();
        const limberGridViewWidthVisibleWidth = e.$limberGridView.offsetWidth - limberGridViewBoundingClientRect.left;
        const limberGridViewHeightVisibleHeight = e.$limberGridView.offsetHeight - limberGridViewBoundingClientRect.top;
        const limberGridViewOnVisibleAreaX = touchPositionOnLimberGrid.x + privateConstants.PADDING_LEFT - scrollLeft;
        const limberGridViewOnVisibleAreaY = touchPositionOnLimberGrid.y + privateConstants.PADDING_TOP - scrollTop;
        const yTouchPosition = touchPositionOnLimberGrid.y;
        adjustHeight(this, yTouchPosition);
        const programScrolled = adjustScroll(this, limberGridViewOnVisibleAreaY, limberGridViewHeightVisibleHeight);

        if (programScrolled !== true) {
          iiv.showResizeDemoTimeOutVariable = setTimeout(showResizeDemo.bind(this, iiv.userActionData.itemIndex, newWidth, newHeight), publicConstants.DEMO_WAIT_TIME);
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
        if (mousePositionOnLimberGrid !== false) {
          await moveItem.call(this, iiv.userActionData.itemIndex, mousePositionOnLimberGrid.x, mousePositionOnLimberGrid.y);
          updatedCoordinates.x = mousePositionOnLimberGrid.x;
          updatedCoordinates.y = mousePositionOnLimberGrid.y;
        } else {
          throw "Mouse position outside grid area.";
        }
      } catch (error) {
        console.error(error);
        revertShowMoveOrResizeDemo(this);
      }
    } else {
      try {
        var newWidth = iiv.userActionData.newWidth;
        var newHeight = iiv.userActionData.newHeight;
        await resizeItem.call(this, iiv.userActionData.itemIndex, newWidth, newHeight);
      } catch (error) {
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
        if (touchPositionOnLimberGrid !== false) {
          await moveItem.call(this, iiv.userActionData.itemIndex, touchPositionOnLimberGrid.x, touchPositionOnLimberGrid.y);
          updatedCoordinates.x = touchPositionOnLimberGrid.x;
          updatedCoordinates.y = touchPositionOnLimberGrid.y;
        } else {
          throw "Touch position outside grid area.";
        }
      } catch (error) {
        console.error(error);
        revertShowMoveOrResizeDemo(this);
      }
    } else {
      try {
        var newWidth = iiv.userActionData.newWidth;
        var newHeight = iiv.userActionData.newHeight;
        await resizeItem.call(this, iiv.userActionData.itemIndex, newWidth, newHeight);
      } catch (error) {
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
    e.$pseudoContainerItem.classList.remove("limber-grid-view-pseudo-container-item-move-allow");
    e.$pseudoContainerItem.classList.add("limber-grid-view-pseudo-container-item-move-disallow");
  }
};
const showResizeDemo = async function (index, width, height) {
  const e = variables_elements(this);

  try {
    await resizeItemDemo.call(this, index, width, height);
    e.$limberGridViewPseudoItem.classList.add("limber-grid-view-pseudo-item-resize-allow");
  } catch (error) {
    console.error(error);
    e.$limberGridViewPseudoItem.classList.add("limber-grid-view-pseudo-item-resize-disallow");
  }
};
const revertShowMoveOrResizeDemo = function (context) {
  const e = variables_elements(context);
  const pd = getPositionData(context);
  const len = e.$limberGridViewItems.length;

  for (let i = 0; i < len; i++) {
    e.$limberGridViewItems[i].style.transform = `translate(${pd[i].x}px, ${pd[i].y}px)`;
  }
};
// CONCATENATED MODULE: ./src/libs/eventHandlerLib/deskInteractionUtils.js
/*

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


const loadInitState = context => {
  const e = variables_elements(context);
  const publicConstants = constants_publicConstants(context);
  e.$body.classList.add("limber-grid-view-body-tag-state-editing", "limber-grid-view-body-tag-state-editing-adding-cutting");
  const len = e.$limberGridViewItems.length;

  for (let i = 0; i < len; i++) {
    e.$limberGridViewItems[i].classList.add("limber-grid-view-item-resizing-state");
  }

  for (let i = 0; i < len; i++) {
    e.$limberGridViewPseudoItem.classList.add("limber-grid-view-pseudo-item-resizing-state");
  }

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
    e.$limberGridViewItems[i].classList.remove("limber-grid-view-item-resizing-state");
    e.$limberGridViewPseudoItem.classList.remove("limber-grid-view-pseudo-item-resizing-state");
  }

  e.$limberGridViewAddCutGuide.classList.remove("limber-grid-view-add-cut-guide-active", "limber-grid-view-add-cut-guide-cut-mode", "limber-grid-view-add-cut-guide-add-allow", "limber-grid-view-add-cut-guide-add-disallow");
  e.$limberGridViewHeightAdjustGuide.style.height = 0 + "px";
  e.$limberGridViewHeightAdjustGuide.classList.remove("limber-grid-view-height-adjust-guide-active");
  e.$limberGridViewTouchHoldGuide.classList.remove("limber-grid-view-touch-hold-guide-active");
};
// CONCATENATED MODULE: ./src/libs/eventHandlerLib/initializers.js
/*

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

  if (options.editable === true) {
    if (!isMobile(this)) {
      if (options.enableInteractiveAddAndCut !== false) {
        e.$limberGridView.addEventListener("mousedown", bf.onDeskMouseDown);

        if (options.enableTouchInteraction !== false) {
          e.$limberGridView.addEventListener("touchstart", bf.onDeskTouchStart);
        }
      }
    }

    var len = e.$limberGridViewItems.length;

    for (var i = 0; i < len; i++) {
      if (!isMobile(this)) {
        e.$limberGridViewItems[i].addEventListener("mousedown", bf.onItemMouseDown);

        if (options.enableTouchInteraction !== false) {
          e.$limberGridViewItems[i].addEventListener("touchstart", bf.onItemTouchStart);
        }
      }

      if (callbacks.onItemClickCallback) {
        e.$limberGridViewItems[i].addEventListener("click", bf.onItemClick);
      }
    }
  }
};
const unInitializeEvents = function () {
  const options = variables_options(this);
  const e = variables_elements(this);
  const bf = getBindedFunctions(this);

  if (options.editable === true) {
    if (e.$limberGridView !== undefined) {
      e.$limberGridView.removeEventListener("mousedown", bf.onDeskMouseDown);
      e.$limberGridView.removeEventListener("touchstart", bf.onDeskTouchStart);
    }

    if (e.$limberGridViewItems !== undefined) {
      const len = e.$limberGridViewItems.length;

      for (let i = 0; i < len; i++) {
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

  if (e.$limberGridViewItems !== undefined) {
    const len = e.$limberGridViewItems.length;

    for (let i = 0; i < len; i++) {
      e.$limberGridViewItems[i].addEventListener("mousedown", bf.onItemMouseDown);
      e.$limberGridViewItems[i].addEventListener("touchstart", bf.onItemTouchStart);
    }
  }
};
const unInitializeItemTouchEvents = function () {
  const e = variables_elements(this);
  const bf = getBindedFunctions(this);

  if (e.$limberGridViewItems !== undefined) {
    const len = e.$limberGridViewItems.length;

    for (let i = 0; i < len; i++) {
      e.$limberGridViewItems[i].removeEventListener("mousedown", bf.onItemMouseDown);
      e.$limberGridViewItems[i].removeEventListener("touchstart", bf.onItemTouchStart);
    }
  }
};
// CONCATENATED MODULE: ./src/libs/renderers/rendererUtils.js
/*

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




const checkPositionData = pd => {
  if (Array.isArray(pd)) {
    const len = pd.length;

    for (let i = 0; i < len; i++) {
      if (!pd[i] || isNaN(pd[i].x) || pd[i].x < 0 || isNaN(pd[i].y) || pd[i].y < 0 || isNaN(pd[i].height) || pd[i].height <= 0 || isNaN(pd[i].width) || pd[i].width <= 0) {
        return false;
      }

      if (!isValidRectCoForm(getCoordinates(pd[i]))) {
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
  let item;
  const len = pd.length;

  for (let i = 0; i < len; i++) {
    item = arrangeUtils_getItemDimenWithMargin(privateConstants.MARGIN, pd[i]);

    if (item.y + item.height > max) {
      max = item.y + item.height;
    }
  }

  return max;
};
// CONCATENATED MODULE: ./src/libs/renderers/renderers.js
/*

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

  const nodes = new Array(len);
  let spd;

  if (!isMobile(context)) {
    let classList = "limber-grid-view-item";

    if (options.editable === true) {
      classList = "limber-grid-view-item limber-grid-view-item-editable";
    }

    for (let i = 0; i < len; i++) {
      pd[i].x *= WIDTH_SCALE_FACTOR;
      pd[i].y *= WIDTH_SCALE_FACTOR;
      pd[i].width *= WIDTH_SCALE_FACTOR;
      pd[i].height *= WIDTH_SCALE_FACTOR;
      const itemEl = document.createElement("div");
      itemEl.setAttribute("class", classList);
      itemEl.setAttribute("data-index", i);
      itemEl.style.transform = `translate(${pd[i].x}px, ${pd[i].y}px)`;
      itemEl.style.width = `${pd[i].width}px`;
      itemEl.style.height = `${pd[i].height}px`;
      nodes[i] = itemEl;
    }
  } else {
    const classList = "limber-grid-view-item limber-grid-view-item-mobile-view";
    spd = getSerializedPositionData(pd);

    for (let i = 0; i < len; i++) {
      pd[i].x *= WIDTH_SCALE_FACTOR;
      pd[i].y *= WIDTH_SCALE_FACTOR;
      pd[i].width *= WIDTH_SCALE_FACTOR;
      pd[i].height *= WIDTH_SCALE_FACTOR;
      spd[i].width = privateConstants.WIDTH;
      spd[i].height = privateConstants.WIDTH / publicConstants.MOBILE_ASPECT_RATIO;
      const itemEl = document.createElement("div");
      itemEl.setAttribute("class", classList);
      itemEl.setAttribute("data-index", spd[i].index);
      itemEl.style.width = `${spd[i].width}px`;
      itemEl.style.height = `${spd[i].height}px`;
      nodes[i] = itemEl;
    }
  }

  const itemsLen = e.$limberGridViewItems.length;

  for (let i = 0; i < itemsLen; i++) {
    e.$limberGridView.removeChild(e.$limberGridViewItems[i]);
  }

  for (let i = 0; i < len; i++) {
    e.$limberGridView.appendChild(nodes[i]);
  }

  for (let i = 0; i < len; i++) {
    const itemEl = nodes[i];

    if (!isMobile(context)) {
      const renderData = callbacks.renderContent(i, pd[i].width, pd[i].height);
      renderItemContent(context, renderData, itemEl);
    } else {
      const renderData = callbacks.renderContent(i, spd[i].width, spd[i].height);
      renderItemContent(context, renderData, itemEl);
    }
  }

  set$limberGridViewItems(context, [...e.$limberGridView.getElementsByClassName("limber-grid-view-item")]);
  initializeEvents.call(context);

  if (callbacks.renderComplete) {
    callbacks.renderComplete();
  }
};
const renderItem = function (context, index) {
  const e = variables_elements(context);
  const callbacks = getCallbacks(context);
  const pd = getPositionData(context);
  const renderData = callbacks.renderContent(index, pd[index].width, pd[index].height);
  renderItemContent(context, renderData, e.$limberGridViewItems[index]);

  if (callbacks.renderComplete) {
    callbacks.renderComplete(index);
  }
};
const addItem = async function (context, item) {
  const options = variables_options(context);
  const e = variables_elements(context);
  const callbacks = getCallbacks(context);
  const privateConstants = constants_privateConstants(context);
  const publicConstants = constants_publicConstants(context);
  unInitializeEvents.call(context);

  try {
    let allow = false;

    if (item.x && item.y && item.width && item.height) {
      allow = addItemAllowCheck(context, item.x, item.y, item.width, item.height);

      if (allow) {
        const pd = getPositionData(context);
        setModifiedPositionData(context, pd);
        const mpd = getModifiedPositionData(context);
        mpd.push(item);
        setPositionData(context, mpd);
      }
    } else if (item.width && item.height && !item.x && !item.y) {
      const pd = getPositionData(context);
      setModifiedPositionData(context, pd);
      const mpd = getModifiedPositionData(context);
      const bottomY = getPdBottomMax(context);
      mpd.push({
        x: undefined,
        y: undefined,
        width: item.width,
        height: item.height
      });
      const arranged = await arrangeFromHeight(context, [mpd.length - 1], bottomY);
      setPositionData(context, mpd);
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
        classList = "limber-grid-view-item limber-grid-view-item-editable";
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

    e.$limberGridView.appendChild(itemEl);
    renderItemContent(context, renderData, itemEl);
    set$limberGridViewItems(context, [...e.$limberGridView.getElementsByClassName("limber-grid-view-item")]);

    if (callbacks.addComplete) {
      callbacks.addComplete(index);
    }
  } catch (error) {
    console.error(error);
  }

  initializeEvents.call(context);
};
const removeItem = function (context, index) {
  const e = variables_elements(context);
  const callbacks = getCallbacks(context);
  const pd = getPositionData(context);
  unInitializeEvents.call(context);
  pd.splice(index, 1);

  if (callbacks.removePlugin) {
    callbacks.removePlugin(e.$limberGridViewItems[index]);
  }

  e.$limberGridView.removeChild(e.$limberGridViewItems[index]);
  set$limberGridViewItems(context, [...e.$limberGridView.getElementsByClassName("limber-grid-view-item")]);
  const len = pd.length;

  for (let i = 0; i < len; i++) {
    e.$limberGridViewItems[i].setAttribute("data-index", i);
  }

  if (callbacks.removeComplete) {
    callbacks.removeComplete(index, e.$limberGridViewItems[index]);
  }

  initializeEvents.call(context);
};
const getSerializedPositionData = pd => {
  const len = pd.length;
  const arr = new Array(len);

  for (let i = 0; i < len; i++) {
    arr[i] = { ...pd[i]
    };
    arr[i].index = i;
  }

  return arr.sort((a, b) => {
    if (a.y === b.y) {
      return a.x - b.x;
    }

    return a.y - b.y;
  });
};
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
// CONCATENATED MODULE: ./src/libs/eventHandlerLib/deskInteraction.js
/*

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

  if (event.which !== 1) {
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

  if (event.which !== 0) {
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
    var touchPositionOnLimberGrid = calculateTouchPosOnDesk(this, event);
    var x = touchPositionOnLimberGrid.x;
    var y = touchPositionOnLimberGrid.y;
    dkiv.userActionData = {
      type: "add",
      addPositionX: x,
      addPositionY: y
    };

    var removeAddItemOnTouchHoldGuideFunction = function () {
      e.$limberGridViewTouchHoldGuide.classList.remove("limber-grid-view-touch-hold-guide-active");
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
    const yMousePosition = event.offsetY + scrollTop;
    adjustHeight(this, yMousePosition);

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
  const e = variables_elements(this);
  const privateConstants = constants_privateConstants(this);
  const publicConstants = constants_publicConstants(this);
  const dkiv = getDeskInteractionVars(this);

  if (dkiv.tapHoldTimerComplete === true && event.touches.length === 1) {
    e.$limberGridViewAddCutGuide.classList.remove("limber-grid-view-add-cut-guide-allow", "limber-grid-view-add-cut-guide-disallow");
    const scrollTop = e.$limberGridView.scrollTop;
    const scrollLeft = e.$limberGridView.scrollLeft;
    const x = dkiv.userActionData.addPositionX;
    const y = dkiv.userActionData.addPositionY;
    const touchPositionOnLimberGrid = calculateTouchPosOnDesk(this, event);
    const newWidth = touchPositionOnLimberGrid.x - x;
    const newHeight = touchPositionOnLimberGrid.y - y;

    if (touchPositionOnLimberGrid !== false) {
      dkiv.userActionData.newWidth = newWidth;
      dkiv.userActionData.newHeight = newHeight;

      if (newWidth > 0 && newHeight > 0) {
        e.$limberGridViewAddCutGuide.style.width = newWidth + "px";
        e.$limberGridViewAddCutGuide.style.height = newHeight + "px";
        e.$limberGridViewAddCutGuide.setAttribute("data-after", `w: ${parseInt(newWidth)}px, h: ${parseInt(newHeight)}px`);
      }
    }

    if (touchPositionOnLimberGrid !== false) {
      const limberGridViewBoundingClientRect = e.$limberGridView.getBoundingClientRect();
      const limberGridViewWidthVisibleWidth = e.$limberGridView.offsetWidth - limberGridViewBoundingClientRect.left;
      const limberGridViewHeightVisibleHeight = e.$limberGridView.offsetHeight - limberGridViewBoundingClientRect.top;
      const limberGridViewOnVisibleAreaX = touchPositionOnLimberGrid.x + privateConstants.PADDING_LEFT - scrollLeft;
      const limberGridViewOnVisibleAreaY = touchPositionOnLimberGrid.y + privateConstants.PADDING_TOP - scrollTop;
      const yTouchPosition = touchPositionOnLimberGrid.y;
      adjustHeight(this, yTouchPosition);
      const programScrolled = adjustScroll(this, limberGridViewOnVisibleAreaY, limberGridViewHeightVisibleHeight);

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
  const dkiv = getDeskInteractionVars(this);
  clearTimeout(dkiv.addItemAllowCheckTimeOutVariable);
  clearTimeout(dkiv.longTouchCheck);

  if (dkiv.tapHoldTimerComplete === true && event.touches.length === 0) {
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
// CONCATENATED MODULE: ./src/store/flags/flagDetails.js
/*

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
const DESK_INTERACTION_MODE = {
  ADD: true,
  CUTSPACE: true
};
const LATCH_MOVED_ITEM = {
  true: true,
  false: true
};
// CONCATENATED MODULE: ./src/initializers/initializers.js
/*

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









const init = async function (context, isResize, autoArrange) {
  const e = variables_elements(context);
  const privateConstants = constants_privateConstants(context);
  const pd = getPositionData(context);

  if (autoArrange === true || !checkPositionData(pd)) {
    console.warn("Auto-arranging");
    setModifiedPositionData(context, pd);
    const mpd = getModifiedPositionData(context);
    const len = pd.length;
    const arr = new Array(len);

    for (let i = 0; i < len; i++) {
      arr[i] = i;
      mpd[i].x = undefined;
      mpd[i].y = undefined;
      pd[i].x /= privateConstants.WIDTH_SCALE_FACTOR;
      pd[i].y /= privateConstants.WIDTH_SCALE_FACTOR;
      pd[i].width /= privateConstants.WIDTH_SCALE_FACTOR;
      pd[i].height /= privateConstants.WIDTH_SCALE_FACTOR;
    }

    setWidth(context, privateConstants.GRID_WIDTH);
    setHeight(context, privateConstants.GRID_HEIGHT);
    setMargin(context, privateConstants.GRID_MARGIN);
    setWidthScaleFactor(context, 1);
    setDefinedMinHeightAndWidth(context, privateConstants.MIN_HEIGHT_AND_WIDTH);
    await arrangeFromHeight(context, arr, privateConstants.MARGIN);
    setPositionData(context, mpd);
  }

  setPaddingLeft(context, parseInt(window.getComputedStyle(e.$limberGridView, null).getPropertyValue("padding-left")));
  setPaddingRight(context, parseInt(window.getComputedStyle(e.$limberGridView, null).getPropertyValue("padding-right")));
  setPaddingTop(context, parseInt(window.getComputedStyle(e.$limberGridView, null).getPropertyValue("padding-top")));
  setPaddingBottom(context, parseInt(window.getComputedStyle(e.$limberGridView, null).getPropertyValue("padding-bottom")));
  setWidth(context, e.$limberGridView.clientWidth - privateConstants.PADDING_LEFT - privateConstants.PADDING_RIGHT);
  setHeight(context, e.$limberGridView.clientHeight - privateConstants.PADDING_TOP - privateConstants.PADDING_BOTTOM);

  if (isResize) {
    // resiet item x, y, width, height; MARGIN, MIN_HEIGHT_AND_WIDTH
    const len = pd.length;

    for (let i = 0; i < len; i++) {
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
};
const initConstantsAndFlags = function (options) {
  var _options$gridData, _options$gridData2, _options$gridData3, _options$gridData4, _options$publicConsta, _options$publicConsta2, _options$publicConsta3, _options$publicConsta4, _options$publicConsta5, _options$publicConsta6, _options$publicConsta7, _options$publicConsta8, _options$publicConsta9, _options$publicConsta10, _options$publicConsta11, _options$publicConsta12, _options$publicConsta13, _options$publicConsta14, _options$publicConsta15;

  // Private Constants BEGIN
  if ((options === null || options === void 0 ? void 0 : (_options$gridData = options.gridData) === null || _options$gridData === void 0 ? void 0 : _options$gridData.WIDTH) && !isNaN(options.gridData.WIDTH)) {
    setGridWidth(this, options.gridData.WIDTH);
  }

  if ((options === null || options === void 0 ? void 0 : (_options$gridData2 = options.gridData) === null || _options$gridData2 === void 0 ? void 0 : _options$gridData2.HEIGHT) && !isNaN(options.gridData.HEIGHT)) {
    setGridHeight(this, options.gridData.HEIGHT);
  }

  if ((options === null || options === void 0 ? void 0 : (_options$gridData3 = options.gridData) === null || _options$gridData3 === void 0 ? void 0 : _options$gridData3.MARGIN) && !isNaN(options.gridData.MARGIN)) {
    setGridMargin(this, options.gridData.MARGIN);
  }

  if ((options === null || options === void 0 ? void 0 : (_options$gridData4 = options.gridData) === null || _options$gridData4 === void 0 ? void 0 : _options$gridData4.MIN_HEIGHT_AND_WIDTH) && !isNaN(options.gridData.MIN_HEIGHT_AND_WIDTH)) {
    setMinHeightAndWidth(this.options.gridData.MIN_HEIGHT_AND_WIDTH);
  } // Private Constants ENDED
  // Public Constants BEGIN


  if ((options === null || options === void 0 ? void 0 : (_options$publicConsta = options.publicConstants) === null || _options$publicConsta === void 0 ? void 0 : _options$publicConsta.mobileAspectRatio) && !isNaN(options.publicConstants.mobileAspectRatio)) {
    setPublicConstantByName(this, "MOBILE_ASPECT_RATIO", options.publicConstants.mobileAspectRatio);
  }

  if ((options === null || options === void 0 ? void 0 : (_options$publicConsta2 = options.publicConstants) === null || _options$publicConsta2 === void 0 ? void 0 : _options$publicConsta2.moveGuideRadius) && !isNaN(options.publicConstants.moveGuideRadius)) {
    setPublicConstantByName(this, "MOVE_GUIDE_RADIUS", options.publicConstants.moveGuideRadius);
  }

  if ((options === null || options === void 0 ? void 0 : (_options$publicConsta3 = options.publicConstants) === null || _options$publicConsta3 === void 0 ? void 0 : _options$publicConsta3.resizeSquareGuideLength) && !isNaN(options.publicConstants.resizeSquareGuideLength)) {
    setPublicConstantByName(this, "RESIZE_SQUARE_GUIDE_LENGTH", options.publicConstants.resizeSquareGuideLength);
  }

  if ((options === null || options === void 0 ? void 0 : (_options$publicConsta4 = options.publicConstants) === null || _options$publicConsta4 === void 0 ? void 0 : _options$publicConsta4.resizeSquareBorderGuideWidth) && !isNaN(options.publicConstants.resizeSquareBorderGuideWidth)) {
    setPublicConstantByName(this, "RESIZE_SQUARE_GUIDE_BORDER_WIDTH", options.publicConstants.resizeSquareBorderGuideWidth);
  }

  if ((options === null || options === void 0 ? void 0 : (_options$publicConsta5 = options.publicConstants) === null || _options$publicConsta5 === void 0 ? void 0 : _options$publicConsta5.autoScrollDistance) && !isNaN(options.publicConstants.autoScrollDistance)) {
    setPublicConstantByName(this, "AUTO_SCROLL_DISTANCE", options.publicConstants.autoScrollDistance);
  }

  if ((options === null || options === void 0 ? void 0 : (_options$publicConsta6 = options.publicConstants) === null || _options$publicConsta6 === void 0 ? void 0 : _options$publicConsta6.autoScrollPoint) && !isNaN(options.publicConstants.autoScrollPoint)) {
    setPublicConstantByName(this, "AUTO_SCROLL_POINT", options.publicConstants.autoScrollPoint);
  }

  if ((options === null || options === void 0 ? void 0 : (_options$publicConsta7 = options.publicConstants) === null || _options$publicConsta7 === void 0 ? void 0 : _options$publicConsta7.moveOrResizeHeightIncrements) && !isNaN(options.publicConstants.moveOrResizeHeightIncrements)) {
    setPublicConstantByName(this, "MOVE_OR_RESIZE_HEIGHT_INCREMENTS", options.publicConstants.moveOrResizeHeightIncrements);
  }

  if ((options === null || options === void 0 ? void 0 : (_options$publicConsta8 = options.publicConstants) === null || _options$publicConsta8 === void 0 ? void 0 : _options$publicConsta8.mouseDownTime) && !isNaN(options.publicConstants.mouseDownTime)) {
    setPublicConstantByName(this, "MOUSE_DOWN_TIME", options.publicConstants.mouseDownTime);
  }

  if ((options === null || options === void 0 ? void 0 : (_options$publicConsta9 = options.publicConstants) === null || _options$publicConsta9 === void 0 ? void 0 : _options$publicConsta9.touchHoldTime) && !isNaN(options.publicConstants.touchHoldTime)) {
    setPublicConstantByName(this, "TOUCH_HOLD_TIME", options.publicConstants.touchHoldTime);
  }

  if ((options === null || options === void 0 ? void 0 : (_options$publicConsta10 = options.publicConstants) === null || _options$publicConsta10 === void 0 ? void 0 : _options$publicConsta10.demoWaitTime) && !isNaN(options.publicConstants.demoWaitTime)) {
    setPublicConstantByName(this, "DEMO_WAIT_TIME", options.publicConstants.demoWaitTime);
  }

  if ((options === null || options === void 0 ? void 0 : (_options$publicConsta11 = options.publicConstants) === null || _options$publicConsta11 === void 0 ? void 0 : _options$publicConsta11.windowResizeWaitTime) && !isNaN(options.publicConstants.windowResizeWaitTime)) {
    setPublicConstantByName(this, "WINDOW_RESIZE_WAIT_TIME", options.publicConstants.windowResizeWaitTime);
  }

  if ((options === null || options === void 0 ? void 0 : (_options$publicConsta12 = options.publicConstants) === null || _options$publicConsta12 === void 0 ? void 0 : _options$publicConsta12.deskInteractionMode) && DESK_INTERACTION_MODE[options.publicConstants.deskInteractionMode]) {
    setPublicConstantByName(this, "DESK_INTERACTION_MODE", options.publicConstants.deskInteractionMode);
  }

  if (typeof (options === null || options === void 0 ? void 0 : (_options$publicConsta13 = options.publicConstants) === null || _options$publicConsta13 === void 0 ? void 0 : _options$publicConsta13.latchMovedItem) === "boolean") {
    setPublicConstantByName(this, "LATCH_MOVED_ITEM", options.publicConstants.latchMovedItem);
  }

  if (typeof (options === null || options === void 0 ? void 0 : (_options$publicConsta14 = options.publicConstants) === null || _options$publicConsta14 === void 0 ? void 0 : _options$publicConsta14.animateMovedItem) === "boolean") {
    setPublicConstantByName(this, "ANIMATE_MOVED_ITEM", options.publicConstants.animateMovedItem);
  }

  if ((options === null || options === void 0 ? void 0 : (_options$publicConsta15 = options.publicConstants) === null || _options$publicConsta15 === void 0 ? void 0 : _options$publicConsta15.animateTime) && !isNaN(options.publicConstants.animateTime)) {
    setPublicConstantByName(this, "ANIMATE_TIME", options.publicConstants.animateTime);
  } // Public Constants ENDED
  // Miscellaneous BEGIN
  // Miscellaneous ENDED

};
const initRender = function () {
  const e = variables_elements(this);
  const options = getOptions(this);
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

  e.$el.innerHTML = `<div class = "limber-grid-view-container"><div class = "limber-grid-view"></div><div class = "limber-grid-view-license"><div class = "limber-grid-view-license-icon">©</div><div class = "limber-grid-view-license-details">LimberGridView Copyright © 2018-2020, Subendra Kumar Sharma. License: GNU General Public License version 3, or (at your option) any later version.</div></div></div>`;
  set$limberGridViewContainer(this, e.$el.getElementsByClassName("limber-grid-view-container")[0]);
  set$limberGridView(this, e.$el.getElementsByClassName("limber-grid-view")[0]);
  const pseudoContainerItem = document.createElement("div");
  const limberGridViewPseudoItem = document.createElement("div");
  const limberGridViewMoveGuide = document.createElement("div"); // thing that shows to if there is a latch on item available on move

  const limberGridViewHeightAdjustGuide = document.createElement("div");
  const limberGridViewAddCutGuide = document.createElement("div"); // desk interaction rect

  const limberGridViewTouchHoldGuide = document.createElement("div"); // touch hold animation

  limberGridViewTouchHoldGuide.innerHTML = "<div></div>";
  pseudoContainerItem.setAttribute("class", "limber-grid-view-pseudo-container-item");
  limberGridViewPseudoItem.setAttribute("class", "limber-grid-view-pseudo-item");
  limberGridViewMoveGuide.setAttribute("class", "limber-grid-view-move-guide");
  limberGridViewHeightAdjustGuide.setAttribute("class", "limber-grid-view-height-adjust-guide");
  limberGridViewAddCutGuide.setAttribute("class", "limber-grid-view-add-cut-guide");
  limberGridViewTouchHoldGuide.setAttribute("class", "limber-grid-view-touch-hold-guide");
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
// CONCATENATED MODULE: ./src/libs/eventHandlerLib/miscellaneous.js
/*

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






const onWindowResize = function (event) {
  const publicConstants = constants_publicConstants(this);
  setTimeout(getBindedFunctions(this).onWindowResizeTimerCallback, publicConstants.WINDOW_RESIZE_WAIT_TIME);
  window.removeEventListener("resize", getBindedFunctions(this).onWindowResize);
};
const onWindowResizeTimerCallback = async function (event) {
  await init(this, true, false);
  render(this);
  const options = variables_options(this);

  if (options.reRenderOnResize !== false) {
    window.addEventListener("resize", getBindedFunctions(this).onWindowResize);
  }
};
const onItemClick = function (event) {
  const callbacks = getCallbacks(this);
  callbacks.onItemClickCallback(event);
};
// CONCATENATED MODULE: ./src/index.js
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















LimberGridView.prototype.constructor = LimberGridView; // ----------------------------------------------------------------------------------------- //
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
        onWindowResizeTimerCallback: onWindowResizeTimerCallback.bind(this)
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
      }
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
        ANIMATE_TIME: 250
      }
    }
  };
};

LimberGridView.prototype.renderItem = function (index) {
  renderItem(this, index);
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
      height: privateConstants.DEFINED_MIN_HEIGHT_AND_WIDTH
    };
  }

  addItem(this, item);
};

LimberGridView.prototype.removeItem = function (index) {
  if (Number.isInteger(index)) {
    removeItem(this, index);
  }
};

LimberGridView.prototype.setIsMobileCheck = function (f) {
  this.options.isMobileCheck = f;
};

/* harmony default export */ var src_1 = __webpack_exports__["default"] = (LimberGridView);

/***/ })
/******/ ]);
});