import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationStart, NavigationEnd } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { filter, map, mergeMap, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  active: boolean;
  sub = new Subscription();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.sub.add(
      this.title$().subscribe(
        title => this.titleService.setTitle(title)
      )
    );
    this.sub.add(
      this.active$().subscribe(
        active => this.active = active
      )
    );
  }

  private active$(): Observable<boolean> {
    return this.router.events.pipe(
      filter(event => event instanceof NavigationStart || event instanceof NavigationEnd),
      map(event => event instanceof NavigationEnd),
    );
  }

  private title$(): Observable<string> {
    return this.router.events.pipe(
      // When a navigation finishes
      filter(event => event instanceof NavigationEnd),
      // Get the activated route object instead of the actual event
      map(() => this.activatedRoute),
      // Traverse the child route path to get the last activated route
      map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      // Retrieve the route's data object
      filter(route => route.outlet == 'primary'),
      mergeMap(route => route.data),
      // Retrieve the route title
      map(data => data['title']),
      map(title => 'OSER' + (title ? ' | ' + title : ''))
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
