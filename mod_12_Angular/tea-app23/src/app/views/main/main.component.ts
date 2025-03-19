import {AfterViewInit, Component, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Observable, Subscription} from "rxjs";
// import * as $ from 'jquery';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

declare var $: any;
// declare var bootstrap: any;

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy, AfterViewInit {

  private observable: Observable<void>;
  private subscription: Subscription | null = null;

  constructor(private modalService: NgbModal) {
    this.observable = new Observable((observer) => {
      setTimeout(() => {
        observer.next();
        observer.complete();
      }, 3000)
    });
  }

  @ViewChild('popup') popup!: TemplateRef<any>;

  ngOnInit(): void {
  };

  ngAfterViewInit() {
    $("#accordion").accordion();

    this.subscription = this.observable.subscribe(()=> {
      this.openModal();
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  private openModal(): void {
      this.modalService.open(this.popup, {centered: true});
  };
}
