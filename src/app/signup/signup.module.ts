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
