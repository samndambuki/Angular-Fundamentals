import { Injectable } from '@angular/core';
import { Iproduct } from './catalog/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Iproduct[] = [];
  constructor(private http: HttpClient) {}

  add(product: Iproduct) {
    this.cart.push(product);
    this.http.post('/api/cart', this.cart).subscribe(() => {
      console.log(`product${product.name} added to cart`);
    });
  }
}
