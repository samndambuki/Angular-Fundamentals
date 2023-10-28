import { Injectable } from '@angular/core';
import { Iproduct } from './catalog/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Iproduct[] = [];
  constructor() {}

  add(product: Iproduct) {
    this.cart.push(product);
    console.log(`product${product.name} added to cart`);
  }
}
