import visualDisplay from './projectActions.js';
import taskDisplay from './taskActions.js';
import {displayProjectsList} from './projectsFunctions';




let allProjects = [{projectTitle: "First project", 
                    projectTasks: [
                        {taskTitle : "Groceries", dateTask : "Date", priorityTask : "High"}, 
                        {taskTitle : "Groceries", dateTask : "Date", priorityTask : "High"}, 
                        {taskTitle : "Groceries", dateTask : "Date", priorityTask : "High"}
                    ], 
                    activeState: true},

                    {projectTitle: "Second project", 
                    projectTasks: [
                        {taskTitle : "Groceries", dateTask : "Date", priorityTask : "High"}, 
                        {taskTitle : "Groceries", dateTask : "Date", priorityTask : "High"}, 
                        {taskTitle : "Groceries", dateTask : "Date", priorityTask : "High"}
                    ], 
                    activeState: false},
                    
                    {projectTitle: "Third project", 
                    projectTasks: [
                        {taskTitle : "Groceries", dateTask : "Date", priorityTask : "High"}, 
                        {taskTitle : "Groceries", dateTask : "Date", priorityTask : "High"}, 
                        {taskTitle : "Groceries", dateTask : "Date", priorityTask : "High"}
                    ], 
                    activeState: false}];



export { allProjects };



visualDisplay();
taskDisplay();
displayProjectsList();



