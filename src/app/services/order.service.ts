import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private baseUrl = 'https://localhost:7230/api/Orders/place-order';
  private trackOrder = 'https://localhost:7230/api/Orders';



  constructor(private http: HttpClient) {}

  placeOrder(orderData: any): Observable<any> {
    return this.http.post(this.baseUrl, orderData);
  }
    id = 1;
  getOrderById(id: number): Observable<any> {
    return this.http.get(`${this.trackOrder}/${id}`);
  }
}
