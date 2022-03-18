import { Component } from '@angular/core';
import { Link } from 'app/shared';

@Component({
  selector: 'app-showcase-site',
  templateUrl: './showcase-site.component.html',
  styleUrls: ['./showcase-site.component.scss']
})
export class ShowcaseSiteComponent {

  navLinks: Link[] = [
    { href: '/qui-sommes-nous', text: 'Qui sommes-nous ?' },
    { href: '/actions', text: 'Nos actions' },
    { href: '/nous-soutenir', text: 'Soutenez-nous' },
    { href: '/actualites', text: 'Actualités' },
    { href: '/contact', text: 'Contact' }
  ];

}
