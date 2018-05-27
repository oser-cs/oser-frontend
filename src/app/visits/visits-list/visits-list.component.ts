import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { map } from 'rxjs/operators';
import { AuthService } from 'app/core';
import { Visit, VisitService } from '../shared/';

@Component({
  selector: 'app-visits-list',
  templateUrl: './visits-list.component.html',
  styleUrls: ['./visits-list.component.scss']
})
export class VisitsListComponent implements OnInit {

  visits: Visit[];
  _passed = false;
  userVisits$ = new BehaviorSubject<Visit[]>([]);
  sub: Subscription = new Subscription();

  constructor(
    private visitService: VisitService,
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.visits = this.route.snapshot.data['visits'];
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

  userParticipates(visit: Visit): Observable<boolean> {
    return this.userVisits$.pipe(
      map(userVisits => userVisits.map(v => v.id).includes(visit.id))
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
