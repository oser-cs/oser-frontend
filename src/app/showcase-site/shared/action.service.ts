import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Action } from './action.model';
import { environment } from 'environments/environment';
import { ObjectListResolver } from 'app/core';


@Injectable({
  providedIn: 'root',
})
export class ActionService {

  private baseUrl = environment.showcaseApiUrl + 'actions/';

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
    return this.http.get<Action>(this.baseUrl).pipe(
      map((data: any) => data.map(this.adapt)),
    );
  }

  listHighlight(): Observable<Action[]> {
    return this.list().pipe(
      map(actions => actions.filter(action => action.highlight))
    );
  }
}

@Injectable({
  providedIn: 'root',
})
export class ActionsResolver extends ObjectListResolver<Action> {
  constructor(public service: ActionService) {super();}
}
