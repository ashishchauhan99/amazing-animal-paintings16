import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { authGuard } from './auth.gard';

// Import feature view components
//import { ProductListComponent } from '../features/product/product-list/product-list.component';
// import { CartViewComponent } from '../features/cart/cart-view/cart-view.component';
// import { HomeViewComponent } from '../features/home/home-view/home-view.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent, // Layout Shell Component
        canActivate: [authGuard],        // Protects ALL child routes at once
        children: [
            {
                path: 'products',                   
                 loadChildren: () => import('../features/product/product.module').then(m => m.ProductModule) // Points to Module, not Component
            },  
            {
                path: 'cart',                
                loadChildren: () => import('../features/cart/cart.module').then(m => m.CartModule) //Points to Module, not Component
            },
            {
                path: 'home',
                 loadChildren: () => import('../features/home/home.module').then(m => m.HomeModule) // Points to Module, not Component
            },
            {
                path: 'user',
                 loadChildren: () => import('../features/user/user.module').then(m => m.UserModule) // Points to Module, not Component
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



