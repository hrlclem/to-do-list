// import { toDate, isToday, isThisWeek, subDays } from 'date-fns';
import visualDisplay from './display.js';
import {allProjects} from './index.js';


export default function showProjects() {
    displayProjectsList();


    function displayProjectsList() {
        const projectBtnList = document.querySelector(".projectBtnList");
        projectBtnList.innerHTML = "";
    
        for(let i = 0; i < allProjects.length; i++){
            projectBtnList.innerHTML += `
            <div class="projectBtn">
                <img src="../src/img/projectListIcon.svg" class="projectIcon svg" id="${i}">
                <div class="projectTitle" id="${i}">${allProjects[i].projectTitle}</div>
                <img src="../src/img/closeIcon.svg" class="closeIcon svg" id="${i}">
            </div>`;
            };
        deleteProject();
    }


    // Delete Project from Project Array
    function deleteProject(){
        const closeIcon = document.getElementsByClassName("closeIcon");
        
        for (var i = 0; i < closeIcon.length; i++) {
            closeIcon[i].addEventListener("click", function () {
                allProjects.splice(this.id, 1);   
                displayProjectsList()
            });
        }
    };
};
