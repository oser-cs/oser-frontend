import { NgModule } from '@angular/core';

// Modules
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'app/core';
import { SharedModule } from 'app/shared';
import { Ng2EmojiModule } from 'ng2-emoji';
import { ShowcaseSiteRoutingModule } from './showcase-site-routing.module';

// Components
import { ShowcaseSiteComponent } from './showcase-site.component';
import { LandingPageComponent } from './landing-page';
import { ArticleCardComponent } from './article-card';
import { DonatePageComponent } from './donate-page';
import { ContactPageComponent } from './contact-page';
import { ActionsPageComponent } from './actions-page';
import { AboutPageComponent } from './about-page';
import { NewsPageComponent } from './news-page';
import { ArticleItemComponent } from './article-item';
import { PartnerLogoComponent } from './partner-logo';
import { NewsDetailPageComponent } from './news-detail-page';
import { CarouselComponent, CarouselDirective, CarouselItemElement } from './carousel';
import { MentionsComponent } from './mentions';
import { ProjectsPageComponent } from './project-page';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CoreModule,
    SharedModule,
    Ng2EmojiModule.forRoot(),
    ShowcaseSiteRoutingModule,
  ],
  declarations: [
    ShowcaseSiteComponent,
    LandingPageComponent,
    ArticleCardComponent,
    DonatePageComponent,
    ContactPageComponent,
    ActionsPageComponent,
    NewsPageComponent,
    AboutPageComponent,
    ArticleItemComponent,
    NewsDetailPageComponent,
    PartnerLogoComponent,
    CarouselComponent,
    CarouselDirective,
    CarouselItemElement,
    MentionsComponent,
    ProjectsPageComponent
  ],
  exports: [
    ShowcaseSiteComponent
  ]
})
export class ShowcaseSiteModule { }
