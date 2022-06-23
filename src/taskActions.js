
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
    
    newTaskManagement.addEventListener('click', cancelAddTask);     // Cancel Add Task Field



        // Show feature to add tasks
        function showAddNewTask(e){
            const showAddTask = document.querySelector(".showAddTask");
            const addTaskMenu = document.querySelector(".addTaskMenu");
            // Check if a project is active
                // if true: project name already set and focus is on task
                // if not: can choose project name and focus is on project name

            if (e.target.classList.contains('showAddTask')) {
                addTaskMenu.innerHTML += `
                <div class="createNewTask">
                    <div class="addTaskTitle">Enter your task</div>
                    <div class="lineOneDiv">
                        <input type='text' class='addTaskProjectField addInputTaskField textField' placeholder="PROJECT NAME">
                        <input type='date' class="selectDateProjectField addInputTaskField" placeholder="Date">
                    </div>  
                    <div class="lineTwoDiv">
                        <input type='text' class='taskInputField addInputTaskField textField lineTwoChild' placeholder="Task">
                        <div class="selectPriorityField lineTwoChild">
                            <div class="selectTaskPriority lowPriorityTask">Low</div>
                            <div class="selectTaskPriority mediumPriorityTask">Medium</div>
                            <div class="selectTaskPriority highPriorityTask">High</div>
                        </div>
                    </div>
                    <div class='newTaskButtons'>
                        <button class='cancelTaskBtn addingTaskBtn'>Cancel</button>
                        <button class='confirmTaskBtn addingTaskBtn'>Confirm</button>
                    </div>
                </div>`;
            };     
            showAddTask.style.display = "none";

        };
    
        // Confirm adding task
        function confirmAddTask(e){

            // Set priority to 


            const addProjectBtn = document.querySelector(".addProjectBtn");
            const allProjectsDiv = document.querySelector(".allProjectsDiv");
            const addProjectTitleField = document.querySelector(".addProjectTitleField");
            

            if (e.target.classList.contains('confirmTaskBtn')) {
                allProjectsDiv.removeChild(allProjectsDiv.lastChild);
                addProjectBtn.style.display = "flex";
    
                // Add Project name to Project Array
                const projectName = addProjectTitleField.value
                if (projectName === '') {
                    alert("Project name can't be empty")
                    return;
                };
    
                setAllToInactive();
                createProject(projectName);
                addToProjectList();
                setDivToActive();
                // tasksOfActiveProject();  // Change title
            };
            // Push task title to project, priority date...
            // Set the project pushed to Active
            // Reload all tasks
        };

    
        // Cancel adding task
        function cancelAddTask(e){    
            const showAddTask = document.querySelector(".showAddTask");
            const addTaskMenu = document.querySelector(".addTaskMenu");
            if (e.target.classList.contains('cancelTaskBtn')) {
                addTaskMenu.removeChild(addTaskMenu.lastChild);
                showAddTask.style.display = "flex";
            }; 
        };
    
    };