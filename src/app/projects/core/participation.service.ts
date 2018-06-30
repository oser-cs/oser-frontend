import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resolve } from '@angular/router';
import { Observable, of, forkJoin } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';
import { ApiService, AuthService } from 'app/core';
import { EditionService } from './edition.service';
import { Participation, ParticipationAdapter } from './participation.model';
import { Form, FormAdapter, FormEntryPayload } from 'app/dynamic-forms';

@Injectable({
  providedIn: 'root'
})
export class ParticipationService extends ApiService {

  private baseUrl = this.apiUrl + 'project-participations/';
  private adapter = new ParticipationAdapter();
  private formAdapter = new FormAdapter();

  constructor(
    private http: HttpClient,
    private editionService: EditionService,
  ) { super(); }

  create(userId: number, editionId: number, form: Form): Observable<Participation> {
    const payload = this.formAdapter.toPayload(form);
    const body = {
      user: userId,
      edition_id: editionId,
      entry: payload,
    };
    return this.http.post(this.baseUrl, body).pipe(
      map((data: any) => this.adapter.adapt(data)),
    );
  }

  private list(filters: any): Observable<Participation[]> {
    const url = this.baseUrl;
    return this.http.get(url, { params: filters }).pipe(
      map((data: any[]) => data.map(item => this.adapter.adapt(item))),
    );
  }

  destroy(id: any): Observable<void> {
    const url = this.baseUrl + `${id}/`;
    return this.http.delete(url).pipe(
      map(() => null)
    );
  }

  pendingForUser(userId: number): Observable<Participation[]> {
    return this.list({ user: String(userId), state: 'pending' });
  }

  forUser(userId: number): Observable<Participation[]> {
    return this.list({ user: String(userId) });
  }

  entry(participation: Participation): Observable<Form> {
    const url = this.baseUrl + `${participation.id}/form_entry/`;

    // Retrieve an empty edition form
    const editionForm$: Observable<Form> = this.editionService.form(participation.editionId);

    // Build an observable of a mapping of questionId to answer.
    const answers$: Observable<Map<number, string>> = this.http.get(url).pipe(
      map((data: any) => {
        const answers: Map<number, string> = new Map();
        data.answers.forEach(item => {
          const questionId: number = item.question;
          const answer: string = item.answer;
          answers.set(questionId, answer);
        });
        return answers;
      }),
    );

    return forkJoin(editionForm$, answers$).pipe(
      map((results: any[]) => {
        let form: Form;
        let answers: Map<number, string>;
        [form, answers] = results;
        // Fill in the form with the answers
        form.sections.forEach(section => {
          section.questions.forEach(question => {
            question.answer = answers.get(question.id);
          });
        });
        return form;
      })
    )
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


@Injectable({
  providedIn: 'root'
})
export class UserParticipationListResolver implements Resolve<Participation[]> {

  constructor(private service: ParticipationService, private auth: AuthService) { }

  resolve() {
    const user = this.auth.getUser();
    return this.service.forUser(user.id);
  }
}
