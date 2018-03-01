import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { Testimony } from './testimony.model';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import schema from './schema';


@Injectable()
export class TestimonyService {

  private actions = schema.testimony;

  constructor(private http: HttpClient) { }

  // Adapt JSON returned by API to return testimonies
  adapt(item: any): Testimony {
    return new Testimony({
      content: item.content,
      source: item.author,
    });
  }

  list(): Observable<Testimony[]> {
    return this.http.get<Testimony>(this.actions.list)
    .pipe(
      map((testimonies: any) => testimonies.map(this.adapt)),
      tap(resp => {
        console.log('fetched testimonies');
        console.log(resp);
      })
    );
  }

}
