import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  };

  // public scrollTo(target: HTMLElement,): void {
  //   target.scrollIntoView({behavior: 'smooth'});
  // }
}
