import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {HeaderComponent} from './components/common/header/header.component';
import {FooterComponent} from './components/common/footer/footer.component';
import {ProductCardComponent} from './components/common/product-card/product-card.component';
import {TitleComponent} from './components/common/title/title.component';
import {CoolInputDirective} from './directives/cool-input.directive';
import {IsChickenDirective} from './directives/is-chicken.directive';
import {ChickenDescriptionPipe} from './pipes/chicken-description.pipe';
import {WordUpperPipe} from './pipes/word-upper.pipe';
import {ChikenProductsPipe} from './pipes/chiken-products.pipe';
import {ProductService} from "./services/product.service";
import {MainComponent} from './components/pages/main/main.component';
import {ProductsComponent} from './components/pages/products/products.component';
import {OrderComponent} from './components/pages/order/order.component';
import {ProductComponent} from './components/pages/product/product.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./auth/auth.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductCardComponent,
    TitleComponent,
    CoolInputDirective,
    IsChickenDirective,
    ChickenDescriptionPipe,
    WordUpperPipe,
    ChikenProductsPipe,
    MainComponent,
    ProductsComponent,
    OrderComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ProductService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: LoginInterceptor,
    //   multi: true,
    // },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
