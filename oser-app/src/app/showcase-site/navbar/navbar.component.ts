import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../auth/authentication.service';

class Link {
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
  links: Link[] = [
    { href: 'about', text: 'Qui sommes-nous ?' },
    { href: 'donate', text: 'Soutenez-nous' },
    { href: 'actions', text: 'Nos actions' },
    { href: 'articles', text: 'Actualités' },
    { href: 'contact', text: 'Contact' }
  ];
  // Use leading slash for absolute URL
  loginRoute = '/login';

  constructor(
    private auth: AuthenticationService,
    private router: Router,
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
