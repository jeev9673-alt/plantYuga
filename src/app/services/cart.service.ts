import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: any[] = [];

  // 🔥 This will notify components when cart changes
  cartChanged = new BehaviorSubject<void>(undefined);

  getCart() {
    return this.cart;
  }

  addToCart(item: any) {
    this.cart.push(item);
    localStorage.setItem('cart', JSON.stringify(this.cart));

    this.cartChanged.next(); // 🔥 Emit update
  }

  removeItem(index: number) {
    this.cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.cart));

    this.cartChanged.next(); // 🔥 Emit update
  }

  clearCart() {
    this.cart = [];
    localStorage.removeItem('cart');
    this.cartChanged.next(); // 🔥 Emit update
  }
}
