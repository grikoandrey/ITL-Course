import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component, DoCheck,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  Output, SimpleChanges,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {ProductType} from "../../types/product.type";
import {TitleComponent} from "../title/title.component";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {
  // @Input() product: ProductType = {} as ProductType;
  @Input()
  get product(): ProductType {
    return this._product;
  }

  set product(param: ProductType) {
    // param.title = param.title.toUpperCase();
    this._product = param;
  }

  private _product: ProductType;

  @Output() addToCartEvent: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild(TitleComponent)
  private titleComponent!: TitleComponent;

  @ViewChild('elem')
  private elem!: ElementRef;

  constructor() {
    this._product = {
      image: '',
      title: '',
      description: '',
    }
  };

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges', changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit', this.elem);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  addProductToCard() {
    // this.addToCartEvent.emit(title);
    this.addToCartEvent.emit(this.titleComponent.toUpper());
  }
}
