import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-order-confirmation',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent {
  order: any = {};

  ngOnInit() {
    const savedOrder = localStorage.getItem('plantyuga-last-order');
    if (savedOrder) {
      this.order = JSON.parse(savedOrder);
    }
  }
}
