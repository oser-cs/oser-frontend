import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'environments/environment';
import { Registration, RegistrationAdapter } from './registration.model';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {

  private baseUrl = environment.apiUrl + 'registrations/';

  constructor(private http: HttpClient, private adapter: RegistrationAdapter) { }

  create(registration: Registration, password: string): Observable<any> {
    const body: any = this.adapter.encode(registration);
    body.password = password;
    return of(body);
    // return this.http.post(this.baseUrl, body);
  }

}
