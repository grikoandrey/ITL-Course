import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ProductType} from "../types/product.types";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  private apiUrl = 'https://testologia.ru/tea';

  constructor(private http: HttpClient) { }

  // getProducts():  Observable<ProductType[]> {
  //   return this.http.get<ProductType[]>('https://testologia.ru/tea');
  // }
  getProducts(searchQuery: string = ''): Observable<ProductType[]> {
    let params = new HttpParams();
    if (searchQuery) {
      params = params.set('search', searchQuery);
    }

    return this.http.get<ProductType[]>(this.apiUrl, { params });
  }

}
