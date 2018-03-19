import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Visit } from './visit.model';
import { Place } from './place.model';
import { AuthService } from '@app/core';
import { environment } from '@environments/environment';


@Injectable()
export class VisitService {

  apiUrl = environment.apiUrl;
  baseUrl = environment.apiUrl + 'visits/';
  participantBaseUrl: string = environment.apiUrl + 'visit-participants/';

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
      attachedFiles: item.attached_files,
      factSheet: item.fact_sheet,
      participants: item.participants,
      organizers: item.organizers,
    });
  }

  list(): Observable<Visit[]> {
    let headers = this.auth.getHeaders();
    return this.http.get<Visit>(this.baseUrl, { headers: headers })
      .pipe(
      map((visits: any) => visits.map(this.adapt)),
      tap(resp => {
        console.log('fetched visits');
      })
      );
  }

  retrieve(id: number | string): Observable<Visit> {
    let url = this.baseUrl + `${id}/`;
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
    return this.http.post(this.participantBaseUrl, data, { headers: headers}).pipe(
      tap(resp => {
        console.log(`added participant ${userId} to visit ${visitId}`);
      })
    );
  }

  getParticipants(): Observable<any[]> {
    let headers = this.auth.getHeaders();
    return this.http.get<any>(this.participantBaseUrl, { headers: headers});
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
        let url = this.participantBaseUrl + `${id}/`;
        return this.http.delete(url, { headers: headers}).pipe(
          tap(resp => console.log(`removed participant ${userId} from visit ${visitId}`))
        );
      }
    );
  }

  listParticipantsIDs(visitId: number | string): Observable<any[]> {
    let url = this.participantBaseUrl + `${visitId}/`;
    let headers = this.auth.getHeaders();
    return this.http.get<any>(url, { headers: headers }).pipe(
      map((participants: any[]) => participants.map(p => p.user_id)),
      tap(resp => {
        console.log('fetched visit participants IDs');
      })
    );
  }

  visitsOf(userId: number | string): Observable<Visit[]> {
    let url = this.apiUrl + `students/${userId}/visits/`;
    let headers = this.auth.getHeaders();
    return this.http.get<Visit>(url, { headers: headers }).pipe(
      map((visits: any) => visits.map(this.adapt)),
      tap(resp => {
        console.log(`fetched visits of user ${userId}`);
      })
    )
  }

}
