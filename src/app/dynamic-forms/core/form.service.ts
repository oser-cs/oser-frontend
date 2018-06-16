import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Form, Question } from './form.model';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

  toFormGroup(opts: {form?: Form, questions?: Question[]}): FormGroup {
    let group: any = {};
    if (opts.questions) {
      for (const question of opts.questions) {
        group[question.id] = question.required ? new FormControl(null, Validators.required) : new FormControl();
      }
    } else if (opts.form) {
      for (const section of opts.form.sections) {
        group[section.id] = this.toFormGroup({questions: section.questions});
      }
    }
    return new FormGroup(group);
  }
}
