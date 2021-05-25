import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {DataTablesModule} from 'angular-datatables';
import { ProducerListComponent } from './components/producer-list/producer-list.component';
import { ProducerService } from './services/producer.service';
import { VaccineListComponent } from './components/vaccine-list/vaccine-list.component';
import { VaccineService } from './services/vaccine.service';
import { AddVaccineComponent } from './components/add-vaccine/add-vaccine.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { VaccineComponent } from './components/vaccine/vaccine.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ProducerListComponent,
    VaccineListComponent,
    AddVaccineComponent,
    NavBarComponent,
    FooterComponent,
    VaccineComponent,
    CartComponent,
    ProductComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [ProducerService, VaccineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
