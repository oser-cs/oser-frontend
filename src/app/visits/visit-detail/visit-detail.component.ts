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
  participant: Participant;
  acceptedParticipants = 0;
  registerFormActive = false;
  formLoading: boolean = false;
  leaveFormActive = false;
  private geocoder: any;

  constructor(
    private route: ActivatedRoute,
    private auth: AuthService,
    private geocoding: GeocodingService,
  ) { }

  ngOnInit() {
    this.visit = this.route.snapshot.data['visit'];
    this.geocoder = this.route.snapshot.data['geocoder'];
    this.userId = this.auth.getUser().id;
    this.getParticipant();
    this.getAcceptedParticipants();
    this.getVisitLocation();
  }

  getVisitLocation() {
    this.geocoding.locate(this.geocoder, this.visit.address).subscribe(
      location => {
        this.lat = location.lat;
        this.lng = location.lng;
      }
    );
  }

  getParticipant() {
    this.participant = this.visit.participants.find(
      p => p.user.id === this.userId
    );
  }

  onParticipate(participant: Participant) {
    this.visit.participants.push(participant);
    this.getParticipant();
    this.getAcceptedParticipants();
  }

  getAcceptedParticipants() {
    this.acceptedParticipants = this.visit.participants.filter(
      p => p.accepted
    ).length;
  }

}
