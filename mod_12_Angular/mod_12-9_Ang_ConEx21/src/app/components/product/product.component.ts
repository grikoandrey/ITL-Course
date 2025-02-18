import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductType} from "../../types/product.type";

@Component({
  selector: 'product-card',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: ProductType;
  @Input() i!: number;

  @Output() addToCartEvent: EventEmitter<ProductType> = new EventEmitter<ProductType>();

  constructor() {
    this.product = {
      img: '',
      title: '',
      quantity: '',
      price: 0,
      class: '',
    }
  }

  ngOnInit(): void {
  }

  addProductToCart(): void {
    this.addToCartEvent.emit(this.product);
  }

}
