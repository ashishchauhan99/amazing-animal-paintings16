import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { selectProductsCount } from 'src/app/features/product/store/product.selector';
import { Store } from '@ngrx/store';
import { Router, CanActivateFn } from '@angular/router';
import { Logout } from 'src/app/features/login/store/user.action';
import { ClearProduct } from 'src/app/features/product/store/product.action';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  productCount$: Observable<number> = this.store.select(selectProductsCount);
  cartItemCount: number = 0;

  constructor(private store: Store, private router: Router) { }

  logout() {    
    this.store.dispatch(Logout());
    this.store.dispatch(ClearProduct());
    this.router.navigate(['/login']);
   }

}

