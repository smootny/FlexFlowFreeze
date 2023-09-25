import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent {
  name: string = '';

  constructor(private router: Router) { }
  inputsFilled: boolean = false;

  checkInputs(): void {
    this.inputsFilled = this.name.trim() !== '';  // Check if the name is not an empty string
}
  goToProgressBar() {
    // You can store the name somewhere if needed
    this.router.navigate(['/progress-bar']);
  }
}
