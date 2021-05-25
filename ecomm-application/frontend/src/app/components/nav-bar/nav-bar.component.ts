import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

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
}

deleteItems() {
    localStorage.removeItem("cart");
    location.reload();
  }



}
