import { Component, OnInit, Renderer } from '@angular/core';
import { Link } from '@app/ui';

@Component({
  selector: 'app-showcase-site',
  templateUrl: './showcase-site.component.html',
  styleUrls: ['./showcase-site.component.scss']
})
export class ShowcaseSiteComponent implements OnInit {

  constructor(private renderer: Renderer) { }

  navLinks: Link[] = [
    { href: '/qui-sommes-nous', text: 'Qui sommes-nous ?' },
    { href: '/actions', text: 'Nos actions' },
    { href: '/nous-soutenir', text: 'Soutenez-nous' },
    { href: '/actualites', text: 'Actualités' },
    { href: '/contact', text: 'Contact' }
  ];

  ngOnInit() { }

  onDeactivate() {
    // on page reload, scroll to top of window
    this.renderer.setElementProperty(document.body, "scrollTop", 0);
  }

}
