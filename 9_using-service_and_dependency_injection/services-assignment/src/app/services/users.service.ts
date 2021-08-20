import { EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import { User } from '../model/User.model';
import { CounterService } from './counter.service';

@Injectable({ providedIn: 'root' })
export class UsersService {
  users: User[] = [
    new User(1, 'pete', true),
    new User(2, 'eli', false),
    new User(3, 'dana', false),
    new User(4, 'haim', true),
    new User(5, 'moshe', true),
    new User(6, 'gony', false),
    new User(7, 'alex', false),
  ];

  constructor(private counterService: CounterService) {}

  userActivationStatusUpdated = new EventEmitter<User>();

  updateStatus(id: number, status: boolean) {
    //   return el.userId === id;
    // });
    // user[0].activStatus = status;

    var user: User = this.users.find((el) => el.userId === id);
    if (user) {
      user.activStatus = status;
      this.userActivationStatusUpdated.emit(user);

      if (status) {
        this.counterService.activatedCountedUpdated();
      } else {
        this.counterService.inActivatedCountedUpdated();
      }
    }
  }

  getActiveUsers(): User[] {
    return this.users.filter((el) => {
      return el.activStatus === true;
    });
  }

  getInActiveUsers(): User[] {
    return this.users.filter((el) => {
      return el.activStatus !== true;
    });
  }
}
