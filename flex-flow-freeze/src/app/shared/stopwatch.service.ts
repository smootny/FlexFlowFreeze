import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { map, switchMap, takeWhile } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StopwatchService {
  private time = 0;
  private isRunning = new BehaviorSubject<boolean>(false);
  private laps: any[] = [];

  constructor() { }

  isStopwatchRunning(): boolean {
    return this.isRunning.value;
  }

  startTimer(): void {
    this.isRunning.next(true);
  }

  stopTimer(): void {
    this.isRunning.next(false);
  }

  resetTimer(): void {
    this.stopTimer();
    this.time = 0;
    this.laps = []; // Also reset laps
  }

  getTimer(): Observable<any> {
    return this.isRunning.pipe(
      switchMap(isRunning => {
        if (isRunning) {
          return timer(0, 10).pipe(
            map(() => {
              this.time++;
              return this.splitTime(this.time);
            }),
            takeWhile(() => this.isRunning.value)
          );
        } else {
          return new BehaviorSubject(this.splitTime(this.time));
        }
      })
    );
  }

  addLap(): void {
    if (this.laps.length < 8)
    this.laps.push(this.splitTime(this.time));
  }

  resetLaps(): void {
    this.laps = [];
  }

  getLaps(): any[] {
    return this.laps;
  }

  private splitTime(time: number): any {
    const minutes = Math.floor(time / 6000);
    const seconds = Math.floor(time / 100) % 60;
    const milliseconds = time % 100;

    return {
      minutes: minutes.toString().padStart(2, '0'),
      seconds: seconds.toString().padStart(2, '0'),
      milliseconds: milliseconds.toString().padStart(2, '0')
    };
  }
}
