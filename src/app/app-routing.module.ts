import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { LoginComponent } from '@app/ui';
import { UiGalleryComponent }  from '@app/ui';
import { ShowcaseSiteComponent } from './showcase-site/showcase-site.component';
import { NotFoundComponent } from '@app/core';

const routes: Routes = [
  { path: '', component: ShowcaseSiteComponent },
  // NOTE: this route to the 404 page should be the last one,
  // as it is a default page and will be used if no other route matched
  // the current URL.
  { path: '**', component: NotFoundComponent, data: {title: 'Page introuvable'} },
  // { path: 'login', component: LoginComponent},
  // { path: 'signup', component: SignupPageComponent },
  // { path: '', redirectTo: '/signup', pathMatch: 'full'},
  // { path: 'gallery', component: UiGalleryComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
