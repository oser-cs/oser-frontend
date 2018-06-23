import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Form, FormService, FormEntryPayload, } from '../core';

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit, OnDestroy {

  _form: Form;

  get form(): Form {
    return this._form;
  }

  @Input('form') set form(form: Form) {
    this._form = form;
    this.createForm();
  }
  @Input() reset$: Observable<any>;
  @Input() submitButton = true;
  @Input() submitLabel = 'Envoyer';
  @Output() submitted: EventEmitter<Form> = new EventEmitter();

  formGroup: FormGroup;

  subscription = new Subscription();

  constructor(private formService: FormService) { }

  ngOnInit() {
    if (this.reset$) {
      this.reset$.subscribe(
        () => this.formGroup && this.formGroup.reset()
      );
    }
  }

  private createForm() {
    if (this.form) {
      this.formGroup = this.formService.toFormGroup(this.form);
    } else {
      this.formGroup = null;
    }
  }

  save() {
    this.formService.setAnswers(this.form, this.formGroup);
  }

  onSubmit() {
    this.save();
    this.submitted.emit(this.form);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
