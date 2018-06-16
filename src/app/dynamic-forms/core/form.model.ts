import { IAdapter } from 'app/core';

import slugify from 'slugify';


export class QuestionSchema {
  id: number;
  type: string;
  text: string;
  helpText: string;
  required: boolean;
  sectionId: number;
}


export class Question extends QuestionSchema {

  constructor(args: QuestionSchema) {
    super();
    Object.assign(this, args);
  }

  get key(): string {
    return slugify(this.text, '');
  }
}


export class QuestionAdapter implements IAdapter<Question> {

  adapt(data: any): Question {
    return new Question({
      id: data.id,
      type: data.type,
      text: data.text,
      helpText: data.help_text,
      required: data.required,
      sectionId: data.section,
    })
  }
}


export class SectionSchema {
  id: number;
  title: string;
  questions: Question[];
  formId: number;
}


export class Section extends SectionSchema {

  constructor(args: SectionSchema) {
    super();
    Object.assign(this, args);
  }
}


export class SectionAdapter implements IAdapter<Section> {

  private questionAdapter = new QuestionAdapter();

  adapt(data: any): Section {
    return new Section({
      id: data.id,
      title: data.title,
      questions: data.questions.map(item => this.questionAdapter.adapt(item)),
      formId: data.form,
    })
  }
}


export class FormSchema {
  id: number;
  title: string;
  sections: Section[];
}


export class Form extends FormSchema {

  constructor(args: FormSchema) {
    super();
    Object.assign(this, args);
  }
}


export class FormAdapter implements IAdapter<Form> {

  private sectionAdapter = new SectionAdapter();

  adapt(data: any): Form {
    return new Form({
      id: data.id,
      title: data.title,
      sections: data.sections.map(item => this.sectionAdapter.adapt(item)),
    })
  }
}
