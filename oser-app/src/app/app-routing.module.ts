import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { LoginComponent } from '@app/core';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupPageComponent },
  // Path to showcase site: see showcase-site/showcase-routing.module
  { path: '', redirectTo: '/signup', pathMatch: 'full'},
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
