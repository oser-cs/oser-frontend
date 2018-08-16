import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupTutoreOneComponent } from './student-signup-one/signup-page.component';
import { SignupTutoreTwoComponent } from './student-signup-two/signup-page.component';
import { SignupTuteurComponent } from './tutor-signup/signup-tuteur.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'tutore-1',
    pathMatch: 'full',
  },
  {
    path: 'tutore',
    redirectTo: 'tutore-1',
    pathMatch: 'full',
  },
  {
    path: 'tutore-1',
    component: SignupTutoreOneComponent
  },
  {
    path: 'tutore-2',
    component: SignupTutoreTwoComponent
  },
  {
    path: 'tuteur',
    component: SignupTuteurComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupRoutingModule { }
