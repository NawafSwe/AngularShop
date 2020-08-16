/* --------------------- FIRST STEP --------------------- */
//to tell angular this is an angular component we import 
import { Component } from '@angular/core';
import { CoursesService } from '../courses.service';
//decorator func we call it by passing an object to it 
//and telling it how our component looks like  

@Component({
    selector: 'courses', //css selector 
    template: `
    <h2>
    {{ title }}
    </h2>

    <ul class="list-courses">
    
    <li *ngFor="let course of courses">
    {{ course }}
    </li>
    
    </ul>
    `,
    //using directive *ngFor="" 
    // html template you wants to render
    //{{  put value   }} this is angular syntax where it updates dynamically 
    //you can put any values you want 
    styleUrls: ['../course/course.component.css']


})
/* --------------------- SECOND STEP --------------------- */
//starting with creating a typeScript class
export class CoursesComponent {
    title = "List of and more you see me i see you ";
    courses;
    // you can def a functions to get values like from api or what ever you want 

    //getting the courses like we getting it from http request  
    //best implementation is this way 
    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }

}

