import { Component, Input, OnInit } from '@angular/core';
import { News } from '../../news';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {

  @Input() news: News;

  constructor() { }

  ngOnInit() {
  }

}
