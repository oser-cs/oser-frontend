import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { tap, map, filter, find, first } from 'rxjs/operators';
import { AuthService } from 'app/core';
import { Visit, VisitService, Participant } from '../shared/';

@Component({
  selector: 'app-visits-list',
  templateUrl: './visits-list.component.html',
  styleUrls: ['./visits-list.component.scss']
})
export class VisitsListComponent implements OnInit {

  visits: Visit[];
  _passed = false;
  participations$ = new BehaviorSubject<Participant[]>(null);
  sub: Subscription = new Subscription();
  userId: number;

  constructor(
    private visitService: VisitService,
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.userId = this.auth.getUserSnapshot().id;
    this.visits = this.route.snapshot.data['visits'];
    const participations = [].concat(...this.visits.map(v => v.participants));
    this.participations$.next(participations);
    this.sub.add(this.route.fragment.subscribe(
      fragment => {
        if (fragment === 'past') {
          this._passed = true;
        } else if (fragment === 'next') {
          this._passed = false;
        }
      }
    ));
  }

  get passed(): boolean {
    return this._passed;
  }

  set passed(passed: boolean) {
    this._passed = passed;
    let opts: any = { relativeTo: this.route };
    if (passed) {
      opts.fragment = 'past';
    } else {
      opts.fragment = 'next';
    }
    this.router.navigate(['./'], opts);
  }

  userParticipant(visit: Visit): Observable<Participant> {
    return this.participations$.pipe(
      map(ps => ps.filter(p => p.visitId === visit.id)),
      map(ps => ps.filter(p => p.user.id === this.userId)),
      map(ps => ps[0]),
    );
  }

  get displayedVisits(): Visit[] {
    if (!this.visits) return [];
    return this.visits.filter(visit => visit.passed === this.passed);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
