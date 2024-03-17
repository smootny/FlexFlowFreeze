import { Component } from '@angular/core';

@Component({
  selector: 'app-water-intake-calculator',
  templateUrl: './water-intake-calculator.component.html',
  styleUrls: ['./water-intake-calculator.component.css']
})
export class WaterIntakeCalculatorComponent {
  gender: string = 'male';
  age!: number;
  weight!: number;
  totalWaterIntake!: number;
  inputWater: number = 0;
  drankWater: number = 0;
  waterIntakePercentage: number = 0;
  showProgress: boolean = false;
  circleStyle!: string;
  inputsFilled: boolean = false; // Use this to track if all inputs are filled

  checkInputs(): void {
    this.inputsFilled = this.gender.trim() !== '' && this.age !== undefined && this.weight !== undefined && this.age !== null && this.weight !== null;
  }

  calculateWaterIntake() {
    if (this.inputsFilled) {
      this.totalWaterIntake = this.weight * 30; // Simplified calculation
      this.showProgress = true;
      this.updateCircle();
    } else {
      alert("Please fill in all fields.");
    }
  }

  updateProgress() {
    this.drankWater += this.inputWater; // Add the input value to the total
    this.waterIntakePercentage = Math.min((this.drankWater / this.totalWaterIntake) * 100, 100);
    this.inputWater = 0; // Reset the input field
    this.updateCircle();
  }

  updateCircle() {
    const circlePercentage = this.waterIntakePercentage > 100 ? 100 : this.waterIntakePercentage;
    this.circleStyle = `conic-gradient(blue ${circlePercentage}%, #eee ${circlePercentage}%)`;
  }
}
