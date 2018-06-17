import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class StudentService {

  private apiUrl = environment.apiUrl;


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
                  nameparent: String,
                  surnameparent: String,
                  email_parent: String,
                  home_phone: String,
                  mobile_phone: String): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    const body = {
      first_name: firstname,
      last_name: lastname,
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
    };

    return this._http.post(this.apiUrl + 'registrations/', body, { headers: headers })
        .map(res => res)
        .do(() => {
            console.log('request finished');
        });
    }

}
