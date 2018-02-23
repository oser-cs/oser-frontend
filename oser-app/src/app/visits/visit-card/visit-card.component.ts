import { Component, OnInit, Input } from '@angular/core';
import { Visit } from '@app/visits/shared';

@Component({
  selector: 'visit-card',
  templateUrl: './visit-card.component.html',
  styleUrls: ['./visit-card.component.scss']
})
export class VisitCardComponent implements OnInit {

  @Input() visit: Visit;

  constructor() { }

  ngOnInit() {
  }

}
