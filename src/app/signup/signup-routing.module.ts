import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentSignupComponent } from './student-signup/student-signup.component';


const routes: Routes = [
  {
    path: '',
    component: StudentSignupComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupRoutingModule { }
