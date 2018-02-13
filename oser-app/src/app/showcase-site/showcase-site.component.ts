import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import jump from 'jump.js';

@Component({
  selector: 'app-showcase-site',
  templateUrl: './showcase-site.component.html',
  styleUrls: ['./showcase-site.component.scss']
})
export class ShowcaseSiteComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
        return;
      }
      jump('#top', {duration: 500});
    });
  }

}
