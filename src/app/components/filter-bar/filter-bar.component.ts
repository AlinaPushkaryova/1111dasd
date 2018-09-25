import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css']
})
export class FilterBarComponent implements OnInit {

  min1 = -10;
  max1 = 50;
  step = 5;
  stepRange = [0, 40];


  constructor() { }

  ngOnInit() {
  }

  rangeChanged(event) {
    console.log(event)

  }
}
