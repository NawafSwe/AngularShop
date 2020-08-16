/* --------------------- FIRST STEP --------------------- */
//to tell angular this is an angular component we import 
import { Component } from '@angular/core';
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
    courses = ["course1", "course2", "course3"];
    // you can def a functions to get values like from api or what ever you want 

}