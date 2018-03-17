export class KeyFigure {
  value: number;
  text: string;

  constructor(obj) {
    for (const k of Object.keys(obj)) { this[k] = obj[k]; }
  }
}
