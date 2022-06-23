import {createProject, setAllToInactive, setDivToActive, displayProjectsList} from './projectsFunctions.js';

// import localStorage from './localStorage';



export default function visualDisplay() { 

const allProjectsDiv = document.querySelector(".allProjectsDiv");

// LEFT BAR BUTTONS
allProjectsDiv.addEventListener("click", showProjectField);     // Show Add Project Field
allProjectsDiv.addEventListener('click', confirmProjectAdd);    // Confirm Add Project Field
allProjectsDiv.addEventListener('click', cancelProjectAdd);     // Cancel Add Project Field



    // Show feature to add projects
    function showProjectField(e){
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



    // Confirm adding project
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
            setAllToInactive();
            createProject(projectName);
            displayProjectsList();
            setDivToActive();
            // tasksOfActiveProject();  // Change title
        };
    };




    // Cancel adding project
    function cancelProjectAdd(e){                   
        const addProjectBtn = document.querySelector(".addProjectBtn");
        const allProjectsDiv = document.querySelector(".allProjectsDiv");
        if (e.target.classList.contains('cancelProjectBtn')) {
            allProjectsDiv.removeChild(allProjectsDiv.lastChild);
            addProjectBtn.style.display = "flex";
        };
    };


// Display to add new task in project(includes title, priority and date)

};