import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@app/core';
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
  userId: number;
  userParticipates: boolean = false;
  numParticipants: number = 0;
  formActive: boolean = false;
  formLoading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private visitService: VisitService,
    private auth: AuthService,
  ) { }

  ngOnInit() {
    this.userId = this.auth.getUser().user.id;
    let visitId = this.route.snapshot.paramMap.get('id');
    this.getVisit(visitId);
  }

  getVisit(visitId: string | number): void {
    this.visitService.retrieve(visitId).subscribe(
      (visit) => {
        this.visit = visit;
        this.numParticipants = this.visit.participants ? this.visit.participants.length : 0;
        // check if user participates in visit
        this.visitService.listParticipantsIDs(this.visit.id).subscribe(
          (ids) => {
            if (ids.filter(id => id == this.userId).length > 0) {
              this.userParticipates = true;
            } else { this.userParticipates = false; }
          }, (e) => console.log(e)
        );
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
    this.visitService.addParticipant(this.visit.id, this.userId).subscribe(
      (resp) => {
        this.formLoading = false;
        this.formActive = false;
        this.userParticipates = true;
        this.numParticipants += 1;
      }, (e) => console.log(e)
    );
  }
  leave(): void {
    this.visitService.removeParticipant(this.visit.id, this.userId).subscribe(
      resp => {
        this.userParticipates = false;
        this.numParticipants -= 1;
      },
      (e) => console.log(e)
    );
  }

}
