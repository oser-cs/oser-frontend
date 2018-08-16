import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatIconModule,
} from '@angular/material';

import { SignupTutoreOneComponent } from './student-signup-one/signup-page.component';
import { SignupTutoreTwoComponent } from './student-signup-two/signup-page.component';
import { SignupTuteurComponent } from './tutor-signup/signup-tuteur.component';
import { SignupRoutingModule } from './signup-routing.module';

@NgModule({
  declarations: [
    SignupTutoreOneComponent,
    SignupTutoreTwoComponent,
    SignupTuteurComponent,
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
    MatSelectModule,
    MatButtonModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
  ],
})
export class SignupModule { }
