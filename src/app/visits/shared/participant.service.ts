import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Visit, Place, Participant } from './models';
import { VisitAdapter, SimpleVisitAdapter, ParticipantAdapter } from './adapters';
import { environment } from 'environments/environment';


@Injectable()
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
      tap((p: Participant) => {
        console.log(`user ${p.user.id} now participates to visit ${p.visitId}`);
      }),
    );
  }

  remove(participant: Participant): Observable<any> {
    const url = this.apiUrl + `${participant.id}/`;
    return this.http.delete(url).pipe(
      tap(_ => console.log(`user ${participant.user.id} removed from visit ${participant.visitId}`))
    );
  }

}
