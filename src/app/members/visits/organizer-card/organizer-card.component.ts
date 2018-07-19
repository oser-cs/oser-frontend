import { Component, Input } from '@angular/core';
import { User } from 'app/core';

@Component({
  selector: 'app-organizer-card',
  templateUrl: './organizer-card.component.html',
  styleUrls: ['./organizer-card.component.scss']
})
export class OrganizerCardComponent {

  @Input() organizer: User;

}
