import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Article } from './article.model';
import { environment } from 'environments/environment';
import { ObjectListResolver, ObjectResolver } from 'app/core';


@Injectable({
  providedIn: 'root',
})
export class ArticleService {

  private baseUrl = environment.showcaseApiUrl + 'articles/';

  constructor(private http: HttpClient) { }

  adapt(item: any): Article {
    return new Article({
      id: item.id,
      slug: item.slug,
      title: item.title,
      introduction: item.introduction,
      content: item.content,
      published: new Date(item.published),
      modified: item.modified ? new Date(item.modified) : null,
      image: item.image,
      displayImage: item.display_image,
      pinned: item.pinned,
      categories: item.categories,
    });
  }

  list(): Observable<Article[]> {
    return this.http.get<Article>(this.baseUrl).pipe(
      map((articles: any) => articles.map(this.adapt)),
    );
  }

  first(n: number): Observable<Article[]> {
    return this.list().pipe(
      map((articles: any) => articles.slice(0, n))
    );
  }

  retrieve(slug: string): Observable<Article> {
    let url = this.baseUrl + `${slug}/`;
    return this.http.get<Article>(url).pipe(
      map((article: any) => this.adapt(article)),
    );
  }
}


@Injectable({
  providedIn: 'root',
})
export class ArticlesResolver extends ObjectListResolver<Article> {
  constructor(public service: ArticleService) { super(); }
}


@Injectable({
  providedIn: 'root',
})
export class ArticleResolver extends ObjectResolver<Article> {
  routeLookupKey = 'slug';
  constructor(public service: ArticleService) { super(); }
}
