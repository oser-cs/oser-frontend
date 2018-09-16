import { Component, Input } from '@angular/core';
import { AuthService } from 'app/core';
import { Link } from '../nav.model';

@Component({
  selector: 'blue_navbar.component',
  templateUrl: './blue_navbar.component.html',
  styleUrls: ['./blue_navbar.component.scss']
})
export class BlueNavbarComponent {

  visible = false;
  @Input() links: Link[] = [];

  constructor() { }

  toggle(): void {
    this.visible = !this.visible;
  }

}
