import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-controller',
  templateUrl: './game-controller.component.html',
  styleUrls: ['./game-controller.component.css'],
})
export class GameControllerComponent implements OnInit {
  @Output() numberEmitter = new EventEmitter<number>();

  private n: number = 0;
  private interval: any;

  constructor() {}

  ngOnInit(): void {}

  startGame() {
    // console.log('start game');

    this.interval = setInterval(() => {
      // console.log(this.n);
      this.n++;
      this.numberEmitter.emit(this.n);
    }, 1000);
  }

  endGame() {
    // console.log('end game');
    clearInterval(this.interval);
    this.n = 0;
  }
}
