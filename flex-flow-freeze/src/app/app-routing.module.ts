import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { NotebookListComponent } from './notebook-list/notebook-list.component';
import { NoteDetailsComponent } from './note-details/note-details.component';
import { CaloriesCalculatorComponent } from './calories-calculator/calories-calculator.component';
import { NotesLayoutComponent } from './notes-layout/notes-layout.component';
import { WaterIntakeCalculatorComponent } from './water-intake-calculator/water-intake-calculator.component';
import { ImageComparisonComponent } from './image-comparison/image-comparison.component';
import {SettingsComponent} from "./settings/settings.component";
import {StopwatchComponent} from "./stopwatch/stopwatch.component";

const routes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'progress-bar', component: ProgressBarComponent },
  { path: 'calories-calculator', component: CaloriesCalculatorComponent },
  { path: 'stopwatch', component: StopwatchComponent },
  { path: 'menu', component: MenuPageComponent },
  {
    path: 'notes-layout',
    component: NotesLayoutComponent,
    children: [
      { path: '', component: NotebookListComponent },
      { path: 'new', component: NoteDetailsComponent },
      { path: ':id', component: NoteDetailsComponent },
    ],
  },
  { path: 'water-intake-calculator', component: WaterIntakeCalculatorComponent},
  { path: 'image-comparison', component: ImageComparisonComponent},
  { path: 'settings', component: SettingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
