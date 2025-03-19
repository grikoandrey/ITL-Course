import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {ProductType} from "../../../types/product.types";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProduct(id: number):  Observable<ProductType> {
    let params = new HttpParams();
    params = params.set('id', id);
    return this.http.get<ProductType>(`https://testologia.ru/tea`, {
      params: params,
    });
  }
}
