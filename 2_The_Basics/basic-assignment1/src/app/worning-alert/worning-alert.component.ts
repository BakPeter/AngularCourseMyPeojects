import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-worning-alert',
  template: ` <p>This is a worning!!!!!</p> `,
  styles: [
    `
      p {
        padding: 20px;
        font-style: italic;
        color: rgb(111, 83, 156);
        background-color: aquamarine;
        border: 1px solid red;
      }
    `,
  ],
})
export class WornningAlertComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
