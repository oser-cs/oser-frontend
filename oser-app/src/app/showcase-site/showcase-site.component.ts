import { Component, OnInit, Renderer } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-showcase-site',
  templateUrl: './showcase-site.component.html',
  styleUrls: ['./showcase-site.component.scss']
})
export class ShowcaseSiteComponent implements OnInit {

  constructor(private renderer: Renderer) { }

  ngOnInit() { }

  onDeactivate() {
    // on page reload, scroll to top of window
    this.renderer.setElementProperty(document.body, "scrollTop", 0);
  }

}
