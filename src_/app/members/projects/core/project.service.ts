import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModelApiService, ObjectListResolver, ObjectResolver } from 'app/core';
import { Project, ProjectAdapter, ProjectSimpleAdapter } from './project.model';


@Injectable({
  providedIn: 'root'
})
export class ProjectService extends ModelApiService<Project> {

  baseUrl = this.apiUrl + 'projects/';

  constructor(public http: HttpClient) { super(); }

  getAdapter(action: string) {
    if (action === 'retrieve') {
      return new ProjectAdapter();
    } else {
      return new ProjectSimpleAdapter();
    }
  }
}


@Injectable({
  providedIn: 'root'
})
export class ProjectListResolver extends ObjectListResolver<Project> {
  constructor(public service: ProjectService) { super(); }
}


@Injectable({
  providedIn: 'root'
})
export class ProjectResolver extends ObjectResolver<Project> {
  routeLookupKey = 'projectId';
  constructor(public service: ProjectService) { super(); }
}
