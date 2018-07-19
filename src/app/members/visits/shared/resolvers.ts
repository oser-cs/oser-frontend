import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Visit } from './models';
import { ErrorService } from 'app/core';
import { VisitService } from './visit.service';


@Injectable({
  providedIn: 'root',
})
export class VisitsResolver implements Resolve<Visit[]> {

  constructor(
    private visitService: VisitService,
    private errorService: ErrorService) { }

  resolve(): Observable<Visit[]> {
    return this.visitService.list().pipe(
      catchError(e => of(null))
    );
  }
}

@Injectable({
  providedIn: 'root',
})
export class VisitResolver implements Resolve<Visit> {

  constructor(
    private visitService: VisitService,
    private errorService: ErrorService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Visit> {
    return this.visitService.retrieve(route.paramMap.get('id')).pipe(
      catchError(e => of(null))
    );
  }
}
