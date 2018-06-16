import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Form, FormService } from '../core';

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  @Input() form: Form;
  formGroup: FormGroup;

  constructor(private formService: FormService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formService.toFormGroup({form: this.form});
  }

}
