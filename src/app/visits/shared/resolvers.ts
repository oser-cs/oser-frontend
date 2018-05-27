import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Visit } from './models';
import { VisitService } from './visit.service';

@Injectable()
export class VisitsResolver implements Resolve<Visit[]> {

  constructor(private visitService: VisitService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Visit[]> {
    return this.visitService.list();
  }
}

@Injectable()
export class VisitResolver implements Resolve<Visit> {

  constructor(private visitService: VisitService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Visit> {
    const id = route.paramMap.get('id');
    return this.visitService.retrieve(id);
  }
}
