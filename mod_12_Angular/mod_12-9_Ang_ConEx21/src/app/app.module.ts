import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {ProductListService} from "./services/product-list.service";
import {ProductComponent} from './components/product/product.component';
import {AdvantagesComponent} from './components/advantages/advantages.component';
import {ButtonsDirective} from './directives/buttons.directive';
import { TextSlicePipe } from './pipes/text-slice.pipe';
import { PhoneFormatPipe } from './pipes/phone-format.pipe';
import {AdvListService} from "./services/adv-list.service";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    AdvantagesComponent,
    ButtonsDirective,
    TextSlicePipe,
    PhoneFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  exports: [HeaderComponent, AppComponent,],
  providers: [ProductListService, AdvListService],
  bootstrap: [AppComponent, HeaderComponent, FooterComponent]
})
export class AppModule {
}
