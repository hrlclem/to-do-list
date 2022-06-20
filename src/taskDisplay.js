

export default function taskDisplay() { 

    // Project title change
    // Go through all projects:
        // if no Active: "All tasks"
        // + select and Display all Tasks of all projects

        // If active: Project name
        // + Show tasks of related project


    const newTaskManagement = document.querySelector(".newTaskManagement");
    


    // ADD TASK BUTTON
    newTaskManagement.addEventListener("click", showAddNewTask);     // Show Add New Task Field
    
        // Show feature to add tasks
        function showAddNewTask(e){
            const addTasksMain = document.querySelector(".addTasksMain");
            const newTaskManagement = document.querySelector(".newTaskManagement");
            if (e.target.classList.contains('showAddProject')) {
                addProjectBtn.style.display = "none";
                allProjectsDiv.innerHTML += `
                    <div class='addingProjectDiv'>
                        <input type='text' class='addProjectTitleField'>
                        <div class='newProjectButtons'>
                            <button class='confirmProjectBtn addingProjectBtn'>Confirm</button>
                            <button class='cancelProjectBtn addingProjectBtn'>Cancel</button>
                        </div>
                    </div>`;
            };        
            // Display all features in createNewTask Div
            console.log(33);
        
        };
    
        // Confirm adding task
        function confirmAddTask(e){
            // Push task title to project, priority date...
            // Set the project pushed to Active
            // Reload all tasks
        };
    
        // Cancel adding task
        function cancelAddTask(e){    
            // Empty fields and hide ADD TASK BUTTON
            // Reload all tasks of dedicated project or all tasks
        };
    
    
    

    };