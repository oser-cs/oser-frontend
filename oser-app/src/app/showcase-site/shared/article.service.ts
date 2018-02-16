import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';
import { map, tap, take } from 'rxjs/operators';
import { ARTICLES } from './article.mock';
import { Article } from './article.model';
import * as config from './article.config.json';


@Injectable()
export class ArticleService {

  private config = <any>config;

  constructor(private http: HttpClient) { }

  // Adapt JSON returned by API to match the Article interface
  adapt(item: any): Article {
    return new Article({
      title: item.title,
      content: item.content,
      date: item.published,
      src: item.image,
      pinned: item.pinned
    });
  }

  list(): Observable<Article[]> {
    return this.http.get<Article>(this.config.actions.list)
      .pipe(
        map((article: any) => article.map(this.adapt)),
        tap(resp => console.log('fetched article'))
      );
  }

  first(n: number): Observable<Article[]> {
    return this.http.get<Article>(this.config.actions.list)
      .pipe(
        // TODO fix, the take(n) operation has no effect
        take(n),
        map((article: any) => article.map(this.adapt)),
        tap(resp => console.log('fetched article'))
      );
  }


}
