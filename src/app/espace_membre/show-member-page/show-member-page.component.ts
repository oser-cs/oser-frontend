import { Component, OnInit, Renderer } from '@angular/core';
import { Link } from '../shared';

@Component({
  selector: 'show-member-page',
  templateUrl: './show-member-page.component.html',
  styleUrls: ['./show-member-page.component.scss']
})
export class ShowMemberPageComponent implements OnInit {

  constructor(private renderer: Renderer) { }

  navLinks: Link[] = [
    { href: '/nos-projets', text: 'Projets' },
    { href: '/nos-visites', text: 'Visites' },
    { href: '/nos-seances', text: 'Séances' },
    { href: '/espace-membre', text: 'Espace Membre' },
  ];

  ngOnInit() { }

  onDeactivate() {
    // on page reload, scroll to top of window
    this.renderer.setElementProperty(document.body, "scrollTop", 0);
  }

}
