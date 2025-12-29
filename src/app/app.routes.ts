import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { OrderTrackingComponent } from './pages/order-tracking/order-tracking.component';
import { OrderConfirmationComponent } from './pages/order-confirmation/order-confirmation.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
   { path: 'track', component: OrderTrackingComponent },
  //{ path: 'order-tracking', component: OrderTrackingComponent },
  { path: 'order-confirmation', component: OrderConfirmationComponent },
];
