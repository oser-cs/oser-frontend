import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThreePanesComponent } from './three-panes/three-panes.component';
import { PaneComponent } from './pane/pane.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ThreePanesComponent,
    PaneComponent,
  ],
  exports: [
    ThreePanesComponent,
    PaneComponent,
  ]
})
export class PanesModule { }
