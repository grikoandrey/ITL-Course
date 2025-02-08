import { Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public tel: string = '375293689868';
  public isNavOpen: boolean = false;

  // Смещение к блоку и закрытие меню
  public scrollTo(target: string, ): void {
    const targetElement: HTMLElement | null = document.getElementById(target);
    if (targetElement) {
      targetElement.scrollIntoView({behavior: 'smooth'});
      this.closeNav();
    }
  };

  // Открытие меню
  public openNav(): void {
    this.isNavOpen = true;
  }

  // Закрытие меню
  public closeNav(): void {
    this.isNavOpen = false;
  }
}
