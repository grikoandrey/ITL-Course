import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import {TitleComponent} from "../title/title.component";
import {ProductType} from "../../../../types/product.type";
import {CartProductService} from "../../services/cart-product.service";

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  providers: [CartProductService],
})
export class ProductCardComponent {
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

  constructor(public cartProductService: CartProductService) {
    this._product = {
      id: 0,
      image: '',
      title: '',
      description: '',
      datetime: '',
    }
  };

  // addProductToCard() {
  //   this.addToCartEvent.emit(this.titleComponent.title);
  //   this.cartProductService.count++;
  // }
}
