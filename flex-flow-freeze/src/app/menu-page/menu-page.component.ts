import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css'],
})
export class MenuPageComponent {
  constructor(private router: Router) {}

  goTo(route: string) {
    switch (route) {
      case 'training':
        // Navigate to progress-bar page
        this.router.navigate(['/progress-bar']);
        break;
      case 'notebook':
        // Navigate to notebook page
        this.router.navigate(['/notes-layout']);
        break;
      case 'calculator':
        // Navigate to calculator page
        this.router.navigate(['/calories-calculator']);
        break;
      case 'water':
        // Navigate to calculator page
        this.router.navigate(['/water-intake-calculator']);
        break;
      case 'settings':
        // Navigate to settings page
        this.router.navigate(['/settings']);
        break;
    }
  }
}
