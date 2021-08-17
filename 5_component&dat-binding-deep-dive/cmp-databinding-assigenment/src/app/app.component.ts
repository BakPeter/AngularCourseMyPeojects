import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  numbers: number[] = [];
  numberEmitted(num: number) {
    // console.log('app component : number emitted ' + num);
    this.numbers.push(num);
  }
}
