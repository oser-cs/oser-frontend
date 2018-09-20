import { Component, Input } from '@angular/core';
import { Visit } from '../shared';

@Component({
  selector: 'app-registration-badge',
  templateUrl: './registration-badge.component.html',
  styleUrls: ['./registration-badge.component.scss']
})
export class RegistrationBadgeComponent {

  @Input() title: string;
  @Input() open: boolean;
  @Input() passed: boolean;
  @Input() deadline: Date;

}
