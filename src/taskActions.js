import {showAddNewTask, confirmAddTask, cancelAddTask} from './tasksFunctions.js';

export default function taskDisplay() { 

    // Go through all projects:
        // if no Active: "All tasks"
        // + select and Display all Tasks of all projects

        // If active: Project name
        // + Show tasks of related project

    // If project is changed WHILE add task is open, reload whole page


    const newTaskManagement = document.querySelector(".newTaskManagement");
    


    // ADD TASK BUTTON
    newTaskManagement.addEventListener("click", showAddNewTask);     // Show Add New Task Field
    newTaskManagement.addEventListener('click', confirmAddTask);    // Confirm Add New Task Field
    newTaskManagement.addEventListener('click', cancelAddTask);     // Cancel Add Task Field

};