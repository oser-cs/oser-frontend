import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';
import { Testimony } from './testimony.model';
import { TESTIMONIES } from './testimony.mock';


@Injectable()
export class TestimonyService {

  constructor() { }

  getFirst(n: number): Observable<Testimony[]> {
    return of(TESTIMONIES.slice(0, n));
  }

  getAll(): Observable<Testimony[]> {
    return of(TESTIMONIES);
  }

}
