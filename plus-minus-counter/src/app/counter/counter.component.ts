// counter.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <div class="container">
      <h1>Counter App</h1>
      <div class="counter-container">
        <p class="count-label">Current Count:</p>
        <p class="count">{{ count }}</p>
      </div>
      <div class="button-container">
        <button mat-raised-button color="primary" (click)="increment()">Increment</button>
        <button mat-raised-button color="warn" (click)="decrement()">Decrement</button>
        <button mat-raised-button (click)="reset()">Reset</button>
      </div>
    </div>
  `,
  styles: [`
    .container {
      max-width: 400px;
      margin: auto;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      text-align: center;
      padding: 20px;
    }

    h1 {
      color: #2196f3;
    }

    .counter-container {
      margin: 20px 0;
    }

    .count-label {
      font-size: 18px;
      color: #555;
    }

    .count {
      font-size: 36px;
      font-weight: bold;
      color: #333;
    }

    .button-container {
      margin-top: 20px;
      display: flex;
      justify-content: space-around;
    }
  `],
})
export class CounterComponent {
  count: number = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  reset() {
    this.count = 0;
  }
}
