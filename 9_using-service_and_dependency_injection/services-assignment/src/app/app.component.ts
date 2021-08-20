import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { CounterService } from './services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  activatedCreated: number;
  inActivatedCreated: number;

  constructor(private counterService: CounterService) {}

  ngOnInit(): void {
    this.activatedCreated = this.counterService.activatedCounter;
    this.inActivatedCreated = this.counterService.inActivatedCounter;

    this.counterService.activatedCounterUpdated.subscribe((num) => {
      this.activatedCreated = num;
    });
    this.counterService.inActivatedCounterUpdated.subscribe((num) => {
      this.inActivatedCreated = num;
    });
  }
}
