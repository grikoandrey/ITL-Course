import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductsModule} from "./products/products.module";
import {MainModule} from "./main/main.module";
import {OrderModule} from "./order/order.module";

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MainModule,
    OrderModule,
    ProductsModule,
  ]
})
export class ViewsModule { }
