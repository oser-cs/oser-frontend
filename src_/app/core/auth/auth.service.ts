import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { environment } from 'environments/environment';
import { User } from './models';
import { ObjectStoredItem, SimpleStoredItem } from '../storage';
import { UserAdapter } from './adapters';


class StoredUser extends ObjectStoredItem<User> { key = 'oser-cs-user-info'; }
class StoredToken extends SimpleStoredItem { key = 'oser-cs-user-token'; }


@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private loginUrl = environment.apiUrl + 'auth/get-token/';
  private resetUrl = environment.apiUrl + 'rest-auth/password/reset/';
  private resetConfirmUrl = environment.apiUrl + 'rest-auth/password/reset/confirm/';

  fromGuard: boolean;
  redirectUrl: string;
  fromUnauthorized: boolean;

  private userAdapter = new UserAdapter();
  private user = new StoredUser();
  private token = new StoredToken();
  private user$: BehaviorSubject<User>;

  constructor(private http: HttpClient, private router: Router) {
    const userData = this.getUserSnapshot();
    const initialUser = userData ? new User(userData) : null;
    this.user$ = new BehaviorSubject(initialUser);
  }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post<any>(this.loginUrl, { username: username, password: password }).pipe(
      tap(data => this.token.set(data.token)),
      map(data => this.userAdapter.adapt(data.user)),
      tap((user: User) => this.user.set(user)),
      tap((user: User) => this.user$.next(user)),
      map(() => true),
    );
  }

  reset(email: string): Observable<boolean> {
    console.log("reset function of auth service");
    return this.http.post<any>(this.resetUrl, { email }).pipe(
      map(() => true),
    );
  }

  resetConfirm(uid: string, token: string, new_password1: string, new_password2: string): Observable<boolean> {
    console.log("reset confirm function");
    return this.http.post<any>(this.resetConfirmUrl, { uid, token, new_password1, new_password2 }).pipe(
      map(() => true),
    );
  }  

  redirectLogin() {
    this.router.navigate(['/connexion']);
  }

  getUserSnapshot(): User {
    return this.user.get();
  }

  getUser(): Observable<User> {
    return this.user$.asObservable();
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
    this.user$.next(null);
  }
}
