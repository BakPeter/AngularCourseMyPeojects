import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
<<<<<<< HEAD
=======
import { UserService } from '../user-service';
>>>>>>> 23df2f2183c764eba6f66ac7b2026b6c61648b02

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  id: number = 5555;

<<<<<<< HEAD
  constructor(private route: ActivatedRoute) {}
=======
  constructor(
    private route: ActivatedRoute,
    private userServcie: UserService
  ) {}
>>>>>>> 23df2f2183c764eba6f66ac7b2026b6c61648b02

  ngOnInit(): void {
    this.route?.params.subscribe((params: Params) => {
      this.id = +params['id'];
    });
  }
<<<<<<< HEAD
=======

  onActivated() {
    // console.log('onActivated');
    this.userServcie.activated.next(true);
  }
>>>>>>> 23df2f2183c764eba6f66ac7b2026b6c61648b02
}
