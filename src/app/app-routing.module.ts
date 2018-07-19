import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { LoginComponent, UiGalleryComponent } from './shared';
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
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupPageComponent
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
