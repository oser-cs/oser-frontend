import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { MessageType, Message } from './message.model';

@Injectable()
export class MessageService {

  private messageStream$ = new BehaviorSubject<Message>(null);
  private keepAfterNavigationChange = false;

  constructor(private router: Router) {
    // clear messages on route change
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterNavigationChange) {
          // only keep for a single location change
          this.keepAfterNavigationChange = false;
        } else {
          this.clear();
        }
      }
    });
  }

  private addMessage(message: Message) {
    this.messageStream$.next(message);
  }

  success(message: string, keepAfterNavigationChange = false) {
      this.keepAfterNavigationChange = keepAfterNavigationChange;
      this.addMessage({ type: MessageType.SUCCESS, text: message });
  }

  error(message: string, keepAfterNavigationChange = false) {
      this.keepAfterNavigationChange = keepAfterNavigationChange;
      this.addMessage({ type: MessageType.ERROR, text: message });
  }

  stream(): Observable<Message> {
      return this.messageStream$.asObservable();
  }

  clear() {
    this.messageStream$.next(null);
  }

}
