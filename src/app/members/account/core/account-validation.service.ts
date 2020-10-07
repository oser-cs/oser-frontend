import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resolve,ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of, forkJoin } from 'rxjs';
import { tap, map, filter,catchError } from 'rxjs/operators';
import { ApiService, AuthService,} from 'app/core';


@Injectable({
  providedIn: 'root'
})
export class AccountValidationService extends ApiService {

  //api url
  private baseUrl = this.apiUrl + 'validation';

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { super();  }

  //get personalData by user
   get(filters: any): Observable<String> {
    const url = this.baseUrl;
    return this.http.get(url, { params: filters }).pipe(
      map((data: any) => {
        
        return data}),
    );
  }
  retrieve(id: number | string): Observable<String> {
    let url = this.baseUrl;
    return this.http.get<String>(url).pipe(
      map(v =>{
        if(v instanceof Array){
          if (v.length>1){
            return v.find((user)=>user.user_id===id)
          }
          return  v[0]
        }
        
        }),
    );
  }

  forUser(userId: number): Observable<String> {
    return this.get({ user_id: String(userId)});
  }  
}

@Injectable({
    providedIn: 'root'
  })
export class AccountValidationResolver implements Resolve<String>{
    
    constructor(private service: AccountValidationService, private auth: AuthService) { }
  //fetch user
  
    resolve(route: ActivatedRouteSnapshot): Observable<String> {
      const user = this.auth.getUserSnapshot();
      return this.service.retrieve(user.id).pipe(
        catchError(e => of(null))
      );
    
  }
}


