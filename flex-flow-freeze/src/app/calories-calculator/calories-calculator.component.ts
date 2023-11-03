import { Component } from '@angular/core';

@Component({
  selector: 'app-calories-calculator',
  templateUrl: './calories-calculator.component.html',
  styleUrls: ['./calories-calculator.component.css'],
})
export class CaloriesCalculatorComponent {
  inputCalories: number | null = null;
  totalAmount: number = 0;

  addCalories() {
    if (this.inputCalories) {
      this.totalAmount += this.inputCalories;
      this.inputCalories = null;
    }
  }

  resetTotal() {
    this.totalAmount = 0;
  }
}
