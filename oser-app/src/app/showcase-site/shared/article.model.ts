export class Article {
  title: string;
  content: string;
  date: string;
  src: string;
  pinned: boolean;

  constructor(obj) {
    for (const k of Object.keys(obj)) {
      this[k] = obj[k];
    }
  }

  get preview(): string {
    // Truncate the content to only show the beginning of it.
    return this.content.substring(0, 220) + ' […]';
  }
}
