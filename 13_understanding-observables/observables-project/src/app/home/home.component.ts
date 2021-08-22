import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observer } from 'rxjs';
import { Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  // data: string = 'A';
  data: string = '';
  constructor() {}

  ngOnInit(): void {
    // this.subscription = interval(1000).subscribe((count) => {
    //   this.data = this.data + ' ' + count;
    //   console.log(count);
    //   console.log(this.data);
    // });

    const customIntervalObservalble: Observable<number> = Observable.create(
      (observer: Observer<number>) => {
        let count = 0;
        setInterval(() => {
          observer.next(count);

          // if (count === 8) {
          //   observer.complete();
          // }
          if (count === 30) {
            observer.complete();
          }
          if (count === 50) {
            observer.error(new Error('Count is greater then 3!'));
          }

          count += 1;
        }, 100);
      }
    );

    this.subscription = customIntervalObservalble
      .pipe(
        filter((data) => {
          // return data % 3 === 0;
          return data % 3 !== 0;
        }),
        map((data) => {
          return 'Round ' + data + ';';
        })
      )
      .subscribe(
        (data) => {
          this.data = this.data + ' ' + data;
          console.log(this.data);
        },
        (error) => {
          console.log(error);
        },
        () => {
          console.log('Completed');
        }
      );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
