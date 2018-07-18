import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KeyFigure } from '../shared/keyfigure.model';


@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  keyFigures: KeyFigure[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.keyFigures = this.route.snapshot.data['keyFigures'];
  }

}
