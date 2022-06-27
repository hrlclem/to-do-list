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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"allProjects\": () => (/* binding */ allProjects)\n/* harmony export */ });\n/* harmony import */ var _projectActions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectActions.js */ \"./src/projectActions.js\");\n/* harmony import */ var _projectsFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectsFunctions.js */ \"./src/projectsFunctions.js\");\n/* harmony import */ var _taskActions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskActions.js */ \"./src/taskActions.js\");\n\n\n\n\n\n\n\nlet allProjects = [{projectTitle: \"First project\", \n                    projectTasks: [\n                        {taskTitle : \"Groceries\", dateTask : \"06/07/2022\", priorityTask : \"High\"}, \n                        {taskTitle : \"Practice Piano\", dateTask : \"30/05/2022\", priorityTask : \"Medium\"}, \n                        {taskTitle : \"Do Japanese Homework\", dateTask : \"16/02/2021\", priorityTask : \"Low\"}\n                    ], \n                    activeState: true},\n\n                    {projectTitle: \"Second project\", \n                    projectTasks: [\n                        {taskTitle : \"Go to Library\", dateTask : \"09/06/2022\", priorityTask : \"High\"}, \n                        {taskTitle : \"Get doctor's appointment\", dateTask : \"15/07/2022\", priorityTask : \"Medium\"}, \n                        {taskTitle : \"Do History Homework\", dateTask : \"12/04/2022\", priorityTask : \"Low\"}\n                    ], \n                    activeState: false},\n\n                    {projectTitle: \"Third project\", \n                    projectTasks: [\n                        {taskTitle : \"Check flight's prices\", dateTask : \"15/10/2022\", priorityTask : \"High\"}, \n                        {taskTitle : \"Sport\", dateTask : \"09/12/2022\", priorityTask : \"Medium\"}, \n                        {taskTitle : \"Do Coding Homework\", dateTask : \"04/04/2022\", priorityTask : \"Low\"}\n                    ], \n                    activeState: false}];\n\n\n\n\n\n\n\n(0,_projectActions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_taskActions_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/projectActions.js":
/*!*******************************!*\
  !*** ./src/projectActions.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ visualDisplay)\n/* harmony export */ });\n/* harmony import */ var _projectsFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectsFunctions.js */ \"./src/projectsFunctions.js\");\n\n\n// import localStorage from './localStorage';\n\n\n\nfunction visualDisplay() { \n\nconst allProjectsDiv = document.querySelector(\".allProjectsDiv\");\n\n// LEFT BAR\nallProjectsDiv.addEventListener(\"click\", _projectsFunctions_js__WEBPACK_IMPORTED_MODULE_0__.showProjectField);     // Show Add Project Field\nallProjectsDiv.addEventListener('click', _projectsFunctions_js__WEBPACK_IMPORTED_MODULE_0__.confirmProjectAdd);    // Confirm Add Project Field\nallProjectsDiv.addEventListener('click', _projectsFunctions_js__WEBPACK_IMPORTED_MODULE_0__.cancelProjectAdd);     // Cancel Add Project Field\n\n    // Click to select project (change background, set to active and true, change title, show tasks);\n    // Click to delete project (split from Array)\n        // if active:       Split from Array Change title to All projects and show all tasks\n        // if not active:   Split from Array only\n\n\n// MAIN FIELD\n\n};\n\n\n//# sourceURL=webpack://to-do-list/./src/projectActions.js?");

/***/ }),

