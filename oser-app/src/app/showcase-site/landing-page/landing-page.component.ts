import { Component, OnInit } from '@angular/core';
import { Article } from '../shared/article.model';
import { ArticleService } from '../shared/article.service';
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
  numArticles: number = <number>config['numArticles'];

  constructor(private ArticleService: ArticleService) { }

  ngOnInit() {
    this.getArticles();
  }

  getArticles(): void {
    this.ArticleService.first(3).subscribe(
      (articles) => this.articles = articles,
      (e) => console.log(e)
    );
  }
}
