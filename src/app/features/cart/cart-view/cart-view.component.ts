import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/features/product/model/product';
import { CartService } from '../cart.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectProducts, selectProductsCount, selectCartTotalPrice } from 'src/app/features/product/store/product.selector';
import { ClearProduct, RemoveProduct } from 'src/app/features/product/store/product.action';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {

  cartTotalPrice$: Observable<number> = this.store.select(selectCartTotalPrice);
  cartProductCount$: Observable<number> = this.store.select(selectProductsCount);
  cartProducts$: Observable<Product[]> = this.store.select(selectProducts);
  
  cartItems: Product[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService, private store: Store) { }

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe(data => {
      this.cartItems = data;
      this.totalPrice = this.getTotalPrice();
    });
  }

  getTotalPrice(): number {
    let total = 0;
    for (let item of this.cartItems) {
      total += item.price
    }
    return total;
  }

  clearItems(): void {
    this.cartService.clearCart().subscribe();
    this.store.dispatch(ClearProduct());
  }

  checkout(): void {
    this.cartService.checkout(this.cartItems).subscribe();
  }
}
