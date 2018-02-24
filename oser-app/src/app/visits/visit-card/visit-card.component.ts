import { Component, OnInit, Input } from '@angular/core';
import { Visit } from '@app/visits/shared';
import { Observable } from 'rxjs/Observable';

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
    if (this.userParticipates$) {
      this.userParticipates$.subscribe(v => {
        this.userParticipates = v;
      });
    }
  }

}
