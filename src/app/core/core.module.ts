import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { CoreRoutingModule } from './core-routing.module';
import { LayoutComponent } from './layout/layout.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { ProductReducer } from '../features/product/store/product.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    CoreRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    StoreModule.forFeature("products", ProductReducer)
]
})
export class CoreModule { }
