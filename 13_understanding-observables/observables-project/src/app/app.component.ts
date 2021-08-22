<<<<<<< HEAD
import { Component } from '@angular/core';
=======
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { UserService } from './user-service';
>>>>>>> 23df2f2183c764eba6f66ac7b2026b6c61648b02

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
<<<<<<< HEAD
export class AppComponent {}
=======
export class AppComponent implements OnInit, OnDestroy {
  activated = false;
  activationSubs: Subscription;

  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.activationSubs = this.userService.activated.subscribe((status) => {
      this.activated = status;
    });
  }

  ngOnDestroy(): void {
    this.activationSubs.unsubscribe;
  }
}
>>>>>>> 23df2f2183c764eba6f66ac7b2026b6c61648b02
