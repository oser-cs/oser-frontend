import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';
import { Figure } from './figure.model';
import { FIGURES } from './figure.mock';

@Injectable()
export class FigureService {

  constructor() { }

  getFigures(): Observable<Figure[]> {
    return of(FIGURES);
  }

}
