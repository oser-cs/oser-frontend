import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { KeyFigure } from './keyfigure.model';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Config } from '@app/config';


@Injectable()
export class KeyFigureService {

  private baseUrl: string;

  constructor(private _config: Config, private http: HttpClient) {
    this.baseUrl = _config.get('apiUrl') + 'keyfigures/';
  }

  // Adapt JSON returned by API to match the KeyFigure interface
  adapt(item: any): KeyFigure {
    return new KeyFigure({
      value: item.figure,
      text: item.description,
    });
  }

  list(): Observable<KeyFigure[]> {
    return this.http.get<KeyFigure>(this.baseUrl)
      .pipe(
      map((figures: any) => figures.map(this.adapt)),
      tap(resp => console.log('fetched key figures'))
      );
  }

}
