import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-participation-badge',
  templateUrl: './participation-badge.component.html',
  styleUrls: ['./participation-badge.component.scss']
})
export class ParticipationBadgeComponent {

  @Input() accepted: boolean;
  @Input() passed: boolean;

}
