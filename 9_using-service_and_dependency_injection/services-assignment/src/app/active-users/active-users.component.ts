import { Component, OnInit } from '@angular/core';
import { User } from '../model/User.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent implements OnInit {
  activeStatusMsg = 'Deactivate User';
  users: User[];
  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.users = this.usersService.getActiveUsers();
    this.usersService.userActivationStatusUpdated.subscribe((user) => {
      if (user.activStatus) this.users.push(user);
    });
  }

  setToInactive(ind: number) {
    this.usersService.updateStatus(this.users[ind].userId, false);
    this.users.splice(ind, 1);
  }

  // addUserTest() {
  //   this.usersService.updateStatus(this.usersService.users[0].userId, true);
  // }
}
