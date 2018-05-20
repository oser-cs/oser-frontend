import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'app/core';
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
  formActive: boolean = false;
  formLoading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private visitService: VisitService,
    private participantService: ParticipantService,
    private auth: AuthService,
  ) { }

  ngOnInit() {
    this.userId = this.auth.getUser().id;
    this.route.paramMap.subscribe(
      params => this.getVisit(params.get('id'))
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
      }, (e) => console.log(e)
    );
  }

  clickModal(e): void {
    if (e.target === document.getElementById('register-form')) {
      this.formActive = false;
    }
  }

  participate(): void {
    this.formLoading = true;
    this.participantService.add(this.visit.id, this.userId).subscribe(
      (participant: Participant) => {
        this.formLoading = false;
        this.formActive = false;
        this.visit.participants.push(participant);
        this.getUserParticipate();
      },
      (e) => console.log(e)
    );
  }

  leave(): void {
    const participant = this.visit.participants.find(
      p => p.user.id === this.userId
    );
    this.participantService.remove(participant).subscribe(
      resp => {
        this.userParticipates = false;
        const index = this.visit.participants.indexOf(participant);
        this.visit.participants.splice(index, 1);
      },
      (e) => console.log(e)
    );
  }

}
