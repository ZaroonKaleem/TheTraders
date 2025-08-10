import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Common/header/header.component';
import { HomeComponent } from "./Pages/home/home.component";
import { CoursesComponent } from "./Pages/home/courses/courses.component";

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    HomeComponent,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Frontend';
}
