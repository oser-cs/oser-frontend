import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Question } from '../core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {

  @Input() question: Question;
  @Input() formGroup: FormGroup;

}
