import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import { Partner } from './partner.model';
import { environment } from '@environments/environment';


@Injectable()
export class PartnerService {

  private baseUrl = environment.apiUrl + 'partners/';

  constructor(private http: HttpClient) {}

  adapt(item: any): Partner {
    return new Partner({
      name: item.name,
      website: item.website,
      logo: item.logo,
      premium: item.premium,
    });
  }

  list(): Observable<Partner[]> {
    return this.http.get(this.baseUrl).pipe(
      map((partners: any) => partners.map(this.adapt)),
      tap(resp => console.log('fetched partners')),
    );
  }

}
