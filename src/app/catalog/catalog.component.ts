import { Component, inject } from '@angular/core';
import { Iproduct } from './product.model';
import { CartService } from '../cart.service';
import { ProductService } from './product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent {
  products: any;

  filter: string = '';

  cart: Iproduct[] = [];

  constructor(
    private cartSvc: CartService,
    private productSvc: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.productSvc.getProducts().subscribe((products) => {
      this.products = products;
    });
    // this.filter = this.route.snapshot.params['filter'];
    this.route.queryParams.subscribe((params) => {
      this.filter = params['filter'] ?? '';
    });
  }

  addToCart(product: Iproduct) {
    this.cartSvc.add(product);
    this.router.navigate(['/cart']);
  }

  getDiscountedClasses(product: Iproduct) {
    if (product.discount > 0) return ['strikethrough'];
    else {
      return [];
    }
  }

  getFilteredProducts() {
    return this.filter === ''
      ? this.products
      : this.products.filter(
          (product: any) => product.category === this.filter
        );
  }
}
