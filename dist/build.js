(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("stellar-sdk"), require("stellar-ledger-api"));
	else if(typeof define === 'function' && define.amd)
		define(["stellar-sdk", "stellar-ledger-api"], factory);
	else if(typeof exports === 'object')
		exports["stellar-js-utils"] = factory(require("stellar-sdk"), require("stellar-ledger-api"));
	else
		root["stellar-js-utils"] = factory(root["stellar-sdk"], root["stellar-ledger-api"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_41__) {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(7);
var isBuffer = __webpack_require__(24);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = addStylesClient;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__listToStyles__ = __webpack_require__(45);
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = Object(__WEBPACK_IMPORTED_MODULE_0__listToStyles__["a" /* default */])(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = Object(__WEBPACK_IMPORTED_MODULE_0__listToStyles__["a" /* default */])(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = normalizeComponent;
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  scriptExports = scriptExports || {}

  // ES6 modules interop
  var type = typeof scriptExports.default
  if (type === 'object' || type === 'function') {
    scriptExports = scriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(26);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(9);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(9);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(23);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var settle = __webpack_require__(27);
var buildURL = __webpack_require__(29);
var parseHeaders = __webpack_require__(30);
var isURLSameOrigin = __webpack_require__(31);
var createError = __webpack_require__(10);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(32);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (process.env.NODE_ENV !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(33);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(28);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StellarSdk = __webpack_require__(1);

var HorizonServer = function () {
  function HorizonServer(serverURL) {
    var testnet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var serverOptions = arguments[2];

    _classCallCheck(this, HorizonServer);

    this._serverURL = serverURL;
    this._testnet = testnet;

    this._server = new StellarSdk.Server(serverURL, serverOptions);
  }

  _createClass(HorizonServer, [{
    key: 'server',
    value: function server() {
      // this is global, so I set it everytime to be safe
      if (this._testnet) {
        StellarSdk.Network.useTestNetwork();
      } else {
        StellarSdk.Network.usePublicNetwork();
      }

      return this._server;
    }
  }, {
    key: 'testnet',
    value: function testnet() {
      return this._testnet;
    }
  }, {
    key: 'serverURL',
    value: function serverURL() {
      return this._serverURL;
    }
  }]);

  return HorizonServer;
}();

/* harmony default export */ __webpack_exports__["a"] = (HorizonServer);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StellarSdk = __webpack_require__(1);

var StellarWallet = function () {
  function StellarWallet() {
    _classCallCheck(this, StellarWallet);
  }

  _createClass(StellarWallet, [{
    key: 'publicKey',


    // using promise so ledger and user entered have same API
    value: function publicKey() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        if (_this._publicKey) {
          resolve(_this._publicKey);
        }

        if (!_this.usingLedger()) {
          throw new Error('StellarWallet publicKey failed.  Should never get here.');
        }

        _this.ledgerAPI.getPublicKey().then(function (publicKey) {
          _this._publicKey = publicKey;
          resolve(publicKey);
        });
      });
    }

    // if true, alert the user to confirm on device

  }, {
    key: 'usingLedger',
    value: function usingLedger() {
      return this.ledgerAPI !== undefined;
    }
  }, {
    key: 'signTransaction',
    value: function signTransaction(transaction) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        _this2.publicKey().then(function (publicKey) {
          if (_this2.usingLedger()) {
            // tell the caller to display confirm transaction message to user
            if (_this2.confirmCallback) {
              _this2.confirmCallback();
            }

            return _this2.ledgerAPI.signTransaction(publicKey, transaction);
          }
          var sourceKeys = StellarSdk.Keypair.fromSecret(_this2._secret);

          transaction.sign(sourceKeys);

          return transaction;
        }).then(function (signedTx) {
          resolve(signedTx);
        });
      });
    }
  }], [{
    key: 'secret',

    // 'constructor' with secret
    value: function secret(_secret) {
      var result = new StellarWallet();

      result._secret = _secret;
      result._publicKey = StellarSdk.Keypair.fromSecret(_secret).publicKey();

      return result;
    }

    // 'constructor' with ledgerAPI

  }, {
    key: 'ledger',
    value: function ledger(ledgerAPI, confirmCallback) {
      var result = new StellarWallet();
      result.ledgerAPI = ledgerAPI;

      // alert user to confirm transaction on device
      result.confirmCallback = confirmCallback;

      return result;
    }
  }]);

  return StellarWallet;
}();

/* harmony default export */ __webpack_exports__["a"] = (StellarWallet);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StellarSdk = __webpack_require__(1);
var StellarLedger = __webpack_require__(41);
var bip32Path = "44'/148'/0'";

var LedgerAPI = function () {
  function LedgerAPI() {
    var browser = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    _classCallCheck(this, LedgerAPI);

    this.browser = browser;
  }

  _createClass(LedgerAPI, [{
    key: 'createComm',
    value: function createComm() {
      var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (!this.browser) {
        return StellarLedger.comm_node.create_async(timeout, true);
      }

      return StellarLedger.comm.create_async(timeout);
    }
  }, {
    key: 'connectLedger',
    value: function connectLedger(callback) {
      if (!this.browser) {
        this.connectLedgerNode(callback);
      } else {
        this.connectLedgerBrowser(callback);
      }
    }
  }, {
    key: 'connectLedgerNode',
    value: function connectLedgerNode(callback) {
      var _this = this;

      // for node we have to do our own loop to connect
      var doConnect = function doConnect() {
        _this.createComm().then(function (comm) {
          new StellarLedger.Api(comm).connect(function () {
            callback();
          }, function (error) {
            console.log('Error: ' + JSON.stringify(error));

            // keep trying
            setTimeout(doConnect, 1000);
          });
        });
      };
      doConnect();
    }
  }, {
    key: 'connectLedgerBrowser',
    value: function connectLedgerBrowser(callback) {
      this.createComm(Number.MAX_VALUE).then(function (comm) {
        new StellarLedger.Api(comm).connect(function () {
          callback();
        }, function (error) {
          // saw this fail with errorCode:5 once, might need to loop
          console.log('Error: ' + JSON.stringify(error));
        });
      });
    }
  }, {
    key: 'getPublicKey',
    value: function getPublicKey() {
      return this.createComm().then(function (comm) {
        var api = new StellarLedger.Api(comm);

        return api.getPublicKey_async(bip32Path);
      }).then(function (result) {
        return result['publicKey'];
      });
    }
  }, {
    key: 'signTransaction',
    value: function signTransaction(sourceKey, transaction) {
      return this.createComm().then(function (comm) {
        var api = new StellarLedger.Api(comm);

        debugger;
        return api.signTx_async(bip32Path, transaction);
      }).then(function (result) {
        var signature = result['signature'];

        var keyPair = StellarSdk.Keypair.fromPublicKey(sourceKey);
        var hint = keyPair.signatureHint();
        var decorated = new StellarSdk.xdr.DecoratedSignature({
          hint: hint,
          signature: signature
        });

        transaction.signatures.push(decorated);

        return transaction;
      });
    }
  }]);

  return LedgerAPI;
}();

