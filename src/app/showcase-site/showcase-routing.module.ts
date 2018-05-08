import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowcaseSiteComponent } from './showcase-site.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { DonatePageComponent } from './donate-page/donate-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { NewsDetailPageComponent } from './news-detail-page/news-detail-page.component';
import { ActionsPageComponent } from './actions-page/actions-page.component';
import { MentionsComponent } from './mentions/mentions.component';

const showcaseSiteRoutes: Routes = [
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
  }
]

@NgModule({
  imports: [RouterModule.forChild(showcaseSiteRoutes)],
  exports: [RouterModule]
})
export class ShowcaseRoutingModule { }
