import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ResetComponent } from './reset/reset.component';
import { ResetConfirmComponent} from './reset-confirm/reset-confirm.component';
import { UiGalleryComponent } from './shared';
import { InternalErrorComponent, NotFoundComponent, AuthGuard, MapsAPIResolver } from './core';


const routes: Routes = [
  {
    path: '',
    loadChildren: './showcase-site/showcase-site.module#ShowcaseSiteModule',
  },
  {
    path: 'membres',
    canActivate: [AuthGuard],
    loadChildren: './members/members.module#MembersModule',
  },
  {
    path: 'connexion',
    component: LoginComponent,
  },
  {
    path: 'inscription',
    loadChildren: './signup/signup.module#SignupModule',
  },
  {
    path: 'reinitialiser_mdp',
    component: ResetComponent,
  },
  {
    path: 'rest-auth/password/reset/confirm/:uid/:token',
    component: ResetConfirmComponent,
  },
  {
    path: '500',
    component: InternalErrorComponent,
    data: { title: 'Erreur interne' },
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: { title: 'Page introuvable' },
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
