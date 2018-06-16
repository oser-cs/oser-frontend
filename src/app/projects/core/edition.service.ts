import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModelApiService, ObjectListResolver, ObjectResolver } from 'app/core';
import { Edition, EditionAdapter, EditionSimpleAdapter } from './edition.model';


@Injectable({
  providedIn: 'root'
})
export class EditionService extends ModelApiService<Edition> {

  baseUrl = this.apiUrl + 'editions/';

  constructor(public http: HttpClient) { super(); }

  getAdapter(action: string) {
    if (action === 'list') {
      return new EditionSimpleAdapter();
    } else {
      return new EditionAdapter();
    }
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
export class EditionResolver extends ObjectResolver<Edition> {
  routeLookupKey = 'editionId';
  constructor(public service: EditionService) { super(); }
}
