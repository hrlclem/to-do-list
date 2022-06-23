import {allProjects} from './index.js';

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
                    <input type='text' class='taskInputField addInputTaskField textField' placeholder="Task">
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




        // const addProjectBtn = document.querySelector(".addProjectBtn");
        // const allProjectsDiv = document.querySelector(".allProjectsDiv");
        // const addProjectTitleField = document.querySelector(".addProjectTitleField");
        

        // if (e.target.classList.contains('confirmTaskBtn')) {
        //     allProjectsDiv.removeChild(allProjectsDiv.lastChild);
        //     addProjectBtn.style.display = "flex";

        //     // Add Project name to Project Array
        //     const projectName = addProjectTitleField.value
        //     if (projectName === '') {
        //         alert("Project name can't be empty")
        //         return;
        //     };

        //     setAllToInactive();
        //     createProject(projectName);
        //     addToProjectList();
        //     setDivToActive();
        //     // tasksOfActiveProject();  // Change title
        // };
        // // Push task title to project, priority date...
        // // Set the project pushed to Active
        // // Reload all tasks
    };

        
    // Cancel adding task
    export function cancelAddTask(e){    
        const showAddTask = document.querySelector(".showAddTask");
        const addTaskMenu = document.querySelector(".addTaskMenu");
        if (e.target.classList.contains('cancelTaskBtn')) {
            addTaskMenu.removeChild(addTaskMenu.lastChild);
            showAddTask.style.display = "flex";
        }; 
    };
    

// PROJECT ACTIONS
    // Delete task
        // If no tasks in the project, displays: "this project has not tasks"



// MIDDLE ACTIONS
    // Display to Task list of Project
    export function displayTasksList(selectedProject) {
    const allTasksMain = document.querySelector(".allTasksMain");
    allTasksMain.innerHTML = "";
    console.log(22);

    let currentProject = allProjects[selectedProject];
    
    for(let i = 0; i < projectTasks.length; i++){
        allTasksMain.innerHTML += `
        <div class="taskMain">
            <div class="leftSideTask">
                <div class="taskNameTitle leftSideTask">${currentProject.projectTasks[i].taskTitle}</div>
            </div>
            <div class="rightSideTask">
                <div class="taskPriority rightSideTask highPriority">${currentProject.projectTasks[i].priorityTask}</div>
                <div class="taskNameTitle ">${currentProject.projectTasks[i].dateTask}</div>
            </div>
        </div>`;
    };
}

