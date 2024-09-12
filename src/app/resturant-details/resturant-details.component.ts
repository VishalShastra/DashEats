import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-resturant-details',
  templateUrl: './resturant-details.component.html',
  styleUrls: ['./resturant-details.component.css']
})
export class ResturantDetailsComponent {

  restaurantId: number | null = null;
  restaurant: any;  // Replace with actual Restaurant model

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.restaurantId = Number(this.route.snapshot.paramMap.get('id'));
    this.getRestaurantDetails(this.restaurantId);
  }


  getRestaurantDetails(id: number) {
    // For now, hardcode or fetch details from a service (API or data)
    const mockRestaurants = [
      {
        id: 1,
        name: 'Pizza Palace',
        menu: ['Pepperoni Pizza', 'Cheese Pizza'],
        address: '123 Pizza St',
        contact: '555-1234',
        reviews: ['Best pizza ever!', 'Loved the crust!']
      },
      {
        id: 2,
        name: 'Burger House',
        menu: ['Cheeseburger', 'Veggie Burger'],
        address: '456 Burger Ave',
        contact: '555-5678',
        reviews: ['Juicy burgers!', 'Great for vegetarians.']
      },
      {
        id: 3,
        name: 'Sushi Express',
        menu: ['California Roll', 'Spicy Tuna Roll'],
        address: '789 Sushi Blvd',
        contact: '555-7890',
        reviews: ['Fresh sushi!', 'Quick delivery!']
      }
    ];

    this.restaurant = mockRestaurants.find(r => r.id === id);
  }


  menuItems = [
    { name: 'Pizza', price: 10, quantity: 1 },
    { name: 'Burger', price: 7, quantity: 1 },
    { name: 'Salad', price: 5, quantity: 1 }
  ];

  cartItems: any[] = [];

  addItemToCart(item: any) {
    const existingItem = this.cartItems.find(cartItem => cartItem.name === item.name);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.push({ ...item });
    }
  }

  updateQuantity(event: { item: any, quantity: number }) {
    const cartItem = this.cartItems.find(ci => ci.name === event.item.name);
    if (cartItem && event.quantity > 0) {
      cartItem.quantity = event.quantity;
    }
  }

  removeItem(item: any) {
    this.cartItems = this.cartItems.filter(ci => ci.name !== item.name);
  }

}
