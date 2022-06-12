// import { toDate, isToday, isThisWeek, subDays } from 'date-fns';
import visualDisplay from './display.js';


export default class Projects{

    constructor(projectName){
        this.projectName = projectName;
        this.task = [];
    };

    setName(projectName) {
        this.projectName = projectName;
    };

    getName() {
        return this.projectName;
    };


    // Add Project to Project Array


    // Delete Project from Project Array
};
