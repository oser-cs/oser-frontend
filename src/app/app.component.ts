import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { filter, map, mergeMap } from 'rxjs/operators';
import { LoaderService } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  loading = false;
  sub = new Subscription();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private loaderService: LoaderService,
  ) { }

  ngOnInit() {
    this.sub.add(
      this.title$().subscribe(title => this.titleService.setTitle(title))
    );
    this.sub.add(
      this.loaderService.loading().subscribe(loading => {
        this.loading = loading;
      })
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
