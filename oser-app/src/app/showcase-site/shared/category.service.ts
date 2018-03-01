import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import schema from './schema';


@Injectable()
export class CategoryService {

  private actions = schema.category;

  constructor(private http: HttpClient) { }

  // Adapt JSON returned by API to return title of category
  adapt(item: any): any { return item.title; }

  list(): Observable<string[]> {
    return this.http.get<any>(this.actions.list)
      .pipe(
      map((categories: any) => categories.map(this.adapt)),
      tap(resp => {
        console.log('fetched categories');
        console.log(resp);
      })
      );
  }
}
