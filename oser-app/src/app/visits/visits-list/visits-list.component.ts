import { Component, OnInit } from '@angular/core';
import { VisitService } from '../shared/visit.service';
import { Visit } from '../shared/visit.model';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '@app/core';

@Component({
  selector: 'app-visits-list',
  templateUrl: './visits-list.component.html',
  styleUrls: ['./visits-list.component.scss']
})
export class VisitsListComponent implements OnInit {

  visits: Visit[] = [];
  nextVisits: Visit[] = [];
  userVisits: Visit[] = [];
  userVisits$ = new Subject<Visit[]>();

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
        (visits) => obs.next(visits.map(v => v.id).includes(visit.id))
      );
    });
  }

  getVisits(): void {
    this.visitService.list().subscribe(
      (visits) => {
        // save list of visits
        this.visits = visits;
        // compute list of upcoming visits
        this.nextVisits = this.visits.filter(visit => !visit.passed);
        // get visits of user
        let user = this.auth.getUser().user;
        this.visitService.visitsOf(user.id).subscribe(
          (visits) => {
            this.userVisits$.next(visits);
          },
          (e) => console.log(e)
        );
        this.userVisits$.subscribe(
          (visits) => this.userVisits = visits,
          e => console.log(e)
        );
      },
      (e) => console.log(e)
    );
  }
}
