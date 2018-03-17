import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Config } from '@app/config';


@Injectable()
export class CategoryService {

  baseUrl: string;

  constructor(private _config: Config, private http: HttpClient) {
    this.baseUrl = _config.get('apiUrl') + 'categories/';
  }

  // Adapt JSON returned by API to return title of category
  adapt(item: any): any { return item.title; }

  list(): Observable<string[]> {
    return this.http.get<any>(this.baseUrl)
      .pipe(
      map((categories: any) => categories.map(this.adapt)),
      tap(resp => console.log('fetched categories'))
      );
  }
}
