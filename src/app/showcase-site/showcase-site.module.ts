import { NgModule } from '@angular/core';

// Modules
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'app/core';
import { SharedModule } from 'app/shared';
import { Ng2EmojiModule } from 'ng2-emoji';

// Components
import { ShowcaseSiteComponent } from './showcase-site.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ArticleCardComponent } from './landing-page/article-card/article-card.component';
import { DonatePageComponent } from './donate-page/donate-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ActionsPageComponent } from './actions-page/actions-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { ArticleItemComponent } from './news-page/article-item/article-item.component';
import { FilterComponent } from './shared/filter/filter.component';
import { PartnerComponent } from './shared/partners';

// Services
import {
  ArticleService, ArticlesResolver, ArticleResolver,
  KeyFiguresResolver,
  TestimoniesResolver,
  CategoriesResolver,
  ActionService, ActionsResolver,
  PartnersResolver,
  MentionsResolver, DonateResolver,
} from './shared';

// Pipes
import { NewsDetailPageComponent } from './news-detail-page/news-detail-page.component';
import { CarouselComponent, CarouselDirective, CarouselItemElement } from './carousel';
import { MentionsComponent } from './mentions/mentions.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CoreModule,
    SharedModule,
    Ng2EmojiModule.forRoot(),
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
    FilterComponent,
    NewsDetailPageComponent,
    PartnerComponent,
    CarouselComponent,
    CarouselDirective,
    CarouselItemElement,
    MentionsComponent,
  ],
  providers: [
    ArticleService, ArticlesResolver, ArticleResolver,
    KeyFiguresResolver,
    TestimoniesResolver,
    CategoriesResolver,
    PartnersResolver,
    ActionService, ActionsResolver,
    MentionsResolver, DonateResolver,
  ],
  exports: [
    ShowcaseSiteComponent
  ]
})
export class ShowcaseSiteModule { }
