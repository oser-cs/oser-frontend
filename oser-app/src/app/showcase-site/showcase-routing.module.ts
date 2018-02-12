import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowcaseSiteComponent } from './showcase-site.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const showcaseSiteRoutes: Routes = [
  {
    path: 'showcase',
    component: ShowcaseSiteComponent,
    children: [
      {
        path: '',
        component: LandingPageComponent
      }
    ]
  }
]

@NgModule({
  imports: [ RouterModule.forChild(showcaseSiteRoutes) ],
  exports: [ RouterModule ]
})
export class ShowcaseRoutingModule { }
