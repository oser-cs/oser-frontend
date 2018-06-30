import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AnswersDialogComponent } from '../answers-dialog/answers-dialog.component';
import { DocumentsDialogComponent } from '../documents-dialog/documents-dialog.component';
import { EditionContactDialogComponent } from '../edition-contact-dialog/edition-contact-dialog.component';
import { Participation, ParticipationService, EditionService } from '../core';

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
    private editionService: EditionService,
  ) { }

  ngOnInit() {
    this.participations = this.route.snapshot.data['participations'];
  }

  openAnswers(participation: Participation) {
    this.participationService.entry(participation).subscribe(
      form => this.dialog.open(AnswersDialogComponent, {
        data: { form },
      })
    );
  }

  openDocuments(participation: Participation) {
    this.editionService.documents(participation.editionId).subscribe(
      result => {
        this.dialog.open(DocumentsDialogComponent, {
          data: {
            editionId: participation.editionId,
            documents: result.documents,
            deadline: result.deadline,
            recipient: result.recipient,
          },
        });
      }
    );
  }

  openContact(participation: Participation) {
    this.editionService.retrieve(participation.editionId).subscribe(
      edition => this.dialog.open(EditionContactDialogComponent, {
        data: { edition },
      })
    );
  }

}
