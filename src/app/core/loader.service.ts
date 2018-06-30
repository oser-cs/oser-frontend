import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';


@Injectable()
export class LoaderService {

  public loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  public loading(): Observable<boolean> {
    return this.loading$.asObservable().pipe(
      // Prevent having multiple false's or multiple true's
      distinctUntilChanged(),
      // Add a small debounce time
      debounceTime(10),
    );
  }

}
