// // import { toDate, isToday, isThisWeek, subDays } from 'date-fns';
// import visualDisplay from './display.js';
// import {allProjects} from './index.js';


// export default function showProjects() {
//     displayProjectsList();


//     function displayProjectsList() {
//         const projectBtnList = document.querySelector(".projectBtnList");
//         projectBtnList.innerHTML = "";
    
//         for(let i = 0; i < allProjects.length; i++){
//             projectBtnList.innerHTML += `
//             <div class="projectBtn" id="${i}">
//                 <img src="../src/img/projectListIcon.svg" class="projectIcon svg" id="${i}">
//                 <div class="projectTitle" id="${i}">${allProjects[i].projectTitle}</div>
//                 <img src="../src/img/closeIcon.svg" class="closeIcon svg" id="${i}">
//             </div>`;

//             allProjects[i].activeState = false;
//         };

//         let lastChild = allProjects.length - 1;
//         projectBtnList.lastChild.classList.add("active");
//         allProjects[lastChild].activeState = true;

//         deleteProject();
//     }


//     // Delete Project from Project Array
//     function deleteProject(){
//         const closeIcon = document.getElementsByClassName("closeIcon");
        
//         for (var i = 0; i < closeIcon.length; i++) {
//             closeIcon[i].addEventListener("click", function () {
//                 allProjects.splice(this.id, 1);   

//                 // Remove all Active elements
//                 const activeBuffer = document.querySelectorAll('.active');
//                 activeBuffer.forEach(active => {
//                     active.remove("active");
//                 });

//                 displayProjectsList()
//             });
//         }


//         // const activeBuffer = document.getElementsByClassName("active");
//         // for(var i = 0; i < activeBuffer.length; i++)
//         //     {
//         //         activeBuffer.classList.remove("active");
//         //     }

//     };
// };
