

export default function taskDisplay() { 

    // Project title change
    // Go through all projects:
        // if no Active: "All tasks"
        // + select and Display all Tasks of all projects

        // If active: Project name
        // + Show taks of related project


    const addTasksTitleMain = document.querySelector(".addTasksTitleMain");
    


    // ADD TASK BUTTON
    addTasksTitleMain.addEventListener("click", showAddNewTask);     // Show Add New Task Field
    
        // Show feature to add tasks
        function showAddNewTask(e){
            // Display all features in createNewTask Div
        
        };
    
        // Confirm adding task
        function confirmAddTask(e){
            // Push task title to project, priority date...
            // Set the project pushed to Active and display all tasks
        };
    
        // Cancel adding task
        function cancelAddTask(e){    
            // Empty fields and hide ADD TASK BUTTON
            // Reload all tasks of dedicated project or all tasks
        };
    
    
    

    };