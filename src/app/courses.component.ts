import {Component} from '@angular/core'; //decorator in angular to make the class component

@Component({
    selector: 'courses',
    template: 
    `<h2>{{ getTitle() }}</h2>  
    <ul>
    <li *ngFor="let course of courses">  
    {{ course }}
    </li>
    </ul>
    `    //exapmle for data binding ,interpolation //let course become items in array courses

})
export class CoursesComponent {
    title= 'List of courses';
    courses=["course1","course2","course3"];

    getTitle() {
        return this.title;
    }

}