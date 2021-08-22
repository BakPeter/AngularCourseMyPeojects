import { EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  //   activated: EventEmitter<boolean> = new EventEmitter<boolean>();
  activated: Subject<boolean> = new Subject<boolean>();
}
