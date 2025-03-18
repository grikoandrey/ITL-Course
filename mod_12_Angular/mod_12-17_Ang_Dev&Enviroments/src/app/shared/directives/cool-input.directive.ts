import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[coolInput]'
})
export class CoolInputDirective implements OnInit {

  private _backgroundColor: string = '';
  @HostBinding('style.backgroundColor')
  get getBgColor() {
    return this._backgroundColor;
  }

  private _isOnFocus: boolean = false;
  @HostBinding('class.isOnFocus')
  get getIsOnFocus() {
    return this._isOnFocus;
  }

  @Input() coolInputDefaultBgColor: string = 'white';
  @Input() coolInputFocusBgColor: string = 'orange';

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('focus')
  onFocus(): void {
    this.changeElementColor(this.coolInputFocusBgColor);
    this._isOnFocus = true;
  }

  @HostListener('blur')
  onBlur(): void {
    this.changeElementColor(this.coolInputDefaultBgColor);
    this._isOnFocus = false;
  }

  @HostListener('click', ['$event', '$event.target'])
  onClick(event: Event, target: HTMLElement): void {
    console.log(target);
    console.log(event);
  }

  ngOnInit(): void {
    this.changeElementColor(this.coolInputDefaultBgColor);
    this.renderer.setAttribute(this.el.nativeElement, 'placeholder',
      `${this.el.nativeElement.getAttribute('placeholder')} *`);
    // this.el.nativeElement.style.backgroundColor = 'yellow';
    // const text = this.renderer.createElement('span');
    // this.renderer.setProperty(text, 'innerText', '*required to fill out');
    // this.renderer.setStyle(text, 'color', 'red');
    // this.renderer.setStyle(text, 'fontSize', '12px');
    // this.renderer.insertBefore(this.el.nativeElement.parentElement, text, this.renderer.nextSibling(this.el.nativeElement));
  };

  changeElementColor(color: string): void {
    this._backgroundColor = color;
    // this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }
}
