import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { AuthService } from 'app/core';
import { Visit, VisitService } from '../shared/';

@Component({
  selector: 'app-visits-list',
  templateUrl: './visits-list.component.html',
  styleUrls: ['./visits-list.component.scss']
})
export class VisitsListComponent implements OnInit {

  visits: Visit[];
  nextVisits: Visit[];
  userVisits$ = new BehaviorSubject<Visit[]>([]);

  constructor(
    private visitService: VisitService,
    private auth: AuthService,
  ) { }

  ngOnInit() {
    this.getVisits();
  }

  userParticipates(visit: Visit): Observable<boolean> {
    return new Observable<boolean>(obs => {
      this.userVisits$.subscribe(
        (userVisits) => obs.next(userVisits.map(v => v.id).includes(visit.id))
      );
    });
  }

  getVisits(): void {
    this.visitService.list().subscribe(
      (visits) => {
        this.visits = visits;
        this.nextVisits = this.visits.filter(visit => !visit.passed);
        let user = this.auth.getUser();
        this.userVisits$.next(this.visits.filter(
          visit => visit.participants.map(p => p.user.id).includes(user.id)
        ));
      }
    );
  }
}
