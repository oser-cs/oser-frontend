import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, tap } from 'rxjs/operators';
import { Action } from './action.model';
import { environment } from '@environments/environment';


@Injectable()
export class ActionService {

  private baseUrl = environment.apiUrl + 'actions/';

  constructor(private http: HttpClient) { }

  // Adapt JSON returned by API to match the Action interface
  adapt(item: any): Action {
    return new Action({
      id: item.id,
      title: item.title,
      description: item.description,
      keyFigure: item.key_figure,
      thumbnail: item.thumbnail,
      highlight: item.highlight,
    });
  }

  list(): Observable<Action[]> {
    return this.http.get<Action>(this.baseUrl)
      .pipe(
        map((data: any) => data.map(this.adapt)),
        tap(resp => console.log('fetched actions'))
      );
  }
}