import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { SimpleListResolver } from 'app/core';


@Injectable()
export class CategoriesResolver extends SimpleListResolver<string> {

  name = 'categories';
  url = environment.showcaseApiUrl + 'categories/';

  adapt(item: any): string {
    return item.title;
  }
}
