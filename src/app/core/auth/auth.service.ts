import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { tap, map } from 'rxjs/operators';
import { environment } from 'environments/environment';
import { User } from './models';
import { ObjectStoredItem, SimpleStoredItem } from '../storage';
import { UserAdapter } from './adapters';


class StoredUser extends ObjectStoredItem<User> { key = 'oser-cs-user-info'; }
class StoredToken extends SimpleStoredItem { key = 'oser-cs-user-token'; }


@Injectable()
export class AuthService {

  private loginUrl = environment.apiUrl + 'auth/get-token/';

  fromGuard: boolean;
  redirectUrl: string;

  private userAdapter: UserAdapter;
  private user = new StoredUser();
  private token = new StoredToken();

  constructor(private http: HttpClient) {
    this.userAdapter = new UserAdapter();
  }

  login(username: string, password: string) {
    return this.http.post<any>(this.loginUrl, { username: username, password: password }).pipe(
      tap(data => this.token.set(data.token)),
      map(data => this.userAdapter.adapt(data.user)),
      tap((user: User) => this.user.set(user)),
      map(() => true),
    );
  }

  getUser(): User {
    return this.user.get();
  }

  getToken(): string {
    return this.token.get();
  }

  /*
  Headers for use in authenticated calls to the backend API.
  */
  getHeaders(): HttpHeaders {
    let token = this.getToken();
    return new HttpHeaders({
      Authorization: 'Token ' + token,
    });
  }

  get isLoggedIn(): boolean {
    if (this.user.get()) return true;
    return false;
  }

  logout() {
    this.user.destroy();
    this.token.destroy();
  }
}
