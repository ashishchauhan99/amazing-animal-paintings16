import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { selectProductsCount } from 'src/app/features/product/store/product.selector';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  productCount$: Observable<number> = this.store.select(selectProductsCount);
  cartItemCount: number = 0;

  constructor(private store: Store) {
    console.log('-------------------------------+++++++++++');
  }

  ngOnInit() {
    this.productCount$.subscribe(count => {
      console.log('Current product/cart count from store:', count);
    });
  }
}

