import { IAdapter } from './interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'environments/environment';


export class ShowcaseApiService {
  apiUrl = environment.showcaseApiUrl;
}


export class ApiService {
  apiUrl = environment.apiUrl;
}


export abstract class ModelApiService<T> extends ApiService {

  abstract baseUrl: string;
  public http: HttpClient;

  list(): Observable<T[]> {
    const adapter = this.getAdapter('list');
    return this.http.get(this.baseUrl).pipe(
      map((data: any[]) => data.map(item => adapter.adapt(item))),
    )
  }

  retrieve(id: any): Observable<T> {
    const adapter = this.getAdapter('retrieve');
    const url = this.baseUrl + `${id}/`;
    return this.http.get(url).pipe(
      map((data: any) => adapter.adapt(data)),
    )
  }

  abstract getAdapter(action: string): IAdapter<T>;
}
