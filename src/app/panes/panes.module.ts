import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwoPanesComponent } from './two-panes/two-panes.component';
import { PaneComponent } from './pane/pane.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TwoPanesComponent,
    PaneComponent,
  ],
  exports: [
    TwoPanesComponent,
    PaneComponent,
  ]
})
export class PanesModule { }
