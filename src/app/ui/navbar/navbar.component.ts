import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'app/core';

export class Link {
  href: string;
  text: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  currentUser: any;
  visible: boolean;
  @Input() links: Link[] = [];
  // Use leading slash for absolute URL
  loginRoute = '/login';

  constructor(
    private router: Router,
    private auth: AuthService,
  ) {
    this.visible = false;
  }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  toggle(): void {
    this.visible = !this.visible;
  }

  logout(): void {
    this.auth.logout();
    // refresh component
    this.ngOnInit();
  }

}
