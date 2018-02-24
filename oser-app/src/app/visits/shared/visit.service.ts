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

  visitActions: any = schema.visit;
  participantsActions: any = schema.participants;

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
    return this.http.get<Visit>(this.visitActions.list, { headers: headers })
      .pipe(
      map((visits: any) => visits.map(this.adapt)),
      tap(resp => {
        console.log('fetched visits');
        console.log(resp);
      })
      );
  }

  retrieve(id: number | string): Observable<Visit> {
    let url = this.visitActions.retrieve.replace(':id', id);
    let headers = this.auth.getHeaders();
    return this.http.get<Visit>(url, { headers: headers }).pipe(
      map((visit: any) => this.adapt(visit)),
      tap(resp => {
        console.log('fetched visit');
      })
    );
  }

  addParticipant(visitId: number | string, studentId: number | string): Observable<any> {
    let headers = this.auth.getHeaders();
    let data = { student_id: studentId, visit_id: visitId };
    return this.http.post(this.participantsActions.create, data, { headers: headers}).pipe(
      tap(resp => {
        console.log(`added participant ${studentId} to visit ${visitId}`);
      })
    );
  }

  getParticipants(visitId: number | string, studentId: number | string): Observable<any[]> {
    let headers = this.auth.getHeaders();
    return this.http.get<any>(this.participantsActions.list, { headers: headers});
  }

  removeParticipant(visitId: number | string, studentId: number | string): Observable<any> {
    let headers = this.auth.getHeaders();
    // get the participant ID corresponding to this (visit, student) pair
    return this.getParticipants(visitId, studentId).flatMap(
      (participants) => {
        let participant = participants.filter(p => p.student.includes(studentId) && p.visit.includes(visitId))[0];
        let id = participant.id;
        let url = this.participantsActions.destroy.replace(':id', id);
        return this.http.delete(url, { headers: headers}).pipe(
          tap(resp => console.log(`removed participant ${studentId} from visit ${visitId}`))
        );
      }
    );
  }

  listParticipantsIDs(id: number | string): Observable<any[]> {
    let url = this.visitActions.participants.replace(':id', id);
    let headers = this.auth.getHeaders();
    return this.http.get<any>(url, { headers: headers }).pipe(
      map((participants: any[]) => participants.map(p => p.student_id)),
      tap(resp => {
        console.log('fetched visit participants IDs');
      })
    );
  }

}
