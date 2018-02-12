import { Component, OnInit } from '@angular/core';

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

  visible: boolean;
  links: Link[] = [
    { href: 'about', text: 'Qui sommes-nous ?' },
    { href: 'donate', text: 'Soutenez-nous' },
    { href: 'actions', text: 'Nos actions' },
    { href: 'news', text: 'Actualités' },
    { href: 'contact', text: 'Contact' }
  ];
  // TODO change to real login route once implemented
  loginRoute = '.';

  constructor() {
    this.visible = false;
  }

  ngOnInit() {
  }

  toggle(): void {
    this.visible = !this.visible;
  }

}
