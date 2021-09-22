import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSwitchMode() {
    // console.log('Is logging mode : ' + this.isLoginMode);
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(authForm: NgForm) {
    // console.log(authForm.value);
    if (!authForm.valid) {
      return;
    }

    this.loadingStarted();
    const email = authForm.value.email;
    const password = authForm.value.password;

    let authObs: Observable<AuthResponseData | string>;

    if (this.isLoginMode) {
      //login
      authObs = this.login(email, password);
    } else {
      authObs = this.signup(email, password);
    }

    authObs.subscribe(
      (response: AuthResponseData) => {
        console.log(response);
        this.loadingFinished();

        if (response.errors) {
          this.errorAccoured(response.errors[0]);
        } else {
          this.errorAccoured(null);
          this.router.navigate(['/recipes']);
        }
      },
      (error: string) => {
        console.log(error);
        this.loadingFinished();
        this.errorAccoured(error);
      }
    );

    authForm.reset();
  }

  private login(
    email: string,
    password: string
  ): Observable<string | AuthResponseData> {
    return this.authService.login(email, password);
  }

  private signup(
    email: string,
    password: string
  ): Observable<string | AuthResponseData> {
    return this.authService.signup(email, password);
  }

  private errorAccoured(error: string) {
    this.error = error;
  }

  private loadingStarted() {
    this.isLoading = true;
  }

  private loadingFinished() {
    this.isLoading = false;
  }
}
