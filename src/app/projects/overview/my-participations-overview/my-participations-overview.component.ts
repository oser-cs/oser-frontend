import { Component, Input } from '@angular/core';
import { Participation } from '../../core';

@Component({
  selector: 'app-my-participations-overview',
  templateUrl: './my-participations-overview.component.html',
  styleUrls: ['./my-participations-overview.component.scss']
})
export class MyParticipationsOverviewComponent {

  @Input() participations: Participation[];

}
