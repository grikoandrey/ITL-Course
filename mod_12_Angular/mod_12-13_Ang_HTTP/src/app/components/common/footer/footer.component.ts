import {Component, OnInit} from '@angular/core';
import {CartService} from "../../../services/cart.service";

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  currentYear: number = new Date().getFullYear();

  constructor(public cartServices: CartService) {
  }

  ngOnInit(): void {
  }
}
