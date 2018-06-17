import { Component, OnInit } from '@angular/core';
import { Link } from 'app/shared';

@Component({
  selector: 'projects-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  links: Link[] = [
    {
      href: './',
      text: 'Aperçu',
    },
    {
      href: './inscription',
      text: "M'inscrire à un projet",
    },
    {
      href: './mes-inscriptions',
      text: 'Mes inscriptions',
    }
  ]

  ngOnInit() {
  }

}
