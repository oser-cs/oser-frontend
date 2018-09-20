import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-participant-number-badge',
  templateUrl: './participant-number-badge.component.html',
  styleUrls: ['./participant-number-badge.component.scss']
})
export class ParticipantNumberBadgeComponent {

  @Input() number: number;

}
