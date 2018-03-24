import { Pipe, PipeTransform } from '@angular/core';
import * as Fuse from 'fuse.js';

@Pipe({
  name: 'linebreaks'
})
export class LineBreaksPipe implements PipeTransform {
  transform(text: string, repl: string='<br />'): string {
    if (!text) return '';
    const replaced = text.replace(/\n/g, repl);
    return replaced;
  }
}
