import { Injectable } from '@angular/core';
import { Testimony } from './testimony.model';
import { environment } from 'environments/environment';
import { SimpleListResolver } from 'app/core';


@Injectable({
  providedIn: 'root',
})
export class TestimoniesResolver extends SimpleListResolver<Testimony> {

  name = 'testimonies';
  url = environment.showcaseApiUrl + 'testimonies/';

  adapt(item: any): Testimony {
    return new Testimony({
      content: item.quote,
      source: item.source,
    });
  }
}
