import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";

declare var $: any;
declare var bootstrap: any;

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  private observable: Observable<void>;
  private subscription: Subscription | null = null;

  constructor() {
    this.observable = new Observable((observer) => {
      setTimeout(() => {
        observer.next();
        observer.complete();
      }, 3000)
    });
  }

  ngOnInit(): void {
    $("#accordion").accordion();

    this.subscription = this.observable.subscribe(()=> {
      this.openModal();
    });
  };

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  private openModal(): void {
    const modalEl: HTMLElement | null = document.getElementById("exampleModal");
    if (modalEl) {
      const modal = new bootstrap.Modal(modalEl);
      modalEl.removeAttribute("aria-hidden");
      modal.show();
    }
  };
}
