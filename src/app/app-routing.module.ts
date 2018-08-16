import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupTutoreOneComponent } from './signup-page/signup-tutoré-firstPage/signup-page.component';
import { SignupTutoreTwoComponent } from './signup-page/signup-tutoré-secondPage/signup-page.component';
import { SignupTuteurComponent } from './signup-page/signup-tuteur/signup-tuteur.component';
import { LoginComponent } from './login/login.component';
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
    loadChildren: './showcase-espacemembre/showcase-espacemembre.module#ShowcaseEspacemembreModule',
  },
  {
    path: 'sorties',
    canActivate: [AuthGuard],
    loadChildren: './visits/visits.module#VisitsModule',
  },
  {
    path: 'projets',
    canActivate: [AuthGuard],
    loadChildren: './projects/projects.module#ProjectsModule',
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signupTutoreOne',
    component: SignupTutoreOneComponent
  },
  {
    path: 'signupTutoreTwo',
    component: SignupTutoreTwoComponent
  },
  {
    path: 'signupTuteur',
    component: SignupTuteurComponent
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
