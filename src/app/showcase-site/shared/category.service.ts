import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { environment } from '@environments/environment';


@Injectable()
export class CategoryService {

  baseUrl = environment.apiUrl + 'categories/';

  constructor(private http: HttpClient) { }

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
