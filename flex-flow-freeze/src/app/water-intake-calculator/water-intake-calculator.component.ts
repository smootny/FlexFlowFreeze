import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
  inputWater: number | null = null;
  drankWater: number = 0;
  waterInputFilled: boolean = false;
  waterIntakePercentage: number = 0;
  showProgress: boolean = false;
  circleStyle!: string;
  inputsFilled: boolean = false; 

  constructor(private router: Router) {}

  checkInputs(): void {
    this.inputsFilled = this.gender.trim() !== '' && this.age !== undefined && this.weight !== undefined && this.age !== null && this.weight !== null;
  }

  checkWaterInput(): void {
    this.waterInputFilled = this.inputWater !== null && this.inputWater > 0;
  }
  calculateWaterIntake() {
    if (this.inputsFilled) {
      this.totalWaterIntake = this.weight * 30; 
      this.showProgress = true;
      this.updateCircle();
    } else {
      alert("Please fill in all fields.");
    }
  }

  
  updateProgress() {
    if (this.inputWater && this.inputWater > 0) {
      this.drankWater += this.inputWater;
      this.waterIntakePercentage = Math.min((this.drankWater / this.totalWaterIntake) * 100, 100);
      this.inputWater = null; 
      this.waterInputFilled = false;
      this.updateCircle();
    }
  }  
  

  updateCircle() {
    const circlePercentage = this.waterIntakePercentage > 100 ? 100 : this.waterIntakePercentage;
    this.circleStyle = `conic-gradient(blue ${circlePercentage}%, #eee ${circlePercentage}%)`;
  }

  goBack() {
    this.router.navigate(['/menu']);
  }
}
