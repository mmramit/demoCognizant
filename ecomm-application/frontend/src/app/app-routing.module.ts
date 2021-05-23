import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProducerListComponent } from './components/producer-list/producer-list.component';
import { AddVaccineComponent } from './components/add-vaccine/add-vaccine.component';
import { AddProducerComponent } from './components/add-producer/add-producer.component';
import { VaccineListComponent } from './components/vaccine-list/vaccine-list.component';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { CartComponent } from './components/cart/cart.component';
import { VaccineComponent } from './components/vaccine/vaccine.component';

const routes: Routes = [
  
  { path: 'view-producers', component: ProducerListComponent },
  { path: 'add-producer', component: AddProducerComponent },
  { path: 'view-vaccines', component: VaccineListComponent },
  { path: 'add-vaccine', component: AddVaccineComponent },
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'cart', component: CartComponent },
  { path: 'vaccines', component: VaccineComponent },
  { path: '', redirectTo: 'landing-page', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
