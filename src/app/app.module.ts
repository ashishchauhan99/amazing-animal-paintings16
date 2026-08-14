import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { CoreRoutingModule } from './core/core-routing.module';
//import { CoreModule } from './core/core.module';
//import { CartModule } from './features/cart/cart.module';
//import { ProductModule } from './features/product/product.module';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

//import { HomeModule } from './features/home/home.module';
import { LoginModule } from './features/login/login.module';
//import { UserModule } from './features/user/user.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //ProductModule,
    //CartModule,    
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument(),  
    LoginModule,
    //CoreModule,
    //CoreRoutingModule,
    //HomeModule,
    //UserModule
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
