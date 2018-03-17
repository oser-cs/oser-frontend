import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) { }

  public setTitle(title: string) {
    this.titleService.setTitle(title);
  }

  ngOnInit() {
    // Each time we navigate to a new route, update the page
    // title based on the route's data.title value.
    // Source: https://toddmotto.com/dynamic-page-titles-angular-2-router-events
    this.router.events
      // React to NavigationEnd events only
      .filter(event => event instanceof NavigationEnd)
      // Get the activated route object instead of the actual event
      .map(() => this.activatedRoute)
      // Traverse the child route path to get the last activated route
      .map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      // Retrieve the route's data object
      .filter(route => route.outlet == 'primary')
      .mergeMap(route => route.data)
      .subscribe(
        data => this.titleService.setTitle('OSER' + (data['title'] ? ' | ' + data['title'] : ''))
      );
  }
}
