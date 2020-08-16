/* --------------------- FIRST STEP --------------------- */
//to tell angular this is an angular component we import 
import { Component } from '@angular/core';
//decorator func we call it by passing an object to it 
//and telling it how our component looks like  

@Component({
    selector: 'courses', //css selector 
    template: '<h2>courses</h2>', // html template you wants to render

})
/* --------------------- SECOND STEP --------------------- */
//starting with creating a typeScript class
export class CoursesComponent { }