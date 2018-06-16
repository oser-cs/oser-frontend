import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModelApiService, ObjectListResolver, ObjectResolver } from 'app/core';
import { Project, ProjectAdapter } from './project.model';


@Injectable({
  providedIn: 'root'
})
export class ProjectService extends ModelApiService<Project> {

  baseUrl = this.apiUrl + 'projects/';
  adapter = new ProjectAdapter();

  constructor(public http: HttpClient) { super(); }
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
  routeLookupKey = 'id';
  constructor(public service: ProjectService) { super(); }
}
