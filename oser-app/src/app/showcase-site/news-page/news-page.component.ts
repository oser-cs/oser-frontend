import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Filter } from '../shared/filter.model';
import { FILTERS } from '../shared/filter.mock';
import { News } from '../shared/news.model';
import { NewsService } from '../shared/news.service';


@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {

  news: News[];
  filters: Filter[];

  // RxJS subject = observable + observer;
  searchTerm$ = new Subject<string>();

  // TODO implement filtering

  constructor(
    private newsService: NewsService) { }

  ngOnInit() {
    this.getNews();
    this.getFilters();
    // TODO implement real search using a SearchService
    // Use: https://alligator.io/angular/real-time-search-angular-rxjs/
    this.searchTerm$.subscribe(
      (value) => console.log('Searching: ' + value),
      (e) => console.log(e)
    );
  }

  getNews(): void {
    this.newsService.getNews().subscribe(
      (news) => this.news = news,
      (e) => console.log(e)
    );
  }

  getFilters(): void {
    this.filters = FILTERS;
  }


}
