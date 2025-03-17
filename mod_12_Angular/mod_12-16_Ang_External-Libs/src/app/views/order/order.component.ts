import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {CartService} from "../../shared/services/cart.service";
import {ProductService} from "../../shared/services/product.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {
  public formValues = {
    productName: '',
    address: '',
    phone: '',
  };

  private subscription: Subscription | null = null;
  private subscriptionOrder: Subscription | null = null;

  constructor(private cartService: CartService,
              private activatedRoute: ActivatedRoute,
              private ProductService: ProductService) {
  }

  ngOnInit(): void {
    // if (this.cartService.product-card) {
    //   this.formValues.productName = this.cartService.product-card;
    // }
    this.subscription = this.activatedRoute.queryParams.subscribe((params) => {
      if (params['product']) {
        this.formValues.productName = params['product'];
      }
    })

    const productParam = this.activatedRoute.snapshot.queryParamMap.get('product');
    if (productParam) {
      this.formValues.productName = productParam
    }
  };

  ngOnDestroy() {
    this.subscription?.unsubscribe();
    this.subscriptionOrder?.unsubscribe();
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
    this.subscriptionOrder = this.ProductService.createOrder({
      product: this.formValues.productName,
      address: this.formValues.address,
      phone: this.formValues.phone,
    })
      .subscribe(res => {
        if (res.success && !res.message) {
          alert('Thank you for your order!');
          this.formValues = {
            productName: '',
            address: '',
            phone: '',
          }
        } else {
          alert(res.message);
        }
      });
  };
}
