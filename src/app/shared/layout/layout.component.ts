import { Component, Input, Renderer } from '@angular/core';
import { Link } from '../nav.model';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  @Input() links: Link[];
  @Input() theme: string;

  constructor(private renderer: Renderer) {
    this.links = [];
  }

  onDeactivate() {
    // on page reload, scroll to top of window
    this.renderer.setElementProperty(document.body, 'scrollTop', 0);
  }

}
