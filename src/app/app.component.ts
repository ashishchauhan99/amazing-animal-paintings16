import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Product } from './models/product';
import { selectProducts, selectProductsCount } from './product/store/product.selector';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'amazing-animal-paintings16';
  // 1. Declare observable stream
  productCount$: Observable<number> = this.store.select(selectProductsCount);
  cartItemCount: number = 0;

  constructor(private store: Store) {}


}

