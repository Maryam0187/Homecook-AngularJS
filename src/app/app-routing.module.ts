import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {FoodComponent} from './food/food.component';
import {FoodDetailComponent} from './food-detail/food-detail.component'
import {OrderComponent} from './order/order.component';
import {OrderConfirmComponent} from './order-confirm/order-confirm.component'

const routes: Routes = [
  { path: '', redirectTo: '/food', pathMatch: 'full' },
  { path: 'food', component: FoodComponent },
  { path: 'detail/:id', component: FoodDetailComponent },
  { path: 'orderlink', component: OrderComponent },
  { path: 'orderconfirm', component: OrderConfirmComponent },




];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
  
})
export class AppRoutingModule { }
