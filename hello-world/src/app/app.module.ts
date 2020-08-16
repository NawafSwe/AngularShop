import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//importing the component to be used 
import { CoursesComponent } from '../app/components/courses.component';
import { CourseComponent } from './course/course.component';

//registering the component to the app 
@NgModule({
  declarations: [
    AppComponent, CoursesComponent, CourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
