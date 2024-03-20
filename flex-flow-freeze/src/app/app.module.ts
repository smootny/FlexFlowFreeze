import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { NotebookListComponent } from './notebook-list/notebook-list.component';
import { NoteCardComponent } from './note-card/note-card.component';
import { NoteDetailsComponent } from './note-details/note-details.component';
import { CaloriesCalculatorComponent } from './calories-calculator/calories-calculator.component';
import { NotesLayoutComponent } from './notes-layout/notes-layout.component';
import { WaterIntakeCalculatorComponent } from './water-intake-calculator/water-intake-calculator.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    WelcomePageComponent,
    MenuPageComponent,
    NotebookListComponent,
    NoteCardComponent,
    NoteDetailsComponent,
    CaloriesCalculatorComponent,
    NotesLayoutComponent,
    WaterIntakeCalculatorComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, BrowserAnimationsModule,
     NgCircleProgressModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
