import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShowcaseSiteComponent } from './showcase-site.component';
import { LandingPageComponent } from './landing-page';
import { AboutPageComponent } from './about-page';
import { DonatePageComponent } from './donate-page';
import { ContactPageComponent } from './contact-page';
import { NewsPageComponent } from './news-page';
import { NewsDetailPageComponent } from './news-detail-page';
import { ActionsPageComponent } from './actions-page';
import { MentionsComponent } from './mentions';

import {
  ActionsResolver,
  TestimoniesResolver,
  CategoriesResolver,
  KeyFiguresResolver,
  PartnersResolver,
  ArticlesResolver, ArticleResolver,
  MentionsResolver, DonateResolver,
} from './shared';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowcaseSiteRoutingModule { }
