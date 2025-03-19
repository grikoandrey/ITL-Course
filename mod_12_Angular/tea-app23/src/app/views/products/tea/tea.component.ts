import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../../shared/services/product.service";
import {OrderService} from "../../../shared/services/order.service";
import {Subscription} from "rxjs";
import {ProductType} from "../../../../types/product.types";

@Component({
  selector: 'app-tea',
  templateUrl: './tea.component.html',
  styleUrls: ['./tea.component.scss']
})
export class TeaComponent implements OnInit, OnDestroy {

  private subscriptionTea: Subscription | null = null;

  product: ProductType;

  constructor(private ProductService: ProductService,
              private activateRoute: ActivatedRoute,
              private router: Router,
              private OrderService: OrderService) {
    this.product = {
      id: 0,
      image: '',
      title: '',
      price: 0,
      description: '',
    }
  }

  ngOnInit(): void {
    this.subscriptionTea = this.activateRoute.params.subscribe(params => {
      if (params['id']) {
        this.ProductService.getProduct(+params['id'])
          .subscribe(
            {
              next: (data) => {
                this.product = data;
              },
              error: (err) => {
                console.log(err);
                this.router.navigate(['/']);
              }
            })
      }
    })
  }

  ngOnDestroy(): void {
    this.subscriptionTea?.unsubscribe();
  }

  public addProductToOrder(title: string): void {
    this.OrderService.product = title;
    this.router.navigate(['/order']);
  }
}

// {queryParams: {product: title}}
