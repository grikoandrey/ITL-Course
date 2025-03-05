import {Component, OnInit} from '@angular/core';
import {ProductType} from "../../../types/product.type";
import {ProductService} from "../../../services/product.service";
// import {CartService} from "../../../services/cart.service";
// import {Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {


  constructor(private productService: ProductService,
              // private cartService: CartService,
              // private router: Router
  ) {
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  };

  public products: ProductType[] = [];

  // public addToCard(title: string): void {
  //   // this.scrollTo(target);
  //   // this.formValues.productName = title;
  //   // this.cartServices.count++;
  //   // this.cartService.product-card = title;
  //   this.router.navigate(['/order'], {queryParams: {product-card: title}});
  // }
}
