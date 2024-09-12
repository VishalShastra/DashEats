import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent {

  constructor(private router: Router) {}

  // Method to navigate back to the home page
  goToHome() {
    this.router.navigate(['/']);
  }

}
