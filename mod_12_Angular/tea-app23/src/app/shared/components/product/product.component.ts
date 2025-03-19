import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OrderService} from "../../services/order.service";
import {ProductType} from "../../../../types/product.types";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: ProductType;
  @Output() addToOrder: EventEmitter<ProductType> = new EventEmitter<ProductType>();

  constructor(private OrderService: OrderService) {
    this.product = {
      id: 0,
      image: '',
      title: '',
      price: 0,
      description: '',
    }
  }

  ngOnInit(): void {
    if (this.OrderService.product) {
      this.product.title = this.OrderService.product;
    }
  }
}
