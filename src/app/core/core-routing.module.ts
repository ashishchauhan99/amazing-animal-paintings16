import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { authGuard } from './auth.gard';

// Import feature view components
import { ProductListComponent } from '../features/product/product-list/product-list.component';
import { CartViewComponent } from '../features/cart/cart-view/cart-view.component';
import { HomeViewComponent } from '../features/home/home-view/home-view.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent, // Layout Shell Component
        canActivate: [authGuard],        // Protects ALL child routes at once
        children: [
            {
                path: 'products',
                component: ProductListComponent // Renders inside MainLayout's <router-outlet>
            },  
            {
                path: 'cart',
                component: CartViewComponent        // Renders inside MainLayout's <router-outlet>
            },
            {
                path: 'home',
                component: HomeViewComponent        // Renders inside MainLayout's <router-outlet>
            },
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoreRoutingModule { }



