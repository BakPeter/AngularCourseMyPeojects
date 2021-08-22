import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../user-service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  id: number = 5555;

  constructor(
    private route: ActivatedRoute,
    private userServcie: UserService
  ) {}

  ngOnInit(): void {
    this.route?.params.subscribe((params: Params) => {
      this.id = +params['id'];
    });
  }

  onActivated() {
    // console.log('onActivated');
    this.userServcie.activated.next(true);
  }
}
