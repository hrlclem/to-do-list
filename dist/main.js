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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ visualDisplay)\n/* harmony export */ });\n/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.js */ \"./src/projects.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\n// import localStorage from './localStorage';\n\n\n\n\nfunction visualDisplay() { \n\n\nconst allProjectsDiv = document.querySelector(\".allProjectsDiv\");\n\n// LEFT BAR BUTTONS\nallProjectsDiv.addEventListener(\"click\", showProjectField);     // Show Add Project Field\nallProjectsDiv.addEventListener('click', confirmProjectAdd);    // Confirm Add Project Field\nallProjectsDiv.addEventListener('click', cancelProjectAdd);     // Cancel Add Project Field\n\n\n\n    // Show feature to add projects\n    function showProjectField(e){\n        const addProjectBtn = document.querySelector(\".addProjectBtn\");\n        const allProjectsDiv = document.querySelector(\".allProjectsDiv\");\n        if (e.target.classList.contains('showAddProject')) {\n            addProjectBtn.style.display = \"none\";\n            allProjectsDiv.innerHTML += `\n                <div class='addingProjectDiv'>\n                    <input type='text' class='addProjectTitleField'>\n                    <div class='newProjectButtons'>\n                        <button class='confirmProjectBtn addingProjectBtn'>Confirm</button>\n                        <button class='cancelProjectBtn addingProjectBtn'>Cancel</button>\n                    </div>\n                </div>`;\n        };               \n    };\n\n    // Confirm adding project\n    function confirmProjectAdd(e){\n        const addProjectBtn = document.querySelector(\".addProjectBtn\");\n        const allProjectsDiv = document.querySelector(\".allProjectsDiv\");\n        const addProjectTitleField = document.querySelector(\".addProjectTitleField\");\n\n        if (e.target.classList.contains('confirmProjectBtn')) {\n            allProjectsDiv.removeChild(allProjectsDiv.lastChild);\n            addProjectBtn.style.display = \"flex\";\n\n            // Add Project name to Project Array\n            const projectName = addProjectTitleField.value\n            if (projectName === '') {\n                alert(\"Project name can't be empty\")\n                return\n            };\n\n            (0,_projects_js__WEBPACK_IMPORTED_MODULE_0__.createProject)(projectName);\n        };\n    };\n\n    // Cancel adding project\n    function cancelProjectAdd(e){                   \n        const addProjectBtn = document.querySelector(\".addProjectBtn\");\n        const allProjectsDiv = document.querySelector(\".allProjectsDiv\");\n        if (e.target.classList.contains('cancelProjectBtn')) {\n            allProjectsDiv.removeChild(allProjectsDiv.lastChild);\n            addProjectBtn.style.display = \"flex\";\n        };\n    };\n\n\n\n\n\n\n\n\n// Display to add new task in project(includes title, priority and date)\n\n};\n\n\n//# sourceURL=webpack://to-do-list/./src/display.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"allProjects\": () => (/* binding */ allProjects)\n/* harmony export */ });\n/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display.js */ \"./src/display.js\");\n\n\nlet allProjects = [];\n\n(0,_display_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AddProject\": () => (/* binding */ AddProject),\n/* harmony export */   \"createProject\": () => (/* binding */ createProject),\n/* harmony export */   \"deleteProject\": () => (/* binding */ deleteProject),\n/* harmony export */   \"displayProjectsList\": () => (/* binding */ displayProjectsList),\n/* harmony export */   \"setLasttoActive\": () => (/* binding */ setLasttoActive),\n/* harmony export */   \"setToActive\": () => (/* binding */ setToActive),\n/* harmony export */   \"setToInactive\": () => (/* binding */ setToInactive)\n/* harmony export */ });\n/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display.js */ \"./src/display.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n// import { toDate, isToday, isThisWeek, subDays } from 'date-fns';\n\n\n\n\n\n// Project constructor\nfunction AddProject(projectTitle, projectTasks, activeState) {\n    this.projectTitle = projectTitle;\n    this.projectTasks = projectTasks;\n    this.activeState = activeState;\n};\n\n\n\n// Create Project \nfunction createProject(projectName){\n    let newProject = new AddProject(projectName, [] , true);\n    _index_js__WEBPACK_IMPORTED_MODULE_1__.allProjects.push(newProject);\n    displayProjectsList()\n}\n\n// Display all Project list\nfunction displayProjectsList() {\n    const projectBtnList = document.querySelector(\".projectBtnList\");\n    projectBtnList.innerHTML = \"\";\n\n    for(let i = 0; i < _index_js__WEBPACK_IMPORTED_MODULE_1__.allProjects.length; i++){\n        projectBtnList.innerHTML += `\n        <div class=\"projectBtn\" id=\"${i}\">\n            <img src=\"../src/img/projectListIcon.svg\" class=\"projectIcon svg\" id=\"${i}\">\n            <div class=\"projectTitle\" id=\"${i}\">${_index_js__WEBPACK_IMPORTED_MODULE_1__.allProjects[i].projectTitle}</div>\n            <img src=\"../src/img/closeIcon.svg\" class=\"closeIcon svg\" id=\"${i}\">\n        </div>`;\n\n        _index_js__WEBPACK_IMPORTED_MODULE_1__.allProjects[i].activeState = false;\n    };\n\n    setLasttoActive();\n    setToActive();\n    deleteProject();\n}\n\n// Set to active on Click\nfunction setToActive(){\n    const projectBtn = document.getElementsByClassName(\"projectBtn\");\n    \n    for (let i = 0; i < projectBtn.length; i++) {\n        projectBtn[i].addEventListener(\"click\", function () {\n            setToInactive();\n            _index_js__WEBPACK_IMPORTED_MODULE_1__.allProjects[i].activeState = true;\n            this.classList.add(\"active\");\n        });\n    }\n}\n\n// Set to Active the last entered project\nfunction setLasttoActive(){\n    const projectBtnList = document.querySelector(\".projectBtnList\");\n    let lastChild = _index_js__WEBPACK_IMPORTED_MODULE_1__.allProjects.length - 1;\n    if (projectBtnList.innerHTML != ''){\n        projectBtnList.lastChild.classList.add(\"active\");\n        _index_js__WEBPACK_IMPORTED_MODULE_1__.allProjects[lastChild].activeState = true;\n    }\n}\n\n// Set all to Inactive\nfunction setToInactive(){\n    const activeElements = document.querySelectorAll('.active')\n    for (let i = 0; i < activeElements.length; i++)\n    {\n        activeElements[i].classList.remove(\"active\");\n    }\n}\n\n\n\n// Delete Project from Project Array\nfunction deleteProject(){\n    const closeIcon = document.getElementsByClassName(\"closeIcon\");\n    \n    for (let i = 0; i < closeIcon.length; i++) {\n        closeIcon[i].addEventListener(\"click\", function () {\n            _index_js__WEBPACK_IMPORTED_MODULE_1__.allProjects.splice(this.id, 1);   \n\n            setToInactive();\n            displayProjectsList();\n        });\n    }\n};\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/projects.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;