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

const showcaseSiteRoutes: Routes = [
  {
    path: '',
    component: ShowcaseSiteComponent,
    children: [
      { path: '', component: LandingPageComponent },
      { path: 'qui-sommes-nous', component: AboutPageComponent },
      { path: 'actions', component: ActionsPageComponent },
      { path: 'nous-soutenir', component: DonatePageComponent },
      { path: 'actualites', component: NewsPageComponent },
      { path: 'actualites/:id', component: NewsDetailPageComponent },
      { path: 'contact', component: ContactPageComponent },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(showcaseSiteRoutes)],
  exports: [RouterModule]
})
export class ShowcaseRoutingModule { }
