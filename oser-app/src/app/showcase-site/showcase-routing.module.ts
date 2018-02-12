import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowcaseSiteComponent } from './showcase-site.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DonateComponent } from './donate/donate.component';

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
        component: DonateComponent
      }
    ]
  }
]

@NgModule({
  imports: [ RouterModule.forChild(showcaseSiteRoutes) ],
  exports: [ RouterModule ]
})
export class ShowcaseRoutingModule { }
