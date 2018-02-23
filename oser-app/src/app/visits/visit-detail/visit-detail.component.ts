import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VisitService } from '@app/visits/shared';
import { Visit } from '@app/visits/shared';

@Component({
  selector: 'app-visit-detail',
  templateUrl: './visit-detail.component.html',
  styleUrls: ['./visit-detail.component.scss']
})
export class VisitDetailComponent implements OnInit {

  visit: Visit;

  constructor(
    private route: ActivatedRoute,
    private visitService: VisitService,
  ) { }

  ngOnInit() {
    let visitId = this.route.snapshot.paramMap.get('id');
    this.visitService.retrieve(visitId).subscribe(
      (visit) => this.visit = visit
    );
  }

}
