import { Component } from '@angular/core';
import { HeroComponent } from "./hero/hero.component";
import { CoursesComponent } from "./courses/courses.component";

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    CoursesComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
