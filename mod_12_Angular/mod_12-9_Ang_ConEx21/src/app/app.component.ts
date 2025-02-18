import {Component, OnInit} from '@angular/core';
import {ProductType} from "./types/product.type";
import {ProductListService} from "./services/product-list.service";
import {CartService} from "./services/cart.service";
import {AdvType} from "./types/adv.type";
import {AdvListService} from "./services/adv-list.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  // public present: boolean = false;

  public advantages: AdvType[] = [];
  public products: ProductType[] = [];

  constructor(
    private AdvListService: AdvListService,
    private productListService: ProductListService,
    public cartService: CartService,) {
  }

  ngOnInit() {
    this.advantages = this.AdvListService.getAdvantages();
    this.products = this.productListService.getProducts();
  }

  public formValues = {
    productName: '',
    userName: '',
    userPhone: '',
  };

  // public togglePresent(): void {
  //   this.present = !this.present; // Переключение значения переменной
  // }

  public scrollTo(target: HTMLElement,): void {
    target.scrollIntoView({behavior: 'smooth'});
  };

  public addToCard(product: ProductType, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.productName = product.title.toUpperCase();
    this.cartService.count++;
    this.cartService.sum = this.cartService.sum + product.price;
    this.alertMessage(product.title);
  };

  private alertMessage(productName: string): void {
    alert(`${productName} добавлен в корзину!`);
  }

  public createOrder(): void {
    if (!this.formValues.productName) {
      alert('Enter name product-card');
      return;
    }

    if (!this.formValues.userName) {
      alert('Enter your First Name');
      return;
    }

    if (!this.formValues.userPhone) {
      alert('Enter your phone number');
      return;
    }
    alert('Thank you for Order!');
    this.formValues = {
      productName: '',
      userName: '',
      userPhone: '',
    };
    // this.togglePresent();
  };

  public getPresent(): void {
    alert('Wow, it`s your GIFT!');
    // this.togglePresent();
  };
}
