import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//importing the component to be used 
import { CoursesComponent } from '../app/components/courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';

//registering the component to the app 
@NgModule({
  declarations: [
    AppComponent, CoursesComponent, CourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  //registering  courses services as a dependency 
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

/** -------- Notes ----------- */
//ng g c nameOfComponent 
//ng g s nameOfService