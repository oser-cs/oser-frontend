import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';
import { Visit } from './visit.model';
import { VISITS } from './visit.mock';


@Injectable()
export class VisitService {

  constructor() { }

  list(): Observable<Visit[]> {
    return of(VISITS);
  }

}
