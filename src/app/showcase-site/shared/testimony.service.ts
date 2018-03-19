import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Testimony } from './testimony.model';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { environment } from '@environments/environment';


@Injectable()
export class TestimonyService {

  private baseUrl = environment.apiUrl + 'testimonies/';

  constructor(private http: HttpClient) { }

  // Adapt JSON returned by API to return testimonies
  adapt(item: any): Testimony {
    return new Testimony({
      content: item.content,
      source: item.author,
    });
  }

  list(): Observable<Testimony[]> {
    return this.http.get<Testimony>(this.baseUrl)
    .pipe(
      map((testimonies: any) => testimonies.map(this.adapt)),
      tap(resp => console.log('fetched testimonies'))
    );
  }

}
