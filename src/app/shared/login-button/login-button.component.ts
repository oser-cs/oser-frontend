import { Component, OnInit, OnDestroy } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { AuthService, User } from 'app/core';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss']
})
export class LoginButtonComponent implements OnInit, OnDestroy {

  user: User;
  private sub = new Subscription();

  constructor(private auth: AuthService) { }

  ngOnInit() {
    const sub = this.auth.getUser().pipe(
      tap((user) => this.user = user),
    ).subscribe();
    this.sub.add(sub);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
