import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResturantListComponent } from './resturant-list/resturant-list.component';
import { ResturantDetailsComponent } from './resturant-details/resturant-details.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';

const routes: Routes = [
  { path: '', component: ResturantListComponent },
  { path: 'restaurant/:id', component: ResturantDetailsComponent } , // Route for restaurant details
  { path: 'order-confirmation', component: OrderConfirmationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }