import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  filtered: any[] = [];

  constructor(private productService: ProductService) {
    console.log('🏠 HomeComponent constructor initialized');
  }

  ngOnInit() {
    console.log('🏠 HomeComponent ngOnInit called');
  }

  filterCategory(categoryId: number) {
    console.log('🔍 filterCategory() clicked with categoryId:', categoryId);
    console.log('📍 ProductService available:', !!this.productService);
    console.log('🌐 Making API call to:', `/category/${categoryId}`);
    
    this.productService.getByCategory(categoryId).subscribe(
      res => {
        console.log('✅ API Response received:', res);
        this.filtered = res || [];
        console.log('📊 Filtered array updated, length:', this.filtered.length);
        console.log('📍 Filtered products:', this.filtered);
        window.scrollTo({ top: 900, behavior: 'smooth' });
      },
      error => {
        console.error('❌ API Error:', error);
        console.error('Error Status:', error.status);
        console.error('Error Message:', error.message);
        console.error('Full Error:', error);
      }
    );
  }
}
