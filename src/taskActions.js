import {displayAllTasks, hideAddTask, showAddNewTask, confirmAddTask, cancelAddTask} from './tasksFunctions.js';




export default function taskDisplay() { 

    const newTaskManagement = document.querySelector(".newTaskManagement");
    const addTasksMain = document.querySelector(".addTasksMain");

    // ADD TASK BUTTON
    addTasksMain.addEventListener("click", showAddNewTask);     // Show Add New Task Field
    newTaskManagement.addEventListener('click', confirmAddTask);    // Confirm Add New Task Field
    newTaskManagement.addEventListener('click', cancelAddTask);     // Cancel Add Task Field

    displayAllTasks();
    hideAddTask();
};