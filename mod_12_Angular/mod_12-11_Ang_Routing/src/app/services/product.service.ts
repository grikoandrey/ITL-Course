import {Injectable} from '@angular/core';
import {ProductType} from "../types/product.type";

@Injectable()
export class ProductService {
  private products: ProductType[] = [
    {
      id: 1,
      image: 'pizza1.png',
      title: 'Мясная Делюкс',
      description: 'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус чили, ананасы',
      datetime: '2025-01-28 15:00:04',
    },
    {
      id: 2,
      image: '',
      title: 'Морская Премиум',
      description: 'Перец, сыр, креветки, кальмары, мидии, лосось',
      datetime: '2025-01-24 15:00:04',
    },
    {
      id: 3,
      image: 'pizza3.png',
      title: 'Бекон и Сосиски',
      description: 'Бекон, сыр, сосиски, ананас, томатная паста',
      datetime: '2025-01-28 15:30:04',
    },
    {
      id: 4,
      image: 'pizza4.png',
      title: 'Куриная Делюкс',
      description: 'Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста',
      datetime: '2025-01-13 15:05:04',
    },
    {
      id: 5,
      image: 'pizza5.png',
      title: 'Барбекю Премиум',
      description: 'Свинина BBQ, соус Барбкею, сыр, курица, соус для пиццы, соус чили',
      datetime: '2025-01-28 15:00:04',
    },
    {
      id: 6,
      image: 'pizza6.png',
      title: 'Пепперони Дабл',
      description: 'Пепперони, сыр, колбаса 2 видов: обжаренная и вареная',
      datetime: '2025-01-28 15:00:04',
    },
    {
      id: 7,
      image: 'pizza7.png',
      title: 'Куриное трио',
      description: 'Жареная курица, Тушеная курица, Куриные наггетсы, перец, сыр, грибы, соус для пиццы',
      datetime: '2025-01-28 15:00:04',
    },
    {
      id: 8,
      image: 'pizza8.png',
      title: 'Сырная',
      description: 'Сыр Джюгас, Сыр с плесенью, Сыр Моцарелла, Сыр секретный',
      datetime: '2025-01-28 15:00:04',
    },
  ];


  constructor() {
  }

  getProducts(): ProductType[] {
    //ajax
    return this.products;
  };

  getProduct(id: number): ProductType | undefined {
    //ajax
    return this.products.find(item => (item.id === id));
  };
}
