import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { LoginComponent } from './ui';
import { UiGalleryComponent }  from './ui';
import { NotFoundComponent, AuthGuard } from './core';
import { ShowcaseSiteComponent, LandingPageComponent, AboutPageComponent, DonatePageComponent, ContactPageComponent, NewsPageComponent, NewsDetailPageComponent, ActionsPageComponent, MentionsComponent } from './showcase-site';
import { VisitsComponent, VisitsListComponent, VisitDetailComponent } from './visits';
import { VisitsResolver, VisitResolver } from './visits/shared';
import { MapsAPIResolver } from './core';

const routes: Routes = [
  {
    path: '',
    component: ShowcaseSiteComponent,
    children: [
      {
        path: '',
        component: LandingPageComponent,
        data: { title: 'Accueil' },
      },
      {
        path: 'qui-sommes-nous',
        component: AboutPageComponent,
        data: { title: 'Qui sommes-nous ?' },
      },
      {
        path: 'actions',
        component: ActionsPageComponent,
        data: { title: 'Nos actions' },
      },
      {
        path: 'nous-soutenir',
        component: DonatePageComponent,
        data: { title: 'Nous soutenir' },
      },
      {
        path: 'actualites',
        data: { title: 'Actualités' },
        children: [
          {
            path: '',
            component: NewsPageComponent,
          },
          {
            path: ':slug',
            component: NewsDetailPageComponent,
          },
        ]
      },
      {
        path: 'contact',
        component: ContactPageComponent,
        data: { title: 'Contact' },
      },
      {
        path: 'mentions-legales',
        component: MentionsComponent,
        data: { title: 'Mentions légales' },
      }
    ]
  },
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupPageComponent },
  {
    path: 'sorties',
    component: VisitsComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '', component: VisitsListComponent,
        resolve: { 'visits': VisitsResolver },
      },
      {
        path: ':id', component: VisitDetailComponent,
        resolve: { 'visit': VisitResolver, 'geocoder': MapsAPIResolver },
      },
    ],
  },
  // { path: '', redirectTo: '/signup', pathMatch: 'full'},
  // { path: 'gallery', component: UiGalleryComponent},
  // NOTE: this route to the 404 page should be the last one,
  // as it is a default page and will be used if no other route matched
  // the current URL.
  { path: '**', component: NotFoundComponent, data: {title: 'Page introuvable'} },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
