import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Article } from '../shared/article.model';
import { ArticleService } from '../shared/article.service';
import { Ng4TwitterTimelineService } from 'ng4-twitter-timeline/lib/index';


@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {

  articles: Article[];
  years = ["2018", "2017", "2016"];
  currentYear: string;
  categories = [
    "Focus Europe",
    "Stage Théâtre",
    "(Art)cessible",
    "Oser la Prépa",
    "Carnets de France",
    "Good Morning London",
    "Tutorat",
    "Sorties",
    "Annonces"
  ];
  currentCategory: string;

  // RxJS subject = observable + observer;
  searchTerm$ = new Subject<string>();
  search: string;

  // TODO implement filtering

  constructor(
    private articleService: ArticleService,
    private twitterService: Ng4TwitterTimelineService) { }

  ngOnInit() {
    this.getArticles();
    this.searchTerm$.subscribe(
      (value) => this.search = value,
      (e) => console.log(e)
    );
  }

  getArticles(): void {
    this.articleService.list().subscribe(
      (articles) => this.articles = articles,
      (e) => console.log(e)
    );
  }

  onSelectYear(year: string) { this.currentYear = year; }
  onSelectCategory(category: string) { this.currentCategory = category ;}

  hidden(article: Article): boolean {
    if (this.currentYear && !article.date.includes(this.currentYear)) {
      return true;
    }
    if (this.currentCategory) {
      // TODO modify once article categories are implemented
      return true;
    }
    return false;
  }


}
