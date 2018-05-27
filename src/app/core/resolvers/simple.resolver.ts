import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { environment } from 'environments/environment';


@Injectable()
export abstract class SimpleListResolver<T> implements Resolve<T[]> {

  abstract name: string;
  abstract url: string;

  constructor(private http: HttpClient) { }

  abstract adapt(item: any): T;

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<T[]> {
    return this.http.get<T[]>(this.url).pipe(
      map((items: any[]) => items.map(this.adapt)),
      tap(resp => console.log('fetched ' + this.name)),
    );
  }
}
