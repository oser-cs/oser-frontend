import { Component, Input } from '@angular/core';
import { Link } from '../nav.model';

@Component({
  selector: 'app-nav-group',
  templateUrl: './nav-group.component.html',
  styleUrls: ['./nav-group.component.scss']
})
export class NavGroupComponent {

  @Input() links: Link[];

}
