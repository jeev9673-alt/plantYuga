import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartKey = 'plantyuga-cart';

  // Get cart items
  getCart() {
    const cart = localStorage.getItem(this.cartKey);
    return cart ? JSON.parse(cart) : [];
  }

  // Add to cart
  addToCart(product: any) {
    const cart = this.getCart();
    cart.push(product);
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
  }

  // Remove one item
  removeFromCart(index: number) {
    const cart = this.getCart();
    cart.splice(index, 1);
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
  }

  // Clear cart
  clearCart() {
    localStorage.removeItem(this.cartKey);
  }
}
