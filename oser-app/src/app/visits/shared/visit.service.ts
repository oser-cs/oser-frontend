import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import schema from './schema';
import { Visit } from './visit.model';
import { AuthService } from '@app/core';


@Injectable()
export class VisitService {

  actions: any = schema.visit;

  constructor(private auth: AuthService, private http: HttpClient) { }

  // Adapt JSON returned by API to match the Visit interface
  adapt(item: any): Visit {
    return new Visit({
      id: item.id,
      title: item.title,
      description: item.summary,
      place: item.place,
      date: new Date(item.date),
      image: item.image,
    });
  }

  list(): Observable<Visit[]> {
    let headers = new HttpHeaders({
      Authorization: 'Token ' + this.auth.getToken(),
    });
    return this.http.get<Visit>(this.actions.list, {headers: headers})
      .pipe(
        map((visits: any) => visits.map(this.adapt)),
        tap(resp => {
          console.log('fetched visits');
          console.log(resp);
        })
      );
  }

}
