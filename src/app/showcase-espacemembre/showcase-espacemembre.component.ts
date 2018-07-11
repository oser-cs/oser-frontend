import { Component, OnInit, Renderer } from '@angular/core';
//import { Link } from 'app/shared';

@Component({
  selector: 'app-showcase-espacemembre',
  templateUrl: './showcase-espacemembre.component.html',
  styleUrls: ['./showcase-espacemembre.component.scss']
})
export class ShowcaseEspacemembreComponent implements OnInit {

  constructor(private renderer: Renderer) { }

//  navLinks: Link[] = [
//    { href: '/qui-sommes-nous', text: 'Qui sommes-nous ?' },
//  ];

  ngOnInit() { }

  onDeactivate() {
    // on page reload, scroll to top of window
    this.renderer.setElementProperty(document.body, "scrollTop", 0);
  }

}
