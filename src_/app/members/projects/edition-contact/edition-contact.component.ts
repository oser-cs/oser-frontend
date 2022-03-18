import { Component, Input } from '@angular/core';
import { Edition } from '../core';

@Component({
  selector: 'app-edition-contact',
  templateUrl: './edition-contact.component.html',
  styleUrls: ['./edition-contact.component.scss']
})
export class EditionContactComponent {

  @Input() edition: Edition;

}
