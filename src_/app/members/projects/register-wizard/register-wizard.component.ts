import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'app/core';
import { Edition, EditionService, ParticipationService } from '../core';
import { DynamicFormComponent, Form } from 'app/dynamic-forms';
import { MatStepper, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-register-wizard',
  templateUrl: './register-wizard.component.html',
  styleUrls: ['./register-wizard.component.scss']
})
export class RegisterWizardComponent implements OnInit {

  editions: Edition[];
  edition: Edition;
  initialEditionId: number;
  form: Form;
  @ViewChild(DynamicFormComponent) editionForm: DynamicFormComponent;
  @ViewChild('stepper') stepper: MatStepper;
  formSent = false;
  loading = false;

  formGroup: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private auth: AuthService,
    private editionService: EditionService,
    private participationService: ParticipationService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.editions = this.route.snapshot.data['editions'];
    this.initForms();
  }

  private initForms() {
    this.formGroup = new FormGroup({
      project: new FormGroup({
        editionId: new FormControl(null, Validators.required),
      }),
      documents: new FormGroup({}),
    });
  }

  private loadForm() {
    this.editionService.retrieve(this.formGroup.value.project.editionId).subscribe(
      edition => {
        this.edition = edition;
        this.editionForm.form = edition.editionForm.form;
        if (this.editionForm.form.files.length >= 0) {
          this.formGroup.controls.documents['downloaded'] = new FormControl(false, Validators.required);
        }
      },
      e => console.log(e),
    );
  }

  onEditionFormSubmitted() {
    this.form = this.editionForm.form;
    this.stepper.next();
  }

  register() {
    if (!this.formSent) {
      const userId = this.auth.getUserSnapshot().id;
      this.loading = true;
      this.participationService.create(userId, this.edition.id, this.form).subscribe(
        (participation) => {
          this.loading = false;
          this.formSent = true;
          this.stepper.next();
          // Open a confirmation snackbar
          const message = `Demande d'inscription envoyée. Tu recevras bientôt un email de confirmation.`;
          this.snackBar.open(message, 'OK', { duration: 3000 });
        },
        e => {
          this.loading = false;
          console.log(e);
          // TODO Notify that something went wrong
        }
      );
    } else {
      this.stepper.next();
    }
  }

  onChangeStep(stepperSelectionEvent) {
    const current = stepperSelectionEvent.selectedIndex;
    const previous = stepperSelectionEvent.previouslySelectedIndex;
    // When going to the 'select' step, record the current edition ID
    if (current === 0) {
      this.initialEditionId = this.formGroup.value.project.editionId;
    }
    // When switching to the 'form' step, only load the edition's form if the
    // edition has changed
    if (previous === 0 && current === 1) {
      const editionChanged = this.formGroup.value.project.editionId !== this.initialEditionId
      if (editionChanged) {
        this.loadForm();
      }
    }
    if (previous === 1 && current === 2) {
      this.editionForm.save();
      this.form = this.editionForm.form;
    }
  }

  get downloadUrl(): string {
    return this.editionService.getDownloadUrl(this.edition.id);
  }

}
