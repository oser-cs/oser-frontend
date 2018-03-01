import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { KeyFigure } from './keyfigure.model';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import schema from './schema';


@Injectable()
export class KeyFigureService {

  private actions = schema.keyfigure;

  constructor(private http: HttpClient) { }

  // Adapt JSON returned by API to match the KeyFigure interface
  adapt(item: any): KeyFigure {
    return new KeyFigure({
      value: item.figure,
      text: item.description,
    });
  }

  list(): Observable<KeyFigure[]> {
    return this.http.get<KeyFigure>(this.actions.list)
      .pipe(
      map((figures: any) => figures.map(this.adapt)),
      tap(resp => {
        console.log('fetched key figures');
        console.log(resp);
      })
      );
  }

}
