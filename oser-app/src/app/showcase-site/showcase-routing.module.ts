import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowcaseSiteComponent } from './showcase-site.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DonatePageComponent } from './donate-page/donate-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

const showcaseSiteRoutes: Routes = [
  {
    path: 'showcase',
    component: ShowcaseSiteComponent,
    children: [
      {
        path: '',
        component: LandingPageComponent
      },
      {
        path: 'donate',
        component: DonatePageComponent
      },
      {
        path: 'contact',
        component: ContactPageComponent
      }
    ]
  }
]

@NgModule({
  imports: [ RouterModule.forChild(showcaseSiteRoutes) ],
  exports: [ RouterModule ]
})
export class ShowcaseRoutingModule { }