/* harmony default export */ __webpack_exports__["a"] = (LedgerAPI);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PaymentView_vue__ = __webpack_require__(17);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['ping', 'nodeEnv', 'donationPublicKey'],
  components: {
    'donate-view': __WEBPACK_IMPORTED_MODULE_0__PaymentView_vue__["a" /* default */]
  },
  watch: {
    ping: function ping() {
      this.visible = true;
    }
  },
  data: function data() {
    return {
      visible: false
    };
  }
});

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PaymentView_vue__ = __webpack_require__(18);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_477f01bf_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_PaymentView_vue__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(4);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(46)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-477f01bf"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PaymentView_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_477f01bf_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_PaymentView_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_477f01bf_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_PaymentView_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\vue\\PaymentView.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-477f01bf", Component.options)
  } else {
    hotAPI.reload("data-v-477f01bf", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_utils_js__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_LedgerAPI_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_StellarWallet_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__js_HorizonServer_js__ = __webpack_require__(13);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





var StellarSdk = __webpack_require__(1);

/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['nodeEnv', 'donationPublicKey'],
  data: function data() {
    return {
      visible: false,
      destinationPublicKey: '',
      donate: false,
      dialogMode: 'start',
      status: '',
      secretKey: '',
      connected: true,
      xlm: 10,
      showSecret: false,
      browserSupportMessage: '',
      ledgerAPI: null,
      horizon: null
    };
  },

  computed: {
    disableSendLumens: function disableSendLumens() {
      return __WEBPACK_IMPORTED_MODULE_0__js_utils_js__["a" /* default */].strlen(this.secretKey) < 10 || this.xlm < 1;
    },
    headerMessage: function headerMessage() {
      if (this.donate) {
        return 'Your XLM donation is appreciated.';
      }
      return 'Make a payment.';
    }
  },
  created: function created() {
    this.horizon = new __WEBPACK_IMPORTED_MODULE_3__js_HorizonServer_js__["a" /* default */]('https://horizon.stellar.org', false);

    if (__WEBPACK_IMPORTED_MODULE_0__js_utils_js__["a" /* default */].strOK(this.donationPublicKey)) {
      this.donate = true;
      this.destinationPublicKey = this.donationPublicKey;
    }

    if (this.nodeEnv) {
      this.browserSupportMessage = 'Make sure "Browser Support" is disabled';
    } else {
      this.browserSupportMessage = 'Make sure "Browser Support" is enabled';
    }

    this.ledgerAPI = new __WEBPACK_IMPORTED_MODULE_1__js_LedgerAPI_js__["a" /* default */](!this.nodeEnv);
  },

  methods: {
    buttonClick: function buttonClick(id) {
      switch (id) {
        case 'useNano':
          this.dialogMode = 'useNano';
          this.status = '';

          this.connectLedger();
          break;
        case 'useKey':
          this.dialogMode = 'useKey';
          this.status = '';
          break;
        case 'sendWithNano':
          this.sendWithNano();
          break;
        case 'sendWithSecret':
          this.sendWithSecret();
          break;
        default:
          console.log('not handled: ' + id);
          break;
      }
    },
    connectLedger: function connectLedger() {
      var _this = this;

      this.connected = false;

      this.ledgerAPI.connectLedger(function () {
        _this.connected = true;
      }, !this.nodeEnv);
    },
    sendWithNano: function sendWithNano() {
      var _this2 = this;

      var sourceWallet = __WEBPACK_IMPORTED_MODULE_2__js_StellarWallet_js__["a" /* default */].ledger(this.ledgerAPI, function () {
        _this2.status = 'Confirm transaction on Nano...';
      });

      this.sendPayment(sourceWallet);
    },
    sendWithSecret: function sendWithSecret() {
      if (__WEBPACK_IMPORTED_MODULE_0__js_utils_js__["a" /* default */].strOK(this.secretKey)) {
        this.status = 'Please enter your secret key';
      } else {
        this.sendPayment(__WEBPACK_IMPORTED_MODULE_2__js_StellarWallet_js__["a" /* default */].secret(this.secretKey));
      }
    },
    verifyAccounts: function verifyAccounts(stellarWallet, destination) {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        // test if destination exists
        _this3.horizon.server().loadAccount(destination).then(function (destAccount) {
          // proved that destination exists
          // get source public key to test existence
          return stellarWallet.publicKey();
        }).then(function (sourcePublicKey) {
          return _this3.horizon.server().loadAccount(sourcePublicKey);
        }).then(function (sourceAccount) {
          // proved that source and destination exists
          resolve(sourceAccount);
        });
      });
    },
    sendPayment: function sendPayment(sourceWallet) {
      var _this4 = this;

      var destination = this.destinationPublicKey;
      if (!__WEBPACK_IMPORTED_MODULE_0__js_utils_js__["a" /* default */].strOK(destination)) {
        this.status = 'Destination is blank';
        return;
      }

      if (this.xlm < 1) {
        this.status = 'Lumens must be greater than 0';
        return;
      }

      this.status = 'Building transaction...';

      this.verifyAccounts(sourceWallet, destination).then(function (sourceAccount) {
        var transaction = new StellarSdk.TransactionBuilder(sourceAccount).addOperation(StellarSdk.Operation.payment({
          destination: destination,
          asset: StellarSdk.Asset.native(),
          amount: String(_this4.xlm)
        })).build();

        return sourceWallet.signTransaction(transaction);
      }).then(function (signedTransaction) {
        console.log('doing sign: ', JSON.stringify(signedTransaction));

        _this4.status = 'Submitting transaction...';

        return _this4.horizon.server().submitTransaction(signedTransaction);
      }).then(function (response) {
        _this4.status = 'Payment successful!';

        // clear secret key
        _this4.secretKey = '';

        return null;
      }).catch(function (error) {
        _this4.status = 'Error making payment: ' + error;
      });
    }
  }
});

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_Bifrost_js__ = __webpack_require__(54);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['ping', 'params', 'allowHTTP'],
  data: function data() {
    return {
      showPurchase: false,
      purchaseCoin: '',
      progress: 0,
      session: null,
      status: '',
      address: 'loading...',
      publicKey: '',
      secretKey: '',
      visible: false
    };
  },

  watch: {
    ping: function ping() {
      this.visible = true;
    }
  },
  computed: {
    sendMessage: function sendMessage() {
      if (this.purchaseCoin === 'btc') {
        return '<div class="lead">Send Bitcoin <strong>testnet</strong> BTC to the following address:</div>';
      } else {
        return '<div class="lead">Send Ropsten <strong>testnet</strong> ETH to the following address:</div>';
      }
    }
  },
  methods: {
    initBifrost: function initBifrost() {
      var opts = {};

      if (this.allowHTTP) {
        opts = {
          allowHttp: true
        };
      }
      this.session = new __WEBPACK_IMPORTED_MODULE_0__js_Bifrost_js__["e" /* Session */](this.params, opts); // ### for testing, allowHttp
    },
    startBitcoin: function startBitcoin() {
      var _this = this;

      this.showPurchase = true;
      this.purchaseCoin = 'btc';
      this.initBifrost();

      this.session.startBitcoin(this.onEvent).then(function (result) {
        _this.setStatus('Waiting for a transaction...', 10);
        _this.address = result.address;
        _this.publicKey = result.keypair.publicKey();
        _this.secretKey = result.keypair.secret();
      });
    },
    startEthereum: function startEthereum() {
      var _this2 = this;

      this.showPurchase = true;
      this.purchaseCoin = 'eth';
      this.initBifrost();

      this.session.startEthereum(this.onEvent).then(function (result) {
        _this2.setStatus('Waiting for a transaction...', 10);
        _this2.address = result.address;
        _this2.publicKey = result.keypair.publicKey();
        _this2.secretKey = result.keypair.secret();
      });
    },
    setStatus: function setStatus(status, progress) {
      this.progress = progress;
      this.status = status;
    },
    onEvent: function onEvent(event, data) {
      switch (event) {
        case __WEBPACK_IMPORTED_MODULE_0__js_Bifrost_js__["f" /* TransactionReceivedEvent */]:
          this.setStatus('Transaction received, creating account...', 20);
          break;
        case __WEBPACK_IMPORTED_MODULE_0__js_Bifrost_js__["a" /* AccountCreatedEvent */]:
          this.setStatus('Account created, creating trust lines...', 40);
          break;
        case __WEBPACK_IMPORTED_MODULE_0__js_Bifrost_js__["g" /* TrustLinesCreatedEvent */]:
          this.setStatus('Trust lines created, waiting for tokens...', 60);
          break;
        case __WEBPACK_IMPORTED_MODULE_0__js_Bifrost_js__["b" /* AccountCreditedEvent */]:
          this.setStatus('Account credited, exchanging...', 80);
          break;
        case __WEBPACK_IMPORTED_MODULE_0__js_Bifrost_js__["d" /* PurchasedEvent */]:
          this.setStatus('Congrats! TOKE purchased.', 100);
          break;
        case __WEBPACK_IMPORTED_MODULE_0__js_Bifrost_js__["c" /* ErrorEvent */]:
          this.setStatus('Error!', 0);
          console.log(JSON.stringify(data));
          break;
        default:
          this.setStatus('default swtich reached!', 0);
          break;
      }
    },
    buttonClick: function buttonClick(id) {
      switch (id) {
        case 'test':
          this.test();
          break;
        case 'bitcoin':
          this.startBitcoin();
          break;
        case 'ethereum':
          this.startEthereum();
          break;
        case 'back':
          this.showPurchase = false;
          break;
        default:
          console.log('no button with that name');
          break;
      }
    }
  }
});

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['title', 'help', 'showPrint'],
  computed: {
    tooltip: function tooltip() {
      if (this.help) {
        return 'Help';
      }
      return 'Close';
    },
    icon: function icon() {
      return this.help ? 'help_outline' : 'close';
    }
  },
  methods: {
    buttonClick: function buttonClick(buttonID) {
      this.$emit(buttonID);
    }
  }
});

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_js_StellarAPI_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_js_HorizonServer_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_js_StellarWallet_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_js_LedgerAPI_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_vue_PaymentDialog_vue__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_vue_PaymentView_vue__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_vue_BuyTokenDialog_vue__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_vue_DialogTitleBar_vue__ = __webpack_require__(56);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "StellarAPI", function() { return __WEBPACK_IMPORTED_MODULE_0__src_js_StellarAPI_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "HorizonServer", function() { return __WEBPACK_IMPORTED_MODULE_1__src_js_HorizonServer_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentDialog", function() { return __WEBPACK_IMPORTED_MODULE_4__src_vue_PaymentDialog_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentView", function() { return __WEBPACK_IMPORTED_MODULE_5__src_vue_PaymentView_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DialogTitleBar", function() { return __WEBPACK_IMPORTED_MODULE_7__src_vue_DialogTitleBar_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "BuyTokenDialog", function() { return __WEBPACK_IMPORTED_MODULE_6__src_vue_BuyTokenDialog_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "StellarWallet", function() { return __WEBPACK_IMPORTED_MODULE_2__src_js_StellarWallet_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "LedgerAPI", function() { return __WEBPACK_IMPORTED_MODULE_3__src_js_LedgerAPI_js__["a"]; });











/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StellarSdk = __webpack_require__(1);


var StellarAPI = function () {
  function StellarAPI(horizonServer) {
    _classCallCheck(this, StellarAPI);

    if (!horizonServer) {
      console.log('StellarAPI constructor missing parameter');
    }

    this._horizonServer = horizonServer;
  }

  _createClass(StellarAPI, [{
    key: 'server',
    value: function server() {
      return this._horizonServer.server();
    }
  }, {
    key: 'serverURL',
    value: function serverURL() {
      return this._horizonServer.serverURL();
    }
  }, {
    key: 'horizonMetrics',
    value: function horizonMetrics() {
      var url = this.serverURL() + '/metrics';

      return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(url);
    }
  }, {
    key: 'accountInfo',
    value: function accountInfo(publicKey) {
      return this.server().loadAccount(publicKey);
    }
  }, {
    key: 'balances',
    value: function balances(publicKey) {
      return this.server().loadAccount(publicKey).then(function (account) {
        var result = {};

        account.balances.forEach(function (balance) {
          if (balance.asset_type === 'native') {
            result['XLM'] = balance.balance;
          } else {
            result[balance.asset_code] = balance.balance;
          }
        });

        return result;
      });
    }
  }, {
    key: 'paths',
    value: function paths(sourceKey, destinationPublic, destinationAsset, destinationAmount) {
      return this.server().paths(sourceKey, destinationPublic, destinationAsset, destinationAmount);
    }
  }, {
    key: 'mergeAccount',
    value: function mergeAccount(sourceWallet, destKey) {
      var _this = this;

      return sourceWallet.publicKey().then(function (publicKey) {
        return _this.server().loadAccount(publicKey);
      }).then(function (account) {
        var transaction = new StellarSdk.TransactionBuilder(account).addOperation(StellarSdk.Operation.accountMerge({
          destination: destKey
        })).build();

        return sourceWallet.signTransaction(transaction);
      }).then(function (signedTransaction) {
        return _this.server().submitTransaction(signedTransaction);
      });
    }
  }, {
    key: 'manageOffer',
    value: function manageOffer(sourceWallet, buying, selling, amount, price) {
      var _this2 = this;

      var offerID = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

      return sourceWallet.publicKey().then(function (publicKey) {
        return _this2.server().loadAccount(publicKey);
      }).then(function (account) {
        var transaction = new StellarSdk.TransactionBuilder(account).addOperation(StellarSdk.Operation.manageOffer({
          selling: selling,
          buying: buying,
          amount: amount,
          price: price,
          offerId: offerID
        })).build();

        return sourceWallet.signTransaction(transaction);
      }).then(function (signedTransaction) {
        return _this2.server().submitTransaction(signedTransaction);
      });
    }
  }, {
    key: 'changeTrust',
    value: function changeTrust(sourceWallet, asset, limit) {
      var _this3 = this;

      return sourceWallet.publicKey().then(function (publicKey) {
        return _this3.server().loadAccount(publicKey);
      }).then(function (account) {
        var transaction = new StellarSdk.TransactionBuilder(account).addOperation(StellarSdk.Operation.changeTrust({
          asset: asset,
          limit: limit
        })).build();

        return sourceWallet.signTransaction(transaction);
      }).then(function (signedTransaction) {
        return _this3.server().submitTransaction(signedTransaction);
      });
    }
  }, {
    key: 'allowTrust',
    value: function allowTrust(sourceWallet, trustor, asset, authorize) {
      var _this4 = this;

      return sourceWallet.publicKey().then(function (publicKey) {
        return _this4.server().loadAccount(publicKey);
      }).then(function (account) {
        var transaction = new StellarSdk.TransactionBuilder(account).addOperation(StellarSdk.Operation.allowTrust({
          trustor: trustor,
          assetCode: asset.getCode(),
          authorize: authorize
        })).build();

        return sourceWallet.signTransaction(transaction);
      }).then(function (signedTransaction) {
        return _this4.server().submitTransaction(signedTransaction);
      });
    }
  }, {
    key: 'makeMultiSig',
    value: function makeMultiSig(sourceWallet, secondPublicKey) {
      var _this5 = this;

      return sourceWallet.publicKey().then(function (publicKey) {
        return _this5.server().loadAccount(publicKey);
      }).then(function (account) {
        var transaction = new StellarSdk.TransactionBuilder(account).addOperation(StellarSdk.Operation.setOptions({
          signer: {
            ed25519PublicKey: secondPublicKey,
            weight: 1
          }
        })).addOperation(StellarSdk.Operation.setOptions({
          medThreshold: 2,
          highThreshold: 2
        })).build();

        return sourceWallet.signTransaction(transaction);
      }).then(function (signedTransaction) {
        return _this5.server().submitTransaction(signedTransaction);
      });
    }
  }, {
    key: 'removeMultiSig',
    value: function removeMultiSig(sourceWallet, secondSecret, secondPublicKey, transactionOpts) {
      var _this6 = this;

      return this.removeMultiSigTransaction(sourceWallet, secondSecret, secondPublicKey, transactionOpts).then(function (transaction) {
        return _this6.server().submitTransaction(transaction);
      });
    }
  }, {
    key: 'submitTransaction',
    value: function submitTransaction(transaction) {
      return this.server().submitTransaction(transaction);
    }
  }, {
    key: 'removeMultiSigTransaction',
    value: function removeMultiSigTransaction(sourceWallet, secondSecret, secondPublicKey, transactionOpts) {
      var _this7 = this;

      return sourceWallet.publicKey().then(function (publicKey) {
        return _this7.server().loadAccount(publicKey);
      }).then(function (account) {
        var transaction = new StellarSdk.TransactionBuilder(account, transactionOpts).addOperation(StellarSdk.Operation.setOptions({
          medThreshold: 1,
          highThreshold: 1
        })).addOperation(StellarSdk.Operation.setOptions({
          signer: {
            ed25519PublicKey: secondPublicKey,
            weight: 0
          }
        })).build();

        return sourceWallet.signTransaction(transaction);
      }).then(function (signedTransaction) {
        signedTransaction.sign(StellarSdk.Keypair.fromSecret(secondSecret));

        return signedTransaction;
      });
    }
  }, {
    key: 'sendAsset',
    value: function sendAsset(sourceWallet, destKey, amount) {
      var asset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

      var _this8 = this;

      var memo = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
      var additionalSigners = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;

      return this.server().loadAccount(destKey).then(function (destAccount) {
        // dest account exists
        return sourceWallet.publicKey();
      }).then(function (sourcePublicKey) {
        return _this8.server().loadAccount(sourcePublicKey);
      }).then(function (sourceAccount) {
        var builder = new StellarSdk.TransactionBuilder(sourceAccount).addOperation(StellarSdk.Operation.payment({
          destination: destKey,
          asset: asset === null ? StellarSdk.Asset.native() : asset,
          amount: amount
        }));

        if (memo) {
          builder = builder.addMemo(StellarSdk.Memo.text(memo));
        }

        var transaction = builder.build();

        return sourceWallet.signTransaction(transaction);
      }).then(function (signedTransaction) {
        if (additionalSigners) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = additionalSigners[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var signerKey = _step.value;

              signedTransaction.sign(StellarSdk.Keypair.fromSecret(signerKey));
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }

        return _this8.server().submitTransaction(signedTransaction);
      });
    }
  }, {
    key: 'hasAssetTrustline',
    value: function hasAssetTrustline(account, asset) {
      var trusted = false;
      trusted = account.balances.some(function (balance) {
        return balance.asset_code === asset.getCode() && balance.asset_issuer === asset.getIssuer();
      });

      return trusted;
    }
  }, {
    key: 'buyTokens',
    value: function buyTokens(sourceWallet, sendAsset, destAsset, sendMax, destAmount) {
      var _this9 = this;

      return sourceWallet.publicKey().then(function (publicKey) {
        return _this9.server().loadAccount(publicKey);
      }).then(function (account) {
        if (!_this9.hasAssetTrustline(account, destAsset)) {
          throw new Error('No trustline from buyer to asset');
        }

        var transaction = new StellarSdk.TransactionBuilder(account).addOperation(StellarSdk.Operation.pathPayment({
          destination: account.accountId(),
          sendAsset: sendAsset,
          sendMax: sendMax,
          destAsset: destAsset,
          destAmount: destAmount,
          path: []
        })).build();

        return sourceWallet.signTransaction(transaction);
      }).then(function (signedTransaction) {
        return _this9.server().submitTransaction(signedTransaction);
      });
    }
  }, {
    key: 'getFlags',
    value: function getFlags(sourceWallet) {
      var _this10 = this;

      return sourceWallet.publicKey().then(function (publicKey) {
        return _this10.server().loadAccount(publicKey);
      }).then(function (account) {
        var result = 0;

        if (account.flags.auth_required) {
          result |= StellarSdk.AuthRequiredFlag;
        }
        if (account.flags.auth_revocable) {
          result |= StellarSdk.AuthRevocableFlag;
        }

        return result;
      });
    }
  }, {
    key: 'createAccount',
    value: function createAccount(sourceWallet, destinationKey, startingBalance) {
      var _this11 = this;

      return sourceWallet.publicKey().then(function (publicKey) {
        return _this11.server().loadAccount(publicKey);
      }).then(function (account) {
        var options = {
          destination: destinationKey,
          startingBalance: startingBalance
        };

        var transaction = new StellarSdk.TransactionBuilder(account).addOperation(StellarSdk.Operation.createAccount(options)).build();

        return sourceWallet.signTransaction(transaction);
      }).then(function (signedTransaction) {
        return _this11.server().submitTransaction(signedTransaction);
      }).then(function (response) {
        return _this11.server().loadAccount(destinationKey);
      });
    }
  }, {
    key: 'lockAccount',
    value: function lockAccount(sourceWallet) {
      var options = {
        masterWeight: 0, // set master key weight to zero
        lowThreshold: 1,
        medThreshold: 1,
        highThreshold: 1
      };

      return this.setOptions(sourceWallet, options);
    }
  }, {
    key: 'setDomain',
    value: function setDomain(sourceWallet, domain) {
      var options = {
        homeDomain: domain
      };

      return this.setOptions(sourceWallet, options);
    }
  }, {
    key: 'setFlags',
    value: function setFlags(sourceWallet, flags) {
      var options = {
        setFlags: flags
      };

      return this.setOptions(sourceWallet, options);
    }
  }, {
    key: 'clearFlags',
    value: function clearFlags(sourceWallet, flags) {
      var options = {
        clearFlags: flags
      };

      return this.setOptions(sourceWallet, options);
    }
  }, {
    key: 'setInflationDestination',
    value: function setInflationDestination(sourceWallet, inflationDest) {
      var options = {
        inflationDest: inflationDest
      };

      return this.setOptions(sourceWallet, options);
    }
  }, {
    key: 'setOptions',
    value: function setOptions(sourceWallet, options) {
      var _this12 = this;

      return sourceWallet.publicKey().then(function (publicKey) {
        return _this12.server().loadAccount(publicKey);
      }).then(function (account) {
        var transaction = new StellarSdk.TransactionBuilder(account).addOperation(StellarSdk.Operation.setOptions(options)).build();

        return sourceWallet.signTransaction(transaction);
      }).then(function (signedTransaction) {
        return _this12.server().submitTransaction(signedTransaction);
      });
    }
  }]);

  return StellarAPI;
}();

/* harmony default export */ __webpack_exports__["a"] = (StellarAPI);

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(7);
var Axios = __webpack_require__(25);
var defaults = __webpack_require__(5);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(12);
axios.CancelToken = __webpack_require__(39);
axios.isCancel = __webpack_require__(11);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(40);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 24 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(5);
var utils = __webpack_require__(0);
var InterceptorManager = __webpack_require__(34);
var dispatchRequest = __webpack_require__(35);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(10);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(36);
var isCancel = __webpack_require__(11);
var defaults = __webpack_require__(5);
var isAbsoluteURL = __webpack_require__(37);
var combineURLs = __webpack_require__(38);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(12);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_41__;

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PaymentDialog_vue__ = __webpack_require__(16);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_81abfb3c_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_PaymentDialog_vue__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(4);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(43)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-81abfb3c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PaymentDialog_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_81abfb3c_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_PaymentDialog_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_81abfb3c_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_PaymentDialog_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\vue\\PaymentDialog.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-81abfb3c", Component.options)
  } else {
    hotAPI.reload("data-v-81abfb3c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(44);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(3).default
var update = add("6f74fe75", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-81abfb3c\",\"scoped\":true,\"sourceMap\":false}!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PaymentDialog.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-81abfb3c\",\"scoped\":true,\"sourceMap\":false}!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PaymentDialog.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.main-container[data-v-81abfb3c] {\n  width: 100%;\n  flex: 0 1 auto;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);\n  background: white;\n  display: flex;\n  flex-direction: column;\n  border-radius: 6px;\n  overflow: hidden;\n  padding: 20px;\n}\n.main-container .button-holder[data-v-81abfb3c] {\n    margin-top: 20px;\n    display: flex;\n    justify-content: flex-end;\n}\n", ""]);

// exports


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = listToStyles;
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(47);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(3).default
var update = add("490c4d60", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-477f01bf\",\"scoped\":true,\"sourceMap\":false}!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PaymentView.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-477f01bf\",\"scoped\":true,\"sourceMap\":false}!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PaymentView.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.payment-view[data-v-477f01bf] {\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n}\n.payment-view .input-title[data-v-477f01bf] {\n    position: relative;\n    background: steelblue;\n    color: white;\n    text-align: center;\n    padding: 10px;\n    font-size: 1.2em;\n}\n.payment-view .input-title .back-button[data-v-477f01bf] {\n      position: absolute;\n      top: 5px;\n      left: 0;\n}\n.payment-view .payment-content[data-v-477f01bf] {\n    margin-top: 20px;\n}\n.payment-view .payment-content .own-wallet[data-v-477f01bf] {\n      margin-top: 20px;\n      text-align: center;\n}\n.payment-view .payment-content .own-wallet .xlm-address[data-v-477f01bf] {\n        font-size: 0.9em;\n        font-weight: bold;\n}\n.payment-view .payment-content .payment-start[data-v-477f01bf] {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n}\n.payment-view .payment-content .payment-start .title-start[data-v-477f01bf] {\n        font-size: 1.2em;\n        margin-bottom: 8px;\n}\n.payment-view .payment-content .payment-nano .sign-button-area[data-v-477f01bf] {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n}\n.payment-view .payment-content .payment-secret .sign-button-area[data-v-477f01bf] {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n}\n", ""]);

// exports


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utils = function () {
  function Utils() {
    _classCallCheck(this, Utils);
  }

  _createClass(Utils, null, [{
    key: "strlen",
    value: function strlen(inString) {
      if (!inString) {
        return 0;
      }

      return inString.length;
    }
  }, {
    key: "strOK",
    value: function strOK(inString) {
      if (!inString) {
        return false;
      }

      return inString.length > 0;
    }
  }]);

  return Utils;
}();

/* harmony default export */ __webpack_exports__["a"] = (Utils);

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "payment-view" }, [
    _c(
      "div",
      { staticClass: "input-title" },
      [
        _vm.dialogMode !== "start"
          ? _c(
              "v-icon",
              {
                staticClass: "back-button",
                attrs: { dark: "", large: "" },
                on: {
                  click: function($event) {
                    _vm.dialogMode = "start"
                  }
                }
              },
              [_vm._v("chevron_left")]
            )
          : _vm._e(),
        _vm._v("\n    " + _vm._s(_vm.headerMessage) + "\n  ")
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "payment-content" }, [
      _vm.dialogMode === "start"
        ? _c("div", { staticClass: "payment-start" }, [
            _c("div", { staticClass: "title-start" }, [
              _vm._v("Choose Method")
            ]),
            _vm._v(" "),
            _c(
              "div",
              [
                _c(
                  "v-btn",
                  {
                    on: {
                      click: function($event) {
                        _vm.buttonClick("useNano")
                      }
                    }
                  },
                  [_vm._v("Use Ledger Nano")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              [
                _c(
                  "v-btn",
                  {
                    on: {
                      click: function($event) {
                        _vm.buttonClick("useKey")
                      }
                    }
                  },
                  [_vm._v("Use secret key")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _vm.donate
              ? _c("div", { staticClass: "own-wallet" }, [
                  _vm._v("\n        Or use your favorite wallet:"),
                  _c("br"),
                  _vm._v("To: "),
                  _c("span", { staticClass: "xlm-address" }, [
                    _vm._v(_vm._s(_vm.destinationPublicKey))
                  ])
                ])
              : _vm._e()
          ])
        : _vm.dialogMode === "useNano"
          ? _c(
              "div",
              { staticClass: "payment-nano" },
              [
                _c("v-text-field", {
                  attrs: { label: "Lumens", type: "number", autofocus: "" },
                  on: {
                    keyup: function($event) {
                      if (
                        !("button" in $event) &&
                        _vm._k($event.keyCode, "enter", 13, $event.key)
                      ) {
                        return null
                      }
                      _vm.buttonClick("sendWithNano")
                    }
                  },
                  model: {
                    value: _vm.xlm,
                    callback: function($$v) {
                      _vm.xlm = typeof $$v === "string" ? $$v.trim() : $$v
                    },
                    expression: "xlm"
                  }
                }),
                _vm._v(" "),
                !_vm.donate
                  ? _c(
                      "div",
                      { staticClass: "own-wallet" },
                      [
                        _c("v-text-field", {
                          attrs: { label: "Destination" },
                          on: {
                            keyup: function($event) {
                              if (
                                !("button" in $event) &&
                                _vm._k($event.keyCode, "enter", 13, $event.key)
                              ) {
                                return null
                              }
                              _vm.buttonClick("sendWithNano")
                            }
                          },
                          model: {
                            value: _vm.destinationPublicKey,
                            callback: function($$v) {
                              _vm.destinationPublicKey =
                                typeof $$v === "string" ? $$v.trim() : $$v
                            },
                            expression: "destinationPublicKey"
                          }
                        })
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "sign-button-area" },
                  [
                    _c(
                      "v-btn",
                      {
                        attrs: { disabled: !_vm.connected },
                        on: {
                          click: function($event) {
                            _vm.buttonClick("sendWithNano")
                          }
                        }
                      },
                      [_vm._v("Send with Ledger Nano")]
                    ),
                    _vm._v(" "),
                    !_vm.connected
                      ? _c("div", [_vm._v(_vm._s(_vm.browserSupportMessage))])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("div", [_vm._v(_vm._s(_vm.status))])
                  ],
                  1
                )
              ],
              1
            )
          : _vm.dialogMode === "useKey"
            ? _c(
                "div",
                { staticClass: "payment-secret" },
                [
                  _c("v-text-field", {
                    attrs: { label: "Amount", type: "number", autofocus: "" },
                    model: {
                      value: _vm.xlm,
                      callback: function($$v) {
                        _vm.xlm = typeof $$v === "string" ? $$v.trim() : $$v
                      },
                      expression: "xlm"
                    }
                  }),
                  _vm._v(" "),
                  !_vm.donate
                    ? _c(
                        "div",
                        { staticClass: "own-wallet" },
                        [
                          _c("v-text-field", {
                            attrs: { label: "Destination" },
                            on: {
                              keyup: function($event) {
                                if (
                                  !("button" in $event) &&
                                  _vm._k(
                                    $event.keyCode,
                                    "enter",
                                    13,
                                    $event.key
                                  )
                                ) {
                                  return null
                                }
                                _vm.buttonClick("sendWithSecret")
                              }
                            },
                            model: {
                              value: _vm.destinationPublicKey,
                              callback: function($$v) {
                                _vm.destinationPublicKey =
                                  typeof $$v === "string" ? $$v.trim() : $$v
                              },
                              expression: "destinationPublicKey"
                            }
                          })
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      label: "Secret Key",
                      hint: "Starts with an 'S'",
                      "append-icon": _vm.showSecret
                        ? "visibility_off"
                        : "visibility",
                      "append-icon-cb": function() {
                        return (_vm.showSecret = !_vm.showSecret)
                      },
                      type: _vm.showSecret ? "text" : "password"
                    },
                    on: {
                      keyup: function($event) {
                        if (
                          !("button" in $event) &&
                          _vm._k($event.keyCode, "enter", 13, $event.key)
                        ) {
                          return null
                        }
                        _vm.buttonClick("sendWithSecret")
                      }
                    },
                    model: {
                      value: _vm.secretKey,
                      callback: function($$v) {
                        _vm.secretKey =
                          typeof $$v === "string" ? $$v.trim() : $$v
                      },
                      expression: "secretKey"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "sign-button-area" },
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: { disabled: _vm.disableSendLumens },
                          on: {
                            click: function($event) {
                              _vm.buttonClick("sendWithSecret")
                            }
                          }
                        },
                        [_vm._v("Send Lumens")]
                      ),
                      _vm._v(" "),
                      _c("div", [_vm._v(_vm._s(_vm.status))])
                    ],
                    1
                  )
                ],
                1
              )
            : _vm._e()
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-477f01bf", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-dialog",
    {
      attrs: { lazy: "", scrollable: "", "max-width": "600" },
      on: {
        keydown: function($event) {
          if (
            !("button" in $event) &&
            _vm._k($event.keyCode, "esc", 27, $event.key)
          ) {
            return null
          }
          _vm.visible = false
        }
      },
      model: {
        value: _vm.visible,
        callback: function($$v) {
          _vm.visible = $$v
        },
        expression: "visible"
      }
    },
    [
      _vm.visible
        ? _c(
            "div",
            { staticClass: "main-container" },
            [
              _c("donate-view", {
                attrs: {
                  nodeEnv: _vm.nodeEnv,
                  donationPublicKey: _vm.donationPublicKey
                }
              }),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "button-holder" },
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { round: "", color: "primary" },
                      on: {
                        click: function($event) {
                          _vm.visible = false
                        }
                      }
                    },
                    [_vm._v("\n        Close\n      ")]
                  )
                ],
                1
              )
            ],
            1
          )
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-81abfb3c", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_BuyTokenDialog_vue__ = __webpack_require__(19);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3d011ef7_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_BuyTokenDialog_vue__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(4);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(52)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3d011ef7"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_BuyTokenDialog_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3d011ef7_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_BuyTokenDialog_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3d011ef7_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_BuyTokenDialog_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\vue\\BuyTokenDialog.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3d011ef7", Component.options)
  } else {
    hotAPI.reload("data-v-3d011ef7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(53);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(3).default
var update = add("621cda8c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3d011ef7\",\"scoped\":true,\"sourceMap\":false}!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./BuyTokenDialog.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3d011ef7\",\"scoped\":true,\"sourceMap\":false}!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./BuyTokenDialog.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.main-container[data-v-3d011ef7] {\n  width: 100%;\n  flex: 0 1 auto;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);\n  background: white;\n  display: flex;\n  flex-direction: column;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.main-container .start-choice[data-v-3d011ef7] {\n    font-size: 1.6em;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin: 50px;\n}\n.main-container .start-choice .button-holder[data-v-3d011ef7] {\n      padding: 10px;\n      display: flex;\n      justify-content: center;\n}\n.main-container .purchase-container[data-v-3d011ef7] {\n    background-color: #ffffff;\n    width: 600px;\n    text-align: center;\n    padding: 50px;\n}\n.main-container .button-holder[data-v-3d011ef7] {\n    margin-top: 20px;\n    display: flex;\n    justify-content: flex-end;\n}\n", ""]);

// exports


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return TransactionReceivedEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountCreatedEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return TrustLinesCreatedEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AccountCreditedEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return PurchasedEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ErrorEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Session; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_stellar_sdk__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_stellar_sdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_stellar_sdk__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var TransactionReceivedEvent = 'transaction_received';
var AccountCreatedEvent = 'account_created';
var TrustLinesCreatedEvent = 'trust_lines_created';
var AccountCreditedEvent = 'account_credited';
var PurchasedEvent = 'purchased';
var ErrorEvent = 'error';

var ProtocolVersion = 1;

var ChainBitcoin = 'bitcoin';
var ChainEthereum = 'ethereum';

var Session = function () {
  function Session(params, horizonOpts) {
    _classCallCheck(this, Session);

    this._checkParams(params);
    this.params = params;
    this.horizon = new __WEBPACK_IMPORTED_MODULE_1_stellar_sdk__["Server"](this.params.horizonURL, horizonOpts);
    if (params.network === 'test') {
      __WEBPACK_IMPORTED_MODULE_1_stellar_sdk__["Network"].useTestNetwork();
    } else {
      __WEBPACK_IMPORTED_MODULE_1_stellar_sdk__["Network"].usePublicNetwork();
    }
    this.started = false;
  }

  _createClass(Session, [{
    key: 'startBitcoin',
    value: function startBitcoin(onEvent) {
      return this._start(ChainBitcoin, onEvent);
    }
  }, {
    key: 'startEthereum',
    value: function startEthereum(onEvent) {
      return this._start(ChainEthereum, onEvent);
    }
  }, {
    key: '_start',
    value: function _start(chain, onEvent) {
      var _this = this;

      if (this.started) {
        throw new Error('Session already started');
      }
      this.started = true;
      this.keypair = __WEBPACK_IMPORTED_MODULE_1_stellar_sdk__["Keypair"].random();

      return new Promise(function (resolve, reject) {
        __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(_this.params.bifrostURL + '/generate-' + chain + '-address', 'stellar_public_key=' + _this.keypair.publicKey()).then(function (response) {
          if (response.data.chain !== chain) {
            return reject('Invalid chain');
          }

          if (response.data.protocol_version !== ProtocolVersion) {
            return reject('Invalid protocol_version. Make sure Bifrost server is using the same protocol version.');
          }

          var address = response.data.address;
          resolve({
            address: address,
            keypair: _this.keypair
          });

          var source = new EventSource(_this.params.bifrostURL + '/events?stream=' + address);
          source.addEventListener('transaction_received', function (e) {
            return onEvent(TransactionReceivedEvent);
          }, false);
          source.addEventListener('account_created', function (e) {
            return _this._onAccountCreated(onEvent, chain);
          }, false);
          source.addEventListener('account_credited', function (e) {
            _this._onAccountCredited(onEvent, JSON.parse(e.data));
            source.close();
          }, false);
          source.addEventListener('error', function (e) {
            return console.error(e);
          }, false);
        }).catch(reject);
      });
    }
  }, {
    key: '_onAccountCreated',
    value: function _onAccountCreated(onEvent, chain) {
      var _this2 = this;

      onEvent(AccountCreatedEvent);

      var chainAssetCode = void 0;
      if (chain === ChainBitcoin) {
        chainAssetCode = 'BTC';
      } else if (chain === ChainEthereum) {
        chainAssetCode = 'ETH';
      }

      // Create trust lines
      this.horizon.loadAccount(this.keypair.publicKey()).then(function (sourceAccount) {
        _this2._onAccountCreatedRecoveryTransactions(sourceAccount.sequenceNumber(), chainAssetCode);

        var transaction = new __WEBPACK_IMPORTED_MODULE_1_stellar_sdk__["TransactionBuilder"](sourceAccount).addOperation(__WEBPACK_IMPORTED_MODULE_1_stellar_sdk__["Operation"].changeTrust({
          asset: new __WEBPACK_IMPORTED_MODULE_1_stellar_sdk__["Asset"](chainAssetCode, _this2.params.issuingPublicKey)
        })).addOperation(__WEBPACK_IMPORTED_MODULE_1_stellar_sdk__["Operation"].changeTrust({
          asset: new __WEBPACK_IMPORTED_MODULE_1_stellar_sdk__["Asset"](_this2.params.assetCode, _this2.params.issuingPublicKey)
        })).build();
        transaction.sign(_this2.keypair);
        return _this2.horizon.submitTransaction(transaction);
      }).then(function () {
        onEvent(TrustLinesCreatedEvent);
      }).catch(function (e) {
        return onEvent(ErrorEvent, e);
      });
    }
  }, {
    key: '_onAccountCredited',
    value: function _onAccountCredited(onEvent, _ref) {
      var _this3 = this;

      var assetCode = _ref.assetCode,
          amount = _ref.amount;

      onEvent(AccountCreditedEvent);
      // Buy asset
      this.horizon.loadAccount(this.keypair.publicKey()).then(function (sourceAccount) {
        _this3._onAccountCreditedRecoveryTransactions(sourceAccount.sequenceNumber(), assetCode, amount);

        if (_this3.params.preSaleMode) {
          return;
        }

        var transaction = new __WEBPACK_IMPORTED_MODULE_1_stellar_sdk__["TransactionBuilder"](sourceAccount).addOperation(__WEBPACK_IMPORTED_MODULE_1_stellar_sdk__["Operation"].manageOffer({
          selling: new __WEBPACK_IMPORTED_MODULE_1_stellar_sdk__["Asset"](assetCode, _this3.params.issuingPublicKey),
          buying: new __WEBPACK_IMPORTED_MODULE_1_stellar_sdk__["Asset"](_this3.params.assetCode, _this3.params.issuingPublicKey),
          amount: amount,
          price: _this3.params.price
        })).build();
        transaction.sign(_this3.keypair);
        return _this3.horizon.submitTransaction(transaction);
      }).then(function () {
        return _this3.horizon.loadAccount(_this3.keypair.publicKey());
      }).then(function (account) {
        _this3._onPurchasedRecoveryTransactions(account);
        onEvent(PurchasedEvent);
      }).catch(function (e) {
        return onEvent(ErrorEvent, e);
      });
    }
  }, {
    key: '_onAccountCreatedRecoveryTransactions',
    value: function _onAccountCreatedRecoveryTransactions(currentSequenceNumber, chainAssetCode) {
      var account = new __WEBPACK_IMPORTED_MODULE_1_stellar_sdk__["Account"](this.keypair.publicKey(), currentSequenceNumber);

      // Fail after account creation and before change_trust
      var transaction = new __WEBPACK_IMPORTED_MODULE_1_stellar_sdk__["TransactionBuilder"](account).addOperation(__WEBPACK_IMPORTED_MODULE_1_stellar_sdk__["Operation"].accountMerge({
        destination: this.params.issuingPublicKey
      })).build();
      transaction.sign(this.keypair);
      this._submitRecovery(transaction);

      // Fail after change_trust and before BTC/ETH receive
      transaction = new __WEBPACK_IMPORTED_MODULE_1_stellar_sdk__["TransactionBuilder"](account).addOperation(__WEBPACK_IMPORTED_MODULE_1_stellar_sdk__["Operation"].changeTrust({
        asset: new __WEBPACK_IMPORTED_MODULE_1_stellar_sdk__["Asset"](chainAssetCode, this.params.issuingPublicKey),
        limit: '0'
      })).addOperation(__WEBPACK_IMPORTED_MODULE_1_stellar_sdk__["Operation"].changeTrust({
        asset: new __WEBPACK_IMPORTED_MODULE_1_stellar_sdk__["Asset"](this.params.assetCode, this.params.issuingPublicKey),
        limit: '0'
      })).addOperation(__WEBPACK_IMPORTED_MODULE_1_stellar_sdk__["Operation"].accountMerge({
        destination: this.params.issuingPublicKey
      })).build();
      transaction.sign(this.keypair);
      this._submitRecovery(transaction);
    }
  }, {
    key: '_onAccountCreditedRecoveryTransactions',
    value: function _onAccountCreditedRecoveryTransactions(currentSequenceNumber, chainAssetCode, amount) {
      // Fail after change_trust and BTC/ETH received. We're creating two transactions:
      // - First, if c operation wasn't even sent.
      // - Second, if _onAccountCreditedRecoveryTransactions operation failed.
      var account = new __WEBPACK_IMPORTED_MODULE_1_stellar_sdk__["Account"](this.keypair.publicKey(), currentSequenceNumber);
      for (var i = 0; i < 2; i++) {
        var transaction = new __WEBPACK_IMPORTED_MODULE_1_stellar_sdk__["TransactionBuilder"](account).addOperation(__WEBPACK_IMPORTED_MODULE_1_stellar_sdk__["Operation"].payment({
          destination: this.params.issuingPublicKey,
          asset: new __WEBPACK_IMPORTED_MODULE_1_stellar_sdk__["Asset"](chainAssetCode, this.params.issuingPublicKey),
          amount: amount
        })).addOperation(__WEBPACK_IMPORTED_MODULE_1_stellar_sdk__["Operation"].changeTrust({
          asset: new __WEBPACK_IMPORTED_MODULE_1_stellar_sdk__["Asset"](chainAssetCode, this.params.issuingPublicKey),
          limit: '0'
        })).addOperation(__WEBPACK_IMPORTED_MODULE_1_stellar_sdk__["Operation"].changeTrust({
          asset: new __WEBPACK_IMPORTED_MODULE_1_stellar_sdk__["Asset"](this.params.assetCode, this.params.issuingPublicKey),
          limit: '0'
        })).addOperation(__WEBPACK_IMPORTED_MODULE_1_stellar_sdk__["Operation"].accountMerge({
          destination: this.params.issuingPublicKey
        })).build();
        transaction.sign(this.keypair);
        this._submitRecovery(transaction);
      }
    }
  }, {
    key: '_onPurchasedRecoveryTransactions',
    value: function _onPurchasedRecoveryTransactions(account) {
      var transactionBuilder = new __WEBPACK_IMPORTED_MODULE_1_stellar_sdk__["TransactionBuilder"](account);

      // Send back assets and remove trust lines
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = account.balances[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var balance = _step.value;

          if (balance.asset_type === 'native') {
            continue;
          }

          if (balance.balance !== '0.0000000') {
            transactionBuilder.addOperation(__WEBPACK_IMPORTED_MODULE_1_stellar_sdk__["Operation"].payment({
              destination: this.params.issuingPublicKey,
              asset: new __WEBPACK_IMPORTED_MODULE_1_stellar_sdk__["Asset"](balance.asset_code, balance.asset_issuer),
              amount: balance.balance
            }));
          }

          transactionBuilder.addOperation(__WEBPACK_IMPORTED_MODULE_1_stellar_sdk__["Operation"].changeTrust({
            asset: new __WEBPACK_IMPORTED_MODULE_1_stellar_sdk__["Asset"](balance.asset_code, balance.asset_issuer),
            limit: '0'
          }));
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      transactionBuilder.addOperation(__WEBPACK_IMPORTED_MODULE_1_stellar_sdk__["Operation"].accountMerge({
        destination: this.params.issuingPublicKey
      }));

      var transaction = transactionBuilder.build();
      transaction.sign(this.keypair);
      this._submitRecovery(transaction);
    }
  }, {
    key: '_submitRecovery',
    value: function _submitRecovery(transaction) {
      var envelope = transaction.toEnvelope().toXDR().toString('base64');
      var envelopeEncoded = encodeURIComponent(envelope);
      return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(this.params.bifrostURL + '/recovery-transaction', 'transaction_xdr=' + envelopeEncoded);
    }
  }, {
    key: '_checkParams',
    value: function _checkParams(params) {
      if (params === undefined) {
        throw new Error('params not provided');
      }

      if (['live', 'test'].indexOf(params.network) === -1) {
        throw new Error('Invalid params.network');
      }

      if (!__WEBPACK_IMPORTED_MODULE_1_stellar_sdk__["StrKey"].isValidEd25519PublicKey(params.issuingPublicKey)) {
        throw new Error('Invalid params.issuingPublicKey');
      }

      var requiredParams = ['bifrostURL', 'horizonURL', 'assetCode', 'price'];
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = requiredParams[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var param = _step2.value;

          if (typeof params[param] !== 'string') {
            throw new Error('params.' + param + ' required and must be of type \'string\'');
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }]);

  return Session;
}();

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-dialog",
    {
      attrs: { lazy: "", scrollable: "", "max-width": "600" },
      on: {
        keydown: function($event) {
          if (
            !("button" in $event) &&
            _vm._k($event.keyCode, "esc", 27, $event.key)
          ) {
            return null
          }
          _vm.visible = false
        }
      },
      model: {
        value: _vm.visible,
        callback: function($$v) {
          _vm.visible = $$v
        },
        expression: "visible"
      }
    },
    [
      _c("div", { staticClass: "main-container" }, [
        !_vm.showPurchase
          ? _c("div", { staticClass: "start-choice" }, [
              _c("div", [
                _vm._v("What would you like to use to purchase LMB tokens")
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "button-holder" },
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { small: "" },
                      on: {
                        click: function($event) {
                          _vm.buttonClick("bitcoin")
                        }
                      }
                    },
                    [_vm._v("Bitcoin")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { small: "" },
                      on: {
                        click: function($event) {
                          _vm.buttonClick("ethereum")
                        }
                      }
                    },
                    [_vm._v("Ethereum")]
                  )
                ],
                1
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.showPurchase
          ? _c(
              "div",
              { staticClass: "purchase-container" },
              [
                _c(
                  "v-btn",
                  {
                    attrs: { small: "" },
                    on: {
                      click: function($event) {
                        _vm.buttonClick("back")
                      }
                    }
                  },
                  [_vm._v("Back")]
                ),
                _vm._v(" "),
                _c("div", { domProps: { innerHTML: _vm._s(_vm.sendMessage) } }),
                _vm._v(" "),
                _c("div", [_vm._v("Address = " + _vm._s(_vm.address))]),
                _vm._v(" "),
                _c("p", [
                  _c("strong", [
                    _vm._v("Rinkeby testnet. Do not send real coins!")
                  ])
                ]),
                _vm._v(" "),
                _c("p", [_vm._v("Exchange rate: 1 ETH = 1 LMB token")]),
                _vm._v(" "),
                _c("p", [
                  _c(
                    "a",
                    {
                      attrs: {
                        href: "https://github.com/stellar/go/pull/81 ",
                        target: "_blank "
                      }
                    },
                    [_vm._v("Instructions")]
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "progress " },
                  [
                    _c("v-progress-linear", {
                      model: {
                        value: _vm.progress,
                        callback: function($$v) {
                          _vm.progress = $$v
                        },
                        expression: "progress "
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", [_vm._v("Status = " + _vm._s(_vm.status))]),
                _vm._v(" "),
                _c("div", [_vm._v("Public Key = " + _vm._s(_vm.publicKey))]),
                _vm._v(" "),
                _c("div", [_vm._v("Secret Key = " + _vm._s(_vm.secretKey))])
              ],
              1
            )
          : _vm._e(),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "button-holder" },
          [
            _c(
              "v-btn",
              {
                attrs: { round: "", color: "primary" },
                on: {
                  click: function($event) {
                    _vm.visible = false
                  }
                }
              },
              [_vm._v("\n        Close\n      ")]
            )
          ],
          1
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3d011ef7", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DialogTitleBar_vue__ = __webpack_require__(20);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f6668e82_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DialogTitleBar_vue__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(4);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(57)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-f6668e82"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DialogTitleBar_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f6668e82_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DialogTitleBar_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f6668e82_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DialogTitleBar_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\vue\\DialogTitleBar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f6668e82", Component.options)
  } else {
    hotAPI.reload("data-v-f6668e82", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(58);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(3).default
var update = add("13db2e8c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f6668e82\",\"scoped\":true,\"sourceMap\":false}!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DialogTitleBar.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f6668e82\",\"scoped\":true,\"sourceMap\":false}!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DialogTitleBar.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.dialog-header[data-v-f6668e82] {\n  width: 100%;\n  display: flex;\n  position: relative;\n  justify-content: flex-end;\n  align-items: center;\n  background: #1976d2;\n  padding-right: 6px;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);\n  flex: 0 0 40px;\n}\n.dialog-header button[data-v-f6668e82] {\n    margin: 2px;\n}\n.dialog-header .dialog-header-text[data-v-f6668e82] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    pointer-events: none;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n}\n.dialog-header .dialog-header-text p[data-v-f6668e82] {\n      color: white;\n      font-weight: 600;\n      font-size: 1.2em;\n      margin: 0;\n      user-select: none;\n}\n", ""]);

// exports


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "dialog-header" },
    [
      _c("div", { staticClass: "dialog-header-text" }, [
        _c("p", [_vm._v(_vm._s(_vm.title))])
      ]),
      _vm._v(" "),
      _c(
        "v-tooltip",
        { attrs: { "open-delay": "200", bottom: "" } },
        [
          _vm.showPrint
            ? _c(
                "v-btn",
                {
                  attrs: { slot: "activator", icon: "", dark: "" },
                  on: {
                    click: function($event) {
                      _vm.buttonClick("print")
                    }
                  },
                  slot: "activator"
                },
                [_c("v-icon", [_vm._v("print")])],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c("span", [_vm._v("Print")])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-tooltip",
        { attrs: { "open-delay": "200", bottom: "" } },
        [
          _c(
            "v-btn",
            {
              attrs: { slot: "activator", icon: "", dark: "" },
              on: {
                click: function($event) {
                  _vm.buttonClick("close")
                }
              },
              slot: "activator"
            },
            [_c("v-icon", [_vm._v(_vm._s(_vm.icon))])],
            1
          ),
          _vm._v(" "),
          _c("span", { domProps: { innerHTML: _vm._s(_vm.tooltip) } })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-f6668e82", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ })
/******/ ]);
});