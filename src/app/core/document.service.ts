import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { environment } from 'environments/environment';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';

interface Options {
  titleLevel: number;
}

@Injectable()
export class DocumentService {

  private baseUrl = environment.showcaseApiUrl + 'documents/';

  constructor(private http: HttpClient) { }

  adapt(data: any, options: Options): string {
    const title = data.title;
    const content = data.content;
    const titleMark = '#'.repeat(options.titleLevel || 1);
    return `${titleMark} ${title}\n\n${content}`;
  }

  get(slug: string, options?: Options): Observable<string> {
    let url = this.baseUrl + `${slug}/`;
    return this.http.get<string>(url).pipe(
      map((data: any) => this.adapt(data, options)),
      tap(resp => console.log('fetched document'))
    );
  }
}


@Injectable()
export abstract class DocumentResolver implements Resolve<string> {

  abstract slug: string;
  opts: any = {};

  constructor(private service: DocumentService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string> {
    return this.service.get(this.slug, this.opts).pipe(
      catchError(e => of(null))
    );
  }
}
