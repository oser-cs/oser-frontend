import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AnswersDialogComponent } from '../answers-dialog/answers-dialog.component';
import { Participation, ParticipationService } from '../core';

@Component({
  selector: 'app-my-participations',
  templateUrl: './my-participations.component.html',
  styleUrls: ['./my-participations.component.scss']
})
export class MyParticipationsComponent implements OnInit {

  participations: Participation[];

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private participationService: ParticipationService,
  ) { }

  ngOnInit() {
    this.participations = this.route.snapshot.data['participations'];
  }

  openAnswers(participation: Participation) {
    this.participationService.entry(participation).subscribe(
      form => {
        this.dialog.open(AnswersDialogComponent, { data: { form } });
      }
    );
  }

}
