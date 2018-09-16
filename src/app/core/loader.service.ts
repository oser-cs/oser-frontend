import { Injectable } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, debounceTime, tap, filter } from 'rxjs/operators';


@Injectable()
export class LoaderService {

  constructor(private router: Router) {}

  public loading(): Observable<boolean> {
    return this.router.events.pipe(
      filter(e => e instanceof NavigationStart || e instanceof NavigationEnd || e instanceof NavigationCancel),
      debounceTime(100),  // don't mark fast navigation changes as navigating
      map((e) => e instanceof NavigationStart),
    );
  }

}
