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
  // todo add real hrefs (router links) once implemented
  links: Link[] = [
    { href: '.', text: 'Qui sommes-nous ?' },
    { href: 'donate', text: 'Soutenez-nous' },
    { href: '.', text: 'Nos actions' },
    { href: '.', text: 'Actualités' },
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
