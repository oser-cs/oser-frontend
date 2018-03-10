import { Component, OnInit, Renderer } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subject } from 'rxjs';
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
  article$ = new Subject<Article>();
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
    this.getArticle();
  }

  getArticle() {
    let id = this.route.snapshot.paramMap.get('id');
    this.articleService.retrieve(id).subscribe(
      (article) => this.article$.next(article),
      (e) => console.log(e)
    );
    this.article$.subscribe(
      (article) => {
        // Scroll to top manually
        this.renderer.setElementProperty(document.body, "scrollTop", 0);
        this.article = article;
        // update page title with article's title
        this.titleService.setTitle(
          this.titleService.getTitle() + ' : ' + article.title
        );
        // Get articles related to this article
        this.articleService.list().subscribe(
          (articles) => this.relatedArticles = articles.filter(a => {
            let intersection = new Set(
              this.article.categories.filter(x => a.categories.includes(x)));;
            return intersection.size > 0;
          }).slice(0, this.numRelatedArticles),
          (e) => console.log(e)
        );
      }
    );
  }

  navigate(other: Article) {
    this.router.navigate(['../', other.id], {relativeTo: this.route});
    // We stay on the same route so the component is the same and will not be
    // initialized again. We must trigger a refresh of the article
    // and scroll to top manually.
    this.getArticle();
  }
}
