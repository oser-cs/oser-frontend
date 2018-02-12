import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ShowcaseSiteComponent } from './showcase-site.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NewsCardComponent } from './landing-page/news-card/news-card.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavbarComponent, ShowcaseSiteComponent, LandingPageComponent, NewsCardComponent, FooterComponent],
  exports: [ShowcaseSiteComponent]
})
export class ShowcaseSiteModule { }
