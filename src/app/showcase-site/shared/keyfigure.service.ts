import { Injectable } from '@angular/core';
import { KeyFigure } from './keyfigure.model';
import { environment } from 'environments/environment';
import { SimpleListResolver } from 'app/core';


@Injectable({
  providedIn: 'root',
})
export class KeyFiguresResolver extends SimpleListResolver<KeyFigure> {

  name = 'key figures';
  url = environment.showcaseApiUrl + 'keyfigures/';

  adapt(item: any): KeyFigure {
    return new KeyFigure({
      value: item.figure,
      text: item.description,
    });
  }
}
