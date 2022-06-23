import {showProjectField, confirmProjectAdd, cancelProjectAdd} from './projectsFunctions.js';

// import localStorage from './localStorage';



export default function visualDisplay() { 

const allProjectsDiv = document.querySelector(".allProjectsDiv");

// LEFT BAR
allProjectsDiv.addEventListener("click", showProjectField);     // Show Add Project Field
allProjectsDiv.addEventListener('click', confirmProjectAdd);    // Confirm Add Project Field
allProjectsDiv.addEventListener('click', cancelProjectAdd);     // Cancel Add Project Field

    // Click to select project (change background, set to active and true, change title, show tasks);
    // Click to delete project (split from Array)
        // if active:       Split from Array Change title to All projects and show all tasks
        // if not active:   Split from Array only


// MAIN FIELD

};
