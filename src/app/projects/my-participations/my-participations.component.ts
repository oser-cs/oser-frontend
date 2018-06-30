import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Subscription } from 'rxjs';
import { filter, mergeMap, tap, map } from 'rxjs/operators';
import { AnswersDialogComponent } from '../answers-dialog/answers-dialog.component';
import { DocumentsDialogComponent } from '../documents-dialog/documents-dialog.component';
import { EditionContactDialogComponent } from '../edition-contact-dialog/edition-contact-dialog.component';
import { UnregisterDialogComponent } from '../unregister-dialog/unregister-dialog.component';
import { Participation, ParticipationService, EditionService } from '../core';

@Component({
  selector: 'app-my-participations',
  templateUrl: './my-participations.component.html',
  styleUrls: ['./my-participations.component.scss']
})
export class MyParticipationsComponent implements OnInit, OnDestroy {

  participations: Participation[];
  sub = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private participationService: ParticipationService,
    private editionService: EditionService,
    private snackBar: MatSnackBar,
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

  openUnregister(participation: Participation) {
    this.editionService.retrieve(participation.editionId).subscribe(
      edition => {
        const dialogRef = this.dialog.open(UnregisterDialogComponent, {
          data: { edition },
        });
        const sub = dialogRef.afterClosed().pipe(
          // Only if user has confirmed
          filter(result => result),
          // Delete the participation
          mergeMap(() => this.participationService.destroy(participation.id)),
          // Remove the participation from the participations list
          tap(() => this.participations.splice(this.participations.indexOf(participation), 1)),
          // Open a confirmation snackbar
          map(() => `Tu t'es désinscrit de ${edition.project} ${edition.year}.`),
          tap((message) => this.snackBar.open(message, 'OK', { duration: 4000 })),
        ).subscribe();
        this.sub.add(sub);
      }
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
