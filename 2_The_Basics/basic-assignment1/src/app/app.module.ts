import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WornningAlertComponent } from './worning-alert/worning-alert.component';

@NgModule({
  declarations: [AppComponent, SuccessAlertComponent, WornningAlertComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
