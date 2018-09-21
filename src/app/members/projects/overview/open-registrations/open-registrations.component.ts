import { Component, Input } from '@angular/core';
import { Edition } from '../../core';


@Component({
  selector: 'app-open-registrations',
  templateUrl: './open-registrations.component.html',
  styleUrls: ['./open-registrations.component.scss']
})
export class OpenRegistrationsComponent {

  @Input() editions: Edition[];
  today = new Date();

}
