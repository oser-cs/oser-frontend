import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../core';
import { MessageService } from '../../core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model: any = {};
  loading: boolean = false;
  defaultRedirectUrl: string = '/';
  loginSuccessful: 'Connexion réussie';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
  }

  get fromGuard(): boolean {
    return this.auth.fromGuard;
  }

  get fromUnauthorized(): boolean {
    return this.auth.fromUnauthorized;
  }

  login() {
    this.loading = true;
    this.auth.login(this.model.username, this.model.password).subscribe(
      () => {
        this.loading = false;
        if (this.auth.isLoggedIn) {
          this.messageService.success(this.loginSuccessful, true);
          // Get redirect URL from the auth service, provided by the auth guard.
          let redirect = this.auth.redirectUrl ? this.auth.redirectUrl : this.defaultRedirectUrl;
          this.router.navigate([redirect]);
        }
      },
      error => {
        this.loading = false;
        this.messageService.error(
            "L'identifiant ou le mot de passe est incorrect.");
      }
    );
  }

}
