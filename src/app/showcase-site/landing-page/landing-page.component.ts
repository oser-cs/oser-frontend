import { Component, OnInit } from '@angular/core';
import { Article, ArticleService, Action, Partner } from 'app/showcase-site/shared';
import { ActivatedRoute } from '@angular/router';
import jump from 'jump.js';
import { environment } from 'environments/environment';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  actions: Action[];
  articles: Article[];
  partners: Partner[];
  numArticles: number = environment.numArticles;

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.actions = this.route.snapshot.data['actions'];
    this.partners = this.route.snapshot.data['partners'];
    this.getArticles();
  }

  getArticles(): void {
    this.articleService.first(this.numArticles).subscribe(
      (articles) => this.articles = articles
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
