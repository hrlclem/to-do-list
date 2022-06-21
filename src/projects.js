// import { toDate, isToday, isThisWeek, subDays } from 'date-fns';
import {allProjects} from './index.js';



// Project constructor
export function AddProject(projectTitle, projectTasks, activeState) {
    this.projectTitle = projectTitle;
    this.projectTasks = projectTasks;
    this.activeState = activeState;
};









// Create Project 
export function createProject(projectName){
    setAllToInactive();
    let newProject = new AddProject(projectName, [] , true);
    allProjects.push(newProject);
    displayProjectsList();
}



// Display all Project list
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

        allProjects[i].activeState = false;
    };

    setLasttoActive();
    setToActive();
    deleteProject();
}




// Set to active on Click
export function setToActive(){
    const projectBtn = document.getElementsByClassName("projectBtn");
    
    for (let i = 0; i < projectBtn.length; i++) {
        projectBtn[i].addEventListener("click", function () {
            setAllToInactive();
            allProjects[i].activeState = true;
            this.classList.add("active");
            tasksOfActiveProject();

            console.log(33);

        });
    }
    // TODO: Display all related tasks

}





// Set to Active the last entered project
export function setLasttoActive(){
    const projectBtnList = document.querySelector(".projectBtnList");
    let lastChild = allProjects.length - 1;

    if (projectBtnList.innerHTML != ''){
        projectBtnList.lastChild.classList.add("active");
        allProjects[lastChild].activeState = true;
    }
}



// Set all to Inactive
export function setAllToInactive(){
    const activeElements = document.querySelectorAll('.active')
    for (let i = 0; i < activeElements.length; i++)
    {
        activeElements[i].classList.remove("active");
        for(let i = 0; i < allProjects.length; i++){
            allProjects[i].activeState = false;
        }
    }
}



// Delete Project from Project Array
export function deleteProject(){
    const closeIcon = document.getElementsByClassName("closeIcon");
    
    for (let i = 0; i < closeIcon.length; i++) {
        closeIcon[i].addEventListener("click", function () {
            allProjects.splice(this.id, 1);   
            
            setAllToInactive();
            displayProjectsList();
        });
    }
};





// On selected Project, shows related tasks and changes ProjectTitle in Right side
export function tasksOfActiveProject(){
    for (let i = 0; i < allProjects.length; i++) {
            if(allProjects[i].activeState = true){
                const projectTitleMain = document.querySelector(".projectTitleMain");
                projectTitleMain.innerHTML = `${allProjects[i].projectTitle}`;
            };
        };
};


