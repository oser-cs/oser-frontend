import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
  MatSnackBarModule,
  MatCheckboxModule,
  MatIconModule,
  MatSlideToggleModule,
} from '@angular/material';

import { SharedModule } from 'app/shared';
import { SignupRoutingModule } from './signup-routing.module';
import { StudentSignupComponent } from './student-signup/student-signup.component';
import { WaitingEmailVerificationComponent } from './waiting-email-verification/waiting-email-verification.component';
import { ValidEmailComponent } from './valid-email/valid-email.component';
import { StudentCharterComponent } from './student-charter/student-charter.component';
import { ParentsCharterComponent } from './parents-charter/parents-charter.component';

@NgModule({
  declarations: [
    StudentSignupComponent,
    WaitingEmailVerificationComponent,
    ValidEmailComponent,
    StudentCharterComponent,
    ParentsCharterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SignupRoutingModule,
    SharedModule,
    // Material
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatIconModule,
    MatSlideToggleModule,
  ],
})
export class SignupModule { }
