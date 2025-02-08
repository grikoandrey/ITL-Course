import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[buttons]'
})
export class ButtonsDirective implements OnInit{

  @Input() buttonDefaultBgColor: string = '-webkit-linear-gradient(90deg, rgb(113, 8, 30) 0%, rgb(215, 72, 92) 100%';
  @Input() buttonHoverBgColor: string = '-webkit-linear-gradient(90deg, rgb(0, 8, 0) 0%, rgb(215, 72, 92) 100%)';

  constructor(private element: ElementRef,
              private renderer: Renderer2,) {
  }

  @HostListener('mouseenter')
  onHover() {
    this.changeButtonBgColor(this.buttonHoverBgColor);
  }

  @HostListener('mouseleave')
  offHover() {
    this.changeButtonBgColor(this.buttonDefaultBgColor);
  }

  ngOnInit() {
    this.changeButtonBgColor(this.buttonDefaultBgColor);
  }

  changeButtonBgColor(bgColor: string) {
    this.renderer.setStyle(this.element.nativeElement, 'background-image',
      bgColor);
  }
}
