import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupTutoreOneComponent } from './student-signup-one/signup-page.component';


const routes: Routes = [
  {
    path: '',
    component: SignupTutoreOneComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupRoutingModule { }
