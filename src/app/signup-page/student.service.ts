import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StudentService {

  private apiUrl = environment.apiUrl;

  constructor(private _http: HttpClient) { }

  /** Students */

  addNewStudent(first_name: string,
    last_name: string,
    birthday: string,
    email: string,
    phone: string,
    street: string,
    code: string,
    town: string,
    nameparent: string,
    surnameparent: string,
    email_parent: string,
    home_phone: string,
    mobile_phone: string,
    password: string): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    const body = {
      first_name: first_name,
      last_name: last_name,
      date_of_birth: birthday,
      email: email,
      phone: phone,
      adress: {
        line1: street,
        line2: '',
        post_code: code,
        city: town,
      },
      emergency_contact: {
        first_name: nameparent,
        last_name: surnameparent,
        email: email_parent,
        home_phone: home_phone,
        mobile_phone: mobile_phone,
      },
      password: password,
    };

    return this._http.post(this.apiUrl + 'registrations/', body, { headers: headers });
  }

}
