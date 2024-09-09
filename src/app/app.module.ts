import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResturantDetailsComponent } from './resturant-details/resturant-details.component';
import { ResturantListComponent } from './resturant-list/resturant-list.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { AppCartComponent } from './app-cart/app-cart.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { AddressDetailComponent } from './address-detail/address-detail.component';
import { CreateAddressComponent } from './create-address/create-address.component';
import { AddressListComponent } from './address-list/address-list.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ResturantDetailsComponent,
    ResturantListComponent,
    AppMenuComponent,
    AppCartComponent,
    OrderConfirmationComponent,
    AddressDetailComponent,
    CreateAddressComponent,
    AddressListComponent,
    AppHeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
