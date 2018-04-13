export class Action {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  keyFigure: string;
  highlight: boolean;

  constructor(options: {
    id: number,
    title: string,
    description: string,
    thumbnail: string,
    keyFigure: string,
    highlight: boolean,
  }) {
    this.id = options.id;
    this.title = options.title;
    this.description = options.description;
    this.thumbnail = options.thumbnail;
    this.keyFigure = options.keyFigure;
    this.highlight = options.highlight;
  }
}
