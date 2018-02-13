import { Component, OnInit } from '@angular/core';

class Figure {
  value: number;
  text: string;
}

const FIGURES: Figure[] = [
  { value: 10, text: "ans d'engagement pour l'égalité des chances" },
  { value: 400, text: "lycéens accompagnés depuis 2014" },
  { value: 70, text: "étudiants tuteurs chaque année" },
  { value: 12, text: "lycées partenaires" },
]

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  figures: Figure[];

  constructor() { }

  ngOnInit() {
    this.getFigures();
  }

  getFigures(): void {
    // TODO convert to FigureService;
    this.figures = FIGURES;
  }

}
