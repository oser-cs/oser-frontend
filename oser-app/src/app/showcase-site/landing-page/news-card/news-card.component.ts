import { Component, Input, OnInit } from '@angular/core';
import { News } from '../../shared/news.model';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {

  @Input() news: News;

  constructor() { }

  ngOnInit() {
  }

}
