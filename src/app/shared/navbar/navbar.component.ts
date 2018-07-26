import { Component, Input } from '@angular/core';
import { AuthService } from 'app/core';
import { Link } from '../nav.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  visible = false;
  @Input() links: Link[] = [];
  @Input() theme: string;

  constructor() { }

  toggle(): void {
    this.visible = !this.visible;
  }

}
