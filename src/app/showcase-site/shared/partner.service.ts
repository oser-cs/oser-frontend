import { Partner } from './partner.model';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { SimpleListResolver } from 'app/core';


@Injectable({
  providedIn: 'root',
})
export class PartnersResolver extends SimpleListResolver<Partner> {

  name = 'partners';
  url = environment.showcaseApiUrl + 'partners/';

  adapt(item: any): Partner {
    return new Partner({
      name: item.name,
      website: item.website,
      logo: item.logo,
      premium: item.premium,
    });
  }
}
