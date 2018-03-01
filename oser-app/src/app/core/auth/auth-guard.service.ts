import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let url: string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this.auth.isLoggedIn) { return true; }

    // Store the attempted URL for redirecting
    this.auth.redirectUrl = url;
    this.auth.fromGuard = true;

    // Navigate to the login page
    this.router.navigate(['/login']);
    return false;
  }
}
