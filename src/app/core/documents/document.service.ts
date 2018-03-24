import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, tap } from 'rxjs/operators';
import { environment } from '@environments/environment';

@Injectable()
export class DocumentService {

  private baseUrl = environment.apiUrl + 'documents/';

  constructor(private http: HttpClient) { }

  adapt(data: any): string {
    // API gives title and content as separate elements, where content
    // is formatted with Markdown.
    // Put them into a single Markdown string.
    const title = data.title;
    const content = data.content;
    return `# ${title}\n\n${content}`;
  }

  get(slug: string): Observable<string> {
    let url = this.baseUrl + `${slug}/`;
    return this.http.get<string>(url).pipe(
      map((data: any) => this.adapt(data)),
      tap(resp => console.log('fetched document'))
    );
  }

}
