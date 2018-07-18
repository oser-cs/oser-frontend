import { Component, Input } from '@angular/core';
import { AuthService } from 'app/core';
import { Link } from '../nav.model';

@Component({
  selector: 'app-blue-navbar',
  templateUrl: './blue-navbar.component.html',
  styleUrls: ['./blue-navbar.component.scss']
})
export class BlueNavbarComponent {

  visible = false;
  @Input() links: Link[] = [];

  constructor() { }

  toggle(): void {
    this.visible = !this.visible;
  }

}
