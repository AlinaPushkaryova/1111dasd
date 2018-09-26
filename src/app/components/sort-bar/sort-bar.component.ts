import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sort-bar',
  templateUrl: './sort-bar.component.html',
  styleUrls: ['./sort-bar.component.css']
})
export class SortBarComponent implements OnInit {

  @Input() orders;
  @Output() sortedUsers = new EventEmitter<any>();

  users;


  public menuItems = [
    'price low to high',
    'price high to low',
    'rating'
  ];

  public selectedMenu;
  public ordersSorted = [];
  public usersSorted = [];
  constructor() { }

  ngOnInit() {
  }

  sortElementsBy(menu): void {
    this.selectedMenu = menu;
    if (this.selectedMenu === 'price low to high') {
      this.sortByPriceLowToHigh(this.orders);
    } else if (this.selectedMenu === 'rating') {
      this.sortByRating();
    } else if (this.selectedMenu === 'price high to low') {
      this.sortByPriceHighToLow(this.orders);
    }
  }

  sortByPriceLowToHigh(orders): void {
    this.ordersSorted = orders.sort((a, b) => parseFloat(a.exchange_rate) - parseFloat(b.exchange_rate));
  }

  sortByRating(): void {
    this.usersSorted = this.orders.sort((a, b) => parseFloat(a.userName.rating) - parseFloat(b.userName.rating)).reverse();
    this.sortedUsers.emit(this.usersSorted);
  }

  sortByPriceHighToLow(orders): void {
    this.ordersSorted = orders.sort((a, b) => parseFloat(a.exchange_rate) - parseFloat(b.exchange_rate)).reverse();
  }

}
