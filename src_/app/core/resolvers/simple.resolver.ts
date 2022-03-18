import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Resolve } from '@angular/router';

@Injectable()
export abstract class SimpleListResolver<T> implements Resolve<T[]> {

  abstract name: string;
  abstract url: string;

  constructor(private http: HttpClient) { }

  abstract adapt(item: any): T;

  resolve(): Observable<T[]> {
    return this.http.get<T[]>(this.url).pipe(
      map((items: any[]) => items.map(this.adapt)),
      catchError(e => of(null)),
    );
  }
}
