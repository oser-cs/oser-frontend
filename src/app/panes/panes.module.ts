import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwoPanesComponent } from './two-panes/two-panes.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TwoPanesComponent,
  ],
  exports: [
    TwoPanesComponent,
  ]
})
export class PanesModule { }
