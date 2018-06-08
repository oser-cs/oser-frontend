import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { ErrorService } from '../error.service';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private auth: AuthService,
    private location: Location,
    private errorService: ErrorService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = this.attachToken(request);
    return next.handle(request).pipe(
      tap(
        (event: HttpEvent<any>) => { },
        (error: any) => this.onError(error),
      ),
    );
  }

  onError(error: any) {
    console.error(error);

    if (error instanceof HttpErrorResponse) {
      if (error.status === 401) {
        this.auth.redirectUrl = this.location.path();
        this.auth.fromUnauthorized = true;
        this.auth.logout();  // forget credentials as they may be corrupt
        this.auth.redirectLogin();
      } else if (error.status === 0) {
        // Status 0 is a CORS error
        // Generally means that backend server is down
        // this.errorService.panic();
      } else if (error.status === 404) {
        this.errorService.notFound();
      }
    }
  }

  attachToken(request: HttpRequest<any>): HttpRequest<any> {
    const token = this.auth.getToken();
    if (token) {
      request = request.clone({ headers: this.auth.getAuthorizationHeaders() });
    }
    return request
  }

}
