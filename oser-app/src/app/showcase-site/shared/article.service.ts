import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';
import { map, tap } from 'rxjs/operators';
import { Article } from './article.model';
import schema from './schema';


@Injectable()
export class ArticleService {

  private actions = schema.article;

  constructor(private http: HttpClient) { }

  // Adapt JSON returned by API to match the Article interface
  adapt(item: any): Article {
    return new Article({
      id: item.id,
      title: item.title,
      content: item.content,
      date: new Date(item.published),
      src: item.image,
      pinned: item.pinned,
      categories: item.categories,
    });
  }

  list(): Observable<Article[]> {
    return this.http.get<Article>(this.actions.list)
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

  retrieve(id: number | string): Observable<Article> {
    let url = this.actions.retrieve.replace(':id', id);
    return this.http.get<Article>(url)
    .pipe(
      map((article: any) => this.adapt(article)),
      tap(resp => {
        console.log('fetched article');
        console.log(resp);
      })
    );
  }
}
