import { Component } from '@angular/core';

export interface Restaurant {
  name: string;
  imageUrl: string;
  rating: number;
  deliveryTime: string;
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
      deliveryTime: '30-40 min'
    },
    {
      name: 'Burger House',
      imageUrl: 'assets/burger.jpeg',
      rating: 4.2,
      deliveryTime: '25-35 min'
    },
    {
      name: 'Sushi Express',
      imageUrl: 'assets/sushi.jpeg',
      rating: 4.8,
      deliveryTime: '45-55 min'
    }
  ];

}
