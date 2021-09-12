import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  subscriptionTypes = ['Basic', 'Advanced', 'Pro'];
  defaultSubscription = 'Advanced';
  form = {
    email: '',
    subType: '',
    password: '',
  };
  submitted = false;

  submit(form: NgForm) {
    console.log(form);
    this.submitted = true;
    this.form.email = form.value.email;
    this.form.subType = form.value.subType;
    this.form.password = form.value.password;
    form.reset();
  }
}
