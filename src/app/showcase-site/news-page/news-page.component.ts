import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { Article, ArticleService } from '../shared';
import { FuzzyPipe } from 'app/core';


@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {

  articles: Article[];
  visibleArticles: Article[];

  years: number[];
  currentYear: number;
  articleYears: string[];

  categories: string[];
  currentCategory: string;
  articleCategories: string[][];

  // RxJS subject = observable + observer
  searchTerm$ = new Subject<string>();
  search: string;

  filtersVisible: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService) { }

  ngOnInit() {
    this.getArticles();
    this.categories = this.route.snapshot.data['categories'];
    this.searchTerm$.subscribe(
      (value) => this.search = value
    );
  }

  updateVisibleArticles() {
    // Only articles corresponding to the current filters should be visible
    this.visibleArticles = this.articles.filter(
      article => {
        if (this.currentYear && article.published.getFullYear() !== this.currentYear) return false;
        if (this.currentCategory) {
          if (!article.categories.includes(this.currentCategory)) return false;
        }
        return true;
      }
    )
  }

  getArticles(): void {
    this.articleService.list().subscribe(
      (articles) => {
        this.articles = articles;
        // Update set of years
        this.years = Array.from(new Set(
          this.articles.map(a => a.published.getFullYear())
        ));
        // Update article years
        this.articleYears = this.articles
          .map(a => a.published.getFullYear().toString());
        // Update article categories
        this.articleCategories = this.articles.map(a => a.categories);
        this.updateVisibleArticles();
      }
    );
  }

  // Respond to filter selection events
  onSelectYear(year: number) {
    this.currentYear = year;
    this.updateVisibleArticles();
  }
  onSelectCategory(category: string) {
    this.currentCategory = category;
    this.updateVisibleArticles();
  }

  toggleFilters(): void {
    this.filtersVisible = !this.filtersVisible;
  }
}
