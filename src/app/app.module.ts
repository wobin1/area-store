import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './components/shared/main-menu/main-menu.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { AdsComponent } from './components/shared/ads/ads.component';
import { HeroComponent } from './components/landing-page/hero/hero.component';
import { VerifiedStoresRandomProductsComponent } from './components/landing-page/verified-stores-random-products/verified-stores-random-products.component';
import { UnverifiedStoresRandomProductsComponent } from './components/landing-page/unverified-stores-random-products/unverified-stores-random-products.component';
import { AreasCoveredComponent } from './components/landing-page/areas-covered/areas-covered.component';
import { NewsLetterComponent } from './components/shared/news-letter/news-letter.component';
import { ProductsComponent } from './components/shop-page/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartMenuComponent } from './components/cart/cart-menu/cart-menu.component';
import { CartItemsComponent } from './components/cart/cart-items/cart-items.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ShopPageComponent } from './components/shop-page/shop-page.component';
import { CartComponent } from './components/cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    FooterComponent,
    AdsComponent,
    HeroComponent,
    VerifiedStoresRandomProductsComponent,
    UnverifiedStoresRandomProductsComponent,
    AreasCoveredComponent,
    NewsLetterComponent,
    ProductsComponent,
    ProductDetailComponent,
    CartMenuComponent,
    CartItemsComponent,
    LandingPageComponent,
    ShopPageComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
