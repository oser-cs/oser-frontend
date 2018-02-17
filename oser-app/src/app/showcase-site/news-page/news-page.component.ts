import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Filter } from '../shared/filter.model';
import { FILTERS } from '../shared/filter.mock';
import { Article } from '../shared/article.model';
import { ArticleService } from '../shared/article.service';


@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {

  articles: Article[];
  filters: Filter[];

  // RxJS subject = observable + observer;
  searchTerm$ = new Subject<string>();
  search: string;

  // TODO implement filtering

  constructor(
    private articleService: ArticleService) { }

  ngOnInit() {
    this.getArticles();
    this.getFilters();
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

  getFilters(): void {
    this.filters = FILTERS;
  }


}
