import {Component} from '@angular/core';
import {ProductType} from "./types/product.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public present: boolean = false;

  public advantages = [
    {
      num: '1',
      title: 'Лучшие продукты',
      text: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.',
    },
    {
      num: '2',
      title: 'Много вкусов',
      text: 'Наша задача – предоставить вам широкое разнообразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.',
    },
    {
      num: '3',
      title: 'Бисквитное тесто',
      text: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!',
    },
    {
      num: '4',
      title: 'Честный продукт',
      text: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией соответствии, которую мы получили 22.06.2016 г.',
    },
  ];
  public products = [
    {
      img: '1',
      title: 'Макарун с малиной',
      quantity: '1 шт.',
      price: '1,70 руб.',
      class: '1',
    },
    {
      img: '2',
      title: 'Макарун с манго',
      quantity: '1 шт.',
      price: '1,70 руб.',
      class: '1',
    },
    {
      img: '3',
      title: 'Пирог с ванилью',
      quantity: '1 шт.',
      price: '1,70 руб.',
      class: '1',
    },
    {
      img: '4',
      title: 'Пирог с фисташками',
      quantity: '1 шт.',
      price: '1,70 руб.',
      class: '1',
    },
  ];
  public formValues = {
    productName: '',
    userName: '',
    userPhone: '',
  };

  public togglePresent(): void {
    this.present = !this.present; // Переключение значения переменной
  }

  public scrollTo(target: HTMLElement, ): void {
    target.scrollIntoView({behavior: 'smooth'});
  };

  public addToCard(product: ProductType, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.productName = product.title.toUpperCase();
  };

  public createOrder(): void {
    if (!this.formValues.productName) {
      alert('Enter name product');
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
    this.togglePresent();
  };

  public getPresent(): void {
    alert('Wow, it`s your GIFT!');
    this.togglePresent();
  };
}
