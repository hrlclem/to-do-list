

export default function taskDisplay() { 

    // Project title change
    // Go through all projects:
        // if no Active: "All tasks"
        // + select and Display all Tasks of all projects

        // If active: Project name
        // + Show tasks of related project


    const newTaskManagement = document.querySelector(".newTaskManagement");
    


    // ADD TASK BUTTON
    newTaskManagement.addEventListener("click", showAddNewTask);     // Show Add New Task Field
    
        // Show feature to add tasks
        function showAddNewTask(e){
            const addTasksMain = document.querySelector(".addTasksMain");
            const newTaskManagement = document.querySelector(".newTaskManagement");
            console.log("working");
            
            if (e.target.classList.contains('showAddTask')) {
                addTasksMain.style.display = "none";
                newTaskManagement.innerHTML += `
                    <div class="createNewTask">
                        <div class="addTaskTitle">Enter your task</div>
                        <div class="lineOneDiv">
                            <input type='text' class='addTaskProjectField addInputTaskField textField' placeholder="PROJECT NAME">
                            <input type='date' class="selectDateProjectField addInputTaskField" placeholder="Date">
                        </div>  
                        <div class="lineTwoDiv">
                            <input type='text' class='taskInputField addInputTaskField textField lineTwoChild' placeholder="Task">
                            <div class="selectPriorityField lineTwoChild">
                                <div class="selectTaskPriority lowPriorityTask">Low</div>
                                <div class="selectTaskPriority mediumPriorityTask">Medium</div>
                                <div class="selectTaskPriority highPriorityTask">High</div>
                            </div>
                        </div>
                        <div class='newTaskButtons'>
                            <button class='cancelTaskBtn addingTaskBtn'>Cancel</button>
                            <button class='confirmTaskBtn addingTaskBtn'>Confirm</button>
                        </div>
                    </div>`;
            };        
        };
    
        // Confirm adding task
        function confirmAddTask(e){
            // Push task title to project, priority date...
            // Set the project pushed to Active
            // Reload all tasks
        };
    
        // Cancel adding task
        function cancelAddTask(e){    
            // Empty fields and hide ADD TASK BUTTON
            // Reload all tasks of dedicated project or all tasks
        };
    
    
    

    };