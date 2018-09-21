import { Component, OnInit, Input } from '@angular/core';
import { Link } from '../nav.model';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent {

  @Input() link: Link;
  @Input() theme: string;

}
