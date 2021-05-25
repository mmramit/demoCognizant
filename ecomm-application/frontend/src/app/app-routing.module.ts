import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProducerListComponent } from './components/producer-list/producer-list.component';
import { AddVaccineComponent } from './components/add-vaccine/add-vaccine.component';
import { VaccineListComponent } from './components/vaccine-list/vaccine-list.component';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { VaccineComponent } from './components/vaccine/vaccine.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  
  { path: 'view-producers', component: ProducerListComponent },
  { path: 'view-vaccines', component: VaccineListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'vaccines', component: VaccineComponent },
  { path: 'product-item', component: ProductComponent },
  { path: '', redirectTo: 'view-vaccines', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
