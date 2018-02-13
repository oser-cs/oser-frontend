import { Component, OnInit } from '@angular/core';
import { News } from '../news';
import { NEWS } from '../mock-news';

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

  constructor() {
    this.getNews();
  }

  getNews(): void {
    // Get the last 3 news
    this.news = NEWS.slice(0, 3);
  }

  ngOnInit() {
  }

}
