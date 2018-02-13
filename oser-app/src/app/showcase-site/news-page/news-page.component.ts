import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Filter, FilterGroup } from './filters';
import { News } from '../news';
import { NEWS } from '../mock-news';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {

  filterGroups: FilterGroup[] = [
    {
      name: "Année",
      filters: [
        { name: "2018" },
        { name: "2017" },
        { name: "2016" },
      ]
    },
    {
      name: "Catégories",
      filters: [
        { name: "Focus Europe" },
        { name: "Stage Théâtre" },
        { name: "(Art)cessible" },
        { name: "Oser la Prépa" },
        { name: "Carnets de France" },
        { name: "Good Morning London" },
        { name: "Tutorat" },
        { name: "Sorties" },
        { name: "Annonces" },
      ]
    }
  ];
  // RxJS subject = observable + observer;
  searchTerm$ = new Subject<string>();

  // TODO implement filtering

  news: News[];

  constructor() { }

  ngOnInit() {
    this.getNews();
    // TODO implement real search using a SearchService
    // Use: https://alligator.io/angular/real-time-search-angular-rxjs/
    this.searchTerm$.subscribe(
      (value) => console.log('Searching: ' + value),
      (e) => console.log(e)
    );
  }

  getNews(): void {
    this.news = NEWS;
  }


}
