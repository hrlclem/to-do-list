import {displayProjectsList, showProjectField, confirmProjectAdd, cancelProjectAdd} from './projectsFunctions.js';

// import localStorage from './localStorage';



export default function visualDisplay() { 

const allProjectsDiv = document.querySelector(".allProjectsDiv");

// LEFT BAR
allProjectsDiv.addEventListener("click", showProjectField);     // Show Add Project Field
allProjectsDiv.addEventListener('click', confirmProjectAdd);    // Confirm Add Project Field
allProjectsDiv.addEventListener('click', cancelProjectAdd);     // Cancel Add Project Field

displayProjectsList();
};
