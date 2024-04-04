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
  private stopwatchSubscription!: Subscription;

  constructor(private stopwatchService: StopwatchService) {}

  ngOnInit(): void {
    this.stopwatchSubscription = this.stopwatchService.getTimer().subscribe(time => {
      this.timeDisplay = time;
    });
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
  }

  ngOnDestroy(): void {
    this.stopwatchSubscription.unsubscribe();
  }
}
