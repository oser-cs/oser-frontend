import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Registration, RegistrationService, PasswordErrorStateMatcher } from '../core';
import { AuthService } from 'app/core';


@Component({
  selector: 'app-student-signup',
  templateUrl: './student-signup.component.html',
  styleUrls: ['./student-signup.component.scss']
})
export class StudentSignupComponent implements OnInit {

  registration: Registration;
  formGroup: FormGroup;

  matcher = new PasswordErrorStateMatcher();

  constructor(
    private registrationService: RegistrationService,
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: AuthService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      firstName: '',
      lastName: '',
      email: ['', Validators.email],
      phoneNumber: '',
      password: '',
      passwordConfirm: '',
    }, { validator: (group) => this.checkPasswords(group)})
  }

  private checkPasswords(group: FormGroup): null | any {
    const password = group.controls.password.value;
    const passwordConfirm = group.controls.passwordConfirm.value;
    return password === passwordConfirm ? null : { passwordsDifferent: true };
  }

  submit() {
    const registration: Registration = this.formGroup.value;
    const password: string = this.formGroup.controls.password.value;
    this.registrationService.create(registration, password).pipe(
      tap(() => this.auth.login(registration.email, password)),
      tap(() => this.snackBar.open(
        `Ton compte a été créé ! Tu es maintenant connecté.`,
        'OK',
        { duration: 3000 },
      )),
      tap(() => this.router.navigate(['/'])),
    ).subscribe();
  }
}
