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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Bike = __webpack_require__(/*! ./models/bikes.js */ \"./src/models/bikes.js\")\nconst AllBikesView = __webpack_require__(/*! ./views/all_bikes_view.js */ \"./src/views/all_bikes_view.js\")\nconst SelectView = __webpack_require__(/*! ./views/select_view.js */ \"./src/views/select_view.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  console.log('JS loaded')\n\n  const selectElement = document.querySelector('#bike-dropdown');\n  const selectView = new SelectView(selectElement);\n  selectView.bindEvents();\n\n  const listContainer = document.querySelector('#list-bikes')\n  const allBikes = new AllBikesView(listContainer);\n  allBikes.bindEvents();\n\n  const bike = new Bike();\n  bike.getData();\n  bike.bindEvents();\n\n})\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/helpers/pub_sub.js":
/*!********************************!*\
  !*** ./src/helpers/pub_sub.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PubSub = {\n  publish: function (channel, payload) {\n    const event = new CustomEvent(channel, {\n      detail: payload\n    });\n    document.dispatchEvent(event);\n  },\n\n  subscribe: function (channel, callback) {\n    document.addEventListener(channel, callback);\n  }\n};\n\nmodule.exports = PubSub;\n\n\n//# sourceURL=webpack:///./src/helpers/pub_sub.js?");

/***/ }),

/***/ "./src/helpers/request.js":
/*!********************************!*\
  !*** ./src/helpers/request.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Request = function(url) {\n  this.url = url;\n}\n\n\nRequest.prototype.get = function(onComplete){\n  const xhr = new XMLHttpRequest();\n  xhr.addEventListener('load', () => {\n    if (xhr.status !==200){\n      return;\n    }\n\n    const jsonString = xhr.responseText;\n    const data = JSON.parse(jsonString);\n    onComplete(data);\n  })\n\n  xhr.open('GET', this.url);\n  xhr.setRequestHeader('Accept', 'application/json');\n  xhr.send();\n}\n\nmodule.exports = Request;\n\n\n//# sourceURL=webpack:///./src/helpers/request.js?");

/***/ }),

/***/ "./src/models/bikes.js":
/*!*****************************!*\
  !*** ./src/models/bikes.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\")\nconst Request = __webpack_require__(/*! ../helpers/request.js */ \"./src/helpers/request.js\")\n\nconst Bike = function(){\nthis.bikes = null;\nthis.bikesData=null;\n}\n\nBike.prototype.getData = function() {\n  const request = new Request('https://api.tfl.gov.uk/bikepoint');\n  request.get((data) => {\n    this.bikes = data;\n    PubSub.publish('Bike:bikes-loaded', this.bikes);\n    console.log(this.bikes)\n  })\n}\n\nBike.prototype.bindEvents = function(){\n  PubSub.subscribe('SelectView:change', (evt)  => {\n  const bikeIndex = evt.detail;\n  this.publishBikebyLocation(bikeIndex);\n})\n}\n\nBike.prototype.bikesByLocation = function(bikeIndex) {\n  const selectedBike = this.bikes[bikeIndex];\n  return this.bikes.map((selectedBike) => {\n    return selectedBike.commonName;\n  });\n};\n\nBike.prototype.publishBikebyLocation =function(bike){\n  const bikeSelected = this.bikesByLocation(bike);\n  PubSub.publish('Bikes:bike-selected-ready', bikeSelected);\n  console.log(bikeSelected);\n}\n\nmodule.exports = Bike;\n\n\n//# sourceURL=webpack:///./src/models/bikes.js?");

/***/ }),

/***/ "./src/views/all_bikes_view.js":
/*!*************************************!*\
  !*** ./src/views/all_bikes_view.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\")\nconst Request = __webpack_require__(/*! ../helpers/request.js */ \"./src/helpers/request.js\")\nconst BikeDetailsView = __webpack_require__(/*! ../views/bikes_details_view.js */ \"./src/views/bikes_details_view.js\")\n\nconst AllBikesView = function(container) {\n  this.container = container;\n  this.bikes = [];\n}\n\nAllBikesView.prototype.bindEvents = function(){\n  PubSub.subscribe('Bike:bikes-loaded', (event) => {\n    this.bikes = event.detail;\n    console.log(this.bikes);\n    this.render();\n  })\n}\n\nAllBikesView.prototype.render = function(){\n  this.bikes.forEach(bike => {\n    const bikeDetailsView = new BikeDetailsView(this.container, bike);\n    bikeDetailsView.render();\n    // console.log(bike)\n  })\n}\n\n\nmodule.exports = AllBikesView;\n// AllBikesView.prototype.render = function(){\n//   this.bikes.forEach(bike => {\n//     bike.commonName;\n//     console.log(bike.commonName);\n//   })\n// }\n\n\n//# sourceURL=webpack:///./src/views/all_bikes_view.js?");

/***/ }),

/***/ "./src/views/bikes_details_view.js":
/*!*****************************************!*\
  !*** ./src/views/bikes_details_view.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\n\nconst BikeDetailsView = function(bikeListContainer, bike){\n  this.bikeListContainer = bikeListContainer;\n  this.bike = bike;\n}\n\nBikeDetailsView.prototype.render =function(){\n  const bikeDetails = document.createElement('div');\n  const bikeLocation = this.createHeading();\n  bikeDetails.appendChild(bikeLocation);\n  this.bikeListContainer.appendChild(bikeDetails);\n  const bikeUl = this.createBikeUl();\n  this.bikeListContainer.appendChild(bikeUl);\n}\n\nBikeDetailsView.prototype.createHeading = function(){\n  const nameHeading = document.createElement('p');\n  nameHeading.textContent = this.bike.commonName;\n  return nameHeading;\n}\n\nBikeDetailsView.prototype.createBikeUl = function() {\n  const bikeDetailsUl = document.createElement('ul');\n  this.populateUl(bikeDetailsUl);\n  return bikeDetailsUl;\n}\n\nBikeDetailsView.prototype.populateUl = function(ul) {\n  const randomLi = document.createElement('li');\n  randomLi.textContent = this.bike.id;\n  ul.appendChild(randomLi);\n}\n\nmodule.exports = BikeDetailsView;\n\n\n//# sourceURL=webpack:///./src/views/bikes_details_view.js?");

/***/ }),

/***/ "./src/views/select_view.js":
/*!**********************************!*\
  !*** ./src/views/select_view.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub */ \"./src/helpers/pub_sub.js\");\n\nconst SelectView = function (selectElement) {\n  this.selectElement = selectElement;\n};\n\nSelectView.prototype.bindEvents = function () {\n  PubSub.subscribe('Bike:bikes-loaded', (evt) => {\n    this.populateSelect(evt.detail);\n  });\n  this.selectElement.addEventListener('change', (evt) => {\n    const selectedIndex = evt.target.value;\n    PubSub.publish('SelectView:change', selectedIndex);\n  });\n};\n\nSelectView.prototype.populateSelect = function (bikes) {\n  bikes.forEach((bike, index) => {\n    const option = this.createBike(bike, index);\n    this.selectElement.appendChild(option);\n  })\n};\n\nSelectView.prototype.createBike = function (bike, index) {\n  const option = document.createElement('option');\n  option.textContent = bike.commonName;\n  option.value = index;\n  return option;\n};\n\nmodule.exports = SelectView;\n\n\n//# sourceURL=webpack:///./src/views/select_view.js?");

/***/ })

/******/ });