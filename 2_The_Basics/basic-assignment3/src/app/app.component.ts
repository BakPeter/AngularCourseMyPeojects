import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  assignments: string[] = [
    "Add A button which says 'Display Details'",
    "Add a paragraph with any content of your choice (e.g. 'Secret Password = tuna')",
    'Toggle the displaying of that paragraph with the button created in the first step',
    'Log all button clicks in an array and output that array below the secret paragraph (maybe log a timestamp or simply an incrementing number)',
    'Starting at the 5th log item, give all future log items a blue background (via ngStyle) and white color (ngClass)',
  ];

  displayDatails: boolean = true;

  pressedDates: Date[] = [];

  changeDisplayDetailsStatus() {
    this.displayDatails = !this.displayDatails;
    const date = new Date();
    this.pressedDates.push(date);
    console.log(date);
    // console.log(this.displayDatails);
  }

  getButtonText(): string {
    return this.displayDatails
      ? 'Press to HIDE details'
      : 'Press to SHOW details';
  }

  getBackgroundColor(i: number) {
    if (i >= 5) return 'blue';
    else return 'white';
  }
}
