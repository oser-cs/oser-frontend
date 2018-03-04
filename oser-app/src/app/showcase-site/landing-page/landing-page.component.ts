import { Component, OnInit } from '@angular/core';
import { Article } from '../shared/article.model';
import { ArticleService } from '../shared/article.service';
import { Partner, PartnerService } from '@app/showcase-site/shared/partners';
import * as config from './config.json';


class Action {
  title: string;
  src: string;
}

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  actions: Action[] = <Action[]>config['actions'];
  articles: Article[];
  partners: Partner[];
  // Max number of articles to show in the "Actualités" section
  numArticles: number = <number>config['numArticles'];

  constructor(
    private articleService: ArticleService,
    private partnerService: PartnerService,
  ) { }

  ngOnInit() {
    this.getArticles();
    this.getPartners();
  }

  getArticles(): void {
    this.articleService.first(this.numArticles).subscribe(
      (articles) => this.articles = articles,
      (e) => console.log(e)
    );
  }

  getPartners(): void {
    this.partnerService.list().subscribe(
      (partners) => this.partners = partners,
      (e) => console.log(e)
    );
  }
}
