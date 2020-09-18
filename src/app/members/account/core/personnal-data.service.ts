import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resolve } from '@angular/router';
import { Observable, of, forkJoin } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';
import { ApiService, AuthService,} from 'app/core';
import {PersonnalDataAdapter,PersonnalData} from './personnal-data.model'


@Injectable({
  providedIn: 'root'
})
export class PersonnalDataService extends ApiService {

  //api url
  private baseUrl = this.apiUrl + 'students';
  private adapter = new PersonnalDataAdapter();

  constructor(
    private http: HttpClient,
  ) { super(); console.log(this.baseUrl) }

  //get personnalData by user
   get(filters: any): Observable<PersonnalData> {
    const url = this.baseUrl;
    return this.http.get(url, { params: filters }).pipe(
      map((data: any) => {
        console.log()
        return data.map(item => this.adapter.adapt(item))}),
    );
  }

  forUser(userId: number): Observable<PersonnalData> {
    return this.get({ user: String(userId)});
  }
  //edit personnalData for a user
  edit(personnalData: PersonnalData): Observable<any> {
    const body: any = this.adapter.encode(personnalData);
    return this.http.post(this.baseUrl, body);
  }  
}

@Injectable({
    providedIn: 'root'
  })
export class PersonnalDataResolver implements Resolve<PersonnalData>{
    
    constructor(private service: PersonnalDataService, private auth: AuthService) { }
  //fetch user
  resolve() {
    const user = this.auth.getUserSnapshot();
    return this.service.forUser(user.id);
  }
}


