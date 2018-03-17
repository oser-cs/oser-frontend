export class Testimony {
  content: string;
  source: string;

  constructor(obj) {
    for (const k of Object.keys(obj)) { this[k] = obj[k]; }
  }
}
