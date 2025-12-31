import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  name = '';
  phone = '';
  address = '';
  paymentMethod = 'COD';

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router
  ) {}

  placeOrder() {
    const cartItems = this.cartService.getCart();

    const orderData = {
      fullName: this.name,
      phone: this.phone,
      address: this.address,
      paymentMethod: this.paymentMethod,
     total: cartItems.reduce((total: number, item: any) => total + item.price, 0),

      items: cartItems.map((item: any) => ({
        productId: 1,
        quantity: 1, // 🔥 later we add quantity support
        price: item.price
      }))
    };

    this.orderService.placeOrder(orderData).subscribe({
      next: (res) => {
        alert(`Order Placed Successfully! Order ID: ${res.orderId}`);

        this.cartService.clearCart();
        this.router.navigate(['/']); // Go home after success
      },
      error: (err) => {
        console.error(err);
        alert("Failed to place order. Try again.");
      }
    });
  }
}
