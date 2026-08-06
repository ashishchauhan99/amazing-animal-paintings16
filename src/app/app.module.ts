import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreRoutingModule } from './core/core-routing.module';
import { CoreModule } from './core/core.module';
import { CartModule } from './features/cart/cart.module';
import { ProductModule } from './features/product/product.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppState } from './app.store';
import { ProductReducer } from './features/product/store/product.reducer';
import { AuthReducer } from './features/user/store/user.reducer';

import { HomeModule } from './features/home/home.module';
import { LoginModule } from './features/login/login.module';
import { UserModule } from './features/user/user.module';
import { UserEffects } from './features/user/store/user.effect';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ProductModule,
    CartModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatSidenavModule,
    MatListModule,
    StoreModule.forRoot<AppState>({products: ProductReducer, auth: AuthReducer}),
    EffectsModule.forRoot([UserEffects]),
    StoreDevtoolsModule.instrument(),
    LoginModule,
    CoreModule,
    CoreRoutingModule,
    HomeModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
