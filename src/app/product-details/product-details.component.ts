import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Iproduct } from '../catalog/product.model';

@Component({
  selector: 'bot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  //ignore the fact that it is not initialized
  @Input() product!: Iproduct;
  @Output() buy = new EventEmitter();

  getImageUrl(product: Iproduct) {
    if (!product) return '';
    return 'assets/images/robot-parts/' + product.imageName;
  }

  buyButtonClicked(product: Iproduct) {
    this.buy.emit();
  }
}
