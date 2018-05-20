import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService, private location: Location) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = this.attachToken(request);
    return next.handle(request).do(
      (event: HttpEvent<any>) => { },
      (error: any) => {
        console.log(error);  // log all HTTP errors
        if (error instanceof HttpErrorResponse && error.status === 401) {
          this.toLoginPage();
        }
      },
    );
  }

  toLoginPage() {
    this.auth.redirectUrl = this.location.path();
    this.auth.fromUnauthorized = true;
    this.auth.redirectLogin();
  }

  attachToken(request: HttpRequest<any>): HttpRequest<any> {
    const token = this.auth.getToken();
    if (token) {
      request = request.clone({ headers: this.auth.getAuthorizationHeaders() });
    }
    return request
  }

}
