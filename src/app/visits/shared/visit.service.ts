import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Visit, Place } from './models';
import { VisitAdapter, SimpleVisitAdapter } from './adapters';
import { environment } from 'environments/environment';


@Injectable()
export class VisitService {

  baseUrl = environment.apiUrl + 'visits/';

  private adapter = new VisitAdapter();
  private simpleAdapter = new SimpleVisitAdapter();

  constructor(
    private http: HttpClient) { }

  list(): Observable<Visit[]> {
    return this.http.get<Visit>(this.baseUrl).pipe(
      map((visits: any) => visits.map(v => this.simpleAdapter.adapt(v))),
      tap(resp => console.log('fetched visits')),
    );
  }

  retrieve(id: number | string): Observable<Visit> {
    let url = this.baseUrl + `${id}/`;
    return this.http.get<Visit>(url).pipe(
      map(v => this.adapter.adapt(v)),
      tap(resp => console.log('fetched visit')),
    );
  }

}
