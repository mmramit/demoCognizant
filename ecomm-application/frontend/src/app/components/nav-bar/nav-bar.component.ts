import { Component, OnInit } from '@angular/core';
import { ProducerService } from '../../services/producer.service';
import { CartService } from '../../services/cart.service';

import {FormControl,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  private sum: number;
  
  constructor( private cart: CartService ) {}
  
  ngOnInit() {
   this.sum = this.cart.loadCart();
   console.log(this.sum);
  }

}
