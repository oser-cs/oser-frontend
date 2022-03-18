import * as removeMd from 'remove-markdown';

export class Article {
  id: number;
  slug: string;
  title: string;
  introduction: string;
  content: string;
  published: Date;
  modified: Date;
  image: string;
  displayImage: boolean;
  pinned: boolean;
  categories: string[];

  constructor(options: {
    id: number,
    slug: string,
    title?: string,
    introduction?: string,
    content?: string,
    published?: Date,
    modified?: Date,
    image?: string,
    displayImage?: boolean,
    pinned?: boolean,
    categories?: string[],
  }) {
    this.id = options.id;
    this.slug = options.slug;
    this.title = options.title || '';
    this.introduction = options.introduction || '';
    this.content = options.content || '';
    this.published = options.published;
    this.modified = options.modified;
    this.image = options.image;
    this.displayImage = options.displayImage;
    this.pinned = options.pinned || false;
    this.categories = options.categories || [];
  }

  previewLength: number = 220;

  get preview(): string {
    let preview: string;
    // Prepend introduction to content if present
    const source: string = this.introduction ? this.introduction + ' ' + this.content : this.content;
    if (source.length > this.previewLength) {
      // Truncate the content to only show the beginning of it.
      preview = source.substring(0, this.previewLength) + ' […]';
    } else {
      preview = source;
    }
    // Strip any Markdown formatting
    return removeMd(preview);
  }
}
