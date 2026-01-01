import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = "https://localhost:7230/api/Products";

  constructor(private http: HttpClient) {
    console.log('📦 ProductService initialized with baseUrl:', this.baseUrl);
  }

  getProducts(): Observable<any> {
    console.log('📦 getProducts() called');
    return this.http.get<any>(this.baseUrl);
  }

  getAllProducts(): Observable<any[]> {
    console.log('📦 getAllProducts() called');
    return this.http.get<any[]>(this.baseUrl);
  }

  getByCategory(categoryId: number): Observable<any[]> {
    const url = `${this.baseUrl}/category/${categoryId}`;
    console.log('📦 getByCategory() called with categoryId:', categoryId);
    console.log('📦 Full URL:', url);
    return this.http.get<any[]>(url);
  }
}
