import { Component, Input } from '@angular/core';
import { Visit } from '../shared';

@Component({
  selector: 'app-useful-information',
  templateUrl: './useful-information.component.html',
  styleUrls: ['./useful-information.component.scss']
})
export class UsefulInformationComponent {

  @Input() visit: Visit;

}
