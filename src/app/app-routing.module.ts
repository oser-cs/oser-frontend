import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { LoginComponent, UiGalleryComponent } from './shared';
import { InternalErrorComponent, NotFoundComponent, AuthGuard, MapsAPIResolver } from './core';

import {
  ShowcaseSiteComponent,
  LandingPageComponent,
  AboutPageComponent,
  DonatePageComponent,
  ContactPageComponent,
  NewsPageComponent,
  NewsDetailPageComponent,
  ActionsPageComponent,
  MentionsComponent
} from './showcase-site';

import {
  ActionsResolver,
  TestimoniesResolver,
  CategoriesResolver,
  KeyFiguresResolver,
  PartnersResolver,
  ArticlesResolver, ArticleResolver,
  MentionsResolver, DonateResolver,
} from './showcase-site/shared';

const routes: Routes = [
  {
    path: '',
    component: ShowcaseSiteComponent,
    children: [
      {
        path: '',
        component: LandingPageComponent,
        resolve: {
          'actions': ActionsResolver,
          'partners': PartnersResolver,
        },
        data: { title: 'Accueil' },
      },
      {
        path: 'qui-sommes-nous',
        component: AboutPageComponent,
        resolve: { 'keyFigures': KeyFiguresResolver },
        data: { title: 'Qui sommes-nous ?' },
      },
      {
        path: 'actions',
        component: ActionsPageComponent,
        resolve: {
          'actions': ActionsResolver,
          'testimonies': TestimoniesResolver,
        },
        data: { title: 'Nos actions' },
      },
      {
        path: 'nous-soutenir',
        component: DonatePageComponent,
        resolve: { 'document': DonateResolver },
        data: { title: 'Nous soutenir' },
      },
      {
        path: 'actualites',
        data: { title: 'Actualités' },
        children: [
          {
            path: '',
            component: NewsPageComponent,
            resolve: {
              'articles': ArticlesResolver,
              'categories': CategoriesResolver,
            },
          },
          {
            path: ':slug',
            component: NewsDetailPageComponent,
            resolve: {
              'article': ArticleResolver,
              'articles': ArticlesResolver
            },
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
        resolve: { 'document': MentionsResolver },
        data: { title: 'Mentions légales' },
      }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupPageComponent },
  {
    path: 'sorties',
    canActivate: [AuthGuard],
    loadChildren: './visits/visits.module#VisitsModule',
  },
  {
    path: '500',
    component: InternalErrorComponent,
    data: { title: 'Erreur interne' },
  },
  // { path: '', redirectTo: '/signup', pathMatch: 'full'},
  // { path: 'gallery', component: UiGalleryComponent},
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
