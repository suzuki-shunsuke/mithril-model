(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("validator"));
	else if(typeof define === 'function' && define.amd)
		define(["validator"], factory);
	else if(typeof exports === 'object')
		exports["validation_rule_set"] = factory(require("validator"));
	else
		root["validation_rule_set"] = factory(root["validator"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
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

	module.exports = {
	  after: __webpack_require__(1),
	  alpha: __webpack_require__(3),
	  alpha_numeric: __webpack_require__(4),
	  before: __webpack_require__(5),
	  byte_length: __webpack_require__(6),
	  contains: __webpack_require__(7),
	  currency: __webpack_require__(8),
	  divible: __webpack_require__(9),
	  email: __webpack_require__(10),
	  equals: __webpack_require__(11),
	  float: __webpack_require__(12),
	  fqdn: __webpack_require__(13),
	  ip: __webpack_require__(14),

	  ascii: __webpack_require__(15),
	  base64: __webpack_require__(16),
	  bool: __webpack_require__(17),
	  credit_card: __webpack_require__(18)
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isAfter = __webpack_require__(2).isAfter;

	function after(date, value) {
	  return arguments.length === 1 ? isAfter(date) : isAfter(value, date);
	}

	module.exports = after;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isAlpha = __webpack_require__(2).isAlpha;

	function alpha(locale, value) {
	  return arguments.length === 1 ? isAlpha(locale) : isAlpha(value, locale);
	}

	module.exports = alpha;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isAlphanumeric = __webpack_require__(2).isAlphanumeric;

	function alpha_numeric(locale, value) {
	  return arguments.length === 1 ? isAlphanumeric(locale) : isAlphanumeric(value, locale);
	}

	module.exports = alpha_numeric;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isBefore = __webpack_require__(2).isBefore;

	function before(date, value) {
	  return arguments.length === 1 ? isBefore(date) : isBefore(value, date);
	}

	module.exports = before;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isByteLength = __webpack_require__(2).isByteLength;

	function byte_length(options, value) {
	  return arguments.length === 1 ? isByteLength(options) : isByteLength(value, options);
	}

	module.exports = byte_length;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var contains = __webpack_require__(2);

	module.exports = function (seed, value) {
	  return contains(value, seed);
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isCurrency = __webpack_require__(2).isCurrency;

	function currency(options, value) {
	  return arguments.length === 1 ? isCurrency(options) : isCurrency(value, options);
	}

	module.exports = currency;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isDivisibleBy = __webpack_require__(2).isDivisibleBy;

	function divisible(number, value) {
	  return arguments.length === 1 ? isDivisibleBy(number) : isDivisibleBy(value, number);
	}

	module.exports = divisible;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isEmail = __webpack_require__(2).isEmail;

	function email(options, value) {
	  return arguments.length === 1 ? isEmail(options) : isEmail(value, options);
	}

	module.exports = email;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var equals = __webpack_require__(2).equals;

	module.exports = function (comparison, value) {
	  return equals(value, comparison);
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isFloat = __webpack_require__(2).isFloat;

	function float(options, value) {
	  return arguments.length === 1 ? isFloat(options) : isFloat(value, options);
	}

	module.exports = float;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isFQDN = __webpack_require__(2).isFQDN;

	function fqdn(options, value) {
	  return arguments.length === 1 ? isFQDN(options) : isFQDN(value, options);
	}

	module.exports = fqdn;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isIP = __webpack_require__(2).isIP;

	function ip(version, value) {
	  return arguments.length === 1 ? isIP(version) : isIP(value, version);
	}

	module.exports = ip;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(2).isAscii;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(2).isBase64;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(2).isBoolean;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(2).isCreditCard;

/***/ }
/******/ ])
});
;