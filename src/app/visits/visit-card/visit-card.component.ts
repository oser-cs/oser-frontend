import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Visit } from '../shared';

@Component({
  selector: 'visit-card',
  templateUrl: './visit-card.component.html',
  styleUrls: ['./visit-card.component.scss']
})
export class VisitCardComponent implements OnInit {

  @Input() visit: Visit;
  @Input() userParticipates$: Observable<boolean>;
  @Input() userParticipates: boolean = false;

  constructor() { }

  ngOnInit() {
    this.userParticipates$.subscribe(
      (participates: boolean) => this.userParticipates = participates
    );
  }

}
