import { NgModule } from '@angular/core';

// Modules
import { CommonModule } from '@angular/common';
import { ShowcaseRoutingModule } from './showcase-routing.module';
import { MessageModule } from '../messages/message.module';
import { Ng4TwitterTimelineModule } from 'ng4-twitter-timeline/lib/index';

// Components
import { NavbarComponent } from './navbar/navbar.component';
import { ShowcaseSiteComponent } from './showcase-site.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ArticleCardComponent } from './landing-page/article-card/article-card.component';
import { FooterComponent } from './footer/footer.component';
import { DonatePageComponent } from './donate-page/donate-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ActionsPageComponent } from './actions-page/actions-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { ArticleItemComponent } from './news-page/article-item/article-item.component';
import { FilterComponent } from './shared/filter/filter.component';

// Services
import { ArticleService } from './shared/article.service';
import { FigureService } from './shared/figure.service';
import { TestimonyService } from './shared/testimony.service';
import { CategoryService } from './shared/category.service';

// Pipes
import { FuzzyPipe } from '../pipes/fuzzy.pipe';

@NgModule({
  imports: [
    CommonModule,
    ShowcaseRoutingModule,
    MessageModule,
    Ng4TwitterTimelineModule.forRoot(),
  ],
  declarations: [
    NavbarComponent,
    ShowcaseSiteComponent,
    LandingPageComponent,
    ArticleCardComponent,
    FooterComponent,
    DonatePageComponent,
    ContactPageComponent,
    ActionsPageComponent,
    NewsPageComponent,
    AboutPageComponent,
    ArticleItemComponent,
    FilterComponent,
    FuzzyPipe,
  ],
  providers: [ArticleService, FigureService, TestimonyService, CategoryService],
  exports: [
    ShowcaseSiteComponent
  ]
})
export class ShowcaseSiteModule { }
