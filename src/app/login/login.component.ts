import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { AuthService, MessageService } from 'app/core';
import { of } from 'rxjs';
import { filter, map, tap, catchError, subscribeOn } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loading: boolean = false;
  hassignedCharter = true;
  defaultRedirectUrl: string = '/membres';
  charterUrl: string = 'inscription/student-charter';
  formGroup: FormGroup;
  loginSuccess: boolean = false;

  constructor(
    private router: Router,
    private auth: AuthService,
    private messageService: MessageService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    if (this.auth.fromGuard) {
      this.messageService.error('Oops ! Vous devez vous connecter pour accéder à cette page.');
    }
    if (this.auth.fromUnauthorized) {
      this.messageService.error("Oops ! Vous n'avez pas les permissions requises pour accéder à cette page.");
    }
    this.createForm();
  }

  private createForm() {
    this.formGroup = this.fb.group({
      email: '',
      password: '',
    });
  }

  async login() {
    var toto = false;
    this.loading = true;
    const { email, password } = this.formGroup.value;
    this.messageService.clear();
    await this.auth.login(email, password).pipe(

      map(() => this.loginSuccess = true),
      catchError(() => {
        this.messageService.error("L'identifiant ou le mot de passe est incorrect.");
        this.loginSuccess = false;
        return of(false);
      }),
      tap(() => this.loading = false),

   
      // Only continue if no error
      filter(Boolean),
      // Get redirect URL from the auth service, provided by the auth guard.

    ).subscribe({
      complete() {
        console.log("login unsuccess");
      },
    });


      if(this.loginSuccess == true){
       
          this.auth.checkSignatureCharter(email).pipe(
            catchError(() => {
              this.hassignedCharter = false;

              this.messageService.error("Vous n'avez pas signé le(s) charte(s).");
              map(() => this.auth.redirectUrl ? this.auth.redirectUrl : this.defaultRedirectUrl),
                tap((redirectUrl: string) => this.router.navigate([redirectUrl]));
              return of(false);
            }),
            map(() => this.auth.redirectUrl ? this.auth.redirectUrl : this.defaultRedirectUrl),
            tap(() => this.snackBar.open('Connexion réussie !', 'OK', { duration: 2000 })),
          ).subscribe().add(() =>   
          { 
          if(this.hassignedCharter == false)
          {
            this.router.navigate([this.charterUrl]);
          }
          else
          {
            this.router.navigate([this.defaultRedirectUrl]);
          }
          });
}
    
}
}