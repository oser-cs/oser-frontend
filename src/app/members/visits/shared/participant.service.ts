import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mergeMap, map, tap } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Visit, Place, Participant } from './models';
import { VisitAdapter, SimpleVisitAdapter, ParticipantAdapter } from './adapters';
import { environment } from 'environments/environment';


@Injectable({
  providedIn: 'root',
})
export class ParticipantService {

  private apiUrl: string = environment.apiUrl + 'participations/';
  private adapter = new ParticipantAdapter();

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute) { }

  add(visitId: number | string, userId: number | string): Observable<any> {
    const body = { user: userId, visit: visitId };
    return this.http.post(this.apiUrl, body).pipe(
      map((data: any) => this.adapter.adapt(data)),
    );
  }

  remove(participant: Participant, visit: Visit, userId: number | string, reason: string): Observable<any> {
    let url = this.apiUrl + `${participant.id}/notify_cancelled/`;
    const body = { user: userId, visit: visit.id, reason: reason };
    return this.http.post(url, body).pipe(
      mergeMap(() => {
        url = this.apiUrl + `${participant.id}/`;
        return this.http.delete(url);
      })
    );
  }

}