/***/ "./src/projectsFunctions.js":
/*!**********************************!*\
  !*** ./src/projectsFunctions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AddProject\": () => (/* binding */ AddProject),\n/* harmony export */   \"cancelProjectAdd\": () => (/* binding */ cancelProjectAdd),\n/* harmony export */   \"confirmProjectAdd\": () => (/* binding */ confirmProjectAdd),\n/* harmony export */   \"createProject\": () => (/* binding */ createProject),\n/* harmony export */   \"deleteProject\": () => (/* binding */ deleteProject),\n/* harmony export */   \"displayProjectsList\": () => (/* binding */ displayProjectsList),\n/* harmony export */   \"onClickSetToActive\": () => (/* binding */ onClickSetToActive),\n/* harmony export */   \"selectedProject\": () => (/* binding */ selectedProject),\n/* harmony export */   \"setAllToInactive\": () => (/* binding */ setAllToInactive),\n/* harmony export */   \"setDivToActive\": () => (/* binding */ setDivToActive),\n/* harmony export */   \"showProjectField\": () => (/* binding */ showProjectField),\n/* harmony export */   \"tasksOfActiveProject\": () => (/* binding */ tasksOfActiveProject)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* harmony import */ var _tasksFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasksFunctions.js */ \"./src/tasksFunctions.js\");\n// import { toDate, isToday, isThisWeek, subDays } from 'date-fns';\n\n\n\n\n\n\n\n// Project constructor\nfunction AddProject(projectTitle, projectTasks, activeState) {\n    this.projectTitle = projectTitle;\n    this.projectTasks = projectTasks;\n    this.activeState = activeState;\n};\n\nlet currentActiveProject;\n\n\n\n// SHOW ADD PROJECTS\n    // Show feature to add projects\n    function showProjectField(e){\n        const addProjectBtn = document.querySelector(\".addProjectBtn\");\n        const allProjectsDiv = document.querySelector(\".allProjectsDiv\");\n        if (e.target.classList.contains('showAddProject')) {\n            addProjectBtn.style.display = \"none\";\n            allProjectsDiv.innerHTML += `\n                <div class='addingProjectDiv'>\n                    <input type='text' class='addProjectTitleField' autofocus=\"autofocus\" onfocus=\"this.select()\">\n                    <div class='newProjectButtons'>\n                        <button class='confirmProjectBtn addingProjectBtn'>Confirm</button>\n                        <button class='cancelProjectBtn addingProjectBtn'>Cancel</button>\n                    </div>\n                </div>`;\n        };               \n    };\n\n\n    // Confirm adding project\n    function confirmProjectAdd(e){\n        const addProjectBtn = document.querySelector(\".addProjectBtn\");\n        const allProjectsDiv = document.querySelector(\".allProjectsDiv\");\n        const addProjectTitleField = document.querySelector(\".addProjectTitleField\");\n\n        if (e.target.classList.contains('confirmProjectBtn')) {\n            allProjectsDiv.removeChild(allProjectsDiv.lastChild);\n            addProjectBtn.style.display = \"flex\";\n\n            // Add Project name to Project Array\n            const projectName = addProjectTitleField.value\n            if (projectName === '') {\n                alert(\"Project name can't be empty\")\n                return;\n            };\n\n            setAllToInactive();\n            createProject(projectName);\n            displayProjectsList();\n            setDivToActive();\n        };\n    };\n\n\n    // Cancel adding project\n    function cancelProjectAdd(e){                   \n        const addProjectBtn = document.querySelector(\".addProjectBtn\");\n        const allProjectsDiv = document.querySelector(\".allProjectsDiv\");\n        if (e.target.classList.contains('cancelProjectBtn')) {\n            allProjectsDiv.removeChild(allProjectsDiv.lastChild);\n            addProjectBtn.style.display = \"flex\";\n        };\n    };\n\n\n\n\n\n\n// PROJECT ACTIONS\n// Set to active on Click\nfunction onClickSetToActive(){\n    const projectBtn = document.getElementsByClassName(\"projectBtn\");\n\n    for (let i = 0; i < projectBtn.length; i++) {\n        projectBtn[i].addEventListener(\"click\", function () {\n            setAllToInactive();\n            _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[i].activeState = true;\n            setDivToActive();\n        });\n    }\n};\n\n// Delete button\nfunction deleteProject(){\n    const closeIcon = document.getElementsByClassName(\"closeIcon\");\n    const projectTitleMain = document.querySelector(\".projectTitleMain\");\n\n    for (let i = 0; i < closeIcon.length; i++) {\n        closeIcon[i].addEventListener(\"click\", function (e) {\n            if(_index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[i].activeState == true){\n                projectTitleMain.innerHTML = `All tasks`;\n                _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects.splice(this.id, 1);  \n                // Show all tasks HERE OR HERE\n                // Display all tasks of all projects\n                (0,_tasksFunctions_js__WEBPACK_IMPORTED_MODULE_1__.displayTasksList)(currentActiveProject);\n                setAllToInactive();\n                e.stopPropagation();\n                displayProjectsList();\n            }\n            else {\n                _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects.splice(this.id, 1); \n                e.stopPropagation();\n                displayProjectsList();\n            }\n        });\n    }\n};\n\n\n\n\n\n\n\n\n\n\n// MIDDLE ACTIONS\n    // Create Project \n    function createProject(projectName){\n        let newProject = new AddProject(projectName, [] , true);\n        _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects.push(newProject);\n    };\n\n    // Display to Project list\n    function displayProjectsList() {\n        const projectBtnList = document.querySelector(\".projectBtnList\");\n        projectBtnList.innerHTML = \"\";\n\n        for(let i = 0; i < _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects.length; i++){\n            projectBtnList.innerHTML += `\n            <div class=\"projectBtn\" id=\"${i}\">\n                <img src=\"../src/img/projectListIcon.svg\" class=\"projectIcon svg\" id=\"${i}\">\n                <div class=\"projectTitle\" id=\"${i}\">${_index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[i].projectTitle}</div>\n                <img src=\"../src/img/closeIcon.svg\" class=\"closeIcon svg\" id=\"${i}\">\n            </div>`;\n        };\n        setDivToActive();\n        onClickSetToActive();\n        deleteProject();\n    };\n\n\n    // Set all to Inactive\n    function setAllToInactive(){\n        const activeElements = document.querySelectorAll('.active')\n        for (let i = 0; i < activeElements.length; i++){\n            activeElements[i].classList.remove(\"active\");\n        };\n        for(let j = 0; j < _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects.length; j++){\n            _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[j].activeState = false;\n        };\n    };\n\n    // Show the true active state\n    function setDivToActive(){\n        for (let i = 0; i < _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects.length; i++) {\n                if(_index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[i].activeState == true){\n                    let toSetToActive = document.getElementById(`${i}`);\n                    toSetToActive.classList.add(\"active\");\n                }\n                tasksOfActiveProject();\n\n        };\n    };\n\n    // On selected Project, shows related tasks and changes ProjectTitle in Right side\n    function tasksOfActiveProject(){\n        selectedProject();\n\n        for (let i = 0; i < _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects.length; i++) {\n            const projectTitleMain = document.querySelector(\".projectTitleMain\");\n                if(_index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[i].activeState == true){\n                    projectTitleMain.innerHTML = `${_index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[i].projectTitle} tasks`;\n                    // Show all tasks HERE OR HERE\n                    (0,_tasksFunctions_js__WEBPACK_IMPORTED_MODULE_1__.displayTasksList)(currentActiveProject);\n\n                    return;\n                }\n                else {\n                    projectTitleMain.innerHTML = `All Projects`;\n                    // Show all tasks HERE OR HERE FOR ALL PROJECTS\n\n                }\n            };\n    };\n\n\n\n    // Check if project is selected\n    function selectedProject(){\n        for(let i = 0; i < _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects.length; i++){\n            if(_index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[i].activeState == true){\n                // i being index of the project in the array\n                currentActiveProject = i;\n                return currentActiveProject;\n            }\n        };\n    };\n\n\n//# sourceURL=webpack://to-do-list/./src/projectsFunctions.js?");

