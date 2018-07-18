import { Component, Input } from '@angular/core';
import { Link } from '../nav.model';

@Component({
  selector: 'app-blue-nav-group',
  templateUrl: './blue-nav-group.component.html',
  styleUrls: ['./blue-nav-group.component.scss']
})
export class BlueNavGroupComponent {

  @Input() links: Link[];

}
