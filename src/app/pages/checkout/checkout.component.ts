import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

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
    private router: Router
  ) {}

  placeOrder() {
    const order = {
      name: this.name,
      phone: this.phone,
      address: this.address,
      paymentMethod: this.paymentMethod,
      items: this.cartService.getCart(),
      total: this.cartService.getCart().reduce(
        (sum: number, item: any) => sum + item.price,
        0
      ),
      orderId: 'PY' + Math.floor(Math.random() * 100000)
    };
    localStorage.setItem('plantyuga-last-order', JSON.stringify(order));
    this.cartService.clearCart();
    this.router.navigate(['/order-confirmation']);
  }
}
