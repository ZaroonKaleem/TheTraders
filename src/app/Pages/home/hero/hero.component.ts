import { CommonModule, CurrencyPipe, DatePipe, DecimalPipe, NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [
    CommonModule,
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

symbols = [
    { char: '$', left: '10%', top: '20%', duration: 6 },
    { char: '€', left: '85%', top: '30%', duration: 8 },
    { char: '£', left: '15%', top: '70%', duration: 7 },
    { char: '¥', left: '80%', top: '80%', duration: 9 },
    { char: '₿', left: '50%', top: '10%', duration: 10 },
  ];

  currentPrice = 42356.78;
  isPriceUp = true;
  priceChangePercent = 2.34;
  highPrice = 42890.12;
  lowPrice = 41876.45;
  volume = 2456789324;
  
  chartPath = this.generateRandomChartPath();
  
  tickers = [
    { symbol: 'BTC/USD', price: 42356.78, change: 2.34 },
    { symbol: 'ETH/USD', price: 2345.67, change: 1.56 },
    { symbol: 'SOL/USD', price: 123.45, change: -0.78 },
    { symbol: 'XRP/USD', price: 0.5678, change: 3.21 },
    { symbol: 'ADA/USD', price: 0.4567, change: -1.23 },
    { symbol: 'DOT/USD', price: 7.89, change: 0.45 },
  ];

  ngOnInit(): void {
    // Simulate price changes
    setInterval(() => {
      const change = (Math.random() - 0.5) * 100;
      this.currentPrice += change;
      this.priceChangePercent = parseFloat((Math.random() * 3).toFixed(2));
      this.isPriceUp = Math.random() > 0.5;
      this.chartPath = this.generateRandomChartPath();
    }, 3000);
  }

  generateRandomChartPath(): string {
    let path = 'M0,60';
    for (let i = 1; i <= 10; i++) {
      const y = 60 + (Math.random() - 0.5) * 40;
      path += ` L${i * 30},${y}`;
    }
    return path;
  }
}
