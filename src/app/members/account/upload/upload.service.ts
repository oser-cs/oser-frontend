import { Injectable } from '@angular/core'
import {
  HttpClient,
  HttpRequest,
  HttpEventType,
  HttpResponse,
} from '@angular/common/http'
import { Observable,Subject } from 'rxjs'
import { ApiService } from 'app/core';

 

@Injectable({
  providedIn: 'root'
})
export class UploadService extends ApiService {
  constructor(private http: HttpClient) {super();}
  private url = this.apiUrl + 'upload/' 
  public upload(
    files: Set<File>,
    uploadedFileType : String
  ): { [key: string]: { progress: Observable<number> } } {
    // this will be the our resulting map
    const status: { [key: string]: { progress: Observable<number> } } = {};

    files.forEach(file => {
      // create a new multipart-form for every file
      const formData: FormData = new FormData();
      formData.append('fichier', file, file.name);

      // create a http-post request and pass the form
      // tell it to report the upload progress
      console.log('url',this.url+uploadedFileType)
      const req = new HttpRequest('POST', this.url+uploadedFileType, formData, {
        reportProgress: true
      });

      // create a new progress-subject for every file
      const progress = new Subject<number>();

      // send the http-request and subscribe for progress-updates
      this.http.request(req).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {

          // calculate the progress percentage
          const percentDone = Math.round(100 * event.loaded / event.total);

          // pass the percentage into the progress-stream
          progress.next(percentDone);
        } else if (event instanceof HttpResponse) {

          // Close the progress-stream if we get an answer form the API
          // The upload is complete
          progress.complete();
        }
      });

      // Save every progress-observable in a map of all observables
      status[file.name] = {
        progress: progress.asObservable()
      };
    });

    // return the map of progress.observables
    return status;
  }
}