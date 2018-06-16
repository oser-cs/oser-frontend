import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DynamicFormComponent,
  ],
  exports: [
    DynamicFormComponent,
  ]
})
export class DynamicFormsModule { }
