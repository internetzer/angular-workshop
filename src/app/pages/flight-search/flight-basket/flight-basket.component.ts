import { Component, OnInit, Input, Output, } from '@angular/core';

@Component({
  selector: 'app-flight-basket',
  templateUrl: './flight-basket.component.html',
  styleUrls: ['./flight-basket.component.scss']
})
export class FlightBasketComponent implements OnInit {

  @Input() selectedFlightIds: { [key: string]: boolean } = {};

  constructor() { }

  ngOnInit() {
  }

}
