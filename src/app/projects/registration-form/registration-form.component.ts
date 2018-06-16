import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { AuthService } from 'app/core';
import { Project, Edition, Participation, ParticipationService } from '../core';
import { FormEntryPayload } from 'app/dynamic-forms';


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit, OnDestroy {

  project: Project;
  edition: Edition;

  reset$: Subject<void> = new Subject();
  subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private auth: AuthService,
    private participationService: ParticipationService,
    private snackbar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.edition = this.route.snapshot.data['edition'];
    this.project = this.route.snapshot.data['project'];
  }

  onSubmit(entry: FormEntryPayload) {
    const user = this.auth.getUser();
    this.participationService.create(user.id, this.edition.id, entry).subscribe(
      (participation: Participation) => {
        this.openSuccessSnackbar();
        this.reset$.next();
      }
    );
  }

  openSuccessSnackbar() {
    const snackbar = this.snackbar.open('Participation envoyée !', "Voir sur l'API");
    const handle = snackbar.onAction().subscribe(
      () => {
        const url = `http://localhost:8000/api/editions/${this.edition.id}/`;
        const win = window.open(url, '_blank');
        win.focus();
      }
    );
    this.subscription.add(handle);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
