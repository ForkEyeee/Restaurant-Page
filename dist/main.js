/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadContact)\n/* harmony export */ });\nfunction loadContact() {\r\n  const form = document.createElement('form');\r\n  document.body.appendChild(form);\r\n\r\n  const input1 = document.createElement('input');\r\n\r\n  const input2 = document.createElement('input');\r\n\r\n  const input3 = document.createElement('input');\r\n\r\n  const input4 = document.createElement('input');\r\n\r\n  form.appendChild(input1);\r\n  form.appendChild(input2);\r\n  form.appendChild(input3);\r\n  form.appendChild(input4);\r\n}\r\n\n\n//# sourceURL=webpack://webpack-demo/./src/contact.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHomePage)\n/* harmony export */ });\nfunction loadHomePage() {\r\n  const contentDiv = document.getElementById('content');\r\n  const headerDiv = document.createElement('div');\r\n  const textDiv = document.createElement('div');\r\n\r\n  headerDiv.className = 'header';\r\n  contentDiv.appendChild(headerDiv);\r\n\r\n  const myImage = new Image();\r\n  myImage.src =\r\n    'file:///C:/Users/Jayden%20Brown/Desktop/top/Restaurant%20Page/img/catering-g64e518873_1920.jpeg';\r\n  myImage.setAttribute('id', 'img');\r\n  contentDiv.appendChild(myImage);\r\n\r\n  contentDiv.appendChild(textDiv);\r\n\r\n  const btn1 = document.createElement('button');\r\n  btn1.innerHTML = 'Home';\r\n  btn1.setAttribute('id', 'btn1');\r\n  const btn2 = document.createElement('button');\r\n  btn2.innerHTML = 'Menu';\r\n  btn2.setAttribute('id', 'btn2');\r\n  const btn3 = document.createElement('button');\r\n  btn3.innerHTML = 'Contact';\r\n  btn3.setAttribute('id', 'btn3');\r\n  headerDiv.appendChild(btn1);\r\n  headerDiv.appendChild(btn2);\r\n  headerDiv.appendChild(btn3);\r\n  console.log('test');\r\n\r\n  textDiv.innerHTML =\r\n    \"We cook up bright, bold Korean dishes that are totally unique in Vancouver, you won't find our flavors and colors anywhere else. And we serve it all hot, fast and in a format that’s affordable and comfortable for urban Vancouverites to enjoy.\";\r\n  textDiv.setAttribute('id', 'text-div');\r\n  const content = {\r\n    contentDiv,\r\n    headerDiv,\r\n    myImage,\r\n    textDiv,\r\n    btn1,\r\n    btn2,\r\n    btn3,\r\n  };\r\n  return content;\r\n}\r\n\n\n//# sourceURL=webpack://webpack-demo/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage.js */ \"./src/homepage.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\nconst homepage = (0,_homepage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n// const menu = loadMenu();\r\n// const contact = loadContact();\r\n\r\nhomepage.btn1.addEventListener('click', (event) => {\r\n  homepage.myImage.parentNode.removeChild(homepage.myImage);\r\n  (0,_homepage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  event.currentTarget.disabled = true;\r\n});\r\n\r\nhomepage.btn2.addEventListener('click', (event) => {\r\n  homepage.textDiv.remove();\r\n  homepage.myImage.parentNode.removeChild(homepage.myImage);\r\n  // loadMenu()\r\n  // event.currentTarget.disabled = true\r\n});\r\n\r\nhomepage.btn3.addEventListener('click', (event) => {\r\n  document.body.innerHTML = '';\r\n  (0,_homepage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  event.currentTarget.disabled = true;\r\n});\r\n\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenu)\n/* harmony export */ });\nfunction loadMenu() {\r\n  const contentDiv2 = document.getElementById('content');\r\n  const header = document.createElement('div');\r\n  const grid = document.createElement('div');\r\n  const menuGrid = document.createElement('div');\r\n  const menuItem1 = document.createElement('div');\r\n  const menuItem2 = document.createElement('div');\r\n  const menuItem3 = document.createElement('div');\r\n  document.body.appendChild(header);\r\n  contentDiv2.appendChild(grid).classList = 'grid-container';\r\n  grid.appendChild(menuGrid).classList = 'grid-item';\r\n  grid.appendChild(menuItem1).classList = 'grid-item';\r\n  grid.appendChild(menuItem2).classList = 'grid-item';\r\n  grid.appendChild(menuItem3).classList = 'grid-item';\r\n  console.log('sawd');\r\n  const content = {\r\n    header,\r\n    grid,\r\n    menuGrid,\r\n    menuItem1,\r\n    menuItem2,\r\n    menuItem3,\r\n  };\r\n  return { content };\r\n}\r\n\n\n//# sourceURL=webpack://webpack-demo/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;