/***/ }),

/***/ "./src/taskActions.js":
/*!****************************!*\
  !*** ./src/taskActions.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ taskDisplay)\n/* harmony export */ });\n/* harmony import */ var _tasksFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasksFunctions.js */ \"./src/tasksFunctions.js\");\n\n\n\n\n\n\nfunction taskDisplay() { \n\n    const newTaskManagement = document.querySelector(\".newTaskManagement\");\n    \n    // ADD TASK BUTTON\n    newTaskManagement.addEventListener(\"click\", _tasksFunctions_js__WEBPACK_IMPORTED_MODULE_0__.showAddNewTask);     // Show Add New Task Field\n    newTaskManagement.addEventListener('click', _tasksFunctions_js__WEBPACK_IMPORTED_MODULE_0__.confirmAddTask);    // Confirm Add New Task Field\n    newTaskManagement.addEventListener('click', _tasksFunctions_js__WEBPACK_IMPORTED_MODULE_0__.cancelAddTask);     // Cancel Add Task Field\n\n\n        // Go through all projects:\n        // if no Active: \"All tasks\"\n        // + select and Display all Tasks of all projects\n\n        // If active: Project name\n        // + Show tasks of related project\n\n    // If project is changed WHILE add task is open, reload whole page\n\n};\n\n//# sourceURL=webpack://to-do-list/./src/taskActions.js?");

/***/ }),

