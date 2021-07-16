import { Component, OnInit } from '@angular/core';
import { destinations } from '../destinations';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {
  products = destinations;
  constructor() { console.log(this.products)}

  ngOnInit(): void {
  }

}
