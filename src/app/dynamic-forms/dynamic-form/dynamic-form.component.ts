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

  @Input() form: Form;
  @Input() reset$: Observable<any>;
  @Output() submitted: EventEmitter<FormEntryPayload> = new EventEmitter();

  formGroup: FormGroup;

  subscription = new Subscription();

  constructor(private formService: FormService) { }

  ngOnInit() {
    this.createForm();
    if (this.reset$) {
      this.reset$.subscribe(
        () => this.formGroup.reset()
      );
    }
  }

  createForm() {
    this.formGroup = this.formService.toFormGroup(this.form);
  }

  onSubmit() {
    const payload = this.formService.toAnswersPayload(this.form, this.formGroup);
    this.submitted.emit(payload);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