/***/ "./src/tasksFunctions.js":
/*!*******************************!*\
  !*** ./src/tasksFunctions.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AddTask\": () => (/* binding */ AddTask),\n/* harmony export */   \"cancelAddTask\": () => (/* binding */ cancelAddTask),\n/* harmony export */   \"confirmAddTask\": () => (/* binding */ confirmAddTask),\n/* harmony export */   \"displayTasksList\": () => (/* binding */ displayTasksList),\n/* harmony export */   \"priorityCheck\": () => (/* binding */ priorityCheck),\n/* harmony export */   \"showAddNewTask\": () => (/* binding */ showAddNewTask)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\n// Add task button appears only if one project is Active\n\n// Task constructor\nfunction AddTask(taskTitle, dateTask, priorityTask) {\n    this.taskTitle = taskTitle;\n    this.dateTask = dateTask;\n    this.priorityTask = priorityTask;\n};\n\n\n// Show all project related tasks\n\n// Check which project is selected\n// When task is added, it pushes to the allProjects.projectTasks, for each task, add date and priority\n// Display all tasks of this project\n\n// Delete Tasks from related Project\n// Reload all tasks\n\n\n\n\n// SHOW ADD TASKS\n    // Show feature to add tasks\n    function showAddNewTask(e){\n        const showAddTask = document.querySelector(\".showAddTask\");\n        const addTaskMenu = document.querySelector(\".addTaskMenu\");\n\n        if (e.target.classList.contains('showAddTask')) {\n            addTaskMenu.innerHTML += `\n            <div class=\"createNewTask\">\n                <div class=\"lineOneDiv\">\n                    <div class=\"addTaskTitle\">Enter your task</div>\n                    <input type='text' class='taskInputField addInputTaskField textField' placeholder=\"Task\">\n                    <input type='date' class=\"selectDateProjectField addInputTaskField\" placeholder=\"Date\">\n                </div>  \n                <div class=\"lineTwoDiv\">\n                    <div class=\"selectPriorityField lineTwoChild\">\n                        <div class=\"selectTaskPriority lowPriorityTask\">Low</div>\n                        <div class=\"selectTaskPriority mediumPriorityTask\">Medium</div>\n                        <div class=\"selectTaskPriority highPriorityTask\">High</div>\n                    </div>\n                </div>\n                <div class='newTaskButtons'>\n                    <button class='cancelTaskBtn addingTaskBtn'>CANCEL</button>\n                    <button class='confirmTaskBtn addingTaskBtn'>CONFIRM</button>\n                </div>\n            </div>`;\n        };     \n        showAddTask.style.display = \"none\";\n    };\n        \n    // Confirm adding task\n    function confirmAddTask(e){\n\n        // const addTaskMenu = document.querySelector(\".addTaskMenu\");\n\n\n        // if (e.target.classList.contains('confirmTaskBtn')) {\n        //     addTaskMenu.removeChild(addTaskMenu.lastChild);\n\n        // //     // Add Project name to Project Array\n        // //     const projectName = addProjectTitleField.value\n        // //     if (projectName === '') {\n        // //         alert(\"Project name can't be empty\")\n        // //         return;\n        // //     };\n\n        // //     setAllToInactive();\n        // //     createProject(projectName);\n        // //     addToProjectList();\n        // //     setDivToActive();\n        // //     // tasksOfActiveProject();  // Change title\n        // // };\n        // // // Push task title to project, priority date...\n        // // // Set the project pushed to Active\n        // // // Reload all tasks\n        // displayTasksList(selectedProject);\n    };\n\n        \n    // Cancel adding task\n    function cancelAddTask(e){    \n        const showAddTask = document.querySelector(\".showAddTask\");\n        const addTaskMenu = document.querySelector(\".addTaskMenu\");\n        if (e.target.classList.contains('cancelTaskBtn')) {\n            addTaskMenu.removeChild(addTaskMenu.lastChild);\n            showAddTask.style.display = \"block\";\n        }; \n    };\n    \n\n// PROJECT ACTIONS\n    // Delete task\n        // If no tasks in the project, displays: \"this project has not tasks\"\n\n\n\n// MIDDLE ACTIONS\n    // Display to Task list of Project\n    function displayTasksList(selectedProject) {\n    const allTasksMain = document.querySelector(\".allTasksMain\");\n    allTasksMain.innerHTML = \"\";\n\n    let currentProject = _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[selectedProject];\n\n    for(let i = 0; i < currentProject.projectTasks.length; i++){\n        allTasksMain.innerHTML += `\n        <div class=\"taskMain\">\n            <div class=\"leftSideTask\">\n                <div class=\"taskNameTitle leftSideTask\">${_index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[selectedProject].projectTasks[i].taskTitle}</div>\n            </div>\n            <div class=\"rightSideTask\">\n                <div class=\"taskPriority rightSideTask\">${_index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[selectedProject].projectTasks[i].priorityTask}</div>\n                <div class=\"taskNameTitle \">${_index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[selectedProject].projectTasks[i].dateTask}</div>\n            </div>\n        </div>`;\n    };\n\n    priorityCheck();\n}\n\n    // Priority color check\n    function priorityCheck() {\n        const taskPriority = document.querySelectorAll(\".taskPriority\");\n        for (let i = 0; i < taskPriority.length; i++){\n            if(taskPriority[i].innerHTML == \"High\"){\n                taskPriority[i].classList.add(\"highPriorityTask\");\n                console.log(1);\n            }\n            if(taskPriority[i].innerHTML == \"Medium\"){\n                taskPriority[i].classList.add(\"mediumPriorityTask\");\n            }\n            if(taskPriority[i].innerHTML == \"Low\"){\n                taskPriority[i].classList.add(\"lowPriorityTask\");\n            }\n        };\n    }\n\n\n\n//# sourceURL=webpack://to-do-list/./src/tasksFunctions.js?");

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