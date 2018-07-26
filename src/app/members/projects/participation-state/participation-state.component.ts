import { Component, Input } from '@angular/core';
import { ParticipationState } from '../core';

@Component({
  selector: 'app-participation-state',
  templateUrl: './participation-state.component.html',
  styleUrls: ['./participation-state.component.scss']
})
export class ParticipationStateComponent {

  PENDING = ParticipationState.PENDING;
  VALID = ParticipationState.VALID;
  ACCEPTED = ParticipationState.ACCEPTED;
  REJECTED = ParticipationState.REJECTED;
  CANCELLED = ParticipationState.CANCELLED;

  @Input() state: ParticipationState;

}
