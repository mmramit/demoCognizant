import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProducerListComponent } from './components/producer-list/producer-list.component';
import { VaccineListComponent } from './components/vaccine-list/vaccine-list.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { VaccineComponent } from './components/vaccine/vaccine.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  
  { path: 'view-producers', component: ProducerListComponent },
  { path: 'view-vaccines', component: VaccineListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'vaccines', component: VaccineComponent },
  { path: 'home', component: HomeComponent },
  { path: 'product-item', component: ProductComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
