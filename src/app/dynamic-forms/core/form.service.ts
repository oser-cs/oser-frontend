import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Form, Question } from './form.model';


interface AnswerPayload {
  question: number;
  answer: string;
}

export interface FormEntryPayload {
  form: number;
  answers: AnswerPayload[];
}


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
    console.log(formGroup);
    return formGroup;
  }

  toAnswersPayload(form: Form, formGroup: FormGroup): FormEntryPayload {
    const value: any = formGroup.value;
    const payload: FormEntryPayload = {
      form: form.id,
      answers: [],
    };
    // Add an answer for each question in the form group
    Object.keys(value).forEach(questionId => {
      payload.answers.push({
        question: +questionId,
        answer: String(value[questionId]),
      });
    });
    return payload;
  }
}
