import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

import { AlertComponent } from '../shared/alert/alert.component';
import { PlaceHolderDirective } from '../shared/place-holder/place-holder.directive';
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
  @ViewChild(PlaceHolderDirective, { static: false })
  alertHost: PlaceHolderDirective;
  private closeSub: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

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
          // this.errorAccoured(null);
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
    // this.error = error;
    this.showErrorAlert(error);
  }

  showErrorAlert(message: string) {
    const alertCmpFactory =
      this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();

    const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);

    componentRef.instance.message = message;
    this.closeSub = componentRef.instance.close.subscribe(() => {
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    });
  }

  private loadingStarted() {
    this.isLoading = true;
  }

  private loadingFinished() {
    this.isLoading = false;
  }

  onHandleError() {
    this.error = null;
  }
}
