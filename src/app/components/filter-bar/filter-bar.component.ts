import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import { SliderType } from 'igniteui-angular';

@Component({
  selector: 'app-filter-bar',
  styleUrls: ['./filter-bar.component.css'],
  templateUrl: './filter-bar.component.html'
})

export class FilterBarComponent implements OnInit, OnChanges {

  @Input() orders;
  @Output() passPriceRange = new EventEmitter<any>();
  public arr = [];
  public filteredData = [];
  public defaulOrders;
  public counter = 1;
  public sliderType = SliderType;
  public priceRange: PriceRange = new PriceRange(this.arr[0] ? this.arr[0] : 1, this.arr[this.arr.length - 1] ? this.arr[this.arr.length - 1] : 40000);
  constructor() {
  }

  public updatePriceRange(event) {
    const prevPriceRange = this.priceRange;
    switch (event.id) {
      case "lowerInput": {
        if (!isNaN(parseInt(event.value, 10))) {
          this.priceRange = new PriceRange(event.value, prevPriceRange.upper);
        }
        break;
      }
      case "upperInput": {
        if (!isNaN(parseInt(event.value, 10))) {
          this.priceRange = new PriceRange(prevPriceRange.lower, event.value);
        }
        break;
      }
    }
  }

  public ngOnInit() {
  }

  ngOnChanges() {
      if(this.counter === 2){
        this.defaulOrders = this.orders;
       }
      this.orders.forEach(el => this.arr.push(...el.range))
      this.arr.sort((a: number,b: number) => {
        return a-b;
      });


  this.counter++;
    }

  filter(){
    this.filteredData = this.defaulOrders;
    this.filteredData = this.filteredData.filter(el => el.range[0] >= this.priceRange.lower && el.range[1] <= this.priceRange.upper);
    this.passPriceRange.emit(this.filteredData);
    return this.filteredData;
  }

}

  class
  PriceRange {
  constructor(public lower: number,
              public upper: number) {

  }
}



