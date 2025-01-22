import {Component} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public currentYear: number = new Date().getFullYear();
  public tel: string = '+375 (29) 368-98-68';

  public social = {
    logo: 'insta',
    name: 'Instagram',
  };

  constructor() {
  }
}
