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
    { href: '#', text: 'Qui sommes-nous ?' },
    { href: '#', text: 'Soutenez-nous' },
    { href: '#', text: 'Nos actions' },
    { href: '#', text: 'Actualités' },
    { href: '#', text: 'Contact' }
  ];

  constructor() {
    this.visible = false;
  }

  ngOnInit() {
  }

  toggle(): void {
    this.visible = !this.visible;
  }

}
