import {Component, OnDestroy, OnInit} from '@angular/core';
import {CatalogService} from "../../../shared/services/catalog.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription, tap} from "rxjs";
import {ProductType} from "../../../../types/product.types";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit, OnDestroy {

  private subscriptionCatalog: Subscription | null = null;
  products: ProductType[] = [];
  loading: boolean = false;
  searchQuery: string = '';

  constructor(private CatalogService: CatalogService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchQuery = params['search'] || '';
      this.loadProducts(this.searchQuery);
    });
  }

loadProducts(query: string): void {
  this.loading = true;
  this.subscriptionCatalog = this.CatalogService.getProducts(query)
    .pipe(
      tap(() => {
        this.loading = false;
      })
    )
    .subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (err) => {
        console.log(err);
        this.router.navigate(['/']);
      }
    });
}

  ngOnDestroy(): void {
    this.subscriptionCatalog?.unsubscribe();
  }
}
