import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthService {
  loginUrl: string = 'http://localhost:8000/api/auth/get-token/'
  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<any>(this.loginUrl, { username: username, password: password })
      .map(user => {
        // login successful if there's a token in the response
        if (user && user.token) {
          // store user details and token in local storage to keep user logged in between page refreshes
          // NOTE: user only contains the token property for now.
          localStorage.setItem('currentUser', JSON.stringify(user));
        }

        return user;
      });
  }

  getToken(): string {
    let user = JSON.parse(localStorage.getItem('currentUser'));
    return user.token;
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
