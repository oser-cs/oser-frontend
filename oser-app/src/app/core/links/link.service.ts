import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { tap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Config } from '@app/config';

@Injectable()
export class LinkService {
  // Use to retrieve links stored in database.

  baseUrl: string;

  constructor(private _config: Config, private http: HttpClient) {
    this.baseUrl = _config.get('apiUrl') + 'links/';
  }

  get(slug: string): Observable<string> {
    let url = this.baseUrl + `${slug}/`;
    return this.http.get(url).pipe(
      map((resp: any) => resp.url),
      tap(resp => console.log(`fetched link for ${slug}`))
    );
  }

}
