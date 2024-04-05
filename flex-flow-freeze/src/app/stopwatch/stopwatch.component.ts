import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StopwatchService } from '../shared/stopwatch.service';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent implements OnInit, OnDestroy {
  timeDisplay: any = { minutes: '00', seconds: '00', milliseconds: '00' };
  laps: any[] = [];
  private stopwatchSubscription!: Subscription;
  isStopwatchRunning: boolean = false;

  constructor(private stopwatchService: StopwatchService) {}

  ngOnInit(): void {
    this.stopwatchSubscription = this.stopwatchService.getTimer().subscribe(time => {
      this.timeDisplay = time;
    });
  }

  toggleStartStop(): void {
    this.isStopwatchRunning = !this.isStopwatchRunning;
    if (this.isStopwatchRunning) {
      this.startTimer();
    } else {
      this.stopTimer();
    }
  }

  startTimer(): void {
    this.stopwatchService.startTimer();
  }

  stopTimer(): void {
    this.stopwatchService.stopTimer();
  }

  resetTimer(): void {
    this.stopwatchService.resetTimer();
    this.timeDisplay = { minutes: '00', seconds: '00', milliseconds: '00' };
    this.laps = [];
    this.isStopwatchRunning = false;
  }

  addLap(): void {
    if (this.stopwatchService.isStopwatchRunning())
    this.stopwatchService.addLap();
    this.laps = this.stopwatchService.getLaps();
  }

  ngOnDestroy(): void {
    this.stopwatchSubscription.unsubscribe();
  }
}
