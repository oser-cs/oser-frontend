import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'environments/environment';
import { PersonnalData,PersonnalDataAdapter } from './personnalData.model';

@Injectable({
  providedIn: 'root',
})
export class PersonnalDataService {

  private baseUrl = environment.apiUrl + 'personnalData/';

  constructor(private http: HttpClient, private adapter: PersonnalDataAdapter) { }

  create(personnalData: PersonnalData): Observable<any> {
    const body: any = this.adapter.encode(personnalData);
    
    return this.http.post(this.baseUrl, body);
  }

}
