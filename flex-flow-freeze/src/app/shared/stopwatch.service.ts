import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { map, switchMap, takeWhile } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StopwatchService {
  private time = 0;
  private isRunning = new BehaviorSubject<boolean>(false);

  constructor() { }

  startTimer(): void {
    this.isRunning.next(true);
  }

  stopTimer(): void {
    this.isRunning.next(false);
  }

  resetTimer(): void {
    this.stopTimer();
    this.time = 0;
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
