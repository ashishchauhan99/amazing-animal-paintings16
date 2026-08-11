import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserViewComponent } from './user-view/user-view.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthReducer } from './store/user.reducer';
import { UserEffects } from './store/user.effect';
import { AppState } from 'src/app/app.store';



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
