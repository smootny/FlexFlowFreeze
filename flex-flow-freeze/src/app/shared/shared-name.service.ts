import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedNameService {
  private nameSource = new BehaviorSubject<string>('');

  currentName = this.nameSource.asObservable();

  constructor() {}

  changeName(name: string) {
    this.nameSource.next(name);
  }
}
