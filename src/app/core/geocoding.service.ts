import { Injectable } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { Resolve } from '@angular/router';
import { Observable, BehaviorSubject, from } from 'rxjs';
import { filter, map, mergeMap } from 'rxjs/operators';

declare const google: any;

export interface Location {
  lat: number;
  lng: number;
}

export interface Geocoder {
  geocode: (
    opts: {address: string},
    fn: (results: any, status: string) => void,
  ) => void;
}

@Injectable()
export class GeocodingService {

  locate(geocoder: Geocoder, address: string): Observable<Location> {
    return new Observable(obs => {
      geocoder.geocode({address: address}, (results, status) => {
        if (status === 'OK') {
          const loc = results[0].geometry.location;
          obs.next({lat: loc.lat(), lng: loc.lng()});
        } else {
          obs.error('Google was not successful: ' + status);
        }
      });
    });
  }
}

@Injectable()
export class MapsAPIResolver implements Resolve<Geocoder> {

  constructor(private loader: MapsAPILoader) { }

  resolve(): Observable<Geocoder> {
    return from(this.loader.load()).pipe(
      map(() => new google.maps.Geocoder())
    );
  }
}
