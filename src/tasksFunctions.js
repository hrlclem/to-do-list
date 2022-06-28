import {allProjects} from './index.js';
import {currentActiveProject} from './projectsFunctions.js';

// Add task button appears only if one project is Active

// Task constructor
export function AddTask(taskTitle, dateTask, priorityTask) {
    this.taskTitle = taskTitle;
    this.dateTask = dateTask;
    this.priorityTask = priorityTask;
};


// Show all project related tasks

// Check which project is selected
// When task is added, it pushes to the allProjects.projectTasks, for each task, add date and priority
// Display all tasks of this project

// Delete Tasks from related Project
// Reload all tasks




// SHOW ADD TASKS
    // Show feature to add tasks
    export function showAddNewTask(e){
        const showAddTask = document.querySelector(".showAddTask");
        const addTaskMenu = document.querySelector(".addTaskMenu");

        if (e.target.classList.contains('showAddTask')) {
            addTaskMenu.innerHTML += `
            <div class="createNewTask">
                <div class="lineOneDiv">
                    <div class="addTaskTitle">Enter your task</div>
                    <input type='text' class='taskInputField addInputTaskField textField' placeholder="Task" autofocus="autofocus" onfocus="this.select()">
                    <input type='date' class="selectDateProjectField addInputTaskField" placeholder="Date">
                </div>  
                <div class="lineTwoDiv">
                    <div class="selectPriorityField lineTwoChild">
                        <div class="selectTaskPriority lowPriorityTask">Low</div>
                        <div class="selectTaskPriority mediumPriorityTask">Medium</div>
                        <div class="selectTaskPriority highPriorityTask">High</div>
                    </div>
                </div>
                <div class='newTaskButtons'>
                    <button class='cancelTaskBtn addingTaskBtn'>CANCEL</button>
                    <button class='confirmTaskBtn addingTaskBtn'>CONFIRM</button>
                </div>
            </div>`;
        };     
        showAddTask.style.display = "none";
    };
        
    // Confirm adding task
    export function confirmAddTask(e){

        const addTaskMenu = document.querySelector(".addTaskMenu");
        const taskInputField = document.querySelector(".taskInputField");
        const selectDateProjectField = document.querySelector(".selectDateProjectField");
        const showAddTask = document.querySelector(".showAddTask");

        const taskName = taskInputField.value;
        const dateTask = "01/12/2022";
        const priorityTask = "High";

        if (e.target.classList.contains('confirmTaskBtn')) {

            addTaskMenu.removeChild(addTaskMenu.lastChild);
            showAddTask.style.display ="flex";


            if (taskName === '') {
                    alert("Task  can't be empty")
                    return;
                };

            createTask(taskName, dateTask, priorityTask);
            displayTasksList(currentActiveProject);
        };
    };


        
    // Cancel adding task
    export function cancelAddTask(e){    
        const showAddTask = document.querySelector(".showAddTask");
        const addTaskMenu = document.querySelector(".addTaskMenu");
        if (e.target.classList.contains('cancelTaskBtn')) {
            addTaskMenu.removeChild(addTaskMenu.lastChild);
            showAddTask.style.display = "block";
        }; 
    };
    

// PROJECT ACTIONS
    // Delete task
    export function deleteTask(){

        const checkboxIcon = document.getElementsByClassName("checkboxIcon");
    
        for (let i = 0; i < checkboxIcon.length; i++) {
            checkboxIcon[i].addEventListener("click", function (e) {
                allProjects[currentActiveProject].projectTasks.splice(e.target.id, 1);  
                e.stopPropagation();
                displayTasksList(currentActiveProject);
            });
        }
    };
        // If no tasks in the project, displays: "this project has not tasks"



// MIDDLE ACTIONS
    // Create task 
    export function createTask(taskName, dateTask, priorityTask){
        let newTask = new AddTask(taskName, dateTask, priorityTask);
        allProjects[currentActiveProject].projectTasks.push(newTask);
    };


    // Display to Task list of Project
    export function displayTasksList(selectedProject) {
        const allTasksMain = document.querySelector(".allTasksMain");
        const projectTitleMain = document.querySelector(".projectTitleMain");
        const showAddTask = document.querySelector(".showAddTask");


        allTasksMain.innerHTML = "";

        if(selectedProject >= 0){
            if(allProjects[selectedProject].projectTasks.length == 0){
                allTasksMain.innerHTML += `
                <div class="emptyProject">
                        <div class="emptyProjectField emptyText">This project is empty, add a task to fill it!</div>
                </div>`;
            }
            else {
                for(let i = 0; i < allProjects[selectedProject].projectTasks.length; i++){
                    allTasksMain.innerHTML += `
                    <div class="taskMain" id="${i}">
                        <div class="leftSideTask" id="${i}">
                            <img src="../src/img/checkbox.svg" class="checkboxIcon svg" id="${i}">
                            <div class="taskNameTitle leftSideTask" id="${i}">${allProjects[selectedProject].projectTasks[i].taskTitle}</div>
                        </div>
                        <div class="rightSideTask" id="${i}">
                            <div class="taskPriority rightSideTask" id="${i}">${allProjects[selectedProject].projectTasks[i].priorityTask}</div>
                            <div class="taskDate" id="${i}">${allProjects[selectedProject].projectTasks[i].dateTask}</div>
                        </div>
                    </div>`;
                };
            
                priorityCheck();
                deleteTask();
            }
            showAddTask.style.display = "flex";
        }
        else{
            projectTitleMain.innerHTML = `All Tasks`;
            showAddTask.style.display = "none";
            displayAllTasks();
        }
    


    }

    // Display all tasks if no project active
    export function displayAllTasks() {
        const allTasksMain = document.querySelector(".allTasksMain");
        allTasksMain.innerHTML = "";
    
            for(let i = 0; i < allProjects.length; i++){
                for(let j = 0; j < allProjects[i].projectTasks.length; j++){
                    allTasksMain.innerHTML += `
                    <div class="taskMain" id="${i}">
                        <div class="leftSideTask" id="${i}">
                            <div class="taskNameTitle leftSideTask" id="${i}">${allProjects[i].projectTasks[j].taskTitle}</div>
                        </div>
                        <div class="rightSideTask" id="${i}">
                            <div class="taskPriority rightSideTask" id="${i}">${allProjects[i].projectTasks[j].priorityTask}</div>
                            <div class="taskDate" id="${i}">${allProjects[i].projectTasks[j].dateTask}</div>
                        </div>
                    </div>`;
                }
            };
        
            priorityCheck();
            deleteTask();
    };
    

    // Priority color check
    export function priorityCheck() {
        const taskPriority = document.querySelectorAll(".taskPriority");
        for (let i = 0; i < taskPriority.length; i++){
            if(taskPriority[i].innerHTML == "High"){
                taskPriority[i].classList.add("highPriorityTask");
            }
            if(taskPriority[i].innerHTML == "Medium"){
                taskPriority[i].classList.add("mediumPriorityTask");
            }
            if(taskPriority[i].innerHTML == "Low"){
                taskPriority[i].classList.add("lowPriorityTask");
            }
        };
    }

