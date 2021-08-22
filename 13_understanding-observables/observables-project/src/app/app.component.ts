import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { UserService } from './user-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
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
