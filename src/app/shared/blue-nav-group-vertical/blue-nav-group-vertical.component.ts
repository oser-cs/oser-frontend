import { Component, Input } from '@angular/core';
import { Link } from '../nav.model';

@Component({
  selector: 'app-blue-nav-group-vertical',
  templateUrl: './blue-nav-group-vertical.component.html',
  styleUrls: ['./blue-nav-group-vertical.component.scss']
})
export class BlueNavGroupVerticalComponent {

    @Input() links: Link[];

}
