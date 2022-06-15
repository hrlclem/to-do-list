
// Add task button appears only if one project is Active

// Task constructor
export function AddTask(taskTitle, dateTask, priorityTask) {
    this.taskTitle = taskTitle;
    this.dateTask = dateTask;
    this.priorityTask = priorityTask;
};



// Check which project is selected
// When task is added, it pushes to the allProjects.projectTasks, for each task, add date and priority
// Display all tasks of this project

// Delete Tasks from related Project