import {Component, OnDestroy, OnInit} from '@angular/core';
import {from, map, Observable, pipe, Subject, Subscription} from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit, OnDestroy {

  // private observable: Observable<number>;
  // private promise: Promise<string>;
  private subscription: Subscription | null = null;
  private subject: Subject<number>;

  constructor() {
    this.subject = new Subject<number>();
    let count = 0;
    const interval = setInterval(() => {
      this.subject.next(count++);
    }, 1000);
    const timeout1 = setTimeout(() => {
      this.subject.complete();
    }, 4000);

    // this.observable = from([1,2,3,4,5]);
    // this.promise = new Promise<string>((resolve) => {
    //   setTimeout(() => {
    //     resolve('hello, promise');
    //   }, 2000);
    //   setTimeout(() => {
    //     resolve('hello, promise2');
    //   }, 3000);
    // })

    // this.observable = new Observable((observer) => {
    //   // setTimeout(() => {
    //   //   observer.next('hello');
    //   // }, 2000);
    //   // setTimeout(() => {
    //   //   observer.next('world');
    //   // }, 3000);
    //   let count = 0;
    //   const interval = setInterval(() => {
    //     observer.next(count++);
    //   }, 1000);
    //   const timeout1 = setTimeout(() => {
    //     observer.complete();
    //   }, 4000);
    //   const timeout2 = setTimeout(() => {
    //     observer.error("the end");
    //   }, 5000);
    //
    //   return {
    //     unsubscribe() {
    //       clearInterval(interval);
    //       clearTimeout(timeout1);
    //       clearTimeout(timeout2);
    //     }
    //   }
    // });
  }

  ngOnInit() {
    // this.subscription = this.observable
    this.subscription = this.subject
      .pipe(
        map((number) => {
          return number * 10;
        })
      )
      .subscribe(
      {
        next: (param: number) => {
          console.log('subscriber1', param);
        },
        error: (error: string) => {
          console.log('ERROR', error);
        }
      }
      )

    // this.observable.subscribe((param: string) => {
    //   console.log('subscriber1', param);
    // })

    // this.promise.then((param: string) => {
    //   console.log(param);
    // })
  };

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  test() {
    // this.observable
    this.subject
      .pipe(
        map((number) => {
          return `число: ${number}`;
        })
      )
      .subscribe((param: string) => {
      console.log('subscriber2', param);
    })
  }

  // public scrollTo(target: HTMLElement,): void {
  //   target.scrollIntoView({behavior: 'smooth'});
  // }
}
