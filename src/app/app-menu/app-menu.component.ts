
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.css']
})
export class AppMenuComponent {


  @Input() menuItems: any[] = []; // Menu items passed from the parent (restaurant details)
  @Output() addItemToCart = new EventEmitter<any>();

  addToCart(item: any) {
    this.addItemToCart.emit(item);
  }

}
