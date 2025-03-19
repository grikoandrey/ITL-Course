import { Component, OnInit } from '@angular/core';
import {Subject} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchQuery: string = '';
  subject: Subject<string> = new Subject<string>();
  isSearching: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSearch(): void {
    this.subject.next(this.searchQuery);
    this.isSearching = true;
    this.router.navigate(['/catalog'], { queryParams: {search: this.searchQuery} });
  }

  onResetSearch(): void {
    this.searchQuery = '';
    this.subject.next('');
    this.isSearching = false;
    this.router.navigate(['/catalog']);
  }
}
