import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';
import { ApiService, AuthService } from 'app/core';
import { Participation, ParticipationAdapter } from './participation.model';
import { Form, FormAdapter, FormEntryPayload } from 'app/dynamic-forms';

@Injectable({
  providedIn: 'root'
})
export class ParticipationService extends ApiService {

  private baseUrl = this.apiUrl + 'project-participations/';
  private adapter = new ParticipationAdapter();
  private formAdapter = new FormAdapter();

  constructor(private http: HttpClient) { super(); }

  create(userId: number, editionId: number, form: Form): Observable<Participation> {
    const payload = this.formAdapter.toPayload(form);
    const body = {
      user: userId,
      edition_id: editionId,
      entry: payload,
    };
    console.log(body);
    // return of(null);
    return this.http.post(this.baseUrl, body).pipe(
      map((data: any) => this.adapter.adapt(data)),
    );
  }

  pendingForUser(userId: number): Observable<Participation[]> {
    const url = this.baseUrl;
    const params = { user: String(userId), state: 'pending' };
    return this.http.get(url, { params: params }).pipe(
      map((data: any[]) => data.map(item => this.adapter.adapt(item))),
    );
  }
}


@Injectable({
  providedIn: 'root'
})
export class UserPendingParticipationListResolver implements Resolve<Participation[]> {

  constructor(private service: ParticipationService, private auth: AuthService) { }

  resolve() {
    const user = this.auth.getUser();
    return this.service.pendingForUser(user.id);
  }
}
