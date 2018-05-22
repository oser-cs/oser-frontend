import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ActivatedRoute } from '@angular/router';
import { AuthService, GeocodingService } from 'app/core';
import { Visit, VisitService, Participant, ParticipantService } from '../shared';

@Component({
  selector: 'app-visit-detail',
  templateUrl: './visit-detail.component.html',
  styleUrls: ['./visit-detail.component.scss']
})
export class VisitDetailComponent implements OnInit {

  visit: Visit;
  lat = 50.350;
  lng = 3.520;
  userId: number;
  userParticipates: boolean = false;
  registerFormActive = false;
  formLoading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private visitService: VisitService,
    private participantService: ParticipantService,
    private auth: AuthService,
    private geocoding: GeocodingService,
  ) { }

  ngOnInit() {
    this.userId = this.auth.getUser().id;
    this.route.paramMap.subscribe(
      params => this.getVisit(params.get('id'))
    );
  }

  getVisitLocation() {
    this.geocoding.locate(this.visit.address).subscribe(
      location => {
        this.lat = location.lat;
        this.lng = location.lng;
      }
    );
  }

  getUserParticipate() {
    this.userParticipates = this.visit.participants.map(
      p => p.user.id
    ).includes(this.userId);
  }

  getVisit(visitId: string | number): void {
    this.visitService.retrieve(visitId).subscribe(
      (visit) => {
        this.visit = visit;
        this.getUserParticipate();
        this.getVisitLocation();
      }
    );
  }

  onParticipate(participant: Participant) {
    this.visit.participants.push(participant);
    this.getUserParticipate();
  }

}
