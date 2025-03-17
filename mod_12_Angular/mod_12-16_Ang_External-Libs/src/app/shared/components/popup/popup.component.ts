import {Component, Input, TemplateRef, ViewChild} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
})
export class PopupComponent {

  @ViewChild('popup')
  popup!: TemplateRef<any>;

  @Input() data: string = '';

  constructor(private modalService: NgbModal) {
  };

  open(): void {
    this.modalService.open(this.popup);
  }
}
