import { Component } from '@angular/core';

@Component({
  selector: 'app-second-comp',
  templateUrl: './second-comp.component.html',
  // template: '<span>любой текст</span>',
  styleUrls: ['./second-comp.component.scss']
})
export class SecondCompComponent {
  title = 'hello second-comp';
  link = 'https://google.com/';

  colspan = 3;
  isTest = 'test1';
  color = 1;

  value = 'my value';
  items = [1,2,3,4,5,6,7,8,9,10];

  constructor() { }

  onClick(): void {
    this.link = 'https://amazon.com/';
    this.isTest = 'test2';
    this.value = 'new value';
    alert(this.value)
    // alert('you did it!');
  }
}
