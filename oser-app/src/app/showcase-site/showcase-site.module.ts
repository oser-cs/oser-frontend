import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ShowcaseSiteComponent } from './showcase-site.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NewsCardComponent } from './landing-page/news-card/news-card.component';
import { FooterComponent } from './footer/footer.component';
import { ShowcaseRoutingModule } from './showcase-routing.module';
import { DonatePageComponent } from './donate-page/donate-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ActionsPageComponent } from './actions-page/actions-page.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { NewsItemComponent } from './news-page/news-item/news-item.component';

@NgModule({
  imports: [
    CommonModule,
    ShowcaseRoutingModule
  ],
  declarations: [
    NavbarComponent,
    ShowcaseSiteComponent,
    LandingPageComponent,
    NewsCardComponent,
    FooterComponent,
    DonatePageComponent,
    ContactPageComponent,
    ActionsPageComponent,
    NewsPageComponent,
    AboutPageComponent,
    NewsItemComponent
  ],
  exports: [
    ShowcaseSiteComponent
  ]
})
export class ShowcaseSiteModule { }
