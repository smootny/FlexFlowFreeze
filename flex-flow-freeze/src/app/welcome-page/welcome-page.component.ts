import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedNameService } from "../shared/shared-name.service";

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css'],
})
export class WelcomePageComponent {
  name: string = '';
  inputsFilled: boolean = false;

  constructor(private router: Router, private sharedNameService: SharedNameService) {}

  checkInputs(): void {
    this.inputsFilled = this.name.trim() !== '';
    if (this.inputsFilled) {
      this.sharedNameService.changeName(this.name);
    }
  }

  goToMenuPage() {
    if (this.inputsFilled) {
      this.router.navigate(['/menu']);
    }
  }
}
