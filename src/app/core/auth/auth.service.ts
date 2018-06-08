import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
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
  fromUnauthorized: boolean;

  private userAdapter = new UserAdapter();
  private user = new StoredUser();
  private token = new StoredToken();

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string) {
    return this.http.post<any>(this.loginUrl, { username: username, password: password }).pipe(
      tap(data => this.token.set(data.token)),
      map(data => this.userAdapter.adapt(data.user)),
      tap((user: User) => this.user.set(user)),
      map(() => true),
    );
  }

  redirectLogin() {
    this.router.navigate(['/login']);
  }

  getUser(): User {
    return this.user.get();
  }

  getToken(): string {
    return this.token.get();
  }

  // Headers for use in authenticated calls to the backend API.
  getAuthorizationHeaders(): HttpHeaders {
    return new HttpHeaders({ Authorization: 'Token ' + this.getToken() });
  }

  get isLoggedIn(): boolean {
    if (this.user.get()) {
      return true;
    }
    return false;
  }

  logout() {
    this.user.destroy();
    this.token.destroy();
  }
}
