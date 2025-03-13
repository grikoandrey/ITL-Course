import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
// import {HeaderComponent} from './components/common/header/header.component';
// import {FooterComponent} from './components/common/footer/footer.component';
// import {ProductCardComponent} from './components/common/product-card/product-card.component';
// import {TitleComponent} from './components/common/title/title.component';
// import {CoolInputDirective} from './directives/cool-input.directive';
// import {IsChickenDirective} from './directives/is-chicken.directive';
// import {ChickenDescriptionPipe} from './pipes/chicken-description.pipe';
// import {WordUpperPipe} from './pipes/word-upper.pipe';
// import {ChikenProductsPipe} from './pipes/chiken-products.pipe';
// import {ProductService} from "./services/product.service";
// import {MainComponent} from './components/pages/main/main.component';
// import {ProductsComponent} from './components/pages/products/products.component';
// import {OrderComponent} from './components/pages/order/order.component';
// import {ProductComponent} from './components/pages/product/product.component';
import {HttpClientModule} from "@angular/common/http";
// import {AuthInterceptor} from "./core/auth/auth.interceptor";
import {CoreModule} from "./core/core.module";
import {ProductsModule} from "./views/products/products.module";
import {HomeModule} from "./views/home/home.module";
import {OrderModule} from "./views/order/order.module";
import {SharedModule} from "./shared/shared.module";
import {HeaderComponent} from "./shared/layout/header/header.component";
import {FooterComponent} from "./shared/layout/footer/footer.component";
import {LayoutComponent} from "./views/layout.component";
// import {AboutComponent} from "./views/home/about/about.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    // ProductCardComponent,
    // TitleComponent,
    // CoolInputDirective,
    // IsChickenDirective,
    // ChickenDescriptionPipe,
    // WordUpperPipe,
    // ChikenProductsPipe,
    // AboutComponent,
    // MainComponent,
    // ProductsComponent,
    // OrderComponent,
    // ProductComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // ProductsModule,
    // HomeModule,
    // OrderModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [
    // ProductService,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptor,
    //   multi: true,
    // },
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
