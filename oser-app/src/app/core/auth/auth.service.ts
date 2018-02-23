import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthService {

  private loginUrl: string = 'http://localhost:8000/api/auth/get-token/'
  private storageKey: string = 'currentUser';

  fromGuard: boolean;
  redirectUrl: string;

  private _user: any;

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<any>(this.loginUrl, { username: username, password: password })
      .map(user => {
        // login successful if there's a token in the response
        if (user && user.token) {
          this.user = user;
          return true;
        }
        return false;
      });
  }

  set user(user: any) {
    // store user details and token in local storage to keep user logged in between page refreshes
    // NOTE: user only contains the token property for now.
    localStorage.setItem(this.storageKey, JSON.stringify(user));
  }

  get user(): any {
    return JSON.parse(localStorage.getItem(this.storageKey));
  }

  getToken(): string {
    let user = this.user;
    if (user) return user.token;
    return null;
  }

  getHeaders(): HttpHeaders {
    let token = this.getToken();
    return new HttpHeaders({
      Authorization: 'Token ' + token,
    });
  }

  get isLoggedIn(): boolean {
    if (localStorage.getItem(this.storageKey)) return true;
    return false;
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem(this.storageKey);
  }
}
