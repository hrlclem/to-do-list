// import { toDate, isToday, isThisWeek, subDays } from 'date-fns';
import {allProjects, currentActiveProject} from './index.js';




// Project constructor
export function AddProject(projectTitle, projectTasks, activeState) {
    this.projectTitle = projectTitle;
    this.projectTasks = projectTasks;
    this.activeState = activeState;
};




// SHOW ADD PROJECTS
    // Show feature to add projects
    export function showProjectField(e){
        const addProjectBtn = document.querySelector(".addProjectBtn");
        const allProjectsDiv = document.querySelector(".allProjectsDiv");
        if (e.target.classList.contains('showAddProject')) {
            addProjectBtn.style.display = "none";
            allProjectsDiv.innerHTML += `
                <div class='addingProjectDiv'>
                    <input type='text' class='addProjectTitleField' autofocus="autofocus" onfocus="this.select()">
                    <div class='newProjectButtons'>
                        <button class='confirmProjectBtn addingProjectBtn'>Confirm</button>
                        <button class='cancelProjectBtn addingProjectBtn'>Cancel</button>
                    </div>
                </div>`;
        };               
    };


    // Confirm adding project
    export function confirmProjectAdd(e){
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
                return;
            };

            setAllToInactive();
            createProject(projectName);
            displayProjectsList();
            setDivToActive();
        };
    };


    // Cancel adding project
    export function cancelProjectAdd(e){                   
        const addProjectBtn = document.querySelector(".addProjectBtn");
        const allProjectsDiv = document.querySelector(".allProjectsDiv");
        if (e.target.classList.contains('cancelProjectBtn')) {
            allProjectsDiv.removeChild(allProjectsDiv.lastChild);
            addProjectBtn.style.display = "flex";
        };
    };




// PROJECT ACTIONS
// Set to active on Click
export function onClickSetToActive(){
    const projectBtn = document.getElementsByClassName("projectBtn");

    for (let i = 0; i < projectBtn.length; i++) {
        projectBtn[i].addEventListener("click", function () {
            setAllToInactive();
            allProjects[i].activeState = true;
            setDivToActive();
        });
    }
    deleteProject();
};

// Delete button
export function deleteProject(){
    const closeIcon = document.getElementsByClassName("closeIcon");
    const projectTitleMain = document.querySelector(".projectTitleMain");

    for (let i = 0; i < closeIcon.length; i++) {
        closeIcon[i].addEventListener("click", function (e) {
            if(allProjects[i].activeState == true){
                projectTitleMain.innerHTML = `All tasks`;
                // Show all tasks
                allProjects.splice(this.id, 1);  
                setAllToInactive();
                e.stopPropagation();
                displayProjectsList();
            }
            else {
                allProjects.splice(this.id, 1); 
                e.stopPropagation();
                displayProjectsList();
            }
        });
    }
};










// MIDDLE ACTIONS
    // Create Project 
    export function createProject(projectName){
        let newProject = new AddProject(projectName, [] , true);
        allProjects.push(newProject);
    };

    // Display to Project list
    export function displayProjectsList() {
    const projectBtnList = document.querySelector(".projectBtnList");
    projectBtnList.innerHTML = "";

    for(let i = 0; i < allProjects.length; i++){
        projectBtnList.innerHTML += `
        <div class="projectBtn" id="${i}">
            <img src="../src/img/projectListIcon.svg" class="projectIcon svg" id="${i}">
            <div class="projectTitle" id="${i}">${allProjects[i].projectTitle}</div>
            <img src="../src/img/closeIcon.svg" class="closeIcon svg" id="${i}">
        </div>`;
    };
    setDivToActive();
    onClickSetToActive();
    deleteProject();
}

    // Set all to Inactive
    export function setAllToInactive(){
        const activeElements = document.querySelectorAll('.active')
        for (let i = 0; i < activeElements.length; i++)
        {
            activeElements[i].classList.remove("active");
        }
        for(let j = 0; j < allProjects.length; j++){
            allProjects[j].activeState = false;
        }
    };

    // Show the true active state
    export function setDivToActive(){
        for (let i = 0; i < allProjects.length; i++) {
                if(allProjects[i].activeState == true){
                    let toSetToActive = document.getElementById(`${i}`);
                    toSetToActive.classList.add("active");
                }
                tasksOfActiveProject();
        };
    };

    // On selected Project, shows related tasks and changes ProjectTitle in Right side
    export function tasksOfActiveProject(){
        selectedProject();
        for (let i = 0; i < allProjects.length; i++) {
            const projectTitleMain = document.querySelector(".projectTitleMain");
                if(allProjects[i].activeState == true){
                    projectTitleMain.innerHTML = `${allProjects[i].projectTitle} tasks`;
                    return;
                }
                else {
                    projectTitleMain.innerHTML = `All Projects`;
                    // Display all tasks of all projects
                    //HEEEEEERE
                    //HEEEEEERE
                    //HEEEEEERE
                    //HEEEEEERE

                }
            };
    };



    // Check if project is selected
    export function selectedProject(){
        let currentActiveProject;
        for(let i = 0; i < allProjects.length; i++){
            if(allProjects[i].activeState == true){
                currentActiveProject = allProjects[i].projectTitle;
            }
        };
    };
