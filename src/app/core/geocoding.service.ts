import { Injectable } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

declare const google: any;

interface Location {
  lat: number;
  lng: number;
}

@Injectable()
export class GeocodingService {

  private geocoder: any;
  ready = false;
  ready$ = new Subject<boolean>();

  constructor(private loader: MapsAPILoader) {
    this.loader.load().then(() => {
      this.geocoder = new google.maps.Geocoder();
      this.ready = true;
      this.ready$.next(true);
    });
  }

  locate(address: string): Observable<Location> {
    return new Observable(obs => {
      this.geocoder.geocode({address: address}, (results, status) => {
        if (status === 'OK') {
          const loc = results[0].geometry.location;
          obs.next({lat: loc.lat(), lng: loc.lng()});
        } else {
          obs.error('Google was not successful: ' + status);
        }
      })
    })
  }

}
