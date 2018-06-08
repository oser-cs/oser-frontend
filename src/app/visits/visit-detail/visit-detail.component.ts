import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AuthService, GeocodingService, Location } from 'app/core';
import { Visit, Participant } from '../shared';

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
  private geocoder: any;

  constructor(
    private route: ActivatedRoute,
    private auth: AuthService,
    private geocoding: GeocodingService,
  ) { }

  ngOnInit() {
    this.visit = this.route.snapshot.data['visit'];
    this.geocoder = this.route.snapshot.data['geocoder'];
    this.getUserParticipate();
    this.getVisitLocation();
    this.userId = this.auth.getUser().id;
  }

  getVisitLocation() {
    this.geocoding.locate(this.geocoder, this.visit.address).subscribe(
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

  onParticipate(participant: Participant) {
    this.visit.participants.push(participant);
    this.getUserParticipate();
  }

}
