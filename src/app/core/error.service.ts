import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class ErrorService {

  constructor(private router: Router) { }

  panic() {
    this.router.navigate(['/500']);
  }

  notFound() {
    this.router.navigate(['/404']);
  }

}
