export class Visit {
  id: number;
  title: string;
  description: string;
  place: string;
  date: Date;
  image: string;

  constructor(obj) {
    for (const k of Object.keys(obj)) { this[k] = obj[k]; }
  }
}
