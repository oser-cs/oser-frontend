import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

interface Listable<T> {
  list: () => Observable<T[]>;
}

interface Retrievable<T> {
  retrieve: (id: any) => Observable<T>;
}


@Injectable()
export abstract class ObjectListResolver<T> implements Resolve<T[]> {

  private service: Listable<T>;

  constructor(service: Listable<T>) {
    this.service = service;
  }

  resolve(): Observable<T[]> {
    return this.service.list().pipe(
      catchError(e => Observable.of(null))
    );
  }
}

export abstract class ObjectResolver<T> implements Resolve<T> {

  private service: Retrievable<T>;
  abstract lookupKey: string;

  constructor(service: Retrievable<T>) {
    this.service = service;
  }

  resolve(route: ActivatedRouteSnapshot): Observable<T> {
    const id: any = route.paramMap.get(this.lookupKey);
    return this.service.retrieve(id).pipe(
      catchError(e => Observable.of(null))
    );
  }
}
