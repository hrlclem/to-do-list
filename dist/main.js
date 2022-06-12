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

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ visualDisplay)\n/* harmony export */ });\n/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.js */ \"./src/projects.js\");\n/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage */ \"./src/localStorage.js\");\n\n\n\n\nfunction visualDisplay() {    \n\n    // Display to add new project\n    const addProjectBtn = document.querySelector(\".addProjectBtn\");\n    const allProjectsDiv = document.querySelector(\".allProjectsDiv\");\n\n    allProjectsDiv.addEventListener(\"click\", showProjectField);     // Show Add Project Field\n    allProjectsDiv.addEventListener('click', confirmProjectAdd);    // Confirm Add Project Field\n    allProjectsDiv.addEventListener('click', cancelProjectAdd);     // Cancel Add Project Field\n\n\n\n// ------ DISPLAY FUNCTIONS\n    function showProjectField(e){                    // Show Add Project Field  \n        const addProjectBtn = document.querySelector(\".addProjectBtn\");\n        const allProjectsDiv = document.querySelector(\".allProjectsDiv\");\n        if (e.target.classList.contains('showAddProject')) {\n            addProjectBtn.style.display = \"none\";\n            allProjectsDiv.innerHTML += `\n                <div class='addingProjectDiv'>\n                    <input type='text' class='addProjectTitleField'>\n                    <div class='newProjectButtons'>\n                        <button class='confirmProjectBtn addingProjectBtn'>Confirm</button>\n                        <button class='cancelProjectBtn addingProjectBtn'>Cancel</button>\n                    </div>\n                </div>`;\n        };               \n    };\n\n    // Handle CONFIRM Add New Project\n    function confirmProjectAdd(e){\n        const addProjectBtn = document.querySelector(\".addProjectBtn\");\n        const allProjectsDiv = document.querySelector(\".allProjectsDiv\");\n        const addProjectTitleField = document.querySelector(\".addProjectTitleField\");\n\n        if (e.target.classList.contains('confirmProjectBtn')) {\n            allProjectsDiv.removeChild(allProjectsDiv.lastChild);\n            addProjectBtn.style.display = \"flex\";\n\n            // Add Project name to Project Array\n            const projectName = addProjectTitleField.value\n            if (projectName === '') {\n              alert(\"Project name can't be empty\")\n              return\n            };\n\n            let newProject = new _projects_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](projectName);\n            _localStorage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].allProjects.push(newProject);\n            console.log(allProjects); \n            // Automatically select this Project (active attribute)\n\n        };\n    };\n\n    function cancelProjectAdd(e){                   // Handle CANCEL Add New Project\n        const addProjectBtn = document.querySelector(\".addProjectBtn\");\n        const allProjectsDiv = document.querySelector(\".allProjectsDiv\");\n        if (e.target.classList.contains('cancelProjectBtn')) {\n            allProjectsDiv.removeChild(allProjectsDiv.lastChild);\n            addProjectBtn.style.display = \"flex\";\n        };\n    };\n\n\n\n\n// ------ PROJECT AND TASK MANAGEMENT FUNCTIONS\n\n\n\n\n\n    // Display to add new task in project(includes title, priority and date)\n\n};\n\n\n//# sourceURL=webpack://to-do-list/./src/display.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.js */ \"./src/projects.js\");\n/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display.js */ \"./src/display.js\");\n\n\n\n\n// let projectList = [{projectName: \"Project 1\"}];\n(0,_display_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ localStorage)\n/* harmony export */ });\n\n\nfunction localStorage() {    \n\n    let allProjects = [];\n\n};\n\n//# sourceURL=webpack://to-do-list/./src/localStorage.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Projects)\n/* harmony export */ });\n/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display.js */ \"./src/display.js\");\n// import { toDate, isToday, isThisWeek, subDays } from 'date-fns';\n\n\n\nclass Projects{\n\n    constructor(projectName){\n        this.projectName = projectName;\n        this.task = [];\n    };\n\n    setName(projectName) {\n        this.projectName = projectName;\n    };\n\n    getName() {\n        return this.projectName;\n    };\n\n\n    // Add Project to Project Array\n\n\n    // Delete Project from Project Array\n};\n\n\n//# sourceURL=webpack://to-do-list/./src/projects.js?");

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