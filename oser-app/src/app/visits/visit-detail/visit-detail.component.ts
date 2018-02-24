import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/observable';
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
  lat = 50.350;
  lng = 3.520;
  userParticipates: boolean = false;
  numParticipants: number = 0;

  constructor(
    private route: ActivatedRoute,
    private visitService: VisitService,
  ) { }

  ngOnInit() {
    let visitId = this.route.snapshot.paramMap.get('id');
    this.visitService.retrieve(visitId).subscribe(
      (visit) => {
        this.visit = visit;
        this.numParticipants = this.visit.participants ? this.visit.participants.length : 0;
      }
    );
  }

  participate(): void {
    this.userParticipates = true;
    this.numParticipants += 1;
  }
  leave(): void {
    this.userParticipates = false;
    this.numParticipants -= 1;
  }

}
