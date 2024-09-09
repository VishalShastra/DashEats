import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface Restaurant {
  name: string;
  imageUrl: string;
  rating: number;
  deliveryTime: string;
  id:number;
}

@Component({
  selector: 'app-resturant-list',
  templateUrl: './resturant-list.component.html',
  styleUrls: ['./resturant-list.component.css']
})
export class ResturantListComponent {

  restaurants: Restaurant[] = [
    {
      name: 'Pizza Palace',
      imageUrl: 'assets/pizza.jpeg',
      rating: 4.5,
      deliveryTime: '30-40 min',
      id : 1
    },
    {
      name: 'Burger House',
      imageUrl: 'assets/burger.jpeg',
      rating: 4.2,
      deliveryTime: '25-35 min',
      id : 2
    },
    {
      name: 'Sushi Express',
      imageUrl: 'assets/sushi.jpeg',
      rating: 4.8,
      deliveryTime: '45-55 min',
      id : 3
    }
  ];

  constructor(private router: Router) {}

  viewDetails(id: number) {
    this.router.navigate([`/restaurant`, id]);  // Navigate to the restaurant details page with the restaurant id
  }

}
