import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Edition, EditionService } from '../core';
import { DynamicFormComponent, FormEntryPayload } from 'app/dynamic-forms';
import { MatStepper } from '@angular/material';

@Component({
  selector: 'app-register-wizard',
  templateUrl: './register-wizard.component.html',
  styleUrls: ['./register-wizard.component.scss']
})
export class RegisterWizardComponent implements OnInit {

  editions: Edition[];
  edition: Edition;
  dynamicFormValue: FormEntryPayload;
  @ViewChild(DynamicFormComponent) editionForm: DynamicFormComponent;
  @ViewChild('stepper') stepper: MatStepper;

  formGroup: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private editionService: EditionService,
  ) { }

  ngOnInit() {
    this.editions = this.route.snapshot.data['editions'];
    this.initForms();
  }

  initForms() {
    this.formGroup = new FormGroup({
      project: new FormGroup({
        editionId: new FormControl(null, Validators.required),
      }),
      documents: new FormGroup({
        downloaded: new FormControl(false, Validators.required),
      }),
    });
  }

  loadForm() {
    this.editionService.retrieve(this.formGroup.value.project.editionId).subscribe(
      edition => {
        this.edition = edition;
        this.editionForm.form = edition.editionForm.form;
      },
      e => console.log(e),
    );
  }

  onSubmitForm() {
    this.saveFormValue();
    this.stepper.next();
  }

  saveFormValue() {
    this.dynamicFormValue = this.editionForm.value;
  }

  onChangeStep(stepperSelectionEvent) {
    if (stepperSelectionEvent.previouslySelectedIndex === 0 && stepperSelectionEvent.selectedIndex === 1) {
      this.loadForm();
    }
  }

}
