import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';
import { map, tap } from 'rxjs/operators';
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
      date: new Date(item.published),
      src: item.image,
      pinned: item.pinned,
      categories: item.categories,
    });
  }

  list(): Observable<Article[]> {
    return this.http.get<Article>(this.config.actions.list)
      .pipe(
        map((articles: any) => articles.map(this.adapt)),
        tap(resp => {
          console.log('fetched articles');
          console.log(resp);
        })
      );
  }

  first(n: number): Observable<Article[]> {
    return this.list().pipe(
      map((articles: any) => articles.slice(0, n))
    );
  }


}
