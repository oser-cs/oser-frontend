import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/observable';
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

  constructor(
    private route: ActivatedRoute,
    private visitService: VisitService,
    private auth: AuthService,
  ) { }

  ngOnInit() {
    this.userId = this.auth.getUser().user.id;
    let visitId = this.route.snapshot.paramMap.get('id');
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
          }
        );
      }
    );
  }

  participate(): void {
    this.visitService.addParticipant(this.visit.id, this.userId).subscribe(
      (resp) => {this.userParticipates = true;}
    );
  }
  leave(): void {
    this.visitService.removeParticipant(this.visit.id, this.userId).subscribe(
      resp => { this.userParticipates = false},
      (e) => console.log(e)
    );
  }

}
