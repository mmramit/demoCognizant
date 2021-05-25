import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cart } from '../models/cart';
import { Item } from '../models/item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  private total: number = 0;
  private items: Item[] = [];

  loadCart(): number {
    this.items = [];
		let cart = JSON.parse(localStorage.getItem('cart'));
    for (var i = 0; i < cart.length; i++) {
			let item = JSON.parse(cart[i]);
			this.total += item.quantity;
		}
    return this.total;
}


}