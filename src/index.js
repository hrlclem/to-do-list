import visualDisplay from './projectActions.js';
import taskDisplay from './taskActions.js';
import displayProjectsList from './projectsFunctions.js';




let allProjects = [{projectTitle: "First project", 
                    projectTasks: [
                        {taskTitle : "Groceries", dateTask : "Date", priorityTask : "High"}, 
                        {taskTitle : "Sport", dateTask : "Date", priorityTask : "Medium"}, 
                        {taskTitle : "Do Japanese Homework", dateTask : "Date", priorityTask : "Low"}
                    ], 
                    activeState: true},

                    {projectTitle: "Second project", 
                    projectTasks: [
                        {taskTitle : "Groceries", dateTask : "Date", priorityTask : "High"}, 
                        {taskTitle : "Sport", dateTask : "Date", priorityTask : "Medium"}, 
                        {taskTitle : "Do Japanese Homework", dateTask : "Date", priorityTask : "Low"}
                    ], 
                    activeState: false},

                    {projectTitle: "Third project", 
                    projectTasks: [
                        {taskTitle : "Groceries", dateTask : "Date", priorityTask : "High"}, 
                        {taskTitle : "Sport", dateTask : "Date", priorityTask : "Medium"}, 
                        {taskTitle : "Do Japanese Homework", dateTask : "Date", priorityTask : "Low"}
                    ], 
                    activeState: false}];



export { allProjects };


// displayProjectsList();

visualDisplay();
taskDisplay();



