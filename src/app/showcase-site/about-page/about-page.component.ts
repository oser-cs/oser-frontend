import { Component, OnInit } from '@angular/core';
import { KeyFigure } from '../shared/keyfigure.model';
import { KeyFigureService } from '../shared/keyfigure.service';


@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  keyFigures: KeyFigure[];

  constructor(private keyFigureService: KeyFigureService) { }

  ngOnInit() {
    this.getKeyFigures();
  }

  getKeyFigures(): void {
    this.keyFigureService.list().subscribe(
      (keyFigures) => this.keyFigures = keyFigures
    );
  }

}
