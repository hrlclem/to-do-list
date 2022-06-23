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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"allProjects\": () => (/* binding */ allProjects)\n/* harmony export */ });\n/* harmony import */ var _projectDisplay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectDisplay.js */ \"./src/projectDisplay.js\");\n/* harmony import */ var _taskDisplay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskDisplay.js */ \"./src/taskDisplay.js\");\n\n\n\n\nlet allProjects = [];\n\n\n\n\n(0,_projectDisplay_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_taskDisplay_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/projectDisplay.js":
/*!*******************************!*\
  !*** ./src/projectDisplay.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ visualDisplay)\n/* harmony export */ });\n/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.js */ \"./src/projects.js\");\n\n\n// import localStorage from './localStorage';\n\n\n\nfunction visualDisplay() { \n\nconst allProjectsDiv = document.querySelector(\".allProjectsDiv\");\n\n// LEFT BAR BUTTONS\nallProjectsDiv.addEventListener(\"click\", showProjectField);     // Show Add Project Field\nallProjectsDiv.addEventListener('click', confirmProjectAdd);    // Confirm Add Project Field\nallProjectsDiv.addEventListener('click', cancelProjectAdd);     // Cancel Add Project Field\n\n\n\n    // Show feature to add projects\n    function showProjectField(e){\n        const addProjectBtn = document.querySelector(\".addProjectBtn\");\n        const allProjectsDiv = document.querySelector(\".allProjectsDiv\");\n        if (e.target.classList.contains('showAddProject')) {\n            addProjectBtn.style.display = \"none\";\n            allProjectsDiv.innerHTML += `\n                <div class='addingProjectDiv'>\n                    <input type='text' class='addProjectTitleField'>\n                    <div class='newProjectButtons'>\n                        <button class='confirmProjectBtn addingProjectBtn'>Confirm</button>\n                        <button class='cancelProjectBtn addingProjectBtn'>Cancel</button>\n                    </div>\n                </div>`;\n        };               \n    };\n\n\n\n    // Confirm adding project\n    function confirmProjectAdd(e){\n        const addProjectBtn = document.querySelector(\".addProjectBtn\");\n        const allProjectsDiv = document.querySelector(\".allProjectsDiv\");\n        const addProjectTitleField = document.querySelector(\".addProjectTitleField\");\n\n        if (e.target.classList.contains('confirmProjectBtn')) {\n            allProjectsDiv.removeChild(allProjectsDiv.lastChild);\n            addProjectBtn.style.display = \"flex\";\n\n            // Add Project name to Project Array\n            const projectName = addProjectTitleField.value\n            if (projectName === '') {\n                alert(\"Project name can't be empty\")\n                return\n            };\n            (0,_projects_js__WEBPACK_IMPORTED_MODULE_0__.setAllToInactive)();\n            (0,_projects_js__WEBPACK_IMPORTED_MODULE_0__.createProject)(projectName);\n            (0,_projects_js__WEBPACK_IMPORTED_MODULE_0__.displayProjectsList)();\n            (0,_projects_js__WEBPACK_IMPORTED_MODULE_0__.setDivToActive)();\n            // tasksOfActiveProject();  // Change title\n        };\n    };\n\n\n\n\n    // Cancel adding project\n    function cancelProjectAdd(e){                   \n        const addProjectBtn = document.querySelector(\".addProjectBtn\");\n        const allProjectsDiv = document.querySelector(\".allProjectsDiv\");\n        if (e.target.classList.contains('cancelProjectBtn')) {\n            allProjectsDiv.removeChild(allProjectsDiv.lastChild);\n            addProjectBtn.style.display = \"flex\";\n        };\n    };\n\n\n// Display to add new task in project(includes title, priority and date)\n\n};\n\n\n//# sourceURL=webpack://to-do-list/./src/projectDisplay.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AddProject\": () => (/* binding */ AddProject),\n/* harmony export */   \"createProject\": () => (/* binding */ createProject),\n/* harmony export */   \"deleteProject\": () => (/* binding */ deleteProject),\n/* harmony export */   \"displayProjectsList\": () => (/* binding */ displayProjectsList),\n/* harmony export */   \"onClickSetToActive\": () => (/* binding */ onClickSetToActive),\n/* harmony export */   \"setAllToInactive\": () => (/* binding */ setAllToInactive),\n/* harmony export */   \"setDivToActive\": () => (/* binding */ setDivToActive),\n/* harmony export */   \"tasksOfActiveProject\": () => (/* binding */ tasksOfActiveProject)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n// import { toDate, isToday, isThisWeek, subDays } from 'date-fns';\n\n\n\n\n// Project constructor\nfunction AddProject(projectTitle, projectTasks, activeState) {\n    this.projectTitle = projectTitle;\n    this.projectTasks = projectTasks;\n    this.activeState = activeState;\n};\n\n\n\n\n\n\n\n\n\n// Create Project \nfunction createProject(projectName){\n    let newProject = new AddProject(projectName, [] , true);\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects.push(newProject);\n    console.log(1);\n\n}\n\n\n\n// Display all Project list\nfunction displayProjectsList() {\n    const projectBtnList = document.querySelector(\".projectBtnList\");\n    projectBtnList.innerHTML = \"\";\n    console.log(2);\n\n    for(let i = 0; i < _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects.length; i++){\n        projectBtnList.innerHTML += `\n        <div class=\"projectBtn\" id=\"${i}\">\n            <img src=\"../src/img/projectListIcon.svg\" class=\"projectIcon svg\" id=\"${i}\">\n            <div class=\"projectTitle\" id=\"${i}\">${_index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[i].projectTitle}</div>\n            <img src=\"../src/img/closeIcon.svg\" class=\"closeIcon svg\" id=\"${i}\">\n        </div>`;\n    };\n    onClickSetToActive();\n    deleteProject();\n}\n\n\n\n\n// Set to active on Click\nfunction onClickSetToActive(){\n    const projectBtn = document.getElementsByClassName(\"projectBtn\");\n    console.log(3);\n    for (let i = 0; i < projectBtn.length; i++) {\n        projectBtn[i].addEventListener(\"click\", function () {\n            setAllToInactive();\n            // ISSUE HERE\n            _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[i].activeState = true;\n            setDivToActive();\n            tasksOfActiveProject();\n        });\n    }\n    // TODO: Display all related tasks\n};\n\n\n// Show the true active state\nfunction setDivToActive(){\n    for (let i = 0; i < _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects.length; i++) {\n            if(_index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[i].activeState == true){\n                console.log(4);\n                let toSetToActive = document.getElementById(`${i}`);\n                toSetToActive.classList.add(\"active\");\n                tasksOfActiveProject();\n            }\n    };\n}\n\n\n\n\n// Set all to Inactive\nfunction setAllToInactive(){\n    const activeElements = document.querySelectorAll('.active')\n    console.log(5);\n\n    for (let i = 0; i < activeElements.length; i++)\n    {\n        activeElements[i].classList.remove(\"active\");\n        for(let i = 0; i < _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects.length; i++){\n            _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[i].activeState = false;\n        }\n    }\n};\n\n\n\n// Delete Project from Project Array\nfunction deleteProject(){\n    const closeIcon = document.getElementsByClassName(\"closeIcon\");\n    console.log(6);\n\n    for (let i = 0; i < closeIcon.length; i++) {\n        closeIcon[i].addEventListener(\"click\", function () {\n            if(_index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[i].activeState == true){\n                const projectTitleMain = document.querySelector(\".projectTitleMain\");\n                projectTitleMain.innerHTML = `All tasks`;\n                _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects.splice(this.id, 1);   \n                displayProjectsList();\n            }\n            else {\n                _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects.splice(this.id, 1);   \n                displayProjectsList();\n            }\n            console.log(\"YES\");\n        });\n    }\n    console.log(_index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects);\n};\n\n\n\n\n\n// On selected Project, shows related tasks and changes ProjectTitle in Right side\nfunction tasksOfActiveProject(){\n    console.log(7);\n\n    for (let i = 0; i < _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects.length; i++) {\n        const projectTitleMain = document.querySelector(\".projectTitleMain\");\n            if(_index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[i].activeState == true){\n                projectTitleMain.innerHTML = `${_index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[i].projectTitle} tasks`;\n                return;\n            }\n            else {\n                projectTitleMain.innerHTML = `All Projects`;\n                // Display all tasks of all projects\n            }\n        };\n};\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/projects.js?");

