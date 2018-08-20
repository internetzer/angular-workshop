import { Component, OnInit, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { Flight } from '../../../core/api/models/flight';
import { EventEmitter } from 'protractor';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.scss']
})
export class FlightCardComponent implements OnInit, OnChanges {

  @Input() flight: Flight;
  @Input() selected: boolean;
  @Output() selectedChange:Subject<string> = new Subject();

  constructor() { }

  toggleSelect() {
    this.selectedChange.next(this.flight.id);
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

}
