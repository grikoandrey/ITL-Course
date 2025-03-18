import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
// import {catchError, map, of, retry, tap} from "rxjs";
import {Router} from "@angular/router";
import {Subscription, tap} from "rxjs";
import {ProductType} from "../../../../types/product.type";
import {ProductService} from "../../../shared/services/product.service";
// import {CartService} from "../../../services/cart.service";
// import {Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  private subscriptionProducts: Subscription | null = null;


  constructor(private productService: ProductService,
              private http: HttpClient,
              private router: Router,
              // private cartService: CartService,
              // private router: Router
  ) {
  }

  products: ProductType[] = [];
  loading: boolean = false;

  ngOnInit() {
    // this.products = this.productService.getProducts();
    // this.http.get<{ data: ProductType[] }>('https://testologiaa.ru/pizzas?extraField=1')
    //   .pipe(
    //     tap((result) => {
    //       console.log(result);
    //     }),
    //     map((result) => (result.data)),
    //     catchError(error => {
    //       // throw new Error('omg');
    //       return of([]);
    //     }),
    //     retry(3),
    //   )
    this.loading = true;
    this.subscriptionProducts = this.productService.getProducts()
      .pipe(
        tap(() => {
          this.loading = false;
        })
      )
      .subscribe(
        {
          next: (data) => {
            this.products = data;
          },
          error: (error) => {
            console.log('ERROR', error);
            this.router.navigate(['/']);
          },
        })
  };


  ngOnDestroy(): void {
    this.subscriptionProducts?.unsubscribe();
  }
  // public products: ProductType[] = [];

  // public addToCard(title: string): void {
  //   // this.scrollTo(target);
  //   // this.formValues.productName = title;
  //   // this.cartServices.count++;
  //   // this.cartService.product-card = title;
  //   this.router.navigate(['/order'], {queryParams: {product-card: title}});
  // }
}
