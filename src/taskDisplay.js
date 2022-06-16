

export default function taskDisplay() { 


    const addTasksTitleMain = document.querySelector(".addTasksTitleMain");
    
    // LEFT BAR BUTTONS
    addTasksTitleMain.addEventListener("click", showAddNewTask);     // Show Add New Task Field

    
    
        // Show feature to add projects
        function showAddNewTask(e){
         
        };
    
        // Confirm adding task
        function confirmAddTask(e){
            // const addProjectBtn = document.querySelector(".addProjectBtn");
            // const allProjectsDiv = document.querySelector(".allProjectsDiv");
            // const addProjectTitleField = document.querySelector(".addProjectTitleField");
    
            // if (e.target.classList.contains('confirmProjectBtn')) {
            //     allProjectsDiv.removeChild(allProjectsDiv.lastChild);
            //     addProjectBtn.style.display = "flex";
    
            //     // Add Project name to Project Array
            //     const projectName = addProjectTitleField.value
            //     if (projectName === '') {
            //         alert("Project name can't be empty")
            //         return
            //     };
    
            //     createProject(projectName);
            // };
        };
    
        // Cancel adding task
        function cancelAddTask(e){                   
            // const addProjectBtn = document.querySelector(".addProjectBtn");
            // const allProjectsDiv = document.querySelector(".allProjectsDiv");
            // if (e.target.classList.contains('cancelProjectBtn')) {
            //     allProjectsDiv.removeChild(allProjectsDiv.lastChild);
            //     addProjectBtn.style.display = "flex";
            // };
        };
    
    
    
    // Display to add new task in project(includes title, priority and date)
    
    };