import {AfterViewInit, Component, inject, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {map, Subject, Subscription} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {PopupComponent} from "../../../shared/components/popup/popup.component";
import {environment} from "../../../../environments/environment";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit, OnDestroy, AfterViewInit {

  private modalService = inject(NgbModal);

  private subscription: Subscription | null = null;
  private subject: Subject<number>;

  constructor() {
    this.subject = new Subject<number>();
  }

  // @ViewChild('popup')
  // popup!: TemplateRef<any>;

  ngOnInit() {
    // console.log(environment.production);
    // const myModalAlternative = new bootstrap.Modal('#myModal', {});
    // myModalAlternative.show();

    // this.modalService.open(content, {});

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
  };

  @ViewChild(PopupComponent)
  private popupComponent!: PopupComponent;

  ngAfterViewInit(): void {
    // this.modalService.open(this.popup, {});
    // const modalRef = this.modalService.open(PopupComponent, {});
    // modalRef.componentInstance.data = 'My component';
    // this.popupComponent.open();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  test() {

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
}
