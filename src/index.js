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



export { allProjects };



visualDisplay();
taskDisplay();
displayProjectsList();



