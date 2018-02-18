import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Article } from '../shared/article.model';
import { ArticleService } from '../shared/article.service';
import { CategoryService } from '../shared/category.service';
import { Ng4TwitterTimelineService } from 'ng4-twitter-timeline/lib/index';


@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {

  articles: Article[];
  // RxJS subject = observable + observer
  articles$ = new Subject<Article[]>();

  years: number[];
  currentYear: number;
  articleYears: string[];

  categories: string[];
  currentCategory: string;
  articleCategories: string[][];

  // RxJS subject = observable + observer
  searchTerm$ = new Subject<string>();
  search: string;

  constructor(
    private articleService: ArticleService,
    private categoryService: CategoryService,
    private twitterService: Ng4TwitterTimelineService) { }

  ngOnInit() {
    this.getArticles();
    this.getCategories();
    this.searchTerm$.subscribe(
      (value) => this.search = value,
      (e) => console.log(e)
    );
    this.articles$.subscribe((articles) => {
      this.articles = articles;
      // Update set of years
      this.years = this.articles
        .map(a => a.date.getFullYear())
        .filter((e, pos, arr) => arr.indexOf(e) == pos);
      // Update article years
      this.articleYears = this.articles
        .map(a => a.date.getFullYear().toString());
      // Update article categories
      this.articleCategories = articles.map(a => a.categories);
    });
  }

  getArticles(): void {
    this.articleService.list().subscribe(
      (articles) => this.articles$.next(articles),
      (e) => console.log(e)
    );
  }

  getCategories(): void {
    this.categoryService.list().subscribe(
      (categories) => this.categories = categories,
      (e) => console.log(e)
    );
  }

  // Respond to filter selection events
  onSelectYear(year: number) { this.currentYear = year; }
  onSelectCategory(category: string) { this.currentCategory = category ;}

  // Define visible or hidden state of articles in list
  hidden(article: Article): boolean {
    if (this.currentYear && article.date.getFullYear() !== this.currentYear) {
      return true;
    }
    if (this.currentCategory) {
      if (!article.categories.includes(this.currentCategory)) {
        return true;
      }
    }
    return false;
  }


}
