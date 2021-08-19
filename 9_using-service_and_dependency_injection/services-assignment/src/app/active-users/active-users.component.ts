import { Component, OnInit } from '@angular/core';
import { User } from '../model/User.model';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent implements OnInit {
  users: User[] = [
    new User('pete', true),
    new User('eli', true),
    new User('dana', true),
  ];
  constructor() {}

  ngOnInit(): void {}

  onSetToInactive(i: number) {
    this.users[i].activStatus = false;
  }
}
