import { Component, Input } from '@angular/core';
import { Form } from '../core';

@Component({
  selector: 'app-form-entry',
  templateUrl: './form-entry.component.html',
  styleUrls: ['./form-entry.component.scss']
})
export class FormEntryComponent {

  @Input() form: Form;

}
