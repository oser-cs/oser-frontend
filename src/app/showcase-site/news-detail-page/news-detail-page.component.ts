import { Component, OnInit, Renderer } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Article, ArticleService } from '../shared';

@Component({
  selector: 'app-news-detail-page',
  templateUrl: './news-detail-page.component.html',
  styleUrls: ['./news-detail-page.component.scss']
})
export class NewsDetailPageComponent implements OnInit {

  article: Article;
  articles: Article[] = [];
  relatedArticles: Article[];
  numRelatedArticles: number = 4;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title,
  ) { }

  ngOnInit() {
    this.article = this.route.snapshot.data['article'];
    this.articles = this.route.snapshot.data['articles'];
    this.relatedArticles = this.getRelatedArticles(this.article);
    this.titleService.setTitle(
      this.titleService.getTitle() + ' : ' + this.article.title
    );
  }

  getRelatedArticles(article: Article): Article[] {
    return this.articles.filter(a => {
      // The current article is not considered as related
      if (a.id === this.article.id) return false;
      // Related articles are those that have at least one category
      // in common with this article.
      let commonCategories = new Set(
        this.article.categories.filter(
          category => a.categories.includes(category)
        )
      );
      return commonCategories.size > 0;
    }).slice(0, this.numRelatedArticles);
  }

  navigate(other: Article) {
    // Don't navigate if it is actually the same article
    if (other.id === this.article.id) return;
    // Forget the old article
    this.article = null;
    // Navigate to trigger the fetch of a new article
    this.router.navigate(['../', other.id], {relativeTo: this.route});
  }
}
