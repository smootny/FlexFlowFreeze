import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';  // Import your welcome page component
import { ProgressBarComponent } from './progress-bar/progress-bar.component';  // Import your progress bar component

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },  // Default route
  { path: 'welcome', component: WelcomePageComponent },
  { path: 'progress-bar', component: ProgressBarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
