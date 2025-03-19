import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  product: string = '';

  constructor(private http: HttpClient) {
  }

  createOrder(orderData: {
    name: string,
    last_name: string,
    phone: string,
    country: string,
    zip: string,
    product: string,
    address: string,
    comments: string,
  }) {
    return this.http.post<{ success: boolean, message?: string }>(environment.apiURL + 'order-tea', orderData)
  }
}
