import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './app-cart.component.html',
  styleUrls: ['./app-cart.component.css']
})
export class AppCartComponent {


  @Input() cartItems: any[] = [];
  @Output() updateQuantity = new EventEmitter<{ item: any, quantity: number }>();
  @Output() removeItem = new EventEmitter<any>();

 
  constructor(private router: Router) {}

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  changeQuantity(item: any, quantity: number) {
    this.updateQuantity.emit({ item, quantity });
  }

  remove(item: any) {
    this.removeItem.emit(item);

  }

  checkout() {
    if (this.cartItems.length > 0) {
      // You can either navigate to another page or show a success message here
      console.log('Proceeding to checkout with items:', this.cartItems);
      alert('Order placed successfully!');

      // Optionally, you can clear the cart after checkout
      if (this.cartItems.length > 0) {
        // Clear the cart and navigate to the order confirmation page
        this.cartItems = [];
        this.router.navigate(['/order-confirmation']);
      }
    }
  }

}
