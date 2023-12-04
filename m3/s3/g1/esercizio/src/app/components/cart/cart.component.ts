import { ProductsService } from './../../products.service';
import { Component } from '@angular/core';
import { iProduct } from '../../Models/i-product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  products:iProduct[] = [];

  constructor(private productSvc:ProductsService){}

  ngOnInit(){
    this.productSvc.cart$.subscribe(prod => {
      this.products.push(prod)
    })
  }

}
