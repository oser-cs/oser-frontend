import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, tap } from 'rxjs/operators';
import { Article } from './article.model';
import { environment } from '@environments/environment';


@Injectable()
export class ArticleService {

  private baseUrl = environment.apiUrl + 'articles/';

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
    return this.http.get<Article>(this.baseUrl)
      .pipe(
        map((articles: any) => articles.map(this.adapt)),
        tap(resp => console.log('fetched articles'))
      );
  }

  first(n: number): Observable<Article[]> {
    return this.list().pipe(
      map((articles: any) => articles.slice(0, n))
    );
  }

  retrieve(id: number | string): Observable<Article> {
    let url = this.baseUrl + `${id}/`;
    return this.http.get<Article>(url)
    .pipe(
      map((article: any) => this.adapt(article)),
      tap(resp => console.log('fetched article'))
    );
  }
}
