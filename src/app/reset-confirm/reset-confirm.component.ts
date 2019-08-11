import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { AuthService, MessageService } from 'app/core';
import { of } from 'rxjs';
import { filter, map, tap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-reset-confirm',
  templateUrl: './reset-confirm.component.html',
  styleUrls: ['./reset-confirm.component.scss']
})
export class ResetConfirmComponent implements OnInit {

  loading: boolean = false;
  defaultRedirectUrl: string = '/membres';
  formGroup: FormGroup;
  public uid: string;
  public token: string;

  constructor(
    private router: Router,
    private auth: AuthService,
    private messageService: MessageService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    if (this.auth.fromGuard) {
      this.messageService.error('Oops ! Vous devez vous connecter pour accéder à cette page.');
    }
    if (this.auth.fromUnauthorized) {
      this.messageService.error("Oops ! Vous n'avez pas les permissions requises pour accéder à cette page.");
    }
    this.createForm();
    this.uid = this.route.snapshot.paramMap.get('uid');
    this.token = this.route.snapshot.paramMap.get('token');
    console.log(this.uid);
    console.log(this.token);
  }
  private createForm() {
    this.formGroup = this.fb.group({
      new_password1: '',
      new_password2: ''
    });
  }

  resetConfirm() {
    this.loading = true;
    const { new_password1, new_password2 } = this.formGroup.value;
    this.messageService.clear();
    this.auth.resetConfirm(this.uid, this.token, new_password1, new_password2).pipe(
      catchError(() => {
        this.messageService.error("Erreur dans le formulaire, veuillez vérifiez les informatiosn entrées.");
        return of(false);
      }
    ),
      tap(() => this.loading = false),
      filter(Boolean),
      tap(() => this.snackBar.open('Mot de passe réinitialisé', 'OK', { duration: 2000 })),
    
    ).subscribe()}

}
