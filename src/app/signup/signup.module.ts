import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatSnackBarModule,
} from '@angular/material';

import { SignupRoutingModule } from './signup-routing.module';
import { StudentSignupComponent } from './student-signup/student-signup.component';

@NgModule({
  declarations: [
    StudentSignupComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SignupRoutingModule,
    // Material
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
  ],
})
export class SignupModule { }
