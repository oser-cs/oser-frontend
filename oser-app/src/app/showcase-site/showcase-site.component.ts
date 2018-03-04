import { Component, OnInit, Renderer } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Link } from '@app/ui';

@Component({
  selector: 'app-showcase-site',
  templateUrl: './showcase-site.component.html',
  styleUrls: ['./showcase-site.component.scss']
})
export class ShowcaseSiteComponent implements OnInit {

  constructor(private renderer: Renderer) { }

  navLinks: Link[] = [
    { href: 'about', text: 'Qui sommes-nous ?' },
    { href: 'actions', text: 'Nos actions' },
    { href: 'donate', text: 'Soutenez-nous' },
    { href: 'articles', text: 'Actualités' },
    { href: 'contact', text: 'Contact' }
  ];

  ngOnInit() { }

  onDeactivate() {
    // on page reload, scroll to top of window
    this.renderer.setElementProperty(document.body, "scrollTop", 0);
  }

}
