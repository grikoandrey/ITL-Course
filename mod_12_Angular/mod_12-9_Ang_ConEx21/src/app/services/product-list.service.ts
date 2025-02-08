import { Injectable } from '@angular/core';
import {ProductType} from "../types/product.type";

@Injectable()
export class ProductListService {

  constructor() { }

  getProducts(): ProductType[] {
    //ajax
    return [
      {
        img: '1',
        title: 'Макарун с малиной',
        quantity: '1 шт.',
        price: 1.70,
        class: '1',
      },
      {
        img: '2',
        title: 'Макарун с манго',
        quantity: '1 шт.',
        price: 1.70,
        class: '1',
      },
      {
        img: '3',
        title: 'Пирог с ванилью',
        quantity: '1 шт.',
        price: 1.70,
        class: '1',
      },
      {
        img: '4',
        title: 'Пирог с фисташками',
        quantity: '1 шт.',
        price: 1.70,
        class: '1',
      },
    ]
  }
}
