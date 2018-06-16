import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';
import { ApiService } from 'app/core';
import { Participation, ParticipationAdapter } from './participation.model';
import { FormEntryPayload } from 'app/dynamic-forms';

@Injectable({
  providedIn: 'root'
})
export class ParticipationService extends ApiService {

  private baseUrl = this.apiUrl + 'project-participations/';
  private adapter = new ParticipationAdapter();

  constructor(private http: HttpClient) { super(); }

  create(userId: number, editionId: number, entry: FormEntryPayload): Observable<Participation> {
    const body = {
      user: userId,
      edition: 1,
      entry: entry,
    };
    return this.http.post(this.baseUrl, body).pipe(
      map((data: any) => this.adapter.adapt(data)),
    )
  }
}
