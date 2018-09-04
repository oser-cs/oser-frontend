import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Visit, Participant } from '../shared';

@Component({
  selector: 'visit-card',
  templateUrl: './visit-card.component.html',
  styleUrls: ['./visit-card.component.scss']
})
export class VisitCardComponent implements OnInit {

  visit: Visit;
  @Input('visit') set _visit(visit: Visit) {
    this.visit = visit;
    this.acceptedParticipants = this.visit.participants.filter(
      p => p.accepted
    ).length;
  }
  @Input() participant$: Observable<Participant>;
  @Input() participant: Participant;
  acceptedParticipants = 0;

  constructor() { }

  ngOnInit() {
    this.participant$.subscribe(
      (participant: Participant) => {
        this.participant = participant;
      }
    );
  }

}
