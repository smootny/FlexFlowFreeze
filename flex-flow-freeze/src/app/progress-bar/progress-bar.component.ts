import { Component, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css'],
})
export class ProgressBarComponent {
  currentHeight = 0;
  currentWidth = 100;
  interval: any;
  countdownTimer: number = 0;
  displayMessage: string = '';

  @ViewChild('progressBar', { static: true }) progressBar!: ElementRef;
  fillTime!: number;
  stayTime!: number;
  emptyTime!: number;
  debounceTime!: number;
  repetitions!: number;

  constructor(private renderer: Renderer2, private router: Router) {}

  inputsFilled: boolean = false;

  checkInputs(): void {
    this.inputsFilled = [this.fillTime, this.stayTime, this.emptyTime, this.debounceTime, this.repetitions].every(
      (val) => typeof val === 'number' && !isNaN(val)
    );
  }

  startProgressBar() {
    clearInterval(this.interval);
    this.currentHeight = 0;
    this.countdownTimer = this.debounceTime;

    const timerInterval = setInterval(() => {
      this.countdownTimer -= 1;
      if (this.countdownTimer <= 0) {
        clearInterval(timerInterval);
        this.runRepetitions();
      }
    }, 1000);
  }

  runRepetitions() {
    if (this.repetitions > 0) {
      this.currentHeight = 0;
      this.currentWidth = 100;
      this.renderer.setStyle(this.progressBar.nativeElement, 'left', '0%');
      this.renderer.setStyle(this.progressBar.nativeElement, 'top', '0%');
      this.fillProgressBar();
      this.repetitions--;
    }
  }

  fillProgressBar() {
    const incrementSize = 100 / (this.fillTime * 100);
    this.renderer.setStyle(this.progressBar.nativeElement, 'backgroundColor', '#FF0033');
    this.interval = setInterval(() => {
      this.currentHeight += incrementSize;
      this.renderer.setStyle(this.progressBar.nativeElement, 'height', `${this.currentHeight}%`);
      if (this.currentHeight >= 100) {
        clearInterval(this.interval);
        this.stayTimeEffect();
      }
    }, 10);
  }

  stayTimeEffect() {
    this.currentWidth = 100;
    this.renderer.setStyle(this.progressBar.nativeElement, 'left', '0%');
    const decrementSize = 100 / (this.stayTime * 100);
    this.renderer.setStyle(this.progressBar.nativeElement, 'backgroundColor', '#FFFF00');
    this.interval = setInterval(() => {
      this.currentWidth -= decrementSize;
      this.renderer.setStyle(this.progressBar.nativeElement, 'width', `${this.currentWidth}%`);
      this.renderer.setStyle(this.progressBar.nativeElement, 'left', `${(100 - this.currentWidth) / 2}%`);
      if (this.currentWidth <= 0) {
        clearInterval(this.interval);
        this.emptyProgressBar();
      }
    }, 10);
  }
  emptyProgressBar() {
    this.currentHeight = 0;
    this.renderer.setStyle(this.progressBar.nativeElement, 'width', '100%');
    this.renderer.setStyle(this.progressBar.nativeElement, 'left', '0%');
    this.renderer.setStyle(this.progressBar.nativeElement, 'top', 'auto');
    this.renderer.setStyle(this.progressBar.nativeElement, 'bottom', '0%');

    const incrementSize = 100 / (this.emptyTime * 100);
    this.renderer.setStyle(this.progressBar.nativeElement, 'backgroundColor', '#00FFFF');
    this.interval = setInterval(() => {
      this.currentHeight += incrementSize;
      this.renderer.setStyle(this.progressBar.nativeElement, 'height', `${this.currentHeight}%`);
      if (this.currentHeight >= 100) {
        clearInterval(this.interval);
        if (this.repetitions > 0) {
          this.runRepetitions();
        } else {
          this.resetAll();
        }
      }
    }, 10);
  }

  resetAll() {
    this.renderer.setStyle(this.progressBar.nativeElement, 'backgroundColor', 'white');
    this.renderer.setStyle(this.progressBar.nativeElement, 'height', '0');
    this.renderer.setStyle(this.progressBar.nativeElement, 'width', '100%');
    this.renderer.setStyle(this.progressBar.nativeElement, 'left', '0%');
  }

  goBack(): void {
    this.router.navigate(['/menu'])
  }
}
