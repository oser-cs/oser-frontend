import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ModelApiService, ObjectListResolver, ObjectResolver } from 'app/core';
import { Edition, EditionAdapter, EditionSimpleAdapter } from './edition.model';
import { Form, FormAdapter } from 'app/dynamic-forms';


@Injectable({
  providedIn: 'root'
})
export class EditionService extends ModelApiService<Edition> {

  baseUrl = this.apiUrl + 'editions/';

  constructor(public http: HttpClient) { super(); }

  getAdapter(action: string) {
    if (action === 'retrieve') {
      return new EditionAdapter();
    } else {
      return new EditionSimpleAdapter();
    }
  }

  openRegistrationsOnly(): Observable<Edition[]> {
    const url = this.baseUrl + 'open_registrations/';
    const adapter = new EditionSimpleAdapter();
    return this.http.get(url).pipe(
      map((data: any[]) => data.map(item => adapter.adapt(item))),
    );
  }

  form(id: number): Observable<Form> {
    const url = this.baseUrl + `${id}/form/`;
    const adapter = new FormAdapter();
    return this.http.get(url).pipe(
      map((data: any) => adapter.adapt(data)),
    );
  }
}


@Injectable({
  providedIn: 'root'
})
export class EditionListResolver extends ObjectListResolver<Edition> {
  constructor(public service: EditionService) { super(); }
}

@Injectable({
  providedIn: 'root'
})
export class EditionOpenRegistrationListResolver extends ObjectListResolver<Edition> {
  constructor(public service: EditionService) { super(); }

  resolve() {
    return this.service.openRegistrationsOnly();
  }
}


@Injectable({
  providedIn: 'root'
})
export class EditionResolver extends ObjectResolver<Edition> {
  routeLookupKey = 'editionId';
  constructor(public service: EditionService) { super(); }
}
