import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService, MessageService } from 'app/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model: any = {};
  loading: boolean = false;
  defaultRedirectUrl: string = '/';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    if (this.auth.fromGuard) {
      this.messageService.error('Oops ! Vous devez vous connecter pour accéder à cette page.');
    }
    if (this.auth.fromUnauthorized) {
      this.messageService.error("Oops ! Vous n'avez pas les permissions requises pour accéder à cette page.");
    }
  }

  login() {
    this.loading = true;
    this.messageService.clear();
    this.auth.login(this.model.email, this.model.password).subscribe(
      () => {
        this.loading = false;
        if (this.auth.isLoggedIn) {
          // Get redirect URL from the auth service, provided by the auth guard.
          let redirect = this.auth.redirectUrl ? this.auth.redirectUrl : this.defaultRedirectUrl;
          this.router.navigate([redirect]);
        }
      },
      error => {
        this.loading = false;
        this.messageService.error("L'identifiant ou le mot de passe est incorrect.");
      }
    );
  }

}
