import {Component, Input, OnChanges, OnInit} from '@angular/core';
import { SliderType } from 'igniteui-angular';

@Component({
  selector: 'app-filter-bar',
  styleUrls: ['./filter-bar.component.css'],
  templateUrl: './filter-bar.component.html'
})
export class FilterBarComponent implements OnInit, OnChanges {

  @Input() orders;

  public arr = [];
  public sliderType = SliderType;
  public priceRange: PriceRange = new PriceRange(this.arr[0] ? this.arr[0] : 2, this.arr[this.arr.length - 1] ? this.arr[this.arr.length - 1] : 1000);
  constructor() {
  }

  public updatePriceRange(event) {
    const prevPriceRange = this.priceRange;
    switch (event.id) {
      case "lowerInput": {
        if (!isNaN(parseInt(event.value, 10))) {
          this.priceRange = new PriceRange(event.value, prevPriceRange.upper);
          console.log(this.priceRange)
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
  //   this.orders.forEach(el => this.arr.push(...el.range))
  //   console.log(this.arr, 'ledlelel')
  }

  ngOnChanges() {
      this.orders.forEach(el => this.arr.push(...el.range))
      this.arr.sort((a: number,b: number) => {
        return a-b;
      });
    console.log(this.arr)
    }


}

  class
  PriceRange {
  constructor(public lower: number,
              public upper: number) {

  }
}



