import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Article } from './article.model';
import { environment } from 'environments/environment';
import { ObjectListResolver, ObjectResolver } from 'app/core';


@Injectable()
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
      tap(resp => console.log('fetched articles'))
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
      tap(resp => console.log('fetched article'))
    );
  }
}


@Injectable()
export class ArticlesResolver extends ObjectListResolver<Article> {
  constructor(service: ArticleService) { super(service); }
}


@Injectable()
export class ArticleResolver extends ObjectResolver<Article> {
  lookupKey = 'slug';
  constructor(service: ArticleService) { super(service); }
}
