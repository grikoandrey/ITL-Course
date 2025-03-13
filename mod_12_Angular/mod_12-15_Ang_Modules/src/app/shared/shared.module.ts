import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductCardComponent} from "./components/product-card/product-card.component";
import {CoolInputDirective} from "./directives/cool-input.directive";
import {IsChickenDirective} from "./directives/is-chicken.directive";
import {ChickenDescriptionPipe} from "./pipes/chicken-description.pipe";
import {ChikenProductsPipe} from "./pipes/chiken-products.pipe";
import {WordUpperPipe} from "./pipes/word-upper.pipe";
import {TitleComponent} from "./components/title/title.component";
import {RouterModule} from "@angular/router";
// import {FooterComponent} from "./layout/footer/footer.component";
// import {HeaderComponent} from "./layout/header/header.component";



@NgModule({
  declarations: [
    // FooterComponent,
    // HeaderComponent,
    TitleComponent,
    ProductCardComponent,
    CoolInputDirective,
    IsChickenDirective,
    ChickenDescriptionPipe,
    ChikenProductsPipe,
    WordUpperPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    // FooterComponent,
    // HeaderComponent,
    TitleComponent,
    ProductCardComponent,
    CoolInputDirective,
    IsChickenDirective,
    ChickenDescriptionPipe,
    ChikenProductsPipe,
    WordUpperPipe,
  ]
})
export class SharedModule { }
