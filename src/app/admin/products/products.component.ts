import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  plants = [
    { name: 'Snake Plant', price: 349, image: 'https://picsum.photos/200?random=1' },
    { name: 'Aloe Vera', price: 149, image: 'https://picsum.photos/200?random=2' },
    { name: 'Jade Plant', price: 249, image: 'https://picsum.photos/200?random=3' },
    { name: 'Money Plant', price: 199, image: 'https://picsum.photos/200?random=4' },
    { name: 'ZZ Plant', price: 499, image: 'https://picsum.photos/200?random=5' },
    { name: 'Areca Palm', price: 299, image: 'https://picsum.photos/200?random=6' },
  ];
}
