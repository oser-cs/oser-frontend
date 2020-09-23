import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resolve,ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of, forkJoin } from 'rxjs';
import { tap, map, filter,catchError } from 'rxjs/operators';
import { ApiService, AuthService,} from 'app/core';
import {PersonalDataAdapter,PersonalData} from './personal-data.model'


@Injectable({
  providedIn: 'root'
})
export class PersonalDataService extends ApiService {

  //api url
  private baseUrl = this.apiUrl + 'students';
  private adapter = new PersonalDataAdapter();

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { super();  }

  //get personalData by user
   get(filters: any): Observable<PersonalData> {
    const url = this.baseUrl;
    return this.http.get(url, { params: filters }).pipe(
      map((data: any) => {
        
        return data.map(item => this.adapter.adapt(item))}),
    );
  }
  retrieve(id: number | string): Observable<PersonalData> {
    let url = this.baseUrl ;
    return this.http.get<PersonalData>(url).pipe(
      map(v =>{
        return  this.adapter.adapt(v[0])}),
    );
  }

  forUser(userId: number): Observable<PersonalData> {
    return this.get({ user_id: String(userId)});
  }
  //edit personalData for a user
  edit(personalData: PersonalData): Observable<any> {
    
    const body: any = this.adapter.encode(personalData);
    return this.http.put(personalData.url, body);
  }  
}

@Injectable({
    providedIn: 'root'
  })
export class PersonalDataResolver implements Resolve<PersonalData>{
    
    constructor(private service: PersonalDataService, private auth: AuthService) { }
  //fetch user
  
    resolve(route: ActivatedRouteSnapshot): Observable<PersonalData> {
      const user = this.auth.getUserSnapshot();
      return this.service.retrieve(user.id).pipe(
        catchError(e => of(null))
      );
    
  }
}


