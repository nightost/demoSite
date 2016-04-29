/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _promiseAny = __webpack_require__(1);

	function promiseHandle(resolve, reject, role) {
	    if (Math.random() > .5) {
	        resolve('request' + role + ' success');
	    } else {
	        reject('request' + role + ' failed');
	    }
	} /*
	   Created by nightost on 16/4/29.
	   *create request promise
	   */

	var requestA = new Promise(function (resolve, reject) {
	    promiseHandle(resolve, reject, 'A');
	});
	var aggregativePros = (0, _promiseAny.promiseAny)([requestA]);
	aggregativePros.then(function (msg) {
	    return console.log(msg);
	}, function (msg) {
	    return console.log(msg);
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	/**
	 * Created by nightost on 16/4/29.
	 */
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.promiseAny = promiseAny;

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var reversePromise = function reversePromise(promise) {
	  return new Promise(function (resolve, reject) {
	    return promise.then(reject, resolve);
	  });
	};
	function promiseAny(promises) {
	  return reversePromise(Promise.all([].concat(_toConsumableArray(promises)).map(reversePromise)));
	}

/***/ }
/******/ ]);