import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CartService } from './services/cart.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgClass, NgIf, NgForOf } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, SlickCarouselModule, NgForOf],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  cartCount = 0;
  menuOpen = false; // 🔥 important

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.cartCount = this.cartService.getCart().length;
    this.cartService.cartChanged.subscribe(() => {
      this.cartCount = this.cartService.getCart().length;
    });
  }

  toggleMenu() {   // 🔥 FIX
    this.menuOpen = !this.menuOpen;
  }

  slides = [
    { title: "Indoor Plants", subtitle: "Make your home fresh & green", image: "assets/slider/indoor.jpg", link: "/products" },
    { title: "Balcony Plants", subtitle: "Build your own mini garden", image: "assets/slider/balcony.jpg", link: "/products" },
    { title: "Office Plants", subtitle: "Boost focus & productivity", image: "assets/slider/office.jpg", link: "/products" },
    { title: "Pet Friendly", subtitle: "Safe plants for furry friends", image: "assets/slider/pet.jpg", link: "/products" }
  ];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: false,
    infinite: true
  };

goTo(path: string) {
  this.router.navigate([path]);
}

}
