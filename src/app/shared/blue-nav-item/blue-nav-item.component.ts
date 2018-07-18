import { Component, OnInit, Input } from '@angular/core';
import { Link } from '../nav.model';

@Component({
  selector: 'app-blue-nav-item',
  templateUrl: './blue-nav-item.component.html',
  styleUrls: ['./blue-nav-item.component.scss']
})
export class BlueNavItemComponent {

  @Input() link: Link;

}
