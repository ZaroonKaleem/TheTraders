import { CommonModule, NgClass } from '@angular/common';
import { AfterViewInit, Component, ElementRef, NgModule, OnInit, ViewChild } from '@angular/core';
import { 
  trigger, 
  state, 
  style, 
  animate, 
  transition, 
  query, 
  stagger 
} from '@angular/animations';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-student-results',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './student-results.component.html',
  styleUrl: './student-results.component.css'
})
export class StudentResultsComponent implements OnInit, AfterViewInit {
  @ViewChild('resultsHeader') resultsHeader?: ElementRef;
  @ViewChild('comparisonSection') comparisonSection?: ElementRef;
  @ViewChild('resultsCards') resultsCards?: ElementRef;
  
  isInView = false;
  comparisonInView = false;
  cardsInView = false;
  
  studentResults = [
    {
      name: "Alex Johnson",
      timeframe: "3 Months Progress",
      profit: 45280,
      testimonial: "Went from losing $500/day to consistent $1,500+ profit days"
    },
    {
      name: "Sarah Williams",
      timeframe: "6 Months Journey",
      profit: 128500,
      testimonial: "Quit my job thanks to the strategies learned here"
    },
    {
      name: "Michael Chen",
      timeframe: "1 Year Transformation",
      profit: 324760,
      testimonial: "Turned $10k into over $300k following the system"
    }
  ];

  ngOnInit() {
    // Initialization logic here
  }

  ngAfterViewInit() {
    this.setupIntersectionObserver();
  }

  setupIntersectionObserver() {
    if (!this.resultsHeader?.nativeElement || 
        !this.comparisonSection?.nativeElement || 
        !this.resultsCards?.nativeElement) {
      console.warn('One or more elements not found for intersection observer');
      return;
    }

    const headerObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        this.isInView = entry.isIntersecting;
        if (entry.isIntersecting) {
          headerObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const comparisonObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        this.comparisonInView = entry.isIntersecting;
        if (entry.isIntersecting) {
          comparisonObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const cardsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        this.cardsInView = entry.isIntersecting;
        if (entry.isIntersecting) {
          cardsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    headerObserver.observe(this.resultsHeader.nativeElement);
    comparisonObserver.observe(this.comparisonSection.nativeElement);
    cardsObserver.observe(this.resultsCards.nativeElement);
  }
}