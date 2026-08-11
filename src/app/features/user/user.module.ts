import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserViewComponent } from './user-view/user-view.component';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UserEffects } from './store/user.effect';
import { AuthReducer } from './store/user.reducer';



@NgModule({
  declarations: [
    UserViewComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('auth', AuthReducer),
    EffectsModule.forFeature([UserEffects])
  ]
})
export class UserModule { }
