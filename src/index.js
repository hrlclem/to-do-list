import visualDisplay from './projectActions.js';
import displayProjectsList from './projectsFunctions.js';
import taskDisplay from './taskActions.js';




let allProjects = [{projectTitle: "First project", 
                    projectTasks: [
                        {taskTitle : "Groceries", dateTask : "06/07/2022", priorityTask : "High"}, 
                        {taskTitle : "Practice Piano", dateTask : "30/05/2022", priorityTask : "Medium"}, 
                        {taskTitle : "Do Japanese Homework", dateTask : "16/02/2021", priorityTask : "Low"}
                    ], 
                    activeState: true},

                    {projectTitle: "Second project", 
                    projectTasks: [
                        {taskTitle : "Go to Library", dateTask : "09/06/2022", priorityTask : "High"}, 
                        {taskTitle : "Get doctor's appointment", dateTask : "15/07/2022", priorityTask : "Medium"}, 
                        {taskTitle : "Do History Homework", dateTask : "12/04/2022", priorityTask : "Low"}
                    ], 
                    activeState: false},

                    {projectTitle: "Third project", 
                    projectTasks: [
                        {taskTitle : "Check flight's prices", dateTask : "15/10/2022", priorityTask : "High"}, 
                        {taskTitle : "Sport", dateTask : "09/12/2022", priorityTask : "Medium"}, 
                        {taskTitle : "Do Coding Homework", dateTask : "04/04/2022", priorityTask : "Low"}
                    ], 
                    activeState: false}];



export { allProjects };



visualDisplay();
taskDisplay();
// displayProjectsList();



