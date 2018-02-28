import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import schema from './schema';
import { Visit } from './visit.model';
import { Place } from './place.model';
import { AuthService } from '@app/core';


@Injectable()
export class VisitService {

  schema: any = schema;

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
      summary: item.summary,
      description: item.description,
      place: new Place(item.place),
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
    return this.http.get<Visit>(this.schema.visit.list, { headers: headers })
      .pipe(
      map((visits: any) => visits.map(this.adapt)),
      tap(resp => {
        console.log('fetched visits');
      })
      );
  }

  retrieve(id: number | string): Observable<Visit> {
    let url = this.schema.visit.retrieve.replace(':id', id);
    let headers = this.auth.getHeaders();
    return this.http.get<Visit>(url, { headers: headers }).pipe(
      map((visit: any) => this.adapt(visit)),
      tap(resp => {
        console.log('fetched visit');
      })
    );
  }

  addParticipant(visitId: number | string, userId: number | string): Observable<any> {
    let headers = this.auth.getHeaders();
    let data = { user_id: userId, visit_id: visitId };
    return this.http.post(this.schema.participants.create, data, { headers: headers}).pipe(
      tap(resp => {
        console.log(`added participant ${userId} to visit ${visitId}`);
      })
    );
  }

  getParticipants(): Observable<any[]> {
    let headers = this.auth.getHeaders();
    return this.http.get<any>(this.schema.participants.list, { headers: headers});
  }

  removeParticipant(visitId: number | string, userId: number | string): Observable<any> {
    // get the participant ID corresponding to this (visit, user) pair.
    // flatMap allows to return the result of the inner Observable.
    return this.getParticipants().flatMap(
      (participants) => {
        let participant = participants.filter(p => p.user.includes(userId) && p.visit.includes(visitId))[0];
        if (!participant) {
          return new Observable(obs => {
            obs.error(`Error: no participant matching userId=${userId} and visitId=${visitId}`);
          });
        }
        let id = participant.id;
        // Now destroy the found participant.
        let headers = this.auth.getHeaders();
        let url = this.schema.participants.destroy.replace(':id', id);
        return this.http.delete(url, { headers: headers}).pipe(
          tap(resp => console.log(`removed participant ${userId} from visit ${visitId}`))
        );
      }
    );
  }

  listParticipantsIDs(visitId: number | string): Observable<any[]> {
    let url = this.schema.participants.retrieve.replace(':id', visitId);
    let headers = this.auth.getHeaders();
    console.log(headers);
    return this.http.get<any>(url, { headers: headers }).pipe(
      map((participants: any[]) => participants.map(p => p.user_id)),
      tap(resp => {
        console.log('fetched visit participants IDs');
      })
    );
  }

  visitsOf(userId: number | string): Observable<Visit[]> {
    let url = this.schema.student.visits.replace(':id', userId);
    let headers = this.auth.getHeaders();
    return this.http.get<Visit>(url, { headers: headers }).pipe(
      map((visits: any) => visits.map(this.adapt)),
      tap(resp => {
        console.log(`fetched visits of user ${userId}`);
      })
    )
  }

}
