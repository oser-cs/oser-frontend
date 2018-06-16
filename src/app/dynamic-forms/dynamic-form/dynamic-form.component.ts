import { Component, OnInit, Input } from '@angular/core';
import { Form } from '../core';

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  @Input() form: Form;

  constructor() { }

  ngOnInit() {
  }

}
