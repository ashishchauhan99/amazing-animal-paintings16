import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './features/product/product-list/product-list.component';
import { CartViewComponent } from './features/cart/cart-view/cart-view.component';
import { UserViewComponent } from './features/user/user-view/user-view.component';
import { authGuard } from './core/gaurd/auth.gaurd';
import { LoginViewComponent } from './features/login/login-view/login-view.component';

const routes: Routes = [
  //{path: '', redirectTo: '/products', pathMatch: 'full'},
  { path: 'login', component: LoginViewComponent },
  { path: 'products', component: ProductListComponent, canActivate: [authGuard] },
  { path: 'cart', component: CartViewComponent, canActivate: [authGuard] },
  { path: 'profile', component: UserViewComponent, canActivate: [authGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' } // Wildcard redirect
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
