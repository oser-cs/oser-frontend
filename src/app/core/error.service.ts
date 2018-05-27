import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class ErrorService {

  constructor(private router: Router) { }

  panic() {
    this.router.navigate(['/error']);
  }

  notFound() {
    this.router.navigate(['/404']);
  }

}
