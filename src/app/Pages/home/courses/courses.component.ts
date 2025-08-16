import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { StudentResultsComponent } from "../student-results/student-results.component";

@Component({
  selector: 'app-courses',
  imports: [
    CommonModule,
],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit, OnDestroy {

  constructor(private cdr: ChangeDetectorRef) { }
  
  // Floating coins animation
  coins = [
    { symbol: '₿', left: '10%', top: '20%' },
    { symbol: '$', left: '85%', top: '30%' },
    { symbol: '€', left: '15%', top: '70%' },
    { symbol: '¥', left: '80%', top: '80%' },
    { symbol: '£', left: '50%', top: '10%' },
  ];

  // Problem/Solution content
  problems = [
    {
      title: "No Clear Strategy",
      description: "Most traders jump from one method to another without mastering any."
    },
    {
      title: "Emotional Trading",
      description: "Letting fear and greed dictate trades instead of rules."
    },
    {
      title: "Poor Risk Management",
      description: "Risking too much per trade or having no stop losses."
    },
    {
      title: "Information Overload",
      description: "Too many indicators causing analysis paralysis."
    }
  ];

  solutions = [
    {
      title: "Proven Framework",
      description: "We teach one high-probability strategy refined over 10,000+ trades."
    },
    {
      title: "Trade Psychology",
      description: "Mental exercises to maintain discipline during winning & losing streaks."
    },
    {
      title: "1% Risk Rule",
      description: "Never blow your account with our capital protection system."
    },
    {
      title: "Simplified Approach",
      description: "Only 3 key indicators that actually matter for price action."
    }
  ];

  // Course modules
  modules = [
    {
      title: "Market Foundations",
      items: [
        "How markets REALLY move",
        "Liquidity & order flow",
        "Institutional vs retail trading"
      ]
    },
    {
      title: "Entry Mastery",
      items: [
        "The 3 high-probability setups",
        "Precision entry techniques",
        "False breakout traps to avoid"
      ]
    },
    {
      title: "Risk & Position Sizing",
      items: [
        "1% risk rule explained",
        "Dynamic position scaling",
        "Volatility-adjusted stops"
      ]
    },
    {
      title: "Trade Psychology",
      items: [
        "Overcoming fear & greed",
        "Journaling for improvement",
        "The millionaire mindset"
      ]
    },
    {
      title: "Live Trading",
      items: [
        "Real-time trade breakdowns",
        "Q&A sessions",
        "Trade copier access"
      ]
    },
    {
      title: "Funding Challenges",
      items: [
        "Passing prop firm evaluations",
        "Scaling plans",
        "Withdrawal strategies"
      ]
    }
  ];

  // Student results
  studentResults = [
    {
      name: "Mark T.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      timeframe: "3 Months",
      profit: 127500,
      testimonial: "Went from $5K to $132K in 90 days using just the breakout strategy."
    },
    {
      name: "Sarah L.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      timeframe: "6 Weeks",
      profit: 48700,
      testimonial: "Finally understand why my previous trades failed. This is game-changing."
    },
    {
      name: "Raj K.",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
      timeframe: "4 Months",
      profit: 243000,
      testimonial: "Quit my job after hitting consistent 5% monthly returns."
    }
  ];

  // Countdown timer
  days = '03';
  hours = '12';
  minutes = '45';
  seconds = '00';
  spotsLeft = 4;
  private countdownInterval: any;

  ngOnInit(): void {
        this.startCountdown();
    // Update countdown every minute
    setInterval(() => this.updateCountdown(), 60000);
    this.updateCountdown();
  }

   ngOnDestroy(): void {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }

  startCountdown() {
    // Clear any existing interval
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }

    // Update immediately and then every second
    this.updateCountdown();
    this.countdownInterval = setInterval(() => this.updateCountdown(), 1000);
  }

 updateCountdown() {
    // Set your course closing date (3 days from now at 12:45 PM)
    const closingDate = new Date();
    closingDate.setDate(closingDate.getDate() + 3);
    closingDate.setHours(12, 45, 0, 0);
    
    const now = new Date();
    let diff = closingDate.getTime() - now.getTime();
    
    // Prevent negative values
    if (diff <= 0) {
      diff = 0;
      clearInterval(this.countdownInterval);
    }
    
    // Calculate time units
    this.days = Math.floor(diff / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
    this.hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
    this.minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
    this.seconds = Math.floor((diff % (1000 * 60)) / 1000).toString().padStart(2, '0');
  }



  onSliderChange(event: any) {
    const slider = event.target;
    const beforeSection = document.querySelector('.before-section') as HTMLElement;
    const afterSection = document.querySelector('.after-section') as HTMLElement;
    
    beforeSection.style.width = `${100 - slider.value}%`;
    afterSection.style.width = `${slider.value}%`;
  }

  // In your component.ts
resetRotation(event: MouseEvent) {
  const tile = event.target as HTMLElement;
  tile.style.transform = 'rotateY(0deg) translateY(-10px)';
}

restoreRotation(event: MouseEvent, index: number) {
  const tile = event.target as HTMLElement;
  tile.style.transform = `rotateY(${index * 5}deg)`;
}
}