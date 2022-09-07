import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentCharterComponent } from './student-charter/student-charter.component';
import { StudentSignupComponent } from './student-signup/student-signup.component';
import { ValidEmailComponent } from './valid-email/valid-email.component';
import { WaitingEmailVerificationComponent } from './waiting-email-verification/waiting-email-verification.component';
import { ParentsCharterComponent } from './parents-charter/parents-charter.component';


const routes: Routes = [
  {
    path: '',
    component: StudentSignupComponent
  },
  {
    path:'waiting',
    component : WaitingEmailVerificationComponent
  },
  {
    path:'valid-email',
    component : ValidEmailComponent
  },
  {
    path:'student-charter',
    component : StudentCharterComponent
  },
  {
    path:'parents-charter',
    component : ParentsCharterComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupRoutingModule { }
