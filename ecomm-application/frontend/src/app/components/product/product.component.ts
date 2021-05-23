import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Observable,Subject } from "rxjs";
import { Vaccine } from '../../models/vaccine';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../../models/item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  implements OnInit {


private vaccine: Vaccine;
private items: Item[] = [];
private total: number = 0;
private pVaccine:Vaccine;

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) {}

    ngOnInit() {
      this.route.queryParams
        .subscribe(params => {
          this.productService.getVaccine(params.id).subscribe(data => {     
            this.vaccine = data;
            console.log(this.vaccine);
            
        }
      );
    }
  )}

  buy(id:String){
    this.productService.getVaccine(id).subscribe(res => {
			this.pVaccine = res;
			var item= new Item();
			if (id) {
					item.product= this.pVaccine,
					item.quantity= 1;
					
				if (localStorage.getItem('cart') == null) {
					let cart: any = [];
					cart.push(JSON.stringify(item));
					console.log(item);
					localStorage.setItem('cart', JSON.stringify(cart));
					
				} else {
					let cart: any = JSON.parse(localStorage.getItem('cart'));
					let index: number = -1;
					for (var i = 0; i < cart.length; i++) {
						let item: Item = JSON.parse(cart[i]);
						if (item.product.id == id) {
							index = i;
							break;
						}
					}
					
					if (index == -1) {
						cart.push(JSON.stringify(item));
						localStorage.setItem('cart', JSON.stringify(cart));
					} else {
						let item: Item = JSON.parse(cart[index]);
						item.quantity += 1;
						cart[index] = JSON.stringify(item);
						localStorage.setItem("cart", JSON.stringify(cart));
					}
				}
        this.router.navigate(['/cart']);
			} else {
				this.router.navigate(['/cart']);
	
			}
		});


  }
}


