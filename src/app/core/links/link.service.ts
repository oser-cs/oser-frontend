import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { tap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';

@Injectable()
export class LinkService {
  // Use to retrieve links stored in database.

  baseUrl = environment.apiUrl + 'links/';

  constructor(private http: HttpClient) { }

  get(slug: string): Observable<string> {
    let url = this.baseUrl + `${slug}/`;
    return this.http.get(url).pipe(
      map((resp: any) => resp.url),
      tap(resp => console.log(`fetched link for ${slug}`))
    );
  }

}
