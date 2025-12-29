import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-tracking',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-tracking.component.html',
  styleUrls: ['./order-tracking.component.css']
})
export class OrderTrackingComponent {
  order: any = null;

  constructor() {
    const storedOrder = localStorage.getItem('plantyuga-last-order');
    if (storedOrder) {
      this.order = JSON.parse(storedOrder);
    }
  }
}
