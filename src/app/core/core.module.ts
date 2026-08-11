import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UserEffects } from '../features/user/store/user.effect';
import { AuthReducer } from '../features/user/store/user.reducer';
import { CoreRoutingModule } from './core-routing.module';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    CoreRoutingModule,
]
})
export class CoreModule { }
