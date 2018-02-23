import { Component, OnInit } from '@angular/core';
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
    private articleService: ArticleService
  ) { }

  ngOnInit() {
    let articleId = this.route.snapshot.paramMap.get('id');
    this.articleService.retrieve(articleId).subscribe(
      (article) => this.article$.next(article),
      (e) => console.log(e)
    );
    this.article$.subscribe(
      (article) => {
        this.article = article;
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

  navigate(other: Article): void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

}