/***/ }),

/***/ "./src/taskDisplay.js":
/*!****************************!*\
  !*** ./src/taskDisplay.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ taskDisplay)\n/* harmony export */ });\n\nfunction taskDisplay() { \n\n    // Project title change\n    // Go through all projects:\n        // if no Active: \"All tasks\"\n        // + select and Display all Tasks of all projects\n\n        // If active: Project name\n        // + Show tasks of related project\n\n\n    const newTaskManagement = document.querySelector(\".newTaskManagement\");\n    \n\n\n    // ADD TASK BUTTON\n    newTaskManagement.addEventListener(\"click\", showAddNewTask);     // Show Add New Task Field\n    \n    newTaskManagement.addEventListener('click', cancelAddTask);     // Cancel Add Task Field\n\n\n\n        // Show feature to add tasks\n        function showAddNewTask(e){\n            const showAddTask = document.querySelector(\".showAddTask\");\n            const addTaskMenu = document.querySelector(\".addTaskMenu\");\n\n\n            if (e.target.classList.contains('showAddTask')) {\n                addTaskMenu.innerHTML += `\n                <div class=\"createNewTask\">\n                    <div class=\"addTaskTitle\">Enter your task</div>\n                    <div class=\"lineOneDiv\">\n                        <input type='text' class='addTaskProjectField addInputTaskField textField' placeholder=\"PROJECT NAME\">\n                        <input type='date' class=\"selectDateProjectField addInputTaskField\" placeholder=\"Date\">\n                    </div>  \n                    <div class=\"lineTwoDiv\">\n                        <input type='text' class='taskInputField addInputTaskField textField lineTwoChild' placeholder=\"Task\">\n                        <div class=\"selectPriorityField lineTwoChild\">\n                            <div class=\"selectTaskPriority lowPriorityTask\">Low</div>\n                            <div class=\"selectTaskPriority mediumPriorityTask\">Medium</div>\n                            <div class=\"selectTaskPriority highPriorityTask\">High</div>\n                        </div>\n                    </div>\n                    <div class='newTaskButtons'>\n                        <button class='cancelTaskBtn addingTaskBtn'>Cancel</button>\n                        <button class='confirmTaskBtn addingTaskBtn'>Confirm</button>\n                    </div>\n                </div>`;\n            };     \n            showAddTask.style.display = \"none\";\n\n        };\n    \n        // Confirm adding task\n        function confirmAddTask(e){\n            // Push task title to project, priority date...\n            // Set the project pushed to Active\n            // Reload all tasks\n        };\n    \n        // Cancel adding task\n        function cancelAddTask(e){    \n            const showAddTask = document.querySelector(\".showAddTask\");\n            const addTaskMenu = document.querySelector(\".addTaskMenu\");\n            if (e.target.classList.contains('cancelTaskBtn')) {\n                addTaskMenu.removeChild(addTaskMenu.lastChild);\n                showAddTask.style.display = \"flex\";\n            }; \n        };\n    \n    };\n\n//# sourceURL=webpack://to-do-list/./src/taskDisplay.js?");

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