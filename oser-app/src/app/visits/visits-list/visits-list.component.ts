import { Component, OnInit } from '@angular/core';
import { VisitService } from '../shared/visit.service';
import { Visit } from '../shared/visit.model';

@Component({
  selector: 'app-visits-list',
  templateUrl: './visits-list.component.html',
  styleUrls: ['./visits-list.component.scss']
})
export class VisitsListComponent implements OnInit {

  visits: Visit[] = [];
  nextVisits: Visit[] = [];

  constructor(private visitService: VisitService) { }

  ngOnInit() {
    this.getVisits();
  }

  getVisits(): void {
    this.visitService.list().subscribe(
      (visits) => {
        this.visits = visits;
        this.nextVisits = this.visits.filter(visit => !visit.passed);
      },
      (e) => console.log(e)
    );
  }
}
