import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { AuthService, MessageService } from 'app/core';
import { of } from 'rxjs';
import { filter, map, tap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

  loading: boolean = false;
  defaultRedirectUrl: string = '/';
  formGroup: FormGroup;

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
    });
  }

  reset() {
    this.loading = true;
    const { email } = this.formGroup.value;
    this.messageService.clear();
    this.auth.reset(email).pipe(
      catchError(() => {
        this.snackBar.open('Adresse incorrecte', 'OK', { duration: 5000 });
        return of(false);
      }),
      tap(() => this.loading = false),
      filter(Boolean),
      map(() =>this.auth.redirectUrl ? this.auth.redirectUrl : this.defaultRedirectUrl),
      tap(() => this.snackBar.open('Mail de réinitialisation envoyé !', 'OK', { duration: 2000 })),
      tap((redirectUrl: string) => this.router.navigate([redirectUrl])),    
    ).subscribe()}
}
