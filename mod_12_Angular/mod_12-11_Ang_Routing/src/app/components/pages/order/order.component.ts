import { Component, OnInit } from '@angular/core';
import {CartService} from "../../../services/cart.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  public formValues = {
    productName: '',
    address: '',
    phone: '',
  };

  constructor(private cartService: CartService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // if (this.cartService.product-card) {
    //   this.formValues.productName = this.cartService.product-card;
    // }
    // this.activatedRoute.queryParams.subscribe((params) => {
    //   if (params['product-card']) {
    //     this.formValues.productName = params['product-card'];
    //   }
    // })

    const productParam = this.activatedRoute.snapshot.queryParamMap.get('product');
    if (productParam) {
      this.formValues.productName = productParam
    }

  }
  public createOrder() {
    if (!this.formValues.productName) {
      alert('Enter name product-card');
      return;
    }

    if (!this.formValues.address) {
      alert('Enter your address');
      return;
    }

    if (!this.formValues.phone) {
      alert('Enter your phone number');
      return;
    }
    // создается ajax запрос на сервер
    alert('Thank you for your order!');
    this.formValues = {
      productName: '',
      address: '',
      phone: '',
    }
  };

}
