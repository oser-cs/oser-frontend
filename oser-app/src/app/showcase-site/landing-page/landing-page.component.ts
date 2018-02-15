import { Component, OnInit } from '@angular/core';
import { Article } from '../shared/article.model';
import { ArticleService } from '../shared/article.service';

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

  actions: Action[] = [
    {
      title: 'Apprendre, comprendre',
      src: 'assets/img/action-apprendre.jpg'
    },
    {
      title: "Découvrir, s'intéresser",
      src: 'assets/img/action-decouvrir.jpg'
    },
    {
      title: "Vivre l'extra-ordinaire",
      src: 'assets/img/action-vivre.jpg'
    }
  ];

  articles: Article[];

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
