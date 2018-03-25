import { Component, OnInit } from '@angular/core';
import {
  Article, ArticleService,
  Action, ActionService,
  Partner, PartnerService,
} from '@app/showcase-site/shared';
import jump from 'jump.js';
import * as config from './config.json';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  actions: Action[];
  articles: Article[];
  partners: Partner[];
  // Max number of articles to show in the "Actualités" section
  numArticles: number = <number>config['numArticles'];

  constructor(
    private articleService: ArticleService,
    private partnerService: PartnerService,
    private actionService: ActionService,
  ) { }

  ngOnInit() {
    this.getArticles();
    this.getActions();
    this.getPartners();
  }

  getArticles(): void {
    this.articleService.first(this.numArticles).subscribe(
      (articles) => this.articles = articles,
      (e) => console.log(e)
    );
  }

  getActions(): void {
    this.actionService.listHighlight().subscribe(
      actions => this.actions = actions,
      e => console.log(e)
    )
  }

  getPartners(): void {
    this.partnerService.list().subscribe(
      (partners) => this.partners = partners,
      (e) => console.log(e)
    );
  }

  get premiumPartners(): Partner[] {
    if (!this.partners) return [];
    return this.partners.filter(p => p.premium);
  }

  get otherPartners(): Partner[] {
    if (!this.partners) return [];
    return this.partners.filter(p => !p.premium);
  }

  jumpToContent(): void {
    jump('#qui-sommes-nous');
  }
}
