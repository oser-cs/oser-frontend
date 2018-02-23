import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import schema from './schema';
import { Visit } from './visit.model';
import { AuthService } from '@app/core';


@Injectable()
export class VisitService {

  actions: any = schema.visit;

  constructor(
    private auth: AuthService,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute) { }

  // Adapt JSON returned by API to match the Visit interface
  adapt(item: any): Visit {
    return new Visit({
      id: item.id,
      title: item.title,
      description: item.summary,
      place: item.place,
      date: new Date(item.date),
      passed: item.passed,
      deadline: new Date(item.deadline),
      registrationsOpen: item.registrations_open,
      image: item.image,
      participants: item.participants,
    });
  }

  list(): Observable<Visit[]> {
    let headers = this.auth.getHeaders();
    return this.http.get<Visit>(this.actions.list, { headers: headers })
      .pipe(
      map((visits: any) => visits.map(this.adapt)),
      tap(resp => {
        console.log('fetched visits');
        console.log(resp);
      })
      );
  }

}
