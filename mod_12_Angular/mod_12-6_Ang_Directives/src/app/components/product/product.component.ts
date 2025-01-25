import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import {ProductType} from "../../types/product.type";
import {TitleComponent} from "../title/title.component";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input()
  get product(): ProductType {
    return this._product;
  }

  set product(param: ProductType) {
    this._product = param;
  }

  private _product: ProductType;

  @Output() addToCartEvent: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild(TitleComponent)
  private titleComponent!: TitleComponent;

  @ViewChild('elem')
  private elem!: ElementRef;

  constructor() {
    this._product = {
      image: '',
      title: '',
      description: '',
    }
  };

  addProductToCard() {
    this.addToCartEvent.emit(this.titleComponent.toUpper());
  }
}
