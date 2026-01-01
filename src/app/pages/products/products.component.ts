import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common'; // 👈 ADD THIS
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor], // 👈 INCLUDE HERE
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getAllProducts().subscribe({
      next: (res) => this.products = res,
      error: (err) => console.error('Failed to load products =>', err)
    });
  }

  addToCart(item: any) {
    this.cartService.addToCart(item);
    alert("Added to cart!");
  }
}
