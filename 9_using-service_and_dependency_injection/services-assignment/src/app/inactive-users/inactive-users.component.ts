import { Component, OnInit } from '@angular/core';
import { User } from '../model/User.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
})
export class InactiveUsersComponent implements OnInit {
  inActiveStatusMsg = 'Activate User';
  users: User[];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.users = this.usersService.getInActiveUsers();
    this.usersService.userActivationStatusUpdated.subscribe((user) => {
      if (!user.activStatus) this.users.push(user);
    });
  }

  setToInactive(ind: number) {
    this.usersService.updateStatus(this.users[ind].userId, true);
    this.users.splice(ind, 1);
  }
}
