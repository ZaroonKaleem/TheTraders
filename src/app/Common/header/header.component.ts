import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,  // Add this if you're using standalone components
  imports: [
    DatePipe,
    CommonModule
  ],
  providers: [DatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy {
  currentTime: Date = new Date();
  menuOpen = false;  // Added for mobile menu toggle
  private timeInterval: any;

  constructor(private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.updateTime();
    // Update time every second
    this.timeInterval = setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }

  // Toggle mobile menu
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  updateTime(): void {
    this.currentTime = new Date();
  }

  ngOnDestroy(): void {
    if (this.timeInterval) {
      clearInterval(this.timeInterval);
    }
  }
}