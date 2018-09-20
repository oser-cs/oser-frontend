import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

interface Listable<T> {
  list: () => Observable<T[]>;
}

interface Retrievable<T> {
  retrieve: (id: any) => Observable<T>;
}

export abstract class ObjectListResolver<T> implements Resolve<T[]> {

  public service: Listable<T>;

  resolve(): Observable<T[]> {
    return this.service.list().pipe(
      catchError(e => of(null))
    );
  }
}

export abstract class ObjectResolver<T> implements Resolve<T> {

  public service: Retrievable<T>;
  abstract routeLookupKey: string;

  resolve(route: ActivatedRouteSnapshot): Observable<T> {
    const id: any = route.paramMap.get(this.routeLookupKey);
    return this.service.retrieve(id).pipe(
      catchError(e => of(null))
    );
  }
}
