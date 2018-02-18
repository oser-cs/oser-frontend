import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';
import { NEWS } from './news.mock';
import { News } from './news.model';


@Injectable()
export class NewsService {

  constructor() { }

  getNews(): Observable<News[]> {
    return of(NEWS);
  }

  getFirst(n: number): Observable<News[]> {
    return of(NEWS.slice(0, n));
  }

}
