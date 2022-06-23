/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"allProjects\": () => (/* binding */ allProjects)\n/* harmony export */ });\n/* harmony import */ var _projectActions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectActions.js */ \"./src/projectActions.js\");\n/* harmony import */ var _taskActions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskActions.js */ \"./src/taskActions.js\");\n\n\n\n\n\nlet allProjects = [];\n\n\n\n\n(0,_projectActions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_taskActions_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/projectActions.js":
/*!*******************************!*\
  !*** ./src/projectActions.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ visualDisplay)\n/* harmony export */ });\n/* harmony import */ var _projectsFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectsFunctions.js */ \"./src/projectsFunctions.js\");\n/* harmony import */ var _projectsFunctions_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_projectsFunctions_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\n// import localStorage from './localStorage';\n\n\n\nfunction visualDisplay() { \n\nconst allProjectsDiv = document.querySelector(\".allProjectsDiv\");\n\n// LEFT BAR\nallProjectsDiv.addEventListener(\"click\", _projectsFunctions_js__WEBPACK_IMPORTED_MODULE_0__.showProjectField);     // Show Add Project Field\nallProjectsDiv.addEventListener('click', _projectsFunctions_js__WEBPACK_IMPORTED_MODULE_0__.confirmProjectAdd);    // Confirm Add Project Field\nallProjectsDiv.addEventListener('click', _projectsFunctions_js__WEBPACK_IMPORTED_MODULE_0__.cancelProjectAdd);     // Cancel Add Project Field\n\n    // Click to select project (change background, set to active and true, change title, show tasks);\n    // Click to delete project (split from Array)\n        // if active:       Split from Array Change title to All projects and show all tasks\n        // if not active:   Split from Array only\n\n\n// MAIN FIELD\n\n};\n\n\n//# sourceURL=webpack://to-do-list/./src/projectActions.js?");

/***/ }),

/***/ "./src/projectsFunctions.js":
/*!**********************************!*\
  !*** ./src/projectsFunctions.js ***!
  \**********************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (211:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n|             };\\n| \\n> \");\n\n//# sourceURL=webpack://to-do-list/./src/projectsFunctions.js?");

/***/ }),

/***/ "./src/taskActions.js":
/*!****************************!*\
  !*** ./src/taskActions.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ taskDisplay)\n/* harmony export */ });\n\nfunction taskDisplay() { \n\n    // Go through all projects:\n        // if no Active: \"All tasks\"\n        // + select and Display all Tasks of all projects\n\n        // If active: Project name\n        // + Show tasks of related project\n\n    // If project is changed WHILE add task is open, reload whole page\n\n\n    const newTaskManagement = document.querySelector(\".newTaskManagement\");\n    \n\n\n    // ADD TASK BUTTON\n    newTaskManagement.addEventListener(\"click\", showAddNewTask);     // Show Add New Task Field\n    \n    newTaskManagement.addEventListener('click', cancelAddTask);     // Cancel Add Task Field\n\n\n\n        // Show feature to add tasks\n        function showAddNewTask(e){\n            const showAddTask = document.querySelector(\".showAddTask\");\n            const addTaskMenu = document.querySelector(\".addTaskMenu\");\n            // Check if a project is active\n                // if true: project name already set and focus is on task\n                // if not: can choose project name and focus is on project name\n\n            if (e.target.classList.contains('showAddTask')) {\n                addTaskMenu.innerHTML += `\n                <div class=\"createNewTask\">\n                    <div class=\"addTaskTitle\">Enter your task</div>\n                    <div class=\"lineOneDiv\">\n                        <input type='text' class='addTaskProjectField addInputTaskField textField' placeholder=\"PROJECT NAME\">\n                        <input type='date' class=\"selectDateProjectField addInputTaskField\" placeholder=\"Date\">\n                    </div>  \n                    <div class=\"lineTwoDiv\">\n                        <input type='text' class='taskInputField addInputTaskField textField lineTwoChild' placeholder=\"Task\">\n                        <div class=\"selectPriorityField lineTwoChild\">\n                            <div class=\"selectTaskPriority lowPriorityTask\">Low</div>\n                            <div class=\"selectTaskPriority mediumPriorityTask\">Medium</div>\n                            <div class=\"selectTaskPriority highPriorityTask\">High</div>\n                        </div>\n                    </div>\n                    <div class='newTaskButtons'>\n                        <button class='cancelTaskBtn addingTaskBtn'>Cancel</button>\n                        <button class='confirmTaskBtn addingTaskBtn'>Confirm</button>\n                    </div>\n                </div>`;\n            };     \n            showAddTask.style.display = \"none\";\n\n        };\n    \n        // Confirm adding task\n        function confirmAddTask(e){\n\n            // Set priority to \n\n\n            const addProjectBtn = document.querySelector(\".addProjectBtn\");\n            const allProjectsDiv = document.querySelector(\".allProjectsDiv\");\n            const addProjectTitleField = document.querySelector(\".addProjectTitleField\");\n            \n\n            if (e.target.classList.contains('confirmTaskBtn')) {\n                allProjectsDiv.removeChild(allProjectsDiv.lastChild);\n                addProjectBtn.style.display = \"flex\";\n    \n                // Add Project name to Project Array\n                const projectName = addProjectTitleField.value\n                if (projectName === '') {\n                    alert(\"Project name can't be empty\")\n                    return;\n                };\n    \n                setAllToInactive();\n                createProject(projectName);\n                addToProjectList();\n                setDivToActive();\n                // tasksOfActiveProject();  // Change title\n            };\n            // Push task title to project, priority date...\n            // Set the project pushed to Active\n            // Reload all tasks\n        };\n\n    \n        // Cancel adding task\n        function cancelAddTask(e){    \n            const showAddTask = document.querySelector(\".showAddTask\");\n            const addTaskMenu = document.querySelector(\".addTaskMenu\");\n            if (e.target.classList.contains('cancelTaskBtn')) {\n                addTaskMenu.removeChild(addTaskMenu.lastChild);\n                showAddTask.style.display = \"flex\";\n            }; \n        };\n    \n    };\n\n//# sourceURL=webpack://to-do-list/./src/taskActions.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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