import { Component, OnInit } from '@angular/core';
import { Figure } from '../shared/figure.model';
import { FigureService } from '../shared/figure.service';


@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  figures: Figure[];

  constructor(private figureService: FigureService) { }

  ngOnInit() {
    this.getFigures();
  }

  getFigures(): void {
    this.figureService.getFigures().subscribe(
      (figures) => this.figures = figures,
      (e) => console.log(e)
    );
  }

}
