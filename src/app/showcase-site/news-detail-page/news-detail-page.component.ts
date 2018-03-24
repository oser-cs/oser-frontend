import { Component, OnInit, Renderer } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../shared/article.model';
import { ArticleService } from '../shared/article.service';

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
    private articleService: ArticleService,
    private titleService: Title,
    private renderer: Renderer,
  ) { }

  ngOnInit() {
    // NOTE: We must avoid race conditions between the fetch of articles and
    // the subscription to the route parameters.
    // That's why we use flatMap() to be able to store articles and return
    // and observable to the route parameters.
    this.articleService.list().flatMap(articles => {
      this.articles = articles;
      return this.route.paramMap;
    }).subscribe(
      params => {
        const id = params.get('id');
        this.articleService.retrieve(id).subscribe(
          (article) => {
            // Scroll to top manually
            this.renderer.setElementProperty(document.body, "scrollTop", 0);
            this.article = article;
            // update page title with article's title
            this.titleService.setTitle(
              this.titleService.getTitle() + ' : ' + article.title
            );
            this.relatedArticles = this.getRelatedArticles(this.article);
          },
          (e) => console.log(e)
        );
      },
      e => console.log(e)
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
    if (other.id === this.article.id) return:
    // Forget the old article
    this.article = null;
    // Navigate to trigger the fetch of a new article
    this.router.navigate(['../', other.id], {relativeTo: this.route});
  }
}
