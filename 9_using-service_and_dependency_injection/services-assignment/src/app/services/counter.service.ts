import { EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CounterService {
  activatedCounter: number = 0;
  inActivatedCounter: number = 0;

  activatedCounterUpdated = new EventEmitter<number>();
  inActivatedCounterUpdated = new EventEmitter<number>();

  activatedCountedUpdated() {
    this.activatedCounter++;
    this.activatedCounterUpdated.emit(this.activatedCounter);
  }

  inActivatedCountedUpdated() {
    this.inActivatedCounter++;
    this.inActivatedCounterUpdated.emit(this.inActivatedCounter);
  }
}
