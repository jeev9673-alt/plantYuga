import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cartCount = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartCount = this.cartService.getCart().length;
  }
}
