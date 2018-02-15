import { Component, OnInit } from '@angular/core';
import { News } from '../shared/news.model';
import { NewsService } from '../shared/news.service';

class Action {
  title: string;
  src: string;
}

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  actions: Action[] = [
    {
      title: 'Apprendre, comprendre',
      src: 'assets/img/action-apprendre.jpg'
    },
    {
      title: "Découvrir, s'intéresser",
      src: 'assets/img/action-decouvrir.jpg'
    },
    {
      title: "Vivre l'extra-ordinaire",
      src: 'assets/img/action-vivre.jpg'
    }
  ];

  news: News[];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.getNews();
  }

  getNews(): void {
    this.newsService.getFirst(3).subscribe(
      (news) => this.news = news,
      (e) => console.log(e)
    );
  }

}
