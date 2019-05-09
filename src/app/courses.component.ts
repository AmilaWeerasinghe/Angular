import {Component} from '@angular/core'; //decorator in angular to make the class component

@Component({
    selector: 'courses',
    template: '<h2>{{ title }}</h2>' //exapmle for data binding 
})
export class CoursesComponent {
    title: 'List of courses';

}