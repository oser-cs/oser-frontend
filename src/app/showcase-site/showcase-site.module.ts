import { NgModule } from '@angular/core';

// Modules
import { CommonModule } from '@angular/common';
import { CoreModule } from '@app/core';
import { UiModule } from '@app/ui';
import { ShowcaseRoutingModule } from './showcase-routing.module';
// import { Ng4TwitterTimelineModule } from 'ng4-twitter-timeline/lib/index';

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
import { ArticleService } from './shared/article.service';
import { KeyFigureService } from './shared/keyfigure.service';
import { TestimonyService } from './shared/testimony.service';
import { CategoryService } from './shared/category.service';
import { PartnerService } from './shared/partners';

// Pipes
import { NewsDetailPageComponent } from './news-detail-page/news-detail-page.component';

@NgModule({
  imports: [
    CommonModule,
    ShowcaseRoutingModule,
    CoreModule,
    UiModule,
    // Ng4TwitterTimelineModule.forRoot(),
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
  ],
  providers: [
    ArticleService,
    KeyFigureService,
    TestimonyService,
    CategoryService,
    PartnerService,
  ],
  exports: [
    ShowcaseSiteComponent
  ]
})
export class ShowcaseSiteModule { }