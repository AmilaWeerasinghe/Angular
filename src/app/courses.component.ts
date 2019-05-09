import {Component} from '@angular/core'; //decorator in angular to make the class component

@Component({
    selector: 'courses',
    template: '<h2>{{ getTitle() }}</h2>' //exapmle for data binding ,interpolation
})
export class CoursesComponent {
    title= 'List of courses';

    getTitle() {
        return this.title;
    }

}