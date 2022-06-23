import visualDisplay from './projectActions.js';
import taskDisplay from './taskActions.js';
import {displayProjectsList} from './projectsFunctions';




let allProjects = [{projectTitle: "First project", 
                    projectTasks: ["Groceries", "Sport", "Do Japanese homeworks"], 
                    activeState: true},
                    {projectTitle: "Second project", 
                    projectTasks: ["Groceries", "Sport", "Do Japanese homeworks"], 
                    activeState: false},
                    {projectTitle: "Third project", 
                    projectTasks: ["Groceries", "Sport", "Do Japanese homeworks"], 
                    activeState: false}];


// Check which project is active
let currentActiveProject;

export { allProjects, currentActiveProject };



visualDisplay();
taskDisplay();
displayProjectsList();



