import { Pipe, PipeTransform } from '@angular/core';
import * as Fuse from 'fuse.js';

@Pipe({
  name: 'fuzzy'
})
export class FuzzyPipe implements PipeTransform {
  transform(items: any[], searchText: string, keys: any[]): any[] {
    if (!items) return [];
    if (!searchText) return items;
    let options = {
      shouldSort: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: keys,
    };
    let fuse = new Fuse(items, options);
    return fuse.search(searchText);
  }
}
