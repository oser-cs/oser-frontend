import { Component, Input } from '@angular/core';
import { Link } from '../nav.model';

@Component({
  selector: 'app-nav-group-vertical',
  templateUrl: './nav-group-vertical.component.html',
  styleUrls: ['./nav-group-vertical.component.scss']
})
export class NavGroupVerticalComponent {

    @Input() links: Link[];

}
