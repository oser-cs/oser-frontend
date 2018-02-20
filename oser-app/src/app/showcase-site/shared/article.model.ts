export class Article {
  id: number;
  title: string;
  content: string;
  date: Date;
  src: string;
  pinned: boolean;
  categories: string[];

  constructor(obj) {
    for (const k of Object.keys(obj)) { this[k] = obj[k]; }
  }

  previewLength: number = 220;

  get preview(): string {
    if (this.content.length > this.previewLength) {
      // Truncate the content to only show the beginning of it.
      return this.content.substring(0, this.previewLength) + ' […]';
    }
    return this.content;
  }
}
