import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string, options: any): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();

    const hasText = (v) => v.toLowerCase().includes(searchText);

    return items.filter(it => {
      if (options.fields) {
        // look for any property in item that has searchText
        return options.fields.some((field) => hasText(it[field]));
      }
      else return hasText(it);
    });
  }
}
