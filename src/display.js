import showProjects from './projects.js';
// import localStorage from './localStorage';
import {allProjects} from './index.js';



export default function visualDisplay() { 

    setToActive();

    // Display to add new project
    const allProjectsDiv = document.querySelector(".allProjectsDiv");

    allProjectsDiv.addEventListener("click", showProjectField);     // Show Add Project Field
    allProjectsDiv.addEventListener('click', confirmProjectAdd);    // Confirm Add Project Field
    allProjectsDiv.addEventListener('click', cancelProjectAdd);     // Cancel Add Project Field



// ------ DISPLAY FUNCTIONS
    function showProjectField(e){                    // Show Add Project Field  
        const addProjectBtn = document.querySelector(".addProjectBtn");
        const allProjectsDiv = document.querySelector(".allProjectsDiv");
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
    };

    // Handle CONFIRM Add New Project
    function confirmProjectAdd(e){
        const addProjectBtn = document.querySelector(".addProjectBtn");
        const allProjectsDiv = document.querySelector(".allProjectsDiv");
        const addProjectTitleField = document.querySelector(".addProjectTitleField");

        if (e.target.classList.contains('confirmProjectBtn')) {
            allProjectsDiv.removeChild(allProjectsDiv.lastChild);
            addProjectBtn.style.display = "flex";

            // Add Project name to Project Array
            const projectName = addProjectTitleField.value
            if (projectName === '') {
              alert("Project name can't be empty")
              return
            };

            createProject(projectName);
            showProjects();
        };
    };

    // Handle CANCEL Add New Project
    function cancelProjectAdd(e){                   
        const addProjectBtn = document.querySelector(".addProjectBtn");
        const allProjectsDiv = document.querySelector(".allProjectsDiv");
        if (e.target.classList.contains('cancelProjectBtn')) {
            allProjectsDiv.removeChild(allProjectsDiv.lastChild);
            addProjectBtn.style.display = "flex";
        };
    };


    
    

// ------ PROJECT AND TASK MANAGEMENT FUNCTIONS

    // Add new Project
    function AddProject(projectTitle, projectTasks, activeState) {
        this.projectTitle = projectTitle;
        this.projectTasks = projectTasks;
        this.activeState = activeState;
    }

    // Create Project 
    function createProject(projectName){
        let newProject = new AddProject(projectName, [] , true);
        allProjects.push(newProject);
    }

    // On Project Click, set to Active and select
    function setToActive(){
        const projectBtn = document.getElementsByClassName("projectBtn");
        
        for (var i = 0; i < projectBtn.length; i++) {
            projectBtn[i].addEventListener("click", function () {
                projectBtn.toggleClass("active");
            });
        }
    };



    // Display to add new task in project(includes title, priority and date)

};
