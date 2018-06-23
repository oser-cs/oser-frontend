import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Form, Question, FormEntryPayload } from './form.model';


@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

  private toRawFormGroup(questions: Question[]): any {
    const group: any = {};
    questions.forEach(question => {
      group[question.id] = question.required ? new FormControl(null, Validators.required) : new FormControl();
    });
    return group;
  }

  // Return a flat FormGroup object with all questions from all sections
  // Key is the question ID, value is a FormControl object
  toFormGroup(form: Form): FormGroup {
    let group: any = {};
    form.sections.forEach(section => {
      Object.assign(group, this.toRawFormGroup(section.questions));
    });
    const formGroup = new FormGroup(group);
    return formGroup;
  }

  setAnswers(form: Form, formGroup: FormGroup) {
    const value: any = formGroup.value;
    form.sections.forEach(section => {
      section.questions.forEach(question => {
        question.answer = value[question.id];
      });
    });
  }
}
