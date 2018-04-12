import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StudentService {

  private urls = {
    addStudent : '/api/registrations/',
  };


  constructor(private _http: HttpClient) { }

  /** Students */

  addNewStudent( firstname: String,
                  lastname: String,
                  birthday: String,
                  email: String,
                  phone: String,
                  street: String,
                  code: String,
                  town: String,
                  emergency_contact: String,
                  password: String): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    const body = {
      first_name: firstname,
      last_name: lastname,
      date_of_birth: birthday,
      email: email,
      phone: phone,
      adress: {
        street: street,
        post_code: code,
        city: town,
      },
      emergency_contact: emergency_contact,
      password: password,
    };

    return this._http.post(this.urls.addStudent, body, { headers: headers });
    }

}
