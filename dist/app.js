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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app/app.js":
/*!************************!*\
  !*** ./src/app/app.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _customIndexOf = __webpack_require__(/*! ./custom-index-of/custom-index-of */ "./src/app/custom-index-of/custom-index-of.js");

var _customIndexOf2 = _interopRequireDefault(_customIndexOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

String.prototype.customIndexOf = _customIndexOf2.default;
window.myApp = window.myApp || {};

var inputSearch = document.getElementById('search-value');
var buttonTests = document.getElementById('run-tests');
var fromIndex = document.getElementById('from-index');
var string = document.getElementById('string');
var result = document.getElementById('result');

// Compare String.indexOf result and String.customIndexOf
myApp.assertMethods = function (string, searchValue, fromIndex) {
  var indexOf = string.indexOf(searchValue, fromIndex);
  var customIndexOf = string.customIndexOf(searchValue, fromIndex);

  if (indexOf === customIndexOf) {
    return {
      type: 'success',
      responseText: 'Success: the index is ' + indexOf
    };
  } else {
    return {
      type: 'error',
      responseText: 'Error: String.indexOf is ' + indexOf + ' and customIndexOf is ' + customIndexOf
    };
  }
};

myApp.runTests = function (string, searchValue, fromIndex, callback) {
  callback(window.myApp.assertMethods(string, searchValue, fromIndex));
};

// Click on button to run tests
document.addEventListener('DOMContentLoaded', function () {
  buttonTests.addEventListener('click', function () {
    window.myApp.runTests(string.innerText, inputSearch.value, fromIndex.value, function (value) {
      result.innerText = value.responseText;

      if (!result.classList.contains(value.type)) {
        result.classList.add(value.type);
      }
    });
  });
});

/***/ }),

/***/ "./src/app/custom-index-of/custom-index-of.js":
/*!****************************************************!*\
  !*** ./src/app/custom-index-of/custom-index-of.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = customIndexOf;
function customIndexOf(searchValue, fromIndex) {
  var notfound = -1;

  // Validating param: fromIndex
  // fromIndex needs to be type number and needs to be an integer
  if (typeof fromIndex !== 'number' && isNaN(fromIndex)) {
    fromIndex = parseInt(fromIndex);
  }

  if (typeof fromIndex === 'number' && !Number.isInteger(fromIndex)) {
    fromIndex = 0;
  }

  // For fromIndex values lower than 0 or greater than str.length,
  // the search starts at index 0 and str.length respectively.
  if (!fromIndex || fromIndex < 0) {
    fromIndex = 0;
  } else if (fromIndex > this.length) {
    fromIndex = this.length;
  }

  // Validating param: searchValue
  // searchValue needs to be type string
  if (typeof searchValue !== 'string' && !Array.isArray(searchValue)) {
    return notfound;
  }

  // searchValue array quirks
  if (Array.isArray(searchValue)) {
    return 0;
  }

  // searchValue empty string quirks
  if (searchValue === '') {
    if (fromIndex >= this.length) {
      return this.length;
    } else if (fromIndex < 0) {
      return 0;
    } else {
      return fromIndex;
    }
  }

  var stringLength = this.length;
  var searchValueLength = searchValue.length;
  var count = 0;

  if (searchValueLength > stringLength) {
    return notfound;
  }

  for (var i = 0; i <= stringLength - searchValueLength; i++) {
    for (var j = 0; j < searchValueLength; j++) {
      if (this[j + i] === searchValue[j]) {
        count++;
        if (count === searchValueLength && i >= fromIndex) {
          return i;
        }
      } else {
        count = 0;
        break;
      }
    }
  }
  return notfound;
}

/***/ })

/******/ });
//# sourceMappingURL=app.js.map