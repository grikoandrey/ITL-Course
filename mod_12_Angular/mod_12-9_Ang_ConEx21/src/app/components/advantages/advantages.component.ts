import {Component, Input, OnInit} from '@angular/core';
import {AdvType} from "../../types/adv.type";

@Component({
  selector: 'advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.scss']
})
export class AdvantagesComponent implements OnInit {

  @Input() adv: AdvType;

  constructor() {
    this.adv = {
      num: 0,
      title: '',
      text: '',
    }
  }

  ngOnInit(): void {
  }

}
