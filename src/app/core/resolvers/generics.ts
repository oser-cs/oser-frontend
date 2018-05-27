import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

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

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<T[]> {
    return this.service.list();
  }
}

export abstract class ObjectResolver<T> implements Resolve<T> {

  private service: Retrievable<T>;
  abstract lookupKey: string;

  constructor(service: Retrievable<T>) {
    this.service = service;
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<T> {
    const id: any = route.paramMap.get(this.lookupKey);
    return this.service.retrieve(id);
  }
}
